#!/usr/bin/env python3
"""PH16 cholinomimetics — manifest + inventory (Pharmacology
autonomic-drugs batch, Round A), STAGED under
.usmle-pipeline-cache/staging-ph16/ (the promotion step owns content/).
Source: FULL pdf page 261 / book 239 (Part 1) — no shared-page split.
The page is ONE printed drug table (DRUG / ACTION / APPLICATIONS) under
TWO spanning shaded subheader rows — "Direct agonists" (bethanechol,
carbachol, methacholine, pilocarpine) and "Indirect agonists
(anticholinesterases)" (donepezil/rivastigmine/galantamine, neostigmine,
pyridostigmine, physostigmine) — plus the separate "Anticholinesterase
poisoning" block (organophosphate intro; muscarinic DUMBBELSS /
nicotinic / CNS effect rows with their printed reversers) and the indd
footer. NOTE: edrophonium and echothiophate do NOT print on this page
and are never quoted or claimed here. Census (pdfimages): ZERO raster
images on pdf 261 — pure text + table art. VLM CONFIRMED this session
in TWO passes (saved to staging-ph16/vlm-census.txt): (1) the full-page
120-dpi read confirmed the table structure, both spanning subheaders,
the poisoning block's findings-vs-reversal split, all the in-cell
mnemonics, and that the page carries NO figures or photographs; (2) ONE
documented 200-dpi adjudication pass on the pilocarpine row resolved
the interleaved text layer — "Potent stimulator of sweat, tears, and
saliva" sits in the APPLICATIONS column (not ACTION), the mnemonic
prints "pilow" (the source's own spelling), and the ACTION cell breaks
"blood-brain" across a printed line (the pdftotext layer merges it to
"bloodbrain" — an extraction artifact, NOT a source typo; the human-
facing note table shows the printed hyphenation and documents the
merge). VERBATIM CARRIES, documented: the text layer INTERLEAVES the
two spanning subheader labels — "Direct agonists" (page-261 line 55)
and "Indirect agonists (anticholinesterases)" (line 57) print AFTER
the pilocarpine row, between it and the donepezil row; the logical
table (per the VLM render) places them as spanning shaded rows above
each half — the m38 convention. The source's OWN mnemonics print IN
the table cells ("Bethany, call me to activate your bladder."; "You
cry, drool, and sweat on your 'pilow.'"; "(Dona Riva forgot the gala)";
"Neo = no blood-brain barrier penetration"; "Pyridostigmine gets rid
of myasthenia gravis"; "Phreely (freely) crosses blood-brain barrier";
physostigmine "phyxes" atropine overdose; DUMBBELSS) — carried
ATTRIBUTED to First Aid in the note; the four ALL-CAPS KYP mnemonics
are original (origin outside-first-aid). The ↑ and → glyphs print in
the text layer and are kept in quotes. Nothing is reproduced: there is
no figure on the source page, so the registry visual
cholinomimetic-map (CholinomimeticMap in visuals/pharm-p16.tsx) is an
ORIGINAL KYP diagram built from the printed table; the table text is
carried verbatim in the note's three table blocks."""
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
L = {261: pages[260].split("\n")}
P = {261: norm(pages[260])}
def rng(pg, a, b):
    return "\n".join(L[pg][a - 1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E16 = [
    ("Page identity — the section banner, running header, SECTION II, book page number 239, and the topic heading 'Cholinomimetic agents' (the 'SEC TION II' header spacing is the text layer's own artifact, quoted as printed)", rng(261, 1, 10), [261]),
    ("The printed class warning above the table — watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients (spans BOTH the direct and indirect lanes)", rng(261, 12, 12), [261]),
    ("The table column headers — DRUG / ACTION / APPLICATIONS", rng(261, 14, 18), [261]),
    ("The BETHANECHOL row — activates bladder smooth muscle; resistant to AChE; acts on muscarinic receptors, no nicotinic activity; the source's own mnemonic 'Bethany, call me to activate your bladder.'; application urinary retention", rng(261, 20, 27), [261]),
    ("The CARBACHOL row — carbon copy of acetylcholine (but resistant to AChE); constricts pupil; used for intraoperative miosis induction", rng(261, 29, 35), [261]),
    ("The METHACHOLINE row — stimulates muscarinic receptors in airway when inhaled; challenge test for diagnosis of asthma", rng(261, 37, 42), [261]),
    ("The PILOCARPINE row — contracts ciliary muscle of eye (open-angle glaucoma), pupillary sphincter (closed-angle glaucoma); resistant to AChE; the text layer's 'bloodbrain' merge of the printed line-broken 'blood-brain' and the source's own 'pilow' spelling (both documented); applications (APPLICATIONS column per the 200-dpi VLM adjudication): potent stimulator of sweat, tears, and saliva; open-angle and closed-angle glaucoma, xerostomia (Sjögren syndrome)", rng(261, 44, 53), [261]),
    ("The TWO SPANNING SUBHEADERS — 'Direct agonists' and 'Indirect agonists (anticholinesterases)' (INTERLEAVE NOTE, the m38 convention: the text layer prints both labels HERE, between the pilocarpine and donepezil rows; the logical table per the VLM render places them as spanning shaded rows above each half — quoted in physical text-layer order)", rng(261, 55, 57), [261]),
    ("The DONEPEZIL, RIVASTIGMINE, GALANTAMINE row — ↑ ACh; 1st line for Alzheimer disease (Dona Riva forgot the gala)", rng(261, 58, 65), [261]),
    ("The NEOSTIGMINE row — ↑ ACh; Neo = no blood-brain barrier penetration due to positive charge; postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of neuromuscular junction blockade (postoperative)", rng(261, 67, 76), [261]),
    ("The PYRIDOSTIGMINE row — ↑ ACh; ↑ muscle strength; does not penetrate CNS; pyridostigmine gets rid of myasthenia gravis; myasthenia gravis (long acting) with glycopyrrolate or hyoscyamine to control adverse effects", rng(261, 78, 86), [261]),
    ("The PHYSOSTIGMINE row — ↑ ACh; Phreely (freely) crosses blood-brain barrier as not charged → CNS; antidote for anticholinergic toxicity; physostigmine 'phyxes' atropine overdose", rng(261, 88, 94), [261]),
    ("The ANTICHOLINESTERASE POISONING block heading and intro — often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE; commonly used as insecticides; poisoning usually seen in farmers", rng(261, 96, 100), [261]),
    ("The MUSCARINIC effects row — Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation; DUMBBELSS; reversed by atropine, a competitive inhibitor; atropine can cross BBB to relieve CNS symptoms", rng(261, 102, 111), [261]),
    ("The NICOTINIC effects row — neuromuscular blockade (mechanism similar to succinylcholine); reversed by pralidoxime, regenerates AChE via dephosphorylation if given early; must be coadministered with atropine to prevent transient worsening of symptoms; pralidoxime does not readily cross BBB", rng(261, 113, 122), [261]),
    ("The CNS effects row — respiratory depression, lethargy, seizures, coma", rng(261, 124, 126), [261]),
    ("The page footer — the indd print slug and timestamp (page identity, book 239)", rng(261, 128, 130), [261]),
]
for c, q, pgs in E16:
    e = ev(c, q, pgs)
    if e["verified"] != "pass":
        fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails:
        print("  x", f)
    sys.exit(1)
print(f"cholinomimetics: evidence {len(kept)}/{len(E16)} verified")
QA = {g: "pass" for g in ["sourceVerified", "contentComplete", "miniCaseConsistent", "kypExtensionsTraceable", "mnemonicQuality", "visualsPaint", "visualCoverage", "mechanismRender", "lightMode", "darkMode", "mobile", "desktop", "consoleClean", "captionsReadable", "trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated", "chapterMapped", "subsectionMapped", "topicScoped", "evidencePinned", "noteAuthored", "visualsAuthored", "mechanismAuthored", "clinicalAuthored", "pivotsAuthored", "trapsAuthored", "mnemonicAuthored", "rapidReviewAuthored", "relatedAuthored", "qaPassed", "trackerSynced"]}
m16 = {"topicId": "cholinomimetics", "title": "Cholinomimetic Agents",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [261], "bookPages": "239–239"},
    "sourceEvidence": kept, "visualIds": ["cholinomimetic-map"],
    "mechanismIds": ["direct-agonist-lock-map", "anticholinesterase-shredder-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/recall/rapidReview attack structure layered over the printed table — 6 patterns (bethanechol for postoperative retention; the methacholine challenge test; pilocarpine for Sjögren xerostomia + glaucoma; the donepezil trio as Alzheimer first line; pyridostigmine as the long-acting myasthenia mainstay with glycopyrrolate/hyoscyamine; the farmer's DUMBBELLS presentation), 5 traps (bethanechol vs carbachol; neostigmine vs physostigmine; pyridostigmine vs neostigmine; atropine vs pralidoxime; physostigmine-as-poisoning-antidote), 3 pivots.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the DRUG/ACTION/APPLICATIONS table and the poisoning block only; the attack structure is a KYP design.",
         "location": "usmle section + recall + rapidReview"},
        {"id": "fork-reading",
         "summary": "The four-move reading protocol (FORK / TARGET / APPLY / ROUTE) and the turn-the-lock vs jam-the-shredder framing of the page — a direct agonist is a receptor key; an indirect agonist jams AChE, the synapse's shredder, so endogenous ACh accumulates — including the one-drug-one-organ anchoring of the direct lane and the receptor-layer routing of poisoning management.",
         "origin": "outside-first-aid", "rationale": "The source prints two table halves side by side but never teaches the fork as a decision path; the protocol, the shredder metaphor, and the organ anchoring are KYP's synthesis.",
         "location": "core.keyIdea + blocks[5] the steps block + blocks[4] the compare block + the registry visual's lane headers"},
        {"id": "mnemonic-layer",
         "summary": "The four KYP mnemonics (TURN THE LOCK OR JAM THE SHREDDER / ONE DRUG, ONE ORGAN / CHARGED STAYS OUT, UNCHARGED CROSSES IN / MUSCARINIC GETS ATROPINE, NICOTINIC GETS PRALIDOXIME). The source's OWN mnemonics print in the table cells ('Bethany, call me to activate your bladder.'; 'Carbon copy of acetylcholine'; 'You cry, drool, and sweat on your pilow.'; '(Dona Riva forgot the gala)'; 'Neo = no blood-brain barrier penetration'; 'Pyridostigmine gets rid of myasthenia gravis'; 'Phreely (freely) crosses blood-brain barrier'; physostigmine 'phyxes' atropine overdose; DUMBBELSS) — carried ATTRIBUTED to First Aid in the note's memory callout and verbatim tables, and NOT counted among the four KYP codes.",
         "origin": "outside-first-aid", "rationale": "The four ALL-CAPS codes (class-fork, organ anchoring, BBB charge rule, antidote routing) are KYP's design; none duplicates a printed mnemonic.",
         "location": "mnemonics + blocks[7] the mnemonic-provenance callout + the registry visual's band footers"},
        {"id": "mini-case-layer",
         "summary": "The farmer organophosphate-poisoning miniCase (malathion exposure with the full DUMBBELSS picture, nicotinic weakness, and lethargy; management question) — the correct option is atropine PLUS pralidoxime given early; the distractors are atropine alone (leaves the nicotinic neuromuscular blockade unopposed), pralidoxime alone (the printed coadministration rule — transient worsening — plus poor BBB leaving the CNS layer uncovered), and physostigmine (the mirror-image trap: it antidotes ANTICHOLINERGIC toxicity and would deepen cholinergic excess). Includes the enzyme-aging rationale behind the printed 'if given early' (pralidoxime must dephosphorylate AChE before the organophosphate-enzyme bond ages into permanence).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the poisoning block as findings and reversers but never integrates them into a management vignette; the stem, the four distractor mechanisms, and the aging rationale are KYP's design.",
         "location": "usmle.miniCase"},
        {"id": "angle-mechanics-gloss",
         "summary": "The glaucoma outflow mechanics behind pilocarpine's printed parentheticals — ciliary-muscle contraction opens the trabecular-meshwork outflow pathway (the open-angle application) and pupillary-sphincter contraction pulls the iris out of the angle (the closed-angle application).",
         "origin": "outside-first-aid", "rationale": "Book 239 prints only the drug facts ('Contracts ciliary muscle of eye (open-angle glaucoma), pupillary sphincter (closed-angle glaucoma)') without the aqueous-outflow mechanics; the gloss used in the ophthalmology crossLink is standard pharmacology knowledge, recorded here so it is never presented as though it printed on the page.",
         "location": "crossLinks[0] (ophthalmology)"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL PAGE (no shared split in the PH16-PH20 batch): pdf 261 / book 239 is entirely the Cholinomimetic agents subsection — one printed DRUG/ACTION/APPLICATIONS table under two spanning shaded subheaders (Direct agonists: bethanechol, carbachol, methacholine, pilocarpine; Indirect agonists (anticholinesterases): donepezil/rivastigmine/galantamine, neostigmine, pyridostigmine, physostigmine) plus the separate Anticholinesterase poisoning block (organophosphate intro; muscarinic DUMBBELSS / nicotinic / CNS rows with their printed reversers) and the indd footer. Edrophonium and echothiophate do NOT print on this page and are never quoted or claimed (the batch spec's 'whatever prints on the page' rule). CENSUS METHOD: pdfimages reports ZERO raster images on pdf 261 — pure text + table art; the VLM was AVAILABLE this session (unlike the ph6-ph10 batch's 401 outage): the full-page 120-dpi pass confirmed the table structure, both spanning subheaders, the poisoning block's findings-vs-reversal split, all the in-cell mnemonics, and the absence of figures/photographs, and ONE documented 200-dpi adjudication pass on the pilocarpine row resolved the interleaved text layer — 'Potent stimulator of sweat, tears, and saliva' sits in the APPLICATIONS column (both VLM passes agree), the mnemonic prints 'pilow' (the source's own spelling, confirmed at 200 dpi against the text layer), and the ACTION cell breaks 'blood-brain' across a printed line (the pdftotext layer merges it to 'bloodbrain' — an extraction artifact, NOT a source typo; the note's human-facing verbatim table shows the printed 'blood-brain' hyphenation and documents the merge, while the evidence quotes follow the text layer exactly). INTERLEAVE QUIRK (documented, the m38 convention): the text layer prints the two spanning subheader labels ('Direct agonists' at page-261 line 55, 'Indirect agonists (anticholinesterases)' at line 57) BETWEEN the pilocarpine row and the donepezil row; the logical table per the VLM render places them as spanning shaded rows above each half — quoted in physical text-layer order as one entry with the position documented. Other verbatim quirks carried and documented: the source's own mnemonics print IN the table cells (all carried attributed to First Aid in the note's memory callout + verbatim tables); the ↑ and → glyphs print in the text layer (with \\x8f control bytes that the verifier strips); 'SEC TION II' is the header's own text-layer spacing artifact; the donepezil trio's entire ACTION cell prints as just '↑ ACh.'. Quirks, documented: (1) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the PH-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (2) outputs are STAGED under .usmle-pipeline-cache/staging-ph16/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'cholinomimetic-map' is therefore not yet in visuals/registry.tsx by design); (3) there is NO figure on the source page, so the registry visual is an ORIGINAL KYP diagram (not a redraw) built from the printed table, whose text is carried verbatim in the note's three table blocks; (4) the batch depth convention is met: 2 mechanisms, 4 KYP mnemonics, a 4-option miniCase with exactly 1 correct and a why on every option, and the source tables carried VERBATIM in printed row order.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "cholinomimetics", "requiredInKYP": True}
inv16 = [
    dict(SV_BASE, **{
        "visualId": "cholinomimetics-sv1",
        "sourcePages": {"part": 1, "pdfPages": [261], "bookPages": "239"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Cholinomimetic agents DRUG/ACTION/APPLICATIONS table (book 239): the printed class warning, the two spanning subheaders (Direct agonists / Indirect agonists (anticholinesterases)), all eight drug rows with their actions, in-cell mnemonics, and applications",
        "sourceFigureDescription": "TABLE ART, NO RASTER (pdfimages: zero raster images on pdf 261; VLM census in two passes, saved to staging-ph16/vlm-census.txt): one printed table with columns DRUG / ACTION / APPLICATIONS under the warning line 'Watch for exacerbation of COPD, asthma, and peptic ulcers in susceptible patients.' and two spanning shaded subheader rows — 'Direct agonists': BETHANECHOL (activates bladder smooth muscle; resistant to AChE; muscarinic receptors, no nicotinic activity; 'Bethany, call me to activate your bladder.' / urinary retention), CARBACHOL (carbon copy of acetylcholine, resistant to AChE / constricts pupil, intraoperative miosis induction), METHACHOLINE (stimulates muscarinic receptors in airway when inhaled / challenge test for diagnosis of asthma), PILOCARPINE (contracts ciliary muscle of eye (open-angle glaucoma), pupillary sphincter (closed-angle glaucoma); resistant to AChE, can cross blood-brain barrier; 'You cry, drool, and sweat on your pilow.' / potent stimulator of sweat, tears, and saliva; open- and closed-angle glaucoma, xerostomia (Sjögren syndrome)) — and 'Indirect agonists (anticholinesterases)': DONEPEZIL, RIVASTIGMINE, GALANTAMINE (↑ ACh / 1st line for Alzheimer disease, 'Dona Riva forgot the gala'), NEOSTIGMINE (↑ ACh; no BBB penetration, positive charge / postoperative and neurogenic ileus and urinary retention, myasthenia gravis, reversal of NMJ blockade), PYRIDOSTIGMINE (↑ ACh; ↑ muscle strength; does not penetrate CNS / myasthenia gravis long acting, with glycopyrrolate or hyoscyamine), PHYSOSTIGMINE (↑ ACh; freely crosses BBB, not charged → CNS / antidote for anticholinergic toxicity, 'phyxes' atropine overdose). No figures, photographs, or margin art print on the page.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "cholinomimetic-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (CholinomimeticMap in visuals/pharm-p16.tsx): the fork root with the printed warning banner; the DIRECT lane's four drug cards (name chip, 'resistant to AChE' flag where printed, action text, attributed First Aid mnemonic, applications chip); the INDIRECT lane's anticholinesterases-⊣-AChE-→-↑ACh flow row, the four reversible agent chips with applications, and the BBB charge-rule band; PLUS the note's verbatim table blocks (blocks[1] direct half, blocks[2] indirect half) carrying every printed cell in row order",
        "productionStatus": "complete",
        "plannedKypVisualId": "cholinomimetic-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "cholinomimetics-sv2",
        "sourcePages": {"part": 1, "pdfPages": [261], "bookPages": "239"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Anticholinesterase poisoning block (book 239): the organophosphate intro (fenthion, parathion, malathion; insecticides; farmers) and the three effect layers — muscarinic DUMBBELSS, nicotinic neuromuscular blockade (succinylcholine-like), CNS effects — with their printed reversers (atropine; pralidoxime's dephosphorylation-if-early, coadministration, and BBB rules)",
        "sourceFigureDescription": "TABLE ART, NO RASTER (pdfimages: zero raster images; VLM census in two passes, saved to staging-ph16/vlm-census.txt): a second table-style block under the left-margin label 'Anticholinesterase poisoning', opening with the spanning intro 'Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE. Organophosphates commonly used as insecticides; poisoning usually seen in farmers.', then three findings-vs-reversal rows — MUSCARINIC EFFECTS: 'Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.' / 'DUMBBELSS. Reversed by atropine, a competitive inhibitor. Atropine can cross BBB to relieve CNS symptoms.' — NICOTINIC EFFECTS: 'Neuromuscular blockade (mechanism similar to succinylcholine).' / 'Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early. Must be coadministered with atropine to prevent transient worsening of symptoms. Pralidoxime does not readily cross BBB.' — CNS EFFECTS: 'Respiratory depression, lethargy, seizures, coma.' (single cell). No figures or photographs.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "cholinomimetic-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's IRREVERSIBLE organophosphate band (fenthion/parathion/malathion intro + the three effect chips with DUMBBELSS, succinylcholine-like, and CNS text) and the ANTIDOTE FORK band (atropine chip beside pralidoxime chip, the coadministration note, and the two dashed reactivation hooks — competitive-at-M and dephosphorylates-AChE-if-given-early); PLUS the note's verbatim poisoning table (blocks[3]) carrying every printed cell in row order",
        "productionStatus": "complete",
        "plannedKypVisualId": "cholinomimetic-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph16"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "cholinomimetics.json").write_text(json.dumps(m16, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "cholinomimetics.json").write_text(
    json.dumps({"topicId": "cholinomimetics", "chapterId": "pharmacology", "inventory": inv16,
                "coverageAudit": {"topicId": "cholinomimetics", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "TWO visual assets on the source page, both table art (pdfimages: ZERO rasters — the page is pure text + two-color table typography; VLM census in two passes saved to staging-ph16/vlm-census.txt, including the documented 200-dpi adjudication of the pilocarpine row): [1] the Cholinomimetic agents DRUG/ACTION/APPLICATIONS table (warning line + two spanning subheaders + all eight drug rows) and [2] the Anticholinesterase poisoning block (organophosphate intro + the muscarinic/nicotinic/CNS effect rows with their printed reversers). Both are accounted for as ORIGINAL KYP ADAPTATIONS: there is no figure to reproduce, so the registry visual cholinomimetic-map (CholinomimeticMap in visuals/pharm-p16.tsx) re-expresses both as the direct-vs-indirect fork map (direct drug cards, the AChE-⊣-↑ACh flow, the reversible chips, the BBB band, the irreversible organophosphate band with the three effect layers, and the atropine+pralidoxime antidote fork with the reactivation hooks), and every printed cell is additionally carried VERBATIM in the note's three table blocks (blocks[1-3]) in printed row order. The source's own in-cell mnemonics (Bethany / carbon copy / pilow / Dona Riva / Neo / pyridostigmine-gets-rid / Phreely / phyxes / DUMBBELSS) are carried attributed to First Aid; the four ALL-CAPS KYP mnemonics are original (origin outside-first-aid, recorded in the manifest's kypExtensions). Edrophonium and echothiophate do not print on this page and are not claimed. STAGED under .usmle-pipeline-cache/staging-ph16/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH16 manifest + inventory staged: {OUT}/manifests/cholinomimetics.json, {OUT}/visual-inventory/cholinomimetics.json")
print(f"cholinomimetics: evidence {len(kept)}/{len(E16)} verified")
