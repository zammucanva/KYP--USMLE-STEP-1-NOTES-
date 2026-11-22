import type { KypUsMLENote } from "../types";

// Biochemistry — Molecular (M2).
// Source: First Aid 2026, Part 1 pdf 57 / book 35
// (Purine salvage deficiencies)

export const purineSalvageDisorders: KypUsMLENote = {
  id: "purine-salvage-disorders",
  title: "Purine Salvage Disorders",
  subtitle:
    "Two enzymes, two diseases: lose ADA and the immune system runs out of DNA; lose HGPRT and the body drowns in its own uric acid — with gout, rage, and self-mutilation as the exam's loudest psychiatry-biochemistry crossover.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Molecular",
  pilotCategory: "Molecular biology — purine salvage and degradation",
  difficulty: 3,
  readTime: 12,
  sourceRef: "First Aid 2026, Part 1 pp. 35 (purine salvage deficiencies)",
  tags: [
    "purine salvage",
    "HGPRT",
    "Lesch-Nyhan",
    "ADA deficiency",
    "SCID",
    "hyperuricemia",
    "allopurinol",
    "rasburicase",
  ],
  core: {
    what: "Purines are expensive to build, so cells recycle them: HGPRT reattaches guanine and hypoxanthine to PRPP (→ GMP, IMP) and APRT does the same for adenine (→ AMP). Adenosine deaminase (ADA) clears adenosine and deoxyadenosine so the degradation ladder can run down to uric acid. Two inherited losses define the page: ADA deficiency (autosomal recessive SCID) and HGPRT deficiency (X-linked Lesch-Nyhan syndrome).",
    why: "These are two of the highest-yield mechanism-disease pairs in all of Step 1 biochemistry: one explains severe combined immunodeficiency at the molecular level, the other produces a behavioral syndrome — self-mutilation with hyperuricemia — that no other page reproduces. The surrounding enzymes are also live drug targets (allopurinol, febuxostat, rasburicase, pegloticase, cladribine, pentostatin).",
    keyIdea: "Salvage failure redirects traffic: HGPRT loss blocks recycling, so de novo synthesis accelerates to compensate and uric acid floods out; ADA loss blocks degradation, so dATP piles up and chokes ribonucleotide reductase — lymphocytes starve for DNA precursors and die.",
  },
  mechanisms: [
    {
      id: "ada-deficiency-scid",
      title: "ADA deficiency → SCID — the dATP choke hold",
      context: "Autosomal recessive severe combined immunodeficiency",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "ADA is deficient — adenosine and deoxyadenosine cannot be degraded",
            sublabel: "Molecular — ADA is required for degradation of adenosine and deoxyadenosine.",
            variant: "input",
          },
          {
            id: "s1",
            label: "dATP accumulates inside lymphocytes",
            sublabel: "Molecular — without ADA, deoxyadenosine is phosphorylated instead of cleared, and the dATP pool swells.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Ribonucleotide reductase is inhibited by the dATP excess",
            sublabel: "Molecular — dATP is a feedback inhibitor of ribonucleotide reductase, the only bridge from ribo- to deoxyribonucleotides.",
            variant: "process",
          },
          {
            id: "s3",
            label: "DNA precursors fall in dividing lymphocytes",
            sublabel: "Clinical — cells that must build DNA to mount an immune response cannot; lymphocyte counts collapse.",
            variant: "process",
          },
          {
            id: "o1",
            label: "↓ lymphocytes → severe combined immunodeficiency",
            sublabel: "Clinical — one of the major causes of autosomal recessive SCID; enzyme replacement, ADA stem-cell gene therapy, or HSCT.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Pentostatin / cladribine — deliberately inhibit ADA",
            sublabel: "Pharmacology — the same block is a drug mechanism in hairy cell leukemia (and cladribine in MS): lymphocyte death is the goal, not the disease.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "substrates pile up" },
          { from: "s1", to: "s2", label: "dATP feedback" },
          { from: "s2", to: "s3", label: "↓ all dNTPs" },
          { from: "s3", to: "o1" },
          { from: "x1", to: "trigger", type: "inhibit", label: "drug-induced ADA loss" },
        ],
        caption:
          "ADA deficiency is a one-enzyme story told in four steps: no degradation → dATP pileup → ribonucleotide reductase choked → lymphocytes out of DNA. The drug corollary: pentostatin and cladribine weaponize the same block against lymphoid malignancy.",
      },
    },
    {
      id: "hgprt-lesch-nyhan",
      title: "HGPRT deficiency → Lesch-Nyhan — the uric acid flood",
      context: "X-linked recessive; boys with hyperuricemia and self-injury",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Defective or mutated HGPRT",
            sublabel: "Molecular — hypoxanthine-guanine phosphoribosyltransferase is deficient: defective purine salvage.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Salvage collapses: ↓ GMP (from guanine) and ↓ IMP (from hypoxanthine)",
            sublabel: "Molecular — free bases cannot be reattached to PRPP, so the recycling loop is cut.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Compensatory ↑ purine synthesis — PRPP amidotransferase activity rises",
            sublabel: "Pathway — the cell senses the IMP/GMP shortage and accelerates the de novo line; PRPP also accumulates unused.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Excess uric acid production",
            sublabel: "Clinical — hyperuricemia: red/orange “sand” (sodium urate crystals) in the diaper, gout, stones.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Basal ganglia injury: dystonia, choreoathetosis, self-mutilation, aggression, intellectual disability",
            sublabel: "Clinical — the neurologic half of Lesch-Nyhan; urate-mediated injury plus dopamine-pathway disruption in the basal ganglia.",
            variant: "output",
          },
          {
            id: "o3",
            label: "Macrocytosis accompanies the syndrome",
            sublabel: "Clinical — First Aid lists macrocytosis among the findings — a bone-marrow-side effect of the purine imbalance.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "salvage blocked" },
          { from: "s1", to: "s2", label: "compensation" },
          { from: "s2", to: "o1", label: "purine flux ↑" },
          { from: "s2", to: "o2" },
          { from: "s2", to: "o3" },
        ],
        caption:
          "Lesch-Nyhan in one sentence: salvage fails, de novo overcompensates, uric acid floods out — and the basal ganglia pays for it. X-linked recessive; treat the uric acid with allopurinol or febuxostat.",
      },
    },
    {
      id: "urate-lowering-logic",
      title: "Urate-lowering drug logic — three distinct cut points",
      context: "Gout and tumor lysis therapy",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Hypoxanthine → xanthine → uric acid (xanthine oxidase, twice)",
            sublabel: "Molecular — XO runs the final two oxidations of purine degradation; uric acid is the human end product (no functional urate oxidase).",
            variant: "input",
          },
          {
            id: "s1",
            label: "Allopurinol / febuxostat ⊣ xanthine oxidase",
            sublabel: "Pharmacology — less uric acid is produced; upstream oxypurinol (allopurinol's metabolite) retraps the enzyme; note the 6-MP interaction.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Rasburicase / pegloticase convert uric acid → allantoin",
            sublabel: "Pharmacology — recombinant urate oxidase dissolves existing urate directly — the tumor-lysis and refractory-gout tool.",
            variant: "process",
          },
          {
            id: "o1",
            label: "↓ serum urate — but by different mechanisms",
            sublabel: "Clinical — XO inhibitors lower production (prophylaxis-friendly); urate oxidases eliminate the pool (rescue-friendly).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", type: "inhibit", label: "production ↓" },
          { from: "trigger", to: "s2", label: "pool dissolved" },
          { from: "s1", to: "o1" },
          { from: "s2", to: "o1" },
        ],
        caption:
          "Gout pharmacology is this map's exit row: block production (XO inhibitors) or dissolve the product (rasburicase, pegloticase) — two mechanisms, one target analyte.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "The economy of purines — build, recycle, or burn",
      body: [
        "A cell has three ways to handle a purine: build it de novo on PRPP (expensive — glycine, aspartate, glutamine, CO₂, THF, and ATP), salvage it by reattaching the free base to PRPP (cheap — one enzyme), or degrade it down the ladder guanine/hypoxanthine → xanthine → uric acid. Which route dominates decides the phenotype when an enzyme fails.",
        "Two salvage enzymes matter. HGPRT (hypoxanthine-guanine phosphoribosyltransferase) recycles hypoxanthine → IMP and guanine → GMP. APRT (adenine phosphoribosyltransferase) recycles adenine → AMP. Their substrates are the free bases; their product is a fully functional mononucleotide — the recycling is one step.",
        "Degradation runs through nucleotides → nucleosides → free bases, then down the xanthine oxidase ladder to uric acid. Humans lost functional urate oxidase, so uric acid is the end of the line — excreted — unless a drug (rasburicase, pegloticase) supplies the missing enzyme.",
      ],
    },
    {
      kind: "visual",
      visualId: "purine-metabolism-map",
      title: "The purine metabolism map — salvage loop, degradation ladder, two blocks",
      caption:
        "The full circuit: PRPP feeding de novo synthesis to IMP, the AMP/GMP arms with their nucleoside and free-base degradation steps, the HGPRT and APRT salvage arcs closing the loop, the ADA step from adenosine to inosine, and the xanthine-oxidase ladder down to uric acid, allantoin, and excretion — with the Lesch-Nyhan block on HGPRT, the SCID block on ADA, cladribine/pentostatin on ADA, and allopurinol/febuxostat plus rasburicase on the exit row.",
      notice:
        "Find the two disease blocks before anything else: HGPRT (left arc — salvage broken) and ADA (right arm — degradation broken). Then find the drugs on the exit ladder. Everything else is plumbing. The comp note at the bottom compresses both disease mechanisms into two lines.",
    },
    {
      kind: "compare",
      title: "ADA deficiency vs Lesch-Nyhan (HGPRT deficiency) — the head-to-head",
      intro: "Both are purine enzyme losses; the phenotypes could not be more different. This table is the single most tested comparison on the page.",
      columns: ["ADA deficiency", "Lesch-Nyhan (HGPRT)"],
      rows: [
        { label: "Inheritance", a: "Autosomal recessive", b: "X-linked recessive" },
        { label: "Pathway broken", a: "Degradation (adenosine → inosine)", b: "Salvage (hypoxanthine/guanine → IMP/GMP)" },
        { label: "Metabolic result", a: "↑ dATP → ⊣ ribonucleotide reductase → ↓ DNA precursors", b: "Compensatory ↑ de novo synthesis → excess uric acid" },
        { label: "Cellular result", a: "Lymphocyte death → SCID", b: "Urate crystals + basal ganglia injury" },
        { label: "Presentation", a: "Recurrent severe infections early in infancy; T+B+NK affected", b: "Intellectual disability, self-mutilation, aggression, dystonia, gout, red/orange diaper sand, macrocytosis" },
        { label: "Treatment", a: "Enzyme replacement (PEG-ADA), HSCT, ADA gene therapy", b: "Allopurinol or febuxostat for the uric acid (neurologic injury persists)" },
      ],
    },
    {
      kind: "list",
      title: "The drug layer — enzymes as targets",
      intro: "Four drug facts sit directly on this map; each is a named exam association.",
      items: [
        { lead: "Allopurinol / febuxostat ⊣ XO", text: "Cut uric acid production at its final two oxidative steps; the standard chronic gout and Lesch-Nyhan choice — and the source of the 6-MP interaction from the nucleotide-synthesis note." },
        { lead: "Rasburicase / pegloticase = urate oxidase", text: "Convert existing uric acid to the soluble allantoin — tumor lysis syndrome rescue and refractory tophaceous gout." },
        { lead: "Pentostatin ⊣ ADA", text: "Mimics ADA deficiency on purpose in hairy cell leukemia — the lympholytic effect becomes the therapy." },
        { lead: "Cladribine ⊣ ADA", text: "Same enzyme, also lymphocytic — hairy cell leukemia and, in low dose, multiple sclerosis." },
      ],
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Lesch-Nyhan findings — the complete set, First Aid order",
      body: "Intellectual disability · self-mutilation (biting fingers/lips — the finding examiners cannot resist) · aggression · hyperuricemia with red/orange “sand” (sodium urate crystals) in the diaper · gout · dystonia · macrocytosis. Inheritance: X-linked recessive. Treatment: allopurinol, febuxostat. The HGPRT mnemonic stores the list: Hyperuricemia, Gout, Pissed off (aggression, self-mutilation), Red/orange crystals, Tense muscles (dystonia).",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Three recurring shapes: (1) the behavioral vignette — a boy with intellectual disability who bites his fingertips and has orange crystals in his diaper → HGPRT, X-linked; the distractors are OTC deficiency (hyperammonemia) and autism spectrum. (2) the immunology vignette — an infant with recurrent opportunistic infections and absent lymphocytes with a purine-metabolism twist → ADA deficiency, AR SCID. (3) the mechanism completion — “↑ dATP inhibits which enzyme?” → ribonucleotide reductase — the step most students cannot supply.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why uric acid floods out when salvage fails",
      body: "IMP and GMP normally feed back on PRPP amidotransferase, the de novo rate-limiter. When HGPRT loss empties the IMP/GMP pools, that brake releases exactly when unused PRPP is piling up — de novo synthesis accelerates into a system that can no longer recycle, and the entire purine flux is pushed toward the degradation ladder and out as urate. The body doesn't just fail to save purines; it actively overproduces them.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "SCID — the presentation behind ADA deficiency",
      body: [
        "Severe combined immunodeficiency from ADA deficiency is one of its major autosomal recessive causes and typically presents in the first months of life: oral thrush, refractory diarrhea, Pneumocystis pneumonia, failure to thrive, and lymphopenia involving T, B, and NK lineages. Live vaccines are contraindicated; unvaccinated infants are the usual patients.",
        "Mechanism-first questions dominate: the chain ↓ ADA → ↑ dATP → ↓ ribonucleotide reductase → ↓ DNA precursors → ↓ lymphocytes is quoted verbatim in stems. Treatment layers: PEG-ADA enzyme replacement, hematopoietic stem cell transplantation, and ADA gene therapy (the first approved gene therapy for any condition) — the spectrum itself is testable.",
      ],
    },
    {
      kind: "text",
      title: "Gout and tumor lysis — the exit-row diseases",
      body: [
        "Overproduction of uric acid — whether from Lesch-Nyhan, tumor lysis syndrome, or myeloproliferative disorders — emerges through the same XO ladder. Allopurinol and febuxostat reduce formation; rasburicase (and its pegylated form pegloticase) enzymatically dissolves urate already formed, which is why rasburicase is the tumor-lysis drug of choice when urate is already sky-high.",
        "Distinguish mechanism from timing in stems: “prevents uric acid formation” points to XO inhibitors; “converts uric acid to allantoin” points to the urate oxidases. First Aid's map places them on exactly those two different arrows — placement is the answer.",
      ],
    },
  ],
  drugs: [
    {
      drug: "Allopurinol (± febuxostat)",
      klass: "Xanthine oxidase inhibitor",
      target: "Xanthine oxidase (hypoxanthine → xanthine → uric acid)",
      mechanism: "Allopurinol is converted by XO to oxypurinol, which retraps the enzyme; febuxostat is a non-purine inhibitor",
      effect: "↓ uric acid production",
      uses: "Chronic gout prophylaxis, tumor lysis prophylaxis, Lesch-Nyhan syndrome",
      adverse: "Rash/hypersensitivity; ↑ 6-MP levels (reduce thiopurine dose); not for acute flare monotherapy",
      clue: "Gout prophylaxis started after the acute flare resolves, or any stem naming xanthine oxidase",
    },
    {
      drug: "Rasburicase",
      klass: "Recombinant urate oxidase",
      target: "Uric acid → allantoin",
      mechanism: "Enzymatically converts existing uric acid to the soluble allantoin",
      effect: "Rapid ↓ of the urate pool already formed",
      uses: "Tumor lysis syndrome (pediatric/adult), severe hyperuricemia",
      adverse: "Methemoglobinemia/hemolysis in G6PD deficiency (H₂O₂ generated); contraindicated in pregnancy",
      clue: "Oncology patient with sky-high urate needing “conversion to allantoin,” not just less production",
    },
    {
      drug: "Pegloticase",
      klass: "Pegylated urate oxidase",
      target: "Uric acid → allantoin",
      mechanism: "Pegylation extends the half-life of the uricase activity",
      effect: "Dramatic urate depletion in refractory gout",
      uses: "Refractory tophaceous gout",
      adverse: "Infusion reactions, anti-drug antibodies with loss of effect",
      clue: "Tophaceous gout that failed oral urate-lowering therapy",
    },
    {
      drug: "Pentostatin / cladribine",
      klass: "ADA inhibitors (antimetabolites)",
      target: "Adenosine deaminase",
      mechanism: "Reproduce the ADA-deficiency biochemistry selectively in lymphoid cells (cladribine: DNA incorporation + ADA-related lympholysis)",
      effect: "Lymphocyte depletion",
      uses: "Hairy cell leukemia (both); cladribine also multiple sclerosis",
      adverse: "Myelosuppression, immunosuppression, infections (PML with cladribine reported)",
      clue: "The exam's inversion question: which drug deliberately blocks the enzyme missing in one form of SCID",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 2-year-old boy with intellectual disability repeatedly bites his fingertips and lips; the mother reports orange “sand” in his diapers since infancy; exam shows dystonia and scissoring of the legs.",
        discriminator: "Self-mutilation + hyperuricemia + X-linked inheritance",
        concept: "Lesch-Nyhan syndrome — defective purine salvage",
        answer: "HGPRT deficiency → ↓ GMP/IMP formation → compensatory ↑ purine synthesis → excess uric acid",
      },
      {
        stem: "A 5-month-old with oral thrush, chronic diarrhea, and Pneumocystis pneumonia is found to have virtual absence of T, B, and NK cells; family history notes a similarly affected sibling who died in infancy.",
        discriminator: "Combined (T+B+NK) deficiency from infancy + affected siblings of both sexes",
        concept: "Autosomal recessive SCID from ADA deficiency",
        answer: "Adenosine deaminase deficiency → ↑ dATP → ↓ ribonucleotide reductase → ↓ DNA precursors → ↓ lymphocytes",
      },
      {
        stem: "An oncology patient beginning induction for a high-burden leukemia develops flank pain and rising creatinine with a serum uric acid of 18 mg/dL; a drug is ordered that converts uric acid to allantoin.",
        discriminator: "“Converts existing uric acid” — pool elimination, not production blockade",
        concept: "Urate oxidase pharmacology",
        answer: "Rasburicase (recombinant urate oxidase)",
      },
      {
        stem: "A man with recurrent gout flares is started on a drug described as a purine analog that is converted by xanthine oxidase itself into an enzyme-trapping metabolite.",
        discriminator: "Suicide-style inhibition by oxypurinol + purine-structure drug",
        concept: "XO inhibitor mechanisms",
        answer: "Allopurinol (febuxostat is the non-purine alternative)",
      },
      {
        stem: "A patient with hairy cell leukemia receives a drug whose mechanism is described as reproducing an inherited immunodeficiency enzyme block on purpose.",
        discriminator: "Disease-as-mechanism framing — the ADA block used therapeutically",
        concept: "ADA inhibitors in lymphoid malignancy",
        answer: "Pentostatin (or cladribine) — inhibits adenosine deaminase",
      },
    ],
    traps: [
      {
        a: "Lesch-Nyhan (HGPRT)",
        b: "OTC deficiency",
        whyConfused: "Both X-linked (OTC) or X-linked-feeling metabolic diseases of young boys; orotate/urate crystals can be conflated.",
        keyDifference: "OTC gives hyperammonemia with ↓ BUN and neurologic vomiting/coma; Lesch-Nyhan gives hyperURICemia with self-mutilation and normal ammonia.",
        clue: "Ammonia + cyclical vomiting in a boy → OTC. Self-biting + orange diaper sand → HGPRT.",
      },
      {
        a: "Allopurinol",
        b: "Rasburicase",
        whyConfused: "Both “lower uric acid” — stems often blur which mechanism they want.",
        keyDifference: "Allopurinol/febuxostat block XO (less urate made); rasburicase converts urate already made into allantoin (pool shrinks immediately).",
        clue: "Prophylaxis/chronic → XO inhibitor. Acurate tumor-lysis rescue → rasburicase.",
      },
      {
        a: "ADA deficiency",
        b: "X-linked SCID (IL2RG)",
        whyConfused: "Both present as infant SCID with recurrent opportunistic infection.",
        keyDifference: "ADA is autosomal recessive and specifically depletes NK cells too (T−B−NK−) with a purine-metabolism mechanism; IL2RG SCID is X-linked with T−B+NK− cytokine-receptor failure.",
        clue: "Stem mentions dATP/ribonucleotide reductase or affected siblings of both sexes → ADA. Multiple maternally related affected boys → IL2RG.",
      },
      {
        a: "HGPRT salvage block",
        b: "PRPP amidotransferase overactivity",
        whyConfused: "Lesch-Nyhan stems note that de novo synthesis INCREASES — students misread the primary defect as the compensation.",
        keyDifference: "The primary lesion is the salvage enzyme; amidotransferase activity rises only as a compensatory response to the IMP/GMP shortage.",
        clue: "The question asks the defective enzyme, not the upregulated one — read the verb.",
      },
    ],
    pivots: [
      {
        lookAlike: "A metabolic panel listing ADA, HGPRT, APRT, and XO as options",
        differentiator: "Which arm of the map the phenotype lives on: immune failure (degradation), crystals+behavior (salvage), adenine-only salvage (APRT), or the urate exit (XO)",
        correctPath: "SCID phenotype → ADA · self-mutilation/hyperuricemia → HGPRT · adenine phosphoribosyltransferase → APRT (2,8-dihydroxyadenine stones) · gout exit row → XO.",
      },
      {
        lookAlike: "A urate-lowering drug list question (allopurinol, febuxostat, rasburicase, pegloticase, probenecid)",
        differentiator: "Production blockade versus pool dissolution versus renal excretion",
        correctPath: "Make less (allopurinol/febuxostat) · dissolve what exists (rasburicase/pegloticase) · excrete more (probenecid — uricosuric, different note).",
      },
    ],
    miniCase: {
      vignette:
        "A 3-year-old boy is referred for severe intellectual disability and uncontrolled movements. His mother describes that he has begun biting his fingertips and the inside of his cheeks until they bleed, and that she has noticed reddish-orange crystalline powder in his diapers since he was an infant. Serum uric acid is 14 mg/dL; peripheral smear shows macrocytes. His 6-year-old maternal half-brother, the mother's son from a different father, died at age 5 with a similar illness.",
      question: "Which enzyme activity is deficient in this patient?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Hypoxanthine-guanine phosphoribosyltransferase (HGPRT)",
          why: "Correct. Self-mutilation + dystonia + hyperuricemia with red/orange diaper crystals and an X-linked pedigree (affected boys through carrier mothers) is Lesch-Nyhan syndrome — defective purine salvage from HGPRT deficiency.",
        },
        {
          label: "B",
          text: "Adenosine deaminase (ADA)",
          why: "Tempting because it is the other purine enzyme on the same page — but ADA deficiency produces infantile SCID with infections and lymphopenia, not self-injury with gout.",
        },
        {
          label: "C",
          text: "Xanthine oxidase",
          why: "Confuses drug target with disease enzyme: XO inhibition is therapy (allopurinol), and its inherited absence causes xanthinuria with stones — not a behavioral syndrome.",
        },
        {
          label: "D",
          text: "Ornithine transcarbamylase",
          why: "The X-linked metabolic distractor — but OTC deficiency gives hyperammonemia, vomiting, and cerebral edema; the crystals are orotate and the behavior is encephalopathy, not self-mutilation.",
        },
        {
          label: "E",
          text: "Adenine phosphoribosyltransferase (APRT)",
          why: "The salvage enzyme next door — APRT deficiency causes 2,8-dihydroxyadenine kidney stones without neurologic or behavioral findings.",
        },
      ],
      reasoning:
        "Four anchors triangulate the answer: the behavioral phenotype (self-mutilation — pathognomonic), the urate evidence (hyperuricemia + orange diaper sand), the hematologic touch (macrocytosis), and the X-linked inheritance pattern through the maternal line. Together they name HGPRT; every distractor misses at least two of the four anchors.",
    },
  },
  mnemonics: [
    {
      code: "HGPRT: “Hyperuricemia · Gout · Pissed off · Red/orange crystals · Tense muscles”",
      meaning: "Each letter pair of the enzyme name stores the Lesch-Nyhan findings: Hyperuricemia, Gout, Pissed off (aggression, self-mutilation), Red/orange crystals in urine, Tense muscles (dystonia).",
      memorizes: "The complete Lesch-Nyhan finding set + the enzyme",
      whenToUse: "Any Lesch-Nyhan stem — recall the mnemonic first, then verify inheritance (X-linked) and treatment (allopurinol/febuxostat).",
      clinical: "Macrocytosis rides along — remember it as the lab footnote of the mnemonic.",
    },
    {
      code: "“ADAAbsent DNA for Army cells”",
      meaning: "ADA deficiency → dATP accumulates → ribonucleotide reductase blocked → no DNA precursors → lymphocyte army cannot form.",
      memorizes: "The ADA-SCID mechanism chain in one line",
      whenToUse: "SCID mechanism questions and the reverse question (which drug blocks ADA — pentostatin/cladribine).",
      clinical: "T, B, and NK cells all fall — one of the major autosomal recessive SCID causes.",
    },
    {
      code: "“All opurines pass through Xanthine to Uric acid — unless the XO is Inhibited”",
      meaning: "The degradation ladder hypoxanthine → xanthine → uric acid (XO twice); allopurinol parks on both steps.",
      memorizes: "The final common pathway of purine catabolism and its drug target",
      whenToUse: "Gout, tumor lysis, and Lesch-Nyhan treatment questions.",
      clinical: "Rasburicase bypasses the whole ladder by converting uric acid to allantoin.",
    },
  ],
  rapidReview: {
    s30: [
      "HGPRT deficiency = Lesch-Nyhan: X-linked, ↑ uric acid, self-mutilation, dystonia, macrocytosis.",
      "ADA deficiency = AR SCID: ↑ dATP → ⊣ ribonucleotide reductase → ↓ DNA precursors → ↓ lymphocytes.",
      "Allopurinol/febuxostat ⊣ xanthine oxidase; rasburicase/pegloticase convert urate → allantoin.",
      "Pentostatin and cladribine intentionally inhibit ADA (hairy cell leukemia).",
      "HGPRT salvages hypoxanthine → IMP and guanine → GMP; APRT salvages adenine → AMP.",
    ],
    m3: [
      "Lesch-Nyhan mechanism: ↓ salvage → ↓ GMP/IMP → compensatory ↑ PRPP amidotransferase/de novo → excess uric acid.",
      "Lesch-Nyhan findings: intellectual disability, self-mutilation, aggression, hyperuricemia (red/orange sand), gout, dystonia, macrocytosis.",
      "ADA required for degradation of adenosine AND deoxyadenosine.",
      "Salvage uses PRPP as the ribose donor — one enzymatic step back to mononucleotide.",
      "Humans lack functional urate oxidase — uric acid is the end product unless rasburicase is given.",
      "ADA-SCID treatment: PEG-ADA, HSCT, or ADA gene therapy.",
    ],
    m10: [
      "APRT deficiency is the forgotten third enzyme: 2,8-dihydroxyadenine stones, no neurology.",
      "Allopurinol raises 6-MP/azathioprine toxicity — the crossover fact with the nucleotide-synthesis page.",
      "Tumor lysis = cell-death urate flood; rasburicase for rescue, XO inhibitors for prophylaxis.",
      "Both pentostatin and cladribine exploit lymphocyte dependence on ADA — mechanism mirrors the disease.",
      "Lesch-Nyhan neurology localizes to the basal ganglia (dystonia, choreoathetosis — dopamine pathway).",
      "SCID with NK-cell involvement points toward ADA (or IL2RG); ADA uniquely gives the purine-mechanism chain.",
    ],
  },
  recall: [
    {
      q: "What is the inheritance pattern and defective enzyme of Lesch-Nyhan syndrome?",
      a: "X-linked recessive; deficient or mutated HGPRT (hypoxanthine-guanine phosphoribosyltransferase) — defective purine salvage.",
    },
    {
      q: "Why does uric acid production increase in HGPRT deficiency?",
      a: "↓ GMP and ↓ IMP from failed salvage release feedback on PRPP amidotransferase → compensatory ↑ de novo purine synthesis → excess uric acid.",
    },
    {
      q: "List the Lesch-Nyhan findings in First Aid's order.",
      a: "Intellectual disability, self-mutilation, aggression, hyperuricemia (red/orange “sand” — sodium urate crystals in diaper), gout, dystonia, macrocytosis.",
    },
    {
      q: "Chain the ADA-deficiency mechanism from enzyme loss to immune phenotype.",
      a: "↓ ADA → adenosine/deoxyadenosine accumulate → ↑ dATP → ⊣ ribonucleotide reductase → ↓ DNA precursors in cells → ↓ lymphocytes → SCID.",
    },
    {
      q: "Which two salvage enzymes operate on which bases, and to which mononucleotides?",
      a: "HGPRT: hypoxanthine → IMP, guanine → GMP. APRT: adenine → AMP. Both consume PRPP.",
    },
    {
      q: "Which drugs inhibit ADA therapeutically and in what diseases?",
      a: "Pentostatin and cladribine — hairy cell leukemia (cladribine also in multiple sclerosis).",
    },
    {
      q: "How do allopurinol and rasburicase differ in urate handling?",
      a: "Allopurinol (with febuxostat) blocks xanthine oxidase → less urate produced; rasburicase (urate oxidase) converts existing uric acid to soluble allantoin.",
    },
    {
      q: "Which enzyme do both steps hypoxanthine → xanthine and xanthine → uric acid share?",
      a: "Xanthine oxidase (XO).",
    },
  ],
  related: [
    {
      title: "Nucleotide Synthesis & Metabolism",
      note: "The left half of the same map — PRPP, de novo lines, and the drug inhibitors that meet salvage here.",
      topicId: "nucleotides-synthesis",
    },
    {
      title: "Chromatin Organization",
      note: "Purine and pyrimidine synthesis runs with histone production in S phase — the chromatin assembly the nucleotides feed.",
      topicId: "chromatin-organization",
    },
    {
      title: "Gout and urate-lowering pharmacology",
      note: "Allopurinol, febuxostat, probenecid, and the colchicine/NSAIDs acute-flare pair — the clinical exit of this metabolism.",
    },
    {
      title: "Immunodeficiency disorders",
      note: "ADA-SCID sits in the SCID differential with IL2RG (X-linked) and the T−B+NK+ patterns of the immunology chapter.",
    },
  ],
  crossLinks: [
    {
      subject: "Immunology",
      connection: "ADA deficiency is a major autosomal recessive SCID; the T−B−NK− pattern and its gene therapy are immunology-chapter staples.",
    },
    {
      subject: "Pharmacology",
      connection: "XO inhibitors, urate oxidases, and ADA inhibitors are all anchored to enzymes defined on this map.",
    },
    {
      subject: "Psychiatry/Neurology",
      connection: "Self-mutilation with dystonia is the behavioral face of basal ganglia injury in Lesch-Nyhan — a classic biopsych crossover stem.",
    },
    {
      subject: "Nephrology",
      connection: "Uric acid stones, tumor lysis AKI, and the rasburicase-rescue scenario land this page in renal-pathophysiology questions.",
    },
  ],
};
