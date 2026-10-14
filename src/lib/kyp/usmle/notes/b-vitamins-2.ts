import type { KypUsMLENote } from "../types";

// Biochemistry — Nutrition (N-batch, book order 4/8).
// Source: First Aid 2026, Part 1 pdf 88–89 / book 66–67 (vitamins B6, B7,
// B9, B12: functions, deficiencies, the B12/folate one-carbon figure)

export const bVitamins2: KypUsMLENote = {
  id: "b-vitamins-2",
  title: "Vitamins B6, B7, B9 & B12",
  subtitle:
    "Pyridoxine's transaminases and neurotransmitters, biotin's three carboxylases, folate's jejun“gle” absorption and NTD prevention, and cobalamin's two enzymes — with the one-carbon map that decides which megaloblastic anemia carries neurologic ruin and which does not.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Nutrition",
  pilotCategory: "Nutrition — water-soluble vitamins (B6–B12)",
  difficulty: 3,
  readTime: 13,
  sourceRef:
    "First Aid 2026, Part 1 pp. 66–67 (vitamins B6 pyridoxine, B7 biotin, B9 folate, B12 cobalamin; one-carbon transfer map; subacute combined degeneration)",
  tags: [
    "pyridoxine",
    "PLP",
    "transamination",
    "ALT",
    "AST",
    "sideroblastic anemia",
    "isoniazid",
    "biotin",
    "carboxylase",
    "pyruvate carboxylase",
    "acetyl-CoA carboxylase",
    "propionyl-CoA carboxylase",
    "avidin",
    "folate",
    "THF",
    "neural tube defects",
    "megaloblastic anemia",
    "hypersegmented PMNs",
    "cobalamin",
    "methionine synthase",
    "methylmalonyl-CoA mutase",
    "subacute combined degeneration",
    "homocysteine",
    "methylmalonic acid",
    "pernicious anemia",
    "Diphyllobothrium latum",
    "jejunum",
  ],
  core: {
    what: "B6 (pyridoxine) → PLP, cofactor for transamination (ALT, AST), decarboxylation, glycogen phosphorylase, and synthesis of glutathione, cystathionine, heme, niacin, histamine, and neurotransmitters (serotonin, epinephrine, NE, dopamine, GABA); deficiency — convulsions, hyperirritability, peripheral neuropathy (isoniazid, OCPs), sideroblastic anemia (impaired hemoglobin synthesis, iron excess). B7 (biotin) — cofactor for carboxylases (add a 1-carbon group): pyruvate carboxylase 3C→4C, acetyl-CoA carboxylase 2C→3C, propionyl-CoA carboxylase 3C→4C; deficiency rare — dermatitis, enteritis, alopecia (long-term antibiotics, raw egg whites/avidin). B9 (folate) → THF, coenzyme for 1-carbon transfer/methylation and synthesis of nitrogenous bases; found in leafy greens, produced by gut microbiota, absorbed in jejunum; deficiency — macrocytic megaloblastic anemia, hypersegmented PMNs, glossitis, NO neurologic symptoms; ↑homocysteine with NORMAL methylmalonic acid; alcohol overuse, pregnancy; drugs phenytoin/trimethoprim/methotrexate; supplement ≥1 month pre-conception through pregnancy to ↓NTD. B12 (cobalamin) — cofactor for methionine synthase (CH3 transfer as methylcobalamin) and methylmalonyl-CoA mutase; deficiency — megaloblastic anemia + paresthesias + subacute combined degeneration (dorsal columns, lateral corticospinal, spinocerebellar tracts) due to abnormal myelin; ↑homocysteine AND ↑methylmalonic acid + 2° folate deficiency; animal products only; years of liver stores; causes — malabsorption (sprue, enteritis, D latum, achlorhydria, bacterial overgrowth, alcohol), lack of intrinsic factor (pernicious anemia, gastric bypass), terminal ileum resection (Crohn), metformin, veganism; folate masks hematologic but not neurologic symptoms.",
    why: "B12-versus-folate is the single most-tested vitamin discrimination on Step 1: same anemia, opposite neurologic risk, and one abnormal lab (methylmalonic acid) that separates them. B6 and B7 complete the metabolic-cofactor quartet with drug causes (isoniazid, OCPs) and the raw-egg-white story the diet table predicted.",
    keyIdea: "B12 owns TWO enzymes: methionine synthase (remethylates homocysteine — fails → folate trap + ↑homocysteine) and methylmalonyl-CoA mutase (fails → ↑methylmalonic acid → abnormal myelin → subacute combined degeneration). Folate owns only the one-carbon chemistry (nitrogenous bases) — so folate deficiency raises homocysteine with NORMAL methylmalonic acid and NEVER touches nerves. Give folate without checking B12 and you fix the anemia while the cord degenerates: folate masks the hematologic but not the neurologic symptoms.",
  },
  mechanisms: [
    {
      id: "b12-two-enzyme-failure",
      title: "B12 deficiency — two enzymes, one cord, one trapped folate",
      context: "Megaloblastic anemia ± neurologic signs",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "B12 (cobalamin) deficiency: malabsorption, lack of intrinsic factor, terminal ileum loss, metformin, or veganism",
            sublabel: "Input — animal products only; synthesized distal to the absorption site, so it must be eaten; liver stores last years.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Methionine synthase stalls (B12 as methylcobalamin transfers CH3 from THF–CH3 to homocysteine)",
            sublabel: "Process — homocysteine rises, methionine falls, and THF is trapped as 5-methyl-THF: the folate trap → 2° folate deficiency.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Methylmalonyl-CoA mutase stalls — methylmalonyl-CoA accumulates as methylmalonic acid",
            sublabel: "Process — abnormal myelin synthesis: subacute combined degeneration of dorsal columns, lateral corticospinal, and spinocerebellar tracts.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Macrocytic megaloblastic anemia + hypersegmented PMNs + glossitis (identical to folate deficiency)",
            sublabel: "Output — impaired DNA synthesis from the trapped folate; paresthesias and loss of vibration/proprioception follow.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Labs: ↑homocysteine AND ↑methylmalonic acid — the double rise that names B12",
            sublabel: "Output — folate deficiency shares the homocysteine rise but keeps methylmalonic acid normal.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Folate supplementation masks the HEMATOLOGIC symptoms but not the NEUROLOGIC symptoms",
            sublabel: "Clinical — the trap and the reason to check B12 before treating apparent folate deficiency.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "methionine synthase" },
          { from: "trigger", to: "s2", label: "mutase" },
          { from: "s1", to: "o1", label: "folate trap" },
          { from: "s2", to: "o1", label: "myelin failure" },
          { from: "s1", to: "o2", label: "↑Hcy" },
          { from: "s2", to: "o2", label: "↑MMA" },
          { from: "x1", to: "o1", type: "inhibit", label: "anemia masked" },
        ],
        caption:
          "B12 is the only vitamin whose two enzymes diverge clinically: methionine synthase failure traps folate (5-methyl-THF cannot donate its CH3) and produces an anemia identical to folate deficiency with ↑homocysteine, while methylmalonyl-CoA mutase failure floods the cord with methylmalonic acid and dissolves myelin in the dorsal columns, lateral corticospinal, and spinocerebellar tracts — paresthesias and subacute combined degeneration that become irreversible if prolonged. Both labs rise in B12; in folate only homocysteine rises — and repleting folate alone repairs the blood while the degeneration marches on.",
      },
    },
    {
      id: "folate-one-carbon-demand",
      title: "Folate — the one-carbon pool behind every dividing cell",
      context: "Rapidly dividing tissues: marrow, gut, neural tube",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Folate (B9) deficiency: alcohol overuse, pregnancy, phenytoin/trimethoprim/methotrexate, poor intake",
            sublabel: "Input — THF is the 1-carbon transfer coenzyme; stores only ~3-4 months.",
            variant: "input",
          },
          {
            id: "s1",
            label: "1-carbon transfer/methylation reactions fail — synthesis of nitrogenous bases in DNA and RNA falls",
            sublabel: "Process — nuclear maturation lags cytoplasmic growth in every dividing cell.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Macrocytic megaloblastic anemia, hypersegmented PMNs, glossitis — NO neurologic symptoms",
            sublabel: "Output — the marrow and tongue, never the cord.",
            variant: "output",
          },
          {
            id: "o2",
            label: "↑homocysteine with NORMAL methylmalonic acid",
            sublabel: "Output — the lab pair that separates folate from B12 at the bench.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Supplemental folic acid ≥1 month before conception and during pregnancy ↓ risk of neural tube defects",
            sublabel: "Clinical — B9 for the 9 months of pregnancy, and 1 month prior.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "↓THF" },
          { from: "s1", to: "o1", label: "megaloblastosis" },
          { from: "s1", to: "o2", label: "↑Hcy, MMA normal" },
          { from: "x1", to: "trigger", type: "inhibit", label: "pre-conception folate" },
        ],
        caption:
          "Folate is the one-carbon currency of DNA synthesis: THF carries the single carbons that build purines and thymidylate, so deficiency slows nuclear maturation in the fastest-dividing tissues — macrocytic megaloblastic anemia with hypersegmented PMNs and glossitis. Methionine synthase still works (B12 is present), so methylmalonic acid stays normal while homocysteine rises. The demand side is the pregnancy logic: neural tube closes in week 4, often before the pregnancy is known — hence ≥1 month of supplementation prior to conception and through pregnancy to ↓NTD risk.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "b12-folate-one-carbon-map",
      title: "The B12/folate one-carbon map — the source figure redrawn",
      caption:
        "The source's p. 67 figure rebuilt with its full node set: the folate-methionine loop (Protein → Methionine → SAM → CH3 to anabolic pathways → S-adenosyl homocysteine → Homocysteine → methionine synthase (B12) with THF–CH3 returning THF; SAH → Adenosine), the B6 transsulfuration arm (Homocysteine → Cysteine), and the B12 mutase arm (odd-chain fatty acids + branched-chain amino acids → Methylmalonyl-CoA → Succinyl-CoA → TCA cycle, with Succinyl-CoA →(B6)→ Heme) — plus the deficiency discriminator strip: B12 ↑homocysteine AND ↑methylmalonic acid; folate ↑homocysteine with NORMAL methylmalonic acid.",
      notice:
        "Read the map as two B12-dependent exits and one B6 exit: methionine synthase (top loop — B12) recycles homocysteine AND un-traps folate; methylmalonyl-CoA mutase (right arm — B12) feeds the TCA cycle; cystathionine beta-synthase (down-left — B6) sends homocysteine to cysteine. Every node placement preserves the source figure's logic so the redraw works as its stand-in.",
    },
    {
      kind: "text",
      title: "B6 pyridoxine — the transamination neurotransmitter vitamin",
      body: [
        "Pyridoxine is converted to pyridoxal phosphate (PLP), one of biochemistry's busiest cofactors: transamination (ALT and AST), decarboxylation reactions, and glycogen phosphorylase. The synthesis list is the exam's favorite snapshot — glutathione, cystathionine, heme, niacin, histamine, and the neurotransmitters serotonin, epinephrine, norepinephrine, dopamine, and GABA — which is why B6 deficiency produces convulsions (no GABA), hyperirritability, and peripheral neuropathy, and why the deficiency is inducible by isoniazid and oral contraceptives. The hematologic sign is sideroblastic anemia: impaired hemoglobin synthesis with iron excess leaves ringed sideroblasts in the marrow.",
        "B6 is also the answer to several pharmacology questions in disguise: isoniazid co-prescription (prevents the neuropathy and the pellagra route from the previous note), pyridoxine for isoniazid overdose-associated seizures, and the B6-dependent transamination that ALT/AST assays ride on. On the one-carbon map, B6's cystathionine β-synthase is the homocysteine exit toward cysteine — the reason B6 deficiency, like B12 and folate deficiency, can raise homocysteine.",
      ],
    },
    {
      kind: "table",
      title: "The three biotin carboxylases — carbon-count logic",
      intro: "Biotin cofactors add a 1-carbon group; the source counts the carbons (book p. 66).",
      columns: ["Enzyme (pathway)", "Reaction", "Why it matters"],
      rows: [
        ["Pyruvate carboxylase (gluconeogenesis)", "pyruvate (3C) → oxaloacetate (4C)", "The first committed gluconeogenesis step; biotin + ATP"],
        ["Acetyl-CoA carboxylase (fatty acid synthesis)", "acetyl-CoA (2C) → malonyl-CoA (3C)", "The rate-limiting step of lipogenesis"],
        ["Propionyl-CoA carboxylase (fatty acid oxidation, branched-chain amino acid breakdown)", "propionyl-CoA (3C) → methylmalonyl-CoA (4C)", "Feeds the B12-dependent mutase → succinyl-CoA"],
      ],
      caption:
        "Deficiency is relatively rare — dermatitis, enteritis, alopecia — from long-term antibiotic use (gut microbiota supply is lost) or excessive ingestion of raw egg whites: 'Avidin in egg whites avidly binds biotin.' Every carboxylase reaction on this table is biotin-dependent; the propionyl-CoA line hands off to the B12 map's mutase — a built-in cross-topic bridge.",
    },
    {
      kind: "compare",
      title: "B12 vs folate deficiency — the exam's one-table sort",
      intro: "Same anemia; everything else diverges (book pp. 66–67).",
      columns: ["Vitamin B12 (cobalamin)", "Vitamin B9 (folate)"],
      rows: [
        { label: "Cofactor role", a: "Methionine synthase (CH3 as methylcobalamin) + methylmalonyl-CoA mutase", b: "THF — 1-carbon transfer/methylation; nitrogenous base synthesis" },
        { label: "Anemia", a: "Macrocytic megaloblastic + hypersegmented PMNs", b: "Identical macrocytic megaloblastic + hypersegmented PMNs" },
        { label: "Neurologic", a: "Paresthesias + SUBACUTE COMBINED DEGENERATION (dorsal columns, lateral corticospinal, spinocerebellar) — abnormal myelin; prolonged → irreversible", b: "NO neurologic symptoms" },
        { label: "Homocysteine", a: "↑", b: "↑" },
        { label: "Methylmalonic acid", a: "↑ (mutase fails)", b: "NORMAL" },
        { label: "Causes", a: "Malabsorption (sprue, enteritis, D latum, achlorhydria, bacterial overgrowth, alcohol), lack of IF (pernicious anemia, gastric bypass), terminal ileum resection (Crohn), metformin, veganism", b: "Alcohol overuse, pregnancy; drugs (phenytoin, trimethoprim, methotrexate); poor intake" },
        { label: "Source & stores", a: "Animal products only; years of liver stores", b: "Leafy greens + gut microbiota; absorbed in jejunum ('foliage in the jejun\"gle'); ~3-4 month stores" },
        { label: "Key management fact", a: "Folate masks the hematologic but NOT the neurologic symptoms", b: "Supplement ≥1 month pre-conception through pregnancy → ↓NTD" },
      ],
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why B12 deficiency takes years and folate months",
      body: "The timeline difference is pure storage: B12 keeps a very large reserve pool (several years) stored primarily in the liver, while folate's small reserve pool (also hepatic) covers only ~3-4 months. A gastric bypass or a vegan conversion surfaces as B12 deficiency years later, while alcohol overuse or a methotrexate course surfaces as folate deficiency within months. Absorption geography completes the story — folate is absorbed in the jejunum, B12 in the terminal ileum after intrinsic factor binding, so Crohn's terminal ileum resection takes out B12 specifically while jejunal disease (celiac) takes folate.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Five recurring shapes: (1) the discriminator stem — megaloblastic anemia with paresthesias and loss of vibration/proprioception → B12 (↑Hcy AND ↑MMA); identical anemia, normal nerves → folate (↑Hcy, normal MMA); (2) the cause-matching stem — pernicious anemia (anti-intrinsic factor), gastric bypass, D latum, terminal ileum resection, metformin, veganism → B12; phenytoin/trimethoprim/methotrexate, alcohol, pregnancy → folate; (3) the masking stem — folate given for an assumed folate-deficiency anemia, neurologic signs emerge → folate masked B12 deficiency; (4) the pre-conception stem — ≥1 month before conception through pregnancy ↓NTD; (5) the B6/B7 stems — isoniazid or OCP neuropathy + sideroblastic anemia → B6; raw-egg-white or long-term-antibiotic dermatitis/enteritis/alopecia → B7.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Subacute combined degeneration — the cord finding that cannot wait",
      body: [
        "The neurologic lesion of B12 deficiency is subacute combined degeneration: degeneration of the dorsal columns (loss of vibration and proprioception), lateral corticospinal tracts (spasticity, weakness, Babinski), and spinocerebellar tracts (ataxia), all due to abnormal myelin from accumulated methylmalonic acid. Paresthesias in the feet usually open the syndrome; prolonged deficiency → irreversible nerve damage is the source's warning, which is why the anemia workup must include B12 before folate is given alone — folate supplementation can mask the hematologic symptoms of B12 deficiency but not the neurologic ones.",
        "Every cause is a lesson in B12 geography: the vitamin exists only in animal products because its site of synthesis (intestinal microbiota, distal gut) is distal to its site of absorption (terminal ileum with intrinsic factor). Malabsorption (sprue, enteritis, Diphyllobothrium latum, achlorhydria, bacterial overgrowth, alcohol overuse) steals it; pernicious anemia and gastric bypass remove intrinsic factor; Crohn's resection removes the terminal ileum; metformin interferes with absorption; veganism never supplied it. In each, treatment is B12 repletion — parenteral when absorption is the problem — with folate added only once B12 is covered.",
      ],
    },
  ],
  drugs: [
    {
      drug: "Folic acid (vitamin B9)",
      klass: "Vitamin supplementation",
      target: "THF-dependent 1-carbon transfer (nitrogenous base synthesis)",
      mechanism: "Replenishes the folate pool for DNA synthesis",
      effect: "Corrects megaloblastic anemia; ↓NTD risk",
      uses: "Pregnancy (≥1 month pre-conception through gestation), alcohol overuse, methotrexate/trimethoprim/phenytoin co-therapy",
      adverse: "Masks the hematologic (not neurologic) findings of B12 deficiency",
      clue: "Pre-conception counseling; macrocytic anemia without neurologic signs",
    },
    {
      drug: "Pyridoxine (vitamin B6)",
      klass: "Vitamin supplementation",
      target: "PLP-dependent enzymes (transamination, decarboxylation)",
      mechanism: "Restores neurotransmitter and heme synthesis",
      effect: "Prevents INH-induced neuropathy and seizures; corrects sideroblastic anemia",
      uses: "Isoniazid co-therapy (and overdose), OCP-associated deficiency, sideroblastic anemia of B6 deficiency",
      adverse: "High doses cause sensory neuropathy (the overdose irony)",
      clue: "INH + numbness/tingling; ringed sideroblasts",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 66-year-old vegan with 8 years without animal products has a macrocytic anemia, hypersegmented PMNs, glossitis, loss of vibration/proprioception in the feet, and spastic paraparesis.",
        discriminator: "Megaloblastic anemia + dorsal column/corticospinal signs",
        concept: "Vitamin B12 deficiency — subacute combined degeneration",
        answer: "B12 is found only in animal products; deficiency → methionine synthase + methylmalonyl-CoA mutase failure → ↑homocysteine AND ↑methylmalonic acid, megaloblastic anemia with paresthesias and subacute combined degeneration (dorsal columns, lateral corticospinal, spinocerebellar) from abnormal myelin",
      },
      {
        stem: "A chronic alcohol overusing patient has a macrocytic anemia with hypersegmented PMNs, glossitis, and an entirely normal neurologic examination; homocysteine is elevated, methylmalonic acid is normal.",
        discriminator: "↑homocysteine with NORMAL methylmalonic acid + no neurologic signs",
        concept: "Folate (B9) deficiency",
        answer: "THF depletion in alcohol overuse: macrocytic megaloblastic anemia, hypersegmented PMNs, glossitis, no neurologic symptoms; labs ↑homocysteine, normal methylmalonic acid",
      },
      {
        stem: "A woman who took folic acid for anemia in pregnancy develops worsening paresthesias and a positive Romberg sign despite a normalized MCV.",
        discriminator: "Anemia corrected by folate, nerves still failing",
        concept: "Folate masking of B12 deficiency",
        answer: "B9 (folate) supplementation can mask the hematologic symptoms of B12 deficiency but not the neurologic symptoms — check B12 (and treat) in every megaloblastic anemia before or with folate",
      },
      {
        stem: "A patient on isoniazid therapy develops numbness in a stocking distribution and a microcytic anemia with ringed sideroblasts in the marrow.",
        discriminator: "INH + peripheral neuropathy + sideroblastic anemia",
        concept: "Vitamin B6 (pyridoxine) deficiency",
        answer: "PLP deficiency (inducible by isoniazid and oral contraceptives): convulsions, hyperirritability, peripheral neuropathy, sideroblastic anemia due to impaired hemoglobin synthesis and iron excess — give pyridoxine with INH",
      },
      {
        stem: "A 6-year-old fed 8 raw egg whites daily for two months develops a scaly periorificial dermatitis, diarrhea, and alopecia.",
        discriminator: "Raw egg whites + dermatitis/enteritis/alopecia triad",
        concept: "Biotin (B7) deficiency",
        answer: "Avidin in egg whites avidly binds biotin; biotin is the cofactor for the carboxylases (pyruvate 3C→4C, acetyl-CoA 2C→3C, propionyl-CoA 3C→4C); deficiency is rare — dermatitis, enteritis, alopecia (also long-term antibiotic use)",
      },
      {
        stem: "A 2-year-old with a fish-tapeworm infection develops a macrocytic anemia with loss of proprioception; anti-intrinsic factor antibodies are negative.",
        discriminator: "Diphyllobothrium latum competing for B12 in the ileum",
        concept: "B12 deficiency — malabsorption cause-matching",
        answer: "D latum (also sprue, enteritis, achlorhydria, bacterial overgrowth, alcohol overuse; plus IF lack — pernicious anemia, gastric bypass; terminal ileum resection; metformin; veganism)",
      },
    ],
    traps: [
      {
        a: "B12 deficiency",
        b: "Folate deficiency",
        whyConfused: "Identical megaloblastic anemia and hypersegmented PMNs; both raise homocysteine.",
        keyDifference: "B12: ↑methylmalonic acid + subacute combined degeneration (dorsal columns, lateral corticospinal, spinocerebellar). Folate: NORMAL methylmalonic acid, NO neurologic symptoms, drug/pregnancy causes.",
        clue: "The methylmalonic acid level and the neurologic examination do the sorting.",
      },
      {
        a: "Subacute combined degeneration (B12)",
        b: "Vitamin E deficiency demyelination",
        whyConfused: "Both hit posterior columns and spinocerebellar tracts.",
        keyDifference: "B12 adds lateral corticospinal signs, macrocytic anemia, and ↑MMA; vitamin E adds acanthocytosis/hemolytic anemia and mimics Friedreich ataxia without any megaloblastic picture.",
        clue: "Blood smear: hypersegmented PMNs → B12; acanthocytes → E.",
      },
      {
        a: "B7 deficiency (raw egg whites)",
        b: "Zinc deficiency (acrodermatitis enteropathica)",
        whyConfused: "Both: dermatitis + diarrhea + alopecia.",
        keyDifference: "B7 follows raw-egg-white (avidin) or long-term antibiotic exposure and lacks the periorificial/acral distribution; zinc deficiency shows the periorificial + acral rash of acrodermatitis enteropathica.",
        clue: "Diet history (egg whites vs congenital absorption defect) and rash distribution.",
      },
      {
        a: "Sideroblastic anemia of B6 deficiency",
        b: "Lead poisoning (also blocks heme synthesis)",
        whyConfused: "Both produce defective hemoglobin synthesis with microcytosis and marrow sideroblasts.",
        keyDifference: "B6 deficiency comes with INH/OCP exposure, neuropathy, and hyperirritability/convulsions; lead lines (basophilic stippling, Burton lines, abdominal colic) and elevated blood lead separate it.",
        clue: "Drug list (INH, OCPs) → B6; pica/occupational exposure → lead.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'macrocytic anemia with neurologic signs' stem offering B12 deficiency, hypothyroidism, and myelodysplasia",
        differentiator: "The vibration/proprioception loss and the MMA level",
        correctPath: "Dorsal column + corticospinal signs with ↑homocysteine AND ↑methylmalonic acid → B12; hypothyroid myxedema gives slow mentation and delayed reflexes without megaloblastosis; myelodysplasia dysplasia affects all lines without homocysteine/MMA shifts.",
      },
      {
        lookAlike: "A 'patient on INH with neuropathy' stem offering B6 deficiency, B12 deficiency, and B3 deficiency",
        differentiator: "What else INH does to the B-vitamin economy",
        correctPath: "Isoniazid strips B6 → neuropathy ± sideroblastic anemia (give pyridoxine); it also lowers B6 for niacin synthesis → pellagra (the 3 D's); B12 deficiency is not an INH effect — its own causes (IF loss, ileal disease) are separate.",
      },
    ],
    miniCase: {
      vignette:
        "A 71-year-old woman presents with 6 months of fatigue, sore tongue, and worsening “pins and needles” in both feet. She has Crohn disease and underwent terminal ileum resection 3 years ago. Examination reveals glossitis, decreased vibration and proprioception at the toes, a positive Romberg sign, mild spasticity with brisk patellar reflexes, and an extensor plantar response. CBC: MCV 118 fL; smear shows macro-ovalocytes and hypersegmented neutrophils. Total homocysteine is elevated and serum methylmalonic acid is elevated.",
      question: "Which of the following explains BOTH the anemia and the neurologic findings?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Vitamin B12 deficiency after terminal ileum resection — failure of methionine synthase and methylmalonyl-CoA mutase causing megaloblastic anemia with subacute combined degeneration",
          why: "Correct. Terminal ileum resection removes the B12 absorption site; years of liver stores masked the loss, then both enzymes failed: methionine synthase → folate trap → megaloblastic anemia + ↑homocysteine; methylmalonyl-CoA mutase → ↑methylmalonic acid → abnormal myelin in dorsal columns (vibration/proprioception, Romberg), lateral corticospinal (spasticity, Babinski), and spinocerebellar tracts. The DOUBLE lab rise is the signature.",
        },
        {
          label: "B",
          text: "Folate deficiency from Crohn-related jejunal disease",
          why: "Folate deficiency reproduces the anemia and ↑homocysteine, but methylmalonic acid stays NORMAL (mutase has its B2 cofactor intact) and there are no neurologic signs — the cord findings and ↑MMA exclude it.",
        },
        {
          label: "C",
          text: "Copper deficiency myeloneuropathy",
          why: "Copper deficiency can mimic B12 neurologically (dorsal column + corticospinal) and follows malabsorption, but it does not cause macrocytic anemia with hypersegmented PMNs or the homocysteine/MMA pattern — it is a mimic, not this mechanism.",
        },
        {
          label: "D",
          text: "Vitamin E deficiency with spinocerebellar degeneration",
          why: "Vitamin E deficiency hits posterior columns and spinocerebellar tracts but lacks megaloblastic anemia and the elevated methylmalonic acid — and classically adds hemolytic anemia with acanthocytes, not macro-ovalocytes.",
        },
        {
          label: "E",
          text: "Pernicious anemia from intrinsic factor autoantibodies",
          why: "The mechanism and labs would be identical (it is a B12 cause) — but the vignette supplies a different, sufficient cause (terminal ileum resection for Crohn) and anti-IF testing would not explain the surgery history. Cause-matching matters for management (parenteral B12 either way).",
        },
      ],
      reasoning:
        "The stem stacks every discriminator: macrocytic anemia + hypersegmented PMNs (megaloblastosis), dorsal column loss with Romberg and corticospinal signs (subacute combined degeneration — dorsal, lateral corticospinal, spinocerebellar), and the double lab rise (↑homocysteine AND ↑methylmalonic acid) that only B12 produces. The cause is anatomic — terminal ileum resection removed the IF-B12 absorption site, and ~3 years of liver stores delayed the crash. CLUE → MECHANISM → FINDING → DIAGNOSIS → MANAGEMENT: ileal surgery + macrocytosis + proprioception loss → methionine synthase + mutase failure → megaloblastic anemia with myelin degeneration → B12 deficiency (post-resection) → parenteral B12 now (prolonged deficiency → irreversible nerve damage), folate only alongside B12.",
    },
  },
  mnemonics: [
    {
      code: "“B9 for the 9 months of pregnancy, plus 1 month before”",
      meaning: "Give supplemental folic acid at least 1 month prior to conception and during pregnancy to ↓ risk of neural tube defects.",
      memorizes: "Folate supplementation timing for NTD prevention",
      whenToUse: "Pre-conception counseling; any pregnancy-planning question.",
      clinical: "The neural tube closes at week 4 — supplementation must start before the pregnancy is known.",
    },
    {
      code: "“Foliage in the jejun\"gle”",
      meaning: "Folate is absorbed in the jejunum; folate is in foliage (leafy greens).",
      memorizes: "Folate absorption site + dietary source",
      whenToUse: "Absorption-site questions (jejunum = folate, terminal ileum = B12).",
      clinical: "Celiac (jejunal disease) takes folate; Crohn ileal resection takes B12.",
    },
    {
      code: "“B12 = Brain (and cord) + Blood: ↑homocysteine AND ↑methylmalonic acid”",
      meaning: "B12 deficiency hits both systems and both labs; folate hits neither the cord nor the MMA level.",
      memorizes: "The B12-vs-folate discriminator pair",
      whenToUse: "Every megaloblastic anemia question with or without neurologic findings.",
      clinical: "Folate masks the hematologic but not the neurologic symptoms — check B12 first.",
    },
    {
      code: "“Avidin in egg whites avidly binds biotin”",
      meaning: "Raw egg white consumption causes biotin (B7) deficiency by sequestration, not by poor intake.",
      memorizes: "The B7 deficiency mechanism",
      whenToUse: "Bodybuilder/weight-loss diets with dermatitis, enteritis, alopecia.",
      clinical: "Also from long-term antibiotics (microbiota supply lost); carboxylases add 1-carbon groups (3C→4C, 2C→3C).",
    },
  ],
  rapidReview: {
    s30: [
      "B6 pyridoxine → PLP: transamination (ALT/AST), decarboxylation, glycogen phosphorylase; synthesizes GABA, serotonin, dopamine, Epi/NE, histamine, heme, niacin, glutathione, cystathionine.",
      "B6 deficiency: convulsions, hyperirritability, peripheral neuropathy (INH, OCPs), sideroblastic anemia.",
      "B7 biotin: carboxylase cofactor — pyruvate (3C→4C), acetyl-CoA (2C→3C), propionyl-CoA (3C→4C); deficiency rare: dermatitis, enteritis, alopecia (raw egg whites/avidin, long-term antibiotics).",
      "B9 folate → THF: 1-carbon transfer, nitrogenous bases; leafy greens, gut microbiota, absorbed in jejunum.",
      "Folate deficiency: macrocytic megaloblastic anemia, hypersegmented PMNs, glossitis, NO neurologic symptoms; ↑homocysteine, NORMAL methylmalonic acid; alcohol, pregnancy; phenytoin/trimethoprim/methotrexate.",
      "Folic acid ≥1 month pre-conception through pregnancy ↓NTD.",
      "B12 cobalamin: methionine synthase (CH3 as methylcobalamin) + methylmalonyl-CoA mutase.",
      "B12 deficiency: megaloblastic anemia + paresthesias + subacute combined degeneration (dorsal columns, lateral corticospinal, spinocerebellar); ↑Hcy AND ↑MMA; 2° folate deficiency; prolonged → irreversible.",
      "B12 causes: malabsorption (sprue, enteritis, D latum, achlorhydria, bacterial overgrowth, alcohol), IF lack (pernicious anemia, gastric bypass), terminal ileum resection, metformin, veganism.",
      "Folate masks the hematologic but NOT the neurologic symptoms of B12 deficiency.",
    ],
    m3: [
      "B12 exists only in animal products — synthesis (distal gut) is distal to absorption (terminal ileum + IF).",
      "B12 liver stores ~3-4 years vs folate ~3-4 months — the timeline of deficiency after cause onset.",
      "The folate trap: without B12, THF is stuck as 5-methyl-THF → functional folate deficiency explains the shared anemia.",
      "Abnormal myelin from accumulated methylmalonic acid is the neurologic lesion — not a folate-chemistry problem.",
      "Propionyl-CoA carboxylase (biotin) hands methylmalonyl-CoA to the B12 mutase — B7 and B12 sit on the same metabolic conveyor.",
      "SAM's CH3 to anabolic pathways is the methylation economy B12-folate run — the map's top loop.",
    ],
    m10: [
      "Subacute combined degeneration order: paresthesias first, then vibration/proprioception loss (Romberg), then spastic weakness — check the cord before it is permanent.",
      "Sideroblastic anemia = impaired hemoglobin synthesis + iron excess (B6); ringed sideroblasts on Prussian blue.",
      "Metformin's long-term B12 depletion is the pharmacology crossover that shows up as neuropathy + macrocytosis in diabetics.",
      "Methotrexate and trimethoprim inhibit folate-dependent enzymes (dihydrofolate reductase) — drug-induced folate deficiency is iatrogenic and predictable.",
      "Anti-intrinsic factor antibodies (pernicious anemia) vs ileal disease: same endpoint, different management rationale.",
      "Gastric bypass removes BOTH IF production and acid (achlorhydria route) — a double B12 threat.",
    ],
  },
  recall: [
    {
      q: "What are B6's cofactor roles and deficiency findings, including the two classic drug causes?",
      a: "PLP: transamination (ALT, AST), decarboxylation, glycogen phosphorylase; synthesis of glutathione, cystathionine, heme, niacin, histamine, serotonin, Epi/NE, dopamine, GABA. Deficiency: convulsions, hyperirritability, peripheral neuropathy (isoniazid, oral contraceptives), sideroblastic anemia (impaired hemoglobin synthesis and iron excess).",
    },
    {
      q: "Name the three biotin-dependent carboxylase reactions with their carbon counts.",
      a: "Pyruvate carboxylase (gluconeogenesis): pyruvate 3C → oxaloacetate 4C. Acetyl-CoA carboxylase (fatty acid synthesis): acetyl-CoA 2C → malonyl-CoA 3C. Propionyl-CoA carboxylase (FA oxidation, branched-chain amino acid breakdown): propionyl-CoA 3C → methylmalonyl-CoA 4C.",
    },
    {
      q: "Give folate's sources, absorption site, and deficiency drug causes.",
      a: "Leafy green vegetables; also produced by gut microbiota; absorbed in the jejunum ('foliage in the jejun\"gle'). Deficiency caused by phenytoin, trimethoprim, methotrexate; alcohol overuse and pregnancy.",
    },
    {
      q: "What lab pattern separates B12 from folate deficiency, and why (mechanistically)?",
      a: "B12: ↑homocysteine AND ↑methylmalonic acid (methionine synthase AND methylmalonyl-CoA mutase both need B12). Folate: ↑homocysteine with NORMAL methylmalonic acid (methionine synthase still has its B12; mutase unaffected).",
    },
    {
      q: "Describe subacute combined degeneration and its cause.",
      a: "Degeneration of dorsal columns, lateral corticospinal tracts, and spinocerebellar tracts due to abnormal myelin (accumulated methylmalonic acid from failed mutase); presents with paresthesias, loss of vibration/proprioception, spasticity/weakness; prolonged deficiency → irreversible nerve damage.",
    },
    {
      q: "List six causes of B12 deficiency by mechanism.",
      a: "Malabsorption (sprue, enteritis, Diphyllobothrium latum, achlorhydria, bacterial overgrowth, alcohol overuse); lack of intrinsic factor (pernicious anemia, gastric bypass surgery); absence of terminal ileum (surgical resection for Crohn disease); drugs (metformin); insufficient intake (veganism).",
    },
    {
      q: "Why can folate supplementation be dangerous in untreated B12 deficiency?",
      a: "B9 (folate) supplementation can mask the hematologic symptoms of B12 deficiency but not the neurologic symptoms — the anemia corrects while subacute combined degeneration progresses to irreversible nerve damage.",
    },
  ],
  related: [
    {
      title: "Vitamins B1, B2, B3 & B5",
      note: "The first half of the B-complex — isoniazid bridges both pages (B6 neuropathy here, B6-dependent niacin synthesis there), and the shared dermatitis-glossitis-diarrhea baseline comes from the fundamentals page.",
      topicId: "b-vitamins-1",
    },
    {
      title: "Nutrition Fundamentals",
      note: "The diet table's vegetarian/vegan row (B12, iron, B2, ±D) and the B12-years/folate-months storage exception live here in practice.",
      topicId: "nutrition-fundamentals",
    },
    {
      title: "Vitamins E & K",
      note: "The other posterior-column mimic — vitamin E demyelination without megaloblastosis — completes the neuro-nutrition differential.",
      topicId: "vitamins-e-k",
    },
    {
      title: "Purine Synthesis & Salvage Disorders",
      note: "Folate's 1-carbon transfers build the purine ring and thymidylate — the same nitrogenous-base chemistry the nucleotide notes detail.",
      topicId: "purine-salvage-disorders",
    },
  ],
  crossLinks: [
    {
      subject: "Hematology & Oncology",
      connection: "Megaloblastic anemia with hypersegmented PMNs is the shared hematologic face of B12/folate deficiency; methotrexate's myelosuppression is deliberate folate blockade.",
    },
    {
      subject: "Neurology",
      connection: "Subacute combined degeneration (dorsal columns, lateral corticospinal, spinocerebellar) is the cord syndrome of B12 — with vibration/proprioception loss and a positive Romberg.",
    },
    {
      subject: "Obstetrics",
      connection: "≥1 month pre-conception folate through pregnancy to ↓NTD — the counseling standard the neural tube's week-4 closure forces.",
    },
    {
      subject: "Gastrointestinal",
      connection: "Celiac (jejunal) steals folate; Crohn's terminal ileum resection, sprue, and D latum steal B12 — absorption geography as diagnosis.",
    },
  ],
};
