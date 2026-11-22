import type { KypUsMLENote } from "../types";

// Pharmacology — PHARMACOKINETICS AND PHARMACODYNAMICS banner (PH7).
// Source: pdf 254 / book 232 — the WHOLE page is this one topic: the
// section header 'Efficacy vs potency'; the Efficacy row, verbatim:
// 'Maximal effect a drug can produce (intrinsic activity). Represented by
// the y-value (Emax). ↑ y-value = ↑ Emax = ↑ efficacy. Unrelated to
// potency (ie, efficacious drugs can have high or low potency). Partial
// agonists have less efficacy than full agonists.' with the RELATIVE
// EFFICACY dose-response panel ('% Maximal effect' vs 'Log (drug dose)'
// axes, 'Emax Drug A', 'Δ Efficacy', 'Emax Drug B'); and the Potency row,
// verbatim: 'Amount of drug needed for a given effect. Represented by the
// x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed.
// Unrelated to efficacy (ie, potent drugs can have high or low efficacy).'
// with the RELATIVE POTENCY panel (same axes, 'Drug A', 'Drug B',
// 'Δ Potency', 'EC = Effective concentration', two EC50 labels). NO
// 'Receptor binding' (PH8) and NO 'Therapeutic index' (PH9) content lives
// on this page — Receptor binding begins on pdf 255 / book 233; no
// exclusion was needed here. NO dosage-calculations (PH6) content either
// — that is pdf 253 / book 231, already produced.
// Census (pdfimages + VLM): NO raster images on the page (pdfimages
// -list returned zero rows). The two definitions print in the text layer
// and are carried verbatim (ORIGINAL_KYP_ADAPTATION) in the table blocks
// and re-typeset in the registry visual's definition cards. The two
// dose-response panels are vector line-art curves in the PDF and are
// redrawn as ORIGINAL_KYP_REDRAW vector sigmoids in the registry visual —
// the standard Hill sigmoids of pharmacodynamics, drawn from scratch; no
// copyrighted artwork reproduced. The page prints NO margin mnemonic for
// this section; the four mnemonic codes are KYP-original designs.

export const efficacyVsPotency: KypUsMLENote = {
  id: "efficacy-vs-potency",
  title: "Efficacy vs Potency",
  subtitle:
    "Two quantities, two axes, two curves (book 232). EFFICACY — 'Maximal effect a drug can produce (intrinsic activity). Represented by the y-value (Emax). ↑ y-value = ↑ Emax = ↑ efficacy.' Partial agonists have less efficacy than full agonists: in the RELATIVE EFFICACY panel the partial agonist's plateau sits below the full agonist's (Emax Drug B under Emax Drug A), and Δ Efficacy is the vertical gap between the plateaus. POTENCY — 'Amount of drug needed for a given effect. Represented by the x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed.' In the RELATIVE POTENCY panel both curves climb to the same ceiling but Drug A sits left of Drug B, and Δ Potency is the horizontal gap between their EC50s (EC = Effective concentration). Each quantity is 'unrelated to' the other: efficacious drugs can have high or low potency; potent drugs can have high or low efficacy.",
  subject: "Pharmacology",
  system:
    "Section II · High-Yield General Principles — Pharmacology: Pharmacokinetics and Pharmacodynamics",
  pilotCategory:
    "The efficacy-vs-potency page's complete architecture — the Efficacy row ('Maximal effect a drug can produce (intrinsic activity). Represented by the y-value (Emax). ↑ y-value = ↑ Emax = ↑ efficacy. Unrelated to potency (ie, efficacious drugs can have high or low potency). Partial agonists have less efficacy than full agonists.') with the RELATIVE EFFICACY panel ('% Maximal effect' vs 'Log (drug dose)' axes, 'Emax Drug A', 'Δ Efficacy', 'Emax Drug B'); and the Potency row ('Amount of drug needed for a given effect. Represented by the x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed. Unrelated to efficacy (ie, potent drugs can have high or low efficacy).') with the RELATIVE POTENCY panel ('Drug A', 'Drug B', 'Δ Potency', 'EC = Effective concentration', two EC50 labels).",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 232 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Efficacy vs potency — the efficacy definition 'Maximal effect a drug can produce (intrinsic activity). Represented by the y-value (Emax). ↑ y-value = ↑ Emax = ↑ efficacy. Unrelated to potency (ie, efficacious drugs can have high or low potency). Partial agonists have less efficacy than full agonists.' with the RELATIVE EFFICACY dose-response panel; and the potency definition 'Amount of drug needed for a given effect. Represented by the x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed. Unrelated to efficacy (ie, potent drugs can have high or low efficacy).' with the RELATIVE POTENCY panel 'Drug A', 'Drug B', 'Δ Potency', 'EC = Effective concentration', two EC50 labels)",
  tags: [
    "efficacy",
    "potency",
    "Emax",
    "EC50",
    "EC",
    "effective concentration",
    "intrinsic activity",
    "dose-response curve",
    "graded dose-response",
    "log drug dose",
    "partial agonist",
    "full agonist",
    "agonist",
    "maximal effect",
    "y-axis",
    "x-axis",
    "left shift",
    "relative efficacy",
    "relative potency",
    "delta efficacy",
    "delta potency",
    "pharmacodynamics",
    "dose-response",
    "buprenorphine",
    "aripiprazole",
    "haloperidol",
    "chlorpromazine",
  ],
  core: {
    what:
      "TWO QUANTITIES, TWO AXES, TWO PANELS. The first definition, verbatim: Efficacy is the 'Maximal effect a drug can produce (intrinsic activity). Represented by the y-value (Emax). ↑ y-value = ↑ Emax = ↑ efficacy. Unrelated to potency (ie, efficacious drugs can have high or low potency). Partial agonists have less efficacy than full agonists.' Its panel — RELATIVE EFFICACY — plots '% Maximal effect' against 'Log (drug dose)' and draws two curves at the same left-right position with different ceilings: the upper plateau 'Emax Drug A', the lower plateau 'Emax Drug B', and the vertical gap between them 'Δ Efficacy'. The second definition, verbatim: Potency is the 'Amount of drug needed for a given effect. Represented by the x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed. Unrelated to efficacy (ie, potent drugs can have high or low efficacy).' Its panel — RELATIVE POTENCY — plots the same axes but draws two curves with the SAME ceiling and different positions: 'Drug A' sits left (its EC50 crosses the 50% line at a lower dose), 'Drug B' sits right, 'Δ Potency' is the horizontal gap between their two EC50 ticks, and the legend reads 'EC = Effective concentration'. The two quantities are orthogonal: the ceiling is a property of the drug-receptor system (intrinsic activity), the position is a property of the dose axis (how much drug is needed) — and the page prints both independence clauses: 'efficacious drugs can have high or low potency' and 'potent drugs can have high or low efficacy'.",
    why:
      "The graded dose-response curve is a sigmoid when effect is plotted against LOG dose: receptor occupancy is a hyperbola in dose (occupancy = dose/(dose + Kd)), and a hyperbola against a log axis is a sigmoid — which is why both panels print 'Log (drug dose)' on the x-axis. That sigmoid has two independent parameters, and the page assigns one quantity to each. THE CEILING (Emax): once every receptor is occupied, more dose adds nothing — the curve flattens at the maximal effect the drug-receptor system can produce. That ceiling is INTRINSIC ACTIVITY, a property of how the drug-receptor complex couples to the response, not of dose: '↑ y-value = ↑ Emax = ↑ efficacy.' A partial agonist stabilizes the receptor in a conformation of lower activity, so even at 100% occupancy its response plateaus below a full agonist's — 'Partial agonists have less efficacy than full agonists' — which is exactly the RELATIVE EFFICACY panel: two curves at the same position, two different plateaus, Δ Efficacy drawn vertically between them. THE POSITION (EC50): the dose producing 50% of maximal effect — 'EC = Effective concentration'. Because the x-axis is logarithmic, a left shift is multiplicative: tenfold less drug for the same effect — 'Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed', the RELATIVE POTENCY panel: two curves at the same ceiling, two different crossings of the 50% line, Δ Potency drawn horizontally between the EC50 ticks. The independence clauses are the two parameters' orthogonality: the ceiling does not constrain where the curve crosses 50%, and the crossing does not constrain the ceiling — 'efficacious drugs can have high or low potency' and 'potent drugs can have high or low efficacy'. Clinically: efficacy decides whether the drug CAN produce the effect you need at any dose; potency only decides the DOSE (and roughly the cost, and sometimes the side-effect burden at that dose) — never the best achievable effect.",
    keyIdea:
      "Read every dose-response question through the two-axis protocol. QUESTION 1 — WHICH AXIS IS THE STEM DESCRIBING? Ceiling language — 'maximal effect', 'Emax', 'intrinsic activity', 'even at saturating doses', 'the greatest effect achievable' — is the Y-AXIS: efficacy. Position language — 'EC50', 'at a lower dose', 'one-tenth the dose', 'less drug needed', 'left shift', dose comparisons in milligrams — is the X-AXIS: potency. QUESTION 2 — WHICH DELTA IS DRAWN? Δ Efficacy is a VERTICAL gap between plateaus (a y difference); Δ Potency is a HORIZONTAL gap between EC50s (an x difference). QUESTION 3 — CHECK THE INDEPENDENCE CLAUSES before importing one quantity from the other: 'Unrelated to potency (ie, efficacious drugs can have high or low potency)' and 'Unrelated to efficacy (ie, potent drugs can have high or low efficacy)'. So: a partial agonist with 60% of the full agonist's ceiling is LESS EFFICACIOUS (never 'less potent', even if its EC50 is identical); a drug achieving the same ceiling at one-tenth the dose is MORE POTENT (never 'more efficacious'); and when a stem asks 'which produces the greatest maximal effect', pick the highest Emax option and ignore every EC50 in the vignette.",
  },
  mechanisms: [
    {
      id: "efficacy-reads-the-y-axis",
      title: "Efficacy: the y-axis — Emax, the ceiling (maximal effect a drug can produce)",
      context: "The Efficacy row and the RELATIVE EFFICACY panel (book 232)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The graded dose-response curve — % Maximal effect vs Log (drug dose)",
            sublabel:
              "Input — the plot both panels share: effect on the y-axis ('% Maximal effect'), log dose on the x-axis ('Log (drug dose)'). Receptor occupancy is a hyperbola in dose, and a hyperbola on a log axis is the sigmoid drawn in both panels.",
            variant: "input",
          },
          {
            id: "rise",
            label: "The curve climbs to its plateau — the ceiling, Emax",
            sublabel:
              "As dose rises, occupancy rises; once receptors saturate, the curve flattens. The plateau height is 'the maximal effect a drug can produce (intrinsic activity)' — Emax. The page's axis rule, verbatim: 'Represented by the y-value (Emax). ↑ y-value = ↑ Emax = ↑ efficacy.'",
            variant: "process",
          },
          {
            id: "partial",
            label: "Partial agonists plateau LOWER — a lower ceiling at the same position",
            sublabel:
              "'Partial agonists have less efficacy than full agonists.' Even at 100% receptor occupancy a partial agonist's response ceiling sits below a full agonist's — lower intrinsic activity, not lower occupancy. In the RELATIVE EFFICACY panel this is the lower of the two plateaus: 'Emax Drug B' under 'Emax Drug A', with 'Δ Efficacy' drawn as the vertical gap between them.",
            variant: "process",
          },
          {
            id: "output",
            label: "Efficacy is read on the y-axis — and is unrelated to potency",
            sublabel:
              "Output — the first independence clause, verbatim: 'Unrelated to potency (ie, efficacious drugs can have high or low potency).' The ceiling is a property of receptor-effector coupling; no dose above saturation raises it, and a curve's height says nothing about where along the dose axis it sits.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "rise", label: "log dose → receptor occupancy → effect" },
          { from: "rise", to: "partial", label: "plateau height = Emax; partial agonist: ceiling ↓" },
          { from: "partial", to: "output", label: "Δ Efficacy = the VERTICAL gap between plateaus" },
          { from: "input", to: "output", label: "the ceiling never tells you the position (EC50)" },
        ],
      },
    },
    {
      id: "potency-reads-the-x-axis",
      title: "Potency: the x-axis — EC50, the position (amount of drug needed for a given effect)",
      context: "The Potency row and the RELATIVE POTENCY panel (book 232)",
      flow: {
        nodes: [
          {
            id: "input",
            label: "The same curve family, read horizontally — where it sits on Log (drug dose)",
            sublabel:
              "Input — the identical plot, now read along the x-axis. The curve's position is measured at half-maximal effect: EC50, the dose giving 50% of Emax — the legend, verbatim: 'EC = Effective concentration'.",
            variant: "input",
          },
          {
            id: "ec50",
            label: "EC50 — the dose at the 50% crossing",
            sublabel:
              "'Represented by the x-value (EC50).' In the RELATIVE POTENCY panel the 50% line is crossed twice — once per curve — and dropped to the x-axis as the two EC50 ticks. Because the axis is logarithmic, distance along it is multiplicative: one decade = tenfold dose.",
            variant: "process",
          },
          {
            id: "left",
            label: "Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed",
            sublabel:
              "The page's shift rule, verbatim: 'Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed.' In the panel Drug A sits left of Drug B at the SAME ceiling: both reach 100% maximal effect, but Drug A needs less drug for every level of effect — 'Δ Potency' is the horizontal gap between the two EC50s.",
            variant: "process",
          },
          {
            id: "output",
            label: "Potency is read on the x-axis — and is unrelated to efficacy",
            sublabel:
              "Output — the second independence clause, verbatim: 'Unrelated to efficacy (ie, potent drugs can have high or low efficacy).' Position sets the DOSE, never the CEILING: a left-shifted curve needs less drug but says nothing about how high any curve climbs — only the y-axis answers that.",
            variant: "output",
          },
        ],
        edges: [
          { from: "input", to: "ec50", label: "read the curve where it crosses 50% of Emax" },
          { from: "ec50", to: "left", label: "left shift = ↓ EC50 = ↑ potency (↓ drug needed)" },
          { from: "left", to: "output", label: "Δ Potency = the HORIZONTAL gap between EC50s" },
          { from: "ec50", to: "output", label: "the position never tells you the ceiling (Emax)" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "efficacy-potency-map",
      title: "The efficacy-vs-potency map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source page (book 232): the two definition cards — EFFICACY 'Maximal effect a drug can produce (intrinsic activity). Represented by the y-value (Emax). ↑ y-value = ↑ Emax = ↑ efficacy... Partial agonists have less efficacy than full agonists.' and POTENCY 'Amount of drug needed for a given effect. Represented by the x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed...'; the RELATIVE EFFICACY panel redrawn — the full agonist's sigmoid climbing to 100% and the partial agonist's to 60% at the same curve position, dashed plateaus labeled Emax Drug A / Emax Drug B, and the vertical Δ Efficacy bracket between them; the RELATIVE POTENCY panel redrawn — two full agonists at the same 100% ceiling, Drug A left-shifted, the dashed 50% crossings dropped to the x-axis at the two EC50 ticks, the horizontal Δ Potency bracket, and the 'EC = Effective concentration' legend; the partial-agonist callout; the independence strip; and the four-code mnemonic strip.",
      notice:
        "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 254). The two definitions print in the text layer and are re-typeset verbatim in this visual's definition cards (ORIGINAL_KYP_ADAPTATION) — short attributed definition sentences, not artwork reproductions. The two dose-response panels are vector line-art curves in the PDF and are redrawn as ORIGINAL_KYP_REDRAW vector sigmoids (the standard Hill sigmoids of pharmacodynamics, drawn from scratch — full agonist vs partial agonist with different Emax; two full agonists with different EC50). The page prints NO margin mnemonic for this section; the four mnemonic codes are KYP-original designs.",
    },
    {
      kind: "table",
      title: "Book 232 — the two definitions, the shift rule, and the partial-agonist rule (carried verbatim)",
      intro:
        "Everything the page prints in words: the Efficacy row, the Potency row, and every label on both panels — as printed.",
      columns: ["Element", "As printed (book 232)"],
      rows: [
        ["The efficacy definition", "Maximal effect a drug can produce (intrinsic activity)."],
        ["The efficacy axis rule", "Represented by the y-value (Emax). ↑ y-value = ↑ Emax = ↑ efficacy."],
        ["The efficacy independence clause", "Unrelated to potency (ie, efficacious drugs can have high or low potency)."],
        ["The partial agonist rule", "Partial agonists have less efficacy than full agonists."],
        ["The potency definition", "Amount of drug needed for a given effect."],
        ["The potency axis rule", "Represented by the x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed."],
        ["The potency independence clause", "Unrelated to efficacy (ie, potent drugs can have high or low efficacy)."],
        ["The panels' shared axes", "% Maximal effect (y) vs Log (drug dose) (x) — with printed 100/50/0 gridlines"],
        ["The RELATIVE EFFICACY panel labels", "Emax Drug A · Δ Efficacy (vertical gap) · Emax Drug B"],
        ["The RELATIVE POTENCY panel labels", "Drug A · Drug B · Δ Potency (horizontal gap) · EC50 ×2 · EC = Effective concentration"],
      ],
      caption:
        "Ten printed lines carry the whole science. The two definitions are mirror images: each names its quantity, names its axis, prints its arrow chain, and closes with the SAME independence move — 'unrelated to' the other quantity. The partial-agonist sentence is the one asymmetry: it lives only on the efficacy side, because a partial agonist lowers the CEILING (a y-axis fact) while its EC50 can be identical to the full agonist's. The two panels are the two definitions drawn: RELATIVE EFFICACY varies the plateau at fixed position; RELATIVE POTENCY varies the position at fixed plateau. Learn the geometry with the words — Δ Efficacy is drawn VERTICALLY between plateaus; Δ Potency is drawn HORIZONTALLY between EC50s — and the axis rule becomes mechanical: height questions are efficacy questions, distance questions are potency questions.",
    },
    {
      kind: "table",
      title: "The two-axis decision table — which axis, which quantity, which delta (KYP synthesis)",
      intro:
        "The exam-facing distillation: given a stem's language, which quantity is it testing and which curve feature answers it.",
      columns: ["The stem says...", "Axis and quantity", "Reading and clinical carrier"],
      rows: [
        ["'Achieves the same maximal effect at one-tenth the dose' (two curves, same ceiling, different position)", "x-axis — POTENCY (EC50)", "Left shift: ↓ EC50 = ↑ potency = ↓ drug needed. Haloperidol (mg doses) vs chlorpromazine (hundreds of mg) — equally efficacious antipsychotics, ~50× different potency; morphine vs meperidine for analgesia"],
        ["'Produces only 60% of the maximal response even at saturating doses / full receptor occupancy'", "y-axis — EFFICACY (Emax)", "Partial agonist — lower ceiling, not lower position: 'Partial agonists have less efficacy than full agonists.' Buprenorphine (respiratory-depression ceiling), aripiprazole (partial D2 agonism), pentazocine (analgesia ceiling)"],
        ["'Which drug produces the greatest maximal effect?' (pick among options)", "y-axis — EFFICACY (Emax)", "Pick the highest Emax (the full agonist) and ignore every EC50 in the vignette: full μ agonist (morphine, fentanyl) over any partial agonist when maximal analgesia is the goal"],
        ["'Δ Efficacy' on a figure", "a VERTICAL gap", "The distance between two plateaus (Emax values) — read on the y-axis ('% Maximal effect'), never along the dose axis"],
        ["'Δ Potency' on a figure", "a HORIZONTAL gap", "The distance between two EC50 ticks — read on the x-axis ('Log (drug dose)'); because the axis is log, the gap is a FOLD difference in dose"],
        ["'A more potent drug is the better/stronger drug'", "the trap — NEITHER axis", "Independence: 'potent drugs can have high or low efficacy.' Potency sets the dose (and the milligram number on the prescription); efficacy sets the ceiling. Chlorpromazine is the exam's proof: far less potent than haloperidol, equally efficacious at adequate doses"],
      ],
      caption:
        "Read this table as the page's two independence clauses expanded into a decision procedure. The failure it predicts at the bedside: choosing (or avoiding) a drug by its potency — 'strong drug' language — when the clinical question is a ceiling question. Potency decides the dose and nothing else: a less potent, equally efficacious drug simply comes in bigger pills (chlorpromazine 100 mg vs haloperidol 2 mg). The ceiling decides what is achievable at ANY dose: no amount of a partial agonist reproduces a full agonist's maximal effect — which is why buprenorphine has a respiratory-depression ceiling (a safety feature) and why pentazocine cannot match morphine's maximal analgesia (a limitation). See the enzyme-kinetics page (PH1) for the isomorphic Km/Vmax reading, the pharmacokinetics page (PH2) for the exposure machinery that puts drug at the receptor, and the dosage-calculations page (PH6) for the Cp arithmetic that turns a target concentration into a regimen.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A pharmacology question presents two full agonists at the same receptor. Curve A reaches 100% of maximal effect at a dose one decade to the left of curve B; both plateau at the same height. The question asks which statement is correct — and the options include 'Drug A is more efficacious', 'Drug A is more potent', and 'Drug A has a higher Emax'.",
        discriminator:
          "Same ceiling + different position → the x-axis: 'Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed' — a potency difference, with Emax identical",
        concept: "The relative-potency axis (the left shift)",
        answer:
          "This is the RELATIVE POTENCY panel verbatim: 'Drug A' left-shifted, 'Drug B' right-shifted, both climbing to the same 100% ceiling, 'Δ Potency' drawn as the horizontal gap between the two EC50 ticks. The page's rule, verbatim: 'Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed.' Three structural facts make the question easy: (1) the y-values are IDENTICAL (same Emax = same efficacy) — so any option claiming a difference in Emax, maximal effect, or efficacy is describing the wrong axis; (2) the x-axis is logarithmic, so a decade shift is a tenfold difference in the dose needed; (3) the page's independence clause closes the door: 'Unrelated to efficacy (ie, potent drugs can have high or low efficacy).' The clinical carriers: haloperidol vs chlorpromazine (equally efficacious antipsychotics, ~50-fold potency difference), morphine vs meperidine (equally efficacious full μ agonist analgesics at adequate doses), fentanyl vs morphine (microgram vs tens-of-milligrams dosing for the same ceiling).",
      },
      {
        stem:
          "A stem states that a drug binds its receptor with high affinity, and at full receptor occupancy the maximal response it produces is only 60% of that of a full agonist at the same receptor — no increase in dose raises it further. The options ask whether this is a potency difference, an efficacy difference, or both.",
        discriminator:
          "'Only 60% of maximal response even at saturating occupancy' → the ceiling is lowered → 'Partial agonists have less efficacy than full agonists' — an Emax difference; EC50 may be identical",
        concept: "The partial-agonist ceiling (the RELATIVE EFFICACY axis)",
        answer:
          "The page's partial-agonist rule, verbatim: 'Partial agonists have less efficacy than full agonists.' This is the RELATIVE EFFICACY panel: the partial agonist's plateau ('Emax Drug B') sits below the full agonist's ('Emax Drug A') at the same curve position, and 'Δ Efficacy' is the vertical gap between the plateaus. The mechanism is intrinsic activity: the partial agonist's drug-receptor complex couples to the response with lower activity, so at 100% occupancy the response still plateaus below the full agonist's — no dose above saturation changes a plateau. Two exam consequences: (1) a partial agonist is NEVER 'less potent' for this finding — its EC50 can be identical to (or even left of) the full agonist's; (2) any option claiming 'increasing the dose will raise the maximal effect toward the full agonist's Emax' is wrong — that is the ceiling-vs-position confusion. The clinical carriers: buprenorphine (ceiling on respiratory depression — the safety logic of medication-assisted treatment), aripiprazole (partial D2 agonism — antipsychotic efficacy without full-antagonist prolactin elevation), pentazocine (ceiling on analgesia).",
      },
      {
        stem:
          "A vignette asks which analgesic will provide the greatest maximal pain relief for severe postoperative pain, offering a full μ agonist (morphine), two partial agonists (buprenorphine, pentazocine), and a drug described as 'extremely potent — active at microgram doses' whose curve plateaus at 60% of maximal effect.",
        discriminator:
          "'Greatest maximal effect' → the y-axis: pick the highest Emax — '↑ y-value = ↑ Emax = ↑ efficacy' — and ignore potency entirely, even the impressive microgram EC50",
        concept: "The maximal-effect question (efficacy trumps potency)",
        answer:
          "When the question is the CEILING question, only the y-axis answers: 'Maximal effect a drug can produce (intrinsic activity). Represented by the y-value (Emax). ↑ y-value = ↑ Emax = ↑ efficacy.' The full agonist (morphine) has the highest Emax and wins; the 'extremely potent' option is the designed trap — its microgram EC50 says its curve sits LEFT (x-axis: 'Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed'), which the page separates explicitly from efficacy: 'Unrelated to efficacy (ie, potent drugs can have high or low efficacy).' A partial agonist at 60% ceiling cannot match the full agonist's maximal analgesia AT ANY DOSE — that is precisely why pentazocine is not used for severe postoperative pain, and why buprenorphine's ceiling (a liability for analgesia, an asset for respiratory safety) is a y-axis fact. Rule of thumb: for 'greatest effect' pick the highest Emax; for 'least dose needed' pick the lowest EC50; and never let one answer the other's question.",
      },
    ],
    traps: [
      {
        a: "A left-shifted curve (same ceiling) means the drug is MORE EFFICACIOUS (or 'has a higher Emax')",
        b: "Calling a left shift an efficacy difference — or a lower plateau a potency difference",
        whyConfused:
          "Both quantities describe 'how good a drug is', and everyday language uses 'stronger' for both — so students import the x-axis fact into the y-axis quantity",
        keyDifference:
          "The page assigns each quantity its own axis, verbatim: efficacy is 'Represented by the y-value (Emax)' and potency is 'Represented by the x-value (EC50).' A left shift moves the curve ALONG the dose axis — it changes WHERE the 50% crossing sits, not HOW HIGH the plateau climbs. The RELATIVE POTENCY panel makes the separation visual: two curves at the same 100% ceiling, different positions, 'Δ Potency' drawn horizontally. The mirror panel (RELATIVE EFFICACY) shows the other half: two curves at the same position, different plateaus, 'Δ Efficacy' drawn vertically. A stem that hands you a left shift and offers 'increased efficacy' as an option is testing exactly this axis assignment.",
        clue:
          "Ask WHICH GEOMETRY moved: the curve slid LEFT (x) → potency (EC50); the ceiling moved UP or DOWN (y) → efficacy (Emax). Mnemonic: EFFICACY IS THE CEILING, READ THE y-AXIS · POTENCY IS THE POSITION, READ THE x-AXIS.",
      },
      {
        a: "Potency is a measure of therapeutic superiority — a more potent drug is a better/stronger drug",
        b: "'High-potency' drug = better drug (or 'low-potency' = weaker, less useful)",
        whyConfused:
          "Clinical shorthand ('high-potency antipsychotic', 'potent opioid') sounds like praise, and marketing leans on it",
        keyDifference:
          "Potency is only 'the amount of drug needed for a given effect' — it sets the DOSE, never the best achievable effect. The page's independence clauses close both directions: 'Unrelated to potency (ie, efficacious drugs can have high or low potency)' and 'Unrelated to efficacy (ie, potent drugs can have high or low efficacy).' The exam's proof pair: haloperidol (high potency, mg dosing) vs chlorpromazine (low potency, hundreds of mg) — equally efficacious antipsychotics; chlorpromazine is not a 'weaker' antipsychotic, it just comes in bigger pills (with more anticholinergic and sedative burden at the doses needed). What potency DOES matter for: dose size, tablet count, and sometimes the side-effect profile at the delivered dose — never the ceiling.",
        clue:
          "When an option converts potency into a value judgment ('superior', 'stronger', 'more effective'), reject it — potency sets the dose; efficacy sets the ceiling. Mnemonic: CEILING ≠ POSITION — THE AXES DON'T TALK.",
      },
      {
        a: "A partial agonist that produces 60% of the full agonist's maximal response is 'less potent' — or needs a higher dose to catch up",
        b: "Reading the lowered ceiling as a position problem (or claiming dose escalation restores the full agonist's Emax)",
        whyConfused:
          "'60% of the response' sounds like a quantitative shortfall that more drug should fix — students treat the plateau as a dose-limitation",
        keyDifference:
          "The page is explicit: 'Partial agonists have less efficacy than full agonists.' The partial agonist's curve plateaus LOWER at the same left-right position — its EC50 can be identical to the full agonist's (and a high-affinity partial agonist like buprenorphine sits LEFT of morphine). The shortfall is in INTRINSIC ACTIVITY: the drug-receptor complex couples to the response with lower activity, so at 100% occupancy the response still stops at the lower ceiling. No dose above saturation raises a plateau — 'increasing the dose will eventually reach the full agonist's Emax' is the signature wrong answer. The RELATIVE EFFICACY panel is this fact drawn: 'Emax Drug B' below 'Emax Drug A', 'Δ Efficacy' as the vertical gap.",
        clue:
          "'Even at saturating doses / full receptor occupancy' in the stem is the ceiling giveaway — the answer is on the y-axis. Mnemonic: PARTIALS PULL THE CEILING DOWN.",
      },
      {
        a: "Δ Efficacy is the horizontal distance between curves; Δ Potency is the vertical distance between plateaus",
        b: "Swapping the two deltas — or reading either gap off the wrong axis",
        whyConfused:
          "Both deltas are printed as bracketed gaps between the same two curves, and both questions ask 'the difference between Drug A and Drug B'",
        keyDifference:
          "The page prints each delta in its own panel with its own geometry: in the RELATIVE EFFICACY panel 'Δ Efficacy' is the VERTICAL gap between the two plateaus (an Emax difference, read on '% Maximal effect'); in the RELATIVE POTENCY panel 'Δ Potency' is the HORIZONTAL gap between the two EC50 ticks (a dose difference, read on 'Log (drug dose)' — and because the axis is log, the gap is a FOLD difference: 'Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed'). The two panels are deliberately mirror images: same position/different plateau vs same plateau/different position. Reading a delta off the wrong axis is how curve-reading questions are missed despite knowing both definitions.",
        clue:
          "Name the axis before the delta: PLATEAU difference → vertical → efficacy (Δ Efficacy); CROSSING difference → horizontal → potency (Δ Potency). The bracket's orientation is the answer key.",
      },
    ],
    pivots: [
      {
        lookAlike: "A stem describes a difference between two drugs at the same receptor — which quantity is it testing?",
        differentiator:
          "Decide by the LANGUAGE, then check the geometry. CEILING language — 'maximal effect', 'Emax', 'intrinsic activity', 'even at saturating doses / full occupancy', 'greatest effect achievable', 'only 60% of the response' — is the Y-AXIS: efficacy (partial agonists lower it; full agonists set it). POSITION language — 'EC50', 'at a lower dose', 'one-tenth the dose', 'less drug needed', 'left shift', milligram comparisons — is the X-AXIS: potency (left = potent). GEOMETRY language — a bracket between plateaus is vertical (efficacy); a bracket between 50% crossings is horizontal (potency, and on a log axis a fold difference in dose). If the stem moved a CURVE: up/down moves the ceiling (efficacy), left/right moves the position (potency).",
        correctPath:
          "Read in order: (1) find the quantity word (Emax/maximal effect vs EC50/dose needed); (2) name its axis (y vs x); (3) apply the page's arrow chain ('↑ y-value = ↑ Emax = ↑ efficacy'; 'Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed'); (4) close with the independence clause that blocks the cross-import ('efficacious drugs can have high or low potency' / 'potent drugs can have high or low efficacy').",
      },
      {
        lookAlike: "A prescribing or 'best drug' question asks which agent to choose — and the options vary in both potency and efficacy.",
        differentiator:
          "Ask what the clinical goal needs: the CEILING or the DOSE. If the goal is a maximal effect (severe pain, full antagonist... no — full AGONIST effect, maximum inotropy, deepest analgesia), efficacy decides: pick the highest Emax (the full agonist) — potency is irrelevant to whether the effect is achievable. If the goal is a favorable dose/side-effect profile at an achievable effect, potency (and selectivity) decide: pick the lower EC50 (less drug per effect — smaller pills, lower delivered burden). If the goal is a SAFETY ceiling (limited maximal effect by design), a partial agonist is the choice: buprenorphine's respiratory-depression ceiling is a deliberately lowered Emax. Never let the potency vocabulary answer a ceiling question: 'microgram-dose' says left-shifted, not high-ceiling.",
        correctPath:
          "Identify which of the three goals the stem states (maximal effect / minimal dose / safety ceiling), then map: maximal effect → highest Emax (y-axis); minimal dose → lowest EC50 (x-axis); safety ceiling → partial agonist (lower Emax, on purpose). Then re-read the options discarding every one that argues from the wrong axis — the classic distractors 'most potent' and 'lowest dose' are x-axis answers smuggled into y-axis questions.",
      },
    ],
    miniCase: {
      vignette:
        "A 34-year-old man with opioid use disorder is started on buprenorphine (sublingual, microgram-milligram dosing) after stabilization. The attending explains to the student that buprenorphine binds the μ-opioid receptor with very high affinity — it displaces morphine from the receptor at a fraction of the dose — yet even at full receptor occupancy its maximal effect on respiratory drive is far below morphine's, and no increase in dose raises it. The student asks how one drug can need so much less drug to act yet produce so much less effect, and which panel of the dose-response figure each fact is drawn on.",
      question:
        "Explain which quantity buprenorphine's high affinity and small dosing reflect (and which panel draws it), why its maximal respiratory effect is lower than morphine's at any dose (and which panel draws that), and why the two facts do not contradict each other.",
      options: [
        {
          label:
            "Buprenorphine is a partial μ agonist. Its high affinity and small EC50 mean its curve sits LEFT of morphine's on the log-dose axis — the RELATIVE POTENCY geometry: a left shift, '↓ EC50 = ↑ potency = ↓ drug needed', drawn as the horizontal Δ Potency gap between the two EC50 ticks. Its lower maximal respiratory effect means its plateau is LOWER — the RELATIVE EFFICACY geometry: a partial agonist's Emax below a full agonist's, drawn as the vertical Δ Efficacy gap between the plateaus. There is no contradiction because the two quantities read different axes and are independent: 'potent drugs can have high or low efficacy' — buprenorphine is simultaneously MORE potent (left-shifted, less drug needed) and LESS efficacious (lower ceiling) than morphine, and no dose above receptor saturation raises a plateau.",
          text:
            "High affinity = left shift (potency, x-axis); lower ceiling = partial agonist (efficacy, y-axis); the axes are independent.",
          correct: true,
          why:
            "Correct on every element. (1) THE POSITION: high receptor affinity and microgram dosing put buprenorphine's curve to the LEFT — the x-axis quantity, per the page's rule 'Represented by the x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed.' (2) THE CEILING: as a partial agonist, 'Partial agonists have less efficacy than full agonists' — its maximal respiratory effect plateaus below morphine's even at 100% receptor occupancy; lower intrinsic activity, not lower occupancy. (3) THE INDEPENDENCE: the page prints both clauses — 'Unrelated to potency (ie, efficacious drugs can have high or low potency)' and 'Unrelated to efficacy (ie, potent drugs can have high or low efficacy)' — so one drug can be more potent AND less efficacious than another; buprenorphine is the exam's canonical example, and its respiratory-depression ceiling is the safety logic of medication-assisted treatment (the reason overdose on buprenorphine alone is far safer than on a full agonist).",
        },
        {
          label:
            "Buprenorphine produces less effect at every dose than morphine, so it is the LESS POTENT opioid: like all low-potency drugs it would need larger doses to achieve morphine's effect, and with sufficient dose escalation its maximal effect — including respiratory depression — would match morphine's Emax.",
          text:
            "The lower ceiling means 'less potent'; dose escalation restores the full agonist's Emax.",
          why:
            "The axis-swap distractor with a dose-escalation rider — two errors stacked. (1) It reads the lowered plateau (a y-axis fact: 'Partial agonists have less efficacy than full agonists') as a position fact. (2) It then claims dose escalation fixes it: no dose above receptor saturation raises a partial agonist's plateau — the ceiling is intrinsic activity, not occupancy. Buprenorphine in fact displaces morphine at a FRACTION of the dose (it sits LEFT — more potent); its limitation is the ceiling, not the dose. The clinical corollary this option would produce — 'push more buprenorphine to match morphine's respiratory effect' — fails at the plateau, which is exactly the safety property the drug was chosen for.",
        },
        {
          label:
            "The difference between the two drugs is a potency difference only: buprenorphine's curve is compressed toward the y-axis, and at high enough doses its dose-response curve climbs to the same Emax as morphine's, including the same maximal respiratory depression — the curves converge at the ceiling.",
          text:
            "Pure potency difference — the curves converge at Emax as dose rises.",
          why:
            "The ceiling-denial distractor — the single most common wrong answer in dose-response questions. Convergence at the ceiling happens ONLY between a full agonist and a more potent full agonist (the RELATIVE POTENCY panel: same plateau, different positions). A partial agonist's curve never converges with a full agonist's at any dose: it runs parallel BELOW it and plateaus earlier — the RELATIVE EFFICACY panel ('Δ Efficacy' as the vertical gap between 'Emax Drug A' and 'Emax Drug B'). The page's rule, verbatim: 'Partial agonists have less efficacy than full agonists' — efficacy, by the page's definition, is the maximal effect a drug can produce, and by dose you cannot exceed it.",
        },
        {
          label:
            "Potency and efficacy always rise together: a drug that acts at microgram doses is by definition more efficacious as well — buprenorphine is both more potent and more efficacious than morphine, which is why it is used in opioid use disorder.",
          text:
            "'Potent' implies 'efficacious' — the two quantities move together.",
          why:
            "The independence-violation distractor. The page prints the orthogonality twice, verbatim: 'Unrelated to potency (ie, efficacious drugs can have high or low potency)' and 'Unrelated to efficacy (ie, potent drugs can have high or low efficacy).' Buprenorphine is used in opioid use disorder BECAUSE of its dissociated properties: high potency (affinity — it blocks exogenous opioids at low concentration) with low efficacy on respiratory drive (the ceiling that makes overdose safer). A drug that is simultaneously more potent and less efficacious than its comparator is the whole point of the two-panel figure — and the reason 'more potent = better' fails as a prescribing rule.",
        },
        {
          label:
            "On the dose-response figure, Δ Efficacy is the horizontal distance between the two curves at the 50% level, and Δ Potency is the vertical distance between their plateaus — so buprenorphine's advantage appears as a wide horizontal Δ Efficacy at mid-height.",
          text:
            "The two deltas are swapped: Δ Efficacy horizontal, Δ Potency vertical.",
          why:
            "The delta-geometry distractor. The page draws each delta in its own panel with its own orientation: in RELATIVE EFFICACY, 'Δ Efficacy' is the VERTICAL gap between the plateaus 'Emax Drug A' and 'Emax Drug B' (a y-axis, Emax difference); in RELATIVE POTENCY, 'Δ Potency' is the HORIZONTAL gap between the two EC50 ticks (an x-axis, dose difference — a fold difference because the axis is logarithmic). Swapping them turns a ceiling question into a position question and vice versa — here it would mislabel buprenorphine's left shift (a potency fact) as an efficacy fact. Name the axis before naming the delta: plateau differences are vertical (efficacy); crossing differences are horizontal (potency).",
        },
      ],
      reasoning:
        "The stem walks buprenorphine — the exam's canonical dissociation of the two quantities — through both panels and asks for the reconciliation. The page supplies each answer verbatim. (1) THE POSITION: high affinity, microgram dosing, displacement of morphine at a fraction of the dose → the curve sits LEFT: 'Represented by the x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed' — the RELATIVE POTENCY geometry (horizontal Δ Potency between EC50 ticks). (2) THE CEILING: even at full occupancy the respiratory effect plateaus below morphine's → 'Partial agonists have less efficacy than full agonists' — the RELATIVE EFFICACY geometry (vertical Δ Efficacy between 'Emax Drug A' and 'Emax Drug B'). (3) THE RECONCILIATION: the two independence clauses — 'efficacious drugs can have high or low potency' and 'potent drugs can have high or low efficacy' — so more potent AND less efficacious is not a contradiction but the designed property of a partial agonist; the respiratory-depression ceiling is the therapeutic rationale. The distractors fail at: 'less potent, dose escalation restores Emax' (axis swap plus ceiling denial — no dose above saturation raises a plateau); 'potency difference only, curves converge at the ceiling' (convergence happens only between full agonists — the RELATIVE POTENCY panel's same-plateau premise); 'potency and efficacy rise together' (direct violation of both printed independence clauses); and 'Δ Efficacy horizontal, Δ Potency vertical' (the delta-geometry swap — each delta is drawn in its own panel with its own orientation).",
    },
  },
  mnemonics: [
    {
      code: "EFFICACY IS THE CEILING — READ THE y-AXIS: Emax = maximal effect (intrinsic activity); ↑ y-value = ↑ Emax = ↑ efficacy",
      meaning:
        "The page's efficacy rule compressed: efficacy is 'the maximal effect a drug can produce (intrinsic activity)', and it is 'represented by the y-value (Emax)'. The plateau height of the dose-response curve is the ceiling — a property of receptor-effector coupling that no dose above saturation can change. Raising the ceiling is the only way to raise efficacy; a partial agonist is a drug with a built-in lower ceiling.",
      memorizes: "Which quantity is Emax, which axis it reads on, and what the plateau means",
      whenToUse:
        "Any curve or option pair about maximal effect, Emax, intrinsic activity, or 'even at saturating doses'",
      clinical:
        "Full μ agonists (morphine, fentanyl) vs partial agonists (buprenorphine, pentazocine): the ceiling on analgesia and on respiratory depression. When the question asks 'greatest maximal effect', the answer is the highest Emax — the full agonist — regardless of any drug's dose advantage.",
    },
    {
      code: "POTENCY IS THE POSITION — READ THE x-AXIS: EC50 = the dose for 50% effect; LEFT SHIFT = ↓ EC50 = ↑ potency = ↓ drug needed",
      meaning:
        "The page's potency rule compressed: potency is 'the amount of drug needed for a given effect', and it is 'represented by the x-value (EC50)'. Where the curve sits along the log-dose axis is how much drug each level of effect costs — further left, less drug. EC50 is the dose at the 50% crossing; the legend: 'EC = Effective concentration'.",
      memorizes: "Which quantity is EC50, which axis it reads on, and what a left shift means",
      whenToUse:
        "Any stem comparing doses ('one-tenth the dose', 'active at microgram doses'), any EC50 question, and any 'high-potency / low-potency' drug pair",
      clinical:
        "Haloperidol (mg) vs chlorpromazine (hundreds of mg): equally efficacious antipsychotics, ~50-fold potency difference. Fentanyl vs morphine: microgram vs tens-of-milligram dosing at the same ceiling. Potency sets the pill size — never the best effect.",
    },
    {
      code: "PARTIALS PULL THE CEILING DOWN — partial agonists have less efficacy than full agonists (lower Emax at any dose, even full occupancy)",
      meaning:
        "The page's partial-agonist rule, verbatim: 'Partial agonists have less efficacy than full agonists.' A partial agonist's curve plateaus below a full agonist's at the same left-right position — lower intrinsic activity, not lower occupancy. Its EC50 can equal (or beat) the full agonist's; only its ceiling is lower, and no dose raises it.",
      memorizes: "The one asymmetry of the page — which quantity the partial agonist lowers",
      whenToUse:
        "Any stem with 'partial agonist', 'only 60% of maximal response', 'saturating doses', or a safety-ceiling question",
      clinical:
        "Buprenorphine's respiratory-depression ceiling (the safety logic of medication-assisted treatment); aripiprazole's partial D2 agonism (antipsychotic efficacy without full-antagonist prolactin elevation); pentazocine's analgesia ceiling; β-blockers with intrinsic sympathomimetic activity (pindolol, acebutolol) — partial agonists whose lower ceiling on heart-rate reduction spares resting bradycardia.",
    },
    {
      code: "CEILING ≠ POSITION — THE AXES DON'T TALK: efficacious drugs can have high or low potency; potent drugs can have high or low efficacy",
      meaning:
        "The page's two independence clauses compressed into one rule: efficacy ('Unrelated to potency — efficacious drugs can have high or low potency') and potency ('Unrelated to efficacy — potent drugs can have high or low efficacy') are read on different axes and vary independently. Any argument that smuggles one quantity into the other — 'potent so it's stronger', 'less efficacious so it's weaker per milligram' — violates the printed page.",
      memorizes: "The independence of the two quantities and the falsity of 'potent = better'",
      whenToUse:
        "Any option that converts potency into a value judgment, any 'best drug' question, and any seeming contradiction between a drug's dose and its maximal effect",
      clinical:
        "Buprenorphine vs morphine (more potent AND less efficacious — no contradiction); chlorpromazine vs haloperidol (far less potent, equally efficacious). Prescribe by the axis the goal needs: ceiling questions get efficacy answers; dose questions get potency answers.",
    },
  ],
  rapidReview: {
    s30: [
      "Efficacy definition (verbatim): 'Maximal effect a drug can produce (intrinsic activity).'",
      "Efficacy axis rule (verbatim): 'Represented by the y-value (Emax). ↑ y-value = ↑ Emax = ↑ efficacy.'",
      "Efficacy independence (verbatim): 'Unrelated to potency (ie, efficacious drugs can have high or low potency).'",
      "Partial agonist rule (verbatim): 'Partial agonists have less efficacy than full agonists.' — a lower ceiling at the same curve position, even at 100% occupancy",
      "Potency definition (verbatim): 'Amount of drug needed for a given effect.'",
      "Potency axis rule (verbatim): 'Represented by the x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed.'",
      "Potency independence (verbatim): 'Unrelated to efficacy (ie, potent drugs can have high or low efficacy).'",
      "The panels' shared axes: '% Maximal effect' (y) vs 'Log (drug dose)' (x) — with printed 100/50/0 gridlines",
      "The deltas' geometry: Δ Efficacy = the VERTICAL gap between plateaus (Emax values); Δ Potency = the HORIZONTAL gap between EC50 ticks (a fold difference on the log axis)",
      "The EC legend (verbatim): 'EC = Effective concentration' — EC50 is the dose producing 50% of maximal effect; EC50 prints twice on the RELATIVE POTENCY panel",
    ],
    m3: [
      "EFFICACY IS THE CEILING — READ THE y-AXIS: Emax = maximal effect (intrinsic activity)",
      "POTENCY IS THE POSITION — READ THE x-AXIS: left shift = ↓ EC50 = ↑ potency = ↓ drug needed",
      "PARTIALS PULL THE CEILING DOWN — partial agonists have less efficacy than full agonists",
      "CEILING ≠ POSITION — the axes don't talk: efficacious drugs can have high or low potency; potent drugs can have high or low efficacy",
      "Vertical delta = efficacy (between plateaus); horizontal delta = potency (between EC50s, a fold difference in dose)",
    ],
    m10: [
      "Both definitions verbatim: efficacy = 'Maximal effect a drug can produce (intrinsic activity). Represented by the y-value (Emax)'; potency = 'Amount of drug needed for a given effect. Represented by the x-value (EC50)'",
      "The mirror panels: RELATIVE EFFICACY varies the plateau at fixed position (Emax Drug A above Emax Drug B, Δ Efficacy vertical); RELATIVE POTENCY varies the position at fixed plateau (Drug A left of Drug B, Δ Potency horizontal)",
      "Mechanism spine: the plateau is INTRINSIC ACTIVITY — drug-receptor coupling, unchangeable by dose above receptor saturation; the position is the 50% crossing (EC50, 'EC = Effective concentration') — set by affinity and, in vivo, by exposure at the receptor",
      "Why the x-axis is log: receptor occupancy is a hyperbola in dose; a hyperbola plotted against log dose is the sigmoid drawn in both panels — and equal distances on a log axis are equal FOLD differences in dose",
      "The one asymmetry: the partial-agonist sentence lives only on the efficacy side — partial agonists lower the ceiling (y), while their EC50 can be identical to (or left of) the full agonist's (x)",
    ],
  },
  recall: [
    {
      q: "The efficacy definition and its axis rule, verbatim.",
      a: "Maximal effect a drug can produce (intrinsic activity). Represented by the y-value (Emax). ↑ y-value = ↑ Emax = ↑ efficacy. Unrelated to potency (ie, efficacious drugs can have high or low potency). Partial agonists have less efficacy than full agonists — a lower ceiling at the same curve position, even at full receptor occupancy.",
    },
    {
      q: "The potency definition and its axis rule, verbatim.",
      a: "Amount of drug needed for a given effect. Represented by the x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed. Unrelated to efficacy (ie, potent drugs can have high or low efficacy). EC = Effective concentration; EC50 is the dose producing 50% of maximal effect, and on the log-dose axis a left shift is a fold reduction in the dose needed.",
    },
    {
      q: "The partial agonist rule, verbatim — and which panel feature draws it.",
      a: "Partial agonists have less efficacy than full agonists. It is drawn in the RELATIVE EFFICACY panel: the partial agonist's plateau ('Emax Drug B') sits below the full agonist's ('Emax Drug A') at the same left-right position, with 'Δ Efficacy' as the vertical gap between the plateaus — a lower ceiling from lower intrinsic activity, not a dose shortfall: no dose above receptor saturation raises it.",
    },
    {
      q: "The two independence clauses, verbatim — and the geometry of the two deltas.",
      a: "Efficacy: 'Unrelated to potency (ie, efficacious drugs can have high or low potency).' Potency: 'Unrelated to efficacy (ie, potent drugs can have high or low efficacy).' The deltas: Δ Efficacy is the VERTICAL gap between the two plateaus (read on '% Maximal effect'); Δ Potency is the HORIZONTAL gap between the two EC50 ticks (read on 'Log (drug dose)' — a fold difference in dose).",
    },
    {
      q: "The architecture of the two panels — axes, gridlines, labels, and legend, as printed.",
      a: "Both panels plot '% Maximal effect' (y) against 'Log (drug dose)' (x) with 100/50/0 gridlines. RELATIVE EFFICACY: two curves at the same position, plateaus labeled 'Emax Drug A' (upper) and 'Emax Drug B' (lower), with 'Δ Efficacy' between them. RELATIVE POTENCY: two curves at the same ceiling, labeled 'Drug A' (left) and 'Drug B' (right), two EC50 ticks at the 50% crossings, 'Δ Potency' between them, and the legend 'EC = Effective concentration'.",
    },
  ],
  related: [
    {
      title: "Enzyme Kinetics — Michaelis-Menten, Lineweaver-Burk, and Inhibition",
      topicId: "enzyme-kinetics",
      note:
        "The isomorphic page (PH1, book 228): the enzyme-kinetics dose-response has the SAME two axes — Km is the substrate concentration needed for half-maximal rate (a POSITION quantity, like EC50: 'the substrate concentration needed for an enzyme to reach a rate of 1/2 Vmax'), Vmax is the ceiling (like Emax). The page itself borrows this topic's vocabulary: reversible competitive inhibition prints 'Km ↑, ↓ potency' and noncompetitive prints 'Vmax ↓, ↓ efficacy' — the same left-shift/ceiling-drop geometry drawn on the enzyme instead of the receptor. Reading a Lineweaver-Burk plot is reading this page's two axes in reciprocal form: the closer to 0 on the y-axis the higher the Vmax (ceiling); the closer to 0 on the x-axis the lower the Km (position — more potent).",
    },
    {
      title: "Pharmacokinetics — Bioavailability, Vd, Clearance, Half-life",
      topicId: "pharmacokinetics",
      note:
        "The machinery page (PH2, book 229) supplies the in-vivo side of this figure: what the body does to the drug (F, Vd, CL, t1/2) determines the CONCENTRATION delivered to the receptor — which sets where a drug's curve sits in a patient (its effective EC50 in vivo shifts with absorption, distribution, and clearance). The division of labor: pharmacokinetics is what the body does to the drug; THIS page is what the drug does to the body (pharmacodynamics) — the graded dose-response curve is the bridge, with concentration on one side and effect on the other. A curve drawn from a fixed dose in vivo moves left or right with the patient's elimination machinery even when the drug's receptor pharmacology is unchanged.",
    },
    {
      title: "Dosage Calculations — Loading and Maintenance Dosing",
      topicId: "dosage-calculations",
      note:
        "The companion arithmetic page (PH6, book 231): Cp is the target plasma CONCENTRATION, and the loading/maintenance formulas deliver it. This page's curve answers the question the Cp arithmetic cannot: what EFFECT a given concentration produces. The two pages meet at EC50 — the concentration producing 50% of maximal effect — and at Emax: raising Cp above the EC50 region climbs the curve toward its ceiling, and no Cp above receptor saturation raises the ceiling (a partial agonist's plateau is the limit the Cp arithmetic can never push past). When a regimen targets a Cp, this page's curve converts that concentration into a predicted effect.",
    },
    {
      title: "Sympathomimetics — Agonists and the Receptor Map",
      topicId: "sympathomimetics",
      note:
        "The exam's most familiar agonist family is a live dose-response system: catecholamines at adrenergic receptors. Epinephrine's dose ladder (low-dose β2 vasodilation → α1 vasoconstriction at higher doses) is read along the log-dose axis — progressive recruitment of lower-affinity receptors as dose rises, the pharmacodynamic reason the epi curve changes character across decades of dose. Rank-order potency at each receptor (norepinephrine a potent α agonist, isoproterenol a potent β agonist with little α effect) is position language for receptor selectivity — the x-axis quantity applied to which receptor the curve belongs to. The EpiReversal visual in that topic is this page's sigmoid family at work in hemodynamics.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (Michaelis-Menten kinetics — the isomorphic curve)",
      connection:
        "Enzyme kinetics is this page drawn on a protein catalyst: Km is the position quantity (the substrate concentration needed for half-maximal rate — 'inversely related to the affinity of the enzyme for its substrate', exactly as EC50 is the dose needed for half-maximal effect), and Vmax is the ceiling ('directly proportional to the enzyme concentration' — the maximal rate the system can produce, exactly as Emax is the maximal effect). The shared vocabulary is printed on both pages: competitive inhibition 'Km ↑, ↓ potency' (a right shift — position only) and noncompetitive inhibition 'Vmax ↓, ↓ efficacy' (a ceiling drop only). One mental figure serves both subjects: position moves the curve along the axis; ceiling moves its plateau; and the two are independent on both pages.",
    },
    {
      subject: "Psychiatry (aripiprazole — the classic partial agonist)",
      connection:
        "Aripiprazole is the exam's psychiatric carrier of 'Partial agonists have less efficacy than full agonists': a partial D2 agonist whose ceiling sits below a full agonist's but well above a neutral antagonist's. That intermediate Emax is the mechanism of its clinical profile — enough intrinsic activity at D2 (and partial 5-HT1A agonism) for antipsychotic efficacy in positive and negative symptoms, without the full-antagonist prolactin elevation (D2 blockade raises prolactin; partial agonism stabilizes it) and with less EPS than high-potency full antagonists like haloperidol. Every aripiprazole question is secretly a y-axis question: the drug was designed by choosing a ceiling.",
    },
    {
      subject: "Anesthesiology and pain medicine (buprenorphine and the ceiling on respiratory depression)",
      connection:
        "Buprenorphine is the two-axis dissociation in one drug: MORE potent than morphine (very high μ-receptor affinity — it occupies the receptor at a fraction of the concentration and displaces full agonists, the basis of both overdose reversal and induction precipitating withdrawal) and LESS efficacious on respiratory drive (a partial agonist whose Emax for respiratory depression plateaus far below morphine's). That lowered ceiling is the safety architecture of medication-assisted treatment: the reason buprenorphine overdose alone is far safer than full-agonist overdose, and the reason maximal analgesia from buprenorphine cannot match a full agonist's. Pentazocine carries the same lesson in the opposite direction — a partial agonist whose analgesia ceiling limits its use for severe pain and whose high-dose effects turn psychotomimetic.",
    },
    {
      subject: "Cardiology (β-blockers with intrinsic sympathomimetic activity — partial agonism by prescription)",
      connection:
        "β-blockers with intrinsic sympathomimetic activity (pindolol, acebutolol) are partial agonists at β receptors — the cardiology instance of 'Partial agonists have less efficacy than full agonists.' Their partial agonism gives them a LOWER ceiling on heart-rate reduction: they slow resting heart rate less than full antagonists (neutral blockers at full occupancy produce zero agonism; ISA drugs produce some), which is why they are chosen for patients prone to bradycardia, and why they produce less resting bradycardia — a y-axis property, selected on purpose. The mirror fact for inotropy: dobutamine, a full β1 agonist, is chosen when the ceiling itself is the goal — maximal inotropy in decompensated heart failure — because only a full agonist's Emax reaches it.",
    },
  ],
};
