import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/p-227.png');
  const desc = `This is page 227 of First Aid for the USMLE Step 1 2026 (pdf page 227 = printed book page 205, PATHOLOGY — Cellular Injury, the NECROSIS page). pdfimages reports SIX cmyk JPEG rasters (~287x226 at 150 dpi), lettered A-F, matching the A-F markers in the table's HISTOLOGY column (Coagulative A, Liquefactive B, Caseous C, Fat D, Fibrinoid E, Gangrenous F). The page is otherwise a Necrosis definition line and a 6-row TYPE/SEEN IN/DUE TO/HISTOLOGY table.
Questions:
1) Describe each of the six photographs A-F in one line each — what does each show (histology micrograph or gross specimen?), and which necrosis type does it depict? For example: does A show preserved cell outlines with lost nuclei (coagulative)? B a cavity with debris (liquefactive/CNS)? C a granuloma with central debris (caseous)? D chalky-white fat saponification or fat-cell outlines? E a vessel wall with an eosinophilic proteinaceous layer? F a blackened/dry extremity or bowel (gangrenous)?
2) Are the photos clinical/gross photographs, histology micrographs, or drawings? Where do they sit on the page (a bottom photo row? right column?)
3) The table structure: confirm the four columns (TYPE, SEEN IN, DUE TO, HISTOLOGY) and the six rows in order (Coagulative, Liquefactive, Caseous, Fat, Fibrinoid, Gangrenous).
4) Read the Necrosis definition line verbatim (exogenous injury → plasma membrane damage → ... local inflammatory reaction, unlike apoptosis).
5) Any margin notes or mnemonics anywhere on the page? Quote verbatim.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
