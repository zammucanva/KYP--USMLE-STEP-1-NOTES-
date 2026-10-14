/**
 * USMLE Phase I pipeline — CHAPTER INVENTORY TOOLING (Phase I-C engine).
 *
 * NOT run for mass generation in Phase I-B. This is the deterministic
 * extraction engine Phase I-C will use, one chapter at a time:
 *
 *   bun scripts/usmle-pipeline/inventory.ts <chapterId> --register
 *       Writes/refreshes content/usmle/chapters/<chapterId>.json as a
 *       "registered" scaffold (chapter identity from the calibrated
 *       registry; zero invented topics).
 *
 *   bun scripts/usmle-pipeline/inventory.ts <chapterId> --scan
 *       Prints the chapter's subsection heading structure extracted from
 *       the PDF text layer (headings + printed page numbers) WITHOUT
 *       writing anything. This is the extraction aid a human/agent uses
 *       to build the topic inventory; topics are authored deliberately,
 *       never auto-generated.
 *
 *   bun scripts/usmle-pipeline/inventory.ts <chapterId> --images
 *       Lists embedded raster images (pdfimages -list) per page of the
 *       chapter — the visual-source inventory aid.
 */

import { spawnSync } from "child_process";
import { CHAPTERS, chapterById, BOOK_PARTS } from "../../src/lib/kyp/usmle/pipeline/schemas";
import { pdfPageText, writeJson, CONTENT, join, ROOT } from "./common";

function bookPage(part: 1 | 2, pdfPage: number): number {
  return pdfPage + BOOK_PARTS[part].bookPageOffset;
}

function register(chapterId: string): void {
  const def = chapterById(chapterId);
  if (!def) {
    console.error(`Unknown chapter "${chapterId}". Registered: ${CHAPTERS.map((c) => c.chapterId).join(", ")}`);
    process.exit(1);
  }
  const chapter = {
    chapterId: def.chapterId,
    chapterTitle: def.chapterTitle,
    number: def.number,
    part: def.pdfRanges[0].part,
    section: def.section,
    pdfRanges: def.pdfRanges,
    bookPages: def.pdfRanges
      .map((r) => `${bookPage(r.part, r.from)}–${bookPage(r.part, r.to)}`)
      .join(" + "),
    extractionStatus: "registered",
    topics: [],
    pendingTopicCount: null,
    notes: "Chapter registered from the calibrated FA 2026 chapter map. Full subsection/topic extraction happens in Phase I-C, chapter by chapter — topics are authored deliberately, never mass-generated.",
  };
  writeJson(join(CONTENT, "chapters", `${def.chapterId}.json`), chapter);
  console.log(`registered ${def.chapterId} (${def.chapterTitle}) — pdf ${def.pdfRanges.map((r) => `P${r.part}:${r.from}-${r.to}`).join(" + ")}, book ${chapter.bookPages}`);
}

/** Heading heuristic for FA pages: the text layer renders section headings
 *  as SHORT ALL-CAPS-ish lines; subsection headers as short lines mixed
 *  case. We print candidates with their printed book page for curation. */
function scan(chapterId: string): void {
  const def = chapterById(chapterId);
  if (!def) {
    console.error(`Unknown chapter "${chapterId}".`);
    process.exit(1);
  }
  console.log(`Section structure — ${def.chapterTitle} (chapter ${def.number}, Section ${def.section})`);
  for (const r of def.pdfRanges) {
    for (let p = r.from; p <= r.to; p++) {
      let text: string;
      try {
        text = pdfPageText(r.part, p);
      } catch {
        break;
      }
      const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
      for (const line of lines) {
        // chapter header line pattern: "▶ SECTIONNAME" or all-caps short lines
        if (line.startsWith("▶") || (line.length <= 48 && line === line.toUpperCase() && /[A-Z]/.test(line) && !/^[0-9]+$/.test(line))) {
          console.log(`  pdf ${String(p).padStart(3)} (book ${bookPage(r.part, p)})  ${line.slice(0, 70)}`);
        }
      }
    }
  }
  console.log("\n(scan only — nothing written; curate topics deliberately in Phase I-C)");
}

function images(chapterId: string): void {
  const def = chapterById(chapterId);
  if (!def) {
    console.error(`Unknown chapter "${chapterId}".`);
    process.exit(1);
  }
  for (const r of def.pdfRanges) {
    const pdf = join(ROOT, BOOK_PARTS[r.part].file);
    const res = spawnSync("pdfimages", ["-list", "-f", String(r.from), "-l", String(r.to), pdf], { encoding: "utf8" });
    if (res.status !== 0) {
      console.error(`pdfimages failed for part ${r.part}: ${res.stderr}`);
      process.exit(1);
    }
    console.log(`\n== ${def.chapterTitle} — part ${r.part}, pdf ${r.from}–${r.to} (book ${bookPage(r.part, r.from)}–${bookPage(r.part, r.to)}) ==`);
    console.log(res.stdout);
  }
}

const [chapterId, mode] = process.argv.slice(2);
if (!chapterId || !mode) {
  console.log("usage: bun scripts/usmle-pipeline/inventory.ts <chapterId> --register|--scan|--images");
  process.exit(1);
}
if (mode === "--register") register(chapterId);
else if (mode === "--scan") scan(chapterId);
else if (mode === "--images") images(chapterId);
else {
  console.error(`unknown mode "${mode}"`);
  process.exit(1);
}
