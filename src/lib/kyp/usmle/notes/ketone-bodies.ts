import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 15).
// Source: First Aid 2026, Part 1 pdf 110 / book 88
// (ketone bodies; fasted vs fed state)

export const ketoneBodies: KypUsMLENote = {
  id: "ketone-bodies",
  title: "Ketone Bodies & Fed/Fasted States",
  subtitle:
    "The liver's overflow product and the adipocyte's two jobs — ketogenesis sending acetoacetate and β-hydroxybutyrate into the blood for muscle and brain (while acetone escapes on the breath and the liver itself, lacking β-ketoacyl-CoA transferase, cannot spend what it makes), plus the fed/fasted adipocyte mirror: insulin's LPL-and-esterification storage versus glucagon/epinephrine's cAMP–PKA–HSL lipolysis releasing FFA and glycerol.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — ketone bodies, ketogenesis, ketolysis, fed and fasted states",
  difficulty: 3,
  readTime: 12,
  sourceRef:
    "First Aid 2026, Part 1 pp. 88 (ketone bodies; fasted vs fed state)",
  tags: [
    "ketone bodies",
    "ketogenesis",
    "ketolysis",
    "acetoacetate",
    "beta-hydroxybutyrate",
    "acetone",
    "fruity odor",
    "HMG-CoA lyase",
    "HMG-CoA reductase",
    "beta-ketoacyl-CoA transferase",
    "ketone body shuttle",
    "diabetic ketoacidosis",
    "prolonged starvation",
    "oxaloacetate",
    "chronic alcohol overuse",
    "fasting hypoglycemia",
    "fed state",
    "fasted state",
    "adipocyte",
    "hormone-sensitive lipase",
    "HSL",
    "lipoprotein lipase",
    "LPL",
    "Apo CII",
    "lipolysis",
    "esterification",
    "glycerol 3-phosphate",
    "hypoketotic hypoglycemia",
    "hyperammonemia",
  ],
  core: {
    what: "In the liver, fatty acids and amino acids are metabolized to acetoacetate and β-hydroxybutyrate (to be used in muscle and brain): the ketone pathway runs 2 acetyl-CoA → acetoacetyl-CoA → HMG-CoA → (HMG-CoA lyase, ketogenesis) → acetoacetate, which interconverts with β-hydroxybutyrate and spontaneously decarboxylates to acetone, expired by the lungs. The ketone bodies are acetone (ketone), acetoacetate (ketoacid), and β-hydroxybutyrate (ketoacid); breath smells like acetone (fruity odor), and the urine test for ketones can detect acetoacetate, but not β-hydroxybutyrate. RBCs cannot utilize ketone bodies and strictly use glucose; liver cells lack β-ketoacyl-CoA transferase and so cannot use ketone bodies as fuel — extrahepatic tissues regenerate acetyl-CoA from acetoacetate for the TCA cycle. HMG-CoA lyase serves ketone body production; HMG-CoA reductase serves cholesterol synthesis. In prolonged starvation and diabetic ketoacidosis, oxaloacetate is depleted for gluconeogenesis; in chronic alcohol overuse, ↑ NADH → shunting of oxaloacetate to malate → TCA cycle downregulation → ↓ gluconeogenesis → fasting hypoglycemia. The adipocyte mirrors the states: fed — insulin imports glucose (→ DHAP → glycerol 3-P with ATP), LPL with Apo CII harvests FFA from blood triglycerides, and the cell esterifies FFA + glycerol 3-P into stored TG; fasted — glucagon/epinephrine → cAMP → protein kinase A → phosphorylated hormone-sensitive lipase (HSL-P) performs lipolysis of stored TG → FFA and glycerol released to the blood.",
    why: "This page closes the fasting-fuel story and supplies three of the exam's favorite discriminating facts. First, the organ asymmetry: the liver makes ketones but cannot use them (no β-ketoacyl-CoA transferase), which is why ketones are an export fuel for muscle and brain. Second, the assay asymmetry: the urine nitroprusside test detects acetoacetate but not β-hydroxybutyrate, so DKA can look better or worse than it is depending on which ketone dominates. Third, the ketone/glucose table splits the inborn errors: hyperammonemia with normal ketones and glucose (OTC), hypoketotic hypoglycemia (MCAD), and ketotic hypoglycemia (methylmalonic and propionic acidemias) — the same table logic as the aminoacidopathy pivot. The fed/fasted adipocyte figure is the insulin/glucagon switch applied to the lipid bank, and it explains why alcoholics fast poorly: high NADH diverts oxaloacetate to malate, downregulating the TCA cycle and gluconeogenesis.",
    keyIdea: "Read the ketone pathway as a shuttle with a one-way valve: the hepatocyte loads acetoacetate and β-hydroxybutyrate into the blood, extrahepatic tissues (skeletal muscle, and brain in prolonged starvation) unload them back to acetyl-CoA through β-ketoacyl-CoA transferase, and the liver — lacking the enzyme — can never unload its own product. Acetone is the leak (breath odor, no energy recovery). Then read the adipocyte as the supply house: fed insulin deposits (glucose → glycerol-3-P backbone + LPL/ApoCII-harvested FFA → esterified TG), fasted glucagon/epinephrine withdraws (cAMP → PKA → HSL-P → lipolysis → FFA + glycerol out). The FFA feed the liver's ketogenesis; the ketone/glucose table then indexes the metabolic diseases by their two lab values.",
  },
  mechanisms: [
    {
      id: "ketone-shuttle",
      title: "Ketogenesis to ketolysis — the export fuel the maker cannot burn",
      context: "Prolonged fasting, DKA, and the liver-muscle ketone shuttle",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Fasting or DKA: fatty acids (and amino acids) flood the liver; prolonged starvation and diabetic ketoacidosis deplete oxaloacetate for gluconeogenesis",
            sublabel: "Input — acetyl-CoA accumulates with no TCA outlet.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Hepatocyte: 2 acetyl-CoA → acetoacetyl-CoA → HMG-CoA → (HMG-CoA lyase, ketogenesis) → acetoacetate ↔ β-hydroxybutyrate; acetone decarboxylates off and is expired by the lungs",
            sublabel: "Process — the ketone bodies are built and loaded into blood.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Extrahepatic tissues (eg, skeletal muscle; brain in prolonged fasting): β-ketoacyl-CoA transferase regenerates acetyl-CoA from acetoacetate → TCA cycle",
            sublabel: "Process — ketolysis where the enzyme exists.",
            variant: "process",
          },
          {
            id: "o1",
            label: "The liver lacks β-ketoacyl-CoA transferase → cannot use ketone bodies as fuel; RBCs cannot use them either — they strictly use glucose",
            sublabel: "Output — the export-only economy: maker cannot spender; RBC cannot switch.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Chronic alcohol overuse: ↑ NADH → shunting of oxaloacetate to malate → TCA cycle downregulation → ↓ gluconeogenesis → fasting hypoglycemia",
            sublabel: "Inhibitor — the alcohol-imposed fast failure.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "acetyl-CoA overflow" },
          { from: "s1", to: "s2", label: "blood shuttle" },
          { from: "s2", to: "o1", label: "ketolysis" },
          { from: "x1", to: "trigger", type: "inhibit", label: "↑NADH → OAA→malate" },
        ],
        caption:
          "Ketogenesis is the liver's answer to a TCA cycle it cannot feed: when fasting or DKA pulls oxaloacetate off to gluconeogenesis (and alcohol's NADH surge diverts it to malate), incoming acetyl-CoA from β-oxidation is repackaged through HMG-CoA lyase into acetoacetate and β-hydroxybutyrate and exported. The enzyme asymmetry makes it an export fuel — extrahepatic tissues carry β-ketoacyl-CoA transferase and recover the acetyl-CoA, while the liver does not. Acetone, the third ketone body, is the un-recoverable leak: fruity breath, no energy. The two HMG-CoA enzymes anchor the map's other exam fact: lyase makes ketones, reductase makes cholesterol.",
      },
    },
    {
      id: "adipocyte-two-jobs",
      title: "The adipocyte's two jobs — deposit on insulin, withdraw on fasting hormones",
      context: "Fed vs fasted lipid handling",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Fed: insulin high (glucose available); Fasted: glucagon/epinephrine high (fuel needed)",
            sublabel: "Input — the hormonal state sets the job.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Fed: insulin imports glucose → DHAP → glycerol 3-P (ATP); LPL with Apo CII harvests FFA from blood TG; FFA + glycerol 3-P → esterification → stored TG",
            sublabel: "Process — deposit: build the glycerol backbone and pull FFA from lipoproteins.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Fasted: glucagon/epinephrine → cAMP → protein kinase A → phosphorylated HSL (HSL-P) → lipolysis of stored TG → FFA + glycerol released to blood",
            sublabel: "Process — withdraw: the same PKA cascade that runs glycogenolysis runs lipolysis.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Released FFA feed the liver's β-oxidation and ketogenesis; glycerol feeds gluconeogenesis",
            sublabel: "Output — the fasted blood carries both halves of the triglyceride to the liver.",
            variant: "output",
          },
          {
            id: "x1",
            label: "The two enzymes to keep apart: LPL (fed, Apo CII-activated, on capillary endothelium) vs HSL (fasted, PKA-phosphorylated, inside the adipocyte)",
            sublabel: "Separator — the fed enzyme lives outside the cell; the fasted enzyme inside.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "insulin" },
          { from: "trigger", to: "s2", label: "glucagon/epinephrine" },
          { from: "s1", to: "o1", label: "stored TG" },
          { from: "s2", to: "o1", label: "FFA + glycerol out" },
          { from: "x1", to: "s2", label: "LPL vs HSL" },
        ],
        caption:
          "The adipocyte figure is the insulin/glucagon switch drawn on the lipid bank. Fed: insulin imports glucose, whose glycolysis intermediate DHAP becomes glycerol 3-P (the TG backbone), while LPL — activated by Apo CII on passing lipoproteins — cleaves FFA off blood TG; the adipocyte esterifies the two into stored fat. Fasted: the same cAMP → protein kinase A cascade that phosphorylates phosphorylase kinase in glycogen metabolism now phosphorylates hormone-sensitive lipase; HSL-P disassembles stored TG and exports FFA (to hepatic β-oxidation and ketogenesis) and glycerol (to gluconeogenesis). The figure thus connects the whole fasted state: adipocyte withdrawal funds hepatic ketone export.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "ketone-body-shuttle",
      title: "Ketone bodies — made in the liver, spent everywhere else",
      caption:
        "The source figure redrawn: hepatocyte (fatty acids/amino acids → 2 acetyl-CoA → acetoacetyl-CoA → HMG-CoA → ketogenesis via HMG-CoA lyase → acetoacetate ↔ β-hydroxybutyrate, with the acetone branch expired by the lungs), the blood transport column (with the RBC fact), and the extrahepatic panel (β-hydroxybutyrate → acetoacetate → acetyl-CoA → TCA cycle through β-ketoacyl-CoA transferase, the enzyme the liver lacks), plus the three-ketone-bodies strip, the urine-test fact, the lyase-versus-reductase pair, and the oxaloacetate/alcohol strip.",
      notice:
        "Follow the one-way valve: the liver loads ketones into blood but cannot unload them (no β-ketoacyl-CoA transferase), muscle and brain unload them back to acetyl-CoA. The two asymmetric facts ride along: urine tests see acetoacetate but not β-hydroxybutyrate, and RBCs strictly use glucose. The HMG-CoA enzyme pair (lyase = ketones, reductase = cholesterol) is the classic two-answer question.",
    },
    {
      kind: "visual",
      visualId: "adipocyte-fed-fasted",
      title: "The adipocyte — fed stores fat, fasted releases it",
      caption:
        "The source figure redrawn: the fed panel (insulin → glucose → DHAP → glycerol 3-P with ATP; LPL + Apo CII harvesting FFA from blood TG; esterification into stored TG) beside the fasted panel (glucagon/epinephrine → cAMP → protein kinase A → HSL-P → lipolysis of TG → FFA and glycerol released to blood), with the fed/fasted job summary strip.",
      notice:
        "The two lipases are the exam's separation point: LPL is the fed enzyme, sitting on the capillary side and activated by Apo CII on lipoproteins; HSL is the fasted enzyme inside the adipocyte, activated by PKA phosphorylation. Both panels end at the same triglyceride droplet — the fed side builds it, the fasted side dismantles it.",
    },
    {
      kind: "table",
      title: "Ketone and glucose levels in the metabolic diseases — verbatim",
      intro: "The source's three-column table: the ketone and glucose levels that distinguish hyperammonemia, hypoketosis, and ketosis states.",
      columns: ["State", "Ketone levels", "Glucose levels", "Deficiency"],
      rows: [
        ["Hyperammonemia", "Normal", "Normal", "OTC (urea cycle)"],
        ["Hypoketosis", "↓", "↓", "MCAD deficiency"],
        ["Ketosis", "↑", "↓", "Methylmalonic acidemia, propionic acidemia"],
      ],
      caption:
        "Two lab values index three inborn-error families: normal ketones and glucose with hyperammonemia points at the urea cycle (OTC); hypoketotic hypoglycemia points at fatty acid oxidation (MCAD); ketotic hypoglycemia points at the organic acidemias, whose accumulating acids inhibit both gluconeogenesis and the urea cycle.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The acetone facts and the alcohol connection",
      body:
        "Ketone bodies: acetone (ketone), acetoacetate (ketoacid), β-hydroxybutyrate (ketoacid). Breath smells like acetone (fruity odor). Urine test for ketones can detect acetoacetate, but not β-hydroxybutyrate. RBCs cannot utilize ketone bodies; they strictly use glucose. Liver cells lack β-ketoacyl-CoA transferase → cannot use ketone bodies as fuel. HMG-CoA lyase for ketone body production; HMG-CoA reductase for cholesterol synthesis. In chronic alcohol overuse, ↑ NADH → shunting of oxaloacetate to malate → TCA cycle downregulation → ↓ gluconeogenesis → fasting hypoglycemia.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A poorly controlled type 1 diabetic presents with deep breathing and fruity-smelling breath; glucose is 450 mg/dL and urine ketones are positive.",
        discriminator: "Fruity breath (acetone) + hyperglycemia + ketones",
        concept: "Diabetic ketoacidosis — ketone body overflow",
        answer:
          "In the liver, fatty acids and amino acids are metabolized to acetoacetate and β-hydroxybutyrate; oxaloacetate is depleted for gluconeogenesis, so acetyl-CoA is diverted to ketogenesis (HMG-CoA lyase). Acetone on the breath gives the fruity odor; the urine test detects acetoacetate, but not β-hydroxybutyrate.",
      },
      {
        stem: "A biochemistry question asks why the liver exports ketone bodies rather than oxidizing them itself.",
        discriminator: "Liver lacks β-ketoacyl-CoA transferase",
        concept: "The ketone shuttle's one-way valve",
        answer:
          "Liver cells lack β-ketoacyl-CoA transferase → cannot use ketone bodies as fuel; extrahepatic tissues (eg, skeletal muscle, brain in prolonged starvation) carry the enzyme and regenerate acetyl-CoA for the TCA cycle. RBCs cannot utilize ketones either — they strictly use glucose.",
      },
      {
        stem: "A patient with chronic alcohol use disorder presents after several days of poor intake with fasting hypoglycemia; the TCA cycle is downregulated.",
        discriminator: "↑ NADH → oxaloacetate → malate",
        concept: "Alcohol-impaired gluconeogenesis",
        answer:
          "Chronic alcohol overuse: ↑ NADH → shunting of oxaloacetate to malate → TCA cycle downregulation → ↓ gluconeogenesis → fasting hypoglycemia — the alcohol-imposed version of the oxaloacetate depletion that starvation and DKA produce.",
      },
      {
        stem: "An infant with recurrent fasting crises has low glucose with low ketones; a sibling disease presents with low glucose and high ketones plus hyperammonemia.",
        discriminator: "The ketone/glucose table",
        concept: "Hypoketotic vs ketotic hypoglycemia",
        answer:
          "Hypoketosis with hypoglycemia = MCAD deficiency (no acetyl-CoA from fat to make ketones); ketosis with hypoglycemia = methylmalonic or propionic acidemia (organic acids inhibit gluconeogenesis while starvation ketosis proceeds); hyperammonemia with normal ketones and glucose = OTC (urea cycle).",
      },
    ],
    traps: [
      {
        a: "The urine ketone test detects all three ketone bodies",
        b: "It detects acetoacetate, but not β-hydroxybutyrate",
        whyConfused: "All three are called ketone bodies.",
        keyDifference:
          "Acetone is expired by the lungs (fruity breath); β-hydroxybutyrate is invisible to the urine test — a DKA patient can have severe ketosis with a falsely modest urine ketone result.",
        clue: "Any question pairing urine ketones with DKA severity or with β-hydroxybutyrate.",
      },
      {
        a: "The liver burns the ketone bodies it makes",
        b: "The liver cannot use ketone bodies as fuel",
        whyConfused: "Most organs can oxidize ketones.",
        keyDifference:
          "Liver cells lack β-ketoacyl-CoA transferase (the ketolysis enzyme); muscle and brain carry it — making ketones an export fuel and explaining the hepatocyte/extrahepatic split in the shuttle figure.",
        clue: "Any 'why doesn't the liver use ketones' question.",
      },
      {
        a: "RBCs switch to ketones in starvation",
        b: "RBCs strictly use glucose",
        whyConfused: "The brain adapts to ketones in prolonged starvation.",
        keyDifference:
          "RBCs have no mitochondria and cannot utilize ketone bodies at all — they strictly use glucose, which is why gluconeogenesis is mandatory even in prolonged starvation.",
        clue: "The RBC-fuel question.",
      },
      {
        a: "HMG-CoA reductase makes ketone bodies",
        b: "HMG-CoA lyase makes ketones; reductase makes cholesterol",
        whyConfused: "Both enzymes start from HMG-CoA.",
        keyDifference:
          "HMG-CoA lyase for ketone body production; HMG-CoA reductase for cholesterol synthesis (and the statin target) — the figure's two-answer anchor.",
        clue: "Any HMG-CoA enzyme question.",
      },
    ],
    pivots: [
      {
        lookAlike: "The low-glucose metabolic patient (MCAD vs organic acidemias vs OTC)",
        differentiator: "Ketones and ammonia together",
        correctPath:
          "↓ glucose + ↓ ketones → MCAD (hypoketotic hypoglycemia); ↓ glucose + ↑ ketones + hyperammonemia → methylmalonic/propionic acidemia (ketotic); normal glucose + normal ketones + hyperammonemia → OTC deficiency.",
      },
      {
        lookAlike: "The fasting-hypoglycemia adult (alcohol vs MCAD vs Von Gierke)",
        differentiator: "The NADH story and the lactate",
        correctPath:
          "Chronic alcohol overuse: ↑ NADH → oxaloacetate → malate → ↓ gluconeogenesis with fasting hypoglycemia (and high lactate from the same redox shift); MCAD: hypoketotic from infancy; Von Gierke: hepatomegaly with lactic acidosis, hyperuricemia.",
      },
    ],
    miniCase: {
      vignette:
        "A 23-year-old man with type 1 diabetes is brought in obtunded. He ran out of insulin five days ago during an episode of gastroenteritis. He is breathing deeply and rapidly, his breath has a fruity odor, and his mucous membranes are dry. Glucose is 512 mg/dL, potassium 5.2 mEq/L, and a venous blood gas shows pH 7.08 with bicarbonate of 8 mEq/L. The urine dipstick shows large ketones. A serum β-hydroxybutyrate level, sent at the same time, returns markedly elevated — several-fold higher than what the urine result alone would have suggested.",
      question:
        "Why can the urine ketone test underestimate the total ketone burden in this patient?",
      options: [
        {
          label: "A",
          text: "The urine test detects acetoacetate, but not β-hydroxybutyrate",
          correct: true,
          why: "Correct — of the three ketone bodies (acetone, a ketone expired by the lungs; acetoacetate, a ketoacid; β-hydroxybutyrate, a ketoacid), the urine test detects only acetoacetate; β-hydroxybutyrate is chemically invisible to it, so when β-hydroxybutyrate dominates — as it does in prolonged DKA — the dipstick underestimates the true ketone load.",
        },
        {
          label: "B",
          text: "The urine test detects β-hydroxybutyrate, but not acetoacetate",
          why: "The reverse of the truth — the nitroprusside-based urine test reacts with acetoacetate (and weakly with acetone), not β-hydroxybutyrate.",
        },
        {
          label: "C",
          text: "Ketones are not filtered by the glomerulus",
          why: "Ketone bodies are freely filtered and appear in urine — that is the basis of the test; filtration is not the limiting factor.",
        },
        {
          label: "D",
          text: "Acetone is the dominant urine ketone in DKA",
          why: "Acetone is expired by the lungs (it is the fruity breath); it contributes little to urine ketone measurement.",
        },
        {
          label: "E",
          text: "The liver cannot produce β-hydroxybutyrate",
          why: "The liver produces both acetoacetate and β-hydroxybutyrate (they interconvert); what the liver cannot do is USE them — it lacks β-ketoacyl-CoA transferase.",
        },
      ],
      reasoning:
        "The three ketone bodies partition by route: acetone leaves on the breath (fruity odor, no energy recovered), acetoacetate and β-hydroxybutyrate travel in blood to extrahepatic tissues. The urine nitroprusside test sees only acetoacetate. In prolonged ketoacidosis the redox state of the liver shifts β-hydroxybutyrate upward relative to acetoacetate, so the dipstick can lag far behind the true ketone burden — exactly the discordance this patient shows. His management is fluid, insulin, and potassium; his ketones came from oxaloacetate-depleted, gluconeogenesis-diverted hepatocytes repackaging β-oxidation acetyl-CoA through HMG-CoA lyase.",
    },
  },
  mnemonics: [
    {
      code: "“Lyase = ketones, Reductase = cholesterol.”",
      meaning:
        "KYP's anchor for the two HMG-CoA enzymes: HMG-CoA lyase for ketone body production; HMG-CoA reductase for cholesterol synthesis (the statin target).",
      memorizes: "The two HMG-CoA enzyme destinations",
      whenToUse: "Any HMG-CoA enzyme-pair question.",
      clinical: "Both start from HMG-CoA; they diverge to the fasting fuel and the membrane sterol.",
    },
    {
      code: "“Maker cannot spender.”",
      meaning:
        "KYP's shorthand for the shuttle's one-way valve: the liver makes ketone bodies but, lacking β-ketoacyl-CoA transferase, cannot use them as fuel.",
      memorizes: "The liver/extrahepatic ketone asymmetry",
      whenToUse: "Any 'why doesn't the liver burn ketones' question.",
      clinical: "Ketones are an export fuel for skeletal muscle (and brain in prolonged starvation); RBCs strictly use glucose.",
    },
  ],
  rapidReview: {
    s30: [
      "Ketone bodies: acetone (ketone), acetoacetate + β-hydroxybutyrate (ketoacids)",
      "Liver makes ketones; lacks β-ketoacyl-CoA transferase so cannot use them",
      "Urine test detects acetoacetate, NOT β-hydroxybutyrate; acetone = fruity breath",
      "RBCs strictly use glucose",
    ],
    m3: [
      "HMG-CoA lyase → ketones; HMG-CoA reductase → cholesterol",
      "Ketogenesis: 2 acetyl-CoA → acetoacetyl-CoA → HMG-CoA → acetoacetate ↔ βOHB",
      "Starvation + DKA deplete oxaloacetate for gluconeogenesis",
      "Alcohol: ↑NADH → OAA→malate → ↓GNG → fasting hypoglycemia",
    ],
    m10: [
      "Fed adipocyte: insulin → glucose → glycerol-3-P; LPL + Apo CII → FFA → esterify → TG",
      "Fasted adipocyte: glucagon/epi → cAMP → PKA → HSL-P → lipolysis → FFA + glycerol out",
      "↓ glucose + ↓ ketones = MCAD; ↓ glucose + ↑ ketones = organic acidemias; normal both + NH3↑ = OTC",
      "LPL = fed, capillary-side, Apo CII-activated; HSL = fasted, intracellular, PKA-activated",
    ],
  },
  recall: [
    {
      q: "Where are ketone bodies made and from what substrates?",
      a: "In the liver, fatty acids and amino acids are metabolized to acetoacetate and β-hydroxybutyrate (to be used in muscle and brain).",
    },
    {
      q: "Trace ketogenesis from acetyl-CoA to the ketone bodies, naming the key enzyme.",
      a: "2 acetyl-CoA → acetoacetyl-CoA → HMG-CoA → (HMG-CoA lyase, ketogenesis) → acetoacetate ↔ β-hydroxybutyrate; acetoacetate also decarboxylates to acetone, expired by the lungs.",
    },
    {
      q: "Name the three ketone bodies and their chemical classes.",
      a: "Acetone (ketone), acetoacetate (ketoacid), β-hydroxybutyrate (ketoacid).",
    },
    {
      q: "Which ketone does the urine test detect, and which does it miss?",
      a: "The urine test for ketones can detect acetoacetate, but not β-hydroxybutyrate; acetone is expired by the lungs and gives the fruity breath odor.",
    },
    {
      q: "Why can the liver not use ketone bodies as fuel, and which cells strictly use glucose?",
      a: "Liver cells lack β-ketoacyl-CoA transferase → cannot use ketone bodies as fuel; RBCs cannot utilize ketone bodies and strictly use glucose. Extrahepatic tissues (eg, skeletal muscle) use the transferase to regenerate acetyl-CoA for the TCA cycle.",
    },
    {
      q: "Contrast the two HMG-CoA enzymes.",
      a: "HMG-CoA lyase for ketone body production; HMG-CoA reductase for cholesterol synthesis.",
    },
    {
      q: "Why do prolonged starvation and DKA pour out ketones?",
      a: "Oxaloacetate is depleted for gluconeogenesis, so the TCA cycle cannot take the β-oxidation acetyl-CoA, which is diverted to ketogenesis instead.",
    },
    {
      q: "Explain the alcoholic patient's fasting hypoglycemia biochemically.",
      a: "Chronic alcohol overuse: ↑ NADH → shunting of oxaloacetate to malate → TCA cycle downregulation → ↓ gluconeogenesis → fasting hypoglycemia.",
    },
    {
      q: "Describe the fed adipocyte's three storage operations.",
      a: "Insulin imports glucose → glycolysis to DHAP → glycerol 3-P (using ATP) — the TG backbone; LPL with Apo CII cleaves FFA from blood lipoprotein TG; and FFA + glycerol 3-P are esterified into stored TG.",
    },
    {
      q: "Describe the fasted adipocyte's lipolytic cascade.",
      a: "Glucagon/epinephrine → cAMP → protein kinase A → phosphorylated hormone-sensitive lipase (HSL-P) → lipolysis of stored TG → FFA and glycerol released to the blood (FFA to hepatic β-oxidation/ketogenesis, glycerol to gluconeogenesis).",
    },
    {
      q: "Give the ketone/glucose table for OTC, MCAD, and the organic acidemias.",
      a: "Hyperammonemia: ketones normal, glucose normal, OTC (urea cycle). Hypoketosis: ketones ↓, glucose ↓, MCAD deficiency. Ketosis: ketones ↑, glucose ↓, methylmalonic acidemia, propionic acidemia.",
    },
  ],
  related: [
    {
      title: "Fatty Acid Metabolism",
      topicId: "fattyAcidMetabolism",
      note: "β-oxidation supplies the acetyl-CoA that ketogenesis repackages — and MCAD, the hypoketotic block, is the table's middle row.",
    },
    {
      title: "TCA Cycle & Pyruvate Dehydrogenase",
      topicId: "tcaCyclePdh",
      note: "Ketolysis ends where the TCA cycle begins — and oxaloacetate depletion is why acetyl-CoA overflows to ketones instead.",
    },
    {
      title: "Glycogen Metabolism & Storage Diseases",
      topicId: "glycogen-metabolism",
      note: "The same cAMP → PKA phosphorylation logic runs HSL lipolysis and phosphorylase activation — one cascade, two fuel stores.",
    },
    {
      title: "Amino Acidopathies",
      topicId: "aminoacidopathies",
      note: "The organic acidemias (methylmalonic, propionic) are the ketotic-hypoglycemia rows of the ketone/glucose table — the propionate highway's systemic inhibitions.",
    },
  ],
  crossLinks: [
    {
      subject: "Endocrinology",
      connection: "Diabetic ketoacidosis — insulin absence, oxaloacetate diversion, and the acetone breath; plus the fed/fasted insulin-glucagon switch on the adipocyte.",
    },
    {
      subject: "Neurology",
      connection: "The brain's prolonged-starvation adaptation to ketone fuels while RBCs remain strictly glycolytic — the two-tissue fuel split.",
    },
    {
      subject: "Psychiatry",
      connection: "Chronic alcohol overuse's NADH surge — the same redox shift that produces fasting hypoglycemia and fatty liver.",
    },
  ],
};
