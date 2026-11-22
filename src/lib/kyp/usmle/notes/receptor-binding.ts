import type { KypUsMLENote } from "../types";

// Pharmacology — PHARMACOKINETICS AND PHARMACODYNAMICS banner (PH8).
// Source: pdf 255 / book 233 — the UPPER portion of the page is this one
// topic: the section header 'Receptor binding' with THREE vector
// dose-response panels (panel 1: 'Agonist' vs 'Agonist + competitive
// antagonist' with circled A and 'Reduced potency' — a parallel right
// shift at the same 100 ceiling; panel 2: 'Agonist' vs 'Agonist +
// noncompetitive antagonist' with circled B and 'Reduced efficacy' — a
// lower Emax at the same position; panel 3: 'Agonist' plus TWO partial
// agonist curves — 'Partial agonist' with 'Reduced efficacy' at the
// agonist's own EC50, and 'Partial C agonist' with circled C and
// 'Independent potency' right-shifted) and the AGONIST WITH table,
// verbatim: 'A Competitive antagonist | ↓ | No change | Can be overcome
// by ↑ agonist concentration | Diazepam (agonist) + flumazenil
// (competitive antagonist) on GABA A receptor.'; 'B Noncompetitive
// antagonist | No change | ↓ | Cannot be overcome by ↑ agonist
// concentration | Norepinephrine (agonist) + phenoxybenzamine
// (noncompetitive antagonist) on α-receptors.'; 'C Partial agonist
// (alone) | Independent | ↓ | Acts at same site as full agonist |
// Morphine (full agonist) vs buprenorphine (partial agonist) at opioid
// μ-receptors.'; 'Inverse agonist (alone) | Independent | Negative |
// Binds to a constitutively active receptor, thereby reducing its
// activity; has the opposite effect of an agonist | H1 antihistamines
// (eg, diphenhydramine)'. EXCLUSION: the 'Therapeutic index' section
// opens on this SAME page (lower half) — its header, 'Measurement of
// drug safety.', the TD50/ED50 equation, the therapeutic-window
// definition, the 'TITE' mnemonic, the low-TI monitoring list
// (warfarin, theophylline, digoxin, antiepileptic drugs, lithium), the
// LD50 note, and the Efficacy/Toxicity quantal-curve panel ALL belong
// to the separate pending topic PH9 (therapeutic-index) and are
// EXCLUDED here. Census (pdfimages + VLM): NO raster images on the page
// (pdfimages -list returned zero rows). The AGONIST WITH table prints
// in the text layer and is carried verbatim (ORIGINAL_KYP_ADAPTATION)
// in the table blocks and re-typeset in the registry visual's table
// grid. The three curve panels are vector line-art curves in the PDF
// and are redrawn as ORIGINAL_KYP_REDRAW vector sigmoids in the
// registry visual — the curve shapes are the standard Hill sigmoids of
// pharmacodynamics, re-drawn from scratch. The Receptor binding section
// prints NO margin mnemonic (the page's only printed mnemonic, 'TITE',
// lives in the EXCLUDED Therapeutic index section); the four mnemonic
// codes are KYP-original designs.

export const receptorBinding: KypUsMLENote = {
  id: "receptor-binding",
  title: "Receptor Binding",
  subtitle:
    "Four ways a molecule changes the agonist curve (book 233). COMPETITIVE ANTAGONIST — same receptor, same site: a parallel right shift, 'Reduced potency', efficacy 'No change', and it 'Can be overcome by ↑ agonist concentration' (diazepam + flumazenil on the GABA A receptor). NONCOMPETITIVE ANTAGONIST — the ceiling comes down: 'Reduced efficacy', potency 'No change', and it 'Cannot be overcome by ↑ agonist concentration' (norepinephrine + phenoxybenzamine on α-receptors). PARTIAL AGONIST (alone) — lower ceiling from the same site: efficacy ↓, potency 'Independent', it 'Acts at same site as full agonist' (morphine vs buprenorphine at opioid μ-receptors). INVERSE AGONIST (alone) — below the baseline: efficacy 'Negative', potency 'Independent', it 'Binds to a constitutively active receptor, thereby reducing its activity; has the opposite effect of an agonist' (H1 antihistamines, eg, diphenhydramine).",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Pharmacokinetics and Pharmacodynamics",
  pilotCategory:
    "The receptor-binding page's complete architecture — three dose-response panels (panel 1: 'Agonist' vs 'Agonist + competitive antagonist', circled A, 'Reduced potency'; panel 2: 'Agonist' vs 'Agonist + noncompetitive antagonist', circled B, 'Reduced efficacy'; panel 3: 'Agonist' plus two partial agonist curves — 'Partial agonist' with 'Reduced efficacy' at the agonist's own EC50 and 'Partial C agonist' with circled C and 'Independent potency') and the four-row AGONIST WITH table (competitive antagonist, noncompetitive antagonist, partial agonist, inverse agonist — POTENCY, EFFICACY, REMARKS, EXAMPLE columns with the diazepam + flumazenil, norepinephrine + phenoxybenzamine, morphine vs buprenorphine, and H1 antihistamines examples).",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 233 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Receptor binding — the three dose-response panels 'Agonist' vs 'Agonist + competitive antagonist' with 'Reduced potency', 'Agonist + noncompetitive antagonist' with 'Reduced efficacy', and the two partial agonist curves 'Partial agonist' and 'Partial C agonist' with 'Independent potency'; and the AGONIST WITH table verbatim — competitive antagonist 'Can be overcome by ↑ agonist concentration' with the diazepam + flumazenil GABA A example, noncompetitive antagonist 'Cannot be overcome by ↑ agonist concentration' with the norepinephrine + phenoxybenzamine α-receptor example, partial agonist 'Acts at same site as full agonist' with the morphine vs buprenorphine μ-receptor example, and inverse agonist 'Binds to a constitutively active receptor' with the H1 antihistamine example; the Therapeutic index section on the same page is EXCLUDED — it is the separate therapeutic-index topic)",
  tags: [
    "receptor binding",
    "agonist",
    "antagonist",
    "competitive antagonist",
    "noncompetitive antagonist",
    "irreversible antagonist",
    "partial agonist",
    "inverse agonist",
    "potency",
    "efficacy",
    "surmountable",
    "insurmountable",
    "agonist dose",
    "dose-response curve",
    "graded dose-response",
    "right shift",
    "parallel shift",
    "Emax",
    "EC50",
    "receptor occupancy",
    "constitutively active receptor",
    "constitutive activity",
    "intrinsic activity",
    "pharmacodynamics",
    "flumazenil",
    "diazepam",
    "GABA A receptor",
    "phenoxybenzamine",
    "norepinephrine",
    "alpha receptors",
    "buprenorphine",
    "morphine",
    "mu receptors",
    "diphenhydramine",
    "H1 antihistamines",
    "receptor reserve",
    "drug-receptor interactions",
  ],
  core: {
    what:
      "THREE PANELS, ONE TABLE, FOUR WAYS TO BIND. The page's three dose-response panels all plot effect against 'Agonist dose' with 100/50/0 gridlines, and each panel isolates one binding geometry. PANEL 1: 'Agonist' vs 'Agonist + competitive antagonist' — the second curve is a PARALLEL RIGHT SHIFT of the first, both still reaching the 100 ceiling; the circled A and the annotation 'Reduced potency' mark the shift. PANEL 2: 'Agonist' vs 'Agonist + noncompetitive antagonist' — the second curve keeps the same left-right position but plateaus far below 100; the circled B and 'Reduced efficacy' mark the dropped ceiling. PANEL 3: 'Agonist' plus TWO partial agonist curves — the upper 'Partial agonist' plateaus below the agonist at the agonist's OWN EC50 ('Reduced efficacy'), while the lower 'Partial C agonist' (the circled C marks table row C) plateaus lower still AND sits at a different position ('Independent potency'). The AGONIST WITH table then compresses all of it into four rows, verbatim: 'A Competitive antagonist | POTENCY ↓ | EFFICACY No change | Can be overcome by ↑ agonist concentration | Diazepam (agonist) + flumazenil (competitive antagonist) on GABA A receptor.'; 'B Noncompetitive antagonist | POTENCY No change | EFFICACY ↓ | Cannot be overcome by ↑ agonist concentration | Norepinephrine (agonist) + phenoxybenzamine (noncompetitive antagonist) on α-receptors.'; 'C Partial agonist (alone) | POTENCY Independent | EFFICACY ↓ | Acts at same site as full agonist | Morphine (full agonist) vs buprenorphine (partial agonist) at opioid μ-receptors.'; 'Inverse agonist (alone) | POTENCY Independent | EFFICACY Negative | Binds to a constitutively active receptor, thereby reducing its activity; has the opposite effect of an agonist | H1 antihistamines (eg, diphenhydramine)'.",
    why:
      "Each row is a different answer to the same two mechanistic questions: WHERE does the molecule bind, and WHAT does the bound receptor do? COMPETITIVE ANTAGONIST: it binds the agonist's own site, so agonist and antagonist compete by mass action — every agonist concentration behaves as if less agonist were present, which slides the whole log-dose curve right (↓ potency: more agonist needed for every level of effect) while the ceiling stands (efficacy 'No change'): enough agonist simply out-competes the antagonist, hence the REMARKS 'Can be overcome by ↑ agonist concentration'. Flumazenil occupies the benzodiazepine site on the GABA A receptor, so more diazepam can displace it. NONCOMPETATIVE ANTAGONIST: phenoxybenzamine binds α-receptors covalently (irreversibly) and removes receptors from the responding population — the fraction of receptors that can ever be occupied drops, and with it the maximal effect the system can mount (↓ efficacy) at UNCHANGED agonist sensitivity (potency 'No change': the surviving receptors bind agonist with the same affinity, so the curve keeps its position). No dose of norepinephrine resurrects a covalently blocked receptor — 'Cannot be overcome by ↑ agonist concentration'. (A receptor reserve blunts this at low antagonist doses: Emax falls only once the reserve is exhausted — but the exam row is the end-point: ceiling ↓.) PARTIAL AGONIST: buprenorphine 'Acts at same site as full agonist' — it occupies the μ receptor just as morphine does, but the drug-receptor complex couples to the response with lower intrinsic activity, so its curve plateaus below morphine's (↓ efficacy) even at 100% occupancy; its POTENCY is 'Independent' because affinity is a free parameter — panel 3 draws both cases, one partial agonist at the full agonist's own EC50 ('Reduced efficacy') and one shifted ('Independent potency'). INVERSE AGONIST: some receptors are 'constitutively active' — they signal with no ligand bound. An inverse agonist binds the constitutively active receptor and stabilizes the INACTIVE conformation, 'thereby reducing its activity' below baseline: efficacy 'Negative', the mirror image of an agonist, not the zero of a neutral antagonist. H1 antihistamines such as diphenhydramine quiet constitutively active H1 receptors rather than merely blocking histamine.",
    keyIdea:
      "Read every receptor-binding stem through the two-question protocol. QUESTION 1 — WHICH PARAMETER MOVED? A parallel RIGHT SHIFT with the ceiling intact is potency ↓ → competitive antagonist (row A). A DROPPED CEILING at the same position is efficacy ↓ → noncompetitive antagonist (row B) or partial agonist (row C) — distinguish them by who is on the receptor: an antagonist plus agonist (two drugs) is row B; the drug ALONE at the same site as the full agonist with its own submaximal ceiling is row C, potency 'Independent'. An effect BELOW BASELINE is efficacy negative → inverse agonist, which requires a constitutively active receptor. QUESTION 2 — IS IT SURMOUNTABLE? The REMARKS column is one test asked twice: 'Can be overcome by ↑ agonist concentration' (competitive — yes) vs 'Cannot be overcome by ↑ agonist concentration' (noncompetitive — no). The clinical corollary: a competitive overdose (flumazenil, naloxone) wears off as agonist accumulates or antagonist clears — re-sedation happens; an irreversible blocker (phenoxybenzamine) must wait for receptor resynthesis. So classify by geometry first (shift vs ceiling vs sub-baseline), then apply the surmountability test, and the row — with its example pair — names itself.",
  },
  mechanisms: [
    {
      id: "antagonist-geometry-competitive-vs-noncompetitive",
      title:
        "Antagonist geometry: competitive = surmountable right shift; noncompetitive = insurmountable ceiling drop",
      context: "Panels 1 and 2 and table rows A and B (book 233)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The agonist's own curve — effect vs Agonist dose, ceiling at 100",
            sublabel:
              "Input — the baseline every panel starts from: a graded dose-response sigmoid with a position (EC50) set by receptor affinity and a ceiling (Emax) set by the response the fully occupied receptor population can mount.",
            variant: "input",
          },
          {
            id: "compete",
            label: "Competitive antagonist binds the SAME site — mass-action contest",
            sublabel:
              "The antagonist occupies the agonist's own binding site, so at any moment only the unblocked fraction of sites sees agonist. Every agonist dose behaves as if it were smaller: the curve slides RIGHT in parallel — POTENCY ↓, EFFICACY 'No change', and the effect 'Can be overcome by ↑ agonist concentration' because agonist molecules simply out-number the antagonist at the site. Panel 1 draws it ('Agonist + competitive antagonist', 'Reduced potency'); row A's example is diazepam + flumazenil on the GABA A receptor.",
            variant: "process",
          },
          {
            id: "noncomp",
            label: "Noncompetitive antagonist removes receptors — the population shrinks",
            sublabel:
              "The antagonist binds at another site or irreversibly at the receptor, taking receptors OUT of the responding population. The surviving receptors keep their affinity — the curve keeps its position, POTENCY 'No change' — but the system's maximal output falls: EFFICACY ↓, 'Reduced efficacy' (panel 2). No agonist dose can activate a receptor that is gone: 'Cannot be overcome by ↑ agonist concentration'. Row B's example is norepinephrine + phenoxybenzamine (covalent) on α-receptors.",
            variant: "process",
          },
          {
            id: "output",
            label: "The surmountability test — the REMARKS column's single question",
            sublabel:
              "Output — the two REMARKS, verbatim: competitive 'Can be overcome by ↑ agonist concentration'; noncompetitive 'Cannot be overcome by ↑ agonist concentration'. Clinically: competitive blockade (flumazenil, naloxone) is titratable and reversible but fades as agonist accumulates; irreversible blockade (phenoxybenzamine) persists until new receptors are synthesized — hours to days.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "compete", label: "same site + mass action → parallel right shift" },
          { from: "compete", to: "output", label: "↑ agonist concentration wins the contest → surmountable" },
          { from: "input", to: "noncomp", label: "receptors removed → ceiling ↓ at the same EC50" },
          { from: "noncomp", to: "output", label: "no agonist dose restores lost receptors → insurmountable" },
        ],
      },
    },
    {
      id: "partial-and-inverse-agonist-signaling",
      title:
        "Partial and inverse agonists: the lowered ceiling and the negative ceiling — both at the agonist's own receptor",
      context: "Panel 3 and table rows C and 4 (book 233)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The full agonist's curve — the reference ceiling and position",
            sublabel:
              "Input — the same baseline: a full agonist at 100% maximal effect. Rows C and 4 describe molecules given ALONE ('Partial agonist (alone)', 'Inverse agonist (alone)') whose curves are compared against this reference.",
            variant: "input",
          },
          {
            id: "partial",
            label: "Partial agonist — same site, lower intrinsic activity, potency Independent",
            sublabel:
              "The partial agonist 'Acts at same site as full agonist' — it occupies the receptor, but the drug-receptor complex couples to the response with lower intrinsic activity, so even at 100% occupancy its curve plateaus below the full agonist's: EFFICACY ↓. Its POTENCY is 'Independent' — affinity is unconstrained, so its EC50 can match the full agonist's (panel 3's upper 'Partial agonist', 'Reduced efficacy' at the agonist's own position) or sit anywhere else (the shifted 'Partial C agonist', 'Independent potency'). Row C's example: morphine (full agonist) vs buprenorphine (partial agonist) at opioid μ-receptors.",
            variant: "process",
          },
          {
            id: "inverse",
            label: "Inverse agonist — stabilizes the inactive state of a constitutively active receptor",
            sublabel:
              "Some receptors signal with no ligand bound (constitutive activity). The inverse agonist 'Binds to a constitutively active receptor, thereby reducing its activity' — it stabilizes the inactive conformation and pushes the response BELOW the unbound baseline: EFFICACY negative, 'the opposite effect of an agonist', with POTENCY 'Independent'. Row 4's example: H1 antihistamines (eg, diphenhydramine). A neutral antagonist, by contrast, holds the baseline at zero change — the exam's separator between antagonist and inverse agonist.",
            variant: "process",
          },
          {
            id: "output",
            label: "The efficacy ladder — 100% · submaximal · zero · negative",
            sublabel:
              "Output — one receptor, four possible ceilings: full agonist (Emax 100%), partial agonist (lower Emax, same site), neutral antagonist (no change alone; shifts an agonist's curve right), inverse agonist (below baseline, needs constitutive activity). In a mixed system the highest-intrinsic-activity occupant sets the direction: a partial agonist in the presence of a full agonist REDUCES the net effect — functional antagonism, the buprenorphine-precipitates-withdrawal logic.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "partial", label: "same site + lower intrinsic activity → Emax ↓" },
          { from: "partial", to: "output", label: "potency Independent — EC50 free to sit anywhere" },
          { from: "input", to: "inverse", label: "constitutively active receptor + inactive-state binding → below baseline" },
          { from: "inverse", to: "output", label: "efficacy negative — opposite effect of an agonist" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "receptor-binding-map",
      title: "The receptor-binding map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source page (book 233): three dose-response panels — PANEL A 'Agonist' vs 'Agonist + competitive antagonist' (a parallel right shift at the same 100% ceiling, the A marker, 'Reduced potency' with the horizontal shift arrow); PANEL B 'Agonist' vs 'Agonist + noncompetitive antagonist' (the same EC50, a ~50% ceiling, the B marker, 'Reduced efficacy' with the vertical ceiling arrow); PANEL C 'Agonist' plus two partial agonist curves — 'Partial agonist' at the agonist's own EC50 with 'Reduced efficacy' and the C-marked 'Partial C agonist' shifted right with 'Independent potency'; then the AGONIST WITH table re-typeset verbatim (four rows: competitive ↓/No change/surmountable/diazepam + flumazenil; noncompetitive No change/↓/insurmountable/norepinephrine + phenoxybenzamine; partial agonist Independent/↓/same site/morphine vs buprenorphine; inverse agonist Independent/Negative/constitutively active receptor/H1 antihistamines); the inverse-agonist efficacy ladder; and the four-code mnemonic strip.",
      notice:
        "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 255). The AGONIST WITH table prints in the text layer and is re-typeset verbatim in this visual's grid (ORIGINAL_KYP_ADAPTATION) — short attributed rows, not artwork reproductions. The three curve panels are vector line-art curves in the PDF and are redrawn as ORIGINAL_KYP_REDRAW vector sigmoids (the standard Hill sigmoids of pharmacodynamics, drawn from scratch — parallel right shift; ceiling drop; two partial agonists, one at the agonist's EC50 and one shifted). The Receptor binding section prints NO margin mnemonic (the page's only printed mnemonic, 'TITE', lives in the EXCLUDED Therapeutic index section); the four mnemonic codes are KYP-original designs.",
    },
    {
      kind: "table",
      title: "Book 233 — the AGONIST WITH table (carried verbatim)",
      intro:
        "The page's whole argument in five columns: who is bound with the agonist, what happens to potency, what happens to efficacy, the one-sentence mechanism, and the canonical drug pair.",
      columns: ["AGONIST WITH", "POTENCY", "EFFICACY", "REMARKS", "EXAMPLE"],
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
        "Read the table as two mirror pairs. ROWS A AND B are the antagonist pair, and their columns are deliberately swapped: the competitive antagonist costs POTENCY (↓, right shift) and spares EFFICACY (No change) — the noncompetitive antagonist costs EFFICACY (↓, ceiling) and spares POTENCY (No change). The REMARKS column then asks the same question of both — can more agonist fix it? — and answers YES for A (the antagonist occupies the same site, so agonist can out-compete it) and NO for B (the receptor itself is removed, so no dose helps). ROWS C AND 4 are the non-zero-efficacy pair: both are given ALONE, both keep potency 'Independent' (affinity is a free parameter — panel 3 draws one partial agonist at the full agonist's own EC50 and one shifted), and both change efficacy — the partial agonist lowers it (same site, less intrinsic activity), the inverse agonist makes it negative (a constitutively active receptor pushed below its unbound baseline). The examples are exam currency in themselves: flumazenil at the benzodiazepine site of GABA A (competitive), phenoxybenzamine covalently at α-receptors (noncompetitive/irreversible), buprenorphine at μ-opioid receptors (partial agonist), diphenhydramine at H1 (inverse agonist).",
    },
    {
      kind: "table",
      title: "The stem-language decision table — from vignette wording to row identity (KYP synthesis)",
      intro:
        "The exam-facing distillation: given a stem's language or a figure's geometry, which binding type is it and which table row answers the question.",
      columns: ["The stem says...", "Binding type (row)", "Mechanism and clinical carrier"],
      rows: [
        [
          "Two curves, parallel, right-shifted, SAME ceiling; or 'the effect returned after giving more agonist'",
          "Competitive antagonist (row A)",
          "Same-site mass-action contest: potency ↓, efficacy No change, 'Can be overcome by ↑ agonist concentration'. Flumazenil for benzodiazepines, naloxone for opioids — competitive antagonists whose blockade is surmountable and time-limited (re-sedation when the agonist outlasts the antagonist).",
        ],
        [
          "Two curves at the SAME position, second one's ceiling LOWER; or 'no additional dose restored the max effect'",
          "Noncompetitive antagonist (row B)",
          "Receptors removed from the responding population (covalent or allosteric): potency No change, efficacy ↓, 'Cannot be overcome by ↑ agonist concentration'. Phenoxybenzamine before pheochromocytoma surgery — irreversible α-blockade that tumor catecholamine surges cannot overcome.",
        ],
        [
          "One drug ALONE that plateaus below the full agonist's max 'even at saturating doses'; or 'acts at the same receptor'",
          "Partial agonist (row C)",
          "Same site as the full agonist, lower intrinsic activity: efficacy ↓, potency Independent ('Partial agonist' vs 'Partial C agonist' in panel 3 — same position or shifted, both legal). Buprenorphine at μ-receptors: ceiling on respiratory depression (safety) AND on analgesia (limitation); in the PRESENCE of a full agonist it lowers the net effect — functional antagonism, the precipitated-withdrawal logic.",
        ],
        [
          "A drug whose effect is BELOW the untreated baseline; or 'stabilizes the inactive conformation'; or 'reduces constitutive receptor activity'",
          "Inverse agonist (row 4)",
          "'Binds to a constitutively active receptor, thereby reducing its activity; has the opposite effect of an agonist': efficacy Negative, potency Independent. Requires constitutive activity to observe — in a fully silent receptor system an inverse agonist is indistinguishable from a neutral antagonist. H1 antihistamines (diphenhydramine), many β-blockers at resting β receptors.",
        ],
        [
          "A single observed drop in effect at ONE fixed dose after adding a second drug",
          "the geometry trap — Insufficient information",
          "At any single fixed dose BOTH a competitive and a noncompetitive antagonist reduce the observed effect — the rows only separate on the FULL curve or the challenge test: push the agonist dose. Effect recovers = competitive (right shift); effect plateaus lower = noncompetitive (ceiling drop). Never call a one-point measurement 'decreased efficacy'.",
        ],
      ],
      caption:
        "This table converts the page's geometry into a reading order for stems. The failure it predicts: classifying a drug pair from a single fixed-dose observation (row 5) — the exam's favorite ambiguity, resolved only by the challenge test (raise the agonist dose and see whether the effect returns). The mechanism spine behind rows A and B: same-site occupancy is a ratio contest (surmountable), while receptor removal is a subtraction (insurmountable). Behind rows C and 4: efficacy is not binary — intrinsic activity is a continuum from full agonist (100%) through partial (submaximal) and neutral antagonist (zero alone) to inverse (negative), and the direction of the net effect in any mixture is set by the highest-intrinsic-activity occupant. See the efficacy-vs-potency page (PH7) for the two-axis reading this page borrows (Emax = y-axis, EC50 = x-axis), the enzyme-kinetics page (PH1) for the Km/Vmax isomorphism of rows A and B, and the pharmacokinetics page (PH2) for the exposure machinery that sets the agonist concentration the curves are drawn against.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A pharmacology figure shows two graded dose-response curves for an agonist alone and the agonist plus a second drug. The second curve is shifted right and parallel to the first; both plateau at the same maximal effect. The question asks which change would restore the full response at the original dose, and the options include 'increase the agonist concentration', 'increase the antagonist concentration', and 'the maximal effect is permanently reduced'.",
        discriminator:
          "Parallel right shift + SAME ceiling → POTENCY ↓, EFFICACY No change → row A: 'Can be overcome by ↑ agonist concentration'",
        concept: "The competitive antagonist's geometry (panel 1, 'Reduced potency')",
        answer:
          "This is panel 1 and row A verbatim: an 'Agonist + competitive antagonist' curve that is a parallel right shift of the 'Agonist' curve, both reaching 100 — POTENCY ↓ ('Reduced potency'), EFFICACY 'No change'. Because the antagonist occupies the agonist's own site, the interaction is a mass-action ratio contest: raising the agonist concentration raises the agonist:antagonist ratio at the receptor and the full response returns — the REMARKS column, verbatim: 'Can be overcome by ↑ agonist concentration.' The canonical pair is the row's EXAMPLE: 'Diazepam (agonist) + flumazenil (competitive antagonist) on GABA A receptor' — which is also the clinical pattern of re-sedation: flumazenil's competitive blockade fades with redistribution while benzodiazepines persist, so the agonist 'wins' the contest again and sedation returns. Naloxone–opioid is the same geometry at μ-receptors.",
      },
      {
        stem:
          "A figure shows an agonist curve and the same agonist plus a second drug: the second curve's EC50 is unchanged, but its maximal effect is less than half of the control curve's. The question asks whether increasing the agonist dose can restore the maximal effect, and what the second drug did to potency and efficacy.",
        discriminator:
          "Same position + LOWER ceiling → POTENCY No change, EFFICACY ↓ → row B: 'Cannot be overcome by ↑ agonist concentration'",
        concept: "The noncompetitive antagonist's geometry (panel 2, 'Reduced efficacy')",
        answer:
          "This is panel 2 and row B verbatim: an 'Agonist + noncompetitive antagonist' curve that plateaus far below the 'Agonist' curve at the same left-right position — EFFICACY ↓ ('Reduced efficacy'), POTENCY 'No change'. The mechanism is receptor removal: the antagonist takes receptors out of the responding population (covalently, as with phenoxybenzamine at α-receptors), so the surviving receptors bind agonist normally (position unchanged) but the system's maximal output is smaller — and no dose of agonist can activate a receptor that no longer functions. The REMARKS column, verbatim: 'Cannot be overcome by ↑ agonist concentration.' The row's EXAMPLE is 'Norepinephrine (agonist) + phenoxybenzamine (noncompetitive antagonist) on α-receptors' — the preoperative pheochromocytoma logic: irreversible α-blockade holds even against tumor catecholamine surges. The refinement the exam occasionally tests: with a RECEPTOR RESERVE, low doses of an irreversible antagonist shift the curve slightly right before Emax begins to fall — but the end-point and the answer key stay row B.",
      },
      {
        stem:
          "A drug is given ALONE at a receptor. Its dose-response curve plateaus at a submaximal effect no matter how much drug is given, and it binds the same site as the endogenous full agonist. A second question describes a different drug whose effect at the same receptor is BELOW the untreated baseline. The options ask for the two identities in order.",
        discriminator:
          "Alone + same site + submaximal ceiling → partial agonist (row C); alone + below baseline → inverse agonist (row 4) — both with POTENCY 'Independent'",
        concept: "The two non-zero-efficacy rows (panel 3 + rows C and 4)",
        answer:
          "The first drug is row C, the 'Partial agonist (alone)': POTENCY 'Independent', EFFICACY ↓, REMARKS 'Acts at same site as full agonist' — its curve plateaus below the full agonist's even at full occupancy because the drug-receptor complex has lower intrinsic activity. Panel 3 draws both legal geometries: the upper 'Partial agonist' at the full agonist's own EC50 ('Reduced efficacy') and the lower 'Partial C agonist' shifted right ('Independent potency') — affinity is unconstrained, which is exactly why the POTENCY column reads 'Independent'. The EXAMPLE: 'Morphine (full agonist) vs buprenorphine (partial agonist) at opioid μ-receptors' — the ceiling on respiratory depression that makes buprenorphine safer in overdose, and the same-site occupancy that lets it displace morphine and precipitate withdrawal. The second drug is row 4, the 'Inverse agonist (alone)': POTENCY 'Independent', EFFICACY 'Negative', REMARKS 'Binds to a constitutively active receptor, thereby reducing its activity; has the opposite effect of an agonist' — EXAMPLE 'H1 antihistamines (eg, diphenhydramine)'. The two rows share 'Independent' potency and differ in the DIRECTION of efficacy: below the full agonist (partial) vs below the neutral baseline (inverse) — and the inverse agonist only reveals itself in a system with constitutive activity.",
      },
    ],
    traps: [
      {
        a: "A noncompetitive antagonist's effect can be overcome by giving more agonist — 'just push the dose'",
        b: "Applying the competitive row's REMARKS to the noncompetitive row (or picking 'increase agonist concentration' for an irreversible blocker)",
        whyConfused:
          "Both antagonists reduce the observed effect at clinical doses, so students treat the REMARKS column as one rule for all antagonists",
        keyDifference:
          "The page prints the REMARKS as exact opposites, and the mechanism is the reason: a competitive antagonist occupies the SAME site, so the agonist can out-compete it — 'Can be overcome by ↑ agonist concentration' (row A). A noncompetitive antagonist removes receptors from the responding population (phenoxybenzamine binds α-receptors covalently), so the agonist has nothing left to occupy at the lost sites — 'Cannot be overcome by ↑ agonist concentration' (row B). Geometrically: the competitive curve is a parallel RIGHT SHIFT with the ceiling intact; the noncompetitive curve keeps its position and DROPS ITS CEILING. Clinically the distinction is the overdose and preoperative logic: flumazenil/naloxone blockade is surmountable and fades (re-sedation, re-narcotization), while phenoxybenzamine's α-blockade holds until new receptors are synthesized.",
        clue:
          "Before answering any 'can it be overcome' item, check the geometry the stem gives: right-shifted with the same max = competitive (surmountable); same position with a lower max = noncompetitive (insurmountable). Mnemonic: COMPETITIVE SLIDES RIGHT, SAME CEILING · NONCOMPETITIVE CLIPS THE CEILING, SAME SPOT.",
      },
      {
        a: "A partial agonist produces its submaximal effect because it binds a different (allosteric) site than the full agonist",
        b: "Reading 'partial' as 'partial occupancy' or 'different site' instead of lower intrinsic activity at the SAME site",
        whyConfused:
          "'Partial' sounds like the drug only partially engages the receptor — as if it binds sometimes, or elsewhere",
        keyDifference:
          "The REMARKS column closes this, verbatim: the partial agonist 'Acts at same site as full agonist.' Buprenorphine occupies the very pocket morphine occupies at the μ-opioid receptor; what is partial is the INTRINSIC ACTIVITY of the resulting drug-receptor complex — at 100% occupancy the response still plateaus below the full agonist's (EFFICACY ↓). That is also why its POTENCY reads 'Independent': affinity is a free parameter, and panel 3 draws a partial agonist at the agonist's own EC50 and another shifted to the right. The clinical corollary the exam loves: because they share the site, a partial agonist given WITH a full agonist reduces the net effect (functional antagonism) — buprenorphine displaces morphine and can precipitate withdrawal.",
        clue:
          "'Same site, lower ceiling' is the partial agonist in one phrase — and 'given alone' in the stem is the hint that you are reading row C, not row B. Mnemonic: PARTIALS SHARE THE SITE, DROP THE CEILING.",
      },
      {
        a: "An inverse agonist is just another word for an antagonist — both block the receptor",
        b: "Collapsing 'negative efficacy' into 'zero efficacy' (treating rows 4 and A/B as the same thing)",
        whyConfused:
          "In most lab systems with no constitutive activity an inverse agonist LOOKS like an antagonist — same observed effect, same curve position",
        keyDifference:
          "The page's EFFICACY column separates them absolutely: an antagonist produces 'No change' (or ↓ of an agonist's effect) — zero intrinsic activity; an inverse agonist has NEGATIVE efficacy — it 'Binds to a constitutively active receptor, thereby reducing its activity; has the opposite effect of an agonist.' The drug pushes the resting, ligand-free signal BELOW baseline, which requires a receptor that signals on its own (constitutive activity). H1 antihistamines such as diphenhydramine quiet constitutively active H1 receptors; many β-blockers behave as inverse agonists at tonically active β receptors. On a dose-response plot the inverse agonist's curve runs BELOW the zero-effect line — the only row in the table that lives under the axis.",
        clue:
          "A stem that says 'below baseline', 'reduces constitutive activity', or 'stabilizes the inactive conformation' is asking for row 4 — an antagonist alone would leave the baseline untouched. Mnemonic: INVERSE GOES NEGATIVE — and it needs a receptor that was never silent.",
      },
      {
        a: "Adding an antagonist and seeing less effect at the current dose means efficacy decreased",
        b: "Calling a single fixed-dose observation 'decreased efficacy' (or 'decreased potency') without the full curve or a challenge test",
        whyConfused:
          "Both antagonist types reduce the measured effect at any given dose, so one data point cannot tell you which parameter moved",
        keyDifference:
          "The table's POTENCY/EFFICACY columns describe the FULL curve, not one point. At a single fixed dose, a competitive antagonist (row A — right shift, Emax intact) and a noncompetitive antagonist (row B — Emax ↓) both lower the observed effect; they separate only when you push the agonist: the effect returns = competitive (surmountable); it plateaus short of the original max = noncompetitive (insurmountable). This is why the REMARKS column exists — the challenge test IS the classification. The exam's version of this trap hands you 'after adding drug X, the response to dose d fell from 70% to 40%' and offers 'X decreased efficacy' as the answer; correct is 'the full dose-response curve (or an agonist challenge) is needed to classify X'.",
        clue:
          "One point is not a curve. If the stem lacks the challenge or the full curve, the only defensible answer is the geometry-agnostic one. Mnemonic: SHIFT OR CEILING — but you only know WHICH after you push the dose.",
      },
    ],
    pivots: [
      {
        lookAlike: "A stem or figure shows an agonist's curve changed by a second molecule — which row of the table is it?",
        differentiator:
          "Run the two-question protocol. QUESTION 1 — WHICH PARAMETER MOVED? Parallel right shift, ceiling intact → potency ↓ → COMPETITIVE (row A). Same position, ceiling down → efficacy ↓ → NONCOMPETITIVE (row B) if a second drug was added, or PARTIAL AGONIST (row C) if the drug was given ALONE and 'acts at same site as full agonist'. Below baseline → efficacy negative → INVERSE AGONIST (row 4), which requires a constitutively active receptor. QUESTION 2 — IS IT SURMOUNTABLE? Push the agonist: effect returns = competitive; plateau below the original max = noncompetitive. The two questions are independent: row C and row 4 never take the surmountability test (the partial agonist's ceiling is intrinsic to the drug, not a blockade to overcome), while rows A and B are DEFINED by it.",
        correctPath:
          "Read in order: (1) identify what was administered (agonist + second drug vs a single drug alone — the '(alone)' tags on rows C and 4 are the giveaway); (2) name the geometry from the curve or the stem's language (shift vs ceiling vs sub-baseline); (3) apply the surmountability test from the REMARKS column ('Can be overcome by ↑ agonist concentration' vs 'Cannot be overcome by ↑ agonist concentration'); (4) match the row and recite its EXAMPLE pair (flumazenil; phenoxybenzamine; buprenorphine; diphenhydramine) — the exam usually rewards exactly that vocabulary.",
      },
      {
        lookAlike: "A clinical vignette: a patient on a full agonist receives another drug and the drug's effect wanes — what happened at the receptor, and what happens next?",
        differentiator:
          "Three mechanisms produce 'the effect went down', and they diverge on reversibility and on what restores the effect. (1) COMPETITIVE ANTAGONIST at the same site: the effect wanes proportionally and RETURNS with more agonist or as the antagonist clears — flumazenil re-sedation, naloxone re-narcotization (short antagonist half-life vs long agonist). (2) NONCOMPETATIVE/IRREVERSIBLE ANTAGONIST: the effect's MAXIMUM falls and does not return with more agonist — recovery waits on receptor resynthesis (phenoxybenzamine's days-long α-blockade). (3) PARTIAL AGONIST displacing the full agonist at the shared site: the net effect drops TOWARD the partial agonist's own lower ceiling — the precipitated-withdrawal scenario when buprenorphine meets full-agonist opioids. Time course and challenge response separate them: a returning effect = competitive; a cap on the effect = noncompetitive or partial.",
        correctPath:
          "Ask what the stem wants: mechanism ('what happened at the receptor') → same-site out-competition (competitive), receptor removal (noncompetitive), or displacement by lower-intrinsic-activity occupant (partial agonist as functional antagonist). Management ('what restores the effect') → more agonist (only competitive), wait for antagonist clearance (competitive, watch for re-toxification), wait for receptor resynthesis (noncompetitive), or avoid the combination (partial agonist + full agonist). Then anchor to the row's EXAMPLE pair — the exam answers are usually the table's own drugs.",
      },
    ],
    miniCase: {
      vignette:
        "A 41-year-old woman undergoing upper endoscopy receives midazolam for sedation. During recovery she becomes somnolent with hypoventilation, and the anesthesiologist administers IV flumazenil. She awakens within a minute and her respiratory drive normalizes. Thirty minutes later she is drowsy again with reduced respiratory rate. The anesthesiologist explains to the student that flumazenil did not remove the benzodiazepine from the body, that giving additional benzodiazepine could transiently restore sedation if needed, and that the same logic is why she must be monitored — the midazolam will outlast the flumazenil. The student sketches the midazolam dose-response curve alone and with flumazenil.",
      question:
        "Which row of the receptor-binding table describes flumazenil at the GABA A receptor; what happens to the potency and the efficacy of midazolam's curve in flumazenil's presence; why did sedation return; and why would the drawn curve's geometry have predicted it?",
      options: [
        {
          label:
            "Flumazenil is a competitive antagonist (row A) at the benzodiazepine site of the GABA A receptor: it occupies the same site midazolam occupies, so with flumazenil present the midazolam dose-response curve shifts RIGHT in parallel — POTENCY ↓, EFFICACY No change — and the effect 'Can be overcome by ↑ agonist concentration.' Sedation returned because flumazenil redistributed and cleared while midazolam persisted: the agonist:antagonist ratio at the receptor rose, the curve slid back left, and the same midazolam concentration again produced sedation — which is exactly why a longer-acting agonist outlasting a shorter-acting competitive antagonist requires continued monitoring (re-sedation), and why additional benzodiazepine could transiently restore sedation by out-competing the remaining flumazenil.",
          text:
            "Competitive antagonist — same site, parallel right shift (potency ↓, efficacy No change), surmountable; re-sedation is the agonist winning the ratio contest as the antagonist clears.",
          correct: true,
          why:
            "Correct on every element — it is the row's own EXAMPLE, verbatim: 'Diazepam (agonist) + flumazenil (competitive antagonist) on GABA A receptor' (midazolam is the same-site benzodiazepine agonist). (1) THE ROW: flumazenil binds the benzodiazepine site on GABA A — the agonist's own site — making it row A by definition. (2) THE GEOMETRY: same-site binding is a mass-action ratio contest, so every midazolam dose behaves as if smaller — the curve is a PARALLEL RIGHT SHIFT, POTENCY ↓ ('Reduced potency', panel 1), EFFICACY 'No change' (the ceiling is intact: enough benzodiazepine fully sedates even with flumazenil on board). (3) THE REMARKS: 'Can be overcome by ↑ agonist concentration' — which is precisely what 'giving additional benzodiazepine could transiently restore sedation' means, and the clinical reason flumazenil reversal is titratable. (4) THE RETURN OF SEDATION: flumazenil is short-lived (redistribution) while midazolam lasts longer, so the antagonist concentration fell, the ratio rose, and the curve slid back left — re-sedation is the predicted, not paradoxical, outcome, and monitoring (or an infusion) is standard.",
        },
        {
          label:
            "Flumazenil is a noncompetitive antagonist (row B) at the GABA A receptor: it removes GABA A receptors from the responding population, so midazolam's maximal effect is reduced — POTENCY No change, EFFICACY ↓ — and no additional benzodiazepine can restore the full sedative effect. Sedation returned because the blocked receptors resynthesized within thirty minutes.",
          text:
            "Noncompetitive antagonist — ceiling drop (efficacy ↓, potency No change), insurmountable; receptors resynthesized.",
          why:
            "The wrong-geometry distractor with an impossible time course. Row B's REMARKS is the exact opposite of what the vignette describes: 'Cannot be overcome by ↑ agonist concentration' — yet the anesthesiologist said additional benzodiazepine COULD restore sedation, which only the competitive row permits. The geometry is also wrong: a noncompetitive antagonist lowers Emax at unchanged EC50, but flumazenil leaves the ceiling intact and only slides the curve right. And GABA A receptor resynthesis takes hours to days, not thirty minutes — the actual time course fits flumazenil's redistribution, the pharmacokinetic fact the vignette is built on.",
        },
        {
          label:
            "Flumazenil is a partial agonist (row C) at the benzodiazepine site: it acts at the same site as midazolam but with lower intrinsic activity, producing submaximal sedation by itself — POTENCY Independent, EFFICACY ↓ — and sedation returned as the partial agonist effect replaced the full agonist effect at the receptor.",
          text:
            "Partial agonist — same site, lower ceiling, potency independent; the net effect drifted toward its own ceiling.",
          why:
            "The row-C misapplication. A partial agonist is defined by what it does ALONE ('Partial agonist (alone)'): given by itself it produces a submaximal effect — but flumazenil given alone produces essentially NO sedation (it is not a sedative at clinical doses), which is why it is not classified here. The vignette's arithmetic is also backwards for row C: a partial agonist displacing a full agonist would drive the net effect DOWN toward the partial agonist's ceiling over time, whereas this patient's sedation INCREASED as flumazenil left. Row C's geometry belongs to buprenorphine at μ-receptors — the page's own example — where a shared site plus lower intrinsic activity is exactly why precipitated withdrawal, not re-sedation, follows.",
        },
        {
          label:
            "Flumazenil is an inverse agonist (row 4) at the GABA A receptor: it binds the constitutively active receptor and reduces its activity below baseline — EFFICACY Negative, POTENCY Independent — so sedation returned as the inverse agonist effect wore off and constitutive GABA A signaling resumed its baseline level.",
          text:
            "Inverse agonist — negative efficacy at a constitutively active receptor; baseline signaling resumed.",
          why:
            "The row-4 distractor, tempting because flumazenil is occasionally described with weak inverse-agonist properties in vitro — but the page's table classifies it exactly as row A's EXAMPLE: 'Diazepam (agonist) + flumazenil (competitive antagonist) on GABA A receptor.' The vignette's observable facts all point to competitive geometry: reversal was immediate after a bolus (occupancy competition, not decay of constitutive suppression), additional benzodiazepine could restore sedation (surmountable — the inverse row would predict benzodiazepines merely pushing a negatively-suppressed system back toward zero), and the thirty-minute recurrence matches flumazenil redistribution. An inverse agonist's signature — an effect BELOW the untreated baseline — never appears in the vignette.",
        },
        {
          label:
            "Flumazenil left midazolam's potency and efficacy both unchanged: it acts at a different, allosteric site on the GABA A receptor, so the two curves are independent, and sedation returned only because the midazolam dose happened to be repeated — the drawn curves would show two unrelated sigmoid curves at different receptors.",
          text:
            "Different (allosteric) site, no curve interaction — two independent curves; the recurrence is a dosing coincidence.",
          why:
            "The site-error distractor. It contradicts the REMARKS column of the row the page assigns to this exact drug pair: flumazenil occupies the BENZODIAZEPINE site — the agonist's own site — which is what makes the interaction competitive and the curve a right shift. 'Different site, no interaction' describes neither row of the table (both antagonist rows describe interactions at the same receptor system), and it cannot explain the observed minute-scale reversal: if the curves were independent, flumazenil would not have antagonized midazolam at all. The recurrence timing (flumazenil's redistribution) is the mechanism the stem hands you — not a repeated dose, which the vignette never states.",
        },
      ],
      reasoning:
        "The stem walks flumazenil — the table's own row-A EXAMPLE (with diazepam; midazolam is the same-site benzodiazepine agonist) — through reversal, surmountability, and recurrence, and asks for the row, the two columns, and the geometry. The page supplies each answer. (1) THE ROW: flumazenil occupies the benzodiazepine site on the GABA A receptor, the agonist's own site → competitive antagonist, row A. (2) THE COLUMNS: same-site mass-action competition slides the midazolam curve RIGHT in parallel — POTENCY ↓ ('Reduced potency', panel 1's geometry), EFFICACY 'No change' (the ceiling stands; enough benzodiazepine sedates fully despite flumazenil). (3) THE REMARKS: 'Can be overcome by ↑ agonist concentration' — the anesthesiologist's 'additional benzodiazepine could transiently restore sedation' is that sentence in the mouth of a clinician, and the titratable reversibility of flumazenil is its clinical expression. (4) THE RECURRENCE: flumazenil redistributes and clears in minutes-to-an-hour while midazolam persists — the agonist:antagonist ratio rises, the curve slides back left, and the same plasma midazolam again sedates: re-sedation is the predicted competitive-antagonist behavior, the reason for continued monitoring. The distractors fail at: 'noncompetitive, receptors resynthesized' (wrong REMARKS — the effect WAS surmountable; wrong time course — resynthesis takes hours-days, not 30 minutes); 'partial agonist' (a partial agonist defined alone produces submaximal effect — flumazenil alone is not a sedative — and displacement by a partial agonist drives effect DOWN toward its ceiling, not up); 'inverse agonist, constitutive activity resumed' (no below-baseline effect appears; the table classifies this pair as row A); and 'allosteric site, no interaction' (contradicts the same-site REMARKS and cannot explain minute-scale reversal).",
    },
  },
  mnemonics: [
    {
      code: "COMPETITIVE SLIDES RIGHT, SAME CEILING — surmountable: potency ↓, efficacy No change, overcome by ↑ agonist concentration",
      meaning:
        "Row A compressed: a competitive antagonist occupies the agonist's own site, so the interaction is a ratio contest — the whole log-dose curve slides right in parallel (POTENCY ↓, panel 1's 'Reduced potency') while the 100 ceiling stands (EFFICACY 'No change'), and raising the agonist concentration wins the contest ('Can be overcome by ↑ agonist concentration').",
      memorizes: "Row A's three columns and the parallel-right-shift geometry of panel 1",
      whenToUse:
        "Any stem or figure with a right-shifted parallel curve, 'the effect returned with more agonist', or the flumazenil/naloxone reversal-and-recurrence pattern",
      clinical:
        "Flumazenil for benzodiazepine sedation and naloxone for opioid overdose: both are competitive antagonists — reversal is immediate and titratable, but short antagonist persistence against longer-acting agonists means re-sedation and re-narcotization, so monitoring (or infusion) continues after apparent recovery.",
    },
    {
      code: "NONCOMPETITIVE CLIPS THE CEILING, SAME SPOT — insurmountable: potency No change, efficacy ↓, NOT overcome by ↑ agonist concentration",
      meaning:
        "Row B compressed: a noncompetitive antagonist removes receptors from the responding population, so the curve keeps its position (POTENCY 'No change' — the surviving receptors bind agonist normally) but its maximal effect falls (EFFICACY ↓, panel 2's 'Reduced efficacy') — and no agonist dose activates a receptor that is gone ('Cannot be overcome by ↑ agonist concentration').",
      memorizes: "Row B's three columns and the dropped-ceiling-at-same-position geometry of panel 2",
      whenToUse:
        "Any stem with 'irreversible', 'no additional dose restored the maximal effect', phenoxybenzamine, or a curve whose Emax — not its EC50 — is the thing that changed",
      clinical:
        "Phenoxybenzamine before pheochromocytoma surgery: covalent (noncompetitive) α-blockade that catecholamine surges from tumor manipulation cannot overcome — the preoperative days of alpha-blockade are the wait for stable receptor occupancy, and recovery from it waits on receptor resynthesis.",
    },
    {
      code: "PARTIALS SHARE THE SITE, DROP THE CEILING — acts at same site as full agonist: efficacy ↓, potency Independent",
      meaning:
        "Row C compressed: a partial agonist given ALONE occupies the very site the full agonist occupies ('Acts at same site as full agonist') but couples to the response with lower intrinsic activity, so its curve plateaus below the full agonist's at ANY dose (EFFICACY ↓). POTENCY is 'Independent' because affinity is free — panel 3 draws one partial agonist at the full agonist's own EC50 ('Reduced efficacy') and another shifted right ('Partial C agonist', 'Independent potency'): both are legal partial agonists.",
      memorizes: "Row C's three columns and panel 3's two partial-agonist geometries",
      whenToUse:
        "Any stem with a drug 'alone' whose effect plateaus submaximally 'even at saturating doses', buprenorphine/aripiprazole/pentazocine questions, or 'what happens when a partial agonist meets a full agonist'",
      clinical:
        "Buprenorphine at μ-opioid receptors: a ceiling on respiratory depression (the overdose-safety logic of medication-assisted treatment) and on analgesia (its limitation for severe pain) — and because it shares morphine's site, it displaces full agonists and can precipitate withdrawal: functional antagonism.",
    },
    {
      code: "INVERSE GOES NEGATIVE — and needs a receptor that was never silent: binds a constitutively active receptor, reducing its activity below baseline",
      meaning:
        "Row 4 compressed: an inverse agonist is not a stronger antagonist — it is the mirror of an agonist. It 'Binds to a constitutively active receptor, thereby reducing its activity; has the opposite effect of an agonist' — EFFICACY Negative (below the untreated baseline, the only curve in the table that lives under the axis), POTENCY 'Independent'. A neutral antagonist holds the baseline at zero change; only a receptor with constitutive activity can reveal the difference.",
      memorizes: "Row 4's three columns and the antagonist-vs-inverse-agonist separator",
      whenToUse:
        "Any stem with 'below baseline', 'reduces constitutive activity', 'stabilizes the inactive conformation', or a question asking how an inverse agonist differs from an antagonist",
      clinical:
        "H1 antihistamines (eg, diphenhydramine) — the row's EXAMPLE — quiet constitutively active H1 receptors rather than merely blocking histamine; many β-blockers act as inverse agonists at tonically active β receptors. On the plot, their curves run below zero — negative efficacy is a real, testable direction.",
    },
  ],
  rapidReview: {
    s30: [
      "Row A, verbatim: 'A Competitive antagonist | ↓ | No change | Can be overcome by ↑ agonist concentration | Diazepam (agonist) + flumazenil (competitive antagonist) on GABA A receptor.'",
      "Row B, verbatim: 'B Noncompetitive antagonist | No change | ↓ | Cannot be overcome by ↑ agonist concentration | Norepinephrine (agonist) + phenoxybenzamine (noncompetitive antagonist) on α-receptors.'",
      "Row C, verbatim: 'C Partial agonist (alone) | Independent | ↓ | Acts at same site as full agonist | Morphine (full agonist) vs buprenorphine (partial agonist) at opioid μ-receptors.'",
      "Row 4, verbatim: 'Inverse agonist (alone) | Independent | Negative | Binds to a constitutively active receptor, thereby reducing its activity; has the opposite effect of an agonist | H1 antihistamines (eg, diphenhydramine)'.",
      "Panel 1 geometry: parallel RIGHT shift, same 100 ceiling — 'Agonist + competitive antagonist', annotation 'Reduced potency' (the circled A).",
      "Panel 2 geometry: same position, LOWER ceiling — 'Agonist + noncompetitive antagonist', annotation 'Reduced efficacy' (the circled B).",
      "Panel 3 geometry: 'Agonist' plus TWO partial agonist curves — the upper 'Partial agonist' at the agonist's own EC50 ('Reduced efficacy'), the lower 'Partial C agonist' shifted right ('Independent potency', the circled C).",
      "The three panels share the same axes: 100/50/0 gridlines (y) and 'Agonist dose' (x, printed three times).",
      "The surmountability test — the REMARKS column asked twice: competitive 'Can be overcome by ↑ agonist concentration'; noncompetitive 'Cannot be overcome by ↑ agonist concentration'.",
      "The efficacy ladder at one receptor: full agonist 100% > partial agonist (submaximal, same site) > neutral antagonist (zero alone) > inverse agonist (negative — requires constitutive activity).",
    ],
    m3: [
      "COMPETITIVE SLIDES RIGHT, SAME CEILING — surmountable (potency ↓, efficacy No change)",
      "NONCOMPETITIVE CLIPS THE CEILING, SAME SPOT — insurmountable (potency No change, efficacy ↓)",
      "PARTIALS SHARE THE SITE, DROP THE CEILING — efficacy ↓, potency Independent",
      "INVERSE GOES NEGATIVE — constitutively active receptor, below baseline, opposite effect of an agonist",
      "One fixed-dose observation cannot classify an antagonist — push the agonist dose (the challenge test) before calling it shift or ceiling",
    ],
    m10: [
      "All four rows verbatim in one breath: competitive ↓/No change/overcome/flumazenil-GABA A; noncompetitive No change/↓/cannot overcome/phenoxybenzamine-α; partial Independent/↓/same site/buprenorphine-μ; inverse Independent/Negative/constitutively active receptor/diphenhydramine-H1.",
      "Mechanism spine — same-site occupancy is a RATIO contest (competitive: surmountable, parallel right shift); receptor removal is a SUBTRACTION (noncompetitive: insurmountable, ceiling drop at the same EC50).",
      "Partial agonist mechanism: same binding site, lower intrinsic activity of the drug-receptor complex — the ceiling falls at any occupancy; affinity (potency) is a free parameter, which is why panel 3 draws one partial at the agonist's EC50 and one shifted ('Independent potency').",
      "Inverse agonist mechanism: the receptor signals without ligand (constitutive activity); the inverse agonist stabilizes the inactive conformation and drives the response BELOW baseline — in a silent receptor system it would be indistinguishable from a neutral antagonist.",
      "Clinical corollaries: re-sedation after flumazenil (short antagonist vs long agonist — keep monitoring); phenoxybenzamine's preoperative α-blockade that tumor catecholamine surges cannot overcome; buprenorphine's respiratory ceiling (safety) and its precipitation of withdrawal when it displaces full agonists (functional antagonism); diphenhydramine quieting constitutively active H1.",
    ],
  },
  recall: [
    {
      q: "The AGONIST WITH table's two antagonist rows, verbatim — the four columns of each.",
      a:
        "A Competitive antagonist: POTENCY ↓, EFFICACY No change, 'Can be overcome by ↑ agonist concentration', example 'Diazepam (agonist) + flumazenil (competitive antagonist) on GABA A receptor.' B Noncompetitive antagonist: POTENCY No change, EFFICACY ↓, 'Cannot be overcome by ↑ agonist concentration', example 'Norepinephrine (agonist) + phenoxybenzamine (noncompetitive antagonist) on α-receptors.' The columns are mirror images: each antagonist spares exactly the parameter the other costs — competitive costs potency (right shift), noncompetitive costs efficacy (ceiling drop).",
    },
    {
      q: "The AGONIST WITH table's partial agonist and inverse agonist rows, verbatim — the four columns of each.",
      a:
        "C Partial agonist (alone): POTENCY Independent, EFFICACY ↓, 'Acts at same site as full agonist', example 'Morphine (full agonist) vs buprenorphine (partial agonist) at opioid μ-receptors.' Inverse agonist (alone): POTENCY Independent, EFFICACY Negative, 'Binds to a constitutively active receptor, thereby reducing its activity; has the opposite effect of an agonist', example 'H1 antihistamines (eg, diphenhydramine)'. Both are given ALONE, both have Independent potency — they differ in the direction of efficacy: submaximal (below the full agonist's ceiling) vs negative (below the untreated baseline).",
    },
    {
      q: "The three dose-response panels — what each draws, and every annotation on them.",
      a:
        "All three plot effect vs 'Agonist dose' with 100/50/0 gridlines. Panel 1: 'Agonist' vs 'Agonist + competitive antagonist' — a parallel right shift at the same 100 ceiling, with the circled A and 'Reduced potency'. Panel 2: 'Agonist' vs 'Agonist + noncompetitive antagonist' — the same position with a plateau near 50, with the circled B and 'Reduced efficacy'. Panel 3: 'Agonist' plus TWO partial agonist curves — the upper 'Partial agonist' at the agonist's own EC50 with 'Reduced efficacy', and the lower 'Partial C agonist' (circled C = table row C) shifted right with 'Independent potency'.",
    },
    {
      q: "Why can a competitive antagonist be overcome by ↑ agonist concentration while a noncompetitive antagonist cannot — the mechanism, not just the row.",
      a:
        "Competitive: the antagonist occupies the agonist's OWN binding site, so agonist and antagonist compete by mass action — raising the agonist concentration raises the agonist:antagonist ratio at the site and the full effect returns (the curve is a parallel right shift; the ceiling never moved). Noncompetitive: the antagonist takes receptors OUT of the responding population (phenoxybenzamine binds α-receptors covalently) — the surviving receptors keep normal affinity (position/potency unchanged), but the system's maximal output is smaller, and no agonist dose can activate a receptor that no longer functions. Surmountable = ratio contest at one site; insurmountable = subtraction of receptors.",
    },
    {
      q: "The four EXAMPLE-column drug pairs and what each demonstrates.",
      a:
        "Diazepam + flumazenil on the GABA A receptor — competitive antagonism at the benzodiazepine site: surmountable, right shift (the re-sedation logic: short antagonist vs longer agonist). Norepinephrine + phenoxybenzamine on α-receptors — noncompetitive (covalent) antagonism: ceiling drop, insurmountable (the preoperative pheochromocytoma logic). Morphine vs buprenorphine at opioid μ-receptors — partial agonism: same site, submaximal ceiling, potency independent (the respiratory-ceiling safety and the precipitated-withdrawal risk). H1 antihistamines (eg, diphenhydramine) — inverse agonism: reducing the activity of a constitutively active receptor below baseline, the opposite effect of an agonist.",
    },
  ],
  related: [
    {
      title: "Efficacy vs Potency — the Two-Axis Reading",
      topicId: "efficacy-vs-potency",
      note:
        "The immediately preceding page (PH7, book 232) defines the two axes this page moves drugs along: efficacy is 'the maximal effect a drug can produce (intrinsic activity)... represented by the y-value (Emax)' and potency is 'the amount of drug needed for a given effect... represented by the x-value (EC50)'. THIS page (PH8) is those definitions put to work: the competitive antagonist changes the x-axis fact only (right shift = ↓ potency, 'Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed' read backwards), the noncompetitive antagonist changes the y-axis fact only (↓ Emax = ↓ efficacy), and the partial agonist is PH7's rule 'Partial agonists have less efficacy than full agonists' drawn as row C — with 'Independent' in the POTENCY column because PH7 established the axes are 'unrelated'. Read the two pages as one figure: PH7 names the axes; PH8 classifies the molecules that move the curves.",
    },
    {
      title: "Enzyme Kinetics — Michaelis-Menten, Lineweaver-Burk, and Inhibition",
      topicId: "enzyme-kinetics",
      note:
        "The isomorphic page (PH1, book 228): rows A and B of the AGONIST WITH table are the receptor versions of the two enzyme-inhibition mechanisms. Competitive enzyme inhibition is Km ↑ with Vmax unchanged (more substrate needed for the same rate — the right shift, '↓ potency'); noncompetitive inhibition is Vmax ↓ with Km unchanged (fewer working enzymes — the ceiling drop, '↓ efficacy'). The shared vocabulary is printed on both pages. The differences are equally exam-worthy: an enzyme's substrate binds one active site (so pure competitive inhibition is the Km-only case), while receptors add the partial agonist (a substrate analog that catalyzes slowly — no enzyme analogue) and the inverse agonist (an inhibitor that makes the enzyme catalyze BELOW its resting rate — impossible without constitutive activity).",
    },
    {
      title: "Pharmacokinetics — Bioavailability, Vd, Clearance, Half-life",
      topicId: "pharmacokinetics",
      note:
        "The machinery page (PH2, book 229): the dose-response curves of this page are drawn at FIXED concentrations at the receptor, and pharmacokinetics is what delivers (and removes) them. The flumazenil re-sedation logic in row A's example is half pharmacodynamics (competitive, surmountable) and half pharmacokinetics (a short-lived, redistributed antagonist against a longer-persisting agonist — distribution and clearance set the agonist:antagonist ratio over time, so the curve's position is a moving target in a patient even when the binding chemistry never changes). Phenoxybenzamine's days-long blockade is the same point at the other extreme: recovery waits on receptor resynthesis, not on the drug's plasma half-life alone.",
    },
    {
      title: "Sympathomimetics — Agonists and the Receptor Map",
      topicId: "sympathomimetics",
      note:
        "The exam's densest agonist-antagonist playground lives in the autonomic system, and row B's own example comes from it: norepinephrine at α-receptors opposed by phenoxybenzamine — the irreversible (noncompetitive) α-blocker used before pheochromocytoma surgery precisely because tumor catecholamine surges cannot out-compete a covalent bond. The same topic supplies the competitive mirror: α-blockers like phentolamine and terazosin (reversible, surmountable) versus phenoxybenzamine, and the reversible vs irreversible distinction between prazosin-class drugs. Every adrenergic drug question is secretly a receptor-binding question — agonist, partial agonist, competitive antagonist, or inverse agonist at α1, α2, β1, β2, D1... — with the dose-response geometry of this page underneath the hemodynamics grid of that one.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (enzyme inhibition — the same two geometries on a protein catalyst)",
      connection:
        "Rows A and B are the receptor-binding restatement of competitive and noncompetitive enzyme inhibition: competitive inhibition raises Km with Vmax unchanged (more substrate needed for the same rate — exactly the parallel right shift, '↓ potency', surmountable by ↑ substrate), and noncompetitive inhibition lowers Vmax with Km unchanged (fewer functional enzyme molecules — exactly the ceiling drop, '↓ efficacy', insurmountable by ↑ substrate). The Lineweaver-Burk plots mirror the dose-response panels: parallel lines that meet on the y-axis (competitive — same 1/Vmax) vs lines that meet on the x-axis (noncompetitive — same −1/Km). One geometry pair serves both subjects; only the players change (substrate/agonist, enzyme/receptor, catalysis/signal transduction).",
    },
    {
      subject: "Psychiatry and pain medicine (buprenorphine — row C at the μ-opioid receptor)",
      connection:
        "Buprenorphine is the exam's canonical partial agonist and the row-C example verbatim: 'Morphine (full agonist) vs buprenorphine (partial agonist) at opioid μ-receptors.' Its lowered ceiling is a y-axis fact with two clinical faces — the ceiling on respiratory depression that makes buprenorphine far safer in overdose than full agonists (the safety architecture of medication-assisted treatment), and the ceiling on analgesia that limits its use in severe pain. Because it 'Acts at same site as full agonist' with very high affinity, it also displaces full agonists from μ-receptors: giving it to a patient physically dependent on heroin or methadone can precipitate withdrawal — a partial agonist acting as a functional antagonist, the single most tested corollary of row C. Aripiprazole (partial D2 agonist) carries the same row into psychiatry.",
    },
    {
      subject: "Anesthesiology and toxicology (flumazenil and naloxone — competitive reversal and its time limit)",
      connection:
        "Row A's example is an anesthesiology routine: 'Diazepam (agonist) + flumazenil (competitive antagonist) on GABA A receptor' — midazolam sedation reversed by flumazenil at the benzodiazepine site. Because the interaction is competitive, reversal is immediate and titratable ('Can be overcome by ↑ agonist concentration' — and its converse, overcome by ↑ antagonist concentration); because it is competitive, it is also FINITE: flumazenil redistributes and clears faster than most benzodiazepines persist, so the agonist wins the ratio contest again and re-sedation follows — the reason patients are monitored after reversal. Naloxone–opioid is the identical geometry with higher stakes (re-narcotization and pulmonary edema after apparent reversal). The toxicology corollary: competitive antagonists are antidotes with a clock; the noncompetitive row has no such antidote logic — nothing out-competes a covalent bond.",
    },
    {
      subject: "Immunology and allergy (H1 antihistamines — inverse agonists in everyday practice)",
      connection:
        "Row 4's example is the everyday antihistamine: 'H1 antihistamines (eg, diphenhydramine)' are inverse agonists at the H1 receptor — they 'Bind to a constitutively active receptor, thereby reducing its activity; has the opposite effect of an agonist.' The H1 receptor signals tonically even without histamine, so a true inverse agonist quiets that resting activity below baseline (contributing to sedation and anti-motion-sickness effects beyond pure histamine blockade), while a neutral antagonist would only block added histamine. The same classification covers many β-blockers (inverse agonists at tonically active β receptors — part of why they lower resting heart rate beyond blocking released norepinephrine) and makes the pharmacology separator exam-ready: antagonist = zero intrinsic activity ('No change' alone); inverse agonist = negative intrinsic activity, observable only where constitutive activity exists.",
    },
  ],
};
