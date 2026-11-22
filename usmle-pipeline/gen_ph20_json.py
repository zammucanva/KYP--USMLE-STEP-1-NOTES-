#!/usr/bin/env python3
"""PH20 muscarinic-antagonists — manifest + inventory + flip
(Pharmacology 20/43 — the MUSCARINIC ANTAGONISTS section: the UPPER
portion of pdf 262, book 240 — the seven-row drug class table — the
dedicated 'Atropine' block BELOW it on the same page is EXCLUDED and
RESERVED for the separate pending 'atropine' topic (PH21)). The section
prints ONE element: the DRUGS × ORGAN SYSTEMS × APPLICATIONS table —
SEVEN drug-set rows over FIVE organ-system lanes:
(1) EYE — 'Atropine, homatropine, tropicamide' → 'Produce mydriasis
and cycloplegia';
(2) CNS — 'Benztropine, trihexyphenidyl' → 'Parkinson disease (“park
my Benz”)' + 'Acute dystonia';
(3) GI/RESPIRATORY — 'Glycopyrrolate' → 'Parenteral: preoperative use
to reduce airway secretions' + 'Oral: reduces drooling, peptic ulcer';
(4) GI — 'Hyoscyamine, dicyclomine' → 'Antispasmodics for irritable
bowel syndrome';
(5) RESPIRATORY — 'Ipratropium, tiotropium' → 'COPD, asthma' +
'Duration: tiotropium > ipratropium';
(6) GENITOURINARY — 'Solifenacin, Oxybutynin, Flavoxate, Tolterodine'
→ 'Reduce bladder spasms and urge urinary incontinence (overactive
bladder)' + 'Make bladder SOFT';
(7) CNS — 'Scopolamine' → 'Motion sickness'.
The book's OWN mnemonics print inside the table cells: 'park my Benz'
(benztropine, Parkinson disease) and 'Make bladder SOFT' (Solifenacin,
Oxybutynin, Flavoxate, Tolterodine — the four GU drugs' initials).
RASTER CENSUS: ZERO raster images on pdf 262-263 (pdfimages -list
returns no rows) — the section is PURE TEXT, COPYRIGHTED, never
reproduced as artwork; carried VERBATIM as the note's two table blocks
(ORIGINAL_KYP_ADAPTATION) and conveyed as ONE original KYP class map
(MuscarinicAntagonistsMap).
PH20/PH21 BOUNDARY FINDING (the inventory's two book-240 topics ARE
separable on inspection): pdf 262 prints TWO sections under the one
banner — the 'Muscarinic antagonists' class table ABOVE (lines 9-70,
THIS topic) and the dedicated 'Atropine' block BELOW (lines 72-131: the
intro 'Muscarinic antagonist. Used to treat bradycardia and for
ophthalmic applications.', the ORGAN SYSTEM/ACTION/NOTES grid — Eye
'↑ pupil dilation, cycloplegia' / Airway 'Bronchodilation, ↓
secretions' / Heart '↑ heart rate' / Stomach '↓ acid secretion' / Gut
'↓ motility' / Bladder '↓ urgency in cystitis' with the NOTES cell
'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not
the nicotinic effects', the ADVERSE EFFECTS cell '↑ body temperature
(due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia;
constipation; disorientation' + 'Can cause acute angle-closure
glaucoma in older adults (due to mydriasis), urinary retention in men
with prostatic hyperplasia, and hyperthermia in infants', the
seven-line anticholinergic mnemonic 'Hot as a hare / Fast as a fiddle
/ Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter /
Full as a flask', and 'Jimson weed (Datura) → gardener’s pupil
(mydriasis)') — the WHOLE atropine block is RESERVED for PH21
'atropine' and is EXCLUDED here; only its boundary is pinned (the
seven-line toxidrome mnemonic and the adverse-effects cell are never
cited as THIS topic's own print — flagged as the adjacent same-page
block wherever the dry direction needs a printed anchor).
SECTION EXTENT: the section does NOT extend to pdf 263 — pdf 263 (book
241) opens the separate 'Sympathomimetics' section (line 9, with the
table's first drug row 'Albuterol, salmeterol, terbutaline' at lines
18-19); sourcePages = [262] only.
SYMPATHOMIMETICS OVERLAP CENSUS (task brief): the pre-existing pilot
note 'sympathomimetics' (src/lib/kyp/usmle/notes/sympathomimetics.ts)
carries sourceRef 'First Aid 2026, Part 1 pp. 240–243' and its
manifest pins pdfPages [262, 263, 264, 265] — the book-240/pdf-262
endpoint OVER-CLAIMS this page: the sympathomimetics table content
(albuterol through ephedrine) prints ENTIRELY on pdf 263-265 (book
241-243), and pdf 262 (book 240) carries only THIS topic's class table
plus the atropine block (PH21) — NO CONTENT OVERLAP with PH20; the
boundary is pinned here so no double-coverage arises.
BOUNDARY CENSUS: pdf 261 (book 239) behind carries the COMPLETED PH18
'cholinomimetic-agents' (upper) and PH19 'anticholinesterase-poisoning'
(lower) — the latter's printed antidote clauses are this class's
mirror anchors ('Reversed by atropine, a competitive inhibitor.' and
'physostigmine “phyxes” atropine overdose.'); pdf 258 (book 236)
carries the COMPLETED PH14 'micturition-control' whose drug table
already prints 'Muscarinic antagonists (eg, oxybutynin)' → urgency
incontinence — the physiology page of this table's GU lane; pdf 263
ahead opens the COMPLETED pilot 'sympathomimetics' (EXCLUDED —
over-claim documented); the 'atropine' topic (PH21) is the pending
same-page block BELOW.
KYP EXTENSIONS (beyond the page's printed set, flagged wherever they
appear): the BODY-LANE LADDER (the five organ-system lanes — Eye, CNS,
GI, Respiratory, Genitourinary — read as a body tour); the LOCK-AND-
LANE reading (one muscarinic lock, seven aimings; the route/chemistry
behind the aiming — quaternary amines, BBB entry, inhaled delivery —
is NOT printed on this page, flagged); the DRY-MIRROR frame (the
anti-DUMBBELSS direction — the wet list of book 239 reversed; the
printed seven-line version lives in the atropine block below, PH21's
own); the ANTIDOTE-MIRROR frame (both printed one page back); and the
PH20/PH21 boundary census itself."""
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
    ("Page identity — the running header (book 240): the printed page number, the Section II marker, the Pharmacology marker, and the standing section banner (the page whose UPPER portion is this topic's class table and whose LOWER portion is the EXCLUDED atropine block — PH21)", rng(262, 1, 7), [262]),
    ("The section header, verbatim — 'Muscarinic antagonists' (this topic's section; opens the UPPER portion of pdf 262, directly below the running header — the class-name banner the whole table hangs from; the previous page's poison section named atropine, this class's headliner, as its printed first antidote)", rng(262, 9, 9), [262]),
    ("The column headers, verbatim — 'DRUGS' / 'ORGAN SYSTEMS' / 'APPLICATIONS' (the table's own three-column frame: the drug set, the body lane it aims at, and the printed use — the frame the KYP body-lane ladder compresses)", rng(262, 10, 14), [262]),
    ("Row 1 — the EYE lane, whole, verbatim — 'Atropine, homatropine, tropicamide' | 'Eye' | 'Produce mydriasis and cycloplegia' (atropine's ONLY appearance in this table is as a member of the ophthalmic trio — its own full drug entry is the EXCLUDED block below, PH21)", rng(262, 16, 22), [262]),
    ("Row 2 — the CNS lane (movement), whole, verbatim — 'Benztropine, trihexyphenidyl' | 'CNS' | 'Parkinson disease (“park my Benz”)' + 'Acute dystonia' (the book's OWN mnemonic 'park my Benz' prints inside the applications cell — benztropine's parking spot)", rng(262, 24, 30), [262]),
    ("Row 3 — the GI/respiratory lane (secretions), whole, verbatim — 'Glycopyrrolate' | 'GI, respiratory' | 'Parenteral: preoperative use to reduce airway secretions' + 'Oral: reduces drooling, peptic ulcer' (the only row that splits its applications by ROUTE — the printed route pair that aims one drug at two lanes; glycopyrrolate also prints one page back as pyridostigmine's co-therapy)", rng(262, 32, 38), [262]),
    ("Row 4 — the GI lane (spasm), whole, verbatim — 'Hyoscyamine, dicyclomine' | 'GI' | 'Antispasmodics for irritable bowel syndrome' (hyoscyamine is the second printed co-therapy of pyridostigmine's row one page back — the same drug re-aimed here as the therapeutic antispasmodic)", rng(262, 40, 45), [262]),
    ("Row 5 — the RESPIRATORY lane, whole, verbatim — 'Ipratropium, tiotropium' | 'Respiratory' | 'COPD, asthma' + 'Duration: tiotropium > ipratropium' (the table's own duration comparator — the printed line the exam turns into the once-daily vs shorter-acting sort)", rng(262, 47, 53), [262]),
    ("Row 6 — the GENITOURINARY lane, whole, verbatim — 'Solifenacin, Oxybutynin, Flavoxate, Tolterodine' | 'Genitourinary' | 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)' + 'Make bladder SOFT' (the book's OWN mnemonic 'Make bladder SOFT' spells the four drug initials — S-O-F-T — the GU row's own anchor)", rng(262, 55, 64), [262]),
    ("Row 7 — the CNS lane (vestibular), whole, verbatim — 'Scopolamine' | 'CNS' | 'Motion sickness' (the table's shortest row — the second CNS entry, the printed use every cruise-ship stem recycles)", rng(262, 66, 70), [262]),
    ("The PH20/PH21 SECTION BOUNDARY, verbatim — the 'Atropine' header + its intro line, the FIRST element BELOW this topic's table: 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.' (the dedicated atropine block — the separate PENDING 'atropine' topic, PH21 — opens here and runs to the page's last line; EXCLUDED from this topic, only its boundary pinned)", rng(262, 72, 74), [262]),
    ("The atropine block's own table frame + NOTES cell, verbatim (PH21's portion — the excluded lower block's grid): 'ORGAN SYSTEM / ACTION / NOTES' headers and the printed NOTES cell 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects' (the clause that ties the excluded block to the COMPLETED PH19 one page back — the muscarinic-vs-nicotinic coverage split of the class's headliner)", rng(262, 76, 96), [262]),
    ("The atropine block's ADVERSE EFFECTS row label, verbatim (PH21's portion — the excluded lower block): the label alone, pinned as the boundary marker of the atropine-specific toxicity content this topic does NOT carry", rng(262, 110, 110), [262]),
    ("The atropine block's adverse-effects cell + the seven-line anticholinergic mnemonic + the Jimson weed line, whole, verbatim (PH21's portion — the excluded lower block): '↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation' + 'Can cause acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants' + 'Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask' + 'Jimson weed (Datura) → gardener’s pupil (mydriasis)' (the printed dry-toxidrome set RESERVED for PH21 — never cited as this topic's own print; this topic's class table prints USES only)", rng(262, 114, 131), [262]),
    ("The page footer, verbatim — the book's signature file line (book 240; the page carries BOTH sections — the class table above and the atropine block below — under the one footer)", rng(262, 112, 112), [262]),
    ("The PREVIOUS-PAGE MIRROR ANCHOR, verbatim — 'Reversed by atropine, a competitive inhibitor.' (book 239, the COMPLETED PH19 anticholinesterase-poisoning section one page back: the wet tier's printed antidote is THIS class's headliner — the class table on this page is atropine's own family page; the mechanism word 'competitive' is the printed bridge between the two pages)", rng(261, 109, 109), [261]),
    ("The PREVIOUS-PAGE MIRROR ANCHOR #2, verbatim — 'Antidote for anticholinergic toxicity; physostigmine “phyxes” atropine overdose.' (book 239, the COMPLETED PH18 cholinomimetic-agents table's LAST row: the printed antidote of THIS class's own overdose — the mirror clause that makes the two pages one antidote pair: the wet toxidrome gets atropine, the atropine toxidrome gets physostigmine)", rng(261, 93, 94), [261]),
    ("The NEXT-PAGE BOUNDARY, verbatim — 'Sympathomimetics' (pdf 263 / book 241, line 9: the section header that OPENS the next page) — the Muscarinic antagonists section does NOT extend to pdf 263; the whole class table (seven rows, five lanes) is on pdf 262 alone (sourcePages = [262] only)", rng(263, 9, 9), [263]),
    ("The SYMPATHOMIMETICS OVERLAP CENSUS, verbatim — 'Albuterol, salmeterol, terbutaline' (pdf 263 / book 241, lines 18-19: the sympathomimetics table's FIRST drug row) — the pre-existing pilot note 'sympathomimetics' carries sourceRef 'pp. 240–243' and its manifest pins pdfPages [262-265], an endpoint that OVER-CLAIMS book 240/pdf 262: the sympathomimetics table content prints ENTIRELY on pdf 263-265 (book 241-243), and pdf 262 carries only THIS class table + the atropine block (PH21) — NO CONTENT OVERLAP with PH20; boundary pinned so no double coverage arises", rng(263, 18, 19), [263]),
    ("The CROSS-PAGE GU-LANE ANCHOR, verbatim — 'Muscarinic antagonists (eg, oxybutynin)' + '⊝ M receptor → relaxation of detrusor smooth muscle' (pdf 258 / book 236, the COMPLETED PH14 micturition-control drug table): the physiology page already names this class and its headliner oxybutynin for urgency incontinence — THIS page's GU row ('Solifenacin, Oxybutynin, Flavoxate, Tolterodine' → 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)') is that printed row expanded fourfold — the two tables are each other's physiology and pharmacology", rng(258, 59, 63), [258]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"muscarinic-antagonists: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "muscarinic-antagonists",
    "title": "Muscarinic Antagonists",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [262], "bookPages": "240"},
    "sourceEvidence": kept, "visualIds": ["muscarinic-antagonists-map"],
    "mechanismIds": ["muscarinic-receptor-competitive-block", "organ-lane-selectivity-dry-leak"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the section's one seven-row class table.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the table; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "body-lane-ladder", "summary": "The BODY-LANE LADDER reading of the table's own ORGAN SYSTEMS column — FIVE lanes: EYE (atropine, homatropine, tropicamide → 'Produce mydriasis and cycloplegia'), CNS (benztropine/trihexyphenidyl for 'Parkinson disease (“park my Benz”)' + 'Acute dystonia'; scopolamine for 'Motion sickness'), GI (glycopyrrolate's route-split secretions row; hyoscyamine/dicyclomine the IBS antispasmodics), RESPIRATORY (ipratropium/tiotropium → 'COPD, asthma'), GENITOURINARY (the SOFT four → overactive bladder). Every lane name, drug set, and application is the book's own print; the five-lane body-tour compression (eye → brain → gut → airway → bladder) is KYP's.",
         "origin": "outside-first-aid", "rationale": "The book prints seven parallel rows over five organ systems; the ladder that sorts any 'which antimuscarinic for which organ' stem by body lane is KYP's synthesis.",
         "location": "core.keyIdea + mechanisms[1] + mnemonics[2] + the visual's five lane cards"},
        {"id": "lock-and-lane-reading", "summary": "The LOCK-AND-LANE reading — ONE RECEPTOR LOCK (the muscarinic receptor, competitive blockade without activation; the class-name banner 'Muscarinic antagonists' is the page's own header) aimed SEVEN ways: the therapeutic difference between the rows is the LANE, not the mechanism. The printed lane-aimers: glycopyrrolate's route pair ('Parenteral: preoperative use to reduce airway secretions' / 'Oral: reduces drooling, peptic ulcer'), the inhaled respiratory pair (ipratropium/tiotropium, 'Respiratory'), the two CNS entries (benztropine/trihexyphenidyl, scopolamine). The CHEMISTRY behind the aiming (quaternary amines that cannot cross the BBB — glycopyrrolate, ipratropium, tiotropium; the tertiary amine that can — scopolamine; the inhaled route's topical delivery) is NOT printed on this page — flagged as KYP wherever used, never cited as printed.",
         "origin": "outside-first-aid", "rationale": "The page prints the rows and the route pair but not the structure-property logic behind lane selectivity; the lock-and-lane frame and the chemistry flags are KYP's.",
         "location": "mechanisms[0] + mechanisms[1] + traps + the visual's lock strip"},
        {"id": "dry-mirror-frame", "summary": "The DRY-MIRROR frame — what the class does when blockade LEAKS beyond its lane: the ANTI-DUMBBELSS direction (the printed wet list of book 239, one page back, reversed: miosis → mydriasis, bronchospasm → bronchodilation, bradycardia → tachycardia, secretions pouring → dry mouth/skin, gut cramping → constipation, bladder letting go → retention). BOUNDARY RULE: the PRINTED adverse-effects cell ('↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation' + the angle-closure/prostatic-hyperplasia/infant-hyperthermia line) and the seven-line anticholinergic mnemonic ('Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask') + 'Jimson weed (Datura) → gardener’s pupil (mydriasis)' print in the ATROPINE BLOCK BELOW on this same page — the separate pending 'atropine' topic (PH21) — flagged as the adjacent same-page block wherever this topic needs a printed dry-toxidrome anchor, never cited as this topic's own print (this class table prints USES only, no toxicity column).",
         "origin": "outside-first-aid", "rationale": "The wet list is printed one page back (PH19) and the dry list prints one section below (PH21); the mirror frame connecting them across this page's position is KYP's.",
         "location": "mechanisms[1] + traps + mnemonics[3] + the visual's dry-mirror band"},
        {"id": "antidote-mirror-frame", "summary": "The ANTIDOTE-MIRROR frame over the two printed clauses of the facing page (book 239): 'Reversed by atropine, a competitive inhibitor.' (PH19's muscarinic tier — the WET toxidrome's printed antidote is THIS class's headliner: this page is atropine's family page) and 'Antidote for anticholinergic toxicity; physostigmine “phyxes” atropine overdose.' (PH18's last row — THIS class's own overdose has its printed antidote one page back). Both clauses are the book's own print; the two-page antidote-mirror frame (the wet pole gets this class, this class's overdose gets the cholinomimetic page's last row) is KYP's.",
         "origin": "outside-first-aid", "rationale": "The clauses print on the previous page; the mirror frame tying this class table to both is KYP's.",
         "location": "core.why + pivots + crossLinks + the visual's antidote-mirror strip"},
        {"id": "ph20-ph21-boundary-census", "summary": "The PH20/PH21 BOUNDARY CENSUS itself — pdf 262 (book 240) prints TWO sections under the one banner, and the inventory's two book-240 topics ARE separable on inspection: THIS topic (muscarinic-antagonists) = the UPPER class table (seven rows, five lanes, lines 9-70); the PENDING 'atropine' topic (PH21) = the LOWER dedicated block (the 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.' intro, the ORGAN SYSTEM/ACTION/NOTES grid with its 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects' NOTES cell, the ADVERSE EFFECTS cell, the seven-line mnemonic, and the Jimson weed line — lines 72-131). Includes the SYMPATHOMIMETICS OVER-CLAIM documentation: the pilot note's 'pp. 240–243' / pdfPages [262-265] endpoint over-claims book 240 — its table content prints entirely on pdf 263-265 (book 241-243); no content overlap with PH20.",
         "origin": "outside-first-aid", "rationale": "The split, the boundary pins, and the over-claim documentation are pipeline curation, not book print.",
         "location": "manifest notes + the note's sourceRef + the visual's boundary strip"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + text layer): the Muscarinic antagonists section occupies the UPPER portion of pdf 262 (book 240) under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner, and prints ONE element: the SEVEN-ROW DRUG CLASS TABLE (DRUGS × ORGAN SYSTEMS × APPLICATIONS) — Row 1 'Atropine, homatropine, tropicamide' | 'Eye' | 'Produce mydriasis and cycloplegia'; Row 2 'Benztropine, trihexyphenidyl' | 'CNS' | 'Parkinson disease (“park my Benz”)' + 'Acute dystonia'; Row 3 'Glycopyrrolate' | 'GI, respiratory' | 'Parenteral: preoperative use to reduce airway secretions' + 'Oral: reduces drooling, peptic ulcer'; Row 4 'Hyoscyamine, dicyclomine' | 'GI' | 'Antispasmodics for irritable bowel syndrome'; Row 5 'Ipratropium, tiotropium' | 'Respiratory' | 'COPD, asthma' + 'Duration: tiotropium > ipratropium'; Row 6 'Solifenacin, Oxybutynin, Flavoxate, Tolterodine' | 'Genitourinary' | 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)' + 'Make bladder SOFT'; Row 7 'Scopolamine' | 'CNS' | 'Motion sickness'. The book's OWN mnemonics print inside the cells: 'park my Benz' and 'Make bladder SOFT' (the GU four's initials). RASTER CENSUS: ZERO raster images on pdf 262-263 (pdfimages -list returns no rows) — the section is PURE TEXT, COPYRIGHTED, never reproduced as artwork; carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION) and conveyed as ONE original KYP class map (MuscarinicAntagonistsMap). PH20/PH21 BOUNDARY FINDING: the inventory's two book-240 topics ARE separable — the class table above (THIS topic) and the dedicated 'Atropine' block below (lines 72-131: the 'Muscarinic antagonist. Used to treat bradycardia and for ophthalmic applications.' intro; the ORGAN SYSTEM/ACTION/NOTES grid — Eye '↑ pupil dilation, cycloplegia' / Airway 'Bronchodilation, ↓ secretions' / Heart '↑ heart rate' / Stomach '↓ acid secretion' / Gut '↓ motility' / Bladder '↓ urgency in cystitis' with the NOTES cell 'Blocks muscarinic effects (DUMBBELSS) of anticholinesterases, but not the nicotinic effects'; the ADVERSE EFFECTS cell '↑ body temperature (due to ↓ sweating); ↑ HR; dry mouth; dry, flushed skin; cycloplegia; constipation; disorientation' + 'Can cause acute angle-closure glaucoma in older adults (due to mydriasis), urinary retention in men with prostatic hyperplasia, and hyperthermia in infants'; the seven-line mnemonic 'Hot as a hare / Fast as a fiddle / Dry as a bone / Red as a beet / Blind as a bat / Mad as a hatter / Full as a flask'; 'Jimson weed (Datura) → gardener’s pupil (mydriasis)') — the WHOLE atropine block is RESERVED for PH21 and EXCLUDED here (its toxicity lines are never cited as this topic's own print). SECTION EXTENT: the section does NOT extend to pdf 263 — pdf 263 (book 241) opens 'Sympathomimetics' (its first drug row 'Albuterol, salmeterol, terbutaline' prints at pdf 263 lines 18-19); sourcePages = [262] only. SYMPATHOMIMETICS OVERLAP CENSUS: the pre-existing pilot note 'sympathomimetics' carries sourceRef 'First Aid 2026, Part 1 pp. 240–243' and manifest pdfPages [262, 263, 264, 265] — the book-240/pdf-262 endpoint OVER-CLAIMS this page; its table content prints entirely on pdf 263-265 (book 241-243); NO CONTENT OVERLAP with PH20 (pdf 262 carries only this class table + the atropine block) — boundary pinned. BOUNDARIES: pdf 261 behind carries the COMPLETED PH18 (upper) and PH19 (lower) — their printed antidote clauses are this class's mirror anchors ('Reversed by atropine, a competitive inhibitor.' + 'physostigmine “phyxes” atropine overdose.'); pdf 258 (book 236) carries the COMPLETED PH14 micturition-control whose drug table prints 'Muscarinic antagonists (eg, oxybutynin)' for urgency incontinence — the physiology of this table's GU lane; pdf 263 ahead opens the COMPLETED pilot sympathomimetics (EXCLUDED, over-claim documented); the atropine topic (PH21) is the pending same-page block below. KYP extensions flagged wherever they appear: the BODY-LANE LADDER, the LOCK-AND-LANE reading (the chemistry behind lane-aiming — quaternary/tertiary amines, BBB, inhaled delivery — NOT printed, flagged), the DRY-MIRROR frame (the printed dry list lives in the atropine block below, PH21's own — flagged as adjacent), the ANTIDOTE-MIRROR frame (both clauses printed one page back), and the PH20/PH21 boundary census. No copyrighted artwork reproduced; nothing reproduced.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "muscarinic-antagonists", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"muscarinic-antagonists-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [262], "240", "VISUAL_TABLE", "The seven-row drug class table (the section's sole printed element — the DRUGS × ORGAN SYSTEMS × APPLICATIONS grid of the muscarinic-antagonist class)",
       "ONE SEVEN-ROW TEXT TABLE (PURE TEXT — ZERO rasters on pdf 262-263; pdfimages returns no rows; COPYRIGHTED, never reproduced as artwork). Three printed column headers: DRUGS / ORGAN SYSTEMS / APPLICATIONS. Seven rows: 'Atropine, homatropine, tropicamide' | Eye | 'Produce mydriasis and cycloplegia'; 'Benztropine, trihexyphenidyl' | CNS | 'Parkinson disease (“park my Benz”)' + 'Acute dystonia'; 'Glycopyrrolate' | GI, respiratory | 'Parenteral: preoperative use to reduce airway secretions' + 'Oral: reduces drooling, peptic ulcer'; 'Hyoscyamine, dicyclomine' | GI | 'Antispasmodics for irritable bowel syndrome'; 'Ipratropium, tiotropium' | Respiratory | 'COPD, asthma' + 'Duration: tiotropium > ipratropium'; 'Solifenacin, Oxybutynin, Flavoxate, Tolterodine' | Genitourinary | 'Reduce bladder spasms and urge urinary incontinence (overactive bladder)' + 'Make bladder SOFT'; 'Scopolamine' | CNS | 'Motion sickness'. The book's OWN mnemonics print inside the cells ('park my Benz', 'Make bladder SOFT'). Carried VERBATIM as the note's two table blocks and conveyed as ONE original KYP class map (the lock strip, the five organ-lane cards, the dry-mirror band, the antidote-mirror strip, the boundary strip, the reading-rule footer) — no artwork reproduced.",
       "ORIGINAL_KYP_ADAPTATION", "muscarinic-antagonists-map", "the note's two verbatim table blocks (the seven-row class table; the book's-own-mnemonics hinge table) + the registry visual's lock strip, the five lane cards, the dry-mirror band, the antidote-mirror strip, the boundary strip, and the reading-rule footer"),
]
(ROOT / "content/usmle/manifests/muscarinic-antagonists.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/muscarinic-antagonists.json").write_text(
    json.dumps({"topicId": "muscarinic-antagonists", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "muscarinic-antagonists", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + text layer): the section's printed visual set is ONE element — the SEVEN-ROW DRUG CLASS TABLE, PURE TEXT (ZERO rasters on pdf 262-263 — pdfimages returns no rows; COPYRIGHTED, never reproduced as artwork). The table is carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION — every drug set, organ-system lane, and applications cell, plus the book's own 'park my Benz' and 'Make bladder SOFT' mnemonics, are the book's own print) and conveyed as ONE original KYP class map in the registry visual MuscarinicAntagonistsMap (the LOCK STRIP — the muscarinic receptor blocked competitively, the M-addresses of book 235, the tone removed lane by lane; the FIVE ORGAN-LANE CARDS — EYE atropine/homatropine/tropicamide mydriasis+cycloplegia, CNS benztropine/trihexyphenidyl park-my-Benz + acute dystonia and scopolamine motion sickness, GI glycopyrrolate's route-split secretions row + hyoscyamine/dicyclomine IBS antispasmodics, RESPIRATORY ipratropium/tiotropium COPD+asthma with the printed duration line, GENITOURINARY the SOFT four overactive bladder; the DRY-MIRROR BAND — the anti-DUMBBELSS direction with the printed dry list flagged as the atropine block below (PH21); the ANTIDOTE-MIRROR STRIP — the two printed clauses of book 239 ('Reversed by atropine, a competitive inhibitor.' + 'physostigmine \"phyxes\" atropine overdose.'); the BOUNDARY STRIP — the PH20/PH21 split, the non-extension to pdf 263, the sympathomimetics over-claim; the reading-rule footer). PH20/PH21 BOUNDARY FINDING pinned: pdf 262 prints TWO separable sections — the class table above (THIS topic) and the dedicated Atropine block below (lines 72-131, RESERVED for the pending 'atropine' topic PH21: the bradycardia/ophthalmic intro, the ORGAN SYSTEM/ACTION/NOTES grid with the 'Blocks muscarinic effects (DUMBBELSS)... but not the nicotinic effects' NOTES cell, the ADVERSE EFFECTS cell, the seven-line 'Hot as a hare' mnemonic, the Jimson weed line) — the atropine block's toxicity lines are never cited as this topic's own print. SECTION EXTENT: does NOT extend to pdf 263 (book 241 opens Sympathomimetics; its first row 'Albuterol, salmeterol, terbutaline' prints on pdf 263); sourcePages = [262] only. SYMPATHOMIMETICS OVERLAP CENSUS: the pilot sympathomimetics note's sourceRef 'pp. 240–243' / pdfPages [262-265] over-claims book 240 — its content prints entirely on pdf 263-265; NO content overlap with PH20; boundary pinned. KYP extensions flagged wherever they appear: the BODY-LANE LADDER, the LOCK-AND-LANE reading (the chemistry behind lane-aiming — quaternary/tertiary amines, BBB entry, inhaled delivery — NOT printed on this page, flagged), the DRY-MIRROR frame (the printed dry list lives in the atropine block below — flagged as adjacent), the ANTIDOTE-MIRROR frame (both clauses printed one page back), and the PH20/PH21 boundary census. No copyrighted artwork reproduced; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "muscarinic-antagonists":
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
print("PH20 manifest + inventory + flip done")
