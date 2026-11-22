import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 2, topic 9 (pubh9). Source: FULL pdf page 283 /
// book 261 (Part 1) — the topic owns the WHOLE page, which carries TWO blocks:
// (1) "Receiver operating characteristic curve" — the navy MyriadPro-Bold
// block heading (PyMuPDF span color #004b6c) with TWO verbatim body
// paragraphs: "ROC curve demonstrates how well a diagnostic test can
// distinguish between 2 groups (eg, disease vs healthy). Plots the
// true-positive rate (sensitivity) against the false-positive rate
// (1 – specificity)." and "The better performing test will have a higher
// area under the curve (AUC), with the curve closer to the upper left
// corner." — plus the ROC FIGURE (pure vector): a square plot, y-axis label
// "TP rate (sensitivity)" printed ROTATED 90° (reading bottom-to-top),
// x-axis label "FP rate (1 – speciﬁcity)" (with the fi ligature U+FB01 —
// the body text spells "specificity" plain; carried as printed), a "1" at
// the top of the y-axis and a "1" at the right end of the x-axis as the
// ONLY axis numbers (NO origin "0", NO ".5" ticks — pinned by the text
// layer + the vector tick marks + the 200dpi VLM crop; the 120dpi full-page
// VLM pass over-read an origin "0" and is outvoted 3-to-1), and THREE
// traces: the chance DIAGONAL (blue #4d7cbe, DASHED 6-3, origin to top
// right) labeled "No predictive value (AUC = 0.5)" (blue #4d7cbe, printed
// ROTATED ~42° running parallel above the diagonal — PyMuPDF reads it as
// ONE span with dir (0.741, −0.671)), the IDEAL TEST trace (pink/mauve
// #c978a1, DASHED 6-3, rising vertically up the left edge, rounding the
// corner, running along the top to (1,1)) labeled "Ideal test (AUC = 1)"
// (pink #c978a1, HORIZONTAL, at the top of the plot), and the ACTUAL TEST
// curve (gray #939598, SOLID, concave, bowing toward the upper-left
// corner, two bezier segments from the origin to (1,1)) labeled "Actual
// test (0.5 < AUC < 1)" (dark gray #6d6e71, typeset on a CURVED BASELINE
// along the curve — PyMuPDF shows per-character direction vectors rotating
// from ~74° at the "A" of "Actual" to ~32° at the "1)", which is why
// pdftotext shatters it). The plot is shaded: light lavender #f1e6f2
// ABOVE the diagonal, light blue #e7f6fd BELOW it; a small double-headed
// dark-gray arrow (#6d6e71, two collinear 45° shafts with filled heads at
// (429,100)→(462,131) in page coordinates) sits in the wedge between the
// ideal corner trace and the actual curve, marking the AUC gap; the axes
// are tan #a69a84 with tiny end ticks and NO arrowheads; a tiny
// slate-blue Rx-style vector icon decorates the lower right of each
// figure (not redrawn).
// (2) "Precision vs accuracy" — the block heading (navy, same convention)
// with TWO sub-blocks and the FOUR-TARGET FIGURE (pure vector): sub-block
// "Precision (reliability)" (MyriadPro-Semibold #165d7e with FIRST AID'S
// OWN RED LETTERS: the "re" of "Precision" and of "reliability" print in
// red #c04d49, and the "re" of "reproducibility" in the first definition
// line prints in red bold #b82837 — PyMuPDF span colors, carried ATTRIBUTED
// below), lines verbatim: "The consistency and reproducibility of a
// test." / "The absence of random variation in a test." / "Random error ↓
// precision in a test." / "↑ precision → ↓ standard deviation." /
// "↑ precision → ↑ statistical power (1 − β)." (spaced minus U+2212 and β
// as Symbol-font spans — note the EN-DASH U+2013 in "(1 – specificity)"
// vs the MINUS U+2212 in "(1 − β)", both carried as printed); sub-block
// "Accuracy (validity)" with FA's red "A" of "Accuracy" and red "a" of
// "validity": "The closeness of test results to the true values." /
// "The absence of systematic error or bias in a test." / "Systematic
// error ↓ accuracy in a test." The FIGURE prints FOUR targets in ONE
// horizontal row as TWO pairs: "Accuracy" prints TWICE above (centered
// over each pair, with tan bracket connectors dropping to a High/Low word
// above EACH target — left target High, right target Low within both
// pairs) and "Precision" prints TWICE below (brackets rising from a
// High/Low word under each target — the LEFT pair both High, the RIGHT
// pair both Low). Each target = three concentric filled circles (pale tan
// #e6e0d9 outer, darker tan #d5ccc1 middle, olive #b8ae9a bullseye) with
// FIVE teal dart dots (#3a899b, r≈3.5) each: T1 tight cluster centered on
// the bullseye; T2 tight cluster off-center to the upper left (bullseye
// empty); T3 scattered but centered; T4 scattered AND off-center to the
// upper left. So the four combinations are all present: High/High,
// Low/High, High/Low, Low/Low (accuracy word above, precision word
// below, per target).
// CENSUS (pdfimages): ZERO raster images on the page — both figures are
// pure vector line art → both are ORIGINAL_KYP_REDRAW records (sv1 sv2),
// implemented together in ONE registry visual (roc-precision-map,
// RocPrecisionMap in visuals/pubhealth-p9.tsx, viewBox 0 0 1102 1180).
// VLM AVAILABLE this session (glm-4.6v, THREE passes: full page at
// 120dpi + TWO 200dpi crops of the figures, staging-pubh9/vlm-census.txt)
// + a PyMuPDF vector trace (get_drawings + get_text("dict") span colors
// and direction vectors) as programmatic ground truth.
// PRINTED-TEXT QUIRKS carried + documented: (1) "SEC TION II" header-space
// extraction artifact (known, as-is); (2) small-caps artifact
// "EPIDEmIOLOGY AND BIOSTATISTICS" in the running-header banner (this
// page prints the banner ONCE — running header only, no in-body ribbon:
// it is mid-subsection); (3) the ROC figure's ROTATED/CURVED labels
// extract as JUMBLED FRAGMENTS in a jumbled order with the indd footer
// slug interleaved mid-figure — raw fragments "Act"/"ua"/"l te"/"s" +
// "t (0"/".5"/"<"/"UC"/"<A"/"1)" reassemble to "Actual test (0.5 < AUC <
// 1)" (curved baseline) and "No"/"p"/"red"/"ic"/"tiv"/"e"/"va"/"lue"/
// "(AU"/"C="/"0"/".5)" reassemble (reading upward) to "No predictive
// value (AUC = 0.5)" (one rotated span) — the evidence ranges quote the
// fragments in their RAW extraction order and the label identities are
// pinned by the PyMuPDF span read + the VLM passes; (4) the quadrant
// panel's labels INTERLEAVE across the two label groups in the raw layer
// ("Accuracy/High/High/Precision" then, after the indd slug,
// "Accuracy/Low/High/High/Low/Low/Low/Precision") — the per-target
// assignment is pinned by pdftotext -bbox + PyMuPDF word coordinates +
// the VLM crop pass; (5) en-dash vs minus split — "(1 – specificity)"
// (en-dash U+2013, in BOTH the body text and the x-axis label) vs
// "(1 − β)" (minus U+2212); (6) the fi LIGATURE "speciﬁcity" in the
// x-axis label only; (7) C1 control bytes (\x8f \x8e \x90, Wingdings3
// spans) print around every ↑↓→ arrow — stripped for display, arrows
// carried; (8) the "TP rate (sensitivity)" axis label extracts AFTER the
// banner lines and BEFORE the curve fragments (reading-order jumble).
// ADJUDICATIONS (documented in the manifest too): (A) the batch brief
// paraphrased the diagonal's label as "No better than chance
// (AUC = 0.5)" — the PRINT reads "No predictive value (AUC = 0.5)": the
// raw fragments, the PyMuPDF single-span read, and both VLM figure passes
// agree character-for-character, and the phrase is internally consistent
// with the page's vocabulary ("demonstrates how well a diagnostic test
// can distinguish") — brief corrected to print, and the note/visual carry
// "No predictive value (AUC = 0.5)" verbatim; (B) the brief described the
// precision/accuracy panel as a 2×2 — the PRINT arranges the same four
// combinations as ONE horizontal row of four targets in two pairs
// (accuracy High/Low within each pair, precision High pair left / Low
// pair right, "Accuracy" above each pair, "Precision" below each pair);
// the KYP visual re-arranges it as a TRUE 2×2 matrix (accuracy columns ×
// precision rows) — layout is KYP's, every printed label is preserved
// (the print's one-row arrangement is documented in the visual footer);
// (C) the printed axes number only the two "1"s — the KYP redraw adds
// 0/.5/1 ticks for readability, documented on the visual; (D) the brief's
// block description otherwise matched the print exactly (both text blocks
// verbatim; figure labels as expected) — no correction needed.
// PROVENANCE SPLIT: verbatim = both body paragraphs, both sub-blocks'
// eight lines, all figure labels; FA-own = the red-letter highlights
// ("re" ×3, "A"/"a"), the pink/blue/gray trace coloring, the tan/teal
// target palette; KYP-original = the "every cutoff is one point on the
// curve" reading, the AUC-as-ranking interpretation, the
// tight-vs-centered target grammar, the four-question protocol, the exam
// layer, and the three KYP mnemonics ("TRUE UP, FALSE FLAT", "TIGHT =
// PRECISE, CENTERED = ACCURATE", "RANDOM SCATTERS, SYSTEMATIC SHIFTS") —
// every teaching generalization beyond the printed page is flagged as
// KYP context. DrugCards: none — the page prints statistics, not drugs
// (documented as folded-by-absence in the manifest). BOUNDARIES: the
// previous page (pdf 282 / book 260 lower) is the evaluation-of-
// diagnostic-tests page (sensitivity/specificity/PPV/NPV + the cutoff
// distributions — diagnostic-test-performance); the next page (pdf 284 /
// book 262) opens Incidence vs prevalence.

export const rocPrecisionAccuracy: KypUsMLENote = {
  id: "roc-precision-accuracy",
  title: "ROC Curves, Precision, and Accuracy: The Discrimination Plane and the Four Targets",
  subtitle:
    "Book 261 closes the diagnostic-test arc with two figures that look like art but are pure logic. The first is the receiver operating characteristic (ROC) curve: take the sensitivity and 1 – specificity you already know how to compute, and instead of pinning one cutoff, sweep EVERY cutoff at once. Each cutoff lands as one point on a plane whose vertical axis is the true-positive rate and whose horizontal axis is the false-positive rate; the points trace a curve. A useless test cannot beat the diagonal — no predictive value, AUC = 0.5. A perfect test slams the upper left corner — AUC = 1. Every real test lives in between, and the better performing test is the one with the higher area under the curve, its curve closer to the upper left corner. The second figure is a shooting range: four targets, five darts each. Tight darts are precision (reliability) — the consistency and reproducibility of a test, destroyed by random error; centered darts are accuracy (validity) — the closeness of test results to the true values, destroyed by systematic error or bias. The four targets are the four combinations, and the two error families never trade against each other: random error scatters the cluster (↑ standard deviation, ↓ statistical power), systematic error shifts it. One page, two geometries: a curve that ranks tests, and a target that dissects error.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory:
    "Public Health Sciences — test-quality geometry: the receiver operating characteristic curve (TP rate vs FP rate, the chance diagonal at AUC 0.5, the ideal corner at AUC 1, better performing test = higher AUC with the curve closer to the upper left corner) and precision vs accuracy (reliability = consistency and reproducibility, absence of random variation, ↓SD, ↑power 1 − β; validity = closeness to true values, absence of systematic error or bias) with both printed figures — the ROC plane and the four-target panel.",
  difficulty: 2,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 261–261 (Epidemiology and Biostatistics: Receiver operating characteristic curve; Precision vs accuracy)",
  tags: [
    "ROC curve",
    "receiver operating characteristic",
    "area under the curve",
    "AUC",
    "true-positive rate",
    "false-positive rate",
    "sensitivity",
    "specificity",
    "diagnostic test comparison",
    "precision",
    "reliability",
    "accuracy",
    "validity",
    "random error",
    "systematic error",
    "bias",
    "standard deviation",
    "statistical power",
    "epidemiology",
    "biostatistics",
  ],
  core: {
    what:
      "One printed page, carried whole. BLOCK 1 — “Receiver operating characteristic curve”: “ROC curve demonstrates how well a diagnostic test can distinguish between 2 groups (eg, disease vs healthy). Plots the true-positive rate (sensitivity) against the false-positive rate (1 – specificity). The better performing test will have a higher area under the curve (AUC), with the curve closer to the upper left corner.” The printed figure is a square ROC plane: vertical axis “TP rate (sensitivity)”, horizontal axis “FP rate (1 – speciﬁcity)”, a “1” marking the top of the vertical axis and the right end of the horizontal axis (the only axis numbers printed), and three traces — the dashed blue chance diagonal from the origin to the top-right corner labeled “No predictive value (AUC = 0.5)”; the dashed pink ideal-test trace rising straight up the left edge and straight across the top, labeled “Ideal test (AUC = 1)”; and the solid gray actual-test curve bowing toward the upper-left corner, labeled “Actual test (0.5 < AUC < 1)”. BLOCK 2 — “Precision vs accuracy”: “Precision (reliability)” — “The consistency and reproducibility of a test. The absence of random variation in a test. Random error ↓ precision in a test. ↑ precision → ↓ standard deviation. ↑ precision → ↑ statistical power (1 − β).”; “Accuracy (validity)” — “The closeness of test results to the true values. The absence of systematic error or bias in a test. Systematic error ↓ accuracy in a test.” The printed figure shows four targets in one row as two pairs — “Accuracy” printed above each pair (High over the left target, Low over the right) and “Precision” below each pair (the left pair both High, the right pair both Low): tight-and-centered darts (high precision, high accuracy), tight-but-off-center darts (high precision, low accuracy), scattered-but-centered darts (low precision, high accuracy), and scattered-and-off-center darts (low precision, low accuracy).",
    why:
      "This page is the payoff of the diagnostic-test sequence and the foundation of the error taxonomy. Book 260 taught sensitivity and specificity as single numbers for a single cutoff; the ROC curve is what happens when you stop choosing a cutoff and sweep all of them — every (TP rate, FP rate) pair traces the curve, so ONE picture prices a test's entire operating range and lets two tests be compared by area under the curve (AUC) without any argument about which cutoff to use. That is why exam questions about “which test performs better” are ROC questions: the answer is geometric — higher AUC, curve closer to the upper left corner. The precision-vs-accuracy block then splits test quality into two INDEPENDENT axes, and the split is the error taxonomy every bias question runs on: random error (noise) degrades precision — the consistency and reproducibility of a test — which shows up statistically as a wider standard deviation and lost power (1 − β); systematic error (bias) degrades accuracy — the closeness of test results to the true values — by shifting every result the same direction. The four-target figure makes the independence visible: a tight cluster can sit off-center (precise, inaccurate — a calibrated-wrong machine), and a scattered pattern can average the center (accurate on average, imprecise). The dartboard and the ROC plane are the same lesson at two scales: WHERE the results land (accuracy) versus HOW TOGETHER they land (precision).",
    keyIdea:
      "Decode this page in two moves. MOVE 1 — READ THE ROC PLANE. The axes are the give-away: vertical = TRUE-positive rate (sensitivity); horizontal = FALSE-positive rate (1 – specificity). Three landmarks fix everything: the diagonal is the floor — “No predictive value (AUC = 0.5)”, a test no better than a coin flip at separating the two groups; the upper-left corner is the ceiling — “Ideal test (AUC = 1)”, perfect separation; and every real test's curve bows up-left between them — “Actual test (0.5 < AUC < 1)”. Comparison rule, verbatim from the print: “The better performing test will have a higher area under the curve (AUC), with the curve closer to the upper left corner.” (KYP reading: each cutoff is one point on the curve; sweeping the cutoff from loose to strict walks the curve from the bottom-right toward the top-left corner.) MOVE 2 — SPLIT THE ERROR FAMILIES ON THE TARGET. PRECISION (reliability) = “the consistency and reproducibility of a test,” “the absence of random variation” — RANDOM error kills it, so ↑ precision → ↓ standard deviation and ↑ statistical power (1 − β). ACCURACY (validity) = “the closeness of test results to the true values,” “the absence of systematic error or bias” — SYSTEMATIC error kills it. On the dartboard: tightness of the dart cluster = precision; centeredness of the cluster on the bullseye = accuracy. The two are independent — learn to label all four quadrants (tight+centered, tight+off-center, scattered+centered, scattered+off-center) and to name the error that produced each.",
  },
  mechanisms: [
    {
      id: "auc-geometry",
      title:
        "Why the curve hugs the upper left: how sweeping the cutoff traces the ROC plane and prices a test by area",
      context:
        "The printed ROC figure (book 261): TP rate (sensitivity) vs FP rate (1 – specificity), with the chance diagonal, the ideal corner, and the actual-test curve",
      flow: {
        nodes: [
          {
            id: "plane",
            label: "THE PLANE — TP rate up, FP rate across",
            sublabel:
              "Input — the printed axes: the vertical axis is the “TP rate (sensitivity)” and the horizontal axis is the “FP rate (1 – specificity)”. The ROC curve “demonstrates how well a diagnostic test can distinguish between 2 groups (eg, disease vs healthy)” — one plot prices the test's entire ability to separate diseased from healthy, with no single cutoff chosen yet.",
            variant: "input",
          },
          {
            id: "cutoff",
            label: "EVERY CUTOFF IS ONE POINT — sweeping the cutoff walks the curve",
            sublabel:
              "Process — (KYP reading of the plane, not printed text): each decision threshold pairs one sensitivity with one (1 – specificity) — one point. A very loose cutoff calls almost everything positive: TP rate → 1 but FP rate → 1 (bottom-right region). A very strict cutoff calls almost nothing positive: both rates → 0 (the origin). Moving the cutoff from loose to strict walks the point along the curve from the bottom right toward the upper left — the curve IS the set of all possible operating points.",
            variant: "process",
          },
          {
            id: "diagonal",
            label: "THE FLOOR — the chance diagonal, “No predictive value (AUC = 0.5)”",
            sublabel:
              "Process — the dashed blue diagonal from the origin to the top-right corner is the reference a test must beat: a test ON the line distinguishes the two groups no better than chance — its label, verbatim: “No predictive value (AUC = 0.5)”. The area under a diagonal across a unit square is exactly half of it, so AUC = 0.5 is the numerical signature of zero discrimination.",
            variant: "process",
          },
          {
            id: "ideal",
            label: "THE CEILING — the ideal corner, “Ideal test (AUC = 1)”",
            sublabel:
              "Process — the dashed pink trace rising straight up the left edge and straight across the top is the perfect test: it achieves TP rate = 1 at FP rate = 0 — every diseased person positive, no healthy person falsely positive. The area under that path is the entire unit square: “Ideal test (AUC = 1)” — perfect separation of the two groups.",
            variant: "process",
          },
          {
            id: "actual",
            label: "THE REAL TEST — “Actual test (0.5 < AUC < 1)”, bowing toward the upper left corner",
            sublabel:
              "Process — the solid gray concave curve is any real test: it rises steeply (gains sensitivity cheaply at first, adding few false positives), then flattens (each further gain in sensitivity costs more false positives). Its label, verbatim: “Actual test (0.5 < AUC < 1)” — above the diagonal, short of the corner. The print's printed comparison rule: “The better performing test will have a higher area under the curve (AUC), with the curve closer to the upper left corner.”",
            variant: "process",
          },
          {
            id: "readout",
            label: "THE READOUT — AUC is the single-number verdict",
            sublabel:
              "Output — comparing tests never requires agreeing on a cutoff: the whole curve is summarized by the area under it. AUC 0.5 = no predictive value (the diagonal); AUC 1 = the ideal test (the corner); everything real lies between, and the closer the curve runs to the upper left corner, the higher the AUC and the better the test. (KYP context: AUC can also be read as the probability that the test scores a random diseased person above a random healthy person — a ranking interpretation the printed page does not state.)",
            variant: "output",
          },
        ],
        edges: [
          { from: "plane", to: "cutoff", label: "one cutoff = one (TP rate, FP rate) point →" },
          { from: "cutoff", to: "diagonal", label: "a test no better than chance sits on the diagonal" },
          { from: "cutoff", to: "ideal", label: "a perfect test takes the corner path" },
          { from: "cutoff", to: "actual", label: "real tests bow up-left between them" },
          { from: "diagonal", to: "readout", label: "AUC 0.5 = floor" },
          { from: "ideal", to: "readout", label: "AUC 1 = ceiling" },
          { from: "actual", to: "readout", label: "higher AUC, closer to the upper left corner = better" },
        ],
      },
    },
    {
      id: "error-type-split",
      title:
        "Random scatters, systematic shifts: how the two error families split precision from accuracy on the four targets",
      context:
        "The printed Precision vs accuracy block + four-target figure (book 261): reliability vs validity, random vs systematic error",
      flow: {
        nodes: [
          {
            id: "measure",
            label: "THE MEASUREMENT — a test fired again and again at a true value",
            sublabel:
              "Input — picture the printed targets: each dart is one measurement, the bullseye is the true value. Two independent questions describe the pattern: how TIGHTLY the darts cluster, and whether the cluster is CENTERED on the bullseye. The printed block names the two qualities: “Precision (reliability)” and “Accuracy (validity)”.",
            variant: "input",
          },
          {
            id: "random",
            label: "RANDOM ERROR → ↓ PRECISION — the cluster scatters",
            sublabel:
              "Process — “Random error ↓ precision in a test.” Precision is “the consistency and reproducibility of a test,” “the absence of random variation in a test.” Noise scatters the darts around their own center: repeat the test and get a different answer each time. The statistical consequences are printed: “↑ precision → ↓ standard deviation.” and “↑ precision → ↑ statistical power (1 − β).” — tight results have narrow spread, and narrow spread makes it easier for a study to detect a real effect.",
            variant: "process",
          },
          {
            id: "systematic",
            label: "SYSTEMATIC ERROR → ↓ ACCURACY — the cluster shifts",
            sublabel:
              "Process — “Systematic error ↓ accuracy in a test.” Accuracy is “the closeness of test results to the true values,” “the absence of systematic error or bias in a test.” Bias shifts EVERY dart the same direction: repeat the test and get the same wrong answer each time — perfectly consistent, still wrong. Random error and systematic error are independent families: fixing one never fixes the other.",
            variant: "process",
          },
          {
            id: "quadrants",
            label: "THE FOUR TARGETS — every combination exists and is examinable",
            sublabel:
              "Process — the printed figure's four targets (drawn as one row of two pairs in the book; re-arranged as a 2×2 in the KYP visual): TIGHT + CENTERED = high precision, high accuracy — the ideal; TIGHT + OFF-CENTER = high precision, low accuracy — systematic error only (a miscalibrated device); SCATTERED + CENTERED = low precision, high accuracy — random error only (results average the truth but no single result is trustworthy); SCATTERED + OFF-CENTER = low precision, low accuracy — both error families at once.",
            variant: "process",
          },
          {
            id: "verdict",
            label: "THE VERDICT — tightness and centeredness are graded independently",
            sublabel:
              "Output — any stem that describes repeat measurements routes through two questions: do the repeats AGREE with each other (precision — random error, standard deviation, power) and do they AGREE WITH THE TRUTH (accuracy — systematic error, bias)? The four targets are the answer key, and the error family named in the stem tells you which of the two qualities was lost.",
            variant: "output",
          },
        ],
        edges: [
          { from: "measure", to: "random", label: "noise scatters the darts →" },
          { from: "measure", to: "systematic", label: "bias shifts the darts →" },
          { from: "random", to: "quadrants", label: "scattered = imprecise (↓ power, ↑ SD)" },
          { from: "systematic", to: "quadrants", label: "off-center = inaccurate" },
          { from: "quadrants", to: "verdict", label: "label all four combinations" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "roc-precision-map",
      title:
        "The ROC plane and the four precision/accuracy targets (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 261's two figures. TOP — the ROC plane redrawn: vertical axis “TP rate (sensitivity)”, horizontal axis “FP rate (1 – specificity)”, the dashed chance diagonal labeled “No predictive value (AUC = 0.5)”, the dashed ideal corner trace labeled “Ideal test (AUC = 1)”, the solid actual-test curve labeled “Actual test (0.5 < AUC < 1)” bowing toward the upper left corner, the area under the actual curve shaded as the AUC, a double-headed “AUC gap” arrow between the ideal trace and the actual curve (redrawn from the print's annotation), and the printed comparison rule. BOTTOM — the printed four-target panel re-arranged as a true 2×2: accuracy High/Low columns × precision High/Low rows, each cell a three-ring target with five darts in the printed pattern, with the random-error and systematic-error annotations on the row/column where they strike, and both sub-blocks' printed definition and arrow lines carried verbatim.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 283 — both figures are pure vector line art, so both are ORIGINAL KYP REDRAW records implemented in ONE registry visual (roc-precision-map, RocPrecisionMap in visuals/pubhealth-p9.tsx). The geometry was pinned three ways before redrawing: the raw text layer, a PyMuPDF vector trace (exact stroke colors, dash patterns, bezier control points, span colors, and per-character rotation vectors), and a three-pass VLM read (full page at 120dpi + two 200dpi figure crops, staging-pubh9/vlm-census.txt). Adjudications drawn exactly as printed: the diagonal reads “No predictive value (AUC = 0.5)” (the batch brief's paraphrase “No better than chance” is corrected to print — raw fragments, PyMuPDF's single-span read, and both VLM figure passes agree character-for-character); the print draws the four targets as ONE row of two pairs with “Accuracy” above each pair and “Precision” below — the KYP visual re-arranges the same four combinations as a 2×2 matrix (layout KYP's, every printed label preserved, the print's arrangement documented in the visual footer); the printed axes number only two “1”s (top of the y-axis, right end of the x-axis) — the KYP redraw adds 0/.5/1 ticks for readability, flagged on the visual. First Aid's red-letter highlights (“re” in Precision/reliability/reproducibility; “A”/“a” in Accuracy/validity) are carried attributed.",
    },
    {
      kind: "text",
      title:
        "Book 261 — the printed Receiver operating characteristic curve paragraph, carried verbatim",
      body: [
        "ROC curve demonstrates how well a diagnostic test can distinguish between 2 groups (eg, disease vs healthy). Plots the true-positive rate (sensitivity) against the false-positive rate (1 – specificity).",
        "The better performing test will have a higher area under the curve (AUC), with the curve closer to the upper left corner.",
      ],
    },
    {
      kind: "table",
      title:
        "Book 261 — the printed Precision vs accuracy block, carried verbatim (both sub-blocks, PRINTED line order)",
      intro:
        "The page's second block: two sub-blocks, each with two definition lines and (for precision) three consequence lines. First Aid highlights its own memory hooks in RED in this block (PyMuPDF span colors #c04d49 / #b82837): the “re” of “Precision,” the “re” of “reliability,” and the “re” of “reproducibility” print in red — linking pREcision = REliability = REproducibility — and the “A” of “Accuracy” with the “a” of “validity” print in red, linking Accuracy = vAlidity. These are First Aid's own, carried attributed. The “(1 − β)” prints with a true minus sign (U+2212) while “(1 – specificity)” prints with an en dash (U+2013) — both carried as printed; the ↑/↓/→ arrows print as Wingdings glyphs wrapped in stray C1 control bytes (stripped here, arrows carried).",
      columns: ["SUB-BLOCK", "PRINTED LINES (verbatim, printed order)"],
      rows: [
        [
          "Precision (reliability)",
          "The consistency and reproducibility of a test. The absence of random variation in a test. Random error ↓ precision in a test. ↑ precision → ↓ standard deviation. ↑ precision → ↑ statistical power (1 − β).",
        ],
        [
          "Accuracy (validity)",
          "The closeness of test results to the true values. The absence of systematic error or bias in a test. Systematic error ↓ accuracy in a test.",
        ],
      ],
      caption:
        "Verbatim carry, documented: the two sub-block titles print in MyriadPro-Semibold dark blue with First Aid's red letters (“re” ×2 in the precision title, “A” and “a” in the accuracy title — VLM-confirmed and PyMuPDF-pinned, carried attributed, not KYP's); the definition lines print in black serif body text; the “re” of “reproducibility” is the only red letter inside a body line (red bold). The five arrow lines are the block's exam core: random error is the precision-killer, systematic error the accuracy-killer, and ↑ precision buys BOTH a narrower standard deviation AND more statistical power (1 − β).",
    },
    {
      kind: "list",
      title:
        "The decoder — five landmarks on the ROC plane, then the two error families (KYP's reading of the page)",
      intro:
        "Every ROC question and every precision/accuracy question on this page reduces to these seven facts. The first five are the printed plane; the last two are the printed error split.",
      items: [
        {
          lead: "LANDMARK 1 — THE AXES: true up, false flat",
          text: "The vertical axis is the TP rate (sensitivity); the horizontal axis is the FP rate (1 – specificity). The trap-proofing: the horizontal axis is NOT specificity — it is one minus specificity, so the plot's right edge means all false positives. (KYP hook: TRUE UP, FALSE FLAT.)",
        },
        {
          lead: "LANDMARK 2 — THE DIAGONAL: “No predictive value (AUC = 0.5)”",
          text: "The dashed diagonal from (0,0) to (1,1) is the chance line. A test whose curve lies ON it “demonstrates” nothing — it distinguishes the two groups no better than a coin flip, and the area under a diagonal of the unit square is 0.5. The printed label, verbatim: “No predictive value (AUC = 0.5)” (dashed blue in the print).",
        },
        {
          lead: "LANDMARK 3 — THE IDEAL CORNER: “Ideal test (AUC = 1)”",
          text: "The perfect test rises straight up the left edge (TP rate → 1 at FP rate 0) and runs straight across the top — the printed dashed pink corner trace, labeled “Ideal test (AUC = 1)”. Area under it = the whole square = 1: every diseased person ranked above every healthy person.",
        },
        {
          lead: "LANDMARK 4 — THE ACTUAL CURVE: “Actual test (0.5 < AUC < 1)”",
          text: "Every real test bows up-left between the two references — steep rise (sensitivity gained cheaply), then flattening (each extra bit of sensitivity costs more false positives). Printed label, verbatim: “Actual test (0.5 < AUC < 1)” — the print sets this label on a curved baseline along the gray curve, which is why the text layer shatters it into fragments.",
        },
        {
          lead: "LANDMARK 5 — THE COMPARISON RULE: higher AUC, closer to the upper left corner",
          text: "The printed sentence: “The better performing test will have a higher area under the curve (AUC), with the curve closer to the upper left corner.” Two tests on one plot need no cutoff debate — the curve nearer the upper left corner wins, and its AUC is the number that says so.",
        },
        {
          lead: "ERROR FAMILY 1 — RANDOM ERROR → ↓ PRECISION (reliability)",
          text: "“Random error ↓ precision in a test.” Precision = “the consistency and reproducibility of a test,” “the absence of random variation in a test.” Consequences (printed): “↑ precision → ↓ standard deviation.” and “↑ precision → ↑ statistical power (1 − β).” On the target: the darts scatter — the cluster is loose even if its center is true.",
        },
        {
          lead: "ERROR FAMILY 2 — SYSTEMATIC ERROR → ↓ ACCURACY (validity)",
          text: "“Systematic error ↓ accuracy in a test.” Accuracy = “the closeness of test results to the true values,” “the absence of systematic error or bias in a test.” On the target: the whole cluster shifts off the bullseye — every dart wrong in the SAME direction, even if they are tightly grouped. Bias is the clinical name for this error family.",
        },
      ],
    },
    {
      kind: "steps",
      title:
        "Answering any ROC or precision/accuracy stem in four questions",
      intro:
        "The ordered reading path for both figures — apply to any vignette the exam builds from this page, printed on book 261 or not.",
      steps: [
        {
          label: "QUESTION 1 — WHICH AXIS IS WHICH?",
          detail:
            "Confirm the plane before reading any curve: vertical = true-positive rate (sensitivity); horizontal = false-positive rate (1 – specificity). If a stem says a curve “approaches the upper right corner,” that is the WORST region (all false positives) — the good corner is the upper LEFT.",
        },
        {
          label: "QUESTION 2 — WHERE DOES THE CURVE SIT RELATIVE TO THE DIAGONAL?",
          detail:
            "On the diagonal = AUC 0.5, no predictive value. Above it (bowing toward the upper left corner) = 0.5 < AUC < 1, a real test. Hugging the upper left corner = approaching the ideal test, AUC → 1. Below the diagonal would mean a test worse than chance (KYP context — not printed; flip its labels and it becomes better than chance).",
        },
        {
          label: "QUESTION 3 — COMPARING TESTS: WHOSE AREA IS BIGGER?",
          detail:
            "The printed rule: “The better performing test will have a higher area under the curve (AUC), with the curve closer to the upper left corner.” Read the two curves' separation from the corner — no cutoff, no sensitivity/specificity arithmetic needed. If numbers are given, order them: 0.5 = chance, 1 = ideal, everything real between.",
        },
        {
          label: "QUESTION 4 — PRECISION/ACCURACY STEMS: WHICH ERROR FAMILY IS NAMED?",
          detail:
            "Route the error to its victim: random error / noise / inconsistent repeats / wide standard deviation / lost power → PRECISION (reliability). Systematic error / bias / miscalibration / consistently-off-by-the-same-amount → ACCURACY (validity). Then attach the printed consequences: ↑ precision → ↓ SD and ↑ power (1 − β); systematic error → results not close to the true values. If the stem shows darts or repeated measurements, grade tightness (precision) and centeredness (accuracy) separately.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Precision vs accuracy — the exam's favorite see-saw, in the page's own words",
      intro:
        "The block's two sub-blocks are mirror images: two names, two synonyms, two error families, two statistical shadows. Every distinguishing feature follows from which error family is at work.",
      columns: [
        "Precision (reliability) — the RANDOM-error axis",
        "Accuracy (validity) — the SYSTEMATIC-error axis",
      ],
      rows: [
        {
          label: "Synonym printed in the title",
          a: "Reliability — “Precision (reliability)” (First Aid's red “re” letters tie pREcision = REliability = REproducibility)",
          b: "Validity — “Accuracy (validity)” (First Aid's red “A”/“a” letters tie Accuracy = vAlidity)",
        },
        {
          label: "Definition (verbatim)",
          a: "“The consistency and reproducibility of a test.”",
          b: "“The closeness of test results to the true values.”",
        },
        {
          label: "What is absent (verbatim)",
          a: "“The absence of random variation in a test.”",
          b: "“The absence of systematic error or bias in a test.”",
        },
        {
          label: "The error that destroys it (verbatim)",
          a: "“Random error ↓ precision in a test.”",
          b: "“Systematic error ↓ accuracy in a test.”",
        },
        {
          label: "Statistical shadows (verbatim)",
          a: "“↑ precision → ↓ standard deviation.” “↑ precision → ↑ statistical power (1 − β).” — tight results have narrow spread and find real effects",
          b: "No printed statistical shadow — bias displaces results from the truth; the damage is being wrong on average, not being variable (KYP: a biased but precise study can be consistently, confidently wrong)",
        },
        {
          label: "On the printed target",
          a: "TIGHTNESS of the dart cluster — scattered darts = low precision regardless of where they scatter",
          b: "CENTEREDNESS of the cluster on the bullseye — an off-center cluster = low accuracy even when the darts are tight",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — three stem shapes and one calibration twist",
      body:
        "SHAPE 1 — THE CURVE COMPARISON: two tests plotted on one ROC plane (or two AUCs given); the stem asks which performs better — answer with the printed rule: the better performing test has the higher AUC, its curve closer to the upper left corner. Distractors quote single points (“test A is more sensitive at cutoff X”) — a single cutoff cannot summarize a curve. SHAPE 2 — THE AUC NUMBER: an AUC of 0.5 = no predictive value (chance); 1.0 = the ideal test; anything between is a real test. Distractors conflate AUC with sensitivity, specificity, PPV, or “percent correct.” SHAPE 3 — THE DEVICE VIGNETTE: a machine/assay/observer gives repeat measurements — consistently the SAME but WRONG value (tight, off-center) = precise, NOT accurate — systematic error; WIDELY VARYING values around the true value (scattered, centered) = accurate on average, NOT precise — random error. THE CALIBRATION TWIST: a miscalibrated sphygmomanometer reading 10 mmHg high every time is the classic precise-but-inaccurate device; expect the follow-up to ask which error family (systematic) or which quality is preserved (precision/reliability — and its ↓SD, ↑power consequences). Also expect the power line verbatim: ↑ precision → ↑ statistical power (1 − β).",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own red letters — printed in the block, carried attributed",
      body:
        "The page carries its own memory furniture in RED (PyMuPDF span colors, VLM-confirmed at 120 and 200dpi, staging-pubh9/vlm-census.txt) — these are the source's hooks, carried VERBATIM and ATTRIBUTED, not KYP's: the “re” of “Precision,” the “re” of “reliability,” and the “re” of “reproducibility” (red bold) — First Aid's own letter-hook that pREcision = REliability = REproducibility, all destroyed by Random error; and the “A” of “Accuracy” with the “a” of “validity” — the hook that Accuracy = vAlidity, both destroyed by systematic error. The three KYP originals in the Memory section are marked as such: “TRUE UP, FALSE FLAT” (the ROC axes), “TIGHT = PRECISE, CENTERED = ACCURATE” (the target reading), and “RANDOM SCATTERS, SYSTEMATIC SHIFTS” (the error families). No margin mnemonics print anywhere on pdf 283 (pdfimages + VLM census).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The page's clinical anchors — where ROC curves and precision/accuracy appear on the wards",
      intro:
        "Both figures are working clinical tools, not exam abstractions; these are the anchor settings the exam borrows (KYP context — the printed page itself is method-level).",
      items: [
        {
          lead: "THE ROC ANCHOR — comparing biomarkers head-to-head",
          text: "Whenever a new assay must beat an old one (a novel tumor marker vs CA 19-9, a high-sensitivity troponin vs a conventional assay), the comparison is an ROC curve: each assay's curve on the same plane, the winner the one closer to the upper left corner with the higher AUC. The printed rule — “The better performing test will have a higher area under the curve (AUC), with the curve closer to the upper left corner” — is the sentence the vignette is built to test.",
        },
        {
          lead: "THE PRECISION ANCHOR — assay reproducibility in the lab",
          text: "A lab runs the same sample twice: agreement between runs is precision (reliability). Random error — pipetting noise, instrument jitter — degrades it, and the printed consequences follow: imprecise assays have a wider standard deviation and studies built on them lose statistical power (1 − β). Repeat-measurement stems (“the assay returns 4.1, 4.3, 3.9, 4.2 mEq/L on one sample”) are precision questions.",
        },
        {
          lead: "THE ACCURACY ANCHOR — calibration and bias at the bedside",
          text: "A cuff that reads 10 mmHg high on every patient, a scale zeroed wrong, an observer who always rounds up: systematic error shifts every result the same direction — “Systematic error ↓ accuracy in a test.” The device can be perfectly reliable (identical readings every time) and still invalid, because “the closeness of test results to the true values” is what accuracy means.",
        },
        {
          lead: "THE BOUNDARY — what this page is NOT",
          text:
            "The single-cutoff arithmetic — sensitivity = TP/(TP+FN), specificity, PPV, NPV, and the cutoff trade-off between two overlapping distributions — is the PREVIOUS page (book 260, diagnostic-test-performance). Likelihood ratios (book 259) are the one-point version of this plane: LR+ = sensitivity/(1 – specificity) = TP rate/FP rate, exactly the ROC axes as a single number. This page adds the whole-curve view and the error taxonomy; it does not re-derive the 2×2 table (KYP framing of the chapter's structure).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "Two serum biomarkers for pancreatic cancer are compared on one ROC plot: biomarker A's curve rises steeply toward the upper left corner (AUC 0.91); biomarker B's curve runs just above the diagonal (AUC 0.70). The study concludes biomarker A is the better performing test.",
        discriminator:
          "The curve closer to the upper left corner with the higher AUC — the printed comparison rule, quoted almost verbatim by the stem",
        concept: "ROC curve comparison by area under the curve",
        answer:
          "Correct by the printed rule: “The better performing test will have a higher area under the curve (AUC), with the curve closer to the upper left corner.” AUC 0.91 vs 0.70 means biomarker A distinguishes diseased from healthy groups better across ALL cutoffs at once.",
      },
      {
        stem: "A new screening test's ROC curve lies exactly on the diagonal from (0,0) to (1,1); its developers report it is cheap and fast. The reviewing statistician notes the test adds nothing to clinical assessment.",
        discriminator:
          "A curve ON the chance diagonal — the printed label for this position is “No predictive value (AUC = 0.5)”",
        concept: "The chance diagonal and AUC = 0.5",
        answer:
          "A test on the diagonal distinguishes the two groups no better than chance — no predictive value, AUC = 0.5. Speed and cost cannot rescue a test that fails to demonstrate any ability to separate disease from healthy.",
      },
      {
        stem: "A glucometer is tested against a reference laboratory method: on 20 repeat measurements of the same control sample it returns 148, 147, 148, 149, 147 mg/dL — nearly identical every time — while the reference value is 126 mg/dL.",
        discriminator:
          "Tight cluster (consistent, reproducible) parked far from the true value — the tight-but-off-center target",
        concept: "Precision preserved, accuracy lost — systematic error",
        answer:
          "The device is PRECISE (reliable): “the consistency and reproducibility of a test” with “the absence of random variation.” It is NOT accurate (not valid): results are not close to the true values, because systematic error (miscalibration) shifts every reading the same direction — “Systematic error ↓ accuracy in a test.”",
      },
      {
        stem: "A research assistant measures the same blood sample on a bench analyzer five times and gets 118, 137, 125, 131, 122 mg/dL; the reference value is 126 mg/dL. The lab director is asked what the runs demonstrate about the analyzer and what a study using it would lose.",
        discriminator:
          "Scattered readings whose mean sits on the true value — the scattered-but-centered target; the follow-up asks for the consequences",
        concept: "Accuracy on average, precision lost — random error, ↓SD/↑power line",
        answer:
          "The analyzer is accurate on average (results cluster around the true value) but NOT precise — random error produces the variation. The printed consequences run backwards from precision: imprecision means a wider standard deviation, and because “↑ precision → ↑ statistical power (1 − β),” a study using this analyzer loses power to detect real effects.",
      },
    ],
    traps: [
      {
        a: "Precision (reliability) — consistency, reproducibility, absence of random variation",
        b: "Accuracy (validity) — closeness to the true values, absence of systematic error or bias",
        whyConfused:
          "In everyday English the words are interchangeable; both sound like “quality,” and the classic device vignette (consistent but wrong) deliberately satisfies one while violating the other",
        keyDifference:
          "Ask what the results are compared AGAINST: each other (do repeats agree?) = precision; the truth (do results land on the true value?) = accuracy. Random error is the precision-killer; systematic error is the accuracy-killer",
        clue:
          "“Consistent,” “reproducible,” “same reading every time,” “↓ standard deviation,” “↑ power” → precision. “Close to the true value,” “calibrated,” “bias,” “systematically 10 high” → accuracy.",
      },
      {
        a: "The upper LEFT corner — TP rate 1 at FP rate 0, “Ideal test (AUC = 1)”",
        b: "The upper RIGHT corner — TP rate 1 at FP rate 1, where a no-threshold test calls everyone positive",
        whyConfused:
          "Both corners sit at the TOP of the plot; stems that say a curve “approaches the top of the graph” are ambiguous on purpose, and the x-axis is 1 – specificity (backwards from intuition)",
        keyDifference:
          "The horizontal axis is the FALSE-positive rate (1 – specificity), so the LEFT edge means no false positives and the RIGHT edge means all false positives. The ideal test takes the left edge to the top; the diagonal ends at the top RIGHT",
        clue:
          "TRUE UP, FALSE FLAT (KYP): sensitivity climbs, 1 – specificity runs across — so the winning corner is upper LEFT, and the printed rule says the better curve runs “closer to the upper left corner.”",
      },
      {
        a: "AUC — the area under the whole ROC curve, a cutoff-free summary (0.5 = chance, 1 = ideal)",
        b: "Sensitivity or specificity at one chosen cutoff — single points on the curve",
        whyConfused:
          "Both are numbers that sound like “how good is the test,” and AUC values (0.7–0.9) sit in the same numeric range as sensitivities/specificities",
        keyDifference:
          "AUC prices the test across EVERY cutoff at once; sensitivity/specificity price ONE operating point. A test can have a high AUC and a poorly chosen cutoff (and vice versa a modest AUC with a well-chosen point for your purpose)",
        clue:
          "If the stem gives ONE number for a curve comparison, check whether it is an AUC (“area under the curve”) before reading it as a sensitivity; if it gives a cutoff, you are pricing a point, not the curve.",
      },
      {
        a: "“↑ precision → ↓ standard deviation” and “↑ precision → ↑ statistical power (1 − β)”",
        b: "“Precision improves accuracy” — a statement the page never makes",
        whyConfused:
          "It feels like a more precise test must be more accurate; the four-target figure exists precisely to kill this inference",
        keyDifference:
          "Precision and accuracy are INDEPENDENT: a tight cluster can be off-center (precise, inaccurate — systematic error intact) and a loose cluster can be centered (accurate on average, imprecise). The printed consequences of precision are statistical (↓ SD, ↑ power), not truth-ward",
        clue:
          "Choose the printed consequence line that matches the stem's question: repeat-agreement questions → ↓SD/↑power; truth-closeness questions → systematic error and bias.",
      },
    ],
    pivots: [
      {
        lookAlike: "A curve-description question: “closer to the upper left corner” vs “above the diagonal” vs “parallel to the x-axis”",
        differentiator:
          "Locate the curve against the three printed landmarks first, then answer",
        correctPath:
          "On the diagonal = AUC 0.5, no predictive value; bowing up-left between diagonal and corner = 0.5 < AUC < 1 (a real test); hugging the left-then-top corner path = approaching the ideal test, AUC 1. Better performer = higher AUC, closer to the upper left corner.",
      },
      {
        lookAlike: "Synonym swaps in stems: “reliable,” “reproducible,” “valid,” “unbiased”",
        differentiator:
          "Translate the synonym to its printed pairing before choosing an answer",
        correctPath:
          "Reliable/reproducible/consistent → PRECISION (reliability); the page's red-letter hooks: pREcision = REliability = REproducibility. Valid/unbiased/close-to-truth → ACCURACY (validity): Accuracy = vAlidity. Then route the named error: random → precision; systematic/bias → accuracy.",
      },
      {
        lookAlike: "A device that is consistent — is the question asking for praise or for fault?",
        differentiator:
          "Check whether the stem also tells you where the readings sit relative to the true value",
        correctPath:
          "Consistent AND on the true value = precise and accurate (the ideal target). Consistent but off by the same amount every time = precise, inaccurate — systematic error (miscalibration); fix the calibration. Inconsistent but centered = imprecise, accurate on average — random error; expect ↓ power (1 − β) in any study built on it.",
      },
    ],
    miniCase: {
      vignette:
        "A translational lab develops a serum microRNA panel for detecting pancreatic cancer and compares it with CA 19-9 on the same case-control set. On the ROC plot, the microRNA panel's curve rises steeply toward the upper left corner and levels off along the top, with an AUC of 0.93; the CA 19-9 curve runs closer to the diagonal, with an AUC of 0.68. A fellow reviewing the abstract asks what the geometry of the two curves demonstrates.",
      question:
        "Which of the following best interprets the ROC findings for the microRNA panel?",
      options: [
        {
          label: "A",
          text: "The microRNA panel distinguishes diseased from healthy groups better than CA 19-9 across all cutoffs, because its curve lies closer to the upper left corner and its area under the curve is higher",
          correct: true,
          why: "CORRECT — this is the printed rule verbatim: “The better performing test will have a higher area under the curve (AUC), with the curve closer to the upper left corner.” The ROC curve “demonstrates how well a diagnostic test can distinguish between 2 groups (eg, disease vs healthy),” and AUC 0.93 vs 0.68 prices the whole curve — every operating point at once — with no cutoff debate.",
        },
        {
          label: "B",
          text: "The microRNA panel is 93% sensitive at every cutoff, since its AUC is 0.93",
          why: "TEMPTING but wrong — the AUC is the AREA under the curve, a cutoff-free summary of discrimination between 0.5 (chance) and 1 (ideal), not a sensitivity. Sensitivity is the TP rate at ONE chosen cutoff — one point on the curve — and it changes as the cutoff moves.",
        },
        {
          label: "C",
          text: "CA 19-9's curve lying closer to the diagonal means it is more specific, because the diagonal represents maximal specificity",
          why: "WRONG on both counts — the diagonal is the chance line: “No predictive value (AUC = 0.5),” a test no better than a coin flip at separating the groups. And specificity is not read off the diagonal; the horizontal axis is the FALSE-positive rate (1 – specificity), so maximal specificity is the LEFT edge of the plot.",
        },
        {
          label: "D",
          text: "The microRNA panel's steep rise means it gains specificity cheaply at first, with each further gain costing more false positives",
          why: "CLOSE but inverted — the steep initial rise means the curve gains SENSITIVITY (the vertical axis, the true-positive rate) while the false-positive rate is still near zero; the flattening later means each additional bit of sensitivity costs more false positives. As written, it swaps the axis being gained.",
        },
        {
          label: "E",
          text: "An AUC of 0.68 means CA 19-9 correctly identifies 68% of healthy individuals as negative",
          why: "WRONG metric — that describes a negative predictive value or specificity-style proportion at a single cutoff, not the AUC. The AUC of 0.68 means CA 19-9 retains real but modest discrimination (well above the 0.5 chance floor, far below the ideal 1.0).",
        },
      ],
      reasoning:
        "The question tests the printed comparison rule. The ROC plane plots the true-positive rate (sensitivity) against the false-positive rate (1 – specificity), and a test's whole operating range is its curve: the diagonal is the floor (no predictive value, AUC 0.5), the upper-left corner path is the ceiling (ideal test, AUC 1), and every real test bows up-left between them. The microRNA panel's curve (AUC 0.93, hugging the corner) dominates CA 19-9's (AUC 0.68, near the diagonal), so it is the better performing test at EVERY cutoff — the exact sentence the book prints. Option B conflates AUC with a point sensitivity; option C misreads the diagonal as a specificity landmark (it is the chance line) and the axes (left = no false positives); option D swaps which axis the steep rise gains; option E reads the AUC as a single-cutoff proportion. TRUE UP, FALSE FLAT, then the corner rule (KYP).",
    },
  },
  mnemonics: [
    {
      code: "pREcision = REliability = REproducibility · Accuracy = vAlidity",
      meaning:
        "FIRST AID'S OWN red-letter hooks, printed in red in the block (carried verbatim, attributed): the “re” of “Precision,” of “reliability,” and of “reproducibility” print in red — one letter-cluster tying the three words together; the “A” of “Accuracy” and the “a” of “validity” print in red, tying that pair. Precision is reliability (consistency, reproducibility); accuracy is validity (closeness to truth).",
      memorizes:
        "The two title pairings of the printed block — which synonym goes with which quality",
      whenToUse:
        "Any stem that swaps in “reliable/reproducible” or “valid/unbiased” for precision or accuracy; translate the synonym through the red-letter pairing before answering.",
      clinical:
        "Lab medicine uses the same pairs (KYP context): assay precision = reproducibility across runs; assay accuracy = agreement with a reference method (validity).",
    },
    {
      code: "TRUE UP, FALSE FLAT",
      meaning:
        "A KYP ORIGINAL — the ROC axes: the TRUE-positive rate (sensitivity) climbs the vertical axis (UP); the FALSE-positive rate (1 – specificity) runs FLAT along the horizontal axis. Because the horizontal axis is one MINUS specificity, the plot's left edge = no false positives and the winning corner is the upper LEFT.",
      memorizes:
        "Which axis is which on the ROC plane, and why the ideal corner is upper left — the axis orientation that every ROC question silently tests",
      whenToUse:
        "Any ROC stem: orient the plane first (TRUE UP, FALSE FLAT), then place the curve against the three landmarks (diagonal 0.5, corner 1, curve between).",
      clinical:
        "The same orientation prices every biomarker comparison (KYP context): a curve reaching TP rate 1 at FP rate near 0 — the upper left corner — is a test that catches every case with almost no false alarms.",
    },
    {
      code: "TIGHT = PRECISE, CENTERED = ACCURATE",
      meaning:
        "A KYP ORIGINAL — the four-target reading: the TIGHTNESS of the dart cluster is precision (tight = consistent and reproducible = reliable); the CENTEREDNESS of the cluster on the bullseye is accuracy (centered = close to the true values = valid). Grade the two independently: tight+centered (ideal), tight+off-center (precise, inaccurate), scattered+centered (accurate on average, imprecise), scattered+off-center (neither).",
      memorizes:
        "The printed figure's four combinations and what each pattern demonstrates about the test",
      whenToUse:
        "Any stem describing repeat measurements or showing a targets/dartboard picture — split the description into tightness and centeredness before choosing an answer.",
      clinical:
        "The device vignettes map one-to-one (KYP context): a cuff reading 10 mmHg high every time = tight, off-center (precise, inaccurate); a noisy analyzer scattering around the true value = scattered, centered (accurate on average, imprecise).",
    },
    {
      code: "RANDOM SCATTERS, SYSTEMATIC SHIFTS",
      meaning:
        "A KYP ORIGINAL — the error families and their victims: RANDOM error SCATTERS the results (↓ precision, ↑ variation/standard deviation, ↓ statistical power 1 − β); SYSTEMATIC error/bias SHIFTS the results (↓ accuracy, results not close to the true values). Scattering and shifting are independent failures — one never causes the other.",
      memorizes:
        "Which error family destroys which quality, and the direction of damage on the target",
      whenToUse:
        "Any stem naming an error type and asking for the consequence — route “random/noise/inconsistent” to precision (↓SD, ↓power when lost) and “systematic/bias/miscalibration” to accuracy.",
      clinical:
        "The printed consequence lines ride along (KYP context): a precise measurement strategy narrows the standard deviation and raises power — which is why imprecise assays and noisy observers make studies miss real effects.",
    },
  ],
  rapidReview: {
    s30: [
      "ROC curve — demonstrates how well a diagnostic test can distinguish between 2 groups (eg, disease vs healthy); plots the true-positive rate (sensitivity) against the false-positive rate (1 – specificity)",
      "Better performing test — higher area under the curve (AUC), with the curve closer to the upper left corner",
      "The three printed traces — chance diagonal: “No predictive value (AUC = 0.5)”; ideal corner: “Ideal test (AUC = 1)”; real test: “Actual test (0.5 < AUC < 1)” bowing toward the upper left corner",
      "Precision (reliability) — the consistency and reproducibility of a test; the absence of random variation in a test",
      "Accuracy (validity) — the closeness of test results to the true values; the absence of systematic error or bias in a test",
      "Random error ↓ precision; ↑ precision → ↓ standard deviation; ↑ precision → ↑ statistical power (1 − β)",
      "Systematic error ↓ accuracy — bias shifts results away from the true values without adding scatter",
    ],
    m3: [
      "pREcision = REliability = REproducibility; Accuracy = vAlidity (First Aid's own red letters)",
      "TRUE UP, FALSE FLAT — TP rate (sensitivity) vertical, FP rate (1 – specificity) horizontal (KYP)",
      "TIGHT = PRECISE, CENTERED = ACCURATE — grade the dart cluster's tightness and centeredness independently (KYP)",
      "RANDOM SCATTERS, SYSTEMATIC SHIFTS — random error kills precision (↑SD, ↓power), systematic error kills accuracy (KYP)",
    ],
    m10: [
      "The printed figure's label set, verbatim — “Ideal test (AUC = 1)” (horizontal, pink), “Actual test (0.5 < AUC < 1)” (set on a curved baseline along the gray curve), “No predictive value (AUC = 0.5)” (rotated ~42°, parallel above the dashed blue diagonal), “TP rate (sensitivity)” (rotated 90° on the y-axis), “FP rate (1 – speciﬁcity)” (x-axis, fi ligature as printed) — the axes print only two “1”s (top of y, right end of x)",
      "The four-target figure prints ONE row of four targets as two pairs — “Accuracy” above each pair (High left, Low right within each), “Precision” below each pair (left pair High, right pair Low); the KYP visual re-arranges the same 2×2 of combinations",
      "Precision's printed statistical shadows: ↑ precision → ↓ standard deviation AND ↑ statistical power (1 − β) — the bridge from this page to power/sample-size questions",
      "The page's neighbors: single-cutoff sensitivity/specificity/PPV/NPV and the cutoff distributions are book 260 (diagnostic-test-performance); LR+ = sensitivity/(1 – specificity) = TP rate/FP rate is book 259 — the ROC axes as one number (likelihood-ratios)",
    ],
  },
  recall: [
    {
      q: "What does an ROC curve demonstrate, and what does it plot?",
      a: "It “demonstrates how well a diagnostic test can distinguish between 2 groups (eg, disease vs healthy). Plots the true-positive rate (sensitivity) against the false-positive rate (1 – specificity).”",
    },
    {
      q: "Which test is the better performer on an ROC plot, and by what two criteria (the printed rule)?",
      a: "“The better performing test will have a higher area under the curve (AUC), with the curve closer to the upper left corner.”",
    },
    {
      q: "Name the three printed traces and their labels with AUC values.",
      a: "The dashed chance diagonal — “No predictive value (AUC = 0.5)”; the dashed ideal corner trace (up the left edge, across the top) — “Ideal test (AUC = 1)”; the solid actual-test curve bowing toward the upper left corner — “Actual test (0.5 < AUC < 1)”.",
    },
    {
      q: "Define precision (reliability) in the page's own words — both definition lines.",
      a: "“The consistency and reproducibility of a test.” “The absence of random variation in a test.”",
    },
    {
      q: "Define accuracy (validity) in the page's own words — both definition lines.",
      a: "“The closeness of test results to the true values.” “The absence of systematic error or bias in a test.”",
    },
    {
      q: "State the three printed consequence lines for precision and the one for accuracy.",
      a: "“Random error ↓ precision in a test.” “↑ precision → ↓ standard deviation.” “↑ precision → ↑ statistical power (1 − β).” “Systematic error ↓ accuracy in a test.”",
    },
    {
      q: "A device gives nearly identical readings every time, all 12 units above the true value. Which two qualities describe it, and which error family is at work?",
      a: "Precise (reliable — consistent and reproducible, no random variation) but not accurate (not valid — results are not close to the true values); the error family is systematic error (bias/miscalibration), which “↓ accuracy in a test.”",
    },
    {
      q: "On the printed four-target figure, which target is which combination — and how is the figure arranged?",
      a: "Four targets in one row as two pairs: left pair precision High (labels below), right pair precision Low; within each pair the left target accuracy High and the right accuracy Low (labels above). Patterns: tight+centered (high/high), tight+off-center (low accuracy/high precision), scattered+centered (high accuracy/low precision), scattered+off-center (low/low).",
    },
  ],
  related: [
    {
      title: "Sensitivity, specificity, and predictive values — the single-cutoff arithmetic",
      note:
        "The ROC curve's axes are this page's outputs: sensitivity and 1 – specificity computed at one cutoff are exactly one point on the ROC curve. Book 260 also carries the cutoff trade-off figure (two overlapping distributions, cutoffs A/B/C) that explains WHY the curve bows — moving the cutoff trades the two error rates.",
      topicId: "diagnostic-test-performance",
    },
    {
      title: "Likelihood ratios — the ROC axes as one number",
      note:
        "LR+ = sensitivity/(1 – specificity) = TP rate/FP rate — literally the y-coordinate over the x-coordinate of a point on the ROC plane. A test's position on its ROC curve IS its LR+ at that cutoff; the curve is the set of all LR+ values as the cutoff sweeps.",
      topicId: "likelihood-ratios",
    },
    {
      title: "Hypothesis testing errors — where power (1 − β) lives",
      note:
        "The precision block's last printed line — “↑ precision → ↑ statistical power (1 − β)” — is the bridge to type II error (β) and power. Imprecise measurements widen the spread around a hypothesis test's means and make real effects harder to detect.",
      topicId: "hypothesis-testing-errors",
    },
    {
      title: "Statistical distributions — the machinery under the standard deviation",
      note:
        "“↑ precision → ↓ standard deviation” is a statement about a distribution's spread; the normal-distribution material (central tendency, dispersion, skew) supplies the machinery, and the cutoff-distribution figure on book 260 shows two distributions whose overlap the ROC curve summarizes.",
      topicId: "statistical-distributions",
    },
  ],
  crossLinks: [
    {
      subject: "Biostatistics and epidemiology — diagnostic test evaluation",
      connection:
        "The ROC curve is the whole-curve summary of the test-vs-disease 2×2 table: each cutoff's (sensitivity, 1 – specificity) pair is one curve point, and the AUC aggregates every cutoff into one discrimination number — complementing the single-cutoff measures (sensitivity, specificity, PPV, NPV, LRs) taught across books 259–260.",
    },
    {
      subject: "Laboratory medicine — assay validation and quality control",
      connection:
        "Labs grade assays on exactly this page's two axes: precision = reproducibility across runs (levey-jennings scatter, coefficient of variation) and accuracy = agreement with a reference method (calibration, bias). A tightly clustered but shifted control chart is the precise-but-inaccurate target in working lab clothing.",
    },
    {
      subject: "Research methods — bias, confounding, and study validity",
      connection:
        "The random-vs-systematic error split is the taxonomy under every named bias: measurement bias and observer-expectancy effects are systematic (accuracy), while noisy instruments and unstandardized techniques are random (precision). The bias table's reduction strategies (objective methods, blinding, calibration) are accuracy repairs.",
    },
    {
      subject: "Biostatistics — power, sample size, and study design",
      connection:
        "“↑ precision → ↑ statistical power (1 − β)” is the design-level payoff: precise measurements shrink the standard deviation, which shrinks the effect size needed for significance — the same arithmetic that powers sample-size calculations and makes imprecise endpoints a common reason studies miss real effects.",
    },
  ],
};
