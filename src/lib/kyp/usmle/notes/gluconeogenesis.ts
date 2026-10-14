import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 5 of the metabolism block).
// Source: First Aid 2026, Part 1 pdf 98 / book 76 (gluconeogenesis,
// irreversible enzymes: pyruvate carboxylase, PEPCK, FBPase-1, G6Pase;
// organ distribution; odd- vs even-chain fatty acids)

export const gluconeogenesis: KypUsMLENote = {
  id: "gluconeogenesis",
  title: "Gluconeogenesis",
  subtitle:
    "Four irreversible bypass enzymes make fresh glucose in fasting: pyruvate carboxylase (mitochondria, biotin + ATP, activated by acetyl-CoA), PEPCK (cytosol, GTP), fructose-1,6-bisphosphatase 1 (cytosol, citrate ⊕ / AMP ⊝ / F-2,6-BP ⊝), and glucose-6-phosphatase (ER) — primarily liver, also kidney and intestinal epithelium, never muscle.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — Gluconeogenesis, irreversible enzymes",
  difficulty: 2,
  readTime: 9,
  sourceRef:
    "First Aid 2026, Part 1 pp. 76 (gluconeogenesis irreversible enzymes; pyruvate carboxylase; PEPCK; fructose-1,6-bisphosphatase 1; glucose-6-phosphatase; odd- and even-chain fatty acids)",
  tags: [
    "gluconeogenesis",
    "pyruvate carboxylase",
    "biotin",
    "acetyl-CoA",
    "oxaloacetate",
    "PEPCK",
    "phosphoenolpyruvate carboxykinase",
    "GTP",
    "fructose-1,6-bisphosphatase 1",
    "citrate",
    "AMP",
    "fructose 2,6-bisphosphate",
    "glucose-6-phosphatase",
    "ER",
    "hypoglycemia",
    "euglycemia",
    "fasting",
    "glucagon",
    "liver",
    "kidney",
    "intestinal epithelium",
    "muscle",
    "odd-chain fatty acids",
    "propionyl-CoA",
    "succinyl-CoA",
    "even-chain fatty acids",
  ],
  core: {
    what: "Gluconeogenesis is the pathway that produces fresh glucose, and all of its enzymes may be subject to activation by glucagon in the fasting state. Its four irreversible enzymes: pyruvate carboxylase — in mitochondria, pyruvate → oxaloacetate, requires biotin and ATP, activated by acetyl-CoA; phosphoenolpyruvate carboxykinase (PEPCK) — in cytosol, oxaloacetate → phosphoenolpyruvate (PEP), requires GTP; fructose-1,6-bisphosphatase 1 — in cytosol, fructose-1,6-bisphosphate → fructose-6-phosphate, regulated by citrate ⊕, AMP ⊝, and fructose 2,6-bisphosphate ⊝; glucose-6-phosphatase — in the ER, glucose-6-phosphate → glucose. The pathway occurs primarily in liver, where it serves to maintain euglycemia during fasting; the enzymes are also found in kidney and intestinal epithelium. Deficiency of the key gluconeogenic enzymes causes hypoglycemia, and muscle cannot participate in gluconeogenesis because it lacks glucose-6-phosphatase. Odd-chain fatty acids yield 1 propionyl-CoA during metabolism, which can enter the TCA cycle (as succinyl-CoA), undergo gluconeogenesis, and serve as a glucose source; even-chain fatty acids cannot produce new glucose, since they yield only acetyl-CoA equivalents.",
    why: "Fasting survival is this pathway's clinical stage: every missed meal is a test of the four bypasses, and the classic hypoglycemia vignettes (fasting child, exhausted liver) point straight at them. The four-enzyme list with compartments, cofactors, and regulators is a guaranteed one-liner, and the odd-chain fatty acid exception is one of the book's own favorite 'it's odd' facts.",
    keyIdea: "Read gluconeogenesis as four locked doors that glycolysis left one-way, each with its own key and address: the mitochondrion's pyruvate carboxylase (keyed by biotin + ATP, unlocked by acetyl-CoA — the signal that fat oxidation is fueling the effort), the cytosol's PEPCK (pays in GTP), the cytosol's fructose-1,6-bisphosphatase 1 (the energy-sensing mirror: citrate says 'build', AMP and F-2,6-BP say 'burn'), and the ER's glucose-6-phosphatase (the only exit that releases free glucose — which is why liver, kidney, and intestinal epithelium can feed the blood and muscle, lacking it, cannot). In fasting, glucagon activates the whole corridor to produce fresh glucose; and only odd-chain fatty acids can chip in a carbon skeleton, because propionyl-CoA → succinyl-CoA is the one fat-derived TCA handle that becomes glucose — 'it's odd for fatty acids to make glucose.'",
  },
  mechanisms: [
    {
      id: "fasting-gluconeogenesis-corridor",
      title: "The fasting corridor — four locked doors from pyruvate to fresh glucose",
      context: "Fasting state, glucagon high",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Fasting → glucagon activates the gluconeogenic enzymes",
            sublabel: "Input — all enzymes may be subject to activation by glucagon in fasting state.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Pyruvate carboxylase (mitochondria): pyruvate → oxaloacetate",
            sublabel: "Process — requires biotin and ATP; activated by acetyl-CoA.",
            variant: "process",
          },
          {
            id: "s2",
            label: "PEPCK (cytosol): oxaloacetate → phosphoenolpyruvate (PEP)",
            sublabel: "Process — requires GTP.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Fructose-1,6-bisphosphatase 1 (cytosol): fructose-1,6-BP → fructose-6-phosphate",
            sublabel: "Process — citrate ⊕, AMP ⊝, fructose 2,6-bisphosphate ⊝.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Glucose-6-phosphatase (ER): glucose-6-phosphate → glucose",
            sublabel: "Output — fresh glucose out; primarily liver, maintaining euglycemia during fasting.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Muscle cannot participate — it lacks glucose-6-phosphatase",
            sublabel: "Limit — no final exit door, no fresh glucose from muscle.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "glucagon, fasting" },
          { from: "s1", to: "s2", label: "OAA out" },
          { from: "s2", to: "s3", label: "PEP onward" },
          { from: "s3", to: "o1", label: "F-6-P → G-6-P" },
          { from: "x1", to: "o1", type: "inhibit", label: "no G6Pase in muscle" },
        ],
        caption:
          "Each enzyme sits in its printed compartment with its printed requirements: pyruvate carboxylase is the mitochondrial biotin-ATP step that acetyl-CoA switches on; PEPCK pays GTP to lift OAA to PEP; fructose-1,6-bisphosphatase 1 reads the cell's energy ledger (citrate ⊕ to build, AMP ⊝ and F-2,6-BP ⊝ to stand down); and glucose-6-phosphatase — in the ER, primarily liver — is the only door that releases free glucose into the blood. In fasting, glucagon activates the corridor and the pathway produces fresh glucose; without its key enzymes the patient goes hypoglycemic, and muscle, which never built the last door, can never participate at all.",
      },
    },
    {
      id: "odd-carbon-glucose-rescue",
      title: "Odd-chain fatty acids — the one fat that makes glucose",
      context: "Fat oxidation feeding gluconeogenesis",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Odd-chain fatty acid metabolism yields 1 propionyl-CoA",
            sublabel: "Input — the odd carbon left over after β-oxidation's even cuts.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Propionyl-CoA enters the TCA cycle as succinyl-CoA",
            sublabel: "Process — the one fat-derived carbon skeleton that lands in the cycle as a glucose precursor.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Succinyl-CoA undergoes gluconeogenesis → serves as a glucose source",
            sublabel: "Output — 'It's odd for fatty acids to make glucose.'",
            variant: "output",
          },
          {
            id: "x1",
            label: "Even-chain fatty acids cannot produce new glucose",
            sublabel: "Limit — they yield only acetyl-CoA equivalents, and acetyl-CoA cannot become a net glucose precursor.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "propionyl-CoA" },
          { from: "s1", to: "o1", label: "succinyl-CoA → OAA" },
          { from: "x1", to: "s1", type: "inhibit", label: "no TCA carbon handle" },
        ],
        caption:
          "The β-oxidation math decides glucose eligibility: even-chain fatty acids are cut entirely into acetyl-CoA (2-carbon) units, which enter the TCA cycle and leave as CO2 — no net carbon survives to become glucose. An odd-chain fatty acid leaves one 3-carbon propionyl-CoA at the final cut, and propionyl-CoA → succinyl-CoA deposits a fresh 4-carbon skeleton into the cycle — a genuine gluconeogenic handle. The book's own line says it best: it's odd for fatty acids to make glucose — only the odd ones can.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "gluconeogenesis-bypass-enzymes",
      title: "The four bypass enzymes as a compartment pathway",
      caption:
        "Gluconeogenesis drawn as the source table walks: pyruvate carboxylase converts pyruvate → oxaloacetate inside the mitochondria (biotin + ATP, activated by acetyl-CoA); PEPCK converts oxaloacetate → PEP in the cytosol (requires GTP); fructose-1,6-bisphosphatase 1 converts fructose-1,6-bisphosphate → fructose-6-phosphate in the cytosol with its three regulators (citrate ⊕, AMP ⊝, fructose 2,6-bisphosphate ⊝); and glucose-6-phosphatase releases free glucose in the ER. Dotted spans mark where the source lists no enzyme — only the four irreversible bypasses are this page's content. The organ panel carries the liver/kidney/intestinal-epithelium distribution and muscle's exclusion, and the fatty-acid panel settles odd- vs even-chain glucose eligibility.",
      notice:
        "Track the compartments as addresses: the pathway starts in the mitochondrion, crosses to the cytosol for its middle two enzymes, and exits through the ER — the compartment map IS the exam question ('Where does glucose-6-phosphatase act?'). Then track the regulators as a mirror of the energy state: citrate (fed, build) stimulates FBPase-1 while AMP (low energy) and fructose 2,6-bisphosphate (the glycolysis accelerator) inhibit it — gluconeogenesis and glycolysis are never both fully on.",
    },
    {
      kind: "table",
      title: "The four irreversible enzymes — verbatim from the source",
      intro: "Compartment, reaction, requirement, and regulation for each bypass.",
      columns: ["Enzyme", "Compartment", "Reaction", "Requires / Regulated by"],
      rows: [
        ["Pyruvate carboxylase", "Mitochondria", "Pyruvate → oxaloacetate", "Biotin, ATP · activated by acetyl-CoA"],
        ["Phosphoenolpyruvate carboxykinase (PEPCK)", "Cytosol", "Oxaloacetate → phosphoenolpyruvate (PEP)", "GTP"],
        ["Fructose-1,6-bisphosphatase 1", "Cytosol", "Fructose-1,6-bisphosphate → fructose-6-phosphate", "Citrate ⊕, AMP ⊝, fructose 2,6-bisphosphate ⊝"],
        ["Glucose-6-phosphatase", "ER", "Glucose-6-phosphate → glucose", "— (the final exit; primarily liver)"],
      ],
      caption:
        "All four enzymes may be subject to activation by glucagon in the fasting state — the pathway produces fresh glucose.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Where the pathway runs — and where it cannot",
      body:
        "Glucose-6-phosphatase occurs primarily in liver, where the pathway serves to maintain euglycemia during fasting; the enzymes are also found in kidney and intestinal epithelium. Deficiency of the key gluconeogenic enzymes causes hypoglycemia — the fasting-collapse vignette. And muscle cannot participate in gluconeogenesis because it lacks glucose-6-phosphatase: it can hold glucose as glucose-6-phosphate for its own use, but it has no door that releases free glucose to the blood.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "Odd- vs even-chain fatty acids — the glucose-eligibility rule",
      body:
        "Odd-chain fatty acids yield 1 propionyl-CoA during metabolism, which can enter the TCA cycle (as succinyl-CoA), undergo gluconeogenesis, and serve as a glucose source — 'It's odd for fatty acids to make glucose.' Even-chain fatty acids cannot produce new glucose, since they yield only acetyl-CoA equivalents. When a stem asks whether a fat can yield net glucose, count the carbons: odd leaves a 3-carbon propionyl handle; even leaves none.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A fasting patient develops hypoglycemia; the question asks which gluconeogenic enzyme is deficient or which step is blocked.",
        discriminator: "The enzyme-specific chemistry or compartment",
        concept: "Deficiency of the key gluconeogenic enzymes causes hypoglycemia",
        answer: "Match the defect to the bypass: pyruvate carboxylase (mitochondria, biotin + ATP, acetyl-CoA-activated), PEPCK (cytosol, GTP), FBPase-1 (cytosol, citrate ⊕/AMP ⊝/F-2,6-BP ⊝), or glucose-6-phosphatase (ER).",
      },
      {
        stem: "A question asks what activates pyruvate carboxylase.",
        discriminator: "The acetyl-CoA signal",
        concept: "Pyruvate carboxylase is activated by acetyl-CoA",
        answer: "Acetyl-CoA — the β-oxidation signal that abundant fat is fueling glucose production; pyruvate carboxylase also requires biotin and ATP in the mitochondria.",
      },
      {
        stem: "A stem pairs high fructose 2,6-bisphosphate or AMP with gluconeogenesis and asks the effect on FBPase-1.",
        discriminator: "The ⊝ symbols on the source's regulator line",
        concept: "FBPase-1 regulation",
        answer: "Citrate ⊕ stimulates fructose-1,6-bisphosphatase 1; AMP ⊝ and fructose 2,6-bisphosphate ⊝ inhibit it — the fed/energy mirror of PFK-1's regulation.",
      },
      {
        stem: "A question asks why skeletal muscle cannot contribute to blood glucose during fasting.",
        discriminator: "The missing final enzyme",
        concept: "Muscle lacks glucose-6-phosphatase",
        answer: "Muscle cannot participate in gluconeogenesis because it lacks glucose-6-phosphatase — glucose-6-phosphate cannot leave the muscle as free glucose.",
      },
      {
        stem: "A calculation or yes/no stem asks whether an odd-chain or even-chain fatty acid can yield net glucose.",
        discriminator: "The propionyl-CoA exception",
        concept: "Odd-chain fatty acids as a glucose source",
        answer: "Odd-chain fatty acids yield 1 propionyl-CoA → succinyl-CoA (TCA) → gluconeogenesis → a glucose source; even-chain fatty acids cannot produce new glucose (only acetyl-CoA equivalents).",
      },
      {
        stem: "A tissue-distribution stem asks where gluconeogenic enzymes are found.",
        discriminator: "The organ list",
        concept: "Liver primary; kidney and intestinal epithelium also",
        answer: "Glucose-6-phosphatase occurs primarily in liver; the enzymes are also found in kidney and intestinal epithelium — maintaining euglycemia during fasting is the liver's job.",
      },
    ],
    traps: [
      {
        a: "Pyruvate carboxylase",
        b: "Pyruvate dehydrogenase",
        whyConfused: "Both are mitochondrial pyruvate enzymes.",
        keyDifference: "Pyruvate carboxylase builds: pyruvate → oxaloacetate (biotin, ATP, acetyl-CoA-activated) feeding gluconeogenesis; PDH burns: pyruvate → acetyl-CoA into the TCA cycle.",
        clue: "Fasting + glucose production → carboxylase; energy extraction → dehydrogenase.",
      },
      {
        a: "Citrate ⊕ on FBPase-1",
        b: "AMP ⊝ on FBPase-1",
        whyConfused: "Both are energy metabolites.",
        keyDifference: "Citrate (fed, high-energy, build mode) stimulates fructose-1,6-bisphosphatase 1; AMP (low energy) inhibits it — the exact mirror of glycolysis' PFK-1 regulation.",
        clue: "The source prints the full line: citrate ⊕, AMP ⊝, fructose 2,6-bisphosphate ⊝.",
      },
      {
        a: "Glucose-6-phosphatase in the cytosol",
        b: "Glucose-6-phosphatase in the ER",
        whyConfused: "The other three enzymes are soluble-compartment enzymes.",
        keyDifference: "Glucose-6-phosphatase is in the ER — glucose-6-phosphate enters the ER lumen to be dephosphorylated; the source prints 'In ER.'",
        clue: "Any compartment question on the fourth enzyme.",
      },
      {
        a: "Odd-chain fatty acids make glucose",
        b: "Even-chain fatty acids make glucose",
        whyConfused: "Fats feeding gluconeogenesis sounds uniform.",
        keyDifference: "Only odd-chain fatty acids yield propionyl-CoA → succinyl-CoA, a glucose-precursor handle; even-chain fats yield only acetyl-CoA equivalents — no net glucose.",
        clue: "The book's own line: 'It's odd for fatty acids to make glucose.'",
      },
    ],
    pivots: [
      {
        lookAlike: "A fasting-hypoglycemia stem (gluconeogenic enzyme deficiency vs glycogen mobilization failure)",
        differentiator: "The timing and the enzyme named",
        correctPath:
          "Prolonged fasting hypoglycemia with intact early glycogen response points at the gluconeogenic corridor (pyruvate carboxylase, PEPCK, FBPase-1, G6Pase — deficiency of the key enzymes causes hypoglycemia); a short-fasting crash with hepatomegaly points at glycogen storage disease — here, anchor on which of the four bypasses the stem's chemistry implicates.",
      },
      {
        lookAlike: "A 'can this substrate become glucose?' stem (odd-chain fat, even-chain fat, acetyl-CoA)",
        differentiator: "Does the carbon skeleton reach a gluconeogenic intermediate?",
        correctPath:
          "Odd-chain fatty acids → propionyl-CoA → succinyl-CoA → yes. Even-chain fatty acids and acetyl-CoA → no new glucose (acetyl-CoA equivalents only). Ask which TCA handle survives: succinyl-CoA yes, acetyl-CoA no.",
      },
    ],
    miniCase: {
      vignette:
        "A 14-month-old boy is brought in after sleeping through the night for the first time. He is difficult to arouse at 6 am, sweaty, and irritable; a bedside glucose is 38 mg/dL. He feeds voraciously when offered juice and recovers within minutes. The episodes have occurred only with fasts longer than his usual night interval, never after meals. Growth and development are otherwise normal, and exam is unrevealing.",
      question:
        "Deficiency of which enzyme class best explains fasting hypoglycemia in this child?",
      options: [
        {
          label: "A",
          text: "A key gluconeogenic enzyme (e.g., glucose-6-phosphatase or fructose-1,6-bisphosphatase 1)",
          correct: true,
          why: "Correct — the source states it directly: deficiency of the key gluconeogenic enzymes causes hypoglycemia. Fasting length is the trigger because the pathway's job is to maintain euglycemia during fasting.",
        },
        {
          label: "B",
          text: "Pyruvate dehydrogenase, blocking the entry of pyruvate into the TCA cycle",
          why: "Tempting because PDH deficiency also causes energy failure — but its signature is lactic acidosis with neurologic deficits from birth, not isolated fasting hypoglycemia; PDH consumes pyruvate rather than build glucose from it.",
        },
        {
          label: "C",
          text: "Muscle glucose-6-phosphatase",
          why: "A trap inside a trap: muscle cannot participate in gluconeogenesis because it lacks glucose-6-phosphatase — there is no muscle enzyme to be deficient in.",
        },
        {
          label: "D",
          text: "Hexokinase, trapping glucose intracellularly",
          why: "Hexokinase defects do not produce fasting hypoglycemia; trapping would lower usable glucose after meals, not after a fast.",
        },
        {
          label: "E",
          text: "Lipoprotein lipase",
          why: "Fat handling, not glucose production — even with abundant fat, only odd-chain fatty acids contribute a glucose skeleton, and that is not the mechanism of fasting euglycemia.",
        },
      ],
      reasoning:
        "The temporal signature is the tell: hypoglycemia appears only when the fast outlasts glycogen and the child depends on gluconeogenesis to maintain euglycemia. The pathway's four irreversible enzymes — pyruvate carboxylase, PEPCK, FBPase-1, glucose-6-phosphatase — are the fasting glucose supply; their deficiency is the fasting hypoglycemia the page names.",
    },
  },
  mnemonics: [
    {
      code: "“It’s odd for fatty acids to make glucose”",
      meaning: "The source's own line: odd-chain fatty acids yield 1 propionyl-CoA, which enters the TCA cycle as succinyl-CoA, undergoes gluconeogenesis, and serves as a glucose source — even-chain fatty acids cannot (only acetyl-CoA equivalents).",
      memorizes: "Which fatty acids can yield net glucose",
      whenToUse: "Any odd- vs even-chain stem or 'can fat become glucose' question.",
      clinical: "The one fat-derived carbon skeleton that rescues a fasting brain.",
    },
    {
      code: "“M-C-C-E — gluconeogenesis walks from Mitochondrion through Cytosol to the ER”",
      meaning: "The four bypasses in order with their addresses: pyruvate carboxylase (Mitochondria), PEPCK (Cytosol), fructose-1,6-bisphosphatase 1 (Cytosol), glucose-6-phosphatase (ER).",
      memorizes: "Enzyme order plus compartments",
      whenToUse: "Compartment questions and 'arrange the four enzymes' stems.",
      clinical: "The ER address of G6Pase is why liver (and kidney, intestinal epithelium) can export free glucose — and muscle cannot.",
    },
    {
      code: "“Acetyl-CoA unlocks the first door”",
      meaning: "Pyruvate carboxylase — the first bypass — is activated by acetyl-CoA: abundant β-oxidation product signals that fat is fueling glucose construction (and simultaneously inhibits PDH, steering pyruvate toward gluconeogenesis).",
      memorizes: "The acetyl-CoA activation of pyruvate carboxylase",
      whenToUse: "Any 'what activates pyruvate carboxylase' or fasting-regulation stem.",
      clinical: "Why fasting (fat oxidation) and gluconeogenesis rise together.",
    },
  ],
  rapidReview: {
    s30: [
      "Four irreversible enzymes: pyruvate carboxylase, PEPCK, FBPase-1, G6Pase",
      "PC: mitochondria, biotin + ATP, activated by acetyl-CoA",
      "G6Pase: ER — deficiency of key enzymes → fasting hypoglycemia",
    ],
    m3: [
      "PEPCK: cytosol, oxaloacetate → PEP, requires GTP",
      "FBPase-1: citrate ⊕, AMP ⊝, fructose 2,6-bisphosphate ⊝",
      "Liver primary; kidney and intestinal epithelium also; muscle never (no G6Pase)",
    ],
    m10: [
      "All enzymes may be activated by glucagon in fasting; pathway produces fresh glucose",
      "Glucose-6-phosphatase maintains euglycemia during fasting",
      "Odd-chain FA → propionyl-CoA → succinyl-CoA → glucose; even-chain cannot (acetyl-CoA only)",
    ],
  },
  recall: [
    {
      q: "List the four irreversible gluconeogenic enzymes with their compartments.",
      a: "Pyruvate carboxylase (mitochondria), phosphoenolpyruvate carboxykinase (cytosol), fructose-1,6-bisphosphatase 1 (cytosol), glucose-6-phosphatase (ER).",
    },
    {
      q: "What does pyruvate carboxylase require, and what activates it?",
      a: "In mitochondria: pyruvate → oxaloacetate; requires biotin and ATP; activated by acetyl-CoA.",
    },
    {
      q: "What does PEPCK do, where, and with what cofactor?",
      a: "In cytosol: oxaloacetate → phosphoenolpyruvate (PEP); requires GTP.",
    },
    {
      q: "Give fructose-1,6-bisphosphatase 1's reaction and its three regulators with directions.",
      a: "In cytosol: fructose-1,6-bisphosphate → fructose-6-phosphate; citrate ⊕, AMP ⊝, fructose 2,6-bisphosphate ⊝.",
    },
    {
      q: "Where does glucose-6-phosphatase act, and which organs carry the pathway?",
      a: "In the ER: glucose-6-phosphate → glucose. Occurs primarily in liver (maintains euglycemia during fasting); enzymes also found in kidney and intestinal epithelium.",
    },
    {
      q: "Why can't muscle participate in gluconeogenesis?",
      a: "Muscle lacks glucose-6-phosphatase — it cannot release free glucose from glucose-6-phosphate.",
    },
    {
      q: "Explain the odd-chain fatty acid exception and why even-chain fats fail.",
      a: "Odd-chain fatty acids yield 1 propionyl-CoA, which enters the TCA cycle as succinyl-CoA and undergoes gluconeogenesis — a glucose source ('It's odd for fatty acids to make glucose'). Even-chain fatty acids yield only acetyl-CoA equivalents and cannot produce new glucose.",
    },
    {
      q: "What hormonal state activates the gluconeogenic enzymes, and what does the pathway produce?",
      a: "All enzymes may be subject to activation by glucagon in the fasting state; the pathway produces fresh glucose.",
    },
  ],
  related: [
    {
      title: "TCA Cycle & Pyruvate Dehydrogenase",
      topicId: "tca-cycle-pdh",
      note: "The pyruvate crossroads: PDH burns pyruvate to acetyl-CoA while pyruvate carboxylase builds it to OAA for glucose — and acetyl-CoA is the signal that tips the fork toward the builder.",
    },
    {
      title: "Metabolism Overview & Rate-Limiting Enzymes",
      topicId: "metabolism-overview",
      note: "Fructose-1,6-bisphosphatase 1 sits in the whole-body map right where glycolysis' PFK-1 works — the reciprocal rate-limiting pair of the sugar corridor.",
    },
    {
      title: "Glycolysis Regulation",
      topicId: "glycolysis-regulation",
      note: "Gluconeogenesis bypasses exactly the irreversible steps glycolysis locks: the four enzymes are glycolysis' one-way doors opened in reverse — with F-2,6-BP inhibiting the builder while it activates the burner.",
    },
    {
      title: "Electron Transport Chain & Oxidative Phosphorylation",
      topicId: "oxidative-phosphorylation",
      note: "The bypasses pay cash: pyruvate carboxylase spends ATP, PEPCK spends GTP — the proton circuit's currency funding fresh glucose.",
    },
  ],
  crossLinks: [
    {
      subject: "Endocrine Physiology",
      connection: "Glucagon in the fasting state — the hormone that activates the gluconeogenic enzymes and makes the liver's maintenance of euglycemia possible.",
    },
    {
      subject: "Hepatology & Renal Physiology",
      connection: "The organ distribution: glucose-6-phosphatase primarily in liver, also kidney and intestinal epithelium — the three tissues that can export free glucose to the blood.",
    },
    {
      subject: "Pediatrics",
      connection: "Fasting hypoglycemia in children — deficiency of the key gluconeogenic enzymes is the canonical prolonged-fasting collapse.",
    },
  ],
};
