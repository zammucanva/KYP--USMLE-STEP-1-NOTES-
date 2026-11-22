import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA INSPECTION task. Do NOT write code, HTML, or CSS. Describe exactly what you see, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/ph7/full-desktop-light.png');
  const png2 = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/ph7/full-desktop-dark.png');
  const desc = `These are LIGHT-MODE and DARK-MODE full-page captures of a study-notes page whose centerpiece is the rendered original KYP registry visual "EfficacyPotencyMap" (an original KYP redraw of a textbook Efficacy-vs-potency page, book 232). Intended layout of that visual: header band "Efficacy vs potency — the map" with a "2 definitions · 2 panels · 2 deltas" chip; two definition cards (EFFICACY — the y-value (Emax), with the verbatim sentence "Maximal effect a drug can produce (intrinsic activity)." plus the partial-agonist line; POTENCY — the x-value (EC50), with "Amount of drug needed for a given effect." and the EC = Effective concentration line); LEFT curve panel "RELATIVE EFFICACY": y-axis "% Maximal effect" with 100/50/0 ticks, x-axis "Log (drug dose)", a brand-colored sigmoid rising to a dashed plateau at 100 and a warning-colored sigmoid rising to a dashed plateau at 60 at the SAME left-right position, labels "Emax Drug A" and "Emax Drug B", and a vertical double-arrow bracket labeled "Δ Efficacy" between the plateaus; RIGHT curve panel "RELATIVE POTENCY": same axes, two sigmoids both reaching the same 100 ceiling, "Drug A" left-shifted and "Drug B" right-shifted, two dashed vertical EC50 drops to the x-axis with two "EC50" labels, a horizontal double-arrow bracket labeled "Δ Potency" between them, an "EC = Effective concentration" legend; then a red-edged partial-agonist callout, a brand independence strip with the two verbatim "Unrelated to..." rules, and a four-code mnemonic strip.
Questions:
1) TEXT CLIPPING: Is any text cut off vertically, overlapping another text, or escaping its card/panel boundary? Name any offender verbatim.
2) PANEL STRUCTURE: Are the two definition cards, the two curve panels, the partial-agonist callout, the independence strip, and the mnemonic strip all present and non-overlapping? Do the two curves stay inside their plot areas?
3) CURVE GEOMETRY: In the LEFT panel, do the two curves start near the baseline, rise as sigmoids, and flatten at different dashed plateau heights (one at 100, one at 60) at the same horizontal position? In the RIGHT panel, do both curves reach the same dashed ceiling at 100 with Drug A crossing the 50 line left of Drug B, and are the two EC50 dashed drops and the two "EC50" labels under the axis? Are the "Δ Efficacy" and "Δ Potency" brackets drawn as vertical and horizontal double arrows respectively?
4) THEME: In the dark capture, are all texts readable (no dark-on-dark)? Any invisible color?
5) OVERALL: List ANY visual defect a reviewer would flag, or state CLEAN if none.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect both captures now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
