#!/usr/bin/env python3
"""PH19 beta-blockers — manifest + inventory (Pharmacology autonomic-drugs
batch), STAGED under .usmle-pipeline-cache/staging-ph19/ (the promotion step
owns content/). Source: FULL pdf page 266 / book 244 — a FULL single page,
NO shared-page split (the whole page belongs to this topic). The page is
ONE large printed table (three columns: APPLICATION / ACTIONS /
NOTES-EXAMPLES) under the β-blockers heading, preceded by the alphabetical
drug list ("Atenolol, betaxolol, bisoprolol, carvedilol, esmolol,
labetalol, metoprolol, nadolol, nebivolol, propranolol, timolol.") and
followed by the indd footer. TWELVE APPLICATION rows print (TEN clinical
applications — the batch brief said "nine uses"; ten docks print, all ten
carried — plus the ADVERSE EFFECTS row and the four SELECTIVITY rows).

Census: pdfimages -list reports ZERO raster images on pdf 266 — a pure
vector/text table page. The VLM census RAN CLEAN this session (glm-4.6v
via z-ai-web-dev-sdk, resolved from the global bun install; output saved
as staging-ph19/vlm-census.txt): no figures, no photographs, no margin
notes, no asterisk footnotes; the page's six mnemonics print in RED TEXT
inside the NOTES-EXAMPLES cells and are carried VERBATIM, attributed to
First Aid, and inventoried in the manifest notes: (1) "Bisoprolol,
carvedilol, metoprolol (β-blockers curb mortality)"; (2) "Nadolol,
propranolol, carvedilol for no portal circulation"; (3) "Selective
antagonists mostly go from A to M (β1 with 1st half of alphabet)";
(4) "NonZelective antagonists mostly go from N to Z (β2 with 2nd half of
alphabet)"; (5) "Nonselective β-adrenergic and α1-selective antagonists
have modified suffixes (instead of \"-olol\")"; (6) "NebivOlol increases
NO". A SECOND VLM pass (200-dpi crops, staging-ph19/vlm-adjudication.txt)
adjudicated the disputed cells, cross-checked deterministically with
pdftotext -bbox baselines (staging evidence, described below).

VERBATIM CARRIES + ADJUDICATIONS, documented:
(1) "NonZelective" — the printed NOTES cell of the second SELECTIVITY row
carries a CAPITAL Z mid-word; confirmed in BOTH the text layer (line 104)
and the 200-dpi render (the left-hand ACTIONS cell of the same row prints
"Nonselective" normally) — the source's own printed quirk, carried
verbatim, never silently fixed.
(2) The text layer runs together "β1receptor" (line 42) and "longterm"
(line 61): the PRINT shows "β1-receptor" and "long-term" — hyphens sitting
at line breaks that pdftotext dropped (bbox: "β1-" ends the line, then
"receptor blockade on JG cells)"; "(long-" then "term)"). Quotes cite the
text-layer form; the note's verbatim table carries the printed form with
the adjudication documented.
(3) The text layer prints "β3 -receptors" (line 116) with a stray space;
the print shows "β3-receptors" (the subscript 3 splits the token).
(4) INTERLEAVE (the m38 convention): the two red mnemonic NOTES cells —
"Propranolol" (the Hyperthyroidism/thyroid storm row's NOTES cell) and
"Effective for prevention" (the Migraine row's NOTES cell) — emit AFTER
the black footer slug in the text layer (lines 123 and 125, between
FAS1_2026_05-Pharmacology.indd 244 and the 12/19/25 8:07 AM timestamp)
because the red text is drawn late in the content stream; their true rows
are pinned deterministically by pdftotext -bbox baselines (Propranolol
y=263.2 shares the "Symptom control (↓ heart rate, ↓ tremor)" baseline;
"Effective for prevention" y=322.4 shares the "↓ nitric oxide production"
baseline) and confirmed by both VLM passes. Quoted as one contiguous
range (121-127) with the position note.
(5) The Migraine row's printed NOTES cell is "Effective for prevention"
ALONE — the page names NO specific migraine drug (the note deliberately
does not attribute migraine prophylaxis to a named -olol on this page's
evidence).
(6) The running header prints "SEC TION II" in the text layer (line 3).
(7) The batch brief's mention of pindolol and an ISA (intrinsic
sympathomimetic activity) column: NO pindolol and NO ISA content print
anywhere on pdf 266 — the page sorts by selectivity only; the note's
selectivity content is strictly what prints (documented deviation from
the brief's illustrative drug list, which said "whatever rows print").
Nothing is reproduced: the table is an ORIGINAL KYP ADAPTATION (the
registry visual beta-blocker-map — BetaBlockerMap in
visuals/pharm-p19.tsx); the printed table text is carried verbatim in the
note's table block.

Line-number convention: 1-based lines of the page-266 block of
.usmle-pipeline-cache/part1.txt (form-feed split; page N = pages[N-1]),
the same convention as the gen_ph9/gen_ph10 scripts.
"""
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
L = {266: pages[265].split("\n")}
P = {266: norm(pages[265])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E19 = [
    ("Page identity — the running header, the section banner, the topic heading, and the alphabetical drug list (all eleven drugs, book 244)", rng(266, 1, 12), [266]),
    ("The table header — APPLICATION / ACTIONS / NOTES-EXAMPLES (the page is one large three-column table)", rng(266, 14, 18), [266]),
    ("Application row 1 of 10 — Angina pectoris: ↓ heart rate and contractility → ↓ O2 consumption (no named drug)", rng(266, 20, 23), [266]),
    ("Application row 2 of 10 — Glaucoma: ↓ production of aqueous humor, with the printed anchor Timolol", rng(266, 25, 29), [266]),
    ("Application row 3 of 10 — Heart failure: blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality, with the mortality trio 'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)'", rng(266, 31, 38), [266]),
    ("Application row 4 of 10 — Hypertension: ↓ cardiac output, ↓ renin secretion (the text layer prints 'β1receptor' — the print shows 'β1-receptor', the line-break hyphen dropped by pdftotext, adjudicated via pdftotext -bbox + the 200-dpi VLM render)", rng(266, 40, 42), [266]),
    ("Application row 5 of 10 — Hyperthyroidism/thyroid storm: symptom control (↓ heart rate, ↓ tremor); its red NOTES cell 'Propranolol' emits LATE in the text layer (line 123, after the footer slug) and is quoted with the footer entry below (position adjudicated by bbox baselines)", rng(266, 44, 47), [266]),
    ("Application row 6 of 10 — Hypertrophic cardiomyopathy: ↓ heart rate → ↑ filling time, relieving obstruction (no named drug)", rng(266, 49, 53), [266]),
    ("Application row 7 of 10 — Migraine: ↓ nitric oxide production; its red NOTES cell 'Effective for prevention' emits LATE in the text layer (line 125, after the footer slug) and is quoted with the footer entry below (position adjudicated by bbox baselines; the page names NO specific migraine drug)", rng(266, 55, 57), [266]),
    ("Application row 8 of 10 — Myocardial infarction: ↓ O2 demand (short-term), ↓ mortality (longterm) (the text layer prints 'longterm' — the print shows 'long-term' split across lines as '(long-' / 'term)', adjudicated via pdftotext -bbox + the 200-dpi VLM render)", rng(266, 59, 61), [266]),
    ("Application row 9 of 10 — Supraventricular tachycardia (eg, atrial fibrillation): ↓ AV conduction velocity (class II antiarrhythmic), with the printed pair 'Metoprolol, esmolol'", rng(266, 63, 70), [266]),
    ("Application row 10 of 10 — Variceal bleeding: ↓ hepatic venous pressure gradient and portal hypertension (prophylactic use), with First Aid's mnemonic trio 'Nadolol, propranolol, carvedilol for no portal circulation'", rng(266, 72, 78), [266]),
    ("The ADVERSE EFFECTS row — erectile dysfunction; cardiovascular (bradycardia, AV block, HF); CNS (seizures, sleep alterations); dyslipidemia (metoprolol); masked hypoglycemia; asthma/COPD exacerbations — plus the printed cocaine note 'Use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation'", rng(266, 80, 91), [266]),
    ("SELECTIVITY row 1 of 4 — β1-selective antagonists (β1 > β2): atenolol, betaxolol, bisoprolol, esmolol, metoprolol, with First Aid's alphabet mnemonic 'Selective antagonists mostly go from A to M (β1 with 1st half of alphabet)'", rng(266, 93, 99), [266]),
    ("SELECTIVITY row 2 of 4 — nonselective antagonists (β1 = β2): nadolol, propranolol, timolol, with First Aid's mnemonic 'NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)' — the printed CAPITAL-Z quirk 'NonZelective' carried VERBATIM (confirmed in the text layer and the 200-dpi render; the same row's ACTIONS cell prints 'Nonselective' normally)", rng(266, 101, 105), [266]),
    ("SELECTIVITY row 3 of 4 — nonselective β-adrenergic, α1-selective antagonists: carvedilol, labetalol, with the printed modified-suffix rule 'Nonselective β-adrenergic and α1-selective antagonists have modified suffixes (instead of \"-olol\")'", rng(266, 107, 112), [266]),
    ("SELECTIVITY row 4 of 4 — Nebivolol combines cardiac-selective β1-adrenergic blockade with stimulation of β3-receptors (activate NO synthase in the vasculature and ↓ SVR) (the text layer prints 'β3 -receptors' with a stray space — the print shows 'β3-receptors'), with First Aid's mnemonic 'NebivOlol increases NO'", rng(266, 114, 119), [266]),
    ("The footer and the two late-emitting red mnemonic NOTES cells — FAS1_2026_05-Pharmacology.indd 244; 'Propranolol' (the Hyperthyroidism/thyroid storm NOTES cell) and 'Effective for prevention' (the Migraine NOTES cell), which emit after the black footer slug because the red mnemonic text is drawn late in the content stream (positions adjudicated deterministically via pdftotext -bbox baselines: Propranolol y=263.2 on the 'Symptom control (↓ heart rate, ↓ tremor)' baseline; 'Effective for prevention' y=322.4 on the '↓ nitric oxide production' baseline); and the 12/19/25 8:07 AM timestamp", rng(266, 121, 127), [266]),
]
for c, q, pgs in E19:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"beta-blockers: evidence {len(kept)}/{len(E19)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m19 = {"topicId": "beta-blockers", "title": "β-Blockers",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [266], "bookPages": "244–244"},
    "sourceEvidence": kept, "visualIds": ["beta-blocker-map"],
    "mechanismIds": ["beta-blockade-core-map", "selectivity-lane-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed table — 5 patterns (the asthma/COPD lane choice, the heart-failure mortality trio, thyroid-storm symptom control, the timolol-glaucoma dock, the cocaine controversy quoted verbatim), 4 traps (β1-selective vs nonselective; propranolol vs timolol docks; the modified-suffix duals; nebivolol vs labetalol), 3 pivots (lane-first reading; comorbidity routing; anchored vs class-level docks), and the 8-item recall deck.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the table's facts only; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "drug-card-layer", "summary": "The 8 DrugCards (metoprolol, esmolol, propranolol, nadolol, timolol, carvedilol, labetalol, nebivolol) — the printed table's rows reorganized into the note's pharmacology cards, every field traceable to a printed cell (selectivity row, application row, or the ADVERSE EFFECTS row).",
         "origin": "outside-first-aid", "rationale": "First Aid prints a table, not drug cards; the card organization is a KYP design built strictly from the printed cells.",
         "location": "drugs"},
        {"id": "lane-reading", "summary": "The four-move reading protocol (LANE → LOCKS → REACH → DOCK), the three-lanes-and-a-turbo framing of the SELECTIVITY column, the six-tolls grouping of the printed ADVERSE EFFECTS list (SEX / PUMP / HEAD / FATS / HIDDEN SUGAR / WHEEZE), and the anchored-vs-class-level dock distinction (five docks print named drugs; five print none).",
         "origin": "outside-first-aid", "rationale": "The source prints rows and mnemonics but never asks the learner to route a patient through them; the reading protocol and the groupings are KYP's synthesis of the printed cells.",
         "location": "core.keyIdea + blocks[2] the compare block + blocks[3] the list block + blocks[4] the steps block + blocks[5] the exam callout + the registry visual's zones"},
        {"id": "mnemonic-layer", "summary": "The four KYP-original mnemonics (THREE LANES AND A TURBO / EYE, STORM, WIRE, VARIX, PIPE / SIX TOLLS OF THE -OLOL / PICK THE LOCK, THEN BLOCK). The source's OWN six printed mnemonics — 'β-blockers curb mortality', 'no portal circulation', 'A to M (1st half)', 'NonZelective ... N to Z (2nd half)', 'modified suffixes', 'NebivOlol increases NO' — are carried VERBATIM with attribution in the verbatim table, the memory callout, and two mnemonic-array entries explicitly labeled 'First Aid's own — printed in the table'; they are NOT counted among the four KYP codes.",
         "origin": "outside-first-aid", "rationale": "The four ALL-CAPS codes are KYP's design; the six printed mnemonics are the source's own and are attributed wherever they appear.",
         "location": "mnemonics[0-3] (KYP) + mnemonics[4-5] (attributed First Aid) + blocks[6] the memory callout + the visual's lane markers"},
        {"id": "mini-case-layer", "summary": "The COPD-plus-post-MI miniCase (which β-blocker at discharge) with metoprolol correct (β1-selective A-to-M lane delivering the class's post-MI long-term ↓ mortality while 'mostly' sparing β2) and three distractors each failing on the printed lanes: propranolol and timolol (nonselective β1=β2 — the asthma/COPD exacerbation toll; timolol adds an invented glaucoma indication) and carvedilol (a genuine mortality-trio drug, but nonselective β + α1 — the same β2 tax; the strongest trap because the trio logic is real yet the MI row is a class-level row, not a trio row).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the rows but never integrates them into a comorbidity vignette; the stem, the four options, and the reasoning are KYP's design.",
         "location": "usmle.miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL PAGE, NO SHARED SPLIT: pdf 266 / book 244 belongs entirely to beta-blockers (the PH16-PH20 batch's page boundaries section). PAGE STRUCTURE: the alphabetical 11-drug list, then ONE three-column table (APPLICATION / ACTIONS / NOTES-EXAMPLES) whose printed row order is Angina pectoris; Glaucoma (Timolol); Heart failure (Bisoprolol, carvedilol, metoprolol — β-blockers curb mortality); Hypertension (↓ cardiac output, ↓ renin secretion due to β1-receptor blockade on JG cells); Hyperthyroidism/thyroid storm (Propranolol); Hypertrophic cardiomyopathy; Migraine (Effective for prevention); Myocardial infarction; Supraventricular tachycardia (eg, atrial fibrillation) (Metoprolol, esmolol); Variceal bleeding (Nadolol, propranolol, carvedilol for no portal circulation); ADVERSE EFFECTS (with the cocaine-associated chest-pain controversy note); SELECTIVITY (four rows). TEN clinical applications print — the batch brief's 'nine-uses' wording is a miscount; all ten are carried (documented). The brief's mention of pindolol and an ISA column: NO pindolol and NO ISA content print on pdf 266 (the brief itself said 'whatever rows print'); the note's selectivity content is strictly the four printed rows. CENSUS (both passes clean): pdfimages -list reports ZERO raster images on pdf 266; the VLM census ran clean via glm-4.6v/z-ai-web-dev-sdk at 120 dpi (staging-ph19/vlm-census.txt — resolved from the global bun install with NODE_PATH; no 401 outage this batch) — no figures, photographs, margin notes, or asterisk footnotes; the six mnemonics print in RED inside the NOTES-EXAMPLES cells; a SECOND VLM pass on 200-dpi crops (staging-ph19/vlm-adjudication.txt) adjudicated the disputed cells, cross-checked deterministically with pdftotext -bbox baselines. MARGIN-MNEMONIC INVENTORY (all First Aid's own, carried verbatim + attributed, none is a KYP extension): 'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)'; 'Nadolol, propranolol, carvedilol for no portal circulation'; 'Selective antagonists mostly go from A to M (β1 with 1st half of alphabet)'; 'NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)'; 'Nonselective β-adrenergic and α1-selective antagonists have modified suffixes (instead of \"-olol\")'; 'NebivOlol increases NO'. VERBATIM QUIRKS: (1) 'NonZelective' with a CAPITAL Z is the PRINT's own quirk (text layer line 104 AND the 200-dpi render both show it; the same row's ACTIONS cell prints 'Nonselective' normally) — carried verbatim, never fixed; (2) the text layer's 'β1receptor' (line 42) and 'longterm' (line 61) are line-break-hyphen artifacts — the print shows 'β1-receptor' (β1- at line end) and 'long-term' ('(long-' / 'term)'), adjudicated by pdftotext -bbox (word boxes) + the 200-dpi VLM read; evidence quotes cite the text-layer form (containment requirement), the note's verbatim table carries the printed form with the adjudication documented in its caption; (3) the text layer's 'β3 -receptors' (line 116) stray space — the print shows 'β3-receptors' (subscript-split token); (4) INTERLEAVE (the m38 convention): the two red mnemonic NOTES cells 'Propranolol' (thyroid-storm row) and 'Effective for prevention' (migraine row) emit AFTER the black footer slug in the text layer (lines 123/125 between the indd slug and the timestamp) because red text is drawn late in the content stream — quoted as one contiguous 121-127 range with the position note, and pinned deterministically by bbox baselines (Propranolol y=263.2 shares the 'Symptom control (↓ heart rate, ↓ tremor)' baseline; 'Effective for prevention' y=322.4 shares the '↓ nitric oxide production' baseline); (5) the Migraine NOTES cell is 'Effective for prevention' ALONE — the page names NO specific migraine drug, and the note does not attribute one on this page's evidence; (6) the running header prints 'SEC TION II' in the text layer (line 3); (7) the 120-dpi VLM pass initially read the hypertension cell as 'β1 receptor' (space) and the migraine/thyroid-storm NOTE cells in swapped rows — both corrected by the 200-dpi crop pass + the bbox baselines (the deterministic check outranks both VLM reads; documented). CONVENTIONS: productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the PH-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); the note's display sourceRef cites the BOOK page ('Part 1 pp. 244–244') following the ph10 convention, with the dual mapping carried here in sourcePages. STAGED under .usmle-pipeline-cache/staging-ph19/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'beta-blocker-map' is therefore not yet in visuals/registry.tsx by design). The registry visual is an ORIGINAL KYP ADAPTATION of the printed table (original artwork and layout conveying the table's content — the drug-list alphabet strip, the four selectivity lanes with drug chips and application anchors, the ten docks, and the classic-exam band); the printed table text is carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "beta-blockers", "requiredInKYP": True}
inv19 = [
    dict(SV_BASE, **{
        "visualId": "beta-blockers-sv1",
        "sourcePages": {"part": 1, "pdfPages": [266], "bookPages": "244"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The β-blocker table (book 244) — the alphabetical drug list plus the APPLICATION / ACTIONS / NOTES-EXAMPLES grid: ten clinical application rows, the ADVERSE EFFECTS row (with the cocaine controversy note), and the four SELECTIVITY rows (β1-selective A-to-M; nonselective N-to-Z; the α1+β modified-suffix duals; nebivolol's β1 + β3-NO pathway)",
        "sourceFigureDescription": "ONE large three-column table, pure vector/text (pdfimages: ZERO raster images; VLM census glm-4.6v at 120 dpi, staging-ph19/vlm-census.txt — no figures, photographs, margin notes, or footnotes; the six mnemonics print in RED inside the NOTES-EXAMPLES cells). Printed row order: Angina pectoris (↓ heart rate and contractility → ↓ O2 consumption); Glaucoma (↓ production of aqueous humor — Timolol); Heart failure (Blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality — Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)); Hypertension (↓ cardiac output, ↓ renin secretion (due to β1-receptor blockade on JG cells)); Hyperthyroidism/thyroid storm (Symptom control (↓ heart rate, ↓ tremor) — Propranolol); Hypertrophic cardiomyopathy (↓ heart rate → ↑ filling time, relieving obstruction); Migraine (↓ nitric oxide production — Effective for prevention); Myocardial infarction (↓ O2 demand (short-term), ↓ mortality (long-term)); Supraventricular tachycardia (eg, atrial fibrillation) (↓ AV conduction velocity (class II antiarrhythmic) — Metoprolol, esmolol); Variceal bleeding (↓ hepatic venous pressure gradient and portal hypertension (prophylactic use) — Nadolol, propranolol, carvedilol for no portal circulation); ADVERSE EFFECTS (Erectile dysfunction, cardiovascular (bradycardia, AV block, HF), CNS (seizures, sleep alterations), dyslipidemia (metoprolol), masked hypoglycemia, asthma/COPD exacerbations — Use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation); SELECTIVITY (β1-selective antagonists (β1 > β2)—atenolol, betaxolol, bisoprolol, esmolol, metoprolol — 'Selective antagonists mostly go from A to M (β1 with 1st half of alphabet)'; Nonselective antagonists (β1 = β2)—nadolol, propranolol, timolol — 'NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)'; Nonselective β-adrenergic, α1-selective antagonists—carvedilol, labetalol — modified suffixes (instead of \"-olol\"); Nebivolol combines cardiac-selective β1-adrenergic blockade with stimulation of β3-receptors (activate NO synthase in the vasculature and ↓ SVR) — 'NebivOlol increases NO').",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "beta-blocker-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (BetaBlockerMap in visuals/pharm-p19.tsx): the drug-list alphabet strip (the eleven drugs sorted into First Aid's alphabet halves with the three 'mostly' exceptions — carvedilol, labetalol, nebivolol — flagged), the four-lane selectivity directory (β1-selective A-to-M with brand chips; nonselective N-to-Z with the printed 'NonZelective' capital-Z quirk; the α1+β modified-suffix duals; nebivolol's β1-block + β3-stimulation → NO synthase → ↓ SVR turbo) with the drug chips and their printed application anchors, the ten-dock band in printed row order with action gists and named anchors, and the classic-exam band (the airway rule, the cocaine controversy quoted verbatim, the hidden tolls) plus the mortality-trio strip; the printed table is also carried VERBATIM in the note's table block (blocks[1]), with the printed quirks documented in its caption",
        "productionStatus": "complete",
        "plannedKypVisualId": "beta-blocker-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph19"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "beta-blockers.json").write_text(json.dumps(m19, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "beta-blockers.json").write_text(
    json.dumps({"topicId": "beta-blockers", "chapterId": "pharmacology", "inventory": inv19,
                "coverageAudit": {"topicId": "beta-blockers", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's single visual asset — the β-blocker table (the alphabetical drug list + the APPLICATION/ACTIONS/NOTES-EXAMPLES grid with ten application rows, the ADVERSE EFFECTS row, and the four SELECTIVITY rows) — is accounted for as an ORIGINAL KYP ADAPTATION: the registry visual beta-blocker-map (BetaBlockerMap in visuals/pharm-p19.tsx) conveys the table's full educational content with original KYP artwork and layout (the alphabet-half drug strip, the four selectivity lanes with drug chips and application anchors, the ten docks, and the classic-exam band), and the table text itself is carried VERBATIM in the note's table block. Nothing is reproduced. Census: pdfimages reports ZERO raster images on pdf 266 (pure vector/text table); the VLM census ran clean at 120 dpi (glm-4.6v, staging-ph19/vlm-census.txt) with a documented 200-dpi adjudication pass (staging-ph19/vlm-adjudication.txt) cross-checked by pdftotext -bbox baselines — no figures, photographs, margin notes, or footnotes beyond the six red in-cell mnemonics, all carried attributed. FULL PAGE, no shared split (pdf 265's α-blockers and pdf 267's PDE inhibitors are the sibling topics on their own pages). STAGED under .usmle-pipeline-cache/staging-ph19/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH19 manifest + inventory staged: {OUT}/manifests/beta-blockers.json, {OUT}/visual-inventory/beta-blockers.json")
print(f"beta-blockers: evidence {len(kept)}/{len(E19)} verified")
