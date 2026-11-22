#!/usr/bin/env python3
"""PH24 beta-blockers — manifest + inventory + flip
(Pharmacology 24/43 — the β-blockers block: the WHOLE of pdf 266, book 244,
under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner. The page behind —
pdf 265 / book 243 — carries the two COMPLETED same-page blocks (PH22
sympatholytics-alpha-2-agonists ABOVE, PH23 alpha-blockers BELOW); only the
α-blockers table's final row and its phenoxybenzamine row pinned from behind
as boundary markers. The page ahead — pdf 267 / book 245 — opens
'Phosphodiesterase inhibitors', the PENDING next topic; THIS block does NOT
extend there: sourcePages = [266] only).
The page prints its section header, the eleven-drug roster, and ONE
three-zone APPLICATION/ACTIONS/NOTES-EXAMPLES table:
THE HEADER — 'β-blockers' + 'Atenolol, betaxolol, bisoprolol, carvedilol,
esmolol, labetalol, metoprolol, nadolol, nebivolol, propranolol, timolol.'
ZONE 1 — THE APPLICATION MATRIX (ten rows): 'Angina pectoris' → '↓ heart
rate and contractility → ↓ O2 consumption'; 'Glaucoma' → '↓ production of
aqueous humor' | 'Timolol'; 'Heart failure' → 'Blockade of neurohormonal
stress → prevention of deleterious cardiac remodeling → ↓ mortality' |
'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)';
'Hypertension' → '↓ cardiac output, ↓ renin secretion (due to β1-receptor
blockade on JG cells)'; 'Hyperthyroidism/thyroid storm' → 'Symptom control
(↓ heart rate, ↓ tremor)' | 'Propranolol'; 'Hypertrophic cardiomyopathy' →
'↓ heart rate → ↑ filling time, relieving obstruction'; 'Migraine' → '↓
nitric oxide production' | 'Effective for prevention'; 'Myocardial
infarction' → '↓ O2 demand (short-term), ↓ mortality (long-term)';
'Supraventricular tachycardia (eg, atrial fibrillation)' → '↓ AV conduction
velocity (class II antiarrhythmic)' | 'Metoprolol, esmolol'; 'Variceal
bleeding' → '↓ hepatic venous pressure gradient and portal hypertension
(prophylactic use)' | 'Nadolol, propranolol, carvedilol for no portal
circulation'.
ZONE 2 — THE ADVERSE-EFFECTS ROW: 'Erectile dysfunction, cardiovascular
(bradycardia, AV block, HF), CNS (seizures, sleep alterations),
dyslipidemia (metoprolol), masked hypoglycemia, asthma/COPD exacerbations'
+ the printed cocaine note 'Use of β-blockers for acute cocaine-associated
chest pain remains controversial due to unsubstantiated concern for
unopposed α-adrenergic stimulation'.
ZONE 3 — THE SELECTIVITY SUBTABLE (four rows, WITH the book's own printed
mnemonics): 'β1-selective antagonists (β1 > β2)—atenolol, betaxolol,
bisoprolol, esmolol, metoprolol' | 'Selective antagonists mostly go from A
to M (β1 with 1st half of alphabet)'; 'Nonselective antagonists (β1 =
β2)—nadolol, propranolol, timolol' | 'NonZelective antagonists mostly go
from N to Z (β2 with 2nd half of alphabet)'; 'Nonselective β-adrenergic,
α1-selective antagonists—carvedilol, labetalol' | 'Nonselective
β-adrenergic and α1-selective antagonists have modified suffixes (instead
of "-olol")'; 'Nebivolol combines cardiac-selective β1-adrenergic blockade
with stimulation of β3-receptors (activate NO synthase in the vasculature
and ↓ SVR)' | 'NebivOlol increases NO'.
CENSUS VERIFICATION (the task's verify order): the partial-agonist/ISA
members (pindolol, acebutolol) and any α2+β category are NOT printed in
the 2026 block — the selectivity subtable carries exactly FOUR groups
(β1-selective, nonselective β1=β2, combined β+α1, nebivolol-β3/NO); no ISA
row, no α2 row — verified absent, never cited as printed.
RASTER CENSUS: ZERO raster images on pdf 266 (pdfimages -list returns no
rows) — the block is PURE TEXT, COPYRIGHTED, never reproduced as artwork;
carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION)
and conveyed as ONE original KYP selectivity/application map
(BetaBlockerMap).
CROSS-PAGE MECHANISM ANCHORS (all printed, all verified): pdf 259 (book
237, the COMPLETED PH16 g-protein-linked-second-messengers) prints the β1
row — 'β1 | s | ↑ heart rate, ↑ contractility (one heart), ↑ renin release,
↑ lipolysis' — and the β2 row — 'β2 | s | Vasodilation, bronchodilation
(two lungs), ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis, ↓ uterine
tone (tocolysis), ↑ aqueous humor production, ↑ cellular K+ uptake' (β1 AND
β2 = the Gs couple; the β2 row's bronchodilation IS the asthma/COPD
exacerbation mechanism and its '↑ aqueous humor production' IS the timolol
glaucoma mechanism, both printed on one row); pdf 258 (book 236, the
COMPLETED PH15 tissue-distribution-of-adrenergic-receptors) prints the β1
row — 'β1 | Heart / Kidney → ↑ heart rate, contractility / ↑ renin
secretion' (the JG-cell address of the printed '↓ renin secretion' action)
— and the β2 row — 'β2 | Bronchioles / Cardiac muscle / Liver / Arterial
smooth muscle / Pancreas → Bronchodilation / ↑ heart rate, contractility /
Glycogenolysis, glucose release / Vasodilation / Stimulation of insulin
secretion' (the bronchiole address of the asthma caution and the
liver-glycogenolysis address of the masked-hypoglycemia caution); pdf 265
(book 243, the COMPLETED PH23 alpha-blockers) prints the phenoxybenzamine
row — 'Irreversible. Pheochromocytoma (used preoperatively) to prevent
catecholamine (hypertensive) crisis.' (the α-before-β ordering anchor —
THIS page prints only the unopposed-α concern in its cocaine note, never
the pheo sequence itself); pdf 267 (book 245) ahead opens 'Phosphodiesterase
inhibitors' (the PENDING next topic) — THIS block does NOT extend there;
sourcePages = [266] only.
KYP EXTENSIONS (beyond the block's printed set, flagged wherever they
appear): the usmle-attack-layer (patterns/traps/pivots/mini-case); the
FOUR-LANE SELECTIVITY frame (the printed A-to-M/N-to-Z/modified-suffix/NO
mnemonics read as one sorting question — the mnemonics are the book's own,
the four-lane compression is KYP's); the THREE CAUTION PATIENTS frame (the
asthmatic, the brittle diabetic, the cocaine user — the cells are printed
['asthma/COPD exacerbations', 'masked hypoglycemia', the cocaine-controversy
note]; the 'avoid in asthma' management rule and the tachycardia-as-the-only-
hypoglycemia-sign reading are KYP's, flagged); the ABRUPT-WITHDRAWAL frame
(taper-don't-stop — NOT printed on this page, KYP-flagged); the PHEO
α-FIRST frame (the ordering rule is NOT printed here — anchored to book
243's phenoxybenzamine row + this page's own 'unopposed α-adrenergic
stimulation' concern, flagged); the essential-tremor and thyrotoxicosis-
beyond-symptom-control readings (NOT printed on this page — the page prints
'Hyperthyroidism/thyroid storm' symptom control but no tremor row; flagged);
and the PH23/PH24 boundary + ISA-absence census itself."""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "":
    pages.pop()
L = {258: pages[257].split("\n"), 259: pages[258].split("\n"),
     264: pages[263].split("\n"), 265: pages[264].split("\n"),
     266: pages[265].split("\n"), 267: pages[266].split("\n")}
P = {258: norm(pages[257]), 259: norm(pages[258]),
     264: norm(pages[263]), 265: norm(pages[264]),
     266: norm(pages[265]), 267: norm(pages[266])}
def rng(pg, a, b): return "\n".join(L[pg][a - 1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 244): the printed page number, the Section II marker, the Pharmacology marker, and the standing Autonomic Drugs banner (the page this topic's WHOLE β-blockers block prints on — the banner it shares with every autonomic-drugs topic from drug-effect-modifications to the α-blockers table on book 243 behind)", rng(266, 1, 7), [266]),
    ("The section header + the ELEVEN-DRUG ROSTER, verbatim — 'β-blockers' + 'Atenolol, betaxolol, bisoprolol, carvedilol, esmolol, labetalol, metoprolol, nadolol, nebivolol, propranolol, timolol.' (the whole class in alphabetical order — the roster the selectivity subtable below sorts into its four lanes; ten plain '-olol' names plus the two modified-suffix members carvedilol and labetalol already visible in the roster)", rng(266, 9, 12), [266]),
    ("The table frame, verbatim — the three column headers 'APPLICATION' / 'ACTIONS' / 'NOTES/EXAMPLES' (the frame of the block's application matrix — the same three-column architecture as the α2-agonists and α-blockers tables on book 243 behind, now carrying ten application rows, an ADVERSE EFFECTS row, and a SELECTIVITY subtable)", rng(266, 14, 18), [266]),
    ("Application row 1, verbatim — 'Angina pectoris' → '↓ heart rate and contractility → ↓ O2 consumption' (the supply-demand arithmetic of the antianginal use: slower, weaker heart = less oxygen spent — the same arithmetic the MI row and the HCM row reuse)", rng(266, 20, 23), [266]),
    ("Application row 2, verbatim — 'Glaucoma' → '↓ production of aqueous humor' | 'Timolol' (the one ophthalmology row: the nonselective N-to-Z member as the topical drop; the mechanism anchors to book 237's β2 row, which prints '↑ aqueous humor production' — the secretion the blocker takes)", rng(266, 25, 29), [266]),
    ("Application row 3, verbatim — 'Heart failure' → 'Blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality' | 'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)' (the mortality lane: THREE named drugs — the β1-selective pair bisoprolol and metoprolol plus the combined α1+β carvedilol — with the book's own parenthetical 'β-blockers curb mortality' as the printed rationale)", rng(266, 31, 38), [266]),
    ("Application row 4, verbatim — 'Hypertension' → '↓ cardiac output, ↓ renin secretion (due to β1receptor blockade on JG cells)' (the two-hit antihypertensive action: less pump AND less renin — the β1 address on the JG cells is the book's own parenthetical, the renal half of the heart-plus-kidney distribution row of book 236)", rng(266, 40, 42), [266]),
    ("Application row 5, verbatim — 'Hyperthyroidism/ thyroid storm' → 'Symptom control (↓ heart rate, ↓ tremor)' (the thyrotoxicosis row: the β-blocker as the symptom bridge while the antithyroid drugs work — the printed actions are rate and tremor control only; the blockade of peripheral T4→T3 conversion is NOT printed on this page — KYP-flagged wherever used)", rng(266, 44, 47), [266]),
    ("The hyperthyroidism/thyroid-storm NOTES/EXAMPLES cell, verbatim — 'Propranolol' (the named drug of the thyrotoxicosis row: the nonselective N-to-Z member, the classic thyroid-storm agent; in the text layer this cell prints after the table body — its column position is the NOTES/EXAMPLES lane of the row above)", rng(266, 123, 123), [266]),
    ("Application row 6, verbatim — 'Hypertrophic cardiomyopathy' → '↓ heart rate → ↑ filling time, relieving obstruction' (the obstruction arithmetic: slower heart = longer diastole = better filling = less gradient — the same ↓ heart rate token the angina row spends on O2 consumption)", rng(266, 49, 53), [266]),
    ("Application row 7, verbatim — 'Migraine' → '↓ nitric oxide production' (the prophylaxis row — the printed mechanism is the NO line; the printed NOTES/EXAMPLES cell 'Effective for prevention' pins that this is the prophylactic use, not the abortive one)", rng(266, 55, 57), [266]),
    ("The migraine NOTES/EXAMPLES cell, verbatim — 'Effective for prevention' (the printed rank of the migraine use: PROPHYLAXIS — the β-blocker prevents the attacks, it does not abort them; in the text layer this cell prints after the table body — its column position is the NOTES/EXAMPLES lane of the migraine row)", rng(266, 125, 125), [266]),
    ("Application row 8, verbatim — 'Myocardial infarction' → '↓ O2 demand (short-term), ↓ mortality (long-term)' (the two-clock row: the same ↓ O2 demand as the angina row short-term, the same ↓ mortality as the heart-failure row long-term — the printed temporal split)", rng(266, 59, 61), [266]),
    ("Application row 9, verbatim — 'Supraventricular tachycardia (eg, atrial fibrillation)' → '↓ AV conduction velocity (class II antiarrhythmic)' | 'Metoprolol, esmolol' (the arrhythmia row: the AV node slowed — the class II antiarrhythmic label is the book's own — with TWO named drugs, the β1-selective metoprolol and the ultra-short-acting esmolol)", rng(266, 63, 70), [266]),
    ("Application row 10, verbatim — 'Variceal bleeding' → '↓ hepatic venous pressure gradient and portal hypertension (prophylactic use)' | 'Nadolol, propranolol, carvedilol for no portal circulation' (the gastroenterology lane: prophylaxis of the first bleed and rebleed; the NOTES cell carries the book's own parenthetical 'for no portal circulation' — the carvedilol clause whose absence-of-β2-selectivity reading is the exam's fine print)", rng(266, 72, 78), [266]),
    ("The ADVERSE-EFFECTS row, whole, verbatim — 'ADVERSE EFFECTS' + 'Erectile dysfunction, cardiovascular (bradycardia, AV block, HF), CNS (seizures, sleep alterations), dyslipidemia (metoprolol), masked hypoglycemia, asthma/COPD exacerbations' (the block's one toxicity set: five system buckets — sexual, cardiovascular, CNS, metabolic, pulmonary — with TWO drug-specific parentheticals: dyslipidemia belongs to metoprolol and the masking to the diabetic patient's warning signs)", rng(266, 80, 86), [266]),
    ("The printed cocaine note, whole, verbatim — 'Use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation' (the caution cell the exam builds stems on: the unopposed-α concern with the book's own hedge 'unsubstantiated concern' and 'remains controversial' — the SAME unopposed-α logic that orders α-blockade before β-blockade in pheochromocytoma, printed here for cocaine, never printed for pheo on either book-243 or book-244 pages)", rng(266, 88, 91), [266]),
    ("The SELECTIVITY subtable header + row 1, verbatim — 'SELECTIVITY' + 'β1-selective antagonists (β1 > β2)—atenolol, betaxolol, bisoprolol, esmolol, metoprolol' (the first of the four selectivity lanes: FIVE drugs, the cardioselective set — the raw '>' prints in the cell)", rng(266, 93, 96), [266]),
    ("The A-TO-M mnemonic cell, verbatim — 'Selective antagonists mostly go from A to M (β1 with 1st half of alphabet)' (the book's OWN printed mnemonic: the β1-selective drugs run A(tenolol) through M(etoprolol) — the memory hook the publisher itself prints in the NOTES/EXAMPLES column; KYP adds only the reading that the two nonselective 'A–M-sounding' exceptions — carvedilol, labetalol — announce themselves by their modified suffixes)", rng(266, 98, 99), [266]),
    ("The SELECTIVITY subtable row 2, verbatim — 'Nonselective antagonists (β1 = β2)—nadolol, propranolol, timolol' (the nonselective lane: THREE drugs, the set that takes both receptors — the lane that owns the asthma caution, the glaucoma drop (timolol), the thyrotoxicosis drug (propranolol), and two of the three variceal prophylaxis drugs)", rng(266, 101, 102), [266]),
    ("The N-TO-Z mnemonic cell, verbatim — 'NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)' (the book's OWN printed mnemonic, capital-Z emphasis and all: the nonselective drugs run N(adolol) through Z — the second half of the alphabet; the pairing with the A-to-M cell IS the whole selectivity sort in two printed lines)", rng(266, 104, 105), [266]),
    ("The SELECTIVITY subtable row 3, verbatim — 'Nonselective β-adrenergic, α1-selective antagonists—carvedilol, labetalol' (the combined lane: TWO drugs that add α1 blockade to nonselective β blockade — the two modified-suffix names already visible in the page's opening roster; the hypertension-with-BPH and the pheo-adjacent lane)", rng(266, 107, 108), [266]),
    ("The MODIFIED-SUFFIXES mnemonic cell, verbatim — 'Nonselective β-adrenergic and α1-selective antagonists have modified suffixes (instead of “-olol”)' (the book's OWN printed naming rule: carvedilol and labetalol break the '-olol' pattern because their receptor pattern is broken — the suffix IS the selectivity; the '-dilol'/'-talol' reading is KYP's, flagged)", rng(266, 110, 112), [266]),
    ("The SELECTIVITY subtable row 4, verbatim — 'Nebivolol combines cardiac-selective β1-adrenergic blockade with stimulation of β3 -receptors (activate NO synthase in the vasculature and ↓ SVR)' (the nebivolol lane: β1 blockade PLUS β3 stimulation → NO synthase → vasodilation → ↓ SVR — the one β-blocker that lowers afterload by a second mechanism; the text layer prints 'β3 -receptors' with the split spacing, an artifact of the PDF's beta-greek numeral kerning)", rng(266, 114, 117), [266]),
    ("The NEBIVOLOL mnemonic cell, verbatim — 'NebivOlol increases NO' (the book's OWN printed mnemonic with the capital-O emphasis: NebivolOl → NO — the fourth printed memory hook of the selectivity subtable; two alphabet-span mnemonics, one suffix rule, one NO line — the publisher prints the whole selectivity sort as four memory hooks)", rng(266, 119, 119), [266]),
    ("The page footer, verbatim — the book's signature file line (book 244; the page carries the WHOLE β-blockers block — header, roster, ten-row application matrix, adverse-effects row, and four-row selectivity subtable — under the one footer)", rng(266, 121, 121), [266]),
    ("The CROSS-PAGE MECHANISM ANCHOR #1, verbatim — the β1 row of the second-messenger table: 'β1' | 's' | '↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis' (pdf 259 / book 237, the COMPLETED PH16 g-protein-linked-second-messengers, lines 31-35: β1 = the Gs couple — the ↑ heart rate, ↑ contractility the angina row's '↓ heart rate and contractility' blocks, and the ↑ renin release the hypertension row's '↓ renin secretion (due to β1receptor blockade on JG cells)' blocks; the book's own '(one heart)' token is the distribution mnemonic the blocker reverses)", rng(259, 31, 35), [259]),
    ("The CROSS-PAGE MECHANISM ANCHOR #2, verbatim — the β2 row of the second-messenger table: 'β2' | 's' | 'Vasodilation, bronchodilation (two lungs), ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis, ↓ uterine tone (tocolysis), ↑ aqueous humor production, ↑ cellular K+ uptake' (pdf 259 / book 237, lines 37-42: β2 = the Gs couple too — and ONE printed row carries THREE of this block's cells: 'bronchodilation (two lungs)' IS the mechanism of the printed 'asthma/COPD exacerbations' adverse effect (block it and the bronchioles constrict), '↑ glycogenolysis' IS the substrate of the printed 'masked hypoglycemia' (block it and the liver's emergency glucose mobilization blunts), and '↑ aqueous humor production' IS the mechanism of the glaucoma row's '↓ production of aqueous humor' under timolol)", rng(259, 37, 42), [259]),
    ("The CROSS-PAGE MECHANISM ANCHOR #3, verbatim — the β1 row of the tissue-distribution table: 'β1' | 'Heart / Kidney' → '↑ heart rate, contractility / ↑ renin secretion' (pdf 258 / book 236, the COMPLETED PH15 tissue-distribution-of-adrenergic-receptors, lines 121-127: the β1 addresses in distribution form — the heart is the chronotropy/inotropy address (the bradycardia of the adverse row), the kidney is the JG-cell renin address the hypertension row names itself; the two-organ row explains why a heart drug lowers blood pressure twice)", rng(258, 121, 127), [258]),
    ("The CROSS-PAGE MECHANISM ANCHOR #4, verbatim — the β2 row of the tissue-distribution table: 'β2' | 'Bronchioles / Cardiac muscle / Liver / Arterial smooth muscle / Pancreas' → 'Bronchodilation / ↑ heart rate, contractility / Glycogenolysis, glucose release / Vasodilation / Stimulation of insulin secretion' (pdf 258 / book 236, lines 129-141: the β2 addresses in distribution form — the BRONCHIOLE line is the asthma caution's address (blockade → bronchospasm, the reason nonselective agents are contraindicated in asthma — the management rule is KYP's, flagged), the LIVER line 'Glycogenolysis, glucose release' is the masked-hypoglycemia address (blockade → the counter-regulatory glucose surge blunted), and the ARTERIAL line 'Vasodilation' is the vascular address whose loss under nonselective blockade explains the cold extremities and the unopposed-α pressor concern)", rng(258, 129, 141), [258]),
    ("The BEHIND-PAGE BOUNDARY #1, verbatim — the α-blockers table's phenoxybenzamine row: 'Nonselective / Phenoxybenzamine / Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' (pdf 265 / book 243, the COMPLETED PH23 alpha-blockers, lines 46-51: the page behind — the α-blockade that must come FIRST in pheochromocytoma before any β-blocker is added; the ordering rule itself prints on NEITHER page (KYP-flagged) — book 243 prints the α pretreatment, book 244 prints only the unopposed-α concern in its cocaine note)", rng(265, 46, 51), [265]),
    ("The BEHIND-PAGE BOUNDARY #2, verbatim — the α-blockers table's final row: 'α2 selective' + 'Mirtazapine' → 'Depression.' (pdf 265 / book 243, lines 73-78: the last row of the COMPLETED PH23's table, pinned from behind — the α2-ANTAGONIST mirror row; THIS block's selectivity subtable has NO α2 lane (verified absent — the task's 'α2+β: none' verification resolved: the 2026 β-blockers table prints exactly FOUR selectivity groups, no α2+β member, no partial-agonist/ISA member [pindolol, acebutolol absent] — never cited as printed)", rng(265, 73, 78), [265]),
    ("The AHEAD-PAGE BOUNDARY, verbatim — 'Phosphodiesterase inhibitors' + 'Phosphodiesterase (PDE) inhibitors inhibit PDE, which catalyzes the hydrolysis of cAMP and/or cGMP, and thereby increase cAMP and/or cGMP.' (pdf 267 / book 245, lines 1-14: the section header that OPENS the next page — the PENDING PDE-inhibitors topic; the β-blockers block does NOT extend to pdf 267: the whole block (header + roster + ten-row application matrix + adverse row + four-row selectivity subtable) is on pdf 266 alone, sourcePages = [266] only — and the cAMP/cGMP language of that page ahead is the same second-messenger currency this block's Gs couple mints, the pharmacologic bridge the next topic crosses)", rng(267, 1, 14), [267]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"beta-blockers: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "beta-blockers",
    "title": "Beta-Blockers",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [266], "bookPages": "244"},
    "sourceEvidence": kept, "visualIds": ["beta-blocker-map"],
    "mechanismIds": ["beta-gs-blockade-four-lane-selectivity", "beta-blocker-application-sort-caution-set"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the block's header + roster + ten-row application matrix + adverse-effects row + four-row selectivity subtable.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the table; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "four-lane-selectivity-frame", "summary": "The FOUR-LANE SELECTIVITY frame — the printed selectivity subtable read as one question asked of every -olol: WHICH RECEPTORS does it block? β1-SELECTIVE (atenolol, betaxolol, bisoprolol, esmolol, metoprolol — the book's own 'A to M (β1 with 1st half of alphabet)' mnemonic) vs NONSELECTIVE (nadolol, propranolol, timolol — 'N to Z (β2 with 2nd half of alphabet)') vs COMBINED β+α1 (carvedilol, labetalol — the book's own 'modified suffixes (instead of \"-olol\")' rule) vs NEBIVOLOL (β1 + β3-NO — 'NebivOlol increases NO'). All four mnemonics are the BOOK'S OWN print; the four-lane compression that turns four printed memory hooks into one sorting question is KYP's.",
         "origin": "outside-first-aid", "rationale": "The selectivity rows and all four mnemonic cells are printed; the unified four-lane reading frame is KYP's synthesis.",
         "location": "core.keyIdea + mechanisms[0] + the visual's four fork cards"},
        {"id": "three-caution-patients-frame", "summary": "The THREE CAUTION PATIENTS frame — the printed adverse-effects row read as three patients the β-blocker endangers: THE ASTHMATIC ('asthma/COPD exacerbations' — nonselective β2 blockade unopposes bronchoconstriction; the 'avoid nonselective agents in asthma' management rule is KYP's, flagged — the printed cell names the exacerbation, not the avoidance rule), THE BRITTLE DIABETIC ('masked hypoglycemia' — β2 blockade blunts the liver's glycogenolysis and hides the tachycardia warning sign; the tachycardia-masking reading is KYP's, flagged), and THE COCAINE USER (the printed 'unsubstantiated concern for unopposed α-adrenergic stimulation' note — the controversy the book itself hedges). The cells are printed; the three-patient sort and the management rules are KYP's.",
         "origin": "outside-first-aid", "rationale": "The adverse-effect cells and the cocaine note are printed; the three-patient framing and the avoidance rules are KYP's clinical overlay.",
         "location": "usmle patterns[0] + traps[0-2] + the miniCase + the visual's toxicity strip"},
        {"id": "abrupt-withdrawal-and-pheo-frames", "summary": "Two protocol frames (both NOT printed on this page — flagged wherever used): (1) the ABRUPT-WITHDRAWAL frame — never stop a β-blocker cold (rebound tachycardia, angina, hypertension, arrhythmia; taper over days to weeks) — the block's printed cells carry no withdrawal token; (2) the PHEO α-FIRST frame — in pheochromocytoma, α-blockade before β-blockade (book 243's phenoxybenzamine row is the printed anchor; THIS page prints only the unopposed-α concern in its cocaine note) — a β-blocker first leaves the catecholamine surge on unopposed α1 receptors. Both rules are classic exam material, both absent from the printed cells, both KYP-flagged and anchored to printed lines (phenoxybenzamine row + cocaine note) rather than cited as print.",
         "origin": "outside-first-aid", "rationale": "Neither the taper rule nor the pheo ordering rule prints on book 244; both are clinical-pharmacology standards attached as flagged overlays.",
         "location": "usmle traps[3] + pivots[0] + the visual's caution strip"},
        {"id": "boundary-and-absence-census", "summary": "The boundary + absence census itself: (1) the PH23/PH24 boundary — pdf 266 (book 244) carries the WHOLE β-blockers block (header, roster, ten-row application matrix, adverse row, four-row selectivity subtable, footer); pdf 265 behind carries the two COMPLETED book-243 blocks (only the α-blockers table's phenoxybenzamine row and final row pinned from behind as markers); pdf 267 ahead opens 'Phosphodiesterase inhibitors' (the PENDING next topic) — sourcePages = [266] only. (2) The ABSENCE verification: the task's 'partial agonist/ISA: pindolol, acebutolol' and 'α2+β: none' expectations were verified against the 2026 print — the selectivity subtable carries exactly FOUR groups (β1-selective, nonselective β1=β2, combined β+α1, nebivolol-β3/NO); NO partial-agonist/ISA row (pindolol and acebutolol are ABSENT from the page) and NO α2+β member — documented as verified-absent, never cited as printed. (3) The essential-tremor use the task expected is likewise NOT printed on this page (the printed neurology lane is migraine prophylaxis only) — documented absent, KYP-flagged wherever the classic propranolol-for-tremor teaching appears.",
         "origin": "outside-first-aid", "rationale": "The boundary split, the absence census, and the verified-absent documentation are pipeline curation, not book print.",
         "location": "manifest notes + the visual's boundary strip + recall[5]"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + text layer): the β-blockers block occupies the WHOLE of pdf 266 (book 244) under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner, and prints: the section header 'β-blockers' with the eleven-drug roster 'Atenolol, betaxolol, bisoprolol, carvedilol, esmolol, labetalol, metoprolol, nadolol, nebivolol, propranolol, timolol.'; ONE THREE-COLUMN TABLE (APPLICATION / ACTIONS / NOTES-EXAMPLES) of TEN application rows — 'Angina pectoris' → '↓ heart rate and contractility → ↓ O2 consumption'; 'Glaucoma' → '↓ production of aqueous humor' | 'Timolol'; 'Heart failure' → 'Blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality' | 'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)'; 'Hypertension' → '↓ cardiac output, ↓ renin secretion (due to β1receptor blockade on JG cells)'; 'Hyperthyroidism/thyroid storm' → 'Symptom control (↓ heart rate, ↓ tremor)' | 'Propranolol'; 'Hypertrophic cardiomyopathy' → '↓ heart rate → ↑ filling time, relieving obstruction'; 'Migraine' → '↓ nitric oxide production' | 'Effective for prevention'; 'Myocardial infarction' → '↓ O2 demand (short-term), ↓ mortality (long-term)'; 'Supraventricular tachycardia (eg, atrial fibrillation)' → '↓ AV conduction velocity (class II antiarrhythmic)' | 'Metoprolol, esmolol'; 'Variceal bleeding' → '↓ hepatic venous pressure gradient and portal hypertension (prophylactic use)' | 'Nadolol, propranolol, carvedilol for no portal circulation' — followed by the ADVERSE-EFFECTS row 'Erectile dysfunction, cardiovascular (bradycardia, AV block, HF), CNS (seizures, sleep alterations), dyslipidemia (metoprolol), masked hypoglycemia, asthma/COPD exacerbations' with the printed cocaine note 'Use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation', and the SELECTIVITY subtable of FOUR rows — 'β1-selective antagonists (β1 > β2)—atenolol, betaxolol, bisoprolol, esmolol, metoprolol' | 'Selective antagonists mostly go from A to M (β1 with 1st half of alphabet)'; 'Nonselective antagonists (β1 = β2)—nadolol, propranolol, timolol' | 'NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)'; 'Nonselective β-adrenergic, α1-selective antagonists—carvedilol, labetalol' | 'Nonselective β-adrenergic and α1-selective antagonists have modified suffixes (instead of “-olol”)'; 'Nebivolol combines cardiac-selective β1-adrenergic blockade with stimulation of β3 -receptors (activate NO synthase in the vasculature and ↓ SVR)' | 'NebivOlol increases NO'. RASTER CENSUS: ZERO raster images on pdf 266 (pdfimages -list returns no rows) — the block is PURE TEXT, COPYRIGHTED, never reproduced as artwork; carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION) and conveyed as ONE original KYP selectivity/application map (BetaBlockerMap). ABSENCE VERIFICATION (resolved): the selectivity subtable prints exactly FOUR groups; the partial-agonist/ISA members pindolol and acebutolol are ABSENT from the page, no α2+β member prints, and no essential-tremor row prints (the neurology lane is migraine prophylaxis alone) — all three absentees documented, never cited as printed. BOUNDARY, pinned both ways: pdf 265 (book 243) behind carries the two COMPLETED same-page blocks (PH22 sympatholytics-alpha-2-agonists ABOVE — excluded entirely; PH23 alpha-blockers BELOW — only its phenoxybenzamine row [the α-first pheo anchor] and its final α2-selective mirtazapine row [the no-α2-lane marker] pinned from behind); pdf 267 (book 245) ahead opens 'Phosphodiesterase inhibitors' (the PENDING next topic) — THIS block does NOT extend there; sourcePages = [266] only. CROSS-PAGE ANCHORS (all printed, all verified): pdf 259/book 237 (COMPLETED g-protein-linked-second-messengers, PH16) — the β1 row 'β1 | s | ↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis' and the β2 row 'β2 | s | Vasodilation, bronchodilation (two lungs), ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis, ↓ uterine tone (tocolysis), ↑ aqueous humor production, ↑ cellular K+ uptake' (β1 AND β2 ride Gs; the β2 row alone carries the mechanisms of the asthma exacerbation [bronchodilation blocked], the masked hypoglycemia [glycogenolysis blocked], and the timolol glaucoma effect [aqueous humor production blocked]); pdf 258/book 236 (COMPLETED tissue-distribution-of-adrenergic-receptors, PH15) — the β1 row 'β1 | Heart / Kidney → ↑ heart rate, contractility / ↑ renin secretion' (the JG-cell address) and the β2 row 'β2 | Bronchioles / Cardiac muscle / Liver / Arterial smooth muscle / Pancreas → Bronchodilation / ↑ heart rate, contractility / Glycogenolysis, glucose release / Vasodilation / Stimulation of insulin secretion' (the bronchiole and liver addresses of the two caution patients); pdf 265/book 243 (COMPLETED alpha-blockers, PH23) — the phenoxybenzamine row 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' (the α-first anchor) and the final mirtazapine row (the α2-antagonist mirror this table's subtable has no lane for). KYP extensions flagged wherever they appear: the usmle-attack-layer; the FOUR-LANE SELECTIVITY frame (the four printed mnemonics compressed into one sorting question — the mnemonics are the book's, the compression is KYP's); the THREE CAUTION PATIENTS frame (the asthmatic, the brittle diabetic, the cocaine user — cells printed, avoidance/management rules KYP-flagged); the ABRUPT-WITHDRAWAL taper rule (NOT printed — KYP-flagged); the PHEO α-FIRST ordering rule (NOT printed on either book-243 or book-244 — anchored to the phenoxybenzamine row and the cocaine note, KYP-flagged); the T4→T3 conversion blockade in thyroid storm (NOT printed — the page prints rate and tremor control only, KYP-flagged); the essential-tremor use (NOT printed on this page — KYP-flagged wherever taught); and the boundary + absence census. No copyrighted artwork reproduced; nothing reproduced.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "beta-blockers", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"beta-blockers-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [266], "244", "VISUAL_TABLE", "The β-blockers block's own printed set (the section's sole visual element — the three-zone APPLICATION/ACTIONS/NOTES-EXAMPLES table: ten application rows, the ADVERSE EFFECTS row with its cocaine note, and the four-row SELECTIVITY subtable with the book's own four printed mnemonics)",
       "ONE THREE-ZONE TEXT TABLE (PURE TEXT — ZERO rasters on pdf 266; pdfimages returns no rows; COPYRIGHTED, never reproduced as artwork). Header: 'β-blockers' + the eleven-drug roster. Zone 1 (APPLICATION/ACTIONS/NOTES-EXAMPLES, ten rows): 'Angina pectoris' → '↓ heart rate and contractility → ↓ O2 consumption'; 'Glaucoma' → '↓ production of aqueous humor' | 'Timolol'; 'Heart failure' → 'Blockade of neurohormonal stress → prevention of deleterious cardiac remodeling → ↓ mortality' | 'Bisoprolol, carvedilol, metoprolol (β-blockers curb mortality)'; 'Hypertension' → '↓ cardiac output, ↓ renin secretion (due to β1receptor blockade on JG cells)'; 'Hyperthyroidism/thyroid storm' → 'Symptom control (↓ heart rate, ↓ tremor)' | 'Propranolol'; 'Hypertrophic cardiomyopathy' → '↓ heart rate → ↑ filling time, relieving obstruction'; 'Migraine' → '↓ nitric oxide production' | 'Effective for prevention'; 'Myocardial infarction' → '↓ O2 demand (short-term), ↓ mortality (long-term)'; 'Supraventricular tachycardia (eg, atrial fibrillation)' → '↓ AV conduction velocity (class II antiarrhythmic)' | 'Metoprolol, esmolol'; 'Variceal bleeding' → '↓ hepatic venous pressure gradient and portal hypertension (prophylactic use)' | 'Nadolol, propranolol, carvedilol for no portal circulation'. Zone 2 (ADVERSE EFFECTS): 'Erectile dysfunction, cardiovascular (bradycardia, AV block, HF), CNS (seizures, sleep alterations), dyslipidemia (metoprolol), masked hypoglycemia, asthma/COPD exacerbations' + 'Use of β-blockers for acute cocaine-associated chest pain remains controversial due to unsubstantiated concern for unopposed α-adrenergic stimulation'. Zone 3 (SELECTIVITY, four rows with printed mnemonics): 'β1-selective antagonists (β1 > β2)—atenolol, betaxolol, bisoprolol, esmolol, metoprolol' | 'Selective antagonists mostly go from A to M (β1 with 1st half of alphabet)'; 'Nonselective antagonists (β1 = β2)—nadolol, propranolol, timolol' | 'NonZelective antagonists mostly go from N to Z (β2 with 2nd half of alphabet)'; 'Nonselective β-adrenergic, α1-selective antagonists—carvedilol, labetalol' | 'Nonselective β-adrenergic and α1-selective antagonists have modified suffixes (instead of “-olol”)'; 'Nebivolol combines cardiac-selective β1-adrenergic blockade with stimulation of β3 -receptors (activate NO synthase in the vasculature and ↓ SVR)' | 'NebivOlol increases NO'. Carried VERBATIM as the note's two table blocks and conveyed as ONE original KYP selectivity/application map (the mechanism strip, the four fork cards, the ten-use grid, the caution strip, the boundary strip, the reading-rule footer) — no artwork reproduced.",
       "ORIGINAL_KYP_ADAPTATION", "beta-blocker-map", "the note's two verbatim table blocks (the ten-row application matrix; the adverse-effects + selectivity subtable) + the registry visual's mechanism strip, fork cards, use grid, caution strip, boundary strip, and reading-rule footer"),
]
(ROOT / "content/usmle/manifests/beta-blockers.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/beta-blockers.json").write_text(
    json.dumps({"topicId": "beta-blockers", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "beta-blockers", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + text layer): the β-blockers block's printed visual set is ONE element — the THREE-ZONE APPLICATION/ACTIONS/NOTES-EXAMPLES TABLE (ten application rows + the ADVERSE EFFECTS row with its cocaine note + the four-row SELECTIVITY subtable), PURE TEXT (ZERO rasters on pdf 266 — pdfimages returns no rows; COPYRIGHTED, never reproduced as artwork). The set is carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION — every application, action, notes cell, adverse-effect bucket, selectivity group, and all four printed mnemonic cells are the book's own print, including the 'β-blockers curb mortality' parenthetical, the '(due to β1receptor blockade on JG cells)' mechanism note, the 'for no portal circulation' carvedilol clause, and the 'NebivOlol increases NO' emphasis) and conveyed as ONE original KYP selectivity/application map in the registry visual BetaBlockerMap (THE MECHANISM STRIP — β1 = Gs at the heart/kidney addresses and β2 = Gs at the bronchiole/liver/artery addresses of books 236-237, blocked → ↓ rate, ↓ contractility, ↓ renin, bronchospasm risk, masked hypoglycemia risk; THE FOUR FORK CARDS — β1-SELECTIVE 'A to M' (atenolol, betaxolol, bisoprolol, esmolol, metoprolol), NONSELECTIVE 'N to Z' (nadolol, propranolol, timolol), COMBINED β+α1 'modified suffixes' (carvedilol, labetalol), NEBIVOLOL 'NO' (β1 + β3-NO); THE TEN-USE GRID — angina, glaucoma (timolol), heart failure (bisoprolol, carvedilol, metoprolol), hypertension, hyperthyroidism/thyroid storm (propranolol), hypertrophic cardiomyopathy, migraine prophylaxis, MI, SVT (metoprolol, esmolol), variceal bleeding (nadolol, propranolol, carvedilol); THE CAUTION STRIP — the asthmatic ('asthma/COPD exacerbations'), the brittle diabetic ('masked hypoglycemia'), the cocaine user ('unsubstantiated concern for unopposed α-adrenergic stimulation'), plus bradycardia/AV block, CNS, dyslipidemia (metoprolol), erectile dysfunction, and the KYP-flagged abrupt-withdrawal taper rule; THE BOUNDARY STRIP — the PH23/PH24 boundary pinned both ways and the verified ABSENCES (no ISA/pindolol/acebutolol row, no α2+β member, no essential-tremor row); the reading-rule footer). ABSENCE VERIFICATION: the selectivity subtable prints exactly FOUR groups; pindolol and acebutolol (partial agonists/ISA) are ABSENT, no α2+β member prints, no essential-tremor row prints — documented as verified-absent, never cited as printed. BOUNDARY: pdf 265 (book 243) behind carries the two COMPLETED book-243 blocks (only the α-blockers phenoxybenzamine row and final row pinned from behind); pdf 267 (book 245) ahead opens 'Phosphodiesterase inhibitors' (the PENDING next topic) — the block does NOT extend there; sourcePages = [266] only. KYP extensions flagged wherever they appear: the usmle-attack-layer, the FOUR-LANE SELECTIVITY frame (the four printed mnemonics compressed — the mnemonics are the book's, the compression is KYP's), the THREE CAUTION PATIENTS frame (cells printed, avoidance rules KYP-flagged), the ABRUPT-WITHDRAWAL taper rule and the PHEO α-FIRST ordering rule (both NOT printed — flagged, anchored to the phenoxybenzamine row and the cocaine note), the T4→T3 thyroid-storm conversion blockade (NOT printed — flagged), and the boundary + absence census. No copyrighted artwork reproduced; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "beta-blockers":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv1))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pharmacology {done}/{len(ch['topics'])}{' — CHAPTER COMPLETE' if done==len(ch['topics']) else ''}")
print("PH24 manifest + inventory + flip done")
