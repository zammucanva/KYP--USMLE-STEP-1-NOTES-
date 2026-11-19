import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

// P16 oncogenes-tumor-suppressors — VLM census confirm (pdf 242 = book 220).
// pdfimages census: ZERO raster images on the page — pure text: TWO large
// back-to-back tables (Oncogenes 12 rows; Tumor suppressor genes 15 rows)
// with their two rule paragraphs. This script asks the VLM to confirm the
// layout and check for margin notes/mnemonics. 2 retries, then fall back to
// the text census (documented in the manifest notes).

const PNG = '/home/z/my-project/scripts/p-pages/p1x-242-242.png';

async function attempt(zai: Awaited<ReturnType<typeof ZAI.create>>, triesLeft: number): Promise<string> {
  const guard = `IMPORTANT: This is a PAGE LAYOUT INSPECTION task. Do NOT write code, HTML, or CSS. Do NOT recreate the page. Describe exactly what is printed, then answer the numbered questions. Keep it factual and terse.`;
  const desc = `This is pdf page 242 of First Aid for the USMLE Step 1 2026 (printed book page 220, PATHOLOGY — NEOPLASIA: Oncogenes; Tumor suppressor genes). pdfimages reports ZERO raster images on this page — the page should be pure text: the Oncogenes block (rule paragraph + a 12-row table GENE/GENE PRODUCT/ASSOCIATED NEOPLASM: ALK, EGFR (ERBB1), HER2 (ERBB2), RET, BCR-ABL, JAK2, BRAF, c-KIT, MYCC (c-myc), MYCN (N-myc), KRAS, BCL-2) followed by the Tumor suppressor genes block (rule paragraph + a 15-row table GENE/GENE PRODUCT/ASSOCIATED CONDITION: APC, BRCA1/BRCA2, CDKN2A, DCC, SMAD4 (DPC4), MEN1, NF1, NF2, PTEN, RB1, TP53, TSC1, TSC2, VHL, WT1).
Questions:
1) Confirm there are NO photographs, micrographs, or figure illustrations anywhere on the page — only the two text tables and their rule paragraphs. Any image content at all?
2) Confirm the two rule paragraphs: (a) Oncogenes — "Gain of function mutation converts proto-oncogene (normal gene) to oncogene → ↑ cancer risk. Requires damage to only one allele of a proto-oncogene."; (b) Tumor suppressor genes — "Loss of function → ↑ cancer risk; both (two) alleles of a tumor suppressor gene must be lost for expression of disease (the Knudson 2-hit hypothesis)."
3) Confirm the table row count: 12 oncogene rows and 15 tumor-suppressor rows. Any rows or columns I missed?
4) Do any MARGIN NOTES, mnemonics, memory aids, or sidebar text print on the page (outside the two tables and rule paragraphs)? Quote verbatim if so.
5) Confirm the odd capitalizations printed in the table: "REceptor Tyrosine kinase" (RET row), "CytoKIne receptor (CD117)" (c-KIT row), "BReast, ovarian, prostate, pancreatic CAncers" (BRCA row), "Prostate, breasT, and ENdometrial cancers" (PTEN row), Tuberin ("2berin") (TSC2 row).`;
  const png = readFileSync(PNG);
  const messages: VisionMessage[] = [
    { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${desc}\n\nInspect the page now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } } ] },
  ];
  const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
  const out = r.choices?.[0]?.message?.content ?? '';
  if (!out.trim() && triesLeft > 0) return attempt(zai, triesLeft - 1);
  return out;
}

async function main() {
  const zai = await ZAI.create();
  try {
    const out = await attempt(zai, 2);
    if (!out.trim()) throw new Error('empty VLM response after retries');
    console.log(out);
  } catch (e) {
    console.error('VLM census FAILED after 2 retries — proceeding with the pdfimages + text census:', e);
    process.exit(2);
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
