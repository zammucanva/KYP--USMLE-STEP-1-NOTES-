import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

const QA = "/home/z/my-project/kyp-usmle-notes/docs/qa";

const guard = `IMPORTANT: This is a RENDERED-VISUAL QA ADJUDICATION task (round 2c, right-half 2x render). Do NOT write code, HTML, or CSS. Read exactly what is printed. Keep it factual and terse.`;

async function main() {
  const zai = await ZAI.create();
  {
    const img = readFileSync(`${QA}/p15/element-crop-2x-dark-right.png`);
    const q = `This is the RIGHT HALF of a 2x-resolution dark-theme render of the KYP visual "MetastasisRouteMap" (metastasis routes and organ patterns). Adjudicate these specific lines:
1) THE FIRST-CAPILLARY-BED panel (the routing logic): read its lines (lung to systemic circulation, colon to liver via portal drainage, liver to lungs, etc.) — COMPLETE or TRUNCATED?
2) The four organ target cards' ranking lines: BONE (Prostate, breast >> lung > kidney, colon + the blastic [prostate, small cell lung cancer] / mixed [breast] / lytic [kidney, colon, non-small cell lung cancer] fork + axial skeleton note); LIVER (Colon > breast >> pancreas, lung, prostate + scattered-throughout-parenchyma note); LUNG (Colon, breast >> kidney, prostate + typically involve both lungs); BRAIN (Lung > breast >> melanoma > colon, prostate + gray-white matter junction note) — read each COMPLETE or TRUNCATED.
3) VERDICT: PASS or FAIL with one-line reason.`;
    const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages: [{ role: 'user', content: [ { type: 'text', text: `${guard}\n\n${q}` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${img.toString('base64')}` } } ] }], thinking: { type: 'disabled' } });
    console.log(`\n########## p15 right-half adjudication ##########\n` + (r.choices?.[0]?.message?.content ?? ''));
  }
  {
    const img = readFileSync(`${QA}/p16/element-crop-2x-dark-right.png`);
    const q = `This is the RIGHT HALF of a 2x-resolution dark-theme render of the KYP visual "OncogeneTumorSuppressorMap". Adjudicate these specific lines:
1) The tumor-suppressor rule panel's RB1 two-hit example (inherited first hit + somatic second hit, Knudson 2-hit) — read COMPLETE or TRUNCATED?
2) The G1/S GATEKEEPERS rows: RB1 (inhibits E2F; blocks G1 to S; retinoblastoma, osteosarcoma [Bone cancer]), CDKN2A (p16, blocks G1 to S; many cancers eg melanoma, lung, pancreatic), TP53 (p53, activates p21, blocks G1 to S; most cancers, Li-Fraumeni [SBLA] syndrome with the Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland split) — read each COMPLETE or TRUNCATED?
3) The syndrome-gene rows: MEN1/MENin, NF1/neurofibromin, NF2/merlin, TSC1/hamartin, TSC2/tuberin ("2berin"), VHL/inhibits hypoxia-inducible factor 1alpha, WT1/Wilms tumor — read each COMPLETE or TRUNCATED?
4) VERDICT: PASS or FAIL with one-line reason.`;
    const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages: [{ role: 'user', content: [ { type: 'text', text: `${guard}\n\n${q}` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${img.toString('base64')}` } } ] }], thinking: { type: 'disabled' } });
    console.log(`\n########## p16 right-half adjudication ##########\n` + (r.choices?.[0]?.message?.content ?? ''));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
