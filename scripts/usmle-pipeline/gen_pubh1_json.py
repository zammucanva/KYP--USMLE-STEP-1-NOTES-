#!/usr/bin/env python3
"""PUBH1 observational-studies — manifest + inventory (Public Health batch 1),
STAGED under .usmle-pipeline-cache/staging-pubh1/ (the promotion step owns
content/). Source: FULL pdf page 278 / book 256 (Part 1) — the FIRST content
page of the Public Health Sciences chapter (pdf 277 = the chapter opener,
book 255, unclaimed — the p249 convention) and the FIRST page of the
EPIDEMIOLOGY AND BIOSTATISTICS subsection; the topic owns the WHOLE page,
which carries TWO blocks: (1) the "Observational studies" table — columns
STUDY TYPE / DESIGN / mEASURES/EXAmPLE, SEVEN rows in printed order (Case
series, Cross-sectional study, Case-control study, Cohort study, Twin
concordance study, Adoption study, Ecological study), every cell carried
verbatim in the note's table block; (2) the study-design TIMELINE FIGURE —
pure vector line art: a vertical Past–Present–Future axis with four panels
(Cross-sectional: two Risk factor boxes at Present -> "Compare disease
prevalence"; Case-control: Diseased cases + Controls without disease at
Present, arrows back to "Compare risk factor frequency" at Past;
Retrospective cohort: Risk factor boxes at Past -> "Compare disease
incidence" at Present + "Review previous records"; Prospective cohort: Risk
factor boxes at Present -> "Compare disease incidence" at Future). Census
(pdfimages): ZERO raster images — pure text, one table, one vector figure,
the indd footer slug. VLM AVAILABLE this session (glm-4.6v at 120dpi): ONE
full-page pass (staging-pubh1/vlm-census.txt) confirming exactly SEVEN
table rows in printed order (none missing or extra), the two in-cell
mnemonics printed in RED inside the MEASURES/EXAMPLE cells ("Control the
case in the OR." — Case-control row; "Cohort = relative risk." — Cohort
row — First Aid's OWN, carried VERBATIM and ATTRIBUTED), the figure's
panel geometry (with/without circle icons on the Risk factor boxes, solid
black arrows, the case-control arrows pointing back in time), the dark
navy table title, and the absence of margin notes, mnemonics, asterisk
footnotes, and images. ADJUDICATIONS, documented in the census file and
the manifest notes: (A) the batch brief's figure description assigned
"compare risk factor frequency" to the Cross-sectional panel and "compare
disease prevalence" to the Case-control panel — the PRINT says the
OPPOSITE (pdftotext -bbox column coordinates + pdftotext -layout + the VLM
pass all agree: Cross-sectional -> "Compare disease prevalence";
Case-control -> "Compare risk factor frequency"), internally consistent
with the printed table (Cross-sectional measures "Disease prevalence.";
Case-control "Looks to see if odds of prior exposure or risk factor differ
by disease state") — brief corrected to print; (B) the table content
matched the brief's expectation exactly (seven rows) — no correction.
Printed quirks carried + documented: "SEC TION II" header-space extraction
artifact (known, as-is); small-caps extraction artifacts "EPIDEmIOLOGY AND
BIOSTATISTICS" (both banner instances) and the column header
"mEASURES/EXAmPLE"; the subsection banner prints TWICE (running header +
in-body ribbon); the Cross-sectional DESIGN cell prints "risk-related"
across a line wrap, which the raw text layer merges to "riskrelated" (the
hyphenated print is carried in the note; the merge is documented); the
figure's text objects extract AFTER the table in jumbled reading order
with the indd footer slug interleaved MID-FIGURE (the evidence ranges
quote the labels in raw extraction order; the panel assignment is pinned
by bbox coordinates + the VLM pass); "Twin concordance study" wraps across
two lines in its STUDY TYPE cell. Nothing is reproduced: the table is an
ORIGINAL KYP ADAPTATION (cards) and the figure an ORIGINAL_KYP_REDRAW
(the vertical axis re-arranged horizontal) in ONE registry visual
(observational-studies-map, ObservationalStudiesMap in
visuals/pubhealth-p1.tsx, viewBox 0 0 1102 1170); the full table is
additionally carried VERBATIM in the note's table block. DrugCards: none —
the page prints study designs, not drugs (folded by absence; the clinical
examples COPD/schizophrenia are carried in the note's clinical block)."""
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
L = {278: pages[277].split("\n")}
P = {278: norm(pages[277])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — book page 256, the 'SEC TION II' header-space extraction artifact (carried as-is, a known quirk), the section header PUBLIC HEALTH SCIENCES, and the subsection banner '▶ PUBLIC HEALTH SCIENCES—EPIDEmIOLOGY AND BIOSTATISTICS' printed TWICE (running header + in-body ribbon — the subsection opener; small-caps 'm' artifact as extracted)", rng(278, 1, 9), [278]),
    ("The table's title and three column headers — 'Observational studies', STUDY TYPE / DESIGN / mEASURES/EXAmPLE (the MEASURES/EXAMPLE header extracts with lowercase 'm's — a small-caps extraction artifact, carried as extracted)", rng(278, 10, 15), [278]),
    ("ROW 1 — Case series → Describes several individual patients with the same diagnosis, treatment, or outcome → Description of clinical findings and symptoms; has no comparison group, thus cannot show risk factor association with disease", rng(278, 17, 24), [278]),
    ("ROW 2 — Cross-sectional study → Frequency of disease and frequency of risk-related factors are assessed in the present → Disease prevalence; can show risk factor association with disease, but does not establish causality (the DESIGN cell's 'risk-related' hyphenates across a line wrap in print — the raw layer merges it to 'riskrelated', documented)", rng(278, 26, 32), [278]),
    ("ROW 3 — Case-control study → Retrospectively compares a group of people with disease to a group without disease; looks to see if odds of prior exposure or risk factor differ by disease state → Odds ratio (OR) + First Aid's OWN red in-cell mnemonic 'Control the case in the OR.' + the printed example: patients with COPD had higher odds of a smoking history than those without COPD", rng(278, 34, 44), [278]),
    ("ROW 4 — Cohort study → Compares a group with a given exposure or risk factor to a group without such exposure; looks to see if exposure or risk factor is associated with later development of disease; can be prospective or retrospective → Disease incidence; Relative risk (RR) + First Aid's OWN red in-cell mnemonic 'Cohort = relative risk.' + the printed example: people who smoke had a higher risk of developing COPD than people who do not", rng(278, 46, 58), [278]),
    ("ROW 5 — Twin concordance study (the name wraps across two lines in its STUDY TYPE cell) → Compares the frequency with which both monozygotic twins vs both dizygotic twins develop the same disease → Measures heritability and influence of environmental factors ('nature vs nurture'); the schizophrenia example: the MZ co-twin has a much higher concordance rate than dizygotic twins, showing a strong genetic component", rng(278, 60, 72), [278]),
    ("ROW 6 — Adoption study → Compares behavioral traits/genetics in siblings raised by biological vs adoptive parents → Measures heritability and influence of environmental factors; the printed example: an adopted child has a higher risk of developing schizophrenia if their biological parent had schizophrenia, regardless of the adoptive parents' health", rng(278, 74, 84), [278]),
    ("ROW 7 — Ecological study → Compares frequency of disease and frequency of risk-related factors across populations; measures population data not necessarily applicable to individuals (ecological fallacy) → Used to monitor population health; the printed example: COPD prevalence was higher in more polluted cities", rng(278, 86, 95), [278]),
    ("The timeline FIGURE, part 1 of 3 (raw extraction order) — the Cross-sectional study panel title, the vertical time axis labels Past / Future / Present, the case-control panel's Past-level compare-label 'Compare risk factor frequency', a 'Risk factor' box label, AND the indd footer slug 'FAS1_2026_06-PubHealth.indd 256' interleaved MID-FIGURE (the vector figure's text objects extract after the table in jumbled reading order — documented quirk; the panel assignment is pinned by pdftotext -bbox + the VLM pass)", rng(278, 97, 110), [278]),
    ("The timeline FIGURE, part 2 of 3 — the Case-control study panel: its title, a 'Risk factor' label, the Cross-sectional panel's compare-label 'Compare disease prevalence' (below the Present line per the VLM pass), and the case-control Present-level group boxes 'Controls without disease' + 'Diseased cases'", rng(278, 112, 124), [278]),
    ("The timeline FIGURE, part 3 of 3 — both cohort panels: 'Retrospective cohort study' title + its Past-level 'Risk factor' boxes; 'Prospective cohort study' title + its Present-level 'Risk factor' boxes; the compare-label 'Compare disease incidence' (printed for BOTH cohort panels); the retrospective method tag 'Review previous records'; and a second 'Compare disease incidence' at the Future level", rng(278, 126, 144), [278]),
    ("The print footer timestamp — 12/16/25 12:46 PM (page identity, book 256)", rng(278, 146, 146), [278]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"observational-studies: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "observational-studies", "title": "Observational Study Designs: The Seven Designs and the Time Axis",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [278], "bookPages": "256–256"},
    "sourceEvidence": kept, "visualIds": ["observational-studies-map"],
    "mechanismIds": ["time-axis-map", "comparison-axis-map"],
    "kypExtensions": [
        {"id": "time-axis-decoder",
         "summary": "The Past–Present–Future grammar of the printed timeline figure: every observational design is anchored at the Present, and the direction of inquiry generates the design and fixes its measure — ONE SLICE of the present (cross-sectional → disease prevalence), a LOOK-BACK from disease (case-control → odds of prior exposure → OR), a FORWARD MARCH from exposure (prospective cohort → disease incidence → RR), and the records variant (retrospective cohort — the same exposure-forward arrow run on previous records, 'Review previous records'); the claim 'the direction fixes the measure' is the KYP synthesis of the printed labels.",
         "origin": "outside-first-aid", "rationale": "The source prints the four panels and their labels but never states the generating grammar (stand at the present, choose a direction) nor the direction→measure rule; the synthesis is KYP's.",
         "location": "core.keyIdea MOVE 1 + mechanisms[0] time-axis-map + blocks[3] the steps block + the registry visual's Zone A lanes and rule strip"},
        {"id": "two-doors-and-unit-ladder",
         "summary": "The 2×2 'two doors' reading (enter by the DISEASE door → case-control → odds ratio; enter by the EXPOSURE door → cohort → incidence + relative risk; freeze the grid at one moment → cross-sectional → prevalence; no grid at all → case series → description only) plus the unit-of-analysis ladder (individual description → individual comparison → twin pairs → adoptive families → whole populations, with the ecological fallacy as the printed toll of the last step and the genetics pair as the only rung that separates genes from environment).",
         "origin": "outside-first-aid", "rationale": "The source prints the seven rows as parallel facts; the two-doors frame, the grid-freeze reading of cross-sectional, and the unit ladder are KYP's organization.",
         "location": "core.why + core.keyIdea MOVES 2–3 + mechanisms[1] comparison-axis-map + blocks[2] the decoder list block"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the case-control COPD odds stem, the cohort smoking-risk stem, the ecological polluted-cities fallacy stem, the twin+adoption schizophrenia heritability stem), 4 traps (case-control vs cohort doors; cross-sectional vs case-control time structure; twin concordance vs adoption; ecological vs individual-level unit), 3 pivots (the measure-router, the two meanings of 'retrospective', the case-series comparison-group tell), and 8 recall cards covering all seven rows plus the figure.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the design definitions only; the attack structure, distractor designs, and question shapes are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: First Aid's OWN two mnemonics — 'Control the case in the OR.' (Case-control row) and 'Cohort = relative risk.' (Cohort row), both printed in RED inside the MEASURES/EXAMPLE cells (VLM-confirmed) — carried VERBATIM and ATTRIBUTED in the mnemonics array, the memory callout, the verbatim table block, and the visual's cards; plus TWO KYP originals, marked as such: 'FOUR Cs, THEN GENES, THEN POPULATIONS' (the seven-row architecture in printed order) and 'ONE SLICE, TWO DIRECTIONS' (the time-axis grammar).",
         "origin": "outside-first-aid", "rationale": "The two in-cell mnemonics are the source's own (attributed, not counted as KYP's); no margin mnemonic prints anywhere on pdf 278 (pdfimages + VLM census, staging-pubh1/vlm-census.txt); the two ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + blocks[6] the memory callout + the visual's card mnemonic lines"},
        {"id": "example-threads-and-boundary-layer",
         "summary": "The clinical anchor layer: the page's two printed example threads — COPD through three designs (case-control: higher odds of a smoking history; cohort: higher risk of developing COPD; ecological: prevalence higher in more polluted cities) and schizophrenia through the two heritability designs (twin concordance: MZ ≫ DZ; adoption: risk follows the biological parent) — plus the observational-vs-experimental boundary framing (every design on this page only observes; book 257 opens Clinical therapeutic trial, where the investigator intervenes) and the miniCase (the 150+150 COPD records-and-interview vignette routed to case-control/OR against cross-sectional, cohort, and ecological distractors).",
         "origin": "outside-first-aid", "rationale": "The examples themselves are printed (FA-own); the thread organization, the boundary framing, the MZ/DZ ~half-genes logic, and the miniCase vignette with its distractors are KYP's design, flagged as such.",
         "location": "clinical block + usmle.miniCase + usmle.patterns + the visual's Card 8"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 278 / book 256, the FIRST content page of the Public Health Sciences chapter (pdf 277 = the chapter opener, unclaimed — the p249 convention) and the FIRST page of the EPIDEMIOLOGY AND BIOSTATISTICS subsection, carrying TWO blocks — the 'Observational studies' table (columns STUDY TYPE / DESIGN / mEASURES/EXAmPLE, SEVEN rows in printed order: Case series, Cross-sectional study, Case-control study, Cohort study, Twin concordance study, Adoption study, Ecological study — carried VERBATIM in the note's table block, blocks[1]) and the study-design TIMELINE FIGURE (four study types on a vertical Past–Present–Future axis with their risk-factor boxes and compare-labels, redrawn as ORIGINAL KYP vector art). CENSUS (pdfimages): ZERO raster images; VLM WAS AVAILABLE this session (ONE 120dpi glm-4.6v full-page pass, staging-pubh1/vlm-census.txt): exactly SEVEN rows confirmed in printed order (none missing or extra); the two in-cell mnemonics print in RED inside the MEASURES/EXAMPLE cells — 'Control the case in the OR.' (Case-control row) and 'Cohort = relative risk.' (Cohort row) — First Aid's OWN, carried VERBATIM and ATTRIBUTED (not counted among the KYP mnemonics); the figure's panels carry circle icons on the Risk factor boxes (with vs without the exposure), solid black arrows (the case-control arrows point back in time), and pink/green/blue time bands; the table title is dark navy with blue STUDY TYPE names and dotted hairlines (no zebra); no margin notes, mnemonics, asterisk footnotes, or images. ADJUDICATION (all three reads agree — raw text layer + pdftotext -bbox/-layout + the VLM pass): the batch brief's figure description assigned 'compare risk factor frequency' to the Cross-sectional panel and 'compare disease prevalence' to the Case-control panel — the PRINT says the OPPOSITE (Cross-sectional → 'Compare disease prevalence'; Case-control → 'Compare risk factor frequency'), internally consistent with the printed table (Cross-sectional measures 'Disease prevalence.'; Case-control 'Looks to see if odds of prior exposure or risk factor differ by disease state') — brief corrected to print; the visual and the note draw the labels exactly as printed. Quirks carried + documented: 'SEC TION II' header-space extraction artifact (known, as-is); small-caps extraction artifacts 'EPIDEmIOLOGY AND BIOSTATISTICS' (the banner prints TWICE — running header + in-body subsection ribbon) and the column header 'mEASURES/EXAmPLE'; the Cross-sectional DESIGN cell's 'risk-related' hyphenates across a line wrap (raw layer merges to 'riskrelated' — the hyphenated print is carried in the note's verbatim table; the evidence range preserves the raw merge); 'Twin concordance study' wraps across two lines in its STUDY TYPE cell; the figure's text extracts after the table in jumbled order with the indd footer slug interleaved mid-figure (evidence ranges 10-12 quote the raw order; the panel assignment is bbox+VLM-pinned); the 'nature vs nurture' curly quotes are as printed. Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (time-axis-map, comparison-axis-map), a visual block + verbatim table block + decoder list + steps block + compare block + exam callout + memory callout, a clinical block (the COPD ×3 and schizophrenia ×2 example threads), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (clinical-therapeutic-trials — produced in parallel in this same batch, referenced by design; quantifying-risk; bias-and-study-errors; incidence-prevalence — all four are public-health census topicIds), 4 crossLinks, 4 mnemonics (First Aid's own two carried attributed + two KYP originals marked), and a miniCase with 4 options (exactly 1 correct, why/whyWrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints study designs, not drugs — no mechanisms/uses/adverse effects to trace, so the DrugCard shape does not fit; the clinical examples (COPD, schizophrenia) are carried in the clinical block instead; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the manifest convention shared with staging-ph28 and staging-pubh5; the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh1/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'observational-studies-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's TWO visual assets are implemented in ONE registry visual (observational-studies-map, ObservationalStudiesMap in visuals/pubhealth-p1.tsx, viewBox 0 0 1102 1170): the table as an ORIGINAL KYP ADAPTATION (seven cards in printed order carrying design → measure → example, both red mnemonics attributed, plus the two-example-threads card) and the timeline figure as an ORIGINAL_KYP_REDRAW (the book's vertical Past-top axis re-arranged as a horizontal KYP axis with four lanes — cross-sectional, case-control, retrospective cohort, prospective cohort — every printed label preserved) — with the full table's text ALSO carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Epidemiology and Biostatistics",
    "topicId": "observational-studies", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "observational-studies-sv1",
        "sourcePages": {"part": 1, "pdfPages": [278], "bookPages": "256"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Observational studies table (book 256): the seven study designs — columns STUDY TYPE / DESIGN / MEASURES/EXAMPLE, rows Case series through Ecological study — the Epidemiology and Biostatistics subsection's opening table and the chapter's design-identification core",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh1/vlm-census.txt — VLM available this session): the running header (book page 256, SEC TION II, PUBLIC HEALTH SCIENCES, '▶ PUBLIC HEALTH SCIENCES—EPIDEmIOLOGY AND BIOSTATISTICS' printed twice — running header + in-body subsection ribbon), the dark navy table title 'Observational studies', column headers STUDY TYPE / DESIGN / MEASURES/EXAMPLE (small caps), then SEVEN rows in printed order with blue/navy STUDY TYPE names, dotted hairline row separators (no zebra striping), and TWO mnemonics printed in RED bold inside the MEASURES/EXAMPLE cells: Case series → Describes several individual patients with the same diagnosis, treatment, or outcome → Description of clinical findings and symptoms; has no comparison group, thus cannot show risk factor association with disease; Cross-sectional study → Frequency of disease and frequency of risk-related factors are assessed in the present → Disease prevalence; can show risk factor association with disease, but does not establish causality; Case-control study → Retrospectively compares a group of people with disease to a group without disease; looks to see if odds of prior exposure or risk factor differ by disease state → Odds ratio (OR); 'Control the case in the OR.' (red); patients with COPD had higher odds of a smoking history than those without COPD; Cohort study → Compares a group with a given exposure or risk factor to a group without such exposure; looks to see if exposure or risk factor is associated with later development of disease; can be prospective or retrospective → Disease incidence; Relative risk (RR); people who smoke had a higher risk of developing COPD than people who do not; 'Cohort = relative risk.' (red); Twin concordance study → Compares the frequency with which both monozygotic twins vs both dizygotic twins develop the same disease → Measures heritability and influence of environmental factors ('nature vs nurture'); the MZ-twin schizophrenia concordance example showing a strong genetic component; Adoption study → Compares behavioral traits/genetics in siblings raised by biological vs adoptive parents → Measures heritability and influence of environmental factors; the adopted-child schizophrenia example (risk follows the biological parent); Ecological study → Compares frequency of disease and frequency of risk-related factors across populations; measures population data not necessarily applicable to individuals (ecological fallacy) → Used to monitor population health; COPD prevalence was higher in more polluted cities.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "observational-studies-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the seven-card grid in the registry visual (ObservationalStudiesMap in visuals/pubhealth-p1.tsx, Zone B): one card per printed row in PRINTED order, each carrying the design sentence, the measure chip (NO COMPARISON GROUP / DISEASE PREVALENCE / ODDS RATIO (OR) / DISEASE INCIDENCE · RELATIVE RISK (RR) / HERITABILITY 'NATURE VS NURTURE' / HERITABILITY + ENVIRONMENT / ECOLOGICAL FALLACY), First Aid's two red mnemonics attributed in the Case-control and Cohort cards, the printed examples, and the eighth KYP card (the COPD ×3 and schizophrenia ×2 example threads); the table's full text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, the decoder list block (blocks[2]), and recall[0-6]",
        "productionStatus": "complete",
        "plannedKypVisualId": "observational-studies-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "observational-studies-sv2",
        "sourcePages": {"part": 1, "pdfPages": [278], "bookPages": "256"},
        "visualType": "TIMELINE",
        "visualPurpose": "The study-designs timeline figure (book 256): four study types — Cross-sectional, Case-control, Retrospective cohort, Prospective cohort — plotted on a vertical Past–Present–Future axis with their risk-factor boxes, arrows, and compare-labels; the page's visual grammar for how the direction of inquiry fixes each design's measure",
        "sourceFigureDescription": "PURE VECTOR LINE ART, no raster (pdfimages: zero raster images; geometry pinned by pdftotext -bbox coordinates + pdftotext -layout + the VLM pass at 120dpi, staging-pubh1/vlm-census.txt — VLM available this session): four panel titles in a top row (Cross-sectional study | Case-control study | Retrospective cohort study | Prospective cohort study), a vertical time axis at left reading Past (top) / Present (middle) / Future (bottom), pink/red Past and green Present and blue Future background bands, rounded label boxes with circle icons on the Risk factor boxes (⊕ with the exposure / ⊖ without), and solid black arrows. Panel geometry: Cross-sectional — two 'Risk factor' boxes (⊕/⊖) at the Present level with thin connector lines down to 'Compare disease prevalence' below the Present line; Case-control — 'Controls without disease' + 'Diseased cases' at the Present level with solid arrows pointing UP (back in time) to 'Compare risk factor frequency' at the Past level; Retrospective cohort — two 'Risk factor' boxes (⊕/⊖) at the Past level with arrows pointing down (forward) to 'Compare disease incidence' at the Present level, 'Review previous records' below, and a dashed path looping back to the Past boxes; Prospective cohort — two 'Risk factor' boxes (⊕/⊖) at the Present level with arrows pointing down to 'Compare disease incidence' at the Future level. The figure's text objects extract after the table in jumbled reading order with the indd footer slug interleaved mid-figure (documented quirk); panel assignment pinned by bbox x-coordinates.",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "observational-studies-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A of the registry visual (ObservationalStudiesMap in visuals/pubhealth-p1.tsx): the book's vertical axis re-drawn as a horizontal KYP time axis (Past · Present · Future ticks with dashed gridlines) and four lanes — Cross-sectional (two risk-factor chips at Present → 'Compare disease prevalence'), Case-control (Diseased cases + Controls without disease at Present, two back-arrows to 'Compare risk factor frequency' at Past), Retrospective cohort (risk-factor chips at Past, forward arrows to 'Compare disease incidence' at Present, the dashed 'Review previous records' loop), Prospective cohort (risk-factor chips at Present, forward arrows to 'Compare disease incidence' at Future) — every printed label preserved, the with/without circle icons redrawn as KYP vector glyphs, plus the KYP rule strip (direction → measure); the figure's semantics are also carried in mechanisms[0] time-axis-map, blocks[4] the compare block, and recall[7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "observational-studies-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh1"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "observational-studies.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "observational-studies.json").write_text(
    json.dumps({"topicId": "observational-studies", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "observational-studies", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries TWO visual assets — the Observational studies table (sv1: SEVEN rows, columns STUDY TYPE / DESIGN / MEASURES/EXAMPLE, from Case series through Ecological study) and the study-designs timeline figure (sv2: four study types on a Past–Present–Future axis with their risk-factor boxes, arrows, and compare-labels) — both accounted for in ONE registry visual (observational-studies-map, ObservationalStudiesMap in visuals/pubhealth-p1.tsx, viewBox 0 0 1102 1170): the table as an ORIGINAL KYP ADAPTATION (Zone B, seven cards in printed order with both of First Aid's red in-cell mnemonics attributed — 'Control the case in the OR.' and 'Cohort = relative risk.' — plus the two-example-threads KYP card) and the figure as an ORIGINAL_KYP_REDRAW (Zone A, the book's vertical time axis re-arranged horizontal, four lanes, every printed label preserved); nothing is reproduced, and the full table's text is additionally carried verbatim in the note's table block. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi full-page glm-4.6v pass (vlm-census.txt) confirmed the seven printed rows in order, the two red in-cell mnemonics, the figure's panel geometry (circle icons, solid arrows, the case-control arrows pointing back in time), and the absence of margin mnemonics and images. ADJUDICATION: the print places 'Compare disease prevalence' in the Cross-sectional panel and 'Compare risk factor frequency' in the Case-control panel (bbox + layout + VLM agree — the batch brief had the two labels swapped; brief corrected to print, internally consistent with the printed table's measures). FULL single page, the FIRST of Public Health Sciences (pdf 277 is the chapter opener). STAGED under .usmle-pipeline-cache/staging-pubh1/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH1 manifest + inventory staged: {OUT}/manifests/observational-studies.json, {OUT}/visual-inventory/observational-studies.json")
print(f"observational-studies: evidence {len(kept)}/{len(E1)} verified")
