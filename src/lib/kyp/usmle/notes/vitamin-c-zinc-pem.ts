import type { KypUsMLENote } from "../types";

// Biochemistry — Nutrition (N-batch, book order 7/8).
// Source: First Aid 2026, Part 1 pdf 89, 91 / book 67, 69 (vitamin C
// ascorbic acid: function, scurvy, excess; zinc deficiency and
// acrodermatitis enteropathica; kwashiorkor; marasmus)

export const vitaminCZincPem: KypUsMLENote = {
  id: "vitamin-c-zinc-pem",
  title: "Vitamin C, Zinc & Protein-Energy Malnutrition",
  subtitle:
    "Ascorbic acid's collagen hydroxylation (and the scurvy of tea-and-toast diets), zinc's periorificial-acral triad, and the two faces of protein-energy malnutrition — kwashiorkor's swollen belly and marasmus's wasted frame.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Nutrition",
  pilotCategory: "Nutrition — vitamin C, zinc & malnutrition",
  difficulty: 2,
  readTime: 11,
  sourceRef:
    "First Aid 2026, Part 1 pp. 67, 69 (vitamin C: function, scurvy, excess; zinc deficiency, acrodermatitis enteropathica; kwashiorkor; marasmus)",
  tags: [
    "vitamin C",
    "ascorbic acid",
    "scurvy",
    "collagen",
    "proline",
    "lysine",
    "hydroxylation",
    "corkscrew hair",
    "perifollicular hemorrhage",
    "subperiosteal hemorrhage",
    "methemoglobinemia",
    "iron absorption",
    "dopamine beta-hydroxylase",
    "oxalate nephrolithiasis",
    "tea and toast",
    "zinc",
    "zinc fingers",
    "acrodermatitis enteropathica",
    "periorificial",
    "acral",
    "dysgeusia",
    "anosmia",
    "kwashiorkor",
    "MEALS",
    "marasmus",
    "protein-energy malnutrition",
    "edema",
    "apolipoprotein",
  ],
  core: {
    what: "Vitamin C (ascorbic acid) is an antioxidant that facilitates iron absorption by reducing it to Fe2+ state, is necessary for hydroxylation of proline and lysine in collagen synthesis, and is necessary for dopamine β-hydroxylase (converts dopamine to NE); found in fruits and vegetables; ancillary treatment for methemoglobinemia by reducing Fe3+ to Fe2+. Deficiency — scurvy: swollen gums, easy bruising, petechiae, hemarthrosis, anemia, poor wound healing, perifollicular and subperiosteal hemorrhages, 'corkscrew' hair, weakened immune response; may be precipitated by tea and toast diet. Excess — nausea, vomiting, diarrhea, fatigue, calcium oxalate nephrolithiasis (excess oxalate from vitamin C metabolism); can ↑iron toxicity in predisposed individuals (worsens hemochromatosis or transfusion-related iron overload). Zinc: essential for the activity of 100+ enzymes and zinc fingers (transcription factor motif); deficiency — delayed wound healing, suppressed immunity, male hypogonadism, ↓adult hair, dysgeusia, anosmia; acrodermatitis enteropathica = congenital defect in intestinal zinc absorption with triad of hair loss, diarrhea, inflammatory periorificial/acral rash; may predispose to alcoholic cirrhosis. Protein-energy malnutrition: kwashiorkor = protein malnutrition with skin lesions, edema from ↓plasma oncotic pressure (↓serum albumin + ↑ADH), liver malfunction (fatty change from ↓apolipoprotein synthesis); MEALS mnemonic. Marasmus = malnutrition not causing edema; diet deficient in calories but no nutrients entirely absent; muscle wasting; linear growth maintained in acute PEM.",
    why: "Vitamin C ties nutrition back to collagen biochemistry (the connective-tissue notes' hydroxylation step) and forward to iron pharmacology; zinc's acrodermatitis is the one periorificial/acral rash in the book; and kwashiorkor-vs-marasmus is the classic global-health discrimination — edema or its absence.",
    keyIdea: "C is the collagen-hydroxylase vitamin: without proline/lysine hydroxylation the triple helix is unstable — gums swell, capillaries leak (perifollicular/petechial/subperiosteal hemorrhage), wounds stall, hair corkscrews; and C doubles as the iron-reducing assistant (Fe3+→Fe2+ in the gut and in methemoglobinemia). Zinc deficiency shows at every barrier: hair, gut, skin around openings and at the tips (acrodermatitis triad). In PEM, the belly decides the name — protein-starved kwashiorkor swells (↓albumin/↓oncotic pressure + ↑ADH + fatty liver from ↓apolipoprotein), calorie-starved marasmus shrinks without edema.",
  },
  mechanisms: [
    {
      id: "vitamin-c-collagen-scurvy",
      title: "Vitamin C deficiency — unhydroxylated collagen, leaky everything",
      context: "Tea-and-toast diet, alcohol overuse, no fresh produce",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Vitamin C (ascorbic acid) deficiency — no fruits or vegetables (tea and toast diet)",
            sublabel: "Input — water-soluble; stores deplete in weeks-to-months.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Proline and lysine hydroxylation in collagen synthesis fails — the triple helix is unstable",
            sublabel: "Process — vitamin C deficiency causes sCurvy due to a Collagen hydroCylation defect.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Dopamine β-hydroxylase also fails (dopamine → NE synthesis) and iron absorption falls (no Fe3+ → Fe2+ reduction)",
            sublabel: "Process — the two non-collagen roles: catecholamine synthesis and iron absorption; ancillary methemoglobinemia treatment by reducing Fe3+ to Fe2+.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Scurvy: swollen gums, easy bruising, petechiae, hemarthrosis, anemia, poor wound healing, perifollicular and subperiosteal hemorrhages, 'corkscrew' hair",
            sublabel: "Output — defective collagen in vessels, gingiva, wounds, and hair follicles; weakened immune response.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Excess: calcium oxalate nephrolithiasis (excess oxalate from vitamin C metabolism); ↑iron toxicity in predisposed individuals",
            sublabel: "Clinical — the dose-direction trap: the same molecule that reduces iron in the gut can overload hemochromatosis and transfusional iron.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "no hydroxylation" },
          { from: "trigger", to: "s2", label: "no Fe3+→Fe2+ / no NE" },
          { from: "s1", to: "o1", label: "collagen fails" },
          { from: "s2", to: "o1", label: "anemia" },
          { from: "x1", to: "trigger", type: "inhibit", label: "excess" },
        ],
        caption:
          "Vitamin C holds collagen's triple helix together at the hydroxylation step: without hydroxylated proline and lysine, vessel walls, gingiva, osteoid, and follicles all leak or fail — the scurvy inventory of swollen gums, perifollicular and subperiosteal hemorrhages, corkscrew hair, hemarthrosis, and wounds that will not close, with anemia from bleeding plus failed iron absorption (ascorbate is the Fe3+→Fe2+ reductant the duodenum uses). Run the same chemistry backward at high dose and the oxalate byproduct stones the kidney while the iron-reducing effect overloads predisposed patients — one molecule, opposite dose-dependent dangers.",
      },
    },
    {
      id: "pem-edema-vs-wasting",
      title: "Protein-energy malnutrition — why kwashiorkor swells and marasmus shrinks",
      context: "Protein vs calorie starvation",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Protein-energy malnutrition — the diet's protein-to-calorie balance decides the phenotype",
            sublabel: "Input — kwashiorkor: protein-deficient, often with adequate calories; marasmus: deficient in calories but no nutrients entirely absent.",
            variant: "input",
          },
          {
            id: "s1",
            label: "KWASHIORKOR: ↓serum albumin → ↓plasma oncotic pressure, plus ↑ADH → edema",
            sublabel: "Process — third-spacing; the swollen abdomen the photograph shows.",
            variant: "process",
          },
          {
            id: "s2",
            label: "KWASHIORKOR liver: ↓apolipoprotein synthesis → fatty change and deposition",
            sublabel: "Process — hepatomegaly without fat export; skin lesions (hyperkeratosis, dyspigmentation) and anemia complete MEALS.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Kwashiorkor: small child with swollen abdomen — Malnutrition, Edema, Anemia, Liver (fatty), Skin lesions (MEALS)",
            sublabel: "Output — protein-deficient MEALS.",
            variant: "output",
          },
          {
            id: "o2",
            label: "Marasmus: muscle wasting, NO edema — malnutrition not causing edema; linear growth maintained in ACUTE PEM",
            sublabel: "Output — the body burns its own muscle and fat, nothing swells.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "protein starvation" },
          { from: "s1", to: "s2", label: "liver can't export fat" },
          { from: "s2", to: "o1", label: "MEALS" },
          { from: "trigger", to: "o2", label: "calorie starvation" },
        ],
        caption:
          "The albumin axis is the whole discriminator: kwashiorkor starves protein, so serum albumin falls, oncotic pressure falls, ADH rises, and fluid third-spaces into the belly and feet — while the apolipoprotein-starved liver fattens beneath the edema. Marasmus starves calories across the board, so everything shrinks (muscle wasting, gaunt face) and nothing swells: 'malnutrition not causing edema.' Linear growth is maintained in acute PEM but lost in chronic malnutrition — the last sorting fact.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "Vitamin C — the function list behind four exam facts",
      body: [
        "Ascorbic acid is an antioxidant; it facilitates iron absorption by reducing it to the Fe2+ state (the duodenal import form); it is necessary for the hydroxylation of proline and lysine in collagen synthesis; and it is necessary for dopamine β-hydroxylase, which converts dopamine to norepinephrine. Four facts ride on those four roles: scurvy (collagen), iron-deficiency risk with vitamin C-free diets (absorption), methemoglobinemia adjunct (reduces Fe3+ back to Fe2+ in the methemoglobin reductase system), and the conceptual link from catecholamine synthesis to pheochromocytoma workups. 'Pronounce absorbic acid' and find it in fruits and vegetables.",
        "The deficiency story is the collagen story: scurvy — swollen gums, easy bruising, petechiae, hemarthrosis, anemia, poor wound healing, perifollicular and subperiosteal hemorrhages, 'corkscrew' hair, and a weakened immune response. The classic precipitant is the tea and toast diet of isolated elders and avoidant eaters. The excess story is its own trap: nausea, vomiting, diarrhea, fatigue, and calcium oxalate nephrolithiasis (excess oxalate from vitamin C metabolism), plus the capacity to ↑iron toxicity in predisposed individuals — worsening hemochromatosis or transfusion-related iron overload by increasing dietary iron absorption.",
      ],
    },
    {
      kind: "visual",
      visualId: "acrodermatitis-enteropathica",
      title: "Acrodermatitis enteropathica — the zinc sign",
      caption:
        "The source's photograph (label A) redrawn as schematics: a face with crusted, erythematous periorificial rash ringing the mouth and eyes (with scale flecks), and a hand with inflamed acral fingertips — plus the triad chips (hair loss, diarrhea, periorificial/acral rash) and the zinc function strip (100+ enzymes, zinc fingers; delayed wound healing, suppressed immunity, male hypogonadism, ↓adult hair, dysgeusia, anosmia).",
      notice:
        "The rash distribution IS the diagnosis: PERIORIFICIAL (around every body opening — mouth, eyes) plus ACRAL (the tips of fingers and toes). It marks a congenital defect in intestinal zinc absorption; the full triad is hair loss + diarrhea + the rash. In adults, the same deficiency shape follows poor intake, malabsorption, or alcohol overuse — and may predispose to alcoholic cirrhosis.",
    },
    {
      kind: "visual",
      visualId: "kwashiorkor-illustration",
      title: "Kwashiorkor — the swollen abdomen",
      caption:
        "The source's photograph (label A) redrawn as a schematic: a small child with a protuberant swollen abdomen (edema + fatty liver), thin extremities, and pitting edema of the feet — labeled with the mechanisms (↓plasma oncotic pressure from ↓serum albumin + ↑ADH; fatty change from ↓apolipoprotein synthesis) and the MEALS panel (Malnutrition, Edema, Anemia, Liver, Skin lesions).",
      notice:
        "The belly is a FLUID and FAT story, not a food story: albumin-starved plasma can no longer hold water in vessels (↓oncotic pressure) and ADH worsens the retention; the apolipoprotein-starved liver cannot export its fat, so it swells too. MEALS = Malnutrition, Edema, Anemia, Liver (fatty change), Skin lesions (hyperkeratosis, dyspigmentation) — kwashiorkor results from protein-deficient MEALS.",
    },
    {
      kind: "visual",
      visualId: "marasmus-illustration",
      title: "Marasmus — wasting without edema",
      caption:
        "The source's photograph (label B) redrawn as a schematic: a child with severe generalized muscle wasting and loss of subcutaneous fat — visible ribs, gaunt 'old-man' face with sunken cheeks and temporal wasting, stick limbs — with the NO-edema chip on the flat feet, and the marasmus-vs-kwashiorkor sorting panel (calories-but-no-nutrient-absent vs protein; no edema vs edema; linear growth maintained in acute PEM).",
      notice:
        "Marasmus = 'malnutrition not causing edema' — the diet is deficient in calories but no nutrients are entirely absent, so albumin holds (barely) and nothing third-spaces; the body simply burns itself. Linear growth is maintained in ACUTE protein-energy malnutrition vs chronic malnutrition — a subtle favorite discriminator.",
    },
    {
      kind: "table",
      title: "The three deficiency pictures — side-by-side sort",
      intro: "Vitamin C, zinc, and the two PEM states as the exam presents them (book pp. 67, 69).",
      columns: ["Deficiency", "Mechanism", "Discriminating signs"],
      rows: [
        ["Vitamin C (scurvy)", "Collagen hydroxylation failure (proline/lysine); ↓iron absorption (Fe3+→Fe2+); dopamine β-hydroxylase", "Swollen gums, perifollicular/petechial/subperiosteal hemorrhage, corkscrew hair, hemarthrosis, poor wound healing; tea and toast diet"],
        ["Zinc", "100+ enzymes, zinc fingers; (acrodermatitis: congenital intestinal zinc absorption defect)", "Periorificial + acral inflammatory rash, hair loss, diarrhea (triad); dysgeusia, anosmia, hypogonadism, delayed wound healing"],
        ["Kwashiorkor (protein)", "↓albumin → ↓oncotic pressure + ↑ADH → edema; ↓apolipoprotein → fatty liver", "Swollen abdomen, edema, fatty liver, skin lesions, anemia (MEALS); calories may be adequate"],
        ["Marasmus (calories)", "Total calorie deficit, no single nutrient absent", "Muscle wasting, loss of subcutaneous fat, gaunt face, NO edema; linear growth maintained in acute PEM"],
      ],
      caption:
        "Bleeding with gum disease → C; periorificial/acral rash → zinc; swollen belly → kwashiorkor; wasted frame without edema → marasmus. The dose direction for C (oxalate stones, iron overload in predisposed) is the page's pharmacology.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Five recurring shapes: (1) the scurvy stem — isolated elderly patient on tea and toast with bleeding gums, perifollicular hemorrhages, and corkscrew hair; (2) the methemoglobinemia adjunct — ascorbic acid as the reducing agent (Fe3+ → Fe2+) alongside methylene blue; (3) the oxalate stone stem — high-dose vitamin C and calcium oxalate nephrolithiasis, or iron overload worsened in hemochromatosis; (4) the zinc stem — periorificial/acral rash + alopecia + diarrhea (or dysgeusia/anosmia in adults); (5) the PEM stem — the child whose belly swells (kwashiorkor, MEALS, ↓albumin) versus the child who wastes without edema (marasmus).",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Bedside use of the C-and-zinc facts",
      body: [
        "Vitamin C is prescribed far more often for its non-collagen roles than for scurvy: iron-deficiency anemia regimens pair ferrous sulfate with orange juice or ascorbic acid (the Fe3+→Fe2+ reduction at the duodenal brush border can multiply fractional absorption); methemoglobinemia protocols list ascorbic acid as an ancillary reducing agent (Fe3+ back to Fe2+) alongside first-line methylene blue; and wound-clinic patients with poor intake get C and zinc repletion precisely because both deficiencies delay wound healing. The corresponding warnings: megadose C risks calcium oxalate stones, and in hemochromatosis or transfusion-related iron overload the extra absorption is actively harmful.",
        "The zinc-and-liver pairing closes the page: zinc deficiency may predispose to alcoholic cirrhosis, and cirrhotic patients are themselves zinc-deficient (poor intake, impaired absorption) — a cycle the exam occasionally tests as 'worsening dysgeusia in a cirrhotic.' In PEM, the clinical priority is staged refeeding: the kwashiorkor child's edema can mask true weight deficit and the marasmic child's depleted intracellular stores set up refeeding hypophosphatemia — both beyond the page's scope, but both flow from the albumin-versus-calorie physiology it teaches.",
      ],
    },
  ],
  drugs: [
    {
      drug: "Ascorbic acid (vitamin C)",
      klass: "Vitamin reductant",
      target: "Procollagen proline/lysine hydroxylase; duodenal Fe3+ → Fe2+; methemoglobin reductase system (ancillary)",
      mechanism: "Cofactor for collagen hydroxylation; reduces iron to the absorbable/functional Fe2+ state",
      effect: "Collagen stability; ↑iron absorption; ancillary methemoglobinemia treatment",
      uses: "Scurvy; iron-deficiency anemia adjuvant; methemoglobinemia adjunct; wound healing",
      adverse: "Excess: nausea, vomiting, diarrhea, fatigue, calcium oxalate nephrolithiasis; ↑iron toxicity in hemochromatosis/transfusion overload",
      clue: "Tea and toast diet + bleeding gums; orange juice with iron",
    },
    {
      drug: "Zinc supplementation",
      klass: "Mineral repletion",
      target: "100+ zinc-dependent enzymes; zinc fingers",
      mechanism: "Restores enzyme and transcription factor activity at epithelial barriers",
      effect: "Wound healing, immune restoration, taste/smell return, rash resolution",
      uses: "Acrodermatitis enteropathica (lifelong), deficiency states, dysgeusia/anosmia",
      adverse: "Excess zinc → copper deficiency (competes for absorption) — a favorite secondary exam fact",
      clue: "Periorificial/acral rash triad; cirrhosis with worsening nutrition",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 72-year-old widower eats only tea and toast; he has bleeding, swollen gums, perifollicular hemorrhages on the shins, corkscrew hairs, and a leg wound that will not heal.",
        discriminator: "Tea and toast + perifollicular hemorrhage + corkscrew hair",
        concept: "Scurvy — vitamin C deficiency",
        answer: "Necessary for hydroxylation of proline and lysine in collagen synthesis: swollen gums, easy bruising, petechiae, hemarthrosis, anemia, poor wound healing, perifollicular and subperiosteal hemorrhages, 'corkscrew' hair, weakened immune response",
      },
      {
        stem: "A toddler weaned to a starch-only diet has a diffusely swollen abdomen, pitting edema of the feet, flaky hyperkeratotic skin, and an enlarged fatty liver; serum albumin is low.",
        discriminator: "Edema + fatty liver + skin lesions with adequate calories",
        concept: "Kwashiorkor",
        answer: "Protein malnutrition: edema due to ↓plasma oncotic pressure (↓serum albumin and ↑ADH), liver fatty change from ↓apolipoprotein synthesis — MEALS: Malnutrition, Edema, Anemia, Liver, Skin lesions",
      },
      {
        stem: "A 3-year-old during famine looks skeletal — every rib visible, gaunt old-man face, extremities like sticks — but has no edema and remains interactive.",
        discriminator: "Wasting WITHOUT edema",
        concept: "Marasmus",
        answer: "Malnutrition not causing edema; diet deficient in calories but no nutrients entirely absent; muscle wasting; linear growth maintained in acute protein-energy malnutrition (vs chronic malnutrition)",
      },
      {
        stem: "A 9-month-old with failure to thrive has a crusted rash around the mouth and eyes and on the fingertips, patchy alopecia, and chronic diarrhea; the rash resolves completely with zinc supplementation.",
        discriminator: "Periorificial + acral rash triad resolving with zinc",
        concept: "Acrodermatitis enteropathica",
        answer: "Congenital defect in intestinal zinc absorption: triad of hair loss, diarrhea, and inflammatory skin rash around body openings (periorificial) and tips of fingers/toes (acral); treat with zinc replacement",
      },
      {
        stem: "A patient self-treating with 6 g of vitamin C daily presents with flank pain and passes a calcium oxalate stone.",
        discriminator: "Megadose C + oxalate stone",
        concept: "Vitamin C excess",
        answer: "Nausea, vomiting, diarrhea, fatigue, calcium oxalate nephrolithiasis (excess oxalate from vitamin C metabolism); can ↑iron toxicity in predisposed individuals (hemochromatosis, transfusion-related iron overload)",
      },
    ],
    traps: [
      {
        a: "Scurvy (vitamin C)",
        b: "Vitamin K deficiency",
        whyConfused: "Both bruise and bleed.",
        keyDifference: "Scurvy: perifollicular/petechial hemorrhage, swollen gums, corkscrew hair, poor wound healing — normal PT/aPTT (capillary integrity failure). K: ↑PT/↑aPTT with normal bleeding time and no gum/hair findings.",
        clue: "Gums and hair → C; coagulation labs → K.",
      },
      {
        a: "Kwashiorkor",
        b: "Marasmus",
        whyConfused: "Both are protein-energy malnutrition.",
        keyDifference: "Kwashiorkor: PROTEIN malnutrition with edema (↓albumin/↓oncotic pressure + ↑ADH), fatty liver, skin lesions — the swollen abdomen. Marasmus: calorie deficiency, NO edema, muscle wasting; linear growth maintained in acute PEM.",
        clue: "The belly: swollen → kwashiorkor; flat/wasted → marasmus.",
      },
      {
        a: "Acrodermatitis enteropathica (zinc)",
        b: "Biotin (B7) deficiency",
        whyConfused: "Both: dermatitis + diarrhea + alopecia.",
        keyDifference: "Zinc: PERIORIFICIAL and ACRAL distribution, congenital intestinal absorption defect, dysgeusia/anosmia, responds to zinc. B7: raw egg whites (avidin) or long-term antibiotics, no acral distribution.",
        clue: "Rash around openings + fingertips → zinc; raw-egg diet → biotin.",
      },
      {
        a: "Vitamin C ancillary use (methemoglobinemia)",
        b: "Methylene blue",
        whyConfused: "Both reduce methemoglobin.",
        keyDifference: "Methylene blue is first line (NADPH-dependent reductant, fast); ascorbic acid is the ancillary reducing agent (Fe3+ → Fe2+) — used adjunctively or when G6PD makes methylene blue risky.",
        clue: "Ancillary/slow/adjuvant → vitamin C; first line → methylene blue.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'bleeding and bruising child or elder' stem offering scurvy, vitamin K deficiency, and thrombocytopenia",
        differentiator: "Where the bleeding lives",
        correctPath: "Gum swelling + perifollicular hemorrhage + corkscrew hair + poor healing with normal labs → scurvy; umbilical/GI bleeding with ↑PT/↑aPTT → vitamin K; petechiae + mucosal bleeding with low platelets → thrombocytopenia.",
      },
      {
        lookAlike: "A 'malnourished child with a rash' stem offering kwashiorkor, acrodermatitis enteropathica, and pellagra",
        differentiator: "The rash's map and the belly",
        correctPath: "Hyperkeratotic flaky skin + edema + swollen abdomen + ↓albumin → kwashiorkor; periorificial/acral crusted rash + diarrhea + alopecia with normal albumin → zinc/acrodermatitis; C3/C4 collar + sun-exposed hyperpigmentation → pellagra.",
      },
    ],
    miniCase: {
      vignette:
        "A 20-month-old boy from a food-insecure household is weaned from breastfeeding to a sweet potato-and-rice diet. Over 3 months his abdomen became progressively distended while his arms and legs thinned. He has pitting edema to the knees, sparse brittle hair with hypopigmented streaks, flaky “paint-peeling” hyperkeratotic patches on the limbs, and hepatomegaly. He is apathetic but has a fair appetite. Laboratory studies: hemoglobin 8.9 g/dL, serum albumin 1.8 g/dL (low), normal creatinine; urine protein negative.",
      question: "Which of the following mechanisms best explains the abdominal distention and edema?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Protein malnutrition with ↓serum albumin → ↓plasma oncotic pressure, compounded by ↑ADH, driving third-spacing into the peritoneum and soft tissue",
          why: "Correct. This is kwashiorkor: adequate-looking calories (sweet potato, rice) with almost no protein — albumin falls, plasma oncotic pressure falls, ADH rises, and fluid third-spaces (belly, feet); the apolipoprotein-starved liver adds fatty-change hepatomegaly; hair and skin changes plus anemia complete MEALS (Malnutrition, Edema, Anemia, Liver, Skin lesions). Urine protein is negative — the protein is being lost from the diet, not the kidney.",
        },
        {
          label: "B",
          text: "Cirrhotic portal hypertension with ascites from synthetic liver failure",
          why: "Cirrhotic ascites needs portal hypertension plus a genuinely diseased liver; the fatty change of kwashiorkor is metabolic (↓apolipoprotein export), not fibrotic, and this child's problem is dietary protein absence — the liver recovers with refeeding.",
        },
        {
          label: "C",
          text: "Nephrotic-range protein loss causing hypoalbuminemia and generalized edema",
          why: "Nephrotic syndrome is the great hypoalbuminemia mimic, but urine protein is negative here — and the hepatomegaly, hair/skin changes, and dietary history belong to kwashiorkor, not a renal process.",
        },
        {
          label: "D",
          text: "Marasmus with severe total-calorie deprivation and adaptive muscle wasting",
          why: "Marasmus is malnutrition NOT causing edema — muscle wasting without third-spacing. This child is edematous with a swollen abdomen and low albumin: the protein-selective phenotype, not the calorie-total one.",
        },
        {
          label: "E",
          text: "Congenital zinc malabsorption with periorificial dermatitis and diarrhea",
          why: "Acrodermatitis enteropathica shares alopecia and dermatitis but its rash is periorificial and acral (not the flaky-paint limbs), it does not cause hypoalbuminemic edema or hepatomegaly, and the onset here tracks the protein-poor weaning diet.",
        },
      ],
      reasoning:
        "The stem is engineered around the discriminator pair — the SWOLLEN abdomen with edema plus the diet that had calories but no protein. Mechanism ladder: protein starvation → ↓serum albumin → ↓plasma oncotic pressure (+ ↑ADH) → third-space edema; ↓apolipoprotein synthesis → hepatic fatty change → hepatomegaly; hyperkeratosis/dyspigmentation and anemia complete MEALS. CLUE → MECHANISM → FINDING → DIAGNOSIS → MANAGEMENT: protein-poor weaning + edema + ↓albumin with negative urine protein → oncotic-pressure failure → swollen belly, fatty liver, flaky skin → kwashiorkor → cautious refeeding with protein rehabilitation (and watch the refeeding syndrome).",
    },
  },
  mnemonics: [
    {
      code: "“Vitamin C deficiency = sCurvy from a Collagen hydroCylation defect”",
      meaning: "No ascorbate → proline and lysine stay unhydroxylated → unstable collagen triple helix → gums, vessels, wounds, and follicles fail.",
      memorizes: "Scurvy's mechanism and its sign set",
      whenToUse: "Bleeding gums + perifollicular hemorrhage + corkscrew hair + poor healing.",
      clinical: "Tea and toast diet; repletion heals gum and skin signs within weeks.",
    },
    {
      code: "“Kwashiorkor = protein-deficient MEALS: Malnutrition, Edema, Anemia, Liver (fatty), Skin lesions”",
      meaning: "The five findings of protein malnutrition; marasmus by contrast has no edema (calorie deficiency, nothing entirely absent).",
      memorizes: "The kwashiorkor-vs-marasmus sort",
      whenToUse: "Any PEM vignette — decide edema first.",
      clinical: "Edema = ↓albumin/↓oncotic pressure + ↑ADH; fatty liver = ↓apolipoprotein; linear growth maintained in acute PEM.",
    },
    {
      code: "“MEALS makes the belly swell; marasmus makes everything shrink”",
      meaning: "Kwashiorkor's edema swells the abdomen; marasmus wastes muscle and fat with a flat belly and no edema.",
      memorizes: "The visual discriminator between the two PEM states",
      whenToUse: "Two-child comparison questions and photograph stems.",
      clinical: "The photograph pair: swollen child (label A) vs skeletal child (label B).",
    },
  ],
  rapidReview: {
    s30: [
      "Vitamin C (ascorbic acid): antioxidant; facilitates iron absorption (reduces to Fe2+); hydroxylation of proline and lysine in collagen; dopamine β-hydroxylase (dopamine → NE).",
      "Scurvy: swollen gums, easy bruising, petechiae, hemarthrosis, anemia, poor wound healing, perifollicular and subperiosteal hemorrhages, corkscrew hair, weakened immunity; tea and toast diet.",
      "Vitamin C excess: nausea, vomiting, diarrhea, fatigue, calcium oxalate nephrolithiasis; ↑iron toxicity in hemochromatosis/transfusion overload.",
      "Ascorbic acid = ancillary methemoglobinemia treatment (reduces Fe3+ to Fe2+); 'absorbic' acid; fruits and vegetables.",
      "Zinc: 100+ enzymes, zinc fingers; deficiency — delayed wound healing, suppressed immunity, male hypogonadism, ↓adult hair, dysgeusia, anosmia.",
      "Acrodermatitis enteropathica: congenital intestinal zinc absorption defect — triad hair loss + diarrhea + periorificial/acral inflammatory rash; may predispose to alcoholic cirrhosis.",
      "Kwashiorkor: protein malnutrition — edema (↓albumin ↓oncotic pressure + ↑ADH), fatty liver (↓apolipoprotein), MEALS mnemonic.",
      "Marasmus: calorie deficiency, no nutrients entirely absent, NO edema, muscle wasting; linear growth maintained in acute PEM.",
    ],
    m3: [
      "Collagen hydroxylation is the same step vitamin C serves that the connective-tissue notes teach — cross-over with Ehlers-Danlos/osteogenesis imperfecta chemistry.",
      "Dopamine β-hydroxylase failure links vitamin C to catecholamine physiology (NE synthesis).",
      "The oxalate of stones is a vitamin C METABOLITE — dose-dependent, not an allergy.",
      "Zinc competes with copper at absorption — excess zinc gives copper deficiency (the secondary exam fact).",
      "Kwashiorkor's edema is double-mechanism: oncotic failure PLUS antidiuretic hormone excess.",
      "Marasmus maintains linear growth in ACUTE PEM — chronic malnutrition sacrifices it.",
    ],
    m10: [
      "Corkscrew hair is perifollicular hemorrhage plus twisted follicles — the two signs travel together.",
      "Subperiosteal hemorrhage on x-ray (elevated periosteum) is scurvy's radiologic sign in children.",
      "Methemoglobinemia adjunctive therapy: ascorbic acid alongside methylene blue (or instead of it in G6PD).",
      "Dysgeusia + anosmia in adults with poor intake or alcohol overuse → check zinc.",
      "Flaky paint dermatosis (hyperkeratosis, dyspigmentation) is kwashiorkor's skin lesion.",
      "Refeeding the marasmic or kwashiorkor child risks hypophosphatemia/hypokalemia — staged feeding is the management corollary.",
    ],
  },
  recall: [
    {
      q: "List vitamin C's four functions and its food sources.",
      a: "Antioxidant; facilitates iron absorption by reducing it to Fe2+; necessary for hydroxylation of proline and lysine in collagen synthesis; necessary for dopamine β-hydroxylase (dopamine → NE). Found in fruits and vegetables ('absorbic' acid).",
    },
    {
      q: "Give the full scurvy finding list and the classic precipitating diet.",
      a: "Swollen gums, easy bruising, petechiae, hemarthrosis, anemia, poor wound healing, perifollicular and subperiosteal hemorrhages, 'corkscrew' hair; weakened immune response. Precipitated by the tea and toast diet.",
    },
    {
      q: "What are the findings of vitamin C excess, including the iron interaction?",
      a: "Nausea, vomiting, diarrhea, fatigue, calcium oxalate nephrolithiasis (excess oxalate from vitamin C metabolism); can ↑iron toxicity in predisposed individuals by increasing dietary iron absorption (worsens hemochromatosis or transfusion-related iron overload).",
    },
    {
      q: "Describe the acrodermatitis enteropathica triad and its cause.",
      a: "Congenital defect in intestinal zinc absorption: hair loss, diarrhea, and inflammatory skin rash around body openings (periorificial) and tips of fingers/toes (acral). Zinc serves 100+ enzymes and zinc fingers; deficiency also delays wound healing, suppresses immunity, and causes male hypogonadism, ↓adult hair, dysgeusia, anosmia.",
    },
    {
      q: "Contrast kwashiorkor and marasmus by mechanism and findings.",
      a: "Kwashiorkor: protein malnutrition — skin lesions, edema from ↓plasma oncotic pressure (↓serum albumin + ↑ADH), liver fatty change (↓apolipoprotein synthesis); MEALS. Marasmus: calorie deficiency with no nutrients entirely absent — muscle wasting, NO edema; linear growth maintained in acute PEM (vs chronic).",
    },
    {
      q: "How does kwashiorkor's edema form, step by step?",
      a: "Protein starvation → ↓serum albumin → ↓plasma oncotic pressure (plus ↑ADH) → fluid third-spaces into interstitium and peritoneum — clinically the swollen abdomen and pitting edema, with the ↓apolipoprotein liver swelling beneath it.",
    },
  ],
  related: [
    {
      title: "Vitamins B1, B2, B3 & B5",
      note: "The scurvy-vs-pellagra dermatitis sort (perifollicular hemorrhage vs C3/C4 Casal collar) and the shared malnutrition context of every B-complex deficiency.",
      topicId: "b-vitamins-1",
    },
    {
      title: "Collagen & Elastin",
      note: "Vitamin C serves the proline/lysine hydroxylation step of collagen synthesis that the connective-tissue notes detail — the biochemical hinge between the two topics.",
      topicId: "collagen-elastin",
    },
    {
      title: "Nutrition Fundamentals",
      note: "The absorption-chain and washout rules that frame why C depletes in weeks and why PEM states strip the whole B-complex at once.",
      topicId: "nutrition-fundamentals",
    },
  ],
  crossLinks: [
    {
      subject: "Hematology & Oncology",
      connection: "Vitamin C's iron-absorption facilitation (Fe3+→Fe2+) and its methemoglobinemia adjunct role sit with hematology's iron and methemoglobin physiology.",
    },
    {
      subject: "Dermatology",
      connection: "Perifollicular hemorrhage, corkscrew hair, flaky-paint dermatosis, and the periorificial/acral zinc rash — the skin signs that name four deficiency states.",
    },
    {
      subject: "Public Health & Global Health",
      connection: "Kwashiorkor and marasmus are the classic global-health malnutrition phenotypes; the MEALS mnemonic and refeeding strategies belong to that curriculum.",
    },
  ],
};
