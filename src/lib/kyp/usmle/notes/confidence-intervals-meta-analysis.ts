import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 2 / task pubh15. Source: UPPER PORTION ONLY of
// pdf page 289 / book 267 (Part 1) — a PINNED PAGE-SPLIT. Scope: from the
// page top through the END of the "Meta-analysis" block, ending immediately
// BEFORE the navy "Common statistical tests" heading (raw text-layer line
// 39), which opens the LOWER portion owned by statistical-tests (produced in
// a later batch) — the split boundary is pinned by pdftotext -bbox (the
// "Common statistical tests" heading sits at y≈336 pt, below a thin
// horizontal rule) and by the VLM pass; no evidence quote in this note
// crosses it, and the lower portion's t-test/ANOVA/chi-square/Fisher rows
// and its test-selection flow diagram are deliberately NOT quoted here.
// BLOCKS OWNED (three, all carried verbatim): (1) "Confidence interval" —
// navy bold heading (raw lines 9–19): "Range of values within which the true
// mean of the population is expected to fall, with a specified probability."
// / "CI = 1 – α. The 95% CI (corresponding to α = 0.05) is often used. As
// sample size increases, CI narrows." / "CI for sample mean = x ± Z(SE)" /
// "For the 95% CI, Z = 1.96." / "For the 99% CI, Z = 2.58." (2) THE
// SIGNIFICANCE-RULES PANEL (raw lines 29–37) — a BORDERLESS panel that
// PRINTS to the RIGHT of the Confidence interval block in the same vertical
// band (bbox: rules panel x≈421–612, y≈102–220, vs the CI body text x≈199–
// 380, y≈102–219 — pdftotext -bbox + the VLM pass agree) with small TEAL
// SQUARE bullets: "H0 is rejected (and results are significant) when:" +
// three bullets (95% CI for mean difference excludes 0 / 95% CI OR or RR
// excludes 1 / CIs between two groups do not overlap), then "H0 is not
// rejected (and results are not significant)" + "when:" (the lead-in wraps,
// "when:" alone on its own line) + the three mirror bullets (includes 0 /
// includes 1 / do overlap). (3) "Meta-analysis" — navy bold heading below a
// thin rule (raw lines 21–27): "A method of statistical analysis that pools
// summary data (eg, means, RRs) from multiple studies for a more precise
// estimate of the size of an effect. Also estimates heterogeneity of effect
// sizes between studies." / "Improves power, strength of evidence, and
// generalizability (external validity) of study findings." / "Limited by
// quality of individual studies and bias in study selection."
// CENSUS (pdfimages): ZERO raster images on the page. VLM AVAILABLE this
// session (glm-4.6v, TWO passes — full page at 120dpi + a 300dpi upper-portion
// crop, staging-pubh15/vlm-census.txt): NO figure, curve, distribution plot,
// bell curve, error-bar diagram, forest plot, icon, or decorative graphic
// ANYWHERE in the upper portion — the label column left of the CI block, the
// gutter between the CI text and the rules panel, and the Meta-analysis band
// are blank white space; the page's only figure (the test-selection flow
// diagram with blue Numerical and pink Categorical boxes) lies BELOW the
// "Common statistical tests" boundary and belongs to statistical-tests. The
// upper portion is PURE TEXT → both assets are ORIGINAL KYP ADAPTATIONS.
// The VLM pass also confirmed: the three headings ("Confidence interval",
// "Meta-analysis", "Common statistical tests") print in bold dark navy; the
// rules panel is borderless with light teal/gray filled-square bullets; H0
// prints with a SUBSCRIPT zero; the sample mean prints as x with an OVERBAR
// (x̄); thin horizontal rules separate the CI/rules band from Meta-analysis
// and Meta-analysis from Common statistical tests; NO red text, NO mnemonics,
// NO margin notes, NO asterisk footnotes in the upper portion (the lower
// portion's red mnemonics — "Tea is meant for 2." etc — belong to
// statistical-tests and are never quoted here).
// PRINTED-TEXT QUIRKS carried + documented: (1) "SEC TION II" header-space
// extraction artifact (known, carried as-is); (2) small-caps extraction
// artifact "EPIDEmIOLOGY AND BIOSTATISTICS" in the banner — the banner prints
// ONCE on this page (running header only; this is NOT the subsection opener —
// page 278 printed it twice); (3) the rules panel's six bullet lines each
// begin with a small teal square bullet that the raw text layer extracts as
// "\u0083▘" (C1 control byte U+0083 + U+2598) — the note carries the printed
// words and documents the glyph; (4) "CI = 1 – α" prints with a spaced EN-DASH
// (U+2013) as the minus sign — carried as printed; (5) the sample-mean symbol
// prints as x with an overbar (x̄ — VLM-confirmed), flattened to plain "x" by
// the text layer — the raw quotes carry the flattened "x", the prose carries
// x̄; (6) "H0" prints with a subscript zero (H₀ — VLM-confirmed), flattened to
// "H0" by the text layer; (7) READING-ORDER JUMBLE: the rules panel prints
// upper-RIGHT (beside the CI block) but EXTRACTS AFTER the Meta-analysis body
// in the raw stream (raw lines 29–37 follow lines 21–27) — its print position
// is pinned by bbox y-coordinates + the VLM pass; (8) the second rules
// lead-in wraps across two lines with "when:" alone on the second.
// ADJUDICATIONS, documented here and in the manifest: (A) the batch brief
// flagged a possible small distribution figure printing beside/around the CI
// block — the census (pdfimages + BOTH VLM passes) found NONE: the upper
// portion is pure text, so no figure record is claimed and the registry
// visual's number-line glyphs are 100% KYP-drawn geometry (flagged); (B) the
// significance-rules panel is assigned to the Confidence interval asset
// (sv1): it prints in the CI band with no heading of its own, and all six of
// its rules are CI-application rules; (C) the page prints NO mnemonic of its
// own anywhere in the upper portion (VLM census: no red text, no margin
// notes) — all four mnemonics in this note are KYP ORIGINALS, marked as such,
// and the absence is documented (mnemonicStatus "authored" with FA-own
// count zero); (D) the printed overlap rules are carried VERBATIM and
// govern — the statistical nuance that two individually-reported CIs can
// overlap while the difference is still significant is NOT printed on this
// page and is flagged only as KYP context where mentioned, never as a
// correction of the print.
// PROVENANCE SPLIT: verbatim = the CI block's five printed statements, the
// rules panel's two lead-ins + six bullets, the Meta-analysis block's three
// sentences, and the three navy headings; FA-own = the page's layout
// furniture (navy headings, thin rules, teal square bullets, the x̄ overbar);
// KYP-original = the null-value router (0 for mean differences, 1 for OR/RR),
// the number-line glyphs, the SE-shrinks-with-√n explanation of "As sample
// size increases, CI narrows", the pooling-is-the-narrows-rule-across-studies
// bridge between the two blocks, the "garbage in, garbage out" gloss on the
// meta-analysis limits, the exam layer, and the four KYP mnemonics — every
// teaching generalization beyond the printed page is flagged as KYP context.
// DrugCards: none — the page prints statistics, not drugs (documented as
// folded-by-absence in the manifest). The lower portion (Common statistical
// tests + its four test rows + the test-selection algorithm figure) belongs
// to statistical-tests, produced in a later batch — referenced by design in
// `related`, never quoted.

export const confidenceIntervalsMetaAnalysis: KypUsMLENote = {
  id: "confidence-intervals-meta-analysis",
  title: "Confidence Intervals and Meta-Analysis: The Interval, the Verdict, and the Pool",
  subtitle:
    "A confidence interval is a range of values within which the true mean of the population is expected to fall, with a specified probability — the page's own definition, and the hinge on which the entire estimate side of biostatistics turns. The interval is built by one printed formula, CI for sample mean = x̄ ± Z(SE): the sample's point estimate plus and minus Z standard errors, where Z = 1.96 for the 95% CI (the level corresponding to α = 0.05, the convention the exam defaults to) and Z = 2.58 for the 99% CI. The level is set by CI = 1 – α, and the precision dial is sample size: as sample size increases, CI narrows. The page then prints the verdict rules that make intervals exam-able — H0 is rejected (and results are significant) when the 95% CI for a mean difference excludes 0, when the 95% CI for an OR or RR excludes 1, or when the CIs between two groups do not overlap, with the mirror trio (includes 0, includes 1, do overlap) failing to reject. The numbers 0 and 1 are the null values: a mean difference of 0 and a ratio of 1 both encode “no effect,” so an interval that clears its null value is an interval that carries an effect. Meta-analysis completes the page: a method of statistical analysis that pools summary data (eg, means, RRs) from multiple studies for a more precise estimate of the size of an effect, also estimating heterogeneity of effect sizes between studies. It improves power, strength of evidence, and generalizability (external validity) — and is limited by the quality of the individual studies and by bias in study selection: pooling many studies is the sample-size dial turned up across the whole literature.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory:
    "Public Health Sciences — interval-estimate decoding: the confidence interval block (CI = 1 – α, the 95%/99% Z constants 1.96/2.58, CI for sample mean = x ± Z(SE), the sample-size narrowing rule), the six mirrored significance rules (excludes/includes 0 for mean differences, excludes/includes 1 for OR/RR, non-overlap/overlap between two groups), and the meta-analysis block (pooling summary data for a more precise estimate, heterogeneity, improved power/strength/generalizability, limited by study quality and selection bias).",
  difficulty: 2,
  readTime: 5,
  sourceRef:
    "First Aid 2026, Part 1 pp. 267 (upper) (Epidemiology and Biostatistics: Confidence interval; Meta-analysis)",
  tags: [
    "confidence interval",
    "CI",
    "95% CI",
    "99% CI",
    "CI = 1 – α",
    "Z = 1.96",
    "Z = 2.58",
    "standard error",
    "sample mean",
    "sample size",
    "precision",
    "null hypothesis",
    "H0",
    "statistical significance",
    "mean difference",
    "odds ratio",
    "relative risk",
    "null value",
    "non-overlapping confidence intervals",
    "meta-analysis",
    "pooling",
    "summary data",
    "heterogeneity",
    "effect size",
    "external validity",
    "generalizability",
    "study quality",
    "selection bias",
    "epidemiology",
    "biostatistics",
  ],
  core: {
    what:
      "One page-split portion, carried whole. BLOCK 1 — “Confidence interval” (navy heading): a confidence interval is a “Range of values within which the true mean of the population is expected to fall, with a specified probability.”; “CI = 1 – α. The 95% CI (corresponding to α = 0.05) is often used. As sample size increases, CI narrows.”; “CI for sample mean = x ± Z(SE)”; “For the 95% CI, Z = 1.96.”; “For the 99% CI, Z = 2.58.” BLOCK 2 — THE SIGNIFICANCE-RULES PANEL (borderless, teal square bullets, printing to the RIGHT of the CI block): “H0 is rejected (and results are significant) when: 95% CI for mean difference excludes 0 · 95% CI OR or RR excludes 1 · CIs between two groups do not overlap. H0 is not rejected (and results are not significant) when: 95% CI for mean difference includes 0 · 95% CI OR or RR includes 1 · CIs between two groups do overlap.” BLOCK 3 — “Meta-analysis” (navy heading, full width below a thin rule): “A method of statistical analysis that pools summary data (eg, means, RRs) from multiple studies for a more precise estimate of the size of an effect. Also estimates heterogeneity of effect sizes between studies.”; “Improves power, strength of evidence, and generalizability (external validity) of study findings.”; “Limited by quality of individual studies and bias in study selection.”",
    why:
      "This portion sits at the exact center of the chapter's inference story. The pages before it built the machinery of testing (hypotheses, α and β errors, P values) and of measurement (odds ratios, relative risks); this page hands the estimate its own display object — an interval instead of a point — and then fuses the two sides with CI = 1 – α: a 95% interval and a 0.05 significance test are the same evidence read two ways, which is why the six printed rules can translate a CI into a reject/do-not-reject verdict without ever computing a P value. The rules also encode the geometry of “no effect”: a mean difference of 0 and a ratio of 1 are the two null values, so the measure family an interval belongs to decides which number the interval must clear — the single most common exam slip on this material. And the meta-analysis block is the same logic scaled up: pooling summary data (means, RRs) from multiple studies is the sample-size dial (“As sample size increases, CI narrows”) turned across an entire literature, buying a more precise estimate of the size of an effect while pricing the spread it is hiding (heterogeneity of effect sizes between studies) — but only as trustworthy as the quality of the individual studies and as unbiased as the selection that fed the pool. The page ends at the pinned split: “Common statistical tests” below belongs to choosing the test, a separate topic.",
    keyIdea:
      "Read any interval in four moves. MOVE 1 — NAME THE MEASURE FAMILY, THEN ITS NULL VALUE: a between-group mean difference (BP change, survival-time difference, score change) is read against 0; a ratio measure (OR from a case-control, RR from a cohort) is read against 1 — both null values mean “no effect.” MOVE 2 — READ THE INTERVAL AGAINST THE NULL: excludes the null value → H0 is rejected and the results are significant; includes it → H0 is not rejected and the results are not significant. MOVE 3 — TWO GROUPS, TWO INTERVALS? CIs between two groups that do not overlap → reject H0 (significant difference); CIs that do overlap → do not reject. MOVE 4 — ASK WHAT WOULD MAKE THE INTERVAL MORE USEFUL: a single study's only printed dial is sample size — as sample size increases, CI narrows (the 95% CI carries Z = 1.96 standard errors, the 99% CI Z = 2.58 — a wider net buying more confidence at the same α logic, CI = 1 – α); a QUESTION SPANNING MANY STUDIES is answered by a meta-analysis, which pools summary data (eg, means, RRs) for a more precise estimate of the size of an effect, prices heterogeneity of effect sizes between studies, improves power, strength of evidence, and generalizability (external validity) — and is limited by the quality of the individual studies and by bias in study selection. Null value, verdict, overlap, precision — four questions, and any interval the exam shows decodes itself.",
  },
  mechanisms: [
    {
      id: "ci-significance-engine",
      title:
        "From x ± Z(SE) to a verdict: how the interval is built, how it narrows, and how the null value (0 for mean differences, 1 for OR/RR) turns it into a significance decision",
      context:
        "The printed Confidence interval block + its significance-rules panel (book 267 upper)",
      flow: {
        nodes: [
          {
            id: "yield",
            label: "THE SAMPLE YIELD — x̄, its SE, and a chosen α",
            sublabel:
              "Input — every study hands over three objects: a point estimate (the sample mean x̄, printed with an overbar), its standard error SE (the estimate's own wobble), and the analyst's α. The printed level rule: “CI = 1 – α” — α = 0.05 gives the 95% CI that “is often used”; a stricter α gives a wider level (99% ↔ α = 0.01).",
            variant: "input",
          },
          {
            id: "build",
            label: "BUILD THE INTERVAL — CI for sample mean = x ± Z(SE)",
            sublabel:
              "Process — the printed formula: the point estimate plus and minus Z standard errors. Z is the multiplier the level buys: “For the 95% CI, Z = 1.96.” and “For the 99% CI, Z = 2.58.” (KYP context: Z is how many standard-normal standard errors you must walk out from x̄ to capture the middle 1 − α of the sampling distribution — the statistical-distributions bridge.)",
            variant: "process",
          },
          {
            id: "narrow",
            label: "THE PRECISION DIAL — as sample size increases, CI narrows",
            sublabel:
              "Process — the printed width rule. At a fixed level (fixed Z), the interval's width is Z × SE, and SE shrinks as the sample grows (KYP context: SE falls with the square root of n) — so bigger samples buy narrower, more precise intervals at the same confidence. The 99% CI moves the other lever: a bigger Z (2.58 > 1.96) makes the interval WIDER, trading width for confidence.",
            variant: "process",
          },
          {
            id: "nullvalue",
            label: "THE NULL VALUE — 0 for a mean difference, 1 for an OR or RR",
            sublabel:
              "Process — the rules panel names the two numbers an interval is read against: a between-groups mean difference of 0 and a ratio (OR or RR) of 1 both encode “no effect” (KYP reading of the printed rules). The measure family decides the null: differences live on an additive scale with null 0; ratios live on a multiplicative scale with null 1.",
            variant: "process",
          },
          {
            id: "verdict",
            label: "THE VERDICT — the six printed rules, three mirrors",
            sublabel:
              "Process — “H0 is rejected (and results are significant) when: 95% CI for mean difference excludes 0 · 95% CI OR or RR excludes 1 · CIs between two groups do not overlap. H0 is not rejected (and results are not significant) when: 95% CI for mean difference includes 0 · 95% CI OR or RR includes 1 · CIs between two groups do overlap.” An interval that clears its null value contains only effect values; one that contains the null value is still compatible with no effect.",
            variant: "process",
          },
          {
            id: "rule",
            label: "THE RULE — estimate + uncertainty + verdict in one object",
            sublabel:
              "Output — the CI is a “range of values within which the true mean of the population is expected to fall, with a specified probability,” and its verdict is read off a single geometric fact: where the null value (0 or 1) sits relative to the interval. Excludes → reject H0, significant; includes → do not reject. Two groups → replace the null value with the other interval: no overlap → significant difference (the printed rules govern; the finer two-intervals-can-overlap-yet-differ nuance is unprinted KYP context).",
            variant: "output",
          },
        ],
        edges: [
          { from: "yield", to: "build", label: "x̄ ± Z(SE) →" },
          { from: "build", to: "narrow", label: "width = Z × SE →" },
          { from: "build", to: "nullvalue", label: "read against →" },
          { from: "nullvalue", to: "verdict", label: "excludes vs includes →" },
          { from: "verdict", to: "rule", label: "reject / do not reject H0" },
          { from: "narrow", to: "rule", label: "narrower = more precise" },
        ],
      },
    },
    {
      id: "meta-analysis-pooling-map",
      title:
        "Pooling the literature: how meta-analysis turns many imprecise study estimates into one more precise estimate — and the two places it breaks",
      context: "The printed Meta-analysis block (book 267 upper)",
      flow: {
        nodes: [
          {
            id: "studies",
            label: "MULTIPLE STUDIES, SUMMARY DATA ONLY — eg, means, RRs",
            sublabel:
              "Input — the raw material is a shelf of already-published results: each study contributes its summary estimate (a mean or a ratio such as RR), each carrying its own interval and its own imprecision. No single study is assumed definitive.",
            variant: "input",
          },
          {
            id: "pool",
            label: "POOL — a method of statistical analysis that pools summary data from multiple studies",
            sublabel:
              "Process — the printed definition's first move: combine the studies' summary estimates into ONE combined estimate of the size of an effect, rather than cherry-picking the largest or latest result.",
            variant: "process",
          },
          {
            id: "precise",
            label: "THE PRECISION PAYOFF — a more precise estimate of the size of an effect",
            sublabel:
              "Process — the printed purpose. Pooling is the CI block's own dial turned up across studies: “As sample size increases, CI narrows,” and a pooled analysis behaves like the studies' combined sample — more information, smaller standard error, narrower interval around the effect (the bridge between the two blocks is KYP's synthesis, flagged).",
            variant: "process",
          },
          {
            id: "hetero",
            label: "PRICE THE SPREAD — also estimates heterogeneity of effect sizes between studies",
            sublabel:
              "Process — the printed second function: before trusting one number, the analysis measures how far apart the studies' effect sizes actually are. Heterogeneity is the honesty tax: large between-study spread means the “one effect” assumption is strained (KYP framing of the printed clause).",
            variant: "process",
          },
          {
            id: "gains",
            label: "THE GAINS — improves power, strength of evidence, and generalizability (external validity)",
            sublabel:
              "Process — the printed benefit list. Small studies that individually could not exclude the null gain power together; the combined result strengthens the evidence; and pooling studies drawn from different populations widens generalizability (external validity).",
            variant: "process",
          },
          {
            id: "limits",
            label: "THE TWO LIMITS — limited by quality of individual studies and bias in study selection",
            sublabel:
              "Process — the printed cautions. Quality limit: pooling cannot launder weak studies (“garbage in, garbage out” — KYP gloss). Selection limit: which studies made it into the pool is itself a choice, and bias in study selection (eg, the publication-driven kind) skews the pooled estimate before any math begins.",
            variant: "process",
          },
          {
            id: "rule",
            label: "THE RULE — many estimates in, one narrower estimate out, heterogeneity priced, quality and selection the tolls",
            sublabel:
              "Output — meta-analysis is the evidence pyramid's pooling layer: it converts a shelf of imprecise, possibly conflicting results into a more precise estimate of the size of an effect, tells you whether the studies even agree, and improves power, strength of evidence, and external validity — exactly as trustworthy as the individual studies' quality and the fairness of the selection that filled the pool.",
            variant: "output",
          },
        ],
        edges: [
          { from: "studies", to: "pool", label: "means, RRs →" },
          { from: "pool", to: "precise", label: "one combined estimate →" },
          { from: "precise", to: "hetero", label: "how far apart are they? →" },
          { from: "hetero", to: "gains", label: "if they agree →" },
          { from: "gains", to: "limits", label: "only as good as →" },
          { from: "limits", to: "rule", label: "the two tolls" },
          { from: "precise", to: "rule", label: "narrower interval out" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "ci-meta-map",
      title:
        "The CI formula card, the mirrored verdict rules on number lines, and the meta-analysis pooling diagram (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 267 upper's three blocks. ZONE A — the formula card: the printed definition (“Range of values within which the true mean of the population is expected to fall, with a specified probability.”), the level rule CI = 1 – α, the big formula CI for sample mean = x̄ ± Z(SE) drawn on a number line with the 95% bracket (Z = 1.96) inside the wider 99% bracket (Z = 2.58), and the precision dial — two number lines showing a wide interval at small n and a narrow one at large n (“As sample size increases, CI narrows.”). ZONE B — the significance-rules panel as six number-line glyphs in two mirrored columns: REJECTED (green): a mean-difference interval excluding 0, an OR/RR interval excluding 1, and two group intervals that do not overlap; NOT REJECTED (warning): the mirrors — including 0, including 1, and overlapping. ZONE C — the pooling diagram: three study cards (each a summary estimate with its own wide interval) converging into one pooled estimate with a visibly narrower interval (“a more precise estimate of the size of an effect”), a heterogeneity chip (“Also estimates heterogeneity of effect sizes between studies”), the gains strip (“Improves power, strength of evidence, and generalizability (external validity) of study findings.”), and the limits band (“Limited by quality of individual studies and bias in study selection.”).",
      notice:
        "Census (pdfimages): ZERO raster images, and the VLM census (two passes — 120dpi full page + 300dpi upper crop, staging-pubh15/vlm-census.txt) found NO figure anywhere in the upper portion: no curve, no distribution, no error bars, no forest plot, no icons — the print is pure text, so every number line, bracket, and pooling arrow in this visual is ORIGINAL KYP GEOMETRY (an ORIGINAL KYP ADAPTATION; the printed words are the source's, the drawings are KYP's). The rules panel prints to the RIGHT of the CI block as borderless text with small teal square bullets (the raw layer extracts each bullet as “\\u0083▘” — documented); the sample mean prints as x with an overbar (x̄, flattened to plain x by the text layer) and H0 with a subscript zero (flattened to H0) — both carried per the print. The worked interval positions on the number lines and the three pooled-study cards are KYP illustrations, flagged as such; every quoted sentence is the print's own.",
    },
    {
      kind: "table",
      title:
        "Book 267 (upper) — the printed Confidence interval and Meta-analysis blocks, carried verbatim (every printed word)",
      intro:
        "The whole upper portion in one table: three navy headings, the CI block's five printed statements, the significance-rules panel's two lead-ins and six bullets, and the Meta-analysis block's three sentences. Printed quirks documented: “CI = 1 – α” carries a spaced en-dash as its minus (as printed); the sample mean prints as x̄ (overbar; the text layer flattens it to the “x” shown in the formula row); H0 prints with a subscript zero; the rules panel's bullets are small teal squares (text-layer “\\u0083▘”); the panel prints to the RIGHT of the CI block but extracts after the Meta-analysis body in the raw stream (bbox-pinned); the second lead-in line-wraps with “when:” alone on its own line.",
      columns: ["PRINTED ELEMENT", "AS PRINTED (VERBATIM)"],
      rows: [
        [
          "Heading (navy, bold)",
          "Confidence interval",
        ],
        [
          "The definition",
          "Range of values within which the true mean of the population is expected to fall, with a specified probability.",
        ],
        [
          "The level, the convention, and the precision dial",
          "CI = 1 – α. The 95% CI (corresponding to α = 0.05) is often used. As sample size increases, CI narrows.",
        ],
        [
          "The formula (x̄ prints with an overbar; the text layer flattens it to x)",
          "CI for sample mean = x ± Z(SE)",
        ],
        [
          "The two Z constants",
          "For the 95% CI, Z = 1.96. For the 99% CI, Z = 2.58.",
        ],
        [
          "The significance-rules panel — REJECTED side (prints right of the CI block; borderless; teal square bullets)",
          "H0 is rejected (and results are significant) when: 95% CI for mean difference excludes 0 · 95% CI OR or RR excludes 1 · CIs between two groups do not overlap",
        ],
        [
          "The significance-rules panel — NOT-REJECTED side (the lead-in wraps; “when:” prints alone on its own line)",
          "H0 is not rejected (and results are not significant) when: 95% CI for mean difference includes 0 · 95% CI OR or RR includes 1 · CIs between two groups do overlap",
        ],
        [
          "Heading (navy, bold; below a thin rule)",
          "Meta-analysis",
        ],
        [
          "The definition — pooling and heterogeneity",
          "A method of statistical analysis that pools summary data (eg, means, RRs) from multiple studies for a more precise estimate of the size of an effect. Also estimates heterogeneity of effect sizes between studies.",
        ],
        [
          "The gains",
          "Improves power, strength of evidence, and generalizability (external validity) of study findings.",
        ],
        [
          "The limits",
          "Limited by quality of individual studies and bias in study selection.",
        ],
      ],
      caption:
        "Verbatim carry, documented: the three blocks owned by this topic, quoted inside the pinned upper-portion boundary only — the next content below (“Common statistical tests”) belongs to statistical-tests and is never quoted. The rules panel PRINTS in the same vertical band as the Confidence interval block (upper-right; bbox x≈421–612 vs the CI body's x≈199–380) but EXTRACTS after the Meta-analysis body in the raw text stream — a reading-order jumble pinned by pdftotext -bbox and the VLM pass (staging-pubh15/vlm-census.txt), the same class of jumble documented on the neighboring biostatistics pages. The bullet separators shown here as “·” are the print's six separate bullet lines. The VLM pass confirmed every line above verbatim, the borderless panel, the teal square bullets, the subscript zero in H0, the x̄ overbar, the en-dash in “CI = 1 – α”, and the two thin horizontal rules (above Meta-analysis, and above Common statistical tests — the pinned split). No mnemonic, red text, margin note, or asterisk footnote prints anywhere in the upper portion.",
    },
    {
      kind: "list",
      title:
        "The decoder — every printed number and rule, and what it is for (KYP's reading of the page)",
      intro:
        "The page prints exactly four numbers (1 – α, 0.05, 1.96, 2.58), one formula, one narrowing rule, six verdict rules, and three meta-analysis sentences. This layer compresses what each is FOR on the exam.",
      items: [
        {
          lead: "THE DEFINITION — an interval, not a point",
          text: "“Range of values within which the true mean of the population is expected to fall, with a specified probability.” A sample mean alone hides its own uncertainty; the CI displays the estimate AND its wobble in one object. (KYP context: the “specified probability” is the long-run capture rate — 95% of intervals built this way would contain the true population mean — the reading the exam expects.)",
        },
        {
          lead: "THE LEVEL — CI = 1 – α, and 95% is the default",
          text: "The interval's confidence level is the significance machinery run backwards: α = 0.05 ↔ the 95% CI, “often used” per the print; a stricter α (0.01) buys the 99% CI. Same data, wider net (see the Z constants below).",
        },
        {
          lead: "THE TWO Z CONSTANTS — 1.96 at 95%, 2.58 at 99%",
          text: "“For the 95% CI, Z = 1.96. For the 99% CI, Z = 2.58.” The multiplier scales the standard errors walked out from the point estimate. 2.58 > 1.96, so the 99% CI is WIDER — more confidence, less precision. These two constants are pure recall and get asked cold.",
        },
        {
          lead: "THE FORMULA — CI for sample mean = x̄ ± Z(SE)",
          text: "Point estimate plus and minus Z standard errors: the anatomy of every interval the exam shows. When a stem asks what makes the interval narrower or wider, decompose through this formula — only Z (the level) and SE (the sampling) move the ends.",
        },
        {
          lead: "THE PRECISION DIAL — as sample size increases, CI narrows",
          text: "The one printed width control at a fixed level. Bigger sample → smaller SE (KYP context: SE falls with √n) → narrower interval → more precise estimate. This single sentence powers both the “how do we narrow this CI?” stems and the logic of pooling (below).",
        },
        {
          lead: "THE NULL VALUES — 0 for mean differences, 1 for OR/RR",
          text: "The six rules are really three rules × two null values: a between-group mean difference of 0 and a ratio of 1 both mean “no effect.” FIRST identify the measure family (difference vs ratio), THEN fetch its null — this routing is the step examinees skip and the trap the exam sets (KYP decoder built from the printed rules).",
        },
        {
          lead: "THE SIX VERDICT RULES — three mirrors",
          text: "Excludes 0 / excludes 1 / do not overlap → H0 is rejected and results are significant. Includes 0 / includes 1 / do overlap → H0 is not rejected and results are not significant. One geometric fact decides all six: where the null value (or the other group's interval) sits relative to the interval.",
        },
        {
          lead: "THE POOL — meta-analysis in three sentences",
          text: "Pools summary data (eg, means, RRs) from multiple studies for a more precise estimate of the size of an effect; also estimates heterogeneity of effect sizes between studies; improves power, strength of evidence, and generalizability (external validity); limited by quality of individual studies and bias in study selection. The pooling logic is the precision dial scaled across studies (KYP bridge): more information in, narrower interval out.",
        },
      ],
    },
    {
      kind: "steps",
      title: "Reading any interval the exam hands you in four moves",
      intro:
        "The whole portion distilled into an ordered reading path — NULL, VERDICT, OVERLAP, PRECISION — applicable to any CI a stem displays, printed on book 267 or not.",
      steps: [
        {
          label: "MOVE 1 — NAME THE MEASURE FAMILY, THEN ITS NULL VALUE",
          detail:
            "A between-group MEAN difference (treatment vs control on BP, weight, survival time, a score) lives on the additive scale → null value 0. A RATIO (OR from a case-control, RR from a cohort) lives on the multiplicative scale → null value 1. Both nulls encode “no effect” — the measure family decides which number the interval must clear.",
        },
        {
          label: "MOVE 2 — READ THE INTERVAL AGAINST THE NULL: EXCLUDES OR INCLUDES?",
          detail:
            "95% CI for mean difference excludes 0 → H0 is rejected, results significant; includes 0 → not rejected, not significant. 95% CI for OR or RR excludes 1 → significant; includes 1 → not significant. Do not compute anything — the verdict is a position read.",
        },
        {
          label: "MOVE 3 — TWO GROUPS, TWO INTERVALS? CHECK OVERLAP",
          detail:
            "When each group carries its own CI, compare the two intervals directly: CIs between two groups that do not overlap → H0 is rejected (significant difference); CIs that do overlap → H0 is not rejected (the printed rules govern; the subtler statistics of overlapping-but-still-different intervals is unprinted KYP context — never use it to override the printed rule on a First Aid-based question).",
        },
        {
          label: "MOVE 4 — ASK WHAT WOULD MAKE THE ESTIMATE MORE PRECISE",
          detail:
            "One study: as sample size increases, CI narrows — sample size is the printed dial (a wider level, 99% vs 95%, instead buys confidence with width). Many studies: a meta-analysis pools summary data (eg, means, RRs) for a more precise estimate of the size of an effect, prices heterogeneity of effect sizes between studies, and improves power, strength of evidence, and generalizability (external validity) — limited by the quality of the individual studies and bias in study selection.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Reject vs do not reject — the mirrored rules in the panel's own words",
      intro:
        "The rules panel is built as three mirrored pairs — the same three comparisons, once significant and once not. Every pair turns on one geometric fact: where the null value (0 or 1) — or the other group's interval — sits.",
      columns: [
        "H0 is REJECTED (and results are significant) when",
        "H0 is NOT rejected (and results are not significant) when",
      ],
      rows: [
        {
          label: "Mean-difference intervals (null value 0)",
          a: "95% CI for mean difference excludes 0 — the interval contains only effect values",
          b: "95% CI for mean difference includes 0 — the data remain compatible with no effect",
        },
        {
          label: "Ratio measures — OR, RR (null value 1)",
          a: "95% CI OR or RR excludes 1 — the entire interval is above or below the no-effect ratio",
          b: "95% CI OR or RR includes 1 — the estimate could still be no effect",
        },
        {
          label: "Two separate group CIs",
          a: "CIs between two groups do not overlap — the groups' plausible ranges are disjoint",
          b: "CIs between two groups do overlap — the groups' plausible ranges share values",
        },
        {
          label: "The geometry underneath (KYP decoder)",
          a: "The null value lies OUTSIDE the interval, so every value inside it is an effect — reject H0",
          b: "The null value lies INSIDE the interval, so “no effect” survives — do not reject H0",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "How the exam asks this page — four stem shapes and two cold recalls",
      body:
        "SHAPE 1 — THE MEAN-DIFFERENCE VERDICT: a trial reports a between-group difference with its 95% CI (eg, −6 mm Hg, 95% CI −9 to −3) and asks whether the result is significant → the interval excludes 0 → reject H0. SHAPE 2 — THE RATIO VERDICT: an OR or RR arrives with its 95% CI (eg, RR 1.4, 95% CI 0.9–2.1) → the interval includes 1 → NOT significant, no matter how promising the point estimate looks. SHAPE 3 — THE OVERLAP VERDICT: two groups each carry an interval → do they overlap? Non-overlap → significant difference; overlap → not significant. SHAPE 4 — THE META-ANALYSIS STEM: pooled estimate with a narrower CI, a heterogeneity measure, and a limits question — a meta-analysis of small or flawed studies is “limited by quality of individual studies,” and which studies entered the pool is “bias in study selection.” TWO COLD RECALLS: the Z constants (95% → 1.96; 99% → 2.58) and the narrowing rule (sample size up → CI down in width) arrive as one-liners with no vignette at all.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "The mnemonic ledger — no First Aid mnemonic prints on this page (documented)",
      body:
        "The VLM census (staging-pubh15/vlm-census.txt) confirms the upper portion prints NO mnemonic, no red text, and no margin note anywhere — unlike the lower portion of this same page, whose red hooks (“Tea is meant for 2.” and kin) belong to statistical-tests and are never quoted here. All four mnemonics below are therefore KYP ORIGINALS, marked as such: “MEANS TO 0, RATIOS TO 1” (the null-value router), “EXCLUDE TO CONCLUDE — INCLUDE TO RETAIN” (the six verdict rules compressed to one geometry), “1-9-6 AT 95, 2-5-8 AT 99” (the two Z constants), and “POOL, PRICE, POWER — MIND THE GARBAGE” (meta-analysis: pools summary data, prices heterogeneity, powers the evidence — and is limited by study quality and selection bias).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title: "The page's clinical anchors — where intervals decide at the bedside",
      intro:
        "The printed rules are abstract, but every trial, risk estimate, and guideline citation you will read reports exactly these objects. The vignette numbers below are KYP illustrations; the rules applied are the page's own.",
      items: [
        {
          lead: "THE TRIAL EFFECT — a mean difference clearing 0",
          text: "Every RCT endpoint reported as a between-group difference carries its 95% CI: a drug lowering mean systolic BP by 6 mm Hg (95% CI 3–9) excludes 0 → the effect is significant; the same drug at −1 mm Hg (95% CI −3 to 1) includes 0 → not significant. The printed rule — “95% CI for mean difference excludes 0” — is the whole computation.",
        },
        {
          lead: "THE RISK ESTIMATE — an OR or RR clearing 1",
          text: "Case-control and cohort findings arrive as ratios: an OR of 2.2 (95% CI 1.4–3.5) excludes 1 → significant association; an RR of 1.3 (95% CI 0.9–1.9) includes 1 → the association is not established. This is the quantifying-risk page's arithmetic wearing the verdict rules of this page.",
        },
        {
          lead: "THE HEAD-TO-HEAD — two treatments' intervals",
          text: "When two agents each report an interval for the same endpoint, the printed overlap rules apply: non-overlapping CIs between the two groups → the difference is significant; overlapping CIs → it is not. Head-to-head trial stems are built on exactly this comparison.",
        },
        {
          lead: "THE EVIDENCE SUMMIT — the pooled estimate",
          text: "Guideline panels cite meta-analyses because pooling summary data (eg, means, RRs) from multiple studies gives a more precise estimate of the size of an effect than any single study — improving power, strength of evidence, and generalizability (external validity). The clinical reader's checklist is the printed limit pair: how good were the individual studies (quality), and how were they chosen for the pool (bias in study selection)? A meta-analysis of biased studies is precisely wrong (KYP gloss).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A randomized trial reports that a new statin lowers mean LDL by 14 mg/dL vs placebo, 95% CI 9–19 mg/dL; the abstract concludes the effect is statistically significant.",
        discriminator:
          "A between-group mean difference whose 95% CI excludes 0 — the lower bound (9) sits above the null value",
        concept: "The mean-difference significance rule",
        answer:
          "Significant — “H0 is rejected (and results are significant) when: 95% CI for mean difference excludes 0.” The interval contains only effect values (all ≥ 9 mg/dL), so the data are incompatible with no effect.",
      },
      {
        stem: "A cohort study of a new oral anticoagulant reports stroke RR 0.85 vs warfarin, 95% CI 0.60–1.20; the authors call the drug 'promising' but decline to claim superiority.",
        discriminator:
          "A ratio measure whose 95% CI includes 1 — the interval straddles the no-effect value",
        concept: "The OR/RR significance rule",
        answer:
          "Not significant — “H0 is not rejected (and results are not significant) when: 95% CI OR or RR includes 1.” The point estimate 0.85 favors the drug, but the interval is still compatible with RR = 1 (no effect).",
      },
      {
        stem: "Drug A lowers mean HbA1c by 0.9% (95% CI 0.7–1.1) and drug B by 0.6% (95% CI 0.4–0.8); a student claims the two drugs differ because the point estimates differ.",
        discriminator:
          "Two group CIs that share values (1.1 > 0.4 — the intervals overlap)",
        concept: "The two-group overlap rule",
        answer:
          "The claim fails — “H0 is not rejected (and results are not significant) when: CIs between two groups do overlap.” Because the two intervals share plausible values, a difference between the drugs is not established by this comparison (the printed rule governs).",
      },
      {
        stem: "A systematic review pools summary RRs from 14 cohort studies into one estimate with a much narrower 95% CI than any single study, reports a heterogeneity statistic showing the studies' effect sizes vary widely, and includes 6 studies from a single country's registry known to over-report outcomes.",
        discriminator:
          "Pooling + heterogeneity + the two printed limits in one stem — the pooled CI is narrower, but the pool's quality and selection are suspect",
        concept: "Meta-analysis gains and limits",
        answer:
          "The meta-analysis improves power, strength of evidence, and generalizability (external validity) and gives a more precise estimate of the size of an effect while estimating heterogeneity of effect sizes between studies — but it is “limited by quality of individual studies and bias in study selection,” which this pool violates on both counts.",
      },
    ],
    traps: [
      {
        a: "Excludes 0 — the mean-difference verdict",
        b: "Excludes 1 — the OR/RR verdict",
        whyConfused:
          "Both rules say “excludes the null value,” and stems hand over numbers that look interchangeable; a hurried read grabs the wrong anchor",
        keyDifference:
          "The MEASURE FAMILY fixes the null: differences (additive scale) → 0; ratios OR/RR (multiplicative scale) → 1. Identify the family first, then read the interval against its own null",
        clue:
          "Units of an amount (mg/dL, mm Hg, points) → test 0; a ratio (odds, risk, hazard relative to something) → test 1.",
      },
      {
        a: "Z = 1.96 — the 95% CI multiplier",
        b: "Z = 2.58 — the 99% CI multiplier",
        whyConfused:
          "Two paired constants with no derivation offered on the page — pure recall, and the pairs cross-wire under time pressure",
        keyDifference:
          "More confidence costs more width: the 99% CI walks out 2.58 standard errors from the estimate, the 95% only 1.96 — so the 99% interval is always WIDER at the same data",
        clue:
          "1.96 pairs with 95 (α = 0.05); 2.58 pairs with 99 (α = 0.01) — and CI = 1 – α ties each level to its α.",
      },
      {
        a: "A NARROW CI — a precise estimate",
        b: "A CI EXCLUDING the null — a significant result",
        whyConfused:
          "Both feel like 'a good result,' and a stem can present a very tight interval that still includes the null value",
        keyDifference:
          "Precision is about WIDTH (sample size and SE); significance is about POSITION (where 0 or 1 sits). A narrow interval like RR 1.05, 95% CI 0.98–1.12 is precisely NOTHING — it includes 1",
        clue:
          "Ask two separate questions: how wide is it (precision), and does it clear its null (significance)?",
      },
      {
        a: "Meta-analysis improves power, strength of evidence, and generalizability",
        b: "Meta-analysis is limited by quality of individual studies and bias in study selection",
        whyConfused:
          "The block prints the gains and the limits in adjacent sentences; stems quote either half and ask whether the pooled conclusion is trustworthy",
        keyDifference:
          "The gains are what pooling DOES (more precise estimate of the size of an effect, heterogeneity priced); the limits are what pooling CANNOT FIX — weak studies stay weak in the pool, and a skewed selection of studies skews the pooled estimate",
        clue:
          "Trust questions route to the limits (“garbage in, garbage out”); precision and power questions route to the gains.",
      },
    ],
    pivots: [
      {
        lookAlike: "An interval verdict question with an unseen measure type",
        differentiator:
          "The null-value router: which number must the interval clear?",
        correctPath:
          "Between-group difference of a measured quantity → 0. Odds ratio or relative risk (any ratio of risks/odds) → 1. Then: excludes → reject H0 (significant); includes → do not reject (not significant).",
      },
      {
        lookAlike: "Two treatments each with their own 95% CI",
        differentiator:
          "The overlap test replaces the single-null test when there are two intervals",
        correctPath:
          "CIs between two groups do not overlap → H0 is rejected (the difference is significant); CIs do overlap → H0 is not rejected. The printed rule decides — resist importing unprinted statistical refinements on exam questions drawn from this page.",
      },
      {
        lookAlike: "A 'how do we shrink this interval?' question",
        differentiator:
          "One study vs many studies — the two printed dials",
        correctPath:
          "Within one study: as sample size increases, CI narrows (or accept a lower level — 95% is narrower than 99%). Across studies: a meta-analysis pools summary data (eg, means, RRs) from multiple studies for a more precise estimate of the size of an effect.",
      },
    ],
    miniCase: {
      vignette:
        "A residency journal club reviews a randomized trial of a new antihypertensive. The primary endpoint reports a between-group mean systolic BP difference of −6 mm Hg (95% CI −9 to −3 mm Hg). A secondary endpoint reports the odds ratio for stroke with the drug of 0.85 (95% CI 0.60–1.20). A medical student is asked which endpoints are statistically significant before the discussion proceeds.",
      question:
        "Which of the following is the correct reading of these two 95% confidence intervals?",
      options: [
        {
          label: "A",
          text:
            "The BP difference is significant (its 95% CI excludes 0); the stroke OR is not (its 95% CI includes 1)",
          correct: true,
          why:
            "CORRECT — the printed rules: “H0 is rejected (and results are significant) when: 95% CI for mean difference excludes 0” (−9 to −3 never touches 0) and “H0 is not rejected (and results are not significant) when: 95% CI OR or RR includes 1” (0.60–1.20 straddles 1). The measure family fixes the null value: 0 for the mean difference, 1 for the odds ratio.",
        },
        {
          label: "B",
          text:
            "Both endpoints are significant because both point estimates favor the drug",
          why:
            "TEMPTING but wrong — the verdict lives in the INTERVAL, not the point estimate. −6 mm Hg and OR 0.85 both lean toward benefit, but significance is a property of the interval's position relative to its null value (0 or 1); the stroke interval still contains 1, so “no effect” survives for that endpoint.",
        },
        {
          label: "C",
          text:
            "The BP difference is not significant because −6 mm Hg is a small effect",
          why:
            "WRONG axis — MAGNITUDE is not SIGNIFICANCE. The interval −9 to −3 excludes 0 entirely, so every plausible value is a real (if modest) effect; the size of the effect and the certainty of the effect are different questions (the clinical-vs-statistical significance distinction).",
        },
        {
          label: "D",
          text:
            "The stroke OR is significant because 0.85 is below 1",
          why:
            "TEMPTING but wrong — reading the point estimate alone. The 95% CI 0.60–1.20 crosses 1, meaning the data remain compatible with OR = 1 (no effect); per the printed rule, an OR or RR interval that includes 1 fails to reject H0.",
        },
        {
          label: "E",
          text:
            "Neither endpoint can be judged significant without the P values",
          why:
            "WRONG — the page's rules read the CI directly, no P value needed: CI = 1 – α ties the interval to the same α machinery, so a 95% CI excluding its null value IS the significance statement (the interval–P-value correspondence is KYP context, but the printed rules never mention P at all).",
        },
      ],
      reasoning:
        "The question tests the null-value router and the verdict read: MOVE 1 — the BP endpoint is a between-group MEAN DIFFERENCE (null 0); the stroke endpoint is an ODDS RATIO (null 1). MOVE 2 — read each interval against its null: −9 to −3 excludes 0 → reject H0, significant; 0.60–1.20 includes 1 → do not reject, not significant. Option B and D make the same mistake from opposite directions (trusting point estimates over intervals); option C confuses effect size with certainty; option E invents a requirement the printed rules do not have. First Aid's own rules decide it in two reads.",
    },
  },
  mnemonics: [
    {
      code: "MEANS TO 0, RATIOS TO 1",
      meaning:
        "A KYP ORIGINAL (the page prints no mnemonic of its own — documented): between-group MEAN differences are read against the null value 0; RATIO measures (OR, RR) are read against the null value 1 — both nulls encode “no effect,” and the measure family decides which number the interval must clear.",
      memorizes:
        "The null value for each measure family — the routing step behind all six printed verdict rules",
      whenToUse:
        "Any stem that hands you a 95% CI and asks about significance: identify the measure family first (difference vs ratio), fetch its null, then read the interval (excludes → reject H0; includes → do not reject).",
      clinical:
        "Trial endpoints reported as differences (BP, LDL, HbA1c) → test 0; risk findings reported as OR/RR/hazard ratios → test 1 — the two families cover nearly every interval a clinical paper reports (KYP context).",
    },
    {
      code: "EXCLUDE TO CONCLUDE — INCLUDE TO RETAIN",
      meaning:
        "A KYP ORIGINAL: if the 95% CI EXCLUDES its null value (0 for mean difference, 1 for OR/RR), you CONCLUDE — H0 is rejected and the results are significant; if the interval INCLUDES the null, you RETAIN H0 — the results are not significant. The overlap pair rides along: two groups' intervals that do not overlap → conclude a difference; overlap → retain.",
      memorizes:
        "The six printed verdict rules compressed to one geometric fact — where the null value sits relative to the interval",
      whenToUse:
        "Any significance question phrased around a confidence interval, and the two-group variant (non-overlap = significant difference; overlap = not significant).",
      clinical:
        "The fastest abstract-reading skill in evidence-based medicine: scan the CI of every endpoint against its null before reading the authors' conclusions (KYP context).",
    },
    {
      code: "1-9-6 AT 95, 2-5-8 AT 99",
      meaning:
        "A KYP ORIGINAL: the two printed Z constants pair with their levels — “For the 95% CI, Z = 1.96.” and “For the 99% CI, Z = 2.58.” — the multiplier of standard errors walked out from the point estimate in x̄ ± Z(SE); the bigger multiplier (2.58) makes the 99% interval WIDER.",
      memorizes:
        "The Z constants for the two exam-standard confidence levels, and which one buys width",
      whenToUse:
        "Cold recall questions (“What Z value corresponds to the 99% CI?”), and any stem asking which interval is wider or how the level changes the interval — CI = 1 – α ties the level to α (0.05 ↔ 95%, 0.01 ↔ 99%).",
      clinical:
        "The constants behind every 95% CI in the medical literature; the 99% CI appears when a journal demands more certainty at the price of a wider, less precise interval (KYP context).",
    },
    {
      code: "POOL, PRICE, POWER — MIND THE GARBAGE",
      meaning:
        "A KYP ORIGINAL: meta-analysis POOLs summary data (eg, means, RRs) from multiple studies for a more precise estimate of the size of an effect; PRICEs the spread (also estimates heterogeneity of effect sizes between studies); POWERs the findings (improves power, strength of evidence, and generalizability/external validity) — and you must MIND THE GARBAGE: it is limited by quality of individual studies and bias in study selection.",
      memorizes:
        "The entire printed Meta-analysis block — definition, heterogeneity, gains, and both limits — in one line",
      whenToUse:
        "Any meta-analysis stem: what it does (pool/price/power), why its CI is narrower than a single study's, and every “what limits a meta-analysis?” question (study quality + selection bias — never internal validity of the pooling arithmetic).",
      clinical:
        "The reader's checklist for every pooled estimate in a guideline: where did the studies come from (selection), how good are they (quality), and do they even agree (heterogeneity) — before trusting the narrower interval (KYP context).",
    },
  ],
  rapidReview: {
    s30: [
      "Confidence interval — range of values within which the true mean of the population is expected to fall, with a specified probability",
      "CI = 1 – α; the 95% CI (corresponding to α = 0.05) is often used; as sample size increases, CI narrows",
      "CI for sample mean = x ± Z(SE); for the 95% CI, Z = 1.96; for the 99% CI, Z = 2.58 (the 99% interval is the wider net)",
      "H0 is rejected (results significant) when: 95% CI for mean difference excludes 0 · 95% CI OR or RR excludes 1 · CIs between two groups do not overlap",
      "H0 is not rejected (results not significant) when: 95% CI for mean difference includes 0 · 95% CI OR or RR includes 1 · CIs between two groups do overlap",
      "Null values: mean difference → 0; OR/RR → 1 — both mean “no effect” (the measure family fixes the null)",
      "Meta-analysis — pools summary data (eg, means, RRs) from multiple studies for a more precise estimate of the size of an effect; also estimates heterogeneity of effect sizes between studies",
      "Meta-analysis improves power, strength of evidence, and generalizability (external validity); limited by quality of individual studies and bias in study selection",
    ],
    m3: [
      "MEANS TO 0, RATIOS TO 1 — the null-value router (KYP)",
      "EXCLUDE TO CONCLUDE — INCLUDE TO RETAIN — the six verdict rules (KYP)",
      "1-9-6 AT 95, 2-5-8 AT 99 — the Z constants (KYP)",
      "POOL, PRICE, POWER — MIND THE GARBAGE — the meta-analysis block (KYP)",
    ],
    m10: [
      "The page prints NO mnemonic of its own in the upper portion (VLM census: no red text, no margin notes) — all four mnemonics here are KYP originals; the red hooks on this same page's lower portion (“Tea is meant for 2.” etc) belong to statistical-tests",
      "Layout pin: the significance-rules panel prints to the RIGHT of the Confidence interval block (borderless, teal square bullets, H0 with a subscript zero) but extracts after the Meta-analysis body in the raw text stream — bbox + VLM pinned; the second lead-in wraps with “when:” alone on its line",
      "The pinned split: this topic owns book 267 UPPER through the end of Meta-analysis; “Common statistical tests” below (with the t-test/ANOVA/chi-square/Fisher rows and the test-selection flow diagram) belongs to statistical-tests",
      "The pooling bridge: “As sample size increases, CI narrows” is the single-study rule; a meta-analysis is the same dial turned across studies — more information in, narrower interval out (KYP synthesis of the two printed blocks)",
    ],
  },
  recall: [
    {
      q: "Define a confidence interval in the page's own words.",
      a: "A range of values within which the true mean of the population is expected to fall, with a specified probability.",
    },
    {
      q: "What is the relationship between CI and α, which CI is conventionally used, and what happens to the CI as sample size increases?",
      a: "CI = 1 – α; the 95% CI (corresponding to α = 0.05) is often used; as sample size increases, CI narrows.",
    },
    {
      q: "State the printed formula for the CI of a sample mean and the two Z constants.",
      a: "CI for sample mean = x ± Z(SE); for the 95% CI, Z = 1.96; for the 99% CI, Z = 2.58.",
    },
    {
      q: "A 95% CI for a mean difference runs from 2 to 8. Is H0 rejected? Which rule decides?",
      a: "Yes — results are significant: “H0 is rejected (and results are significant) when: 95% CI for mean difference excludes 0” (the interval 2–8 never touches 0).",
    },
    {
      q: "A 95% CI for a relative risk runs from 0.8 to 1.9. Is H0 rejected? Which rule decides?",
      a: "No — results are not significant: “H0 is not rejected (and results are not significant) when: 95% CI OR or RR includes 1” (the interval straddles the null value 1).",
    },
    {
      q: "Two groups each report a 95% CI, and the intervals share several values. What does the printed rules panel conclude?",
      a: "H0 is not rejected (results are not significant): “CIs between two groups do overlap” — the overlap rule; non-overlap would be required to reject.",
    },
    {
      q: "Define meta-analysis in the page's own words, including its second function.",
      a: "A method of statistical analysis that pools summary data (eg, means, RRs) from multiple studies for a more precise estimate of the size of an effect; it also estimates heterogeneity of effect sizes between studies.",
    },
    {
      q: "What does a meta-analysis improve, and what limits it — the page's four phrases?",
      a: "Improves power, strength of evidence, and generalizability (external validity) of study findings; limited by quality of individual studies and bias in study selection.",
    },
  ],
  related: [
    {
      title: "Hypothesis testing, P values, and type I/II errors — the test-side mirror",
      note:
        "The rules panel speaks entirely in H0 language, and CI = 1 – α is the printed bridge between the interval and the test: a 95% CI that excludes its null value is the same evidence that yields P < 0.05. The α of hypothesis testing and the level of the interval are one dial (the correspondence itself is KYP context; the CI = 1 – α identity is printed).",
      topicId: "hypothesis-testing-errors",
    },
    {
      title: "Statistical distributions — where 1.96 and 2.58 come from",
      note:
        "The two Z constants are areas under the standard normal curve: 1.96 standard errors captures the middle 95%, 2.58 the middle 99%. The distributions page supplies the curve; this page spends the constants — and the SE inside x ± Z(SE) is the sampling-distribution spread of the sample mean.",
      topicId: "statistical-distributions",
    },
    {
      title: "Common statistical tests — the block immediately below on the same page",
      note:
        "The pinned page-split: this topic owns book 267 upper through Meta-analysis; the navy “Common statistical tests” heading below opens the lower portion (t-test, ANOVA, chi-square, Fisher exact, and the test-selection flow diagram) owned by statistical-tests, produced in a later batch. Once a CI has told you an effect exists, the test-selection machinery tells you which test would have found it.",
      topicId: "statistical-tests",
    },
    {
      title: "Quantifying risk — the formulas behind the OR and RR intervals",
      note:
        "The ratio measures whose intervals are read against 1 are computed on the quantifying-risk page: OR = ad/bc from the case-control grid, RR = incidence in exposed / incidence in unexposed from the cohort. This page supplies the verdict rule (excludes/includes 1); that page supplies the arithmetic being judged.",
      topicId: "quantifying-risk",
    },
  ],
  crossLinks: [
    {
      subject: "Biostatistics and epidemiology — hypothesis testing and P values",
      connection:
        "CI = 1 – α fuses the estimate and test sides of inference: a 95% CI for a mean difference that excludes 0 corresponds to P < 0.05 for the difference, and an OR/RR interval that excludes 1 to P < 0.05 for the association — the printed rules panel is the P-value machinery expressed as geometry (the formal interval–P-value equivalence is KYP context).",
    },
    {
      subject: "Research methods — clinical therapeutic trials and effect estimates",
      connection:
        "Every trial endpoint this exam shows arrives as a mean difference or a ratio with its 95% CI: the ITT analysis of a randomized trial reports exactly such intervals, and “is the drug effective?” reduces to “does the interval exclude 0 (or 1)?” — the observational-vs-experimental design layer decides how believable the estimate is; this page decides how to read it.",
    },
    {
      subject: "Evidence-based medicine — systematic reviews and the evidence pyramid",
      connection:
        "The meta-analysis block is the evidence pyramid's apex described from first principles: pooling summary data (eg, means, RRs) for a more precise estimate of the size of an effect, heterogeneity of effect sizes between studies as the agreement check, and the two classic vulnerabilities — quality of individual studies and bias in study selection (the publication-bias family, KYP context).",
    },
    {
      subject: "Pharmacology — interpreting efficacy and safety endpoints",
      connection:
        "Regulatory and prescribing decisions cite intervals: a drug's efficacy endpoint is accepted when its 95% CI for the treatment difference excludes 0, and safety signals (OR for an adverse event) are judged by whether the interval excludes 1 — the same six printed rules, applied to every drug label and trial abstract in the pharmacology chapters.",
    },
  ],
};
