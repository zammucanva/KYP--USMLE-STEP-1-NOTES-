import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/pubh4-page-280.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is First Aid USMLE 2026 Part 1, pdf page 280 / printed book page 258, under the banner "PUBLIC HEALTH SCIENCES—EPIDEMIOLOGY AND BIOSTATISTICS". The page is titled "Quantifying risk" and opens with the sentence "Definitions and formulas are based on the classic 2 × 2 or contingency table." It carries ONE main table plus a classic 2×2 table and worked-example grids. Describe the page structure precisely and completely: (1) THE CLASSIC 2×2 TABLE near the title — which axis is the columns and which is the rows (is "Disease or outcome" the column header across the top and "Exposure or intervention" the row labels down the left side?), and where do the letters a, b, c, d sit inside it (which cell is a, which is b, which is c, which is d)? (2) THE MAIN "Quantifying risk" TABLE — report its column headers EXACTLY as printed (including capitalization), then list EVERY row in PRINTED order with the TERM, the full DEFINITION text, the full EXAMPLE text, and the FORMULA exactly as printed. The eight terms should be: Odds ratio, Relative risk, Relative risk reduction, Attributable risk, Absolute risk reduction, Number needed to treat, Number needed to harm, Case fatality rate — confirm or correct this list. (3) THE FORMULA MARGIN GRIDS — describe the small worked 2×2 grids printed inside the FORMULA column of the Odds ratio row and the Relative risk row: what numbers sit in each grid and where exactly are the grids placed? (4) MNEMONICS — quote any in-cell mnemonic text printed in the table (e.g. "You take a case to the OR." — where does it print? is there any mnemonic about cohorts and relative risk anywhere on THIS page — yes or no?). (5) The formulas printed in the LEFT page margin at the top (Odds ratio =, Relative risk =, Attributable risk =) — report them as printed. (6) Any margin notes, asterisk footnotes, images, or photos anywhere on the page; (7) red text, color shading, or other color furniture (which headers/cells print in color?); (8) the header/banner lines and the footer slug with timestamp. Preserve exact printed spellings and state any words that look truncated, hyphenated across line wraps, or oddly capitalized.' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
