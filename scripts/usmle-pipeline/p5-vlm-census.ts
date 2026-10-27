import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/p-228.png');
  const desc = `This is page 228 of First Aid for the USMLE Step 1 2026 (pdf page 228 = printed book page 206, PATHOLOGY — Cellular Injury, the ISCHEMIA / INFARCTS / FREE RADICAL INJURY page). pdfimages reports THREE cmyk JPEG rasters (~188x137, ~265x264, ~208x209 at 150 dpi). The text references photographs lettered A and B: the heart table row says 'yellow lines in A outline a subendocardial infarction'; the red-infarcct block says 'liver, lung A'; the pale-infarcct block says 'heart B, kidney'. So the letters may appear TWICE or the page may carry more than two lettered photos.
Questions:
1) How many photographs are printed on the page, where do they sit, and what letter does each carry? Describe each in one line (organ shown, appearance — hemorrhagic/red vs pale, any drawn yellow outline lines).
2) Resolve the lettering: is the 'A' next to the heart table row (subendocardial infarction with yellow outline lines) the SAME image as the 'A' next to 'liver, lung' in the red-infarcct block, or are there two different A's? What does the lung/red-infarcct image look like (a hemorrhagic wedge?), and what does the B heart image look like (pale/white infarct)?
3) Are these gross photographs or histology micrographs? Any drawings?
4) Confirm the ischemia definition and mechanisms line (inadequate blood supply to meet demand; decreased arterial perfusion eg atherosclerosis; decreased venous drainage eg testicular torsion, Budd-Chiari syndrome; shock).
5) Any margin notes or mnemonics anywhere on the page? Quote verbatim.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
