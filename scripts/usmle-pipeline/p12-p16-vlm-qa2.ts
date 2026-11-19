import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

const QA = "/home/z/my-project/kyp-usmle-notes/docs/qa";

const FLAGGED: Record<string, string> = {
  p12: `the three-label legend line (Basement membrane / lamina descriptions), the tiny footnote lines under the nomenclature table (eg the Blood-cells note), and the faint trait-list lines in the benign/malignant panels; also read the "TNM importance: M > N > T" banner and the verdict line under grade-vs-stage COMPLETE.`,
  p13: `every "MARKERS:" line (eg PDGF, HER2, RAS, MYC, cyclins/CDKs; Rb, E-cadherin/NF2; TP53, BCL2; telomerase; VEGF; PKM2, LDH-A; the three immune-escape prongs; the invasion cascade; the metastasis note) — read each line COMPLETE.`,
  p14: `the checkpoint figure micro-labels: every drug name (ipilimumab, cemiplimab, nivolumab, pembrolizumab, atezolizumab, durvalumab, avelumab), every molecule label (MHC II, TCR, B7, CD28, CTLA-4, PD-1, PD-L1, MHC I, Antigen), the "T cell activation" line, the directory column labels and entries, and the epidemiology NOTES lines (lung incidence note; 2nd-leading-cause note) — read each COMPLETE.`,
  p15: `the route-split footnote lines under each lane, the first-capillary-bed panel lines (lung to systemic, colon to liver, liver to lungs), the organ-card ranking lines and the gray-white junction note, and both photograph-description paragraphs (A the sagittal spine MR description; B the gross liver description) — read each COMPLETE.`,
  p16: `the rule-panel allele lines (the RET example; the RB1 two-hit example with inherited first hit and somatic second hit), the BRAF five-neoplasm list, the TP53 Li-Fraumeni SBLA split, the TSC1/TSC2 protein names (hamartin, tuberin), and the in-card gray asides — read each COMPLETE.`,
};

const guard = `IMPORTANT: This is a RENDERED-VISUAL QA ADJUDICATION task. Do NOT write code, HTML, or CSS. Read exactly what is printed. Keep it factual and terse.`;

async function main() {
  const zai = await ZAI.create();
  for (const pid of Object.keys(FLAGGED)) {
    const light = readFileSync(`${QA}/${pid}/element-crop-light-v2.png`);
    const zoom = readFileSync(`${QA}/${pid}/element-crop-2x-dark.png`);
    const q = `Image 1 is the LIGHT-THEME render of a KYP registry visual (round 2; the round-1 "light" crop was accidentally dark-themed — this one is confirmed light by the machine probe). Image 2 is a TRUE-2x-resolution DARK-THEME render of the same visual for micro-label adjudication.
Questions:
1) LIGHT THEME: Confirm image 1 is light-themed (light background) and that all texts are readable dark-on-light; name any invisible or low-contrast element.
2) STRUCTURE in light theme: any clipped, overlapping, or escaped text? Name offenders verbatim or state none.
3) 2x ADJUDICATION: In image 2, read ${FLAGGED[pid]}
4) VERDICT: For each line you read in (3): COMPLETE (fully readable, not truncated) or TRUNCATED/ILLEGIBLE (name it). 
5) FINAL: PASS or FAIL with one-line reason.`;
    const messages: VisionMessage[] = [
      { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${q}\n\nInspect both images now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${light.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${zoom.toString('base64')}` } } ] },
    ];
    const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
    console.log(`\n########## ${pid} adjudication ##########\n` + (r.choices?.[0]?.message?.content ?? ''));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
