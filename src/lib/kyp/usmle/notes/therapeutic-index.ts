import type { KypUsMLENote } from "../types";

// Pharmacology — PHARMACOKINETICS AND PHARMACODYNAMICS (PH9).
// Source: pdf 255 / book 233 — the LOWER portion of the page is this one
// topic: the section header 'Therapeutic index' with the definition line
// 'Measurement of drug safety.' and the TD50/ED50 equation (numerator
// 'TD50 median toxic dose' over denominator 'ED50 median effective
// dose'); the therapeutic-window definition, verbatim: 'Therapeutic
// window—range of drug concentrations that can safely and effectively
// treat disease.'; the Efficacy/Toxicity quantal-curve panel (y-axis
// '% of patients responding' with 100/50/0 gridlines, x-axis
// 'Log (drug concentration)', the 'Efficacy' curve left and the
// 'Toxicity' curve right, 'ED50' and 'TD50' drop markers at the 50%
// line, the annotation 'Therapeutic index' between the curves, legend
// 'ED = Effective dose / TD = Toxic dose'); the margin mnemonic,
// verbatim: 'TITE: Therapeutic Index = TD50 / ED50.' — THE SOURCE'S OWN
// PRINTED MNEMONIC, attributed as such (not a KYP design); the margin
// note, verbatim: 'Safer drugs have ↑ TI; drugs with ↓ TI require
// frequent monitoring (eg, warfarin, theophylline, digoxin,
// antiepileptic drugs, lithium; Warning! These drugs are lethal!).';
// and the LD50 note, verbatim: 'LD50 (lethal median dose) often
// replaces TD50 in animal studies.' EXCLUSION: the 'Receptor binding'
// section occupies the UPPER half of this same page — its header, three
// dose-response panels, and AGONIST WITH table are the completed
// receptor-binding topic (PH8) and are EXCLUDED here. Census
// (pdfimages + VLM): NO raster images on the page. The quantal panel is
// vector line-art, redrawn as ORIGINAL_KYP_REDRAW sigmoids in the
// registry visual; the equation block and margin note print in the text
// layer and are carried verbatim (ORIGINAL_KYP_ADAPTATION).

export const therapeuticIndex: KypUsMLENote = {
  id: "therapeutic-index",
  title: "Therapeutic Index",
  subtitle:
    "The LOWER half of book 233 — one definition, one equation, one panel, and one warning (book 233). The section is the 'Measurement of drug safety.': the therapeutic index is the ratio TD50/ED50 ('TD50 median toxic dose' over 'ED50 median effective dose'). The 'Therapeutic window—range of drug concentrations that can safely and effectively treat disease.' The quantal panel plots the 'Efficacy' and 'Toxicity' cumulative curves on a '% of patients responding' vs 'Log (drug concentration)' grid, with 'ED50' and 'TD50' read at the 50% line ('ED = Effective dose / TD = Toxic dose'). The margin mnemonic — the source's own — runs 'TITE: Therapeutic Index = TD50 / ED50.' The margin warning runs 'Safer drugs have ↑ TI; drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!).' And the fine print: 'LD50 (lethal median dose) often replaces TD50 in animal studies.'",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Pharmacokinetics and Pharmacodynamics",
  pilotCategory:
    "The therapeutic-index page's complete architecture — the definition line 'Measurement of drug safety.' with the TD50/ED50 equation; the therapeutic-window definition; the Efficacy/Toxicity quantal-curve panel with ED50 and TD50 marked at the 50%-of-patients line; the TITE margin mnemonic (the source's own printed mnemonic); the low-TI monitoring list (warfarin, theophylline, digoxin, antiepileptic drugs, lithium) with its 'Warning! These drugs are lethal!' exclamation; and the LD50 note.",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 233 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Therapeutic index — 'Measurement of drug safety.' with the TD50/ED50 equation; the therapeutic-window definition; the Efficacy/Toxicity quantal-curve panel with ED50 and TD50 at the 50% line; the TITE margin mnemonic; the low-TI monitoring list; and the LD50 note; the Receptor binding section on the same page is EXCLUDED — it is the separate receptor-binding topic)",
  tags: [
    "therapeutic index",
    "TI",
    "TD50",
    "ED50",
    "LD50",
    "median toxic dose",
    "median effective dose",
    "lethal median dose",
    "therapeutic window",
    "quantal dose-response",
    "cumulative frequency curve",
    "% of patients responding",
    "log drug concentration",
    "drug safety",
    "margin of safety",
    "narrow therapeutic index",
    "therapeutic drug monitoring",
    "warfarin",
    "theophylline",
    "digoxin",
    "antiepileptic drugs",
    "lithium",
    "INR",
    "toxicology",
    "pharmacodynamics",
    "dose-response",
    "TITE",
    "low-TI drugs",
    "effective dose",
    "toxic dose",
  ],
  core: {
    what:
      "SIX PRINTED PIECES, ONE IDEA: HOW FAR APART ARE 'IT WORKS' AND 'IT HARMED'? (1) The section opens with its definition line, verbatim: 'Measurement of drug safety.' (2) The equation: TI = TD50 / ED50 — numerator 'TD50 median toxic dose' (the dose at which 50% of patients experience toxicity), denominator 'ED50 median effective dose' (the dose at which 50% of patients experience the therapeutic effect). (3) The therapeutic window, verbatim: 'Therapeutic window—range of drug concentrations that can safely and effectively treat disease.' (4) The quantal panel: two cumulative S-curves on a grid whose y-axis is '% of patients responding' (100/50/0) and whose x-axis is 'Log (drug concentration)' — the 'Efficacy' curve on the left, the 'Toxicity' curve on the right, 'ED50' and 'TD50' marked where each crosses the 50% line, the annotation 'Therapeutic index' printed between them, and the legend 'ED = Effective dose / TD = Toxic dose'. (5) The margin box, verbatim: 'TITE: Therapeutic Index = TD50 / ED50.' — the source's own printed mnemonic — followed by 'Safer drugs have ↑ TI; drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!).' (6) The LD50 note, verbatim: 'LD50 (lethal median dose) often replaces TD50 in animal studies.'",
    why:
      "WHY A RATIO MEASURES SAFETY: both ED50 and TD50 are properties of the same drug in the same population — the doses at which each half of the population crosses its threshold for effect and for toxicity. Dividing the toxic dose by the effective dose cancels the units and asks one question: how many times the effective dose can you give before half of the patients are harmed? A drug whose TD50 is ten times its ED50 (TI = 10) forgives dosing error, individual variation, and accumulation; a drug whose TD50 is twice its ED50 (TI = 2) does not — hence the margin note's pairing: 'Safer drugs have ↑ TI' and 'drugs with ↓ TI require frequent monitoring'. WHY THE CURVES OVERLAP MATTERS: the panel's two sigmoids are cumulative distributions of individual thresholds — each patient has an effective dose and a toxic dose, and the curves count patients, not magnitude ('% of patients responding'). The horizontal gap between the 50% crossings IS the TI made visible: wide gap, curves well separated; narrow gap, curves nearly superimposed — the five monitored drugs live there, because a small concentration excursion that is therapeutic for one patient is toxic for the next ('Warning! These drugs are lethal!'). WHY THE WINDOW IS A CONCENTRATION RANGE, NOT A DOSE: 'Therapeutic window—range of drug concentrations that can safely and effectively treat disease' — dosing is what you control, concentration is what you monitor, and pharmacokinetics (absorption, clearance, interactions) moves the concentration while the window stays put; that mismatch is exactly why ↓ TI drugs are tracked with levels (INR for warfarin, serum theophylline, digoxin, and lithium, antiepileptic drug levels). WHY LD50 STANDS IN FOR TD50 IN ANIMALS: median toxicity has a dose you can measure in animals; the median LETHAL dose in humans cannot ethically be measured, so 'LD50 (lethal median dose) often replaces TD50 in animal studies.'",
    keyIdea:
      "Read every therapeutic-index stem through three questions. QUESTION 1 — WHAT DOES THE y-AXIS COUNT? '% of patients responding' — a QUANTAL plot. ED50 is where the efficacy curve crosses 50% OF PATIENTS and TD50 where the toxicity curve crosses 50% OF PATIENTS — never '50% of maximal effect' (that is the graded curve of the efficacy-vs-potency and receptor-binding topics). QUESTION 2 — WHICH CURVE IS WHICH, AND WHICH IS ON TOP OF THE FRACTION? Efficacy left, Toxicity right — TD50 must sit right of ED50 or the drug is unusable — and the fraction is TD50/ED50 ('TITE: Therapeutic Index = TD50 / ED50', the source's own mnemonic): toxic on top, effective on the bottom; a ratio near 1 is a drug you cannot dose safely. QUESTION 3 — WHAT IS THE CLINICAL CONSEQUENCE OF THE GAP? ↑ TI = wide separation = forgiving; ↓ TI = narrow separation = the monitoring list (warfarin, theophylline, digoxin, antiepileptic drugs, lithium — 'Warning! These drugs are lethal!'), because the therapeutic WINDOW (the concentration range that is safe AND effective) is narrow enough that pharmacokinetic variability — renal function, interactions, adherence — can push a patient out of it between visits. The exam's one-line summary: SAFETY IS A DISTANCE, AND THE TI IS ITS MEASURE.",
  },
  mechanisms: [
    {
      id: "quantal-curve-ed50-td50-ratio",
      title:
        "The quantal curves: ED50 and TD50 read at the 50%-of-patients line — and the TI is the gap between them",
      context: "The Efficacy/Toxicity panel and the TD50/ED50 equation (book 233)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "A population of patients — each with an effective threshold and a toxic threshold",
            sublabel:
              "Input — the quantal premise: individuals differ. For any drug, each patient has a dose that produces the therapeutic effect and a (higher) dose that produces toxicity. Sort the population by threshold and the counts accumulate into two S-shaped cumulative-frequency curves.",
            variant: "input",
          },
          {
            id: "efficacy",
            label: "The 'Efficacy' curve — cumulative % of patients responding, crossing 50% at ED50",
            sublabel:
              "The left curve of the panel: at low log concentration few patients have reached their effective threshold; at high concentration nearly all have. The dose at which the curve crosses the 50% line — half of the patients effectively treated — is the ED50, the 'median effective dose' of the equation's denominator ('ED = Effective dose').",
            variant: "process",
          },
          {
            id: "toxicity",
            label: "The 'Toxicity' curve — cumulative % of patients experiencing toxicity, crossing 50% at TD50",
            sublabel:
              "The right curve of the panel: toxicity thresholds sit higher, so the curve rises to the right of the efficacy curve. The dose at which IT crosses the 50% line — half of the patients harmed — is the TD50, the 'median toxic dose' of the equation's numerator ('TD = Toxic dose'). In animal studies the measured endpoint is often death instead: 'LD50 (lethal median dose) often replaces TD50 in animal studies.'",
            variant: "process",
          },
          {
            id: "output",
            label: "TI = TD50 / ED50 — the horizontal gap between the crossings, divided out",
            sublabel:
              "Output — the annotation 'Therapeutic index' printed between the two curves: the distance between ED50 and TD50 on the log axis, expressed as a ratio. Wide gap → ↑ TI → 'Safer drugs have ↑ TI'. Narrow gap → ↓ TI → the two curves nearly superimpose and dosing separates healing from harm by a hair's breadth — the monitoring list.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "efficacy", label: "sort by effective threshold → cumulative sigmoid, 50% crossing = ED50" },
          { from: "input", to: "toxicity", label: "sort by toxic threshold (higher) → sigmoid shifted right, 50% crossing = TD50" },
          { from: "efficacy", to: "output", label: "ED50 becomes the denominator" },
          { from: "toxicity", to: "output", label: "TD50 becomes the numerator — the gap, as a ratio" },
        ],
      },
    },
    {
      id: "therapeutic-window-drug-monitoring",
      title:
        "The therapeutic window: why ↓ TI drugs demand frequent monitoring — and why the window is a concentration range",
      context: "The therapeutic-window definition, the margin note, and the LD50 note (book 233)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The therapeutic window — a RANGE of concentrations, defined verbatim",
            sublabel:
              "Input — 'Therapeutic window—range of drug concentrations that can safely and effectively treat disease.' Not a dose and not a time interval: a band on the concentration axis, floored by the lowest effective concentration and ceilinged by the lowest toxic concentration.",
            variant: "input",
          },
          {
            id: "pk",
            label: "Pharmacokinetics moves the concentration while the window stands still",
            sublabel:
              "Dose is the input, concentration is the outcome — and absorption, bioavailability, volume of distribution, hepatic clearance, renal function, and drug interactions all move it: renal impairment accumulates digoxin, CYP1A2 inhibition raises theophylline, an antibiotic disrupts warfarin's equilibrium. In a WIDE window (↑ TI) these excursions are absorbed; in a NARROW window (↓ TI) the same excursions cross from therapeutic to toxic.",
            variant: "process",
          },
          {
            id: "list",
            label: "The ↓ TI list — warfarin, theophylline, digoxin, antiepileptic drugs, lithium",
            sublabel:
              "The margin note's own five, verbatim: 'drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!).' Each is tracked by a surrogate of concentration — INR for warfarin, serum levels for theophylline, digoxin, and lithium, antiepileptic drug levels (eg, free phenytoin) — because TD50 sits too close to ED50 for dosing alone to keep patients inside the window.",
            variant: "process",
          },
          {
            id: "output",
            label: "Frequent monitoring — the clinical output of a narrow window",
            sublabel:
              "Output — the monitoring decision rule the exam tests: 'Safer drugs have ↑ TI' (wide margin, dosed without levels) versus 'drugs with ↓ TI require frequent monitoring' (levels drawn, doses titrated to the measured concentration). The preclinical parallel: where human TD50 cannot be measured, 'LD50 (lethal median dose) often replaces TD50 in animal studies' — the same safety question, asked at the lethal endpoint.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "pk", label: "concentration is the controlled variable; PK is the noise" },
          { from: "pk", to: "list", label: "narrow window → excursions cross the toxic threshold → the five monitored drugs" },
          { from: "list", to: "output", label: "↓ TI + PK variability → frequent levels, dose titration" },
          { from: "input", to: "output", label: "wide window (↑ TI) → dosing without levels" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "therapeutic-index-map",
      title: "The therapeutic-index map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source page's lower half (book 233): the quantal panel — the 'Efficacy' and 'Toxicity' cumulative curves on a '% of patients responding' (100/50/0) vs 'Log (drug concentration)' grid, ED50 and TD50 marked with dashed drops at the 50% line, and the 'Therapeutic index' double-arrow spanning the gap; the equation panel — 'Measurement of drug safety.' with the fraction TD50 (median toxic dose) over ED50 (median effective dose); the therapeutic-window band — the verbatim definition over a concentration axis split into sub-therapeutic, THERAPEUTIC WINDOW, and toxicity zones; the margin-note strip — the source's own printed mnemonic 'TITE: Therapeutic Index = TD50 / ED50.' plus the verbatim safer-drugs warning; the five-card monitoring grid — warfarin (INR), theophylline, digoxin, antiepileptic drugs, lithium — under the source's own exclamation 'Warning! These drugs are lethal!'; and the LD50 note.",
      notice:
        "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 255). The Efficacy/Toxicity quantal panel is vector line-art in the PDF and is redrawn as ORIGINAL_KYP_REDRAW sigmoid cumulative curves (the standard quantal dose-response geometry, drawn from scratch). The equation block, the TITE margin mnemonic (THE SOURCE'S OWN PRINTED MNEMONIC — attributed, not a KYP design), the margin warning with the low-TI drug list, and the LD50 note print in the text layer and are re-typeset verbatim (ORIGINAL_KYP_ADAPTATION) in this visual's panels. The monitoring targets on the five cards (INR, serum levels) are KYP clinical anchors beyond the source page.",
    },
    {
      kind: "table",
      title: "Book 233 — the Therapeutic index section (carried verbatim)",
      intro:
        "The whole section, element by element, exactly as printed: the definition line, the equation with both labels, the window definition, the panel's own labels and legend, the margin mnemonic and warning, and the LD50 note.",
      columns: ["ELEMENT", "VERBATIM TEXT (book 233)", "READING"],
      rows: [
        [
          "Section definition",
          "Measurement of drug safety.",
          "The section's purpose statement: the TI exists to QUANTIFY safety, not to describe it.",
        ],
        [
          "The equation",
          "TD50 / ED50 — 'TD50 median toxic dose' over 'ED50 median effective dose'",
          "Toxic dose on top, effective dose on the bottom: the ratio asks how many effective doses fit inside one toxic dose.",
        ],
        [
          "Therapeutic window",
          "Therapeutic window—range of drug concentrations that can safely and effectively treat disease.",
          "A CONCENTRATION range (not a dose, not a time interval) — the band a level must stay inside.",
        ],
        [
          "The quantal panel (axes)",
          "% of patients responding (y, 100/50/0) vs Log (drug concentration) (x)",
          "Quantal, not graded: the y-axis counts PATIENTS — ED50/TD50 sit where each curve crosses 50% of patients.",
        ],
        [
          "The quantal panel (curves)",
          "Efficacy · Toxicity · ED50 · TD50 · Therapeutic index (annotation between the curves)",
          "Two cumulative S-curves; the horizontal distance between their 50% crossings is the TI made visible.",
        ],
        [
          "The panel legend",
          "ED = Effective dose / TD = Toxic dose",
          "The panel's own footnote — printed on the figure, and fair game as answer vocabulary.",
        ],
        [
          "The margin mnemonic (the source's own)",
          "TITE: Therapeutic Index = TD50 / ED50.",
          "THE SOURCE'S OWN PRINTED MNEMONIC (book 233's margin) — memorize it as the book prints it; it is attributed, not KYP-original.",
        ],
        [
          "The margin warning",
          "Safer drugs have ↑ TI; drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!).",
          "The clinical rule AND the monitored-drug list in one sentence — the single most testable line on the page.",
        ],
        [
          "The LD50 note",
          "LD50 (lethal median dose) often replaces TD50 in animal studies.",
          "Preclinical safety: the same question asked at the lethal endpoint, where it can only be measured in animals.",
        ],
      ],
      caption:
        "Read the section as one sentence distributed across nine printed elements: SAFETY IS A DISTANCE. The definition line names the question ('Measurement of drug safety.'), the equation computes the distance (TD50/ED50), the panel draws it (two cumulative curves and the gap between their 50% crossings, annotated 'Therapeutic index'), the window states where a concentration must sit to be inside the distance, the margin mnemonic compresses the equation (TITE — the source's own), the margin warning translates the distance into a clinical duty (↑ TI = safe; ↓ TI = the five monitored drugs — 'Warning! These drugs are lethal!'), and the LD50 note extends the measurement to the animal lab. The exam takes items from every row of this table.",
    },
    {
      kind: "table",
      title: "The monitoring decision table — from TI to the draw-the-level order (KYP synthesis)",
      intro:
        "The exam-facing distillation: given a drug (or a figure, or a pair of numbers), decide whether it needs levels — and which order the stem is fishing for. Monitoring targets are KYP clinical anchors beyond the source page.",
      columns: ["The situation", "The TI reading", "The clinical order"],
      rows: [
        [
          "A figure shows two well-separated quantal curves (ED50 far left, TD50 far right)",
          "Wide gap → ↑ TI → 'Safer drugs have ↑ TI'",
          "Dose by weight or fixed dosing; no routine levels — the margin absorbs pharmacokinetic variability.",
        ],
        [
          "TD50 = 200 mg, ED50 = 100 mg (or any numbers asking for the computation)",
          "TI = TD50/ED50 = 2 — a small ratio: only two effective doses fit before the median toxic dose",
          "Treat as a ↓ TI drug: expect the stem's answer to be serum monitoring and cautious titration.",
        ],
        [
          "A patient on warfarin, theophylline, digoxin, an antiepileptic, or lithium — or any vignette naming a level draw (INR, drug level)",
          "↓ TI by list membership: 'drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!)'",
          "Name the specific surrogate: INR for warfarin; serum concentrations for theophylline, digoxin, lithium; antiepileptic drug levels (eg, free phenytoin).",
        ],
        [
          "A drug's toxicity curve nearly superimposes on its efficacy curve",
          "TI approaching 1 — the drug is effectively unusable without measurement-guided dosing",
          "The stem's answer is the definition: a narrow therapeutic window — the concentration range that is 'safe and effective' is too small to dose into blindly.",
        ],
        [
          "A preclinical/toxicology stem: 'the dose killing 50% of rats' or 'median lethal dose'",
          "LD50, not TD50 — 'LD50 (lethal median dose) often replaces TD50 in animal studies.'",
          "Recognize the endpoint substitution: death in animals as the measurable stand-in for human median toxicity.",
        ],
      ],
      caption:
        "Every row is the same rule at a different altitude: compute or recognize the gap (TI), then translate it into the monitoring decision. The numbers row is the free-points version — the equation is a division problem, and the trap is only in which term goes on top (TD50, the toxic dose — TITE). The list row is the recognition version, and the five drugs are worth memorizing verbatim because the book marks them with its own exclamation: 'Warning! These drugs are lethal!'",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A pharmacology figure shows two cumulative frequency curves labeled 'Efficacy' and 'Toxicity', plotted against 'Log (drug concentration)' with the y-axis reading '% of patients responding'. Dashed vertical lines drop from each curve's crossing of the 50% line to the x-axis, labeled ED50 and TD50. The question asks what the distance between the two dashed lines represents, and which drug (of the options) would show the widest such distance.",
        discriminator:
          "Two quantal curves + the ED50→TD50 gap → the gap IS the therapeutic index (TD50/ED50); a wide gap = a high-TI, safe drug",
        concept: "The quantal panel's geometry and the TI as the separation between curves",
        answer:
          "The y-axis labels are the giveaway that this is the QUANTAL plot — '% of patients responding' — so each curve is a cumulative count of patients: the efficacy curve crosses 50% of patients at the ED50 ('ED = Effective dose'), and the toxicity curve crosses 50% of patients at the TD50 ('TD = Toxic dose'). The horizontal separation between those two crossings is the panel's own annotation: 'Therapeutic index'. Expressed as the section's equation it is TI = TD50/ED50 — 'TD50 median toxic dose' over 'ED50 median effective dose' — and the mnemonic the book itself prints is TITE: Therapeutic Index = TD50 / ED50. The drug with the widest gap is the one whose toxic thresholds sit far above its effective thresholds: among typical options, a high-TI drug such as amoxicillin (whose toxic dose is orders of magnitude above its effective dose) shows the widest separation, while the narrow-gap distractors (warfarin, lithium, digoxin) are the book's own ↓ TI monitoring list.",
      },
      {
        stem:
          "A vignette describes an elderly patient on multiple medications; one of them requires periodic blood draws to keep the dose inside its safe range. The options list drug after drug; the question asks which one accounts for the monitoring, or which property explains it.",
        discriminator:
          "The drug is one of the five: warfarin, theophylline, digoxin, antiepileptic drugs, lithium — 'drugs with ↓ TI require frequent monitoring'",
        concept: "The margin note's low-TI monitoring list",
        answer:
          "The margin note prints the list AND the rule in one sentence, verbatim: 'Safer drugs have ↑ TI; drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!).' Each of the five is monitored by a surrogate of its concentration — INR for warfarin, serum theophylline, serum digoxin (with apical pulse), antiepileptic drug levels (eg, free phenytoin), and serum lithium — because TD50 sits close enough to ED50 that ordinary pharmacokinetic variability (renal function, interactions, adherence) can push a patient from therapeutic to toxic between clinical visits. Any option drug not on the list that is described as 'wide safety margin' or 'routinely dosed without levels' is the distractor; the answer is the listed drug or, if the question asks for the PROPERTY, 'a low therapeutic index — the median toxic dose is close to the median effective dose'.",
      },
      {
        stem:
          "A quantitative stem hands over numbers: drug X produces its therapeutic effect in 50% of patients at 50 mg and toxicity in 50% of patients at 400 mg; drug Y is effective in 50% at 50 mg and toxic in 50% at 100 mg. The question asks for each drug's therapeutic index and which is safer — or it asks directly what quantity compares the safety of two drugs.",
        discriminator:
          "TI = TD50/ED50 — compute: X = 400/50 = 8 (safer), Y = 100/50 = 2 (monitor) — toxic dose on top",
        concept: "Computing and comparing the therapeutic index",
        answer:
          "The section's equation does the work: TI = TD50/ED50, with the 'TD50 median toxic dose' as the numerator and the 'ED50 median effective dose' as the denominator (TITE — the book's own mnemonic keeps the fraction right). Drug X: 400/50 = 8 — eight effective doses fit inside the median toxic dose, a wide margin, 'Safer drugs have ↑ TI'. Drug Y: 100/50 = 2 — only two effective doses before median toxicity: a ↓ TI drug in the warfarin/theophylline/digoxin/antiepileptic/lithium class, 'require frequent monitoring... Warning! These drugs are lethal!'. The only ways to miss this item are inverting the fraction (ED50/TD50 gives 1/8 and 1/2 — a ratio BELOW 1 for every usable drug, the classic trap) or reading the doses off the wrong curve. If the stem's numbers are LETHAL doses in animals instead, apply the fine print: 'LD50 (lethal median dose) often replaces TD50 in animal studies.'",
      },
    ],
    traps: [
      {
        a: "The therapeutic index is ED50 divided by TD50 — 'the effective dose over the toxic dose'",
        b: "Inverting the fraction (putting the effective dose on top)",
        whyConfused:
          "Both doses are '50' doses from the same two curves, and either division yields a tidy number — the direction feels arbitrary until the meaning is attached",
        keyDifference:
          "The book prints the orientation twice: the equation ('TD50 median toxic dose' over 'ED50 median effective dose') and its own mnemonic 'TITE: Therapeutic Index = TD50 / ED50.' — toxic on top. The meaning: the ratio answers 'how many effective doses fit inside the median toxic dose?' A usable drug always has TI > 1; inverted, every drug scores below 1 and the number stops meaning anything. Numbers example: TD50 400 / ED50 50 → TI 8 (safe); the inverted 50/400 = 0.125 matches no answer key and no intuition.",
        clue:
          "Before computing, recite TITE (the source's own mnemonic): TD before ED, toxic on top. Mnemonic: NUMERATOR TOXIC, DENOMINATOR THERAPEUTIC — the dose that harms on top of the dose that heals.",
      },
      {
        a: "ED50 is the dose that produces 50% of the MAXIMAL EFFECT, and TD50 the dose producing 50% of maximal toxicity",
        b: "Reading the quantal panel's ED50/TD50 with graded-curve logic (the EC50 habit from the efficacy-vs-potency and receptor-binding topics)",
        whyConfused:
          "The curves look identical — two sigmoids on a log dose axis — and the previous pages' graded curves taught '50% of Emax' as the midpoint reading",
        keyDifference:
          "The axis label is the discriminator: this panel's y-axis is '% of patients responding', not '% of maximal effect'. ED50 is the dose at which 50% OF PATIENTS experience the effect (median effective dose); TD50 is the dose at which 50% OF PATIENTS experience toxicity (median toxic dose). The graded-curve midpoint (50% of Emax) is the EC50 of the previous topics — a magnitude question about one patient (or one tissue); the quantal crossing is a headcount question about a population. The exam separates them with exactly this axis label, and the panel even prints its own footnote to settle it: 'ED = Effective dose / TD = Toxic dose.'",
        clue:
          "Find the y-axis label first: '% of patients responding' = quantal = count heads; '% of maximal effect' = graded = EC50/Emax logic. Mnemonic: QUANTAL = COUNT HEADS, NOT EFFECT.",
      },
      {
        a: "A drug with a low ED50 (very potent) is therefore a safe drug — 'it only takes a tiny dose'",
        b: "Equating potency with safety (small effective dose read as small risk)",
        whyConfused:
          "'Low dose' sounds like 'low exposure', so a potent drug feels harmless; both 'good' adjectives attach to the same drug in the stem's flattering description",
        keyDifference:
          "Safety is a RATIO (TD50/ED50), not a position. The ED50 fixes only the denominator's location on the dose axis; the TI additionally needs the TD50 — where the toxicity curve crosses. A drug can be extremely potent AND extremely dangerous (TD50 barely above ED50 — the ↓ TI pattern), or weak AND safe (both doses high, ratio large). The page's own sentence makes the independence explicit: 'Safer drugs have ↑ TI' — nothing about ED50 alone. The monitored five include potent and impotent drugs alike; what they share is the narrow gap, not the position.",
        clue:
          "When a stem flatters a drug's potency, ask where the TOXICITY curve sits before answering any safety question — potency answers 'how much drug', safety answers 'how far apart'.",
      },
      {
        a: "LD50 is the dose that kills 50% of the human study population — or any stem treating LD50 as a routinely measured human quantity",
        b: "Detaching the LD50 note from its qualifier 'in animal studies' (or swapping TD50 and LD50 endpoints)",
        whyConfused:
          "Both are 'the dose that harms half' — TD50 at the toxicity endpoint, LD50 at the lethal endpoint — and the abbreviations differ by one letter",
        keyDifference:
          "The book's sentence is precise: 'LD50 (lethal median dose) often replaces TD50 in animal studies.' The median LETHAL dose is measured preclinically, in animals — a human median lethal dose cannot ethically be measured, which is exactly WHY the substitution exists. TD50 (median toxic dose) is the clinical/human-relevant term — the numerator of the therapeutic index. So an item asking 'what quantity, measured in animals, often stands in for TD50?' is answered 'LD50', and any option phrasing that puts LD50 into routine human dosing is the distractor.",
        clue:
          "Read the endpoint and the species together: toxicity in humans = TD50; lethality in animals = LD50. If the stem says 'median lethal dose', the sentence's own tail — 'in animal studies' — is attached.",
      },
    ],
    pivots: [
      {
        lookAlike: "A dose-response figure with sigmoid curves — is this the graded curve (efficacy/potency, receptor binding) or the quantal curve (therapeutic index)?",
        differentiator:
          "Read the y-axis label before anything else. '% of maximal effect' (or an unlabeled effect axis, 0-100) = GRADED curve: the vocabulary is EC50, Emax, potency, efficacy — one patient, one tissue, magnitude of effect. '% of patients responding' = QUANTAL curve: the vocabulary is ED50, TD50, TI, therapeutic window — a population, a headcount. The therapeutic-index figure always shows TWO curves ('Efficacy' and 'Toxicity') and always marks BOTH 50% crossings (ED50, TD50) with the annotation 'Therapeutic index' spanning the gap; the graded figures of the previous pages show agonist curves compared for position (potency) and ceiling (efficacy). The 50% line is read the opposite way in each: 50% of maximal effect (graded EC50) vs 50% of patients (quantal ED50/TD50).",
        correctPath:
          "Order of operations for any curve item: (1) y-axis label → quantal or graded; (2) if quantal, name both crossings (ED50 left on the efficacy curve, TD50 right on the toxicity curve); (3) state the ratio (TI = TD50/ED50 — TITE, toxic on top); (4) translate to the clinical rule — wide gap = ↑ TI = dose freely, narrow gap = ↓ TI = the monitoring list. If graded, leave this topic entirely and apply the two-question protocol of the receptor-binding note.",
      },
      {
        lookAlike: "A list of drugs, or a vignette patient on several — which property makes ONE of them the one that gets levels drawn?",
        differentiator:
          "Not potency (position of ED50), not efficacy (ceiling of the graded curve), not half-life alone, not 'strong drug' — the TI, a ratio of TWO doses from TWO curves. The book nominates its own five by name: 'drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!)'. Any option drug outside the list described as monitored is a distractor UNLESS the stem supplies numbers — then compute TI = TD50/ED50 and let the ratio, not the drug's reputation, decide: ratio near 1 = monitor, ratio large = safe.",
        correctPath:
          "Scan the options for the five names first (recognition path); if none appear or two appear, extract the numbers and compute (computation path); if the stem gives levels (INR 2–3, lithium 0.6–1.2 mEq/L, theophylline 10–20, digoxin ~0.5–2), the existence of a target RANGE is itself the tell — a maintained therapeutic window means a ↓ TI drug. Then answer with the mechanism: TD50 sits close to ED50, the window is narrow, and pharmacokinetic variability would push patients out of it unmonitored.",
      },
    ],
    miniCase: {
      vignette:
        "A 71-year-old man with severe COPD has been stable for two years on oral theophylline 300 mg twice daily, with serum concentrations consistently in the 10-20 mg/L range at clinic visits. He is admitted with community-acquired pneumonia and started on ciprofloxacin; his other medications are continued unchanged. Four days later he has nausea, vomiting, insomnia, a fine hand tremor, and a run of supraventricular tachycardia on the monitor; a theophylline level returns at 29 mg/L. The team stops the antibiotic, holds the theophylline, and draws serial levels. A student asks why this drug — of all his medications — is the one that gets routine serum monitoring.",
      question:
        "Which property of theophylline explains the requirement for frequent serum monitoring; what quantity expresses it; what does the therapeutic window mean in this patient's numbers; and why did the level rise on unchanged dosing?",
      options: [
        {
          label:
            "Theophylline has a low therapeutic index: its TD50 sits close to its ED50, so its therapeutic window — the range of drug concentrations that can safely and effectively treat disease — is narrow. The TI is expressed as TD50/ED50 ('TITE: Therapeutic Index = TD50 / ED50'), and for theophylline the ratio is small, so a concentration that was therapeutic at 10-20 mg/L became toxic at 29 mg/L after ciprofloxacin inhibited theophylline's metabolism (CYP1A2), raising the concentration while the dose never changed. Frequent monitoring exists precisely because pharmacokinetic variability moves the concentration inside or outside a window this narrow.",
          text:
            "Low TI (TD50 close to ED50) → narrow therapeutic window → the level, not the dose, is what must be tracked; CYP1A2 inhibition raised the concentration out of the window.",
          correct: true,
          why:
            "Correct on every element, and every element is the page's own. (1) THE PROPERTY: the margin note pairs the two halves, verbatim — 'Safer drugs have ↑ TI; drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!).' Theophylline is on the book's own five-name list. (2) THE QUANTITY: the TI = TD50/ED50, median toxic dose over median effective dose (TITE — the source's own printed mnemonic), and theophylline's ratio is small enough that its toxic thresholds overlap the population's effective thresholds — the two quantal curves nearly superimpose. (3) THE WINDOW: 'Therapeutic window—range of drug concentrations that can safely and effectively treat disease' — in this patient, roughly 10-20 mg/L; 29 mg/L is outside it, and the tremor, GI symptoms, and arrhythmia are the toxicity curve catching up with him. (4) WHY THE LEVEL ROSE: dosing is the input, concentration is the outcome — ciprofloxacin inhibits CYP1A2-mediated clearance, so the same 600 mg/day produced a higher steady-state concentration. That is the entire argument for therapeutic drug monitoring of ↓ TI drugs: the window is fixed, the pharmacokinetics are not.",
        },
        {
          label:
            "Theophylline has a high therapeutic index, but it is extremely potent — its ED50 is very low — so tiny dose changes produce large concentration swings, which is why levels are drawn.",
          text: "High TI + high potency — monitoring is a potency problem.",
          why:
            "The wrong-property distractor, and it fails twice. First, the direction is wrong: a HIGH TI is the definition of a forgiving drug — 'Safer drugs have ↑ TI' — and high-TI drugs (amoxicillin and its class) are precisely the ones dosed WITHOUT levels. Second, potency is a position, not a ratio: the ED50 says where the effective dose sits, and nothing about safety follows until the TD50 is also known — a potent drug can be safe (TD50 far away) or lethal (TD50 close), and theophylline is monitored because of the GAP, not the position. The vignette's own numbers argue against potency too: the dose never changed, yet the concentration moved 50% — that is clearance, not potency.",
        },
        {
          label:
            "The therapeutic index is ED50/TD50; for theophylline this ratio is just under 1, and monitoring is required because a ratio below 1 means the drug is ineffective for most patients.",
          text: "Inverted fraction — ED50 over TD50, ratio below 1 read as ineffectiveness.",
          why:
            "The flipped-fraction distractor. The book prints the orientation twice — the equation ('TD50 median toxic dose' over 'ED50 median effective dose') and the mnemonic 'TITE: Therapeutic Index = TD50 / ED50.' — toxic on top. Inverted, every usable drug scores below 1 and the number stops discriminating anything. The 'ineffective for most patients' clause is invented: the TI is a SAFETY measure ('Measurement of drug safety.'), not an effectiveness measure; effectiveness at the population level is what the quantal efficacy curve itself displays, and the ED50 already summarizes it.",
        },
        {
          label:
            "The TI is read off graded dose-response curves: ED50 is the concentration producing 50% of the MAXIMAL bronchodilation and TD50 the concentration producing 50% of maximal toxicity — theophylline's curves show the two 50%-of-maximum points nearly coinciding.",
          text: "Graded-curve reading — 50% of maximal effect, not 50% of patients.",
          why:
            "The wrong-axis distractor — the EC50 habit carried over from the graded-curve topics. The therapeutic-index panel is QUANTAL: its y-axis reads '% of patients responding', so ED50 is the dose at which 50% OF PATIENTS are effectively treated and TD50 the dose at which 50% OF PATIENTS show toxicity (the panel's own legend: 'ED = Effective dose / TD = Toxic dose'). The 50%-of-maximal-effect midpoint belongs to the graded curve of the efficacy-vs-potency and receptor-binding topics, where it defines EC50 and potency. Both readings use a sigmoid and a 50% line — the axis label is the only thing that separates them, and it is the whole point of the distinction.",
        },
        {
          label:
            "The therapeutic window is the time interval between doses during which the drug remains effective; theophylline's window is short (its half-life is brief), so levels must be checked to keep dosing inside the interval.",
          text: "Window as a TIME interval — a short half-life problem.",
          why:
            "The definition-substitution distractor. The book's sentence is exact: 'Therapeutic window—range of drug concentrations that can safely and effectively treat disease.' — a band of CONCENTRATIONS, bounded below by the minimum effective concentration and above by the minimum toxic concentration; time enters only through the pharmacokinetics that move the concentration through the band. Half-life determines how often a drug must be DOSED, not whether it requires LEVELS — plenty of short-half-life drugs are dosed without any monitoring (high TI), and lithium (monitored) has a long half-life handled by the kidney. The vignette's event was a concentration excursion on an UNCHANGED dosing interval — the opposite of a timing failure.",
        },
      ],
      reasoning:
        "The stem walks a ↓ TI drug through the exact chain the page teaches: list membership → ratio meaning → window definition → pharmacokinetic excursion. (1) LIST MEMBERSHIP: theophylline is one of the margin note's own five — 'drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!)' — so the monitored-drug question is answered by recognition before any mechanism is invoked. (2) THE QUANTITY: 'Measurement of drug safety.' is computed as TI = TD50/ED50 (TITE — the source's own mnemonic; toxic on top, effective on the bottom); a low ratio means the median toxic dose sits close to the median effective dose — the two quantal curves of the panel nearly superimpose. (3) THE WINDOW: 'Therapeutic window—range of drug concentrations that can safely and effectively treat disease' — operationally 10-20 mg/L here, with 29 mg/L outside it and the tremor, GI symptoms, and SVT as the toxicity made visible. (4) THE EXCURSION: the dose never changed — ciprofloxacin inhibited CYP1A2 clearance and moved the CONCENTRATION while the WINDOW stood still; monitoring exists because that asymmetry is the daily reality of narrow-window drugs. The distractors each miss one link: 'high TI + potency' (wrong property — safety is a ratio, not a position, and high TI means dosing WITHOUT levels); 'ED50/TD50 inverted' (wrong fraction orientation — the book's own mnemonic fixes it); '50% of maximal effect' (wrong axis — quantal curves count PATIENTS: 'ED = Effective dose / TD = Toxic dose'); 'window as time interval' (wrong definition — a concentration range, not a dosing interval).",
    },
  },
  mnemonics: [
    {
      code: "TITE: Therapeutic Index = TD50 / ED50 — the SOURCE'S OWN PRINTED MNEMONIC (book 233's margin, carried verbatim and attributed)",
      meaning:
        "The fraction's orientation in four letters: Therapeutic Index = TD50 / ED50 — the median TOXIC dose (TD50) on top, the median EFFECTIVE dose (ED50) on the bottom. The ratio asks how many effective doses fit inside the median toxic dose: more = safer. This code is printed in the margin of book 233 itself — it is the source's own mnemonic, not a KYP design, and it is the fastest defense against the inverted-fraction trap.",
      memorizes: "The section's equation — which dose is the numerator (TD50, toxic) and which the denominator (ED50, effective)",
      whenToUse:
        "Any item that computes, states, or tries to invert the therapeutic index — and any option list that offers ED50/TD50 as a decoy",
      clinical:
        "The five monitored drugs are all low-TITE-ratio drugs: warfarin, theophylline, digoxin, antiepileptic drugs, lithium — 'Warning! These drugs are lethal!' Their TD50 sits close enough to their ED50 that dosing without measuring invites toxicity.",
    },
    {
      code: "NUMERATOR TOXIC, DENOMINATOR THERAPEUTIC — the dose that harms on top of the dose that heals: push the ratio UP for safety",
      meaning:
        "The meaning behind TITE's orientation (KYP-original expansion of the source's mnemonic): the numerator TD50 is the dose that harms half of the patients; the denominator ED50 is the dose that heals half of them. Dividing harm by heal yields a pure safety number — bigger is safer, 1 is unusable, and below 1 (the inverted fraction) is meaningless because every usable drug's toxic dose exceeds its effective dose.",
      memorizes: "Why the fraction points the way it does — and what the ratio's magnitude means (8 = forgiving, 2 = monitor, ~1 = unusable)",
      whenToUse:
        "Quantitative stems (TD50 = 400, ED50 = 50 → TI 8) and any question asking what quantity compares the safety of two drugs",
      clinical:
        "A TI of 8 (like drug X in a typical stem) tolerates two-fold dosing errors, renal decline, and interactions; a TI of 2 tolerates none — that difference, not potency or efficacy, is what puts a drug on the level-monitoring list.",
    },
    {
      code: "QUANTAL = COUNT HEADS, NOT EFFECT — the y-axis is '% of patients responding': ED50 and TD50 are read at the 50-PATIENT line, never the 50-EFFECT line",
      meaning:
        "The panel's axis discipline (KYP-original): a quantal curve is a cumulative headcount — each patient either responds or does not, and the curve counts responders. So ED50 is where 50% OF PATIENTS are effectively treated and TD50 where 50% OF PATIENTS are toxic — the graded-curve habit ('50% of maximal effect' = EC50) does not apply, even though both plots show a sigmoid crossing a 50% line on a log dose axis. The panel's own footnote settles it: 'ED = Effective dose / TD = Toxic dose.'",
      memorizes: "The quantal-vs-graded distinction and the correct reading of the 50% line on the therapeutic-index figure",
      whenToUse:
        "Any figure whose y-axis reads '% of patients responding', and any option that defines ED50/TD50 as '50% of maximal effect/toxicity' — the classic carry-over trap from the graded-curve topics",
      clinical:
        "The distinction is why a drug can be 'effective' (most patients respond) and still be unsafe (many patients are toxic at overlapping doses) — effectiveness and toxicity are two separate headcounts with two separate curves.",
    },
    {
      code: "THE LETHAL FIVE — Warfarin · Theophylline · Digoxin · Antiepileptic drugs · Lithium — the ↓ TI drugs that require frequent monitoring (named for the source's own exclamation: 'Warning! These drugs are lethal!')",
      meaning:
        "The margin note's drug list with its rule attached (KYP-original ordering of the source's own five): all five have TD50 close to ED50, so their therapeutic windows are narrow and their concentrations are tracked by surrogates — INR for warfarin, serum theophylline, serum digoxin (check the apical pulse), antiepileptic drug levels (eg, free phenytoin), serum lithium. If a stem names one of the five, the monitoring question is already answered.",
      memorizes: "The five-drug low-TI monitoring list and the rule it instantiates: 'drugs with ↓ TI require frequent monitoring'",
      whenToUse:
        "'Which of the following requires serum level monitoring?', vignettes naming any of the five, and any question pairing a level draw (INR 2-3, lithium 0.6-1.2 mEq/L) with a request for the underlying property",
      clinical:
        "Warfarin (INR), theophylline (10-20 mg/L), digoxin (~0.5-2 ng/mL, apical pulse first), antiepileptics (drug levels; free phenytoin when albumin is low), lithium (0.6-1.2 mEq/L, thyroid and renal checks) — the level is the therapeutic window made measurable.",
    },
  ],
  rapidReview: {
    s30: [
      "Definition line, verbatim: 'Measurement of drug safety.'",
      "The equation, verbatim: TD50 over ED50 — numerator 'TD50 median toxic dose', denominator 'ED50 median effective dose'.",
      "The source's own mnemonic, verbatim: 'TITE: Therapeutic Index = TD50 / ED50.'",
      "The therapeutic window, verbatim: 'Therapeutic window—range of drug concentrations that can safely and effectively treat disease.'",
      "The margin rule, verbatim: 'Safer drugs have ↑ TI; drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!).'",
      "The LD50 note, verbatim: 'LD50 (lethal median dose) often replaces TD50 in animal studies.'",
      "The panel's axes: '% of patients responding' (100/50/0) vs 'Log (drug concentration)' — QUANTAL: the y-axis counts patients, not effect.",
      "The panel's curves and markers: 'Efficacy' curve left, 'Toxicity' curve right, 'ED50' and 'TD50' dropped at the 50% crossings, 'Therapeutic index' annotated between them.",
      "The panel's legend, verbatim: 'ED = Effective dose / TD = Toxic dose'.",
      "The clinical translation: wide curve separation = ↑ TI = dose freely; near-superimposed curves = ↓ TI = draw levels (the LETHAL FIVE).",
    ],
    m3: [
      "TITE (the source's own): Therapeutic Index = TD50 / ED50 — toxic on top, effective on the bottom.",
      "NUMERATOR TOXIC, DENOMINATOR THERAPEUTIC — push the ratio up for safety; near 1 = unusable, below 1 = inverted fraction trap.",
      "QUANTAL = COUNT HEADS, NOT EFFECT — '% of patients responding': ED50/TD50 read at the 50-PATIENT line.",
      "THE LETHAL FIVE — Warfarin, Theophylline, Digoxin, Antiepileptic drugs, Lithium: ↓ TI = frequent monitoring.",
      "The window is a CONCENTRATION range, not a dose and not a time interval; LD50 replaces TD50 in ANIMAL studies.",
    ],
    m10: [
      "The whole section in one breath: TI = TD50/ED50 (TITE); ↑ TI = safe; ↓ TI = monitor — warfarin, theophylline, digoxin, antiepileptics, lithium; window = the safe-and-effective concentration range; LD50 = the animal-study stand-in for TD50.",
      "Mechanism spine — the two quantal curves are cumulative headcounts of individual thresholds: efficacy thresholds crossed at ED50, toxicity thresholds at TD50; the horizontal gap between the 50% crossings IS the TI made visible.",
      "Why monitoring exists: dosing is controlled, concentration is not — absorption, clearance (CYP1A2 for theophylline), renal function (digoxin, lithium), and interactions move the concentration while the window stands still; a narrow window turns ordinary variability into toxicity.",
      "Computation drill: TI = TD50/ED50 — 400/50 = 8 (wide gap, dose freely) vs 100/50 = 2 (narrow gap, draw levels); the only trap is the fraction's orientation.",
      "Axis discipline across the chapter: graded curves (previous pages) = '% of maximal effect', EC50/Emax, one patient; quantal curves (this page) = '% of patients responding', ED50/TD50/TI, a population — the y-axis label is the discriminator.",
    ],
  },
  recall: [
    {
      q: "The Therapeutic index section's definition line, equation (with both dose labels), and therapeutic-window definition — verbatim.",
      a:
        "'Measurement of drug safety.' The equation: TI = TD50/ED50 — numerator 'TD50 median toxic dose' (the dose at which 50% of patients experience toxicity), denominator 'ED50 median effective dose' (the dose at which 50% of patients experience the therapeutic effect). The window: 'Therapeutic window—range of drug concentrations that can safely and effectively treat disease.'",
    },
    {
      q: "The margin note — the mnemonic and the warning, verbatim.",
      a:
        "'TITE: Therapeutic Index = TD50 / ED50.' — the SOURCE'S OWN printed mnemonic (book 233's margin). The warning: 'Safer drugs have ↑ TI; drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!).' The mnemonic is attributed to the source, not KYP-original.",
    },
    {
      q: "The Efficacy/Toxicity panel — its axes, curves, markers, and legend, and what is read where.",
      a:
        "Axes: y = '% of patients responding' with 100/50/0 gridlines; x = 'Log (drug concentration)'. Curves: the 'Efficacy' cumulative curve on the left and the 'Toxicity' cumulative curve on the right, both read at the 50% line — 'ED50' marks where the efficacy curve crosses 50% of patients, 'TD50' where the toxicity curve crosses 50% of patients, with the annotation 'Therapeutic index' spanning the gap between them. Legend, verbatim: 'ED = Effective dose / TD = Toxic dose'.",
    },
    {
      q: "Why does a ↓ TI drug require frequent monitoring — the mechanism, not just the rule?",
      a:
        "Because the therapeutic window — 'range of drug concentrations that can safely and effectively treat disease' — is narrow when TD50 sits close to ED50: the population's toxicity thresholds overlap its effective thresholds. Dose is what the clinician sets; concentration is what pharmacokinetics delivers, and renal function, hepatic clearance, and drug interactions move it (eg, ciprofloxacin inhibiting CYP1A2 raises theophylline). In a wide window those excursions are absorbed; in a narrow one they cross from therapeutic to toxic — so the concentration, not the dose, is what must be measured: INR for warfarin, serum theophylline, digoxin, and lithium, antiepileptic drug levels.",
    },
    {
      q: "What is LD50, and why does it 'often replace TD50'?",
      a:
        "'LD50 (lethal median dose) often replaces TD50 in animal studies.' — the median LETHAL dose: the dose at which 50% of animals die. It stands in for TD50 preclinically because a human median toxic dose can be estimated but a human median LETHAL dose cannot ethically be measured; animal LD50 is the measurable surrogate for the same safety question. TD50 remains the human-clinical term and the TI's numerator.",
    },
  ],
  related: [
    {
      title: "Receptor Binding — the Four Ways to Change the Agonist Curve",
      topicId: "receptor-binding",
      note:
        "The UPPER half of this same page (PH8, book 233) — excluded here, and the perfect contrast. Both sections draw sigmoid curves on log dose axes, but they answer different questions with different y-axes: receptor binding's panels are GRADED curves ('% of maximal effect' implied, EC50/Emax, one receptor system) asking WHAT THE DRUG DOES to the curve (competitive right shift, noncompetitive ceiling drop, partial and inverse agonism), while the therapeutic-index panel is a QUANTAL curve ('% of patients responding', ED50/TD50, a population) asking HOW FAR APART the helping curve and the harming curve sit. The page itself is one continuous lesson: the upper half classifies the molecules, the lower half prices their safety.",
    },
    {
      title: "Efficacy vs Potency — the Two-Axis Reading",
      topicId: "efficacy-vs-potency",
      note:
        "The preceding page (PH7, book 232) defines the graded curve's two axes — efficacy as the y-value (Emax) and potency as the x-value (EC50) — and its two rules ('Partial agonists have less efficacy than full agonists'; the axes are 'unrelated'). THIS page (PH9) completes the arc: potency answers where the effective dose sits, but the exam's safety questions need a SECOND curve before any answer exists — the toxicity curve — and the TI is the ratio of the two curves' 50% crossings. PH7's EC50 habit is also this page's central trap: the 50% line means 50% of maximal effect on a graded curve but 50% OF PATIENTS on a quantal curve. Read the three pages in order: axes (PH7), molecules (PH8), safety (PH9).",
    },
    {
      title: "Pharmacokinetics — Bioavailability, Vd, Clearance, Half-life",
      topicId: "pharmacokinetics",
      note:
        "The machinery page (PH2, book 229) explains WHY the window can be crossed on an unchanged dose: the therapeutic window is a pharmacodynamic fact (fixed by the drug), while the concentration inside it is set by pharmacokinetics — bioavailability, volume of distribution, clearance, half-life — all of which move with renal function, hepatic enzymes, and interactions. The theophylline-ciprofloxacin case is the canonical example (CYP1A2 inhibition ↓ clearance → ↑ concentration at steady state), and digoxin and lithium are the renal-function analogues. Therapeutic drug monitoring of ↓ TI drugs is applied pharmacokinetics: measure the concentration the machinery delivered, titrate the dose back inside the window.",
    },
    {
      title: "Dosage Calculations — Loading Doses, Maintenance Doses, and Css",
      topicId: "dosage-calculations",
      note:
        "The arithmetic page (PH6) computes the dosing that keeps concentrations inside this page's window: maintenance dosing aims at a target average concentration ( Css = dosing rate / clearance ), loading doses fill the volume of distribution quickly ( LD = target × Vd / F ), and every target concentration in those formulas is a point inside a therapeutic window. The two pages meet at therapeutic drug monitoring: when the measured level is outside the window of a ↓ TI drug (warfarin, theophylline, digoxin, antiepileptics, lithium), the dosage-calculation toolkit is what corrects it — and the narrow window is WHY those drugs get the arithmetic and the level draws while wide-window drugs are simply dosed.",
    },
  ],
  crossLinks: [
    {
      subject: "Toxicology and drug development (LD50, margin of safety, and the preclinical measured endpoint)",
      connection:
        "The page's fine print is the doorway to toxicology: 'LD50 (lethal median dose) often replaces TD50 in animal studies.' Preclinical safety testing quantifies a drug's lethality in animals because human median toxic and lethal doses cannot ethically be measured — LD50 (and its relatives, the NOAEL and the margin of safety) is the measurable stand-in, and the same ratio logic carries over: margin of safety compares the toxic (or lethal) dose to the effective dose, exactly as TI = TD50/ED50 does. Overdose toxicology applies the same curves in reverse: an ingestion pushes a patient up the toxicity quantal curve, and the antidote question is how far up the efficacy curve of the ANTIDOTE must go — the paracetamol (acetaminophen)-N-acetylcysteine pair being the exam's favorite, where the hepatotoxic threshold sits close enough to the therapeutic dose to make the window genuinely narrow.",
    },
    {
      subject: "Psychiatry (lithium — the monitored mood stabilizer)",
      connection:
        "Lithium is the margin note's fifth drug and psychiatry's canonical narrow-window medication: 'drugs with ↓ TI require frequent monitoring (eg, ... lithium; Warning! These drugs are lethal!).' Its therapeutic window is narrow enough to require serum levels (roughly 0.6-1.2 mEq/L for maintenance), and its toxicity is a staircase of familiar systems — fine tremor, GI upset, and polyuria early; coarse tremor, ataxia, and confusion as levels climb; seizures and arrhythmia at the top. The renal and thyroid monitoring (creatinine, TSH) is the same principle one step upstream: lithium is cleared entirely by the kidney, so the pharmacokinetics that move the concentration (dehydration, NSAIDs, thiazides, ACE inhibitors) are the clinical threats to the window. Every lithium vignette is secretly a therapeutic-index question.",
    },
    {
      subject: "Cardiovascular medicine (warfarin and digoxin — two windows, two surrogates)",
      connection:
        "Two of the LETHAL FIVE live in cardiology, each monitoring a different surrogate of its window. Warfarin: the INR — a FUNCTIONAL assay (the effect, not the concentration) is the window's stand-in, target roughly 2-3 for most indications, because warfarin's toxic endpoint (bleeding) sits close to its effective endpoint (anticoagulation) and its pharmacokinetics are moved by CYP2C9 interactions, vitamin K intake, and illness. Digoxin: the serum concentration (~0.5-2 ng/mL) plus the apical pulse before dosing, with toxicity announced by GI upset, xanthopsia (yellow-green vision), and arrhythmia — and compounded by the hypokalemia that sensitizes the Na+/K+-ATPase (the diuretic interaction that fills exam vignettes). Both drugs instantiate the page's rule verbatim: ↓ TI, frequent monitoring, 'Warning! These drugs are lethal!'",
    },
    {
      subject: "Neurology (antiepileptic drugs — levels, free levels, and zero-order kinetics)",
      connection:
        "The antiepileptic drugs are the margin note's fourth entry, and they stretch the TI concept in two directions. First, monitoring: seizure control vs dose-related neurotoxicity (nystagmus, ataxia, diplopia for phenytoin) is a narrow-enough window that levels are routine — and for phenytoin the FREE level is the right measurement, because the drug is highly protein-bound and the free fraction is the pharmacologically active window occupant (in hypoalbuminemia or with displacing drugs, the total level lies). Second, kinetics: phenytoin saturates its metabolizing enzymes within the therapeutic range — zero-order kinetics, the elimination-of-drugs topic — so a small dose increase near the top of the window produces a disproportionate concentration jump. The TI and the kinetics compound: the narrow window is also a window whose position the patient's own enzymes shift.",
    },
  ],
};
