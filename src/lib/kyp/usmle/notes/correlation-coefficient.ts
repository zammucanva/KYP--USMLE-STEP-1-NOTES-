import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 2 / task pubh17. Source: TOP PORTION ONLY of
// pdf page 290 / book 268 (Part 1) — a PINNED PAGE-SPLIT. Scope: from the
// page top through the END of the "Pearson correlation coefficient" block
// (the definition text + the five-panel scatter gallery), ending immediately
// BEFORE the in-body ribbon banner "▶ PUBLIC HEALTH SCIENCES—ETHICS" (raw
// text-layer line 43, y≈337 pt per pdftotext -bbox), which opens the lower
// portion owned by core-ethical-principles (produced in parallel in this
// same batch) — the split boundary is pinned by pdftotext -bbox (a thin
// horizontal block-ending rule spans the column between the last gallery
// caption and the ribbon banner, then white space) and by the VLM pass; no
// evidence quote in this note crosses it, and the lower portion's Core
// ethical principles / Autonomy / Beneficence / Nonmaleficence / Justice /
// Decision-making capacity rows are deliberately NOT quoted here.
// BLOCKS OWNED (two): (1) the "Pearson correlation coefficient" text block
// (raw lines 12–18) — navy bold heading (raw lines 5–6) with the body
// printing to its right: "A measure of the linear correlation between two
// variables. r is always between −1 and +1. The closer the absolute value
// of r is to 1, the stronger the linear correlation between the 2
// variables." / "Variance is how much the measured values differ from the
// average value in a data set." / "Positive r value → positive correlation
// (as one variable ↑, the other variable ↑)." / "Negative r value →
// negative correlation (as one variable ↑, the other ↓)." / "Coefficient
// of determination = r² (proportion of variance in one variable that can
// be explained by variance in the other variable). Correlation does not
// necessarily imply causation." (2) THE FIVE-PANEL SCATTER GALLERY (raw
// lines 19–41) — a horizontal row of five small pure-vector scatter plots,
// printed order LEFT→RIGHT (pinned by pdftotext -bbox x-coordinates + the
// VLM pass, BOTH agreeing): "r = –0.8" / "Strong negative correlation" ·
// "r = –0.4" / "Weak negative correlation" · "r = 0" / "No correlation" ·
// "r = +0.4" / "Weak positive correlation" · "r = +0.8" / "Strong positive
// correlation". CENSUS (pdfimages): ZERO raster images on the page — the
// gallery is pure vector art (navy filled-circle dot fields of ~11–14 dots
// per panel inside light tan gridline frames with x/y axis lines meeting
// at the lower-left corner and small arrowheads; the two STRONG panels
// alone carry a faint gray diagonal fit-line arrow through the cloud; the
// two positive panels are mirror images of the two negative panels; the
// r = 0 panel is a shapeless cloud with no trend; NO axis labels, tick
// numbers, or axis titles) → the gallery is an ORIGINAL_KYP_REDRAW (the
// registry visual rebuilds the five dot fields as KYP vector art matching
// each r's direction and tightness); the text block is an ORIGINAL KYP
// ADAPTATION (the r/r² interpretation rail + the verdict band). VLM
// AVAILABLE this session (glm-4.6v, TWO passes — full page at 120dpi + a
// 300dpi upper-portion crop, staging-pubh17/vlm-census.txt), confirming:
// the five-panel printed order exactly as listed above (none missing or
// extra); the heading and body text verbatim; the r characters print in
// ITALIC throughout the body; "Correlation does not necessarily imply
// causation." prints in REGULAR roman (NOT bolded, italicized, or colored)
// inline at the end of the coefficient-of-determination sentence; NO red
// text, NO mnemonics, NO margin notes, NO asterisk footnotes in the top
// portion; a small First Aid review-question icon (square/checkmark "Rx"
// glyph) sits at the far right edge beside the captions — page FURNITURE,
// not content, documented and not redrawn; the footer slug
// "FAS1_2026_06-PubHealth.indd 268" + "12/16/25 12:46 PM".
// PRINTED-TEXT QUIRKS carried + documented: (1) "SEC TION II" header-space
// extraction artifact (known, carried as-is); (2) THE BANNER PRINTS TWICE
// on this page — the running-header instance "▶ PUBLIC HEALTH SCIENCES—
// ETHICS" (raw line 10, y≈52, top margin band) sits INSIDE the top portion
// as page furniture (FA's running header carries the subsection that
// STARTS on this page — Ethics begins mid-page, so the header already says
// ETHICS even though the page's first block is still Epidemiology and
// Biostatistics content), while the in-body ribbon instance (raw line 43,
// y≈337) is the pinned SPLIT BOUNDARY itself and is never quoted; (3) the
// heading "Pearson correlation coefficient" wraps across two lines in its
// label column (raw lines 5–6); (4) MIXED DASH GLYPHS — the body's "−1"
// uses the TRUE MINUS SIGN (U+2212) while the two negative gallery labels
// print the EN DASH (U+2013, "r = –0.8" / "r = –0.4") — carried as
// extracted and documented (the VLM pass 2 agrees the labels are en-dash
// style; pass 1's "proper minus sign" reading is overruled by the text
// layer, which is the glyph authority); (5) "r=0" — the middle panel's
// label MERGES to one spaceless word in the raw text layer (the thin
// spaces around "=" collapse) while the print shows spaced "r = 0"
// (VLM-confirmed); the note carries the spaced form and documents the
// merge; (6) the superscript ² of the coefficient of determination
// flattens to "r 2" in the raw text layer — the note renders r² and
// documents the flattening; (7) C1 control bytes around the arrows in the
// Positive/Negative lines (U+008E before →, U+008F before ↑, U+0090
// before ↓) — stripped by the evidence normalizer, carried as printed;
// (8) READING-ORDER JUMBLE in the gallery — the caption "No correlation"
// extracts AFTER the "r = +0.4" label (raw line 33 after 31) and the
// caption "Weak positive correlation" extracts AFTER the "r = +0.8" label
// (raw lines 37–38 after 35); the printed panel order is pinned by bbox
// x-coordinates + the VLM pass, and the gen script's evidence ranges quote
// the labels in their raw extraction order. ADJUDICATIONS (documented in
// the manifest too): (A) the VLM pass 1 misread the Negative r line's
// arrows as "(as one variable ↓, the other variable ↓)" — the TEXT LAYER
// prints "(as one variable ↑, the other ↓)" (raw line 16), which is also
// the internally consistent reading (negative correlation = one variable
// up, the other DOWN); text layer governs, VLM reading corrected;
// (B) the negative-label dash identity — see quirk (4): text layer governs
// (en dash in the labels, true minus in the body); (C) the printed
// gallery order matches the batch brief's expected order exactly
// (−0.8 → −0.4 → 0 → +0.4 → +0.8, strong-negative through
// strong-positive) — no correction needed. PROVENANCE SPLIT: verbatim =
// the definition block's five printed sentences (including the verdict
// "Correlation does not necessarily imply causation.") and the gallery's
// five r labels + five captions; FA-own = the five-panel gallery concept
// and its calibration ladder, the italic r, the fit-line arrows in the two
// strong panels; KYP-original = the SIGN → SIZE → SQUARE → VERDICT
// reading protocol, the sign-vs-strength two-dial decoder, the worked r²
// arithmetic (r = +0.8 → r² = 0.64 → 64%), the confounder/reverse-
// direction/Design-decides rivals behind the causation verdict, the linear-
// only caveat for r = 0, the exam layer, and the four KYP mnemonics
// ("SIGN IS THE SLOPE, SIZE IS THE SNUGNESS", "SQUARE THE r, PRICE THE
// VARIANCE", "ZERO MEANS NO LINE, NOT NO LINK", "CORRELATION DESCRIBES,
// DESIGN CONCLUDES") — every teaching generalization beyond the printed
// page is flagged as KYP context. DrugCards: none — the page prints a
// statistical measure, not drugs (documented as folded-by-absence in the
// manifest). The very next content below the boundary ribbon is "Core
// ethical principles" — the Ethics subsection, a separate topic produced
// in parallel.

export const correlationCoefficient: KypUsMLENote = {
  id: "correlation-coefficient",
  title: "Correlation and the Pearson Coefficient",
  subtitle:
    "The last block of the Epidemiology and Biostatistics subsection is a single number with three dials. The Pearson correlation coefficient r measures the linear correlation between two variables, and it always lives between −1 and +1 — the closer its absolute value is to 1, the stronger the linear correlation. The SIGN is the first dial: a positive r value means positive correlation (as one variable ↑, the other variable ↑); a negative r value means negative correlation (as one variable ↑, the other ↓). The SIZE is the second dial: |r| near 1 is a cloud of dots hugging a straight line; |r| near 0 is a shapeless scatter — which is exactly what the page's five-panel gallery calibrates: r = −0.8 strong negative, r = −0.4 weak negative, r = 0 no correlation, r = +0.4 weak positive, r = +0.8 strong positive, each panel a dot field whose direction and tightness you can read at a glance. The third dial is the SQUARE: the coefficient of determination r² is the proportion of variance in one variable that can be explained by variance in the other — variance itself being how much the measured values differ from the average value in a data set. And underneath all three dials sits the page's own verdict, printed in plain roman at the end of the block: correlation does not necessarily imply causation. An r of −0.9 describes an association; only study design — not the size of r — can carry it to a causal claim.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory:
    "Public Health Sciences — bivariate association: the Pearson correlation coefficient (a measure of the linear correlation between two variables; r always between −1 and +1; sign = direction, |r| = strength), the variance definition, the coefficient of determination r², the printed five-panel scatter gallery (r = −0.8 strong negative through r = +0.8 strong positive, redrawn as original KYP vector art), and the correlation-does-not-necessarily-imply-causation verdict.",
  difficulty: 1,
  readTime: 5,
  sourceRef:
    "First Aid 2026, Part 1 pp. 268 (top) (Epidemiology and Biostatistics: Pearson correlation coefficient)",
  tags: [
    "correlation",
    "Pearson correlation coefficient",
    "correlation coefficient",
    "r",
    "coefficient of determination",
    "r²",
    "variance",
    "positive correlation",
    "negative correlation",
    "no correlation",
    "scatter plot",
    "linear correlation",
    "shared variance",
    "correlation vs causation",
    "confounding",
    "biostatistics",
    "epidemiology",
  ],
  core: {
    what:
      "The TOP portion of book 268, carried whole. BLOCK 1 — the “Pearson correlation coefficient” text block (navy heading, body printing to its right): “A measure of the linear correlation between two variables. r is always between −1 and +1. The closer the absolute value of r is to 1, the stronger the linear correlation between the 2 variables. Variance is how much the measured values differ from the average value in a data set. Positive r value → positive correlation (as one variable ↑, the other variable ↑). Negative r value → negative correlation (as one variable ↑, the other ↓). Coefficient of determination = r² (proportion of variance in one variable that can be explained by variance in the other variable). Correlation does not necessarily imply causation.” BLOCK 2 — THE FIVE-PANEL SCATTER GALLERY (pure vector art, printed order left→right): panel 1 “r = –0.8” / “Strong negative correlation” (~12 navy dots in a tight downhill trend, a faint gray fit-line arrow through the cloud); panel 2 “r = –0.4” / “Weak negative correlation” (loose downhill drift, wide vertical scatter); panel 3 “r = 0” / “No correlation” (a shapeless cloud with no trend); panel 4 “r = +0.4” / “Weak positive correlation” (loose uphill drift); panel 5 “r = +0.8” / “Strong positive correlation” (~13 dots tight along a steep ascending fit line) — the two positive panels mirror the two negative panels, every panel a gridline frame with unlabeled x/y axes meeting at the lower-left corner with small arrowheads.",
    why:
      "This block closes the subsection's arithmetic story: every earlier page quantified one variable or compared groups (means, proportions, risks, intervals, tests); the Pearson coefficient quantifies the RELATIONSHIP between two variables — the one tool on the page that speaks bivariate. It is built from the page's own definition of variance (“how much the measured values differ from the average value in a data set”) and converts shared spread into a single signed number, which is why the coefficient of determination r² reads as “the proportion of variance in one variable that can be explained by variance in the other variable” — r is the currency, variance is the bank. The five-panel gallery exists because r is easiest to learn geometrically: direction is the slope of the cloud (positive r, both variables climb together; negative r, one climbs as the other falls) and strength is the cloud's tightness (|r| → 1, dots hug a line; |r| → 0, dots lose the line entirely). And the block ends with the verdict the exam quotes year after year — “Correlation does not necessarily imply causation.” — because a tight line of dots is compatible with three rival stories: exposure causes outcome, a confounder drives both, or the arrow points backward. The measure describes; only the design concludes.",
    keyIdea:
      "Read any r in four moves. MOVE 1 — SIGN IS THE SLOPE: positive r value → positive correlation (as one variable ↑, the other variable ↑); negative r value → negative correlation (as one variable ↑, the other ↓). The sign says NOTHING about strength. MOVE 2 — SIZE IS THE SNUGNESS: r is always between −1 and +1, and the closer the absolute value of r is to 1, the stronger the linear correlation between the 2 variables — calibrate on the printed gallery: |r| = 0.8 = strong (dots hug the line), |r| = 0.4 = weak (loose drift), r = 0 = “No correlation” (shapeless cloud — no LINEAR trend; a curve can still hide inside it). MOVE 3 — SQUARE THE STRONG ONE: coefficient of determination = r², the proportion of variance in one variable that can be explained by variance in the other — r = ±0.8 squares to 0.64 (64% of the variance shared), r = ±0.4 squares to 0.16 (16%). Strength in r, explained variance in r² — never swap them. MOVE 4 — DELIVER THE VERDICT: “Correlation does not necessarily imply causation.” No value of r — not −1, not +0.99 — licenses a causal claim by itself; confounding, reverse direction, and chance all wear the same tight line. Sign, size, square, verdict: four moves, and any correlation question decodes itself.",
  },
  mechanisms: [
    {
      id: "scatter-to-r-map",
      title:
        "From dot cloud to r: how the scatter's direction and tightness encode the sign and the strength",
      context:
        "The printed five-panel scatter gallery (book 268 top): five dot fields, five values of r",
      flow: {
        nodes: [
          {
            id: "cloud",
            label: "THE DOT CLOUD — two variables, one dot per subject",
            sublabel:
              "Input — plot each subject as one point (x = variable 1, y = variable 2). The gallery's five panels are five possible shapes of that cloud: the geometry of the dots IS the information the coefficient compresses into a single number. Variance — “how much the measured values differ from the average value in a data set” — is the raw material: r measures how much of two variables' spread moves together.",
            variant: "input",
          },
          {
            id: "direction",
            label: "DIAL 1 — DIRECTION: the slope of the cloud sets the SIGN",
            sublabel:
              "Process — read the trend left to right. Uphill (both variables rise together) → positive r value → positive correlation: “as one variable ↑, the other variable ↑” (the printed +0.4 and +0.8 panels). Downhill (one rises as the other falls) → negative r value → negative correlation: “as one variable ↑, the other ↓” (the printed –0.8 and –0.4 panels). Flat shapeless scatter → r = 0, the printed “No correlation” panel.",
            variant: "process",
          },
          {
            id: "tightness",
            label: "DIAL 2 — TIGHTNESS: the hug of the cloud sets the STRENGTH",
            sublabel:
              "Process — ask how snugly the dots would sit on a straight line drawn through them. “The closer the absolute value of r is to 1, the stronger the linear correlation between the 2 variables”: |r| = 0.8 → dots hug the line (the two STRONG panels — the only two the print gives a faint gray fit-line arrow, the visual signature of a strong correlation); |r| = 0.4 → loose drift with wide vertical scatter (the two WEAK panels); r = 0 → the cloud has lost the line entirely.",
            variant: "process",
          },
          {
            id: "mirror",
            label: "THE GALLERY'S SYMMETRY — the positives mirror the negatives",
            sublabel:
              "Process — the printed gallery is a calibration ladder in both directions at once: –0.8 (strong negative) and +0.8 (strong positive) are equally STRONG, only sloped opposite ways; –0.4 and +0.4 are equally WEAK; 0 sits in the middle with no trend. Strength comes from |r| alone — the sign never adds or subtracts strength (KYP framing of the printed panels).",
            variant: "process",
          },
          {
            id: "readout",
            label: "THE READOUT — any r = sign × strength, in that order",
            sublabel:
              "Output — given r = −0.8, read: NEGATIVE (one variable ↑, the other ↓) and STRONG (|r| close to 1, dots hug a downhill line). Given r = +0.4: POSITIVE (both ↑ together) and WEAK. Given r = 0: no linear correlation. The two dials are independent — the exam's favorite trick is a large negative r offered as “weak” because of its minus sign; the minus sign is only the slope.",
            variant: "output",
          },
        ],
        edges: [
          { from: "cloud", to: "direction", label: "slope of the trend →" },
          { from: "cloud", to: "tightness", label: "hug around a line →" },
          { from: "direction", to: "mirror", label: "uphill vs downhill →" },
          { from: "tightness", to: "mirror", label: "snug vs loose →" },
          { from: "mirror", to: "readout", label: "sign × strength →" },
        ],
      },
    },
    {
      id: "r-squared-variance-map",
      title:
        "Squaring r: the coefficient of determination, and why the block ends with a causation verdict",
      context:
        "The printed block's last two sentences (book 268 top): r² and “Correlation does not necessarily imply causation.”",
      flow: {
        nodes: [
          {
            id: "variance",
            label: "VARIANCE — the page's own definition",
            sublabel:
              "Input — “Variance is how much the measured values differ from the average value in a data set.” Every measured variable carries spread; the correlation question is how much of two variables' spread is SHARED — do the deviations from the average travel together?",
            variant: "input",
          },
          {
            id: "square",
            label: "THE SQUARE — coefficient of determination = r²",
            sublabel:
              "Process — square r and the sign dies, but the meaning transforms: “Coefficient of determination = r² (proportion of variance in one variable that can be explained by variance in the other variable).” r = ±0.8 → r² = 0.64: 64% of the variance in one variable is explained by the other; r = ±0.4 → r² = 0.16: only 16%. Weak correlations explain embarrassingly little — halving r quarters the explained variance (KYP arithmetic on the printed formula).",
            variant: "process",
          },
          {
            id: "scalecheck",
            label: "THE SCALE CHECK — r in [−1, +1], r² in [0, 1]",
            sublabel:
              "Process — “r is always between −1 and +1” (printed), so r² always lands between 0 and 1 — which is exactly what a PROPORTION needs. This is also the fastest exam check: any “r²” reported outside 0–1, or any “r” outside −1 to +1, is impossible on its face (KYP context).",
            variant: "process",
          },
          {
            id: "verdict",
            label: "THE VERDICT — “Correlation does not necessarily imply causation.”",
            sublabel:
              "Process — the block's own last sentence, printed in plain roman (VLM-confirmed: not bolded, not colored). A tight line of dots is compatible with at least three rival stories (KYP elaboration): (1) CONFOUNDING — a third variable drives both (ice cream sales correlate with drowning; summer heat drives both); (2) REVERSE DIRECTION — the “outcome” may be driving the “exposure”; (3) CHANCE — a strong r in a small sample can be noise. The size of r does not adjudicate among them.",
            variant: "process",
          },
          {
            id: "out",
            label: "THE RULE — the measure describes, the design concludes",
            sublabel:
              "Output — r and r² are DESCRIPTIVE statistics of association; a causal claim requires the study-design layer (temporality, comparison groups, randomization — the observational-designs and clinical-trial pages of this same chapter). When a stem follows a strong correlation with “therefore exposure causes outcome,” the printed verdict is the answer: correlation does not necessarily imply causation.",
            variant: "output",
          },
        ],
        edges: [
          { from: "variance", to: "square", label: "shared spread → r² →" },
          { from: "square", to: "scalecheck", label: "[−1,+1] squares to [0,1] →" },
          { from: "scalecheck", to: "verdict", label: "proportion ≠ mechanism →" },
          { from: "verdict", to: "out", label: "rival stories need design →" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "correlation-map",
      title:
        "The five-panel scatter gallery and the r/r² decoder (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 268 (top)'s two blocks. TOP — the printed five-panel scatter gallery redrawn as KYP vector art in the printed order: r = –0.8 (tight downhill dot field, “Strong negative correlation”) · r = –0.4 (loose downhill drift, “Weak negative correlation”) · r = 0 (shapeless cloud, “No correlation”) · r = +0.4 (loose uphill drift, “Weak positive correlation”) · r = +0.8 (tight uphill field, “Strong positive correlation”) — each panel a gridline frame with unlabeled axes, the two strong panels carrying a fit-line arrow as printed. MIDDLE — the r/r² interpretation rail: the SIGN card (positive r: as one variable ↑, the other ↑; negative r: as one variable ↑, the other ↓), the SIZE card (r always between −1 and +1; the closer |r| is to 1 the stronger the linear correlation — with the −1→+1 scale and the five gallery values plotted on it), and the SQUARE card (coefficient of determination r², proportion of variance explained, with the worked example r = +0.8 → r² = 0.64 → 64%). BOTTOM — the correlation ≠ causation verdict band: the page's own printed sentence plus the three KYP rival-explanation chips (confounder · reverse direction · design decides).",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 290 — the gallery is PURE VECTOR art (VLM-read at 120dpi + a 300dpi upper crop, staging-pubh17/vlm-census.txt: navy filled-circle dots, ~11–14 per panel, tan gridline frames, unlabeled x/y axes with lower-left arrowheads, fit-line arrows only in the two strong panels, no axis labels or ticks). The visual is an ORIGINAL KYP REDRAW + ADAPTATION: the five dot fields are rebuilt as KYP vector art matching each r's direction and tightness (the print's geometry pinned by pdftotext -bbox + the VLM pass — panel order −0.8, −0.4, 0, +0.4, +0.8 left to right; the raw text layer extracts the captions in a jumbled order, documented), every printed r label and caption is preserved verbatim, and the interpretation rail + verdict band re-lay-out the text block's five sentences. The full block text is additionally carried verbatim in the note's table block.",
    },
    {
      kind: "table",
      title:
        "Book 268 (top) — the printed Pearson correlation coefficient block, carried verbatim (every printed word)",
      intro:
        "The page's text block, printed sentence by sentence, plus the five-panel gallery's printed labels and captions in their PRINTED order (panel order pinned by pdftotext -bbox x-coordinates + the VLM pass — the raw text layer extracts the gallery captions in a jumbled order and merges the middle label to “r=0”, both documented below). The r characters print in italic in the body; the verdict sentence prints in regular roman. The two negative gallery labels print an EN DASH (–) where the body's “−1” uses the TRUE MINUS SIGN (−) — carried as extracted.",
      columns: ["PRINTED ELEMENT", "VERBATIM TEXT — book 268 (top)"],
      rows: [
        [
          "Definition and range",
          "A measure of the linear correlation between two variables. r is always between −1 and +1.",
        ],
        [
          "Strength rule",
          "The closer the absolute value of r is to 1, the stronger the linear correlation between the 2 variables.",
        ],
        [
          "Variance (defined inline)",
          "Variance is how much the measured values differ from the average value in a data set.",
        ],
        [
          "Positive r value",
          "Positive r value → positive correlation (as one variable ↑, the other variable ↑).",
        ],
        [
          "Negative r value",
          "Negative r value → negative correlation (as one variable ↑, the other ↓).",
        ],
        [
          "Coefficient of determination + the verdict",
          "Coefficient of determination = r² (proportion of variance in one variable that can be explained by variance in the other variable). Correlation does not necessarily imply causation.",
        ],
        [
          "Gallery panel 1 (leftmost)",
          "r = –0.8 — Strong negative correlation",
        ],
        [
          "Gallery panel 2",
          "r = –0.4 — Weak negative correlation",
        ],
        [
          "Gallery panel 3 (middle)",
          "r = 0 — No correlation",
        ],
        [
          "Gallery panel 4",
          "r = +0.4 — Weak positive correlation",
        ],
        [
          "Gallery panel 5 (rightmost)",
          "r = +0.8 — Strong positive correlation",
        ],
      ],
      caption:
        "Verbatim carry, documented: the definition block's five printed sentences and the gallery's five labels + five captions, nothing else. Printed quirks carried + documented: the heading “Pearson correlation coefficient” wraps across two lines in its label column; the superscript ² of r² flattens to “r 2” in the raw text layer (the note renders r²); the two negative labels print an EN DASH (“r = –0.8”, “r = –0.4”) while the body's “−1 and +1” uses the TRUE MINUS — mixed dash glyphs as extracted; the middle label merges to “r=0” in the raw layer (the print spaces it, VLM-confirmed); C1 control bytes ride the arrows (→, ↑, ↓) in the raw layer; the caption “No correlation” extracts AFTER the “r = +0.4” label and “Weak positive correlation” extracts AFTER the “r = +0.8” label — a reading-order jumble; the printed panel order (−0.8 · −0.4 · 0 · +0.4 · +0.8) is pinned by bbox x-coordinates + the VLM pass. “Correlation does not necessarily imply causation.” is the source's own sentence, printed in regular roman at the end of the coefficient-of-determination sentence — carried verbatim and attributed everywhere it appears in this note.",
    },
    {
      kind: "list",
      title:
        "The gallery decoder — panel by panel, direction × tightness × square (KYP's reading)",
      intro:
        "Each of the five printed panels compressed to its exam-decision core: what the dots look like, what the r value says, and what r² it squares to. This is the layer to recall when a vignette hands you a scatter description or an r value and asks for its interpretation.",
      items: [
        {
          lead: "PANEL 1 — r = –0.8: STRONG NEGATIVE (tight downhill)",
          text: "Dots: ~12 navy points hugging a steep descending line — the print even draws a faint gray fit-line arrow through this cloud (and through panel 5 only), the visual signature of strength. Reading: negative r value → negative correlation (as one variable ↑, the other ↓), and |r| = 0.8 is close to 1 → strong. Square: r² = 0.64 — 64% of the variance in one variable is explained by variance in the other (KYP arithmetic).",
        },
        {
          lead: "PANEL 2 — r = –0.4: WEAK NEGATIVE (loose downhill)",
          text: "Dots: a downhill drift with wide vertical scatter — the trend is visible but the cloud is loose. Reading: negative r value → one variable ↑, the other ↓, but |r| = 0.4 is far from 1 → weak. Square: r² = 0.16 — only 16% of the variance explained. Note the asymmetry: strength 0.8 vs 0.4 is a factor of 2 in r but a factor of 4 in r².",
        },
        {
          lead: "PANEL 3 — r = 0: NO CORRELATION (shapeless cloud)",
          text: "Dots: spread across the frame with no upward or downward drift — the printed caption is “No correlation.” Reading: no LINEAR correlation; the variables do not travel together in a straight line. KYP caveat keyed to the printed word “linear”: r = 0 does not exclude a curved relationship (a perfect U-shaped arc can still have r = 0) — the coefficient measures straight-line association only.",
        },
        {
          lead: "PANEL 4 — r = +0.4: WEAK POSITIVE (loose uphill)",
          text: "Dots: an uphill drift, loosely scattered — the mirror image of panel 2. Reading: positive r value → positive correlation (as one variable ↑, the other variable ↑); |r| = 0.4 → weak. Square: r² = 0.16 — 16% of the variance explained. The sign flipped, the strength did not: +0.4 and –0.4 are equally weak.",
        },
        {
          lead: "PANEL 5 — r = +0.8: STRONG POSITIVE (tight uphill)",
          text: "Dots: ~13 points tight along a steep ascending fit line — the mirror image of panel 1, equally strong. Reading: positive r value → both variables ↑ together; |r| = 0.8 close to 1 → strong. Square: r² = 0.64 — 64% of the variance explained. And the verdict applies to this panel exactly as to panel 1: even a tight uphill line does not necessarily imply causation.",
        },
      ],
    },
    {
      kind: "steps",
      title: "Reading any correlation the exam hands you in four moves",
      intro:
        "The whole block distilled into an ordered reading path — SIGN, SIZE, SQUARE, VERDICT — applicable to any r value, scatter description, or r² claim the exam shows, printed on book 268 or not.",
      steps: [
        {
          label: "MOVE 1 — SIGN: which way do the variables travel together?",
          detail:
            "Positive r value → positive correlation (as one variable ↑, the other variable ↑). Negative r value → negative correlation (as one variable ↑, the other ↓). On a scatter: uphill cloud = positive, downhill cloud = negative. The sign carries direction ONLY — it says nothing about how strong the association is.",
        },
        {
          label: "MOVE 2 — SIZE: how snugly does the cloud hug a line?",
          detail:
            "r is always between −1 and +1, and the closer the absolute value of r is to 1, the stronger the linear correlation between the 2 variables. Calibrate on the printed gallery: |r| ≈ 0.8 → strong (dots hug the line), |r| ≈ 0.4 → weak (loose drift), r = 0 → no correlation (shapeless cloud). Compare ABSOLUTE values: –0.8 is STRONGER than +0.4.",
        },
        {
          label: "MOVE 3 — SQUARE: how much variance is explained?",
          detail:
            "Coefficient of determination = r² — the proportion of variance in one variable that can be explained by variance in the other variable. Square the printed r (sign dies in the squaring): ±0.8 → 0.64 (64%), ±0.4 → 0.16 (16%), 0 → 0. If the question asks “what proportion of the variance…” the answer is r², never r.",
        },
        {
          label: "MOVE 4 — VERDICT: is a causal claim being made?",
          detail:
            "“Correlation does not necessarily imply causation.” — the block's own closing sentence. When a stem or an answer choice leaps from a strong r to “X causes Y,” that leap is the error to catch: a confounder driving both variables, reverse direction, or chance can all produce the same tight line. The design layer (randomization, temporality, comparison groups) is what separates causation from correlation.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "r vs r² — the correlation coefficient vs the coefficient of determination, the exam's favorite see-saw",
      intro:
        "The block prints two different quantities two sentences apart: the Pearson correlation coefficient r and the coefficient of determination r². Every distinguishing feature follows from one operation — the squaring.",
      columns: [
        "r — the Pearson correlation coefficient",
        "r² — the coefficient of determination",
      ],
      rows: [
        {
          label: "What it is",
          a: "“A measure of the linear correlation between two variables” — a signed number compressing the scatter's direction and tightness",
          b: "The square of r — “the proportion of variance in one variable that can be explained by variance in the other variable”",
        },
        {
          label: "Range",
          a: "“Always between −1 and +1” — the sign is meaningful",
          b: "Between 0 and 1 — the sign dies in the squaring (a proportion cannot be negative)",
        },
        {
          label: "What it answers",
          a: "Direction and strength of the LINEAR relationship: do the variables travel together, and how snugly?",
          b: "How much of the spread is shared: what fraction of one variable's variance does the other explain?",
        },
        {
          label: "Worked example (r = +0.8)",
          a: "A strong positive correlation — as one variable ↑, the other variable ↑, with dots hugging an uphill line",
          b: "0.64 — 64% of the variance in one variable is explained by variance in the other (and 36% is not)",
        },
        {
          label: "What it can never do",
          a: "Imply causation — “Correlation does not necessarily imply causation.”",
          b: "Imply causation either — squaring adds explained variance, not causal force; the verdict governs both",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this block — four stem shapes and one verdict twist",
      body:
        "SHAPE 1 — INTERPRET AN r: the stem hands you a value (“r = −0.9 between variable X and variable Y”) and asks what it means — route through the four moves (negative: as X ↑, Y ↓; |r| close to 1: strong). SHAPE 2 — SQUARE IT: “a study reports r = 0.8; what proportion of the variance in Y is explained by X?” — 0.64, the coefficient of determination, never 0.8. SHAPE 3 — MATCH THE SCATTER: a described dot cloud (“points drift loosely downward”) maps to weak negative (the printed –0.4 panel), a tight uphill line to strong positive (+0.8), a shapeless cloud to “No correlation” (r = 0). SHAPE 4 — RANGE CHECK: any option quoting r outside −1 to +1 (or r² outside 0 to 1) is impossible on its face. THE VERDICT TWIST: the stem builds an impressive correlation (even r = −0.99) and one answer choice concludes “…therefore X causes Y” — that choice is wrong by the block's own closing sentence: correlation does not necessarily imply causation. Also expect the linear-only nuance: r = 0 means no LINEAR correlation; a curved relationship can survive it (KYP caveat keyed to the printed word “linear”).",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "The page's own verdict, carried attributed — plus the KYP mnemonic ledger",
      body:
        "The block prints ONE sentence of its own that functions as its hook — “Correlation does not necessarily imply causation.” — printed in regular roman at the end of the coefficient-of-determination sentence (VLM-confirmed: not bolded, not colored). It is First Aid's own line, carried VERBATIM and ATTRIBUTED everywhere it appears in this note; it is not counted among the KYP mnemonics. NO other mnemonic prints anywhere in the top portion (VLM census, two passes, staging-pubh17/vlm-census.txt: no red text, no margin mnemonics) — so all four codes in the Memory section are KYP ORIGINALS, marked as such: “SIGN IS THE SLOPE, SIZE IS THE SNUGNESS” (the two dials of r), “SQUARE THE r, PRICE THE VARIANCE” (r → r² → proportion of variance explained), “ZERO MEANS NO LINE, NOT NO LINK” (r = 0 kills the line, not the relationship), and “CORRELATION DESCRIBES, DESIGN CONCLUDES” (the verdict, operationalized).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "Clinical anchors — where correlation is read at the bedside and in the literature (KYP context)",
      intro:
        "The top portion of book 268 prints no clinical example of its own — the block is pure method. These anchors (all KYP context, flagged as such) are the settings where the exam and the literature actually deploy r and r².",
      items: [
        {
          lead: "THE NEGATIVE-CLASSIC — age and physiologic decline",
          text: "Age vs glomerular filtration rate: GFR falls as age rises — a negative correlation (as one variable ↑, the other ↓); age vs bone mineral density is the same shape. These are the clinical instantiations of the printed –0.8 / –0.4 panels: the sign is negative, the strength depends on how tightly the cloud hugs its line (KYP examples, not printed).",
        },
        {
          lead: "THE POSITIVE-CLASSIC — dose, exposure, and burden",
          text: "Pack-years of smoking vs decline in FEV₁, BMI vs systolic blood pressure, HbA1c vs diabetic complication risk — each climbs with its exposure: positive correlation (as one variable ↑, the other variable ↑), the clinical twins of the printed +0.4 / +0.8 panels (KYP examples, not printed).",
        },
        {
          lead: "THE LITERATURE HABIT — papers report r², readers skip it",
          text: "Research abstracts routinely quote r and let the reader square it: an “r = 0.7” biomarker–outcome association explains less than half the variance (r² = 0.49). Reading a paper's association claims through the printed formula — coefficient of determination = r², proportion of variance explained — is the fastest reality check on “strong correlate” language (KYP application of the printed sentence).",
        },
        {
          lead: "THE BOUNDARY — what this page is NOT",
          text: "Everything below the block belongs to the ETHICS subsection: the ribbon banner “▶ PUBLIC HEALTH SCIENCES—ETHICS” prints directly below the gallery (after a thin block-ending rule), and “Core ethical principles” — autonomy, beneficence, nonmaleficence, justice — is the next block in the book, a separate topic produced in parallel. This note's every quote ends above that banner (KYP framing of the chapter's structure).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A study of 200 adults reports that minutes of daily exercise and HDL cholesterol have a Pearson correlation coefficient of r = +0.8; the scatter plot shows points clustered tightly along an ascending line.",
        discriminator:
          "The sign (positive: both variables rise together) plus |r| close to 1 (tight cloud) — the printed +0.8 panel exactly",
        concept: "Interpreting the sign and strength of a Pearson r",
        answer:
          "A strong positive linear correlation — positive r value → positive correlation (as one variable ↑, the other variable ↑), and the closer the absolute value of r is to 1, the stronger the linear correlation between the 2 variables. (And squaring it: r² = 0.64 — 64% of the variance in one variable is explained by the other.)",
      },
      {
        stem: "The same study is summarized in a journal club as “exercise explains 80% of the variance in HDL.” The presenter is asked to correct the figure using the coefficient of determination.",
        discriminator:
          "The phrase “proportion of variance … explained” routes to r², not r — the square must be computed",
        concept: "Coefficient of determination = r²",
        answer:
          "Coefficient of determination = r² — the proportion of variance in one variable that can be explained by variance in the other variable: r = 0.8 squares to 0.64, so 64% (not 80%) of the variance is explained — and the remaining 36% is explained by other factors.",
      },
      {
        stem: "Five scatter plots are shown: a loose downward drift, a tight downhill band, a shapeless mid-cloud, a loose upward drift, and a tight uphill band. The examinee must match each to its r value from the set {−0.8, −0.4, 0, +0.4, +0.8}.",
        discriminator:
          "Two independent dials: slope of the cloud sets the sign; tightness of the cloud sets |r| — the printed gallery IS this question",
        concept: "Reading r from scatter geometry",
        answer:
          "Tight downhill = r = –0.8 (strong negative correlation); loose downward = r = –0.4 (weak negative); shapeless cloud = r = 0 (No correlation); loose upward = r = +0.4 (weak positive); tight uphill = r = +0.8 (strong positive) — the five printed panels in order.",
      },
      {
        stem: "A county health officer notes that ice cream sales and drowning deaths correlate at r = +0.85 over 12 months, and proposes restricting ice cream sales to prevent drownings.",
        discriminator:
          "A very strong positive r followed by a causal intervention proposal — the block's closing sentence is the answer",
        concept: "Correlation does not necessarily imply causation",
        answer:
          "The correlation is real but the causal leap is not licensed: “Correlation does not necessarily imply causation.” Here a CONFOUNDER (summer heat drives both swimming and ice cream) explains the association — the strength of r never adjudicates between causation, confounding, reverse direction, and chance.",
      },
    ],
    traps: [
      {
        a: "r = 0.8 — the correlation coefficient",
        b: "r² = 0.64 — the coefficient of determination",
        whyConfused:
          "The block prints both two sentences apart; a stem quoting 0.8 invites the answer 0.8 even when the question asks for explained variance",
        keyDifference:
          "r measures the direction and strength of the linear correlation; r² is “the proportion of variance in one variable that can be explained by variance in the other variable” — square only when the question asks for a proportion of variance",
        clue:
          "“Proportion of variance … explained” → r². “Strength/direction of the correlation” → r. 0.8 vs 0.64 is the tell.",
      },
      {
        a: "r = −0.8 — strong negative correlation",
        b: "r = +0.4 — weak positive correlation",
        whyConfused:
          "Students read the minus sign as “less”: −0.8 looks smaller than +0.4 on a number line",
        keyDifference:
          "Strength lives in the ABSOLUTE value: the closer |r| is to 1, the stronger the linear correlation — |−0.8| = 0.8 is far stronger than 0.4; the sign only fixes direction (one variable ↑, the other ↓)",
        clue:
          "Rank correlations by |r|, not by signed value: −0.9 > +0.7 > −0.5 > +0.2 in strength.",
      },
      {
        a: "A strong correlation (r = −0.9) as evidence of causation",
        b: "The same strong correlation as evidence of association only",
        whyConfused:
          "The tighter the line, the more it feels like a mechanism; magnitude seems to buy causality",
        keyDifference:
          "“Correlation does not necessarily imply causation.” — printed verbatim on the page and true at every value of r: confounding, reverse direction, and chance all produce tight lines; only study design separates them",
        clue:
          "Any answer choice that moves from “correlates strongly with” to “causes” without design support (randomization, temporality) is the trap.",
      },
      {
        a: "r = 0 — “No correlation” (the printed caption)",
        b: "r = 0 — “no relationship of any kind”",
        whyConfused:
          "The printed panel caption says “No correlation,” which reads as “no association whatsoever”",
        keyDifference:
          "r measures LINEAR correlation (the printed definition: “a measure of the linear correlation between two variables”) — r = 0 excludes a straight-line trend, not a curved one; a perfect U-shaped relationship can still have r = 0 (KYP caveat keyed to the printed word “linear”)",
        clue:
          "r = 0 means the LINE is gone; check for curvature in the scatter before declaring independence.",
      },
    ],
    pivots: [
      {
        lookAlike: "A number quoted in a stem: is it r or r²?",
        differentiator:
          "What the question ASKS: strength/direction of association → r; proportion of variance explained → r²",
        correctPath:
          "If the stem gives r and asks for explained variance, square it (0.8 → 0.64; 0.4 → 0.16). If the stem gives r² and asks about strength, take the square root and re-attach the sign from the described direction (0.49 with a downhill cloud → r = −0.7).",
      },
      {
        lookAlike: "“Strong negative correlation” in the answer options",
        differentiator:
          "Sign and strength are separate dials — the option must satisfy BOTH",
        correctPath:
          "Strong negative = |r| close to 1 AND a minus sign (−0.8 or −0.9, not −0.3, not +0.9). Match the scatter's slope (downhill → negative) and its tightness (hugging a line → strong) independently.",
      },
      {
        lookAlike: "A causal conclusion following a correlation statistic",
        differentiator:
          "The leap from association to causation — the page's own closing sentence",
        correctPath:
          "“Correlation does not necessarily imply causation.” — route the question to the design layer: was there randomization? temporality? a control for confounders? If not, the correct answer describes association only, and a confounder/reverse-direction option is usually the right alternative explanation.",
      },
    ],
    miniCase: {
      vignette:
        "A resident studying preventive cardiology enrolls 200 healthy adults, records their weekly minutes of moderate exercise with a validated diary, and measures each subject's HDL cholesterol. The scatter plot shows points rising together from the lower left to the upper right, sitting fairly close to an imaginary straight line. She calculates a Pearson correlation coefficient of r = +0.8 and tells the attending: “Exercise explains 80% of the variance in HDL in this cohort — and this proves that raising exercise raises HDL, so we should prescribe exercise as an HDL intervention.”",
      question:
        "Which of the following is the MOST accurate evaluation of the resident's two claims?",
      options: [
        {
          label: "A",
          text:
            "r = +0.8 is a strong positive correlation; the coefficient of determination is 0.64, so 64% — not 80% — of the variance in HDL is explained, and the correlation does not by itself prove that exercise raises HDL",
          correct: true,
          why:
            "CORRECT — both errors are caught. FIRST, the proportion-of-variance claim routes to the coefficient of determination: “Coefficient of determination = r² (proportion of variance in one variable that can be explained by variance in the other variable)” — r = +0.8 squares to 0.64, so 64% of the variance is explained (36% is not). SECOND, the causal claim overreaches the statistic: the block's own closing sentence, “Correlation does not necessarily imply causation.” — a confounder (overall health-consciousness driving both exercise and HDL) or reverse/complex causation fits the same tight cloud; establishing “exercise raises HDL” requires an interventional design, not an r value.",
        },
        {
          label: "B",
          text:
            "Both claims are correct: r = +0.8 means 80% of the variance is explained and the tight line proves causation",
          why:
            "TEMPTING but doubly wrong — it commits the r-vs-r² confusion (the explained-variance figure is r² = 0.64, not r = 0.8) AND the causation leap the printed verdict forbids. The strength of the correlation (the closer the absolute value of r is to 1, the stronger the linear correlation) says nothing about which of the rival causal stories produced the line.",
        },
        {
          label: "C",
          text:
            "r = +0.8 is a weak positive correlation, so no variance claim can be made",
          why:
            "WRONG on strength — |r| = 0.8 is close to 1, which by the printed rule (“the closer the absolute value of r is to 1, the stronger the linear correlation between the 2 variables”) makes this a STRONG correlation; the descriptor “weak” belongs to values like the printed +0.4 panel. The variance claim CAN be made — it is just 0.64, not 0.8.",
        },
        {
          label: "D",
          text:
            "The coefficient of determination is −0.64, indicating a strong negative shared variance",
          why:
            "WRONG on the arithmetic and the range — squaring kills the sign (r² is a proportion between 0 and 1 and cannot be negative), and the sign of r (+, from the uphill cloud where both variables rise together) describes the correlation's direction, not the variance share. There is nothing negative anywhere in this stem.",
        },
        {
          label: "E",
          text:
            "A Pearson r cannot be computed for this study because exercise minutes and HDL are different kinds of variables",
          why:
            "WRONG on the tool — the Pearson correlation coefficient is precisely “a measure of the linear correlation between two variables,” both of them here continuous and quantitatively measured (minutes, mg/dL); nothing about mixing “kinds” of continuous variables disqualifies r. The resident's statistic was the right choice — only its interpretation went wrong.",
        },
      ],
      reasoning:
        "The question bundles the block's two exam-critical distinctions. CLAIM 1 (the variance figure): the phrase “explains … % of the variance” is the coefficient of determination's territory — square the correlation: r = +0.8 → r² = 0.64 → 64% of the variance in one variable is explained by variance in the other, so “80%” is the classic r-passed-off-as-r² error. CLAIM 2 (the causal leap): even a strong, correctly-computed correlation remains a description of association — the block's own final sentence, “Correlation does not necessarily imply causation.,” is the rule the resident broke; confounding (health-conscious subjects both exercising more and having higher HDL), reverse or complex causation, and chance all generate the same ascending cloud, and only an interventional study design could support prescribing exercise AS an HDL intervention. Option B commits both errors; C misreads strength (|r| = 0.8 is strong by the printed rule); D invents a negative proportion (r² lives in 0–1); E doubts a tool that fits the data perfectly.",
    },
  },
  mnemonics: [
    {
      code: "SIGN IS THE SLOPE, SIZE IS THE SNUGNESS",
      meaning:
        "A KYP ORIGINAL — the two independent dials of r: the SIGN is the slope of the dot cloud (positive r value → positive correlation, as one variable ↑, the other variable ↑; negative r value → negative correlation, as one variable ↑, the other ↓) and the SIZE (absolute value) is the snugness of the cloud around its line (the closer |r| is to 1, the stronger the linear correlation between the 2 variables).",
      memorizes:
        "That direction and strength are SEPARATE readings of r — sign never adds strength, |r| never sets direction",
      whenToUse:
        "Any r-interpretation or scatter-matching question; especially the ranking trap (is −0.8 or +0.4 stronger? — compare absolute values: −0.8 is) and the five-panel gallery's calibration ladder",
      clinical:
        "Age vs GFR (negative sign, slope of decline = strength) and pack-years vs FEV₁ (positive sign) are read through the same two dials (KYP examples — the page prints none of its own).",
    },
    {
      code: "SQUARE THE r, PRICE THE VARIANCE",
      meaning:
        "A KYP ORIGINAL — the coefficient of determination move: r² is the proportion of variance in one variable that can be explained by variance in the other variable (variance itself = how much the measured values differ from the average value in a data set). Square the number, read it as a percentage: ±0.8 → 0.64 → 64%; ±0.4 → 0.16 → 16%.",
      memorizes:
        "The r → r² → “proportion of variance explained” chain, and the worked values 0.64 and 0.16",
      whenToUse:
        "Any stem asking “what proportion of the variance…” or offering both 0.8 and 0.64 as options; also the reverse (given r² = 0.49, the correlation is ±0.7, sign from the scatter's slope)",
      clinical:
        "Journal-club reality check: an r = 0.7 biomarker association explains less than half the variance (0.49) — “strong correlate” language should be priced in r² (KYP application).",
    },
    {
      code: "ZERO MEANS NO LINE, NOT NO LINK",
      meaning:
        "A KYP ORIGINAL — r = 0 is the printed “No correlation” panel: the dot cloud has lost its straight line. But r measures the LINEAR correlation (the printed definition says “linear” twice in one sentence), so a curved relationship — even a perfect U — can still yield r = 0.",
      memorizes:
        "The scope of r = 0: no linear trend, not no relationship of any kind",
      whenToUse:
        "Any question pairing r = 0 with a described curve, or asking what r = 0 excludes; the printed caption “No correlation” is shorthand for “no LINEAR correlation”",
      clinical:
        "Threshold phenomena (a drug's effect appearing only above a toxicity threshold) can curve through a scatter with r ≈ 0 — the line test is not the only test (KYP context).",
    },
    {
      code: "CORRELATION DESCRIBES, DESIGN CONCLUDES",
      meaning:
        "A KYP ORIGINAL operationalizing the page's own printed verdict (“Correlation does not necessarily imply causation.” — First Aid's sentence, carried verbatim and attributed): r and r² DESCRIBE association; the causal conclusion belongs to the study-design layer — randomization, temporality, comparison groups. Three rivals can wear the same tight line: a CONFOUNDER driving both variables, REVERSE direction, and CHANCE.",
      memorizes:
        "The division of labor between the statistic (describes) and the design (concludes), plus the three rival explanations of a strong r",
      whenToUse:
        "Any stem that follows a strong correlation with “therefore … causes …” — the causal option is the trap; look for the confounder or the design-based alternative",
      clinical:
        "Ice cream sales and drownings (summer heat confounds both) is the classic classroom pair; clinically, adherence and outcome correlations carry the same confounding risk (KYP examples).",
    },
  ],
  rapidReview: {
    s30: [
      "Pearson correlation coefficient — a measure of the LINEAR correlation between two variables; r is always between −1 and +1",
      "Strength — the closer the absolute value of r is to 1, the stronger the linear correlation between the 2 variables (|−0.8| > |+0.4|: sign ≠ strength)",
      "Positive r value → positive correlation (as one variable ↑, the other variable ↑); Negative r value → negative correlation (as one variable ↑, the other ↓)",
      "Variance — how much the measured values differ from the average value in a data set",
      "Coefficient of determination = r² — proportion of variance in one variable that can be explained by variance in the other variable (r = 0.8 → 64%; r = 0.4 → 16%)",
      "The five printed panels, left to right: r = –0.8 Strong negative · r = –0.4 Weak negative · r = 0 No correlation · r = +0.4 Weak positive · r = +0.8 Strong positive",
      "“Correlation does not necessarily imply causation.” — the block's own closing sentence; confounding, reverse direction, and chance all produce tight lines",
    ],
    m3: [
      "SIGN IS THE SLOPE, SIZE IS THE SNUGNESS — two dials of r (KYP)",
      "SQUARE THE r, PRICE THE VARIANCE — r² = proportion of variance explained (KYP)",
      "ZERO MEANS NO LINE, NOT NO LINK — r = 0 kills the line, not the curve (KYP)",
      "CORRELATION DESCRIBES, DESIGN CONCLUDES — the printed verdict, operationalized (KYP)",
    ],
    m10: [
      "The square asymmetry: strength 0.8 vs 0.4 is 2× in r but 4× in r² (0.64 vs 0.16) — weak correlations explain embarrassingly little variance",
      "The gallery's geometry is the calibration: only the two STRONG panels (±0.8) carry the print's faint gray fit-line arrow; the r = 0 panel is a shapeless cloud — direction from slope, strength from tightness",
      "r = 0 excludes linear association only — the printed definition says “linear” twice in one sentence; a perfect U-shaped arc can have r = 0 (KYP caveat)",
      "This block is the LAST of the Epidemiology and Biostatistics subsection — the ribbon banner “▶ PUBLIC HEALTH SCIENCES—ETHICS” prints directly below the gallery and opens the Ethics half of the chapter (Core ethical principles onward, a separate topic)",
    ],
  },
  recall: [
    {
      q: "What does the Pearson correlation coefficient measure, and what is its range?",
      a: "A measure of the linear correlation between two variables; r is always between −1 and +1.",
    },
    {
      q: "What makes a linear correlation STRONG?",
      a: "The closer the absolute value of r is to 1, the stronger the linear correlation between the 2 variables — compare |r|, never the signed value.",
    },
    {
      q: "Positive r value means what? Negative r value means what?",
      a: "Positive r value → positive correlation (as one variable ↑, the other variable ↑). Negative r value → negative correlation (as one variable ↑, the other ↓).",
    },
    {
      q: "How does the page define variance?",
      a: "Variance is how much the measured values differ from the average value in a data set.",
    },
    {
      q: "What is the coefficient of determination, and what is it for r = ±0.8?",
      a: "Coefficient of determination = r² — the proportion of variance in one variable that can be explained by variance in the other variable; r = ±0.8 → r² = 0.64 → 64% of the variance explained.",
    },
    {
      q: "Name the five printed scatter panels in order with their captions.",
      a: "r = –0.8 — Strong negative correlation; r = –0.4 — Weak negative correlation; r = 0 — No correlation; r = +0.4 — Weak positive correlation; r = +0.8 — Strong positive correlation (printed left to right, bbox- and VLM-pinned; the raw text layer extracts the captions jumbled).",
    },
    {
      q: "A stem reports r = −0.9 between variable X and variable Y and concludes X causes Y. What printed sentence refutes the conclusion, and what three rivals explain the association?",
      a: "“Correlation does not necessarily imply causation.” — the block's own closing sentence. Rivals (KYP): a confounder driving both variables, reverse direction (Y driving X), and chance.",
    },
    {
      q: "What prints immediately below the scatter gallery on book 268, and why does this note stop there?",
      a: "A thin block-ending rule, then the ribbon banner “▶ PUBLIC HEALTH SCIENCES—ETHICS” and the “Core ethical principles” block — the pinned split boundary: everything below belongs to core-ethical-principles (produced in parallel); no quote in this note crosses it.",
    },
  ],
  related: [
    {
      title: "Statistical tests — choosing the test for the question",
      note:
        "The correlation coefficient is the descriptive sibling of the inferential tests: t-test for 2 means, ANOVA for ≥3 means, chi-square for categorical proportions — r describes the bivariate numerical association those tests exist to compare. The block sits one page after the test-selection table (book 267 lower), completing the numerical-methods ladder.",
      topicId: "statistical-tests",
    },
    {
      title: "Statistical distributions — center, spread, and the home of variance",
      note:
        "This page's inline variance definition (“how much the measured values differ from the average value in a data set”) is the distributions page's spread concept in one sentence — r is built on how two variables' deviations from their averages co-travel, and r² prices that shared spread as a proportion.",
      topicId: "statistical-distributions",
    },
    {
      title: "ROC curves, precision, and accuracy — the other plot the exam makes you read",
      note:
        "Two curve-reading skills close the subsection: the ROC curve trades sensitivity against specificity (a diagnostic-plot skill), while the scatter gallery trades direction against tightness (an association-plot skill) — both are “read the geometry, extract the number” questions, and both are pure-vector figures redrawn as KYP art.",
      topicId: "roc-precision-accuracy",
    },
    {
      title: "Incidence vs prevalence — the measure-family map",
      note:
        "The chapter's measures form one map: prevalence and incidence quantify disease in populations, OR and RR quantify exposure–disease association by design, and r quantifies variable–variable association — the last measure of the Epidemiology and Biostatistics subsection before the chapter turns to Ethics.",
      topicId: "incidence-prevalence",
    },
  ],
  crossLinks: [
    {
      subject: "Biostatistics — variance, standard deviation, and the normal distribution",
      connection:
        "The variance defined inline on this page (“how much the measured values differ from the average value in a data set”) is the same quantity the distributions material spreads into SD and standard error — r converts two variables' co-spread into one number, and r² reports it as a proportion of variance, which is why the coefficient of determination speaks variance's language.",
    },
    {
      subject: "Nephrology — aging and renal function",
      connection:
        "The classic clinical negative correlation: GFR declines with age (as one variable ↑, the other ↓) — every “which scatter shows a strong negative correlation?” question has this physiologic decline as its dressed-up twin (KYP example; the page itself prints no clinical case).",
    },
    {
      subject: "Cardiovascular — exercise, lipids, and blood pressure",
      connection:
        "The classic clinical positive correlations: physical activity vs HDL, BMI vs systolic blood pressure — the biomarkers that climb together with exposure, the clinical twins of the printed +0.4/+0.8 panels (KYP examples; the page itself prints no clinical case).",
    },
    {
      subject: "Research methods — confounding, temporality, and causal inference",
      connection:
        "The verdict “Correlation does not necessarily imply causation.” is the doorway to causal-inference methodology: confounders that drive both variables, reverse causation, and chance all masquerade as tight lines — temporality, comparison groups, and randomization (the observational-designs and clinical-trial pages of this chapter) are what convert association into causal claims.",
    },
  ],
};
