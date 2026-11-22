import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 2, topic 7 (pubh7). Source: CROSS-PAGE topic —
// pdf 281 (book 259) BOTTOM portion + pdf 282 (book 260) TOP portion, both
// boundaries PINNED. On book 259 the topic owns from the "Kaplan-Meier
// curve" navy heading (raw text-layer line 122) to the page end; the
// "Likelihood ratio" block above (raw lines 100–120 + its two rule
// sentences at raw lines 140–141) belongs to likelihood-ratios (pubh6,
// produced in parallel). On book 260 the topic owns from the page top
// through the END of the "Hazard ratio" block (raw lines 1–18); the
// "Evaluation of diagnostic tests" heading (raw lines 20–21) and
// everything below belongs to diagnostic-test-performance (pubh8, produced
// in parallel). No evidence quote in this note crosses either boundary.
// BLOCKS OWNED (both carried verbatim in the table block):
// (1) "Kaplan-Meier curve" (book 259 bottom) — the time-to-event text:
// "Used to estimate probability of survival over time. Graphic
// representation shows the survival probabilities (y-axis) vs length of
// time (x-axis). Useful for displaying "time-to-event" data. / Outcomes
// examined may include any event, but frequently include mortality. /
// Survival probability = 1 – (event probability). / P value for the
// survival difference can be calculated using log rank test or Cox
// regression." — plus the STEPPED-CURVE FIGURE to the right (pure vector
// line art, zero rasters — pdfimages census): y-axis "Survival
// probability" (rotated 90°, reading bottom-to-top) with nine tick labels
// 1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2 (no 0.1/0.0); x-axis "Time"
// with NO numeric labels — four tick marks (study start, event X, event Y,
// end Z), the letters X, Y, Z printed BELOW the axis under the last three
// ticks, and "Time" between Y and Z; two stepped curves named "Drug"
// (label #729ac4 blue, printed just above its final flat segment) and
// "Control" (label #fcc00d yellow/gold, same placement convention);
// (2) "Hazard ratio" (book 260 top) — pure TEXT (VLM-confirmed: no figure
// inside the block): the definition sentence plus three bullets (HR = 1 /
// HR > 1 / HR < 1, each joined to its clause by an em-dash) plus the
// Kaplan-Meier slopes line and its two bullets.
// FIGURE GEOMETRY (pinned by PyMuPDF vector paths + the VLM pass at 120dpi,
// staging-pubh7/vlm-census.txt): BOTH curves start at 1.0 and share the
// initial flat segment to X; at event time X the Drug curve steps down to
// 0.9 (a one-tick step; green landing dot) while the Control curve steps
// down to 0.7 (a three-tick step; yellow landing dot) — the print draws
// the shared vertical drop at X two-tone, green above 0.9 for Drug's
// landing and yellow below it down to Control's; at event time Y the Drug
// curve steps to ≈0.85 (a half-tick step; blue dot) and the Control curve
// to ≈0.5 (yellow dot); both then run FLAT to the end of follow-up at Z
// with endpoint dots and no further drop — Drug ends ≈ 0.85, Control ends
// ≈ 0.5. X and Y label the two EVENT (drop) times; Z labels the end of
// follow-up (no drop — the interpretation is KYP's; the print gives no
// legend for the letters). The heading "Kaplan-Meier curve" is navy
// #004b6c MyriadPro-Bold (the same row-label convention as "Hazard ratio"
// #004b6c and the "Likelihood ratio" label above); body text #231f20
// Electra 10pt; the "P" of "P value" prints in a cursive/italic face.
// PRINTED-TEXT QUIRKS carried + documented: (1) "SEC TION II" header-space
// extraction artifact (known, as-is); (2) small-caps artifact
// "EPIDEmIOLOGY AND BIOSTATISTICS" in the banner; (3) the RAW-LAYER
// INTERLEAVE on book 259 — the indd footer slug extracts immediately
// after the heading (raw line 124), the KM body follows (126–136), then
// the figure's y-axis label "Survival probability" (138), then the TWO
// LIKELIHOOD-RATIO RULE SENTENCES (140–141, printed ABOVE the Kaplan-Meier
// heading as the last lines of the LR block — NOT this topic's content,
// deliberately not quoted; bbox-pinned), then the nine y-axis numbers
// 1.0…0.2 (143–151), then Drug / Control / X / Y / Time / Z (153–163), the
// print timestamp last (165); (4) the C1 control byte \x83 that prefixes
// each ▘ square bullet in the Hazard ratio block (the same C1-artifact
// family as the ↑↓ arrows on book 259) — stripped by normalization, the
// ▘ glyph documented; (5) em-dashes join the HR bullets to their clauses
// ("HR = 1—no difference…"), en-dash-with-spaces prints in "1 – (event
// probability)", and curly quotes wrap "time-to-event". ADJUDICATIONS:
// (A) Drug's second landing is a HALF-TICK step (≈0.85, between the 0.9
// and 0.8 gridlines) — drawn and documented as ≈0.85, not rounded to 0.8
// (PyMuPDF y-coordinates: landing 619.2 vs the 0.9 tick 612.8 and 0.8 tick
// 623.4 in mediabox space); Control's second landing (654.9 vs the 0.5
// tick 657.6) is drawn at ≈0.5. (B) The brief's figure description
// ("event/drop points X, Y, Z") matched the print: X and Y sit under the
// two drop times, Z under the end of follow-up. (C) The two-tone shared
// drop at X (green above, yellow below) is the print's device for two
// arms dropping at the same event time — preserved semantically in the
// KYP redraw as two landings on one dashed event line. PROVENANCE SPLIT:
// verbatim = both blocks' sentences, the figure's labels (Survival
// probability, 1.0–0.2, Drug, Control, X, Y, Z, Time); FA-own = the
// figure itself, the "eg, death, relapse" examples; KYP-original = the
// curve-grammar decoder, the slopes-not-heights reading, the
// censoring/end-of-follow-up gloss (the print's dots at Z are unlabeled),
// the HR direction rules' harm/help framing, the exam layer, and all four
// mnemonics — the pages print NO mnemonic of their own (VLM census: no
// margin notes, no red text on either block), so every mnemonic below is
// marked as a KYP original. DrugCards: none — the pages print statistics,
// not drugs (the figure's "Drug"/"Control" arms are the trial's groups,
// not drug monographs; folded by absence in the manifest). The next block
// on book 260 ("Evaluation of diagnostic tests") is
// diagnostic-test-performance, produced in parallel.

export const survivalAnalysis: KypUsMLENote = {
  id: "survival-analysis",
  title: "Kaplan-Meier Curves and Hazard Ratios: Time-to-Event Analysis",
  subtitle:
    "Most clinical questions are not \"did the event happen?\" but \"how long until it happened — and did treatment change that clock?\" Two facing blocks of First Aid team up to answer that. The Kaplan-Meier curve is used to estimate probability of survival over time: it plots survival probabilities on the y-axis against length of time on the x-axis, and it is the tool for displaying \"time-to-event\" data — outcomes that may be any event but frequently include mortality. Its grammar is a staircase: every curve starts at 1.0 (everyone alive at enrollment), steps down at each event time by exactly \"Survival probability = 1 – (event probability)\", runs flat between events, and ends with a dot at the end of follow-up. The printed figure draws two arms — Drug and Control — that leave 1.0 together and then diverge: at event time X the Drug arm steps to 0.9 while the Control arm crashes to 0.7; at Y they step again to ≈0.85 and ≈0.5; at Z both stop, flat, with endpoint dots. The hazard ratio then compresses that picture into one number: a measure of how often a particular event (eg, death, relapse) occurs in one group compared with another, over time. HR = 1 — no difference; HR > 1 — the event occurs more frequently in the treatment/exposure group; HR < 1 — less frequently (protective effect). And the bridge sentence is printed on the very next page-top: Kaplan-Meier curves show it — \"HR is derived from the relative slopes (hazards) of the survival curves.\" Steeper curve, higher hazard; separation over time, the magnitude of HR. The P value for the survival difference? Log rank test or Cox regression.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory:
    "Public Health Sciences — time-to-event analysis: the Kaplan-Meier curve block of book 259 (bottom) with its stepped Drug-vs-Control figure (both arms from 1.0 through event times X and Y to end-of-follow-up Z), and the hazard-ratio block of book 260 (top) with the HR = 1 / > 1 / < 1 trio and the relative-slopes derivation — the book's own pairing of a survival curve with the ratio that reads it.",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 259 (bottom)–260 (top) (Epidemiology and Biostatistics: Kaplan-Meier curve; Hazard ratio)",
  tags: [
    "Kaplan-Meier curve",
    "survival analysis",
    "time-to-event data",
    "survival probability",
    "event probability",
    "hazard ratio",
    "hazard",
    "log rank test",
    "Cox regression",
    "mortality",
    "relapse",
    "protective effect",
    "treatment group",
    "exposure group",
    "stepped curve",
    "censoring",
    "end of follow-up",
    "epidemiology",
    "biostatistics",
    "clinical trials",
  ],
  core: {
    what:
      "Two printed blocks, carried whole. BLOCK 1 — “Kaplan-Meier curve” (book 259, bottom): “Used to estimate probability of survival over time. Graphic representation shows the survival probabilities (y-axis) vs length of time (x-axis). Useful for displaying “time-to-event” data. Outcomes examined may include any event, but frequently include mortality. Survival probability = 1 – (event probability). P value for the survival difference can be calculated using log rank test or Cox regression.” — with the FIGURE: a stepped survival curve for each arm, y-axis “Survival probability” (ticks 1.0 → 0.2), x-axis “Time”, two curves “Drug” and “Control”, and the letters X, Y, Z on the time axis — both curves start at 1.0; at X, Drug steps to 0.9 while Control steps to 0.7; at Y, Drug steps to ≈0.85 while Control steps to ≈0.5; both run flat to Z and end with dots (Drug ≈ 0.85, Control ≈ 0.5). BLOCK 2 — “Hazard ratio” (book 260, top): “Measure of how often a particular event (eg, death, relapse) occurs in one group compared with another, over time. ▘ HR = 1—no difference between groups. ▘ HR > 1—event occurs more frequently in the treatment/exposure group. ▘ HR < 1—event occurs less frequently in the treatment/exposure group (protective effect). Kaplan-Meier curves: HR is derived from the relative slopes (hazards) of the survival curves. ▘ A steeper curve = higher hazard (faster occurrence of event). ▘ Separation of curves over time reflects magnitude of HR.”",
    why:
      "These two blocks sit at the top of the diagnostic-testing sequence because ordinary proportion statistics break on time-to-event data: patients are followed for different lengths, some drop out or the study ends before their event, and a simple \"X of Y patients died\" throws away the WHEN. The Kaplan-Meier estimator solves the \"when\" by rebuilding the survival probability at every event time (each step down is exactly 1 minus that interval's event probability), and the two-arm figure turns the comparison into geometry anyone can read — the Drug arm's staircase descends gently, the Control arm's plunges, and the widening gap between them IS the treatment effect accumulating over time. The hazard ratio is the single number that summarizes those relative slopes: not \"how many\" but \"how fast\" — the rate at which the event operates in one group compared with another. That is why the book prints the bridge sentence: HR is derived from the relative slopes (hazards) of the survival curves — a steeper curve is a higher hazard (faster occurrence of event), and the separation of the curves over time reflects the magnitude of HR. The pair also completes the chapter's measurement ladder: the 2×2 table measures association at one moment (risk, odds), the likelihood ratio updates probability within one patient, and the Kaplan-Meier curve + hazard ratio measure incidence over time between groups — with log rank test or Cox regression supplying the P value that separates signal from sampling noise.",
    keyIdea:
      "Read any survival figure with the staircase grammar, then collapse it into the hazard ratio. MOVE 1 — THE GRAMMAR: every KM curve starts at 1.0 (all enrollees alive/event-free), drops VERTICALLY at each event time by “Survival probability = 1 – (event probability)”, runs FLAT between events (no events), and ends with a dot at the end of follow-up (in the printed figure: X and Y are the event times — both arms step at each — and Z is the end of follow-up, dots with no further drop). MOVE 2 — THE COMPARISON: the higher curve at any time is the arm with more survivors; the STEEPER curve at any time is the arm with the higher hazard — slope and height are different questions. MOVE 3 — THE RATIO: HR = how often the event (eg, death, relapse) occurs in one group compared with another, over time. HR = 1 — no difference between groups (curves track together). HR > 1 — event occurs MORE frequently in the treatment/exposure group (its curve is the steeper one — with death/relapse outcomes, a harm signal). HR < 1 — event occurs LESS frequently in the treatment/exposure group — protective effect (its curve is the flatter, higher one — a benefit signal). MOVE 4 — THE TEST: “P value for the survival difference can be calculated using log rank test or Cox regression” — log rank compares the whole curves, Cox regression fits the hazards (and hands you the HR). Grammar, comparison, ratio, test — four moves and any time-to-event stem resolves.",
  },
  mechanisms: [
    {
      id: "km-curve-grammar",
      title:
        "Building the staircase: how raw follow-up data becomes the Kaplan-Meier curve, event by event",
      context:
        "The printed Kaplan-Meier figure (book 259, bottom): two stepped curves, Drug and Control, from 1.0 through X and Y to Z",
      flow: {
        nodes: [
          {
            id: "enroll",
            label: "ENROLLMENT — every curve starts at 1.0",
            sublabel:
              "Input — the printed figure opens with both arms at the top left: survival probability 1.0 at time zero, before any event. Everyone enters alive (or event-free); the Drug and Control curves SHARE this opening flat segment — they cannot differ until the first event happens. The y-axis reads “Survival probability” with ticks 1.0 down to 0.2; the x-axis reads “Time”.",
            variant: "input",
          },
          {
            id: "event-x",
            label: "FIRST EVENT TIME (X) — step down by the event probability",
            sublabel:
              "Process — at the first event time both arms drop vertically, and the drop is the arithmetic of the printed formula: “Survival probability = 1 – (event probability).” In the print, Drug steps 1.0 → 0.9 (few events) while Control steps 1.0 → 0.7 (many events) — the vertical SIZE of each step is the event probability in that arm during that interval. The bigger the drop, the more events; a steeper descent is a higher hazard.",
            variant: "process",
          },
          {
            id: "event-y",
            label: "SECOND EVENT TIME (Y) — the steps repeat and the arms separate",
            sublabel:
              "Process — the staircase continues: Drug steps 0.9 → ≈0.85 (a half-tick step) and Control steps 0.7 → ≈0.5. Between X and Y both curves ran FLAT — no events in either arm. With each pair of drops the gap between the arms widens: the Drug curve rides visibly above the Control curve, and that widening separation is the accumulating treatment effect (the same geometry the hazard-ratio block prints as “Separation of curves over time reflects magnitude of HR”).",
            variant: "process",
          },
          {
            id: "end-z",
            label: "END OF FOLLOW-UP (Z) — flat run, endpoint dots, no further drop",
            sublabel:
              "Process — after Y both arms run flat to the right edge of the figure and STOP with dots: Drug ends ≈ 0.85, Control ends ≈ 0.5. A dot with no drop is an ended curve — the study's follow-up is over (or the last subjects are censored — removed from the risk set without an event; the print shows endpoint dots but names no censoring, so the censoring gloss is KYP context). At Z the reading is complete: the arm that ends higher kept more of its patients alive, longer.",
            variant: "process",
          },
          {
            id: "compare",
            label: "THE COMPARISON — heights vs slopes, two different questions",
            sublabel:
              "Output — HEIGHT at a given time = the estimated probability of still being event-free then (Drug ≈ 0.85 vs Control ≈ 0.5 at Z). SLOPE at a given time = the hazard, the rate at which events are occurring — which arm's curve is falling faster right now. The exam's favorite trap is swapping these two: the HIGHER curve is the better arm, but the STEEPER curve is the SICKER arm. The whole-curve comparison is exactly what the log rank test formalizes.",
            variant: "output",
          },
        ],
        edges: [
          { from: "enroll", to: "event-x", label: "follow-up begins →" },
          { from: "event-x", to: "event-y", label: "flat run, then the next event →" },
          { from: "event-y", to: "end-z", label: "flat run to the end of follow-up →" },
          { from: "end-z", to: "compare", label: "read heights and slopes →" },
          { from: "event-x", to: "compare", label: "drop size = event probability" },
          { from: "event-y", to: "compare", label: "separation accumulates" },
        ],
      },
    },
    {
      id: "hazard-ratio-slopes",
      title:
        "From slopes to one number: how the hazard ratio summarizes two survival curves",
      context:
        "The printed Hazard ratio block (book 260, top): the definition, the HR = 1 / > 1 / < 1 trio, and the relative-slopes bridge",
      flow: {
        nodes: [
          {
            id: "hazard",
            label: "THE HAZARD — the event's instantaneous rate in one group",
            sublabel:
              "Input — the block's definition sentence: “Measure of how often a particular event (eg, death, relapse) occurs in one group compared with another, over time.” The event is not only death — relapse is the print's own second example, and the KM block generalizes further: “Outcomes examined may include any event, but frequently include mortality.” A hazard is a RATE operating through time — the slope of that group's survival curve.",
            variant: "input",
          },
          {
            id: "ratio",
            label: "THE RATIO — one group's hazard over the other's",
            sublabel:
              "Process — divide the treatment/exposure group's hazard by the comparator's and the curves collapse into a single number anchored at 1: “HR = 1—no difference between groups.” The two curves track together — same slope, same fate — and neither arm's events come faster. HR = 1 is the null value, the anchor the other two cases pivot around.",
            variant: "process",
          },
          {
            id: "above-one",
            label: "HR > 1 — event occurs MORE frequently in the treatment/exposure group",
            sublabel:
              "Process — the printed bullet: “HR > 1—event occurs more frequently in the treatment/exposure group.” On the Kaplan-Meier figure the treatment arm is the STEEPER curve — higher hazard, “faster occurrence of event” — dropping below the comparator. For adverse events like death or relapse (the print's examples), HR > 1 is a HARM signal: a harmful exposure or a failed treatment (the harm framing is KYP's gloss of the printed rule).",
            variant: "process",
          },
          {
            id: "below-one",
            label: "HR < 1 — event occurs LESS frequently in the treatment/exposure group (protective effect)",
            sublabel:
              "Process — the printed bullet: “HR < 1—event occurs less frequently in the treatment/exposure group (protective effect).” The treatment arm is the FLATTER, HIGHER curve — lower hazard — staying above the comparator as the two separate. In the redrawn printed figure this is exactly the Drug arm: gentle steps to ≈0.85 while Control plunges to ≈0.5 — the Drug curve is what an HR < 1 looks like (the printed figure labels its arms Drug and Control; the HR block speaks of treatment/exposure groups — same roles).",
            variant: "process",
          },
          {
            id: "slopes-bridge",
            label: "THE BRIDGE — “HR is derived from the relative slopes (hazards) of the survival curves.”",
            sublabel:
              "Output — the block's own two closing rules: “A steeper curve = higher hazard (faster occurrence of event)” and “Separation of curves over time reflects magnitude of HR.” Read a survival figure slope-first: which arm falls faster (the hazard ratio), then how far the arms have pried apart (how far the HR sits from 1). Curves hugging = HR near 1; curves prying apart = HR far from 1; and the P value that the separation is real — “P value for the survival difference can be calculated using log rank test or Cox regression.”",
            variant: "output",
          },
        ],
        edges: [
          { from: "hazard", to: "ratio", label: "one group vs another, over time →" },
          { from: "ratio", to: "above-one", label: "hazard ratio > 1 →" },
          { from: "ratio", to: "below-one", label: "hazard ratio < 1 →" },
          { from: "above-one", to: "slopes-bridge", label: "steeper treatment curve" },
          { from: "below-one", to: "slopes-bridge", label: "flatter treatment curve" },
          { from: "slopes-bridge", to: "ratio", label: "separation ↔ magnitude" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "survival-analysis-map",
      title:
        "The Kaplan-Meier staircase and the hazard-ratio trio (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 259 (bottom) and book 260 (top). TOP — the printed Kaplan-Meier figure redrawn as original vector art: y-axis “Survival probability” (ticks 1.0 → 0.2), x-axis “Time” with the letters X, Y, Z under the event and end-of-follow-up ticks; both arms start at 1.0 (the shared opening, green start dot), Drug (blue) steps to 0.9 at X and ≈0.85 at Y, Control (yellow) steps to 0.7 at X and ≈0.5 at Y, both run flat to Z with endpoint dots — plus the KYP annotation rail (start at 1.0 · step = event · flat = no events · dot = end of follow-up · the log rank / Cox test). MIDDLE — the printed HR trio as cards with curve-slope glyphs: HR = 1 (curves track together — no difference between groups), HR > 1 (treatment curve steeper — event occurs more frequently in the treatment/exposure group), HR < 1 (treatment curve flatter — event occurs less frequently, protective effect). BOTTOM — the slopes panel: a steeper curve = higher hazard (faster occurrence of event); separation of curves over time reflects magnitude of HR (curves close = HR near 1, curves apart = HR far from 1); the two printed formulas on one rail (Survival probability = 1 – (event probability); the log rank / Cox P value).",
      notice:
        "Census (pdfimages): ZERO raster images on both pages — the Kaplan-Meier figure is pure vector line art (geometry pinned by PyMuPDF vector paths + the VLM pass at 120dpi, staging-pubh7/vlm-census.txt), redrawn here as an ORIGINAL KYP REDRAW: the layout, colors, and horizontal y-axis label are KYP's, every printed label (Survival probability · 1.0–0.2 · Drug · Control · X · Y · Z · Time) is preserved, and the two-tone shared drop at X (the print draws green above Drug's 0.9 landing and yellow below it to Control's 0.7) is preserved semantically as two landings on one dashed event line. The Hazard ratio block is pure printed TEXT (VLM-confirmed: no figure inside it) — the trio cards and slope panels are KYP-original layouts of the printed bullets, every quoted sentence verbatim. ADJUDICATIONS drawn exactly as pinned: Drug's second landing is a HALF-TICK step (≈0.85, not 0.8); Control's is ≈0.5; X and Y label the two event times, Z the end of follow-up (the dots-with-no-drop reading is KYP's — the print carries no legend for the letters).",
    },
    {
      kind: "table",
      title:
        "Book 259 (bottom)–260 (top) — the printed Kaplan-Meier curve and Hazard ratio blocks, carried verbatim (every printed word)",
      intro:
        "The whole owned span in print order: one heading and four sentences plus the figure labels on book 259 (bottom); one heading, one definition, three bullets, one bridge sentence, and two more bullets on book 260 (top). The ▘ entries are the print's square bullets (each prefixed in the raw text layer by a C1 control byte \\x83 — the known C1 artifact family, stripped by normalization and documented); the HR bullets join their clauses with em-dashes; “1 – (event probability)” prints with a spaced en-dash; “time-to-event” prints inside curly quotes; the “P” of “P value” prints in a cursive/italic face. The figure's labels extract interleaved with the two likelihood-ratio rule sentences (raw lines 140–141, printed ABOVE the Kaplan-Meier heading — those two sentences belong to the likelihood-ratios topic and are deliberately not carried here).",
      columns: ["PRINTED ELEMENT", "AS PRINTED (VERBATIM)"],
      rows: [
        [
          "Heading — book 259 (bottom), navy row label",
          "Kaplan-Meier curve",
        ],
        [
          "Sentence 1 — what it is and what it shows",
          "Used to estimate probability of survival over time. Graphic representation shows the survival probabilities (y-axis) vs length of time (x-axis). Useful for displaying “time-to-event” data.",
        ],
        [
          "Sentence 2 — which outcomes",
          "Outcomes examined may include any event, but frequently include mortality.",
        ],
        [
          "Sentence 3 — the step arithmetic",
          "Survival probability = 1 – (event probability).",
        ],
        [
          "Sentence 4 — the test",
          "P value for the survival difference can be calculated using log rank test or Cox regression.",
        ],
        [
          "The figure's printed labels (pure vector art, zero rasters)",
          "Survival probability (y-axis, rotated) · 1.0 0.9 0.8 0.7 0.6 0.5 0.4 0.3 0.2 (nine y-axis ticks) · Drug · Control (the two curve names) · X · Y · Z (letters below the time axis) · Time (x-axis)",
        ],
        [
          "Heading — book 260 (top), navy row label",
          "Hazard ratio",
        ],
        [
          "Definition sentence",
          "Measure of how often a particular event (eg, death, relapse) occurs in one group compared with another, over time.",
        ],
        [
          "Bullet 1 — the null",
          "HR = 1—no difference between groups.",
        ],
        [
          "Bullet 2 — above one",
          "HR > 1—event occurs more frequently in the treatment/exposure group.",
        ],
        [
          "Bullet 3 — below one",
          "HR < 1—event occurs less frequently in the treatment/exposure group (protective effect).",
        ],
        [
          "The bridge sentence",
          "Kaplan-Meier curves: HR is derived from the relative slopes (hazards) of the survival curves.",
        ],
        [
          "Bridge bullet 1 — steepness",
          "A steeper curve = higher hazard (faster occurrence of event).",
        ],
        [
          "Bridge bullet 2 — separation",
          "Separation of curves over time reflects magnitude of HR.",
        ],
      ],
      caption:
        "Verbatim carry, documented: every sentence of both blocks plus every label of the figure (VLM-confirmed at 120dpi, staging-pubh7/vlm-census.txt — the body sentences read back verbatim; the figure's nine y-axis ticks, both curve names, the X/Y/Z letters, and the Time label all confirmed). Raw-layer quirks carried + documented: the indd footer slug (FAS1_2026_06-PubHealth.indd 259) extracts immediately after the Kaplan-Meier heading; the nine y-axis numbers extract AFTER the two likelihood-ratio rule sentences (raw lines 140–141), which PRINT above the heading as the last lines of the LR block — their print position is bbox-pinned and they are NOT part of this topic (the interleave is documented, never quoted across); the Drug/Control/X/Y/Time/Z labels extract in that raw order; each ▘ bullet of the Hazard ratio block carries a preceding \\x83 C1 control byte. The em-dashes in the HR bullets, the spaced en-dash in “1 – (event probability)”, and the curly quotes around “time-to-event” are as printed. Neither block prints a mnemonic of its own (VLM census: no margin notes, no red text) — all four mnemonics in this note are KYP originals, marked as such.",
    },
    {
      kind: "list",
      title:
        "The decoder — every element of the staircase, and what it encodes (KYP's reading of the print)",
      intro:
        "The Kaplan-Meier figure is a grammar, not a picture: each visual element encodes exactly one fact about the follow-up data. This layer is the element-by-element key.",
      items: [
        {
          lead: "THE AXES — survival probability (y) vs length of time (x)",
          text: "“Graphic representation shows the survival probabilities (y-axis) vs length of time (x-axis).” The y-axis is a probability scale from 1.0 downward (the print labels 1.0 through 0.2); the x-axis is TIME — and the printed figure deliberately carries no numbers on it, only the letters X, Y, Z marking the times that matter. Useful for displaying “time-to-event” data — data whose outcome is not just whether an event happened but when.",
        },
        {
          lead: "THE START AT 1.0 — everyone enters event-free",
          text: "Every KM curve opens at the top left: survival probability 1.0 at time zero. Both printed arms share this opening flat segment — Drug and Control cannot differ until the first event occurs. Any curve NOT starting at 1.0 is not a Kaplan-Meier curve (a favorite figure-identification tell).",
        },
        {
          lead: "THE VERTICAL DROP — an event time, sized by the event probability",
          text: "At each event time the curve steps DOWN, and the step's height is the printed arithmetic: “Survival probability = 1 – (event probability).” The printed figure drops both arms at X (Drug 1.0 → 0.9; Control 1.0 → 0.7 — the Control drop is bigger because more Control patients had the event in that interval) and again at Y (Drug 0.9 → ≈0.85; Control 0.7 → ≈0.5). Big drop = many events; the event is frequently mortality but may be any event.",
        },
        {
          lead: "THE FLAT RUN — an interval with no events",
          text: "Between drops the curve is perfectly horizontal: no events occurred, so the estimated survival probability is unchanged. The length of a flat run carries information too — a long plateau means the arm went event-free for that stretch (the print's arms run flat from Y all the way to Z).",
        },
        {
          lead: "THE ENDPOINT DOT AT Z — the end of follow-up, no further drop",
          text: "Both printed arms stop at Z with dots and no step: the follow-up clock ran out with Drug at ≈ 0.85 and Control at ≈ 0.5. A dot without a drop marks an ended (or censored) observation — the subject left the risk set without an event (the print draws the dots but names no censoring; the censoring gloss is KYP context). The HEIGHT at the dot answers “what fraction was still event-free when the clock stopped?” — here the Drug arm kept ~30 percentage points more of its patients than Control.",
        },
        {
          lead: "THE TWO ARMS TOGETHER — geometry is the treatment effect",
          text: "The Drug curve rides above the Control curve from X onward, and the gap widens at each event time. That is the printed bridge to the next block in two dimensions: the STEEPNESS difference is the hazard ratio (“A steeper curve = higher hazard”), and the WIDENING GAP is its magnitude (“Separation of curves over time reflects magnitude of HR”). The P value for the survival difference: log rank test or Cox regression.",
        },
      ],
    },
    {
      kind: "steps",
      title: "Reading any Kaplan-Meier figure in five moves",
      intro:
        "An ordered reading path for any survival figure the exam shows — the printed figure of book 259 is the practice case.",
      steps: [
        {
          label: "MOVE 1 — READ THE AXES: what is being survived, over what time?",
          detail:
            "Y-axis: survival probability (1.0 at the top). X-axis: length of time. Ask what the EVENT is — “Outcomes examined may include any event, but frequently include mortality,” and the hazard-ratio block's own examples are death and relapse. The event definition changes nothing about the geometry — only about what the curve means clinically.",
        },
        {
          label: "MOVE 2 — CONFIRM THE START: every curve opens at 1.0",
          detail:
            "Time zero, everyone event-free. The printed Drug and Control arms leave 1.0 together; the curves are indistinguishable until the first event. If one arm's curve starts lower, you are not looking at a Kaplan-Meier curve.",
        },
        {
          label: "MOVE 3 — READ THE STEPS: each drop is an event, sized by 1 – (event probability)",
          detail:
            "Find each vertical segment and ask how big it is. Small step = few events in that interval (Drug at X: 1.0 → 0.9); big step = many (Control at X: 1.0 → 0.7). Then read the flats: horizontal runs are event-free intervals. The staircase IS the survival experience, interval by interval.",
        },
        {
          label: "MOVE 4 — READ THE ARMS TOGETHER: height = survivors, slope = hazard",
          detail:
            "Which curve sits higher at the right edge (more patients still event-free — Drug ≈ 0.85 vs Control ≈ 0.5 at Z)? Which curve falls steeper (the higher hazard — Control throughout)? Keep the two questions separate: the HIGHER curve is the better arm; the STEEPER curve is the sicker arm. The endpoint dots mark the end of follow-up.",
        },
        {
          label: "MOVE 5 — COLLAPSE TO THE NUMBER AND THE TEST: HR, then log rank or Cox",
          detail:
            "The two-arm picture compresses to the hazard ratio — derived from the relative slopes (hazards) of the survival curves: HR = 1 (curves track together), HR > 1 (event more frequent in the treatment/exposure group — the steeper arm), HR < 1 (event less frequent — protective, the flatter/higher arm). And the significance question has a printed answer: “P value for the survival difference can be calculated using log rank test or Cox regression.”",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "HR > 1 vs HR < 1 — the direction see-saw, in the block's own words",
      intro:
        "The two non-null bullets are mirror images; every distinguishing feature follows from which arm's hazard is larger. The reference is always the treatment/exposure group — the group named in the sentence.",
      columns: [
        "HR > 1 — event occurs MORE frequently in the treatment/exposure group",
        "HR < 1 — event occurs LESS frequently in the treatment/exposure group (protective effect)",
      ],
      rows: [
        {
          label: "The printed sentence",
          a: "“HR > 1—event occurs more frequently in the treatment/exposure group.”",
          b: "“HR < 1—event occurs less frequently in the treatment/exposure group (protective effect).”",
        },
        {
          label: "The treatment arm's curve",
          a: "The STEEPER one — higher hazard, “faster occurrence of event” — dropping below the comparator",
          b: "The FLATTER, HIGHER one — lower hazard — staying above the comparator as the curves separate",
        },
        {
          label: "The separation over time",
          a: "Widens with the treatment arm on the bottom — the event is happening sooner and more often in the exposed/treated",
          b: "Widens with the treatment arm on top — events are delayed and fewer (in the printed figure's geometry: the Drug arm's staircase)",
        },
        {
          label: "What it signals (for adverse events like death or relapse — the print's examples)",
          a: "A HARM signal: a harmful exposure or a treatment that is failing (KYP gloss of the printed rule)",
          b: "A BENEFIT signal: an effective, protective treatment — exactly the printed parenthetical “(protective effect)”",
        },
        {
          label: "How the stem will phrase it",
          a: "“Patients receiving the drug had a hazard ratio of 2.5 for relapse” — relapse occurred more frequently in the treatment group",
          b: "“Patients receiving the drug had a hazard ratio of 0.4 for death” — death occurred less frequently in the treatment group",
        },
        {
          label: "The anchor both pivot around",
          a: "HR = 1—no difference between groups: the curves track together, same slope, same fate",
          b: "HR = 1—no difference between groups: the null value, where both arms of the see-saw balance",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks these two blocks — four stem shapes and one direction trap",
      body:
        "SHAPE 1 — READ THE FIGURE: a stepped two-arm curve is shown and the stem asks what a vertical drop / a flat segment / an endpoint dot represents — drop = event (sized by “Survival probability = 1 – (event probability)”), flat = no events, dot at the end = end of follow-up. The higher curve is the better arm; the steeper curve is the higher hazard. SHAPE 2 — INTERPRET THE HR: a single number with a named group — “hazard ratio of 0.45 for death in the treatment group” → HR < 1 → event occurs less frequently in the treatment/exposure group (protective effect); “hazard ratio of 1.8 for relapse” → HR > 1 → relapse occurred more frequently in the treatment/exposure group. SHAPE 3 — PICK THE TEST: “which statistical test compares survival between two groups?” → log rank test or Cox regression (both printed as valid for the P value for the survival difference — NOT t-test, chi-square, or ANOVA). SHAPE 4 — THE SLOPE/MAGNITUDE BRIDGE: which curve carries the higher hazard (the steeper one), and what does the widening separation reflect (the magnitude of HR)? THE DIRECTION TRAP: the reference group is the one NAMED — “HR for death in the treatment group” of 1.6 means the TREATED patients died more often; do not flip the ratio in your head. And remember the outcome is not always death: any event, frequently mortality, with relapse the print's own second example.",
    },
    {
      kind: "callout",
      variant: "memory",
      title: "The mnemonic ledger — four KYP originals, marked as such",
      body:
        "The VLM census of both pages found NO mnemonic of First Aid's own on these two blocks (no margin notes, no red text — staging-pubh7/vlm-census.txt), so every mnemonic below is a KYP ORIGINAL, marked as such: (1) “START AT 1.0, STEP AT EVENTS, FLAT BETWEEN, DOT AT THE END” — the Kaplan-Meier grammar in one line; (2) “ONE MINUS THE EVENT” — the printed step arithmetic, Survival probability = 1 – (event probability); (3) “SLOPES, NOT HEIGHTS” — HR is derived from the relative slopes (hazards) of the survival curves, so judge hazard by steepness, never by how high a curve sits; (4) “OVER ONE = MORE EVENTS, UNDER ONE = PROTECTIVE” — the HR direction rule (HR > 1: the event occurs more frequently in the treatment/exposure group; HR < 1: less frequently — the printed parenthetical “protective effect”). The adjacent pages' own hooks — SN-N-OUT / SP-P-IN on book 260 below, “Control the case in the OR.” and “Cohort = relative risk.” on book 256 — are First Aid's and are referenced where relevant, always attributed.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The clinical anchors — where time-to-event analysis actually runs",
      intro:
        "Both blocks are abstract until attached to the trial endpoints they serve; these are the clinical settings the exam dresses them in.",
      items: [
        {
          lead: "ONCOLOGY TRIALS — the printed figure's home turf",
          text: "The printed figure's arms are named Drug and Control — a randomized therapeutic trial read as survival curves, and the hazard-ratio block's own event examples are “death, relapse,” the two canonical oncology endpoints (overall survival and relapse-free survival). A new chemotherapy agent whose arm rides higher and falls flatter than the control arm is an HR < 1 for death — the printed “(protective effect)” in clinical clothes.",
        },
        {
          lead: "ANY EVENT, FREQUENTLY MORTALITY — the outcome menu",
          text: "“Outcomes examined may include any event, but frequently include mortality.” The same machinery times MI, stroke, transplantation, discharge, mechanical ventilation — any binary outcome with a clock on it. The step arithmetic does not change with the event: Survival probability = 1 – (event probability) rebuilds the curve for whatever event the trial defined.",
        },
        {
          lead: "WHY NOT JUST PERCENTAGES — unequal follow-up and censoring",
          text: "The clinical reason Kaplan-Meier exists: patients enroll at different times, drop out, or outlive the study, so a plain “X of Y died” is wrong twice — it ignores WHEN the events happened and it cannot handle subjects who left the risk set without an event (censoring — KYP context; the print shows endpoint dots at Z but does not name the mechanism). The staircase absorbs both: steps at event times only, everyone else contributing follow-up time to the flats.",
        },
        {
          lead: "READING THE ABSTRACT — HR with its confidence interval",
          text: "Journal abstracts report the hazard ratio with a 95% CI: an HR of 0.74 (95% CI 0.58–0.94) for death means the event occurred less frequently in the treatment group, and the CI excluding 1 is the significance statement — the same logic the printed P value sentence supplies via log rank test or Cox regression (the CI framing is KYP context, bridging to the confidence-interval topic).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem:
          "A trial randomizes 200 patients with a newly diagnosed malignancy to an experimental drug or placebo and follows them for 5 years. The investigators plot the probability of remaining alive over time for each arm; both curves begin together at the top left, and the drug arm's curve descends in small steps while the placebo arm's curve descends in large ones, the two separating progressively.",
        discriminator:
          "“Probability of survival over time” plotted per arm with stepped curves that start together at 1.0 — the printed figure's exact grammar",
        concept: "The Kaplan-Meier curve as the display for time-to-event data",
        answer:
          "Kaplan-Meier curves — used to estimate probability of survival over time; the graphic representation shows the survival probabilities (y-axis) vs length of time (x-axis), useful for displaying “time-to-event” data. Each vertical drop is an event time (sized by Survival probability = 1 – (event probability)); the steeper placebo curve is the higher-hazard arm.",
      },
      {
        stem:
          "In the same trial, the authors report that death occurred with a hazard ratio of 0.45 in the drug group compared with the placebo group.",
        discriminator:
          "A single ratio below 1, anchored to the treatment group, for an event over time",
        concept: "Hazard-ratio direction interpretation",
        answer:
          "HR < 1 — event occurs less frequently in the treatment/exposure group (protective effect): the drug arm's hazard of death is less than half the placebo arm's, exactly the flatter/higher curve in the figure. (HR = 1 would be no difference; HR > 1 would mean death occurred more frequently in the treatment group.)",
      },
      {
        stem:
          "The investigators then ask which statistical procedure will test whether the difference between the two survival curves is statistically significant.",
        discriminator:
          "Two whole survival curves compared over time — not two proportions, not two means",
        concept: "The test for a survival difference",
        answer:
          "The P value for the survival difference can be calculated using log rank test or Cox regression (both printed as valid) — the log rank test compares the entire curves across follow-up; Cox regression fits the relative hazards and yields the hazard ratio. T-tests, chi-square, and ANOVA do not handle time-to-event data with unequal follow-up.",
      },
      {
        stem:
          "A figure shows two survival curves: curve A falls steeply in the first year and then flattens low; curve B descends gently and stays high. The stem asks which curve reflects the higher hazard during the first year.",
        discriminator:
          "Slope, not height — the question asks about the RATE of events, not the number of survivors",
        concept: "Hazard as the slope of the survival curve",
        answer:
          "Curve A — “A steeper curve = higher hazard (faster occurrence of event).” Hazard is derived from the relative slopes (hazards) of the survival curves: the steep descent means events were occurring rapidly in that arm during the first year, regardless of where each curve ends up later.",
      },
    ],
    traps: [
      {
        a: "The HIGHER curve at a time point — more patients still event-free",
        b: "The STEEPER curve at a time point — the higher hazard",
        whyConfused:
          "Both are read off the same pair of curves, and both get larger-looking when the curves separate; a stem about “which group has the higher hazard?” invites a height answer",
        keyDifference:
          "HEIGHT is a cumulative quantity (survivors so far); HAZARD is an instantaneous rate (events per unit time — the slope). “HR is derived from the relative slopes (hazards) of the survival curves,” not from the heights: a curve can sit high AND be steep, or sit low and have gone flat",
        clue:
          "“Hazard,” “rate,” “faster occurrence of event,” “per unit time” → read the SLOPE; “probability of survival at 3 years,” “how many were alive at the end” → read the HEIGHT.",
      },
      {
        a: "Hazard ratio — how often the event occurs in one group vs another, OVER TIME",
        b: "Relative risk — a ratio of cumulative incidences at a fixed point",
        whyConfused:
          "Both are “group vs group” ratios anchored at 1, both appear in trial abstracts side by side, and both are below 1 for a protective treatment",
        keyDifference:
          "The hazard ratio compares the event RATES operating through follow-up (the curves' relative slopes — instantaneous); relative risk compares two proportions at one time point (e.g., 5-year mortality). The KM block's world is time-to-event; the quantifying-risk page's world is the 2×2 table (KYP context bridging the two printed pages)",
        clue:
          "“Over time,” “hazard,” “survival curves,” or a HR reported with survival curves → hazard ratio; “at 5 years, X% vs Y%” → relative risk.",
      },
      {
        a: "HR > 1 — event occurs more frequently in the TREATMENT/EXPOSURE group",
        b: "HR < 1 — event occurs less frequently in the treatment/exposure group (protective effect)",
        whyConfused:
          "The ratio's direction depends on which group is the reference, and stems name the group in different orders; an HR above 1 for a drug sounds like “better” to number-lulled readers",
        keyDifference:
          "The named group is the index: “HR for death in the treatment group was 1.8” means the TREATED patients died MORE often (harm); 0.45 means they died less often (the printed “protective effect”). The event itself matters too — HR > 1 for a desirable event (eg, cure) would be good (KYP caveat: the print's events, death and relapse, are adverse)",
        clue:
          "Underline the group the sentence attaches the HR to, and ask whether that group's curve dropped faster (HR > 1) or slower (HR < 1).",
      },
      {
        a: "A drop to 0.7 on the curve — 70% survival, 30% cumulative event probability",
        b: "A 0.3 survival probability — 70% of the arm had the event",
        whyConfused:
          "The y-axis numbers can be read as either survival or event probability, and the printed formula “Survival probability = 1 – (event probability)” is the only conversion needed",
        keyDifference:
          "The curve plots SURVIVAL probability; the event probability is its complement (1 – survival). Control landing at 0.7 means 70% still event-free and 30% event probability accumulated so far — while Drug at 0.9 means only 10% cumulative events. Every step down is exactly this subtraction",
        clue:
          "Read the axis label first (it is printed as “Survival probability”), then convert to events with 1 – (survival) when the question asks about the event.",
      },
    ],
    pivots: [
      {
        lookAlike: "A hazard ratio below 1 attached to a drug in an abstract",
        differentiator:
          "Below 1 is the PROTECTIVE direction when the event is adverse (death, relapse — the print's examples)",
        correctPath:
          "HR < 1 — “event occurs less frequently in the treatment/exposure group (protective effect)”: the drug arm's curve is the flatter, higher one. Do not read “< 1” as “less effective” — the ratio is of hazards, not of benefits.",
      },
      {
        lookAlike: "A study where patients are followed for different lengths and some never reach the outcome",
        differentiator:
          "Time-to-event data with incomplete follow-up — the signature of Kaplan-Meier territory",
        correctPath:
          "Plot survival probability over time with the Kaplan-Meier curve (steps at events, flats between them, endpoint dots at the end of follow-up); compare arms with the log rank test or Cox regression and summarize with the hazard ratio — not with simple proportions or a chi-square.",
      },
      {
        lookAlike: "“Which test is appropriate?” with survival curves in the stem",
        differentiator:
          "The outcome is a TIME to an event compared across groups",
        correctPath:
          "Log rank test (or Cox regression) — “P value for the survival difference can be calculated using log rank test or Cox regression.” Chi-square/t-test/ANOVA apply to untimed proportions or means; correlation applies to two continuous variables — the survival comparison has its own test family.",
      },
    ],
    miniCase: {
      vignette:
        "A 62-year-old man with newly diagnosed stage III melanoma enrolls in a randomized trial of an experimental anti-PD-1 antibody plus standard chemotherapy versus standard chemotherapy alone. Two hundred patients are randomized in total and followed for up to 5 years; several patients in each arm are still alive and disease-free when the trial closes. The investigators plot the probability of relapse-free survival over time for each arm: both curves start together at the top left; at 12 months the combination-therapy curve steps down slightly while the chemotherapy-alone curve drops steeply; by 5 years the curves have separated widely, the combination-therapy curve ending near 0.85 and the chemotherapy-alone curve near 0.5. The reported hazard ratio for relapse in the combination-therapy group is 0.4.",
      question:
        "Which of the following best describes this hazard ratio and the curves that produced it?",
      options: [
        {
          label: "A",
          text:
            "HR < 1 — relapse occurred less frequently in the treatment group over time (a protective effect); the combination-therapy curve is the flatter, higher one",
          correct: true,
          why:
            "CORRECT — the printed rule: “HR < 1—event occurs less frequently in the treatment/exposure group (protective effect).” The index group is the one the HR is attached to (combination therapy), its hazard of relapse is 0.4× the comparator's, and on the figure that is exactly the gentle-stepping curve that stays high (≈0.85 vs ≈0.5). The steep chemotherapy-alone curve is the higher-hazard arm — “A steeper curve = higher hazard (faster occurrence of event).”",
        },
        {
          label: "B",
          text:
            "HR < 1, but the combination-therapy curve is the lower one, since a hazard ratio below 1 means fewer patients were alive at the end of the study",
          why:
            "TEMPTING height-swap — it confuses the curve's HEIGHT with its SLOPE. The hazard ratio is “derived from the relative slopes (hazards) of the survival curves,” not from the final heights: HR < 1 means the treatment arm's events came SLOWER (flatter curve), which is precisely why that curve ends HIGHER (≈0.85). Fewer relapses over time leaves more patients event-free — height is the consequence, not the definition.",
        },
        {
          label: "C",
          text:
            "HR = 1, because both curves start at 1.0 and both arms experience relapse events during follow-up",
          why:
            "TEMPTING null-misread — a shared start is a property of EVERY Kaplan-Meier figure (all curves open at survival probability 1.0), and the null is not “both arms have events” but “no difference BETWEEN groups.” Here the curves separate widely — “Separation of curves over time reflects magnitude of HR” — and 0.4 is far from the null value of 1.",
        },
        {
          label: "D",
          text:
            "The result should instead be reported as a relative risk of 0.5/0.85 ≈ 0.59 at 5 years, since the Kaplan-Meier curves only support a comparison of final proportions",
          why:
            "WRONG tool — the curves support far more than their endpoints: the hazard ratio uses the ENTIRE follow-up experience (the relative slopes at every event time), while this option collapses 5 years of timing into two final proportions and throws away the “time-to-event” information that makes this design a Kaplan-Meier analysis. The reported 0.4 already reflects the full curves (a Cox regression; KYP context).",
        },
        {
          label: "E",
          text:
            "No valid comparison is possible because some patients were still alive and disease-free when the trial closed, so the P value cannot be calculated",
          why:
            "TEMPTING but wrong — patients who end follow-up event-free are handled by the Kaplan-Meier machinery itself (they contribute follow-up time and stop at endpoint dots — the print's Z), and the printed sentence answers the test question directly: “P value for the survival difference can be calculated using log rank test or Cox regression.” Incomplete follow-up is the reason this method exists, not an obstacle to it.",
        },
      ],
      reasoning:
        "The vignette is the printed figure wearing trial clothes: both arms from 1.0, one gentle staircase (combination therapy, ending ≈0.85), one steep staircase (chemotherapy alone, ending ≈0.5), and a single number — HR 0.4 for relapse in the treatment group. Route: (1) identify the index group from the sentence (combination therapy); (2) apply the direction rule — HR < 1, event occurs less frequently in the treatment/exposure group (protective effect); (3) match the number to the geometry — the flatter/higher curve, per “HR is derived from the relative slopes (hazards) of the survival curves.” The distractors each isolate a classic error: B swaps height for slope; C misreads the shared 1.0 start as the null; D collapses the curves into a two-proportion relative risk, discarding the timing; E treats censored/ongoing follow-up as disqualifying when it is exactly what the Kaplan-Meier estimator and the log rank test / Cox regression are built to handle.",
    },
  },
  mnemonics: [
    {
      code: "START AT 1.0, STEP AT EVENTS, FLAT BETWEEN, DOT AT THE END",
      meaning:
        "A KYP ORIGINAL — the Kaplan-Meier grammar in one line: every curve opens at survival probability 1.0 (all enrollees event-free); each event time is a vertical step down sized by “Survival probability = 1 – (event probability)”; between events the curve runs flat (no events); the curve ends with a dot at the end of follow-up (the printed figure's Z).",
      memorizes:
        "All five elements of any Kaplan-Meier figure — the start, the drops, the flats, the endpoint dots, and what each encodes",
      whenToUse:
        "Any figure-reading stem: point at each element and name its meaning before touching the options; also the fastest check that a shown curve is a Kaplan-Meier curve at all (it must start at 1.0).",
      clinical:
        "The same grammar reads every trial's survival figure (overall survival, relapse-free survival): the arm whose staircase is gentler is the arm the treatment is helping (KYP context for the trial application).",
    },
    {
      code: "ONE MINUS THE EVENT",
      meaning:
        "A KYP ORIGINAL — the printed formula compressed: Survival probability = 1 – (event probability). Every step down on the curve is exactly this subtraction, and the complement converts either way: a landing at 0.7 is 30% cumulative event probability; a 10% event probability step takes the curve down one tenth.",
      memorizes:
        "The relationship between the curve's y-axis (survival) and the question's outcome (the event), in both directions",
      whenToUse:
        "Any stem that gives one probability and asks for the other, or asks what fraction of an arm had the event by a given time (“the curve reads 0.5 — what fraction relapsed?” → 50%).",
      clinical:
        "Mortality is the frequent event but not the only one — relapse, MI, progression all run through the same complement (the print: “Outcomes examined may include any event, but frequently include mortality”; “eg, death, relapse”).",
    },
    {
      code: "SLOPES, NOT HEIGHTS",
      meaning:
        "A KYP ORIGINAL — the printed bridge sentence as a rule of reading: “HR is derived from the relative slopes (hazards) of the survival curves,” so judge hazard by a curve's STEEPNESS (“A steeper curve = higher hazard — faster occurrence of event”) and never by how high it sits; the heights answer how many survived, the slopes answer how fast the events came.",
      memorizes:
        "What the hazard ratio is built from (relative slopes) and the height-vs-slope distinction the exam tests constantly",
      whenToUse:
        "Any “which group has the higher hazard?” or “what does the separation of the curves reflect?” stem — answer with steepness, then magnitude: “Separation of curves over time reflects magnitude of HR.”",
      clinical:
        "In a trial abstract, the HR is the slopes' summary: 0.4 means the treatment arm's event rate ran at 40% of the control rate through follow-up (the CI/P value comes from log rank test or Cox regression; KYP context).",
    },
    {
      code: "OVER ONE = MORE EVENTS, UNDER ONE = PROTECTIVE",
      meaning:
        "A KYP ORIGINAL — the direction trio with its anchor: HR = 1 — no difference between groups; HR > 1 — event occurs MORE frequently in the treatment/exposure group (over one, more events — with adverse events like death/relapse, a harm signal); HR < 1 — event occurs LESS frequently in the treatment/exposure group (under one, protective — the printed “(protective effect)”).",
      memorizes:
        "All three printed bullets and their direction, with the index group (treatment/exposure) built into the wording",
      whenToUse:
        "Any stem handing you a hazard ratio with a named group: find the group, apply the direction, then check the event's desirability (for the print's adverse events, under one = benefit, over one = harm).",
      clinical:
        "The named group is the index — “HR 1.8 for relapse in the treatment group” is a failing treatment, not a strong one; flip the sentence's group and you flip the answer (the caveat about desirable events is KYP's).",
    },
  ],
  rapidReview: {
    s30: [
      "Kaplan-Meier curve — used to estimate probability of survival over time; survival probabilities (y-axis) vs length of time (x-axis); useful for displaying “time-to-event” data",
      "Outcomes examined may include any event, but frequently include mortality (the HR block's examples: death, relapse)",
      "Survival probability = 1 – (event probability) — every vertical step on the curve is this subtraction",
      "Every KM curve starts at 1.0; drops = event times; flats = no events; endpoint dots = end of follow-up (the figure's X and Y are event times, Z the end)",
      "P value for the survival difference can be calculated using log rank test or Cox regression",
      "Hazard ratio — measure of how often a particular event (eg, death, relapse) occurs in one group compared with another, over time",
      "HR = 1 — no difference · HR > 1 — event occurs more frequently in the treatment/exposure group · HR < 1 — event occurs less frequently (protective effect)",
      "Kaplan-Meier curves: HR is derived from the relative slopes (hazards) of the survival curves — a steeper curve = higher hazard (faster occurrence of event); separation of curves over time reflects magnitude of HR",
    ],
    m3: [
      "START AT 1.0, STEP AT EVENTS, FLAT BETWEEN, DOT AT THE END — the KM grammar (KYP)",
      "ONE MINUS THE EVENT — Survival probability = 1 – (event probability) (KYP; formula printed)",
      "SLOPES, NOT HEIGHTS — HR comes from the relative slopes of the survival curves; steepness = hazard (KYP)",
      "OVER ONE = MORE EVENTS, UNDER ONE = PROTECTIVE — the HR = 1 / > 1 / < 1 trio (KYP; rules printed)",
    ],
    m10: [
      "The printed figure's geometry: both arms share the 1.0 opening; at X, Drug steps to 0.9 while Control steps to 0.7; at Y, Drug steps to ≈0.85 (a half-tick step) while Control steps to ≈0.5; both end flat at Z with dots — Drug ≈ 0.85, Control ≈ 0.5",
      "The y-axis labels run 1.0 → 0.2 (nine ticks, no 0.1/0.0); the time axis carries NO numbers — the letters X, Y, Z mark the two event times and the end of follow-up, with “Time” printed between Y and Z",
      "Height vs slope: the HIGHER curve at a time = more patients event-free; the STEEPER curve = the higher hazard — the exam's favorite swap on this material",
      "The test pair: log rank test compares whole curves for the P value; Cox regression fits the hazards and yields the HR — both printed as valid for the P value for the survival difference",
    ],
  },
  recall: [
    {
      q: "What is a Kaplan-Meier curve used to estimate, and what does its graphic representation show?",
      a: "Used to estimate probability of survival over time; the graphic representation shows the survival probabilities (y-axis) vs length of time (x-axis) — useful for displaying “time-to-event” data.",
    },
    {
      q: "Which outcomes can a Kaplan-Meier curve examine, and which is most frequent?",
      a: "Outcomes examined may include any event, but frequently include mortality (the hazard-ratio block's own examples: death, relapse).",
    },
    {
      q: "State the printed formula connecting survival probability and event probability.",
      a: "Survival probability = 1 – (event probability) — every step down on the curve is exactly this subtraction.",
    },
    {
      q: "How is the P value for the survival difference between two arms calculated?",
      a: "Using the log rank test or Cox regression (both printed as valid).",
    },
    {
      q: "On the printed figure, what happens at event times X and Y, and at Z?",
      a: "At X both arms drop: Drug 1.0 → 0.9, Control 1.0 → 0.7. At Y both drop again: Drug 0.9 → ≈0.85, Control 0.7 → ≈0.5. At Z both curves end flat with endpoint dots — the end of follow-up (Drug ≈ 0.85, Control ≈ 0.5).",
    },
    {
      q: "Define the hazard ratio in the block's own words.",
      a: "A measure of how often a particular event (eg, death, relapse) occurs in one group compared with another, over time.",
    },
    {
      q: "What do HR = 1, HR > 1, and HR < 1 each mean?",
      a: "HR = 1 — no difference between groups; HR > 1 — event occurs more frequently in the treatment/exposure group; HR < 1 — event occurs less frequently in the treatment/exposure group (protective effect).",
    },
    {
      q: "How is the hazard ratio derived from Kaplan-Meier curves, and what do steepness and separation each reflect?",
      a: "HR is derived from the relative slopes (hazards) of the survival curves: a steeper curve = higher hazard (faster occurrence of event); separation of curves over time reflects magnitude of HR.",
    },
  ],
  related: [
    {
      title: "Likelihood ratios — the block immediately above on the same page",
      note:
        "The Kaplan-Meier curve block opens directly beneath the Likelihood ratio block on book 259 (the pinned page-split boundary): the chapter runs from revising a single patient's probability (pretest odds × LR = posttest odds) to revising a whole cohort's survival over time — both are probability-updating machinery, one for a test result, one for follow-up time.",
      topicId: "likelihood-ratios",
    },
    {
      title: "Diagnostic test performance — the block immediately below on book 260",
      note:
        "The Hazard ratio block ends where “Evaluation of diagnostic tests” begins (the pinned boundary): sensitivity and specificity are fixed properties of a test while PPV and NPV vary with prevalence — the fixed-vs-varying distinction that survival analysis generalizes to an entire time axis (a survival probability is a test-free quantity that varies with follow-up time).",
      topicId: "diagnostic-test-performance",
    },
    {
      title: "Hypothesis testing errors — what the log rank P value risks",
      note:
        "“P value for the survival difference can be calculated using log rank test or Cox regression” — that P value is a hypothesis test, subject to exactly the Type I (α) and Type II (β) errors and power machinery of the hypothesis-testing pages: rejecting a null of HR = 1 that is true, or missing a real separation of curves.",
      topicId: "hypothesis-testing-errors",
    },
    {
      title: "Quantifying risk — the 2×2 arithmetic underneath the curves",
      note:
        "Each step of a Kaplan-Meier curve is a risk computation on an interval's 2×2 experience — survival probability = 1 – (event probability) is the complement of the event risk the quantifying-risk page computes; the hazard ratio then relates those risks' rates over time the way relative risk relates two cumulative ones.",
      topicId: "quantifying-risk",
    },
  ],
  crossLinks: [
    {
      subject: "Biostatistics — hypothesis testing and the P value",
      connection:
        "The printed test sentence is a hypothesis test in miniature: the log rank test's null is HR = 1 (no difference between groups — the survival curves track together), and the resulting P value is interpreted with the same α/Type-I framework as every other test in the chapter (with Cox regression adding an estimated HR and confidence interval — the CI topic's territory).",
    },
    {
      subject: "Oncology — trial endpoints and survival terminology",
      connection:
        "The block's event examples, death and relapse, are the oncology endpoints overall survival and relapse-free survival; anti-PD-1/immune-checkpoint trials, adjuvant chemotherapy trials, and transplant studies all report Kaplan-Meier curves with hazard ratios — the printed Drug-vs-Control figure is the abstract figure of every oncology paper.",
    },
    {
      subject: "Cardiovascular medicine — mortality endpoints over follow-up",
      connection:
        "Cardiology trials time the same events: mortality after MI, heart-failure hospitalization, first stroke — all reported as time-to-event outcomes with Kaplan-Meier curves; a drug whose arm rides higher and falls flatter (HR < 1 for death) is the printed “protective effect” in cardiology clothes.",
    },
    {
      subject: "Pharmacology — clinical therapeutic trials and the two-arm figure",
      connection:
        "The printed figure's arms are named Drug and Control — the randomized two-arm trial of the clinical-therapeutic-trials material, read through its time axis: randomization balances the arms at time zero (both curves start at 1.0 together), and the treatment effect is the divergence that follows (intention-to-treat analysis keeps the arms as randomized, the same principle that keeps the curves comparable).",
    },
  ],
};
