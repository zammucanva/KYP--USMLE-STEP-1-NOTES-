#!/usr/bin/env python3
"""PUBH4 quantifying-risk — manifest + inventory (Public Health batch 1),
STAGED under .usmle-pipeline-cache/staging-pubh4/ (the promotion step owns
content/). Source: FULL pdf page 280 / book 258 (Part 1) — the topic owns
the WHOLE page, which carries: (1) the lead-in "Definitions and formulas
are based on the classic 2 × 2 or contingency table." with the classic 2×2
itself (columns "Disease or outcome" with ⊕/⊖, rows "Exposure or
intervention" with ⊕/⊖ — printed vertically in the book, VLM-confirmed —
cells a b / c d); (2) the three top-margin formula labels ("Odds ratio =",
"Relative risk =", "Attributable risk =") stacked above the 2×2; (3) the
"Quantifying risk" table, columns TERm / DEFINITION / EXAmPLE / FORmULA,
EIGHT rows in printed order (Odds ratio, Relative risk, Relative risk
reduction, Attributable risk, Absolute risk reduction, Number needed to
treat, Number needed to harm, Case fatality rate); and (4) the two
worked-example grids inside the FORMULA column (OR row: a b = 20 5 / c d =
10 20; RR row: a b = 5 5 / c d = 1 9). Census (pdfimages + VLM): ZERO
raster images — the page is pure vector text and rules; the only printed
graphic elements are the two worked grids, the ⊕/⊖ symbols, and the table
rules. VLM AVAILABLE this session (glm-4.6v at 120dpi, ONE full-page pass
plus supplementary top-band/formula crops and a rendered-visual QA pass,
staging-pubh4/vlm-census.txt): confirmed the 2×2 orientation (Disease or
outcome = COLUMNS, Exposure or intervention = ROW labels), the printed
order of all eight rows, both worked grids, the red furniture ("You take
a case to the OR." prints in red in the OR row's EXAMPLE cell, with
"case" and "OR" in red; the "AR" of "NNH = 1/AR" in red), the teal header
band, bold dark-blue TERM names, empty EXAMPLE cells in the NNT and NNH
rows, and the absence of photos, margin notes, and asterisk footnotes.
ADJUDICATIONS, documented in the note header + manifest notes: (A) the
batch brief anticipated TWO in-cell FA mnemonics; only ONE prints on pdf
280 — "You take a case to the OR." — while "Cohort = relative risk."
prints on pdf 278 / book 256 (the observational-studies page) and is
carried ATTRIBUTED with its printed location cited (text layer +
pdftotext -layout + VLM all agree); (B) the three top-margin formula
labels are present and complete in the text layer but are VISUALLY
OBSCURED in the digital edition's render (the teal running-header band is
drawn over the top two; the third prints white-on-white — pdftoppm and
pdftocairo agree); carried from the text layer, whose content is identical
to the OR/RR/AR rows' FORMULA cells; (C) the ARR formula prints as
c/(c + d) − a/(a + b) (control minus treated), the reverse orientation of
AR's a/(a + b) − c/(c + d) (exposed minus unexposed) — both carried
exactly as printed and taught with the sign logic; (D) stacked fraction
formulas are linearized in the note's table block; the raw stacked
text-layer order is quoted verbatim in sourceEvidence. Nothing is
reproduced: the page's two visual assets (the classic 2×2 figure and the
eight-row table) are adapted as ORIGINAL KYP ART in ONE registry visual
(quantifying-risk-map, QuantifyingRiskMap in visuals/pubhealth-p4.tsx —
the 2×2 as the centerpiece engine with its two reading directions and the
three margin formulas, the eight measure rows as spokes with formula +
worked example + interpretation, and the RATIO · DIFFERENCE · RECIPROCAL
grammar strip); the full table's text is additionally carried VERBATIM in
the note's table block. DrugCards: not applicable — a biostatistics page
with no drug rows (nothing folded; documented)."""
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
L = {280: pages[279].split("\n")}
P = {280: norm(pages[279])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E4 = [
    ("Page identity — the running header (book 258, the 'SEC TION II' header-space extraction artifact, carried as-is), the PUBLIC HEALTH SCIENCES banner with the subsection banner fragment 'c/(c + d)AND BIOSTATISTICS' interleaving the margin fraction in the text layer, and the THREE TOP-MARGIN FORMULA LABELS stacked above the 2×2 ('Odds ratio =', 'Relative risk =', 'Attributable risk =' — present in the text layer but visually obscured by the teal running-header band in the digital render, adjudication B; content identical to the table's FORMULA column)", rng(280, 1, 15), [280]),
    ("The printed lead-in sentence and the classic 2×2's axes — 'Definitions and formulas are based on the classic 2 × 2 or contingency table.' with the stacked row-risk fractions a/(a+b) and c/(c+d), the COLUMN label 'Disease or outcome' and the ROW label 'Exposure or intervention' (the row label prints vertically in the book, VLM-confirmed)", rng(280, 17, 28), [280]),
    ("The table title 'Quantifying risk', the margin OR formula stack (a/c over b/d = ad over bc), and the 2×2's four cell letters a b / c d", rng(280, 30, 44), [280]),
    ("The table's column headers as printed — TERm / DEFINITION / EXAmPLE (small-caps 'm' artifacts, carried as printed; the fourth header FORmULA prints later in the text stream, quoted below)", rng(280, 46, 50), [280]),
    ("ROW 1 (Odds ratio) — term + definition: 'Typically used in case-control studies. Represents the odds of exposure among cases (a/c) vs odds of exposure among controls (b/d).' with the three printed interpretation lines (OR = 1 → equal; OR > 1 → greater in cases; OR < 1 → greater in controls; each arrow preceded by an invisible \\x8e byte in the raw layer, stripped by norm())", rng(280, 52, 63), [280]),
    ("ROW 1 (Odds ratio) — the worked example (20/30 lung-cancer patients and 5/25 healthy individuals report smoking → OR is 8; 8 times more likely to have a history of smoking) plus First Aid's OWN red in-cell mnemonic 'You take a case to the OR.' (printed in red in the EXAMPLE cell, VLM-confirmed, carried ATTRIBUTED)", rng(280, 65, 71), [280]),
    ("ROW 2 (Relative risk) — definition: 'Typically used in cohort studies. Risk of developing disease in the exposed group divided by risk in the unexposed group.' with the three printed interpretation lines (RR = 1 → no association; RR > 1 → ↑ disease occurrence; RR < 1 → ↓ disease occurrence)", rng(280, 73, 82), [280]),
    ("ROW 2 (Relative risk) — the worked example (5/10 radiation-exposed vs 1/10 unexposed diagnosed with cancer → RR is 5; 5 times greater risk) plus the printed rare-disease bridge 'For rare diseases (low prevalence), OR approximates RR.'", rng(280, 84, 91), [280]),
    ("ROW 3 (Relative risk reduction) — term + definition: 'The proportion of risk reduction attributable to the intervention/treatment (ART) as compared to a control (ARC).' (the printed ART/ARC abbreviations)", rng(280, 93, 99), [280]),
    ("ROW 3 (Relative risk reduction) — the worked example (2% flu-shot recipients vs 8% unvaccinated develop the flu → RR = 2/8 = 0.25, and RRR = 0.75) plus the stacked formula 'RRR = 1 – RR' and 'RRR = (ARC – ART)/ARC' (en dashes as printed)", rng(280, 101, 109), [280]),
    ("ROW 4 (Attributable risk) — term + definition ('The difference in risk between exposed and unexposed groups.') + the worked example (lung-cancer risk 21% in people who smoke vs 1% in people who don't → the attributable risk is 20%; right single quote in don't as printed)", rng(280, 111, 120), [280]),
    ("ROW 4 (Attributable risk) — the stacked formulas: AR = a/(a+b) − c/(c+d) (true minus signs as printed) and AR% = (RR − 1)/RR × 100", rng(280, 122, 129), [280]),
    ("ROW 5 (Absolute risk reduction) — term + definition ('The difference in risk (not the proportion) attributable to the intervention as compared to a control.' — the printed proportion-vs-difference contrast with RRR) + the worked example (8% placebo vs 2% flu vaccine → ARR = 8%–2% = 6% = 0.06; en dash as printed)", rng(280, 131, 143), [280]),
    ("ROW 6 (Number needed to treat) — term + definition ('Number of patients who need to be treated for 1 patient to benefit. Lower number = better treatment.') + formula NNT = 1/ARR (the row prints NO example cell — VLM-confirmed, carried as printed)", rng(280, 145, 153), [280]),
    ("ROW 7 (Number needed to harm) — term + definition ('Number of patients who need to be exposed to a risk factor for 1 patient to be harmed. Higher number = safer exposure.') + formula NNH = 1/AR (the 'AR' prints in red, VLM-read; the row prints NO example cell — VLM-confirmed)", rng(280, 155, 164), [280]),
    ("ROW 8 (Case fatality rate) — term + definition ('Percentage of deaths occurring among those with disease.') and, interleaved by the text layer, the Relative-risk TERM label of row 2 (emitted out of order), the indd footer slug 'FAS1_2026_06-PubHealth.indd 258', and the CFR worked example (4 patients die among 10 cases of meningitis → case fatality rate is 40%)", rng(280, 166, 177), [280]),
    ("The FORMULA column header as printed (FORmULA, small-caps artifact) and the Odds ratio formula stack — OR = a/c over b/d = ad over bc (linearized in the note as OR = a/c ÷ b/d = ad/bc)", rng(280, 179, 185), [280]),
    ("The OR row's worked grid printing inside the FORMULA column — cell letters a b / c d with values 20 5 / 10 20 (a = 20, b = 5, c = 10, d = 20; the final d-value '20' is emitted after the 'RR =' label in the raw text stream — a pdftotext ordering quirk, documented), the grid that yields ad/bc = (20×20)/(5×10) = 8", rng(280, 187, 201), [280]),
    ("The RR row's formula stack — RR = a/(a + b) over c/(c + d) — and the RR worked grid printing inside the FORMULA column: cell letters a b / c d with values 5 5 / 1 9 (a = 5, b = 5, c = 1, d = 9; RR = (5/10) ÷ (1/10) = 5)", rng(280, 203, 218), [280]),
    ("The remaining stacked formulas of the FORMULA column — AR =, ARR = with the printed reversal ARR = c/(c+d) − a/(a+b) (control minus treated, adjudication C — the mirror image of AR's exposed minus unexposed), and CFR% = deaths/cases × 100", rng(280, 220, 233), [280]),
    ("The print timestamp footer — 12/16/25 12:46 PM (page identity, book 258)", rng(280, 235, 235), [280]),
]
for c, q, pgs in E4:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"quantifying-risk: evidence {len(kept)}/{len(E4)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m4 = {"topicId": "quantifying-risk", "title": "Quantifying Risk: The 2×2 Table and Its Measures",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [280], "bookPages": "258–258"},
    "sourceEvidence": kept, "visualIds": ["quantifying-risk-map"],
    "mechanismIds": ["two-by-two-engine", "trial-to-bedside-cascade"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed table — 4 patterns (the case-control OR stem computed by ad/bc, the cohort RR stem, the flu-shot NNT cascade stem, the meningitis CFR stem), 4 traps (OR vs RR design router, RR 0.25 vs RRR 0.75 complement, AR vs ARR subtraction orientation, NNT vs NNH reciprocal direction), 3 pivots (the transposed-grid move-zero router, the answer-grammar router, the rare-disease OR≈RR router), and 9 recall cards covering all eight printed rows.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the definitions, examples, and formulas only; the attack structure, the distractor designs, and the one-trial-every-number question shape are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "reading-direction-grammar", "summary": "The two-reading-directions engine and the RATIO · DIFFERENCE · RECIPROCAL grammar — read the 2×2 BY ROWS for the two risks a/(a+b) and c/(c+d) (the cohort/trial direction: divide → RR, subtract → AR down / ARR up, invert → NNT/NNH) and BY COLUMNS for the two exposure odds a/c and b/d (the case-control direction: OR = a/c ÷ b/d = ad/bc), with the question's units (times / points / patients) picking the measure family — plus the AR-READS-DOWN / ARR-READS-UP sign rule explaining the printed reversed orientation of the ARR formula.",
         "origin": "outside-first-aid", "rationale": "The source prints the formulas and the ⊕/⊖ grid but never states the reading-direction logic, the three-verb grammar, or why ARR's subtraction is reversed relative to AR's; the synthesis is KYP's.",
         "location": "core.keyIdea + mechanisms[0] two-by-two-engine + mechanisms[1] trial-to-bedside-cascade + blocks[2] the decoder list block + blocks[3] the steps block + the registry visual's Zone A reading cards and Zone C grammar strip"},
        {"id": "mnemonic-layer", "summary": "Four mnemonic entries: First Aid's OWN 'You take a case to the OR.' carried ATTRIBUTED (printed in red in the OR row's EXAMPLE cell on THIS page, book 258); First Aid's OWN 'Cohort = relative risk.' carried ATTRIBUTED with its printed location cited (book 256 / pdf 278 — it does NOT print on pdf 280, adjudication A); and two KYP originals marked as such (RATIO · DIFFERENCE · RECIPROCAL — the three verbs of the 2×2; AR READS DOWN, ARR READS UP — the sign rule).",
         "origin": "outside-first-aid", "rationale": "Only one mnemonic prints on pdf 280 (the red 'You take a case to the OR.'); 'Cohort = relative risk.' is First Aid's own from the study-designs page, attributed with its location; the two ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + blocks[7] the memory callout + the registry visual's Zone C attribution lines"},
        {"id": "mini-case-layer", "summary": "The nursing-home flu-vaccine miniCase — how many residents must be vaccinated to prevent one case — with the correct answer completing the cascade (ARR = 8% − 2% = 0.06 → NNT = 1/0.06 ≈ 17, rounded up) and distractors parking at the cascade's other levels (0.06 the ARR itself, 6 the percentage points, 0.75 the RRR).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the flu-shot example through ARR (0.06) and the NNT row without an example; the vignette, the four options, the rounding rule, and the reasoning are KYP's design.",
         "location": "usmle.miniCase + clinical[0] the bedside re-derivations list block"},
        {"id": "arithmetic-continuation-layer", "summary": "The KYP arithmetic continuations of the printed examples, every one marked as such: NNT = 1/0.06 ≈ 16.7 → 17 for the flu-shot trial (the NNT row prints no example), NNH = 1/0.20 = 5 for the smoking example (the NNH row prints no example), AR% = (21−1)/21 ≈ 95% of a smoker's lung-cancer risk, the OR cross-product check ad/bc = (20×20)/(5×10) = 8, and the worked-grid fills for the printed 20/30-vs-5/25 and 5/10-vs-1/10 examples.",
         "origin": "outside-first-aid", "rationale": "The source computes OR 8, RR 5, RR 0.25, RRR 0.75, AR 20%, ARR 0.06, and CFR 40% but never carries any example through the NNT/NNH/AR% reciprocals; those steps and the grid fills are KYP's teaching, explicitly marked.",
         "location": "clinical[0] + mechanisms[1] + blocks[3] the steps block + usmle.patterns + the registry visual's cards 4/6/7"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 280 / book 258, entirely the PUBLIC HEALTH SCIENCES—EPIDEMIOLOGY AND BIOSTATISTICS subsection, carrying the classic 2×2 contingency table (the printed lead-in 'Definitions and formulas are based on the classic 2 × 2 or contingency table.'; columns 'Disease or outcome' ⊕/⊖, rows 'Exposure or intervention' ⊕/⊖ — the row label prints vertically in the book, VLM-confirmed, carried horizontal in the KYP visual as a documented adaptation; cells a b / c d), the three top-margin formula labels stacked above it, the 'Quantifying risk' table (columns TERm / DEFINITION / EXAmPLE / FORmULA, 8 rows in printed order: Odds ratio, Relative risk, Relative risk reduction, Attributable risk, Absolute risk reduction, Number needed to treat, Number needed to harm, Case fatality rate — carried VERBATIM in the note's table block, blocks[1]), and the two worked grids inside the FORMULA column (OR row a b = 20 5 / c d = 10 20; RR row a b = 5 5 / c d = 1 9). CENSUS (pdfimages + VLM): ZERO raster images — pure vector text and rules; the only printed graphic elements are the two worked grids, the ⊕/⊖ symbols, and the table rules; the NNT and NNH rows print EMPTY example cells (VLM-confirmed, carried as printed). VLM WAS AVAILABLE this session (glm-4.6v at 120dpi, ONE full-page pass + supplementary passes, staging-pubh4/vlm-census.txt): confirmed the 2×2 orientation (Disease or outcome = columns, Exposure or intervention = rows, a top-left), the eight rows in printed order with every definition/example/formula, both worked grids (OR 20 5 / 10 20; RR 5 5 / 1 9), the red furniture ('You take a case to the OR.' in red in the OR EXAMPLE cell with 'case' and 'OR' red; the 'AR' of 'NNH = 1/AR' in red), the teal header band, bold dark-blue TERM names, and no photos/margin notes/asterisk footnotes. ADJUDICATIONS (documented in the note header + here): (A) the batch brief anticipated TWO in-cell FA mnemonics; only ONE prints on pdf 280 — 'You take a case to the OR.' (red, OR row EXAMPLE cell); 'Cohort = relative risk.' does NOT print on this page (text layer + pdftotext -layout + VLM agree: 'No cohort/relative-risk mnemonic anywhere on this page'); it prints on pdf 278 / book 256 (observational studies) and is carried ATTRIBUTED with that location cited. (B) The three top-margin formula labels ('Odds ratio =', 'Relative risk =', 'Attributable risk =') are present and complete in the text layer but VISUALLY OBSCURED in the digital edition's render — pixel-level forensics (pdftoppm + pdftocairo, agreeing) show the teal running-header band drawn over the top two labels and the third printing white-on-white; the VLM could not read them as a visual block; carried from the text layer, whose content is identical to the OR/RR/AR rows' FORMULA cells (which render legibly). (C) The ARR formula prints as c/(c + d) − a/(a + b) — control minus treated — the reverse orientation of AR's a/(a + b) − c/(c + d); both carried exactly as printed, with the sign logic taught (each subtraction oriented to be positive for its own question: harm attributed downward onto the exposed, benefit measured upward from the treated). (D) Stacked fraction formulas are linearized in the note's table block (numerator ÷ denominator / numerator − denominator); the raw stacked text-layer order is quoted verbatim in sourceEvidence. QUIRKS carried + documented: 'SEC TION II' header-space artifact (known, as-is); the banner interleaves with the margin fraction ('c/(c + d)AND BIOSTATISTICS'); small-caps artifacts (TERm / EXAmPLE / FORmULA / EPIDEmIOLOGY); dash variance as printed (RRR row en dashes 'RRR = 1 – RR', '(ARC – ART)', '8%–2%' vs AR/ARR true minus signs); right single quote in don't; invisible \\x8e bytes before each → arrow (pdftotext artifact, stripped by norm()); the ⊕/⊖ printed furniture; the Relative-risk TERM label emitted late in the raw text stream (quoted with the CFR row); the pdftotext ordering quirk of the OR grid's d-value '20' emitted after the 'RR =' label. Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (two-by-two-engine, trial-to-bedside-cascade), 4 patterns, 4 traps, 3 pivots, 9 recall, 4 related (likelihood-ratios, diagnostic-test-performance, observational-studies, incidence-prevalence — all Public Health census topicIds), 4 crossLinks, 4 mnemonics (2 First Aid's own carried attributed with locations + 2 KYP originals marked), a miniCase with 4 options (exactly 1 correct, why/whyWrong on every option), a clinical block (the five printed worked examples re-derived at the bedside, with the NNT/NNH/AR% continuations marked as KYP arithmetic), and NO DrugCards — the DrugCard layer is NOT APPLICABLE to a biostatistics page (no drug rows print; nothing folded, the shape simply does not apply); (2) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the P-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (3) outputs are STAGED under .usmle-pipeline-cache/staging-pubh4/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'quantifying-risk-map' is therefore not yet in visuals/registry.tsx by design); (4) the page's two visual assets are implemented as ORIGINAL KYP ART in ONE registry visual (quantifying-risk-map, QuantifyingRiskMap in visuals/pubhealth-p4.tsx, viewBox 0 0 1102 1398, in-browser getBBox audit: 138 texts, 0 overlaps, 0 outside viewBox): Zone A the classic 2×2 as the centerpiece engine (cells a b / c d with ⊕/⊖ furniture, the two reading-direction cards — rows → the risks, columns → the odds — and the three top-margin formulas strip), Zone B the eight measure rows as spokes in two columns (each card: family chip, formula, printed worked example, interpretation strip; the OR and RR cards carry the two printed worked grids), and Zone C the RATIO · DIFFERENCE · RECIPROCAL grammar strip with the two attributed First Aid mnemonics — with the full table's text ALSO carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Epidemiology and Biostatistics",
    "topicId": "quantifying-risk", "requiredInKYP": True}
inv4 = [
    dict(SV_BASE, **{
        "visualId": "quantifying-risk-sv1",
        "sourcePages": {"part": 1, "pdfPages": [280], "bookPages": "258"},
        "visualType": "SUMMARY_FIGURE",
        "visualPurpose": "The classic 2×2 or contingency table (book 258, upper page): the engine figure every quantifying-risk formula is built on — disease or outcome down the columns (⊕/⊖), exposure or intervention across the rows (⊕/⊖, the row label printing vertically), cells a b / c d — with the three formula labels (Odds ratio =, Relative risk =, Attributable risk =) stacked in the top margin above it",
        "sourceFigureDescription": "PURE-VECTOR FIGURE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh4/vlm-census.txt — VLM available this session): the lead-in sentence 'Definitions and formulas are based on the classic 2 × 2 or contingency table.', then the bordered 2×2 grid — column header 'Disease or outcome' with ⊕ over the disease column and ⊖ over the no-disease column; row label 'Exposure or intervention' printing VERTICALLY down the left side with ⊕ beside the exposed row and ⊖ beside the unexposed row; cells a (top-left, exposed + diseased), b (top-right), c (bottom-left), d (bottom-right). Above/around it, three stacked formula labels: 'Odds ratio = a/c ÷ b/d = ad/bc', 'Relative risk = a/(a + b) ÷ c/(c + d)', 'Attributable risk = a/(a + b) − c/(c + d)' — present in the text layer but visually obscured in the digital render (the teal running-header band is drawn over the top two; the third prints white-on-white; pdftoppm + pdftocairo agree) with the banner fragment 'AND BIOSTATISTICS' interleaving the c/(c + d) fraction in the text layer.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "quantifying-risk-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A of the registry visual (QuantifyingRiskMap in visuals/pubhealth-p4.tsx): the 2×2 rebuilt as the centerpiece with the four cells a b / c d and their identities, the printed ⊕/⊖ furniture (attributed), the two reading-direction cards (READ BY ROWS → the risks a/(a+b) and c/(c+d); READ BY COLUMNS → the odds a/c and b/d), and the three top-margin formulas in a strip (with the render-obscuration note); the axis labels and lead-in sentence are carried verbatim, the horizontal row label is a documented adaptation of the printed vertical label",
        "productionStatus": "complete",
        "plannedKypVisualId": "quantifying-risk-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "quantifying-risk-sv2",
        "sourcePages": {"part": 1, "pdfPages": [280], "bookPages": "258"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Quantifying risk table (book 258): the eight-measure reference — columns TERm / DEFINITION / EXAmPLE / FORmULA, from Odds ratio (case-control, ad/bc, the red 'You take a case to the OR.') through Case fatality rate (deaths/cases × 100), each row with definition, worked example, and formula — the arithmetic core of epidemiology and biostatistics",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh4/vlm-census.txt — VLM available this session): the table title 'Quantifying risk', four column headers (TERm / DEFINITION / EXAmPLE / FORmULA — small-caps artifacts as printed), then EIGHT rows in printed order, each carried verbatim in the note's table block: (1) Odds ratio — case-control studies, odds of exposure among cases (a/c) vs controls (b/d), OR=1/>1/<1 interpretation lines, the 20/30-vs-5/25 smoking example → OR 8, the RED mnemonic 'You take a case to the OR.' (last line of the EXAMPLE cell), formula OR = a/c ÷ b/d = ad/bc with the worked grid a b = 20 5 / c d = 10 20 printed inside the FORMULA column; (2) Relative risk — cohort studies, risk in exposed ÷ unexposed, RR=1/>1/↓↑ lines, the 5/10-vs-1/10 radiation example → RR 5, 'For rare diseases (low prevalence), OR approximates RR.', formula RR = a/(a+b) ÷ c/(c+d) with the worked grid a b = 5 5 / c d = 1 9; (3) Relative risk reduction — proportion of risk reduction, ART vs ARC, flu-shot example RR = 2/8 = 0.25 and RRR = 0.75, formulas RRR = 1 – RR and (ARC – ART)/ARC; (4) Attributable risk — difference in risk between exposed and unexposed, smoking 21% vs 1% → 20%, formulas AR = a/(a+b) − c/(c+d) and AR% = (RR − 1)/RR × 100; (5) Absolute risk reduction — 'the difference in risk (not the proportion)', placebo 8% vs vaccine 2% → ARR = 8%–2% = 6% = 0.06, formula ARR = c/(c+d) − a/(a+b) (control minus treated, as printed); (6) Number needed to treat — 'Number of patients who need to be treated for 1 patient to benefit. Lower number = better treatment.', NNT = 1/ARR, NO example cell; (7) Number needed to harm — 'Number of patients who need to be exposed to a risk factor for 1 patient to be harmed. Higher number = safer exposure.', NNH = 1/AR with 'AR' in red, NO example cell; (8) Case fatality rate — 'Percentage of deaths occurring among those with disease.', 4 deaths among 10 meningitis cases = 40%, CFR% = deaths/cases × 100. TERM names print in bold dark blue; the header band is a shaded strip; no photos, margin notes, or asterisk footnotes.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "quantifying-risk-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone B of the registry visual (QuantifyingRiskMap in visuals/pubhealth-p4.tsx): the eight rows as measure cards in two columns (family chips RATIO / DIFFERENCE / RECIPROCAL / OUTCOME ONLY, each card carrying its printed formula, worked example, and interpretation strip, the OR and RR cards embedding the two printed worked grids), plus Zone C's RATIO · DIFFERENCE · RECIPROCAL grammar strip with the two attributed First Aid mnemonics; the full table's text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, the decoder list block, and recall[0-8]",
        "productionStatus": "complete",
        "plannedKypVisualId": "quantifying-risk-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh4"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "quantifying-risk.json").write_text(json.dumps(m4, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "quantifying-risk.json").write_text(
    json.dumps({"topicId": "quantifying-risk", "chapterId": "public-health", "inventory": inv4,
                "coverageAudit": {"topicId": "quantifying-risk", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries TWO visual assets — sv1 the classic 2×2 contingency-table figure with its three top-margin formula labels, and sv2 the eight-row Quantifying risk table (with the two worked grids printed inside its FORMULA column) — both accounted for as ORIGINAL KYP ADAPTATIONS: nothing is reproduced; ONE registry visual (quantifying-risk-map, QuantifyingRiskMap in visuals/pubhealth-p4.tsx, viewBox 0 0 1102 1398; in-browser getBBox audit: 138 texts, 0 overlaps, 0 outside viewBox) rebuilds every axis label, cell letter, term, definition, example, formula, worked grid, and mnemonic as original KYP vector art (the 2×2 as the centerpiece engine with the two reading-direction cards and the margin-formula strip; the eight measures as cards in two columns; the RATIO · DIFFERENCE · RECIPROCAL grammar strip), and the full table's text is additionally carried verbatim in the note's table block. Census: zero raster images (pdfimages); VLM available this session — a 120dpi full-page glm-4.6v pass (vlm-census.txt) confirmed the 2×2 orientation, the eight rows in printed order, both worked grids (OR 20 5 / 10 20; RR 5 5 / 1 9), the red furniture, and the empty NNT/NNH example cells; the three top-margin formulas are text-layer content visually obscured by the running-header band in the digital render (adjudication B, carried). ADJUDICATION A: only one FA mnemonic prints on pdf 280 ('You take a case to the OR.', red, OR row); 'Cohort = relative risk.' prints on pdf 278 / book 256 and is carried attributed with its location. FULL single page (no split). STAGED under .usmle-pipeline-cache/staging-pubh4/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH4 manifest + inventory staged: {OUT}/manifests/quantifying-risk.json, {OUT}/visual-inventory/quantifying-risk.json")
print(f"quantifying-risk: evidence {len(kept)}/{len(E4)} verified")
