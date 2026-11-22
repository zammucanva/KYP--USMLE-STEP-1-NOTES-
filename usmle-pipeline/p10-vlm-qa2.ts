import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL CONTENT-FIDELITY QA task. Do NOT write code. Read the rendered text closely and answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p10/element-crop-v0-light.png');
  const desc = `This is a LIGHT-MODE crop of a rendered KYP registry visual "WoundHealingPhaseMap" adapting a textbook wound-healing page. Source facts to verify: chronic inflammation = prolonged, mononuclear infiltration (macrophages, lymphocytes, plasma cells), simultaneous destruction and repair; stimuli = persistent infections (TB, T pallidum, certain fungi and viruses) → type IV hypersensitivity, autoimmune, silica, foreign material; Th1 → IFN-γ → classical activation (proinflammatory); Th2 → IL-4 and IL-13 → alternative activation (repair, anti-inflammatory); outcomes = scarring, amyloidosis, neoplastic transformation (HCV → hepatocellular carcinoma; H pylori → chronic gastritis → gastric adenocarcinoma). Mediators: FGF/VEGF stimulate angiogenesis; TGF-β = angiogenesis + fibrosis; PDGF = activated platelets and macrophages, vascular remodeling, smooth muscle migration, fibroblast collagen growth; metalloproteinases = tissue remodeling; EGF = cell growth via tyrosine kinases (EGFR/ErbB1). Phases: inflammatory up to 3 days (platelets, neutrophils, macrophages; clot, ↑ permeability, macrophages clear debris 2 days later); proliferative day 3-weeks (fibroblasts, myofibroblasts, endothelial cells, keratinocytes, macrophages; granulation tissue + type III collagen, wound contraction via myofibroblasts; delayed in vitamin C and copper deficiency); remodeling 1 week-6+ months (fibroblasts; type III → type I, ↑ tensile strength; zinc-requiring collagenases; zinc deficiency → delayed wound healing).
Questions:
1) Read the FINAL line of each of the 5 mediator cards and each of the 3 phase cards — quote them verbatim. Any truncated mid-word?
2) Do all the source facts above appear with key phrases intact (the Th1/Th2 fork, both oncogenesis chains, PDGF's three-part role, both deficiency lockouts, type III → type I)?
3) Any missing glyphs (β, γ, ↑, →, ·) or rendering artifacts?
4) OVERALL: List ANY defect, or state CLEAN.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the crop now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
