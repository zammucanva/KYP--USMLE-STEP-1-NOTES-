import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 7).
// Source: First Aid 2026, Part 1 pdf 100–101 / book 78–79 (disorders of
// fructose metabolism: essential fructosuria vs hereditary fructose
// intolerance; disorders of galactose metabolism: galactokinase deficiency
// vs classic galactosemia — both with their pathway figures)

export const fructoseGalactoseDisorders: KypUsMLENote = {
  id: "fructose-galactose-disorders",
  title: "Disorders of Fructose & Galactose Metabolism",
  subtitle:
    "Two sugars, four recessive diseases: fructokinase failure is benign essential fructosuria while aldolase B failure poisons the liver with fructose-1-P; galactokinase failure is the 'kinder' galactosemia with cataracts while uridylyltransferase failure is the classic one — failure to thrive, hepatomegaly, E coli sepsis — with the aldose-reductase escape to galactitol explaining every lens.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — Disorders of fructose and galactose metabolism",
  difficulty: 2,
  readTime: 12,
  sourceRef:
    "First Aid 2026, Part 1 pp. 78–79 (disorders of fructose metabolism: essential fructosuria, hereditary fructose intolerance; disorders of galactose metabolism: galactokinase deficiency, classic galactosemia; lactase deficiency)",
  tags: [
    "essential fructosuria",
    "fructokinase",
    "hereditary fructose intolerance",
    "aldolase B",
    "fructose-1-phosphate",
    "reducing sugar",
    "galactokinase deficiency",
    "classic galactosemia",
    "uridylyltransferase",
    "galactose-1-phosphate",
    "galactitol",
    "infantile cataracts",
    "hepatomegaly",
    "failure to thrive",
    "E coli sepsis",
    "intellectual disability",
    "reducing sugars",
    "sucrose",
    "lactose",
    "lactase",
  ],
  core: {
    what: "The fructose disorders: essential fructosuria — fructokinase deficiency (autosomal recessive); fructose is not trapped into cells and hexokinase becomes the 1° pathway for converting fructose to fructose-6-phosphate; asymptomatic and benign ('fructokinase deficiency is kinder'), with fructose appearing in blood and urine; the urine dipstick is ⊝ (tests for glucose only) but reducing sugar can be detected (nonspecific test for inborn errors of carbohydrate metabolism). Hereditary fructose intolerance — aldolase B deficiency (autosomal recessive); fructose-1-phosphate accumulates → ↓ available phosphate → inhibition of glycogenolysis and gluconeogenesis; hypoglycemia, jaundice, cirrhosis, vomiting, with symptoms only after consumption of fruit, juice, or honey; treatment is ↓ intake of fructose, sucrose (glucose + fructose), and sorbitol (metabolized to fructose). The galactose disorders: galactokinase deficiency (autosomal recessive) — relatively mild/benign ('galactokinase deficiency is kinder'); galactitol accumulates if diet has galactose; galactose appears in blood (galactosemia) and urine (galactosuria) with infantile cataracts — may present as failure to track objects or develop social smile. Classic galactosemia — galactose-1-phosphate uridylyltransferase deficiency (autosomal recessive); damage caused by accumulation of toxic substances (eg, galactitol); symptoms start when the infant is fed formula or breast milk: failure to thrive, jaundice, hepatomegaly, infantile cataracts (galactitol deposition in eye lens), intellectual disability; can predispose neonates to E coli sepsis. Both galactose diseases are treated by excluding galactose and lactose (galactose + glucose) from the diet.",
    why: "These four diseases are the exam's favorite sugar-disorder quartet: two benign enzyme blocks and two poisonous ones, each pair sharing a pathway, all autosomal recessive, each with a one-word discriminator (dipstick, phosphate, cataract, sepsis). The galactitol lens story also previews the polyol pathway's osmotic logic.",
    keyIdea: "Rank the four by how far the sugar travels before the block. Fructokinase failure: fructose never gets phosphorylated, floats out in urine — benign. Aldolase B failure: fructose-1-P is made but cannot split, and the trapped phosphate bankrolls nothing — glycogenolysis and gluconeogenesis are inhibited and the liver pays (hypoglycemia, jaundice, cirrhosis, vomiting after fruit, juice, or honey). Galactokinase failure: galactose circulates and aldose reductase converts it to galactitol in the lens — infantile cataracts, otherwise kind. Uridylyltransferase failure: galactose-1-P piles up in front of the Leloir bottleneck and every fed milk meal manufactures toxins — failure to thrive, jaundice, hepatomegaly, cataracts, intellectual disability, E coli sepsis. The 'kinder' mnemonic pair — fructokinase is kinder, galactokinase is kinder — marks the two benign kinases.",
  },
  mechanisms: [
    {
      id: "fructose-blocks",
      title: "Fructose — a benign spill vs a phosphate trap",
      context: "Dietary fructose exposure (fruit, juice, honey, sucrose, sorbitol)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Fructose from fruit, juice, honey, or sucrose enters the portal circulation",
            sublabel: "Input — symptoms in the intolerant appear only after consumption.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Fructokinase traps fructose as fructose-1-phosphate (ATP → ADP)",
            sublabel: "Process — the normal first step; essential fructosuria lacks it.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Aldolase B splits fructose-1-P into glyceraldehyde + dihydroxyacetone-P → glycolysis",
            sublabel: "Process — the normal second step; hereditary fructose intolerance lacks it.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Normal disposal: glyceraldehyde-3-P enters glycolysis; glycerol from glyceraldehyde",
            sublabel: "Output — the intact pathway.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Fructokinase ⊟ — fructose not trapped; hexokinase becomes the 1° pathway; benign fructosuria",
            sublabel: "Inhibitor — reducing sugar in urine; dipstick ⊝ (tests glucose only).",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Aldolase B ⊟ — fructose-1-P accumulates → ↓ available phosphate → glycogenolysis and gluconeogenesis inhibited",
            sublabel: "Inhibitor — hypoglycemia, jaundice, cirrhosis, vomiting.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "fructose" },
          { from: "s1", to: "s2", label: "fructose-1-P" },
          { from: "s2", to: "o1", label: "triose phosphates" },
          { from: "x1", to: "s1", type: "inhibit", label: "fructokinase ⊟" },
          { from: "x2", to: "s2", type: "inhibit", label: "aldolase B ⊟" },
        ],
        caption:
          "The two fructose diseases are one pathway with two different failure depths. Fail at the kinase (essential fructosuria) and fructose simply is not trapped — it spills into blood and urine benignly, hexokinase picks up the slack, and the only finding is a reducing sugar the dipstick cannot see. Fail at aldolase B (hereditary fructose intolerance) and the cell manufactures fructose-1-P it cannot split: the accumulating ester sequesters available phosphate, shutting down glycogenolysis and gluconeogenesis — the infant vomits, becomes hypoglycemic, and progressively damages the liver with every fruit, juice, or honey exposure. Treatment removes the substrate: ↓ fructose, sucrose, and sorbitol.",
      },
    },
    {
      id: "galactose-blocks",
      title: "Galactose — a kind kinase failure vs the classic transferase poisoning",
      context: "Dietary lactose (breast milk, formula)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Lactose (galactose + glucose) from breast milk or formula feeds the newborn",
            sublabel: "Input — classic galactosemia declares itself when milk feeding begins.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Galactokinase traps galactose as galactose-1-phosphate (ATP → ADP)",
            sublabel: "Process — failure here is the mild disease.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Uridylyltransferase converts galactose-1-P to glucose-1-P (UDP-Glu → UDP-Gal; 4-epimerase regenerates UDP-Glu)",
            sublabel: "Process — the Leloir bottleneck; failure here is the classic disease.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Glucose-1-P → glycolysis / glycogenesis",
            sublabel: "Output — milk sugar becomes usable glucose.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Aldose reductase escape: galactose → galactitol (osmotically active, deposits in lens)",
            sublabel: "Escape — runs in both diseases; explains the cataracts.",
            variant: "inhibit",
          },
          {
            id: "x2",
            label: "Uridylyltransferase ⊟ — toxic substances accumulate (eg, galactitol): failure to thrive, jaundice, hepatomegaly, intellectual disability, E coli sepsis",
            sublabel: "Inhibitor — classic galactosemia.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "galactose" },
          { from: "s1", to: "s2", label: "galactose-1-P" },
          { from: "s2", to: "o1", label: "glucose-1-P" },
          { from: "x1", to: "o1", type: "inhibit", label: "galactitol dead end" },
          { from: "x2", to: "s2", type: "inhibit", label: "transferase ⊟" },
        ],
        caption:
          "The galactose pair mirrors the fructose pair but with milk as the trigger. Galactokinase failure is kind: untrapped galactose circulates (galactosemia, galactosuria) and aldose reductase slowly converts it to galactitol — enough to cloud an infant lens (failure to track objects, absent social smile) but little else. Uridylyltransferase failure is the classic poisoning: galactose-1-P and galactitol accumulate together, and every milk feed adds failure to thrive, jaundice, hepatomegaly, cataracts, intellectual disability, and a predisposition to E coli sepsis. Both are treated by excluding galactose and lactose from the diet — the difference is how much damage occurs before the diet changes.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "fructose-metabolism-map",
      title: "Fructose metabolism — the pathway and its two deficiency diseases",
      caption:
        "The source pathway: fructose → (fructokinase, ATP → ADP) → fructose-1-P → (aldolase B) → dihydroxyacetone-P + glyceraldehyde; DHAP reaches glyceraldehyde-3-P via triose phosphate isomerase, glyceraldehyde via triose kinase (ATP → ADP); glyceraldehyde also reduces to glycerol (NADH → NAD+); glyceraldehyde-3-P enters glycolysis. The panels below carry the two diseases verbatim: benign essential fructosuria (dipstick ⊝, reducing sugar detectable, hexokinase becomes the 1° pathway) and hereditary fructose intolerance (fructose-1-P accumulation → ↓phosphate → inhibited glycogenolysis and gluconeogenesis; hypoglycemia, jaundice, cirrhosis, vomiting after fruit/juice/honey; treat by cutting fructose, sucrose, and sorbitol).",
      notice:
        "Locate each disease on the map before memorizing its features: fructokinase deficiency strikes the FIRST arrow (substrate never trapped — spill, benign), aldolase B deficiency strikes the SECOND (substrate trapped but not split — phosphate sequestered, liver poisoned). The depth of the block predicts the severity: spillage is kind, trapping is toxic.",
    },
    {
      kind: "visual",
      visualId: "galactose-leloir-map",
      title: "Galactose metabolism — the Leloir pathway and the aldose-reductase escape",
      caption:
        "The source pathway: galactose → (galactokinase, ATP → ADP) → galactose-1-P → (uridylyltransferase, UDP-Glu → UDP-Gal) → glucose-1-P → glycolysis/glycogenesis, with 4-epimerase regenerating UDP-Glu from UDP-Gal; the aldose-reductase escape converts galactose directly to osmotically active galactitol. The panels carry both diseases verbatim: the kinder galactokinase deficiency (galactosemia + galactosuria + infantile cataracts, failure to track or smile) and classic galactosemia (toxic accumulation: failure to thrive, jaundice, hepatomegaly, cataracts, intellectual disability, E coli sepsis — starting with formula or breast milk).",
      notice:
        "The dashed UDP recycle is why the pathway is called the Leloir pathway — the uridine shuttle hands UDP from glucose to galactose and epimerase hands it back. Then find the one-way aldose-reductase arrow in red: it exists in every patient, which is why BOTH diseases make cataracts — the lens converts whatever galactose it sees into galactitol, and osmosis does the rest.",
    },
    {
      kind: "compare",
      title: "The four diseases, side by side",
      intro: "The source's two comparison tables as one four-row ledger.",
      columns: ["Fructokinase ⊟ (essential fructosuria)", "Aldolase B ⊟ (hereditary fructose intolerance)"],
      rows: [
        { label: "Inheritance", a: "Autosomal recessive", b: "Autosomal recessive" },
        { label: "Pathophysiology", a: "Fructose not trapped; hexokinase becomes 1° pathway to fructose-6-P", b: "Fructose-1-P accumulates → ↓ available phosphate → inhibition of glycogenolysis and gluconeogenesis" },
        { label: "Presentation", a: "Asymptomatic, benign — 'fructokinase deficiency is kinder'; fructose in blood and urine", b: "Hypoglycemia, jaundice, cirrhosis, vomiting — only after fruit, juice, or honey" },
        { label: "Urine clue", a: "Dipstick ⊝ (tests glucose only); reducing sugar detectable", b: "Reducing sugar after fructose exposure" },
        { label: "Treatment", a: "None needed (benign)", b: "↓ fructose, sucrose (glucose + fructose), sorbitol (metabolized to fructose)" },
      ],
    },
    {
      kind: "compare",
      title: "The galactose pair",
      intro: "",
      columns: ["Galactokinase ⊟ (the kinder one)", "Uridylyltransferase ⊟ (classic galactosemia)"],
      rows: [
        { label: "Inheritance", a: "Autosomal recessive", b: "Autosomal recessive" },
        { label: "Pathophysiology", a: "Galactitol accumulates if diet has galactose (mild)", b: "Damage from accumulation of toxic substances (eg, galactitol)" },
        { label: "Presentation", a: "Relatively mild/benign; galactosemia + galactosuria; infantile cataracts — failure to track objects or develop social smile", b: "Failure to thrive, jaundice, hepatomegaly, infantile cataracts (galactitol in lens), intellectual disability; E coli sepsis predisposition" },
        { label: "Trigger", a: "Galactose exposure", b: "Formula or breast milk (lactose)" },
        { label: "Treatment", a: "Exclude galactose and lactose", b: "Exclude galactose and lactose" },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The dipstick and the reducing sugar — the cheapest discriminator",
      body:
        "Urine dipstick tests for glucose only — so fructose (and galactose) escape it: dipstick ⊝ with a positive reducing-sugar test (Clinitest-type, nonspecific for inborn errors of carbohydrate metabolism) means a non-glucose sugar is spilling. That single combination points at the kinder kinase failures before any enzyme assay.",
    },
    {
      kind: "text",
      title: "Lactase deficiency — the milk reaction that mimics none of these",
      body: [
        "Lactase deficiency is insufficient lactase enzyme → dietary lactose intolerance. Lactase functions on the intestinal brush border to digest lactose (in milk and milk products) into glucose and galactose. Primary lactase deficiency is an age-dependent decline after childhood (absence of the lactase-persistent allele), common in people of Asian, African, or Native American descent; secondary lactase deficiency is loss of the intestinal brush border due to gastroenteritis (eg, rotavirus) or autoimmune disease; congenital lactase deficiency is rare, due to a defective gene.",
        "The findings are fermentation and osmosis: bloating, cramps, and flatulence (all due to fermentation of lactose by colonic bacteria → gas) and osmotic diarrhea (undigested lactose). Stool demonstrates ↓ pH and breath shows ↑ hydrogen content with the lactose hydrogen breath test (H+ is produced when colonic bacteria ferment undigested lactose). Intestinal biopsy reveals normal mucosa in patients with hereditary lactose intolerance — the enzyme is missing, the architecture is not. Treatment: avoid dairy products or add lactase pills to the diet; lactose-free milk.",
        "Unlike the four inborn errors above, lactase deficiency injures no organ: no cataracts, no liver disease, no intellectual disability — only the gut's noisy protest. It is the benign milk mimic that the 'kinder' galactokinase deficiency must be distinguished from when an infant tolerates lactose poorly without other findings.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "An infant or child vomits, becomes hypoglycemic, and develops jaundice/hepatomegaly after fruit, juice, or honey; symptoms never occur between exposures.",
        discriminator: "The exposure-dependent liver disease",
        concept: "Hereditary fructose intolerance (aldolase B)",
        answer: "Fructose-1-phosphate accumulates → ↓ available phosphate → inhibition of glycogenolysis and gluconeogenesis — hypoglycemia, jaundice, cirrhosis, vomiting; treat with ↓ fructose, sucrose, and sorbitol.",
      },
      {
        stem: "An asymptomatic child has fructose in blood and urine; the urine dipstick is negative.",
        discriminator: "Dipstick ⊝ + reducing sugar present",
        concept: "Essential fructosuria (fructokinase)",
        answer: "Benign — fructose is not trapped into cells; hexokinase becomes the 1° pathway; no treatment needed.",
      },
      {
        stem: "A newborn fed breast milk or formula fails to thrive with jaundice, hepatomegaly, cataracts, and intellectual disability — or presents with E coli sepsis.",
        discriminator: "Milk-triggered multi-organ toxicity",
        concept: "Classic galactosemia (uridylyltransferase)",
        answer: "Accumulation of toxic substances (eg, galactitol): exclude galactose and lactose from the diet.",
      },
      {
        stem: "An infant fails to track objects or develop a social smile; cataracts are found; growth and liver function are otherwise normal.",
        discriminator: "Isolated lens findings, mild course",
        concept: "Galactokinase deficiency",
        answer: "Relatively mild/benign — galactose appears in blood and urine; galactitol deposits in the lens; exclude galactose and lactose.",
      },
      {
        stem: "A question asks which sugar-management change treats hereditary fructose intolerance.",
        discriminator: "The three hidden fructose sources",
        concept: "Treatment substrate removal",
        answer: "Decrease intake of fructose, sucrose (glucose + fructose), and sorbitol (metabolized to fructose).",
      },
      {
        stem: "An adult of Asian, African, or Native American descent has bloating, cramps, flatulence, and osmotic diarrhea after dairy; a lactose hydrogen breath test is positive and biopsy shows normal mucosa.",
        discriminator: "Fermentation findings with normal gut architecture",
        concept: "Primary lactase deficiency",
        answer: "Age-dependent decline of brush-border lactase (absence of the lactase-persistent allele): colonic bacteria ferment undigested lactose → gas (↑ breath H+), ↓ stool pH, osmotic diarrhea. Avoid dairy or add lactase pills; lactose-free milk.",
      },
    ],
    traps: [
      {
        a: "Essential fructosuria",
        b: "Hereditary fructose intolerance",
        whyConfused: "Both are fructose enzyme deficiencies, both autosomal recessive.",
        keyDifference: "Fructokinase deficiency is kinder (benign spill); aldolase B deficiency traps fructose-1-P, sequesters phosphate, and poisons the liver after fruit, juice, or honey.",
        clue: "Symptomatic after fruit + hypoglycemia/cirrhosis → aldolase B.",
      },
      {
        a: "Galactokinase deficiency",
        b: "Classic galactosemia",
        whyConfused: "Both make galactitol and cataracts.",
        keyDifference: "Galactokinase deficiency is kinder — mild with cataracts and galactosuria; the transferase failure adds failure to thrive, jaundice, hepatomegaly, intellectual disability, and E coli sepsis.",
        clue: "A sick newborn on milk → classic; an infant who only fails to track/smile → kinase.",
      },
      {
        a: "Dipstick positive",
        b: "Dipstick negative with reducing sugar",
        whyConfused: "Sugar in urine sounds dipstick-detectable.",
        keyDifference: "The dipstick tests for glucose only — fructose and galactose require the nonspecific reducing-sugar test (an inborn-error screen).",
        clue: "Negative dipstick + positive Clinitest-type test.",
      },
      {
        a: "Lactase deficiency",
        b: "Classic galactosemia",
        whyConfused: "Both involve milk and both can present in infancy.",
        keyDifference: "Lactase deficiency (milk intolerance) causes bloating, cramps, flatulence, and osmotic diarrhea with normal mucosa on biopsy — no cataracts, no liver disease, no intellectual disability.",
        clue: "The dairy-cramps vs the sick-newborn toxidrome.",
      },
    ],
    pivots: [
      {
        lookAlike: "A newborn with vomiting + jaundice + hepatomegaly on milk feeds (galactosemia vs tyrosinemia vs fructose intolerance)",
        differentiator: "The trigger and the timing",
        correctPath:
          "Symptoms starting with formula or breast milk + cataracts ± E coli sepsis → classic galactosemia; symptoms only after fruit/juice/honey (weaning) → hereditary fructose intolerance; failure to thrive with cabbage-like odor + corneal/lens deposits → consider tyrosinemia or other inborn errors.",
      },
      {
        lookAlike: "An infant with cataracts (galactosemia vs galactokinase deficiency vs other lens disease)",
        differentiator: "How sick the baby is",
        correctPath:
          "Cataracts alone with mild disease → galactokinase deficiency; cataracts plus failure to thrive, jaundice, hepatomegaly, intellectual disability → classic galactosemia; isolated congenital cataracts with normal sugars → think otherwise.",
      },
    ],
    miniCase: {
      vignette:
        "A 10-day-old term infant, exclusively breastfed, is readmitted with poor feeding, weight loss, and increasing jaundice. Exam reveals hepatomegaly and an unusual lack of visual fixation — she does not track a face and has not yet developed a social smile. Total bilirubin is elevated with a direct component; liver enzymes are moderately raised. Two days into the workup, she spikes a fever and a urine culture grows E coli. Reducing substances are present in her urine while the standard urine dipstick reads negative for glucose.",
      question:
        "Which enzyme deficiency best explains this infant's course?",
      options: [
        {
          label: "A",
          text: "Galactose-1-phosphate uridyltransferase (classic galactosemia)",
          correct: true,
          why: "Correct — milk-triggered multi-organ disease: failure to thrive, jaundice, hepatomegaly, infantile cataracts (failure to track, no social smile), intellectual disability risk, and E coli sepsis predisposition, with a non-glucose reducing sugar in urine.",
        },
        {
          label: "B",
          text: "Galactokinase",
          why: "Tempting — the cataract story fits — but galactokinase deficiency is the kinder disease: isolated cataracts and galactosuria without the liver failure, poor growth, or sepsis.",
        },
        {
          label: "C",
          text: "Aldolase B (hereditary fructose intolerance)",
          why: "Also a toxic-sugar liver disease, but the trigger is fruit, juice, honey, or sucrose — not breast milk — and it does not predispose to E coli sepsis.",
        },
        {
          label: "D",
          text: "Lactase",
          why: "Lactase deficiency causes fermentation symptoms — bloating, cramps, osmotic diarrhea — not jaundice, hepatomegaly, or sepsis.",
        },
        {
          label: "E",
          text: "Fructokinase",
          why: "Essential fructosuria is benign and asymptomatic — it does not make a newborn sick.",
        },
      ],
      reasoning:
        "Three anchors: the trigger (breast milk = lactose = galactose + glucose), the multi-organ toxicity (growth failure, direct jaundice, hepatomegaly, lens), and the infection clue (E coli sepsis in a neonate with galactosemia). All three mark the Leloir bottleneck: uridylyltransferase — classic galactosemia — treated by excluding galactose and lactose.",
    },
  },
  mnemonics: [
    {
      code: "“The kinases are kinder”",
      meaning: "Fructokinase deficiency (essential fructosuria) and galactokinase deficiency are the benign, mild members of their pairs — the source's own 'kinder' line applied to both.",
      memorizes: "Which sugar enzyme deficiencies are benign",
      whenToUse: "Any benign-vs-toxic sugar disorder stem.",
      clinical: "Kinase failure = spill (benign); transferase/aldolase failure = trap (toxic).",
    },
    {
      code: "“Substrate removal: FSS — Fructose, Sucrose, Sorbitol”",
      meaning: "Hereditary fructose intolerance treatment cuts all three hidden fructose sources: fructose itself, sucrose (glucose + fructose), and sorbitol (metabolized to fructose).",
      memorizes: "The three-item fructose-restriction list",
      whenToUse: "Treatment questions for hereditary fructose intolerance.",
      clinical: "Sorbitol lurks in sugar-free products — a classic hidden exposure.",
    },
    {
      code: "“Milk makes classic galactosemia sick; the lens alone feels the kinase”",
      meaning: "Classic (transferase) galactosemia declares with milk feeds — failure to thrive, jaundice, hepatomegaly, intellectual disability, E coli sepsis; galactokinase deficiency mostly confines its damage to the infant lens (failure to track, no social smile).",
      memorizes: "The severity difference within the galactose pair",
      whenToUse: "Distinguishing the two galactosemias in vignettes.",
      clinical: "Both are treated by excluding galactose and lactose.",
    },
  ],
  rapidReview: {
    s30: [
      "Fructokinase ⊟ = essential fructosuria (benign); aldolase B ⊟ = HFI (toxic)",
      "Galactokinase ⊟ = mild, cataracts; transferase ⊟ = classic galactosemia (toxic)",
      "All four: autosomal recessive",
    ],
    m3: [
      "HFI: fructose-1-P accumulates → ↓phosphate → glycogenolysis + gluconeogenesis inhibited",
      "Dipstick ⊝ (glucose only); reducing sugar test catches fructose/galactose",
      "HFI treatment: ↓ fructose, sucrose, sorbitol",
    ],
    m10: [
      "Classic galactosemia: FTT, jaundice, hepatomegaly, cataracts, intellectual disability, E coli sepsis",
      "Galactitol (aldose reductase) explains cataracts in BOTH galactose diseases",
      "Treatment for both galactose diseases: exclude galactose and lactose",
    ],
  },
  recall: [
    {
      q: "Contrast the two fructose disorders: enzyme, pathophysiology, presentation.",
      a: "Essential fructosuria — fructokinase (AR), fructose not trapped (hexokinase becomes 1° pathway), asymptomatic/benign with fructose in blood and urine. Hereditary fructose intolerance — aldolase B (AR), fructose-1-P accumulates → ↓phosphate → inhibited glycogenolysis/gluconeogenesis; hypoglycemia, jaundice, cirrhosis, vomiting after fruit/juice/honey.",
    },
    {
      q: "What urine findings distinguish these diseases from glucosuria?",
      a: "Urine dipstick is ⊝ (tests for glucose only); reducing sugar can be detected in the urine — a nonspecific test for inborn errors of carbohydrate metabolism.",
    },
    {
      q: "How is hereditary fructose intolerance treated?",
      a: "Decrease intake of fructose, sucrose (glucose + fructose), and sorbitol (metabolized to fructose).",
    },
    {
      q: "Contrast the two galactose disorders.",
      a: "Galactokinase deficiency (AR) — mild/benign; galactose in blood and urine; infantile cataracts (failure to track, no social smile). Classic galactosemia — galactose-1-P uridylyltransferase (AR); toxic accumulation (eg, galactitol): failure to thrive, jaundice, hepatomegaly, infantile cataracts, intellectual disability, E coli sepsis predisposition; starts with formula or breast milk.",
    },
    {
      q: "Why do both galactose diseases cause cataracts?",
      a: "Aldose reductase converts galactose to osmotically active galactitol, which deposits in the eye lens — the escape route runs in both enzyme blocks.",
    },
    {
      q: "What is the treatment for both galactose disorders?",
      a: "Exclude galactose and lactose (galactose + glucose) from the diet.",
    },
    {
      q: "Walk the fructose pathway from fructose to glycolysis.",
      a: "Fructose → (fructokinase, ATP) → fructose-1-P → (aldolase B) → glyceraldehyde + dihydroxyacetone-P; DHAP → (triose phosphate isomerase) → glyceraldehyde-3-P; glyceraldehyde → (triose kinase, ATP) → glyceraldehyde-3-P → glycolysis (glyceraldehyde also → glycerol via NADH).",
    },
    {
      q: "Walk the Leloir pathway.",
      a: "Galactose → (galactokinase, ATP) → galactose-1-P → (uridylyltransferase; UDP-Glu → UDP-Gal) → glucose-1-P → glycolysis/glycogenesis; 4-epimerase regenerates UDP-Glu from UDP-Gal.",
    },
    {
      q: "Give lactase deficiency's three forms, its findings, and its biopsy result.",
      a: "Primary (age-dependent decline after childhood, common in Asian/African/Native American descent), secondary (brush-border loss from gastroenteritis or autoimmune disease), congenital (rare, defective gene). Findings: bloating, cramps, flatulence (bacterial fermentation → gas), osmotic diarrhea; ↓ stool pH, ↑ breath hydrogen on the lactose hydrogen breath test; biopsy shows normal mucosa. Treat: avoid dairy or lactase pills; lactose-free milk.",
    },
  ],
  related: [
    {
      title: "Glycogen Metabolism & Storage Diseases",
      topicId: "glycogen-metabolism",
      note: "Aldolase B's phosphate trap inhibits glycogenolysis — the HFI infant's fast hypoglycemia sits on top of the same glycogen machinery the storage diseases break.",
    },
    {
      title: "Glycolysis Regulation",
      topicId: "glycolysis-regulation",
      note: "Both sugar pathways converge on the triose phosphates — DHAP and glyceraldehyde-3-P — right where glycolysis' lower half begins.",
    },
    {
      title: "Sorbitol Pathway (Polyol Route)",
      topicId: "sorbitol-pathway",
      note: "The aldose-reductase escape making galactitol here is the same enzyme that makes sorbitol in diabetes — one enzyme, two osmotic diseases.",
    },
    {
      title: "Carbohydrate Digestion & Lactase Deficiency",
      topicId: "nutrition-fundamentals",
      note: "Lactose intolerance (bloating, cramps, osmotic diarrhea, normal mucosa) is the dairy reaction that mimics none of these inherited diseases' severity.",
    },
  ],
  crossLinks: [
    {
      subject: "Pediatrics",
      connection: "The newborn milk toxidrome — classic galactosemia on formula/breast milk with failure to thrive, jaundice, hepatomegaly, and E coli sepsis predisposition.",
    },
    {
      subject: "Ophthalmology",
      connection: "Infantile cataracts from galactitol deposition — the lens converts circulating galactose to an osmotic alcohol via aldose reductase.",
    },
    {
      subject: "Gastrointestinal Physiology",
      connection: "Lactase on the intestinal brush border releases the galactose + glucose that feeds these pathways — its deficiency is the benign milk mimic.",
    },
  ],
};
