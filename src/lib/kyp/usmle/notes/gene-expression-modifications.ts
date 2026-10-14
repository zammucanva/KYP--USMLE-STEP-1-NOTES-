import type { KypUsMLENote } from "../types";

// Biochemistry — Genetics I (G1).
// Source: First Aid 2026, Part 1 pdf 76 / book 54 (Gene expression modifications; RNA interference)

export const geneExpressionModifications: KypUsMLENote = {
  id: "gene-expression-modifications",
  title: "Gene Expression Modifications",
  subtitle:
    "Knock-out, knock-in, and the two small-RNA silencers: how transgenic mice and RNA interference (miRNA vs siRNA) turn genes down or off — one loose and broad, one strict and specific.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Genetics",
  pilotCategory: "Genetics — epigenetic and post-transcriptional regulation",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 54 (gene expression modifications; RNA interference)",
  tags: [
    "transgenic mice",
    "knock-out",
    "knock-in",
    "random insertion",
    "targeted insertion",
    "homologous recombination",
    "RNA interference",
    "miRNA",
    "siRNA",
    "gene knockdown",
  ],
  core: {
    what: "Transgenic strategies in mice involve random insertion of a gene into the mouse genome or targeted insertion or deletion through homologous recombination with the mouse gene: knock-out removes a gene, knock-in inserts one; random insertion gives constitutive expression, targeted insertion gives conditional expression. RNA interference is the process whereby small non-coding RNA molecules target mRNAs to inhibit gene expression — microRNA (naturally produced as hairpins, loose pairing, broad targeting, blocks translation and sometimes facilitates degradation) and small interfering RNA (usually exogenous dsRNA, complete pairing, highly specific, mRNA cleavage prior to translation, used for knockdown experiments).",
    why: "This page is the toolkit behind every 'transgenic mouse' and 'gene silencing' stem in genetics and oncology — and the miRNA-vs-siRNA contrast (loose pairing/broad vs complete pairing/specific) is a ready-made exam pair, with abnormal miRNA expression silencing tumor-suppressor mRNAs as the cancer hook.",
    keyIdea: "Sort by WHO chooses the target and HOW STRICTLY: the cell's own miRNA pairs loosely and quiets whole families of related mRNAs; experimentally delivered siRNA pairs completely and destroys one exact mRNA. In mice, random insertion expresses everywhere (constitutive); homologous recombination places or removes the gene precisely (conditional).",
  },
  mechanisms: [
    {
      id: "transgenic-strategies",
      title: "Transgenic mice — random insertion vs targeted recombination",
      context: "Engineering a mouse genome",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A gene is to be added to — or removed from — the mouse genome",
            sublabel: "Molecular — the two strategies differ in precision and in expression pattern.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Random insertion of gene into mouse genome",
            sublabel: "Molecular — the transgene lands wherever it integrates; no chromosomal address is chosen.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Random insertion → constitutive expression",
            sublabel: "Output — the gene is expressed wherever the construct's promoter drives it, in all tissues.",
            variant: "output",
          },
          {
            id: "s2",
            label: "Targeted insertion or deletion via homologous recombination with the mouse gene",
            sublabel: "Molecular — recombination at the matching locus: the endogenous copy is replaced or excised.",
            variant: "process",
          },
          {
            id: "o2",
            label: "Targeted insertion → conditional expression",
            sublabel: "Output — locus-accurate replacement, enabling tissue-specific or time-specific control.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Knock-out = removing a gene, taking it out",
            sublabel: "Clinical — loss-of-function in vivo: what does the animal lose without it?",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Knock-in = inserting a gene",
            sublabel: "Clinical — gain-of-function or rescue: a human allele, a reporter, a corrected copy.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "trigger", to: "s2" },
          { from: "s1", to: "o1", label: "constitutive" },
          { from: "s2", to: "o2", label: "conditional" },
          { from: "x1", to: "s2", type: "inhibit", label: "deletion" },
          { from: "x2", to: "s2", label: "insertion" },
        ],
        caption:
          "Two roads into the genome: random insertion (fast, address-free, constitutive expression) and homologous recombination (precise, conditional expression). Knock-out takes the gene out; knock-in puts one in — the verbs attach to the recombination route.",
      },
    },
    {
      id: "gene-silencing-rna",
      title: "RNA interference — miRNA vs siRNA",
      context: "Post-transcriptional gene silencing",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Small non-coding RNA molecules target mRNAs to inhibit gene expression",
            sublabel: "Molecular — the shared definition of RNA interference.",
            variant: "input",
          },
          {
            id: "s1",
            label: "miRNA: naturally produced by the cell as hairpin structures",
            sublabel: "Molecular — endogenous; loose nucleotide pairing allows broad targeting of related mRNAs.",
            variant: "process",
          },
          {
            id: "o1",
            label: "miRNA binds mRNA → blocks translation, sometimes facilitates degradation",
            sublabel: "Output — one miRNA can quiet a family of transcripts; fine-tuning of expression.",
            variant: "output",
          },
          {
            id: "s2",
            label: "siRNA: usually derived from exogenous dsRNA source (eg, virus)",
            sublabel: "Molecular — foreign or synthetic; requires complete nucleotide pairing.",
            variant: "process",
          },
          {
            id: "o2",
            label: "siRNA → highly specific targeting → mRNA cleavage prior to translation",
            sublabel: "Output — the transcript is destroyed before any protein is made.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Abnormal miRNA expression contributes to malignancies",
            sublabel: "Clinical — by silencing an mRNA from a tumor suppressor gene, misexpressed miRNAs promote cancer.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "siRNA produced by transcription or chemically synthesized for gene 'knockdown' experiments",
            sublabel: "Clinical — the laboratory lever: choose the sequence, silence the gene, watch the phenotype.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "trigger", to: "s2" },
          { from: "s1", to: "o1", label: "loose pairing" },
          { from: "s2", to: "o2", label: "complete pairing" },
          { from: "x1", to: "o1", type: "inhibit", label: "tumor-suppressor mRNA silenced" },
          { from: "x2", to: "s2", label: "engineered" },
        ],
        caption:
          "The silencing fork: endogenous miRNA (hairpin, loose pairing, broad family targeting, translational block ± degradation) versus exogenous siRNA (complete pairing, single-target specificity, cleavage before translation). Cancer hijacks the first; experiments deploy the second.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "Transgenic strategies — the two roads into the mouse genome",
      body: [
        "Transgenic strategies in mice involve random insertion of a gene into the mouse genome, or targeted insertion or deletion of a gene through homologous recombination with the mouse gene. The distinction is precision: random insertion parks the construct wherever it lands; homologous recombination trades the gene's endogenous copy at its exact chromosomal address.",
        "The expression consequences are the memorizable half: random insertion gives constitutive expression — the transgene is on wherever its promoter drives it, in every tissue, all the time. Targeted insertion gives conditional expression — because the gene sits at its native locus, it can be configured for tissue-specific or inducible control. Knock-out simply removes a gene, taking it out; knock-in inserts a gene. Pair the verbs with the recombination route and the adjectives with the routes: knock-out/knock-in via homologous recombination; constitutive via random.",
      ],
    },
    {
      kind: "table",
      title: "miRNA vs siRNA — the paired contrast",
      intro: "Same process (RNA interference), opposite stringency.",
      columns: ["Feature", "microRNA (miRNA)", "small interfering RNA (siRNA)"],
      rows: [
        ["Origin", "Naturally produced by the cell as hairpin structures", "Usually derived from exogenous dsRNA source (eg, virus); can be synthesized"],
        ["Pairing rule", "Loose nucleotide pairing", "Requires complete nucleotide pairing"],
        ["Target breadth", "Broad targeting of related mRNAs", "Highly specific mRNA targeting"],
        ["Mechanism", "Blocks translation; sometimes facilitates degradation", "mRNA cleavage prior to translation"],
        ["Headline role", "Endogenous fine-tuning; abnormal expression contributes to malignancies", "Gene 'knockdown' experiments"],
      ],
      caption:
        "One line each: miRNA = the cell's loose, broad dimmer; siRNA = the strict, single-target scalpel — cleavage before translation.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Three recurring shapes: (1) the strategy-matching stem — 'a mouse expresses the transgene in all tissues' (random insertion, constitutive) vs 'the endogenous locus was replaced' (targeted, conditional); (2) the knock-out/knock-in verb check — removing a gene (knock-out) vs inserting one (knock-in); (3) the silencer-matching stem — 'loose pairing, broad targeting, blocks translation' (miRNA) vs 'complete pairing, mRNA cleavage prior to translation' (siRNA), plus the cancer hook: abnormal miRNA expression silencing tumor-suppressor mRNAs.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why loose pairing makes miRNA broad — and why that matters in cancer",
      body: "A miRNA does not need a perfect match: because its nucleotide pairing is loose, one small RNA can regulate a whole family of mRNAs carrying similar recognition sequences — a network dimmer rather than a single switch. That breadth is what makes miRNA expression a cancer variable: when a malignancy misexpresses an miRNA whose targets include a tumor suppressor's mRNA, the silencing an mRNA from a tumor suppressor gene removes a brake on growth without a single mutation in the tumor-suppressor gene itself. Epigenetic-style regulation producing genetic-disease consequences — the exact point of the 'modifications' in this page's title.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Knockdown as medicine's rehearsal stage",
      body: [
        "siRNA can be produced by transcription or chemically synthesized for gene 'knockdown' experiments — choose a sequence complementary to your mRNA of interest, deliver it, and the cell destroys that transcript before translation. The result is a clean, reversible loss-of-function without touching the genome.",
        "Clinically, the same logic is graduating from bench to bedside (RNAi therapeutics) and, on this page's terms, explains the antiviral angle: siRNA is usually derived from an exogenous double-stranded RNA source such as a virus — the cell treats incoming viral dsRNA as a trigger to silence. The exam stays at the mechanism level: complete pairing, specific target, cleavage prior to translation.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A transgenic mouse is generated by injecting a construct that integrates at a random chromosomal site; the transgene product is detected in every tissue examined.",
        discriminator: "No locus control → expression everywhere",
        concept: "Random insertion consequence",
        answer: "Random insertion → constitutive expression (targeted insertion via homologous recombination gives conditional expression)",
      },
      {
        stem: "An experiment replaces the mouse's endogenous gene with a mutated human allele at the native locus, allowing expression only in cardiomyocytes.",
        discriminator: "Locus-accurate exchange with tissue-specific control",
        concept: "Targeted knock-in",
        answer: "Targeted insertion through homologous recombination — knock-in with conditional expression",
      },
      {
        stem: "A small RNA with imperfect complementarity to a family of transcripts reduces translation of several related mRNAs at once.",
        discriminator: "Loose pairing + broad targeting + translational block",
        concept: "microRNA",
        answer: "miRNA — naturally produced as hairpin structures; blocks translation and sometimes facilitates degradation",
      },
      {
        stem: "A perfectly complementary double-stranded RNA introduced into cells eliminates a single transcript before any protein is synthesized.",
        discriminator: "Complete pairing + cleavage prior to translation",
        concept: "siRNA knockdown",
        answer: "siRNA — highly specific mRNA targeting with mRNA cleavage prior to translation",
      },
    ],
    traps: [
      {
        a: "miRNA",
        b: "siRNA",
        whyConfused: "Both are small non-coding RNAs performing RNA interference.",
        keyDifference: "miRNA is endogenous (hairpin), pairs loosely, targets related mRNAs broadly, blocks translation ± degradation; siRNA is usually exogenous (viral dsRNA) or synthetic, requires complete pairing, targets one mRNA, and cleaves it prior to translation.",
        clue: "'Broad family of transcripts' → miRNA; 'perfect complementarity, single gene silenced' → siRNA.",
      },
      {
        a: "Random insertion",
        b: "Targeted insertion",
        whyConfused: "Both are transgenic strategies in mice.",
        keyDifference: "Random insertion integrates anywhere and expresses constitutively; targeted insertion/deletion uses homologous recombination at the gene's own locus and enables conditional expression.",
        clue: "'Every tissue' → random; 'the native locus, only in liver' → targeted.",
      },
      {
        a: "Knock-out",
        b: "Knock-in",
        whyConfused: "Both modify the mouse genome by recombination.",
        keyDifference: "Knock-out removes a gene (taking it out); knock-in inserts a gene.",
        clue: "Out vs in — the verb is the answer.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'gene is silenced' stem offering miRNA, siRNA, CRISPR, and methylation",
        differentiator: "Whether the genome changes and how strict the targeting is",
        correctPath: "No genome change + small RNA → RNA interference (miRNA if loose/endogenous, siRNA if complete/synthetic); permanent DNA cut → CRISPR; heritable silencing mark → methylation (imprinting).",
      },
      {
        lookAlike: "A 'transgenic mouse phenotype' stem describing uniform vs tissue-specific expression",
        differentiator: "Insertion route",
        correctPath: "Uniform expression everywhere → random insertion (constitutive); native-locus replacement with control → targeted homologous recombination (conditional).",
      },
    ],
    miniCase: {
      vignette:
        "A researcher silences a gene in cultured hepatocytes by transfecting a chemically synthesized 21-nucleotide double-stranded RNA designed to be perfectly complementary to the gene's mRNA. Forty-eight hours later, quantitative PCR shows the target mRNA is profoundly reduced and no protein product can be detected by Western blot. A control small RNA with two mismatched nucleotides at the binding site has no effect.",
      question: "Which mechanism best explains the observed reduction in mRNA and protein?",
      options: [
        {
          label: "A",
          correct: true,
          text: "siRNA-directed cleavage of the mRNA prior to translation",
          why: "Correct. The reagent is a synthetic, perfectly complementary dsRNA — siRNA. It requires complete nucleotide pairing (hence the two-mismatch control fails) and results in mRNA cleavage prior to translation, which explains both the mRNA loss and the absent protein.",
        },
        {
          label: "B",
          text: "miRNA-mediated translational blockade of a family of related transcripts",
          why: "The endogenous miRNA route: loose pairing and broad targeting — but the stem's reagent is exogenous, perfectly complementary, and destroys the transcript rather than merely blocking translation; the strict control confirms sequence-specific cleavage.",
        },
        {
          label: "C",
          text: "CRISPR/Cas9 cutting of the gene's coding sequence",
          why: "CRISPR edits the genome itself; the stem's effect is post-transcriptional and transient (48-hour knockdown), with no permanent DNA change described.",
        },
        {
          label: "D",
          text: "Knock-out of the gene by homologous recombination",
          why: "A knock-out removes the gene from the genome — an engineered-mouse strategy, not a rapid transfection experiment in cultured cells.",
        },
        {
          label: "E",
          text: "Promoter methylation silencing transcription",
          why: "Methylation is the imprinting/tumor-suppressor silencing mark — a chromatin-level transcriptional event; the observed mRNA destruction after RNA delivery is post-transcriptional interference.",
        },
      ],
      reasoning:
        "The design features are the answer key: chemically synthesized dsRNA, perfect complementarity, mismatched control inactive, mRNA destroyed before protein appears. Each feature maps to the source's siRNA line — usually derived from exogenous dsRNA, requires complete nucleotide pairing, highly specific targeting, mRNA cleavage prior to translation.",
    },
  },
  mnemonics: [
    {
      code: "“miRNA = multiple/mismatch; siRNA = single/strict”",
      meaning: "miRNA pairs loosely (mismatch tolerated) and hits multiple related mRNAs; siRNA pairs strictly (single perfect match) and destroys one transcript.",
      memorizes: "The miRNA-vs-siRNA contrast",
      whenToUse: "Any RNA-interference matching question.",
      clinical: "Abnormal miRNA expression can silence tumor-suppressor mRNAs — broad targeting turned malignant.",
    },
    {
      code: "“Random runs everywhere; Targeted takes orders”",
      meaning: "Random insertion → constitutive expression (runs everywhere); targeted insertion via homologous recombination → conditional expression (takes experimental orders, where and when).",
      memorizes: "Transgenic-mouse strategy consequences",
      whenToUse: "Transgenic-mouse stems.",
      clinical: "Knock-out = removing a gene; knock-in = inserting a gene — both via the targeted route.",
    },
  ],
  rapidReview: {
    s30: [
      "Transgenic mice: random insertion (constitutive) vs targeted insertion/deletion via homologous recombination (conditional).",
      "Knock-out = removing a gene; knock-in = inserting a gene.",
      "RNA interference: small non-coding RNAs target mRNAs to inhibit gene expression.",
      "miRNA: endogenous hairpin, loose pairing, broad targeting, blocks translation ± degradation.",
      "siRNA: exogenous dsRNA or synthetic, complete pairing, specific, mRNA cleavage prior to translation.",
      "Abnormal miRNA expression contributes to malignancies by silencing tumor-suppressor mRNAs.",
    ],
    m3: [
      "siRNA can be produced by transcription or chemically synthesized for gene knockdown experiments.",
      "miRNA sometimes facilitates mRNA degradation, not just translational blockade.",
      "The mismatch control in knockdown experiments proves siRNA's complete-pairing requirement.",
      "Random-insertion constructs express wherever their promoter drives them.",
      "Targeted insertion enables tissue-specific and time-specific (conditional) expression.",
      "siRNA is 'usually' viral-derived — the cell's antiviral RNAi ancestry.",
    ],
    m10: [
      "One miRNA can regulate dozens of related transcripts — network-level dimming.",
      "Cancer-relevant miRNAs (oncomirs) silence tumor-suppressor mRNAs without mutating them.",
      "Knock-down is transient and reversible; knock-out is permanent and genomic.",
      "The hairpin precursor shape is the miRNA birthmark.",
      "Complete complementarity is siRNA's price of admission — one mismatch voids the cut.",
      "Conditional knock-ins model human alleles in the right tissue at the right time.",
    ],
  },
  recall: [
    {
      q: "Name the two transgenic strategies in mice and their expression consequences.",
      a: "Random insertion of a gene into the mouse genome (constitutive expression); targeted insertion or deletion through homologous recombination with the mouse gene (conditional expression).",
    },
    {
      q: "Define knock-out and knock-in.",
      a: "Knock-out = removing a gene, taking it out. Knock-in = inserting a gene.",
    },
    {
      q: "What is RNA interference?",
      a: "The process whereby small non-coding RNA molecules target mRNAs to inhibit gene expression.",
    },
    {
      q: "How do miRNA and siRNA differ in origin and pairing?",
      a: "miRNA is naturally produced by the cell as hairpin structures with loose nucleotide pairing; siRNA is usually derived from an exogenous dsRNA source (eg, virus) and requires complete nucleotide pairing.",
    },
    {
      q: "What is the end result of siRNA action, and what is it used for?",
      a: "mRNA cleavage prior to translation — highly specific targeting; used for gene 'knockdown' experiments (produced by transcription or chemically synthesized).",
    },
    {
      q: "How can miRNA abnormalities contribute to cancer?",
      a: "Abnormal expression of miRNAs contributes to certain malignancies, eg by silencing an mRNA from a tumor suppressor gene.",
    },
  ],
  related: [
    {
      title: "Chromatin Organization",
      note: "Methylation and histone marks are the DNA-level silencers; RNA interference is the mRNA-level one — two floors of the same regulation building.",
      topicId: "chromatin-organization",
    },
    {
      title: "RNA Processing & Splicing",
      note: "The mRNA that miRNA and siRNA target is the finished, processed transcript this note's sibling assembles.",
      topicId: "rna-processing",
    },
    {
      title: "PCR & CRISPR/Cas9",
      note: "CRISPR edits the genome permanently; RNA interference silences transcripts transiently — the exam's favorite permanent-vs-reversible pair.",
      topicId: "pcr-crispr",
    },
  ],
  crossLinks: [
    {
      subject: "Genetics",
      connection: "Transgenic mice and knockdown experiments are the functional-genomics follow-through of the gene-modification toolkit.",
    },
    {
      subject: "Oncology",
      connection: "Abnormal miRNA expression silencing tumor-suppressor mRNAs is a non-mutational route to malignancy.",
    },
    {
      subject: "Microbiology/Immunology",
      connection: "siRNA's origin — exogenous double-stranded viral RNA — is the antiviral ancestry of the pathway.",
    },
  ],
};
