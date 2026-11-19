import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/p1x-240-240.png');
  const desc = `This is page 240 of First Aid for the USMLE Step 1 2026 (pdf 240 = printed book page 218, PATHOLOGY — NEOPLASIA: "Immune checkpoint interactions" at the top and "Cancer epidemiology" at the bottom). pdfimages reports ZERO raster images on this page — the checkpoint figure should be pure VECTOR LINE ART.
Questions:
1) Describe the "Immune checkpoint interactions" figure topology EXACTLY: which molecules sit on the APC (expected: MHC II and B7, with an Antigen on MHC II facing a TCR), which on the T cell (expected: TCR, CD28, CTLA-4, PD-1), and which on the Tumor cell (expected: MHC I and PD-L1)? Where does each antibody drug bind — Ipilimumab on CTLA-4, Atezolizumab/Durvalumab/Avelumab on PD-L1, Cemiplimab/Nivolumab/Pembrolizumab on PD-1? Are the antibodies drawn as Y-shaped blockers? Is there a "T cell activation" label between the APC and T cell?
2) Confirm the epidemiology table structure: rows "Cancer incidence" and "Cancer mortality"; columns MALES / FEMALES / CHILDREN (AGE 0-14) / NOTES. Confirm the cells: incidence MALES 1. Prostate 2. Lung 3. Colon/rectum; FEMALES 1. Breast 2. Lung 3. Colon/rectum; CHILDREN 1. Leukemia 2. CNS 3. Neuroblastoma; NOTES "Lung cancer incidence has ↓ in males, but has not changed significantly in females." Mortality MALES 1. Lung 2. Prostate 3. Colon/rectum; FEMALES 1. Lung 2. Breast 3. Colon/rectum; CHILDREN 1. Leukemia 2. CNS 3. Neuroblastoma; NOTES "Cancer is the 2nd leading cause of death in the United States (heart disease is 1st)." Also confirm the line above the table: "Skin cancer (basal > squamous >> melanoma) is the most common cancer (not included below)."
3) Any margin notes or mnemonics anywhere on the page? Quote verbatim if present.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the page now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
