import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/p-230-230.png');
  const desc = `This is page 230 of First Aid for the USMLE Step 1 2026 (pdf page 230 = printed book page 208, PATHOLOGY — Cellular Injury, the AMYLOIDOSIS page). pdfimages reports TWO cmyk JPEG rasters (~188x177 and ~188x175 at 150 dpi), lettered A and B in the text (the staining block reads "red/orange on nonpolarized light A, apple-green birefringence on polarized light B").
Questions:
1) Describe each of the two photographs precisely: colors, texture, magnification feel, and which is A vs B. Is A a Congo red stain under nonpolarized light (salmon/red-orange amyloid) and B the same deposit under polarized light (apple-green birefringence)? Where do they sit on the page (right column beside the definition?)?
2) Confirm the definition block: extracellular deposition of protein in abnormal fibrillar form (beta-pleated sheet) causing cell injury and apoptosis.
3) Confirm the manifestations list (Renal—nephrotic syndrome; Cardiac—restrictive cardiomyopathy; GI—hepatosplenomegaly; Neurologic—dementia, peripheral neuropathy; Musculoskeletal—muscle enlargement eg macroglossia, carpal tunnel syndrome; Skin—waxy thickening, easy bruising).
4) Confirm the COMMON TYPES table structure: a 4-column table (COMMON TYPES | FIBRIL PROTEIN | NOTES) split into Systemic rows (Primary amyloidosis AL, Secondary amyloidosis AA, Transthyretin amyloidosis, Dialysis-related beta2-microglobulin) and Localized rows (Alzheimer disease beta-amyloid, Isolated atrial amyloidosis ANP, Type 2 diabetes mellitus islet amyloid polypeptide, Medullary thyroid cancer calcitonin). Is "Systemic" and "Localized" printed as group headers in the left column?
5) Any margin notes or mnemonics printed anywhere on the page (beside the table, beside the photos, in the footer)? Quote them verbatim. Also confirm the H&E appearance line (amorphous pink).`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
