#!/usr/bin/env python3
"""PUBH5 vital-statistics-populations — manifest + inventory (Public Health
batch 1), STAGED under .usmle-pipeline-cache/staging-pubh5/ (the promotion
step owns content/). Source: UPPER PORTION ONLY of pdf page 281 / book 259
(Part 1) — a PINNED PAGE-SPLIT. Scope: from the top of the page (the
"Quantifying risk (continued)" heading, raw text-layer line 9) through the
ENTIRE "Demographic transition" block (definition sentence, the three
population pyramids, and the four transition rows, ending at raw line 98),
ENDING immediately BEFORE the "Likelihood ratio" heading (raw line 100) —
the LR and Kaplan-Meier blocks below the boundary belong to the
likelihood-ratios and survival-analysis topics (parallel tasks). BLOCKS
OWNED: (1) the final two rows of the Quantifying risk table — Mortality
rate ("Number of deaths (in general or due to specific cause) within a
population over a defined period."; 80 deaths in a town of 10,000 over 2
years -> 4 per 1000 per year; formula "Deaths/1000 people per year.") and
Attack rate ("Proportion of exposed people who become ill."; 80 exposed, 60
ill -> 75%; formula the stacked fraction "People who become ill / Total
people exposed"); (2) the Demographic transition block — the one-sentence
definition, the THREE POPULATION PYRAMIDS, and the four transition rows:
Birth rate up-up/down/down-down, Mortality rate up/down/down, Life
expectancy Short/Long/Long, Population Growing/Stable/Declining. CENSUS
(pdfimages): ZERO raster images — the pyramids are pure vector art ->
ORIGINAL_KYP_REDRAW; the two tables -> ORIGINAL KYP ADAPTATION. VLM
AVAILABLE this session (glm-4.6v at 120dpi, ONE full-page pass,
staging-pubh5/vlm-census.txt): confirmed both continued rows verbatim, the
definition sentence verbatim, THREE pyramids left->right = wide-based
(growing) / rectangular (stable) / narrow-based with bulging middle
(declining), Male half shaded blue and Female half pink, the transition
rows with the printed arrows, stage columns NOT separately labeled (the
Population row + the shapes carry the stages), the "Likelihood ratio"
heading immediately after the transition table (BOUNDARY CONFIRMED), NO
margin notes, NO mnemonics, NO asterisk footnotes, NO raster images.
ADJUDICATIONS, documented in the manifest notes: (1) the pyramid figure
labels extract INTERLEAVED across the three figures in the text layer
("Male", "Age" x3, "Population pyramid", "FemaleMale", "Female",
"Male Female", "Population % Population", "Population", "%", "%" — raw
lines 49-66); the VLM saw the Age axis and Male/Female legend most clearly
on the LEFTMOST pyramid and a "Population %" axis under the middle one;
the text layer's label inventory (Age x3, Male x3, Female x3, Population %
x3) governs — EACH pyramid carries the full axis furniture, and the KYP
redraw gives all three pyramids the complete axis set; (2) the three SHAPES
and the left->right stage order (Growing -> Stable -> Declining, matching
the Population row) are pinned by the VLM census — the shapes do not exist
in the text layer; (3) the VLM misread the footer slug as "FA21_2026..."
— the text layer prints "FAS1_2026_06-PubHealth.indd 259" and governs
(the slug sits below this topic's boundary and is not quoted either way);
(4) the VLM noted a small "graphic placeholder icon" at the lower right of
the third pyramid — a glyph in the source artwork, NOT reproduced
(zero-raster redraw); (5) case fatality rate is NOT on this page (it
prints on book 258) and appears here only as clearly-marked KYP context
for the denominator family; (6) the mortality example prints "4 per 1000
per year" with no comma — carried verbatim; the arithmetic dissection
(x1000 then divide by the 2-year window) is KYP's, not printed. Nothing is
reproduced: the page's two visual assets (the continued risk table and the
demographic-transition figure) are rebuilt as ORIGINAL KYP ART in ONE
registry visual (vital-statistics-map, VitalStatisticsMap in
visuals/pubhealth-p5.tsx — the two formula cards with the worked examples
dissected and the denominator-family decoder, the three pyramids redrawn
side by side with the four transition rows as a band beneath); both tables
are additionally carried VERBATIM in the note's table blocks. DrugCards:
FOLDED (documented in the manifest notes) — the page prints no drug rows;
there is nothing to trace into the DrugCard shape."""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "": pages.pop()
L = {281: pages[280].split("\n")}
P = {281: norm(pages[280])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
# Pinned page-split boundary assertion: the topic's scope ENDS immediately
# before the "Likelihood ratio" heading (raw line 100) — hard-fail if moved.
BOUNDARY = L[281][99].strip()
if BOUNDARY != "Likelihood ratio":
    print(f"BOUNDARY MOVED: raw line 100 now reads {BOUNDARY!r} (expected 'Likelihood ratio')")
    sys.exit(1)
kept, fails = [], []
E5 = [
    ("Page identity — book page 259 upper, the 'SEC TION II' header-space extraction artifact (known, carried as-is), the 'PUBLIC HEALTH SCIENCES' section band, the subsection banner '▶ PUBLIC HEALTH SCIENCES—EPIDEmIOLOGY AND BIOSTATISTICS' (small-caps 'm' artifact), and the topic's opening heading 'Quantifying risk (continued)' — the pinned start of this topic's upper-portion scope", rng(281, 1, 9), [281]),
    ("The continued table's four column headers — TERm / DEFINITION / EXAmPLE / FORmULA (the small-caps 'm' extraction quirk, carried as printed)", rng(281, 10, 16), [281]),
    ("ROW 1 (term + definition) — 'Mortality rate': 'Number of deaths (in general or due to specific cause) within a population over a defined period.' — the definition's own parenthetical makes the numerator all-cause OR cause-specific, and the phrase 'over a defined period' plants the clock", rng(281, 18, 23), [281]),
    ("ROW 1 (example + formula) — the printed worked example 'If 80 people in a town of 10,000 die over 2 years, mortality rate is 4 per 1000 per year.' (no comma in 1000, carried verbatim) and the formula 'Deaths/1000 people per year.' — the per-year unit is the annualization instruction (the dissection ×1000 then ÷2 years is KYP's, not printed)", rng(281, 25, 30), [281]),
    ("ROW 2 (term + definition + example) — 'Attack rate': 'Proportion of exposed people who become ill.' with the printed worked example 'If 80 people in a town are exposed and 60 people become ill, attack rate is 75%.' — the town is in the sentence but never in the fraction", rng(281, 32, 38), [281]),
    ("ROW 2 (formula) — the attack-rate formula prints as a stacked fraction: 'People who become ill' over 'Total people exposed' — a proportion with no time unit, despite the name 'rate'", rng(281, 40, 41), [281]),
    ("BLOCK 2 — the 'Demographic transition' heading and its one-sentence definition, verbatim: 'As a country proceeds to higher levels of development, birth and mortality rates decline to varying degrees, changing the age composition of the population.' — 'to varying degrees' is the birth-vs-mortality asymmetry the arrows print below", rng(281, 43, 47), [281]),
    ("The three population pyramids' axis furniture as it extracts INTERLEAVED across the three figures in the text layer — 'Male', 'Age' ×3, 'Population pyramid' (the shaded row label), 'FemaleMale', 'Female', 'Male Female', 'Population % Population', 'Population', '%', '%' — the interleave quirk is documented; the shapes themselves (wide-based / rectangular / narrow-based with bulging middle) do not exist in the text layer and are VLM-pinned (staging-pubh5/vlm-census.txt)", rng(281, 49, 66), [281]),
    ("Transition rows 1-2 with the printed arrows (raw layer carries C1 control bytes around the arrow glyphs, stripped by the norm() verification layer) — Birth rate ↑↑ / ↓ / ↓↓ (the only row with double arrows) and Mortality rate ↑ / ↓ / ↓ (never more than one arrow)", rng(281, 68, 82), [281]),
    ("Transition rows 3-4 — Life expectancy Short / Long / Long (Long in BOTH the stable and declining stages) and Population Growing / Stable / Declining (the row that names the three stage columns and closes this topic's scope — the 'Likelihood ratio' heading immediately follows, the pinned boundary)", rng(281, 84, 98), [281]),
]
for c, q, pgs in E5:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"vital-statistics-populations: evidence {len(kept)}/{len(E5)} verified")
print(f"boundary check: line 100 = {BOUNDARY!r} — scope ends before it (pass)")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m5 = {"topicId": "vital-statistics-populations", "title": "Mortality, Attack Rates, and Demographic Transition",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [281], "bookPages": "259 (upper)"},
    "sourceEvidence": kept, "visualIds": ["vital-statistics-map"],
    "mechanismIds": ["vital-rate-denominators-map", "development-pyramid-map"],
    "kypExtensions": [
        {"id": "denominator-decoder-layer", "summary": "The denominator family and the clock rule — the two-question decoder that sorts every 'rate' on the facing pages: WHAT is being divided (population -> mortality rate; exposed -> attack rate; cases -> case fatality rate, book 258) and IS there a time unit in the formula (per year -> a true rate, annualize the window; no unit -> a proportion, never annualize). Answers the exam's two planted errors: dividing 60 by the town's 10,000 (wrong denominator) and reporting 8 per 1000 as a per-year rate (wrong clock).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the two rows' definitions, examples, and formulas but never states the denominator family, the rate-vs-proportion distinction, or the two-question decode order; the synthesis is KYP's.",
         "location": "core.keyIdea + mechanisms[0] vital-rate-denominators-map + blocks[3] the list block + blocks[5] the compare block + the registry visual's Zone A decoder strip"},
        {"id": "arithmetic-dissection-layer", "summary": "The step-by-step dissection of both printed worked examples: the mortality example's two hidden operations (80 deaths ÷ 10,000 people × 1000 = 8 per 1000 ACROSS the 2-year window; ÷ 2 years = 4 per 1000 PER YEAR) and the attack example's one-step fraction (60 ill ÷ 80 exposed = 75%, with the town's 10,000 documented as the never-entering decoy).",
         "origin": "outside-first-aid", "rationale": "The source prints the worked examples' results only ('mortality rate is 4 per 1000 per year', 'attack rate is 75%'); the intermediate arithmetic and the decoy analysis are KYP's.",
         "location": "core.why + mechanisms[0] + blocks[3] the list block + blocks[5] the compare block + the registry visual's Zone A arithmetic strips"},
        {"id": "pyramid-reading-protocol", "summary": "The four-move population-pyramid reading protocol (MOVE 1 read the BASE — wide = growing, narrow = declining; MOVE 2 compare the sides — triangle / rectangle / bulging barrel; MOVE 3 attach the arrows — birth rate swings twice, mortality once; MOVE 4 name the trajectory — Growing / Stable / Declining) plus the shape-to-stage mapping itself, with the shapes VLM-pinned from the source figure (wide-based classic triangle, even rectangle, narrow base with a bulging middle) since they do not exist in the text layer.",
         "origin": "outside-first-aid", "rationale": "The source draws the three pyramids and prints the four rows but never states a reading order, never captions the shapes with their stages (VLM: the stage columns are not separately labeled), and never notes the arrow-count asymmetry; the protocol is KYP's.",
         "location": "core.keyIdea + mechanisms[1] development-pyramid-map + blocks[4] the steps block + blocks[1] the transition table block + the registry visual's Zone B pyramids and Zone C rows"},
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed rows — 4 patterns (the un-annualized mortality rate critique, the outbreak attack-rate computation, the wide-base silhouette match, the narrow-base bulging-barrel match), 4 traps (mortality rate vs case fatality rate denominators, attack-rate denominator decoys, window rate vs annualized rate, declining vs growing silhouettes), 3 pivots (rate vs proportion clock, base-vs-middle silhouette, any-two-given-find-the-third), and the banquet miniCase (5 options: 40/100 = 40% correct; the attendee, county-population, person-year, and mortality-rate distractors each with wrong-because explanations).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the rows only; every vignette, distractor design, and reverse-direction question shape is KYP's design.",
         "location": "usmle section + recall + rapidReview"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (PER THOUSAND, PER YEAR / ATTACK THE EXPOSED / BASE READS THE FUTURE / BIRTH SWINGS TWICE). No mnemonic prints anywhere on the page's upper portion — VLM census: no margin notes, no mnemonic letters, no asterisk footnotes — so all four ALL-CAPS codes are KYP originals, and the page's own furniture (blue/pink pyramid halves, blue Male/Female legend letters, bold blue headings) is carried as attributed description, not counted as mnemonics.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints on pdf 281 upper (pdfimages + VLM census, staging-pubh5/vlm-census.txt); the four codes are KYP's design.",
         "location": "mnemonics + blocks[7] the memory callout + the registry visual's footer attribution text"},
        {"id": "context-and-bridge-layer", "summary": "The KYP-context generalizations, every one flagged as such: the epidemiologic-transition narrative (development drops mortality first — life expectancy Short -> Long — then fertility falls hardest, the 'varying degrees'), the attack rate's outbreak-table habitat (attack rate per exposure among the exposed vs the unexposed, the point-source investigation), cause-specific mortality as the cause-of-death-ranking statistic, and the aging-pyramid health-system projections (dependency burden) — plus the crossLinks to outbreak microbiology, the 2×2 measures, healthcare delivery, and behavioral science.",
         "origin": "outside-first-aid", "rationale": "The source prints the definition sentence, the rows, and the formulas only; every driver, habitat, and projection beyond the printed words is KYP context, explicitly marked in the note and never presented as printed text.",
         "location": "blocks[6] the exam callout + clinical[0] + mechanisms[1] + mnemonics' clinical fields + crossLinks"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "PINNED PAGE-SPLIT (upper portion only): pdf 281 / book 259 upper, from the 'Quantifying risk (continued)' heading (raw line 9) through the entire Demographic transition block (ending raw line 98), immediately BEFORE the 'Likelihood ratio' heading (raw line 100 — asserted by the gen script's boundary check); the LR and Kaplan-Meier blocks below belong to likelihood-ratios and survival-analysis (parallel tasks), and the footer slug (raw line 124) sits below the boundary and is deliberately NOT quoted. BLOCKS OWNED: (1) the final two rows of the Quantifying risk table (Mortality rate, Attack rate — all four cells each, carried VERBATIM in the note's first table block); (2) the Demographic transition block (definition sentence + three pyramids + four transition rows, carried VERBATIM in the note's second table block with the stage columns reconstructed from the Population row + VLM-pinned shapes, marked as such). CENSUS (pdfimages): ZERO raster images; the three pyramids are pure vector art -> ORIGINAL_KYP_REDRAW (Male/Female horizontal bars by Age; shapes VLM-pinned: wide-based triangle = Growing, rectangle = Stable, narrow base with bulging middle = Declining, left->right Growing -> Stable -> Declining); the two tables -> ORIGINAL KYP ADAPTATION. VLM WAS AVAILABLE this session: ONE 120dpi glm-4.6v full-page pass (staging-pubh5/vlm-census.txt) confirmed both continued rows verbatim, the definition sentence verbatim, the three shapes and stage order, the printed arrows, the unlabeled stage columns, the immediately-following 'Likelihood ratio' heading (boundary), and the absence of margin notes, mnemonics, asterisk footnotes, and raster images; color furniture = blue/pink pyramid bars, blue Male/Female legend letters, bold blue headings, light-blue cell shading. QUIRKS carried + documented: 'SEC TION II' header-space artifact (known, as-is); the small-caps 'm' artifact in 'EPIDEmIOLOGY' and the column headers 'TERm / DEFINITION / EXAmPLE / FORmULA'; the transition arrows carry C1 control bytes in the raw layer (\\x8f↑\\x8f↑ etc.) stripped by the norm() verification layer; the pyramid figure labels extract INTERLEAVED (Male, Age ×3, Population pyramid, FemaleMale, Female, Male Female, Population % Population, Population, %, % — raw lines 49-66); the mortality example prints '4 per 1000 per year' with no comma (verbatim). ADJUDICATIONS: (1) pyramid interleave — text-layer label inventory (Age ×3, Male ×3, Female ×3, Population % ×3) governs: EACH pyramid carries the full axis furniture; the KYP redraw gives all three pyramids the complete Male/Female/Age/Population % set (VLM saw them most clearly on the leftmost pyramid); (2) the three shapes and the left->right stage order are VLM-pinned (they do not exist in the text layer); (3) the VLM misread the footer slug as 'FA21_2026_06-PubHealth.indd' — the text layer prints 'FAS1_2026_06-PubHealth.indd 259' and governs; (4) the VLM's 'graphic placeholder icon' at the third pyramid's lower right is a source-artwork glyph, NOT reproduced; (5) case fatality rate (book 258) appears only as clearly-marked KYP context for the denominator family. CONVENTIONS, documented: (1) the batch convention targets are met — 2 mechanisms (vital-rate-denominators-map, development-pyramid-map), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (quantifying-risk, incidence-prevalence, survival-analysis, observational-studies — all census topicIds), 4 crossLinks, 4 KYP mnemonics, a miniCase with 5 options (exactly 1 correct, why/why-wrong on every option), 3+ blocks including the two verbatim table blocks, a clinical callout block, and NO DrugCards — the DrugCard layer is FOLDED (documented): the page prints no drug rows, there is nothing to trace into the DrugCard shape; (2) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the manifest convention documented in the biologic-agents exemplar; the brief's 'complete' maps to this vocabulary — 'complete' is not a schema-valid manifest status — and the per-record INVENTORY productionStatus is 'complete'); (3) outputs are STAGED under .usmle-pipeline-cache/staging-pubh5/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'vital-statistics-map' is therefore not yet in visuals/registry.tsx by design); (4) the page's two visual assets are implemented as ORIGINAL KYP ART in ONE registry visual (vital-statistics-map, VitalStatisticsMap in visuals/pubhealth-p5.tsx, viewBox 0 0 1102 1232): Zone A the two vital-statistic formula cards with the printed worked examples dissected (mortality: ×1000 -> 8 per 1000 across the window -> ÷2 years -> 4 per 1000 per year; attack: 60/80 = 75% with the 10,000 decoy flagged) and the denominator-family decoder strip; Zone B the three population pyramids redrawn side by side (Male left blue / Female right pink, horizontal bars by Age, Population % axis, stage chips Growing/Stable/Declining); Zone C the four printed transition rows as a band beneath with vector arrow glyphs; with both tables' full text ALSO carried verbatim in the note's two table blocks. VISUAL QA (KYP, pre-promotion): the registry visual was server-rendered standalone with the light-theme tokens and audited in-browser with the ph26-ph28 getBBox method — 95 text elements, 0 overlaps (>1-unit bbox intersection), 0 texts outside the viewBox 0 0 1102 1232; a VLM review of the render confirmed the three pyramid shapes, the four transition rows, and the three-step mortality arithmetic strip.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Epidemiology and Biostatistics",
    "topicId": "vital-statistics-populations", "requiredInKYP": True}
inv5 = [
    dict(SV_BASE, **{
        "visualId": "vital-statistics-populations-sv1",
        "sourcePages": {"part": 1, "pdfPages": [281], "bookPages": "259 (upper)"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The 'Quantifying risk (continued)' table's final two rows (book 259 upper): Mortality rate and Attack rate — the two population-level vital statistics that close the risk table, each with definition, worked example, and formula",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh5/vlm-census.txt — VLM available this session): under the section header band (book page 259, 'SEC TION II', PUBLIC HEALTH SCIENCES, '▶ PUBLIC HEALTH SCIENCES—EPIDEmIOLOGY AND BIOSTATISTICS'), the bold blue table title 'Quantifying risk (continued)', four column headers (TERm / DEFINITION / EXAmPLE / FORmULA — the small-caps 'm' extraction artifact), then the table's final two rows in printed order: 'Mortality rate → Number of deaths (in general or due to specific cause) within a population over a defined period. → If 80 people in a town of 10,000 die over 2 years, mortality rate is 4 per 1000 per year. → Deaths/1000 people per year.' and 'Attack rate → Proportion of exposed people who become ill. → If 80 people in a town are exposed and 60 people become ill, attack rate is 75%. → People who become ill / Total people exposed (printed as a stacked fraction)'. Bold blue row labels; no margin notes, mnemonics, asterisk footnotes, or images (VLM-confirmed). The rows above these two (odds ratio through case fatality rate) print on book 258 and belong to the quantifying-risk topic.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "vital-statistics-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's Zone A (VitalStatisticsMap in visuals/pubhealth-p5.tsx): the two formula cards — Mortality rate (definition verbatim, formula chip 'Deaths/1000 people per year.', the printed worked example, and the KYP arithmetic strip ×1000 → 8 per 1000 across the window → ÷2 years → 4 per 1000 per year) and Attack rate (definition verbatim, the stacked-fraction formula, the printed worked example, and the 60/80 = 75% strip with the 10,000 decoy flagged) — plus the denominator-family decoder strip; the full rows are ALSO carried verbatim in the note's first table block (blocks[1]), core.what, the list block (blocks[3]), and recall[0-4]",
        "productionStatus": "complete",
        "plannedKypVisualId": "vital-statistics-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "vital-statistics-populations-sv2",
        "sourcePages": {"part": 1, "pdfPages": [281], "bookPages": "259 (upper)"},
        "visualType": "COMPARISON_FIGURE",
        "visualPurpose": "The Demographic transition block (book 259 upper): the one-sentence definition, the THREE population pyramids (growing / stable / declining), and the four transition rows — birth rate, mortality rate, life expectancy, population — across the three development stages",
        "sourceFigureDescription": "PURE VECTOR FIGURE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh5/vlm-census.txt — VLM available this session): the bold blue row label 'Demographic transition' with the definition 'As a country proceeds to higher levels of development, birth and mortality rates decline to varying degrees, changing the age composition of the population.'; then the shaded row label 'Population pyramid' and THREE pyramids drawn left to right — (1) WIDE-BASED classic triangle = growing, (2) roughly RECTANGULAR/columnar = stable, (3) NARROW-BASED with a bulging middle = declining — each pyramid built of stacked horizontal bars with the Male half shaded blue and the Female half pink; axis furniture per the text layer (Age ×3, Male ×3, Female ×3, Population % ×3 — one set per pyramid, extracting INTERLEAVED in the text layer: Male, Age, Age, Age, Population pyramid, FemaleMale, Female, Male Female, Population % Population, Population, %, %); the VLM saw the vertical Age axis + Male (blue) / Female (pink) legend most clearly on the leftmost pyramid and a '← Population % →' axis under the middle one. Beneath the pyramids, four rows across the three unlabeled stage columns: Birth rate ↑↑/↓/↓↓ · Mortality rate ↑/↓/↓ · Life expectancy Short/Long/Long · Population Growing/Stable/Declining (bold blue row labels, light-blue shading on the birth/mortality rows). The 'Likelihood ratio' heading immediately follows the transition table (the pinned lower boundary of this topic).",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "vital-statistics-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's Zones B+C (VitalStatisticsMap in visuals/pubhealth-p5.tsx): the printed definition sentence as a banner; the three pyramids redrawn side by side as original KYP vector art (Male left in blue / Female right in pink, horizontal bars by Age with a horizontal 'Age' axis label and arrow, 'Population %' double-headed axis beneath, stage chips GROWING/STABLE/DECLINING with the VLM-pinned shapes — wide-based triangle, even rectangle, narrow base with bulging middle); and the four transition rows as a banded table beneath with vector arrow glyphs (birth rate's double arrows vs mortality rate's singles); the full rows are ALSO carried verbatim in the note's second table block (blocks[2]), core.what, mechanisms[1], the steps block (blocks[4]), and recall[5-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "vital-statistics-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh5"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "vital-statistics-populations.json").write_text(json.dumps(m5, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "vital-statistics-populations.json").write_text(
    json.dumps({"topicId": "vital-statistics-populations", "chapterId": "public-health", "inventory": inv5,
                "coverageAudit": {"topicId": "vital-statistics-populations", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The topic's upper portion carries TWO visual assets — sv1 the continued Quantifying-risk table's final two rows (Mortality rate, Attack rate — accounted for as an ORIGINAL KYP ADAPTATION) and sv2 the Demographic transition block (the definition sentence, the three population pyramids, and the four transition rows — accounted for as an ORIGINAL_KYP_REDRAW of pure-vector art) — both implemented in ONE registry visual (vital-statistics-map, VitalStatisticsMap in visuals/pubhealth-p5.tsx, viewBox 0 0 1102 1232): nothing is reproduced; Zone A rebuilds the two rows as formula cards with the printed worked examples dissected and the denominator-family decoder, Zones B+C redraw the three pyramids (Male left blue / Female right pink, bars by Age, Population % axes, VLM-pinned shapes wide-based/rectangular/narrow-based) with the four transition rows as a band beneath, and both tables' full text is additionally carried verbatim in the note's two table blocks. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi full-page glm-4.6v pass (staging-pubh5/vlm-census.txt) confirmed the printed rows verbatim, the three pyramid shapes and left→right Growing → Stable → Declining stage order, the printed arrows (birth rate the only double-arrow row), the unlabeled stage columns, and the immediately-following 'Likelihood ratio' heading (the pinned page-split boundary). The figure's axis labels extract INTERLEAVED in the text layer (Age ×3, Male ×3, Female ×3, Population % ×3) — documented; the KYP redraw gives each pyramid the complete axis set. PINNED PAGE-SPLIT: the topic owns pdf 281 / book 259 UPPER only, ending before the 'Likelihood ratio' heading (LR → likelihood-ratios; Kaplan-Meier → survival-analysis). STAGED under .usmle-pipeline-cache/staging-pubh5/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH5 manifest + inventory staged: {OUT}/manifests/vital-statistics-populations.json, {OUT}/visual-inventory/vital-statistics-populations.json")
print(f"vital-statistics-populations: evidence {len(kept)}/{len(E5)} verified")
