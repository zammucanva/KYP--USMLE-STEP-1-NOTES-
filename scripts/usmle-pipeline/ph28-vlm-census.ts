import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/ph28-page-276.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is First Aid USMLE 2026 Part 1, pdf page 276 / printed book page 254, the LAST page of the Pharmacology chapter, under the banner "PHARMACOLOGY—MISCELLANEOUS". It carries ONE table titled "Biologic agents" with columns ENDING / CATEGORY / EXAMPLE and three group banner rows. Describe the page structure precisely and completely: (1) the table titled "Biologic agents" — list EVERY group banner row and EVERY data row in PRINTED order with all three cells verbatim (the -mab group: -ximab, -zumab, -umab; the -ib group: -ciclib, -coxib, -parib, -rafenib, -tinib, -zomib; the -kin group: -leukin, -kinra — report the EXACT printed text of every ENDING, CATEGORY, and EXAMPLE cell, including capitalization and hyphens); (2) are there ANY rows mentioning fusion proteins, -cept endings, etanercept, recombinant cytokines, recombinant enzymes, colony-stimulating factors, or growth factors anywhere on this page? Answer explicitly yes or no and list them if present; (3) any margin notes, mnemonics, asterisk footnotes, or images anywhere on the page; (4) red text, color shading, or other color furniture anywhere on the page (which cells/headers print in color?); (5) the header/banner lines and the footer slug with timestamp. Preserve exact printed spellings and state any words that look truncated or hyphenated across line wraps.' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
