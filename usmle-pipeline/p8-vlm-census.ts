import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/p8-231.png');
  const png2 = readFileSync('/home/z/my-project/scripts/p-pages/p8-232.png');
  const desc = `These are pages 231 and 232 of First Aid for the USMLE Step 1 2026 (pdf 231-232 = printed book pages 209-210, PATHOLOGY — INFLAMMATION banner: the Inflammation definition + Cardinal signs + Acute-phase reactants on 209; the ESR block + Acute inflammation on 210). pdfimages reports ONE cmyk JPEG raster (~187x188 at 150 dpi) on page 232, lettered A beside "Characterized by neutrophils in tissue A".
Questions:
1) PAGE 209: Confirm the Inflammation definition block (eliminate initial cause, remove necrotic cells, initiate tissue repair; divided into acute and chronic; harmful if excessive [septic shock], prolonged [TB], or inappropriate [SLE]). Confirm the Cardinal signs table (SIGN | MECHANISM) with rows Rubor and calor / Tumor / Dolor / Functio laesa, then the Systemic manifestations (acute-phase reaction) rows: Fever / Leukocytosis / ↑ plasma acute-phase reactants.
2) PAGE 209: Confirm the Acute-phase reactants table structure: POSITIVE (UPREGULATED) rows (C-reactive protein, Ferritin, Fibrinogen, Haptoglobin, Hepcidin, Procalcitonin, Serum amyloid A) and NEGATIVE (DOWNREGULATED) rows (Albumin, Transferrin, Transthyretin). Is POSITIVe/NeGATIVe printed as group labels with the odd small-caps styling?
3) PAGE 210: Confirm the ESR block: the mechanism paragraph (RBCs separated via negative charges; fibrinogen coats RBCs → ↓ charge → ↑ aggregation → ↑ ESR; co-tested with CRP), then the two-column ↑ ESR / ↓ ESR list (anemias, infections, inflammation [giant cell temporal arteritis, polymyalgia rheumatica], cancer [metastases, multiple myeloma], renal disease, pregnancy vs sickle cell, polycythemia, HF, microcytosis, hypofibrinogenemia) with the 'a Lower than expected' footnote.
4) PAGE 210: Describe photograph A precisely (the acute inflammation micrograph): colors, cells, magnification feel, where it sits on the page. Is it an H&E micrograph showing neutrophils (multilobed nuclei, dark purple) infiltrating tissue?
5) PAGE 210: Confirm the Acute inflammation block structure: the definition (transient and early response, neutrophils in tissue, rapid onset seconds to minutes, short duration minutes to days, innate immune system), then the four-row table STIMULI / MEDIATORS / COMPONENTS / OUTCOMES with the two margin blocks beside it (the Inflammasome block and the 4-step extravasation + macrophages-predominate-late block).
6) Any margin notes or mnemonics printed anywhere on either page? Quote them verbatim.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect both pages now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
