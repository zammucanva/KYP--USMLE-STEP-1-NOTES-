#!/usr/bin/env python3
"""PUBH8 diagnostic-test-performance — manifest + inventory (Public Health
batch 2), STAGED under .usmle-pipeline-cache/staging-pubh8/ (the promotion
step owns content/). Source: pdf page 282 / book 260, LOWER PORTION ONLY —
a pinned page-split (the p252 pharmacology convention; the upper "Hazard
ratio" block, raw lines 9-18, belongs to survival-analysis). The lower
portion carries FIVE blocks: (1) the STAGE-SETTER — "Sensitivity and
specificity are fixed properties of a test. PPV and NPV vary depending on
disease prevalence in population being tested. Test efficiency = (TP +
TN)/(TP + FN + FP + TN)"; (2) the Test x Disease 2x2 GRID — rows Test
+/-, columns Disease +/-, cells TP (top-left), FP (top-right), FN
(bottom-left), TN (bottom-right), the PPV/NPV formula boxes at its right,
and the formula strip beneath (Sensitivity = TP/(TP + FN), Specificity =
TN/(TN + FP), Prevalence as a stacked fraction, TP + FN over (TP + FN +
FP + TN)); (3) the FOUR PROPERTY ROWS — Sensitivity (true-positive rate),
Specificity (true-negative rate), Positive predictive value, Negative
predictive value — every definition, formula, mnemonic, and rule line
carried verbatim in the note's table block, including First Aid's OWN red
mnemonics "SN-N-OUT = highly SeNsitive test, when Negative, rules OUT
disease" and "SP-P-IN = highly SPecific test, when Positive, rules IN
disease"; (4) the CUTOFF-VALUE FIGURE (pure vector line art) — two
overlapping distributions (Disease absent LEFT, Disease present RIGHT),
y-axis "Number of people", x-axis "Test results" with cutoffs A/B/C, the
legend "Possible cutoff values for (circled plus) vs (circled minus) test
result / A = 100% sensitivity cutoff value / B = practical compromise
between specificity and sensitivity / C = 100% specificity cutoff value",
the rule lines "Lowering the cutoff value: (up)Sensitivity (up)NPV / B ->
A ((up)FP (down)FN) (down)Specificity (down)PPV" and "Raising the cutoff
value: (up)Specificity (up)PPV / B -> C ((up)FN (down)FP) (down)
Sensitivity (down)NPV", and the Note "In diseases where diagnosis is
based on lower values (eg, anemia), the TP and TN are switched in the
graph, ie, (down) sensitivity and (down) NPV, and vice-versa." Census
(pdfimages): ZERO raster images — pure text, color-shaded grid cells, and
vector curves. VLM AVAILABLE this session (glm-4.6v, TWO passes:
full page at 120dpi + five 200dpi crops, staging-pubh8/vlm-census.txt),
pinning: the 2x2 orientation (Disease = COLUMNS with circled +/- glyphs,
Test = ROWS with circled +/- glyphs; cells pink for TP/FP and light blue
for FN/TN), the figure's geometry (absent curve LEFT / present curve
RIGHT; TN and TP large INSIDE their curves; FN in the A-B stretch and FP
in the B-C stretch, low in the overlap; dashed verticals at A/B/C;
diagonal callout arrows from the curve labels to the peaks), and the rule
lines' FOURTEEN arrows — six true up-arrows printing INLINE, six true
down-arrows, and the two HORIZONTAL B->A / B->C letter-pair arrows.
ADJUDICATIONS (documented in the census file, the note header, and the
manifest notes): (A) the batch brief's arrow content for the two rule
lines matches the print, but the print lays each rule on TWO lines, the
second opening with the letter pair "B -> A" / "B -> C" (horizontal
arrows) — pinned by bbox (the letter pairs + two wide 10.4-pt arrow
glyphs at x 404.6-415.0) + the VLM crop pass; note + visual draw the
two-line print; (B) the brief described the figure's x-axis label as
"vs - test result" (the raw text layer) — the PRINT shows circled pole
glyphs, "Possible cutoff values for (circled plus) vs (circled minus)
test result" (VLM crop pass; the raw layer DROPS the circled plus and
renders the circled minus as an en-dash); carried as printed, raw drop
documented; (C) one early VLM full-page read rendered the anemia Note's
second arrow as up — the TEXT LAYER prints DOWN both times (each
preceded by a \\x90 C1 control byte) and two of three VLM reads agree;
text layer governs: "(down) sensitivity and (down) NPV"; (D) the brief's
stage-setter and four property blocks matched the print exactly — no
correction. Printed quirks carried + documented: the 2x2's two circled
PLUS glyphs (Disease +, Test +) do not extract while its two circled
MINUS glyphs extract as en-dashes (raw grid lines read "Test / Disease /
- / - / TP / FP / FN / TN"); the row headers hyphenate across line wraps
("Sensitivity (true-positive rate)", "Specificity (true-negative rate)")
which the raw layer merges to "(truepositive rate)"/"(truenegative
rate)"; the Sensitivity row header extracts LATE (raw line 162, AFTER
the whole figure) while the Specificity row header extracts in place;
the formula strip's three bottom formulas MERGE onto one raw line with
the stacked-fraction Prevalence numerator "TP + FN" on its own line
above; the cutoff figure's text extracts HEAVILY interleaved — the four
rule lines first (six true up-arrows merged inline), then EIGHT
standalone arrow glyphs (the six true down-arrows AND the two horizontal
B->A/B->C arrows ALL mapping to the 'up-arrow' codepoint — a font/
ToUnicode quirk) interleaved with the axis letters A/B/C, the quadrant
labels FP/FN/TP/TN, "Test results", the legend block, "Disease present"/
"Disease absent", and "Number of people"; C1 control bytes around the
arrows in "high pretest probability -> high PPV" (\\x8e) and the anemia
Note (\\x90 x2); the en-dash prints as the minus in "= 1 - FN rate" /
"= 1 - FP rate"; the fi-ligature in "Specificity"/"specificity"; two
tiny red superscript footnote-style markers (VLM-read as "2") at the
Prevalence box and the Raising rule box with no footnote text printed in
this portion (citation furniture, not carried into the KYP visual).
Nothing is reproduced: the grid + formula strip is an ORIGINAL KYP
ADAPTATION (formula spokes) and the cutoff figure an ORIGINAL_KYP_REDRAW
(KYP vector curves) in ONE registry visual (diagnostic-test-map,
DiagnosticTestMap in visuals/pubhealth-p8.tsx, viewBox 0 0 1102 1384);
the four property rows are additionally carried VERBATIM in the note's
table block. DrugCards: none — the page prints test properties, not
drugs (folded by absence; the clinical layer carries the screening ->
confirmation pipeline, the prevalence dial, and the anemia mirror
instead)."""
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
L = {282: pages[281].split("\n")}
P = {282: norm(pages[281])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "260 (lower)"},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("BOUNDARY + BLOCK 1, the stage-setter — the 'Evaluation of diagnostic tests' navy heading (the pinned page-split's start; the 'Hazard ratio' block above belongs to survival-analysis) and the block's opening sentences: sensitivity and specificity are fixed properties of a test, PPV and NPV vary depending on disease prevalence in population being tested, and Test efficiency = (TP + TN)/(TP + FN + FP + TN)", rng(282, 20, 27), [282]),
    ("BLOCK 2a, the Test x Disease 2x2 GRID in raw extraction order — the rotated 'Test' row-axis label, the 'Disease' column header, the two circled-MINUS glyphs (extracting as en-dashes), and the four cells TP / FP / FN / TN. QUIRK: the print's two circled-PLUS glyphs (Disease +, Test +) DO NOT extract — orientation pinned by pdftotext -bbox (rows Test +/-, columns Disease +/-; TP top-left, FP top-right, FN bottom-left, TN bottom-right) + the VLM crop pass", rng(282, 29, 43), [282]),
    ("BLOCK 2b, the formula strip in raw extraction order — the Sensitivity and Specificity strip labels, the PPV and NPV boxes printed at the grid's right (= TP/(TP + FP), = TN/(TN + FN)), the Prevalence label with its stacked-fraction numerator 'TP + FN' extracting on its own line, and the three bottom formulas MERGED onto one raw line ('= TP/(TP + FN) = TN/(TN + FP) (TP + FN + FP + TN)') — the print lays them side by side with Prevalence as the stacked fraction (TP + FN) over (TP + FN + FP + TN)", rng(282, 45, 57), [282]),
    ("BLOCK 3, row 1 — SENSITIVITY (true-positive rate): proportion of all people with disease who test positive, or the ability of a test to correctly identify those with the disease; value approaching 100% desirable for ruling out disease, low false-negative rate; = TP / (TP + FN) = 1 - FN rate; First Aid's OWN red mnemonic 'SN-N-OUT = highly SeNsitive test, when Negative, rules OUT disease'; High sensitivity test used for screening. QUIRK: this row's header hyphenates across a line wrap in print and extracts LATE (raw line 162, after the whole figure) merged as '(truepositive rate)'", rng(282, 59, 70), [282]),
    ("BLOCK 3, row 2 — SPECIFICITY (true-negative rate; the header hyphenates across a line wrap in print, merging to '(truenegative rate)' in the raw layer): proportion of all people without disease who test negative, or the ability of a test to correctly identify those without the disease; value approaching 100% desirable for ruling in disease, low false-positive rate; = TN / (TN + FP) = 1 - FP rate; First Aid's OWN red mnemonic 'SP-P-IN = highly SPecific test, when Positive, rules IN disease'; High specificity test used for confirmation after a positive screening test", rng(282, 72, 86), [282]),
    ("BLOCK 3, row 3 — POSITIVE PREDICTIVE VALUE: probability that a person who has a positive test result actually has the disease; PPV = TP / (TP + FP); PPV varies directly with pretest probability (baseline risk, such as prevalence of disease): high pretest probability -> high PPV (the arrow extracts preceded by an \\x8e C1 control byte)", rng(282, 88, 97), [282]),
    ("BLOCK 3, row 4 — NEGATIVE PREDICTIVE VALUE: probability that a person with a negative test result actually does not have the disease; NPV = TN / (TN + FN); NPV varies inversely with prevalence or pretest probability", rng(282, 99, 107), [282]),
    ("BLOCKS 4-5, the rule lines part 1 of 3 (raw extraction order) — 'Lowering the cutoff value: ↑ Sensitivity ↑ NPV' with its two true up-arrows merged inline; the second printed line's text 'B A (↑ FP FN)' + 'Speciﬁcity PPV' (the B->A letter pair with its HORIZONTAL arrow and the three DOWN arrows extract as standalone glyphs — see part 2); 'Raising the cutoff value:' + 'B C ( ↑ FN FP)'. The print reads: 'Lowering the cutoff value: ↑ Sensitivity ↑ NPV / B -> A (↑ FP ↓ FN) ↓ Speciﬁcity ↓ PPV' — pinned by bbox + the VLM crop pass", rng(282, 109, 113), [282]),
    ("BLOCKS 4-5, the rule lines part 2 of 3 — '↑ Speciﬁcity ↑ PPV' (Raising line 1, both true up-arrows merged inline) and 'Sensitivity NPV' (Raising line 2's closing words). The print reads: 'Raising the cutoff value: ↑ Speciﬁcity ↑ PPV / B -> C (↑ FN ↓ FP) ↓ Sensitivity ↓ NPV'", rng(282, 115, 116), [282]),
    ("BLOCKS 4-5, the cutoff FIGURE part 3 of 3 (raw extraction order, heavily interleaved) — EIGHT standalone '↑' glyphs (the six true DOWN arrows of the rule lines AND the two HORIZONTAL B->A / B->C letter-pair arrows — ALL mapping to the '↑' codepoint in the text layer, a font/ToUnicode quirk; directions pinned by the 200dpi VLM crop pass) interleaved with the axis letters C / B / A, the quadrant labels FP / FN / TP / TN, and the x-axis title 'Test results'", rng(282, 118, 142), [282]),
    ("The figure LEGEND (raw order) — the title line 'Possible cutoff values for' / 'vs – test result' (the print shows CIRCLED pole glyphs: 'Possible cutoff values for (circled plus) vs (circled minus) test result' — the raw layer DROPS the circled plus and renders the circled minus as an en-dash; VLM crop pass) and the three legend lines A = 100% sensitivity cutoff value, B = practical compromise between speciﬁcity and sensitivity, C = 100% speciﬁcity cutoff value", rng(282, 144, 148), [282]),
    ("The figure's remaining labels (raw order) — two more standalone '↑' glyphs, the curve labels 'Disease present' (the RIGHT curve) and 'Disease absent' (the LEFT curve), and the rotated y-axis label 'Number of people'", rng(282, 150, 160), [282]),
    ("The LATE-extracted Sensitivity row header 'Sensitivity (truepositive rate)' (a content-stream order quirk — this row label extracts AFTER the entire cutoff figure; the print hyphenates it across a line wrap) and the printed anemia Note: 'In diseases where diagnosis is based on lower values (eg, anemia), the TP and TN are switched in the graph, ie, ↓ sensitivity and ↓ NPV, and vice-versa.' (both down-arrows print for real, each preceded by an \\x90 C1 control byte — text layer + 2 of 3 VLM reads; an early full-page read misrendering the second arrow as up was adjudicated to the text layer)", rng(282, 162, 164), [282]),
    ("Page identity — the indd footer slug and print timestamp (book 260, the pinned lower-portion boundary runs to the page footer)", rng(282, 166, 168), [282]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"diagnostic-test-performance: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "diagnostic-test-performance", "title": "Sensitivity, Specificity, and Predictive Values",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [282], "bookPages": "260 (lower)"},
    "sourceEvidence": kept, "visualIds": ["diagnostic-test-map"],
    "mechanismIds": ["fixed-vs-prevalence-map", "cutoff-tradeoff-map"],
    "kypExtensions": [
        {"id": "fixed-vs-floating-architecture",
         "summary": "The two-tier reading of the printed page: the six grid quantities split into a FIXED pair (sensitivity = TP/(TP+FN) = 1 - FN rate and specificity = TN/(TN+FP) = 1 - FP rate, each reading DOWN a disease column — properties of the test alone) and a FLOATING pair (PPV = TP/(TP+FP) and NPV = TN/(TN+FN), each reading ACROSS a test row — PPV varying directly with pretest probability, NPV inversely), plus the prevalence dial (prevalence = the Disease + column over everyone; test efficiency = TP+TN over everyone, itself prevalence-sensitive) and the denominator-axis rule 'DISEASE COLUMNS, TEST ROWS'.",
         "origin": "outside-first-aid", "rationale": "The source prints the fixed/floating sentence, the six formulas, and the two variation lines, but never organizes them by grid axis (which formula reads which row/column) nor frames prevalence as the dial that re-mixes the rows while the columns hold; the two-tier architecture and the axis rule are KYP's synthesis.",
         "location": "core (what/why/keyIdea MOVE 2) + mechanisms[0] fixed-vs-prevalence-map + blocks[3] the decoder list + blocks[5] the fixed-vs-floating compare block + the registry visual's Zone A spokes and stage-setter strip"},
        {"id": "cutoff-tradeoff-decoder",
         "summary": "The A/B/C geography decoder for the printed cutoff figure: A = 100% sensitivity cutoff value (everything right of A called positive — no diseased person missed, the absent curve's right side swept in as FP), B = the practical compromise at the curves' crossing (FN in the A-B stretch under the present curve's left tail, FP in the B-C stretch under the absent curve's right tail), C = 100% specificity cutoff value (the present curve's left tail abandoned as FN); the printed two-line price list for each move (lowering B -> A: up-Sensitivity up-NPV (up-FP down-FN) down-Specificity down-PPV; raising B -> C: up-Specificity up-PPV (up-FN down-FP) down-Sensitivity down-NPV); and the KYP mirror reading of the printed anemia Note (diseases diagnosed by LOWER values flip the axis geography — ask which direction is positive before applying cutoff logic).",
         "origin": "outside-first-aid", "rationale": "The source prints the figure, the legend, the two rule lines, and the anemia Note; the region-by-region decoding (what each cutoff does to each cell of the 2x2), the screening/confirmation posture framing of the two moves, and the step-by-step mirror explanation of the Note are KYP's.",
         "location": "mechanisms[1] cutoff-tradeoff-map + core.keyIdea MOVES 3-4 + blocks[4] the worked five-step protocol + usmle.pivots[2] + the registry visual's Zone B rule bands and anemia box"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the low-prevalence PPV computation; the fixed-vs-floating population move; the SN-N-OUT negative-result stem; the lowered-cutoff stem), 4 traps (sensitivity vs PPV denominators; fixed vs floating families; SN-N-OUT vs SP-P-IN swapped grammar; specificity vs NPV), 3 pivots (the which-value-does-not-change router; the complement-formula blank '= 1 - FN rate'; the lowering-vs-raising arrow sets with the anemia mirror), and an 8-card recall set; the miniCase is the 0.5%-prevalence national screening program with five options (PPV falls while Se/Sp hold — correct; sensitivity falls with rare disease; NPV-varies-directly swap; one-step confirmation misuse; test-efficiency-is-fixed), each with why-wrong.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the definitions and rules only; the attack structure, the worked vignettes, the distractor designs, and the five-option miniCase are KYP's.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: First Aid's OWN two mnemonics — 'SN-N-OUT = highly SeNsitive test, when Negative, rules OUT disease' (Sensitivity row) and 'SP-P-IN = highly SPecific test, when Positive, rules IN disease' (Specificity row), both printed in RED (VLM-confirmed in both passes) — carried VERBATIM and ATTRIBUTED in the mnemonics array, the memory callout, the verbatim table block, and the visual's Zone C cards; plus TWO KYP originals, marked as such: 'DISEASE COLUMNS, TEST ROWS' (the denominator-axis rule) and 'LOWER THE BAR, WIDER THE NET' (the cutoff trade-off's screening posture).",
         "origin": "outside-first-aid", "rationale": "The two red mnemonics are the source's own (attributed, not counted as KYP's); no margin mnemonic prints anywhere on the lower portion (pdfimages + VLM census, staging-pubh8/vlm-census.txt); the two ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + blocks[7] the memory callout + the registry visual's Zone C cards"},
        {"id": "worked-numbers-and-pipeline-layer",
         "summary": "The clinical anchor layer: the screening -> confirmation pipeline (high-Se screen per 'High sensitivity test used for screening' with negatives ruling out via SN-N-OUT; positives sent to the high-Sp confirm per 'High specificity test used for confirmation after a positive screening test' with SP-P-IN licensing the diagnosis — the two-step serology example flagged as KYP context, not printed), the bedside prevalence dial (same positive result, different meaning in screening vs referral settings), the worked 2%/20% prevalence computation pair (all numbers KYP: at Se 90%/Sp 95%, PPV 18/67 ~ 27% vs 180/220 ~ 82%, NPV ~ 99.8% vs ~ 97.4%), and the boundary framing (the next page opens the ROC curve — every cutoff at once).",
         "origin": "outside-first-aid", "rationale": "The deployment lines and variation rules are printed (FA-own); the pipeline choreography, the bedside framing, every worked number, and the boundary framing are KYP's design, flagged as such.",
         "location": "clinical block + blocks[4] the worked steps block + usmle.patterns[0-1] + the registry visual's Zone C pipelines"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "PINNED PAGE-SPLIT (the p252 pharmacology convention): pdf 282 / book 260 is split between two topics — the LOWER portion (raw lines 20-168, from the 'Evaluation of diagnostic tests' navy heading to the footer slug) is THIS topic; the upper portion (raw lines 9-18, the 'Hazard ratio' block with its Kaplan-Meier slope rules) belongs to survival-analysis (pubh7, same batch). EVERY evidence quote in this manifest is a contiguous span of raw lines 20-168 — none crosses the boundary. The lower portion carries FIVE blocks, all owned: (1) the stage-setter ('Sensitivity and specificity are fixed properties of a test. PPV and NPV vary depending on disease prevalence in population being tested. Test efficiency = (TP + TN)/(TP + FN + FP + TN)'); (2) the Test x Disease 2x2 grid with its PPV/NPV boxes and formula strip (Sensitivity = TP/(TP + FN), Specificity = TN/(TN + FP), Prevalence as the stacked fraction (TP + FN) over (TP + FN + FP + TN)); (3) the four property rows — Sensitivity (true-positive rate), Specificity (true-negative rate), Positive predictive value, Negative predictive value — carried VERBATIM in the note's table blocks (blocks[1] the grid, blocks[2] the four rows); (4) the cutoff-value figure (two overlapping distributions, cutoffs A/B/C, the legend, and the two rule lines); (5) the printed anemia Note. CENSUS (pdfimages): ZERO raster images; VLM WAS AVAILABLE this session (glm-4.6v, TWO passes — full page at 120dpi + five 200dpi crops of the rule boxes, legend, grid, curves plot, and Note line, staging-pubh8/vlm-census.txt), confirming the verbatim content of all five blocks and pinning: the 2x2 orientation (Disease = COLUMNS, Test = ROWS, circled +/- glyphs on BOTH axes; TP top-left, FP top-right, FN bottom-left, TN bottom-right; pink TP/FP cells, light-blue FN/TN cells); the figure's geometry (Disease absent curve LEFT, Disease present RIGHT; TN and TP large inside their curves; FN in the A-B stretch, FP in the B-C stretch, both low in the overlap; dashed verticals at A/B/C; diagonal callout arrows from the curve labels to the peaks); the rule lines' fourteen arrows (six true up-arrows inline; six true down-arrows; the two HORIZONTAL B->A / B->C letter-pair arrows; all single-headed); and the absence of margin mnemonics, asterisk footnotes, and images (two tiny red superscript footnote-style markers at the Prevalence box and the Raising rule box carry no footnote text in this portion — citation furniture, documented, not reproduced). First Aid's OWN mnemonics print in RED in the right column — 'SN-N-OUT = highly SeNsitive test, when Negative, rules OUT disease' (Sensitivity row) and 'SP-P-IN = highly SPecific test, when Positive, rules IN disease' (Specificity row) — carried VERBATIM and ATTRIBUTED (not counted among the KYP mnemonics). ADJUDICATIONS (all documented in the note header + census file): (A) the two rule lines print on TWO lines each, the second opening with the letter pair 'B -> A' / 'B -> C' with HORIZONTAL arrows — the batch brief's single-line arrow content was correct in substance but the print's two-line layout and letter-pair prefixes are pinned by bbox (two wide 10.4-pt arrow glyphs at x 404.6-415.0, y 661.5/687.7) + the VLM crop pass, and are drawn as printed; (B) the figure's x-axis/legend title prints 'Possible cutoff values for (circled plus) vs (circled minus) test result' — the raw text layer DROPS the circled plus and renders the circled minus as an en-dash (raw: 'Possible cutoff values for / vs - test result'); the brief described the raw form; carried as printed with the drop documented; (C) the anemia Note's two arrows both print DOWN (each with an \\x90 C1 byte in the raw layer; two of three VLM reads agree; one early full-page read misrendered the second as up) — text layer governs: 'down sensitivity and down NPV'; (D) the stage-setter and the four property rows matched the brief's expectation exactly — no correction. QUIRKS carried + documented: the grid's two circled-PLUS glyphs do not extract (its two circled-MINUS glyphs extract as en-dashes — the raw grid reads 'Test / Disease / - / - / TP / FP / FN / TN'); the row headers hyphenate across line wraps ('Sensitivity (true-positive rate)', 'Specificity (true-negative rate)') and merge in the raw layer to '(truepositive rate)'/'(truenegative rate)'; the Sensitivity row header extracts LATE (raw line 162, after the whole figure — a content-stream order quirk; the Specificity row header extracts in place); the formula strip's three bottom formulas merge onto one raw line with the Prevalence numerator 'TP + FN' on its own line above (stacked fraction); the cutoff figure's text extracts HEAVILY interleaved — the four rule lines first (six true up-arrows merged inline), then EIGHT standalone arrow glyphs (the six true down-arrows AND the two horizontal letter-pair arrows ALL mapping to the 'up-arrow' codepoint — a font/ToUnicode quirk) interleaved with the axis letters, the quadrant labels, 'Test results', the legend, the curve labels, 'Number of people', and the late row header; C1 control bytes around the arrows ('\\x8e ->' in the PPV row, '\\x90 down' x2 in the Note — the Note's arrows are the only ones extracting with their true direction); the en-dash prints as the minus in '= 1 - FN rate'/'= 1 - FP rate'; the fi-ligature in 'Specificity'/'specificity' as extracted. Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (fixed-vs-prevalence-map, cutoff-tradeoff-map), a visual block + TWO verbatim table blocks (the grid + formula strip; the four property rows) + decoder list + worked steps block + compare block + exam callout + memory callout, a clinical block (the screening->confirmation pipeline, the bedside prevalence dial, cutoff-A posture, the anemia mirror), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (likelihood-ratios, quantifying-risk, roc-precision-accuracy, incidence-prevalence — all four are public-health census topicIds), 4 crossLinks, 4 mnemonics (First Aid's own two carried attributed + two KYP originals marked), and a miniCase with 5 options (exactly 1 correct, why/whyWrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints test properties, not drugs — no mechanisms/uses/adverse effects to trace, so the DrugCard shape does not fit; the clinical layer carries the pipeline and dial framing instead; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete'; the per-record INVENTORY productionStatus is 'complete'; (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh8/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'diagnostic-test-map' is therefore not yet in visuals/registry.tsx by design); (5) the portion's TWO visual assets are implemented in ONE registry visual (diagnostic-test-map, DiagnosticTestMap in visuals/pubhealth-p8.tsx, viewBox 0 0 1102 1384): the grid + formula strip as an ORIGINAL KYP ADAPTATION (Zone A — the 2x2 with drawn circled pole glyphs and color-coded cells, six formula spokes keyed blue=fixed-column / amber=floating-row / dashed=whole-grid, and the stage-setter strip) and the cutoff figure as an ORIGINAL_KYP_REDRAW (Zone B — KYP vector bell curves, dashed cutoffs A/B/C, the four quadrant labels, the legend with drawn pole glyphs, the two rule bands with all fourteen arrows as printed, and the anemia note box; Zone C adds the SN-N-OUT / SP-P-IN screening-vs-confirmation cards with the pipelines) — with the four property rows' full text ALSO carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Epidemiology and Biostatistics",
    "topicId": "diagnostic-test-performance", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "diagnostic-test-performance-sv1",
        "sourcePages": {"part": 1, "pdfPages": [282], "bookPages": "260 (lower)"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Test x Disease 2x2 grid with its formula strip (book 260 lower): rows Test + / Test - and columns Disease + / Disease - with the cells TP / FP / FN / TN, the PPV and NPV formula boxes at the grid's right, and the strip beneath (Sensitivity = TP/(TP + FN), Specificity = TN/(TN + FP), Prevalence as a stacked fraction) — the arithmetic backbone of every diagnostic-test quantity",
        "sourceFigureDescription": "COLOR-SHADED TABLE GRID, no raster (pdfimages: zero raster images; VLM-read in two passes — 120dpi full page + 200dpi grid crop, staging-pubh8/vlm-census.txt — VLM available this session): the rotated 'Test' row-axis label at left and the 'Disease' column header on top, BOTH axes carrying circled pole glyphs (circled-plus over the Disease + column and beside the Test + row; circled-minus over the Disease - column and beside the Test - row); four shaded cells — TP (top-left) and FP (top-right) pink/salmon, FN (bottom-left) and TN (bottom-right) light blue; to the grid's right, the formula boxes 'PPV' / '= TP/(TP + FP)' and 'NPV' / '= TN/(TN + FN)'; beneath, the formula strip 'Sensitivity = TP/(TP + FN)', 'Specificity = TN/(TN + FP)', and 'Prevalence' printed as a STACKED FRACTION with 'TP + FN' above the bar and '(TP + FN + FP + TN)' below; two tiny red superscript footnote-style markers (VLM-read as '2') at the Prevalence box (and at the Raising rule box — see sv2) with no footnote text printed in this portion. TEXT-LAYER QUIRKS: the two circled-PLUS glyphs do not extract while the two circled-MINUS glyphs extract as en-dashes (raw grid lines read 'Test / Disease / - / - / TP / FP / FN / TN'); the three bottom formulas merge onto one raw line with the Prevalence numerator on its own line above; orientation pinned by pdftotext -bbox + the VLM grid crop.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "diagnostic-test-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A of the registry visual (DiagnosticTestMap in visuals/pubhealth-p8.tsx): the 2x2 re-laid-out with DRAWN circled pole glyphs on both axes (matching the print's circled symbols), color-coded cells (pink Test + row, blue Test - row), the row/column headers, and SIX formula spokes keyed by border color — blue = reads a disease COLUMN (Sensitivity, Specificity: the FIXED pair, each with its '= 1 - FN/FP rate' complement), amber = reads a TEST ROW (PPV, NPV: the FLOATING pair with the printed variation lines), dashed = whole-grid reads (Prevalence stacked fraction, Test efficiency) — plus the stage-setter strip carrying the block's opening sentences verbatim; the grid and formulas are ALSO carried verbatim in the note's table block (blocks[1]), core.what, the decoder list (blocks[3]), and recall",
        "productionStatus": "complete",
        "plannedKypVisualId": "diagnostic-test-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "diagnostic-test-performance-sv2",
        "sourcePages": {"part": 1, "pdfPages": [282], "bookPages": "260 (lower)"},
        "visualType": "COMPARISON_FIGURE",
        "visualPurpose": "The cutoff-value figure (book 260 lower): two overlapping distributions — Disease absent (left) vs Disease present (right) — with y-axis 'Number of people', x-axis 'Test results', the three cutoffs A / B / C (A = 100% sensitivity, B = practical compromise, C = 100% specificity), the four quadrant labels TN / FN / FP / TP, the two lowering/raising rule lines with their fourteen arrows, and the printed anemia Note; the page's visual grammar for the sensitivity-specificity trade-off",
        "sourceFigureDescription": "PURE VECTOR LINE ART, no raster (pdfimages: zero raster images; geometry pinned by pdftotext -bbox coordinates + pdftotext -layout + TWO VLM passes — 120dpi full page + 200dpi crops of the rule boxes, legend, curves plot, and Note line, staging-pubh8/vlm-census.txt — VLM available this session): a plot with the rotated y-axis label 'Number of people' at left, the x-axis title 'Test results' at bottom, and TWO OVERLAPPING DISTRIBUTIONS — the Disease absent curve (blue, shaded) on the LEFT with its label at top-left and a diagonal callout arrow down-right to its peak, the Disease present curve (red/pink, shaded) on the RIGHT with its label at top-right and a diagonal callout arrow down-left to its peak; three vertical dashed lines at the cutoff letters A (left, under the absent curve's right shoulder), B (middle, at the curves' crossing), C (right, under the present curve's left shoulder) printed along the baseline; quadrant labels TN (large, blue, inside the left curve) and TP (large, red, inside the right curve), with FN (small, red, in the A-B stretch) and FP (small, blue, in the B-C stretch) low in the overlap; at the right, the legend block titled 'Possible cutoff values for (circled plus) vs (circled minus) test result' with the lines 'A = 100% sensitivity cutoff value', 'B = practical compromise between specificity and sensitivity', 'C = 100% specificity cutoff value'; below it TWO RULE LINES, each printed on TWO lines — 'Lowering the cutoff value: up-Sensitivity up-NPV / B -> A (up-FP down-FN) down-Specificity down-PPV' and 'Raising the cutoff value: up-Specificity up-PPV / B -> C (up-FN down-FP) down-Sensitivity down-NPV' — with FOURTEEN single-headed arrows: six true up-arrows (inline before Sensitivity/NPV, FP, Specificity/PPV, FN), six true down-arrows (before FN), Specificity, PPV; before FP), Sensitivity, NPV), and two HORIZONTAL B->A / B->C letter-pair arrows; and the bottom Note line 'Note: In diseases where diagnosis is based on lower values (eg, anemia), the TP and TN are switched in the graph, ie, down sensitivity and down NPV, and vice-versa.' (both down-arrows print, each preceded by an x90 C1 control byte in the text layer). TEXT-LAYER QUIRKS: the figure's text extracts HEAVILY interleaved — the four rule lines first (six true up-arrows merged inline), then EIGHT standalone arrow glyphs (the six true down-arrows AND the two horizontal letter-pair arrows ALL mapping to the 'up-arrow' codepoint — a font/ToUnicode quirk) interleaved with the axis letters A/B/C, the quadrant labels FP/FN/TP/TN, 'Test results', the legend, the curve labels, and 'Number of people'; the legend title's circled-plus DROPS from the raw layer and its circled-minus extracts as an en-dash; the Sensitivity row header extracts late after the whole figure. Direction and layout pinned by bbox coordinates + the 200dpi VLM crop pass.",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "diagnostic-test-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone B of the registry visual (DiagnosticTestMap in visuals/pubhealth-p8.tsx): the two distributions rebuilt as KYP vector bell curves (absent LEFT in blue, present RIGHT in red, shaded fills, diagonal callout arrows to the peaks), the y/x axes with 'Number of people' and 'Test results', dashed verticals at A/B/C with the letters on the baseline, TN/TP large inside their curves and FN/FP small and low in the A-B / B-C stretches (all as pinned), the legend block with DRAWN circled pole glyphs and the three A/B/C lines verbatim, the two rule bands carrying the printed two-line rules with all fourteen arrows (the horizontal B -> A / B -> C letter pairs drawn as printed) plus KYP posture tags, the anemia note box with the printed Note verbatim and the KYP mirror reading, and a marked KYP axis-polarity annotation; the figure's semantics are also carried in mechanisms[1] cutoff-tradeoff-map, blocks[4] the worked steps block, usmle.pivots, and recall; Zone C completes the story with the SN-N-OUT / SP-P-IN screening-vs-confirmation cards (First Aid's mnemonics attributed)",
        "productionStatus": "complete",
        "plannedKypVisualId": "diagnostic-test-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh8"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "diagnostic-test-performance.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "diagnostic-test-performance.json").write_text(
    json.dumps({"topicId": "diagnostic-test-performance", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "diagnostic-test-performance", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The pinned lower portion of book 260 carries TWO visual assets — the Test x Disease 2x2 grid with its formula strip (sv1: rows Test +/-, columns Disease +/-, cells TP/FP/FN/TN, the PPV/NPV boxes at the grid's right, Sensitivity/Specificity formulas and the stacked-fraction Prevalence beneath) and the cutoff-value figure (sv2: two overlapping distributions with cutoffs A/B/C, the four quadrant labels, the legend, the two lowering/raising rule lines, and the anemia Note) — both accounted for in ONE registry visual (diagnostic-test-map, DiagnosticTestMap in visuals/pubhealth-p8.tsx, viewBox 0 0 1102 1384): the grid + formula strip as an ORIGINAL KYP ADAPTATION (Zone A — drawn circled pole glyphs, color-coded cells, six formula spokes keyed fixed-column / floating-row / whole-grid, the stage-setter strip) and the cutoff figure as an ORIGINAL_KYP_REDRAW (Zone B — KYP vector bell curves, dashed cutoffs, the legend with drawn pole glyphs, the two rule bands with all fourteen printed arrows including the horizontal B -> A / B -> C letter pairs, and the anemia note box; Zone C adds the SN-N-OUT / SP-P-IN screening-vs-confirmation cards with First Aid's two red mnemonics attributed); nothing is reproduced, and the four property rows' full text is additionally carried verbatim in the note's table block. Census: zero raster images (pdfimages); VLM available this session — TWO passes (120dpi full page + five 200dpi crops, vlm-census.txt) pinned the grid orientation and shading, the figure's geometry, the rule lines' fourteen arrow directions (six up inline, six down, two horizontal letter-pair arrows — the raw layer maps all eight off-baseline arrows to the 'up-arrow' codepoint), the circled pole glyphs of the legend title ('Possible cutoff values for (circled plus) vs (circled minus) test result' — raw drops the plus, reads the minus as an en-dash), and the anemia Note's two down-arrows (text layer + 2 of 3 reads; one early misread adjudicated to the text layer). PINNED PAGE-SPLIT: the upper 'Hazard ratio' block of the same pdf page belongs to survival-analysis (pubh7) — every quote here stays inside raw lines 20-168. STAGED under .usmle-pipeline-cache/staging-pubh8/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH8 manifest + inventory staged: {OUT}/manifests/diagnostic-test-performance.json, {OUT}/visual-inventory/diagnostic-test-performance.json")
print(f"diagnostic-test-performance: evidence {len(kept)}/{len(E1)} verified")
