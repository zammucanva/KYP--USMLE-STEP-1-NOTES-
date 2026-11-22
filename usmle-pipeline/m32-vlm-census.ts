import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/tmp/m32-p208-208.png');
  const desc = `This is page 208 of First Aid for the USMLE Step 1 2026 (pdf page 208 = printed book page 186, Microbiology ANTIMICROBIALS section). The raw text layer shows drug-directory cards for Carbapenems (imipenem/cilastatin, meropenem, ertapenem), Aztreonam, and Vancomycin. A standalone letter "A" prints in the text layer, and pdfimages reports exactly ONE raster on this page: a 188x188-pixel CMYK JPEG at 150 ppi (~1.25 inches square).
Questions:
1) How many drug cards are printed on this page, and what are their headings?
2) Where exactly is the photograph/image on the page (which card, which position on the page), and what does it depict (be specific: body site, finding, appearance)?
3) Does the image carry a marker/leader line or superscript linking it to text (e.g. an "A" marker)?
4) Is the image a clinical photograph (a real patient photo) or a line drawing/schematic?
5) Describe the two-column layout of the cards: what sits in the left column vs the right margin column? Quote one example of a right-margin note verbatim.
6) Any other figures, icons, or graphics on the page besides that one image?`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
