import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 2, topic 6 (pubh6). Source: MID PORTION ONLY of
// pdf page 281 / book 259 (Part 1) — a PINNED PAGE-SPLIT. Scope is the
// "Likelihood ratio" block ONLY: from the navy row-label heading
// "Likelihood ratio" (raw text-layer line 100) through the two stacked-
// fraction equation rows (LR+ = raw lines 102–110; LR– = raw lines 112–120)
// and the two rule sentences (raw lines 140–141). The block sits BETWEEN the
// "Demographic transition" block above (ends raw line 98 — owned by the
// already-produced vital-statistics-populations topic, the pinned UPPER
// split) and the "Kaplan-Meier curve" block below (opens raw line 122 —
// owned by survival-analysis, produced in parallel). No evidence quote in
// this note crosses the boundary: the indd footer slug
// (FAS1_2026_06-PubHealth.indd 259, raw line 124) and the Kaplan-Meier body
// and figure text (raw lines 122–139, 143+) belong to the neighbors and are
// deliberately NOT quoted; the page header/banner (raw lines 1–9) was
// claimed by the upper-split topic and is likewise not quoted here.
// BLOCKS OWNED (the entire printed LR block, all carried verbatim):
// (1) the heading "Likelihood ratio" (bold navy #004b6c MyriadPro-Bold, the
// same row-label convention as "Demographic transition" above and
// "Kaplan-Meier curve" below — pinned by PyMuPDF span colors);
// (2) the LR+ equation row — THREE equal stacked fractions joined by "="
// signs: [probability of positive result in patient with disorder ÷
// probability of positive result in patient without disorder] =
// [sensitivity ÷ (1 – specificity)] = [TP rate ÷ FP rate];
// (3) the LR– equation row — [probability of negative result in patient
// with disorder ÷ probability of negative result in patient without
// disorder] = [(1 – sensitivity) ÷ specificity] = [FN rate ÷ TN rate];
// (4) the two rule sentences, printed in BLACK body text directly below the
// LR– row, between it and the Kaplan-Meier heading (bbox-pinned): "LR+ > 10
// indicates a highly specific test, while LR– < 0.1 indicates a highly
// sensitive test." and "Pretest odds × LR = posttest odds. Posttest
// probability = posttest odds / (posttest odds + 1)."
// CENSUS (pdfimages): ZERO raster images on the page — the block is pure
// text with vector fraction bars → ORIGINAL KYP ADAPTATION (the registry
// visual re-lays the two equation rows out as fraction cards and adds a KYP
// calculation rail; every printed label is preserved). VLM AVAILABLE this
// session (glm-4.6v at 120dpi, ONE full-page pass,
// staging-pubh6/vlm-census.txt): confirmed both equation rows carry exactly
// THREE stacked fractions separated by two "=" signs (all six
// numerator/denominator pairs read back verbatim, none missing or extra);
// the two rule sentences print in BLACK (NOT red — carried as black; the
// color read was corroborated programmatically, PyMuPDF span color #231f20
// body vs #004b6c heading) directly below the LR– row; the LR labels print
// with SUPERSCRIPT +/– signs (6.5pt spans vs the 10pt body — flattened to
// "LR+"/"LR–" by the text layer); thin horizontal fraction bars; the minus
// in "1 – specificity"/"1 – sensitivity"/"LR–" prints as a spaced en-dash;
// the "×" prints as a true multiplication sign (U+00D7, a Symbol-font span);
// NO margin notes, NO mnemonics, NO asterisk footnotes, NO raster images,
// and NO red text anywhere in the block (the page's reds — demographic
// pyramids' Female labels, the Kaplan-Meier Control curve — sit outside the
// boundary). PRINTED-TEXT QUIRKS carried + documented: (1) STACKED-FRACTION
// INTERLEAVE, LR+ row (raw lines 102–110) — the three NUMERATORS extract
// first (fraction 1's "probability of positive result in patient with
// disorder" line 104; fraction 2's "sensitivity" line 105; fraction 3's
// "TP rate" line 106), then the two "=" signs (lines 107–108), then
// fraction 1's DENOMINATOR (line 109), and finally fraction 2's and
// fraction 3's denominators MERGED onto ONE raw line "1 – specificity FP
// rate" (line 110) — the LR+ stack merges on the DENOMINATOR side;
// (2) the LR– row (raw lines 112–120) MIRRORS the interleave with the merge
// on the NUMERATOR side — fraction 1's numerator (line 114), then fraction
// 2's and 3's numerators merged onto ONE raw line "1 – sensitivity FN rate"
// (line 115), then "=" ×2 (116–117), then fraction 1's denominator (118),
// fraction 2's denominator "specificity" (119), fraction 3's denominator
// "TN rate" (120); (3) READING-ORDER JUMBLE — the two rule sentences PRINT
// between the LR– fraction and the Kaplan-Meier heading (pdftotext -bbox
// y-coordinates ≈537 and ≈550, between the LR– denominators ≈512 and the
// "Kaplan-Meier curve" title ≈589) but EXTRACT at raw lines 140–141, AFTER
// the Kaplan-Meier body text and the KM figure's "Survival probability"
// axis label — the evidence range quotes them at their raw position and the
// print position is pinned by bbox + the VLM pass; (4) the en-dash minus
// (U+2013) in "1 – specificity", "1 – sensitivity", and "LR–", and the
// multiplication sign (U+00D7) in "Pretest odds × LR", are carried verbatim
// from the text layer; (5) "LR+"/"LR–" flatten the printed superscripts.
// ADJUDICATIONS: (A) none needed on content — the batch brief's block
// description and the print agree exactly (both formulas, the threshold
// sentence, the odds chain sentence); (B) the heading sits in the left
// label column with the equations indented right (the page's row-label
// table convention — bbox x: heading ≈87, equations ≈199+) and the KYP
// visual carries the two rows as labeled fraction cards accordingly;
// (C) KYP CONTEXT, flagged everywhere it appears and never presented as
// printed: the rule-in/rule-out reading of the thresholds (the print says
// "indicates a highly specific test"/"indicates a highly sensitive test"
// only), the probability↔odds conversions (pretest odds = p/(1–p) — NOT
// printed; only the ×LR and odds/(odds+1) steps print), the prevalence-
// independence of LRs vs PPV/NPV (the facing page's material), sequential-
// test chaining, and the Fagan nomogram (named, not drawn). PROVENANCE
// SPLIT: verbatim = the heading, both equation rows in all three forms
// each, both rule sentences; FA-own = the stacked-fraction layout and the
// threshold shortcuts; KYP-original = the 2×2-column decoder (positive
// divides the positive column, negative the negative column), the
// calculation-rail worked numbers, the exam layer, and the four KYP
// mnemonics — NO mnemonic of First Aid's own prints anywhere in this block
// (VLM census: no margin notes, no mnemonic letters), so unlike the
// observational-studies page, every mnemonic below is a marked KYP original
// (the facing-page SN-N-OUT / SP-P-IN hooks are ATTRIBUTED cross-references
// only, not counted here). DrugCards: none — the page prints no drug rows
// (documented as folded-by-absence in the manifest). The block below the
// boundary opens "Kaplan-Meier curve" — survival analysis, a separate
// parallel topic.

export const likelihoodRatios: KypUsMLENote = {
  id: "likelihood-ratios",
  title: "Likelihood Ratios: From Pretest to Posttest Odds",
  subtitle:
    "Sensitivity and specificity describe a test in isolation; the likelihood ratio tells you what a test result does to YOUR patient's probability of disease — which is why this small block sits at the exact center of the diagnostic-testing pages. The block prints exactly two stacked-fraction equations. LR+ is the probability of a positive result in a patient with the disorder divided by the probability of a positive result in a patient without it — algebraically sensitivity/(1 – specificity), or in raw 2×2 terms TP rate over FP rate. LR– is the mirror: the probability of a negative result with the disorder over the probability of a negative result without it — (1 – sensitivity)/specificity, or FN rate over TN rate. Then the block prints its two rules: an LR+ over 10 marks a highly specific test (a positive result multiplies pretest odds by tenfold-plus — disease becomes the likely explanation), and an LR– under 0.1 marks a highly sensitive test (a negative result crushes the odds of disease). And it prints the machinery that makes the ratios clinical: pretest odds × LR = posttest odds, then posttest probability = posttest odds/(posttest odds + 1). Master the three forms of each fraction and the odds chain, and any test on any page of First Aid becomes a probability-updating machine.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory:
    "Public Health Sciences — likelihood-ratio decoding: the two stacked-fraction formulas in all three equivalent forms each (the probability definition form, the sensitivity/specificity form, and the TP-rate/FP-rate and FN-rate/TN-rate form), the LR+ > 10 and LR– < 0.1 threshold rules, and the pretest-odds × LR = posttest-odds → posttest-probability chain — with the raw text layer's stacked-fraction interleave documented.",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 259 (mid) (Epidemiology and Biostatistics: Likelihood ratio)",
  tags: [
    "likelihood ratio",
    "LR+",
    "LR–",
    "sensitivity",
    "specificity",
    "TP rate",
    "FP rate",
    "FN rate",
    "TN rate",
    "pretest odds",
    "posttest odds",
    "pretest probability",
    "posttest probability",
    "highly specific test",
    "highly sensitive test",
    "odds",
    "probability",
    "2×2 table",
    "diagnostic testing",
    "Bayesian update",
    "prevalence",
    "epidemiology",
    "biostatistics",
  ],
  core: {
    what:
      "One printed block, carried whole. ELEMENT 1 — the heading “Likelihood ratio” (bold navy row label, the same convention as the Demographic transition label above and the Kaplan-Meier curve label below). ELEMENT 2 — the LR+ equation row, printed as THREE equal stacked fractions joined by “=” signs: probability of positive result in patient with disorder ÷ probability of positive result in patient without disorder = sensitivity/(1 – specificity) = TP rate/FP rate. ELEMENT 3 — the LR– equation row, the same architecture with negative results: probability of negative result in patient with disorder ÷ probability of negative result in patient without disorder = (1 – sensitivity)/specificity = FN rate/TN rate. ELEMENT 4 — the two rule sentences printed directly beneath the equations: “LR+ > 10 indicates a highly specific test, while LR– < 0.1 indicates a highly sensitive test.” and “Pretest odds × LR = posttest odds. Posttest probability = posttest odds / (posttest odds + 1).” Nothing else prints in the block (VLM-confirmed) — two fractions, two sentences, one heading.",
    why:
      "This block is the hinge between the test-characteristics material around it. The quantifying-risk pages (book 258–259 upper) built the 2×2 table and its measures; the diagnostic-test-performance page (book 260, directly across the boundary) defines sensitivity, specificity, and the predictive values. Predictive values have a weakness the LR exists to fix: PPV and NPV change with disease prevalence, so a test validated in one clinic misbehaves in another. A likelihood ratio is built ONLY from sensitivity and specificity — the two columns of the 2×2 grid — so it is a property of the test alone and travels with the test into any pretest probability. That is the whole design: LR+ answers “how much do disease odds rise when the result is positive?” (TP rate ÷ FP rate — how much more often the sick than the well test positive) and LR– answers “how much do disease odds fall when the result is negative?” (FN rate ÷ TN rate — how much more often the sick than the well test negative). The printed thresholds are the shortcuts: only a highly specific test (few false positives, tiny FP rate) can push sensitivity/(1 – specificity) above 10, and only a highly sensitive test (few false negatives, tiny FN rate) can push (1 – sensitivity)/specificity below 0.1. The printed odds chain is what turns the ratio into a decision: convert your pretest probability to odds, multiply by the LR of the result you actually observed, convert back to probability — and the test has moved you from suspicion to near-certainty or near-exclusion.",
    keyIdea:
      "Read each ratio as ONE question about the 2×2 table's columns, then run the odds chain. MOVE 1 — WHICH COLUMN? LR+ divides the TEST-POSITIVE column's two rates: TP rate ÷ FP rate = sensitivity ÷ (1 – specificity). LR– divides the TEST-NEGATIVE column's two rates: FN rate ÷ TN rate = (1 – sensitivity) ÷ specificity. The printed definition forms say the same thing in probability language: the numerator is always “probability of the result in a patient WITH the disorder,” the denominator always “probability of that result in a patient WITHOUT the disorder” — with the result itself (positive vs negative) being the only difference between LR+ and LR–. MOVE 2 — HOW EXTREME? LR+ > 10 = highly specific test (the FP rate must be tiny for the division to blow up) — a positive result multiplies disease odds tenfold-plus and effectively rules disease IN. LR– < 0.1 = highly sensitive test (the FN rate must be tiny) — a negative result divides disease odds by tenfold-plus and effectively rules disease OUT. LR = 1 means the result is uninformative — odds do not move (KYP context). MOVE 3 — RUN THE CHAIN. Pretest probability p → pretest odds p/(1–p) [conversion not printed — KYP context] → × the LR of the observed result → posttest odds → posttest probability odds/(odds + 1) [printed]. Worked: pretest probability 20% = odds 0.25; a positive result with LR+ 10 → posttest odds 2.5 → posttest probability 2.5/3.5 ≈ 71%; the same patient testing negative with LR– 0.1 → posttest odds 0.025 → ≈ 2.4%. Column, extremity, chain — three moves and any likelihood-ratio question resolves.",
  },
  mechanisms: [
    {
      id: "lr-fraction-map",
      title:
        "Cutting the two likelihood ratios from the 2×2 table: one ratio per test-result column",
      context:
        "The printed LR+ and LR– equation rows (book 259 mid): three equivalent stacked fractions each",
      flow: {
        nodes: [
          {
            id: "grid",
            label: "THE 2×2 GRID — two columns: test POSITIVE and test NEGATIVE",
            sublabel:
              "Input — the grid taught with quantifying-risk (book 258): disease YES/NO rows × result +/– columns. Each cell yields a RATE within its disease row: TP rate = sensitivity (diseased who test +), FN rate = 1 – sensitivity (diseased who test –), FP rate = 1 – specificity (well who test +), TN rate = specificity (well who test –). A likelihood ratio is a division of one column's two rates — which is why it is built from sensitivity and specificity alone and inherits nothing from prevalence.",
            variant: "input",
          },
          {
            id: "lr-plus",
            label: "LR+ — divide the POSITIVE column: TP rate ÷ FP rate",
            sublabel:
              "Process — the printed equation's rightmost form: “TP rate” over “FP rate.” Its middle form is the sensitivity rewrite — “sensitivity” over “1 – specificity” — because TP rate IS sensitivity and FP rate IS (1 – specificity). Its leftmost form is the definition: “probability of positive result in patient with disorder” over “probability of positive result in patient without disorder.” One number: how many times more likely a positive result is in the diseased than in the well.",
            variant: "process",
          },
          {
            id: "lr-minus",
            label: "LR– — divide the NEGATIVE column: FN rate ÷ TN rate",
            sublabel:
              "Process — the mirror equation: “FN rate” over “TN rate,” rewriting to “1 – sensitivity” over “specificity,” and defining as “probability of negative result in patient with disorder” over “probability of negative result in patient without disorder.” How many times more likely a negative result is in the diseased than in the well — a small number when the test rarely misses disease.",
            variant: "process",
          },
          {
            id: "mirror",
            label: "THE MIRROR — where the “1 –” sits is the whole formula",
            sublabel:
              "Process — LR+ carries the “1 –” DOWNSTAIRS (1 – specificity in the denominator; the intact sensitivity upstairs); LR– carries it UPSTAIRS (1 – sensitivity in the numerator; the intact specificity downstairs). The un-mutilated statistic always names the quality the extreme value certifies: a huge LR+ certifies specificity (only a tiny FP rate inflates the division); a tiny LR– certifies sensitivity (only a tiny FN rate deflates it).",
            variant: "process",
          },
          {
            id: "thresholds",
            label: "THE PRINTED THRESHOLDS — LR+ > 10 · LR– < 0.1",
            sublabel:
              "Output — the block's first rule sentence: “LR+ > 10 indicates a highly specific test, while LR– < 0.1 indicates a highly sensitive test.” Division mechanics make it obvious: for sensitivity/(1 – specificity) to exceed 10 the denominator (FP rate) must be a small fraction of the numerator; for (1 – sensitivity)/specificity to fall below 0.1 the numerator (FN rate) must be a small fraction of the denominator. KYP context: the exam's rule-in/rule-out vocabulary — SP-P-IN and SN-N-OUT, the facing page's own hooks — is the clinical translation of these two printed thresholds.",
            variant: "output",
          },
        ],
        edges: [
          { from: "grid", to: "lr-plus", label: "positive column ÷" },
          { from: "grid", to: "lr-minus", label: "negative column ÷" },
          { from: "lr-plus", to: "mirror", label: "1 – specificity downstairs →" },
          { from: "lr-minus", to: "mirror", label: "1 – sensitivity upstairs →" },
          { from: "lr-plus", to: "thresholds", label: "> 10 → highly specific" },
          { from: "lr-minus", to: "thresholds", label: "< 0.1 → highly sensitive" },
          { from: "mirror", to: "thresholds", label: "intact statistic names the certification" },
        ],
      },
    },
    {
      id: "pretest-to-posttest-map",
      title:
        "The odds chain: how one test result updates a pretest probability into a posttest probability",
      context:
        "The block's second rule sentence (book 259 mid): pretest odds × LR = posttest odds; posttest probability = posttest odds/(posttest odds + 1)",
      flow: {
        nodes: [
          {
            id: "pretest",
            label: "STEP 0 — THE PRETEST PROBABILITY (the prior)",
            sublabel:
              "Input — where you stand before the test: the disease prevalence in your clinic's population, or the probability implied by a clinical score (KYP context: Wells, Chicago, CENTOR — First Aid teaches the scores elsewhere). The block never prints how to get it; the chain starts with it.",
            variant: "input",
          },
          {
            id: "to-odds",
            label: "STEP 1 — CONVERT PROBABILITY TO ODDS (p/(1–p))",
            sublabel:
              "Process — the unprinted hinge (KYP context, flagged): the chain runs on ODDS, not probabilities. Probability p becomes odds p/(1–p): 20% → 0.2/0.8 = 0.25 (1:4); 50% → 1:1; 90% → 9:1. Odds and probability are NOT interchangeable numbers — 0.25 odds is 20% probability, not 25%.",
            variant: "process",
          },
          {
            id: "multiply",
            label: "STEP 2 — MULTIPLY BY THE LR OF THE OBSERVED RESULT (printed)",
            sublabel:
              "Process — the sentence's first clause, verbatim: “Pretest odds × LR = posttest odds.” Positive result → multiply by LR+ (odds rise); negative result → multiply by LR– (odds fall; LR– is a fraction, so multiplying by it shrinks). One LR per result — pick the one matching what the test actually showed.",
            variant: "process",
          },
          {
            id: "back",
            label: "STEP 3 — CONVERT POSTTEST ODDS BACK TO PROBABILITY (printed)",
            sublabel:
              "Process — the sentence's second clause, verbatim: “Posttest probability = posttest odds / (posttest odds + 1).” Odds 2.5 → 2.5/3.5 ≈ 71%; odds 0.025 → 0.025/1.025 ≈ 2.4%. The +1 in the denominator is the entire difference between odds-space and probability-space.",
            variant: "process",
          },
          {
            id: "readout",
            label: "THE READOUT — how far the result moved you",
            sublabel:
              "Output — combine with the printed thresholds: an LR+ > 10 on any starting odds pushes posttest probability across the treatment threshold (a highly specific test confirms — SP-P-IN); an LR– < 0.1 drives posttest probability toward zero (a highly sensitive test excludes — SN-N-OUT). An LR near 1 leaves the pretest probability essentially unchanged — the result was not worth its tube of serum (KYP context).",
            variant: "output",
          },
        ],
        edges: [
          { from: "pretest", to: "to-odds", label: "p → p/(1–p) →" },
          { from: "to-odds", to: "multiply", label: "× LR+ (positive) or × LR– (negative) →" },
          { from: "multiply", to: "back", label: "odds → odds/(odds + 1) →" },
          { from: "back", to: "readout", label: "compare to thresholds" },
          { from: "pretest", to: "readout", label: "LR = 1 returns you where you started" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "likelihood-ratios-map",
      title:
        "The two likelihood-ratio fractions, their thresholds, and the pretest-to-posttest calculation rail (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 259 mid's Likelihood ratio block. TOP — the two printed equation rows as stacked-fraction cards: LR+ (probability of positive result in patient with disorder ÷ probability of positive result in patient without disorder = sensitivity ÷ (1 – specificity) = TP rate ÷ FP rate) and LR– (probability of negative result in patient with disorder ÷ probability of negative result in patient without disorder = (1 – sensitivity) ÷ specificity = FN rate ÷ TN rate), each fraction drawn with a true horizontal bar as in the print. MIDDLE — the thresholds band: LR+ > 10 indicates a highly specific test; LR– < 0.1 indicates a highly sensitive test. BOTTOM — the printed odds chain as a horizontal calculation rail: pretest probability 20% → pretest odds 0.25 (1:4) → × LR+ 10 → posttest odds 2.5 → posttest probability ≈ 71%, with the negative branch × LR– 0.1 → odds 0.025 → ≈ 2.4%.",
      notice:
        "Census (pdfimages): ZERO raster images — the block is pure text with vector fraction bars, re-laid-out here as an ORIGINAL KYP ADAPTATION (every printed label preserved: the heading, both equation rows in all three forms, both rule sentences; the worked 20%/LR+ 10/LR– 0.1 numbers and the odds conversions are KYP additions, flagged as such on the rail). The two rule sentences print in BLACK body text directly below the LR– row (VLM + PyMuPDF span colors), between it and the Kaplan-Meier heading — the raw text layer extracts them AFTER the Kaplan-Meier text (reading-order jumble, documented). The LR labels print with superscript +/– (flattened in the text layer); the minus signs print as spaced en-dashes and the × as a true multiplication sign — all carried as printed.",
    },
    {
      kind: "table",
      title:
        "Book 259 (mid) — the printed Likelihood ratio block, carried verbatim (every printed word)",
      intro:
        "The whole block: one heading, two stacked-fraction equation rows (each three equal fractions joined by “=” signs), and two rule sentences beneath them. The fractions print stacked (numerator above a horizontal bar, denominator below); the raw text layer interleaves them — LR+ merges its second and third DENOMINATORS onto one line (“1 – specificity FP rate”) while LR– merges its second and third NUMERATORS onto one line (“1 – sensitivity FN rate”) — the reconstructed logical order is carried here and the raw interleave is documented in the note header and the manifest. The minus signs print as spaced en-dashes (U+2013) and the multiplication sign as U+00D7; the LR labels print with superscript +/– signs (flattened to LR+/LR– by the text layer).",
      columns: ["PRINTED ELEMENT", "AS PRINTED (VERBATIM)"],
      rows: [
        [
          "Heading",
          "Likelihood ratio",
        ],
        [
          "Equation row 1 — LR+ (three equal stacked fractions)",
          "LR+ = probability of positive result in patient with disorder / probability of positive result in patient without disorder = sensitivity / (1 – specificity) = TP rate / FP rate",
        ],
        [
          "Equation row 2 — LR– (three equal stacked fractions)",
          "LR– = probability of negative result in patient with disorder / probability of negative result in patient without disorder = (1 – sensitivity) / specificity = FN rate / TN rate",
        ],
        [
          "Rule sentence 1 — the thresholds (printed beneath the equations, black body text)",
          "LR+ > 10 indicates a highly specific test, while LR– < 0.1 indicates a highly sensitive test.",
        ],
        [
          "Rule sentence 2 — the odds chain",
          "Pretest odds × LR = posttest odds. Posttest probability = posttest odds / (posttest odds + 1).",
        ],
      ],
      caption:
        "Verbatim carry, documented: the two equation rows print as stacked fractions (numerators above horizontal bars, denominators below) with the “=” signs vertically centered between them — three equal fractions per row, joined left to right (VLM-confirmed at 120dpi, staging-pubh6/vlm-census.txt — all six numerator/denominator pairs read back verbatim, none missing or extra). Raw-layer interleave, carried and documented: the LR+ row extracts its three numerators first (probability…disorder; sensitivity; TP rate), then the two “=” signs, then its first denominator, then its second and third denominators MERGED on one raw line (“1 – specificity FP rate”); the LR– row mirrors this with the merge on the numerator side (“1 – sensitivity FN rate” on one raw line). Reading-order jumble: the two rule sentences PRINT between the LR– row and the Kaplan-Meier heading but EXTRACT after the Kaplan-Meier body and figure text — their print position is pinned by pdftotext -bbox y-coordinates + the VLM pass. The block prints no mnemonic of its own (VLM census: no margin notes, no red text in this block) and nothing else besides these five elements.",
    },
    {
      kind: "list",
      title:
        "The decoder — each ratio's three faces, and what each face is for (KYP's reading of the print)",
      intro:
        "The print gives each likelihood ratio three simultaneous forms; each form is the right tool for a different exam question. This layer compresses the decoder logic.",
      items: [
        {
          lead: "FACE 1 — THE DEFINITION FORM (the leftmost fraction): what the number MEANS",
          text: "“Probability of [positive/negative] result in patient with disorder ÷ probability of [that] result in patient without disorder.” LR+: how many times more often the diseased test positive than the well do. LR–: how many times more often the diseased test negative than the well do. Use this face to answer any “what does a likelihood ratio represent?” conceptual stem — it is a ratio of result-probabilities across disease status, not a rate, risk, or predictive value.",
        },
        {
          lead: "FACE 2 — THE SENSITIVITY/SPECIFICITY FORM (the middle fraction): how to COMPUTE it",
          text: "LR+ = sensitivity/(1 – specificity); LR– = (1 – sensitivity)/specificity. Use this face when the stem hands you the classic pair (“a test is 90% sensitive and 90% specific…”): LR+ = 0.90/0.10 = 9; LR– = 0.10/0.90 ≈ 0.11. Note the mirror (KYP): the “1 –” sits in the DENOMINATOR for LR+ and in the NUMERATOR for LR– — the intact statistic is the one whose quality the extreme value certifies.",
        },
        {
          lead: "FACE 3 — THE RATE FORM (the rightmost fraction): how to COMPUTE it from a 2×2 table",
          text: "LR+ = TP rate/FP rate (the test-POSITIVE column of the 2×2 grid); LR– = FN rate/TN rate (the test-NEGATIVE column). Use this face when the stem prints the grid itself (90 of 100 diseased test positive; 10 of 100 well test positive → LR+ = 0.9/0.1 = 9). Positive divides the positive column, negative divides the negative column — the column is the only thing the sign of the ratio selects.",
        },
        {
          lead: "THE VALUES — what the size of the number says (thresholds printed; interpretation KYP)",
          text: "LR+ > 10 indicates a highly specific test (printed) — a positive result is >10× more likely in the diseased, so odds multiply tenfold-plus: effectively rules disease IN (SP-P-IN, the facing page's own hook, attributed). LR– < 0.1 indicates a highly sensitive test (printed) — a negative result is >10× more likely in the well, so odds collapse tenfold-plus: effectively rules disease OUT (SN-N-OUT, attributed). LR = 1 (KYP context): the result is equally likely in diseased and well — posttest odds equal pretest odds, the test added nothing.",
        },
      ],
    },
    {
      kind: "steps",
      title: "Running the printed odds chain — pretest probability to posttest probability in five moves",
      intro:
        "The block prints the chain's two printed steps (× LR, then odds/(odds + 1)); the probability→odds conversion and the setup around them are the unprinted hinges (KYP context, flagged). The five moves, in order:",
      steps: [
        {
          label: "MOVE 1 — FIX THE PRETEST PROBABILITY",
          detail:
            "Start from the prior: population prevalence, clinic base rate, or a validated clinical score's implied probability (KYP context — the block itself never says where the prior comes from). Example carried through the moves: a 20% pretest probability of disease.",
        },
        {
          label: "MOVE 2 — CONVERT PROBABILITY TO PRETEST ODDS (the unprinted hinge)",
          detail:
            "Odds = p/(1–p). 20% → 0.2/0.8 = 0.25, i.e. 1:4. Sanity checks: 50% → 1:1; 10% → 1:9; 90% → 9:1. Never carry a percentage into step 3 unconverted — the chain multiplies ODDS, not probabilities.",
        },
        {
          label: "MOVE 3 — SELECT THE LR MATCHING THE OBSERVED RESULT (printed)",
          detail:
            "Positive result → multiply by LR+; negative result → multiply by LR–. The stem may hand you the LR directly, or expect you to build it first from sensitivity/specificity or from the 2×2 rates (Faces 2 and 3 above).",
        },
        {
          label: "MOVE 4 — MULTIPLY: PRETEST ODDS × LR = POSTTEST ODDS (printed)",
          detail:
            "Positive with LR+ 10: 0.25 × 10 = 2.5 (5:2). Negative with LR– 0.1: 0.25 × 0.1 = 0.025 (1:40). A fraction LR shrinks the odds — that is the arithmetic of a rule-out.",
        },
        {
          label: "MOVE 5 — CONVERT BACK: POSTTEST PROBABILITY = ODDS/(ODDS + 1) (printed)",
          detail:
            "Odds 2.5 → 2.5/3.5 ≈ 71% disease. Odds 0.025 → 0.025/1.025 ≈ 2.4% disease. Read against the thresholds: the LR+ 10 result crossed the confirm line; the LR– 0.1 result collapsed the probability below the test threshold — the same patient, the same prior, opposite directions.",
        },
      ],
    },
    {
      kind: "compare",
      title: "LR+ vs LR– — the mirror pair, in the block's own three forms",
      intro:
        "The two printed equation rows are perfect mirrors; every distinguishing feature follows from which test-result column each divides.",
      columns: [
        "LR+ — the POSITIVE-result ratio",
        "LR– — the NEGATIVE-result ratio",
      ],
      rows: [
        {
          label: "Definition form (the leftmost printed fraction)",
          a: "Probability of positive result in patient with disorder ÷ probability of positive result in patient without disorder",
          b: "Probability of negative result in patient with disorder ÷ probability of negative result in patient without disorder",
        },
        {
          label: "Sensitivity/specificity form",
          a: "sensitivity / (1 – specificity) — the “1 –” sits DOWNSTAIRS",
          b: "(1 – sensitivity) / specificity — the “1 –” sits UPSTAIRS",
        },
        {
          label: "2×2 rate form",
          a: "TP rate / FP rate — divides the test-POSITIVE column",
          b: "FN rate / TN rate — divides the test-NEGATIVE column",
        },
        {
          label: "Printed threshold",
          a: "LR+ > 10 indicates a highly specific test",
          b: "LR– < 0.1 indicates a highly sensitive test",
        },
        {
          label: "Direction of the odds update (KYP context)",
          a: "Multiplies pretest odds UP — a big LR+ confirms disease (rules IN; SP-P-IN)",
          b: "Multiplies pretest odds DOWN (it is a fraction) — a tiny LR– excludes disease (rules OUT; SN-N-OUT)",
        },
        {
          label: "What the extreme value certifies",
          a: "Specificity — only a vanishing FP rate (1 – specificity → 0) can push the division past 10",
          b: "Sensitivity — only a vanishing FN rate (1 – sensitivity → 0) can push the division under 0.1",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this block — four stem shapes and one guaranteed conversion",
      body:
        "SHAPE 1 — COMPUTE THE LR FROM SENSITIVITY/SPECIFICITY: “a screening test is 99% sensitive and 96% specific; what is LR+?” → 0.99/0.04 = 24.75 (a highly specific test — >10). Watch the complementary flip: the denominator is (1 – specificity), not specificity. SHAPE 2 — COMPUTE THE LR FROM A 2×2 TABLE: divide the named column's rates — TP rate/FP rate for LR+, FN rate/TN rate for LR–; never cross columns. SHAPE 3 — RUN THE CHAIN: the stem gives a pretest probability and an LR and asks for posttest probability — convert p → odds, multiply, convert back (20% + LR+ 10 → ≈71%); distractors are built from the two unconverted errors (multiplying the probability directly: 0.2 × 10 = 200%?; or reporting odds as probability: 2.5 = 250%?). SHAPE 4 — THE THRESHOLD ATTRIBUTION: “an LR– of 0.05 means this test is…” → highly SENSITIVE (and a negative result excludes disease); the swap distractor (“highly specific”) is always in the options. THE GUARANTEED CONVERSION: odds = p/(1–p) and p = odds/(odds + 1) — the block prints the second one; the first is its unprinted mirror, and both directions appear on exams.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "The mnemonic ledger — no First Aid mnemonic prints in this block; four KYP originals",
      body:
        "Census (VLM at 120dpi, staging-pubh6/vlm-census.txt): NO margin notes, NO mnemonic letters, NO red text anywhere in the Likelihood ratio block — unlike the observational-studies page, this block prints no mnemonic of First Aid's own, so all four codes below are KYP ORIGINALS, marked as such: (1) “POSITIVE DIVIDES POSITIVES, NEGATIVE DIVIDES NEGATIVES” — LR+ = TP rate/FP rate (the test-positive column); LR– = FN rate/TN rate (the test-negative column). (2) “ONE-MINUS MIGRATES OPPOSITE THE SIGN” — in LR+ the “1 –” sits in the denominator (1 – specificity); in LR– it climbs to the numerator (1 – sensitivity). (3) “TEN RULES IN, A TENTH RULES OUT” — LR+ > 10 = highly specific test (rules in, SP-P-IN); LR– < 0.1 = highly sensitive test (rules out, SN-N-OUT); the rule-in/rule-out phrasing is KYP's translation of the printed “indicates a highly specific/sensitive test.” (4) “PROBABILITY IN, ODDS THROUGH, PROBABILITY OUT” — the chain: pretest probability → odds p/(1–p) → × LR → posttest odds → probability odds/(odds + 1). The facing page's own hooks (SP-P-IN, SN-N-OUT) are ATTRIBUTED First Aid mnemonics used here as cross-references only — they print on the sensitivity/specificity page (book 260), not here.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "Why clinicians carry likelihood ratios — the bedside layer (KYP context, flagged)",
      intro:
        "The block prints formulas and thresholds only; this layer is the clinical reasoning the formulas power, every generalization flagged as KYP context beyond the printed page.",
      items: [
        {
          lead: "PREVALENCE-PROOF TEST PROPERTIES (vs the predictive values)",
          text: "PPV and NPV (the facing page, book 260) are anchored to the study's disease prevalence and drift when the test moves to a new population; a likelihood ratio is built solely from sensitivity and specificity — the test-positive and test-negative columns — so the SAME LR+ and LR– apply to every pretest probability: the emergency department at 2%, the oncology clinic at 60%. The clinician supplies the prior; the test supplies the ratio; the chain supplies the update.",
        },
        {
          lead: "THE TREATMENT THRESHOLD AS THE DESTINATION",
          text: "Testing is worth it only when the posttest probability can cross a decision threshold (KYP context): an LR+ > 10 result on a moderate prior clears the confirm/treat threshold; an LR– < 0.1 result on the same prior falls below the exclude/stop threshold. Between the thresholds lives the zone where the result changes management neither way.",
        },
        {
          lead: "SEQUENTIAL TESTS CHAIN THROUGH ODDS (KYP context)",
          text: "Because each test multiplies the running odds by its own LR, the posttest odds after test 1 become the pretest odds for test 2: pretest odds × LR₁ × LR₂ = posttest odds. The printed chain is one link of a general engine — the property that makes multi-test algorithms (and the Fagan nomogram, named but not drawn here) work.",
        },
        {
          lead: "THE PRINTED SHORTCUTS AT THE BEDSIDE",
          text: "The two printed threshold sentences are the clinical triage of tests: for CONFIRMATION order the test whose LR+ exceeds 10 (a highly specific test — its positive result is worth believing); for EXCLUSION order the test whose LR– falls under 0.1 (a highly sensitive test — its negative result is worth believing). This is the LR form of the facing page's SP-P-IN / SN-N-OUT doctrine, stated in ratio language.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A diagnostic test for a disease is reported to be 90% sensitive and 90% specific. The examining board asks for the likelihood ratio of a positive result.",
        discriminator:
          "The complementary flip — the denominator of LR+ is (1 – specificity), not specificity",
        concept: "Computing LR+ from the sensitivity/specificity form",
        answer:
          "LR+ = sensitivity/(1 – specificity) = 0.90/0.10 = 9 — the printed middle fraction of the LR+ equation row. (Its mirror: LR– = (1 – sensitivity)/specificity = 0.10/0.90 ≈ 0.11.) An LR+ of 9 sits just under the printed >10 line — strong, but not yet “highly specific” by the block's rule.",
      },
      {
        stem: "In a validation study, 90 of 100 patients with the disorder test positive and 10 of 100 patients without the disorder test positive. The study reports the test's likelihood ratios.",
        discriminator:
          "The 2×2 rate form — LR+ divides the test-POSITIVE column: TP rate over FP rate",
        concept: "Computing LRs from the 2×2 rate form",
        answer:
          "LR+ = TP rate/FP rate = 0.90/0.10 = 9; LR– = FN rate/TN rate = 0.10/0.90 ≈ 0.11 (10 of the 100 diseased tested negative — the FN rate; 90 of the 100 well tested negative — the TN rate). Positive divides the positive column, negative divides the negative column.",
      },
      {
        stem: "A patient has a pretest probability of disease of 20%. A test whose positive result carries a likelihood ratio of 10 comes back positive.",
        discriminator:
          "The chain must run through ODDS — convert, multiply, convert back",
        concept: "Pretest odds × LR = posttest odds; posttest probability = odds/(odds + 1)",
        answer:
          "Pretest odds = 0.2/0.8 = 0.25; posttest odds = 0.25 × 10 = 2.5; posttest probability = 2.5/(2.5 + 1) = 2.5/3.5 ≈ 71%. Both printed clauses of the block's second rule sentence are needed — and the unprinted p→odds conversion (KYP) is the hinge that makes them work.",
      },
      {
        stem: "A rapid rule-out test is described by the phrase “a negative result has a likelihood ratio of 0.05.”",
        discriminator:
          "The threshold sentence's attribution: LR– < 0.1 indicates a highly SENSITIVE test",
        concept: "The printed threshold rules",
        answer:
          "LR– < 0.1 indicates a highly sensitive test — the false-negative rate is so small that (1 – sensitivity)/specificity collapses below 0.1, and a negative result divides the disease odds by twenty or more, effectively excluding disease (the block's own sentence; the rule-out vocabulary is KYP context bridging to SN-N-OUT).",
      },
    ],
    traps: [
      {
        a: "LR+ = sensitivity/(1 – specificity) — the “1 –” DOWNSTAIRS",
        b: "LR– = (1 – sensitivity)/specificity — the “1 –” UPSTAIRS",
        whyConfused:
          "The two printed equations are mirror images; the mnemonic-drowning moment is which statistic gets mutilated where",
        keyDifference:
          "The intact statistic names the certified quality: LR+ keeps sensitivity intact upstairs (an extreme value certifies SPECIFICITY, via the tiny denominator); LR– keeps specificity intact downstairs (an extreme value certifies SENSITIVITY, via the tiny numerator)",
        clue:
          "For a positive result, complement the SPECIFICITY; for a negative result, complement the SENSITIVITY — one-minus migrates opposite the sign.",
      },
      {
        a: "Odds 0.25 (a 20% probability)",
        b: "Probability 25%",
        whyConfused:
          "Both are “one-in-four-sounding” numbers, and the chain's printed steps multiply odds while stems speak in probabilities",
        keyDifference:
          "Odds = p/(1–p): 20% probability IS 0.25 odds, but 25% probability is 0.33 odds. Multiplying a probability by an LR (0.2 × 10 = “200%”) is the classic distractor arithmetic; the chain runs odds → odds → odds/(odds + 1)",
        clue:
          "Any option above 100% or any “×LR directly on the percentage” step is the unconverted-odds error — convert first.",
      },
      {
        a: "LR+ > 10 — indicates a highly SPECIFIC test",
        b: "LR– < 0.1 — indicates a highly SENSITIVE test",
        whyConfused:
          "Intuition pairs “positive result” with “sensitivity” and “negative” with “specificity” — exactly backwards",
        keyDifference:
          "Division mechanics: only a tiny FP rate (high specificity) can push sensitivity/(1 – specificity) above 10; only a tiny FN rate (high sensitivity) can push (1 – sensitivity)/specificity below 0.1. The extreme ratio certifies the quality whose complement shrank",
        clue:
          "The ratio is extreme BECAUSE the denominator (LR+) or numerator (LR–) nearly vanished — find the vanishing complement, and that complement's intact partner is the certified quality.",
      },
      {
        a: "LR+ = TP rate/FP rate (the test-positive column)",
        b: "PPV = TP/(TP + FP) (the test-positive ROW)",
        whyConfused:
          "Both divide true positives by false positives in some arrangement, and both live on the neighboring pages",
        keyDifference:
          "LR+ divides RATES from the two different disease rows (diseased column-rate ÷ well column-rate — prevalence-proof); PPV divides COUNTS within the single test-positive row (prevalence-dependent). A stem handing you raw counts wants PPV arithmetic; a stem handing you within-row rates (or sens/spec) wants the LR",
        clue:
          "If the denominators come from BOTH disease states, it is an LR; if the denominator is everyone who tested positive, it is a predictive value.",
      },
    ],
    pivots: [
      {
        lookAlike: "A stem that gives sensitivity and specificity AND a pretest probability",
        differentiator:
          "Two independent questions travel together — build the LR first, then run the chain",
        correctPath:
          "Step 1: LR+ = sensitivity/(1 – specificity) (or LR– = (1 – sensitivity)/specificity, matching the observed result). Step 2: pretest odds = p/(1–p). Step 3: posttest odds = pretest odds × LR. Step 4: posttest probability = odds/(odds + 1). The four moves in order; never skip to multiplication with a probability in hand.",
      },
      {
        lookAlike: "“Which of the following best describes this test?” after an LR is quoted",
        differentiator:
          "The printed thresholds are an attribution test, not a computation",
        correctPath:
          "LR+ > 10 → “highly specific test”; LR– < 0.1 → “highly sensitive test” — the block's exact sentence. Add the direction (KYP): big LR+ rules IN (SP-P-IN), tiny LR– rules OUT (SN-N-OUT). If the LR sits between 0.1 and 10, the test is neither “highly” specific nor “highly” sensitive by the printed rule — say so and move on.",
      },
      {
        lookAlike: "A 2×2 table with the question “what is the likelihood ratio?” (no sign given)",
        differentiator:
          "Two LRs live in every 2×2 table — the sign must come from the result the stem describes",
        correctPath:
          "Stem describes a POSITIVE result → TP rate/FP rate; a NEGATIVE result → FN rate/TN rate; both asked → compute both (they are reciprocally informative but NOT reciprocals of each other). The column follows the sign of the result, never the disease status.",
      },
    ],
    miniCase: {
      vignette:
        "A 58-year-old woman presents to the emergency department with pleuritic chest pain. Her Wells score places her pretest probability of pulmonary embolism at 20%. A highly sensitive D-dimer assay is sent; the assay's negative result carries a likelihood ratio of 0.1. The D-dimer comes back NEGATIVE. The team must decide whether to stop the workup.",
      question:
        "Which of the following best describes the posttest probability of pulmonary embolism and the correct next step?",
      options: [
        {
          label: "A",
          text:
            "Approximately 2–3%; the negative result has effectively excluded pulmonary embolism, and the workup can stop",
          correct: true,
          why:
            "CORRECT — run the printed chain: pretest probability 20% → pretest odds 0.2/0.8 = 0.25 → × LR– 0.1 → posttest odds 0.025 → posttest probability 0.025/1.025 ≈ 2.4%. The LR– of 0.1 is the block's printed threshold for a highly sensitive test: a negative result collapses the odds tenfold, and ≈2.4% sits below any reasonable testing threshold for PE — the workup stops.",
        },
        {
          label: "B",
          text:
            "Approximately 2–3%; because the test is highly specific, its negative result reliably excludes disease, and the workup can stop",
          why:
            "TEMPTING but wrong attribute — the probability arithmetic is right, but the attribution is backwards: the block's own sentence says LR– < 0.1 indicates a highly SENSITIVE test (the FN rate is the vanishing quantity). A negative result excludes disease because the test rarely misses it — sensitivity, not specificity. Highly specific tests rule IN with their POSITIVE results (SP-P-IN).",
        },
        {
          label: "C",
          text:
            "Approximately 10%; the negative result halves her probability of disease, and CT pulmonary angiography is still indicated",
          why:
            "TEMPTING arithmetic error — halving the PROBABILITY (20% → 10%) applies the LR directly to a percentage. The chain runs on ODDS: the multiplication happens in odds-space (0.25 × 0.1 = 0.025), and converting back gives ≈2.4%, not 10%. The unconverted-odds error always overstates the posttest probability of a negative result.",
        },
        {
          label: "D",
          text:
            "Approximately 20%; a likelihood ratio modifies predictive values, not the pretest probability, so no meaningful update is possible without the disease prevalence",
          why:
            "WRONG on two counts — the chain's entire purpose is updating the pretest probability (pretest odds × LR = posttest odds, printed), and the LR needs no additional prevalence input: it is built from the test's columns (sensitivity/specificity) and is prevalence-proof — that is its advantage over PPV and NPV. The 20% prior WAS the prevalence-informed starting point.",
        },
        {
          label: "E",
          text:
            "It cannot be computed from the information given, because the test's specificity and the false-positive rate are not provided",
          why:
            "TEMPTING but wrong — the LR is a self-contained multiplier: whatever sensitivity and specificity went into it are already folded into the single number 0.1. The chain needs only the pretest probability and the LR of the OBSERVED result (here the negative one). Reconstructing the test's characteristics is unnecessary work the stem is testing you to skip.",
        },
      ],
      reasoning:
        "The vignette is the block's second rule sentence wearing clinical clothes: a pretest probability (20% — the Wells prior), an LR attached to the observed result (0.1, negative), and a threshold decision. The moves: probability → odds (0.25, the unprinted hinge), × LR (0.025), odds → probability (≈2.4%). The distractors each isolate one exam-favorite error: B swaps the threshold attribution (highly sensitive, not specific — the printed sentence itself); C multiplies the percentage directly; D denies the update and invents a missing-prevalence requirement; E demands the test's components when the LR already compresses them. Below the testing threshold, the workup stops — the LR– did what a highly sensitive test's negative result does: it ruled out (SN-N-OUT).",
    },
  },
  mnemonics: [
    {
      code: "POSITIVE DIVIDES POSITIVES, NEGATIVE DIVIDES NEGATIVES",
      meaning:
        "A KYP ORIGINAL — the 2×2 column rule: LR+ divides the test-POSITIVE column's rates (TP rate ÷ FP rate), LR– divides the test-NEGATIVE column's rates (FN rate ÷ TN rate). The sign of the ratio selects the COLUMN; the disease rows supply the numerator (with disorder) and denominator (without disorder) in every case.",
      memorizes:
        "The rate form of both printed equations — LR+ = TP rate/FP rate and LR– = FN rate/TN rate — without memorizing letters",
      whenToUse:
        "Any stem that prints a 2×2 table and asks for a likelihood ratio: read off the column matching the result's sign and divide top-row rate by bottom-row rate.",
      clinical:
        "The same column rule explains why LRs are prevalence-proof (KYP context): the division uses within-disease-row rates only, so the ratio never meets the population's disease frequency — unlike PPV/NPV.",
    },
    {
      code: "ONE-MINUS MIGRATES OPPOSITE THE SIGN",
      meaning:
        "A KYP ORIGINAL — the mirror rule for the middle fraction of each printed equation: in LR+ the “1 –” sits in the DENOMINATOR (sensitivity/(1 – specificity)); in LR– it sits in the NUMERATOR ((1 – sensitivity)/specificity). The intact, un-complemented statistic is the one whose quality an extreme value certifies.",
      memorizes:
        "Which statistic gets complemented in each formula — the single most-swapped pair on the exam",
      whenToUse:
        "Any “compute the LR” stem handing you sensitivity and specificity: complement the SPECIFICITY for a positive result, the SENSITIVITY for a negative result.",
      clinical:
        "The mirror also encodes the thresholds (KYP context): a shrinking (1 – specificity) inflates LR+ past 10 — a highly specific test; a shrinking (1 – sensitivity) collapses LR– under 0.1 — a highly sensitive test.",
    },
    {
      code: "TEN RULES IN, A TENTH RULES OUT",
      meaning:
        "A KYP ORIGINAL — the printed thresholds with their clinical direction attached: LR+ > 10 indicates a highly specific test, whose positive result multiplies disease odds tenfold-plus — it RULES IN (SP-P-IN, First Aid's own facing-page hook, attributed); LR– < 0.1 indicates a highly sensitive test, whose negative result divides disease odds by tenfold-plus — it RULES OUT (SN-N-OUT, attributed). The numbers and the “highly specific/sensitive test” attributions are the block's printed sentence; the rule-in/rule-out phrasing is KYP's translation.",
      memorizes:
        "Both halves of the printed threshold sentence and which direction each extreme pushes the diagnosis",
      whenToUse:
        "Any “an LR of X means this test is…” stem, and any test-choice question asking which test to order for confirmation (want LR+ > 10) vs exclusion (want LR– < 0.1).",
      clinical:
        "Ordering logic at the bedside (KYP context): to CONFIRM a suspicion, choose the test with the big LR+; to EXCLUDE it, choose the test with the tiny LR– — the ratio form of the SP-P-IN / SN-N-OUT doctrine.",
    },
    {
      code: "PROBABILITY IN, ODDS THROUGH, PROBABILITY OUT",
      meaning:
        "A KYP ORIGINAL — the architecture of the printed chain: enter with a pretest PROBABILITY, pass through ODDS-SPACE (p/(1–p) → × LR → posttest odds), exit with a posttest PROBABILITY (odds/(odds + 1)). The two end conversions are mirrors of each other; only the ×LR multiplication is printed in the block.",
      memorizes:
        "The three-space journey of the block's second rule sentence and both conversion formulas (odds = p/(1–p); p = odds/(odds + 1))",
      whenToUse:
        "Any posttest-probability computation: convert BEFORE multiplying (never multiply a percentage by an LR), and convert back AFTER (never report an odds as a probability).",
      clinical:
        "The same rail chains across sequential tests (KYP context): each new result multiplies the running odds by its own LR — pretest odds × LR₁ × LR₂ = posttest odds — the engine behind multi-test algorithms and the Fagan nomogram.",
    },
  ],
  rapidReview: {
    s30: [
      "LR+ = probability of positive result in patient with disorder ÷ probability of positive result in patient without disorder = sensitivity/(1 – specificity) = TP rate/FP rate",
      "LR– = probability of negative result in patient with disorder ÷ probability of negative result in patient without disorder = (1 – sensitivity)/specificity = FN rate/TN rate",
      "LR+ > 10 indicates a highly specific test (positive result rules disease IN — SP-P-IN)",
      "LR– < 0.1 indicates a highly sensitive test (negative result rules disease OUT — SN-N-OUT)",
      "Pretest odds × LR = posttest odds (multiply by LR+ for a positive result, by LR– for a negative one)",
      "Posttest probability = posttest odds/(posttest odds + 1)",
      "Pretest odds = p/(1–p) — the unprinted mirror of the printed back-conversion (20% → 0.25; 10% → 1:9; 90% → 9:1)",
      "The block prints on book 259 mid, between the Demographic transition block above and the Kaplan-Meier curve block below",
    ],
    m3: [
      "POSITIVE DIVIDES POSITIVES, NEGATIVE DIVIDES NEGATIVES — LR+ = TP rate/FP rate; LR– = FN rate/TN rate (KYP)",
      "ONE-MINUS MIGRATES OPPOSITE THE SIGN — 1 – specificity downstairs in LR+; 1 – sensitivity upstairs in LR– (KYP)",
      "TEN RULES IN, A TENTH RULES OUT — LR+ > 10 highly specific; LR– < 0.1 highly sensitive (KYP phrasing of the printed sentence)",
      "PROBABILITY IN, ODDS THROUGH, PROBABILITY OUT — p → p/(1–p) → × LR → odds → odds/(odds + 1) (KYP)",
    ],
    m10: [
      "Worked chain worth memorizing: pretest probability 20% → odds 0.25 → × LR+ 10 → odds 2.5 → probability ≈ 71%; × LR– 0.1 instead → odds 0.025 → probability ≈ 2.4%",
      "Sensitivity 90% + specificity 90% → LR+ = 0.9/0.1 = 9 (just under the >10 line) and LR– = 0.1/0.9 ≈ 0.11 (just above the <0.1 line) — a test can be strong on both ratios yet cross NEITHER printed threshold",
      "LRs are prevalence-proof (built only from the 2×2 columns — sensitivity and specificity), unlike PPV/NPV which move with prevalence: same test, same LRs, different predictive values in different clinics",
      "LR = 1 leaves odds unchanged — the result is equally likely in diseased and well and adds no information; the printed thresholds are simply the distances from 1 that the exam calls “highly” specific/sensitive",
    ],
  },
  recall: [
    {
      q: "State the LR+ formula in all three printed forms.",
      a: "LR+ = probability of positive result in patient with disorder ÷ probability of positive result in patient without disorder = sensitivity/(1 – specificity) = TP rate/FP rate.",
    },
    {
      q: "State the LR– formula in all three printed forms.",
      a: "LR– = probability of negative result in patient with disorder ÷ probability of negative result in patient without disorder = (1 – sensitivity)/specificity = FN rate/TN rate.",
    },
    {
      q: "What does an LR+ greater than 10 indicate, and what does an LR– less than 0.1 indicate? (the printed sentence)",
      a: "LR+ > 10 indicates a highly specific test, while LR– < 0.1 indicates a highly sensitive test.",
    },
    {
      q: "Recite the block's two printed odds-chain clauses.",
      a: "Pretest odds × LR = posttest odds. Posttest probability = posttest odds/(posttest odds + 1).",
    },
    {
      q: "A disease has a 20% pretest probability and the observed result carries an LR of 10. What is the posttest probability?",
      a: "Pretest odds = 0.2/0.8 = 0.25; posttest odds = 0.25 × 10 = 2.5; posttest probability = 2.5/3.5 ≈ 71%.",
    },
    {
      q: "Same patient, but the result is negative and carries an LR– of 0.1. What is the posttest probability?",
      a: "Posttest odds = 0.25 × 0.1 = 0.025; posttest probability = 0.025/1.025 ≈ 2.4% — the negative result of a highly sensitive test effectively excludes disease.",
    },
    {
      q: "Which column of the 2×2 table does each likelihood ratio divide, and why does that make LRs prevalence-independent?",
      a: "LR+ divides the test-POSITIVE column (TP rate ÷ FP rate); LR– divides the test-NEGATIVE column (FN rate ÷ TN rate). Both rates are computed within disease-status rows (they are sensitivity, specificity, and their complements), so the ratios never involve the population's disease frequency — unlike PPV/NPV, which are built from a single column of raw counts and drift with prevalence.",
    },
    {
      q: "Where does the Likelihood ratio block print on book 259, and what are its two neighboring blocks?",
      a: "The mid portion of book 259 (pdf page 281): the heading “Likelihood ratio” with two stacked-fraction equation rows (LR+ and LR–, three equivalent forms each) and two rule sentences — sitting between the Demographic transition block above (vital-statistics-populations topic) and the Kaplan-Meier curve block below (survival-analysis topic).",
    },
  ],
  related: [
    {
      title: "Quantifying risk — the 2×2 table that supplies the rates",
      note:
        "The rate form of both printed equations (TP rate/FP rate, FN rate/TN rate) is read directly off the quantifying-risk 2×2 grid: this block's rightmost fractions are that page's cells wearing ratio clothes. The grid is the shared denominator of every measure on these facing pages.",
      topicId: "quantifying-risk",
    },
    {
      title: "Diagnostic test performance — sensitivity, specificity, and the predictive values",
      note:
        "The facing page (book 260) defines the four rates the LR formulas consume (sensitivity, specificity, and their complements) and the predictive values LRs improve upon: PPV/NPV shift with prevalence, LRs do not. Its own mnemonics — SN-N-OUT and SP-P-IN — are the attribute hooks the printed thresholds here certify in ratio language.",
      topicId: "diagnostic-test-performance",
    },
    {
      title: "Survival analysis — the block immediately below on the same page",
      note:
        "The Kaplan-Meier curve block opens directly beneath this one on book 259 (the pinned page-split boundary): used to estimate probability of survival over time, with time-to-event data and the log rank test — the epidemiology-and-biostatistics flow continues from posttest odds to survival curves.",
      topicId: "survival-analysis",
    },
    {
      title: "ROC curves, precision, and accuracy — the cutpoint layer",
      note:
        "Every ROC cutpoint choice is a likelihood-ratio statement: sliding the operating point trades the FP rate against the FN rate, and the slope of the ROC curve at any cutpoint IS the likelihood ratio of the result there (KYP context) — cutpoints at the curve's steep upper-left generate the big LR+ and tiny LR– values this block's thresholds celebrate.",
      topicId: "roc-precision-accuracy",
    },
  ],
  crossLinks: [
    {
      subject: "Biostatistics and epidemiology — Bayes' theorem in odds form",
      connection:
        "The printed chain IS the odds form of Bayes' theorem: pretest odds × LR = posttest odds is posterior odds = prior odds × likelihood ratio, with each test result a Bayesian update. The “likelihood” in the ratio's name is the same likelihood as the theorem's — which is why the block sits at the head of the diagnostic-testing sequence.",
    },
    {
      subject: "Diagnostic testing in internal medicine — D-dimer and PE workups",
      connection:
        "The miniCase's scenario is the canonical clinical application taught across Step 1 and Step 2: a Wells-score pretest probability plus the D-dimer's tiny LR– is the standard rule-out pathway for pulmonary embolism — pretest odds × 0.1 collapsing the probability below the imaging threshold. Treadmill stress testing and confirmatory serologies are the LR+ > 10 mirror cases.",
    },
    {
      subject: "Epidemiology and preventive medicine — screening in low-prevalence populations",
      connection:
        "Mass screening confronts low pretest probabilities, where even good tests yield more false positives than true ones (the PPV problem). LRs quantify the rescue: only results with extreme ratios (the >10 and <0.1 printed bands) can move a rare-disease prior across a decision threshold — the arithmetic behind every screening-program guideline.",
    },
    {
      subject: "Biostatistics — probability, odds, and their conversions",
      connection:
        "The chain's unprinted hinge is the probability↔odds conversion the biostatistics pages teach: odds = p/(1–p) and p = odds/(odds + 1). The block prints the second formula explicitly; the first is its algebraic mirror — and the odds ratio of case-control studies (the observational-studies page) is this same odds-space arithmetic applied to exposure instead of test results.",
    },
  ],
};
