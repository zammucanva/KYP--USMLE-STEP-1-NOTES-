// E23 source extraction — nk-b-t-cell-functions (pdf 121 / book 99, part 1)
// Established pattern: pdfPageText for text, pdftoppm for the VLM census PNG.
import { pdfPageText, ROOT, CACHE, norm } from "./common";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import { spawnSync } from "child_process";

mkdirSync(CACHE, { recursive: true });

// --- text: page 121 (target) + 120/122 (context boundaries) ---
const pages: string[] = [];
for (const p of [120, 121, 122]) {
  pages.push(`\n========== PDF PAGE ${p} (book ${p - 22}) ==========\n` + pdfPageText(1, p));
}
const outTxt = join(CACHE, "e23-p121.txt");
writeFileSync(outTxt, pages.join("\n"), "utf8");
console.log(`text -> ${outTxt}`);

// --- 200-DPI PNG of page 121 for VLM census ---
const png = join(CACHE, "e23-p121");
const res = spawnSync("pdftoppm", ["-png", "-r", "200", "-f", "121", "-l", "121", join(ROOT, "upload", "usmle part1.pdf"), png]);
if (res.status !== 0) { console.error("pdftoppm failed:", res.stderr?.toString()); process.exit(1); }
const made = [png + "-121.png", png + "-121.png"].find(p => existsSync(p)) ?? png + "-121.png";
console.log("png ->", made);

// --- raster census: does page 121 contain real photographic artwork? ---
const census = spawnSync("pdfimages", ["-list", "-f", "121", "-l", "121", join(ROOT, "upload", "usmle part1.pdf")], { encoding: "utf8" });
console.log("--- pdfimages census (page 121) ---");
console.log(census.stdout.split("\n").slice(0, 8).join("\n"));

// --- boundary check: confirm which FA subsections live on this page ---
const target = norm(pdfPageText(1, 121));
for (const probe of [
  "Major functions of natural killer cells",
  "Major functions of B and T cells",
  "Natural killer cells",
]) {
  console.log(`probe "${probe}": ${target.includes(norm(probe)) ? "FOUND" : "not on this page"}`);
}
