import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL QA INSPECTION task. Do NOT write code, HTML, or CSS. Describe exactly what you see, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p9/element-crop-v0-light.png');
  const png2 = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p9/element-crop-v0-dark.png');
  const desc = `These are LIGHT-MODE and DARK-MODE crops of a rendered original KYP registry visual "LeukocyteTraffickingMap" (an original KYP redraw of a textbook leukocyte-extravasation figure). Intended layout: header band; a large figure panel "The vessel map" with three horizontal zone bands (Vessel lumen on top, Endothelium middle, Interstitium bottom), four numbered station headers along the top (1. Margination & rolling, 2. Tight binding (adhesion), 3. DiaPEdesis (transmigration), 4. Migration), a rolling PMN circle with Sialyl LewisX label and P-selectin/E-selectin stalks at station 1, a flattened PMN ellipse with LFA-1 locking ICAM-1 at station 2, a PMN squeezing between endothelial cells with PECAM-1 labels both sides at station 3, a PMN walking a chemotactic gradient at station 4, and a WHERE IT HAPPENS strip (postcapillary venules rule); then the marker table as four station cards (each with the VASCULATURe/STROMA MARKeRS and LeUKOCYTe MARKeRS lists verbatim, the LAD-2 and LAD-1 notes on cards 1 and 2); then two lockout cards (LAD TYPE 1 binding lockout ↓ CD18, LAD TYPE 2 rolling lockout ↓ Sialyl LewisX); footer with Source & census lines.
Questions:
1) TEXT CLIPPING: Is any text cut off, overlapping another text, or escaping its card/panel boundary? Name any offender verbatim.
2) FIGURE STRUCTURE: Are the three zone bands, the four numbered stations with their PMN glyphs and interaction labels (Sialyl LewisX, P-selectin, E-selectin, LFA-1, ICAM-1, PECAM-1, the chemotactic factors) all present and inside the figure panel?
3) READABILITY: Are the marker lists in the four station cards readable (E-selectin with TNF/IL-1, P-selectin with Weibel-Palade, ICAM-1 CD54, VCAM-1 CD106, CD11/18 integrins LFA-1 Mac-1, VLA-4, PECAM-1 CD31, the seven chemotactic factors)?
4) THEME: In the dark crop, are all texts readable (no dark-on-dark)? Any invisible color?
5) OVERALL: List ANY visual defect a reviewer would flag, or state CLEAN if none.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect both crops now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
