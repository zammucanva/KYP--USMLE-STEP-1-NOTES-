import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/m37page-219.png');
  const desc = `This is page 219 of First Aid for the USMLE Step 1 2026 (pdf page 219 = printed book page 197, Microbiology ANTIMICROBIALS section). pdfimages reports ZERO raster images on this page — everything prints in the text layer. The raw text extraction scrambles the disinfection table: the letter "a" (a sporicidal footnote marker) interleaves between rows, and the row descriptions appear shifted (Chlorine, then "a", then Ethylene oxide, then "Oxidizes and denatures proteins", then "a", then Hydrogen peroxide, then "Alkylating agent", then "a", then "Free radical oxidation").
Questions:
1) Read the DISINFECTANTS table exactly as printed, row by row: for EACH agent (Autoclave, Alcohols, Chlorhexidine, Chlorine, Ethylene oxide, Hydrogen peroxide, Iodine and iodophors, Quaternary amines) state its exact printed description and whether it carries a superscript "a" (sporicidal) marker.
2) Read the "Antimicrobials to avoid in pregnancy" table exactly: list each printed ANTIMICROBIAL → ADVERSE EFFECT pair in order.
3) Is there a margin note or mnemonic near the pregnancy table? Quote it verbatim and say which drugs its words map to, if printed.
4) Are there any margin notes, mnemonics, or annotations anywhere else on the page (Foscarnet card, Cidofovir card)? Quote them verbatim.
5) Any images, icons, photographs, or figures at all on this page?`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
