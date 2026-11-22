import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 2, topic 13 (pubh13). Source: FULL pdf page 287 /
// book 265 (Part 1) — the topic owns the WHOLE page (no split). The page
// carries the "Statistical distribution" table (rows: Measures of central
// tendency — Mean / Median / Mode; Measures of dispersion; Normal
// distribution; a "Nonnormal distributions" group label with three sub-rows —
// Bimodal distribution, Positive skew, Negative skew), FOUR pure-vector curve
// figures stacked vertically in the right-hand column (a normal bell with
// graded σ bands; a bimodal two-hump curve; a positive-skew curve; a
// negative-skew curve), and the "Statistical hypothesis testing" opener block
// at the bottom (Null hypothesis / Alternative hypothesis / P value). VLM
// CENSUS — COMPLETE, cited throughout: .usmle-pipeline-cache/staging-pubh13/
// vlm-census.txt (glm-4.6v, FOUR passes: full page at 120dpi + three 300dpi
// figure-column crops, plus a PyMuPDF vector-geometry reconstruction and a
// rendered-pixel visibility scan). The census pins: the normal curve's tick
// labels –3σ…+3σ print INSIDE the curve, cascading down the contour (–1σ/+1σ
// just under the peak, –2σ/+2σ mid-slope, –3σ/+3σ near the baseline), while
// the 68% / 95% / 99.7% labels print BELOW the x-axis, stacked vertically
// under the curve center, each with a horizontal curly brace spanning its band
// (68% narrowest at top spanning ±1σ, 95% middle spanning ±2σ, 99.7% widest
// at bottom spanning ±3σ; each brace's cusp aims DOWN toward its label); the
// bimodal figure has NO Mode markers and NO σ ticks (it is pure curve art);
// the positive-skew markers print left-to-right Mode (at the peak) → Median
// (just right of the peak) → Mean (farther right, down the tail slope), with
// dashed vertical drop-lines; the negative-skew markers print left-to-right
// Mean (on the left tail) → Median (just left of the peak) → Mode (at the
// peak); zero raster images (PyMuPDF: 159 path objects on the page, 102 in
// the figure column) — every curve, brace, tick label and marker is VECTOR
// art. PRINTED-TEXT QUIRKS carried + documented: (1) "SEC TION II"
// header-space extraction artifact (known, as-is); (2) small-caps artifact
// "EPIDEmIOLOGY AND BIOSTATISTICS" in the running-header banner (the banner
// prints ONCE on this page — running header only, NO in-body ribbon, unlike
// pdf 278); (3) C1 control bytes around the arrows in the dispersion formula
// line — raw layer "SE \x90↓ as n \x8f↑." (the note carries "SE ↓ as n ↑."
// and documents the bytes; the pipeline's norm() strips \u0080-\u009f);
// (4) "Variance = (SD)2." — the superscript 2 extracts inline (the print
// shows (SD)² with a raised 2); (5) H0/H1 subscripts extract inline as
// "H0"/"H1"; (6) THE CRITICAL QUIRK — the raw text layer carries CLIPPED,
// INVISIBLE DUPLICATE COPIES of the normal-curve figure group (two extra
// copies, offset +83.9pt and a further +14.4pt down) and of the skew-figure
// marker cascades (+14.4pt each): the σ tick labels and 68%/95%/99.7% labels
// therefore extract THREE times each and the Mode/Median/Mean cascades TWICE
// each — but the page VISIBLY prints each label ONCE (VLM passes 1-4: "no
// ghosting or doubling"; the pixel-visibility scan: exactly one visible set;
// PyMuPDF's clip-respecting extraction: exactly one set). Raw-layer
// consequences carried + documented: the merged line "–2σ–1σ +1σ +2σ"
// (hidden copies' –2σ/+2σ row merged with another copy's –1σ/+1σ row); the
// "68% 68% 95% 95% 99.7% 99.7%" double-print; and the merge token
// "MedianMean" (a clipped duplicate's "Median" colliding on one extraction
// line with the VISIBLE "Mean" of the positive-skew figure — in the print the
// two sit at different heights and do not touch). The gen script's evidence
// ranges pin the VISIBLE figure's label spans in raw order and quote the
// interleaved duplicate spans as the clipped-copies quirk, with the figure
// assignment explained in each claim. ADJUDICATIONS: (A) the figure-label
// assignment (which raw spans belong to the visible normal curve vs the
// clipped duplicates) is pinned by the VLM census's four passes + the PyMuPDF
// clip-respecting extraction + the pixel-visibility scan — all three agree,
// and the note's visual block draws each label exactly once, in its printed
// place; (B) the task brief's content list matched the print exactly (all
// rows, both figure blocks, the hypothesis opener) — no correction needed;
// (C) the two small gray-blue vector "Rx" icons beside the 99.7% label and
// the negative-skew figure are InDesign multimedia glyphs, not content — NOT
// redrawn (documented). PROVENANCE SPLIT: verbatim = every table row (central
// tendency, dispersion, normal, nonnormal, hypothesis testing) and every
// figure label (σ ticks, 68%/95%/99.7%, Mode/Median/Mean); FA-own = the red
// bold printing in the hypothesis rows (the subscript 0 of H0, the subscript
// 1 of H1, and the words "zero" and "one" — First Aid's own H0↔zero /
// H1↔at-least-one linkage, carried VERBATIM and ATTRIBUTED); KYP-original =
// the three-pass center/spread/shape decoder, the "mean chases the tail"
// mechanism framing, the formula cards, the exam layer, and three of the four
// mnemonics — every teaching generalization beyond the printed page is
// flagged as KYP context. DrugCards: none — the page prints statistical
// distributions, not drugs (documented as folded-by-absence in the manifest;
// the printed fast-vs-slow-acetylator example is carried in the clinical
// block with its pharmacogenomics context marked KYP). BOUNDARY: the page
// opens the distributions material; the hypothesis-testing opener at the
// bottom continues on book 266 with the Type I/II error machinery (a separate
// topic, hypothesis-testing-errors — referenced by design).

export const statisticalDistributions: KypUsMLENote = {
  id: "statistical-distributions",
  title: "Statistical Distributions: Center, Spread, and Skew",
  subtitle:
    "One page teaches you to read any dataset the way a biostatistician does: in three passes. First the CENTER — the mean is the (sum of values)/(total number of values) and is the most affected by outliers; the median is the middle value of a list sorted from least to greatest (the average of the middle two when n is even); the mode is the most common value and the least affected by outliers. Second the SPREAD — the standard deviation measures how much variability exists in a set of values around the mean, the variance is (SD)², and the standard error, SE = σ/√n, estimates how much variability exists in a theoretical set of sample means around the true population mean — which is why SE ↓ as n ↑. Third the SHAPE — a Gaussian (bell-shaped) normal distribution has mean = median = mode and the mean is its best measure of central tendency; two humps mean two different populations (fast vs slow acetylators, the bimodal age at onset of Hodgkin lymphoma, suicide rate by age); and a skew has one long tail that drags the mean toward it — positive skew, longer tail on the right, typically mean > median > mode; negative skew, longer tail on the left, typically mean < median < mode. The page closes with the doorway to inference: the null hypothesis H0 (zero difference between two groups or variables in the population), the alternative hypothesis H1 (at least one difference or association), and the P value — the probability of obtaining test results at least as extreme as those observed in the sample, assuming that H0 is correct, commonly accepted as 0.05.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory:
    "Public Health Sciences — distribution reading: the measures of central tendency (mean/median/mode with their outlier rules) and dispersion (SD, SE = σ/√n, variance = SD², SE ↓ as n ↑), the normal (Gaussian) distribution with the 68-95-99.7 σ bands and below-axis brace labels, the bimodal two-population distribution with its three printed clinical anchors, positive and negative skew with their Mode/Median/Mean orderings, and the statistical hypothesis testing opener (H0, H1, P value at 0.05).",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 265–265 (Epidemiology and Biostatistics: Statistical distribution; Statistical hypothesis testing)",
  tags: [
    "statistical distribution",
    "central tendency",
    "mean",
    "median",
    "mode",
    "outliers",
    "measures of dispersion",
    "standard deviation",
    "standard error",
    "variance",
    "SE = σ/√n",
    "normal distribution",
    "Gaussian",
    "bell-shaped",
    "68-95-99.7 rule",
    "nonnormal distributions",
    "bimodal distribution",
    "positive skew",
    "negative skew",
    "skewness",
    "null hypothesis",
    "alternative hypothesis",
    "P value",
    "hypothesis testing",
    "epidemiology",
    "biostatistics",
  ],
  core: {
    what:
      "One printed page, carried whole. BLOCK 1 — the “Statistical distribution” table. Measures of central tendency: “Mean = (sum of values)/(total number of values).” — “Most affected by outliers (extreme values).”; “Median = middle value of a list of data sorted from least to greatest.” — “If there is an even number of values, the median will be the average of the middle two values.”; “Mode = most common value.” — “Least affected by outliers.” Measures of dispersion: “Standard deviation = how much variability exists in a set of values, around the mean of these values.”; “Standard error = an estimate of how much variability exists in a (theoretical) set of sample means around the true population mean.”; the formula lines “σ = SD; n = sample size.” / “Variance = (SD)2.” / “SE = σ/√n.” / “SE ↓ as n ↑.” Normal distribution: “Gaussian, also called bell-shaped.” / “Mean = median = mode.” / “For normal distribution, mean is the best measure of central tendency.” / “For skewed data, median is a better measure of central tendency than mean.” Nonnormal distributions — Bimodal distribution: “Suggests two different populations (eg, metabolic polymorphism such as fast vs slow acetylators; age at onset of Hodgkin lymphoma; suicide rate by age).”; Positive skew: “Typically, mean > median > mode.” / “Asymmetry with longer tail on right; mean falls closer to tail.”; Negative skew: “Typically, mean < median < mode.” / “Asymmetry with longer tail on left; mean falls closer to tail.” BLOCK 2 — FOUR pure-vector curve figures stacked in the right-hand column: the normal bell with six graded σ-band slices (–3σ to +3σ tick labels inside the curve, cascading down the contour; the 68% / 95% / 99.7% labels BELOW the x-axis, stacked under the center, each above its horizontal curly brace — 68% narrowest spanning ±1σ, 99.7% widest spanning ±3σ); the bimodal two-hump curve (no ticks, no markers); the positive-skew curve with dashed drop-lines and markers left-to-right Mode → Median → Mean; the negative-skew curve with markers left-to-right Mean → Median → Mode. BLOCK 3 — the “Statistical hypothesis testing” opener: Null hypothesis — “Also called H0. Hypothesis with zero difference between two groups or variables in the population.”; Alternative hypothesis — “Also called H1. Hypothesis states at least one difference or association between two groups or variables in the population.”; P value — “Probability of obtaining test results at least as extreme as those observed in the sample, assuming that H0 is correct. Commonly accepted as 0.05 (<5% of such repeated tests would show results that extreme just by chance alone).”",
    why:
      "This page sits at the hinge of the biostatistics sequence: everything before it describes studies and counts, and everything after it (the Type I/II error machinery, confidence intervals, statistical tests) assumes you can already answer three questions about any set of numbers — where is its center, how wide is it, and what shape is it? The center question is decided by OUTLIERS: the mean uses every value in its sum, so extreme values drag it (printed: “Most affected by outliers”); the mode only counts the most common value (“Least affected by outliers”); the median only ranks, so it sits at the middle of the sorted list regardless of how extreme the ends are — which is exactly why the page prints “For skewed data, median is a better measure of central tendency than mean.” The spread question distinguishes two different “how variable” quantities that the exam constantly swaps: the SD describes the VALUES around their mean, while the SE describes SAMPLE MEANS around the true population mean — the sampling-distribution lens — and the printed formula SE = σ/√n makes the sample size the lever (“SE ↓ as n ↑”). The shape question then routes the summary: a symmetric bell (mean = median = mode) is summarized by its mean; two humps warn that the “distribution” is really two populations mixed together (the acetylation polymorphism, Hodgkin lymphoma age at onset, and suicide-by-age anchors); a skew warns that the tail has dragged the mean off center. The hypothesis-testing opener at the bottom plants the two hypotheses and the P value definition that the entire inference half of the chapter is built on.",
    keyIdea:
      "Read any distribution in three passes, then apply the printed routing rules. PASS 1 — CENTER: mean = (sum of values)/(total number of values), MOST affected by outliers; median = middle value of the sorted list (average of the middle two if n is even); mode = most common value, LEAST affected by outliers. PASS 2 — SPREAD: SD = variability of the VALUES around the mean; SE = variability of (theoretical) SAMPLE MEANS around the true population mean; Variance = (SD)²; SE = σ/√n, so SE ↓ as n ↑ (quadrupling n halves the SE — KYP corollary of the printed formula). PASS 3 — SHAPE: Gaussian bell → mean = median = mode and “mean is the best measure of central tendency”; two humps (bimodal) → two different populations hiding in one histogram — hunt them before summarizing; one long tail (skew) → “For skewed data, median is a better measure of central tendency than mean.” THE SKEW GRAMMAR: tail on the RIGHT = positive skew, “mean > median > mode” with “mean falls closer to tail” (the printed figure labels the markers Mode → Median → Mean, left to right); tail on the LEFT = negative skew, “mean < median < mode” (markers Mean → Median → Mode, left to right). THE σ BANDS of the normal curve: ±1σ ≈ 68%, ±2σ ≈ 95%, ±3σ ≈ 99.7% of the values. THE OPENER: H0 = zero difference; H1 = at least one difference or association; P value = the probability of obtaining test results at least as extreme as those observed in the sample, ASSUMING H0 IS CORRECT — commonly accepted as 0.05.",
  },
  mechanisms: [
    {
      id: "shape-center-spread-map",
      title:
        "Reading any distribution in three passes — center, spread, shape — and why shape decides the best center",
      context:
        "The printed Statistical distribution table (book 265): the central-tendency and dispersion rows plus the four curve figures",
      flow: {
        nodes: [
          {
            id: "dataset",
            label: "A DISTRIBUTION — any set of values the exam hands you",
            sublabel:
              "Input — a list of lab values, ages, hospital charges, survival times: every biostatistics vignette opens with a distribution. The page's whole architecture is a three-pass reading protocol over it: locate the CENTER, measure the SPREAD, classify the SHAPE — and the shape then decides which center to report.",
            variant: "input",
          },
          {
            id: "center",
            label: "PASS 1 — CENTER: mean, median, mode, ranked by outlier sensitivity",
            sublabel:
              "Process — “Mean = (sum of values)/(total number of values).” — “Most affected by outliers (extreme values).” “Median = middle value of a list of data sorted from least to greatest.” — “If there is an even number of values, the median will be the average of the middle two values.” “Mode = most common value.” — “Least affected by outliers.” The three measures disagree exactly when outliers or skew pull them apart — and the direction of the disagreement is the skew signature (Pass 3).",
            variant: "process",
          },
          {
            id: "spread",
            label: "PASS 2 — SPREAD: SD for the values, SE for the sample means",
            sublabel:
              "Process — “Standard deviation = how much variability exists in a set of values, around the mean of these values.” “Standard error = an estimate of how much variability exists in a (theoretical) set of sample means around the true population mean.” The formula lines: “σ = SD; n = sample size.” / “Variance = (SD)2.” (print: (SD)²) / “SE = σ/√n.” / “SE ↓ as n ↑.” Two different variabilities: SD scatters the DATA; SE scatters the MEANS — and only the SE shrinks as you sample more.",
            variant: "process",
          },
          {
            id: "shape",
            label: "PASS 3 — SHAPE: bell, two humps, or one long tail",
            sublabel:
              "Process — classify the histogram against the page's four printed figures: symmetric single peak (Normal — “Gaussian, also called bell-shaped”; “Mean = median = mode”), twin peaks (Bimodal — “Suggests two different populations”), or a single peak with one tail longer than the other (Positive skew — “longer tail on right”; Negative skew — “longer tail on left”; in both, “mean falls closer to tail”).",
            variant: "process",
          },
          {
            id: "route",
            label: "THE ROUTING RULE — shape decides the best center",
            sublabel:
              "Output — “For normal distribution, mean is the best measure of central tendency.” “For skewed data, median is a better measure of central tendency than mean.” Bimodal: no single center honestly summarizes two populations — split first (the printed fast-vs-slow-acetylator, Hodgkin lymphoma age-at-onset, and suicide-by-age examples are the templates). Center, spread, shape, route — four steps and any distribution question decodes itself.",
            variant: "output",
          },
        ],
        edges: [
          { from: "dataset", to: "center", label: "where is the middle? →" },
          { from: "dataset", to: "spread", label: "how wide? →" },
          { from: "dataset", to: "shape", label: "what silhouette? →" },
          { from: "center", to: "route", label: "outlier sensitivity ranked" },
          { from: "spread", to: "route", label: "SD ≠ SE" },
          { from: "shape", to: "route", label: "shape picks the measure" },
        ],
      },
    },
    {
      id: "tail-drags-the-mean-map",
      title:
        "The tail drags the mean: how asymmetry generates the skew orderings, the two-population bimodal, and the 68-95-99.7 bands",
      context:
        "The printed nonnormal-distribution rows and the four curve figures (book 265): the Mode/Median/Mean marker cascades and the σ-band bell",
      flow: {
        nodes: [
          {
            id: "asymmetry",
            label: "ASYMMETRY — one tail longer than the other",
            sublabel:
              "Input — the printed definition of skew is geometric: “Asymmetry with longer tail on right” (positive skew) or “Asymmetry with longer tail on left” (negative skew). The tail is the engine: every value in it enters the mean's SUM, so the mean is dragged toward it — “mean falls closer to tail” is printed for BOTH skews.",
            variant: "input",
          },
          {
            id: "positive",
            label: "POSITIVE SKEW — tail right → mean > median > mode",
            sublabel:
              "Process — “Typically, mean > median > mode. Asymmetry with longer tail on right; mean falls closer to tail.” The printed figure's markers read left-to-right Mode (at the peak) → Median (just right of the peak) → Mean (farther right, down the tail slope), each with a dashed drop-line: the MODE sits at the peak, the MEDIAN just off it, and the MEAN farthest toward the tail (census-pinned geometry, drawn exactly so in the visual).",
            variant: "process",
          },
          {
            id: "negative",
            label: "NEGATIVE SKEW — tail left → mean < median < mode",
            sublabel:
              "Process — “Typically, mean < median < mode. Asymmetry with longer tail on left; mean falls closer to tail.” The printed figure's markers read left-to-right Mean (on the left tail) → Median (just left of the peak) → Mode (at the peak) — the exact mirror of the positive-skew cascade (census-pinned, drawn exactly so in the visual).",
            variant: "process",
          },
          {
            id: "bimodal",
            label: "BIMODAL — two humps, two populations",
            sublabel:
              "Process — “Suggests two different populations (eg, metabolic polymorphism such as fast vs slow acetylators; age at onset of Hodgkin lymphoma; suicide rate by age).” The printed bimodal figure is pure curve art — NO Mode markers, NO σ ticks (census-pinned): the two humps are a warning that one histogram is really two distributions superimposed, so the honest next move is to separate the populations, not to average across the saddle.",
            variant: "process",
          },
          {
            id: "normal",
            label: "NORMAL — the symmetric reference: mean = median = mode",
            sublabel:
              "Process — “Gaussian, also called bell-shaped. Mean = median = mode.” With no tail to drag anything, all three centers coincide and the σ bands carry the spread: 68% of values within ±1σ, 95% within ±2σ, 99.7% within ±3σ — printed below the curve's axis as three stacked braces, narrowest (68%) to widest (99.7%), each cusp pointing down at its label (census-pinned, drawn exactly so in the visual).",
            variant: "process",
          },
          {
            id: "rule",
            label: "THE RULE — read the tail first, then write the ordering",
            sublabel:
              "Output — the mean chases the tail (it sums every value), the median only ranks (it stays near the bulk), the mode sits at the peak (KYP mechanism behind both printed orderings). Tail RIGHT → mean > median > mode; tail LEFT → mean < median < mode; two humps → two populations; no tail → mean = median = mode and the mean is the best measure. The direction of the tail and the direction of the inequality always MATCH.",
            variant: "output",
          },
        ],
        edges: [
          { from: "asymmetry", to: "positive", label: "tail drags right →" },
          { from: "asymmetry", to: "negative", label: "tail drags left →" },
          { from: "asymmetry", to: "bimodal", label: "two peaks instead →" },
          { from: "asymmetry", to: "normal", label: "no tail (symmetric) →" },
          { from: "positive", to: "rule", label: "mean > median > mode" },
          { from: "negative", to: "rule", label: "mean < median < mode" },
          { from: "bimodal", to: "rule", label: "split the populations" },
          { from: "normal", to: "rule", label: "all three coincide · 68-95-99.7" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "distributions-map",
      title:
        "The four printed distributions and their grammar (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 265's two blocks. TOP — the normal (Gaussian) bell exactly as the print draws it: six graded σ-band slices, the –3σ…+3σ tick labels cascading down the contour inside the curve, and BELOW the axis the three stacked horizontal curly braces with their labels — 68% (narrowest, spanning ±1σ) at top, 95% (spanning ±2σ) middle, 99.7% (widest, spanning ±3σ) at bottom, each brace's cusp aiming down at its label. BELOW — the bimodal twin-peak curve with its three printed two-population anchors (fast vs slow acetylators; age at onset of Hodgkin lymphoma; suicide rate by age); then the two skew panels with their dashed drop-lines and census-pinned marker orders — positive skew: Mode → Median → Mean (mean > median > mode, tail right); negative skew: Mean → Median → Mode (mean < median < mode, tail left); then the central-tendency and dispersion formula cards (mean/median/mode with outlier rules; σ = SD, n = sample size, Variance = (SD)², SE = σ/√n, SE ↓ as n ↑); and the H0/H1/P strip closing with the hypothesis-testing opener.",
      notice:
        "Census (pdfimages + PyMuPDF): ZERO raster images on pdf 287 — all four curves, the braces, the tick labels and the markers are VECTOR art (159 path objects on the page, 102 in the figure column; VLM-read in four passes, staging-pubh13/vlm-census.txt). The visual is an ORIGINAL KYP ADAPTATION + REDRAW: the four figures are rebuilt as KYP vector art in the census-pinned geometry (σ labels inside the curve cascading down the contour; the 68%/95%/99.7% labels stacked below the axis above their braces; the bimodal figure with NO markers and NO ticks; the skew marker orders Mode→Median→Mean and Mean→Median→Mode with dashed drop-lines) — the artwork and layout are KYP's, every printed label is preserved. DOCUMENTED QUIRK, not drawn: the raw text layer carries clipped invisible duplicates of the σ ticks, the percentage labels and the marker cascades (each extracting 2-3×) — the page prints each label ONCE, and the visual draws each label ONCE.",
    },
    {
      kind: "table",
      title:
        "Book 265 — the printed Statistical distribution table, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The page's first block: the left-label / right-text rows exactly as printed, from Measures of central tendency through Negative skew. Printed quirks carried: the dispersion formula line extracts with C1 control bytes around its arrows (raw “SE \\x90↓ as n \\x8f↑.” — carried here as “SE ↓ as n ↑.”, bytes documented); “Variance = (SD)2.” extracts with the superscript inline (the print shows (SD)² with a raised 2); the σ and √ symbols are as printed. “Nonnormal distributions” is a printed group label owning three indented sub-rows.",
      columns: ["PRINTED ROW", "PRINTED TEXT (verbatim)"],
      rows: [
        [
          "Measures of central tendency — Mean",
          "Mean = (sum of values)/(total number of values). Most affected by outliers (extreme values).",
        ],
        [
          "Measures of central tendency — Median",
          "Median = middle value of a list of data sorted from least to greatest. If there is an even number of values, the median will be the average of the middle two values.",
        ],
        [
          "Measures of central tendency — Mode",
          "Mode = most common value. Least affected by outliers.",
        ],
        [
          "Measures of dispersion",
          "Standard deviation = how much variability exists in a set of values, around the mean of these values. Standard error = an estimate of how much variability exists in a (theoretical) set of sample means around the true population mean. σ = SD; n = sample size. Variance = (SD)2. SE = σ/√n. SE ↓ as n ↑.",
        ],
        [
          "Normal distribution",
          "Gaussian, also called bell-shaped. Mean = median = mode. For normal distribution, mean is the best measure of central tendency. For skewed data, median is a better measure of central tendency than mean.",
        ],
        [
          "Nonnormal distributions — Bimodal distribution",
          "Suggests two different populations (eg, metabolic polymorphism such as fast vs slow acetylators; age at onset of Hodgkin lymphoma; suicide rate by age).",
        ],
        [
          "Nonnormal distributions — Positive skew",
          "Typically, mean > median > mode. Asymmetry with longer tail on right; mean falls closer to tail.",
        ],
        [
          "Nonnormal distributions — Negative skew",
          "Typically, mean < median < mode. Asymmetry with longer tail on left; mean falls closer to tail.",
        ],
      ],
      caption:
        "Verbatim carry, documented: all eight rows in printed order (the three central-tendency definitions share one row label in the print; “Nonnormal distributions” is the printed group label over its three sub-rows). The en-dash minus signs, σ, √, and the inequality signs are as printed; “Variance = (SD)2.” preserves the raw-layer inline superscript (the print raises the 2); the arrows in “SE ↓ as n ↑.” carry C1 control bytes in the raw layer (documented; stripped here). No mnemonics print on this page — the only red ink is the H0/H1 zero/one linkage in the hypothesis-testing block below.",
    },
    {
      kind: "table",
      title:
        "Book 265 — the printed Statistical hypothesis testing opener, carried verbatim",
      intro:
        "The page's closing block: three left-label / right-text rows beneath the bold “Statistical hypothesis testing” section header. First Aid prints the subscript 0 of H0, the subscript 1 of H1, and the words “zero” and “one” in RED BOLD (texttrace + VLM census, staging-pubh13/vlm-census.txt) — the source's own H0↔zero / H1↔at-least-one linkage, carried VERBATIM and ATTRIBUTED. The subscripts extract inline as “H0”/“H1” in the raw layer (documented quirk).",
      columns: ["PRINTED ROW", "PRINTED TEXT (verbatim)"],
      rows: [
        [
          "Null hypothesis",
          "Also called H0. Hypothesis with zero difference between two groups or variables in the population.",
        ],
        [
          "Alternative hypothesis",
          "Also called H1. Hypothesis states at least one difference or association between two groups or variables in the population.",
        ],
        [
          "P value",
          "Probability of obtaining test results at least as extreme as those observed in the sample, assuming that H0 is correct. Commonly accepted as 0.05 (<5% of such repeated tests would show results that extreme just by chance alone).",
        ],
      ],
      caption:
        "Verbatim carry, documented: three rows in printed order under the “Statistical hypothesis testing” header. The red “zero”/“one” printing is First Aid's own emphasis tying H0 to zero difference and H1 to at least one difference or association — carried attributed everywhere it appears in this note. This block is the opener: the Type I/II error machinery continues on book 266 (a separate topic).",
    },
    {
      kind: "list",
      title:
        "The four printed figures, decoded — what each silhouette tells you to do (KYP's reading of the figures)",
      intro:
        "The right-hand column stacks four curve figures, one per table row. Each is a decision rule wearing a picture — this list carries the census-pinned geometry of each figure and the action it prescribes.",
      items: [
        {
          lead: "FIGURE 1 — THE NORMAL BELL: all centers coincide; the bands carry the spread",
          text: "Gaussian, bell-shaped, symmetric: mean = median = mode, and “for normal distribution, mean is the best measure of central tendency.” The print draws six graded σ-band slices with the tick labels –3σ…+3σ INSIDE the curve, cascading down the contour (–1σ/+1σ just under the peak, –3σ/+3σ near the baseline), and the 68% / 95% / 99.7% labels BELOW the axis — stacked, centered, each above its horizontal curly brace spanning its band (68% ±1σ narrowest at top, 99.7% ±3σ widest at bottom, cusps pointing down). The bands: ~68% of values within ±1σ, ~95% within ±2σ, ~99.7% within ±3σ (KYP packaging of the printed labels).",
        },
        {
          lead: "FIGURE 2 — THE BIMODAL TWIN PEAKS: two populations hiding in one histogram",
          text: "Two humps of roughly equal height with a saddle between them, plain fill, NO σ ticks and NO Mode/Median/Mean markers (census-pinned). The row's text is the instruction: “Suggests two different populations” — the printed examples are metabolic polymorphism (fast vs slow acetylators), age at onset of Hodgkin lymphoma, and suicide rate by age. The KYP reading: do not summarize across the saddle — split the populations first, then summarize each.",
        },
        {
          lead: "FIGURE 3 — POSITIVE SKEW: the right tail drags the mean right",
          text: "Peak on the left, long tail tapering right, three dashed drop-lines with markers left-to-right Mode (at the peak) → Median (just right of the peak) → Mean (farther down the right slope, in the tail region) — census-pinned. The row's text: “Typically, mean > median > mode. Asymmetry with longer tail on right; mean falls closer to tail.” Classic positive-skew variables (KYP context): income, hospital length of stay, tumor size — anything with a floor at zero and a long right tail.",
        },
        {
          lead: "FIGURE 4 — NEGATIVE SKEW: the left tail drags the mean left",
          text: "Peak on the right, long tail tapering left, dashed drop-lines with markers left-to-right Mean (partway down the left tail) → Median (higher, just left of the peak) → Mode (at the peak) — census-pinned, the exact mirror of Figure 3. The row's text: “Typically, mean < median < mode. Asymmetry with longer tail on left; mean falls closer to tail.” Classic negative-skew variables (KYP context): easy-exam scores and age at death in a developed country — anything with a ceiling.",
        },
      ],
    },
    {
      kind: "steps",
      title: "Choosing the best measure of central tendency in three questions",
      intro:
        "The page's routing logic as an ordered decision path — applicable to any vignette that hands you a distribution and asks for its center.",
      steps: [
        {
          label: "QUESTION 1 — IS THERE AN OUTLIER PROBLEM?",
          detail:
            "Mean = (sum of values)/(total number of values) — “most affected by outliers (extreme values).” Mode = most common value — “least affected by outliers.” Median = middle value of the sorted list — rank-based, so extreme ends barely move it. If the stem stresses outliers or extreme values, the mean is the wrong headline number.",
        },
        {
          label: "QUESTION 2 — WHAT IS THE SHAPE?",
          detail:
            "Symmetric bell → normal: mean = median = mode, and the mean is the best measure. Two humps → bimodal: two different populations — split them (fast vs slow acetylators; Hodgkin lymphoma age at onset; suicide rate by age). One long tail → skew: positive (tail right, mean > median > mode) or negative (tail left, mean < median < mode); in both “mean falls closer to tail.”",
        },
        {
          label: "QUESTION 3 — REPORT THE CENTER THE PRINT PRESCRIBES",
          detail:
            "“For normal distribution, mean is the best measure of central tendency. For skewed data, median is a better measure of central tendency than mean.” That sentence is the exam's answer key for every “which measure best represents this dataset?” question — and the median's even-n rule (“the average of the middle two values”) is the companion calculation detail.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Positive vs negative skew — the mirror pair, in the page's own words and the figures' own markers",
      intro:
        "The two skew rows are mirror images, and the exam's favorite question is which one a described histogram is. Every distinguishing feature follows from one geometric fact: which side the long tail is on.",
      columns: [
        "Positive skew — longer tail on RIGHT",
        "Negative skew — longer tail on LEFT",
      ],
      rows: [
        {
          label: "Printed ordering",
          a: "“Typically, mean > median > mode.”",
          b: "“Typically, mean < median < mode.”",
        },
        {
          label: "Printed geometry",
          a: "“Asymmetry with longer tail on right; mean falls closer to tail.”",
          b: "“Asymmetry with longer tail on left; mean falls closer to tail.”",
        },
        {
          label: "Figure markers (census-pinned, left to right)",
          a: "Mode (at the peak) → Median (just right of the peak) → Mean (down the tail slope) — the mean sits FARTHEST right",
          b: "Mean (down the left tail) → Median (just left of the peak) → Mode (at the peak) — the mean sits FARTHEST left",
        },
        {
          label: "Where the mean is dragged",
          a: "Toward the high-value tail — the mean OVERSTATES the typical value (KYP: income is the classic example)",
          b: "Toward the low-value tail — the mean UNDERSTATES the typical value (KYP: age at death in a developed country is the classic example)",
        },
        {
          label: "The report you file",
          a: "Skewed data → report the MEDIAN (“a better measure of central tendency than mean”)",
          b: "Skewed data → report the MEDIAN (the same printed rule — the tail's side does not change it)",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — four stem shapes and one definition trap",
      body:
        "SHAPE 1 — NAME THE SKEW: the stem draws or describes a histogram with one long tail (“a few patients with extremely long hospital stays”) and asks for the ordering — tail right → positive skew → mean > median > mode; tail left → negative skew → mean < median < mode. SHAPE 2 — BEST MEASURE: “which measure of central tendency best represents…?” — symmetric/normal → mean; skewed or outlier-laden → median (the printed sentence is the answer key). SHAPE 3 — SE ARITHMETIC: the stem gives σ and n (or changes n) and asks what happens to the standard error — SE = σ/√n, so SE ↓ as n ↑; quadrupling n halves the SE (KYP corollary). SHAPE 4 — THE OPENER: which hypothesis states zero difference (H0) vs at least one difference or association (H1), and the P value definition. THE DEFINITION TRAP: the P value is the probability of obtaining test results at least as extreme as those observed in the sample, ASSUMING H0 IS CORRECT — it is NOT “the probability that H0 is true” and NOT “the probability the result is due to chance” as a standalone claim (KYP flag of the classic misreading; the print's own words govern).",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own red printing — the H0↔zero / H1↔one linkage, carried attributed",
      body:
        "The page prints ONE emphasis device of its own, in RED BOLD in the hypothesis-testing rows (texttrace + the VLM census, staging-pubh13/vlm-census.txt): the subscript 0 of H0, the subscript 1 of H1, and the words “zero” and “one” — First Aid's own linkage tying H0 to “zero difference between two groups or variables in the population” and H1 to “at least one difference or association.” It is carried VERBATIM and ATTRIBUTED everywhere it appears in this note (the tables, the mnemonics, the visual's strip). No margin mnemonics print anywhere on this page — the three ALL-CAPS hooks in the Memory section below (“THE MEAN CHASES THE TAIL”, “68–95–99.7 AT 1–2–3σ”, “QUADRUPLE n, HALVE THE SE”) are KYP originals, marked as such.",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The page's clinical anchors — three printed bimodals and the skewed-data habit",
      intro:
        "First Aid grounds the bimodal row in three clinical examples; each is a high-yield anchor in its own right, and each is carried here with its clinical unpacking (the unpacking beyond the printed sentence is KYP context, flagged inline).",
      items: [
        {
          lead: "FAST VS SLOW ACETYLATORS — metabolic polymorphism as a bimodal",
          text: "The printed example: “metabolic polymorphism such as fast vs slow acetylators.” N-acetylation capacity splits populations into fast and slow acetylator phenotypes (KYP context: the NAT2 polymorphism — slow acetylators accumulate higher levels of isoniazid and are prone to toxicity such as peripheral neuropathy and drug-induced lupus, while fast acetylators may need higher exposure to reach effective levels; the page itself prints only the polymorphism). Plot plasma drug levels after a fixed dose and the histogram shows two humps — one population, two genotypes.",
        },
        {
          lead: "AGE AT ONSET OF HODGKIN LYMPHOMA — a bimodal age curve",
          text: "The printed example: “age at onset of Hodgkin lymphoma.” Hodgkin lymphoma's incidence vs age is classically bimodal (KYP context: an early peak in young adults — the nodular sclerosis pattern — and a second peak in older adults, with the young-adult peak linked to EBV exposure in an affluent childhood environment). A single mean age at onset would land in the saddle between the peaks and describe almost nobody — the printed lesson of the bimodal figure.",
        },
        {
          lead: "SUICIDE RATE BY AGE — the third printed bimodal",
          text: "The printed example: “suicide rate by age.” Suicide rates by age group trace a two-peak curve in US data (KYP context: a peak in mid-life and a second, higher peak in elderly men — with rates in adolescent-young adult populations also elevated; screening vigilance follows the peaks). Again the figure's instruction: two populations, two stories — do not average them into one.",
        },
        {
          lead: "THE SKEWED-DATA HABIT — report the median",
          text: "The clinical payoff of the skew rows: many real clinical variables are right-skewed (hospital length of stay, charges, biomarker levels — KYP examples), which is why the medical literature reports them as medians with interquartile ranges. The printed rule “for skewed data, median is a better measure of central tendency than mean” is the reason a single billionaire (or single 90-day stay) does not move the reported “typical” value.",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A researcher plots hospital length of stay for 200 patients after a routine procedure; most stay 2-3 days, but a few stay 30, 60, and 90 days, producing a single peak with a long right tail. The question asks how the mean, median, and mode of this distribution are ordered.",
        discriminator:
          "One peak with a long tail to the RIGHT — “asymmetry with longer tail on right; mean falls closer to tail”",
        concept: "Positive skew and its central-tendency ordering",
        answer:
          "Positive skew — “typically, mean > median > mode”: the mean is dragged toward the long right tail, so it exceeds the median, which exceeds the mode at the peak. And for reporting: “for skewed data, median is a better measure of central tendency than mean.”",
      },
      {
        stem: "A set of laboratory values is symmetric and bell-shaped, and the stem notes that mean = median = mode. The question asks which measure of central tendency best describes the dataset.",
        discriminator:
          "Gaussian bell with all three centers coinciding — “mean = median = mode”",
        concept: "The normal distribution's best measure of central tendency",
        answer:
          "The mean — “for normal distribution, mean is the best measure of central tendency.” (The median becomes the better measure only “for skewed data.”)",
      },
      {
        stem: "A study reports a standard deviation of 20 and a sample size of 25; the investigators then quadruple the sample size to 100 while the population SD is unchanged. The question asks what happens to the standard error.",
        discriminator:
          "The formula line “SE = σ/√n” plus “SE ↓ as n ↑” — sample size is the lever, and the square root sets the pace",
        concept: "The standard error and its dependence on sample size",
        answer:
          "The standard error falls: SE = σ/√n, so at n = 25, SE = 20/5 = 4, and at n = 100, SE = 20/10 = 2 — quadrupling n halves the SE (KYP corollary of the printed “SE ↓ as n ↑”). The standard error estimates “how much variability exists in a (theoretical) set of sample means around the true population mean.”",
      },
      {
        stem: "An investigator computes a P value of 0.03 for the comparison of a new drug against placebo. The question asks what the P value represents.",
        discriminator:
          "The definition's conditional — “assuming that H0 is correct”",
        concept: "The P value definition (and the H0 it assumes)",
        answer:
          "The P value is “the probability of obtaining test results at least as extreme as those observed in the sample, assuming that H0 [the null hypothesis — “zero difference between two groups or variables in the population”] is correct. Commonly accepted as 0.05 (<5% of such repeated tests would show results that extreme just by chance alone).” A P value of 0.03 means results this extreme would occur in <5% of such repeated tests under H0 — not that H0 has a 3% chance of being true.",
      },
    ],
    traps: [
      {
        a: "Positive skew — longer tail on right, mean > median > mode",
        b: "Negative skew — longer tail on left, mean < median < mode",
        whyConfused:
          "Both are single-peaked skews described by the same sentences with the direction swapped; students memorize one ordering and apply it to both",
        keyDifference:
          "The TAIL's side decides everything: the mean always falls closer to the tail, so the ordering's direction matches the tail's direction. Tail right → the mean is pulled HIGH (mean > median > mode); tail left → pulled LOW (mean < median < mode)",
        clue:
          "Find the tail first (“a few extremely…” values on one side), then write the inequality pointing the same way as the tail.",
      },
      {
        a: "Standard deviation — “how much variability exists in a set of values, around the mean of these values”",
        b: "Standard error — “an estimate of how much variability exists in a (theoretical) set of sample means around the true population mean”",
        whyConfused:
          "Both are printed in the same row, both are variability measures, and both use σ in their formulas",
        keyDifference:
          "The UNIT being scattered: SD scatters the DATA (values around their mean); SE scatters SAMPLE MEANS around the true population mean. Only the SE carries the √n: SE = σ/√n, so “SE ↓ as n ↑” — the SD of the values does not shrink just because you sampled more",
        clue:
          "“Sample means” or a changing n in the stem → SE; individual values spread around a mean → SD.",
      },
      {
        a: "Mean — “most affected by outliers (extreme values)”",
        b: "Mode — “least affected by outliers” (median: rank-based, in between)",
        whyConfused:
          "All three are “measures of central tendency,” and stems often name all three as options when asking for the best one",
        keyDifference:
          "The arithmetic: the mean sums every value, so one extreme value drags it; the mode only counts the most common value; the median only ranks, so it stays at the middle of the sorted list. Outlier-laden or skewed data → the median is the printed answer (“a better measure of central tendency than mean”)",
        clue:
          "A single billionaire in the dataset, or a histogram with a tail — the mean is the trap option, the median is the answer.",
      },
      {
        a: "H0 — “zero difference between two groups or variables in the population”",
        b: "H1 — “at least one difference or association between two groups or variables in the population”",
        whyConfused:
          "The two hypotheses are verbal mirrors, and the P value is defined conditionally on one of them — the stem's phrasing decides which is which",
        keyDifference:
          "First Aid's own red printing splits them: H0 ↔ ZERO difference (the subscript 0 and the word “zero” print in red); H1 ↔ at least ONE difference or association (the subscript 1 and “one” in red). The P value assumes H0 is correct while asking how extreme the observed results are under it",
        clue:
          "“No difference / no association / no effect” language → H0; “at least one difference or association” → H1; “assuming the null is correct” → the P value's conditional.",
      },
    ],
    pivots: [
      {
        lookAlike: "A “best measure of central tendency” question over any dataset",
        differentiator:
          "Shape and outliers — the two printed routing rules decide before the options are read",
        correctPath:
          "Normal (mean = median = mode) → the MEAN is best. Skewed or outlier-laden → the MEDIAN (“for skewed data, median is a better measure of central tendency than mean”). Bimodal → no single center: the histogram “suggests two different populations” — the split is the answer's direction.",
      },
      {
        lookAlike: "A bimodal histogram presented as one dataset",
        differentiator:
          "Two humps = two populations, not one wide distribution — the printed row says so outright",
        correctPath:
          "Do not average across the saddle or force a single center. Ask what the two populations are (the printed templates: fast vs slow acetylators — metabolic polymorphism; age at onset of Hodgkin lymphoma; suicide rate by age), then summarize each population separately.",
      },
      {
        lookAlike: "A P value question phrased as a probability-of-truth claim",
        differentiator:
          "The P value's conditional — it is computed ASSUMING H0 IS CORRECT",
        correctPath:
          "Route to the printed definition: “probability of obtaining test results at least as extreme as those observed in the sample, assuming that H0 is correct,” commonly accepted as 0.05 — “<5% of such repeated tests would show results that extreme just by chance alone.” Reject any option making the P value the probability that H0 is true (KYP flag of the classic distractor).",
      },
    ],
    miniCase: {
      vignette:
        "A hospital administrator reviews the length-of-stay data for 300 patients admitted with uncomplicated community-acquired pneumonia: most patients are discharged within 3-4 days, but a handful required prolonged stays of 25, 40, and 62 days for empyema and decompensation. The histogram shows a single tall peak with a thin tail stretching to the right. The administrator asks the quality officer which single number should represent the “typical” length of stay in the hospital's public report.",
      question:
        "Which of the following is the best measure of central tendency for this dataset, and what is the expected ordering of its summary statistics?",
      options: [
        {
          label: "A",
          text: "The median; the distribution is a positive skew with mean > median > mode",
          correct: true,
          why: "CORRECT — the single peak with a long right tail is a positive skew: “asymmetry with longer tail on right; mean falls closer to tail,” and “typically, mean > median > mode.” The printed rule then picks the number: “for skewed data, median is a better measure of central tendency than mean” — the few prolonged stays drag the mean toward the tail and overstate the typical stay.",
        },
        {
          label: "B",
          text: "The mean; the distribution is a positive skew with mean > median > mode",
          why: "TEMPTING but wrong — the ordering is right (positive skew → mean > median > mode), but the mean is exactly the WRONG headline for skewed data: the printed rule says “median is a better measure of central tendency than mean” precisely because the mean (the “most affected by outliers”) is dragged toward the 25-, 40-, and 62-day stays. The mean is best only for a normal distribution.",
        },
        {
          label: "C",
          text: "The mode; it is the measure least affected by outliers",
          why: "TEMPTING but wrong — it is true that the mode is “least affected by outliers” (most common value), but that printed sentence describes OUTLIER SENSITIVITY, not which center best represents a skewed dataset. The mode (the 3-4 day peak) discards the magnitude of every other stay; the printed routing rule for skewed data names the MEDIAN, not the mode.",
        },
        {
          label: "D",
          text: "The mean; the distribution is normal (Gaussian), so mean = median = mode",
          why: "WRONG on shape — a Gaussian, bell-shaped distribution is symmetric with “mean = median = mode” and no long tail. This histogram has a single peak with a thin right tail (a few extreme prolonged stays), which is the printed signature of positive skew, not normality. Only for a true normal distribution is “mean… the best measure of central tendency.”",
        },
        {
          label: "E",
          text: "Split the report into two medians; the distribution is bimodal",
          why: "TEMPTING but wrong — a bimodal distribution “suggests two different populations” and shows TWO humps (the printed examples: fast vs slow acetylators, Hodgkin lymphoma age at onset, suicide rate by age). This histogram has ONE tall peak plus a thin tail — one population with a skew, not two populations. The right correction for skew is the median, not a split.",
        },
      ],
      reasoning:
        "The question tests the page's routing rules in order. SHAPE first: a single peak with a long right tail = positive skew (“asymmetry with longer tail on right”), so “typically, mean > median > mode” with the “mean falls closer to tail.” MEASURE second: “for skewed data, median is a better measure of central tendency than mean” — the few extreme stays (the outliers that make the mean “most affected by outliers”) would inflate the reported typical stay. Option B half-rightly names the skew but picks the mean; option C quotes a true printed sentence (mode least affected by outliers) but misapplies it; option D misclassifies the shape as Gaussian; option E overcorrects to bimodal when the histogram has one peak. A is the only option that gets both the shape and the measure right.",
    },
  },
  mnemonics: [
    {
      code: "H0 = ZERO difference · H1 = at least ONE",
      meaning:
        "FIRST AID'S OWN red-printed linkage (book 265, hypothesis-testing rows; the subscript 0 of H0, the subscript 1 of H1, and the words “zero” and “one” print in RED BOLD — texttrace + VLM census, staging-pubh13/vlm-census.txt — carried verbatim and attributed): the null hypothesis H0 is the hypothesis “with zero difference between two groups or variables in the population”; the alternative hypothesis H1 “states at least one difference or association between two groups or variables in the population.”",
      memorizes:
        "Which hypothesis is which — H0 ↔ zero difference; H1 ↔ at least one difference or association",
      whenToUse:
        "Any stem naming the null or alternative hypothesis, and the opening move of every P value question: the P value is computed “assuming that H0 is correct,” so identifying H0 as the zero-difference hypothesis is step one of reading any inferential result.",
      clinical:
        "Every trial report leans on this pair (KYP context): “the drug is no better than placebo” is H0; “the drug differs from placebo” is H1 — and the Type I/II error machinery on book 266 continues the story (a separate topic).",
    },
    {
      code: "THE MEAN CHASES THE TAIL",
      meaning:
        "A KYP ORIGINAL — the engine behind both printed orderings: every value enters the mean's sum, so the long tail drags the mean toward it (“mean falls closer to tail” is printed for both skews); the median only ranks, so it stays near the bulk; the mode sits at the peak. Tail RIGHT (positive skew) → mean > median > mode; tail LEFT (negative skew) → mean < median < mode — the inequality always points the same way as the tail.",
      memorizes:
        "Both skew orderings and their mechanism, in one rule that survives a forgotten table",
      whenToUse:
        "Any histogram or stem with one long tail; sketch the peak, find the tail, and write the three measures in order — the mean goes to the tail side, the mode to the peak, the median between them (matching the printed figures' marker cascades: Mode → Median → Mean for positive skew; Mean → Median → Mode for negative).",
      clinical:
        "Right-skewed clinical variables (hospital length of stay, charges — KYP examples) get reported as medians; the rule also predicts why a single extreme outlier can pull a trial's mean outcome while leaving its median untouched.",
    },
    {
      code: "68–95–99.7 AT 1–2–3σ",
      meaning:
        "A KYP ORIGINAL packaging of the printed normal-curve labels (the 68%, 95%, 99.7% braces below the axis, spanning ±1σ, ±2σ, ±3σ respectively): for a normal (Gaussian, bell-shaped) distribution, ≈68% of values lie within ±1 SD of the mean, ≈95% within ±2 SD, and ≈99.7% within ±3 SD.",
      memorizes:
        "The σ-band percentages of the normal distribution, banded by 1, 2, and 3 standard deviations",
      whenToUse:
        "Any question quoting a mean and SD and asking what fraction of values fall in a range (or a lab's reference interval, or how extreme a given value is): count σ-steps from the mean and read the band.",
      clinical:
        "Lab reference ranges and growth-chart percentiles are band questions in disguise (KYP context); the same three numbers reappear throughout the inference pages — confidence intervals at 1.96 SD (~95%) and the alpha convention 0.05 (~the outer 5%).",
    },
    {
      code: "QUADRUPLE n, HALVE THE SE",
      meaning:
        "A KYP ORIGINAL corollary of the printed formula lines “SE = σ/√n” and “SE ↓ as n ↑”: because the sample size enters under a SQUARE ROOT, quadrupling the sample size halves the standard error (n: 25 → 100 with σ = 20 gives SE: 4 → 2), and cutting the SE in half requires FOUR TIMES the data — precision is bought at a diminishing rate.",
      memorizes:
        "The shape of the SE-vs-n relationship — the square root — not just its direction",
      whenToUse:
        "Any stem that changes the sample size and asks what happens to the standard error, the precision of a mean estimate, or the width of a confidence interval (the SE is the CI's engine — the next page's material).",
      clinical:
        "Study-design arithmetic (KYP context): a researcher who wants to halve the error of a survey estimate must enroll four times the subjects — which is why large trials cost what they cost.",
    },
  ],
  rapidReview: {
    s30: [
      "Mean = (sum of values)/(total number of values) — most affected by outliers (extreme values)",
      "Median = middle value of a list of data sorted from least to greatest; even number of values → average of the middle two",
      "Mode = most common value — least affected by outliers",
      "Standard deviation = how much variability exists in a set of values, around the mean of these values",
      "Standard error = an estimate of how much variability exists in a (theoretical) set of sample means around the true population mean; σ = SD; n = sample size; Variance = (SD)²; SE = σ/√n; SE ↓ as n ↑",
      "Normal distribution — Gaussian, bell-shaped; mean = median = mode; the mean is the best measure of central tendency; ≈68% within ±1σ, 95% within ±2σ, 99.7% within ±3σ",
      "For skewed data, median is a better measure of central tendency than mean",
      "Bimodal distribution — suggests two different populations: fast vs slow acetylators (metabolic polymorphism); age at onset of Hodgkin lymphoma; suicide rate by age",
      "Positive skew — typically mean > median > mode; longer tail on right; mean falls closer to tail",
      "Negative skew — typically mean < median < mode; longer tail on left; mean falls closer to tail",
      "H0 (null hypothesis) — zero difference between two groups or variables in the population",
      "H1 (alternative hypothesis) — at least one difference or association between two groups or variables in the population",
      "P value — probability of obtaining test results at least as extreme as those observed in the sample, assuming H0 is correct; commonly accepted as 0.05 (<5% of such repeated tests would show results that extreme just by chance alone)",
    ],
    m3: [
      "H0 = ZERO difference · H1 = at least ONE — First Aid's own red-printed linkage (attributed)",
      "THE MEAN CHASES THE TAIL — tail right → mean > median > mode; tail left → mean < median < mode (KYP)",
      "68–95–99.7 AT 1–2–3σ — the normal bands, as the below-axis braces print them (KYP)",
      "QUADRUPLE n, HALVE THE SE — SE = σ/√n, so SE ↓ as n ↑ (KYP)",
    ],
    m10: [
      "The normal curve's printed geometry: σ tick labels INSIDE the curve cascading down the contour; the 68%/95%/99.7% labels BELOW the axis, stacked under the center, each above its horizontal curly brace (68% narrowest ±1σ at top, 99.7% widest ±3σ at bottom, cusps pointing down)",
      "The printed figure markers: positive skew reads Mode → Median → Mean left to right (Mode at the peak, Mean down the tail); negative skew reads Mean → Median → Mode (Mean on the left tail, Mode at the peak) — the bimodal figure prints NO markers and NO σ ticks",
      "SD vs SE: SD scatters the VALUES around their mean; SE scatters (theoretical) SAMPLE MEANS around the true population mean — only the SE carries √n",
      "The three printed bimodal anchors with their clinical bodies: fast vs slow acetylators (NAT2 polymorphism — isoniazid toxicity in slow acetylators, KYP context), Hodgkin lymphoma bimodal age at onset (young adults + older adults, KYP context), suicide rate by age (two peaks, KYP context)",
      "The hypothesis-testing opener is the doorway: the P value assumes H0 is correct — the Type I/II error machinery continues on book 266 (separate topic)",
      "Raw-layer quirk, documented: the σ ticks, percentage labels, and Mode/Median/Mean cascades extract 2-3× each (clipped invisible duplicates — an InDesign plate artifact); the page prints each label ONCE (VLM-4-pass + pixel-visibility pinned)",
    ],
  },
  recall: [
    {
      q: "What is the printed definition of the mean, and how does it behave with outliers?",
      a: "Mean = (sum of values)/(total number of values). It is the most affected by outliers (extreme values).",
    },
    {
      q: "What is the median, and what happens when there is an even number of values?",
      a: "Median = middle value of a list of data sorted from least to greatest; if there is an even number of values, the median will be the average of the middle two values.",
    },
    {
      q: "What is the mode's outlier behavior, and which measure sits between the mean and the mode in sensitivity?",
      a: "Mode = most common value — least affected by outliers. The median (rank-based) sits in between: less sensitive than the mean, more informative about position than the mode.",
    },
    {
      q: "Give the printed dispersion formulas — SD, SE, variance — and the behavior of SE as n grows.",
      a: "Standard deviation = how much variability exists in a set of values, around the mean of these values; standard error = an estimate of how much variability exists in a (theoretical) set of sample means around the true population mean; σ = SD, n = sample size; Variance = (SD)²; SE = σ/√n; SE ↓ as n ↑.",
    },
    {
      q: "What are the two printed rules for choosing the best measure of central tendency?",
      a: "For normal distribution, mean is the best measure of central tendency; for skewed data, median is a better measure of central tendency than mean.",
    },
    {
      q: "What does a bimodal distribution suggest, and what three printed examples anchor it?",
      a: "It suggests two different populations — the printed examples: metabolic polymorphism such as fast vs slow acetylators; age at onset of Hodgkin lymphoma; suicide rate by age.",
    },
    {
      q: "State both printed skew orderings with their geometry.",
      a: "Positive skew: typically mean > median > mode — asymmetry with longer tail on right, mean falls closer to tail. Negative skew: typically mean < median < mode — asymmetry with longer tail on left, mean falls closer to tail. (Figures' markers: positive reads Mode → Median → Mean; negative reads Mean → Median → Mode.)",
    },
    {
      q: "Define the null hypothesis, the alternative hypothesis, and the P value exactly as printed.",
      a: "Null hypothesis (also called H0): hypothesis with zero difference between two groups or variables in the population. Alternative hypothesis (also called H1): hypothesis states at least one difference or association between two groups or variables in the population. P value: probability of obtaining test results at least as extreme as those observed in the sample, assuming that H0 is correct — commonly accepted as 0.05 (<5% of such repeated tests would show results that extreme just by chance alone).",
    },
  ],
  related: [
    {
      title: "Hypothesis testing errors — Type I, Type II, and power",
      note:
        "The very next page of the chapter (book 266): the error machinery built on this page's opener — Type I error (α, rejecting a true H0), Type II error (β, failing to reject a false H0), and power (1 − β). This page supplies the H0/H1 definitions and the 0.05 convention those errors are priced against.",
      topicId: "hypothesis-testing-errors",
    },
    {
      title: "Confidence intervals and meta-analysis",
      note:
        "The standard error defined here (SE = σ/√n, SE ↓ as n ↑) is the engine of the confidence interval (mean ± z·SE) and of the meta-analysis forest plot on book 267 — the pages that quantify how precisely a sample mean pins the true population mean.",
      topicId: "confidence-intervals-meta-analysis",
    },
    {
      title: "ROC curves, precision, and accuracy",
      note:
        "The same distribution logic in diagnostic clothing: ROC curves trade sensitivity against specificity across cutoffs, and the 68-95-99.7 σ bands taught here are the template for thinking about where a cutoff falls inside overlapping distributions of diseased and healthy.",
      topicId: "roc-precision-accuracy",
    },
    {
      title: "Choosing the statistical test",
      note:
        "Book 267's decision tree (t test, chi-square, ANOVA…) consumes this page's vocabulary — every test is a rule for computing a P value under a named H0, and which test applies depends on the distribution shape classified here (normal vs skewed, paired vs independent).",
      topicId: "statistical-tests",
    },
  ],
  crossLinks: [
    {
      subject: "Biostatistics and epidemiology — sampling and inference",
      connection:
        "The standard error is the bridge from description to inference: SE = σ/√n quantifies how far a sample mean may sit from the true population mean, which is why “SE ↓ as n ↑” reappears as the shrinking of confidence intervals and the power gain of larger trials on the next pages of this chapter.",
    },
    {
      subject: "Pharmacology — drug metabolism and pharmacogenomics",
      connection:
        "The printed bimodal anchor “metabolic polymorphism such as fast vs slow acetylators” is NAT2 pharmacogenomics: slow acetylators (isoniazid → peripheral neuropathy, drug-induced lupus; hydralazine, procainamide toxicity) and fast acetylators (isoniazid hepatotoxicity risk with higher exposure) are the two humps — one drug, two populations (clinical unpacking is KYP context beyond the printed sentence).",
    },
    {
      subject: "Pathology — hematologic malignancies",
      connection:
        "Hodgkin lymphoma's age at onset is the page's second bimodal anchor: incidence peaks in young adults (nodular sclerosis, EBV-linked) and again in older adults — a single “mean age at onset” would fall between the peaks and misrepresent both (the bimodal figure's printed lesson).",
    },
    {
      subject: "Behavioral science and psychiatry — suicide risk across the lifespan",
      connection:
        "Suicide rate by age, the third printed bimodal anchor, is a screening vigilance map: rates trace two peaks across the age spectrum (with elderly men at highest risk — KYP context), so risk assessment intensity follows the population's position on the curve rather than its average.",
    },
  ],
};
