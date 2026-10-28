import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA INSPECTION task. Do NOT write code, HTML, or CSS. Describe exactly what you see, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p10/element-crop-v0-light.png');
  const png2 = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p10/element-crop-v0-dark.png');
  const desc = `These are LIGHT-MODE and DARK-MODE crops of a rendered original KYP registry visual "WoundHealingPhaseMap" (an original KYP adaptation of a textbook wound-healing page). Intended layout: header band; TOP panel "Chronic inflammation (book 212)" with three cards (THE DEFINITION + STIMULI; THE MEDIATOR FORK Th1 vs Th2; THE OUTCOMES with the HCV-HCC and H pylori-gastric-adenocarcinoma chains) and two bridge lines; MIDDLE "The tissue mediators" with cards for FGF·VEGF, TGF-β, METALLOPROTEINASES, PDGF (3-line role), EGF (EGFR/ErbB1); BOTTOM "The three phases of wound healing" with a 3-station band (1. INFLAMMATORY up to 3 days; 2. PROLIFERATIVE day 3 to weeks; 3. REMODELING 1 week to 6+ months) and three tall cards, each with effeCTOR CeLLS and CHARACTeRISTICS sections, the proliferative card carrying a highlighted 'Delayed in VITAMIN C and COPPER deficiency' box and the remodeling card carrying a highlighted 'ZINC deficiency → delayed wound healing' box; footer with Source & census lines.
Questions:
1) TEXT CLIPPING: Is any text cut off, overlapping another text, or escaping its card/panel boundary? Name any offender verbatim.
2) PANEL STRUCTURE: Are the TOP chronic panel (3 cards + bridge), the MIDDLE mediator cards (5 cards), the BOTTOM phase band + 3 phase cards with their 2 highlighted deficiency boxes, and the footer all present, inside their borders, and non-overlapping?
3) READABILITY: Are the mediator roles (PDGF's three lines, EGF's EGFR/ErbB1) and the phase characteristics readable?
4) THEME: In the dark crop, are all texts readable (no dark-on-dark)? Any invisible color?
5) OVERALL: List ANY visual defect a reviewer would flag, or state CLEAN if none.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect both crops now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
