import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/p-224.png');
  const desc = `This is page 224 of First Aid for the USMLE Step 1 2026 (pdf page 224 = printed book page 202, PATHOLOGY — Cellular Injury, the CELLULAR ADAPTATIONS page). pdfimages reports ~98 small monochrome raster images (each 50-90 px at 308 ppi) — these look like small cell-drawing illustrations embedded in a flowchart figure. The page text defines: Cellular adaptations (intro), Hypertrophy, Hyperplasia, Atrophy, Metaplasia, Dysplasia.
Questions:
1) Describe the FLOWCHART FIGURE exactly as printed (it sits in the lower portion of the page): what boxes/nodes exist (Normal cells, Hyperplasia, Hypertrophy, Atrophy, Metaplasia, Dysplasia, Neoplasia, others?), what arrows connect them, what are the annotated arrow labels (Change in cell size and/or number, Change in cell structure, Change in cell type, Change in cell type and structure, Inability to adapt, Severe stress or injury, If chronic irritant persists)? Where do 'Irreversible injury → necrosis or apoptosis', 'Reversible', 'Irreversible' appear?
2) Do the small raster images inside the figure depict cell clusters (drawings of cells showing: more cells, bigger cells, smaller cells, different cell types)? Describe what each node's illustration shows (eg, does Hyperplasia show many small cells? Hypertrophy fewer bigger cells? Atrophy smaller cells? Dysplasia irregular cells? Neoplasia a disordered mass?).
3) Is the figure line art/schematic or photographic? Any clinical photographs anywhere on the page?
4) Are there any margin notes, mnemonics, or high-yield marginalia anywhere on the page? Quote verbatim.
5) Read the six definition blocks (Cellular adaptations intro, Hypertrophy, Hyperplasia, Atrophy, Metaplasia, Dysplasia) — confirm the exact key phrases: '↑ structural proteins and organelles', 'ubiquitin-proteasome pathway', 'Barrett esophagus', 'pleomorphism', 'carcinoma in situ'. Any other bolded disease examples?`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
