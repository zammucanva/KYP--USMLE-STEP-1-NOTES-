import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 3 (pubh14). Source: FULL pdf page 288 / book 266
// (Part 1), the third page of the EPIDEMIOLOGY AND BIOSTATISTICS subsection. The
// topic owns the WHOLE page, which carries THREE blocks in printed order:
// (1) "Outcomes of statistical hypothesis testing" — a "Correct result" label with
// two definition sentences at the LEFT of the block, and at the RIGHT the
// STUDY-VS-REALITY 2×2 GRID (pure vector): a spanning "Reality" column header
// over two columns — H1 (LEFT) and H0 (RIGHT) — and two row headers at the left
// — "Study rejects H0" (TOP) and "Study does not reject H0" (BOTTOM). Cells:
// reject × H1 = "Power" stacked over "(1 – β)" [BLUE-SHADED]; reject × H0 = "α"
// stacked over "Type I error"; not-reject × H1 = "β" stacked over "Type II
// error"; not-reject × H0 = EMPTY of text [BLUE-SHADED]. The legend "Blue
// shading = correct result." prints below the grid's bottom-left edge.
// (2) "Testing errors" — a THREE-COLUMN block (left label column / main text
// column / right column): row "Type I error (α)" — definition, the α-probability
// sentence with the P < α rejection logic, "Statistical significance ≠ clinical
// significance."; right column: "Also called false-positive error.", the 1st
// cry-wolf line, "You can never “prove” H1, but you can reject the H0 as being
// very unlikely." Row "Type II error (β)" — definition, the β/power sentence,
// "↑ power and ↓ β by:" with FOUR square-bullet levers (↑ sample size / ↑
// expected effect size / ↑ precision of measurement / ↑ α level (↑ statistical
// significance level)); right column: "Also called false-negative error.", the
// 2nd cry-wolf line, "If you ↑ sample size, you ↑ power. There is power in
// numbers.", "Generally, when type I error increases, type II error decreases."
// (3) "Statistical vs clinical significance" — the label-column title wraps
// across two lines; body = three definition sentences including the printed
// 1 mg/dL blood-sugar example. CENSUS (pdfimages): ZERO raster images on the
// page — pure text, one vector grid, the indd footer slug. VLM AVAILABLE this
// session (glm-4.6v, TWO passes, staging-pubh14/vlm-census.txt): pass 1 = full
// page at 120dpi; pass 2 = focused 200dpi crops of the grid + the Testing-errors
// block. Confirmed: the grid geometry exactly as above, with the two BLUE cells
// = the Power cell (reject × H1) and the EMPTY not-reject × H0 cell ("the
// diagonal of correct results"); the bottom-right cell carries NO text; the
// cry-wolf pair prints in ROMAN (not italic, not boxed) with RED lead numerals
// ("1st"/"2nd"), "power in numbers" in RED, and the Roman numerals I/II in the
// two row labels in RED (the rest of the labels dark blue/black); the four
// levers print with ▘ square bullets and ↑ arrows; NO margin mnemonics, NO
// asterisk footnotes, NO images. ADJUDICATIONS (documented in the manifest
// too): (A) the grid's column order — the task brief anticipated "columns
// Reality: H1 / Reality: H0" and the print agrees, but the FIRST VLM pass
// mis-read the column headers (claimed H0 left / H1 right, contradicting its
// own cell description and its own blue-shading claim); pinned by pdftotext
// -bbox coordinates (H1 x≈485 LEFT of H0 x≈535; "Power" x≈479 under H1; "α" x≈536
// under H0) + the 200dpi focused re-pass (H1 left, H0 right; blue = Power cell +
// empty cell) — bbox + focused pass + logic all agree (rejecting H0 when H0 is
// TRUE is a Type I error, not power); (B) the raw text layer extracts the grid's
// labels INTERLEAVED and OUT OF READING ORDER ("Reality / Study rejects H0 /
// Study does not reject H0 / H1 / H0 / Power / α / ( 1 – β) / Type I error / β /
// Type II error / Blue shading = correct result.") — the gen script's evidence
// range quotes the labels in that raw order and the cell assignment is pinned by
// bbox + the two VLM passes; (C) the "(1 – β)" cell prints with thin spaces
// around the en-dash, which the raw layer widens to "( 1 – β)" — the en-dash
// (–, U+2013) is used as the minus throughout (carried as printed; the note
// carries "(1 – β)"); (D) the four-lever bullet list is text-layer-pinned
// (exactly four bullets, no parentheticals); the focused VLM crop cut the
// bullets off and the model explicitly disclaimed reading them — text layer
// governs. PRINTED-TEXT QUIRKS carried + documented: (1) "SEC TION II"
// header-space extraction artifact (known, carried as-is); (2) small-caps
// artifact "EPIDEmIOLOGY AND BIOSTATISTICS" in the banner — the ▶ banner prints
// ONCE on this page (in the running-header band), NOT twice (the twice-printing
// was the subsection-opener quirk of book 256); (3) C1 control bytes (\x8f/\x90)
// around the ↑↓ arrows and \x83 before each ▘ square bullet — stripped by the
// gen script's normalizer, documented here; (4) the indd footer slug
// "FAS1_2026_06-PubHealth.indd 266" extracts MID-BLOCK in the raw layer
// (between the "Statistical vs clinical significance" title wrap and the block's
// body) although it prints at the page foot below a rule — a reading-order
// artifact, quoted in raw order by the gen script; (5) the bottom block's title
// wraps across two lines ("Statistical vs clinical" / "significance") in its
// left label column; (6) "eg," prints without periods (as extracted). PROVENANCE
// SPLIT: verbatim = the Correct-result sentences, every grid label, both Testing
// errors rows (definitions, α/β probability sentences, the P < α logic, the ≠
// line, the four levers, the "Also called" lines, the see-saw sentence), and the
// bottom block's three sentences; FA-own = the cry-wolf pair and "There is power
// in numbers." (First Aid's OWN mnemonic lines, printed with red lead
// numerals/red phrase — carried VERBATIM and ATTRIBUTED everywhere they appear
// in this note), plus the red I/II label numerals; KYP-original = the
// reality-×-decision grammar, the "two ways to be right, two ways to be wrong"
// reading, the courtroom frame for the two errors, the four-lever lever panel
// arrangement, the exam layer, and the two KYP mnemonics ("α ACCUSES THE
// INNOCENT NULL; β ACQUITS THE TRUE EFFECT" and "n–E–P–α") — every teaching
// generalization beyond the printed page is flagged as KYP context. DrugCards:
// none — the page prints statistical logic, not drugs (folded by absence in the
// manifest). BOUNDARIES: the previous page (pdf 287 / book 265) closes the
// Statistical hypothesis testing OPENER (H0, H1, P value definitions — owned by
// statistical-distributions); the next page (pdf 289 / book 267) opens
// Confidence interval — owned by confidence-intervals-meta-analysis.

export const hypothesisTestingErrors: KypUsMLENote = {
  id: "hypothesis-testing-errors",
  title: "Hypothesis Testing Errors: Type I, Type II, and Power",
  subtitle:
    "Every hypothesis test ends in a verdict — the study either rejects H0 or does not — and reality sits silently in one of two states: there is a real effect (H1) or there is none (H0). Cross the verdict with reality and exactly four outcomes exist, and this page prints them as one 2×2 grid: rejecting H0 when an effect really exists is Power (1 – β), the blue-shaded cell the whole enterprise is trying to reach; rejecting H0 when nothing is there is the Type I error (α), the false positive — First Aid's own hook, \"1st time boy cries wolf, the town believes there is a wolf, but there is not.\" Failing to reject H0 when an effect really exists is the Type II error (β), the false negative — \"2nd time boy cries wolf, the town believes there is no wolf, but there is one.\" And failing to reject when nothing is there is simply correct, the grid's second blue cell. α is set before the test (usually 0.05): if P < α, then assuming H0 is true, the probability of obtaining the test results would be less than the probability of making a type I error — so H0 is rejected as false. Power can be bought: ↑ sample size, ↑ expected effect size, ↑ precision of measurement, or ↑ the α level itself, because \"If you ↑ sample size, you ↑ power. There is power in numbers.\" The page then separates two kinds of importance: statistical significance is about chance (high statistical significance = low probability the results are due to chance), while clinical significance is about patients — a trial can prove a 1 mg/dL blood-sugar difference is real yet matter to no one.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Epidemiology and Biostatistics",
  pilotCategory:
    "Public Health Sciences — the hypothesis-testing error taxonomy: the study-vs-reality 2×2 grid (Power = 1 – β and the unlabeled blue correct cell on the diagonal; Type I error α and Type II error β off it), the P < α rejection logic, the four printed power levers with First Aid's \"There is power in numbers.\", and the statistical-vs-clinical-significance distinction with the 1 mg/dL blood-sugar example — the cry-wolf pair carried verbatim and attributed.",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 266–266 (Epidemiology and Biostatistics: Outcomes of statistical hypothesis testing; Testing errors; Statistical vs clinical significance)",
  tags: [
    "type I error",
    "type II error",
    "alpha",
    "beta",
    "statistical power",
    "power (1 – β)",
    "null hypothesis",
    "alternative hypothesis",
    "hypothesis testing",
    "P value",
    "false-positive error",
    "false-negative error",
    "boy who cried wolf",
    "sample size",
    "effect size",
    "precision of measurement",
    "statistical significance",
    "clinical significance",
    "1 mg/dL blood sugar",
    "biostatistics",
    "epidemiology",
  ],
  core: {
    what:
      "One printed page, carried whole. BLOCK 1 — “Outcomes of statistical hypothesis testing”: the Correct result definitions (“Stating that there is an effect or difference when one exists (H0 rejected in favor of H1).”; “Stating that there is no effect or difference when none exists (H0 not rejected).”) beside the STUDY-VS-REALITY GRID — rows “Study rejects H0” / “Study does not reject H0”, columns under the spanning header “Reality”: H1 (left) / H0 (right); the four cells: Power (1 – β) [blue], α Type I error, β Type II error, and an EMPTY blue cell; legend “Blue shading = correct result.” BLOCK 2 — “Testing errors”: TYPE I ERROR (α) — “Stating that there is an effect or difference when none exists (H0 incorrectly rejected in favor of H1).”; “α is the probability of making a type I error (usually 0.05 is chosen). If P < α, then assuming H0 is true, the probability of obtaining the test results would be less than the probability of making a type I error. H0 is therefore rejected as false.”; “Statistical significance ≠ clinical significance.”; “Also called false-positive error.”; “1st time boy cries wolf, the town believes there is a wolf, but there is not (false positive).”; “You can never “prove” H1, but you can reject the H0 as being very unlikely.” TYPE II ERROR (β) — “Stating that there is not an effect or difference when one exists (H0 is not rejected when it is in fact false).”; “β is the probability of making a type II error. β is related to statistical power (1 – β), which is the probability of rejecting H0 when it is false.”; “↑ power and ↓ β by:” — ↑ sample size, ↑ expected effect size, ↑ precision of measurement, ↑ α level (↑ statistical significance level); “Also called false-negative error.”; “2nd time boy cries wolf, the town believes there is no wolf, but there is one.”; “If you ↑ sample size, you ↑ power. There is power in numbers.”; “Generally, when type I error increases, type II error decreases.” BLOCK 3 — “Statistical vs clinical significance”: “Statistical significance—defined by the likelihood of study results being due to chance. If there is a high statistical significance, then there is a low probability that the results are due to chance.”; “Clinical significance—measure of effect on treatment outcomes. An intervention with high clinical significance is likely to have a large impact on patient outcomes/measures.”; and the 1 mg/dL example — “Some studies have a very high statistical significance, but the proposed intervention may have limited clinical impact/significance, eg, a study might show a statistical significance of lowered blood sugar levels by 1 mg/dL correlated with better outcomes, but this may not be clinically as important.”",
    why:
      "This page is the hinge of the entire biostatistics sequence: the preceding page defined the null hypothesis (H0, zero difference between groups), the alternative (H1, at least one difference or association), and the P value (the probability of results at least this extreme assuming H0 is correct) — and this page answers the only question those definitions leave open: what can go WRONG when a study issues its verdict? The answer is a 2×2 cross of the study's decision (reject / do not reject H0) with reality (H1 true / H0 true), and the four cells are the vocabulary for every \"what error could have occurred?\" question on the exam. Two cells are ways to be RIGHT — power (rejecting a false H0) and the silent correct non-rejection — and two are ways to be WRONG: the Type I error (α), a false positive that rejects an innocent null hypothesis, and the Type II error (β), a false negative that lets a real effect slip away. The page also carries the machinery that controls the two errors: α is chosen in advance (usually 0.05) and the P value is compared against it, while β is governed by power (1 – β), which rises with sample size, expected effect size, precision of measurement, and the α level itself — with the printed see-saw (\"Generally, when type I error increases, type II error decreases.\") warning that the last lever trades one error for the other. Finally, the page separates statistical significance (a statement about chance) from clinical significance (a statement about patients), because the exam's favorite twist is a wildly statistically significant result — a 1 mg/dL blood-sugar lowering — that changes nothing at the bedside.",
    keyIdea:
      "Read every hypothesis-testing question off the grid. MOVE 1 — WHAT DID THE STUDY DO? Reject H0 (\"there is an effect/difference\") or not reject H0 (\"no effect/difference found\"). MOVE 2 — WHAT IS REALITY? H1 (an effect truly exists) or H0 (none exists). MOVE 3 — CROSS THEM: reject × H1 = POWER (1 – β), a correct result, blue; reject × H0 = TYPE I ERROR (α), the false positive — \"1st time boy cries wolf\"; not-reject × H1 = TYPE II ERROR (β), the false negative — \"2nd time boy cries wolf\"; not-reject × H0 = the second correct result, blue. MOVE 4 — ADJUST THE DIALS: α is the pre-set probability of a Type I error (usually 0.05) — reject H0 when P < α, because assuming H0 is true, results this extreme would be less probable than the Type I error you pre-accepted; β is the probability of a Type II error, and power = 1 – β = the probability of rejecting H0 when it is false — raise it by ↑ sample size, ↑ expected effect size, ↑ precision of measurement, or ↑ α (\"There is power in numbers.\", and the see-saw: ↑ type I ↓ type II at fixed n). MOVE 5 — SEPARATE THE TWO SIGNIFICANCES: statistical significance says the result is unlikely to be chance; clinical significance says it matters for patients — \"Statistical significance ≠ clinical significance.\"",
  },
  mechanisms: [
    {
      id: "reality-by-decision",
      title:
        "Reality × decision: how one 2×2 cross generates all four outcomes of every hypothesis test",
      context:
        "The printed study-vs-reality grid (book 266): the study's verdict crossed with the truth H0 was actually true or false",
      flow: {
        nodes: [
          {
            id: "two-realities",
            label: "THE TWO REALITIES — H1 true (an effect exists) or H0 true (none exists)",
            sublabel:
              "Input — reality is fixed and unknown to the study: either “there is an effect or difference” (H1) or there is none (H0). The grid's spanning column header is “Reality”, split H1 (left column) / H0 (right column). Everything a study does is an attempt to guess which column it is living in.",
            variant: "input",
          },
          {
            id: "decision",
            label: "THE STUDY'S VERDICT — reject H0, or do not reject H0",
            sublabel:
              "Process — the study's two row headers: “Study rejects H0” / “Study does not reject H0”. The verdict is driven by the printed rule: α is chosen (usually 0.05) and “If P < α, then assuming H0 is true, the probability of obtaining the test results would be less than the probability of making a type I error. H0 is therefore rejected as false.” A study never accepts H0 — it only fails to reject it (KYP framing of the printed asymmetry: “You can never “prove” H1, but you can reject the H0 as being very unlikely.”).",
            variant: "process",
          },
          {
            id: "power-cell",
            label: "REJECT × H1 = POWER (1 – β) — the blue cell every study wants",
            sublabel:
              "Process — the study rejects H0 and H0 was genuinely false: “Stating that there is an effect or difference when one exists (H0 rejected in favor of H1).” Power = 1 – β = “the probability of rejecting H0 when it is false.” This cell and the empty bottom-right cell are the blue-shaded ones — “Blue shading = correct result.”",
            variant: "process",
          },
          {
            id: "alpha-cell",
            label: "REJECT × H0 = TYPE I ERROR (α) — the false positive",
            sublabel:
              "Process — the study rejects an H0 that was true: “Stating that there is an effect or difference when none exists (H0 incorrectly rejected in favor of H1).” “Also called false-positive error.” First Aid's own hook: “1st time boy cries wolf, the town believes there is a wolf, but there is not (false positive).” Its probability is α, chosen in advance (usually 0.05).",
            variant: "process",
          },
          {
            id: "beta-cell",
            label: "NOT REJECT × H1 = TYPE II ERROR (β) — the false negative",
            sublabel:
              "Process — the study fails to reject an H0 that was false: “Stating that there is not an effect or difference when one exists (H0 is not rejected when it is in fact false).” “Also called false-negative error.” First Aid's own hook: “2nd time boy cries wolf, the town believes there is no wolf, but there is one.” Its probability is β, the complement of power.",
            variant: "process",
          },
          {
            id: "correct-cell",
            label: "NOT REJECT × H0 = THE SILENT CORRECT RESULT — the grid's empty blue cell",
            sublabel:
              "Process — the study does not reject H0 and none exists: “Stating that there is no effect or difference when none exists (H0 not rejected).” The printed grid leaves this cell EMPTY of text — only its blue shading names it, via the legend “Blue shading = correct result.” (KYP note: the two blue cells are exactly the two “Correct result” sentences printed beside the grid.)",
            variant: "process",
          },
          {
            id: "grid-out",
            label: "THE RULE — two ways to be right, two ways to be wrong",
            sublabel:
              "Output — every hypothesis test lands in exactly one cell: POWER or the silent correct cell (blue), or one of the two errors. The errors are named from the study's claim, not reality's: claiming an effect that is not there = Type I (false POSITIVE, α); claiming no effect when there is one = Type II (false NEGATIVE, β). And the claim can never be proof: “You can never “prove” H1, but you can reject the H0 as being very unlikely.”",
            variant: "output",
          },
        ],
        edges: [
          { from: "two-realities", to: "decision", label: "reality is hidden; the study must guess →" },
          { from: "decision", to: "power-cell", label: "reject × H1 →" },
          { from: "decision", to: "alpha-cell", label: "reject × H0 →" },
          { from: "decision", to: "beta-cell", label: "not reject × H1 →" },
          { from: "decision", to: "correct-cell", label: "not reject × H0 →" },
          { from: "power-cell", to: "grid-out", label: "power (1 – β) — blue" },
          { from: "alpha-cell", to: "grid-out", label: "α — false positive" },
          { from: "beta-cell", to: "grid-out", label: "β — false negative" },
          { from: "correct-cell", to: "grid-out", label: "correct — blue, unlabeled" },
        ],
      },
    },
    {
      id: "power-levers",
      title:
        "Power and its four levers: what (1 – β) buys, how to raise it, and the α–β see-saw",
      context:
        "The printed Type II error row (book 266): β, statistical power (1 – β), and the “↑ power and ↓ β by:” lever list",
      flow: {
        nodes: [
          {
            id: "power-def",
            label: "POWER = 1 – β — the probability of rejecting H0 when it is false",
            sublabel:
              "Input — “β is the probability of making a type II error. β is related to statistical power (1 – β), which is the probability of rejecting H0 when it is false.” Power is the grid's top-left cell as a probability: the chance the study actually lands on the truth when an effect exists. Power is a DESIGN quantity — chosen before the data exist — which is why the page prints a lever list, not a formula (KYP framing).",
            variant: "input",
          },
          {
            id: "lever-n",
            label: "LEVER 1 — ↑ SAMPLE SIZE",
            sublabel:
              "Process — the printed first lever, and First Aid's own mnemonic seals it: “If you ↑ sample size, you ↑ power. There is power in numbers.” More subjects shrink the noise around every estimate, so a true effect is harder to miss — the classic fix for an underpowered pilot (KYP context: this is the only lever that lowers β without touching α).",
            variant: "process",
          },
          {
            id: "lever-effect",
            label: "LEVER 2 — ↑ EXPECTED EFFECT SIZE",
            sublabel:
              "Process — the printed second lever: a bigger true difference is easier to detect than a small one. An investigator chooses the exposure, dose, population, or outcome where the expected effect is largest — the effect itself is reality's, the EXPECTATION is designable (KYP context).",
            variant: "process",
          },
          {
            id: "lever-precision",
            label: "LEVER 3 — ↑ PRECISION OF MEASUREMENT",
            sublabel:
              "Process — the printed third lever: tighter measurement (better instruments, standardized assays, repeated measures) strips random error out of the data, so the signal stands further above the noise and β falls (KYP context for the mechanism).",
            variant: "process",
          },
          {
            id: "lever-alpha",
            label: "LEVER 4 — ↑ α LEVEL (↑ STATISTICAL SIGNIFICANCE LEVEL)",
            sublabel:
              "Process — the printed fourth lever: raising α (eg, 0.05 → 0.10) makes rejection easier, so fewer true effects are missed — β falls. But this lever buys power with Type I risk, exactly as the printed see-saw warns: “Generally, when type I error increases, type II error decreases.” (at fixed sample size — KYP qualifier).",
            variant: "process",
          },
          {
            id: "seesaw-out",
            label: "THE SEE-SAW AND THE OUT — levers 1–3 raise power freely; lever 4 trades errors",
            sublabel:
              "Output — ↓ β by ↑ sample size, ↑ expected effect size, ↑ precision of measurement, or ↑ α level. The first three raise power without spending Type I safety; the fourth moves along the printed see-saw (“when type I error increases, type II error decreases”), which is why “There is power in numbers.” is the exam's favorite lever: it is the one that always works and costs nothing.",
            variant: "output",
          },
        ],
        edges: [
          { from: "power-def", to: "lever-n", label: "↑ power and ↓ β by: →" },
          { from: "power-def", to: "lever-effect", label: "↑ power and ↓ β by: →" },
          { from: "power-def", to: "lever-precision", label: "↑ power and ↓ β by: →" },
          { from: "power-def", to: "lever-alpha", label: "↑ power and ↓ β by: →" },
          { from: "lever-n", to: "seesaw-out", label: "free power — “power in numbers”" },
          { from: "lever-effect", to: "seesaw-out", label: "free power" },
          { from: "lever-precision", to: "seesaw-out", label: "free power" },
          { from: "lever-alpha", to: "seesaw-out", label: "power bought with α — the see-saw" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "hypothesis-errors-map",
      title:
        "The study-vs-reality grid, the two error cards, the power levers, and the significance strip (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 266's three blocks. TOP — the study-vs-reality 2×2 grid exactly as printed: rows “Study rejects H0” / “Study does not reject H0”, columns under the spanning “Reality” header — H1 (left) / H0 (right); the four cells Power (1 – β), Type I error (α), β Type II error, and the EMPTY bottom-right cell, with the two correct cells blue-shaded and the printed legend “Blue shading = correct result.” beside the two printed Correct-result sentences. MIDDLE — the two error cards (Type I and Type II) carrying the printed definitions, the α and β probability sentences, the “Also called” lines, and First Aid's cry-wolf pair attributed. LOWER — the power panel: power = 1 – β with the four printed levers (↑ sample size, ↑ expected effect size, ↑ precision of measurement, ↑ α level), the printed see-saw, and “There is power in numbers.” attributed. BOTTOM — the statistical-vs-clinical strip with the 1 mg/dL blood-sugar example.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 288 — the page's assets are pure text and one vector grid (VLM-read at 120dpi + a 200dpi focused crop pass, staging-pubh14/vlm-census.txt). The visual is an ORIGINAL KYP REDRAW of the grid (KYP geometry, every printed label preserved, the two correct cells shaded with the legend carried verbatim) + ORIGINAL KYP ADAPTATIONS of the two text blocks (cards, lever chips, strip — KYP's layout, the print's words). ADJUDICATION, drawn exactly as pinned: the columns are H1 (LEFT) and H0 (RIGHT) under the spanning “Reality” header; the blue cells are the Power cell (reject × H1) and the EMPTY not-reject × H0 cell — the first full-page VLM pass mis-assigned the column headers and was overruled by pdftotext -bbox coordinates, the 200dpi focused re-pass, and the print's own logic (rejecting a true H0 is a Type I error, not power).",
    },
    {
      kind: "table",
      title:
        "Book 266 — the printed study-vs-reality grid, carried verbatim (every printed label, PRINTED geometry)",
      intro:
        "The page's first block: the “Correct result” definitions printed at the left of the grid, and the grid itself — row headers “Study rejects H0” / “Study does not reject H0”, column headers under the spanning “Reality”: H1 (left) / H0 (right). Each cell prints its probability symbol stacked over its name (“Power” over “(1 – β)”; “α” over “Type I error”; “β” over “Type II error”); the fourth cell prints EMPTY of text, named only by its blue shading. The two blue-correct cells are marked [BLUE] as printed (“Blue shading = correct result.”).",
      columns: ["Study verdict (rows) × Reality (columns)", "Reality: H1 — an effect exists", "Reality: H0 — no effect exists"],
      rows: [
        [
          "Study rejects H0",
          "Power (1 – β) — [BLUE] “Stating that there is an effect or difference when one exists (H0 rejected in favor of H1).”",
          "α / Type I error — “Stating that there is an effect or difference when none exists (H0 incorrectly rejected in favor of H1).”",
        ],
        [
          "Study does not reject H0",
          "β / Type II error — “Stating that there is not an effect or difference when one exists (H0 is not rejected when it is in fact false).”",
          "[BLUE] — the cell prints EMPTY of text: “Stating that there is no effect or difference when none exists (H0 not rejected).”",
        ],
      ],
      caption:
        "Verbatim carry, documented: the grid's labels extract INTERLEAVED in the raw text layer (Reality / Study rejects H0 / Study does not reject H0 / H1 / H0 / Power / α / ( 1 – β) / Type I error / β / Type II error / Blue shading = correct result.) — the cell assignment here is pinned by pdftotext -bbox coordinates + two VLM passes (staging-pubh14/vlm-census.txt): H1 is the LEFT column, H0 the RIGHT. The “(1 – β)” cell prints with thin spaces around the en-dash, which the raw layer widens to “( 1 – β)” (en-dash-as-minus, carried as printed). The bottom-right cell carries NO printed label — its blue shading is its whole content, per the printed legend “Blue shading = correct result.”; the two Correct-result sentences printed beside the grid are exactly the two blue cells' descriptions (KYP reading of the print's layout).",
    },
    {
      kind: "list",
      title:
        "The decoder — the four cells and the two error rows, read one by one (KYP's reading of the print)",
      intro:
        "Each printed element compressed to its exam-decision core: the definition, the symbol, the false-positive/false-negative name, and First Aid's own cry-wolf anchor. This is the layer to recall when a stem hands you a verdict and asks what could have gone wrong.",
      items: [
        {
          lead: "POWER (1 – β) — the blue cell the study wants",
          text: "Rejecting H0 when it is false: “the probability of rejecting H0 when it is false.” Blue-shaded in the grid = correct result. Exam handles: “the probability that the study detects a true difference”, “the probability of correctly rejecting a false null hypothesis”, or a power-calculation question — all route to 1 – β, never to α.",
        },
        {
          lead: "TYPE I ERROR (α) — the false positive: claiming an effect that is not there",
          text: "“Stating that there is an effect or difference when none exists (H0 incorrectly rejected in favor of H1).” Also called false-positive error. α is its probability, chosen in advance — usually 0.05. First Aid's own: “1st time boy cries wolf, the town believes there is a wolf, but there is not (false positive).” Consequence logic: if P < α, then assuming H0 is true, the probability of obtaining the test results would be less than the probability of making a type I error — H0 is therefore rejected as false.",
        },
        {
          lead: "TYPE II ERROR (β) — the false negative: missing an effect that is there",
          text: "“Stating that there is not an effect or difference when one exists (H0 is not rejected when it is in fact false).” Also called false-negative error. β is its probability, the complement of power: β + power = 1. First Aid's own: “2nd time boy cries wolf, the town believes there is no wolf, but there is one.” Exam handles: an underpowered trial that “finds nothing” for a treatment that truly works.",
        },
        {
          lead: "THE SILENT CORRECT CELL — not rejecting when nothing is there",
          text: "“Stating that there is no effect or difference when none exists (H0 not rejected).” The grid prints this cell EMPTY, blue-shaded only — the exam rarely names it directly, but it completes the grid: two blue cells on one diagonal (power + correct non-rejection), two error cells on the other (α + β).",
        },
        {
          lead: "THE SEE-SAW — α and β move against each other (at fixed n)",
          text: "Printed in the Type II row: “Generally, when type I error increases, type II error decreases.” Raising α makes rejection easier (fewer missed effects = ↓β) but buys more false positives (↑α); lowering α protects the null hypothesis but buries real effects (↑β). The only printed lever that escapes the see-saw is sample size — and its companions, effect size and precision (KYP framing).",
        },
        {
          lead: "THE ASYMMETRY — you can never “prove” H1",
          text: "Printed in the Type I row: “You can never “prove” H1, but you can reject the H0 as being very unlikely.” Hypothesis testing only ever discredits H0; the alternative is what remains standing, never what is proven — and by the same token a non-significant P value never proves H0 (KYP extension of the printed line).",
        },
      ],
    },
    {
      kind: "steps",
      title: "Answering any error-type or power question in four moves",
      intro:
        "The whole page distilled into an ordered reading path — VERDICT, REALITY, CROSS, DIALS — applicable to any hypothesis-testing stem, printed on book 266 or not.",
      steps: [
        {
          label: "MOVE 1 — WHAT DID THE STUDY CONCLUDE?",
          detail:
            "Reject H0 (“there is an effect or difference”) or do not reject H0 (“no effect or difference”). The stem usually hands you this in one sentence — P < 0.05 with α = 0.05 means H0 was rejected; P = 0.34 means it was not. The conclusion is the ROW of the grid.",
        },
        {
          label: "MOVE 2 — WHAT IS REALITY IN THE STEM?",
          detail:
            "Error questions always leak the truth: “the drug truly works”, “no difference actually exists”, “in truth there is no wolf”. Reality is the COLUMN of the grid — H1 (effect exists) or H0 (none exists). If the stem hides reality, the answer is a probability (α or β or 1 – β), not a realized error.",
        },
        {
          label: "MOVE 3 — CROSS VERDICT × REALITY AND NAME THE CELL",
          detail:
            "Reject × H1 = Power (1 – β), correct. Reject × H0 = Type I error (α), false positive, 1st cry-wolf. Not-reject × H1 = Type II error (β), false negative, 2nd cry-wolf. Not-reject × H0 = the silent blue correct cell. Attach the alias in the same motion: Type I = false-positive error, Type II = false-negative error.",
        },
        {
          label: "MOVE 4 — IF ASKED TO FIX IT, PULL THE RIGHT LEVER",
          detail:
            "“Reduce the risk of missing a true effect” = ↓β = ↑power: ↑ sample size (the free lever — “There is power in numbers.”), ↑ expected effect size, ↑ precision of measurement, or ↑ α level — the last one trading Type I safety on the printed see-saw (“Generally, when type I error increases, type II error decreases.”). “Reduce the risk of a false-positive claim” = ↓α: pre-set a smaller α (eg, 0.01) — and accept the β it costs.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "Type I vs Type II error — the exam's favorite see-saw, in the page's own words",
      intro:
        "The two error rows of the Testing errors block are mirror images: one convicts an innocent null hypothesis, the other acquits a guilty alternative. Every distinguishing feature follows from which mistake is made.",
      columns: [
        "Type I error (α) — the false positive",
        "Type II error (β) — the false negative",
      ],
      rows: [
        {
          label: "The printed definition",
          a: "“Stating that there is an effect or difference when none exists (H0 incorrectly rejected in favor of H1).”",
          b: "“Stating that there is not an effect or difference when one exists (H0 is not rejected when it is in fact false).”",
        },
        {
          label: "Also called",
          a: "“False-positive error.” — a positive claim (an effect!) that is false",
          b: "“False-negative error.” — a negative claim (no effect) that is false",
        },
        {
          label: "First Aid's own cry-wolf anchor",
          a: "“1st time boy cries wolf, the town believes there is a wolf, but there is not (false positive).”",
          b: "“2nd time boy cries wolf, the town believes there is no wolf, but there is one.”",
        },
        {
          label: "Its probability and who sets it",
          a: "α — chosen in advance by the investigator, usually 0.05; it is the rejection threshold the P value is compared against (P < α → reject H0)",
          b: "β — governed by study design; it is the complement of power: “statistical power (1 – β), which is the probability of rejecting H0 when it is false”",
        },
        {
          label: "Where it sits in the grid",
          a: "Study rejects H0 × Reality H0 — the top-right, unshaded cell",
          b: "Study does not reject H0 × Reality H1 — the bottom-left, unshaded cell",
        },
        {
          label: "How to make it less likely",
          a: "Pre-set a smaller α (0.05 → 0.01) — at the printed price: “Generally, when type I error increases, type II error decreases.”",
          b: "“↑ power and ↓ β by:” ↑ sample size, ↑ expected effect size, ↑ precision of measurement, ↑ α level — “There is power in numbers.”",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — four stem shapes and one significance twist",
      body:
        "SHAPE 1 — NAME THE ERROR: the stem reports a verdict plus the truth (“the intervention truly has no effect, but the trial reports a significant benefit”) → cross verdict × reality on the grid → Type I (α) if the study claimed an effect that is not there, Type II (β) if it missed one that is. SHAPE 2 — NAME THE PROBABILITY: options are α, β, 1 – β — “the probability of rejecting H0 when it is false” is POWER (1 – β); “the probability of making a type I error” is α; a realized mistake given the stem's truth is the error NAME, not its probability. SHAPE 3 — FIX THE DESIGN: “how could the investigators have reduced the chance of missing a true effect?” → any of the four printed levers, with ↑ sample size the classic answer (“There is power in numbers.”); watch the distractor “decrease α”, which moves the WRONG way on the see-saw. SHAPE 4 — THE P-VALUE MECHANIC: “the study sets α = 0.05 and obtains P = 0.03 — why reject H0?” → “assuming H0 is true, the probability of obtaining the test results would be less than the probability of making a type I error. H0 is therefore rejected as false.” THE SIGNIFICANCE TWIST: a hugely significant P value for a tiny effect (the printed 1 mg/dL blood-sugar example) → “Statistical significance ≠ clinical significance.” — statistical significance says chance is unlikely; clinical significance says patients benefit.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own mnemonic lines — printed on the page, carried attributed",
      body:
        "The page prints FOUR mnemonic-bearing lines of its own (VLM-confirmed at 120dpi + 200dpi, staging-pubh14/vlm-census.txt — the cry-wolf lead numerals “1st”/“2nd” and the phrase “power in numbers” print in RED) — these are the source's hooks, carried VERBATIM and ATTRIBUTED, not KYP's: (1) “1st time boy cries wolf, the town believes there is a wolf, but there is not (false positive).” — Type I error (α), the false-positive error. (2) “2nd time boy cries wolf, the town believes there is no wolf, but there is one.” — Type II error (β), the false-negative error. (3) “If you ↑ sample size, you ↑ power. There is power in numbers.” — the sample-size lever. (4) “Generally, when type I error increases, type II error decreases.” — the α–β see-saw. The two KYP originals in the Memory section below are marked as such: “α ACCUSES THE INNOCENT NULL; β ACQUITS THE TRUE EFFECT” (the courtroom frame for the two errors) and “n–E–P–α” (the four power levers in printed order).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The page's clinical anchors — two kinds of significance, and why the distinction matters at the bedside",
      intro:
        "The bottom block of the page is the clinical layer: it separates whether a result is likely real from whether it is likely to matter, and it closes with the printed example the exam loves to re-dress.",
      items: [
        {
          lead: "STATISTICAL SIGNIFICANCE — a statement about CHANCE",
          text: "“Statistical significance—defined by the likelihood of study results being due to chance. If there is a high statistical significance, then there is a low probability that the results are due to chance.” A very small P value means the finding is unlikely to be a fluke — nothing more. It says nothing about the SIZE of the effect or its value to a patient.",
        },
        {
          lead: "CLINICAL SIGNIFICANCE — a statement about PATIENTS",
          text: "“Clinical significance—measure of effect on treatment outcomes. An intervention with high clinical significance is likely to have a large impact on patient outcomes/measures.” The question clinical significance answers is the bedside one: will this change what happens to my patient?",
        },
        {
          lead: "THE PRINTED EXAMPLE — a 1 mg/dL blood-sugar lowering that matters to no one",
          text: "“Some studies have a very high statistical significance, but the proposed intervention may have limited clinical impact/significance, eg, a study might show a statistical significance of lowered blood sugar levels by 1 mg/dL correlated with better outcomes, but this may not be clinically as important.” A big-enough sample can make almost any difference statistically significant — which is precisely why the page prints the warning line in the Type I row: “Statistical significance ≠ clinical significance.”",
        },
        {
          lead: "WHY β MATTERS CLINICALLY — underpowered trials bury real treatments (KYP)",
          text: "A Type II error is not a statistician's embarrassment; it is a patient's lost option: an effective treatment that fails a small trial (β high, power low) may never reach the clinic. That is why the four levers — above all ↑ sample size — are design obligations, not conveniences: “If you ↑ sample size, you ↑ power. There is power in numbers.” (KYP framing of the printed lever list.)",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A randomized trial of a new antihypertensive reports a significant benefit (P = 0.03); in truth, the drug has no effect whatsoever. Which error has the trial made, and what is its probability called?",
        discriminator:
          "The study rejected H0 (claimed an effect) while reality is H0 (no effect) — the reject × H0 cell of the grid",
        concept: "Type I error (α) — the false-positive error",
        answer:
          "Type I error (α), also called false-positive error — “stating that there is an effect or difference when none exists (H0 incorrectly rejected in favor of H1).” α is the probability of making a type I error, chosen in advance (usually 0.05) — the printed cry-wolf anchor: “1st time boy cries wolf, the town believes there is a wolf, but there is not (false positive).”",
      },
      {
        stem: "A pilot study of a therapy that truly reduces mortality enrolls only 20 patients per arm and finds no significant benefit (P = 0.42). The investigators worry they will miss a real treatment effect in the planned definitive trial.",
        discriminator:
          "The study failed to reject H0 while reality is H1 (an effect exists) — the not-reject × H1 cell; small sample = low power",
        concept: "Type II error (β), statistical power (1 – β), and the sample-size lever",
        answer:
          "The risk is a Type II error (β), also called false-negative error — “stating that there is not an effect or difference when one exists.” Power (1 – β) is “the probability of rejecting H0 when it is false”; raise it by ↑ sample size, ↑ expected effect size, ↑ precision of measurement, or ↑ α level — “If you ↑ sample size, you ↑ power. There is power in numbers.”",
      },
      {
        stem: "An investigator sets α = 0.05 and the analysis returns P = 0.02. Asked to justify rejecting H0, a student says the result is “too extreme to have occurred by chance if H0 were true.”",
        discriminator:
          "The P < α rejection logic, printed verbatim on the page — the probability comparison, not “proof” of H1",
        concept: "The P-value/α threshold mechanic",
        answer:
          "“If P < α, then assuming H0 is true, the probability of obtaining the test results would be less than the probability of making a type I error. H0 is therefore rejected as false.” Rejection is a probabilistic discrediting of H0 — “You can never “prove” H1, but you can reject the H0 as being very unlikely.”",
      },
      {
        stem: "A trial of 40,000 patients shows that a generic drug lowers fasting blood sugar by a statistically significant 1 mg/dL versus placebo (P < 0.001), with a marginal correlation with better outcomes. The editorial asks whether patients should care.",
        discriminator:
          "Very high statistical significance attached to a trivially small effect — the printed 1 mg/dL example itself",
        concept: "Statistical significance ≠ clinical significance",
        answer:
          "Statistical significance is “defined by the likelihood of study results being due to chance” (high significance = low probability the results are due to chance); clinical significance is a “measure of effect on treatment outcomes.” A 1 mg/dL lowering may carry “limited clinical impact/significance … this may not be clinically as important” — the page's own example, sealed by the printed line “Statistical significance ≠ clinical significance.”",
      },
    ],
    traps: [
      {
        a: "Type I error (α) — false-positive error, “1st time boy cries wolf”",
        b: "Type II error (β) — false-negative error, “2nd time boy cries wolf”",
        whyConfused:
          "The two errors are mirror images and the names carry no inherent meaning; stems often describe both the study's claim and the truth, and one flipped word swaps the answer",
        keyDifference:
          "WHAT THE STUDY CLAIMED: an effect that is not there = Type I (false positive); no effect when there is one = Type II (false negative). The grid cross fixes it: reject × H0 = Type I; not-reject × H1 = Type II",
        clue:
          "Claiming something real that is not = false POSITIVE = Type I; missing something real = false NEGATIVE = Type II. The cry-wolf pair pins it: 1st time (wolf claimed, none there) = Type I.",
      },
      {
        a: "α — the probability of making a type I error, set BEFORE the test (usually 0.05)",
        b: "P value — the probability of results at least this extreme, ASSUMING H0 is true",
        whyConfused:
          "Both are probabilities near 0.05 and both govern rejection; option lists love to swap them",
        keyDifference:
          "α is the pre-chosen threshold (the Type I risk the investigator accepts); P is what the data produce, compared against it: P < α → “H0 is therefore rejected as false.” The P value is defined on the preceding page (book 265); this page prints only the comparison logic",
        clue:
          "“Usually 0.05 is chosen” belongs to α; “assuming H0 is true, the probability of obtaining the test results” is the P-value side of the printed sentence.",
      },
      {
        a: "Power (1 – β) — the probability of rejecting H0 when it is FALSE",
        b: "α — the probability of rejecting H0 when it is TRUE",
        whyConfused:
          "Both are “probabilities of rejecting H0”; the when-clause is the entire content, and option lists truncate it",
        keyDifference:
          "Power rejects a FALSE null (a correct rejection — the blue cell); α rejects a TRUE null (the Type I error). “β is related to statistical power (1 – β), which is the probability of rejecting H0 when it is false.”",
        clue:
          "Read the when-clause to the end: “when it is false” → power; “when it is true” → Type I error. Any “probability of rejecting H0” without a when-clause is incomplete — reject it as an answer.",
      },
      {
        a: "Statistical significance — low probability the results are due to chance",
        b: "Clinical significance — large impact on patient outcomes/measures",
        whyConfused:
          "Both wear the word “significance,” and statistically significant results are reported with the same fanfare as clinically important ones",
        keyDifference:
          "Statistical significance is about CHANCE (can we trust the direction of the finding?); clinical significance is about PATIENTS (does the size of the effect matter?). “Statistical significance ≠ clinical significance.” — and sample size drives the first, effect size the second",
        clue:
          "A tiny P value with a tiny effect (the 1 mg/dL blood-sugar example) = statistically significant, clinically trivial. Big n makes small differences significant — not important.",
      },
    ],
    pivots: [
      {
        lookAlike: "An error-name question with the stem's truth hidden or stated",
        differentiator:
          "If the stem STATES reality, the answer is an error NAME (Type I or Type II); if reality is unknown, the answer is a PROBABILITY (α, β, or 1 – β)",
        correctPath:
          "Reality stated + study claimed an effect that is not there → Type I error (α, false positive). Reality stated + study missed a real effect → Type II error (β, false negative). Reality unknown + “probability of rejecting H0 when it is false” → power (1 – β); “probability of making a type I error” → α.",
      },
      {
        lookAlike: "A “↓β / ↑power” question whose options include both sample size and α",
        differentiator:
          "All four printed levers genuinely ↓β — but only sample size (with effect size and precision) does it without spending Type I safety",
        correctPath:
          "Best answer when both appear: ↑ sample size — “If you ↑ sample size, you ↑ power. There is power in numbers.” ↑ α level also ↓β (“Generally, when type I error increases, type II error decreases.”) but trades one error for the other; “decrease α” moves the WRONG way (it ↑β).",
      },
      {
        lookAlike: "A significant result phrased as “the study proved the drug works”",
        differentiator:
          "Hypothesis testing never proves H1 — it only discredits H0 as unlikely",
        correctPath:
          "Reject the “prove” language with the printed line: “You can never “prove” H1, but you can reject the H0 as being very unlikely.” The mirror image also holds (KYP): a non-significant result never proves H0 — the study “does not reject” it, which is exactly why the Type II error exists.",
      },
    ],
    miniCase: {
      vignette:
        "A cardiologist reviews a pilot trial of a novel heart-failure drug: 30 patients per arm, no significant difference in hospitalization-free survival (P = 0.38), though phase I data and animal models consistently show a real survival benefit. Before the definitive phase III trial, she asks the research team how to make sure the new trial does not again miss a treatment that actually works — without inflating the risk of declaring a false benefit.",
      question:
        "Which change to the trial design most directly reduces the risk of missing a true treatment effect, and what is that risk called?",
      options: [
        {
          label: "A",
          text: "Increase the sample size; Type II error (β)",
          correct: true,
          why: "CORRECT — missing a true effect is the Type II error (β), “stating that there is not an effect or difference when one exists,” also called false-negative error. Its complement is power: “statistical power (1 – β), which is the probability of rejecting H0 when it is false.” The printed lever list — “↑ power and ↓ β by: ↑ sample size, ↑ expected effect size, ↑ precision of measurement, ↑ α level” — leads with sample size, and it is the only lever that raises power without touching the false-positive risk: “If you ↑ sample size, you ↑ power. There is power in numbers.”",
        },
        {
          label: "B",
          text: "Increase the sample size; Type I error (α)",
          why: "TEMPTING but wrong lever-name pairing — the lever is right but the error is not. Type I error (α) is “stating that there is an effect or difference when none exists (H0 incorrectly rejected in favor of H1)” — the FALSE-POSITIVE error, “1st time boy cries wolf.” The scenario's risk is the opposite: a real benefit going undetected, which is β, not α.",
        },
        {
          label: "C",
          text: "Set α to 0.01 instead of 0.05; Type I error (α)",
          why: "WRONG direction on the see-saw — tightening α protects against the false-positive error the investigator is NOT risking, and it makes rejection harder, so β RISES: “Generally, when type I error increases, type II error decreases.” (and vice versa — lower α means higher β). This change makes the feared missed-benefit outcome MORE likely, not less.",
        },
        {
          label: "D",
          text: "Raise α to 0.10; Type II error (β)",
          why: "PARTIALLY right, bested by the stem's constraint — raising the α level IS a printed lever (“↑ α level (↑ statistical significance level)”) and it does ↓β, but it buys the power by making a false-positive declaration more likely, which the stem explicitly rules out (“without inflating the risk of declaring a false benefit”). Sample size lowers β with no α cost, so A is the better answer.",
        },
        {
          label: "E",
          text: "No change is needed; the pilot's failure to reject H0 establishes that the drug has no effect",
          why: "WRONG in principle — a non-significant result does not prove H0. Hypothesis testing never proves anything about H1 either: “You can never “prove” H1, but you can reject the H0 as being very unlikely.” Failing to reject H0 in an underpowered pilot is precisely the situation in which the Type II error lives — a real effect (per the phase I and animal data) missed by a small study.",
        },
      ],
      reasoning:
        "The question tests the grid cross plus the lever list in one motion. The pilot failed to reject H0 while the stem's evidence says reality is H1 (a real survival benefit) — not-reject × H1 is the Type II error (β), the false negative, “2nd time boy cries wolf.” The fix is any of the four printed levers, and the stem's constraint (no inflation of false-positive risk) eliminates the ↑α lever, leaving sample size as the classic answer — “If you ↑ sample size, you ↑ power. There is power in numbers.” Option B swaps the error names; option C moves the wrong way on the printed see-saw; option D names a real lever but violates the constraint; option E denies the existence of the very error the page exists to teach.",
    },
  },
  mnemonics: [
    {
      code: "1st time boy cries wolf → Type I; 2nd time → Type II",
      meaning:
        "FIRST AID'S OWN cry-wolf pair, printed in the Testing-errors right column (VLM-confirmed red lead numerals “1st”/“2nd”; carried verbatim, attributed): “1st time boy cries wolf, the town believes there is a wolf, but there is not (false positive).” = Type I error (α) — claiming an effect that does not exist. “2nd time boy cries wolf, the town believes there is no wolf, but there is one.” = Type II error (β) — missing an effect that does exist.",
      memorizes:
        "Which error is which: the false claim of an effect (false positive) is Type I; the missed real effect (false negative) is Type II",
      whenToUse:
        "Any stem that reports a study's conclusion together with the truth of the matter — cross verdict × reality, then anchor with the wolf: a wolf claimed but absent = Type I; a wolf present but denied = Type II.",
      clinical:
        "The pair also encodes the asymmetry of consequences (KYP context): the false positive (Type I) sends a worthless drug to the clinic; the false negative (Type II) keeps an effective one out — the town suffers either way, which is why α and β are both pre-managed, not discovered after the fact.",
    },
    {
      code: "There is power in numbers.",
      meaning:
        "FIRST AID'S OWN line, printed in the Type II row (VLM-confirmed in red; carried verbatim, attributed): “If you ↑ sample size, you ↑ power. There is power in numbers.” — of the four printed levers (↑ sample size, ↑ expected effect size, ↑ precision of measurement, ↑ α level), sample size is the one that always raises power (1 – β) without spending Type I safety.",
      memorizes:
        "The first and safest power lever: sample size ↑ → power ↑ → β ↓",
      whenToUse:
        "Any “how could the study avoid missing a true effect?” or “which change increases power?” question — and any distractor that offers “decrease α” (the see-saw's wrong direction) or “raise α” (power bought with false-positive risk).",
      clinical:
        "Underpowered trials are an ethical and clinical problem, not just a statistical one (KYP context): patients are exposed to a study that cannot answer its own question, and effective treatments can be abandoned on a β — power analysis before enrollment is how the lever is pulled in practice.",
    },
    {
      code: "α ACCUSES THE INNOCENT NULL; β ACQUITS THE TRUE EFFECT",
      meaning:
        "A KYP ORIGINAL (marked as such) — the courtroom frame for the two errors: the null hypothesis is the defendant. Type I error (α) = convicting an innocent defendant (rejecting an H0 that is true — a false-positive conviction); Type II error (β) = acquitting a guilty one (failing to reject an H0 that is false — the real effect walks free).",
      memorizes:
        "Which verdict-error pairs with which symbol: α ↔ false conviction (false positive), β ↔ false acquittal (false negative)",
      whenToUse:
        "Stems personify the null hypothesis or dramatize the decision (“the trial declared the drug effective”); ask what the jury (the study) did to the defendant (H0): convicted the innocent → α; freed the guilty → β.",
      clinical:
        "The frame also stores the priorities (KYP context): α is the innocent-until-proven-guilty standard — pre-set (usually 0.05) before any evidence is seen — while β is the price of an underpowered investigation, paid in missed treatments.",
    },
    {
      code: "n–E–P–α",
      meaning:
        "A KYP ORIGINAL (marked as such) — the four printed power levers in printed order, “↑ power and ↓ β by:”: n = ↑ sample size; E = ↑ expected effect size; P = ↑ precision of measurement; α = ↑ α level (↑ statistical significance level). The first three are free; the fourth trades Type I safety on the printed see-saw (“Generally, when type I error increases, type II error decreases.”).",
      memorizes:
        "All four levers that raise power (1 – β) and lower β, in the printed order",
      whenToUse:
        "Any “how do you increase power / decrease type II error?” option list — run n–E–P–α against the options and reject anything not on the list (especially “decrease α”, which RAISES β).",
      clinical:
        "The levers are the design checklist for any negative trial (KYP context): before believing “no difference”, check whether n was small, the expected effect modest, the measurement noisy, or α very tight — each one a reason a real effect was missed.",
    },
  ],
  rapidReview: {
    s30: [
      "Type I error (α) — stating that there is an effect or difference when none exists (H0 incorrectly rejected in favor of H1); also called false-positive error; “1st time boy cries wolf”",
      "Type II error (β) — stating that there is not an effect or difference when one exists (H0 is not rejected when it is in fact false); also called false-negative error; “2nd time boy cries wolf”",
      "α = the probability of making a type I error, usually 0.05; if P < α, then assuming H0 is true, the probability of obtaining the test results would be less than the probability of making a type I error — H0 is therefore rejected as false",
      "Power (1 – β) = the probability of rejecting H0 when it is false — the blue correct cell of the study-vs-reality grid",
      "↑ power and ↓ β by: ↑ sample size, ↑ expected effect size, ↑ precision of measurement, ↑ α level (↑ statistical significance level) — “There is power in numbers.”",
      "Generally, when type I error increases, type II error decreases (the see-saw, at fixed n)",
      "Statistical significance ≠ clinical significance; statistical = likelihood of results being due to chance; clinical = measure of effect on treatment outcomes",
      "The 1 mg/dL example: a very statistically significant lowered blood sugar may have limited clinical impact/significance — big n makes small differences significant, not important",
    ],
    m3: [
      "1st wolf = false positive = Type I (α); 2nd wolf = false negative = Type II (β) — First Aid's own pair",
      "“If you ↑ sample size, you ↑ power. There is power in numbers.” — First Aid's own",
      "n–E–P–α — the four levers: sample size, expected Effect size, Precision, α level (KYP)",
      "α ACCUSES THE INNOCENT NULL; β ACQUITS THE TRUE EFFECT — the courtroom frame (KYP)",
    ],
    m10: [
      "The grid: rows Study rejects H0 / Study does not reject H0 × columns Reality H1 (left) / H0 (right); blue cells = Power (1 – β) and the EMPTY not-reject × H0 cell — “Blue shading = correct result.”",
      "The two Correct-result sentences ARE the two blue cells: “there is an effect or difference when one exists (H0 rejected in favor of H1)” = power; “no effect or difference when none exists (H0 not rejected)” = the silent cell",
      "“You can never “prove” H1, but you can reject the H0 as being very unlikely.” — and the mirror: failing to reject never proves H0",
      "Power is a design quantity: it is computed BEFORE the data (from α, n, expected effect size, precision) — which is why the page prints a lever list rather than a formula (KYP framing)",
    ],
  },
  recall: [
    {
      q: "In the printed study-vs-reality grid, which column is H1 and which is H0, and what are the four cells?",
      a: "Under the spanning “Reality” header, H1 (an effect exists) is the LEFT column and H0 the RIGHT. Top row (Study rejects H0): Power (1 – β) [blue] × Type I error (α). Bottom row (Study does not reject H0): Type II error (β) × an EMPTY blue cell — “Blue shading = correct result.”",
    },
    {
      q: "Define the Type I error, give its other name, its probability symbol, and First Aid's printed anchor.",
      a: "“Stating that there is an effect or difference when none exists (H0 incorrectly rejected in favor of H1).” Also called false-positive error; α is the probability of making it (usually 0.05). “1st time boy cries wolf, the town believes there is a wolf, but there is not (false positive).”",
    },
    {
      q: "Define the Type II error, give its other name, its probability symbol, and First Aid's printed anchor.",
      a: "“Stating that there is not an effect or difference when one exists (H0 is not rejected when it is in fact false).” Also called false-negative error; β is the probability of making it. “2nd time boy cries wolf, the town believes there is no wolf, but there is one.”",
    },
    {
      q: "State the printed logic by which P < α leads to rejecting H0.",
      a: "“If P < α, then assuming H0 is true, the probability of obtaining the test results would be less than the probability of making a type I error. H0 is therefore rejected as false.” — and “You can never “prove” H1, but you can reject the H0 as being very unlikely.”",
    },
    {
      q: "What is statistical power, in the page's own words?",
      a: "“Statistical power (1 – β), which is the probability of rejecting H0 when it is false” — β is the probability of making a type II error, and power is its complement.",
    },
    {
      q: "List the four printed ways to ↑ power and ↓ β.",
      a: "“↑ power and ↓ β by:” ↑ sample size; ↑ expected effect size; ↑ precision of measurement; ↑ α level (↑ statistical significance level).",
    },
    {
      q: "What happens to type II error when type I error increases, and which lever escapes the trade-off?",
      a: "“Generally, when type I error increases, type II error decreases.” — the see-saw at fixed sample size. Sample size (with expected effect size and precision) raises power without spending α: “If you ↑ sample size, you ↑ power. There is power in numbers.”",
    },
    {
      q: "Define statistical significance and clinical significance, and give the printed example that separates them.",
      a: "“Statistical significance—defined by the likelihood of study results being due to chance” (high significance = low probability the results are due to chance); “Clinical significance—measure of effect on treatment outcomes.” The example: a statistically significant lowering of blood sugar by 1 mg/dL correlated with better outcomes “may not be clinically as important” — “Statistical significance ≠ clinical significance.”",
    },
    {
      q: "Which two cells of the grid are the correct results, and how does the page mark them?",
      a: "Power (Study rejects H0 × Reality H1) and the silent cell (Study does not reject H0 × Reality H0) — both blue-shaded, per the printed legend “Blue shading = correct result.”; the second cell prints with no label of its own, and the two “Correct result” sentences printed beside the grid are its descriptions together with power's.",
    },
  ],
  related: [
    {
      title: "Statistical distributions — the definitions this page stands on",
      note:
        "The preceding page (book 265) prints the Statistical hypothesis testing opener: the null hypothesis (H0, zero difference between two groups), the alternative (H1, at least one difference or association), and the P value (probability of results at least this extreme assuming H0 is correct) — the three definitions whose verdicts this page's grid grades. Read that page first; this page is its error taxonomy.",
      topicId: "statistical-distributions",
    },
    {
      title: "Confidence intervals and meta-analysis — α turned into an interval",
      note:
        "The next page (book 267) prints confidence intervals: CI = 1 – α, with Z = 1.96 for 95% — the same α chosen here as the Type I threshold re-expressed as interval width. The significance rules (a mean-difference CI excluding 0, an OR/RR CI excluding 1) are the interval form of the P < α rejection printed here.",
      topicId: "confidence-intervals-meta-analysis",
    },
    {
      title: "Choosing the statistical test — the machinery that produces the P value",
      note:
        "Book 267's lower page prints the test menu (t-test, chi-square, ANOVA, Pearson r…) — every one of those tests ends in the same P-vs-α comparison this page legislates. This page is the courtroom; the test-choice page is the evidence-processing that fills it.",
      topicId: "statistical-tests",
    },
    {
      title: "Quantifying risk — the other 2×2 grid",
      note:
        "The exposure × disease contingency table computes OR and RR from counts; the study-vs-reality grid here crosses a VERDICT with the TRUTH and yields probabilities (α, β, 1 – β). Both are 2×2 crosses, and the exam tests whether you know which grid a stem's 2×2 is — a risk measure or an error name.",
      topicId: "quantifying-risk",
    },
  ],
  crossLinks: [
    {
      subject: "Biostatistics — confidence intervals and α",
      connection:
        "The α chosen here (usually 0.05) is the same α in CI = 1 – α: a 95% confidence interval is the interval-logic twin of the 0.05 Type I threshold — a mean-difference CI that excludes 0 (or an OR/RR CI that excludes 1) is the equivalent way of rejecting H0 at the same α.",
    },
    {
      subject: "Diagnostic testing — sensitivity, specificity, and predictive values",
      connection:
        "The words “false positive” and “false negative” recur in screening (1 – sensitivity = false-negative rate; 1 – specificity = false-positive rate), but the grids differ: a diagnostic test's truth is disease status measured per patient, while a hypothesis test's truth is which HYPOTHESIS reality satisfies. Same vocabulary, different 2×2 — the exam loves the distinction.",
    },
    {
      subject: "Clinical therapeutics — reading a trial report",
      connection:
        "Every drug trial report is graded with this page's vocabulary: a benefit claimed for an ineffective drug is a Type I error (α), an effective drug declared futile by an underpowered trial is a Type II error (β), and “statistically significant” trial endpoints (the 1 mg/dL-style effect) must be re-weighed as clinical significance before they change prescribing.",
    },
    {
      subject: "Research ethics and study design — the duty to power a study",
      connection:
        "Because β is chosen at design time via the four levers, an underpowered trial is a foreseeable Type II error — enrolling patients in a study that cannot detect its own endpoint is the ethical price of ignoring “There is power in numbers.” Power calculations before enrollment are where this page meets human-subjects research ethics.",
    },
  ],
};
