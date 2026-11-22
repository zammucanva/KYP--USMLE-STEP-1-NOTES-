import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA INSPECTION task. Do NOT write code, HTML, or CSS. Describe exactly what you see, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/ph9/full-desktop-light.png');
  const png2 = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/ph9/full-desktop-dark.png');
  const desc = `These are LIGHT-MODE and DARK-MODE full-page captures of a study-notes page whose centerpiece is the rendered original KYP registry visual "TherapeuticIndexMap" (an original KYP redraw of a textbook Therapeutic-index page, book 233 lower half). Intended layout of that visual: header band "Therapeutic index — the map" with a "1 equation · 1 panel · 5 drugs" chip; a large left panel "THE QUANTAL CURVES — Efficacy / Toxicity" with y-axis ticks 100/50/0, x-axis "Log (drug concentration)", TWO rising sigmoid curves (Efficacy left, Toxicity right), a dashed 50% line, dashed vertical drops labeled ED50 and TD50, and a "Therapeutic index" label with a horizontal double arrow spanning the gap; a right panel "THE EQUATION" showing "Measurement of drug safety." and the fraction TI = TD50 over ED50 with side labels "median toxic dose" / "median effective dose" plus an LD50 line; below it "THE THERAPEUTIC WINDOW" panel with a three-segment band (no effect | THERAPEUTIC WINDOW | toxicity) bounded by MEC and MTC ticks; then "THE MARGIN NOTE" strip with the big mnemonic "TITE: Therapeutic Index = TD50 / ED50." on the left and the verbatim warning "Safer drugs have ↑ TI ... Warning! These drugs are lethal!" on the right; then "THE LOW-TI DRUGS" grid of five cards (WARFARIN monitor INR, THEOPHYLLINE serum 10–20 mg/L, DIGOXIN level + apical pulse, ANTIEPILEPTIC DRUGS levels free phenytoin, LITHIUM serum Li 0.6–1.2 mEq/L) with a red WARNING bar under them; then "THE FOUR CODES" mnemonic strip.
Questions:
1) TEXT CLIPPING: Is any text cut off vertically, overlapping another text, or escaping its card/panel boundary? Name any offender verbatim.
2) PANEL STRUCTURE: Are the quantal-curve panel, equation panel, therapeutic-window band, margin-note strip, five-card grid, warning bar, and four-code strip all present and non-overlapping?
3) CURVE GEOMETRY: In the quantal panel, do both curves rise as sigmoids, the Efficacy curve to the LEFT of the Toxicity curve, both crossing the dashed 50% line, with the ED50 drop left of the TD50 drop and the "Therapeutic index" double arrow between them?
4) THEME: In the dark capture, are all texts readable (no dark-on-dark)? Any invisible color?
5) OVERALL: List ANY visual defect a reviewer would flag, or state CLEAN if none.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect both captures now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
