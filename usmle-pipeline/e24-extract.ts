// E24 source extraction — t-cell-development (pdf 122 / book 100, part 1)
import { pdfPageText, ROOT, CACHE, norm } from "./common";
import { writeFileSync, existsSync } from "fs";
import { join } from "path";
import { spawnSync } from "child_process";

// text: p122 (target) + p121/p123 (context boundaries)
const pages: string[] = [];
for (const p of [121, 122, 123]) {
  pages.push(`\n========== PDF PAGE ${p} (book ${p - 22}) ==========\n` + pdfPageText(1, p));
}
writeFileSync(join(CACHE, "e24-p122.txt"), pages.join("\n"), "utf8");
console.log("text ->", join(CACHE, "e24-p122.txt"));

// 200-DPI PNG for VLM census
const png = join(CACHE, "e24-p122");
const res = spawnSync("pdftoppm", ["-png", "-r", "200", "-f", "122", "-l", "122", join(ROOT, "upload", "usmle part1.pdf"), png]);
if (res.status !== 0) { console.error("pdftoppm failed:", res.stderr?.toString()); process.exit(1); }
console.log("png ->", png + "-122.png");

// raster census
const census = spawnSync("pdfimages", ["-list", "-f", "122", "-l", "122", join(ROOT, "upload", "usmle part1.pdf")], { encoding: "utf8" });
console.log("--- pdfimages census (p122) ---");
console.log(census.stdout.split("\n").slice(0, 8).join("\n"));

// boundary probes
const target = norm(pdfPageText(1, 122));
for (const probe of [
  "Differentiation of T cells",
  "Positive selection",
  "Negative selection",
  "Macrophagelymphocyte interaction",
  "Cytotoxic T cells",
  "Regulatory T cells",
  "autoimmune regulator (AIRE)",
  "CHAR",
]) {
  console.log(`probe "${probe}": ${target.includes(norm(probe)) ? "FOUND" : "not on this page"}`);
}
