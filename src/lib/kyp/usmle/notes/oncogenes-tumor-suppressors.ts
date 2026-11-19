import type { KypUsMLENote } from "../types";

// Pathology — NEOPLASIA banner (P-batch 16). Source: pdf 242 / book 220
// (Oncogenes + Tumor suppressor genes — the molecular layer of neoplasia:
// the gain-of-function one-allele rule with its 12-row GENE / GENE PRODUCT
// / ASSOCIATED NEOPLASM table, and the loss-of-function two-allele Knudson
// 2-hit rule with its 15-row GENE / GENE PRODUCT / ASSOCIATED CONDITION
// table). Census (pdfimages + VLM): ZERO raster images on the page — pure
// text: two large back-to-back tables with their two rule paragraphs; no
// photographs, no figures, so the registry visual is a pure ORIGINAL KYP
// ADAPTATION (the allele-arithmetic rule panel, the oncogene roster as a
// kinase-classification grid, the tumor-suppressor roster as a
// function-family grid). NO margin notes or mnemonics print on the page
// (VLM census confirmed); the KYP memory layer is original. The source
// prints several embedded-capital quirks that read as mnemonic-style
// highlighting and are PRESERVED verbatim in the tables: RET's product
// prints "REceptor Tyrosine kinase" (the RE of RET); c-KIT's product
// prints "CytoKIne receptor (CD117)" (the KI of KIT); BRCA1/BRCA2's
// condition prints "BReast, ovarian, prostate, pancreatic CAncers"; PTEN's
// condition prints "Prostate, breasT, and ENdometrial cancers"; NF1/NF2's
// conditions print "NeuroFibromatosis"; RB1's condition prints
// "(Bone cancer)" — the B of RB1; TSC2's product prints Tuberin
// ("2berin"), the source's own pun; and BCL-2's condition prints
// "B-Cell Lymphomas" with a capital B.

export const oncogenesTumorSuppressors: KypUsMLENote = {
  id: "oncogenes-tumor-suppressors",
  title: "Oncogenes & Tumor Suppressor Genes",
  subtitle:
    "The molecular arithmetic of cancer (book 220) — TWO rules and TWENTY-SEVEN rows. THE ONCOGENE RULE: a gain-of-function mutation converts a proto-oncogene (a normal gene) into an oncogene → ↑ cancer risk, and it requires damage to only ONE allele — a single activated copy dominates its normal partner. The 12-row roster runs from the cell membrane inward: receptor tyrosine kinases ALK and EGFR (ERBB1) (lung adenocarcinoma), HER2 (ERBB2) (breast and gastric carcinomas), and RET (MEN2A and 2B, medullary and papillary thyroid carcinoma, pheochromocytoma); the cytokine receptor c-KIT (CD117) (gastrointestinal stromal tumor, mastocytosis); the non-receptor tyrosine kinases BCR-ABL (CML, ALL) and JAK2 (myeloproliferative neoplasms); the serine/threonine kinase BRAF with the table's longest list (melanoma, non-Hodgkin lymphoma, colorectal carcinoma, papillary thyroid carcinoma, hairy cell leukemia); the RAS GTPase KRAS (pancreatic, colorectal, lung, endometrial cancers); the transcription factors MYCC (c-myc, Burkitt lymphoma) and MYCN (N-myc, neuroblastoma); and the antiapoptotic BCL-2 (follicular and diffuse large B-cell lymphomas). THE TUMOR SUPPRESSOR RULE: loss of function → ↑ cancer risk, and BOTH (two) alleles must be lost for expression of disease — the Knudson 2-hit hypothesis. The 15-row roster by function: the G1→S gatekeepers RB1 (inhibits E2F — retinoblastoma, osteosarcoma), CDKN2A (p16 — many cancers: melanoma, lung, pancreatic) and TP53 (p53 activates p21 — most cancers, Li-Fraumeni SBLA syndrome); the pathway negative regulators APC (β-catenin/WNT — colorectal cancer, FAP), PTEN (PI3k/AKT — prostate, breast, endometrial) and VHL (inhibits hypoxia-inducible factor 1α — von Hippel-Lindau disease); BRCA1/BRCA2 (breast, ovarian, prostate, pancreatic cancers); and the syndrome genes DCC and SMAD4 (DPC4), MEN1 (MENin), NF1 (neurofibromin), NF2 (merlin), TSC1 (hamartin), TSC2 (tuberin, '2berin'), WT1 (Wilms tumor).",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Neoplasia",
  pilotCategory:
    "The complete two-table page — the gain-of-function one-allele rule with all 12 oncogene rows (gene, product, neoplasm) and the Knudson two-hit loss-of-function rule with all 15 tumor-suppressor rows (gene, product, condition), including the long-list rows (RET's four neoplasms, BRAF's five, KRAS's four cancers, TP53's SBLA expansion) and the source's embedded-capital quirks (REceptor, CytoKIne, BReast…CAncers, breasT…ENdometrial, NeuroFibromatosis, Bone cancer, '2berin').",
  difficulty: 3,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 220–220 (Pathology — Neoplasia: Oncogenes [the gain-of-function rule with the one-allele requirement and the 12-row GENE / GENE PRODUCT / ASSOCIATED NEOPLASM table]; Tumor suppressor genes [the loss-of-function rule with the Knudson 2-hit hypothesis and the 15-row GENE / GENE PRODUCT / ASSOCIATED CONDITION table])",
  tags: [
    "oncogene",
    "proto-oncogene",
    "gain of function",
    "one allele",
    "tumor suppressor gene",
    "loss of function",
    "Knudson two-hit hypothesis",
    "allele arithmetic",
    "receptor tyrosine kinase",
    "ALK",
    "EGFR",
    "ERBB1",
    "HER2",
    "ERBB2",
    "RET",
    "MEN2A",
    "MEN2B",
    "medullary thyroid carcinoma",
    "papillary thyroid carcinoma",
    "pheochromocytoma",
    "lung adenocarcinoma",
    "breast carcinoma",
    "gastric carcinoma",
    "BCR-ABL",
    "Philadelphia chromosome",
    "CML",
    "ALL",
    "JAK2",
    "myeloproliferative neoplasms",
    "BRAF",
    "serine/threonine kinase",
    "melanoma",
    "non-Hodgkin lymphoma",
    "colorectal carcinoma",
    "hairy cell leukemia",
    "c-KIT",
    "CD117",
    "cytokine receptor",
    "gastrointestinal stromal tumor",
    "GIST",
    "mastocytosis",
    "MYCC",
    "c-myc",
    "Burkitt lymphoma",
    "MYCN",
    "N-myc",
    "neuroblastoma",
    "KRAS",
    "RAS GTPase",
    "pancreatic cancer",
    "endometrial cancer",
    "BCL-2",
    "antiapoptotic molecule",
    "follicular lymphoma",
    "diffuse large B-cell lymphoma",
    "APC",
    "beta-catenin",
    "WNT pathway",
    "FAP",
    "colorectal cancer",
    "BRCA1",
    "BRCA2",
    "ovarian cancer",
    "prostate cancer",
    "CDKN2A",
    "p16",
    "G1 to S checkpoint",
    "DCC",
    "deleted in colorectal cancer",
    "SMAD4",
    "DPC4",
    "deleted in pancreatic cancer",
    "MEN1",
    "MENin",
    "multiple endocrine neoplasia type 1",
    "NF1",
    "neurofibromin",
    "Ras GTPase activating protein",
    "neurofibromatosis type 1",
    "NF2",
    "merlin",
    "schwannomin",
    "neurofibromatosis type 2",
    "PTEN",
    "PI3K AKT pathway",
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
    "hypoxia-inducible factor 1 alpha",
    "von Hippel-Lindau disease",
    "WT1",
    "Wilms tumor",
    "nephroblastoma",
  ],
  core: {
    what:
      "TWO RULES. (1) ONCOGENES: gain of function mutation converts proto-oncogene (normal gene) to oncogene → ↑ cancer risk. Requires damage to only one allele of a proto-oncogene. The 12-row table (GENE / GENE PRODUCT / ASSOCIATED NEOPLASM): ALK — receptor tyrosine kinase — lung adenocarcinoma; EGFR (ERBB1) — receptor tyrosine kinase — lung adenocarcinoma; HER2 (ERBB2) — receptor tyrosine kinase — breast and gastric carcinomas; RET — REceptor Tyrosine kinase (the source's embedded capitals) — MEN2A and 2B, medullary and papillary thyroid carcinoma, pheochromocytoma; BCR-ABL — non-receptor tyrosine kinase — CML, ALL; JAK2 — non-receptor tyrosine kinase — myeloproliferative neoplasms; BRAF — serine/threonine kinase — melanoma, non-Hodgkin lymphoma, colorectal carcinoma, papillary thyroid carcinoma, hairy cell leukemia; c-KIT — CytoKIne receptor (CD117) — gastrointestinal stromal tumor (GIST), mastocytosis; MYCC (c-myc) — transcription factor — Burkitt lymphoma; MYCN (N-myc) — transcription factor — neuroblastoma; KRAS — RAS GTPase — pancreatic, colorectal, lung, endometrial cancers; BCL-2 — antiapoptotic molecule (inhibits apoptosis) — follicular and diffuse large B-Cell Lymphomas. (2) TUMOR SUPPRESSOR GENES: loss of function → ↑ cancer risk; both (two) alleles of a tumor suppressor gene must be lost for expression of disease (the Knudson 2-hit hypothesis). The 15-row table (GENE / GENE PRODUCT / ASSOCIATED CONDITION): APC — negative regulator of β-catenin/WNT pathway — colorectal cancer (associated with FAP); BRCA1/BRCA2 — BRCA1/BRCA2 proteins — BReast, ovarian, prostate, pancreatic CAncers; CDKN2A — p16, blocks G1→S phase — many cancers (eg, melanoma, lung, pancreatic); DCC — DCC—Deleted in Colorectal Cancer — colorectal cancer; SMAD4 (DPC4) — DPC—Deleted in Pancreatic Cancer — pancreatic cancer, colorectal cancer; MEN1 — MENin — Multiple Endocrine Neoplasia type 1; NF1 — Neurofibromin (Ras GTPase activating protein) — NeuroFibromatosis type 1; NF2 — Merlin (schwannomin) protein — NeuroFibromatosis type 2; PTEN — negative regulator of PI3k/AKT pathway — Prostate, breasT, and ENdometrial cancers; RB1 — Inhibits E2F; blocks G1→S phase — Retinoblastoma, osteosarcoma (Bone cancer); TP53 — p53, activates p21, blocks G1→S phase — most cancers, Li-Fraumeni (SBLA) syndrome (multiple malignancies at early age; Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland); TSC1 — Hamartin protein — Tuberous sclerosis complex; TSC2 — Tuberin ('2berin') — Tuberous sclerosis complex; VHL — Inhibits hypoxia-inducible factor 1α — von Hippel-Lindau disease; WT1 — Urogenital development transcription factor — Wilms Tumor (nephroblastoma).",
    why:
      "This page is neoplasia's molecular constitution, and everything on it hangs on one piece of arithmetic: how many alleles does it take? An oncogene is a gas pedal — a proto-oncogene (the normal gene) converted by a GAIN-of-function mutation into a permanently fired version of itself, and because one jammed pedal is enough to accelerate the cell, damage to only ONE allele is required. A tumor suppressor is a brake — the cell keeps two of them, and a LOSS-of-function mutation only matters when BOTH (two) alleles are lost: one working copy still holds the gate shut, which is the Knudson 2-hit hypothesis. That single distinction organizes all 27 rows. The oncogene roster reads as a signaling cascade from membrane to nucleus — the receptor tyrosine kinases (ALK, EGFR/ERBB1, HER2/ERBB2, RET) sit at the surface; c-KIT is the cytokine receptor (CD117); BCR-ABL and JAK2 are non-receptor (cytoplasmic) tyrosine kinases; BRAF is the serine/threonine kinase step; KRAS is the RAS GTPase switch; MYCC and MYCN are the nuclear transcription factors; BCL-2 is the antiapoptotic brake on programmed death. The suppressor roster reads as an inventory of brakes — the three G1→S gatekeepers (RB1 holding E2F, CDKN2A's p16, TP53's p53 activating p21), the three pathway negative regulators (APC on β-catenin/WNT, PTEN on PI3k/AKT, VHL on hypoxia-inducible factor 1α), BRCA1/BRCA2, and the eponym set (DCC, SMAD4/DPC4, MEN1/MENin, NF1/neurofibromin, NF2/merlin, TSC1/hamartin, TSC2/tuberin, WT1). The source even prints its own memory hooks inside the rows — RET's 'REceptor', c-KIT's 'CytoKIne', BRCA's 'BReast…CAncers', PTEN's 'breasT…ENdometrial', RB1's '(Bone cancer)', NF's 'NeuroFibromatosis', TSC2's tuberin ('2berin') — embedded capitals that pair each gene with its product or condition.",
    keyIdea:
      "Read every cancer-genetics question through three frames. FRAME 1 — THE ALLELE ARITHMETIC: a mutation that GAINS function (oncogene) needs ONE allele; a mutation that LOSES function (tumor suppressor) needs BOTH (two) alleles — the Knudson 2-hit hypothesis. Allele counting names the class before you name the gene: germline RET expresses MEN2A/2B with its single activated copy, while germline RB1 or TP53 waits for a second, somatic hit. FRAME 2 — THE ONCOGENE ADDRESS (membrane → cytoplasm → nucleus): receptor tyrosine kinases ALK (lung adenocarcinoma), EGFR/ERBB1 (lung adenocarcinoma), HER2/ERBB2 (breast and gastric), RET (MEN2A and 2B, medullary and papillary thyroid carcinoma, pheochromocytoma); cytokine receptor c-KIT/CD117 (GIST, mastocytosis); non-receptor tyrosine kinases BCR-ABL (CML, ALL) and JAK2 (myeloproliferative neoplasms); serine/threonine kinase BRAF (melanoma, non-Hodgkin lymphoma, colorectal, papillary thyroid, hairy cell leukemia); RAS GTPase KRAS (pancreatic, colorectal, lung, endometrial); transcription factors MYCC→Burkitt and MYCN→neuroblastoma; antiapoptotic BCL-2 (follicular and diffuse large B-cell lymphomas). FRAME 3 — THE SUPPRESSOR'S BRAKE (what does it brake?): the G1→S gate — RB1 inhibits E2F (retinoblastoma, osteosarcoma), CDKN2A p16 (many cancers: melanoma, lung, pancreatic), TP53 p53→p21 (most cancers; Li-Fraumeni SBLA — Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland); a pathway — APC brakes β-catenin/WNT (colorectal cancer, FAP), PTEN brakes PI3k/AKT (prostate, breast, endometrial), VHL brakes hypoxia-inducible factor 1α (von Hippel-Lindau); or the eponym set — DCC and SMAD4 (DPC4) (the deleted-in acronyms), MEN1/MENin, NF1/neurofibromin vs NF2/merlin, TSC1/hamartin vs TSC2/tuberin ('2berin'), WT1 (Wilms tumor). Two alleles for every one of them.",
  },
  mechanisms: [
    {
      id: "one-hit-two-hit-map",
      title: "The allele arithmetic: one hit for the gas pedal, two hits for the brake (the Knudson 2-hit hypothesis)",
      context: "The two rule paragraphs that open the tables (book 220)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Two ways a normal gene goes wrong",
            sublabel:
              "Input — every cell carries two alleles of each gene: the proto-oncogene (the normal gene that can be converted into an oncogene) and the tumor suppressor gene (the brake). The class of cancer gene is decided by which way the mutation pushes function.",
            variant: "input",
          },
          {
            id: "one-hit",
            label: "THE ONE-HIT PATH — gain of function (the oncogene)",
            sublabel:
              "A gain of function mutation converts proto-oncogene (normal gene) to oncogene → ↑ cancer risk; requires damage to only ONE allele of a proto-oncogene — a single jammed copy of the pedal (ALK, EGFR, HER2, RET, BCR-ABL, JAK2, BRAF, c-KIT, MYCC, MYCN, KRAS, BCL-2) accelerates the cell even though the second allele is intact.",
            variant: "process",
          },
          {
            id: "two-hit",
            label: "THE TWO-HIT PATH — loss of function (the tumor suppressor)",
            sublabel:
              "Loss of function → ↑ cancer risk; both (two) alleles of a tumor suppressor gene must be lost for expression of disease — the Knudson 2-hit hypothesis. One working allele still brakes the cell, so the disease waits for hit 2 (inherited syndromes arrive with hit 1 already in the germline — RB1, TP53, APC, and the rest of the 15-row table).",
            variant: "process",
          },
          {
            id: "output",
            label: "The exam arithmetic",
            sublabel:
              "Output — count before you name: GAIN of function = ONE allele (an activated oncogene is dominant); LOSS of function = BOTH (two) alleles (an inactivated suppressor is recessive at the cellular level). The count routes the inheritance question — germline RET (MEN2A/2B) expresses with one hit; germline RB1 (retinoblastoma) and TP53 (Li-Fraumeni) need their second, somatic hit in each tissue.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "one-hit", label: "mutation pushes function UP" },
          { from: "trigger", to: "two-hit", label: "mutation pushes function DOWN" },
          { from: "one-hit", to: "output", label: "one allele is enough" },
          { from: "two-hit", to: "output", label: "both alleles must be lost" },
        ],
      },
    },
    {
      id: "gatekeeper-pathway-map",
      title: "The gatekeepers and the pathway regulators: where the tumor suppressors put their brakes",
      context: "The 15-row tumor suppressor table, read by function (book 220)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A growth signal's journey — from pathway to cell cycle",
            sublabel:
              "Input — extracellular and intracellular pathways (β-catenin/WNT, PI3k/AKT, the hypoxia response) converge on the G1→S transition, the commitment gate of the cell cycle. Every tumor suppressor on the page brakes one step of that journey.",
            variant: "input",
          },
          {
            id: "pathway",
            label: "THE PATHWAY NEGATIVE REGULATORS — the upstream brakes",
            sublabel:
              "APC is the negative regulator of the β-catenin/WNT pathway (colorectal cancer, associated with FAP); PTEN is the negative regulator of the PI3k/AKT pathway (prostate, breast, endometrial cancers); VHL inhibits hypoxia-inducible factor 1α (von Hippel-Lindau disease). Lose both alleles of any one and its pathway runs without its brake.",
            variant: "process",
          },
          {
            id: "gate",
            label: "THE G1→S GATEKEEPERS — the three suppressors at the gate",
            sublabel:
              "RB1 inhibits E2F and blocks G1→S phase (retinoblastoma, osteosarcoma — Bone cancer); CDKN2A's product p16 blocks G1→S phase (many cancers — melanoma, lung, pancreatic); TP53's product p53 activates p21 and blocks G1→S phase (most cancers; Li-Fraumeni SBLA syndrome — Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland at early age).",
            variant: "process",
          },
          {
            id: "output",
            label: "Name the suppressor by what it brakes",
            sublabel:
              "Output — a G1→S question is a gatekeeper question (RB1/E2F, CDKN2A/p16, TP53/p53→p21); a pathway question is a regulator question (APC→β-catenin/WNT, PTEN→PI3k/AKT, VHL→HIF-1α); and the rest of the roster brakes with named proteins — BRCA1/BRCA2, MENin, neurofibromin, merlin, hamartin, tuberin ('2berin'), the WT1 urogenital transcription factor, and the deleted-in acronyms DCC (colorectal) and SMAD4/DPC4 (pancreatic).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "pathway", label: "pathway-level signals" },
          { from: "pathway", to: "gate", label: "converge on the gate" },
          { from: "gate", to: "output", label: "G1→S blocked or lost" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "oncogene-tumor-suppressor-map",
      title: "The oncogene and tumor-suppressor map (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source page (book 220): the top rule panel carrying the allele arithmetic — the oncogene's ONE hit (a gain-of-function allele dominating its normal partner, with the RET germline example) against the tumor suppressor's TWO hits (the Knudson 2-hit fork with both allele squares knocked out, the first often inherited, the second somatic, with the RB1 example); the oncogene roster as a kinase-classification grid running membrane → cytoplasm → nucleus (receptor tyrosine kinases ALK, EGFR, HER2, RET; cytokine receptor c-KIT/CD117; non-receptor tyrosine kinases BCR-ABL, JAK2; serine/threonine kinase BRAF; RAS GTPase KRAS; transcription factors MYCC, MYCN; antiapoptotic BCL-2 — each with its verbatim neoplasm); and the tumor-suppressor roster as a function-family grid (the G1→S gatekeepers RB1, CDKN2A, TP53; the pathway negative regulators APC, PTEN, VHL; the DNA repair proteins BRCA1/BRCA2; the syndrome genes DCC, SMAD4, MEN1, NF1, NF2, TSC1, TSC2, WT1 with their conditions).",
      notice:
        "Census (pdfimages + VLM): ZERO raster images on the page — pure text: two back-to-back tables (12 oncogene rows; 15 tumor-suppressor rows) and their two rule paragraphs, adapted here as an ORIGINAL KYP visual with both tables carried verbatim in the note's table blocks (no source reproduction). The page prints NO margin notes or mnemonics (VLM census confirmed); the KYP memory layer is original. The source's embedded-capital quirks — RET's 'REceptor Tyrosine kinase', c-KIT's 'CytoKIne receptor', BRCA's 'BReast…CAncers', PTEN's 'breasT…ENdometrial', NF's 'NeuroFibromatosis', RB1's '(Bone cancer)', TSC2's tuberin ('2berin') — are preserved as printed.",
    },
    {
      kind: "table",
      title: "Book 220 — the Oncogenes table (carried verbatim, all 12 rows)",
      intro:
        "The gain-of-function roster, as printed: GENE / GENE PRODUCT / ASSOCIATED NEOPLASM.",
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
        "Every row obeys the one-hit rule above the table: damage to only one allele of the proto-oncogene is required. Read the roster by cellular address — the four receptor tyrosine kinases at the membrane (ALK and EGFR in lung adenocarcinoma, HER2 in breast and gastric, RET in the MEN2/thyroid/pheochromocytoma set, its product printed with the embedded capitals 'REceptor Tyrosine kinase'), the cytokine receptor c-KIT (CD117), the two cytoplasmic non-receptor tyrosine kinases (BCR-ABL in CML and ALL, JAK2 in the myeloproliferative neoplasms), the serine/threonine kinase BRAF with the table's longest list, the RAS GTPase KRAS with its four cancers, the nuclear MYC pair (C → Burkitt, N → neuroblastoma), and the antiapoptotic BCL-2 keeping lymphomas alive.",
    },
    {
      kind: "table",
      title: "Book 220 — the Tumor suppressor genes table (carried verbatim, all 15 rows)",
      intro:
        "The loss-of-function roster, as printed: GENE / GENE PRODUCT / ASSOCIATED CONDITION.",
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
        "Every row obeys the two-hit rule above the table: both (two) alleles must be lost for expression of disease (the Knudson 2-hit hypothesis). Read the roster by what each gene brakes — the G1→S gatekeepers (RB1 holding E2F in retinoblastoma and osteosarcoma, p16 in the many-cancers row, p53 activating p21 across most cancers and Li-Fraumeni's SBLA), the pathway negative regulators (APC on β-catenin/WNT, PTEN on PI3k/AKT, VHL on hypoxia-inducible factor 1α), and the eponym set with the source's embedded capitals preserved: BRCA's 'BReast…CAncers', PTEN's 'breasT…ENdometrial', the NeuroFibromatosis pair, RB1's '(Bone cancer)', and TSC2's tuberin ('2berin') against TSC1's hamartin.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 34-year-old woman has a rapidly growing invasive carcinoma of the breast; immunohistochemistry shows strong overexpression of a member of the ERBB family of receptor tyrosine kinases, and the same target is amplified in a subset of gastric carcinomas.",
        discriminator: "HER2 (ERBB2) — receptor tyrosine kinase; breast and gastric carcinomas; gain of function, damage to only ONE allele",
        concept: "The oncogene address — membrane receptor tyrosine kinase",
        answer:
          "HER2 (ERBB2) is the receptor tyrosine kinase row whose associated neoplasms are breast and gastric carcinomas. It obeys the printed rule verbatim: a gain of function mutation (here overexpression/amplification) converts the proto-oncogene to an oncogene → ↑ cancer risk, requiring damage to only one allele. Its ERBB sibling EGFR (ERBB1) — also a receptor tyrosine kinase — pairs with lung adenocarcinoma, alongside ALK.",
      },
      {
        stem: "A 52-year-old man presents with fatigue, massive splenomegaly, and a leukocyte count of 180,000/mm³; the peripheral smear shows myeloid cells at all stages of maturation, and cytogenetics reveals the Philadelphia chromosome.",
        discriminator: "BCR-ABL — non-receptor (cytoplasmic) tyrosine kinase; CML and ALL; one allele",
        concept: "Receptor vs non-receptor tyrosine kinase",
        answer:
          "BCR-ABL is the fusion non-receptor tyrosine kinase of CML (and ALL) — it signals from the cytoplasm without a receptor, which is the classification split the table draws between the four receptor tyrosine kinases (ALK, EGFR/ERBB1, HER2/ERBB2, RET) and the two non-receptor ones (BCR-ABL, and JAK2 with the myeloproliferative neoplasms). As an oncogene it needs only one activated allele.",
      },
      {
        stem: "A 61-year-old woman undergoes endoscopy for early satiety; a 4-cm submucosal gastric mass is resected and shows spindle cells staining strongly for CD117.",
        discriminator: "c-KIT — CytoKIne receptor (CD117); gastrointestinal stromal tumor (GIST), mastocytosis; one allele",
        concept: "The cytokine-receptor class of the oncogene table",
        answer:
          "CD117 is c-KIT, the cytokine receptor — the one oncogene row whose product is a receptor rather than a kinase enzyme (the source prints it 'CytoKIne receptor (CD117)', embedding KIT's letters in the product). Its associated neoplasms are the gastrointestinal stromal tumor (GIST) and mastocytosis, and as a gain-of-function oncogene it requires damage to only one allele.",
      },
      {
        stem: "A 3-year-old girl has leukocoria of the right eye; fundus examination shows a white retinal mass. Her father had the same finding in his left eye at age 2, was enucleated, and at age 38 developed a painful mass of the distal femur diagnosed as osteosarcoma.",
        discriminator: "RB1 — inhibits E2F, blocks G1→S; retinoblastoma, osteosarcoma (Bone cancer); BOTH alleles lost — the Knudson 2-hit hypothesis",
        concept: "The two-hit arithmetic in an inherited suppressor syndrome",
        answer:
          "RB1 is the gatekeeper that inhibits E2F and blocks the G1→S phase; its associated conditions are retinoblastoma and osteosarcoma (Bone cancer — the source's embedded capitals). It is a tumor suppressor, so the printed rule governs it: both (two) alleles must be lost for expression of disease. The father inherited one lost allele in the germline (hit 1) and needed only one somatic hit in a retinal cell (hit 2) for his childhood tumor — and a second two-hit event in bone for the adult osteosarcoma.",
      },
    ],
    traps: [
      {
        a: "MYCC (c-myc)",
        b: "MYCN (N-myc)",
        whyConfused: "Both are MYC-family transcription factors sitting in adjacent rows of the oncogene table",
        keyDifference:
          "MYCC (c-myc) → Burkitt lymphoma; MYCN (N-myc) → neuroblastoma — the table's twin-row trap. Both are transcription factors and both obey the one-allele rule, but their neoplasms never cross.",
        clue: "A pediatric solid tumor of neural crest origin (adrenal mass) → N-myc/neuroblastoma; a childhood jaw or abdominal tumor with starry-sky histology → c-myc/Burkitt lymphoma",
      },
      {
        a: "Receptor tyrosine kinases (ALK, EGFR, HER2, RET)",
        b: "Non-receptor tyrosine kinases (BCR-ABL, JAK2)",
        whyConfused: "Both classes are tyrosine kinases and all are oncogenes requiring only one allele",
        keyDifference:
          "The four receptor tyrosine kinases sit at the cell membrane and bind extracellular ligands (ALK and EGFR/ERBB1 → lung adenocarcinoma; HER2/ERBB2 → breast and gastric; RET → MEN2A and 2B, medullary and papillary thyroid carcinoma, pheochromocytoma); the two non-receptor kinases signal from the cytoplasm without a receptor (BCR-ABL → CML, ALL; JAK2 → myeloproliferative neoplasms).",
        clue: "A fusion kinase or a cytoplasmic signaling question (Philadelphia chromosome, myeloproliferative neoplasms) → non-receptor; a surface-ligand or ERBB-family question → receptor.",
      },
      {
        a: "MEN1 (tumor suppressor table)",
        b: "RET (oncogene table)",
        whyConfused: "Both are 'MEN genes' — MEN1 names Multiple Endocrine Neoplasia type 1, and RET's row lists MEN2A and 2B",
        keyDifference:
          "MEN1 is a tumor suppressor (product MENin; Multiple Endocrine Neoplasia type 1) — BOTH alleles must be lost (the 2-hit rule). RET is a proto-oncogene (receptor tyrosine kinase; MEN2A and 2B, medullary and papillary thyroid carcinoma, pheochromocytoma) — damage to only ONE allele is required. Same acronym family, opposite allele arithmetic.",
        clue: "A question about MEN2's medullary thyroid carcinoma or pheochromocytoma → RET, one hit; a question about MEN1's parathyroid/pancreas/pituitary triad → MEN1, two hits.",
      },
      {
        a: "APC",
        b: "PTEN",
        whyConfused: "Both are 'negative regulator of a pathway' rows in the tumor suppressor table",
        keyDifference:
          "APC is the negative regulator of the β-catenin/WNT pathway → colorectal cancer (associated with FAP); PTEN is the negative regulator of the PI3k/AKT pathway → prostate, breast, and endometrial cancers. Both need two hits, but their pathways and target organs do not overlap.",
        clue: "Hundreds of colonic adenomas or a WNT/β-catenin stem → APC; a PTEN hamartoma-story or a PI3K/AKT question with prostate/breast/endometrial cancers → PTEN.",
      },
      {
        a: "RB1",
        b: "TP53",
        whyConfused: "Both are G1→S gatekeepers in the tumor suppressor table, both inherited as germline-first-hit syndromes",
        keyDifference:
          "RB1 inhibits E2F (blocks G1→S) → retinoblastoma, osteosarcoma (Bone cancer); TP53's p53 activates p21 (blocks G1→S) → most cancers, Li-Fraumeni (SBLA) syndrome — multiple malignancies at early age (Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland). RB1's catalog is narrow and tissue-specific; TP53's is the widest in the table.",
        clue: "The eye-and-bone pair → RB1; the many-early-cancers pedigree (a sarcoma plus breast or brain plus leukemia or adrenal) → TP53 and the SBLA mnemonic the source prints.",
      },
    ],
    pivots: [
      {
        lookAlike: "An oncogene named in a stem — which class, and what does that predict?",
        differentiator:
          "Sort by cellular address: receptor tyrosine kinases (ALK, EGFR/ERBB1, HER2/ERBB2, RET — surface), cytokine receptor (c-KIT/CD117 — surface), non-receptor tyrosine kinases (BCR-ABL, JAK2 — cytoplasm), serine/threonine kinase (BRAF — cytoplasm, downstream of RAS), RAS GTPase (KRAS — the switch), transcription factors (MYCC, MYCN — nucleus), antiapoptotic molecule (BCL-2 — the death brake).",
        correctPath:
          "The class predicts the neoplasm: ERBB family → breast/gastric or lung adenocarcinoma; c-KIT → GIST and mastocytosis; BCR-ABL → CML/ALL; JAK2 → myeloproliferative neoplasms; BRAF → the five-neoplasm list; KRAS → pancreatic/colorectal/lung/endometrial; MYCC → Burkitt; MYCN → neuroblastoma; BCL-2 → the B-cell lymphomas — all with one hit.",
      },
      {
        lookAlike: "An inherited cancer syndrome — how many alleles, and which table does the gene live on?",
        differentiator:
          "Count first: a syndrome expressing from ONE allele is a gain-of-function oncogene (RET — MEN2A/2B); a syndrome needing BOTH (two) alleles lost is a loss-of-function suppressor (RB1, TP53, APC, BRCA1/2, VHL, MEN1, NF1/2, TSC1/2, WT1), where the germline carries hit 1 and a somatic event supplies hit 2 (the Knudson 2-hit hypothesis).",
        correctPath:
          "Bilateral/early multifocal disease with a dominant family history → suppressor with an inherited first hit (eg, bilateral retinoblastoma in RB1); an endocrine syndrome with medullary thyroid carcinoma and pheochromocytoma → RET's single activated allele.",
      },
      {
        lookAlike: "A G1→S or pathway question — which suppressor is the answer?",
        differentiator:
          "The gatekeepers block the G1→S transition itself: RB1 by inhibiting E2F, CDKN2A via p16, TP53 via p53 activating p21. The pathway regulators brake an upstream pathway: APC (β-catenin/WNT), PTEN (PI3k/AKT), VHL (hypoxia-inducible factor 1α).",
        correctPath:
          "An E2F or pocket-protein question → RB1; a p16/CDK question → CDKN2A; a p21 or guardian-of-the-genome question → TP53 (with Li-Fraumeni SBLA as its germline face); a WNT/β-catenin or FAP question → APC; a PI3K/AKT or hamartoma question → PTEN; a hemangioblastoma/hypoxia question → VHL.",
      },
    ],
    miniCase: {
      vignette:
        "A 31-year-old woman is referred to the cancer genetics clinic after a diagnosis of breast carcinoma. Her personal history is notable for a soft-tissue sarcoma of the left thigh at age 4, treated with wide excision and radiation. Family history: her father died of acute leukemia at 38; a paternal aunt was diagnosed with a glioma at 33 and breast cancer at 46; a paternal cousin's child died of an adrenal gland carcinoma at age 5. The pedigree shows multiple malignancies at early age across three generations. In the waiting room, the patient reads a brochure about a different family on the panel: a 26-year-old man with a germline mutation whose syndrome includes medullary thyroid carcinoma, pheochromocytoma, and mucosal neuromas, and expresses in every carrier from birth.",
      question:
        "For THIS patient's family: name the gene, its product and function, the allele count required for a tumor to express, and the acronym for the syndrome's tumor catalog — and state why the other family's syndrome expresses with a different allele count.",
      options: [
        {
          label:
            "TP53 — product p53, which activates p21 and blocks the G1→S phase; BOTH (two) alleles must be lost for expression of disease (the Knudson 2-hit hypothesis — the germline carries hit 1, a somatic event supplies hit 2 in each tissue); the catalog is Li-Fraumeni (SBLA) syndrome — Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland. The other family's germline RET mutation is a gain-of-function oncogene, which requires damage to only ONE allele.",
          text: "The gatekeeper with the widest catalog, waiting on a second hit.",
          correct: true,
          why:
            "Correct on all four layers. (1) THE GENE: the pedigree's early-age collection — childhood soft-tissue sarcoma, breast cancer at 31, leukemia at 38, brain tumor at 33, adrenal gland carcinoma at 5 — is Li-Fraumeni syndrome, printed in the table with TP53: p53, activates p21, blocks G1→S phase; most cancers, Li-Fraumeni (SBLA) syndrome (multiple malignancies at early age; Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland). (2) THE FUNCTION: TP53 is one of the three G1→S gatekeepers — its p53 activates p21 to block the transition (RB1 inhibits E2F; CDKN2A's p16 is the third). (3) THE ARITHMETIC: TP53 is a tumor suppressor — both (two) alleles must be lost for expression of disease (the Knudson 2-hit hypothesis): this family inherited hit 1 in the germline, and each tumor required a second, somatic hit. (4) THE CONTRAST: germline RET (MEN2A/2B — medullary and papillary thyroid carcinoma, pheochromocytoma) is an oncogene: a gain-of-function mutation converts the proto-oncogene to an oncogene and requires damage to only ONE allele — which is why every carrier expresses from birth.",
        },
        {
          label:
            "RET — a gain-of-function receptor tyrosine kinase; damage to only one allele is required; the family's tumors represent the MEN2A and 2B spectrum presenting atypically late.",
          text: "The one-allele endocrine gene explains everything with simpler genetics.",
          why:
            "Wrong gene and wrong arithmetic for this family: RET's associated neoplasms are MEN2A and 2B, medullary and papillary thyroid carcinoma, and pheochromocytoma — none of which appears in the pedigree, and RET syndromes express from birth in carriers (as the waiting-room family shows). The leukemia, glioma, childhood sarcoma, and adrenal gland carcinoma pattern is the SBLA catalog of TP53, a two-hit suppressor.",
        },
        {
          label:
            "RB1 — inhibits E2F, blocks G1→S phase; retinoblastoma, osteosarcoma; both alleles must be lost. The father's leukemia and the aunt's glioma are coincidental second primaries.",
          text: "The sarcoma in the proband and the bone-cancer association pull toward the classic two-hit gene.",
          why:
            "Tempting on the arithmetic — RB1 IS a two-hit tumor suppressor, and its row includes osteosarcoma (Bone cancer) — but the catalog is wrong: RB1's associated conditions are retinoblastoma and osteosarcoma, not breast cancer, leukemia, brain tumors, or adrenal gland carcinoma. No retinoblastoma appears in this family, and the SBLA pattern with multiple malignancies at early age is TP53's printed signature.",
        },
        {
          label:
            "BRCA1/BRCA2 — BRCA1/BRCA2 proteins; breast, ovarian, prostate, pancreatic cancers; both alleles must be lost. The early ages and the sarcoma reflect ascertainment bias.",
          text: "The breast cancers dominate the pedigree if you squint.",
          why:
            "Right arithmetic, wrong catalog: BRCA1/BRCA2 are two-hit tumor suppressors, but their associated cancers are breast, ovarian, prostate, and pancreatic — the childhood soft-tissue sarcoma, the leukemia at 38, the glioma at 33, and the adrenal gland carcinoma at 5 are not BRCA tumors, and that many-early-cancers breadth is exactly what 'multiple malignancies at early age' in TP53's Li-Fraumeni row describes.",
        },
        {
          label:
            "APC — negative regulator of the β-catenin/WNT pathway; colorectal cancer (associated with FAP); both alleles must be lost. Screening colonoscopy should precede any genetic testing.",
          text: "The most common inherited colon cancer gene is the safest first guess.",
          why:
            "Wrong organ system entirely: APC's associated condition is colorectal cancer in the FAP context — no colorectal tumors or adenoma burden appear in this pedigree, and APC does not produce the sarcoma-breast/brain-leukemia-adrenal pattern. The allele count (two hits) is correct, but the gene must match the printed condition: TP53's SBLA catalog.",
        },
      ],
      reasoning:
        "The case walks the three frames. (1) THE ALLELE ARITHMETIC: the question's second half is decided by which table the gene lives on — RET is the oncogene table's endocrine row (one hit, expressed from birth in every carrier), while the four distractor genes RB1, BRCA1/BRCA2, APC and the answer TP53 are all two-hit suppressors; the pedigree's dominant inheritance with early expression is the classic germline-hit-1 pattern. (2) THE CATALOG: multiple malignancies at early age — sarcoma (the proband, age 4), breast (the proband at 31 and the aunt), brain (the glioma), leukemia (the father), adrenal gland (the cousin's child, age 5) — is the SBLA expansion the source prints in TP53's row: Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland. (3) THE FUNCTION: TP53's product p53 activates p21 and blocks the G1→S phase — the damage-response arm of the gate, distinct from RB1's E2F inhibition and CDKN2A's p16. The distractors fail each on a different layer: RET on the allele count and the catalog, RB1 on the catalog (no eye disease; its Bone cancer pun is for osteosarcoma), BRCA1/BRCA2 on the catalog (breast-ovarian-prostate-pancreatic only), and APC on the organ system.",
    },
  },
  mnemonics: [
    {
      code: "GAIN ONE, LOSE TWO",
      meaning:
        "The allele arithmetic of the two rules: GAIN-of-function (the oncogene) — a gain of function mutation converts the proto-oncogene (normal gene) to an oncogene → ↑ cancer risk, and requires damage to only ONE allele. LOSE-function (the tumor suppressor) — loss of function → ↑ cancer risk, and BOTH (two) alleles must be lost for expression of disease: the Knudson 2-hit hypothesis.",
      memorizes: "The two rule paragraphs",
      whenToUse: "Any 'how many alleles' question, and any inherited-syndrome question deciding oncogene vs suppressor",
      clinical:
        "Germline RET expresses MEN2A/2B with its single activated allele; germline RB1 or TP53 waits for a second, somatic hit before retinoblastoma or Li-Fraumeni tumors appear.",
    },
    {
      code: "MEMBRANE, CYTOPLASM, NUCLEUS",
      meaning:
        "The 12-row oncogene table by cellular address. MEMBRANE — the receptor tyrosine kinases HER2 (breast and gastric carcinomas), EGFR/ERBB1 (lung adenocarcinoma), ALK (lung adenocarcinoma), RET (MEN2A and 2B, medullary and papillary thyroid carcinoma, pheochromocytoma) plus the cytokine receptor c-KIT/CD117 (GIST, mastocytosis). CYTOPLASM — the non-receptor tyrosine kinases BCR-ABL (CML, ALL) and JAK2 (myeloproliferative neoplasms), the serine/threonine kinase BRAF (melanoma, non-Hodgkin lymphoma, colorectal carcinoma, papillary thyroid carcinoma, hairy cell leukemia), and the RAS GTPase KRAS (pancreatic, colorectal, lung, endometrial cancers). NUCLEUS — the transcription factors MYCC/c-myc (Burkitt lymphoma) and MYCN/N-myc (neuroblastoma), with BCL-2 (follicular and diffuse large B-cell lymphomas) as the antiapoptotic molecule that refuses to let the cell die.",
      memorizes: "The 12-row oncogene table, classified",
      whenToUse: "Any gene-product/neoplasm matching question from the oncogene table",
      clinical:
        "Sort the gene by where it signals and the neoplasm follows: surface ERBBs to lung/breast/gastric, cytoplasmic fusions to the leukemias and myeloproliferative neoplasms, nuclear MYC to Burkitt and neuroblastoma.",
    },
    {
      code: "GUARD THE GATE, REGULATE THE PATHWAY",
      meaning:
        "The tumor suppressor roster by what it brakes. GUARD THE GATE (the G1→S transition) — RB1 inhibits E2F (retinoblastoma, osteosarcoma), CDKN2A's p16 (many cancers: melanoma, lung, pancreatic), TP53's p53 activating p21 (most cancers, Li-Fraumeni SBLA). REGULATE THE PATHWAY — APC negatively regulates β-catenin/WNT (colorectal cancer, FAP), PTEN negatively regulates PI3k/AKT (prostate, breast, endometrial), VHL inhibits hypoxia-inducible factor 1α (von Hippel-Lindau disease).",
      memorizes: "The functional split of the 15-row tumor suppressor table",
      whenToUse: "Any G1→S checkpoint question or any pathway-naming question (WNT, PI3K/AKT, HIF-1α)",
      clinical:
        "Three genes block one gate and three genes brake three pathways — the function names the gene before the syndrome does.",
    },
    {
      code: "THE 2s GET THE NICKNAMES",
      meaning:
        "The paired suppressor genes and their protein products: the number-2 genes carry the nickname products — NF2 → Merlin (schwannomin) and TSC2 → Tuberin ('2berin', the source's own printed pun) — while their number-1 partners carry the mechanistic ones — NF1 → Neurofibromin (a Ras GTPase activating protein) and TSC1 → Hamartin. Complete the eponym set with MEN1 → MENin (Multiple Endocrine Neoplasia type 1) and WT1 (urogenital development transcription factor → Wilms Tumor).",
      memorizes: "The NF1/NF2 and TSC1/TSC2 product pairs",
      whenToUse: "Any gene-product matching question in the syndrome genes",
      clinical:
        "Merlin the magician and '2berin' both live at number 2 — neurofibromin (the Ras GAP) and hamartin hold down number 1.",
    },
  ],
  rapidReview: {
    s30: [
      "Oncogenes: gain of function mutation converts proto-oncogene (normal gene) to oncogene → ↑ cancer risk; requires damage to only ONE allele",
      "Tumor suppressor genes: loss of function → ↑ cancer risk; both (two) alleles must be lost for expression of disease (the Knudson 2-hit hypothesis)",
      "Oncogene roster: ALK, EGFR (ERBB1) — receptor tyrosine kinase — lung adenocarcinoma; HER2 (ERBB2) — receptor tyrosine kinase — breast and gastric carcinomas; RET — receptor tyrosine kinase — MEN2A and 2B, medullary and papillary thyroid carcinoma, pheochromocytoma",
      "Oncogene roster (continued): BCR-ABL — non-receptor tyrosine kinase — CML, ALL; JAK2 — non-receptor tyrosine kinase — myeloproliferative neoplasms; BRAF — serine/threonine kinase — melanoma, non-Hodgkin lymphoma, colorectal carcinoma, papillary thyroid carcinoma, hairy cell leukemia",
      "Oncogene roster (continued): c-KIT — cytokine receptor (CD117) — GIST, mastocytosis; MYCC (c-myc) — transcription factor — Burkitt lymphoma; MYCN (N-myc) — transcription factor — neuroblastoma; KRAS — RAS GTPase — pancreatic, colorectal, lung, endometrial cancers; BCL-2 — antiapoptotic molecule — follicular and diffuse large B-cell lymphomas",
      "Tumor suppressor roster — G1→S gatekeepers: RB1 inhibits E2F (retinoblastoma, osteosarcoma); CDKN2A/p16 (many cancers — melanoma, lung, pancreatic); TP53/p53 activates p21 (most cancers, Li-Fraumeni SBLA)",
      "Tumor suppressor roster — pathway regulators: APC negatively regulates β-catenin/WNT (colorectal cancer, FAP); PTEN negatively regulates PI3k/AKT (prostate, breast, endometrial); VHL inhibits hypoxia-inducible factor 1α (von Hippel-Lindau disease)",
      "Tumor suppressor roster — the rest: BRCA1/BRCA2 (breast, ovarian, prostate, pancreatic); DCC (colorectal); SMAD4/DPC4 (pancreatic, colorectal); MEN1/MENin (MEN type 1); NF1/neurofibromin (NF1); NF2/merlin (NF2); TSC1/hamartin and TSC2/tuberin ('2berin') (tuberous sclerosis); WT1 (Wilms tumor)",
    ],
    m3: [
      "GAIN ONE, LOSE TWO — the oncogene needs one allele; the suppressor needs both (the Knudson 2-hit)",
      "MEMBRANE, CYTOPLASM, NUCLEUS — the oncogene table by address: HER2/EGFR/ALK/RET + c-KIT at the membrane, BCR-ABL/JAK2/BRAF/KRAS in the cytoplasm, MYCC/MYCN in the nucleus, BCL-2 on the death brake",
      "GUARD THE GATE, REGULATE THE PATHWAY — RB1/CDKN2A/TP53 at G1→S; APC (β-catenin/WNT), PTEN (PI3k/AKT), VHL (HIF-1α) on the pathways",
      "THE 2s GET THE NICKNAMES — NF2 → merlin, TSC2 → tuberin ('2berin'); the 1s get neurofibromin and hamartin",
      "MEN2 lives on the oncogene side (RET, one hit); MEN1 on the suppressor side (MENin, two hits) — the same acronym family with opposite arithmetic",
    ],
    m10: [
      "The source prints its own embedded capitals: RET → 'REceptor Tyrosine kinase', c-KIT → 'CytoKIne receptor (CD117)', BRCA → 'BReast…CAncers', PTEN → 'breasT…ENdometrial', NF1/NF2 → 'NeuroFibromatosis', RB1 → '(Bone cancer)', TSC2 → Tuberin ('2berin')",
      "BRAF's five neoplasms: melanoma, non-Hodgkin lymphoma, colorectal carcinoma, papillary thyroid carcinoma, hairy cell leukemia — the longest list in either table",
      "RET's four: MEN2A and 2B, medullary thyroid carcinoma, papillary thyroid carcinoma, pheochromocytoma; KRAS's four cancers: pancreatic, colorectal, lung, endometrial",
      "TP53's SBLA expansion: multiple malignancies at early age — Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland",
      "Two genes encode Ras-related proteins on opposite sides of the page: KRAS (the RAS GTPase oncogene, one hit) and NF1 (neurofibromin, the Ras GTPase activating protein suppressor, two hits)",
      "DCC and SMAD4 (DPC4) are self-defining acronyms: Deleted in Colorectal Cancer and DPC—Deleted in Pancreatic Cancer — with SMAD4's conditions listing both pancreatic and colorectal cancer",
    ],
  },
  recall: [
    {
      q: "The oncogene rule verbatim — both sentences.",
      a: "Gain of function mutation converts proto-oncogene (normal gene) to oncogene → ↑ cancer risk. Requires damage to only one allele of a proto-oncogene.",
    },
    {
      q: "The oncogene table verbatim, part 1 — the kinases (ALK through BRAF).",
      a: "ALK — Receptor tyrosine kinase — Lung adenocarcinoma. EGFR (ERBB1) — Receptor tyrosine kinase — Lung adenocarcinoma. HER2 (ERBB2) — Receptor tyrosine kinase — Breast and gastric carcinomas. RET — REceptor Tyrosine kinase — MEN2A and 2B, medullary and papillary thyroid carcinoma, pheochromocytoma. BCR-ABL — Non-receptor tyrosine kinase — CML, ALL. JAK2 — Non-receptor tyrosine kinase — Myeloproliferative neoplasms. BRAF — Serine/threonine kinase — Melanoma, non-Hodgkin lymphoma, colorectal carcinoma, papillary thyroid carcinoma, hairy cell leukemia.",
    },
    {
      q: "The oncogene table verbatim, part 2 — c-KIT through BCL-2.",
      a: "c-KIT — CytoKIne receptor (CD117) — Gastrointestinal stromal tumor (GIST), mastocytosis. MYCC (c-myc) — Transcription factor — Burkitt lymphoma. MYCN (N-myc) — Transcription factor — Neuroblastoma. KRAS — RAS GTPase — Pancreatic, colorectal, lung, endometrial cancers. BCL-2 — Antiapoptotic molecule (inhibits apoptosis) — Follicular and diffuse large B-Cell Lymphomas.",
    },
    {
      q: "The tumor suppressor rule verbatim — the Knudson sentence.",
      a: "Loss of function → ↑ cancer risk; both (two) alleles of a tumor suppressor gene must be lost for expression of disease (the Knudson 2-hit hypothesis).",
    },
    {
      q: "The tumor suppressor table verbatim, part 1 — APC through NF2.",
      a: "APC — Negative regulator of β-catenin/WNT pathway — Colorectal cancer (associated with FAP). BRCA1/BRCA2 — BRCA1/BRCA2 proteins — BReast, ovarian, prostate, pancreatic CAncers. CDKN2A — p16, blocks G1 → S phase — Many cancers (eg, melanoma, lung, pancreatic). DCC — DCC—Deleted in Colorectal Cancer — Colorectal cancer. SMAD4 (DPC4) — DPC—Deleted in Pancreatic Cancer — Pancreatic cancer, colorectal cancer. MEN1 — MENin — Multiple Endocrine Neoplasia type 1. NF1 — Neurofibromin (Ras GTPase activating protein) — NeuroFibromatosis type 1. NF2 — Merlin (schwannomin) protein — NeuroFibromatosis type 2.",
    },
    {
      q: "The tumor suppressor table verbatim, part 2 — PTEN through WT1.",
      a: "PTEN — Negative regulator of PI3k/AKT pathway — Prostate, breasT, and ENdometrial cancers. RB1 — Inhibits E2F; blocks G1 → S phase — Retinoblastoma, osteosarcoma (Bone cancer). TP53 — p53, activates p21, blocks G1 → S phase — Most cancers, Li-Fraumeni (SBLA) syndrome (multiple malignancies at early age; Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland). TSC1 — Hamartin protein — Tuberous sclerosis complex. TSC2 — Tuberin (“2berin”) — Tuberous sclerosis complex. VHL — Inhibits hypoxia-inducible factor 1α — von Hippel-Lindau disease. WT1 — Urogenital development transcription factor — Wilms Tumor (nephroblastoma).",
    },
  ],
  related: [
    {
      title: "Cell Cycle & Checkpoints",
      topicId: "cell-cycle",
      note:
        "The G1→S gate that three of this page's suppressors guard — RB1's inhibition of E2F, CDKN2A's p16, TP53's p53→p21 — is the restriction point the cell-cycle note builds; the gatekeepers are the checkpoint's molecular hands.",
    },
    {
      title: "Apoptosis: Intrinsic, Extrinsic & Misfolded Proteins",
      topicId: "apoptosis-pathways",
      note:
        "BCL-2, the antiapoptotic molecule (inhibits apoptosis) of the oncogene table, is the intrinsic pathway's brake — the same molecule whose gain of function keeps follicular and diffuse large B-cell lymphomas from dying.",
    },
    {
      title: "DNA Repair Pathways",
      topicId: "dna-repair",
      note:
        "BRCA1/BRCA2 — the two-hit suppressors of breast, ovarian, prostate, and pancreatic cancers — are the double-strand-break repair crew (homologous recombination) whose failure is the repair page's cancer syndrome.",
    },
    {
      title: "Genetic Terminology & Population Genetics",
      topicId: "genetic-terms-popgen",
      note:
        "The genetics vocabulary page formalizes this page's arithmetic: loss of heterozygosity — the wild-type allele must be deleted, mutated, or eliminated (the two-hit hypothesis of retinoblastoma, Lynch, Li-Fraumeni) — and states explicitly that it is NOT true of oncogenes.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (signal transduction)",
      connection:
        "The oncogene table is a signal-transduction roll call: receptor tyrosine kinases (ALK, EGFR/ERBB1, HER2/ERBB2, RET), the cytokine receptor c-KIT/CD117, non-receptor tyrosine kinases (BCR-ABL, JAK2), the serine/threonine kinase BRAF in the MAP-kinase pathway, the RAS GTPase switch KRAS, and the nuclear MYC transcription factors — each row an overactive station on the membrane-to-nucleus line.",
    },
    {
      subject: "Endocrinology (the MEN syndromes)",
      connection:
        "The two MEN families live on opposite sides of this page: MEN1 (MENin — parathyroid, pancreas, pituitary) is a two-hit tumor suppressor, while MEN2A and 2B ride RET's single gain-of-function receptor tyrosine kinase allele — medullary thyroid carcinoma and pheochromocytoma in every carrier.",
    },
    {
      subject: "Genetics (the two-hit hypothesis and loss of heterozygosity)",
      connection:
        "Knudson's arithmetic as the genetics pages state it: for tumor suppressors the wild-type allele must be deleted, mutated, or eliminated before disease expresses (retinoblastoma two-hit, Lynch, Li-Fraumeni) — and this is NOT true of oncogenes, whose single damaged allele suffices.",
    },
    {
      subject: "Pharmacology (targeted kinase inhibitors)",
      connection:
        "The oncogene roster doubles as a target list: BCR-ABL (the imatinib-era CML treatment), c-KIT (GIST), EGFR and ALK (lung adenocarcinoma), HER2 (breast and gastric), BRAF (melanoma) — gain-of-function kinases make druggable targets in a way lost suppressors generally do not.",
    },
  ],
};
