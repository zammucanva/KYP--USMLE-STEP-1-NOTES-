import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 16).
// Source: First Aid 2026, Part 1 pdf 111 / book 89
// (metabolic fuel use; fasting and starvation)

export const metabolicFuelUse: KypUsMLENote = {
  id: "metabolic-fuel-use",
  title: "Metabolic Fuel Use & Starvation",
  subtitle:
    "Two fuel clocks — the exercise clock (stored ATP in seconds → creatine phosphate → anaerobic glycolysis near a minute → aerobic metabolism for the long haul, with overall performance settling low once only aerobic remains) and the starvation clock (fed storage → fasting hepatic glycogenolysis → days 1–3 gluconeogenesis with a glucose-to-FFA shift → after day 3 ketone bodies for the brain, ending when adipose stores run out and vital protein degradation accelerates toward organ failure and death).",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — fuel use during exercise, fed/fasting/starvation states, caloric density",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 89 (metabolic fuel use; fasting and starvation)",
  tags: [
    "metabolic fuel use",
    "duration of exercise",
    "stored ATP",
    "creatine phosphate",
    "anaerobic metabolism",
    "aerobic metabolism",
    "overall performance",
    "fed state",
    "fasting",
    "starvation",
    "glycogenolysis",
    "gluconeogenesis",
    "ketone bodies",
    "brain metabolism",
    "RBC fuel",
    "propionyl-CoA",
    "odd-chain fatty acids",
    "glycerol",
    "protein sparing",
    "caloric density",
    "kcal",
    "survival time",
  ],
  core: {
    what: "Metabolic fuel use runs on two clocks. The exercise clock (fig 7): % maximal energy by source against duration of exercise — stored ATP starts at 100% and is spent within seconds; creatine phosphate peaks between 2 and 10 seconds; anaerobic metabolism (glycogen → lactate) peaks near 1 minute; aerobic metabolism rises continuously and dominates after about a minute; overall performance starts at 100%, stays flat to roughly 10 seconds, then declines to a low plateau by 2 hours. The starvation clock (fig 8 + the states table): in the fed state, glycolysis and aerobic respiration run while insulin stimulates triglyceride and glycogen storage alongside protein synthesis; fasting between meals runs on hepatic glycogenolysis (major) with hepatic gluconeogenesis and adipose release of FFA (minor), driven by glucagon and epinephrine; starvation days 1–3 maintain blood glucose by hepatic glycogenolysis, adipose release of FFA, muscle and liver shifting fuel use from glucose to FFA, and hepatic gluconeogenesis from peripheral tissue lactate and alanine and from adipose tissue glycerol and propionyl-CoA (from odd-chain FFA — the only triacylglycerol component that contributes to gluconeogenesis), with glycogen reserves depleted after day 1; after day 3, adipose stores support ketone bodies as the main source of energy for the brain, and once these are depleted vital protein degradation accelerates, leading to organ failure and death — the amount of excess stores determines survival time. RBCs lack mitochondria and therefore cannot use ketone bodies. Caloric density: 1g carb/protein = 4 kcal, 1g alcohol = 7 kcal, 1g fatty acid = 9 kcal (# letters = # kcal).",
    why: "This page is the integration endpoint of every metabolism topic: glycogen, gluconeogenesis, fatty acids, and ketones all deposit their facts here on one timeline. The exam asks it three ways. First, duration-to-system mapping on the exercise graph — which fuel powers a 10-second sprint (phosphocreatine) versus a marathon (aerobic), and why overall performance cannot stay at 100% once the phosphate pools are spent. Second, the starvation state machine — fed, fasting, days 1–3, after day 3 — each with its dominant glucose source and hormonal driver; confusing day-1 glycogen depletion with the day-3 ketone shift is the classic trap. Third, the two asymmetries: RBCs strictly use glucose (no mitochondria, ever), and of the triglyceride's components only glycerol and odd-chain propionyl-CoA feed gluconeogenesis — even-chain FFA carbon cannot become glucose. The caloric-density triplet (4/7/9 kcal) rides along as an easy point.",
    keyIdea: "Read the page as two fuel clocks. The exercise clock hands off in order — stored ATP, creatine phosphate, anaerobic glycolysis, aerobic metabolism — each system covering the gap until the next is up to speed, while overall performance tracks the total power available. The starvation clock escalates by priority — supply sufficient glucose to the brain and RBCs and preserve protein — first spending glycogen (day 1), then manufacturing glucose from lactate, alanine, glycerol, and odd-chain propionyl-CoA while muscle and liver switch to FFA (days 1–3), then letting ketones carry the brain (after day 3) so that protein is spared as long as fat lasts. When the fat runs out, the body spends vital protein, and the graph's three declining curves become the countdown to organ failure and death.",
  },
  mechanisms: [
    {
      id: "exercise-fuel-handoff",
      title: "The exercise handoff — four systems in sequence, performance settling low",
      context: "Maximal effort from 2 seconds to 2 hours (fig 7)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Maximal exercise begins: the muscle's ATP demand is instant and total",
            sublabel: "Input — effort starts before any metabolic machinery can ramp up.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Stored ATP is spent within seconds; creatine phosphate regenerates ATP instantly, peaking between 2 and 10 seconds",
            sublabel: "Process — the phosphate pools cover the first ~10 seconds.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Anaerobic metabolism (glycogen → lactate) ramps to its peak near 1 minute",
            sublabel: "Process — fast carbohydrate ATP without oxygen.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Aerobic metabolism rises continuously and dominates after ~1 minute, sustaining effort to 2 hours and beyond",
            sublabel: "Process — slow but enormous capacity from oxidizing fuel reserves.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Overall performance: 100% at the start (phosphate pools at full), flat to ~10 seconds, then declining to a low plateau once only aerobic metabolism remains",
            sublabel: "Output — the sum of all available systems falls as each phosphate and glycolytic contribution fades.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "instant demand" },
          { from: "s1", to: "s2", label: "phosphate pools fade" },
          { from: "s2", to: "s3", label: "glycolysis hands off" },
          { from: "s3", to: "o1", label: "aerobic alone remains" },
        ],
        caption:
          "The exercise graph is a relay: stored ATP hands to creatine phosphate (both immediate, both tiny), which hands to anaerobic glycolysis of muscle glycogen (fast, ~1 minute of near-maximal power), which hands to aerobic metabolism (slow to ramp, but able to sustain submaximal effort for hours). Overall performance is the envelope of the four — it cannot stay at 100% because the phosphate pools are gone within seconds, and it settles toward the aerobic ceiling as duration lengthens.",
      },
    },
    {
      id: "starvation-fuel-escalation",
      title: "The starvation escalation — glucose guarded, protein spared, ketones last",
      context: "Fed → fasting → starvation days 1–3 → after day 3 (fig 8 + states table)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Intake stops. Priorities: supply sufficient glucose to the brain and RBCs and preserve protein",
            sublabel: "Input — the two priorities govern every escalation that follows.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Fasting (between meals): hepatic glycogenolysis (major); hepatic gluconeogenesis, adipose release of FFA (minor) — glucagon and epinephrine stimulate use of fuel reserves",
            sublabel: "Process — the hours-scale buffer is stored glycogen.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Starvation days 1–3: glycogen reserves depleted after day 1; muscle and liver shift fuel use from glucose to FFA; hepatic gluconeogenesis from peripheral tissue lactate and alanine, and from adipose glycerol and propionyl-CoA (odd-chain FFA — the only triacylglycerol component that contributes to gluconeogenesis)",
            sublabel: "Process — glucose is now manufactured while FFA spares the glucose consumers.",
            variant: "process",
          },
          {
            id: "s3",
            label: "After day 3: ketone bodies become the main source of energy for the brain, from adipose stores",
            sublabel: "Process — the brain switches fuels so protein is spared longer.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Adipose stores depleted → vital protein degradation accelerates → organ failure and death; the amount of excess stores determines survival time",
            sublabel: "Output — the stored-energy graph's three declining curves are the countdown.",
            variant: "output",
          },
          {
            id: "x1",
            label: "RBCs lack mitochondria and therefore cannot use ketone bodies — they strictly use glucose",
            sublabel: "Separator — one cell type anchors gluconeogenesis as mandatory for as long as life continues.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "hours" },
          { from: "s1", to: "s2", label: "glycogen gone after day 1" },
          { from: "s2", to: "s3", label: "day 3" },
          { from: "s3", to: "o1", label: "adipose stores run out" },
          { from: "x1", to: "s2", label: "RBCs force gluconeogenesis" },
        ],
        caption:
          "The starvation states are an escalation ladder that always serves the same two priorities — brain and RBC glucose, and protein preservation. Between meals, glycogenolysis carries the load. Days 1–3 spend the last glycogen (gone after day 1), shift muscle and liver to FFA, and manufacture glucose from lactate, alanine, glycerol, and odd-chain propionyl-CoA. After day 3 the brain moves to ketones, dropping its glucose demand and sparing protein — but only while adipose stores last. When fat is gone, vital protein becomes the only fuel left, and its accelerated degradation is what kills: survival time is set by the size of the fat reserve.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "exercise-fuel-systems",
      title: "Fuel use during exercise — the four-system relay",
      caption:
        "The source graph redrawn: % maximal energy by source (y, 0 to 100%) against duration of exercise (x, 2 sec → 2 hr) — stored ATP spent within seconds, creatine phosphate peaking between 2 and 10 seconds, anaerobic metabolism peaking near 1 minute, aerobic metabolism rising continuously to dominate after about a minute, and overall performance declining from 100% to a low plateau — with the five-entry legend and the caloric-density strip (1g carb/protein = 4 kcal, 1g alcohol = 7 kcal, 1g fatty acid = 9 kcal; # letters = # kcal).",
      notice:
        "Duration maps to dominant system: seconds = phosphates, ~1 minute = anaerobic glycogen, minutes-to-hours = aerobic. Overall performance is the envelope — it falls as each fast system fades and settles at the aerobic ceiling.",
    },
    {
      kind: "visual",
      visualId: "starvation-energy-stores",
      title: "Stored energy through weeks of starvation — the countdown curves",
      caption:
        "The source graph redrawn: stored energy in kJ (y, ticks 12 down to 0) against weeks of starvation (x, 0–8) — protein declining slowly then accelerating after week 6, fat declining near-linearly to the axis, carbohydrate gone within the first week — with the days 1–3 gluconeogenesis strip (lactate, alanine, glycerol, propionyl-CoA from odd-chain FFA) and the after-day-3 strip (ketones for the brain; RBCs lack mitochondria; depleted stores → vital protein degradation → organ failure and death; excess stores determine survival time).",
      notice:
        "The three curves are a countdown: carbohydrate dies first (glycogen depleted after day 1), fat is the long reserve that sets survival time, and protein is defended until the end — its final acceleration is the terminal event. The source page also carries invisible text-layer artifacts (a duplicated right-axis '100% / % Maximal energy by source' and a stray '2 sec') — InDesign leftovers, not visible in print and not reproduced.",
    },
    {
      kind: "table",
      title: "Fasting and starvation states — verbatim",
      intro: "The source's states table: what each state runs on, with its hormonal driver. Priorities are to supply sufficient glucose to the brain and RBCs and to preserve protein.",
      columns: ["State", "Metabolism", "Hormonal note"],
      rows: [
        [
          "Fed state (after meals)",
          "Glycolysis and aerobic respiration.",
          "Insulin stimulates triglyceride (lipid) and glycogen (carbohydrate) storage alongside protein synthesis.",
        ],
        [
          "Fasting (between meals)",
          "Hepatic glycogenolysis (major); hepatic gluconeogenesis, adipose release of FFA (minor).",
          "Glucagon and epinephrine stimulate use of fuel reserves.",
        ],
        [
          "Starvation days 1-3",
          "Blood glucose levels maintained by hepatic glycogenolysis; adipose release of FFA; muscle and liver shifting fuel use from glucose to FFA; hepatic gluconeogenesis from peripheral tissue lactate and alanine, and from adipose tissue glycerol and propionyl-CoA (from odd-chain FFA—the only triacylglycerol component that contributes to gluconeogenesis).",
          "Glycogen reserves depleted after day 1. RBCs lack mitochondria and therefore cannot use ketone bodies.",
        ],
        [
          "Starvation after day 3",
          "Adipose stores (ketone bodies become the main source of energy for the brain). After these are depleted, vital protein degradation accelerates, leading to organ failure and death.",
          "Amount of excess stores determines survival time.",
        ],
      ],
      caption:
        "One ladder, four rungs: fed stores, fasting spends glycogen, days 1–3 manufacture glucose while tissues shift to FFA, and after day 3 the brain runs on ketones until the adipose reserve — and then the vital protein — is gone.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The two anchor asymmetries and the caloric triplet",
      body: "Priorities in fasting and starvation are to supply sufficient glucose to the brain and RBCs and to preserve protein. RBCs lack mitochondria and therefore cannot use ketone bodies — they strictly use glucose, which is why hepatic gluconeogenesis never stops. Of the triglyceride's components, only glycerol (and propionyl-CoA from odd-chain FFA) contributes to gluconeogenesis — even-chain fatty acid carbon cannot become glucose. Caloric density: 1g carb/protein = 4 kcal, 1g alcohol = 7 kcal, 1g fatty acid = 9 kcal (# letters = # kcal).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A question gives the duration of maximal exercise — 8 seconds, 45 seconds, or 2 hours — and asks which fuel system is the dominant energy source.",
        discriminator: "Duration-to-system mapping on the exercise graph",
        concept: "The four-system relay",
        answer:
          "Seconds: stored ATP and creatine phosphate (CP peaks between 2 and 10 seconds). Near 1 minute: anaerobic metabolism of muscle glycogen. Beyond about a minute and to hours: aerobic metabolism, which rises continuously and dominates — overall performance declines to its low plateau as the faster systems fade.",
      },
      {
        stem: "A patient has had no caloric intake for 12 hours (overnight), for 2 days, or for 6 days; the question asks what is maintaining blood glucose.",
        discriminator: "The starvation state machine",
        concept: "Fed → fasting → days 1–3 → after day 3",
        answer:
          "Between meals: hepatic glycogenolysis (major), gluconeogenesis and adipose FFA release (minor). Days 1–3: glycogen is depleted after day 1, so hepatic gluconeogenesis from lactate, alanine, adipose glycerol, and propionyl-CoA maintains glucose while muscle and liver shift fuel use from glucose to FFA. After day 3: adipose stores support ketone bodies as the main brain energy source.",
      },
      {
        stem: "A biochemistry question asks which component of stored triglyceride can contribute to net gluconeogenesis.",
        discriminator: "Odd-chain FFA → propionyl-CoA",
        concept: "The glycerol/propionyl-CoA exception",
        answer:
          "Hepatic gluconeogenesis uses adipose tissue glycerol and propionyl-CoA (from odd-chain FFA) — the only triacylglycerol component that contributes to gluconeogenesis. Even-chain fatty acid β-oxidation yields only acetyl-CoA, which has no net path to glucose in humans.",
      },
      {
        stem: "A severely wasted patient in prolonged starvation develops progressive organ dysfunction; the question asks what accelerated.",
        discriminator: "Fat stores depleted → vital protein degradation",
        concept: "The terminal event of starvation",
        answer:
          "After day 3, ketone bodies become the main source of energy for the brain from adipose stores. Once these stores are depleted, vital protein degradation accelerates, leading to organ failure and death — and the amount of excess stores determines survival time.",
      },
    ],
    traps: [
      {
        a: "RBCs switch to ketone bodies in prolonged starvation",
        b: "RBCs lack mitochondria and therefore cannot use ketone bodies",
        whyConfused: "The brain does switch to ketones after day 3.",
        keyDifference:
          "The brain adapts; the RBC cannot — no mitochondria means no ketone oxidation ever, so gluconeogenesis must continue for as long as life continues. This is the page's most-tested asymmetry.",
        clue: "Any question pairing RBCs with starvation fuels.",
      },
      {
        a: "Glycogen reserves last about 3 days",
        b: "Glycogen reserves are depleted after day 1",
        whyConfused: "The day-3 mark is when the brain shifts to ketones.",
        keyDifference:
          "Day 1 ends the glycogen chapter; days 1–3 are the gluconeogenesis-plus-FFA-shift chapter; after day 3 is the ketone chapter. Keeping the day boundaries straight keeps the whole table straight.",
        clue: "Any 'when is glycogen depleted' or 'what happens on day X' question.",
      },
      {
        a: "Fatty acids feed gluconeogenesis throughout starvation",
        b: "Only glycerol and odd-chain propionyl-CoA from TG contribute",
        whyConfused: "Fat stores clearly sustain survival.",
        keyDifference:
          "Adipose fat sustains life by feeding FFA to muscle and liver (sparing glucose) and by ketogenesis — but the triglyceride's glucose-contributing components are only glycerol and propionyl-CoA from odd-chain FFA; even-chain carbons stop at acetyl-CoA.",
        clue: "Any 'which lipid component becomes glucose' question.",
      },
      {
        a: "Alcohol is the most calorie-dense macronutrient at 9 kcal/g",
        b: "1g fatty acid = 9 kcal; alcohol = 7; carb/protein = 4",
        whyConfused: "Alcohol is denser than the macronutrients.",
        keyDifference:
          "The printed mnemonic settles it: # letters = # kcal — carb (4), alcohol (7), fatty acid (9). Fat is the densest; alcohol sits between fat and carbohydrate.",
        clue: "Any kcal-per-gram question.",
      },
    ],
    pivots: [
      {
        lookAlike: "The athlete who cannot sustain the effort (sprint vs middle vs endurance)",
        differentiator: "The clock",
        correctPath:
          "≤10 seconds: creatine phosphate (with stored ATP) — a phosphate problem. ~1 minute: anaerobic glycogen → lactate — a glycolysis problem. Minutes to hours: aerobic metabolism of fat and carbohydrate — an oxygen-delivery problem; overall performance settles at the aerobic ceiling.",
      },
      {
        lookAlike: "The patient who has not eaten (overnight fast vs days 1–3 vs after day 3)",
        differentiator: "The fuel and the lab picture",
        correctPath:
          "Hours: hepatic glycogenolysis, glucagon/epinephrine driven. Days 1–3: glycogen gone after day 1, gluconeogenesis from lactate/alanine/glycerol/propionyl-CoA, tissues on FFA, ketones rising. After day 3: ketones are the brain's main source, protein spared; when adipose stores deplete, vital protein degradation accelerates → organ failure and death.",
      },
    ],
    miniCase: {
      vignette:
        "A 24-year-old woman with a 6-year history of anorexia nervosa is brought to the emergency department after a week of near-total refusal of food. She is 157 cm tall and weighs 34 kg (BMI 13.8). Examination shows temporal wasting, thin extremities with sparing of some subcutaneous fat, and slow-recruiting deep tendon reflexes. Laboratory studies are notable for mild transaminitis and a low-normal glucose that has been sustained without any dextrose. Review of her physiology notes from an admission two years ago — when she was 29 kg — shows she tolerated the fast with fewer metabolic decompensations than today.",
      question:
        "After day 3 of this patient's starvation, which fuel source is the main supplier of her brain's energy, and which cell population makes hepatic gluconeogenesis mandatory regardless?",
      options: [
        {
          label: "A",
          text: "Ketone bodies from adipose stores are the brain's main source; RBCs lack mitochondria and strictly use glucose, forcing gluconeogenesis to continue",
          correct: true,
          why: "Correct — after day 3, ketone bodies become the main source of energy for the brain, derived from adipose stores; meanwhile RBCs lack mitochondria and therefore cannot use ketone bodies, so glucose manufacture from lactate, alanine, glycerol, and propionyl-CoA must continue for life.",
        },
        {
          label: "B",
          text: "Free fatty acids cross the blood-brain barrier to become the brain's main fuel; RBCs oxidize fatty acids anaerobically",
          why: "FFA do not serve as the brain's fuel — the brain's adapted fuel is the ketone bodies derived from them; and RBCs cannot oxidize fatty acids at all (no mitochondria).",
        },
        {
          label: "C",
          text: "Hepatic glycogenolysis is the brain's main support; RBCs draw on stored muscle glycogen",
          why: "Glycogen reserves are depleted after day 1 — by day 3 there is no glycogen left to lyse, and RBCs cannot store or use glycogen.",
        },
        {
          label: "D",
          text: "Amino acids from vital protein degradation are the brain's main fuel from day 3 onward",
          why: "Vital protein degradation is the terminal event once adipose stores are depleted — not the day-3 adaptation; protein preservation is the priority the ketone shift exists to serve.",
        },
        {
          label: "E",
          text: "Lactate from peripheral tissues becomes the brain's primary fuel; RBCs metabolize ketones to lactate",
          why: "Lactate is a gluconeogenic substrate for the liver (the Cori cycle), not the brain's fuel; RBCs produce lactate from glucose and cannot use ketones.",
        },
      ],
      reasoning:
        "The starvation clock tells the story: glycogen ended after day 1, days 1–3 ran on gluconeogenesis from lactate, alanine, glycerol, and odd-chain propionyl-CoA while her muscle and liver shifted to FFA, and after day 3 her brain moved onto ketone bodies from her remaining adipose stores — the protein-sparing adaptation. Two years and 5 kg ago she had more adipose reserve, so the same starvation produced less decompensation; today, with less excess store, she is closer to the graph's terminal event, when fat runs out and vital protein degradation accelerates toward organ failure. What never changes is the RBC: no mitochondria, no ketones, strictly glucose — the reason her liver must keep manufacturing glucose no matter how long the fast persists.",
    },
  },
  mnemonics: [
    {
      code: "“# letters = # kcal.”",
      meaning:
        "The source's own mnemonic for caloric density: 1g carb/protein = 4 kcal, 1g alcohol = 7 kcal, 1g fatty acid = 9 kcal — count the letters in carb, alcohol, fatty acid.",
      memorizes: "Caloric density per gram by macronutrient",
      whenToUse: "Any kcal-per-gram nutrition question.",
      clinical: "Fat is the densest store — which is why adipose triglyceride, not protein or glycogen, sets survival time in starvation.",
    },
    {
      code: "“Feed the brain, guard the glucose, spare the protein.”",
      meaning:
        "KYP's shorthand for the starvation priorities: supply sufficient glucose to the brain and RBCs and preserve protein — every state on the table serves these three imperatives.",
      memorizes: "The priorities that govern the starvation ladder",
      whenToUse: "Any question about why a metabolic adaptation occurs during fasting or starvation.",
      clinical: "The day-3 ketone shift exists to spare protein; the death event is vital protein degradation once fat is gone.",
    },
    {
      code: "“ATP first, CP bridges, glycolysis sprints, aerobic endures.”",
      meaning:
        "KYP's relay for the exercise graph: stored ATP (seconds) → creatine phosphate (~10 sec) → anaerobic glycolysis (~1 min) → aerobic metabolism (hours) — with overall performance the envelope above them.",
      memorizes: "Duration-to-dominant-fuel-system mapping",
      whenToUse: "Any exercise-physiology fuel-source question.",
      clinical: "Each system covers the ramp-up gap of the next; performance settles at the aerobic ceiling once the fast systems are spent.",
    },
  ],
  rapidReview: {
    s30: [
      "After day 3 of starvation: ketone bodies = main brain energy source (from adipose stores)",
      "Glycogen reserves depleted after day 1",
      "RBCs lack mitochondria → cannot use ketone bodies — strictly glucose",
      "Priorities: glucose for brain + RBCs; preserve protein",
    ],
    m3: [
      "Exercise: stored ATP (sec) → creatine phosphate (~10 sec) → anaerobic (~1 min) → aerobic (dominant)",
      "Days 1–3 glucose sources: hepatic glycogenolysis, adipose FFA release, gluconeogenesis (lactate, alanine, glycerol, propionyl-CoA)",
      "Only TG components feeding gluconeogenesis: glycerol + odd-chain propionyl-CoA",
      "Starvation death mechanism: fat stores deplete → vital protein degradation → organ failure",
    ],
    m10: [
      "Fed: insulin → TG + glycogen storage + protein synthesis; glycolysis + aerobic respiration",
      "Fasting: hepatic glycogenolysis (major), GNG + adipose FFA (minor); glucagon/epinephrine drive",
      "1g carb/protein = 4 kcal · 1g alcohol = 7 · 1g fatty acid = 9 (# letters = # kcal)",
      "Survival time ∝ amount of excess (adipose) stores",
    ],
  },
  recall: [
    {
      q: "What are the priorities in fasting and starvation?",
      a: "To supply sufficient glucose to the brain and RBCs and to preserve protein.",
    },
    {
      q: "What dominates fuel supply during the fed state, and what does insulin do?",
      a: "Glycolysis and aerobic respiration; insulin stimulates triglyceride (lipid) and glycogen (carbohydrate) storage alongside protein synthesis.",
    },
    {
      q: "What are the major and minor fuel sources in fasting between meals, and which hormones drive them?",
      a: "Hepatic glycogenolysis (major); hepatic gluconeogenesis and adipose release of FFA (minor) — glucagon and epinephrine stimulate use of fuel reserves.",
    },
    {
      q: "List the four operations that maintain blood glucose during starvation days 1–3.",
      a: "Hepatic glycogenolysis; adipose release of FFA; muscle and liver shifting fuel use from glucose to FFA; and hepatic gluconeogenesis from peripheral tissue lactate and alanine, and from adipose tissue glycerol and propionyl-CoA (from odd-chain FFA — the only triacylglycerol component that contributes to gluconeogenesis).",
    },
    {
      q: "When are glycogen reserves depleted, and what changes after day 3 of starvation?",
      a: "Glycogen reserves are depleted after day 1. After day 3, adipose stores support ketone bodies becoming the main source of energy for the brain; once depleted, vital protein degradation accelerates, leading to organ failure and death.",
    },
    {
      q: "Why can RBCs never use ketone bodies, and what does that force?",
      a: "RBCs lack mitochondria and therefore cannot use ketone bodies — they strictly use glucose, which forces hepatic gluconeogenesis to continue throughout starvation.",
    },
    {
      q: "Order the four fuel systems of maximal exercise by duration and state where each peaks.",
      a: "Stored ATP starts at 100% and is spent within seconds; creatine phosphate peaks between 2 and 10 seconds; anaerobic metabolism peaks near 1 minute; aerobic metabolism rises continuously and dominates after about a minute — overall performance declines from 100% to a low plateau by 2 hours.",
    },
    {
      q: "Recite the caloric density triplet with its mnemonic.",
      a: "1g carb/protein = 4 kcal, 1g alcohol = 7 kcal, 1g fatty acid = 9 kcal (# letters = # kcal).",
    },
    {
      q: "What determines survival time in prolonged starvation?",
      a: "The amount of excess (adipose) stores — when they are depleted, vital protein degradation accelerates, leading to organ failure and death.",
    },
  ],
  related: [
    {
      title: "Glycogen Metabolism & Storage Diseases",
      topicId: "glycogen-metabolism",
      note: "The day-1 glycogen depletion that opens the starvation clock is this topic's glycogenolysis running dry.",
    },
    {
      title: "Ketone Bodies & Fed/Fasted States",
      topicId: "ketone-bodies",
      note: "The after-day-3 brain fuel is E15's ketone shuttle — the liver makes them, the brain spends them, the RBC cannot.",
    },
    {
      title: "Gluconeogenesis",
      topicId: "gluconeogenesis",
      note: "The days 1–3 glucose manufacture — lactate, alanine, glycerol, propionyl-CoA — is the bypass machinery applied to starvation substrates.",
    },
    {
      title: "Fatty Acid Metabolism",
      topicId: "fattyAcidMetabolism",
      note: "The FFA that spares glucose in muscle and liver comes from this pathway — and its odd-chain propionyl-CoA is the only TG carbon that becomes glucose.",
    },
  ],
  crossLinks: [
    {
      subject: "Endocrinology",
      connection: "The insulin/glucagon switch runs both clocks — fed storage versus fasting fuel-reserve mobilization — and diabetic ketoacidosis is the ketone chapter written by hormone absence.",
    },
    {
      subject: "Neurology",
      connection: "The brain's after-day-3 adaptation to ketone bodies while RBCs stay strictly glycolytic — the two-cell fuel split that defines prolonged starvation.",
    },
    {
      subject: "Cardiology",
      connection: "Cardiac muscle's dependence on aerobic metabolism and fatty acid oxidation — why the exercise graph's long-duration zone belongs to oxidative fuels.",
    },
  ],
};
