// E17 source extraction — lipid-transport (pdf 112-114 / book 90-92).
// Usage: bun scripts/usmle-pipeline/e17-extract.ts
import { pdfPageText, ROOT } from "./common";
import { writeFileSync } from "fs";
import { join } from "path";

const out = join(ROOT, ".usmle-pipeline-cache", "e17-p112-114.txt");
const pages: string[] = [];
for (const p of [112, 113, 114, 115]) {
  pages.push(
    `\n========== PDF PAGE ${p} (book ${p - 22}) ==========\n` + pdfPageText(1, p)
  );
}
writeFileSync(out, pages.join("\n"), "utf8");
console.log(`wrote ${out}`);
