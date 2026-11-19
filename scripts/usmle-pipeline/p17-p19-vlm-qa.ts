import ZAI, { VisionMessage } from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

const QA = "/home/z/my-project/kyp-usmle-notes/docs/qa";

const LAYOUTS: Record<string, { name: string; desc: string }> = {
  p17: {
    name: "CarcinogenOrganMap",
    desc: `Intended layout: an exposure-to-organ-to-impact route map in FOUR bands — FUNGI & CHEMICALS (aflatoxins from stored grains and nuts to liver hepatocellular carcinoma; alkylating agents from chemotherapy to blood leukemia/lymphoma; aromatic amines from textile dyes and tobacco smoke to bladder transitional cell carcinoma; vinyl chloride from PVC pipes to liver hepatic angiosarcoma), METALS & DUSTS (arsenic's three-arm fan: liver hepatic angiosarcoma + lung cancer + skin SCC; asbestos to lung with bronchogenic carcinoma greater than mesothelioma; nickel/chromium/beryllium/silica occupational to lung cancer), RADIATION (ionizing radiation fan: blood leukemia + thyroid papillary carcinoma; radon from uranium decay in basements to lung cancer with the 2nd-leading-cause badge), LIFESTYLE (tobacco's eight-organ list Bladder/Cervix/Esophagus/Kidney/Larynx/Lung/Oropharynx/Pancreas paired line-by-line with their impacts; ethanol fan: esophagus SCC + liver HCC + breast cancer; nitrosamines from smoked foods to stomach gastric cancer intestinal type). Plus a HEPATIC ANGIOSARCOMA PAIR callout (vinyl chloride + arsenic).`,
  },
  p18: {
    name: "TumorMarkerMap",
    desc: `Intended layout: TOP a rule trio (NOT THE 1° TOOL / MONITOR / BIOPSY DEFINES) with a confounder strip (BPH and prostatitis raise PSA; pregnancy raises AFP; Paget and hepatic origin raise ALP); the oncogenic-microbes roster (8 pathogen-to-cancer pairs: EBV, HBV/HCV, HHV-8 Kaposi, HPV 16/18, H pylori, HTLV-1, liver fluke Clonorchis sinensis, Schistosoma haematobium); the 12-marker serum dashboard (Alkaline phosphatase PLAP, AFP with the pregnancy fork high=neural-tube-defect vs low=Down, hCG, CA 15-3/CA 27-29, CA 19-9, CA 125, Calcitonin, CEA, Chromogranin, LDH, Neuron-specific enolase, PSA with the BPH trap flagged); the 5 modern-diagnostics cards (tumor mutational burden, MSI testing, PD-L1 expression, HRD testing for PARP inhibitors, liquid biopsy ctDNA/ctRNA/CTCs); the 10-stain IHC lineage map (chromogranin+synaptophysin neuroendocrine, cytokeratin epithelial, desmin muscle, GFAP glial, neurofilament neuronal, PSA prostatic, PECAM-1/CD-31 endothelial, S-100 neural crest, TRAP hairy cell leukemia, vimentin mesenchymal with the false-friends note); and a P-glycoprotein efflux-pump glyph (cell, P-gp, ATP, chemo agents pumped out) with the MDR1 quote block.`,
  },
  p19: {
    name: "ParaneoplasticSyndromeMap",
    desc: `Intended layout: the paraneoplastic table as FOUR family bands — MUSCULOSKELETAL & CUTANEOUS (dermatomyositis with Gottron papules and heliotrope rash, acanthosis nigricans, sign of Leser-TreLat, hypertrophic osteoarthropathy with clubbing, the two hypercalcemia routes PTHrP from squamous carcinomas and calcitriol from lymphoma); ENDOCRINE (Cushing from ACTH and SIADH from ADH, both small cell lung cancer); HEMATOLOGIC (polycythemia from EPO with its five tumors pheochromocytoma/renal cell/HCC/hemangioblastoma/leiomyoma, pure red cell aplasia and Good syndrome from thymoma, Trousseau syndrome and nonbacterial thrombotic endocarditis from adenocarcinomas especially pancreatic); NEUROMUSCULAR (anti-NMDA receptor encephalitis from ovarian teratoma, opsoclonus-myoclonus dancing eyes dancing feet from neuroblastoma or SCLC, cerebellar degeneration with anti-Hu/anti-Yo/anti-Tr, encephalomyelitis anti-Hu, Lambert-Eaton presynaptic P/Q-type calcium channels, myasthenia gravis postsynaptic ACh receptors from thymoma) — with SCLC and THYMOMA hotspot tags; then the AGING half: an 11-row system grid (cardiovascular, GI, hematopoietic, immune with thymic involution, musculoskeletal, nervous, special senses, skin with the intrinsic-vs-extrinsic fork, renal, reproductive male/female, respiratory with FEV1/FVC/RV arrows and TLC unchanged); a Lipofuscin card with photograph A described in words only (a histology micrograph with yellow-brown granular pigment, described, never drawn); a footer documenting the p248 NOTES-page continuation quirk.`,
  },
};

const guard = `IMPORTANT: This is a RENDERED-VISUAL QA INSPECTION task. Do NOT write code, HTML, or CSS. Describe exactly what you see, then answer the numbered questions. Keep it factual and terse.`;

async function main() {
  const zai = await ZAI.create();
  for (const pid of Object.keys(LAYOUTS)) {
    const { name, desc } = LAYOUTS[pid];
    const light = readFileSync(`${QA}/${pid}/element-crop-light-v2.png`);
    const dark = readFileSync(`${QA}/${pid}/element-crop-dark.png`);
    const q = `These are LIGHT-MODE and DARK-MODE crops of a rendered original KYP registry visual "${name}" for a USMLE study-note page. ${desc}
Questions:
1) TEXT CLIPPING: Is any text cut off mid-word, overlapping another text, or escaping its card/panel/band boundary? Name any offender verbatim.
2) STRUCTURE: Are all the intended bands/panels/cards present, inside their borders, and non-overlapping? (Ignore the app's floating Search pill — it is page UI, not the visual.)
3) READABILITY: Are drug/gene/marker names and row entries readable at this scale?
4) THEME: In the dark crop, any dark-on-dark or invisible element?
5) OVERALL: List ANY visual defect a reviewer would flag, or state CLEAN if none.`;
    const messages: VisionMessage[] = [
      { role: 'user', content: [ { type: 'text', text: `${guard}\n\n${q}\n\nInspect both crops now.` }, { type: 'image_url', image_url: { url: `data:image/png;base64,${light.toString('base64')}` } }, { type: 'image_url', image_url: { url: `data:image/png;base64,${dark.toString('base64')}` } } ] },
    ];
    const r = await zai.chat.completions.createVision({ model: 'glm-4.6v', messages, thinking: { type: 'disabled' } });
    console.log(`\n########## ${pid} ${name} ##########\n` + (r.choices?.[0]?.message?.content ?? ''));
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
