import type { KypUsMLENote } from "../types";

// Biochemistry — Genetics II (G2).
// Source: First Aid 2026, Part 1 pdf 82 / book 60 (Trinucleotide repeat
// expansion diseases; Fragile X syndrome)

export const trinucleotideRepeatDiseases: KypUsMLENote = {
  id: "trinucleotide-repeat-diseases",
  title: "Trinucleotide Repeat Expansion Diseases",
  subtitle:
    "Four diseases, four triplets, four mnemonics — Huntington (CAG), myotonic (CTG), fragile X (CGG), Friedreich (GAA) — with one engine: repeat expansion drives anticipation, severity rising and onset falling in successive generations, and fragile X's CGG grows only during oogenesis (Fragile EGG).",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Genetics",
  pilotCategory: "Genetics — dynamic mutation and anticipation",
  difficulty: 2,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 60 (trinucleotide repeat expansion diseases; fragile X syndrome; anticipation)",
  tags: [
    "trinucleotide repeat expansion",
    "anticipation",
    "Huntington disease",
    "CAG",
    "myotonic dystrophy",
    "CTG",
    "fragile X syndrome",
    "CGG",
    "Friedreich ataxia",
    "GAA",
    "FMR1",
    "hypermethylation",
    "macroorchidism",
    "premutation",
    "Fragile EGG",
  ],
  core: {
    what: "Trinucleotide repeat expansion diseases may show genetic anticipation — disease severity increasing and age of onset decreasing in successive generations. The source table: Huntington disease (CAG)n, AD, 'Caudate has ↓ACh and GABA'; myotonic dystrophy (CTG)n, AD, 'Cataracts, Toupee, Gonadal atrophy in males, reduced fertility in females'; fragile X syndrome (CGG)n, XD, 'Chin (protruding), Giant Gonads'; Friedreich ataxia (GAA)n, AR, 'Ataxic GAAit.' Fragile X: X-linked (atypical) inheritance — trinucleotide repeats in FMR1 → hypermethylation of cytosine residues → decreased expression; the most common inherited cause of intellectual disability. Expansion (CGG)n occurs during oogenesis — Fragile EGG (think CGG and oogenesis). Premutation (50–200 repeats) → tremor, ataxia, 1° ovarian insufficiency. Full mutation (>200 repeats) → postpubertal macroorchidism (enlarged testes), long face with large jaw, large everted ears, autism, mitral valve prolapse, hypermobile joints.",
    why: "Anticipation is the one inheritance phenomenon that makes family history NON-constant across generations — the exam tests it by making children worse than parents. The four-triplet table is pure recognition currency across neurology, psychiatry, and reproductive questions, and fragile X carries its own mini-pharmacology of thresholds: premutation (50–200) is a movement-disorder/ovarian-insufficient state, full mutation (>200) is the intellectual-disability/macroorchidism state.",
    keyIdea: "Anchor the four triplets by disease, then by mnemonic: Huntington = CAG (Caudate ↓ACh/↓GABA), Myotonic = CTG (Cataracts-Toupee-Gonadal), Fragile X = CGG (Chin-Giant Gonads), Friedreich = GAA (Ataxic GAAit — and AR, the table's one recessive). Then hold the fragile X engine separately: repeats expand ONLY during oogenesis (Fragile EGG), methylation silences FMR1, and the repeat COUNT decides the phenotype — 50–200 is premutation (tremor, ataxia, 1° ovarian insufficiency), >200 is full mutation (macroorchidism, long face, large everted ears, autism, MVP, hypermobile joints).",
  },
  mechanisms: [
    {
      id: "anticipation-expansion-engine",
      title: "Anticipation — why children are worse than parents",
      context: "Dynamic mutation across generations",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A trinucleotide repeat tract sits inside or beside a gene",
            sublabel: "Input — CAG, CTG, CGG, or GAA, passed through meiosis.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Repeat expansion during gametogenesis — the tract lengthens in the next generation",
            sublabel: "Molecular — slippage during replication/repair adds copies; (CGG)n expands during oogenesis.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Longer tract → earlier onset and/or greater severity",
            sublabel: "Molecular — the dose of expansion tracks the phenotype.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Anticipation: disease severity ↑ and age of onset ↓ in successive generations",
            sublabel: "Output — grandparent mild/late, parent moderate, child severe/early.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Fragile X: expansion (CGG)n occurs during oogenesis — Fragile EGG",
            sublabel: "Clinical — the parent-of-origin rule: mothers transmit expansions.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Premutation 50–200 repeats → tremor, ataxia, 1° ovarian insufficiency; full mutation >200 → the fragile X phenotype",
            sublabel: "Clinical — the threshold ladder inside one gene.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1" },
          { from: "s1", to: "s2", label: "longer tract" },
          { from: "s2", to: "o1" },
          { from: "x1", to: "s1", type: "inhibit", label: "oogenesis only" },
          { from: "x2", to: "o1", label: "threshold effect" },
        ],
        caption:
          "The engine of anticipation: repeats expand in gametogenesis, longer tracts mean earlier/harder disease, and each generation inherits a longer tract than the last. Fragile X adds the parent-of-origin rule — CGG expands during oogenesis (Fragile EGG) — and the threshold ladder: 50–200 = premutation (tremor/ataxia/1° ovarian insufficiency), >200 = full mutation.",
      },
    },
    {
      id: "fragile-x-methylation-cascade",
      title: "Fragile X — from CGG expansion to a silenced gene",
      context: "FMR1 silencing",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Trinucleotide repeats (CGG)n in the FMR1 gene — expansion occurs during oogenesis",
            sublabel: "Input — X-linked (atypical) inheritance; Fragile EGG (think CGG and oogenesis).",
            variant: "input",
          },
          {
            id: "s1",
            label: "Hypermethylation of cytosine residues in the expanded CGG region",
            sublabel: "Molecular — the repeat tract becomes a methylation target.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Decreased expression of FMR1",
            sublabel: "Molecular — the gene is silenced, not deleted.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Most common inherited cause of intellectual disability (Down syndrome is the most common genetic cause, but most cases occur sporadically)",
            sublabel: "Output — the full-mutation phenotype, severity tracking the silencing.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Full mutation >200 repeats: postpubertal macroorchidism (enlarged testes), long face with large jaw, large everted ears, autism, mitral valve prolapse, hypermobile joints",
            sublabel: "Clinical — the recognition cluster; self-mutilation is common and can be confused with Lesch-Nyhan syndrome.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "expanded CGG" },
          { from: "s1", to: "s2", label: "methylation" },
          { from: "s2", to: "o1", label: "silenced FMR1" },
          { from: "x1", to: "o1", type: "inhibit", label: "threshold >200" },
        ],
        caption:
          "Fragile X is a methylation disease wearing a repeat-expansion costume: CGG expansion (during oogenesis) invites hypermethylation of cytosine residues, hypermethylation switches FMR1 off, and the silenced gene yields the most common INHERITED cause of intellectual disability — distinguished from Down syndrome, the most common genetic cause overall, because most Down cases are sporadic.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "The four-triplet table — recognition currency",
      body: [
        "Trinucleotide repeat expansion diseases may show genetic anticipation — disease severity increasing and age of onset decreasing in successive generations — which is why the family history in these conditions is a moving target: the grandmother's mild late-onset version becomes the grandson's severe early one.",
        "The table is the exam's shortest complete unit in genetics — four diseases, four triplets, four modes, four mnemonics — and the visual below rebuilds it with the mnemonics intact. Learn the mnemonics as DISCRIMINATORS, not decoration: they carry the findings (caudate chemistry for Huntington, the cataracts-toupee-gonadal triad for myotonic, the chin-and-gonads habitus for fragile X, the gait for Friedreich).",
      ],
    },
    {
      kind: "visual",
      visualId: "anticipation-expansion-panel",
      title: "The repeat table with the anticipation ladder and the fragile X thresholds",
      caption:
        "The source's trinucleotide repeat table rebuilt: Huntington disease (CAG)n · AD · 'Caudate has ↓ACh and GABA'; myotonic dystrophy (CTG)n · AD · 'Cataracts, Toupee (early balding in males), Gonadal atrophy in males, reduced fertility in females'; fragile X syndrome (CGG)n · XD · 'Chin (protruding), Giant Gonads'; Friedreich ataxia (GAA)n · AR · 'Ataxic GAAit.' Plus the anticipation ladder (severity ↑, onset ↓ across generations), the fragile X engine — FMR1 (CGG)n expansion during oogenesis (Fragile EGG) → hypermethylation of cytosine residues → decreased expression — and the threshold rows: premutation (50–200 repeats) → tremor, ataxia, 1° ovarian insufficiency; full mutation (>200 repeats) → postpubertal macroorchidism, long face with large jaw, large everted ears, autism, mitral valve prolapse, hypermobile joints.",
      notice:
        "Three sorting keys travel with the table: (1) Friedreich is the only AR row (the other three are dominant-family); (2) fragile X is XD with the atypical twist — CGG expands during OOGENESIS, so mothers, not fathers, amplify; (3) the fragile X thresholds are themselves answers — 50–200 vs >200 repeats selects premutation (tremor/ataxia/ovarian insufficiency) vs full mutation (macroorchidism/intellectual disability).",
    },
    {
      kind: "text",
      title: "Fragile X — the threshold ladder in one gene",
      body: [
        "Fragile X syndrome shows X-linked (atypical) inheritance: trinucleotide repeats in FMR1 → hypermethylation of cytosine residues → decreased expression. The silencing, not the repeat itself, is the lesion — and it makes fragile X the most common INHERITED cause of intellectual disability, a distinction the exam words carefully: Down syndrome remains the most common genetic cause overall, but most Down cases occur sporadically.",
        "The repeat count runs the phenotype. Premutation (50–200 repeats) → tremor, ataxia, 1° ovarian insufficiency — a movement-and-reproductive syndrome in otherwise working adults, and the reason an affected grandfather can hand an amplified full mutation to his daughters' children. Full mutation (>200 repeats) → postpubertal macroorchidism (enlarged testes), long face with large jaw, large everted ears, autism, mitral valve prolapse, hypermobile joints. Self-mutilation is common and can be confused with Lesch-Nyhan syndrome — the source's own trap pairing.",
      ],
    },
    {
      kind: "table",
      title: "The four rows — triplets, modes, and the findings the mnemonics encode",
      intro: "Straight from the source table, mnemonics unpacked.",
      columns: ["Disease", "Repeat", "Mode", "The mnemonic, unpacked"],
      rows: [
        ["Huntington disease", "(CAG)n", "AD", "Caudate has ↓ACh and GABA — the striatal neurochemistry of chorea (C-A-G = Caudate, ACh, GABA)"],
        ["Myotonic dystrophy", "(CTG)n", "AD", "Cataracts, Toupee (early balding in males), Gonadal atrophy in males, reduced fertility in females — the multisystem AD dystrophy of adults"],
        ["Fragile X syndrome", "(CGG)n", "XD", "Chin (protruding), Giant Gonads — the long face with large jaw and postpubertal macroorchidism; atypical X-linked inheritance with oogenesis expansion"],
        ["Friedreich ataxia", "(GAA)n", "AR", "Ataxic GAAit — the sole autosomal recessive row; hypertrophic cardiomyopathy accompanies the gait"],
      ],
      caption:
        "Anchor first by TRIPLET (CAG/CTG/CGG/GAA), then let the mnemonic deliver the findings. Three of four are dominant-family; Friedreich alone is AR — the fastest sort when the stem hides the disease name.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Five recurring shapes: (1) the anticipation stem — 'the grandson's onset was earlier and more severe than the father's' → repeat expansion; (2) the triplet-matching stem — disease to (CAG)n/(CTG)n/(CGG)n/(GAA)n, instantly; (3) the fragile X habitus — long face with large jaw, large everted ears, macroorchidism, autism, MVP, hypermobile joints; (4) the premutation stem — an older man with tremor and ataxia, or a woman with 1° ovarian insufficiency, in a fragile X family; (5) the trap pair — self-mutilation in fragile X confused with Lesch-Nyhan syndrome.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why fragile X is 'atypical' X-linked — and why grandfathers matter",
      body: "Fragile X breaks the simple X-linked rules because the mutation is a LENGTH, not a base: a premutation grandfather carries 50–200 CGG repeats — enough to give him tremor and ataxia but a working FMR1 — and his sperm passes the premutation to ALL his daughters (fathers never transmit X to sons) essentially unexpanded, because CGG expands during OOGENESIS. Each daughter's eggs, however, can push the tract past 200 into the full-mutation, methylated, silenced range — so the intellectual disability appears in her sons. The pedigree looks like the disease 'skipped' a generation; the repeats did not.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Reading the fragile X family at the bedside",
      body: [
        "The school-age boy presents with intellectual disability and autism-spectrum behavior; the physical examination supplies the recognition set after puberty — long face with large jaw, large everted ears, hypermobile joints, mitral valve prolapse on echo, and macroorchidism (enlarged testes) that emerges postpubertally. Self-mutilation is common and can be confused with Lesch-Nyhan syndrome, so the habitus and the family history do the discriminating.",
        "The adult generations carry their own version: the premutation (50–200 repeats) shows as tremor and ataxia in the grandfather (FXTAS territory) and 1° ovarian insufficiency in the granddaughter — infertility counseling in a fragile X family is genetic counseling about thresholds. Genetic testing counts the repeats and reads the methylation status, closing the loop from bedside to FMR1.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 36-year-old woman's father died of Huntington disease at 58; at 34 she develops insidious chorea and irritability, a decade earlier than her father's onset.",
        discriminator: "Earlier onset in the succeeding generation",
        concept: "Anticipation in a (CAG)n expansion disease",
        answer: "Trinucleotide repeat expansion — disease severity ↑ and age of onset ↓ in successive generations; Huntington disease = (CAG)n, AD, 'Caudate has ↓ACh and GABA'",
      },
      {
        stem: "A 16-year-old boy has a long face with a large jaw, large everted ears, hypermobile joints, a systolic click on cardiac examination, and enlarged testes on genital examination; he receives special-education support for intellectual disability and autism.",
        discriminator: "Long face + large everted ears + macroorchidism + MVP",
        concept: "Fragile X syndrome — full mutation",
        answer: "(CGG)n full mutation (>200 repeats) in FMR1 → hypermethylation of cytosine residues → decreased expression; the most common inherited cause of intellectual disability",
      },
      {
        stem: "A 62-year-old mathematician develops action tremor and gait ataxia; his granddaughter has fragile X syndrome. His FMR1 analysis shows 120 CGG repeats.",
        discriminator: "50–200 repeats in an affected family",
        concept: "Fragile X premutation",
        answer: "Premutation (50–200 repeats) → tremor, ataxia, 1° ovarian insufficiency (in women); expansion (CGG)n occurs during oogenesis — Fragile EGG",
      },
      {
        stem: "A 12-year-old with progressive gait ataxia has pes cavus, kyphoscoliosis, absent tendon reflexes, and an ECG showing deep narrow T waves with ventricular hypertrophy; her parents are unaffected cousins.",
        discriminator: "The only AR row of the table",
        concept: "Friedreich ataxia",
        answer: "(GAA)n trinucleotide repeat expansion, autosomal recessive — 'Ataxic GAAit'; hypertrophic cardiomyopathy accompanies the neurologic decline",
      },
    ],
    traps: [
      {
        a: "Fragile X syndrome",
        b: "Down syndrome",
        whyConfused: "Both headline intellectual disability in children.",
        keyDifference: "Fragile X is the most common INHERITED cause (FMR1 (CGG)n, X-linked atypical, methylation-silenced); Down syndrome is the most common genetic cause overall, but most cases occur sporadically (nondisjunction).",
        clue: "Family history with anticipation + macroorchidism habitus → fragile X; sporadic + characteristic facies → Down.",
      },
      {
        a: "Fragile X self-mutilation",
        b: "Lesch-Nyhan syndrome",
        whyConfused: "Self-mutilation is common in both.",
        keyDifference: "Fragile X: intellectual disability with autism, long face/large jaw, large everted ears, macroorchidism, MVP, hypermobile joints. Lesch-Nyhan: XLR HPRT deficiency with hyperuricemia, gout, dystonia, and self-mutilation.",
        clue: "Look at the habitus and the uric acid — the source names this exact confusion.",
      },
      {
        a: "(CGG)n of fragile X",
        b: "(CAG)n of Huntington",
        whyConfused: "The triplets are anagrams of each other.",
        keyDifference: "CGG = fragile X (Chin, Giant Gonads — XD, oogenesis expansion, methylation); CAG = Huntington (Caudate, ACh, GABA — AD, striatal degeneration).",
        clue: "Sort by the finding given: chorea → CAG; macroorchidism → CGG.",
      },
      {
        a: "Premutation (50–200)",
        b: "Full mutation (>200)",
        whyConfused: "Same gene, same triplet, different thresholds.",
        keyDifference: "Premutation: tremor, ataxia, 1° ovarian insufficiency — FMR1 still expressed. Full mutation: hypermethylation silences the gene → intellectual disability, autism, macroorchidism, long face, large everted ears, MVP, hypermobile joints.",
        clue: "The repeat count IS the diagnosis — 50–200 vs >200 is the answer line.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'worse in the child than the parent' stem offering anticipation, variable expressivity, and mosaicism",
        differentiator: "What actually increased between generations",
        correctPath: "Documented repeat-length growth (esp. via the transmitting mother) → anticipation; same genotype with varying severity → expressivity; two cell lines in one person → mosaicism.",
      },
      {
        lookAlike: "A 'large testes + intellectual disability' stem offering fragile X, Klinefelter, and Lesch-Nyhan",
        differentiator: "The company the macroorchidism keeps",
        correctPath: "Long face + large everted ears + autism + MVP + hypermobile joints → fragile X; tall stature + gynecomastia + hypogonadism (XXY) → Klinefelter; hyperuricemia + dystonia + self-mutilation → Lesch-Nyhan.",
      },
    ],
    miniCase: {
      vignette:
        "A 15-year-old boy is evaluated for intellectual disability and autism-spectrum behavior. He has a narrow, long face with a prominent jaw, large everted ears, and strikingly hypermobile joints. Cardiac examination reveals a midsystolic click. Tanner stage is V, and testicular volume is 35 mL bilaterally (grossly enlarged for age). His mother completed special education and had irregular menses; her father — the boy's maternal grandfather — developed late-life action tremor and progressive gait ataxia diagnosed as a movement disorder at age 64. The boy's older sister is healthy. FMR1 genetic testing is pending.",
      question: "Which of the following best explains the findings in this family?",
      options: [
        {
          label: "A",
          correct: true,
          text: "CGG trinucleotide repeat expansion of FMR1 with hypermethylation of cytosine residues → decreased FMR1 expression",
          why: "Correct. The boy has the full-mutation fragile X cluster (>200 CGG repeats): intellectual disability with autism, long face with large jaw, large everted ears, mitral valve prolapse, hypermobile joints, postpubertal macroorchidism. The grandfather's premutation (50–200 repeats) shows tremor and ataxia; the (CGG)n expansion occurs during oogenesis (Fragile EGG), so his daughter amplified the tract into the full-mutation range for her children.",
        },
        {
          label: "B",
          text: "CTG repeat expansion of the DMPK gene",
          why: "That is myotonic dystrophy — autosomal dominant with cataracts, early balding, gonadal ATROPHY (not enlargement), percussion myotonia, and arrhythmia; it does not explain macroorchidism, the large everted ears, or the grandfather's FXTAS-like picture.",
        },
        {
          label: "C",
          text: "CAG repeat expansion with anticipation, producing caudate degeneration",
          why: "That is Huntington disease (AD) — chorea, irritability, and dementia with caudate atrophy (↓ACh, ↓GABA). Anticipation is real there, but the phenotype here is the fragile X habitus with macroorchidism, not a movement disorder in the proband.",
        },
        {
          label: "D",
          text: "Nondisjunction producing an extra sex chromosome",
          why: "Klinefelter (XXY) can bring learning disability and large testes-ish confusion, but the classic finding is SMALL firm testes with hypogonadism and gynecomastia — and XXY does not explain the grandfather's tremor/ataxia or the maternal amplification pattern.",
        },
        {
          label: "E",
          text: "Deficiency of hypoxanthine-guanine phosphoribosyltransferase with hyperuricemia",
          why: "Lesch-Nyhan (XLR, HPRT deficiency) shares self-mutilation with fragile X — the source's named confusion — but presents with dystonia, choreoathetosis, gout, and uric acid crystals, none of which is this boy's picture.",
        },
      ],
      reasoning:
        "Two features do the diagnosis: the full-mutation habitus (long face with large jaw, large everted ears, MVP, hypermobile joints, POSTPUBERTAL MACROORCHIDISM, autism with intellectual disability) and the three-generation ladder (grandfather premutation tremor/ataxia → mother mild involvement → son full mutation). The engine is the fragile X cascade: (CGG)n expansion during oogenesis → hypermethylation of cytosine residues → decreased FMR1 expression — the most common inherited cause of intellectual disability.",
    },
  },
  mnemonics: [
    {
      code: "“CAG = Caudate, ACh, GABA (Huntington)”",
      meaning: "The (CAG)n triplet maps to the caudate nucleus losing acetylcholine and GABA — the neurochemistry of chorea.",
      memorizes: "Huntington's repeat and its striatal biochemistry",
      whenToUse: "Chorea stems and triplet-matching questions.",
      clinical: "Autosomal dominant; the classic anticipation example — earlier onset with expansion through generations.",
    },
    {
      code: "“Chin, Giant Gonads (CGG = Fragile X); Fragile EGG — CGG expands in oogenesis”",
      meaning: "CGG's findings: protruding chin (long face with large jaw) and giant gonads (postpubertal macroorchidism); the EGG half fixes the parent-of-origin rule — expansion during oogenesis, so mothers amplify.",
      memorizes: "Fragile X repeat, phenotype, and transmitting parent",
      whenToUse: "Fragile X habitus, premutation, and pedigree stems.",
      clinical: "Premutation 50–200 → tremor, ataxia, 1° ovarian insufficiency; full mutation >200 → the intellectual-disability phenotype; most common inherited cause of intellectual disability.",
    },
    {
      code: "“Ataxic GAAit — Friedreich walks the AR lane alone”",
      meaning: "(GAA)n expansion presents with the ataxic gait, and it is the only autosomal recessive row in the repeat table.",
      memorizes: "Friedreich's repeat, presentation, and its unique AR mode",
      whenToUse: "Childhood ataxia with pes cavus/cardiomyopathy stems.",
      clinical: "Hypertrophic cardiomyopathy accompanies the neurodegeneration — the heart finding often appears in the stem.",
    },
  ],
  rapidReview: {
    s30: [
      "Anticipation: disease severity ↑ and age of onset ↓ in successive generations — the trinucleotide signature.",
      "Huntington disease: (CAG)n, AD — Caudate has ↓ACh and GABA.",
      "Myotonic dystrophy: (CTG)n, AD — Cataracts, Toupee, Gonadal atrophy (reduced fertility in females).",
      "Fragile X syndrome: (CGG)n, XD (atypical) — Chin (protruding), Giant Gonads.",
      "Friedreich ataxia: (GAA)n, AR — Ataxic GAAit (the lone recessive row).",
      "Fragile X: repeats in FMR1 → hypermethylation of cytosine residues → ↓expression; most common inherited cause of intellectual disability.",
      "(CGG)n expansion occurs during oogenesis — Fragile EGG.",
      "Premutation (50–200): tremor, ataxia, 1° ovarian insufficiency; full mutation (>200): macroorchidism, long face with large jaw, large everted ears, autism, MVP, hypermobile joints.",
    ],
    m3: [
      "Down syndrome is the most common genetic cause of intellectual disability overall, but most cases occur sporadically — fragile X leads among INHERITED causes.",
      "Fragile X self-mutilation can be confused with Lesch-Nyhan syndrome — the source's named trap.",
      "Friedreich ataxia pairs the ataxic gait with hypertrophic cardiomyopathy.",
      "Macroorchidism is POSTPUBERTAL in fragile X — a young child's testes may look normal.",
      "The premutation grandfather passes an unexpanded premutation to all daughters (CGG expands in oogenesis, not spermatogenesis).",
      "Huntington anticipation classically proceeds through paternal transmission (CAG), while fragile X amplifies maternally (CGG) — parent-of-origin differs by disease.",
    ],
    m10: [
      "Repeat length is a quantitative trait — phenotypes sit on a threshold ladder, not a binary.",
      "FMR1 silencing is epigenetic: methylation of the expanded CGG tract turns the gene off without changing its sequence.",
      "The four mnemonics are findings-packages, not just names — unpack them when the stem hides the disease.",
      "FXTAS (grandfather's tremor/ataxia) and FXPOI (ovarian insufficiency) are the premutation's two adult faces.",
      "Mitral valve prolapse + hypermobile joints make fragile X a connective-tissue mimic — the habitus discriminates.",
      "Anticipation collides with genetic counseling arithmetic: earlier onset in children is biology, not reduced penetrance in parents.",
    ],
  },
  recall: [
    {
      q: "Define genetic anticipation in the source's words.",
      a: "Trinucleotide repeat expansion diseases may show genetic anticipation — disease severity ↑ and age of onset ↓ in successive generations.",
    },
    {
      q: "Name the four repeat diseases with their triplets and inheritance modes.",
      a: "Huntington disease (CAG)n, AD; myotonic dystrophy (CTG)n, AD; fragile X syndrome (CGG)n, XD; Friedreich ataxia (GAA)n, AR.",
    },
    {
      q: "Walk the fragile X molecular cascade.",
      a: "Trinucleotide repeats (CGG)n in FMR1 → hypermethylation of cytosine residues → decreased expression; the (CGG)n expansion occurs during oogenesis (Fragile EGG).",
    },
    {
      q: "What distinguishes fragile X's epidemiologic claim about intellectual disability?",
      a: "It is the most common INHERITED cause of intellectual disability — Down syndrome is the most common genetic cause overall, but most Down cases occur sporadically.",
    },
    {
      q: "Contrast the fragile X premutation and full mutation phenotypes.",
      a: "Premutation (50–200 repeats) → tremor, ataxia, 1° ovarian insufficiency. Full mutation (>200 repeats) → postpubertal macroorchidism (enlarged testes), long face with large jaw, large everted ears, autism, mitral valve prolapse, hypermobile joints.",
    },
    {
      q: "Which fragile X finding is commonly confused with Lesch-Nyhan syndrome, and why?",
      a: "Self-mutilation is common in fragile X and can be confused with Lesch-Nyhan syndrome — the habitus (long face, large everted ears, macroorchidism) and Lesch-Nyhan's hyperuricemia/dystonia discriminate.",
    },
  ],
  related: [
    {
      title: "Muscular Dystrophies",
      note: "Myotonic dystrophy's full clinical package (CTG in DMPK, percussion myotonia, cataracts, gonadal atrophy) lives here with its own mechanisms.",
      topicId: "muscular-dystrophies",
    },
    {
      title: "Genetic Terminology & Population Genetics",
      note: "Anticipation is defined as a genetic term here — trinucleotide repeats are its source example.",
      topicId: "genetic-terms-popgen",
    },
    {
      title: "Modes of Inheritance",
      note: "Fragile X is the source's atypical X-linked example — the father rules and mother-only amplification modify the standard XLD pattern.",
      topicId: "modes-of-inheritance",
    },
    {
      title: "Chromatin Organization",
      note: "Hypermethylation is the silencing mark — the same chemistry that imprints chromosome 15 silences FMR1.",
      topicId: "chromatin-organization",
    },
  ],
  crossLinks: [
    {
      subject: "Neurology",
      connection: "Huntington chorea (caudate ↓ACh/↓GABA) and Friedreich ataxia are neurologic exam anchors built on repeat expansions.",
    },
    {
      subject: "Psychiatry",
      connection: "Fragile X autism-spectrum behavior and Huntington's neuropsychiatric onset present first to psychiatry.",
    },
    {
      subject: "Reproductive medicine",
      connection: "Fragile X premutation screening (1° ovarian insufficiency) is part of infertility workups — thresholds drive counseling.",
    },
  ],
};
