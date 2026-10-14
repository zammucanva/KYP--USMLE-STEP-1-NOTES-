import type { KypUsMLENote } from "../types";

// Biochemistry — Metabolism (E-batch, book order 1 of the metabolism block).
// Source: First Aid 2026, Part 1 pdf 93 / book 71 (enzyme terminology
// descriptors; rate-determining enzymes of metabolic processes)

export const enzymeTerminology: KypUsMLENote = {
  id: "enzyme-terminology",
  title: "Enzyme Terminology & Kinetics Concepts",
  subtitle:
    "The suffix decoder ring — kinase vs phosphorylase vs phosphatase, dehydrogenase vs hydroxylase vs carboxylase, synthase vs synthetase — and the rate-determining enzyme table with every regulator the exam quotes.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Metabolism",
  pilotCategory: "Metabolism — enzyme fundamentals",
  difficulty: 1,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 71 (enzyme terminology; rate-determining enzymes of metabolic processes)",
  tags: [
    "enzyme terminology",
    "kinase",
    "phosphorylase",
    "phosphatase",
    "dehydrogenase",
    "hydroxylase",
    "carboxylase",
    "mutase",
    "synthase",
    "rate-determining enzyme",
    "PFK-1",
    "fructose-1,6-bisphosphatase",
    "isocitrate dehydrogenase",
    "glycogen synthase",
    "glycogen phosphorylase",
    "G6PD",
    "carbamoyl phosphate synthetase II",
    "PRPP amidotransferase",
    "carbamoyl phosphate synthetase I",
    "acetyl-CoA carboxylase",
    "carnitine acyltransferase I",
    "HMG-CoA synthase",
    "HMG-CoA reductase",
  ],
  core: {
    what: "An enzyme's name often describes its function — for example, glucokinase catalyzes the phosphorylation of glucose using a molecule of ATP. Commonly used descriptors: kinase (transfers a phosphate group from a high-energy molecule, usually ATP, to a substrate — eg, phosphofructokinase); phosphorylase (adds inorganic phosphate onto substrate without using ATP — eg, glycogen phosphorylase); phosphatase (removes a phosphate group from substrate — eg, fructose-1,6-bisphosphatase 1); dehydrogenase (catalyzes oxidation-reduction reactions — eg, pyruvate dehydrogenase); hydroxylase (adds a hydroxyl group onto substrate — eg, tyrosine hydroxylase); carboxylase (transfers carboxyl groups with the help of biotin — eg, pyruvate carboxylase); mutase (relocates a functional group within a molecule — eg, vitamin B12–dependent methylmalonyl-CoA mutase); synthase (catalyzes synthesis reactions without using ATP as a source of energy). The rate-determining enzyme table pairs each metabolic process with its committed enzyme and its ⊕/⊝ regulators (glycolysis — PFK-1; gluconeogenesis — fructose-1,6-bisphosphatase 1; TCA — isocitrate dehydrogenase; glycogenesis — glycogen synthase; glycogenolysis — glycogen phosphorylase; HMP shunt — G6PD; de novo pyrimidine synthesis — carbamoyl phosphate synthetase II; de novo purine synthesis — PRPP amidotransferase; urea cycle — carbamoyl phosphate synthetase I; fatty acid synthesis — acetyl-CoA carboxylase; fatty acid oxidation — carnitine acyltransferase I; ketogenesis — HMG-CoA synthase; cholesterol synthesis — HMG-CoA reductase).",
    why: "This page is the decoder ring for every metabolism question that follows: name an enzyme and the suffix tells you the chemistry, and name a pathway and the table tells you the enzyme and its hormonal handles. Half of the rate-determining-enzyme rows are standalone exam stems (statins target HMG-CoA reductase; malonyl-CoA brakes fatty acid oxidation; N-acetylglutamate gates the urea cycle).",
    keyIdea: "Decode the SUFFIX first — where the phosphate comes from separates kinase (from ATP) from phosphorylase (inorganic phosphate, no ATP) from phosphatase (removes it); what gets added separates hydroxylase (−OH) from carboxylase (−COOH, biotin-dependent) from mutase (relocates within the molecule); and synthase builds WITHOUT spending ATP. Then memorize the rate-determining table as enzyme + energy-state/hormone handles: AMP and F-2,6-BP ⊕ PFK-1 while ATP and citrate ⊝ it; the fed/hormone pairs (insulin ⊕ glycogen synthase and ACC; epinephrine/glucagon ⊕ glycogen phosphorylase); and the two gatekeeper oddballs — malonyl-CoA ⊝ carnitine acyltransferase I (β-oxidation) and N-acetylglutamate ⊕ carbamoyl phosphate synthetase I (urea cycle).",
  },
  mechanisms: [
    {
      id: "rate-limiting-control-logic",
      title: "Rate-determining enzymes — how each pathway is throttled",
      context: "Fed vs fasting states; pathway committed steps",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A metabolic process needs a committed, regulated first step",
            sublabel: "Input — the rate-determining enzyme sets the flux through the whole pathway.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Energy-state sensors: AMP ⊕ and F-2,6-BP ⊕ drive PFK-1; ATP ⊝, citrate ⊝ brake it",
            sublabel: "Process — glycolysis turns on when the cell is energy-poor (AMP) regardless of insulin.",
            variant: "process",
          },
          {
            id: "s2",
            label: "Mirror enzymes for the reverse direction: fructose-1,6-bisphosphatase 1 (gluconeogenesis) is ⊝ by the same AMP and F-2,6-BP that ⊕ PFK-1",
            sublabel: "Process — reciprocal regulation prevents futile cycling between glycolysis and gluconeogenesis.",
            variant: "process",
          },
          {
            id: "s3",
            label: "Hormone handles: insulin ⊕ glycogen synthase and acetyl-CoA carboxylase; epinephrine/glucagon ⊕ glycogen phosphorylase; insulin ⊕, thyroxine ⊕, estrogen ⊕ vs glucagon ⊝, cholesterol ⊝ on HMG-CoA reductase",
            sublabel: "Process — fed-state storage vs fasting-state mobilization, wired enzyme by enzyme.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Gatekeeper oddballs: malonyl-CoA ⊝ carnitine acyltransferase I (oxidation off while synthesis runs) · N-acetylglutamate ⊕ carbamoyl phosphate synthetase I (urea cycle on when protein is being broken down) · NADPH ⊝ and NADP+ ⊕ G6PD",
            sublabel: "Output — the three regulatory logics the exam quotes out of context.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "energy state" },
          { from: "trigger", to: "s2", label: "reciprocal mirror" },
          { from: "trigger", to: "s3", label: "hormones" },
          { from: "s1", to: "o1" },
          { from: "s2", to: "o1" },
          { from: "s3", to: "o1" },
        ],
        caption:
          "Every rate-determining enzyme answers one of three control questions. Energy state: AMP and fructose-2,6-bisphosphate stimulate PFK-1 while ATP and citrate inhibit it — and the gluconeogenic mirror (fructose-1,6-bisphosphatase 1) feels the same signals in reverse, so the two pathways never run at once. Hormone state: insulin turns on the storage/synthesis enzymes (glycogen synthase, ACC, HMG-CoA reductase with thyroxine and estrogen), while epinephrine and glucagon turn on the mobilization enzymes (glycogen phosphorylase). Substrate logic: malonyl-CoA (the fatty-acid-synthesis intermediate) inhibits carnitine acyltransferase I so freshly synthesized fat is not immediately burned, N-acetylglutamate switches on the urea cycle's first enzyme, and the NADP+/NADPH pair throttles the HMP shunt at G6PD.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "The suffix decoder — eight descriptors, eight chemistries",
      body: [
        "An enzyme's name often describes its function, and the exam routinely tests whether you can hear the chemistry in the suffix. Glucokinase is the worked example: an enzyme that catalyzes the phosphorylation of glucose using a molecule of ATP — the kinase signature is a phosphate group transferred FROM a high-energy molecule (usually ATP) TO a substrate, as in phosphofructokinase. Phosphorylase sounds similar but is the opposite economy: it adds inorganic phosphate onto a substrate WITHOUT using ATP — glycogen phosphorylase cleaves glucose-1-phosphate straight off glycogen using free Pi. Phosphatase removes the phosphate group entirely (fructose-1,6-bisphosphatase 1 strips the phosphate that PFK-1 put on).",
        "The transfer enzymes sort by cargo: dehydrogenase catalyzes oxidation-reduction reactions (pyruvate dehydrogenase hands electrons to NAD+); hydroxylase adds a hydroxyl group (−OH) onto the substrate (tyrosine hydroxylase, the rate-limiter of catecholamine synthesis); carboxylase transfers carboxyl groups (−COOH) with the help of biotin (pyruvate carboxylase — the biotin dependence ties back to the nutrition notes); and mutase relocates a functional group WITHIN a molecule (the vitamin B12–dependent methylmalonyl-CoA mutase from the B12 map). Synthase catalyzes synthesis reactions without using ATP as a source of energy — the distinction that separates it from the ATP-spending synthetases (carbamoyl phosphate synthetase I and II spend ATP; their name says so).",
      ],
    },
    {
      kind: "table",
      title: "Rate-determining enzymes of metabolic processes — the full table",
      intro: "The source's table, verbatim enzyme and regulator pairings (book p. 71).",
      columns: ["Process", "Rate-determining enzyme", "Regulators"],
      rows: [
        ["Glycolysis", "Phosphofructokinase-1 (PFK-1)", "AMP ⊕, fructose-2,6-bisphosphate ⊕ · ATP ⊝, citrate ⊝"],
        ["Gluconeogenesis", "Fructose-1,6-bisphosphatase 1", "AMP ⊝, fructose-2,6-bisphosphate ⊝"],
        ["TCA cycle", "Isocitrate dehydrogenase", "ADP ⊕ · ATP ⊝, NADH ⊝"],
        ["Glycogenesis", "Glycogen synthase", "Glucose-6-phosphate ⊕, insulin ⊕, cortisol ⊕ · epinephrine ⊝, glucagon ⊝"],
        ["Glycogenolysis", "Glycogen phosphorylase", "Epinephrine ⊕, glucagon ⊕, AMP ⊕ · glucose-6-phosphate ⊝, insulin ⊝, ATP ⊝"],
        ["HMP shunt", "Glucose-6-phosphate dehydrogenase (G6PD)", "NADP+ ⊕ · NADPH ⊝"],
        ["De novo pyrimidine synthesis", "Carbamoyl phosphate synthetase II", "ATP ⊕, PRPP ⊕ · UTP ⊝"],
        ["De novo purine synthesis", "Glutamine-PRPP amidotransferase", "PRPP ⊕ · AMP ⊝, IMP ⊝, GMP ⊝"],
        ["Urea cycle", "Carbamoyl phosphate synthetase I", "N-acetylglutamate ⊕"],
        ["Fatty acid synthesis", "Acetyl-CoA carboxylase (ACC)", "Insulin ⊕, citrate ⊕ · glucagon ⊝, palmitoyl-CoA ⊝"],
        ["Fatty acid oxidation", "Carnitine acyltransferase I", "Malonyl-CoA ⊝"],
        ["Ketogenesis", "HMG-CoA synthase", "— (HOMG! I'm starving!)"],
        ["Cholesterol synthesis", "HMG-CoA reductase", "Insulin ⊕, thyroxine ⊕, estrogen ⊕ · glucagon ⊝, cholesterol ⊝"],
      ],
      caption:
        "Read the table in three bands: the energy-sensing pair (PFK-1 vs fructose-1,6-bisphosphatase 1 — same signals, opposite effects, no futile cycle), the hormone-wired storage/mobilization pair (glycogen synthase vs glycogen phosphorylase; ACC on in the fed state), and the gatekeepers (malonyl-CoA ⊝ CAT I — never synthesize and burn fat at once; N-acetylglutamate ⊕ CPS I — the urea cycle runs only when there is protein to dispose of). The statin target (HMG-CoA reductase) is the pharmacology bridge.",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why phosphorylase does not spend ATP — and why that matters",
      body: "Glycogen phosphorylase cleaves the α-1,4 bond of glycogen by phosphorolysis: inorganic phosphate attacks the glycosidic bond and the glucose leaves AS glucose-1-phosphate — already phosphorylated, never spending an ATP, and ready to enter glycolysis at the level of glucose-6-phosphate. That is why glycogenolysis yields 3 ATP per glucose residue (bypassing hexokinase's investment) while free glucose from the gut yields 2 — and why the phosphorylase/synthase pair around glycogen is the cleanest illustration of the kinase-phosphorylase-phosphatase distinction on the page.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page",
      body: "Five recurring shapes: (1) the suffix stem — which enzyme adds inorganic phosphate without ATP (phosphorylase); which relocates a group within a molecule (mutase); which is biotin-dependent (carboxylase); (2) the rate-limiter stem — 'the rate-determining enzyme of the TCA cycle' (isocitrate dehydrogenase); (3) the regulator stem — what stimulates PFK-1 (AMP, F-2,6-BP) vs inhibits it (ATP, citrate); (4) the gatekeeper stem — malonyl-CoA inhibits carnitine acyltransferase I; N-acetylglutamate activates CPS I; NADPH inhibits G6PD; (5) the drug stem — statins competitively inhibit HMG-CoA reductase (the cholesterol-synthesis rate-limiter).",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Why the table is the metabolism chapter's spine",
      body: [
        "Every note that follows this one in the metabolism block names one of these enzymes: the glycolysis note expands PFK-1's F-2,6-BP switch, the glycogen note builds its storage-disease ladder on glycogen synthase and phosphorylase, the lipids notes turn on ACC and carnitine acyltransferase I, the ketone note rides HMG-CoA synthase, and the urea-cycle note explains N-acetylglutamate's absence in the hyperammonemic newborn. Learning the table here is what makes those notes recognizable rather than novel.",
        "Clinically, the table's rows are the targets: statins at HMG-CoA reductase are among the most-prescribed drugs in medicine; the glucagon-like drugs for diabetes reach glycogen phosphorylase's hormonal wiring indirectly; and the inborn errors hit the rows one at a time — CPS I deficiency (urea cycle), G6PD deficiency (HMP shunt), phosphorylase kinase deficiency (glycogenolysis — one of the glycogen-storage diseases ahead). The suffix decoder, meanwhile, lets you parse an unfamiliar enzyme in a stem and still answer the question — the exact skill the page's first sentence is teaching.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A question asks which enzyme catalyzes the transfer of a phosphate group from a high-energy molecule to a substrate, using phosphofructokinase as the example.",
        discriminator: "Phosphate FROM ATP onto substrate",
        concept: "Kinase",
        answer: "Kinase — catalyzes transfer of a phosphate group from a high-energy molecule (usually ATP) to a substrate (eg, phosphofructokinase); glucokinase phosphorylates glucose using ATP",
      },
      {
        stem: "An enzyme cleaves glucose off glycogen adding inorganic phosphate without using ATP.",
        discriminator: "Pi, no ATP",
        concept: "Phosphorylase",
        answer: "Phosphorylase — adds inorganic phosphate onto substrate without using ATP (eg, glycogen phosphorylase); contrast phosphatase (removes phosphate — fructose-1,6-bisphosphatase 1) and kinase (uses ATP)",
      },
      {
        stem: "A rate-determining-enzyme question names the TCA cycle, or de novo purine synthesis, or the urea cycle.",
        discriminator: "The table rows",
        concept: "Rate-determining enzymes",
        answer: "TCA — isocitrate dehydrogenase (ADP ⊕; ATP, NADH ⊝); de novo purine — glutamine-PRPP amidotransferase (PRPP ⊕; AMP, IMP, GMP ⊝); urea cycle — carbamoyl phosphate synthetase I (N-acetylglutamate ⊕)",
      },
      {
        stem: "A patient on a fatty-acid-synthesis-heavy state cannot oxidize fatty acids; the inhibitor is named.",
        discriminator: "Malonyl-CoA ⊝ carnitine acyltransferase I",
        concept: "Fatty acid oxidation rate-limiting gate",
        answer: "Carnitine acyltransferase I — inhibited by malonyl-CoA (the ACC product): while fatty acid synthesis runs, oxidation is locked out of the mitochondria",
      },
      {
        stem: "A drug question names the rate-determining enzyme of cholesterol synthesis and its regulators.",
        discriminator: "The statin target",
        concept: "HMG-CoA reductase",
        answer: "Cholesterol synthesis — HMG-CoA reductase; stimulated by insulin, thyroxine, estrogen; inhibited by glucagon and cholesterol (and by statins, competitively)",
      },
    ],
    traps: [
      {
        a: "Kinase",
        b: "Phosphorylase",
        whyConfused: "Both put phosphate on things.",
        keyDifference: "Kinase transfers phosphate FROM a high-energy donor (usually ATP); phosphorylase adds INORGANIC phosphate without using ATP.",
        clue: "ATP spent → kinase; free Pi → phosphorylase.",
      },
      {
        a: "Phosphorylase",
        b: "Phosphatase",
        whyConfused: "Near-identical names.",
        keyDifference: "Phosphorylase ADDS inorganic phosphate; phosphatase REMOVES a phosphate group (fructose-1,6-bisphosphatase 1).",
        clue: "-ase on phosphate-: phosphorylase adds it, phosphatase takes it.",
      },
      {
        a: "Synthase",
        b: "Synthetase (eg, carbamoyl phosphate synthetase I/II)",
        whyConfused: "Both synthesize.",
        keyDifference: "Synthase catalyzes synthesis WITHOUT using ATP as an energy source; synthetases (the CPS pair) SPEND ATP — the name is the tell.",
        clue: "Glycogen synthase (no direct ATP) vs carbamoyl phosphate synthetase II (ATP ⊕ as regulator, ATP as substrate).",
      },
      {
        a: "Carbamoyl phosphate synthetase I",
        b: "Carbamoyl phosphate synthetase II",
        whyConfused: "Same enzyme name, one numeral apart.",
        keyDifference: "CPS I = urea cycle, mitochondrial, activated by N-acetylglutamate; CPS II = de novo pyrimidine synthesis, cytosolic, regulated by ATP/PRPP ⊕ and UTP ⊝.",
        clue: "I (one) = urea (mitochondria); II = pyrimidines (cytosol).",
      },
    ],
    pivots: [
      {
        lookAlike: "A 'which enzyme is rate-determining' stem offering glycolysis, gluconeogenesis, and glycogenolysis options",
        differentiator: "Match the pathway to its committed enzyme",
        correctPath: "Glycolysis → PFK-1 (AMP/F-2,6-BP ⊕); gluconeogenesis → fructose-1,6-bisphosphatase 1 (same signals ⊝); glycogenolysis → glycogen phosphorylase (epinephrine/glucagon/AMP ⊕).",
      },
      {
        lookAlike: "An 'enzyme-name' stem offering mutase, hydroxylase, and carboxylase for an unfamiliar reaction",
        differentiator: "The cargo being moved",
        correctPath: "Group relocated WITHIN the molecule → mutase (methylmalonyl-CoA mutase, B12-dependent); −OH added → hydroxylase (tyrosine hydroxylase); −COOH transferred with biotin → carboxylase (pyruvate carboxylase).",
      },
    ],
    miniCase: {
      vignette:
        "A biochemistry exam question presents a table of five unfamiliar enzymes and asks a student to predict each reaction from its name: an enzyme that “transfers a carboxyl group with a vitamin cofactor,” one that “adds inorganic phosphate to break a storage polymer,” one that “removes a phosphate from fructose-1,6-bisphosphate,” one that “relocates a functional group within a molecule using a vitamin B12–dependent cofactor,” and one that “catalyzes an oxidation-reduction reaction on pyruvate.”",
      question: "Which of the following is the correct sequence of descriptor terms for the five reactions, in order?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Carboxylase · phosphorylase · phosphatase · mutase · dehydrogenase",
          why: "Correct. Carboxylase transfers carboxyl groups (−COOH) with the help of biotin; phosphorylase adds inorganic phosphate onto a substrate without using ATP (glycogen cleavage); phosphatase removes a phosphate group from substrate (fructose-1,6-bisphosphatase 1); mutase relocates a functional group within a molecule (B12-dependent methylmalonyl-CoA mutase); dehydrogenase catalyzes oxidation-reduction reactions (pyruvate dehydrogenase).",
        },
        {
          label: "B",
          text: "Kinase · phosphorylase · phosphatase · mutase · dehydrogenase",
          why: "Only the first item is wrong — a kinase transfers phosphate from a high-energy molecule (usually ATP), not a carboxyl group with a vitamin cofactor; the biotin signal marks the carboxylase.",
        },
        {
          label: "C",
          text: "Carboxylase · kinase · phosphatase · mutase · hydroxylase",
          why: "Two substitutions fail: the inorganic-phosphate/no-ATP signature belongs to phosphorylase, not kinase (which spends ATP); and pyruvate's redox reaction is a dehydrogenase, not a hydroxylase (−OH addition).",
        },
        {
          label: "D",
          text: "Carboxylase · phosphorylase · kinase · mutase · dehydrogenase",
          why: "The third item is reversed — removing a phosphate from fructose-1,6-bisphosphate is the phosphatase (fructose-1,6-bisphosphatase 1, the gluconeogenesis rate-limiter); a kinase would ADD a phosphate at ATP expense.",
        },
        {
          label: "E",
          text: "Mutase · phosphorylase · phosphatase · carboxylase · dehydrogenase",
          why: "The first and fourth items are swapped — the biotin-dependent carboxyl-group transfer is the carboxylase, and the intramolecular relocation with B12 is the mutase; the carboxylase is not B12-dependent (biotin, not cobalamin).",
        },
      ],
      reasoning:
        "The question is the page's own thesis — an enzyme's name often describes its function — dressed as a sequencing exercise. Decode each signature: a vitamin cofactor moving carboxyl groups is biotin → carboxylase; inorganic phosphate attacking a polymer without ATP is phosphorolysis → phosphorylase; phosphate removal → phosphatase; intramolecular relocation with B12 → mutase; electron transfer on pyruvate → dehydrogenase. CLUE → MECHANISM → FINDING → DIAGNOSIS: suffix carries the chemistry → cofactor and phosphate economy sort the candidates → five descriptors in order → carboxylase, phosphorylase, phosphatase, mutase, dehydrogenase — the decoder ring the rest of the metabolism chapter assumes.",
    },
  },
  mnemonics: [
    {
      code: "“HOMG! I'm starving!”",
      meaning: "The ketogenesis rate-determining enzyme is HMG-CoA synthase — starvation (via glucagon/low insulin) turns ketogenesis on.",
      memorizes: "Ketogenesis rate-limiter and its context",
      whenToUse: "Any ketogenesis rate-determining-enzyme question.",
      clinical: "HMG-CoA synthase is hepatic mitochondrial; the ketone note ahead builds on this row.",
    },
    {
      code: "“Kinase spends ATP; phosphorylase uses free Pi; phosphatase takes it all back”",
      meaning: "The phosphate economy of the three look-alike suffixes.",
      memorizes: "Kinase vs phosphorylase vs phosphatase",
      whenToUse: "Any suffix-decoding question; also glycogenolysis ATP-yield questions.",
      clinical: "Glycogen-derived glucose enters glycolysis pre-phosphorylated — 3 ATP per residue vs 2 from free glucose.",
    },
  ],
  rapidReview: {
    s30: [
      "Kinase: phosphate from high-energy molecule (usually ATP) to substrate (phosphofructokinase, glucokinase).",
      "Phosphorylase: adds inorganic phosphate WITHOUT ATP (glycogen phosphorylase). Phosphatase: removes phosphate (fructose-1,6-bisphosphatase 1).",
      "Dehydrogenase: oxidation-reduction (pyruvate DH). Hydroxylase: adds −OH (tyrosine hydroxylase). Carboxylase: −COOH with biotin (pyruvate carboxylase).",
      "Mutase: relocates a group within a molecule (B12-dependent methylmalonyl-CoA mutase). Synthase: synthesis WITHOUT ATP.",
      "Rate limiters: glycolysis PFK-1 · gluconeogenesis F-1,6-BPase 1 · TCA isocitrate DH · glycogenesis glycogen synthase · glycogenolysis glycogen phosphorylase · HMP shunt G6PD.",
      "Rate limiters (cont.): pyrimidines CPS II · purines PRPP amidotransferase · urea cycle CPS I · FA synthesis ACC · FA oxidation carnitine acyltransferase I · ketogenesis HMG-CoA synthase · cholesterol HMG-CoA reductase.",
      "PFK-1: AMP ⊕, F-2,6-BP ⊕ / ATP ⊝, citrate ⊝. F-1,6-BPase 1: AMP ⊝, F-2,6-BP ⊝ (reciprocal).",
      "CAT I ⊝ malonyl-CoA · CPS I ⊕ N-acetylglutamate · G6PD: NADP+ ⊕ / NADPH ⊝.",
    ],
    m3: [
      "The PFK-1 / F-1,6-BPase-1 pair feels the same signals oppositely — no futile cycle between glycolysis and gluconeogenesis.",
      "Insulin ⊕ the fed-state enzymes (glycogen synthase, ACC, HMG-CoA reductase); epinephrine/glucagon ⊕ glycogen phosphorylase.",
      "HMG-CoA reductase: insulin ⊕, thyroxine ⊕, estrogen ⊕ / glucagon ⊝, cholesterol ⊝ — the statin target.",
      "Isocitrate dehydrogenase: ADP ⊕ / ATP ⊝, NADH ⊝ — the TCA row with its own energy sensors.",
      "CPS II sits in the cytosol for pyrimidines; CPS I in mitochondria for urea — same name, different compartment, different activator.",
    ],
    m10: [
      "Glucokinase is the worked example of kinase semantics: phosphorylates glucose using ATP — the liver's sensor and the topic of the metabolism-overview note ahead.",
      "Glycogen phosphorylase yields glucose-1-P directly — the 3-ATP-per-residue economics of glycogen vs diet glucose.",
      "Tyrosine hydroxylase is the rate-limiting hydroxylase of catecholamine synthesis — the suffix appearing in an endocrine context.",
      "ACC (insulin ⊕, citrate ⊕ / glucagon ⊝, palmitoyl-CoA ⊝) is biotin-dependent too — carboxylase semantics and the vitamin link in one enzyme.",
      "UTP ⊝ CPS II is the pyrimidine feedback handle; AMP/IMP/GMP ⊝ PRPP amidotransferase is the purine one — nucleotide notes ahead.",
      "The table is the spine of the metabolism block: each following note expands exactly one of these rows.",
    ],
  },
  recall: [
    {
      q: "Define kinase, phosphorylase, and phosphatase with the source's examples.",
      a: "Kinase — catalyzes transfer of a phosphate group from a high-energy molecule (usually ATP) to a substrate (eg, phosphofructokinase). Phosphorylase — adds inorganic phosphate onto substrate without using ATP (eg, glycogen phosphorylase). Phosphatase — removes a phosphate group from substrate (eg, fructose-1,6-bisphosphatase 1).",
    },
    {
      q: "Define dehydrogenase, hydroxylase, carboxylase, mutase, and synthase.",
      a: "Dehydrogenase — oxidation-reduction reactions (pyruvate dehydrogenase). Hydroxylase — adds hydroxyl group (−OH) onto substrate (tyrosine hydroxylase). Carboxylase — transfers carboxyl groups (−COOH) with the help of biotin (pyruvate carboxylase). Mutase — relocates a functional group within a molecule (vitamin B12–dependent methylmalonyl-CoA mutase). Synthase — catalyzes synthesis reactions without using ATP as a source of energy.",
    },
    {
      q: "Name the rate-determining enzymes for: glycolysis, gluconeogenesis, TCA cycle, HMP shunt, and cholesterol synthesis.",
      a: "Glycolysis — PFK-1; gluconeogenesis — fructose-1,6-bisphosphatase 1; TCA cycle — isocitrate dehydrogenase; HMP shunt — glucose-6-phosphate dehydrogenase (G6PD); cholesterol synthesis — HMG-CoA reductase.",
    },
    {
      q: "What are the regulators of PFK-1 and of HMG-CoA reductase?",
      a: "PFK-1: AMP ⊕, fructose-2,6-bisphosphate ⊕; ATP ⊝, citrate ⊝. HMG-CoA reductase: insulin ⊕, thyroxine ⊕, estrogen ⊕; glucagon ⊝, cholesterol ⊝ (and statins inhibit it competitively).",
    },
    {
      q: "Which molecules gate fatty acid oxidation and the urea cycle at their rate-determining enzymes?",
      a: "Fatty acid oxidation — carnitine acyltransferase I, inhibited by malonyl-CoA (so synthesis and oxidation never run together). Urea cycle — carbamoyl phosphate synthetase I, activated by N-acetylglutamate.",
    },
    {
      q: "What distinguishes the two carbamoyl phosphate synthetases?",
      a: "CPS I — urea cycle, mitochondrial, activated by N-acetylglutamate. CPS II — de novo pyrimidine synthesis, cytosolic, stimulated by ATP and PRPP, inhibited by UTP.",
    },
  ],
  related: [
    {
      title: "Glycolysis Regulation",
      note: "The pilot note that expands PFK-1's row — the F-2,6-BP switch and the kinase/phosphatase pair in full pathway context.",
      topicId: "glycolysis-regulation",
    },
    {
      title: "Metabolism Overview",
      note: "The next note in book order — the compartmentation and pathway map these rate-limiters live inside.",
      topicId: "metabolism-overview",
    },
    {
      title: "Vitamins B6, B7, B9 & B12",
      note: "The cofactor links: carboxylase needs biotin, methylmalonyl-CoA mutase needs B12 — the suffix decoder's vitamin handles.",
      topicId: "b-vitamins-2",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology",
      connection: "Statins competitively inhibit HMG-CoA reductase, the cholesterol-synthesis rate-determining enzyme; metformin-era diabetes drugs echo the insulin/glucagon wiring of the storage enzymes.",
    },
    {
      subject: "Biochemistry — Genetics",
      connection: "The inborn errors land on the table's rows: CPS I deficiency (urea cycle), G6PD deficiency (HMP shunt), phosphorylase kinase deficiency (glycogenolysis).",
    },
    {
      subject: "Endocrinology",
      connection: "Insulin and glucagon act on these enzymes directly — the table is the molecular half of the fed/fasting hormonal picture.",
    },
  ],
};
