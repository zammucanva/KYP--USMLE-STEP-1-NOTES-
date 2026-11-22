#!/usr/bin/env python3
"""PUBH6 likelihood-ratios — manifest + inventory (Public Health batch 2),
STAGED under .usmle-pipeline-cache/staging-pubh6/ (the promotion step owns
content/). Source: MID PORTION ONLY of pdf page 281 / book 259 (Part 1) — a
PINNED PAGE-SPLIT. Scope is the "Likelihood ratio" block ONLY, which sits
BETWEEN the "Demographic transition" block above (ends raw line 98 — owned
by the already-produced vital-statistics-populations topic, the pinned
UPPER split) and the "Kaplan-Meier curve" block below (opens raw line 122 —
owned by survival-analysis, produced in parallel). BLOCKS OWNED: the navy
row-label heading "Likelihood ratio" (raw line 100); the LR+ equation row
(raw lines 102-110) — THREE equal stacked fractions joined by "=" signs:
probability of positive result in patient with disorder / probability of
positive result in patient without disorder = sensitivity / (1 –
specificity) = TP rate / FP rate; the LR– equation row (raw lines 112-120)
— probability of negative result in patient with disorder / probability of
negative result in patient without disorder = (1 – sensitivity) /
specificity = FN rate / TN rate; and the two rule sentences (raw lines
140-141): "LR+ > 10 indicates a highly specific test, while LR– < 0.1
indicates a highly sensitive test." and "Pretest odds × LR = posttest odds.
Posttest probability = posttest odds / (posttest odds + 1)." — printed in
BLACK body text directly beneath the equations, between the LR– row and
the Kaplan-Meier heading (bbox-pinned), but EXTRACTED by the raw text layer
AFTER the Kaplan-Meier body and figure text (reading-order jumble,
documented). STACKED-FRACTION INTERLEAVE, pinned + documented: the LR+ row
extracts its three NUMERATORS first (fraction 1's definition numerator,
then "sensitivity", then "TP rate"), then the two "=" signs, then fraction
1's DENOMINATOR, and finally fraction 2's and 3's denominators MERGED onto
ONE raw line ("1 – specificity FP rate") — a DENOMINATOR-side merge; the
LR– row MIRRORS it with a NUMERATOR-side merge ("1 – sensitivity FN rate"
on one raw line, then the "=" signs, then the three denominators
extracting separately). Census (pdfimages): ZERO raster images — the block
is pure text with vector fraction bars -> ORIGINAL KYP ADAPTATION in ONE
registry visual (likelihood-ratios-map, LikelihoodRatioMap in
visuals/pubhealth-p6.tsx, viewBox 0 0 1102 1128: the two equation rows as
stacked-fraction cards with all three forms each, the LR+ > 10 / LR– < 0.1
thresholds on one number line, and the pretest-odds × LR -> posttest-odds
-> posttest-probability calculation rail worked with a 20% prior through
LR+ 10 and LR– 0.1). VLM AVAILABLE this session (glm-4.6v at 120dpi, ONE
full-page pass, staging-pubh6/vlm-census.txt): confirmed both equation rows
carry exactly THREE stacked fractions separated by two "=" signs (all six
numerator/denominator pairs read back verbatim); the two rule sentences
print in BLACK (not red; corroborated programmatically — PyMuPDF span
colors: heading #004b6c MyriadPro-Bold, body #231f20); the LR labels print
with SUPERSCRIPT +/– (6.5pt vs the 10pt body, flattened by the text layer);
the minus prints as a spaced en-dash (U+2013) and the × as a true
multiplication sign (U+00D7, a Symbol-font span); NO margin notes, NO
mnemonics, NO red text, NO asterisk footnotes, NO raster images anywhere in
the block. The rendered registry visual was audited standalone with the
light-theme tokens (getBBox method: 110 text elements, 0 overlaps, 0
outside the viewBox) and VLM-reviewed CLEAN. DrugCards: FOLDED (documented)
— the block prints formulas, not drug rows."""
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
# Pinned page-split boundary assertions: the topic's scope is the "Likelihood
# ratio" block ONLY — it must START at raw line 100, the upper neighbor's
# Demographic transition block must end at raw line 98, the lower neighbor's
# "Kaplan-Meier curve" heading must sit at raw line 122, and the two rule
# sentences must sit at their raw jumbled position, lines 140-141.
BOUNDARY_CHECKS = [
    (L[281][99].strip(), "Likelihood ratio", "raw line 100 — this topic's opening heading"),
    (L[281][97].strip(), "Declining", "raw line 98 — the upper neighbor's (vital-statistics-populations) last printed row"),
    (L[281][121].strip(), "Kaplan-Meier curve", "raw line 122 — the lower neighbor's (survival-analysis) opening heading, scope ENDS before it"),
    (L[281][139].strip(), "LR+ > 10 indicates a highly specific test, while LR– < 0.1 indicates a highly sensitive test.", "raw line 140 — the first rule sentence at its raw (jumbled) position"),
    (L[281][140].strip(), "Pretest odds × LR = posttest odds. Posttest probability = posttest odds / (posttest odds + 1).", "raw line 141 — the odds-chain sentence at its raw (jumbled) position"),
]
for got, want, where in BOUNDARY_CHECKS:
    if got != want:
        print(f"BOUNDARY MOVED: {where} now reads {got!r} (expected {want!r})")
        sys.exit(1)
kept, fails = [], []
E6 = [
    ("BOUNDARY + the block heading — 'Likelihood ratio' (bold navy row label, the same convention as 'Demographic transition' above and 'Kaplan-Meier curve' below; PyMuPDF: #004b6c MyriadPro-Bold). The pinned MID split of book 259: the Demographic transition block ends at raw line 98 (vital-statistics-populations), the Kaplan-Meier curve block opens at raw line 122 (survival-analysis) — no evidence quote in this topic crosses either boundary", rng(281, 100, 100), [281]),
    ("The LR+ equation row COMPLETE, in raw extraction order — 'LR+ =' then the three stacked fractions' interleave: the three NUMERATORS extract first (fraction 1's 'probability of positive result in patient with disorder', then fraction 2's 'sensitivity', then fraction 3's 'TP rate'), then the two '=' signs, then fraction 1's DENOMINATOR ('probability of positive result in patient without disorder'), and finally fraction 2's and 3's denominators MERGED onto ONE raw line ('1 – specificity FP rate') — a DENOMINATOR-side merge, the block's signature text-layer quirk", rng(281, 102, 110), [281]),
    ("The LR+ definition form's numerator — 'probability of positive result in patient with disorder' (the WITH-disorder probability that heads every likelihood-ratio definition)", rng(281, 104, 104), [281]),
    ("The LR+ alternate forms' numerators as they extract consecutively — 'sensitivity' (the sens/spec form) and 'TP rate' (the 2×2 rate form), the two computation shortcuts for the same ratio", rng(281, 105, 106), [281]),
    ("The LR+ definition form's denominator — 'probability of positive result in patient without disorder' (the WITHOUT-disorder probability)", rng(281, 109, 109), [281]),
    ("The LR+ MERGED denominator line, quoted as the raw layer prints it — '1 – specificity FP rate' is ONE text-layer line carrying TWO stacked fractions' denominators ('1 – specificity' and 'FP rate'), which print as separate cells flanking their own fraction bars (bbox-pinned; the en-dash minus is U+2013, carried verbatim)", rng(281, 110, 110), [281]),
    ("The LR– equation row COMPLETE, in raw extraction order — 'LR– =' then the MIRROR interleave: fraction 1's numerator ('probability of negative result in patient with disorder'), then fraction 2's and 3's NUMERATORS MERGED onto ONE raw line ('1 – sensitivity FN rate' — a NUMERATOR-side merge, mirroring LR+'s denominator-side merge), then the two '=' signs, then fraction 1's denominator ('probability of negative result in patient without disorder'), then fraction 2's denominator 'specificity', then fraction 3's denominator 'TN rate'", rng(281, 112, 120), [281]),
    ("The LR– definition form's numerator — 'probability of negative result in patient with disorder'", rng(281, 114, 114), [281]),
    ("The LR– MERGED numerator line, quoted as the raw layer prints it — '1 – sensitivity FN rate' is ONE text-layer line carrying TWO stacked fractions' numerators ('1 – sensitivity' and 'FN rate'), which print as separate cells (bbox-pinned)", rng(281, 115, 115), [281]),
    ("The LR– alternate forms' denominators as they extract consecutively — 'specificity' (the sens/spec form's denominator) and 'TN rate' (the 2×2 rate form's denominator)", rng(281, 119, 120), [281]),
    ("RULE SENTENCE 1, the thresholds — 'LR+ > 10 indicates a highly specific test, while LR– < 0.1 indicates a highly sensitive test.' READING-ORDER JUMBLE, documented: the sentence PRINTS in black body text directly beneath the LR– row, between it and the 'Kaplan-Meier curve' heading (pdftotext -bbox y ≈ 537), but the raw text layer extracts it at line 140, AFTER the Kaplan-Meier body text and figure labels — quoted at its raw position; print position pinned by bbox + the VLM pass. The LR– minus is U+2013, carried verbatim", rng(281, 140, 140), [281]),
    ("RULE SENTENCE 2, the odds chain — 'Pretest odds × LR = posttest odds. Posttest probability = posttest odds / (posttest odds + 1).' The multiplication sign is a true × (U+00D7, a Symbol-font span); extracts at raw line 141, after the Kaplan-Meier text (same documented jumble), printing beneath the equations at y ≈ 550", rng(281, 141, 141), [281]),
    ("BOTH rule sentences as they print together beneath the equations (and as they extract consecutively in the raw layer) — the threshold rule and the odds chain, the block's two closing sentences", rng(281, 140, 141), [281]),
]
for c, q, pgs in E6:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"likelihood-ratios: evidence {len(kept)}/{len(E6)} verified")
print("boundary checks: line 98 'Declining' (upper neighbor ends) · line 100 'Likelihood ratio' (scope start) · line 122 'Kaplan-Meier curve' (lower neighbor, scope ends before it) · lines 140-141 the two rule sentences (raw jumbled position) — all pass")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m6 = {"topicId": "likelihood-ratios", "title": "Likelihood Ratios: From Pretest to Posttest Odds",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [281], "bookPages": "259 (mid)"},
    "sourceEvidence": kept, "visualIds": ["likelihood-ratios-map"],
    "mechanismIds": ["lr-fraction-map", "pretest-to-posttest-map"],
    "kypExtensions": [
        {"id": "column-decoder-layer",
         "summary": "The 2×2 column decoder and the three-faces reading: LR+ divides the test-POSITIVE column (TP rate ÷ FP rate) and LR– the test-NEGATIVE column (FN rate ÷ TN rate) — the sign of the ratio selects the column, the disease rows supply numerator (with disorder) and denominator (without disorder); each printed equation's three fractions are three faces of one number (definition form = what it MEANS, sensitivity/specificity form = how to COMPUTE from the classic pair, 2×2 rate form = how to COMPUTE from the grid); plus the mirror rule (the '1 –' sits in the DENOMINATOR for LR+ and the NUMERATOR for LR– — the intact statistic names the quality an extreme value certifies) and the LR = 1 no-shift midpoint.",
         "origin": "outside-first-aid", "rationale": "The source prints the three equivalent forms but never states the column rule, the face-to-purpose mapping, the mirror rule, or the LR = 1 reading; the decoder is KYP's synthesis.",
         "location": "core.keyIdea MOVES 1-2 + mechanisms[0] lr-fraction-map + blocks[2] the decoder list block + the registry visual's fraction cards and number line"},
        {"id": "odds-chain-layer",
         "summary": "The odds-chain machinery around the two printed clauses: the UNPRINTED probability-to-odds hinge (pretest odds = p/(1–p)) and its mirror the printed back-conversion (odds/(odds + 1)); the five-move protocol (fix the prior → convert to odds → select the LR matching the observed result → multiply → convert back); the worked example carried everywhere (20% prior → odds 0.25 → × LR+ 10 → odds 2.5 → ≈ 71% · × LR– 0.1 → odds 0.025 → ≈ 2.4%); sequential-test chaining (pretest odds × LR₁ × LR₂ = posttest odds) and the Fagan nomogram (named, not drawn) — every worked number and unprinted conversion flagged as KYP.",
         "origin": "outside-first-aid", "rationale": "The source prints 'Pretest odds × LR = posttest odds' and the back-conversion only; the p/(1–p) hinge, the protocol order, all worked numbers, the chaining rule, and the nomogram are KYP's.",
         "location": "core.keyIdea MOVE 3 + mechanisms[1] pretest-to-posttest-map + blocks[3] the steps block + the registry visual's Zone C calculation rail + recall[4-6]"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed block — 4 patterns (LR from sens/spec with the complementary flip; LR from the 2×2 rates; the full chain computation; the threshold attribution), 4 traps (the LR+/LR– formula mirror; odds vs probability; the counterintuitive LR+ > 10 = highly SPECIFIC pairing; LR+ = TP rate/FP rate vs PPV = TP/(TP+FP) column-vs-row), 3 pivots (the two-question direction router; the threshold attribution test; the which-column sign router), and the PE miniCase (5 options, exactly 1 correct: pretest 20% + D-dimer LR– 0.1 → posttest ≈ 2.4% and stop; distractors = the swapped specificity/sensitivity attribution, the halve-the-percentage error, the no-update/prevalence error, and the demands-the-components error, each with why-wrong).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the formulas and rules only; every vignette, distractor design, and question shape is KYP's design.",
         "location": "usmle section + recall + rapidReview"},
        {"id": "mnemonic-layer",
         "summary": "The four KYP mnemonics (POSITIVE DIVIDES POSITIVES, NEGATIVE DIVIDES NEGATIVES · ONE-MINUS MIGRATES OPPOSITE THE SIGN · TEN RULES IN, A TENTH RULES OUT · PROBABILITY IN, ODDS THROUGH, PROBABILITY OUT). NO mnemonic of First Aid's own prints anywhere in the block (VLM census: no margin notes, no mnemonic letters, no red text) — so all four ALL-CAPS codes are KYP originals, unlike the observational-studies page's two in-cell hooks; SP-P-IN and SN-N-OUT are First Aid's OWN hooks from the facing page (book 260, the diagnostic-test-performance topic) and are carried as ATTRIBUTED cross-references only, never counted among this topic's mnemonics. The rule-in/rule-out phrasing attached to the printed thresholds is KYP's translation of the printed 'indicates a highly specific/sensitive test.'",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints on pdf 281 mid (pdfimages + VLM census, staging-pubh6/vlm-census.txt); the four codes and the threshold translation are KYP's design.",
         "location": "mnemonics + blocks[6] the memory callout + the registry visual's threshold bands and rule strips"},
        {"id": "context-and-bridge-layer",
         "summary": "The KYP-context generalizations, every one flagged as such: the prevalence-independence of LRs vs the prevalence-dependence of PPV/NPV (the facing page's material — the design reason the block exists); the rule-in/rule-out reading of the printed thresholds; the treatment-threshold framing of when testing is worth it; sequential-test chaining; the Bayes-odds identity (the printed chain IS the odds form of Bayes' theorem); the D-dimer/PE and screening-program clinical bridges; and the pinned page-split boundaries (Demographic transition above → vital-statistics-populations; Kaplan-Meier curve below → survival-analysis).",
         "origin": "outside-first-aid", "rationale": "The source prints the formulas and the two rule sentences only; every clinical generalization, the Bayes framing, and the boundary documentation is KYP context, explicitly marked in the note and never presented as printed text.",
         "location": "clinical block + core.why + blocks[4] the compare block + crossLinks + the registry visual's footer"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "PINNED PAGE-SPLIT (mid portion only): pdf 281 / book 259 mid, from the 'Likelihood ratio' heading (raw line 100) through the two stacked-fraction equation rows (LR+ raw lines 102-110, LR– raw lines 112-120) and the two rule sentences (raw lines 140-141) — asserted by the gen script's five boundary checks (the upper neighbor's Demographic transition block ends at raw line 98; the lower neighbor's Kaplan-Meier curve heading sits at raw line 122; the two rule sentences sit at their raw jumbled position). The page header/banner (raw lines 1-9) was claimed by the upper-split topic (vital-statistics-populations) and is deliberately NOT quoted here; the indd footer slug (raw line 124) and the Kaplan-Meier body/figure text (raw lines 122-139, 143+) belong to the neighbors and are NOT quoted. BLOCKS OWNED: the whole printed LR block — heading + two equation rows (each THREE equal stacked fractions joined by '=' signs, all six numerator/denominator pairs carried VERBATIM in the note's table block) + the two rule sentences (carried VERBATIM). CENSUS (pdfimages): ZERO raster images; the block is pure text with vector fraction bars -> ORIGINAL KYP ADAPTATION (SUMMARY_FIGURE) in ONE registry visual (likelihood-ratios-map, LikelihoodRatioMap in visuals/pubhealth-p6.tsx, viewBox 0 0 1102 1128): the two equation rows as stacked-fraction cards with all three forms each and drawn fraction bars, the LR+ > 10 / LR– < 0.1 thresholds on one number line with the LR = 1 midpoint, and the pretest-odds × LR -> posttest-odds -> posttest-probability calculation rail worked with a 20% prior through LR+ 10 (odds 2.5 -> ≈ 71%) and LR– 0.1 (odds 0.025 -> ≈ 2.4%). VISUAL QA (KYP, pre-promotion): server-rendered standalone with the light-theme tokens and audited in-browser with the ph26-ph28 getBBox method — 110 text elements, 0 overlaps (>1-unit bbox intersection), 0 texts outside the viewBox; a VLM review of the themed render returned CLEAN (all three zones readable, no clipping). VLM WAS AVAILABLE this session (ONE 120dpi glm-4.6v full-page pass, staging-pubh6/vlm-census.txt): both equation rows confirmed with exactly THREE stacked fractions each (all pairs read back verbatim, none missing or extra); the two rule sentences print in BLACK body text directly below the LR– row (NOT red — corroborated programmatically via PyMuPDF span colors: heading #004b6c MyriadPro-Bold, body #231f20); the LR labels print with SUPERSCRIPT +/– (6.5pt spans vs the 10pt body — flattened to 'LR+'/'LR–' by the text layer); the fraction bars are thin horizontal rules; NO margin notes, NO mnemonics, NO red text, NO asterisk footnotes, NO raster images in the block; nothing else prints inside the block besides the heading, the two equation rows, and the two sentences. QUIRKS carried + documented: (1) the STACKED-FRACTION INTERLEAVE — LR+ merges its 2nd+3rd DENOMINATORS onto one raw line ('1 – specificity FP rate'); LR– mirrors with its 2nd+3rd NUMERATORS merged ('1 – sensitivity FN rate'); both rows extract numerators before the '=' signs and denominators after; (2) the READING-ORDER JUMBLE — the two rule sentences PRINT between the LR– row and the Kaplan-Meier heading (bbox y ≈ 537/550 vs KM title y ≈ 589) but EXTRACT at raw lines 140-141 AFTER the Kaplan-Meier body and figure text; evidence ranges 11-13 quote them at their raw position, print position bbox+VLM-pinned; (3) the en-dash minus (U+2013) in '1 – specificity', '1 – sensitivity', 'LR–' and the multiplication sign (U+00D7) in 'Pretest odds × LR' are carried verbatim; (4) 'LR+'/'LR–' flatten the printed superscripts. ADJUDICATIONS: (A) none needed on content — the batch brief's block description and the print agree exactly (both formulas, the threshold sentence, the odds chain); (B) the heading sits in the left label column with the equations indented right (the page's row-label convention — bbox x: heading ≈ 87, equations ≈ 199+), carried in the visual as labeled cards; (C) the note's title follows the batch task directive 'Likelihood Ratios: From Pretest to Posttest Odds' (the chapter census carries the short label 'Likelihood Ratios: Pretest to Posttest Odds' — the note title extends it, the pubh1 precedent). CONVENTIONS, documented: (1) the batch convention targets are met — 2 mechanisms (lr-fraction-map, pretest-to-posttest-map), a visual block + verbatim table block + decoder list + steps block + compare block + exam callout + memory callout, a clinical block (the bedside layer), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (quantifying-risk, diagnostic-test-performance, survival-analysis, roc-precision-accuracy — all census topicIds), 4 crossLinks, 4 KYP mnemonics (First Aid prints none in this block — documented), and a miniCase with 5 options (exactly 1 correct, why/why-wrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the block prints formulas, not drug rows — nothing to trace into the DrugCard shape; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the manifest convention shared with staging-pubh1 through staging-pubh5; the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh6/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'likelihood-ratios-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's ONE visual asset (the formula block) is implemented in ONE registry visual as an ORIGINAL KYP ADAPTATION — every printed label preserved (heading, both equation rows in all three forms, both rule sentences), with the block's full text ALSO carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Epidemiology and Biostatistics",
    "topicId": "likelihood-ratios", "requiredInKYP": True}
inv6 = [
    dict(SV_BASE, **{
        "visualId": "likelihood-ratios-sv1",
        "sourcePages": {"part": 1, "pdfPages": [281], "bookPages": "259 (mid)"},
        "visualType": "SUMMARY_FIGURE",
        "visualPurpose": "The Likelihood ratio block (book 259 mid): the two stacked-fraction equation rows — LR+ (probability of positive result in patient with disorder ÷ probability of positive result in patient without disorder = sensitivity/(1 – specificity) = TP rate/FP rate) and LR– (probability of negative result in patient with disorder ÷ probability of negative result in patient without disorder = (1 – sensitivity)/specificity = FN rate/TN rate) — plus the two rule sentences (the LR+ > 10 / LR– < 0.1 thresholds and the pretest-odds × LR = posttest-odds chain): the diagnostic-testing hinge that turns test characteristics into probability updates",
        "sourceFigureDescription": "PURE TEXT WITH VECTOR FRACTION BARS, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh6/vlm-census.txt — VLM available this session): the bold navy row-label heading 'Likelihood ratio' (#004b6c MyriadPro-Bold, PyMuPDF-pinned — the same convention as 'Demographic transition' above and 'Kaplan-Meier curve' below), the equations indented right of the label, then TWO equation rows each printing THREE equal stacked fractions (numerator above a thin horizontal rule, denominator below) joined by two '=' signs vertically centered between numerator and denominator: LR+ = [probability of positive result in patient with disorder / probability of positive result in patient without disorder] = [sensitivity / 1 – specificity] = [TP rate / FP rate]; LR– = [probability of negative result in patient with disorder / probability of negative result in patient without disorder] = [1 – sensitivity / specificity] = [FN rate / TN rate]; the LR labels print with SUPERSCRIPT +/– (6.5pt spans vs the 10pt body); the minus prints as a spaced en-dash (U+2013). Beneath the LR– row, TWO rule sentences in BLACK body text (#231f20 — not red; PyMuPDF-corroborated), printing between the equations and the 'Kaplan-Meier curve' heading (bbox y ≈ 537/550 vs KM title ≈ 589) but EXTRACTING in the raw text layer after the Kaplan-Meier body and figure text (reading-order jumble, documented): 'LR+ > 10 indicates a highly specific test, while LR– < 0.1 indicates a highly sensitive test.' and 'Pretest odds × LR = posttest odds. Posttest probability = posttest odds / (posttest odds + 1).' (× = U+00D7). Raw-layer stacked-fraction interleave: LR+ merges its 2nd+3rd DENOMINATORS onto one line ('1 – specificity FP rate'); LR– mirrors with its 2nd+3rd NUMERATORS merged ('1 – sensitivity FN rate'). No margin notes, mnemonics, red text, asterisk footnotes, or raster images anywhere in the block (VLM-confirmed).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "likelihood-ratios-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the whole registry visual (LikelihoodRatioMap in visuals/pubhealth-p6.tsx, viewBox 0 0 1102 1128), three zones: Zone A the two equation rows as stacked-fraction cards (LR+ and LR–, each with its definition form, sensitivity/specificity form, and 2×2 rate form drawn with true horizontal fraction bars, the form labels, the printed threshold chips, the mirror rule, and the documented raw-merge quirks) + the verbatim rule strip carrying both printed sentences; Zone B the LR+ > 10 / LR– < 0.1 thresholds on one number line with the LR = 1 no-shift midpoint (KYP) and the RULES IN/OUT bands with SP-P-IN/SN-N-OUT attributed to the facing page; Zone C the pretest-odds × LR calculation rail (shared 20% prior → odds 0.25 card, positive lane × LR+ 10 → odds 2.5 → ≈ 71%, negative lane × LR– 0.1 → odds 0.025 → ≈ 2.4%, with the unprinted p/(1–p) hinge flagged KYP); the block's full text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, the decoder list block (blocks[2]), and recall[0-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "likelihood-ratios-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh6"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "likelihood-ratios.json").write_text(json.dumps(m6, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "likelihood-ratios.json").write_text(
    json.dumps({"topicId": "likelihood-ratios", "chapterId": "public-health", "inventory": inv6,
                "coverageAudit": {"topicId": "likelihood-ratios", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The topic's mid portion carries ONE visual asset — the Likelihood ratio block itself (sv1: the two stacked-fraction equation rows with all three equivalent forms each, plus the two rule sentences) — accounted for as ONE ORIGINAL KYP ADAPTATION (SUMMARY_FIGURE) in ONE registry visual (likelihood-ratios-map, LikelihoodRatioMap in visuals/pubhealth-p6.tsx, viewBox 0 0 1102 1128): nothing is reproduced; Zone A re-lays the two equation rows out as stacked-fraction cards with drawn fraction bars (every printed word preserved, both threshold chips, the mirror rule, the documented raw-merge quirks), Zone B draws the printed thresholds on one number line with the KYP LR = 1 midpoint and the RULES IN/OUT bands (SP-P-IN / SN-N-OUT attributed to First Aid's facing page), and Zone C works the printed odds chain as a horizontal calculation rail (20% prior → odds 0.25 → × LR+ 10 → 2.5 → ≈ 71% · × LR– 0.1 → 0.025 → ≈ 2.4%, the unprinted p/(1–p) hinge flagged KYP); the block's full text is additionally carried verbatim in the note's table block. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi glm-4.6v full-page pass (staging-pubh6/vlm-census.txt) confirmed both equation rows with exactly three stacked fractions each (all pairs verbatim), the two rule sentences in BLACK body text beneath the equations (not red), the superscript +/– LR labels, the en-dash minus and true × multiplication sign, the absence of margin notes/mnemonics/footnotes/rasters, and both page-split boundaries (Demographic transition above, Kaplan-Meier curve below). STACKED-FRACTION INTERLEAVE documented: LR+ merges its 2nd+3rd denominators onto one raw line, LR– its 2nd+3rd numerators; the two rule sentences extract after the Kaplan-Meier text though they print beneath the equations (bbox-pinned). Visual QA pre-promotion: standalone light-theme render audited with the getBBox method — 110 text elements, 0 overlaps, 0 outside the viewBox; VLM review of the render CLEAN. PINNED PAGE-SPLIT: the topic owns pdf 281 / book 259 MID only (upper → vital-statistics-populations; lower → survival-analysis). STAGED under .usmle-pipeline-cache/staging-pubh6/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH6 manifest + inventory staged: {OUT}/manifests/likelihood-ratios.json, {OUT}/visual-inventory/likelihood-ratios.json")
print(f"likelihood-ratios: evidence {len(kept)}/{len(E6)} verified")
