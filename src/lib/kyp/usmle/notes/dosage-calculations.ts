import type { KypUsMLENote } from "../types";

// Pharmacology — PHARMACOKINETICS AND PHARMACODYNAMICS banner (PH6).
// Source: pdf 253 / book 231, bottom section — Dosage calculations (the
// same page's top section is Urine pH and drug elimination, the separate
// PH5 topic; NO Drug Metabolism (PH3) or Elimination kinetics (PH4)
// content lives on this page — those are pdf 252 / book 230). The section
// prints exactly two fraction formulas with a definition block and two
// margin rules: 'Loading dose =' with the numerator 'Cp × Vd' over the
// denominator 'F'; 'Maintenance dose =' with the numerator 'Cp × CL × τ'
// over the denominator 'F'; 'Cp = target plasma concentration'; 'τ =
// dosage interval (time between doses); does not apply for continuous
// infusions'; the margin note 'In renal or liver disease, maintenance
// dose ↓ and loading dose is usually unchanged.'; and the second margin
// rule 'Time to steady state depends primarily on t1/2 and is
// independent of dose and dosing frequency.'
// Census (pdfimages + VLM): NO raster images on the page (pdfimages
// -list returned zero rows). The two formulas are typeset text fractions
// and are carried verbatim (ORIGINAL_KYP_ADAPTATION) in the table blocks
// and re-typeset in the registry visual's formula panels. The
// steady-state accumulation curve in the visual (50/75/87.5/93.75/~97%
// at 1-5 half-lives) is an ORIGINAL_KYP_REDRAW of the standard
// first-order accumulation identity — no curve is printed on the source
// page. The page prints NO margin mnemonic for this section; the four
// mnemonic codes are KYP-original designs.

export const dosageCalculations: KypUsMLENote = {
  id: "dosage-calculations",
  title: "Dosage Calculations",
  subtitle:
    "The two equations that run every regimen (book 231). LOADING DOSE = Cp × Vd / F — fill the apparent volume to the target plasma concentration, corrected for bioavailability; it depends on Vd, not on clearance. MAINTENANCE DOSE = Cp × CL × τ / F — replace each dosage interval τ what clearance CL removes; it depends on CL and τ, not on Vd. Cp is the target plasma concentration; τ is the dosage interval (time between doses) and does not apply for continuous infusions. In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged. Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Pharmacokinetics and Pharmacodynamics",
  pilotCategory:
    "The dosage-calculations page's complete architecture — the two fraction formulas ('Loading dose =' with Cp × Vd over F; 'Maintenance dose =' with Cp × CL × τ over F); the definition block ('Cp = target plasma concentration'; 'τ = dosage interval (time between doses); does not apply for continuous infusions'); the organ-disease margin rule ('In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged.'); and the steady-state margin rule ('Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.').",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 231 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Dosage calculations — the two fraction formulas 'Loading dose = Cp × Vd / F' and 'Maintenance dose = Cp × CL × τ / F'; the definitions 'Cp = target plasma concentration' and 'τ = dosage interval (time between doses); does not apply for continuous infusions'; the margin rule 'In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged'; and the steady-state rule 'Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency')",
  tags: [
    "dosage calculations",
    "loading dose",
    "maintenance dose",
    "target plasma concentration",
    "Cp",
    "volume of distribution",
    "Vd",
    "clearance",
    "CL",
    "bioavailability",
    "F",
    "dosage interval",
    "tau",
    "continuous infusions",
    "steady state",
    "time to steady state",
    "half-life",
    "t1/2",
    "renal disease",
    "liver disease",
    "dose adjustment",
    "4-5 half-lives",
    "pharmacokinetics",
    "pharmacodynamics",
    "digoxin",
    "narrow therapeutic index",
  ],
  core: {
    what:
      "TWO EQUATIONS RUN EVERY REGIMEN. The first, verbatim: 'Loading dose =' Cp × Vd / F — the amount of drug needed to FILL the apparent volume of distribution (Vd) to the target plasma concentration (Cp) in one or few doses, divided by bioavailability (F) because only that fraction of an extravascular dose reaches the systemic circulation. The second, verbatim: 'Maintenance dose =' Cp × CL × τ / F — the amount needed per dosing interval (τ) to REPLACE what clearance (CL) removes over that interval, again divided by F. The two share Cp and F and differ in the middle: the loading dose carries Vd (a distribution variable — how big the tank is), the maintenance dose carries CL and τ (an elimination variable — how fast the tank drains, and how often you refill). The definitions, verbatim: 'Cp = target plasma concentration' and 'τ = dosage interval (time between doses); does not apply for continuous infusions.' And the two margin rules, verbatim: 'In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged.' — because renal or hepatic failure lowers CL while Vd is usually preserved — and 'Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.' — the approach to steady state takes roughly 4-5 half-lives (50% after one, 75% after two, ~94% after four, ~97% after five) no matter how large the dose or how frequent the schedule.",
    why:
      "Each formula is a mass balance. LOADING DOSE: the body behaves as an apparent volume Vd, so the total amount of drug in the body at concentration Cp is Cp × Vd — that is the target body burden, and delivering it (divided by F, since only the fraction F of an extravascular dose reaches plasma) achieves the target concentration immediately rather than waiting for accumulation. Clearance appears nowhere in the loading equation because filling the tank is a distribution problem, not an elimination problem — which is also why 'in renal or liver disease... loading dose is usually unchanged': renal or hepatic failure reduces CL (the drain), not Vd (the tank). MAINTENANCE DOSE: at steady state, rate in = rate out. The rate out of drug is CL × Cp (clearance is the volume of plasma cleared per unit time, so the elimination rate is the plasma concentration times that volume); the rate in per interval is the maintenance dose / F divided by τ. Setting them equal gives dose per interval = Cp × CL × τ / F — the per-dose amount that exactly replaces what is cleared between doses. This is why organ disease shrinks the maintenance dose: CL ↓ → the drain is slower → less drug needed per interval to hold the same Cp (give the usual dose and it accumulates toward toxicity — the classic narrow-therapeutic-index failure in renal failure: digoxin, lithium, aminoglycosides, warfarin). The steady-state clock follows from first-order kinetics: each half-life eliminates half of what remains ABOVE steady state, so the gap to steady state halves every half-life — 50% / 75% / 87.5% / 93.75% / ~97% after 1 / 2 / 3 / 4 / 5 half-lives — hence 'time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency' (a bigger dose lands on a HIGHER eventual plateau, not a faster one; a loading dose starts you AT the target, but the steady-state equilibrium itself still takes 4-5 half-lives to stabilize around it). The τ exclusion exists because the formula computes a PER-DOSE amount for intermittent dosing: 'τ = dosage interval (time between doses); does not apply for continuous infusions' — a continuous infusion has no interval; its equivalent is the infusion rate = Cp × CL (rate in = rate out directly, with F = 1 for IV).",
    keyIdea:
      "Read every dosing question through two questions. QUESTION 1 — WHICH JOB? Reaching the target QUICKLY (fill the tank) → LOADING dose = Cp × Vd / F: pick it from Vd and F; clearance is irrelevant. Holding the target OVER TIME (match the drain) → MAINTENANCE dose = Cp × CL × τ / F: pick it from CL, τ, and F; Vd is irrelevant. QUESTION 2 — WHICH VARIABLE MOVED? Organ failure (renal or liver disease) moves CL only → 'maintenance dose ↓ and loading dose is usually unchanged.' A formulation change moves F (IV F = 1 needs no correction; PO with F = 0.5 requires doubling the dose to deliver the same amount — DIVIDE BY F). A schedule change moves τ (the formula gives the PER-DOSE amount: q6h dosing needs one quarter the per-dose amount of q24h dosing at the same CL). And the clock is separate from both: 'time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency' — ~4-5 half-lives to steady state (or to washout), so the loading dose exists precisely to skip the wait, and 'τ... does not apply for continuous infusions' (rate = Cp × CL).",
  },
  mechanisms: [
    {
      id: "loading-dose-fills-the-volume",
      title: "The loading dose: fill the apparent volume to the target concentration (Cp × Vd / F)",
      context: "The loading-dose fraction and the organ-disease margin rule (book 231)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "Choose the target — Cp = target plasma concentration",
            sublabel:
              "Input — the prescriber picks the desired plasma concentration (the therapeutic window's sweet spot; for a narrow-therapeutic-index drug like digoxin this choice IS the clinical decision). 'Cp = target plasma concentration' — the shared first term of both dosage formulas.",
            variant: "input",
          },
          {
            id: "volume",
            label: "Scale to the body burden — Cp × Vd (the tank)",
            sublabel:
              "The apparent volume of distribution Vd converts concentration into total body burden: amount = Cp × Vd. A big Vd (lipophilic, tissue-bound drug) means more drug is needed to reach the same plasma concentration — the tank is bigger. This is the loading dose's numerator: it is a DISTRIBUTION quantity, and distribution is what a loading dose buys.",
            variant: "process",
          },
          {
            id: "bioavailability",
            label: "Correct for delivery — ÷ F (the fraction that reaches plasma)",
            sublabel:
              "Only the fraction F of an extravascular dose reaches the systemic circulation (first-pass metabolism, incomplete absorption). Dividing by F converts the TARGET amount into the DOSE to administer: IV (F = 1) → dose = Cp × Vd exactly; PO with F = 0.5 → the oral loading dose is doubled. Both dosage formulas share this denominator.",
            variant: "process",
          },
          {
            id: "output",
            label: "Target concentration reached NOW — and clearance is nowhere in the equation",
            sublabel:
              "Output — the loading dose achieves Cp quickly (one or few doses) instead of waiting 4-5 half-lives for accumulation. Because the equation is pure distribution (Vd, F), 'in renal or liver disease... loading dose is usually unchanged' — organ failure lowers CL, the drain, not Vd, the tank. (Caveat: the loading dose does not change the TIME to steady state — it changes the starting point.)",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "volume", label: "Cp chosen → body burden = Cp × Vd" },
          { from: "volume", to: "bioavailability", label: "target amount → administered dose = amount / F" },
          { from: "bioavailability", to: "output", label: "dose given → Cp reached immediately" },
          { from: "input", to: "output", label: "clearance CL: absent from the loading equation" },
        ],
      },
    },
    {
      id: "maintenance-dose-replaces-the-clearance",
      title: "The maintenance dose: replace what clearance removes each interval (Cp × CL × τ / F) — and the t1/2 clock",
      context: "The maintenance-dose fraction, the τ definition, and both margin rules (book 231)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "At steady state: rate in = rate out (Cp held constant)",
            sublabel:
              "Input — the goal of maintenance therapy: keep Cp constant by matching input to output. Rate out = CL × Cp (clearance is the volume of plasma cleared per unit time; elimination rate = that volume × the concentration). The maintenance formula is this balance solved for the per-dose amount.",
            variant: "input",
          },
          {
            id: "clearance",
            label: "Replace the drain — Cp × CL (what is removed per unit time)",
            sublabel:
              "Clearance CL sets how much drug must be replaced per unit time to hold Cp: replacement rate = Cp × CL. This is why organ disease hits the maintenance dose: 'In renal or liver disease, maintenance dose ↓' — renal failure (↓ GFR, ↓ renal clearance) or hepatic failure (↓ CYP450 Phase I / Phase II capacity, ↓ hepatic extraction) lowers CL, so the drain is slower and less drug per interval holds the same Cp. Give the usual maintenance dose to a failing organ and the drug accumulates — the narrow-therapeutic-index poisoning pattern (digoxin, lithium, aminoglycosides).",
            variant: "process",
          },
          {
            id: "interval",
            label: "Multiply by the interval — × τ (the per-dose amount); τ does not apply for continuous infusions",
            sublabel:
              "'τ = dosage interval (time between doses); does not apply for continuous infusions.' Multiplying the replacement rate by τ converts it to a PER-DOSE amount: q6h dosing (τ = 6h) needs one quarter the per-dose amount of q24h dosing at the same CL — the daily total is the same. For a continuous IV infusion there is no interval: the formula collapses to the rate itself, infusion rate = Cp × CL (with F = 1). Then divide by F for extravascular dosing, exactly as in the loading equation.",
            variant: "process",
          },
          {
            id: "output",
            label: "The steady-state clock — t1/2, independent of dose and dosing frequency",
            sublabel:
              "Output — the margin rule, verbatim: 'Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.' Each half-life halves the gap between the current level and the eventual steady state: 50% / 75% / 87.5% / 93.75% / ~97% of Css after 1 / 2 / 3 / 4 / 5 half-lives. Doubling the dose raises the plateau, not the speed; the loading dose starts AT the target while the steady-state equilibrium still takes 4-5 half-lives to stabilize. The same clock runs in reverse for washout (4-5 half-lives to eliminate).",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "clearance", label: "rate out = CL × Cp → replacement rate" },
          { from: "clearance", to: "interval", label: "× τ → per-dose amount (÷ F for extravascular)" },
          { from: "interval", to: "output", label: "repeated dosing → accumulation toward Css over 4-5 t1/2" },
          { from: "clearance", to: "output", label: "CL ↓ in renal/liver disease → maintenance dose ↓" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "dosage-calculations-map",
      title: "The dosage-calculations map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source page (book 231): the LOADING DOSE formula panel — Cp × Vd over F, the tank being filled, 'clearance nowhere in the equation'; the MAINTENANCE DOSE formula panel — Cp × CL × τ over F, the drain being matched each interval; the variable dictionary (Cp = target plasma concentration; Vd; CL; τ = dosage interval — does not apply for continuous infusions; F); the organ-disease rule callout — 'In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged.'; the steady-state clock — the accumulation curve through 50% / 75% / 87.5% / 93.75% / ~97% at 1-5 half-lives with 'time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency'; and the four-code mnemonic strip.",
      notice:
        "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 253). The two fraction formulas print in the text layer as typeset equations and are re-typeset verbatim in this visual's formula panels (ORIGINAL_KYP_ADAPTATION) — short attributed formula phrases, not artwork reproductions. The steady-state accumulation curve (50/75/87.5/93.75/~97% at 1-5 half-lives) is an ORIGINAL_KYP_REDRAW of the standard first-order accumulation identity — no curve is printed on the source page. The page prints NO margin mnemonic for this section; the four mnemonic codes are KYP-original designs.",
    },
    {
      kind: "table",
      title: "Book 231 — the two dosage formulas, their variables, and the two margin rules (carried verbatim)",
      intro:
        "Everything the section prints: the two fraction formulas, the definition block, and the two margin rules — as printed.",
      columns: ["Element", "As printed (book 231)"],
      rows: [
        ["The loading-dose formula", "Loading dose = Cp × Vd / F (printed as the fraction: Cp × Vd over F)"],
        ["The maintenance-dose formula", "Maintenance dose = Cp × CL × τ / F (printed as the fraction: Cp × CL × τ over F)"],
        ["The Cp definition", "Cp = target plasma concentration"],
        ["The τ definition", "τ = dosage interval (time between doses); does not apply for continuous infusions"],
        ["The organ-disease margin rule", "In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged."],
        ["The steady-state margin rule", "Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency."],
      ],
      caption:
        "Six printed lines carry the whole science. The two formulas share Cp (the target) and F (the delivery correction) and differ in exactly one term: the loading dose carries Vd — how big the tank is — while the maintenance dose carries CL and τ — how fast the tank drains and how often you refill it. That single-term difference generates both margin rules: renal or liver disease lowers CL (the drain) but usually spares Vd (the tank), so 'maintenance dose ↓ and loading dose is usually unchanged'; and the clock to steady state is set by t1/2 alone (4-5 half-lives: 50% / 75% / 87.5% / 93.75% / ~97%), so dose size and dosing frequency change the LEVEL, never the TIME. One exclusion completes the page: τ is the interval between doses and 'does not apply for continuous infusions' — an infusion's equivalent is the rate = Cp × CL.",
    },
    {
      kind: "table",
      title: "The two-formula decision table — which variable, which job, which direction (KYP synthesis)",
      intro:
        "The exam-facing distillation: given a variable that moved, which dose changes and which way.",
      columns: ["Variable", "Loading dose = Cp × Vd / F", "Maintenance dose = Cp × CL × τ / F"],
      rows: [
        ["↑ Vd (bigger tank — edema, obesity, tissue binding)", "↑ — more drug needed to fill the volume to Cp", "No direct effect (Vd is not in the maintenance formula)"],
        ["↓ CL (renal or liver disease)", "Usually UNCHANGED — 'loading dose is usually unchanged'", "↓ — 'maintenance dose ↓'; the usual dose accumulates toward toxicity"],
        ["↓ F (first-pass, incomplete absorption)", "↑ — ÷ F: PO with F = 0.5 doubles the dose", "↑ — ÷ F: the same delivery correction"],
        ["↑ τ (less frequent dosing — q6h → q24h)", "Not applicable (the load is not per-interval)", "↑ per dose (× τ): the q24h dose is 4× the q6h dose; the daily total is unchanged"],
        ["Continuous IV infusion (no intervals)", "F = 1; load = Cp × Vd if a load is wanted", "τ does not apply — infusion rate = Cp × CL"],
        ["Time to reach steady state", "Does not set it (the load changes the starting point, not the clock)", "Does not set it — 'depends primarily on t1/2 and is independent of dose and dosing frequency' (~4-5 half-lives)"],
      ],
      caption:
        "Read this table as the page's two margin rules expanded into a decision procedure. The clinical failure the table predicts: a patient with renal failure (CL ↓) loaded correctly but continued on the usual maintenance dose — the loading dose was right ('usually unchanged'), the maintenance dose was not ('maintenance dose ↓' was required), and the drug climbs to toxicity over the next 4-5 half-lives, which in renal failure are LONGER (t1/2 = 0.7 × Vd / CL rises as CL falls) — so the same clock rule explains both the slow climb and the late presentation. The classic carriers of this failure are the narrow-therapeutic-index, renally-cleared drugs: digoxin, lithium, aminoglycosides, vancomycin, warfarin (liver). See the pharmacokinetics page (PH2) for the Vd / CL / F / t1/2 definitions, the elimination-of-drugs page (PH4) for the first-order arithmetic behind the 4-5 half-life clock, and the drug-metabolism page (PH3) for why liver disease lowers CL (Phase I CYP450 + Phase II conjugation capacity).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A 68-year-old man with heart failure and atrial fibrillation is started on oral digoxin. The target plasma concentration is 1.5 ng/mL; digoxin's volume of distribution is approximately 420 L and its oral bioavailability is 0.7. The team wants the target concentration achieved today rather than after a week of accumulation.",
        discriminator:
          "Reach the target QUICKLY + given Vd and F (no clearance needed) → the loading-dose formula: Loading dose = Cp × Vd / F — a distribution problem, not an elimination problem",
        concept: "The loading-dose calculation axis",
        answer:
          "This is the loading-dose formula, verbatim from the page: 'Loading dose =' Cp × Vd / F. Body burden at target = Cp × Vd = 1.5 ng/mL × 420 L (≈ 1.5 μg/L × 420 L = 630 μg ≈ 0.63 mg); administered oral dose = 630 μg / 0.7 = 900 μg — the standard digoxin loading dose, delivered in divided doses. Three structural facts make the question easy: (1) clearance appears NOWHERE in the loading equation — a stem that gives you Vd and F and asks for the initial dose is pointing at Cp × Vd / F regardless of renal function; (2) 'in renal or liver disease... loading dose is usually unchanged' — this patient's renal function does not alter the load (Vd is preserved); (3) the load exists to skip the 4-5 half-life wait — 'time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency,' so without the load he would spend a week (digoxin t1/2 ~40h in normal renal function) climbing toward the target. The maintenance dose that FOLLOWS the load is a different formula with a different variable — Cp × CL × τ / F — and in renal disease it is reduced.",
      },
      {
        stem:
          "A 74-year-old woman with chronic kidney disease (eGFR 22 mL/min/1.73 m²) is admitted and started on a renally eliminated antiarrhythmic with a narrow therapeutic index. The pharmacy protocol states: give the usual initial dose, then reduce each subsequent dose. A student asks why the first dose is not also reduced.",
        discriminator:
          "Organ disease (renal or liver) + 'initial dose usual, subsequent doses reduced' → 'In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged.' — CL falls, Vd does not",
        concept: "The organ-disease dose-adjustment axis",
        answer:
          "The page's first margin rule, verbatim: 'In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged.' The mechanism is the two-formula structure: the loading dose = Cp × Vd / F is a DISTRIBUTION calculation — fill the tank to the target concentration — and renal (or hepatic) failure shrinks clearance, not the apparent volume of distribution, so the size of the tank, and therefore the load, is preserved. The maintenance dose = Cp × CL × τ / F is an ELIMINATION calculation — replace what the drain removes — and the failing organ IS the drain: CL ↓ → each interval removes less → the per-dose replacement must fall proportionally, or the drug accumulates toward toxicity over the next 4-5 (now longer) half-lives. The clinical warning this rule encodes: narrow-therapeutic-index renally cleared drugs (digoxin, lithium, aminoglycosides, vancomycin) poison exactly by this mechanism — correct load, unadjusted maintenance, slow climb. The exam phrasing to expect: 'reduce the maintenance dose; the loading dose is usually unchanged.' (Also expect the t1/2 companion fact: t1/2 = 0.7 × Vd / CL, so as CL falls the half-life lengthens — the accumulation is both higher and slower.)",
      },
      {
        stem:
          "A hospitalized patient has been receiving a continuous IV infusion of an antiarrhythmic for 24 hours. The drug's half-life is 12 hours. The student on the team asks how much longer until the infusion reaches steady state, and whether increasing the infusion rate now would get there faster.",
        discriminator:
          "Continuous infusion + 'how long to steady state' + 'would more drug get there faster' → 'Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency' — ~4-5 half-lives; more drug raises the plateau, not the speed",
        concept: "The steady-state clock axis",
        answer:
          "The page's second margin rule, verbatim: 'Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.' At 24 hours = 2 half-lives (t1/2 = 12h), the infusion is at ~75% of its eventual steady state; after 3 half-lives (36h) ~87.5%, after 4 (48h) ~94%, after 5 (60h) ~97% — effectively steady state at 4-5 half-lives. Increasing the rate does NOT shorten the wait: the elimination machinery is first-order, so each half-life halves the gap between the current level and whatever the new plateau will be — a higher rate simply moves the TARGET up (and if the level is already near the original plateau, raising the rate creates a new, higher plateau that itself takes 4-5 half-lives to approach). Two companions complete the answer: (1) this is why loading doses exist — start AT the target and let the steady state equilibrate around it, rather than waiting out the clock; (2) for a continuous infusion the maintenance formula's τ does not apply — 'τ = dosage interval (time between doses); does not apply for continuous infusions' — the infusion equivalent is the rate equation, rate = Cp × CL (rate in = rate out directly). The same clock runs backward when any drug is stopped: ~4-5 half-lives to washout (the basis for '5 half-lives before the drug is effectively gone' and for switching drugs within a class).",
      },
    ],
    traps: [
      {
        a: "Loading dose = Cp × Vd / F — it depends on VOLUME of distribution (and F), NOT on clearance",
        b: "Loading dose = Cp × CL / F — or 'both doses fall when clearance falls'",
        whyConfused:
          "Both formulas share Cp and F, and 'dose' sounds like one quantity — students import clearance (the more famous variable) into the loading equation",
        keyDifference:
          "The two equations differ in exactly one middle term, and the terms are not interchangeable. The loading dose answers 'how much drug fills the body to Cp?' — a DISTRIBUTION question, so Vd is the variable and CL is absent from the printed formula. The maintenance dose answers 'how much replaces what is eliminated each interval?' — an ELIMINATION question, so CL (and τ) is the variable and Vd is absent. This single-term difference is why 'in renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged': the failing organ lowers the drain (CL), not the tank (Vd). A stem that lets you compute a load from Vd while giving you a distractor clearance value is testing exactly this separation.",
        clue:
          "Ask WHICH JOB the dose does: 'reach the target quickly / initial dose' → Cp × Vd / F (Vd in, CL out); 'hold the target / per-interval dose' → Cp × CL × τ / F (CL and τ in, Vd out). Mnemonic: LOAD THE TANK, MAINTAIN THE DRAIN.",
      },
      {
        a: "In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged",
        b: "In renal or liver disease, BOTH doses are reduced (or the loading dose is reduced and the maintenance dose unchanged)",
        whyConfused:
          "'Sick organs → less drug' feels globally right, so students scale the whole regimen down",
        keyDifference:
          "The page prints the asymmetry, verbatim: 'In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged.' The reason is structural: the loading dose depends on Vd (the apparent volume — preserved in organ failure), while the maintenance dose depends on CL (the failing organ's clearance). Reducing the loading dose in renal failure UNDERSHOOTS: the patient never reaches the target concentration and the therapy fails to work. Failing to reduce the maintenance dose OVERSHOOTS: the drug accumulates over the next 4-5 (now longer) half-lives toward toxicity — the narrow-therapeutic-index poisoning pattern (digoxin, lithium, aminoglycosides). The exam loves the 'usual initial dose, reduced maintenance dose' protocol phrase — recognize it as this rule verbatim.",
        clue:
          "Organ disease questions split the regimen: ask 'which variable does THIS dose use?' Load → Vd → unchanged; maintenance → CL → reduced. Mnemonic: SICK ORGANS SHRINK THE MAINTENANCE, SPARE THE LOAD.",
      },
      {
        a: "Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency",
        b: "A bigger dose (or a loading dose, or more frequent dosing) reaches steady state faster",
        whyConfused:
          "Intuition: more drug in = target reached sooner; and the loading dose DOES put the patient at the target concentration immediately",
        keyDifference:
          "The page is explicit: 'Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.' With first-order elimination, each half-life halves the gap between the current level and the eventual plateau — 50% / 75% / 87.5% / 93.75% / ~97% after 1-5 half-lives — so the CLOCK is set by t1/2 alone. Doubling the dose doubles the PLATEAU, not the speed; dosing q6h instead of q24h smooths the peaks and troughs, not the approach time. The loading dose is the clinical workaround, not an exception: it places the concentration AT the target immediately, and the steady state then equilibrates around that starting point over the same 4-5 half-lives (which is also why a loading dose is always paired with a maintenance dose that is eventually reached by accumulation anyway).",
        clue:
          "Any option that speeds up 'time to steady state' with more drug is wrong — only a shorter t1/2 (or a drug switch) changes the clock. Mnemonic: THE STEADY-STATE CLOCK IS t1/2 — 4-5 HALVES TO FLAT.",
      },
      {
        a: "τ = dosage interval (time between doses); it does not apply for continuous infusions",
        b: "Using the maintenance-dose formula with τ for a continuous infusion — or forgetting that the formula's answer is a PER-DOSE amount",
        whyConfused:
          "The formula looks universal, and infusion questions still feel like 'maintenance' dosing",
        keyDifference:
          "The page carves out the infusion explicitly: 'τ = dosage interval (time between doses); does not apply for continuous infusions.' The maintenance formula computes a PER-DOSE amount — multiplying the replacement rate (Cp × CL) by the interval τ — so at q6h (τ = 6h) each dose is a quarter of the q24h (τ = 24h) dose; the daily total is identical. A continuous infusion has no interval: rate in must equal rate out directly, so the infusion rate = Cp × CL (with F = 1 for IV — no bioavailability correction either). Two exam consequences: (1) a stem that says 'continuous IV infusion' and offers Cp × CL × τ / F as the rate is wrong by a factor of τ; (2) a stem that changes the SCHEDULE (q6h → q24h) is testing that you recompute the per-dose amount with the new τ while the daily total (and Cp at steady state) is unchanged.",
        clue:
          "Intermittent dosing → per-dose amount = Cp × CL × τ / F (bigger τ, bigger dose, same daily total). Continuous infusion → rate = Cp × CL (no τ, no F). The page's own words: τ 'does not apply for continuous infusions.'",
      },
    ],
    pivots: [
      {
        lookAlike: "A dosing stem hands you Vd, CL, F, Cp, and τ — which formula, and which variables actually get used?",
        differentiator:
          "Decide by the JOB the dose does. JOB 1 — 'reach the target concentration quickly / initial dose / loading dose': Loading dose = Cp × Vd / F. Uses Cp, Vd, F. Clearance is NOT in the formula — a given CL value (or renal function) is a distractor for this dose ('loading dose is usually unchanged' in organ disease). JOB 2 — 'maintain the concentration / per-dose amount / daily dose / infusion rate': Maintenance dose = Cp × CL × τ / F for intermittent dosing (the answer is PER DOSE — re-scale with τ when the schedule changes); rate = Cp × CL for a continuous infusion (τ does not apply, F = 1 for IV). If the stem moved a VARIABLE instead: Vd changed (edema, obesity, protein binding) → the load moves; CL changed (renal or liver disease, interaction) → the maintenance dose moves ('maintenance dose ↓, loading dose usually unchanged'); F changed (IV ↔ PO) → both doses move by 1/F.",
        correctPath:
          "Read in order: (1) what does the question ask for — an amount to give NOW (load) or an amount per interval/rate (maintain)? (2) pull the formula's OWN variables and ignore the rest; (3) check the two margin rules for the twist — organ disease (maintenance ↓, load unchanged) and steady-state timing (t1/2 only, 4-5 half-lives). If numbers are given, compute with the formula's units: Cp × Vd is a mass; Cp × CL is a mass per time; × τ returns it to a mass per dose.",
      },
      {
        lookAlike: "A question about time — how long until steady state, until the drug is eliminated, or until a dose change takes full effect?",
        differentiator:
          "Every timing answer on this page is the same clock: 'Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency' — and the identical arithmetic runs backward for elimination. Approach to steady state: 50% after 1 half-life, 75% after 2, 87.5% after 3, 93.75% after 4, ~97% after 5 — 'steady state' means 4-5 half-lives. Full effect of a NEW dose or RATE: the change equilibrates over the same 4-5 half-lives (the plateau moves, the clock does not). Washout after stopping: 4-5 half-lives to effectively eliminate (25% remains after 2, ~3% after 5). A loading dose changes none of these times — it changes the starting concentration, not the kinetics. And if the patient's CL is falling (renal disease), t1/2 = 0.7 × Vd / CL LENGTHENS, so every one of these intervals stretches.",
        correctPath:
          "Identify t1/2 (or compute it: t1/2 = 0.7 × Vd / CL), then multiply: 1 half-life = 50%, 2 = 75%, 3 = 87.5%, 4 ≈ 94%, 5 ≈ 97%. Read the question's threshold — 'steady state' ≈ 4-5, 'half the plateau' = 1, 'effectively gone' ≈ 5. Reject any option that changes the TIME with dose size or frequency — the page rule is 'independent of dose and dosing frequency.'",
      },
    ],
    miniCase: {
      vignette:
        "A 78-year-old woman with chronic heart failure and chronic kidney disease (eGFR 24 mL/min/1.73 m²) is admitted with new atrial fibrillation at 110/min. The cardiology team starts oral digoxin for rate control, targeting a plasma concentration of 1.0 ng/mL. Digoxin's volume of distribution is approximately 350 L for her body size, oral bioavailability is 0.7, and her reduced renal function has lowered digoxin clearance to roughly one third of normal, lengthening its half-life from ~40 to ~120 hours. The written plan reads: 'Usual digoxin loading dose in divided doses today, then a reduced maintenance dose once daily, check a level in several days.' A medical student asks why the initial dose is not also reduced, and how long until the drug's effect is fully stable.",
      question:
        "Explain why the loading dose is given at the usual amount despite the renal disease (and which formula and variables set it), why the maintenance dose must be reduced (and which formula and variables set it), and what determines how long it takes for digoxin concentrations to become fully stable — including why neither the loading dose nor the reduced maintenance dose changes that time.",
      options: [
        {
          label:
            "The loading dose fills the apparent volume to the target: Loading dose = Cp × Vd / F = 1.0 μg/L × 350 L ÷ 0.7 = 500 μg, given in divided doses. It is usually unchanged in renal disease because kidney failure lowers clearance, not the apparent volume of distribution — clearance is not in the loading formula at all. The maintenance dose replaces what clearance removes each interval: Maintenance dose = Cp × CL × τ / F, and because her CL has fallen to a third of normal, the per-dose replacement must fall proportionately or digoxin accumulates to toxicity. The time to full stability is set by the half-life alone — roughly 4-5 half-lives (50%, 75%, 87.5%, ~94%, ~97% of the way there after each successive half-life), here several days to a week at t1/2 ~120 h — independent of dose and dosing frequency: the loading dose sets the starting point, not the clock, and the reduced maintenance dose sets the eventual plateau, not the speed of reaching it.",
          text:
            "Load = Cp × Vd / F, unchanged (Vd preserved); maintenance = Cp × CL × τ / F, reduced (CL ↓); stability takes 4-5 half-lives, set by t1/2 alone — dose-independent.",
          correct: true,
          why:
            "Correct on every element. (1) THE LOAD: the page's first formula — 'Loading dose =' Cp × Vd / F — is a distribution calculation; renal failure lowers CL, not Vd, so 'loading dose is usually unchanged,' and the arithmetic gives 1.0 μg/L × 350 L = 350 μg target burden, ÷ 0.7 = 500 μg oral load (the standard divided loading regimen). (2) THE MAINTENANCE: the page's second formula — 'Maintenance dose =' Cp × CL × τ / F — is an elimination calculation; with CL at a third of normal, the maintenance dose falls to about a third, per the margin rule 'In renal or liver disease, maintenance dose ↓' — the usual dose would accumulate over the (now lengthened) half-lives toward toxicity, the classic digoxin/narrow-therapeutic-index failure. (3) THE CLOCK: 'Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency' — each half-life halves the gap to the eventual plateau (50/75/87.5/93.75/~97%), so at t1/2 ~120 h full stabilization takes many days; the loading dose places her at the target NOW but the steady-state equilibrium still takes 4-5 half-lives to stabilize around it, and the reduced maintenance dose sets the height of the eventual plateau, never the speed. Her reduced CL also lengthened t1/2 (t1/2 = 0.7 × Vd / CL) — which is exactly why the plan waits 'several days' before checking a level.",
        },
        {
          label:
            "Both the loading dose and the maintenance dose should be reduced to a third of the usual amounts, because her kidney disease has reduced digoxin clearance to a third of normal — every dose must scale with the failing organ to avoid toxicity.",
          text:
            "Both doses scale down with clearance — reduce the load and the maintenance dose together.",
          why:
            "The global scale-down trap. The page prints the asymmetry, verbatim: 'In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged.' The loading dose is a distribution calculation (Cp × Vd / F) — kidney failure does not shrink the apparent volume of distribution, so reducing the load by a third UNDERSHOOTS the target concentration (350 μg ÷ 0.7 ÷ 3 ≈ 167 μg delivers ~0.33 ng/mL, a third of target) and the rate control fails. Only the maintenance dose — the elimination calculation (Cp × CL × τ / F) — scales with the failing clearance. This distractor is exactly how real-world digoxin underdosing happens: the correctly reduced maintenance dose is mistakenly applied to the load.",
        },
        {
          label:
            "The loading dose should be calculated from her reduced clearance: Loading dose = Cp × CL / F, so the initial dose is smaller than usual; the maintenance dose is then Cp × Vd × τ / F with her (normal) volume of distribution.",
          text:
            "Formulas swapped: load from CL, maintenance from Vd.",
          why:
            "The formula-swap distractor — both middle terms are in the wrong equations. The page prints 'Loading dose =' with the numerator Cp × Vd over F (distribution — the tank), and 'Maintenance dose =' with the numerator Cp × CL × τ over F (elimination — the drain). Loading from clearance and maintaining from volume inverts the physics: the load would depend on the failing kidney (making renal disease shrink the load — contradicting 'loading dose is usually unchanged'), and the maintenance dose would be identical in renal failure and normal renal function (contradicting 'maintenance dose ↓' — the drug would accumulate to toxicity). If a stem gives you Vd, CL, F, Cp, and τ all at once, each formula uses only its own middle term: Vd for the load, CL × τ for the maintenance.",
        },
        {
          label:
            "Because she received a loading dose, her digoxin concentration is already at steady state after the load — no further accumulation or equilibration time is needed, so a trough level drawn a few hours after the last loading dose reflects her steady-state concentration.",
          text:
            "The loading dose puts the patient AT steady state immediately — no 4-5 half-life wait applies.",
          why:
            "The 'load = instant steady state' trap. A loading dose sets the STARTING concentration at the target, but steady state is an equilibrium property — input matched to output over time — and the page's second rule is explicit: 'Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.' Even starting at the target, the concentration will oscillate and re-equilibrate around the eventual plateau over 4-5 half-lives; here that is many days (t1/2 ~120 h), which is precisely why the plan checks the level 'in several days' rather than hours after the load. A level drawn hours after loading reflects the load plus redistribution, not the steady state — sampling too early is a classic digoxin-monitoring error.",
        },
        {
          label:
            "The maintenance dose is computed per day and should also be given by continuous infusion at the same numeric value: since she is in the hospital, convert her reduced daily maintenance dose directly to an infusion rate (mg/day) of Cp × CL × τ / F, with τ = 24 h — the dosage interval applies to infusions the same as to pills, and the infusion will reach steady state faster because the drug is given intravenously.",
          text:
            "Convert the daily maintenance dose to an equal IV infusion rate; τ works for infusions and IV reaches steady state faster.",
          why:
            "Three stacked errors. (1) The page excludes the interval from infusions, verbatim: 'τ = dosage interval (time between doses); does not apply for continuous infusions' — a continuous infusion has no between-dose interval; its equivalent is the RATE equation, rate = Cp × CL (with F = 1 for IV, since IV bioavailability is complete — another correction this option ignores by keeping ÷ F). (2) The maintenance formula yields a PER-DOSE amount for intermittent dosing — dividing by τ converts it to a rate (Cp × CL / F... actually Cp × CL for IV), which is NOT numerically equal to the per-dose amount this option 'converts.' (3) 'IV reaches steady state faster' contradicts the page's second rule: 'time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency' — the route changes F (and onset), never the clock. (For digoxin the practical point is moot — it is loaded and maintained orally; the distractor is testing the infusion exclusion, not the drug.)",
        },
      ],
      reasoning:
        "The stem walks digoxin — the classic narrow-therapeutic-index, renally-cleared, Vd-loaded drug — through the page's complete architecture: a loading dose in organ disease, a reduced maintenance dose, and the steady-state clock, then asks for all three predictions. The page supplies each answer verbatim. (1) THE LOAD: 'Loading dose = Cp × Vd / F' — a distribution calculation (fill the tank to 1.0 ng/mL across 350 L, delivering 500 μg orally at F = 0.7); renal failure lowers clearance, not Vd, so 'loading dose is usually unchanged.' (2) THE MAINTENANCE: 'Maintenance dose = Cp × CL × τ / F' — an elimination calculation (replace what the drain removes each interval); with CL at a third of normal, 'In renal or liver disease, maintenance dose ↓' — proportionately, or the drug accumulates to toxicity over the lengthened half-lives. (3) THE CLOCK: 'Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency' — 50/75/87.5/93.75/~97% at 1-5 half-lives; her t1/2 of ~120 h (lengthened because t1/2 = 0.7 × Vd / CL and CL fell) makes full stabilization a many-day process that neither the load (a starting point) nor the dose size (a plateau height) can shorten. The distractors fail at: 'reduce both doses' (the global scale-down — the load would undershoot and rate control would fail); 'load from CL, maintain from Vd' (the formula swap — both middle terms misplaced); 'the load puts her at steady state immediately' (confusing the starting concentration with the equilibrium — hence the several-day level check); and 'convert the daily dose to an equal infusion rate; IV is faster' (the τ-exclusion violation — 'does not apply for continuous infusions,' rate = Cp × CL — plus the false route-changes-the-clock claim).",
    },
  },
  mnemonics: [
    {
      code: "LOAD THE TANK, MAINTAIN THE DRAIN — LOAding dose = Cp × Vd / F; MAINTENANCE dose = Cp × CL × τ / F",
      meaning:
        "The formula-selection rule built on the page's two printed equations. The loading dose FILLS THE TANK: Vd is the tank's size, so the load is Cp × Vd corrected for delivery (÷ F) — clearance is nowhere in the equation. The maintenance dose MATCHES THE DRAIN: CL is how fast the tank drains, τ is how often you refill, so the maintenance dose is Cp × CL × τ ÷ F — Vd is nowhere in that equation. Tank for the load, drain for the maintenance.",
      memorizes: "Which middle variable belongs to which formula",
      whenToUse: "Any dosing calculation stem, and any option pair that swaps Vd and CL between the two formulas",
      clinical:
        "Initial dose of digoxin, phenytoin, amiodarone, vancomycin → compute from Vd (load = Cp × Vd / F). Every subsequent dose → compute from CL and τ (maintenance = Cp × CL × τ / F). A stem that hands you Vd and asks for the initial dose does not need the renal function panel; a stem that asks for the per-dose or daily maintenance amount does.",
    },
    {
      code: "DIVIDE BY F TO DELIVER — both doses are ÷ F: IV (F = 1) needs no correction; PO with F = 0.5 doubles the dose",
      meaning:
        "The shared denominator of the page's two fraction formulas: F is bioavailability, the fraction of the administered dose that reaches the systemic circulation. Dividing the TARGET amount by F converts it into the DOSE TO ADMINISTER. Intravenous F = 1 — the dose equals the target amount exactly. Poor oral bioavailability (F = 0.5) means only half of each pill arrives, so the oral dose must be DOUBLE the target amount. Both formulas, same correction.",
      memorizes: "Why extravascular doses are bigger than IV doses of the same drug",
      whenToUse: "Any IV ↔ PO conversion, any stem quoting F, and any option that multiplies by F instead of dividing",
      clinical:
        "Digoxin: IV load 0.5 mg delivers the same amount as an oral load of ~0.7 mg at F = 0.7. A drug with F = 0.25 needs four times the oral dose to deliver the IV-equivalent amount — which is also why first-pass-limited drugs (propranolol, morphine, nitroglycerin) have oral doses far above their IV doses.",
    },
    {
      code: "SICK ORGANS SHRINK THE MAINTENANCE, SPARE THE LOAD — in renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged",
      meaning:
        "The page's organ-disease margin rule, compressed to its asymmetry: the failing organ lowers CL (the drain), not Vd (the tank). The maintenance dose depends on CL — 'In renal or liver disease, maintenance dose ↓.' The loading dose depends on Vd — 'loading dose is usually unchanged.' Give the usual load and a reduced maintenance dose; the reverse pairing (reduced load, usual maintenance) both undershoots the target AND accumulates to toxicity.",
      memorizes: "The direction of dose adjustment in renal and hepatic failure",
      whenToUse: "Any stem with renal disease (eGFR, creatinine, dialysis) or liver disease (cirrhosis, CYP450 failure) that asks how to adjust a regimen",
      clinical:
        "Digoxin, lithium, aminoglycosides, vancomycin in renal failure: usual loading dose, reduced (or extended-interval) maintenance, drug levels at steady state (4-5 half-lives — which are now LONGER, because t1/2 = 0.7 × Vd / CL rises as CL falls). Cirrhosis does the same to hepatically cleared drugs: Phase I/II capacity falls, CL falls, maintenance dose ↓, load usually unchanged.",
    },
    {
      code: "THE STEADY-STATE CLOCK IS t1/2 — 4-5 HALVES TO FLAT: 50% · 75% · 87.5% · 94% · 97% after 1-5 half-lives, independent of dose and dosing frequency",
      meaning:
        "The page's steady-state margin rule with its arithmetic: 'Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.' First-order elimination halves the gap to the plateau every half-life — 50% after 1, 75% after 2, 87.5% after 3, 93.75% after 4, ~97% after 5: 'steady state' at 4-5 half-lives. Doubling the dose raises the plateau, not the speed; the loading dose changes the starting point, not the clock. The same clock runs backward: ~4-5 half-lives to washout after the last dose.",
      memorizes: "The 4-5 half-life rule, the accumulation percentages, and dose-independence",
      whenToUse: "Any question asking how long until steady state, until full effect of a dose change, or until a drug is cleared — and any option claiming a bigger dose or faster schedule shortens it",
      clinical:
        "Check digoxin or vancomycin levels at steady state, not before (sampling early after a dose change misreads the trajectory). A drug with t1/2 = 12 h is at steady state in ~2 days; with t1/2 = 120 h (digoxin in renal failure) it takes over 3 weeks — the reason level checks and dose adjustments space out in organ failure. Five half-lives also answers 'when is it safe to start the interacting/alternative drug.'",
    },
  ],
  rapidReview: {
    s30: [
      "Loading dose (verbatim): 'Loading dose = Cp × Vd / F' — fill the apparent volume to the target concentration, corrected for bioavailability; clearance is NOT in the formula",
      "Maintenance dose (verbatim): 'Maintenance dose = Cp × CL × τ / F' — replace each interval what clearance removes; Vd is NOT in the formula",
      "Cp (verbatim): 'Cp = target plasma concentration' — the shared first term of both dosage equations",
      "τ (verbatim): 'τ = dosage interval (time between doses); does not apply for continuous infusions'",
      "Organ-disease rule (verbatim): 'In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged.' — CL falls, Vd does not",
      "Steady-state rule (verbatim): 'Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.'",
      "The 4-5 half-life ladder: 50% after 1 half-life, 75% after 2, 87.5% after 3, 93.75% after 4, ~97% after 5 — 'steady state' at 4-5 half-lives; washout is the same clock in reverse",
      "Formula selection: initial dose / reach target quickly → Cp × Vd / F (the tank); per-dose or daily amount / hold the target → Cp × CL × τ / F (the drain)",
      "÷ F both ways: IV F = 1 (dose = target amount); PO with F = 0.5 doubles the dose — multiplying by F instead of dividing is the classic reversal",
      "Continuous infusion: τ does not apply — infusion rate = Cp × CL (rate in = rate out directly, F = 1 for IV)",
    ],
    m3: [
      "LOAD THE TANK, MAINTAIN THE DRAIN — load = Cp × Vd / F (Vd); maintenance = Cp × CL × τ / F (CL and τ)",
      "DIVIDE BY F TO DELIVER — both doses ÷ F; IV F = 1, PO F = 0.5 doubles the dose",
      "SICK ORGANS SHRINK THE MAINTENANCE, SPARE THE LOAD — renal/liver disease: maintenance ↓, loading usually unchanged",
      "THE STEADY-STATE CLOCK IS t1/2 — 50 · 75 · 87.5 · 94 · 97% at 1-5 half-lives; dose and frequency change the LEVEL, never the TIME",
      "τ = between doses only — 'does not apply for continuous infusions' (rate = Cp × CL)",
    ],
    m10: [
      "Both formulas verbatim: 'Loading dose = Cp × Vd / F' and 'Maintenance dose = Cp × CL × τ / F' — they share Cp and F and differ in exactly one middle term (Vd vs CL × τ)",
      "Definitions verbatim: 'Cp = target plasma concentration'; 'τ = dosage interval (time between doses); does not apply for continuous infusions'",
      "Margin rules verbatim: 'In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged.'; 'Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.'",
      "Mechanism spine: the load is a DISTRIBUTION calculation (body burden = Cp × Vd; organ failure spares Vd); the maintenance dose is an ELIMINATION calculation (rate out = CL × Cp; organ failure lowers CL) — the failing organ is the drain, not the tank",
      "Companion arithmetic: t1/2 = 0.7 × Vd / CL — so falling CL lengthens t1/2 and stretches every 4-5 half-life interval (slower accumulation, slower washout, later toxicity in renal failure)",
    ],
  },
  recall: [
    {
      q: "The loading-dose formula, verbatim — and which variable is absent from it.",
      a: "Loading dose = Cp × Vd / F. Clearance (CL) is absent — the loading dose is a distribution calculation: it fills the apparent volume of distribution to the target plasma concentration, corrected for bioavailability. That absence is why 'in renal or liver disease... loading dose is usually unchanged.'",
    },
    {
      q: "The maintenance-dose formula, verbatim — and which variable is absent from it.",
      a: "Maintenance dose = Cp × CL × τ / F. Volume of distribution (Vd) is absent — the maintenance dose is an elimination calculation: it replaces what clearance removes over each dosage interval τ, corrected for bioavailability. That dependence on CL is why 'in renal or liver disease, maintenance dose ↓.'",
    },
    {
      q: "The page's definitions of Cp and τ, verbatim.",
      a: "Cp = target plasma concentration. τ = dosage interval (time between doses); does not apply for continuous infusions — for a continuous IV infusion the equivalent is the rate equation, rate = Cp × CL (F = 1 for IV).",
    },
    {
      q: "The organ-disease margin rule, verbatim — and the structural reason for its asymmetry.",
      a: "In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged. The reason: renal or hepatic failure lowers clearance (the maintenance dose's variable) while the apparent volume of distribution (the loading dose's variable) is usually preserved — the failing organ is the drain, not the tank. Failing to reduce the maintenance dose accumulates the drug toward toxicity over the (now lengthened) half-lives; reducing the loading dose undershoots the target concentration.",
    },
    {
      q: "The steady-state margin rule, verbatim — with the accumulation percentages it implies.",
      a: "Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency. Each half-life halves the gap to the eventual plateau: 50% after 1, 75% after 2, 87.5% after 3, 93.75% after 4, ~97% after 5 — effectively steady state at 4-5 half-lives. Doubling the dose raises the plateau, not the speed; a loading dose changes the starting point, not the clock; and the same arithmetic in reverse gives ~4-5 half-lives to washout after the last dose.",
    },
  ],
  related: [
    {
      title: "Pharmacokinetics — Bioavailability, Vd, Clearance, Half-life",
      topicId: "pharmacokinetics",
      note:
        "The definitions page (PH2, book 229) supplies every variable this page combines. F (bioavailability) is the fraction reaching systemic circulation — the shared denominator of both dosage formulas (÷ F to convert target amount into administered dose; IV F = 1). Vd (apparent volume of distribution) is the ratio of drug in the body to plasma concentration — the loading dose's tank. CL (clearance) is the volume of plasma cleared per unit time — the maintenance dose's drain. t1/2 = 0.7 × Vd / CL — the bridge that makes organ disease lengthen the clock: as CL falls, t1/2 rises, and every 4-5 half-life interval (to steady state or to washout) stretches with it.",
    },
    {
      title: "Elimination of Drugs — Zero-order vs First-order Kinetics",
      topicId: "elimination-of-drugs",
      note:
        "The kinetics page (PH4, book 230) derives this page's clock. First-order elimination — a constant FRACTION eliminated per unit time — is what makes the gap to steady state halve every half-life (50/75/87.5/93.75/~97%) and what makes 'time to steady state... independent of dose and dosing frequency.' The same page's zero-order (capacity-limited, saturable) kinetics — aspirin, phenytoin, ethanol — is the regime where the constant-t1/2 arithmetic breaks: when elimination saturates, doubling the dose more than doubles the plateau and the approach is no longer exponential — which is why phenytoin and salicylate dosing is guided by levels, not by half-life arithmetic, and why narrow-therapeutic-index drugs under saturation are loaded carefully (Vd) and maintained cautiously.",
    },
    {
      title: "Drug Metabolism — Phase I, Phase II, and Excretion",
      topicId: "drug-metabolism",
      note:
        "The metabolism page (PH3, book 230) explains the 'liver disease' half of the margin rule. Hepatic clearance is Phase I (CYP450 oxidation/reduction/hydrolysis) plus Phase II (glucuronidation, acetylation, sulfation) capacity; cirrhosis removes hepatocytes and portosystemic shunting bypasses them, so CL falls and 'maintenance dose ↓' for hepatically extracted drugs. The same page's polarity logic explains why metabolites (polar, water-soluble) exit renally — linking hepatic metabolism to renal elimination. Note the asymmetry the exam tests: liver disease lowers the maintenance dose of hepatically cleared drugs (CL ↓) but leaves their loading doses usually unchanged (Vd preserved).",
    },
    {
      title: "Urine pH and Drug Elimination",
      topicId: "urine-ph-and-drug-elimination",
      note:
        "The same printed page (PH5, book 231, top section) carries the other renal lever. THIS section (bottom) adjusts dose SIZE to a failing kidney's clearance ('In renal or liver disease, maintenance dose ↓'); the urine-pH section adjusts renal CLEARANCE itself by ion trapping — alkalinize the urine (sodium bicarbonate) to trap weak acids (phenobarbital, methotrexate, aspirin/salicylates), acidify it (ammonium chloride) to trap weak bases (TCAs, amphetamines) in severe alkalosis. Together they cover both sides of renal drug handling: how much drug the kidney clears per unit time (dose adjustment), and how to raise that clearance on purpose in overdose (ion trapping).",
    },
  ],
  crossLinks: [
    {
      subject: "Cardiology (digoxin — the classic loading-dose drug)",
      connection:
        "Digoxin is the exam's vehicle for every rule on this page: a narrow-therapeutic-index drug with a huge Vd (~7 L/kg — the tank), incomplete oral bioavailability (F ≈ 0.7 — the ÷ F correction), predominantly renal clearance (the failing-organ maintenance reduction), and a long half-life that lengthens in renal failure (t1/2 = 0.7 × Vd / CL). Loading in divided doses achieves rate control today rather than after a week of accumulation; the maintenance dose is cut in renal disease ('maintenance dose ↓, loading dose usually unchanged'); and levels are checked at steady state, not hours after the load. Its toxicity — nausea, visual halos/xanthopsia, arrhythmias, hyperkalemia — is precisely what an unadjusted maintenance dose accumulates toward in a failing kidney.",
    },
    {
      subject: "Nephrology (CKD and renal dose adjustment)",
      connection:
        "Renal physiology converts this page's CL variable into a bedside protocol: GFR (estimated by creatinine clearance / eGFR) sets renal clearance, so 'maintenance dose ↓' in practice means dosing by CrCl — reducing the per-dose amount or extending the interval τ (the same daily total either way, because the formula is linear in τ). Dialyzable drugs (low Vd, low protein binding, small volume — aminoglycosides, vancomycin, lithium) need post-dialysis replacement; drugs with large Vd (digoxin ~500 L) are NOT well dialyzed — the tank is too big to drain. And as CL falls, t1/2 = 0.7 × Vd / CL lengthens, so levels, dose changes, and washouts all take longer — the reason nephrology dosing intervals are measured in half-lives, not hours.",
    },
    {
      subject: "Hepatology and drug metabolism (cirrhosis dosing)",
      connection:
        "The 'liver disease' half of the margin rule is cirrhose's pharmacology: lost hepatocyte mass and portosystemic shunting reduce first-pass extraction and CYP450/Phase II capacity, so hepatic CL falls and maintenance doses of high-extraction drugs (propranolol, morphine, nitroglycerin) and narrow-therapeutic-index drugs (warfarin — also a protein-binding/Vd story via hypoalbuminemia) come down. The loading dose is usually unchanged (Vd preserved — though ascites can genuinely raise Vd for water-soluble drugs, the exam rule is 'usually unchanged'). The Child-Pugh score is the clinical quantification of this page's CL variable; the pharmacokinetics page's F and the drug-metabolism page's Phase I/II machinery supply the mechanism.",
    },
    {
      subject: "Anesthesiology and critical care (continuous infusions and the τ exclusion)",
      connection:
        "The page's infusion exclusion — 'τ... does not apply for continuous infusions' — is the ICU's daily arithmetic. An IV infusion has no dosing interval: rate in = rate out directly, so the infusion rate = Cp × CL (F = 1). Every ICU titration (norepinephrine, propofol, heparin, insulin) rides this equation plus the 4-5 half-life clock: a rate change takes 4-5 half-lives to reach its new plateau (fast for propofol, t1/2 minutes — hence smooth titration; slow for amiodarone, t1/2 of weeks — hence the loading dose). Vasopressor and sedation weaning follows the same clock in reverse, and 'start low, go slow' in organ failure is this page's two rules compressed: the maintenance rate is set by CL, the loading bolus by Vd.",
    },
  ],
};
