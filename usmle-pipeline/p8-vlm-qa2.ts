import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL CONTENT-FIDELITY QA task. Do NOT write code. Read the rendered text closely and answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p8/element-crop-v0-light.png');
  const desc = `This is a LIGHT-MODE crop of a rendered KYP registry visual "AcutePhaseReactantMap" adapting textbook acute-inflammation pages. Verify against the source facts (book 209-210): rubor/calor = vasodilation (relaxation of arteriolar smooth muscle) with histamine, prostaglandins, bradykinin, NO; tumor = endothelial contraction/disruption, increased vascular permeability, protein-rich exudate from postcapillary venules, increased interstitial oncotic pressure, leukotrienes C4 D4 E4 + histamine + serotonin + bradykinin; dolor = bradykinin, PGE2, histamine; functio laesa = hand cellulitis; harmful triple = excessive septic shock, prolonged TB, inappropriate SLE; fever = pyrogens LPS, macrophage IL-1 and TNF, COX in perivascular cells of anterior hypothalamus, PGE2, temperature set point; reactants positive = CRP opsonin fixing complement, ferritin iron sequestration, fibrinogen correlating with ESR, haptoglobin binding extracellular hemoglobin, hepcidin degrading ferroportin for anemia of chronic disease, procalcitonin bacterial infections, serum amyloid A secondary amyloidosis; negative = albumin conserving amino acids, transferrin internalized, transthyretin prealbumin; ESR = fibrinogen coats RBCs, negative charge, aggregation, faster fall; up-list = anemias, infections, giant cell temporal arteritis, polymyalgia rheumatica, metastases, multiple myeloma, renal disease, pregnancy; down-list = sickle cell, polycythemia diluting, HF, microcytosis, hypofibrinogenemia; panel = stimuli infections trauma necrosis foreign bodies; mediators TLRs arachidonic acid metabolites neutrophils eosinophils pre-existing antibodies mast cells basophils complement Hageman factor XII; components vascular + cellular; outcomes resolution IL-10 TGF-beta, persistent IL-8, abscess, chronic via APC CD4 Th, scarring; inflammasome DAMPs PAMPs microbial products uric acid crystals IL-1; extravasation 4 steps margination rolling adhesion transmigration migration; macrophages peak 2-3 days.
Questions:
1) Read the FINAL line of every card in all three columns and the two bottom strips — quote each verbatim. Are any truncated mid-word or mid-sentence?
2) Do all the source facts above appear with their key phrases intact (the mediator lists, the reactant functions, both ESR lists, the outcome cytokines)?
3) Any missing glyphs (β, ↑, ↓, ⊝, →, ×) or rendering artifacts?
4) OVERALL: List ANY defect, or state CLEAN.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the crop now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
