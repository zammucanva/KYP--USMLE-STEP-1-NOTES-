import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/p10-234.png');
  const desc = `This is page 234 of First Aid for the USMLE Step 1 2026 (pdf 234 = printed book page 212, PATHOLOGY — INFLAMMATION: the Chronic inflammation block + the Wound healing section). pdfimages reports NO raster images on this page.
Questions:
1) Confirm the Chronic inflammation block: the definition (prolonged, mononuclear infiltration — macrophages, lymphocytes, plasma cells; simultaneous tissue destruction and repair), STIMULI (persistent infections eg TB, T pallidum, certain fungi and viruses → type IV hypersensitivity; autoimmune; toxic agents eg silica; foreign material), MEDIATORS (macrophages dominant; Th1 → IFN-γ → classical activation; Th2 → IL-4 and IL-13 → alternative activation), OUTCOMES (scarring, amyloidosis, neoplastic transformation — HCV → HCC, H pylori → gastric adenocarcinoma).
2) Confirm the Wound healing Tissue mediators table (MEDIATOR | ROLE): FGF, TGF-β, VEGF, PDGF (with its 3-line role), Metalloproteinases, EGF (with EGFR/ErbB1).
3) Confirm the PHASES OF WOUND HEALING table (PHASE OF WOUND HEALING | EFFECTOR CELLS | CHARACTERISTICS): Inflammatory (up to 3 days), Proliferative (day 3-weeks; with the vitamin C and copper deficiency note), Remodeling (1 week-6+ months; type III → type I collagen; collagenases require zinc; zinc deficiency note).
4) Any margin notes or mnemonics printed anywhere? Quote verbatim.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect it now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
