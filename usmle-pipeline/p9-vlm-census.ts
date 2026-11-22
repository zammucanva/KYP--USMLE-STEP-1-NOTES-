import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/p9-233.png');
  const desc = `This is page 233 of First Aid for the USMLE Step 1 2026 (pdf 233 = printed book page 211, PATHOLOGY — INFLAMMATION, the LEUKOCYTE EXTRAVASATION page). pdfimages reports NO raster images on this page — the extravasation figure at the bottom should be vector line art with text-layer labels.
Questions:
1) Confirm the figure is line art (drawn outlines) rather than a photograph, and describe its topology: a vessel cross-section with labels 'Vessel lumen', 'Endothelium', 'Interstitium'; PMN circles moving through four numbered stations ('1. Margination & rolling', '2. Tight binding', '3. Diapedesis', '4. Migration'); interaction labels 'Sialyl Lewis X', 'P-selectin', 'E-selectin', 'LFA-1', 'ICAM-1', 'PECAM-1'; PMNs shown rolling, flattening, squeezing between endothelial cells, and migrating through the interstitium.
2) Where does each interaction label sit (eg, Sialyl Lewis X on the PMN at rolling; P-selectin and E-selectin on the endothelium; LFA-1 on the PMN and ICAM-1 on the endothelium at tight binding; PECAM-1 at the junction during diapedesis)?
3) Confirm the table structure above the figure: a 3-column table (STeP | VASCULATURe/STROMA MARKeRS | LeUKOCYTe MARKeRS) with 4 rows (Margination and rolling — defective in leukocyte adhesion deficiency type 2 ↓Sialyl LewisX; Tight binding (adhesion) — defective in LAD type 1 ↓CD18 integrin subunit; DiaPEdesis (transmigration); Migration with chemotactic factors C5a, IL-8, LTB4, 5-HETE, kallikrein, platelet-activating factor, N-formylmethionyl peptides).
4) Any margin notes or mnemonics printed anywhere? Quote verbatim.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
