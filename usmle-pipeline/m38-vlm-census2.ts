import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/m38page-220.png');
  const desc = `This is page 220 of First Aid for the USMLE Step 1 2026 (pdf page 220 = printed book page 198, Microbiology — HIV therapy). pdfimages reports ZERO raster images. The text layer carries an intro block about antiretroviral therapy (ART) and a large 3-column table (DRUG | MECHANISM | ADVERSE EFFECTS) whose extraction interleaves: the NRTI mechanism and adverse text print before the drug rosters, and drug-class lists print after their mechanism text.
Questions:
1) Confirm the table's row-card structure: for each drug class row (NRTIs, NNRTIs, Integrase strand transfer inhibitors, Protease inhibitors, Entry inhibitors), what prints in the DRUG column, the MECHANISM column, and the ADVERSE EFFECTS column?
2) Are the mnemonics "Have you dined (vudine) with my nuclear (nucleosides) family?" and "Navir (never) tease a protease." printed inside the MECHANISM cells? Quote each with its exact cell location.
3) Are "Enfuvirtide inhibits fusion." and "Maraviroc inhibits docking." inside the MECHANISM cells of the entry inhibitors? Where exactly do the bictegravir/dolutegravir names print (which row)?
4) Any margin notes or mnemonics outside the table? Quote verbatim.
5) Any images, icons, or photographs at all?`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
