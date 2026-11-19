import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/ph1-256-256.png');
  const desc = `This is page 256 of First Aid for the USMLE Step 1 2026 (pdf 256 = printed book page 234, PHARMACOLOGY — AUTONOMIC DRUGS). pdfimages reports ZERO raster images on this page — the whole page should be pure text: a SHARED page with "Drug effect modifications" (a 6-row table) in the TOP half and "Autonomic receptors" (an autonomic innervation figure + table) in the BOTTOM half. This census concerns ONLY the top half.
Questions:
1) Confirm the running page header prints the banner typos exactly as "PHARMACoLoGY" (lowercase o's inside the word) and "SEC TIoN II" (a space inside TION) — quote them exactly as printed, and confirm the printed page number 234.
2) Confirm the top-half heading sequence: the "▶ PHARMACOLOGY—AUTONOMIC DRUGS" banner, then the heading "Drug effect modifications", then a 3-column table with column headers TERM / DEFINITION / EXAMPLE. How many rows does the table have below the header, and in what order do the terms print?
3) For EACH of the six rows give the three cells as printed: ADDITIVE (definition "Effect of substances A and B together is equal to the sum of their individual effects"; example "Aspirin and acetaminophen"; the quoted arithmetic "2 + 2 = 4"); PERMISSIVE ("Presence of substance A is required for the full effects of substance B"; "Cortisol on catecholamine responsiveness"; any arithmetic quote or none?); SYNERGISTIC ("Effect of substances A and B together is greater than the sum of their individual effects"; "Clopidogrel with aspirin"; "2 + 2 > 4"); POTENTIATION ("Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A"; "Carbidopa only blocks enzyme to prevent peripheral conversion of levodopa"; "2 + 0 > 2"); ANTAGONISTIC ("Effect of substances A and B together is less than the sum of their individual effects"; "Morphine with naloxone"; "2 + 2 < 4"); TACHYPHYLACTIC ("Acute decrease in response to a drug after initial/repeated administration"; "Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion)"; any arithmetic quote or none?). Confirm which rows carry a quoted arithmetic chip and which do not.
4) Are there ANY margin notes, mnemonics, or annotations anywhere in the TOP half (Drug effect modifications), including margins? Quote verbatim if present.
5) Confirm the second "▶ PHARMACOLOGY—AUTONOMIC DRUGS" banner starts the BOTTOM half with the heading "Autonomic receptors" — confirming the shared-page boundary, and confirm the bottom half contains an autonomic-innervation vector figure plus a receptor table (do NOT describe the bottom half further).`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the page now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
