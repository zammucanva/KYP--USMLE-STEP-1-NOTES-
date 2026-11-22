import type { KypUsMLENote } from "../types";

// Pharmacology — PHARMACOKINETICS AND PHARMACODYNAMICS banner (PH4).
// Source: pdf 252 / book 230, bottom half — Elimination of drugs (the
// same page's top half is Drug metabolism, produced as PH3). The
// zero-order row (rate of elimination is constant regardless of Cp —
// constant amount per unit time; Cp ↓ linearly with time; Phenytoin,
// Ethanol, and Aspirin at high or toxic concentrations with the
// salicylate-saturation arrow; 'Capacity-limited elimination'; the PEA
// mnemonic 'A PEA is round, shaped like the "0" in zero-order'), the
// first-order row (rate directly proportional to the drug concentration
// — constant fraction per unit time; Cp ↓ exponentially with time;
// applies to most drugs; 'Flow-dependent elimination'), and the two
// graphs (zero-order: constant 2 U/h slope, First t1/2 > Second t1/2 >
// Third t1/2, 'Time of t1/2 ↑ as concentration ↑'; first-order: falling
// slopes 4 U/h → 2 U/h → 1 U/h → 0.5 U/h, First t1/2 = Second t1/2 =
// Third t1/2, 'Time of t1/2 is constant as concentration ↑').
// Census (pdfimages + VLM): NO raster images on the page (pdfimages
// -list returned zero rows). The Elimination section has TWO vector
// graphs — each redrawn as ORIGINAL_KYP_REDRAW vector graphics in the
// registry visual (no photographs, no copyrighted artwork reproduced).
// The zero-order vs first-order comparison rows are pure text and are
// carried verbatim in this note's table blocks. The PEA mnemonic
// prints verbatim on the page (a short attributed phrase); the KYP
// memory layer ADDS three original codes (AMOUNT vs FRACTION, LINE vs
// CURVE, CAPACITY vs FLOW). No copyrighted photographs on the page.

export const eliminationOfDrugs: KypUsMLENote = {
  id: "elimination-of-drugs",
  title: "Elimination of Drugs",
  subtitle:
    "Zero-order (capacity-limited: a constant AMOUNT of drug eliminated per unit time, Cp ↓ linearly with time — Phenytoin, Ethanol, Aspirin at high or toxic concentrations) vs first-order (flow-dependent: a constant FRACTION eliminated per unit time, Cp ↓ exponentially with time — most drugs) elimination kinetics, and what the two graphs' slope and t1/2 annotations teach (book 230). ZERO-ORDER: rate of elimination is constant regardless of Cp; the graph's slope stays 2 U/h all along the line while each successive half-life gets shorter (First t1/2 > Second t1/2 > Third t1/2) — 'Time of t1/2 ↑ as concentration ↑'. FIRST-ORDER: rate is directly proportional to the drug concentration; the graph's slope falls 4 U/h → 2 U/h → 1 U/h → 0.5 U/h as concentration halves while every half-life takes the same time (First t1/2 = Second t1/2 = Third t1/2) — 'Time of t1/2 is constant as concentration ↑'. The PEA mnemonic (A PEA is round, shaped like the '0' in zero-order) holds the zero-order drug set.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Pharmacokinetics and Pharmacodynamics",
  pilotCategory:
    "The elimination-of-drugs page's complete architecture — the zero-order row ('Rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time). Cp ↓ linearly with time. Examples of drugs—Phenytoin, Ethanol, and Aspirin (at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination).' with the side note 'Capacity-limited elimination.' and the PEA mnemonic 'A PEA is round, shaped like the \"0\" in zero-order.'); the first-order row ('Rate of first-order elimination is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time). Cp ↓ exponentially with time. Applies to most drugs.' with the side note 'Flow-dependent elimination.'); the zero-order graph (Drug plasma concentration vs Time (h), Elimination rate (=slope) constant at 2 U/h, First t1/2 > Second t1/2 > Third t1/2, 'Time of t1/2 ↑ as concentration ↑'); and the first-order graph (Elimination rate (=slope) falling 4 U/h → 2 U/h → 1 U/h → 0.5 U/h, First t1/2 = Second t1/2 = Third t1/2, 'Time of t1/2 is constant as concentration ↑').",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 230 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Elimination of drugs — the zero-order row 'Rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time). Cp ↓ linearly with time. Examples of drugs—Phenytoin, Ethanol, and Aspirin (at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination)' with 'Capacity-limited elimination' and the PEA mnemonic 'A PEA is round, shaped like the \"0\" in zero-order'; the first-order row 'Rate of first-order elimination is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time). Cp ↓ exponentially with time. Applies to most drugs' with 'Flow-dependent elimination'; the zero-order graph with constant 2 U/h elimination rate (=slope), First t1/2 > Second t1/2 > Third t1/2, and 'Time of t1/2 ↑ as concentration ↑'; and the first-order graph with elimination rate (=slope) falling 4 U/h → 2 U/h → 1 U/h → 0.5 U/h, First t1/2 = Second t1/2 = Third t1/2, and 'Time of t1/2 is constant as concentration ↑')",
  tags: [
    "elimination of drugs",
    "zero-order elimination",
    "first-order elimination",
    "zero-order kinetics",
    "first-order kinetics",
    "capacity-limited elimination",
    "flow-dependent elimination",
    "rate of elimination",
    "constant amount",
    "constant fraction",
    "drug plasma concentration",
    "Cp",
    "linear elimination",
    "exponential elimination",
    "half-life",
    "t1/2",
    "elimination rate",
    "slope",
    "phenytoin",
    "ethanol",
    "aspirin",
    "salicylate",
    "salicylate saturation",
    "PEA",
    "Michaelis-Menten kinetics",
    "enzyme saturation",
    "nonlinear kinetics",
    "dose-dependent kinetics",
    "therapeutic drug monitoring",
    "steady state",
    "clearance",
    "pharmacokinetics",
  ],
  core: {
    what:
      "ELIMINATION removes drug from the body, and the ORDER of elimination — zero-order or first-order — determines everything about the plasma concentration curve. ZERO-ORDER ELIMINATION: 'Rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time). Cp ↓ linearly with time.' The eliminating enzymes are saturated, so a fixed AMOUNT leaves every hour no matter how high the concentration is — 'Capacity-limited elimination.' The example drugs are PHENYTOIN, ETHANOL, and ASPIRIN — 'at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination' (aspirin is first-order at low doses and switches to zero-order only when its metabolizing pathways saturate). The page's mnemonic: 'A PEA is round, shaped like the \"0\" in zero-order.' On the zero-order graph the elimination rate (=slope) is CONSTANT at 2 U/h, but each successive half-life is SHORTER: First t1/2 > Second t1/2 > Third t1/2, and 'Time of t1/2 ↑ as concentration ↑' — half-life is NOT constant in zero-order elimination. FIRST-ORDER ELIMINATION: 'Rate of first-order elimination is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time). Cp ↓ exponentially with time. Applies to most drugs.' The enzymes have spare capacity, so elimination is delivery-limited — 'Flow-dependent elimination.' On the first-order graph the elimination rate (=slope) FALLS as the concentration falls (4 U/h → 2 U/h → 1 U/h → 0.5 U/h), while every half-life takes the SAME time: First t1/2 = Second t1/2 = Third t1/2 — 'Time of t1/2 is constant as concentration ↑.'",
    why:
      "The order of elimination is really a statement about enzyme saturation, and the Michaelis-Menten equation (rate = Vmax × [S] / (Km + [S]), from the enzyme-kinetics page PH1) explains both rows. When the drug concentration is FAR ABOVE Km ([S] >> Km), the metabolizing enzymes are running at Vmax — the rate plateaus at a constant maximum, a constant AMOUNT of drug is eliminated per unit time, and the kinetics are ZERO-ORDER ('capacity-limited' — the capacity of the enzymes is the limit). Because the same amount leaves each hour, Cp falls in a straight LINE; and because the amount per hour does not shrink as Cp falls, each successive halving of Cp takes less and less time (First t1/2 > Second t1/2 > Third t1/2) — equivalently, 'time of t1/2 ↑ as concentration ↑': at higher concentrations the same fixed rate takes longer to remove half the drug. When the drug concentration is FAR BELOW Km ([S] << Km), the enzymes have enormous spare capacity, and the rate is limited not by the enzymes but by how fast drug is DELIVERED to them (hepatic blood flow) — so the rate stays proportional to the concentration, a constant FRACTION is eliminated per unit time, and the kinetics are FIRST-ORDER ('flow-dependent'). Because the fraction per hour is fixed, Cp falls on an EXPONENTIAL curve (each hour removes the same percentage of what remains), the slope of the curve (= elimination rate) falls in lockstep with the concentration (4 U/h → 2 U/h → 1 U/h → 0.5 U/h), and the half-life is CONSTANT — which is why first-order drugs reach steady state in 4-5 half-lives (the pharmacokinetics page PH2) and why their half-life is a fixed, quotable number. The clinical stakes: phenytoin's enzymes saturate near the therapeutic range (Km ≈ therapeutic concentrations), so phenytoin is zero-order AT therapeutic doses — a small dose increase produces a disproportionate Cp increase and requires therapeutic drug monitoring; ethanol is zero-order at typical blood alcohol concentrations because alcohol dehydrogenase is saturated by even one drink (~7-10 g of ethanol metabolized per hour regardless of BAC); aspirin is first-order at analgesic doses but switches to zero-order at high or toxic concentrations ('↑ salicylate saturation → zero-order elimination'), which is why salicylate poisoning shows a level that keeps climbing and a half-life that lengthens from ~2-3 hours to ~18-30 hours.",
    keyIdea:
      "Read every elimination question through two axes. AXIS 1 — THE KINETICS AXIS (what stays constant?): ZERO-ORDER keeps the AMOUNT constant (constant amount eliminated per unit time; rate of elimination constant regardless of Cp; Cp ↓ LINEARLY; graph slope constant at 2 U/h) while t1/2 VARIES (First t1/2 > Second t1/2 > Third t1/2; 'Time of t1/2 ↑ as concentration ↑'). FIRST-ORDER keeps the FRACTION constant (constant fraction eliminated per unit time; rate directly proportional to the drug concentration; Cp ↓ EXPONENTIALLY; graph slope falls 4 U/h → 2 U/h → 1 U/h → 0.5 U/h) and the t1/2 CONSTANT (First t1/2 = Second t1/2 = Third t1/2; 'Time of t1/2 is constant as concentration ↑') — first-order 'applies to most drugs.' AXIS 2 — THE SATURATION AXIS (why?): ZERO-ORDER = 'Capacity-limited elimination' — enzymes saturated, Michaelis-Menten at [S] >> Km, rate = Vmax (the PEA drugs: Phenytoin at therapeutic concentrations, Ethanol at typical blood alcohol, Aspirin at high or toxic concentrations via salicylate saturation). FIRST-ORDER = 'Flow-dependent elimination' — enzymes unsaturated at [S] << Km, delivery (blood flow) limits elimination, rate ∝ Cp. The two graphs encode both axes at once: look at the SLOPE (constant → zero-order; falling with Cp → first-order) and the BRACKETS under the x-axis (shrinking intervals → zero-order; equal intervals → first-order).",
  },
  mechanisms: [
    {
      id: "elimination-kinetics-axis",
      title: "The kinetics axis: constant amount (zero-order) vs constant fraction (first-order)",
      context: "The zero-order and first-order comparison rows and graphs (book 230)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A drug reaches its peak plasma concentration and elimination begins",
            sublabel:
              "Input — the drug has been absorbed; Cp is at its peak. The ORDER of elimination (zero-order or first-order) now determines the shape of the Cp-time curve, the behavior of the half-life, and (for zero-order drugs) the risk of accumulation.",
            variant: "input",
          },
          {
            id: "zero",
            label: "Zero-order — constant AMOUNT per unit time; Cp ↓ linearly",
            sublabel:
              "ZERO-ORDER ELIMINATION: 'Rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time). Cp ↓ linearly with time.' The same fixed amount of drug leaves every hour (the graph's slope holds at 2 U/h), so the concentration falls in a straight LINE. Capacity-limited — the PEA drugs: Phenytoin, Ethanol, and Aspirin (aspirin at high or toxic concentrations → ↑ salicylate saturation → zero-order).",
            variant: "process",
          },
          {
            id: "first",
            label: "First-order — constant FRACTION per unit time; Cp ↓ exponentially",
            sublabel:
              "FIRST-ORDER ELIMINATION: 'Rate of first-order elimination is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time). Cp ↓ exponentially with time. Applies to most drugs.' Each hour removes the same PERCENTAGE of the drug present (the graph's slope falls 4 U/h → 2 U/h → 1 U/h → 0.5 U/h as Cp halves), so the concentration falls on an exponential CURVE. Flow-dependent — elimination is limited by delivery to unsaturated enzymes.",
            variant: "process",
          },
          {
            id: "output",
            label: "Predicted Cp curve and half-life behavior",
            sublabel:
              "Output — the predicted concentration curve and half-life. ZERO-ORDER: linear Cp decline; slope constant at 2 U/h; half-life NOT constant — each successive half-life is SHORTER (First t1/2 > Second t1/2 > Third t1/2) and 'Time of t1/2 ↑ as concentration ↑.' FIRST-ORDER: exponential Cp decline; slope falls with concentration; half-life CONSTANT — First t1/2 = Second t1/2 = Third t1/2 and 'Time of t1/2 is constant as concentration ↑' (the property that makes steady state arrive in 4-5 half-lives).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "zero", label: "saturated enzymes (PEA drugs) → constant amount" },
          { from: "input", to: "first", label: "unsaturated enzymes (most drugs) → constant fraction" },
          { from: "zero", to: "output", label: "linear curve · variable (shrinking) t1/2" },
          { from: "first", to: "output", label: "exponential curve · constant t1/2" },
        ],
      },
    },
    {
      id: "elimination-saturation-axis",
      title: "The saturation axis: capacity-limited vs flow-dependent elimination",
      context: "The 'Capacity-limited elimination' and 'Flow-dependent elimination' side notes (book 230)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The eliminating organ's enzymes meet the drug concentration",
            sublabel:
              "Input — the drug concentration [S] arrives at the metabolizing enzymes, each with its own Michaelis-Menten Km and Vmax (rate = Vmax × [S] / (Km + [S]), from the enzyme-kinetics page). Where [S] sits relative to Km decides the order of elimination.",
            variant: "input",
          },
          {
            id: "capacity",
            label: "Capacity-limited (zero-order) — [S] >> Km, rate = Vmax",
            sublabel:
              "'CAPACITY-LIMITED ELIMINATION.' When [S] >> Km the enzymes are SATURATED — the rate plateaus at Vmax, a constant AMOUNT is eliminated per unit time regardless of Cp, and kinetics are zero-order. Phenytoin: Km sits near the therapeutic range, so saturation occurs AT therapeutic doses (dose-dependent, nonlinear kinetics — small dose increases → large Cp increases). Ethanol: alcohol dehydrogenase saturates at low BACs (~7-10 g/h metabolized regardless of concentration). Aspirin: pathways saturate at high or toxic concentrations — '↑ salicylate saturation → zero-order elimination.'",
            variant: "process",
          },
          {
            id: "flow",
            label: "Flow-dependent (first-order) — [S] << Km, rate ∝ delivery",
            sublabel:
              "'FLOW-DEPENDENT ELIMINATION.' When [S] << Km the enzymes have spare capacity — the limit is how fast drug is DELIVERED to them (hepatic blood flow), so the rate stays proportional to the concentration, a constant FRACTION is eliminated per unit time, and kinetics are first-order. This is the state of most drugs at therapeutic concentrations — which is why first-order elimination 'applies to most drugs' and why high-extraction-ratio drugs (propranolol, morphine) are sensitive to hepatic blood flow (cirrhosis, heart failure → ↓ flow → accumulation).",
            variant: "process",
          },
          {
            id: "output",
            label: "Clinical consequences of each regime",
            sublabel:
              "Output — the predicted clinical behavior. ZERO-ORDER (capacity-limited): phenytoin requires therapeutic drug monitoring (target 10-20 mg/L; make small dose changes); ethanol intoxication resolves at a fixed ~7-10 g/h no matter how much was drunk; salicylate toxicity shows a level that climbs disproportionately and a half-life that lengthens (~2-3 h at therapeutic doses → ~18-30 h at toxic levels) — and kinetics revert to first-order as the level falls back below saturation. FIRST-ORDER (flow-dependent): a fixed, quotable t1/2 — dose every t1/2, steady state in 4-5 half-lives, ~94-97% eliminated after 4-5 half-lives, and the t1/2 does not change when the dose changes.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "capacity", label: "[S] >> Km → saturated → zero-order" },
          { from: "input", to: "flow", label: "[S] << Km → unsaturated → first-order" },
          { from: "capacity", to: "output", label: "constant amount → accumulation risk, prolonged t1/2 at high Cp" },
          { from: "flow", to: "output", label: "constant fraction → constant t1/2, 4-5 half-lives to steady state" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "elimination-of-drugs-map",
      title: "The elimination-of-drugs map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source page (book 230): the ZERO-ORDER panel — the definition ('rate of elimination is constant regardless of Cp — constant amount per unit time; Cp ↓ linearly'), the graph with a straight-line Cp decline at a constant 2 U/h slope, dashed halving guides, and shrinking t1/2 brackets (First t1/2 > Second t1/2 > Third t1/2), with the rule 'Time of t1/2 ↑ as concentration ↑' and the capacity-limited note; the FIRST-ORDER panel — the definition ('rate directly proportional to the drug concentration — constant fraction per unit time; Cp ↓ exponentially; applies to most drugs'), the graph with an exponential Cp decline whose slope falls 4 U/h → 2 U/h → 1 U/h → 0.5 U/h, equal t1/2 brackets (First t1/2 = Second t1/2 = Third t1/2), with the rule 'Time of t1/2 is constant as concentration ↑' and the flow-dependent note; the PEA mnemonic callout ('A PEA is round, shaped like the \"0\" in zero-order — Phenytoin · Ethanol · Aspirin'); the zero-order vs first-order comparison table carried verbatim from the page's two rows; and the four-code mnemonic strip (the page's own PEA code plus three KYP-original codes: AMOUNT vs FRACTION, LINE vs CURVE, CAPACITY vs FLOW).",
      notice:
        "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 252). The Elimination of Drugs section has TWO vector graphs (the zero-order plot with constant 2 U/h slope and shrinking t1/2 intervals; the first-order plot with falling 4 → 2 → 1 → 0.5 U/h slopes and equal t1/2 intervals) — each redrawn as ORIGINAL_KYP_REDRAW vector graphics in the registry visual (no photographs, no copyrighted artwork reproduced). The zero-order vs first-order comparison rows are pure text and are carried verbatim in this note's table blocks. The PEA mnemonic prints verbatim on the page (a short attributed phrase, not an artwork); the other three mnemonic codes are KYP-original designs.",
    },
    {
      kind: "table",
      title: "Book 230 — the zero-order vs first-order comparison (carried verbatim)",
      intro:
        "The two elimination rows with their definitions, curve shapes, kinetic types, examples, and graph annotations, as printed.",
      columns: ["Parameter", "Zero-order elimination", "First-order elimination"],
      rows: [
        ["Rate of elimination", "Constant regardless of Cp (ie, constant amount of drug eliminated per unit time)", "Directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time)"],
        ["Cp vs time", "Cp ↓ linearly with time", "Cp ↓ exponentially with time"],
        ["Kinetic type (page synonym)", "Capacity-limited elimination", "Flow-dependent elimination"],
        ["Examples", "Phenytoin, Ethanol, and Aspirin (at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination)", "Applies to most drugs"],
        ["t1/2 behavior (graph annotations)", "First t1/2 > Second t1/2 > Third t1/2 — Time of t1/2 ↑ as concentration ↑", "First t1/2 = Second t1/2 = Third t1/2 — Time of t1/2 is constant as concentration ↑"],
      ],
      caption:
        "Zero-order keeps the AMOUNT constant (rate of elimination is constant regardless of Cp — the same number of units leaves every hour), so Cp falls in a straight line and the half-life is concentration-dependent ('Time of t1/2 ↑ as concentration ↑': at higher concentrations the fixed rate needs more time to remove half the drug, and on the way down each successive t1/2 is shorter). First-order keeps the FRACTION constant (rate directly proportional to the drug concentration — the same percentage leaves every hour), so Cp falls exponentially and the half-life is constant — the property that lets first-order drugs be dosed every t1/2 and reach steady state in 4-5 half-lives (see the pharmacokinetics page, PH2). Aspirin is the special case the page flags with an arrow: first-order at therapeutic doses, zero-order at high or toxic concentrations ('↑ salicylate saturation → zero-order elimination').",
    },
    {
      kind: "table",
      title: "Book 230 — the two graphs' annotations (carried verbatim)",
      intro:
        "What each graph prints on its axes, slope labels, and half-life brackets — the fastest way to identify the order from a figure.",
      columns: ["Graph element", "Zero-order graph", "First-order graph"],
      rows: [
        ["Axes", "Drug plasma concentration (y) vs Time (h) (x)", "Drug plasma concentration (y) vs Time (h) (x)"],
        ["Elimination rate (=slope)", "2 U/h — CONSTANT (the same slope all along the straight line)", "4 U/h → 2 U/h → 1 U/h → 0.5 U/h — the slope FALLS as the concentration falls"],
        ["Half-life brackets", "First t1/2 > Second t1/2 > Third t1/2 (each successive interval is shorter)", "First t1/2 = Second t1/2 = Third t1/2 (equal intervals)"],
        ["Rule printed on the graph", "Time of t1/2 ↑ as concentration ↑", "Time of t1/2 is constant as concentration ↑"],
      ],
      caption:
        "The two graphs are the exam's favorite figure-recognition pair. On the ZERO-ORDER graph the elimination rate (=slope) is labeled 2 U/h at more than one point because the slope never changes — a constant amount (2 units) leaves every hour, the Cp line is straight, and the t1/2 brackets shrink (First > Second > Third) because the same fixed rate clears each halving faster as the concentration falls. On the FIRST-ORDER graph the elimination rate (=slope) is labeled 4 U/h, 2 U/h, 1 U/h, and 0.5 U/h at successive points because the rate falls in proportion to the concentration — a constant fraction leaves every hour, the Cp curve is exponential, and the t1/2 brackets are equal (First = Second = Third). Read the SLOPE first (constant → zero-order; falling with Cp → first-order), then the BRACKETS (shrinking → zero-order; equal → first-order).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 19-year-old college student presents 6 hours after intentionally ingesting roughly 40 g of aspirin. She has tinnitus, hyperventilation, and a serum salicylate level of 75 mg/dL (therapeutic 10-30 mg/dL). Despite stopping absorption, repeat levels over the next 12 hours rise disproportionately and the pharmacology text notes that aspirin 'at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination.'",
        discriminator:
          "Aspirin + toxic concentration + '↑ salicylate saturation → zero-order elimination' → capacity-limited kinetics: constant AMOUNT eliminated per unit time → Cp ↓ linearly (not exponentially) → level climbs disproportionately and t1/2 lengthens",
        concept: "The salicylate-saturation / concentration-dependent kinetics axis",
        answer:
          "At therapeutic doses aspirin is eliminated by first-order kinetics (flow-dependent, constant fraction per hour, t1/2 ~2-3 h). At HIGH OR TOXIC CONCENTRATIONS the metabolizing pathways saturate — the page's exact arrow: '↑ salicylate saturation → zero-order elimination.' Elimination becomes capacity-limited: a constant AMOUNT of salicylate is cleared per unit time regardless of Cp, so Cp declines LINEARLY (not exponentially), the apparent half-life lengthens dramatically (~2-3 h → ~18-30 h at toxic levels), and any continued absorption produces disproportionate rises in the level. This is why salicylate overdose levels are monitored serially, why the level can keep climbing for hours after ingestion (delayed absorption plus saturated elimination), and why enhanced elimination is invoked at high levels — urinary alkalinization (which traps salicylate in the tubule as the ionized salt; see the urine-pH page) or hemodialysis for severe cases. As the level falls back into the unsaturated range, kinetics revert to first-order and the fall accelerates.",
      },
      {
        stem:
          "A 24-year-old with epilepsy takes phenytoin 300 mg/day with a trough level of 12 mg/L (therapeutic 10-20 mg/L). After a breakthrough seizure, the dose is raised to 400 mg/day; six weeks later the level is 38 mg/L and the patient has nystagmus and ataxia. The pharmacology text lists phenytoin among the zero-order drugs ('A PEA is round, shaped like the \"0\" in zero-order').",
        discriminator:
          "Phenytoin + a 33% dose increase producing a >3-fold level increase + nystagmus/ataxia = zero-order (capacity-limited) kinetics AT therapeutic concentrations — small dose changes, large concentration changes",
        concept: "The phenytoin capacity-limited dosing axis",
        answer:
          "Phenytoin's metabolizing enzymes saturate at concentrations within the therapeutic range (Michaelis-Menten Km ≈ therapeutic levels), so phenytoin follows ZERO-ORDER (capacity-limited) elimination even at therapeutic doses — 'rate of elimination is constant regardless of Cp... constant amount of drug eliminated per unit time,' with 'Cp ↓ linearly with time' and 'Time of t1/2 ↑ as concentration ↑.' The clinical signature is dose-dependent (nonlinear) kinetics: below the saturation point small dose increases produce proportionate level increases, but once intake approaches the constant eliminable amount, any additional dose accumulates — here a 33% dose increase produced a >3-fold level rise into toxicity (nystagmus, ataxia — and at higher levels, lethargy and seizures). Management: therapeutic drug monitoring (target 10-20 mg/L), SMALL dose adjustments (often 25-30 mg at a time), and level checks after each change — because the t1/2 lengthens as the level rises, re-equilibration takes longer at higher levels. This is the classic exam pairing of zero-order kinetics with the need for drug-level monitoring.",
      },
      {
        stem:
          "A new oral anticoagulant has first-order elimination kinetics with a half-life of 8 hours and is dosed every 8 hours. The team wants to know when steady state will be reached, whether doubling the loading dose changes the time to steady state, and what fraction of the drug remains 32 hours after the last dose.",
        discriminator:
          "First-order elimination (rate directly proportional to concentration — constant FRACTION per unit time, 'applies to most drugs') + t1/2 8 h → constant t1/2 → 4-5 half-lives to steady state (~32-40 h), independent of dose; 32 h = 4 half-lives → ~6.25% remaining",
        concept: "The first-order constant-fraction / steady-state axis",
        answer:
          "Because the rate of first-order elimination 'is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time),' the HALF-LIFE IS CONSTANT ('Time of t1/2 is constant as concentration ↑') — the property that makes first-order pharmacokinetics predictable. (1) STEADY STATE: accumulation and elimination balance after 4-5 half-lives — here 4 × 8 h = 32 h to ~94% of steady state, 5 × 8 h = 40 h to ~97% (the pharmacokinetics page's rule). (2) DOSE DOES NOT CHANGE THE CLOCK: doubling the dose doubles the steady-state concentration (each Cp point doubles) but leaves the t1/2 and the time to steady state unchanged — with first-order kinetics the concentration curve scales, the timing does not. (3) WASHOUT: 32 hours after the last dose = 4 half-lives → 50% → 25% → 12.5% → 6.25% remaining (~94% eliminated). Contrast zero-order drugs, where the t1/2 varies with concentration and none of these clean rules hold — the constant-t1/2 toolkit is the reward for identifying first-order kinetics.",
      },
    ],
    traps: [
      {
        a: "Constant AMOUNT eliminated per unit time (zero-order)",
        b: "Constant FRACTION eliminated per unit time (first-order)",
        whyConfused: "Both are 'constant' something — students swap the constant",
        keyDifference:
          "ZERO-ORDER: 'Rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time)' — the same absolute quantity (eg, 2 U/h on the graph) leaves every hour whether Cp is high or low, because the eliminating enzymes are saturated (capacity-limited). FIRST-ORDER: 'Rate of first-order elimination is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time)' — the same PERCENTAGE of the remaining drug (eg, 50% per t1/2) leaves every hour, so the absolute amount eliminated per hour is high when Cp is high and low when Cp is low (the graph's slope falls 4 U/h → 2 U/h → 1 U/h → 0.5 U/h). Amount-constant = zero-order (PEA drugs); fraction-constant = first-order (most drugs).",
        clue:
          "If the stem says 'a fixed/constant amount (eg, mg) is eliminated per hour' → zero-order. If it says 'a constant fraction/percentage per hour' or 'rate proportional to concentration' → first-order.",
      },
      {
        a: "Cp ↓ linearly with time (zero-order graph)",
        b: "Cp ↓ exponentially with time (first-order graph)",
        whyConfused: "Both curves fall; only the SHAPE distinguishes them on a figure",
        keyDifference:
          "ZERO-ORDER graphs show a STRAIGHT-LINE decline — because the eliminable amount per hour is fixed, the concentration drops by equal absolute increments in equal times (the slope is constant at 2 U/h along the whole line). FIRST-ORDER graphs show an EXPONENTIAL decline — because a fixed fraction leaves per hour, the curve drops fast at first (when Cp is high, the rate is high: 4 U/h) and ever more slowly as the concentration falls (2 U/h → 1 U/h → 0.5 U/h), approaching but never reaching zero. On a first-order curve the SAME percentage is removed each interval; on a zero-order line the same AMOUNT is removed each interval.",
        clue:
          "Straight line = zero-order; ever-flattening curve = first-order. Check the slope labels: constant slope (2 U/h throughout) = zero-order; falling slope labels (4 → 2 → 1 → 0.5 U/h) = first-order.",
      },
      {
        a: "t1/2 varies with concentration — 'Time of t1/2 ↑ as concentration ↑' (zero-order)",
        b: "t1/2 constant regardless of concentration (first-order)",
        whyConfused: "Students assume half-life is always a fixed drug property",
        keyDifference:
          "ZERO-ORDER: the half-life is NOT a fixed property — the page's graph brackets shrink down the curve (First t1/2 > Second t1/2 > Third t1/2) and the rule reads 'Time of t1/2 ↑ as concentration ↑': at high concentrations the fixed elimination rate needs MORE time to remove half the drug, and as Cp falls each successive halving takes less time. That is why phenytoin's apparent t1/2 lengthens near toxicity and salicylate's t1/2 stretches from ~2-3 h to ~18-30 h in overdose. FIRST-ORDER: the half-life IS constant — the brackets are equal (First t1/2 = Second t1/2 = Third t1/2) and 'Time of t1/2 is constant as concentration ↑' — the property that makes 4-5 half-lives to steady state a reliable rule.",
        clue:
          "Any stem that says 'constant half-life,' quotes a single t1/2 number, or asks about 4-5 half-lives → first-order. A stem where the half-life LENGTHENS as levels rise (or shortens as they fall) → zero-order (saturation).",
      },
      {
        a: "Capacity-limited elimination (zero-order)",
        b: "Flow-dependent elimination (first-order)",
        whyConfused: "The page's two side-note synonyms are easy to attach to the wrong row",
        keyDifference:
          "CAPACITY-LIMITED = ZERO-ORDER: the eliminating enzymes' capacity (Vmax) is the limit — they are saturated ([S] >> Km), the rate plateaus at a constant amount per unit time, and the drug set is PEA: Phenytoin (at therapeutic concentrations — Km ≈ therapeutic range), Ethanol (alcohol dehydrogenase saturated at typical BACs), Aspirin (ONLY at high or toxic concentrations — '↑ salicylate saturation → zero-order elimination'; at therapeutic doses aspirin is first-order). FLOW-DEPENDENT = FIRST-ORDER: delivery of drug to UNSATURATED enzymes ([S] << Km, rate ∝ Cp) is the limit — 'applies to most drugs' — which is why high-extraction drugs (propranolol, morphine) are sensitive to hepatic blood flow.",
        clue:
          "'Capacity' points at the enzyme (saturated → constant amount → zero-order); 'flow' points at delivery/blood flow (enzymes to spare → constant fraction → first-order). For aspirin, always check the concentration before assigning the order — the PEA membership applies at high/toxic concentrations.",
      },
    ],
    pivots: [
      {
        lookAlike: "A question gives a drug and asks which elimination order applies — is it zero-order or first-order?",
        differentiator:
          "Two checks. (1) IS IT ONE OF THE PEA DRUGS? — Phenytoin (zero-order at therapeutic concentrations — the classic TDM drug), Ethanol (zero-order at typical blood alcohol — ~7-10 g/h regardless of BAC), Aspirin (zero-order ONLY at high or toxic concentrations via '↑ salicylate saturation'; first-order at therapeutic doses). (2) WHAT IS THE CONCENTRATION? — aspirin switches from first-order to zero-order as the level enters the toxic range; phenytoin's saturation sits inside the therapeutic window itself. Every drug NOT in the PEA set is first-order at clinical concentrations — 'applies to most drugs.'",
        correctPath:
          "Read the stem in this order: (1) name the drug (PEA or not). (2) If aspirin — check the concentration (therapeutic → first-order; high/toxic → salicylate saturation → zero-order). (3) If phenytoin or ethanol — zero-order at the concentrations in the stem. (4) Anything else → first-order (constant fraction, constant t1/2).",
      },
      {
        lookAlike: "A figure or stem describes something staying constant — which order is it?",
        differentiator:
          "The CONSTANT PARAMETER names the order. Constant AMOUNT per unit time / constant elimination rate / constant slope (2 U/h all along the line) → ZERO-ORDER (capacity-limited). Constant FRACTION or PERCENTAGE per unit time / rate directly proportional to concentration / falling slope labels (4 → 2 → 1 → 0.5 U/h) → FIRST-ORDER (flow-dependent). Constant HALF-LIFE → FIRST-ORDER only — zero-order's t1/2 varies ('Time of t1/2 ↑ as concentration ↑'; First > Second > Third). Conversely, if told the t1/2 lengthened as the level rose, or each successive half-life is shorter than the last → ZERO-ORDER.",
        correctPath:
          "Scan the stem for the word after 'constant': amount → zero-order; fraction/percentage → first-order; half-life → first-order. Then scan the figure: straight line or constant slope → zero-order; exponential curve or falling slope → first-order; shrinking t1/2 brackets → zero-order; equal brackets → first-order.",
      },
    ],
    miniCase: {
      vignette:
        "A 21-year-old woman is brought to the emergency department 6 hours after ingesting approximately 60 tablets of 325 mg aspirin (19.5 g) during a suicidal gesture. She is tinnitus, breathing deeply at 28/min (respiratory alkalosis with an anion-gap metabolic acidosis on blood gas), afebrile, and alert. Serum salicylate concentration is 78 mg/dL (therapeutic analgesic range 10-30 mg/dL). The team institutes activated charcoal (already absorbed), intravenous fluids, and begins urinary alkalinization. Despite the intervention, a salicylate level drawn 12 hours after ingestion is 92 mg/dL. The pharmacology text notes that aspirin is eliminated by zero-order kinetics 'at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination,' with a mnemonic: 'A PEA is round, shaped like the \"0\" in zero-order.'",
      question:
        "Explain the elimination kinetics of salicylate at this concentration, why the level continued to rise between 6 and 12 hours despite completed absorption, why the apparent half-life is prolonged compared with therapeutic-dose aspirin, and what should happen to the rate of concentration decline as the level falls back toward the therapeutic range.",
      options: [
        {
          label:
            "At 92 mg/dL the metabolizing pathways are saturated — elimination is capacity-limited (zero-order): a constant AMOUNT of salicylate is eliminated per unit time regardless of Cp, so Cp falls LINEARLY (not exponentially) and the half-life is concentration-dependent (prolonged, ~18-30 h vs ~2-3 h at therapeutic doses). The level kept rising because absorption of the remaining depot plus continued formation continued to exceed the fixed eliminable amount. As the level falls back below the saturation point, kinetics revert to FIRST-ORDER (constant fraction, falling with a now-constant t1/2) and the decline accelerates.",
          text:
            "Saturated enzymes → capacity-limited zero-order: constant amount/hour, linear decline, prolonged concentration-dependent t1/2, reverting to first-order below saturation.",
          correct: true,
          why:
            "Correct on every element. (1) THE ORDER: the page's exact arrow — 'at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination' — places toxic-level salicylate among the PEA (Phenytoin, Ethanol, Aspirin) zero-order set. Aspirin is NOT zero-order at therapeutic doses; the switch happens because the metabolizing pathways saturate at high concentrations. (2) THE KINETICS: zero-order means 'rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time)' with 'Cp ↓ linearly with time' — a fixed amount per hour, so the serum level cannot fall fast while any absorption or formation continues, and the 6-to-12-hour rise reflects continued GI absorption (aspirin delays gastric emptying, and enteric-coated preparations form a depot) outpacing the fixed elimination. (3) THE HALF-LIFE: 'Capacity-limited elimination' makes the t1/2 concentration-dependent — the graph rule 'Time of t1/2 ↑ as concentration ↑' — so the apparent salicylate t1/2 stretches from ~2-3 h at therapeutic doses to ~18-30 h at toxic levels. (4) THE REVERSION: as the concentration falls back into the unsaturated range ([S] falls below Km), elimination returns to first-order (constant fraction, flow-dependent) and the plasma decline speeds up — which is exactly why serial levels and enhanced-elimination measures (urinary alkalinization, hemodialysis for severe cases) are used to prevent the double-peak/rebound pattern seen with depot absorption.",
        },
        {
          label:
            "Salicylate elimination remains first-order even at 92 mg/dL: the rate is directly proportional to the concentration, a constant fraction is removed per hour, Cp falls exponentially, and the half-life stays at the therapeutic ~2-3 h. The rising level is explained solely by the large dose still being absorbed; no kinetic switch occurs.",
          text:
            "First-order throughout: constant fraction, exponential decline, constant 2-3 h half-life; the rise is absorption only.",
          why:
            "Wrong on the order, the curve, and the half-life — this is the therapeutic-dose kinetic regime misapplied to a toxic level. The page explicitly flags the switch: aspirin is zero-order 'at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination.' At 92 mg/dL the pathways are saturated, so the rate is NOT proportional to concentration — it is capped at a constant amount per hour (capacity-limited), Cp declines linearly rather than exponentially, and the half-life is concentration-dependent (prolonged to ~18-30 h), not the therapeutic 2-3 h. The distractor is tempting because first-order 'applies to most drugs' — but aspirin at toxic concentrations is the page's named exception, and the rising level with a 'constant' 2-3 h half-life would be kinetically impossible after absorption is complete.",
        },
        {
          label:
            "Zero-order elimination means a constant FRACTION of the drug is eliminated per unit time with Cp falling exponentially; the t1/2 is constant but the amount eliminated per hour falls as Cp falls. The prolonged course here reflects the large volume of distribution of salicylate.",
          text:
            "Zero-order = constant fraction, exponential fall, constant t1/2; prolonged course from a large Vd.",
          why:
            "The definitions are swapped — 'constant fraction... per unit time' and 'Cp ↓ exponentially' are the FIRST-ORDER definitions the page attaches to first-order elimination ('Rate of first-order elimination is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time). Cp ↓ exponentially with time.'). Zero-order is 'constant amount of drug eliminated per unit time' with 'Cp ↓ linearly with time,' and zero-order t1/2 is NOT constant — the graph prints 'Time of t1/2 ↑ as concentration ↑.' The Vd claim is also wrong for this scenario: salicylate's distribution does not lengthen the apparent elimination half-life at toxic levels — saturation of metabolism does. This distractor catches students who memorize 'zero-order = PEA' but never anchored WHICH constant goes with which order.",
        },
        {
          label:
            "Zero-order elimination means the elimination RATE rises in proportion to the concentration — because the level is very high, elimination is running maximally fast, so the level should fall quickly; the continued rise must mean the assay is wrong, and no enhanced-elimination measures are needed.",
          text:
            "Zero-order means rate ∝ concentration, so elimination is fastest at high levels and the level should crash; question the assay, skip alkalinization.",
          why:
            "Two errors. (1) 'Rate proportional to concentration' is the FIRST-ORDER rule ('directly proportional to the drug concentration'), not zero-order — zero-order is precisely the regime where the rate is INDEPENDENT of concentration ('rate of elimination is constant regardless of Cp'). The saturation that defines zero-order CAPS the rate: high levels do NOT clear faster; the same constant amount leaves per hour. (2) The management implication is dangerous — at 92 mg/dL with impaired capacity-limited elimination, enhanced elimination (urinary alkalinization to trap ionized salicylate in the tubule; hemodialysis for severe/organ-dysfunction cases) is indicated rather than optional, and serial levels are mandatory precisely because the decline is slow and absorption may continue.",
        },
        {
          label:
            "Aspirin follows zero-order elimination at ALL concentrations, including the 10-30 mg/dL therapeutic analgesic range — the PEA membership is unconditional. The kinetics at 92 mg/dL are identical to those after a single 325 mg tablet, and the prolonged half-life is explained by saturation that is always present.",
          text:
            "Aspirin is zero-order at every dose; the PEA list applies unconditionally and the t1/2 is always prolonged.",
          why:
            "Overgeneralizes the PEA mnemonic and misses the page's qualifier. The page is precise: the zero-order example reads 'Aspirin (at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination)' — aspirin is FIRST-ORDER at therapeutic/analgesic doses (constant fraction, t1/2 ~2-3 h) and switches to zero-order only when the concentration saturates the pathways. Only phenytoin (Km within the therapeutic window) and ethanol (ADH saturated by the first drink) are zero-order at their usual concentrations. The PEA mnemonic stores the drug set; the stem's CONCENTRATION decides whether the zero-order regime actually applies — the second half of the two-step pivot (drug, then concentration).",
        },
      ],
      reasoning:
        "The stem walks aspirin — the PEA drug with an explicit concentration qualifier — through a toxic-level scenario, then asks for four connected predictions: the order, the shape of the decline, the half-life behavior, and the reversion. The page supplies each answer verbatim. (1) ORDER: 'at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination' — at 92 mg/dL the pathways are saturated and salicylate joins phenytoin and ethanol in the zero-order set ('A PEA is round, shaped like the \"0\" in zero-order'). (2) CURVE: zero-order means 'rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time). Cp ↓ linearly with time' — a fixed amount cleared per hour, so the level cannot outpace ongoing depot absorption (aspirin delays gastric emptying; enteric-coated preparations form a bezoar), explaining the 6→12-hour rise. (3) HALF-LIFE: 'Capacity-limited elimination' plus the graph rule 'Time of t1/2 ↑ as concentration ↑' — the apparent t1/2 stretches from ~2-3 h (therapeutic, first-order) to ~18-30 h (toxic, zero-order), which is why serial monitoring and enhanced elimination (urinary alkalinization; hemodialysis for severe cases) are standard. (4) REVERSION: as [S] falls below Km the enzymes desaturate and kinetics return to first-order ('constant fraction... Cp ↓ exponentially,' flow-dependent), accelerating the decline. The distractors fail at: 'still first-order at 92 mg/dL' (ignores the printed saturation arrow); 'zero-order = constant fraction/exponential' (the definitional swap — those are first-order's words); 'rate proportional to concentration, so high levels clear fastest' (first-order's rule mislabeled zero-order, with a dangerous no-treatment implication); and 'aspirin is zero-order at all concentrations' (misses the 'at high or toxic concentrations' qualifier — the drug-plus-concentration two-step).",
    },
  },
  mnemonics: [
    {
      code: "A PEA IS ROUND, SHAPED LIKE THE “0” IN ZERO-ORDER (Phenytoin · Ethanol · Aspirin)",
      meaning:
        "The page's own printed mnemonic: a pea is round like the numeral 0 — the three zero-order drugs are PHENYTOIN, ETHANOL, and ASPIRIN. Attach the qualifier: phenytoin is zero-order AT therapeutic concentrations (its enzymes saturate inside the therapeutic window — the TDM drug); ethanol is zero-order at typical blood alcohol (~7-10 g/h regardless of BAC); aspirin is zero-order ONLY 'at high or toxic concentrations → ↑ salicylate saturation' — first-order at therapeutic doses. This is the one mnemonic that prints verbatim on book 230; the other three codes below are KYP-original.",
      memorizes: "The three zero-order example drugs (with their concentration qualifiers)",
      whenToUse: "Any question asking which drugs show zero-order (capacity-limited) elimination",
      clinical:
        "Phenytoin: small dose increases → large level increases (monitor levels, target 10-20 mg/L). Ethanol: intoxication resolves at a fixed rate no matter the BAC (~7-10 g/h — roughly one drink per hour). Aspirin: therapeutic-dose t1/2 ~2-3 h → toxic-level t1/2 ~18-30 h with saturation; overdose levels climb disproportionately and decline slowly.",
    },
    {
      code: "AMOUNT vs FRACTION — ZERO-order removes a constant AMOUNT; FIRST-order removes a constant FRACTION",
      meaning:
        "The definitional spine of the page. ZERO-ORDER: 'constant amount of drug eliminated per unit time' — the same absolute quantity leaves every hour (the graph's slope holds at 2 U/h), regardless of Cp. FIRST-ORDER: 'constant fraction of drug eliminated per unit time' — the same percentage of the remaining drug leaves every hour, so the absolute rate tracks the concentration (the graph's slope falls 4 U/h → 2 U/h → 1 U/h → 0.5 U/h). The word after 'constant' names the order.",
      memorizes: "Which parameter stays constant in each elimination order",
      whenToUse: "Any definition-match question, and any stem that says 'a constant ___ is eliminated per hour'",
      clinical:
        "A stem that says 'a fixed 10 mg is cleared per hour' → zero-order (capacity-limited). A stem that says '10% of the drug present is cleared per hour' or 'rate proportional to concentration' → first-order (flow-dependent, most drugs).",
    },
    {
      code: "LINE vs CURVE — ZERO-order Cp falls in a straight LINE; FIRST-order Cp falls on an exponential CURVE",
      meaning:
        "The graph-recognition code. A constant AMOUNT per hour subtracts equal increments in equal times → the zero-order Cp-time plot is a straight LINE (slope constant at 2 U/h all the way down). A constant FRACTION per hour subtracts a shrinking amount each interval → the first-order Cp-time plot is an exponential CURVE that keeps flattening (slope labels 4 → 2 → 1 → 0.5 U/h as Cp halves). Pair with the brackets: zero-order intervals SHRINK (First t1/2 > Second t1/2 > Third t1/2); first-order intervals are EQUAL (First t1/2 = Second t1/2 = Third t1/2).",
      memorizes: "The curve shape and t1/2-bracket pattern that identify each order on a figure",
      whenToUse: "Any figure-based question showing a Cp-vs-time elimination plot",
      clinical:
        "Straight line on the concentration-time plot → check the drug list for PEA (phenytoin, ethanol, high-dose aspirin). Exponential decay with equal half-life spacing → first-order; quote a single t1/2 and apply the 4-5 half-lives rules (steady state, washout).",
    },
    {
      code: "CAPACITY vs FLOW — ZERO-order is CAPACITY-limited (enzymes saturated); FIRST-order is FLOW-dependent (enzymes to spare)",
      meaning:
        "The page's two side-note synonyms, attached to their rows. 'Capacity-limited elimination' = zero-order: the enzymes' Vmax is the ceiling — at [S] >> Km the rate is maxed and independent of concentration (the Michaelis-Menten plateau). 'Flow-dependent elimination' = first-order: at [S] << Km the enzymes are unsaturated, and the limit is delivery of drug to them (hepatic blood flow), so the rate stays proportional to Cp. This is also why high-extraction-ratio drugs (propranolol, morphine) accumulate when liver blood flow falls (cirrhosis, heart failure).",
      memorizes: "The mechanism behind each order and the page's printed synonyms",
      whenToUse: "Any 'why' question about the mechanism of zero-order vs first-order elimination, or hepatic extraction/flow questions",
      clinical:
        "Capacity-limited: phenytoin (saturated near therapeutic levels — TDM), ethanol (ADH saturated — fixed g/h), salicylate at toxic levels (prolonged t1/2, disproportionate accumulation). Flow-dependent: most drugs — their clearance falls with hepatic blood flow (propranolol, morphine in cirrhosis or heart failure).",
    },
  ],
  rapidReview: {
    s30: [
      "Zero-order elimination: rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time); Cp ↓ linearly with time; capacity-limited",
      "Zero-order drug set (the page's PEA mnemonic): Phenytoin, Ethanol, and Aspirin — 'A PEA is round, shaped like the \"0\" in zero-order'",
      "Aspirin's qualifier: at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination (first-order at therapeutic doses)",
      "First-order elimination: rate is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time); Cp ↓ exponentially with time; applies to most drugs; flow-dependent",
      "Zero-order graph: elimination rate (=slope) constant at 2 U/h; First t1/2 > Second t1/2 > Third t1/2; time of t1/2 ↑ as concentration ↑ (t1/2 NOT constant)",
      "First-order graph: elimination rate (=slope) falls 4 U/h → 2 U/h → 1 U/h → 0.5 U/h as concentration halves; First t1/2 = Second t1/2 = Third t1/2; time of t1/2 is constant as concentration ↑",
      "Capacity-limited = zero-order (enzymes saturated, [S] >> Km, rate = Vmax — a constant amount per hour); flow-dependent = first-order (enzymes unsaturated, [S] << Km, rate ∝ Cp — delivery is the limit)",
      "Phenytoin is zero-order AT therapeutic concentrations (Km ≈ therapeutic range) — small dose increases → disproportionate Cp increases; requires therapeutic drug monitoring (target 10-20 mg/L)",
      "Ethanol is zero-order at typical blood alcohol — a constant ~7-10 g/h metabolized regardless of BAC (alcohol dehydrogenase saturated)",
      "Zero-order t1/2 is concentration-dependent (salicylate t1/2 stretches from ~2-3 h at therapeutic doses to ~18-30 h at toxic levels); first-order t1/2 is constant → 4-5 half-lives to steady state and to ~94-97% elimination",
    ],
    m3: [
      "A PEA is round, shaped like the “0” in zero-order — Phenytoin, Ethanol, Aspirin (aspirin only at high/toxic concentrations)",
      "AMOUNT vs FRACTION — zero-order removes a constant AMOUNT per unit time; first-order removes a constant FRACTION",
      "LINE vs CURVE — zero-order Cp ↓ linearly; first-order Cp ↓ exponentially (slope falls 4 → 2 → 1 → 0.5 U/h)",
      "CAPACITY vs FLOW — zero-order is capacity-limited (saturated); first-order is flow-dependent (unsaturated, rate ∝ Cp)",
      "t1/2 tells the order — constant t1/2 (First = Second = Third) = first-order; t1/2 rising with concentration (First > Second > Third) = zero-order",
    ],
    m10: [
      "Zero-order: 'Rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time). Cp ↓ linearly with time' — capacity-limited; PEA drugs (phenytoin at therapeutic levels, ethanol at typical BAC, aspirin at high/toxic levels via salicylate saturation)",
      "First-order: 'Rate of first-order elimination is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time). Cp ↓ exponentially with time. Applies to most drugs' — flow-dependent",
      "Graph reading: constant slope (2 U/h) + shrinking t1/2 brackets (First > Second > Third; time of t1/2 ↑ as concentration ↑) = zero-order; falling slope (4 → 2 → 1 → 0.5 U/h) + equal brackets (First = Second = Third; t1/2 constant as concentration ↑) = first-order",
      "Phenytoin: zero-order at therapeutic concentrations — dose-dependent nonlinear kinetics, small dose changes cause large level changes, TDM required; ethanol: ~7-10 g/h fixed; aspirin: first-order at therapeutic doses (t1/2 ~2-3 h), zero-order when saturated (t1/2 ~18-30 h)",
      "Mechanism: Michaelis-Menten — [S] >> Km → rate = Vmax (constant amount, zero-order, capacity-limited); [S] << Km → rate ∝ [S] (constant fraction, first-order, flow-dependent — hepatic blood flow limits high-extraction drugs)",
    ],
  },
  recall: [
    {
      q: "The zero-order elimination definition verbatim (rate, amount, and Cp curve).",
      a: "Rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time). Cp ↓ linearly with time. Capacity-limited elimination. Examples of drugs—Phenytoin, Ethanol, and Aspirin (at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination).",
    },
    {
      q: "The first-order elimination definition verbatim (rate, fraction, Cp curve, and scope).",
      a: "Rate of first-order elimination is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time). Cp ↓ exponentially with time. Applies to most drugs. Flow-dependent elimination.",
    },
    {
      q: "The page's zero-order drug mnemonic and the aspirin qualifier verbatim.",
      a: "A PEA is round, shaped like the “0” in zero-order — Phenytoin, Ethanol, Aspirin. The aspirin qualifier: aspirin is zero-order only at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination (first-order at therapeutic doses). Phenytoin is zero-order at therapeutic concentrations (TDM drug); ethanol at typical blood alcohol (~7-10 g/h).",
    },
    {
      q: "The two side-note synonyms and which row each belongs to.",
      a: "Capacity-limited elimination = ZERO-order (the eliminating enzymes are saturated — capacity/Vmax is the limit; a constant amount per unit time). Flow-dependent elimination = FIRST-order (the enzymes are unsaturated — delivery/blood flow is the limit; a constant fraction per unit time, rate ∝ Cp; applies to most drugs).",
    },
    {
      q: "The two graphs' slope labels and t1/2 annotations verbatim.",
      a: "Zero-order graph: Elimination rate (=slope) constant at 2 U/h; First t1/2 > Second t1/2 > Third t1/2; Time of t1/2 ↑ as concentration ↑. First-order graph: Elimination rate (=slope) falls 4 U/h → 2 U/h → 1 U/h → 0.5 U/h; First t1/2 = Second t1/2 = Third t1/2; Time of t1/2 is constant as concentration ↑. Both graphs: Drug plasma concentration (y) vs Time (h) (x).",
    },
  ],
  related: [
    {
      title: "Pharmacokinetics — Bioavailability, Vd, Clearance, Half-life",
      topicId: "pharmacokinetics",
      note:
        "The preceding page (PH2) supplies the machinery this page animates: the half-life equation t1/2 = 0.7 × Vd / CL is the FIRST-ORDER half-life (constant t1/2 — 'time of t1/2 is constant as concentration ↑' on this page's graph is WHY a single t1/2 can be plugged into that equation), and the 4-5 half-lives to steady state / 3.3 half-lives to 90% rules and the 50% → 25% → 12.5% → 6.25% remaining strip all assume first-order (constant-fraction) elimination — 'applies to most drugs.' Zero-order drugs break those rules: phenytoin's t1/2 lengthens as its level rises (no single t1/2, no fixed steady-state clock), which is why phenytoin dosing is guided by levels rather than by half-life arithmetic. The clearance concept itself is flow-limited for high-extraction drugs — the 'flow-dependent' note on this page is the kinetic face of CL = hepatic blood flow for those drugs.",
    },
    {
      title: "Drug Metabolism — Phase I, Phase II, and Excretion",
      topicId: "drug-metabolism",
      note:
        "The SAME page (book 230) — drug metabolism (PH3) is what elimination kinetics measures. The enzymes that saturate into zero-order kinetics ARE the Phase I (CYP450) and Phase II (UGT/NAT/SULT) enzymes of the metabolism page: salicylate saturation is the saturation of the Phase I/II pathways that convert aspirin to salicylic acid and its conjugates; phenytoin's capacity limit is its saturable aromatic hydroxylation (CYP2C9/CYP2C19). The metabolism page's 'Geriatric patients lose phase I first' modifier and 'slow acetylators' note are capacity-reducers — they lower the effective Vmax, which both reduces the eliminable amount per hour and moves the saturation (zero-order) threshold DOWN, so elderly or slow-acetylator patients reach zero-order kinetics at lower concentrations.",
    },
    {
      title: "Enzyme Kinetics — Michaelis-Menten and Inhibition",
      topicId: "enzyme-kinetics",
      note:
        "The preceding page (PH1) is the mathematical engine of this page's two rows. The Michaelis-Menten plot (rate vs [S] with Vmax plateau and Km at 1/2 Vmax) IS the saturation curve that separates the orders: at [S] >> Km the rate plateaus at Vmax — elimination is capacity-limited (zero-order, constant amount per unit time); at [S] << Km the rate is proportional to [S] — elimination is flow-dependent (first-order, constant fraction per unit time). Phenytoin is the classic clinical Michaelis-Menten drug: its Km lies within the therapeutic range, so therapeutic concentrations already sit on the flattening part of the curve — the kinetic reason a 33% dose increase can more than triple the level. The Vmax concept also explains ethanol's fixed ~7-10 g/h: saturated alcohol dehydrogenase running at Vmax regardless of BAC.",
    },
    {
      title: "Ethanol Metabolism — ADH, MEOS, and Catalase",
      topicId: "ethanol-metabolism",
      note:
        "Ethanol is the PEA drug whose zero-order behavior is a whole page of its own (book 97, the ethanol-metabolism note). Alcohol dehydrogenase (the major route) saturates at very low ethanol concentrations — so from the first drink onward, elimination is capacity-limited: a constant ~7-10 g of ethanol is metabolized per hour regardless of blood alcohol (zero-order: 'rate of elimination is constant regardless of Cp'). Chronic ethanol use INDUCES CYP2E1 (the MEOS route), raising the Vmax — the functional capacity — which is why tolerant patients metabolize ethanol faster (a higher constant amount per hour) without ever making the kinetics first-order at drinking concentrations. This is the cleanest exam example of the capacity-limited regime: BAC falls LINEARLY (not exponentially) at roughly 0.015%/h.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (Michaelis-Menten enzyme kinetics and saturation)",
      connection:
        "The two elimination orders are the two regimes of the Michaelis-Menten curve (rate = Vmax × [S] / (Km + [S])): [S] >> Km → rate ≈ Vmax (the plateau — a constant amount of product per time regardless of [S]) = ZERO-ORDER elimination; [S] << Km → rate ≈ (Vmax/Km) × [S] (the linear rise — rate proportional to substrate) = FIRST-ORDER elimination. Every saturable enzyme in biochemistry shows the same duality (hexokinase vs glucokinase in the glycolysis note — glucokinase's high Km keeps it first-order across the physiologic glucose range; the CYP450 enzymes of the drug-metabolism page — their saturation is what converts phenytoin, ethanol, and toxic-dose aspirin to zero-order). The page's 'capacity-limited' and 'flow-dependent' synonyms are the in-vivo names for the plateau and the linear region.",
    },
    {
      subject: "Pharmacology (therapeutic drug monitoring and phenytoin dosing)",
      connection:
        "Zero-order (capacity-limited) kinetics is the reason therapeutic drug monitoring exists as a discipline. Phenytoin: saturable metabolism at therapeutic concentrations → dose-dependent (nonlinear) kinetics → the level is not proportional to the dose; small increases (25-30 mg) produce outsized level rises; the therapeutic window (10-20 mg/L) must be tracked by levels. The same logic governs the zero-order drugs' dosing folklore — ethanol 'one drink per hour' clearance and the salicylate overdose level curves. First-order drugs, by contrast, have linear pharmacokinetics (level ∝ dose, constant t1/2), so dosing can be arithmetic: dose every t1/2, steady state after 4-5 half-lives, doubling the dose doubles the level — the entire pharmacokinetics toolkit from PH2 assumes this regime.",
    },
    {
      subject: "Toxicology (salicylate poisoning and enhanced elimination)",
      connection:
        "Aspirin's concentration-dependent switch — first-order at therapeutic doses, zero-order 'at high or toxic concentrations → ↑ salicylate saturation' — is the kinetic backbone of salicylate toxicity management. Saturated elimination means the level climbs disproportionately while absorption continues, the apparent t1/2 stretches from ~2-3 h to ~18-30 h, and serial levels (plus the classic mixed respiratory alkalosis / anion-gap metabolic acidosis) drive decisions. Enhanced elimination exploits the next page's urine-pH machinery: urinary alkalinization traps ionized salicylate in the tubule (ion trapping), converting renal excretion into the dominant clearance pathway and bypassing the saturated metabolic routes; hemodialysis is reserved for severe levels, organ dysfunction, or deterioration. The rebound/double-peak phenomenon after depot absorption is the zero-order regime's clinical signature.",
    },
    {
      subject: "Geriatrics and hepatology (hepatic blood flow and flow-dependent clearance)",
      connection:
        "'Flow-dependent elimination' — the first-order side note — means the rate-limiting step for unsaturated drugs is DELIVERY to the liver, so hepatic blood flow sets their clearance. High-extraction-ratio drugs (propranolol, morphine, lidocaine, verapamil) have flow-limited clearance: cirrhosis, portal hypertension, and heart failure reduce hepatic flow → the constant FRACTION eliminated per hour falls → accumulation at unchanged doses. The elderly face the same flow loss (hepatic blood flow falls with age) compounded by the drug-metabolism page's 'Geriatric patients lose phase I first' — the combined reason geriatric dosing starts low and goes slow. Zero-order drugs are different: their rate is capped by enzyme capacity (Vmax), so flow changes matter less than capacity changes (age, polymorphism, saturation).",
    },
  ],
};
