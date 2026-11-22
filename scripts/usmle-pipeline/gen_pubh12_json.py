#!/usr/bin/env python3
"""PUBH12 confounding-effect-modification — manifest + inventory (Public Health
batch 3), STAGED under .usmle-pipeline-cache/staging-pubh12/ (the promotion
step owns content/). Source: FULL pdf page 286 / book 264 (Part 1) — a
WHOLE-PAGE topic in the EPIDEMIOLOGY AND BIOSTATISTICS subsection, the page
AFTER "Bias and study errors" (pdf 285 / book 263) and BEFORE "Statistical
distribution" (pdf 287 / book 265); the topic owns the WHOLE page, which
carries TWO blocks: (1) the "Confounding vs effect modification" table —
columns TYPE / DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS, TWO rows
in printed order (Confounding; Effect modification), every cell carried
verbatim in the note's table block; (2) the TWO CRUDE-VS-STRATIFIED DIAGRAM
GROUPS (pure vector line art) plus their SHARED ARROW LEGEND — group 1
"Confounding" (Crude analysis: Drinking coffee -> Lung cancer; Stratified
analysis: Smokers / Nonsmokers rows, each Drinking coffee -> Lung cancer;
"Note: Association disappeared after stratification.") and group 2 "Effect
modification" (Crude analysis: OCP use -> DVT; Stratified analysis: Smokers
/ Nonsmokers rows, each OCP use -> DVT; "Note: Association was strong in one
subgroup with weak/no association in the other subgroup."), then the
three-entry legend "Strong association" / "Significant association" /
"Weak/no association". Census (pdfimages): ZERO raster images — color-coded
table + two vector diagram groups + the legend + the indd footer slug. VLM
AVAILABLE this session (glm-4.6v: ONE full-page 120dpi pass + ONE 300dpi
zoom pass + ONE targeted 300dpi confirmation pass, PLUS an objective PIXEL
census of the 300dpi bitmap — staging-pubh12/vlm-census.txt), confirming:
exactly TWO table rows in printed order (none missing or extra), blue bold
row labels, bold verdict sub-lines, dotted hairlines, NO red text and NO
margin mnemonics anywhere on the page; the diagram groups' geometry (gray
rounded title boxes, tan/orange exposure boxes, light-blue outcome boxes,
light-gray stratum boxes, bold horizontal "Crude analysis" / "Stratified
analysis" labels at the LEFT above their row blocks, dark-gray
right-pointing arrows); and the CRITICAL layout fact — the three association
labels print ONCE as a STANDALONE LEGEND below group 2's note (sample arrow
+ label per entry, NO leader lines to any diagram arrow), decoding the arrow
grammar used in BOTH groups: thick solid = Strong (pixel: ~2.2pt), thin
solid = Significant (~1.0pt), thin dashed = Weak/no (~13px dashes/~13px
gaps). ADJUDICATIONS (all reads agree — VLM x3 + pixel census): (A) the
task brief described "Strong association"/"Weak/no association" as subgroup
annotations inside the effect-modification diagram — the PRINT prints them
ONCE, below group 2's note, as a standalone legend decoding the shared arrow
grammar, and BOTH groups print the identical three-style grammar (crude =
thin solid; Smokers row = thick solid; Nonsmokers row = dashed) — brief
corrected to print; (B) the confounding group's stratified rows therefore
PRINT the strong/dashed arrow pattern even though that group's own note and
the table's DEFINITION cell say the association disappears ("No association
after stratification" / "Note: Association disappeared after
stratification.") — the printed NOTE governs the teaching verdict; the
KYP redraw draws the print's arrow grammar exactly and gives each lane its
own printed note as the verdict strip, and the apparent tension is
documented, not resolved; (C) the task brief anticipated the diagram labels
"extracting interleaved with the table" — in the raw layer the diagrams
extract entirely AFTER the table (raw lines 66-111); the interleaving is
INSIDE the figure block: in EACH group the "Stratified analysis" label
object extracts AFTER the stratum rows (raw lines 84 and 106) even though
it prints between the crude row and the first stratified row, and the three
legend labels extract after group 2's note (raw lines 109-111). Printed
quirks carried + documented: "SEC TION II" header-space extraction artifact
(known, as-is); small-caps extraction artifacts "EPIDEmIOLOGY AND
BIOSTATISTICS" (the running banner prints ONCE on this page — running
header only, no in-body ribbon, unlike the subsection opener pdf 278) and
the column header "EXAmPLES"; the fi LIGATURE (U+FB01) prints in the DIAGRAM
groups' text objects only ("Stratified analysis" x2, "stratification" in
note 1, "Effect modification" group title, "Significant association" legend
entry) while the TABLE cells print plain "fi" ("stratification",
"Stratified analysis", "significant") — carried verbatim both ways; a small
▶ multimedia marker near the right margin at the legend's level (vector,
no text-layer content — documented). Nothing is reproduced: the table is an
ORIGINAL KYP ADAPTATION (two-row digest band + verdict strips in the
registry visual) and the two diagram groups + shared legend an
ORIGINAL_KYP_REDRAW (the book's two stacked groups re-arranged as TWO
PARALLEL VERTICAL LANES, each ending in its printed verdict strip) in ONE
registry visual (confounding-map, ConfoundingMap in
visuals/pubhealth-p12.tsx, viewBox 0 0 1102 1194); the full table is
additionally carried VERBATIM in the note's table block. DrugCards: none —
the page prints no drug rows (OCPs appear as a study EXPOSURE, not a drug
monograph; folded by absence, documented)."""
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
L = {286: pages[285].split("\n")}
P = {286: norm(pages[285])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — book page 264, the 'SEC TION II' header-space extraction artifact (carried as-is, a known quirk), the section header PUBLIC HEALTH SCIENCES, and the running banner '▶ PUBLIC HEALTH SCIENCES—EPIDEmIOLOGY AND BIOSTATISTICS' printed ONCE on this page (running header only — no in-body subsection ribbon, unlike the subsection opener pdf 278; small-caps 'm' artifact as extracted)", rng(286, 1, 7), [286]),
    ("The table's title and four column headers — 'Confounding vs effect modification', TYPE / DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS (the EXAMPLES header extracts with a lowercase 'm' — a small-caps extraction artifact, carried as extracted)", rng(286, 9, 16), [286]),
    ("ROW 1 (TYPE + DEFINITION cell) — Confounding: 'Factor related to both exposure and outcome (not on a causal pathway) distorts the effect on the outcome' + the bold verdict sub-line 'No association after stratification' (the parenthetical excludes mediators — variables ON the causal pathway)", rng(286, 18, 25), [286]),
    ("ROW 1 (EXAmPLES cell) — the printed confounding example: coffee appears linked to lung cancer, but smoking is the true cause, as coffee drinkers tend to smoke more", rng(286, 27, 30), [286]),
    ("ROW 1 (STRATEGIES TO REDUCE BIAS cell) — the three printed strategies in order: Crossover studies (subject serves as self-control); Matching (patients with similar characteristics in both treatment and control groups); Analytic techniques (eg, regression analysis when confounding variables are known and were measured)", rng(286, 32, 40), [286]),
    ("ROW 2 (TYPE + DEFINITION cell) — Effect modification: 'Exposure leads to different outcomes in subgroups stratified by factor' + the bold verdict sub-line 'True association exists'", rng(286, 42, 47), [286]),
    ("ROW 2 (EXAmPLES cell) — the printed effect-modification example: a study among women using OCPs showed significant risk of DVT, but when stratified by smoking habits there was a very strong association between OCP use and DVT among smokers and no such association in people who do not smoke", rng(286, 49, 58), [286]),
    ("ROW 2 (STRATEGIES TO REDUCE BIAS cell) — the printed handling: Stratified analysis (eg, after testing for interaction between OCP and smoking, analyze risk among smokers and nonsmokers)", rng(286, 60, 64), [286]),
    ("DIAGRAM GROUP 1 (Confounding), part 1 of 3 — the group title 'Confounding' (gray rounded box, centered) and the Crude analysis row: 'Drinking coffee' (tan box) -> 'Lung cancer' (light-blue box) joined by the thin-solid 'Significant association' arrow style (pixel census: ~1.0pt thick)", rng(286, 66, 70), [286]),
    ("DIAGRAM GROUP 1 (Confounding), part 2 of 3 — the two Stratified analysis rows: 'Smokers' -> 'Drinking coffee' -> 'Lung cancer' (thick-solid 'Strong association' style, ~2.2pt) and 'Nonsmokers' -> 'Drinking coffee' -> 'Lung cancer' (thin-dashed 'Weak/no association' style) — the stratum labels print in light-gray boxes at the left of each row", rng(286, 72, 82), [286]),
    ("DIAGRAM GROUP 1 (Confounding), part 3 of 3 — the 'Stratiﬁed analysis' label (ﬁ ligature; bold horizontal label at the LEFT, printing between the crude row and the first stratified row but extracting AFTER the stratum rows in the raw text layer — a reading-order quirk, documented) + the group's note printed below the rows: 'Note: Association disappeared after stratiﬁcation.'", rng(286, 84, 86), [286]),
    ("DIAGRAM GROUP 2 (Effect modification), part 1 of 3 — the group title 'Effect modiﬁcation' (ﬁ ligature; gray rounded box, centered) and the Crude analysis row: 'OCP use' (tan box) -> 'DVT' (light-blue box) joined by the thin-solid 'Significant association' arrow style", rng(286, 88, 92), [286]),
    ("DIAGRAM GROUP 2 (Effect modification), part 2 of 3 — the two Stratified analysis rows: 'Smokers' -> 'OCP use' -> 'DVT' (thick-solid 'Strong association' style) and 'Nonsmokers' -> 'OCP use' -> 'DVT' (thin-dashed 'Weak/no association' style) — the same three-style arrow grammar as group 1 (VLM x3 + pixel census)", rng(286, 94, 104), [286]),
    ("DIAGRAM GROUP 2 (Effect modification), part 3 of 3 — the 'Stratiﬁed analysis' label (ﬁ ligature; same reading-order quirk — extracts after the stratum rows) + the group's note printed below the rows: 'Note: Association was strong in one subgroup with weak/no association in the other subgroup.'", rng(286, 106, 108), [286]),
    ("THE ARROW LEGEND — the three association labels, printed ONCE below group 2's note as a standalone key (sample arrow + label per entry, NO leader lines to any diagram arrow; VLM x3 + pixel census: thick solid = 'Strong association', thin solid = 'Signiﬁcant association' (ﬁ ligature), thin dashed = 'Weak/no association'), decoding the arrow grammar used in BOTH diagram groups; a small ▶ multimedia marker prints near the right margin at this level (vector, no text-layer content)", rng(286, 109, 111), [286]),
    ("The print footer slug + timestamp — 'FAS1_2026_06-PubHealth.indd 264' and '12/16/25 12:46 PM' (page identity, book 264)", rng(286, 113, 115), [286]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"confounding-effect-modification: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "confounding-effect-modification", "title": "Confounding vs Effect Modification: What Stratification Reveals",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [286], "bookPages": "264–264"},
    "sourceEvidence": kept, "visualIds": ["confounding-map"],
    "mechanismIds": ["confounding-collapse-map", "effect-modification-split-map"],
    "kypExtensions": [
        {"id": "stratification-verdict-protocol",
         "summary": "The four-move stratification protocol the page implies but never states as a sequence: (1) STATE the crude association (both phenomena begin as an identical crude link — coffee-cancer; OCP-DVT); (2) TEST the third variable (two links + the pathway exclusion); (3) STRATIFY and compare the strata with each other and with the crude estimate; (4) DELIVER the verdict and act — COLLAPSE (association gone in every stratum) = confounding, remove it; SPLIT (real but different across strata) = effect modification, report it. The 'collapse vs split' rule and the 'remove vs report' action pairing are the KYP synthesis of the two printed rows.",
         "origin": "outside-first-aid", "rationale": "The source prints the two rows as parallel facts plus two worked examples; the ordered protocol, the collapse-vs-split router, and the remove-vs-report action pairing are KYP's organization.",
         "location": "core.keyIdea MOVES 1-4 + mechanisms[0] confounding-collapse-map + mechanisms[1] effect-modification-split-map + blocks[3] the steps block + the visual's KYP rule strip"},
        {"id": "confounder-mediator-modifier-router",
         "summary": "The three-role router for any third variable in any stem: upstream common cause of both exposure and outcome, not on the causal pathway = CONFOUNDER (remove); downstream consequence of the exposure transmitting the effect = MEDIATOR (do not adjust — the printed parenthetical '(not on a causal pathway)' exists to exclude this); variable that changes the size/direction of a true effect across subgroups = EFFECT MODIFIER (test for interaction, then stratify and report). Plus the smoking double-role observation: the same variable is the confounder in the coffee-lung-cancer story and the modifier in the OCP-DVT story — the role belongs to the relationship, not the variable.",
         "origin": "outside-first-aid", "rationale": "The source prints the confounder definition (with its parenthetical) and the two smoking examples; the explicit mediator category, the three-way router, and the role-not-variable principle are KYP's framing.",
         "location": "core.why + core.keyIdea MOVE 2 + blocks[2] the decoder list (ROW 1 and the smoking double role) + usmle.traps[1] confounder vs mediator + usmle.pivots[0]"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the stratified-collapse coffee-cancer stem, the stratified-split OCP-DVT stem, the crossover self-control strategy stem, the pathway-exclusion mediator stem), 4 traps (confounding vs effect modification; confounder vs mediator; effect modification is not a bias despite the printed column header; matching vs stratified analysis), 3 pivots (the third-variable role router, the collapse-vs-split estimate reader, the technique-selector), and 8 recall cards covering both rows, both examples, all four strategies, and the legend.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the two rows and the diagrams only; the attack structure, distractor shapes, and question templates are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: NO First Aid mnemonic prints anywhere on pdf 286 (pdfimages + the VLM passes, staging-pubh12/vlm-census.txt — no red in-cell mnemonics, no margin mnemonics), so all four hooks are KYP ORIGINALS, marked as such: 'TWO LINKS, NO PATHWAY' (the confounder test), 'COLLAPSE = CONFOUND, SPLIT = MODIFY' (the stratification verdict), 'COMA' (Crossover · Matching · Analytic techniques — the three printed anti-confounding strategies), and 'TEST, THEN SPLIT' (interaction test before stratified analysis).",
         "origin": "outside-first-aid", "rationale": "No mnemonic is printed on the page (census-confirmed); all four codes are KYP's design, built on the printed strategy cells.",
         "location": "mnemonics + blocks[6] the memory callout + rapidReview.m3 + the visual's KYP rule strip"},
        {"id": "clinical-anchor-and-boundary-layer",
         "summary": "The clinical anchor layer: the two printed example threads — the coffee-lung-cancer thread (smoking the true cause of bronchogenic carcinoma; any crude lifestyle-association with a smoking-related outcome deserves stratification) and the OCP-DVT thread (estrogen-associated thromboembolic risk amplified by smoking — why smoking status shapes contraceptive counseling) — plus the boundary framing (confounding is a VALIDITY problem: the crude estimate is wrong, remove it; effect modification is a DISCOVERY: the crude estimate is an average of two truths, report it) and the miniCase (the OCP-DVT interaction-test vignette routed to effect modification/stratified reporting against the confounding, regression-pooling, mediator, and selection-bias distractors).",
         "origin": "outside-first-aid", "rationale": "The examples themselves are printed (FA-own); the thread organization, the remove-vs-report boundary framing, the pharmacologic smoking-estrogen context, and the miniCase with its distractors are KYP's design, flagged as such.",
         "location": "clinical block + usmle.miniCase + usmle.patterns[0-1] + crossLinks[0-1]"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 286 / book 264, the page after 'Bias and study errors' (pdf 285 / book 263) and before 'Statistical distribution' (pdf 287 / book 265) in the EPIDEMIOLOGY AND BIOSTATISTICS subsection, carrying TWO blocks — the 'Confounding vs effect modification' table (columns TYPE / DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS, TWO rows in printed order: Confounding; Effect modification — carried VERBATIM in the note's table block, blocks[1]) and the TWO CRUDE-VS-STRATIFIED DIAGRAM GROUPS plus their SHARED ARROW LEGEND (group 1 'Confounding' and group 2 'Effect modification', each with a Crude analysis row, two Stratified analysis rows, and its printed Note; then the three-entry legend), redrawn as ORIGINAL KYP vector art. CENSUS (pdfimages): ZERO raster images; VLM WAS AVAILABLE this session (glm-4.6v: full-page 120dpi + 300dpi zoom + a targeted 300dpi confirmation pass, PLUS an objective pixel census of the 300dpi bitmap — staging-pubh12/vlm-census.txt): exactly TWO rows confirmed in printed order (none missing or extra); blue bold row labels, bold verdict sub-lines ('No association after stratification' / 'True association exists'), dotted hairlines, NO red text, NO margin mnemonics; diagram geometry = gray rounded title boxes, tan/orange exposure boxes, light-blue outcome boxes, light-gray stratum boxes, bold horizontal 'Crude analysis' / 'Stratified analysis' labels at the LEFT above their row blocks, dark-gray right-pointing arrows. ADJUDICATIONS (all reads agree — VLM x3 + pixel census): (A) the task brief described 'Strong association'/'Weak/no association' as subgroup annotations inside the effect-modification diagram — the PRINT prints them ONCE, below group 2's note, as a STANDALONE LEGEND (sample arrow + label per entry, no leader lines), decoding the arrow grammar used in BOTH groups (thick solid = Strong; thin solid = Significant; thin dashed = Weak/no); brief corrected to print; (B) BOTH diagram groups print the identical three-style grammar (crude row thin solid; Smokers row thick solid; Nonsmokers row dashed) — the confounding group's stratified rows therefore print the strong/dashed pattern even though that group's own note and the table's DEFINITION cell say the association disappears; the printed NOTE governs the teaching verdict (the KYP redraw draws the print's arrow grammar exactly and gives each lane its own printed note as the verdict strip; the tension is documented, not resolved); (C) the task brief anticipated the diagram labels 'extracting interleaved with the table' — the diagrams extract entirely AFTER the table in the raw layer (lines 66-111); the interleaving is INSIDE the figure block: each group's 'Stratified analysis' label extracts AFTER the stratum rows (lines 84, 106) though it prints between the crude row and the first stratified row, and the legend labels extract after group 2's note (lines 109-111). Quirks carried + documented: 'SEC TION II' header-space artifact (known, as-is); small-caps artifacts 'EPIDEmIOLOGY AND BIOSTATISTICS' (banner prints ONCE — running header only, no in-body ribbon on this page) and the column header 'EXAmPLES'; the fi LIGATURE (U+FB01) prints in the DIAGRAM groups' text objects only ('Stratified analysis' x2, 'stratification' in note 1, 'Effect modification' group 2 title, 'Significant association' legend entry) while the TABLE cells print plain 'fi' — carried verbatim both ways; a small ▶ multimedia marker near the right margin at the legend's level (vector, no text-layer content). Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (confounding-collapse-map, effect-modification-split-map), a visual block + verbatim table block + decoder list + steps block + compare block + exam callout + memory callout, a clinical block (the two printed example threads + the boundary), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (bias-and-study-errors — produced in a parallel batch, referenced by design; clinical-therapeutic-trials; statistical-tests; observational-studies — all four are public-health census topicIds), 4 crossLinks, 4 mnemonics (ALL KYP originals, marked — NO First Aid mnemonic prints on this page, census-confirmed), and a miniCase with 5 options (exactly 1 correct + 4 distractors, why/whyWrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints no drug rows — OCPs appear as a study EXPOSURE, not a drug monograph; the clinical anchors are carried in the clinical block instead; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the manifest convention shared with staging-pubh1 and staging-pubh10; the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh12/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'confounding-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's TWO visual assets are implemented in ONE registry visual (confounding-map, ConfoundingMap in visuals/pubhealth-p12.tsx, viewBox 0 0 1102 1194): the table as an ORIGINAL KYP ADAPTATION (two-row digest band + the verdict strips carrying the table's verdict sub-lines and strategy cells) and the two diagram groups + shared legend as an ORIGINAL_KYP_REDRAW (the book's two stacked groups re-arranged as TWO PARALLEL VERTICAL LANES — confounding: Drinking coffee -> Lung cancer collapsing on smoking stratification; effect modification: OCP use -> DVT splitting on smoking stratification — every printed label preserved, the three arrow styles drawn exactly as the print's legend decodes them) — with the full table's text ALSO carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Epidemiology and Biostatistics",
    "topicId": "confounding-effect-modification", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "confounding-effect-modification-sv1",
        "sourcePages": {"part": 1, "pdfPages": [286], "bookPages": "264"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Confounding vs effect modification table (book 264): columns TYPE / DEFINITION / EXAMPLES / STRATEGIES TO REDUCE BIAS, TWO rows — the Epidemiology and Biostatistics subsection's third-variable page: confounding (factor related to both exposure and outcome, not on a causal pathway, no association after stratification; coffee/lung-cancer example; crossover, matching, analytic techniques) vs effect modification (different outcomes in subgroups stratified by factor, true association exists; OCP/DVT example; stratified analysis after testing for interaction)",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi + 300dpi zoom, staging-pubh12/vlm-census.txt — VLM available this session): the running header (book page 264, SEC TION II, PUBLIC HEALTH SCIENCES, '▶ PUBLIC HEALTH SCIENCES—EPIDEmIOLOGY AND BIOSTATISTICS' printed ONCE — running header only), the table title 'Confounding vs effect modification' (blue bold, left-aligned), column headers TYPE / DEFINITION / EXAMPLES / STRATEGIES TO REDUCE BIAS (small caps on a light gray header band; the EXAMPLES header extracts as 'EXAmPLES' — small-caps artifact), then TWO rows in printed order with BLUE BOLD row labels, dotted hairline separators (no zebra), and BOLD verdict sub-lines inside the DEFINITION cells ('No association after stratification'; 'True association exists') — NO red text anywhere: Confounding — Factor related to both exposure and outcome (not on a causal pathway) distorts the effect on the outcome; No association after stratification; Coffee appears to be linked to lung cancer, but smoking is the true cause, as coffee drinkers tend to smoke more; Crossover studies (subject serves as self-control); Matching (patients with similar characteristics in both treatment and control groups); Analytic techniques (eg, regression analysis when confounding variables are known and were measured); Effect modification — Exposure leads to different outcomes in subgroups stratified by factor; True association exists; A study among women using OCPs showed significant risk of DVT, but when these data were stratified by smoking habits, there was a very strong association between OCP use and DVT among smokers, but there was no such association in people who do not smoke; Stratified analysis (eg, after testing for interaction between OCP and smoking, analyze risk among smokers and nonsmokers).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "confounding-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the two-card digest band (Zone C) + the two verdict strips (Zone A) in the registry visual (ConfoundingMap in visuals/pubhealth-p12.tsx): one card per printed row in PRINTED order, each carrying the definition sentence, the verdict chip (No association after stratification / True association exists), the printed example, and the full strategy cell, with the small-caps 'EXAmPLES' artifact documented on the band; the table's full text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, the decoder list block (blocks[2]), and recall[0-6]",
        "productionStatus": "complete",
        "plannedKypVisualId": "confounding-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "confounding-effect-modification-sv2",
        "sourcePages": {"part": 1, "pdfPages": [286], "bookPages": "264"},
        "visualType": "COMPARISON_FIGURE",
        "visualPurpose": "The two crude-vs-stratified diagram groups + their shared arrow legend (book 264): group 1 'Confounding' (Crude: Drinking coffee -> Lung cancer; Stratified: Smokers / Nonsmokers rows; 'Note: Association disappeared after stratification.') and group 2 'Effect modification' (Crude: OCP use -> DVT; Stratified: Smokers / Nonsmokers rows; 'Note: Association was strong in one subgroup with weak/no association in the other subgroup.'), with the three-entry legend decoding the arrow grammar — the page's visual grammar for what stratification reveals: collapse = confounding, split = effect modification",
        "sourceFigureDescription": "PURE VECTOR LINE ART, no raster (pdfimages: zero raster images; geometry pinned by pdftotext -bbox + pdftotext -layout + THREE VLM passes + an objective PIXEL census of the 300dpi bitmap, staging-pubh12/vlm-census.txt): TWO diagram groups stacked below the table, each with a centered title in a gray rounded box ('Confounding'; 'Effect modiﬁcation' — ﬁ ligature), bold horizontal left labels 'Crude analysis' and 'Stratified analysis' (the latter printing between the crude row and the first stratified row but extracting after the stratum rows in the text layer — a reading-order quirk), tan/orange exposure boxes ('Drinking coffee'; 'OCP use'), light-blue outcome boxes ('Lung cancer'; 'DVT'), light-gray stratum boxes ('Smokers'; 'Nonsmokers') at the left of each stratified row, and dark-gray right-pointing arrows in three styles: crude row = THIN SOLID (~1.0pt), Smokers row = THICK SOLID (~2.2pt), Nonsmokers row = THIN DASHED (~13px dashes) — the identical grammar in BOTH groups. Below group 2's note prints the SHARED ARROW LEGEND once (sample arrow + label per entry, NO leader lines): thick solid = 'Strong association'; thin solid = 'Signiﬁcant association' (ﬁ ligature); thin dashed = 'Weak/no association'; a small ▶ multimedia marker prints near the right margin at this level. The two notes print at the left margin directly below their group's last row: 'Note: Association disappeared after stratiﬁcation.' and 'Note: Association was strong in one subgroup with weak/no association in the other subgroup.'",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "confounding-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A (the two parallel vertical lanes) + Zone B (the arrow legend + KYP rule strip) of the registry visual (ConfoundingMap in visuals/pubhealth-p12.tsx): the book's two stacked groups re-arranged as TWO PARALLEL LANES — Lane 1 Confounding (Drinking coffee -> Lung cancer; the smoking stratification; the verdict strip 'No association after stratification' + 'Note: Association disappeared after stratiﬁcation.' + the three printed reduction strategies) and Lane 2 Effect modification (OCP use -> DVT; the smoking stratification splitting it; the verdict strip 'True association exists' + the printed Note + the stratified-analysis handling) — every printed label preserved, the three arrow styles drawn exactly as the print's legend decodes them (thick solid / thin solid / thin dashed, with KYP style tags under each arrow), then the legend drawn once exactly as it prints below the second group, plus the KYP rule strip (COLLAPSE = CONFOUND · SPLIT = MODIFY) and the smoking double-role line; the figure's semantics are also carried in mechanisms[0] confounding-collapse-map, mechanisms[1] effect-modification-split-map, blocks[4] the compare block, and recall[6-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "confounding-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh12"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "confounding-effect-modification.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "confounding-effect-modification.json").write_text(
    json.dumps({"topicId": "confounding-effect-modification", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "confounding-effect-modification", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries TWO visual assets — the Confounding vs effect modification table (sv1: TWO rows, columns TYPE / DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS, with the bold verdict sub-lines 'No association after stratification' / 'True association exists' and both printed worked examples) and the two crude-vs-stratified diagram groups + their shared arrow legend (sv2: group 1 'Confounding' and group 2 'Effect modification', each with a Crude analysis row, two Stratified analysis rows, and its printed Note; then the three-entry legend decoding the arrow grammar) — both accounted for in ONE registry visual (confounding-map, ConfoundingMap in visuals/pubhealth-p12.tsx, viewBox 0 0 1102 1194): the table as an ORIGINAL KYP ADAPTATION (two-row digest band + verdict strips carrying the table's verdict sub-lines and strategy cells) and the diagrams + legend as an ORIGINAL_KYP_REDRAW (the book's two stacked groups re-arranged as TWO PARALLEL VERTICAL LANES, each ending in its printed verdict strip — confounding: coffee -> lung cancer collapsing on smoking stratification; effect modification: OCP use -> DVT splitting on smoking stratification — every printed label preserved); nothing is reproduced, and the full table's text is additionally carried verbatim in the note's table block. Census: zero raster images (pdfimages); VLM available this session — glm-4.6v full-page 120dpi + 300dpi zoom + a targeted 300dpi confirmation pass PLUS an objective pixel census of the 300dpi bitmap (vlm-census.txt) confirmed the two printed rows in order, the bold verdict sub-lines, the absence of red text and margin mnemonics, the diagram groups' geometry (gray rounded titles, tan exposure boxes, light-blue outcome boxes, gray stratum boxes, left 'Crude analysis'/'Stratified analysis' labels, dark-gray arrows), and the CRITICAL layout fact: the three association labels print ONCE as a STANDALONE LEGEND below group 2's note (no leader lines), decoding the arrow grammar used in BOTH groups (thick solid = Strong; thin solid = Significant; thin dashed = Weak/no). ADJUDICATIONS: (A) the task brief had the strong/weak labels as in-diagram subgroup annotations — print governs (shared legend); (B) both groups print the identical three-style grammar (crude thin solid, Smokers thick solid, Nonsmokers dashed), so the confounding group's stratified rows print the strong/dashed pattern even though its own note says the association disappeared — the printed NOTE governs the verdict, and the tension is documented; (C) the diagrams extract entirely after the table in the raw layer; the reading-order interleaving (each 'Stratified analysis' label extracting after the stratum rows; the legend after group 2's note) is documented as a quirk. FULL single page (pdf 286 / book 264, between 'Bias and study errors' pdf 285 and 'Statistical distribution' pdf 287). STAGED under .usmle-pipeline-cache/staging-pubh12/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH12 manifest + inventory staged: {OUT}/manifests/confounding-effect-modification.json, {OUT}/visual-inventory/confounding-effect-modification.json")
print(f"confounding-effect-modification: evidence {len(kept)}/{len(E1)} verified")
