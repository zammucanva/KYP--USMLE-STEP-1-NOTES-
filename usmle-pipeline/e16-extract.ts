// E16 source extraction — metabolic-fuel-use (pdf 111 / book 89), plus neighbors for context.
// Usage: bun scripts/usmle-pipeline/e16-extract.ts
import { pdfPageText, ROOT } from "./common";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const out = join(ROOT, ".usmle-pipeline-cache", "e16-p111.txt");
const pages: string[] = [];
for (const p of [110, 111, 112]) {
  pages.push(
    `\n========== PDF PAGE ${p} (book ${p - 22}) ==========\n` + pdfPageText(1, p)
  );
}
mkdirSync(join(ROOT, ".usmle-pipeline-cache"), { recursive: true });
writeFileSync(out, pages.join("\n"), "utf8");
console.log(`wrote ${out} (${pages.join("").length} chars)`);
