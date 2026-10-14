import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 9).
// Source: First Aid 2026, Part 1 pdf 101, 103 / book 79, 81 (amino acids:
// essential/glucogenic/ketogenic/acidic/basic classifications; amino acid
// derivatives map; catecholamine synthesis and tyrosine catabolism)

export const aminoAcids: KypUsMLENote = {
  id: "amino-acids",
  title: "Amino Acids & Their Derivatives",
  subtitle:
    "The classification ledger first (PVT TIM HaLL for the essentials, 'We met his valentine, who is so sweet' for the glucogenics, leucine and lysine the only purely ketogenic) then the two derivative maps: every precursor's product with its cofactor toll (BH4, B6, vitamin C, SAM) and the catecholamine assembly line with its three disease blocks — PKU, alkaptonuria, albinism.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — Amino acids, derivatives, catecholamine synthesis",
  difficulty: 3,
  readTime: 13,
  sourceRef:
    "First Aid 2026, Part 1 pp. 79, 81 (amino acids: essential, glucogenic and ketogenic, acidic, basic; amino acid derivatives; catecholamine synthesis and tyrosine catabolism)",
  tags: [
    "amino acids",
    "essential amino acids",
    "PVT TIM HaLL",
    "glucogenic amino acids",
    "ketogenic amino acids",
    "acidic amino acids",
    "basic amino acids",
    "histones",
    "amino acid derivatives",
    "catecholamines",
    "phenylalanine",
    "tyrosine",
    "L-DOPA",
    "dopamine",
    "norepinephrine",
    "epinephrine",
    "tyrosine hydroxylase",
    "BH4",
    "tetrahydrobiopterin",
    "tyrosinase",
    "melanin",
    "homogentisic acid",
    "alkaptonuria",
    "phenylketonuria",
    "albinism",
    "carbidopa",
    "vanillylmandelic acid",
    "homovanillic acid",
    "tryptophan",
    "serotonin",
    "niacin",
    "histidine",
    "histamine",
    "glutamate",
    "GABA",
    "arginine",
    "nitric oxide",
  ],
  core: {
    what: "Only L-amino acids are found in proteins. The essentials (PVT TIM HaLL): phenylalanine, valine, tryptophan, threonine, isoleucine, methionine, histidine, leucine, lysine. Glucogenic: methionine, histidine, valine ('We met his valentine, who is so sweet'); glucogenic/ketogenic: isoleucine, phenylalanine, threonine, tryptophan; ketogenic: leucine and lysine — the only purely ketogenic amino acids. Acidic: aspartic acid and glutamic acid (negatively charged at body pH). Basic: histidine, lysine, arginine (arginine most basic; histidine has no charge at body pH; arginine and histidine are required during periods of growth; arginine and lysine are ↑ in histones, which bind negatively charged DNA — 'His lys (lies) are basic'). The derivatives map: phenylalanine → tyrosine (BH4) → thyroxine (BH4), dopa (BH4) → dopamine (B6) → norepinephrine (vitamin C) → epinephrine (SAM), and melanin; tryptophan → serotonin (B6, BH4) → melatonin and niacin (B2, B6) → NAD+/NADP+; histidine → histamine (B6); glycine → porphyrin → heme (B6); glutamate → GABA (B6) and glutathione; arginine → creatine, urea, and nitric oxide (BH4). Catecholamine synthesis: phenylalanine hydroxylase (BH4) converts phenylalanine to tyrosine; tyrosine hydroxylase (BH4) — the rate-limiting step — makes L-DOPA; DOPA decarboxylase (B6) makes dopamine; dopamine β-hydroxylase (vitamin C) makes norepinephrine; PNMT (SAM, cortisol-induced in the adrenal medulla) makes epinephrine. Tyrosine catabolism runs through homogentisic acid (homogentisate oxidase) → maleylacetoacetic acid → fumarate → TCA cycle. The blocks: phenylalanine hydroxylase ⊟ = phenylketonuria ('Pure true Love does not exist.'), tyrosinase ⊟ = albinism, homogentisate oxidase ⊟ = alkaptonuria; carbidopa inhibits DOPA decarboxylase; degradation by COMT and MAO yields metanephrine, normetanephrine, vanillylmandelic acid (VMA), and homovanillic acid (HVA).",
    why: "The classification lists are pure one-liner territory, and the derivative maps carry three entire diseases (PKU, alkaptonuria, albinism), two lab tests (VMA, HVA), one drug target (carbidopa), and the cofactor quartet (BH4, B6, vitamin C, SAM) that ties nutrition to neurotransmitters.",
    keyIdea: "Read the page as a ledger plus two maps. The ledger sorts the twenty amino acids by need (essential = must eat) and by carbon fate (glucogenic = glucose skeleton, ketogenic = ketone bodies, both for the four duals — with leucine and lysine the only purely ketogenic pair). The first map asks 'what does each precursor become?' — and every arrow has a cofactor toll: BH4 for the aromatic hydroxylations, B6 for the decarboxylations (dopa→dopamine, histidine→histamine, glutamate→GABA, tryptophan→serotonin, glycine→porphyrin), vitamin C for dopamine β-hydroxylase, SAM for methylation (NE→epi, and creatine). The second map is the catecholamine assembly line with the three classic blocks: no phenylalanine hydroxylase (PKU — tyrosine becomes essential), no tyrosinase (albinism — no melanin), no homogentisate oxidase (alkaptonuria — homogentisic acid piles up). The degradation end-products are the lab tests: VMA for NE/epi, HVA for dopamine.",
  },
  mechanisms: [
    {
      id: "catecholamine-assembly-line",
      title: "Catecholamine synthesis — the assembly line with its cofactors and blocks",
      context: "Adrenal medulla and sympathetic neurons",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Phenylalanine (essential) arrives; BH4-dependent phenylalanine hydroxylase makes tyrosine",
            sublabel: "Input — in PKU this step fails and tyrosine becomes an essential amino acid.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Tyrosine hydroxylase (BH4) — the RATE-LIMITING step — makes L-DOPA",
            sublabel: "Process — the committed step of every catecholamine.",
            variant: "process",
          },
          {
            id: "s2",
            label: "DOPA decarboxylase (B6) makes dopamine — carbidopa inhibits this enzyme peripherally",
            sublabel: "Process — why L-DOPA + carbidopa treats Parkinson disease without peripheral conversion.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Dopamine β-hydroxylase (vitamin C) makes norepinephrine",
            sublabel: "Process — the hydroxylation vitamin C serves.",
            variant: "process",
          },
          {
            id: "o1",
            label: "PNMT (SAM; cortisol-induced) makes epinephrine — cortisol from the adjacent cortex induces the enzyme",
            sublabel: "Output — the adrenal medulla's privileged product.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Blocks: phenylalanine hydroxylase ⊟ = PKU · tyrosinase ⊟ = albinism · homogentisate oxidase ⊟ = alkaptonuria",
            sublabel: "Inhibitor — the three classic tyrosine-pathway diseases.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "tyrosine" },
          { from: "s1", to: "s2", label: "L-DOPA" },
          { from: "s2", to: "s3", label: "dopamine" },
          { from: "s3", to: "o1", label: "NE —SAM→ epi" },
          { from: "x1", to: "s1", type: "inhibit", label: "the three blocks" },
        ],
        caption:
          "Follow a phenylalanine carbon down the line: BH4 pays for the first hydroxylation (and again at the rate-limiting tyrosine hydroxylase), B6 pays for the decarboxylation to dopamine, vitamin C pays for the β-hydroxylation to norepinephrine, and SAM pays for the final methylation to epinephrine — with cortisol inducing PNMT so only the adrenal medulla, bathed in cortical venous blood, makes epinephrine. Every block has a disease: lose phenylalanine hydroxylase and phenylalanine piles up (PKU); lose tyrosinase and melanin never forms (albinism); lose homogentisate oxidase and homogentisic acid stains the connective tissue black (alkaptonuria). Degradation by COMT and MAO ends at VMA (from NE/epi) and HVA (from dopamine) — the tumor and Parkinson markers.",
      },
    },
    {
      id: "precursor-product-tolls",
      title: "The derivative tolls — every precursor's product and its cofactor",
      context: "Amino acid metabolism across tissues",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Eight precursors, one rule: the arrow carries the cofactor",
            sublabel: "Input — phenylalanine, tryptophan, histidine, glycine, glutamate, arginine, tyrosine.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Aromatic hydroxylations (phe→tyr, tyr→dopa/thyroxine, arginine→NO) charge BH4",
            sublabel: "Process — BH4 = tetrahydrobiopterin, regenerated by dihydropteridine reductase.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Decarboxylations (dopa, histidine, glutamate, tryptophan, glycine→porphyrin) charge B6",
            sublabel: "Process — PLP chemistry: removing a carboxyl group to make an amine.",
            variant: "process",
          },
          {
            id: "o1",
            label: "The products: thyroxine, catecholamines, melanin, serotonin, melatonin, niacin, NAD+/NADP+, histamine, heme, GABA, glutathione, creatine, urea, nitric oxide",
            sublabel: "Output — nearly every small-molecule messenger in the body.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "aromatic rings" },
          { from: "s1", to: "s2", label: "amine formation" },
          { from: "s2", to: "o1", label: "the derivative family" },
        ],
        caption:
          "The derivatives map is a cofactor audit: BH4 serves the three aromatic hydroxylations plus arginine→nitric oxide; B6 serves the five decarboxylations (dopa→dopamine, histidine→histamine, glutamate→GABA, tryptophan→serotonin, glycine→porphyrin); vitamin C serves dopamine β-hydroxylase; SAM methylates NE to epinephrine and participates in creatine synthesis. Tryptophan is the busiest precursor — serotonin → melatonin AND niacin → NAD+/NADP+ — which is why niacin deficiency (pellagra) can masquerade as a tryptophan-loss state, and arginine splits three ways (creatine, urea, nitric oxide).",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "amino-acid-derivatives-map",
      title: "Amino acid derivatives — the full product map",
      caption:
        "The source figure redrawn: phenylalanine → tyrosine (BH4) → thyroxine (BH4), dopa (BH4) → dopamine (B6) → NE (vitamin C) → epi (SAM), melanin; tryptophan → serotonin (B6, BH4) → melatonin, and → niacin (B2, B6) → NAD+/NADP+; histidine → histamine (B6); glycine → porphyrin (B6) → heme; glutamate → GABA (B6) and glutathione; arginine → creatine, urea, nitric oxide (BH4).",
      notice:
        "Run the cofactor audit across every arrow: BH4 appears exactly where an aromatic ring is hydroxylated (plus arginine→NO), B6 wherever a carboxyl group leaves as an amine forms, vitamin C once (dopamine β-hydroxylase), SAM at the final methylation to epinephrine. Then notice the two multi-product precursors: tryptophan (serotonin AND niacin) and arginine (creatine, urea, NO) — the exam's favorite branches.",
    },
    {
      kind: "visual",
      visualId: "catecholamine-synthesis-map",
      title: "Catecholamine synthesis & tyrosine catabolism — with the disease blocks",
      caption:
        "The second source figure redrawn: the synthetic chain phenylalanine —(phenylalanine hydroxylase, BH4)→ tyrosine —(tyrosine hydroxylase, BH4, rate-limiting)→ L-DOPA —(DOPA decarboxylase, B6; ⊟ carbidopa)→ dopamine —(dopamine β-hydroxylase, vitamin C)→ NE —(PNMT, SAM, cortisol-induced)→ epinephrine; the melanin branch (tyrosinase); the catabolic branch tyrosine → homogentisic acid —(homogentisate oxidase)→ maleylacetoacetic acid → fumarate → TCA cycle; the three disease blocks (PKU, albinism, alkaptonuria); and the COMT/MAO degradation products (metanephrine, normetanephrine, VMA, HVA).",
      notice:
        "Mark the three blocks on the map: phenylalanine hydroxylase (PKU — 'Pure true Love does not exist.'), tyrosinase (albinism — melanin branch), homogentisate oxidase (alkaptonuria — catabolic branch). Then the two pharmacology tags: carbidopa inhibits DOPA decarboxylase (peripheral L-DOPA protection) and the degradation endpoints VMA/HVA are the pheochromocytoma and Parkinson lab markers.",
    },
    {
      kind: "table",
      title: "The classification ledger — straight from the page",
      intro: "Essential, carbon fate, and charge classes with the source's own mnemonics.",
      columns: ["Class", "Members", "The mnemonic line"],
      rows: [
        ["Essential (must be eaten)", "Phenylalanine, Valine, Tryptophan, Threonine, Isoleucine, Methionine, Histidine, Leucine, Lysine", "PVT TIM HaLL"],
        ["Glucogenic (→ glucose)", "Methionine, Histidine, Valine", "“We met his valentine, who is so sweet (glucogenic)”"],
        ["Glucogenic AND ketogenic", "Isoleucine, Phenylalanine, Threonine, Tryptophan", "—"],
        ["Ketogenic only", "Leucine, Lysine", "The only purely ketogenic amino acids"],
        ["Acidic (− charged at body pH)", "Aspartic acid, glutamic acid", "—"],
        ["Basic", "Histidine, Lysine, Arginine", "“His lys (lies) are basic.” Arginine most basic; histidine has no charge at body pH"],
      ],
      caption:
        "Arginine and histidine are required during periods of growth; arginine and lysine are ↑ in histones, which bind negatively charged DNA. Only L-amino acids are found in proteins.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "The three tyrosine-pathway blocks",
      body:
        "Phenylketonuria — phenylalanine hydroxylase (or BH4 recycling) fails: 'Pure true Love does not exist' (Phenylalanine hydroxylase, Tyrosine hydroxylase, Lysine hydroxylase don't exist without the pathway), tyrosine becomes essential. Albinism — tyrosinase fails: no melanin from tyrosine. Alkaptonuria — homogentisate oxidase fails: homogentisic acid accumulates, darkening connective tissue (ochronosis). Same amino acid, three blocks, three diseases.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A question lists amino acids and asks which is purely ketogenic, or which pair cannot produce glucose.",
        discriminator: "Leucine and lysine",
        concept: "The only purely ketogenic amino acids",
        answer: "Leucine and lysine — the only purely ketogenic amino acids; all others are glucogenic or dual (ile, phe, thr, trp).",
      },
      {
        stem: "A child on a normal diet has musty body odor, fair skin, intellectual disability, and ↑ phenylalanine; tyrosine is low.",
        discriminator: "The phenylalanine hydroxylase block",
        concept: "Phenylketonuria",
        answer: "Autosomal recessive phenylalanine hydroxylase (or BH4) deficiency — phenylalanine accumulates, tyrosine becomes essential; treat with a phenylalanine-restricted, tyrosine-supplemented diet.",
      },
      {
        stem: "A patient's urine darkens on standing; exam shows sclera and ear cartilage pigmentation with arthritis.",
        discriminator: "Homogentisic acid",
        concept: "Alkaptonuria",
        answer: "Homogentisate oxidase deficiency — homogentisic acid accumulates (dark urine on standing, ochronotic arthritis).",
      },
      {
        stem: "A lab question asks which metabolite is elevated in pheochromocytoma, or which is low in Parkinson disease.",
        discriminator: "VMA vs HVA",
        concept: "Catecholamine degradation products",
        answer: "Vanillylmandelic acid (VMA) — the NE/epinephrine end product, ↑ in pheochromocytoma; homovanillic acid (HVA) — the dopamine end product, ↓ in Parkinson disease. Both derive from COMT + MAO degradation.",
      },
      {
        stem: "A pharmacology stem asks why carbidopa is given with L-DOPA.",
        discriminator: "Peripheral DOPA decarboxylase inhibition",
        concept: "Carbidopa",
        answer: "Carbidopa inhibits DOPA decarboxylase peripherally (does not cross the blood-brain barrier), so L-DOPA reaches the CNS before conversion to dopamine — reducing peripheral side effects and increasing central delivery.",
      },
      {
        stem: "A question asks which amino acids are ↑ in histones, or which is most basic, or which has no charge at body pH.",
        discriminator: "The basic trio's fine print",
        concept: "Histidine, lysine, arginine",
        answer: "Arginine and lysine are ↑ in histones (binding negatively charged DNA — 'His lys (lies) are basic'); arginine is the most basic; histidine has no charge at body pH; arginine and histidine are required during periods of growth.",
      },
    ],
    traps: [
      {
        a: "Tyrosine is always nonessential",
        b: "Tyrosine is conditionally essential in PKU",
        whyConfused: "The body normally makes tyrosine from phenylalanine.",
        keyDifference: "When phenylalanine hydroxylase fails (PKU), tyrosine cannot be made and becomes an essential dietary requirement.",
        clue: "PKU diet: restrict phenylalanine, supplement tyrosine.",
      },
      {
        a: "VMA marks dopamine turnover",
        b: "HVA marks dopamine turnover",
        whyConfused: "Both are catecholamine degradation acids.",
        keyDifference: "HVA is dopamine's end product (↓ in Parkinson); VMA is the NE/epinephrine end product (↑ in pheochromocytoma).",
        clue: "Match the amine: dopamine → HVA; NE/epi → VMA.",
      },
      {
        a: "Albinism blocks tyrosine production",
        b: "Albinism blocks melanin production",
        whyConfused: "Both involve tyrosine.",
        keyDifference: "Tyrosinase converts tyrosine to melanin — albinism is the melanin step, not tyrosine synthesis (that's PKU one step up).",
        clue: "Absent pigment with normal phenylalanine = tyrosinase.",
      },
      {
        a: "Tryptophan makes only serotonin",
        b: "Tryptophan makes serotonin AND niacin",
        whyConfused: "Serotonin is tryptophan's famous product.",
        keyDifference: "Tryptophan also converts to niacin (B2, B6) → NAD+/NADP+ — why pellagra can follow tryptophan-poor diets (eg, corn).",
        clue: "The double product: serotonin/melatonin AND niacin.",
      },
    ],
    pivots: [
      {
        lookAlike: "A tyrosine-pathway disease stem (PKU vs alkaptonuria vs albinism vs tyrosinemia)",
        differentiator: "Which enzyme on the map is blocked",
        correctPath:
          "↑Phenylalanine + musty odor + intellectual disability → PKU (phenylalanine hydroxylase); dark urine + ochronosis → alkaptonuria (homogentisate oxidase); absent pigment + normal labs → albinism (tyrosinase); ↑tyrosine itself → tyrosinemia.",
      },
      {
        lookAlike: "A catecholamine lab stem (VMA, HVA, metanephrine)",
        differentiator: "Which amine is being tracked",
        correctPath:
          "Pheochromocytoma → ↑ VMA and metanephrines (NE/epi); Parkinson disease → ↓ HVA (dopamine); neuroblastoma → ↑ HVA/VMA — always ask which amine the lab follows.",
      },
    ],
    miniCase: {
      vignette:
        "A 5-week-old boy born at term is referred after newborn screening follow-up. His phenylalanine level is markedly elevated and tyrosine is low; a musty odor is noted in his urine and sweat. He is fair-skinned with blue eyes despite his parents' darker coloring, and feeds well. The pediatrician reviews the family's diet plan and starts education about a special formula.",
      question:
        "In this condition, which amino acid becomes essential in the diet?",
      options: [
        {
          label: "A",
          text: "Tyrosine — the blocked hydroxylase makes endogenous synthesis impossible",
          correct: true,
          why: "Correct — phenylalanine hydroxylase deficiency (with BH4 available to rule out the cofactor variant) means tyrosine cannot be made from phenylalanine: it becomes an essential amino acid and must be supplemented while phenylalanine is restricted.",
        },
        {
          label: "B",
          text: "Leucine",
          why: "Leucine is always essential (PVT TIM HaLL) — but that is not what the disease changes.",
        },
        {
          label: "C",
          text: "Tryptophan",
          why: "Essential normally — but its metabolism is not what PKU alters.",
        },
        {
          label: "D",
          text: "Glycine",
          why: "Glycine is a nonessential derivative-maker (porphyrin/heme) — unaffected by PKU.",
        },
        {
          label: "E",
          text: "Alanine",
          why: "Alanine is nonessential (pyruvate transamination) and unrelated to the phenylalanine block.",
        },
      ],
      reasoning:
        "PKU is the phenylalanine hydroxylase (or BH4) block: phenylalanine accumulates (musty odor, fair skin from impaired melanin) while tyrosine production collapses. The diet therefore restricts phenylalanine AND supplements tyrosine — the amino acid the disease just made essential.",
    },
  },
  mnemonics: [
    {
      code: "“PVT TIM HaLL”",
      meaning: "The essential amino acids: Phenylalanine, Valine, Tryptophan, Threonine, Isoleucine, Methionine, Histidine, Leucine, Lysine.",
      memorizes: "The nine essential amino acids",
      whenToUse: "Any 'which amino acid must be eaten' or diet question.",
      clinical: "Growth requires the essentials — including the conditionally essential pair arginine and histidine.",
    },
    {
      code: "“We met his valentine, who is so sweet (glucogenic)”",
      meaning: "Methionine, Histidine, Valine — the purely glucogenic subset of the essentials ('met his valentine' = Met, His, Val).",
      memorizes: "Which essentials make glucose",
      whenToUse: "Carbon-fate classification stems.",
      clinical: "These feed gluconeogenesis during fasting.",
    },
    {
      code: "“Pure true Love does not exist.”",
      meaning: "The source's PKU line: without phenylalanine metabolism, Phenylalanine hydroxylase's product line collapses and tyrosine (and its derivatives) must come from the diet.",
      memorizes: "PKU's enzyme block and tyrosine's conditional essentiality",
      whenToUse: "PKU mechanism and diet questions.",
      clinical: "Restrict phenylalanine, supplement tyrosine, avoid aspartame (phenylalanine source).",
    },
  ],
  rapidReview: {
    s30: [
      "Only L-amino acids are found in proteins",
      "Essential = PVT TIM HaLL; ketogenic only = leucine + lysine",
      "Basic: His, Lys, Arg ('His lys lies are basic')",
    ],
    m3: [
      "Glucogenic essentials: Met, His, Val ('We met his valentine, who is so sweet')",
      "Dual (gluco+keto): Ile, Phe, Thr, Trp",
      "Acidic: aspartic and glutamic acid (− at body pH)",
    ],
    m10: [
      "Catecholamine chain: phe —(BH4)→ tyr —(BH4, rate-limiting)→ L-DOPA —(B6)→ DA —(vit C)→ NE —(SAM)→ epi",
      "Blocks: PKU (phe hydroxylase), albinism (tyrosinase), alkaptonuria (homogentisate oxidase)",
      "VMA = NE/epi end product; HVA = dopamine end product; carbidopa ⊟ DOPA decarboxylase",
    ],
  },
  recall: [
    {
      q: "List the essential amino acids and their mnemonic.",
      a: "PVT TIM HaLL: Phenylalanine, Valine, Tryptophan, Threonine, Isoleucine, Methionine, Histidine, Leucine, Lysine.",
    },
    {
      q: "Which amino acids are purely ketogenic? Purely glucogenic among the essentials? Dual?",
      a: "Purely ketogenic: leucine and lysine. Glucogenic essentials: methionine, histidine, valine. Dual (glucogenic + ketogenic): isoleucine, phenylalanine, threonine, tryptophan.",
    },
    {
      q: "Name the acidic and basic amino acids and their charge behavior.",
      a: "Acidic: aspartic acid, glutamic acid — negatively charged at body pH. Basic: histidine, lysine, arginine — arginine most basic, histidine has no charge at body pH; arginine and lysine are ↑ in histones (bind negatively charged DNA).",
    },
    {
      q: "Write the catecholamine synthesis chain with enzymes and cofactors.",
      a: "Phenylalanine —(phenylalanine hydroxylase, BH4)→ tyrosine —(tyrosine hydroxylase, BH4; rate-limiting)→ L-DOPA —(DOPA decarboxylase, B6)→ dopamine —(dopamine β-hydroxylase, vitamin C)→ norepinephrine —(PNMT, SAM; cortisol-induced)→ epinephrine.",
    },
    {
      q: "Which three enzymes of tyrosine metabolism carry the classic disease blocks?",
      a: "Phenylalanine hydroxylase (PKU), tyrosinase (albinism), homogentisate oxidase (alkaptonuria).",
    },
    {
      q: "What are the catecholamine degradation products, and which amines do they track?",
      a: "COMT + MAO degrade catecholamines: metanephrine (from epi), normetanephrine (from NE), vanillylmandelic acid (VMA, the NE/epi end product), homovanillic acid (HVA, the dopamine end product).",
    },
    {
      q: "Give tryptophan's two product branches with cofactors.",
      a: "Tryptophan → serotonin (B6, BH4) → melatonin; and tryptophan → niacin (B2, B6) → NAD+/NADP+.",
    },
    {
      q: "What does arginine become?",
      a: "Creatine, urea (via the urea cycle), and nitric oxide (via nitric oxide synthase, BH4-dependent).",
    },
  ],
  related: [
    {
      title: "TCA Cycle & Pyruvate Dehydrogenase",
      topicId: "tca-cycle-pdh",
      note: "Tyrosine catabolism lands as fumarate in the TCA cycle — an amino acid feeding the circle it shares with the sugar corridors.",
    },
    {
      title: "Pentose Phosphate Pathway",
      topicId: "pentose-phosphate-pathway",
      note: "Glutathione — a glutamate derivative on this page — is the molecule the shunt's NADPH keeps reduced; the two pages meet at the antioxidant line.",
    },
    {
      title: "Urea Cycle Disorders & Hyperammonemia",
      topicId: "urea-cycle-disorders",
      note: "Arginine's other product: the urea cycle itself, one map over — where amino acid nitrogen exits the body.",
    },
    {
      title: "Water-Soluble Vitamins I (B1, B2, B3, B6, B7)",
      topicId: "b-vitamins-1",
      note: "The cofactor tolls on every arrow: B6 for the decarboxylations, B2+B6 for tryptophan→niacin, and niacin itself as NAD+/NADP+ — the vitamins ARE the map's currency.",
    },
  ],
  crossLinks: [
    {
      subject: "Neurology & Pharmacology",
      connection: "L-DOPA + carbidopa in Parkinson disease — peripheral DOPA decarboxylase inhibition protects the central dose; HVA falls as dopamine degenerates.",
    },
    {
      subject: "Endocrinology",
      connection: "Cortisol from the adrenal cortex induces PNMT so the medulla makes epinephrine — the cortisol-to-portal-blood anatomical privilege.",
    },
    {
      subject: "Genetics",
      connection: "PKU (autosomal recessive), albinism (tyrosinase variants), and alkaptonuria — three Mendelian blocks on one metabolic map.",
    },
  ],
};
