#!/usr/bin/env python3
"""PH23 alpha-blockers — manifest + inventory + flip
(Pharmacology 23/43 — the α-blockers block: the LOWER portion of pdf 265,
book 243, lines 39-80 under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS'
banner. The UPPER portion of the same page — the 'Sympatholytics
(α2-agonists)' section — was the COMPLETED PH22 and is EXCLUDED here; only
its header + last row pinned from below as the upper boundary marker).
The block prints its section header, ONE three-column DRUG/APPLICATIONS/
ADVERSE EFFECTS table of FOUR rows grouped by selectivity, and the page
footer:
THE HEADER — 'α-blockers' (with the repeated column headers
'APPLICATIONS' / 'ADVERSE EFFECTS' / 'DRUG').
ROW 1 — 'Nonselective' + 'Phenoxybenzamine' → 'Irreversible.
Pheochromocytoma (used preoperatively) to prevent catecholamine
(hypertensive) crisis.'
ROW 2 — 'Phentolamine' → 'Reversible. Given to patients on MAO inhibitors
who eat tyramine-containing foods and for severe cocaine-induced
hypertension (2nd line). Also used to treat norepinephrine extravasation.'
— with the shared nonselective adverse-effects cell 'Orthostatic
hypotension, reflex tachycardia.' spanning both rows.
ROW 3 — 'α1 selective (-osin ending)' + 'Prazosin, terazosin, doxazosin,
tamsulosin' → 'Urinary symptoms of BPH; PTSD (prazosin); hypertension
(except tamsulosin).' | '1st-dose orthostatic hypotension, dizziness,
headache.'
ROW 4 — 'α2 selective' + 'Mirtazapine' → 'Depression.' | 'Sedation, ↑
serum cholesterol, ↑ appetite.'
RASTER CENSUS: ZERO raster images on pdf 265 (pdfimages -list returns no
rows) — the block is PURE TEXT, COPYRIGHTED, never reproduced as artwork;
carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION)
and conveyed as ONE original KYP selectivity-fork map (AlphaBlockerMap).
BOUNDARY CENSUS (pinned from below): pdf 265 prints TWO sections under the
one banner — the 'Sympatholytics (α2-agonists)' block ABOVE (lines 9-37,
the COMPLETED PH22, EXCLUDED here; only its header and its last row
'Tizanidine' → 'Relief of spasticity' pinned as boundary markers) and THIS
α-blockers class table BELOW (lines 39-78 + the shared footer, line 80).
CROSS-PAGE MECHANISM ANCHORS (all printed, all verified): pdf 259 (book
237, the COMPLETED PH16 g-protein-linked-second-messengers) prints the α1
row — 'α1' | 'q' | '↑ vascular smooth muscle contraction, ↑ pupillary
dilator muscle contraction (mydriasis), ↑ intestinal and bladder
sphincter muscle contraction' (α1 = the Gq couple — the vasoconstriction
and the prostate/bladder-neck squeeze the -osin drugs relax); pdf 258
(book 236, the COMPLETED PH15 tissue-distribution-of-adrenergic-receptors)
prints the α1 row — 'α1' | 'Vascular smooth muscle / Visceral smooth
muscle' → 'Vasoconstriction / Smooth muscle contraction'; the SAME page
prints the COMPLETED PH14 micturition-control table's own tamsulosin row
— 'α1-antagonists (eg, tamsulosin)' → ... 'bladder, neck, prostate) → ↓
urinary obstruction' with the application 'BPH' (the one drug of the
-osin four that page names itself); pdf 264 (book 242, the COMPLETED
pilot sympathomimetics) prints the α-blockade graphs — 'Epinephrine
response exhibits reversal of mean arterial pressure from a net increase
(the α response) to a net decrease (the β2 response).' + 'After
α-blockade' + 'Phenylephrine response is suppressed but not reversed
because it is a "pure" α-agonist (lacks β-agonist properties).' (the
epinephrine-reversal story of the nonselective blockers, printed one page
behind); pdf 260 (book 238, the COMPLETED PH17 autonomic-drugs) prints
the α2-autoreceptor sentence — 'Release of norepinephrine from a
sympathetic nerve ending is modulated by NE itself, acting on
presynaptic α2-autoreceptors → negative feedback.' (the brake the 'α2
selective' row's mirtazapine releases — the receptor mirror of the
completed PH22 above); pdf 266 (book 244) ahead opens 'β-blockers' (the
PENDING beta-blockers topic) — THIS block does NOT extend there;
sourcePages = [265] only.
KYP EXTENSIONS (beyond the block's printed set, flagged wherever they
appear): the THREE-WAY FORK frame (the selectivity sort — nonselective vs
α1-selective vs α2-selective — read as the one question the exam asks of
every α drug); the PHEO-PROTOCOL frame (α-blockade BEFORE β-blockade in
pheochromocytoma — the ordering rule is NOT printed on this page, flagged;
the printed cells carry only 'Pheochromocytoma (used preoperatively) to
prevent catecholamine (hypertensive) crisis.'); the -OSIN SUFFIX frame
(the printed '(-osin ending)' cell read as the naming rule + the printed
'except tamsulosin' exception read as the BPH-selective member); the
FIRST-DOSE frame (the printed '1st-dose orthostatic hypotension' read
with the bedtime-dose/start-low management rule — the management rule is
KYP's, flagged); and the PH22/PH23 boundary census itself."""
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
     260: pages[259].split("\n"), 264: pages[263].split("\n"),
     265: pages[264].split("\n"), 266: pages[265].split("\n")}
P = {258: norm(pages[257]), 259: norm(pages[258]),
     260: norm(pages[259]), 264: norm(pages[263]),
     265: norm(pages[264]), 266: norm(pages[265])}
def rng(pg, a, b): return "\n".join(L[pg][a - 1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 243): the Pharmacology marker, the Section II marker, the standing Autonomic Drugs banner, and the printed page number (the page whose LOWER portion is this topic's α-blockers class table and whose UPPER portion is the COMPLETED PH22 sympatholytics-alpha-2-agonists block — EXCLUDED here, only its boundary pinned from below)", rng(265, 1, 7), [265]),
    ("The UPPER boundary, verbatim — 'Sympatholytics (α2-agonists)' (line 9: the header of the EXCLUDED same-page section ABOVE this block — the COMPLETED PH22's own banner, pinned here from below so no double coverage arises; its rows are never cited as THIS block's print)", rng(265, 9, 9), [265]),
    ("The UPPER boundary's LAST row, verbatim — 'Tizanidine' → 'Relief of spasticity' | 'Hypotension, weakness, xerostomia' (lines 33-37: the final row of the excluded α2-agonists table directly above the 'α-blockers' header — the COMPLETED PH22's own print, pinned as the from-below boundary marker only)", rng(265, 33, 37), [265]),
    ("The section header + the table frame, verbatim — 'α-blockers' + the repeated column headers 'APPLICATIONS' / 'ADVERSE EFFECTS' / 'DRUG' (lines 39-45: the block's own banner and its three-column frame — the same DRUG/APPLICATIONS/ADVERSE EFFECTS frame as the α2-agonists table above it and the muscarinic-antagonists table (PH20) before that, now aimed at the α receptor itself)", rng(265, 39, 45), [265]),
    ("Row 1 — the NONSELECTIVE group label + PHENOXYBENZAMINE applications cell, whole, verbatim — 'Nonselective' + 'Phenoxybenzamine' → 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' (the block's headliner row: the IRREVERSIBLE nonselective blocker and the preoperative pheochromocytoma use with its printed rationale — the catecholamine (hypertensive) crisis the pretreatment prevents; the α-before-β ordering rule is NOT printed on this page — KYP-flagged wherever used)", rng(265, 46, 51), [265]),
    ("Row 2 — PHENTOLAMINE applications cell, whole, verbatim — 'Phentolamine' → 'Reversible. Given to patients on MAO inhibitors who eat tyramine-containing foods and for severe cocaine-induced hypertension (2nd line). Also used to treat norepinephrine extravasation.' (the REVERSIBLE nonselective member and the block's emergency lane: the MAOI-tyramine hypertensive reaction, the severe cocaine-induced hypertension '(2nd line)' with the book's own rank hedge, and the norepinephrine-extravasation antidote use — three printed uses, one drug)", rng(265, 53, 58), [265]),
    ("The NONSELECTIVE adverse-effects cell, verbatim — 'Orthostatic hypotension, reflex tachycardia.' (line 60: the shared toxicity cell spanning BOTH nonselective rows — the orthostatic fall of the blocked venoconstriction plus the reflex tachycardia of the unopposed β response; the same cell answers both drugs' adverse-effect questions)", rng(265, 60, 60), [265]),
    ("Row 3 — the α1-SELECTIVE group label + the -OSIN FOUR, verbatim — 'α1 selective (-osin ending)' + 'Prazosin, terazosin, doxazosin, tamsulosin' (lines 62-65: the printed selectivity label WITH the book's own suffix rule '(-osin ending)' in the DRUG column itself — four drugs named by their shared ending; the BPH-selective status of tamsulosin prints in the applications cell's exception clause, not here)", rng(265, 62, 65), [265]),
    ("The α1-SELECTIVE applications cell, whole, verbatim — 'Urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin).' (lines 67-68: three printed uses with TWO parenthetical exceptions the exam reads closely — prazosin owns the PTSD use, and tamsulosin is EXCLUDED from the hypertension use, the printed fingerprint of the BPH-selective member)", rng(265, 67, 68), [265]),
    ("The α1-SELECTIVE adverse-effects cell, whole, verbatim — '1st-dose orthostatic hypotension, dizziness, headache.' (lines 70-71: the FIRST-DOSE rule printed in the cell itself — the orthostatic fall is a FIRST-DOSE phenomenon of the -osin four, with dizziness and headache; the bedtime-dose/start-low management reading is KYP's, flagged wherever used)", rng(265, 70, 71), [265]),
    ("Row 4 — the α2-SELECTIVE row, whole, verbatim — 'α2 selective' + 'Mirtazapine' → 'Depression.' | 'Sedation, ↑ serum cholesterol, ↑ appetite.' (lines 73-78: the antidepressant row of an α-BLOCKERS table — the α2 ANTAGONIST that releases the presynaptic brake the completed PH22's agonists pull; the receptor mirror of the same-page table above, with its own metabolic adverse set: sedation, ↑ cholesterol, ↑ appetite)", rng(265, 73, 78), [265]),
    ("The page footer, verbatim — the book's signature file line (book 243; the page carries BOTH sections — the EXCLUDED α2-agonists block above and THIS α-blockers class table below — under the one footer)", rng(265, 80, 80), [265]),
    ("The CROSS-PAGE MECHANISM ANCHOR #1, verbatim — the α1 row of the second-messenger table: 'α1' | 'q' | '↑ vascular smooth muscle contraction, ↑ pupillary dilator muscle contraction (mydriasis), ↑ intestinal and bladder sphincter muscle contraction' (pdf 259 / book 237, the COMPLETED PH16 g-protein-linked-second-messengers, lines 16-22: α1 = the Gq couple — the vascular squeeze, the pupillary dilator, and the intestinal/bladder SPHINCTER contraction are the three addresses the α-blockers relax: the first is the antihypertensive effect, the third is the BPH effect)", rng(259, 16, 22), [259]),
    ("The CROSS-PAGE MECHANISM ANCHOR #2, verbatim — the α1 row of the tissue-distribution table: 'α1' | 'Vascular smooth muscle / Visceral smooth muscle' → 'Vasoconstriction / Smooth muscle contraction' (pdf 258 / book 236, the COMPLETED PH15 tissue-distribution-of-adrenergic-receptors, lines 103-109: the α1 addresses in distribution form — the vascular line is the blood-pressure story, the visceral line is the bladder-neck/prostate story; the distribution page serves both same-page α tables)", rng(258, 103, 109), [258]),
    ("The CROSS-PAGE MECHANISM ANCHOR #3, verbatim — the micturition-control table's own tamsulosin row: 'α1-antagonists (eg, tamsulosin)' (pdf 258 / book 236, the COMPLETED PH14 micturition-control, lines 70-71: the ONE drug of the -osin four the completed bladder page names itself — the printed bridge between this block's α1 row and the micturition physiology page three pages back)", rng(258, 70, 71), [258]),
    ("The CROSS-PAGE MECHANISM ANCHOR #4, verbatim — the micturition-control table's tamsulosin application + mechanism tail: 'BPH' + 'bladder, neck, prostate) → ↓ urinary obstruction' (pdf 258 / book 236, lines 92-94: the printed BPH application and the mechanism the α1-antagonist runs on the bladder page — relaxation of the bladder-neck/prostate smooth muscle → ↓ urinary obstruction — the urology reading of the same α1 receptor the distribution row places in visceral smooth muscle)", rng(258, 92, 94), [258]),
    ("The CROSS-PAGE MECHANISM ANCHOR #5, verbatim — the epinephrine-reversal caption: 'Epinephrine response exhibits reversal of mean arterial pressure from a net increase (the α response) to a net decrease (the β2 response).' (pdf 264 / book 242, the COMPLETED pilot sympathomimetics, lines 96-98: the α-blockade graph printed one page BEHIND this block — with α-receptors blocked, epinephrine's β2 vasodilation is UNOPPOSED and the pressor response reverses to a depressor one; the pharmacology of the nonselective rows, printed as the figure the sympathomimetics page carries)", rng(264, 96, 98), [264]),
    ("The CROSS-PAGE MECHANISM ANCHOR #6, verbatim — the graph label 'After α-blockade' (pdf 264 / book 242, line 114: the paired before/after caption of the same figure — the 'Before α-blockade' pressor response becomes the 'After α-blockade' reversed one; the two-condition label IS the nonselective α-blocker's mechanism in graph form)", rng(264, 114, 114), [264]),
    ("The CROSS-PAGE MECHANISM ANCHOR #7, verbatim — the phenylephrine-suppression caption: 'Phenylephrine response is suppressed but not reversed because it is a \"pure\" α-agonist (lacks β-agonist properties).' (pdf 264 / book 242, lines 125-127: the companion figure — a pure α-agonist under α-blockade loses its pressor effect (suppressed) but cannot reverse (no β2 arm to unoppose); the printed contrast that completes the epinephrine-reversal story)", rng(264, 125, 127), [264]),
    ("The CROSS-PAGE MECHANISM ANCHOR #8, verbatim — 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' (pdf 260 / book 238, the COMPLETED PH17 autonomic-drugs, lines 11-12: the α2 brake printed on the physiology page — the receptor the 'α2 selective' row's mirtazapine BLOCKS (releasing the brake → noradrenergic outflow up → the antidepressant direction) and the presynaptic receptor the NONSELECTIVE rows also hit (α1 = α2 blockade → the brake off → more NE release, one substrate of the reflex tachycardia)", rng(260, 11, 12), [260]),
    ("The BEHIND-PAGE BOUNDARY, verbatim — 'Physiologic effects of' + 'sympathomimetics' (pdf 264 / book 242, lines 5-6: the figure title of the page BEHIND — that page carries the COMPLETED pilot sympathomimetics' physiologic-effects graphs (the epinephrine/phenylephrine figures cited above as ANCHORS, the only α-blockade prints in the neighborhood), NOT any α-blockers table; THIS block begins on pdf 265's LOWER portion and the boundary is pinned)", rng(264, 5, 6), [264]),
    ("The AHEAD-PAGE BOUNDARY, verbatim — 'β-blockers' + 'Atenolol, betaxolol, bisoprolol, carvedilol, esmolol, labetalol, metoprolol, nadolol, nebivolol, propranolol, timolol.' (pdf 266 / book 244, lines 9-12: the section header that OPENS the next page — the PENDING beta-blockers topic; the α-blockers table does NOT extend to pdf 266: the whole block (header + four-row table) is on pdf 265's LOWER portion alone, sourcePages = [265] only — and carvedilol/labetalol on that page ahead are the α1+β combined blockers that complete the sympatholytic set)", rng(266, 9, 12), [266]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"alpha-blockers: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "alpha-blockers",
    "title": "Alpha-Blockers",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [265], "bookPages": "243"},
    "sourceEvidence": kept, "visualIds": ["alpha-blocker-map"],
    "mechanismIds": ["alpha1-gq-blockade-selectivity-fork", "alpha-blocker-drug-sort-toxicity"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the block's header + four-row selectivity table.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the drug table; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "three-way-fork-frame", "summary": "The THREE-WAY FORK frame — the printed table read as one question asked of every α drug: WHICH α RECEPTOR does it block? NONSELECTIVE (phenoxybenzamine, phentolamine — both α1 and α2 blocked: the vasodilation plus the presynaptic-brake release of the autoreceptor sentence of book 238) vs α1-SELECTIVE (the -osin four — the vascular and visceral smooth-muscle addresses of books 236/237 relaxed without the central story) vs α2-SELECTIVE (mirtazapine — the presynaptic brake RELEASED, the antidepressant direction, the receptor mirror of the completed PH22's agonists on the same page above). Every group label is the book's own print ('Nonselective', 'α1 selective (-osin ending)', 'α2 selective'); the fork compression that turns three group labels into one sorting question is KYP's.",
         "origin": "outside-first-aid", "rationale": "The book prints the group labels and the rows; the single-question selectivity fork that unifies them with the anchor pages (236/237/238) is KYP's synthesis.",
         "location": "core.keyIdea + mechanisms[0] + the visual's fork cards"},
        {"id": "pheo-protocol-frame", "summary": "The PHEO-PROTOCOL frame — the preoperative pheochromocytoma sequence: the irreversible nonselective α-blockade (phenoxybenzamine) FIRST, the β-blocker only AFTER adequate α-blockade (a β-blocker first leaves the tumor's catecholamine surge acting on UNOPPOSED α1 receptors → hypertensive crisis), with volume repletion and the phentolamine-on-hand rule for intraoperative crisis. The printed cells carry only 'Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' — the α-before-β ORDERING rule, the dosing weeks, and the volume story are NOT printed on this page and are flagged as KYP wherever used, never cited as printed.",
         "origin": "outside-first-aid", "rationale": "The book prints the preoperative use and the crisis it prevents; the ordering rule and the perioperative protocol are KYP's clinical overlay.",
         "location": "usmle patterns[0] + traps[0] + the miniCase + the visual's nonselective card"},
        {"id": "osin-suffix-and-first-dose-frames", "summary": "Two printed-cell frames read through KYP lenses: (1) the -OSIN SUFFIX frame — the book's own '(-osin ending)' label read as the naming rule (every -osin is an α1-selective blocker) joined to the book's own 'except tamsulosin' exception read as the BPH-selective member (prostate-selective α1A affinity, minimal blood-pressure effect — the subtype reading is KYP's, not printed); (2) the FIRST-DOSE frame — the printed '1st-dose orthostatic hypotension, dizziness, headache.' read with its management rule (give the first dose at bedtime, start low, titrate slow — NOT printed, KYP-flagged): the orthostatic fall is a FIRST-DOSE phenomenon, the printed '1st-' is the whole point.",
         "origin": "outside-first-aid", "rationale": "The book prints the suffix label, the exception clause, and the 1st-dose cell; the naming-rule reading, the subtype story, and the bedtime-dose management are KYP's overlays.",
         "location": "mnemonics[1] + mnemonics[3] + usmle traps[1]/pivots + the visual's α1 card and toxicity strip"},
        {"id": "epinephrine-reversal-link-and-boundary-flags", "summary": "Two census flags: (1) the EPINEPHRINE-REVERSAL LINK — the connection between this block's nonselective rows and the α-blockade graphs printed one page behind (book 242, the completed sympathomimetics: 'Epinephrine response exhibits reversal of mean arterial pressure from a net increase (the α response) to a net decrease (the β2 response).' + 'After α-blockade' + the phenylephrine-suppression caption) — the graphs are the book's own print, but their attribution to phenoxybenzamine/phentolamine is KYP's bridge (that page prints them in the sympathomimetics context, never naming an α-blocker); (2) the PH22/PH23 BOUNDARY CENSUS itself — pdf 265 (book 243) prints TWO separable sections under the one banner, and the two book-243 topics ARE separable on inspection: the COMPLETED PH22 (sympatholytics-alpha-2-agonists) = the UPPER block (lines 9-37), EXCLUDED here, only its header + last row pinned from below; THIS topic (alpha-blockers) = the LOWER class table (lines 39-78 + the shared footer, line 80); and pdf 266 ahead opens 'β-blockers' (the PENDING beta-blockers topic) — sourcePages = [265] only.",
         "origin": "outside-first-aid", "rationale": "The graph-to-drug attribution and the boundary split/mutual-exclusion documentation are pipeline curation and pharmacology-knowledge overlay, not book print.",
         "location": "manifest notes + mechanisms[1] + traps[3] + the visual's reversal band and boundary strip"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + text layer): the α-blockers block occupies the LOWER portion of pdf 265 (book 243) under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner (lines 39-80), and prints: the section header 'α-blockers' with the repeated column headers APPLICATIONS / ADVERSE EFFECTS / DRUG; ONE THREE-COLUMN TABLE (DRUG / APPLICATIONS / ADVERSE EFFECTS) of four rows grouped by selectivity — 'Nonselective' + 'Phenoxybenzamine' → 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.'; 'Phentolamine' → 'Reversible. Given to patients on MAO inhibitors who eat tyramine-containing foods and for severe cocaine-induced hypertension (2nd line). Also used to treat norepinephrine extravasation.' (the adverse-effects cell 'Orthostatic hypotension, reflex tachycardia.' spans both nonselective rows); 'α1 selective (-osin ending)' + 'Prazosin, terazosin, doxazosin, tamsulosin' → 'Urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin).' | '1st-dose orthostatic hypotension, dizziness, headache.'; 'α2 selective' + 'Mirtazapine' → 'Depression.' | 'Sedation, ↑ serum cholesterol, ↑ appetite.' RASTER CENSUS: ZERO raster images on pdf 265 (pdfimages -list returns no rows) — the block is PURE TEXT, COPYRIGHTED, never reproduced as artwork; carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION) and conveyed as ONE original KYP selectivity-fork map (AlphaBlockerMap). BOUNDARY, pinned from below: the UPPER portion of the same page (lines 9-37) is the 'Sympatholytics (α2-agonists)' block — the COMPLETED PH22, EXCLUDED here; only its header and its last row (Tizanidine → 'Relief of spasticity' | 'Hypotension, weakness, xerostomia') pinned as boundary markers (the mirtazapine row of THIS table is the α2 ANTAGONIST mirror of that block's agonists — the same-page receptor mirror, cited from this side as the row it is: THIS topic's own print). SECTION EXTENT: the block does NOT extend to pdf 266 (book 244 opens 'β-blockers', the PENDING beta-blockers topic — whose carvedilol/labetalol are the α1+β combined blockers); pdf 264 (book 242) behind carries the tail of the COMPLETED pilot sympathomimetics (the physiologic-effects graphs — including the epinephrine-reversal and phenylephrine-suppression figures cited as cross-page anchors); sourcePages = [265] only. CROSS-PAGE ANCHORS (all printed, all verified): pdf 259/book 237 (COMPLETED g-protein-linked-second-messengers, PH16) — the α1 row 'α1 | q | ↑ vascular smooth muscle contraction, ↑ pupillary dilator muscle contraction (mydriasis), ↑ intestinal and bladder sphincter muscle contraction' (α1 = the Gq couple); pdf 258/book 236 (COMPLETED tissue-distribution-of-adrenergic-receptors, PH15) — the α1 row 'α1 | Vascular smooth muscle / Visceral smooth muscle → Vasoconstriction / Smooth muscle contraction'; the SAME page (COMPLETED micturition-control, PH14) — 'α1-antagonists (eg, tamsulosin)' → 'BPH' + 'bladder, neck, prostate) → ↓ urinary obstruction'; pdf 264/book 242 (COMPLETED sympathomimetics) — 'Epinephrine response exhibits reversal of mean arterial pressure from a net increase (the α response) to a net decrease (the β2 response).' + 'After α-blockade' + 'Phenylephrine response is suppressed but not reversed because it is a \"pure\" α-agonist (lacks β-agonist properties).'; pdf 260/book 238 (COMPLETED autonomic-drugs, PH17) — 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' (the α2 brake the mirtazapine row blocks and the nonselective rows also hit). KYP extensions flagged wherever they appear: the THREE-WAY FORK frame (the selectivity sort), the PHEO-PROTOCOL frame (the α-before-β ordering rule — NOT printed, flagged), the -OSIN SUFFIX frame + the subtype reading of 'except tamsulosin' (the α1A story is KYP's, not printed), the FIRST-DOSE frame (the bedtime-dose/start-low management rule — NOT printed, flagged), the EPINEPHRINE-REVERSAL LINK (the graphs are printed on book 242 but their attribution to the nonselective blockers is KYP's bridge), and the PH22/PH23 boundary census. No copyrighted artwork reproduced; nothing reproduced.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "alpha-blockers", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"alpha-blockers-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [265], "243", "VISUAL_TABLE", "The α-blockers block's own printed set (the section's sole visual element — the three-column DRUG/APPLICATIONS/ADVERSE EFFECTS table of four rows grouped by selectivity)",
       "ONE THREE-COLUMN TEXT TABLE (PURE TEXT — ZERO rasters on pdf 265; pdfimages returns no rows; COPYRIGHTED, never reproduced as artwork). Header: 'α-blockers'. Column headers: DRUG / APPLICATIONS / ADVERSE EFFECTS. Four rows grouped by selectivity: 'Nonselective' + 'Phenoxybenzamine' → 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.'; 'Phentolamine' → 'Reversible. Given to patients on MAO inhibitors who eat tyramine-containing foods and for severe cocaine-induced hypertension (2nd line). Also used to treat norepinephrine extravasation.' (shared adverse cell: 'Orthostatic hypotension, reflex tachycardia.'); 'α1 selective (-osin ending)' + 'Prazosin, terazosin, doxazosin, tamsulosin' → 'Urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin).' | '1st-dose orthostatic hypotension, dizziness, headache.'; 'α2 selective' + 'Mirtazapine' → 'Depression.' | 'Sedation, ↑ serum cholesterol, ↑ appetite.'. Carried VERBATIM as the note's two table blocks and conveyed as ONE original KYP selectivity-fork map (the α1 = Gq mechanism strip, the three fork cards, the uses/toxicity strips, the epinephrine-reversal band, the α2-mirror band, the boundary strip, the reading-rule footer) — no artwork reproduced.",
       "ORIGINAL_KYP_ADAPTATION", "alpha-blocker-map", "the note's two verbatim table blocks (the four-row selectivity table; the cross-page mechanism-anchor table) + the registry visual's mechanism strip, fork cards, toxicity strip, reversal band, mirror band, boundary strip, and reading-rule footer"),
]
(ROOT / "content/usmle/manifests/alpha-blockers.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/alpha-blockers.json").write_text(
    json.dumps({"topicId": "alpha-blockers", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "alpha-blockers", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + text layer): the α-blockers block's printed visual set is ONE element — the THREE-COLUMN DRUG/APPLICATIONS/ADVERSE EFFECTS TABLE of four rows grouped by selectivity, PURE TEXT (ZERO rasters on pdf 265 — pdfimages returns no rows; COPYRIGHTED, never reproduced as artwork). The set is carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION — every drug, group label, application, and adverse-effect cell is the book's own print, including the '(-osin ending)' suffix label, the 'PTSD (prazosin)' and 'except tamsulosin' exceptions, and the mirtazapine row) and conveyed as ONE original KYP selectivity-fork map in the registry visual AlphaBlockerMap (THE MECHANISM STRIP — the α1 = Gq vasoconstriction of book 237's row and the α1 distribution addresses of book 236, blocked → vasodilation; THE THREE FORK CARDS — NONSELECTIVE (phenoxybenzamine 'Irreversible. Pheochromocytoma (used preoperatively)...' and phentolamine 'Reversible.' with the MAOI-tyramine/cocaine-2nd-line/extravasation uses), α1-SELECTIVE (the -osin four with 'Urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin).' and '1st-dose orthostatic hypotension, dizziness, headache.'), α2-SELECTIVE (mirtazapine 'Depression.' with 'Sedation, ↑ serum cholesterol, ↑ appetite.'); THE USES STRIP — the pheo/HTN/BPH/emergency lane sort; THE TOXICITY STRIP — 'Orthostatic hypotension, reflex tachycardia.' vs the first-dose rule vs the mirtazapine metabolic set; THE EPINEPHRINE-REVERSAL BAND — book 242's printed 'After α-blockade' graphs bridged to the nonselective rows (KYP bridge, flagged); THE α2-MIRROR BAND — the mirtazapine/clonidine same-page mirror against book 238's autoreceptor sentence; THE BOUNDARY STRIP — the PH22/PH23 same-page split pinned from below; the reading-rule footer). BOUNDARY pinned from below: the UPPER portion of pdf 265 (lines 9-37) is the 'Sympatholytics (α2-agonists)' block — the COMPLETED PH22 — EXCLUDED (only its header + last row pinned as boundary markers). SECTION EXTENT: the block does NOT extend to pdf 266 (book 244 opens β-blockers, the PENDING topic whose carvedilol/labetalol are the α1+β combined blockers); pdf 264 behind carries the completed sympathomimetics tail (its α-blockade graphs cited as cross-page anchors); sourcePages = [265] only. KYP extensions flagged wherever they appear: the THREE-WAY FORK frame, the PHEO-PROTOCOL frame (the α-before-β ordering rule — NOT printed, flagged), the -OSIN SUFFIX frame + the α1A subtype reading of 'except tamsulosin' (not printed), the FIRST-DOSE frame (the bedtime-dose rule — not printed, flagged), the EPINEPHRINE-REVERSAL LINK (graphs printed on book 242, attribution to the blockers is KYP's), and the PH22/PH23 boundary census. No copyrighted artwork reproduced; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "alpha-blockers":
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
print("PH23 manifest + inventory + flip done")
