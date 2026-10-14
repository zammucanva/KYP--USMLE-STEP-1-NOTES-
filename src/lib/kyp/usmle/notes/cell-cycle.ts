import type { KypUsMLENote } from "../types";

// Biochemistry — Cellular (M3).
// Source: First Aid 2026, Part 1 pdf 66 / book 44
// (Cell cycle phases; regulation of cell cycle; cell types; cell cycle arrest)

export const cellCycle: KypUsMLENote = {
  id: "cell-cycle",
  title: "Cell Cycle & Checkpoints",
  subtitle:
    "One circle, two brakes: how cyclin-CDK pairs phosphorylate Rb to open the G1 restriction point, how p53-p21 slams it shut, and why permanent, stable, and labile cells answer the G0 question differently.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Cellular",
  pilotCategory: "Cell biology — cell cycle regulation and signaling",
  difficulty: 3,
  readTime: 13,
  sourceRef:
    "First Aid 2026, Part 1 pp. 44 (cell cycle phases; regulation of cell cycle; cell types; cell cycle arrest)",
  tags: [
    "cell cycle",
    "cyclin",
    "CDK",
    "Rb",
    "E2F",
    "p53",
    "p21",
    "restriction point",
    "Li-Fraumeni",
    "HPV E6",
    "G0",
  ],
  core: {
    what: "The cell cycle runs G1 → S → G2 → M, with checkpoints controlling every transition. Cyclin-dependent kinases (CDKs) are constitutively expressed but inactive alone; phase-specific cyclins bind and activate them, and the cyclin-CDK complex phosphorylates target proteins (eg, Rb) to coordinate progression. Tumor suppressors apply the brakes: p53 induces p21, which inhibits CDKs, keeping Rb hypophosphorylated (active) and blocking G1-S progression.",
    why: "This single page wires the molecular biology of Rb/E2F and p53 into the pathology of cancer: Li-Fraumeni syndrome (germline p53 loss) and HPV E6 (p53 degradation) are the two canonical ways the brake is removed. It also explains why chemotherapy devastates marrow, gut, skin, and hair — the labile cells that never enter G0 — while neurons and muscle are spared.",
    keyIdea: "Read the circle as a gate and a guard: growth factors → cyclin-CDK → phosphorylated Rb → E2F released → S phase. DNA damage → p53 → p21 → CDK inhibition → hypophosphorylated Rb → G1-S block. Cancer happens when the gate opens without the guard's consent.",
  },
  mechanisms: [
    {
      id: "rb-e2f-gate",
      title: "The Rb-E2F gate — growth factors open the G1 restriction point",
      context: "G1 → S transition in a dividing cell",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Growth factor stimulation (receptor TK: insulin, PDGF, EGF; nonreceptor: EPO via JAK2)",
            sublabel: "Molecular — the cell is told to divide; the G1 restriction point decides whether it commits to S phase.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Phase-specific cyclins synthesized",
            sublabel: "Molecular — cyclins are phase-specific regulatory proteins that activate CDKs; CDKs are constitutively expressed but inactive when not bound to cyclin.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Cyclin-CDK complex phosphorylates Rb",
            sublabel: "Molecular — the complex can then phosphorylate other proteins (eg, Rb) to coordinate cell cycle progression.",
            variant: "process",
          },
          {
            id: "t1",
            label: "Rb (hypophosphorylated) holds E2F sequestered",
            sublabel: "Pathway — active, hypophosphorylated Rb is the brake: it binds E2F and prevents S-phase gene transcription.",
            variant: "target",
          },
          {
            id: "s3",
            label: "Phosphorylated Rb (Rb P) releases E2F",
            sublabel: "Molecular — phosphorylation inactivates Rb's grip; free E2F drives gene transcription for DNA synthesis.",
            variant: "process",
          },
          {
            id: "o1",
            label: "E2F-driven gene transcription → S phase (DNA synthesis)",
            sublabel: "Output — the restriction point is passed; the cell irreversibly commits to replicating its genome.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Rb, p53 modulate the G1 restriction point",
            sublabel: "Clinical — the figure's own label: both tumor suppressors act at this gate; loss of either removes checkpoint control.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "transduce" },
          { from: "s1", to: "s2", label: "cyclin binds CDK" },
          { from: "s2", to: "t1", label: "phosphorylate" },
          { from: "t1", to: "s3", label: "Rb P" },
          { from: "s3", to: "o1", label: "E2F free" },
          { from: "x1", to: "o1", type: "inhibit", label: "checkpoint control" },
        ],
        caption:
          "The gate logic in one line: growth factors → cyclin-CDK → Rb phosphorylated → E2F released → S phase. Hypophosphorylated Rb is the ACTIVE brake; phosphorylation releases it, not the other way around — the single most-tested inversion on this page.",
      },
    },
    {
      id: "p53-dna-damage-arrest",
      title: "p53-p21 arrest — the DNA-damage response and the intrinsic apoptosis door",
      context: "Cell with DNA damage at the G1 checkpoint",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "DNA damage sensed by the cell",
            sublabel: "Molecular — the checkpoint question: repair before copying, or die rather than propagate a mutated genome.",
            variant: "input",
          },
          {
            id: "s1",
            label: "p53 stabilized and activated",
            sublabel: "Molecular — the guardian of the genome; normally rapidly degraded, damage stabilizes p53 protein.",
            variant: "process",
          },
          {
            id: "s2",
            label: "p21 induction",
            sublabel: "Molecular — p53's transcriptional target; p21 is the direct CDK inhibitor.",
            variant: "process",
          },
          {
            id: "s3",
            label: "CDK inhibition → Rb hypophosphorylation (activation)",
            sublabel: "Pathway — with CDKs blocked, Rb keeps holding E2F, and G1-S progression is inhibited.",
            variant: "process",
          },
          {
            id: "o1",
            label: "G1-S progression inhibited (cell cycle arrest)",
            sublabel: "Output — the cell pauses for repair; this is the checkpoint every exam question is built on.",
            variant: "output",
          },
          {
            id: "s4",
            label: "p53 also inhibits BCL-2/BCL-XL",
            sublabel: "Molecular — the second branch: p53 releases the mitochondrial brakes on apoptosis.",
            variant: "process",
          },
          {
            id: "s5",
            label: "BAX/BAK activation → caspase activation",
            sublabel: "Pathway — mitochondrial outer membrane permeabilization unleashes caspases.",
            variant: "process",
          },
          {
            id: "o2",
            label: "Apoptosis (intrinsic pathway)",
            sublabel: "Output — if damage is beyond repair, the cell self-destructs instead of passing the defect on.",
            variant: "output",
          },
          {
            id: "x1",
            label: "HPV E6 degrades p53",
            sublabel: "Clinical — the viral route around the checkpoint: E6 targets p53 for destruction, so neither arrest nor apoptosis happens.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Li-Fraumeni syndrome (loss of function)",
            sublabel: "Clinical — germline p53 mutation: unrestrained cell division, a cascade of early cancers.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "stabilize" },
          { from: "s1", to: "s2", label: "transcribe" },
          { from: "s2", to: "s3", type: "inhibit", label: "p21 ⊣ CDK" },
          { from: "s3", to: "o1", label: "arrest" },
          { from: "s1", to: "s4", label: "parallel branch" },
          { from: "s4", to: "s5", label: "BCL-2 ⊣ released" },
          { from: "s5", to: "o2", label: "caspases" },
          { from: "x1", to: "s1", type: "inhibit", label: "degrades p53" },
          { from: "x2", to: "s1", type: "inhibit", label: "mutant p53" },
        ],
        caption:
          "One guardian, two outcomes: p53 → p21 → CDK inhibition → Rb hypophosphorylation (activation) → G1-S arrest for repair; and p53 ⊣ BCL-2/BCL-XL → BAX/BAK → caspase activation → intrinsic apoptosis for damage beyond repair. HPV E6 and Li-Fraumeni both cut the same wire.",
      },
    },
    {
      id: "g0-cell-type-strategy",
      title: "The G0 question — permanent, stable, and labile cells",
      context: "Which cells divide, which wait, and which never stop",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Tissue maintenance demand",
            sublabel: "Physiology — every lineage answers the same question: stay in G0 or cycle?",
            variant: "input",
          },
          {
            id: "s1",
            label: "Permanent cells — remain in G0, regenerate from stem cells",
            sublabel: "Clinical — neurons, skeletal and cardiac muscle, RBCs: terminally differentiated; injury is replaced by scar, not by the same cell.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Stable (quiescent) cells — enter G1 from G0 when stimulated",
            sublabel: "Clinical — hepatocytes, lymphocytes, PCT, periosteal cells: paused but renewable on demand (the regenerating liver).",
            variant: "process",
          },
          {
            id: "s3",
            label: "Labile cells — never go to G0, divide rapidly with a short G1",
            sublabel: "Clinical — bone marrow, gut epithelium, skin, hair follicles, germ cells: constantly cycling.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Labile cells are most affected by chemotherapy",
            sublabel: "Output — the clinical price: antineoplastics that hit dividing cells cause myelosuppression, mucositis, alopecia, and infertility.",
            variant: "output",
          },
          {
            id: "x1",
            label: "M phase is the shortest phase of the cell cycle",
            sublabel: "Timing — most cells sit in G1 (variable duration) or S; M is brief, which is why metaphase spreads are harvested specially.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "trigger", to: "s2" },
          { from: "trigger", to: "s3" },
          { from: "s3", to: "o1", label: "constantly cycling" },
          { from: "x1", to: "s1", label: "phase durations" },
        ],
        caption:
          "Three strategies, one consequence: permanent cells (neurons, muscle, RBCs) never re-enter; stable cells (hepatocytes, lymphocytes, PCT, periosteum) re-enter when stimulated; labile cells (marrow, gut, skin, hair, germ) never leave — so chemotherapy collects its toxicity from the labile column.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "The circle and its two clock facts",
      body: [
        "Checkpoints control transitions between phases of the cell cycle — G1, S (synthesis), G2, and M — with interphase spanning G1, S, and G2. Two timing facts anchor every phase-ordering question: M phase is the shortest phase of the cell cycle, and G1 is of variable duration. A cell can pause G1 for days or pass through in hours; it can never skip the checkpoint that guards the S-phase entrance.",
        "M phase includes mitosis (prophase, prometaphase, metaphase, anaphase, telophase) and cytokinesis, when the cytoplasm splits in two. Everything before it — DNA replication in S, growth and preparation in G1 and G2 — is interphase. The exam rarely asks the phase names in order; it asks which phase is shortest, which is variable, and what gates the G1-to-S commitment.",
      ],
    },
    {
      kind: "visual",
      visualId: "cell-cycle-checkpoint-map",
      title: "The cell cycle circle — restriction point, Rb-E2F, and the p53 brake",
      caption:
        "The full circular phase map: G0 outside the loop; interphase spanning G1, S, and G2; M carrying mitosis and cytokinesis. The G1 restriction point is labeled with the figure's own words — Rb, p53 modulate the G1 restriction point — while cyclin-CDK phosphorylates Rb (Rb P), releasing E2F for gene transcription into S phase. The damage branch runs p53 → p21 → CDK inhibition, and p53 inhibits BCL-2/BCL-XL, freeing BAX/BAK to trigger caspase activation and intrinsic-pathway apoptosis. HPV E6 (degrades p53) and Li-Fraumeni syndrome (loss of function) sit on the p53 node where they do their damage.",
      notice:
        "Trace two paths around the circle: the green path (growth factor → cyclin-CDK → Rb phosphorylated → E2F → gene transcription → S) and the red brake (DNA damage → p53 → p21 → CDK inhibition → Rb hypophosphorylated → G1-S arrest). Hypophosphorylated Rb is the active, E2F-sequestering form — phosphorylation is what disarms it.",
      },
    {
      kind: "table",
      title: "Cell types — the G0 answer defines the tissue",
      intro: "First Aid's three-column table, ordered by how close a cell sits to division.",
      columns: ["Cell type", "G0 behavior", "Examples and consequences"],
      rows: [
        ["Permanent", "Remain in G0, regenerate from stem cells", "Neurons, skeletal and cardiac muscle, RBCs — injury → scar, not same-cell replacement"],
        ["Stable (quiescent)", "Enter G1 from G0 when stimulated", "Hepatocytes, lymphocytes, PCT, periosteal cells — the liver regenerates on demand"],
        ["Labile", "Never go to G0, divide rapidly with a short G1; most affected by chemotherapy", "Bone marrow, gut epithelium, skin, hair follicles, germ cells — the chemo-toxicity list"],
      ],
      caption:
        "The chemo question is a G0 question: drugs strike dividing cells, so the labile column pays (myelosuppression, mucositis, alopecia, infertility) while permanent cells ride through untouched.",
    },
    {
      kind: "text",
      title: "Cyclins vs CDKs — who is phase-specific, who is constitutive",
      body: [
        "CDKs are constitutively expressed but inactive when not bound to cyclin — the kinase is always present, waiting for its partner. Cyclins are phase-specific regulatory proteins that activate CDKs when stimulated by growth factors; their levels rise and fall with the phase they command, which is where the name comes from.",
        "The cyclin-CDK complex can then phosphorylate other proteins (eg, Rb) to coordinate cell cycle progression — and this complex must be activated and inactivated at appropriate times for the cycle to progress. That last clause is the exam's handle: a cyclin present at the wrong time, or a CDK that cannot be inhibited (see p21), breaks the checkpoint even if every protein is individually normal.",
        "Growth factors feed the gate from outside: they bind receptor tyrosine kinases (eg, insulin, PDGF, EGF) and nonreceptor tyrosine kinases (eg, EPO via JAK2) to transition the cell from G1 to S phase. The receptor-vs-nonreceptor distinction matters later in pharmacology and oncology; here it is enough that both paths converge on cyclin induction.",
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Four recurring shapes: (1) the phosphorylation inversion — 'which form of Rb sequesters E2F?' (hypophosphorylated); (2) the p53 → p21 → CDK inhibition → Rb hypophosphorylation ordering — usually scrambled as a mechanism-completion question; (3) the Li-Fraumeni pedigree — multiple early primaries, germline TP53; (4) the chemo-sensitivity matching — which cell type is most affected? (labile). HPV E6 questions recycle the same brake: 'which viral protein disables the G1 checkpoint?' (E6 degrades p53).",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why hypophosphorylation means activation for Rb",
      body: "For most signaling proteins, phosphorylation turns them ON. Rb is the famous exception the exam exploits: in its hypophosphorylated state Rb actively binds E2F and blocks S-phase genes — that is its working, brake-on conformation. Cyclin-CDK phosphorylation of Rb is what switches the brake OFF, releasing E2F. When p53 → p21 inhibits CDKs, Rb stays hypophosphorylated — the arrest persists precisely because the brake was never disarmed. Remembering 'hypo-Rb = holding E2F' prevents the single most common error on this page.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Li-Fraumeni — when the guardian is born broken",
      body: "Mutations in tumor suppressor genes can result in unrestrained cell division (eg, Li-Fraumeni syndrome). The classic pedigree stacks early-onset breast cancer, sarcoma of bone or soft tissue, leukemia, brain tumors, and adrenocortical carcinoma across generations — one germline TP53 loss-of-function allele, many primaries. Mechanistically, every cell in the body loses half its G1 brake at birth; the second hit removes the rest. The p53 node on the cycle map is where Li-Fraumeni sits, and the figure says exactly that: 'Li-Fraumeni syndrome (loss of function).'",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "HPV E6 — the viral wire-cutter",
      body: [
        "High-risk HPV proteins are checkpoint assassins, and the cell cycle figure places E6 directly on the p53 node: E6 degrades p53. Without p53 there is no p21 induction, no CDK inhibition, no Rb hypophosphorylation — the damage response is silenced before it starts, and the BCL-2/BCL-XL → BAX/BAK apoptosis branch is disarmed with it.",
        "The cervical cancer screen and vaccine questions that follow in immunology and pathology all reduce to this mechanism: persistent E6 (with E7 neutralizing Rb) strips both tumor-suppressor brakes listed on this page — p53 by E6, Rb by E7 — which is why infected basal cells accumulate mutations instead of arresting.",
      ],
    },
    {
      kind: "text",
      title: "Chemotherapy toxicity — the labile invoice",
      body: [
        "Because labile cells never go to G0 and divide rapidly with a short G1, they are most affected by chemotherapy. The clinical translation is the side-effect cluster every antimetabolite and mitotic inhibitor carries: myelosuppression from marrow, mucositis and diarrhea from gut epithelium, alopecia from hair follicles, and sterility from germ cells.",
        "The counterpoint is equally testable: neurons, skeletal and cardiac muscle, and RBCs are permanent — they remain in G0 and regenerate from stem cells (when they regenerate at all), so antineoplastics largely spare them. Stable cells such as hepatocytes sit in between: quiescent until stimulated, which is why the liver can regrow after resection and why its toxicity profile is agent-specific rather than cycle-driven.",
      ],
    },
  ],
  drugs: [
    {
      drug: "Chemotherapy (class effect, cell-cycle rationale)",
      klass: "Antineoplastic agents (cycle-active)",
      target: "Dividing (labile) cell populations",
      mechanism: "Strike cells that never enter G0 and divide rapidly with a short G1",
      effect: "Myelosuppression, mucositis, alopecia, infertility alongside antitumor effect",
      uses: "Malignancies of cycling cells (leukemias, lymphomas, choriocarcinoma)",
      adverse: "Bone marrow, gut epithelium, skin/hair follicle, germ-cell toxicity",
      clue: "The side-effect list of chemo is the labile column of the cell-type table",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 34-year-old woman with breast cancer at 29 now presents with a high-grade sarcoma of the femur; her father died of leukemia at 38 and a cousin had adrenocortical carcinoma.",
        discriminator: "Multiple early primaries across generations with a sarcoma + breast + leukemia + adrenocortical signature",
        concept: "Germline tumor suppressor loss",
        answer: "Li-Fraumeni syndrome — TP53 loss of function removing the p53 → p21 G1 arrest",
      },
      {
        stem: "A patient on combination chemotherapy develops neutropenia, oral mucositis, and hair loss.",
        discriminator: "Toxicity localized exclusively to the labile-cell column",
        concept: "Cell-type cycling behavior",
        answer: "Labile cells never go to G0, divide rapidly with a short G1 — most affected by chemotherapy",
      },
      {
        stem: "A molecular diagram shows a protein bound to E2F in one state and released after phosphorylation by cyclin-CDK.",
        discriminator: "Hypophosphorylated = active brake",
        concept: "Rb-E2F gate",
        answer: "Rb phosphorylation by cyclin-CDK releases E2F for S-phase gene transcription",
      },
      {
        stem: "A cervical biopsy shows dysplastic basal cells with genomic instability; a viral protein is demonstrated to degrade p53.",
        discriminator: "E6 targets the p53 node of the G1 checkpoint",
        concept: "Viral oncogene vs tumor suppressor",
        answer: "HPV E6 degrades p53 — no p21 induction, no G1-S arrest, no apoptosis",
      },
      {
        stem: "A question asks which phase is shortest and which is most variable in duration.",
        discriminator: "Two phase-timing facts on one page",
        concept: "Cell cycle phase durations",
        answer: "M phase is the shortest phase of the cell cycle; G1 is of variable duration",
      },
    ],
    traps: [
      {
        a: "Phosphorylated Rb",
        b: "Hypophosphorylated Rb",
        whyConfused: "Everywhere else in signaling, phosphorylation = activation.",
        keyDifference: "For Rb the convention flips: hypophosphorylated Rb is the ACTIVE E2F-sequestering brake; phosphorylation by cyclin-CDK disarms it.",
        clue: "'Hypo' Rb holds E2F; p21 keeps Rb hypo by blocking the CDKs.",
      },
      {
        a: "Cyclins",
        b: "CDKs",
        whyConfused: "Both names appear in every checkpoint sentence as one complex.",
        keyDifference: "Cyclins are phase-specific regulatory proteins; CDKs are constitutively expressed but inactive when not bound to cyclin.",
        clue: "Cyclin = the clock (phase-specific); CDK = the engine (always built, needs the clock to run).",
      },
      {
        a: "p53",
        b: "p21",
        whyConfused: "Both are written on the arrest arrow and both are 'p' numbers.",
        keyDifference: "p53 is the transcription factor induced by damage; p21 is ITS product — the direct CDK inhibitor that keeps Rb hypophosphorylated.",
        clue: "53 senses, 21 suppresses. Order: p53 → p21 induction → CDK inhibition.",
      },
      {
        a: "Permanent cells",
        b: "Stable cells",
        whyConfused: "Both can be described as 'not dividing' at baseline.",
        keyDifference: "Permanent cells remain in G0 and regenerate from stem cells (neurons, skeletal and cardiac muscle, RBCs); stable (quiescent) cells enter G1 from G0 when stimulated (hepatocytes, lymphocytes, PCT, periosteal cells).",
        clue: "Regenerating liver = stable. Myocardial scar = permanent.",
      },
    ],
    pivots: [
      {
        lookAlike: "A family-cancer-pedigree stem offering Li-Fraumeni, BRCA syndromes, and familial retinoblastoma",
        differentiator: "The tissue pattern: sarcoma + early breast + leukemia/brain/adrenocortical in one lineage",
        correctPath: "Sarcoma-rich multi-primary pedigree → germline TP53 (Li-Fraumeni); BRCA is breast/ovary-dominant; RB1 is retinoblastoma/osteosarcoma.",
      },
      {
        lookAlike: "A 'toxicity after chemotherapy' stem asking which tissue type is most affected",
        differentiator: "The G0 behavior of the injured tissue",
        correctPath: "Never-G0 rapid cyclers (marrow, gut, skin, hair, germ cells) pay the price; G0-dwellers (neurons, muscle) are spared.",
      },
    ],
    miniCase: {
      vignette:
        "A 31-year-old woman is referred for genetic counseling. At age 26 she was treated for carcinoma of the left breast. Eighteen months ago she underwent excision of a high-grade osteosarcoma of the distal femur. Her father died at 39 of acute leukemia; a paternal aunt had breast cancer at 33 and recently developed adrenocortical carcinoma. Physical examination and laboratory studies are unremarkable. A germline mutation is identified in a tumor suppressor gene whose protein product normally halts the cell cycle at the G1-S transition.",
      question: "Which protein function is directly disabled by this patient's germline mutation?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Transcriptional induction of p21 leading to CDK inhibition and Rb hypophosphorylation",
          why: "Correct. TP53 loss of function (Li-Fraumeni syndrome) removes p21 induction, so CDKs stay active, Rb becomes phosphorylated, E2F is released, and cells with damaged DNA proceed from G1 into S without arrest.",
        },
        {
          label: "B",
          text: "Sequestration of E2F by hypophosphorylated Rb",
          why: "Tempting because the Rb brake is the same checkpoint — but Rb (RB1) is a different tumor suppressor; this pedigree's sarcoma + breast + leukemia + adrenocortical pattern is the TP53 (Li-Fraumeni) signature.",
        },
        {
          label: "C",
          text: "Phosphorylation of Rb by cyclin-CDK complexes",
          why: "This describes the PRO-CYCLE engine the tumor suppressors oppose, not the disabled guardian — phosphorylation of Rb is what the checkpoint must prevent during damage.",
        },
        {
          label: "D",
          text: "Constitutive expression of cyclin-dependent kinases",
          why: "CDKs are indeed constitutively expressed, but that is their normal biology (inactive until cyclin binds); the mutation here eliminates the p53-p21 brake that restrains them.",
        },
        {
          label: "E",
          text: "BAX/BAK-mediated caspase activation",
          why: "The p53 apoptosis branch (p53 ⊣ BCL-2/BCL-XL → BAX/BAK) is second to be lost — but the question asks the checkpoint function, which is the p21 → CDK inhibition → G1-S arrest arm.",
        },
      ],
      reasoning:
        "The pedigree stacks sarcoma, early breast cancer, leukemia, and adrenocortical carcinoma — the Li-Fraumeni tissue combination. The stem pins the lesion to a tumor suppressor that halts G1-S, and First Aid's own chain reads p53 → p21 induction → CDK inhibition → Rb hypophosphorylation (activation) → G1-S progression inhibition. Only option A states that chain; every distractor names a different node of the same figure.",
    },
  },
  mnemonics: [
    {
      code: "“Permanent-Parks, Stable-Stands-by, Labile-Launches”",
      meaning: "Permanent cells park permanently in G0 (neurons, skeletal and cardiac muscle, RBCs); stable cells stand by and enter G1 when stimulated (hepatocytes, lymphocytes, PCT, periosteal cells); labile cells launch constantly — never G0, short G1 (marrow, gut, skin, hair, germ cells).",
      memorizes: "The cell-type table and its G0 behaviors",
      whenToUse: "Any tissue-repair, regeneration, or chemotherapy-toxicity stem.",
      clinical: "Chemo side effects map onto the Launches column: marrow, mucosa, hair, germ cells.",
    },
    {
      code: "“53 senses, 21 suppresses”",
      meaning: "p53 SENSES DNA damage and transcribes p21; p21 SUPPRESSES the CDKs, keeping Rb hypophosphorylated and E2F sequestered.",
      memorizes: "The tumor-suppressor chain order",
      whenToUse: "Mechanism-ordering questions and HPV E6 / Li-Fraumeni stems.",
      clinical: "Break the sensor (E6, TP53 mutation) and the suppressor never appears — no arrest, no apoptosis.",
    },
    {
      code: "“Hypo-Rb holds”",
      meaning: "Hypophosphorylated Rb HOLDS E2F (active brake). Phosphorylation by cyclin-CDK releases it.",
      memorizes: "The Rb phosphorylation-state inversion",
      whenToUse: "Any Rb/E2F phosphorylation-state question.",
      clinical: "RB1 loss and HPV E7 both release E2F constitutively — S-phase entry without permission.",
    },
  ],
  rapidReview: {
    s30: [
      "M phase is the shortest phase; G1 is of variable duration; interphase = G1 + S + G2.",
      "Cyclins: phase-specific. CDKs: constitutively expressed, inactive until cyclin binds.",
      "Cyclin-CDK phosphorylates Rb → E2F released → S-phase gene transcription.",
      "p53 → p21 → CDK inhibition → Rb hypophosphorylation (activation) → G1-S block.",
      "Labile cells (marrow, gut, skin, hair, germ) are most affected by chemotherapy.",
    ],
    m3: [
      "Permanent: neurons, skeletal and cardiac muscle, RBCs — remain in G0, regenerate from stem cells.",
      "Stable (quiescent): hepatocytes, lymphocytes, PCT, periosteal cells — enter G1 from G0 when stimulated.",
      "Growth factors: receptor TKs (insulin, PDGF, EGF) and nonreceptor (EPO via JAK2) drive G1 → S.",
      "HPV E6 degrades p53 — the G1 checkpoint and intrinsic apoptosis branch both fail.",
      "Li-Fraumeni syndrome = germline TP53 loss of function; multiple early primary tumors.",
      "p53 also inhibits BCL-2/BCL-XL → BAX/BAK → caspase activation → apoptosis (intrinsic pathway).",
    ],
    m10: [
      "Rb and p53 both modulate the G1 restriction point — the figure's own label.",
      "Hypophosphorylated Rb is the active E2F-sequestering form; phosphorylation disarms the brake.",
      "The cyclin-CDK complex must be activated AND inactivated at appropriate times for the cycle to progress.",
      "E2F is the transcription factor that commits the cell to DNA synthesis.",
      "Mutations in tumor suppressor genes → unrestrained cell division (eg, Li-Fraumeni).",
      "Chemotherapy toxicity (myelosuppression, mucositis, alopecia, infertility) = labile-column biology.",
    ],
  },
  recall: [
    {
      q: "Which phase of the cell cycle is the shortest, and which is the most variable in duration?",
      a: "M phase (mitosis + cytokinesis) is the shortest; G1 is of variable duration.",
    },
    {
      q: "Which component is constitutively expressed — cyclins or CDKs — and what keeps CDKs inactive?",
      a: "CDKs are constitutively expressed but inactive when not bound to cyclin; cyclins are phase-specific regulatory proteins that activate them.",
    },
    {
      q: "State the full p53 arrest chain from DNA damage to G1-S block.",
      a: "DNA damage → p53 → p21 induction → CDK inhibition → Rb hypophosphorylation (activation) → G1-S progression inhibited.",
    },
    {
      q: "Which phosphorylation state of Rb sequesters E2F, and what does cyclin-CDK do to it?",
      a: "Hypophosphorylated Rb sequesters E2F; cyclin-CDK phosphorylates Rb (Rb P), releasing E2F to drive S-phase gene transcription.",
    },
    {
      q: "How does HPV E6 disable the G1 checkpoint?",
      a: "E6 degrades p53 — no p21 induction, no CDK inhibition, and the BCL-2/BCL-XL → BAX/BAK apoptosis branch is also lost.",
    },
    {
      q: "List the three cell-type classes with one example each and their G0 behavior.",
      a: "Permanent (neurons, skeletal and cardiac muscle, RBCs) — remain in G0, regenerate from stem cells; stable/quiescent (hepatocytes, lymphocytes, PCT, periosteal cells) — enter G1 from G0 when stimulated; labile (bone marrow, gut epithelium, skin, hair follicles, germ cells) — never go to G0, short G1.",
    },
    {
      q: "Which two growth-factor signaling examples does First Aid pair at the G1-S transition?",
      a: "Receptor tyrosine kinases (insulin, PDGF, EGF) and nonreceptor tyrosine kinase (EPO via JAK2).",
    },
  ],
  related: [
    {
      title: "DNA Repair Pathways",
      note: "The G1 arrest p53 imposes exists so these repair systems can work — checkpoints buy time for nucleotide and base excision repair.",
      topicId: "dna-repair",
    },
    {
      title: "Mutations in DNA",
      note: "What escapes the checkpoint: damage that slips past p53 becomes the mutation vocabulary of the next page.",
      topicId: "dna-mutations",
    },
    {
      title: "Eukaryotic Gene Organization & Regulation",
      note: "E2F is a transcription factor — the gene-anatomy vocabulary (promoter, enhancer) explains how it switches on S-phase genes.",
      topicId: "eukaryotic-gene-organization",
    },
    {
      title: "Cytoskeleton, Microtubules & Cilia",
      note: "The M phase the cycle counts down to is executed by the mitotic spindle — a microtubule apparatus, and the target of vinca alkaloids and taxanes.",
      topicId: "cytoskeleton-cilia",
    },
  ],
  crossLinks: [
    {
      subject: "Pathology/Neoplasia",
      connection: "Li-Fraumeni syndrome (germline TP53), retinoblastoma (RB1), and the two-hit model all live on the Rb/p53 nodes of this figure.",
    },
    {
      subject: "Immunology/Microbiology",
      connection: "HPV E6 (degrades p53) and E7 (neutralizes Rb) are the viral answer to both tumor suppressors drawn here.",
    },
    {
      subject: "Pharmacology",
      connection: "Cell-cycle-specific chemotherapy explains its labile-cell toxicity: myelosuppression, mucositis, alopecia, infertility.",
    },
    {
      subject: "Cardiovascular",
      connection: "Cardiac muscle is permanent — myocardial infarction heals by scar, not by myocyte division, because cardiomyocytes remain in G0.",
    },
  ],
};
