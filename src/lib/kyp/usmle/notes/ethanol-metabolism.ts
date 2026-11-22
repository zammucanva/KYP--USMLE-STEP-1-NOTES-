import type { KypUsMLENote } from "../types";

// Biochemistry — Nutrition (N-batch, book order 8/8).
// Source: First Aid 2026, Part 1 pdf 92 / book 70 (ethanol metabolism: ADH,
// ALDH, CYP2E1, catalase; NADH/NAD+ consequences; fomepizole; disulfiram)

export const ethanolMetabolism: KypUsMLENote = {
  id: "ethanol-metabolism",
  title: "Ethanol Metabolism",
  subtitle:
    "Four routes from ethanol to acetyl-CoA — ADH in the cytosol, CYP2E1 in the microsome, catalase in the peroxisome, ALDH in the mitochondrion — and the surging NADH/NAD+ ratio that explains every ethanol consequence from lactic acidosis to the fatty liver.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Nutrition",
  pilotCategory: "Nutrition — ethanol metabolism and its consequences",
  difficulty: 2,
  readTime: 11,
  sourceRef:
    "First Aid 2026, Part 1 pp. 70 (ethanol metabolism: ADH, ALDH, CYP2E1, catalase; NADH/NAD+ ratio consequences; fomepizole; disulfiram)",
  tags: [
    "ethanol metabolism",
    "alcohol dehydrogenase",
    "acetaldehyde dehydrogenase",
    "CYP2E1",
    "catalase",
    "NADH",
    "NAD+",
    "zero-order kinetics",
    "lactic acidosis",
    "fasting hypoglycemia",
    "ketoacidosis",
    "hepatosteatosis",
    "triglycerides",
    "glycerol-3-phosphate",
    "fomepizole",
    "disulfiram",
    "methanol",
    "ethylene glycol",
    "gastric alcohol dehydrogenase",
    "ROS",
  ],
  core: {
    what: "Ethanol is metabolized to acetaldehyde by alcohol dehydrogenase (cytosol, NAD+ → NADH; blocked by fomepizole), by CYP2E1 (microsome, NADPH → NADP+ + ROS; induced by chronic use), and by catalase (peroxisome, H2O2 → H2O); acetaldehyde is converted to acetate by acetaldehyde dehydrogenase (mitochondria, NAD+ → NADH; blocked by disulfiram), and acetate becomes acetyl-CoA. NAD+ is the limiting reagent; ADH operates via zero-order kinetics. The ↑NADH/NAD+ ratio in liver causes: lactic acidosis (↑pyruvate → lactate conversion), fasting hypoglycemia (↓gluconeogenesis from ↑OAA → malate conversion), ketoacidosis (acetyl-CoA diverted into ketogenesis rather than TCA — the cycle is inhibited), and hepatosteatosis (↑DHAP → glycerol-3-P [4A] plus acetyl-CoA → fatty acids [4B] → triglycerides). Females are more susceptible due to ↓gastric ADH activity, ↓body size, and ↓percentage of body water. Fomepizole is the preferred antidote for methanol/ethylene glycol; ethanol itself is a competitive inhibitor (ADH has higher affinity for ethanol); disulfiram blocks ALDH → ↑acetaldehyde → hangover symptoms → discourages drinking.",
    why: "This page is the metabolism chapter compressed into one molecule: one ratio (NADH/NAD+) explains four diseases (acidosis, hypoglycemia, ketoacidosis, fatty liver), and the enzyme blockades are the pharmacology of toxicology (fomepizole) and aversion therapy (disulfiram). Every chronic-alcohol vignette on Step 1 traces back to this figure.",
    keyIdea: "Follow NADH: every ethanol oxidation loads the hepatocyte with NADH and drains NAD+ (the limiting reagent). The excess NADH pushes pyruvate to lactate (anion-gap acidosis), OAA to malate (gluconeogenesis blocked → fasting hypoglycemia), acetyl-CoA away from the inhibited TCA cycle into ketogenesis (ketoacidosis) and fatty-acid synthesis, and DHAP to glycerol-3-phosphate (4A) — which esterifies those fatty acids (4B) into triglycerides: the fatty liver. Then the two blockades: fomepizole stops ADH (antidote for methanol/ethylene glycol), disulfiram stops ALDH (acetaldehyde builds → hangover → aversion).",
  },
  mechanisms: [
    {
      id: "ethanol-four-routes",
      title: "Ethanol to acetyl-CoA — the four-route oxidation",
      context: "Acute and chronic ethanol exposure",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Ethanol arrives (zero-order kinetics — a constant amount metabolized per unit time regardless of concentration)",
            sublabel: "Input — NAD+ is the limiting reagent.",
            variant: "input",
          },
          {
            id: "s1",
            label: "CYTOSOL — Alcohol dehydrogenase: ethanol + NAD+ → acetaldehyde + NADH (the main route)",
            sublabel: "Process — fomepizole competitively blocks it; ADH has higher affinity for ethanol than for methanol or ethylene glycol.",
            variant: "process",
          },
          {
            id: "s2",
            label: "MICROSOME — CYP2E1: ethanol + NADPH → acetaldehyde + NADP+ + ROS (induced by chronic use)",
            sublabel: "Process — the chronic-use route and the drug-interaction generator.",
            variant: "process",
          },
          {
            id: "s3",
            label: "PEROXISOME — Catalase: ethanol + H2O2 → acetaldehyde + H2O (minor route)",
            sublabel: "Process — uses peroxide as the oxidant.",
            variant: "process",
          },
          {
            id: "s4",
            label: "MITOCHONDRIA — Acetaldehyde dehydrogenase: acetaldehyde + NAD+ → acetate + NADH",
            sublabel: "Process — disulfiram blocks it; acetaldehyde accumulation is the hangover phenotype.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Acetate → acetyl-CoA — and the liver's NADH/NAD+ ratio rises steeply",
            sublabel: "Output — substrate for the TCA cycle (when it can run), ketogenesis, and lipogenesis.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "ADH" },
          { from: "trigger", to: "s2", label: "CYP2E1" },
          { from: "trigger", to: "s3", label: "catalase" },
          { from: "s1", to: "s4", label: "acetaldehyde" },
          { from: "s4", to: "o1", label: "acetate → acetyl-CoA" },
        ],
        caption:
          "Three enzymes turn ethanol into acetaldehyde in three compartments — cytosolic ADH (the main, zero-order route, NAD+ → NADH), microsomal CYP2E1 (NADPH → NADP+ + ROS, induced by chronic use and responsible for the drug-interaction phenotype), and peroxisomal catalase (H2O2 → H2O) — and mitochondrial ALDH finishes the job to acetate → acetyl-CoA, generating a second NADH per ethanol. The pharmacology sits on the arrows: fomepizole on ADH (preferred antidote for methanol/ethylene glycol; ethanol itself is the competitive alternative because ADH has higher affinity for it), disulfiram on ALDH (acetaldehyde builds → hangover symptoms → discourages drinking).",
      },
    },
    {
      id: "nadh-ratio-consequences",
      title: "The ↑NADH/NAD+ ratio — four diseases from one shift",
      context: "Fasting or chronic alcohol overuse",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "↑ NADH/NAD+ ratio in liver from ethanol oxidation (NAD+ is the limiting reagent)",
            sublabel: "Input — pathways split into stimulated (NADH-consuming) and inhibited (NAD+-needing) sets.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Pyruvate → lactate is pushed by NADH",
            sublabel: "Process — lactate accumulates: anion gap metabolic acidosis (lactic acidosis).",
            variant: "process",
          },
          {
            id: "s2",
            label: "OAA → malate is pushed by NADH, removing OAA from gluconeogenesis",
            sublabel: "Process — ↓gluconeogenesis: FASTING HYPOGLYCEMIA (glucose cannot be rebuilt).",
            variant: "process",
          },
          {
            id: "s3",
            label: "The TCA cycle is inhibited by the NADH/NAD+ ratio → acetyl-CoA diverts into ketogenesis",
            sublabel: "Process — ketoacids accumulate: alcoholic KETOACIDOSIS.",
            variant: "process",
          },
          {
            id: "s4",
            label: "DHAP → glycerol-3-P (4A) and acetyl-CoA → fatty acids (4B) are both pushed by NADH",
            sublabel: "Process — lipogenesis runs: glycerol-3-P + fatty acids → triglycerides.",
            variant: "process",
          },
          {
            id: "o1",
            label: "HEPATOSTEATOSIS — triglyceride accumulation in the liver",
            sublabel: "Output — the fatty liver that precedes alcoholic hepatitis and cirrhosis.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "↑ lactate" },
          { from: "trigger", to: "s2", label: "↓ gluconeogenesis" },
          { from: "trigger", to: "s3", label: "↑ ketogenesis" },
          { from: "trigger", to: "s4", label: "↑ lipogenesis" },
          { from: "s4", to: "o1", label: "4A + 4B → triglycerides" },
        ],
        caption:
          "One ratio, four pathologies — the NADH surplus forces every NADH-producing equilibrium backward and starves every NAD+-needing pathway: pyruvate becomes lactate (anion-gap acidosis), oxaloacetate becomes malate (no gluconeogenesis — fasting hypoglycemia), the TCA cycle slows for lack of NAD+ so acetyl-CoA spills into ketogenesis (ketoacidosis), and the same acetyl-CoA plus NADH-driven DHAP→glycerol-3-P (4A) feeds fatty-acid synthesis (4B) — glycerol backbone plus fatty acids equals triglycerides, and the liver fattens (hepatosteatosis).",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "ethanol-metabolism-map",
      title: "The metabolism map — four compartments, two blockades",
      caption:
        "The source's figure redrawn with its compartment logic: the central spine Ethanol → Acetaldehyde → Acetate → Acetyl-CoA; CYTOSOL (alcohol dehydrogenase, NAD+ → NADH, fomepizole ⊟, zero-order kinetics), MICROSOME (CYP2E1, NADPH → NADP+ + ROS, chronic-use induction), PEROXISOME (catalase, H2O2 → H2O), and MITOCHONDRIA (acetaldehyde dehydrogenase, NAD+ → NADH, disulfiram ⊟) — with the pharmacology panel (fomepizole for methanol/ethylene glycol; ethanol as the competitive inhibitor because ADH has higher affinity for it) and the sex-difference strip (↓gastric ADH, ↓body size, ↓% body water).",
      notice:
        "The map's exam value is GEOMETRY: which enzyme in which compartment, which cofactor pair flips (NAD+/NADH for ADH and ALDH, NADPH/NADP+ for CYP2E1, H2O2/H2O for catalase), and where the two drugs sit (fomepizole on the first step, disulfiram on the second). NAD+ is the limiting reagent — the reason all four consequences follow.",
    },
    {
      kind: "visual",
      visualId: "ethanol-nadh-consequences",
      title: "The consequences map — one ratio, four diseases",
      caption:
        "The source's consequence figure adapted: the central ↑NADH/NAD+ hub with four arms — Pyruvate → Lactate (anion gap metabolic acidosis), OAA → Malate blocking gluconeogenesis (fasting hypoglycemia), Acetyl-CoA → ketogenesis with the TCA cycle inhibited (ketoacidosis), and the 4A/4B pair (DHAP → glycerol-3-P and acetyl-CoA → fatty acids) merging into ↑triglycerides (hepatosteatosis) — with the source's legend: pathways stimulated vs inhibited by the NADH/NAD+ ratio.",
      notice:
        "This is the source's own legend logic — stimulated pathways (solid: lactate, malate, glycerol-3-P, ketogenesis, fatty acids) versus inhibited pathways (dashed: gluconeogenesis, TCA cycle). Memorize the 4A/4B markers with the figure: 4A is DHAP → glycerol-3-P (the backbone), 4B is acetyl-CoA → fatty acids (the fill) — together the triglyceride that steatifies the liver.",
    },
    {
      kind: "table",
      title: "The four consequences — mechanism to presentation",
      intro: "Each NADH-driven shift with its clinical face (book p. 70).",
      columns: ["Consequence", "NADH-driven mechanism", "Clinical presentation"],
      rows: [
        ["Lactic acidosis", "↑ pyruvate conversion to lactate", "Anion gap metabolic acidosis"],
        ["Fasting hypoglycemia", "↓ gluconeogenesis due to ↑ conversion of OAA to malate", "Hypoglycemia after fasts (no glycogen left, no gluconeogenesis)"],
        ["Ketoacidosis", "Acetyl-CoA diverted into ketogenesis rather than the inhibited TCA cycle", "Anion gap acidosis with ketones; the alcoholic ketoacidosis picture"],
        ["Hepatosteatosis", "↑ DHAP → glycerol-3-P (4A); acetyl-CoA → fatty acid synthesis (4B); together → triglycerides", "Fatty liver — the first stage toward alcoholic hepatitis and cirrhosis"],
      ],
      caption:
        "All four share one numerator: the NADH surplus. The exam's favorite format is 'which laboratory abnormality explains this finding' — each row answers one stem. Remember the setup condition: hypoglycemia is a FASTING phenomenon (gluconeogenesis is the pathway blocked), which is why the alcoholic who has not eaten overnight crashes at 3 a.m.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why females are more susceptible — and why kinetics matter",
      body: "Females are more susceptible than males to the effects of alcohol due to ↓ activity of gastric alcohol dehydrogenase (less first-pass metabolism before absorption), ↓ body size, and ↓ percentage of water in body weight (the same dose reaches a higher concentration). The kinetics fact is ADH's zero-order behavior: a constant amount of ethanol is cleared per unit time regardless of concentration — no half-life, no saturation curve to exploit, which is why 'waiting it out' is the only physiologic strategy and why fomepizole (for the toxic alcohols) works by halting the enzyme rather than accelerating clearance.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Fomepizole, ethanol-as-antidote, and disulfiram",
      body: "Fomepizole is a competitive inhibitor of alcohol dehydrogenase and the preferred antidote for overdoses of methanol or ethylene glycol — it stops the formation of the toxic metabolites (formic acid; oxalic acid) while the parent alcohols are renally cleared. Ethanol itself can serve as the competitive inhibitor of ADH to treat methanol or ethylene glycol poisoning, because ADH has higher affinity for ethanol than for either toxic alcohol — the classic alternative when fomepizole is unavailable. Disulfiram blocks acetaldehyde dehydrogenase → acetaldehyde accumulates → hangover symptoms (flushing, nausea, headache, hypotension) → discouraging drinking.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Five recurring shapes: (1) the lab-pattern stem — alcoholic with anion-gap acidosis: lactate + ketones together (both arms of the figure); (2) the fasting-hypoglycemia stem — the overnight-fasted drinker whose gluconeogenesis is OAA-starved; (3) the fatty-liver stem — 4A glycerol-3-P + 4B fatty acids → triglycerides; (4) the toxicology stem — methanol or ethylene glycol with visual symptoms/crystalluria → fomepizole (preferred) or IV ethanol (ADH's higher affinity for ethanol); (5) the aversion-therapy stem — flushing and vomiting after a sip of alcohol in a patient on disulfiram (or with a coprescribed metronidazole or sulfonylurea).",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "The alcoholic emergency, mechanism by mechanism",
      body: [
        "The classic presentation bundles the figure's arms: a chronic drinker, several days of poor intake, vomiting, and tachypnea — anion-gap metabolic acidosis from lactate (pyruvate pushed by NADH) plus ketoacids (acetyl-CoA diverted by the inhibited TCA cycle), hypoglycemia from failed gluconeogenesis (OAA siphoned to malate), and a fatty, enlarged liver from the 4A/4B triglyceride assembly. The zero-order kinetics explain why the patient cannot 'metabolize through' the load — a fixed amount clears per hour no matter how high the level.",
        "The toxicology and aversion chapters hang off the same two enzymes: methanol and ethylene glycol are ADH substrates whose PRODUCTS are the poisons (formic acid — blindness; oxalic acid — renal crystals and hypocalcemia), so the antidote is stopping ADH (fomepizole preferred; IV ethanol exploits ADH's higher affinity for ethanol). Disulfiram weaponizes the second step for aversion — ALDH blockade concentrates acetaldehyde into hangover symptoms after any slip. The female-susceptibility triad (↓gastric ADH, ↓body size, ↓% body water) explains dose-for-difference pharmacology without invoking any mythology.",
      ],
    },
  ],
  drugs: [
    {
      drug: "Fomepizole",
      klass: "Antidote — toxic alcohols",
      target: "Alcohol dehydrogenase (competitive inhibition)",
      mechanism: "Blocks metabolism of methanol and ethylene glycol to their toxic metabolites (formic acid, glycolic/oxalic acid)",
      effect: "Parent alcohols accumulate and undergo renal (and later ADH-independent) clearance; acidosis halts",
      uses: "Preferred antidote for methanol or ethylene glycol overdose",
      adverse: "Headache, nausea, rash (mild); watch for the alcohol still present",
      clue: "Visual changes + anion-gap acidosis (methanol) or crystalluria/hypocalcemia (ethylene glycol)",
    },
    {
      drug: "Ethanol (IV / oral, therapeutic)",
      klass: "Antidote — toxic alcohols (alternative)",
      target: "Alcohol dehydrogenase (competitive substrate)",
      mechanism: "ADH has higher affinity for ethanol than for methanol or ethylene glycol → ethanol competitively inhibits their oxidation",
      effect: "Same protection as fomepizole when fomepizole is unavailable",
      uses: "Alternative antidote for methanol/ethylene glycol poisoning",
      adverse: "Intoxication itself — requires monitoring; hypoglycemia in the malnourished",
      clue: "Resource-limited toxicology; the mechanism question behind fomepizole",
    },
    {
      drug: "Disulfiram",
      klass: "Aversion therapy — alcohol use disorder",
      target: "Acetaldehyde dehydrogenase (inhibition)",
      mechanism: "Blocks acetaldehyde → acetate; acetaldehyde accumulates with any ethanol intake",
      effect: "↑ acetaldehyde → flushing, headache, nausea, vomiting, hypotension — hangover symptoms → discourages drinking",
      uses: "Alcohol aversion therapy in selected, motivated patients",
      adverse: "The acetaldehyde reaction itself (severe with large loads); hepatitis (rare)",
      clue: "Patient drinks while on therapy → flushing and vomiting (also with metronidazole, some cephalosporins)",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 48-year-old man with chronic alcohol use disorder, 4 days of vomiting and negligible intake, presents with tachypnea; labs show anion-gap metabolic acidosis with elevated lactate and positive ketones, and glucose 52 mg/dL.",
        discriminator: "Lactate + ketones + hypoglycemia in a fasting drinker",
        concept: "↑NADH/NAD+ ratio consequences",
        answer: "Ethanol metabolism ↑ the NADH/NAD+ ratio: lactic acidosis (↑pyruvate → lactate), fasting hypoglycemia (↓gluconeogenesis from ↑OAA → malate), ketoacidosis (acetyl-CoA into ketogenesis with TCA inhibited) — with dextrose + thiamine and electrolyte repletion",
      },
      {
        stem: "A weekend binge drinker who ate nothing since Friday is found unconscious Saturday morning with glucose 38 mg/dL and no response to glucagon.",
        discriminator: "Fasting hypoglycemia with no gluconeogenesis",
        concept: "NADH-blocked gluconeogenesis",
        answer: "↓ gluconeogenesis due to ↑ conversion of OAA to malate — the ethanol-fed liver cannot rebuild glucose; give dextrose (with thiamine before it, per the B1 note)",
      },
      {
        stem: "A factory worker presents with blurred vision and anion-gap acidosis after ingesting windshield de-icer; urine microscopy shows needle-shaped crystals with low calcium.",
        discriminator: "Methanol (visual) vs ethylene glycol (crystals, hypocalcemia) — both ADH substrates",
        concept: "Toxic alcohol metabolism — the antidote",
        answer: "Fomepizole — competitive inhibitor of alcohol dehydrogenase; preferred antidote for overdoses of methanol or ethylene glycol (alternative: ethanol, since ADH has higher affinity for ethanol than for methanol or ethylene glycol)",
      },
      {
        stem: "A patient in an alcohol treatment program has a glass of wine and 20 minutes later is flushed, nauseated, headache-ridden, and mildly hypotensive.",
        discriminator: "Acetaldehyde reaction after ethanol",
        concept: "Disulfiram mechanism",
        answer: "Disulfiram blocks acetaldehyde dehydrogenase → acetaldehyde accumulates → hangover symptoms → discourages drinking (metronidazole and some cephalosporins can reproduce it)",
      },
      {
        stem: "A chronic heavy drinker needs twice the usual dose of a CYP2E1-metabolized sedative for effect; a first-time drinker of equal size gets drunk faster after the same dose as her male friend.",
        discriminator: "Enzyme induction + first-pass sex difference",
        concept: "CYP2E1 induction and female susceptibility",
        answer: "Chronic use induces microsomal CYP2E1 (NADPH → NADP+ + ROS) → tolerance to CYP2E1 substrates and ROS hepatotoxicity; females: ↓gastric alcohol dehydrogenase, ↓body size, ↓percentage of body water → higher levels per dose",
      },
    ],
    traps: [
      {
        a: "Fomepizole (ADH inhibitor)",
        b: "Disulfiram (ALDH inhibitor)",
        whyConfused: "Both block ethanol-pathway enzymes.",
        keyDifference: "Fomepizole blocks alcohol dehydrogenase (the FIRST step) — used for methanol/ethylene glycol; disulfiram blocks acetaldehyde dehydrogenase (the SECOND step) — used for aversion; acetaldehyde (not acetate) accumulates with disulfiram.",
        clue: "Antidote → fomepizole; aversion → disulfiram.",
      },
      {
        a: "Alcoholic ketoacidosis",
        b: "Diabetic ketoacidosis",
        whyConfused: "Both: anion-gap acidosis with ketones.",
        keyDifference: "Alcoholic: modest glucose (often low — NADH-blocked gluconeogenesis), history of binge + starvation, lactate contributes; DKA: hyperglycemia, no ethanol history, insulin deficient.",
        clue: "The glucose separates them — low in the alcoholic, high in DKA.",
      },
      {
        a: "Fasting hypoglycemia of alcohol overuse",
        b: "Insulin-induced hypoglycemia",
        whyConfused: "Both present obtunded with low glucose.",
        keyDifference: "Alcohol's hypoglycemia is gluconeogenesis-blocked (OAA → malate): it follows a fast or glycogen-depleted state and responds to dextrose; insulin hypoglycemia has C-peptide/insulin evidence.",
        clue: "The overnight-fast-after-binge history and the absent insulin story.",
      },
      {
        a: "Ethanol as an antidote",
        b: "Ethanol as the poison",
        whyConfused: "Same molecule, opposite roles.",
        keyDifference: "As ADH's preferred substrate (higher affinity than methanol/ethylene glycol), therapeutic ethanol competitively protects the toxic alcohol from oxidation; ethanol itself is only the intoxicant when the question is about the patient's own drinking.",
        clue: "The question's subject is the other alcohol — ethanol is the helper.",
      },
    ],
    pivots: [
      {
        lookAlike: "An 'anion-gap acidosis in an alcoholic' stem offering alcoholic ketoacidosis, lactic acidosis, and toxic alcohol ingestion",
        differentiator: "The full laboratory pattern and exposures",
        correctPath: "Binge + starvation + both lactate and ketones, glucose low-normal → alcoholic ketoacidosis with the NADH/NAD+ machinery; visual loss or crystalluria → methanol or ethylene glycol (antidote: fomepizole); isolated lactate with shock → lactic acidosis of the underlying illness.",
      },
      {
        lookAlike: "A 'flushing after alcohol' stem offering disulfiram, alcohol flush reaction (ALDH2 polymorphism), and carcinoid",
        differentiator: "The medication list and ethnicity/genetics",
        correctPath: "Programmed aversion or recent metronidazole/cephalosporin → disulfiram-like reaction; East Asian patient with lifelong flushing (inactive ALDH2) → alcohol flush reaction; flushing with diarrhea/wheeze and ↑5-HIAA → carcinoid.",
      },
    ],
    miniCase: {
      vignette:
        "A 45-year-old man with a 20-year history of alcohol use disorder is brought in after being found confused at home. Per family, he drank heavily for 3 days and ate almost nothing. He is tachypneic and mildly icteric with a tender, enlarged liver. Labs: glucose 44 mg/dL, sodium 138, chloride 96, bicarbonate 10, anion gap 32; lactate elevated; serum ketones positive; blood ethanol 60 mg/dL; AST:ALT 3:1 with AST ~350; blood pressure 104/62 with warm extremities.",
      question: "Which of the following best explains the combination of hypoglycemia, acidosis, and liver findings?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Ethanol oxidation raised the hepatic NADH/NAD+ ratio: pyruvate → lactate, OAA → malate (blocking gluconeogenesis), acetyl-CoA into ketogenesis, and DHAP → glycerol-3-P plus fatty-acid synthesis → triglycerides in the liver",
          why: "Correct. All four consequences of the single ratio are on display: lactate (anion-gap acidosis arm 1), ketones (arm 2 — TCA inhibited), fasting hypoglycemia (arm 3 — gluconeogenesis starved of OAA), and the tender fatty liver with the 4A/4B triglyceride assembly (arm 4). The binge-with-no-food history supplies the fasting half of the hypoglycemia.",
        },
        {
          label: "B",
          text: "Insulinoma with protracted endogenous hyperinsulinemia",
          why: "Insulinoma causes fasting hypoglycemia but not anion-gap acidosis, ketosis would be SUPPRESSED by insulin, and there is no explanation for the tender hepatomegaly or the elevated lactate — the pattern needs a metabolic shift, not a hormone excess.",
        },
        {
          label: "C",
          text: "Diabetic ketoacidosis precipitated by pancreatitis",
          why: "DKA gives hyperglycemia (not 44 mg/dL) — the glucose direction is the discriminator; DKA patients also lack the elevated lactate and the dose-history of NADH generation.",
        },
        {
          label: "D",
          text: "Methanol ingestion with formic acid accumulation",
          why: "Methanol gives anion-gap acidosis, but its signatures are visual symptoms (retina) and basal ganglia injury — not fasting hypoglycemia or tender fatty liver; and the blood ethanol of 60 mg/dL shows his own ethanol at work, not a competing toxic alcohol.",
        },
        {
          label: "E",
          text: "Sepsis with warm shock and type A lactic acidosis",
          why: "Warm extremities and hypotension could suggest distributive shock, but sepsis does not explain the ketosis, the fasting hypoglycemia with a clear ingestion history, the 3:1 transaminase pattern, or the tender liver — and the combined four-arm pattern is the NADH/NAD+ fingerprint.",
        },
      ],
      reasoning:
        "The vignette deliberately stacks all four arms of the source's consequence figure onto one patient: anion gap 32 with lactate AND ketones, glucose 44 after a fast (gluconeogenesis blocked at OAA → malate), and a tender fatty liver (DHAP → glycerol-3-P [4A] + acetyl-CoA → fatty acids [4B] → triglycerides) with the AST-predominant hepatitis. CLUE → MECHANISM → FINDING → DIAGNOSIS → MANAGEMENT: binge + starvation + acidosis + hypoglycemia + tender liver → NAD+ drained to NAD+ -limiting → lactate/ketones/no-gluconeogenesis/lipogenesis → ethanol metabolism's ↑NADH/NAD+ consequences → dextrose AND thiamine before the glucose, electrolytes, and alcohol-withdrawal watch (the B1 note's order-of-operations rule rides along).",
    },
  },
  mnemonics: [
    {
      code: "“NADH is the hangover's accountant: lactate, no glucose, ketones, fat”",
      meaning: "The ↑NADH/NAD+ ratio bills four organs: lactate ↑ (acidosis), gluconeogenesis ↓ (fasting hypoglycemia), ketogenesis ↑ (ketoacidosis), triglycerides ↑ (hepatosteatosis).",
      memorizes: "The four consequences of the NADH/NAD+ shift",
      whenToUse: "Any alcoholic-with-abnormal-labs stem.",
      clinical: "Treat with dextrose + thiamine + fluids; the ratio normalizes as ethanol clears (zero-order).",
    },
    {
      code: "“4A the backbone, 4B the fill”",
      meaning: "Hepatosteatosis markers from the source figure: 4A = DHAP → glycerol-3-P (the triglyceride backbone); 4B = acetyl-CoA → fatty acids (the fill) — together, triglycerides.",
      memorizes: "The 4A/4B pair on the fatty-liver arm",
      whenToUse: "Fatty-liver mechanism questions with the figure's numbered markers.",
      clinical: "The earliest liver lesion of alcohol use — precedes hepatitis and cirrhosis.",
    },
    {
      code: "“Fomepizole freezes the first; disulfiram damns the second”",
      meaning: "Fomepizole blocks ADH (first step — the toxic-alcohol antidote); disulfiram blocks ALDH (second step — aversion therapy, acetaldehyde accumulates).",
      memorizes: "Which drug blocks which ethanol enzyme",
      whenToUse: "Antidote and aversion questions.",
      clinical: "ADH's higher affinity for ethanol is why IV ethanol can substitute for fomepizole.",
    },
  ],
  rapidReview: {
    s30: [
      "Ethanol → acetaldehyde via ADH (cytosol, NAD+ → NADH; fomepizole ⊟), CYP2E1 (microsome, NADPH → NADP+ + ROS), catalase (peroxisome, H2O2 → H2O); acetaldehyde → acetate via ALDH (mitochondria, NAD+ → NADH; disulfiram ⊟); acetate → acetyl-CoA.",
      "NAD+ is the limiting reagent; alcohol dehydrogenase operates via zero-order kinetics.",
      "↑NADH/NAD+ causes: lactic acidosis (↑pyruvate → lactate), fasting hypoglycemia (↑OAA → malate, ↓gluconeogenesis), ketoacidosis (acetyl-CoA → ketogenesis, TCA inhibited), hepatosteatosis (↑DHAP → glycerol-3-P [4A] + acetyl-CoA → fatty acids [4B] → triglycerides).",
      "Females more susceptible: ↓gastric ADH activity, ↓body size, ↓percentage of body water.",
      "Fomepizole: competitive ADH inhibitor — preferred antidote for methanol or ethylene glycol; ethanol itself can competitively inhibit ADH (higher affinity for ethanol).",
      "Disulfiram: blocks ALDH → ↑acetaldehyde → ↑hangover symptoms → discourages drinking.",
    ],
    m3: [
      "CYP2E1 is induced by chronic use — the drug-interaction engine and ROS source of the chronic drinker.",
      "Catalase is the minor peroxisomal route — it consumes H2O2 rather than NAD+.",
      "The TCA inhibition is RATIO-driven (NADH product inhibition) — the cycle is not damaged, just throttled.",
      "Ketogenesis arm shares acetyl-CoA with the lipogenesis arm — the diverted carbon decides ketoacids vs fat by the liver's redox and energy state.",
    ],
    m10: [
      "Fasting is the trigger for the hypoglycemia — glycogen depletes, gluconeogenesis is NADH-blocked, glucose falls overnight (the 3 a.m. crash).",
      "Both acid arms (lactate + ketones) coexist in alcoholic ketoacidosis — the double-anion-gap contribution.",
      "AST:ALT ~2:1 or higher with AST 300-400 is the alcoholic hepatitis signature riding on the steatosis base.",
      "Methanol → formic acid (retina, basal ganglia); ethylene glycol → oxalic acid (crystals, hypocalcemia) — the metabolites are the poison, so ADH blockade is the cure.",
      "Metronidazole and some cephalosporins cause disulfiram-like reactions — counsel accordingly.",
      "Zero-order kinetics: constant clearance per unit time — no half-life logic applies to ethanol dosing or observation windows.",
    ],
  },
  recall: [
    {
      q: "Name the four ethanol-metabolizing enzymes with their compartments and cofactor pairs.",
      a: "Alcohol dehydrogenase — cytosol, NAD+ → NADH; CYP2E1 — microsome, NADPH → NADP+ (+ ROS); catalase — peroxisome, H2O2 → H2O; acetaldehyde dehydrogenase — mitochondria, NAD+ → NADH. Acetate then becomes acetyl-CoA.",
    },
    {
      q: "What are the four consequences of the ↑NADH/NAD+ ratio and the mechanism of each?",
      a: "Lactic acidosis — ↑pyruvate conversion to lactate. Fasting hypoglycemia — ↓gluconeogenesis due to ↑conversion of OAA to malate. Ketoacidosis — acetyl-CoA diverted into ketogenesis rather than the TCA cycle (the cycle is inhibited). Hepatosteatosis — ↑conversion of DHAP to glycerol-3-P (4A) and acetyl-CoA into fatty acids (4B), combining into triglycerides.",
    },
    {
      q: "Why are females more susceptible to the effects of alcohol?",
      a: "↓ activity of gastric alcohol dehydrogenase (less first-pass metabolism), ↓ body size, and ↓ percentage of water in body weight — a given dose yields a higher blood level and more unmetabolized absorption.",
    },
    {
      q: "How do fomepizole and ethanol each treat methanol or ethylene glycol poisoning?",
      a: "Fomepizole is a competitive inhibitor of alcohol dehydrogenase — the preferred antidote; ethanol itself is an alternative competitive inhibitor because ADH has higher affinity for ethanol than for methanol or ethylene glycol — either strategy halts formation of the toxic metabolites while the parent alcohol is cleared.",
    },
    {
      q: "What is disulfiram's mechanism and intended effect?",
      a: "Blocks acetaldehyde dehydrogenase → acetaldehyde accumulates → hangover symptoms (flushing, nausea, headache, hypotension) after any ethanol intake → discourages drinking.",
    },
    {
      q: "Define the kinetics of ADH and name the limiting reagent.",
      a: "Alcohol dehydrogenase operates via zero-order kinetics — a constant amount of ethanol is metabolized per unit time regardless of concentration; NAD+ is the limiting reagent.",
    },
  ],
  related: [
    {
      title: "Vitamins B1, B2, B3 & B5",
      note: "Thiamine before dextrose — the alcoholic-hypoglycemia management rule this note's emergency depends on, plus Wernicke-Korsakoff from the same population.",
      topicId: "b-vitamins-1",
    },
    {
      title: "Vitamin C, Zinc & Protein-Energy Malnutrition",
      note: "The malnutrition states that accompany chronic alcohol overuse and complete the alcoholic patient's vitamin economy.",
      topicId: "vitamin-c-zinc-pem",
    },
    {
      title: "Glycolysis Regulation",
      note: "The DHAP, glycerol-3-P, and pyruvate nodes on the consequences map are the glycolysis/gluconeogenesis metabolites the metabolism notes detail.",
      topicId: "glycolysis-regulation",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology",
      connection: "Fomepizole and therapeutic ethanol (toxic-alcohol antidotes) and disulfiram (aversion therapy) are this page's drug armamentarium; CYP2E1 induction drives chronic drinkers' drug interactions.",
    },
    {
      subject: "Gastrointestinal",
      connection: "Hepatosteatosis → alcoholic hepatitis → cirrhosis — the fatty liver is the first rung of the alcohol liver-disease ladder.",
    },
    {
      subject: "Endocrinology",
      connection: "Fasting hypoglycemia from blocked gluconeogenesis — the ethanol-fed liver mimics the metabolic crisis of fasting metabolism.",
    },
    {
      subject: "Emergency Medicine / Toxicology",
      connection: "Anion-gap acidosis differentiation (lactate, ketones, toxic alcohols) and the visual/crystalline signatures of methanol vs ethylene glycol.",
    },
  ],
};
