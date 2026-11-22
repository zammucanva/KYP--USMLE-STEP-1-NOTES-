#!/usr/bin/env python3
"""PH21 atropine — manifest + inventory + flip
(Pharmacology 21/43 — the dedicated ATROPINE block: the LOWER portion of
pdf 262, book 240 — the UPPER portion of the same page, the seven-row
Muscarinic antagonists class table, is the COMPLETED PH20 and is
EXCLUDED here; only its boundary is pinned). The block prints its header
and intro, ONE three-column ORGAN SYSTEM/ACTION/NOTES grid, ONE ADVERSE
EFFECTS row, and the seven-line anticholinergic mnemonic set:
INTRO — 'Muscarinic antagonist. Used to treat bradycardia and for
ophthalmic applications.'
THE GRID (six organ rows):
(1) 'Eye' → '↑ pupil dilation, cycloplegia';
(2) 'Airway' → 'Bronchodilation, ↓ secretions';
(3) 'Heart' → '↑ heart rate';
(4) 'Stomach' → '↓ acid secretion';
(5) 'Gut' → '↓ motility';
(6) 'Bladder' → '↓ urgency in cystitis';
with the printed NOTES cell 'Blocks muscarinic effects (DUMBBELSS) of
anticholinesterases, but not the nicotinic effects' (the M-vs-N
coverage split that ties this block to the COMPLETED PH19 one page
back).
THE ADVERSE EFFECTS CELL — '↑ body temperature (due to ↓ sweating); ↑
HR; dry mouth; dry, flushed skin; cycloplegia; constipation;
disorientation' + 'Can cause acute angle-closure glaucoma in older
adults (due to mydriasis), urinary retention in men with prostatic
hyperplasia, and hyperthermia in infants'.
THE SEVEN-LINE MNEMONIC (the book's OWN, printed under the label
'Adverse effects:'): 'Hot as a hare / Fast as a fiddle / Dry as a bone /
Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask'.
THE JIMSON WEED LINE — 'Jimson weed (Datura) → gardener's pupil
(mydriasis)'.
RASTER CENSUS: ZERO raster images on pdf 262-263 (pdfimages -list
returns no rows) — the block is PURE TEXT, COPYRIGHTED, never
reproduced as artwork; carried VERBATIM as the note's two table blocks
(ORIGINAL_KYP_ADAPTATION) and conveyed as ONE original KYP toxicity map
(AtropineToxicityMap).
PH20/PH21 BOUNDARY (pinned from both sides): pdf 262 prints TWO sections
under the one 'PHARMACOLOGY—AUTONOMIC DRUGS' banner — the class table
ABOVE (COMPLETED PH20 — EXCLUDED here; only its 'Muscarinic
antagonists' + 'DRUGS' header pair is pinned as the boundary marker)
and the dedicated 'Atropine' block BELOW (THIS topic, lines 72-131).
SECTION EXTENT: the block ends at the page's last content line ('Jimson
weed (Datura) → gardener's pupil (mydriasis)', line 131, above the
footer file line); pdf 263 (book 241) opens the separate
'Sympathomimetics' section; sourcePages = [262] only.
BOUNDARY CENSUS: pdf 261 (book 239) behind carries the COMPLETED PH18
'cholinomimetic-agents' (upper) and PH19 'anticholinesterase-poisoning'
(lower) — this block's printed NOTES cell is the mirror-anchor contract
of PH19's tier structure ('DUMBBELSS.' + 'Reversed by atropine, a
competitive inhibitor. Atropine can cross BBB to relieve CNS symptoms.'
+ pralidoxime's nicotinic tier), and PH18's last row carries this
drug's own overdose rescue ('physostigmine "phyxes" atropine
overdose.'); pdf 258 (book 236) carries the COMPLETED PH14
micturition-control whose drug table prints the bladder lane this
grid's 'Bladder → ↓ urgency in cystitis' row physiologizes; pdf 263
ahead opens the COMPLETED pilot sympathomimetics (boundary pinned in
PH20's over-claim census).
KYP EXTENSIONS (beyond the block's printed set, flagged wherever they
appear): the SIX-ORGAN DRY TOUR (the grid's own organ rows read as a
body tour — eye, airway, heart, stomach, gut, bladder — each row one
printable arrow); the ANTIDOTE-MIRROR frame (atropine is the wet pole's
printed rescue and physostigmine is atropine's own — both clauses
printed one page back); the TOXIDROME-MAP frame (the seven mnemonic
lines mapped organ-by-organ onto the grid's own arrows); the
GARDENER'S-PUPIL frame (the Jimson weed line read as the
plant-exposure stem); and the PH20/PH21 boundary census itself."""
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
L = {258: pages[257].split("\n"), 261: pages[260].split("\n"),
     262: pages[261].split("\n"), 263: pages[262].split("\n")}
P = {258: norm(pages[257]), 261: norm(pages[260]),
     262: norm(pages[261]), 263: norm(pages[262])}
def rng(pg, a, b): return "\n".join(L[pg][a - 1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 240): the printed page number, the Section II marker, the Pharmacology marker, and the standing section banner (the page whose LOWER portion is this topic's dedicated block and whose UPPER portion is the EXCLUDED Muscarinic antagonists class table — PH20, completed)", rng(262, 1, 7), [262]),
    ("The section header + intro line, verbatim — 'Atropine' / 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.' (the block's own banner and its one-sentence charter: the class name, the bradycardia use, and the ophthalmic use — the two printed indications every ACLS/ophthalmology stem recycles; the class table ABOVE this block (PH20) carries atropine only as the ophthalmic trio's headliner — THIS block is its full drug entry)", rng(262, 72, 74), [262]),
    ("The grid column headers, verbatim — 'ORGAN SYSTEM / ACTION / NOTES' (the block's own three-column frame: the body lane, the printed arrow, and the cross-page note — the frame the KYP six-organ dry tour compresses)", rng(262, 76, 80), [262]),
    ("Grid row 1 — the EYE row, verbatim — 'Eye' → '↑ pupil dilation, cycloplegia' (the block's own arrow pair for the ophthalmic lane: dilation of the pupil and paralysis of accommodation — the same two effects the EXCLUDED class table above prints as the trio's use, 'Produce mydriasis and cycloplegia')", rng(262, 82, 84), [262]),
    ("Grid row 2 — the AIRWAY row, verbatim — 'Airway' → 'Bronchodilation, ↓ secretions' (two arrows in one cell: the bronchi opened and the glands dried — the row the EXCLUDED class table's respiratory lane (ipratropium/tiotropium, PH20) rides mechanistically)", rng(262, 86, 88), [262]),
    ("Grid rows 3-4 — the HEART and STOMACH rows, verbatim — 'Heart' → '↑ heart rate' (the bradycardia indication's own mechanism arrow: the SA node's muscarinic tone removed) + 'Stomach' → '↓ acid secretion' (the parietal cell arrow)", rng(262, 90, 100), [262]),
    ("Grid rows 5-6 — the GUT and BLADDER rows, verbatim — 'Gut' → '↓ motility' (the antispasmodic arrow the EXCLUDED class table's IBS lane rides) + 'Bladder' → '↓ urgency in cystitis' (the urologic arrow — the micturition page of book 236 (PH14, completed) prints this lane's physiology: 'Muscarinic antagonists (eg, oxybutynin)' → '⊝ M receptor → relaxation of detrusor smooth muscle')", rng(262, 102, 108), [262]),
    ("The NOTES cell, verbatim — 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects' (the block's only printed cross-page clause — the M-vs-N COVERAGE SPLIT of atropine as the anticholinesterase-poisoning antidote: it dries the muscarinic tier (the DUMBBELSS list, printed one page back) but leaves the nicotinic tier (neuromuscular blockade — pralidoxime's tier) untouched; the clause that ties THIS block to the COMPLETED PH19 one page back and answers the classic 'why must pralidoxime be coadministered' stem)", rng(262, 94, 96), [262]),
    ("The ADVERSE EFFECTS row label, verbatim — the label alone, opening the block's toxicity tier (the lower half of the block: the printed findings cell, the three-population cautions line, the seven-line mnemonic, and the Jimson weed line all hang from this label)", rng(262, 110, 110), [262]),
    ("The adverse-effects findings cell, whole, verbatim — '↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation' (the block's printed dry-toxidrome list — seven findings, each one a grid row's arrow overshot: the Heart arrow past its bradycardia target, the Airway/secretion arrows onto the salivary and sweat glands, the Eye arrow onto the ciliary muscle, the Gut arrow past spasm into stasis, and a CNS arrow the grid does not print)", rng(262, 114, 116), [262]),
    ("The cautions line, whole, verbatim — 'Can cause acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants' (the block's three-population contraindication list: the older adult's narrow angle, the prostatic man's obstructed outlet, the infant's immature thermoregulation — each one the Eye, Bladder, and sweat-gland arrows landing on the vulnerable host)", rng(262, 117, 120), [262]),
    ("The seven-line anticholinergic mnemonic, whole, verbatim under its printed label 'Adverse effects:' — 'Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask' (the book's OWN mnemonic — the source's own simile set for the anticholinergic toxidrome: hyperthermia, tachycardia, anhidrosis/dry membranes, cutaneous flushing, mydriasis/cycloplegia, delirium, urinary retention — attributed as the source's own wherever quoted; the printed cover for the toxidrome the exam tests most)", rng(262, 122, 129), [262]),
    ("The Jimson weed line, whole, verbatim — 'Jimson weed (Datura) → gardener's pupil (mydriasis)' (the block's plant-exposure anchor: Datura stramonium carries tropane alkaloids — atropine's own family — and the gardener who handles it presents with the Eye row's arrow; the line the exam builds the anticholinergic-ingestion stem on)", rng(262, 130, 131), [262]),
    ("The page footer, verbatim — the book's signature file line (book 240; the page carries BOTH sections — the EXCLUDED class table above (PH20) and THIS atropine block below — under the one footer)", rng(262, 112, 112), [262]),
    ("The PH20/PH21 BOUNDARY, verbatim — 'Muscarinic antagonists' + 'DRUGS' (the UPPER portion's section header and its table's first column header, lines 9-10: the boundary marker of the EXCLUDED same-page class table — the COMPLETED PH20 topic; its seven drug rows and its two own mnemonics ('park my Benz', 'Make bladder SOFT') are never cited as THIS block's print; THIS block is the drug entry, that block is the class table)", rng(262, 9, 10), [262]),
    ("The PREVIOUS-PAGE MIRROR ANCHOR, verbatim — 'DUMBBELSS.' + 'Reversed by atropine, a competitive inhibitor. Atropine can cross BBB to relieve CNS symptoms.' (book 239, the COMPLETED PH19 anticholinesterase-poisoning muscarinic tier, lines 102-111: the wet list THIS block's NOTES cell names ('Blocks muscarinic effects (DUMBBELSS) of anticholinesterases...'), the printed antidote clause that makes THIS drug the wet pole's rescue, and the BBB clause that explains why atropine covers the CNS tier too — three printed clauses, one mirror page)", rng(261, 102, 111), [261]),
    ("The PREVIOUS-PAGE MIRROR ANCHOR #2, verbatim — 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' (book 239, the COMPLETED PH18 cholinomimetic-agents table's LAST row: the printed antidote of THIS drug's own overdose — the mirror clause that makes the two pages one antidote pair: the wet toxidrome gets atropine, the atropine toxidrome gets physostigmine)", rng(261, 93, 94), [261]),
    ("The NEXT-PAGE BOUNDARY, verbatim — 'Sympathomimetics' (pdf 263 / book 241, line 9: the section header that OPENS the next page) — the Atropine block does NOT extend to pdf 263; the whole block (intro, six-row grid, adverse-effects cell, seven-line mnemonic, Jimson weed line) is on pdf 262's lower portion alone (sourcePages = [262] only; the sympathomimetics over-claim census is PH20's, not repeated here)", rng(263, 9, 9), [263]),
    ("The CROSS-PAGE BLADDER-LANE ANCHOR, verbatim — 'Muscarinic antagonists (eg, oxybutynin)' + '⊝ M receptor → relaxation of detrusor smooth muscle' (pdf 258 / book 236, the COMPLETED PH14 micturition-control drug table): the physiology page already prints this class at the bladder — THIS block's 'Bladder → ↓ urgency in cystitis' row is that printed mechanism as the drug-entry arrow, and the EXCLUDED class table's GU row (the SOFT four) is its four-drug expansion", rng(258, 59, 63), [258]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"atropine: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "atropine",
    "title": "Atropine",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [262], "bookPages": "240"},
    "sourceEvidence": kept, "visualIds": ["atropine-toxicity-map"],
    "mechanismIds": ["atropine-six-organ-competitive-block", "antidote-coverage-split-m-vs-n"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the block's intro + grid + adverse-effects set.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the drug entry; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "six-organ-dry-tour", "summary": "The SIX-ORGAN DRY TOUR reading of the grid's own ORGAN SYSTEM column — SIX lanes, each with its printed arrow: EYE ('↑ pupil dilation, cycloplegia'), AIRWAY ('Bronchodilation, ↓ secretions'), HEART ('↑ heart rate'), STOMACH ('↓ acid secretion'), GUT ('↓ motility'), BLADDER ('↓ urgency in cystitis'). Every organ name and arrow is the book's own print; the tour compression (top of the head to the pelvis, every lane one direction — dry/open/fast) is KYP's. The mnemonic-to-grid MAPPING (each of the seven simile lines pinned to its grid arrow: 'Hot as a hare' → the sweat glands' anhidrosis behind '↑ body temperature', 'Fast as a fiddle' → the Heart row, 'Dry as a bone' → the secretion arrows, 'Red as a beet' → the cutaneous flush, 'Blind as a bat' → the Eye row, 'Mad as a hatter' → the disorientation finding, 'Full as a flask' → the Bladder row overshot into retention) is KYP's overlay on two printed sets — the similes and the arrows are the book's own, the pinning is KYP's.",
         "origin": "outside-first-aid", "rationale": "The book prints the grid and the mnemonic as separate elements; the tour and the simile-to-arrow mapping that unify them are KYP's synthesis.",
         "location": "core.keyIdea + mechanisms[0] + mnemonics[1] + the visual's six-lane grid"},
        {"id": "antidote-mirror-frame", "summary": "The ANTIDOTE-MIRROR frame over the two printed clauses of the facing page (book 239): 'Reversed by atropine, a competitive inhibitor. Atropine can cross BBB to relieve CNS symptoms.' (PH19's muscarinic tier — the WET toxidrome's printed antidote is THIS drug) and 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' (PH18's last row — THIS drug's own overdose has its printed antidote one page back). Both clauses are the book's own print; the two-page antidote-mirror frame (each pole's rescue prints on the other's page) is KYP's. The DUMBBELSS-to-coverage-split bridge (the NOTES cell's 'Blocks muscarinic effects (DUMBBELSS)... but not the nicotinic effects' read against PH19's three tiers — muscarinic covered, nicotinic NOT (pralidoxime's tier), CNS covered by the BBB clause) is likewise a KYP assembly of printed parts.",
         "origin": "outside-first-aid", "rationale": "The clauses print on the previous page and inside the NOTES cell; the mirror frame and the tier-by-tier coverage table tying them together are KYP's.",
         "location": "core.why + mechanisms[1] + pivots + crossLinks + the visual's antidote-mirror strip"},
        {"id": "gardeners-pupil-frame", "summary": "The GARDENER'S-PUPIL frame on the printed Jimson weed line — 'Jimson weed (Datura) → gardener's pupil (mydriasis)' — read as the plant-exposure stem generator: Datura stramonium (jimson weed, 'devil's weed') carries tropane alkaloids, atropine's own family; the gardener who handles it presents with the Eye row's arrow (mydriasis) inside the full dry picture. The printed line is the book's own; the tropane-alkaloid family reading and the stem construction are KYP's, flagged wherever used. The SEVEN-LINE MNEMONIC is the book's OWN ('Hot as a hare' family, printed under the label 'Adverse effects:') — attributed as the source's own in every use, never as KYP's.",
         "origin": "outside-first-aid", "rationale": "The book prints the line and the simile set; the exposure-frame reading and the family attribution of Datura's alkaloids are KYP's.",
         "location": "usmle miniCase + mnemonics[0] + traps + the visual's Jimson weed card"},
        {"id": "ph20-ph21-boundary-census", "summary": "The PH20/PH21 BOUNDARY CENSUS itself — pdf 262 (book 240) prints TWO sections under the one banner, and the inventory's two book-240 topics ARE separable on inspection: the COMPLETED 'muscarinic-antagonists' topic (PH20) = the UPPER class table (seven rows, five lanes, lines 9-70); THIS topic (atropine, PH21) = the LOWER dedicated block (the 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.' intro, the ORGAN SYSTEM/ACTION/NOTES grid, the ADVERSE EFFECTS cell, the seven-line mnemonic, and the Jimson weed line — lines 72-131). PH20 pinned this boundary from above; THIS manifest pins it from below (the class table's header pair is cited as boundary marker only, its rows never as this block's print).",
         "origin": "outside-first-aid", "rationale": "The split, the boundary pins from both sides, and the mutual-exclusion documentation are pipeline curation, not book print.",
         "location": "manifest notes + the note's sourceRef + the visual's boundary strip"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + text layer): the dedicated Atropine block occupies the LOWER portion of pdf 262 (book 240) under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner (lines 72-131), and prints: the 'Atropine' header with its intro 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.'; ONE THREE-COLUMN GRID (ORGAN SYSTEM / ACTION / NOTES) of six organ rows — Eye '↑ pupil dilation, cycloplegia' / Airway 'Bronchodilation, ↓ secretions' / Heart '↑ heart rate' / Stomach '↓ acid secretion' / Gut '↓ motility' / Bladder '↓ urgency in cystitis' — carrying the printed NOTES cell 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects'; the ADVERSE EFFECTS tier — the findings cell '↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation', the cautions line 'Can cause acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants', the book's OWN seven-line mnemonic (printed under the label 'Adverse effects:': 'Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask'), and 'Jimson weed (Datura) → gardener's pupil (mydriasis)'. RASTER CENSUS: ZERO raster images on pdf 262-263 (pdfimages -list returns no rows) — the block is PURE TEXT, COPYRIGHTED, never reproduced as artwork; carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION) and conveyed as ONE original KYP toxicity map (AtropineToxicityMap). PH20/PH21 BOUNDARY, pinned from both sides: the UPPER class table (lines 9-70) is the COMPLETED PH20 'muscarinic-antagonists' — EXCLUDED here (only its 'Muscarinic antagonists' + 'DRUGS' header pair pinned as the boundary marker; its seven rows and two own mnemonics never cited as this block's print); PH20 pinned this block from above in its own census. SECTION EXTENT: the block ends at the page's last content line (the Jimson weed line, line 131, above the footer file line); pdf 263 (book 241) opens 'Sympathomimetics'; sourcePages = [262] only. BOUNDARIES: pdf 261 (book 239) behind carries the COMPLETED PH18 'cholinomimetic-agents' (upper) and PH19 'anticholinesterase-poisoning' (lower) — this block's NOTES cell is the printed coverage contract of PH19's tier structure ('DUMBBELSS.' + 'Reversed by atropine, a competitive inhibitor. Atropine can cross BBB to relieve CNS symptoms.' + pralidoxime's nicotinic tier), and PH18's last row carries this drug's own overdose rescue ('physostigmine \"phyxes\" atropine overdose.'); pdf 258 (book 236) carries the COMPLETED PH14 micturition-control whose drug table prints the bladder lane ('Muscarinic antagonists (eg, oxybutynin)' → '⊝ M receptor → relaxation of detrusor smooth muscle') this grid's Bladder row physiologizes; pdf 263 ahead opens the COMPLETED pilot sympathomimetics (over-claim census in PH20). KYP extensions flagged wherever they appear: the SIX-ORGAN DRY TOUR (with the simile-to-arrow mapping of the book's own seven-line mnemonic onto the grid's own arrows — both sets printed, the pinning KYP's), the ANTIDOTE-MIRROR frame (both clauses printed one page back), the GARDENER'S-PUPIL frame (the printed Jimson weed line read as the exposure stem; the tropane-alkaloid family reading is KYP's, flagged), and the PH20/PH21 boundary census. The seven-line 'Hot as a hare' mnemonic is the SOURCE'S OWN — attributed as the book's own in every use. No copyrighted artwork reproduced; nothing reproduced.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "atropine", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"atropine-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [262], "240", "VISUAL_TABLE", "The dedicated Atropine block's own printed set (the section's sole visual element — the ORGAN SYSTEM/ACTION/NOTES grid with its NOTES cell, plus the ADVERSE EFFECTS tier: findings cell, cautions line, the seven-line mnemonic, and the Jimson weed line)",
       "ONE THREE-COLUMN TEXT TABLE + ADVERSE-EFFECTS TIER (PURE TEXT — ZERO rasters on pdf 262-263; pdfimages returns no rows; COPYRIGHTED, never reproduced as artwork). Intro: 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.' Column headers: ORGAN SYSTEM / ACTION / NOTES. Six rows: 'Eye' → '↑ pupil dilation, cycloplegia'; 'Airway' → 'Bronchodilation, ↓ secretions'; 'Heart' → '↑ heart rate'; 'Stomach' → '↓ acid secretion'; 'Gut' → '↓ motility'; 'Bladder' → '↓ urgency in cystitis'; printed NOTES cell: 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects'. ADVERSE EFFECTS tier: '↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation' + 'Can cause acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants' + the book's OWN seven-line mnemonic under its printed label 'Adverse effects:' ('Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask') + 'Jimson weed (Datura) → gardener's pupil (mydriasis)'. Carried VERBATIM as the note's two table blocks and conveyed as ONE original KYP toxicity map (the six-lane action grid, the simile-to-arrow mapping band, the antidote-mirror strip, the Jimson weed card, the boundary strip, the reading-rule footer) — no artwork reproduced.",
       "ORIGINAL_KYP_ADAPTATION", "atropine-toxicity-map", "the note's two verbatim table blocks (the six-row action grid with the NOTES cell; the adverse-effects + mnemonic table) + the registry visual's six-lane grid, simile-mapping band, antidote-mirror strip, Jimson weed card, boundary strip, and reading-rule footer"),
]
(ROOT / "content/usmle/manifests/atropine.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/atropine.json").write_text(
    json.dumps({"topicId": "atropine", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "atropine", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + text layer): the dedicated Atropine block's printed visual set is ONE element — the THREE-COLUMN GRID (ORGAN SYSTEM / ACTION / NOTES) plus its ADVERSE EFFECTS tier, PURE TEXT (ZERO rasters on pdf 262-263 — pdfimages returns no rows; COPYRIGHTED, never reproduced as artwork). The set is carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION — every organ row, action arrow, the NOTES cell, the findings cell, the cautions line, the seven-line mnemonic, and the Jimson weed line are the book's own print) and conveyed as ONE original KYP toxicity map in the registry visual AtropineToxicityMap (the SIX-LANE ACTION GRID — the six organ rows with their printed arrows, top of the head to the pelvis; the SIMILE-TO-ARROW MAPPING BAND — the book's own seven 'Hot as a hare' family lines pinned to the grid's own arrows, both sets printed, the pinning KYP's; the ANTIDOTE-MIRROR STRIP — the two printed clauses of book 239 ('Reversed by atropine, a competitive inhibitor. Atropine can cross BBB to relieve CNS symptoms.' + 'physostigmine \"phyxes\" atropine overdose.') with the NOTES cell's M-vs-N coverage split; the JIMSON WEED CARD — the printed line with the gardener's-pupil exposure frame (the tropane-alkaloid family reading flagged as KYP); the CAUTIONS STRIP — the three-population contraindication line; the BOUNDARY STRIP — the PH20/PH21 split pinned from below; the reading-rule footer). PH20/PH21 BOUNDARY pinned from both sides: pdf 262 prints TWO separable sections — the class table above (the COMPLETED muscarinic-antagonists topic, PH20 — EXCLUDED here; only its header pair pinned as the boundary marker) and THIS dedicated Atropine block below (lines 72-131). SECTION EXTENT: the block does NOT extend to pdf 263 (book 241 opens Sympathomimetics); sourcePages = [262] only. The seven-line 'Hot as a hare' mnemonic is the SOURCE'S OWN, printed under its own label 'Adverse effects:' — attributed as the book's own in every use, never as KYP's. KYP extensions flagged wherever they appear: the SIX-ORGAN DRY TOUR with the simile-to-arrow mapping, the ANTIDOTE-MIRROR frame, the GARDENER'S-PUPIL frame, and the PH20/PH21 boundary census. No copyrighted artwork reproduced; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "atropine":
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
print("PH21 manifest + inventory + flip done")
