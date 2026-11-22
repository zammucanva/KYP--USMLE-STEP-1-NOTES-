#!/usr/bin/env python3
"""PH25 phosphodiesterase inhibitors — manifest + inventory + flip
(Pharmacology 25/43 — the PDE-inhibitors block: the WHOLE of pdf 267, book 245,
the LAST page under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner. The
page behind — pdf 266 / book 244 — is the COMPLETED PH24 beta-blockers page;
only its SELECTIVITY subtable's final rows (the carvedilol/labetalol row, the
modified-suffixes mnemonic, the nebivolol row, the 'NebivOlol increases NO'
mnemonic) and the page footer pinned from behind as boundary markers. The page
ahead — pdf 268 / book 246 — opens the NEW 'PHARMACOLOGY—TOXICITIES AND
ADVERSE EFFECTS' banner (Ingested seafood toxins: scombroid, tetrodotoxin,
ciguatoxin); THIS block does NOT extend there: sourcePages = [267] only — the
AUTONOMIC-DRUGS banner ends with this page).
The page prints its section header, the intro sentence, and ONE four-column
TYPE OF INHIBITOR / MECHANISM OF ACTION / CLINICAL USES / ADVERSE EFFECTS
table of FIVE rows:
THE HEADER — 'Phosphodiesterase inhibitors' + the intro sentence
'Phosphodiesterase (PDE) inhibitors inhibit PDE, which catalyzes the hydrolysis
of cAMP and/or cGMP, and thereby increase cAMP and/or cGMP. These inhibitors
have varying specificity for PDE isoforms and thus have different clinical
uses.'
ROW 1 — NONSPECIFIC PDE INHIBITOR (Theophylline): '↓ cAMP hydrolysis → ↑ cAMP
→ bronchial smooth muscle relaxation → bronchodilation' | 'COPD/asthma (rarely
used)' | 'Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg,
seizures, headache), abdominal pain'.
ROW 2 — PDE-5 INHIBITORS (Sildenafil, vardenafil, tadalafil, avanafil): '↓
hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO
activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills
the penis' | 'Erectile dysfunction / Pulmonary hypertension / Benign prostatic
hyperplasia (tadalafil only)' | 'Facial flushing, headache, dyspepsia,
hypotension in patients taking nitrates; "hot and sweaty," then headache,
heartburn, hypotension' + 'Sildenafil only: cyanopia (blue-tinted vision) via
inhibition of PDE-6 (six) in retina'.
ROW 3 — PDE-4 INHIBITOR (Roflumilast): '↑ cAMP in neutrophils, granulocytes,
and bronchial epithelium' | 'Severe COPD' | 'Abdominal pain, weight loss,
depression, anxiety, insomnia'.
ROW 4 — PDE-3 INHIBITOR (Milrinone): 'In cardiomyocytes: ↑ cAMP → ↑ Ca2+
influx → ↑ ionotropy and chronotropy' + 'In vascular smooth muscle: ↑ cAMP →
MLCK inhibition → vasodilation → ↓ preload and afterload' | 'Acute
decompensated HF with cardiogenic shock (inotrope)' | 'Tachycardia, ventricular
arrhythmias, hypotension' (the book's own 'ionotropy' spelling prints in the
cell — carried verbatim).
ROW 5 — "PLATELET INHIBITORS" (Cilostazol^a, Dipyridamole^b): 'In platelets: ↑
cAMP → inhibition of platelet aggregation' | 'Intermittent claudication /
Stroke or TIA prevention (with aspirin) / Cardiac stress testing
(dipyridamole only, due to coronary vasodilation) / Prevention of coronary
stent restenosis' | 'Nausea, headache, facial flushing, hypotension, abdominal
pain' — plus the TWO printed footnotes: a 'Cilostazol is a PDE-3 inhibitor,
but due to its indications is categorized as a platelet inhibitor together
with dipyridamole.' and b 'Dipyridamole is a nonspecific PDE inhibitor,
leading to inhibition of platelet aggregation. It also prevents adenosine
reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation.'
CENSUS VERIFICATION (the task's expectations, resolved): the PDE-5 roster
prints FOUR members — sildenafil, vardenafil, tadalafil, AND avanafil (the
task's three-name list omitted avanafil; the 2026 page prints it —
documented); NO PDE-1 or PDE-2 row prints (verified absent); NO other
methylxanthine prints (caffeine absent — the nonspecific row names
theophylline alone); NO other PDE-3 member prints (amrinone/inamrinone
absent); and the book's own 'ionotropy' spelling (inotropy) and its own
'(six)' memory parenthetical in 'PDE-6 (six) in retina' are carried verbatim.
RASTER CENSUS: ZERO raster images on pdf 267 (pdfimages -list returns no
rows) — the block is PURE TEXT, COPYRIGHTED, never reproduced as artwork;
carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION)
and conveyed as ONE original KYP isoform-fork map (PdeInhibitorMap).
CROSS-PAGE MECHANISM ANCHORS (all printed, all verified): pdf 259 (book 237,
the COMPLETED PH16 g-protein-linked-second-messengers) prints the β1 row —
'β1 | s | ↑ heart rate, ↑ contractility (one heart), ↑ renin release,
↑ lipolysis' — and the β2 row — 'β2 | s | Vasodilation, bronchodilation (two
lungs), ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis...' (the Gs couple:
the SAME cAMP currency this page's inhibitors preserve at the breakdown
step — β-blockers lower cAMP at the receptor, PDE inhibitors raise it at the
hydrolase), AND the Gs diagram labels themselves — 'Adenylyl cyclase', 'GS
protein', 'ATP', 'Cyclic AMP', 'Protein kinase A' (the printed
receptor→effector→second-messenger chain the PDE step terminates); pdf 266
(book 244, the COMPLETED PH24 beta-blockers) prints the selectivity
subtable's final rows (the carvedilol/labetalol modified-suffix row, the
nebivolol row, the 'NebivOlol increases NO' mnemonic) — the page behind;
pdf 268 (book 246) ahead opens the TOXICITIES banner ('Ingested seafood
toxins', scombroid/tetrodotoxin/ciguatoxin) — THIS block does NOT extend
there; sourcePages = [267] only, and the AUTONOMIC-DRUGS banner ends here.
KYP EXTENSIONS (beyond the block's printed set, flagged wherever they
appear): the usmle-attack-layer (patterns/traps/pivots/mini-case); the
ISOFORM-FORK frame (the numbered 3/4/5 lanes plus the nonspecific pair —
one table, five rows, compressed into one fork question); the
CYCLIC-NUCLEOTIDE-CURRENCY frame (cAMP camp [PDE-3/PDE-4 + the
nonspecifics] vs cGMP camp [PDE-5 alone] — the split the whole table hangs
on; the currency rows print on book 237, the camp split is KYP's); the
NITRATE-SEPARATION protocol (the 24-48-hour nitrate/sildenafil separation
counseling — NOT printed on this page; the page prints only 'hypotension in
patients taking nitrates' — KYP-flagged wherever used); and the boundary +
absence census itself."""
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
L = {259: pages[258].split("\n"), 266: pages[265].split("\n"),
     267: pages[266].split("\n"), 268: pages[267].split("\n")}
P = {259: norm(pages[258]), 266: norm(pages[265]),
     267: norm(pages[266]), 268: norm(pages[267])}
def rng(pg, a, b): return "\n".join(L[pg][a - 1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 245): the printed page number, the Section II marker, the Pharmacology marker, and the standing Autonomic Drugs banner (the page this topic's WHOLE phosphodiesterase-inhibitors block prints on — the LAST page of the banner: every autonomic-drugs topic from drug-effect-modifications to the beta-blockers on book 244 behind shares it; the page ahead, book 246, opens the NEW Toxicities banner)", rng(267, 1, 10), [267]),
    ("The section header + the intro sentence, verbatim — 'Phosphodiesterase inhibitors' + 'Phosphodiesterase (PDE) inhibitors inhibit PDE, which catalyzes the hydrolysis of cAMP and/or cGMP, and thereby increase cAMP and/or cGMP. These inhibitors have varying specificity for PDE isoforms and thus have different clinical uses.' (the whole block in two sentences: the enzyme, the hydrolysis, the currency, and the isoform-specificity principle that sorts the five rows)", rng(267, 12, 14), [267]),
    ("The table frame, verbatim — the four column headers 'TYPE OF INHIBITOR' / 'MECHANISM OF ACTION' / 'CLINICAL USES' / 'ADVERSE EFFECTS' (the frame of the block's class table — a four-column architecture, one column more than the three-column application tables of the autonomic pages behind; five drug-class rows follow)", rng(267, 16, 22), [267]),
    ("Row 1, verbatim — 'Nonspecific PDE inhibitor / Theophylline': '↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation' | 'COPD/asthma (rarely used)' | 'Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain' (the nonspecific row: the one drug with NO isoform number — the methylxanthine, the rarely-used lane; its bronchodilation is the SAME cAMP currency the β2 row of book 237 prints, raised downstream of the receptor instead of at it)", rng(267, 24, 37), [267]),
    ("Row 2, verbatim — 'PDE-5 inhibitors / Sildenafil, vardenafil, tadalafil, avanafil': '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis' | 'Erectile dysfunction / Pulmonary hypertension / Benign prostatic hyperplasia (tadalafil only)' | 'Facial flushing, headache, dyspepsia, hypotension in patients taking nitrates; \"hot and sweaty,\" then headache, heartburn, hypotension' + 'Sildenafil only: cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina' (the cGMP row: FOUR printed members — the task's three-name list omitted avanafil, the 2026 page prints it; the book's own '(six)' parenthetical is its printed memory hook for the PDE-6 cross-inhibition; the nitrate cell is the exam's contraindication token, printed as an adverse effect, never as a rule)", rng(267, 39, 62), [267]),
    ("Row 3, verbatim — 'PDE-4 inhibitor / Roflumilast': '↑ cAMP in neutrophils, granulocytes, and bronchial epithelium' | 'Severe COPD' | 'Abdominal pain, weight loss, depression, anxiety, insomnia' (the PDE-4 row: the anti-inflammatory lane — the cAMP rise in the immune cells of the airway, not the smooth muscle; the neuropsychiatric bucket is the row's caution set)", rng(267, 64, 74), [267]),
    ("Row 4, verbatim — 'PDE-3 inhibitor / Milrinone': 'In cardiomyocytes: ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy' + 'In vascular smooth muscle: ↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload' | 'Acute decompensated HF with cardiogenic shock (inotrope)' | 'Tachycardia, ventricular arrhythmias, hypotension' (the PDE-3 row: ONE drug, TWO addresses — the same isoform at the cardiomyocyte (↑ Ca2+ influx, the inotrope) and at the vascular smooth muscle (MLCK inhibition, ↓ preload and afterload); the book's own 'ionotropy' spelling (inotropy) prints in the cell — an artifact carried verbatim, like the 'β3 -receptors' kerning of book 244)", rng(267, 76, 92), [267]),
    ("Row 5, verbatim — '\"Platelet inhibitors\" / Cilostazol^a / Dipyridamole^b': 'In platelets: ↑ cAMP → inhibition of platelet aggregation' | 'Intermittent claudication / Stroke or TIA prevention (with aspirin) / Cardiac stress testing (dipyridamole only, due to coronary vasodilation) / Prevention of coronary stent restenosis' | 'Nausea, headache, facial flushing, hypotension, abdominal pain' (the fifth row: TWO drugs filed under a QUOTED category name — the quotes around \"Platelet inhibitors\" are the book's own; the mechanism cell is the antiplatelet half of the cAMP currency, and the stress-testing use carries the dipyridamole-only parenthetical with its printed rationale 'due to coronary vasodilation')", rng(267, 94, 113), [267]),
    ("The two printed footnotes, verbatim — a: 'Cilostazol is a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole.' + b: 'Dipyridamole is a nonspecific PDE inhibitor, leading to inhibition of platelet aggregation. It also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation.' (the footnotes resolve the row's taxonomy: cilostazol IS a PDE-3 member filed by indication, and dipyridamole is the NONSPECIFIC member whose second mechanism — adenosine reuptake blockade → ↑ extracellular adenosine → ↑ vasodilation — is the printed basis of its stress-testing use)", rng(267, 115, 121), [267]),
    ("The page footer, verbatim — the book's signature file line (book 245; the page carries the WHOLE phosphodiesterase-inhibitors block — header, intro sentence, five-row four-column class table, and both footnotes — under the one footer)", rng(267, 123, 125), [267]),
    ("The CROSS-PAGE MECHANISM ANCHOR #1, verbatim — the β1 row of the second-messenger table: 'β1 | s | ↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis' (pdf 259 / book 237, the COMPLETED PH16 g-protein-linked-second-messengers, lines 31-35: β1 = the Gs couple — the receptor side of the SAME cAMP currency this page's inhibitors defend at the hydrolysis step; β-blockade lowers cAMP at the receptor, PDE inhibition raises it at the enzyme — the two pages are the two levers on one second messenger)", rng(259, 31, 35), [259]),
    ("The CROSS-PAGE MECHANISM ANCHOR #2, verbatim — the β2 row of the second-messenger table: 'β2 | s | Vasodilation, bronchodilation (two lungs), ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis, ↓ uterine tone (tocolysis), ↑ aqueous humor production, ↑ cellular K+ uptake' (pdf 259 / book 237, lines 37-42: the bronchodilation the theophylline row manufactures WITHOUT touching the receptor — the nonspecific PDE inhibitor raises the same cAMP the β2 agonist raises, one step downstream; the reason theophylline and albuterol are functional teammates and the reason both are asthma drugs)", rng(259, 37, 42), [259]),
    ("The CROSS-PAGE MECHANISM ANCHOR #3, verbatim — the Gs diagram labels of the second-messenger page: 'Adenylyl cyclase ... GS protein ... ATP ... Cyclic AMP ... Protein kinase A' (pdf 259 / book 237, lines 180-202: the printed receptor→effector→second-messenger chain — ligand, GS protein, adenylyl cyclase, ATP, Cyclic AMP, Protein kinase A; the chain this page's enzyme terminates: PDE hydrolyzes the Cyclic AMP the chain mints, and the inhibitors block the hydrolysis — the two pages print the same currency from its mint to its sink)", rng(259, 180, 202), [259]),
    ("The BEHIND-PAGE BOUNDARY, verbatim — the beta-blockers selectivity subtable's final rows: 'Nonselective β-adrenergic, α1-selective antagonists—carvedilol, labetalol' | 'modified suffixes (instead of \"-olol\")' | 'Nebivolol combines cardiac-selective β1-adrenergic blockade with stimulation of β3-receptors (activate NO synthase in the vasculature and ↓ SVR)' | 'NebivOlol increases NO' + the book-244 footer (pdf 266 / book 244, the COMPLETED PH24 beta-blockers, lines 107-119: the page behind — its table EXCLUDED here, only its selectivity subtable's last rows and mnemonic pinned from behind; the β-blockers and the PDE inhibitors are the two levers on the same cAMP currency, on facing pages)", rng(266, 107, 119), [266]),
    ("The BEHIND-PAGE footer marker, verbatim — the book-244 signature file line and the trailing NOTES/EXAMPLES cells (pdf 266 / book 244, lines 121-127: 'FAS1_2026_05-Pharmacology.indd 244' + 'Propranolol' + 'Effective for prevention' — the beta-blockers page's end; the phosphodiesterase-inhibitors block does NOT extend backward into it)", rng(266, 121, 127), [266]),
    ("The AHEAD-PAGE BOUNDARY, verbatim — the NEW banner: '246 / SEC TION II / PHARMACOLOGY / ▶ PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS / Ingested seafood toxins / Toxin actions include histamine release, total block of Na+ channels, or opening of Na+ channels to cause depolarization. / TOXIN / SOURCE / ACTION / SYMPTOMS' (pdf 268 / book 246, lines 1-22: the page ahead opens the Toxicities banner with the seafood-toxin table (scombroid, tetrodotoxin, ciguatoxin) — the PENDING next topics; THIS block does NOT extend there: the whole block (header + intro + five-row table + footnotes + footer) is on pdf 267 alone, sourcePages = [267] only — and the AUTONOMIC-DRUGS banner, which has stood since drug-effect-modifications, ENDS with this page)", rng(268, 1, 22), [268]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"phosphodiesterase-inhibitors: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "phosphodiesterase-inhibitors",
    "title": "Phosphodiesterase Inhibitors",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [267], "bookPages": "245"},
    "sourceEvidence": kept, "visualIds": ["pde-inhibitor-map"],
    "mechanismIds": ["pde-hydrolysis-block-isoform-fork", "pde-isoform-clinical-use-sort"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the block's header + intro + five-row four-column class table + footnotes.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the table; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "isoform-fork-frame", "summary": "The ISOFORM-FORK frame — the five printed rows compressed into one fork question: WHICH PDE does the drug inhibit? The numbered lanes PDE-3 (milrinone — the inotrope; and cilostazol, a PDE-3 member filed by indication under the platelet pair per the printed footnote a), PDE-4 (roflumilast — the airway-inflammation lane), PDE-5 (sildenafil, vardenafil, tadalafil, avanafil — the cGMP lane) — plus the NONSPECIFIC pair (theophylline, the rarely-used methylxanthine; dipyridamole, the platelet row's other member per the printed footnote b). The rows, the isoform numbers, and both footnotes are printed; the fork compression is KYP's.",
         "origin": "outside-first-aid", "rationale": "The five rows, the isoform numbers, and the categorizing footnotes are printed; the unified fork reading is KYP's synthesis.",
         "location": "core.keyIdea + mechanisms[0] + the visual's fork cards"},
        {"id": "cyclic-nucleotide-currency-frame", "summary": "The CYCLIC-NUCLEOTIDE-CURRENCY frame — the cAMP camp (PDE-3, PDE-4, and both nonspecifics: milrinone, roflumilast, theophylline, cilostazol, dipyridamole — ↑ cAMP at one of four addresses: cardiomyocyte, neutrophil/bronchial epithelium, bronchial smooth muscle, platelet) vs the cGMP camp (PDE-5 alone: sildenafil, vardenafil, tadalafil, avanafil — ↓ hydrolysis of cGMP → ↑ cGMP, the NO-enhancing lane). The currency rows print on book 237 ('β1 | s', 'β2 | s' — Gs; 'Adenylyl cyclase', 'GS protein', 'ATP', 'Cyclic AMP'); the camp split that turns one enzyme family into two clinical universes is KYP's.",
         "origin": "outside-first-aid", "rationale": "The currency rows are printed on the completed PH16 page; the camp split is KYP's synthesis.",
         "location": "core.why + mechanisms[0] + the visual's mechanism strip + the mnemonic 'cAMP acts, cGMP relaxes'"},
        {"id": "nitrate-separation-protocol", "summary": "The NITRATE-SEPARATION protocol (NOT printed on this page — flagged wherever used): the page prints only the adverse-effect cell 'hypotension in patients taking nitrates' — the contraindication as a toxicity token, never as a rule; the classic protocol (do not combine; when both are needed, separate the doses — 24+ hours for sildenafil and vardenafil, 48+ hours for tadalafil, given the half-lives; treat the interaction with pressure support, not vasopressors first) is KYP's clinical overlay, attached to the printed cell and flagged.",
         "origin": "outside-first-aid", "rationale": "The printed cell names the interaction; the timing rules and the management are clinical-pharmacology standards attached as a flagged overlay.",
         "location": "usmle traps[1] + the miniCase + the visual's caution strip"},
        {"id": "boundary-and-absence-census", "summary": "The boundary + absence census itself: (1) the PH24/PH25 boundary — pdf 267 (book 245) carries the WHOLE phosphodiesterase-inhibitors block (header, intro, five-row table, footnotes, footer) and is the LAST page of the AUTONOMIC-DRUGS banner; pdf 266 behind carries the COMPLETED PH24 (only its selectivity subtable's final rows and footer pinned from behind); pdf 268 ahead opens the NEW TOXICITIES banner (Ingested seafood toxins) — sourcePages = [267] only. (2) The absence verification: the task's PDE-5 list (sildenafil, tadalafil, vardenafil) missed AVANAFIL — the 2026 page prints FOUR members (documented); NO PDE-1 or PDE-2 row prints; NO other methylxanthine prints (caffeine absent — theophylline alone); NO other PDE-3 member prints (amrinone/inamrinone absent); and the book's own 'ionotropy' spelling and '(six)' parenthetical are carried verbatim, never corrected or cited as standard.",
         "origin": "outside-first-aid", "rationale": "The boundary split, the absence census, and the verified-absent documentation are pipeline curation, not book print.",
         "location": "manifest notes + the visual's boundary strip + recall[4]"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + text layer): the phosphodiesterase-inhibitors block occupies the WHOLE of pdf 267 (book 245), the LAST page under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner (the banner ends here: pdf 268 opens 'PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS'), and prints: the section header 'Phosphodiesterase inhibitors' + the intro sentence 'Phosphodiesterase (PDE) inhibitors inhibit PDE, which catalyzes the hydrolysis of cAMP and/or cGMP, and thereby increase cAMP and/or cGMP. These inhibitors have varying specificity for PDE isoforms and thus have different clinical uses.'; ONE FOUR-COLUMN TABLE (TYPE OF INHIBITOR / MECHANISM OF ACTION / CLINICAL USES / ADVERSE EFFECTS) of FIVE rows — 'Nonspecific PDE inhibitor / Theophylline': '↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation' | 'COPD/asthma (rarely used)' | 'Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain'; 'PDE-5 inhibitors / Sildenafil, vardenafil, tadalafil, avanafil': '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis' | 'Erectile dysfunction / Pulmonary hypertension / Benign prostatic hyperplasia (tadalafil only)' | 'Facial flushing, headache, dyspepsia, hypotension in patients taking nitrates; \"hot and sweaty,\" then headache, heartburn, hypotension' + 'Sildenafil only: cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina'; 'PDE-4 inhibitor / Roflumilast': '↑ cAMP in neutrophils, granulocytes, and bronchial epithelium' | 'Severe COPD' | 'Abdominal pain, weight loss, depression, anxiety, insomnia'; 'PDE-3 inhibitor / Milrinone': 'In cardiomyocytes: ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy / In vascular smooth muscle: ↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload' | 'Acute decompensated HF with cardiogenic shock (inotrope)' | 'Tachycardia, ventricular arrhythmias, hypotension'; '\"Platelet inhibitors\" / Cilostazol^a / Dipyridamole^b': 'In platelets: ↑ cAMP → inhibition of platelet aggregation' | 'Intermittent claudication / Stroke or TIA prevention (with aspirin) / Cardiac stress testing (dipyridamole only, due to coronary vasodilation) / Prevention of coronary stent restenosis' | 'Nausea, headache, facial flushing, hypotension, abdominal pain' — followed by the TWO footnotes: a 'Cilostazol is a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole.'; b 'Dipyridamole is a nonspecific PDE inhibitor, leading to inhibition of platelet aggregation. It also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation.' RASTER CENSUS: ZERO raster images on pdf 267 (pdfimages -list returns no rows) — the block is PURE TEXT, COPYRIGHTED, never reproduced as artwork; carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION) and conveyed as ONE original KYP isoform-fork map (PdeInhibitorMap). ABSENCE VERIFICATION (resolved): the PDE-5 roster prints FOUR members (sildenafil, vardenafil, tadalafil, avanafil — the task's list omitted avanafil, documented); NO PDE-1 or PDE-2 row prints; NO other methylxanthine prints (caffeine absent); NO other PDE-3 member prints (amrinone/inamrinone absent); the book's own 'ionotropy' spelling and its own '(six)' parenthetical carry verbatim — documented, never cited as corrected. BOUNDARY, pinned both ways: pdf 266 (book 244) behind carries the COMPLETED PH24 beta-blockers block (EXCLUDED here; only its selectivity subtable's final rows — the carvedilol/labetalol row, the nebivolol row, the 'NebivOlol increases NO' mnemonic — and its footer pinned from behind); pdf 268 (book 246) ahead opens the NEW 'PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS' banner (Ingested seafood toxins — the PENDING next topics) — THIS block does NOT extend there; sourcePages = [267] only; the AUTONOMIC-DRUGS banner, standing since drug-effect-modifications, ENDS with this page. CROSS-PAGE ANCHORS (all printed, all verified): pdf 259/book 237 (COMPLETED g-protein-linked-second-messengers, PH16) — the β1 row 'β1 | s | ↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis' and the β2 row 'β2 | s | Vasodilation, bronchodilation (two lungs), ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis...' (the Gs couple — the receptor-side levers on the same cAMP currency), AND the Gs diagram labels 'Adenylyl cyclase / GS protein / ATP / Cyclic AMP / Protein kinase A' (the printed mint of the currency this page's enzyme is the sink of). KYP extensions flagged wherever they appear: the usmle-attack-layer; the ISOFORM-FORK frame (the fork compression is KYP's; the rows, numbers, and footnotes are printed); the CYCLIC-NUCLEOTIDE-CURRENCY frame (the camp split is KYP's; the currency rows print on book 237); the NITRATE-SEPARATION protocol (NOT printed — the page prints only 'hypotension in patients taking nitrates'; flagged wherever the timing rules appear); and the boundary + absence census. No copyrighted artwork reproduced; nothing reproduced.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "phosphodiesterase-inhibitors", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"phosphodiesterase-inhibitors-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [267], "245", "VISUAL_TABLE", "The phosphodiesterase-inhibitors block's own printed set (the section's sole visual element — the four-column TYPE OF INHIBITOR/MECHANISM OF ACTION/CLINICAL USES/ADVERSE EFFECTS class table of five rows, plus the two categorizing footnotes)",
       "ONE FOUR-COLUMN TEXT TABLE + TWO FOOTNOTES (PURE TEXT — ZERO rasters on pdf 267; pdfimages returns no rows; COPYRIGHTED, never reproduced as artwork). Header: 'Phosphodiesterase inhibitors' + the intro sentence 'Phosphodiesterase (PDE) inhibitors inhibit PDE, which catalyzes the hydrolysis of cAMP and/or cGMP, and thereby increase cAMP and/or cGMP. These inhibitors have varying specificity for PDE isoforms and thus have different clinical uses.' Rows (TYPE / MECHANISM / USES / ADVERSE): 'Nonspecific PDE inhibitor / Theophylline': '↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation' | 'COPD/asthma (rarely used)' | 'Cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain'. 'PDE-5 inhibitors / Sildenafil, vardenafil, tadalafil, avanafil': '↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis' | 'Erectile dysfunction / Pulmonary hypertension / Benign prostatic hyperplasia (tadalafil only)' | 'Facial flushing, headache, dyspepsia, hypotension in patients taking nitrates; \"hot and sweaty,\" then headache, heartburn, hypotension' + 'Sildenafil only: cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina'. 'PDE-4 inhibitor / Roflumilast': '↑ cAMP in neutrophils, granulocytes, and bronchial epithelium' | 'Severe COPD' | 'Abdominal pain, weight loss, depression, anxiety, insomnia'. 'PDE-3 inhibitor / Milrinone': 'In cardiomyocytes: ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy / In vascular smooth muscle: ↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload' | 'Acute decompensated HF with cardiogenic shock (inotrope)' | 'Tachycardia, ventricular arrhythmias, hypotension'. '\"Platelet inhibitors\" / Cilostazol^a / Dipyridamole^b': 'In platelets: ↑ cAMP → inhibition of platelet aggregation' | 'Intermittent claudication / Stroke or TIA prevention (with aspirin) / Cardiac stress testing (dipyridamole only, due to coronary vasodilation) / Prevention of coronary stent restenosis' | 'Nausea, headache, facial flushing, hypotension, abdominal pain'. Footnotes: a 'Cilostazol is a PDE-3 inhibitor, but due to its indications is categorized as a platelet inhibitor together with dipyridamole.'; b 'Dipyridamole is a nonspecific PDE inhibitor, leading to inhibition of platelet aggregation. It also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation.' Carried VERBATIM as the note's two table blocks and conveyed as ONE original KYP isoform-fork map (the mechanism strip, the isoform fork cards, the nonspecific pair, the use grid, the caution strip, the boundary strip, the reading-rule footer) — no artwork reproduced.",
       "ORIGINAL_KYP_ADAPTATION", "pde-inhibitor-map", "the note's two verbatim table blocks (the five-row class table; the footnotes table) + the registry visual's mechanism strip, fork cards, nonspecific pair, use grid, caution strip, boundary strip, and reading-rule footer"),
]
(ROOT / "content/usmle/manifests/phosphodiesterase-inhibitors.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/phosphodiesterase-inhibitors.json").write_text(
    json.dumps({"topicId": "phosphodiesterase-inhibitors", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "phosphodiesterase-inhibitors", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + text layer): the phosphodiesterase-inhibitors block's printed visual set is ONE element — the FOUR-COLUMN TYPE OF INHIBITOR/MECHANISM OF ACTION/CLINICAL USES/ADVERSE EFFECTS TABLE of five rows + its TWO categorizing footnotes, PURE TEXT (ZERO rasters on pdf 267 — pdfimages returns no rows; COPYRIGHTED, never reproduced as artwork). The set is carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION — every type, mechanism, use, and adverse cell is the book's own print, including the 'COPD/asthma (rarely used)' rank, the '(tadalafil only)' parenthetical, the '(dipyridamole only, due to coronary vasodilation)' clause, the 'hypotension in patients taking nitrates' token, the '\"hot and sweaty,\"' quote, the book's own 'ionotropy' spelling, and its own '(six)' parenthetical of 'PDE-6 (six) in retina') and conveyed as ONE original KYP isoform-fork map in the registry visual PdeInhibitorMap (THE MECHANISM STRIP — PDE catalyzes the hydrolysis of cAMP and/or cGMP; inhibit PDE → ↑ cAMP and/or ↑ cGMP; the currency rows print on book 237 [Gs → adenylyl cyclase → ATP → Cyclic AMP] — the camp split [cAMP vs cGMP] is KYP's; THE ISOFORM FORK CARDS — PDE-3 [milrinone: the inotrope; two addresses: cardiomyocyte ↑ Ca2+ influx, vascular smooth muscle MLCK inhibition], PDE-4 [roflumilast: the airway-inflammation lane], PDE-5 [sildenafil, vardenafil, tadalafil, avanafil: the cGMP lane]); THE NONSPECIFIC PAIR — theophylline (the rarely-used methylxanthine) and dipyridamole (the platelet row's other member, per the printed footnote b); THE USE GRID — ED / pulmonary hypertension / BPH-tadalafil-only (PDE-5), severe COPD (PDE-4), COPD/asthma rarely used (theophylline), acute decompensated HF with cardiogenic shock (milrinone), intermittent claudication / stroke-or-TIA prevention / cardiac stress testing dipyridamole-only / stent-restenosis prevention (the platelet pair); THE CAUTION STRIP — 'hypotension in patients taking nitrates' (the nitrate interaction, printed as an adverse cell; the 24-48h separation protocol is KYP-flagged), cyanopia sildenafil-only via PDE-6 (six) in retina, ventricular arrhythmias under milrinone, depression/anxiety/insomnia under roflumilast, cardiotoxicity + neurotoxicity under theophylline; THE BOUNDARY STRIP — the PH24/PH25 split pinned both ways, the AUTONOMIC-DRUGS-banner-end finding, and the verified absences [no PDE-1/PDE-2 rows, no caffeine, no amrinone; the PDE-5 roster prints FOUR members — the task's list omitted avanafil]; the reading-rule footer). ABSENCE VERIFICATION: no PDE-1 or PDE-2 row prints, no other methylxanthine prints (caffeine absent), no other PDE-3 member prints (amrinone/inamrinone absent) — documented as verified-absent, never cited as printed. BOUNDARY: pdf 266 (book 244) behind carries the COMPLETED PH24 beta-blockers block (EXCLUDED; only its selectivity subtable's final rows and footer pinned from behind); pdf 268 (book 246) ahead opens the TOXICITIES banner (Ingested seafood toxins — the PENDING next topics) — the block does NOT extend there; sourcePages = [267] only; the AUTONOMIC-DRUGS banner ends with this page. KYP extensions flagged wherever they appear: the usmle-attack-layer, the ISOFORM-FORK frame (the fork compression is KYP's; the rows, numbers, and footnotes are printed), the CYCLIC-NUCLEOTIDE-CURRENCY frame (the camp split is KYP's; the currency rows print on book 237), the NITRATE-SEPARATION protocol (NOT printed — the page prints only 'hypotension in patients taking nitrates'; flagged wherever the timing rules appear), and the boundary + absence census. No copyrighted artwork reproduced; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "phosphodiesterase-inhibitors":
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
print("PH25 manifest + inventory + flip done")
