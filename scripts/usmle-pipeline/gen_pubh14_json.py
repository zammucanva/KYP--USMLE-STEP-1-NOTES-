#!/usr/bin/env python3
"""PUBH14 hypothesis-testing-errors — manifest + inventory (Public Health batch 3),
STAGED under .usmle-pipeline-cache/staging-pubh14/ (the promotion step owns
content/). Source: FULL pdf page 288 / book 266 (Part 1), the third page of
the EPIDEMIOLOGY AND BIOSTATISTICS subsection; the topic owns the WHOLE page,
which carries THREE blocks: (1) "Outcomes of statistical hypothesis testing"
— a "Correct result" label with two definition sentences printed at the LEFT
of the block, and at the RIGHT the STUDY-VS-REALITY 2x2 GRID (pure vector): a
spanning "Reality" column header over H1 (LEFT) and H0 (RIGHT), row headers
"Study rejects H0" (TOP) / "Study does not reject H0" (BOTTOM), cells reject
x H1 = Power (1 - b) [BLUE], reject x H0 = a Type I error, not-reject x H1 =
b Type II error, not-reject x H0 = EMPTY of text [BLUE], legend "Blue
shading = correct result."; (2) "Testing errors" — a THREE-COLUMN block
(left label column / main text / right column): Type I error (a) and Type II
error (b) rows with their definitions, the a-probability sentence and the
P < a rejection logic, "Statistical significance != clinical significance.",
"Also called false-positive error." / "Also called false-negative error.",
First Aid's OWN cry-wolf pair ("1st time boy cries wolf..." / "2nd time boy
cries wolf..."), "You can never "prove" H1...", the b/power sentence, the
"↑ power and ↓ β by:" lever list (↑ sample size / ↑ expected effect size /
↑ precision of measurement / ↑ α level), "If you ↑ sample size, you ↑ power.
There is power in numbers.", and "Generally, when type I error increases,
type II error decreases."; (3) "Statistical vs clinical significance" — the
label-column title wraps across two lines; three definition sentences
including the 1 mg/dL blood-sugar example. Census (pdfimages): ZERO raster
images — pure text, one vector grid, the indd footer slug. VLM AVAILABLE this
session (glm-4.6v, TWO passes, staging-pubh14/vlm-census.txt): pass 1 = full
page at 120dpi; pass 2 = focused 200dpi crops of the grid + the Testing-
errors block. Confirmed: the grid geometry as above with the two BLUE cells =
the Power cell (reject x H1) and the EMPTY not-reject x H0 cell (the diagonal
of correct results); the cry-wolf pair prints in ROMAN with RED lead numerals
("1st"/"2nd"), "power in numbers" in RED, and the Roman numerals I/II of the
two row labels in RED; the four levers print with square bullets and arrows;
NO margin mnemonics, NO asterisk footnotes, NO images. ADJUDICATIONS,
documented in the census file and the manifest notes: (A) the grid's column
order — the task brief anticipated H1 / H0 columns and the print agrees, but
the FIRST VLM pass mis-read the column headers (claimed H0 LEFT / H1 RIGHT,
contradicting its own cell description and its own blue-shading claim) —
pinned by pdftotext -bbox coordinates (H1 x~485 LEFT of H0 x~535; "Power"
x~479 sits under H1; "a" x~536 under H0) + the 200dpi focused re-pass (H1
left, H0 right; blue = Power cell + the empty cell): bbox + focused pass +
the print's own logic all agree (rejecting H0 when H0 is TRUE is a Type I
error, not power); (B) the raw text layer extracts the grid's labels
INTERLEAVED and out of reading order — evidence range 3 quotes the raw order
and the cell assignment is bbox+VLM-pinned; (C) the "(1 - b)" cell prints
with thin spaces around the en-dash, widened by the raw layer to "( 1 - b )"
(en-dash used as minus throughout, carried as printed in the note); (D) the
four-lever bullet list is text-layer-pinned (exactly four bullets, no
parentheticals) — the focused VLM crop cut the bullets off and the model
explicitly disclaimed reading them. Printed quirks carried + documented:
"SEC TION II" header-space artifact (known, as-is); small-caps artifact
"EPIDEmIOLOGY AND BIOSTATISTICS" in the banner, which prints ONCE on this
page (the twice-printing was the subsection-opener quirk of book 256); C1
control bytes (x8f/x90) around the arrows and x83 before each square bullet
(stripped by the normalizer, documented); the indd footer slug extracts
MID-BLOCK in the raw layer (between the bottom block's title wrap and its
body) although it prints at the page foot — a reading-order artifact quoted
in raw order; the bottom block's title wraps across two lines; "eg," prints
without periods. Nothing is reproduced: the grid is an ORIGINAL_KYP_REDRAW
(KYP geometry, every printed label preserved, the two correct cells blue-
shaded) and the two text blocks are ORIGINAL KYP ADAPTATIONS (cards, lever
chips, strip) in ONE registry visual (hypothesis-errors-map,
HypothesisErrorsMap in visuals/pubhealth-p14.tsx, viewBox 0 0 1102 1290);
the grid and the error rows are additionally carried VERBATIM in the note's
table block. DrugCards: none — the page prints statistical logic, not drugs
(folded by absence; the clinical layer is the statistical-vs-clinical
significance block with the 1 mg/dL example)."""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 434 and pages[-1].strip() == "": pages.pop()
L = {288: pages[287].split("\n")}
P = {288: norm(pages[287])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — book page 266, the 'SEC TION II' header-space extraction artifact (carried as-is, a known quirk), the section header PUBLIC HEALTH SCIENCES, and the banner '▶ PUBLIC HEALTH SCIENCES—EPIDEmIOLOGY AND BIOSTATISTICS' printing ONCE on this page in the running-header band (small-caps 'm' artifact as extracted; the twice-printing was the subsection-opener quirk of book 256)", rng(288, 1, 7), [288]),
    ("BLOCK 1 opener — the 'Outcomes of statistical hypothesis testing' title, the 'Correct result' label, and BOTH printed Correct-result definitions: 'Stating that there is an effect or difference when one exists (H0 rejected in favor of H1).' and 'Stating that there is no effect or difference when none exists (H0 not rejected).' — the two sentences that describe exactly the grid's two blue cells", rng(288, 9, 15), [288]),
    ("BLOCK 1 — the STUDY-VS-REALITY 2×2 GRID, labels in RAW extraction order (interleaved, a documented reading-order quirk): 'Reality' (the spanning column header), the row headers 'Study rejects H0' / 'Study does not reject H0', the column headers 'H1' / 'H0', the cells 'Power' + 'α' + '( 1 – β)' + 'Type I error' + 'β' + 'Type II error', and the legend 'Blue shading = correct result.' — cell assignment pinned by pdftotext -bbox + two VLM passes: columns H1 (LEFT) / H0 (RIGHT); blue cells = Power (reject × H1) and the EMPTY not-reject × H0 cell; the '( 1 – β)' thin spaces around the en-dash are a text-layer artifact (en-dash used as minus, carried as printed)", rng(288, 17, 38), [288]),
    ("BLOCK 2 opener — the 'Testing errors' title, the row label 'Type I error (α)', and the printed definition: 'Stating that there is an effect or difference when none exists (H0 incorrectly rejected in favor of H1).'", rng(288, 40, 45), [288]),
    ("BLOCK 2, Type I main text — 'α is the probability of making a type I error (usually 0.05 is chosen). If P < α, then assuming H0 is true, the probability of obtaining the test results would be less than the probability of making a type I error. H0 is therefore rejected as false.' + the printed warning 'Statistical significance ≠ clinical significance.'", rng(288, 46, 52), [288]),
    ("BLOCK 2, Type I right column — 'Also called false-positive error.'; First Aid's OWN mnemonic line (red lead numeral, VLM-confirmed) '1st time boy cries wolf, the town believes there is a wolf, but there is not (false positive).'; and 'You can never “prove” H1, but you can reject the H0 as being very unlikely.'", rng(288, 54, 58), [288]),
    ("BLOCK 2, Type II — the row label 'Type II error (β)', the printed definition 'Stating that there is not an effect or difference when one exists (H0 is not rejected when it is in fact false).', and the power sentence: 'β is the probability of making a type II error. β is related to statistical power (1 – β), which is the probability of rejecting H0 when it is false.'", rng(288, 60, 67), [288]),
    ("BLOCK 2, the power lever list — '↑ power and ↓ β by:' with the FOUR printed square-bullet levers: '↑ sample size', '↑ expected effect size', '↑ precision of measurement', '↑ α level (↑ statistical significance level).' (C1 control bytes around the ↑↓ arrows and before the ▘ bullets are stripped by the normalizer — a documented quirk; exactly four bullets, text-layer-pinned)", rng(288, 68, 72), [288]),
    ("BLOCK 2, Type II right column — 'Also called false-negative error.'; First Aid's OWN mnemonic lines (red lead numeral + red phrase, VLM-confirmed) '2nd time boy cries wolf, the town believes there is no wolf, but there is one.' and 'If you ↑ sample size, you ↑ power. There is power in numbers.'; and the printed see-saw 'Generally, when type I error increases, type II error decreases.'", rng(288, 74, 80), [288]),
    ("BLOCK 3 — the 'Statistical vs clinical significance' title (wraps across two lines in its left label column) with the indd footer slug 'FAS1_2026_06-PubHealth.indd 266' interleaved MID-BLOCK in the raw layer (a reading-order artifact — it prints at the page foot), then the three printed definition sentences: 'Statistical significance—defined by the likelihood of study results being due to chance. If there is a high statistical significance, then there is a low probability that the results are due to chance.'; 'Clinical significance—measure of effect on treatment outcomes. An intervention with high clinical significance is likely to have a large impact on patient outcomes/measures.'; and the 1 mg/dL example: 'Some studies have a very high statistical significance, but the proposed intervention may have limited clinical impact/significance, eg, a study might show a statistical significance of lowered blood sugar levels by 1 mg/dL correlated with better outcomes, but this may not be clinically as important.'", rng(288, 82, 94), [288]),
    ("The print footer timestamp — 12/16/25 12:46 PM (page identity, book 266)", rng(288, 96, 96), [288]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"hypothesis-testing-errors: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "hypothesis-testing-errors", "title": "Hypothesis Testing Errors: Type I, Type II, and Power",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [288], "bookPages": "266–266"},
    "sourceEvidence": kept, "visualIds": ["hypothesis-errors-map"],
    "mechanismIds": ["reality-by-decision", "power-levers"],
    "kypExtensions": [
        {"id": "reality-by-decision-grammar",
         "summary": "The verdict-×-reality reading grammar of the printed grid: every error question decomposes into MOVE 1 what did the study conclude (reject / not reject H0 — the rows), MOVE 2 what is reality (H1 an effect exists / H0 none exists — the columns), MOVE 3 cross them to name the cell (Power (1 – β) / Type I error (α) / Type II error (β) / the silent correct cell), MOVE 4 pull the right lever, MOVE 5 separate statistical from clinical significance; plus the 'two ways to be right, two ways to be wrong' frame and the observation that the two printed Correct-result sentences ARE the two blue cells (the print's layout, the pairing is KYP's reading).",
         "origin": "outside-first-aid", "rationale": "The source prints the grid and the definitions but never states the cross-reading procedure nor the blue-cell/Correct-result pairing; the grammar is KYP's synthesis.",
         "location": "core.keyIdea + mechanisms[0] reality-by-decision + blocks[3] the steps block + the registry visual's Zone A rule strip"},
        {"id": "courtroom-frame",
         "summary": "The courtroom frame for the two errors (the null hypothesis as defendant): Type I error (α) = convicting an innocent defendant — rejecting an H0 that is true (false positive); Type II error (β) = acquitting a guilty one — failing to reject an H0 that is false (the real effect walks free); packaged as the KYP mnemonic 'α ACCUSES THE INNOCENT NULL; β ACQUITS THE TRUE EFFECT'.",
         "origin": "outside-first-aid", "rationale": "The source prints the definitions and its own cry-wolf anchors; the courtroom personification and the α-accuses/β-acquits code are KYP's design (the cry-wolf pair remains attributed to the source).",
         "location": "mnemonics[2] + blocks[2] the decoder list + usmle.pivots[0]"},
        {"id": "power-lever-panel",
         "summary": "The four-lever design reading of '↑ power and ↓ β by:': n–E–P–α in printed order (sample size, expected Effect size, Precision, α level), with the split the page implies but does not state — levers 1–3 raise power without spending Type I safety, lever 4 buys power with α on the printed see-saw ('Generally, when type I error increases, type II error decreases.'), and power as a design quantity computed before the data exist (why the page prints a lever list rather than a formula).",
         "origin": "outside-first-aid", "rationale": "The source prints the four levers and the see-saw sentence as parallel facts; the free-vs-traded lever split, the n–E–P–α code, and the design-quantity framing are KYP's organization.",
         "location": "mechanisms[1] power-levers + blocks[3] the steps block MOVE 4 + the registry visual's Zone C + mnemonics[3]"},
        {"id": "significance-split-layer",
         "summary": "The statistical-vs-clinical significance layer: chance-language vs patients-language ('statistical significance says the result is unlikely to be chance; clinical significance says it matters for patients'), the sample-size-drives-the-first/effect-size-drives-the-second asymmetry, and the exam twist that re-dresses the printed 1 mg/dL blood-sugar example (big n makes small differences significant, not important).",
         "origin": "outside-first-aid", "rationale": "The source prints the three definition sentences and the example; the two-language split, the n-vs-effect-size asymmetry, and the exam-twist packaging are KYP's design.",
         "location": "clinical block + usmle.patterns[3] + usmle.traps[3] + the registry visual's Zone D"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the false-benefit Type I stem, the underpowered-pilot Type II/power stem, the P < α justification stem, the 1 mg/dL significance twist), 4 traps (Type I vs Type II; α vs P value; power's when-clause vs α's; statistical vs clinical), 3 pivots (error-name vs error-probability; sample size vs α as the power lever; 'proved H1' language), and a 5-option miniCase (the phase III underpowered-drug vignette routed to ↑ sample size / Type II error against wrong-error, wrong-direction, constraint-violating, and error-denying distractors).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the definitions only; the attack structure, distractor designs, and question shapes are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: First Aid's OWN four lines — the cry-wolf pair ('1st time boy cries wolf, the town believes there is a wolf, but there is not (false positive).' / '2nd time boy cries wolf, the town believes there is no wolf, but there is one.'), 'If you ↑ sample size, you ↑ power. There is power in numbers.', and 'Generally, when type I error increases, type II error decreases.' (the cry-wolf lead numerals and 'power in numbers' print in RED, VLM-confirmed) — carried VERBATIM and ATTRIBUTED in the mnemonics array, the memory callout, the decoder list, and the visual's cards; plus TWO KYP originals, marked as such: 'α ACCUSES THE INNOCENT NULL; β ACQUITS THE TRUE EFFECT' and 'n–E–P–α' (the four levers in printed order).",
         "origin": "outside-first-aid", "rationale": "The cry-wolf pair and 'There is power in numbers.' are the source's own hooks (attributed, not counted as KYP's); no margin mnemonic prints anywhere on pdf 288 (pdfimages + VLM census, staging-pubh14/vlm-census.txt); the two KYP codes are KYP's design.",
         "location": "mnemonics + blocks[6] the memory callout + the visual's card and lever lines"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 288 / book 266, the third page of the EPIDEMIOLOGY AND BIOSTATISTICS subsection (bounded by the Statistical hypothesis testing opener that closes book 265 — owned by statistical-distributions — and the Confidence interval block that opens book 267 — owned by confidence-intervals-meta-analysis), carrying THREE blocks: (1) 'Outcomes of statistical hypothesis testing' — the two printed Correct-result sentences plus the STUDY-VS-REALITY 2×2 GRID (rows 'Study rejects H0' / 'Study does not reject H0'; columns under the spanning 'Reality' header: H1 LEFT / H0 RIGHT; cells Power (1 – β) [blue], α Type I error, β Type II error, EMPTY [blue]; legend 'Blue shading = correct result.'), carried verbatim in the note's table block; (2) 'Testing errors' — the Type I and Type II rows with the α/P-value logic, the four power levers, the 'Also called' lines, and First Aid's OWN cry-wolf pair + 'There is power in numbers.' + the see-saw sentence, all carried VERBATIM and ATTRIBUTED; (3) 'Statistical vs clinical significance' — the three definition sentences including the 1 mg/dL blood-sugar example. CENSUS (pdfimages): ZERO raster images; VLM WAS AVAILABLE this session (glm-4.6v, TWO passes, staging-pubh14/vlm-census.txt: a 120dpi full-page pass + a 200dpi focused grid/Testing-errors crop pass): the grid's geometry confirmed as above, with the two BLUE cells = the Power cell (reject × H1) and the EMPTY not-reject × H0 cell; the cry-wolf pair prints in ROMAN (not italic, not boxed) with RED lead numerals ('1st'/'2nd'), 'power in numbers' in RED, and the Roman numerals I/II of the two row labels in RED; the four levers print with ▘ square bullets and ↑ arrows; no margin notes, mnemonics, asterisk footnotes, or images. ADJUDICATION (all reads agree after the focused re-pass — raw text layer + pdftotext -bbox/-layout + the 200dpi VLM pass): the FIRST full-page VLM pass mis-assigned the grid's column headers (claimed H0 LEFT / H1 RIGHT, contradicting its own cell description and its own blue-shading claim) — the bbox coordinates are authoritative (H1 x≈485 LEFT of H0 x≈535; 'Power' x≈479 under H1; 'α' x≈536 under H0) and the focused 200dpi pass read H1-left/H0-right with blue = Power + the empty cell, matching the print's internal logic (rejecting a true H0 is a Type I error, not power) and the task brief's expectation; the visual and the note draw the grid exactly as pinned. Quirks carried + documented: 'SEC TION II' header-space extraction artifact (known, as-is); small-caps artifact 'EPIDEmIOLOGY AND BIOSTATISTICS' — the ▶ banner prints ONCE on this page (the twice-printing was the subsection-opener quirk of book 256); the grid's labels extract INTERLEAVED in the raw layer (evidence range 3 quotes the raw order; the cell assignment is bbox+VLM-pinned); the '( 1 – β)' cell's thin spaces around the en-dash widen to '( 1 – β)' in the raw layer (en-dash used as minus throughout — the note carries '(1 – β)'); C1 control bytes (\\x8f/\\x90) around the ↑↓ arrows and \\x83 before each ▘ bullet (stripped by the normalizer); the indd footer slug 'FAS1_2026_06-PubHealth.indd 266' extracts MID-BLOCK between the bottom block's title wrap and its body although it prints at the page foot (reading-order artifact; evidence range 10 preserves the raw order); the bottom block's title wraps across two lines in its label column; 'eg,' prints without periods. Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (reality-by-decision, power-levers), a visual block + verbatim grid table block + decoder list + steps block + compare block + exam callout + memory callout, a clinical block (the significance split with the 1 mg/dL example + the why-β-matters framing), 4 patterns, 4 traps, 3 pivots, 9 recall, 4 related (statistical-distributions, confidence-intervals-meta-analysis, statistical-tests, quantifying-risk — all four are public-health census topicIds), 4 crossLinks, 4 mnemonics (First Aid's own cry-wolf pair and 'There is power in numbers.' carried attributed + two KYP originals marked), and a miniCase with 5 options (exactly 1 correct, why/whyWrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints statistical logic, not drugs — the DrugCard shape does not fit; the clinical layer is the significance block, carried in the clinical block instead; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the manifest convention shared with staging-pubh1; the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh14/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'hypothesis-errors-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's THREE visual assets are implemented in ONE registry visual (hypothesis-errors-map, HypothesisErrorsMap in visuals/pubhealth-p14.tsx, viewBox 0 0 1102 1290): the study-vs-reality grid as an ORIGINAL_KYP_REDRAW (KYP geometry, every printed label preserved, the two correct cells blue-shaded exactly as the print shades them, the legend and the Correct-result sentences carried) and the two text blocks as ORIGINAL KYP ADAPTATIONS (the Type I/Type II cards with the cry-wolf pair attributed; the four-lever power panel; the statistical-vs-clinical strip with the 1 mg/dL example) — with the grid's labels and the error rows ALSO carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Epidemiology and Biostatistics",
    "topicId": "hypothesis-testing-errors", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "hypothesis-testing-errors-sv1",
        "sourcePages": {"part": 1, "pdfPages": [288], "bookPages": "266"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The study-vs-reality 2×2 grid (book 266, 'Outcomes of statistical hypothesis testing'): the printed cross of the study's verdict (reject / do not reject H0) with reality (H1 / H0) yielding Power (1 – β), Type I error (α), Type II error (β), and the unlabeled correct cell — the page's centerpiece and the chapter's error taxonomy",
        "sourceFigureDescription": "PURE VECTOR 2×2 GRID, no raster (pdfimages: zero raster images; geometry pinned by pdftotext -bbox coordinates + two VLM passes, staging-pubh14/vlm-census.txt — VLM available this session): the 'Correct result' label and its two definition sentences printed at the LEFT of the block; at the RIGHT, a grid with a spanning 'Reality' column header over two columns — H1 (LEFT) / H0 (RIGHT) — and two row headers at the left — 'Study rejects H0' (TOP) / 'Study does not reject H0' (BOTTOM). Cells, each printing its symbol stacked over its name: reject × H1 = 'Power' over '(1 – β)' [BLUE-SHADED]; reject × H0 = 'α' over 'Type I error'; not-reject × H1 = 'β' over 'Type II error'; not-reject × H0 = EMPTY of text [BLUE-SHADED]. The legend 'Blue shading = correct result.' prints below the grid's bottom-left edge. The grid's labels extract INTERLEAVED in the raw text layer (Reality / Study rejects H0 / Study does not reject H0 / H1 / H0 / Power / α / ( 1 – β) / Type I error / β / Type II error / Blue shading = correct result.) — the cell assignment pinned by bbox + the two VLM passes; the first full-page pass mis-read the column headers and was overruled (see adjudication).",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "hypothesis-errors-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A of the registry visual (HypothesisErrorsMap in visuals/pubhealth-p14.tsx): the grid redrawn with KYP geometry — spanning 'Reality' header, H1 (left) / H0 (right) column headers with KYP glosses, the two row headers, and the four cells (the Power cell and the EMPTY bottom-right cell blue-shaded with the legend 'Blue shading = correct result.' carried verbatim), beside the printed 'Correct result' sentences in a left panel with the KYP pairing chips (each sentence → its blue cell) and the read-any-question-off-the-grid rule strip; the grid's labels are ALSO carried verbatim in the note's table block (blocks[1]), core.what, mechanisms[0] reality-by-decision, the decoder list, and recall[0]",
        "productionStatus": "complete",
        "plannedKypVisualId": "hypothesis-errors-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "hypothesis-testing-errors-sv2",
        "sourcePages": {"part": 1, "pdfPages": [288], "bookPages": "266"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Testing errors block (book 266): the Type I error (α) and Type II error (β) rows — definitions, the α-probability sentence with the P < α rejection logic, the β/power sentence, the four-lever '↑ power and ↓ β by:' list, the 'Also called' lines, First Aid's cry-wolf pair, 'You can never “prove” H1...', 'There is power in numbers.', and the α–β see-saw sentence",
        "sourceFigureDescription": "THREE-COLUMN TEXT BLOCK, no raster (pdfimages: zero raster images; VLM-read at 120dpi + a 200dpi focused crop pass, staging-pubh14/vlm-census.txt — VLM available this session): a left label column ('Type I error (α)' / 'Type II error (β)', dark blue with RED Roman numerals I/II per the focused pass), a wide main text column (the definitions, the α/P-value logic, the 'Statistical significance ≠ clinical significance.' line, the β/power sentence, the '↑ power and ↓ β by:' lever list with ▘ square bullets and ↑ arrows), and a right column ('Also called false-positive error.' / 'Also called false-negative error.', the cry-wolf pair in ROMAN with RED lead numerals '1st'/'2nd', 'You can never “prove” H1, but you can reject the H0 as being very unlikely.', 'If you ↑ sample size, you ↑ power. There is power in numbers.' with 'power in numbers' in RED, and 'Generally, when type I error increases, type II error decreases.'), rows separated by hairline rules.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "hypothesis-errors-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zones B and C of the registry visual (HypothesisErrorsMap in visuals/pubhealth-p14.tsx): the two error rows as KYP cards — Type I (α) and Type II (β) — each carrying the printed definition, the α/P-value or β/power sentences, an 'Also called false-positive/negative error.' chip, the ≠ or see-saw chip, First Aid's cry-wolf line attributed in KYP emergency red, and a pointer to the row's grid cell; plus the four-lever power panel (Zone C) with the printed '↑ power and ↓ β by:' levers as chips and 'There is power in numbers.' attributed; the rows' text is ALSO carried verbatim in the note's core.what, the decoder list block, the compare block, and recall[1-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "hypothesis-errors-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "hypothesis-testing-errors-sv3",
        "sourcePages": {"part": 1, "pdfPages": [288], "bookPages": "266"},
        "visualType": "COMPARISON_FIGURE",
        "visualPurpose": "The Statistical vs clinical significance block (book 266): the two definitions side by side — statistical significance defined by the likelihood of results being due to chance vs clinical significance as a measure of effect on treatment outcomes — sealed by the printed 1 mg/dL blood-sugar example of high statistical significance with limited clinical impact",
        "sourceFigureDescription": "TEXT BLOCK WITH LABEL COLUMN, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh14/vlm-census.txt): the block title 'Statistical vs clinical significance' wraps across two lines in its left label column (a documented quirk); the body prints three sentences at the right: 'Statistical significance—defined by the likelihood of study results being due to chance. If there is a high statistical significance, then there is a low probability that the results are due to chance.' (lead-in in blue); 'Clinical significance—measure of effect on treatment outcomes. An intervention with high clinical significance is likely to have a large impact on patient outcomes/measures.' (lead-in in blue); and the example sentence 'Some studies have a very high statistical significance, but the proposed intervention may have limited clinical impact/significance, eg, a study might show a statistical significance of lowered blood sugar levels by 1 mg/dL correlated with better outcomes, but this may not be clinically as important.' The indd footer slug extracts between the title and the body in the raw layer (reading-order artifact; it prints at the page foot).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "hypothesis-errors-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone D of the registry visual (HypothesisErrorsMap in visuals/pubhealth-p14.tsx): the two definitions as side-by-side half-cards (statistical significance — the chance language; clinical significance — the patients language) over the printed-example strip carrying the 1 mg/dL blood-sugar sentence verbatim; the block's text is ALSO carried verbatim in the note's core.what, the clinical block, usmle.patterns[3], and recall[8]",
        "productionStatus": "complete",
        "plannedKypVisualId": "hypothesis-errors-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh14"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "hypothesis-testing-errors.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "hypothesis-testing-errors.json").write_text(
    json.dumps({"topicId": "hypothesis-testing-errors", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "hypothesis-testing-errors", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries THREE visual assets — the study-vs-reality 2×2 grid (sv1: rows 'Study rejects H0' / 'Study does not reject H0', columns under the spanning 'Reality' header H1 (LEFT) / H0 (RIGHT), cells Power (1 – β) [blue], α Type I error, β Type II error, and the EMPTY blue cell, legend 'Blue shading = correct result.'), the Testing errors block (sv2: the Type I and Type II rows with the α/P-value logic, the four power levers, the 'Also called' lines, and First Aid's cry-wolf pair + 'There is power in numbers.' + the see-saw), and the Statistical vs clinical significance block (sv3: the two definitions and the 1 mg/dL blood-sugar example) — all accounted for in ONE registry visual (hypothesis-errors-map, HypothesisErrorsMap in visuals/pubhealth-p14.tsx, viewBox 0 0 1102 1290): the grid as an ORIGINAL_KYP_REDRAW (Zone A — KYP geometry, every printed label preserved, the two correct cells blue-shaded) and the two text blocks as ORIGINAL KYP ADAPTATIONS (Zones B–D — cards, lever chips, strip, the cry-wolf pair and 'power in numbers' attributed in KYP emergency red); nothing is reproduced, and the grid's labels and the error rows are additionally carried verbatim in the note's table block. Census: zero raster images (pdfimages); VLM available this session — TWO glm-4.6v passes (vlm-census.txt: 120dpi full page + 200dpi focused grid/Testing-errors crops) confirmed the grid geometry (blue cells = Power + the EMPTY not-reject × H0 cell), the cry-wolf pair's roman type with red lead numerals, 'power in numbers' in red, the red I/II row-label numerals, and the absence of margin mnemonics and images. ADJUDICATION: the first full-page VLM pass mis-read the grid's column headers (claimed H0 left / H1 right, contradicting its own cell description) — overruled by pdftotext -bbox coordinates (H1 x≈485 left of H0 x≈535) + the 200dpi focused pass + the print's internal logic; the grid is drawn H1-left/H0-right with the blue diagonal (Power + empty cell) exactly as pinned. FULL single page, the third of the Epidemiology and Biostatistics subsection (book 266). STAGED under .usmle-pipeline-cache/staging-pubh14/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH14 manifest + inventory staged: {OUT}/manifests/hypothesis-testing-errors.json, {OUT}/visual-inventory/hypothesis-testing-errors.json")
print(f"hypothesis-testing-errors: evidence {len(kept)}/{len(E1)} verified")
