import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA INSPECTION task. Do NOT write code, HTML, or CSS. Describe exactly what you see, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p11/element-crop-v0-light.png');
  const png2 = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p11/element-crop-v0-dark.png');
  const desc = `These are LIGHT-MODE and DARK-MODE crops of a rendered original KYP registry visual "GranulomaScarMap" (an original KYP adaptation of textbook pages on granulomatous inflammation and scar formation, with a redrawn mechanism cascade). Intended layout: header band; LEFT panel "The granuloma (book 213)" (THE WALL-OFF DEFINITION card, THE HISTOLOGY card with photograph A described, CASEATING card, NONCASEATING card); CENTER panel "The mechanism cascade" (an original KYP redraw: APC circle → T cell → Th1 cell with MHC II-TCR/IL-12/CD40-CD40L labels, IFN-γ arrow down to the Activated macrophage ellipse, TNF arrow to EPITHELIOID MACROPHAGES and GIANT CELLS boxes, assembling the GRANULOMA box with lymphocytes and fibroblasts); RIGHT panel "The two clinical rules" (THE ANTI-TNF RULE with latent-TB testing, THE HYPERCALCEMIA RULE with 1-alpha-hydroxylase, WHY GRANULOMAS FORM); BOTTOM band 1 "The etiologies" (Infectious column: BACTeRIAL, fUNGAL·PARASITIC, THe CGD eNTRY; Noninfectious column: IMMUe-MeDIATeD, VASCUITIS, fORIGN BODIeS); BOTTOM band 2 "Scar formation" (intro line, HYPERTROPHIC SCAR A card vs KELOID SCAR B card with all 5 comparison rows and both photographs described); footer.
Questions:
1) TEXT CLIPPING: Is any text cut off, overlapping another text, or escaping its card/panel boundary? Name any offender verbatim.
2) PANEL STRUCTURE: Are the LEFT granuloma panel (4 cards), CENTER cascade (APC → T cell → Th1 → macrophage → granuloma chain with labels), RIGHT rules panel (3 cards), the ETIOLOGIES band (2 columns), the SCAR band (2 comparison cards), and the footer all present, inside their borders, and non-overlapping?
3) READABILITY: Are the cascade interaction labels (IL-12, CD40-CD40L, IFN-γ, TNF), the etiology organism lists, and the scar comparison rows readable?
4) THEME: In the dark crop, are all texts readable (no dark-on-dark)? Any invisible color?
5) OVERALL: List ANY visual defect a reviewer would flag, or state CLEAN if none.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect both crops now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
