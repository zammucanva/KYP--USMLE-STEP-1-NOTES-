import type { KypUsMLENote } from "../types";

// Biochemistry — Nutrition (N-batch, book order 1/8).
// Source: First Aid 2026, Part 1 pdf 85 / book 63 (essential fatty acids;
// fat-soluble vitamins overview; water-soluble vitamins overview; dietary
// supplementation table)

export const nutritionFundamentals: KypUsMLENote = {
  id: "nutrition-fundamentals",
  title: "Nutrition Fundamentals",
  subtitle:
    "The organizing table of the whole Nutrition section: two fatty-acid families the body cannot make, the bile-and-ileum dependence that makes fat-soluble vitamins accumulate and water-soluble vitamins wash out, and the four diets that predict four deficiencies.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Nutrition",
  pilotCategory: "Nutrition — foundations and deficiency logic",
  difficulty: 1,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 63 (essential fatty acids; vitamins: fat soluble; vitamins: water soluble; dietary supplementation)",
  tags: [
    "essential fatty acids",
    "linoleic acid",
    "linolenic acid",
    "arachidonic acid",
    "omega-3",
    "omega-6",
    "trans fats",
    "fat-soluble vitamins",
    "water-soluble vitamins",
    "bile",
    "ileum",
    "malabsorption",
    "steatorrhea",
    "cystic fibrosis",
    "celiac disease",
    "mineral oil",
    "vitamin B12 storage",
    "folate storage",
    "dietary supplementation",
    "vegetarian",
    "vegan",
    "raw egg white",
    "avidin",
    "untreated corn",
  ],
  core: {
    what: "Essential fatty acids are polyunsaturated fatty acids that cannot be synthesized in the body and must be provided in the diet (eg, nuts/seeds, plant oils, seafood): linoleic acid (omega-6) is metabolized to arachidonic acid, the precursor to leukotrienes and prostaglandins; linolenic acid (omega-3) and its metabolites have cardioprotective and antihyperlipidemic effects; trans-unsaturated fatty acids (fast food) promote cardiovascular disease by ↑LDL and ↓HDL. Fat-soluble vitamins (A, D, E, K) depend on bile emulsification, pancreatic secretions, and an intact ileum for absorption, and accumulate in fat (toxicity more common); water-soluble vitamins wash out easily except B12 (~3-4 years of liver stores) and B9 (~3-4 months), and B-complex deficiencies often result in dermatitis, glossitis, and diarrhea. Diet predicts deficiency: vegetarian/vegan → B12, iron, B2, frequently D; high raw egg white → B7 (avidin binds biotin); untreated corn → B3.",
    why: "Every later vitamin topic inherits this page's two sorting axes — absorption route (fat-soluble needs bile/pancreas/ileum) and storage time (water-soluble washes out, B12 and folate are the exceptions). The malabsorption stem (CF, celiac, mineral oil) and the diet stem (vegan, raw eggs, corn) are the two most recycled question shapes in nutrition.",
    keyIdea: "Sort vitamins by SOLUBILITY before anything else: fat-soluble (A, D, E, K) need the whole fat-absorption apparatus and accumulate toward toxicity; water-soluble (B-complex + C) wash out fast — except B12 (years) and B9 (months), which is why B12 deficiency sneaks up years after gastric bypass while C does not. Then read the diet table as four predicted deficiencies.",
  },
  mechanisms: [
    {
      id: "fat-soluble-absorption-dependence",
      title: "Why fat-soluble deficiencies follow fat malabsorption",
      context: "Steatorrhea of any cause",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Dietary fat + fat-soluble vitamins A, D, E, K enter the duodenum",
            sublabel: "Input — absorption dependent on bile emulsification, pancreatic secretions, and intact ileum.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Malabsorption syndrome with steatorrhea (eg, cystic fibrosis, celiac disease) or mineral oil intake",
            sublabel: "Process — any broken step in the bile → pancreas → ileum chain.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Fat-soluble vitamin deficiencies (A, D, E, K together)",
            sublabel: "Output — the cluster deficiency: night blindness + rickets/osteomalacia + hemolysis/neuropathy + hemorrhage.",
            variant: "output",
          },
          {
            id: "s2",
            label: "Fat-soluble vitamins accumulate in fat when intake is high",
            sublabel: "Process — storage in adipose tissue; toxicity more common than for water-soluble vitamins.",
            variant: "process",
          },
          {
            id: "o2",
            label: "Water-soluble vitamins wash out easily from body except B12 and B9",
            sublabel: "Output — B12 stored in liver for ~3-4 years; B9 for ~3-4 months; the rest need regular intake.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "bile/pancreas/ileum" },
          { from: "s1", to: "o1", label: "steatorrhea" },
          { from: "trigger", to: "s2", label: "excess intake" },
          { from: "s2", to: "o2", label: "solubility contrast" },
        ],
        caption:
          "One absorption chain explains two exam facts: break the chain (CF, celiac, mineral oil) and all four fat-soluble vitamins fall together; keep the chain and overfeed, and the same fat solubility that required the chain now stores the excess in adipose — toxicity more common than for water-soluble vitamins. Water-soluble vitamins skip the chain entirely, wash out easily, and only B12 (~3-4 years) and B9 (~3-4 months) hold meaningful liver stores.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "The two essential fatty-acid families",
      body: [
        "Essential fatty acids are polyunsaturated fatty acids that cannot be synthesized in the body and must be provided in the diet — nuts and seeds, plant oils, and seafood are the source examples the book names. Linoleic acid is the omega-6 parent: it is metabolized to arachidonic acid, which serves as the precursor to leukotrienes and prostaglandins — the same inflammatory mediator pathway that pharmacology blocks with corticosteroids, NSAIDs, montelukast, and zileuton. Linolenic acid is the omega-3 parent, and its metabolites have cardioprotective and antihyperlipidemic effects.",
        "The trans-unsaturated fatty acids are the dietary villain of the trio: found in fast food, they promote cardiovascular disease by raising LDL and lowering HDL — the exact double-negative lipid profile that the cardiovascular chapter spends pages trying to prevent. On boards, 'trans fat' is a synonym for '↑LDL ↓HDL'.",
      ],
    },
    {
      kind: "compare",
      title: "Fat-soluble vs water-soluble vitamins — the master sort",
      intro: "The absorption/storage axis that organizes every vitamin topic that follows.",
      columns: ["Fat-soluble (A, D, E, K)", "Water-soluble (B-complex, C)"],
      rows: [
        { label: "Absorption", a: "Dependent on bile emulsification, pancreatic secretions, and intact ileum", b: "Direct absorption (eg, folate in the jejunum, B12 with intrinsic factor in the terminal ileum)" },
        { label: "Storage", a: "Accumulate in fat — toxicity more common than for water-soluble vitamins", b: "Wash out easily from body except B12 and B9" },
        { label: "Store duration", a: "Long (adipose pool)", b: "B12: liver ~3-4 years · B9: liver ~3-4 months · the rest: days" },
        { label: "Deficiency speed", a: "Follows fat malabsorption (CF, celiac, mineral oil)", b: "Follows poor intake or washout (B-complex: dermatitis, glossitis, diarrhea)" },
        { label: "Toxicity shape", a: "Common and classically tested (A teratogen, D hypercalcemia, E enterocolitis, K …warfarin interactions)", b: "Rare — C excess: nausea, diarrhea, oxalate stones" },
      ],
    },
    {
      kind: "table",
      title: "Dietary supplementation — the diet-to-deficiency table",
      intro: "The source's table, verbatim pairings (book p. 63).",
      columns: ["Diet", "Supplementation required"],
      rows: [
        ["Vegetarian/vegan", "Vitamin B12 · Iron · Vitamin B2 · Frequently, vitamin D (although this is commonly deficient in many diets)"],
        ["High egg white (raw)", "Vitamin B7 (avidin in egg whites binds biotin and prevents absorption)"],
        ["Untreated corn", "Vitamin B3 (deficiency is common in resource-limited areas)"],
      ],
      caption:
        "Read each row as a predicted deficiency: vegan diets lose the animal-product B12, iron, and B2; raw egg whites sequester biotin with avidin; untreated corn (pellagra-inducing diets) loses tryptophan-accessible niacin. These three diets are the fastest nutrition stems on the exam.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why the B-complex deficiencies blur together",
      body: "B-complex deficiencies often result in dermatitis, glossitis, and diarrhea — the same epithelial triad, because every B vitamin feeds rapidly dividing tissues (skin, tongue, gut). The exam rarely asks 'which B' from the triad alone; it asks from the discriminating feature (cheilosis → B2; Casal necklace → B3; peripheral neuropathy → B6; megaloblastic anemia → B9/B12) covered in the notes that follow.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Three recurring shapes: (1) the malabsorption stem — cystic fibrosis or celiac child with night blindness + bone deformity + hemolysis + hemorrhage → fat-soluble vitamin cluster deficiency; (2) the diet stem — vegan with paresthesias and macrocytic anemia → B12; raw-egg-white bodybuilder with dermatitis → biotin; corn-based diet with Casal necklace → niacin; (3) the toxicity stem — which vitamins accumulate (fat-soluble A/D/E/K) vs wash out (water-soluble, except B12/B9).",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Clinical use of the essential-fatty-acid map",
      body: [
        "The omega-6 line (linoleic → arachidonic acid → leukotrienes/prostaglandins) is the biochemistry bridge to inflammation pharmacology: anything that alters arachidonic acid release or metabolism — corticosteroids (phospholipase A2), NSAIDs (cyclooxygenase), leukotriene modifiers — lands on a pathway whose substrate is an essential-fatty-acid derivative. The omega-3 line (linolenic → cardioprotective, antihyperlipidemic metabolites) is the mechanistic hook for fish-oil lipid management, and the trans-fat line (↑LDL ↓HDL) is the dietary risk-factor fact the cardiovascular chapter assumes.",
        "In the malabsorption clinic, this page's absorption chain decides replacement strategy: bile-pancreas-ileum failure means water-miscible or parenteral fat-soluble vitamin preparations, and the mineral-oil history is the non-obvious cause the source flags. The storage column decides screening intervals — B12 takes years to deplete (post-bypass patients are screened for years), folate months (alcohol overuse depletes it within months).",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 3-year-old with cystic fibrosis and steatorrhea develops night blindness, bone pain, a hemolytic anemia, and easy bruising.",
        discriminator: "Steatorrhea + all four fat-soluble features at once",
        concept: "Fat-soluble vitamin (A, D, E, K) cluster deficiency",
        answer: "Absorption of A, D, E, K is dependent on bile emulsification, pancreatic secretions, and intact ileum — malabsorption syndromes with steatorrhea (eg, cystic fibrosis and celiac disease) or mineral oil intake can cause fat-soluble vitamin deficiencies",
      },
      {
        stem: "A 26-year-old vegan with no supplements for 6 years develops paresthesias and a macrocytic anemia.",
        discriminator: "Vegan diet × years → the one water-soluble vitamin with year-long stores",
        concept: "Vitamin B12 depletion in veganism",
        answer: "Vegetarian/vegan diets require vitamin B12, iron, vitamin B2, frequently vitamin D — B12 is found only in animal products, and liver stores (~3-4 years) run out slowly",
      },
      {
        stem: "A bodybuilder who drinks 10 raw egg whites daily develops a scaly dermatitis and enteritis.",
        discriminator: "Raw egg whites + dermatitis/enteritis",
        concept: "Biotin (B7) deficiency",
        answer: "Vitamin B7 supplementation required — avidin in egg whites binds biotin and prevents absorption",
      },
      {
        stem: "A population eating untreated corn as a dietary staple develops diarrhea, dermatitis, and dementia.",
        discriminator: "Untreated corn + the 3 D's",
        concept: "Niacin (B3) deficiency — pellagra",
        answer: "Untreated corn requires vitamin B3 supplementation (deficiency is common in resource-limited areas) — corn's bound niacin and low tryptophan set up pellagra",
      },
    ],
    traps: [
      {
        a: "Fat-soluble vitamin toxicity",
        b: "Water-soluble vitamin toxicity",
        whyConfused: "Both are 'vitamin overdose' stems.",
        keyDifference: "Fat-soluble vitamins accumulate in fat — toxicity more common than for water-soluble vitamins, which wash out easily (except the B12/B9 storage exception).",
        clue: "Overdose stem → think fat-soluble first (A, D, E, K).",
      },
      {
        a: "B12 liver stores (~3-4 years)",
        b: "B9 liver stores (~3-4 months)",
        whyConfused: "Both are the water-soluble exceptions that actually store.",
        keyDifference: "B12 lasts ~3-4 years (animal products, IF-dependent); folate lasts ~3-4 months (leafy greens) — folate depletes far faster, which is why alcohol overuse hits folate first.",
        clue: "Years vs months; gastric bypass vs alcohol.",
      },
      {
        a: "Omega-3 (linolenic)",
        b: "Omega-6 (linoleic)",
        whyConfused: "Both are essential polyunsaturated fatty acids.",
        keyDifference: "Linoleic (ω-6) → arachidonic acid → leukotrienes/prostaglandins; linolenic (ω-3) metabolites are cardioprotective and antihyperlipidemic.",
        clue: "6 = arAchidonic Acid (inflammation); 3 = cardioprotective.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'young adult with dermatitis and diarrhea' stem offering biotin deficiency, niacin deficiency, and zinc deficiency",
        differentiator: "The diet history",
        correctPath: "Raw egg whites → avidin → biotin; untreated corn / pellagra diet → niacin (with the Casal necklace); chronic diarrheal states + periorificial rash → zinc (acrodermatitis enteropathica).",
      },
      {
        lookAlike: "A 'child with night blindness and bruising' stem offering vitamin A deficiency, vitamin K deficiency, and fat-malabsorption cluster",
        differentiator: "One vitamin or all four",
        correctPath: "Isolated night blindness → A; isolated hemorrhage with ↑PT/↑aPTT → K (sterile newborn gut); the combination of A + D + E + K findings → the malabsorption cluster (CF, celiac, mineral oil).",
      },
    ],
    miniCase: {
      vignette:
        "A 4-year-old boy with cystic fibrosis, pancreatic insufficiency, and chronic steatorrhea is brought in because he has stopped growing well. Over the past year he has developed difficulty seeing in dim light, bowed legs, a mild hemolytic anemia with acanthocytes on smear, and recurrent epistaxis with an elevated PT and aPTT. He takes pancreatic enzyme replacement but no supplements.",
      question: "Which of the following best explains the full constellation of findings?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Cluster deficiency of vitamins A, D, E, and K from fat malabsorption — absorption is dependent on bile emulsification, pancreatic secretions, and intact ileum",
          why: "Correct. Every finding maps to one fat-soluble vitamin: night blindness → A (visual pigments); bowed legs → D (mineralization); hemolytic anemia with acanthocytosis → E (RBC membrane antioxidant); ↑PT/↑aPTT → K (clotting factor maturation). CF with pancreatic insufficiency and steatorrhea breaks the whole absorption chain at once.",
        },
        {
          label: "B",
          text: "Isolated vitamin A deficiency from a diet poor in liver and leafy vegetables",
          why: "A alone explains the night blindness but none of the skeletal, hematologic, or clotting findings — and the child's problem is absorption, not intake; a single-vitamin answer under-explains a four-system picture.",
        },
        {
          label: "C",
          text: "Water-soluble B-complex deficiency with dermatitis, glossitis, and diarrhea",
          why: "B-complex deficiency is real in malabsorption but produces epithelial disease (dermatitis, glossitis, diarrhea) — it does not cause acanthocytosis, rickets, or a combined PT/aPTT elevation; those belong to E, D, and K respectively.",
        },
        {
          label: "D",
          text: "Vitamin B12 deficiency from bacterial overgrowth in the ileum",
          why: "B12 deficiency produces macrocytic megaloblastic anemia with neurologic signs — not hemolytic anemia with acanthocytes, and not the bone/hemorrhage findings; B12 is water-soluble and does not depend on the fat-absorption chain.",
        },
        {
          label: "E",
          text: "Essential fatty acid deficiency with reduced prostaglandin synthesis",
          why: "Essential fatty acid deficiency (linoleic/linolenic) is possible in severe fat malabsorption but presents with scaly dermatitis and poor wound healing — it does not explain night blindness, rickets, acanthocytosis, or the coagulopathy.",
        },
      ],
      reasoning:
        "The stem is a systems inventory of the four fat-soluble vitamins: eyes (A), bone (D), RBC membranes (E), and clotting (K). The mechanism is the absorption chain — bile emulsification, pancreatic secretions, intact ileum — which cystic fibrosis breaks at the pancreatic step. The same solubility that forces these vitamins through the chain is what makes them accumulate to toxicity in excess, the other classic direction of this page.",
    },
  },
  mnemonics: [
    {
      code: "“Fat-soluble vitamins need the whole FAT chain: Bile, Pancreas, Ileum”",
      meaning: "A, D, E, K absorption rides on micellar fat absorption — bile emulsification, pancreatic secretions, intact ileum.",
      memorizes: "Why fat-soluble vitamins fail together in steatorrhea (CF, celiac, mineral oil)",
      whenToUse: "Any malabsorption stem with a multi-vitamin deficiency picture.",
      clinical: "Replace fat-soluble vitamins in water-miscible form in CF and celiac; check the mineral-oil history.",
    },
    {
      code: "“Wash out everything but the B12 years and the B9 months”",
      meaning: "Water-soluble vitamins wash out easily except B12 (liver stores ~3-4 years) and B9 (liver stores ~3-4 months).",
      memorizes: "The storage-exception pair and its timeline",
      whenToUse: "Timing questions — how soon after gastric bypass / diet change / alcohol overuse does deficiency appear?",
      clinical: "B12 deficiency appears years after the cause; folate deficiency in months (alcohol overuse).",
    },
  ],
  rapidReview: {
    s30: [
      "Essential fatty acids: linoleic (ω-6) → arachidonic acid → leukotrienes/prostaglandins; linolenic (ω-3) → cardioprotective, antihyperlipidemic.",
      "Trans fats (fast food): ↑LDL, ↓HDL — promote cardiovascular disease.",
      "Fat-soluble A, D, E, K: absorption needs bile emulsification, pancreatic secretions, intact ileum; accumulate in fat — toxicity common.",
      "Malabsorption with steatorrhea (CF, celiac) or mineral oil → fat-soluble vitamin deficiencies.",
      "Water-soluble vitamins wash out easily except B12 (~3-4 years liver stores) and B9 (~3-4 months).",
      "B-complex deficiency: dermatitis, glossitis, diarrhea.",
      "Diet table: vegetarian/vegan → B12, iron, B2, ±D; raw egg white → B7 (avidin); untreated corn → B3.",
    ],
    m3: [
      "Can be coenzymes (ascorbic acid) or precursors to coenzymes (FAD, NAD+) — the water-soluble duo of roles.",
      "Arachidonic acid is the substrate for both cyclooxygenase and lipoxygenase — NSAIDs and leukotriene modifiers both act downstream of linoleic acid.",
      "Omega-3 metabolites are the rationale for fish-oil triglyceride lowering.",
      "B9's ~3-4 month store is why pregnancy needs ≥1 month pre-conception supplementation, not years.",
    ],
    m10: [
      "Acanthocytosis + hemolysis is the E-finding; keratomalacia the A-finding; genu varum the D-finding; neonatal ↑PT/↑aPTT the K-finding — together they are the malabsorption cluster.",
      "Mineral oil binds fat-soluble vitamins in the gut lumen — the sneakiest cause in the absorption chain.",
      "Vegan diets need B12 + iron + B2 ± D — iron is the non-vitamin the table adds.",
      "Untreated corn → niacin deficiency is common in resource-limited areas (the pellagra geography stem).",
    ],
  },
  recall: [
    {
      q: "Name the two essential fatty acids, their families, and what each is metabolized to.",
      a: "Linoleic acid (omega-6) — metabolized to arachidonic acid, precursor to leukotrienes and prostaglandins. Linolenic acid (omega-3) — metabolites have cardioprotective and antihyperlipidemic effects. Both are polyunsaturated, cannot be synthesized, and come from nuts/seeds, plant oils, seafood.",
    },
    {
      q: "What is the effect of trans-unsaturated fatty acids on the lipid profile?",
      a: "Consumption of trans-unsaturated fatty acids (found in fast food) promotes cardiovascular disease by ↑LDL and ↓HDL.",
    },
    {
      q: "Which absorption requirements do fat-soluble vitamins share, and which clinical states break them?",
      a: "Absorption is dependent on bile emulsification, pancreatic secretions, and intact ileum. Broken by malabsorption syndromes with steatorrhea (eg, cystic fibrosis, celiac disease) and by mineral oil intake.",
    },
    {
      q: "How long are the liver stores of B12 and folate, and why does the difference matter clinically?",
      a: "B12 stored in liver for ~3-4 years; B9 (folate) for ~3-4 months. Folate deficiency appears months after the cause (alcohol overuse, pregnancy demand), B12 deficiency years after (gastric bypass, veganism).",
    },
    {
      q: "List the supplementation required for each of the three diet rows in the source table.",
      a: "Vegetarian/vegan: vitamin B12, iron, vitamin B2, frequently vitamin D. High egg white (raw): vitamin B7 (avidin binds biotin). Untreated corn: vitamin B3 (deficiency common in resource-limited areas).",
    },
  ],
  related: [
    {
      title: "Vitamin A",
      note: "The first fat-soluble vitamin in the cluster — retinal for vision, epithelial differentiation, and the teratogenic excess the fundamentals page set up.",
      topicId: "vitamin-a",
    },
    {
      title: "Vitamin D",
      note: "The fat-soluble vitamin whose activation (liver → kidney) and deficiency (rickets/osteomalacia) depend on the absorption chain introduced here.",
      topicId: "vitamin-d",
    },
    {
      title: "Vitamins B6, B7, B9 & B12",
      note: "The water-soluble second half — the one-carbon map and the B12/folate storage exception in action.",
      topicId: "b-vitamins-2",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiology",
      connection: "Trans fats ↑LDL ↓HDL and omega-3 metabolites are antihyperlipidemic — the nutrition half of dyslipidemia management.",
    },
    {
      subject: "Immunology",
      connection: "Arachidonic acid (from linoleic acid) is the leukotriene/prostaglandin substrate — the pathway corticosteroids, NSAIDs, and montelukast manipulate.",
    },
    {
      subject: "Pulmonology",
      connection: "Cystic fibrosis pancreatic insufficiency is the model steatorrhea that strips A, D, E, K together.",
    },
  ],
};
