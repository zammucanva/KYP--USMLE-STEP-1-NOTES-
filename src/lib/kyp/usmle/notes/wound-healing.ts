import type { KypUsMLENote } from "../types";

// Pathology — INFLAMMATION banner (P-batch 10). Source: pdf 234 /
// book 212 (Chronic inflammation + Wound healing — the chronic
// inflammation definition with the STIMULI/MeDIATORS/OUTCOMeS rows
// including the Th1/Th2 macrophage-activation fork and the HCV→HCC
// and H pylori→gastric adenocarcinoma oncogenesis chains; the tissue
// mediators table [FGF, TGF-β, VEGF, PDGF, metalloproteinases, EGF];
// and the phases table [Inflammatory up to 3 days; Proliferative
// day 3-weeks with the vitamin C and copper deficiency note;
// Remodeling 1 week-6+ months with the type III→type I swap, the
// zinc-requiring collagenases, and the zinc-deficiency note]).
// Census (pdfimages + VLM): NO raster images on this page — the
// entire page is pure text (two tables + the chronic block); no
// margin notes or mnemonics (VLM confirmed); the KYP memory layer is
// original.

export const woundHealing: KypUsMLENote = {
  id: "wound-healing",
  title: "Wound Healing: Mediators & Phases",
  subtitle:
    "The repair program that follows the injury response (book 212) — CHRONIC INFLAMMATION, its stage-setting block: prolonged inflammation with mononuclear infiltration (macrophages, lymphocytes, plasma cells) leading to simultaneous tissue destruction and repair (including angiogenesis and fibrosis); stimulated by persistent infections (TB, T pallidum, certain fungi and viruses → type IV hypersensitivity), autoimmune diseases, and prolonged toxic exposure (silica) or foreign material; mediated by dominant macrophages with the T-cell fork (Th1 → IFN-γ → classical proinflammatory activation; Th2 → IL-4 and IL-13 → alternative repair-and-anti-inflammatory activation); and resolving into scarring, amyloidosis, or neoplastic transformation (chronic HCV → hepatocellular carcinoma; H pylori → chronic gastritis → gastric adenocarcinoma). THE TISSUE MEDIATORS — FGF, VEGF (angiogenesis), TGF-β (angiogenesis, fibrosis), PDGF (from activated platelets and macrophages: vascular remodeling, smooth muscle migration, fibroblast growth for collagen synthesis), metalloproteinases (tissue remodeling), EGF (cell growth via tyrosine kinases, EGFR/ErbB1). THE THREE PHASES — INFLAMMATORY (up to 3 days: platelets, neutrophils, macrophages; clot formation, ↑ vessel permeability, neutrophil migration; macrophages clear debris 2 days later), PROLIFERATIVE (day 3-weeks: fibroblasts, myofibroblasts, endothelial cells, keratinocytes, macrophages; granulation tissue and type III collagen deposition, angiogenesis, epithelial proliferation, clot dissolution, wound contraction via myofibroblasts — delayed in vitamin C and copper deficiency), REMODELING (1 week-6+ months: fibroblasts; type III collagen replaced by type I, ↑ tensile strength; zinc-requiring collagenases break down type III — zinc deficiency → delayed wound healing).",
  subject: "Pathology",
  system: "Section II · High-Yield General Principles — Pathology: Inflammation",
  pilotCategory:
    "The complete wound-healing program — the chronic-inflammation stage-setter (mononuclear infiltration, the Th1/Th2 macrophage-activation fork, the oncogenesis outcomes), the six tissue mediators with their roles, and the three timed phases with their effector cells, characteristics, and the three deficiency lockouts (vitamin C and copper for collagen synthesis; zinc for the collagenases).",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 212–212 (Pathology — Inflammation: the Chronic inflammation block [definition, STIMULI, MEDIATORS with the Th1/Th2 fork, OUTCOMES with the HCV and H pylori oncogenesis chains]; the Wound healing tissue mediators table; and the three phases of wound healing with both deficiency notes)",
  tags: [
    "wound healing",
    "chronic inflammation",
    "mononuclear infiltration",
    "macrophages",
    "lymphocytes",
    "plasma cells",
    "angiogenesis",
    "fibrosis",
    "type IV hypersensitivity",
    "tuberculosis",
    "Treponema pallidum",
    "silica",
    "foreign material",
    "Th1 cells",
    "IFN-gamma",
    "classical activation",
    "Th2 cells",
    "IL-4",
    "IL-13",
    "alternative activation",
    "scarring",
    "amyloidosis",
    "neoplastic transformation",
    "hepatitis C",
    "hepatocellular carcinoma",
    "Helicobacter pylori",
    "chronic gastritis",
    "gastric adenocarcinoma",
    "FGF",
    "TGF-beta",
    "VEGF",
    "PDGF",
    "metalloproteinases",
    "EGF",
    "EGFR",
    "ErbB1",
    "tyrosine kinases",
    "inflammatory phase",
    "proliferative phase",
    "remodeling phase",
    "platelets",
    "neutrophils",
    "fibroblasts",
    "myofibroblasts",
    "endothelial cells",
    "keratinocytes",
    "granulation tissue",
    "type III collagen",
    "type I collagen",
    "wound contraction",
    "tensile strength",
    "collagenases",
    "vitamin C deficiency",
    "copper deficiency",
    "zinc deficiency",
    "delayed wound healing",
  ],
  core: {
    what: "CHRONIC INFLAMMATION: prolonged inflammation characterized by mononuclear infiltration (macrophages, lymphocytes, plasma cells), which leads to simultaneous tissue destruction and repair (including angiogenesis and fibrosis); may be preceded by acute inflammation. STIMULI: persistent infections (eg, TB, T pallidum, certain fungi and viruses) → type IV hypersensitivity; autoimmune diseases; prolonged exposure to toxic agents (eg, silica) and foreign material. MEDIATORS: macrophages are the dominant cells — the interaction of macrophages and T cells drives the chronicity: Th1 cells secrete IFN-γ → macrophage classical activation (proinflammatory); Th2 cells secrete IL-4 and IL-13 → macrophage alternative activation (repair and anti-inflammatory). OUTCOMES: scarring, amyloidosis, and neoplastic transformation (eg, chronic HCV infection → chronic inflammation → hepatocellular carcinoma; Helicobacter pylori infection → chronic gastritis → gastric adenocarcinoma). WOUND HEALING — TISSUE MEDIATORS: FGF — stimulates angiogenesis; TGF-β — angiogenesis, fibrosis; VEGF — stimulates angiogenesis; PDGF — secreted by activated platelets and macrophages; induces vascular remodeling and smooth muscle cell migration; stimulates fibroblast growth for collagen synthesis; Metalloproteinases — tissue remodeling; EGF — stimulates cell growth via tyrosine kinases (eg, EGFR/ErbB1). PHASES: Inflammatory (up to 3 days after wound) — platelets, neutrophils, macrophages; clot formation, ↑ vessel permeability and neutrophil migration into tissue; macrophages clear debris 2 days later. Proliferative (day 3-weeks after wound) — fibroblasts, myofibroblasts, endothelial cells, keratinocytes, macrophages; deposition of granulation tissue and type III collagen, angiogenesis, epithelial cell proliferation, dissolution of clot, and wound contraction (mediated by myofibroblasts); delayed second phase of wound healing in vitamin C and copper deficiency. Remodeling (1 week-6+ months after wound) — fibroblasts; type III collagen replaced by type I collagen, ↑ tensile strength of tissue; collagenases (require zinc to function) break down type III collagen; zinc deficiency → delayed wound healing.",
    why: "This page is the repair half of the inflammation story, and it reads as one continuous program. The chronic-inflammation block sets the stage: when the acute response cannot finish (persistent infections driving type IV hypersensitivity, autoimmunity, silica, foreign material), the infiltrate shifts mononuclear — macrophages, lymphocytes, plasma cells — and destruction and repair run simultaneously, with the T-cell fork steering the macrophage (Th1's IFN-γ keeping it classically, proinflammatorily angry; Th2's IL-4 and IL-13 switching it to the alternative, repair-mode program). The outcomes show why chronicity matters: scarring, amyloidosis (the AA fibril again), and the two printed oncogenesis chains — HCV's march to hepatocellular carcinoma and H pylori's to gastric adenocarcinoma. Then the wound tables supply the molecular toolkit and the timetable: six mediators (three angiogenesis drivers in FGF, VEGF, and TGF-β, with TGF-β also fibrosing; PDGF from activated platelets and macrophages remodeling vessels and growing fibroblasts; the metalloproteinases remodeling tissue; EGF growing epithelium through EGFR/ErbB1), and three timed phases — the inflammatory cleanup (clot, permeability, neutrophils, then macrophages clearing debris at day 2), the proliferative build (granulation tissue, type III collagen, angiogenesis, epithelial proliferation, clot dissolution, myofibroblast contraction — the phase that vitamin C and copper deficiency delays, the collagen cofactors), and the remodeling swap (type III replaced by type I, tensile strength rising, zinc-requiring collagenases doing the replacement — the zinc-deficiency lockout).",
    keyIdea:
      "Read wound healing as a timed relay with a molecular toolkit and three deficiency lockouts. PHASE 1 — INFLAMMATORY (up to 3 days): platelets, neutrophils, macrophages; clot formation, ↑ permeability, neutrophil migration; macrophages clear debris 2 days later. PHASE 2 — PROLIFERATIVE (day 3-weeks): fibroblasts, myofibroblasts, endothelial cells, keratinocytes, macrophages; granulation tissue + type III collagen, angiogenesis, epithelial proliferation, clot dissolution, myofibroblast contraction — DELAYED in vitamin C and copper deficiency (the collagen-synthesis cofactors). PHASE 3 — REMODELING (1 week-6+ months): fibroblasts; type III → type I collagen, ↑ tensile strength; zinc-requiring collagenases break down type III — zinc deficiency delays healing. THE TOOLKIT: FGF/VEGF (angiogenesis), TGF-β (angiogenesis + fibrosis), PDGF (platelet/macrophage-derived: vascular remodeling, smooth muscle migration, fibroblast collagen growth), metalloproteinases (tissue remodeling), EGF (cell growth via EGFR/ErbB1). And the stage-setter: chronic inflammation — mononuclear infiltration with simultaneous destruction and repair, macrophages dominant, Th1/IFN-γ classical vs Th2/IL-4+IL-13 alternative activation, ending in scarring, amyloidosis, or the HCV→HCC and H pylori→gastric-adenocarcinoma chains.",
  },
  mechanisms: [
    {
      id: "phase-relay-map",
      title: "The phase relay: cleanup, build, strengthen — with a cofactor at each gate",
      context: "The phases of wound healing table (book 212)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A wound — the clot forms and the acute response arrives",
            sublabel: "Input — the injury that the P8 acute-inflammation panel answers; the healing clock starts at the wound.",
            variant: "input",
          },
          {
            id: "inflammatory",
            label: "PHASE 1 — INFLAMMATORY (up to 3 days): the cleanup",
            sublabel: "Platelets, neutrophils, macrophages: clot formation; ↑ vessel permeability and neutrophil migration into tissue; macrophages clear debris 2 days later — the acute panel's cellular sequence compressed into three days.",
            variant: "process",
          },
          {
            id: "proliferative",
            label: "PHASE 2 — PROLIFERATIVE (day 3-weeks): the build",
            sublabel: "Fibroblasts, myofibroblasts, endothelial cells, keratinocytes, macrophages: granulation tissue and type III collagen deposition, angiogenesis, epithelial proliferation, clot dissolution, wound contraction (myofibroblasts) — the phase that vitamin C and copper deficiency delays.",
            variant: "process",
          },
          {
            id: "remodeling",
            label: "PHASE 3 — REMODELING (1 week-6+ months): the strengthening swap",
            sublabel: "Fibroblasts: type III collagen replaced by type I collagen with ↑ tensile strength; collagenases (requiring zinc) break down type III — the phase that zinc deficiency delays.",
            variant: "process",
          },
          {
            id: "output",
            label: "The healed wound — and the three cofactor lockouts",
            sublabel: "Output — a strong type-I scar; but vitamin C or copper deficiency stalls the build (collagen synthesis), and zinc deficiency stalls the swap (collagenase function) — three named deficiency → delayed-healing routes.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "inflammatory", label: "day 0-3" },
          { from: "inflammatory", to: "proliferative", label: "day 3+" },
          { from: "proliferative", to: "remodeling", label: "1 week+" },
          { from: "remodeling", to: "output", label: "months" },
        ],
      },
    },
    {
      id: "chronic-stage-setter",
      title: "The chronic stage-setter: mononuclear infiltration with the Th1/Th2 macrophage fork",
      context: "The Chronic inflammation block (book 212)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An acute response that cannot finish — the stimulus persists",
            sublabel: "Input — persistent infections (TB, T pallidum, certain fungi and viruses → type IV hypersensitivity), autoimmune diseases, prolonged toxic exposure (silica), foreign material.",
            variant: "input",
          },
          {
            id: "infiltrate",
            label: "THE MONONUCLEAR SHIFT — macrophages, lymphocytes, plasma cells",
            sublabel: "Prolonged inflammation with simultaneous tissue destruction and repair (including angiogenesis and fibrosis); macrophages are the dominant cells, and the macrophage–T-cell interaction drives the chronicity.",
            variant: "process",
          },
          {
            id: "fork",
            label: "THE T-CELL FORK — which macrophage program runs",
            sublabel: "Th1 cells secrete IFN-γ → macrophage CLASSICAL activation (proinflammatory); Th2 cells secrete IL-4 and IL-13 → macrophage ALTERNATIVE activation (repair and anti-inflammatory) — the same cell, two programs.",
            variant: "process",
          },
          {
            id: "output",
            label: "THE OUTCOMES — scarring, amyloidosis, neoplastic transformation",
            sublabel: "Output — the printed oncogenesis chains: chronic HCV infection → chronic inflammation → hepatocellular carcinoma; Helicobacter pylori infection → chronic gastritis → gastric adenocarcinoma.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "infiltrate", label: "persists" },
          { from: "infiltrate", to: "fork", label: "T cells steer" },
          { from: "fork", to: "output", label: "years of repair" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "wound-healing-phase-map",
      title: "The mediator and phase map (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source page (book 212 — the chronic inflammation block, the tissue mediators table, and the phases table): the chronic-inflammation stage-setter (the definition with the simultaneous destruction-and-repair rule, the stimuli with the type IV hypersensitivity route, the Th1/IFN-γ classical vs Th2/IL-4+IL-13 alternative macrophage-activation fork, and the outcomes with both oncogenesis chains); the six tissue mediators with their verbatim roles (FGF and VEGF the angiogenesis drivers, TGF-β the angiogenesis-plus-fibrosis molecule, PDGF's three-line role from activated platelets and macrophages, the metalloproteinases, and EGF via EGFR/ErbB1); and the three-phase relay with the effector cells, the verbatim characteristics, and the two highlighted deficiency lockouts (vitamin C and copper delaying the proliferative phase; zinc delaying the remodeling phase).",
      notice:
        "Census (pdfimages + VLM): NO raster images on this page — the entire page is pure text (the chronic inflammation block and the two wound-healing tables); no margin notes or mnemonics print anywhere (VLM census confirmed). The registry visual is an original KYP adaptation, not a reproduction; the tables are carried verbatim in this note's blocks; the KYP memory layer stays original.",
    },
    {
      kind: "table",
      title: "Book 212 — the chronic inflammation block (carried verbatim)",
      intro: "The stage-setter above the wound tables, as printed.",
      columns: ["ROW", "VERBATIM — book 212"],
      rows: [
        [
          "THE DEFINITION",
          "Prolonged inflammation characterized by mononuclear infiltration (macrophages, lymphocytes, plasma cells), which leads to simultaneous tissue destruction and repair (including angiogenesis and fibrosis). May be preceded by acute inflammation.",
        ],
        [
          "STIMULI",
          "Persistent infections (eg, TB, T pallidum, certain fungi and viruses) → type IV hypersensitivity, autoimmune diseases, prolonged exposure to toxic agents (eg, silica) and foreign material.",
        ],
        [
          "MEDIATORS",
          "Macrophages are the dominant cells. Interaction of macrophages and T cells → chronic inflammation. ▘ Th1 cells secrete IFN-γ → macrophage classical activation (proinflammatory) ▘ Th2 cells secrete IL-4 and IL-13 → macrophage alternative activation (repair and anti-inflammatory)",
        ],
        [
          "OUTCOMES",
          "Scarring, amyloidosis, and neoplastic transformation (eg, chronic HCV infection → chronic inflammation → hepatocellular carcinoma; Helicobacter pylori infection → chronic gastritis → gastric adenocarcinoma).",
        ],
      ],
      caption:
        "The mononuclear shift with its T-cell steering fork and its three long-term exits — including the two printed infection-to-cancer chains that make chronic inflammation an oncologic risk factor.",
    },
    {
      kind: "table",
      title: "Book 212 — the tissue mediators table (carried verbatim, all six rows)",
      intro: "The molecular toolkit of repair, as printed.",
      columns: ["MeDIATOR (verbatim)", "ROLe (verbatim)"],
      rows: [
        ["FGF", "Stimulates angiogenesis"],
        ["TGF-β", "Angiogenesis, fibrosis"],
        ["VEGF", "Stimulates angiogenesis"],
        [
          "PDGF",
          "Secreted by activated platelets and macrophages; induces vascular remodeling and smooth muscle cell migration; stimulates fibroblast growth for collagen synthesis",
        ],
        ["Metalloproteinases", "Tissue remodeling"],
        ["EGF", "Stimulates cell growth via tyrosine kinases (eg, EGFR/ErbB1)"],
      ],
      caption:
        "Three angiogenesis drivers (FGF, VEGF, and TGF-β — the last also fibrosing), the platelet/macrophage-derived PDGF with its three-part role, the matrix-remodeling metalloproteinases, and EGF growing epithelium through the EGFR/ErbB1 tyrosine kinase.",
    },
    {
      kind: "table",
      title: "Book 212 — the phases of wound healing (carried verbatim, with both deficiency notes)",
      intro: "The timed relay, as printed — cells, characteristics, and cofactors.",
      columns: ["PHASe Of WOUND HeALING", "effeCTOR CeLLS", "CHARACTeRISTICS"],
      rows: [
        [
          "Inflammatory (up to 3 days after wound)",
          "Platelets, neutrophils, macrophages",
          "Clot formation, ↑ vessel permeability and neutrophil migration into tissue; macrophages clear debris 2 days later",
        ],
        [
          "Proliferative (day 3-weeks after wound)",
          "Fibroblasts, myofibroblasts, endothelial cells, keratinocytes, macrophages",
          "Deposition of granulation tissue and type III collagen, angiogenesis, epithelial cell proliferation, dissolution of clot, and wound contraction (mediated by myofibroblasts). Delayed second phase of wound healing in vitamin C and copper deficiency",
        ],
        [
          "Remodeling (1 week-6+ months after wound)",
          "Fibroblasts",
          "Type III collagen replaced by type I collagen, ↑ tensile strength of tissue. Collagenases (require zinc to function) break down type III collagen. Zinc deficiency → delayed wound healing",
        ],
      ],
      caption:
        "The relay in one read: clean (clot, neutrophils, macrophages) → build (granulation tissue, type III collagen, contraction — the vitamin C and copper phase) → strengthen (type III swapped for type I by zinc-requiring collagenases — the zinc phase).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 6-year-old boy with a history of recurrent furuncles has a 2-cm leg laceration sutured in the emergency department; his mother notes that his wounds always heal slowly with fragile scars. He has bleeding gums and corkscrew hairs on examination; a wound biopsy at 3 weeks shows scant granulation tissue and defective collagen cross-linking.",
        discriminator: "Vitamin C deficiency delaying the proliferative phase — the collagen-synthesis cofactor lockout (with copper as the companion deficiency)",
        concept: "The build-phase lockout",
        answer:
          "The proliferative phase (day 3-weeks) — the deposition of granulation tissue and type III collagen, angiogenesis, epithelial proliferation, clot dissolution, and myofibroblast contraction — is the 'delayed second phase of wound healing in vitamin C and copper deficiency.' Vitamin C is the cofactor for the hydroxylation steps of collagen synthesis (its absence also producing the bleeding gums and corkscrew hairs of scurvy), and copper is the cofactor for lysyl oxidase cross-linking; either deficiency yields the fragile, slowly granulating wound described here.",
      },
      {
        stem: "A 71-year-old man with a decades-long history of chronic hepatitis C cirrhosis develops weight loss and right upper quadrant pain; imaging shows a 4-cm liver mass with elevated AFP.",
        discriminator: "Neoplastic transformation as a chronic-inflammation outcome — the printed HCV → chronic inflammation → hepatocellular carcinoma chain",
        concept: "The oncogenesis outcome",
        answer:
          "The chronic inflammation OUTCOMES row names scarring, amyloidosis, and neoplastic transformation, with HCV as the printed example: chronic HCV infection → chronic inflammation → hepatocellular carcinoma. Decades of mononuclear infiltration with simultaneous destruction and repair — the macrophage-T-cell interaction, the reparative proliferation — cumulate in the malignancy; H pylori's parallel chain runs chronic gastritis → gastric adenocarcinoma.",
      },
      {
        stem: "A wound at 6 weeks shows increasing tensile strength on serial testing as the biopsy's type III collagen fibers are gradually replaced by thicker type I fibers.",
        discriminator: "The remodeling phase — type III replaced by type I collagen via zinc-requiring collagenases",
        concept: "The strengthening swap",
        answer:
          "The remodeling phase (1 week-6+ months, fibroblasts as the effector cells) is the swap: collagenases break down type III collagen and fibroblasts lay down type I, raising the tensile strength of the tissue. The collagenases require zinc to function — the third printed deficiency route (zinc deficiency → delayed wound healing), alongside vitamin C and copper in the proliferative phase.",
      },
    ],
    traps: [
      {
        a: "Vitamin C/copper deficiency (proliferative lockout)",
        b: "Zinc deficiency (remodeling lockout)",
        whyConfused: "All three are 'delayed wound healing' deficiencies on the same page",
        keyDifference: "Vitamin C and copper stall the PROLIFERATIVE phase (the delayed second phase — collagen synthesis and cross-linking, the granulation build); zinc stalls the REMODELING phase (the collagenases that break down type III require zinc to function)",
        clue: "Scurvy stigmata (bleeding gums, corkscrew hairs) or a granulation defect → vitamin C/copper; a slow type-III-to-type-I swap or a collagenase question → zinc",
      },
      {
        a: "Type III collagen",
        b: "Type I collagen",
        whyConfused: "Both appear in the same healing wound",
        keyDifference: "Type III is the PROLIFERATIVE phase's initial granulation-tissue collagen; type I is the REMODELING phase's replacement with ↑ tensile strength — the wound trades the fast weak scaffold for the slow strong one",
        clue: "Early wound (granulation tissue) → type III; mature scar (tensile strength) → type I; the swap enzyme (collagenase) needs zinc",
      },
      {
        a: "Th1/IFN-γ classical activation",
        b: "Th2/IL-4+IL-13 alternative activation",
        whyConfused: "Both are macrophage programs in chronic inflammation",
        keyDifference: "Th1 cells secrete IFN-γ → macrophage CLASSICAL activation (proinflammatory — the angry microbicide); Th2 cells secrete IL-4 and IL-13 → macrophage ALTERNATIVE activation (repair and anti-inflammatory — the builder)",
        clue: "A question about macrophage polarization in chronic inflammation: infection-killing context → Th1/IFN-γ/classical; repair/fibrosis context → Th2/IL-4+IL-13/alternative",
      },
      {
        a: "PDGF",
        b: "VEGF",
        whyConfused: "Both are growth factors active in healing",
        keyDifference: "VEGF stimulates angiogenesis (as does FGF, and TGF-β adds fibrosis); PDGF is secreted by ACTIVATED PLATELETS AND MACROPHAGES and induces vascular remodeling, smooth muscle cell migration, and fibroblast growth for collagen synthesis — the degranulating-clot factor",
        clue: "Which source the question names: the vessel-sprouting question → VEGF/FGF; the platelet-derived, fibroblast-growing question → PDGF",
      },
    ],
    pivots: [
      {
        lookAlike: "A delayed-healing vignette — which cofactor, which phase?",
        differentiator: "Three lockouts: vitamin C and copper → the PROLIFERATIVE (second) phase (granulation tissue, type III collagen); zinc → the REMODELING phase (collagenases, the type III-to-I swap)",
        correctPath: "Match the deficiency to the phase it stalls: scurvy signs or a granulation defect names vitamin C/copper; a collagenase or maturation defect names zinc",
      },
      {
        lookAlike: "A growth factor named in a stem — what is its job?",
        differentiator: "The toolkit: FGF and VEGF grow vessels; TGF-β grows vessels AND fibroses; PDGF (platelet/macrophage-derived) remodels vessels, migrates smooth muscle, and grows fibroblasts for collagen; metalloproteinases remodel tissue; EGF grows cells through EGFR/ErbB1",
        correctPath: "Route by the job description in the answer choices: angiogenesis → FGF/VEGF; fibrosis → TGF-β; the platelet-derived triple role → PDGF; matrix turnover → metalloproteinases; epithelial tyrosine-kinase growth → EGF",
      },
    ],
    miniCase: {
      vignette:
        "A 58-year-old man with type 2 diabetes and heavy alcohol use undergoes surgical debridement of a diabetic foot ulcer. His medications include a thiazide diuretic, and his diet consists largely of canned soup, white bread, and vodka. Over the following 6 weeks the ulcer base stays pale and flat with minimal granulation tissue, the wound edges fail to contract, and a repeat debridement at 6 weeks shows disorganized, poorly cross-linked collagen with weak tensile strength on the surgeon's suture-test. He also has perifollicular hemorrhages and corkscrew hairs on his forearms, bleeding gums, and anemia. Trace element studies are sent.",
      question:
        "Which phase of wound healing is primarily failing, which two cofactors are missing, and what should the trace element studies and the collagen analysis show?",
      options: [
        {
          label: "The proliferative phase is failing — vitamin C and copper deficiency: poor granulation tissue and defective type III collagen synthesis/cross-linking, with low vitamin C and low serum copper (the printed 'delayed second phase of wound healing')",
          text: "The build phase lacks its cofactors: no granulation, no cross-linking.",
          correct: true,
          why: "Correct on all three layers. (1) The PHASE: the pale, flat base with minimal granulation tissue and non-contracting edges is the PROLIFERATIVE phase failing — the deposition of granulation tissue and type III collagen, angiogenesis, epithelial proliferation, and myofibroblast-mediated contraction that define day 3-weeks healing. (2) The COFACTORS: the printed note is verbatim 'Delayed second phase of wound healing in vitamin C and copper deficiency' — vitamin C as the collagen-hydroxylation cofactor (its absence producing the perifollicular hemorrhages, corkscrew hairs, bleeding gums, and anemia of scurvy, exactly this patient's stigmata), copper as the lysyl-oxidase cross-linking cofactor (a known companion deficiency in malnourished alcoholics on a tea-and-toast-like diet). (3) The STUDIES: low or undetectable vitamin C levels and low serum copper (with low ceruloplasmin), and a collagen analysis showing poorly hydroxylated, poorly cross-linked, weakly tensile type III fibers — the disorganized weak collagen the surgeon felt.",
        },
        {
          label: "The remodeling phase is failing — zinc deficiency: the collagenases cannot break down type III collagen, so tensile strength never rises",
          text: "It is the swap that is broken, not the build.",
          why: "Wrong phase and wrong cofactor: zinc deficiency is the REMODELING-phase lockout — the collagenases require zinc to function, and their failure leaves type III collagen un-replaced. But this patient's wound shows a BUILD failure (no granulation tissue, no contraction — the proliferative hallmarks) plus the scurvy stigmata (perifollicular hemorrhages, corkscrew hairs, bleeding gums) that name vitamin C, with the malnutrition that also threatens copper. The suture-test weakness reflects defective collagen synthesis, not a failure to swap it.",
        },
        {
          label: "The inflammatory phase is failing — neutrophil deficiency from the diabetes, so debris is never cleared",
          text: "The cleanup never finished, so nothing downstream could start.",
          why: "Wrong phase: the wound is at 6 WEEKS — long past the inflammatory phase (up to 3 days: clot formation, ↑ permeability, neutrophil migration, macrophages clearing debris 2 days later). A diabetic neutrophil problem would produce infection and persistent debris, but the stem's findings are the granulation-and-collagen failure of the second phase, with the scurvy signs naming the cofactor.",
        },
        {
          label: "This is chronic inflammation with the Th2 alternative-activation program over-fibrosing the wound",
          text: "The macrophage fork went full repair and scarred everything shut.",
          why: "Wrong mechanism: Th2-driven IL-4/IL-13 alternative activation would push repair and fibrosis — the opposite of this patient's pale, non-granulating, non-contracting wound. Chronic inflammation's mononuclear infiltration is a histologic state, not a cofactor deficiency; the stem's vitamin-C stigmata and the malnutrition point to the substrate problem, not the program problem.",
        },
        {
          label: "PDGF deficiency from platelet dysfunction — the platelet-derived growth factor is absent so fibroblasts never grow",
          text: "The clot's growth-factor cargo never arrived.",
          why: "Wrong molecule: PDGF is secreted by activated platelets and macrophages (inducing vascular remodeling, smooth muscle migration, and fibroblast collagen growth) — but a PDGF-specific failure would not produce the systemic scurvy stigmata (perifollicular hemorrhages, corkscrew hairs, bleeding gums, anemia) that this patient displays, and the exam's printed deficiency note for wound delay is the vitamin C/copper (proliferative) and zinc (remodeling) trio. Diabetic platelet dysfunction is real but is not this stem's lesion.",
        },
      ],
      reasoning:
        "The stem walks the wound-healing table in order. (1) The TIMELINE: 6 weeks of failure puts the lesion squarely in the PROLIFERATIVE phase (day 3-weeks) — the granulation build. (2) The FINDINGS: pale flat base with minimal granulation tissue and non-contracting edges are the phase's defining outputs failing (deposition of granulation tissue and type III collagen; wound contraction mediated by myofibroblasts), and the weak, poorly cross-linked collagen on the suture-test is the substrate consequence. (3) The COFACTOR NOTE, printed verbatim on the page: 'Delayed second phase of wound healing in vitamin C and copper deficiency' — vitamin C for collagen hydroxylation (with the perifollicular hemorrhages, corkscrew hairs, bleeding gums, and anemia of scurvy as this patient's systemic proof), copper for lysyl-oxidase cross-linking (the malnourished alcoholic's companion risk). (4) The DIFFERENTIATORS: zinc deficiency is the remodeling-phase lockout (the collagenases), the inflammatory phase ends at 3 days (not a 6-week lesion), Th2 alternative activation would over-repair rather than under-build, and PDGF failure would not carry the scurvy stigmata. The phase-cofactor pairing — build needs C and copper, swap needs zinc — closes the case.",
    },
  },
  mnemonics: [
    {
      code: "CLEAN BUILD STRENGTHEN",
      meaning: "The three phases in order: INFLAMMATORY (up to 3 days — platelets, neutrophils, macrophages; clot, ↑ permeability, neutrophil migration; macrophages clear debris 2 days later), PROLIFERATIVE (day 3-weeks — fibroblasts, myofibroblasts, endothelial cells, keratinocytes, macrophages; granulation tissue + type III collagen, angiogenesis, epithelial proliferation, clot dissolution, myofibroblast contraction), REMODELING (1 week-6+ months — fibroblasts; type III → type I, ↑ tensile strength, zinc-requiring collagenases).",
      memorizes: "The phases table with cells and characteristics",
      whenToUse: "Any wound-healing timeline or phase-content question",
      clinical: "Three days of cleanup, weeks of building, months of strengthening.",
    },
    {
      code: "C AND COPPER BUILD, ZINC SWAPS",
      meaning: "The three deficiency lockouts: vitamin C and copper deficiency delay the SECOND (proliferative) phase of wound healing — the collagen synthesis and cross-linking cofactors; zinc deficiency delays the remodeling swap — the collagenases that break down type III collagen require zinc to function.",
      memorizes: "Which deficiency stalls which phase",
      whenToUse: "Any 'delayed wound healing' deficiency question",
      clinical: "The scurvy wound and the zinc-deficient swap: build-phase cofactors against the swap-phase enzyme cofactor.",
    },
    {
      code: "THREE GROW VESSELS, PDGF BUILDS",
      meaning: "The mediator toolkit: FGF, VEGF, and TGF-β all drive angiogenesis (TGF-β adds fibrosis); PDGF — secreted by activated platelets and macrophages — induces vascular remodeling and smooth muscle cell migration and stimulates fibroblast growth for collagen synthesis; metalloproteinases remodel tissue; EGF stimulates cell growth via tyrosine kinases (EGFR/ErbB1).",
      memorizes: "The tissue mediators table",
      whenToUse: "Any growth-factor role question in healing or fibrosis",
      clinical: "The granulation bed's vessel growers, the clot's fibroblast feeder, the matrix movers, and the epithelial mitogen.",
    },
    {
      code: "ANGER VS REPAIR, SAME MACROPHAGE",
      meaning: "The chronic-inflammation T-cell fork: Th1 cells secrete IFN-γ → macrophage CLASSICAL activation (proinflammatory); Th2 cells secrete IL-4 and IL-13 → macrophage ALTERNATIVE activation (repair and anti-inflammatory) — the dominant cell of chronic inflammation steered by its T-cell companion between anger and repair.",
      memorizes: "The mediators fork of the chronic block",
      whenToUse: "Any macrophage-polarization or chronic-inflammation-cytokine question",
      clinical: "The same macrophage that kills (classical, IFN-γ) can also build (alternative, IL-4/IL-13) — the fork that decides whether chronic inflammation destroys or repairs.",
    },
  ],
  rapidReview: {
    s30: [
      "Chronic inflammation: prolonged, mononuclear infiltration (macrophages, lymphocytes, plasma cells), simultaneous tissue destruction and repair (angiogenesis, fibrosis); may be preceded by acute",
      "Chronic stimuli: persistent infections (TB, T pallidum, certain fungi and viruses) → type IV hypersensitivity; autoimmune; toxic agents (silica); foreign material",
      "Chronic mediators: macrophages dominant; Th1 → IFN-γ → classical activation (proinflammatory); Th2 → IL-4 and IL-13 → alternative activation (repair, anti-inflammatory)",
      "Chronic outcomes: scarring, amyloidosis, neoplastic transformation — chronic HCV → hepatocellular carcinoma; H pylori → chronic gastritis → gastric adenocarcinoma",
      "Tissue mediators: FGF (angiogenesis); TGF-β (angiogenesis, fibrosis); VEGF (angiogenesis); PDGF (activated platelets and macrophages; vascular remodeling, smooth muscle migration, fibroblast collagen growth); metalloproteinases (tissue remodeling); EGF (cell growth via tyrosine kinases, EGFR/ErbB1)",
      "Inflammatory phase (up to 3 days): platelets, neutrophils, macrophages — clot formation, ↑ vessel permeability, neutrophil migration; macrophages clear debris 2 days later",
      "Proliferative phase (day 3-weeks): fibroblasts, myofibroblasts, endothelial cells, keratinocytes, macrophages — granulation tissue + type III collagen, angiogenesis, epithelial proliferation, clot dissolution, wound contraction (myofibroblasts); delayed in vitamin C and copper deficiency",
      "Remodeling phase (1 week-6+ months): fibroblasts — type III → type I collagen, ↑ tensile strength; collagenases require zinc; zinc deficiency → delayed wound healing",
    ],
    m3: [
      "CLEAN BUILD STRENGTHEN — the phase relay with its cells and clocks",
      "C AND COPPER BUILD, ZINC SWAPS — the three deficiency lockouts by phase",
      "THREE GROW VESSELS, PDGF BUILDS — FGF/VEGF/TGF-β for angiogenesis; PDGF's platelet-derived triple role",
      "ANGER VS REPAIR, SAME MACROPHAGE — Th1/IFN-γ classical vs Th2/IL-4+IL-13 alternative activation",
      "Type III is the build, type I is the strength — the remodeling swap trades the fast weak scaffold for the slow strong one",
    ],
    m10: [
      "The two printed oncogenesis chains: HCV → chronic inflammation → hepatocellular carcinoma; H pylori → chronic gastritis → gastric adenocarcinoma",
      "Macrophages clear debris 2 days later (the inflammatory phase's cleanup detail) and predominate in chronic inflammation's late stages (peak 2-3 days, the P8 companion note)",
      "Wound contraction is mediated by myofibroblasts — the proliferative phase's pull",
      "EGF's receptor is EGFR/ErbB1 — the wound-healing table's oncology crossover (the HER-family tyrosine kinase)",
      "TGF-β appears on three pages of this banner: chronic inflammation's fibrosis, the tissue mediators' angiogenesis-plus-fibrosis, and P6's chronic radiation dermatitis (fibrosis due to ↑ TGF-β)",
    ],
  },
  recall: [
    {
      q: "The chronic inflammation block verbatim — all four rows.",
      a: "DEFINITION: Prolonged inflammation characterized by mononuclear infiltration (macrophages, lymphocytes, plasma cells), which leads to simultaneous tissue destruction and repair (including angiogenesis and fibrosis). May be preceded by acute inflammation. STIMULI: Persistent infections (eg, TB, T pallidum, certain fungi and viruses) → type IV hypersensitivity, autoimmune diseases, prolonged exposure to toxic agents (eg, silica) and foreign material. MEDIATORS: Macrophages are the dominant cells. Interaction of macrophages and T cells → chronic inflammation. Th1 cells secrete IFN-γ → macrophage classical activation (proinflammatory); Th2 cells secrete IL-4 and IL-13 → macrophage alternative activation (repair and anti-inflammatory). OUTCOMES: Scarring, amyloidosis, and neoplastic transformation (eg, chronic HCV infection → chronic inflammation → hepatocellular carcinoma; Helicobacter pylori infection → chronic gastritis → gastric adenocarcinoma).",
    },
    {
      q: "The tissue mediators table verbatim — all six rows.",
      a: "FGF — stimulates angiogenesis. TGF-β — angiogenesis, fibrosis. VEGF — stimulates angiogenesis. PDGF — secreted by activated platelets and macrophages; induces vascular remodeling and smooth muscle cell migration; stimulates fibroblast growth for collagen synthesis. Metalloproteinases — tissue remodeling. EGF — stimulates cell growth via tyrosine kinases (eg, EGFR/ErbB1).",
    },
    {
      q: "The inflammatory phase verbatim.",
      a: "Inflammatory (up to 3 days after wound): Platelets, neutrophils, macrophages. Clot formation, ↑ vessel permeability and neutrophil migration into tissue; macrophages clear debris 2 days later.",
    },
    {
      q: "The proliferative phase verbatim.",
      a: "Proliferative (day 3-weeks after wound): Fibroblasts, myofibroblasts, endothelial cells, keratinocytes, macrophages. Deposition of granulation tissue and type III collagen, angiogenesis, epithelial cell proliferation, dissolution of clot, and wound contraction (mediated by myofibroblasts). Delayed second phase of wound healing in vitamin C and copper deficiency.",
    },
    {
      q: "The remodeling phase verbatim.",
      a: "Remodeling (1 week-6+ months after wound): Fibroblasts. Type III collagen replaced by type I collagen, ↑ tensile strength of tissue. Collagenases (require zinc to function) break down type III collagen. Zinc deficiency → delayed wound healing.",
    },
  ],
  related: [
    {
      title: "Acute Inflammation: Cardinal Signs & Acute-Phase Reactants",
      topicId: "acute-inflammation",
      note: "The wound's first three days ARE the acute panel compressed: clot formation, ↑ vessel permeability, neutrophil migration — and the acute panel's fifth outcome (chronic inflammation via APC → CD4+ Th cells) is this page's opening block.",
    },
    {
      title: "Leukocyte Extravasation & Cytokines",
      topicId: "leukocyte-trafficking",
      note: "The inflammatory phase's neutrophil migration and macrophage arrival use the four-station cascade — and the chronic block's Th1/Th2 fork is the same T-cell-macrophage conversation that the cytokines page conducts.",
    },
    {
      title: "Amyloidosis: The Deposition Diseases",
      topicId: "amyloidosis",
      note: "Chronic inflammation's second printed outcome is amyloidosis — the AA route: prolonged serum amyloid A elevation (the P8 positive reactant) depositing as the fibril this page's sibling describes.",
    },
    {
      title: "Calcification & Radiation Injury",
      topicId: "calcification-radiation-injury",
      note: "TGF-β ties the banner together: the fibrosis driver of the tissue mediators table is the same molecule that fibroses chronic radiation dermatitis — one cytokine, two pages, one scar program.",
    },
  ],
  crossLinks: [
    {
      subject: "Oncology (inflammation-driven carcinogenesis)",
      connection:
        "The two printed chains — chronic HCV → hepatocellular carcinoma and H pylori → chronic gastritis → gastric adenocarcinoma — make chronic inflammation a mechanism of cancer development, the wound-healing page's link to the neoplasia section.",
    },
    {
      subject: "Nutrition (the cofactor lockouts)",
      connection:
        "Vitamin C (collagen hydroxylation — scurvy), copper (lysyl oxidase cross-linking), and zinc (collagenase function) are the three deficiency → delayed-healing routes — the nutrition chapter's minerals and vitamins operating inside the wound tables.",
    },
    {
      subject: "Immunology (the Th1/Th2 fork)",
      connection:
        "Classical (IFN-γ, proinflammatory) versus alternative (IL-4/IL-13, repair) macrophage activation is the Th1/Th2 dichotomy running the chronic-inflammation block — the immunology T-cell chapter applied to a histologic state.",
    },
    {
      subject: "Pharmacology (growth-factor therapeutics)",
      connection:
        "PDGF gel is a licensed therapy for diabetic neuropathic ulcers — the tissue mediators table's platelet-derived factor turned into a drug, and EGF's EGFR/ErbB1 is the oncology target (the HER-family kinases) growing epithelium in wounds and tumors alike.",
    },
  ],
};
