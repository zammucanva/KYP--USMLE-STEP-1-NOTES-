import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = readFileSync('/tmp/ph26-page-273.png').toString('base64');
  const r = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [{ role: 'user', content: [
      { type: 'text', text: 'This is First Aid USMLE 2026 Part 1, pdf page 273 / printed book page 251, under the banner "PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS". It carries THREE blocks. Describe the page structure precisely and completely: (1) the top block titled "Drugs affecting pupil size" — it is a two-column layout: "↑ pupil size (mydriasis)" vs "↓ pupil size (miosis)". List EVERY drug entry in EACH column verbatim and in printed order, stating whether each is its own bullet/item or joined to another (especially where "meperidine" sits in the mydriasis column and the "(except meperidine)" note in the miosis column); (2) the iris figure inside that block — describe the artwork (how many irises/eyes are drawn, radial vs sphincter muscle shown, dilated vs constricted pupil), and report the EXACT text of every label (eg, "Radial muscle contraction (α1 receptor mediated)", "Sphincter muscle contraction (M3 receptor mediated)") including any arrows or color coding; (3) the "Cytochrome P-450 interactions (selected)" table — report the EXACT column headers (Inducers (+) / Substrates / Inhibitors (–)?) and EVERY row entry verbatim in printed order for each of the three columns; (4) the mnemonics associated with the CYP table (eg, "St. John\'s funny funny (phenphen) mom never refuses greasy carbs and chronic alcohol" for inducers, "The OCPs are anti-war" for substrates, "SICK FACES come when I am really drinking grapefruit juice" for inhibitors) — report their EXACT printed wording, letter positions, and whether they print inside the table cells, below the table, or in the page margin, and in what color (red? black?); (5) the "Sulfa drugs" block — list the drug names verbatim in printed order, the full adverse-reaction sentence verbatim, and the mnemonic "Scary Sulfa Pharm FACTS" EXACTLY as printed — including which words print in which color (red capitals?), which drug each letter/word stands for, and whether the mnemonic prints inside the block or in the margin; (6) any other margin notes, asterisk footnotes, mnemonics, or images anywhere on the page; (7) red text, color shading, boxes, or other color furniture anywhere on the page (which titles print blue? which mnemonics print red?); (8) the header/banner lines and the footer slug with timestamp. Preserve exact printed spellings and state any words that look truncated or hyphenated across line wraps.' },
      { type: 'image_url', image_url: { url: `data:image/png;base64,${b64}` } },
    ]}],
    thinking: { type: 'disabled' },
  });
  console.log(String(r.choices?.[0]?.message?.content));
}
main();
