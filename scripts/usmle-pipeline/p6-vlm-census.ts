import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/p-229.png');
  const desc = `This is page 229 of First Aid for the USMLE Step 1 2026 (pdf page 229 = printed book page 207, PATHOLOGY — Cellular Injury, the CALCIFICATION + RADIATION INJURY page). pdfimages reports TWO cmyk JPEG rasters (~188x184 and ~188x188 at 150 dpi), both lettered A (the text references 'arrow in A' in the calcification intro and 'spherules A' in the psammoma block; the letter 'A' prints twice at raw 100 and 102).
Questions:
1) Describe each of the two photographs: is one a histology micrograph of calcification (deeply basophilic calcium deposits with an arrow) and the other a histology micrograph of psammoma bodies (concentrically laminated calcified spherules)? Where do they sit on the page?
2) Is the 'PSoMMOMa Bodies.' text a printed mnemonic (in the margin or below the psammoma list)? Where exactly does it print and what does its capitalization spell out?
3) Confirm the radiation intro block (stem cells of rapidly regenerating tissues most susceptible; radiotherapy damages cancer cells more because of dysfunctional DNA repair + high replicative rates; radiation dermatitis acute vs chronic with ↑ TGF-β fibrosis).
4) Confirm the calcification table structure (Dystrophic vs Metastatic across Ca2+ DEPOSITION, EXTENT, ASSOCIATED CONDITIONS, ETIOLOGY).
5) Any other margin notes or mnemonics? Quote verbatim.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
