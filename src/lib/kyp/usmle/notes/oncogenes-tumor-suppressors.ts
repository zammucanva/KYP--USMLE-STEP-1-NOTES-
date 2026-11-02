import type { KypUsMLENote } from "../types";

// Pathology — NEOPLASIA banner (P-batch 16). Source: pdf 242 /
// book 220 (Oncogenes + Tumor suppressor genes — two pure-text
// tables). Census (pdfimages + VLM): NO raster images on the page
// (pdfimages -list returned zero rows). The page is two tables —
// the 12-row ONCOGENE table (gain of function, one allele) and the
// 15-row TUMOR SUPPRESSOR table (loss of function, two alleles —
// the Knudson 2-hit). The visual is an ORIGINAL KYP adaptation
// rendering the two tables as a side-by-side panel map (no source
// figure to redraw). The tables are carried verbatim in the note's
// table blocks. NO copyrighted photographs, NO margin mnemonics
// (VLM confirmed); the KYP memory layer is original.

export const oncogenesTumorSuppressors: KypUsMLENote = {
  id: "oncogenes-tumor-suppressors",
  title: "Oncogenes & Tumor Suppressors",
  subtitle:
    "The two gene classes that drive cancer — one allele or two (book 220) — ONCOGENES: gain of function mutation converts proto-oncogene (normal gene) to oncogene → ↑ cancer risk; requires damage to only ONE allele of a proto-oncogene. The 12-row oncogene table (ALK, EGFR/ERBB1, HER2/ERBB2, RET, BCR-ABL, JAK2, BRAF, c-KIT, MYCC/c-myc, MYCN/N-myc, KRAS, BCL-2) with their gene products (receptor and non-receptor tyrosine kinases, serine/threonine kinase, cytokine receptor CD117, transcription factors, RAS GTPase, antiapoptotic molecule) and associated neoplasms. TUMOR SUPPRESSOR GENES: loss of function → ↑ cancer risk; BOTH (two) alleles of a tumor suppressor gene must be lost for expression of disease (the Knudson 2-hit hypothesis). The 15-row tumor suppressor table (APC, BRCA1/BRCA2, CDKN2A, DCC, SMAD4/DPC4, MEN1, NF1, NF2, PTEN, RB1, TP53, TSC1, TSC2, VHL, WT1) with their gene products (negative regulators of WNT and PI3k/AKT, cell-cycle blockers p16/p53/Rb, RAS GTPase activating protein neurofibromin, merlin schwannomin, hamartin/tuberin, HIF-1α inhibitor, urogenital development transcription factor) and associated conditions (FAP, breast/ovarian/prostate/pancreatic, melanoma/lung/pancreatic, colorectal, pancreatic, MEN1, NF1, NF2, prostate/breast/endometrial, retinoblastoma/osteosarcoma, Li-Fraumeni SBLA, tuberous sclerosis, VHL, Wilms tumor).",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Neoplasia",
  pilotCategory:
    "The oncogene/suppressor page's complete architecture — the gain-of-function one-allele vs loss-of-function two-alleles Knudson 2-hit axis, all 12 oncogenes (ALK, EGFR, HER2, RET, BCR-ABL, JAK2, BRAF, c-KIT, MYCC, MYCN, KRAS, BCL-2) with their gene products and associated neoplasms, all 15 tumor suppressors (APC, BRCA1/2, CDKN2A, DCC, SMAD4, MEN1, NF1, NF2, PTEN, RB1, TP53, TSC1, TSC2, VHL, WT1) with their gene products and associated conditions, and the Li-Fraumeni SBLA syndrome mnemonic expansion (Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland).",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 220 (Pathology — Neoplasia: Oncogenes [the gain-of-function one-allele definition, the 12-row table with ALK, EGFR, HER2, RET, BCR-ABL, JAK2, BRAF, c-KIT, MYCC, MYCN, KRAS, BCL-2]; Tumor suppressor genes [the loss-of-function two-allele Knudson 2-hit definition, the 15-row table with APC, BRCA1/2, CDKN2A, DCC, SMAD4, MEN1, NF1, NF2, PTEN, RB1, TP53, TSC1, TSC2, VHL, WT1, including the Li-Fraumeni SBLA syndrome expansion])",
  tags: [
    "oncogenes",
    "tumor suppressor genes",
    "proto-oncogene",
    "gain of function",
    "loss of function",
    "Knudson two-hit hypothesis",
    "one allele",
    "two alleles",
    "ALK",
    "EGFR",
    "ERBB1",
    "HER2",
    "ERBB2",
    "RET",
    "BCR-ABL",
    "JAK2",
    "BRAF",
    "c-KIT",
    "CD117",
    "MYCC",
    "c-myc",
    "MYCN",
    "N-myc",
    "KRAS",
    "BCL-2",
    "receptor tyrosine kinase",
    "non-receptor tyrosine kinase",
    "serine/threonine kinase",
    "cytokine receptor",
    "transcription factor",
    "RAS GTPase",
    "antiapoptotic molecule",
    "lung adenocarcinoma",
    "breast carcinoma",
    "gastric carcinoma",
    "MEN2A",
    "MEN2B",
    "medullary thyroid carcinoma",
    "papillary thyroid carcinoma",
    "pheochromocytoma",
    "CML",
    "ALL",
    "myeloproliferative neoplasms",
    "melanoma",
    "non-Hodgkin lymphoma",
    "colorectal carcinoma",
    "hairy cell leukemia",
    "GIST",
    "mastocytosis",
    "Burkitt lymphoma",
    "neuroblastoma",
    "pancreatic cancer",
    "endometrial cancer",
    "follicular lymphoma",
    "diffuse large B-cell lymphoma",
    "APC",
    "beta-catenin",
    "WNT pathway",
    "FAP",
    "BRCA1",
    "BRCA2",
    "ovarian cancer",
    "prostate cancer",
    "CDKN2A",
    "p16",
    "G1 to S phase",
    "DCC",
    "Deleted in Colorectal Cancer",
    "SMAD4",
    "DPC4",
    "Deleted in Pancreatic Cancer",
    "MEN1",
    "MENin",
    "Multiple Endocrine Neoplasia type 1",
    "NF1",
    "neurofibromin",
    "Neurofibromatosis type 1",
    "NF2",
    "merlin",
    "schwannomin",
    "Neurofibromatosis type 2",
    "PTEN",
    "PI3k/AKT pathway",
    "RB1",
    "E2F",
    "retinoblastoma",
    "osteosarcoma",
    "TP53",
    "p53",
    "p21",
    "Li-Fraumeni syndrome",
    "SBLA",
    "TSC1",
    "hamartin",
    "TSC2",
    "tuberin",
    "tuberous sclerosis complex",
    "VHL",
    "hypoxia-inducible factor 1alpha",
    "von Hippel-Lindau disease",
    "WT1",
    "Wilms tumor",
    "nephroblastoma",
  ],
  core: {
    what:
      "ONCOGENES: gain of function mutation converts proto-oncogene (normal gene) to oncogene → ↑ cancer risk. Requires damage to only ONE allele of a proto-oncogene. The 12-row table — ALK (receptor tyrosine kinase → lung adenocarcinoma); EGFR/ERBB1 (receptor tyrosine kinase → lung adenocarcinoma); HER2/ERBB2 (receptor tyrosine kinase → breast and gastric carcinomas); RET (receptor tyrosine kinase → MEN2A and 2B, medullary and papillary thyroid carcinoma, pheochromocytoma); BCR-ABL (non-receptor tyrosine kinase → CML, ALL); JAK2 (non-receptor tyrosine kinase → myeloproliferative neoplasms); BRAF (serine/threonine kinase → melanoma, non-Hodgkin lymphoma, colorectal carcinoma, papillary thyroid carcinoma, hairy cell leukemia); c-KIT (cytokine receptor CD117 → gastrointestinal stromal tumor GIST, mastocytosis); MYCC/c-myc (transcription factor → Burkitt lymphoma); MYCN/N-myc (transcription factor → neuroblastoma); KRAS (RAS GTPase → pancreatic, colorectal, lung, endometrial cancers); BCL-2 (antiapoptotic molecule, inhibits apoptosis → follicular and diffuse large B-Cell Lymphomas). TUMOR SUPPRESSOR GENES: loss of function → ↑ cancer risk; BOTH (two) alleles of a tumor suppressor gene must be lost for expression of disease (the Knudson 2-hit hypothesis). The 15-row table — APC (negative regulator of β-catenin/WNT pathway → colorectal cancer, associated with FAP); BRCA1/BRCA2 (BRCA1/BRCA2 proteins → breast, ovarian, prostate, pancreatic cancers); CDKN2A (p16, blocks G1→S phase → many cancers, eg, melanoma, lung, pancreatic); DCC (DCC—Deleted in Colorectal Cancer → colorectal cancer); SMAD4/DPC4 (DPC—Deleted in Pancreatic Cancer → pancreatic cancer, colorectal cancer); MEN1 (MENin → Multiple Endocrine Neoplasia type 1); NF1 (neurofibromin, Ras GTPase activating protein → Neurofibromatosis type 1); NF2 (merlin/schwannomin protein → Neurofibromatosis type 2); PTEN (negative regulator of PI3k/AKT pathway → prostate, breast, endometrial cancers); RB1 (inhibits E2F; blocks G1→S phase → retinoblastoma, osteosarcoma [Bone cancer]); TP53 (p53, activates p21, blocks G1→S phase → most cancers, Li-Fraumeni [SBLA] syndrome [multiple malignancies at early age; Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland]); TSC1 (hamartin protein → tuberous sclerosis complex); TSC2 (tuberin → tuberous sclerosis complex); VHL (inhibits hypoxia-inducible factor 1α → von Hippel-Lindau disease); WT1 (urogenital development transcription factor → Wilms Tumor [nephroblastoma]).",
    why:
      "This page is the molecular genetics of cancer in two axes. The first axis is the allele axis: oncogenes are GAIN-of-function and need only ONE allele hit (the mutated allele dominates the normal allele — a dominant mutation at the cellular level), while tumor suppressors are LOSS-of-function and need BOTH alleles hit (the Knudson 2-hit hypothesis — one allele is not enough because the remaining normal allele produces sufficient protein; only when both are lost does the disease express). The second axis is the gene-class axis: oncogenes fall into functional categories (receptor tyrosine kinases ALK/EGFR/HER2/RET, non-receptor tyrosine kinases BCR-ABL/JAK2, serine/threonine kinase BRAF, cytokine receptor c-KIT, transcription factors MYCC/MYCN, RAS GTPase KRAS, antiapoptotic BCL-2) and tumor suppressors fall into functional categories (negative regulators of WNT [APC] and PI3k/AKT [PTEN], cell-cycle blockers at G1→S [CDKN2A/p16, RB1, TP53/p53], RAS regulator [NF1 neurofibromin], cytoskeletal [NF2 merlin, TSC1 hamartin, TSC2 tuberin], HIF inhibitor [VHL], development factors [WT1], and the two deleted-in-cancer acronyms [DCC = Deleted in Colorectal Cancer, SMAD4/DPC4 = Deleted in Pancreatic Cancer]). Together the two axes organize the 27 named genes into a single framework: the allele axis tells you how the mutation behaves (dominant gain vs recessive loss), and the gene-class axis tells you what the protein does (kinase, transcription factor, cell-cycle brake, etc.). The Li-Fraumeni SBLA syndrome expansion (Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland) names the multiple-early-malignancy phenotype of TP53 loss.",
    keyIdea:
      "Read every cancer-gene question through two axes. ALLELE AXIS — ONE allele gain-of-function = oncogene (proto-oncogene → oncogene, dominant at cellular level); TWO alleles loss-of-function = tumor suppressor (Knudson 2-hit, recessive at cellular level). GENE-CLASS AXIS — oncogenes by protein function: receptor tyrosine kinases (ALK, EGFR, HER2, RET), non-receptor tyrosine kinases (BCR-ABL, JAK2), serine/threonine kinase (BRAF), cytokine receptor (c-KIT/CD117), transcription factors (MYCC=c-myc→Burkitt, MYCN=N-myc→neuroblastoma), RAS GTPase (KRAS), antiapoptotic (BCL-2). Tumor suppressors by protein function: WNT negative regulator (APC→FAP), PI3k/AKT negative regulator (PTEN), G1→S blockers (CDKN2A/p16, RB1→retinoblastoma/osteosarcoma, TP53/p53→Li-Fraumeni SBLA), RAS activator (NF1 neurofibromin→NF1), cytoskeletal (NF2 merlin→NF2, TSC1 hamartin + TSC2 tuberin→tuberous sclerosis), HIF inhibitor (VHL→VHL disease), development (WT1→Wilms tumor), and the two deleted acronyms (DCC=Deleted in Colorectal Cancer, SMAD4/DPC4=Deleted in Pancreatic Cancer).",
  },
  mechanisms: [
    {
      id: "allele-axis",
      title: "The allele axis: one-allele gain vs two-allele loss (the Knudson 2-hit)",
      context: "The oncogene and tumor suppressor definitions (book 220)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A gene mutation contributes to cancer — which allele rule?",
            sublabel:
              "Input — every cancer gene mutation follows one of two allele rules. The allele axis is the first discriminator: is the mutation a gain-of-function (oncogene) or a loss-of-function (tumor suppressor)?",
            variant: "input",
          },
          {
            id: "oncogene",
            label: "ONCOGENE — gain of function, ONE allele",
            sublabel:
              "Gain of function mutation converts proto-oncogene (normal gene) to oncogene → ↑ cancer risk. Requires damage to only ONE allele of a proto-oncogene — the mutated allele dominates the normal allele (dominant at the cellular level). The 12-row oncogene table: ALK, EGFR, HER2, RET, BCR-ABL, JAK2, BRAF, c-KIT, MYCC, MYCN, KRAS, BCL-2.",
            variant: "process",
          },
          {
            id: "suppressor",
            label: "TUMOR SUPPRESSOR — loss of function, TWO alleles (Knudson 2-hit)",
            sublabel:
              "Loss of function → ↑ cancer risk; both (two) alleles of a tumor suppressor gene must be lost for expression of disease (the Knudson 2-hit hypothesis). The remaining normal allele produces sufficient protein; only when both are lost does the disease express (recessive at the cellular level). The 15-row tumor suppressor table: APC, BRCA1/2, CDKN2A, DCC, SMAD4, MEN1, NF1, NF2, PTEN, RB1, TP53, TSC1, TSC2, VHL, WT1.",
            variant: "process",
          },
          {
            id: "output",
            label: "The allele rule names the inheritance pattern and the somatic mutation requirement",
            sublabel:
              "Output — oncogene (one allele) = dominant cancer syndrome if germline, but most are somatic; tumor suppressor (two alleles) = the classic hereditary cancer syndromes (Li-Fraumeni TP53, familial retinoblastoma RB1, FAP APC, VHL, MEN1, NF1, NF2, BRCA1/2, tuberous sclerosis TSC1/2, Wilms WT1) where the first hit is germline and the second is somatic.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "oncogene", label: "gain of function" },
          { from: "input", to: "suppressor", label: "loss of function" },
          { from: "oncogene", to: "output", label: "one allele, dominant" },
          { from: "suppressor", to: "output", label: "two alleles, Knudson 2-hit" },
        ],
      },
    },
    {
      id: "gene-class-axis",
      title: "The gene-class axis: functional categories across both tables",
      context: "The 12 oncogenes and 15 tumor suppressors by protein function (book 220)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A gene is named — what does its protein do?",
            sublabel:
              "Input — the gene-class axis organizes the 27 genes by protein function, the second discriminator after the allele axis.",
            variant: "input",
          },
          {
            id: "kinases",
            label: "KINASES — the oncogene signaling tier",
            sublabel:
              "Receptor tyrosine kinases: ALK, EGFR/ERBB1, HER2/ERBB2, RET. Non-receptor tyrosine kinases: BCR-ABL, JAK2. Serine/threonine kinase: BRAF. Cytokine receptor: c-KIT (CD117). These are the signaling-molecule oncogenes (hallmark 1's growth factor receptors and signaling molecules).",
            variant: "process",
          },
          {
            id: "nuclear",
            label: "NUCLEAR — transcription factors and cell-cycle blockers",
            sublabel:
              "Oncogene transcription factors: MYCC/c-myc (Burkitt), MYCN/N-myc (neuroblastoma). Tumor suppressor cell-cycle blockers at G1→S: CDKN2A/p16, RB1 (inhibits E2F), TP53/p53 (activates p21). WT1 is a urogenital development transcription factor (Wilms tumor).",
            variant: "process",
          },
          {
            id: "regulators",
            label: "REGULATORS — pathway negative regulators and the RAS axis",
            sublabel:
              "WNT negative regulator: APC (FAP). PI3k/AKT negative regulator: PTEN. RAS GTPase oncogene: KRAS. RAS GTPase activating protein (tumor suppressor): NF1 neurofibromin. The RAS axis is the page's paired oncogene (KRAS) and suppressor (NF1) — one activates RAS, the other inactivates it.",
            variant: "process",
          },
          {
            id: "misc",
            label: "MISC — antiapoptotic, cytoskeletal, HIF, and the two deleted acronyms",
            sublabel:
              "Antiapoptotic oncogene: BCL-2 (follicular lymphoma). Cytoskeletal tumor suppressors: NF2 merlin, TSC1 hamartin, TSC2 tuberin. HIF inhibitor: VHL. The two deleted acronyms: DCC (Deleted in Colorectal Cancer), SMAD4/DPC4 (Deleted in Pancreatic Cancer). MEN1 (MENin) and BRCA1/2 complete the suppressor list.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "kinases", label: "signaling" },
          { from: "input", to: "nuclear", label: "transcription + cell cycle" },
          { from: "input", to: "regulators", label: "pathway brakes" },
          { from: "input", to: "misc", label: "apoptosis + cytoskeleton + HIF" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "oncogene-suppressor-map",
      title: "The oncogene and tumor suppressor map (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source page (book 220): the allele axis (one-allele gain-of-function = oncogene; two-allele loss-of-function = tumor suppressor, Knudson 2-hit) with the 12-row oncogene table and the 15-row tumor suppressor table rendered side-by-side as panel maps, each row carrying the gene name, the gene product (functional class), and the associated neoplasm or condition. The gene-class axis (kinases, nuclear, regulators, misc) organizes the rows into functional tiers. The Li-Fraumeni SBLA syndrome expansion (Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland) is highlighted on the TP53 row.",
      notice:
        "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 242). The page is two pure-text tables — the 12-row oncogene table and the 15-row tumor suppressor table — with no figures, no photographs. The visual is an ORIGINAL KYP adaptation rendering the two tables as a side-by-side panel map (no source figure to redraw). The tables are carried verbatim in this note's table blocks. No copyrighted photographs exist on the page; nothing reproduced. No margin mnemonics (VLM confirmed); the KYP memory layer stays original.",
    },
    {
      kind: "table",
      title: "Book 220 — oncogenes (carried verbatim)",
      intro: "The gain-of-function one-allele definition and the 12-row oncogene table, as printed.",
      columns: ["GENE", "GENE PRODUCT", "ASSOCIATED NEOPLASM"],
      rows: [
        ["ALK", "Receptor tyrosine kinase", "Lung adenocarcinoma"],
        ["EGFR (ERBB1)", "Receptor tyrosine kinase", "Lung adenocarcinoma"],
        ["HER2 (ERBB2)", "Receptor tyrosine kinase", "Breast and gastric carcinomas"],
        ["RET", "REceptor Tyrosine kinase", "MEN2A and 2B, medullary and papillary thyroid carcinoma, pheochromocytoma"],
        ["BCR-ABL", "Non-receptor tyrosine kinase", "CML, ALL"],
        ["JAK2", "Non-receptor tyrosine kinase", "Myeloproliferative neoplasms"],
        ["BRAF", "Serine/threonine kinase", "Melanoma, non-Hodgkin lymphoma, colorectal carcinoma, papillary thyroid carcinoma, hairy cell leukemia"],
        ["c-KIT", "CytoKIne receptor (CD117)", "Gastrointestinal stromal tumor (GIST), mastocytosis"],
        ["MYCC (c-myc)", "Transcription factor", "Burkitt lymphoma"],
        ["MYCN (N-myc)", "Transcription factor", "Neuroblastoma"],
        ["KRAS", "RAS GTPase", "Pancreatic, colorectal, lung, endometrial cancers"],
        ["BCL-2", "Antiapoptotic molecule (inhibits apoptosis)", "Follicular and diffuse large B-Cell Lymphomas"],
      ],
      caption:
        "Twelve oncogenes, all gain-of-function, all one-allele. The receptor tyrosine kinases (ALK, EGFR, HER2, RET) and the non-receptor tyrosine kinases (BCR-ABL, JAK2) are the signaling tier; BRAF is the serine/threonine kinase; c-KIT is the cytokine receptor (CD117); MYCC and MYCN are the transcription factors (Burkitt and neuroblastoma); KRAS is the RAS GTPase; BCL-2 is the antiapoptotic molecule. Each row names the gene, the protein function, and the cancer.",
    },
    {
      kind: "table",
      title: "Book 220 — tumor suppressor genes (carried verbatim)",
      intro: "The loss-of-function two-allele Knudson 2-hit definition and the 15-row tumor suppressor table, as printed.",
      columns: ["GENE", "GENE PRODUCT", "ASSOCIATED CONDITION"],
      rows: [
        ["APC", "Negative regulator of β-catenin/WNT pathway", "Colorectal cancer (associated with FAP)"],
        ["BRCA1/BRCA2", "BRCA1/BRCA2 proteins", "BReast, ovarian, prostate, pancreatic CAncers"],
        ["CDKN2A", "p16, blocks G1 → S phase", "Many cancers (eg, melanoma, lung, pancreatic)"],
        ["DCC", "DCC—Deleted in Colorectal Cancer", "Colorectal cancer"],
        ["SMAD4 (DPC4)", "DPC—Deleted in Pancreatic Cancer", "Pancreatic cancer, colorectal cancer"],
        ["MEN1", "MENin", "Multiple Endocrine Neoplasia type 1"],
        ["NF1", "Neurofibromin (Ras GTPase activating protein)", "NeuroFibromatosis type 1"],
        ["NF2", "Merlin (schwannomin) protein", "NeuroFibromatosis type 2"],
        ["PTEN", "Negative regulator of PI3k/AKT pathway", "Prostate, breasT, and ENdometrial cancers"],
        ["RB1", "Inhibits E2F; blocks G1 → S phase", "Retinoblastoma, osteosarcoma (Bone cancer)"],
        ["TP53", "p53, activates p21, blocks G1 → S phase", "Most cancers, Li-Fraumeni (SBLA) syndrome (multiple malignancies at early age; Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland)"],
        ["TSC1", "Hamartin protein", "Tuberous sclerosis complex"],
        ["TSC2", "Tuberin (“2berin”)", "Tuberous sclerosis complex"],
        ["VHL", "Inhibits hypoxia-inducible factor 1α", "von Hippel-Lindau disease"],
        ["WT1", "Urogenital development transcription factor", "Wilms Tumor (nephroblastoma)"],
      ],
      caption:
        "Fifteen tumor suppressors, all loss-of-function, all two-allele (Knudson 2-hit). The G1→S blockers (CDKN2A/p16, RB1, TP53/p53) are the cell-cycle gatekeepers; APC (WNT) and PTEN (PI3k/AKT) are the pathway negative regulators; NF1 (neurofibromin, RAS GAP) is the RAS-axis suppressor paired with the KRAS oncogene; NF2/TSC1/TSC2 are the cytoskeletal tier; VHL is the HIF inhibitor; WT1 is the urogenital development factor; and the two deleted acronyms (DCC = Deleted in Colorectal Cancer, SMAD4/DPC4 = Deleted in Pancreatic Cancer) name the cancer in the acronym. Li-Fraumeni SBLA (Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland) is TP53's hereditary syndrome.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 3-year-old boy with bilateral retinoblastoma has a family history of a parent who had unilateral retinoblastoma in infancy; genetic testing reveals a germline mutation in RB1.",
        discriminator:
          "RB1 tumor suppressor — Knudson 2-hit (germline first hit + somatic second hit); bilateral disease in the hereditary form",
        concept: "The Knudson 2-hit hypothesis",
        answer:
          "The tumor suppressor allele rule: loss of function → ↑ cancer risk; BOTH (two) alleles of a tumor suppressor gene must be lost for expression of disease (the Knudson 2-hit hypothesis). In hereditary retinoblastoma, the first hit is germline (inherited from the affected parent) and the second hit is somatic (in the retinal cell) — because every retinal cell already carries the first hit, the probability of a second hit is high enough that bilateral disease is the norm. In sporadic retinoblastoma, both hits are somatic in a single retinal cell, so the disease is unilateral. RB1's gene product (inhibits E2F; blocks G1→S phase) is the cell-cycle brake that retinal cells lose.",
      },
      {
        stem:
          "A 28-year-old woman is found to carry a germline TP53 mutation; her father died of osteosarcoma at age 12, and a paternal aunt was diagnosed with breast cancer at age 29 and a brain tumor at age 35.",
        discriminator:
          "Li-Fraumeni syndrome (TP53) — the SBLA syndrome: Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland",
        concept: "The TP53 / Li-Fraumeni SBLA axis",
        answer:
          "TP53 is the tumor suppressor (loss of function, two alleles, Knudson 2-hit) whose gene product (p53, activates p21, blocks G1→S phase) is the cell-cycle's DNA-damage gatekeeper. The hereditary syndrome is Li-Fraumeni, with the SBLA mnemonic expansion: Sarcoma (osteosarcoma in the father at 12), Breast/Brain (the aunt's breast cancer at 29 and brain tumor at 35), Lung/Leukemia, and Adrenal gland (adrenocortical carcinoma). The early age and the multiple malignancies in the family are the Li-Fraumeni signature — TP53 loss removes the DNA-damage gatekeeper, allowing cells with mutations to proceed through the cell cycle.",
      },
      {
        stem:
          "A 60-year-old man with newly diagnosed metastatic melanoma is started on a BRAF inhibitor (vemurafenib); his tumor is found to carry the BRAF V600E mutation.",
        discriminator:
          "BRAF oncogene — gain of function, one allele; the serine/threonine kinase in the MAPK pathway",
        concept: "The BRAF / melanoma axis",
        answer:
          "BRAF is the oncogene (gain of function, one allele) whose gene product (serine/threonine kinase) is the MAPK pathway's downstream signaling molecule. The V600E mutation constitutively activates BRAF, driving melanoma cell proliferation through the MAPK cascade. The BRAF inhibitor vemurafenib targets the mutated kinase — the gain-of-function oncogene is the drug target. The same BRAF mutation appears in non-Hodgkin lymphoma, colorectal carcinoma, papillary thyroid carcinoma, and hairy cell leukemia (the table's associated neoplasms), but melanoma is the most common indication for BRAF inhibitor therapy.",
      },
    ],
    traps: [
      {
        a: "Oncogene (gain of function, one allele)",
        b: "Tumor suppressor (loss of function, two alleles)",
        whyConfused: "Both are cancer genes that increase cancer risk",
        keyDifference:
          "ONCOGENE = GAIN of function, ONE allele (the mutated allele dominates the normal — dominant at cellular level); TUMOR SUPPRESSOR = LOSS of function, TWO alleles (both must be lost — the Knudson 2-hit, recessive at cellular level). Oncogenes are activated forms of proto-oncogenes; tumor suppressors are inactivated forms of normal brake genes.",
        clue:
          "A gain-of-function activating mutation (receptor signaling, kinase activation, transcription factor amplification) = oncogene; a loss-of-function inactivating mutation (cell-cycle brake lost, pathway brake lost) = tumor suppressor",
      },
      {
        a: "MYCC/c-myc (Burkitt lymphoma)",
        b: "MYCN/N-myc (neuroblastoma)",
        whyConfused: "Both are MYC-family transcription factor oncogenes",
        keyDifference:
          "MYCC (c-myc) is associated with Burkitt lymphoma (the t(8;14) translocation putting MYCC under the IgH promoter); MYCN (N-myc) is associated with neuroblastoma (the N-myc amplification in the pediatric adrenal tumor). The C vs N distinguishes the cancer: C = Burkitt (B-cell lymphoma); N = Neuroblastoma (pediatric solid tumor).",
        clue:
          "MYCC → Burkitt (the 'C' for the B-cell Cancer); MYCN → Neuroblastoma (the 'N' for Neuroblastoma) — the letter names the cancer",
      },
      {
        a: "NF1 (neurofibromin, Neurofibromatosis type 1)",
        b: "NF2 (merlin, Neurofibromatosis type 2)",
        whyConfused: "Both are NF tumor suppressors causing neurofibromatosis",
        keyDifference:
          "NF1's gene product is NEUROFIBROMIN (a Ras GTPase activating protein — the RAS-axis suppressor paired with the KRAS oncogene), causing Neurofibromatosis type 1 (cafe-au-lait spots, neurofibromas, optic gliomas). NF2's gene product is MERLIN (schwannomin — a cytoskeletal protein), causing Neurofibromatosis type 2 (bilateral acoustic neuromas / vestibular schwannomas). The gene products are entirely different — NF1 is a RAS regulator; NF2 is a cytoskeletal protein.",
        clue:
          "NF1 = neurofibromin (RAS GAP, the RAS-axis suppressor); NF2 = merlin (cytoskeletal, the schwannoma suppressor) — the gene products and the phenotypes differ",
      },
      {
        a: "DCC (Deleted in Colorectal Cancer)",
        b: "SMAD4/DPC4 (Deleted in Pancreatic Cancer)",
        whyConfused: "Both are 'deleted in' tumor suppressors named by their cancer",
        keyDifference:
          "DCC = Deleted in Colorectal Cancer (colorectal cancer only); SMAD4/DPC4 = Deleted in Pancreatic Cancer (pancreatic cancer AND colorectal cancer — DPC4 has both). The acronyms name the cancer: DCC → colorectal; DPC4 → pancreatic (with colorectal overlap).",
        clue:
          "DCC = Deleted in Colorectal Cancer (one cancer); SMAD4/DPC4 = Deleted in Pancreatic Cancer (pancreatic + colorectal) — the acronym's letter names the cancer",
      },
    ],
    pivots: [
      {
        lookAlike: "A cancer gene mutation — oncogene or tumor suppressor?",
        differentiator:
          "ALLELE AXIS: gain-of-function one allele = oncogene (ALK, EGFR, HER2, RET, BCR-ABL, JAK2, BRAF, c-KIT, MYCC, MYCN, KRAS, BCL-2); loss-of-function two alleles (Knudson 2-hit) = tumor suppressor (APC, BRCA1/2, CDKN2A, DCC, SMAD4, MEN1, NF1, NF2, PTEN, RB1, TP53, TSC1, TSC2, VHL, WT1).",
        correctPath:
          "Ask: is the mutation a gain (activated) or a loss (inactivated)? Gain + one allele = oncogene; loss + two alleles = tumor suppressor — the allele axis is the first discriminator",
      },
      {
        lookAlike: "A gene name — what's the associated cancer?",
        differentiator:
          "Map the gene to the cancer: ALK/EGFR → lung adenocarcinoma; HER2 → breast/gastric; RET → MEN2/thyroid/pheo; BCR-ABL → CML/ALL; JAK2 → myeloproliferative; BRAF → melanoma/NHL/colorectal/papillary thyroid/hairy cell; c-KIT → GIST/mastocytosis; MYCC → Burkitt; MYCN → neuroblastoma; KRAS → pancreatic/colorectal/lung/endometrial; BCL-2 → follicular/DLBCL. APC → FAP/colorectal; BRCA1/2 → breast/ovarian/prostate/pancreatic; CDKN2A → melanoma/lung/pancreatic; DCC → colorectal; SMAD4 → pancreatic/colorectal; MEN1 → MEN1; NF1 → NF1; NF2 → NF2; PTEN → prostate/breast/endometrial; RB1 → retinoblastoma/osteosarcoma; TP53 → Li-Fraumeni SBLA; TSC1/2 → tuberous sclerosis; VHL → VHL; WT1 → Wilms.",
        correctPath:
          "Memorize the gene→cancer pairs by the functional class: kinases (lung, breast, thyroid, CML, melanoma, GIST), transcription factors (Burkitt, neuroblastoma, Wilms), cell-cycle blockers (retinoblastoma, Li-Fraumeni, melanoma), pathway brakes (FAP, endometrial, NF1/2), and the two deleted acronyms (DCC colorectal, DPC4 pancreatic)",
      },
    ],
    miniCase: {
      vignette:
        "A 31-year-old woman presents with a new diagnosis of breast cancer. Her family history is notable for a father who died of osteosarcoma at age 14, a paternal aunt diagnosed with bilateral breast cancer at age 33 and a glioblastoma at age 38, and a paternal uncle who died of acute leukemia at age 22. The patient's breast cancer is a high-grade triple-negative invasive ductal carcinoma. Genetic testing reveals a germline loss-of-function mutation in TP53.",
      question:
        "Name the syndrome, identify the gene class and the allele rule, and list the SBLA malignancies that the family history illustrates.",
      options: [
        {
          label:
            "Li-Fraumeni syndrome (TP53 tumor suppressor — loss of function, TWO alleles, Knudson 2-hit). The SBLA mnemonic expansion: Sarcoma (the father's osteosarcoma at 14), Breast/Brain (the aunt's bilateral breast cancer at 33 and glioblastoma at 38), Lung/Leukemia (the uncle's acute leukemia at 22), and Adrenal gland (adrenocortical carcinoma — not present in this family but a named SBLA component). The patient's early-onset breast cancer is the SBLA Breast component.",
          text: "Li-Fraumeni SBLA — TP53 loss, two alleles, the early-onset multi-malignancy family.",
          correct: true,
          why:
            "Correct on all three layers. (1) THE SYNDROME: Li-Fraumeni syndrome, the hereditary cancer syndrome caused by a germline TP53 mutation — the printed table's TP53 row lists 'Most cancers, Li-Fraumeni (SBLA) syndrome (multiple malignancies at early age; Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland).' (2) THE GENE CLASS AND ALLELE RULE: TP53 is a TUMOR SUPPRESSOR (loss of function → ↑ cancer risk; both [two] alleles of a tumor suppressor gene must be lost for expression of disease — the Knudson 2-hit hypothesis). The germline mutation is the first hit (inherited in every cell); the somatic second hit in the breast epithelium produced the breast cancer. TP53's gene product (p53, activates p21, blocks G1→S phase) is the cell-cycle's DNA-damage gatekeeper — its loss allows cells with mutations to proceed through the cycle. (3) THE SBLA MALIGNANCIES: Sarcoma (osteosarcoma at 14 in the father — the 'S'), Breast/Brain (bilateral breast cancer at 33 and glioblastoma at 38 in the aunt — the 'B/B'), Lung/Leukemia (acute leukemia at 22 in the uncle — the 'L/L'), and Adrenal gland (adrenocortical carcinoma — the 'A', not present in this family but the named fourth component). The patient's early-onset triple-negative breast cancer at 31 is the SBLA Breast component.",
        },
        {
          label:
            "Hereditary breast and ovarian cancer syndrome (BRCA1/BRCA2 tumor suppressor) — the family history's breast and brain cancers fit BRCA; TP53 is a false-positive finding",
          text: "BRCA syndrome, not Li-Fraumeni; the TP53 result is incidental.",
          why:
            "Wrong syndrome: BRCA1/BRCA2 cause breast, ovarian, prostate, and pancreatic cancers (the printed BRCA1/BRCA2 row) but NOT the sarcoma, brain tumor, or leukemia in this family — those are the Li-Fraumeni SBLA components that TP53 loss explains. The germline TP53 loss-of-function mutation is pathogenic and diagnostic, not a false positive. BRCA mutations do not cause osteosarcoma at 14, glioblastoma at 38, or acute leukemia at 22 — the multi-malignancy early-onset pattern is Li-Fraumeni's signature.",
        },
        {
          label:
            "Familial retinoblastoma (RB1 tumor suppressor) — the early-onset cancers in the family are RB1-associated; TP53 is a coincidental mutation",
          text: "RB1 syndrome; the TP53 finding is coincidental.",
          why:
            "Wrong syndrome: RB1 causes retinoblastoma and osteosarcoma (the printed RB1 row: 'Retinoblastoma, osteosarcoma [Bone cancer]') — the father's osteosarcoma could fit RB1, but the aunt's bilateral breast cancer and glioblastoma and the uncle's acute leukemia are NOT RB1-associated. The full SBLA pattern (Sarcoma + Breast/Brain + Lung/Leukemia) is TP53's Li-Fraumeni signature, and the germline TP53 loss-of-function mutation is the confirmed genetic finding. RB1 would not produce this multi-malignancy phenotype.",
        },
        {
          label:
            "BRAF oncogene syndrome — the family's cancers are driven by a BRAF gain-of-function mutation; TP53 is a passenger mutation",
          text: "BRAF gain-of-function drives the family cancers; TP53 is a passenger.",
          why:
            "Wrong gene class: BRAF is an ONCOGENE (gain of function, ONE allele), not a tumor suppressor, and BRAF mutations are somatic in melanoma, NHL, colorectal, papillary thyroid, and hairy cell leukemia — not germline in a hereditary multi-malignancy syndrome. The germline TP53 loss-of-function mutation is the pathogenic finding (a germline BRAF mutation would be incompatible with life or cause a different syndrome). Li-Fraumeni is a tumor SUPPRESSOR syndrome (TP53 loss, two alleles); BRAF is an oncogene (gain, one allele) — the allele axis distinguishes them.",
        },
        {
          label:
            "Cowden syndrome (PTEN tumor suppressor) — the breast and brain cancers fit PTEN; TP53 is a variant of uncertain significance",
          text: "Cowden/PTEN syndrome; TP53 is a VUS.",
          why:
            "Wrong syndrome: PTEN causes prostate, breast, and endometrial cancers (the printed PTEN row) and the Cowden phenotype (hamartomas, macrocephaly), but NOT the sarcoma, glioblastoma, or leukemia in this family. The SBLA pattern (Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal) is TP53's Li-Fraumeni signature, and the germline TP53 loss-of-function mutation is pathogenic (not a VUS). Cowden's breast cancer is typically ER/PR+ and later-onset; the triple-negative early-onset breast cancer at 31 fits Li-Fraumeni better.",
        },
      ],
      reasoning:
        "The stem walks the TP53 row end to end. (1) THE GENE CLASS: TP53 is a TUMOR SUPPRESSOR (loss of function, two alleles, Knudson 2-hit) — the printed definition 'Loss of function → ↑ cancer risk; both (two) alleles of a tumor suppressor gene must be lost for expression of disease.' The germline mutation is the first hit; the somatic second hit in the breast produced the cancer. (2) THE GENE PRODUCT: p53, activates p21, blocks G1→S phase — the cell-cycle's DNA-damage gatekeeper; its loss allows mutated cells through the cycle. (3) THE SYNDROME: Li-Fraumeni (SBLA) — 'multiple malignancies at early age; Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland.' The family history maps to SBLA: father's osteosarcoma at 14 = S; aunt's bilateral breast at 33 + glioblastoma at 38 = B/B; uncle's acute leukemia at 22 = L; the patient's breast cancer at 31 = the Breast component. The distractors fail at: BRCA (no sarcoma, brain, or leukemia in BRCA's breast/ovarian/prostate/pancreatic list), RB1 (retinoblastoma + osteosarcoma only — not the full SBLA), BRAF (oncogene, somatic, not a germline tumor suppressor syndrome), and PTEN/Cowden (prostate/breast/endometrial + hamartomas, not sarcoma/brain/leukemia).",
    },
  },
  mnemonics: [
    {
      code: "ONE ALLELE GAIN, TWO ALLELES LOSS",
      meaning:
        "The allele axis verbatim: ONCOGENE = gain of function, ONE allele (the mutated allele dominates — dominant at cellular level); TUMOR SUPPRESSOR = loss of function, TWO alleles (both must be lost — the Knudson 2-hit, recessive at cellular level). The allele count is the first discriminator for any cancer gene.",
      memorizes: "The allele axis",
      whenToUse: "Any cancer-gene question — first ask: gain or loss? Then: one allele or two?",
      clinical:
        "Gain + one = oncogene (proto-oncogene activated); loss + two = tumor suppressor (Knudson 2-hit) — the allele rule names the inheritance and the somatic-mutation requirement.",
    },
    {
      code: "KNUDSON TWO-HIT",
      meaning:
        "The tumor suppressor rule verbatim: loss of function → ↑ cancer risk; both (two) alleles of a tumor suppressor gene must be lost for expression of disease (the Knudson 2-hit hypothesis). In hereditary syndromes (Li-Fraumeni TP53, familial retinoblastoma RB1, FAP APC, VHL, MEN1, NF1, NF2, BRCA1/2, tuberous sclerosis TSC1/2, Wilms WT1), the first hit is germline and the second is somatic; in sporadic disease, both hits are somatic in a single cell.",
      memorizes: "The tumor suppressor allele rule",
      whenToUse: "Any hereditary cancer syndrome question — the first hit is germline, the second is somatic",
      clinical:
        "Bilateral retinoblastoma = hereditary (germline first hit); unilateral = sporadic (both hits somatic) — the Knudson 2-hit's classic clinical correlate.",
    },
    {
      code: "SBLA — LI-FRAUMENI",
      meaning:
        "The Li-Fraumeni syndrome's SBLA mnemonic expansion (from the printed TP53 row): Sarcoma (osteosarcoma, rhabdomyosarcoma), Breast/Brain (early-onset breast cancer, glioblastoma), Lung/Leukemia (lung adenocarcinoma, acute leukemia), Adrenal gland (adrenocortical carcinoma). Multiple malignancies at early age with a germline TP53 loss-of-function mutation.",
      memorizes: "The Li-Fraumeni syndrome cancers",
      whenToUse: "Any TP53 / Li-Fraumeni question — list the SBLA components",
      clinical:
        "S = Sarcoma; B/B = Breast/Brain; L/L = Lung/Leukemia; A = Adrenal — the four SBLA letters name the early-onset multi-malignancy phenotype of TP53 loss.",
    },
    {
      code: "THE TWO DELETED — DCC, SMAD4/DPC4",
      meaning:
        "The two tumor suppressors named by 'Deleted in' acronyms: DCC = Deleted in Colorectal Cancer (colorectal cancer only); SMAD4/DPC4 = Deleted in Pancreatic Cancer (pancreatic cancer AND colorectal cancer — DPC4 has both). The acronym's letter names the cancer: DCC → colorectal; DPC4 → pancreatic (with colorectal overlap).",
      memorizes: "The two 'Deleted in' tumor suppressors",
      whenToUse: "Any DCC or SMAD4/DPC4 question — the acronym names the cancer",
      clinical:
        "DCC = Deleted in Colorectal Cancer (the 'C' for Colorectal); DPC4 = Deleted in Pancreatic Cancer (the 'P' for Pancreatic, with colorectal overlap) — the acronym's letter is the cancer's first letter.",
    },
  ],
  rapidReview: {
    s30: [
      "ONCOGENE: gain of function, ONE allele; proto-oncogene → oncogene → ↑ cancer risk",
      "12 oncogenes: ALK (RTK, lung adeno), EGFR/ERBB1 (RTK, lung adeno), HER2/ERBB2 (RTK, breast/gastric), RET (RTK, MEN2/thyroid/pheo), BCR-ABL (non-RTK, CML/ALL), JAK2 (non-RTK, myeloproliferative), BRAF (Ser/Thr kinase, melanoma/NHL/colorectal/papillary thyroid/hairy cell), c-KIT/CD117 (cytokine receptor, GIST/mastocytosis), MYCC/c-myc (TF, Burkitt), MYCN/N-myc (TF, neuroblastoma), KRAS (RAS GTPase, pancreatic/colorectal/lung/endometrial), BCL-2 (antiapoptotic, follicular/DLBCL)",
      "TUMOR SUPPRESSOR: loss of function, TWO alleles (Knudson 2-hit)",
      "15 tumor suppressors: APC (WNT neg reg, FAP/colorectal), BRCA1/2 (breast/ovarian/prostate/pancreatic), CDKN2A/p16 (G1→S block, melanoma/lung/pancreatic), DCC (Deleted in Colorectal Cancer), SMAD4/DPC4 (Deleted in Pancreatic Cancer, pancreatic + colorectal), MEN1/MENin (MEN1), NF1/neurofibromin (RAS GAP, NF1), NF2/merlin (NF2), PTEN (PI3k/AKT neg reg, prostate/breast/endometrial), RB1 (inhibits E2F, G1→S block, retinoblastoma/osteosarcoma), TP53/p53 (activates p21, G1→S block, most cancers, Li-Fraumeni SBLA), TSC1/hamartin + TSC2/tuberin (tuberous sclerosis), VHL (HIF-1α inhibitor, VHL disease), WT1 (urogenital TF, Wilms tumor)",
      "Li-Fraumeni SBLA: Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland — TP53 germline loss",
      "The RAS axis: KRAS oncogene (gain, activates RAS) paired with NF1 tumor suppressor (loss, inactivates RAS via neurofibromin RAS GAP)",
      "The two 'Deleted in' acronyms: DCC = Deleted in Colorectal Cancer; SMAD4/DPC4 = Deleted in Pancreatic Cancer",
    ],
    m3: [
      "ONE ALLELE GAIN, TWO ALLELES LOSS — the allele axis (oncogene vs tumor suppressor)",
      "KNUDSON TWO-HIT — tumor suppressor: both alleles must be lost; hereditary = germline first hit + somatic second hit",
      "SBLA LI-FRAUMENI — Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland (TP53 germline loss)",
      "THE TWO DELETED DCC SMAD4 — DCC = Deleted in Colorectal Cancer; SMAD4/DPC4 = Deleted in Pancreatic Cancer",
      "MYCC → Burkitt (C for B-cell Cancer); MYCN → Neuroblastoma (N for Neuroblastoma); NF1 = neurofibromin (RAS GAP); NF2 = merlin (cytoskeletal)",
    ],
    m10: [
      "Oncogene functional classes: receptor tyrosine kinases (ALK, EGFR, HER2, RET), non-receptor tyrosine kinases (BCR-ABL, JAK2), serine/threonine kinase (BRAF), cytokine receptor (c-KIT/CD117), transcription factors (MYCC, MYCN), RAS GTPase (KRAS), antiapoptotic (BCL-2)",
      "Tumor suppressor functional classes: WNT negative regulator (APC), PI3k/AKT negative regulator (PTEN), G1→S blockers (CDKN2A/p16, RB1, TP53/p53), RAS GAP (NF1), cytoskeletal (NF2 merlin, TSC1 hamartin, TSC2 tuberin), HIF inhibitor (VHL), development (WT1), and the two deleted acronyms (DCC, SMAD4/DPC4)",
      "The RAS axis pairs an oncogene and a suppressor: KRAS (gain, activates RAS) vs NF1 (loss, RAS GAP that inactivates RAS) — the same pathway, opposite allele rules",
      "Hereditary cancer syndromes (all tumor suppressors, Knudson 2-hit): Li-Fraumeni (TP53), familial retinoblastoma (RB1), FAP (APC), VHL (VHL), MEN1 (MEN1), NF1 (NF1), NF2 (NF2), hereditary breast/ovarian (BRCA1/2), tuberous sclerosis (TSC1/2), Wilms (WT1), Cowden (PTEN)",
      "The 12 oncogenes and 15 tumor suppressors are all named in the two verbatim tables — the gene→cancer pairs are the exam's most-tested molecular-oncology facts",
    ],
  },
  recall: [
    {
      q: "The oncogene definition verbatim.",
      a: "Gain of function mutation converts proto-oncogene (normal gene) to oncogene → ↑ cancer risk. Requires damage to only one allele of a proto-oncogene.",
    },
    {
      q: "The 12-row oncogene table verbatim — gene, gene product, associated neoplasm.",
      a: "ALK / Receptor tyrosine kinase / Lung adenocarcinoma. EGFR (ERBB1) / Receptor tyrosine kinase / Lung adenocarcinoma. HER2 (ERBB2) / Receptor tyrosine kinase / Breast and gastric carcinomas. RET / REceptor Tyrosine kinase / MEN2A and 2B, medullary and papillary thyroid carcinoma, pheochromocytoma. BCR-ABL / Non-receptor tyrosine kinase / CML, ALL. JAK2 / Non-receptor tyrosine kinase / Myeloproliferative neoplasms. BRAF / Serine/threonine kinase / Melanoma, non-Hodgkin lymphoma, colorectal carcinoma, papillary thyroid carcinoma, hairy cell leukemia. c-KIT / CytoKIne receptor (CD117) / Gastrointestinal stromal tumor (GIST), mastocytosis. MYCC (c-myc) / Transcription factor / Burkitt lymphoma. MYCN (N-myc) / Transcription factor / Neuroblastoma. KRAS / RAS GTPase / Pancreatic, colorectal, lung, endometrial cancers. BCL-2 / Antiapoptotic molecule (inhibits apoptosis) / Follicular and diffuse large B-Cell Lymphomas.",
    },
    {
      q: "The tumor suppressor definition verbatim.",
      a: "Loss of function → ↑ cancer risk; both (two) alleles of a tumor suppressor gene must be lost for expression of disease (the Knudson 2-hit hypothesis).",
    },
    {
      q: "The 15-row tumor suppressor table verbatim — gene, gene product, associated condition.",
      a: "APC / Negative regulator of β-catenin/WNT pathway / Colorectal cancer (associated with FAP). BRCA1/BRCA2 / BRCA1/BRCA2 proteins / BReast, ovarian, prostate, pancreatic CAncers. CDKN2A / p16, blocks G1→S phase / Many cancers (eg, melanoma, lung, pancreatic). DCC / DCC—Deleted in Colorectal Cancer / Colorectal cancer. SMAD4 (DPC4) / DPC—Deleted in Pancreatic Cancer / Pancreatic cancer, colorectal cancer. MEN1 / MENin / Multiple Endocrine Neoplasia type 1. NF1 / Neurofibromin (Ras GTPase activating protein) / NeuroFibromatosis type 1. NF2 / Merlin (schwannomin) protein / NeuroFibromatosis type 2. PTEN / Negative regulator of PI3k/AKT pathway / Prostate, breasT, and ENdometrial cancers. RB1 / Inhibits E2F; blocks G1→S phase / Retinoblastoma, osteosarcoma (Bone cancer). TP53 / p53, activates p21, blocks G1→S phase / Most cancers, Li-Fraumeni (SBLA) syndrome (multiple malignancies at early age; Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland). TSC1 / Hamartin protein / Tuberous sclerosis complex. TSC2 / Tuberin (“2berin”) / Tuberous sclerosis complex. VHL / Inhibits hypoxia-inducible factor 1α / von Hippel-Lindau disease. WT1 / Urogenital development transcription factor / Wilms Tumor (nephroblastoma).",
    },
    {
      q: "The Li-Fraumeni SBLA syndrome expansion verbatim.",
      a: "Li-Fraumeni (SBLA) syndrome: multiple malignancies at early age; Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland. (From the TP53 row's associated condition: 'Most cancers, Li-Fraumeni (SBLA) syndrome [multiple malignancies at early age; Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland].')",
    },
  ],
  related: [
    {
      title: "Hallmarks of Cancer",
      topicId: "cancer-hallmarks",
      note: "The oncogenes and tumor suppressors are the molecular machinery of the hallmarks: oncogenes drive hallmark 1 (growth signal self-sufficiency — HER2, RAS, MYC, cyclins/CDKs), hallmark 3 (evasion of apoptosis — BCL-2), hallmark 5 (sustained angiogenesis via VHL/HIF), and hallmark 6 (Warburg effect via KRAS/BRAF signaling); tumor suppressors brake hallmark 2 (anti-growth signal insensitivity — Rb, APC, NF2/E-cadherin) and hallmark 3 (apoptosis — TP53). The hallmarks name the capabilities; this page names the genes.",
    },
    {
      title: "Neoplasia Nomenclature & Progression",
      topicId: "neoplasia-nomenclature",
      note: "The oncogene/suppressor gene classes underlie P12's progression: the basement-membrane breach (E-cadherin loss = NF2, the tumor suppressor on this page) and the metalloproteinase cascade are the molecular gates the gene mutations drive. The nomenclature page names the tissue of origin (carcinoma vs sarcoma); this page names the gene mutations that produce each cancer.",
    },
    {
      title: "Cancer Immunotherapy & Epidemiology",
      topicId: "cancer-immunotherapy-epidemiology",
      note: "The epidemiology page's named cancers (prostate, breast, lung, colon/rectum, leukemia) are the associated neoplasms of this page's oncogenes and tumor suppressors: BRCA1/2 (breast), KRAS (lung, pancreatic, colorectal, endometrial), BCR-ABL (CML leukemia), TP53 (most cancers, Li-Fraumeni), APC (colorectal FAP). The gene→cancer pairs explain the epidemiology page's incidence and mortality rankings.",
    },
    {
      title: "Cellular Adaptations: Hypertrophy Through Dysplasia",
      topicId: "cellular-adaptations",
      note: "The cell-cycle blockers (CDKN2A/p16, RB1, TP53/p53 — all blocking G1→S phase) are the molecular brakes that the adaptation page's dysplasia endpoint overcomes. The adaptation-to-neoplasia bridge is the loss of these brakes: Rb loss releases E2F, p53 loss removes the DNA-damage gatekeeper, p16 loss disables the CDK4 brake — the three G1→S blockers whose loss drives the cell from dysplasia through CIS to invasive carcinoma.",
    },
  ],
  crossLinks: [
    {
      subject: "Genetics (hereditary cancer syndromes and Knudson 2-hit)",
      connection:
        "The Knudson 2-hit hypothesis is the genetics page's hereditary-cancer framework: tumor suppressor syndromes (Li-Fraumeni TP53, familial retinoblastoma RB1, FAP APC, VHL, MEN1, NF1, NF2, BRCA1/2, tuberous sclerosis TSC1/2, Wilms WT1, Cowden PTEN) follow the germline-first-hit + somatic-second-hit pattern. The oncogenes (gain-of-function, one allele) are mostly somatic — germline oncogene mutations are rare (RET in MEN2 is the main exception).",
    },
    {
      subject: "Pharmacology (targeted cancer therapy)",
      connection:
        "The oncogenes are the targeted-therapy page's drug targets: BRAF inhibitors (vemurafenib, dabrafenib) for BRAF V600E melanoma; HER2 antibodies (trastuzumab) and antibody-drug conjugates (T-DM1, T-DXd) for HER2 breast/gastric; EGFR inhibitors (erlotinib, gefitinib, osimertinib) for EGFR lung adenocarcinoma; BCR-ABL TKIs (imatinib, dasatinib, nilotinib) for CML; c-KIT inhibitors (imatinib) for GIST; KRAS G12C inhibitors (sotorasib, adagrasib) for KRAS lung cancer. The gain-of-function oncogene is the drug target.",
    },
    {
      subject: "Biochemistry (cell-cycle regulation and signaling pathways)",
      connection:
        "The G1→S blockers (CDKN2A/p16, RB1, TP53/p53) are the biochemistry page's cell-cycle regulation machinery: p16 inhibits CDK4/6, Rb sequesters E2F, p53 activates p21 (which inhibits CDK2). The oncogene signaling pathways (EGFR→RAS→BRAF→MAPK; PI3k/AKT; JAK-STAT) are the biochemistry page's signal-transduction cascades. The WNT/β-catenin (APC) and PI3k/AKT (PTEN) pathways are the negative-regulator tumor suppressors.",
    },
    {
      subject: "Pathology (cancer syndromes by organ)",
      connection:
        "The tumor suppressor syndromes map to organ-specific pathology: Li-Fraumeni (TP53) = multi-organ (SBLA); familial retinoblastoma (RB1) = eye + bone; FAP (APC) = colon; VHL (VHL) = kidney, pancreas, CNS hemangioblastomas; MEN1 (MEN1) = parathyroid, pituitary, pancreatic endocrine; NF1 (NF1) = skin, nervous system, optic glioma; NF2 (NF2) = bilateral acoustic neuromas; tuberous sclerosis (TSC1/2) = skin, brain, kidney, heart; Wilms (WT1) = kidney (pediatric). Each syndrome's organ pattern reflects the gene product's tissue-specific function.",
    },
  ],
};
