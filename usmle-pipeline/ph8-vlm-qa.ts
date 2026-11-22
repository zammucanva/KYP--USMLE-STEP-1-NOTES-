import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA INSPECTION task. Do NOT write code, HTML, or CSS. Describe exactly what you see, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/ph8/full-desktop-light.png');
  const png2 = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/ph8/full-desktop-dark.png');
  const desc = `These are LIGHT-MODE and DARK-MODE full-page captures of a study-notes page whose centerpiece is the rendered original KYP registry visual "ReceptorBindingMap" (an original KYP redraw of a textbook Receptor-binding page, book 233). Intended layout of that visual: header band "Receptor binding — the map" with a "4 rows · 3 panels · 1 table" chip; THREE side-by-side curve panels — PANEL A "A · COMPETITIVE ANTAGONIST": an "Agonist" sigmoid plus a right-shifted "Agonist + competitive antagonist" sigmoid at the same 100 ceiling, a circled A, a "Reduced potency" label with a horizontal double arrow at the 50 dashed line; PANEL B "B · NONCOMPETITIVE ANTAGONIST": an "Agonist" sigmoid to 100 and an "Agonist + noncompetitive antagonist" sigmoid to ~50 at the same position, a circled B, a "Reduced efficacy" label with a vertical down arrow; PANEL C "C · PARTIAL AGONISTS": three sigmoids — "Agonist" to 100, "Partial agonist" to ~70 at the same position with a "Reduced efficacy" two-line label and vertical arrow, and "Partial C agonist" to ~40 shifted right with a circled C and an "Independent potency" horizontal double arrow between two dashed EC50 drops; then "THE AGONIST WITH TABLE" grid with header AGONIST WITH / POTENCY / EFFICACY / REMARKS / EXAMPLE and four rows (A Competitive antagonist down-arrow / No change / Can be overcome by up agonist concentration / Diazepam + flumazenil; B Noncompetitive antagonist No change / down-arrow / Cannot be overcome / Norepinephrine + phenoxybenzamine; C Partial agonist (alone) Independent / down-arrow / Acts at same site as full agonist / Morphine vs buprenorphine; Inverse agonist (alone) Independent / Negative / Binds to a constitutively active receptor... / H1 antihistamines); then an "THE EFFICACY LADDER" strip; then "THE FOUR CODES" mnemonic strip.
Questions:
1) TEXT CLIPPING: Is any text cut off vertically, overlapping another text, or escaping its card/panel boundary? Name any offender verbatim.
2) PANEL STRUCTURE: Are the three curve panels, the table grid, the efficacy-ladder strip, and the mnemonic strip all present and non-overlapping? Do the curves stay inside their plot areas and rise as sigmoids?
3) CURVE GEOMETRY: In PANEL A, are the two curves parallel with the same ceiling but the second shifted right? In PANEL B, does the second curve plateau at about half the first's height at the same horizontal position? In PANEL C, are there three curves with two lower plateaus, one of them shifted right? Are the arrows and dashed drops visible?
4) THEME: In the dark capture, are all texts readable (no dark-on-dark)? Any invisible color?
5) OVERALL: List ANY visual defect a reviewer would flag, or state CLEAN if none.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect both captures now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
