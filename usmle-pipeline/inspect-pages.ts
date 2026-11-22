/**
 * USMLE Phase I pipeline — TEXTBOOK PAGE INSPECTION AID (visual inventory).
 *
 * Renders source pages of a topic from the supplied First Aid 2026 PDFs
 * (internal authoring/QA use only — renders stay in .usmle-pipeline-cache,
 * never synced or published) and runs the VLM to ENUMERATE every visual
 * element per page. Output is a CURATION AID: the author verifies each
 * item before it becomes a visual-inventory record (contract §3.4).
 *
 * Usage:
 *   bun scripts/usmle-pipeline/inspect-pages.ts <topicId>
 *
 * Topic page specs live in the PAGES table below (from the manifests'
 * sourcePages). Renders → .usmle-pipeline-cache/renders/<topicId>/
 * VLM output → .usmle-pipeline-cache/renders/<topicId>/vlm.json
 */

import { spawnSync } from "child_process";
import { mkdirSync, existsSync, readFileSync, writeFileSync } from "fs";
import { join, resolve } from "path";
import { ROOT, BOOK_PARTS } from "./common";

/** pilot source pages (part → pdf pages), from the approved sourceRefs */
const PAGES: Record<string, { part: 1 | 2; pages: number[] }> = {
  "glycolysis-regulation": { part: 1, pages: [93, 94, 95, 96, 97, 106] },
  sympathomimetics: { part: 1, pages: [262, 263, 264, 265] },
  atherosclerosis: { part: 1, pages: [324, 325, 326] },
  "av-conduction-blocks": { part: 1, pages: [333, 334, 335, 349] },
  "urinary-casts": { part: 2, pages: [204, 205, 206, 211, 212, 213] },
  "stroke-syndromes": { part: 2, pages: [105, 117, 118, 119, 120, 121, 122, 306, 307, 308] },
  "acid-base-physiology": { part: 2, pages: [196, 200, 201, 202, 203, 219] },
  "hypersensitivity-types": { part: 1, pages: [131, 132, 133, 134] },
  "cranial-nerves": { part: 2, pages: [108, 109, 110, 111, 112, 147, 148, 149, 150] },
  "diabetes-mellitus": { part: 1, pages: [101, 371, 372, 373, 374, 380, 381] },
};

const PROMPT = `You are inspecting consecutive pages from First Aid for the USMLE Step 1 2026 (a medical review textbook). Images are given in order; each is one full page.
For EACH page, enumerate EVERY distinct VISUAL element on the page: illustrations, anatomical drawings, pathway/biochemical diagrams, physiology graphs, receptor/pharmacology diagrams, histology/gross/photos, imaging, ECG strips, algorithms, flowcharts, timelines, and TABLES THAT FUNCTION AS VISUAL LEARNING AIDS (dense comparison tables, mnemonics laid out as visual grids). IGNORE: plain body text, simple bullet lists, section headers.
For each element return: page (printed page number if visible, else "unknown"), type (one of: anatomy-illustration, pathway-diagram, physiology-diagram, pharmacology-diagram, receptor-diagram, molecular-structure, pathology-illustration, histology, gross-pathology, radiology, ecg, photo, algorithm, flowchart, table, timeline, graph, other), description (one line: what it shows, including its key labels), labels (true/false — does it carry internal labels).
Respond with STRICT JSON only, shaped: {"pages":[{"page":N,"elements":[{"type":"...","description":"...","labels":true}]}]}. No markdown fences, no commentary.`;

async function main(): Promise<void> {
  const topicId = process.argv[2];
  if (!topicId || !PAGES[topicId]) {
    console.error(`usage: inspect-pages.ts <topicId> — topics: ${Object.keys(PAGES).join(", ")}`);
    process.exit(1);
  }
  const spec = PAGES[topicId];
  const pdf = join(ROOT, BOOK_PARTS[spec.part].file);
  const outDir = resolve(ROOT, ".usmle-pipeline-cache", "renders", topicId);
  mkdirSync(outDir, { recursive: true });

  // render each page
  const pngs: string[] = [];
  for (const p of spec.pages) {
    const out = join(outDir, `p${String(p).padStart(3, "0")}`);
    if (!existsSync(out + ".png")) {
      const res = spawnSync("pdftoppm", ["-png", "-r", "110", "-f", String(p), "-l", String(p), pdf, out]);
      if (res.status !== 0) {
        console.error(`pdftoppm failed for part ${spec.part} page ${p}: ${res.stderr}`);
        process.exit(1);
      }
    }
    // pdftoppm appends -NNN or -N to the prefix
    const cand = [`${out}-${String(p).padStart(3, "0")}.png`, `${out}-${p}.png`, `${out}.png`].find(existsSync);
    if (!cand) {
      console.error(`render not found for page ${p}`);
      process.exit(1);
    }
    pngs.push(cand);
  }
  console.log(`rendered ${pngs.length} pages → ${outDir}`);

  // VLM enumeration (z-ai vision CLI) — reuses a previous successful
  // response, retries with backoff on rate limits (429)
  const outJson = join(outDir, "vlm.json");
  const figuresPath = join(outDir, "figures.json");
  if (existsSync(figuresPath)) {
    console.log("figures.json already exists — nothing to do");
    return;
  }
  const args = ["vision", "-p", PROMPT, ...pngs.map((p) => ["-i", p]).flat(), "-o", outJson];
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  let res: ReturnType<typeof spawnSync> | null = null;
  if (!existsSync(outJson)) {
    // no previous successful response — call with retry/backoff
    for (let attempt = 1; attempt <= 4; attempt++) {
      res = spawnSync("z-ai", args, { stdio: ["inherit", "inherit", "inherit"] });
      if (res.status === 0) break;
      console.error(`z-ai vision attempt ${attempt} failed — waiting ${attempt * 30}s (rate limit backoff)`);
      await sleep(attempt * 30_000);
    }
    if (res && res.status !== 0 && !existsSync(outJson)) {
      console.error("z-ai vision failed after retries");
      process.exit(1);
    }
  } else {
    console.log("reusing previous successful vlm.json");
  }
  // normalize output: CLI writes the full API response {choices:[{message:{content}}]}
  const raw = readFileSync(outJson, "utf8");
  let parsed: any;
  try {
    parsed = JSON.parse(raw);
  } catch {
    parsed = { content: raw };
  }
  const content =
    typeof parsed === "string"
      ? parsed
      : parsed?.choices?.[0]?.message?.content ?? parsed?.content ?? parsed;
  const cleaned = String(content)
    .replace(/^```(json)?/m, "")
    .replace(/```\s*$/m, "")
    .trim();
  let figures: any;
  try {
    figures = JSON.parse(cleaned);
  } catch {
    writeFileSync(join(outDir, "vlm-content.txt"), String(content));
    console.error("VLM output not parseable — saved to vlm-content.txt for manual curation");
    process.exit(1);
  }
  writeFileSync(join(outDir, "figures.json"), JSON.stringify(figures, null, 2) + "\n");
  const n = (figures.pages ?? []).reduce((a: number, p: any) => a + (p.elements ?? []).length, 0);
  console.log(`VLM enumerated ${n} visual elements across ${(figures.pages ?? []).length} pages → figures.json`);
}

main();