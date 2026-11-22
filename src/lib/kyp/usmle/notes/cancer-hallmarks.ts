import type { KypUsMLENote } from "../types";

// Pathology — NEOPLASIA banner (P-batch 13). Source: pdf 239 /
// book 217 (Hallmarks of cancer — a single 9-row HALLMARK |
// MECHANISM table). Census (pdfimages + VLM): NO raster images on
// the page (pdfimages -list returned zero rows). The page is pure
// text — no figures, no photographs. The visual is an ORIGINAL KYP
// adaptation rendering the 9-hallmark grid as a panel map (no
// source figure to redraw). The table is carried verbatim in the
// note's table block. NO copyrighted photographs, NO margin
// mnemonics (VLM confirmed); the KYP memory layer is original.

export const cancerHallmarks: KypUsMLENote = {
  id: "cancer-hallmarks",
  title: "Hallmarks of Cancer",
  subtitle:
    "The nine capabilities a cell must acquire to become a lethal cancer (book 217) — cancer is caused by (mostly acquired) DNA mutations that affect fundamental cellular processes (eg, growth, DNA repair, survival). THE NINE HALLMARKS: (1) GROWTH SIGNAL SELF-SUFFICIENCY — mutations in genes encoding proto-oncogenes (↑ growth factors → autocrine loop, eg, ↑PDGF in brain tumors), growth factor receptors (constitutive signaling, eg, HER2 in breast cancer), signaling molecules (eg, RAS), transcription factors (eg, MYC), and cell cycle regulators (eg, cyclins, CDKs); (2) ANTI-GROWTH SIGNAL INSENSITIVITY — mutations in tumor suppressor genes (eg, Rb) and loss of E-cadherin function → loss of contact inhibition (eg, NF2 mutations); (3) EVASION OF APOPTOSIS — mutations in genes that regulate apoptosis (eg, TP53, BCL2 → follicular B cell lymphoma); (4) LIMITLESS REPLICATIVE POTENTIAL — reactivation of telomerase → maintenance and lengthening of telomeres → prevention of chromosome shortening and cell aging; (5) SUSTAINED ANGIOGENESIS — ↑ pro-angiogenic factors (eg, VEGF) or ↓ inhibitory factors, with vessels sprouting from existing capillaries (neoangiogenesis) or recruited from bone marrow (vasculogenesis), and vessels that may be leaky and/or dilated; (6) WARBURG EFFECT — shift of glucose metabolism from mitochondrial oxidative phosphorylation to glycolysis even under aerobic conditions, driven by altered metabolic enzymes (eg, pyruvate kinase M2, LDH-A), supplying rapidly dividing cancer cells with biosynthetic intermediates for nucleotide, lipid, and amino acid synthesis, resulting in ↑ lactate production; (7) IMMUNE EVASION IN CANCER — multiple escape mechanisms: ↓ MHC class I expression → cytotoxic T cells unable to recognize tumor cells, secretion of immunosuppressive factors (eg, TGF-β) and recruitment of regulatory T cells, and upregulation of immune checkpoint molecules; (8) TISSUE INVASION — loss of E-cadherin function → loosening of intercellular junctions → metalloproteinases degrade basement membrane and ECM → cells attach to ECM proteins (eg, laminin, fibronectin) → cells migrate through degraded ECM ('locomotion') → vascular dissemination; (9) METASTASIS — tumor cells or emboli spread via lymphatics or blood → adhesion to endothelium → extravasation and homing, with the site predictable by the first-encountered capillary bed and some cancers showing organ tropism (eg, lung cancers commonly metastasize to adrenals).",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Neoplasia",
  pilotCategory:
    "The hallmarks-of-cancer table's complete architecture — the nine capabilities (growth signal self-sufficiency, anti-growth signal insensitivity, evasion of apoptosis, limitless replicative potential, sustained angiogenesis, Warburg effect, immune evasion, tissue invasion, metastasis), each with its mechanism and named gene/protein examples (PDGF, HER2, RAS, MYC, cyclins/CDKs, Rb, NF2/E-cadherin, TP53, BCL2, telomerase, VEGF, pyruvate kinase M2/LDH-A, MHC class I, TGF-β, regulatory T cells, immune checkpoint molecules, metalloproteinases, laminin/fibronectin).",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 217 (Pathology — Neoplasia: Hallmarks of cancer — the 9-row HALLMARK | MECHANISM table with the definition, the proto-oncogene and receptor and signaling and transcription-factor and cell-cycle entries, the tumor-suppressor and E-cadherin/NF2 entries, the TP53/BCL2 entry, the telomerase entry, the VEGF/neoangiogenesis/vasculogenesis entry, the Warburg effect with pyruvate kinase M2 and LDH-A, the immune evasion escape mechanisms, the tissue invasion cascade, and the metastasis-and-organ-tropism rule)",
  tags: [
    "hallmarks of cancer",
    "cancer biology",
    "DNA mutations",
    "growth signal self-sufficiency",
    "proto-oncogenes",
    "PDGF",
    "brain tumors",
    "autocrine loop",
    "growth factor receptors",
    "HER2",
    "breast cancer",
    "constitutive signaling",
    "signaling molecules",
    "RAS",
    "transcription factors",
    "MYC",
    "cell cycle regulators",
    "cyclins",
    "CDKs",
    "anti-growth signal insensitivity",
    "tumor suppressor genes",
    "Rb",
    "E-cadherin",
    "contact inhibition",
    "NF2",
    "evasion of apoptosis",
    "TP53",
    "BCL2",
    "follicular B cell lymphoma",
    "limitless replicative potential",
    "telomerase",
    "telomeres",
    "chromosome shortening",
    "cell aging",
    "sustained angiogenesis",
    "VEGF",
    "neoangiogenesis",
    "vasculogenesis",
    "leaky vessels",
    "Warburg effect",
    "aerobic glycolysis",
    "oxidative phosphorylation",
    "pyruvate kinase M2",
    "LDH-A",
    "biosynthetic intermediates",
    "lactate production",
    "immune evasion",
    "MHC class I",
    "cytotoxic T cells",
    "immunosuppressive factors",
    "TGF-beta",
    "regulatory T cells",
    "immune checkpoint molecules",
    "tissue invasion",
    "metalloproteinases",
    "basement membrane",
    "extracellular matrix",
    "laminin",
    "fibronectin",
    "locomotion",
    "vascular dissemination",
    "metastasis",
    "lymphatics",
    "blood",
    "adhesion to endothelium",
    "extravasation",
    "homing",
    "first-encountered capillary bed",
    "organ tropism",
    "lung to adrenals",
  ],
  core: {
    what:
      "CANCER is caused by (mostly acquired) DNA mutations that affect fundamental cellular processes (eg, growth, DNA repair, survival). THE NINE HALLMARKS — the capabilities a cell acquires to become a lethal cancer: (1) GROWTH SIGNAL SELF-SUFFICIENCY: mutations in genes encoding proto-oncogenes (→ ↑ growth factors → autocrine loop; eg, ↑ PDGF in brain tumors), growth factor receptors (→ constitutive signaling; eg, HER2 in breast cancer), signaling molecules (eg, RAS), transcription factors (eg, MYC), and cell cycle regulators (eg, cyclins, CDKs). (2) ANTI-GROWTH SIGNAL INSENSITIVITY: mutations in tumor suppressor genes (eg, Rb) and loss of E-cadherin function → loss of contact inhibition (eg, NF2 mutations). (3) EVASION OF APOPTOSIS: mutations in genes that regulate apoptosis (eg, TP53, BCL2 → follicular B cell lymphoma). (4) LIMITLESS REPLICATIVE POTENTIAL: reactivation of telomerase → maintenance and lengthening of telomeres → prevention of chromosome shortening and cell aging. (5) SUSTAINED ANGIOGENESIS: ↑ pro-angiogenic factors (eg, VEGF) or ↓ inhibitory factors; factors may be produced by tumor or stromal cells; vessels can sprout from existing capillaries (neoangiogenesis) or endothelial cells are recruited from bone marrow (vasculogenesis); vessels may be leaky and/or dilated. (6) WARBURG EFFECT: shift of glucose metabolism from mitochondrial oxidative phosphorylation to glycolysis, even under aerobic conditions; driven by altered metabolic enzymes (eg, pyruvate kinase M2, LDH-A); aerobic glycolysis supplies rapidly dividing cancer cells with biosynthetic intermediates for nucleotide, lipid, and amino acid synthesis, resulting in ↑ lactate production. (7) IMMUNE EVASION IN CANCER: normally, immune cells can recognize and attack tumor cells; for successful tumorigenesis, tumor cells must evade the immune system; multiple escape mechanisms exist — ↓ MHC class I expression by tumor cells → cytotoxic T cells are unable to recognize tumor cells; tumor cells secrete immunosuppressive factors (eg, TGF-β) and recruit regulatory T cells to downregulate immune response; tumor cells upregulate immune checkpoint molecules, which inhibit immune response. (8) TISSUE INVASION: loss of E-cadherin function → loosening of intercellular junctions → metalloproteinases degrade basement membrane and ECM → cells attach to ECM proteins (eg, laminin, fibronectin) → cells migrate through degraded ECM ('locomotion') → vascular dissemination. (9) METASTASIS: tumor cells or emboli spread via lymphatics or blood → adhesion to endothelium → extravasation and homing; site of metastasis can be predicted by site of 1° tumor, as the target organ is often the first-encountered capillary bed; some cancers show organ tropism (eg, lung cancers commonly metastasize to adrenals).",
    why:
      "The nine hallmarks are the cancer cell's full playbook — the set of capabilities it must acquire, one mutation at a time, to escape every control the body places on it. The first two hallmarks are the growth controls: self-sufficiency in growth signals (the cell making its own mitogens, HER2's constitutive signaling, RAS and MYC as the downstream switch and amplifier, cyclins and CDKs as the cell-cycle engine) and insensitivity to anti-growth signals (Rb's loss releasing the brake, E-cadherin's loss dissolving contact inhibition). The next two are the death and immortality pair: evasion of apoptosis (TP53 lost or BCL2 overexpressed — the follicular lymphoma's t(14;18) putting BCL2 under the IgH promoter) and limitless replicative potential (telomerase reactivated, telomeres maintained, the cell never senescing). The next two are the supply lines: sustained angiogenesis (VEGF driving new vessels, leaky and dilated, feeding the tumor) and the Warburg effect (glycolysis even with oxygen present, trading ATP efficiency for biosynthetic precursors — the nucleotides, lipids, and amino acids a dividing cell needs, with lactate as the tell). The seventh is immune evasion — the three escape routes that let the tumor hide from cytotoxic T cells (downregulated MHC I), suppress the response (TGF-β and regulatory T cells), and brake the effector cells (checkpoint molecules). The last two are the spread: tissue invasion (the E-cadherin loss, the metalloproteinase breach, the ECM attachment and locomotion, the vascular dissemination) and metastasis (the lymphatic or blood route, the endothelial adhesion, the extravasation and homing, the first-capillary-bed rule, and the organ tropism that sends lung cancers to the adrenals). Together the nine are the exam's framework for every molecular cancer question — name the capability the mutation serves, and the hallmark names the mechanism.",
    keyIdea:
      "Read every cancer-biology question through nine frames. FRAME 1 — GROWTH SIGNAL SELF-SUFFICIENCY: proto-oncogenes (PDGF autocrine loop in brain tumors), receptors (HER2 constitutive signaling in breast cancer), signaling (RAS), transcription (MYC), cell cycle (cyclins, CDKs). FRAME 2 — ANTI-GROWTH SIGNAL INSENSITIVITY: tumor suppressors (Rb), contact inhibition (E-cadherin loss, NF2). FRAME 3 — EVASION OF APOPTOSIS: TP53 loss, BCL2 overexpression (follicular B cell lymphoma). FRAME 4 — LIMITLESS REPLICATIVE POTENTIAL: telomerase reactivation, telomere maintenance. FRAME 5 — SUSTAINED ANGIOGENESIS: VEGF, neoangiogenesis, vasculogenesis, leaky/dilated vessels. FRAME 6 — WARBURG EFFECT: aerobic glycolysis, pyruvate kinase M2 and LDH-A, biosynthetic intermediates, ↑ lactate. FRAME 7 — IMMUNE EVASION: ↓ MHC class I, TGF-β + regulatory T cells, immune checkpoint molecules. FRAME 8 — TISSUE INVASION: E-cadherin loss → metalloproteinases → ECM (laminin, fibronectin) → locomotion → vascular dissemination. FRAME 9 — METASTASIS: lymphatics or blood → adhesion to endothelium → extravasation and homing; first-encountered capillary bed predicts the site; organ tropism (lung to adrenals).",
  },
  mechanisms: [
    {
      id: "hallmark-axis",
      title: "The hallmark axis: nine capabilities, three pairs and a trio",
      context: "The hallmarks-of-cancer table (book 217)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A cell acquires (mostly) DNA mutations",
            sublabel:
              "Input — cancer is caused by (mostly acquired) DNA mutations that affect fundamental cellular processes (eg, growth, DNA repair, survival). Each mutation serves a capability.",
            variant: "input",
          },
          {
            id: "pair1",
            label: "THE GROWTH PAIR — self-sufficiency + insensitivity",
            sublabel:
              "Hallmarks 1-2: GROWTH SIGNAL SELF-SUFFICIENCY (proto-oncogenes, receptors, RAS, MYC, cyclins/CDKs) and ANTI-GROWTH SIGNAL INSENSITIVITY (tumor suppressors like Rb; E-cadherin/NF2 contact-inhibition loss). The cell grows without asking and ignores the stop signs.",
            variant: "process",
          },
          {
            id: "pair2",
            label: "THE DEATH-IMMORTALITY PAIR — apoptosis evasion + limitless replication",
            sublabel:
              "Hallmarks 3-4: EVASION OF APOPTOSIS (TP53 loss, BCL2 overexpression in follicular B cell lymphoma) and LIMITLESS REPLICATIVE POTENTIAL (telomerase reactivation, telomere maintenance, no senescence). The cell refuses to die and never ages.",
            variant: "process",
          },
          {
            id: "pair3",
            label: "THE SUPPLY PAIR — angiogenesis + Warburg",
            sublabel:
              "Hallmarks 5-6: SUSTAINED ANGIOGENESIS (VEGF, neoangiogenesis, vasculogenesis, leaky/dilated vessels) and WARBURG EFFECT (aerobic glycolysis, pyruvate kinase M2, LDH-A, biosynthetic intermediates, ↑ lactate). The tumor builds its blood supply and rewires its metabolism for biosynthesis.",
            variant: "process",
          },
          {
            id: "trio",
            label: "THE SPREAD TRIO — immune evasion + invasion + metastasis",
            sublabel:
              "Hallmarks 7-9: IMMUNE EVASION (↓ MHC I, TGF-β + Tregs, checkpoint molecules), TISSUE INVASION (E-cadherin loss → metalloproteinases → ECM → locomotion → vascular dissemination), and METASTASIS (lymphatics or blood → adhesion → extravasation → homing; first-capillary-bed rule; organ tropism). The tumor hides, breaks out, and seeds distant organs.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "pair1", label: "growth" },
          { from: "pair1", to: "pair2", label: "death + immortality" },
          { from: "pair2", to: "pair3", label: "supply" },
          { from: "pair3", to: "trio", label: "spread" },
        ],
      },
    },
    {
      id: "invasion-metastasis-cascade",
      title: "The invasion-metastasis cascade: from E-cadherin loss to distant homing",
      context: "Hallmarks 8-9 (book 217)",
      flow: {
        nodes: [
          {
            id: "ecad",
            label: "E-CADHERIN LOSS — loosening of intercellular junctions",
            sublabel:
              "Input — loss of E-cadherin function dissolves the cell-cell contacts that hold epithelial cells together; the cell is freed from its neighbors (the same molecule as P12's invasive-carcinoma gate).",
            variant: "input",
          },
          {
            id: "mmp",
            label: "METALLOPROTEINASES — degrade basement membrane and ECM",
            sublabel:
              "The metalloproteinases (collagenases and hydrolases, the same enzymes as P12's invasive-carcinoma gate) dissolve the basement membrane and the extracellular matrix, opening the path outward.",
            variant: "process",
          },
          {
            id: "attach",
            label: "ECM ATTACHMENT — laminin, fibronectin",
            sublabel:
              "Cells attach to ECM proteins (eg, laminin, fibronectin) — the adhesion step that orients the cell for migration through the degraded matrix.",
            variant: "process",
          },
          {
            id: "locomote",
            label: "LOCOMOTION — migrate through degraded ECM",
            sublabel:
              "Cells migrate through the degraded ECM ('locomotion') — the movement step that brings them to a vessel.",
            variant: "process",
          },
          {
            id: "disseminate",
            label: "VASCULAR DISSEMINATION — lymphatics or blood",
            sublabel:
              "The cell enters a vessel (lymphatic or blood) and disseminates — the gateway to metastasis.",
            variant: "process",
          },
          {
            id: "home",
            label: "ADHESION → EXTRAVASATION → HOMING — the first-capillary-bed rule",
            sublabel:
              "Output — tumor cells or emboli adhere to endothelium, extravasate, and home; the site of metastasis can be predicted by the site of 1° tumor, as the target organ is often the first-encountered capillary bed. Some cancers show organ tropism (eg, lung cancers commonly metastasize to adrenals).",
            variant: "output",
          },
        ],
        edges: [
          { from: "ecad", to: "mmp", label: "junctions loose" },
          { from: "mmp", to: "attach", label: "matrix open" },
          { from: "attach", to: "locomote", label: "oriented" },
          { from: "locomote", to: "disseminate", label: "to the vessel" },
          { from: "disseminate", to: "home", label: "lymphatics or blood" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "cancer-hallmarks-map",
      title: "The hallmarks-of-cancer map (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source page (book 217): the 9-hallmark grid arranged as three pairs and a trio — the growth pair (self-sufficiency + insensitivity), the death-immortality pair (apoptosis evasion + limitless replication), the supply pair (angiogenesis + Warburg), and the spread trio (immune evasion + invasion + metastasis). Each panel carries the hallmark name, the mechanism, and the named gene/protein examples (PDGF, HER2, RAS, MYC, cyclins/CDKs, Rb, NF2/E-cadherin, TP53, BCL2, telomerase, VEGF, pyruvate kinase M2/LDH-A, MHC I, TGF-β/Tregs, checkpoint molecules, metalloproteinases, laminin/fibronectin). The invasion-metastasis cascade is rendered as a flow at the bottom (E-cadherin loss → metalloproteinases → ECM attachment → locomotion → vascular dissemination → adhesion/extravasation/homing).",
      notice:
        "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 239). The page is pure text — a single 9-row HALLMARK | MECHANISM table, no figures, no photographs. The visual is an ORIGINAL KYP adaptation rendering the 9-hallmark grid as a panel map (no source figure to redraw). The table is carried verbatim in this note's table block. No copyrighted photographs exist on the page; nothing reproduced. No margin mnemonics (VLM confirmed); the KYP memory layer stays original.",
    },
    {
      kind: "table",
      title: "Book 217 — the hallmarks-of-cancer table (carried verbatim)",
      intro: "The nine capabilities and their mechanisms, as printed.",
      columns: ["HALLMARK", "MECHANISM — book 217 (verbatim)"],
      rows: [
        [
          "GROWTH SIGNAL SELF-SUFFICIENCY",
          "Mutations in genes encoding: ▘ Proto-oncogenes → ↑ growth factors → autocrine loop (eg, ↑ PDGF in brain tumors). ▘ Growth factor receptors → constitutive signaling (eg, HER2 in breast cancer). ▘ Signaling molecules (eg, RAS). ▘ Transcription factors (eg, MYC). ▘ Cell cycle regulators (eg, cyclins, CDKs).",
        ],
        [
          "ANTI-GROWTH SIGNAL INSENSITIVITY",
          "▘ Mutations in tumor suppressor genes (eg, Rb). ▘ Loss of E-cadherin function → loss of contact inhibition (eg, NF2 mutations).",
        ],
        [
          "EVASION OF APOPTOSIS",
          "Mutations in genes that regulate apoptosis (eg, TP53, BCL2 → follicular B cell lymphoma).",
        ],
        [
          "LIMITLESS REPLICATIVE POTENTIAL",
          "Reactivation of telomerase → maintenance and lengthening of telomeres → prevention of chromosome shortening and cell aging.",
        ],
        [
          "SUSTAINED ANGIOGENESIS",
          "↑ pro-angiogenic factors (eg, VEGF) or ↓ inhibitory factors. Factors may be produced by tumor or stromal cells. Vessels can sprout from existing capillaries (neoangiogenesis) or endothelial cells are recruited from bone marrow (vasculogenesis). Vessels may be leaky and/or dilated.",
        ],
        [
          "WARBURG EFFECT",
          "Shift of glucose metabolism from mitochondrial oxidative phosphorylation to glycolysis, even under aerobic conditions. Driven by altered metabolic enzymes (eg, pyruvate kinase M2, LDH-A). Aerobic glycolysis supplies rapidly dividing cancer cells with biosynthetic intermediates for nucleotide, lipid, and amino acid synthesis, resulting in ↑ lactate production.",
        ],
        [
          "IMMUNE EVASION IN CANCER",
          "Normally, immune cells can recognize and attack tumor cells. For successful tumorigenesis, tumor cells must evade the immune system. Multiple escape mechanisms exist: ▘ ↓ MHC class I expression by tumor cells → cytotoxic T cells are unable to recognize tumor cells. ▘ Tumor cells secrete immunosuppressive factors (eg, TGF-β) and recruit regulatory T cells to downregulate immune response. ▘ Tumor cells upregulate immune checkpoint molecules, which inhibit immune response.",
        ],
        [
          "TISSUE INVASION",
          "Loss of E-cadherin function → loosening of intercellular junctions → metalloproteinases degrade basement membrane and ECM → cells attach to ECM proteins (eg, laminin, fibronectin) → cells migrate through degraded ECM (“locomotion”) → vascular dissemination.",
        ],
        [
          "METASTASIS",
          "Tumor cells or emboli spread via lymphatics or blood → adhesion to endothelium → extravasation and homing. Site of metastasis can be predicted by site of 1° tumor, as the target organ is often the first-encountered capillary bed. Some cancers show organ tropism (eg, lung cancers commonly metastasize to adrenals).",
        ],
      ],
      caption:
        "Nine capabilities in three pairs and a trio: the growth pair (self-sufficiency + insensitivity), the death-immortality pair (apoptosis evasion + limitless replication), the supply pair (angiogenesis + Warburg), and the spread trio (immune evasion + invasion + metastasis). Each row names the genes and proteins — the exam's framework for every molecular cancer question.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 58-year-old woman has a breast biopsy showing an invasive ductal carcinoma; immunohistochemistry shows strong membrane positivity for HER2 (ERBB2) without amplification of the gene's growth factor ligand.",
        discriminator:
          "Growth factor receptor mutation → constitutive signaling (HER2 in breast cancer) — hallmark 1, growth signal self-sufficiency",
        concept: "The growth-signal self-sufficiency axis",
        answer:
          "The first hallmark: growth signal self-sufficiency via mutations in genes encoding growth factor receptors → constitutive signaling. HER2 (ERBB2) is the named breast-cancer example — the receptor signals without its ligand because of overexpression or mutation, driving the cell into mitosis without an external growth factor. The other four entries on the same row are proto-oncogenes (PDGF autocrine loop in brain tumors), signaling molecules (RAS), transcription factors (MYC), and cell cycle regulators (cyclins, CDKs) — all converging on the same capability: the cell makes its own growth signal or shorts the circuit that depends on one.",
      },
      {
        stem:
          "A 65-year-old man has a slowly enlarging cervical lymph node; excisional biopsy shows a nodular proliferation of small B cells with t(14;18), and immunohistochemistry shows strong BCL2 positivity.",
        discriminator:
          "BCL2 overexpression → evasion of apoptosis — hallmark 3, the follicular B cell lymphoma's t(14;18) putting BCL2 under the IgH promoter",
        concept: "The apoptosis-evasion axis",
        answer:
          "The third hallmark: evasion of apoptosis via mutations in genes that regulate apoptosis. The named example is BCL2 → follicular B cell lymphoma, where the t(14;18) translocation puts the anti-apoptotic BCL2 gene under the immunoglobulin heavy-chain promoter, overexpressing BCL2 and keeping the malignant B cells alive well past their normal lifespan. TP53 loss is the other named entry on the same row — the loss of the pro-apoptotic gatekeeper that would otherwise trigger apoptosis in response to DNA damage.",
      },
      {
        stem:
          "A 70-year-old man with a 40-pack-year smoking history has a large left upper lobe lung mass; CT incidentally reveals bilateral adrenal masses that biopsy confirms as metastatic lung adenocarcinoma.",
        discriminator:
          "Organ tropism — lung cancers commonly metastasize to adrenals; the first-encountered capillary bed rule",
        concept: "The metastasis-and-organ-tropism axis",
        answer:
          "The ninth hallmark: metastasis. Tumor cells or emboli spread via lymphatics or blood → adhesion to endothelium → extravasation and homing. The site of metastasis can be predicted by the site of 1° tumor, as the target organ is often the first-encountered capillary bed. Some cancers show organ tropism — and the named example is lung cancers commonly metastasize to adrenals. The adrenal metastases in this stem fit the printed organ-tropism rule, and the cascade that brought them there (tissue invasion → vascular dissemination → adhesion → extravasation → homing) is the full invasion-metastasis cascade of hallmarks 8-9.",
      },
    ],
    traps: [
      {
        a: "Growth signal self-sufficiency",
        b: "Anti-growth signal insensitivity",
        whyConfused: "Both hallmarks increase cell proliferation",
        keyDifference:
          "SELF-SUFFICIENCY = the cell MAKES its own growth signal (proto-oncogenes, PDGF autocrine loop, HER2 constitutive signaling, RAS, MYC, cyclins/CDKs); INSENSITIVITY = the cell IGNORES the stop signal (tumor suppressor loss like Rb, E-cadherin/NF2 contact-inhibition loss). One short-circuits the gas pedal; the other cuts the brake.",
        clue:
          "An activating mutation in a proto-oncogene or receptor = self-sufficiency; a loss-of-function mutation in a tumor suppressor = insensitivity",
      },
      {
        a: "Evasion of apoptosis (TP53)",
        b: "Evasion of apoptosis (BCL2)",
        whyConfused: "Both are mutations in apoptosis-regulating genes",
        keyDifference:
          "TP53 LOSS removes the pro-apoptotic gatekeeper (the cell with DNA damage doesn't trigger apoptosis); BCL2 OVEREXPRESSION adds an anti-apoptotic shield (the mitochondrial membrane stays intact, cytochrome c is not released). TP53 is loss-of-function; BCL2 is gain-of-function (the t(14;18) of follicular B cell lymphoma).",
        clue:
          "A loss-of-function in a pro-apoptotic gene = TP53; a gain-of-function in an anti-apoptotic gene = BCL2 (follicular lymphoma)",
      },
      {
        a: "Sustained angiogenesis",
        b: "Warburg effect",
        whyConfused: "Both are supply-line hallmarks for the tumor",
        keyDifference:
          "ANGIOGENESIS = building BLOOD VESSELS (VEGF, neoangiogenesis, vasculogenesis, leaky/dilated vessels) to deliver oxygen and nutrients; WARBURG EFFECT = rewiring METABOLISM (aerobic glycolysis, pyruvate kinase M2, LDH-A, ↑ lactate) to generate biosynthetic intermediates for nucleotide/lipid/amino acid synthesis. One builds the supply road; the other changes the fuel.",
        clue:
          "VEGF and new vessels = angiogenesis; aerobic glycolysis and lactate = Warburg",
      },
      {
        a: "Tissue invasion",
        b: "Metastasis",
        whyConfused: "Both are spread hallmarks and they share the vascular-dissemination step",
        keyDifference:
          "TISSUE INVASION = the local breakout (E-cadherin loss → metalloproteinases degrade basement membrane and ECM → ECM attachment [laminin, fibronectin] → locomotion → vascular dissemination); METASTASIS = the distant colonization (lymphatics or blood → adhesion to endothelium → extravasation and homing, with the first-capillary-bed rule and organ tropism). Invasion is the escape; metastasis is the seeding.",
        clue:
          "Local breakout through the basement membrane = invasion; distant organ seeding via vessels = metastasis",
      },
    ],
    pivots: [
      {
        lookAlike: "A molecular lesion in a cancer — which hallmark does it serve?",
        differentiator:
          "Map the gene to the capability: proto-oncogenes/receptors/signaling/transcription/cell-cycle = self-sufficiency (1); tumor suppressors/E-cadherin-NF2 = insensitivity (2); TP53/BCL2 = apoptosis evasion (3); telomerase = limitless replication (4); VEGF = angiogenesis (5); pyruvate kinase M2/LDH-A = Warburg (6); MHC I/TGF-β/checkpoints = immune evasion (7); E-cadherin/metalloproteinases/ECM = invasion (8); lymphatics-blood/endothelial adhesion/organ tropism = metastasis (9)",
        correctPath:
          "Name the gene, then name the capability — the hallmark axis is the framework that connects every molecular lesion to its cancer biology",
      },
      {
        lookAlike: "A tumor spreading — which step of the invasion-metastasis cascade is described?",
        differentiator:
          "E-cadherin loss = junctions loosen; metalloproteinases = basement membrane and ECM degrade; laminin/fibronectin = cells attach; locomotion = cells migrate; vascular dissemination = cells enter the vessel; adhesion to endothelium = cells arrest; extravasation = cells exit the vessel; homing = cells colonize the target organ (first-capillary-bed rule, organ tropism)",
        correctPath:
          "Follow the cascade: E-cadherin → metalloproteinases → ECM → locomotion → vessel → adhesion → extravasation → homing — the named step places the stem in the cascade",
      },
    ],
    miniCase: {
      vignette:
        "A 62-year-old man with a 50-pack-year smoking history presents with 3 months of progressive dyspnea, weight loss, and hemoptysis. CT shows a 6-cm spiculated right upper lobe lung mass with mediastinal lymphadenopathy and bilateral adrenal masses. Biopsy of the lung mass confirms adenocarcinoma; the adrenal masses are biopsied and show the same histology. Molecular testing reveals a KRAS mutation. Serum LDH is markedly elevated. The tumor cells show loss of membrane E-cadherin staining on immunohistochemistry.",
      question:
        "Name the hallmarks this stem illustrates, identify the molecular lesion driving each, and explain why the adrenal masses fit the metastasis rule.",
      options: [
        {
          label:
            "Hallmarks 1, 6, 8, and 9 — growth signal self-sufficiency (KRAS mutation, a signaling molecule = hallmark 1), Warburg effect (↑ LDH as the lactate/anaerobic-metabolism marker = hallmark 6), tissue invasion (loss of E-cadherin → metalloproteinase cascade = hallmark 8), and metastasis (lung to adrenals = the organ-tropism example = hallmark 9). The adrenal masses fit the first-capillary-bed rule and the printed organ-tropism example (lung cancers commonly metastasize to adrenals).",
          text: "KRAS drives growth, LDH flags the Warburg shift, E-cadherin loss opens the gate, and lung-to-adrenal is the named tropism.",
          correct: true,
          why:
            "Correct on all four hallmarks. (1) GROWTH SIGNAL SELF-SUFFICIENCY (hallmark 1): the KRAS mutation is a mutation in a signaling molecule — the named RAS entry on the table's first row — driving constitutive signaling downstream of growth factor receptors without an external ligand. (2) WARBURG EFFECT (hallmark 6): the markedly elevated LDH is the metabolic marker of aerobic glycolysis — lactate dehydrogenase (LDH-A) is one of the named altered metabolic enzymes, and the elevated serum LDH reflects the ↑ lactate production the Warburg shift produces. (3) TISSUE INVASION (hallmark 8): the loss of membrane E-cadherin staining is the first step of the invasion cascade — loss of E-cadherin function → loosening of intercellular junctions → metalloproteinases degrade basement membrane and ECM → cells attach to ECM proteins (laminin, fibronectin) → locomotion → vascular dissemination. (4) METASTASIS (hallmark 9): the bilateral adrenal masses are the named organ-tropism example — lung cancers commonly metastasize to adrenals — and the first-capillary-bed rule (the target organ is often the first-encountered capillary bed) explains the prediction. The cascade: lung tumor cells entered the systemic venous circulation, traversed the right heart and pulmonary circulation, and seeded the adrenals via the first systemic capillary bed they encountered.",
        },
        {
          label:
            "Hallmarks 2 and 4 only — KRAS is a tumor suppressor loss (insensitivity), and the patient's long smoking history drove telomerase reactivation (limitless replication); the adrenal masses are independent primary tumors",
          text: "The KRAS is a brake loss, and the adrenals are new primaries.",
          why:
            "Wrong gene class and wrong metastasis interpretation: KRAS is a proto-oncogene / signaling molecule (a GTPase in the RAS family), not a tumor suppressor — its activating mutation drives GROWTH SIGNAL SELF-SUFFICIENCY (hallmark 1), not anti-growth signal insensitivity (hallmark 2, which is Rb loss and E-cadherin/NF2). The adrenal masses showing the SAME histology as the lung mass are metastases, not independent primaries — and the lung-to-adrenal pattern is the page's named organ-tropism example. Telomerase reactivation (hallmark 4) is plausible in any cancer but is not illustrated by any specific finding in this stem.",
        },
        {
          label:
            "Hallmarks 3 and 5 only — TP53 loss drove the cancer, and VEGF produced the adrenal masses as new blood vessels; KRAS is irrelevant",
          text: "The TP53 is the driver, and the adrenals are angiogenesis.",
          why:
            "Wrong hallmarks: TP53 loss (hallmark 3, apoptosis evasion) is plausible in lung cancer but is not the molecular lesion named in the stem (KRAS is). The bilateral adrenal masses are solid-tumor metastases with the same histology as the lung primary, not new blood vessels — sustained angiogenesis (hallmark 5, VEGF) would produce leaky dilated vessels feeding the primary tumor, not discrete adrenal masses. The elevated LDH (hallmark 6, Warburg) and the E-cadherin loss (hallmark 8, invasion) are both explicit in the stem and missed by this option.",
        },
        {
          label:
            "Hallmark 7 only — the cancer evaded the immune system, which is why it spread; KRAS and E-cadherin are bystanders, and the adrenal masses are immune granulomas",
          text: "Immune evasion is the only relevant hallmark; the rest is noise.",
          why:
            "Wrong reading of the stem: immune evasion (hallmark 7) is a legitimate hallmark but none of the stem's findings (KRAS mutation, ↑ LDH, E-cadherin loss, adrenal metastases) directly illustrate it. The adrenal masses are metastatic adenocarcinoma on biopsy (same histology as the lung), not immune granulomas. KRAS is a signaling molecule (hallmark 1), LDH is the Warburg marker (hallmark 6), E-cadherin loss is the invasion gate (hallmark 8), and lung-to-adrenal is the metastasis organ-tropism example (hallmark 9) — four hallmarks illustrated, not one.",
        },
        {
          label:
            "Hallmark 4 only — the cancer is lethal because telomerase was reactivated; everything else (KRAS, LDH, E-cadherin, adrenals) is a downstream consequence of immortality",
          text: "Telomerase is the single driver of lethal cancer.",
          why:
            "Wrong framing: telomerase reactivation (hallmark 4, limitless replicative potential) is necessary for a cancer to become lethal but is not illustrated by any specific finding in this stem, and the four explicit findings (KRAS, LDH, E-cadherin loss, adrenal metastases) each map to a different hallmark (1, 6, 8, 9). The hallmarks are not hierarchical — they are parallel capabilities, and the stem walks four of them.",
        },
      ],
      reasoning:
        "The stem walks four hallmarks explicitly. (1) KRAS = a mutation in a signaling molecule (the RAS entry on the table's first row) = GROWTH SIGNAL SELF-SUFFICIENCY (hallmark 1). (2) The markedly elevated LDH = the metabolic marker of aerobic glycolysis (LDH-A is a named altered metabolic enzyme, and ↑ lactate production is the Warburg endpoint) = WARBURG EFFECT (hallmark 6). (3) The loss of membrane E-cadherin staining = the first step of the invasion cascade (loss of E-cadherin function → loosening of intercellular junctions → metalloproteinases degrade basement membrane and ECM → ECM attachment → locomotion → vascular dissemination) = TISSUE INVASION (hallmark 8). (4) The bilateral adrenal masses with the same histology as the lung primary = the printed organ-tropism example (lung cancers commonly metastasize to adrenals) and the first-capillary-bed rule = METASTASIS (hallmark 9). The distractors fail at: hallmark 2 (KRAS is a proto-oncogene, not a tumor suppressor), hallmark 3 (TP53 not named in the stem), hallmark 5 (adrenals are metastases, not new vessels), hallmark 7 (no immune-evasion finding in the stem), and hallmark 4 (telomerase not illustrated).",
    },
  },
  mnemonics: [
    {
      code: "GROW, IGNORE, CHEAT, LIVE",
      meaning:
        "The hallmark pairs and trio in four verbs: GROW (hallmark 1 self-sufficiency + hallmark 2 insensitivity — the growth pair); IGNORE (hallmark 3 apoptosis evasion — ignoring the death signal); CHEAT (hallmark 4 limitless replication via telomerase — cheating senescence; hallmark 5 angiogenesis — cheating the blood supply; hallmark 6 Warburg — cheating the metabolism); LIVE (hallmark 7 immune evasion — living hidden; hallmark 8 invasion — living beyond borders; hallmark 9 metastasis — living in new organs).",
      memorizes: "The nine hallmarks grouped by purpose",
      whenToUse: "Any question asking which hallmark a mutation serves",
      clinical:
        "The cancer cell grows without asking, ignores the stop and death signals, cheats the supply and metabolism limits, and lives hidden and beyond borders — nine capabilities, four verbs.",
    },
    {
      code: "VEGF, TELOMERASE, TP53, BCL2",
      meaning:
        "The four named proteins across the supply, immortality, and death hallmarks: VEGF (hallmark 5, sustained angiogenesis — the pro-angiogenic factor); TELOMERASE (hallmark 4, limitless replicative potential — reactivated to maintain telomeres); TP53 (hallmark 3, apoptosis evasion — the pro-apoptotic gatekeeper lost); BCL2 (hallmark 3, apoptosis evasion — the anti-apoptotic shield overexpressed in follicular B cell lymphoma).",
      memorizes: "The named proteins of the supply, immortality, and death hallmarks",
      whenToUse: "Any molecular-lesion question asking which hallmark a named protein serves",
      clinical:
        "VEGF builds the vessel, telomerase keeps the telomere, TP53 would have killed the cell, BCL2 keeps the mitochondrial membrane sealed.",
    },
    {
      code: "E-CADHERIN IS THE GATE",
      meaning:
        "E-cadherin loss is the gate for TWO hallmarks: hallmark 2 (anti-growth signal insensitivity — loss of E-cadherin function → loss of contact inhibition, eg, NF2 mutations) and hallmark 8 (tissue invasion — loss of E-cadherin function → loosening of intercellular junctions → metalloproteinases degrade basement membrane and ECM → locomotion → vascular dissemination). The same molecule is the contact-inhibition gate and the invasion gate.",
      memorizes: "E-cadherin's dual role in the hallmarks",
      whenToUse: "Any E-cadherin or NF2 question — name both hallmarks it serves",
      clinical:
        "When E-cadherin is lost, the cell stops listening to its neighbors AND gains the freedom to invade — one molecule, two hallmarks.",
    },
    {
      code: "LYMPHATICS OR BLOOD, THEN HOMING",
      meaning:
        "The metastasis rule verbatim: tumor cells or emboli spread via lymphatics or blood → adhesion to endothelium → extravasation and homing. The site of metastasis can be predicted by the site of 1° tumor, as the target organ is often the first-encountered capillary bed. Some cancers show organ tropism (eg, lung cancers commonly metastasize to adrenals).",
      memorizes: "The metastasis cascade and the first-capillary-bed rule",
      whenToUse: "Any metastasis-pattern question",
      clinical:
        "Lymphatics or blood — the route; adhesion to endothelium — the arrest; extravasation and homing — the colonization; the first capillary bed is the first stop, with organ tropism as the named exceptions.",
    },
  ],
  rapidReview: {
    s30: [
      "Cancer is caused by (mostly acquired) DNA mutations that affect fundamental cellular processes (eg, growth, DNA repair, survival)",
      "Hallmark 1 — Growth signal self-sufficiency: mutations in proto-oncogenes (↑PDGF, brain tumors), growth factor receptors (HER2, breast cancer), signaling molecules (RAS), transcription factors (MYC), cell cycle regulators (cyclins, CDKs)",
      "Hallmark 2 — Anti-growth signal insensitivity: tumor suppressor mutations (Rb), loss of E-cadherin → loss of contact inhibition (NF2)",
      "Hallmark 3 — Evasion of apoptosis: TP53 loss, BCL2 overexpression (follicular B cell lymphoma)",
      "Hallmark 4 — Limitless replicative potential: telomerase reactivation → telomere maintenance → no chromosome shortening or cell aging",
      "Hallmark 5 — Sustained angiogenesis: VEGF, neoangiogenesis (sprout from existing capillaries), vasculogenesis (recruit from bone marrow), leaky/dilated vessels",
      "Hallmark 6 — Warburg effect: aerobic glycolysis (glycolysis even with O2 present), pyruvate kinase M2 and LDH-A, biosynthetic intermediates for nucleotide/lipid/amino acid synthesis, ↑ lactate",
      "Hallmark 7 — Immune evasion: ↓ MHC class I (cytotoxic T cells can't recognize), TGF-β + regulatory T cells, immune checkpoint molecules",
      "Hallmark 8 — Tissue invasion: E-cadherin loss → metalloproteinases degrade basement membrane and ECM → attach to laminin/fibronectin → locomotion → vascular dissemination",
      "Hallmark 9 — Metastasis: lymphatics or blood → adhesion to endothelium → extravasation and homing; first-encountered capillary bed predicts the site; organ tropism (lung to adrenals)",
    ],
    m3: [
      "GROW, IGNORE, CHEAT, LIVE — the hallmark pairs and trio in four verbs (growth pair; apoptosis evasion; angiogenesis + Warburg + telomerase; immune evasion + invasion + metastasis)",
      "VEGF, TELOMERASE, TP53, BCL2 — the named proteins of the supply, immortality, and death hallmarks",
      "E-CADHERIN IS THE GATE — loss of E-cadherin serves BOTH hallmark 2 (contact inhibition, NF2) and hallmark 8 (tissue invasion)",
      "LYMPHATICS OR BLOOD, THEN HOMING — the metastasis cascade with the first-capillary-bed rule and organ tropism (lung to adrenals)",
      "HER2 in breast cancer and PDGF in brain tumors are the named growth-signal-self-sufficiency receptor and proto-oncogene examples",
    ],
    m10: [
      "The hallmarks group as three pairs and a trio: growth pair (1+2), death-immortality pair (3+4), supply pair (5+6), spread trio (7+8+9)",
      "BCL2 → follicular B cell lymphoma: the t(14;18) puts BCL2 under the IgH promoter, overexpressing the anti-apoptotic shield",
      "The Warburg effect trades ATP efficiency for biosynthetic precursors — lactate is the metabolic tell (↑ LDH on labs)",
      "The three immune-evasion mechanisms: ↓ MHC I (hide), TGF-β + Tregs (suppress), checkpoint molecules (brake)",
      "The invasion-metastasis cascade: E-cadherin loss → metalloproteinases → ECM (laminin, fibronectin) → locomotion → vascular dissemination → adhesion → extravasation → homing",
    ],
  },
  recall: [
    {
      q: "The hallmarks-of-cancer definition and the first two hallmarks verbatim.",
      a: "Cancer is caused by (mostly acquired) DNA mutations that affect fundamental cellular processes (eg, growth, DNA repair, survival). HALLMARK 1 — GROWTH SIGNAL SELF-SUFFICIENCY: Mutations in genes encoding: ▘ Proto-oncogenes → ↑ growth factors → autocrine loop (eg, ↑ PDGF in brain tumors). ▘ Growth factor receptors → constitutive signaling (eg, HER2 in breast cancer). ▘ Signaling molecules (eg, RAS). ▘ Transcription factors (eg, MYC). ▘ Cell cycle regulators (eg, cyclins, CDKs). HALLMARK 2 — ANTI-GROWTH SIGNAL INSENSITIVITY: ▘ Mutations in tumor suppressor genes (eg, Rb). ▘ Loss of E-cadherin function → loss of contact inhibition (eg, NF2 mutations).",
    },
    {
      q: "Hallmarks 3-4 verbatim (apoptosis evasion + limitless replicative potential).",
      a: "HALLMARK 3 — EVASION OF APOPTOSIS: Mutations in genes that regulate apoptosis (eg, TP53, BCL2 → follicular B cell lymphoma). HALLMARK 4 — LIMITLESS REPLICATIVE POTENTIAL: Reactivation of telomerase → maintenance and lengthening of telomeres → prevention of chromosome shortening and cell aging.",
    },
    {
      q: "Hallmarks 5-6 verbatim (sustained angiogenesis + Warburg effect).",
      a: "HALLMARK 5 — SUSTAINED ANGIOGENESIS: ↑ pro-angiogenic factors (eg, VEGF) or ↓ inhibitory factors. Factors may be produced by tumor or stromal cells. Vessels can sprout from existing capillaries (neoangiogenesis) or endothelial cells are recruited from bone marrow (vasculogenesis). Vessels may be leaky and/or dilated. HALLMARK 6 — WARBURG EFFECT: Shift of glucose metabolism from mitochondrial oxidative phosphorylation to glycolysis, even under aerobic conditions. Driven by altered metabolic enzymes (eg, pyruvate kinase M2, LDH-A). Aerobic glycolysis supplies rapidly dividing cancer cells with biosynthetic intermediates for nucleotide, lipid, and amino acid synthesis, resulting in ↑ lactate production.",
    },
    {
      q: "Hallmark 7 verbatim (immune evasion in cancer).",
      a: "Normally, immune cells can recognize and attack tumor cells. For successful tumorigenesis, tumor cells must evade the immune system. Multiple escape mechanisms exist: ▘ ↓ MHC class I expression by tumor cells → cytotoxic T cells are unable to recognize tumor cells. ▘ Tumor cells secrete immunosuppressive factors (eg, TGF-β) and recruit regulatory T cells to downregulate immune response. ▘ Tumor cells upregulate immune checkpoint molecules, which inhibit immune response.",
    },
    {
      q: "Hallmarks 8-9 verbatim (tissue invasion + metastasis).",
      a: "HALLMARK 8 — TISSUE INVASION: Loss of E-cadherin function → loosening of intercellular junctions → metalloproteinases degrade basement membrane and ECM → cells attach to ECM proteins (eg, laminin, fibronectin) → cells migrate through degraded ECM ('locomotion') → vascular dissemination. HALLMARK 9 — METASTASIS: Tumor cells or emboli spread via lymphatics or blood → adhesion to endothelium → extravasation and homing. Site of metastasis can be predicted by site of 1° tumor, as the target organ is often the first-encountered capillary bed. Some cancers show organ tropism (eg, lung cancers commonly metastasize to adrenals).",
    },
  ],
  related: [
    {
      title: "Neoplasia Nomenclature & Progression",
      topicId: "neoplasia-nomenclature",
      note: "The hallmarks are the molecular machinery behind P12's progression: the basement-membrane breach (E-cadherin loss + metalloproteinases = hallmark 8) is the gate from carcinoma in situ to invasive carcinoma; the lymphatics-or-blood metastasis (hallmark 9) is P12's fifth station. The nomenclature and progression page names the stations; this page names the capabilities that drive them.",
    },
    {
      title: "Apoptosis: Intrinsic, Extrinsic & Misfolded Proteins",
      topicId: "apoptosis-pathways",
      note: "Hallmark 3 (evasion of apoptosis) is the apoptosis page's disease mirror: TP53 is the intrinsic-pathway gatekeeper that the cancer loses; BCL2 is the anti-apoptotic mitochondrial shield that the follicular lymphoma overexpresses. The t(14;18) is the apoptosis page's most exam-tested translocation.",
    },
    {
      title: "Cellular Adaptations: Hypertrophy Through Dysplasia",
      topicId: "cellular-adaptations",
      note: "Hallmark 2's contact-inhibition loss (E-cadherin/NF2) is the adaptation page's dysplasia endpoint gone malignant — the cell that stops respecting its neighbors' boundaries. The adaptation-to-neoplasia bridge is the same reversibility line: adaptations are reversible; dysplasia is often reversible; the hallmarks are the irreversible capabilities that follow.",
    },
    {
      title: "Wound Healing: Mediators & Phases",
      topicId: "wound-healing",
      note: "Hallmark 5 (VEGF, sustained angiogenesis) is the wound-healing page's proliferative-phase VEGF turned permanent and pathological — the same angiogenic molecule that builds granulation tissue now builds the tumor's leaky, dilated blood supply. Hallmark 8's metalloproteinases are the wound-healing page's remodeling enzymes (the type III → type I collagen swap) turned against the basement membrane.",
    },
  ],
  crossLinks: [
    {
      subject: "Genetics (oncogenes and tumor suppressors)",
      connection:
        "Hallmarks 1 and 2 are the oncogene / tumor-suppressor page's phenotype: proto-oncogene activation (HER2, RAS, MYC) = growth signal self-sufficiency; tumor-suppressor loss (Rb) = anti-growth signal insensitivity. The molecular lesions catalogued on book 220 are the mutations that produce these hallmark capabilities.",
    },
    {
      subject: "Biochemistry (metabolism and the Warburg effect)",
      connection:
        "Hallmark 6 (Warburg effect) is the biochemistry page's metabolic rewiring: pyruvate kinase M2 and LDH-A are the altered enzymes that shift glucose from mitochondrial oxidative phosphorylation to aerobic glycolysis, trading ATP for biosynthetic intermediates. The lactate marker on serum LDH is the clinical readout.",
    },
    {
      subject: "Immunology (tumor immunology and checkpoint therapy)",
      connection:
        "Hallmark 7 (immune evasion) is the immunology page's tumor-immunology application: ↓ MHC I hides the tumor from CD8+ cytotoxic T cells; TGF-β and regulatory T cells suppress the response; immune checkpoint molecules (CTLA-4, PD-1/PD-L1) are the targets of the checkpoint-inhibitor monoclonal antibodies (ipilimumab, nivolumab, pembrolizumab) covered on the cancer-immunotherapy page.",
    },
    {
      subject: "Pathology (metastasis patterns and routes)",
      connection:
        "Hallmark 9 (metastasis) is the gateway to the metastasis-patterns page (book 219): the first-capillary-bed rule and the organ-tropism examples (lung to adrenals, breast to bone, colon to liver) build directly on this page's lymphatics-or-blood → adhesion → extravasation → homing cascade.",
    },
  ],
};
