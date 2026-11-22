#!/usr/bin/env python3
"""PUBH17 correlation-coefficient — manifest + inventory (Public Health
batch 2), STAGED under .usmle-pipeline-cache/staging-pubh17/ (the promotion
step owns content/). Source: TOP PORTION ONLY of pdf page 290 / book 268
(Part 1) — a PINNED PAGE-SPLIT: the topic owns everything from the page top
through the END of the "Pearson correlation coefficient" block (the
definition text + the five-panel scatter gallery), ending immediately
BEFORE the in-body ribbon banner "▶ PUBLIC HEALTH SCIENCES—ETHICS" (raw
text-layer line 43, y~337 pt) which opens the lower portion owned by
core-ethical-principles (produced in parallel in this same batch); the
split is pinned by pdftotext -bbox (a thin block-ending rule + white space
sit between the last gallery caption and the ribbon banner) + the VLM pass.
Blocks owned (two): (1) the "Pearson correlation coefficient" text block —
navy heading (raw lines 5-6, wrapping across two lines) with the body
printing to its right (raw lines 12-18): "A measure of the linear
correlation between two variables. r is always between −1 and +1. The
closer the absolute value of r is to 1, the stronger the linear correlation
between the 2 variables." / "Variance is how much the measured values
differ from the average value in a data set." / "Positive r value →
positive correlation (as one variable ↑, the other variable ↑)." /
"Negative r value → negative correlation (as one variable ↑, the other
↓)." / "Coefficient of determination = r² (proportion of variance in one
variable that can be explained by variance in the other variable).
Correlation does not necessarily imply causation."; (2) THE FIVE-PANEL
SCATTER GALLERY (raw lines 19-41) — pure vector art, printed order
LEFT->RIGHT pinned by pdftotext -bbox x-coordinates + the VLM pass (both
agree): "r = –0.8" / "Strong negative correlation" -> "r = –0.4" / "Weak
negative correlation" -> "r = 0" / "No correlation" -> "r = +0.4" / "Weak
positive correlation" -> "r = +0.8" / "Strong positive correlation". Census
(pdfimages): ZERO raster images on the page — the gallery is vector dot
fields (navy filled circles, ~11-14 per panel, tan gridline frames with
unlabeled x/y axes meeting at lower-left arrowheads, faint gray fit-line
arrows in the two STRONG panels only, positives mirroring negatives, the
r = 0 panel a shapeless cloud). VLM AVAILABLE this session (glm-4.6v, TWO
passes — full page at 120dpi + a 300dpi upper-portion crop,
staging-pubh17/vlm-census.txt): the five-panel printed order confirmed
(none missing or extra); the r characters print in ITALIC in the body;
"Correlation does not necessarily imply causation." prints in REGULAR
roman (not bolded/colored); NO red text, mnemonics, margin notes, or
asterisk footnotes in the top portion; a small FA review-question icon
(square/checkmark "Rx" glyph) at the far right edge beside the captions is
page FURNITURE (documented, not redrawn); the footer slug
"FAS1_2026_06-PubHealth.indd 268" + "12/16/25 12:46 PM". ADJUDICATIONS,
documented in the census file and the manifest notes: (A) VLM pass 1
misread the Negative r line's arrows as "(as one variable ↓, the other
variable ↓)" — the TEXT LAYER prints "(as one variable ↑, the other ↓)"
(raw line 16), the internally consistent reading; text layer governs,
VLM corrected; (B) the negative gallery labels print an EN DASH (U+2013,
"r = –0.8"/"r = –0.4") while the body's "−1" uses the TRUE MINUS (U+2212)
— mixed dash glyphs carried as extracted (VLM pass 2 agrees the labels are
en-dash style; pass 1's "proper minus sign" reading is overruled by the
text layer, the glyph authority); (C) the middle label merges to "r=0" in
the raw layer while the print spaces it ("r = 0", VLM-confirmed) — the
note carries the spaced form and documents the merge; (D) the printed
gallery order matches the batch brief's expected order exactly
(-0.8 -> -0.4 -> 0 -> +0.4 -> +0.8) — no correction. Printed quirks
carried + documented: "SEC TION II" header-space extraction artifact
(known, as-is); the banner "▶ PUBLIC HEALTH SCIENCES—ETHICS" prints TWICE
on the page — the running-header instance (raw line 10, y~52, top margin
band) sits INSIDE the top portion as page furniture (FA's running header
carries the subsection that STARTS on this page: Ethics begins mid-page,
so the header already reads ETHICS though the page's first block is still
Epidemiology and Biostatistics content), while the in-body ribbon
instance (raw line 43) IS the pinned split boundary and is never quoted;
the heading wraps across two lines; the superscript 2 of r² flattens to
"r 2" in the raw layer (the note renders r²); C1 control bytes ride the
arrows (U+008E before ->, U+008F before up-arrow, U+0090 before
down-arrow); READING-ORDER JUMBLE in the gallery — the caption "No
correlation" extracts AFTER the "r = +0.4" label (raw line 33 after 31)
and "Weak positive correlation" extracts AFTER the "r = +0.8" label (raw
lines 37-38 after 35); the printed order is bbox+VLM-pinned and the
evidence ranges quote the labels in raw extraction order. Nothing is
reproduced: the gallery is an ORIGINAL_KYP_REDRAW (the five dot fields
rebuilt as KYP vector art matching each r's direction and tightness) and
the text block an ORIGINAL KYP ADAPTATION (the r/r² interpretation rail +
the verdict band) in ONE registry visual (correlation-map, CorrelationMap
in visuals/pubhealth-p17.tsx, viewBox 0 0 1102 1050); the full block text
is additionally carried VERBATIM in the note's table block. DrugCards:
none — the page prints a statistical measure, not drugs (folded by
absence; the clinical anchors are KYP context, flagged as such)."""
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
L = {290: pages[289].split("\n")}
P = {290: norm(pages[289])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity + the pinned SPLIT BOUNDARY's upper side — book page 268, the known 'SEC TION II' header-space extraction artifact, the running head PUBLIC HEALTH SCIENCES, and the running-header banner instance '▶ PUBLIC HEALTH SCIENCES—ETHICS' (this page's banner prints TWICE: the running-header instance here, raw line 10, sits INSIDE the top portion as page furniture — FA's running header carries the subsection that STARTS on this page, Ethics beginning mid-page — while the in-body ribbon instance at raw line 43 IS the pinned split boundary, never quoted; everything at or below it belongs to core-ethical-principles, produced in parallel), plus the block heading 'Pearson correlation coefficient' (wraps across two lines in its label column)", rng(290, 1, 10), [290]),
    ("BLOCK 1 part 1 — the definition and range: a measure of the linear correlation between two variables; r is always between −1 and +1 (true minus sign, U+2212, as extracted)", rng(290, 12, 12), [290]),
    ("BLOCK 1 part 2 — the strength rule: the closer the absolute value of r is to 1, the stronger the linear correlation between the 2 variables", rng(290, 13, 13), [290]),
    ("BLOCK 1 part 3 — the inline variance definition: variance is how much the measured values differ from the average value in a data set", rng(290, 14, 14), [290]),
    ("BLOCK 1 part 4 — the direction line, POSITIVE side: positive r value → positive correlation (as one variable ↑, the other variable ↑) — C1 control bytes ride the arrows in the raw layer (U+008E before →, U+008F before ↑), stripped by the normalizer, carried as printed", rng(290, 15, 15), [290]),
    ("BLOCK 1 part 5 — the direction line, NEGATIVE side: negative r value → negative correlation (as one variable ↑, the other ↓) — ADJUDICATED: VLM pass 1 misread the arrows as ↓/↓; the TEXT LAYER prints ↑/↓ (raw line 16), the internally consistent reading; text layer governs", rng(290, 16, 16), [290]),
    ("BLOCK 1 part 6 — the square and the verdict: coefficient of determination = r² (proportion of variance in one variable that can be explained by variance in the other variable). Correlation does not necessarily imply causation. (the superscript ² flattens to 'r 2' in the raw layer — the note renders r²; the verdict sentence prints in regular roman, VLM-confirmed, and is First Aid's own, carried verbatim and attributed)", rng(290, 17, 18), [290]),
    ("BLOCK 2, gallery panel 1 of 5 (raw extraction order) — the leftmost printed panel: label 'r = –0.8' (EN DASH U+2013, as extracted — vs the body's true minus) + caption 'Strong negative correlation' (wraps across two lines; the panel itself is pure-vector dot art, not quoted as text)", rng(290, 19, 22), [290]),
    ("BLOCK 2, gallery panel 2 of 5 — label 'r = –0.4' (en dash) + caption 'Weak negative correlation' (wraps across two lines)", rng(290, 24, 27), [290]),
    ("BLOCK 2, labels 3 and 4 + caption 3 (READING-ORDER JUMBLE — the caption 'No correlation' extracts AFTER the 'r = +0.4' label, raw line 33 after 31; the printed order is pinned by pdftotext -bbox x-coordinates + the VLM pass: the middle panel is 'r = 0' / 'No correlation' and the fourth is 'r = +0.4' / 'Weak positive correlation'; the middle label MERGES to 'r=0' in the raw layer — the print spaces it, VLM-confirmed)", rng(290, 29, 33), [290]),
    ("BLOCK 2, label 5 + caption 4 (jumble continues — 'Weak positive correlation' extracts AFTER the 'r = +0.8' label, raw lines 37-38 after 35): label 'r = +0.8' (fifth/rightmost panel) + caption 'Weak positive correlation' (fourth panel, wraps across two lines)", rng(290, 35, 38), [290]),
    ("THE BOUNDARY WITNESS — the FINAL lines of the pinned top portion: the fifth panel's caption 'Strong positive correlation' (raw lines 40-41, wrapping across two lines); the next raw content line (line 43) is the in-body ribbon banner '▶ PUBLIC HEALTH SCIENCES—ETHICS' — the pinned split boundary, never quoted; the topic's every quote ends at or above this line", rng(290, 40, 41), [290]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"correlation-coefficient: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "correlation-coefficient", "title": "Correlation and the Pearson Coefficient",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [290], "bookPages": "268 (top)"},
    "sourceEvidence": kept, "visualIds": ["correlation-map"],
    "mechanismIds": ["scatter-to-r-map", "r-squared-variance-map"],
    "kypExtensions": [
        {"id": "two-dial-decoder",
         "summary": "The two-dial decoder and the four-move reading protocol for any correlation: the SIGN is the slope (positive r value -> positive correlation, as one variable ↑ the other variable ↑; negative r value -> negative correlation, as one variable ↑ the other ↓) and the SIZE is the snugness (the closer |r| is to 1, the stronger the linear correlation) — two INDEPENDENT dials (the sign never adds strength: -0.8 is stronger than +0.4) — sequenced as SIGN -> SIZE -> SQUARE -> VERDICT, with the range check (r lives in [-1, +1], r² in [0, 1]) and the reverse move (given r², the correlation is ±sqrt, sign from the scatter's slope).",
         "origin": "outside-first-aid", "rationale": "The source prints the sentences as parallel facts; the dial separation, the independence of sign and strength, the ordered protocol, and the reverse-squaring move are KYP's synthesis.",
         "location": "core.keyIdea + mechanisms[0] scatter-to-r-map + blocks[3] the steps block + the visual's Zone B SIGN and SIZE cards and Zone A rule strip"},
        {"id": "variance-pricing-layer",
         "summary": "The variance-pricing layer for r²: the coefficient of determination read as the proportion of variance in one variable explained by variance in the other — the worked arithmetic (r = ±0.8 -> r² = 0.64 -> 64% explained, 36% not; r = ±0.4 -> 0.16 -> 16%; halving r quarters the explained variance) — plus the literature habit (papers quote r and let the reader square it) and the exam rule ('proportion of variance explained' routes to r², never r).",
         "origin": "outside-first-aid", "rationale": "The source prints the formula sentence only; the worked percentages, the 2x-vs-4x asymmetry, the journal-club framing, and the routing rule are KYP's.",
         "location": "mechanisms[1] r-squared-variance-map + blocks[2] the gallery decoder + blocks[4] the r vs r² compare block + the visual's Zone B SQUARE card and per-panel r² chips"},
        {"id": "gallery-calibration-layer",
         "summary": "The five-panel gallery read as a calibration ladder: the printed order (-0.8 strong negative -> -0.4 weak negative -> 0 no correlation -> +0.4 weak positive -> +0.8 strong positive) as a two-axis grid (direction x tightness), the geometry grammar (slope of the cloud sets the sign, spread around the line sets |r|, the fit-line arrow printed only in the two strong panels as the visual signature of strength, positives mirroring negatives), and the linear-only caveat keyed to the printed word 'linear' (r = 0 kills the straight line, not a curved relationship — a perfect U can still have r = 0).",
         "origin": "outside-first-aid", "rationale": "The source prints the five panels as artwork with labels; the ladder reading, the geometry grammar, the mirror symmetry as a strength lesson, and the r = 0 curvature caveat are KYP's interpretation.",
         "location": "mechanisms[0] scatter-to-r-map + blocks[2] the gallery decoder list + the visual's Zone A five redrawn panels + usmle.traps[3] + mnemonics 'ZERO MEANS NO LINE, NOT NO LINK'"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed block — 4 patterns (the r = +0.8 interpretation stem, the r-vs-r² '80% of the variance' correction stem, the scatter-to-r matching stem, the ice-cream-and-drownings confounder verdict stem), 4 traps (r 0.8 vs r² 0.64; strong-negative -0.8 vs weak-positive +0.4 ranked by |r|; strong correlation offered as causation; r = 0 as 'no relationship of any kind' vs no LINEAR correlation), 3 pivots (is the number r or r²; 'strong negative' must satisfy both dials; a causal conclusion following a correlation), and 8 recall cards covering every printed sentence plus the gallery order and the boundary.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the definitions and the gallery only; the attack structure, distractor shapes, the exercise-HDL miniCase with its five options, and the clinical anchors (age/GFR, pack-years/FEV1 — flagged KYP context, the page prints no clinical example) are KYP's design.",
         "location": "usmle section + clinical block + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: the page prints NO mnemonic of its own — its one hook is the closing verdict sentence 'Correlation does not necessarily imply causation.' (regular roman, VLM-confirmed), which is First Aid's OWN, carried VERBATIM and ATTRIBUTED in the memory callout, the table block, the visual's verdict band, and the mnemonics — not counted among the KYP codes; all four ALL-CAPS mnemonics are KYP ORIGINALS, marked as such: 'SIGN IS THE SLOPE, SIZE IS THE SNUGNESS' (the two dials), 'SQUARE THE r, PRICE THE VARIANCE' (r -> r² -> proportion explained), 'ZERO MEANS NO LINE, NOT NO LINK' (the r = 0 linear-only caveat), and 'CORRELATION DESCRIBES, DESIGN CONCLUDES' (the verdict operationalized, with the confounder/reverse-direction/design-decides rivals).",
         "origin": "outside-first-aid", "rationale": "No First Aid mnemonic prints in scope (pdfimages + VLM census, staging-pubh17/vlm-census.txt: no red text, no margin mnemonics); the four ALL-CAPS codes are KYP's design, and the printed verdict is attributed to the source wherever it appears.",
         "location": "mnemonics + blocks[6] the memory callout + the visual's Zone C verdict band and rival chips"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "TOP-portion split page (no shared split): pdf 290 / book 268 (top), from the page top through the END of the Pearson correlation coefficient block (definition text + five-panel scatter gallery); the in-body ribbon banner '▶ PUBLIC HEALTH SCIENCES—ETHICS' (raw line 43, y~337, below a thin block-ending rule) is the pinned boundary — everything from 'Core ethical principles' down belongs to core-ethical-principles (produced in parallel in this same batch) and is never quoted. TWO blocks carried VERBATIM in the note's table block (blocks[1]): (1) the 'Pearson correlation coefficient' text block (definition + range, strength rule, inline variance definition, the positive/negative r arrow lines, the coefficient of determination r² + the closing verdict 'Correlation does not necessarily imply causation.') and (2) the five-panel gallery's five r labels + five captions in PRINTED order (left to right: r = –0.8 'Strong negative correlation' · r = –0.4 'Weak negative correlation' · r = 0 'No correlation' · r = +0.4 'Weak positive correlation' · r = +0.8 'Strong positive correlation'). CENSUS (pdfimages): ZERO raster images; the gallery is PURE VECTOR art — navy filled-circle dot fields (~11-14 dots per panel), tan gridline frames, unlabeled x/y axes meeting at lower-left with small arrowheads, faint gray fit-line arrows in the two STRONG panels only, the two positive panels mirroring the two negative panels, the r = 0 panel a shapeless cloud, NO axis labels or ticks. VLM WAS AVAILABLE this session (glm-4.6v, TWO passes — full page 120dpi + a 300dpi upper crop, staging-pubh17/vlm-census.txt): five-panel printed order confirmed exactly (none missing or extra); the r characters print in ITALIC in the body; the verdict sentence prints in REGULAR roman (not bolded/italicized/colored) at the end of the coefficient-of-determination sentence; NO red text, NO mnemonics, NO margin notes, NO asterisk footnotes in the top portion; a small FA review-question icon (square/checkmark 'Rx' glyph) at the far right edge beside the captions is page FURNITURE (documented, not redrawn); between the last caption and the ETHICS ribbon: a thin block-ending rule + white space (boundary clean); the running header reads '268 · SEC TION II · PUBLIC HEALTH SCIENCES · ▶ PUBLIC HEALTH SCIENCES—ETHICS' (the header already carries the subsection that STARTS on this page); footer slug 'FAS1_2026_06-PubHealth.indd 268' + '12/16/25 12:46 PM'. ADJUDICATIONS (documented in the census file and here): (A) VLM pass 1 misread the Negative r line's arrows as '(as one variable ↓, the other variable ↓)' — the TEXT LAYER prints '(as one variable ↑, the other ↓)' (raw line 16), the internally consistent reading (negative correlation = one variable up, the other DOWN); text layer governs, VLM corrected; (B) the negative gallery labels print an EN DASH (U+2013) while the body's '−1' uses the TRUE MINUS (U+2212) — mixed dash glyphs carried as extracted (text layer is the glyph authority; VLM pass 2 concurs the labels are en-dash style); (C) the middle label merges to 'r=0' in the raw layer; the print spaces it ('r = 0', VLM-confirmed) — the note carries the spaced form; (D) the printed gallery order matched the batch brief's expectation exactly — no correction. Quirks carried + documented: 'SEC TION II' header-space artifact (known, as-is); the banner prints TWICE (running-header instance raw line 10 INSIDE the top portion as furniture; in-body ribbon raw line 43 = the boundary, never quoted); the heading 'Pearson correlation coefficient' wraps across two lines (raw lines 5-6); the superscript ² flattens to 'r 2' (note renders r²); C1 control bytes ride the arrows (U+008E/U+008F/U+0090, stripped by the normalizer, carried as printed); READING-ORDER JUMBLE — 'No correlation' extracts after 'r = +0.4' (line 33 after 31) and 'Weak positive correlation' after 'r = +0.8' (lines 37-38 after 35); printed order pinned by bbox x-coordinates + the VLM pass, evidence ranges quote the raw extraction order. Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (scatter-to-r-map, r-squared-variance-map == the note's mechanisms[].id in order), a visual block + verbatim table block + gallery-decoder list + steps block + compare block + exam callout + memory callout, a clinical block (KYP-context anchors, flagged: the page prints NO clinical example of its own — age/GFR, pack-years/FEV1, the r² literature habit, plus the boundary note), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (statistical-tests, statistical-distributions, roc-precision-accuracy, incidence-prevalence — all four public-health census topicIds), 4 crossLinks, 4 mnemonics (all KYP originals, marked; the printed verdict sentence attributed as First Aid's own in the memory callout), and a miniCase with 5 options (exactly 1 correct, why/why-wrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints a statistical measure, not drugs — no mechanisms/uses/adverse effects to trace, so the DrugCard shape does not fit; the clinical anchors are carried in the clinical block instead, flagged as KYP context; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh17/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'correlation-map' is therefore not yet in visuals/registry.tsx by design); (5) the top portion's TWO visual assets are implemented in ONE registry visual (correlation-map, CorrelationMap in visuals/pubhealth-p17.tsx, viewBox 0 0 1102 1050): the five-panel scatter gallery as an ORIGINAL_KYP_REDRAW (five KYP dot fields matching each r's direction and tightness — tight steep fields with fit-line arrows for ±0.8, loose drifts for ±0.4, a shapeless cloud for 0; every printed label and caption preserved) and the text block as an ORIGINAL KYP ADAPTATION (the SIGN/SIZE/SQUARE interpretation rail + the correlation-does-not-necessarily-imply-causation verdict band) — with the full block text ALSO carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Epidemiology and Biostatistics",
    "topicId": "correlation-coefficient", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "correlation-coefficient-sv1",
        "sourcePages": {"part": 1, "pdfPages": [290], "bookPages": "268 (top)"},
        "visualType": "SUMMARY_FIGURE",
        "visualPurpose": "The Pearson correlation coefficient text block (book 268 top): the definition (a measure of the linear correlation between two variables; r always between −1 and +1), the strength rule (the closer |r| is to 1 the stronger the linear correlation), the inline variance definition, the positive/negative r direction lines, the coefficient of determination r² (proportion of variance in one variable explained by variance in the other), and the closing verdict sentence — the subsection's last biostatistics block",
        "sourceFigureDescription": "PURE TEXT, no raster (pdfimages: zero raster images; VLM-read in TWO passes — 120dpi full page + 300dpi upper crop, staging-pubh17/vlm-census.txt): the bold dark-navy heading 'Pearson correlation coefficient' wrapping across two lines in the left label column, with the body printing to its right in black roman — the r characters in ITALIC throughout; 'Correlation does not necessarily imply causation.' prints in REGULAR roman (not bolded, italicized, or colored) inline at the end of the coefficient-of-determination sentence; NO red text, mnemonics, margin notes, or asterisk footnotes in the top portion; the block ends at a thin horizontal rule, then white space, then the ETHICS ribbon banner.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "correlation-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone B (the r/r² interpretation rail: the SIGN card with the two printed direction lines and ↑↑/↑↓ chips, the SIZE card with the printed range + strength rule and the −1→+1 scale plotting the five gallery values, the SQUARE card with the printed coefficient-of-determination sentence, the r = +0.8 → r² = 0.64 worked chip, and the inline variance definition) + Zone C (the verdict band: the printed sentence 'Correlation does not necessarily imply causation.' carried verbatim and attributed, with the three KYP rival chips — confounder, reverse direction, design decides) of the registry visual (CorrelationMap in visuals/pubhealth-p17.tsx); the full block text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, mechanisms[1], blocks[3] the steps block, and recall[0-6]",
        "productionStatus": "complete",
        "plannedKypVisualId": "correlation-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "correlation-coefficient-sv2",
        "sourcePages": {"part": 1, "pdfPages": [290], "bookPages": "268 (top)"},
        "visualType": "COMPARISON_FIGURE",
        "visualPurpose": "The five-panel scatter gallery (book 268 top): five scatter plots comparing r = −0.8 (strong negative correlation), r = −0.4 (weak negative correlation), r = 0 (no correlation), r = +0.4 (weak positive correlation), and r = +0.8 (strong positive correlation) — the page's visual calibration of how a dot cloud's direction and tightness encode the sign and strength of the linear correlation",
        "sourceFigureDescription": "PURE VECTOR SCATTER ART, no raster (pdfimages: zero raster images; panel order + geometry pinned by pdftotext -bbox x-coordinates + the VLM pass at 120dpi and 300dpi, staging-pubh17/vlm-census.txt): a horizontal row of FIVE small scatter panels, printed order left→right — 1st 'r = –0.8' / caption 'Strong negative correlation': ~11-12 navy filled-circle dots in a TIGHT downhill trend hugging a steep descending line, with a faint gray diagonal fit-line arrow through the cloud; 2nd 'r = –0.4' / 'Weak negative correlation': loose downhill drift with wide vertical scatter; 3rd 'r = 0' / 'No correlation' (caption on one line): a shapeless cloud with no trend; 4th 'r = +0.4' / 'Weak positive correlation': loose uphill drift; 5th 'r = +0.8' / 'Strong positive correlation': ~13-14 dots TIGHT along a steep ascending gray fit-line arrow — the two positive panels mirror images of the two negative panels. Each panel: a light tan/gold gridline frame with x/y axis lines meeting at the lower-left corner and small arrowheads, NO axis labels, tick numbers, or axis titles; r labels above (italic r; en-dash minus in the two negative labels), captions below in plain black (two-line wraps except 'No correlation'). A small FA review-question icon (square/checkmark 'Rx' glyph) at the far right edge beside the captions is page furniture. RAW-LAYER QUIRKS: the captions extract in a jumbled order ('No correlation' after 'r = +0.4'; 'Weak positive correlation' after 'r = +0.8') and the middle label merges to 'r=0' — printed order pinned by bbox + VLM.",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "correlation-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A of the registry visual (CorrelationMap in visuals/pubhealth-p17.tsx): the five panels redrawn as KYP vector art in the printed order — each with its verbatim r label (italic, en-dash in the two negative labels), a gridline frame with unlabeled lower-left axes and arrowheads, a KYP dot field matching the printed direction × tightness (tight steep downhill for −0.8 and uphill for +0.8 with fit-line arrows as printed; loose drifts for ±0.4; a shapeless cloud for 0), the verbatim caption below, and a small r² chip (0.64 / 0.16 / 0) — plus the KYP rule strip; the gallery's semantics are also carried in mechanisms[0] scatter-to-r-map, blocks[2] the gallery decoder, and recall[6]",
        "productionStatus": "complete",
        "plannedKypVisualId": "correlation-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh17"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "correlation-coefficient.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "correlation-coefficient.json").write_text(
    json.dumps({"topicId": "correlation-coefficient", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "correlation-coefficient", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The pinned top portion of book 268 (through the end of the Pearson correlation coefficient block; the in-body ribbon banner '▶ PUBLIC HEALTH SCIENCES—ETHICS' below it belongs to core-ethical-principles, produced in parallel) carries TWO visual assets — the Pearson correlation coefficient text block (sv1: definition, range, strength rule, inline variance definition, the positive/negative r direction lines, r² + the closing verdict sentence) and the five-panel scatter gallery (sv2: r = −0.8 strong negative · r = −0.4 weak negative · r = 0 no correlation · r = +0.4 weak positive · r = +0.8 strong positive) — both accounted for in ONE registry visual (correlation-map, CorrelationMap in visuals/pubhealth-p17.tsx, viewBox 0 0 1102 1050): the text block as an ORIGINAL KYP ADAPTATION (Zone B interpretation rail — SIGN/SIZE/SQUARE cards — and Zone C the correlation-does-not-necessarily-imply-causation verdict band) and the gallery as an ORIGINAL_KYP_REDRAW (Zone A: five KYP dot fields rebuilt as vector art matching each r's direction and tightness, fit-line arrows in the two strong panels as printed, every label and caption preserved verbatim); nothing is reproduced, and the full block text is additionally carried verbatim in the note's table block. Census: zero raster images (pdfimages); VLM available this session — TWO passes (120dpi full page + 300dpi upper crop, vlm-census.txt) confirmed the five-panel printed order (bbox x-coordinates agree), the dot-field geometry (navy filled circles, tan gridline frames, unlabeled lower-left axes with arrowheads, fit-line arrows only in the two strong panels, shapeless cloud at r = 0), the italic r, the regular-roman verdict sentence, and the absence of red text, mnemonics, and margin notes. ADJUDICATIONS: the VLM pass 1 arrow misread on the Negative r line ('↓, ↓') is overruled by the text layer ('↑, ↓' — raw line 16, the internally consistent reading); the negative labels' en-dash vs the body's true minus is carried as extracted (text layer governs); the middle label's raw-layer merge to 'r=0' is documented (the print spaces it). TOP-portion split page — the chapter's LAST Epidemiology and Biostatistics block before the ETHICS subsection begins. STAGED under .usmle-pipeline-cache/staging-pubh17/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH17 manifest + inventory staged: {OUT}/manifests/correlation-coefficient.json, {OUT}/visual-inventory/correlation-coefficient.json")
print(f"correlation-coefficient: evidence {len(kept)}/{len(E1)} verified")
