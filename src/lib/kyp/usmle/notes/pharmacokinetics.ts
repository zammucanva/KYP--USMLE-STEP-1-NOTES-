import type { KypUsMLENote } from "../types";

// Pharmacology — PHARMACOKINETICS AND PHARMACODYNAMICS banner (PH2).
// Source: pdf 251 / book 229 (Pharmacokinetics — Bioavailability (F),
// Volume of distribution (Vd) with the compartment / drug-types table,
// Clearance (CL), Half-life (t1/2) with the % remaining table, and
// Age-related changes in pharmacokinetics).
// Census (pdfimages + VLM): NO raster images on the page (pdfimages
// -list returned zero rows). The page has ONE vector figure (the AUC
// plot — plasma concentration vs time, IV vs Oral curves with the
// bioavailability formula F = [AUCoral × DoseIV] / [Doseoral × AUCIV]
// × 100) — redrawn as an ORIGINAL_KYP_REDRAW vector graphic in the
// registry visual (no photographs, no copyrighted artwork reproduced).
// The two tables (Vd compartment / drug-types; half-life remaining)
// are pure text and are carried verbatim in this note's table blocks.
// NO copyrighted photographs; no mnemonic prints on book 229 — the
// four KYP mnemonics are original designs.

export const pharmacokinetics: KypUsMLENote = {
  id: "pharmacokinetics",
  title: "Pharmacokinetics",
  subtitle:
    "Bioavailability, volume of distribution, clearance, and half-life — and how aging rewires all four (book 229). BIOAVAILABILITY (F): fraction of administered drug reaching systemic circulation; for an IV dose, F = 100%; orally, F is typically <100% due to incomplete absorption and first-pass metabolism; F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100. VOLUME OF DISTRIBUTION (Vd): theoretical value relating drug amount to plasma concentration; Vd = amount of drug in the body / plasma drug concentration; liver and kidney disease increase Vd (↓ protein binding, ↑ Vd); drugs may distribute in more than one compartment; hemodialysis is most effective for drugs with a low Vd. Vd COMPARTMENTS: Low = Intravascular = Large/charged molecules; plasma protein bound; Medium = ECF = Small hydrophilic molecules; High = All tissues including fat = Small lipophilic molecules, especially if bound to tissue protein. CLEARANCE (CL): the volume of plasma cleared of drug per unit time; CL = rate of elimination of drug / plasma drug concentration = Vd × Ke; impaired by cardiac, hepatic, or renal dysfunction. HALF-LIFE (t1/2): time required to eliminate 1/2 of the drug; t1/2 = 0.7 × Vd / CL in first-order elimination; 4-5 half-lives to reach steady state; 3.3 half-lives to reach 90% of steady state; after n half-lives the % remaining is 50, 25, 12.5, 6.25. AGING: absorption mostly unaffected; distribution — ↓ total body water (↓ Vd of hydrophilic drugs → ↑ concentration), ↑ total body fat (↑ Vd of lipophilic drugs → ↑ half-life); metabolism — ↓ hepatic mass and blood flow → ↓ first-pass metabolism, ↓ hepatic clearance, Phase I decreased but Phase II preserved; excretion — ↓ renal mass and blood flow (↓ GFR) → ↓ renal clearance.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Pharmacokinetics and Pharmacodynamics",
  pilotCategory:
    "The pharmacokinetics page's complete architecture — the bioavailability definition and the AUC formula (F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100); the volume-of-distribution definition and the three-compartment / drug-types table (Low → Intravascular → Large/charged; Medium → ECF → Small hydrophilic; High → All tissues including fat → Small lipophilic); the clearance definition (CL = Vd × Ke); the half-life definition and the t1/2 = 0.7 × Vd / CL formula with the 4-5 half-lives to steady state and 3.3 half-lives to 90% rules and the 50/25/12.5/6.25% remaining decay; and the age-related PK changes across absorption, distribution, metabolism, and excretion.",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 229 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Pharmacokinetics — Bioavailability (F) with the fraction-reaching-systemic-circulation definition, F = 100% for IV, F typically <100% orally due to incomplete absorption and first-pass metabolism, and the AUC formula F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100; Volume of distribution (Vd) with the theoretical-value definition, the Vd = amount of drug in the body / plasma drug concentration formula, the liver/kidney-disease-increases-Vd rule, the more-than-one-compartment note, the hemodialysis-most-effective-for-low-Vd rule, and the three-row Vd / Compartment / Drug-types table across Low/Intravascular/Large-charged, Medium/ECF/Small-hydrophilic, High/All-tissues-including-fat/Small-lipophilic; Clearance (CL) with the volume-of-plasma-cleared definition, the cardiac-hepatic-renal-impairment note, and the CL = rate of elimination / plasma concentration = Vd × Ke formula; Half-life (t1/2) with the eliminate-1/2 definition, the steady-state dynamic-equilibrium note, the 4-5 half-lives to steady state and 3.3 half-lives to 90% rules, the t1/2 = 0.7 × Vd / CL formula, and the # of half-lives × % remaining table (1 → 50%, 2 → 25%, 3 → 12.5%, 4 → 6.25%); and the Age-related changes in pharmacokinetics across Absorption, Distribution, Metabolism, and Excretion)",
  tags: [
    "pharmacokinetics",
    "bioavailability",
    "F",
    "AUC",
    "AUCIV",
    "AUCOral",
    "first-pass metabolism",
    "volume of distribution",
    "Vd",
    "compartment model",
    "intravascular",
    "ECF",
    "large charged molecules",
    "small hydrophilic molecules",
    "small lipophilic molecules",
    "plasma protein binding",
    "hemodialysis",
    "clearance",
    "CL",
    "Vd × Ke",
    "elimination constant",
    "half-life",
    "t1/2",
    "0.7 × Vd / CL",
    "first-order kinetics",
    "steady state",
    "4-5 half-lives",
    "3.3 half-lives",
    "90% of steady state",
    "50% remaining",
    "25% remaining",
    "12.5% remaining",
    "6.25% remaining",
    "age-related changes",
    "elderly dosing",
    "total body water",
    "total body fat",
    "first-pass metabolism decreased",
    "Phase I decreased",
    "Phase II preserved",
    "GFR decreased",
    "renal clearance decreased",
  ],
  core: {
    what:
      "PHARMACOKINETICS describes how the body handles a drug — absorption, distribution, metabolism, excretion (ADME). BIOAVAILABILITY (F): fraction of administered drug reaching systemic circulation. For an IV dose, F = 100%. Orally, F is typically <100% due to incomplete absorption and first-pass metabolism; F can be calculated from the area under the curve (AUC) of a plasma-concentration-vs-time plot — F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100. VOLUME OF DISTRIBUTION (Vd): theoretical value that relates drug amount to plasma concentration; Vd = amount of drug in the body / plasma drug concentration. Liver and kidney disease increase Vd (↓ protein binding, ↑ Vd). Drugs may distribute in more than one compartment. Hemodialysis is most effective for drugs with a LOW Vd. Vd COMPARTMENTS — Low = Intravascular = Large/charged molecules; plasma protein bound; Medium = ECF = Small hydrophilic molecules; High = All tissues including fat = Small lipophilic molecules, especially if bound to tissue protein. CLEARANCE (CL): the volume of plasma cleared of drug per unit time; CL = rate of elimination of drug / plasma drug concentration = Vd × Ke (elimination constant); impaired by cardiac, hepatic, or renal dysfunction. HALF-LIFE (t1/2): the time required to eliminate 1/2 of the drug from the body. STEADY STATE is a dynamic equilibrium in which drug concentration stays constant (rate of elimination = rate of administration). In first-order kinetics, a drug infused at a constant rate takes 4-5 half-lives to reach steady state and 3.3 half-lives to reach 90% of the steady-state level. t1/2 = 0.7 × Vd / CL in first-order elimination. After 1, 2, 3, 4 half-lives the % remaining is 50%, 25%, 12.5%, 6.25%. AGING alters PK — older patients often require reduced doses to prevent toxicity. Absorption: mostly unaffected. Distribution: ↓ total body water (↓ Vd of hydrophilic drugs → ↑ concentration), ↑ total body fat (↑ Vd of lipophilic drugs → ↑ half-life). Metabolism: ↓ hepatic mass and blood flow → ↓ first-pass metabolism, ↓ hepatic clearance; Phase I decreased, Phase II relatively preserved. Excretion: ↓ renal mass and blood flow (↓ GFR) → ↓ renal clearance.",
    why:
      "The four PK constants are not independent — they are wired together by two equations: Vd = amount / plasma concentration (where the drug sits), and CL = Vd × Ke (how fast the body clears it). The third equation, t1/2 = 0.7 × Vd / CL, is the bridge: it says the half-life is the ratio of distribution to clearance. A drug that hides in tissue (high Vd) has a long half-life because clearance cannot find it; a drug that lives in plasma (low Vd) is easy to clear and has a short half-life. That is why hemodialysis is most effective for drugs with a LOW Vd — they live in the plasma compartment that dialysis can reach. Bioavailability closes the loop on the input side: an oral dose with F = 50% delivers half as much to systemic circulation as an IV dose, so to match an IV dose you must double the oral dose (or, equivalently, the F appears in the denominator of every oral-to-IV conversion). The steady-state rule (4-5 half-lives) is the temporal consequence of the t1/2 formula: a drug reaches steady state when the input rate equals the elimination rate, and the elimination rate is set by the half-life, so the time-to-steady-state scales with t1/2. Aging rewires every term: lower total body water shrinks the hydrophilic compartment (lower Vd for hydrophilic drugs → higher plasma concentration for the same dose), higher total body fat enlarges the lipophilic compartment (higher Vd for lipophilic drugs → longer t1/2), lower hepatic mass and blood flow shrink first-pass metabolism (more oral drug reaches systemic circulation — F effectively rises), and lower GFR shrinks renal clearance (CL falls → t1/2 rises). Phase I (cytochrome P450 oxidation/reduction/hydrolysis) declines with age but Phase II (conjugation — glucuronidation, sulfation, acetylation) is relatively preserved, which is why lorazepam (a Phase II-conjugated benzodiazepine) is preferred over diazepam (a Phase I-oxidized one) in the elderly.",
    keyIdea:
      "Read every PK question through two axes. AXIS 1 — THE BIOAVAILABILITY-CLEARANCE AXIS (F, Vd, CL, and t1/2 wired together): F = fraction reaching systemic circulation (100% IV; <100% oral); Vd = amount / plasma concentration (Low = Intravascular/Large-charged; Medium = ECF/Small-hydrophilic; High = All-tissues/Small-lipophilic); CL = Vd × Ke (volume of plasma cleared per unit time); t1/2 = 0.7 × Vd / CL. Liver/kidney disease raises Vd (↓ protein binding); hemodialysis reaches only LOW-Vd drugs. AXIS 2 — THE STEADY-STATE AXIS: 4-5 half-lives to steady state; 3.3 half-lives to 90%; after n half-lives the % remaining is 50, 25, 12.5, 6.25. AGING shifts every constant — absorption unchanged; hydrophilic Vd ↓ (concentration ↑); lipophilic Vd ↑ (t1/2 ↑); first-pass metabolism ↓ (oral F effectively ↑); Phase I ↓, Phase II preserved; GFR ↓ (renal CL ↓). 'Four to five half-lives to steady state; 0.7 × Vd / CL = t1/2.'",
  },
  mechanisms: [
    {
      id: "pk-bioavailability-clearance-axis",
      title: "The bioavailability-clearance axis: F, Vd, CL, and t1/2 wired together",
      context: "The Bioavailability, Vd, and Clearance definitions (book 229)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A drug dose enters the body",
            sublabel:
              "Input — a dose (IV or oral) is administered. The bioavailability F determines how much of it reaches systemic circulation: 100% for IV (it bypasses the gut and liver); <100% for oral (incomplete absorption + first-pass metabolism).",
            variant: "input",
          },
          {
            id: "f",
            label: "F — bioavailability",
            sublabel:
              "F = fraction of administered drug reaching systemic circulation. For an IV dose, F = 100%. Orally, F is typically <100% due to incomplete absorption and first-pass metabolism. F is calculated from AUC: F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100.",
            variant: "process",
          },
          {
            id: "vd",
            label: "Vd — where the drug sits",
            sublabel:
              "Vd = amount of drug in the body / plasma drug concentration. Liver and kidney disease increase Vd (↓ protein binding → ↑ Vd). Three compartments: Low Vd = Intravascular (large/charged; plasma protein bound); Medium Vd = ECF (small hydrophilic); High Vd = All tissues including fat (small lipophilic, especially if tissue-protein-bound). Hemodialysis is most effective for LOW-Vd drugs.",
            variant: "process",
          },
          {
            id: "cl",
            label: "CL — how fast the body clears it",
            sublabel:
              "CL = the volume of plasma cleared of drug per unit time = rate of elimination / plasma drug concentration = Vd × Ke (elimination constant). CL is impaired by defects in cardiac, hepatic, or renal function — three organ systems, three failure modes that all lengthen t1/2.",
            variant: "process",
          },
          {
            id: "t12",
            label: "t1/2 — the bridge between Vd and CL",
            sublabel:
              "Output — t1/2 = 0.7 × Vd / CL in first-order elimination. A high-Vd drug has a long t1/2 (clearance cannot find it); a low-Vd drug has a short t1/2 (clearance finds it easily). Aging raises Vd for lipophilic drugs and lowers CL (renal/hepatic) — both lengthen t1/2, which is why older patients need lower doses.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "f", label: "route sets F" },
          { from: "f", to: "vd", label: "F × dose = systemic amount" },
          { from: "vd", to: "cl", label: "Vd × Ke = CL" },
          { from: "vd", to: "t12", label: "↑Vd → ↑t1/2" },
          { from: "cl", to: "t12", label: "↑CL → ↓t1/2" },
        ],
      },
    },
    {
      id: "pk-steady-state-axis",
      title: "The steady-state axis: 4-5 half-lives, 3.3 to 90%, and the 50/25/12.5/6.25 decay",
      context: "The Half-life definition and the % remaining table (book 229)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A drug is infused at a constant rate",
            sublabel:
              "Input — first-order kinetics, constant-rate infusion. The question is how long until the plasma concentration stops climbing.",
            variant: "input",
          },
          {
            id: "ss",
            label: "Steady state — elimination rate = administration rate",
            sublabel:
              "Steady state is a dynamic equilibrium in which drug concentration stays constant (rate of drug elimination = rate of drug administration). The plasma level plateaus because what goes in equals what comes out.",
            variant: "process",
          },
          {
            id: "rule",
            label: "4-5 half-lives to steady state; 3.3 half-lives to 90%",
            sublabel:
              "In first-order kinetics, a drug infused at a constant rate takes 4-5 half-lives to reach steady state. It takes 3.3 half-lives to reach 90% of the steady-state level. After a loading dose, the same time window applies to reach the new plateau.",
            variant: "process",
          },
          {
            id: "decay",
            label: "% remaining after n half-lives: 50 / 25 / 12.5 / 6.25",
            sublabel:
              "After 1 half-life, 50% remains; 2 half-lives, 25%; 3 half-lives, 12.5%; 4 half-lives, 6.25%. The same decay constant governs both accumulation toward steady state and elimination after discontinuation — the curve is symmetric.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "ss", label: "input rate sets plateau" },
          { from: "ss", to: "rule", label: "plateau time = 4-5 × t1/2" },
          { from: "rule", to: "decay", label: "same half-life governs decay" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "pharmacokinetics-map",
      title: "The pharmacokinetics map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source page (book 229): the AUC plot (plasma concentration vs time, with the IV curve peaking immediately and the oral curve peaking later, the AUCIV and AUCOral labels, and the bioavailability formula F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100); the Vd compartment / drug-types table (Low → Intravascular → Large/charged molecules; plasma protein bound; Medium → ECF → Small hydrophilic molecules; High → All tissues including fat → Small lipophilic molecules, especially if bound to tissue protein); the clearance equation CL = Vd × Ke; the half-life equation t1/2 = 0.7 × Vd / CL with the steady-state rules (4-5 half-lives to steady state; 3.3 half-lives to 90%); the % remaining strip (1 → 50%, 2 → 25%, 3 → 12.5%, 4 → 6.25%); and the age-related PK changes strip (Absorption / Distribution / Metabolism / Excretion). The 'FOUR TO FIVE HALF-LIVES TO STEADY STATE' mnemonic callout sits at the bottom.",
      notice:
        "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 251). The page has ONE vector figure (the AUC plot) — redrawn as an ORIGINAL_KYP_REDRAW vector graphic in the registry visual (no photographs, no copyrighted artwork reproduced). The Vd compartment table and the half-life remaining table are pure text and are carried verbatim in this note's table blocks. No copyrighted photographs exist on the page; nothing reproduced. No mnemonic prints on book 229; the four KYP mnemonics are original designs.",
    },
    {
      kind: "table",
      title: "Book 229 — the Vd compartment / drug-types table (carried verbatim)",
      intro:
        "The three Vd bands against their compartment and characteristic drug types, as printed.",
      columns: ["Vd", "Compartment", "Drug types"],
      rows: [
        ["Low", "Intravascular", "Large/charged molecules; plasma protein bound"],
        ["Medium", "ECF", "Small hydrophilic molecules"],
        ["High", "All tissues including fat", "Small lipophilic molecules, especially if bound to tissue protein"],
      ],
      caption:
        "Three compartments, three drug chemistries. Large/charged molecules stay in the plasma (low Vd, dialyzable). Small hydrophilic molecules leak into the extracellular fluid (medium Vd). Small lipophilic molecules cross every membrane and accumulate in fat (high Vd, long t1/2, NOT dialyzable). 'Low Vd = dialyzable; high Vd = not.'",
    },
    {
      kind: "table",
      title: "Book 229 — the half-life remaining table (carried verbatim)",
      intro:
        "The fraction of drug remaining after each half-life of first-order elimination, as printed.",
      columns: ["# of half-lives", "1", "2", "3", "4"],
      rows: [
        ["% remaining", "50%", "25%", "12.5%", "6.25%"],
      ],
      caption:
        "Each half-life halves the remaining drug. The same decay constant governs accumulation toward steady state — 1 half-life = 50% of plateau, 2 = 75%, 3 = 87.5%, 4 = 93.75%, 5 = ~97% — which is why 4-5 half-lives is the steady-state rule and 3.3 half-lives is the 90% rule (1 − (1/2)^3.3 ≈ 0.90).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A patient is started on a continuous IV infusion of a drug with a half-life of 8 hours. The team asks when the plasma concentration will reach steady state and when it will reach 90% of that steady-state level.",
        discriminator:
          "First-order constant-rate infusion + t1/2 known → steady state in 4-5 half-lives; 90% in 3.3 half-lives",
        concept: "The steady-state timing axis",
        answer:
          "Steady state is reached in 4-5 half-lives — here, 4 × 8 = 32 h to 5 × 8 = 40 h. The 90% level is reached in 3.3 half-lives — here, 3.3 × 8 = 26.4 h. The rule is independent of the dose or the infusion rate; it depends only on t1/2. After discontinuation, the same decay applies: 50% gone after 1 half-life (8 h), 75% after 2 (16 h), 87.5% after 3 (24 h), 93.75% after 4 (32 h). If the team needs steady-state levels sooner, give a loading dose — the loading dose fills the Vd to the target concentration immediately, and the maintenance infusion then sustains it (loading dose = Vd × target concentration; maintenance dose = CL × target concentration).",
      },
      {
        stem:
          "A drug overdose patient is brought to the ED. The drug is highly tissue-bound with a Vd of 7 L/kg. The team considers hemodialysis to remove the drug.",
        discriminator:
          "High Vd (tissue-bound, not plasma-bound) → hemodialysis ineffective; hemodialysis is most effective for drugs with a LOW Vd",
        concept: "The Vd compartment / dialyzability axis",
        answer:
          "Hemodialysis will be ineffective. The page states explicitly that hemodialysis is most effective for drugs with a LOW Vd — those that live in the plasma compartment (Intravascular; large/charged; plasma protein bound), which is the compartment dialysis can reach. A drug with a Vd of 7 L/kg has distributed throughout all tissues including fat (the High-Vd compartment; small lipophilic molecules, especially if bound to tissue protein), so only a tiny fraction remains in plasma and dialysis cannot retrieve the rest. Examples: lithium (Vd ~0.8 L/kg, low-Vd, dialyzable) vs digoxin (Vd ~7 L/kg, high-Vd, NOT dialyzable) — digoxin overdose is treated with Fab fragments, not dialysis. The page's rule: Low Vd = dialyzable; High Vd = not dialyzable.",
      },
      {
        stem:
          "An 80-year-old patient is prescribed diazepam for anxiety. After several days of therapy, the patient is somnolent. The team reviews the pharmacokinetics of aging.",
        discriminator:
          "Elderly + ↓ first-pass metabolism (oral F effectively ↑) + ↓ Phase I (diazepam is oxidized) + ↑ total body fat (↑ Vd of lipophilic drugs → ↑ t1/2) → toxicity at standard doses",
        concept: "The age-related PK changes axis",
        answer:
          "Multiple PK changes converge to raise plasma diazepam in the elderly. (1) Absorption is mostly unaffected, so the input is normal. (2) Distribution: ↓ total body water → ↓ Vd of hydrophilic drugs (↑ concentration), and ↑ total body fat → ↑ Vd of lipophilic drugs like diazepam (↑ t1/2 — diazepam's half-life rises from ~24 h in young adults to ~48-100 h in the elderly). (3) Metabolism: ↓ hepatic mass and blood flow → ↓ first-pass metabolism (so oral F effectively rises — more drug reaches systemic circulation) and ↓ hepatic clearance; Phase I (cytochrome P450 oxidation, reduction, hydrolysis) is decreased, whereas Phase II (conjugation — glucuronidation, sulfation, acetylation) is relatively preserved. Diazepam is a Phase I-oxidized benzodiazepine, so its clearance falls with age; lorazepam (Phase II glucuronidation) is the preferred benzodiazepine in the elderly. (4) Excretion: ↓ renal mass and blood flow (↓ GFR) → ↓ renal clearance (relevant for renally-cleared drugs). The page's rule: 'Older patients often require reduced doses to prevent toxicity.'",
      },
    ],
    traps: [
      {
        a: "Steady state at 4-5 half-lives",
        b: "Steady state at 90% level (3.3 half-lives)",
        whyConfused: "Both rules involve 'half-lives to reach a target'; students blur the two",
        keyDifference:
          "4-5 half-lives reaches STEADY STATE (the plateau — 94-97% of the asymptotic concentration). 3.3 half-lives reaches 90% of the steady-state level — a milestone on the way up, not the plateau. The two numbers describe different points on the same accumulation curve: (1 − (1/2)^n) — at n = 3.3, the level is ~90% of plateau; at n = 4, it is ~94%; at n = 5, it is ~97%.",
        clue:
          "If the question asks for 'steady state' → 4-5 half-lives. If it asks for '90% of steady state' → 3.3 half-lives.",
      },
      {
        a: "Vd of hydrophilic drugs in the elderly",
        b: "Vd of lipophilic drugs in the elderly",
        whyConfused: "Both shift with aging; the directions are opposite",
        keyDifference:
          "Hydrophilic drugs live in total body water, which DECREASES with age → ↓ Vd → ↑ plasma concentration for the same dose (smaller compartment, same amount of drug). Lipophilic drugs live in total body fat, which INCREASES with age → ↑ Vd → ↑ half-life (drug hides in fat, clearance cannot find it). The two directions are opposite: water-drugs concentrate, fat-drugs linger. Both lead to toxicity in the elderly but by different mechanisms — concentration ↑ for hydrophilic, t1/2 ↑ for lipophilic.",
        clue:
          "Hydrophilic + elderly → ↓ Vd → ↑ concentration. Lipophilic + elderly → ↑ Vd → ↑ t1/2. Match the chemistry to the compartment.",
      },
      {
        a: "Phase I metabolism in the elderly",
        b: "Phase II metabolism in the elderly",
        whyConfused: "Both happen in the liver; both are 'drug metabolism'",
        keyDifference:
          "PHASE I (cytochrome P450 oxidation, reduction, hydrolysis) is DECREASED in the elderly — hepatic mass and blood flow fall, so CYP-mediated metabolism slows; diazepam (oxidized) and many psychotropics have longer half-lives. PHASE II (conjugation — glucuronidation, sulfation, acetylation) is RELATIVELY PRESERVED — the conjugation enzymes are less affected by aging; lorazepam (glucuronidated) and oxazepam (glucuronidated) are the preferred benzodiazepines in the elderly. The mnemonic: 'Phase I falls, Phase II preserved in the elderly.'",
        clue:
          "If the drug is CYP-metabolized (Phase I) → expect longer t1/2 in the elderly. If the drug is glucuronidated (Phase II) → t1/2 largely unchanged.",
      },
      {
        a: "Low Vd (dialyzable)",
        b: "High Vd (not dialyzable)",
        whyConfused: "Both describe drug distribution; students forget which is dialyzable",
        keyDifference:
          "LOW Vd = Intravascular compartment = large/charged molecules and plasma-protein-bound drugs — the drug stays in plasma, which dialysis can reach, so dialysis is EFFECTIVE (eg, lithium, methanol, salicylates). HIGH Vd = All tissues including fat = small lipophilic molecules especially if tissue-protein-bound — the drug has distributed out of plasma, so dialysis cannot retrieve it, and the drug is NOT dialyzable (eg, digoxin, tricyclic antidepressants, phenothiazines). The page's rule is explicit: hemodialysis is most effective for drugs with a LOW Vd.",
        clue:
          "Low Vd (plasma-bound) → dialyzable. High Vd (tissue/fat-bound) → NOT dialyzable — use antidotes (eg, digoxin Fab) instead.",
      },
    ],
    pivots: [
      {
        lookAlike: "An elderly patient on a standard dose develops toxicity — which PK change is responsible?",
        differentiator:
          "Four PK axes shift with aging, and each produces toxicity by a different mechanism. (1) ↓ Total body water → ↓ Vd of hydrophilic drugs → ↑ plasma concentration (the same mg/kg dose sits in a smaller compartment). (2) ↑ Total body fat → ↑ Vd of lipophilic drugs → ↑ t1/2 (the drug hides in fat and accumulates with repeated dosing). (3) ↓ Hepatic mass and blood flow → ↓ first-pass metabolism (oral F effectively rises) + ↓ Phase I clearance (CYP-metabolized drugs linger; Phase II preserved). (4) ↓ GFR → ↓ renal clearance (renally-cleared drugs like digoxin, lithium, aminoglycosides accumulate). Identify the drug's chemistry and clearance route, then map to the affected axis.",
        correctPath:
          "Read the drug label in this order: (1) hydrophilic or lipophilic? (hydrophilic → axis 1; lipophilic → axis 2). (2) Phase I or Phase II metabolized? (Phase I → axis 3; Phase II preserved). (3) Renally cleared? (yes → axis 4). The first 'yes' names the responsible axis.",
      },
      {
        lookAlike: "A drug's t1/2 doubles after the patient develops cirrhosis — which equation predicts this?",
        differentiator:
          "t1/2 = 0.7 × Vd / CL. Two paths can double t1/2: Vd doubles (the drug distributes more widely — typically because plasma protein binding falls and the drug escapes into tissue — which is exactly what the page means by 'liver and kidney disease increase Vd (↓ protein binding, ↑ Vd)') or CL halves (the liver or kidney clears half as much plasma per unit time). Cirrhosis does BOTH: hypoalbuminemia lowers protein binding (↑ Vd) and hepatic dysfunction lowers CL — so t1/2 rises faster than either change alone. The 0.7 × Vd / CL formula is the bridge — any change in Vd or CL propagates linearly to t1/2.",
        correctPath:
          "Identify whether Vd or CL is the moving piece (or both). Vd rises with ↓ protein binding (liver/kidney disease) or ↑ body fat (elderly). CL falls with cardiac, hepatic, or renal dysfunction. t1/2 = 0.7 × Vd / CL — read the equation in both directions.",
      },
    ],
    miniCase: {
      vignette:
        "A 78-year-old woman with chronic kidney disease (eGFR 28 mL/min) and mild hepatic cirrhosis (albumin 2.8 g/dL) is started on oral digoxin 0.25 mg daily for atrial fibrillation. Digoxin is a small lipophilic cardiac glycoside, ~25% plasma-protein bound, with a Vd of ~7 L/kg, metabolized primarily by hepatic Phase I (CYP3A) and excreted renally. After 10 days she develops nausea, vomiting, and visual disturbances (yellow-green halos); serum digoxin is 3.2 ng/mL (therapeutic 0.5-0.9). The team considers hemodialysis. Separately, a 25-year-old with no comorbidities is started on the same dose for the same indication and tolerates it well.",
      question:
        "Explain why this patient developed digoxin toxicity at a dose that is well-tolerated in a young healthy patient. Predict whether hemodialysis will be effective. Identify which age-related and disease-related PK changes each contributed.",
      options: [
        {
          label:
            "Toxicity from the convergence of FOUR PK changes: (1) ↑ total body fat in the elderly → ↑ Vd of lipophilic digoxin → ↑ t1/2; (2) cirrhosis with ↓ albumin → ↓ protein binding → ↑ Vd (free fraction rises, more tissue distribution) → ↑ t1/2; (3) ↓ GFR (28 mL/min) → ↓ renal clearance → ↑ t1/2; (4) cirrhosis → ↓ first-pass metabolism → oral F effectively ↑ → more digoxin reaches systemic circulation. Hemodialysis will be INEFFECTIVE because digoxin has a HIGH Vd (7 L/kg) — distributed throughout all tissues including fat, so only a small fraction is in plasma and dialysis cannot retrieve the rest. Treatment: digoxin-specific Fab fragments, not dialysis.",
          text:
            "Toxicity from four convergent PK changes (↑ Vd from aging fat and ↓ albumin, ↓ renal CL, ↓ first-pass metabolism); hemodialysis ineffective due to high Vd; treat with Fab fragments.",
          correct: true,
          why:
            "Correct on all four PK axes, the dialysis prediction, and the treatment. The page's framework is fully invoked: (1) Distribution — elderly patients have ↑ total body fat, which raises Vd of lipophilic drugs (digoxin is small lipophilic) → ↑ t1/2 (longer accumulation with daily dosing). (2) Distribution + cirrhosis — the page states 'liver and kidney disease increase Vd (↓ protein binding, ↑ Vd)'; cirrhosis causes hypoalbuminemia → ↓ protein binding → ↑ free fraction → ↑ Vd (more drug distributes to tissue) → ↑ t1/2. (3) Excretion — ↓ GFR (28 mL/min) → ↓ renal clearance (digoxin is renally cleared) → ↑ t1/2. (4) Metabolism — cirrhosis → ↓ hepatic mass and blood flow → ↓ first-pass metabolism → oral F effectively rises (more drug reaches systemic circulation per dose). All four raise the steady-state plasma concentration, so the standard dose produces toxicity. The page's rule 'Hemodialysis is most effective for drugs with a low Vd' predicts the dialysis failure — digoxin's Vd of 7 L/kg is the textbook high-Vd, tissue-bound drug; dialysis can reach only plasma, and only ~1/35th of the body burden is in plasma at any time. Digoxin-specific Fab fragments are the antidote because they bind digoxin in the plasma and pull it out of tissue by mass action.",
        },
        {
          label:
            "Toxicity from decreased absorption only (the elderly have decreased gut motility, so digoxin absorption is slower and the peak concentration is higher); hemodialysis WILL be effective because digoxin is a small molecule.",
          text:
            "Toxicity from decreased absorption; hemodialysis effective because digoxin is small.",
          why:
            "Wrong on both counts. The page states explicitly that absorption is 'mostly unaffected' in the elderly — gut motility changes do not significantly alter drug absorption, and slower absorption would LOWER peak concentration (not raise it), not cause toxicity at day 10 (a steady-state, not a peak, phenomenon). The toxicity is a steady-state accumulation problem, not an absorption problem. The dialysis prediction is wrong: the page's dialyzability rule depends on Vd (low = dialyzable; high = not), not on molecular size — digoxin's HIGH Vd (7 L/kg) makes it non-dialyzable regardless of its molecular weight. Small size does not override a high Vd.",
        },
        {
          label:
            "Toxicity solely from decreased renal clearance (eGFR 28 mL/min), with no contribution from aging or cirrhosis; hemodialysis would be effective if started early enough because the drug is in the plasma.",
          text:
            "Toxicity solely from renal failure; hemodialysis effective if early.",
          why:
            "Partially correct on the renal contribution but wrong on the dismissal of aging and cirrhosis, and wrong on the dialysis prediction. Renal failure is the largest single contributor (digoxin is renally cleared), but the page explicitly identifies FOUR age-related changes (each independently raises plasma concentration), and cirrhosis adds two more (↓ protein binding → ↑ Vd; ↓ first-pass metabolism → ↑ oral F). The toxicity is the SUM of all four PK axes, not solely renal. The dialysis prediction again fails on Vd: digoxin has a HIGH Vd (7 L/kg), so most of the drug is in tissue, not plasma — 'starting early' does not change the compartment distribution. Dialysis is ineffective for high-Vd drugs regardless of timing; Fab fragments are the answer.",
        },
        {
          label:
            "Toxicity because Phase II conjugation is decreased in the elderly (the page says phase II declines); hemodialysis will be effective because digoxin is small and water-soluble.",
          text:
            "Toxicity from decreased Phase II; hemodialysis effective because digoxin is water-soluble.",
          why:
            "Wrong on both the metabolism direction and the dialysis prediction. The page states the OPPOSITE — Phase II is RELATIVELY PRESERVED in the elderly; it is Phase I (cytochrome P450 oxidation/reduction/hydrolysis) that is decreased. Digoxin is CYP3A-metabolized (Phase I), so the relevant aging change is Phase I decline, not Phase II. Furthermore, the toxicity in this case is dominated by distribution (high Vd from aging fat + ↓ albumin) and excretion (↓ GFR), not metabolism. The dialysis prediction is wrong: digoxin is small and LIPOPHILIC (not water-soluble) — that is exactly why its Vd is 7 L/kg (it distributes throughout all tissues including fat). Water-soluble small molecules have a medium Vd (ECF compartment); lipophilic small molecules have a high Vd (all tissues including fat). The drug's chemistry predicts the compartment, and the compartment predicts dialyzability.",
        },
        {
          label:
            "Toxicity from increased first-pass metabolism in the elderly (the liver upregulates CYP enzymes with age), leading to toxic metabolites; hemodialysis will be effective because the metabolites are water-soluble.",
          text:
            "Toxicity from increased first-pass metabolism producing toxic metabolites; dialysis effective for water-soluble metabolites.",
          why:
            "Wrong direction on first-pass metabolism and wrong on the dialysis mechanism. The page states that aging causes ↓ first-pass metabolism (because of ↓ hepatic mass and blood flow), not ↑ — the liver does not upregulate CYP with age; it loses capacity. Decreased first-pass metabolism means MORE oral drug reaches systemic circulation (oral F effectively rises), which is one of the four convergent PK changes — but the mechanism is reduced hepatic extraction, not increased metabolism or toxic metabolites. Digoxin is not significantly metabolized to toxic intermediates; the toxicity is from the parent drug accumulating. The dialysis answer is again wrong on the Vd axis: dialyzability is determined by the Vd of the molecule being removed (parent digoxin, Vd 7 L/kg, NOT dialyzable), not by the water-solubility of hypothetical metabolites.",
        },
      ],
      reasoning:
        "The stem walks a single drug (digoxin) through a patient with FOUR convergent PK insults: elderly (aging), cirrhosis (liver disease), CKD (renal disease), and oral route (first-pass). The page's framework predicts each contribution: (1) ELDERLY — ↑ total body fat raises Vd of lipophilic digoxin → ↑ t1/2; (2) CIRRHOSIS — ↓ albumin lowers protein binding → ↑ Vd (the page's 'liver and kidney disease increase Vd (↓ protein binding, ↑ Vd)'); (3) CKD — ↓ GFR lowers renal clearance → ↑ t1/2 (digoxin is renally cleared); (4) CIRRHOSIS — ↓ first-pass metabolism raises oral F → more drug reaches systemic circulation per dose. The four together raise the steady-state plasma concentration above the therapeutic window. The page's dialyzability rule — 'hemodialysis is most effective for drugs with a low Vd' — predicts dialysis failure: digoxin's Vd of 7 L/kg is the textbook high-Vd, tissue-bound drug. The correct treatment is digoxin-specific Fab fragments (bind digoxin in plasma, pull it out of tissue by mass action). The distractors fail at: absorption (mostly unaffected in the elderly); 'small molecule = dialyzable' (Vd, not size, determines dialyzability); 'Phase II declines' (Phase II is preserved; Phase I declines); 'first-pass upregulated' (first-pass declines with age). The young patient tolerates the same dose because none of the four insults is present: normal total body fat (no ↑ Vd from aging), normal albumin (no ↑ Vd from cirrhosis), normal GFR (no ↓ CL), normal hepatic function (no ↓ first-pass) — so steady-state concentration stays in the therapeutic window.",
    },
  },
  mnemonics: [
    {
      code: "FOUR TO FIVE HALF-LIVES TO STEADY STATE",
      meaning:
        "In first-order kinetics, a drug infused at a constant rate takes 4-5 half-lives to reach steady state. The companion rule: 3.3 half-lives to reach 90% of the steady-state level. The same half-life governs accumulation toward steady state and elimination after discontinuation — 1 half-life = 50% of plateau (or 50% eliminated), 2 = 75% (or 25% remaining), 3 = 87.5% (or 12.5% remaining), 4 = 93.75% (or 6.25% remaining). The number of half-lives is the only variable that determines time-to-steady-state — neither dose nor infusion rate changes the timing (they change only the plateau level).",
      memorizes: "The steady-state timing rule (4-5 half-lives to plateau; 3.3 to 90%)",
      whenToUse: "Any question about loading doses, time to steady state, or time to wash out",
      clinical:
        "If a drug has a long t1/2 (eg, amiodarone ~50 days, diazepam ~30 h) and you need a therapeutic level fast, give a loading dose — otherwise the patient waits 4-5 half-lives (weeks for amiodarone). After discontinuation, the same 4-5 half-lives apply to washout.",
    },
    {
      code: "0.7 × Vd / CL = t1/2",
      meaning:
        "The half-life is the ratio of distribution to clearance, scaled by 0.7 (≈ ln 2). High Vd → long t1/2 (the drug hides in tissue, clearance cannot find it). Low CL → long t1/2 (the body clears slowly). Both move t1/2 in the same direction: liver or kidney disease raises Vd (↓ protein binding) AND lowers CL — so t1/2 rises faster than either change alone. The equation is the bridge between the distribution axis and the clearance axis.",
      memorizes: "The t1/2 = 0.7 × Vd / CL equation and its directional consequences",
      whenToUse: "Any question asking how Vd or CL changes affect half-life",
      clinical:
        "Cirrhosis raises digoxin's t1/2 from ~36 h to ~4-5 days (Vd ↑ from ↓ albumin, CL ↓ from hepatic dysfunction). Renal failure raises digoxin's t1/2 to ~5-7 days (CL ↓ from ↓ GFR; Vd unchanged).",
    },
    {
      code: "LOW Vd = DIALYZABLE, HIGH Vd = NOT",
      meaning:
        "Hemodialysis is most effective for drugs with a LOW Vd — those that live in the plasma compartment (Intravascular; large/charged; plasma protein bound), which is the compartment dialysis can reach. HIGH-Vd drugs (small lipophilic molecules distributed throughout all tissues including fat) cannot be retrieved by dialysis — most of the body burden is outside the plasma compartment. The page's rule, verbatim: 'Hemodialysis is most effective for drugs with a low Vd.'",
      memorizes: "The dialyzability rule based on Vd compartment",
      whenToUse: "Any overdose question asking whether hemodialysis will be effective",
      clinical:
        "Dialyzable (low Vd): lithium (Vd 0.8 L/kg), methanol, ethylene glycol, salicylates, metformin. NOT dialyzable (high Vd): digoxin (Vd 7 L/kg, treat with Fab), tricyclic antidepressants (Vd 10-20 L/kg, treat with bicarbonate), phenothiazines, benzodiazepines (mostly).",
    },
    {
      code: "PHASE I FALLS, PHASE II PRESERVED IN THE ELDERLY",
      meaning:
        "Aging decreases Phase I drug metabolism (cytochrome P450 oxidation, reduction, hydrolysis — ↓ hepatic mass and blood flow), but Phase II metabolism (conjugation — glucuronidation, sulfation, acetylation) is relatively preserved. The clinical consequence: Phase-I-metabolized drugs (diazepam — oxidized; many psychotropics) have longer t1/2 in the elderly and require dose reduction; Phase-II-metabolized drugs (lorazepam, oxazepam, temazepam — glucuronidated; the 'LOT' benzodiazepines) have unchanged t1/2 and are preferred in the elderly and in hepatic dysfunction.",
      memorizes: "The Phase I vs Phase II aging pattern",
      whenToUse: "Any elderly prescribing question or any 'which benzodiazepine is preferred in hepatic dysfunction?' question",
      clinical:
        "Lorazepam, oxazepam, temazepam (LOT) are glucuronidated (Phase II) — preferred in the elderly and in liver disease. Diazepam, chlordiazepoxide, midazolam are CYP-oxidized (Phase I) — longer t1/2 in the elderly; avoid.",
    },
  ],
  rapidReview: {
    s30: [
      "Bioavailability (F) = fraction of administered drug reaching systemic circulation; for an IV dose, F = 100%; orally, F is typically <100% due to incomplete absorption and first-pass metabolism; F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100",
      "Volume of distribution (Vd) = amount of drug in the body / plasma drug concentration; liver and kidney disease increase Vd (↓ protein binding → ↑ Vd); drugs may distribute in more than one compartment; hemodialysis is most effective for drugs with a LOW Vd",
      "Vd compartments: Low = Intravascular (large/charged molecules; plasma protein bound); Medium = ECF (small hydrophilic molecules); High = All tissues including fat (small lipophilic molecules, especially if bound to tissue protein)",
      "Clearance (CL) = the volume of plasma cleared of drug per unit time = rate of elimination / plasma drug concentration = Vd × Ke (elimination constant); impaired by cardiac, hepatic, or renal dysfunction",
      "Half-life (t1/2) = the time required to eliminate 1/2 of the drug; t1/2 = 0.7 × Vd / CL in first-order elimination",
      "Steady state is a dynamic equilibrium in which drug concentration stays constant (rate of drug elimination = rate of drug administration)",
      "In first-order kinetics, a drug infused at a constant rate takes 4-5 half-lives to reach steady state; it takes 3.3 half-lives to reach 90% of the steady-state level",
      "% remaining after n half-lives: 1 → 50%, 2 → 25%, 3 → 12.5%, 4 → 6.25%",
      "Aging PK: absorption mostly unaffected; ↓ total body water (↓ Vd of hydrophilic drugs → ↑ concentration); ↑ total body fat (↑ Vd of lipophilic drugs → ↑ half-life)",
      "Aging metabolism: ↓ hepatic mass and blood flow → ↓ first-pass metabolism, ↓ hepatic clearance; Phase I decreased, Phase II relatively preserved. Aging excretion: ↓ renal mass and blood flow (↓ GFR) → ↓ renal clearance. Older patients often require reduced doses to prevent toxicity.",
    ],
    m3: [
      "FOUR TO FIVE HALF-LIVES TO STEADY STATE — 3.3 to 90%; the half-life is the only timing variable",
      "0.7 × Vd / CL = t1/2 — high Vd or low CL both lengthen t1/2",
      "LOW Vd = DIALYZABLE, HIGH Vd = NOT — dialysis reaches only plasma; high-Vd drugs are in tissue",
      "PHASE I FALLS, PHASE II PRESERVED IN THE ELDERLY — use LOT (lorazepam, oxazepam, temazepam) over diazepam",
      "Liver/kidney disease ↑ Vd (↓ protein binding); aging shifts every PK constant — older patients need lower doses",
    ],
    m10: [
      "F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100; IV = 100%, oral <100% (incomplete absorption + first-pass)",
      "Vd = amount / plasma concentration; Low = Intravascular/Large-charged; Medium = ECF/Small-hydrophilic; High = All-tissues-including-fat/Small-lipophilic",
      "CL = Vd × Ke; impaired by cardiac, hepatic, or renal failure",
      "t1/2 = 0.7 × Vd / CL; 4-5 half-lives to steady state; 3.3 to 90%; decay 50/25/12.5/6.25%",
      "Aging: hydrophilic Vd ↓ (concentration ↑); lipophilic Vd ↑ (t1/2 ↑); first-pass ↓ (oral F ↑); Phase I ↓, Phase II preserved; GFR ↓ (renal CL ↓)",
    ],
  },
  recall: [
    {
      q: "The Bioavailability (F) definition verbatim (including the IV rule, the oral rule, and the AUC formula).",
      a: "Bioavailability (F) is the fraction of administered drug reaching systemic circulation. For an IV dose, F = 100%. Orally, F is typically <100% due to incomplete absorption and first-pass metabolism. F can be calculated from the area under the curve in a plot of plasma concentration over time: F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100.",
    },
    {
      q: "The Volume of distribution (Vd) definition verbatim (including the equation, the liver/kidney disease rule, and the hemodialysis rule).",
      a: "Volume of distribution (Vd) is a theoretical value that relates drug amount to plasma concentration. Vd = amount of drug in the body / plasma drug concentration. Liver and kidney disease increase Vd (↓ protein binding, ↑ Vd). Drugs may be distributed in more than one compartment. Hemodialysis is most effective for drugs with a low Vd.",
    },
    {
      q: "The Vd compartment / drug-types table verbatim (Low / Medium / High against compartment and drug types).",
      a: "Low Vd → Intravascular compartment → Large/charged molecules; plasma protein bound. Medium Vd → ECF compartment → Small hydrophilic molecules. High Vd → All tissues including fat → Small lipophilic molecules, especially if bound to tissue protein.",
    },
    {
      q: "The Clearance (CL) and Half-life (t1/2) definitions verbatim (including both equations and the steady-state rules).",
      a: "Clearance (CL) is the volume of plasma cleared of drug per unit time. CL = rate of elimination of drug / plasma drug concentration = Vd × Ke (elimination constant). Clearance may be impaired with defects in cardiac, hepatic, or renal function. Half-life (t1/2) is the time required to eliminate 1/2 of the drug from the body. Steady state is a dynamic equilibrium in which drug concentration stays constant (ie, rate of drug elimination = rate of drug administration). In first-order kinetics, a drug infused at a constant rate takes 4-5 half-lives to reach steady state. It takes 3.3 half-lives to reach 90% of the steady-state level. t1/2 = 0.7 × Vd / CL in first-order elimination. After 1, 2, 3, 4 half-lives, the % remaining is 50%, 25%, 12.5%, 6.25%.",
    },
    {
      q: "The age-related changes in pharmacokinetics verbatim (Absorption, Distribution, Metabolism, Excretion).",
      a: "Aging alters the passage of drugs through the body and standard doses can result in ↑ plasma concentrations. Older patients often require reduced doses to prevent toxicity. Absorption — mostly unaffected. Distribution — ↓ total body water (↓ Vd of hydrophilic drugs → ↑ concentration), ↑ total body fat (↑ Vd of lipophilic drugs → ↑ half-life). Metabolism — ↓ hepatic mass and blood flow → ↓ first-pass metabolism, ↓ hepatic clearance. Phase I of drug metabolism is decreased; phase II is relatively preserved. Excretion — ↓ renal mass and blood flow (↓ GFR) → ↓ renal clearance.",
    },
  ],
  related: [
    {
      title: "Enzyme Kinetics — Michaelis-Menten and Inhibition",
      topicId: "enzyme-kinetics",
      note:
        "The preceding page (PH1) is the kinetic foundation for this page: the Michaelis-Menten V-vs-[S] curve and the Km/Vmax definitions describe how enzymes saturate, and the inhibition comparison table describes how inhibitors change Km and Vmax. Pharmacokinetics imports that machinery for the special case where the 'enzyme' is the body's elimination apparatus — first-order kinetics is the low-[S] regime of Michaelis-Menten (rate ∝ concentration, t1/2 constant), and saturation (zero-order kinetics, eg, phenytoin, ethanol) is the high-[S] regime where the elimination enzymes saturate and t1/2 becomes dose-dependent. The PH2 page's first-order formulas (t1/2 = 0.7 × Vd / CL, 4-5 half-lives to steady state) hold only in the first-order regime.",
    },
    {
      title: "Glycolysis Regulation — Hexokinase vs Glucokinase",
      topicId: "glycolysis-regulation",
      note:
        "The Km-vs-affinity rule from PH1 (and the hexokinase/glucokinase Km pair from this page) sets up the underlying enzyme physiology that pharmacokinetics builds on: hexokinase (low Km, high affinity — saturates at low glucose, works in all tissues) vs glucokinase (high Km, low affinity — only fires when glucose is high, the liver's glucose sensor). The same low-Km = high-affinity logic explains why CYP enzymes (Phase I) handle most xenobiotic metabolism while high-Km enzymes handle low concentrations — and why Phase I declines with age (less hepatic CYP capacity) while Phase II is preserved.",
    },
    {
      title: "Antimicrobial Overview — Target Classes",
      topicId: "antimicrobial-overview",
      note:
        "Antimicrobial dosing depends directly on this page's PK framework: aminoglycosides are renally cleared (CL ↓ in renal failure — must reduce dose and monitor levels), vancomycin has a long t1/2 and is dosed by trough level (4-5 half-lives to steady state, hence loading doses in serious infection), and β-lactams are time-dependent (the time above MIC matters, not the peak — so dosing frequency is set by t1/2). The age-related PK changes on this page explain why elderly patients on aminoglycosides develop nephrotoxicity and ototoxicity at standard doses (↓ GFR → ↓ CL → ↑ t1/2 → accumulation).",
    },
    {
      title: "Diabetes Mellitus — Drug Pharmacokinetics",
      topicId: "diabetes-mellitus",
      note:
        "Insulin pharmacokinetics is the textbook application of this page: rapid-acting (lispro, aspart — short t1/2, peak 1 h), short-acting (regular — peak 2 h), intermediate (NPH — peak 6-10 h), and long-acting (glargine, detemir — flat 24-h profile, no peak) insulins are classified by their t1/2 and peak timing. Metformin is renally cleared (contraindicated in CKD because ↓ GFR → ↓ CL → lactic acidosis risk). Sulfonylureas are hepatically metabolized (Phase I and II) — longer t1/2 in the elderly raises hypoglycemia risk. The PK constants on this page are the framework for every diabetes drug dosing decision.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (enzyme kinetics and Phase I/II metabolism)",
      connection:
        "The first-order kinetics regime on this page is the low-[S] limit of Michaelis-Menten enzyme kinetics (PH1): when the elimination enzymes (CYP450, glucuronosyltransferases, renal transporters) are well below saturation, the elimination rate is proportional to plasma concentration and t1/2 is constant — the formulas on this page (t1/2 = 0.7 × Vd / CL, 4-5 half-lives to steady state) hold. When the elimination enzymes saturate (high [S] — eg, phenytoin, ethanol, aspirin at toxic doses), the system switches to zero-order kinetics, t1/2 becomes dose-dependent, and the steady-state rules break down. Phase I (CYP450 — oxidation/reduction/hydrolysis) and Phase II (conjugation — glucuronidation, sulfation, acetylation) metabolism on this page are the biochemistry page's enzyme classes applied to xenobiotic clearance.",
    },
    {
      subject: "Pharmacology (drug metabolism and elimination)",
      connection:
        "This page is the entry point to the entire PK sequence in the Pharmacology chapter — drug metabolism (Phase I vs Phase II, CYP induction/inhibition), elimination routes (renal, hepatic, biliary), urine pH and ion trapping, dosage calculations (loading vs maintenance), efficacy vs potency (receptor pharmacology, the PH1 mirror), receptor binding (affinity, efficacy, spare receptors), therapeutic index (LD50/ED50, narrow-therapeutic-index drugs), and drug-effect modifications (tolerance, tachyphylaxis, placebo, interactions). Every subsequent Pharmacology page assumes the F, Vd, CL, t1/2 vocabulary defined here.",
    },
    {
      subject: "Nephrology (renal drug dosing and dialysis)",
      connection:
        "The page's dialyzability rule — 'hemodialysis is most effective for drugs with a low Vd' — is the clinical decision rule for every nephrology overdose question. Renal clearance (CLrenal) is one of the three CL components on this page; ↓ GFR (CKD, elderly) lowers CLrenal and raises t1/2 for every renally-cleared drug (digoxin, lithium, vancomycin, aminoglycosides, metformin). The nephrology page's dosing adjustments (CrCl-based dosing, dialysis supplementation of renally-cleared drugs) follow directly from this page's CL = Vd × Ke equation.",
    },
    {
      subject: "Geriatrics (elderly prescribing and polypharmacy)",
      connection:
        "The age-related PK changes on this page are the entire foundation of geriatric pharmacology: older patients require reduced doses to prevent toxicity because four PK constants shift (↓ total body water → ↑ hydrophilic concentration; ↑ total body fat → ↑ lipophilic t1/2; ↓ first-pass metabolism → ↑ oral F; ↓ GFR → ↓ renal CL). The Phase I vs Phase II distinction (Phase I falls, Phase II preserved) drives benzodiazepine selection (lorazepam/oxazepam/temazepam — the 'LOT' Phase-II drugs — preferred over diazepam). The Beers criteria for potentially inappropriate medications in the elderly are largely derived from this page's PK changes.",
    },
  ],
};
