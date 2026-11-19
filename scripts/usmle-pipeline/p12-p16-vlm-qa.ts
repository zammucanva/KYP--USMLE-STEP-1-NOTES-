import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

const QA = "/home/z/my-project/kyp-usmle-notes/docs/qa";

const LAYOUTS: Record<string, { name: string; desc: string }> = {
  p12: {
    name: "NomenclatureProgressionMap",
    desc: `Intended layout: FOUR bands. Band 1: the five-station neoplastic progression as original glyphs — normal epithelium with basal-to-apical polarity, dysplasia (pleomorphic cells, increased N:C), carcinoma in situ (full-thickness atypia, MEMBRANE INTACT chip), invasive carcinoma (breached basement membrane, metalloproteinase arrows, E-cadherin break), metastasis (emboli boarding a vessel to a distant organ); plus a three-label legend and a two-weapons strip. Band 2: the naming rules — carcinoma (epithelial) vs sarcoma (mesenchymal), benign vs malignant trait lists, hamartoma vs choristoma glyphs. Band 3: the verbatim nine-row nomenclature table (Epithelium adenoma/papilloma vs adenocarcinoma/papillary carcinoma; the Mesenchyme group band over blood vessels/smooth muscle/striated muscle/connective tissue/bone/fat rows; the Blood cells row with an EMPTY benign cell and Leukemia, lymphoma malignant; Melanocyte nevus/mole vs melanoma). Band 4: grade vs stage — low/high grade circles, T/N/M chips with lymph-node and vessel glyphs, an "M > N > T" banner, stage-determines-survival verdict.`,
  },
  p13: {
    name: "HallmarksOfCancerMap",
    desc: `Intended layout: a NINE-station map in SIX color-banded, chevron-linked bands. GROWTH AXIS band (station 1 growth-signal self-sufficiency with PDGF/HER2/RAS/MYC/cyclins-CDKs markers vs station 2 anti-growth insensitivity with Rb and E-cadherin/NF2); DEATH AXIS band (evasion of apoptosis: TP53, BCL2 to follicular lymphoma); IMMORTALITY band (telomerase); SUPPLY LINES band (sustained angiogenesis VEGF with neoangiogenesis-vs-vasculogenesis and leaky vessels + the Warburg effect with PKM2/LDH-A and increased lactate); IMMUNE ESCAPE band (three prongs: decreased MHC I, TGF-beta/regulatory T cells, checkpoint upregulation); SPREAD band (tissue invasion cascade + metastasis with first-encountered-capillary-bed and lung-to-adrenals tropism). Each station: numbered chip + distilled mechanism + MARKERS line; census footer.`,
  },
  p14: {
    name: "ImmunotherapyTargetMap",
    desc: `Intended layout: LEFT panel — the immune-checkpoint figure redrawn with original glyphs: an APC cell (MHC II + Antigen engaging TCR, B7), a T cell (TCR, CD28 engaging B7 with costimulation marker, CTLA-4 as the competing off-switch, PD-1), a tumor cell (MHC I, PD-L1) facing the T cell's PD-1; seven Y-glyph drug blockers named at binding sites (ipilimumab on CTLA-4; cemiplimab/nivolumab/pembrolizumab on the PD-1 axis; atezolizumab/durvalumab/avelumab on the PD-L1 side); verbatim axis cards and a drug directory. RIGHT panel — the cancer epidemiology grid: incidence row and mortality row for MALES (prostate/lung/colon-rectum; lung/prostate/colon-rectum), FEMALES (breast/lung/colon-rectum; lung/breast/colon-rectum), CHILDREN AGE 0-14 (leukemia/CNS/neuroblastoma twice), with the NOTES lines (lung incidence down in males; cancer 2nd leading cause of death, heart disease 1st) and the skin-cancer exclusion; flip-rule and standing-rules cards. BOTTOM: a release-the-brake band + census footer.`,
  },
  p15: {
    name: "MetastasisRouteMap",
    desc: `Intended layout: header band; a route-split band (a primary-tumor glyph diverging into a CARCINOMA-to-LYMPHATICS lane and a SARCOMA-to-BLOOD lane with node and bloodstream glyphs, the CLaSH rule quoted, the four blood-riding carcinomas — follicular thyroid, choriocarcinoma, renal cell, hepatocellular — flagged onto the blood lane, plus a first-capillary-bed routing panel); four organ target cards (BONE with the blastic/mixed/lytic fork and prostate-breast-lung-kidney-colon ranking; LIVER with colon-greater-than-breast ranking; LUNG with both-lungs note; BRAIN with the gray-white junction rule and lung-greater-than-breast ranking); a text-only PHOTOGRAPHS-DESCRIBED panel (A = a sagittal MR of the spine with metastatic lesions described in words; B = a gross liver cut surface with scattered pale nodular masses described in words — never drawn); a multiple-vs-solitary discriminator strip; footer.`,
  },
  p16: {
    name: "OncogeneTumorSuppressorMap",
    desc: `Intended layout: TOP rule-panel with allele arithmetic — the oncogene ONE-hit gain-of-function fork (one allele square hit, the RET example) against the tumor-suppressor Knudson TWO-hit fork (both allele squares X-knocked out, inherited first hit + somatic second hit, the RB1 example). MIDDLE: the 12-oncogene roster as a kinase-classification grid — receptor tyrosine kinases ALK/EGFR/HER2/RET, non-receptor BCR-ABL/JAK2, serine-threonine BRAF (with its five neoplasms split across lines), cytokine receptor c-KIT (CD117), signaling KRAS, transcription factors MYCC/MYCN, antiapoptotic BCL-2 — each with its associated neoplasm. BOTTOM: the 15 tumor-suppressor roster as a function-family grid — G1-to-S gatekeepers RB1/CDKN2A/TP53 (with the Li-Fraumeni SBLA split), pathway negative regulators APC/PTEN/VHL, DNA repair BRCA1/BRCA2, and the eight syndrome genes (DCC, SMAD4, MEN1, NF1, NF2, TSC1, TSC2, WT1) with their conditions. Every row verbatim-faithful to the source table.`,
  },
};

const guard = `IMPORTANT: This is a RENDERED-VISUAL QA INSPECTION task. Do NOT write code, HTML, or CSS. Describe exactly what you see, then answer the numbered questions. Keep it factual and terse.`;

async function main() {
  const zai = await ZAI.create();
  for (const pid of Object.keys(LAYOUTS)) {
    const { name, desc } = LAYOUTS[pid];
    const png = readFileSync(`${QA}/${pid}/element-crop-v0-light.png`);
    const png2 = readFileSync(`${QA}/${pid}/element-crop-v0-dark.png`);
    const q = `These are LIGHT-MODE and DARK-MODE crops of a rendered original KYP registry visual "${name}" for a USMLE study-note page. ${desc}
Questions:
1) TEXT CLIPPING: Is any text cut off mid-word, overlapping another text, or escaping its card/panel/band boundary? Name any offender verbatim.
2) STRUCTURE: Are all the intended bands/panels/cards present, inside their borders, and non-overlapping?
3) READABILITY: Are the smallest labels (drug names, gene-product lines, rankings, footnotes) readable?
4) THEME: In the dark crop, are all texts readable (no dark-on-dark)? Any invisible element?
5) OVERALL: List ANY visual defect a reviewer would flag, or state CLEAN if none.`;
    const messages: VisionMessage[] = [
      { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${q}\n\nInspect both crops now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${png2.toString('base64')}` } } ] },
    ];
    const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
    console.log(`\n########## ${pid} ${name} ##########\n` + (r.choices?.[0]?.message?.content ?? ''));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
