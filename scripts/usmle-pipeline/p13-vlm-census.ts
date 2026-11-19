import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/scripts/p-pages/p1x-239-239.png');
  const desc = `This is page 239 of First Aid for the USMLE Step 1 2026 (pdf 239 = printed book page 217, PATHOLOGY — NEOPLASIA: "Hallmarks of cancer"). pdfimages reports ZERO raster images on this page — the page should be a PURE TEXT two-column table (9 rows: HALLMARK | MECHANISM) with a heading and one intro line.
Questions:
1) Confirm the page heading ("Hallmarks of cancer") and the intro line: "Cancer is caused by (mostly acquired) DNA mutations that affect fundamental cellular processes (eg, growth, DNA repair, survival)." Is the table header printed as HALLMARK / MECHANISM?
2) Confirm the 9 hallmark rows and their left-column labels EXACTLY as printed: Growth signal self-sufficiency; Anti-growth signal insensitivity; Evasion of apoptosis; Limitless replicative potential; Sustained angiogenesis; Warburg effect; Immune evasion in cancer; Tissue invasion; Metastasis. Note any line-wrap peculiarities (eg, which labels break across two lines).
3) Confirm the right-column mechanisms briefly: growth-signal row lists proto-oncogenes (PDGF brain tumors), growth factor receptors (HER2 breast), signaling molecules (RAS), transcription factors (MYC), cell cycle regulators (cyclins/CDKs); anti-growth row lists tumor suppressors (Rb) and loss of E-cadherin (NF2); evasion of apoptosis lists TP53, BCL2 → follicular B cell lymphoma; limitless replication lists telomerase reactivation; sustained angiogenesis lists VEGF, neoangiogenesis vs vasculogenesis, leaky/dilated vessels; Warburg lists aerobic glycolysis driven by pyruvate kinase M2 and LDH-A with ↑ lactate; immune evasion lists ↓ MHC class I, TGF-β + regulatory T cells, immune checkpoint upregulation; tissue invasion lists E-cadherin loss, metalloproteinases, laminin/fibronectin, locomotion; metastasis lists lymphatics/blood, endothelial adhesion, extravasation/homing, first-encountered capillary bed, lung → adrenals tropism.
4) Are there ANY photographs, micrographs, line-art figures, flowcharts, or margin notes/mnemonics anywhere on the page (including margins)? Quote verbatim if present.
5) Confirm the footer print line (FAS1_2026_04-Pathol.indd 217 + timestamp) and any other page furniture.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the page now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
