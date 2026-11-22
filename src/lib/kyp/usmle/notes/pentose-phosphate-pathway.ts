import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 6 of the metabolism block).
// Source: First Aid 2026, Part 1 pdf 99 / book 77 (pentose phosphate pathway /
// HMP shunt: oxidative + nonoxidative phases, NADPH and ribose outputs, sites
// of activity; glucose-6-phosphate dehydrogenase deficiency)

export const pentosePhosphatePathway: KypUsMLENote = {
  id: "pentose-phosphate-pathway",
  title: "Pentose Phosphate Pathway",
  subtitle:
    "The HMP shunt: an oxidative irreversible phase (glucose-6-P dehydrogenase → 2 NADPH + CO2 → ribulose-5-P) plus a nonoxidative reversible phase (transketolase, B1, shuffling ribose-5-P carbons back to F-6-P and G-3-P) — all cytoplasmic, no ATP used or produced — and the glutathione redox cycle that explains why G6PD-deficient RBCs hemolyze (Heinz bodies, bite cells, 'Bite into some Heinz ketchup').",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — Pentose phosphate pathway and G6PD deficiency",
  difficulty: 3,
  readTime: 12,
  sourceRef:
    "First Aid 2026, Part 1 pp. 77 (pentose phosphate pathway: oxidative and nonoxidative reactions, NADPH and ribose outputs, sites of highest activity; glucose-6-phosphate dehydrogenase deficiency, Heinz bodies, bite cells)",
  tags: [
    "pentose phosphate pathway",
    "HMP shunt",
    "NADPH",
    "NADP+",
    "glucose-6-phosphate dehydrogenase",
    "G6PD",
    "6-phosphogluconate",
    "ribulose-5-phosphate",
    "ribose-5-phosphate",
    "phosphopentose isomerase",
    "transketolase",
    "thiamine",
    "fructose-6-phosphate",
    "glyceraldehyde-3-phosphate",
    "DHAP",
    "glutathione",
    "GSH",
    "GSSG",
    "glutathione reductase",
    "glutathione peroxidase",
    "hemolytic anemia",
    "Heinz bodies",
    "bite cells",
    "fava beans",
    "primaquine",
    "sulfonamides",
    "nitrofurantoin",
    "malaria-endemic regions",
    "lactating mammary glands",
    "adrenal cortex",
  ],
  core: {
    what: "The pentose phosphate pathway — also called the HMP shunt — provides a source of NADPH from abundantly available glucose-6-P; NADPH is required for reductive reactions, eg, glutathione reduction inside RBCs and fatty acid and cholesterol biosynthesis. Additionally, the pathway yields ribose for nucleotide synthesis. It has two distinct phases (oxidative and nonoxidative), both of which occur in the cytoplasm, and no ATP is used or produced. Sites of highest activity: lactating mammary glands, liver, adrenal cortex (sites of fatty acid or steroid synthesis), and RBCs. In the oxidative irreversible phase, glucose-6-P dehydrogenase (the rate-limiting step) oxidizes glucose-6-P toward 6-phosphogluconate and ribulose-5-P, generating 2 NADPH and CO2; phosphopentose isomerase converts ribulose-5-P to ribose-5-P for nucleotide synthesis. In the nonoxidative reversible phase, transketolase (thiamine, B1 dependent) shuffles the pentose carbons back to fructose-6-P and glyceraldehyde-3-P — reconnecting to glycolysis intermediates (fructose 1,6-bisphosphate, DHAP, glyceraldehyde-3-P). NADPH is necessary to keep glutathione reduced, which in turn detoxifies free radicals and peroxides; decreased NADPH in RBCs leads to hemolytic anemia due to poor RBC defense against oxidizing agents (eg, fava beans, sulfonamides, nitrofurantoin, primaquine). Infection (the most common cause) can also precipitate hemolysis. G6PD deficiency is an X-linked recessive disorder, the most common human enzyme deficiency, more prevalent among descendants of populations in malaria-endemic regions; Heinz bodies (denatured globin chains precipitating within RBCs due to oxidative stress) become bite cells after phagocytic removal by splenic macrophages — 'Bite into some Heinz ketchup.'",
    why: "This pathway is the RBC's only NADPH source — no nucleus, no other plan — which is why G6PD deficiency is the classic drug- and infection-triggered hemolytic anemia, and why the Heinz-body-to-bite-cell sequence is a guaranteed smear question. The two-phase structure (irreversible NADPH factory + reversible carbon shuffling) and the tissue list (mammary glands, liver, adrenal cortex, RBCs) are the page's other repeated asks.",
    keyIdea: "Read the shunt as a factory with one irreversible assembly line and one reversible loading dock. The oxidative line (G6PD, the committed rate-limiting step) burns glucose-6-P twice — two NADPH and one CO2 per glucose — to reach ribulose-5-P; phosphopentose isomerase then bends ribulose into ribose for nucleotides. The nonoxidative dock (transketolase, B1 — the same thiamine cofactor as PDH and α-KG DH) lets the cell trade pentoses it doesn't need back into glycolysis intermediates (F-6-P, G-3-P) when NADPH is plentiful. In RBCs the entire purpose is the NADPH: it keeps glutathione reductase supplied, which keeps GSH reduced, which lets glutathione peroxidase neutralize H2O2 into water. G6PD deficiency unplugs the factory: no NADPH → no reduced glutathione → oxidants (fava beans, sulfonamides, nitrofurantoin, primaquine, or infection's free radicals) denature globin into Heinz bodies, and splenic macrophages bite them out.",
  },
  mechanisms: [
    {
      id: "hmp-shunt-two-phases",
      title: "The HMP shunt — an irreversible NADPH line feeding a reversible carbon dock",
      context: "Cytoplasm, NADPH-demanding tissues",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Abundant glucose-6-P enters the shunt in the cytoplasm",
            sublabel: "Input — no ATP is used or produced at any point.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Oxidative (irreversible): glucose-6-P dehydrogenase → 6-phosphogluconate → ribulose-5-P",
            sublabel: "Process — G6PD is the rate-limiting step; 2 NADP+ are reduced to 2 NADPH and 1 CO2 is released.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Phosphopentose isomerase: ribulose-5-P → ribose-5-P → nucleotide synthesis",
            sublabel: "Process — the pathway's second output: ribose for nucleotides.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Nonoxidative (reversible): transketolase (B1) shuffles carbons back to F-6-P and G-3-P",
            sublabel: "Output — pentoses traded back into glycolysis intermediates (F-1,6-BP, DHAP, G-3-P) when NADPH is sufficient.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "G6PD (rate-limiting)" },
          { from: "s1", to: "s2", label: "ribulose-5-P" },
          { from: "s2", to: "o1", type: "inhibit", label: "when ribose is unneeded" },
        ],
        caption:
          "The two phases answer two different needs. The oxidative phase is the committed, irreversible NADPH factory: G6PD locks the gate, two NADPH and a CO2 come out, and the sugar ends as ribulose-5-P. The nonoxidative phase is pure bookkeeping — reversible, no cofactors oxidized — letting transketolase (thiamine-dependent, like PDH and α-KG DH) rearrange the pentose backbone into F-6-P and G-3-P so the carbons rejoin glycolysis. NADPH-hungry tissues (lactating mammary glands, liver, adrenal cortex, RBCs) run this factory hardest, and RBCs have no alternative supplier.",
      },
    },
    {
      id: "glutathione-redox-defense",
      title: "The glutathione redox cycle — NADPH is the RBC's antioxidant budget",
      context: "RBC cytoplasm, oxidant exposure",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "G6PD makes NADPH from glucose-6-P (NADP+ returns for reuse)",
            sublabel: "Input — the shunt's oxidative phase; 6-phosphogluconolactone is the byproduct.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Glutathione reductase uses NADPH to reduce GSSG → 2 GSH (reduced)",
            sublabel: "Process — keeps glutathione in its reduced, active form.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Glutathione peroxidase uses 2 GSH to detoxify H2O2 → 2H2O (GSSG regenerated)",
            sublabel: "Process — free radicals and peroxides neutralized.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Oxidant defense holds — RBC membranes and globin survive",
            sublabel: "Output — the steady state the pathway exists to maintain.",
            variant: "output",
          },
          {
            id: "x1",
            label: "G6PD deficiency: ↓NADPH → GSH runs out → oxidizing agents denature globin (Heinz bodies) and destroy RBCs",
            sublabel: "Inhibitor — hemolytic anemia; splenic macrophages pluck Heinz bodies out, making bite cells.",
            variant: "inhibit",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "NADPH" },
          { from: "s1", to: "s2", label: "2 GSH (reduced)" },
          { from: "s2", to: "o1", label: "H2O2 → 2H2O" },
          { from: "x1", to: "s1", type: "inhibit", label: "no NADPH → GSSG stays oxidized" },
        ],
        caption:
          "The cycle is a loop of conversions: G6PD supplies NADPH; glutathione reductase spends it converting oxidized GSSG back to reduced GSH; glutathione peroxidase spends GSH converting hydrogen peroxide to water, regenerating GSSG for the next turn. Every turn depends on the NADPH faucet staying open. G6PD deficiency shuts it: with glutathione stuck oxidized, fava beans, sulfonamides, nitrofurantoin, primaquine — or the free radicals of infection, the most common precipitant — oxidize globin into Heinz bodies and burst the cell; the survivors carry bite cells where splenic macrophages have removed the Heinz material.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "hmp-shunt-map",
      title: "The HMP shunt reactions map — oxidative line, nonoxidative dock",
      caption:
        "The two-phase structure exactly as the source figure draws it: the oxidative (irreversible) band runs glucose-6-P through glucose-6-P dehydrogenase (NADP+ → NADPH) to 6-phosphogluconate and on to ribulose-5-P (second NADPH + CO2); phosphopentose isomerase converts ribulose-5-P to ribose-5-P, which feeds nucleotide synthesis; and the nonoxidative (reversible) band uses transketolase (B1) to shuffle ribose-5-P carbons back to fructose-6-P — rejoining the glycolysis intermediates fructose 1,6-bisphosphate, DHAP, and glyceraldehyde-3-P. Both phases in the cytoplasm; no ATP used or produced.",
      notice:
        "Separate the two bands by their rules: oxidative = irreversible, commits the glucose-6-P, pays out NADPH; nonoxidative = reversible, moves carbons only, no redox. Then note the enzyme cofactor pattern — transketolase's B1 is the same thiamine that PDH and α-KG dehydrogenase use, so thiamine deficiency touches all three. The tissue strip answers 'where does this run hardest': lactating mammary glands, liver, adrenal cortex (all NADPH-hungry lipid/steroid factories), and RBCs (glutathione defense).",
    },
    {
      kind: "visual",
      visualId: "glutathione-redox-cycle",
      title: "The glutathione redox cycle — the RBC's antioxidant loop",
      caption:
        "The three-enzyme loop from the source figure: glucose-6-P dehydrogenase makes NADPH (6-phosphogluconolactone out, NADP+ back); glutathione reductase uses NADPH to reduce GSSG to 2 GSH; glutathione peroxidase uses 2 GSH to turn H2O2 into 2H2O, regenerating GSSG. The deficiency panel carries the full G6PD story: X-linked recessive, most common human enzyme deficiency, malaria-region prevalence, the oxidant triggers (fava beans, sulfonamides, nitrofurantoin, primaquine), infection as the most common precipitant, and Heinz bodies → bite cells.",
      notice:
        "Trace the loop twice — once with G6PD working (NADPH → reduced GSH → H2O2 detoxified) and once without it (the deficiency panel): GSSG stays oxidized, peroxide accumulates, globin denatures into Heinz bodies, and splenic macrophages bite the inclusions out. The mnemonic closes it: 'Bite into some Heinz ketchup.'",
    },
    {
      kind: "table",
      title: "The pathway's contract — phases, enzymes, and outputs",
      intro: "What each phase does, in the source's own terms.",
      columns: ["Phase", "Key enzymes", "Outputs", "Character"],
      rows: [
        ["Oxidative", "Glucose-6-P dehydrogenase (rate-limiting)", "2 NADPH + CO2 (per glucose-6-P)", "Irreversible — commits the substrate"],
        ["Nonoxidative", "Phosphopentose isomerase; transketolase (B1)", "Ribose-5-P → nucleotides; carbons back to F-6-P / G-3-P", "Reversible — carbon shuffling only"],
        ["(Whole pathway)", "—", "NADPH for reductive reactions; ribose for nucleotide synthesis", "Cytoplasm; no ATP used or produced"],
      ],
      caption:
        "NADPH's listed reductive duties: glutathione reduction inside RBCs, fatty acid and cholesterol biosynthesis. Sites of highest activity: lactating mammary glands, liver, adrenal cortex (sites of fatty acid or steroid synthesis), RBCs.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "G6PD deficiency — the vignette the page is built around",
      body:
        "X-linked recessive; the most common human enzyme deficiency; more prevalent among descendants of populations in malaria-endemic regions (eg, sub-Saharan Africa, Southeast Asia). Decreased NADPH in RBCs leads to hemolytic anemia due to poor RBC defense against oxidizing agents — fava beans, sulfonamides, nitrofurantoin, primaquine — and infection (the most common cause) can also precipitate hemolysis via free radicals diffusing into RBCs. On smear: Heinz bodies (denatured globin chains precipitated by oxidative stress) and bite cells (their phagocytic removal by splenic macrophages).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A patient (often with African or Southeast Asian ancestry) develops dark urine and jaundice days after starting primaquine, a sulfonamide, or nitrofurantoin — or after eating fava beans.",
        discriminator: "The oxidant trigger plus X-linked pattern",
        concept: "G6PD deficiency hemolysis",
        answer: "Decreased NADPH in RBCs → poor defense against oxidizing agents → hemolytic anemia with Heinz bodies and bite cells.",
      },
      {
        stem: "A child recovers from an infection and is found to have hemolytic anemia with bite cells on smear.",
        discriminator: "Infection is the most common precipitant",
        concept: "Infection-triggered G6PD hemolysis",
        answer: "The inflammatory response produces free radicals that diffuse into RBCs; with NADPH lacking, glutathione cannot detoxify them — oxidative damage and hemolysis.",
      },
      {
        stem: "A question asks what the pentose phosphate pathway produces, or what NADPH is for in a given tissue.",
        discriminator: "The two outputs and their duties",
        concept: "NADPH + ribose",
        answer: "NADPH for reductive reactions (glutathione reduction inside RBCs; fatty acid and cholesterol biosynthesis) and ribose for nucleotide synthesis — no ATP is used or produced.",
      },
      {
        stem: "A stem asks where the HMP shunt runs hardest.",
        discriminator: "The tissue list",
        concept: "Sites of highest activity",
        answer: "Lactating mammary glands, liver, adrenal cortex (sites of fatty acid or steroid synthesis), and RBCs.",
      },
      {
        stem: "A question links thiamine deficiency to enzyme failures or asks which shunt enzyme needs B1.",
        discriminator: "The transketolase cofactor",
        concept: "Transketolase, B1-dependent",
        answer: "Transketolase — the nonoxidative carbon-shuffling enzyme — requires thiamine (B1), the same cofactor as pyruvate dehydrogenase and α-ketoglutarate dehydrogenase.",
      },
      {
        stem: "A smear question shows intraerythrocytic inclusions or 'nibbled' RBC margins.",
        discriminator: "Heinz bodies vs bite cells",
        concept: "Oxidative denaturation and splenic cleanup",
        answer: "Heinz bodies are denatured globin chains precipitated within RBCs due to oxidative stress; bite cells result from the phagocytic removal of Heinz bodies by splenic macrophages — 'Bite into some Heinz ketchup.'",
      },
    ],
    traps: [
      {
        a: "The shunt makes ATP",
        b: "The shunt makes NADPH",
        whyConfused: "It metabolizes glucose like glycolysis.",
        keyDifference: "No ATP is used or produced in the pentose phosphate pathway — its currency is reducing power (NADPH) and ribose.",
        clue: "Any yield question about the HMP shunt.",
      },
      {
        a: "Oxidative phase",
        b: "Nonoxidative phase",
        whyConfused: "Both handle the same sugars.",
        keyDifference: "Oxidative is irreversible and makes the NADPH (G6PD rate-limiting); nonoxidative is reversible carbon shuffling via transketolase/isomerase with no redox.",
        clue: "'Irreversible' or 'NADPH' in the stem points to the oxidative phase.",
      },
      {
        a: "G6PD inheritance: autosomal recessive",
        b: "G6PD inheritance: X-linked recessive",
        whyConfused: "Enzyme deficiencies skew metabolic-memory toward autosomal patterns.",
        keyDifference: "G6PD deficiency is X-linked recessive — male predominance in vignettes; the most common human enzyme deficiency.",
        clue: "Male child + maternal-line history + oxidant trigger.",
      },
      {
        a: "Heinz bodies are bite cells",
        b: "Heinz bodies precede bite cells",
        whyConfused: "Both are G6PD smear findings.",
        keyDifference: "Heinz bodies are the denatured globin precipitates; bite cells are what remains after splenic macrophages phagocytically remove the Heinz bodies.",
        clue: "The sequence question: precipitate first, bite second.",
      },
    ],
    pivots: [
      {
        lookAlike: "A drug-triggered hemolytic anemia stem (G6PD deficiency vs immune hemolysis vs oxidant hemoglobinopathies)",
        differentiator: "The smear and the timeline",
        correctPath:
          "Days-later onset after an oxidant drug with Heinz bodies/bite cells → G6PD deficiency (↓NADPH, X-linked); immediate Coombs-positive hemolysis → immune; crisis with paresthesias/dark urine in adulthood → consider other RBC enzyme or membrane defects.",
      },
      {
        lookAlike: "An NADPH-source question across tissues (RBC vs liver vs adrenal cortex)",
        differentiator: "Which tissue, which purpose",
        correctPath:
          "RBCs run the shunt for glutathione defense (their only NADPH source); liver and adrenal cortex run it for fatty acid and cholesterol/steroid synthesis; lactating mammary glands for milk fat — the same pathway, three different reasons.",
      },
    ],
    miniCase: {
      vignette:
        "A 6-year-old boy whose maternal grandparents emigrated from Ghana is brought in with 2 days of fatigue, tea-colored urine, and scleral icterus. One week ago he was treated for a urinary tract infection; 3 days ago he ate a serving of fresh fava beans at a family dinner. He is afebrile, mildly tachycardic, and pale. Hemoglobin is 7.8 g/dL with an elevated reticulocyte count and LDH; the peripheral smear shows polychromasia, several erythrocytes with single 'nibbled' margins, and supravital staining reveals intraerythrocytic precipitates.",
      question:
        "Which enzymatic deficit best explains this boy's hemolytic episode?",
      options: [
        {
          label: "A",
          text: "Glucose-6-phosphate dehydrogenase — decreased NADPH leaves glutathione oxidized and globin vulnerable",
          correct: true,
          why: "Correct — the oxidant exposures (infection first, fava beans second), the X-linked ancestry pattern, Heinz-body precipitates on supravital stain, and bite cells from splenic removal are the G6PD deficiency signature: ↓NADPH in RBCs → hemolytic anemia.",
        },
        {
          label: "B",
          text: "Pyruvate kinase — the RBC's failed ATP generation",
          why: "Pyruvate kinase deficiency also causes chronic hemolysis, but its smear shows echinocytes and the crisis lacks the specific oxidant triggers and Heinz-body sequence.",
        },
        {
          label: "C",
          text: "Transketolase — thiamine-dependent carbon shuffling failure",
          why: "Tempting because it is the pathway's other famous enzyme, but transketolase failure impairs nonoxidative interconversions, not the NADPH-glutathione defense that hemolysis requires.",
        },
        {
          label: "D",
          text: "Hexokinase — the first step of glycolysis",
          why: "A glycolytic block starves the RBC of ATP, not of reducing power — and does not produce Heinz bodies after oxidant exposure.",
        },
        {
          label: "E",
          text: "Glutathione peroxidase — the peroxide-detoxifying enzyme itself",
          why: "A peroxidase defect would mimic the hemolysis, but the inheritance would differ and the precipitates would still track to the NADPH supply — the X-linked pattern and ancestry point one step upstream to G6PD.",
        },
      ],
      reasoning:
        "Three anchors: the oxidant timeline (infection — the most common precipitant — plus fava beans), the X-linked pedigree (maternal line, malaria-region ancestry), and the two-stage smear (Heinz bodies → bite cells). All three converge on the NADPH faucet: glucose-6-phosphate dehydrogenase, the most common human enzyme deficiency.",
    },
  },
  mnemonics: [
    {
      code: "“Bite into some Heinz ketchup”",
      meaning: "The source's own mnemonic: oxidative stress denatures globin into Heinz bodies within RBCs, and splenic macrophages phagocytically remove them, leaving bite cells.",
      memorizes: "The Heinz-body → bite-cell sequence in G6PD deficiency",
      whenToUse: "Any smear-description or G6PD-sequencing question.",
      clinical: "Supravital stain shows the Heinz bodies; the peripheral smear shows the bites.",
    },
    {
      code: "“The shunt sells reducing power, not energy”",
      meaning: "The pentose phosphate pathway produces NADPH (reducing power) and ribose (nucleotides) — no ATP is used or produced anywhere in it.",
      memorizes: "The pathway's outputs and its ATP-neutrality",
      whenToUse: "Any yield question contrasting the shunt with glycolysis.",
      clinical: "RBCs live on glycolysis for ATP and on the shunt for NADPH — two separate budgets.",
    },
    {
      code: "“G6PD: the shunt's gatekeeper — Girls carry, Guys break”",
      meaning: "Glucose-6-phosphate dehydrogenase is the rate-limiting irreversible step, and its deficiency is X-linked recessive: carrier females, affected males — most common human enzyme deficiency, selected in malaria-endemic regions.",
      memorizes: "The rate-limiting enzyme plus the inheritance pattern",
      whenToUse: "Rate-limiting questions and G6PD pedigree stems.",
      clinical: "The malaria-region prevalence (sub-Saharan Africa, Southeast Asia) is the classic Heterozygote-advantage exam link.",
    },
  ],
  rapidReview: {
    s30: [
      "HMP shunt = NADPH + ribose; no ATP used or produced",
      "Oxidative (irreversible): G6PD rate-limiting → 2 NADPH + CO2",
      "G6PD deficiency: X-linked, Heinz bodies, bite cells",
    ],
    m3: [
      "Nonoxidative (reversible): transketolase (B1) → F-6-P and G-3-P",
      "NADPH keeps glutathione reduced → detoxifies free radicals and peroxides",
      "Oxidant triggers: fava beans, sulfonamides, nitrofurantoin, primaquine; infection = most common cause",
    ],
    m10: [
      "Sites of highest activity: lactating mammary glands, liver, adrenal cortex, RBCs",
      "Phosphopentose isomerase: ribulose-5-P → ribose-5-P → nucleotide synthesis",
      "Most common human enzyme deficiency; malaria-endemic region prevalence",
    ],
  },
  recall: [
    {
      q: "What are the two outputs of the pentose phosphate pathway, and what is its ATP position?",
      a: "NADPH for reductive reactions (glutathione reduction in RBCs; fatty acid and cholesterol biosynthesis) and ribose for nucleotide synthesis. No ATP is used or produced.",
    },
    {
      q: "Name the two phases, their reversibility, and their key enzymes.",
      a: "Oxidative (irreversible) — glucose-6-P dehydrogenase rate-limiting, then oxidation to ribulose-5-P; nonoxidative (reversible) — phosphopentose isomerase and transketolase (B1).",
    },
    {
      q: "Where does the pathway occur, and where is activity highest?",
      a: "Both phases occur in the cytoplasm. Highest activity: lactating mammary glands, liver, adrenal cortex (sites of fatty acid or steroid synthesis), RBCs.",
    },
    {
      q: "Walk the glutathione redox cycle.",
      a: "G6PD makes NADPH (NADP+ returns; 6-phosphogluconolactone out); glutathione reductase uses NADPH to reduce GSSG → 2 GSH; glutathione peroxidase uses 2 GSH to detoxify H2O2 → 2H2O, regenerating GSSG.",
    },
    {
      q: "List the classic oxidant triggers of G6PD hemolysis and the most common precipitant.",
      a: "Fava beans, sulfonamides, nitrofurantoin, primaquine; infection is the most common cause (free radicals diffuse into RBCs).",
    },
    {
      q: "Define Heinz bodies and bite cells.",
      a: "Heinz bodies — denatured globin chains precipitated within RBCs due to oxidative stress; bite cells — the result of their phagocytic removal by splenic macrophages ('Bite into some Heinz ketchup').",
    },
    {
      q: "Give the inheritance, prevalence rank, and population distribution of G6PD deficiency.",
      a: "X-linked recessive; the most common human enzyme deficiency; more prevalent among descendants of populations in malaria-endemic regions (eg, sub-Saharan Africa, Southeast Asia).",
    },
    {
      q: "Which shunt enzyme shares its cofactor with PDH and α-KG dehydrogenase, and what is the cofactor?",
      a: "Transketolase — thiamine (B1).",
    },
  ],
  related: [
    {
      title: "Glycolysis Regulation",
      topicId: "glycolysis-regulation",
      note: "The shunt branches off glucose-6-P before glycolysis commits at PFK-1, and the nonoxidative phase hands carbons back as F-6-P and G-3-P — the two pathways share intermediates but not currencies (NADPH vs ATP).",
    },
    {
      title: "TCA Cycle & Pyruvate Dehydrogenase",
      topicId: "tca-cycle-pdh",
      note: "Transketolase's thiamine is the same B1 that PDH and α-KG dehydrogenase need — one deficiency, three enzyme failures across two pathways.",
    },
    {
      title: "Metabolism Overview & Rate-Limiting Enzymes",
      topicId: "metabolism-overview",
      note: "G6PD takes its place in the rate-limiting roster as the shunt's committed step — the NADPH factory's gatekeeper.",
    },
    {
      title: "Water-Soluble Vitamins I (B1, B2, B3, B6, B7)",
      topicId: "b-vitamins-1",
      note: "Thiamine (B1) as TPP serves transketolase — the shunt's enzyme is the lab-measurable B1 marker alongside PDH and α-KG DH.",
    },
  ],
  crossLinks: [
    {
      subject: "Hematology",
      connection: "G6PD deficiency hemolytic anemia — X-linked recessive, oxidant-triggered, Heinz bodies on supravital stain and bite cells on peripheral smear.",
    },
    {
      subject: "Pharmacology & Toxicology",
      connection: "The drug triggers: sulfonamides, nitrofurantoin, primaquine (and dapsone-class agents) precipitate hemolysis in G6PD-deficient patients.",
    },
    {
      subject: "Epidemiology & Population Genetics",
      connection: "Heterozygote advantage in malaria-endemic regions explains the high prevalence in sub-Saharan African and Southeast Asian descendant populations.",
    },
  ],
};
