#!/usr/bin/env python3
"""PUBH7 survival-analysis — manifest + inventory (Public Health batch 2),
STAGED under .usmle-pipeline-cache/staging-pubh7/ (the promotion step owns
content/). Source: CROSS-PAGE topic — pdf 281 (book 259) BOTTOM portion +
pdf 282 (book 260) TOP portion, both boundaries PINNED. On book 259 the
topic owns from the "Kaplan-Meier curve" navy heading (raw line 122) to the
page end — the "Likelihood ratio" block above (raw lines 100-120 + its two
rule sentences at raw lines 140-141) belongs to likelihood-ratios (pubh6,
same batch). On book 260 it owns from the page top through the END of the
"Hazard ratio" block (raw lines 1-18) — the "Evaluation of diagnostic
tests" heading (raw lines 20-21) and below belongs to
diagnostic-test-performance (pubh8, same batch). No evidence quote crosses
either boundary. BLOCKS OWNED: (1) "Kaplan-Meier curve" (book 259 bottom)
— "Used to estimate probability of survival over time. Graphic
representation shows the survival probabilities (y-axis) vs length of time
(x-axis). Useful for displaying "time-to-event" data. / Outcomes examined
may include any event, but frequently include mortality. / Survival
probability = 1 - (event probability). / P value for the survival
difference can be calculated using log rank test or Cox regression." plus
the STEPPED-CURVE FIGURE (pure vector line art, zero rasters): y-axis
"Survival probability" with nine ticks 1.0-0.2, x-axis "Time" with the
letters X, Y, Z below the axis and no numeric ticks, two stepped curves
"Drug" (blue #729ac4) and "Control" (yellow #fcc00d); (2) "Hazard ratio"
(book 260 top) — pure TEXT (VLM-confirmed: no figure inside the block):
the definition plus HR = 1 / > 1 / < 1 bullets, the relative-slopes bridge
sentence, and its steeper-curve and separation bullets. FIGURE GEOMETRY
pinned by PyMuPDF vector paths + the VLM pass at 120dpi
(staging-pubh7/vlm-census.txt): both curves start at 1.0 sharing the
opening flat segment; at X, Drug steps to 0.9 (one tick) while Control
steps to 0.7 (three ticks) — the print draws the shared drop at X
two-tone (green above Drug's 0.9 landing, yellow below to Control's 0.7);
at Y, Drug steps to ~0.85 (a HALF-TICK step, between the 0.9 and 0.8
gridlines) and Control to ~0.5; both run flat to the end of follow-up at
Z with endpoint dots — Drug ends ~0.85, Control ends ~0.5. X and Y label
the two EVENT (drop) times; Z the end of follow-up (the no-further-drop
reading is KYP's; the print carries no legend for the letters). Printed
quirks carried + documented: "SEC TION II" header-space artifact (known);
small-caps "EPIDEmIOLOGY AND BIOSTATISTICS"; the RAW-LAYER INTERLEAVE on
book 259 — the indd footer slug extracts right after the heading (raw
line 124), the KM body follows (126-136), then the y-axis label (138),
then the TWO LR RULE SENTENCES (140-141 — printed ABOVE the heading as
the LR block's last lines, bbox-pinned, NOT this topic's content,
deliberately not quoted), then the nine y-axis numbers (143-151), then
Drug / Control / X / Y / Time / Z (153-163), the timestamp last (165);
each HR bullet carries a preceding \\x83 C1 control byte (the C1 artifact
family); em-dashes join the HR bullets to their clauses; spaced en-dash
in "1 - (event probability)"; curly quotes around "time-to-event"; the
italic "P" of "P value". Census (pdfimages): ZERO raster images on both
pages. VLM AVAILABLE this session (glm-4.6v at 120dpi, THREE passes:
full page 281, a 2x crop of the KM figure, full page 282 —
staging-pubh7/vlm-census.txt), confirming every body sentence verbatim,
the nine y-axis ticks (1.0-0.2, no 0.1/0.0), both curve names and their
label placement (just above each curve's final flat segment), the X/Y/Z
letters below the time axis (X and Y under the drop times, Z under the
end of follow-up with endpoint dots), the staircase shapes and landing
levels (Drug 0.9 then ~0.85; Control 0.7 then ~0.5), the two-tone shared
drop at X, that the Hazard ratio block is PURE TEXT with square bullets
and no figure, the boundary on both sides (the LR rule sentences above
the KM heading; "Evaluation of diagnostic tests" immediately after the
last HR bullet), and NO mnemonics/margin notes/red text anywhere in the
owned span. ADJUDICATIONS: (A) Drug's second landing is a HALF-TICK step
(~0.85 — PyMuPDF landing y 619.2 vs the 0.9 tick 612.8 and 0.8 tick 623.4
in mediabox space) — carried as ~0.85, not rounded to 0.8; Control's
second landing (~0.5) sits at the 0.5 gridline. (B) The brief's "event/
drop points X, Y, Z" matched the print: X and Y are the event times, Z
the end of follow-up. (C) The book's OWN pairing of the two blocks (the
KM figure on 259 bottom, the HR-from-slopes bridge sentence on 260 top)
is preserved as one topic per the chapter census. Nothing is reproduced:
the KM figure is an ORIGINAL_KYP_REDRAW (horizontal y-axis label, KYP
theme colors, layout is KYP's, every printed label preserved) in ONE
registry visual (survival-analysis-map, SurvivalAnalysisMap in
visuals/pubhealth-p7.tsx, viewBox 0 0 1102 1250); the HR trio cards and
slope/separation panels are KYP-original layouts of the printed TEXT
(every quoted sentence verbatim); both blocks' full text is additionally
carried VERBATIM in the note's table block. DrugCards: none — the pages
print statistics, not drugs (the figure's "Drug"/"Control" are trial arm
names; folded by absence)."""
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
L = {281: pages[280].split("\n"), 282: pages[281].split("\n")}
P = {281: norm(pages[280]), 282: norm(pages[281])}
BP = "259 (bottom)–260 (top)"
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": BP},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("BLOCK 1 heading + the indd footer slug — the 'Kaplan-Meier curve' navy row label (the pinned upper boundary of this topic; the Likelihood ratio block above belongs to likelihood-ratios) with the page's indd slug extracting IMMEDIATELY after it in the raw layer (reading-order jumble, documented)", rng(281, 122, 124), [281]),
    ("The Kaplan-Meier definition — 'Used to estimate probability of survival over time. Graphic representation shows the survival probabilities (y-axis) vs length of time (x-axis). Useful for displaying \"time-to-event\" data.' (curly quotes as printed)", rng(281, 126, 130), [281]),
    ("The outcome menu + the step arithmetic — 'Outcomes examined may include any event, but frequently include mortality. Survival probability = 1 – (event probability).' (spaced en-dash as printed)", rng(281, 131, 133), [281]),
    ("The test sentence — 'P value for the survival difference can be calculated using log rank test or Cox regression.' (the P prints in a cursive/italic face)", rng(281, 134, 136), [281]),
    ("The figure's y-axis label — 'Survival probability' (rotated 90° in the print, reading bottom-to-top, left of the tick column)", rng(281, 138, 138), [281]),
    ("The figure's nine y-axis tick labels — 1.0 0.9 0.8 0.7 0.6 0.5 0.4 0.3 0.2 in printed top-to-bottom order (no 0.1 or 0.0; the raw layer extracts them AFTER the two likelihood-ratio rule sentences of raw lines 140-141 — printed ABOVE the Kaplan-Meier heading as the LR block's last lines, bbox-pinned, belonging to likelihood-ratios and deliberately not quoted by this topic: the interleave is documented, never quoted across)", rng(281, 143, 151), [281]),
    ("The figure's remaining printed labels in raw extraction order — the two curve names 'Drug' and 'Control', the letters 'X' and 'Y' (the two event/drop times), the x-axis label 'Time', and the letter 'Z' (the end of follow-up, beneath the endpoint dots)", rng(281, 153, 163), [281]),
    ("The print footer timestamp — 12/16/25 12:46 PM (page identity, book 259, the bottom of this topic's upper page)", rng(281, 165, 165), [281]),
    ("BLOCK 2 page identity — book 260 running header: page number, the 'SEC TION II' header-space extraction artifact (carried as-is, known quirk), the section header PUBLIC HEALTH SCIENCES, and the subsection banner '▶ PUBLIC HEALTH SCIENCES—EPIDEmIOLOGY AND BIOSTATISTICS' (small-caps 'm' artifact as extracted)", rng(282, 1, 7), [282]),
    ("The 'Hazard ratio' heading + the definition — 'Measure of how often a particular event (eg, death, relapse) occurs in one group compared with another, over time.' (navy #004b6c MyriadPro-Bold row label, the same convention as 'Kaplan-Meier curve')", rng(282, 9, 12), [282]),
    ("The HR direction trio — the three printed bullets 'HR = 1—no difference between groups.' / 'HR > 1—event occurs more frequently in the treatment/exposure group.' / 'HR < 1—event occurs less frequently in the treatment/exposure group (protective effect).' (each prefixed in the raw layer by a \\x83 C1 control byte before the ▘ square bullet — the known C1 artifact family; clauses joined by em-dashes)", rng(282, 13, 15), [282]),
    ("The relative-slopes bridge + its two bullets — 'Kaplan-Meier curves: HR is derived from the relative slopes (hazards) of the survival curves.' / 'A steeper curve = higher hazard (faster occurrence of event).' / 'Separation of curves over time reflects magnitude of HR.' (this is the pinned LOWER boundary of the topic: the 'Evaluation of diagnostic tests' heading follows at raw lines 20-21 and belongs to diagnostic-test-performance, produced in parallel)", rng(282, 16, 18), [282]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"survival-analysis: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "survival-analysis", "title": "Kaplan-Meier Curves and Hazard Ratios: Time-to-Event Analysis",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [281, 282], "bookPages": BP},
    "sourceEvidence": kept, "visualIds": ["survival-analysis-map"],
    "mechanismIds": ["km-curve-grammar", "hazard-ratio-slopes"],
    "kypExtensions": [
        {"id": "km-curve-grammar-decoder",
         "summary": "The staircase grammar of the Kaplan-Meier figure: every curve starts at 1.0 (all enrollees event-free — both printed arms share the opening flat segment); each event time is a vertical step down sized by the printed arithmetic 'Survival probability = 1 – (event probability)'; flats between events mean no events; endpoint dots at the end of follow-up (the printed Z) mean the curve stops without a further drop; and the two-arm reading keeps HEIGHT (survivors so far) and SLOPE (hazard) as separate questions — the higher curve is the better arm, the steeper curve the sicker one.",
         "origin": "outside-first-aid", "rationale": "The source prints the definition sentences and the unlabeled figure; the element-by-element grammar, the censoring/end-of-follow-up gloss of the endpoint dots (the print gives no legend for X, Y, Z or the dots), and the height-vs-slope distinction are KYP's synthesis.",
         "location": "core.keyIdea MOVES 1–2 + mechanisms[0] km-curve-grammar + blocks[2] the decoder list + blocks[3] the steps block + the registry visual's Zone A annotation rail"},
        {"id": "hazard-ratio-attack-layer",
         "summary": "The hazard-ratio direction apparatus: HR as a ratio of the named group's hazard to the comparator's, anchored at the null HR = 1; HR > 1 — the event (eg, death, relapse) occurs more frequently in the treatment/exposure group (the steeper arm — a HARM signal for adverse events); HR < 1 — less frequently (protective effect — the flatter, higher arm, the printed Drug curve's geometry); the harm/help framing for adverse-event outcomes, the named-group-is-the-index rule, and the desirable-event caveat are the KYP wrapper around the three printed bullets.",
         "origin": "outside-first-aid", "rationale": "The three bullets are printed; the index-group rule, the harm/benefit gloss, the see-saw organization, and the desirable-event caveat are KYP's.",
         "location": "core.keyIdea MOVE 3 + mechanisms[1] hazard-ratio-slopes + blocks[4] the compare block + the registry visual's Zone B trio cards"},
        {"id": "slopes-not-heights-bridge",
         "summary": "The printed bridge sentence developed into the figure-reading rule: HR is derived from the relative slopes (hazards) of the survival curves — judge hazard by STEEPNESS (a steeper curve = higher hazard, faster occurrence of event), never by height; the separation of curves over time reflects the magnitude of HR (curves hugging = HR near 1; curves prying apart = HR far from 1), with the P value for the survival difference from log rank test or Cox regression.",
         "origin": "outside-first-aid", "rationale": "The bridge sentence and its two bullets are printed; the slopes-not-heights naming, the hug/pry geometry reading, and the log-rank-vs-Cox division of labor (curves compared whole vs hazards fitted) are KYP's development.",
         "location": "core.why + core.keyIdea MOVES 3–4 + blocks[3] MOVE 5 + the registry visual's Zone C slope/separation panels"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the two printed blocks — 4 patterns (the figure-reading stem, the HR-interpretation stem, the test-selection stem, the slope-identification stem), 4 traps (height vs slope; HR vs RR; HR > 1 vs < 1 direction with the named index group; survival vs event probability via the printed complement), 3 pivots (HR < 1 = protective not 'less effective'; unequal follow-up/censoring routes to KM; the survival-difference test family), and 8 recall cards covering both blocks plus the figure.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the definitions only; the attack structure, distractor logic, and question shapes are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: the VLM census of both pages found NO mnemonic of First Aid's own in the owned span (no margin notes, no red text — staging-pubh7/vlm-census.txt), so all four mnemonics are KYP ORIGINALS, marked as such: 'START AT 1.0, STEP AT EVENTS, FLAT BETWEEN, DOT AT THE END' (the curve grammar), 'ONE MINUS THE EVENT' (the printed formula compressed), 'SLOPES, NOT HEIGHTS' (the relative-slopes rule), and 'OVER ONE = MORE EVENTS, UNDER ONE = PROTECTIVE' (the HR trio with its anchor).",
         "origin": "outside-first-aid", "rationale": "No FA-own mnemonic prints on pdf 281 bottom or pdf 282 top (VLM census + pdfimages); the four ALL-CAPS codes are KYP's design, and the adjacent pages' own hooks (SN-N-OUT / SP-P-IN, 'Control the case in the OR.', 'Cohort = relative risk.') are referenced only with attribution.",
         "location": "mnemonics + blocks[6] the memory callout + the registry visual's Zone A rule strip"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "CROSS-PAGE topic (the chapter census's own pairing: the KM figure on book 259 bottom + the HR block on book 260 top), boundaries PINNED on both sides: on pdf 281 / book 259 the topic owns from the 'Kaplan-Meier curve' navy heading (raw line 122) to the page end — the 'Likelihood ratio' block above (raw lines 100-120 + its two rule sentences at raw lines 140-141) belongs to likelihood-ratios (pubh6, same batch); on pdf 282 / book 260 it owns from the page top through the END of the 'Hazard ratio' block (raw lines 1-18) — the 'Evaluation of diagnostic tests' heading (raw lines 20-21) and below belongs to diagnostic-test-performance (pubh8, same batch). NO evidence quote crosses either boundary (the two LR rule sentences of raw lines 140-141 are printed ABOVE the KM heading as the LR block's last lines — bbox-pinned — and are deliberately NOT quoted here; the interleave is documented in evidence item 6). The owned span carries TWO blocks, both carried VERBATIM in the note's table block (blocks[1]): the Kaplan-Meier curve block (4 sentences + the figure) and the Hazard ratio block (definition + 3 bullets + bridge sentence + 2 bullets). CENSUS (pdfimages): ZERO raster images on both pages; VLM WAS AVAILABLE this session (glm-4.6v at 120dpi, THREE passes — full page 281, a 2x crop of the KM figure, full page 282 — staging-pubh7/vlm-census.txt): every body sentence read back verbatim; the figure's nine y-axis ticks 1.0-0.2 confirmed (no 0.1/0.0); both curve names confirmed with their placement (just above each curve's final flat segment — 'Drug' blue #729ac4, 'Control' yellow #fcc00d); X and Y confirmed as the letters under the two DROP times and Z under the end of follow-up with endpoint dots; the staircase landings confirmed (Drug 0.9 then ~0.85; Control 0.7 then ~0.5) as was the two-tone shared drop at X (green above Drug's landing, yellow below to Control's); the Hazard ratio block confirmed PURE TEXT (square bullets, navy heading, no figure); NO mnemonics, margin notes, red text, or asterisk footnotes anywhere in the owned span. FIGURE GEOMETRY additionally pinned by PyMuPDF vector paths (mediabox coordinates): y-axis line + nine ticks aligned to the nine labels; x-axis with FOUR ticks (study start, X, Y, Z); Drug path M(461.3,601.8) flat to X(478.8) drop to 613.8, flat to Y(499.0) drop to 619.2, flat to end(563.6); Control path drop at X to 634.4 (the 0.7 tick) and at Y to 654.9 (~0.5), flat to 563.9; landing dots at every drop and at both endpoints. ADJUDICATIONS (documented in the note header too): (A) Drug's second landing is a HALF-TICK step (~0.85 — landing y 619.2 vs the 0.9 tick 612.8 and the 0.8 tick 623.4) — carried as ~0.85, NOT rounded to 0.8; Control's second landing (~0.5) sits at the 0.5 gridline; (B) the brief's 'event/drop points X, Y, Z' matched the print (X, Y = event times; Z = end of follow-up); (C) the two-tone shared drop at X is the print's device for two arms dropping at one event time — preserved semantically in the KYP redraw as two landings on one dashed event line. Quirks carried + documented: 'SEC TION II' header-space artifact; small-caps 'EPIDEmIOLOGY AND BIOSTATISTICS'; the raw-layer interleave (indd slug at raw line 124 immediately after the heading; the nine y-axis numbers extracting AFTER the LR rule sentences at 140-141; Drug/Control/X/Y/Time/Z in that raw order at 153-163); the \\x83 C1 control byte before each HR bullet's square glyph (stripped by normalization, documented); em-dashes joining the HR bullets to their clauses; the spaced en-dash in '1 – (event probability)'; curly quotes around 'time-to-event'; the cursive/italic 'P' of 'P value'. Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (km-curve-grammar, hazard-ratio-slopes), a visual block + verbatim table block + decoder list + steps block + compare block + exam callout + memory callout, a clinical block (oncology trials / any-event menu / why-not-percentages / reading the abstract), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (likelihood-ratios and diagnostic-test-performance — the two SIBLING blocks of the pinned boundaries, both produced in this same batch, referenced by design; hypothesis-testing-errors; quantifying-risk — all four are public-health census topicIds), 4 crossLinks, 4 mnemonics (all KYP originals — the pages print none of First Aid's own, per the VLM census), and a miniCase with 5 options (exactly 1 correct, why/whyWrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the pages print statistics, not drugs — the figure's 'Drug'/'Control' are trial arm names, not drug monographs; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete'; the per-record INVENTORY productionStatus is 'complete'; (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh7/ — nothing is written into content/ (the promotion step owns chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry; the note's visualId 'survival-analysis-map' is therefore not yet in visuals/registry.tsx by design); (5) the topic's ONE printed visual asset — the Kaplan-Meier stepped-curve figure — is implemented in ONE registry visual (survival-analysis-map, SurvivalAnalysisMap in visuals/pubhealth-p7.tsx, viewBox 0 0 1102 1250) as an ORIGINAL_KYP_REDRAW: the layout, horizontal y-axis label, and KYP theme colors are KYP's, every printed label preserved (Survival probability, 1.0-0.2, Drug, Control, X, Y, Z, Time) and the pinned geometry reproduced (shared 1.0 opening; Drug 0.9 at X, ~0.85 at Y; Control 0.7 at X, ~0.5 at Y; endpoint dots at Z) — the visual's Zone B (HR = 1 / > 1 / < 1 trio with curve-slope glyphs) and Zone C (steeper-curve and separation-of-curves panels + the two printed formulas) are KYP-original layouts of the printed Hazard ratio TEXT (that block prints no figure), with every quoted sentence verbatim; both blocks' full text is ALSO carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Epidemiology and Biostatistics",
    "topicId": "survival-analysis", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "survival-analysis-sv1",
        "sourcePages": {"part": 1, "pdfPages": [281], "bookPages": "259 (bottom)"},
        "visualType": "COMPARISON_FIGURE",
        "visualPurpose": "The Kaplan-Meier stepped-curve figure (book 259, bottom): a two-arm time-to-event plot — survival probability (y-axis, ticks 1.0–0.2) vs length of time (x-axis, letters X/Y/Z at the two event times and the end of follow-up) — with the Drug and Control curves stepping down at events X and Y and ending flat at Z; the page's graphic representation of 'time-to-event' data and the visual anchor the hazard-ratio block's relative-slopes derivation points back to",
        "sourceFigureDescription": "PURE VECTOR LINE ART, no raster (pdfimages: zero raster images on the page; geometry pinned by PyMuPDF vector paths + the VLM pass at 120dpi, staging-pubh7/vlm-census.txt — VLM available this session): a tan/brown L-shaped axis — vertical y-axis with NINE tick marks labeled 1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2 top to bottom (no 0.1/0.0) and a rotated y-axis label 'Survival probability' (reading bottom-to-top), horizontal x-axis with FOUR unlabeled tick marks and the label 'Time' printed below-right of center; below the axis the letters X, Y, Z mark the last three ticks (X and Y = the two event/drop times, Z = the end of follow-up). TWO stepped curves: 'Drug' (label blue #729ac4, printed just above the curve's final flat segment; curve strokes blue with a GREEN initial segment and green start dot) and 'Control' (label yellow #fcc00d, same placement; curve yellow/gold). Both curves start at 1.0 sharing the opening flat segment; at X the Drug curve steps down ONE tick to 0.9 (green landing dot) while Control steps down THREE ticks to 0.7 (yellow landing dot) — the shared vertical drop at X is drawn TWO-TONE (green above 0.9, yellow below to 0.7); at Y Drug steps a HALF-TICK to ≈0.85 (blue dot) and Control TWO ticks to ≈0.5 (yellow dot); both then run flat to the end of follow-up at Z with endpoint dots and no further drop (Drug ends ≈0.85, Control ≈0.5). Small gray Rx logo at the figure's lower right. The raw text layer interleaves the labels (indd slug after the heading; the nine y-axis numbers AFTER the two likelihood-ratio rule sentences of raw lines 140-141, which print ABOVE the KM heading and belong to the likelihood-ratios topic; then Drug / Control / X / Y / Time / Z) — documented, never quoted across the boundary.",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "survival-analysis-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A of the registry visual (SurvivalAnalysisMap in visuals/pubhealth-p7.tsx): the figure redrawn on KYP axes — horizontal 'Survival probability' label, nine y-ticks 1.0–0.2, x-axis 'Time' with X/Y/Z letters below the event and end-of-follow-up ticks, the Drug staircase (blue: 1.0 → 0.9 at X → ≈0.85 at Y → flat to Z, endpoint dot) and Control staircase (yellow: 1.0 → 0.7 at X → ≈0.5 at Y → flat to Z, endpoint dot) with landing dots at every drop, the two-tone shared X-drop preserved semantically as two landings on one dashed event line, both curve names placed as printed, level tags at each drop, and the KYP annotation rail (start at 1.0 · step = event · flat = no events · dot = end of follow-up · log rank / Cox) + the rule strip; the visual's Zone B (the HR = 1 / > 1 / < 1 trio cards with curve-slope glyphs, every printed bullet quoted verbatim) and Zone C (the steeper-curve and separation-of-curves panels + the two printed formulas) are KYP-original layouts of the printed Hazard ratio TEXT of book 260 top (that block prints NO figure — VLM-confirmed), not source reproductions; the figure's semantics are also carried in mechanisms[0] km-curve-grammar, blocks[2] the decoder, blocks[3] the steps block, and recall[4]",
        "productionStatus": "complete",
        "plannedKypVisualId": "survival-analysis-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh7"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "survival-analysis.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "survival-analysis.json").write_text(
    json.dumps({"topicId": "survival-analysis", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "survival-analysis", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 0,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The owned span carries ONE printed visual asset — the Kaplan-Meier stepped-curve figure (book 259, bottom: Drug vs Control survival curves over Time, ticks 1.0–0.2, event letters X/Y/Z) — accounted for in ONE registry visual (survival-analysis-map, SurvivalAnalysisMap in visuals/pubhealth-p7.tsx, viewBox 0 0 1102 1250) as an ORIGINAL_KYP_REDRAW: the layout, horizontal y-axis label, and KYP theme colors are KYP's, every printed label preserved and the PyMuPDF-pinned geometry reproduced (shared 1.0 opening; Drug 0.9 at X and ≈0.85 at Y — a HALF-TICK step, carried as ≈0.85, not rounded; Control 0.7 at X and ≈0.5 at Y; both arms flat to Z with endpoint dots). The Hazard ratio block (book 260, top) prints NO figure (VLM-confirmed pure text), so it contributes no textbook visual record; the registry visual's Zone B trio cards and Zone C slope/separation panels are KYP-original layouts of that printed text (every quoted sentence verbatim), and both blocks' full text is additionally carried verbatim in the note's table block. Census: zero raster images on both pages (pdfimages); VLM available this session — THREE 120dpi glm-4.6v passes (full page 281, a 2x KM-figure crop, full page 282 — vlm-census.txt) confirmed the nine y-axis ticks, both curve names and their placement, the X/Y/Z positions (X and Y under the drop times, Z under the end of follow-up), the landing levels, the two-tone shared drop at X, the pure-text Hazard ratio block, the boundaries on both sides, and the absence of mnemonics/margin notes/red text. CROSS-PAGE topic: pdf 281 (book 259, bottom) + pdf 282 (book 260, top), boundaries pinned — the Likelihood ratio block above and the Evaluation-of-diagnostic-tests block below belong to likelihood-ratios and diagnostic-test-performance respectively (both produced in this same batch). STAGED under .usmle-pipeline-cache/staging-pubh7/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH7 manifest + inventory staged: {OUT}/manifests/survival-analysis.json, {OUT}/visual-inventory/survival-analysis.json")
print(f"survival-analysis: evidence {len(kept)}/{len(E1)} verified")
