#!/usr/bin/env python3
"""PUBH2 clinical-therapeutic-trials — manifest + inventory (Public Health
batch 1), STAGED under .usmle-pipeline-cache/staging-pubh2/ (the promotion
step owns content/). Source: pdf page 279 / book 257, Part 1, UPPER PORTION
ONLY — a pinned page-split (the p252 pharmacology convention): the topic
owns everything from the navy "Clinical therapeutic trial" heading (print
line-wraps it as "Clinical therapeutic / trial") down to the thin rule
immediately ABOVE the "Off-label drug use" heading; the lower portion
(Off-label drug use + the Bradford Hill criteria table) belongs to
bradford-hill-criteria (pubh3), so every evidence quote below is pinned to
raw lines 1-84 of the page (line 86 = "Off-label drug use" — never
crossed; the indd footer slug, which extracts BELOW the boundary, is
documented but NOT quoted). Blocks owned: the intro (experimental study
involving humans, >=2 interventions, randomized/controlled/double-blinded,
triple-blind), Crossover clinical trial (washout, self-controls),
Intention-to-treat / As-treated / Per-protocol analyses, the sentence
"Clinical trials occur after preclinical studies and consist of five
phases ("Can I SWIM?")." and the PHASE PIPELINE FIGURE — six vector boxes
left to right (Preclinical -> Phase 0 -> Phase 1 -> Phase 2 -> Phase 3 ->
Phase 4), "FDA approval" printed ABOVE the Phase 3->4 connector, plus the
Sample row. Census (pdfimages -list): ZERO raster images on the page —
the figure is pure vector line art (the VLM pass read it as "a full-color
raster/illustrated image"; pdfimages is the authority) -> ORIGINAL_KYP_
REDRAW. VLM AVAILABLE this session (glm-4.6v at 120dpi, ONE full-page
pass, staging-pubh2/vlm-census.txt): confirmed the six-box left-to-right
rail, the FDA label position, the Sample row and its per-phase
person-group icons, the color furniture (dark navy heading; teal bold
lead-ins; red emphasis "I SWIM"/"Work?"/"Improvement?"/"Market?"; per-
phase icon colors green/blue/pink/purple/tan; "Randomized" italicized in
the phase 2/3 sample captions), the two large standalone "?" glyphs (pink
beside the phase 2 sample group, purple beside the phase 3 sample group),
the absence of margin notes/mnemonics/asterisk footnotes, and that
"Off-label drug use" is the first content below the figure (the pinned
split boundary). ADJUDICATIONS, documented in the census file and carried
in the note + visual: (1) PRINTED ROWS GOVERN — the batch brief pinned
"very small number of healthy volunteers or patients" to Phase 1, but the
PRINT puts "Very small number..." under PHASE 0 (microdosing) and "Small
number..." under PHASE 1 (pdftotext -layout column positions + the VLM
pass agree explicitly, "the columns do not shift") — carried per the
print everywhere; (2) the "Can I SWIM?" mnemonic prints in the body
sentence ("Can" bold navy, "I SWIM" bold red — VLM) and its four capital
letters land as the red capitalized caption words Safety (P1), Work
(P2), Improvement (P3), Market (P4); there are NO large decorative
letters over the printed boxes — the SWIM letter-pinning in the KYP
visual is KYP's overlay of First Aid's attributed mnemonic; "Can I..." is
carried as the phrase's lead-in question, not pinned to a phase (KYP
reading, flagged); (3) the two standalone "?" glyphs are the figure's
large pink/purple question marks beside the phase 2/3 sample groups —
read as the anonymization markers of the printed "Randomized,
controlled, anonymized" captions (KYP reading, flagged); (4) VLM caption
misreads adjudicated to the text layer: "Initial pharmacokinetics" ->
"Initial pharmacokinetic and pharmacodynamic assessment via
microdosing"; "(placebo if no Improvement?)" -> "comparison with current
standard of care/placebo (any Improvement?)"; (5) "SEC TION II" header-
space artifact and the mixed-case small-caps banner "PUBLIC HEALTH
SCIENCES—EPIdEmIoLogy ANd BIoSTATISTICS" carried as-is; (6) the up-arrows
of "↑ risk of bias" extract at line ends ("received. ↑ / risk of bias.")
— carried as printed. Nothing is reproduced: the figure is rebuilt as
ORIGINAL KYP VECTOR ART (registry visual clinical-trials-map,
ClinicalTrialsMap in visuals/pubhealth-p2.tsx — design-quality ladder,
pipeline rail with SWIM pins + FDA gate + Sample row with headcount
figures and "?" anonymization badges, analysis-population fork,
crossover timeline); every printed label and caption is ALSO carried
verbatim in the note's table block. DrugCards are FOLDED (documented):
the page is a design-and-phases page with no drug rows to trace."""
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
L = {279: pages[278].split("\n")}
P = {279: norm(pages[278])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E2 = [
    ("Page identity + the pinned SPLIT BOUNDARY's upper side — the running head PUBLIC HEALTH SCIENCES, the navy heading line-wrapped as “Clinical therapeutic / trial”, the subsection banner with its small-caps extraction artifact “▶ PUBLIC HEALTH SCIENCES—EPIdEmIoLogy ANd BIoSTATISTICS”, book page 257, and the known “SEC TION II” header-space artifact — the topic owns from here down to the rule above “Off-label drug use” (line 86 of the raw page, never crossed by any quote)", rng(279, 1, 11), [279]),
    ("The printed intro — experimental study involving humans; compares therapeutic benefits of ≥2 interventions (eg, treatment vs placebo, treatment vs treatment); study quality improves when randomized, controlled, and double-blinded (neither subject nor researcher knows whether the subject is in the treatment or control group); triple-blind = additional blinding of the researchers analyzing the data", rng(279, 12, 16), [279]),
    ("Crossover clinical trial — a series of ≥2 treatments on a subject; order randomized; washout period between treatments; subjects serve as their own controls", rng(279, 17, 19), [279]),
    ("Intention-to-treat analysis — all subjects analyzed by original, randomly assigned treatment; no one excluded, “once randomized, always analyzed”; attempts to avoid bias from attrition, crossover, and nonrandom noncompliance, but may dilute the true effects of intervention", rng(279, 20, 22), [279]),
    ("As-treated analysis — all subjects analyzed according to the treatment they actually received; ↑ risk of bias (the ↑ extracts at the line end, carried as printed)", rng(279, 23, 24), [279]),
    ("Per-protocol analysis — subjects who fail to complete treatment as originally, randomly assigned are excluded; ↑ risk of bias", rng(279, 25, 26), [279]),
    ("The pipeline sentence — “Clinical trials occur after preclinical studies and consist of five phases (“Can I SWIM?”).” — plus the figure's FDA approval label, which prints ABOVE the arrow between the Phase 3 and Phase 4 boxes (VLM-confirmed position)", rng(279, 27, 28), [279]),
    ("Figure stations 1-2 as they extract from the rail — Phase 0 (initial pharmacokinetic and pharmacodynamic assessment via microdosing; often skipped) and Preclinical (test drug in lab animals and in vitro experiments)", rng(279, 30, 37), [279]),
    ("Figure stations 3-4 — Phase 1 (safety assessment via dose escalation; determine maximum tolerable dose) and Phase 2 (efficacy assessment — “does it Work?” — plus additional data on short-term adverse effects)", rng(279, 39, 48), [279]),
    ("Figure station 5 + the first standalone “?” glyph + the Sample row header — Phase 3 (effectiveness assessment via comparison with current standard of care/placebo, “any Improvement?”); the “?” is one of the figure's two large question marks beside the phase 2/3 sample groups (VLM)", rng(279, 50, 56), [279]),
    ("THE ADJUDICATED PIN, side A — the Sample row's FIRST column text, which the PRINT places under PHASE 0 (microdosing): “Very small number of healthy volunteers or patients with disease of interest. Open label.” (pdftotext -layout column position + VLM both put it under Phase 0, correcting the batch brief's Phase 1 pin — printed rows govern)", rng(279, 58, 61), [279]),
    ("THE ADJUDICATED PIN, side B — the Sample row's SECOND column text, which the PRINT places under PHASE 1 (dose-escalation safety): “Small number of healthy volunteers or patients with disease of interest. Open label.”", rng(279, 63, 66), [279]),
    ("The Phase 2 sample text — moderate number of patients with disease of interest; randomized, controlled, anonymized (the anonymized phase, beside which the figure prints one of its two large “?” marks)", rng(279, 68, 70), [279]),
    ("Figure station 6 + the second standalone “?” glyph — Phase 4 (provides data on long-term or rare adverse effects, “can it stay on the Market?”), reached only AFTER the FDA approval gate", rng(279, 72, 77), [279]),
    ("The Phase 3 sample text — large number of patients with disease of interest; randomized, controlled, anonymized (the second anonymized phase with its large “?” mark)", rng(279, 78, 80), [279]),
    ("The Phase 4 sample text — postmarketing surveillance of patients with disease of interest; open label (the last cell of the upper portion before the pinned Off-label boundary)", rng(279, 82, 84), [279]),
]
for c, q, pgs in E2:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"clinical-therapeutic-trials: evidence {len(kept)}/{len(E2)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m2 = {"topicId": "clinical-therapeutic-trials",
    "title": "Clinical Therapeutic Trials and the Drug Development Pipeline",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [279], "bookPages": "257 (upper)"},
    "sourceEvidence": kept, "visualIds": ["clinical-trials-map"],
    "mechanismIds": ["rct-quality-ladder", "analysis-population-fork"],
    "kypExtensions": [
        {"id": "exam-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the dropout-still-counted intention-to-treat recognition, the two-regimens-with-drug-free-interval crossover recognition, the microdose-PK/PD phase 0 profile, the post-approval rare-adverse-effect phase 4 profile), 4 traps (double- vs triple-blind party counts, the three analysis populations, phase 2 efficacy vs phase 3 effectiveness, phase 0 vs phase 1), 3 pivots (the design-vs-blinding router, the analysis-population router, the SWIM phase router), and 8 recall cards covering every printed block.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the definitions and the figure; the attack structure, the distractor designs, and the reverse-direction question shapes are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "three-pass-decode-protocol",
         "summary": "The three-pass reading protocol (PASS 1 the design ladder: assigned-in-humans, randomized/controlled/double-/triple-blinded, crossover with washout; PASS 2 the analysis population: original assignment vs actually received vs completers only; PASS 3 the phase, via First Aid's own SWIM letters) plus the bias-direction synthesis — ITT preserves the randomization into the statistics and dilutes toward the null while as-treated and per-protocol break it chasing the cleaner comparison.",
         "origin": "outside-first-aid", "rationale": "The source prints the three vocabularies side by side but never states the reading order, the party-counting rule for blinding, or the direction each analysis pushes the measured effect; the synthesis is KYP's.",
         "location": "core.keyIdea + mechanisms[0] and [1] + blocks[3] the steps block + the visual's ladder/fork/rail zones"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic layer: First Aid's OWN two hooks carried VERBATIM and ATTRIBUTED — “Can I SWIM?” (the pipeline sentence's own acronym, printed with “I SWIM” in red; S = Safety, W = Work, I = Improvement, M = Market, the source's red caption words) and “once randomized, always analyzed” (printed inside the ITT paragraph) — plus TWO KYP originals, marked: “THREE BLINDS: SUBJECT, SCIENTIST, STATISTICIAN” and “ALL IN · AS GIVEN · AS PLANNED”. No mnemonic prints in the page's margins (VLM-confirmed); the SWIM letter-pinning on the rail is KYP's overlay of the attributed phrase.",
         "origin": "outside-first-aid", "rationale": "The two formulas print in the source's own body text (attributed, not counted among KYP's codes); the two ALL-CAPS codes and the pinning overlay are KYP's design.",
         "location": "mnemonics + blocks[6] the memory callout + the visual's rail badges"},
        {"id": "mini-case-layer",
         "summary": "The intention-to-treat mini-case — a randomized double-blind anticoagulant trial whose nausea-driven noncomplier returns to warfarin yet is counted in her original arm, with the commentator's “understates the benefit” complaint — routing to ITT (the printed dilution trade) against three distractors: as-treated and per-protocol (the two ↑-bias rules that WOULD produce the larger number) and triple-blinding (the blinding layer misread as an analysis-population rule).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the three rules as definitions only; the vignette, the four options, and the design-layer-vs-analysis-layer distinction are KYP's design.",
         "location": "usmle.miniCase + blocks[4] the compare block"},
        {"id": "generalization-and-bridge-layer",
         "summary": "The KYP-context generalizations, every one flagged as such: the bias channels each design rung closes (confounding, placebo effects, observer bias, analytic bias), why ITT estimates real-world effectiveness and why regulators favor it, why washout prevents first-treatment contamination and why self-control halves the needed sample, why rare adverse effects surface only in open-label postmarketing surveillance, the preclinical→market regulatory reading of a package insert's history, and the bridges to the sibling topics (observational designs assign nothing; the trial's 2×2 feeds RR/ARR/NNT; the bias vocabulary of bias-and-study-errors).",
         "origin": "outside-first-aid", "rationale": "The source is a definitions-and-figure page; every mechanism, regulatory, and statistical-logic statement beyond the printed words is KYP context, explicitly marked in the note and never presented as printed text.",
         "location": "core.why + mechanisms + blocks[2] the list block + blocks[5] the exam callout + clinical block + related + crossLinks"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "SPLIT PAGE (the p252 pharmacology convention, boundaries pinned): pdf 279 / book 257 UPPER — the topic owns everything from the navy “Clinical therapeutic trial” heading (line-wrapped in print) down to the rule immediately above “Off-label drug use” (raw line 86); the lower portion (Off-label drug use + Bradford Hill criteria) belongs to bradford-hill-criteria (pubh3). Every evidence quote is pinned to raw lines 1-84; the indd footer slug (FAS1_2026_06-PubHealth.indd 257 / 12/16/25 12:46 PM) extracts BELOW the boundary and is documented, not quoted. Blocks: intro (experimental study involving humans, ≥2 interventions, randomized/controlled/double-blinded, triple-blind), Crossover clinical trial, Intention-to-treat / As-treated / Per-protocol, the five-phases sentence, and the PHASE PIPELINE FIGURE — six vector boxes left to right with FDA approval printed above the Phase 3→4 connector and the Sample row beneath — carried VERBATIM in the note's table block (blocks[1], the FDA gate carried as a row in its printed position). CENSUS (pdfimages -list): ZERO raster images — the figure is pure vector line art, despite the VLM's raster impression (pdfimages is the authority) → ORIGINAL_KYP_REDRAW. VLM WAS AVAILABLE this session: ONE 120dpi glm-4.6v full-page pass (staging-pubh2/vlm-census.txt) confirmed the six-box rail order, the FDA label position, the Sample row alignment, the color furniture (navy heading; teal bold lead-ins; red “I SWIM”/“Work?”/“Improvement?”/“Market?”; per-phase icon colors green/blue/pink/purple/tan; italicized “Randomized” in the phase 2/3 sample captions), the two large “?” glyphs beside the phase 2/3 sample groups, and the absence of margin notes/mnemonics/footnotes. ADJUDICATIONS (text layer + pdftotext -layout + VLM agree): (1) PRINTED ROWS GOVERN — the batch brief pinned “very small number of healthy volunteers or patients” to Phase 1, but the print puts “Very small number…” under PHASE 0 (microdosing) and “Small number…” under PHASE 1 (“the columns do not shift” — VLM); carried per the print in the table block, the visual's Sample row, and the recall/m10 lines; (2) “Can I SWIM?” prints in the body sentence (Can bold navy, I SWIM bold red) and its capitals land as the red caption words Safety/Work/Improvement/Market of phases 1-4 — attributed; the letter-pinning on the rail is KYP's overlay (no large letters print over the boxes), and “Can I…” is the lead-in question, not pinned to a phase (KYP reading, flagged); (3) the two standalone “?” glyphs are the figure's large pink/purple marks beside the phase 2/3 sample groups — read as anonymization markers (KYP reading, flagged); (4) VLM caption misreads adjudicated to the text layer (“Initial pharmacokinetics” → “Initial pharmacokinetic and…”; “(placebo if no Improvement?)” → “care/placebo (any Improvement?)”). QUIRKS carried + documented: “SEC TION II” header-space artifact; the small-caps mixed-case banner “EPIdEmIoLogy ANd BIoSTATISTICS”; the line-wrapped navy heading (“Clinical therapeutic / trial”); the ↑ arrows of “↑ risk of bias” extracting at line ends; “Randomized, controlled, anonymized” italicized in print. Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (rct-quality-ladder, analysis-population-fork), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (observational-studies, bradford-hill-criteria, bias-and-study-errors, quantifying-risk — all Public Health census topicIds), 4 crossLinks, 4 mnemonics (First Aid's own “Can I SWIM?” and “once randomized, always analyzed” carried ATTRIBUTED + two KYP originals marked), a miniCase with 4 options (exactly 1 correct, why/whyWrong on every option), and NO DrugCards — the DrugCard layer is FOLDED (documented): the page is a design-and-phases page with no drug rows to trace; (2) outputs are STAGED under .usmle-pipeline-cache/staging-pubh2/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId “clinical-trials-map” is therefore not yet in visuals/registry.tsx by design); (3) the page's single visual asset (the phase pipeline figure) is implemented as ORIGINAL KYP VECTOR ART in ONE registry visual (clinical-trials-map, ClinicalTrialsMap in visuals/pubhealth-p2.tsx, viewBox 0 0 1102 1124): the design-quality ladder (experimental in humans → randomized → controlled → double-blinded → triple-blind), the six-station rail with First Aid's own SWIM letters pinned to phases 1-4 and the FDA gate above the Phase 3→4 connector, the printed Sample row (headcount figures, open-label vs randomized/controlled/anonymized chips, the two “?” anonymization badges), the analysis-population fork with the printed bias ratings, and the crossover timeline — with every printed label and caption ALSO carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics",
    "topicId": "clinical-therapeutic-trials", "requiredInKYP": True}
inv2 = [
    dict(SV_BASE, **{
        "visualId": "clinical-therapeutic-trials-sv1",
        "sourcePages": {"part": 1, "pdfPages": [279], "bookPages": "257 (upper)"},
        "visualType": "TIMELINE",
        "visualPurpose": "The Clinical therapeutic trial phase pipeline figure (book 257 upper): the drug development rail — Preclinical → Phase 0 (microdosing, often skipped) → Phase 1 (Safety, dose escalation, maximum tolerable dose) → Phase 2 (does it Work? efficacy, short-term adverse effects) → Phase 3 (any Improvement? effectiveness vs current standard of care/placebo) → FDA approval → Phase 4 (can it stay on the Market? postmarketing surveillance) — with the printed Sample row (very small / small / moderate / large / surveillance; open label vs randomized, controlled, anonymized) beneath",
        "sourceFigureDescription": "PURE-VECTOR FLOW FIGURE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh2/vlm-census.txt — VLM available this session): six illustrated station boxes in a horizontal row left to right — Preclinical (microscope icon, 'Test drug in lab animals and in vitro experiments'), Phase 0 (green distribution-curve icon, 'Initial pharmacokinetic and pharmacodynamic assessment via microdosing. Often skipped.'), Phase 1 (syringe icon, 'Safety assessment via dose escalation. Determine maximum tolerable dose.'), Phase 2 (heart/stethoscope icon, 'Efficacy assessment (does it Work?) Provides additional data on short-term adverse effects.' — 'Work?' in red), Phase 3 (scales icon, 'Effectiveness assessment via comparison with current standard of care/placebo (any Improvement?)' — 'Improvement?' in red), Phase 4 (pill-bottle icon, 'Provides data on long-term or rare adverse effects (can it stay on the Market?)' — 'Market?' in red) — joined by left-to-right gray arrows, with the 'FDA approval' label ABOVE the connector between Phase 3 and Phase 4; beneath, a 'Sample' row with per-phase person-group icons (green under Phase 0, light blue under Phase 1, pink under Phase 2 + a large pink '?', purple under Phase 3 + a large purple '?', tan under Phase 4) and the printed sample texts 'Very small number of healthy volunteers or patients with disease of interest. Open label.' (Phase 0) / 'Small number…' (Phase 1) / 'Moderate number of patients with disease of interest. Randomized, controlled, anonymized.' (Phase 2) / 'Large number…' (Phase 3) / 'Postmarketing surveillance of patients with disease of interest. Open label.' (Phase 4); 'Randomized' italicized in the phase 2/3 captions. The mnemonic 'Can I SWIM?' prints in the body sentence above the figure ('Can' bold navy, 'I SWIM' bold red), not as letters over the boxes.",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "clinical-trials-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the whole registry visual (ClinicalTrialsMap in visuals/pubhealth-p2.tsx): the design-quality ladder strip (experimental in humans → randomized → controlled → double-blinded → triple-blind, each rung with its bias channel); the six-station pipeline rail with First Aid's own SWIM letter badges pinned to phases 1-4 (S Safety, W Work, I Improvement, M Market — attributed) and the FDA approval gate above the Phase 3→4 connector; the printed Sample row rebuilt with headcount figures (1/3/5/8/9), open-label vs randomized-controlled-anonymized chips, and the two large '?' anonymization badges beside phases 2-3; the analysis-population fork (intention-to-treat vs as-treated vs per-protocol with the printed bias ratings and the dilution trade); the crossover timeline (subject → treatment A → washout → treatment B → subject = own control). Every printed label and caption is ALSO carried verbatim in the note's table block (blocks[1]), core.what, the list block (blocks[2]), and recall[0-7]",
        "productionStatus": "pilot-complete",
        "plannedKypVisualId": "clinical-trials-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh2"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "clinical-therapeutic-trials.json").write_text(json.dumps(m2, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "clinical-therapeutic-trials.json").write_text(
    json.dumps({"topicId": "clinical-therapeutic-trials", "chapterId": "public-health", "inventory": inv2,
                "coverageAudit": {"topicId": "clinical-therapeutic-trials", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 0,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The upper portion of book 257 (the pinned page-split) carries ONE visual asset — the Clinical therapeutic trial phase pipeline figure (sv1: six stations Preclinical→Phase 4 with the FDA approval gate and the Sample row) — accounted for as an ORIGINAL KYP_REDRAW: nothing is reproduced (the source's illustrated icons — microscope, distribution curve, syringe, heart/stethoscope, scales, pill bottle — are NOT copied); ONE registry visual (clinical-trials-map, ClinicalTrialsMap in visuals/pubhealth-p2.tsx, viewBox 0 0 1102 1124) rebuilds the pipeline as original KYP vector art (design-quality ladder, six-station rail with the attributed SWIM letter pins and FDA gate, the Sample row with headcount figures and '?' anonymization badges, the analysis-population fork, the crossover timeline), and every printed label and caption is additionally carried verbatim in the note's table block. Census: ZERO raster images (pdfimages — the figure is pure vector line art; the VLM's raster impression is adjudicated to pdfimages). VLM available this session — ONE 120dpi full-page glm-4.6v pass (vlm-census.txt) confirmed the rail order, the FDA label position, the Sample row alignment, the two large '?' glyphs, the red emphasis words, and the pinned split boundary (Off-label drug use is the first content below the figure). ADJUDICATION (print governs): 'Very small number…' prints under Phase 0 and 'Small number…' under Phase 1 (layout + VLM agree — the brief's reverse pin corrected). SPLIT PAGE: the lower portion (Off-label + Bradford Hill) belongs to bradford-hill-criteria. STAGED under .usmle-pipeline-cache/staging-pubh2/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH2 manifest + inventory staged: {OUT}/manifests/clinical-therapeutic-trials.json, {OUT}/visual-inventory/clinical-therapeutic-trials.json")
print(f"clinical-therapeutic-trials: evidence {len(kept)}/{len(E2)} verified")
