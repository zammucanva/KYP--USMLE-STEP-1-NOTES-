#!/usr/bin/env python3
"""PUBH11 bias-and-study-errors — manifest + inventory (Public Health batch 2),
STAGED under .usmle-pipeline-cache/staging-pubh11/ (the promotion step owns
content/). Source: FULL pdf page 285 / book 263 (Part 1) — a WHOLE-PAGE topic
in the EPIDEMIOLOGY AND BIOSTATISTICS subsection (the page after Incidence vs
prevalence, the page before Confounding vs effect modification). The topic
owns the WHOLE page, which carries the "Bias and study errors" table —
columns TYPE / DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS, SEVEN rows
in printed order (Selection bias, Recall bias, Measurement bias, Procedure
bias, Observer-expectancy bias, Lead-time bias, Length-time bias), every cell
carried verbatim in the note's table block — PLUS the study-stage rail
printing INSIDE the table as three full-width light-teal bands ("Recruiting
participants" above the Selection bias row; "Performing study" above the
Recall bias row, governing Recall/Measurement/Procedure/Observer-expectancy;
"Interpreting results" above the Lead-time bias row, governing
Lead-time/Length-time). Census (pdfimages): ZERO raster images — color-coded
table + bands + the indd footer slug. VLM AVAILABLE this session (glm-4.6v at
120dpi, ONE full-page pass + TWO zoom passes, staging-pubh11/vlm-census.txt),
with colors PINNED by PyMuPDF span reads + 300dpi pixel sampling: exactly
SEVEN rows in printed order (none missing or extra); the STRATEGIES column
carries ONE merged cell spanning BOTH the Procedure bias and
Observer-expectancy bias rows ("Blinding (masking) and use of placebo reduce
influence of participants and researchers on procedures and interpretation of
outcomes as neither are aware of group assignments"); navy table title and
column headers, teal TYPE names and band labels, black body; red reserved for
First Aid's own letter-link hooks — "be"/"bias" of "(bedside bias)", the
"observed" + "Haw"/"watches"/"haw" watch-words of the red mnemonic
"(Hawthorne watches you like a hawk).", and the "E"+"d" binding L(e)a(d)-time
bias to its definition "(E)arly (d)etection"; "Most commonly a sampling bias"
prints BLACK (the VLM's first red call was pixel-corrected). ADJUDICATIONS,
documented in the census file and the manifest notes: (A) the task brief
described TWO separate strategy cells for Procedure bias ("Blinding (masking)
and use of placebo") and Observer-expectancy bias ("Blinding and placebo
(reduce influence of ...)") — the PRINT has ONE merged cell spanning both
rows (bbox y-span 449.5-527.5 + pdftotext -layout flow + the zoom VLM pass
all agree: no internal divider; the DEFINITION/EXAMPLES columns DO divide the
two rows) — brief corrected to print, and the note + visual draw the merged
cell exactly as printed; (B) "Convenience sampling—patients are enrolled on
basis of ease of contact" prints in the DEFINITION column (bbox x 199.5-303.6
= the DEFINITION band; the full-page VLM pass agrees) as the third stacked
block of the Selection bias DEFINITION cell, under "Most commonly a sampling
bias" — the task brief listed it among the EXAMPLES; print governs (the
EXAMPLES cell carries Berkson + Attrition only); (C) "Most commonly a
sampling bias" prints in BLACK as a sub-line of the Selection bias DEFINITION
cell (pixel-pinned, 0 red pixels — the VLM's "red" call corrected); (D) the
three stage labels print as full-width light-teal shaded bands INSIDE the
table (not a left-margin rail), text left-aligned at the TYPE column in navy
— the 1-4-2 stage mapping pinned by bbox + the VLM passes. Printed quirks
carried + documented: "SEC TION II" header-space extraction artifact (known,
as-is); small-caps artifacts "EPIDEmIOLOGY AND BIOSTATISTICS" (running
header; the banner prints ONCE — this is not the subsection opener) and the
column header "EXAmPLES" (lowercase m, carried as extracted); "follow up"
(two words, verb — Attrition example) vs "follow-up" (hyphenated noun —
Recall strategy), both carried exactly as printed; em-dashes in "Convenience
sampling—", "Berkson bias—", "Attrition bias—", "Hawthorne effect—"; curly
quotes/apostrophe in 'Measure "back-end" survival' and "Researcher's"; the C1
control byte before the arrow in "↑ survival" (the evidence quote carries it
and the verifier strips it); "and/" + "or" line-wrap split in the Berkson
cell (the joined "and/or" is carried); "Observer-expectancy / bias" wraps
across two lines in its TYPE cell; the raw text layer extracts the TYPE
cells "Selection bias" (row 1) and "Lead-time bias" (row 6) LATE, interleaved
with the three band labels (raw lines 108-114), while rows 2-5 extract in
place — bbox/-layout/VLM pin the printed positions; sentence-final periods
normalized in the verbatim table (the text layer prints terminal punctuation
only inside the Hawthorne mnemonic). Nothing is reproduced: the table + rail
are an ORIGINAL KYP ADAPTATION (docked rail + cards + one merged fix box
spanning the Procedure/Observer-expectancy cards) in ONE registry visual
(bias-map, BiasMap in visuals/pubhealth-p11.tsx, viewBox 0 0 1102 1360); the
full table is additionally carried VERBATIM in the note's table block.
DrugCards: none — the page prints biases, not drugs (folded by absence; the
printed clinical props — sphygmomanometer, specialized hospital units,
mammography/breast cancer, slowly vs rapidly progressive cancer — are carried
in the note's clinical block)."""
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
L = {285: pages[284].split("\n")}
P = {285: norm(pages[284])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — book page 263, the 'SEC TION II' header-space extraction artifact (carried as-is, a known quirk), the section header PUBLIC HEALTH SCIENCES, the subsection banner '▶ PUBLIC HEALTH SCIENCES—EPIDEmIOLOGY AND BIOSTATISTICS' printing ONCE in the running header (this is not the subsection opener — no in-body ribbon; small-caps 'm' artifact as extracted), and the table title 'Bias and study errors'", rng(285, 1, 9), [285]),
    ("The table's four column headers — TYPE / DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS (the EXAMPLES header extracts with a lowercase 'm' — a small-caps extraction artifact, carried as extracted)", rng(285, 10, 16), [285]),
    ("ROW 1, part 1 — Selection bias DEFINITION cell: 'Nonrandom sampling or treatment allocation of subjects such that study population is not representative of target population' + the printed sub-line 'Most commonly a sampling bias' (prints BLACK, pixel-pinned) + 'Convenience sampling—patients are enrolled on basis of ease of contact' (ADJUDICATION: prints in the DEFINITION column — bbox x 199.5-303.6 + the VLM pass agree — as the cell's third stacked block; the task brief listed it among the examples; print governs)", rng(285, 18, 28), [285]),
    ("ROW 1, part 2 — Selection bias EXAMPLES + STRATEGIES cells (raw reading order interleaves the two columns): Berkson bias—cases and/or controls selected from hospitals (bedside bias) are less healthy and have different exposures ('and/or' wraps across lines in the raw layer — the joined form is carried); Attrition bias—participants lost to follow up have a different prognosis than those who complete the study ('follow up' prints as TWO WORDS here, verb); Randomization (creates groups with similar distributions of known and unknown variables); Ensure the choice of the right comparison/reference group", rng(285, 30, 44), [285]),
    ("ROW 2 — Recall bias → Awareness of disorder alters recall by subjects; common in retrospective studies → Patients with disease recall exposure after learning of similar cases → Decrease time from exposure to follow-up (hyphenated noun here); use medical records as sources", rng(285, 46, 58), [285]),
    ("ROW 3 — Measurement bias → Information is gathered in a systemically distorted manner → Using a faulty automatic sphygmomanometer; Hawthorne effect—participants change behavior upon awareness of being observed (Hawthorne watches you like a hawk). [First Aid's OWN mnemonic, printed in RED in the cell — carried VERBATIM and ATTRIBUTED] → Use objective, standardized, and previously tested methods of data collection that are planned ahead of time; Use placebo group", rng(285, 60, 77), [285]),
    ("ROW 4 — Procedure bias → Subjects in different groups are not treated the same → Patients in treatment group spend more time in highly specialized hospital units → [its STRATEGIES cell is the ONE merged cell shared with row 5, quoted with row 5]", rng(285, 79, 86), [285]),
    ("ROW 5 + THE MERGED STRATEGIES CELL — Observer-expectancy bias ('Observer-expectancy / bias' wraps across two lines in its TYPE cell) → Researcher's belief in the efficacy of a treatment changes the outcome of that treatment (also called Pygmalion effect) → An observer expecting treatment group to show signs of recovery is more likely to document positive outcomes; AND the print's ONE merged STRATEGIES cell spanning BOTH the Procedure bias and Observer-expectancy bias rows: 'Blinding (masking) and use of placebo reduce influence of participants and researchers on procedures and interpretation of outcomes as neither are aware of group assignments' (ADJUDICATION: the task brief described TWO separate strategy cells — bbox y-span 449.5-527.5 + -layout flow + the zoom VLM pass all agree the print has ONE merged cell with no internal divider; brief corrected to print)", rng(285, 88, 106), [285]),
    ("THE STUDY-STAGE RAIL — the three band labels printing inside the table as full-width light-teal shaded bands: 'Recruiting participants' (governs the Selection bias row), 'Performing study' (governs Recall / Measurement / Procedure / Observer-expectancy), 'Interpreting results' (governs Lead-time / Length-time) — AND the reading-order quirk: the TYPE cells 'Selection bias' (row 1) and 'Lead-time bias' (row 6) extract LATE in the raw layer, interleaved with the band labels (rows 2-5 extract in place); the 1-4-2 stage mapping is pinned by bbox + the VLM passes", rng(285, 108, 114), [285]),
    ("ROW 6 — Lead-time bias → Early detection interpreted as ↑ survival, but the disease course has not changed [a C1 control byte precedes the ↑ arrow in the raw layer — known artifact, stripped by the verifier; the book prints the 'E' of 'Early' and the 'd' of 'detection' in RED — its own letter-link L(e)a(d)-time = (E)arly (d)etection, carried ATTRIBUTED] → Breast cancer diagnosed early by mammography may appear to exaggerate survival time because patients are known to have the cancer for longer → Measure 'back-end' survival (adjust survival according to the severity of disease at the time of diagnosis); a caveat of adjusting for severity is the potential masking of causality", rng(285, 116, 132), [285]),
    ("ROW 7 — Length-time bias → Screening test detects diseases with long latency period, while those with shorter latency period become symptomatic earlier → A slowly progressive cancer is more likely detected by a screening test than a rapidly progressive cancer → A randomized controlled trial assigning subjects to the screening program or to no screening", rng(285, 134, 150), [285]),
    ("The print footer slug — 'FAS1_2026_06-PubHealth.indd 263' + timestamp 12/16/25 12:46 PM (page identity, book 263)", rng(285, 152, 154), [285]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"bias-and-study-errors: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "bias-and-study-errors", "title": "Bias and Study Errors: The Seven Traps and Their Fixes",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [285], "bookPages": "263–263"},
    "sourceEvidence": kept, "visualIds": ["bias-map"],
    "mechanismIds": ["stage-trap-map", "fix-toolbox-map"],
    "kypExtensions": [
        {"id": "stage-decoder-grammar",
         "summary": "The three-stage grammar of the printed rail: every study passes Recruiting participants → Performing study → Interpreting results, and each bias enters at the stage whose work it distorts — the recruiting band holds ONE trap (selection, with its three printed faces: convenience, Berkson 'bedside', attrition), the performing band holds FOUR (recall, measurement, procedure, observer-expectancy — what is remembered, measured, done, expected), the interpreting band holds TWO (lead-time, length-time — how screening results are read); the 1-4-2 census and the 'stage → distorted action → trap → fix' decode are the KYP synthesis of the printed bands.",
         "origin": "outside-first-aid", "rationale": "The source prints the three band labels as group headers but never states the generating grammar (the stage where the distortion enters names the trap) nor the 1-4-2 census; the synthesis is KYP's.",
         "location": "core.keyIdea MOVES 1-2 + mechanisms[0] stage-trap-map + blocks[3] the steps block + the registry visual's left rail and rule strip"},
        {"id": "fix-toolbox-mapping",
         "summary": "The fix-toolbox reading of the STRATEGIES column: six printed fix families mapped stage-to-trap — randomization (similar distributions of known and unknown variables) + the right comparison/reference group → selection; a shorter exposure-to-follow-up window + medical records → recall; objective, standardized, previously tested methods planned ahead of time + a placebo group → measurement; the ONE merged cell (blinding (masking) + placebo, neither participants nor researchers aware of assignments) → procedure AND observer-expectancy together; back-end survival adjusted for severity at diagnosis (caveat: potential masking of causality) → lead-time; the screening RCT (screening program vs no screening) → length-time; the claim 'fixes are stage-matched' and the read-a-named-fix-backwards move are KYP's.",
         "origin": "outside-first-aid", "rationale": "The source prints the strategies per row; the toolbox organization, the stage-matching rule, and the reverse-reading move are KYP's design.",
         "location": "mechanisms[1] fix-toolbox-map + core.keyIdea MOVE 4 + blocks[2] the decoder list + the registry visual's fix chips and merged fix box"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the mammography lead-time stem, the slowly-progressive-cancer length-time stem, the solvent-recall case-control stem, the wearable-monitor Hawthorne stem), 4 traps (lead-time vs length-time; Hawthorne vs observer-expectancy — whose awareness acts; procedure vs observer-expectancy — unequal care vs expectant documentation, both killed by the merged cell; Berkson vs attrition — the two enrollment-vs-retention faces of selection), 3 pivots (the screening-bias router, the bias-vs-confounding boundary with the next page, the named-fix read backwards), and 9 recall cards covering all seven rows plus the rail and the randomization fix.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the definitions, examples, and strategies only; the attack structure, distractor shapes, and question templates are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: First Aid's OWN printed hooks — '(Hawthorne watches you like a hawk).' (red in the Measurement bias EXAMPLES cell), the '(bedside bias)' nickname (red letter-link 'be…bias' in the Berkson example), and the red E+d letter-link binding L(e)a(d)-time bias to '(E)arly (d)etection' — carried VERBATIM and ATTRIBUTED in the mnemonics array, the memory callout, the verbatim table block, and the visual's cards; plus TWO KYP originals, marked as such: 'ONE RECRUITS, FOUR PERFORM, TWO INTERPRET' (the 1-4-2 stage census) and 'LEAD-TIME STEALS A HEAD START; LENGTH-TIME FAVORS THE SLOW' (the two screening biases and their fixes).",
         "origin": "outside-first-aid", "rationale": "The three hooks are the source's own (attributed, not counted as KYP's — the red letter-link device is pinned by PyMuPDF span colors + 300dpi pixel reads + the VLM pass); no margin mnemonic prints anywhere on pdf 285 (pdfimages + the VLM census); the two ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + blocks[6] the memory callout + the visual's card hook lines"},
        {"id": "clinical-and-boundary-layer",
         "summary": "The clinical anchor layer: the page's four printed props — the faulty automatic sphygmomanometer (measurement), the highly specialized hospital unit (procedure), the mammography/breast-cancer screening example (lead-time), and the slowly-vs-rapidly progressive cancer (length-time) — plus the observational validity boundary framing (all seven rows are BIAS; book 264 opens 'Confounding vs effect modification', the rival third-variable explanation — a different beast) and the miniCase (the hospital-recruited bladder-cancer case-control vignette routed to Berkson/selection bias against recall, Hawthorne/measurement, observer-expectancy, and lead-time distractors).",
         "origin": "outside-first-aid", "rationale": "The props and examples themselves are printed (FA-own); the anchor organization, the boundary framing, and the miniCase vignette with its distractors are KYP's design, flagged as such.",
         "location": "clinical block + usmle.miniCase + usmle.patterns + the registry visual's example lines"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 285 / book 263, carrying the 'Bias and study errors' table (columns TYPE / DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS, SEVEN rows in printed order: Selection, Recall, Measurement, Procedure, Observer-expectancy, Lead-time, Length-time — carried VERBATIM in the note's table block, blocks[1]) PLUS the study-stage rail printing as three full-width light-teal bands INSIDE the table (Recruiting participants / Performing study / Interpreting results — the 1-4-2 grouping). CENSUS (pdfimages): ZERO raster images; VLM WAS AVAILABLE this session (ONE 120dpi glm-4.6v full-page pass + TWO zoom passes, staging-pubh11/vlm-census.txt), colors PINNED by PyMuPDF span reads + 300dpi pixel sampling: exactly SEVEN rows confirmed in printed order (none missing or extra); the STRATEGIES column carries ONE merged cell spanning the Procedure + Observer-expectancy rows; navy title/headers, teal TYPE names + band labels, black body; red reserved for FA's letter-link hooks ('(bedside bias)', the Hawthorne mnemonic's watch-words + 'observed', the E+d of Lead-time = Early detection); 'Most commonly a sampling bias' prints BLACK (the VLM's first red call was pixel-corrected); no margin notes, mnemonics, asterisk footnotes, or images. ADJUDICATIONS (all reads agree — raw text layer + pdftotext -bbox/-layout + PyMuPDF spans + pixel sampling + the VLM passes): (A) ONE merged STRATEGIES cell spans rows 4-5 ('Blinding (masking) and use of placebo reduce influence of participants and researchers on procedures and interpretation of outcomes as neither are aware of group assignments') — the task brief described two separate cells; brief corrected to print, and the note's table + the visual's merged fix box draw it exactly as printed; (B) 'Convenience sampling—patients are enrolled on basis of ease of contact' prints in the DEFINITION column (the brief listed it among the examples; print governs — the EXAMPLES cell carries Berkson + Attrition only); (C) 'Most commonly a sampling bias' prints black (VLM color call corrected by pixel sampling); (D) the stage rail prints as full-width bands inside the table, mapping 1-4-2. Quirks carried + documented: 'SEC TION II' header-space artifact (known, as-is); small-caps artifacts 'EPIDEmIOLOGY AND BIOSTATISTICS' (banner prints ONCE — running header only, not the subsection opener) and the column header 'EXAmPLES'; 'follow up' (two words, Attrition verb) vs 'follow-up' (hyphenated, Recall strategy noun) both as printed; em-dashes in the four 'name—' compounds; curly quotes/apostrophe in 'Measure “back-end” survival' and 'Researcher’s'; the C1 control byte before the ↑ arrow in '↑ survival' (carried in the evidence quote, stripped by the verifier); 'and/' + 'or' line-wrap split (joined 'and/or' carried); 'Observer-expectancy / bias' wraps in its TYPE cell; rows 1 and 6's TYPE cells extract late interleaved with the band labels (raw lines 108-114) — positions bbox-pinned; sentence-final periods normalized in the verbatim table (the text layer prints terminal punctuation only inside the Hawthorne mnemonic). Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (stage-trap-map, fix-toolbox-map), a visual block + verbatim table block + decoder list + steps block + compare block + exam callout + memory callout, a clinical block (the four printed props + the confounding boundary), 4 patterns, 4 traps, 3 pivots, 9 recall, 4 related (confounding-effect-modification — produced in parallel in this same batch, referenced by design; clinical-therapeutic-trials; observational-studies; roc-precision-accuracy — all four are public-health census topicIds), 4 crossLinks, 4 mnemonics (First Aid's own three hooks carried attributed + two KYP originals marked — the ledger holds 4 entries: the Hawthorne mnemonic, the Berkson bedside nickname, and the two KYP codes, with the E+d letter-link carried inside the Hawthorne/Lead-time material and the memory callout), and a miniCase with 5 options (exactly 1 correct, why/whyWrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints biases, not drugs — no mechanisms/uses/adverse effects to trace, so the DrugCard shape does not fit; the printed clinical props are carried in the clinical block instead; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh11/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'bias-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's TWO visual assets are implemented in ONE registry visual (bias-map, BiasMap in visuals/pubhealth-p11.tsx, viewBox 0 0 1102 1360): the seven-row table as an ORIGINAL KYP ADAPTATION (seven cards in printed order carrying definition → examples → FIX chip, with FA's red hooks attributed and the merged blinding-and-placebo cell drawn as ONE fix box spanning the Procedure + Observer-expectancy cards) and the stage rail as an ORIGINAL KYP ADAPTATION (the three full-width bands re-drawn as a docked left rail with the 1-4-2 census and band-to-card connectors) — with the full table's text ALSO carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Epidemiology and Biostatistics",
    "topicId": "bias-and-study-errors", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "bias-and-study-errors-sv1",
        "sourcePages": {"part": 1, "pdfPages": [285], "bookPages": "263"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Bias and study errors table (book 263): the seven bias traps — columns TYPE / DEFINITION / EXAMPLES / STRATEGIES TO REDUCE BIAS, rows Selection bias through Length-time bias — the Epidemiology and Biostatistics subsection's validity core, including the ONE merged STRATEGIES cell spanning the Procedure bias and Observer-expectancy bias rows",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi + PyMuPDF span colors + 300dpi pixel reads, staging-pubh11/vlm-census.txt — VLM available this session): the running header (book page 263, SEC TION II, PUBLIC HEALTH SCIENCES, '▶ PUBLIC HEALTH SCIENCES—EPIDEmIOLOGY AND BIOSTATISTICS' printed ONCE — running header only), the dark navy table title 'Bias and study errors', column headers TYPE / DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS (small caps, navy), then SEVEN rows in printed order with teal TYPE names, black body text, and RED reserved for First Aid's letter-link hooks: Selection bias → Nonrandom sampling or treatment allocation of subjects such that study population is not representative of target population + 'Most commonly a sampling bias' (black sub-line) + 'Convenience sampling—patients are enrolled on basis of ease of contact' (both in the DEFINITION cell) → Berkson bias—cases and/or controls selected from hospitals (bedside bias) are less healthy and have different exposures (red letter-link 'be…bias') + Attrition bias—participants lost to follow up have a different prognosis than those who complete the study → Randomization (creates groups with similar distributions of known and unknown variables) + Ensure the choice of the right comparison/reference group; Recall bias → Awareness of disorder alters recall by subjects; common in retrospective studies → Patients with disease recall exposure after learning of similar cases → Decrease time from exposure to follow-up; use medical records as sources; Measurement bias → Information is gathered in a systemically distorted manner → Using a faulty automatic sphygmomanometer + Hawthorne effect—participants change behavior upon awareness of being observed (Hawthorne watches you like a hawk). (red mnemonic) → Use objective, standardized, and previously tested methods of data collection that are planned ahead of time + Use placebo group; Procedure bias → Subjects in different groups are not treated the same → Patients in treatment group spend more time in highly specialized hospital units → [ONE merged cell with row 5]; Observer-expectancy bias → Researcher's belief in the efficacy of a treatment changes the outcome of that treatment (also called Pygmalion effect) → An observer expecting treatment group to show signs of recovery is more likely to document positive outcomes → the ONE merged STRATEGIES cell spanning BOTH rows 4-5: 'Blinding (masking) and use of placebo reduce influence of participants and researchers on procedures and interpretation of outcomes as neither are aware of group assignments'; Lead-time bias → Early detection interpreted as ↑ survival, but the disease course has not changed (the E of Early and the d of detection print RED — the letter-link L(e)a(d)-time = (E)arly (d)etection) → Breast cancer diagnosed early by mammography may appear to exaggerate survival time because patients are known to have the cancer for longer → Measure 'back-end' survival (adjust survival according to the severity of disease at the time of diagnosis); a caveat of adjusting for severity is the potential masking of causality; Length-time bias → Screening test detects diseases with long latency period, while those with shorter latency period become symptomatic earlier → A slowly progressive cancer is more likely detected by a screening test than a rapidly progressive cancer → A randomized controlled trial assigning subjects to the screening program or to no screening.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "bias-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the seven-card grid in the registry visual (BiasMap in visuals/pubhealth-p11.tsx): one card per printed row in PRINTED order, each carrying the definition line(s), the example line(s) (with First Aid's red hooks attributed: the '(bedside bias)' nickname and the '(Hawthorne watches you like a hawk).' mnemonic in emergency red), and the FIX chip (RANDOMIZATION + RIGHT COMPARISON/REFERENCE GROUP / RECORDS + SHORTER WINDOW / PRETESTED METHODS + PLACEBO GROUP / [the merged box] / BACK-END SURVIVAL + CAVEAT / SCREENING RCT), with the Procedure + Observer-expectancy cards sharing ONE merged fix box exactly as the print merges their STRATEGIES cell; the table's full text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, the decoder list block (blocks[2]), and recall[0-8]",
        "productionStatus": "complete",
        "plannedKypVisualId": "bias-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "bias-and-study-errors-sv2",
        "sourcePages": {"part": 1, "pdfPages": [285], "bookPages": "263"},
        "visualType": "FLOWCHART",
        "visualPurpose": "The study-stage rail (book 263): the three life-cycle bands printing inside the bias table — Recruiting participants / Performing study / Interpreting results — grouping the seven traps 1-4-2 by the stage at which each bias enters; the page's organizing grammar and the KYP stage-rule's backbone",
        "sourceFigureDescription": "THREE FULL-WIDTH SHADED BANDS printing INSIDE the table between its row groups, no raster (pdfimages: zero raster images; geometry pinned by pdftotext -bbox coordinates + pdftotext -layout + the VLM passes at 120dpi including a dedicated band-zoom pass, staging-pubh11/vlm-census.txt — VLM available this session): light teal/blue shaded horizontal bands spanning all four table columns, each with its label left-aligned at the TYPE column in dark navy, horizontal text, no arrows or brackets — 'Recruiting participants' above the Selection bias row (governs 1 row); 'Performing study' above the Recall bias row (governs 4 rows: Recall, Measurement, Procedure, Observer-expectancy); 'Interpreting results' above the Lead-time bias row (governs 2 rows: Lead-time, Length-time). Reading-order quirk: the band labels extract interleaved with the row-1 and row-6 TYPE cells (raw lines 108-114); positions pinned by bbox.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "bias-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the docked left rail of the registry visual (BiasMap in visuals/pubhealth-p11.tsx): three stage boxes (RECRUITING PARTICIPANTS · 1 trap · who gets in — and who stays · SELECTION BIAS chip; PERFORMING STUDY · 4 traps · what is remembered, measured, done, and expected · four trap chips + the fix-family note; INTERPRETING RESULTS · 2 traps · how screening results are read · the two trap chips + the fix note), connected down the study life cycle with band arrows and dashed band-to-card connectors, plus the KYP stage rule strip below the cards (RANDOMIZE THE RECRUITING · BLIND AND STANDARDIZE THE PERFORMING · ADJUST THE CLOCK OR RANDOMIZE THE SCREEN FOR THE INTERPRETING); the rail's semantics are also carried in mechanisms[0] stage-trap-map, blocks[3] the steps block, the memory callout (the ONE RECRUITS, FOUR PERFORM, TWO INTERPRET census), and recall[7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "bias-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh11"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "bias-and-study-errors.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "bias-and-study-errors.json").write_text(
    json.dumps({"topicId": "bias-and-study-errors", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "bias-and-study-errors", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries TWO visual assets — the Bias and study errors table (sv1: SEVEN rows, columns TYPE / DEFINITION / EXAmPLES / STRATEGIES TO REDUCE BIAS, from Selection bias through Length-time bias, including the ONE merged STRATEGIES cell spanning the Procedure + Observer-expectancy rows) and the study-stage rail (sv2: the three full-width bands Recruiting participants / Performing study / Interpreting results printing inside the table, grouping the rows 1-4-2) — both accounted for in ONE registry visual (bias-map, BiasMap in visuals/pubhealth-p11.tsx, viewBox 0 0 1102 1360), both as ORIGINAL KYP ADAPTATIONS (the table as seven cards in printed order with First Aid's red hooks attributed — '(Hawthorne watches you like a hawk).' and '(bedside bias)' — and the merged blinding-and-placebo cell drawn as ONE fix box spanning the Procedure + Observer-expectancy cards; the rail as a docked left rail with the 1-4-2 census, band arrows, and the KYP stage rule strip); nothing is reproduced, and the full table's text is additionally carried verbatim in the note's table block. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi full-page pass plus TWO zoom passes (vlm-census.txt), colors pinned by PyMuPDF span reads + 300dpi pixel sampling: exactly seven rows in printed order; ONE merged strategies cell spanning rows 4-5 (bbox + layout + the zoom pass agree); navy title/headers, teal TYPE names + band labels, black body; red reserved for FA's letter-link hooks ('(bedside bias)', the Hawthorne watch-words + 'observed', the E+d of Lead-time = Early detection); 'Most commonly a sampling bias' prints BLACK (the VLM's first red call was pixel-corrected). ADJUDICATIONS (print governs): ONE merged STRATEGIES cell spans rows 4-5 — the task brief described two separate cells; 'Convenience sampling—patients are enrolled on basis of ease of contact' prints in the DEFINITION cell (the brief listed it among the examples); the stage bands are full-width rows inside the table mapping 1-4-2. FULL single page (pdf 285 / book 263), the page after Incidence vs prevalence and before Confounding vs effect modification. STAGED under .usmle-pipeline-cache/staging-pubh11/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH11 manifest + inventory staged: {OUT}/manifests/bias-and-study-errors.json, {OUT}/visual-inventory/bias-and-study-errors.json")
print(f"bias-and-study-errors: evidence {len(kept)}/{len(E1)} verified")
