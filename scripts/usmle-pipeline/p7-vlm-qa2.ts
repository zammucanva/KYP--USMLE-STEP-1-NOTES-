import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';
async function main() {
  const zai = await ZAI.create();
  const guard = `IMPORTANT: This is a RENDERED-VISUAL CONTENT-FIDELITY QA task. Do NOT write code. Read the rendered text closely and answer the numbered questions. Keep it factual and terse.`;
  const png = readFileSync('/home/z/my-project/kyp-usmle-notes/docs/qa/p7/element-crop-v0-light.png');
  const desc = `This is a LIGHT-MODE crop of a rendered KYP registry visual "AmyloidDepositionMap" adapting a textbook amyloidosis page. Read it closely, line by line, and verify against the source facts.
The source page (book 208) says: definition = "Extracellular deposition of protein in abnormal fibrillar form (β-pleated sheet configuration) → cell injury and apoptosis"; manifestations = Renal—nephrotic syndrome; Cardiac—restrictive cardiomyopathy; GI—hepatosplenomegaly; Neurologic—dementia, peripheral neuropathy; Musculoskeletal—muscle enlargement (eg, macroglossia), carpal tunnel syndrome; Skin—waxy thickening, easy bruising; stain = Congo red (red/orange on nonpolarized light, apple-green birefringence on polarized light) and H&E (amorphous pink); Systemic rows: Primary=AL (from Ig Light chains) seen in plasma cell dyscrasias (eg, multiple myeloma); Secondary=AA (serum Amyloid A) seen in chronic inflammatory conditions (eg, rheumatoid arthritis, IBD, familial Mediterranean fever, protracted infection); Transthyretin = sporadic (wild-type TTR)—slowly progressive, associated with aging, mainly affects the heart / hereditary (mutated TTR)—familial amyloid polyneuropathy and/or cardiomyopathy; Dialysis-related=β2-microglobulin seen in patients with ESRD on long-term dialysis; Localized rows: Alzheimer=β-amyloid protein cleaved from amyloid precursor protein; Isolated atrial=ANP common, associated with aging, ↑ risk for atrial fibrillation; T2DM=Islet amyloid polypeptide caused by deposition of amylin in pancreatic islets; Medullary thyroid cancer=Calcitonin secreted from tumor cells.
Questions:
1) Read the FINAL line of each of the four systemic cards (the muted commentary lines) and each localized card's description line — quote them verbatim. Are any of them truncated mid-word or mid-sentence?
2) Does every one of the nine source facts above appear in the visual with its key phrase intact (light chains, serum Amyloid A, wild-type aging heart, mutated familial polyneuropathy, ESRD long-term dialysis, amyloid precursor protein, atrial fibrillation, amylin in pancreatic islets, secreted from tumor cells)?
3) The TRANSTHYRETIN card carries both the sporadic and hereditary lines — are both fully rendered with the em-dash phrasing intact?
4) Any letter-level rendering artifacts, missing glyphs (β, ↑, →, ²), or spacing errors?
5) OVERALL: List ANY defect, or state CLEAN.`;
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the crop now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  console.log(r.choices?.[0]?.message?.content ?? '');
}
main().catch((e) => { console.error(e); process.exit(1); });
