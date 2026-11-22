import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 4 of the metabolism block).
// Source: First Aid 2026, Part 1 pdf 98 / book 76 (electron transport chain
// and oxidative phosphorylation: NADH/FADH2 entry, O2 acceptor, proton
// gradient, uncoupling proteins, shuttles, ATP accounting, aspirin)

export const oxidativePhosphorylation: KypUsMLENote = {
  id: "oxidative-phosphorylation",
  title: "Electron Transport Chain & Oxidative Phosphorylation",
  subtitle:
    "The proton circuit: NADH enters at complex I and FADH2 at complex II (a lower-energy dock), electrons step down through CoQ, complex III, and cytochrome c to oxygen at complex IV, protons pumped at I/III/IV stack the gradient, and the only return channel — complex V, ATP synthase — converts the flow into ATP (1 NADH → 2.5 ATP, 1 FADH2 → 1.5 ATP; 32 vs 30 net ATP per glucose depending on the shuttle).",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — Electron transport chain and oxidative phosphorylation",
  difficulty: 3,
  readTime: 11,
  sourceRef:
    "First Aid 2026, Part 1 pp. 76 (electron transport chain and oxidative phosphorylation; uncoupling proteins; ATP yields and shuttles; aspirin overdose)",
  tags: [
    "electron transport chain",
    "oxidative phosphorylation",
    "complex I",
    "complex II",
    "succinate dehydrogenase",
    "CoQ",
    "cytochrome c",
    "complex IV",
    "ATP synthase",
    "proton gradient",
    "NADH",
    "FADH2",
    "oxygen",
    "uncoupling proteins",
    "brown fat",
    "aspirin overdose",
    "hyperthermia",
    "malate-aspartate shuttle",
    "glycerol-3-phosphate shuttle",
    "32 net ATP",
    "30 net ATP",
    "anaerobic glycolysis",
  ],
  core: {
    what: "The electron transport chain sits in the inner mitochondrial membrane. NADH electrons are transferred to complex I; FADH2 electrons are transferred to complex II (at a lower energy level than NADH); oxygen acts as the terminal electron acceptor to provide energy. The passage of electrons results in the formation of a proton gradient that, coupled to oxidative phosphorylation, drives ATP production — and ATP hydrolysis can be coupled to energetically unfavorable reactions. Yields: 1 NADH → 2.5 ATP and 1 FADH2 → 1.5 ATP. NADH electrons from glycolysis enter mitochondria via the malate-aspartate or glycerol-3-phosphate shuttle, so aerobic metabolism of one glucose produces 32 net ATP via the malate-aspartate shuttle (heart and liver) or 30 net ATP via the glycerol-3-phosphate shuttle (muscle); anaerobic glycolysis produces only 2 net ATP. Uncoupling proteins (found in brown fat, which has more mitochondria than white fat) produce heat by increasing inner mitochondrial membrane permeability, which dissipates the proton gradient: ATP synthesis stops, but electron transport continues. Aspirin overdose can also cause uncoupling of oxidative phosphorylation, resulting in hyperthermia.",
    why: "This membrane is where every reduced cofactor from glycolysis, the TCA cycle, and fatty acid β-oxidation gets cashed out. The exam's favorite numbers live here — 2.5 vs 1.5 ATP per reduced cofactor and 32 vs 30 vs 2 net ATP per glucose — plus the two uncouplers (brown fat, aspirin) whose signature is heat with continuing electron transport.",
    keyIdea: "Think of the inner mitochondrial membrane as a dam: complexes I, III, and IV are pumps that raise the water (H+ into the intermembrane space), ATP synthase is the only turbine, and uncoupling proteins are floodgates that let water rush past the turbine — the river keeps flowing (electron transport continues) but no electricity is made (ATP synthesis stops); the spilled energy becomes heat. NADH enters the dam at the top (complex I, high head) so it pays 2.5 ATP; FADH2 enters halfway down (complex II, lower energy level) so it pays only 1.5. And cytosolic NADH from glycolysis cannot cross the dam wall directly — the malate-aspartate shuttle (heart, liver) delivers it at full value (32 net ATP/glucose) while the glycerol-3-phosphate shuttle (muscle) pays a transfer fee (30).",
  },
  mechanisms: [
    {
      id: "etc-proton-circuit",
      title: "The proton circuit — electrons downhill, H+ uphill, ATP on the return",
      context: "Aerobic mitochondria, high NADH/FADH2 supply",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "NADH (from TCA, β-oxidation) and FADH2 (from succinate dehydrogenase) arrive at the inner membrane",
            sublabel: "Input — two docks: NADH at complex I, FADH2 at complex II.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Electrons step down the chain: I → CoQ → III → cytochrome c → IV",
            sublabel: "Process — each handoff releases free energy; FADH2 skips complex I entirely (lower energy level than NADH).",
            variant: "process",
          },
          {
            id: "s2",
            label: "Complexes I, III, and IV pump H+ from the matrix into the intermembrane space",
            sublabel: "Process — the proton gradient forms: the membrane is 'charged' like a dam.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Oxygen accepts the electrons at complex IV: 1/2 O2 + 2H+ → H2O",
            sublabel: "Process — O2 is the terminal electron acceptor that provides energy for the gradient.",
            variant: "process",
          },
          {
            id: "o1",
            label: "H+ flows back through complex V (ATP synthase): ADP + Pi → ATP",
            sublabel: "Output — oxidative phosphorylation coupled to electron transport; 1 NADH → 2.5 ATP, 1 FADH2 → 1.5 ATP.",
            variant: "output",
          },
          {
            id: "x1",
            label: "Cyanide and CO inhibit complex IV — the chain backs up at the terminal step",
            sublabel: "Inhibitor — the source map's inhibit tag on complex IV.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "NADH → I · FADH2 → II" },
          { from: "s1", to: "s2", label: "free energy → pumping" },
          { from: "s2", to: "s3", label: "electrons reach O2" },
          { from: "s3", to: "o1", label: "gradient drives H+ through V" },
          { from: "x1", to: "s3", type: "inhibit", label: "cyanide, CO ⊟ complex IV" },
        ],
        caption:
          "Electron transport and ATP synthesis are two machines coupled by one gradient: the redox chain builds the H+ gradient (I, III, IV pumping into the intermembrane space), oxygen keeps the chain moving by accepting electrons at complex IV, and ATP synthase is the single sanctioned return channel that converts the proton flow into ATP. Anything that gives H+ a second way back — uncoupling proteins in brown fat, aspirin overdose — breaks the coupling: the gradient falls, ATP synthesis stops, but electron transport (and O2 consumption) continues while the energy leaves as heat.",
      },
    },
    {
      id: "uncoupling-heat-switch",
      title: "Uncoupling — the floodgate that trades ATP for heat",
      context: "Brown fat thermogenesis; aspirin overdose",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Uncoupling proteins open (brown fat) or aspirin overdose inserts the same leak",
            sublabel: "Input — brown fat has more mitochondria than white fat; aspirin overdose also uncouples oxidative phosphorylation.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Inner mitochondrial membrane permeability to H+ rises",
            sublabel: "Process — protons leak back into the matrix without passing through ATP synthase.",
            variant: "process",
          },
          {
            id: "s2",
            label: "The proton gradient dissipates",
            sublabel: "Process — the dam drains: no stored pressure, no turbine drive.",
            variant: "process",
          },
          {
            id: "o1",
            label: "ATP synthesis stops, but electron transport continues — the energy leaves as heat",
            sublabel: "Output — uncoupling proteins produce heat; aspirin overdose causes hyperthermia.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "leak channel opens" },
          { from: "s1", to: "s2", label: "H+ bypasses complex V" },
          { from: "s2", to: "o1", label: "gradient → heat" },
        ],
        caption:
          "Uncouplers are defined by dissociation: the electron transport chain keeps oxidizing NADH and FADH2 (oxygen keeps accepting electrons), but because H+ returns to the matrix through the leak instead of ATP synthase, the gradient collapses and oxidative phosphorylation stops. Every calorie that would have become ATP bond energy is released as heat instead — which is exactly what brown fat is designed to do for infants, and exactly what makes aspirin overdose dangerous (hyperthermia on top of the metabolic acidosis).",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "etc-oxphos-map",
      title: "The ETC membrane map — complexes, carriers, and the proton circuit",
      caption:
        "The inner mitochondrial membrane drawn as the source draws it: matrix on top, intermembrane space below. NADH enters complex I and FADH2 enters complex II (the succinate dehydrogenase box — the same enzyme as TCA step 6); both hand electrons to CoQ, which passes them to complex III, cytochrome c, and complex IV, where oxygen accepts them (1/2 O2 + 2H+ → H2O). H+ arrows show pumping into the intermembrane space at I, III, IV and the return flow up through complex V (ATP synthase), where ADP + Pi becomes ATP. The uncoupling-protein channel and aspirin leak H+ back without paying ATP, and cyanide/CO carries the source's inhibit tag at complex IV.",
      notice:
        "Follow one NADH: in at I (high dock), down through CoQ → III → cytochrome c → IV → onto oxygen, pumping H+ at three stations on the way. Then follow one FADH2: in at II (lower dock, below complex I's height) — it only pumps at III and IV, which is exactly why it yields 1.5 ATP to NADH's 2.5. Finally, find the only two ways back into the matrix: the turbine (complex V) and the leak (uncoupling proteins / aspirin) — the entire topic's clinical logic is the difference between those two doors.",
    },
    {
      kind: "text",
      title: "Two entry docks and one terminal acceptor",
      body: [
        "The chain is organized by entry height. NADH electrons are transferred to complex I, the highest-energy dock; FADH2 electrons are transferred to complex II (succinate dehydrogenase — the same enzyme as step 6 of the TCA cycle) at a lower energy level than NADH, so FADH2 skips the complex I pumping station and yields fewer ATP per pair of electrons: 1.5 versus 2.5.",
        "Oxygen acts as the electron acceptor at complex IV to provide energy: 1/2 O2 + 2H+ → H2O. This is why the chain is aerobic — without O2 the whole staircase backs up, NADH accumulates, and the cell falls back on anaerobic glycolysis (2 net ATP per glucose). The proton gradient the pumping builds is the cell's rechargeable battery, and ATP hydrolysis can be coupled to energetically unfavorable reactions — the same currency, spent the other way.",
      ],
    },
    {
      kind: "table",
      title: "The ATP ledger — yields per carrier and per glucose",
      intro: "The four numbers the exam expects without warning, straight from the page.",
      columns: ["Entry", "Yield", "Why"],
      rows: [
        ["1 NADH", "2.5 ATP", "Enters at complex I — pumps at I, III, IV"],
        ["1 FADH2", "1.5 ATP", "Enters at complex II, at a lower energy level than NADH — pumps at III, IV only"],
        ["1 glucose, aerobic — malate-aspartate shuttle", "32 net ATP", "Heart and liver; glycolytic NADH imported at full value"],
        ["1 glucose, aerobic — glycerol-3-phosphate shuttle", "30 net ATP", "Muscle; glycolytic NADH imported at reduced value"],
        ["1 glucose, anaerobic glycolysis", "2 net ATP", "No electron transport at all — substrate-level phosphorylation only"],
      ],
      caption:
        "The shuttle choice is a tissue property: heart and liver run the malate-aspartate shuttle and get 32 net ATP per glucose; muscle runs the glycerol-3-phosphate shuttle and gets 30. Anaerobic glycolysis produces only 2 net ATP per glucose molecule.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The two uncouplers on this page — brown fat and aspirin",
      body:
        "Uncoupling proteins are found in brown fat, which has more mitochondria than white fat — the infant's built-in space heater. They produce heat by raising inner mitochondrial membrane permeability, which drops the proton gradient: ATP synthesis stops, but electron transport continues. Aspirin overdose can also cause uncoupling of oxidative phosphorylation, resulting in hyperthermia — one more reason salicylate toxicity is a body-temperature emergency, and the mechanism the exam asks for when a vignette pairs an overdose with heat.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "Cyanide and CO — the source map's inhibit tag at complex IV",
      body:
        "The ETC figure tags complex IV with an inhibit marker: cyanide and CO. When the terminal complex is blocked, electrons cannot reach oxygen, the gradient collapses, and tissues with high O2 demand (brain, heart) fail first. The tag sits on the map exactly where the exam expects you to place both poisons.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A question gives a tissue (heart, liver, or skeletal muscle) and asks the net ATP from one glucose aerobically metabolized.",
        discriminator: "The shuttle the tissue runs",
        concept: "32 vs 30 net ATP",
        answer: "Heart and liver use the malate-aspartate shuttle → 32 net ATP; skeletal muscle uses the glycerol-3-phosphate shuttle → 30 net ATP.",
      },
      {
        stem: "A patient has aspirin overdose with hyperthermia (often with tinnitus and respiratory alkalosis from hyperventilation).",
        discriminator: "Uncoupling with continuing electron transport",
        concept: "Aspirin uncouples oxidative phosphorylation",
        answer: "Aspirin overdose causes uncoupling of oxidative phosphorylation: ↑ inner mitochondrial membrane permeability → ↓ proton gradient — ATP synthesis stops, electron transport continues, energy is released as heat → hyperthermia.",
      },
      {
        stem: "An infant or a cold-exposed neonate is described generating heat without shivering.",
        discriminator: "Brown fat with abundant mitochondria",
        concept: "Uncoupling proteins produce heat",
        answer: "Brown fat (more mitochondria than white fat) uses uncoupling proteins to dissipate the proton gradient as heat — ATP synthesis stops, electron transport continues.",
      },
      {
        stem: "A calculation question asks how many ATP are produced from a given number of NADH or FADH2.",
        discriminator: "Which cofactor, which dock",
        concept: "1 NADH → 2.5 ATP; 1 FADH2 → 1.5 ATP",
        answer: "NADH enters at complex I (pumps at I, III, IV) → 2.5 ATP each; FADH2 enters at complex II at a lower energy level (pumps at III, IV) → 1.5 ATP each.",
      },
      {
        stem: "A stem asks what the terminal electron acceptor of the chain is, or what complex IV does with oxygen.",
        discriminator: "Oxygen at complex IV",
        concept: "O2 accepts electrons to provide energy",
        answer: "Oxygen acts as the electron acceptor at complex IV: 1/2 O2 + 2H+ → H2O — the step that keeps the chain moving and the gradient charged.",
      },
      {
        stem: "A cell is rendered anaerobic (ischemia, heavy exercise, RBC metabolism) and the yield per glucose is requested.",
        discriminator: "No electron transport → substrate-level only",
        concept: "Anaerobic glycolysis produces only 2 net ATP",
        answer: "Without oxygen the chain halts and the cell relies on anaerobic glycolysis: 2 net ATP per glucose molecule.",
      },
    ],
    traps: [
      {
        a: "32 net ATP per glucose",
        b: "30 net ATP per glucose",
        whyConfused: "Both are 'aerobic glucose' answers.",
        keyDifference: "The shuttle decides: malate-aspartate (heart, liver) → 32; glycerol-3-phosphate (muscle) → 30.",
        clue: "The named tissue in the stem (heart/liver vs muscle).",
      },
      {
        a: "ATP synthesis stops with uncouplers",
        b: "Electron transport stops with uncouplers",
        whyConfused: "'Uncoupling' sounds like everything shuts down.",
        keyDifference: "Only the coupling breaks: ATP synthesis stops, but electron transport continues (O2 is still consumed).",
        clue: "Continued O2 consumption with no ATP gain — heat instead.",
      },
      {
        a: "Brown fat",
        b: "White fat",
        whyConfused: "Both are adipose tissue.",
        keyDifference: "Brown fat has more mitochondria than white fat — that is why it can run uncoupling proteins for thermogenesis.",
        clue: "Non-shivering thermogenesis in infants.",
      },
      {
        a: "FADH2 enters at complex I",
        b: "FADH2 enters at complex II",
        whyConfused: "Both cofactors feed the same chain.",
        keyDifference: "FADH2 electrons are transferred to complex II (succinate dehydrogenase) at a lower energy level than NADH — skipping complex I's pump is exactly why FADH2 yields 1.5 ATP.",
        clue: "The 1.5-vs-2.5 arithmetic always betrays the entry dock.",
      },
      {
        a: "Cytosolic NADH crosses the inner membrane directly",
        b: "NADH electrons enter via a shuttle",
        whyConfused: "The electrons do get in either way.",
        keyDifference: "NADH electrons from glycolysis enter mitochondria via the malate-aspartate or glycerol-3-phosphate shuttle — the membrane is impermeable to NADH itself.",
        clue: "Any question about how glycolytic reducing power reaches the chain.",
      },
    ],
    pivots: [
      {
        lookAlike: "A hyperthermia stem after a drug ingestion (salicylates vs serotonin syndrome vs malignant hyperthermia)",
        differentiator: "The aspirin history plus uncoupling physiology",
        correctPath:
          "Aspirin overdose → uncoupling of oxidative phosphorylation → hyperthermia with tinnitus/hyperventilation and metabolic acidosis; serotonergic agents → clonus/hyperreflexia; volatile anesthetics → MH (treat with dantrolene). The mechanism asked here is the membrane leak.",
      },
      {
        lookAlike: "An 'energy failure' stem (cyanide/CO at complex IV vs an uncoupler)",
        differentiator: "Does electron transport stop or continue?",
        correctPath:
          "Cyanide/CO inhibit complex IV — electrons stop reaching oxygen; an uncoupler leaves electron transport running while ATP synthesis stops. Continued O2 consumption with heat production points to the uncoupler; a frozen chain points to the complex IV tag.",
      },
    ],
    miniCase: {
      vignette:
        "A 17-year-old girl is brought to the emergency department 4 hours after ingesting a bottle of aspirin tablets. She is diaphoretic and flushed with a rectal temperature of 39.2°C (102.6°F), a respiratory rate of 32/min (deep breaths), and complains of ringing in her ears. Arterial blood gas shows respiratory alkalosis with a widened anion-gap metabolic acidosis. Her uncuffed energy expenditure is dramatically increased despite normal oxygen saturation.",
      question:
        "By which mechanism does this ingestion produce hyperthermia?",
      options: [
        {
          label: "A",
          text: "Uncoupling of oxidative phosphorylation — the proton gradient dissipates as heat while electron transport continues",
          correct: true,
          why: "Correct — aspirin overdose uncouples oxidative phosphorylation: ↑ inner mitochondrial membrane permeability → ↓ proton gradient, ATP synthesis stops, electron transport continues, and the energy is released as heat (hyperthermia).",
        },
        {
          label: "B",
          text: "Direct inhibition of complex IV, blocking electron transfer to oxygen",
          why: "Tempting because both produce energy failure — but that is the cyanide/CO mechanism from the map's inhibit tag; this patient's oxygen saturation and continuing O2 consumption argue the chain still runs.",
        },
        {
          label: "C",
          text: "Irreversible inhibition of ATP synthase with proton gradient accumulation",
          why: "This would stop ATP synthesis while the gradient builds — it does not explain the heat; aspirin's signature is the leak, not a turbine lock.",
        },
        {
          label: "D",
          text: "Decreased generation of NADH from the TCA cycle",
          why: "NADH supply is not the issue — electron transport is explicitly continuing in uncoupling.",
        },
        {
          label: "E",
          text: "Impaired oxygen delivery to tissues",
          why: "Oxygen delivery is normal here; the defect is in the membrane's handling of protons, not the blood's carrying capacity.",
        },
      ],
      reasoning:
        "The salicylate toxidrome (tinnitus, mixed respiratory alkalosis/anion-gap acidosis, hyperthermia) plus the physiology of uncoupling — heat with continuing electron transport — selects the membrane-leak mechanism. The number to remember: ATP synthesis stops, but electron transport continues.",
    },
  },
  mnemonics: [
    {
      code: "“MAjor League pays 32; the Gym pays 30”",
      meaning: "MA = malate-aspartate shuttle (heart and liver — the major-league organs) → 32 net ATP per glucose; G = glycerol-3-phosphate shuttle (muscle — the gym) → 30 net ATP.",
      memorizes: "Which shuttle runs in which tissue, and the ATP yield of each",
      whenToUse: "Any 32-vs-30 stem or tissue-specific ATP calculation.",
      clinical: "Ischemic muscle tolerates the cheaper shuttle; the heart's premium import keeps its ATP density high.",
    },
    {
      code: "“NADH takes the front door (I); FADH₂ the side door (II)”",
      meaning: "NADH enters the chain at complex I (high, full price — 2.5 ATP); FADH2 enters at complex II at a lower energy level (side entrance, discount — 1.5 ATP).",
      memorizes: "Entry complexes and the 2.5-vs-1.5 yield difference",
      whenToUse: "Any yield calculation or 'which complex does FADH2 use' question.",
      clinical: "Succinate dehydrogenase wears two hats (TCA step 6 and complex II) — FADH2 is born at the side door.",
    },
    {
      code: "“Brown fat burns the gradient”",
      meaning: "Uncoupling proteins in brown fat (more mitochondria than white fat) let H+ leak back without passing ATP synthase — the gradient becomes heat: ATP synthesis stops, electron transport continues.",
      memorizes: "The uncoupling mechanism and its two triggers (brown fat, aspirin overdose)",
      whenToUse: "Non-shivering thermogenesis or aspirin-overdose hyperthermia stems.",
      clinical: "Infants keep warm this way; aspirin poisonings overheat this way.",
    },
  ],
  rapidReview: {
    s30: [
      "NADH → complex I; FADH2 → complex II (lower energy level)",
      "1 NADH = 2.5 ATP; 1 FADH2 = 1.5 ATP",
      "Uncouplers: ATP synthesis stops, electron transport continues → heat",
    ],
    m3: [
      "Malate-aspartate shuttle (heart, liver) → 32 net ATP/glucose; glycerol-3-phosphate (muscle) → 30",
      "O2 = terminal electron acceptor at complex IV: 1/2 O2 + 2H+ → H2O",
      "Brown fat has more mitochondria than white fat; aspirin overdose also uncouples → hyperthermia",
    ],
    m10: [
      "Anaerobic glycolysis: 2 net ATP per glucose",
      "H+ pumped at I, III, IV; returns only through ATP synthase (complex V) — or the uncoupler leak",
      "Cyanide and CO inhibit complex IV (the source map's inhibit tag)",
    ],
  },
  recall: [
    {
      q: "Where do NADH and FADH2 enter the electron transport chain, and why does the entry dock change the yield?",
      a: "NADH → complex I; FADH2 → complex II (succinate dehydrogenase), at a lower energy level than NADH. Skipping complex I's proton pump means FADH2 drives fewer H+ flows: 1.5 ATP vs 2.5 per NADH.",
    },
    {
      q: "What is oxygen's role, and at which complex?",
      a: "Oxygen acts as the electron acceptor to provide energy — the terminal acceptor at complex IV, where 1/2 O2 + 2H+ → H2O.",
    },
    {
      q: "At which complexes is H+ pumped, and through which complex does it return?",
      a: "H+ is pumped from the matrix into the intermembrane space at complexes I, III, and IV; it returns through complex V (ATP synthase), which makes ATP from ADP + Pi — or leaks back through uncoupling proteins.",
    },
    {
      q: "Give the ATP ledger: per NADH, per FADH2, and per glucose under each condition.",
      a: "1 NADH → 2.5 ATP; 1 FADH2 → 1.5 ATP. Per glucose: 32 net ATP via the malate-aspartate shuttle (heart, liver), 30 net via glycerol-3-phosphate (muscle), 2 net anaerobic.",
    },
    {
      q: "How do glycolytic NADH electrons get into mitochondria?",
      a: "Via the malate-aspartate or glycerol-3-phosphate shuttle — the inner membrane is impermeable to NADH itself.",
    },
    {
      q: "What exactly do uncoupling proteins do, and what continues vs stops?",
      a: "They raise inner mitochondrial membrane permeability so H+ leaks back without passing ATP synthase → the proton gradient falls and its energy is released as heat. ATP synthesis stops, but electron transport continues.",
    },
    {
      q: "Why does aspirin overdose cause hyperthermia?",
      a: "Aspirin overdose can also cause uncoupling of oxidative phosphorylation — the same leak mechanism as brown fat — resulting in hyperthermia.",
    },
    {
      q: "Which complexes carry inhibit tags in the source map, and with what agents?",
      a: "Complex IV is tagged 'Cyanide, CO' — and the uncoupling channel (uncoupling proteins, aspirin overdose) is drawn as the H+ leak that bypasses complex V.",
    },
  ],
  related: [
    {
      title: "TCA Cycle & Pyruvate Dehydrogenase",
      topicId: "tca-cycle-pdh",
      note: "The ETC's suppliers: the TCA cycle hands over 3 NADH and 1 FADH2 per acetyl-CoA — and its succinate dehydrogenase step IS complex II.",
    },
    {
      title: "Metabolism Overview & Rate-Limiting Enzymes",
      topicId: "metabolism-overview",
      note: "Where the proton circuit sits in the whole-body map — every pathway's reduced cofactors converge on this membrane.",
    },
    {
      title: "Glycolysis Regulation",
      topicId: "glycolysis-regulation",
      note: "The source of the cytosolic NADH that must ride a shuttle (malate-aspartate or glycerol-3-phosphate) to be cashed in — and the 2-net-ATP anaerobic fallback.",
    },
    {
      title: "Water-Soluble Vitamins II (B12, Folate, C)",
      topicId: "b-vitamins-2",
      note: "The cofactor chemistry underneath: riboflavin (B2) builds FAD and niacin (B3) builds NAD+ — the two electron carriers the chain prices at 1.5 and 2.5 ATP.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology & Toxicology",
      connection: "Aspirin overdose — the salicylate toxidrome's hyperthermia is uncoupling of oxidative phosphorylation, layered on its respiratory alkalosis and anion-gap acidosis.",
    },
    {
      subject: "Pathology",
      connection: "Brown fat thermogenesis — infants' non-shivering heat production depends on uncoupling proteins in mitochondria-rich brown adipose tissue.",
    },
    {
      subject: "Physiology",
      connection: "Chemiosmotic coupling — the proton-motive force across the inner mitochondrial membrane as the reversible battery that also lets ATP hydrolysis drive unfavorable reactions.",
    },
  ],
};
