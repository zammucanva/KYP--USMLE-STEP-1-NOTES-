import type { KypUsMLENote } from "../types";

// Biochemistry — Genetics I (G1).
// Source: First Aid 2026, Part 1 pdf 76–78 / book 54–56 (Genetic terms;
// Genetic terms (continued); Population genetics; Hardy-Weinberg principle)

export const geneticTermsPopgen: KypUsMLENote = {
  id: "genetic-terms-popgen",
  title: "Genetic Terminology & Population Genetics",
  subtitle:
    "The vocabulary spine of the genetics chapter — from codominance through uniparental disomy — plus the three population forces (selection, drift, bottleneck/founder) and the Hardy-Weinberg equation family that turns disease prevalence into carrier frequency.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Genetics",
  pilotCategory: "Genetics — terminology spine and population genetics",
  difficulty: 2,
  readTime: 14,
  sourceRef:
    "First Aid 2026, Part 1 pp. 54–56 (genetic terms; population genetics; Hardy-Weinberg principle)",
  tags: [
    "genetic terms",
    "codominance",
    "variable expressivity",
    "incomplete penetrance",
    "pleiotropy",
    "anticipation",
    "loss of heterozygosity",
    "epistasis",
    "aneuploidy",
    "dominant negative mutation",
    "linkage disequilibrium",
    "mosaicism",
    "locus heterogeneity",
    "allelic heterogeneity",
    "heteroplasmy",
    "uniparental disomy",
    "population genetics",
    "genetic drift",
    "bottleneck effect",
    "founder effect",
    "natural selection",
    "Hardy-Weinberg",
    "carrier frequency",
  ],
  core: {
    what: "Fifteen genetic terms describe how genotypes become (or fail to become) phenotypes: codominance, variable expressivity, incomplete penetrance, pleiotropy, anticipation, loss of heterozygosity, epistasis, aneuploidy, dominant negative mutation, linkage disequilibrium, mosaicism, locus heterogeneity, allelic heterogeneity, heteroplasmy, and uniparental disomy. Population genetics adds the forces that move allele frequencies — natural selection (fitness-directed), genetic drift (chance), and its bottleneck/founder forms — and the Hardy-Weinberg principle: with random mating and p + q = 1, genotype frequencies are p² (homozygous A), 2pq (heterozygous — carrier frequency if AR), and q² (homozygous a), constant from generation to generation.",
    why: "Every genetics stem on the exam presumes this vocabulary — a question cannot say 'variable expressivity' or 'heteroplasmy' without testing whether you know it, and the Hardy-Weinberg carrier-frequency calculation (source's own worked example: CF prevalence 1/3200 → q ≈ 0.017 → 2pq ≈ 0.035) is one of the few pure-math questions in the book.",
    keyIdea: "Sort the terms by WHAT VARIES: who expresses (codominance — both; dominant negative — one corrupts the other), how fully (expressivity, penetrance, epistasis), how many traits (pleiotropy), when in generations (anticipation), how many chromosomes (aneuploidy), which cells (mosaicism, heteroplasmy — nuclear vs mitochondrial), and which parent (uniparental disomy, imprinting). Then one equation family — square the allele-frequency sum — converts population prevalence into individual carrier risk.",
  },
  mechanisms: [
    {
      id: "drift-selection-bottleneck",
      title: "Population genetics — selection vs drift, bottleneck and founder",
      context: "What moves allele frequencies across generations",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Across generations, allele frequencies in a population change",
            sublabel: "Population genetics — the two forces, directional and random.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Natural selection — alleles that increase species fitness are more likely to be passed down",
            sublabel: "Directional — the environment rewards functional alleles.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Genetic drift — a dramatic shift in allelic frequency that occurs by chance (not by natural selection)",
            sublabel: "Random — no fitness signal, just sampling luck.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Bottleneck effect — a natural disaster removes certain alleles by chance → new allele frequency",
            sublabel: "Drift's catastrophe form: the survivors are not the fittest, merely the luckiest — fitness is equal.",
            variant: "process",
          },
          {
            id: "s4",
            label: "Founder effect — a bottleneck caused by calamitous population separation",
            sublabel: "A subset separates and founds a new population; the founders' allele frequencies define it.",
            variant: "process",
          },
          {
            id: "o1",
            label: "New population with shifted allele and genotype frequencies",
            sublabel: "Output — founder populations can carry rare disease alleles at high frequency.",
            variant: "output",
          },
          {
            id: "x1",
            label: "In the bottleneck, fitness is equal — removal is by chance alone",
            sublabel: "The discriminator: disaster is not selection.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Bottleneck and founder effects are both examples of genetic drift",
            sublabel: "The umbrella term the exam prefers as the answer.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "trigger", to: "s2" },
          { from: "s1", to: "o1", label: "fitness-directed" },
          { from: "s2", to: "s3", label: "catastrophe form" },
          { from: "s3", to: "s4", label: "separation subtype" },
          { from: "s3", to: "o1", label: "chance-directed" },
          { from: "s4", to: "o1", label: "founder diseases" },
          { from: "x1", to: "s1", type: "inhibit", label: "chance, not selection" },
          { from: "x2", to: "s2", label: "both are drift" },
        ],
        caption:
          "Two forces move alleles: natural selection passes down fitness-increasing alleles (directional), genetic drift shifts frequencies by chance (random). Drift's two named forms — bottleneck (natural disaster removes alleles by chance, fitness equal) and founder (calamitous population separation) — are both answers to 'an example of genetic drift.'",
      },
    },
    {
      id: "hwe-allele-math",
      title: "Hardy-Weinberg — from prevalence to carrier frequency",
      context: "Random mating; allele and genotype frequencies constant",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "The prevalence of an autosomal recessive disease is known (eg, CF ≈ 1/3200)",
            sublabel: "Input — q² is the disease frequency; the question asks for the carriers.",
            variant: "input",
          },
          {
            id: "s1",
            label: "q² = disease prevalence → q = √prevalence",
            sublabel: "q² = frequency of homozygosity for allele a; take the square root.",
            variant: "process",
          },
          {
            id: "s2",
            label: "p = 1 − q (because p + q = 1)",
            sublabel: "p = frequency of the normal allele; p² = homozygosity for A.",
            variant: "process",
          },
          {
            id: "o1",
            label: "2pq = heterozygosity — the carrier frequency (if AR)",
            sublabel: "Output — the source's example: q ≈ 0.017, p ≈ 0.982, 2pq ≈ 0.035 (≈ 3.5% carriers).",
            variant: "output",
          },
          {
            id: "x1",
            label: "In rare autosomal recessive diseases, p ≈ 1 — so carrier frequency ≈ 2q",
            sublabel: "Shortcut — when q is tiny, p contributes almost nothing: 2pq ≈ 2q.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "X-linked recessive: disease frequency in males = q, in females = q²",
            sublabel: "The sex-stratified readout — males are hemizygous, one X each.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "q² known" },
          { from: "s1", to: "s2", label: "p + q = 1" },
          { from: "s2", to: "o1", label: "2pq" },
          { from: "x1", to: "o1", label: "rare-disease shortcut" },
          { from: "x2", to: "o1", type: "inhibit", label: "sex-stratified" },
        ],
        caption:
          "The exam's calculation loop: prevalence → q² → q = √prevalence → p = 1 − q → carriers = 2pq. The CF worked example: 1/3200 → q ≈ 0.017 → p ≈ 0.982 → 2pq ≈ 0.035. Rare-disease shortcut: p ≈ 1. X-linked recessive: males = q, females = q².",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "The vocabulary spine — why this page exists",
      body: [
        "Every inheritance question the exam asks is built on this page's terms. A stem can only say 'a 34-year-old woman with a BRCA1 mutation never develops breast cancer' (incomplete penetrance) or 'the boy's café-au-lait spots are confined to one side of his body' (mosaicism) if the vocabulary is already loaded. Learning these terms as a sorted system — rather than fifteen isolated flashcards — is what makes the G-batch inheritance topics (modes of inheritance onward) feel like applications rather than new material.",
        "The source prints the terms as a two-page table, then hands the page over to population genetics and Hardy-Weinberg. The same arc works here: first the terms sorted by what varies, then the three forces that move allele frequencies through populations, then the single equation family that converts population data into individual risk. The mosaicism photograph and the Punnett-style Hardy-Weinberg square anchor the two halves.",
      ],
    },
    {
      kind: "table",
      title: "The terms, page one — how genotypes reach phenotypes",
      intro: "From codominance to aneuploidy: who expresses, how fully, how many traits, and how many chromosomes.",
      columns: ["Term", "What it means", "Source examples"],
      rows: [
        ["Codominance", "Both alleles contribute to the phenotype of the heterozygote", "Blood group A/B/AB; α1-antitrypsin deficiency; HLA"],
        ["Variable expressivity", "Patients with the same genotype have varying phenotypes/severity", "Neurofibromatosis type 1 (severity varies among affected family members)"],
        ["Incomplete penetrance", "Not all individuals with a pathogenic genotype show the phenotype — % penetrance × probability of inheriting the genotype = risk of expressing the phenotype", "BRCA1 (not every carrier develops breast cancer)"],
        ["Pleiotropy", "One gene contributes to multiple phenotypic effects", "Cystic fibrosis — lung/GI thick mucus, pancreatic insufficiency, male infertility"],
        ["Anticipation", "Increased severity or earlier onset of disease in successive generations", "Trinucleotide repeat diseases (eg, Huntington disease)"],
        ["Loss of heterozygosity", "Tumor-suppressor logic: the wild-type allele must be deleted/mutated/eliminated before the diseased phenotype appears — the two-hit hypothesis; NOT true of oncogenes", "Retinoblastoma, Lynch syndrome, Li-Fraumeni syndrome"],
        ["Epistasis", "The allele of one gene affects the phenotypic expression of another gene", "Albinism, alopecia"],
        ["Aneuploidy", "An abnormal number of chromosomes, due to chromosomal nondisjunction during mitosis or meiosis", "Down syndrome, Turner syndrome (45,XO), oncogenesis"],
      ],
      caption:
        "Sort key: codominance is about WHO expresses, expressivity/penetrance/epistasis about HOW FULLY, pleiotropy about HOW MANY TRAITS, anticipation about WHEN, aneuploidy about HOW MANY CHROMOSOMES.",
    },
    {
      kind: "table",
      title: "The terms, page two — where the mutation sits and which cells carry it",
      intro: "From dominant negative through uniparental disomy: mutation behavior, populations, mosaicism, and parent-of-origin.",
      columns: ["Term", "What it means", "Source examples"],
      rows: [
        ["Dominant negative mutation", "A heterozygote produces a nonfunctional altered protein that also prevents the normal gene product from functioning", "Mutated p53 binds DNA and blocks the wild-type p53 from binding to the promoter"],
        ["Linkage disequilibrium", "Alleles co-occur more or less often than expected by chance — measured in a population, not in a family; varies between populations", "HLA region; CFTR"],
        ["Mosaicism", "Presence of genetically distinct cell lines in the same individual — somatic: mutation arises from mitotic errors after fertilization and propagates through tissues; germline (gonadal): mutation only in egg or sperm cells", "McCune-Albright (somatic); suspect gonadal mosaicism if parents and relatives do not have the disease"],
        ["Locus heterogeneity", "Mutations at different loci result in the same disease", "Albinism, retinitis pigmentosa, familial hypercholesterolemia"],
        ["Allelic heterogeneity", "Different mutations in the same locus result in the same disease", "β-thalassemia"],
        ["Heteroplasmy", "Presence of both normal and mutated mtDNA — variable expression, and mothers pass mtDNA to ALL children", "Leber hereditary optic neuropathy"],
        ["Uniparental disomy", "An individual receives 2 copies of a chromosome from 1 parent and no copies from the other — euploid; heterodIsomy (heterozygous) indicates a meiosis I error, isodIsomy (homozygous) a meiosis II error or postzygotic duplication + loss; most UPD yields a normal phenotype — consider isodisomy when a recessive disorder manifests with only one carrier parent", "Prader-Willi and Angelman syndromes"],
      ],
      caption:
        "The capital-I hooks are the source's own: heterodIsomy has the capital I marking meiosis I; isodIsomy marks meiosis II. And the UPD clinical rule: AR disease with only ONE carrier parent → think isodisomy.",
    },
    {
      kind: "visual",
      visualId: "cafe-au-lait-mosaic-pattern",
      title: "Mosaicism in the flesh — the McCune-Albright skin map",
      caption:
        "The mosaicism photograph rebuilt as an original KYP skin map: a torso outline whose large light-to-medium brown macules show ragged edges and a strictly unilateral distribution respecting the midline; a border-contrast panel (ragged coast-of-Maine McCune-Albright vs smooth NF1 café-au-lait spots); and the definition panel — somatic mosaicism (mitotic errors after fertilization, propagating through multiple tissues or organs) vs germline (gonadal) mosaicism (mutation only in egg or sperm cells; suspect it when parents and relatives do not have the disease), with the McCune-Albright line: Gs-protein (GNAS) activating mutation, lethal if it occurs before fertilization (all cells), survivable in mosaicism.",
      notice:
        "Two discriminators travel together: RAGGED edges + UNILATERAL distribution = mosaic (post-zygotic, McCune-Albright); smooth edges + bilateral distribution = germline (NF1). The pattern of the pigment IS the genetics lesson — which cell lineages carry the mutation.",
    },
    {
      kind: "text",
      title: "From the terms to their two flagship syndromes — imprinting at a glance",
      body: [
        "Uniparental disomy's source examples are Prader-Willi and Angelman syndromes, and both are also the book's flagship illustrations of the last term on the second page — imprinting, the parent-of-origin silencing covered in depth by the next note. The connection is mechanical: in both syndromes the disease can arise when the only ACTIVE copy of a chromosome-15 gene comes from one parent and that parent's copy is deleted or mutated — or when uniparental disomy supplies two copies of the already-silenced parental homolog.",
        "The compare below is the terminology-level summary the source table carries; the full mechanism, the chromosome-15 silencing figure, and the UPD percentages live in the imprinting note that follows.",
      ],
    },
    {
      kind: "compare",
      title: "Prader-Willi vs Angelman — the imprinting pair, at a glance",
      intro:
        "Same chromosome, opposite parents, opposite pictures — the mnemonic lines land both directions at once: POP (Prader-Willi, Obesity/overeating, Paternal allele deleted) and MAMAS (Maternal allele deleted, Angelman, Mood, Ataxia, Seizures).",
      columns: ["Prader-Willi syndrome", "Angelman syndrome"],
      rows: [
        {
          label: "Which gene copy is silenced",
          a: "Maternally derived genes are silenced (except UBE3A)",
          b: "Paternally derived UBE3A is silenced",
        },
        {
          label: "Disease occurs when",
          a: "The paternal allele is deleted or mutated",
          b: "The maternal allele is deleted or mutated",
        },
        {
          label: "Hallmark findings",
          a: "Hyperphagia, obesity, intellectual disability, hypogonadism, hypotonia",
          b: "Hand-flapping, Ataxia, severe Intellectual disability, inappropriate Laughter, Seizures",
        },
        {
          label: "Chromosome origin",
          a: "Chromosome 15 of paternal origin",
          b: "UBE3A on the maternal copy of chromosome 15",
        },
        {
          label: "Uniparental disomy share",
          a: "25% of cases are due to maternal uniparental disomy",
          b: "5% of cases are due to paternal uniparental disomy",
        },
      ],
    },
    {
      kind: "text",
      title: "Population genetics — the three forces",
      body: [
        "Alleles that increase species fitness are more likely to be passed down: that is natural selection, the directional force. Genetic drift is the dramatic shift in allelic frequency that occurs by chance (not by natural selection) — random sampling, amplified in small populations, with no regard for whether the allele helps or harms.",
        "Drift has two named forms the exam tests by scenario. The bottleneck effect: a natural disaster removes certain alleles by chance — fitness is equal, the survivors are simply the ones who lived — and the new population breeds from the survivors' shifted allele frequencies. The founder effect is a bottleneck caused by calamitous population separation: a subgroup splits off, and the founders' particular allele frequencies (including rare disease alleles they happen to carry) define the new population. Both are examples of genetic drift — the umbrella answer whenever the question says 'by chance.'",
      ],
    },
    {
      kind: "visual",
      visualId: "hwe-punnett-square",
      title: "Hardy-Weinberg — the allele-combination square",
      caption:
        "The source's Hardy-Weinberg square rebuilt: the 2×2 grid with column gametes A (p) and a (q), row gametes A (p) and a (q), and the four genotype cells — AA (p²), Aa (pq), Aa (pq), aa (q²) — with p + q = 1 and p² + 2pq + q² = 1 beneath; the equations panel exactly as the source prints them (p² = homozygosity for A, q² = homozygosity for a, 2pq = heterozygosity — carrier frequency if AR; X-linked recessive: males = q, females = q²; in rare AR diseases p ≈ 1); the worked cystic-fibrosis example (prevalence 1/3200 → q = √(1/3200) ≈ 0.017 → p ≈ 0.982 → 2pq ≈ 0.035, about 3.5% carriers); and the assumptions strip — no mutation at the locus, no natural selection, completely random mating, no net migration, large population.",
      notice:
        "The square is just (p + q)²: square the allele-frequency sum and the three genotype frequencies fall out. Heterozygosity (2pq) is the carrier frequency for an autosomal recessive disease — the number every screening question is fishing for.",
    },
    {
      kind: "text",
      title: "Hardy-Weinberg — the worked math, once",
      body: [
        "In a given population where mating is at random, allele and genotype frequencies will be constant; if in Hardy-Weinberg equilibrium, the values of p and q remain constant from generation to generation. The assumptions are the fine print: no mutation occurring at the locus, natural selection not occurring, completely random mating, no net migration, and a large population.",
        "The source's own worked example is the template for every exam version: prevalence of CF in the US ≈ 1/3200, so q² = 1/3200 and q = √(1/3200) ≈ 0.017 (1.7% of the population carries the disease allele); p = 1 − 0.017 ≈ 0.982; and the heterozygous carrier frequency is 2pq = 0.035 — about 3.5%, or roughly 1 in 29. Since the disease is rare, p ≈ 1 gives a similar result — the shortcut the exam rewards. For X-linked recessive diseases, the frequency in males is q and in females is q² — the sex-stratified readout.",
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks these pages",
      body: "Five recurring shapes: (1) the unilateral ragged café-au-lait stem — McCune-Albright mosaicism with polyostotic fibrous dysplasia and an endocrinopathy (GNAS); (2) the carrier-frequency calculation — given q², produce 2pq (the CF example verbatim, or any prevalence swapped in); (3) 'parents and relatives do not have the disease, but two children do' → suspect gonadal (germline) mosaicism; (4) 'only one parent is a carrier, yet the child has the AR disease' → consider isodisomy (uniparental disomy); (5) the natural-disaster allele shift → bottleneck effect, with founder effect as the separated-population subtype — both 'examples of genetic drift.'",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why 2pq — not q — is the carrier frequency",
      body: "Students reach for q (the disease-allele frequency) when the question asks for carriers, and the exam builds that trap on purpose. q is the frequency of the allele itself; carriers are HETEROZYGOTES, and heterozygosity is 2pq — twice the product, because a carrier got the allele from either parent. In the CF example: q ≈ 0.017 (1.7%) but 2pq ≈ 0.035 (3.5%) — exactly double, because p ≈ 1 in a rare disease. The doubling is not a coincidence to memorize; it is the p + q = 1 bookkeeping of who can carry the allele.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Counseling with the terms — penetrance, mosaicism, and carrier math",
      body: [
        "The terms are counseling tools. Incomplete penetrance explains why a BRCA1 carrier may never develop disease, and the source's arithmetic — % penetrance × probability of inheriting the genotype = risk of expressing the phenotype — is the actual number a counselor quotes. Variable expressivity warns an NF1 family that the same mutation can be mild in a parent and severe in a child, which is also why 'unaffected parent' never excludes 'affected parent with subtle findings.'",
        "Mosaicism changes recurrence-risk language: a somatic mosaic like McCune-Albright is typically sporadic (post-zygotic), while gonadal mosaicism — suspected precisely when parents and relatives do not have the disease — can recur across apparently unaffected parents' children. Heteroplasmy makes mitochondrial counseling probabilistic: a mother with a mixed pool of normal and mutated mtDNA passes mitochondria to ALL her children, but the proportion each child inherits varies — variable expression built into the inheritance itself.",
        "Hardy-Weinberg ends the session in the screening clinic: population-level prevalence (q²) becomes an individual's carrier probability (2pq), which is how CF carrier screening quotes ≈ 1/29 in the general population — the source's 0.035, now worn by a person.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A child presents with large café-au-lait macules with ragged edges strictly respecting the midline, polyostotic fibrous dysplasia, and precocious puberty.",
        discriminator: "Ragged edges + unilateral + GNS features",
        concept: "Somatic mosaicism (McCune-Albright)",
        answer: "Post-zygotic Gs-protein (GNAS) activating mutation — lethal if it occurs before fertilization (all cells), survivable in mosaicism",
      },
      {
        stem: "Cystic fibrosis prevalence in a population is 1/3200; the question asks for the carrier frequency.",
        discriminator: "q² known → carriers = 2pq",
        concept: "Hardy-Weinberg carrier math",
        answer: "q ≈ 0.017, p ≈ 0.982, 2pq ≈ 0.035 — about 3.5% (≈ 1 in 29); since the disease is rare, p ≈ 1 gives a similar result",
      },
      {
        stem: "Two healthy parents with no family history have two children with the same dominant disease.",
        discriminator: "Parents and relatives unaffected, multiple affected children",
        concept: "Gonadal (germline) mosaicism",
        answer: "One parent has the mutation confined to egg or sperm cells — suspect gonadal mosaicism when parents and relatives do not have the disease",
      },
      {
        stem: "A child has an autosomal recessive disease, but only the father is a carrier; karyotype is normal.",
        discriminator: "One carrier parent + euploid karyotype",
        concept: "Isodisomy (uniparental disomy)",
        answer: "IsodIsomy (homozygous) — a meiosis II error or postzygotic duplication with loss; the child received 2 copies of the chromosome from one parent",
      },
    ],
    traps: [
      {
        a: "Variable expressivity",
        b: "Incomplete penetrance",
        whyConfused: "Both explain 'the genotype is there but the phenotype is not what you expected.'",
        keyDifference: "Expressivity = the phenotype VARIES in severity among those who express it (NF1); penetrance = some genotype carriers express NOTHING at all, quantified as % penetrance × probability of inheriting the genotype.",
        clue: "'Varying severity' → expressivity; 'never develops the disease' → incomplete penetrance.",
      },
      {
        a: "Locus heterogeneity",
        b: "Allelic heterogeneity",
        whyConfused: "Both are 'different mutations, same disease.'",
        keyDifference: "Locus = different LOCI (genes) cause the same disease (albinism, retinitis pigmentosa, familial hypercholesterolemia); allelic = different mutations at the SAME locus (β-thalassemia).",
        clue: "Which word the stem modifies — 'different genes' vs 'different mutations in one gene.'",
      },
      {
        a: "q (disease-allele frequency)",
        b: "2pq (carrier frequency)",
        whyConfused: "Both are small numbers computed from the same equation family.",
        keyDifference: "q is the allele frequency (√prevalence); 2pq is the HETEROZYGOTE frequency — the carriers — roughly double q when p ≈ 1.",
        clue: "'Carrier' or 'heterozygous' in the stem → 2pq; 'allele frequency' → q.",
      },
      {
        a: "Bottleneck effect",
        b: "Natural selection",
        whyConfused: "Both change allele frequencies after a population-crushing event.",
        keyDifference: "In the bottleneck, fitness is EQUAL — the natural disaster removes alleles by chance, and the new population breeds from the survivors' luck; selection passes down fitness-increasing alleles directionally.",
        clue: "'Earthquake/epidemic/flood survivors' + 'by chance' → bottleneck (genetic drift); 'better adapted leave more offspring' → selection.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'child with an AR disease but an odd inheritance picture' stem",
        differentiator: "How many parents carry, and the karyotype",
        correctPath: "Both parents carriers → classic AR; only ONE carrier parent + normal karyotype → isodisomy (uniparental disomy); affected sibling pair from unaffected parents → gonadal mosaicism or AR with missed carrier status.",
      },
      {
        lookAlike: "A 'population frequency' stem offering drift, selection, HWE, and founder effect",
        differentiator: "Is the question about frequencies (math) or about change over generations (forces)?",
        correctPath: "Asking to compute carriers → Hardy-Weinberg (2pq); describing a chance shift → genetic drift (bottleneck if disaster, founder if separation); describing fitness-driven change → natural selection.",
      },
    ],
    miniCase: {
      vignette:
        "A medical student organizes a screening fair at her college. The student health service tells her that the prevalence of cystic fibrosis in the general US population is approximately 1/3200. To estimate how many fair attendees will be heterozygous carriers of a CFTR mutation, she applies the Hardy-Weinberg equation to the population.",
      question: "What is the approximate heterozygous carrier frequency in this population?",
      options: [
        {
          label: "A",
          correct: true,
          text: "≈ 3.5% (1 in 29) — 2pq, where q = √(1/3200) ≈ 0.017 and p ≈ 0.982",
          why: "Correct. q² = 1/3200, so q = √(1/3200) ≈ 0.017 (1.7%); p = 1 − 0.017 ≈ 0.982; carriers (heterozygotes) = 2pq ≈ 0.035, about 3.5% or 1 in 29 — and since the disease is rare, p ≈ 1 gives a similar result.",
        },
        {
          label: "B",
          text: "≈ 1.7% (1 in 59) — q itself, the disease-allele frequency",
          why: "The classic trap: q is the frequency of the allele, not of the heterozygotes. Carriers are 2pq, roughly double q when p ≈ 1 — because a carrier can receive the allele from either parent.",
        },
        {
          label: "C",
          text: "≈ 1/3200 — the disease prevalence itself",
          why: "That is q², the frequency of AFFECTED (homozygous recessive) individuals — the input of the calculation, not the output; carriers vastly outnumber the affected.",
        },
        {
          label: "D",
          text: "≈ 98% (1 in 1.02) — p, the normal-allele frequency",
          why: "p ≈ 0.982 is the frequency of the normal allele (homozygosity for A = p² ≈ 96%); confusing the allele pool with the carrier class inverts the answer.",
        },
        {
          label: "E",
          text: "It cannot be estimated from prevalence alone — genotype frequencies are required",
          why: "Tempting if you over-remember the HWE assumptions, but prevalence IS q², which pins q; the assumptions justify using p² + 2pq + q² = 1, and no further data are needed.",
        },
      ],
      reasoning:
        "The loop the source teaches: prevalence 1/3200 is q² → q = √(1/3200) ≈ 0.017 → p = 1 − q ≈ 0.982 → heterozygous carrier frequency 2pq ≈ 0.035 (≈ 1/29). The stem's only job is to hand you q²; the rest is arithmetic and the discipline of choosing 2pq — not q — when the question says 'carrier.'",
    },
  },
  mnemonics: [
    {
      code: "“Square the sum: (p + q)² = p² + 2pq + q²”",
      meaning: "The three genotype frequencies are literally the expansion of the allele-frequency sum squared — homozygous A (p²), heterozygous (2pq), homozygous a (q²).",
      memorizes: "The Hardy-Weinberg genotype-frequency equations",
      whenToUse: "Any carrier-frequency or genotype-frequency question.",
      clinical: "CF screening: 1/3200 → 2pq ≈ 3.5% carriers (≈ 1 in 29) — the number quoted in counseling.",
    },
    {
      code: "“Somatic = Soma (body tissues); Gonadal = Gametes (egg or sperm only)”",
      meaning: "Somatic mosaicism: the mutation arises from mitotic errors after fertilization and propagates through multiple tissues or organs. Germline (gonadal) mosaicism: the mutation is only in egg or sperm cells.",
      memorizes: "The two mosaicism forms and their cell territories",
      whenToUse: "Mosaicism stems — especially 'parents unaffected, children affected.'",
      clinical: "Suspect gonadal mosaicism when parents and relatives do not have the disease; McCune-Albright is the somatic archetype (unilateral ragged café-au-lait, GNAS).",
    },
    {
      code: "“heterodIsomy — the capital I means meiosis I; isodIsomy — the second I means meiosis II”",
      meaning: "The source's own capitalization: heterodIsomy (heterozygous) indicates a meiosis I error; isodIsomy (homozygous) indicates a meiosis II error or postzygotic duplication + loss.",
      memorizes: "Which meiotic error produces which uniparental-disomy form",
      whenToUse: "UPD mechanism questions.",
      clinical: "Consider isodisomy when a recessive disorder manifests with only ONE carrier parent — the child got two identical copies from that parent.",
    },
  ],
  rapidReview: {
    s30: [
      "Codominance: both alleles contribute (blood groups A/B/AB, α1-antitrypsin deficiency, HLA).",
      "Variable expressivity (NF1) ≠ incomplete penetrance (BRCA1 — % penetrance × inheritance probability = expression risk).",
      "Pleiotropy: one gene, multiple effects (CF — lung/GI mucus, pancreatic insufficiency, male infertility).",
      "Anticipation: earlier/more severe in successive generations (trinucleotide repeats, Huntington).",
      "Loss of heterozygosity: wild-type allele must be lost — two-hit (retinoblastoma, Lynch, Li-Fraumeni); NOT oncogenes.",
      "Mosaicism: somatic = mitotic error after fertilization; gonadal = egg/sperm only; suspect gonadal when parents unaffected.",
      "Uniparental disomy: 2 copies from 1 parent, euploid; isodisomy when only one carrier parent has an AR disease child.",
      "Bottleneck (natural disaster, chance, fitness equal) and founder (calamitous separation) are both genetic drift.",
      "HWE: p + q = 1; p² + 2pq + q² = 1; carriers = 2pq; CF 1/3200 → 2pq ≈ 0.035 (3.5%).",
    ],
    m3: [
      "Dominant negative: the altered protein blocks the normal one (mutated p53 blocks wild-type p53 from the promoter).",
      "Linkage disequilibrium is measured in a POPULATION, not a family, and varies between populations (HLA, CFTR).",
      "Heteroplasmy (normal + mutated mtDNA, Leber) — mothers transmit mtDNA to ALL children, with variable expression.",
      "Locus heterogeneity: albinism, retinitis pigmentosa, familial hypercholesterolemia; allelic: β-thalassemia.",
      "X-linked recessive frequencies: males = q, females = q².",
      "In rare AR diseases, p ≈ 1 — so carrier frequency 2pq ≈ 2q, roughly double the disease-allele frequency.",
    ],
    m10: [
      "Epistasis examples: albinism, alopecia — one gene's allele masks or modifies another gene's phenotypic output.",
      "Aneuploidy = nondisjunction during mitosis OR meiosis — Down, Turner 45,XO, and oncogenesis all trade on it.",
      "McCune-Albright: GNAS activating mutation, unilateral ragged café-au-lait + polyostotic fibrous dysplasia + ≥1 endocrinopathy; lethal pre-fertilization, survivable as mosaicism.",
      "The bottleneck's survivors are the LUCKIEST, not the fittest — that sentence is the drift/selection discriminator.",
      "UPD is euploid — a normal karyotype does not exclude it; think UPD when the pedigree is paradoxical.",
      "HWE assumptions: no mutation, no selection, random mating, no net migration, large population — each assumption is a potential 'which assumption is violated' question.",
    ],
  },
  recall: [
    {
      q: "Distinguish variable expressivity from incomplete penetrance, with the source example of each.",
      a: "Variable expressivity: patients with the same genotype have varying phenotypes (NF1). Incomplete penetrance: not all individuals with a pathogenic gene show the phenotype (BRCA1); % penetrance × probability of inheriting the genotype = risk of expressing the phenotype.",
    },
    {
      q: "Define dominant negative mutation and give the source example.",
      a: "A heterozygote produces a nonfunctional altered protein that also prevents the normal gene product from functioning — eg, mutated p53 binds DNA and blocks the wild type p53 from binding to the promoter.",
    },
    {
      q: "When should you suspect gonadal mosaicism, and when somatic mosaicism?",
      a: "Suspect gonadal (germline) mosaicism when parents and relatives do not have the disease (mutation only in egg or sperm cells). Somatic mosaicism: mutation arises from mitotic errors after fertilization and propagates through multiple tissues or organs (McCune-Albright).",
    },
    {
      q: "Distinguish locus heterogeneity from allelic heterogeneity with source examples.",
      a: "Locus heterogeneity: mutations at different loci result in the same disease (albinism, retinitis pigmentosa, familial hypercholesterolemia). Allelic heterogeneity: different mutations in the same locus result in the same disease (β-thalassemia).",
    },
    {
      q: "A natural disaster removes certain alleles from a population by chance — name the effect, its subtype, and the umbrella term.",
      a: "The bottleneck effect (fitness is equal — removal is by chance); the founder effect is the subtype caused by calamitous population separation; both are examples of genetic drift — a dramatic shift in allelic frequency occurring by chance, not by natural selection.",
    },
    {
      q: "CF prevalence is 1/3200. Walk the Hardy-Weinberg math to the carrier frequency.",
      a: "q² = 1/3200 → q = √(1/3200) ≈ 0.017 (1.7%); p = 1 − 0.017 ≈ 0.982; heterozygous carrier frequency = 2pq ≈ 0.035 (≈ 3.5%, about 1 in 29). In rare AR diseases, p ≈ 1 gives a similar result.",
    },
  ],
  related: [
    {
      title: "Disorders of Imprinting",
      note: "The Prader-Willi vs Angelman pair summarized in the compare block gets its full mechanism here — methylation, UBE3A, and the chromosome-15 silencing figure.",
      topicId: "imprinting-disorders",
    },
    {
      title: "Gene Expression Modifications",
      note: "The same genetics block's silencing toolkit — transgenic strategies and RNA interference — one page earlier in the source.",
      topicId: "gene-expression-modifications",
    },
    {
      title: "Chromatin Organization",
      note: "Methylation is the imprinting mark; this note explains how methylation and histone state compact or relax chromatin.",
      topicId: "chromatin-organization",
    },
  ],
  crossLinks: [
    {
      subject: "Genetics — inheritance patterns",
      connection: "Codominance, expressivity, penetrance, and anticipation are the vocabulary every modes-of-inheritance question presumes.",
    },
    {
      subject: "Biostatistics & epidemiology",
      connection: "Hardy-Weinberg converts population prevalence (q²) into individual carrier risk (2pq) — the arithmetic behind population carrier screening.",
    },
    {
      subject: "Oncology",
      connection: "Loss of heterozygosity is the two-hit tumor-suppressor mechanism — retinoblastoma, Lynch, Li-Fraumeni — and explicitly NOT true of oncogenes.",
    },
  ],
};
