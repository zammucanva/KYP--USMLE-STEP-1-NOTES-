import type { KypUsMLENote } from "../types";

// Immunology — Immune Responses (E-batch 33).
// Source: First Aid 2026, Part 1 pdf 130 / book 108
// (Cell surface proteins; T cells; Helper/Cytotoxic/Regulatory T cells;
//  B cells; NK cells; Macrophages; Hematopoietic stem cells)

export const cdMarkers: KypUsMLENote = {
  id: "cd-markers",
  title: "Cell Surface Proteins: The CD Marker Map",
  subtitle:
    "The identification codes every flow panel, drug, and vignette is written in. All T cells carry TCR (binding the antigen-MHC complex), CD3 (associated with TCR for signal transduction), and CD28 (binding B7 on the APC). Helper T cells add CD4, CD40L, and the HIV coreceptors CXCR4/CCR5; cytotoxic T cells add CD8; regulatory T cells add CD4 and CD25. B cells carry surface Ig (binding antigen), CD19, CD20, CD21 (the receptor for Epstein-Barr virus), CD40, MHC II, and B7 (CD80/86) — full APC machinery. NK cells carry CD16 (binding the Fc of IgG — the ADCC port) and CD56 (a suggestive NK marker). Macrophages carry CD14 (the receptor for PAMPs such as LPS), CD40, CCR5, MHC II, B7, and Fc and C3b receptors for enhanced phagocytosis. Hematopoietic stem cells carry CD34. These codes are simultaneously the flow-cytometry reading skill (CD3+CD4+ = helper; CD19/20+ = B cell; CD56+CD16+CD3− = NK; CD34+ = stem cell) and the drug-target map (anti-CD3 for transplant rejection, rituximab anti-CD20 for B-cell disease, basiliximab anti-CD25 for T-cell blockade).",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Immune Responses",
  pilotCategory: "Immune Responses — CD marker roster by cell (TCR/CD3/CD28, CD4/CD40L/CXCR4/CCR5, CD8, CD25, CD19/20/21, CD16/56, CD14/CD40, CD34), flow-cytometry identification, drug targets",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 108 (Cell surface proteins)",
  tags: [
    "cell surface proteins",
    "CD markers",
    "CD3",
    "TCR",
    "CD28",
    "B7",
    "CD4",
    "CD40L",
    "CXCR4",
    "CCR5",
    "HIV coreceptors",
    "CD8",
    "CD25",
    "regulatory T cells",
    "CD19",
    "CD20",
    "CD21",
    "Epstein-Barr virus receptor",
    "CD40",
    "MHC II",
    "CD80",
    "CD86",
    "B cells",
    "CD16",
    "Fc receptor",
    "ADCC",
    "CD56",
    "NK cells",
    "CD14",
    "PAMPs",
    "LPS receptor",
    "macrophages",
    "C3b receptors",
    "phagocytosis",
    "CD34",
    "hematopoietic stem cells",
    "flow cytometry",
    "rituximab",
    "anti-CD20",
    "muromonab",
    "anti-CD3",
    "basiliximab",
    "anti-CD25",
  ],
  core: {
    what: "T cells (all) carry TCR, which binds the antigen-MHC complex; CD3, associated with TCR for signal transduction; and CD28, which binds B7 on the APC. Helper T cells carry CD4, CD40L, and CXCR4/CCR5 (coreceptors for HIV). Cytotoxic T cells carry CD8. Regulatory T cells carry CD4 and CD25. B cells carry surface Ig (binds antigen), CD19, CD20, CD21 (receptor for Epstein-Barr virus), CD40, MHC II, and B7 (CD80/86). NK cells carry CD16 (binds Fc of IgG) and CD56 (suggestive marker for NK cells). Macrophages carry CD14 (receptor for PAMPs, eg, LPS), CD40, CCR5, MHC II, B7, and Fc and C3b receptors (enhanced phagocytosis). Hematopoietic stem cells carry CD34.",
    why: "CD markers are the immune system's part numbers, and the exam uses them in three ways. First, identification: every flow-cytometry stem is this page read in dots — a leukemia with CD19/CD20 positivity is B-cell derived; CD3 positivity makes any cell a T cell; CD56/CD16 with CD3 negativity marks NK; CD34 positivity means stem cell (and is what transplant harvests count). Second, mechanism: the markers ARE the machinery from earlier pages — CD3 is the TCR's signal transducer, CD28 is E26's signal-2 receptor, CD40L engages the B-cell/macrophage CD40, CD16 is E23's ADCC port, CD14 is the innate LPS sensor, and CXCR4/CCR5 are the doors HIV uses to enter CD4+ cells (dual-tropic vs CCR5-tropic strains; the CCR5-Δ32 deletion and maraviroc exploit exactly this entry step — KYP bridge). Third, therapy: the map is the target list for biologics — anti-CD3 (muromonab) for steroid-resistant transplant rejection, rituximab (anti-CD20) for CD20+ lymphomas and autoimmune disease, basiliximab (anti-CD25) for transplant induction — each drug named for the marker it blocks.",
    keyIdea: "Read the map cell by cell and notice the shared chassis. ALL T cells: TCR (antigen-MHC reader) + CD3 (the signaling module — no CD3, no T-cell signal) + CD28 (B7 receptor, signal 2). HELPER: add CD4 (MHC II clamp) + CD40L (the handshake) + CXCR4/CCR5 (HIV coreceptors). CYTOTOXIC: add CD8 (MHC I clamp). REGULATORY: CD4 + CD25 (IL-2Rα — the Treg badge from E25). B CELLS: surface Ig (antigen binder) + CD19/CD20 (the B ID pair; rituximab's target) + CD21 (EBV's door) + CD40/MHC II/B7 (full APC machinery — B cells can present AND costimulate). NK: CD16 (Fcγ receptor — ADCC) + CD56 (suggestive marker), notably CD3-NEGATIVE. MACROPHAGES: CD14 (LPS/PAMP sensor) + CD40 + CCR5 + MHC II + B7 + Fc/C3b receptors (opsonophagocytosis) — the professional APC that also eats. HSC: CD34. Flow shortcuts: CD3+CD4+ helper; CD3+CD8+ cytotoxic; CD19/20+ B; CD56+CD16+CD3− NK; CD34+ stem.",
  },
  mechanisms: [
    {
      id: "marker-machinery-mapping",
      title: "Markers are machinery — each CD code is a function from the earlier pages",
      context: "Connecting the marker roster to its immunologic jobs",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A cell presents its surface proteins to the laboratory (or to a pathogen)",
            sublabel: "Input — flow cytometry reads the same codes HIV and biologics exploit.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Signal machinery: TCR binds antigen-MHC; CD3 transduces the signal; CD28 binds B7 (costimulation)",
            sublabel: "Process — the T-cell receptor complex is a reader (TCR) plus ignition (CD3); CD28 is the license port from E26.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Interaction machinery: CD4/CD8 clamp MHC II/I; CD40L engages CD40; CD16 binds IgG Fc; CD14 senses LPS; Fc/C3b receptors drive phagocytosis",
            sublabel: "Process — every intercellular handshake from the chapter is a named surface pair.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Identification and therapy: flow panels name the cell; drugs block the marker (anti-CD3, anti-CD20, anti-CD25); HIV enters via CXCR4/CCR5",
            sublabel: "Output — one map serves diagnostics (flow), therapy (biologics), and pathogenesis (HIV tropism).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "surface read" },
          { from: "s1", to: "s2", label: "pairs engage" },
          { from: "s2", to: "o1", label: "codes applied" },
        ],
        caption:
          "The CD roster is not trivia — it is the chapter's machinery with serial numbers. CD3 is the signal transduction module associated with every TCR: the receptor reads (TCR-antigen-MHC) and CD3 fires the intracellular cascade, which is why anti-CD3 therapy shuts down ALL T-cell activation at once. CD28 and B7 reprise the two-signal gate; CD40L-CD40 reprises the B-cell and macrophage handshakes. CD4 and CD8 are the MHC clamps that define lineage and restriction — and CD4 doubles as HIV's binding site, with CXCR4/CCR5 as the coreceptors that complete entry (macrophage-tropic strains use CCR5, T-tropic strains CXCR4; the CCR5-Δ32 homozygote is resistant). CD16 is the NK cell's Fc port — the ADCC mechanism of E23. CD14 is the macrophage's LPS sensor — the TLR4-adjacent PAMP reader of E20. The B cell's CD21 is Epstein-Barr virus's receptor, which is why EBV infects B cells and why CD21 loss matters in some immunodeficiencies. And the drug map writes itself: rituximab (anti-CD20) deletes B cells; basiliximab (anti-CD25) blocks the IL-2 receptor's alpha chain; muromonab (anti-CD3) deletes T cells. Fluorescence-tagged antibodies against these same markers are what a flow cytometer uses to name a cell.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "cd-marker-map",
      title: "The marker map — eight cells, their codes, and what each code does",
      caption:
        "An original KYP map: eight cell rows (all T cells with TCR/CD3/CD28; helper T with CD4/CD40L/CXCR4-CCR5; cytotoxic T with CD8; regulatory T with CD4/CD25; B cells with Ig/CD19/CD20/CD21-EBV/CD40/MHC II/B7; NK with CD16/CD56; macrophages with CD14/CD40/CCR5/MHC II/B7/Fc-C3b receptors; hematopoietic stem cells with CD34), each marker annotated with its function, plus the drug-target and flow-reading bridge strip.",
      notice:
        "The source is a pure vector marker table; this visual is an original KYP teaching map. FA's printed 'Must be 21 to drink at a Barr' mnemonic is NOT reproduced (KYP originals replace it); drug names are labeled KYP extension.",
    },
    {
      kind: "table",
      title: "Cell surface proteins — verbatim",
      intro: "The source's marker roster, verbatim by cell.",
      columns: ["Cell", "Surface proteins (verbatim)"],
      rows: [
        ["T cells", "TCR (binds antigen-MHC complex), CD3 (associated with TCR for signal transduction), CD28 (binds B7 on APC)."],
        ["Helper T cells", "CD4, CD40L, CXCR4/CCR5 (coreceptors for HIV)."],
        ["Cytotoxic T cells", "CD8."],
        ["Regulatory T cells", "CD4, CD25."],
        ["B cells", "Ig (binds antigen), CD19, CD20, CD21 (receptor for Epstein-Barr virus), CD40, MHC II, B7 (CD80/86)."],
        ["NK cells", "CD16 (binds Fc of IgG), CD56 (suggestive marker for NK cells)."],
        ["Macrophages", "CD14 (receptor for PAMPs [eg, LPS]), CD40, CCR5, MHC II, B7, Fc and C3b receptors (enhanced phagocytosis)."],
        ["Hematopoietic stem cells", "CD34."],
      ],
      caption:
        "Read the shared codes across rows: CD3 defines T lineage (every T cell, including Tregs); CD4 and CD8 split the helper/cytotoxic lineages; CD40 appears on every professional APC (B cells, macrophages) with its ligand on the T cell; MHC II and B7 mark the APC club (B cells, macrophages); CD16 and the Fc/C3b receptors mark the eaters and ADCC effectors; CD34 marks the stem cell; and CXCR4/CCR5 on CD4+ cells are HIV's doors.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The marker-to-drug map and the flow panel (KYP bridge)",
      body: "Every marker on this page is a therapeutic target or a diagnostic handle. Rituximab (anti-CD20) depletes B cells — CD20+ lymphomas, rheumatoid arthritis, pemphigus, MS. Muromonab (anti-CD3, OKT3) deletes all T cells in steroid-resistant transplant rejection — CD3 being the common T-cell ignition. Basiliximab (anti-CD25) blocks the IL-2 receptor α chain on activated T cells in transplant induction. Alemtuzumab (anti-CD52) broadly depletes lymphocytes in MS. HIV therapy exploits the coreceptor row: maraviroc blocks CCR5 (only for CCR5-tropic strains), and the CCR5-Δ32 deletion confers resistance. Flow cytometry reads the same codes diagnostically: CD3+CD4+ (helper), CD3+CD8+ (cytotoxic), CD3+CD4+CD25+FOXP3+ (Treg), CD19/CD20+ (B cell — and their loss identifies X-linked agammaglobulinemia's absent B cells), CD56+CD16+CD3− (NK), CD34+ (stem cells — the harvest count for transplantation).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A lymph node biopsy from a 65-year-old with painless cervical lymphadenopathy shows large cells that flow cytometry identifies as CD19+ CD20+ CD10+; therapy includes a monoclonal antibody against one of these markers.",
        discriminator: "CD19/CD20 positivity = B-cell lineage; anti-CD20 therapy",
        concept: "Rituximab — the CD20 target",
        answer:
          "CD19 and CD20 are B-cell markers; a CD19+/CD20+ tumor is B-cell derived (diffuse large B-cell lymphoma in this age and marker pattern). Rituximab, an anti-CD20 monoclonal antibody, depletes CD20+ B cells — used in CD20+ lymphomas (usually with chemotherapy), and also in autoimmune diseases where B cells drive pathology. The marker map is simultaneously the diagnosis (B lineage) and the therapy's named target.",
      },
      {
        stem: "A 20-year-old man has an HIV viral load that is undetectable despite high-risk exposure for two years; he has never taken antiretrovirals; a gene test shows a homozygous 32-bp deletion in one of his chemokine receptor genes.",
        discriminator: "Repeated exposure without infection + CCR5 deletion",
        concept: "CCR5 — the HIV coreceptor on CD4+ helper cells",
        answer:
          "Helper T cells carry CD4 plus the coreceptors CXCR4 and CCR5; HIV entry requires CD4 plus ONE of these coreceptors. The CCR5-Δ32 homozygous deletion produces non-functional CCR5, blocking entry of CCR5-tropic (M-tropic) strains — the classical 'exposed but uninfected' genotype. Maraviroc, a CCR5 antagonist, mimics the strategy pharmacologically (tropism testing required first); CXCR4-tropic viruses escape it.",
      },
      {
        stem: "A stem cell transplant product's label reports its CD34+ cell count as the quality metric before infusion.",
        discriminator: "CD34 positivity defines the harvestable stem cell",
        concept: "CD34 — the hematopoietic stem cell marker",
        answer:
          "Hematopoietic stem cells carry CD34 — the marker used to enumerate and purify the stem-cell fraction of transplant products (peripheral blood after mobilization, bone marrow, cord blood). The CD34+ count predicts engraftment speed (neutrophil and platelet recovery). Flow cytometry against CD34 turns the marker map into transplant logistics; leukemia immunophenotyping uses the same CD34 positivity to identify blasts of stem-cell origin.",
      },
    ],
    traps: [
      {
        a: "CD3 is found only on helper T cells",
        b: "CD3 is on ALL T cells (helper, cytotoxic, and regulatory)",
        whyConfused: "CD4 and CD8 dominate lineage teaching.",
        keyDifference:
          "CD3 is the signal-transduction module associated with EVERY TCR — helper (CD3+CD4+), cytotoxic (CD3+CD8+), and regulatory (CD3+CD4+CD25+) cells all carry it. That universality is why anti-CD3 therapy (muromonab) shuts down all T-cell activation, and why a 'CD3-negative lymphocyte' with CD56/CD16 is an NK cell, not a T cell.",
        clue: "Any lineage-identification or anti-CD3 question.",
      },
      {
        a: "CD21 is a B-cell activation marker",
        b: "CD21 is the receptor for Epstein-Barr virus",
        whyConfused: "It sits in the B-cell marker list without its viral claim to fame.",
        keyDifference:
          "CD21 (complement receptor 2, the C3d receptor) is best known in this course as EBV's entry receptor — the reason EBV infects B cells and produces the mononucleosis syndrome with atypical lymphocytes (the CD8+ response). The B-cell identity pair for flow is CD19/CD20 (rituximab's target); CD21 is the viral door.",
        clue: "Any EBV tropism or mononucleosis question.",
      },
      {
        a: "Only B cells and dendritic cells express MHC II and B7",
        b: "Macrophages ALSO express MHC II and B7 (they are professional APCs)",
        whyConfused: "B cells and dendritic cells get the APC headline.",
        keyDifference:
          "The macrophage row carries CD40, CCR5, MHC II, B7, plus Fc and C3b receptors — the full APC toolkit on top of CD14 (the LPS/PAMP sensor) and the phagocytic receptors. Macrophages present antigen (E25's loop), costimulate via B7 (E26's signal 2), and eat via Fc/C3b — the professional APC that also digests.",
        clue: "Any 'which cell expresses CD14' or macrophage-APC question.",
      },
    ],
    pivots: [
      {
        lookAlike: "CD4+ vs CD8+ lineage reading on a flow panel",
        differentiator: "The MHC clamp and the company kept",
        correctPath:
          "CD3+CD4+ = helper T (MHC II-restricted; carries CD40L and CXCR4/CCR5 — the HIV-susceptible set; counts collapse in advanced HIV). CD3+CD8+ = cytotoxic T (MHC I-restricted; the perforin/granzyme killer of E25). CD3+CD4+CD25+(FOXP3+) = regulatory (E25's brake). The CD4 count itself is HIV staging (below 200 = AIDS-defining) — the marker map as prognosis.",
      },
      {
        lookAlike: "T-cell vs B-cell marker sets (the lineage question)",
        differentiator: "CD3/TCR/CD28 vs Ig/CD19/CD20/CD21",
        correctPath:
          "T lineage: TCR (antigen-MHC reader), CD3 (signal), CD28 (B7 receptor), with CD4/CD8/CD25 defining subsets. B lineage: surface Ig (antigen binder), CD19/CD20 (the ID pair), CD21 (EBV receptor), plus APC machinery (CD40, MHC II, B7). A tumor with CD19/CD20+ and surface Ig is B-derived (rituximab territory); CD3+ with TCR rearrangement is T-derived. Both lineages share CD40-family interactions — but from opposite sides (CD40 on the APC, CD40L on the T cell).",
      },
    ],
    miniCase: {
      vignette:
        "A 68-year-old man presents with three months of fatigue, night sweats, and a painless cervical mass. Examination reveals a 4-cm rubbery lymph node and splenomegaly without tonsillar or skin involvement. Laboratory studies: LDH elevated; flow cytometry of the node shows a predominant population of large cells that are CD19+, CD20+, and surface-Ig+ (κ restricted), with CD3 and CD56 negative; PET-CT shows widespread nodal uptake. His oncologist initiates chemoimmunotherapy that includes a chimeric monoclonal antibody targeting one of the markers on these cells.",
      question:
        "Which cell surface protein is the monoclonal antibody in this regimen directed against?",
      options: [
        {
          label: "A",
          text: "CD20 — depleting the CD20+ B-cell population",
          correct: true,
          why: "Correct — rituximab, an anti-CD20 chimeric monoclonal antibody, is the backbone of B-cell lymphoma therapy (R-CHOP for diffuse large B-cell lymphoma). The tumor's immunophenotype — CD19+, CD20+, surface Ig with κ restriction, CD3− — establishes B-cell lineage, and CD20 is the therapeutic target on that lineage (also used in follicular lymphoma, and in autoimmune diseases from RA to pemphigus).",
        },
        {
          label: "B",
          text: "CD3 — deleting all T cells",
          why: "Anti-CD3 (muromonab) targets the pan–T-cell marker; this tumor is CD3-negative and CD19/CD20-positive — B-lineage — so anti-CD3 would miss it entirely while causing global T-cell depletion (and cytokine-release syndrome).",
        },
        {
          label: "C",
          text: "CD34 — the hematopoietic stem cell marker",
          why: "Anti-CD34 has no role in lymphoma therapy; CD34 marks stem cells (the transplant-harvest metric). A mature B-cell lymphoma would be CD34-negative — the marker belongs to blasts and harvests, not differentiated lymphomas.",
        },
        {
          label: "D",
          text: "CD16 — the Fc receptor on NK cells",
          why: "CD16 is the NK cell's IgG Fc receptor (the ADDD port). The tumor is CD56-negative and CD19/20-positive — not NK-derived. (Rituximab's therapeutic effect actually recruits CD16-BEARING NK cells for ADCC against the coated lymphoma — E23's mechanism — but the drug's TARGET is CD20.)",
        },
        {
          label: "E",
          text: "CD25 — the IL-2 receptor α chain",
          why: "Anti-CD25 (basiliximab/daclizumab) blocks activated T cells in transplant and MS. The tumor's B phenotype makes it the wrong target; the correct antibody for a CD20+ lymphoma is rituximab.",
        },
      ],
      reasoning:
        "The flow panel is this page read as a diagnostic: CD19+/CD20+/surface-Ig+ with light-chain restriction establishes a mature B-cell neoplasm (κ restriction proves clonality), while CD3 and CD56 negativity exclude T and NK lineages. The therapy question is the marker map inverted: which drug targets a protein ON these cells — CD20 (rituximab). The distractors are the other drugs-from-markers (anti-CD3, anti-CD34 [nonexistent], anti-CD16 [NK, not a target here], anti-CD25), each wrong because its marker is absent from the tumor's phenotype — and one distractor (CD16) tests whether you know the EFFECTOR side of rituximab's ADCC versus its TARGET side.",
    },
  },
  mnemonics: [
    {
      code: "\u201cCD3 is the ignition on every T cell; TCR is the wheel.\u201d",
      meaning:
        "KYP's key for the T-cell receptor complex: the TCR reads the road (binds the antigen-MHC complex) but CD3 turns the engine over (signal transduction) — and because every T cell carries it (helper, cytotoxic, regulatory), anti-CD3 therapy stalls the entire T-cell fleet at once.",
      memorizes: "TCR + CD3 + CD28 on all T cells; anti-CD3's pan–T-cell effect",
      whenToUse: "Any T-cell identification or anti-CD3 question.",
      clinical: "Muromonab (OKT3) for steroid-resistant rejection — with cytokine-release syndrome as the toll.",
    },
    {
      code: "\u201cB cells check in with 19-20-21: ID at 19, therapy at 20, EBV's door at 21.\u201d",
      meaning:
        "KYP's key for the B-cell marker trio: CD19 identifies B lineage on flow, CD20 is the therapy target (rituximab), and CD21 is the Epstein-Barr virus receptor — the reason EBV infects B cells. With surface Ig, CD40, MHC II, and B7, the B cell carries its own APC kit.",
      memorizes: "CD19/CD20/CD21 roles",
      whenToUse: "Any B-cell flow, rituximab, or EBV-tropism question.",
      clinical: "CD19/20 absence on flow = the missing B-cell compartment of X-linked agammaglobulinemia (E36's bridge).",
    },
    {
      code: "\u201cNK flashes CD56 and reads antibodies with CD16 — no CD3 badge.\u201d",
      meaning:
        "KYP's key for NK identification: CD16 is the Fcγ receptor that performs ADCC (E23's antibody-guided kill), CD56 is the suggestive NK marker, and the ABSENCE of CD3 (with the presence of CD56/CD16) is what separates NK cells from T cells on every flow panel.",
      memorizes: "NK = CD16 + CD56 + CD3-negative",
      whenToUse: "Any flow-cytometry or NK-identification question.",
      clinical: "CD56+ CD3− large granular lymphocytes = NK lineage; CD16 also mediates rituximab's ADCC effect.",
    },
  ],
  rapidReview: {
    s30: [
      "All T cells: TCR (binds antigen-MHC) + CD3 (signal transduction) + CD28 (binds B7)",
      "Helper T: CD4, CD40L, CXCR4/CCR5 (HIV coreceptors) · Cytotoxic T: CD8",
      "Regulatory T: CD4, CD25 · B cells: Ig, CD19, CD20, CD21 (EBV receptor), CD40, MHC II, B7",
      "NK: CD16 (Fc of IgG) + CD56 (suggestive) — CD3 negative",
      "Macrophages: CD14 (PAMPs/LPS), CD40, CCR5, MHC II, B7, Fc + C3b receptors · HSC: CD34",
    ],
    m3: [
      "CD3 = pan–T-cell (helper + cytotoxic + Treg); anti-CD3 = pan–T-cell depletion",
      "CD19/CD20 = B-cell ID pair; rituximab targets CD20",
      "CD21 = EBV receptor — why EBV infects B cells",
      "CD14 = LPS/PAMP receptor on macrophages",
      "CXCR4/CCR5 = HIV coreceptors on CD4+ cells (Δ32 resistance; maraviroc blocks CCR5)",
    ],
    m10: [
      "Flow: CD3+CD4+ helper · CD3+CD8+ cytotoxic · CD3+CD4+CD25+FOXP3+ Treg",
      "Flow: CD19/20+ B · CD56+CD16+CD3− NK · CD34+ stem cell",
      "Basiliximab = anti-CD25 (IL-2Rα); alemtuzumab = anti-CD52 (KYP extension)",
      "Macrophages are professional APCs (MHC II + B7) that also eat (Fc/C3b)",
      "CD4 count < 200 = AIDS-defining — the marker map as HIV staging",
    ],
  },
  recall: [
    {
      q: "List the surface proteins of all T cells with their functions.",
      a: "TCR (binds antigen-MHC complex), CD3 (associated with TCR for signal transduction), CD28 (binds B7 on APC).",
    },
    {
      q: "What distinguishes helper, cytotoxic, and regulatory T cells on their surfaces?",
      a: "Helper T cells: CD4, CD40L, CXCR4/CCR5 (coreceptors for HIV). Cytotoxic T cells: CD8. Regulatory T cells: CD4, CD25.",
    },
    {
      q: "List the B-cell surface proteins.",
      a: "Ig (binds antigen), CD19, CD20, CD21 (receptor for Epstein-Barr virus), CD40, MHC II, B7 (CD80/86).",
    },
    {
      q: "What are the NK-cell and macrophage marker sets?",
      a: "NK cells: CD16 (binds Fc of IgG), CD56 (suggestive marker for NK cells). Macrophages: CD14 (receptor for PAMPs, eg, LPS), CD40, CCR5, MHC II, B7, Fc and C3b receptors (enhanced phagocytosis).",
    },
    {
      q: "Which marker defines hematopoietic stem cells, and what is its clinical use?",
      a: "CD34 — used to enumerate and purify the stem-cell fraction of transplant products (peripheral blood after mobilization, marrow, cord blood); the CD34+ count predicts engraftment. (Flow against CD34 also identifies blasts of stem-cell origin in leukemia.)",
    },
  ],
  related: [
    {
      title: "T-Cell Development: Thymic Selection & Subset Lineages",
      topicId: "t-cell-development",
      note: "The CD4/CD8 subsets this map identifies are the thymic school's single-positive outputs.",
    },
    {
      title: "Major Functions of NK, B and T Cells",
      topicId: "nk-b-t-cell-functions",
      note: "CD16 is the ADCC port and CD28/B7 the costimulation pair — the functions behind the codes.",
    },
    {
      title: "Lymphocyte Activation, Peripheral Tolerance & Anergy",
      topicId: "lymphocyte-activation-tolerance",
      note: "CD28-B7 (signal 2), CD40-CD40L, and MHC-peptide-TCR (signal 1) all live on this map.",
    },
    {
      title: "Immunosuppressants",
      topicId: "immunosuppressants",
      note: "The biologics' named targets — anti-CD3, anti-CD20, anti-CD25 — are this page's markers.",
    },
  ],
  crossLinks: [
    {
      subject: "Hematology & Oncology (Lymphoma Immunophenotyping)",
      connection: "Flow cytometry is this page in clinical practice: CD19/20+ B lymphomas (rituximab-eligible), CD3+ T-cell lymphomas, CD56+ NK entries, and CD34+ blasts — the diagnosis and the drug both come from the marker map.",
    },
    {
      subject: "Infectious Disease (HIV)",
      connection: "HIV enters CD4+ cells through CXCR4/CCR5 coreceptors — the CCR5-Δ32 deletion confers resistance, maraviroc blocks CCR5, and the CD4 count itself stages the disease.",
    },
    {
      subject: "Transplantation Medicine",
      connection: "CD34 counts guide stem-cell harvests; anti-CD3 and anti-CD25 biologics manage rejection — the marker map is the transplant laboratory's periodic table.",
    },
    {
      subject: "Microbiology (EBV)",
      connection: "CD21 is EBV's receptor — the molecular reason mononucleosis is a B-cell infection with a CD8+ atypical-lymphocyte response.",
    },
  ],
};
