import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA INSPECTION task. Do NOT write code, HTML, or CSS. Describe exactly what you see, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p8/element-crop-v0-light.png');
  const png2 = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p8/element-crop-v0-dark.png');
  const desc = `These are LIGHT-MODE and DARK-MODE crops of a rendered original KYP registry visual "AcutePhaseReactantMap" (an original KYP adaptation of textbook pages on acute inflammation). Intended layout: header band; LEFT panel "The local response (book 209)" (THE DEFINITION card with the harmful-triple note, RUBOR AND CALOR card, TUMOR card with the full permeability cascade, DOLOR card, FUNCTIO LAESA card, THE HARMFUL TRIPLE card); CENTER panel "The acute-phase reactants" (POSITIVe UPReGULATeD band with 7 cards: C-REACTIVE PROTEIN, FERRITIN, FIBRINOGEN, HAPTOGLOBIN, HEPCIDIN, PROCALCITONIN, SERUM AMYLOID A; NeGATIVe DOWNReGULATeD band with 3 cards: ALBUMIN, TRANSFERRIN, TRANSTHYRETIN prealbumin); RIGHT panel "The systemic answer (209-210)" (FEVER — THE CASCADE card, LEUKOCYTOSIS card, ↑ PLASMA ACUTE-PHASE REACTANTS card, ESR — THE MECHANISM card, ↑ ESR list card, ↓ ESR lower-than-expected list card); BOTTOM full-width panel "The acute inflammation panel (book 210)" (a definition line, then STIMULI, MeDIATORS, COMPONeNTS, OUTCOMeS cards, then THE INFLAMMASOME and EXTRAVASATION ×4 + THE LATE SHIFT strips); footer with Source & census lines.
Questions:
1) TEXT CLIPPING: Is any text cut off, overlapping another text, or escaping its card/panel boundary? Name any offender verbatim.
2) PANEL STRUCTURE: Are the LEFT (6 cards), CENTER (2 group bands + 10 cards), RIGHT (6 cards), BOTTOM (4 cards + 2 strips), and footer all present, inside their borders, and non-overlapping?
3) READABILITY: Are the reactant names and functions, the ESR disease lists, and the fever cascade (LPS, IL-1, TNF, COX, anterior hypothalamus, PGE2, set point) readable?
4) THEME: In the dark crop, are all texts readable (no dark-on-dark)? Any invisible color?
5) OVERALL: List ANY visual defect a reviewer would flag, or state CLEAN if none.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect both crops now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
