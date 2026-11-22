import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL CONTENT-FIDELITY QA task. Do NOT write code. Read the rendered text closely and answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p11/element-crop-v0-light.png');
  const desc = `This is a LIGHT-MODE crop of a rendered KYP registry visual "GranulomaScarMap" adapting textbook pages on granulomatous inflammation and scars. Source facts to verify: definition = a pattern of chronic inflammation, granulomas wall off a resistant stimulus without eradicating it → persistent inflammation → fibrosis, organ damage; histology = epithelioid cells (activated macrophages, abundant pink cytoplasm), lymphocytes, multinucleated giant cells (fusion of several activated macrophages); caseating = central necrosis, infectious (TB, fungal); noncaseating = no necrosis, noninfectious (sarcoidosis, Crohn); mechanism = APC + IL-12 → CD4+ Th1; Th1 IFN-γ → macrophage activation; macrophage ↑ TNF → epithelioid macrophages + giant cells; anti-TNF rule = sequestering granulomas break down → disseminated disease, test latent TB first; hypercalcemia = ↑ 1α-hydroxylase in activated macrophages → ↑ vitamin D; etiologies infectious = Mycobacteria (TB, leprosy), Bartonella henselae (stellate necrotizing granulomas), Listeria monocytogenes (granulomatosis infantiseptica), Treponema pallidum (3° syphilis), endemic mycoses, schistosomiasis, catalase-positive in CGD; noninfectious = sarcoidosis, Crohn, 1° biliary cholangitis, de Quervain thyroiditis, GPA, EGPA, giant cell temporal arteritis, Takayasu, berylliosis, talcosis, hypersensitivity pneumonitis; scar = 70%-80% tensile strength at 3 months, excess TGF-β; hypertrophic = ↑ type III > I, parallel, confined, infrequent, none; keloid = ↑↑↑ type I > III, disorganized, clawlike beyond borders (earlobes, face, upper extremities), frequent, ↑ darker skin.
Questions:
1) Read the FINAL line of each of the LEFT panel's 4 cards, the RIGHT panel's 3 cards, and the 2 scar comparison cards — quote them verbatim. Any truncated mid-word?
2) Do all the source facts above appear with key phrases intact (the fork, the cascade, both rules, both etiology columns, all 5 scar rows)?
3) Any missing glyphs (β, γ, ↑, →, ⊕, 1α) or rendering artifacts?
4) OVERALL: List ANY defect, or state CLEAN.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the crop now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
