import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/m37page-218.png');
  const desc = `This is page 218 of First Aid for the USMLE Step 1 2026 (pdf page 218 = printed book page 196, Microbiology ANTIMICROBIALS section). pdfimages reports ZERO raster images on this page — everything prints in the text layer. The page opens with an "Antihelminthic therapy" heading and a dense summary line (pyrantel pamoate, ivermectin, mebendazole, praziquantel, diethylcarbamazine), then drug cards: Oseltamivir/zanamivir, Baloxavir, Remdesivir, Acyclovir/famciclovir/valacyclovir, Ganciclovir.
Questions:
1) How is the antihelminthic summary printed — a table, a card, or a text block? Quote any margin notes or mnemonics next to it verbatim (e.g. anything about "bendy worms" or worm drug-mechanism pairings).
2) For each drug card on the page, quote any MARGIN notes or mnemonics printed beside it verbatim (left/right margins). Especially: anything near acyclovir (e.g. about thymidine kinase, "attracted to"), ganciclovir, or the influenza drugs.
3) Does the acyclovir card have any figure or diagram near it? What is printed exactly?
4) Are there any images, icons, or photographs anywhere on the page?
5) Quote the exact heading hierarchy printed at the top of the page (banner text, section, chapter).`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
