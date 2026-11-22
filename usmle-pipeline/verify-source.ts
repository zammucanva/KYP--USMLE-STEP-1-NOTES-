/**
 * USMLE pipeline — SOURCE INTAKE VALIDATOR (single command after any wipe).
 *
 * Validates the two First Aid 2026 PDFs at their contract paths
 * (upload/usmle part1.pdf · upload/usmle part 2.pdf):
 *   1. presence + exact contract filenames (BOOK_PARTS in schemas.ts)
 *   2. page counts (433 / 436)
 *   3. text-layer readability on pinned spot-check pages
 *   4. printed-footer → book-page mapping (bookPageOffset calibration)
 *   5. regenerates .usmle-pipeline-cache/part{1,2}.txt from the actual files
 *   6. re-runs the full evidence gate (verify-evidence.ts) and propagates
 *      its exit code — a red gate means the supplied files are NOT the
 *      edition the 1700+ pinned quotes were verified against.
 *
 * Usage: bun scripts/usmle-pipeline/verify-source.ts
 * Exit 0 = sources verified, cache fresh, all evidence verified.
 */

import { spawnSync } from "child_process";
import { existsSync, readFileSync, rmSync, mkdirSync } from "fs";
import { join, resolve } from "path";
import { BOOK_PARTS } from "../../src/lib/kyp/usmle/pipeline/schemas";

const ROOT = resolve(import.meta.dir, "..", "..");
const CACHE = join(ROOT, ".usmle-pipeline-cache");

/** Pinned spot-check pages per part (readability + footer mapping). */
const SPOT: Record<1 | 2, number[]> = {
  1: [49, 111, 114],
  2: [4, 187, 269],
};

let failures = 0;
const fail = (msg: string) => {
  console.error(`  ✗ ${msg}`);
  failures++;
};

function pdfinfo(part: 1 | 2): number {
  const res = spawnSync("pdfinfo", [join(ROOT, BOOK_PARTS[part].file)], { encoding: "utf8" });
  if (res.status !== 0) return -1;
  const m = /^Pages:\s+(\d+)$/m.exec(res.stdout ?? "");
  return m ? Number(m[1]) : -1;
}

/** Extract one page's text with pdftotext -f/-l. */
function pageText(part: 1 | 2, page: number): string {
  const res = spawnSync(
    "pdftotext",
    ["-f", String(page), "-l", String(page), join(ROOT, BOOK_PARTS[part].file), "-"],
    { encoding: "utf8", maxBuffer: 16 * 1024 * 1024 }
  );
  return res.status === 0 ? (res.stdout ?? "") : "";
}

console.log("USMLE pipeline — source intake verification\n");

for (const part of [1, 2] as const) {
  const def = BOOK_PARTS[part];
  const path = join(ROOT, def.file);
  console.log(`[Part ${part}] ${def.file}`);

  if (!existsSync(path)) {
    fail(`PDF not found at contract path: ${def.file} (supply the file, do not improvise)`);
    continue;
  }

  // page count
  const pages = pdfinfo(part);
  if (pages !== def.pdfPages) {
    fail(`page count ${pages} != expected ${def.pdfPages}`);
    continue;
  }
  console.log(`  ✓ ${pages} pages (exact)`);

  // readability + footer mapping on pinned pages
  for (const pg of SPOT[part]) {
    const text = pageText(part, pg);
    if (text.trim().length < 100) {
      fail(`pdf page ${pg}: text layer unreadable (${text.trim().length} chars) — scanned image?`);
      continue;
    }
    const expectedBook = pg + def.bookPageOffset;
    const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
    // Regular pages carry the number as the first line; chapter/section openers
    // may place it lower on the page — accept a standalone number line anywhere.
    const footerHit = lines.slice(0, 5).some((l) => l === String(expectedBook))
      || lines.some((l) => l === String(expectedBook));
    if (!footerHit) {
      fail(`pdf page ${pg}: printed footer ${expectedBook} not found as a standalone line — offset calibration broken?`);
    } else {
      console.log(`  ✓ pdf p${pg} readable, footer → book p${expectedBook}`);
    }
  }
}

// cache regeneration (always fresh from the actual files)
if (failures === 0) {
  console.log("\n[Cache] regenerating .usmle-pipeline-cache from the supplied PDFs");
  mkdirSync(CACHE, { recursive: true });
  for (const part of [1, 2] as const) {
    const cacheFile = join(CACHE, `part${part}.txt`);
    rmSync(cacheFile, { force: true });
    const res = spawnSync("pdftotext", [join(ROOT, BOOK_PARTS[part].file), cacheFile], { stdio: "inherit" });
    if (res.status !== 0) {
      fail(`pdftotext cache regeneration failed for part ${part}`);
      continue;
    }
    const pages = readFileSync(cacheFile, "utf8").split("\f");
    const n = pages[pages.length - 1].trim() === "" ? pages.length - 1 : pages.length;
    console.log(`  ✓ part${part}.txt — ${n} pages cached`);
  }
}

if (failures > 0) {
  console.error(`\nSOURCE INTAKE FAILED: ${failures} problem(s). Sources are NOT the verified edition — do not proceed.`);
  process.exit(1);
}

// evidence gate — re-verify every pinned quote against the fresh cache
console.log("\n[Evidence] re-running the full evidence gate");
const ev = spawnSync("bun", [join("scripts", "usmle-pipeline", "verify-evidence.ts")], {
  cwd: ROOT,
  stdio: "inherit",
});
const evCode = ev.status ?? 1;
if (evCode !== 0) {
  console.error("\nSOURCE INTAKE FAILED: evidence gate is red against the supplied files.");
  process.exit(evCode);
}
console.log("\nSOURCE INTAKE VERIFIED — contract paths, page counts, text layers, footer mapping, fresh cache, evidence gate green.");
