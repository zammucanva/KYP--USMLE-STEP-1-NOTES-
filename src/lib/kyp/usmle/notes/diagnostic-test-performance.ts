import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 2, topic 8. Source: pdf page 282 / book 260,
// LOWER PORTION ONLY — a pinned page-split (the p252 pharmacology
// convention). The topic's scope STARTS at the "Evaluation of diagnostic
// tests" navy heading (raw text line 20) and runs to the page footer; the
// UPPER portion (the "Hazard ratio" block, raw lines 9-18, Kaplan-Meier
// hazard-ratio slopes) belongs to survival-analysis (pubh7, produced in
// parallel in this same batch) — no evidence quote in this note crosses
// that boundary. FIVE blocks are owned: (1) the STAGE-SETTER —
// "Sensitivity and specificity are fixed properties of a test. PPV and
// NPV vary depending on disease prevalence in population being tested.
// Test efficiency = (TP + TN)/(TP + FN + FP + TN)"; (2) the Test × Disease
// 2×2 GRID — rows Test ⊕/⊖, columns Disease ⊕/⊖, cells TP (top-left),
// FP (top-right), FN (bottom-left), TN (bottom-right), with the PPV/NPV
// formula boxes at its right and the formula strip beneath (Sensitivity =
// TP/(TP + FN), Specificity = TN/(TN + FP), Prevalence printed as a
// stacked fraction, TP + FN over (TP + FN + FP + TN)); (3) the FOUR
// PROPERTY ROWS — Sensitivity (true-positive rate), Specificity
// (true-negative rate), Positive predictive value, Negative predictive
// value — every definition, formula, and rule line carried verbatim in
// the note's table blocks; (4) the CUTOFF-VALUE FIGURE (pure vector
// line art, an ORIGINAL_KYP_REDRAW): two overlapping distributions —
// Disease absent (blue) LEFT, Disease present (red) RIGHT — y-axis
// "Number of people" (rotated), x-axis "Test results" with tick letters
// A (left, under the absent curve's right shoulder), B (middle, at the
// curves' crossing), C (right, under the present curve's left shoulder),
// vertical dashed lines at all three, TN large inside the left curve, TP
// large inside the right curve, FN small in the A–B stretch, FP small in
// the B–C stretch, callout arrows from the "Disease absent"/"Disease
// present" labels down to the curve peaks, and the legend "Possible
// cutoff values for ⊕ vs ⊖ test result / A = 100% sensitivity cutoff
// value / B = practical compromise between specificity and sensitivity /
// C = 100% specificity cutoff value"; (5) the two RULE LINES — "Lowering
// the cutoff value: ↑ Sensitivity ↑ NPV / B → A (↑ FP ↓ FN) ↓ Specificity
// ↓ PPV" and "Raising the cutoff value: ↑ Specificity ↑ PPV / B → C
// (↑ FN ↓ FP) ↓ Sensitivity ↓ NPV" — plus the printed "Note: In diseases
// where diagnosis is based on lower values (eg, anemia), the TP and TN
// are switched in the graph, ie, ↓ sensitivity and ↓ NPV, and
// vice-versa." CENSUS (pdfimages): ZERO raster images on the page — pure
// text, color-filled grid cells, and vector curves; the grid + formula
// strip is an ORIGINAL KYP ADAPTATION, the cutoff figure an
// ORIGINAL_KYP_REDRAW. VLM AVAILABLE this session (glm-4.6v, TWO passes,
// staging-pubh8/vlm-census.txt: full page at 120dpi + five 200dpi crops)
// — pinning the 2×2 orientation (Disease = columns, Test = rows, both
// axes carrying circled ⊕/⊖ glyphs), the cells' pink (TP/FP) and light
// blue (FN/TN) shading, the figure's geometry (absent LEFT / present
// RIGHT; TN/TP large inside the curves, FN left of FP low in the
// overlap; dashed verticals at A/B/C; diagonal callout arrows to the
// peaks), and the rule lines' fourteen arrows (six ↑ inline before
// Sensitivity/NPV/FP and Specificity/PPV/FN; six ↓ before FN)/Specificity/
// PPV and FP)/Sensitivity/NPV; two HORIZONTAL B→A and B→C arrows — all
// single-headed). PRINTED-TEXT QUIRKS carried + documented: (1) the 2×2's
// two ⊕ glyphs (Disease +, Test +) DO NOT EXTRACT in the text layer,
// while its two ⊖ glyphs extract as "–" — the grid's raw lines read
// "Test / Disease / – / – / TP / FP / FN / TN" (orientation pinned by
// pdftotext -bbox + the VLM crops); (2) the row headers hyphenate across
// line wraps in print — "Sensitivity (true-positive rate)" and
// "Specificity (true-negative rate)" — which the raw layer merges to
// "(truepositive rate)"/"(truenegative rate)" (the hyphenated print is
// carried); (3) the SENSITIVITY row header extracts LATE — raw line 162,
// AFTER the whole cutoff figure — while the Specificity row header
// extracts in place (a content-stream order quirk; the figure's text
// also extracts jumbled, see (5)); (4) the formula strip's three bottom
// formulas print side by side but MERGE onto one raw line ("= TP/(TP +
// FN) = TN/(TN + FP) (TP + FN + FP + TN)"), with the stacked-fraction
// Prevalence numerator "TP + FN" extracting on its own line above — the
// note's table re-sets them as printed; (5) the cutoff figure's text
// extracts HEAVILY interleaved: the four rule lines first (with the six
// true ↑ arrows merged inline), then EIGHT standalone "↑" glyphs — the
// six true ↓ arrows AND the two horizontal B→A/B→C arrows ALL map to the
// "↑" codepoint in the text layer (a font/ToUnicode quirk) — interleaved
// with the axis letters A/B/C, the quadrant labels FP/FN/TP/TN, "Test
// results", then the legend block, "Disease present"/"Disease absent",
// "Number of people", and the late Sensitivity row header; direction and
// layout pinned by the 200dpi VLM crop pass; (6) the axis-pole glyphs in
// "Possible cutoff values for ⊕ vs ⊖ test result" — the circled plus is
// DROPPED by the raw layer and the circled minus extracts as "–" (the
// raw reads "Possible cutoff values for / vs – test result"); (7) C1
// control bytes around arrows — "\x8e→" in "high pretest probability →
// high PPV" and "\x90↓" twice in the anemia Note (the Note's ↓ arrows
// are the ONLY ones that extract with their true direction); (8) the
// en-dash prints as the minus in "= 1 – FN rate" / "= 1 – FP rate"; (9)
// the ligature "ﬁ" in "Speciﬁcity"/"speciﬁcity" as extracted; (10) two
// tiny red superscript footnote-style markers (VLM-read as "2") — one at
// the Prevalence formula box, one at the Raising-the-cutoff rule box —
// with no footnote text printed in this portion (citation furniture, not
// carried into the KYP visual; documented). ADJUDICATIONS (documented in
// the manifest too): (A) the batch brief's rendering of the two rule
// lines matches the print's arrows, but the print lays each rule on TWO
// LINES, the second opening with the letter-pair "B → A" / "B → C"
// (horizontal arrows) — pinned by bbox (the letter pairs + two wide
// 10.4-pt arrow glyphs) + the VLM crop pass; the note and the visual
// draw the two-line print; (B) the brief described the figure's x-axis
// label as "vs – test result" (the raw text layer) — the PRINT shows
// circled pole glyphs, "Possible cutoff values for ⊕ vs ⊖ test result"
// (VLM crop pass); carried as printed, the raw drop documented; (C) one
// early VLM full-page read rendered the anemia Note's second arrow as ↑
// — the TEXT LAYER prints ↓ both times (with \x90 bytes) and two of
// three VLM reads agree; text layer governs: "↓ sensitivity and ↓ NPV";
// (D) the brief's stage-setter and four property blocks matched the
// print exactly (VLM-confirmed verbatim) — no correction needed.
// PROVENANCE SPLIT: verbatim = the stage-setter, the grid labels and all
// six formulas, the four property rows (definitions, "Value approaching
// 100%..." lines, SN-N-OUT and SP-P-IN lines, screening/confirmation
// lines, the PPV/NPV variation lines), the figure's labels, legend,
// rules, and Note; FA-own = the SN-N-OUT and SP-P-IN mnemonics (printed
// in RED, carried VERBATIM and ATTRIBUTED everywhere they appear) and
// the A/B/C cutoff geography; KYP-original = the fixed-pair vs
// floating-pair two-tier architecture, the denominator-axis rule
// ("disease columns, test rows"), the screening→confirmation pipeline
// framing, every worked number (the 2%/20% prevalence computation), the
// exam layer, and the two KYP mnemonics ("DISEASE COLUMNS, TEST ROWS"
// and "LOWER THE BAR, WIDER THE NET") — every teaching generalization
// beyond the printed page is flagged as KYP context. DrugCards: none —
// the page prints test properties, not drugs (folded by absence in the
// manifest). The next page (pdf 283) opens the ROC curve — precision
// and accuracy, a separate topic.

export const diagnosticTestPerformance: KypUsMLENote = {
  id: "diagnostic-test-performance",
  title: "Sensitivity, Specificity, and Predictive Values",
  subtitle:
    "Every diagnostic-test question on the exam is secretly the same picture: a 2×2 grid of Test (positive or negative) against Disease (present or absent), with four cells — TP, FP, FN, TN — and six numbers you can build from them. The page's first sentence sorts those six into two families with completely different behavior: \"Sensitivity and specificity are fixed properties of a test. PPV and NPV vary depending on disease prevalence in population being tested.\" Sensitivity reads DOWN the disease-present column — the proportion of all people WITH disease who test positive — and a value approaching 100% is desirable for ruling out disease (a low false-negative rate), which is why a high sensitivity test is used for screening and why First Aid's own mnemonic SN-N-OUT works: a highly SeNsitive test, when Negative, rules OUT disease. Specificity reads down the disease-absent column — the proportion of all people WITHOUT disease who test negative — and a value approaching 100% is desirable for ruling in disease (a low false-positive rate), which is why a high specificity test is used for confirmation after a positive screening test: SP-P-IN, a highly SPecific test, when Positive, rules IN disease. The predictive values flip to the TEST rows: PPV is the probability that a person with a positive test result actually has the disease, and NPV the probability that a person with a negative test result actually does not — so both inherit the population you test, PPV varying directly and NPV inversely with pretest probability. Below, the cutoff figure draws the same trade-off geometrically: two overlapping distributions, three possible cutoffs (A = 100% sensitivity, B = compromise, C = 100% specificity), and the rule that lowering the cutoff buys sensitivity and NPV at the price of specificity and PPV.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory:
    "Public Health Sciences — diagnostic-test performance: the fixed pair (sensitivity and specificity, the disease-column fractions) versus the prevalence-floating pair (PPV and NPV, the test-row fractions), the Test × Disease 2×2 with all six formulas (including test efficiency and prevalence), First Aid's own SN-N-OUT and SP-P-IN mnemonics carried attributed, the screening-versus-confirmation positioning, and the two-overlapping-distributions cutoff figure with cutoffs A/B/C, the lowering/raising rules, and the anemia note.",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 260 (lower) (Epidemiology and Biostatistics: Evaluation of diagnostic tests)",
  tags: [
    "diagnostic tests",
    "sensitivity",
    "specificity",
    "positive predictive value",
    "PPV",
    "negative predictive value",
    "NPV",
    "true-positive rate",
    "true-negative rate",
    "false positive",
    "false negative",
    "test efficiency",
    "prevalence",
    "pretest probability",
    "cutoff value",
    "screening",
    "confirmation testing",
    "SN-N-OUT",
    "SP-P-IN",
    "anemia",
    "epidemiology",
    "biostatistics",
  ],
  core: {
    what:
      "One printed lower-page, carried whole. BLOCK 1 — the STAGE-SETTER: \"Sensitivity and specificity are fixed properties of a test. PPV and NPV vary depending on disease prevalence in population being tested. Test efficiency = (TP + TN)/(TP + FN + FP + TN).\" BLOCK 2 — the TEST × DISEASE 2×2: rows Test ⊕ / Test ⊖, columns Disease ⊕ / Disease ⊖; TP in the Test ⊕ × Disease ⊕ cell, FP in Test ⊕ × Disease ⊖, FN in Test ⊖ × Disease ⊕, TN in Test ⊖ × Disease ⊖; the PPV and NPV boxes at the grid's right (PPV = TP/(TP + FP), NPV = TN/(TN + FN)) and the formula strip beneath: Sensitivity = TP/(TP + FN), Specificity = TN/(TN + FP), Prevalence = (TP + FN)/(TP + FN + FP + TN) printed as a stacked fraction. BLOCK 3 — the FOUR PROPERTY ROWS: Sensitivity (true-positive rate) — \"Proportion of all people with disease who test positive, or the ability of a test to correctly identify those with the disease.\"; \"Value approaching 100% is desirable for ruling out disease and indicates a low false-negative rate.\"; = TP / (TP + FN); = 1 – FN rate; \"SN-N-OUT = highly SeNsitive test, when Negative, rules OUT disease\"; \"High sensitivity test used for screening.\" Specificity (true-negative rate) — \"Proportion of all people without disease who test negative, or the ability of a test to correctly identify those without the disease.\"; \"Value approaching 100% is desirable for ruling in disease and indicates a low false-positive rate.\"; = TN / (TN + FP); = 1 – FP rate; \"SP-P-IN = highly SPecific test, when Positive, rules IN disease\"; \"High specificity test used for confirmation after a positive screening test.\" Positive predictive value — \"Probability that a person who has a positive test result actually has the disease.\"; PPV = TP / (TP + FP); \"PPV varies directly with pretest probability (baseline risk, such as prevalence of disease): high pretest probability → high PPV.\" Negative predictive value — \"Probability that a person with a negative test result actually does not have the disease.\"; NPV = TN / (TN + FN); \"NPV varies inversely with prevalence or pretest probability.\" BLOCK 4 — the CUTOFF-VALUE FIGURE: two overlapping distributions (Disease absent left, Disease present right), y-axis \"Number of people\", x-axis \"Test results\" with cutoffs A / B / C, TN and TP labeled inside their curves, FN (A–B stretch) and FP (B–C stretch) in the overlap, the legend \"Possible cutoff values for ⊕ vs ⊖ test result; A = 100% sensitivity cutoff value; B = practical compromise between specificity and sensitivity; C = 100% specificity cutoff value\", and the two rule lines — \"Lowering the cutoff value: ↑ Sensitivity ↑ NPV; B → A (↑ FP ↓ FN); ↓ Specificity ↓ PPV\" and \"Raising the cutoff value: ↑ Specificity ↑ PPV; B → C (↑ FN ↓ FP); ↓ Sensitivity ↓ NPV\" — plus the printed Note: \"In diseases where diagnosis is based on lower values (eg, anemia), the TP and TN are switched in the graph, ie, ↓ sensitivity and ↓ NPV, and vice-versa.\"",
    why:
      "This page is the arithmetic heart of the Epidemiology and Biostatistics subsection because every test the exam can name — and every screening program it can describe — reduces to the same four cells. The page's own first sentence is the architecture: the six quantities split into a FIXED family and a FLOATING family. Sensitivity and specificity are properties of the TEST ALONE — each reads down one disease column of the grid (sensitivity: of everyone with disease, what fraction tests positive; specificity: of everyone without disease, what fraction tests negative), so neither cares how common the disease is in the room. The predictive values read ACROSS the test rows instead — PPV: of everyone testing positive, what fraction actually has the disease; NPV: of everyone testing negative, what fraction is truly disease-free — so their denominators are assembled by whoever ordered the test, and prevalence walks straight in: \"PPV varies directly with pretest probability (baseline risk, such as prevalence of disease): high pretest probability → high PPV\", while \"NPV varies inversely with prevalence or pretest probability.\" That asymmetry generates the page's clinical choreography: screening demands that NOTHING be missed, so it wants the low false-negative test — \"High sensitivity test used for screening\" — and a negative result on such a test safely rules disease out (SN-N-OUT). Confirmation demands that no one be falsely labeled, so it wants the low false-positive test — \"High specificity test used for confirmation after a positive screening test\" — and a positive result on such a test rules disease in (SP-P-IN). The cutoff figure then shows WHY no test maximizes both at once: disease-present and disease-absent people produce OVERLAPPING distributions of test results, so wherever the cutoff lands, the overlap region pays someone — cutoff A (100% sensitivity) calls nearly everyone positive and swallows false positives; cutoff C (100% specificity) calls almost no one positive and leaks false negatives; B is the printed \"practical compromise between specificity and sensitivity.\" Moving the cutoff is therefore a trade with a printed price list: lowering it (B → A) raises Sensitivity and NPV while paying in FP, Specificity, and PPV; raising it (B → C) raises Specificity and PPV while paying in FN, Sensitivity, and NPV.",
    keyIdea:
      "Read any diagnostic-test question in four moves. MOVE 1 — BUILD THE GRID: rows Test ⊕/⊖ × columns Disease ⊕/⊖, cells TP / FP / FN / TN; every quantity on the page is a fraction of these cells. MOVE 2 — ASK WHICH AXIS THE QUESTION READS: DISEASE COLUMNS give the fixed pair — Sensitivity = TP/(TP + FN) (also = 1 – FN rate) down the Disease ⊕ column; Specificity = TN/(TN + FP) (also = 1 – FP rate) down the Disease ⊖ column — properties of the test alone, unchanged by prevalence. TEST ROWS give the floating pair — PPV = TP/(TP + FP) across the Test ⊕ row; NPV = TN/(TN + FN) across the Test ⊖ row — both hostage to prevalence: PPV varies DIRECTLY with pretest probability (high pretest probability → high PPV), NPV INVERSELY. Two more row/column reads: Prevalence = (TP + FN)/(TP + FN + FP + TN) (the whole Disease ⊕ column over everyone) and Test efficiency = (TP + TN)/(TP + FN + FP + TN) (the correct calls over everyone). MOVE 3 — APPLY THE TWO MNEMONIC RULES (First Aid's own, printed in red): SN-N-OUT — a highly SeNsitive test, when Negative, rules OUT disease (so negative results on sensitive tests are reassuring; high sensitivity = screening posture; value approaching 100% desirable for ruling out disease, low false-negative rate). SP-P-IN — a highly SPecific test, when Positive, rules IN disease (so positive results on specific tests are believable; high specificity = confirmation posture, used after a positive screening test; value approaching 100% desirable for ruling in disease, low false-positive rate). MOVE 4 — IF THE CUTOFF MOVES, FOLLOW THE POSITIVE CALL: lowering the cutoff (B → A) makes MORE people test positive — ↑ Sensitivity, ↑ NPV, and (↑ FP ↓ FN), but ↓ Specificity and ↓ PPV; raising it (B → C) makes FEWER — ↑ Specificity, ↑ PPV, and (↑ FN ↓ FP), but ↓ Sensitivity and ↓ NPV. And when the disease is diagnosed by LOWER values (the printed anemia example), the whole figure mirrors — TP and TN switch in the graph, and the rules read vice-versa.",
  },
  mechanisms: [
    {
      id: "fixed-vs-prevalence-map",
      title:
        "The two-tier architecture: how one 2×2 grid yields fixed test properties and prevalence-floating predictive values",
      context:
        "The printed Test × Disease 2×2 (book 260 lower): four cells, six quantities, two families",
      flow: {
        nodes: [
          {
            id: "grid",
            label: "THE GRID — Test rows × Disease columns, cells TP / FP / FN / TN",
            sublabel:
              "Input — the printed 2×2: rows Test ⊕ and Test ⊖, columns Disease ⊕ and Disease ⊖. TP = Test ⊕ × Disease ⊕ (top-left); FP = Test ⊕ × Disease ⊖ (top-right); FN = Test ⊖ × Disease ⊕ (bottom-left); TN = Test ⊖ × Disease ⊖ (bottom-right). Every number the page prints is a fraction whose denominator is one full row or one full column of this grid (KYP framing of the printed formulas).",
            variant: "input",
          },
          {
            id: "sensitivity",
            label: "DOWN THE DISEASE ⊕ COLUMN — Sensitivity (true-positive rate)",
            sublabel:
              "Process — \"Proportion of all people with disease who test positive, or the ability of a test to correctly identify those with the disease\": everyone in the Disease ⊕ column is TP + FN, and sensitivity is the fraction who landed in TP: = TP / (TP + FN) = 1 – FN rate. \"Value approaching 100% is desirable for ruling out disease and indicates a low false-negative rate.\" Because the denominator is the disease column only, the room's prevalence cannot touch it — the page's own first sentence: sensitivity is a FIXED property of a test.",
            variant: "process",
          },
          {
            id: "specificity",
            label: "DOWN THE DISEASE ⊖ COLUMN — Specificity (true-negative rate)",
            sublabel:
              "Process — \"Proportion of all people without disease who test negative, or the ability of a test to correctly identify those without the disease\": everyone in the Disease ⊖ column is TN + FP, and specificity is the fraction who landed in TN: = TN / (TN + FP) = 1 – FP rate. \"Value approaching 100% is desirable for ruling in disease and indicates a low false-positive rate.\" Same logic, same protection: a FIXED property — the disease-absent column is the same size in every clinic even when the disease-present column is not.",
            variant: "process",
          },
          {
            id: "ppv",
            label: "ACROSS THE TEST ⊕ ROW — Positive predictive value",
            sublabel:
              "Process — \"Probability that a person who has a positive test result actually has the disease\": everyone in the Test ⊕ row is TP + FP, and PPV is the fraction who truly have disease: PPV = TP / (TP + FP). The denominator is now the POSITIVE CALL, and its size depends on who was tested: \"PPV varies directly with pretest probability (baseline risk, such as prevalence of disease): high pretest probability → high PPV.\" In a low-prevalence room the same TP rides with a much bigger FP crowd, and PPV sinks.",
            variant: "process",
          },
          {
            id: "npv",
            label: "ACROSS THE TEST ⊖ ROW — Negative predictive value",
            sublabel:
              "Process — \"Probability that a person with a negative test result actually does not have the disease\": everyone in the Test ⊖ row is TN + FN, and NPV is the fraction truly free of disease: NPV = TN / (TN + FN). The printed mirror of PPV: \"NPV varies inversely with prevalence or pretest probability\" — scarce disease makes negative results almost uniformly true (high NPV); common disease fattens the FN share of the negative row and NPV falls.",
            variant: "process",
          },
          {
            id: "dial",
            label: "THE PREVALENCE DIAL — one knob, two opposite effects",
            sublabel:
              "Process — prevalence is itself a grid quantity: Prevalence = (TP + FN)/(TP + FN + FP + TN) — the Disease ⊕ column over everyone. Turning the dial (testing a sicker vs healthier population) resizes the two disease columns but never the test's behavior inside them: sensitivity and specificity hold, while the row denominators re-mix. Test efficiency = (TP + TN)/(TP + FN + FP + TN) — the correct calls (TP + TN) over everyone — also drifts with the dial because its numerator and denominator both move (KYP reading of the printed formulas).",
            variant: "process",
          },
          {
            id: "tier-out",
            label: "THE TWO-TIER RULE — fixed left, floating right, and the choreography that follows",
            sublabel:
              "Output — \"Sensitivity and specificity are fixed properties of a test. PPV and NPV vary depending on disease prevalence in population being tested.\" Fixed pair → test selection: \"High sensitivity test used for screening\" (miss nothing — SN-N-OUT), \"High specificity test used for confirmation after a positive screening test\" (label no one falsely — SP-P-IN). Floating pair → interpretation: the SAME positive result means different things in a screening clinic (low prevalence, low PPV) and a referral clinic (high pretest probability, high PPV) — the two-tier rule in one sentence.",
            variant: "output",
          },
        ],
        edges: [
          { from: "grid", to: "sensitivity", label: "Disease ⊕ column = TP + FN →" },
          { from: "grid", to: "specificity", label: "Disease ⊖ column = TN + FP →" },
          { from: "grid", to: "ppv", label: "Test ⊕ row = TP + FP →" },
          { from: "grid", to: "npv", label: "Test ⊖ row = TN + FN →" },
          { from: "dial", to: "ppv", label: "prevalence ↑ → PPV ↑ (directly)" },
          { from: "dial", to: "npv", label: "prevalence ↑ → NPV ↓ (inversely)" },
          { from: "dial", to: "sensitivity", label: "no effect — fixed" },
          { from: "dial", to: "specificity", label: "no effect — fixed" },
          { from: "sensitivity", to: "tier-out", label: "screens (SN-N-OUT)" },
          { from: "specificity", to: "tier-out", label: "confirms (SP-P-IN)" },
        ],
      },
    },
    {
      id: "cutoff-tradeoff-map",
      title:
        "Moving the cutoff: the two-overlapping-distributions figure and the printed price list of A, B, and C",
      context:
        "The printed cutoff-value figure (book 260 lower): Disease absent left, Disease present right, cutoffs A/B/C",
      flow: {
        nodes: [
          {
            id: "curves",
            label: "THE OVERLAP — two distributions of test results, one unavoidable debt",
            sublabel:
              "Input — the figure's plot: the Disease absent curve sits LEFT (blue), Disease present RIGHT (red/pink), y-axis \"Number of people\", x-axis \"Test results.\" Diseased and non-diseased people's results OVERLAP in the middle — that overlap is the figure's whole point: no cutoff can classify the overlap region correctly, so every cutoff pays either FP or FN (KYP reading of the printed geometry).",
            variant: "input",
          },
          {
            id: "cutoff-a",
            label: "CUTOFF A — \"100% sensitivity cutoff value\"",
            sublabel:
              "Process — the LEFTMOST cutoff: everything to its right is called positive. The entire Disease-present curve falls on the positive side — no diseased person is missed, so false negatives ≈ 0 and sensitivity approaches 100%; that is the printed legend line. The price: the Disease-absent curve's right side is swept into the positive call too — the FP region grows and specificity collapses. The figure's TN label sits left of A (the true-negative heartland) and FN would sit in the A–B stretch under the present curve's left tail.",
            variant: "process",
          },
          {
            id: "cutoff-b",
            label: "CUTOFF B — \"practical compromise between specificity and sensitivity\"",
            sublabel:
              "Process — the MIDDLE cutoff at the curves' crossing: FN (under the present curve's left tail, A–B stretch) and FP (under the absent curve's right tail, B–C stretch) are both kept small-ish; neither is zero. The printed legend names B the practical compromise — real tests live here, and the two rule lines measure the cost of leaving.",
            variant: "process",
          },
          {
            id: "cutoff-c",
            label: "CUTOFF C — \"100% specificity cutoff value\"",
            sublabel:
              "Process — the RIGHTMOST cutoff: everything to its left is called negative. The entire Disease-absent curve falls on the negative side — no non-diseased person is falsely labeled, so false positives ≈ 0 and specificity approaches 100% (the printed legend line). The price: the Disease-present curve's left tail is abandoned — FN grows and sensitivity collapses.",
            variant: "process",
          },
          {
            id: "lowering",
            label: "B → A — LOWERING the cutoff: ↑ Sensitivity ↑ NPV (↑ FP ↓ FN) ↓ Specificity ↓ PPV",
            sublabel:
              "Process — the printed first rule line: moving the cutoff from B toward A widens the positive call. More diseased people are caught (↑ Sensitivity, ↓ FN) and a negative result becomes more trustworthy (↑ NPV); but more non-diseased people are swept in (↑ FP), so the test gets noisier (↓ Specificity) and any given positive result is less believable (↓ PPV). Screening posture: cast the wide net, accept false alarms (KYP framing of the printed arrows).",
            variant: "process",
          },
          {
            id: "raising",
            label: "B → C — RAISING the cutoff: ↑ Specificity ↑ PPV (↑ FN ↓ FP) ↓ Sensitivity ↓ NPV",
            sublabel:
              "Process — the printed second rule line: moving the cutoff from B toward C narrows the positive call. Fewer non-diseased people are labeled (↑ Specificity, ↓ FP) and a positive result becomes more believable (↑ PPV); but diseased people in the abandoned tail are missed (↑ FN), so the test misses more disease (↓ Sensitivity) and a negative result guarantees less (↓ NPV). Confirmation posture: tight seal, accept missed cases — which is exactly why the page parks \"High specificity test used for confirmation AFTER a positive screening test.\"",
            variant: "process",
          },
          {
            id: "mirror",
            label: "THE ANEMIA MIRROR — when diagnosis rides on LOWER values",
            sublabel:
              "Output — the printed Note: \"In diseases where diagnosis is based on lower values (eg, anemia), the TP and TN are switched in the graph, ie, ↓ sensitivity and ↓ NPV, and vice-versa.\" Anemia is diagnosed by LOW hemoglobin, so its Disease-present curve sits on the LEFT of the value axis — the figure's left-to-right geography mirrors, TP and TN swap sides, and the A/B/C cutoff logic runs vice-versa (KYP reading of the printed note: before applying the figure to any disease, ask which DIRECTION counts as positive).",
            variant: "output",
          },
        ],
        edges: [
          { from: "curves", to: "cutoff-a", label: "cutoff at the absent curve's right shoulder →" },
          { from: "curves", to: "cutoff-b", label: "cutoff at the crossing →" },
          { from: "curves", to: "cutoff-c", label: "cutoff at the present curve's left shoulder →" },
          { from: "cutoff-b", to: "lowering", label: "move toward A →" },
          { from: "cutoff-b", to: "raising", label: "move toward C →" },
          { from: "lowering", to: "mirror", label: "wide net (screening)" },
          { from: "raising", to: "mirror", label: "tight seal (confirmation)" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "diagnostic-test-map",
      title:
        "The Test × Disease grid, the six formulas, and the cutoff trade-off (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 260 lower's blocks. TOP LEFT — the 2×2 grid exactly as printed (rows Test ⊕/⊖, columns Disease ⊕/⊖, cells TP/FP/FN/TN color-coded pink for the positive-test row and blue for the negative-test row) with the four formula spokes reading off it: Sensitivity down the Disease ⊕ column, Specificity down the Disease ⊖ column, PPV across the Test ⊕ row, NPV across the Test ⊖ row — plus Prevalence (the Disease ⊕ column over everyone) and Test efficiency (TP + TN over everyone). TOP RIGHT — the fixed-vs-floating tier card (\"Sensitivity and specificity are fixed properties of a test. PPV and NPV vary depending on disease prevalence in population being tested.\"). MIDDLE — the cutoff-value figure redrawn: Disease absent curve left, Disease present curve right, y-axis \"Number of people\", x-axis \"Test results\" with dashed cutoffs A/B/C, TN and TP inside their curves, FN and FP in the overlap, the A/B/C legend, and the two printed rule lines with all fourteen arrows. BOTTOM — the SN-N-OUT / SP-P-IN screening-vs-confirmation pair, First Aid's own, attributed.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 282 — the 2×2 grid (pink TP/FP and light-blue FN/TN cells, circled ⊕/⊖ axis glyphs, the PPV/NPV boxes at its right, the formula strip beneath with Prevalence as a stacked fraction — VLM-read at 120dpi + 200dpi crops, staging-pubh8/vlm-census.txt) and the pure-vector cutoff figure. The visual is an ORIGINAL KYP ADAPTATION + REDRAW: the grid is re-laid-out with formula spokes (the layout is KYP's, every printed label and formula preserved) and the curves are rebuilt as KYP vector art (two smooth overlapping distributions with the printed cutoffs, quadrant labels, legend, and rule bands — including the horizontal B → A / B → C letter-pair arrows and the ↑/↓ trade-off arrows exactly as pinned). The figure's text extracts HEAVILY interleaved in the raw layer — eight standalone arrow glyphs mapping to the '↑' codepoint regardless of true direction — so the geometry here is pinned by pdftotext -bbox coordinates + the VLM crop pass, and every direction shown matches the print.",
    },
    {
      kind: "table",
      title:
        "Book 260 (lower) — the printed Test × Disease 2×2 and formula strip, carried verbatim",
      intro:
        "The page's second block: the 2×2 grid with rows Test ⊕ / Test ⊖ and columns Disease ⊕ / Disease ⊖ (the print uses circled plus/minus glyphs on BOTH axes — the two ⊕ glyphs do not extract in the text layer and the two ⊖ extract as '–'; orientation pinned by pdftotext -bbox + the VLM crop pass), the PPV and NPV formula boxes printed at the grid's right, and the formula strip printed beneath — with Prevalence as a stacked fraction, TP + FN over (TP + FN + FP + TN), which the raw layer interleaves across three separate lines.",
      columns: [
        "Test × Disease (as printed)",
        "Disease ⊕ (disease present)",
        "Disease ⊖ (disease absent)",
      ],
      rows: [
        [
          "Test ⊕ (test positive)",
          "TP (true positive)",
          "FP (false positive)",
        ],
        [
          "Test ⊖ (test negative)",
          "FN (false negative)",
          "TN (true negative)",
        ],
        [
          "Formula strip — Sensitivity",
          "= TP/(TP + FN)",
          "reads down the Disease ⊕ column",
        ],
        [
          "Formula strip — Specificity",
          "= TN/(TN + FP)",
          "reads down the Disease ⊖ column",
        ],
        [
          "Formula strip — Prevalence (stacked fraction)",
          "TP + FN (numerator, printed above the bar)",
          "(TP + FN + FP + TN) (denominator, printed below)",
        ],
        [
          "Boxes at the grid's right — PPV / NPV",
          "PPV = TP/(TP + FP)",
          "NPV = TN/(TN + FN)",
        ],
      ],
      caption:
        "Verbatim carry, documented: the grid prints with the rotated \"Test\" row-axis label at left and the \"Disease\" column header on top, both axes carrying circled ⊕/⊖ glyphs (VLM-confirmed); the cells print color-shaded — pink for the Test ⊕ row's TP and FP, light blue for the Test ⊖ row's FN and TN. The raw text layer extracts the grid as \"Test / Disease / – / – / TP / FP / FN / TN\" (both ⊕ glyphs dropped, both ⊖ rendered as en-dashes) and merges the formula strip's three bottom formulas onto one line — \"= TP/(TP + FN) = TN/(TN + FP) (TP + FN + FP + TN)\" — with the Prevalence numerator \"TP + FN\" on its own line above; the table re-sets each formula in its printed position. The stage-setter's companion formula prints above the grid: Test efficiency = (TP + TN)/(TP + FN + FP + TN).",
    },
    {
      kind: "table",
      title:
        "Book 260 (lower) — the four printed property rows, carried verbatim (every printed word)",
      intro:
        "The page's third block: four rows — Sensitivity (true-positive rate), Specificity (true-negative rate), Positive predictive value, Negative predictive value — each with its printed definition, its \"Value approaching 100%...\" line where printed, its formulas, and its rule lines. First Aid's OWN mnemonics print in RED in the right column (SN-N-OUT in the Sensitivity row, SP-P-IN in the Specificity row) — carried here verbatim and attributed. The row labels hyphenate across line wraps in print (\"Sensitivity (true-|positive rate)\"); the raw layer merges these to \"(truepositive rate)\" / \"(truenegative rate)\" and — a content-stream quirk — extracts the Sensitivity row header only AFTER the entire cutoff figure (raw line 162), while the Specificity row header extracts in place.",
      columns: [
        "PROPERTY (printed row label)",
        "PRINTED DEFINITION",
        "FORMULAS · PRINTED RULE LINES (mnemonics in red in the print)",
      ],
      rows: [
        [
          "Sensitivity (true-positive rate)",
          "Proportion of all people with disease who test positive, or the ability of a test to correctly identify those with the disease. Value approaching 100% is desirable for ruling out disease and indicates a low false-negative rate.",
          "= TP / (TP + FN) = 1 – FN rate. SN-N-OUT = highly SeNsitive test, when Negative, rules OUT disease. High sensitivity test used for screening.",
        ],
        [
          "Specificity (true-negative rate)",
          "Proportion of all people without disease who test negative, or the ability of a test to correctly identify those without the disease. Value approaching 100% is desirable for ruling in disease and indicates a low false-positive rate.",
          "= TN / (TN + FP) = 1 – FP rate. SP-P-IN = highly SPecific test, when Positive, rules IN disease. High specificity test used for confirmation after a positive screening test.",
        ],
        [
          "Positive predictive value",
          "Probability that a person who has a positive test result actually has the disease.",
          "PPV = TP / (TP + FP). PPV varies directly with pretest probability (baseline risk, such as prevalence of disease): high pretest probability → high PPV.",
        ],
        [
          "Negative predictive value",
          "Probability that a person with a negative test result actually does not have the disease.",
          "NPV = TN / (TN + FN). NPV varies inversely with prevalence or pretest probability.",
        ],
      ],
      caption:
        "Verbatim carry, documented: all four rows in printed order, every cell word-for-word (the en-dash prints as the minus in \"= 1 – FN rate\" / \"= 1 – FP rate\"; the arrow in \"high pretest probability → high PPV\" extracts with a C1 control byte before it). First Aid prints SN-N-OUT and SP-P-IN in RED (VLM-confirmed at 120dpi + 200dpi crops, staging-pubh8/vlm-census.txt) with the embedded capitals SeNsitive / SPecific, Negative / Positive, OUT / IN — these are the source's own hooks, reproduced as printed and ATTRIBUTED, not KYP's. The screening and confirmation lines print as the rows' closing rules and are the exam's favorite pair.",
    },
    {
      kind: "list",
      title:
        "The decoder — what each cell and each quantity answers, in plain words (KYP's reading)",
      intro:
        "The printed page gives formulas; this layer gives the one-sentence question each quantity answers — the fastest route from a vignette's numbers to the right option.",
      items: [
        {
          lead: "TP · FP · FN · TN — the four fates",
          text: "TP (true positive): diseased, and the test says so. FP (false positive): healthy, but the test alarms — the false-alarm cell. FN (false negative): diseased, but the test reassures — the missed-case cell, the one that kills screening programs. TN (true negative): healthy, and the test agrees. Every quantity on the page is a ratio built from these four fates (KYP framing of the printed grid).",
        },
        {
          lead: "SENSITIVITY — \"of the people who HAVE it, how many does the test catch?\"",
          text: "Proportion of all people with disease who test positive: = TP/(TP + FN) = 1 – FN rate. High sensitivity → low false-negative rate → a NEGATIVE result is trustworthy (SN-N-OUT: a highly SeNsitive test, when Negative, rules OUT disease). Exam fingerprint: questions about missing no case, screening the healthy, or what a negative result can exclude.",
        },
        {
          lead: "SPECIFICITY — \"of the people who DON'T have it, how many does the test clear?\"",
          text: "Proportion of all people without disease who test negative: = TN/(TN + FP) = 1 – FP rate. High specificity → low false-positive rate → a POSITIVE result is trustworthy (SP-P-IN: a highly SPecific test, when Positive, rules IN disease). Exam fingerprint: questions about confirming a screen, avoiding false labels, or what a positive result can establish.",
        },
        {
          lead: "PPV — \"if the test says POSITIVE, believe it how much?\"",
          text: "Probability that a person with a positive test result actually has the disease: PPV = TP/(TP + FP). It varies DIRECTLY with pretest probability (baseline risk, such as prevalence): high pretest probability → high PPV. Exam fingerprint: the same test performs differently in a screening clinic vs a referral clinic — the positive result's meaning moves with the population.",
        },
        {
          lead: "NPV — \"if the test says NEGATIVE, relax how much?\"",
          text: "Probability that a person with a negative test result actually does not have the disease: NPV = TN/(TN + FN). It varies INVERSELY with prevalence or pretest probability. Exam fingerprint: rare disease → near-perfect NPV (almost every negative is a true negative); common disease → even negatives carry risk.",
        },
        {
          lead: "PREVALENCE & TEST EFFICIENCY — the two whole-grid reads",
          text: "Prevalence = (TP + FN)/(TP + FN + FP + TN) — the Disease ⊕ column over everyone: the same number that sets the stage-setter's \"disease prevalence in population being tested.\" Test efficiency = (TP + TN)/(TP + FN + FP + TN) — the correct calls (TP + TN) over everyone tested: the page's own sixth quantity, the fraction of all results the test gets right (KYP note: efficiency is prevalence-sensitive like the predictive values, not fixed like sensitivity and specificity).",
        },
      ],
    },
    {
      kind: "steps",
      title:
        "Computing any quantity from a vignette — the five-step protocol (KYP, with a worked pair of grids)",
      intro:
        "The exam hands you a population and a test; you hand back a number. The protocol, worked twice on the SAME test (90% sensitivity, 95% specificity) at two prevalences — 2% and 20% — to make the page's first sentence visible in arithmetic. All numbers in this block are KYP's.",
      steps: [
        {
          label: "STEP 1 — SIZE THE POPULATION AND THE DISEASE ⊕ COLUMN",
          detail:
            "Pick a convenient total (e.g., 1,000) and multiply by prevalence. At 2%: 20 people with disease, 980 without. At 20%: 200 with disease, 800 without. The Disease ⊕ column (TP + FN) is now 20 vs 200 — the column the fixed pair reads.",
        },
        {
          label: "STEP 2 — FILL THE DISEASE ⊕ COLUMN WITH SENSITIVITY",
          detail:
            "Sensitivity = TP/(TP + FN): TP = sensitivity × (TP + FN), and FN is the remainder. At 90% sensitivity: 2% prevalence → TP = 18, FN = 2; 20% prevalence → TP = 180, FN = 20. The fixed pair does not know which room it is in — the split of the column is identical.",
        },
        {
          label: "STEP 3 — FILL THE DISEASE ⊖ COLUMN WITH SPECIFICITY",
          detail:
            "Specificity = TN/(TN + FP): TN = specificity × (TN + FP), FP the remainder. At 95% specificity: 2% prevalence → TN = 931, FP = 49; 20% prevalence → TN = 760, FP = 40. Again identical behavior — specificity is a fixed property of the test.",
        },
        {
          label: "STEP 4 — READ THE PREDICTIVE VALUES ACROSS THE TEST ROWS",
          detail:
            "PPV = TP/(TP + FP): 2% prevalence → 18/67 ≈ 27%; 20% prevalence → 180/220 ≈ 82%. NPV = TN/(TN + FN): 2% prevalence → 931/933 ≈ 99.8%; 20% prevalence → 760/780 ≈ 97.4%. Same test, same sensitivity and specificity — PPV tripled and NPV slipped, exactly as printed: PPV varies directly with pretest probability; NPV varies inversely.",
        },
        {
          label: "STEP 5 — CHECK THE CUTOFF QUESTION BEFORE ANSWERING",
          detail:
            "If the stem moved the cutoff instead of the population, apply the printed price list: LOWERING (B → A): ↑ Sensitivity ↑ NPV (↑ FP ↓ FN) ↓ Specificity ↓ PPV. RAISING (B → C): ↑ Specificity ↑ PPV (↑ FN ↓ FP) ↓ Sensitivity ↓ NPV. And if the disease is diagnosed by LOWER values (eg, anemia), remember the printed Note — the graph mirrors, TP and TN switch, and the rules run vice-versa.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "The fixed pair vs the floating pair — the page's first sentence as a study table",
      intro:
        "The stage-setter sorts the six quantities into two families; every distinguishing feature follows from which axis of the grid each family reads.",
      columns: [
        "Sensitivity & Specificity — the FIXED pair (test properties)",
        "PPV & NPV — the FLOATING pair (population-dependent)",
      ],
      rows: [
        {
          label: "What the page prints",
          a: "\"Sensitivity and specificity are fixed properties of a test.\"",
          b: "\"PPV and NPV vary depending on disease prevalence in population being tested.\"",
        },
        {
          label: "Grid axis read",
          a: "DOWN the disease columns: Sensitivity = TP/(TP + FN) (Disease ⊕); Specificity = TN/(TN + FP) (Disease ⊖)",
          b: "ACROSS the test rows: PPV = TP/(TP + FP) (Test ⊕); NPV = TN/(TN + FN) (Test ⊖)",
        },
        {
          label: "What each answers",
          a: "How the test BEHAVES among the diseased (sensitivity) and among the healthy (specificity)",
          b: "What a RESULT MEANS: probability that a person with a positive test actually has the disease (PPV); probability that a person with a negative test actually does not (NPV)",
        },
        {
          label: "Prevalence dependence",
          a: "None — the column fractions hold in every population (fixed properties)",
          b: "PPV varies DIRECTLY with pretest probability (baseline risk, such as prevalence): high pretest probability → high PPV; NPV varies INVERSELY with prevalence or pretest probability",
        },
        {
          label: "Companion rule line",
          a: "\"Value approaching 100% is desirable for ruling out disease\" (sensitivity, low false-negative rate); \"desirable for ruling in disease\" (specificity, low false-positive rate)",
          b: "No 100% rule line — instead the variation lines: direct for PPV, inverse for NPV",
        },
        {
          label: "Clinical deployment",
          a: "\"High sensitivity test used for screening\"; \"High specificity test used for confirmation after a positive screening test\"",
          b: "Interpreted in context: the same positive result is more believable in a high-pretest-probability patient than in a screened population",
        },
        {
          label: "Mnemonic anchor",
          a: "SN-N-OUT (negative result on a highly SeNsitive test rules OUT disease); SP-P-IN (positive result on a highly SPecific test rules IN disease) — First Aid's own, printed in red",
          b: "KYP: \"DISEASE COLUMNS, TEST ROWS\" — the fixed pair owns the columns, the floating pair owns the rows",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — three stem shapes and one direction trap",
      body:
        "SHAPE 1 — COMPUTE THE QUANTITY: the stem fills a 2×2 (\"Of 200 diseased, 180 test positive; of 800 healthy, 40 test positive\") and asks for a value — name the denominator first (whose row or column?), then divide: sensitivity 180/200 = 90%; PPV 180/220 ≈ 82%. SHAPE 2 — THE PREVALENCE PIVOT: the same test is deployed in two populations (screening clinic vs referral center; country A vs country B) and the stem asks what changes — sensitivity and specificity never do (fixed properties); PPV tracks the sicker population UP (varies directly) and NPV DOWN (varies inversely). SHAPE 3 — THE CUTOFF MOVE: the lab lowers (or raises) the reference cutoff — recite the printed price list: lowering → ↑ Sensitivity ↑ NPV (↑ FP ↓ FN) ↓ Specificity ↓ PPV; raising → ↑ Specificity ↑ PPV (↑ FN ↓ FP) ↓ Sensitivity ↓ NPV; anchor the extremes with the legend (A = 100% sensitivity cutoff value; C = 100% specificity cutoff value; B = the practical compromise). THE DIRECTION TRAP: a disease diagnosed by LOWER values (anemia is the printed example) mirrors the figure — TP and TN switch in the graph, and the rules run vice-versa; before applying any cutoff logic, ask which way is \"positive\" on the value axis.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own red mnemonics — printed in the rows, carried attributed",
      body:
        "The page prints TWO mnemonics of its own, in RED in the right column (VLM-confirmed at 120dpi and 200dpi crops, staging-pubh8/vlm-census.txt) — these are the source's hooks, carried VERBATIM and ATTRIBUTED, not KYP's: (1) \"SN-N-OUT = highly SeNsitive test, when Negative, rules OUT disease\" — the Sensitivity row: sensitive tests keep false negatives rare, so their NEGATIVE results are the reassuring ones; pair it with the row's own deployment line, \"High sensitivity test used for screening.\" (2) \"SP-P-IN = highly SPecific test, when Positive, rules IN disease\" — the Specificity row: specific tests keep false positives rare, so their POSITIVE results are the believable ones; pair it with \"High specificity test used for confirmation after a positive screening test.\" The two KYP originals in the Memory section below are marked as such: \"DISEASE COLUMNS, TEST ROWS\" (which grid axis each formula family reads) and \"LOWER THE BAR, WIDER THE NET\" (the cutoff trade-off's screening posture).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The clinical choreography — screen, then confirm; and read every result against the room",
      intro:
        "The page's rule lines are not just exam facts; they are the operating logic of every real testing program. This layer connects the printed rules to bedside use (clinical framing beyond the printed page is KYP context, flagged).",
      items: [
        {
          lead: "THE SCREENING → CONFIRMATION PIPELINE (the page's own choreography)",
          text:
            "Step 1: screen the broad, low-prevalence population with a HIGH-SENSITIVITY test — \"High sensitivity test used for screening\" — because the program's failure mode is the missed case (FN), and a negative screen rules disease out (SN-N-OUT). Step 2: confirm every positive screen with a HIGH-SPECIFICITY test — \"High specificity test used for confirmation after a positive screening test\" — because now the failure mode is the false label (FP), and a positive confirm rules disease in (SP-P-IN). The classic real-world shape is the two-step serology (screening immunoassay, then confirmatory western blot) — the example is KYP context, not printed on this page.",
        },
        {
          lead: "THE PREVALENCE DIAL AT THE BEDSIDE — same test, different room, different meaning",
          text:
            "A positive result in a screened asymptomatic population (low pretest probability) carries a low PPV — most positives are FP; the same positive result in a symptomatic referral patient (high pretest probability) carries a high PPV. That is the printed \"PPV varies directly with pretest probability (baseline risk, such as prevalence of disease)\" wearing clinical clothes — and it is why test interpretation always begins with \"what was this patient's pretest probability?\" (KYP framing).",
        },
        {
          lead: "WHEN THE MISSED CASE IS INTOLERABLE — choosing cutoff A's posture",
          text:
            "Screening for a treatable, contagious, or lethal disease (the printed logic of \"Value approaching 100% is desirable for ruling out disease and indicates a low false-negative rate\") pushes the cutoff down toward A: accept the FP flood (↓ Specificity ↓ PPV) to keep FN near zero (↑ Sensitivity ↑ NPV). The confirmatory step then cleans up the false alarms — the two postures are one pipeline (KYP synthesis of the printed rows and the figure's rule lines).",
        },
        {
          lead: "THE ANEMIA MIRROR — check which way is 'positive' before you read any graph",
          text:
            "The printed Note: \"In diseases where diagnosis is based on lower values (eg, anemia), the TP and TN are switched in the graph, ie, ↓ sensitivity and ↓ NPV, and vice-versa.\" Anemia is diagnosed when hemoglobin falls BELOW a threshold — the disease-present distribution sits at the LOW end of the value axis, mirroring the printed figure (which draws disease-present on the right, the higher-values side). KYP reading: for any lab test, first ask which DIRECTION counts as abnormal, then apply the A/B/C and lowering/raising logic in that direction.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A screening program enrolls 10,000 asymptomatic adults in a country where disease X has 2% prevalence. The screening assay has 90% sensitivity and 95% specificity. The program directors ask what fraction of POSITIVE screens will truly have disease X.",
        discriminator:
          "A PPV computation — the Test ⊕ row (TP/(TP + FP)), in a LOW-prevalence population",
        concept: "Positive predictive value and its prevalence dependence",
        answer:
          "Diseased: 200 (TP = 180, FN = 20 at 90% sensitivity); non-diseased: 9,800 (TN = 9,310, FP = 490 at 95% specificity). PPV = 180/(180 + 490) = 180/670 ≈ 27% — most positive screens are false positives, because \"PPV varies directly with pretest probability\": in a low-prevalence population the FP crowd dwarfs TP even for an excellent test.",
      },
      {
        stem: "The same assay (90% sensitivity, 95% specificity) is then used in a referral clinic where 20% of evaluated patients have disease X. A resident asserts that the test's sensitivity and specificity will be higher in this sicker population.",
        discriminator:
          "The fixed-vs-floating distinction — the page's own first sentence",
        concept: "Fixed test properties vs prevalence-dependent predictive values",
        answer:
          "Wrong assertion: \"Sensitivity and specificity are fixed properties of a test\" — they are identical in both settings. What changes are the row fractions: PPV rises to 180/220 ≈ 82% (varies directly with pretest probability) and NPV slips from ≈ 99.8% to 760/780 ≈ 97% (varies inversely with prevalence or pretest probability).",
      },
      {
        stem: "An emergency department evaluates a child for a disease with a highly sensitive screening test; the result is negative. The attending asks whether disease can be excluded, and the options include the mnemonic that answers the question.",
        discriminator:
          "A negative result on a highly SeNsitive test — the ruling-OUT rule",
        concept: "SN-N-OUT and the screening use of high-sensitivity tests",
        answer:
          "SN-N-OUT: a highly SeNsitive test, when Negative, rules OUT disease (First Aid's own mnemonic, printed in red in the Sensitivity row). High sensitivity means a low false-negative rate — \"Value approaching 100% is desirable for ruling out disease\" — and that is why \"High sensitivity test used for screening.\"",
      },
      {
        stem: "A laboratory lowers the positivity cutoff of an assay so that more early cases will be caught. The medical director asks what will happen to false positives, false negatives, specificity, and PPV.",
        discriminator:
          "The printed lowering rule — B → A, the wide-net move",
        concept: "The cutoff trade-off (lowering the cutoff value)",
        answer:
          "Lowering the cutoff value: ↑ Sensitivity ↑ NPV (↑ FP ↓ FN) ↓ Specificity ↓ PPV — the printed rule line. The wider positive call catches more diseased people (fewer missed cases) but sweeps in more non-diseased people, so the test gets noisier and each positive result is less believable. In the figure's terms, the cutoff moves from B toward A, the \"100% sensitivity cutoff value.\"",
      },
    ],
    traps: [
      {
        a: "Sensitivity = TP/(TP + FN) — reads the DISEASE ⊕ column",
        b: "PPV = TP/(TP + FP) — reads the TEST ⊕ row",
        whyConfused:
          "Both formulas have TP in the numerator and both \"feel\" like the test's hit rate; a stem that hands you TP and one other cell can route to either",
        keyDifference:
          "The DENOMINATOR names the family: sensitivity asks \"of the people WITH disease, how many test positive?\" (fixed property); PPV asks \"of the people testing POSITIVE, how many have the disease?\" (floats with prevalence)",
        clue:
          "Find the denominator's population in the stem — everyone with the disease (column) → sensitivity; everyone testing positive (row) → PPV. KYP: DISEASE COLUMNS, TEST ROWS.",
      },
      {
        a: "Sensitivity and specificity — fixed properties of a test",
        b: "PPV and NPV — vary with disease prevalence in the population being tested",
        whyConfused:
          "All four are \"how good is the test\" numbers, usually printed together; stems love to ask which changes when the same test moves to a different population",
        keyDifference:
          "The fixed pair reads disease columns (unaffected by prevalence); the floating pair reads test rows — PPV varies DIRECTLY with pretest probability (high pretest probability → high PPV), NPV INVERSELY",
        clue:
          "\"Same test, different population\" → only the predictive values move. Any option changing sensitivity or specificity with prevalence is a distractor.",
      },
      {
        a: "SN-N-OUT — highly SeNsitive test, when Negative, rules OUT",
        b: "SP-P-IN — highly SPecific test, when Positive, rules IN",
        whyConfused:
          "Two red mnemonics with mirrored grammar (SeNsitive/Negative/OUT vs SPecific/Positive/IN); swapping them reverses the answer",
        keyDifference:
          "Sensitive tests are trusted for their NEGATIVE results (few false negatives → screening); specific tests are trusted for their POSITIVE results (few false positives → confirmation after a positive screening test)",
        clue:
          "Match the result's polarity to the rule's polarity: the question shows a NEGATIVE result → reach for the sensitivity rule; a POSITIVE result → the specificity rule.",
      },
      {
        a: "Specificity = TN/(TN + FP) = 1 – FP rate",
        b: "NPV = TN/(TN + FN)",
        whyConfused:
          "Both have TN in the numerator and both \"clear\" people; the denominators (healthy population vs negative-result population) differ by one cell",
        keyDifference:
          "Specificity: of everyone WITHOUT disease, the fraction the test correctly calls negative (fixed); NPV: of everyone the test calls NEGATIVE, the fraction truly without disease (floats inversely with prevalence)",
        clue:
          "The stem's denominator population decides: \"of the healthy...\" → specificity; \"of those who tested negative...\" → NPV.",
      },
    ],
    pivots: [
      {
        lookAlike: "A list of six quantities (sensitivity, specificity, PPV, NPV, prevalence, test efficiency) with the question \"which does NOT change when the test is moved to a population with higher prevalence?\"",
        differentiator:
          "Only the two column-fractions are fixed; everything assembled from rows or the whole grid moves",
        correctPath:
          "Sensitivity and specificity are fixed properties of a test — they survive any population change. PPV varies directly with pretest probability, NPV inversely; prevalence itself is the population's number; and test efficiency = (TP + TN)/(TP + FN + FP + TN) re-mixes with prevalence too (KYP note — the page prints efficiency without a fixed/floating label).",
      },
      {
        lookAlike: "Four look-alike formulas, one blank: \"___ = 1 – FN rate\"",
        differentiator:
          "The complement relationships name the false-call rates",
        correctPath:
          "= 1 – FN rate is sensitivity (= TP/(TP + FN)); = 1 – FP rate is specificity (= TN/(TN + FP)). The complement trick: each fixed property is one minus its false-call rate, because the disease column is either TP or FN (and the healthy column either TN or FP).",
      },
      {
        lookAlike: "\"The cutoff is lowered\" vs \"the cutoff is raised\" — two mirrored arrow sets",
        differentiator:
          "Follow the POSITIVE CALL: does it widen or narrow?",
        correctPath:
          "Widening (B → A): ↑ Sensitivity ↑ NPV (↑ FP ↓ FN) ↓ Specificity ↓ PPV. Narrowing (B → C): ↑ Specificity ↑ PPV (↑ FN ↓ FP) ↓ Sensitivity ↓ NPV. Anchor at the legend: A = 100% sensitivity cutoff value, C = 100% specificity cutoff value, B = the practical compromise between specificity and sensitivity. For diseases diagnosed by lower values (anemia), the graph mirrors — TP and TN switch, and the rules run vice-versa.",
      },
    ],
    miniCase: {
      vignette:
        "A public-health ministry plans a national screening program for a chronic infection with 0.5% prevalence in the general population. A rapid assay with 97% sensitivity and 98% specificity is proposed for direct one-step screening without confirmation. At a planning meeting, a medical student argues the program is sound because \"the assay is 97% sensitive and 98% specific, so 97–98% of results will be correct in everyone tested.\" The ministry's epidemiologist asks the student to reconsider what a positive result will actually mean in this population.",
      question:
        "Which of the following best describes the assay's expected behavior in this screening population?",
      options: [
        {
          label: "A",
          text:
            "Sensitivity and specificity will remain 97% and 98%, but most positive screens will be false positives, because PPV falls as prevalence falls",
          correct: true,
          why:
            "CORRECT — \"Sensitivity and specificity are fixed properties of a test. PPV and NPV vary depending on disease prevalence in population being tested.\" Per 10,000 screened: 50 diseased (TP ≈ 48–49, FN ≈ 1–2 at 97% sensitivity) and 9,950 non-diseased (FP ≈ 199 at 98% specificity) — PPV ≈ 49/248 ≈ 20%: roughly four of five positive screens are false alarms, even though the test itself is excellent. PPV varies directly with pretest probability, so screening a 0.5%-prevalence population predictably produces a low PPV — the reason confirmation with a high-specificity test (\"High specificity test used for confirmation after a positive screening test\") follows every positive screen.",
        },
        {
          label: "B",
          text:
            "The assay's sensitivity will fall below 97% in this population because the disease is rare",
          why:
            "TEMPTING but wrong — it conflates the fixed pair with the floating pair. Sensitivity = TP/(TP + FN) reads the disease column only; the disease column shrinks (50 people) but the fraction of it the assay catches is unchanged — sensitivity is a fixed property of the test and does not vary with prevalence. What falls is PPV, the test-row fraction.",
        },
        {
          label: "C",
          text:
            "The negative predictive value will be lower in this population than in a referral clinic, because NPV varies directly with prevalence",
          why:
            "WRONG on both counts — NPV varies INVERSELY with prevalence or pretest probability, so the scarce-disease screening population gives a very HIGH NPV (almost every negative is a true negative: TN ≈ 9,751 of 9,753 negatives). The direct-variation property belongs to PPV; the option swaps the two rules.",
        },
        {
          label: "D",
          text:
            "The assay should be used as a one-step CONFIRMATORY test, because its high specificity means a positive result rules disease in",
          why:
            "TEMPTING but wrong in context — SP-P-IN is real (a highly SPecific test, when Positive, rules IN disease), but the deployment line prints \"High specificity test used for confirmation AFTER a positive screening test\": confirmation presupposes a preceding screen in a pipeline. Using one assay for both roles forfeits the pipeline's arithmetic — the low PPV of the screening step is exactly what the confirmatory step exists to repair.",
        },
        {
          label: "E",
          text:
            "Test efficiency — (TP + TN)/(TP + FN + FP + TN) — will equal 97.5% because it is a fixed property of the assay",
          why:
            "WRONG — test efficiency is a whole-grid fraction, not a fixed property: with TP ≈ 49, TN ≈ 9,751, FP ≈ 199, FN ≈ 1, efficiency ≈ 98% here, and it drifts as prevalence re-mixes the grid. Only the two column fractions (sensitivity, specificity) are fixed; efficiency and the predictive values are population-dependent (KYP reading of the printed formulas).",
        },
      ],
      reasoning:
        "The question tests the page's opening sentence — the fixed/floating split. The student's error is treating all the assay's numbers as population-independent. The fixed pair (sensitivity 97%, specificity 98%) indeed carries over unchanged; but the positive predictive value is a test-ROW fraction whose denominator (TP + FP) is assembled by the population screened. At 0.5% prevalence, FP (≈199 per 10,000) overwhelms TP (≈49), so PPV ≈ 20% — most positive screens are false positives, and \"high pretest probability → high PPV\" runs exactly in reverse. Option B mislocates the prevalence effect on sensitivity (a column fraction — fixed); option C swaps NPV's inverse variation for direct; option D misapplies SP-P-IN by skipping the screening step it presupposes; option E mislabels test efficiency — a whole-grid fraction that re-mixes with prevalence — as fixed. The epidemiologist's remedy is the printed pipeline: screen with the sensitive test, then confirm positives with a specific one.",
    },
  },
  mnemonics: [
    {
      code: "SN-N-OUT",
      meaning:
        "FIRST AID'S OWN mnemonic, printed in RED in the Sensitivity row (carried verbatim, attributed): a highly SeNsitive test, when Negative, rules OUT disease — sensitive tests keep the false-negative rate low (sensitivity = 1 – FN rate), so their negative results are the trustworthy ones.",
      memorizes:
        "What a NEGATIVE result on a high-sensitivity test can do (exclude disease), and why sensitivity pairs with ruling out",
      whenToUse:
        "Any stem showing a negative result on a test described as highly sensitive, or asking which test property a screening program needs; pairs with the printed deployment line \"High sensitivity test used for screening\" and \"Value approaching 100% is desirable for ruling out disease and indicates a low false-negative rate.\"",
      clinical:
        "Screening programs live on this rule (KYP context): the screen's job is to miss nothing, so negative screens exit the pipeline and positive screens proceed to confirmation — the classic two-step serology pattern.",
    },
    {
      code: "SP-P-IN",
      meaning:
        "FIRST AID'S OWN mnemonic, printed in RED in the Specificity row (carried verbatim, attributed): a highly SPecific test, when Positive, rules IN disease — specific tests keep the false-positive rate low (specificity = 1 – FP rate), so their positive results are the trustworthy ones.",
      memorizes:
        "What a POSITIVE result on a high-specificity test can do (establish disease), and why specificity pairs with ruling in",
      whenToUse:
        "Any stem showing a positive result on a test described as highly specific, or asking what kind of test should follow a positive screen; pairs with the printed deployment line \"High specificity test used for confirmation after a positive screening test\" and \"Value approaching 100% is desirable for ruling in disease and indicates a low false-positive rate.\"",
      clinical:
        "Confirmation pathways live on this rule (KYP context): after a sensitive screen flags a patient, the specific confirmatory test is what licenses the diagnosis — sparing the patient the false label the screen's low PPV would have imposed.",
    },
    {
      code: "DISEASE COLUMNS, TEST ROWS",
      meaning:
        "A KYP ORIGINAL — the denominator-axis rule: the fixed pair reads DISEASE COLUMNS (Sensitivity = TP/(TP + FN) down the Disease ⊕ column; Specificity = TN/(TN + FP) down the Disease ⊖ column), and the floating pair reads TEST ROWS (PPV = TP/(TP + FP) across the Test ⊕ row; NPV = TN/(TN + FN) across the Test ⊖ row). Prevalence = the Disease ⊕ column over everyone; test efficiency = TP + TN over everyone.",
      memorizes:
        "Which grid axis each formula family reads — and therefore which quantities prevalence can touch (rows and whole-grid fractions) and which it cannot (columns)",
      whenToUse:
        "Any compute-the-quantity stem (find the denominator's population in the vignette, then read down or across), and any fixed-vs-floating question (\"which value changes in a different population?\")",
      clinical:
        "At the bedside the rule becomes a habit (KYP context): before quoting any test statistic, ask \"whose denominator is this?\" — a column (the lab's behavior) or a row (what the result means in THIS room).",
    },
    {
      code: "LOWER THE BAR, WIDER THE NET",
      meaning:
        "A KYP ORIGINAL — the cutoff trade-off in one picture: LOWER the cutoff (B → A) and the positive call widens like a net — ↑ Sensitivity ↑ NPV (↑ FP ↓ FN) but ↓ Specificity ↓ PPV; RAISE the bar (B → C) and the net tightens — ↑ Specificity ↑ PPV (↑ FN ↓ FP) but ↓ Sensitivity ↓ NPV.",
      memorizes:
        "Both printed rule lines and their direction logic — widening the positive call helps the negative side (nothing missed) and hurts the positive side (more false alarms), and vice-versa",
      whenToUse:
        "Any stem that moves a reference threshold (\"the lab lowers the cutoff...\"), and any question about why no single cutoff maximizes sensitivity AND specificity (the two distributions overlap; A = 100% sensitivity cutoff value, C = 100% specificity cutoff value, B = the practical compromise)",
      clinical:
        "The choice of posture is clinical (KYP context): screen where the missed case is intolerable (lower the bar), confirm where the false label is intolerable (raise the bar) — and for diseases defined by LOWER values (anemia, the printed example), the figure mirrors: TP and TN switch in the graph, and the rules run vice-versa.",
    },
  ],
  rapidReview: {
    s30: [
      "Sensitivity and specificity are FIXED properties of a test; PPV and NPV vary depending on disease prevalence in population being tested",
      "Sensitivity (true-positive rate) = TP/(TP + FN) = 1 – FN rate; proportion of all people with disease who test positive; approaching 100% desirable for ruling OUT disease; SN-N-OUT; high sensitivity test used for screening",
      "Specificity (true-negative rate) = TN/(TN + FP) = 1 – FP rate; proportion of all people without disease who test negative; approaching 100% desirable for ruling IN disease; SP-P-IN; high specificity test used for confirmation after a positive screening test",
      "PPV = TP/(TP + FP); probability that a person with a positive test result actually has the disease; varies DIRECTLY with pretest probability (baseline risk, such as prevalence): high pretest probability → high PPV",
      "NPV = TN/(TN + FN); probability that a person with a negative test result actually does not have the disease; varies INVERSELY with prevalence or pretest probability",
      "Test efficiency = (TP + TN)/(TP + FN + FP + TN); Prevalence = (TP + FN)/(TP + FN + FP + TN)",
      "Cutoff figure: A = 100% sensitivity cutoff value; B = practical compromise between specificity and sensitivity; C = 100% specificity cutoff value; lowering (B → A): ↑ Sensitivity ↑ NPV (↑ FP ↓ FN) ↓ Specificity ↓ PPV; raising (B → C): ↑ Specificity ↑ PPV (↑ FN ↓ FP) ↓ Sensitivity ↓ NPV",
    ],
    m3: [
      "SN-N-OUT — highly SeNsitive test, when Negative, rules OUT disease (First Aid's own, printed in red)",
      "SP-P-IN — highly SPecific test, when Positive, rules IN disease (First Aid's own, printed in red)",
      "DISEASE COLUMNS, TEST ROWS — fixed pair reads columns; predictive values read rows (KYP)",
      "LOWER THE BAR, WIDER THE NET — lowering the cutoff widens the positive call: ↑Se ↑NPV, paying ↑FP ↓Sp ↓PPV (KYP)",
    ],
    m10: [
      "The 2×2 as printed: rows Test ⊕/⊖ × columns Disease ⊕/⊖; TP top-left, FP top-right, FN bottom-left, TN bottom-right — the print uses circled ⊕/⊖ glyphs on both axes (the raw text layer drops the two ⊕ and renders the two ⊖ as '–')",
      "The figure's geography: Disease absent curve LEFT, Disease present RIGHT; TN and TP sit large INSIDE their curves; FN in the A–B stretch and FP in the B–C stretch, low in the overlap; dashed verticals at A, B, C",
      "The anemia Note: \"In diseases where diagnosis is based on lower values (eg, anemia), the TP and TN are switched in the graph, ie, ↓ sensitivity and ↓ NPV, and vice-versa\" — check which direction counts as positive before applying cutoff logic",
      "The two rule lines open their second printed line with the letter pairs B → A and B → C (horizontal arrows): the move's direction (lowering vs raising) sets which four quantities rise and which four fall",
    ],
  },
  recall: [
    {
      q: "What are the printed formulas for sensitivity and specificity, and what complementary rates are they equal to?",
      a: "Sensitivity = TP/(TP + FN) = 1 – FN rate; Specificity = TN/(TN + FP) = 1 – FP rate.",
    },
    {
      q: "State First Aid's two printed mnemonics for ruling disease out and in, and name the deployment line printed with each.",
      a: "SN-N-OUT = highly SeNsitive test, when Negative, rules OUT disease — \"High sensitivity test used for screening.\" SP-P-IN = highly SPecific test, when Positive, rules IN disease — \"High specificity test used for confirmation after a positive screening test.\"",
    },
    {
      q: "Define PPV and NPV with their formulas, and state how each varies with prevalence.",
      a: "PPV = probability that a person with a positive test result actually has the disease = TP/(TP + FP); it varies directly with pretest probability (baseline risk, such as prevalence) — high pretest probability → high PPV. NPV = probability that a person with a negative test result actually does not have the disease = TN/(TN + FN); it varies inversely with prevalence or pretest probability.",
    },
    {
      q: "What does the stage-setter give for test efficiency, and what is prevalence in grid terms?",
      a: "Test efficiency = (TP + TN)/(TP + FN + FP + TN). Prevalence = (TP + FN)/(TP + FN + FP + TN) — the Disease ⊕ column over everyone tested.",
    },
    {
      q: "In the cutoff figure, what are cutoffs A, B, and C, per the printed legend?",
      a: "A = 100% sensitivity cutoff value; B = practical compromise between specificity and sensitivity; C = 100% specificity cutoff value.",
    },
    {
      q: "Recite the two printed rule lines for moving the cutoff.",
      a: "Lowering the cutoff value: ↑ Sensitivity ↑ NPV (↑ FP ↓ FN) ↓ Specificity ↓ PPV. Raising the cutoff value: ↑ Specificity ↑ PPV (↑ FN ↓ FP) ↓ Sensitivity ↓ NPV.",
    },
    {
      q: "Which four quantities in the 2×2 are the test's cells, and where does each sit in the printed grid (rows Test ⊕/⊖, columns Disease ⊕/⊖)?",
      a: "TP = Test ⊕ × Disease ⊕ (top-left); FP = Test ⊕ × Disease ⊖ (top-right); FN = Test ⊖ × Disease ⊕ (bottom-left); TN = Test ⊖ × Disease ⊖ (bottom-right).",
    },
    {
      q: "What does the printed anemia Note say happens to the graph when diagnosis is based on lower values?",
      a: "\"In diseases where diagnosis is based on lower values (eg, anemia), the TP and TN are switched in the graph, ie, ↓ sensitivity and ↓ NPV, and vice-versa.\"",
    },
  ],
  related: [
    {
      title: "Likelihood ratios — prevalence-free result interpretation",
      note:
        "The floating pair's weakness (PPV/NPV depend on who was tested) is exactly what likelihood ratios repair: LRs combine sensitivity AND specificity into multipliers of pretest probability that work in any population — the next step in the same interpretation story (produced in this batch's chapter run; the printed page's PPV/NPV variation lines are its motivation).",
      topicId: "likelihood-ratios",
    },
    {
      title: "Quantifying risk — the arithmetic layer of the 2×2",
      note:
        "This page's grid is the same 2×2 machinery the quantifying-risk page uses for odds ratios and relative risk (exposure × disease); the denominator-discipline learned here (whose row or column?) transfers directly to OR vs RR vs attributable risk.",
      topicId: "quantifying-risk",
    },
    {
      title: "ROC curves, precision, and accuracy — every cutoff at once",
      note:
        "The very next page (book 261) plots this page's trade-off across ALL cutoffs simultaneously: the ROC curve graphs true-positive rate (sensitivity) against false-positive rate (1 – specificity), and the area under the curve prices the test — the logical continuation of the A/B/C cutoff figure.",
      topicId: "roc-precision-accuracy",
    },
    {
      title: "Incidence and prevalence — the denominator's denominator",
      note:
        "Prevalence appears twice on this page — as the population's property ((TP + FN)/everyone) and as the dial that swings PPV and NPV; the incidence-prevalence page defines the measure itself and its relationship to duration (prevalence ≈ incidence × duration).",
      topicId: "incidence-prevalence",
    },
  ],
  crossLinks: [
    {
      subject: "Biostatistics and epidemiology — risk quantification",
      connection:
        "The Test × Disease grid is structurally the exposure × disease grid of the quantifying-risk material (sensitivity and specificity are literally column-conditional fractions, the same conditioning that generates odds and risk ratios) — one 2×2, two chapters of questions.",
    },
    {
      subject: "Hematology — anemia and lower-value diagnoses",
      connection:
        "The printed anemia Note is a hematology bridge: anemia is defined by hemoglobin BELOW a threshold, so its disease-present distribution sits at the low end of the value axis — every cutoff rule from this page applies mirrored, the exact lesson of the Note.",
    },
    {
      subject: "Infectious disease — screening and confirmation serology",
      connection:
        "Blood-borne infection screening is the classic deployment of this page's choreography (KYP context, not printed): a high-sensitivity screen for asymptomatic, low-prevalence populations (SN-N-OUT clears the negatives) followed by a high-specificity confirmatory assay for every positive (SP-P-IN licenses the diagnosis) — the pipeline that keeps both false labels and missed cases rare.",
    },
    {
      subject: "Pathology and laboratory medicine — reference ranges and cutoffs",
      connection:
        "Every reference range in laboratory medicine is a cutoff B — a compromise between sensitivity and specificity set by the assay's overlapping distributions; moving a reference limit (the lab \"lowering the cutoff\") reprices FP, FN, and every downstream predictive value exactly as the printed rule lines state.",
    },
  ],
};
