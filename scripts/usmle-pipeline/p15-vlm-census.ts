import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/p1x-241-241.png');
  const desc = `This is page 241 of First Aid for the USMLE Step 1 2026 (pdf 241 = printed book page 219, PATHOLOGY — NEOPLASIA: "Common metastases"). pdfimages reports TWO raster images on this page: an 188x245 8bpc image beside the Bone row (lettered A) and an 188x150 8bpc image beside the Liver row (lettered B). The text layer prints: the CLaSH paragraph (Most Carcinomas spread via Lymphatics; most Sarcomas spread Hematogenously), then a table with columns SITe Of MeTASTASIS / 10 TUMOR (a mangled 1° degree sign) / NOTeS and four rows (Bone, Liver, Lung, Brain) with a "Predilection for axial skeleton A" note and a "Scattered throughout liver parenchyma B" note.
Questions:
1) Describe photograph A precisely — what kind of image is it (a skeleton diagram or radiograph illustrating the axial skeleton? a bone scan?). Which bones/regions are shown or highlighted, what colors/markers are used, where does the letter A sit, and how large is the image on the page?
2) Describe photograph B precisely — is it a gross liver specimen (a cut surface with scattered metastatic lesions)? Describe the lesions' color, size, and distribution pattern, where the letter B sits, and how large the image is.
3) Confirm the exact table geometry: 4 rows (Bone / Liver / Lung / Brain) x 3 columns (SITE OF METASTASIS / 1° TUMOR / NOTES). Does the header print "10 TUMOR" (the degree sign rendered oddly)? Where does the "Liver" row label sit relative to images A and B?
4) Are there any margin notes or mnemonics on this page? Quote verbatim. (The CLaSH line in the body text is known — report anything in the MARGINS beyond the body text.)`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the page now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
