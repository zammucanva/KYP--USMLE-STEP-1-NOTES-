import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/pubh18-page-290.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is First Aid USMLE 2026 Part 1, pdf page 290 / printed book page 268. The page is SPLIT between two topics: the UPPER portion is a "Pearson correlation coefficient" block with a row of scatter-plot panels; the LOWER portion — from the in-body banner ribbon "▶ PUBLIC HEALTH SCIENCES—ETHICS" down to the page footer — is the ETHICS opening and is the part I need censused precisely. Describe that LOWER portion precisely and completely: (1) THE BANNER — quote the in-body ribbon text exactly (with the ▶ glyph); does the same banner also print in the running header at the very top of the page? Does the ribbon sit BELOW the Pearson correlation figure (confirm the split boundary)? (2) "Core ethical principles" — this block prints FOUR principle names with their definitions. List each principle name (Autonomy, Beneficence, Nonmaleficence, Justice) and quote its definition text VERBATIM including the opening quoted mottos (eg, "Do good." / "Do no harm."), parentheses, "eg," examples, and the "Principle of double effect—..." sentence in the Beneficence entry. How are the four names typeset (color? bold?) and is the block a table with a visible left column, or a definition list? Any table borders, shading, or hairlines? (3) "Decision-making capacity" — quote the whole block verbatim (it prints as a table/box with the title on the left and five short paragraphs of text). Where does this block sit relative to the "Four major components of decision-making:" panel — BELOW it, or SIDE BY SIDE (left/right) on the page? (4) "Four major components of decision-making:" — quote the title and all four bulleted items VERBATIM (Understanding, Appreciation, Reasoning, Expressing a choice) including each parenthesis question; what does each bullet glyph look like (square? triangle? circle?)? (5) COLOR FURNITURE — any red, blue, navy, or other colored text anywhere in the lower portion (which words?); any mnemonics, margin notes, asterisk footnotes, images, or icons; any table title bars. (6) The footer — quote the indd slug line and the timestamp exactly. Preserve exact printed spellings, capitalizations, hyphens, em-dashes, and curly quotes; state any words that wrap across lines.' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
