import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 12).
// Source: First Aid 2026, Part 1 pdf 106–107 / book 84–85
// (glycogen regulation by insulin and glucagon/epinephrine; glycogen;
// glycogen storage diseases)

export const glycogenMetabolism: KypUsMLENote = {
  id: "glycogen-metabolism",
  title: "Glycogen Metabolism & Storage Diseases",
  subtitle:
    "The body's glucose storage polymer and the hormonal switch that runs it — insulin's tyrosine kinase receptor turning the phosphatase on (synthesize), glucagon and epinephrine turning protein kinase A on (break down, with muscle's calcium-calmodulin fuel-on-demand override) — plus the five autosomal recessive storage diseases that block the numbered enzymes of the glycogenesis and glycogenolysis map: Von Gierke (glucose-6-phosphatase), Pompe (lysosomal acid maltase), Cori (debranching), Andersen (branching), and McArdle (myophosphorylase).",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — glycogen metabolism, glycogen storage diseases",
  difficulty: 3,
  readTime: 14,
  sourceRef:
    "First Aid 2026, Part 1 pp. 84–85 (glycogen regulation by insulin and glucagon/epinephrine; glycogen; glycogen storage diseases)",
  tags: [
    "glycogen",
    "glycogenesis",
    "glycogenolysis",
    "glycogen synthase",
    "glycogen phosphorylase",
    "glycogenin",
    "UDP-glucose",
    "branching enzyme",
    "debranching enzyme",
    "4-alpha-D-glucanotransferase",
    "alpha-1,6-glucosidase",
    "limit dextrin",
    "von Gierke disease",
    "Pompe disease",
    "acid maltase",
    "Cori disease",
    "Andersen disease",
    "McArdle disease",
    "myophosphorylase",
    "glucose-6-phosphatase",
    "protein kinase A",
    "protein phosphatase",
    "cAMP",
    "adenylate cyclase",
    "calcium-calmodulin",
    "second wind phenomenon",
    "myoglobinuria",
    "periodic acid-Schiff stain",
    "cornstarch",
    "autosomal recessive",
  ],
  core: {
    what: "Glycogen is a branched polymer of glucose residues joined by α-(1,4) bonds in the linear linkages and α-(1,6) bonds at the branches, primed by glycogenin. Glycogenesis runs Glucose → glucose-6-phosphate → glucose-1-phosphate → UDP-glucose → glycogen, with glycogen synthase extending the chain (step ③) and branching enzyme creating the α-(1,6) branches (step ④). Glycogenolysis runs the map in reverse: glycogen phosphorylase (step ⑤) liberates glucose-1-phosphate residues off branched glycogen until 4 glucose units remain on a branch; 4-α-D-glucanotransferase (debranching enzyme, step ⑥) then moves 3 of the 4 glucose units from the branch to the linear linkage, and α-1,6-glucosidase (debranching enzyme, step ⑦) cleaves off the last residue, liberating a free glucose; a small amount of glycogen is degraded in lysosomes by ⑧ α-1,4-glucosidase (acid maltase). Limit dextrin is the 2-4 residues remaining on a branch after glycogen phosphorylase has shortened it. The whole map is hormone-regulated: in the fasted state glucagon (liver) and epinephrine (liver and muscle) act through G protein-coupled receptors → adenylate cyclase → cAMP (from ATP) → protein kinase A, which phosphorylates glycogen phosphorylase kinase ON (which turns glycogen phosphorylase ON → glycogenolysis) and glycogen synthase OFF; epinephrine in the liver also acts through the α₁ receptor → endoplasmic reticulum → calcium, and calcium-calmodulin in muscle during contraction likewise activates phosphorylase kinase. In the fed state insulin (liver and muscle) acts through the tyrosine kinase dimer receptor to activate protein phosphatase (and directly glycogen synthase), turning glycogen synthase ON and phosphorylase kinase OFF → glycogenesis. The five classic glycogen storage diseases (at least 15 types exist; all types I-V are autosomal recessive) block the numbered enzymes: Von Gierke type I (glucose-6-phosphatase — severe fasting hypoglycemia with hepatomegaly, renomegaly, ↑ lactate, ↑ triglycerides, ↑ uric acid; treat with frequent oral glucose/cornstarch and avoidance of fructose and galactose), Pompe type II (lysosomal acid α-1,4-glucosidase — cardiomyopathy, hypotonia, enlarged tongue, early death), Cori type III (debranching enzymes — like von Gierke but milder with normal blood lactate and intact gluconeogenesis), Andersen type IV (branching enzyme — hepatosplenomegaly, failure to thrive, infantile cirrhosis, hypoglycemia late), and McArdle type V (skeletal muscle glycogen phosphorylase/myophosphorylase — painful cramps, myoglobinuria with strenuous exercise, second-wind phenomenon, flat venous lactate curve).",
    why: "This is the chapter's heaviest signal-transduction figure and its most table-tested disease family on two adjacent pages. The hormonal switch explains why the same polymer is built after meals and broken down during fasting and exercise — one kinase (protein kinase A) and one phosphatase reciprocally controlling the rate-limiting enzymes of each direction, which is why the fasted state never runs synthesis and breakdown simultaneously. The tissue logic explains the disease phenotypes: skeletal muscle glycogen undergoes glycogenolysis → glucose-1-phosphate → glucose-6-phosphate, which is rapidly metabolized during exercise (so a muscle phosphorylase block cramps and spills myoglobin), while hepatocytes store glycogen and degrade it to maintain blood sugar (so a liver block hypoglycemizes). Periodic acid-Schiff stain identifies glycogen and is useful in identifying these diseases.",
    keyIdea: "Read the numbered map the way the exam does: every circled enzyme ①-⑧ is a potential disease block, and the five named diseases are five specific numbered blocks — ① Von Gierke (the liver's glucose-6-phosphatase, the only one that starves the blood), ② UDP-glucose pyrophosphorylase, ③ glycogen synthase, ④ Andersen (branching), ⑤ McArdle (muscle phosphorylase), ⑥⑦ Cori (the debranching enzyme's two sequential activities — transferase then glucosidase), ⑧ Pompe (the lysosome-only arm). The two discriminators that settle most questions: the LACTATE (normal in Cori because gluconeogenesis is intact; high in Von Gierke because it is impaired) and the TISSUE (liver diseases hypoglycemize with hepatomegaly; muscle disease cramps with myoglobinuria and normal blood glucose).",
  },
  mechanisms: [
    {
      id: "hormonal-switch",
      title: "The hormonal switch — one kinase, one phosphatase, reciprocal enzymes",
      context: "Fasted vs fed regulation of glycogen in liver and muscle",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Fasted (or exercise): glucagon (liver), epinephrine (liver and muscle via β receptor; liver α₁ receptor), → GPCR-coupled receptors",
            sublabel: "Input — the breakdown signals.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Glucagon/β receptors → adenylate cyclase: ATP → cAMP → protein kinase A; α₁ receptor → endoplasmic reticulum → calcium",
            sublabel: "Process — the two second messengers: cAMP and calcium.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Protein kinase A ⊕ glycogen phosphorylase kinase → ⊕ glycogen phosphorylase → glycogenolysis; calcium-calmodulin in muscle during contraction also ⊕ phosphorylase kinase; PKA ⊟ glycogen synthase",
            sublabel: "Process — phosphorylation turns breakdown ON and synthesis OFF.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Fed: insulin (liver and muscle) → tyrosine kinase dimer receptor → ⊕ protein phosphatase (and direct ⊕ of synthase) → glycogen synthase ON, phosphorylase kinase OFF → glycogenesis",
            sublabel: "Output — dephosphorylation reverses everything: synthesis ON, breakdown OFF.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Muscle's override: contraction itself releases calcium → calcium-calmodulin activates phosphorylase kinase without hormones — fuel on demand",
            sublabel: "Amplifier — the exercising muscle does not wait for epinephrine.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "GPCR" },
          { from: "s1", to: "s2", label: "cAMP → PKA" },
          { from: "s2", to: "o1", label: "insulin reverses" },
          { from: "x1", to: "s2", label: "Ca²⁺-calmodulin ⊕" },
        ],
        caption:
          "The figure's teaching core is reciprocity: protein kinase A phosphorylates two enzymes with opposite effects — glycogen phosphorylase kinase (ON, starting the cascade phosphorylase → glycogenolysis) and glycogen synthase (OFF) — so the fasted state commits to breakdown alone. Insulin's tyrosine kinase dimer receptor activates protein phosphatase (and directly the synthase), which dephosphorylates the same targets with the opposite outcome: synthase ON, phosphorylase kinase OFF. Muscle adds a local override — calcium-calmodulin during contraction activates phosphorylase kinase directly, which is why working muscle consumes its glycogen regardless of the hormonal state. Epinephrine reaches both tissues through the β receptor (cAMP route); in the liver it additionally signals through the α₁ receptor, releasing calcium from the endoplasmic reticulum.",
      },
    },
    {
      id: "gsd-blocks",
      title: "Five blocks on one map — what piles up, what starves",
      context: "Glycogen storage diseases types I-V (all autosomal recessive)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An enzyme block at one of the numbered steps: ① glucose-6-phosphatase (Von Gierke I), ⑧ lysosomal α-1,4-glucosidase (Pompe II), ⑥⑦ debranching enzymes (Cori III), ④ branching enzyme (Andersen IV), ⑤ muscle glycogen phosphorylase (McArdle V)",
            sublabel: "Input — pick the numbered block; the phenotype follows the tissue and the step.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Substrate accumulates: glycogen in liver and kidneys (I), lysosomes of heart, liver, muscle (II), limit dextrin-like structures in cytosol (III), abnormal unbranched glycogen (IV), muscle glycogen (V)",
            sublabel: "Process — storage: organomegaly or tissue accumulation at the blocked step.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Product starves: liver cannot release free glucose (I → severe fasting hypoglycemia; III → milder with intact gluconeogenesis; IV → hypoglycemia late), muscle cannot generate glucose-6-phosphate from glycogen (V → cramps, myoglobinuria)",
            sublabel: "Process — the missing output: blood sugar in liver blocks, exercise fuel in muscle blocks.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Treatment follows the block: frequent oral glucose/cornstarch + avoidance of fructose and galactose (I); supportive (II); glucose for the liver blocks; the second wind of exercise (V) comes from ↑ muscular blood flow",
            sublabel: "Output — keep the blood glucose supplied and remove what feeds the pile.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Diagnostic anchor: periodic acid-Schiff (PAS) stain identifies glycogen and is useful in identifying these diseases",
            sublabel: "Tool — the histochemical proof of storage.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "block → storage" },
          { from: "s1", to: "s2", label: "storage + starvation" },
          { from: "s2", to: "o1", label: "replace the missing output" },
          { from: "x1", to: "s1", label: "PAS confirms" },
        ],
        caption:
          "Every glycogen storage disease is the same logic at a different numbered step: substrate piles up behind the block (hepatomegaly, cardiomegaly, or limit dextrin), and the product beyond it starves (fasting hypoglycemia when the liver cannot finish glucose release, cramps and myoglobinuria when muscle cannot start glycolysis from glycogen). The lactate settles the liver differential — high in Von Gierke (impaired gluconeogenesis and glycogenolysis) and normal in Cori (gluconeogenesis intact) — while the blood glucose is typically unaffected in McArdle because liver release is intact. Pompe is the odd one out: the lysosome-only arm (⑧ acid maltase) handles only a small amount of glycogen, but its failure fills lysosomes throughout heart, liver, and muscle, which is why Pompe trashes the pump.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "glycogen-hormone-regulation",
      title: "Glycogen regulation by insulin and glucagon/epinephrine — the hormonal switch",
      caption:
        "The source signal-transduction map redrawn: fasted glucagon (liver) and epinephrine (liver and muscle) act through G protein-coupled receptors → adenylate cyclase (ATP → cAMP) → protein kinase A, which phosphorylates glycogen phosphorylase kinase ON and glycogen synthase OFF; epinephrine (liver) additionally acts through the α₁ receptor → endoplasmic reticulum → calcium, and calcium-calmodulin in muscle during contraction feeds the same kinase; the cascade ends in glycogen phosphorylase breaking glycogen to glucose. Fed insulin (liver and muscle) acts through the tyrosine kinase dimer receptor → protein phosphatase (and a direct activation of glycogen synthase), turning synthesis on and breakdown off.",
      notice:
        "Track the two second messengers to the same enzyme: cAMP-dependent protein kinase A phosphorylates phosphorylase kinase (on) while calcium-calmodulin (muscle contraction) activates it independently — two inputs, one enzyme, one outcome (glycogenolysis). Then track insulin's mirror image: the phosphatase that dephosphorylates everything protein kinase A touched. The receptor classes are themselves testable: GPCR (glucagon receptor, β, α₁) versus receptor tyrosine kinase (the insulin dimer).",
    },
    {
      kind: "visual",
      visualId: "glycogen-metabolism-map",
      title: "Glycogen metabolism — glycogenesis, glycogenolysis, and the five storage-disease blocks",
      caption:
        "The source map redrawn with its exact numbering: glucose ↔ glucose-6-P ↔ glucose-1-P → UDP-glucose → glycogen (glycogenesis: ② UDP-glucose pyrophosphorylase, ③ glycogen synthase, ④ branching enzyme), the glycogenolysis arm (⑤ glycogen phosphorylase releasing glucose-1-P down to the limit dextrin, ⑥ 4-α-D-glucanotransferase moving 3 of 4 residual glucoses to the linear linkage, ⑦ α-1,6-glucosidase freeing the last glucose), and the lysosome-only arm (⑧ α-1,4-glucosidase, acid maltase). The red Roman numerals mark the disease blocks (I Von Gierke at glucose-6-phosphatase, II Pompe, III Cori, IV Anderson at the branching enzyme, V McArdle at muscle phosphorylase) and the side lists reproduce the figure's disease and enzyme keys.",
      notice:
        "The numbering is the exam's coordinate system: learn ①-⑧ as positions, then pin each disease to its position. The debranching enzyme gets two numbers (⑥ transferase, ⑦ glucosidase) because it does two sequential jobs — move three glucoses, then free the last one as FREE glucose (not glucose-1-P). Phosphorylase's product is glucose-1-P, but the G6Pase step (①) is what releases free glucose to the blood, which is why Von Gierke (a ① block, not a glycogen enzyme block) still presents as the most severe fasting hypoglycemia.",
    },
    {
      kind: "table",
      title: "Glycogen storage diseases — the verbatim table",
      intro:
        "The source table reproduced in full (types I-V, all autosomal recessive), with every findings block, enzyme, and comment as printed.",
      columns: ["Disease", "Findings", "Deficient enzyme", "Comments"],
      rows: [
        [
          "Von Gierke disease (type I)",
          "Severe fasting hypoglycemia, ↑ glycogen in liver and kidneys, ↑ blood lactate, ↑ triglycerides, ↑ uric acid (gout), hepatomegaly, renomegaly. Liver does not regulate blood glucose.",
          "Glucose-6-phosphatase",
          "Treatment: frequent oral glucose/cornstarch; avoidance of fructose and galactose. Impaired gluconeogenesis and glycogenolysis.",
        ],
        [
          "Pompe disease (type II)",
          "Cardiomyopathy, hypotonia, exercise intolerance, enlarged tongue, and systemic findings lead to early death.",
          "Lysosomal acid α-1,4-glucosidase (acid maltase)",
          "Pompe trashes the pump (1st and 4th letter; heart, liver, and muscle).",
        ],
        [
          "Cori disease (type III)",
          "Similar to von Gierke disease, but milder symptoms and normal blood lactate levels. Can lead to cardiomyopathy. Limit dextrin-like structures accumulate in cytosol; can lead to hepatomegaly, cirrhosis, and hepatic adenomas.",
          "Debranching enzymes (α-1,6-glucosidase and 4-α-D-glucanotransferase)",
          "Gluconeogenesis is intact.",
        ],
        [
          "Andersen disease (type IV)",
          "Most commonly presents with hepatosplenomegaly and failure to thrive in early infancy. Other findings include infantile cirrhosis, muscular weakness, hypotonia, cardiomyopathy, early childhood death.",
          "Branching enzyme (neuromuscular form can present at any age)",
          "Hypoglycemia occurs late in the disease.",
        ],
        [
          "McArdle disease (type V)",
          "↑ glycogen in muscle, but muscle cannot break it down → painful muscle cramps, myoglobinuria (red urine) with strenuous exercise, and arrhythmia from electrolyte abnormalities. Second-wind phenomenon noted during exercise due to ↑ muscular blood flow.",
          "Skeletal muscle glycogen phosphorylase (myophosphorylase)",
          "Characterized by a flat venous lactate curve with normal rise in ammonia levels during exercise. Blood glucose levels typically unaffected. McArdle = muscle.",
        ],
      ],
      caption:
        "At least 15 types have been identified, all resulting in abnormal glycogen metabolism and an accumulation of glycogen within cells. Periodic acid-Schiff stain identifies glycogen and is useful in identifying these diseases.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The source's own memory anchors",
      body:
        "Types I-V are autosomal recessive. The disease order runs Von Gierke, Pompe, Cori, Andersen, McArdle — the source's mnemonic: 'Vice president can't accept money.' For the two enzyme-name pairs that get swapped under pressure: Andersen: Branching. Cori: Debranching. (ABCD). And for the two single-word anchors: 'Pompe trashes the pump (1st and 4th letter; heart, liver, and muscle)' and 'McArdle = muscle.'",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "An infant has recurrent severe fasting hypoglycemia with a doll-like swollen abdomen; labs show ↑ blood lactate, ↑ triglycerides, and ↑ uric acid, and examination finds hepatomegaly and renomegaly.",
        discriminator: "Fasting hypoglycemia + ↑ lactate + ↑ uric acid + hepatorenalomegaly",
        concept: "Von Gierke disease (type I)",
        answer:
          "Glucose-6-phosphatase deficiency — the liver cannot release free glucose, so both gluconeogenesis and glycogenolysis are impaired; treatment is frequent oral glucose/cornstarch and avoidance of fructose and galactose.",
      },
      {
        stem: "An infant presents with hypotonia, exercise intolerance, macroglossia, and massive cardiomegaly on chest x-ray; systemic findings progress to early death.",
        discriminator: "Cardiomyopathy + hypotonia + enlarged tongue",
        concept: "Pompe disease (type II)",
        answer:
          "Lysosomal acid α-1,4-glucosidase (acid maltase) deficiency — glycogen accumulates in lysosomes of heart, liver, and muscle; Pompe trashes the pump (1st and 4th letter).",
      },
      {
        stem: "A child with hepatomegaly has fasting hypoglycemia that is milder than a sibling's type I disease, with normal blood lactate; biopsy shows limit dextrin-like structures accumulating in the cytosol.",
        discriminator: "Von-Gierke-like but normal lactate + limit dextrin",
        concept: "Cori disease (type III)",
        answer:
          "Debranching enzymes (α-1,6-glucosidase and 4-α-D-glucanotransferase) deficiency — gluconeogenesis is intact, which keeps lactate normal; can lead to cardiomyopathy, cirrhosis, and hepatic adenomas.",
      },
      {
        stem: "An infant with hepatosplenomegaly and failure to thrive develops cirrhosis in infancy; hypoglycemia appears only late in the disease course.",
        discriminator: "Branching enzyme + late hypoglycemia + early cirrhosis",
        concept: "Andersen disease (type IV)",
        answer:
          "Branching enzyme deficiency — abnormal glycogen with long unbranched chains accumulates; neuromuscular form can present at any age; ABCD — Andersen: Branching, Cori: Debranching.",
      },
      {
        stem: "A young adult has painful muscle cramps and red urine after strenuous exercise; a venous lactate measured during an exercise test stays flat while ammonia rises normally; blood glucose is unaffected.",
        discriminator: "Exercise cramps + myoglobinuria + flat lactate curve",
        concept: "McArdle disease (type V)",
        answer:
          "Skeletal muscle glycogen phosphorylase (myophosphorylase) deficiency — muscle glycogen cannot be broken down; the second-wind phenomenon during exercise is due to ↑ muscular blood flow; McArdle = muscle.",
      },
      {
        stem: "During sustained exercise a patient with known exercise intolerance notes that after a brief slow-down the same workload becomes markedly easier; the phenomenon is attributed to increased muscular blood flow.",
        discriminator: "Second-wind phenomenon",
        concept: "McArdle disease — the second wind",
        answer:
          "The second-wind phenomenon in McArdle disease: with continued exercise, ↑ muscular blood flow delivers blood-borne fuels (free fatty acids and glucose) that bypass the blocked muscle glycogenolysis, improving symptoms.",
      },
    ],
    traps: [
      {
        a: "Cori disease raises blood lactate like von Gierke",
        b: "Cori has normal blood lactate (gluconeogenesis is intact)",
        whyConfused: "Both are hepatomegaly-plus-fasting-hypoglycemia diseases.",
        keyDifference:
          "Von Gierke impairs both gluconeogenesis and glycogenolysis (lactate piles up — lactic acidosis, hyperuricemia, hypertriglyceridemia); Cori blocks only the debranching step, so gluconeogenesis stays intact and lactate stays normal.",
        clue: "The lactate value in a hypoglycemic, hepatomegalic child.",
      },
      {
        a: "Pompe and McArdle are the same muscle-glycogen disease",
        b: "Pompe is lysosomal and cardiac; McArdle is cytosolic and cramping",
        whyConfused: "Both show ↑ glycogen in affected tissue and exercise intolerance.",
        keyDifference:
          "Pompe (II) blocks the lysosomal α-1,4-glucosidase — infantile cardiomyopathy, hypotonia, macroglossia, early death; McArdle (V) blocks the cytosolic muscle phosphorylase — adolescent-onset cramps and myoglobinuria with a flat lactate curve and unaffected blood glucose.",
        clue: "Age (infant vs young adult) and organ (heart vs skeletal muscle).",
      },
      {
        a: "McArdle disease causes hypoglycemia during exercise",
        b: "Blood glucose levels are typically unaffected in McArdle",
        whyConfused: "Exercise plus a glycogen disease suggests glucose problems.",
        keyDifference:
          "The block is in skeletal muscle's own phosphorylase — the liver's glycogenolysis and gluconeogenesis are untouched, so blood glucose is maintained; the lactate curve stays flat because muscle cannot even reach glycolysis from glycogen.",
        clue: "Any stem pairing exercise cramps with a normal or flat-glucose/lactate workup.",
      },
      {
        a: "Andersen disease presents with early fasting hypoglycemia",
        b: "Hypoglycemia occurs late in Andersen disease",
        whyConfused: "It is a liver-storage disease like the others.",
        keyDifference:
          "Andersen (IV, branching enzyme) presents first with hepatosplenomegaly and failure to thrive in early infancy, with infantile cirrhosis driving the prognosis; the hypoglycemia is a late finding, unlike von Gierke's severe early fasting hypoglycemia.",
        clue: "Cirrhosis-plus-failure-to-thrive with late or absent hypoglycemia.",
      },
    ],
    pivots: [
      {
        lookAlike: "The hypoglycemic infant with hepatomegaly (Von Gierke vs Cori vs Andersen)",
        differentiator: "Lactate, timing, and spleen",
        correctPath:
          "Severe fasting hypoglycemia + ↑ lactate/triglycerides/uric acid + renomegaly → Von Gierke (I); milder hypoglycemia + normal lactate + limit dextrin → Cori (III); hepatosplenomegaly + failure to thrive + cirrhosis with hypoglycemia only late → Andersen (IV).",
      },
      {
        lookAlike: "The exercise-intolerant patient with muscle complaints (McArdle vs Pompe)",
        differentiator: "Age, heart, and the lactate curve",
        correctPath:
          "Young adult + cramps + myoglobinuria + second wind + flat venous lactate with normal ammonia rise → McArdle (V); infant + cardiomyopathy + hypotonia + macroglossia → Pompe (II).",
      },
    ],
    miniCase: {
      vignette:
        "A 19-year-old college rower is evaluated for recurrent muscle pain and dark urine. During preseason conditioning he repeatedly developed cramping calf pain 10-15 minutes into steady ergometer work, once noting cola-colored urine that evening; the episodes resolved overnight with hydration. He has no similar symptoms at rest or after meals, and there is no family history of muscle disease, though his paternal grandmother died of 'a liver problem.' Today he completes a graded forearm-exercise protocol: venous lactate sampled from the exercised arm rises barely above baseline across all workloads, while ammonia increases normally. He is visibly surprised at how much easier the final stages of the test feel compared with the first. Neurologic examination between episodes is normal, grip strength is preserved, and a CBC, creatine kinase drawn between episodes (mildly elevated), fasting glucose, and liver tests are all unremarkable.",
      question:
        "Which enzyme deficiency best explains this patient's findings, including the flat venous lactate curve?",
      options: [
        {
          label: "A",
          text: "Skeletal muscle glycogen phosphorylase (myophosphorylase)",
          correct: true,
          why: "Correct — McArdle disease (type V): muscle glycogen cannot be broken down to glucose-1-phosphate, so exercised muscle never generates lactate from glycogen-derived glucose (flat venous lactate) while the purine cycle still raises ammonia normally; cramps, myoglobinuria (red urine), and the second-wind phenomenon (↑ muscular blood flow delivering blood-borne fuels) complete the picture, and blood glucose is typically unaffected because liver glycogenolysis is intact.",
        },
        {
          label: "B",
          text: "Lysosomal acid α-1,4-glucosidase (acid maltase)",
          why: "That is Pompe disease (type II) — infantile cardiomyopathy, hypotonia, and macroglossia with early death; it does not present as a young adult's exercise cramps with a flat lactate curve.",
        },
        {
          label: "C",
          text: "Glucose-6-phosphatase",
          why: "That is von Gierke disease (type I) — severe fasting hypoglycemia with hepatomegaly, renomegaly, ↑ lactate, ↑ triglycerides, and ↑ uric acid; this patient fasts and exercises without hypoglycemia, and his lactate problem is too little, not too much.",
        },
        {
          label: "D",
          text: "Debranching enzyme (α-1,6-glucosidase and 4-α-D-glucanotransferase)",
          why: "That is Cori disease (type III) — a childhood hepatomegaly-plus-mild-hypoglycemia picture with limit dextrin accumulation and normal lactate from intact gluconeogenesis; it is not a pure exercise-cramp syndrome with myoglobinuria.",
        },
        {
          label: "E",
          text: "Branching enzyme",
          why: "That is Andersen disease (type IV) — infantile hepatosplenomegaly, cirrhosis, and failure to thrive with late hypoglycemia; nothing in this athlete's presentation suggests it.",
        },
      ],
      reasoning:
        "The forearm-exercise test is the discriminating experiment: in McArdle disease the exercised muscle cannot mobilize glycogen to glucose-6-phosphate, so glycolysis from glycogen is flat — venous lactate barely rises — while ammonia rises normally because ATP stress accelerates the purine cycle. The cola-colored urine is myoglobinuria from rhabdomyolysis of cramping muscle (with the clinical caveat from the source: arrhythmia from electrolyte abnormalities can accompany severe episodes). The ease he felt late in the test is the second-wind phenomenon — ↑ muscular blood flow delivering alternative fuels — a McArdle signature. Normal fasting glucose and liver tests exclude the liver-side storage diseases; the age and intact strength between episodes steer away from Pompe.",
    },
  },
  mnemonics: [
    {
      code: "“Vice president can't accept money.”",
      meaning:
        "The source's disease-order mnemonic for the glycogen storage diseases in type order I-V: Von Gierke, Pompe, Cori, Andersen, McArdle (VP CAM).",
      memorizes: "The five disease names in type order",
      whenToUse: "Any question requiring matching a type number to its disease name.",
      clinical:
        "The order matters: I is the liver-glucose block (worst hypoglycemia), II is the lysosomal one (worst prognosis), III and IV are the branch-structure diseases, V is the muscle one.",
    },
    {
      code: "“Andersen: Branching. Cori: Debranching. (ABCD)”",
      meaning:
        "The source's enzyme-pair mnemonic — Andersen disease is the Branching enzyme block; Cori disease is the Debranching enzyme block; ABCD links the alphabetical pair (Andersen-Branching, Cori-Debranching).",
      memorizes: "Which branch enzyme belongs to which disease",
      whenToUse: "Type III vs type IV questions.",
      clinical:
        "Andersen (IV) makes abnormal unbranched glycogen and cirrhosis; Cori (III) leaves limit dextrin and intact gluconeogenesis.",
    },
    {
      code: "“Pompe trashes the pump (1st and 4th letter; heart, liver, and muscle).”",
      meaning:
        "The source's mnemonic for Pompe disease (type II): lysosomal acid α-1,4-glucosidase (acid maltase) deficiency trashes the pump — heart, liver, and muscle.",
      memorizes: "Pompe's enzyme and its systemic lysosomal targets",
      whenToUse: "Infant cardiomyopathy with hypotonia and macroglossia.",
      clinical: "The 1st and 4th letters of 'Pompe' spell the pump that gets trashed.",
    },
    {
      code: "“McArdle = muscle.”",
      meaning:
        "The source's one-word anchor: McArdle disease (type V) is the muscle one — skeletal muscle glycogen phosphorylase (myophosphorylase).",
      memorizes: "McArdle's tissue and enzyme",
      whenToUse: "Exercise cramps with myoglobinuria and a flat lactate curve.",
      clinical:
        "Blood glucose is typically unaffected because the liver's enzymes are normal.",
    },
  ],
  rapidReview: {
    s30: [
      "Types I-V glycogen storage diseases are all autosomal recessive",
      "Von Gierke I = glucose-6-phosphatase; severe fasting hypoglycemia + ↑ lactate",
      "Pompe II = lysosomal acid maltase; cardiomyopathy + early death",
      "McArdle V = muscle phosphorylase; cramps + myoglobinuria, flat lactate",
    ],
    m3: [
      "Cori III = debranching enzymes; normal lactate, intact gluconeogenesis, limit dextrin",
      "Andersen IV = branching enzyme; cirrhosis, hypoglycemia late",
      "Branches are α-(1,6); linear linkages are α-(1,4)",
      "Limit dextrin = 2-4 residues left on a branch after phosphorylase shortens it",
    ],
    m10: [
      "Fasted: GPCR → cAMP → PKA → phosphorylase kinase ON, synthase OFF",
      "Fed: insulin RTK → phosphatase → synthase ON, phosphorylase OFF",
      "Muscle contraction: Ca²⁺-calmodulin activates phosphorylase kinase directly",
      "Debranching is 2 steps: transferase moves 3 of 4 glucoses, then α-1,6-glucosidase frees the last glucose",
      "PAS stain identifies glycogen; treat Von Gierke with frequent glucose/cornstarch, avoid fructose + galactose",
    ],
  },
  recall: [
    {
      q: "Which bonds join glucose residues in glycogen's linear linkages and at its branches?",
      a: "Branches have α-(1,6) bonds; linear linkages have α-(1,4) bonds.",
    },
    {
      q: "Name the eight numbered enzymes of the glycogen map.",
      a: "① Glucose-6-phosphatase, ② UDP-glucose pyrophosphorylase, ③ glycogen synthase, ④ branching enzyme, ⑤ glycogen phosphorylase, ⑥ debranching enzyme (4-α-D-glucanotransferase), ⑦ debranching enzyme (α-1,6-glucosidase), ⑧ α-1,4-glucosidase (acid maltase).",
    },
    {
      q: "What is a limit dextrin?",
      a: "2-4 residues remaining on a branch after glycogen phosphorylase has shortened it.",
    },
    {
      q: "Describe the debranching enzyme's two sequential activities.",
      a: "Glycogen phosphorylase liberates glucose-1-phosphate residues off branched glycogen until 4 glucose units remain on a branch; then 4-α-D-glucanotransferase (debranching enzyme) moves 3 of the 4 glucose units from the branch to the linear linkage; then α-1,6-glucosidase (debranching enzyme) cleaves off the last residue, liberating a free glucose.",
    },
    {
      q: "Which glycogen degradation pathway is lysosomal, and what is the enzyme?",
      a: "A small amount of glycogen is degraded in lysosomes by ⑧ α-1,4-glucosidase (acid maltase) — the lysosome-only arm; its deficiency is Pompe disease (type II).",
    },
    {
      q: "Walk the fasted-state glycogenolysis cascade from hormone to glucose.",
      a: "Glucagon (liver) / epinephrine (liver and muscle) → GPCR → adenylate cyclase: ATP → cAMP → protein kinase A → ⊕ glycogen phosphorylase kinase → ⊕ glycogen phosphorylase → glycogenolysis (glycogen → glucose); PKA simultaneously ⊟ glycogen synthase. Epinephrine in liver also acts via the α₁ receptor → endoplasmic reticulum → calcium.",
    },
    {
      q: "How does insulin switch the system to glycogenesis?",
      a: "Insulin (liver and muscle) binds the tyrosine kinase dimer receptor → activates protein phosphatase (and directly activates glycogen synthase) → dephosphorylates glycogen synthase ON and phosphorylase kinase OFF → glycogenesis.",
    },
    {
      q: "How do skeletal muscle and hepatocytes use glycogen differently?",
      a: "Skeletal muscle: glycogen undergoes glycogenolysis → glucose-1-phosphate → glucose-6-phosphate, which is rapidly metabolized during exercise (muscle lacks glucose-6-phosphatase, so it never exports free glucose — the basis of 'McArdle = muscle' with normal blood glucose). Hepatocytes: glycogen is stored and undergoes glycogenolysis to maintain blood sugar at appropriate levels, releasing free glucose through glucose-6-phosphatase.",
    },
    {
      q: "What laboratory pattern distinguishes von Gierke from Cori disease?",
      a: "Von Gierke (I): severe fasting hypoglycemia with ↑ blood lactate, ↑ triglycerides, ↑ uric acid (gout), hepatomegaly and renomegaly — impaired gluconeogenesis and glycogenolysis. Cori (III): similar but milder with normal blood lactate levels — gluconeogenesis is intact; limit dextrin-like structures accumulate in cytosol and can lead to hepatomegaly, cirrhosis, and hepatic adenomas.",
    },
    {
      q: "What is the second-wind phenomenon and in which disease is it noted?",
      a: "In McArdle disease (type V): during exercise, after initial cramping, symptoms ease due to ↑ muscular blood flow delivering blood-borne fuels; the disease is characterized by a flat venous lactate curve with a normal rise in ammonia levels during exercise, and blood glucose levels are typically unaffected.",
    },
  ],
  related: [
    {
      title: "Glycolysis Regulation",
      topicId: "glycolysisRegulation",
      note: "The same insulin/glucagon logic acting on glycolysis's own rate-limiting enzymes — the hormonal switch's other half, with hexokinase vs glucokinase tissue logic.",
    },
    {
      title: "Gluconeogenesis",
      topicId: "gluconeogenesis",
      note: "Von Gierke impairs gluconeogenesis and glycogenolysis together — the four bypass enzymes explain why the lactate stays high while the Cori patient's gluconeogenesis stays intact.",
    },
    {
      title: "Metabolism Overview",
      topicId: "metabolismOverview",
      note: "Where glycogen sits in the whole-metabolism map — the fed/fasted traffic between liver, adipose, and muscle.",
    },
    {
      title: "Fructose & Galactose Disorders",
      topicId: "fructoseGalactoseDisorders",
      note: "Von Gierke's treatment (avoidance of fructose and galactose) meets the diseases of those sugars' own pathways — the dietary-restriction logic shared across the inborn errors.",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiology",
      connection: "Pompe's hypertrophic cardiomyopathy with macroglossia, and the cardiomyopathy that Cori and Andersen can also develop — the storage diseases that present to the heart.",
    },
    {
      subject: "Nephrology",
      connection: "McArdle's myoglobinuria (red urine) with strenuous exercise — pigment from cramping muscle threatening the renal tubule.",
    },
    {
      subject: "Endocrinology",
      connection: "The insulin/glucagon/epinephrine receptor classes — GPCR vs receptor tyrosine kinase — and the second messengers cAMP and calcium that also run the endocrine chapters.",
    },
  ],
};
