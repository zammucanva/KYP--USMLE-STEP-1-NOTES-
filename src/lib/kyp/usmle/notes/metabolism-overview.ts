import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 2 of the metabolism block).
// Source: First Aid 2026, Part 1 pdf 94–95 / book 72–73 (metabolic
// compartmentation; summary of pathways map; activated carriers; universal
// electron acceptors; hexokinase vs glucokinase)

export const metabolismOverview: KypUsMLENote = {
  id: "metabolism-overview",
  title: "Metabolism Overview & Compartmentation",
  subtitle:
    "Where every pathway lives — mitochondria, cytoplasm, or both ('Hugs take two') — the carrier table that moves phosphate, electrons, CO2, methyls and aldehydes between reactions, the NAD+-catabolism vs NADPH-anabolism split, and the hexokinase/glucokinase division of labor.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — overview & compartmentation",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 72–73 (metabolic compartmentation; summary of pathways; activated carriers; universal electron acceptors; hexokinase vs glucokinase)",
  tags: [
    "metabolic compartmentation",
    "mitochondria",
    "cytoplasm",
    "heme synthesis",
    "urea cycle",
    "gluconeogenesis",
    "activated carriers",
    "ATP",
    "NADH",
    "NADPH",
    "FADH2",
    "CoA",
    "lipoamide",
    "biotin",
    "tetrahydrofolate",
    "SAM",
    "TPP",
    "universal electron acceptors",
    "nicotinamides",
    "flavin nucleotides",
    "respiratory burst",
    "cytochrome P-450",
    "glutathione reductase",
    "hexokinase",
    "glucokinase",
    "MODY",
    "gestational diabetes",
  ],
  core: {
    what: "Metabolic compartmentation: MITOCHONDRIA run fatty acid oxidation (β-oxidation), acetyl-CoA production, TCA cycle, oxidative phosphorylation, and ketogenesis; CYTOPLASM runs glycolysis, HMP shunt, and synthesis of cholesterol (SER), proteins (ribosomes, RER), fatty acids, and nucleotides; BOTH compartments host heme synthesis, the urea cycle, and gluconeogenesis — 'Hugs take two.' Activated carriers move activated groups between reactions: ATP (phosphoryl groups), NADH/NADPH/FADH2 (electrons), CoA/lipoamide (acyl groups), biotin (CO2), tetrahydrofolates (1-carbon units), SAM (CH3 groups), TPP (aldehydes). Universal electron acceptors: nicotinamides (NAD+, NADP+ from vitamin B3) and flavin nucleotides (FAD from vitamin B2); NAD+ is generally used in catabolic processes to carry reducing equivalents away as NADH, while NADPH (a product of the HMP shunt) supplies reducing equivalents for anabolic processes, the respiratory burst, the cytochrome P-450 system, and glutathione reductase. Hexokinase (most tissues except liver and pancreatic β cells; low Km/high affinity, low Vmax, inhibited by glucose-6-phosphate) sequesters glucose in tissues even at low concentrations; glucokinase (liver, β cells; high Km/low affinity, high Vmax, insulin-inducible, inhibited by fructose-6-phosphate) stores glucose at high concentrations — glucokinase deficiency (↑ glucose needed for activation → impaired insulin release) causes MODY and gestational diabetes.",
    why: "This page is the navigation layer for the entire metabolism block: every later note names a pathway, and this page tells you which membrane-bounded space it runs in, which carrier it consumes, and which electron-acceptor economy it feeds. The compartmentation and NAD+/NADPH questions are quick points, and the hexokinase/glucokinase table is one of the most-reused comparisons on the exam.",
    keyIdea: "Learn compartmentation as three lists: MITOCHONDRIA = the oxidative engines (β-oxidation, TCA, OXPHOS, ketogenesis + acetyl-CoA production); CYTOPLASM = the building programs (glycolysis, HMP shunt, cholesterol/protein/fatty-acid/nucleotide synthesis); BOTH = 'Hugs take two' (heme synthesis, urea cycle, gluconeogenesis — pathways that shuttle intermediates across the mitochondrial membrane). Then learn the carriers as cargo services (ATP-phosphoryl, NADH/FADH2-electrons, CoA/lipoamide-acyl, biotin-CO2, THF-1C, SAM-CH3, TPP-aldehydes) and the electron-acceptor split: NAD+ → NADH drives CATABOLISM; NADPH (from the HMP shunt) drives ANABOLISM, respiratory burst, P-450, and glutathione reduction. Hexokinase is the tissue-scavenger (low Km, G-6-P-inhibited); glucokinase is the liver-and-β-cell sensor (high Km + high Vmax, insulin-induced, F-6-P-inhibited).",
  },
  mechanisms: [
    {
      id: "compartment-carrier-economy",
      title: "Compartmentation and carriers — the logistics of metabolism",
      context: "Any pathway in the metabolism block",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Fuel and building blocks enter the cell",
            sublabel: "Input — where a pathway runs determines which carriers and shuttles it can use.",
            variant: "input",
          },
          {
            id: "s1",
            label: "MITOCHONDRIA host the oxidative engines: β-oxidation, acetyl-CoA production, TCA cycle, oxidative phosphorylation, ketogenesis",
            sublabel: "Process — the catabolic, ATP-making compartment.",
            variant: "process",
          },
          {
            id: "s2",
            label: "CYTOPLASM hosts the building programs: glycolysis, HMP shunt, cholesterol (SER), protein (ribosomes/RER), fatty acid, and nucleotide synthesis",
            sublabel: "Process — the anabolic, biosynthetic compartment.",
            variant: "process",
          },
          {
            id: "s3",
            label: "BOTH compartments host heme synthesis, the urea cycle, and gluconeogenesis — 'Hugs take two'",
            sublabel: "Process — the three pathways that shuttle intermediates across the mitochondrial membrane.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Activated carriers move groups between reactions: ATP-phosphoryl, NADH/NADPH/FADH2-electrons, CoA/lipoamide-acyl, biotin-CO2, THF-1C, SAM-CH3, TPP-aldehydes",
            sublabel: "Output — the shared currency that connects every pathway on the map.",
            variant: "output",
          },
          {
            id: "o2",
            label: "NAD+ carries reducing equivalents away from catabolism (→ NADH); NADPH from the HMP shunt feeds anabolic processes, respiratory burst, P-450, glutathione reductase",
            sublabel: "Output — the two electron economies never mix: NADH makes ATP, NADPH builds and defends.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "oxidation" },
          { from: "trigger", to: "s2", label: "synthesis" },
          { from: "s1", to: "o1", label: "mitochondrial carriers" },
          { from: "s2", to: "o1", label: "cytosolic carriers" },
          { from: "s3", to: "o1", label: "shuttles" },
          { from: "o1", to: "o2", label: "electron split" },
        ],
        caption:
          "Two compartments, two programs: the mitochondrion oxidizes (β-oxidation, TCA, OXPHOS, ketogenesis — making ATP and NADH) while the cytoplasm builds (glycolysis, HMP shunt, the four synthesis programs — spending ATP and making NADPH). Three pathways refuse to pick a side — heme synthesis, the urea cycle, and gluconeogenesis start in one compartment and finish in the other ('Hugs take two'), which is why their notes always draw a membrane. The activated-carrier table is the freight system that makes the whole economy work, and the electron-acceptor split keeps the books balanced: NAD+ accepts electrons from catabolism (delivered to the electron-transport chain as NADH), while NADPH — the HMP shunt's product — spends its reducing power on anabolic processes, the respiratory burst, cytochrome P-450, and glutathione reductase.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "whole-metabolism-map",
      title: "The summary-of-pathways map — every route on one canvas",
      caption:
        "The source's integrated figure redrawn zone by zone: the carbohydrate hub (galactose → Gal-1-P via galactokinase/GALT; glycogen ↔ UDP-glucose ↔ G-1-P; glucose → G-6-P via hexokinase/glucokinase with von Gierke's glucose-6-phosphatase; the HMP shunt to ribulose-5-P with the thiamine-dependent transketolase; PFK-1 # and F-1,6-BPase 1 around fructose-1,6-BP; the fructose arm via fructokinase and aldolase B) flowing through the lower glycolysis chain (1,3-BPG → 3-PG → 2-PG → PEP → pyruvate kinase #) to the pyruvate hub (PDH T # to acetyl-CoA; pyruvate carboxylase B to oxaloacetate; PEPCK back to PEP; lactate and alanine exchanges); the TCA cycle circle (citrate synthase #, isocitrate DH #, α-KG DH T #); the urea cycle (CPS I, ornithine transcarbamylase, citrulline + aspartate → argininosuccinate → arginine → urea); and lipid metabolism (ACC → malonyl-CoA → fatty acids/triglycerides; acetoacetyl-CoA → HMG-CoA branching to mevalonate/cholesterol via HMG-CoA reductase # versus ketogenesis to acetoacetate/β-hydroxybutyrate; propionyl-CoA carboxylase B → methylmalonyl-CoA → B12 → succinyl-CoA) — with the B/T/# cofactor and regulation markers preserved in the legend.",
      notice:
        "Use this map as the metabolism chapter's TABLE OF CONTENTS: every later note zooms into one arrow here. Three markers organize it — B (biotin cofactor: pyruvate carboxylase, propionyl-CoA carboxylase), T (thiamine/TPP: transketolase, PDH, α-KG dehydrogenase), and # (irreversible, important points of regulation: hexokinase/glucokinase, PFK-1, pyruvate kinase, citrate synthase, isocitrate DH, α-KG DH, HMG-CoA reductase). The named disease enzymes sit at their steps — von Gierke at glucose-6-phosphatase, essential fructosuria at fructokinase, hereditary fructose intolerance at aldolase B, the galactosemias at galactokinase (mild) and GALT (severe).",
    },
    {
      kind: "table",
      title: "Activated carriers — what each one carries",
      intro: "The source's carrier table, verbatim pairings (book p. 73).",
      columns: ["Carrier molecule", "Carried in activated form"],
      rows: [
        ["ATP", "Phosphoryl groups"],
        ["NADH, NADPH, FADH2", "Electrons"],
        ["CoA, lipoamide", "Acyl groups"],
        ["Biotin", "CO2"],
        ["Tetrahydrofolates", "1-carbon units"],
        ["S-adenosylmethionine (SAM)", "CH3 groups"],
        ["TPP", "Aldehydes"],
      ],
      caption:
        "Each carrier is a reusable handle: kinases spend ATP's phosphoryl group, dehydrogenases load NAD+/FAD, the carboxylases carry CO2 on biotin, one-carbon chemistry rides THF, methylations spend SAM, and TPP ferries aldehydes through the dehydrogenase complexes (the T marker on the map). CoA and lipoamide move acyl groups — CoA as the universal acyl carrier, lipoamide as the swinging arm inside PDH and α-KG DH.",
    },
    {
      kind: "text",
      title: "Universal electron acceptors — the NAD+/NADPH split",
      body: [
        "The two electron-acceptor families come from two B vitamins: the nicotinamides (NAD+, NADP+ from vitamin B3) and the flavin nucleotides (FAD from vitamin B2) — the same vitamins the nutrition notes introduced. Their economies are kept deliberately separate. NAD+ is generally used in catabolic processes to carry reducing equivalents away as NADH — food is oxidized, NAD+ collects the electrons, and the respiratory chain pays out ATP for them. NADPH runs the reverse errand: it is a product of the HMP shunt and delivers reducing equivalents where building or defense is happening.",
        "The source's four uses of NADPH are a memorized list: anabolic processes (eg, steroid and fatty acid synthesis), the respiratory burst (NADPH oxidase in neutrophils), the cytochrome P-450 system (monooxygenases), and glutathione reductase (regenerating reduced glutathione). That list explains the clinical connections scattered through the book: G6PD deficiency depletes NADPH and so unmasks oxidative hemolysis; chronic granulomatous disease is a respiratory-burst NADPH oxidase failure; and the steroids-and-fat-synthesis link is why the HMP shunt is busiest in liver, mammary gland, adrenal cortex, and adipose.",
      ],
    },
    {
      kind: "compare",
      title: "Hexokinase vs glucokinase — the scavenger and the sensor",
      intro: "The source's compare table, verbatim pairings (book p. 73). Phosphorylation of glucose to yield glucose-6-phosphate is catalyzed by glucokinase in the liver and hexokinase in other tissues.",
      columns: ["Hexokinase", "Glucokinase"],
      rows: [
        { label: "Location", a: "Most tissues, except liver and pancreatic β cells", b: "Liver, β cells of pancreas" },
        { label: "Km", a: "Lower (↑ affinity)", b: "Higher (↓ affinity)" },
        { label: "Vmax", a: "Lower (↓ capacity)", b: "Higher (↑ capacity)" },
        { label: "Induced by insulin", a: "No", b: "Yes" },
        { label: "Feedback inhibition by", a: "Glucose-6-phosphate", b: "Fructose-6-phosphate" },
        { label: "Physiologic role", a: "Sequesters glucose in tissues even when glucose concentrations are low", b: "Helps store glucose in liver at high glucose concentrations; senses glucose for insulin release" },
      ],
    },
    {
      kind: "visual",
      visualId: "hexokinase-vs-glucokinase",
      title: "The hexokinase/glucokinase comparison — visualized",
      caption:
        "The registry visual built for the glycolysis note, reused here where the source's compare table lives: the two enzymes' Km/Vmax geometry, tissue distribution, insulin inducibility, and their opposite feedback inhibitors (glucose-6-phosphate on hexokinase, fructose-6-phosphate on glucokinase), with the MODY/gestational-diabetes connection to the β-cell glucokinase sensor.",
      notice:
        "The Km difference is the story: hexokinase's low Km means it is half-maximal at LOW glucose — every tissue grabs its share first; glucokinase's high Km means it only engages when glucose is HIGH — the liver buffers the post-meal peak. Insulin induces glucokinase (the fed-state enzyme) and the feedback inhibitors keep G-6-P from accumulating in tissues while freeing the liver enzyme to keep running.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Five recurring shapes: (1) the compartmentation stem — which compartment runs β-oxidation (mitochondria), the HMP shunt (cytoplasm), or gluconeogenesis/heme/urea cycle (both — 'Hugs take two'); (2) the carrier stem — which carrier moves CO2 (biotin), CH3 groups (SAM), aldehydes (TPP), acyl groups (CoA/lipoamide); (3) the NADPH list stem — the four uses (anabolic processes, respiratory burst, P-450, glutathione reductase) or the G6PD connection; (4) the hexokinase/glucokinase stem — high-Km liver sensor induced by insulin and inhibited by fructose-6-phosphate vs the low-Km housekeeping enzyme inhibited by glucose-6-phosphate; (5) the MODY stem — impaired insulin release from a glucokinase sensor defect.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Why compartmentation is clinically visible",
      body: [
        "The both-compartment pathways are the ones whose defects blur: heme synthesis starts in the mitochondrion (ALA synthase) and finishes in the cytoplasm before returning for the final steps — the porphyrias and lead poisoning land on those shuttled intermediates; the urea cycle begins in the mitochondrial matrix (CPS I, ornithine transcarbamylase) and cycles through the cytosol — OTC deficiency is X-linked mitochondrial; and gluconeogenesis' first committed step (pyruvate carboxylase) is mitochondrial while its finishing enzymes are cytosolic, which is why biotin, malate shuttles, and PEPCK all appear in that note.",
        "The electron-acceptor split carries the clinical load: NADPH's four uses map to four diseases — oxidative hemolysis when G6PD deficiency starves glutathione reductase, recurrent catalase-negative infections when chronic granulomatous disease breaks the respiratory burst, and the steroid/fatty-acid synthesis demand of liver, adrenal, and adipose. And the hexokinase/glucokinase pair closes the loop to endocrinology: the β cell's glucokinase is the glucose sensor whose MODY mutations raise the glucose threshold for insulin release — maturity onset diabetes of the young and gestational diabetes in one enzyme defect.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A question asks in which compartment β-oxidation of fatty acids occurs, or where the HMP shunt runs.",
        discriminator: "The compartmentation lists",
        concept: "Metabolic compartmentation",
        answer: "Mitochondria: fatty acid oxidation (β-oxidation), acetyl-CoA production, TCA cycle, oxidative phosphorylation, ketogenesis. Cytoplasm: glycolysis, HMP shunt, synthesis of cholesterol (SER), proteins (ribosomes, RER), fatty acids, nucleotides. Both: heme synthesis, urea cycle, gluconeogenesis — Hugs take two.",
      },
      {
        stem: "A carrier question asks which molecule carries CO2, or CH3 groups, or aldehydes between enzymes.",
        discriminator: "The activated-carrier table",
        concept: "Activated carriers",
        answer: "ATP — phosphoryl groups; NADH, NADPH, FADH2 — electrons; CoA, lipoamide — acyl groups; biotin — CO2; tetrahydrofolates — 1-carbon units; SAM — CH3 groups; TPP — aldehydes.",
      },
      {
        stem: "A question asks why the respiratory burst fails, or why G6PD-deficient RBCs hemolyze, through the reducing-equivalent lens.",
        discriminator: "NADPH's four uses",
        concept: "Universal electron acceptors — NAD+ vs NADPH",
        answer: "NADPH (a product of the HMP shunt) is used in anabolic processes, the respiratory burst, the cytochrome P-450 system, and glutathione reductase; NAD+ is generally used in catabolic processes to carry reducing equivalents away as NADH.",
      },
      {
        stem: "A young non-obese patient with autosomal dominant diabetes has a defect in the β-cell enzyme that senses glucose by phosphorylating it.",
        discriminator: "Glucokinase sensor defect → MODY",
        concept: "Glucokinase deficiency",
        answer: "Glucokinase deficiency (→ ↑ glucose needed for activation → impaired insulin release [vs diabetes mellitus]) is a cause of maturity onset diabetes of the young (MODY) and gestational diabetes.",
      },
      {
        stem: "A liver cell at high glucose needs to keep phosphorylating glucose; a muscle cell at low glucose needs to scavenge it.",
        discriminator: "Km/Vmax/feedback of the two glucose kinases",
        concept: "Hexokinase vs glucokinase",
        answer: "Glucokinase (liver, β cells): higher Km (↓ affinity), higher Vmax (↑ capacity), induced by insulin, inhibited by fructose-6-phosphate. Hexokinase (most other tissues): lower Km (↑ affinity), lower Vmax (↓ capacity), not insulin-induced, inhibited by glucose-6-phosphate.",
      },
    ],
    traps: [
      {
        a: "NADH",
        b: "NADPH",
        whyConfused: "Both are nicotinamide electron carriers.",
        keyDifference: "NAD+ → NADH runs catabolism (electrons to the respiratory chain for ATP); NADPH is a product of the HMP shunt spent on anabolic processes, respiratory burst, P-450, and glutathione reductase.",
        clue: "Making/storing/defending → NADPH; burning for ATP → NADH.",
      },
      {
        a: "Hexokinase (inhibited by G-6-P)",
        b: "Glucokinase (inhibited by F-6-P)",
        whyConfused: "Both phosphorylate glucose; the inhibitors sound interchangeable.",
        keyDifference: "Hexokinase: most tissues, low Km, feedback-inhibited by its PRODUCT glucose-6-phosphate. Glucokinase: liver and β cells, high Km, high Vmax, insulin-induced, feedback-inhibited by fructose-6-phosphate.",
        clue: "Housekeeping enzyme brakes on its own product; liver sensor brakes on a pathway intermediate.",
      },
      {
        a: "Glycolysis (cytoplasm)",
        b: "TCA cycle (mitochondria)",
        whyConfused: "One continuous glucose oxidation story.",
        keyDifference: "Glycolysis is cytoplasmic and ends at pyruvate; pyruvate crosses into mitochondria where PDH (T) makes acetyl-CoA for the TCA cycle — the compartment border is the pyruvate hub.",
        clue: "Follow pyruvate across the membrane.",
      },
      {
        a: "Gluconeogenesis in 'cytoplasm'",
        b: "Gluconeogenesis 'both'",
        whyConfused: "The finishing enzymes are cytosolic.",
        keyDifference: "The pathway is BOTH: pyruvate carboxylase is mitochondrial, PEPCK and the later steps cytosolic — one of the three 'Hugs take two' pathways (with heme synthesis and the urea cycle).",
        clue: "Its rate-limiter list and the malate shuttle both cross the membrane.",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'young patient with autosomal dominant diabetes' stem offering MODY subtypes",
        differentiator: "The gene and its role",
        correctPath: "MODY2 = glucokinase (the sensor — ↑ glucose threshold for insulin release); MODY3 = HNF1α (the transcription factor); MODY1 = HNF4α — this page owns the glucokinase form.",
      },
      {
        lookAlike: "A 'which compartment' stem offering pathways that seem cytosolic",
        differentiator: "The three 'Hugs take two' pathways",
        correctPath: "Heme synthesis, urea cycle, and gluconeogenesis are BOTH — each starts or commits in mitochondria and finishes (or cycles) in the cytoplasm; everything oxidative is mitochondrial and everything biosynthetic on this page is cytosolic.",
      },
    ],
    miniCase: {
      vignette:
        "An 18-year-old slender woman is found to have fasting glucose of 118 mg/dL and an HbA1c of 6.3% on a college sports physical. She has no acanthosis, no obesity, and no autoantibodies (GAD-65, IA-2, insulin, ZnT8 all negative). Her father developed mild diabetes in his 20s and her grandmother in her 30s; three generations are affected in an autosomal dominant pattern. During a monitored glucose tolerance test her insulin secretion curve is right-shifted — significantly more glucose is needed to trigger the same insulin response — and genetic testing shows a heterozygous mutation in GCK.",
      question: "Which of the following best explains her hyperglycemia?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Glucokinase deficiency — ↑ glucose needed for activation → impaired insulin release — a cause of maturity onset diabetes of the young (MODY)",
          why: "Correct. Her β-cell glucokinase is the glucose SENSOR: its high Km means insulin release is triggered only when glucose climbs well above fasting levels. A heterozygous GCK loss-of-function raises the threshold further (the right-shifted curve), so fasting glucose sits mildly high with preserved (just re-set) β-cell function — the classic MODY2 presentation: young, slender, autosomal dominant, antibody-negative, stable for decades.",
        },
        {
          label: "B",
          text: "Type 1 diabetes mellitus with early autoimmune β-cell destruction",
          why: "Type 1 gives absolute insulin deficiency with positive autoantibodies, weight loss, and ketosis risk — her antibody-negative, stable, three-generation dominant pattern with a right-shifted (not absent) insulin response is the opposite physiology.",
        },
        {
          label: "C",
          text: "Insulin resistance from type 2 diabetes mellitus",
          why: "Type 2 comes with obesity, acanthosis nigricans, and HIGH insulin with resistance; she is slender with none of the stigmata, and her defect is in glucose sensing, not insulin action.",
        },
        {
          label: "D",
          text: "Hexokinase deficiency in the pancreatic β cells",
          why: "β cells express GLUCOKINASE, not hexokinase, as their sensor (the compare table's location row); hexokinase works at low Km in most tissues and is not insulin-induced — the wrong enzyme for this stem.",
        },
        {
          label: "E",
          text: "Gestational diabetes from placental hormone-induced insulin resistance",
          why: "Gestational diabetes is driven by placental lactogen and progesterone unmasking insulin resistance in pregnancy; she is not pregnant, and GCK mutations DO cause some gestational diabetes — but her non-gravid presentation with the family history is MODY2, the same sensor defect in its hereditary form.",
        },
      ],
      reasoning:
        "The stem's discriminators all point one way: autosomal dominant across three generations, antibody-negative, slender, and — the key line — an insulin curve that is right-SHIFTED, not flattened. Glucokinase is the β cell's threshold-setting sensor (high Km, high Vmax, insulin-inducible), so a heterozygous defect means more glucose is needed for activation: mild stable fasting hyperglycemia with otherwise intact secretion. CLUE → MECHANISM → FINDING → DIAGNOSIS → MANAGEMENT: young dominant diabetes + right-shifted insulin response → glucokinase sensor threshold raised → mild stable hyperglycemia → MODY2 (GCK) → usually diet/lifestyle alone, no insulin needed at onset — and tell the obstetric team, because the same mutation surfaces as gestational diabetes in pregnancy.",
    },
  },
  mnemonics: [
    {
      code: "“Hugs take two — Heme, Urea cycle, gluconeogenesis (GS) — both compartments”",
      meaning: "Heme synthesis, the Urea cycle, and GluconeogenesiS start in mitochondria and finish in the cytoplasm (HUGS run in both).",
      memorizes: "The both-compartment pathways",
      whenToUse: "Any 'which compartment' question with these three pathways.",
      clinical: "Their enzymes split across membranes — pyruvate carboxylase mitochondrial, PEPCK cytosolic; CPS I/OTC mitochondrial, the rest of the urea cycle cytosolic.",
    },
    {
      code: "“NADH burns, NADPH builds (and bursts, detoxes, and defends)”",
      meaning: "NAD+ → NADH is catabolic (electrons to the respiratory chain); NADPH (HMP shunt product) feeds anabolic processes, respiratory burst, P-450, glutathione reductase.",
      memorizes: "The two electron economies",
      whenToUse: "Any NADPH-use question; G6PD and CGD stems.",
      clinical: "G6PD deficiency starves glutathione reductase → oxidative hemolysis; CGD breaks the NADPH oxidase burst.",
    },
  ],
  rapidReview: {
    s30: [
      "Mitochondria: β-oxidation, acetyl-CoA production, TCA cycle, oxidative phosphorylation, ketogenesis.",
      "Cytoplasm: glycolysis, HMP shunt, cholesterol synthesis (SER), protein synthesis (ribosomes, RER), fatty acids, nucleotides.",
      "Both: heme synthesis, urea cycle, gluconeogenesis — Hugs take two.",
      "Carriers: ATP-phosphoryl · NADH/NADPH/FADH2-electrons · CoA/lipoamide-acyl · biotin-CO2 · THF-1-carbon · SAM-CH3 · TPP-aldehydes.",
      "NAD+ → catabolic (reducing equivalents away as NADH); NADPH (HMP shunt product) → anabolic processes, respiratory burst, P-450, glutathione reductase.",
      "Nicotinamides from B3; flavin nucleotides (FAD) from B2.",
      "Hexokinase: most tissues (not liver/β cells), low Km, low Vmax, G-6-P-inhibited. Glucokinase: liver + β cells, high Km, high Vmax, insulin-induced, F-6-P-inhibited.",
      "Glucokinase deficiency → ↑ glucose needed for activation → impaired insulin release → MODY and gestational diabetes.",
    ],
    m3: [
      "The hexokinase/glucokinase table's logic: tissues scavenge at any glucose level (low Km, product-inhibited); liver buffers the fed state (high Km, induced by insulin).",
      "CoA AND lipoamide carry acyl groups — lipoamide is the swinging arm inside PDH and α-KG DH (with TPP).",
      "Cytochrome P-450's NADPH use is why the liver's HMP shunt supports drug metabolism.",
      "Glutathione reductase consumes NADPH to keep GSH reduced — the erythrocyte's antioxidant loop.",
    ],
    m10: [
      "MODY2 (GCK) is mild and stable for decades — often detected incidentally like this stem; MODY3 (HNF1α) is the more progressive transcription-factor form.",
      "The urea cycle's mitochondrial steps (CPS I, OTC) are why OTC deficiency hyperammonemia comes with orotic acid from the overloaded mitochondrial carbamoyl phosphate.",
      "Gluconeogenesis' pyruvate carboxylase is mitochondrial and biotin-dependent — two page-links (compartmentation + carriers) in one enzyme.",
      "Glucokinase's insulin inducibility makes it a fed-state enzyme; hexokinase is constitutive housekeeping.",
      "Fructose-6-phosphate inhibiting glucokinase (not G-6-P) keeps the liver from trapping phosphate when glycolysis is saturated.",
      "β-cell glucokinase mutations raise the glucose threshold — the monitored tolerance test's right-shifted curve is the physiology made visible.",
    ],
  },
  recall: [
    {
      q: "List the pathways of the mitochondria, the cytoplasm, and both compartments.",
      a: "Mitochondria: fatty acid oxidation (β-oxidation), acetyl-CoA production, TCA cycle, oxidative phosphorylation, ketogenesis. Cytoplasm: glycolysis, HMP shunt, synthesis of cholesterol (SER), proteins (ribosomes, RER), fatty acids, nucleotides. Both: heme synthesis, urea cycle, gluconeogenesis ('Hugs take two').",
    },
    {
      q: "Name all seven activated carriers and their cargo.",
      a: "ATP — phosphoryl groups; NADH, NADPH, FADH2 — electrons; CoA, lipoamide — acyl groups; biotin — CO2; tetrahydrofolates — 1-carbon units; S-adenosylmethionine — CH3 groups; TPP — aldehydes.",
    },
    {
      q: "Contrast the roles of NAD+/NADH and NADPH, and list NADPH's four uses.",
      a: "NAD+ is generally used in catabolic processes to carry reducing equivalents away as NADH (→ respiratory chain, ATP); NADPH is a product of the HMP shunt used in anabolic processes (eg, steroid and fatty acid synthesis), the respiratory burst, the cytochrome P-450 system, and glutathione reductase.",
    },
    {
      q: "Give every row of the hexokinase vs glucokinase comparison.",
      a: "Location: most tissues except liver and β cells vs liver and β cells. Km: lower (↑affinity) vs higher (↓affinity). Vmax: lower vs higher. Induced by insulin: no vs yes. Feedback inhibition by: glucose-6-phosphate vs fructose-6-phosphate.",
    },
    {
      q: "What endocrine syndrome does glucokinase deficiency cause, and by what mechanism?",
      a: "Glucokinase deficiency (→ ↑ glucose needed for activation → impaired insulin release [vs diabetes mellitus]) is a cause of maturity onset diabetes of the young (MODY) and gestational diabetes — the β-cell glucose sensor's threshold is raised.",
    },
  ],
  related: [
    {
      title: "Enzyme Terminology & Kinetics Concepts",
      note: "The previous page's decoder and rate-limiter table — the map's # markers and named enzymes resolve through it.",
      topicId: "enzyme-terminology",
    },
    {
      title: "Glycolysis Regulation",
      note: "The pilot note that expands the glycolysis zone of the map — PFK-1's F-2,6-BP switch and the pyruvate hub in full detail.",
      topicId: "glycolysis-regulation",
    },
    {
      title: "Pentose Phosphate Pathway",
      note: "The HMP shunt arrow on the map — G6PD, ribulose-5-P, and the NADPH economy this overview introduces.",
      topicId: "pentose-phosphate-pathway",
    },
  ],
  crossLinks: [
    {
      subject: "Hematology & Oncology",
      connection: "NADPH's glutathione-reductase use is the G6PD hemolysis mechanism; the respiratory burst is CGD's NADPH oxidase.",
    },
    {
      subject: "Endocrinology",
      connection: "Glucokinase as the β-cell sensor — MODY2 and gestational diabetes; insulin's induction of the fed-state enzymes.",
    },
    {
      subject: "Pharmacology",
      connection: "Cytochrome P-450's NADPH dependence links the HMP shunt to drug metabolism and drug-drug interactions.",
    },
  ],
};
