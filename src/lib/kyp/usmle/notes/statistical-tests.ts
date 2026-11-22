import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 2 / task pubh16. Source: LOWER PORTION ONLY of
// pdf page 289 / book 267 (Part 1) — the OTHER HALF of a PINNED PAGE-SPLIT.
// Scope: from the navy "Common statistical tests" heading (raw text-layer
// line 39, bbox y≈336, below a thin horizontal rule) through the page end.
// The Confidence interval block + its significance-rules panel + the
// Meta-analysis block ABOVE the split belong to confidence-intervals-meta-
// analysis (produced as pubh15) — no evidence quote in this note crosses the
// boundary, and the upper portion's formulas and rules are never quoted here.
// BLOCKS OWNED (two): (1) the "Common statistical tests" TABLE — FOUR rows in
// printed order, each with a left row label, a middle "Checks..." cell, and a
// right mnemonic + Example cell: t-test ("Checks differences between means of
// 2 groups." / "Tea is meant for 2." / "Example: comparing the mean blood
// pressure between men and women."), ANOVA ("Checks differences between means
// of 3 or more groups." / "3 words: ANalysis Of VAriance." / "Example:
// comparing the mean blood pressure between members of 3 different ethnic
// groups."), Chi-square (χ²) ("Checks differences between 2 or more
// percentages or proportions of categorical outcomes (not mean values)." /
// "Pronounce chi-tegorical." / "Example: comparing the proportion of members
// of 3 age groups who have essential hypertension."), and Fisher's exact test
// ("Checks differences between 2 percentages or proportions of categorical,
// nominal outcomes. Use instead of chi-square test with small samples." /
// NO mnemonic / "Example: comparing the percentage of 20 men and 20 women
// with hypertension.") — every cell carried verbatim in the note's table
// block. (2) THE TEST-SELECTION ALGORITHM FIGURE — pure vector art (pdfimages:
// ZERO raster images on the page): a top→bottom tree with a TAN rounded root
// box "Variables to be compared" (bbox x≈360–434, y≈559, page-centered),
// branching via gray elbow connectors with arrowheads LEFT to a LIGHT BLUE
// "Numerical (means)" box (x≈302–356) and RIGHT to a LIGHT PINK "Categorical
// (proportions)" box (x≈435–508); the third level prints as PLAIN TEXT
// labels, NO boxes (VLM-confirmed): "2 groups" and "≥ 3 groups" under
// Numerical, "Small sample size" and "Large sample size" under Categorical;
// each label drops a short vertical arrow onto its leaf box — "t-test" and
// "ANOVA" in light blue, "Fisher's exact test" and "Chi-square test" in light
// pink, each leaf DIRECTLY below its criterion (bbox x-alignment + VLM agree:
// 2 groups→t-test, ≥ 3 groups→ANOVA, Small sample size→Fisher's exact test,
// Large sample size→Chi-square test); no background bands. The figure's text
// objects extract at the very bottom of the raw stream (raw lines 78–101)
// with the indd footer slug "FAS1_2026_06-PubHealth.indd 267" interleaved
// MID-FIGURE between "Numerical (means)" and "Categorical (proportions)" — a
// reading-order jumble, documented; the tree's shape is pinned by pdftotext
// -bbox coordinates + the VLM pass (TWO passes: 120dpi full page + 300dpi
// lower crop, staging-pubh16/vlm-census.txt). The algorithm is an
// ORIGINAL_KYP_REDRAW (the registry visual re-lays-out the tree as KYP vector
// art; every printed label is preserved); the table is an ORIGINAL
// KYP ADAPTATION (cards). VLM ALSO CONFIRMED: exactly FOUR rows in printed
// order (none missing or extra); the three mnemonics print in RED in the
// right cells with their key words bolded ("meant", "ANalysis Of VAriance",
// "chi-tegorical"); the Fisher row prints NO mnemonic of its own — its cue is
// the printed "Use instead of chi-square test with small samples."; the four
// row labels print in DARK RED/maroon; the print bolds "means", "2", "3", and
// "categorical" inside the Checks cells; rows are separated by thin
// light-gray rules with NO zebra striping, NO vertical borders; the table
// prints with NO column-header row (unlike book 256's Observational studies
// table) — the KYP table block's column names are descriptive labels,
// documented; the heading prints bold dark navy below a thin rule. PRINTED-
// TEXT QUIRKS carried + documented: (1) "3 words: ANalysis Of VAriance." —
// the print's OWN mixed capitalization (ANalysis Of VAriance), carried
// verbatim; (2) "≥ 3 groups" prints with the ≥ character (U+2265) and a
// space; (3) "Chi-square (χ²)" prints with the Greek chi + superscript 2, and
// "Fisher's exact test" with a curly apostrophe (U+2019) — both carried as
// printed; (4) the in-cell line wraps (e.g. the Fisher Checks cell wraps
// across four lines) are print artifacts — the verbatim table carries the
// sentences unwrapped; (5) the reading-order jumble of the figure labels +
// the mid-figure indd slug (above); (6) the VLM noted a small FA
// page-reference cross-ref glyph (▝/Rx-like mark) at the diagram's right
// edge — marginal furniture, not part of the tree, not carried (documented).
// ADJUDICATIONS, documented here and in the manifest: (A) the Fisher row
// prints NO mnemonic — the brief's anticipated four rows matched the print
// exactly, and the mnemonic count is THREE (all First Aid's own, carried
// VERBATIM and ATTRIBUTED); no mnemonic is invented for Fisher; (B) the
// tree's shape matched the brief's description exactly (root → Numerical
// LEFT / Categorical RIGHT → four criteria → four leaves, each leaf directly
// below its criterion) — bbox + VLM agree, no correction needed; (C) the
// print names NO numeric threshold for "small samples" — the Fisher example's
// n=20+20 is the print's own illustration of "small"; any expected-count
// machinery is flagged KYP context, never a correction of the print.
// PROVENANCE SPLIT: verbatim = the four table rows (labels, Checks cells,
// mnemonics, Examples) and the figure's eleven labels; FA-own = the three red
// mnemonics, the bold-emphasis words, the tan/blue/pink box colors, and the
// four blood-pressure/hypertension worked examples; KYP-original = the
// two-question reading of the tree (variable type first, then group count
// for means / sample size for proportions), the means-family vs
// proportions-family engine, the route chips, the clinical-thread strip, the
// exam layer, and the KYP mnemonic "COUNT THE GROUPS, GAUGE THE SAMPLE" —
// every teaching generalization beyond the printed page is flagged as KYP
// context. DrugCards: none — the page prints statistical tests, not drugs
// (documented as folded-by-absence in the manifest). The split's upper half
// (Confidence interval + Meta-analysis) belongs to confidence-intervals-
// meta-analysis, produced as pubh15 — referenced by design in `related`,
// never quoted.

export const statisticalTests: KypUsMLENote = {
  id: "statistical-tests",
  title: "Choosing the Statistical Test",
  subtitle:
    "Every biostatistics vignette ends in the same place: which test? First Aid answers with one table and one tree. The table prints four tests, each defined by what it checks. The t-test checks differences between means of 2 groups — \"Tea is meant for 2.\" ANOVA checks differences between means of 3 or more groups — \"3 words: ANalysis Of VAriance.\" Chi-square (χ²) checks differences between 2 or more percentages or proportions of categorical outcomes (not mean values) — \"Pronounce chi-tegorical.\" And Fisher's exact test checks differences between 2 percentages or proportions of categorical, nominal outcomes, used instead of chi-square with small samples — the one row with no mnemonic, because its cue is printed in its own definition. The tree then collapses the choice into two questions asked in order: what kind of variable is being compared — Numerical (means) or Categorical (proportions)? — and then the second dial: for means, how many groups (2 groups → t-test, ≥ 3 groups → ANOVA); for proportions, how big the sample (Small sample size → Fisher's exact test, Large sample size → Chi-square test). The page's four worked examples are all blood pressure: mean BP between men and women, mean BP across 3 ethnic groups, the proportion with essential hypertension across 3 age groups, and the percentage of 20 men and 20 women with hypertension — one clinical thread running through all four leaves of the tree.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory:
    "Public Health Sciences — test-selection decoding: the four printed tests (t-test for 2 means, ANOVA for ≥ 3 means, chi-square for 2-or-more percentages/proportions of categorical outcomes, Fisher's exact test for 2 percentages/proportions with small samples), First Aid's three red mnemonics carried attributed, the four worked blood-pressure/hypertension examples, and the test-selection algorithm tree (Numerical (means) → 2 groups/≥ 3 groups → t-test/ANOVA; Categorical (proportions) → Small/Large sample size → Fisher's exact test/Chi-square test).",
  difficulty: 2,
  readTime: 5,
  sourceRef:
    "First Aid 2026, Part 1 pp. 267 (lower) (Epidemiology and Biostatistics: Common statistical tests)",
  tags: [
    "statistical tests",
    "test selection",
    "t-test",
    "ANOVA",
    "analysis of variance",
    "chi-square",
    "χ²",
    "Fisher's exact test",
    "means",
    "percentages",
    "proportions",
    "categorical outcomes",
    "nominal outcomes",
    "small samples",
    "large sample size",
    "numerical variables",
    "categorical variables",
    "2 groups",
    "3 or more groups",
    "blood pressure",
    "hypertension",
    "essential hypertension",
    "epidemiology",
    "biostatistics",
  ],
  core: {
    what:
      "One page-split portion, carried whole. BLOCK 1 — the “Common statistical tests” table (navy heading; four rows in printed order, no column-header row): (1) t-test — “Checks differences between means of 2 groups.”; mnemonic: “Tea is meant for 2.”; “Example: comparing the mean blood pressure between men and women.” (2) ANOVA — “Checks differences between means of 3 or more groups.”; mnemonic: “3 words: ANalysis Of VAriance.”; “Example: comparing the mean blood pressure between members of 3 different ethnic groups.” (3) Chi-square (χ²) — “Checks differences between 2 or more percentages or proportions of categorical outcomes (not mean values).”; mnemonic: “Pronounce chi-tegorical.”; “Example: comparing the proportion of members of 3 age groups who have essential hypertension.” (4) Fisher’s exact test — “Checks differences between 2 percentages or proportions of categorical, nominal outcomes. Use instead of chi-square test with small samples.”; NO mnemonic; “Example: comparing the percentage of 20 men and 20 women with hypertension.” BLOCK 2 — THE TEST-SELECTION ALGORITHM FIGURE (pure vector tree): root box “Variables to be compared” → two branch boxes, “Numerical (means)” (blue, left) and “Categorical (proportions)” (pink, right) → four plain-text criteria, “2 groups” and “≥ 3 groups” under Numerical, “Small sample size” and “Large sample size” under Categorical → four leaf boxes, each directly below its criterion: 2 groups → “t-test”, ≥ 3 groups → “ANOVA”, Small sample size → “Fisher’s exact test”, Large sample size → “Chi-square test”.",
    why:
      "This portion is the payoff of the chapter's inference story: the pages before it built hypotheses, errors, P values, and confidence intervals; this page is the router that sends a given comparison to the right machinery. The four tests are not four arbitrary names — they are the cells of one 2×2 design space. Axis 1, THE OUTCOME'S SCALE: a numerical outcome (a mean — blood pressure in mm Hg) lives on the left branch and is compared with t-test or ANOVA; a categorical outcome (a percentage or proportion — has hypertension yes/no) lives on the right branch and is compared with chi-square or Fisher's exact test — which is why First Aid prints the parenthetical “(not mean values)” in the chi-square cell and its mnemonic “Pronounce chi-tegorical.” Axis 2, THE SECOND DIAL: for means it is GROUP COUNT (2 groups → t-test; 3 or more → ANOVA, whose own name is the mnemonic — ANalysis Of VAriance); for proportions it is SAMPLE SIZE (small → Fisher's exact test; large → chi-square). The page also runs one clinical thread through all four leaves — four blood-pressure comparisons, two of means (men vs women; 3 ethnic groups) and two of proportions (hypertension across 3 age groups; 20 men vs 20 women) — so the same disease family exercises both halves of the tree.",
    keyIdea:
      "Route any “which test?” question in two moves. MOVE 1 — WHAT KIND OF VARIABLE IS BEING COMPARED? The print's first fork: “Variables to be compared” → Numerical (means) vs Categorical (proportions). A stem comparing MEANS (mean blood pressure, mean score, mean survival) goes left; a stem comparing PERCENTAGES or PROPORTIONS of categorical outcomes (the proportion with essential hypertension, the percentage with hypertension) goes right — the printed tell “(not mean values)” is chi-square's own fence against the means family. MOVE 2 — TURN THE SECOND DIAL. On the means branch, COUNT THE GROUPS: 2 groups → t-test (“Tea is meant for 2.”); 3 or more groups → ANOVA (“3 words: ANalysis Of VAriance.” — the mnemonic is the name). On the proportions branch, GAUGE THE SAMPLE: Small sample size → Fisher's exact test (“Use instead of chi-square test with small samples.” — it checks differences between 2 percentages or proportions of categorical, nominal outcomes); Large sample size → Chi-square test (it handles 2 OR MORE percentages or proportions — “Pronounce chi-tegorical.”). Scale, then dial — two questions, and any option list of statistical tests resolves itself.",
  },
  mechanisms: [
    {
      id: "test-selection-tree",
      title:
        "The selection tree: how the print's algorithm routes any comparison — variable type first, then the second dial — to exactly one of the four tests",
      context:
        "The printed test-selection algorithm figure (book 267 lower): root → two branches → four criteria → four leaves",
      flow: {
        nodes: [
          {
            id: "root",
            label: "ROOT — “Variables to be compared”",
            sublabel:
              "Input — every “which test?” question starts at the same root box: name the variables to be compared. The tree's first (and most important) split is not about groups or samples — it is about the SCALE of the outcome variable, and it has exactly two branches.",
            variant: "input",
          },
          {
            id: "numerical",
            label: "LEFT BRANCH — “Numerical (means)”",
            sublabel:
              "Process — the outcome is a measured number with a mean: blood pressure, weight, a score. The comparison will be a comparison of MEANS, and only two tests live on this branch: the t-test (“Checks differences between means of 2 groups.”) and ANOVA (“Checks differences between means of 3 or more groups.”). Both leaves are blue in the print — one family.",
            variant: "process",
          },
          {
            id: "categorical",
            label: "RIGHT BRANCH — “Categorical (proportions)”",
            sublabel:
              "Process — the outcome is a category counted as a percentage or proportion: has essential hypertension (yes/no). The comparison will be a comparison of PROPORTIONS, and the printed fence in the chi-square cell keeps the families apart: “categorical outcomes (not mean values).” Two leaves live here too: Chi-square test (large sample size) and Fisher's exact test (small sample size).",
            variant: "process",
          },
          {
            id: "count-dial",
            label: "MEANS DIAL — COUNT THE GROUPS",
            sublabel:
              "Process — on the numerical branch the criteria are printed as plain-text labels: “2 groups” → t-test (First Aid's own mnemonic: “Tea is meant for 2.” — two groups, two cups); “≥ 3 groups” → ANOVA (“3 words: ANalysis Of VAriance.” — the test's name is its own mnemonic, and it absorbs every additional group at once rather than running pairwise tests; KYP context: repeated pairwise t-tests inflate the chance of a false-positive, which is exactly what ANOVA exists to avoid).",
            variant: "process",
          },
          {
            id: "sample-dial",
            label: "PROPORTIONS DIAL — GAUGE THE SAMPLE",
            sublabel:
              "Process — on the categorical branch the criteria are “Small sample size” and “Large sample size.” Large → Chi-square test, which “Checks differences between 2 or more percentages or proportions of categorical outcomes (not mean values)” (“Pronounce chi-tegorical.”). Small → Fisher's exact test, the print's stand-in: “Checks differences between 2 percentages or proportions of categorical, nominal outcomes. Use instead of chi-square test with small samples.” The print names no numeric threshold — the printed example's 20 men and 20 women is its illustration of small (KYP context: the usual worry is small expected cell counts).",
            variant: "process",
          },
          {
            id: "leaf",
            label: "OUTPUT — four leaves, each directly below its criterion",
            sublabel:
              "Output — the tree lands on exactly one leaf: t-test (2 means), ANOVA (≥ 3 means), Fisher's exact test (2 proportions, small sample), Chi-square test (2-or-more proportions, large sample). In the print each leaf box sits DIRECTLY below its criterion label (bbox-pinned) — the geometry itself teaches the routing: variable type decides the column, the second dial decides the row.",
            variant: "output",
          },
        ],
        edges: [
          { from: "root", to: "numerical", label: "outcome is a measured number →" },
          { from: "root", to: "categorical", label: "outcome is a counted category →" },
          { from: "numerical", to: "count-dial", label: "then count the groups →" },
          { from: "categorical", to: "sample-dial", label: "then gauge the sample →" },
          { from: "count-dial", to: "leaf", label: "2 → t-test · ≥ 3 → ANOVA" },
          { from: "sample-dial", to: "leaf", label: "small → Fisher · large → chi-square" },
        ],
      },
    },
    {
      id: "outcome-scale-engine",
      title:
        "The scale of the outcome decides the family: why means get t-test/ANOVA while percentages and proportions of categorical, nominal outcomes get chi-square/Fisher",
      context:
        "The printed Checks cells (book 267 lower): each test's own words name what it compares",
      flow: {
        nodes: [
          {
            id: "outcome",
            label: "INPUT — what does the vignette measure?",
            sublabel:
              "Input — the fastest identifier in any stem is the outcome's scale. “Mean blood pressure between men and women” — a number per person, averaged per group (a MEAN). “The proportion of members of 3 age groups who have essential hypertension” — a category per person, counted per group (a PERCENTAGE or PROPORTION). The printed examples are deliberately paired: same disease family, opposite scales.",
            variant: "input",
          },
          {
            id: "means-family",
            label: "MEANS FAMILY — compare averages",
            sublabel:
              "Process — a mean asks “how much, on average?” and its tests compare group averages: the t-test for exactly 2 groups (“Checks differences between means of 2 groups.”), ANOVA for 3 or more (“Checks differences between means of 3 or more groups.”). Both worked examples on this family measure mean blood pressure — men vs women, and members of 3 different ethnic groups.",
            variant: "process",
          },
          {
            id: "proportions-family",
            label: "PROPORTIONS FAMILY — compare counts-as-percentages",
            sublabel:
              "Process — a proportion asks “what fraction?” and its tests compare percentages or proportions across groups: chi-square for 2 or more groups when the sample is large (“Checks differences between 2 or more percentages or proportions of categorical outcomes (not mean values).”), Fisher's exact test for exactly 2 percentages or proportions when the sample is small (“categorical, nominal outcomes. Use instead of chi-square test with small samples.”). The worked examples: the proportion with essential hypertension across 3 age groups (chi-square), and the percentage of 20 men and 20 women with hypertension (Fisher).",
            variant: "process",
          },
          {
            id: "fence",
            label: "THE PRINTED FENCE — “(not mean values)”",
            sublabel:
              "Process — the chi-square cell carries its own fence: proportions of categorical outcomes, NOT mean values. Chi-square never compares averages; a t-test never compares proportions. Cross-family answers (t-test for a proportion stem; chi-square for a mean stem) are the exam's stock distractors, and the fence sentence is the printed reason they are wrong.",
            variant: "process",
          },
          {
            id: "small-sample-switch",
            label: "THE SMALL-SAMPLE SWITCH — Fisher replaces chi-square",
            sublabel:
              "Process — within the proportions family the print swaps the leaf by sample size: Fisher's exact test is used “instead of chi-square test with small samples,” and its scope is exactly 2 percentages or proportions of categorical, NOMINAL outcomes. The printed example makes the switch visible: 20 men vs 20 women — forty people is small enough that the exact test takes over (KYP context: chi-square is an approximation that needs adequately filled cells; Fisher computes the exact answer).",
            variant: "process",
          },
          {
            id: "rule-out",
            label: "OUTPUT — the family, then the leaf",
            sublabel:
              "Output — read any comparison in two beats: BEAT 1, the scale of the outcome names the family (means → t-test/ANOVA; percentages or proportions of categorical outcomes → chi-square/Fisher). BEAT 2, the second dial names the leaf (means: 2 vs ≥ 3 groups; proportions: small vs large sample). The printed examples are the anchors: men-vs-women means, 3-ethnic-group means, 3-age-group hypertension proportions, 20-and-20 hypertension percentages.",
            variant: "output",
          },
        ],
        edges: [
          { from: "outcome", to: "means-family", label: "a number per person, averaged →" },
          { from: "outcome", to: "proportions-family", label: "a category per person, counted →" },
          { from: "means-family", to: "fence", label: "averages stay on the left branch" },
          { from: "proportions-family", to: "fence", label: "counts stay on the right branch" },
          { from: "proportions-family", to: "small-sample-switch", label: "sample size picks the leaf" },
          { from: "fence", to: "rule-out", label: "family first" },
          { from: "small-sample-switch", to: "rule-out", label: "leaf second" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "stat-tests-map",
      title:
        "The test-selection tree and the four tests (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 267 lower's two blocks. TOP — the printed algorithm redrawn as a top-to-bottom tree: the tan root “Variables to be compared” branching into the blue “Numerical (means)” box (left) and the pink “Categorical (proportions)” box (right), the four plain-text criteria (2 groups / ≥ 3 groups / Small sample size / Large sample size) each dropping a short arrow onto its leaf box (t-test, ANOVA, Fisher's exact test, Chi-square test — each leaf directly below its criterion, exactly as printed), with the KYP route chips reading the two dials aloud. BOTTOM — the four printed rows as cards in printed order: what each test checks, First Aid's three red mnemonics attributed verbatim, the documented absence of a mnemonic in the Fisher row, and the four worked examples — plus the KYP clinical-thread strip noting that every example is a blood-pressure comparison.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 289 — the page's assets are the four-row table (dark-red row labels, red mnemonic lines with bolded key words, thin light-gray rules, no zebra, no header row — VLM-read at 120dpi + 300dpi, staging-pubh16/vlm-census.txt) and the pure-vector algorithm (tan root, blue Numerical, pink Categorical, gray elbow connectors with arrowheads, plain-text criteria at level three). The visual is an ORIGINAL KYP ADAPTATION + REDRAW: the tree is re-laid-out as KYP vector art and the table as cards — the artwork and layout are KYP's, every printed label (all four rows and all eleven tree labels) is preserved from the print, and the full table is additionally carried verbatim in the note's table block. PINNED SPLIT, drawn on the visual: every element sits at or below the “Common statistical tests” boundary; the Confidence interval and Meta-analysis blocks above it belong to confidence-intervals-meta-analysis.",
    },
    {
      kind: "table",
      title:
        "Book 267 (lower) — the printed Common statistical tests table, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The portion's first block: four rows in printed order — t-test through Fisher's exact test. The print has NO column-header row (the column names below are KYP's descriptive labels; the left labels, Checks cells, and mnemonic/Example cells are the print's own layout). Three of First Aid's own mnemonics print in RED in the right cells — “Tea is meant for 2.” (t-test row), “3 words: ANalysis Of VAriance.” (ANOVA row, capitals as printed), “Pronounce chi-tegorical.” (Chi-square row) — carried here verbatim and attributed. The Fisher row prints NO mnemonic; its distinguishing cue is printed in its own Checks cell: “Use instead of chi-square test with small samples.”",
      columns: ["TEST", "WHAT IT CHECKS (print's Checks cell)", "MNEMONIC · EXAMPLE (print's right cell)"],
      rows: [
        [
          "t-test",
          "Checks differences between means of 2 groups.",
          "Tea is meant for 2. Example: comparing the mean blood pressure between men and women.",
        ],
        [
          "ANOVA",
          "Checks differences between means of 3 or more groups.",
          "3 words: ANalysis Of VAriance. Example: comparing the mean blood pressure between members of 3 different ethnic groups.",
        ],
        [
          "Chi-square (χ²)",
          "Checks differences between 2 or more percentages or proportions of categorical outcomes (not mean values).",
          "Pronounce chi-tegorical. Example: comparing the proportion of members of 3 age groups who have essential hypertension.",
        ],
        [
          "Fisher’s exact test",
          "Checks differences between 2 percentages or proportions of categorical, nominal outcomes. Use instead of chi-square test with small samples.",
          "Example: comparing the percentage of 20 men and 20 women with hypertension.",
        ],
      ],
      caption:
        "Verbatim carry, documented: FOUR rows in printed order (VLM-confirmed — none missing or extra). First Aid prints three of its mnemonics in red bold in the right cells — “Tea is meant for 2.” (t-test), “3 words: ANalysis Of VAriance.” (ANOVA; the mixed capitalization is the print's own, emphasizing AN-O-VA), “Pronounce chi-tegorical.” (Chi-square) — reproduced as printed and ATTRIBUTED to the source. The Fisher row prints NO mnemonic (VLM: both passes) — documented rather than papered over; its cue is the printed “Use instead of chi-square test with small samples.” Printed quirks carried: “Chi-square (χ²)” with the Greek chi + superscript 2; “Fisher’s exact test” with a curly apostrophe; the print bolds “means”, “2”, “3”, and “categorical” inside the Checks cells (VLM); the in-cell line wraps are print artifacts — the sentences are carried unwrapped; rows separated by thin light-gray rules, no zebra striping; the table prints without a column-header row. The four worked examples (men vs women means; 3 ethnic groups means; 3 age groups proportions; 20 men and 20 women percentages) are First Aid's own — all blood pressure.",
    },
    {
      kind: "list",
      title:
        "The decoder — test → trigger → example, row by row (KYP's reading of the table)",
      intro:
        "Each printed row compressed to its exam-decision core: what the test checks, the vignette tell that routes to it, and the printed example that anchors it. This is the layer to recall when a stem hands you a comparison and the options are tests.",
      items: [
        {
          lead: "ROW 1 — t-TEST: two means, one comparison",
          text: "Checks: differences between means of 2 groups. Tell: a numerical outcome and exactly two groups — “comparing the mean blood pressure between men and women.” First Aid's own mnemonic: “Tea is meant for 2.” Route in the tree: Numerical (means) → 2 groups. Two cups, two groups — one t-test.",
        },
        {
          lead: "ROW 2 — ANOVA: three or more means at once",
          text: "Checks: differences between means of 3 or more groups. Tell: a numerical outcome and three or more groups — “comparing the mean blood pressure between members of 3 different ethnic groups.” First Aid's own mnemonic: “3 words: ANalysis Of VAriance.” — the test's name is its own mnemonic. Route: Numerical (means) → ≥ 3 groups (KYP context: ANOVA tests all groups in one shot instead of inflating false positives with repeated pairwise t-tests).",
        },
        {
          lead: "ROW 3 — CHI-SQUARE (χ²): two or more proportions of categorical outcomes",
          text: "Checks: differences between 2 or more percentages or proportions of categorical outcomes (not mean values). Tell: a counted outcome (has essential hypertension yes/no) across two or more groups with a large sample — “comparing the proportion of members of 3 age groups who have essential hypertension.” First Aid's own mnemonic: “Pronounce chi-tegorical.” Route: Categorical (proportions) → Large sample size. The printed fence “(not mean values)” is the row's own boundary against the means family.",
        },
        {
          lead: "ROW 4 — FISHER'S EXACT TEST: two proportions, small samples",
          text: "Checks: differences between 2 percentages or proportions of categorical, nominal outcomes; “Use instead of chi-square test with small samples.” Tell: a counted outcome, exactly two groups, and a small sample — “comparing the percentage of 20 men and 20 women with hypertension.” NO mnemonic of its own prints (documented) — the printed cue is “small samples” itself. Route: Categorical (proportions) → Small sample size. KYP context: chi-square is an approximation that needs adequately filled cells; Fisher computes the exact answer when the sample is small — the print names no numeric threshold.",
        },
      ],
    },
    {
      kind: "steps",
      title: "Choosing the test from any vignette in two questions",
      intro:
        "The printed tree distilled into an ordered reading path — SCALE, then DIAL — applicable to any comparison the exam shows, printed on book 267 or not.",
      steps: [
        {
          label: "QUESTION 1 — WHAT KIND OF VARIABLE IS BEING COMPARED?",
          detail:
            "The root box “Variables to be compared” forks on the outcome's scale. MEANS language (“mean blood pressure,” an average of a measured number) → the Numerical (means) branch. PERCENTAGE/PROPORTION language (“the proportion who have essential hypertension,” a counted category) → the Categorical (proportions) branch. This first fork eliminates half the options before anything else is read.",
        },
        {
          label: "QUESTION 2a — ON THE MEANS BRANCH: HOW MANY GROUPS?",
          detail:
            "Count the groups being averaged: exactly 2 groups → t-test (“Tea is meant for 2.”); 3 or more groups → ANOVA (“3 words: ANalysis Of VAriance.”). The printed pair of mean examples differ only in group count: men vs women (two) versus members of 3 different ethnic groups (three-plus).",
        },
        {
          label: "QUESTION 2b — ON THE PROPORTIONS BRANCH: HOW BIG IS THE SAMPLE?",
          detail:
            "Gauge the sample size: Large sample size → Chi-square test, which handles 2 or more percentages or proportions of categorical outcomes (“Pronounce chi-tegorical.”); Small sample size → Fisher's exact test, which “checks differences between 2 percentages or proportions of categorical, nominal outcomes” and is used “instead of chi-square test with small samples.” The printed pair of proportion examples differ only in breadth and size: 3 age groups (large-sample territory) versus 20 men and 20 women (small).",
        },
        {
          label: "CHECK — CROSS-FAMILY AND COUNT TRAPS",
          detail:
            "Before locking the answer, run the two stock traps: (1) FAMILY CROSS — a t-test or ANOVA offered for a proportion stem (or chi-square offered for a mean stem) violates the printed fence “(not mean values)”; (2) LEAF SWAP — chi-square offered where the sample is small (the print says Fisher instead), or Fisher offered for 3+ proportions (its scope is exactly 2).",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Chi-square vs Fisher's exact test — the same family, split by sample size, in the print's own words",
      intro:
        "Rows 3 and 4 of the printed table are the proportions family's two leaves: both compare percentages or proportions of categorical outcomes, and the print's own Fisher sentence is the switch between them. Every distinguishing feature follows from sample size.",
      columns: [
        "Chi-square (χ²) — the LARGE-sample leaf",
        "Fisher’s exact test — the SMALL-sample stand-in",
      ],
      rows: [
        {
          label: "What it checks (the printed Checks cell)",
          a: "“Checks differences between 2 or more percentages or proportions of categorical outcomes (not mean values).”",
          b: "“Checks differences between 2 percentages or proportions of categorical, nominal outcomes. Use instead of chi-square test with small samples.”",
        },
        {
          label: "How many proportions",
          a: "2 or more — the printed example spans 3 groups: “the proportion of members of 3 age groups who have essential hypertension”",
          b: "Exactly 2 — the printed example is two groups: “the percentage of 20 men and 20 women with hypertension”",
        },
        {
          label: "Route in the printed tree",
          a: "Categorical (proportions) → Large sample size → Chi-square test",
          b: "Categorical (proportions) → Small sample size → Fisher’s exact test",
        },
        {
          label: "Mnemonic",
          a: "“Pronounce chi-tegorical.” — First Aid's own, printed in red",
          b: "NONE prints in the row (documented) — the cue is the printed “small samples” sentence itself",
        },
        {
          label: "The exam tell",
          a: "A proportion/percentage stem with a large sample (or 3+ groups) — the default categorical test",
          b: "The same stem shape with a small sample — the print's instruction: use it “instead of chi-square test”",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — three stem shapes and one small-sample twist",
      body:
        "SHAPE 1 — PICK THE TEST (means): the stem compares averages — “mean blood pressure between men and women” → t-test; “mean blood pressure between members of 3 different ethnic groups” → ANOVA; the discriminator is only the group count. SHAPE 2 — PICK THE TEST (proportions): the stem compares percentages or proportions of categorical outcomes — “the proportion of members of 3 age groups who have essential hypertension” → Chi-square; the discriminator is the counted, categorical outcome (“not mean values”). SHAPE 3 — ROUTE FROM THE TREE: a two-step question or a matching set that walks the algorithm — Variables to be compared → Numerical (means) or Categorical (proportions) → the second dial → the leaf; know the tree's labels cold because the options are the four leaves. THE SMALL-SAMPLE TWIST: the same proportion stem with “20 men and 20 women” (a small sample) flips the answer from chi-square to Fisher's exact test — the print's own sentence “Use instead of chi-square test with small samples.” is the entire basis of the twist, and the exam uses it verbatim.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own red mnemonics — printed in the cells, carried attributed",
      body:
        "The portion prints THREE mnemonics of its own, in RED in the right cells (VLM-confirmed at 120dpi + 300dpi, staging-pubh16/vlm-census.txt) — these are the source's hooks, carried VERBATIM and ATTRIBUTED, not KYP's: (1) “Tea is meant for 2.” — the t-test row: TWO groups, two cups of tea; (2) “3 words: ANalysis Of VAriance.” — the ANOVA row: the test's name is its own mnemonic, three words for three-or-more groups (the capitalization is the print's own); (3) “Pronounce chi-tegorical.” — the Chi-square row: chi-square is for CATEGORICAL outcomes. The Fisher row prints NO mnemonic of its own — documented, not papered over; its printed cue is “Use instead of chi-square test with small samples.” The one KYP original in the Memory section below is marked as such: “COUNT THE GROUPS, GAUGE THE SAMPLE” (the tree's second dial: means branch → count the groups; proportions branch → gauge the sample).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The page's clinical anchors — one thread, four tests: blood pressure and hypertension",
      intro:
        "First Aid runs all four worked examples on one clinical thread — blood pressure and hypertension — two on the means family and two on the proportions family; all four are printed in the right cells and are the fastest anchors for test-selection questions.",
      items: [
        {
          lead: "MEANS, TWO GROUPS — men vs women (t-test)",
          text: "“Example: comparing the mean blood pressure between men and women.” — a measured number (BP in mm Hg) averaged in each of exactly 2 groups: the t-test's printed anchor (“Tea is meant for 2.”).",
        },
        {
          lead: "MEANS, THREE-PLUS GROUPS — 3 ethnic groups (ANOVA)",
          text: "“Example: comparing the mean blood pressure between members of 3 different ethnic groups.” — the same measured outcome, now across 3 groups: ANOVA's printed anchor (“3 words: ANalysis Of VAriance.”). Same variable, different dial — the pair exists to teach the group-count fork.",
        },
        {
          lead: "PROPORTIONS, LARGE SAMPLE — hypertension across 3 age groups (chi-square)",
          text: "“Example: comparing the proportion of members of 3 age groups who have essential hypertension.” — hypertension has become a counted category (who has it), compared as proportions across 3 groups: chi-square's printed anchor (“Pronounce chi-tegorical.” — categorical outcomes, not mean values).",
        },
        {
          lead: "PROPORTIONS, SMALL SAMPLE — 20 men and 20 women (Fisher's exact test)",
          text: "“Example: comparing the percentage of 20 men and 20 women with hypertension.” — the same counted outcome, back to 2 groups, now with small samples: Fisher's exact test's printed anchor (“Use instead of chi-square test with small samples.”). The four examples together draw the whole tree in one disease family (KYP framing).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A researcher compares the mean blood pressure of 40 men and 40 women to determine whether the two groups differ.",
        discriminator:
          "A numerical outcome compared as a MEAN between exactly 2 groups — the printed example itself, at any sample size",
        concept: "Choosing the t-test",
        answer:
          "t-test — “Checks differences between means of 2 groups.” (“Tea is meant for 2.”). Route: Variables to be compared → Numerical (means) → 2 groups → t-test.",
      },
      {
        stem: "An investigator measures mean blood pressure in members of 3 different ethnic groups and asks whether the groups differ overall.",
        discriminator:
          "A numerical outcome compared as a MEAN across 3 or more groups — the group count, not the outcome, changes the test",
        concept: "Choosing ANOVA",
        answer:
          "ANOVA — “Checks differences between means of 3 or more groups.” (“3 words: ANalysis Of VAriance.”). Route: Numerical (means) → ≥ 3 groups → ANOVA — one test absorbs all the groups at once (KYP context: repeated pairwise t-tests would inflate the false-positive risk).",
      },
      {
        stem: "A public-health team records whether each member of 3 age groups has essential hypertension and compares the proportion with hypertension across the groups.",
        discriminator:
          "A counted, categorical outcome compared as a PROPORTION across 2 or more groups with a large sample — “not mean values”",
        concept: "Choosing the chi-square test",
        answer:
          "Chi-square test — “Checks differences between 2 or more percentages or proportions of categorical outcomes (not mean values).” (“Pronounce chi-tegorical.”). Route: Categorical (proportions) → Large sample size → Chi-square test.",
      },
      {
        stem: "A resident compares the percentage of 20 men and 20 women with hypertension and asks which test to use; a colleague proposes chi-square.",
        discriminator:
          "A categorical, nominal outcome in exactly 2 groups with a SMALL sample — the print's own substitution rule",
        concept: "Choosing Fisher's exact test",
        answer:
          "Fisher's exact test — “Checks differences between 2 percentages or proportions of categorical, nominal outcomes. Use instead of chi-square test with small samples.” The printed example is exactly this stem (20 men and 20 women). Route: Categorical (proportions) → Small sample size → Fisher's exact test.",
      },
    ],
    traps: [
      {
        a: "t-test — 2 means",
        b: "ANOVA — 3 or more means",
        whyConfused:
          "Both live on the Numerical (means) branch and both compare averages; the printed examples differ only in group count (men vs women vs members of 3 different ethnic groups)",
        keyDifference:
          "The GROUP COUNT is the only dial: exactly 2 groups → t-test; 3 or more groups → ANOVA. Nothing about the outcome itself changes — both printed examples measure mean blood pressure",
        clue:
          "Count the groups being averaged before reading the options — “Tea is meant for 2.” vs “3 words: ANalysis Of VAriance.”",
      },
      {
        a: "t-test / ANOVA — the means family",
        b: "Chi-square — the proportions family",
        whyConfused:
          "Both families answer “do these groups differ?” — and a stem can mention blood pressure on either branch (mean BP for t-test/ANOVA; proportion with hypertension for chi-square)",
        keyDifference:
          "The SCALE of the outcome: means of measured numbers → t-test/ANOVA; percentages or proportions of categorical outcomes → chi-square. The chi-square cell carries its own fence: “(not mean values)”",
        clue:
          "“Mean …” in the stem → left branch; “proportion/percentage with …” → right branch — “Pronounce chi-tegorical.”",
      },
      {
        a: "Chi-square test — large sample size",
        b: "Fisher's exact test — small sample size",
        whyConfused:
          "Both compare percentages or proportions of categorical outcomes; both printed examples use hypertension (3 age groups vs 20 men and 20 women)",
        keyDifference:
          "SAMPLE SIZE (and count): chi-square handles 2 or more proportions with a large sample; Fisher handles exactly 2 percentages or proportions and is used “instead of chi-square test with small samples”",
        clue:
          "Small n in the stem (tens, not hundreds) with a 2-group proportion comparison → Fisher's exact test — the printed example is 20 men and 20 women.",
      },
      {
        a: "ANOVA — 3 or more MEANS (3 ethnic groups)",
        b: "Chi-square — 2 or more PROPORTIONS (3 age groups)",
        whyConfused:
          "Both printed examples span exactly 3 groups, and both use blood-pressure-related outcomes — the group count is identical, so it cannot be the discriminator",
        keyDifference:
          "The OUTCOME'S SCALE: mean blood pressure (a measured number, averaged) → ANOVA; the proportion who have essential hypertension (a counted category) → chi-square. Same dial position on the tree, different branch",
        clue:
          "When two 3-group examples collide, ask what is being compared — an average or a fraction. “not mean values” points right.",
      },
    ],
    pivots: [
      {
        lookAlike: "A “which statistical test is most appropriate?” option list with all four tests",
        differentiator:
          "Run the printed tree, not the option list — the tree eliminates half the options at the first fork",
        correctPath:
          "Step 1, the outcome's scale: a mean → t-test/ANOVA; a percentage or proportion of categorical outcomes → chi-square/Fisher. Step 2, the dial: means → count the groups (2 → t-test; ≥ 3 → ANOVA); proportions → gauge the sample (small → Fisher's exact test; large → Chi-square test).",
      },
      {
        lookAlike: "The word “mean” appearing in a proportion-shaped stem (or “percentage” in a mean-shaped stem)",
        differentiator:
          "The verb of comparison names the family: comparing MEANS vs comparing PERCENTAGES or PROPORTIONS",
        correctPath:
          "Match the compared quantity, not the topic: “mean blood pressure” → Numerical (means) branch even though BP also appears in the hypertension proportions examples; “the proportion/percentage with hypertension” → Categorical (proportions) branch even though the disease is the same. The printed fence “(not mean values)” enforces the split.",
      },
      {
        lookAlike: "A chi-square-shaped stem that quietly reports a small sample",
        differentiator:
          "Sample size is the proportions family's second dial — the print swaps the leaf on it",
        correctPath:
          "Two groups, categorical nominal outcome, small sample (the printed example: 20 men and 20 women) → Fisher's exact test, used “instead of chi-square test with small samples.” Large sample, or 3 or more groups → Chi-square test. The print names no numeric threshold — small is judged by the stem's own arithmetic (KYP context: the usual worry is small expected cell counts).",
      },
    ],
    miniCase: {
      vignette:
        "A resident wants to know whether hypertension is equally common in the men and women of a small village clinic. She measures blood pressure in 20 men and 20 women, classifies each patient as having hypertension or not, and computes the percentage with hypertension in each group. She plans to compare the two percentages. A medical student suggests the chi-square test; the resident is unsure, because the samples are small.",
      question:
        "Which of the following is the most appropriate statistical test for this comparison?",
      options: [
        {
          label: "A",
          text: "Fisher's exact test",
          correct: true,
          why: "CORRECT — the comparison is between 2 percentages of a categorical, nominal outcome (hypertension yes/no in men vs women), and the samples are small (20 per group — the printed example's own numbers). The printed rule: “Checks differences between 2 percentages or proportions of categorical, nominal outcomes. Use instead of chi-square test with small samples.”",
        },
        {
          label: "B",
          text: "Chi-square test",
          why: "TEMPTING but wrong — the family is right (chi-square “Checks differences between 2 or more percentages or proportions of categorical outcomes”), but the print's Fisher sentence overrides it here: use Fisher's exact test “instead of chi-square test with small samples.” With 20 men and 20 women, the samples are small — the very twist the exam prints this row for.",
        },
        {
          label: "C",
          text: "t-test",
          why: "WRONG family — the t-test “Checks differences between means of 2 groups.” This study does not compare a mean: each patient is classified hypertensive or not, and the compared quantities are percentages of a categorical outcome. The chi-square cell's own fence — “(not mean values)” — marks the boundary.",
        },
        {
          label: "D",
          text: "ANOVA",
          why: "WRONG family and wrong count — ANOVA “Checks differences between means of 3 or more groups.” There are only 2 groups here, and the outcome is a counted category, not an averaged measurement — both dials point away from ANOVA.",
        },
        {
          label: "E",
          text: "Pearson correlation coefficient",
          why: "WRONG tool entirely — a correlation quantifies a linear relationship between two continuous variables measured in the same subjects. Here there is one categorical outcome compared across two groups; nothing is correlated. (The correlation coefficient is the next page's topic — the printed tree routes this stem nowhere near it.)",
        },
      ],
      reasoning:
        "The question walks the printed tree. Step 1, the outcome's scale: hypertension is a counted category (yes/no), and the compared quantities are percentages — Categorical (proportions), eliminating the means family (C and D) and the correlation (E). Step 2, the proportions dial: exactly 2 groups (men vs women), and the samples are small — 20 per group, the printed Fisher example's own arithmetic. The print's rule is explicit: Fisher's exact test is used “instead of chi-square test with small samples,” which is why the student's chi-square suggestion (B) is the designed distractor — right family, wrong leaf. Option A is the printed answer: Fisher's exact test for 2 percentages of categorical, nominal outcomes with small samples.",
    },
  },
  mnemonics: [
    {
      code: "Tea is meant for 2.",
      meaning:
        "FIRST AID'S OWN mnemonic, printed in red in the t-test row's right cell (carried verbatim, attributed): tea for two — the t-test checks differences between means of exactly 2 groups.",
      memorizes:
        "The t-test's group count — 2 groups (and its outcome type — means)",
      whenToUse:
        "Any stem comparing a mean between exactly two groups (“comparing the mean blood pressure between men and women”), and any option list where t-test competes with ANOVA.",
      clinical:
        "The workhorse of two-arm comparisons (KYP context): mean BP between the sexes, mean scores between two clinics, mean weight change between two diets — two cups, two groups, one t-test.",
    },
    {
      code: "3 words: ANalysis Of VAriance.",
      meaning:
        "FIRST AID'S OWN mnemonic, printed in red in the ANOVA row's right cell (carried verbatim, attributed — the mixed capitalization ANalysis Of VAriance is the print's own): the test's name is three words, and it checks differences between means of 3 or more groups.",
      memorizes:
        "ANOVA's group count — 3 or more groups (and its outcome type — means)",
      whenToUse:
        "Any stem comparing a mean across three or more groups (“comparing the mean blood pressure between members of 3 different ethnic groups”).",
      clinical:
        "ANOVA tests all groups in one comparison (KYP context): running repeated pairwise t-tests instead would inflate the false-positive risk — the reason the group-count dial exists.",
    },
    {
      code: "Pronounce chi-tegorical.",
      meaning:
        "FIRST AID'S OWN mnemonic, printed in red in the Chi-square row's right cell (carried verbatim, attributed): “chi-tegorical” blends chi-square with categorical — the chi-square test checks differences between 2 or more percentages or proportions of categorical outcomes (not mean values).",
      memorizes:
        "Chi-square's outcome type — percentages or proportions of CATEGORICAL outcomes, never means",
      whenToUse:
        "Any stem comparing proportions or percentages across groups (“comparing the proportion of members of 3 age groups who have essential hypertension”), and any option list mixing chi-square with t-test/ANOVA.",
      clinical:
        "The default categorical test when the sample is large (KYP context): with small samples the print substitutes Fisher's exact test.",
    },
    {
      code: "COUNT THE GROUPS, GAUGE THE SAMPLE",
      meaning:
        "A KYP ORIGINAL — the tree's second dial in one sentence: on the Numerical (means) branch, COUNT THE GROUPS (2 → t-test; ≥ 3 → ANOVA); on the Categorical (proportions) branch, GAUGE THE SAMPLE (Small sample size → Fisher's exact test; Large sample size → Chi-square test). Pair with the first fork (means vs proportions) to run the whole printed algorithm.",
      memorizes:
        "The second question of the test-selection algorithm for both branches — which dial to turn after naming the variable type",
      whenToUse:
        "Any two-step “which test?” question: first name the outcome's scale (mean vs percentage/proportion of categorical outcomes), then turn this dial — group count on the means branch, sample size on the proportions branch.",
      clinical:
        "The dial explains the page's own example pairs (KYP framing): mean blood pressure flips tests by group count (men/women vs 3 ethnic groups) while hypertension proportions flip tests by sample size (20 vs 20 vs 3 age groups).",
    },
  ],
  rapidReview: {
    s30: [
      "t-test — checks differences between means of 2 groups; “Tea is meant for 2.”; example: mean blood pressure between men and women",
      "ANOVA — checks differences between means of 3 or more groups; “3 words: ANalysis Of VAriance.”; example: mean blood pressure between members of 3 different ethnic groups",
      "Chi-square (χ²) — checks differences between 2 or more percentages or proportions of categorical outcomes (not mean values); “Pronounce chi-tegorical.”; example: proportion of members of 3 age groups with essential hypertension",
      "Fisher's exact test — checks differences between 2 percentages or proportions of categorical, nominal outcomes; use instead of chi-square test with small samples; example: percentage of 20 men and 20 women with hypertension",
      "The algorithm — Variables to be compared → Numerical (means): 2 groups → t-test, ≥ 3 groups → ANOVA; Categorical (proportions): Small sample size → Fisher's exact test, Large sample size → Chi-square test",
    ],
    m3: [
      "“Tea is meant for 2.” — t-test, 2 means (First Aid's own, printed in red)",
      "“3 words: ANalysis Of VAriance.” — ANOVA, ≥ 3 means (First Aid's own, printed in red)",
      "“Pronounce chi-tegorical.” — chi-square, categorical proportions, not means (First Aid's own, printed in red)",
      "COUNT THE GROUPS, GAUGE THE SAMPLE — the tree's second dial (KYP)",
    ],
    m10: [
      "The tree's two forks: (1) the outcome's scale — Numerical (means) vs Categorical (proportions); (2) the second dial — group count on the means branch (2 → t-test; ≥ 3 → ANOVA), sample size on the proportions branch (small → Fisher; large → chi-square)",
      "The Fisher row prints NO mnemonic (documented) — its printed cue is “Use instead of chi-square test with small samples.”; its scope is exactly 2 percentages or proportions of categorical, nominal outcomes",
      "The printed 3-group pair is the purest discriminator drill: 3 ethnic groups compared by MEAN blood pressure → ANOVA; 3 age groups compared by PROPORTION with hypertension → chi-square — same group count, different branch",
      "Every worked example on the page is a blood-pressure comparison: two means (men vs women; 3 ethnic groups) and two hypertension proportions (3 age groups; 20 men vs 20 women) — one clinical thread through all four leaves",
    ],
  },
  recall: [
    {
      q: "Which test checks differences between means of 2 groups, and what is First Aid's printed mnemonic for it?",
      a: "The t-test — “Tea is meant for 2.” Printed example: comparing the mean blood pressure between men and women.",
    },
    {
      q: "Which test checks differences between means of 3 or more groups, and what is First Aid's printed mnemonic for it?",
      a: "ANOVA — “3 words: ANalysis Of VAriance.” Printed example: comparing the mean blood pressure between members of 3 different ethnic groups.",
    },
    {
      q: "Which test checks differences between 2 or more percentages or proportions of categorical outcomes (not mean values), and what is First Aid's printed mnemonic for it?",
      a: "Chi-square (χ²) — “Pronounce chi-tegorical.” Printed example: comparing the proportion of members of 3 age groups who have essential hypertension.",
    },
    {
      q: "Which test checks differences between 2 percentages or proportions of categorical, nominal outcomes — and when is it used instead of chi-square?",
      a: "Fisher's exact test — “Use instead of chi-square test with small samples.” Printed example: comparing the percentage of 20 men and 20 women with hypertension.",
    },
    {
      q: "In the printed test-selection algorithm, what are the two branches under “Variables to be compared,” and which tests hang from each?",
      a: "Numerical (means) → 2 groups → t-test and ≥ 3 groups → ANOVA; Categorical (proportions) → Small sample size → Fisher's exact test and Large sample size → Chi-square test.",
    },
    {
      q: "A stem compares the proportion of members of 3 age groups who have essential hypertension. Which test, and why not the t-test or ANOVA?",
      a: "Chi-square test — 2 or more percentages or proportions of categorical outcomes; the t-test and ANOVA check differences between MEANS, and the chi-square cell's own fence reads “(not mean values).”",
    },
    {
      q: "A stem compares the percentage of 20 men and 20 women with hypertension. Which test, and why not chi-square?",
      a: "Fisher's exact test — 2 percentages or proportions of categorical, nominal outcomes with small samples; the print says to use it “instead of chi-square test with small samples.”",
    },
    {
      q: "The printed table's four worked examples all involve one clinical variable family. What is it, and how do the examples split across the tree?",
      a: "Blood pressure/hypertension: means — men vs women (t-test) and members of 3 different ethnic groups (ANOVA); proportions — members of 3 age groups with essential hypertension (chi-square) and 20 men vs 20 women (Fisher's exact test).",
    },
  ],
  related: [
    {
      title: "Confidence intervals and meta-analysis — the split page's upper half",
      note:
        "The blocks directly above the “Common statistical tests” heading on the same book page: the interval estimate (CI = 1 – α, x ± Z(SE), Z = 1.96/2.58, the sample-size narrowing rule), the six mirrored H0 verdict rules, and meta-analysis pooling. Once a test is chosen with this page's tree, its result is reported with that page's intervals — estimate and test are the same evidence read two ways.",
      topicId: "confidence-intervals-meta-analysis",
    },
    {
      title: "Hypothesis testing and errors — what the chosen test actually does",
      note:
        "Every leaf of this page's tree is a hypothesis test underneath: it computes a statistic and returns a P value that either rejects or fails to reject H0, with α (type I) and β (type II) errors priced in. The test-selection tree decides WHICH machinery runs; the hypothesis-testing page defines what the machinery computes.",
      topicId: "hypothesis-testing-errors",
    },
    {
      title: "Statistical distributions — the shapes under the tests",
      note:
        "The t-test and ANOVA live on the normal/t and F distributions, chi-square on the χ² distribution — all built from the standard-normal (Z) backbone. The distributions page supplies the geometry that makes each test's critical region what it is.",
      topicId: "statistical-distributions",
    },
    {
      title: "Correlation and the Pearson coefficient — the other numerical tool",
      note:
        "The tree's Numerical branch compares group MEANS; when instead two continuous variables are measured per subject and their relationship (not their group difference) is the question, the tool is the Pearson correlation coefficient — the next page's topic, and the stock wrong answer for two-group comparison stems (as in this note's miniCase option E).",
      topicId: "correlation-coefficient",
    },
  ],
  crossLinks: [
    {
      subject: "Biostatistics and epidemiology — inference machinery",
      connection:
        "The four tests are the decision endpoints of the chapter's inference stack: hypotheses and α/β errors define what a test decides; P values and confidence intervals report what it found. This page is the router that sends a comparison to the right endpoint — the print's own tree is the chapter's decision diagram.",
    },
    {
      subject: "Cardiovascular — hypertension and blood-pressure measurement",
      connection:
        "Every worked example is cardiovascular: mean blood pressure between men and women and across 3 ethnic groups, essential hypertension across 3 age groups, and hypertension percentages in 20 men and 20 women. The same clinical variable exercises both halves of the test-selection tree — means (a measured BP) versus proportions (a hypertension diagnosis).",
    },
    {
      subject: "Research methods — outcome scales and study design",
      connection:
        "The tree's first fork is the outcome's measurement scale — numerical (means) versus categorical (proportions) — the same distinction that decides which measures a study can report (means and mean differences versus OR/RR from counted outcomes). Study design fixes what is collected; the outcome's scale fixes which test this page routes to.",
    },
    {
      subject: "Behavioral science and psychiatry — interpreting group comparisons",
      connection:
        "Group-comparison literacy is tested across every organ system: mean symptom scores across 2 or 3 treatment arms (t-test/ANOVA) versus the proportion responding in each arm (chi-square, or Fisher's exact test when the arms are small) — the same two-question routing, wearing psychiatric clothes.",
    },
  ],
};
