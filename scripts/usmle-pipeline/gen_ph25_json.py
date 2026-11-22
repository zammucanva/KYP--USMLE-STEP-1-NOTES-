#!/usr/bin/env python3
"""PH25 drug-reactions-neurologic — manifest + inventory (Pharmacology
toxicities-and-adverse-effects batch), STAGED under
.usmle-pipeline-cache/staging-ph25/ (the promotion step owns content/).
Source: FULL pdf page 272 / book 250 (Part 1) — the page carries FOUR
three-column tables (all DRUG REACTION / CAUSAL AGENTS / NOTES) under
the banner PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS: [1] "Drug
reactions—neurologic" (7 rows), [2] "Drug reactions—renal/
genitourinary" (4 rows), [3] "Drug reactions—respiratory" (2 rows),
[4] "Drug reactions—multiorgan" (2 rows). Census (pdfimages): ZERO
raster images — pure vector/text. VLM WAS AVAILABLE this session: ONE
120dpi glm-4.6v pass (staging-ph25/vlm-census.txt) confirmed all four
tables' printed row order, the empty NOTES cells (tardive dyskinesia,
Fanconi syndrome, nephrotoxicity, dry cough, antimuscarinic), the
disulfiram-row ownership of "Sorry pals, can't go mingle", and the
absence of margin notes/images; a second VLM pass was not needed —
the two disputes the 120dpi read left were adjudicated
deterministically with PyMuPDF raw spans + pdftotext -bbox (documented
in vlm-census.txt): (1) the visual-disturbances NOTES cell PRINTS the
source's own double-i spelling "iirritate" — a red-bold 'ii' glyph
pair (i = Isoniazid, i = Ivabradine) before black 'rritate'; the VLM
smoothed it to single-i; carried verbatim; (2) the apostrophes in
"it's" / "5 P's" / "can't" print as U+2019 right single quotation
marks (the VLM claimed straight quotes) — carried as printed. Also
raw-span confirmed: the interstitial-nephritis causal-agents cell
carries First Aid's IN-CELL 5-P mnemonic with red capital P's printed
inside the words — "Diuretics (Pee), NSAIDs (Pain-free), Penicillins
and cephalosporins, PPIs, rifamPin, sulfa drugs" (a red-bold P glyph
sits INSIDE 'rifamPin'), plus a red 's' on sulfa; the pulmonary
fibrosis cell ends exactly "bleomycin, busulfan, amiodarone" with the
NOTES mnemonic "My nose cannot breathe bad air" in the same row; the
antimuscarinic row prints "H1-blockers" with a subscript 1 (the cache
layer merges it); "growth hormones" prints plural; the drug-reaction
names print teal and the mnemonic initials red. TEXT-LAYER INTERLEAVE
QUIRKS (cache page index 271): the respiratory table's NOTES header
extracts AFTER both data rows; the multiorgan table's footer slug
extracts BETWEEN the disulfiram causal agents and the NOTES header +
mnemonic + timestamp; 'SEC TION II' header-space artifact. First
Aid's own seven red in-cell mnemonic lines are carried ATTRIBUTED
inside the note's verbatim tables (NOT counted among the four KYP
mnemonics). Nothing is reproduced: the page's four visual assets (the
color-coded tables) are adapted as ONE whole-page ORIGINAL KYP
registry visual (drug-reaction-neurologic-map, DrugReactionNeurologic
Map in visuals/pharm-p25.tsx — the nigrostriatal dopamine fork, the
seizure-threshold and peripheral-axon panels, the seven-row neuro
strip, and the organ-system sweep strips); all four tables are
ADDITIONALLY carried VERBATIM in the note's table blocks. DrugCards
were folded into the verbatim tables + compare/steps blocks (the
DrugCard shape — one drug with mechanism/uses/adverse — does not fit
a reaction->causal-agents table; documented in the note header)."""
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
L = {272: pages[271].split("\n")}
P = {272: norm(pages[271])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E25 = [
    ("Page identity — the printed book page number 250, the section header (the text layer prints 'SEC TION II', a known extraction artifact, carried as-is), the PHARMACOLOGY masthead, and the subsection banner with the ▶ marker", rng(272, 1, 7), [272]),
    ("Table 1 heading and its three column headers — “Drug reactions—neurologic” / DRUG REACTION / CAUSAL AGENTS / NOTES", rng(272, 9, 14), [272]),
    ("TABLE 1 rows 1-2 (printed first and second) — Cinchonism: Quinidine, quinine; can present with tinnitus, hearing/vision loss, psychosis, and cognitive impairment. Parkinson-like syndrome: Antipsychotics, metoclopramide; cogwheel rigidity of arm", rng(272, 16, 28), [272]),
    ("TABLE 1 row 3 (printed third) — Peripheral neuropathy: Platinum agents (eg, cisplatin), isoniazid, vincristine, paclitaxel, phenytoin; the printed mnemonic “Cis, it’s very painful peripherally” (U+2019 apostrophe)", rng(272, 30, 35), [272]),
    ("TABLE 1 row 4 (printed fourth) — Idiopathic intracranial hypertension: Corticosteroids, danazol, vitamin A, growth hormones (printed plural), tetracyclines; the printed mnemonic “Crime and debt Always grow head tension”", rng(272, 37, 43), [272]),
    ("TABLE 1 row 5 (printed fifth) — Seizures: Isoniazid, bupropion, imipenem/cilastatin, tramadol; the printed mnemonic “With seizures, I bit my tongue”", rng(272, 45, 50), [272]),
    ("TABLE 1 row 6 (printed sixth) — Tardive dyskinesia: Antipsychotics, metoclopramide — the NOTES cell prints EMPTY (no third-cell text between this causal-agents cell and the next row; VLM + raw-span confirmed) — the identical causal agents of row 2, the page's twin-row fork", rng(272, 52, 54), [272]),
    ("TABLE 1 row 7 (printed seventh) — Visual disturbances: all eight printed causal agents with their parenthetical effects (topiramate, hydroxychloroquine, digoxin, isoniazid, ivabradine, PDE-5 inhibitors, ethambutol, vigabatrin) and the printed mnemonic “These horrible drugs iirritate Precious eyes” — the source's own DOUBLE-i spelling (red-bold 'ii' glyphs, one each for Isoniazid and Ivabradine; the 120dpi VLM read smoothed it to single-i; raw-span adjudicated, carried as printed)", rng(272, 56, 66), [272]),
    ("Table 2 heading, its three column headers, and rows 1-2 — “Drug reactions—renal/genitourinary”: Fanconi syndrome (Cisplatin, ifosfamide, expired tetracyclines, tenofovir — NOTES cell empty); Hemorrhagic cystitis (Cyclophosphamide, ifosfamide; prevent by coadministering with mesna)", rng(272, 68, 84), [272]),
    ("TABLE 2 row 3 (printed third) — Interstitial nephritis: the causal-agents cell carrying First Aid's IN-CELL 5-P mnemonic with red capital P's inside the words — “Diuretics (Pee), NSAIDs (Pain-free), Penicillins and cephalosporins, PPIs, rifamPin, sulfa drugs” (the capital red P sits inside the word rifamPin, raw-span confirmed) — and the printed NOTES mnemonic “Remember the 5 P’s” (U+2019)", rng(272, 86, 91), [272]),
    ("TABLE 2 row 4 (printed fourth) — Nephrotoxicity: Cisplatin, aminoglycosides, amphotericin, vancomycin — the NOTES cell prints empty", rng(272, 93, 96), [272]),
    ("Table 3 heading, its three column headers, and row 1 — “Drug reactions—respiratory”: Dry cough: ACE inhibitors (the NOTES cell prints empty; the cache layer interleaves the NOTES header AFTER both data rows, a documented extraction artifact)", rng(272, 98, 105), [272]),
    ("TABLE 3 row 2 (printed second) — Pulmonary fibrosis: Methotrexate, nitrofurantoin, carmustine, bleomycin, busulfan, amiodarone (the causal-agents cell ends exactly “…bleomycin, busulfan, amiodarone”) with the printed NOTES mnemonic “My nose cannot breathe bad air” (the interleave artifact places the extracted NOTES header at line 112, between the causal agents and the mnemonic)", rng(272, 107, 114), [272]),
    ("Table 4 heading, its three column headers, and both rows — “Drug reactions—multiorgan”: Antimuscarinic: Atropine, TCAs, H1-blockers (printed with a subscript 1, merged as H1 in the cache layer), antipsychotics — NOTES cell empty; Disulfiram-like reaction: 1st-generation sulfonylureas, procarbazine, certain cephalosporins, griseofulvin, metronidazole", rng(272, 116, 129), [272]),
    ("The print footer slug, the multiorgan table's disulfiram-row NOTES mnemonic, and the timestamp — carrying the column-interleave artifact (the footer extracts BETWEEN the causal agents and the NOTES header + mnemonic): “FAS1_2026_05-Pharmacology.indd 250” / NOTES / “Sorry pals, can’t go mingle” (U+2019; VLM + raw-span confirmed as the DISULFIRAM-LIKE REACTION row's notes cell) / “12/19/25 8:07 AM”", rng(272, 131, 137), [272]),
]
for c, q, pgs in E25:
    e = ev(c, q, pgs)
    if e["verified"] != "pass":
        fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails:
        print("  x", f)
    sys.exit(1)
print(f"drug-reactions-neurologic: evidence {len(kept)}/{len(E25)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m25 = {"topicId": "drug-reactions-neurologic", "title": "Drug Reactions: Neurologic",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Toxicities and Adverse Effects", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [272], "bookPages": "250–250"},
    "sourceEvidence": kept, "visualIds": ["drug-reaction-neurologic-map"],
    "mechanismIds": ["dopamine-pathway-map", "organ-system-sweep-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the four printed tables — 4 patterns (the metoclopramide tardive-dyskinesia timeline, the isoniazid triple-neuro-toxin presentation, the visual-disturbance color-match, the metronidazole disulfiram-like reaction), 4 traps (the twin movement rows, INH's three faces, the digoxin-yellow/PDE-5-blue/ethambutol-color visual coding, the mesna-preventable hemorrhagic cystitis vs the cisplatin renal rows), 3 pivots, 8 recall cards — plus the organ-system routing pivot that ties all four tables together.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the four tables' facts only; the attack structure, the distractor designs, and the timeline-based discrimination training are KYP's design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "four-moves-protocol",
         "summary": "The four-move reading protocol (NAME THE SIGN → NAME THE PATHWAY → NAME THE ROW → NAME THE DRUG, then check its other appearances) and the route-every-reaction-to-the-pathway-it-disrupts framing of the whole page.",
         "origin": "outside-first-aid", "rationale": "The source prints four parallel tables and never asks the learner to route a clinical sign through pathway → row → drug; the protocol and the pathway-first framing are KYP's synthesis.",
         "location": "core.keyIdea + blocks[6] the steps block + the registry visual's four-move protocol band"},
        {"id": "dopamine-fork-layer",
         "summary": "The twin-rows synthesis: the observation that Parkinson-like syndrome and tardive dyskinesia print IDENTICAL causal agents (antipsychotics, metoclopramide) and are separated only by the direction of receptor adaptation — acute D2 blockade (down-state, cogwheel rigidity of arm) vs chronic blockade with compensatory D2 up-regulation (overshoot, choreiform movements, the empty printed NOTES cell) — built out as mechanism 1 (dopamine-pathway-map), the compare block, and the visual's Zone A fork.",
         "origin": "outside-first-aid", "rationale": "The source prints the two rows adjacently with the same agents and a one-sign note; the receptor-adaptation fork, the down-state/overshoot framing, and the RIGID EARLY, WRITHING LATE rule are KYP's synthesis.",
         "location": "mechanisms[0] + blocks[5] the compare block + usmle.patterns[0]/traps[0]/miniCase + the visual's Zone A"},
        {"id": "double-dipper-layer",
         "summary": "The cross-table repeater map: isoniazid ×3 (peripheral neuropathy, seizures, optic neuritis), cisplatin ×3 (peripheral neuropathy, Fanconi syndrome, nephrotoxicity), antipsychotics ×3 (both movement rows + antimuscarinic), metoclopramide ×2, ifosfamide ×2, tetracyclines ×2, cephalosporins ×2 — with the pyridoxine (B6) thread tying INH's neuropathy to its seizure risk.",
         "origin": "outside-first-aid", "rationale": "The source never points out which drugs appear on multiple rows or across multiple tables; the double-dipper inventory and the INH-triple-neuro-toxin hook are KYP's cross-referencing synthesis.",
         "location": "core.why + blocks[7] the exam callout + mnemonics[1-2] + the visual's Zone C chips"},
        {"id": "mnemonic-layer",
         "summary": "The four KYP mnemonics (RIGID EARLY, WRITHING LATE · INH, THE TRIPLE NEURO TOXIN · THE DOUBLE-DIPPERS · RECEPTOR BLOCK, ENZYME BLOCK). First Aid's own seven red in-cell mnemonic lines (“Cis, it’s very painful peripherally” · “Crime and debt Always grow head tension” · “With seizures, I bit my tongue” · “These horrible drugs iirritate Precious eyes” · “Remember the 5 P’s” + the in-cell P's of Pee/Pain-free/Penicillins/PPIs/rifamPin · “My nose cannot breathe bad air” · “Sorry pals, can’t go mingle”) are carried ATTRIBUTED inside the verbatim tables and are NOT counted among the four KYP codes.",
         "origin": "outside-first-aid", "rationale": "The seven mnemonic lines are the source's own red print (VLM + raw-span census, staging-ph25/vlm-census.txt); the four ALL-CAPS structural hooks are KYP's design.",
         "location": "mnemonics + blocks[8] the memory callout + the visual's mnemonic renderings"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL page: pdf 272 / book 250 carries FOUR three-column tables (all DRUG REACTION / CAUSAL AGENTS / NOTES) under the banner PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS, all owned by this topic: [1] Drug reactions—neurologic (7 rows, printed order: Cinchonism → Parkinson-like syndrome → Peripheral neuropathy → Idiopathic intracranial hypertension → Seizures → Tardive dyskinesia → Visual disturbances), [2] Drug reactions—renal/genitourinary (4 rows: Fanconi syndrome → Hemorrhagic cystitis → Interstitial nephritis → Nephrotoxicity), [3] Drug reactions—respiratory (2 rows: Dry cough → Pulmonary fibrosis), [4] Drug reactions—multiorgan (2 rows: Antimuscarinic → Disulfiram-like reaction) — all carried VERBATIM in the note's four table blocks in PRINTED row order. CENSUS (pdfimages): ZERO raster images — pure vector/text; no margin notes, figures, or icons (VLM-confirmed). VLM WAS AVAILABLE this session: ONE 120dpi glm-4.6v pass (staging-ph25/vlm-census.txt) confirmed the four tables' row order, the empty NOTES cells (tardive dyskinesia, Fanconi syndrome, nephrotoxicity, dry cough, antimuscarinic), the disulfiram-row ownership of “Sorry pals, can’t go mingle”, and the red/teal color furniture; a second VLM pass was not needed — the two disputes the 120dpi read left were adjudicated deterministically with PyMuPDF raw spans + pdftotext -bbox (documented in vlm-census.txt): (1) the visual-disturbances mnemonic PRINTS the source's own double-i “iirritate” (a red-bold 'ii' glyph pair — i = Isoniazid, i = Ivabradine — before black 'rritate'; the VLM smoothed to single-i; carried verbatim); (2) the apostrophes in it’s/5 P’s/can’t print as U+2019 (the VLM claimed straight quotes). Also raw-span confirmed: the in-cell 5-P mnemonic with the red capital P printed INSIDE “rifamPin” (plus Pee/Pain-free/Penicillins/PPIs and a red “s” on sulfa); the pulmonary-fibrosis cell ending exactly “bleomycin, busulfan, amiodarone”; “H1-blockers” printing with a subscript 1 (cache merges); “growth hormones” printing plural; drug-reaction names in teal, mnemonic initials in red. TEXT-LAYER INTERLEAVE QUIRKS (documented in census + note captions): the respiratory NOTES header extracts AFTER both data rows (cache lines 103-110 → 112 → 114); the multiorgan footer slug extracts BETWEEN the disulfiram causal agents and the NOTES header + mnemonic + timestamp (cache lines 129 → 131 → 133/135/137); the 'SEC TION II' header-space artifact. DrugCards were FOLDED into the verbatim tables + the compare/steps blocks rather than authored as a drugs[] array — the DrugCard shape (one drug with mechanism/uses/adverse cells) does not fit a reaction→causal-agents table; the decision is documented in the note's header comment. Related-topic ids: the three parallel batch-sibling ids (drug-reactions-hematologic, drug-reactions-endocrine, toxicity-treatments) are being produced by the sibling tasks of batch ph21-ph25 and are registered by the promotion step; stroke-syndromes is a verified existing note id. Quirks vs the batch spec: the spec's content map mentioned a 'headache' row and a 'cognition' row for the neuro table — the page prints NO such rows (cognition appears only inside the cinchonism NOTES cell, 'cognitive impairment'); 'whatever rows print' governs, and the seven printed rows are carried. The note is 733 lines and the visual 261 (viewBox 0 0 1102 1344), within the brief's 600-750 / 250-400 budgets. Outputs are STAGED under .usmle-pipeline-cache/staging-ph25/ — nothing is written into content/ (chapters, content manifests, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'drug-reaction-neurologic-map' is therefore not yet in visuals/registry.tsx by design).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Toxicities and Adverse Effects",
    "topicId": "drug-reactions-neurologic", "requiredInKYP": True}
inv25 = [
    dict(SV_BASE, **{
        "visualId": "drug-reactions-neurologic-sv1",
        "sourcePages": {"part": 1, "pdfPages": [272], "bookPages": "250"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "Table 1 “Drug reactions—neurologic” (book 250): the seven neurologic adverse-reaction rows (cinchonism, Parkinson-like syndrome, peripheral neuropathy, idiopathic intracranial hypertension, seizures, tardive dyskinesia, visual disturbances) with their causal agents and notes",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-ph25/vlm-census.txt — VLM available this session): a three-column table (DRUG REACTION / CAUSAL AGENTS / NOTES) with seven rows in printed order — [1] Cinchonism: Quinidine, quinine; can present with tinnitus, hearing/vision loss, psychosis, and cognitive impairment; [2] Parkinson-like syndrome: Antipsychotics, metoclopramide; cogwheel rigidity of arm; [3] Peripheral neuropathy: Platinum agents (eg, cisplatin), isoniazid, vincristine, paclitaxel, phenytoin; “Cis, it’s very painful peripherally” (red mnemonic); [4] Idiopathic intracranial hypertension: Corticosteroids, danazol, vitamin A, growth hormones, tetracyclines; “Crime and debt Always grow head tension”; [5] Seizures: Isoniazid, bupropion, imipenem/cilastatin, tramadol; “With seizures, I bit my tongue”; [6] Tardive dyskinesia: Antipsychotics, metoclopramide; NOTES cell EMPTY; [7] Visual disturbances: Topiramate (blurred vision/diplopia, haloes), hydroxychloroquine (↓ visual acuity, visual field defects), digoxin (yellow-tinged vision), isoniazid (optic neuritis), ivabradine (luminous phenomena), PDE-5 inhibitors (blue-tinged vision), ethambutol (color vision changes), vigabatrin (tunnel vision); “These horrible drugs iirritate Precious eyes” (the source's own double-i print — two red mnemonic i's, one each for Isoniazid and Ivabradine). Drug-reaction names print teal (0x165d7e); mnemonic initial letters print red bold (0xb82837) in both causal-agent and notes cells.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "drug-reaction-neurologic-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's Zone A (the nigrostriatal dopamine fork: shared culprits antipsychotics + metoclopramide → D2 blockade → acute down-state = Parkinson-like syndrome vs chronic up-regulation = tardive dyskinesia) + Zone B (the seven-row strip in printed order) + Zone C (the seizure-threshold gauge and the peripheral-axon panel with the INH-triple chip); the table's full text is ALSO carried verbatim in the note's blocks[1], core.what, mechanisms, and recall",
        "productionStatus": "complete",
        "plannedKypVisualId": "drug-reaction-neurologic-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "drug-reactions-neurologic-sv2",
        "sourcePages": {"part": 1, "pdfPages": [272], "bookPages": "250"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "Table 2 “Drug reactions—renal/genitourinary” (book 250): the four renal/GU adverse-reaction rows (Fanconi syndrome, hemorrhagic cystitis, interstitial nephritis, nephrotoxicity)",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (census as sv1): a three-column table with four rows in printed order — [1] Fanconi syndrome: Cisplatin, ifosfamide, expired tetracyclines, tenofovir (NOTES cell empty); [2] Hemorrhagic cystitis: Cyclophosphamide, ifosfamide; prevent by coadministering with mesna; [3] Interstitial nephritis: Diuretics (Pee), NSAIDs (Pain-free), Penicillins and cephalosporins, PPIs, rifamPin, sulfa drugs; “Remember the 5 P’s” — the causal-agents cell carries the IN-CELL 5-P mnemonic with red capital P's printed inside the words (raw-span confirmed: a red-bold P glyph sits inside “rifamPin”; a red “s” heads “sulfa”); [4] Nephrotoxicity: Cisplatin, aminoglycosides, amphotericin, vancomycin (NOTES cell empty). Teal reaction names; red mnemonic initials.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "drug-reaction-neurologic-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's Zone D renal/genitourinary strip (the nephron-and-bladder descent: proximal tubule → bladder → interstitium → nephron at large, with the 5-P line, the in-cell rifamPin capital-P note, and the mesna chip); the table's full text is ALSO carried verbatim in the note's blocks[2], core.what, mechanism 2, and recall",
        "productionStatus": "complete",
        "plannedKypVisualId": "drug-reaction-neurologic-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "drug-reactions-neurologic-sv3",
        "sourcePages": {"part": 1, "pdfPages": [272], "bookPages": "250"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "Table 3 “Drug reactions—respiratory” (book 250): dry cough (ACE inhibitors) and pulmonary fibrosis (the six-drug row)",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (census as sv1): a three-column table with two rows in printed order — [1] Dry cough: ACE inhibitors (NOTES cell empty); [2] Pulmonary fibrosis: Methotrexate, nitrofurantoin, carmustine, bleomycin, busulfan, amiodarone (the causal-agents cell ends exactly “bleomycin, busulfan, amiodarone”); “My nose cannot breathe bad air” (red mnemonic initials M/n/c/b/b/a). TEXT-LAYER INTERLEAVE: the extracted NOTES column header prints AFTER both data rows (a documented cache-layer artifact; the printed grid is ordinary).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "drug-reaction-neurologic-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's Zone D respiratory panel (bradykinin accumulation = dry cough vs alveolar scarring = the six-drug fibrosis row, with the mnemonic rendered red and the exact cell ending noted); the table's full text is ALSO carried verbatim in the note's blocks[3] and recall",
        "productionStatus": "complete",
        "plannedKypVisualId": "drug-reaction-neurologic-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "drug-reactions-neurologic-sv4",
        "sourcePages": {"part": 1, "pdfPages": [272], "bookPages": "250"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "Table 4 “Drug reactions—multiorgan” (book 250): antimuscarinic effects and the disulfiram-like reaction",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (census as sv1): a three-column table with two rows in printed order — [1] Antimuscarinic: Atropine, TCAs, H1-blockers (printed with a subscript 1), antipsychotics (NOTES cell empty); [2] Disulfiram-like reaction: 1st-generation sulfonylureas, procarbazine, certain cephalosporins, griseofulvin, metronidazole; “Sorry pals, can’t go mingle” (red mnemonic initials s/p/c/g/m; VLM + raw-span confirmed as the DISULFIRAM row's NOTES cell — the red 'S' prints in the NOTES column on the same line as the causal agents). TEXT-LAYER INTERLEAVE: the footer slug and timestamp extract between the causal agents and the NOTES header + mnemonic (documented cache-layer artifact).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "drug-reaction-neurologic-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's Zone D multiorgan panel (RECEPTOR BLOCK = muscarinic receptor vs ENZYME BLOCK = aldehyde dehydrogenase, with the mnemonic rendered red and the acetaldehyde note); the table's full text is ALSO carried verbatim in the note's blocks[4] and recall",
        "productionStatus": "complete",
        "plannedKypVisualId": "drug-reaction-neurologic-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph25"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "drug-reactions-neurologic.json").write_text(json.dumps(m25, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "drug-reactions-neurologic.json").write_text(
    json.dumps({"topicId": "drug-reactions-neurologic", "chapterId": "pharmacology", "inventory": inv25,
                "coverageAudit": {"topicId": "drug-reactions-neurologic", "textbookVisualCount": 4,
                    "accountedFor": 4, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 4,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's four visual assets — the four color-coded DRUG REACTION / CAUSAL AGENTS / NOTES tables (neurologic 7 rows, renal/genitourinary 4, respiratory 2, multiorgan 2; teal reaction names, red mnemonic initials including the in-cell capital-P of rifamPin) — are each accounted for as ORIGINAL KYP ADAPTATIONS with NOTHING reproduced: all four are adapted together as ONE whole-page registry visual (drug-reaction-neurologic-map, DrugReactionNeurologicMap in visuals/pharm-p25.tsx — Zone A the nigrostriatal dopamine fork, Zone B the seven-row neuro strip, Zone C the seizure-threshold + peripheral-axon panels, Zone D the organ-system sweep strips), hence kypOriginals: 1 covering all four printed assets; each table's full text is ADDITIONALLY carried verbatim in the note's four table blocks. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi glm-4.6v pass (staging-ph25/vlm-census.txt) confirmed the four tables' printed row order, the empty NOTES cells, the disulfiram-row ownership of “Sorry pals, can’t go mingle”, and the absence of margin notes; the double-i “iirritate” and the U+2019 apostrophes were adjudicated deterministically with PyMuPDF raw spans + pdftotext -bbox (documented in vlm-census.txt) after the 120dpi read smoothed them. FULL page, no shared split. STAGED under .usmle-pipeline-cache/staging-ph25/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH25 manifest + inventory staged: {OUT}/manifests/drug-reactions-neurologic.json, {OUT}/visual-inventory/drug-reactions-neurologic.json")
print(f"drug-reactions-neurologic: evidence {len(kept)}/{len(E25)} verified")
