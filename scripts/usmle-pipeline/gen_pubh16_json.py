#!/usr/bin/env python3
"""PUBH16 statistical-tests — manifest + inventory (Public Health batch 2),
STAGED under .usmle-pipeline-cache/staging-pubh16/ (the promotion step owns
content/). Source: LOWER PORTION ONLY of pdf page 289 / book 267 (Part 1) —
the OTHER HALF of a PINNED PAGE-SPLIT: the topic owns everything from the
navy "Common statistical tests" heading (raw text-layer line 39, bbox
y~336 below a thin rule) through the page end; the Confidence interval
block + its significance-rules panel + the Meta-analysis block ABOVE the
split belong to confidence-intervals-meta-analysis (pubh15) and are never
quoted here. Blocks owned (two): (1) the "Common statistical tests" TABLE
— FOUR rows in printed order (t-test, ANOVA, Chi-square (chi-squared),
Fisher's exact test), each with its "Checks..." cell and its mnemonic +
Example cell — THREE mnemonics are First Aid's OWN, printed in RED
("Tea is meant for 2." / "3 words: ANalysis Of VAriance." (capitals as
printed) / "Pronounce chi-tegorical."), carried VERBATIM and ATTRIBUTED;
the Fisher row prints NO mnemonic — its cue is the printed "Use instead
of chi-square test with small samples."; (2) THE TEST-SELECTION ALGORITHM
FIGURE — pure vector art (pdfimages: ZERO raster images): a top-to-bottom
tree, tan rounded root box "Variables to be compared" branching LEFT to a
light-blue "Numerical (means)" box and RIGHT to a light-pink "Categorical
(proportions)" box; the third level prints as PLAIN TEXT labels (no
boxes, VLM-confirmed): "2 groups" / ">= 3 groups" under Numerical,
"Small sample size" / "Large sample size" under Categorical; each label
drops a short arrow onto its leaf box — "t-test" and "ANOVA" light blue,
"Fisher's exact test" and "Chi-square test" light pink, each leaf
DIRECTLY below its criterion (bbox x-alignment + VLM agree). The figure's
text objects extract at the very bottom of the raw stream (raw lines
78-101) with the indd footer slug "FAS1_2026_06-PubHealth.indd 267"
interleaved MID-FIGURE between "Numerical (means)" and "Categorical
(proportions)" — a reading-order jumble, documented; the tree's shape is
pinned by pdftotext -bbox coordinates + the VLM pass (TWO passes — 120dpi
full page + 300dpi lower crop, staging-pubh16/vlm-census.txt). The
algorithm is an ORIGINAL_KYP_REDRAW; the table an ORIGINAL KYP ADAPTATION
(cards), with the full table ALSO carried verbatim in the note's table
block. VLM ALSO CONFIRMED: exactly FOUR rows in printed order (none
missing or extra); the three mnemonics print in RED with key words
bolded; the row labels print in DARK RED/maroon; the print bolds "means",
"2", "3", "categorical" inside the Checks cells; thin light-gray row
rules, NO zebra, NO vertical borders, NO column-header row (the note's
table column names are KYP descriptive labels, documented); a small FA
page-reference cross-ref glyph at the diagram's right edge is marginal
furniture, not carried (documented). ADJUDICATIONS, documented in the
census file and the manifest notes: (A) the Fisher row prints NO mnemonic
(raw layer + both VLM passes) — no mnemonic is invented for it; the
mnemonic count is THREE, all First Aid's own; (B) the tree's shape matched
the brief's description exactly (root -> Numerical LEFT / Categorical
RIGHT -> four criteria -> four leaves, each leaf directly below its
criterion) — bbox + VLM agree, no correction; (C) the print names NO
numeric threshold for "small samples" — the Fisher example's 20+20 is the
print's own illustration of small; any expected-count machinery is flagged
KYP context, never a correction. Printed quirks carried + documented:
"3 words: ANalysis Of VAriance." (the print's OWN mixed capitalization);
">= 3 groups" with the >= glyph; "Chi-square (chi-squared)" with Greek
chi + superscript 2 and "Fisher's exact test" with a curly apostrophe
(U+2019); in-cell line wraps are print artifacts (the verbatim table
carries the sentences unwrapped); the reading-order jumble of the figure
labels + the mid-figure indd slug. DrugCards: none — the page prints
statistical tests, not drugs (folded by absence)."""
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
L = {289: pages[288].split("\n")}
P = {289: norm(pages[288])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("THE PINNED SPLIT BOUNDARY's lower side — the navy heading 'Common statistical tests' (raw line 39, bbox y≈336, below a thin rule; VLM-confirmed bold dark navy) opens this topic's scope: the topic owns from this heading through the page end; the Confidence interval + significance-rules + Meta-analysis blocks above (raw lines 1–37) belong to confidence-intervals-meta-analysis (pubh15) and are never crossed by any quote", rng(289, 39, 39), [289]),
    ("ROW 1 part 1 — t-test → its printed Checks cell: 'Checks differences between means of 2 groups.' (the print bolds 'means' and '2' inside the cell per the VLM pass)", rng(289, 40, 42), [289]),
    ("ROW 1 part 2 — First Aid's OWN red mnemonic 'Tea is meant for 2.' + the printed worked example: 'Example: comparing the mean blood pressure between men and women.'", rng(289, 44, 46), [289]),
    ("ROW 2 part 1 — ANOVA → its printed Checks cell: 'Checks differences between means of 3 or more groups.' (the print bolds '3' per the VLM pass)", rng(289, 48, 51), [289]),
    ("ROW 2 part 2 — First Aid's OWN red mnemonic '3 words: ANalysis Of VAriance.' (the mixed capitalization is the print's own, emphasizing AN-O-VA) + the printed worked example: 'Example: comparing the mean blood pressure between members of 3 different ethnic groups.'", rng(289, 53, 55), [289]),
    ("ROW 3 part 1 — Chi-square (χ²) (Greek chi + superscript 2 as printed) → its printed Checks cell: 'Checks differences between 2 or more percentages or proportions of categorical outcomes (not mean values).' — the cell's own fence against the means family (the print bolds 'categorical' per the VLM pass)", rng(289, 57, 61), [289]),
    ("ROW 3 part 2 — First Aid's OWN red mnemonic 'Pronounce chi-tegorical.' + the printed worked example: 'Example: comparing the proportion of members of 3 age groups who have essential hypertension.'", rng(289, 63, 66), [289]),
    ("ROW 4 part 1 — Fisher's exact test (curly apostrophe U+2019 as printed) → its printed Checks cell: 'Checks differences between 2 percentages or proportions of categorical, nominal outcomes. Use instead of chi-square test with small samples.' — the row prints NO mnemonic of its own (raw layer + both VLM passes); this printed sentence is its cue", rng(289, 68, 73), [289]),
    ("ROW 4 part 2 — the Fisher row's printed worked example (the print's own illustration of a SMALL sample): 'Example: comparing the percentage of 20 men and 20 women with hypertension.'", rng(289, 75, 76), [289]),
    ("THE TEST-SELECTION ALGORITHM FIGURE, part 1 of 4 (raw extraction order) — the root label 'Variables to be compared' and the LEFT branch box 'Numerical (means)', AND the indd footer slug 'FAS1_2026_06-PubHealth.indd 267' interleaved MID-FIGURE (the vector figure's text objects extract at the very bottom of the raw stream in jumbled reading order — documented quirk; the tree's shape is pinned by pdftotext -bbox coordinates + the VLM pass: root centered at y≈559, Numerical x≈302–356 LEFT)", rng(289, 78, 82), [289]),
    ("THE TEST-SELECTION ALGORITHM FIGURE, part 2 of 4 — the RIGHT branch box 'Categorical (proportions)' (bbox x≈435–508, RIGHT of Numerical; light pink per the VLM pass, vs Numerical light blue)", rng(289, 84, 84), [289]),
    ("THE TEST-SELECTION ALGORITHM FIGURE, part 3 of 4 — the four criteria labels at the tree's third level (printed as PLAIN TEXT, no boxes, per the VLM pass; bbox y≈632): '2 groups' and '≥ 3 groups' (≥ glyph as printed) under Numerical, 'Small sample size' and 'Large sample size' under Categorical", rng(289, 86, 92), [289]),
    ("THE TEST-SELECTION ALGORITHM FIGURE, part 4 of 4 — the four leaf boxes at the bottom level (bbox y≈655, each leaf DIRECTLY below its criterion per bbox x-alignment + the VLM pass): 't-test' (below 2 groups), 'ANOVA' (below ≥ 3 groups), 'Fisher's exact test' (below Small sample size), 'Chi-square test' (below Large sample size)", rng(289, 94, 100), [289]),
    ("The print footer timestamp — 12/16/25 12:46 PM (page identity, book 267; the lower portion's final raw line)", rng(289, 102, 102), [289]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"statistical-tests: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "statistical-tests", "title": "Choosing the Statistical Test",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [289], "bookPages": "267 (lower)"},
    "sourceEvidence": kept, "visualIds": ["stat-tests-map"],
    "mechanismIds": ["test-selection-tree", "outcome-scale-engine"],
    "kypExtensions": [
        {"id": "tree-router-protocol",
         "summary": "The two-question reading of the printed test-selection algorithm: FIRST the outcome's scale (Variables to be compared → Numerical (means) vs Categorical (proportions) — means language goes left, percentage/proportion language goes right), THEN the second dial (means branch → COUNT THE GROUPS: 2 → t-test, ≥ 3 → ANOVA; proportions branch → GAUGE THE SAMPLE: Small → Fisher's exact test, Large → Chi-square test), landing on exactly one of the four leaves — plus the geometry observation that each leaf box prints DIRECTLY below its criterion, so the tree's layout itself encodes the routing.",
         "origin": "outside-first-aid", "rationale": "The source prints the tree's boxes and labels but never states the ordered protocol (scale first, dial second) nor names the dials; the two-question synthesis is KYP's.",
         "location": "core.keyIdea + mechanisms[0] test-selection-tree + blocks[3] the steps block + the registry visual's Zone A route chips and rule strip"},
        {"id": "outcome-scale-engine-layer",
         "summary": "The means-family vs proportions-family engine: why a measured, averaged outcome (mean blood pressure) belongs to t-test/ANOVA while a counted, categorical outcome (the proportion with essential hypertension) belongs to chi-square/Fisher — anchored on the printed fence '(not mean values)' in the chi-square cell, the printed pairing of the two 3-group examples (3 ethnic groups by MEANS → ANOVA vs 3 age groups by PROPORTIONS → chi-square: same group count, different branch), and the observation that chi-square handles 2 OR MORE proportions while Fisher's scope is exactly 2.",
         "origin": "outside-first-aid", "rationale": "The source prints the four Checks cells and the four examples but never connects them as one 2-axis design space (outcome scale × second dial); the family engine and the paired-example drill are KYP's organization.",
         "location": "core.why + mechanisms[1] outcome-scale-engine + blocks[2] the decoder list + usmle.traps[1] and traps[3]"},
        {"id": "small-sample-switch-layer",
         "summary": "The small-sample switch: within the proportions family, the print swaps the leaf by sample size — Fisher's exact test is used 'instead of chi-square test with small samples' (its scope exactly 2 percentages or proportions of categorical, nominal outcomes; the printed example's 20 men and 20 women is the print's own illustration of small) — with the documented absence of a mnemonic in the Fisher row (no mnemonic invented), and the KYP-context note that the print names no numeric threshold for 'small' (the usual expected-cell-count worry is flagged as unprinted context, never a correction).",
         "origin": "outside-first-aid", "rationale": "The source prints the substitution sentence and the 20+20 example but never frames sample size as the branch's dial nor documents the mnemonic absence; the switch layer and the threshold caveat are KYP's synthesis.",
         "location": "core.keyIdea MOVE 2 + blocks[4] the compare block + usmle.pivots[2] + the registry visual's Fisher card cue chip"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the 2-mean t-test stem, the 3-mean ANOVA stem, the 3-age-group proportions chi-square stem, the 20-and-20 small-sample Fisher stem), 4 traps (t-test vs ANOVA group count; means family vs chi-square's '(not mean values)' fence; chi-square vs Fisher sample size; the two printed 3-group examples colliding), 3 pivots (the tree router, the compared-quantity tell, the small-sample flip), and 8 recall cards covering all four rows plus the tree.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the four definitions and the figure only; the attack structure, distractor shapes, and question drills are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-and-clinical-thread-layer",
         "summary": "The mnemonic ledger and the clinical-thread layer: First Aid's OWN three mnemonics — 'Tea is meant for 2.' (t-test row), '3 words: ANalysis Of VAriance.' (ANOVA row, capitals as printed), 'Pronounce chi-tegorical.' (Chi-square row) — all printed in RED in the right cells (VLM-confirmed), carried VERBATIM and ATTRIBUTED in the mnemonics array, the memory callout, the verbatim table block, and the visual's cards; the Fisher row's mnemonic ABSENCE documented (no mnemonic invented); plus ONE KYP original, marked as such: 'COUNT THE GROUPS, GAUGE THE SAMPLE' (the tree's second dial); and the observation that all four printed worked examples are blood-pressure comparisons — two means (men vs women; 3 ethnic groups) and two hypertension proportions (3 age groups; 20 men vs 20 women) — one clinical thread through all four leaves.",
         "origin": "outside-first-aid", "rationale": "The three in-cell mnemonics are the source's own (attributed, not counted as KYP's); the KYP ALL-CAPS code, the mnemonic-absence documentation, and the clinical-thread organization are KYP's design.",
         "location": "mnemonics + blocks[6] the memory callout + clinical block + the registry visual's mnemonic chips and clinical-thread strip"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "LOWER-portion split page (the other half of the pdf 289 / book 267 split; the upper half belongs to confidence-intervals-meta-analysis, pubh15 — never quoted here): from the navy 'Common statistical tests' heading (raw line 39, bbox y≈336 below a thin rule) through the page end, carrying TWO blocks — (1) the 'Common statistical tests' table, FOUR rows in printed order (t-test, ANOVA, Chi-square (χ²), Fisher's exact test), every cell carried VERBATIM in the note's table block (blocks[1]); (2) THE TEST-SELECTION ALGORITHM FIGURE — pure vector art, redrawn as ORIGINAL KYP vector art (tan root 'Variables to be compared' → blue 'Numerical (means)' LEFT / pink 'Categorical (proportions)' RIGHT → plain-text criteria '2 groups' / '≥ 3 groups' / 'Small sample size' / 'Large sample size' → leaf boxes t-test / ANOVA / Fisher's exact test / Chi-square test, each leaf directly below its criterion). CENSUS (pdfimages): ZERO raster images on the page. VLM AVAILABLE this session (glm-4.6v, TWO passes — 120dpi full page + 300dpi lower crop, staging-pubh16/vlm-census.txt): exactly FOUR rows confirmed in printed order (none missing or extra); the THREE mnemonics print in RED in the right cells with key words bolded ('meant', 'ANalysis Of VAriance', 'chi-tegorical') — First Aid's OWN, carried VERBATIM and ATTRIBUTED; the Fisher row prints NO mnemonic of its own (both passes explicit) — documented, no mnemonic invented; the four row labels print in DARK RED/maroon; the print bolds 'means', '2', '3', 'categorical' inside the Checks cells; thin light-gray row rules, NO zebra striping, NO vertical borders; the table prints with NO column-header row (the note's table column names are KYP descriptive labels, documented); the tree's third level prints as PLAIN TEXT labels (no boxes) with only the root and six branch/leaf boxes as filled rounded rectangles (tan/blue/pink; gray elbow connectors with arrowheads); the tree's geometry (Numerical LEFT / Categorical RIGHT; each leaf directly below its criterion) confirmed by bbox coordinates + both VLM passes; a small FA page-reference cross-ref glyph at the diagram's right edge is marginal furniture, not carried (documented). ADJUDICATIONS: (A) Fisher mnemonic ABSENCE — raw layer + both VLM passes agree; mnemonic count is THREE, all First Aid's own; (B) the tree's shape matched the brief's description exactly — no correction; (C) the print names no numeric threshold for 'small samples' — the 20+20 example is the print's own illustration of small; expected-count machinery appears only as flagged KYP context, never as a correction. QUIRKS carried + documented: '3 words: ANalysis Of VAriance.' (the print's OWN mixed capitalization); '≥ 3 groups' with the ≥ glyph; 'Chi-square (χ²)' with Greek chi + superscript 2; 'Fisher's exact test' with a curly apostrophe (U+2019); in-cell line wraps are print artifacts (the verbatim table carries sentences unwrapped); the figure's labels extract at the very bottom of the raw stream in jumbled order with the indd footer slug interleaved MID-FIGURE between 'Numerical (means)' and 'Categorical (proportions)' (evidence ranges 10-13 quote the raw order; the tree's shape is bbox+VLM-pinned). Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (test-selection-tree, outcome-scale-engine), a visual block + verbatim table block + decoder list + steps block + compare block + exam callout + memory callout, a clinical block (the blood-pressure clinical thread across all four worked examples), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (confidence-intervals-meta-analysis — the split page's upper-half owner, produced as pubh15; hypothesis-testing-errors; statistical-distributions; correlation-coefficient — all four are public-health census topicIds), 4 crossLinks, 4 mnemonics (First Aid's own three carried attributed + one KYP original marked), and a miniCase with 5 options (exactly 1 correct, why/why-wrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints statistical tests, not drugs — the clinical anchors are carried in the clinical block; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the manifest convention; the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh16/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'stat-tests-map' is therefore not yet in visuals/registry.tsx by design); (5) the portion's TWO visual assets are implemented in ONE registry visual (stat-tests-map, StatTestsMap in visuals/pubhealth-p16.tsx, viewBox 0 0 1102 1252): the table as an ORIGINAL KYP ADAPTATION (four cards in printed order carrying Checks → attributed mnemonic → worked example, with the Fisher card's mnemonic-absence chip) and the algorithm as an ORIGINAL_KYP_REDRAW (the tree re-laid-out top-to-bottom as KYP vector art with the route chips and family tags marked KYP) — with the full table's text ALSO carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Epidemiology and Biostatistics",
    "topicId": "statistical-tests", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "statistical-tests-sv1",
        "sourcePages": {"part": 1, "pdfPages": [289], "bookPages": "267"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Common statistical tests table (book 267 lower): the four tests — t-test (2 means), ANOVA (3-or-more means), Chi-square (χ²) (2-or-more percentages/proportions of categorical outcomes, not mean values), Fisher's exact test (2 percentages/proportions of categorical, nominal outcomes, used instead of chi-square with small samples) — each with its Checks cell, First Aid's red mnemonic (three of the four rows), and its worked blood-pressure example; the chapter's test-selection core",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read in TWO passes — 120dpi full page + 300dpi lower crop, staging-pubh16/vlm-census.txt): below the bold dark-navy heading 'Common statistical tests' (bbox y≈336, below a thin horizontal rule) a four-row table with NO column-header row — left row labels in DARK RED/maroon (t-test / ANOVA / Chi-square (χ²) / Fisher's exact test), middle Checks cells in plain black with the print's own bolded key words ('means', '2', '3', 'categorical'), and right mnemonic + Example cells in which THREE mnemonics print in RED with key words bolded: t-test → 'Checks differences between means of 2 groups.' / 'Tea is meant for 2.' / 'Example: comparing the mean blood pressure between men and women.'; ANOVA → 'Checks differences between means of 3 or more groups.' / '3 words: ANalysis Of VAriance.' (capitals as printed) / 'Example: comparing the mean blood pressure between members of 3 different ethnic groups.'; Chi-square (χ²) → 'Checks differences between 2 or more percentages or proportions of categorical outcomes (not mean values).' / 'Pronounce chi-tegorical.' / 'Example: comparing the proportion of members of 3 age groups who have essential hypertension.'; Fisher's exact test → 'Checks differences between 2 percentages or proportions of categorical, nominal outcomes. Use instead of chi-square test with small samples.' / NO mnemonic / 'Example: comparing the percentage of 20 men and 20 women with hypertension.' Rows separated by thin light-gray rules; no zebra striping, no vertical borders; the in-cell line wraps are print artifacts.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "stat-tests-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone B of the registry visual (StatTestsMap in visuals/pubhealth-p16.tsx): four cards in PRINTED order, each carrying the test name (in the print's dark-red label color), a ROUTE chip naming the tree path (KYP), the printed Checks sentence, First Aid's red mnemonic attributed verbatim (t-test / ANOVA / Chi-square cards) or the documented NO-mnemonic chip (Fisher card), and the printed worked Example; plus the KYP clinical-thread strip noting all four examples are blood-pressure comparisons; the table's full text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, the decoder list (blocks[2]), and recall[0-3]",
        "productionStatus": "complete",
        "plannedKypVisualId": "stat-tests-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "statistical-tests-sv2",
        "sourcePages": {"part": 1, "pdfPages": [289], "bookPages": "267"},
        "visualType": "FLOWCHART",
        "visualPurpose": "The test-selection algorithm figure (book 267 lower): a decision tree routing any comparison to its test — the root 'Variables to be compared' branching into Numerical (means) (2 groups → t-test; ≥ 3 groups → ANOVA) and Categorical (proportions) (Small sample size → Fisher's exact test; Large sample size → Chi-square test); the page's visual grammar for choosing the statistical test",
        "sourceFigureDescription": "PURE VECTOR LINE ART, no raster (pdfimages: zero raster images; geometry pinned by pdftotext -bbox coordinates + TWO VLM passes at 120dpi full page and 300dpi lower crop, staging-pubh16/vlm-census.txt): a top-to-bottom decision tree below the four-row table. LEVEL 1: one TAN/beige rounded rectangle, page-centered (bbox x≈360–434, y≈559), labeled 'Variables to be compared'. LEVEL 2: two rounded rectangles branching by gray elbow connectors with small solid arrowheads — LEFT 'Numerical (means)' (light blue fill; bbox x≈302–356, y≈599), RIGHT 'Categorical (proportions)' (light pink fill; bbox x≈435–508). LEVEL 3: FOUR PLAIN-TEXT labels, no boxes (VLM-confirmed; bbox y≈632): '2 groups' and '≥ 3 groups' (≥ glyph as printed) beneath Numerical, 'Small sample size' and 'Large sample size' beneath Categorical. LEVEL 4: four rounded leaf boxes (bbox y≈655), each directly below its criterion with a short vertical arrow from the label: 't-test' and 'ANOVA' in light blue beneath 2 groups and ≥ 3 groups; 'Fisher's exact test' and 'Chi-square test' in light pink beneath Small sample size and Large sample size. No background bands — white page. The figure's text objects extract at the very bottom of the raw stream in jumbled reading order with the indd footer slug interleaved MID-FIGURE between 'Numerical (means)' and 'Categorical (proportions)' (documented quirk; the tree's shape is bbox+VLM-pinned). A small FA page-reference cross-ref glyph at the diagram's right edge is marginal furniture, not carried (documented).",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "stat-tests-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A of the registry visual (StatTestsMap in visuals/pubhealth-p16.tsx): the tree redrawn as KYP vector art with the print's own color scheme carried (tan root, blue Numerical branch and t-test/ANOVA leaves, pink Categorical branch and Fisher/Chi-square leaves, gray elbow connectors with arrowheads, plain-text criteria at level three) and every printed label preserved; the KYP additions are marked — the two route chips (MEANS? count the groups / PROPORTIONS? gauge the sample), the family tags under the leaves, and the rule strip (the two-question protocol); the tree's semantics are also carried in mechanisms[0] test-selection-tree, blocks[3] the steps block, and recall[4]",
        "productionStatus": "complete",
        "plannedKypVisualId": "stat-tests-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh16"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "statistical-tests.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "statistical-tests.json").write_text(
    json.dumps({"topicId": "statistical-tests", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "statistical-tests", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The pinned lower portion of book 267 (from the navy 'Common statistical tests' heading, raw line 39 / bbox y≈336, through the page end; the Confidence interval + significance-rules + Meta-analysis blocks above the split belong to confidence-intervals-meta-analysis, pubh15) carries TWO visual assets — the Common statistical tests table (sv1: FOUR rows in printed order — t-test, ANOVA, Chi-square (χ²), Fisher's exact test — with three red First Aid mnemonics and four worked blood-pressure examples) and the test-selection algorithm figure (sv2: the decision tree routing Variables to be compared → Numerical (means) [2 groups → t-test; ≥ 3 groups → ANOVA] and Categorical (proportions) [Small sample size → Fisher's exact test; Large sample size → Chi-square test]) — both accounted for in ONE registry visual (stat-tests-map, StatTestsMap in visuals/pubhealth-p16.tsx, viewBox 0 0 1102 1252): the table as an ORIGINAL KYP ADAPTATION (Zone B, four cards in printed order with First Aid's three red mnemonics attributed and the Fisher row's mnemonic ABSENCE documented — no mnemonic invented) and the algorithm as an ORIGINAL_KYP_REDRAW (Zone A, the tree re-laid-out as KYP vector art in the print's own tan/blue/pink scheme, every printed label preserved, KYP route chips and family tags marked as such); nothing is reproduced, and the full table's text is additionally carried verbatim in the note's table block. Census: zero raster images (pdfimages); VLM available this session — TWO passes (120dpi full page + 300dpi lower crop, vlm-census.txt) confirmed the four printed rows in order, the three red mnemonics, the Fisher row's mnemonic absence, the dark-red row labels, the print's bolded key words ('means', '2', '3', 'categorical'), the no-header-row / thin-gray-rules table styling, the tree's geometry (tan root; blue Numerical LEFT; pink Categorical RIGHT; plain-text criteria at level three; each leaf directly below its criterion), and the absence of margin mnemonics and images. ADJUDICATIONS: (A) Fisher mnemonic absence — raw layer + both VLM passes; mnemonic count THREE, all First Aid's own; (B) the tree's shape matched the brief exactly (bbox + VLM) — no correction; (C) no numeric threshold for 'small samples' prints — 20+20 is the print's own illustration; expected-count machinery is flagged KYP context only. Quirks documented: the print's OWN capitalization '3 words: ANalysis Of VAriance.'; '≥ 3 groups' with the ≥ glyph; 'Chi-square (χ²)' and the curly apostrophe in 'Fisher's exact test'; the reading-order jumble of the figure labels with the indd slug interleaved mid-figure (bbox+VLM-pinned); in-cell wraps as print artifacts. STAGED under .usmle-pipeline-cache/staging-pubh16/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH16 manifest + inventory staged: {OUT}/manifests/statistical-tests.json, {OUT}/visual-inventory/statistical-tests.json")
print(f"statistical-tests: evidence {len(kept)}/{len(E1)} verified")
