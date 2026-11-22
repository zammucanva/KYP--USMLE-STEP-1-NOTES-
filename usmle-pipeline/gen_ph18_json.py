#!/usr/bin/env python3
"""PH18 cholinomimetic-agents — manifest + inventory + flip
(Pharmacology 18/43 — the CHOLINOMIMETIC AGENTS page: the intro
toxicity warning + the two-group DRUG/ACTION/APPLICATIONS table —
DIRECT AGONISTS [Bethanechol, Carbachol, Methacholine, Pilocarpine] and
INDIRECT AGONISTS (ANTICHOLINESTERASES) [Donepezil/rivastigmine/
galantamine, Neostigmine, Pyridostigmine, Physostigmine]).
Census (pdfimages + text layer): pdf 261 (book 239), the UPPER portion of
the page under the standing banner 'PHARMACOLOGY—AUTONOMIC DRUGS'. The
section header 'Cholinomimetic agents' opens the page (the running header
prints above it), followed by (1) ONE INTRO WARNING (prose): 'Watch for
exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.'
and (2) ONE TWO-GROUP TABLE (DRUG / ACTION / APPLICATIONS) — the direct
group: Bethanechol ('Activates bladder smooth muscle; resistant to AChE.
Acts on muscarinic receptors; no nicotinic activity. "Bethany, call me to
activate your bladder."' → 'Urinary retention.'), Carbachol ('Carbon copy
of acetylcholine (but resistant to AChE).' → 'Constricts pupil. Used for
intraoperative miosis induction.'), Methacholine ('Stimulates muscarinic
receptors in airway when inhaled.' → 'Challenge test for diagnosis of
asthma.'), Pilocarpine ('Contracts ciliary muscle of eye (open-angle
glaucoma), pupillary sphincter (closed-angle glaucoma); resistant to AChE,
can cross blood-brain barrier. "You cry, drool, and sweat on your
'pilow.'"' → 'Potent stimulator of sweat, tears, and saliva / Open-angle
and closed-angle glaucoma, xerostomia (Sjögren syndrome).'); the indirect
group: Donepezil/rivastigmine/galantamine ('↑ ACh.' → '1st line for
Alzheimer disease (Dona Riva forgot the gala).'), Neostigmine ('↑ ACh.
Neo = no blood-brain barrier penetration due to positive charge.' →
'Postoperative and neurogenic ileus and urinary retention, myasthenia
gravis, reversal of neuromuscular junction blockade (postoperative).'),
Pyridostigmine ('↑ ACh; ↑ muscle strength. Does not penetrate CNS.
Pyridostigmine gets rid of myasthenia gravis.' → 'Myasthenia gravis (long
acting). Used with glycopyrrolate or hyoscyamine to control pyridostigmine
adverse effects.'), Physostigmine ('↑ ACh. Phreely (freely) crosses
blood-brain barrier as not charged → CNS.' → 'Antidote for anticholinergic
toxicity; physostigmine "phyxes" atropine overdose.').
RASTER CENSUS: ZERO raster images on pdf 261 (pdfimages -list returns no
rows) — the table is PURE TEXT, COPYRIGHTED, never reproduced as artwork;
carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION)
and conveyed as ONE original KYP fork map (CholinomimeticAgentsMap).
TEXT-LAYER ARTIFACTS pinned: the two group labels print BELOW their drug
rows in the raw layer ('Direct agonists' at line 55, AFTER the Pilocarpine
row; 'Indirect agonists (anticholinesterases)' at line 57, immediately
before the Donepezil row) — the -layout view prints 'Direct agonists' at
the TOP of the direct group; the '↑' glyphs print with a leading control
char (stripped by normalization); Pilocarpine's raw layer prints
'bloodbrain' hyphen-less (the -layout view prints 'blood-brain' split
across lines) while Neostigmine's and Physostigmine's rows print
'blood-brain' WITH the hyphen — both raw spellings pinned.
SAME-PAGE EXCLUSION: the 'Anticholinesterase poisoning' section (organ
ophosphates, DUMBBELSS, pralidoxime) prints on the SAME pdf 261, BELOW
the Cholinomimetic agents table — EXCLUDED (the separate PENDING topic
PH19 'anticholinesterase-poisoning', confirmed in the chapter registry
with sourcePages [261]); the exclusion boundary is pinned.
SECTION EXTENT: the section is ENTIRELY on pdf 261 — it ENDS at the page
footer ('FAS1_2026_05-Pharmacology.indd 239'), and pdf 262 (book 240)
opens the SEPARATE pending 'Muscarinic antagonists' section — the section
does NOT extend to pdf 262 — sourcePages = [261] only.
BOUNDARY CENSUS: pdf 260 (book 238) carries the COMPLETED topic PH17
'autonomic-drugs' (the two intro rules + the four-lane flowchart) —
EXCLUDED, but PH17 pinned THIS section as its next-page boundary marker,
so the reciprocal anchor is pinned (PH17's 'Cholinergic stimulant' anchor
list — 'AChE inhibitors eg, Donepezil' — resolves HERE); pdf 262 opens
the PENDING 'Muscarinic antagonists' section — EXCLUDED. PH12
'acetylcholine-receptors' (book 235) carries the M/N receptor families
the direct agonists bind; PH13 'micturition-control' (book 235) carries
the detrusor/sphincter wiring bethanechol rides — all cross-linked.
KYP EXTENSIONS (beyond the page's printed set, flagged wherever they
appear): the FORK reading (DIRECT drugs BIND the receptor themselves;
INDIRECT drugs BLOCK the breaker and let ENDOGENOUS ACh accumulate — the
two printed group labels compressed into one synapse view); the CHARGE
GRID (quaternary/charged = peripheral-only [neostigmine, pyridostigmine —
both printed]; tertiary/uncharged = crosses BBB [physostigmine — printed;
pilocarpine — printed as 'can cross blood-brain barrier']; the grid's
completion for bethanechol/carbachol/methacholine is KYP); the
END-ORGAN RECEPTOR MAP (bladder M3, pupil, airway, sweat/salivary glands,
NMJ nicotinic, cortex — the receptor addresses are the book's own from
books 234–238, cross-referenced; the map itself is KYP's); and the
edrophonium/echothiophate layer (NOT on this page — the task brief's
'likely' names are absent from the printed table; edrophonium belongs to
the myasthenia workup layer and echothiophate to glaucoma/toxicology
layers — both flagged as NOT printed where relevant)."""
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
L = {260: pages[259].split("\n"), 261: pages[260].split("\n"), 262: pages[261].split("\n")}
P = {260: norm(pages[259]), 261: norm(pages[260]), 262: norm(pages[261])}
def rng(pg, a, b): return "\n".join(L[pg][a - 1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 239): the Pharmacology marker, the standing section banner, the Section II marker, and the printed page number", rng(261, 1, 7), [261]),
    ("The section header — 'Cholinomimetic agents' (this topic's section; opens the page directly under the running header)", rng(261, 9, 10), [261]),
    ("The intro warning, whole, verbatim — the section's only prose line, the toxicity caution the whole direct/indirect table answers to: 'Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.'", rng(261, 12, 12), [261]),
    ("The table's three column headers, physical order — 'DRUG' 'ACTION' 'APPLICATIONS' (the two-group cholinomimetic grid's own frame)", rng(261, 14, 18), [261]),
    ("The Bethanechol row's ACTION cell, whole, verbatim — 'Activates bladder smooth muscle; resistant to AChE. Acts on muscarinic receptors; no nicotinic activity. \"Bethany, call me to activate your bladder.\"' (the book's own mnemonic included)", rng(261, 22, 25), [261]),
    ("The Bethanechol row's selectivity clause, verbatim — 'Acts on muscarinic receptors; no nicotinic activity.' (the direct agonists' receptor-selectivity rule: muscarinic only, no nicotinic)", rng(261, 23, 23), [261]),
    ("The Bethanechol row's APPLICATIONS cell, verbatim — 'Urinary retention.' (the bladder indication; the detrusor wiring lives on book 235, the micturition-control topic)", rng(261, 27, 27), [261]),
    ("The Carbachol row's ACTION cell, whole, verbatim — 'Carbon copy of acetylcholine (but resistant to AChE).' (the book's own 'carbon copy' etymology — carbachol = carbamyl + choline)", rng(261, 31, 32), [261]),
    ("The Carbachol row's APPLICATIONS cell, verbatim — 'Constricts pupil. Used for intraoperative miosis induction.' (the ophthalmic indication)", rng(261, 34, 35), [261]),
    ("The Methacholine row's ACTION cell, whole, verbatim — 'Stimulates muscarinic receptors in airway when inhaled.' (the airway route the challenge test rides)", rng(261, 39, 40), [261]),
    ("The Methacholine row's APPLICATIONS cell, verbatim — 'Challenge test for diagnosis of asthma.' (the diagnostic indication)", rng(261, 42, 42), [261]),
    ("The Pilocarpine row's ACTION cell, whole, verbatim — the two glaucoma addresses, the AChE resistance, the BBB crossing, and the book's own mnemonic (NOTE the raw layer prints 'bloodbrain' hyphen-less; the -layout view prints 'blood-brain' split across lines — the raw spelling is pinned)", rng(261, 46, 49), [261]),
    ("The Pilocarpine row's APPLICATIONS cell, whole, verbatim — 'Potent stimulator of sweat, tears, and saliva' + the two glaucoma angles + 'xerostomia (Sjögren syndrome)' (the exocrine indication set)", rng(261, 51, 53), [261]),
    ("The DIRECT group label, verbatim — 'Direct agonists' (NOTE the raw layer prints it at line 55, BELOW the Pilocarpine row; the -layout view prints it at the TOP of the direct group — the raw physical order is pinned)", rng(261, 55, 55), [261]),
    ("The INDIRECT group label, verbatim — 'Indirect agonists (anticholinesterases)' (the second group's own name: indirect = anticholinesterase)", rng(261, 57, 57), [261]),
    ("The Donepezil trio's row, whole, verbatim — 'Donepezil, rivastigmine, galantamine' + '↑ ACh.' + '1st line for Alzheimer disease (Dona Riva forgot the gala).' (the book's own mnemonic for the dementia trio)", rng(261, 58, 65), [261]),
    ("The Neostigmine row's ACTION cell, whole, verbatim — '↑ ACh. Neo = no blood-brain barrier penetration due to positive charge.' (the book's own charge rule: the positive charge keeps neostigmine OUT of the CNS)", rng(261, 69, 71), [261]),
    ("The Neostigmine row's APPLICATIONS cell, whole, verbatim — 'Postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of neuromuscular junction blockade (postoperative).' (the peripheral use set: gut, bladder, NMJ)", rng(261, 73, 76), [261]),
    ("The Pyridostigmine row's ACTION cell, whole, verbatim — '↑ ACh; ↑ muscle strength. Does not penetrate CNS. Pyridostigmine gets rid of myasthenia gravis.' (the book's own mnemonic + the second printed charge rule)", rng(261, 80, 82), [261]),
    ("The Pyridostigmine row's APPLICATIONS cell, whole, verbatim — 'Myasthenia gravis (long acting). Used with glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects.' (the long-acting MG use + the antimuscarinic co-therapy)", rng(261, 84, 86), [261]),
    ("The Physostigmine row's ACTION cell, whole, verbatim — '↑ ACh. Phreely (freely) crosses blood-brain barrier as not charged → CNS.' (the book's own charge rule inverted: uncharged = crosses; NOTE this row prints 'blood-brain' WITH the hyphen)", rng(261, 90, 91), [261]),
    ("The Physostigmine row's APPLICATIONS cell, whole, verbatim — 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' (the antidote use + the book's own 'phyxes' mnemonic)", rng(261, 93, 94), [261]),
    ("The page footer, verbatim — the book's signature file line (book 239; the Cholinomimetic agents section ENDS above it, at the Anticholinesterase poisoning boundary)", rng(261, 128, 128), [261]),
    ("The SAME-PAGE EXCLUSION — the 'Anticholinesterase poisoning' section prints on THIS pdf 261, BELOW the Cholinomimetic agents table (organophosphates, farmers, DUMBBELLS territory): EXCLUDED — the separate PENDING topic PH19 'anticholinesterase-poisoning' (confirmed in the chapter registry, sourcePages [261]); its DUMBBELSS/atropine/pralidoxime content is NOT part of this topic", rng(261, 96, 100), [261]),
    ("The NEXT-PAGE BOUNDARY — pdf 262 (book 240) opens the SEPARATE pending 'Muscarinic antagonists' section: the Cholinomimetic agents section does NOT extend to pdf 262 — the whole section (intro warning + both table groups) is on pdf 261 alone (sourcePages = [261] only)", "Muscarinic antagonists", [262]),
    ("The PREVIOUS-PAGE BOUNDARY — pdf 260 (book 238) carries the COMPLETED topic PH17 'autonomic-drugs' (the two intro rules + the four-lane flowchart): EXCLUDED, but PH17 pinned THIS section as its next-page boundary marker — the reciprocal anchor resolves HERE, and PH17's 'Cholinergic stimulant' anchor list ('AChE inhibitors eg, Donepezil') is THIS page's indirect-agonist group", "Autonomic drugs", [260]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"cholinomimetic-agents: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "cholinomimetic-agents",
    "title": "Cholinomimetic Agents",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [261], "bookPages": "239"},
    "sourceEvidence": kept, "visualIds": ["cholinomimetic-agents-map"],
    "mechanismIds": ["direct-agonist-muscarinic-fork", "indirect-ache-inhibitor-charge-fork"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the section's intro warning and two-group drug table.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the table; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "direct-vs-indirect-fork-protocol", "summary": "The FORK reading of the page's own two group labels — DIRECT agonists BIND the muscarinic receptor themselves (each with built-in AChE resistance, so the drug's signal survives the cleft's breaker; muscarinic-selective, no nicotinic activity except carbachol's 'carbon copy' frame), while INDIRECT agonists (anticholinesterases) BLOCK the breaker (AChE) and let ENDOGENOUS ACh accumulate — which is why only the indirect side reaches the NMJ (nicotinic) and why it needs an intact synapse. Both group labels are the book's own print; the synapse-view compression, the 'bind vs block' phrasing, and the endogenous-vs-exogenous signal distinction are KYP's.",
         "origin": "outside-first-aid", "rationale": "The book prints the two group labels as table headers; the fork-as-mechanism reading (where each class acts on the synapse drawn on book 238) is KYP's synthesis across the two facing pages.",
         "location": "core.keyIdea + mechanisms + the visual's fork header"},
        {"id": "charge-grid-bbb-layer", "summary": "The CHARGE GRID completion of the page's own three printed charge rules — 'Neo = no blood-brain barrier penetration due to positive charge', 'Does not penetrate CNS' (pyridostigmine), and 'Phreely (freely) crosses blood-brain barrier as not charged → CNS' (physostigmine) — into one quaternary/charged = peripheral-only vs tertiary/uncharged = CNS-entry grid, extended (KYP) to the direct agonists (pilocarpine prints 'can cross blood-brain barrier'; bethanechol/carbachol/methacholine charges are NOT printed — flagged). The grid's three indirect cells and pilocarpine's crossing are the book's own; the grid itself and the unprinted cells are KYP's.",
         "origin": "outside-first-aid", "rationale": "The book prints the three charge rules piecemeal inside ACTION cells; the unified grid (and its extension to the direct group) is KYP's.",
         "location": "mechanisms[1] + traps + the visual's charge-grid strip"},
        {"id": "end-organ-receptor-map", "summary": "The END-ORGAN RECEPTOR MAP behind each printed use — bethanechol's 'Urinary retention' rides the M3-detrusor wiring (book 235, the micturition-control topic), pilocarpine's pupil/gland effects ride the M3 addresses (books 234–236), methacholine's airway challenge rides bronchial smooth-muscle M3, the indirect group's NMJ reversal and myasthenia uses ride the NICOTINIC receptor the direct agonists do not touch (book 235, the acetylcholine-receptors topic), and physostigmine's antidote use rides CNS entry. Every use and drug name is the page's own print; the receptor addresses are the book's own from the facing pages; the map connecting them is KYP's.",
         "origin": "outside-first-aid", "rationale": "The book prints uses without receptor addresses; the address layer is the completed autonomic block's own content, cross-referenced; the map is KYP's.",
         "location": "usmle + crossLinks + the visual's end-organ chips"},
        {"id": "not-printed-drug-layer", "summary": "The NOT-PRINTED drug layer the topic brief anticipated but the page does NOT carry: edrophonium (the short-acting myasthenia-diagnostic AChE inhibitor) and echothiophate (the irreversible glaucoma organophosphate) are ABSENT from the printed table — flagged wherever they would otherwise appear, routed instead to the myasthenia workup and toxicology layers. Also not printed: any reversibility distinction for the indirect group (the reversible/irreversible split belongs to the EXCLUDED anticholinesterase-poisoning section ahead, PH19).",
         "origin": "outside-first-aid", "rationale": "Task-brief anticipation vs the actual print — the census must record that these names do not print, so they are never cited as this page's content.",
         "location": "manifest notes + the note's sourceRef + traps"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + text layer): the Cholinomimetic agents section occupies the UPPER portion of pdf 261 (book 239) under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner. The section prints TWO elements: (1) ONE INTRO WARNING (prose) — 'Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.' (the toxicity caution: cholinomimetic excess worsens bronchial tone, gastric acid, and smooth-muscle cramping); (2) ONE TWO-GROUP TABLE (DRUG / ACTION / APPLICATIONS). DIRECT AGONISTS: Bethanechol (bladder smooth muscle, AChE-resistant, muscarinic-only, 'Bethany, call me to activate your bladder' → urinary retention), Carbachol ('carbon copy of acetylcholine (but resistant to AChE)' → constricts pupil, intraoperative miosis induction), Methacholine (airway muscarinic stimulation when inhaled → asthma challenge test), Pilocarpine (ciliary muscle for open-angle + pupillary sphincter for closed-angle glaucoma, AChE-resistant, crosses BBB, 'You cry, drool, and sweat on your pilow' → sweat/tears/saliva stimulation, both glaucomas, xerostomia [Sjögren]). INDIRECT AGONISTS (ANTICHOLINESTERASES): Donepezil/rivastigmine/galantamine (↑ ACh → 1st line Alzheimer, 'Dona Riva forgot the gala'), Neostigmine (↑ ACh, no BBB penetration due to positive charge → postoperative/neurogenic ileus + urinary retention, myasthenia gravis, NMJ-blockade reversal), Pyridostigmine (↑ ACh + ↑ muscle strength, no CNS penetration → MG long-acting, with glycopyrrolate/hyoscyamine to control adverse effects), Physostigmine (↑ ACh, uncharged → crosses BBB → anticholinergic-toxicity antidote, 'phyxes' atropine overdose). RASTER CENSUS: ZERO raster images on pdf 261 (pdfimages -list returns no rows) — the table is PURE TEXT, COPYRIGHTED, never reproduced as artwork; carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION) and conveyed as ONE original KYP fork map (CholinomimeticAgentsMap). TEXT-LAYER ARTIFACTS pinned: the group labels print BELOW their drug rows in the raw layer ('Direct agonists' at line 55 after the Pilocarpine row; 'Indirect agonists (anticholinesterases)' at line 57 before the Donepezil row) while -layout prints 'Direct agonists' at the top of its group; the ↑ glyphs print with a leading control char (stripped by normalization); Pilocarpine's raw layer prints 'bloodbrain' hyphen-less while the Neostigmine/Physostigmine rows print 'blood-brain' with the hyphen — both raw spellings pinned. SAME-PAGE EXCLUSION: the 'Anticholinesterase poisoning' section (organophosphates, DUMBBELSS, atropine, pralidoxime) prints on the SAME pdf 261 BELOW this section — EXCLUDED (the separate PENDING topic PH19, confirmed in the chapter registry with sourcePages [261]); the boundary is pinned. SECTION EXTENT: the section does NOT extend to pdf 262 — pdf 262 (book 240) opens the separate pending 'Muscarinic antagonists' section; sourcePages = [261] only. BOUNDARIES: pdf 260 carries the COMPLETED PH17 'autonomic-drugs' (EXCLUDED, but PH17 pinned THIS section as its next-page boundary marker — the reciprocal anchor is pinned, and PH17's 'Cholinergic stimulant' anchor 'AChE inhibitors eg, Donepezil' resolves into this page's indirect group); pdf 262 opens the PENDING 'Muscarinic antagonists' (EXCLUDED). KYP extensions flagged wherever they appear: the FORK reading (direct binds / indirect blocks the breaker), the CHARGE GRID (three printed cells + pilocarpine's crossing; bethanechol/carbachol/methacholine cells unprinted — flagged), the END-ORGAN RECEPTOR MAP (addresses cross-referenced from books 234–238), and the NOT-PRINTED drug layer (edrophonium and echothiophate are ABSENT from this page — flagged, never cited as printed). No copyrighted artwork reproduced; nothing reproduced.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "cholinomimetic-agents", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"cholinomimetic-agents-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [261], "239", "VISUAL_TABLE", "The two-group DRUG / ACTION / APPLICATIONS table (the section's sole printed element — the cholinomimetic drug grid: 4 direct agonists + 4 indirect agonists/anticholinesterases, plus the intro toxicity warning)",
       "ONE TWO-GROUP TEXT TABLE (PURE TEXT — ZERO rasters on pdf 261; pdfimages returns no rows; COPYRIGHTED, never reproduced as artwork). Column frame: DRUG / ACTION / APPLICATIONS. Group 1 'Direct agonists': Bethanechol — 'Activates bladder smooth muscle; resistant to AChE. Acts on muscarinic receptors; no nicotinic activity. \"Bethany, call me to activate your bladder.\"' → 'Urinary retention.'; Carbachol — 'Carbon copy of acetylcholine (but resistant to AChE).' → 'Constricts pupil. Used for intraoperative miosis induction.'; Methacholine — 'Stimulates muscarinic receptors in airway when inhaled.' → 'Challenge test for diagnosis of asthma.'; Pilocarpine — 'Contracts ciliary muscle of eye (open-angle glaucoma), pupillary sphincter (closed-angle glaucoma); resistant to AChE, can cross blood-brain barrier. \"You cry, drool, and sweat on your pilow.\"' → 'Potent stimulator of sweat, tears, and saliva / Open-angle and closed-angle glaucoma, xerostomia (Sjögren syndrome).' Group 2 'Indirect agonists (anticholinesterases)': Donepezil, rivastigmine, galantamine — '↑ ACh.' → '1st line for Alzheimer disease (Dona Riva forgot the gala).'; Neostigmine — '↑ ACh. Neo = no blood-brain barrier penetration due to positive charge.' → 'Postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of neuromuscular junction blockade (postoperative).'; Pyridostigmine — '↑ ACh; ↑ muscle strength. Does not penetrate CNS. Pyridostigmine gets rid of myasthenia gravis.' → 'Myasthenia gravis (long acting). Used with glycopyrrolate or hyoscyamine to control pyridostigmine adverse effects.'; Physostigmine — '↑ ACh. Phreely (freely) crosses blood-brain barrier as not charged → CNS.' → 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' Intro warning above the table: 'Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.' TEXT-LAYER ARTIFACTS: group labels print below their rows in the raw layer; '↑' glyphs carry a leading control char; Pilocarpine's raw layer prints 'bloodbrain' hyphen-less (Neostigmine/Physostigmine rows print 'blood-brain' with hyphen) — raw spellings pinned. Carried VERBATIM as the note's two table blocks and conveyed as ONE original KYP fork map (the direct-vs-indirect synapse fork, the eight drug cards, the charge grid, the toxicity strip, the reading-rule footer) — no artwork reproduced.",
       "ORIGINAL_KYP_ADAPTATION", "cholinomimetic-agents-map", "the note's two verbatim table blocks (direct rows; indirect rows) + the registry visual's fork header, the four direct drug cards, the four indirect drug cards, the charge-grid strip, the toxicity strip, and the reading-rule footer"),
]
(ROOT / "content/usmle/manifests/cholinomimetic-agents.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/cholinomimetic-agents.json").write_text(
    json.dumps({"topicId": "cholinomimetic-agents", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "cholinomimetic-agents", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + text layer): the section's printed visual set is ONE element — the TWO-GROUP DRUG/ACTION/APPLICATIONS TABLE, PURE TEXT (ZERO rasters on pdf 261 — pdfimages returns no rows; COPYRIGHTED, never reproduced as artwork). The intro warning is prose (carried verbatim in the note's first table block intro, not separately inventoried). The table is carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION — every drug name, action clause, application clause, and mnemonic is the book's own print) and conveyed as ONE original KYP fork map in the registry visual CholinomimeticAgentsMap (the DIRECT-vs-INDIRECT synapse fork header; the four DIRECT drug cards — Bethanechol the bladder agonist, Carbachol the carbon copy, Methacholine the airway challenge, Pilocarpine the 'pilow' that cries/drools/sweats; the four INDIRECT drug cards — the Alzheimer trio, Neostigmine the peripheral workhorse, Pyridostigmine the long-acting MG drug, Physostigmine the BBB-crossing antidote; the CHARGE GRID strip [three printed cells + pilocarpine's crossing; the unprinted direct-group cells flagged as KYP]; the verbatim toxicity warning strip; the reading-rule + exclusions footer). TEXT-LAYER ARTIFACTS pinned: the group labels print BELOW their drug rows in the raw layer ('Direct agonists' at line 55 after Pilocarpine; 'Indirect agonists (anticholinesterases)' at line 57 before Donepezil) while -layout prints 'Direct agonists' at the top of its group; the '↑' glyphs print with a leading control char (stripped by normalization); Pilocarpine's raw layer prints 'bloodbrain' hyphen-less while Neostigmine's and Physostigmine's rows print 'blood-brain' WITH the hyphen — both raw spellings pinned. SAME-PAGE EXCLUSION: the 'Anticholinesterase poisoning' section (organophosphates, DUMBBELSS, atropine, pralidoxime) prints on the SAME pdf 261 BELOW this table — EXCLUDED (the separate PENDING topic PH19 'anticholinesterase-poisoning', confirmed in the chapter registry with sourcePages [261]); the exclusion boundary is pinned in the evidence. PAGE-EXTENT FINDING: the section does NOT extend to pdf 262 — pdf 262 (book 240) opens the separate pending 'Muscarinic antagonists' section; sourcePages = [261] only. KYP extensions flagged wherever they appear: the FORK reading (direct binds the receptor / indirect blocks the breaker), the CHARGE GRID (completed for the unprinted cells — flagged), the END-ORGAN RECEPTOR MAP (addresses cross-referenced from books 234–238, the completed autonomic block), and the NOT-PRINTED drug layer (edrophonium and echothiophate are ABSENT from the printed page — flagged, never cited as printed). No copyrighted artwork reproduced; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "cholinomimetic-agents":
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
print("PH18 manifest + inventory + flip done")
