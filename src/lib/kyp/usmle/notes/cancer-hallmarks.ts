import type { KypUsMLENote } from "../types";

// Pathology — NEOPLASIA banner (P-batch 13). Source: pdf 239 / book 217
// (Hallmarks of cancer — the intro line "cancer is caused by (mostly
// acquired) DNA mutations that affect fundamental cellular processes
// (eg, growth, DNA repair, survival)" plus the complete 9-row
// HALLMARK → MECHANISM table: growth signal self-sufficiency
// [proto-oncogenes → ↑ growth factors → autocrine loop, ↑ PDGF brain
// tumors; growth factor receptors → constitutive signaling, HER2
// breast; signaling molecules, RAS; transcription factors, MYC; cell
// cycle regulators, cyclins/CDKs]; anti-growth signal insensitivity
// [tumor suppressors, Rb; loss of E-cadherin → loss of contact
// inhibition, NF2]; evasion of apoptosis [TP53, BCL2 → follicular B
// cell lymphoma]; limitless replicative potential [telomerase
// reactivation → telomere maintenance/lengthening → prevention of
// chromosome shortening and cell aging]; sustained angiogenesis
// [↑ VEGF or ↓ inhibitory factors, tumor or stromal production,
// sprouting neoangiogenesis vs bone-marrow-recruited vasculogenesis,
// leaky/dilated vessels]; the Warburg effect [shift from
// mitochondrial oxidative phosphorylation to glycolysis even under
// aerobic conditions, driven by pyruvate kinase M2 and LDH-A,
// supplying biosynthetic intermediates for nucleotide/lipid/amino
// acid synthesis, ↑ lactate]; immune evasion in cancer [↓ MHC class I
// → cytotoxic T cells unable to recognize; immunosuppressive factors
// eg TGF-β + regulatory T cell recruitment; immune checkpoint
// upregulation]; tissue invasion [E-cadherin loss → loosened
// junctions → metalloproteinases degrade basement membrane/ECM →
// attach to laminin/fibronectin → "locomotion" → vascular
// dissemination]; metastasis [emboli via lymphatics/blood →
// endothelial adhesion → extravasation and homing; first-encountered
// capillary bed predicts site; organ tropism eg lung → adrenals]).
// Census (pdfimages + VLM): ZERO raster images on the page — a PURE
// TEXT 9-row table, no figures, no margin notes or mnemonics (VLM
// confirmed); the KYP memory layer is original.

export const cancerHallmarks: KypUsMLENote = {
  id: "cancer-hallmarks",
  title: "Hallmarks of Cancer",
  subtitle:
    "The nine acquisitions that turn a mutated cell into a malignant one (book 217) — cancer is caused by (mostly acquired) DNA mutations that affect fundamental cellular processes (eg, growth, DNA repair, survival), and this table itemizes what those mutations buy the cell: GROWTH SIGNAL SELF-SUFFICIENCY — mutations in genes encoding proto-oncogenes (→ ↑ growth factors → autocrine loop, eg ↑ PDGF in brain tumors), growth factor receptors (→ constitutive signaling, eg HER2 in breast cancer), signaling molecules (eg RAS), transcription factors (eg MYC), and cell cycle regulators (eg cyclins, CDKs); ANTI-GROWTH SIGNAL INSENSITIVITY — mutations in tumor suppressor genes (eg Rb) and loss of E-cadherin function → loss of contact inhibition (eg NF2 mutations); EVASION OF APOPTOSIS — mutations in genes that regulate apoptosis (eg TP53, BCL2 → follicular B cell lymphoma); LIMITLESS REPLICATIVE POTENTIAL — reactivation of telomerase → maintenance and lengthening of telomeres → prevention of chromosome shortening and cell aging; SUSTAINED ANGIOGENESIS — ↑ pro-angiogenic factors (eg VEGF) or ↓ inhibitory factors from tumor or stromal cells, by sprouting neoangiogenesis or bone-marrow-recruited vasculogenesis, yielding leaky and/or dilated vessels; THE WARBURG EFFECT — a shift of glucose metabolism from mitochondrial oxidative phosphorylation to glycolysis even under aerobic conditions, driven by altered metabolic enzymes (eg pyruvate kinase M2, LDH-A), supplying rapidly dividing cancer cells with biosynthetic intermediates for nucleotide, lipid, and amino acid synthesis with ↑ lactate production; IMMUNE EVASION — ↓ MHC class I expression (cytotoxic T cells are unable to recognize tumor cells), immunosuppressive factors (eg TGF-β) with regulatory T cell recruitment, and upregulated immune checkpoint molecules; TISSUE INVASION — loss of E-cadherin → loosening of intercellular junctions → metalloproteinases degrade basement membrane and ECM → attachment to ECM proteins (eg laminin, fibronectin) → locomotion through degraded ECM → vascular dissemination; and METASTASIS — tumor cells or emboli spread via lymphatics or blood → adhesion to endothelium → extravasation and homing, with the site predicted by the first-encountered capillary bed and organ tropism (eg lung cancers commonly metastasize to adrenals).",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Neoplasia",
  pilotCategory:
    "The complete nine-row hallmark→mechanism table — both growth-control axes (proto-oncogene self-sufficiency with its five gene classes, and tumor-suppressor insensitivity with Rb and the NF2/E-cadherin contact-inhibition loss), the death axis (TP53/BCL2), telomerase immortalization, the VEGF angiogenesis switch with its neoangiogenesis-vs-vasculogenesis split, the Warburg metabolic rewiring with its PKM2/LDH-A drivers, the three-pronged immune escape, and the invasion-metastasis cascade with the first-encountered-capillary-bed rule and the lung→adrenal organ tropism.",
  difficulty: 3,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 217–217 (Pathology — Neoplasia: Hallmarks of cancer [the intro definition; the complete HALLMARK/MECHANISM table across all nine rows — growth signal self-sufficiency, anti-growth signal insensitivity, evasion of apoptosis, limitless replicative potential, sustained angiogenesis, the Warburg effect, immune evasion in cancer, tissue invasion, metastasis])",
  tags: [
    "hallmarks of cancer",
    "neoplasia",
    "oncology",
    "cancer biology",
    "growth signal self-sufficiency",
    "proto-oncogenes",
    "PDGF",
    "brain tumors",
    "autocrine loop",
    "growth factor receptors",
    "HER2",
    "breast cancer",
    "constitutive signaling",
    "RAS",
    "signaling molecules",
    "MYC",
    "transcription factors",
    "cyclins",
    "CDKs",
    "cell cycle regulators",
    "anti-growth signal insensitivity",
    "tumor suppressor genes",
    "Rb",
    "E-cadherin",
    "contact inhibition",
    "NF2",
    "evasion of apoptosis",
    "TP53",
    "p53",
    "BCL2",
    "follicular B cell lymphoma",
    "limitless replicative potential",
    "telomerase",
    "telomeres",
    "chromosome shortening",
    "cell aging",
    "sustained angiogenesis",
    "VEGF",
    "pro-angiogenic factors",
    "neoangiogenesis",
    "vasculogenesis",
    "leaky vessels",
    "Warburg effect",
    "aerobic glycolysis",
    "oxidative phosphorylation",
    "pyruvate kinase M2",
    "LDH-A",
    "lactate",
    "biosynthetic intermediates",
    "immune evasion",
    "MHC class I",
    "cytotoxic T cells",
    "TGF-beta",
    "regulatory T cells",
    "immune checkpoint molecules",
    "tissue invasion",
    "metalloproteinases",
    "basement membrane",
    "ECM",
    "laminin",
    "fibronectin",
    "locomotion",
    "vascular dissemination",
    "metastasis",
    "emboli",
    "extravasation",
    "homing",
    "first-encountered capillary bed",
    "organ tropism",
    "lung cancer",
    "adrenal metastases",
  ],
  core: {
    what:
      "Cancer is caused by (mostly acquired) DNA mutations that affect fundamental cellular processes (eg, growth, DNA repair, survival). The hallmark table: GROWTH SIGNAL SELF-SUFFICIENCY — mutations in genes encoding proto-oncogenes → ↑ growth factors → autocrine loop (eg, ↑ PDGF in brain tumors); growth factor receptors → constitutive signaling (eg, HER2 in breast cancer); signaling molecules (eg, RAS); transcription factors (eg, MYC); cell cycle regulators (eg, cyclins, CDKs). ANTI-GROWTH SIGNAL INSENSITIVITY — mutations in tumor suppressor genes (eg, Rb); loss of E-cadherin function → loss of contact inhibition (eg, NF2 mutations). EVASION OF APOPTOSIS — mutations in genes that regulate apoptosis (eg, TP53, BCL2 → follicular B cell lymphoma). LIMITLESS REPLICATIVE POTENTIAL — reactivation of telomerase → maintenance and lengthening of telomeres → prevention of chromosome shortening and cell aging. SUSTAINED ANGIOGENESIS — ↑ pro-angiogenic factors (eg, VEGF) or ↓ inhibitory factors; factors may be produced by tumor or stromal cells; vessels can sprout from existing capillaries (neoangiogenesis) or endothelial cells are recruited from bone marrow (vasculogenesis); vessels may be leaky and/or dilated. WARBURG EFFECT — shift of glucose metabolism from mitochondrial oxidative phosphorylation to glycolysis, even under aerobic conditions; driven by altered metabolic enzymes (eg, pyruvate kinase M2, LDH-A); aerobic glycolysis supplies rapidly dividing cancer cells with biosynthetic intermediates for nucleotide, lipid, and amino acid synthesis, resulting in ↑ lactate production. IMMUNE EVASION IN CANCER — normally immune cells can recognize and attack tumor cells, so tumor cells must evade the immune system: ↓ MHC class I expression by tumor cells → cytotoxic T cells are unable to recognize tumor cells; tumor cells secrete immunosuppressive factors (eg, TGF-β) and recruit regulatory T cells to downregulate immune response; tumor cells upregulate immune checkpoint molecules, which inhibit immune response. TISSUE INVASION — loss of E-cadherin function → loosening of intercellular junctions → metalloproteinases degrade basement membrane and ECM → cells attach to ECM proteins (eg, laminin, fibronectin) → cells migrate through degraded ECM (“locomotion”) → vascular dissemination. METASTASIS — tumor cells or emboli spread via lymphatics or blood → adhesion to endothelium → extravasation and homing; site of metastasis can be predicted by site of 1° tumor, as the target organ is often the first-encountered capillary bed; some cancers show organ tropism (eg, lung cancers commonly metastasize to adrenals).",
    why:
      "This single table is the whole mechanism map of malignancy — every later neoplasia page (nomenclature, oncogenes, metastasis patterns, paraneoplastic syndromes) hangs off one of its nine rows. The first two rows are the two axes of growth control: a gain-of-function axis (proto-oncogenes and their receptors, signalers, transcription factors, and cell-cycle regulators — the stuck gas pedal) and a loss-of-function axis (tumor suppressors like Rb, and the E-cadherin contact-inhibition loss of NF2 — the cut brake line). The third and fourth rows are the survival pair: mutations that delete the death program (TP53, BCL2 — the follicular lymphoma signature) and telomerase reactivation that cancels the replication clock by maintaining and lengthening telomeres. The fifth and sixth rows are the supply lines: VEGF-driven angiogenesis (sprouting neoangiogenesis or bone-marrow vasculogenesis, leaky and dilated) feeds the mass, while the Warburg effect rewires its metabolism — glycolysis even when oxygen is available, because PKM2 and LDH-A divert glucose carbon into the nucleotide, lipid, and amino acid bricks a dividing cell needs, paying in lactate. The seventh row is the immune escape trilogy — blind the cytotoxic T cells (↓ MHC class I), sedate the response (TGF-β + regulatory T cells), and slam the checkpoints — and it is the row the immunotherapy page (book 218) exists to reverse. The last two rows are the spread cascade: E-cadherin loss unglues the cell, metalloproteinases chew the basement membrane, laminin and fibronectin give it grip, locomotion carries it through, vascular dissemination embarks it — and the first-encountered capillary bed usually decides where it lands (lung cancers to adrenals as the tropism example).",
    keyIdea:
      "Read every cancer-mechanism question through the six bands of the map. BAND 1 — GROWTH AXIS: gain-of-function in a growth gene (PDGF, HER2, RAS, MYC, cyclins/CDKs) = growth signal self-sufficiency; loss of a tumor suppressor (Rb) or of E-cadherin contact inhibition (NF2) = anti-growth signal insensitivity. BAND 2 — DEATH AXIS: TP53 or BCL2 mutation = evasion of apoptosis (BCL2 → follicular B cell lymphoma). BAND 3 — IMMORTALITY: telomerase reactivation = limitless replicative potential (telomere maintenance → no chromosome shortening, no cell aging). BAND 4 — SUPPLY LINES: VEGF up (or inhibitors down) = sustained angiogenesis (sprout vs bone-marrow recruit; leaky, dilated); glycolysis despite oxygen with PKM2/LDH-A = the Warburg effect (biosynthetic intermediates, ↑ lactate). BAND 5 — IMMUNE ESCAPE: ↓ MHC I (CTLs blind) + TGF-β/Tregs (response sedated) + checkpoint upregulation (brakes on). BAND 6 — SPREAD: unglue (E-cadherin) → chew (metalloproteinases) → grab (laminin/fibronectin) → crawl (locomotion) → embark (vascular dissemination) → land (adhesion → extravasation → homing; first-encountered capillary bed predicts the site; lung → adrenals = organ tropism).",
  },
  mechanisms: [
    {
      id: "hallmark-axes-map",
      title: "The two axes of malignant growth: the stuck gas pedal and the cut brake line",
      context: "Rows 1–2 of the hallmark table (book 217)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "(Mostly acquired) DNA mutations affecting growth, DNA repair, survival",
            sublabel:
              "Input — the intro line: cancer is caused by (mostly acquired) DNA mutations that affect fundamental cellular processes (eg, growth, DNA repair, survival).",
            variant: "input",
          },
          {
            id: "gas",
            label: "THE GAS PEDAL — growth signal self-sufficiency (gain of function)",
            sublabel:
              "Mutations in genes encoding proto-oncogenes → ↑ growth factors → autocrine loop (eg, ↑ PDGF in brain tumors); growth factor receptors → constitutive signaling (eg, HER2 in breast cancer); signaling molecules (eg, RAS); transcription factors (eg, MYC); cell cycle regulators (eg, cyclins, CDKs).",
            variant: "process",
          },
          {
            id: "brake",
            label: "THE BRAKE LINE — anti-growth signal insensitivity (loss of function)",
            sublabel:
              "Mutations in tumor suppressor genes (eg, Rb); loss of E-cadherin function → loss of contact inhibition (eg, NF2 mutations) — the cell ignores every stop signal.",
            variant: "process",
          },
          {
            id: "output",
            label: "A cell that commands its own division and hears no objection",
            sublabel:
              "Output — both axes converge on the same gate: self-made growth commands (the five gene classes) with the restraints removed (Rb, contact inhibition). Pair with the death-axis escape (TP53, BCL2 mutations → evasion of apoptosis, BCL2 → follicular B cell lymphoma) and no mutation-bearing clone is ever deleted or shut down.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "gas", label: "proto-oncogene activation" },
          { from: "trigger", to: "brake", label: "tumor-suppressor loss" },
          { from: "gas", to: "output", label: "signals without external input" },
          { from: "brake", to: "output", label: "stops without a listener" },
        ],
      },
    },
    {
      id: "warburg-switch-map",
      title: "The Warburg switch: glycolysis even when oxygen is available",
      context: "The Warburg effect row (book 217)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A rapidly dividing cancer cell with biosynthetic demands",
            sublabel:
              "Input — nucleotides, lipids, and amino acids are needed as building blocks, not just ATP.",
            variant: "input",
          },
          {
            id: "switch",
            label: "THE SWITCH — glucose metabolism shifts to glycolysis",
            sublabel:
              "Shift of glucose metabolism from mitochondrial oxidative phosphorylation to glycolysis, even under aerobic conditions — the defining 'even under aerobic' clause.",
            variant: "process",
          },
          {
            id: "drivers",
            label: "THE DRIVERS — altered metabolic enzymes",
            sublabel:
              "Driven by altered metabolic enzymes (eg, pyruvate kinase M2, LDH-A) — PKM2 throttles glycolytic flux toward precursors; LDH-A regenerates NAD+ and makes lactate.",
            variant: "process",
          },
          {
            id: "payoff",
            label: "THE PAYOFF — biosynthetic intermediates",
            sublabel:
              "Aerobic glycolysis supplies rapidly dividing cancer cells with biosynthetic intermediates for nucleotide, lipid, and amino acid synthesis.",
            variant: "target",
          },
          {
            id: "output",
            label: "THE SIGNATURE — ↑ lactate production",
            sublabel:
              "Output — resulting in ↑ lactate production; the glucose-hungry, lactate-producing metabolism of the tumor (with telomerase positivity, the second immortalization-metabolism pair the exam loves).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "switch", label: "biosynthetic pressure" },
          { from: "switch", to: "drivers", label: "enzyme reprogramming" },
          { from: "drivers", to: "payoff", label: "carbon diverted to bricks" },
          { from: "payoff", to: "output", label: "↑ lactate" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "hallmarks-of-cancer-map",
      title: "The hallmarks-of-cancer map (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source page (book 217): the nine hallmark stations organized into six labeled bands — GROWTH AXIS (growth signal self-sufficiency with the five mutated gene classes — proto-oncogenes/PDGF, HER2, RAS, MYC, cyclins/CDKs — against anti-growth signal insensitivity with Rb and the NF2/E-cadherin contact-inhibition loss), DEATH AXIS (evasion of apoptosis — TP53, BCL2 → follicular B cell lymphoma), IMMORTALITY (telomerase reactivation → telomere maintenance → no chromosome shortening, no cell aging), SUPPLY LINES (sustained angiogenesis — VEGF up or inhibitors down, sprouting neoangiogenesis vs bone-marrow vasculogenesis, leaky/dilated vessels; and the Warburg effect — glycolysis even under aerobic conditions, PKM2 + LDH-A, biosynthetic intermediates, ↑ lactate), IMMUNE ESCAPE (↓ MHC class I blinding cytotoxic T cells, TGF-β + regulatory T cells, checkpoint upregulation), and SPREAD (the invasion cascade — E-cadherin loss → metalloproteinases → laminin/fibronectin → locomotion → vascular dissemination — into metastasis with the first-encountered-capillary-bed rule and the lung → adrenal tropism).",
      notice:
        "Census (pdfimages + VLM): ZERO raster images on this page — a pure-text 9-row HALLMARK/MECHANISM table (VLM confirmed; no photographs, figures, margin notes, or mnemonics print anywhere on the page). The station map, its glyphs, and its band structure are an ORIGINAL KYP adaptation of the printed table's content; the table itself is also carried verbatim in the note's table block. The KYP memory layer (the four mnemonics) is original — nothing on the page is a mnemonic.",
    },
    {
      kind: "table",
      title: "Book 217 — the complete hallmark→mechanism table (carried verbatim, all nine rows)",
      intro: "The intro definition and every row, as printed.",
      columns: ["HALLMARK", "MECHANISM — book 217 (verbatim)"],
      rows: [
        [
          "THE INTRO LINE",
          "Cancer is caused by (mostly acquired) DNA mutations that affect fundamental cellular processes (eg, growth, DNA repair, survival).",
        ],
        [
          "GROWTH SIGNAL SELF-SUFFICIENCY",
          "Mutations in genes encoding: Proto-oncogenes → ↑ growth factors → autocrine loop (eg, ↑ PDGF in brain tumors) · Growth factor receptors → constitutive signaling (eg, HER2 in breast cancer) · Signaling molecules (eg, RAS) · Transcription factors (eg, MYC) · Cell cycle regulators (eg, cyclins, CDKs).",
        ],
        [
          "ANTI-GROWTH SIGNAL INSENSITIVITY",
          "Mutations in tumor suppressor genes (eg, Rb) · Loss of E-cadherin function → loss of contact inhibition (eg, NF2 mutations).",
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
          "Normally, immune cells can recognize and attack tumor cells. For successful tumorigenesis, tumor cells must evade the immune system. Multiple escape mechanisms exist: ↓ MHC class I expression by tumor cells → cytotoxic T cells are unable to recognize tumor cells · Tumor cells secrete immunosuppressive factors (eg, TGF-β) and recruit regulatory T cells to downregulate immune response · Tumor cells upregulate immune checkpoint molecules, which inhibit immune response.",
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
        "Nine rows, six bands: the two growth axes (gain-of-function gas pedal, loss-of-function brake line), the death axis, the immortality enzyme, the two supply lines (vessels and metabolism), the three-pronged immune escape, and the invasion-metastasis cascade with the first-encountered-capillary-bed routing rule.",
    },
    {
      kind: "steps",
      title: "The spread cascade — from an unglued cell to a distant implant (rows 8–9, distilled)",
      intro:
        "Tissue invasion and metastasis printed as one chain; each step names its hallmark row — UNGLUE, CHEW, GRAB, CRAWL, EMBARK, then LAND where the first capillary bed catches you (or where tropism calls you).",
      steps: [
        {
          label: "UNGLUE — E-cadherin loss",
          detail:
            "Loss of E-cadherin function → loosening of intercellular junctions (the same molecule whose loss removes contact inhibition in the anti-growth row, eg NF2 mutations).",
        },
        {
          label: "CHEW — metalloproteinases",
          detail:
            "Metalloproteinases degrade the basement membrane and ECM — the barrier between the unglued cell and the stroma.",
        },
        {
          label: "GRAB — ECM attachment",
          detail:
            "Cells attach to ECM proteins (eg, laminin, fibronectin) — grip before movement.",
        },
        {
          label: "CRAWL — locomotion",
          detail: "Cells migrate through the degraded ECM (“locomotion”).",
        },
        {
          label: "EMBARK — vascular dissemination",
          detail:
            "Tumor cells or emboli spread via lymphatics or blood — leaving the neighborhood (tissue invasion → metastasis).",
        },
        {
          label: "LAND — adhesion, extravasation, homing",
          detail:
            "Adhesion to endothelium → extravasation and homing; the target organ is often the first-encountered capillary bed predicted by the 1° tumor's site, with organ tropism as the exception that names the rule (eg, lung cancers commonly metastasize to adrenals).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 54-year-old woman has an invasive ductal carcinoma whose cells show intense membrane staining for a receptor tyrosine kinase; downstream signaling continues even though no growth factor is bound.",
        discriminator:
          "Constitutive signaling from a mutated growth factor receptor (HER2 in breast cancer) — growth signal self-sufficiency",
        concept: "Row 1, gene class 2 of 5",
        answer:
          "Growth signal self-sufficiency is mutations in genes encoding growth factor receptors → constitutive signaling (eg, HER2 in breast cancer). The five gene classes of the row: proto-oncogenes (↑ growth factors → autocrine loop, eg ↑ PDGF in brain tumors), growth factor receptors (HER2), signaling molecules (RAS), transcription factors (MYC), and cell cycle regulators (cyclins, CDKs) — a receptor that signals without its ligand is the definition of a self-sufficient growth signal.",
      },
      {
        stem: "A 61-year-old man has painless cervical and inguinal lymphadenopathy; excisional biopsy shows nodular aggregates of small cleaved B cells, and the cells overexpress an anti-apoptotic mitochondrial protein due to a t(14;18) translocation.",
        discriminator:
          "BCL2 overexpression blocking apoptosis — evasion of apoptosis (follicular B cell lymphoma)",
        concept: "The death axis",
        answer:
          "The printed row: mutations in genes that regulate apoptosis (eg, TP53, BCL2 → follicular B cell lymphoma). BCL2 sits on the mitochondrial membrane and prevents apoptosis; its overexpression in the t(14;18) follicular lymphoma lets the B cells survive past their programmed death — the tumor grows by refusing to die, and TP53 loss (the row's other example) is the same escape from the other side.",
      },
      {
        stem: "A research laboratory cultures a tumor's cells; the cells have now passed 60 divisions without senescing, and telomere length is stable across passages, not shortening.",
        discriminator:
          "Reactivation of telomerase → maintenance and lengthening of telomeres — limitless replicative potential",
        concept: "The immortality band",
        answer:
          "Limitless replicative potential is reactivation of telomerase → maintenance and lengthening of telomeres → prevention of chromosome shortening and cell aging. Normal somatic cells shorten their telomeres with each division and eventually arrest (replicative senescence); the tumor cell reactivates the enzyme that rebuilds the ends and divides without limit.",
      },
      {
        stem: "A 66-year-old man with a 6-cm left-upper-lobe lung mass is found on staging CT to have a solitary right adrenal nodule; biopsy of the nodule matches the lung primary.",
        discriminator:
          "The first-encountered capillary bed / organ tropism (lung cancers commonly metastasize to adrenals) — metastasis",
        concept: "The routing rule of row 9",
        answer:
          "Metastasis: tumor cells or emboli spread via lymphatics or blood → adhesion to endothelium → extravasation and homing; the site of metastasis can be predicted by the site of the 1° tumor, as the target organ is often the first-encountered capillary bed — and lung cancers commonly metastasize to the adrenals, one of the named organ tropisms. The adrenal nodule in a lung cancer patient is metastasis until proven otherwise.",
      },
    ],
    traps: [
      {
        a: "Growth signal self-sufficiency",
        b: "Anti-growth signal insensitivity",
        whyConfused:
          "Both are the growth axis and both end in unchecked proliferation",
        keyDifference:
          "SELF-SUFFICIENCY is gain-of-function — mutations activating proto-oncogenes, receptors (HER2), signalers (RAS), transcription factors (MYC), and cyclins/CDKs so the cell MAKES its own growth commands; INSENSITIVITY is loss-of-function — mutations removing tumor suppressors (Rb) or E-cadherin contact inhibition (NF2) so the cell HEARS no stop commands",
        clue:
          "A mutation that turns a signal ON (amplification, constitutive activation) → self-sufficiency; a mutation that deletes a brake (Rb, NF2) → insensitivity",
      },
      {
        a: "Tissue invasion",
        b: "Metastasis",
        whyConfused:
          "Both are the spread band and both involve leaving the primary site",
        keyDifference:
          "INVASION is the LOCAL cascade — E-cadherin loss → metalloproteinases degrade basement membrane/ECM → laminin/fibronectin attachment → locomotion → vascular dissemination; METASTASIS is the DISTANT colonization after dissemination — emboli via lymphatics or blood → endothelial adhesion → extravasation and homing at the first-encountered capillary bed",
        clue:
          "A question about breaking through the basement membrane → invasion; a question about a distant lesion or where the tumor will land → metastasis",
      },
      {
        a: "The Warburg effect (aerobic glycolysis)",
        b: "Hypoxia-driven glycolysis",
        whyConfused:
          "Both produce ATP by glycolysis and both raise lactate",
        keyDifference:
          "The WARBURG effect is glycolysis EVEN UNDER AEROBIC CONDITIONS — oxygen is available and mitochondria are bypassed anyway, driven by altered metabolic enzymes (pyruvate kinase M2, LDH-A) to feed nucleotide/lipid/amino acid biosynthesis; hypoxic glycolysis is the normal Pasteur response to MISSING oxygen",
        clue:
          "Normal oxygen tension (or a tumor that is PET-glucose-avid despite being well oxygenated) → Warburg; a hypoxic, poorly perfused core → the ordinary hypoxic switch",
      },
      {
        a: "Neoangiogenesis",
        b: "Vasculogenesis",
        whyConfused:
          "Both are the vessel-building routes of sustained angiogenesis",
        keyDifference:
          "NEOANGIOGENESIS is SPROUTING — new vessels budding from existing capillaries; VASCULOGENESIS is RECRUITMENT — endothelial cells brought in from the bone marrow; both may be driven by tumor- or stromal-cell VEGF and both may yield leaky and/or dilated vessels",
        clue:
          "A question about sprouting from a parent capillary → neoangiogenesis; a question about bone-marrow-derived endothelial precursors → vasculogenesis",
      },
    ],
    pivots: [
      {
        lookAlike: "A named molecular lesion in a tumor stem — which hallmark row?",
        differentiator:
          "Route by the lesion's direction and target: gain-of-function in a growth gene (PDGF, HER2, RAS, MYC, cyclins/CDKs) → growth signal self-sufficiency; loss of a tumor suppressor (Rb) or E-cadherin contact inhibition (NF2) → anti-growth signal insensitivity; an apoptosis regulator (TP53, BCL2) → evasion of apoptosis; telomerase reactivation → limitless replicative potential; VEGF or vessel growth → sustained angiogenesis; PKM2/LDH-A or ↑ lactate with oxygen present → the Warburg effect; MHC I, TGF-β/Tregs, or checkpoints → immune evasion; basement membrane/ECM degradation → tissue invasion; emboli and distant homing → metastasis",
        correctPath:
          "Ask what the mutation turns ON or OFF: ON in the growth pathway = row 1; OFF in a brake = row 2; OFF in the death program = row 3; ON in the immortalizing enzyme = row 4",
      },
      {
        lookAlike: "A metabolic or lab signature in a tumor — supply-line question?",
        differentiator:
          "The Warburg signature is metabolic: glycolysis despite available oxygen (PKM2, LDH-A), ↑ lactate, and biosynthetic intermediates for nucleotide/lipid/amino acid synthesis; the angiogenesis signature is vascular: ↑ VEGF (or ↓ inhibitory factors) from tumor or stromal cells, sprouting neoangiogenesis or bone-marrow vasculogenesis, leaky and/or dilated vessels",
        correctPath:
          "Lactate/LDH/enzyme-reprogramming clues → the Warburg effect; VEGF/vessel/growth-of-feeder clues → sustained angiogenesis — the two supply lines of band 4",
      },
      {
        lookAlike: "A distant lesion in a cancer patient — where did it come from and where will it go?",
        differentiator:
          "Route by hemodynamics first: the target organ is often the first-encountered capillary bed downstream of the 1° tumor, but some cancers show organ tropism (eg, lung cancers commonly metastasize to adrenals)",
        correctPath:
          "Predict the landing site by the first capillary bed the embolus meets, and override with the named tropisms when the stem offers one",
      },
    ],
    miniCase: {
      vignette:
        "A 62-year-old man presents with 3 months of cough and a 12-lb weight loss. Chest CT shows a 5-cm spiculated left-upper-lobe mass and a solitary 1.4-cm right adrenal nodule. Biopsy of the lung mass shows sheets of mitotically active malignant cells. Tumor assays report strong telomerase activity; metabolically, the cells take up glucose avidly and convert it to lactate at a high rate even though measured intratumoral oxygen tension is normal, with overexpression of pyruvate kinase M2 and LDH-A. Serum LDH is elevated. Which pair of cancer hallmarks do the telomerase activity and the glucose-to-lactate findings, respectively, represent?",
      question:
        "Match the two laboratory findings to their hallmark rows — telomerase activity first, glucose-to-lactate conversion second — and identify what the adrenal nodule separately represents.",
      options: [
        {
          label:
            "Limitless replicative potential and the Warburg effect — telomerase reactivation maintains and lengthens telomeres (preventing chromosome shortening and cell aging), while PKM2/LDH-A-driven glycolysis even under aerobic conditions supplies biosynthetic intermediates and ↑ lactate; the adrenal nodule is metastasis via the first-encountered capillary bed with lung→adrenal organ tropism",
          text:
            "One finding is the immortality enzyme; the other is the metabolic switch; the nodule is the routing rule.",
          correct: true,
          why:
            "Correct on all three layers. (1) TELOMERASE: limitless replicative potential is reactivation of telomerase → maintenance and lengthening of telomeres → prevention of chromosome shortening and cell aging — exactly what 60-plus divisions without senescence reflects. (2) GLUCOSE-TO-LACTATE: the Warburg effect is the shift of glucose metabolism from mitochondrial oxidative phosphorylation to glycolysis EVEN UNDER AEROBIC CONDITIONS — the stem's normal oxygen tension is the discriminator against a hypoxic explanation — driven by altered metabolic enzymes (pyruvate kinase M2, LDH-A), supplying biosynthetic intermediates for nucleotide, lipid, and amino acid synthesis with resulting ↑ lactate production (the elevated serum LDH). (3) THE ADRENAL NODULE: tumor cells or emboli spread via lymphatics or blood → adhesion to endothelium → extravasation and homing; the target organ is often the first-encountered capillary bed, and lung cancers commonly metastasize to the adrenals — a third hallmark (metastasis/organ tropism) deliberately left out of the asked pair.",
        },
        {
          label:
            "Growth signal self-sufficiency and sustained angiogenesis — HER2-type constitutive signaling explains the mitotic activity, and VEGF-driven leaky vessels explain the metabolic findings",
          text: "A signaling mutation plus a vessel supply.",
          why:
            "Both misattributions: nothing in the stem names a growth pathway lesion (no receptor, RAS, MYC, or cyclin finding) — mitotic activity alone does not establish self-sufficiency; and sustained angiogenesis is ↑ pro-angiogenic factors (eg, VEGF) or ↓ inhibitory factors producing vessels (sprouting neoangiogenesis or bone-marrow vasculogenesis), not a cell-autonomous glucose-to-lactate conversion. The lactate story is enzymatic reprogramming (PKM2, LDH-A), not vessel leak.",
        },
        {
          label:
            "Evasion of apoptosis and immune evasion — BCL2 overexpression keeps the cells alive, and the tumor is invisible to cytotoxic T cells",
          text: "The cells refuse to die and hide from immunity.",
          why:
            "Wrong rows for both findings: evasion of apoptosis is mutations in genes that regulate apoptosis (eg, TP53, BCL2 → follicular B cell lymphoma) — no apoptosis-regulator lesion is given; and immune evasion would require ↓ MHC class I, TGF-β/regulatory T cell recruitment, or checkpoint upregulation, none of which the assays report. Telomerase is not an apoptosis regulator — it is the telomere-maintenance enzyme of limitless replicative potential.",
        },
        {
          label:
            "Anti-growth signal insensitivity and tissue invasion — Rb loss explains the high mitotic index, and E-cadherin loss with metalloproteinases explains the spiculated mass",
          text: "Brake failure plus basement-membrane breach.",
          why:
            "Tempting morphology, wrong mapping: Rb loss (anti-growth signal insensitivity) and the E-cadherin → metalloproteinase cascade (tissue invasion) are real hallmarks and both are compatible with the biopsy, but the question asks what the TELOMERASE ASSAY and the GLUCOSE-TO-LACTATE ASSAY represent — neither assay measures a tumor suppressor or a junction protein. The spiculated border is the invasion clue, and it is the distractor the question deliberately supplies.",
        },
        {
          label:
            "Limitless replicative potential and sustained angiogenesis — telomerase reactivation prevents chromosome shortening, and the glucose uptake marks VEGF-driven vessel recruitment from bone marrow",
          text: "Immortality plus feeder-vessel growth.",
          why:
            "Half right: telomerase correctly names limitless replicative potential. But avid glucose uptake converted to lactate under normal oxygen tension is the Warburg effect's aerobic-glycolysis signature, not angiogenesis — angiogenesis is about VESSEL growth (VEGF, neoangiogenesis vs bone-marrow vasculogenesis), not about the tumor cell's own glycolytic enzyme switch (pyruvate kinase M2, LDH-A). The near-miss pairing is the exam's favorite wrong answer.",
        },
      ],
      reasoning:
        "The stem hands you two assays and one imaging finding, each keyed to a different row. (1) TELOMERASE → limitless replicative potential (reactivation → maintenance and lengthening of telomeres → prevention of chromosome shortening and cell aging). (2) GLUCOSE-TO-LACTATE UNDER NORMAL OXYGEN → the Warburg effect (glycolysis even under aerobic conditions, driven by pyruvate kinase M2 and LDH-A, supplying biosynthetic intermediates for nucleotide/lipid/amino acid synthesis, resulting in ↑ lactate — the elevated serum LDH); the 'normal intratumoral oxygen tension' clause exists precisely to exclude hypoxia-driven glycolysis. (3) THE ADRENAL NODULE → metastasis (emboli via blood → endothelial adhesion → extravasation and homing; first-encountered capillary bed, with lung → adrenals as the named organ tropism) — a third hallmark not part of the asked pair. The distractors each misfile one or both assays: growth-signal self-sufficiency needs a growth-pathway lesion; sustained angiogenesis needs a VESSEL finding, not an enzyme switch; apoptosis evasion needs TP53/BCL2; and the Rb/invasion pairing describes the mass's behavior, not the assay results. Half-right pairings (telomerase + angiogenesis) are the designed near-misses — match each finding to its own row.",
    },
  },
  mnemonics: [
    {
      code: "GROW, IGNORE, REFUSE DEATH, NEVER AGE, FEED, FERMENT, HIDE, INVADE, SPREAD",
      meaning:
        "The nine hallmarks in table order: GROW = growth signal self-sufficiency (proto-oncogenes/PDGF, HER2, RAS, MYC, cyclins/CDKs); IGNORE = anti-growth signal insensitivity (Rb, E-cadherin/NF2 contact inhibition); REFUSE DEATH = evasion of apoptosis (TP53, BCL2 → follicular B cell lymphoma); NEVER AGE = limitless replicative potential (telomerase → telomere maintenance); FEED = sustained angiogenesis (VEGF, neoangiogenesis vs vasculogenesis); FERMENT = the Warburg effect (glycolysis even aerobically, PKM2/LDH-A, ↑ lactate); HIDE = immune evasion (↓ MHC I, TGF-β/Tregs, checkpoints); INVADE = tissue invasion (E-cadherin loss → metalloproteinases → laminin/fibronectin → locomotion); SPREAD = metastasis (emboli → adhesion → extravasation → homing; first-encountered capillary bed; lung → adrenals).",
      memorizes: "The complete nine-row hallmark table",
      whenToUse: "Any question asking for the full hallmark list or which row a mechanism belongs to",
      clinical:
        "Nine verbs, one sentence: a cancer cell grows on its own, ignores every stop, refuses to die, never ages, feeds itself, ferments anyway, hides from patrols, invades the ground floor, and spreads to the branches.",
    },
    {
      code: "GAS ON, BRAKES CUT",
      meaning:
        "The two growth axes: GAS ON = growth signal self-sufficiency, the gain-of-function mutations that keep the engine revving (proto-oncogenes → ↑ growth factors → autocrine loop, ↑ PDGF in brain tumors; growth factor receptors → constitutive signaling, HER2 in breast cancer; signaling molecules, RAS; transcription factors, MYC; cell cycle regulators, cyclins/CDKs); BRAKES CUT = anti-growth signal insensitivity, the loss-of-function mutations that remove every restraint (tumor suppressor genes, eg Rb; loss of E-cadherin → loss of contact inhibition, eg NF2 mutations).",
      memorizes: "Rows 1–2 and the gain-vs-loss direction of each",
      whenToUse: "Any oncogene-vs-tumor-suppressor or growth-axis question",
      clinical:
        "The first two hallmarks are one pedal and one brake line — the exam tests whether you can tell a stuck accelerator (HER2, RAS, MYC) from a severed brake (Rb, NF2).",
    },
    {
      code: "GLUCOSE IN, LACTATE OUT, OXYGEN IGNORED",
      meaning:
        "The Warburg effect: shift of glucose metabolism from mitochondrial oxidative phosphorylation to glycolysis EVEN UNDER AEROBIC CONDITIONS (oxygen ignored); driven by altered metabolic enzymes (eg, pyruvate kinase M2, LDH-A); aerobic glycolysis supplies rapidly dividing cancer cells with biosynthetic intermediates for nucleotide, lipid, and amino acid synthesis (glucose in as building blocks), resulting in ↑ lactate production (lactate out).",
      memorizes: "The Warburg effect row",
      whenToUse: "Any tumor metabolism, lactate, LDH, or aerobic-glycolysis question",
      clinical:
        "If the question says glycolysis with oxygen available and lactate accumulating, the answer is the Warburg effect — not hypoxia.",
    },
    {
      code: "UNGLUE, CHEW, GRAB, CRAWL, EMBARK, LAND",
      meaning:
        "The invasion-metastasis cascade: UNGLUE = loss of E-cadherin → loosening of intercellular junctions; CHEW = metalloproteinases degrade basement membrane and ECM; GRAB = cells attach to ECM proteins (eg, laminin, fibronectin); CRAWL = migration through degraded ECM (“locomotion”); EMBARK = vascular dissemination (tumor cells or emboli spread via lymphatics or blood); LAND = adhesion to endothelium → extravasation and homing, at the first-encountered capillary bed or an organ-tropism site (eg, lung cancers commonly metastasize to adrenals).",
      memorizes: "Rows 8–9 as one chain",
      whenToUse: "Any invasion-cascade or metastasis-routing question",
      clinical:
        "Six verbs in order — a cell that unglues, chews, grabs, crawls, embarks, and lands has completed both spread hallmarks.",
    },
  ],
  rapidReview: {
    s30: [
      "Cancer is caused by (mostly acquired) DNA mutations that affect fundamental cellular processes (eg, growth, DNA repair, survival)",
      "Growth signal self-sufficiency: mutations in genes encoding proto-oncogenes → ↑ growth factors → autocrine loop (eg, ↑ PDGF in brain tumors); growth factor receptors → constitutive signaling (eg, HER2 in breast cancer); signaling molecules (eg, RAS); transcription factors (eg, MYC); cell cycle regulators (eg, cyclins, CDKs)",
      "Anti-growth signal insensitivity: mutations in tumor suppressor genes (eg, Rb); loss of E-cadherin function → loss of contact inhibition (eg, NF2 mutations)",
      "Evasion of apoptosis: mutations in genes that regulate apoptosis (eg, TP53, BCL2 → follicular B cell lymphoma)",
      "Limitless replicative potential: reactivation of telomerase → maintenance and lengthening of telomeres → prevention of chromosome shortening and cell aging",
      "Sustained angiogenesis: ↑ pro-angiogenic factors (eg, VEGF) or ↓ inhibitory factors; tumor or stromal production; sprouting neoangiogenesis vs bone-marrow-recruited vasculogenesis; vessels may be leaky and/or dilated",
      "Warburg effect: shift from mitochondrial oxidative phosphorylation to glycolysis even under aerobic conditions; driven by pyruvate kinase M2 and LDH-A; supplies biosynthetic intermediates for nucleotide/lipid/amino acid synthesis; ↑ lactate",
      "Immune evasion: ↓ MHC class I → cytotoxic T cells unable to recognize tumor cells; immunosuppressive factors (eg, TGF-β) + regulatory T cell recruitment; immune checkpoint upregulation",
      "Tissue invasion: E-cadherin loss → loosened junctions → metalloproteinases degrade basement membrane/ECM → attach to laminin/fibronectin → “locomotion” → vascular dissemination",
      "Metastasis: emboli via lymphatics or blood → endothelial adhesion → extravasation and homing; first-encountered capillary bed predicts the site; organ tropism (eg, lung cancers commonly metastasize to adrenals)",
    ],
    m3: [
      "GROW, IGNORE, REFUSE DEATH, NEVER AGE, FEED, FERMENT, HIDE, INVADE, SPREAD — the nine hallmarks in table order",
      "GAS ON, BRAKES CUT — self-sufficiency (gain of function) vs insensitivity (loss of function)",
      "GLUCOSE IN, LACTATE OUT, OXYGEN IGNORED — the Warburg effect",
      "UNGLUE, CHEW, GRAB, CRAWL, EMBARK, LAND — the invasion-metastasis cascade",
      "BCL2 → follicular B cell lymphoma is the apoptosis row's named tumor; telomerase is the immortality row's named enzyme",
    ],
    m10: [
      "The five gene classes of self-sufficiency in the printed order: growth factors (PDGF, brain tumors), receptors (HER2, breast), signaling molecules (RAS), transcription factors (MYC), cell cycle regulators (cyclins, CDKs)",
      "E-cadherin appears in two rows: contact-inhibition loss in anti-growth signal insensitivity (NF2) and junction loosening in tissue invasion — the same molecule, two hallmarks",
      "Neoangiogenesis sprouts from existing capillaries; vasculogenesis recruits endothelial cells from bone marrow; both may give leaky and/or dilated vessels",
      "The Warburg payoff is biosynthesis: aerobic glycolysis supplies nucleotide, lipid, and amino acid intermediates — growth, not just ATP",
      "The three immune-escape prongs: ↓ MHC class I (blinds CD8+ cytotoxic T cells), TGF-β + regulatory T cells (sedates the response), checkpoint upregulation (slams the brakes — the target of the book's next-page immunotherapies)",
      "The routing rule: the target organ is often the FIRST-encountered capillary bed; the named tropism exception is lung cancers → adrenals",
      "Zero images on the source page (pdfimages + VLM census): the 9-row HALLMARK/MECHANISM table is pure text — the KYP map and mnemonics are original",
    ],
  },
  recall: [
    {
      q: "The intro definition of cancer, verbatim.",
      a: "Cancer is caused by (mostly acquired) DNA mutations that affect fundamental cellular processes (eg, growth, DNA repair, survival).",
    },
    {
      q: "The growth signal self-sufficiency row verbatim — all five gene classes.",
      a: "Mutations in genes encoding: Proto-oncogenes → ↑ growth factors → autocrine loop (eg, ↑ PDGF in brain tumors). Growth factor receptors → constitutive signaling (eg, HER2 in breast cancer). Signaling molecules (eg, RAS). Transcription factors (eg, MYC). Cell cycle regulators (eg, cyclins, CDKs).",
    },
    {
      q: "The anti-growth signal insensitivity row verbatim.",
      a: "Mutations in tumor suppressor genes (eg, Rb). Loss of E-cadherin function → loss of contact inhibition (eg, NF2 mutations).",
    },
    {
      q: "The evasion of apoptosis row verbatim.",
      a: "Mutations in genes that regulate apoptosis (eg, TP53, BCL2 → follicular B cell lymphoma).",
    },
    {
      q: "The limitless replicative potential row verbatim.",
      a: "Reactivation of telomerase → maintenance and lengthening of telomeres → prevention of chromosome shortening and cell aging.",
    },
    {
      q: "The sustained angiogenesis row verbatim — including the two vessel-building routes.",
      a: "↑ pro-angiogenic factors (eg, VEGF) or ↓ inhibitory factors. Factors may be produced by tumor or stromal cells. Vessels can sprout from existing capillaries (neoangiogenesis) or endothelial cells are recruited from bone marrow (vasculogenesis). Vessels may be leaky and/or dilated.",
    },
    {
      q: "The Warburg effect row verbatim.",
      a: "Shift of glucose metabolism from mitochondrial oxidative phosphorylation to glycolysis, even under aerobic conditions. Driven by altered metabolic enzymes (eg, pyruvate kinase M2, LDH-A). Aerobic glycolysis supplies rapidly dividing cancer cells with biosynthetic intermediates for nucleotide, lipid, and amino acid synthesis, resulting in ↑ lactate production.",
    },
    {
      q: "The immune evasion row verbatim — all three escape mechanisms.",
      a: "Normally, immune cells can recognize and attack tumor cells. For successful tumorigenesis, tumor cells must evade the immune system. Multiple escape mechanisms exist: ↓ MHC class I expression by tumor cells → cytotoxic T cells are unable to recognize tumor cells. Tumor cells secrete immunosuppressive factors (eg, TGF-β) and recruit regulatory T cells to downregulate immune response. Tumor cells upregulate immune checkpoint molecules, which inhibit immune response.",
    },
    {
      q: "The tissue invasion row verbatim — the full cascade.",
      a: "Loss of E-cadherin function → loosening of intercellular junctions → metalloproteinases degrade basement membrane and ECM → cells attach to ECM proteins (eg, laminin, fibronectin) → cells migrate through degraded ECM (“locomotion”) → vascular dissemination.",
    },
    {
      q: "The metastasis row verbatim — including the routing rule and the tropism example.",
      a: "Tumor cells or emboli spread via lymphatics or blood → adhesion to endothelium → extravasation and homing. Site of metastasis can be predicted by site of 1° tumor, as the target organ is often the first-encountered capillary bed. Some cancers show organ tropism (eg, lung cancers commonly metastasize to adrenals).",
    },
  ],
  related: [
    {
      title: "Neoplasia Nomenclature & Progression",
      topicId: "neoplasia-nomenclature",
      note: "The page immediately before names what these hallmarks produce — benign (well-differentiated, well-demarcated, no metastasis) versus malignant (poor differentiation, erratic growth, local invasion, metastasis, ↓ apoptosis) — and the grade-vs-stage split that the invasion and metastasis rows make prognostic.",
    },
    {
      title: "Oncogenes & Tumor Suppressors",
      topicId: "oncogenes-tumor-suppressors",
      note: "The gene-level sequel to rows 1–3: the same PDGF, HER2, RAS, MYC, cyclin/CDK, Rb, TP53, and BCL2 lesions tabulated by gene, tumor, and mechanism — the two growth axes of this page expanded into the full mutation catalog.",
    },
    {
      title: "Cell Cycle & Checkpoints",
      topicId: "cell-cycle",
      note: "Row 1's cell cycle regulators (cyclins, CDKs) and row 2's Rb are the cell-cycle page's machinery — Rb as the G1/S brake that the self-sufficiency mutations drive straight through.",
    },
    {
      title: "Apoptosis: Intrinsic, Extrinsic & Misfolded Proteins",
      topicId: "apoptosis-pathways",
      note: "The death axis of row 3: TP53 as the intrinsic-pathway trigger and BCL2 as the mitochondrial membrane brake — the follicular-lymphoma overexpression is evasion of apoptosis applied to a real tumor.",
    },
    {
      title: "Metastasis: Organ Patterns & Routes",
      topicId: "metastasis-patterns",
      note: "Row 9's routing rule made systematic — the first-encountered capillary bed and the organ tropisms (lung → adrenals among them) expanded into the full pattern catalog of where each primary lands.",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology (tumor immune surveillance and checkpoint blockade)",
      connection:
        "Row 7 is a three-move immunology endgame: ↓ MHC class I blinds CD8+ cytotoxic T cells (the same missing-self display that NK cells are built to catch), TGF-β secretion with regulatory T cell recruitment sedates the response, and checkpoint upregulation (PD-1/PD-L1, CTLA-4) slams the off switches — the exact interactions the next page's checkpoint inhibitors (nivolumab, pembrolizumab, ipilimumab) are designed to block.",
    },
    {
      subject: "Biochemistry (glycolysis, LDH, and the pyruvate kinase switch)",
      connection:
        "The Warburg row is the glycolysis pathway rerouted: pyruvate kinase M2 (the embryonic isoform) and LDH-A are the biochemistry chapter's enzymes repurposed — glucose carbon is diverted to nucleotide, lipid, and amino acid synthesis instead of mitochondrial oxidative phosphorylation, and lactate (with serum LDH) rises as the readable byproduct.",
    },
    {
      subject: "Molecular genetics (telomeres and replicative senescence)",
      connection:
        "Limitless replicative potential is telomere biology inverted: normal somatic cells shorten telomeres each division and stop (replicative senescence, cell aging); telomerase reactivation — the enzyme germ and stem cells use — rebuilds the ends and grants the tumor cell its unlimited division count.",
    },
    {
      subject: "Cardiovascular biology & pharmacology (VEGF and anti-angiogenic therapy)",
      connection:
        "Sustained angiogenesis is the VEGF axis turned tumor-ward: ↑ pro-angiogenic factors (or ↓ inhibitors) from tumor or stromal cells, sprouting neoangiogenesis or bone-marrow vasculogenesis, producing the leaky, dilated vessels — the leakiness that anti-VEGF therapy (eg, bevacizumab) targets and that makes tumor vessels fragile on imaging.",
    },
  ],
};
