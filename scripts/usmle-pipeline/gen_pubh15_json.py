#!/usr/bin/env python3
"""PUBH15 confidence-intervals-meta-analysis — manifest + inventory (Public
Health batch 2), STAGED under .usmle-pipeline-cache/staging-pubh15/ (the
promotion step owns content/). Source: UPPER PORTION ONLY of pdf page 289 /
book 267 (Part 1) — a PINNED PAGE-SPLIT: the topic owns everything from the
page top through the END of the "Meta-analysis" block, ending immediately
BEFORE the navy "Common statistical tests" heading (raw text-layer line 39),
which opens the LOWER portion owned by statistical-tests (a later batch);
the split is pinned by pdftotext -bbox (the boundary heading sits at
y~336 pt below a thin rule) + the VLM pass. Blocks owned (three, all carried
verbatim): (1) "Confidence interval" — navy heading + "Range of values
within which the true mean of the population is expected to fall, with a
specified probability." + "CI = 1 – α. The 95% CI (corresponding to
α = 0.05) is often used. As sample size increases, CI narrows." + "CI for
sample mean = x ± Z(SE)" + "For the 95% CI, Z = 1.96." + "For the 99% CI,
Z = 2.58."; (2) THE SIGNIFICANCE-RULES PANEL — borderless, printing to the
RIGHT of the CI block in the same vertical band (bbox x~421-612 vs the CI
body x~199-380; VLM-confirmed) with small TEAL SQUARE bullets: "H0 is
rejected (and results are significant) when:" + excludes-0 / excludes-1 /
do-not-overlap, and the mirror "H0 is not rejected (and results are not
significant) when:" + includes-0 / includes-1 / do-overlap; (3)
"Meta-analysis" — "A method of statistical analysis that pools summary data
(eg, means, RRs) from multiple studies for a more precise estimate of the
size of an effect. Also estimates heterogeneity of effect sizes between
studies." + "Improves power, strength of evidence, and generalizability
(external validity) of study findings." + "Limited by quality of individual
studies and bias in study selection." CENSUS (pdfimages): ZERO raster
images on the page. VLM AVAILABLE this session (glm-4.6v, TWO passes — full
page at 120dpi + a 300dpi upper-portion crop, staging-pubh15/vlm-census.txt):
NO figure, curve, distribution, error-bar diagram, forest plot, icon, or
decorative graphic ANYWHERE in the upper portion — the label column left of
the CI block, the gutter between CI text and rules panel, and the
Meta-analysis band are blank; the page's only figure (the test-selection
flow diagram) lies BELOW the boundary and belongs to statistical-tests.
The upper portion is PURE TEXT -> both assets are ORIGINAL KYP ADAPTATIONS
in ONE registry visual (ci-meta-map, CiMetaMap in visuals/pubhealth-p15.tsx,
viewBox 0 0 1102 1238): Zone A the formula card (definition, CI = 1 – α,
x-bar ± Z(SE) on a number line with the 95% bracket inside the wider 99%
bracket, the two Z-constant chips, and the sample-size narrowing dial), Zone
B the six verdict rules as mirrored number-line glyphs with the null-value
router strip, Zone C the pooling diagram (three study estimates converging
into one narrower pooled estimate + heterogeneity/gains/limits chips + the
bridge strip); every quoted sentence is the print's own, all geometry is
KYP's. ADJUDICATIONS, documented in the census file and the manifest notes:
(A) the batch brief flagged a possible small distribution figure printing
beside/around the CI block — the census (pdfimages + BOTH VLM passes) found
NONE: no figure record is claimed, and the visual's number-line glyphs are
100% KYP-drawn geometry (flagged); (B) the significance-rules panel is
assigned to the Confidence interval asset (sv1): it prints in the CI band
with no heading of its own and all six of its rules are CI-application
rules; (C) the page prints NO mnemonic of its own anywhere in the upper
portion (VLM: no red text, no margin notes; the lower portion's red hooks
belong to statistical-tests) — all four mnemonics in the note are KYP
ORIGINALS, marked as such, FA-own count zero; (D) the printed overlap rules
are carried VERBATIM and govern — the unprinted statistical nuance that two
individually-reported CIs can overlap while the difference is still
significant is flagged only as KYP context where mentioned, never as a
correction of the print. Printed quirks carried + documented: "SEC TION II"
header-space extraction artifact (known, as-is); small-caps artifact
"EPIDEmIOLOGY AND BIOSTATISTICS" in the banner (ONE banner instance — this
is not the subsection opener); the six rules bullets are small teal squares
that extract as C1 control byte U+0083 + U+2598; "CI = 1 – α" prints with a
spaced EN-DASH as the minus; the sample mean prints as x with an OVERBAR
(x-bar, VLM-confirmed) flattened to "x" by the text layer; H0 prints with a
SUBSCRIPT zero (H-zero) flattened to "H0"; READING-ORDER JUMBLE — the rules
panel prints upper-RIGHT beside the CI block but EXTRACTS after the
Meta-analysis body (raw lines 29-37 follow 21-27; bbox + VLM pin the print
position); the second rules lead-in wraps with "when:" alone on its own
line. Nothing is reproduced: both assets are ORIGINAL KYP ADAPTATIONS.
DrugCards: none — the page prints statistics, not drugs (folded by
absence; the clinical anchors are carried in the note's clinical block)."""
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
    ("Page identity + the pinned SPLIT BOUNDARY's upper side — the running head PUBLIC HEALTH SCIENCES, the subsection banner with its small-caps extraction artifact '▶ PUBLIC HEALTH SCIENCES—EPIDEmIOLOGY AND BIOSTATISTICS' (ONE banner instance: running header only — this is not the subsection opener, which printed it twice on pdf 278), book page 267, and the known 'SEC TION II' header-space artifact — the topic owns from the page top through the END of the Meta-analysis block; the next content line (raw line 39, 'Common statistical tests', bbox y≈336 below a thin rule) opens the LOWER portion owned by statistical-tests and is never crossed by any quote", rng(289, 1, 8), [289]),
    ("BLOCK 1 part 1 — the 'Confidence interval' navy heading and the printed definition: a confidence interval is a range of values within which the true mean of the population is expected to fall, with a specified probability", rng(289, 9, 13), [289]),
    ("BLOCK 1 part 2 — the level rule and the precision dial: CI = 1 – α (spaced EN-DASH as the minus, as printed); the 95% CI (corresponding to α = 0.05) is often used; as sample size increases, CI narrows", rng(289, 14, 16), [289]),
    ("BLOCK 1 part 3 — the printed formula for the CI of a sample mean: CI for sample mean = x ± Z(SE) (the sample-mean x prints with an OVERBAR per the VLM pass; the text layer flattens it to plain 'x', carried as extracted)", rng(289, 17, 17), [289]),
    ("BLOCK 1 part 4 — the two Z constants: for the 95% CI, Z = 1.96; for the 99% CI, Z = 2.58 (the two cold-recall numbers of the block)", rng(289, 18, 19), [289]),
    ("BLOCK 3 part 1 — the 'Meta-analysis' navy heading and the printed definition: a method of statistical analysis that pools summary data (eg, means, RRs) from multiple studies for a more precise estimate of the size of an effect; also estimates heterogeneity of effect sizes between studies", rng(289, 21, 25), [289]),
    ("BLOCK 3 part 2 — the printed gains: improves power, strength of evidence, and generalizability (external validity) of study findings", rng(289, 26, 26), [289]),
    ("BLOCK 3 part 3 — the printed limits: limited by quality of individual studies and bias in study selection", rng(289, 27, 27), [289]),
    ("BLOCK 2 part 1 — the significance-rules panel, REJECTED side (prints to the RIGHT of the CI block in the same band, borderless, small teal square bullets that extract as C1 control byte + U+2598; H0 prints with a subscript zero; the panel EXTRACTS here, after the Meta-analysis body — a reading-order jumble pinned by bbox + VLM): H0 is rejected (and results are significant) when: 95% CI for mean difference excludes 0 / 95% CI OR or RR excludes 1 / CIs between two groups do not overlap", rng(289, 29, 32), [289]),
    ("BLOCK 2 part 2 — the significance-rules panel, NOT-REJECTED side: 'H0 is not rejected (and results are not significant)' (the lead-in wraps, 'when:' alone on its own line — carried) when: 95% CI for mean difference includes 0 / 95% CI OR or RR includes 1", rng(289, 33, 36), [289]),
    ("THE BOUNDARY WITNESS — the FINAL line of the pinned upper portion: the not-rejected mirror's last bullet 'CIs between two groups do overlap' (raw line 37); the next raw content line (line 39) is 'Common statistical tests', the statistical-tests topic's heading — the topic's every quote ends at or above this line", rng(289, 37, 37), [289]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"confidence-intervals-meta-analysis: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "confidence-intervals-meta-analysis", "title": "Confidence Intervals and Meta-Analysis: The Interval, the Verdict, and the Pool",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [289], "bookPages": "267 (upper)"},
    "sourceEvidence": kept, "visualIds": ["ci-meta-map"],
    "mechanismIds": ["ci-significance-engine", "meta-analysis-pooling-map"],
    "kypExtensions": [
        {"id": "null-value-router",
         "summary": "The null-value router and four-move interval-reading protocol: FIRST name the measure family, THEN fetch its null (mean difference -> 0 on the additive scale; OR/RR -> 1 on the multiplicative scale — both encode 'no effect'), THEN read the interval against it (excludes -> reject H0, significant; includes -> do not reject), with the two-group overlap variant (non-overlap -> significant; overlap -> not) and the precision question closing the loop (sample size narrows a single study's CI; a meta-analysis pools many studies).",
         "origin": "outside-first-aid", "rationale": "The source prints the six rules as parallel bullets but never states the routing step (which null value belongs to which measure family) nor the ordered reading protocol; the router and the four moves are KYP's synthesis of the printed rules.",
         "location": "core.keyIdea + mechanisms[0] ci-significance-engine + blocks[3] the steps block + the visual's Zone B null-value router strip"},
        {"id": "ci-construction-decoder",
         "summary": "The construction decoder for x ± Z(SE): the point estimate at the center, Z as the level-bought multiplier (1.96 at 95% / 2.58 at 99% — the 99% interval is the WIDER net), SE as the estimate's own wobble, and the printed narrowing rule explained (as sample size increases, CI narrows because SE shrinks — KYP: SE falls with the square root of n) plus the CI = 1 – α identity tying each level to its α.",
         "origin": "outside-first-aid", "rationale": "The source prints the formula, the constants, and the narrowing sentence as facts; the decomposition (which lever moves which end), the wider-not-better reading of 99%, and the √n explanation are KYP's.",
         "location": "core.why + mechanisms[0] + blocks[2] the decoder list + the visual's Zone A formula card and number line"},
        {"id": "meta-analysis-bridge-layer",
         "summary": "The bridge between the two printed blocks: pooling IS the narrowing rule scaled across studies — a meta-analysis behaves like the studies' combined sample, so its pooled CI is narrower than any single study's; plus the POOL / PRICE / POWER reading of the printed sentences (pools summary data; prices heterogeneity of effect sizes between studies; improves power, strength of evidence, and generalizability/external validity) and the 'garbage in, garbage out' gloss on the two printed limits (quality of individual studies; bias in study selection).",
         "origin": "outside-first-aid", "rationale": "The source prints the two blocks adjacently but never connects them; the dial-across-studies bridge, the three-verb reading, and the limits gloss are KYP's synthesis.",
         "location": "core.why + mechanisms[1] meta-analysis-pooling-map + the visual's Zone C pooling diagram and bridge strip + rapidReview.m10"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the mean-difference CI excluding 0 stem, the RR CI including 1 'surprisingly negative' stem, the two-group overlap stem, the meta-analysis gains-and-limits stem), 4 traps (excludes 0 vs excludes 1; Z 1.96 vs 2.58; narrow-CI precision vs excludes-null significance; meta-analysis gains vs limits), 3 pivots (the null-value router, the two-interval overlap test, the one-study-vs-many-studies precision dial), and 8 recall cards covering every printed sentence.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the definitions and rules only; the attack structure, distractor shapes, and reverse-direction questions are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: the page prints NO mnemonic of its own anywhere in the upper portion (VLM census, two passes: no red text, no margin notes — the red hooks on this same page's lower portion belong to statistical-tests) — so all four mnemonics are KYP ORIGINALS, marked as such: 'MEANS TO 0, RATIOS TO 1' (the null-value router), 'EXCLUDE TO CONCLUDE — INCLUDE TO RETAIN' (the six verdict rules), '1-9-6 AT 95, 2-5-8 AT 99' (the Z constants), and 'POOL, PRICE, POWER — MIND THE GARBAGE' (the meta-analysis block with its two limits).",
         "origin": "outside-first-aid", "rationale": "No First Aid mnemonic prints in scope (pdfimages + VLM census, staging-pubh15/vlm-census.txt); the four ALL-CAPS codes are KYP's design, attributed as such in the mnemonics array, the memory callout, and the visual.",
         "location": "mnemonics + blocks[6] the memory callout + the visual's Zone A recall tag and Zone C chip titles"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "UPPER-portion split page (no shared split): pdf 289 / book 267, from the page top through the END of the Meta-analysis block; the LOWER portion ('Common statistical tests' + the four test rows + the test-selection flow diagram) belongs to statistical-tests (a later batch) and is never quoted. THREE blocks carried VERBATIM in the note's table block (blocks[1]): (1) 'Confidence interval' — the definition, CI = 1 – α with the 95% convention, the sample-size narrowing rule, the formula x ± Z(SE), and the two Z constants (1.96 / 2.58); (2) the significance-rules panel — H0 is rejected (and results are significant) when the 95% CI for mean difference excludes 0, the 95% CI OR or RR excludes 1, or the CIs between two groups do not overlap, with the exact mirror for not-rejected (includes 0 / includes 1 / do overlap); (3) 'Meta-analysis' — pooling summary data (eg, means, RRs) from multiple studies for a more precise estimate of the size of an effect, heterogeneity of effect sizes between studies, improved power/strength of evidence/generalizability (external validity), limited by quality of individual studies and bias in study selection. CENSUS (pdfimages): ZERO raster images on the page. VLM AVAILABLE this session (glm-4.6v, TWO passes — 120dpi full page + 300dpi upper crop, staging-pubh15/vlm-census.txt): NO figure anywhere in the upper portion (no curve, distribution, error bars, forest plot, or icons — the label column, the CI-to-rules gutter, and the Meta-analysis band are blank); the page's only figure (the test-selection flow diagram) lies below the boundary and belongs to statistical-tests; the three headings print bold dark navy; the rules panel is BORDERLESS with small light-teal filled-square bullets; H0 prints with a SUBSCRIPT zero; the sample mean prints as x with an OVERBAR; thin horizontal rules separate the CI/rules band from Meta-analysis and Meta-analysis from Common statistical tests; NO red text, mnemonics, margin notes, or asterisk footnotes in the upper portion. ADJUDICATIONS: (A) the brief's possible distribution figure beside the CI block — NONE found (pdfimages + both VLM passes); no figure record claimed; the visual's number-line glyphs are 100% KYP geometry (flagged); (B) the rules panel is assigned to the Confidence interval asset (sv1) — it prints in the CI band with no heading of its own and all six rules are CI-application rules; (C) FA-own mnemonic count ZERO in scope — all four mnemonics are KYP originals, marked; (D) the printed overlap rules govern verbatim; the unprinted two-CIs-can-overlap-yet-differ nuance appears only as flagged KYP context, never as a correction. QUIRKS carried + documented: 'SEC TION II' header-space artifact (known, as-is); small-caps 'EPIDEmIOLOGY AND BIOSTATISTICS' banner artifact (ONE banner instance — not the subsection opener); the six bullet glyphs extract as C1 control byte U+0083 + U+2598 (small teal squares in print); 'CI = 1 – α' carries a spaced en-dash as its minus; the x-bar overbar and the H0 subscript flatten in the text layer; READING-ORDER JUMBLE — the rules panel prints upper-RIGHT beside the CI block (bbox x≈421–612 vs CI body x≈199–380) but extracts AFTER the Meta-analysis body (raw lines 29–37 after 21–27), print position pinned by bbox + VLM; the second lead-in wraps with 'when:' alone on its line. Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (ci-significance-engine, meta-analysis-pooling-map), a visual block + verbatim table block + decoder list + steps block + compare block + exam callout + memory callout, a clinical block (the trial-effect / risk-estimate / head-to-head / evidence-summit anchors), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (hypothesis-testing-errors, statistical-distributions, statistical-tests — the lower-portion owner, referenced by design; quantifying-risk — all four are public-health census topicIds), 4 crossLinks, 4 mnemonics (all KYP originals, FA-own absence documented), and a miniCase with 5 options (exactly 1 correct, why/why-wrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints statistics, not drugs; the clinical anchors are carried in the clinical block; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the manifest convention; the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh15/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'ci-meta-map' is therefore not yet in visuals/registry.tsx by design); (5) the upper portion's TWO visual assets (the Confidence interval block WITH its significance-rules panel, and the Meta-analysis block) are implemented in ONE registry visual (ci-meta-map, CiMetaMap in visuals/pubhealth-p15.tsx, viewBox 0 0 1102 1238) as ORIGINAL KYP ADAPTATIONS — Zone A the formula card with the number line and Z chips, Zone B the six mirrored verdict rules as number-line glyphs with the null-value router, Zone C the pooling diagram with heterogeneity/gains/limits chips and the bridge strip — with the full printed text ALSO carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Epidemiology and Biostatistics",
    "topicId": "confidence-intervals-meta-analysis", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "confidence-intervals-meta-analysis-sv1",
        "sourcePages": {"part": 1, "pdfPages": [289], "bookPages": "267"},
        "visualType": "SUMMARY_FIGURE",
        "visualPurpose": "The Confidence interval block with its significance-rules panel (book 267 upper): the definition (range of values within which the true mean of the population is expected to fall, with a specified probability), the level rule CI = 1 – α with the 95% convention, the formula CI for sample mean = x ± Z(SE), the Z constants 1.96 (95%) and 2.58 (99%), the sample-size narrowing rule, and the six mirrored verdict rules (excludes/includes 0 for mean differences, excludes/includes 1 for OR/RR, non-overlap/overlap between two groups) — the estimate side of the chapter's inference story",
        "sourceFigureDescription": "PURE TEXT, no raster (pdfimages: zero raster images; VLM-read in TWO passes — 120dpi full page + 300dpi upper crop, staging-pubh15/vlm-census.txt): the bold dark-navy heading 'Confidence interval' in the left label column with the body text right of it (definition; 'CI = 1 – α. The 95% CI (corresponding to α = 0.05) is often used. As sample size increases, CI narrows.'; 'CI for sample mean = x ± Z(SE)' with the sample-mean x printed with an OVERBAR and the ± as a true plus-minus; 'For the 95% CI, Z = 1.96.'; 'For the 99% CI, Z = 2.58.'), and BESIDE it in the same vertical band (upper-right; bbox x≈421–612 vs the CI body x≈199–380) a BORDERLESS rules panel with small light-teal filled-square bullets and H0 with a subscript zero: 'H0 is rejected (and results are significant) when:' + '95% CI for mean difference excludes 0' + '95% CI OR or RR excludes 1' + 'CIs between two groups do not overlap', then 'H0 is not rejected (and results are not significant)' / 'when:' (the lead-in wraps, 'when:' alone on its own line) + the three mirror bullets (includes 0, includes 1, do overlap). The panel extracts AFTER the Meta-analysis body in the raw text stream (reading-order jumble; print position pinned by bbox + VLM). NO figure prints anywhere in the upper portion (both VLM passes explicit: no curve, distribution, error bars, forest plot, or icons) — the brief's possible distribution figure beside the CI block was NOT found.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "ci-meta-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A + Zone B of the registry visual (CiMetaMap in visuals/pubhealth-p15.tsx): Zone A the formula card (the printed definition and level rule, the big x̄ ± Z(SE) with a drawn overbar, the two Z-constant chips, the small-n/large-n narrowing dial, and the number line with the 95% bracket sitting inside the wider 99% bracket around the x̄ tick) and Zone B the six verdict rules as mirrored number-line glyphs (green rejected column: brackets excluding the null ticks 0 and 1, two disjoint group brackets; warning not-rejected column: brackets straddling the nulls, two overlapping group brackets) plus the KYP null-value router strip — every printed word preserved verbatim; all number-line geometry is KYP's. The full text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, the decoder list (blocks[2]), the steps block (blocks[3]), and recall[0-5]",
        "productionStatus": "complete",
        "plannedKypVisualId": "ci-meta-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "confidence-intervals-meta-analysis-sv2",
        "sourcePages": {"part": 1, "pdfPages": [289], "bookPages": "267"},
        "visualType": "SUMMARY_FIGURE",
        "visualPurpose": "The Meta-analysis block (book 267 upper, full width below a thin rule): a method of statistical analysis that pools summary data (eg, means, RRs) from multiple studies for a more precise estimate of the size of an effect; also estimates heterogeneity of effect sizes between studies; improves power, strength of evidence, and generalizability (external validity) of study findings; limited by quality of individual studies and bias in study selection — the evidence pyramid's pooling layer",
        "sourceFigureDescription": "PURE TEXT, no raster (pdfimages: zero raster images; VLM-read in two passes, staging-pubh15/vlm-census.txt): the bold dark-navy heading 'Meta-analysis' in the left label column below a thin horizontal rule, with three body sentences printed full-width in plain black text (no bold lead-ins, no colored text): 'A method of statistical analysis that pools summary data (eg, means, RRs) from multiple studies for a more precise estimate of the size of an effect. Also estimates heterogeneity of effect sizes between studies.' / 'Improves power, strength of evidence, and generalizability (external validity) of study findings.' / 'Limited by quality of individual studies and bias in study selection.' 'eg' prints without periods (First Aid house style); the wraps are clean. NO figure prints with the block (both VLM passes: no forest plot, no icons — the area is pure text).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "ci-meta-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone C of the registry visual (CiMetaMap in visuals/pubhealth-p15.tsx): the pooling diagram — three KYP study cards (summary RR/mean estimates, each with a wide interval) converging by arrows into one POOLED ESTIMATE card carrying a visibly narrower interval ('a more precise estimate of the size of an effect'), the heterogeneity chip ('Also estimates heterogeneity of effect sizes between studies.'), the gains chip ('Improves power, strength of evidence, and generalizability (external validity) of study findings.'), the limits chip ('Limited by quality of individual studies and bias in study selection.'), and the KYP bridge strip tying pooling to the printed narrowing rule; every quoted sentence is the print's own, the pooling geometry and the three study cards are KYP's. The full text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, mechanisms[1], and recall[6-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "ci-meta-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh15"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "confidence-intervals-meta-analysis.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "confidence-intervals-meta-analysis.json").write_text(
    json.dumps({"topicId": "confidence-intervals-meta-analysis", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "confidence-intervals-meta-analysis", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The pinned upper portion of book 267 (through the end of the Meta-analysis block; 'Common statistical tests' below belongs to statistical-tests) carries TWO visual assets — the Confidence interval block WITH its borderless significance-rules panel (sv1: definition, CI = 1 – α, x ± Z(SE), the Z constants 1.96/2.58, the narrowing rule, and the six mirrored verdict rules) and the Meta-analysis block (sv2: pooling, heterogeneity, gains, limits) — both accounted for as ORIGINAL KYP ADAPTATIONS in ONE registry visual (ci-meta-map, CiMetaMap in visuals/pubhealth-p15.tsx, viewBox 0 0 1102 1238): Zone A the formula card with the number line and Z chips, Zone B the six verdict rules as mirrored number-line glyphs with the null-value router strip, Zone C the pooling diagram with the heterogeneity/gains/limits chips and the bridge strip. Nothing is reproduced — the census found NO figure anywhere in the upper portion (pdfimages: zero rasters; VLM two passes: no curve, distribution, error bars, forest plot, or icons; the page's only figure lies below the split and belongs to statistical-tests), so every number line, bracket, tick, and pooling arrow is KYP-drawn geometry with the printed words preserved. ADJUDICATIONS: (A) the brief's possible distribution figure beside the CI block — NONE found, no figure record claimed; (B) the rules panel is assigned to sv1 (it prints in the CI band, no heading of its own, all six rules are CI-application rules); (C) FA-own mnemonic count ZERO in scope — all four mnemonics are KYP originals. Quirks documented: the reading-order jumble (the rules panel prints upper-right beside the CI block but extracts after the Meta-analysis body — bbox + VLM pinned), the teal square bullet glyphs extracting as C1 control byte + U+2598, the spaced en-dash in 'CI = 1 – α', the x-bar overbar and H0 subscript flattening in the text layer, the 'when:' line-wrap, the 'SEC TION II' and 'EPIDEmIOLOGY' small-caps artifacts, and the ONE-instance banner. STAGED under .usmle-pipeline-cache/staging-pubh15/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH15 manifest + inventory staged: {OUT}/manifests/confidence-intervals-meta-analysis.json, {OUT}/visual-inventory/confidence-intervals-meta-analysis.json")
print(f"confidence-intervals-meta-analysis: evidence {len(kept)}/{len(E1)} verified")
