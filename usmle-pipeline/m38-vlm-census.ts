import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/m38page-221.png');
  const desc = `This is page 221 of First Aid for the USMLE Step 1 2026 (pdf page 221 = printed book page 199, Microbiology — HIV therapy continued). pdfimages reports FOUR image objects: two 1x1 cmyk color washes with jpeg smasks (171x162 and 231x357) — the decorative color-wash pattern behind line art. The text layer carries a lifecycle figure (ATTACHMENT, PENETRATION, Uncoating, Reverse transcription, DNA integration, Transcription, Translation, Proteolytic processing, Packaging and assembly, Budding, Release) with drug lists (Maraviroc at ATTACHMENT; Enfuvirtide at PENETRATION; NRTIs and NNRTIs at Reverse transcription; Bictegravir/Cabotegravir/Dolutegravir/Raltegravir at INTEGRASE; the protease inhibitors at PROTEASE), a footnote about ritonavir/cobicistat boosting, and a "Prophylaxis in HIV infection/AIDS" table (CD4+ <200 → TMP-SMX → Pneumocystis pneumonia; CD4+ <100 → TMP-SMX → Pneumocystis pneumonia and toxoplasmosis).
Questions:
1) Describe the LIFECYCLE FIGURE exactly as printed: what are its visual components (a cell? arrows? color blocks?), where do the stage labels sit, and where do the drug-group boxes attach? Is it line art / schematic drawing, or does it contain any photographs?
2) Are the two color washes decorative backgrounds (behind which boxes), or do they carry any independent content?
3) Read the prophylaxis table exactly as printed — every row (cell count, prophylaxis, infection).
4) Are there any margin notes or mnemonics on this page? Quote them verbatim.
5) Any photographs, electron micrographs, clinical images, or other rasterized content anywhere?`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
