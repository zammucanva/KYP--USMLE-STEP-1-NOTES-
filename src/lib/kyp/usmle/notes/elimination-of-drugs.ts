import type { KypUsMLENote } from "../types";

// Pharmacology — PHARMACOKINETICS AND PHARMACODYNAMICS (PH4, a re-production
// of the topic lost with the expired-PAT lineage). Source: pdf 252 BOTTOM
// HALF / book 230 — "Elimination of drugs". SHARED PAGE (the p196
// convention): the TOP half of pdf 252 is "Drug metabolism" (a sibling
// topic, drug-metabolism); this note quotes ONLY the elimination block's
// contiguous lines.
// Carried verbatim from the source: the two-column zero-order/first-order
// block — zero-order [rate of elimination is constant regardless of Cp (ie,
// constant amount of drug eliminated per unit time); Cp ↓ linearly with
// time; examples Phenytoin, Ethanol, and Aspirin (at high or toxic
// concentrations → ↑ salicylate saturation → zero-order elimination);
// capacity-limited elimination; the margin mnemonic "A PEA is round,
// shaped like the “0” in zero-order."] vs first-order [rate directly
// proportional to the drug concentration (ie, constant fraction of drug
// eliminated per unit time); Cp ↓ exponentially with time; applies to most
// drugs; flow-dependent elimination.] — plus BOTH vector curve figures
// (pdfimages: ZERO rasters): (1) the zero-order figure — straight line,
// constant 2 U/h slope, half-life brackets "First t1/2 > Second t1/2 >
// Third t1/2" (each successive interval SHORTER as concentration falls:
// with 2 U/h removed per hour, 16→8 takes 4 h, 8→4 takes 2 h, 4→2 takes
// 1 h), annotation "Time of t1/2 ↑ as concentration ↑"; (2) the
// first-order figure — exponential decay, slope chips 4 U/h → 2 U/h →
// 1 U/h → 0.5 U/h (the slope HALVES as the concentration halves),
// half-life brackets "First t1/2 = Second t1/2 = Third t1/2", annotation
// "Time of t1/2 is constant as concentration ↑".
// Direction note (documented decision): the production brief's glosses
// ("half-life LENGTHENS as concentration falls" / "each successive
// half-life interval is LONGER") contradict the source's own printed
// ">" chain — First t1/2 > Second t1/2 > Third t1/2 means each
// successive interval is SHORTER down the curve. The literal quote, the
// 2 U/h arithmetic, the annotation "Time of t1/2 ↑ as concentration ↑",
// and the VLM census (pass 1: "the FIRST half-life interval, at the
// highest concentration, is drawn longest") all agree: the zero-order
// half-life LENGTHENS as concentration RISES (equivalently, the intervals
// shrink as concentration falls). The note ships the correct reading.
// Census (pdfimages + VLM, ph4-vlm-census.ts): ZERO rasters; the PEA
// mnemonic prints in the right margin column directly under
// "Capacity-limited elimination." (red bold "PEA"/“0”/“zero-”); no other
// margin mnemonics on the page. The KYP visual (elimination-kinetics-map)
// and the four ALL-CAPS mnemonics are original.

export const eliminationOfDrugs: KypUsMLENote = {
  id: "elimination-of-drugs",
  title: "Elimination of Drugs: Zero & First Order",
  subtitle:
    "The two rate laws of drug elimination (book 230) — ZERO-ORDER elimination: the rate of elimination is constant regardless of Cp (ie, a constant AMOUNT of drug eliminated per unit time), so Cp ↓ linearly with time; it is capacity-limited elimination, and its examples are Phenytoin, Ethanol, and Aspirin (at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination). FIRST-ORDER elimination: the rate is directly proportional to the drug concentration (ie, a constant FRACTION of drug eliminated per unit time), so Cp ↓ exponentially with time; it applies to most drugs and is flow-dependent elimination. The page's two curve figures carry the exam signatures: the zero-order line falls at a constant 2 U/h with half-life brackets First t1/2 > Second t1/2 > Third t1/2 (each successive interval shorter — the time of t1/2 ↑ as concentration ↑, so a zero-order drug has no single half-life), while the first-order curve halves its slope 4 U/h → 2 U/h → 1 U/h → 0.5 U/h with equal brackets First t1/2 = Second t1/2 = Third t1/2 (Time of t1/2 is constant as concentration ↑). The bridge between them is saturation: push any first-order drug's concentration past its metabolic capacity and it flips to zero-order — the aspirin-overdose and phenytoin-dosing trap.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Pharmacokinetics and Pharmacodynamics",
  pilotCategory:
    "The complete zero-vs-first elimination pair from the shared page (pdf 252 bottom half / book 230): both rate rules (constant AMOUNT vs constant FRACTION), the linear-vs-exponential Cp decline, the capacity-limited vs flow-dependent tags, the PEA example trio with the source's own margin mnemonic carried verbatim, the saturation crossover (aspirin at high or toxic concentrations → ↑ salicylate saturation → zero-order), and a literal read of both vector curve figures — the constant 2 U/h slope with First t1/2 > Second t1/2 > Third t1/2 versus the halving 4 → 2 → 1 → 0.5 U/h slopes with First t1/2 = Second t1/2 = Third t1/2 and “Time of t1/2 is constant as concentration ↑”.",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 230–230 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Elimination of drugs; the zero-order/first-order two-column block with its capacity-limited and flow-dependent tags and the “A PEA is round, shaped like the “0” in zero-order” margin mnemonic; the two elimination-curve figures — the zero-order constant-2 U/h line with First t1/2 > Second t1/2 > Third t1/2, and the first-order exponential curve with 4 → 2 → 1 → 0.5 U/h halving slopes and “Time of t1/2 is constant as concentration ↑”)",
  tags: [
    "elimination of drugs",
    "zero-order elimination",
    "first-order elimination",
    "pharmacokinetics",
    "capacity-limited elimination",
    "flow-dependent elimination",
    "constant amount",
    "constant fraction",
    "linear decline",
    "exponential decline",
    "half-life",
    "t1/2",
    "elimination rate",
    "slope",
    "phenytoin",
    "ethanol",
    "aspirin",
    "salicylate",
    "salicylate saturation",
    "A PEA",
    "nonlinear kinetics",
    "saturation kinetics",
    "Michaelis-Menten",
    "Vmax",
    "Km",
    "enzyme saturation",
    "therapeutic drug monitoring",
    "aspirin toxicity",
    "salicylate poisoning",
    "dose-dependent half-life",
    "steady state",
    "high-extraction drugs",
    "hepatic blood flow",
  ],
  core: {
    what:
      "ZERO-ORDER ELIMINATION — rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time). Cp ↓ linearly with time. Examples of drugs—Phenytoin, Ethanol, and Aspirin (at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination). Capacity-limited elimination. The source's margin mnemonic, verbatim: “A PEA is round, shaped like the “0” in zero-order.” FIRST-ORDER ELIMINATION — rate of first-order elimination is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time). Cp ↓ exponentially with time. Applies to most drugs. Flow-dependent elimination. The zero-order figure: a straight line whose slope chips read 2 U/h at every point (constant rate), with half-life brackets First t1/2 > Second t1/2 > Third t1/2 — with 2 U/h removed per hour, halving 16 U → 8 U takes 4 h, 8 → 4 takes 2 h, 4 → 2 takes 1 h — and the annotation that the time of t1/2 ↑ as concentration ↑. The first-order figure: an exponential curve whose slope chips halve with the concentration (Elimination rate (=slope): 4 U/h → 2 U/h → 1 U/h → 0.5 U/h), with equal brackets First t1/2 = Second t1/2 = Third t1/2 and the annotation “Time of t1/2 is constant as concentration ↑”.",
    why:
      "Everything in dosing hangs off this pair. The rate rule decides the shape of the decline (a constant amount per hour draws a straight line; a constant fraction per hour draws an exponential curve), and the shape decides the half-life: a first-order drug has one fixed t1/2 (each half-life removes the same fraction, so the intervals are equal and dosing intervals can be built on it), while a zero-order drug has none — its half-life wanders with concentration, lengthening as concentration rises, which is why phenytoin levels jump disproportionately when the dose is nudged upward near saturation and why salicylate levels fall slowly and linearly for hours after an overdose. The two tags carry the mechanism: capacity-limited (zero-order — the metabolic machinery is saturated and running at its ceiling, so the rate ignores Cp) versus flow-dependent (first-order — for high-extraction drugs the liver clears everything delivered, so the rate tracks hepatic blood flow, not enzyme capacity). And the two orders are not a fixed property of a molecule but of a concentration: the same aspirin that is first-order at analgesic doses becomes zero-order at toxic ones as ↑ salicylate saturation overwhelms the pathways — the crossover every intoxication question is built on.",
    keyIdea:
      "Read every elimination question through three gates. GATE 1 — WHAT IS CONSTANT? A constant AMOUNT per unit time (mg/h, U/h) = zero-order, regardless of Cp; a constant FRACTION per unit time (%/h) = first-order, directly proportional to Cp. GATE 2 — WHAT DOES THE CURVE DO? Straight line with constant slope chips (the figure's 2 U/h at every segment) = zero-order, Cp ↓ linearly; bending exponential curve with halving slope chips (4 → 2 → 1 → 0.5 U/h) = first-order, Cp ↓ exponentially. GATE 3 — WHAT DOES THE HALF-LIFE DO? Zero-order: brackets shrink down the curve (First t1/2 > Second t1/2 > Third t1/2) and the time of t1/2 ↑ as concentration ↑ — no single half-life exists; first-order: brackets equal (First t1/2 = Second t1/2 = Third t1/2), “Time of t1/2 is constant as concentration ↑.” Then apply the crossover: saturate the machinery (aspirin at high/toxic concentrations, phenytoin near therapeutic levels, ethanol even at social doses) and a first-order drug flips to zero-order — constant amount, straight line, wandering half-life.",
  },
  mechanisms: [
    {
      id: "capacity-saturation-map",
      title:
        "The capacity-saturation switch: why the same drug can be first-order at one concentration and zero-order at another",
      context:
        "The enzyme-saturation logic behind both columns and the PEA examples (book 230)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Cp climbing toward a finite metabolic capacity",
            sublabel:
              "Input — eliminating enzymes and transporters are Michaelis–Menten machines: each has a Km (concentration at half-capacity) and a ceiling Vmax (maximum rate). The question is always which regime Cp sits in.",
            variant: "input",
          },
          {
            id: "low",
            label: "LOW Cp → FIRST-ORDER (constant FRACTION)",
            sublabel:
              "Cp well below capacity → enzyme sites mostly free → every extra molecule finds a site → rate directly proportional to the drug concentration → a constant fraction is eliminated per unit time → Cp ↓ exponentially. For high-extraction drugs this is flow-dependent: the liver clears whatever the blood delivers, so the rate tracks hepatic blood flow. Applies to most drugs at most doses.",
            variant: "process",
          },
          {
            id: "high",
            label: "HIGH/TOXIC Cp → ZERO-ORDER (constant AMOUNT)",
            sublabel:
              "Sites saturate → the pathway runs at its ceiling → the rate stops tracking Cp → a constant amount is eliminated per unit time → Cp ↓ linearly, and the half-life becomes concentration-dependent (time of t1/2 ↑ as concentration ↑). This is capacity-limited elimination — the figure's 2 U/h slope chips that never change.",
            variant: "process",
          },
          {
            id: "output",
            label: "The three crossover consequences",
            sublabel:
              "Output — (1) Aspirin at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination (the source's own chain), so overdose levels fall linearly for hours with a prolonged, dose-dependent half-life. (2) Phenytoin near therapeutic levels already sits close to saturation — a small dose ↑ produces a disproportionate Cp ↑ (nystagmus, ataxia, diplopia). (3) Ethanol saturates even at social doses, so blood alcohol falls at a near-constant rate no matter how high it started.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "low", label: "Cp below capacity (Cp < Km)" },
          { from: "trigger", to: "high", label: "Cp overwhelms capacity (Cp > Km → Vmax)" },
          { from: "low", to: "output", label: "exponential decline, fixed t1/2" },
          { from: "high", to: "output", label: "linear decline, wandering t1/2" },
        ],
      },
    },
    {
      id: "slope-reading-map",
      title:
        "Reading the two curves: slope chips, line shape, and the half-life signature",
      context:
        "The two vector elimination figures on book 230 (redrawn as the KYP visual)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A Cp-vs-time elimination plot with slope chips",
            sublabel:
              "Input — both source figures plot Drug plasma concentration (↑, in U) against Time (h) and label the Elimination rate (=slope) at points along the line. The chips are the diagnostic.",
            variant: "input",
          },
          {
            id: "zero",
            label: "ZERO-ORDER READING — straight line, constant chips",
            sublabel:
              "Slope chips CONSTANT (2 U/h at every segment — the rate is fixed regardless of Cp) on a straight line: Cp ↓ linearly. The x-axis brackets read First t1/2 > Second t1/2 > Third t1/2 — with 2 U/h removed per hour, halving 16 U → 8 U takes 4 h, 8 → 4 takes 2 h, 4 → 2 takes 1 h — so each successive interval is SHORTER as concentration falls; the annotation is that the time of t1/2 ↑ as concentration ↑ (no single half-life exists).",
            variant: "process",
          },
          {
            id: "first",
            label: "FIRST-ORDER READING — exponential curve, halving chips",
            sublabel:
              "Slope chips HALVE with the concentration (Elimination rate (=slope): 4 U/h → 2 U/h → 1 U/h → 0.5 U/h — rate directly proportional to Cp) on an exponential curve: Cp ↓ exponentially. The brackets read First t1/2 = Second t1/2 = Third t1/2 — “Time of t1/2 is constant as concentration ↑” — the fixed half-life that first-order dosing intervals are built on.",
            variant: "target",
          },
          {
            id: "output",
            label: "The exam signature",
            sublabel:
              "Output — constant slope chips + straight line + shrinking brackets (First > Second > Third) = zero-order; halving slope chips + exponential curve + equal brackets (First = Second = Third) = first-order. Two figures, four chips, three brackets each: that is the whole figure pair.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "zero", label: "chips constant (2 U/h)" },
          { from: "trigger", to: "first", label: "chips halving (4→2→1→0.5 U/h)" },
          { from: "zero", to: "output", label: "linear + First > Second > Third" },
          { from: "first", to: "output", label: "exponential + First = Second = Third" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "elimination-kinetics-map",
      title: "The elimination-kinetics map (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source page (book 230): the two-kinetics split as mirror panels — LEFT, zero-order elimination (the linear Cp-vs-time line with constant 2 U/h slope chips, the shrinking t1/2 brackets First > Second > Third, the PEA drug chips Phenytoin/Ethanol/Aspirin, and the capacity-limited enzyme-saturation glyph) against RIGHT, first-order elimination (the exponential decay curve with halving slopes 4 → 2 → 1 → 0.5 U/h, the equal-t1/2 brackets with “Time of t1/2 is constant as concentration ↑”, the applies-to-most-drugs badge, and the flow-dependent note) — over a center fork banner (constant AMOUNT vs constant FRACTION) and a saturation-crossover panel showing how a first-order drug becomes zero-order at toxic concentration (aspirin, phenytoin).",
      notice:
        "Census (pdfimages + VLM): ZERO raster images on pdf 252 — the elimination block is a two-column text table plus TWO vector curve figures whose labels interleave in the text layer. Both figures are REDRAWN here as original KYP vector art (no source artwork reproduced); the PEA line is the source's own margin mnemonic, quoted verbatim with attribution. The four ALL-CAPS mnemonics in the note are original KYP memory layer.",
    },
    {
      kind: "table",
      title:
        "Book 230 — the zero-order / first-order two-column block (carried verbatim)",
      intro:
        "The elimination subsection as printed: the two column heads, both definitions, the example line, and the two mechanism tags. The mnemonic line is the source's own, carried verbatim where it prints (directly under “Capacity-limited elimination.”).",
      columns: [
        "ZERO-ORDER ELIMINATION — book 230 (verbatim)",
        "FIRST-ORDER ELIMINATION — book 230 (verbatim)",
      ],
      rows: [
        [
          "Rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time).",
          "Rate of first-order elimination is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time).",
        ],
        [
          "Cp ↓ linearly with time.",
          "Cp ↓ exponentially with time.",
        ],
        [
          "Examples of drugs—Phenytoin, Ethanol, and Aspirin (at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination).",
          "Applies to most drugs.",
        ],
        [
          "Capacity-limited elimination.",
          "Flow-dependent elimination.",
        ],
        [
          "A PEA is round, shaped like the “0” in zero-order. — the source's own margin mnemonic, carried verbatim (P·E·A = Phenytoin, Ethanol, Aspirin); it prints in the margin directly under “Capacity-limited elimination.”",
          "— (no mnemonic prints in the first-order column)",
        ],
      ],
      caption:
        "One page, two rate laws: constant AMOUNT (straight line, enzymes saturated, half-life wanders with concentration) versus constant FRACTION (exponential curve, delivery-limited, half-life fixed). The PEA trio names the three classic zero-order offenders.",
    },
    {
      kind: "steps",
      title:
        "How to read the two curve figures — the slope-chip protocol (book 230 figures, distilled)",
      intro:
        "Both figures plot Drug plasma concentration (U) against Time (h) and stamp the Elimination rate (=slope) on the line. Read the chips first, the line shape second, the brackets third.",
      steps: [
        {
          label: "CHIP TEST — is the stamped rate constant or halving?",
          detail:
            "Zero-order figure: the chips read 2 U/h at every segment — one rate, stamped repeatedly, because the rate of elimination is constant regardless of Cp. First-order figure: the chips read 4 U/h → 2 U/h → 1 U/h → 0.5 U/h — the Elimination rate (=slope) halves each time the concentration halves, because the rate is directly proportional to the drug concentration.",
        },
        {
          label: "LINE TEST — straight or bent?",
          detail:
            "Constant amount per unit time draws a straight line: Cp ↓ linearly with time (zero-order). Constant fraction per unit time draws an exponential decay curve that flattens as it falls: Cp ↓ exponentially with time (first-order).",
        },
        {
          label: "BRACKET TEST — what do the t1/2 intervals do?",
          detail:
            "Zero-order brackets: First t1/2 > Second t1/2 > Third t1/2 — with 2 U/h removed per hour, 16 U → 8 U takes 4 h, 8 → 4 takes 2 h, 4 → 2 takes 1 h; each successive interval is shorter as concentration falls, so the time of t1/2 ↑ as concentration ↑ and no single half-life exists. First-order brackets: First t1/2 = Second t1/2 = Third t1/2 — each interval removes half (16 → 8 → 4 → 2) in the same time; “Time of t1/2 is constant as concentration ↑.”",
        },
        {
          label: "TAG TEST — capacity-limited or flow-dependent?",
          detail:
            "Zero-order is capacity-limited elimination: the metabolic machinery is saturated and running at its ceiling (Vmax), so the rate ignores Cp. First-order is flow-dependent elimination: for high-extraction drugs the liver clears essentially everything delivered, so the rate tracks hepatic blood flow rather than enzyme capacity.",
        },
        {
          label: "CROSSOVER TEST — where does the flip happen?",
          detail:
            "The same drug can cross over: Aspirin at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination; phenytoin near therapeutic levels sits close to saturation (small dose ↑ → disproportionate Cp ↑); ethanol saturates even at social doses. Below the saturation point each of these behaves first-order.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The bracket arithmetic the figures are drawn from",
      body:
        "Zero-order at a constant 2 U/h from a starting concentration of 16 U: the first half-life (16 → 8) removes 8 U and takes 4 h; the second (8 → 4) removes 4 U and takes 2 h; the third (4 → 2) removes 2 U and takes 1 h — hence First t1/2 > Second t1/2 > Third t1/2, and the half-life LENGTHENS as concentration RISES (the figure's annotation: time of t1/2 ↑ as concentration ↑). First-order from the same 16 U: each half-life removes half the drug (16 → 8 → 4 → 2) in the same interval, and the slope stamps halve in lockstep (4 → 2 → 1 → 0.5 U/h) — hence First t1/2 = Second t1/2 = Third t1/2. If a stem hands you numbers that fall by a fixed AMOUNT, it is zero-order; by a fixed PERCENTAGE, first-order.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "Mnemonic provenance — what is the source's and what is ours",
      body:
        "“A PEA is round, shaped like the “0” in zero-order.” is First Aid's OWN margin mnemonic for the zero-order example list (Phenytoin, Ethanol, Aspirin — book 230, printed in the margin directly under “Capacity-limited elimination.”); it is carried here verbatim with attribution, not claimed as KYP's. Everything ALL-CAPS in this note's memory layer is original KYP: ZERO = AMOUNT, FIRST = FRACTION · STUCK RATE, STRAIGHT LINE · ZERO'S HALF-LIFE WANDERS, FIRST'S HALF-LIFE HOLDS · FLOOD THE ENZYME, FLATTEN THE LINE.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 19-year-old woman presents 4 hours after ingesting several bottles of aspirin; she has tinnitus, tachypnea, and respiratory alkalosis. Serial salicylate concentrations drawn every 2 hours fall from 80 to 64 to 48 mg/dL, and her elimination half-life is reported as markedly prolonged compared with the 2–4 hours expected at therapeutic doses.",
        discriminator:
          "Levels falling by a fixed AMOUNT per interval (linear decline) with a prolonged, concentration-dependent half-life — the saturating pathway",
        concept: "Zero-order elimination at toxic concentration",
        answer:
          "Aspirin at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination: the rate of elimination is constant regardless of Cp (constant amount per unit time), so Cp ↓ linearly with time, and because the time of t1/2 ↑ as concentration ↑, the half-life is dose-dependent and prolonged — the level falls by the same 16 mg/dL every 2 hours no matter how high it started.",
      },
      {
        stem: "A man is brought to the emergency department with slurred speech and ataxia after binge drinking; his blood alcohol concentration is 320 mg/dL. Six hours later it is 230 mg/dL, and six hours after that 140 mg/dL — it has fallen by roughly the same amount each interval since arrival.",
        discriminator:
          "Blood alcohol falling at a near-constant rate regardless of the starting concentration — alcohol dehydrogenase saturated even at social doses",
        concept: "Ethanol as the classic zero-order drug",
        answer:
          "Ethanol is one of the printed zero-order examples (with Phenytoin and Aspirin — “A PEA is round, shaped like the “0” in zero-order”): its rate of elimination is constant regardless of Cp, so blood alcohol ↓ linearly with time (classically ≈ 0.015 g/dL per hour) whether the patient drank a little or a lot — a constant amount per unit time, capacity-limited elimination.",
      },
      {
        stem: "A high-extraction opioid given as an IV bolus shows a plasma concentration curve that falls steeply at first and then more slowly, eliminating 50% of the remaining drug every 3 hours regardless of the starting level; its clearance closely tracks hepatic blood flow.",
        discriminator:
          "Constant FRACTION eliminated per unit time (exponential decline, fixed t1/2) with clearance tracking hepatic blood flow",
        concept: "First-order, flow-dependent elimination",
        answer:
          "First-order elimination: the rate is directly proportional to the drug concentration (constant fraction of drug eliminated per unit time), so Cp ↓ exponentially with time and the half-life is fixed (First t1/2 = Second t1/2 = Third t1/2; “Time of t1/2 is constant as concentration ↑”). It applies to most drugs, and for high-extraction drugs it is flow-dependent — the liver clears what the blood delivers, so hepatic blood flow (not enzyme capacity) sets the rate.",
      },
      {
        stem: "A 24-year-old man with epilepsy whose seizures are controlled on phenytoin has his dose increased by 10% because of a low trough; at follow-up his trough concentration has more than doubled and he has new nystagmus and ataxia.",
        discriminator:
          "A small dose increase producing a disproportionate concentration increase — dosing on the saturated part of the curve",
        concept: "Capacity-limited (zero-order) elimination near saturation",
        answer:
          "Phenytoin is a capacity-limited (zero-order) eliminator at therapeutic concentrations: as Cp approaches the metabolic ceiling, the rate stops tracking concentration (constant amount per unit time), so the concentration rises disproportionately for a small dose change — the time of t1/2 ↑ as concentration ↑. This is why phenytoin requires level-guided titration in small steps.",
      },
      {
        stem: "An exam figure shows a plasma-concentration-versus-time plot: the line is straight, and the rate stamped on the line reads 2 U/h at the first segment, 2 U/h at the second, and 2 U/h at the third; beneath the time axis, the half-life brackets grow visibly narrower left to right.",
        discriminator:
          "Constant slope chips on a straight line with brackets that shrink down the curve (First t1/2 > Second t1/2 > Third t1/2)",
        concept: "Reading the zero-order figure",
        answer:
          "This is the source's zero-order figure: rate of elimination constant regardless of Cp (the 2 U/h chips never change), Cp ↓ linearly with time (the straight line), and the half-life intervals shrink as concentration falls — First t1/2 > Second t1/2 > Third t1/2 — because with 2 U/h removed per hour, each halving removes a smaller absolute amount but takes less time; equivalently, the time of t1/2 ↑ as concentration ↑.",
      },
    ],
    traps: [
      {
        a: "Zero-order elimination",
        b: "First-order elimination",
        whyConfused:
          "Both are rate laws for the same process (drug leaving the body) and both are described by a single sentence with the word “constant” in it",
        keyDifference:
          "ZERO-ORDER keeps a constant AMOUNT per unit time (rate of elimination is constant regardless of Cp → Cp ↓ linearly) — the constant is the AMOUNT; FIRST-ORDER keeps a constant FRACTION per unit time (rate directly proportional to the drug concentration → Cp ↓ exponentially) — the constant is the PROPORTION",
        clue:
          "Find what the stem holds fixed: a fixed mg/dL-per-hour fall (or a straight line) → zero-order; a fixed percent-per-hour fall (or 50% per t1/2, an exponential curve) → first-order",
      },
      {
        a: "Cp ↓ linearly with time",
        b: "Cp ↓ exponentially with time",
        whyConfused:
          "Both describe falling levels, and at a glance over short intervals a falling exponential can look almost straight",
        keyDifference:
          "LINEAR is the zero-order signature — the same absolute amount leaves each hour, so the line never bends and the slope chips (2 U/h) never change; EXPONENTIAL is the first-order signature — the same fraction leaves each hour, so the curve flattens as it falls and the slope chips halve (4 → 2 → 1 → 0.5 U/h)",
        clue:
          "Look at the slope stamps, not the eyeballed steepness: constant chips → linear/zero-order; halving chips → exponential/first-order",
      },
      {
        a: "The zero-order half-life behavior",
        b: "The first-order half-life behavior",
        whyConfused:
          "Both figures print three t1/2 brackets under the time axis, and the labels differ by a single symbol",
        keyDifference:
          "ZERO-ORDER brackets shrink down the curve — First t1/2 > Second t1/2 > Third t1/2 — because a constant 2 U/h takes 4 h to halve 16 U, 2 h to halve 8 U, 1 h to halve 4 U; the time of t1/2 ↑ as concentration ↑, so there is NO single half-life. FIRST-ORDER brackets are equal — First t1/2 = Second t1/2 = Third t1/2 — “Time of t1/2 is constant as concentration ↑”",
        clue:
          "The joining symbol is the answer: “>” between the labels → zero-order (intervals shrink); “=” between the labels → first-order (intervals equal)",
      },
      {
        a: "Capacity-limited elimination",
        b: "Flow-dependent elimination",
        whyConfused:
          "Both are the mechanism tags printed under the two columns, and both explain why a rate might not track concentration in the simple way",
        keyDifference:
          "CAPACITY-LIMITED is the ZERO-ORDER tag — the metabolic machinery is saturated and running at its ceiling, so the rate ignores Cp entirely; FLOW-DEPENDENT is the FIRST-ORDER tag — the liver clears everything delivered (high-extraction drugs), so the rate tracks hepatic blood flow while remaining proportional to concentration",
        clue:
          "Saturation language (overdose, toxicity, saturated enzymes, Vmax) → capacity-limited/zero-order; perfusion language (hepatic blood flow, extraction ratio, cardiac output) → flow-dependent/first-order",
      },
      {
        a: "“Aspirin is a zero-order drug”",
        b: "Aspirin's actual position",
        whyConfused:
          "Aspirin appears in the zero-order example list, so it gets memorized as permanently zero-order",
        keyDifference:
          "The source's own qualifier: Aspirin (at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination) — at low/analgesic doses aspirin is eliminated first-order like most drugs; it CROSSES OVER to zero-order only when the concentration saturates the pathways",
        clue:
          "An aspirin question at analgesic dosing → first-order; the same aspirin after overdose (tinnitus, anion-gap acidosis, serial levels falling by fixed amounts) → ↑ salicylate saturation → zero-order",
      },
    ],
    pivots: [
      {
        lookAlike: "A plasma-concentration-vs-time graph in the stem",
        differentiator:
          "Route by chips, line, brackets: constant slope chips (2 U/h) + straight line + brackets joined by “>” (First t1/2 > Second t1/2 > Third t1/2) → zero-order; halving slope chips (4 → 2 → 1 → 0.5 U/h) + exponential curve + brackets joined by “=” (First t1/2 = Second t1/2 = Third t1/2) → first-order",
        correctPath:
          "Read the Elimination rate (=slope) stamps first — they encode the rate law — then confirm with the line shape and only then with the bracket symbols",
      },
      {
        lookAlike: "A drug level doing something strange after an overdose or a dose change",
        differentiator:
          "Fixed-amount falls or disproportionate rises mean the drug has crossed into saturation: rate no longer ∝ Cp, constant amount per unit time, half-life concentration-dependent (time of t1/2 ↑ as concentration ↑)",
        correctPath:
          "Apply the saturation crossover: therapeutic concentrations → first-order (most drugs); high or toxic concentrations → ↑ saturation → zero-order (aspirin after overdose, phenytoin near therapeutic levels, ethanol at any drinking dose)",
      },
      {
        lookAlike: "A named drug with no graph",
        differentiator:
          "Route by the PEA list and the “most drugs” rule: Phenytoin, Ethanol, Aspirin (at high/toxic concentrations) → zero-order, capacity-limited; virtually everything else at normal doses → first-order, flow-dependent for high-extraction drugs",
        correctPath:
          "“A PEA is round, shaped like the “0” in zero-order” (the source's mnemonic) pulls the three zero-order names; if the drug is not a PEA, default to first-order unless the stem says toxic concentrations",
      },
    ],
    miniCase: {
      vignette:
        "A 19-year-old woman is brought to the emergency department 4 hours after intentionally ingesting about forty 325-mg aspirin tablets. She has tinnitus, tachypnea, and a respiratory alkalosis with an increased anion gap. Serial salicylate concentrations drawn every 2 hours fall from 80 mg/dL to 64 mg/dL and then to 48 mg/dL — each 2-hour interval removes almost exactly 16 mg/dL — and the laboratory reports an apparent elimination half-life of roughly 18 hours (2–4 hours is typical at therapeutic doses). Across the room, a 24-year-old man with well-controlled epilepsy had his phenytoin dose increased by 10% at a clinic visit last week; his trough concentration has since more than doubled, and he now has nystagmus and ataxia. Which mechanism best explains BOTH patients' kinetics?",
      question:
        "Identify the single mechanism that accounts for the linear salicylate decline and the disproportionate phenytoin rise.",
      options: [
        {
          label:
            "Saturable, capacity-limited (zero-order) elimination — the metabolic pathways are running at their maximum capacity, so a constant amount of drug is removed per unit time (Cp ↓ linearly), the half-life becomes concentration-dependent (time of t1/2 ↑ as concentration ↑), and near saturation a small dose increase produces a disproportionate concentration increase",
          text:
            "One mechanism, two faces: the toxic-concentration fall and the therapeutic-dose jump.",
          correct: true,
          why:
            "Correct on both layers. (1) THE SALICYLATE FALL: Aspirin at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination (the source's verbatim chain) — the rate of elimination is constant regardless of Cp, so a constant AMOUNT leaves per unit time and the level falls by the same 16 mg/dL every 2 hours (Cp ↓ linearly); because the time of t1/2 ↑ as concentration ↑, the apparent half-life is massively prolonged (18 h vs 2–4 h) — exactly the dose-dependent half-life of zero-order kinetics. (2) THE PHENYTOIN RISE: phenytoin (P in A PEA) is also capacity-limited and sits near saturation at therapeutic levels — on the flat ceiling of the rate curve, a 10% dose increase adds concentration that the saturated pathways cannot clear proportionally, so the trough more than doubles and toxicity (nystagmus, ataxia) appears. Both patients are on the same saturated limb; one got there by overdose, the other by a small dose titration.",
        },
        {
          label:
            "First-order elimination with a constant elimination fraction — the salicylate decline only looks linear because of the 2-hour sampling interval, and the phenytoin rise reflects normal accumulation to steady state",
          text: "A constant percentage per hour with an unlucky sampling grid.",
          why:
            "Misreads the arithmetic: a first-order process removes a constant FRACTION per unit time, so 80 → 64 mg/dL in 2 hours (20%) would be followed by 64 → 51 (another 20%), not 64 → 48 (a fixed 25%→ amount-based 16 mg/dL); the repeated fixed-amount falls are the zero-order signature (Cp ↓ linearly, not exponentially). And first-order drugs have FIXED half-lives (Time of t1/2 is constant as concentration ↑) — an 18-hour apparent t1/2 that is 5–9× the therapeutic value cannot be first-order accumulation to steady state, and steady-state accumulation would never more than double on a 10% dose increase.",
        },
        {
          label:
            "Flow-dependent elimination — reduced hepatic blood flow in acute illness slows delivery of both drugs to the liver, flattening the elimination rate",
          text: "Perfusion, not saturation, sets the rate.",
          why:
            "Wrong tag and wrong direction: flow-dependent elimination is the FIRST-ORDER mechanism (for high-extraction drugs the rate tracks hepatic blood flow while remaining proportional to concentration) — it would still produce an exponential, percentage-based decline with a fixed half-life, not fixed-amount linear falls. Nothing in either stem describes shock or liver hypoperfusion, and hepatic blood flow cannot explain why a 10% phenytoin dose increase more than doubled the trough.",
        },
        {
          label:
            "Saturable plasma protein binding — as levels rise, binding sites fill, free drug rises, and the TOTAL concentration falls slowly because bound drug is not available for elimination",
          text: "Binding saturation slows the measurable fall.",
          why:
            "Conflates binding with elimination: saturable protein binding changes the FREE FRACTION (and can transiently alter distribution), but it does not change the elimination rate LAW — the question's data are serial TOTAL salicylate concentrations falling by a constant amount, which is a capacity-limited (zero-order) elimination signature. Protein binding also cannot explain the phenytoin trough more than doubling after a 10% dose increase while the patient develops concentration-dependent toxicity.",
        },
        {
          label:
            "Competitive CYP inhibition — a drug interaction (or salicylate itself inhibiting CYP enzymes) slows the metabolism of both drugs",
          text: "An enzyme inhibitor is hiding in the regimen.",
          why:
            "No interacting drug is given in either vignette — this option invents one. Enzyme inhibition lowers the apparent Vmax or clearance but the kinetics stay first-order at therapeutic concentrations (concentration-proportional decline, fixed half-life); it does not create the fixed-amount linear fall, the concentration-dependent 18-hour half-life, or the disproportionate rise on a small dose increase. The mechanism is concentration-dependent saturation (↑ salicylate saturation), which requires no second drug — only enough drug to fill the enzymes.",
        },
      ],
      reasoning:
        "The stem hands you two numeric signatures of the same rate law. SIGNATURE 1 — the fixed-amount fall: 80 → 64 → 48 mg/dL removes the same 16 mg/dL per 2-hour interval, i.e. a constant AMOUNT per unit time — the definition of zero-order elimination (rate of elimination constant regardless of Cp; Cp ↓ linearly). SIGNATURE 2 — the concentration-dependent half-life: an apparent t1/2 of 18 h against a therapeutic 2–4 h means the half-life lengthened as the concentration rose (time of t1/2 ↑ as concentration ↑) — impossible for first-order kinetics, whose defining figure annotation is “Time of t1/2 is constant as concentration ↑.” The mechanism is the source's own chain: Aspirin at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination — capacity-limited elimination, the saturated pathways running at their ceiling. SIGNATURE 3 — the phenytoin trap is the same physics from the dosing side: phenytoin (a PEA drug, capacity-limited at therapeutic levels) sits near saturation, so a 10% dose increase is not met with a 10% concentration increase — the trough more than doubles and nystagmus/ataxia follow. The distractors each misapply a real concept: the first-order option ignores that fixed amounts (not fixed percentages) fell; the flow-dependent option attaches the first-order tag to a zero-order picture; the protein-binding option confuses free fraction with the elimination rate law; and the CYP-inhibition option invents an interaction that still would not produce fixed-amount linear falls. Saturation, not perfusion, binding, or inhibition, is the one mechanism that explains both patients.",
    },
  },
  mnemonics: [
    {
      code: "ZERO = AMOUNT, FIRST = FRACTION",
      meaning:
        "The two rate rules in one line: ZERO-order eliminates a constant AMOUNT of drug per unit time (rate of elimination is constant regardless of Cp → Cp ↓ linearly with time; capacity-limited); FIRST-order eliminates a constant FRACTION of the drug per unit time (rate directly proportional to the drug concentration → Cp ↓ exponentially with time; applies to most drugs; flow-dependent).",
      memorizes: "The defining constant of each elimination order",
      whenToUse:
        "Any question asking which order a drug follows, or what stays constant in each",
      clinical:
        "Before computing anything, ask what the stem holds fixed: a fixed mg-per-hour fall is zero-order; a fixed percent-per-hour (or per half-life) fall is first-order.",
    },
    {
      code: "STUCK RATE, STRAIGHT LINE",
      meaning:
        "The curve-shape pairing: a STUCK (constant, saturated) RATE draws a STRAIGHT line — the zero-order figure's 2 U/h chips stamped unchanged along a linear decline. The unstated second half: a rate that SCALES with concentration (first-order) draws a BENDING curve — the exponential decline whose slope chips halve 4 → 2 → 1 → 0.5 U/h as the concentration halves.",
      memorizes: "Which rate law draws which curve shape",
      whenToUse: "Any Cp-vs-time graph interpretation question",
      clinical:
        "A straight elimination line means the enzymes are maxed (think overdose); an ever-flattening curve means the drug is leaving proportionally to what remains (think normal dosing).",
    },
    {
      code: "ZERO'S HALF-LIFE WANDERS, FIRST'S HALF-LIFE HOLDS",
      meaning:
        "The half-life signature: ZERO-order half-lives WANDER with concentration — the figure's brackets shrink down the curve (First t1/2 > Second t1/2 > Third t1/2; with 2 U/h, 16→8 takes 4 h, 8→4 takes 2 h, 4→2 takes 1 h) and the time of t1/2 ↑ as concentration ↑, so there is no single half-life. FIRST-order half-lives HOLD — First t1/2 = Second t1/2 = Third t1/2, “Time of t1/2 is constant as concentration ↑,” which is why first-order drugs get fixed dosing intervals.",
      memorizes: "The bracket test and its dosing consequence",
      whenToUse:
        "Any half-life question attached to a zero-order drug, or a dosing-interval question",
      clinical:
        "A wandering half-life means level-guided, small-step titration (phenytoin) and prolonged toxicity after overdose (salicylate); a holding half-life means predictable accumulation to steady state in 4–5 half-lives.",
    },
    {
      code: "FLOOD THE ENZYME, FLATTEN THE LINE",
      meaning:
        "The saturation crossover: FLOOD the metabolic machinery (high or toxic concentrations) and the elimination curve's exponential bend FLATTENS into a straight line — the drug flips from first-order (constant fraction, fixed t1/2) to zero-order (constant amount, wandering t1/2). The three named floods: Aspirin at high or toxic concentrations → ↑ salicylate saturation → zero-order; phenytoin near therapeutic levels (small dose ↑ → disproportionate level ↑); ethanol even at social doses.",
      memorizes: "Why and when a first-order drug becomes zero-order",
      whenToUse:
        "Any overdose kinetics question or dose-escalation trap (aspirin, phenytoin)",
      clinical:
        "After a salicylate overdose, the level falls by a fixed amount per hour for many hours and the half-life is markedly prolonged — the flood has flattened the line, and clearance cannot be rescued by waiting alone.",
    },
  ],
  rapidReview: {
    s30: [
      "Zero-order elimination: rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time); Cp ↓ linearly with time",
      "Zero-order examples: Phenytoin, Ethanol, and Aspirin (at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination) — “A PEA is round, shaped like the “0” in zero-order” (source mnemonic)",
      "Zero-order tag: capacity-limited elimination — saturated machinery running at its ceiling, rate ignores Cp",
      "First-order elimination: rate is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time); Cp ↓ exponentially with time; applies to most drugs",
      "First-order tag: flow-dependent elimination — for high-extraction drugs the rate tracks hepatic blood flow",
      "Zero-order figure: straight line, constant 2 U/h slope chips, brackets First t1/2 > Second t1/2 > Third t1/2 — each successive interval shorter as concentration falls; time of t1/2 ↑ as concentration ↑ (no single half-life)",
      "First-order figure: exponential curve, slope chips 4 U/h → 2 U/h → 1 U/h → 0.5 U/h (the Elimination rate (=slope) halves as concentration halves), brackets First t1/2 = Second t1/2 = Third t1/2",
      "“Time of t1/2 is constant as concentration ↑” — the first-order half-life is fixed regardless of concentration",
      "The saturation crossover: therapeutic Cp → first-order; high/toxic Cp → enzymes saturate → zero-order (constant amount, linear fall, prolonged dose-dependent t1/2)",
      "Bracket arithmetic at 2 U/h from 16 U: first half-life 4 h (16→8), second 2 h (8→4), third 1 h (4→2) — hence First > Second > Third",
    ],
    m3: [
      "ZERO = AMOUNT, FIRST = FRACTION — the two constants",
      "STUCK RATE, STRAIGHT LINE — and a scaling rate draws the bending curve",
      "ZERO'S HALF-LIFE WANDERS, FIRST'S HALF-LIFE HOLDS — the bracket test",
      "FLOOD THE ENZYME, FLATTEN THE LINE — the saturation crossover",
      "A PEA is round, shaped like the “0” in zero-order (Phenytoin, Ethanol, Aspirin) — First Aid's own margin mnemonic, book 230",
    ],
    m10: [
      "The zero-order half-life LENGTHENS as concentration RISES (the intervals shrink down the curve: First t1/2 > Second t1/2 > Third t1/2) — the common reverse reading (“lengthens as concentration falls”) contradicts both the printed “>” chain and the arithmetic",
      "Aspirin is zero-order only at high or toxic concentrations (↑ salicylate saturation); at analgesic doses it eliminates first-order like most drugs",
      "Ethanol saturates alcohol dehydrogenase even at social doses — blood alcohol falls near-linearly (≈ 0.015 g/dL/h) regardless of the starting level",
      "Phenytoin near therapeutic levels already sits on the saturation shoulder: a 10% dose increase can more than double the trough — level-guided, small-step titration",
      "Flow-dependent (first-order, high-extraction) drugs clear at the rate blood delivers them — hepatic blood flow, not enzyme capacity, sets their elimination",
      "Page census (pdfimages + VLM): pdf 252 / book 230 has ZERO raster images in the elimination block — two VECTOR curve figures (redrawn as the KYP visual) plus the two-column text table; the page is shared with the Drug metabolism subsection (top half, sibling topic)",
    ],
  },
  recall: [
    {
      q: "The zero-order elimination definition, verbatim.",
      a: "Rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time). Cp ↓ linearly with time.",
    },
    {
      q: "The printed zero-order example line, verbatim.",
      a: "Examples of drugs—Phenytoin, Ethanol, and Aspirin (at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination).",
    },
    {
      q: "The source's margin mnemonic for the zero-order examples, verbatim.",
      a: "A PEA is round, shaped like the “0” in zero-order. (P·E·A = Phenytoin, Ethanol, Aspirin)",
    },
    {
      q: "The two mechanism tags — which goes with which order?",
      a: "Zero-order elimination: Capacity-limited elimination. First-order elimination: Flow-dependent elimination.",
    },
    {
      q: "The first-order elimination definition, verbatim.",
      a: "Rate of first-order elimination is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time). Cp ↓ exponentially with time. Applies to most drugs.",
    },
    {
      q: "The zero-order figure's slope chips and bracket labels.",
      a: "Slope chips: 2 U/h (constant — the Elimination rate (=slope) never changes). Brackets: First t1/2 > Second t1/2 > Third t1/2 — each successive half-life interval is shorter as concentration falls (16→8 takes 4 h, 8→4 takes 2 h, 4→2 takes 1 h at 2 U/h); the time of t1/2 ↑ as concentration ↑.",
    },
    {
      q: "The first-order figure's slope chips and bracket labels.",
      a: "Slope chips: 4 U/h → 2 U/h → 1 U/h → 0.5 U/h (the Elimination rate (=slope) halves as the concentration halves). Brackets: First t1/2 = Second t1/2 = Third t1/2 — “Time of t1/2 is constant as concentration ↑.”",
    },
    {
      q: "Which drug's elimination flips from first-order to zero-order at toxic concentrations, and by what printed chain?",
      a: "Aspirin — at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination.",
    },
    {
      q: "What does a zero-order drug's half-life do as its concentration rises, and what is the dosing consequence?",
      a: "The time of t1/2 ↑ as concentration ↑ (the half-life is concentration-dependent; no single t1/2 exists) — so small dose increases near saturation can raise levels disproportionately (phenytoin titration) and overdose levels fall slowly and linearly with a prolonged apparent half-life (salicylate).",
    },
  ],
  related: [
    {
      title: "Drug Metabolism: Phase I & Phase II",
      topicId: "drug-metabolism",
      note: "The sibling subsection on the same book page (230, top half): phase I (CYP450-dependent oxidation/reduction/hydrolysis) and phase II conjugation convert lipophilic drugs into polar metabolites for excretion — the very machinery whose saturation flips elimination from first-order to zero-order. Shared-page convention: this note quotes only the elimination block's lines.",
    },
    {
      title: "Ethanol Metabolism",
      topicId: "ethanol-metabolism",
      note: "The E of A PEA in action: alcohol dehydrogenase and the MEOS saturate even at social doses, which is precisely why ethanol eliminates by a constant amount per unit time (zero-order) and blood alcohol falls near-linearly — the kinetics page and the metabolism page describe the same saturated enzymes.",
    },
    {
      title: "Enzyme Kinetics & Terminology",
      topicId: "enzyme-kinetics",
      note: "Capacity-limited elimination IS Michaelis–Menten behavior: at Cp far below Km the rate is proportional to concentration (first-order), and at Cp far above Km the rate approaches Vmax and becomes constant (zero-order) — Km and Vmax are the same parameters here as in the biochemistry chapter.",
    },
    {
      title: "Pharmacokinetics Across the Lifespan",
      topicId: "pharmacokinetics-aging",
      note: "Flow-dependent (first-order) elimination is only as fast as delivery: when hepatic blood flow or metabolic capacity falls (aging, cirrhosis, shock), high-extraction drugs clear more slowly — the perfusion side of the elimination rate law.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (Michaelis–Menten enzyme kinetics)",
      connection:
        "Zero-order elimination is Vmax behavior wearing a pharmacology coat: rate = Vmax·[Cp]/(Km + [Cp]). At low Cp the equation collapses to rate ∝ Cp (first-order, constant fraction); at high Cp the enzymes saturate and rate → Vmax (zero-order, constant amount). The crossover point is Km — the same hyperbola drawn in the enzyme-kinetics chapter is the saturation-crossover panel of the elimination figure.",
    },
    {
      subject: "Toxicology (salicylate poisoning)",
      connection:
        "Aspirin at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination is the pharmacokinetic heart of salicylate toxicity: levels climb past saturation after overdose, then fall by a fixed amount per hour with a half-life prolonged from 2–4 hours toward 12+ hours — the reason serial levels are drawn, bicarbonate is given to trap the ionized form in urine, and hemodialysis is used when the saturated pathways cannot keep up.",
    },
    {
      subject: "Behavioral science (ethanol pharmacokinetics)",
      connection:
        "Ethanol's zero-order behavior is the legal BAC arithmetic: because a constant amount is metabolized per hour (≈ a standard drink per hour, BAC falling ≈ 0.015 g/dL/h regardless of the starting level), clearance time scales with the dose consumed — a binge drinker's level falls linearly, not exponentially, and 'coffee and time' cannot change the slope.",
    },
    {
      subject: "Neurology (phenytoin therapeutic drug monitoring)",
      connection:
        "Phenytoin's capacity-limited kinetics explain its clinical personality: near therapeutic levels it sits on the saturation shoulder, so a small dose increase produces a disproportionate concentration jump and concentration-dependent toxicity (nystagmus → ataxia → diplopia → lethargy), and dosing is titrated by measured levels in small steps rather than by fixed increments — the ward-round application of the time of t1/2 ↑ as concentration ↑.",
    },
  ],
};
