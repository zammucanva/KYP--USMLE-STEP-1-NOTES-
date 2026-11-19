import type { KypUsMLENote } from "../types";

// Pharmacology — PHARMACOKINETICS AND PHARMACODYNAMICS banner (PH batch 2).
// Source: pdf 251 / book 229 — the "Pharmacokinetics" page: the four
// parameters (Bioavailability F with the AUC formula and plot, Volume of
// distribution Vd with the three-row compartment table, Clearance CL,
// Half-life t1/2 with the steady-state rules and the half-lives-vs-%-
// remaining table) plus the "Age-related changes in pharmacokinetics"
// block (intro + four ▘ bullets: Absorption / Distribution / Metabolism /
// Excretion). Census (pdfimages + VLM, ph2-vlm-census.ts): ZERO raster
// images — pure text plus small VECTOR formula elements (the F formula
// with the AUC plot thumbnail, the Vd/CL/t1/2 fraction formulas, the
// half-life remaining table). No margin mnemonics print anywhere on the
// page; the four KYP mnemonics below are original.
export const pharmacokineticsAging: KypUsMLENote = {
  id: "pharmacokinetics-aging",
  title: "Pharmacokinetic Parameters & Age-Related Changes",
  subtitle:
    "Four numbers — F (how much arrives), Vd (where it hides), CL (how fast plasma is cleaned), t1/2 (the clock) — one linked system, then what aging does to each ADME stage: the gut holds, water shrinks, fat grows, phase I falls first, the kidney slows.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Pharmacokinetics and Pharmacodynamics",
  pilotCategory:
    "The complete pharmacokinetics-parameter page — bioavailability F (fraction reaching systemic circulation; IV 100%, oral <100% from incomplete absorption plus first-pass metabolism; the AUC-ratio formula), volume of distribution Vd (the amount-to-concentration relation; liver/kidney disease ↑Vd via ↓protein binding; hemodialysis most effective for LOW Vd; the three-row Low/Medium/High compartment table), clearance CL (rate of elimination over plasma concentration = Vd × Ke; cardiac/hepatic/renal impairment), half-life t1/2 (0.7 × Vd / CL in first-order elimination; 4–5 half-lives to steady state, 3.3 to 90%; the 50/25/12.5/6.25% halving table), and the four-bullet age-related changes block (absorption spared, water down / fat up, phase I lost first, GFR down) — the parameter system every dosing, loading, and geriatric-toxicity question routes through.",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 229–229 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Bioavailability (F) with the AUC formula; Volume of distribution (Vd) with the compartment table; Clearance (CL); Half-life (t1/2) with the steady-state rule and the half-lives-vs-percent-remaining table; Age-related changes in pharmacokinetics [intro + the four ADME bullets])",
  tags: [
    "pharmacokinetics",
    "bioavailability",
    "F",
    "AUC",
    "area under the curve",
    "first-pass metabolism",
    "incomplete absorption",
    "IV bioavailability",
    "volume of distribution",
    "Vd",
    "compartment",
    "intravascular",
    "ECF",
    "extracellular fluid",
    "plasma protein binding",
    "hydrophilic drugs",
    "lipophilic drugs",
    "tissue protein binding",
    "hemodialysis",
    "clearance",
    "CL",
    "elimination constant",
    "Ke",
    "half-life",
    "t1/2",
    "steady state",
    "first-order elimination",
    "4-5 half-lives",
    "3.3 half-lives",
    "90% steady state",
    "percent remaining",
    "age-related pharmacokinetics",
    "geriatric pharmacology",
    "aging",
    "total body water",
    "total body fat",
    "hepatic mass",
    "hepatic blood flow",
    "phase I metabolism",
    "phase II metabolism",
    "renal mass",
    "renal blood flow",
    "GFR",
    "renal clearance",
    "reduced doses in older patients",
    "loading dose",
    "drug dosing",
  ],
  core: {
    what:
      "Four parameters, one system. BIOAVAILABILITY (F) — the fraction of administered drug reaching systemic circulation; for an IV dose F = 100%, while orally F is typically <100% due to incomplete absorption and first-pass metabolism; F can be calculated from the area under the curve in a plot of plasma concentration over time: F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100. VOLUME OF DISTRIBUTION (Vd) — the theoretical value that relates drug amount to plasma concentration (Vd = amount of drug in the body / plasma drug concentration); drugs may be distributed in more than one compartment; liver and kidney disease increase Vd (↓ protein binding → ↑ Vd); hemodialysis is most effective for drugs with a LOW Vd. The compartment ladder: Low = intravascular (large/charged molecules; plasma protein bound), Medium = ECF (small hydrophilic molecules), High = all tissues including fat (small lipophilic molecules, especially if bound to tissue protein). CLEARANCE (CL) — the volume of plasma cleared of drug per unit time; CL = rate of elimination of drug / plasma drug concentration = Vd × Ke (elimination constant); clearance may be impaired with defects in cardiac, hepatic, or renal function. HALF-LIFE (t1/2) — the time required to eliminate 1/2 of the drug from the body; t1/2 = 0.7 × Vd / CL in first-order elimination; steady state is a dynamic equilibrium in which drug concentration stays constant (rate of elimination = rate of administration), reached in 4–5 half-lives at a constant infusion rate, with 3.3 half-lives to 90% of the steady-state level; each elapsed half-life halves the remainder (1 → 50%, 2 → 25%, 3 → 12.5%, 4 → 6.25%). AGE-RELATED CHANGES — aging alters the passage of drugs through the body and standard doses can result in ↑ plasma concentrations; older patients often require reduced doses to prevent toxicity. Absorption is mostly unaffected. Distribution: ↓ total body water (↓ Vd of hydrophilic drugs → ↑ concentration) and ↑ total body fat (↑ Vd of lipophilic drugs → ↑ half-life). Metabolism: ↓ hepatic mass and blood flow → ↓ first-pass metabolism and ↓ hepatic clearance; phase I is decreased while phase II is relatively preserved. Excretion: ↓ renal mass and blood flow (↓ GFR) → ↓ renal clearance.",
    why:
      "Every dosing decision is one of these four numbers in disguise. F is the entry gate — it is why the same milligram count means more drug in the circulation when given IV (100% arrives) than orally (incomplete absorption plus first-pass metabolism tax the dose before it ever reaches the blood), and the AUC ratio is the measured proof. Vd is the hiding place — a large/charged, plasma-protein-bound drug stays intravascular (Low Vd, which is exactly why hemodialysis can reach it), a small hydrophilic drug walks the extracellular fluid (Medium), and a small lipophilic drug — especially one bound to tissue protein — saturates every compartment including fat (High, where dialysis and diuresis cannot chase it). CL is the exit speed — plasma volume cleaned per unit time, the product Vd × Ke, and the parameter that organ disease attacks (cardiac, hepatic, or renal defects all impair it). t1/2 is the clock built from the other two — 0.7 × Vd / CL — so anything that raises Vd or lowers CL stretches the half-life, and the clock schedules everything: 4–5 half-lives to steady state, 3.3 to 90%, and the halving ladder (50 → 25 → 12.5 → 6.25%) after stopping. The aging block is this system run forward in time: the gut holds (absorption unaffected), total body water falls (hydrophilic drugs concentrate — same dose, smaller volume), total body fat rises (lipophilic drugs dilute into a bigger vat and linger — longer half-lives), the liver shrinks (less first-pass extraction and lower hepatic clearance, with phase I falling before phase II), and the kidney slows (↓ GFR → ↓ renal clearance) — which is why the standard adult dose is quietly toxic in the older patient.",
    keyIdea:
      "Read every pharmacokinetics question through the four-gate chain: AMOUNT (F gates what arrives — IV 100%, oral <100% via failed absorption + first-pass), SPACE (Vd sets the concentration for a given dose — amount in body / plasma concentration; compartment ladder Low = large/charged/protein-bound = intravascular, Medium = small hydrophilic = ECF, High = small lipophilic = all tissues incl fat; organ disease with hypoalbuminemia pushes Vd UP, and only LOW-Vd drugs yield to hemodialysis), SPEED (CL = elimination rate / concentration = Vd × Ke — the organ-function parameter: cardiac, hepatic, or renal defects slow it), CLOCK (t1/2 = 0.7 × Vd / CL — ↑Vd or ↓CL means a longer clock; 4–5 half-lives to steady state, 3.3 to 90%; each half-life halves what is left: 50 / 25 / 12.5 / 6.25%). Then run the aging overlay on the chain: ABSORPTION unchanged (the distractor), DISTRIBUTION split by solubility (hydrophilic ↓Vd → ↑concentration; lipophilic ↑Vd → ↑t1/2), METABOLISM down with phase I lost first and phase II relatively preserved, EXCRETION down with the GFR — so the older patient on a standard dose sits at the wrong end of all three moving gates at once.",
  },
  mechanisms: [
    {
      id: "pk-parameter-trio-map",
      title:
        "The four-parameter engine: F gates the amount, Vd sets the space, CL sets the speed, t1/2 keeps the clock",
      context: "The Pharmacokinetics parameter block (book 229)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An administered dose — amount and route chosen",
            sublabel:
              "Input — the only two things under the prescriber's control before pharmacokinetics takes over: how much drug, and by which route.",
            variant: "input",
          },
          {
            id: "f",
            label: "F — the fraction that actually arrives",
            sublabel:
              "Bioavailability: fraction of administered drug reaching systemic circulation. IV dose: F = 100%. Oral: F typically <100% — incomplete absorption AND first-pass metabolism both tax the dose. Measured from the area under the curve (plasma concentration vs time): F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100.",
            variant: "process",
          },
          {
            id: "vd",
            label: "Vd — the space the arriving drug dissolves into",
            sublabel:
              "Theoretical value that relates drug amount to plasma concentration: Vd = amount of drug in the body / plasma drug concentration. More than one compartment: Low = intravascular (large/charged, plasma protein bound), Medium = ECF (small hydrophilic), High = all tissues including fat (small lipophilic, especially tissue-protein bound). Liver and kidney disease ↑Vd (↓ protein binding); hemodialysis is most effective for LOW-Vd drugs.",
            variant: "process",
          },
          {
            id: "cl",
            label: "CL — the speed plasma is cleaned",
            sublabel:
              "The volume of plasma cleared of drug per unit time: CL = rate of elimination of drug / plasma drug concentration = Vd × Ke (elimination constant). Impaired with defects in cardiac, hepatic, or renal function — the organ-function parameter.",
            variant: "process",
          },
          {
            id: "out",
            label: "t1/2 — the clock every schedule reads",
            sublabel:
              "Output — the time required to eliminate 1/2 of the drug: t1/2 = 0.7 × Vd / CL in first-order elimination. ↑Vd or ↓CL → ↑t1/2. The clock schedules therapy: 4–5 half-lives to steady state (3.3 half-lives to 90%), and each elapsed half-life halves the remainder — 50% → 25% → 12.5% → 6.25%.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "f", label: "route gates the fraction" },
          { from: "f", to: "vd", label: "arriving amount distributes" },
          { from: "vd", to: "cl", label: "CL = Vd × Ke" },
          { from: "vd", to: "out", label: "0.7 × Vd ↑" },
          { from: "cl", to: "out", label: "/ CL (↓CL ↑t1/2)" },
        ],
      },
    },
    {
      id: "aging-pk-shift-map",
      title:
        "The aging overlay: the gut holds, water shrinks, fat grows, phase I falls first, the kidney slows",
      context: "The Age-related changes in pharmacokinetics block (book 229)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A standard adult dose given to an older patient",
            sublabel:
              "Input — dose and interval unchanged; only the body has changed. Aging alters the passage of drugs through the body, and standard doses can result in ↑ plasma concentrations.",
            variant: "input",
          },
          {
            id: "abs",
            label: "ABSORPTION — mostly unaffected",
            sublabel:
              "The gut holds: aging spares absorption, making it the classic distractor — a rising level in an older patient is almost never an absorption story.",
            variant: "process",
          },
          {
            id: "dist",
            label: "DISTRIBUTION — water down, fat up (split by solubility)",
            sublabel:
              "↓ total body water → ↓ Vd of hydrophilic drugs → ↑ concentration (same dose, smaller volume). ↑ total body fat → ↑ Vd of lipophilic drugs → ↑ half-life (bigger vat, longer linger).",
            variant: "process",
          },
          {
            id: "metab",
            label: "METABOLISM — the liver lightens, phase I falls first",
            sublabel:
              "↓ hepatic mass and blood flow → ↓ first-pass metabolism (oral doses arrive less taxed) and ↓ hepatic clearance. Phase I of drug metabolism is decreased; phase II is relatively preserved — the phase-I-lost-first rule carried over from drug metabolism.",
            variant: "process",
          },
          {
            id: "excr",
            label: "EXCRETION — the kidney slows",
            sublabel:
              "↓ renal mass and blood flow (↓ GFR) → ↓ renal clearance — the gate that renally cleared drugs depend on.",
            variant: "process",
          },
          {
            id: "out",
            label: "↑ plasma concentrations — reduced doses required",
            sublabel:
              "Output — the convergence of the three moving gates: standard doses can result in ↑ plasma concentrations; older patients often require reduced doses to prevent toxicity.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "abs", label: "unchanged (distractor)" },
          { from: "trigger", to: "dist", label: "body composition shifts" },
          { from: "trigger", to: "metab", label: "hepatic mass + flow down" },
          { from: "trigger", to: "excr", label: "renal mass + flow down" },
          { from: "dist", to: "out", label: "↑ concentration / ↑ t1/2" },
          { from: "metab", to: "out", label: "↓ clearance" },
          { from: "excr", to: "out", label: "↓ renal clearance" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "pk-parameters-map",
      title: "The pharmacokinetics parameter map (an original KYP adaptation)",
      caption:
        "An original KYP adaptation of the source page (book 229): the four parameters as one linked map — the F panel (the AUC thumbnail redrawn — two concentration-time curves, AUCIV above AUCOral, with F = [AUCoral × DoseIV]/[Doseoral × AUCIV] × 100; IV = 100%, oral <100% from incomplete absorption + first-pass metabolism), the Vd panel (the three-compartment ladder: Low = intravascular = large/charged + plasma-protein-bound, Medium = ECF = small hydrophilic, High = all tissues incl fat = small lipophilic esp tissue-protein-bound, with the liver/kidney-disease ↑Vd note and the hemodialysis-most-effective-for-low-Vd rule), the CL panel (CL = rate of elimination / plasma concentration = Vd × Ke, impaired by cardiac/hepatic/renal defects), and the t1/2 panel (t1/2 = 0.7 × Vd / CL with the halving ladder 50 → 25 → 12.5 → 6.25%, the 3.3-half-lives-to-90% marker and the 4–5-half-lives-to-steady-state marker) — closed by the aging band (the four ADME stages with their direction arrows: absorption unchanged, water down / fat up, phase I lost first, GFR down).",
      notice:
        "Census (pdfimages + VLM): ZERO raster images on this page — pure text plus small vector formula/figure elements (the F formula with the AUC plot thumbnail, the Vd/CL/t1/2 fraction formulas, the half-life remaining table; VLM confirmed; no photographs, margin notes, or mnemonics print anywhere on the page). The linked map, the AUC thumbnail redraw, the compartment ladder, the halving ladder, and the aging band are an ORIGINAL KYP adaptation and redraw of the printed page's content; the compartment table and the half-life table are also carried verbatim in the note's table blocks. The KYP memory layer (the four mnemonics) is original — nothing on the page is a mnemonic.",
    },
    {
      kind: "table",
      title:
        "Book 229 — the Vd compartment table (carried verbatim, all three rows)",
      intro: "As printed, under the Vd definition and its formula.",
      columns: ["Vd", "COMPARTMENT", "DRUG TYPES — book 229 (verbatim)"],
      rows: [
        [
          "Low",
          "Intravascular",
          "Large/charged molecules; plasma protein bound",
        ],
        ["Medium", "ECF", "Small hydrophilic molecules"],
        [
          "High",
          "All tissues including fat",
          "Small lipophilic molecules, especially if bound to tissue protein",
        ],
      ],
      caption:
        "The ladder reads as drug physicochemistry: charge and size keep a drug in the vessels (Low), water solubility buys the extracellular fluid (Medium), lipid solubility plus tissue-protein binding buys the whole body including fat (High). Hemodialysis is most effective for drugs with a LOW Vd — the ones that stay in the plasma the dialyzer sees.",
    },
    {
      kind: "table",
      title:
        "Book 229 — the half-lives-vs-percent-remaining table (carried verbatim)",
      intro:
        "The printed two-row table, transposed row-wise; every value as printed.",
      columns: ["# of half-lives", "% remaining — book 229 (verbatim)"],
      rows: [
        ["1", "50%"],
        ["2", "25%"],
        ["3", "12.5%"],
        ["4", "6.25%"],
      ],
      caption:
        "First-order elimination halves the remainder every half-life — the same arithmetic running forward to steady state (3.3 half-lives to 90%, 4–5 half-lives to full steady state) and backward to washed-out after stopping.",
    },
    {
      kind: "table",
      title:
        "Book 229 — the age-related changes block (carried verbatim: intro + all four bullets)",
      intro:
        "Aging alters the passage of drugs through the body and standard doses can result in ↑ plasma concentrations. Older patients often require reduced doses to prevent toxicity.",
      columns: ["ADME stage", "Change — book 229 (verbatim)"],
      rows: [
        ["Absorption", "Absorption—mostly unaffected."],
        [
          "Distribution",
          "Distribution—↓ total body water (↓ Vd of hydrophilic drugs → ↑ concentration), ↑ total body fat (↑ Vd of lipophilic drugs → ↑ half-life).",
        ],
        [
          "Metabolism",
          "Metabolism—↓ hepatic mass and blood flow → ↓ first-pass metabolism, ↓ hepatic clearance. Phase I of drug metabolism is decreased; phase II is relatively preserved.",
        ],
        [
          "Excretion",
          "Excretion—↓ renal mass and blood flow (↓ GFR) → ↓ renal clearance.",
        ],
      ],
      caption:
        "One organ per bullet: the gut is spared, the water compartment shrinks while the fat compartment grows, the liver loses mass and flow (phase I before phase II), and the kidney loses mass and flow (↓ GFR). Three of the four gates move against the standard dose — hence reduced doses to prevent toxicity.",
    },
    {
      kind: "steps",
      title: "From dose to steady state — how the four parameters schedule an infusion",
      intro:
        "The page's formulas read as one itinerary: what arrives, where it dissolves, how fast it leaves, and when the clock says the tank is full.",
      steps: [
        {
          label: "ROUTE — F gates the amount",
          detail:
            "Fraction of administered drug reaching systemic circulation: IV F = 100%; oral F typically <100% (incomplete absorption + first-pass metabolism) — computed as F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100.",
        },
        {
          label: "DISTRIBUTE — Vd sets the space",
          detail:
            "The arriving amount dissolves into its compartments: Vd = amount of drug in the body / plasma drug concentration (Low = intravascular, Medium = ECF, High = all tissues incl fat; liver and kidney disease ↑Vd via ↓ protein binding).",
        },
        {
          label: "ELIMINATE — CL sets the speed",
          detail:
            "CL = rate of elimination of drug / plasma drug concentration = Vd × Ke (elimination constant) — the volume of plasma cleared per unit time, impaired by cardiac, hepatic, or renal defects.",
        },
        {
          label: "CLOCK — t1/2 = 0.7 × Vd / CL",
          detail:
            "First-order elimination gives every drug its clock: ↑Vd or ↓CL stretches t1/2; the clock is the only schedule a constant-rate infusion can keep.",
        },
        {
          label: "CLIMB — 3.3 half-lives to 90%",
          detail:
            "Steady state is the dynamic equilibrium where rate of elimination = rate of administration; a constant-rate infusion takes 4–5 half-lives to reach it, and is 90% of the way there at 3.3 half-lives — regardless of dose size.",
        },
        {
          label: "CLEAR — halve, halve, halve, halve",
          detail:
            "After stopping (or between doses), each half-life halves the remainder: 50% after 1, 25% after 2, 12.5% after 3, 6.25% after 4 — the printed table, and the reason a loading dose buys time while the steady state climbs.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A research pharmacologist gives 100 mg of a new drug orally and, on a separate occasion, 100 mg IV; the plot of plasma concentration over time yields AUCoral = 40 mg·hr/L and AUCIV = 100 mg·hr/L.",
        discriminator:
          "An AUC ratio question — F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100 = 40% — the fraction reaching systemic circulation",
        concept: "Bioavailability and its AUC formula",
        answer:
          "F is the fraction of administered drug reaching systemic circulation: IV F = 100% by definition (the entire dose is in the circulation), while oral F is typically <100% because of incomplete absorption and first-pass metabolism. The measured proof is the AUC ratio: equal doses make F = AUCoral/AUCIV × 100 = 40% — 40% of the oral dose reached the circulation.",
      },
      {
        stem: "A 24-year-old man is brought to the emergency department after ingesting a massive quantity of a drug that is small and lipophilic and binds tissue protein; the plasma level is high but the largest store of the drug is in fat.",
        discriminator:
          "High Vd (all tissues including fat) — hemodialysis is most effective for drugs with a LOW Vd, so dialysis will not clear this drug well",
        concept: "The compartment table applied to overdose management",
        answer:
          "The compartment ladder: Low Vd = intravascular (large/charged molecules; plasma protein bound), Medium = ECF (small hydrophilic), High = all tissues including fat (small lipophilic, especially if bound to tissue protein). Hemodialysis is most effective for drugs with a low Vd — the ones sitting in the plasma the dialyster can reach; a drug sequestered in fat and tissue protein is largely out of reach, so management leans on other strategies while the drug redistributes.",
      },
      {
        stem: "A drug with a half-life of 8 hours is started as a constant IV infusion at a therapeutic rate. The team wants to know when the infusion will be at 90% of its eventual steady-state concentration.",
        discriminator: "3.3 half-lives to 90% — 3.3 × 8 ≈ 26 hours; full steady state at 4–5 half-lives (32–40 hours)",
        concept: "First-order kinetics and the steady-state clock",
        answer:
          "In first-order kinetics, a drug infused at a constant rate takes 4–5 half-lives to reach steady state and 3.3 half-lives to reach 90% of the steady-state level. Steady state is the dynamic equilibrium in which drug concentration stays constant — rate of elimination = rate of administration. For an 8-hour half-life: 90% at ~26 hours, full steady state at 32–40 hours — and neither number moves by raising the dose (only the steady-state level rises).",
      },
      {
        stem: "A 58-year-old woman with cirrhosis and hypoalbuminemia is started on a standard dose of a drug that is normally 98% plasma-protein bound; free drug levels and total body stores rise out of proportion to the dose.",
        discriminator:
          "Liver (and kidney) disease ↑Vd via ↓ protein binding — the same dose now dissolves in a larger apparent volume",
        concept: "Vd and protein binding",
        answer:
          "Liver and kidney disease increase Vd (↓ protein binding, ↑ Vd). With less albumin to hold it in the vasculature, the drug leaves the plasma for its tissue compartments — the amount-to-concentration relation (Vd = amount of drug in the body / plasma drug concentration) shifts, and a 'standard' dose produces unexpected distribution and dosing consequences.",
      },
    ],
    traps: [
      {
        a: "Volume of distribution (Vd)",
        b: "Clearance (CL)",
        whyConfused:
          "Both are 'abnormal' in organ disease and both appear in the same formulas",
        keyDifference:
          "Vd is a SPACE parameter — the theoretical volume relating amount to plasma concentration, moved by protein binding and compartment behavior (liver/kidney disease ↑Vd via ↓ protein binding); CL is a SPEED parameter — the volume of plasma cleared per unit time, moved by organ blood flow and function (impaired with cardiac, hepatic, or renal defects) and computed as Vd × Ke",
        clue:
          "Hypoalbuminemia, tissue binding, 'where does the drug go' → Vd; heart failure, cirrhosis, ↓GFR, 'how fast does it leave' → CL",
      },
      {
        a: "Hydrophilic drug in an older patient",
        b: "Lipophilic drug in an older patient",
        whyConfused:
          "Both age-related distribution bullets raise drug exposure, in opposite ways",
        keyDifference:
          "HYDROPHILIC: ↓ total body water → ↓ Vd → ↑ CONCENTRATION (same dose, smaller volume — peaks and levels climb); LIPOPHILIC: ↑ total body fat → ↑ Vd → ↑ HALF-LIFE (bigger reservoir, longer linger — effect stretches out)",
        clue:
          "Water-soluble drug (eg, lithium, aminoglycosides) with a rising LEVEL → ↓Vd story; fat-soluble drug (eg, diazepam-type) with prolonged EFFECT → ↑Vd/↑t1/2 story",
      },
      {
        a: "Phase I metabolism in aging",
        b: "Phase II metabolism in aging",
        whyConfused:
          "Both hepatic phases sit in the same aging metabolism bullet",
        keyDifference:
          "Phase I of drug metabolism is DECREASED with aging; phase II is RELATIVELY PRESERVED — the liver loses mass and blood flow (↓ first-pass metabolism, ↓ hepatic clearance) and the oxidative/functionalization arm fades first, while conjugation holds",
        clue:
          "An older patient on a phase-I-metabolized drug (CYP450 oxidation) accumulating or over-responding → phase I loss; the same patient tolerating a conjugated drug → phase II spared",
      },
      {
        a: "IV bioavailability (F = 100%)",
        b: "Oral bioavailability (F typically <100%)",
        whyConfused:
          "The route difference looks like a potency difference",
        keyDifference:
          "IV F = 100% because the entire administered dose is placed directly in the systemic circulation — nothing can tax it; oral F <100% for TWO reasons: incomplete absorption (some dose never gets in) AND first-pass metabolism (gut wall and liver extract part of what does) — the AUC formula F = [AUCoral × DoseIV]/[Doseoral × AUCIV] × 100 measures the combined loss",
        clue:
          "A stem comparing oral and IV AUCs, or claiming oral absorption alone explains a low F → remember the first-pass tax rides on top of absorption",
      },
    ],
    pivots: [
      {
        lookAlike:
          "An older patient with toxicity at a standard, long-standing dose — which pharmacokinetic parameter moved?",
        differentiator:
          "Route by the drug's physicochemistry and clearance organ: hydrophilic drug with a rising level → ↓ total body water → ↓ Vd → ↑ concentration; lipophilic drug with a lengthening effect → ↑ total body fat → ↑ Vd → ↑ half-life; phase-I-metabolized drug → ↓ hepatic mass and blood flow → ↓ first-pass metabolism and ↓ hepatic clearance; renally cleared drug → ↓ renal mass and blood flow (↓ GFR) → ↓ renal clearance; and if the stem points at absorption → pick something else, because absorption is mostly unaffected",
        correctPath:
          "Name the drug's solubility and its exit route first, then read the matching aging bullet: water-lover → Vd, fat-lover → Vd + t1/2, liver-metabolized → CL, kidney-cleared → CL",
      },
      {
        lookAlike:
          "A formula or numeric stem — which parameter is being computed or scheduled?",
        differentiator:
          "Match the skeleton: an AUC ratio × 100 → F (bioavailability); amount of drug in the body / plasma drug concentration → Vd; rate of elimination / plasma concentration (= Vd × Ke) → CL; 0.7 × Vd / CL → t1/2; '4–5 half-lives' → time to steady state; '3.3 half-lives' → 90% of steady state; 50/25/12.5/6.25% → the percent-remaining halving table",
        correctPath:
          "Strip the vignette to the arithmetic it hands you and name the parameter whose definition the numbers fill — the exam recycles these four skeletons constantly.",
      },
      {
        lookAlike:
          "An organ-disease or overdose stem — is this a Vd question in disguise?",
        differentiator:
          "Liver or kidney disease with hypoalbuminemia and protein-binding changes → ↑Vd (↓ protein binding); hemodialysis eligibility → LOW Vd drugs dialyze well (intravascular, large/charged, plasma-protein-bound), HIGH Vd drugs (small lipophilic, tissue-protein-bound, all tissues including fat) do not; cardiac, hepatic, or renal functional defects slowing drug removal → ↓CL",
        correctPath:
          "Ask 'where is the drug hiding' before 'how fast is it leaving': binding and compartment clues route to Vd, blood-flow and organ-function clues route to CL.",
      },
    ],
    miniCase: {
      vignette:
        "An 82-year-old woman with bipolar disorder has taken lithium carbonate 300 mg twice daily for 12 years with levels of 0.7 mmol/L at routine monitoring. Over the past 2 years she has lost 9 kg, almost all of it lean mass (BMI now 19), and at today's visit she has a coarse tremor, confusion, and polyuria. Her lithium concentration, drawn at the usual monitoring interval after an unchanged dose, is 1.4 mmol/L. Measured creatinine clearance today is 58 mL/min — identical to a measurement from 2 years ago. Serum albumin is normal; she takes no new medications, and her salt and fluid intake are unchanged. Lithium is a small hydrophilic ion that distributes in total body water, is not plasma-protein bound, undergoes no hepatic metabolism, and is excreted unchanged by the kidney. Which pharmacokinetic parameter has changed, and why?",
      question:
        "Identify the shifted parameter and its mechanism — the parameter, the body-composition change driving it, and the consequence for her dosing.",
      options: [
        {
          label:
            "Vd has fallen — ↓ total body water (lost lean mass) → ↓ Vd of this hydrophilic drug → the standard dose now dissolves in a smaller volume → ↑ plasma concentration; her lithium dose must be reduced",
          text: "Same dose, smaller vat — the level climbs.",
          correct: true,
          why:
            "Correct on every layer. (1) PARAMETER: Vd is the theoretical value that relates drug amount to plasma concentration (amount of drug in the body / plasma drug concentration) — a smaller denominator volume raises the concentration the same dose produces. (2) DRIVER: aging shrinks total body water (her 9 kg of lean loss is mostly water), and the aging block's distribution bullet prints the rule exactly — ↓ total body water (↓ Vd of hydrophilic drugs → ↑ concentration). Lithium is small and hydrophilic and distributes in body water, so it rides this bullet. (3) CONSEQUENCE: aging alters the passage of drugs through the body; standard doses can result in ↑ plasma concentrations, and older patients often require reduced doses to prevent toxicity — her tremor, confusion, and polyuria are the toxicity the block warns about.",
        },
        {
          label:
            "Vd has risen — ↑ total body fat of aging → ↑ Vd → ↑ half-life, so the drug accumulates with repeated dosing",
          text: "The fat vat grows and the drug lingers.",
          why:
            "Right idea, wrong compartment and wrong solubility: the ↑ total body fat (↑ Vd of lipophilic drugs → ↑ half-life) bullet applies to LIPOPHILIC drugs — fat is a reservoir a fat-soluble drug enters. Lithium is hydrophilic and stays in body water, so the fat compartment does not hold it; and she has LOST weight (lean mass), not gained fat mass as the dominant shift. The halving of her water space — not growth of her fat space — is what raised the level.",
        },
        {
          label:
            "F has risen — ↓ hepatic mass and blood flow → ↓ first-pass metabolism, so more of each oral dose survives to the systemic circulation",
          text: "Less first-pass tax on the oral dose.",
          why:
            "A true aging mechanism aimed at the wrong parameter for this drug: aging does ↓ first-pass metabolism (part of ↓ hepatic mass and blood flow → ↓ hepatic clearance), but lithium undergoes no hepatic metabolism and no first-pass extraction — it is excreted unchanged by the kidney. F is the fraction of administered drug reaching systemic circulation (IV = 100%, oral <100% from incomplete absorption + first-pass), and nothing in the stem changed her absorption or extraction; her level rose with her weight loss, not with a route change.",
        },
        {
          label:
            "Hepatic clearance has fallen — phase I of drug metabolism is decreased with aging, so the drug is eliminated more slowly",
          text: "The phase I engine fades first.",
          why:
            "The true-fact-wrong-organ distractor: phase I of drug metabolism IS decreased in aging (phase II relatively preserved) — but that bullet governs hepatically metabolized drugs (eg, CYP450-oxidized benzodiazepines). Lithium is not hepatically metabolized at all, so no amount of phase I loss slows its removal. Her liver was never the clearance organ for this drug.",
        },
        {
          label:
            "Renal clearance has fallen — ↓ renal mass and blood flow (↓ GFR) → ↓ renal clearance → drug accumulation",
          text: "The kidney slows, the level climbs.",
          why:
            "The designed near-miss — and it is the mechanism to check first in any lithium patient, because aging's excretion bullet (↓ renal mass and blood flow [↓ GFR] → ↓ renal clearance) genuinely raises lithium levels. But the stem closes that door: her measured creatinine clearance is identical to 2 years ago, and the rise has tracked her lean-mass loss, not an illness or a filtration change. A clearance fall would slow elimination and stretch the half-life (accumulation across 4–5 half-lives); a volume fall raises the concentration the unchanged dose produces. With filtration pinned as stable, the shifted parameter is Vd.",
        },
      ],
      reasoning:
        "The stem hands you four locked doors and one open one. (1) ABSORPTION — mostly unaffected by aging; and nothing changed her gut. (2) METABOLISM — ↓ hepatic mass and blood flow → ↓ first-pass metabolism and ↓ hepatic clearance, with phase I decreased and phase II relatively preserved — but lithium undergoes no hepatic metabolism, so both hepatic options (F via first-pass, CL via phase I) are dead ends. (3) EXCRETION — ↓ renal mass and blood flow (↓ GFR) → ↓ renal clearance is the classic lithium trap, but her creatinine clearance is documented identical to 2 years ago, eliminating a clearance shift. (4) DISTRIBUTION — the open door: she lost 9 kg of lean mass (mostly water), and lithium is a small hydrophilic ion that distributes in total body water. The aging block's distribution bullet prints the mechanism — ↓ total body water (↓ Vd of hydrophilic drugs → ↑ concentration) — so the standard dose now dissolves in a smaller volume and the level doubles. The exam skill: name the drug's solubility and exit route first (hydrophilic + renal), then read the matching aging bullet, and let the pinned-normal labs exclude the near-miss organ.",
    },
  },
  mnemonics: [
    {
      code: "FRACTION, SPACE, SPEED, CLOCK",
      meaning:
        "The four PK parameters in printed order: FRACTION = bioavailability F, the fraction of administered drug reaching systemic circulation (IV = 100%; oral typically <100% from incomplete absorption + first-pass metabolism); SPACE = volume of distribution Vd, the space the drug dissolves through (amount of drug in the body / plasma drug concentration); SPEED = clearance CL, the volume of plasma cleared per unit time (rate of elimination / plasma drug concentration = Vd × Ke); CLOCK = half-life t1/2 (0.7 × Vd / CL in first-order elimination), which schedules 4–5 half-lives to steady state and 3.3 half-lives to 90%.",
      memorizes: "The four-parameter pharmacokinetics system and what each governs",
      whenToUse:
        "Any question that names a PK parameter or asks which one a clinical change (route, organ disease, aging) moves",
      clinical:
        "Every dosing problem routes through the four: did the amount arriving change (F), the volume it dissolves in (Vd), the speed it leaves (CL), or the timing (t1/2)?",
    },
    {
      code: "CHARGED STAYS IN THE PIPE, WET WALKS THE BATH, FAT BOARDS EVERY DECK",
      meaning:
        "The Vd compartment ladder: CHARGED STAYS IN THE PIPE — large/charged molecules and plasma-protein-bound drugs remain intravascular (Low Vd); WET WALKS THE BATH — small hydrophilic molecules occupy the extracellular fluid (Medium Vd); FAT BOARDS EVERY DECK — small lipophilic molecules, especially if bound to tissue protein, enter all tissues including fat (High Vd).",
      memorizes: "The three-row Vd/COMPARTMENT/DRUG TYPES table",
      whenToUse:
        "Any Vd-magnitude, compartment, or hemodialysis-eligibility question",
      clinical:
        "Hemodialysis is most effective for drugs with a LOW Vd — the ones that stay in the pipe the dialyzer can reach; fat-boarders are out of reach.",
    },
    {
      code: "HALVE FOUR TIMES, 6.25 SURVIVES; 3.3 TO NINETY, FIVE TO FULL",
      meaning:
        "First-order timing arithmetic: each half-life halves the remainder — after 1 half-life 50% remains, 2 → 25%, 3 → 12.5%, 4 → 6.25% (HALVE FOUR TIMES, 6.25 SURVIVES); on the way up, a constant-rate infusion reaches 90% of steady state in 3.3 half-lives (3.3 TO NINETY) and full steady state in 4–5 half-lives (FIVE TO FULL).",
      memorizes:
        "The half-lives-vs-percent-remaining table plus both steady-state timing rules",
      whenToUse:
        "Any time-to-steady-state, percent-remaining, loading-dose, or drug-washout question",
      clinical:
        "A drug with a 12-hour half-life reaches steady state in 2–2.5 days no matter the dose — load if you cannot wait, and never chase a partial level.",
    },
    {
      code: "GUT UNCHANGED, WATER DOWN, FAT UP, LIVER SLOW, KIDNEY SLOW",
      meaning:
        "The age-related changes block, organ by organ: GUT UNCHANGED — absorption is mostly unaffected; WATER DOWN — ↓ total body water → ↓ Vd of hydrophilic drugs → ↑ concentration; FAT UP — ↑ total body fat → ↑ Vd of lipophilic drugs → ↑ half-life; LIVER SLOW — ↓ hepatic mass and blood flow → ↓ first-pass metabolism, ↓ hepatic clearance, phase I decreased with phase II relatively preserved; KIDNEY SLOW — ↓ renal mass and blood flow (↓ GFR) → ↓ renal clearance.",
      memorizes:
        "The intro line and all four ADME bullets of the age-related changes block",
      whenToUse:
        "Any geriatric dosing, toxicity-at-standard-dose, or aging-PK question",
      clinical:
        "The unifying line the block prints: aging alters the passage of drugs through the body — standard doses can result in ↑ plasma concentrations, so older patients often require reduced doses to prevent toxicity.",
    },
  ],
  rapidReview: {
    s30: [
      "Bioavailability F = fraction of administered drug reaching systemic circulation; IV F = 100%; oral F typically <100% due to incomplete absorption and first-pass metabolism",
      "F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100, from the area under the curve in a plot of plasma concentration over time",
      "Vd = amount of drug in the body / plasma drug concentration — the theoretical value relating drug amount to plasma concentration; drugs may distribute in more than one compartment",
      "Compartment ladder: Low = intravascular (large/charged; plasma protein bound); Medium = ECF (small hydrophilic); High = all tissues including fat (small lipophilic, especially if bound to tissue protein)",
      "Liver and kidney disease ↑Vd (↓ protein binding, ↑ Vd); hemodialysis is most effective for drugs with a LOW Vd",
      "CL = the volume of plasma cleared of drug per unit time = rate of elimination / plasma drug concentration = Vd × Ke (elimination constant); impaired with cardiac, hepatic, or renal defects",
      "t1/2 = 0.7 × Vd / CL in first-order elimination — ↑Vd or ↓CL stretches the half-life",
      "Steady state: dynamic equilibrium, rate of elimination = rate of administration; 4–5 half-lives to steady state, 3.3 half-lives to 90% of the steady-state level",
      "Half-life remaining table: 1 → 50%, 2 → 25%, 3 → 12.5%, 4 → 6.25%",
      "Aging: absorption mostly unaffected; ↓ total body water → ↓Vd hydrophilic → ↑ concentration; ↑ total body fat → ↑Vd lipophilic → ↑ half-life; ↓ hepatic mass/blood flow → ↓ first-pass and ↓ hepatic clearance (phase I decreased, phase II relatively preserved); ↓ renal mass/blood flow (↓GFR) → ↓ renal clearance — standard doses → ↑ plasma concentrations; reduce doses in older patients",
    ],
    m3: [
      "FRACTION, SPACE, SPEED, CLOCK — F, Vd, CL, t1/2 in printed order",
      "CHARGED STAYS IN THE PIPE, WET WALKS THE BATH, FAT BOARDS EVERY DECK — the compartment ladder (and hemodialysis works on the pipe)",
      "HALVE FOUR TIMES, 6.25 SURVIVES; 3.3 TO NINETY, FIVE TO FULL — the halving table and both steady-state timings",
      "GUT UNCHANGED, WATER DOWN, FAT UP, LIVER SLOW, KIDNEY SLOW — aging ADME",
      "Phase I falls first with aging; phase II is relatively preserved — the metabolism bullet's fine print",
    ],
    m10: [
      "IV F = 100% by definition — nothing taxes a dose placed directly in the circulation; the oral <100% has TWO causes (incomplete absorption AND first-pass metabolism)",
      "Vd is the only parameter appearing in all three formulas: Vd itself, CL = Vd × Ke, and t1/2 = 0.7 × Vd / CL — move Vd and both downstream numbers move",
      "The hemodialysis rule keys on the compartment table's LOW row: intravascular, large/charged, plasma-protein-bound — the drugs a dialyzer can actually see",
      "The steady-state clock is dose-independent: 4–5 half-lives always; raising the dose raises the LEVEL, never the SPEED",
      "Aging distribution is a solubility split: hydrophilic drugs concentrate (↓TBW → ↓Vd → ↑concentration) while lipophilic drugs linger (↑fat → ↑Vd → ↑half-life) — opposite directions, one bullet each",
      "The aging metabolism bullet hides a pharmacology favorite: phase I (CYP450 functionalization) is decreased while phase II (conjugation) is relatively preserved — conjugated drugs age better",
      "Zero rasters on the source page (pdfimages + VLM census): the F/AUC figure and the Vd/CL/t1/2 formulas are small VECTOR elements — the KYP linked map and its AUC thumbnail are original redraws",
    ],
  },
  recall: [
    {
      q: "The bioavailability definition block, verbatim — including both reasons oral F is under 100%.",
      a: "Fraction of administered drug reaching systemic circulation. For an IV dose, F = 100%. Orally: F typically <100% due to incomplete absorption and first-pass metabolism. Can be calculated from the area under the curve in a plot of plasma concentration over time.",
    },
    {
      q: "The bioavailability formula, verbatim (with the plot's curve labels).",
      a: "F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100 — computed from the area under the curve in a plot of plasma concentration over time (the AUCIV curve sits above the AUCOral curve across the time axis).",
    },
    {
      q: "The volume of distribution definition block, verbatim — including the disease and hemodialysis rules.",
      a: "Theoretical value that relates drug amount to plasma concentration. Liver and kidney disease increase Vd (↓ protein binding, ↑ Vd). Drugs may be distributed in more than one compartment. Hemodialysis is most effective for drugs with a low Vd. Vd = amount of drug in the body / plasma drug concentration.",
    },
    {
      q: "The Vd compartment table, verbatim — all three rows (Vd / compartment / drug types).",
      a: "Low — Intravascular — Large/charged molecules; plasma protein bound. Medium — ECF — Small hydrophilic molecules. High — All tissues including fat — Small lipophilic molecules, especially if bound to tissue protein.",
    },
    {
      q: "The clearance definition and formula, verbatim.",
      a: "The volume of plasma cleared of drug per unit time. Clearance may be impaired with defects in cardiac, hepatic, or renal function. CL = rate of elimination of drug / plasma drug concentration = Vd × Ke (elimination constant).",
    },
    {
      q: "The half-life definition, the steady-state definition, and both timing rules, verbatim.",
      a: "The time required to eliminate 1/2 of the drug from the body. Steady state is a dynamic equilibrium in which drug concentration stays constant (ie, rate of drug elimination = rate of drug administration). In first-order kinetics, a drug infused at a constant rate takes 4-5 half-lives to reach steady state. It takes 3.3 half-lives to reach 90% of the steady-state level.",
    },
    {
      q: "The half-life formula, verbatim (including its qualifying clause).",
      a: "t1/2 = 0.7 × Vd / CL in first-order elimination.",
    },
    {
      q: "The half-lives-vs-percent-remaining table, verbatim.",
      a: "# of half-lives: 1, 2, 3, 4 → % remaining: 50%, 25%, 12.5%, 6.25%.",
    },
    {
      q: "The age-related changes intro, verbatim.",
      a: "Aging alters the passage of drugs through the body and standard doses can result in ↑ plasma concentrations. Older patients often require reduced doses to prevent toxicity.",
    },
    {
      q: "The distribution and metabolism bullets of the aging block, verbatim — including the phase I/II sentence.",
      a: "Distribution—↓ total body water (↓ Vd of hydrophilic drugs → ↑ concentration), ↑ total body fat (↑ Vd of lipophilic drugs → ↑ half-life). Metabolism—↓ hepatic mass and blood flow → ↓ first-pass metabolism, ↓ hepatic clearance. Phase I of drug metabolism is decreased; phase II is relatively preserved.",
    },
    {
      q: "The absorption and excretion bullets of the aging block, verbatim.",
      a: "Absorption—mostly unaffected. Excretion—↓ renal mass and blood flow (↓ GFR) → ↓ renal clearance.",
    },
  ],
  related: [
    {
      title: "Enzyme Kinetics & Drug-Receptor Interactions",
      topicId: "enzyme-kinetics",
      note: "The facing page of this subsection — Km/Vmax and competitive vs noncompetitive inhibition — the quantitative scaffold (and the zero- vs first-order distinction's enzymologic ancestor) that the t1/2 and CL formulas build on.",
    },
    {
      title: "Drug Metabolism: Phase I & Phase II",
      topicId: "drug-metabolism",
      note: "The aging metabolism bullet's 'phase I decreased; phase II relatively preserved' is this page's phase I (CYP450 oxidation/reduction/hydrolysis) vs phase II (conjugation) split run through the geriatric liver — the phase-I-lost-first rule carried between the two pages.",
    },
    {
      title: "Elimination of Drugs: Zero & First Order",
      topicId: "elimination-of-drugs",
      note: "Every t1/2 rule on this page assumes FIRST-order elimination (a constant fraction eliminated per unit time — hence the halving ladder and the 4–5 half-lives clock); the zero-order drugs (constant amount eliminated) have no fixed half-life and break the table.",
    },
    {
      title: "Urine pH, Ion Trapping & Dosage Calculations",
      topicId: "urine-ph-dosage",
      note: "The dosing arithmetic these parameters feed — loading and maintenance dose calculations, plus renal handling (ion trapping) as an elimination modifier on the CL side of the map.",
    },
    {
      title: "Efficacy vs Potency: Reading Dose-Response Curves",
      topicId: "efficacy-potency",
      note: "The PD half of this subsection's title: pharmacokinetics (this page — what the body does to the drug) sets the plasma concentration; pharmacodynamics (that page — what the drug does to the body) sets what that concentration means at the receptor.",
    },
  ],
  crossLinks: [
    {
      subject: "Renal physiology (GFR and creatinine clearance)",
      connection:
        "The aging excretion bullet is renal physiology quantified: ↓ renal mass and blood flow → ↓ GFR → ↓ renal clearance — and creatinine clearance, the same GFR estimate the renal chapter builds, is the number that renally cleared drugs (lithium, aminoglycosides, digoxin) must be dosed against, with sarcopenia's low creatinine production masking the fall in the elderly.",
    },
    {
      subject: "Biochemistry (CYP450 functionalization vs conjugation chemistry)",
      connection:
        "Phase I is functionalization — CYP450 oxidation, reduction, hydrolysis building a handle onto the molecule; phase II is conjugation — glucuronidation, sulfation, acetylation, methylation capping that handle — which is why aging (and hepatic disease) clips phase I first while the conjugation machinery is relatively preserved.",
    },
    {
      subject: "Geriatrics and body composition (sarcopenia)",
      connection:
        "The aging distribution bullet is body-composition physiology: lean mass (≈ water) falls and fat mass rises with age — the same sarcopenia the nutrition and endocrine chapters track — so hydrophilic drugs concentrate in a shrinking water space while lipophilic drugs dilute into a growing fat one.",
    },
    {
      subject: "Cardiovascular physiology (cardiac output and organ blood flow)",
      connection:
        "Clearance is hemodynamics downstream: CL is impaired with cardiac defects because forward failure slows hepatic and renal drug delivery — the same low-flow state that raises jaundice and prerenal azotemia markers also lets standard drug doses accumulate.",
    },
  ],
};
