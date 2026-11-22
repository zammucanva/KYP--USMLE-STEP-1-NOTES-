import type { KypUsMLENote } from "../types";

// Ported from the KYP USMLE 2026 pilot corpus.
// Source: First Aid 2026, Part 1 pp. 93–97, 106 (rate-limiting enzymes; glycolysis regulation; pyruvate metabolism)

export const glycolysisRegulation: KypUsMLENote = {
  id: "glycolysis-regulation",
  title: "Glycolysis Regulation",
  subtitle: "How one bifunctional enzyme (PFK-2/FBPase-2) decides whether your liver burns glucose or builds it — and why insulin and glucagon pull that single switch in opposite directions.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Biochemistry pathway",
  difficulty: 3,
  readTime: 14,
  sourceRef: "First Aid 2026, Part 1 pp. 71–75, 84 (rate-limiting enzymes; glycolysis regulation; pyruvate metabolism)",
  tags: [
    "PFK-1",
    "fructose-2,6-bisphosphate",
    "PFK-2",
    "FBPase-2",
    "insulin",
    "glucagon",
    "PDH",
    "MODY",
  ],
  core: {
    what: "Glycolysis is the cytoplasmic pathway that splits one glucose into two pyruvate, banking a net 2 ATP and 2 NADH. Its flux is throttled at three regulated enzymes — hexokinase/glucokinase, PFK-1 (the rate-limiting step), and pyruvate kinase.",
    why: "Every energy state in the body — fed, fasting, sprinting, hypoxic — speaks to metabolism through these control points. Miss the regulation logic and you cannot reason through fasting hypoglycemia, lactic acidosis, MODY, or arsenic poisoning.",
    keyIdea: "Fructose-2,6-bisphosphate is the master switch: it activates PFK-1 (glycolysis ON) and inhibits FBPase-1 (gluconeogenesis OFF). Insulin raises F-2,6-BP; glucagon (via cAMP → protein kinase A) lowers it — by flipping the SAME bifunctional enzyme between its PFK-2 and FBPase-2 forms.",
  },
  blocks: [
    {
      kind: "text",
      title: "The pathway in one equation — and where the ATP lives",
      body: [
        "Net glycolysis (cytoplasm): Glucose + 2 Pi + 2 ADP + 2 NAD⁺ → 2 pyruvate + 2 ATP + 2 NADH + 2 H⁺ + 2 H₂O. The pathway is split into an investment phase that spends 2 ATP (hexokinase/glucokinase and PFK-1) and a payoff phase that earns 4 ATP (phosphoglycerate kinase and pyruvate kinase), for a net of +2 ATP per glucose.",
        "The regulation is layered on exactly this economics. ATP itself is a feedback inhibitor of PFK-1 and pyruvate kinase — a cell rich in ATP has no reason to run glycolysis faster. AMP (the low-energy signal) and citrate (a well-fed TCA signal) sit on opposite sides of the same throttle: AMP ⊕ activates PFK-1; ATP and citrate ⊝ inhibit it.",
      ],
    },
    {
      kind: "visual",
      visualId: "glycolysis-regulation-map",
      title: "Glycolysis regulation map",
      caption: "The full pathway with the three regulated enzymes, their ⊕/⊝ regulators, and the F-2,6-BP switch panel.",
      notice: "PFK-1 (teal box) is the rate-limiting step and carries the most regulators — ⊕ AMP and F-2,6-BP, ⊝ ATP and citrate. Follow the switch panel: one enzyme, two names, flipped by a phosphate.",
    },
    {
      kind: "table",
      title: "Rate-determining enzymes — the whole metabolic control panel",
      intro: "The exam loves 'which enzyme is rate-limiting for X, and what turns it on/off?' This is the master table (⊕ = activates, ⊝ = inhibits).",
      columns: [
        "Process",
        "Rate-determining enzyme",
        "Activators (⊕)",
        "Inhibitors (⊝)",
      ],
      rows: [
        [
          "Glycolysis",
          "Phosphofructokinase-1 (PFK-1)",
          "AMP, fructose-2,6-BP",
          "ATP, citrate",
        ],
        [
          "Gluconeogenesis",
          "Fructose-1,6-bisphosphatase 1",
          "ATP (implied by state)",
          "AMP, fructose-2,6-BP",
        ],
        [
          "TCA cycle",
          "Isocitrate dehydrogenase",
          "ADP",
          "ATP, NADH",
        ],
        [
          "Glycogenesis",
          "Glycogen synthase",
          "G-6-P, insulin, cortisol",
          "Epinephrine, glucagon",
        ],
        [
          "Glycogenolysis",
          "Glycogen phosphorylase",
          "Epinephrine, glucagon, AMP",
          "G-6-P, insulin, ATP",
        ],
        [
          "HMP shunt",
          "G6PD",
          "NADP⁺",
          "NADPH",
        ],
        [
          "De novo pyrimidine synthesis",
          "Carbamoyl phosphate synthetase II",
          "ATP, PRPP",
          "UTP",
        ],
        [
          "De novo purine synthesis",
          "PRPP amidotransferase",
          "PRPP",
          "AMP, IMP, GMP",
        ],
        [
          "Urea cycle",
          "Carbamoyl phosphate synthetase I",
          "N-acetylglutamate",
          "—",
        ],
        [
          "Fatty acid synthesis",
          "Acetyl-CoA carboxylase (ACC)",
          "Insulin, citrate",
          "Glucagon, palmitoyl-CoA",
        ],
        [
          "Fatty acid oxidation",
          "Carnitine acyltransferase I",
          "—",
          "Malonyl-CoA",
        ],
        [
          "Ketogenesis",
          "HMG-CoA synthase",
          "“HOMG! I'm starving!”",
          "—",
        ],
        [
          "Cholesterol synthesis",
          "HMG-CoA reductase",
          "Insulin, thyroxine, estrogen",
          "Glucagon, cholesterol",
        ],
      ],
      caption: "Ketogenesis's HMG-CoA synthase is 'activated' by starvation itself (substrate supply), not by a classic regulator molecule.",
    },
    {
      kind: "compare",
      title: "Hexokinase vs glucokinase — same reaction, opposite philosophies",
      intro: "Both phosphorylate glucose → glucose-6-phosphate (trapping it in the cell), but they are tuned for different jobs in different tissues.",
      columns: [
        "Hexokinase (most tissues)",
        "Glucokinase (liver, pancreatic β cells)",
      ],
      rows: [
        {
          label: "Km (affinity)",
          a: "Lower Km — high affinity; works even at low glucose",
          b: "Higher Km — low affinity; only acts when glucose is abundant",
        },
        {
          label: "Vmax (capacity)",
          a: "Lower Vmax — sequesters glucose for local use",
          b: "Higher Vmax — stores glucose when levels are high",
        },
        {
          label: "Induced by insulin",
          a: "No",
          b: "Yes",
        },
        {
          label: "Feedback inhibition",
          a: "⊝ by glucose-6-phosphate (product)",
          b: "⊝ by fructose-6-phosphate (mirrors abundance)",
        },
        {
          label: "Clinical link",
          a: "Keeps brain/muscle supplied in all states",
          b: "Deficiency → ↑ glucose needed for insulin release → MODY and gestational diabetes",
        },
      ],
    },
    {
      kind: "visual",
      visualId: "hexokinase-vs-glucokinase",
      title: "Kinetics tell the story",
      caption: "Reaction rate vs [glucose]: hexokinase saturates early at a low plateau; glucokinase engages late but climbs to a much higher ceiling.",
      notice: "The dashed purple curve (glucokinase) barely moves at fasting glucose — the liver only drains glucose after a meal, leaving the rest for brain and RBCs.",
    },
    {
      kind: "visual",
      visualId: "pyruvate-hub",
      title: "Where pyruvate goes next — the metabolic four-way junction",
      caption: "Pyruvate's four fates with their enzymes and cofactors: lactate (LDH), alanine (ALT), oxaloacetate (pyruvate carboxylase), acetyl-CoA (PDH).",
      notice: "PDH is a ONE-WAY street: once pyruvate → acetyl-CoA, glucose cannot be re-synthesized from it (no net gluconeogenesis from acetyl-CoA). This is why fatty acids cannot become glucose.",
    },
    {
      kind: "text",
      title: "Pyruvate dehydrogenase complex — the gateway with five cofactors",
      body: [
        "PDH is a mitochondrial enzyme complex linking glycolysis to the TCA cycle: pyruvate + NAD⁺ + CoA → acetyl-CoA + CO₂ + NADH. It is differentially regulated by state — active when fed, inactive when fasting (so carbon is spared for gluconeogenesis). It is activated by a high NAD⁺/NADH ratio, ADP, and Ca²⁺.",
        "PDH needs five cofactors — thiamine pyrophosphate (B1), lipoic acid, CoA (B5, pantothenic acid), FAD (B2, riboflavin), and NAD⁺ (B3, niacin): 'the lovely coenzymes for nerds.' The α-ketoglutarate dehydrogenase complex of the TCA cycle requires the SAME five cofactors and does the same chemistry on a different substrate — a favorite exam echo.",
        "Arsenic inhibits lipoic acid. The classic arsenic poisoning picture is a 'vampire': pigmentary skin changes and skin cancer, vomiting and diarrhea, QT prolongation ('running away from a cutie'), and garlic breath.",
      ],
    },
    {
      kind: "list",
      title: "Enzyme names are functions — read the suffix",
      intro: "A kinase uses ATP; a phosphorylase uses inorganic Pi; a phosphatase removes phosphate. When a question names an unfamiliar enzyme, the suffix usually tells you the reaction.",
      items: [
        {
          lead: "Kinase",
          text: "transfers phosphate from a high-energy donor (usually ATP) to substrate — eg, phosphofructokinase.",
        },
        {
          lead: "Phosphorylase",
          text: "adds inorganic phosphate onto substrate WITHOUT ATP — eg, glycogen phosphorylase.",
        },
        {
          lead: "Phosphatase",
          text: "removes a phosphate group from substrate — eg, fructose-1,6-bisphosphatase 1.",
        },
        {
          lead: "Dehydrogenase",
          text: "catalyzes oxidation-reduction reactions — eg, pyruvate dehydrogenase.",
        },
        {
          lead: "Hydroxylase",
          text: "adds a hydroxyl (−OH) group — eg, tyrosine hydroxylase.",
        },
        {
          lead: "Carboxylase",
          text: "transfers carboxyl (−COOH) groups with biotin — eg, pyruvate carboxylase.",
        },
        {
          lead: "Mutase",
          text: "relocates a functional group within the SAME molecule — eg, B12-dependent methylmalonyl-CoA mutase.",
        },
        {
          lead: "Synthase",
          text: "builds without spending ATP as an energy source (contrast synthetase, which uses ATP).",
        },
      ],
    },
    {
      kind: "list",
      title: "Where pathways live — metabolic compartmentation",
      intro: "'Hugs take two (both)': the compartments matter because they explain poisonings and genetic blocks.",
      items: [
        {
          lead: "Mitochondria",
          text: "β-oxidation of fatty acids, acetyl-CoA production, TCA cycle, oxidative phosphorylation, ketogenesis.",
        },
        {
          lead: "Cytoplasm",
          text: "glycolysis, HMP shunt, cholesterol synthesis (SER), protein synthesis (ribosomes/RER), fatty acid and nucleotide synthesis.",
        },
        {
          lead: "Both",
          text: "heme synthesis, urea cycle, gluconeogenesis — the urea cycle starts in mitochondria and finishes in the cytoplasm.",
        },
      ],
    },
    {
      kind: "table",
      title: "Anaerobic glycolysis — who lives without mitochondria?",
      intro: "LDH ending glycolysis at lactate is the major pathway in cells that lack mitochondria or operate hypoxically.",
      columns: [
        "Tissue",
        "Why it depends on anaerobic glycolysis",
      ],
      rows: [
        [
          "Red blood cells",
          "No mitochondria at all — lactate is the only fate of their pyruvate",
        ],
        [
          "WBCs",
          "Rely heavily on glycolysis even when oxygen is available",
        ],
        [
          "Kidney medulla",
          "Hypoxic inner zone — high glycolytic flux",
        ],
        [
          "Lens, cornea",
          "Avascular and transparent — minimal oxidative metabolism",
        ],
        [
          "Sertoli cells (testes)",
          "Glycolytic metabolism supporting spermatogenesis",
        ],
        [
          "Skeletal muscle (sprinting)",
          "Transiently anaerobic at maximum exertion — lactate accumulates",
        ],
      ],
      caption: "Cori cycle: muscle lactate → liver glucose → back to muscle; Cahill cycle: muscle alanine → liver glucose.",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Pyruvate dehydrogenase complex deficiency",
      body: [
        "PDH deficiency causes a buildup of pyruvate that is shunted to lactate (via LDH) and alanine (via ALT). It is X-linked and typically presents in infancy with neurologic defects, lactic acidosis, and elevated serum alanine.",
        "Treatment increases intake of ketogenic nutrients (high-fat diet, or increased lysine and leucine — the two purely ketogenic amino acids) plus thiamine (B1) and lipoic acid supplementation. The logic: if pyruvate cannot enter the TCA cycle, feed the patient fuels that bypass it entirely — ketone bodies are acetyl-CoA-derived and independent of PDH.",
      ],
    },
    {
      kind: "steps",
      title: "Ethanol metabolism — the NADH/NAD⁺ masterclass (connects everything)",
      intro: "Ethanol metabolism is really a lesson in how redox state throttles gluconeogenesis, ketogenesis, lipogenesis, and the TCA cycle simultaneously.",
      steps: [
        {
          label: "Alcohol dehydrogenase / (CYP2E1, catalase)",
          detail: "Ethanol → acetaldehyde. ADH operates via zero-order kinetics; NAD⁺ is the limiting reagent. Females are more susceptible: lower gastric ADH activity, smaller body size, lower body water fraction.",
        },
        {
          label: "Acetaldehyde dehydrogenase → acetate → acetyl-CoA",
          detail: "Disulfiram blocks ALDH → acetaldehyde accumulation → hangover symptoms that discourage drinking. Fomepizole competitively inhibits ADH — the preferred antidote for methanol/ethylene glycol; ethanol itself works as a competitive ADH inhibitor because ADH has higher affinity for ethanol.",
        },
        {
          label: "↑↑ NADH/NAD⁺ ratio redirects everything",
          detail: "High NADH drives pyruvate → lactate (lactic acidosis), OAA → malate (↓ gluconeogenesis → fasting hypoglycemia), acetyl-CoA away from TCA into ketogenesis (ketoacidosis), and DHAP → glycerol-3-P + acetyl-CoA into fatty acid synthesis (hepatosteatosis).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A chronic alcoholic brought in obtunded after several days of binge drinking without eating; glucose low, lactate high, anion-gap metabolic acidosis, ketones positive.",
        discriminator: "Fasting state + massively elevated NADH/NAD⁺ ratio",
        concept: "Ethanol metabolism starves gluconeogenesis (OAA → malate) and diverts pyruvate to lactate",
        answer: "Ethanol-induced fasting hypoglycemia with lactic + ketoacidosis",
      },
      {
        stem: "An adolescent with unexplained lactic acidosis and ↑ alanine since infancy, X-linked family history, neurodevelopmental regression.",
        discriminator: "Pyruvate shunted to BOTH lactate and alanine",
        concept: "Blocked PDH → pyruvate accumulates → LDH and ALT drain it",
        answer: "Pyruvate dehydrogenase deficiency — treat with ketogenic diet, B1, lipoic acid",
      },
      {
        stem: "Young adult with mild diabetes detected in adolescence, strong multigenerational autosomal-dominant history, non-obese, no ketones ever.",
        discriminator: "β-cell glucokinase defect → more glucose needed to trigger insulin release",
        concept: "Glucokinase is the glucose sensor of the β cell",
        answer: "MODY (maturity-onset diabetes of the young) — also linked to glucokinase mutations in gestational diabetes",
      },
      {
        stem: "A farm worker with vomiting, diarrhea, garlic breath, and QT prolongation on ECG.",
        discriminator: "Arsenic inhibits lipoic acid — a PDH (and α-KG dehydrogenase) cofactor",
        concept: "'Imagine a vampire' — pigmentary changes/skin cancer, GI symptoms, QT prolongation, garlic breath",
        answer: "Arsenic poisoning",
      },
    ],
    traps: [
      {
        a: "PFK-1",
        b: "PFK-2",
        whyConfused: "Names differ by one character; both act on fructose phosphates.",
        keyDifference: "PFK-1 is the rate-limiting GLYCOLYSIS enzyme (F-6-P → F-1,6-BP, spends ATP). PFK-2 makes the regulator F-2,6-BP (no ATP cost) and is the insulin/glucagon switch.",
        clue: "If the question mentions fructose-2,6-BP, cAMP, PKA, or hormonal state → PFK-2. If it asks for THE rate-limiting step of glycolysis → PFK-1.",
      },
      {
        a: "Hexokinase ⊝ by glucose-6-P",
        b: "Glucokinase ⊝ by fructose-6-P",
        whyConfused: "Both are the first step of glycolysis; both do feedback inhibition.",
        keyDifference: "Product inhibition (G-6-P) for hexokinase vs pathway-substrate inhibition (F-6-P) for glucokinase — glucokinase must NOT shut down just because product accumulated; it should track overall glucose abundance.",
        clue: "'Which tissue sequesters glucose even when blood levels are low?' → hexokinase (low Km).",
      },
      {
        a: "Glycogen phosphorylase",
        b: "Glycogen synthase",
        whyConfused: "Both controlled by the same hormones — in opposite directions.",
        keyDifference: "Epinephrine/glucagon ⊕ phosphorylase (breakdown) and ⊝ synthase (build) via PKA; insulin reverses both.",
        clue: "Phosphorylation state: phosphorylated enzyme = breakdown active (fasting signals), dephosphorylated = synthesis active.",
      },
    ],
    pivots: [
      {
        lookAlike: "A patient with hypoglycemia and lactic acidosis",
        differentiator: "Ethanol history + ketoacids + steatosis vs. inborn error of PDH since infancy",
        correctPath: "Ask WHEN it started: binge drinking without food (adult) → ethanol-induced fasting hypoglycemia; infancy with ↑ alanine → PDH deficiency.",
      },
      {
        lookAlike: "Rate-limiting enzyme questions for 'glycolysis' vs 'gluconeogenesis'",
        differentiator: "PFK-1 vs FBPase-1 — mirror-image regulation by F-2,6-BP",
        correctPath: "F-2,6-BP ⊕ PFK-1 AND ⊝ FBPase-1 simultaneously. One metabolite, both directions — never a futile cycle.",
      },
    ],
    miniCase: {
      vignette: "A 19-year-old man is brought to the emergency department after being found confused in his dormitory room. He has been drinking heavily for 3 days and has eaten almost nothing. Blood glucose is 38 mg/dL, lactate is elevated, blood ketones are positive, and the anion gap is 18. His breath smells of acetone.",
      question: "Which of the following best explains the mechanism of this patient's hypoglycemia?",
      options: [
        {
          label: "A",
          text: "Depletion of hepatic glycogen by glucagon",
          why: "Tempting because glycogenolysis is the first defense against hypoglycemia — but glycogen depletion alone does not explain the LACTIC acidosis, and the mechanism here is downstream of glycogen.",
        },
        {
          correct: true,
          label: "B",
          text: "Inhibition of gluconeogenesis due to an elevated NADH/NAD⁺ ratio",
          why: "Correct. Ethanol oxidation floods the liver with NADH; oxaloacetate is driven to malate and pyruvate to lactate, removing both gluconeogenic substrates while lactate accumulates.",
        },
        {
          label: "C",
          text: "Insulin secretion induced by ethanol oxidation",
          why: "Ethanol does not trigger insulin secretion; the patient is fasting and insulin should be physiologically suppressed. There is no reason for hyperinsulinemia here.",
        },
        {
          label: "D",
          text: "Impaired intestinal glucose absorption",
          why: "Drinking without eating does reduce intake, but the question asks for the MECHANISM of hypoglycemia in a starving liver that should be making glucose — absorption defects do not explain the acidosis.",
        },
      ],
      reasoning: "The three findings lock it together: hypoglycemia (liver cannot make glucose), lactic acidosis (pyruvate → lactate), and ketoacidosis (acetyl-CoA diverted from TCA to ketogenesis). One redox shift — high NADH/NAD⁺ — produces all three.",
    },
  },
  mnemonics: [
    {
      code: "“Prince FredericK works only when fed”",
      meaning: "Prince FredericK = PFK. PFK-2 (and thus F-2,6-BP, and glycolysis) is active in the fed/insulin state.",
      memorizes: "Which hormonal state runs glycolysis in the liver",
      whenToUse: "Any question linking insulin/glucagon to glycolysis vs gluconeogenesis.",
      clinical: "Fed state: insulin → PFK-2 → F-2,6-BP ↑ → glycolysis runs.",
    },
    {
      code: "“FaBian the Peasant has to work hard when starving”",
      meaning: "FaBian = FBPase-2. In fasting, glucagon → PKA phosphorylates the bifunctional enzyme into its FBPase-2 form → F-2,6-BP falls → gluconeogenesis dominates.",
      memorizes: "The fasting-state configuration of the PFK-2/FBPase-2 switch",
      whenToUse: "Fasting metabolism, glucagon signaling, PKA phosphorylation questions.",
      clinical: "Fasting state: glucagon → cAMP → PKA → FBPase-2 → gluconeogenesis.",
    },
    {
      code: "“The lovely coenzymes for nerds”",
      meaning: "Thiamine (B1) — Lovely; Lipoic acid; CoA (B5); FAD (B2); NAD⁺ (B3) — the five PDH cofactors.",
      memorizes: "Cofactors of pyruvate dehydrogenase (and α-ketoglutarate dehydrogenase — same five)",
      whenToUse: "Any PDH deficiency, beriberi, arsenic, or Wernicke question.",
      clinical: "B1 deficiency disables PDH → pyruvate → lactate; ARSENIC disables lipoic acid — identical chemistry, different poison.",
    },
  ],
  rapidReview: {
    s30: [
      "Glycolysis rate-limiting enzyme = PFK-1 (⊕ AMP, F-2,6-BP; ⊝ ATP, citrate).",
      "Gluconeogenesis rate-limiting = FBPase-1 (⊝ AMP, F-2,6-BP).",
      "Insulin → PFK-2 → ↑F-2,6-BP → glycolysis. Glucagon/PKA → FBPase-2 → ↓F-2,6-BP → gluconeogenesis.",
      "Hexokinase: low Km, low Vmax, ⊝ G-6-P. Glucokinase: high Km, high Vmax, ⊝ F-6-P, induced by insulin.",
      "PDH cofactors: B1, lipoic acid, B5, B2, B3 (lovely coenzymes for nerds). Arsenic hits lipoic acid.",
    ],
    m3: [
      "Net glycolysis: glucose + 2 ADP + 2 Pi + 2 NAD⁺ → 2 pyruvate + 2 ATP + 2 NADH + 2 H⁺ + 2 H₂O (cytoplasm).",
      "Pyruvate kinase: ⊕ F-1,6-BP feed-forward; ⊝ ATP, alanine, glucagon, epinephrine (via phosphorylation).",
      "Glucokinase deficiency → impaired insulin release (needs more glucose to trigger) → MODY, gestational diabetes.",
      "PDH deficiency (X-linked): pyruvate → lactate + alanine ↑, lactic acidosis, neurologic defects, infancy. Treatment: ketogenic diet, B1, lipoic acid.",
      "Pyruvate fates: LDH → lactate (RBC, WBC, renal medulla, lens, cornea, Sertoli); ALT → alanine (Cahill); PC (biotin) → OAA; PDH → acetyl-CoA (one-way!).",
      "Ethanol: ↑NADH/NAD⁺ → lactic acidosis, fasting hypoglycemia (OAA→malate), ketoacidosis, hepatosteatosis (DHAP→glycerol-3-P).",
    ],
    m10: [
      "Full rate-determining table: glycolysis PFK-1; gluconeogenesis FBPase-1; TCA isocitrate DH; glycogenesis synthase; glycogenolysis phosphorylase; HMP G6PD; purine PRPP amidotransferase; pyrimidine CPS II; urea CPS I; FA synthesis ACC; FA oxidation CAT I; ketogenesis HMG-CoA synthase; cholesterol HMG-CoA reductase.",
      "Compartmentation: mitochondria (β-oxidation, TCA, oxphos, ketogenesis); cytoplasm (glycolysis, HMP, cholesterol, FA, nucleotides); both (heme, urea cycle, gluconeogenesis — 'hugs take two').",
      "Enzyme suffixes: kinase (ATP), phosphorylase (Pi, no ATP), phosphatase, dehydrogenase (redox), hydroxylase, carboxylase (biotin), mutase (relocate group), synthase (no ATP).",
      "Glycogen regulation: epinephrine/glucagon → PKA → phosphorylase ⊕ / synthase ⊝; insulin → phosphatase reverses; muscle contraction Ca²⁺-calmodulin activates phosphorylase kinase.",
      "PDH activated by ↑ NAD⁺/NADH, ADP, Ca²⁺; inhibited in fasting. α-KGDH uses the same five cofactors — 'same chemistry, different substrate.'",
      "Arsenic picture: 'vampire' — pigmentary skin changes/skin cancer, vomiting/diarrhea, QT prolongation, garlic breath.",
      "Glucokinase is also in β cells — it is the GLUCOSE SENSOR; MODY from GK mutations is a sensing defect, not just a liver-processing defect.",
    ],
  },
  recall: [
    {
      q: "What single metabolite activates glycolysis AND inhibits gluconeogenesis at the same time?",
      a: "Fructose-2,6-bisphosphate (⊕ PFK-1, ⊝ FBPase-1).",
    },
    {
      q: "Which enzyme makes F-2,6-BP in the fed state, and what flips it to degrade F-2,6-BP in fasting?",
      a: "The bifunctional PFK-2/FBPase-2 — insulin (dephosphorylated → PFK-2) vs glucagon → cAMP → PKA (phosphorylated → FBPase-2).",
    },
    {
      q: "Rate-limiting enzymes of glycolysis and gluconeogenesis?",
      a: "Glycolysis: PFK-1. Gluconeogenesis: fructose-1,6-bisphosphatase 1.",
    },
    {
      q: "Hexokinase vs glucokinase: Km, Vmax, feedback, insulin inducibility?",
      a: "Hexokinase — low Km, low Vmax, ⊝ G-6-P, not insulin-induced (most tissues). Glucokinase — high Km, high Vmax, ⊝ F-6-P, induced by insulin (liver + β cells).",
    },
    {
      q: "Five cofactors of PDH?",
      a: "B1 (TPP), lipoic acid, B5 (CoA), B2 (FAD), B3 (NAD⁺) — 'the lovely coenzymes for nerds.'",
    },
    {
      q: "Why can't fatty acids be converted to glucose?",
      a: "Pyruvate → acetyl-CoA via PDH is irreversible, and two acetyl-CoA carbons are lost as CO₂ in the TCA cycle before reaching net OAA — no net gluconeogenic carbon.",
    },
    {
      q: "A glucokinase mutation causes diabetes by what mechanism?",
      a: "β cells need MORE glucose to trigger insulin release (sensor defect) → impaired insulin secretion → MODY / gestational diabetes.",
    },
    {
      q: "Which tissues depend on anaerobic glycolysis?",
      a: "RBCs (no mitochondria), WBCs, renal medulla, lens, cornea, Sertoli cells.",
    },
  ],
  related: [
    {
      title: "Diabetes Mellitus",
      note: "The integrated endgame of glucose regulation — glucokinase sensing, insulin therapy, and the hyperglycemic emergencies that dysregulate everything taught here.",
      topicId: "diabetes-mellitus",
    },
    {
      title: "Acid-Base Physiology",
      note: "Lactic acidosis from anaerobic glycolysis (and ethanol's NADH shift) is a GOLDMARK anion-gap cause — Winter formula applies.",
      topicId: "acid-base-physiology",
    },
    {
      title: "Glycogen storage diseases",
      note: "Von Gierke (G-6-phosphatase) blocks the gluconeogenic/glycogenolytic exit to free glucose — fasting hypoglycemia + lactic acidosis mirror the ethanol mechanism.",
    },
    {
      title: "Thiamine (B1) deficiency",
      note: "Transketolase (HMP shunt), α-KGDH, and PDH all need TPP — wet/dry beriberi and Wernicke-Korsakoff.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology",
      connection: "Fomepizole (ADH inhibitor) and disulfiram (ALDH inhibitor) act exactly on the ethanol pathway that generates the NADH shift.",
    },
    {
      subject: "Cardiovascular",
      connection: "Ischemic myocardium switches to anaerobic glycolysis → lactate → anginal pain metabolite.",
    },
    {
      subject: "Endocrine",
      connection: "Insulin/glucagon ratio is the master input of the PFK-2/FBPase-2 switch — the same hormones that drive glycogen synthesis vs breakdown.",
    },
    {
      subject: "Genetics",
      connection: "PDH deficiency is X-linked; MODY2 is autosomal-dominant glucokinase — inheritance pattern pivots on family history.",
    },
  ],
  mechanisms: [
    {
      id: "fed-state",
      title: "Fed state — insulin drives glucose into glycolysis",
      context: "After a meal",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "↑ Blood glucose → pancreatic β cells release insulin",
            sublabel: "Insulin signals abundance. The liver's job now is to take glucose up and burn or store it.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Insulin dephosphorylates PFK-2/FBPase-2",
            sublabel: "Molecular — The bifunctional enzyme sits in its PFK-2 (kinase) form when dephosphorylated.",
            variant: "process",
          },
          {
            id: "s2",
            label: "PFK-2 converts F-6-P → fructose-2,6-bisphosphate",
            sublabel: "Molecular — F-2,6-BP accumulates in the hepatocyte cytoplasm.",
            variant: "process",
          },
          {
            id: "s3",
            label: "F-2,6-BP activates PFK-1 and inhibits FBPase-1",
            sublabel: "Pathway — Glycolysis accelerates past its rate-limiting step while the opposing gluconeogenic enzyme is shut off — no futile cycle.",
            variant: "process",
          },
          {
            id: "s4",
            label: "Glucokinase is induced, pyruvate kinase is active",
            sublabel: "Pathway — Insulin also induces glucokinase synthesis in liver; F-1,6-BP feed-forward activates pyruvate kinase.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Glycolysis runs; pyruvate → acetyl-CoA → TCA or lipogenesis",
            sublabel: "Effect: Excess carbon is stored as fatty acid / glycogen.",
            variant: "output",
          },
          {
            id: "o2",
            label: "“Prince FredericK (PFK) works only when fed”",
            sublabel: "Clinical: Insulin = PFK-2 = glycolysis. The fed liver burns glucose.",
            variant: "output",
          },
          {
            id: "fb1",
            label: "FBPase-1 — the gluconeogenic exit",
            sublabel: "Would convert F-1,6-BP back to F-6-P and undo glycolysis — a futile cycle.",
            variant: "target",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "insulin receptor → dephosphorylation" },
          { from: "s1", to: "s2", label: "kinase arm active" },
          { from: "s2", to: "s3", label: "F-2,6-BP rises" },
          { from: "s3", to: "s4", label: "feed-forward" },
          { from: "s4", to: "o1", label: "carbon stored" },
          { from: "s4", to: "o2" },
          { from: "s3", to: "fb1", type: "inhibit", label: "F-2,6-BP brakes the reverse gear" },
        ],
        caption:
          "Insulin dephosphorylates the bifunctional enzyme → PFK-2 makes F-2,6-BP → PFK-1 races while FBPase-1 is braked — one metabolite commits the liver to glycolysis.",
      },
    },
    {
      id: "fasting-state",
      title: "Fasting state — glucagon flips the switch to gluconeogenesis",
      context: "Between meals, overnight, starvation",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "↓ Blood glucose → pancreatic α cells release glucagon",
            sublabel: "Glucagon signals scarcity. The liver must now produce glucose, not consume it.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Glucagon receptor → ↑ cAMP → ↑ protein kinase A",
            sublabel: "Molecular — PKA phosphorylates the bifunctional PFK-2/FBPase-2 enzyme.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Phosphorylation activates FBPase-2, silences PFK-2",
            sublabel: "Molecular — The enzyme now degrades F-2,6-BP instead of making it. F-2,6-BP levels fall.",
            variant: "process",
          },
          {
            id: "s3",
            label: "PFK-1 loses its activator; FBPase-1 is released from inhibition",
            sublabel: "Pathway — Glycolysis throttles down and gluconeogenesis accelerates at the same control point — one switch, both directions.",
            variant: "process",
          },
          {
            id: "s4",
            label: "Pyruvate kinase is phosphorylated (inactive)",
            sublabel: "Pathway — Glucagon (and epinephrine in liver) shut the exit door too, so PEP is diverted to glucose.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Hepatic glucose output maintains blood glucose",
            sublabel: "Effect: For the brain and RBCs, which cannot make their own.",
            variant: "output",
          },
          {
            id: "o2",
            label: "“FaBian the Peasant (FBP) has to work hard when starving”",
            sublabel: "Clinical: Glucagon = FBPase-2 = gluconeogenesis.",
            variant: "output",
          },
          {
            id: "o3",
            label: "Muscle glycogenolysis is driven by epinephrine instead",
            sublabel: "Effect: Muscle lacks glucagon receptors — epinephrine → cAMP → PKA → glycogen phosphorylase activation.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "α-cell signal" },
          { from: "s1", to: "s2", label: "PKA phosphorylates the switch" },
          { from: "s2", to: "s3", label: "F-2,6-BP falls" },
          { from: "s3", to: "s4", label: "exit door closing" },
          { from: "s4", to: "o1", label: "glucose output" },
          { from: "s4", to: "o2" },
          { from: "trigger", to: "o3", label: "muscle has no glucagon receptor" },
        ],
        caption:
          "The same bifunctional enzyme, phosphorylated the other way: FBPase-2 destroys F-2,6-BP, releasing FBPase-1 — the liver switches from consumer to producer of glucose at a single control point.",
      },
    },
  ],
};
