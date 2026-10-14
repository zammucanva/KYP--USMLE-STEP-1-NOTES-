import type { KypUsMLENote } from "../types";

// Biochemistry — Laboratory Techniques (M4/L1).
// Source: First Aid 2026, Part 1 pdf 74 / book 52
// (Flow cytometry; Microarrays; Enzyme-linked immunosorbent assay)

export const flowCytometryElisa: KypUsMLENote = {
  id: "flow-cytometry-elisa",
  title: "Flow Cytometry & ELISA",
  subtitle:
    "One laser, one cell at a time — how fluorescence-tagged antibodies turn a cell soup into quadrant plots that separate cytotoxic from helper T cells; and the enzyme-linked plate assay that screens HIV before the Western blot confirms it.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Laboratory Techniques",
  pilotCategory: "Laboratory techniques — immunophenotyping and immunoassay",
  difficulty: 2,
  readTime: 11,
  sourceRef:
    "First Aid 2026, Part 1 pp. 52 (flow cytometry; microarrays; enzyme-linked immunosorbent assay)",
  tags: [
    "flow cytometry",
    "immunophenotype",
    "CD3",
    "CD4 count",
    "CD8",
    "ELISA",
    "direct ELISA",
    "indirect ELISA",
    "labeled antibody",
    "microarrays",
    "SNPs",
    "CNVs",
  ],
  core: {
    what: "Flow cytometry assesses size, granularity, and protein expression (immunophenotype) of individual cells in a sample: cells are tagged with antibodies specific to surface or intracellular proteins, the antibodies carry unique fluorescent dyes, and the sample is analyzed one cell at a time by focusing a laser on the cell and measuring light scatter and fluorescence intensity — plotted as a histogram (one measure) or scatter plot (two measures). ELISA is an immunologic test detecting a specific antigen (direct) or antibody (indirect) in blood via an enzyme-linked antibody; added substrate reacts with the enzyme to produce a detectable signal.",
    why: "These are the two most frequently ordered immunologic instruments on Step 1: flow cytometry carries the leukemia immunophenotypes, the CD4 count in HIV, PNH workups, and fetal-RBC quantitation; ELISA carries the HIV screen and the direct-vs-indirect distinction that shows up in every immunology block.",
    keyIdea: "Flow cytometry answers 'which CELLS carry this marker — and how many?'; ELISA answers 'is this ANTIGEN or ANTIBODY present in this sample?'. Direct ELISA = patient's ANTIGEN + labeled 1° antibody; indirect ELISA = patient's ANTIBODY caught by antigen + detected with a labeled 2° antibody. On the quadrant plot, every dot is one cell — the source's own example: the right lower quadrant is empty because all CD8-expressing cells also express CD3.",
  },
  mechanisms: [
    {
      id: "flow-cytometry-immunophenotype",
      title: "Flow cytometry — antibody tags, laser interrogation, quadrant readout",
      context: "Immunophenotyping a cell suspension",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Cell sample prepared (blood, marrow, CSF...)",
            sublabel: "Molecular — the question: which cells carry which proteins?",
            variant: "input",
          },
          {
            id: "s1",
            label: "Cells tagged with antibodies specific to surface or intracellular proteins",
            sublabel: "Molecular — anti-CD3, anti-CD8, etc.; each antibody is then tagged with a unique fluorescent dye.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Sample analyzed one cell at a time — laser focused on each cell",
            sublabel: "Molecular — light scatter reports size and granularity; fluorescence reports marker abundance.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Laser makes label fluoresce; fluorescence is detected; labeled cells are counted",
            sublabel: "Pathway — the detector row: scatter channels plus one channel per fluorescent dye.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Histogram (one measure) or scatter plot (any two measures)",
            sublabel: "Output — the quadrant dot plot: each dot one cell, positioned by its two markers.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Clinical workups: leukemia · PNH · fetal RBCs in pregnant person's blood · CD4+ count in HIV",
            sublabel: "Clinical — the source's own use list for hematologic abnormalities and immunodeficiencies.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "stain" },
          { from: "s1", to: "s2", label: "flow past laser" },
          { from: "s2", to: "s3", label: "excite + detect" },
          { from: "s3", to: "o1" },
          { from: "o1", to: "o2", label: "interpret" },
        ],
        caption:
          "Stain → stream → laser → detector → plot: antibodies mark the proteins, unique dyes color-code each antibody, the laser interrogates one cell at a time, and the data land as dots on a two-axis plot where each dot is a single cell.",
      },
    },
    {
      id: "elisa-detection-logic",
      title: "ELISA — direct antigen detection vs indirect antibody detection",
      context: "Screening a blood sample",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Blood sample arrives for antigen or antibody testing",
            sublabel: "Molecular — the fork: what are we measuring, the pathogen's antigen or the host's antibody?",
            variant: "input",
          },
          {
            id: "s1",
            label: "Direct ELISA: patient ANTIGEN fixed in the well; labeled 1° antibody binds it",
            sublabel: "Molecular — detection uses an antibody linked to an enzyme.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Indirect ELISA: known ANTIGEN fixed; patient 1° antibody binds; labeled 2° antibody detects it",
            sublabel: "Molecular — the extra layer: anti-Ig with enzyme recognizes the patient's antibody.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Added substrate reacts with the enzyme, producing a detectable signal",
            sublabel: "Molecular — color or chemiluminescence proportional to the amount captured.",
            variant: "process",
          },
          {
            id: "o1",
            label: "High-sensitivity, high-specificity result — often used to screen for HIV infection",
            sublabel: "Clinical — positive screens are confirmed by Western blot, which is more specific.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "looking for antigen" },
          { from: "trigger", to: "s2", label: "looking for antibody" },
          { from: "s1", to: "s3" },
          { from: "s2", to: "s3" },
          { from: "s3", to: "o1" },
        ],
        caption:
          "One engine, two directions: direct ELISA fixes the patient's antigen and uses a labeled 1° antibody; indirect ELISA fixes antigen to CATCH the patient's antibody and reveals it with a labeled 2° antibody. Substrate + enzyme = signal; sensitivity for screening, with Western blot as the more specific confirm.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "What the machine measures, cell by cell",
      body: [
        "Flow cytometry is a laboratory technique to assess size, granularity, and protein expression (immunophenotype) of individual cells in a sample. The staining step does the molecular work: cells are tagged with antibodies specific to surface or intracellular proteins, and the antibodies are then tagged with a unique fluorescent dye — so each marker gets its own color.",
        "The instrument then analyzes the sample one cell at a time by focusing a laser on the cell and measuring light scatter and intensity of fluorescence. Data are plotted either as a histogram (one measure) or a scatter plot (any two measures, as shown in the source figure). Light scatter alone carries two of the three measures — forward scatter tracks size, side scatter tracks granularity — and each fluorescent channel adds a marker dimension.",
        "The clinical list is the exam's shortcut: commonly used in workup of hematologic abnormalities (leukemia, paroxysmal nocturnal hemoglobinuria, fetal RBCs in a pregnant person's blood) and immunodeficiencies (CD4+ cell count in HIV). Each application is really a counting question — which cells carry the marker, and how many are there.",
      ],
    },
    {
      kind: "visual",
      visualId: "flow-cytometry-laser-path",
      title: "The instrument — from tagged cell to counted event",
      caption:
        "The flow cytometer drawn as the source does: a cell in the sample stream carrying anti-CD3 and anti-CD8 antibodies, each with its unique fluorescent label; the laser firing across the stream ('laser makes label fluoresce'); the detector collecting light scatter and fluorescence ('fluorescence is detected; labeled cells are counted'); and the output panel showing the two plot formats — histogram for one measure, scatter plot for two — beside the per-cell measures (size, granularity, protein expression) and the clinical use list.",
      notice:
        "Three things to carry away: (1) one cell at a time — the machine never averages; (2) unique dye per antibody — two colors can be read simultaneously; (3) every event becomes a dot on the plot, which is why the quadrant plot that follows counts populations so cleanly.",
      },
    {
      kind: "visual",
      visualId: "cd-cd-quadrant-plot",
      title: "The quadrant plot — CD3 vs CD8, the source's own example",
      caption:
        "The source's scatter plot rebuilt: log-scale axes from 10⁰ to 10⁴, CD8 on the horizontal and CD3 on the vertical; the lower left quadrant dense with double-negative cells; the left upper quadrant holding CD3-positive CD8-negative cells; the right upper quadrant holding the CD3/CD8 double-positive population; and the right lower quadrant empty — with the source's own explanation printed beside it: in this example the right lower quadrant is empty because all CD8-expressing cells also express CD3. Plus/minus markers annotate both axes.",
      notice:
        "The empty quadrant is the teaching move: a quadrant plot does not just show what is present, it makes you defend what is absent. Here 'no CD8-only cells' encodes the biology — CD8 marks a T-cell subset, and every T cell also carries CD3.",
      },
    {
      kind: "text",
      title: "Microarrays — the same-page expression tool",
      body: [
        "Microarrays are used to compare the relative transcription of genes in two RNA samples — the two-color competitive hybridization idea: sample A and sample B label the same array of probes, and relative intensity per spot reports which sample transcribes each gene more. When DNA is used, arrays can detect single nucleotide polymorphisms (SNPs) and copy number variants (CNVs) for genotyping, clinical genetic testing, forensic analysis, and cancer mutation and genetic linkage analysis.",
        "Position microarrays beside flow cytometry by their unit of analysis: the array compares populations of molecules across samples; the cytometer profiles individual cells within one sample. Both are 'measure many things at once' tools — the exam rarely goes deeper than that distinction.",
      ],
    },
    {
      kind: "visual",
      visualId: "elisa-direct-indirect",
      title: "Direct vs indirect ELISA — the two layer-stacks",
      caption:
        "The source's two wells side by side: Direct ELISA with the patient antigen fixed to the well, the labeled 1° antibody (enzyme already attached) bound to it, and substrate conversion producing the detectable signal; Indirect ELISA with known antigen fixed, the patient's unlabeled 1° antibody caught on that antigen, a labeled 2° antibody (enzyme attached) recognizing the 1° antibody, and again substrate to signal. A bottom strip carries the shared engine (antibody linked to enzyme; added substrate reacts with the enzyme), the performance note (high sensitivity and specificity, but less specific than Western blot), and the classic use (often used to screen for HIV infection).",
      notice:
        "Count the layers: direct = antigen + labeled 1° antibody (one recognition layer, detects ANTIGEN); indirect = antigen + patient antibody + labeled 2° antibody (two recognition layers, detects ANTIBODY). The patient's molecule is what names the test.",
      },
    {
      kind: "table",
      title: "The immunodetection stack — who detects what",
      intro: "Flow cytometry, ELISA, and Western blot divide the immunologic testing labor.",
      columns: ["Test", "Detects", "Readout"],
      rows: [
        ["Flow cytometry", "Surface/intracellular proteins on individual cells", "Scatter plot quadrants; counts per population (CD4, CD8, CD3...)"],
        ["Direct ELISA", "Antigen in the patient's blood", "Enzyme-labeled 1° antibody + substrate signal"],
        ["Indirect ELISA", "Antibody in the patient's blood", "Antigen-coated well + labeled 2° antibody + substrate signal"],
        ["Western blot", "Specific protein(s), by size", "Gel + membrane + labeled antibody — the HIV confirm"],
      ],
      caption:
        "The HIV algorithm threads all three rows in practice: flow cytometry tracks the disease's toll (CD4 count), ELISA screens the exposure, Western blot confirms it.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Five recurring shapes: (1) quadrant-plot reading — which population is CD3+CD8+ (upper right = cytotoxic T cells), and why is the CD8-only quadrant empty; (2) CD4+ cell count in HIV — which instrument; (3) direct vs indirect ELISA — 'the patient's antigen is fixed and a labeled primary antibody is added' (direct) vs 'the patient's antibody binds fixed antigen and is revealed by a labeled secondary' (indirect); (4) ELISA vs Western specificity — screen vs confirm; (5) microarray vocabulary — SNPs and CNVs from DNA, transcription comparison from RNA.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "The CD4 count — flow cytometry as HIV surveillance",
      body: [
        "Immunodeficiency workup is the source's second use family, and CD4+ cell count in HIV is its poster child: anti-CD4-stained cells pass the laser, and the machine reports the CD4-positive T-cell concentration that antiretroviral timing and opportunistic-prophylaxis thresholds are built on.",
        "The same logic immunophenotypes leukemia: a blast population with an aberrant marker combination (for example CD3 with CD8, or markers of B-cell lineage) is a cytometric signature — each dot a cell, each cluster a clone.",
      ],
    },
    {
      kind: "text",
      title: "Fetal RBCs and PNH — counting the abnormal minority",
      body: [
        "Fetal RBCs in a pregnant person's blood are quantitated by flow cytometry (fetal hemoglobin or fetal-cell markers separate the fetal minority from the maternal majority), which calibrates anti-D immune-globulin dosing after fetomaternal hemorrhage. Paroxysmal nocturnal hemoglobinuria is the mirror case: the missing GPI-anchor markers on the abnormal clone are revealed by the absence of the right fluorescence.",
        "Both applications exploit the same instrument fact: the cytometer counts each cell individually, so a small abnormal population cannot hide inside an average — exactly what a bulk assay would miss.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A scatter plot shows a dense population in the upper right quadrant (CD3-positive, CD8-positive); the question asks which lymphocyte population this represents.",
        discriminator: "Double-positive for CD3 and CD8",
        concept: "Quadrant-plot immunophenotyping",
        answer: "Cytotoxic T cells — and the source's rule: all CD8-expressing cells in this example also express CD3, so the CD8-only quadrant is empty",
      },
      {
        stem: "An HIV-positive patient's infectious-disease follow-up includes a laboratory test that stains blood cells with anti-CD4 and passes them one at a time through a laser.",
        discriminator: "Per-cell fluorescence counting",
        concept: "Flow cytometry clinical use",
        answer: "Flow cytometry — CD4+ cell count in HIV (immunodeficiency workup)",
      },
      {
        stem: "A plate assay fixes the patient's serum antibodies onto known antigen and detects them with an enzyme-linked anti-human IgG; a color change develops.",
        discriminator: "Patient ANTIBODY revealed by labeled 2° antibody",
        concept: "Indirect ELISA",
        answer: "Indirect ELISA — detects antibody in the patient's blood; often used to screen for HIV infection",
      },
      {
        stem: "A well is coated with capture antibody; the patient's sample adds antigen; an enzyme-conjugated detection antibody then binds a different epitope, and substrate yields signal.",
        discriminator: "Patient ANTIGEN measured by labeled 1° antibody",
        concept: "Direct ELISA (sandwich form)",
        answer: "Direct ELISA — detects a specific antigen in the patient's blood sample",
      },
      {
        stem: "A newborn screen for congenital infection uses a technique comparing thousands of immobilized probes against two labeled RNA samples.",
        discriminator: "Relative transcription comparison across the genome",
        concept: "Microarray",
        answer: "Microarray — compares relative transcription of genes in two RNA samples; with DNA, detects SNPs and CNVs",
      },
    ],
    traps: [
      {
        a: "Direct ELISA",
        b: "Indirect ELISA",
        whyConfused: "Both are enzyme-linked plate assays with substrate readout.",
        keyDifference: "Direct detects the patient's ANTIGEN with a labeled 1° antibody; indirect detects the patient's ANTIBODY — fixed antigen catches it, and a labeled 2° antibody reveals it.",
        clue: "Name the patient's molecule: antigen → direct; antibody → indirect.",
      },
      {
        a: "Flow cytometry",
        b: "ELISA",
        whyConfused: "Both use antibody-fluorophore or antibody-enzyme conjugates.",
        keyDifference: "Flow cytometry measures INDIVIDUAL CELLS through a laser (immunophenotype, one cell at a time); ELISA measures a bulk analyte (antigen or antibody) in a well.",
        clue: "Populations of cells with markers → flow. Antigen/antibody in solution → ELISA.",
      },
      {
        a: "ELISA",
        b: "Western blot",
        whyConfused: "Both can detect anti-HIV antibodies.",
        keyDifference: "ELISA screens — high sensitivity, but less specific than Western blot; Western blot confirms by resolving individual proteins on a membrane.",
        clue: "Screen with the plate, confirm with the blot.",
      },
      {
        a: "Histogram",
        b: "Scatter plot (quadrants)",
        whyConfused: "Both are flow-cytometry outputs.",
        keyDifference: "Histogram = ONE measure; scatter plot = any TWO measures, which is what quadrant analysis needs.",
        clue: "One axis → histogram; two axes with dividers → quadrant scatter.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'quantify a cell population' stem offering flow cytometry, ELISA, Western blot, and microarray",
        differentiator: "Per-cell vs bulk measurement",
        correctPath: "Counting or phenotyping CELLS (CD4, leukemic blasts, fetal RBCs) → flow cytometry; measuring soluble antigen/antibody → ELISA; sizing proteins → Western; genome-wide expression/genotype → microarray.",
      },
      {
        lookAlike: "A 'positive HIV screen' stem asking for the next step",
        differentiator: "Screening sensitivity vs confirmatory specificity",
        correctPath: "Positive ELISA → confirm with Western blot (the source: ELISA is less specific than Western blot).",
      },
    ],
    miniCase: {
      vignette:
        "A 26-year-old man is evaluated after a routine insurance screening test returns positive. Two weeks earlier his serum was added to wells coated with HIV antigens; antibodies in his sample bound the coated antigen, and an enzyme-linked anti-human IgG produced a color change. He feels well, has no risk factors he is willing to disclose, and is anxious about the result. The laboratory now recommends a second test before he is notified of infection status.",
      question: "Which test should be used to confirm this screening result?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Western blot, resolving individual HIV proteins by size on a membrane",
          why: "Correct. The described screen is an indirect ELISA (patient antibody caught on fixed antigen, revealed by a labeled 2° antibody). First Aid states ELISA is less specific than Western blot — so the confirmatory step is Western blot, where serum antibodies are probed against separated HIV proteins for a pattern-based confirmation.",
        },
        {
          label: "B",
          text: "Repeat the same indirect ELISA in duplicate",
          why: "Repeating the screen improves reproducibility, not specificity — the false-positive mechanism (cross-reactive antibodies) would repeat with it; confirmation requires a different, more specific method.",
        },
        {
          label: "C",
          text: "Flow cytometry for CD4-positive T-cell count",
          why: "Flow cytometry is the HIV SURVEILLANCE tool (CD4 count tracks established infection) — it neither confirms exposure nor detects antibody; it answers a different question at a different stage.",
        },
        {
          label: "D",
          text: "Direct ELISA for p24 antigen",
          why: "p24 antigen testing is a real part of some algorithms, but it is another screen-class assay, not the more specific confirm the question asks for; the canonical confirm after a positive screen is the Western blot.",
        },
        {
          label: "E",
          text: "Southern blot for HIV proviral DNA",
          why: "Southern blotting sizes DNA fragments for genotype questions (heterozygosity, FMR1 repeats) — not the standard HIV confirmation; this distracter tests whether blot names can be kept apart.",
        },
      ],
      reasoning:
        "The stem describes an indirect ELISA in procedural detail (antigen fixed → patient antibody binds → labeled 2° antibody → substrate signal), then asks for the confirm. The algorithm is written across two First Aid pages: ELISA screens (high sensitivity, less specific than Western blot); Western blot confirms. Option A is the only test that both matches the algorithm and does what confirmation requires — resolve which antigens the serum truly recognizes.",
    },
  },
  mnemonics: [
    {
      code: "“Patient antigen = Direct; patient antibody = Indirect”",
      meaning: "Direct ELISA fixes the patient's ANTIGEN and probes it with a labeled 1° antibody; indirect ELISA catches the patient's ANTIBODY on fixed antigen and reveals it with a labeled 2° antibody.",
      memorizes: "The direct-vs-indirect fork",
      whenToUse: "Any ELISA-identification or design question.",
      clinical: "HIV screening is the indirect form — the patient's anti-HIV antibody is the analyte.",
    },
    {
      code: "“One dot, one cell”",
      meaning: "On a flow-cytometry scatter plot, every dot is a single counted cell positioned by its two fluorescent markers.",
      memorizes: "What the quadrant plot is made of",
      whenToUse: "Quadrant-plot reading and population-counting questions.",
      clinical: "The CD3/CD8 double-positive upper-right cluster = cytotoxic T cells; the empty CD8-only quadrant = all CD8+ cells are also CD3+.",
    },
  ],
  rapidReview: {
    s30: [
      "Flow cytometry: size, granularity, protein expression of INDIVIDUAL cells — one cell at a time through a laser.",
      "Antibodies specific to surface/intracellular proteins, each tagged with a unique fluorescent dye.",
      "Histogram = one measure; scatter plot = two measures.",
      "Direct ELISA detects antigen (labeled 1° antibody); indirect detects antibody (labeled 2° antibody).",
      "ELISA: high sensitivity and specificity, but less specific than Western blot; screens HIV.",
      "Microarrays: relative transcription of two RNA samples; SNPs and CNVs when DNA is used.",
    ],
    m3: [
      "CD3+CD8+ (upper right) = cytotoxic T cells; CD3-only (upper left) includes the helper compartment on a CD3-vs-CD8 plot.",
      "Right lower quadrant empty in the source example because all CD8-expressing cells also express CD3.",
      "Flow cytometry uses: leukemia, PNH, fetal RBCs in pregnant person's blood, CD4+ count in HIV.",
      "Indirect ELISA layers: fixed antigen → patient 1° antibody → labeled 2° antibody → substrate signal.",
      "Added substrate reacts with the enzyme, producing a detectable signal — the shared engine of both ELISAs.",
      "CD4 count thresholds guide antiretroviral timing and opportunistic-infection prophylaxis.",
    ],
    m10: [
      "Forward light scatter tracks cell size; side scatter tracks granularity.",
      "Each fluorescent dye occupies its own detection channel — multiplexed marker panels are routine.",
      "Small abnormal populations (fetal cells, PNH clones) are found precisely because cells are counted individually.",
      "Microarray DNA applications: genotyping, clinical genetic testing, forensic analysis, cancer mutation and linkage analysis.",
      "The HIV care pathway threads the tools: ELISA screen → Western blot confirm → flow-cytometric CD4 surveillance.",
      "ELISA signal intensity is proportional to captured analyte — quantitation, not just detection.",
    ],
  },
  recall: [
    {
      q: "What three properties does flow cytometry assess per cell?",
      a: "Size, granularity, and protein expression (immunophenotype) of individual cells in a sample.",
    },
    {
      q: "How are the antibodies used in flow cytometry made distinguishable?",
      a: "Cells are tagged with antibodies specific to surface or intracellular proteins, and each antibody is then tagged with a unique fluorescent dye.",
    },
    {
      q: "In the source's CD3-vs-CD8 plot, why is the right lower quadrant empty?",
      a: "Because all CD8-expressing cells also express CD3 — a CD8-positive, CD3-negative cell does not appear in this example.",
    },
    {
      q: "Name four clinical uses of flow cytometry from the page.",
      a: "Workup of hematologic abnormalities — leukemia, paroxysmal nocturnal hemoglobinuria, fetal RBCs in a pregnant person's blood — and immunodeficiencies such as CD4+ cell count in HIV.",
    },
    {
      q: "Contrast direct and indirect ELISA in one sentence each.",
      a: "Direct ELISA detects a specific antigen in the patient's blood using a labeled 1° antibody; indirect ELISA detects a specific antibody in the patient's blood by catching it on fixed antigen and revealing it with a labeled 2° antibody.",
    },
    {
      q: "What is the ELISA's stated performance limitation?",
      a: "It can have high sensitivity and specificity, but is less specific than Western blot — hence screening rather than confirming.",
    },
    {
      q: "What do microarrays compare, and what can they detect when DNA is used?",
      a: "The relative transcription of genes in two RNA samples; with DNA, they can detect SNPs (single nucleotide polymorphisms) and CNVs (copy number variants) for genotyping, clinical genetic testing, forensic analysis, and cancer mutation and genetic linkage analysis.",
    },
  ],
  related: [
    {
      title: "Blotting Procedures",
      note: "The Western blot half of the HIV algorithm — the confirm that follows this page's screen.",
      topicId: "blotting-procedures",
    },
    {
      title: "PCR & CRISPR/Cas9",
      note: "The nucleic-acid sibling: where ELISA and flow read proteins and cells, PCR reads genomes — neonatal HIV needs exactly that.",
      topicId: "pcr-crispr",
    },
    {
      title: "Hypersensitivity Types",
      note: "The antibody-antigen logic the ELISA harnesses is the same immune recognition that Types I–III hypersensitivity weaponize.",
      topicId: "hypersensitivity-types",
    },
    {
      title: "Cell Cycle & Checkpoints",
      note: "Leukemia immunophenotyping meets its cells mid-cycle — blast-heavy marrows are cycling populations, and cytometry counts them.",
      topicId: "cell-cycle",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology",
      connection: "CD3/CD4/CD8 surface markers define T-cell subsets — flow cytometry is how those markers are counted at the bench.",
    },
    {
      subject: "Hematology/Oncology",
      connection: "Leukemia immunophenotypes and PNH clone detection are flow cytometry's flagship hematology applications.",
    },
    {
      subject: "Infectious Disease",
      connection: "The HIV pathway: ELISA screen, Western blot confirm, flow-cytometric CD4 surveillance.",
    },
    {
      subject: "Obstetrics",
      connection: "Fetal RBC quantitation in maternal blood (fetomaternal hemorrhage, anti-D dosing) runs on this instrument.",
    },
  ],
};
