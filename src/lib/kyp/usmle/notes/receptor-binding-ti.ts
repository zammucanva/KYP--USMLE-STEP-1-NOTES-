import type { KypUsMLENote } from "../types";

// Pharmacology — PHARMACOKINETICS AND PHARMACODYNAMICS banner (PH-batch 7).
// Source: pdf 255 / book 233 (Receptor binding + Therapeutic index). The page
// carries: THREE receptor-binding dose-response panels with white-on-teal
// A/B/C letter chips — panel A: the black "Agonist" reference curve + a pink
// right-shifted curve reaching the SAME 100% ceiling, labeled "Agonist +
// competitive antagonist", with the red right-arrow "Reduced potency"; panel
// B: the "Agonist" curve + an orange curve at the SAME midpoint but a LOWER
// ~50% plateau, labeled "Agonist + noncompetitive antagonist", with the red
// down-arrow "Reduced efficacy"; panel C: the "Agonist" curve + TWO green
// "Partial agonist" curves with lower plateaus (two red down-arrows, the
// second "Reduced efficacy") whose half-max markers straddle the agonist's
// ("Independent potency"); every panel carries the plain "Agonist" curve
// (hence "Agonist" ×3 in the text layer) — there is no agonist-alone panel.
// Census method note: pdfimages reports ZERO rasters; the VLM confirm
// (ph7-vlm-census.ts) was attempted twice and failed both times with an
// auth error (401 missing X-Token), so the panel geometry above was pinned
// from the PDF's own VECTOR layer (PyMuPDF get_drawings: 147 paths, path
// coordinates + stroke colors cross-referenced against word positions) —
// which is exact. The page also carries the complete 4-row agonist-types
// table (AGONIST WITH / POTENCY / EFFICACY / REMARKS / EXAMPLE: A
// Competitive antagonist ↓ / No change / Can be overcome by ↑ agonist
// concentration / Diazepam + flumazenil on GABA A receptor; B Noncompetitive
// antagonist No change / ↓ / Cannot be overcome by ↑ agonist concentration /
// Norepinephrine + phenoxybenzamine on α-receptors; C Partial agonist (alone)
// Independent / ↓ / Acts at same site as full agonist / Morphine vs
// buprenorphine at opioid μ-receptors; Inverse agonist (alone) Independent /
// Negative / Binds to a constitutively active receptor, thereby reducing its
// activity; has the opposite effect of an agonist / H1 antihistamines (eg,
// diphenhydramine)) and the therapeutic-index block (TI = measurement of drug
// safety; TD50 median toxic dose / ED50 median effective dose as a stacked
// display fraction; the source's own mnemonic "TITE: Therapeutic Index =
// TD50 / ED50." carried VERBATIM, with "TITE" printing in red bold; the
// therapeutic-window definition; the low-TI list — warfarin, theophylline,
// digoxin, antiepileptic drugs, lithium, each printing with a red initial
// capital — ending with the source's own "Warning! These drugs are lethal!"
// carried VERBATIM; LD50 (lethal median dose) often replaces TD50 in animal
// studies; the ED50/TD50 cumulative-response figure with Efficacy/Toxicity
// curves on "% of patients responding" vs "Log (drug concentration)" axes and
// the "Therapeutic index" bracket spanning the ED50→TD50 gap). The KYP memory
// layer (the four mnemonics below) is original; TITE and the Warning line are
// the source's own and are attributed as such everywhere they appear.

export const receptorBindingTi: KypUsMLENote = {
  id: "receptor-binding-ti",
  title: "Receptor Binding & Therapeutic Index",
  subtitle:
    "Two axes decide every agonist question — the DOSE axis (potency) and the EFFECT axis (efficacy) — and two doses decide every safety question (book 233): the THREE A/B/C RECEPTOR-BINDING PANELS — A: Agonist + competitive antagonist (right-shifted curve, same 100% ceiling, red right-arrow 'Reduced potency', overcome by ↑ agonist concentration — diazepam + flumazenil on GABA A receptor); B: Agonist + noncompetitive antagonist (same midpoint, LOWER plateau, red down-arrow 'Reduced efficacy', cannot be overcome — norepinephrine + phenoxybenzamine on α-receptors); C: Partial agonists (two lower-plateau curves, 'Reduced efficacy' + 'Independent potency', acts at same site as full agonist — morphine vs buprenorphine at opioid μ-receptors); the INVERSE AGONIST (binds to a constitutively active receptor, thereby reducing its activity — negative efficacy — H1 antihistamines eg diphenhydramine); and the THERAPEUTIC INDEX — TI = TD50 (median toxic dose) / ED50 (median effective dose), the measurement of drug safety, with the source's own 'TITE: Therapeutic Index = TD50 / ED50.' mnemonic and its own 'Warning! These drugs are lethal!' low-TI list (warfarin, theophylline, digoxin, antiepileptic drugs, lithium) requiring frequent monitoring.",
  subject: "Pharmacology",
  system: "Section II · High-Yield General Principles — Pharmacology: Pharmacokinetics and Pharmacodynamics",
  pilotCategory:
    "The complete four-row agonist-types table (A Competitive antagonist / B Noncompetitive antagonist / C Partial agonist (alone) / Inverse agonist (alone) across Potency, Efficacy, Remarks, Example) plus the two figure types the page pairs — the graded dose-response panels (competitive right-shift with intact ceiling; noncompetitive ceiling-drop at the same midpoint; partial-agonist lower plateaus with independent potency) and the quantal ED50/TD50 cumulative-response curves — with the source's own TITE mnemonic and 'Warning! These drugs are lethal!' line carried verbatim and attributed, the low-TI monitoring list, the therapeutic-window definition, and the LD50-in-animal-studies clause; the intended discriminator is reading WHICH AXIS moved (dose axis = potency, effect axis = efficacy) and WHOSE 50% the markers name (patients responding vs patients toxified).",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 233–233 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Receptor binding [the three A/B/C dose-response panels — Agonist + competitive antagonist with reduced potency; Agonist + noncompetitive antagonist with reduced efficacy; Partial agonist with reduced efficacy and independent potency; the four-row agonist-types table — A Competitive antagonist / B Noncompetitive antagonist / C Partial agonist (alone) / Inverse agonist (alone) — across AGONIST WITH / POTENCY / EFFICACY / REMARKS / EXAMPLE] and Therapeutic index [TI = TD50/ED50 with TD50 = median toxic dose and ED50 = median effective dose; the source's own TITE mnemonic; the therapeutic window; the low-TI drug list — warfarin, theophylline, digoxin, antiepileptic drugs, lithium — with the source's own 'Warning! These drugs are lethal!'; LD50 (lethal median dose) often replaces TD50 in animal studies; the ED50/TD50 cumulative-response curves])",
  tags: [
    "receptor binding",
    "agonist",
    "full agonist",
    "partial agonist",
    "inverse agonist",
    "competitive antagonist",
    "noncompetitive antagonist",
    "antagonist",
    "potency",
    "efficacy",
    "reduced potency",
    "reduced efficacy",
    "negative efficacy",
    "dose-response curve",
    "graded dose-response",
    "quantal dose-response",
    "cumulative response curve",
    "EC50",
    "ED50",
    "TD50",
    "LD50",
    "median effective dose",
    "median toxic dose",
    "lethal median dose",
    "Emax",
    "therapeutic index",
    "therapeutic window",
    "TITE",
    "drug safety",
    "diazepam",
    "flumazenil",
    "GABA A receptor",
    "norepinephrine",
    "phenoxybenzamine",
    "α-receptors",
    "alpha receptors",
    "morphine",
    "buprenorphine",
    "opioid μ-receptors",
    "mu receptors",
    "diphenhydramine",
    "H1 antihistamines",
    "constitutively active receptor",
    "warfarin",
    "theophylline",
    "digoxin",
    "antiepileptic drugs",
    "lithium",
    "narrow therapeutic index",
    "drug monitoring",
    "pharmacodynamics",
    "pharmacokinetics and pharmacodynamics",
  ],
  core: {
    what:
      "Three dose-response panels define the agonist types. PANEL A — AGONIST + COMPETITIVE ANTAGONIST: the antagonist competes at the receptor's binding site, so the agonist curve shifts RIGHT along the dose axis (it takes more agonist for the same effect — Reduced potency) while the ceiling is untouched (the curve still reaches 100% — efficacy No change); the right shift can be overcome by ↑ agonist concentration. Example: Diazepam (agonist) + flumazenil (competitive antagonist) on GABA A receptor. PANEL B — AGONIST + NONCOMPETITIVE ANTAGONIST: the antagonist removes receptor capacity, so the curve's plateau DROPS (Reduced efficacy) while its midpoint stays put (potency No change); the ceiling loss cannot be overcome by ↑ agonist concentration. Example: Norepinephrine (agonist) + phenoxybenzamine (noncompetitive antagonist) on α-receptors. PANEL C — PARTIAL AGONIST (ALONE): a partial agonist acts at the same site as a full agonist but plateaus lower (efficacy ↓) no matter the dose; its potency is Independent — the figure draws two partial agonists whose midpoints sit on either side of the full agonist's. Example: Morphine (full agonist) vs buprenorphine (partial agonist) at opioid μ-receptors. INVERSE AGONIST (ALONE): binds to a constitutively active receptor, thereby reducing its activity (efficacy Negative — below baseline) and has the opposite effect of an agonist; potency Independent. Example: H1 antihistamines (eg, diphenhydramine). THERAPEUTIC INDEX: a measurement of drug safety — TI = TD50 (median toxic dose) / ED50 (median effective dose), read off the quantal cumulative-response curves (Efficacy and Toxicity, % of patients responding vs Log (drug concentration)): safer drugs have ↑ TI; drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!). Therapeutic window — range of drug concentrations that can safely and effectively treat disease. LD50 (lethal median dose) often replaces TD50 in animal studies.",
    why:
      "This page is the grammar of every pharmacodynamics figure on the exam, and it runs on exactly two axes. A competitive antagonist and a noncompetitive antagonist BOTH weaken a drug, but they move different axes: the competitive antagonist forces you to slide right along the DOSE axis (potency ↓ — more agonist buys the same effect, and enough agonist buys everything back, because the two molecules are racing for the same seat), while the noncompetitive antagonist slides the curve DOWN the EFFECT axis (efficacy ↓ — receptors are removed from service, and no dose restores them). That single distinction is why flumazenil can be overcome by more diazepam but phenoxybenzamine cannot be overcome by more norepinephrine, and it is the whole content of the first two table rows. The partial agonist completes the pattern: it is not a second molecule fighting the agonist but a WEAKER agonist occupying the same site — its ceiling is intrinsically lower (efficacy ↓) and its potency is whatever it is (Independent), which is why buprenorphine can be more or less potent than morphine while still plateauing lower. The inverse agonist extends the axis below zero: only a constitutively active receptor has baseline activity to subtract, so an inverse agonist (diphenhydramine at H1) drives activity negative — the opposite effect of an agonist. The therapeutic index then converts the same curve-reading skill into a safety number: on the quantal curves, ED50 is where half the population responds and TD50 is where half the population toxifies, and the gap between those two markers IS the safety margin — narrow it (warfarin, theophylline, digoxin, antiepileptics, lithium) and the drug lands in the monitoring list.",
    keyIdea:
      "Read every receptor-binding figure through the two axes, then through whose 50% the question is quoting. STEP 1 — WHICH AXIS MOVED: same ceiling but shifted right = potency ↓ (competitive antagonist — overcome by ↑ agonist concentration); same midpoint but lower ceiling = efficacy ↓ (noncompetitive antagonist — cannot be overcome; or a partial agonist acting alone at the same site). STEP 2 — WHO OWNS THE CURVE: a second molecule named in the stem = antagonist (split by surmountability: competitive Yes / noncompetitive No); a single molecule given alone that just plateaus lower = partial agonist (potency Independent, efficacy ↓, acts at same site as full agonist). STEP 3 — BELOW ZERO: activity driven under baseline requires a constitutively active receptor = inverse agonist (efficacy Negative — H1 antihistamines, eg, diphenhydramine). STEP 4 — THE SAFETY CURVES: on the quantal Efficacy/Toxicity figure, mark ED50 (median effective dose — half respond) and TD50 (median toxic dose — half toxify); TI = TD50/ED50 is the gap between them — ↑ TI = safer, ↓ TI = the monitoring list (warfarin, theophylline, digoxin, antiepileptic drugs, lithium — 'Warning! These drugs are lethal!'), LD50 replaces TD50 in animal studies, and the therapeutic window is the concentration range between effective and toxic.",
  },
  mechanisms: [
    {
      id: "antagonist-axes-map",
      title:
        "The antagonist axes: competitive slides the dose axis, noncompetitive drops the effect axis",
      context: "The three receptor-binding panels + the first two table rows (book 233)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Draw the agonist's dose-response curve",
            sublabel:
              "Input — effect (0–100%) on the y-axis vs agonist dose on the x-axis: a sigmoid rising to Emax. Every panel of the figure carries this plain 'Agonist' reference curve; the question is always what a second molecule does to it.",
            variant: "input",
          },
          {
            id: "competitive",
            label: "COMPETITIVE ANTAGONIST → RIGHT SHIFT ON THE DOSE AXIS",
            sublabel:
              "Potency ↓, Efficacy No change — the curve needs more agonist for the same effect but still reaches 100% (the figure's red right-arrow, 'Reduced potency'). Because agonist and antagonist race for the same site, the shift Can be overcome by ↑ agonist concentration. Example: Diazepam (agonist) + flumazenil (competitive antagonist) on GABA A receptor.",
            variant: "process",
          },
          {
            id: "noncompetitive",
            label: "NONCOMPETITIVE ANTAGONIST → CEILING DROP ON THE EFFECT AXIS",
            sublabel:
              "Potency No change, Efficacy ↓ — the curve keeps its midpoint but plateaus lower (the figure's red down-arrow, 'Reduced efficacy'). Receptors are taken out of service, so the loss Cannot be overcome by ↑ agonist concentration. Example: Norepinephrine (agonist) + phenoxybenzamine (noncompetitive antagonist) on α-receptors.",
            variant: "process",
          },
          {
            id: "router",
            label: "THE SURMOUNTABILITY TEST — can ↑ agonist restore Emax?",
            sublabel:
              "Yes → competitive (the dose axis was the only thing moved). No → noncompetitive (the ceiling itself fell). This single question is the REMARKS column of the table and the discriminating detail exam stems hang on.",
            variant: "target",
          },
          {
            id: "output",
            label: "Name the row, then name the example pair",
            sublabel:
              "Output — row A Competitive antagonist (↓ / No change / overcome / diazepam + flumazenil on GABA A) vs row B Noncompetitive antagonist (No change / ↓ / not overcome / norepinephrine + phenoxybenzamine on α-receptors); which axis moved decides which row the answer key holds.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "competitive", label: "same site → out-race it" },
          { from: "trigger", to: "noncompetitive", label: "remove receptors" },
          { from: "competitive", to: "router", label: "ceiling intact → overcome by ↑ agonist" },
          { from: "noncompetitive", to: "router", label: "ceiling lost → not overcome" },
          { from: "router", to: "output", label: "the axis names the antagonist" },
        ],
      },
    },
    {
      id: "ti-margin-map",
      title:
        "The TI margin: TD50 over ED50 is the safety gap between the two quantal curves",
      context: "The therapeutic-index block + the ED50/TD50 cumulative-response figure (book 233)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Plot the quantal Efficacy and Toxicity curves",
            sublabel:
              "Input — % of patients responding (y-axis, 100/50/0) vs Log (drug concentration) (x-axis): one cumulative curve for the therapeutic effect (Efficacy) and a right-shifted one for the adverse effect (Toxicity). ED = Effective dose, TD = Toxic dose.",
            variant: "input",
          },
          {
            id: "ed50",
            label: "ED50 — the median effective dose",
            sublabel:
              "The concentration at which the Efficacy curve crosses 50% — half the population responds therapeutically. The denominator of the TI fraction.",
            variant: "process",
          },
          {
            id: "td50",
            label: "TD50 — the median toxic dose",
            sublabel:
              "The concentration at which the Toxicity curve crosses 50% — half the population shows toxicity. The numerator of the TI fraction (LD50, the lethal median dose, often replaces TD50 in animal studies).",
            variant: "process",
          },
          {
            id: "gap",
            label: "TI = TD50 / ED50 — THE SAFETY GAP",
            sublabel:
              "The figure brackets the distance between the ED50 and TD50 markers and labels it 'Therapeutic index' — the source's own mnemonic: 'TITE: Therapeutic Index = TD50 / ED50.' Safer drugs have ↑ TI (a wide gap — effect long before toxicity); drugs with ↓ TI (a narrow gap) require frequent monitoring: warfarin, theophylline, digoxin, antiepileptic drugs, lithium — 'Warning! These drugs are lethal!' (the source's own line).",
            variant: "target",
          },
          {
            id: "output",
            label: "The window, not just the ratio",
            sublabel:
              "Output — therapeutic window: the range of drug concentrations that can safely and effectively treat disease (between 'effective' and 'toxic' on the log-dose axis). A narrow-TI drug lives in a narrow window, which is exactly why its levels are drawn.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "ed50", label: "Efficacy curve at 50%" },
          { from: "trigger", to: "td50", label: "Toxicity curve at 50%" },
          { from: "ed50", to: "gap", label: "denominator" },
          { from: "td50", to: "gap", label: "numerator (LD50 in animals)" },
          { from: "gap", to: "output", label: "↑ TI safe · ↓ TI monitor" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "receptor-binding-map",
      title: "The receptor-binding and therapeutic-index map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source page (book 233) in four bands. BAND 1 — the three-panel curve row on original KYP axes: PANEL A (chip A) the agonist sigmoid plus the competitive-antagonist curve — right-shifted with the SAME ceiling, the red right-arrow between the midpoints reading 'Reduced potency' (overcome by ↑ agonist concentration); PANEL B (chip B) the agonist sigmoid plus the noncompetitive-antagonist curve — SAME midpoint with a LOWER plateau, the red down-arrow reading 'Reduced efficacy' (cannot be overcome), both half-max markers stacked at the same dose = potency No change; PANEL C (chip C) the agonist sigmoid plus TWO partial-agonist curves with lower plateaus — two red down-arrows ('Reduced efficacy') and midpoints straddling the agonist's ('Independent potency'). BAND 2 — the verbatim four-row agonist-types table as KYP table art (AGONIST WITH / POTENCY / EFFICACY / REMARKS / EXAMPLE, rows A–C carrying letter chips, the Inverse agonist row chipless). BAND 3 — the TI panel (the quantal Efficacy and Toxicity cumulative curves on % of patients responding vs Log (drug concentration) axes, the ED50 and TD50 markers with the safety-gap bracket labeled 'Therapeutic index', the ED = Effective dose / TD = Toxic dose legend) with the inverse-agonist card beside it: the constitutively-active-receptor glyph whose baseline activity arrow is driven below zero by drug binding (negative efficacy — H1 antihistamines, eg, diphenhydramine). BAND 4 — the TITE formula banner (the source's own mnemonic, carried verbatim), the therapeutic-window strip, and the five low-TI drug chips (warfarin, theophylline, digoxin, antiepileptic drugs, lithium) under the source's own 'Warning! These drugs are lethal!' line.",
      notice:
        "Census (pdfimages + PDF vector layer): ZERO raster images on this page — the three receptor-binding panels print as VECTOR line art (PyMuPDF get_drawings: 147 paths; the A/B/C chips are white letters on teal circles; the competitive curve is pink, the noncompetitive curve orange, the two partial-agonist curves green, the arrows red), the agonist-types table is pure text, and the therapeutic-index figure is vector (the Efficacy curve blue, the Toxicity curve red, the ED50/TD50 markers and the 'Therapeutic index' bracket in the vector layer). The text layer interleaves the three panels' labels ('Partial C' fuses the second Partial-agonist label with the C chip; the two 'Reduced efficacy' labels belong to panels B and C while 'Reduced potency' belongs to panel A). Everything here is an ORIGINAL KYP redraw — nothing is reproduced from the book; the table is also carried verbatim in the note's table block. The KYP memory layer (the four mnemonics) is original; 'TITE: Therapeutic Index = TD50 / ED50.' and 'Warning! These drugs are lethal!' are the source's own and are carried verbatim with attribution.",
    },
    {
      kind: "table",
      title:
        "Book 233 — the agonist-types table (carried verbatim, all four rows in printed order)",
      intro:
        "The complete table as printed — columns AGONIST WITH / POTENCY / EFFICACY / REMARKS / EXAMPLE; rows A, B, C carry the book's letter chips, the Inverse agonist row prints without one.",
      columns: [
        "AGONIST WITH",
        "POTENCY",
        "EFFICACY",
        "REMARKS",
        "EXAMPLE",
      ],
      rows: [
        [
          "A Competitive antagonist",
          "↓",
          "No change",
          "Can be overcome by ↑ agonist concentration",
          "Diazepam (agonist) + flumazenil (competitive antagonist) on GABA A receptor.",
        ],
        [
          "B Noncompetitive antagonist",
          "No change",
          "↓",
          "Cannot be overcome by ↑ agonist concentration",
          "Norepinephrine (agonist) + phenoxybenzamine (noncompetitive antagonist) on α-receptors.",
        ],
        [
          "C Partial agonist (alone)",
          "Independent",
          "↓",
          "Acts at same site as full agonist",
          "Morphine (full agonist) vs buprenorphine (partial agonist) at opioid μ-receptors.",
        ],
        [
          "Inverse agonist (alone)",
          "Independent",
          "Negative",
          "Binds to a constitutively active receptor, thereby reducing its activity; has the opposite effect of an agonist",
          "H1 antihistamines (eg, diphenhydramine)",
        ],
      ],
      caption:
        "The two antagonist rows are mirror images — Competitive trades ↓ potency for an intact ceiling (overcome by ↑ agonist concentration), Noncompetitive trades ↓ efficacy for an unchanged midpoint (cannot be overcome) — and the two single-molecule rows share 'Independent' potency while splitting the efficacy column (partial agonist ↓, inverse agonist Negative), because only a constitutively active receptor has baseline activity to push below zero.",
    },
    {
      kind: "steps",
      title: "Reading any receptor-binding figure in three moves (the panels, in application order)",
      intro:
        "The three panels arranged as a reading protocol — ceiling first, midpoint second, ownership third.",
      steps: [
        {
          label: "MOVE 1 — Read the CEILING (the effect axis = efficacy)",
          detail:
            "Does the curve in question still reach the agonist's 100% maximum? Yes → efficacy No change → a potency-only problem (competitive antagonist — the curve merely needed more dose). No → efficacy ↓ → either a noncompetitive antagonist (a second molecule removed receptors) or a partial agonist (a single molecule that simply plateaus lower — acts at same site as full agonist).",
        },
        {
          label: "MOVE 2 — Read the MIDPOINT (the dose axis = potency)",
          detail:
            "Where does the curve cross half of its own maximum? Shifted right relative to the agonist → potency ↓ ('Reduced potency' — the panel A arrow). Same dose → potency No change (the panel B geometry: the noncompetitive curve's half-max marker sits directly below the agonist's). A partial agonist's midpoint can sit on EITHER side — its potency is Independent (the panel C straddle).",
        },
        {
          label: "MOVE 3 — Ask WHO owns the curve (and can it be overcome?)",
          detail:
            "A second molecule named with the agonist = an antagonist: overcome by ↑ agonist concentration (competitive — flumazenil vs diazepam on GABA A) or not (noncompetitive — phenoxybenzamine vs norepinephrine on α-receptors). A single molecule given alone that plateaus lower = a partial agonist (buprenorphine vs morphine at opioid μ-receptors). A single molecule that pushes a constitutively active receptor BELOW baseline = an inverse agonist (H1 antihistamines, eg, diphenhydramine — negative efficacy, the opposite effect of an agonist).",
        },
      ],
    },
    {
      kind: "callout",
      variant: "memory",
      title: "The source's own memory layer — carried verbatim, on purpose",
      body:
        "Book 233 prints two memory devices of its own, and KYP carries both verbatim with attribution. (1) The TITE mnemonic, printed beside the therapeutic-index heading with 'TITE' in red bold: 'TITE: Therapeutic Index = TD50 / ED50.' — the fraction the whole block exists to teach. (2) The low-TI warning that closes the monitoring sentence: 'Safer drugs have ↑ TI; drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!).' — the five drug names print with red initial capitals (w-arfarin, t-heophylline, d-igoxin, a-ntiepileptic drugs, l-ithium), and the Warning line carries the same red-letter treatment. If you see 'TITE' or the 'Warning!' phrasing quoted anywhere, it is the book's voice, not KYP's. The four mnemonics in this note's memory section, by contrast, are original KYP designs — the page itself prints no other mnemonic.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A dose-response experiment is repeated in the presence of a fixed concentration of a novel ligand: the agonist curve is shifted right — a higher agonist concentration is now needed for every level of effect — but the maximal effect is unchanged, and a large enough agonist concentration fully restores the original curve.",
        discriminator:
          "Right shift with an intact ceiling (potency ↓, efficacy No change), surmountable — competitive antagonist",
        concept: "The dose-axis mover",
        answer:
          "A competitive antagonist (table row A: POTENCY ↓, EFFICACY No change, REMARKS Can be overcome by ↑ agonist concentration). The ligand competes at the receptor's binding site, so the agonist must out-number it — the figure's red right-arrow, 'Reduced potency'. The named pair: Diazepam (agonist) + flumazenil (competitive antagonist) on GABA A receptor.",
      },
      {
        stem: "After preincubation with an alkylating drug, an agonist's dose-response curve plateaus at roughly half of its original maximum; the concentration producing half of the new (lower) maximum is unchanged from control, and no increase in agonist concentration restores the original maximum.",
        discriminator:
          "Lower plateau at the same midpoint (potency No change, efficacy ↓), not surmountable — noncompetitive antagonist",
        concept: "The effect-axis mover",
        answer:
          "A noncompetitive antagonist (table row B: POTENCY No change, EFFICACY ↓, REMARKS Cannot be overcome by ↑ agonist concentration). Receptors are removed from service, so the ceiling falls and the dose axis is untouched — the figure's red down-arrow, 'Reduced efficacy'. The named pair: Norepinephrine (agonist) + phenoxybenzamine (noncompetitive antagonist) on α-receptors.",
      },
      {
        stem: "A compound binding the opioid μ-receptor is tested alone across a wide concentration range: its maximal effect plateaus well below morphine's, and it binds the same site morphine binds. Its concentration for half-maximal effect differs from morphine's — in one experiment it is lower, in another (a different compound) higher.",
        discriminator:
          "Given ALONE, lower plateau (efficacy ↓), same site as the full agonist, midpoint either side of the full agonist's (potency Independent) — partial agonist",
        concept: "The single-molecule ceiling",
        answer:
          "A partial agonist (table row C: POTENCY Independent, EFFICACY ↓, REMARKS Acts at same site as full agonist). The named pair: Morphine (full agonist) vs buprenorphine (partial agonist) at opioid μ-receptors. The figure's panel C shows exactly this: two partial-agonist curves plateauing below the agonist's 100% with half-max markers straddling it — 'Reduced efficacy' with 'Independent potency'.",
      },
      {
        stem: "In a population study, drug X produces its therapeutic effect in 50% of subjects at 10 mg and toxicity in 50% of subjects at 1,000 mg; drug Y produces 50% therapeutic response at 10 mg and 50% toxicity at 20 mg.",
        discriminator:
          "TI = TD50/ED50: drug X = 100 (wide margin, safer), drug Y = 2 (narrow margin, requires frequent monitoring)",
        concept: "The safety gap as a ratio",
        answer:
          "Therapeutic index = TD50 (median toxic dose) / ED50 (median effective dose), read from the quantal cumulative-response curves. Drug X's TI is 100 — a wide safety gap; drug Y's TI is 2 — a narrow gap, the warfarin/theophylline/digoxin/antiepileptic-drugs/lithium territory ('Warning! These drugs are lethal!'), where serum levels and frequent monitoring are mandatory. In animal studies, LD50 (lethal median dose) often replaces TD50.",
      },
    ],
    traps: [
      {
        a: "Competitive antagonist (potency ↓, efficacy No change)",
        b: "Noncompetitive antagonist (potency No change, efficacy ↓)",
        whyConfused:
          "Both 'weaken the agonist' and both appear as a second curve on the same dose-response axes; the potency/efficacy assignments are exact mirror images, so a half-remembered row inverts cleanly.",
        keyDifference:
          "Which axis moved: a competitive antagonist slides the curve RIGHT on the dose axis (ceiling intact — Can be overcome by ↑ agonist concentration); a noncompetitive antagonist drops the ceiling on the effect axis (midpoint unchanged — Cannot be overcome by ↑ agonist concentration).",
        clue:
          "Ask 'can more agonist get the max back?' — if yes, competitive; also check the ceiling first, before touching the midpoint.",
      },
      {
        a: "Partial agonist (alone)",
        b: "Agonist + noncompetitive antagonist",
        whyConfused:
          "Both pictures show a curve with a LOWER plateau next to the full agonist's 100% curve — geometrically near-identical panels.",
        keyDifference:
          "Ownership: the partial agonist is ONE molecule given alone that acts at the same site as the full agonist (potency Independent, efficacy ↓); the noncompetitive antagonist is a SECOND molecule that removes receptors (potency No change, efficacy ↓, cannot be overcome). The stem either names two drugs or one.",
        clue:
          "Count the molecules in the stem: two drugs together = antagonist question; one drug alone that plateaus low = partial agonist (buprenorphine vs morphine at opioid μ-receptors).",
      },
      {
        a: "TI = TD50/ED50 (toxic on top)",
        b: "TI = ED50/TD50 (effective on top)",
        whyConfused:
          "Both ratios use the same two numbers, and 'which is the numerator' is easy to flip under time pressure — the flipped value is even arithmetically plausible (a small number for a safe drug either way if you don't check the direction).",
        keyDifference:
          "The numerator is the TOXIC dose: TI = TD50 (median toxic dose) / ED50 (median effective dose). A safe drug has TD50 far above ED50, so ↑ TI means safety — the source's own mnemonic fixes the order: 'TITE: Therapeutic Index = TD50 / ED50.'",
        clue:
          "Toxic-Index-Top-Exposure: chant TITE before answering any TI arithmetic — and sanity-check that the safer drug got the BIGGER number.",
      },
      {
        a: "Therapeutic index (a ratio)",
        b: "Therapeutic window (a range)",
        whyConfused:
          "Both quantify safety and both are read from the same pair of curves; stems use the words interchangeably-sounding contexts ('margin of safety').",
        keyDifference:
          "TI is the single number TD50/ED50 (a measurement of drug safety at the 50% response level); the therapeutic window is the RANGE of drug concentrations that can safely and effectively treat disease — the interval between 'enough' and 'too much' on the concentration axis, not a ratio.",
        clue:
          "'Ratio' or a computed number → TI; 'range of concentrations' or dosing-interval language → window.",
      },
      {
        a: "Inverse agonist (efficacy Negative)",
        b: "Competitive antagonist (efficacy No change)",
        whyConfused:
          "Both bind the receptor and both reduce the effect of an agonist given alongside; both have 'Independent'-flavored potency language in the table.",
        keyDifference:
          "An inverse agonist binds to a constitutively active receptor, thereby REDUCING ITS ACTIVITY below baseline (negative efficacy — the opposite effect of an agonist; H1 antihistamines, eg, diphenhydramine); a competitive antagonist merely blocks the agonist's access, leaving basal activity untouched (efficacy No change for the antagonist alone).",
        clue:
          "Any stem language about baseline/constitutive receptor activity, or an effect in the ABSENCE of agonist, points to the inverse agonist row.",
      },
    ],
    pivots: [
      {
        lookAlike: "A two-curve dose-response figure with no numbers",
        differentiator:
          "Ceiling first, midpoint second: a curve reaching the same 100% but shifted right = competitive antagonist (↓ potency, overcome); a curve with a lower plateau = noncompetitive antagonist (if a second molecule) or partial agonist (if that curve is a drug tested alone), with the noncompetitive one keeping the agonist's midpoint and the partial agonist's midpoint free to sit anywhere.",
        correctPath:
          "Same ceiling → competitive. Lower ceiling + two molecules + not overcome → noncompetitive. Lower ceiling + one molecule alone → partial agonist (same site, Independent potency).",
      },
      {
        lookAlike: "A quantal-cumulative-response figure (two S-curves, '% of patients responding' axis)",
        differentiator:
          "This is the therapeutic-index figure, not a graded dose-response: the left curve is Efficacy (ED50 where it crosses 50%), the right curve is Toxicity (TD50 where IT crosses 50%), and the bracket between the two crossings is the safety margin — the exam wants TD50/ED50 or a monitoring judgment, not EC50/Emax language.",
        correctPath:
          "Compute TI = TD50/ED50 from the two 50% crossings; a narrow bracket (low TI) → frequent monitoring (warfarin, theophylline, digoxin, antiepileptic drugs, lithium); mention LD50 only if the stem says animal studies.",
      },
      {
        lookAlike: "'Which drug requires serum-concentration monitoring?'",
        differentiator:
          "Not a potency or efficacy question — a therapeutic-index question: the monitored drugs are the narrow-TI list (warfarin, theophylline, digoxin, antiepileptic drugs, lithium), not simply 'powerful' drugs.",
        correctPath:
          "Route to the ↓ TI row of the safety block: narrow window between therapeutic and toxic concentrations → frequent monitoring; the source's own flag for the list is 'Warning! These drugs are lethal!'",
      },
    ],
    miniCase: {
      vignette:
        "A pharmacology fellow characterizes two novel compounds. COMPOUND 1, tested at the GABA A receptor: when a fixed concentration is co-incubated with the receptor's full agonist, the agonist's dose-response curve requires three-fold higher agonist concentrations at every effect level, but the maximal effect is identical to control — and at a ten-fold higher agonist concentration the control curve is fully restored. COMPOUND 2, tested at the opioid μ-receptor: administered ALONE over a wide concentration range, it produces a dose-dependent effect that plateaus at 60% of morphine's maximum; competition binding shows it occupies the same site morphine occupies, and its concentration for half-maximal effect is lower than morphine's. Which assignment matches the two compounds?",
      question:
        "Select the correct table classification for COMPOUND 1 (at GABA A) and COMPOUND 2 (at the μ-receptor).",
      options: [
        {
          label:
            "COMPOUND 1 = competitive antagonist (potency ↓, efficacy No change, can be overcome by ↑ agonist concentration); COMPOUND 2 = partial agonist (potency Independent, efficacy ↓, acts at same site as full agonist)",
          text: "One axis moved for the first; a lower ceiling from a single molecule for the second.",
          correct: true,
          why:
            "Correct on every reading. COMPOUND 1: the curve moved ONLY along the dose axis (three-fold right shift at every effect level) with the ceiling intact (maximal effect identical to control) and the shift was surmounted by more agonist — exactly row A (Can be overcome by ↑ agonist concentration), the flumazenil-vs-diazepam geometry on GABA A. COMPOUND 2: given ALONE, it plateaus at 60% of the full agonist's maximum (efficacy ↓), occupies the same site as morphine (acts at same site as full agonist), and its half-maximal concentration being LOWER than morphine's changes nothing about its class — a partial agonist's potency is Independent, which is why the source figure draws one partial agonist left of and another right of the full agonist's midpoint. That is row C: morphine (full agonist) vs buprenorphine (partial agonist) at opioid μ-receptors.",
        },
        {
          label:
            "COMPOUND 1 = noncompetitive antagonist (potency No change, efficacy ↓, cannot be overcome); COMPOUND 2 = partial agonist (potency Independent, efficacy ↓, acts at same site)",
          text: "The classic swap — the wrong axis.",
          why:
            "Misreads COMPOUND 1 on both tests the stem built in: the maximal effect was IDENTICAL to control (a noncompetitive antagonist would have lowered it — efficacy ↓) and the shift was fully reversed by raising agonist concentration ten-fold (a noncompetitive antagonist cannot be overcome). The three-fold right shift with an intact ceiling is the competitive signature — the dose axis moved, not the effect axis. COMPOUND 2 is classified correctly here, which is what makes this distractor attractive.",
        },
        {
          label:
            "COMPOUND 1 = competitive antagonist (potency ↓, efficacy No change, overcome by ↑ agonist); COMPOUND 2 = noncompetitive antagonist (potency No change, efficacy ↓, cannot be overcome)",
          text: "Both read as 'weaker than morphine' — but one molecule is not two.",
          why:
            "COMPOUND 1 is correct, but COMPOUND 2 fails the ownership test: it was administered ALONE, and a noncompetitive antagonist is by definition a SECOND molecule that removes receptors from an agonist's response — there is no agonist curve for it to suppress in this experiment. A single molecule given alone that plateaus at 60% of the full agonist's maximum while occupying morphine's own binding site is the definition of a partial agonist (row C), not an antagonist.",
        },
        {
          label:
            "COMPOUND 1 = partial agonist (potency Independent, efficacy ↓, same site); COMPOUND 2 = inverse agonist (potency Independent, efficacy Negative)",
          text: "Two single-molecule readings — the vocabulary flip.",
          why:
            "Both halves misfire. COMPOUND 1 was co-incubated WITH a full agonist and merely shifted that agonist's curve right, restoring it at high agonist concentration — a partial agonist's signature is its OWN lower plateau when given alone, not a reversible right shift of another drug's curve. COMPOUND 2 produced a POSITIVE effect (60% of morphine's maximum) — an inverse agonist drives a constitutively active receptor's activity BELOW baseline (efficacy Negative, the opposite effect of an agonist; the H1-antihistamine row), which this compound plainly did not do.",
        },
        {
          label:
            "COMPOUND 1 = inverse agonist (efficacy Negative); COMPOUND 2 = competitive antagonist (potency ↓, efficacy No change, overcome by ↑ agonist)",
          text: "The full inversion — every row one slot off.",
          why:
            "Doubles down on both errors. Nothing in COMPOUND 1's data involves baseline or constitutive receptor activity — an inverse agonist requires a constitutively active receptor to push below zero, and the stem's compound instead produced a classic surmountable right shift. And COMPOUND 2 was given ALONE with no agonist present to compete against — a competitive antagonist is only defined relative to an agonist occupying the same site; a lone molecule with its own 60% plateau at morphine's site is a partial agonist.",
        },
      ],
      reasoning:
        "The stem hands you one experiment per compound, each engineered around a single table row. COMPOUND 1's experiment tests the DOSE AXIS: a uniform three-fold right shift with an intact maximal effect is 'Reduced potency' (potency ↓, efficacy No change), and the ten-fold rescue is the stem's own execution of the REMARKS column — 'Can be overcome by ↑ agonist concentration' — the competitive-antagonist row (diazepam + flumazenil on GABA A receptor). COMPOUND 2's experiment tests CEILING and OWNERSHIP: administered ALONE (so not an antagonist of anything), it plateaus at 60% of morphine's maximum (efficacy ↓), binds morphine's own site (acts at same site as full agonist), and its half-maximal concentration sitting BELOW morphine's is the figure's 'Independent potency' point — a partial agonist can be more or less potent than the full agonist while still ceiling-lower (morphine vs buprenorphine at opioid μ-receptors). The distractors each fail exactly one hinge: the noncompetitive reading of COMPOUND 1 ignores the intact ceiling and the rescue (both disqualifying); calling COMPOUND 2 a noncompetitive antagonist ignores that it was alone; the partial-agonist reading of COMPOUND 1 ignores that it shifted ANOTHER drug's curve reversibly; the inverse-agonist readings require negative efficacy that neither compound showed.",
    },
  },
  mnemonics: [
    {
      code: "COMPETITIVE SLIDES RIGHT; NONCOMPETITIVE SINKS DOWN",
      meaning:
        "The antagonist geometry in one line: a COMPETITIVE antagonist SLIDES the curve RIGHT along the dose axis (potency ↓ — more agonist for the same effect, ceiling intact, overcome by ↑ agonist concentration — diazepam + flumazenil on GABA A); a NONCOMPETITIVE antagonist SINKS the ceiling DOWN the effect axis (efficacy ↓ — plateau lower, midpoint unchanged, cannot be overcome — norepinephrine + phenoxybenzamine on α-receptors).",
      memorizes: "Which antagonist moves which axis + the two example pairs",
      whenToUse: "Any two-curve dose-response figure or antagonist-classification stem",
      clinical:
        "The slide is reversible (out-dose the competitor — why flumazenil's blockade of diazepam yields to more agonist), the sink is not (phenoxybenzamine alkylates α-receptors — no norepinephrine infusion restores the deleted ceiling).",
    },
    {
      code: "FLUMAZENIL WRESTLES FOR THE SEAT; PHENOXYBENZAMINE WELDS IT SHUT",
      meaning:
        "The example pairs as mechanics: FLUMAZENIL WRESTLES FOR THE SEAT — a competitive antagonist grappling diazepam for the GABA A receptor's binding site, a contest more agonist molecules can win; PHENOXYBENZAMINE WELDS IT SHUT — a noncompetitive antagonist covalently locking α-receptors so norepinephrine finds no seat at any concentration.",
      memorizes: "Which example drug belongs to which antagonist row",
      whenToUse: "'Match the antagonist to its receptor/example' questions and mechanism-of-reversal stems",
      clinical:
        "Wrestling = surmountable (raise the agonist), welding = permanent (wait for new receptor synthesis) — the same distinction that makes flumazenil a reversible antidote while phenoxybenzamine's α-blockade outlasts any agonist.",
    },
    {
      code: "SAME SEAT, LOWER LADDER, FREE RUNG",
      meaning:
        "The partial agonist (row C) in three beats: SAME SEAT — acts at the same site as the full agonist (morphine vs buprenorphine at opioid μ-receptors); LOWER LADDER — efficacy ↓, its ceiling is intrinsically below the full agonist's no matter the dose ('Reduced efficacy'); FREE RUNG — potency is Independent, its midpoint can sit on any rung of the dose axis, left or right of the full agonist's ('Independent potency').",
      memorizes: "The partial-agonist row: Independent potency, ↓ efficacy, same site",
      whenToUse: "Any partial-agonist stem, especially ones quoting the compound's EC50 relative to the full agonist's",
      clinical:
        "Buprenorphine's lower ladder is the clinical point — a ceiling on opioid effect at the same μ-site morphine saturates — and its free rung is why 'more potent than morphine' and 'partial agonist' are fully compatible descriptions.",
    },
    {
      code: "THE GAP IS THE GUARDRAIL",
      meaning:
        "The therapeutic index read spatially: TI = TD50/ED50 is THE GAP between the ED50 and TD50 markers on the log-dose axis — the GUARDRAIL between 'half the patients treated' and 'half the patients toxified'. A WIDE gap (↑ TI) means the guardrail stands far from the traffic: safer drugs. A NARROW gap (↓ TI) means the guardrail is at the bumper: warfarin, theophylline, digoxin, antiepileptic drugs, lithium — 'Warning! These drugs are lethal!' (the source's own line) — the drugs whose serum concentrations are drawn.",
      memorizes: "TI = TD50/ED50 as a distance + the five narrow-TI monitoring drugs",
      whenToUse: "Any TI computation, margin-of-safety judgment, or 'which drug needs levels?' question",
      clinical:
        "The therapeutic window is the road between the guardrails — the range of drug concentrations that can safely and effectively treat disease — and in animal studies the far guardrail is measured in deaths instead (LD50, the lethal median dose, often replaces TD50).",
    },
  ],
  rapidReview: {
    s30: [
      "A Competitive antagonist: potency ↓, efficacy No change, can be overcome by ↑ agonist concentration — Diazepam (agonist) + flumazenil (competitive antagonist) on GABA A receptor",
      "B Noncompetitive antagonist: potency No change, efficacy ↓, cannot be overcome by ↑ agonist concentration — Norepinephrine (agonist) + phenoxybenzamine (noncompetitive antagonist) on α-receptors",
      "C Partial agonist (alone): potency Independent, efficacy ↓, acts at same site as full agonist — Morphine (full agonist) vs buprenorphine (partial agonist) at opioid μ-receptors",
      "Inverse agonist (alone): potency Independent, efficacy Negative — binds to a constitutively active receptor, thereby reducing its activity; has the opposite effect of an agonist — H1 antihistamines (eg, diphenhydramine)",
      "Competitive antagonist = right shift with the same ceiling (Reduced potency); noncompetitive antagonist = lower plateau at the same midpoint (Reduced efficacy); partial agonist = lower ceiling with Independent potency (its midpoint can sit on either side of the full agonist's)",
      "Therapeutic index = a measurement of drug safety: TI = TD50 (median toxic dose) / ED50 (median effective dose)",
      "The source's own mnemonic, carried verbatim: 'TITE: Therapeutic Index = TD50 / ED50.'",
      "Safer drugs have ↑ TI; drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!)",
      "Therapeutic window — range of drug concentrations that can safely and effectively treat disease",
      "LD50 (lethal median dose) often replaces TD50 in animal studies",
    ],
    m3: [
      "COMPETITIVE SLIDES RIGHT; NONCOMPETITIVE SINKS DOWN — which antagonist moves which axis",
      "FLUMAZENIL WRESTLES FOR THE SEAT; PHENOXYBENZAMINE WELDS IT SHUT — the two example pairs",
      "SAME SEAT, LOWER LADDER, FREE RUNG — the partial agonist (same site, ↓ efficacy, Independent potency)",
      "THE GAP IS THE GUARDRAIL — TI = TD50/ED50 as the distance between the 50% markers, and the five narrow-gap drugs",
    ],
    m10: [
      "Ceiling first, midpoint second: an intact 100% maximum with a right shift is ALWAYS competitive (potency-only problem); a lower plateau is efficacy — then count molecules (two = antagonist, one alone = partial agonist)",
      "The two 'Reduced efficacy' labels on the source figure belong to DIFFERENT rows: panel B's marks the noncompetitive antagonist's lowered ceiling; panel C's marks the partial agonists' — the ownership test separates them",
      "Only the competitive antagonist is surmountable — 'antagonist' alone never means 'can be overcome'; check the row (noncompetitive Cannot be overcome by ↑ agonist concentration)",
      "A partial agonist's potency is Independent — 'more potent than the full agonist' and 'lower ceiling than the full agonist' can both be true (buprenorphine vs morphine at opioid μ-receptors)",
      "Inverse agonists need a CONSTITUTIVELY ACTIVE receptor — efficacy Negative means below-baseline activity (H1 antihistamines, eg, diphenhydramine), not merely 'blocking'",
      "TI numerator check: TD50 (median toxic dose) on top, ED50 (median effective dose) on the bottom — the safer drug always gets the BIGGER number; LD50 replaces TD50 only in animal studies",
      "TI (a ratio at the 50% response level) vs therapeutic window (a range of concentrations) — stems phrase them differently and the answers differ accordingly",
      "Census quirk: page 255 / book 233 has ZERO raster images — three VECTOR curve panels (chips A/B/C as white letters on teal circles; pink competitive, orange noncompetitive, green partial curves; red potency/efficacy arrows), the text layer interleaving their labels ('Partial C' fuses the C chip with a Partial-agonist label), plus the pure-text table and the vector TI figure; the page's own memory devices are 'TITE: Therapeutic Index = TD50 / ED50.' and 'Warning! These drugs are lethal!' — everything else in the KYP memory layer is original",
    ],
  },
  recall: [
    {
      q: "Table row A, verbatim — competitive antagonist.",
      a: "A Competitive antagonist: POTENCY ↓; EFFICACY No change; REMARKS Can be overcome by ↑ agonist concentration; EXAMPLE Diazepam (agonist) + flumazenil (competitive antagonist) on GABA A receptor.",
    },
    {
      q: "Table row B, verbatim — noncompetitive antagonist.",
      a: "B Noncompetitive antagonist: POTENCY No change; EFFICACY ↓; REMARKS Cannot be overcome by ↑ agonist concentration; EXAMPLE Norepinephrine (agonist) + phenoxybenzamine (noncompetitive antagonist) on α-receptors.",
    },
    {
      q: "Table row C, verbatim — partial agonist.",
      a: "C Partial agonist (alone): POTENCY Independent; EFFICACY ↓; REMARKS Acts at same site as full agonist; EXAMPLE Morphine (full agonist) vs buprenorphine (partial agonist) at opioid μ-receptors.",
    },
    {
      q: "The inverse-agonist row, verbatim.",
      a: "Inverse agonist (alone): POTENCY Independent; EFFICACY Negative; REMARKS Binds to a constitutively active receptor, thereby reducing its activity; has the opposite effect of an agonist; EXAMPLE H1 antihistamines (eg, diphenhydramine).",
    },
    {
      q: "The therapeutic index: its definition, formula, and the two doses it is built from.",
      a: "Measurement of drug safety. TI = TD50 / ED50 — TD50 is the median toxic dose and ED50 is the median effective dose (printed as a stacked fraction: TD50 = median toxic dose over ED50 = median effective dose).",
    },
    {
      q: "The source's own therapeutic-index mnemonic, verbatim.",
      a: "'TITE: Therapeutic Index = TD50 / ED50.' — printed beside the therapeutic-index heading with 'TITE' in red bold (book 233); it is the source's own, carried verbatim.",
    },
    {
      q: "The therapeutic window, verbatim.",
      a: "Therapeutic window — range of drug concentrations that can safely and effectively treat disease.",
    },
    {
      q: "The low-TI monitoring sentence, verbatim.",
      a: "Safer drugs have ↑ TI; drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!).",
    },
    {
      q: "What replaces TD50 in animal studies, and what does the abbreviation expand to?",
      a: "LD50 (lethal median dose) often replaces TD50 in animal studies.",
    },
    {
      q: "What does each of the three A/B/C receptor-binding panels show?",
      a: "A: the Agonist reference curve plus Agonist + competitive antagonist — right-shifted with the same 100% ceiling, red right-arrow 'Reduced potency'. B: Agonist plus Agonist + noncompetitive antagonist — lower plateau at the same midpoint, red down-arrow 'Reduced efficacy'. C: Agonist plus two Partial agonist curves — lower plateaus with 'Reduced efficacy' (two down-arrows) and 'Independent potency' (their half-max markers straddle the agonist's). Every panel carries the plain Agonist reference curve.",
    },
  ],
  related: [
    {
      title: "Efficacy vs Potency: Reading Dose-Response Curves",
      topicId: "efficacy-potency",
      note: "The page immediately before this one (book 232) supplies the two definitions this page's panels assume — Emax as the ceiling and EC50 as the midpoint — so its graded-curve vocabulary (what a higher/lower curve means, what a left/right shift means) is the prerequisite for reading panels A/B/C; this page then adds the antagonists, the partial and inverse agonists, and converts the same axes into the quantal safety curves.",
    },
    {
      title: "Enzyme Kinetics & Drug-Receptor Interactions",
      topicId: "enzyme-kinetics",
      note: "The same-subsection Km/Vmax page (book 228) is this page's enzymatic twin: a reversible competitive inhibitor raises Km with Vmax unchanged (the right shift, ↓ potency), while noncompetitive inhibition lowers Vmax with Km unchanged (the ceiling drop, ↓ efficacy) — learn the geometry once and read it in both vocabularies.",
    },
    {
      title: "Drug Effect Modifications",
      topicId: "drug-effect-modifications",
      note: "The page immediately after this one (book 234) moves these same curves with time and exposure instead of a second molecule — tolerance and tachyphylaxis shift a drug's curve right chronologically — the dynamic counterpart to the static antagonists drawn here.",
    },
    {
      title: "Sympatholytics (α2-agonists) & α-Blockers",
      topicId: "sympatholytics-alpha-blockers",
      note: "Phenoxybenzamine's clinical home: the noncompetitive-antagonist example of this page's table is the irreversible α-blocker used in pheochromocytoma preparation — the 'cannot be overcome by ↑ agonist concentration' row made therapeutic (outlasting the tumor's norepinephrine surges).",
    },
    {
      title: "Elimination of Drugs: Zero & First Order",
      topicId: "elimination-of-drugs",
      note: "Why the ↓ TI drugs need frequent monitoring in kinetic terms: a drug's half-life and clearance set how fast its concentration traverses the therapeutic window — accumulation or rapid elimination narrows the effective window and forces the level-drawing this page's safety block mandates (warfarin, theophylline, digoxin, antiepileptic drugs, lithium).",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (enzyme kinetics — competitive vs noncompetitive inhibition)",
      connection:
        "The identical two-axis logic in enzyme language: a reversible competitive inhibitor raises the apparent Km with Vmax unchanged (more substrate needed — the dose-axis right shift, ↓ potency), while a noncompetitive inhibitor lowers Vmax with Km unchanged (fewer working enzyme molecules — the effect-axis ceiling drop, ↓ efficacy); on the Lineweaver-Burk plot the competitive line crosses the control on the Y-axis exactly the way the competitive-antagonist curve rejoins its ceiling at high dose.",
    },
    {
      subject: "Pharmacology (sedative-hypnotics and GABA A pharmacology — flumazenil, diazepam)",
      connection:
        "Row A's example pair at the bedside: benzodiazepines are GABA A positive allosteric modulators and flumazenil is the competitive antagonist that displaces them from the benzodiazepine site — reversible by design (out-competed by more agonist), which is both its utility in overdose and its limitation (short half-life, seizure risk in benzodiazepine-dependent patients).",
    },
    {
      subject: "Pharmacology (autonomic drugs — phenoxybenzamine and pheochromocytoma)",
      connection:
        "Row B's example pair in the autonomic nervous system: phenoxybenzamine irreversibly (noncompetitively) alkylates α-receptors, so no norepinephrine concentration — including the massive surges of a pheochromocytoma — can restore the blocked ceiling; that permanence is precisely why it is chosen for preoperative alpha-blockade before tumor removal, with phentolamine (reversible) as the short-acting sibling.",
    },
    {
      subject: "Pharmacology (opioids and opioid use disorder — morphine vs buprenorphine)",
      connection:
        "Row C's example pair: morphine is the full μ-agonist; buprenorphine is the high-affinity partial agonist at the same μ-site — its lower ceiling (efficacy ↓) caps respiratory depression and blocks exogenous full agonists from the shared seat, the pharmacology behind its use in opioid use disorder and its precipitation of withdrawal in full-agonist-dependent patients.",
    },
    {
      subject: "Pharmacology (therapeutic drug monitoring and toxicology)",
      connection:
        "The ↓ TI list is the monitoring clinic's intake sheet: warfarin (INR), theophylline, digoxin, antiepileptic drugs (many with level targets), and lithium all have narrow therapeutic windows — the concentration range between ED50-style efficacy and TD50-style toxicity is small enough that dosing to clinical effect alone is unsafe, exactly what the source flags with 'Warning! These drugs are lethal!'",
    },
  ],
};
