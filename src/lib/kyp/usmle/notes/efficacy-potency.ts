import type { KypUsMLENote } from "../types";

// Pharmacology — PHARMACOKINETICS AND PHARMACODYNAMICS banner (PH-batch 6).
// Source: pdf 254 / book 232 (Efficacy vs potency). The page carries: the
// two definition blocks ("Maximal effect a drug can produce (intrinsic
// activity). Represented by the y-value (Emax). ↑ y-value = ↑ Emax =
// ↑ efficacy. Unrelated to potency (ie, efficacious drugs can have high or
// low potency). Partial agonists have less efficacy than full agonists.";
// "Amount of drug needed for a given effect. Represented by the x-value
// (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed. Unrelated to
// efficacy (ie, potent drugs can have high or low efficacy).") and the two
// figure readings (RELATIVE EFFICACY: Drug A plateauing at Emax 100 vs
// Drug B at Emax 50 with the Δ Efficacy bracket; RELATIVE POTENCY: Drug A
// left-shifted vs Drug B at the SAME maximal effect with the Δ Potency
// bracket, two EC50 markers, and the EC = Effective concentration note).
// Census (pdfimages): ZERO rasters — pure text plus the TWO VECTOR
// dose-response figures. VLM confirm attempted (ph6-vlm-census.ts) but the
// vision endpoint returned 401 on both retries (missing X-Token — an
// environment-level credential failure, not a content failure), so the
// census stands on the pdfimages raster count + the pre-extracted text
// layer per the fallback policy; the figure topology quoted here is the
// task's own pre-verified reading. No margin mnemonics print anywhere on
// the page; the KYP memory layer is original. The ↑/↓ arrows in the raw
// text layer carry \x8f/\x90 control bytes ahead of them (stripped by the
// pipeline's norm()).

export const efficacyPotency: KypUsMLENote = {
  id: "efficacy-potency",
  title: "Efficacy vs Potency: Reading Dose-Response Curves",
  subtitle:
    "Efficacy is the ceiling and potency is the position — the two independent reads of one dose-response curve (book 232): EFFICACY — the maximal effect a drug can produce (intrinsic activity), represented by the y-value (Emax): ↑ y-value = ↑ Emax = ↑ efficacy; unrelated to potency (ie, efficacious drugs can have high or low potency); partial agonists have less efficacy than full agonists — the RELATIVE EFFICACY figure shows Drug A plateauing at Emax 100 while Drug B plateaus at Emax 50, the Δ Efficacy bracket spanning the two ceilings at the same log-dose position; and POTENCY — the amount of drug needed for a given effect, represented by the x-value (EC50): left shifting = ↓ EC50 = ↑ potency = ↓ drug needed; unrelated to efficacy (ie, potent drugs can have high or low efficacy) — the RELATIVE POTENCY figure shows Drug A left-shifted of Drug B with BOTH reaching the same maximal effect, the Δ Potency bracket spanning the two EC50 markers, and the printed note EC = Effective concentration.",
  subject: "Pharmacology",
  system: "Section II · High-Yield General Principles — Pharmacology: Pharmacokinetics and Pharmacodynamics",
  pilotCategory:
    "The complete two-definition apparatus of the dose-response curve — efficacy (maximal effect a drug can produce, intrinsic activity, the y-value Emax, ↑ y-value = ↑ Emax = ↑ efficacy, unrelated to potency, partial agonists less efficacious than full agonists) and potency (amount of drug needed for a given effect, the x-value EC50, left shifting = ↓ EC50 = ↑ potency = ↓ drug needed, unrelated to efficacy) — plus both figure readings (RELATIVE EFFICACY: Drug A at Emax 100 vs Drug B at Emax 50 with the Δ Efficacy bracket; RELATIVE POTENCY: Drug A left-shifted vs Drug B at the same ceiling with the Δ Potency bracket, the paired EC50 markers, and the EC = Effective concentration note) — the axis-decode page whose intended discriminator is always WHICH AXIS the question is reading.",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 232–232 (Pharmacology — Pharmacokinetics and Pharmacodynamics: Efficacy vs potency [the Efficacy definition — maximal effect a drug can produce (intrinsic activity), represented by the y-value (Emax), ↑ y-value = ↑ Emax = ↑ efficacy, unrelated to potency, partial agonists have less efficacy than full agonists; the Potency definition — amount of drug needed for a given effect, represented by the x-value (EC50), left shifting = ↓ EC50 = ↑ potency = ↓ drug needed, unrelated to efficacy; the RELATIVE EFFICACY figure — Drug A at Emax 100 vs Drug B at Emax 50 with the Δ Efficacy bracket; the RELATIVE POTENCY figure — Drug A left-shifted vs Drug B at the same maximal effect, with the Δ Potency bracket, the two EC50 markers, and the EC = Effective concentration note])",
  tags: [
    "efficacy",
    "potency",
    "efficacy vs potency",
    "Emax",
    "EC50",
    "EC",
    "effective concentration",
    "dose-response curve",
    "dose-response",
    "graded dose-response",
    "log dose",
    "log (drug dose)",
    "% maximal effect",
    "maximal effect",
    "intrinsic activity",
    "partial agonist",
    "partial agonists",
    "full agonist",
    "left shift",
    "left shifting",
    "right shift",
    "plateau",
    "ceiling",
    "ceiling effect",
    "half-maximal effect",
    "pharmacodynamics",
    "pharmacokinetics and pharmacodynamics",
    "relative efficacy",
    "relative potency",
    "agonist",
    "competitive antagonist",
    "y-axis",
    "x-axis",
    "curve position",
    "drug potency",
    "drug efficacy",
  ],
  core: {
    what:
      "EFFICACY — maximal effect a drug can produce (intrinsic activity). Represented by the y-value (Emax). ↑ y-value = ↑ Emax = ↑ efficacy. Unrelated to potency (ie, efficacious drugs can have high or low potency). Partial agonists have less efficacy than full agonists. The RELATIVE EFFICACY figure draws it: two sigmoid curves at the same log-dose position — Drug A plateauing at 100% maximal effect (labeled Emax Drug A) and Drug B plateauing at 50% (labeled Emax Drug B), with the Δ Efficacy bracket spanning the vertical distance between the two plateaus. POTENCY — amount of drug needed for a given effect. Represented by the x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed. Unrelated to efficacy (ie, potent drugs can have high or low efficacy). The RELATIVE POTENCY figure draws it: Drug A's curve sits LEFT of Drug B's while BOTH reach the same maximal effect — the two EC50 markers sit at different positions on the Log (drug dose) axis, the Δ Potency bracket spans the horizontal distance between them, and the page notes EC = Effective concentration. Together: one curve, two independent numbers — the ceiling (Emax, read on the Y-axis) and the position (EC50, read on the X-axis), and neither number predicts the other.",
    why:
      "This page is the axis-decode for every dose-response figure on the exam. The two definitions are deliberately symmetric so each one names its own axis: efficacy is a HEIGHT question (how high does the plateau get — Emax, intrinsic activity), and potency is a DISTANCE question (how far along the log-dose axis must you travel before the drug does its work — EC50). The symmetry is the point: because a curve's height and its position are geometrically independent, the book states the independence twice — efficacious drugs can have high or low potency, and potent drugs can have high or low efficacy — which is exactly why 'more potent' can never substitute for 'more efficacious' in an answer choice. The partial-agonist clause attaches to efficacy alone: a partial agonist's curve plateaus at a lower Emax than a full agonist's whatever its EC50, so a low plateau is a ceiling fact, never a position fact. The two figures are the two readings demonstrated once each: RELATIVE EFFICACY moves only the Y (Emax Drug A at 100 vs Emax Drug B at 50, Δ Efficacy bracket between plateaus), and RELATIVE POTENCY moves only the X (Drug A left-shifted of Drug B, same ceiling, Δ Potency bracket between the EC50 markers, EC = Effective concentration). And the vocabulary is inherited directly from the enzyme-kinetics page one print page earlier: a right-shifted curve with an intact ceiling is ↓ potency (reversible competitive inhibition), a lowered ceiling is ↓ efficacy (noncompetitive or irreversible inhibition) — the same two reads, now drawn on drug-receptor axes.",
    keyIdea:
      "Read every dose-response question through the two axes, in order. AXIS 1 — THE CEILING (Emax, the Y-value): efficacy is the maximal effect a drug can produce (intrinsic activity); ↑ y-value = ↑ Emax = ↑ efficacy; a higher plateau wins the efficacy question; partial agonists have less efficacy than full agonists, so THEIR curve plateaus lower no matter where it sits. AXIS 2 — THE POSITION (EC50, the X-value): potency is the amount of drug needed for a given effect; left shifting = ↓ EC50 = ↑ potency = ↓ drug needed, so the curve that arrives first (leftmost) is the potent one; EC = Effective concentration. THEN REFUSE TO CROSS THE AXES: efficacy is unrelated to potency — efficacious drugs can have high or low potency, and potent drugs can have high or low efficacy — so a left-shifted curve tells you NOTHING about the ceiling, and a tall curve tells you NOTHING about the dose. Figure protocol: compare plateaus first (Δ Efficacy is a vertical bracket between Emax values), then compare positions (Δ Potency is a horizontal bracket between EC50 markers), and only then name partial agonists (a curve with its own lower plateau at any EC50).",
  },
  mechanisms: [
    {
      id: "emax-ceiling-map",
      title: "The Emax read: efficacy is the ceiling, drawn on the Y-axis",
      context: "The Efficacy definition + the RELATIVE EFFICACY figure (book 232)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Run a graded dose-response experiment and plot % maximal effect vs Log (drug dose)",
            sublabel:
              "Input — increase the dose across a log scale and record the effect; every drug traces a sigmoid that rises and then plateaus. The question this mechanism answers: how high does the plateau get?",
            variant: "input",
          },
          {
            id: "ceiling",
            label: "DIAL 1 — Emax, the ceiling gauge",
            sublabel:
              "Efficacy is the maximal effect a drug can produce (intrinsic activity), represented by the y-value (Emax) — the height of the plateau the curve actually reaches. ↑ y-value = ↑ Emax = ↑ efficacy.",
            variant: "process",
          },
          {
            id: "partial",
            label: "THE PARTIAL-AGONIST CLAUSE — partial agonists plateau lower",
            sublabel:
              "Partial agonists have less efficacy than full agonists: their curve carries its own lower Emax. In the RELATIVE EFFICACY figure, Drug A plateaus at Emax 100 (Emax Drug A) while Drug B plateaus at Emax 50 (Emax Drug B) — the Δ Efficacy bracket spans the two plateaus at the same log-dose position.",
            variant: "process",
          },
          {
            id: "independence",
            label: "THE INDEPENDENCE CLAUSE — the ceiling says nothing about the position",
            sublabel:
              "Efficacy is unrelated to potency (ie, efficacious drugs can have high or low potency): a tall plateau can sit anywhere on the Log (drug dose) axis. Never answer a height question with a position fact.",
            variant: "target",
          },
          {
            id: "output",
            label: "Answer Emax questions from the plateau height only",
            sublabel:
              "Output — 'more efficacious' = higher plateau (↑ y-value = ↑ Emax = ↑ efficacy); 'partial agonist' = a curve with its own lower plateau; and if the stem asks about the DOSE needed, that is the next mechanism's job, not this one's.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "ceiling", label: "read the plateau the curve reaches" },
          { from: "ceiling", to: "partial", label: "a lower plateau = less efficacy" },
          { from: "partial", to: "independence", label: "the Δ Efficacy bracket is vertical" },
          { from: "independence", to: "output", label: "height answers height" },
        ],
      },
    },
    {
      id: "ec50-shift-map",
      title: "The EC50 read: potency is the horizontal position, drawn on the X-axis",
      context: "The Potency definition + the RELATIVE POTENCY figure (book 232)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Same sigmoid curve — now ask how much drug it took",
            sublabel:
              "Input — the same % maximal effect vs Log (drug dose) plot, with a different question: at what log-dose position does the curve do its work? The answer is a place on the axis, not a height.",
            variant: "input",
          },
          {
            id: "position",
            label: "DIAL 2 — EC50, the position gauge",
            sublabel:
              "Potency is the amount of drug needed for a given effect, represented by the x-value (EC50) — where along the log-dose axis the curve reaches half of its maximal effect. EC = Effective concentration.",
            variant: "process",
          },
          {
            id: "leftshift",
            label: "THE LEFT-SHIFT RULE — left shifting = ↓ EC50 = ↑ potency = ↓ drug needed",
            sublabel:
              "In the RELATIVE POTENCY figure, Drug A's curve sits LEFT of Drug B's while BOTH reach the same maximal effect: the two EC50 markers sit at different positions on the Log (drug dose) axis and the Δ Potency bracket spans the horizontal distance between them. The curve that arrives first needs less drug — it is the more potent one.",
            variant: "process",
          },
          {
            id: "independence",
            label: "THE INDEPENDENCE CLAUSE — the position says nothing about the ceiling",
            sublabel:
              "Potency is unrelated to efficacy (ie, potent drugs can have high or low efficacy): the RELATIVE POTENCY figure deliberately gives both curves the SAME maximal effect, because the shift carries no information about the ceiling — and a left-shifted partial agonist is still a partial agonist.",
            variant: "target",
          },
          {
            id: "output",
            label: "Answer potency questions from the curve's position only",
            sublabel:
              "Output — 'more potent' = left-shifted = ↓ EC50 = ↓ drug needed (right-shifted = ↑ EC50 = less potent = more drug needed); and if the stem asks about the maximal effect, hand it back to the Emax read — this axis cannot answer it.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "position", label: "read where the curve crosses half-max" },
          { from: "position", to: "leftshift", label: "the Δ Potency bracket is horizontal" },
          { from: "leftshift", to: "independence", label: "the shift moves only the X" },
          { from: "independence", to: "output", label: "position answers position" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "dose-response-map",
      title: "The dose-response map (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source page (book 232) in four panels: PANEL 1 — the RELATIVE EFFICACY figure on original KYP axes (% Maximal effect 0–100 vs Log (drug dose)): two sigmoids at the same log-dose position, Drug A plateauing at Emax 100 and Drug B (the partial-agonist read) plateauing at Emax 50, with the Δ Efficacy bracket spanning the two plateaus vertically and the ↑ y-value = ↑ Emax = ↑ efficacy rule. PANEL 2 — the RELATIVE POTENCY figure on original KYP axes: Drug A left-shifted of Drug B with BOTH curves reaching the same maximal effect, the two EC50 markers on the Log (drug dose) axis, the Δ Potency bracket spanning them horizontally, the left-shift arrow (left shifting = ↓ EC50 = ↑ potency = ↓ drug needed), and the EC = Effective concentration note. PANEL 3 — the KYP INDEPENDENCE GRID, a 2×2 of high/low potency × high/low efficacy with a mini-curve thumbnail in every cell, flagged as a KYP teaching synthesis (not a book figure). PANEL 4 — the four exam-reading rules as cards (Y-axis for efficacy; X-axis for potency; never cross the axes; partial agonists plateau lower).",
      notice:
        "Census (pdfimages): ZERO raster images on this page — the two dose-response figures print as VECTOR line art (RELATIVE EFFICACY and RELATIVE POTENCY), and the text layer streams them cleanly with only the interleaved bracket labels (Δ Efficacy between the Emax labels; Δ Potency between the EC50 markers) and the two-line EC = Effective / concentration wrap. VLM confirm was attempted (ph6-vlm-census.ts) and failed 401 on both retries (missing X-Token — environment credentials, not content), so the census stands on the pdfimages raster count plus the pre-extracted text layer per the fallback policy. No margin mnemonics print on the page. The curves, brackets, markers, independence grid, and rule cards here are an ORIGINAL KYP redraw — nothing is reproduced from the book; the two definition blocks are also carried verbatim in the note's table block. The KYP memory layer (the four mnemonics) is original.",
    },
    {
      kind: "table",
      title:
        "Book 232 — the two definition blocks (carried verbatim, side by side as the page prints them)",
      intro:
        "The page's entire text content is these two symmetric blocks — each definition names its own axis, its own conversion, and its own independence clause.",
      columns: ["", "Efficacy", "Potency"],
      rows: [
        [
          "Definition (verbatim)",
          "Maximal effect a drug can produce (intrinsic activity).",
          "Amount of drug needed for a given effect.",
        ],
        ["Represented by", "The y-value (Emax).", "The x-value (EC50)."],
        [
          "The conversion (verbatim)",
          "↑ y-value = ↑ Emax = ↑ efficacy.",
          "Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed.",
        ],
        [
          "Independence clause (verbatim)",
          "Unrelated to potency (ie, efficacious drugs can have high or low potency).",
          "Unrelated to efficacy (ie, potent drugs can have high or low efficacy).",
        ],
        [
          "The agonist clause (verbatim)",
          "Partial agonists have less efficacy than full agonists.",
          "No agonist clause prints for potency — a partial agonist can sit anywhere on the x-axis; its lower plateau is an Emax fact, not an EC50 fact.",
        ],
        [
          "The figure that draws it",
          "RELATIVE EFFICACY — Drug A at Emax 100 vs Drug B at Emax 50; the Δ Efficacy bracket spans the two plateaus (a vertical read).",
          "RELATIVE POTENCY — Drug A left-shifted of Drug B at the same maximal effect; the Δ Potency bracket spans the two EC50 markers (a horizontal read). EC = Effective concentration.",
        ],
      ],
      caption:
        "One curve, two independent numbers: efficacy lives on the Y-axis (the ceiling, Emax — partial agonists plateau lower), potency lives on the X-axis (the position, EC50 — left shifting means less drug needed), and each definition explicitly renounces the other's question.",
    },
    {
      kind: "steps",
      title: "Reading any two-curve dose-response figure in four moves",
      intro:
        "The two definitions arranged as a figure protocol — ceilings first, then positions, then name the partial agonist, then refuse to cross the axes.",
      steps: [
        {
          label: "MOVE 1 — Read the Y-axis for efficacy",
          detail:
            "Compare the plateau heights (Emax): the higher plateau is the more efficacious drug — ↑ y-value = ↑ Emax = ↑ efficacy. In the RELATIVE EFFICACY figure this is Drug A at 100% vs Drug B at 50%, with the Δ Efficacy bracket drawn vertically between the two plateaus.",
        },
        {
          label: "MOVE 2 — Read the X-axis for potency",
          detail:
            "Compare the curve positions (EC50): the left-shifted curve is the more potent drug — left shifting = ↓ EC50 = ↑ potency = ↓ drug needed. In the RELATIVE POTENCY figure both curves reach the same maximal effect while Drug A sits left of Drug B, and the Δ Potency bracket is drawn horizontally between the two EC50 markers (EC = Effective concentration).",
        },
        {
          label: "MOVE 3 — Name the partial agonist",
          detail:
            "A curve with its own lower plateau is a partial agonist: partial agonists have less efficacy than full agonists. Judge it ONLY by the plateau — a partial agonist can be left-shifted (more potent), right-shifted (less potent), or share the full agonist's EC50 exactly.",
        },
        {
          label: "MOVE 4 — Refuse to cross the axes",
          detail:
            "Efficacy is unrelated to potency: efficacious drugs can have high or low potency, and potent drugs can have high or low efficacy. A left shift never raises the ceiling, and a tall ceiling never moves the curve — if an answer choice uses one axis's fact to answer the other axis's question, it is wrong by definition.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "'More potent' is never 'more efficacious' — and neither is 'better'",
      body:
        "The exam's favorite wrong answer on this page is a potency fact offered as an efficacy conclusion (or the reverse): 'Drug X must be more efficacious because its curve lies to the left,' or 'Drug Y is stronger because a higher dose is needed.' Both are axis errors — the left shift only means less drug needed (↓ EC50 = ↑ potency) and the higher required dose only means less potency (↑ EC50), while the ceiling (Emax) is decided entirely on the Y-axis and is statistically unrelated to where the curve sits. The clinical corollary: potency only sizes the dose (a more potent drug needs a smaller dose for the same effect), while efficacy sets what effect is achievable at all — when a maximal effect is required, a potent but low-efficacy drug (eg, a partial agonist with a low plateau at a left-shifted EC50) is the wrong tool no matter how little of it you need.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A test question presents two log dose-response curves for drugs acting at the same receptor. Both curves plateau at the same height, but curve 1 lies 10-fold to the left of curve 2. The question asks which drug is more potent and whether their efficacies differ.",
        discriminator:
          "Same Emax with a left shift — potency differs (curve 1: ↓ EC50), efficacy does not",
        concept: "The X-axis read with the independence clause",
        answer:
          "Curve 1 is more potent: left shifting = ↓ EC50 = ↑ potency = ↓ drug needed. The two drugs are equally efficacious — both plateaus sit at the same Emax, and efficacy is read only from the y-value. Potency is unrelated to efficacy, so the left shift carries no information about the ceiling.",
      },
      {
        stem: "Two curves sit at the same position on the log-dose axis, but drug A plateaus at 100% maximal effect while drug B plateaus at 50%. The stem notes both compounds act as agonists at the same receptor.",
        discriminator:
          "Same EC50 with different Emax — an efficacy difference, and the 50% plateau names drug B a partial agonist",
        concept: "The Y-axis read + the partial-agonist clause",
        answer:
          "Drug A is more efficacious: ↑ y-value = ↑ Emax = ↑ efficacy, and partial agonists have less efficacy than full agonists — drug B's lower plateau is the partial-agonist signature (exactly the RELATIVE EFFICACY figure: Emax Drug A 100 vs Emax Drug B 50, Δ Efficacy bracket between the plateaus). Their potencies may even be identical, since the two curves share a position.",
      },
      {
        stem: "A stem states that drug X achieves the same maximal effect as drug Y but at one-hundredth of the dose, then asks what can be concluded about the two drugs' efficacy and potency.",
        discriminator:
          "Same maximal effect at a much smaller dose — ↑ potency, and NOTHING about efficacy beyond 'the same'",
        concept: "The definition pair applied to a word stem (no figure)",
        answer:
          "Drug X is 100× more potent (amount of drug needed for a given effect — ↓ EC50, left-shifted); the two drugs are equally efficacious (the same maximal effect = the same Emax). Any choice claiming an efficacy difference from the dose needed commits the axis error — potency is unrelated to efficacy.",
      },
      {
        stem: "A competitive antagonist is added to a full agonist. On the resulting log dose-response plot, the agonist curve shifts right but still reaches its original maximal effect at a higher concentration.",
        discriminator:
          "Parallel right shift with an intact ceiling — ↓ potency, efficacy unchanged",
        concept: "The bridge from the enzyme-kinetics pharmacodynamics row",
        answer:
          "The antagonist-occupied curve needs more agonist for any given effect — EC50 ↑, so potency ↓ — but the maximal effect is preserved (same Emax, same efficacy). This is the dose-response translation of the enzyme-kinetics table's reversible-competitive row (Km ↑, Vmax unchanged, ↓ potency); a lowered ceiling would instead be the ↓ efficacy read.",
      },
    ],
    traps: [
      {
        a: "Potent",
        b: "Efficacious",
        whyConfused:
          "In ordinary English both mean 'the drug works well,' and exam stems use them in the same sentence about the same drugs.",
        keyDifference:
          "Potency is the amount of drug needed for a given effect (the x-value, EC50); efficacy is the maximal effect a drug can produce (the y-value, Emax) — and each is explicitly unrelated to the other.",
        clue:
          "Translate before answering: 'needs less drug / smaller dose / left-shifted' → potency; 'higher plateau / greater maximal effect / better ceiling' → efficacy.",
      },
      {
        a: "Left-shifted curve (↓ EC50)",
        b: "↑ potency misread as ↓ potency",
        whyConfused:
          "The chain has one ↓ and two ↑ arrows (left shifting = ↓ EC50 = ↑ potency = ↓ drug needed), and a test-taker reading 'EC50 decreases' can flip the conclusion.",
        keyDifference:
          "Memorize the chain as one motion: shifting LEFT means the drug arrives sooner, so it is MORE potent and LESS drug is needed — the ↓ and the ↑ in the chain are two descriptions of the same improvement.",
        clue:
          "'Arrives first' = more potent: the leftmost curve of a pair is always the potent one.",
      },
      {
        a: "Higher dose required for the same effect",
        b: "'The stronger drug'",
        whyConfused:
          "Needing more of something feels like the drug being 'serious' or 'powerful,' especially in a vignette that calls the drug 'high-dose.'",
        keyDifference:
          "More drug needed for a given effect is the definition of LOWER potency (↑ EC50, right-shifted) — the dose is the price, and the expensive drug is the weak one on a per-milligram basis.",
        clue:
          "Flip the intuition: the drug that needs the bigger dose is the less potent one, full stop.",
      },
      {
        a: "Partial agonist",
        b: "A less potent full agonist",
        whyConfused:
          "Both look 'weaker' on a figure — a low plateau and a right-shifted curve can both be misread as 'the small-effect drug.'",
        keyDifference:
          "A partial agonist's signature is a LOWER PLATEAU (less efficacy than a full agonist — an Emax fact) at whatever EC50 it happens to sit; a right-shifted curve with an intact ceiling is merely less potent. The two findings live on different axes.",
        clue:
          "Look only at the plateau to classify the agonist, then only at the position to rank potency — never mix the two reads.",
      },
    ],
    pivots: [
      {
        lookAlike: "A two-curve dose-response figure with no numbers",
        differentiator:
          "Compare the plateaus first (same height → equal efficacy; different heights → an efficacy difference, and the lower plateau is a partial agonist), then compare the positions (left-shifted → more potent, ↓ EC50; right-shifted → less potent).",
        correctPath:
          "Ceilings, then positions: a figure that moves only the Y (RELATIVE EFFICACY style, Δ Efficacy bracket between plateaus) is an efficacy question; a figure that moves only the X at a shared ceiling (RELATIVE POTENCY style, Δ Potency bracket between EC50 markers) is a potency question.",
      },
      {
        lookAlike: "'Which drug is better?' — a stem that asks for a value judgment",
        differentiator:
          "Neither axis answers 'better' by itself: potency only sizes the dose (less drug needed), while efficacy only sets the achievable maximal effect.",
        correctPath:
          "Route by the clinical need — when a maximal effect is required, the high-efficacy drug wins even if it is less potent (bigger dose, higher ceiling); when both drugs reach the needed effect, the more potent one simply allows a smaller dose.",
      },
      {
        lookAlike: "A lowered-ceiling figure after an intervention (antagonist or agonist switch)",
        differentiator:
          "A PARALLEL right shift with the ceiling intact is a potency story (eg, competitive antagonism — ↓ potency); a LOWERED ceiling at any position is an efficacy story (eg, noncompetitive antagonism, or swapping in a partial agonist — ↓ efficacy).",
        correctPath:
          "Ask what happened to Emax first: unchanged ceiling + shifted position = potency question; changed ceiling = efficacy question, and then name the mechanism (partial agonist or noncompetitive antagonist) from the stem.",
      },
    ],
    miniCase: {
      vignette:
        "A pharmacology examination figure shows three log dose-response curves (% maximal effect vs Log (drug dose)) for novel compounds that all act as agonists at the same receptor. Curves 1 and 2 are parallel sigmoids that both plateau at 100% maximal effect, but curve 1 lies 10-fold to the left of curve 2. Curve 3 plateaus at 50% maximal effect and crosses half of its own maximal effect at exactly the same log-dose position as curve 1. Binding studies confirm all three compounds compete at an identical binding site. Which statement about the three drugs is correct?",
      question:
        "Identify the correct combination of potency ranking, efficacy ranking, and agonist classification for curves 1, 2, and 3.",
      options: [
        {
          label:
            "Curve 1 is more potent than curve 2 (↓ EC50, less drug needed) and equally efficacious (same Emax); curve 3 is a partial agonist with less efficacy than either, at a potency equal to curve 1's",
          text: "Both axes read correctly, plus the agonist clause.",
          correct: true,
          why:
            "Correct on all three reads. (1) POTENCY: curve 1 sits left of curve 2 — left shifting = ↓ EC50 = ↑ potency = ↓ drug needed — so curve 1 is the potent one; curve 3 crosses half-max at curve 1's position, so its EC50 (and potency) equals curve 1's. (2) EFFICACY: curves 1 and 2 plateau at the same 100% — equal Emax, equal efficacy, because efficacy is read only from the y-value. (3) THE AGONIST CLAUSE: curve 3's own plateau at 50% is the partial-agonist signature — partial agonists have less efficacy than full agonists — and its low ceiling is an Emax fact that says nothing against its left-shifted (potent) position.",
        },
        {
          label:
            "Curve 1 is more efficacious than curve 2 because its curve lies to the left on the log-dose axis — the earlier the curve arrives, the greater the maximal effect it can produce",
          text: "The axis error, straight up.",
          why:
            "Reads potency (an x-value, EC50 fact) as efficacy (a y-value, Emax fact). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed — the shift says nothing about the ceiling, and both curves plateau at the same 100% maximal effect, so the efficacies are equal by inspection. Efficacy is unrelated to potency, which is exactly why this substitution is illegal.",
        },
        {
          label:
            "Curve 2 is more potent than curve 1 because a higher concentration is required for it to achieve the same maximal effect — the drug that needs more is doing more work",
          text: "The 'more drug = stronger' fallacy.",
          why:
            "Inverts the definition: potency IS the amount of drug needed for a given effect, so needing MORE drug (a right-shifted curve, ↑ EC50) means LESS potency. Curve 2 is the less potent of the two full agonists — the log-dose axis is a price scale, and curve 2 is the expensive drug.",
        },
        {
          label:
            "Curves 1 and 2 are equally potent because they reach the same Emax, and curve 3 is less potent than both because its plateau is only 50% — potency tracks the height of the curve",
          text: "Both axes swapped at once.",
          why:
            "Double axis error: equal plateaus make curves 1 and 2 equally EFFICACIOUS (not potent — their EC50s differ 10-fold), and curve 3's low plateau makes it less EFFICACIOUS (not less potent — it crosses half-max at curve 1's exact position, so its EC50 and potency match curve 1's). Height never ranks potency; position never ranks efficacy.",
        },
        {
          label:
            "Curve 3 is a full agonist with ↓ potency whose ceiling can be restored by left-shifting its curve; its 50% plateau simply reflects that a higher dose has not yet been given",
          text: "Misreads the plateau as an incomplete dose range.",
          why:
            "A plateau, by definition, is what the curve reaches when dose is no longer limiting — curve 3's 50% ceiling is its Emax, not a work-in-progress. A partial agonist's lower plateau cannot be restored by any dose increase (that is precisely what makes it partial: less efficacy than a full agonist), and left shifting is a potency change that leaves the ceiling untouched.",
        },
      ],
      reasoning:
        "The figure is the two source figures fused: curves 1 and 2 reproduce RELATIVE POTENCY (same ceiling, different positions — Δ Potency between their EC50 markers) while curve 3 against curve 1 reproduces RELATIVE EFFICACY (same position, different ceilings — Δ Efficacy between their plateaus). The protocol is ceilings first: curves 1 and 2 tie at 100% (equal efficacy), curve 3 sits at 50% (less efficacy — and as an agonist at the same receptor competing at the same binding site, a PARTIAL agonist, per the page's clause that partial agonists have less efficacy than full agonists). Then positions: curve 1 left of curve 2 (more potent — ↓ EC50 = less drug needed), curve 3 at curve 1's exact half-max crossing (equal EC50, equal potency). The independence clauses then forbid every cross-axis inference — which is exactly what each distractor attempts: option B reads position as height; option C inverts the dose-needed definition; option D ranks potency by plateau (and efficacy by position, twice); option E treats a plateau as an unfinished dose-response and believes a shift can raise a ceiling. Every wrong answer is an axis error wearing a different mask; the correct answer keeps each fact on its own axis.",
    },
  },
  mnemonics: [
    {
      code: "EFFICACY IS THE CEILING; POTENCY IS THE ADDRESS",
      meaning:
        "The two definitions in one line: EFFICACY IS THE CEILING = maximal effect a drug can produce (intrinsic activity), represented by the y-value (Emax) — how high the plateau climbs; POTENCY IS THE ADDRESS = amount of drug needed for a given effect, represented by the x-value (EC50) — where along the Log (drug dose) axis the curve lives.",
      memorizes: "Which axis answers which question",
      whenToUse: "Any dose-response figure or 'more potent/efficacious' question",
      clinical:
        "Before answering anything on a two-curve figure, name the two numbers separately: the ceiling (Emax) and the address (EC50) — they are measured on perpendicular axes and neither predicts the other.",
    },
    {
      code: "LEFT SHIFT, LESS DRUG",
      meaning:
        "The potency chain as one motion: left shifting = ↓ EC50 = ↑ potency = ↓ drug needed — a curve that arrives sooner on the log-dose axis is a more potent drug, because potency just is the amount of drug needed for a given effect (EC = Effective concentration; EC50 marks the half-maximal position).",
      memorizes: "The direction of the potency chain",
      whenToUse: "Any 'which curve is more potent' or EC50-comparison question",
      clinical:
        "The leftmost curve of a pair is always the potent one — and its right-shifted partner is not 'stronger for needing more'; it is simply the drug that requires a bigger dose for the same effect.",
    },
    {
      code: "TALL DOESN'T MEAN CHEAP, AND CHEAP DOESN'T MEAN TALL",
      meaning:
        "The independence clauses, both directions: efficacy is unrelated to potency (ie, efficacious drugs can have high or low potency — TALL doesn't mean CHEAP), and potency is unrelated to efficacy (ie, potent drugs can have high or low efficacy — CHEAP doesn't mean TALL). A high ceiling can sit anywhere on the x-axis, and a left-shifted curve can have any ceiling.",
      memorizes: "Both independence clauses and the 2×2 of real drug behaviors",
      whenToUse: "Any question that uses one axis's fact to answer the other axis's question",
      clinical:
        "High potency + low efficacy is a real and common drug behavior (a potent partial agonist); so is low potency + high efficacy (a full agonist that needs a big dose) — neither cell of the 2×2 is contradictory.",
    },
    {
      code: "PARTIAL PLATEAUS LOWER",
      meaning:
        "The agonist clause: partial agonists have less efficacy than full agonists — their curve plateaus at a lower Emax (the RELATIVE EFFICACY figure's Drug B at 50% vs Drug A's 100%), whatever EC50 the curve sits at. A low plateau is ALWAYS an Emax finding, never an EC50 finding.",
      memorizes: "The partial-agonist clause + which axis it lives on",
      whenToUse: "Any figure showing a curve with its own submaximal plateau",
      clinical:
        "Judge agonist class only from the plateau height; a partial agonist can be left-shifted, right-shifted, or share the full agonist's position — and no dose increase ever raises its ceiling.",
    },
  ],
  rapidReview: {
    s30: [
      "Efficacy: maximal effect a drug can produce (intrinsic activity); represented by the y-value (Emax); ↑ y-value = ↑ Emax = ↑ efficacy; unrelated to potency (ie, efficacious drugs can have high or low potency); partial agonists have less efficacy than full agonists",
      "Potency: amount of drug needed for a given effect; represented by the x-value (EC50); left shifting = ↓ EC50 = ↑ potency = ↓ drug needed; unrelated to efficacy (ie, potent drugs can have high or low efficacy)",
      "RELATIVE EFFICACY (the figure): Drug A plateaus at Emax 100 while Drug B plateaus at Emax 50 — the Δ Efficacy bracket spans the two plateaus vertically, at the same position on the Log (drug dose) axis",
      "RELATIVE POTENCY (the figure): Drug A sits left of Drug B with BOTH curves reaching the same maximal effect — the Δ Potency bracket spans the two EC50 markers horizontally; EC = Effective concentration",
      "EC = Effective concentration — EC50 is the dose position at which the curve crosses half of its maximal effect",
      "Efficacy is read on the Y-axis (the ceiling, Emax); potency is read on the X-axis (the position, EC50) — and neither number predicts the other",
    ],
    m3: [
      "EFFICACY IS THE CEILING; POTENCY IS THE ADDRESS — Emax on the Y, EC50 on the X",
      "LEFT SHIFT, LESS DRUG — left shifting = ↓ EC50 = ↑ potency = ↓ drug needed",
      "TALL DOESN'T MEAN CHEAP, AND CHEAP DOESN'T MEAN TALL — both independence clauses",
      "PARTIAL PLATEAUS LOWER — partial agonists have less efficacy than full agonists, at any EC50",
    ],
    m10: [
      "'More potent' never means 'more efficacious': a left-shifted curve (↓ EC50, less drug needed) can have the same, a higher, or a lower ceiling — the two axes are unrelated by the page's own double statement",
      "The partial-agonist read is a Y-axis read ONLY: the plateau is lower (less efficacy), and the same partial agonist can be left-shifted, right-shifted, or share the full agonist's EC50 exactly",
      "A parallel right shift with an intact ceiling is a potency story (eg, competitive antagonism — ↓ potency); a lowered ceiling at any position is an efficacy story (noncompetitive antagonism, or a partial agonist — ↓ efficacy) — the enzyme-kinetics pharmacodynamics row translated to dose-response axes",
      "'Requires a higher dose to achieve the same effect' = LESS potent, not stronger — potency is the amount of drug needed, so the expensive drug is the weak one per unit dose",
      "EC50 and Kd both live on the X-axis but answer different questions: Kd is receptor occupancy (binding), EC50 is functional effect — with spare receptors the EC50 sits left of the Kd",
      "Census quirk: page 254 / book 232 has ZERO raster images — pure text plus the TWO VECTOR dose-response figures (RELATIVE EFFICACY, RELATIVE POTENCY) whose labels stream cleanly with the two-line 'EC = Effective / concentration' wrap; the VLM confirm attempt failed 401 (environment credentials) so the census stands on pdfimages + the text layer; no mnemonic prints on the page — the KYP memory layer is original",
    ],
  },
  recall: [
    {
      q: "The Efficacy definition, verbatim.",
      a: "Maximal effect a drug can produce (intrinsic activity). Represented by the y-value (Emax). ↑ y-value = ↑ Emax = ↑ efficacy. Unrelated to potency (ie, efficacious drugs can have high or low potency). Partial agonists have less efficacy than full agonists.",
    },
    {
      q: "The Potency definition, verbatim.",
      a: "Amount of drug needed for a given effect. Represented by the x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed. Unrelated to efficacy (ie, potent drugs can have high or low efficacy).",
    },
    {
      q: "Which value represents efficacy, and which represents potency?",
      a: "Efficacy is represented by the y-value (Emax) — the height of the plateau; potency is represented by the x-value (EC50) — the curve's position on the Log (drug dose) axis. EC = Effective concentration.",
    },
    {
      q: "What does a left shift of a dose-response curve mean, spelled out?",
      a: "Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed — the curve arrives at its effect at a lower concentration, so the drug is more potent.",
    },
    {
      q: "The two independence clauses, verbatim.",
      a: "Efficacy is 'Unrelated to potency (ie, efficacious drugs can have high or low potency)'; potency is 'Unrelated to efficacy (ie, potent drugs can have high or low efficacy).'",
    },
    {
      q: "What does the page say about partial agonists, and on which axis does it live?",
      a: "Partial agonists have less efficacy than full agonists — a Y-axis (Emax) fact: their curve plateaus at a lower maximal effect, whatever its EC50.",
    },
    {
      q: "The RELATIVE EFFICACY figure — what does it show?",
      a: "Two sigmoid curves at the same log-dose position on axes of % Maximal effect (0–100) vs Log (drug dose): Drug A plateauing at 100 (labeled Emax Drug A) and Drug B plateauing at 50 (labeled Emax Drug B), with the Δ Efficacy bracket spanning the two plateaus — the vertical read.",
    },
    {
      q: "The RELATIVE POTENCY figure — what does it show?",
      a: "Two sigmoid curves reaching the SAME maximal effect, with Drug A's curve left-shifted of Drug B's; two EC50 markers sit on the Log (drug dose) axis with the Δ Potency bracket spanning the horizontal distance between them, and the figure notes EC = Effective concentration — the horizontal read.",
    },
    {
      q: "In one sentence, why can a left-shifted curve never answer an efficacy question?",
      a: "Because potency (the x-value, EC50 — amount of drug needed) is unrelated to efficacy (the y-value, Emax — maximal effect): a shift moves only the position and leaves the ceiling untouched, so efficacious drugs can have high or low potency and potent drugs can have high or low efficacy.",
    },
  ],
  related: [
    {
      title: "Enzyme Kinetics",
      topicId: "enzyme-kinetics",
      note: "The page that prints one print-page earlier and supplies the inhibition grammar this page draws: the pharmacodynamics row (competitive reversible → ↓ potency; irreversible competitive and noncompetitive → ↓ efficacy) is exactly this page's two reads — a right shift with an intact ceiling (Km ↑, ↓ potency) versus a lowered ceiling (Vmax ↓, ↓ efficacy).",
    },
    {
      title: "Pharmacokinetics: Bioavailability, Vd, Clearance & Half-Life",
      topicId: "pharmacokinetics-aging",
      note: "The PK/PD boundary: those parameters describe what the BODY does to the drug (absorption, distribution, clearance, accumulation to steady state), while Emax and EC50 describe what the DRUG does at its receptor — the dose axis of this page is downstream of everything on that one.",
    },
    {
      title: "Drug Metabolism: Phase I & Phase II",
      topicId: "drug-metabolism",
      note: "CYP induction and inhibition move a co-administered drug along the x-axis of its dose-response curve (changing the concentration reached per dose — an apparent-potency effect), but they never move the receptor's ceiling: the same left/right-shift logic with a pharmacokinetic engine.",
    },
    {
      title: "Receptor Binding, Agonist Types & Therapeutic Index",
      note: "The sibling topic on the next print page (book 233): the full/partial/inverse agonist and antagonist panels supply the receptor mechanisms behind this page's plateaus, and the therapeutic index (TD50/ED50) shows two more EC50-style x-axis reads — both topics read the same log-dose axis.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (enzyme kinetics — the Pharmacodynamics row)",
      connection:
        "The inhibition table's last row is this page in enzyme variables: a reversible competitive inhibitor raises Km with Vmax unchanged (the dose-response curve shifts right with its ceiling intact — ↓ potency, surmountable), while noncompetitive and irreversible competitive inhibitors lower Vmax with Km unchanged (the ceiling itself falls — ↓ efficacy). Km/Vmax and EC50/Emax are the same two dials on different receptors.",
    },
    {
      subject: "Pharmacology (receptor binding — full vs partial agonists and antagonists)",
      connection:
        "This page's partial-agonist clause is drawn there as the A/B/C panels: a partial agonist produces a lower Emax than a full agonist at the same receptor (its curve plateaus lower — less efficacy), and in the presence of a full agonist it behaves as a net antagonist, pulling the combined response DOWN toward its own lower ceiling; a competitive antagonist merely shifts the agonist curve right (↓ potency), while a noncompetitive antagonist lowers the ceiling (↓ efficacy).",
    },
    {
      subject: "Pharmacology (therapeutic index — TD50 and ED50)",
      connection:
        "Both ED50 (the dose giving the desired effect in 50% of a population) and TD50 (the dose giving toxicity in 50%) are EC50-type readings — positions on the same log-dose x-axis. Potency is what sets where the ED50 sits; safety is the SEPARATION between the two curves' positions (TI = TD50/ED50), which is why a more potent drug is not automatically a safer one.",
    },
    {
      subject: "Pharmacology (spare receptors — EC50 vs Kd)",
      connection:
        "Both numbers live on the x-axis but measure different things: Kd is the concentration at which 50% of RECEPTORS are occupied (a binding measurement), while EC50 is the concentration giving 50% of maximal EFFECT (a functional measurement). With spare receptors, half-maximal effect is achieved at less than half occupancy, so the EC50 sits LEFT of the Kd — a left shift that reflects receptor abundance, not drug potency.",
    },
  ],
};
