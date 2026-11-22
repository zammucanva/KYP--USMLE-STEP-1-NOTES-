import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/m36p216-216.png');
  const desc = `This is page 216 of First Aid for the USMLE Step 1 2026 (pdf page 216 = printed book page 194, Microbiology ANTIMICROBIALS section — Antifungal therapy). pdfimages reports exactly ONE image on this page: a 1087x488-pixel cmyk jpeg (103K) with a 14.9K smooth mask, at 150 ppi (about 7.2 x 3.3 inches). The raw text layer shows cards for Amphotericin B (with the margin note "Amphotericin 'tears' holes in the fungal membrane by forming pores"), Nystatin, and Flucytosine.
Questions:
1) Where exactly does the single image sit on the page (which card, which position), and what does it depict? Be specific about what is shown (e.g. membrane pores, an illustration, an electron micrograph, a clinical photo, a graph).
2) Is it a drawing/illustration (line art, diagram) or a photographic reproduction (electron micrograph/photograph)?
3) Are there any other figures, icons, or images on the page?
4) Quote the margin notes/mnemonics printed in the margins of the cards verbatim.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
