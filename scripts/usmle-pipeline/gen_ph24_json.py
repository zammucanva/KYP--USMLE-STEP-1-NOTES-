#!/usr/bin/env python3
"""PH24 drug-reactions-hematologic — manifest + inventory (Pharmacology
toxicities-and-adverse-effects batch), STAGED under
.usmle-pipeline-cache/staging-ph24/ (the promotion step owns content/).
Source: FULL pdf page 271 / book 249 (Part 1) — the page carries TWO
three-column tables: "Drug reactions—hematologic" (EIGHT rows, alphabetical
as printed: Agranulocytosis, Aplastic anemia, Direct Coombs-positive
hemolytic anemia, Drug Reaction with Eosinophilia and Systemic Symptoms,
Hemolysis in G6PD deficiency, Megaloblastic anemia, Thrombocytopenia,
Thrombotic complications) and "Drug reactions—musculoskeletal/skin/
connective tissue" (ELEVEN rows: Drug-induced lupus, Fat redistribution,
Gingival hyperplasia, Hyperuricemia (gout), Malignant hyperthermia,
Myopathy, Osteoporosis, Photosensitivity, Rash (Stevens-Johnson syndrome),
Teeth discoloration, Tendon/cartilage damage). Census (pdfimages): ZERO
raster images on the page — pure vector/table text + header/footer
furniture. The VLM census (glm-4.6v, ONE 120dpi pass, .usmle-pipeline-cache/
staging-ph24/vlm-census.txt — VLM was available this session, pass 1
succeeded with no retry) read BOTH tables row-by-row, the color furniture
(RED mnemonic acrostic letters inside the causal-agent and notes cells; red
letters inside four row labels — the D-R-E-S-S of DRESS, the "Mega blast" of
Megaloblastic anemia, "Coombs", "Steven Johnson"; dark-teal row labels;
BLACK non-mnemonic notes in the DRESS / Malignant hyperthermia /
Thrombotic complications cells), and the absence of margin mnemonics and
footnotes. SECOND-PASS ADJUDICATION (deterministic PyMuPDF raw spans + bbox
coordinates, documented in vlm-census.txt — a second VLM pass was not
needed): (1) the text layer's stray "2+" line is the 6.5pt SUPERSCRIPT on
"Ca" in the Gingival hyperplasia causal-agents cell — the print reads "Ca2+
channel blockers" (red Ca + black superscript), NOT a footnote marker and
NOT part of the Fat redistribution row; (2) for the LAST THREE hematologic
rows the text layer emits the REACTION + CAUSAL AGENTS columns first
(Megaloblastic anemia -> Thrombocytopenia -> Thrombotic complications) and
then the two non-empty NOTES cells as a TRAILING BLOCK ("You're having a
mega blast with PMS" then "Estrogen-mediated ↑ blood viscosity and platelet
accumulation") — bbox coordinates assign them to the MEGALOBLASTIC ANEMIA
(y=285.1 vs row label y=285.3) and THROMBOTIC COMPLICATIONS (y=331.2 vs
y=331.3) rows respectively; the THROMBOCYTOPENIA notes cell is EMPTY
(no notes-column span at its level) — the note carries both cells in their
printed rows; (3) the thrombotic causal-agents cell prints NO COMMA between
"SERMs" and "Testosterone supplements" (span ends "SERMs " with a space) —
carried verbatim; (4) "syndrome" prints hyphenated across a line wrap in the
DRESS note ("syn-"/"drome (DIHS)") while the cache layer merges it as
"syndrome (DIHS)"; DIHS (not the VLM's smoothed "DHIS") is the printed
spelling — carried as DIHS. EMPTY printed NOTES cells (span-confirmed,
carried as printed): Hemolysis in G6PD deficiency, Thrombocytopenia,
Drug-induced lupus, Myopathy, Osteoporosis, Tendon/cartilage damage. BATCH-
MAP HONESTY: the batch content map expected "gray baby syndrome" and
"serotonin syndrome" rows on this page — NEITHER PRINTS anywhere on pdf 271/
book 249 ("gray baby" prints at book 188/197, the protein-synthesis-
inhibitor pages); whatever rows print governs, and both printed tables are
carried in full. NO DrugCards: the exemplar's DrugCard shape (target/
mechanism/effect/uses/adverse all traceable to the printed page) does not
fit a pure adverse-reaction table page — this page prints causal-agent
LISTS only (no mechanisms, no uses), so the drugs are folded into the
verbatim table blocks, the cell-line mechanism, and the registry visual.
Nothing is reproduced: the page's two visual assets (the printed tables) are
adapted as ORIGINAL KYP ART (registry visual drug-reaction-hematologic-map,
DrugReactionHematologicMap in visuals/pharm-p24.tsx — the hematopoietic
lineage rail with the eight hematologic rows docked to the cell stage their
drugs cut, the sulfa-hypersensitivity axis (DRESS / Stevens-Johnson rash /
photosensitivity + the lupus trio), the musculoskeletal/skin quick-dock
with the dantrolene-antidoted malignant-hyperthermia warning, and the SULFA
STRIKES FIVE TIMES overlap band); both tables' text is additionally carried
VERBATIM in the note's table blocks."""
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
L = {271: pages[270].split("\n")}
P = {271: norm(pages[270])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E24 = [
    ("Page identity — the running header, the subsection banner (▶ PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS), the 'SEC TION II' header (a known extraction artifact of SECTION II), and the book page number 249", rng(271, 1, 7), [271]),
    ("TABLE 1 heading and its three column headers — Drug reactions—hematologic / DRUG REACTION / CAUSAL AGENTS / NOTES", rng(271, 9, 14), [271]),
    ("TABLE 1 ROW 1 (printed first) — Agranulocytosis: Dapsone, clozapine, carbamazepine, propylthiouracil, methimazole, ganciclovir, colchicine; NOTES cell prints First Aid's red in-cell mnemonic 'Drugs can cause pretty major granulocytes collapse' (verbatim; the batch brief quoted it without the final word 'collapse')", rng(271, 16, 23), [271]),
    ("TABLE 1 ROW 2 — Aplastic anemia: Carbamazepine, methimazole, NSAIDs, benzene, chloramphenicol, propylthiouracil; NOTES mnemonic 'Can’t make New blood cells properly'", rng(271, 25, 30), [271]),
    ("TABLE 1 ROW 3 — Direct Coombs ⊕ hemolytic anemia: Penicillin, cephalosporins, methyldopa; NOTES mnemonic 'Pooh classically munches on honey Coombs'", rng(271, 32, 37), [271]),
    ("TABLE 1 ROW 4 — Drug Reaction with Eosinophilia and Systemic Symptoms: Phenytoin, carbamazepine, minocycline, sulfa drugs, allopurinol, vancomycin; printed note 'T cell-mediated hypersensitivity reaction. Also known as drug-induced hypersensitivity syndrome (DIHS)' (syndrome prints hyphenated across a wrap — the cache layer merges it) + mnemonic 'DRESSes partially cover my skin and viscera'", rng(271, 39, 48), [271]),
    ("TABLE 1 ROW 5 — Hemolysis in G6PD deficiency: Sulfonamides, dapsone, primaquine, aspirin, nitrofurantoin — the printed NOTES cell is EMPTY (no mnemonic prints for this row; VLM + span-confirmed)", rng(271, 50, 54), [271]),
    ("TABLE 1 ROW 6 — Megaloblastic anemia: Hydroxyurea, Phenytoin, Methotrexate, Sulfa drugs (initials capitalized in the print, keying the mnemonic); the row's NOTES mnemonic 'You’re having a mega blast with PMS' prints in the trailing notes block — see the next evidence item", rng(271, 56, 58), [271]),
    ("TABLE 1 ROWS 7-8 + THE TRAILING NOTES BLOCK (the interleaving pattern): Thrombocytopenia (Heparin, quinidine, ganciclovir, vancomycin, linezolid — NOTES cell EMPTY) and Thrombotic complications (Combined oral contraceptives, hormone replacement therapy, SERMs Testosterone supplements, epoetin alfa — printed with NO comma after 'SERMs', carried verbatim); the layer then emits the two non-empty NOTES cells of rows 6 and 8 as a trailing block: 'You’re having a mega blast with PMS' (bbox: the MEGALOBLASTIC row's cell) and 'Estrogen-mediated ↑ blood viscosity and platelet accumulation' (bbox: the THROMBOTIC row's cell, printed in black) — adjudicated by PyMuPDF span coordinates, documented in vlm-census.txt", rng(271, 60, 75), [271]),
    ("TABLE 2 heading and its three column headers — Drug reactions—musculoskeletal/skin/connective tissue / DRUG REACTION / CAUSAL AGENTS / NOTES", rng(271, 77, 82), [271]),
    ("TABLE 2 ROWS 1-2 — Drug-induced lupus: Hydralazine, procainamide, quinidine (NOTES cell EMPTY); Fat redistribution: Protease inhibitors, glucocorticoids; NOTES mnemonic 'Fat protects glutes'. The text layer's stray '2+' line between these rows is the 6.5pt SUPERSCRIPT on 'Ca' of the NEXT row's 'Ca2+ channel blockers' — adjudicated by span coordinates (a reading-order artifact, not a footnote)", rng(271, 84, 93), [271]),
    ("TABLE 2 ROWS 3-4 — Gingival hyperplasia: Cyclosporine, Ca channel blockers (prints Ca2+ with a true superscript 2+), phenytoin; mnemonic 'Can Cause puffy gums'. Hyperuricemia (gout): Pyrazinamide, thiazides, furosemide, niacin, cyclosporine; mnemonic 'Painful tophi and feet need care'", rng(271, 95, 106), [271]),
    ("TABLE 2 ROWS 5-6 — Malignant hyperthermia: Inhaled anesthetics (eg, isoflurane), succinylcholine; printed note 'Individuals with ryanodine receptor mutation; antidote is dantrolene' (black, not a mnemonic). Myopathy: Statins, fibrates, niacin, colchicine, daptomycin, hydroxychloroquine, interferon-α, penicillamine, glucocorticoids (NOTES cell EMPTY)", rng(271, 108, 121), [271]),
    ("TABLE 2 ROWS 7-8 — Osteoporosis: Glucocorticoids, depot medroxyprogesterone acetate, GnRH agonists, aromatase inhibitors, anticonvulsants, heparin, PPIs (NOTES cell EMPTY). Photosensitivity: Sulfonamides, amiodarone, tetracyclines, fluoroquinolones; mnemonic 'Sat for photo'", rng(271, 123, 134), [271]),
    ("TABLE 2 ROW 9 — Rash (Stevens-Johnson syndrome): Anti-epileptic drugs (especially lamotrigine), allopurinol, sulfa drugs, penicillin; NOTES cell prints First Aid's red in-cell mnemonic 'Steven Johnson has epileptic allergy to sulfa drugs and penicillin' — verbatim (the mnemonic wraps across two printed lines)", rng(271, 136, 143), [271]),
    ("TABLE 2 ROWS 10-11 — Teeth discoloration: Tetracyclines; mnemonic 'Teethracyclines' (the printed pun). Tendon/cartilage damage: Fluoroquinolones (NOTES cell EMPTY)", rng(271, 145, 154), [271]),
    ("The print footer slug and timestamp — FAS1_2026_05-Pharmacology.indd 249 / 12/19/25 8:07 AM (page identity, book 249; confirms no footnotes print below either table)", rng(271, 156, 158), [271]),
]
for c, q, pgs in E24:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"drug-reactions-hematologic: evidence {len(kept)}/{len(E24)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m24 = {"topicId": "drug-reactions-hematologic", "title": "Drug Reactions: Hematologic",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Toxicities and Adverse Effects", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [271], "bookPages": "249–249"},
    "sourceEvidence": kept, "visualIds": ["drug-reaction-hematologic-map"],
    "mechanismIds": ["cell-line-targeting-map", "sulfa-hypersensitivity-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the two printed tables — 4 patterns (the methimazole agranulocytosis stem with ANC<100 and spared lines, the carbamazepine pancytopenia stem, the oxidant-drug Coombs-negative hemolysis stem with Heinz bodies/bite cells, the DRESS stem with eosinophilia + transaminitis and no mucositis), 4 traps (agranulocytosis vs aplastic anemia — the double-listed carbamazepine/methimazole/PTU; Coombs-positive immune vs G6PD oxidant hemolysis; thrombocytopenia vs thrombotic complications; DRESS vs SJS), 3 pivots, 8 recall cards.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the two tables' facts only; the attack structure and the distractor designs are KYP's design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "cell-line-routing-protocol", "summary": "The four-move reading protocol (NAME THE CELL LINE OR TISSUE THAT REACTED → NAME THE MECHANISM CLASS → NAME THE DRUG LIST → CROSS-CHECK THE OVERLAPS) and the ROUTE TO THE LINE framing — the observation that the CBC (or the reacting tissue), never the drug name, is the answer key, implemented as the lineage-rail mechanism, the steps block, and the visual's Zone A docks.",
         "origin": "outside-first-aid", "rationale": "The source prints two parallel lookup tables and never asks the learner to route a stem through cell line → mechanism → list; the protocol is KYP's synthesis.",
         "location": "core.keyIdea + mechanisms[0] + blocks[3] the steps block + the registry visual's Zone A"},
        {"id": "cross-table-synthesis", "summary": "The SULFA STRIKES FIVE TIMES observation (sulfa drugs print in FIVE rows across the two tables: DRESS, hemolysis in G6PD deficiency, megaloblastic anemia, photosensitivity, and the Stevens-Johnson rash) plus the double-listed-drug overlap map (carbamazepine/methimazole/propylthiouracil in agranulocytosis AND aplastic anemia; ganciclovir in agranulocytosis AND thrombocytopenia; allopurinol in DRESS AND SJS; phenytoin in four rows) — the exam callout, pivot 2, and the visual's Zone C band.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the rows as isolated table entries; the cross-table overlap structure is KYP's synthesis.",
         "location": "blocks[4] the exam callout + usmle.pivots[1] + the registry visual's Zone C"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (ROUTE TO THE LINE / HIS QUEEN GETS VERY LOUD / SULFA STRIKES FIVE TIMES / DANTROLENE DOMINATES THE RYANODINE RAGE). First Aid's own eleven red in-cell mnemonic lines — including the two headline carries 'Drugs can cause pretty major granulocytes collapse' and 'Steven Johnson has epileptic allergy to sulfa drugs and penicillin' — are carried ATTRIBUTED inside the verbatim tables and are NOT counted among the four KYP codes; HIS QUEEN GETS VERY LOUD fills the one hematologic row whose printed notes cell is EMPTY (thrombocytopenia).",
         "origin": "outside-first-aid", "rationale": "No margin mnemonic prints anywhere on pdf 271 (pdfimages + VLM census, staging-ph24/vlm-census.txt); the four codes are KYP's design.",
         "location": "mnemonics + blocks[5] the memory callout + the visual's dock attributions"},
        {"id": "mini-case-layer", "summary": "The methimazole miniCase — a Graves patient with fever, sore throat, oral ulcers, ANC 40/mm³, and SPARED hemoglobin/platelets — with the correct answer tracking the stem to the granulocyte line (agranulocytosis, 'Drugs can cause pretty major granulocytes collapse') and distractors built from the page's own overlaps: aplastic anemia (the same drug's second row, disproved by the two spared lines), DRESS (a different drug list + absent eosinophilia/rash/viscera), and G6PD hemolysis (the wrong cell line entirely).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the rows as parallel table entries and never dissects the double-listed-drug ambiguity against distractor mechanisms; the vignette, the four options, and the reasoning are KYP's design.",
         "location": "usmle.miniCase"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 271 / book 249 carries TWO printed tables — Drug reactions—hematologic (EIGHT rows, alphabetical as printed) and Drug reactions—musculoskeletal/skin/connective tissue (ELEVEN rows); the topic owns the WHOLE page and both tables are carried verbatim in the note's table blocks. CENSUS (pdfimages): ZERO raster images. VLM WAS AVAILABLE this session: ONE 120dpi glm-4.6v pass (staging-ph24/vlm-census.txt, pass 1 succeeded, no retry) read both tables row-by-row, the color furniture (red mnemonic acrostic letters; red letters inside four row labels — D-R-E-S-S, 'Mega blast', 'Coombs', 'Steven Johnson'; dark-teal labels; black non-mnemonic notes), and the absence of margin mnemonics and footnotes; a SECOND VLM pass was not needed — the four disputes the read left were adjudicated deterministically with PyMuPDF raw spans + bbox coordinates (documented in vlm-census.txt): (1) the stray '2+' text-layer line is the 6.5pt superscript on 'Ca' — the gingival row prints 'Ca2+ channel blockers', not a footnote; (2) the last three hematologic rows' NOTES cells interleave as a TRAILING BLOCK in the text layer ('You're having a mega blast with PMS' + 'Estrogen-mediated ↑ blood viscosity and platelet accumulation') — bbox assigns them to the Megaloblastic anemia and Thrombotic complications rows (the Thrombocytopenia notes cell is EMPTY); the note carries them in their printed rows and the interleaving is documented; (3) the thrombotic causal cell prints NO comma between 'SERMs' and 'Testosterone supplements' — carried verbatim; (4) 'syndrome' prints hyphenated across a wrap in the DRESS note — the cache layer merges it as 'syndrome (DIHS)'; DIHS (not the VLM's smoothed 'DHIS') is the printed spelling. EMPTY printed NOTES cells carried as printed: Hemolysis in G6PD deficiency, Thrombocytopenia, Drug-induced lupus, Myopathy, Osteoporosis, Tendon/cartilage damage. BATCH-MAP HONESTY: the batch content map expected 'gray baby syndrome' and 'serotonin syndrome' rows on this page — NEITHER PRINTS on pdf 271/book 249 ('gray baby' prints at book 188/197 with the protein synthesis inhibitors); whatever rows print governs. The two mandated in-cell mnemonics carried VERBATIM + ATTRIBUTED (not among the four KYP mnemonics): 'Drugs can cause pretty major granulocytes collapse' (Agranulocytosis NOTES cell — note the batch brief quoted it without the final word 'collapse') and 'Steven Johnson has epileptic allergy to sulfa drugs and penicillin' (Rash (Stevens-Johnson syndrome) NOTES cell). Quirks, documented: (1) the batch convention targets are met — 2 mechanisms, 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (all four topicIds verified to exist in src/lib/kyp/usmle/notes/: pentose-phosphate-pathway, hypersensitivity-types, dna-rna-folate-inhibitors, t-cell-phagocyte-immunodeficiencies), 4 crossLinks, 4 KYP mnemonics, and a miniCase with 4 options (exactly 1 correct, why on every option); the note is 738 lines and the visual 251, within the brief's 600-750 / 250-400 budgets; (2) NO DrugCards: the exemplar's DrugCard shape (mechanism/uses traceable to the printed page) does not fit a pure adverse-reaction table page — the page prints causal-agent LISTS only, so the drugs are folded into the verbatim table blocks, the cell-line mechanism, and the registry visual (this deviation from the DrugCard convention is deliberate and documented here); (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the P-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-ph24/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'drug-reaction-hematologic-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's two visual assets (the two printed tables) are implemented as ONE ORIGINAL KYP ADAPTATION registry visual (drug-reaction-hematologic-map, DrugReactionHematologicMap in visuals/pharm-p24.tsx) with every row, causal agent, note, mnemonic, and quirk preserved — both tables' text is ALSO carried verbatim in the note's table blocks (blocks[1] and blocks[2]).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Toxicities and Adverse Effects",
    "topicId": "drug-reactions-hematologic", "requiredInKYP": True}
inv24 = [
    dict(SV_BASE, **{
        "visualId": "drug-reactions-hematologic-sv1",
        "sourcePages": {"part": 1, "pdfPages": [271], "bookPages": "249"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The hematologic drug-reaction table (book 249, top of page): eight rows pairing a drug reaction with its causal agents and notes/mnemonics",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-ph24/vlm-census.txt — VLM available this session, one pass + a deterministic PyMuPDF span adjudication): three columns (DRUG REACTION / CAUSAL AGENTS / NOTES), eight rows in printed alphabetical order — [1] Agranulocytosis | Dapsone, clozapine, carbamazepine, propylthiouracil, methimazole, ganciclovir, colchicine | red mnemonic 'Drugs can cause pretty major granulocytes collapse'; [2] Aplastic anemia | Carbamazepine, methimazole, NSAIDs, benzene, chloramphenicol, propylthiouracil | red mnemonic 'Can't make New blood cells properly'; [3] Direct Coombs ⊕ hemolytic anemia | Penicillin, cephalosporins, methyldopa | red mnemonic 'Pooh classically munches on honey Coombs'; [4] Drug Reaction with Eosinophilia and Systemic Symptoms (D-R-E-S-S in red inside the label) | Phenytoin, carbamazepine, minocycline, sulfa drugs, allopurinol, vancomycin | black note 'T cell-mediated hypersensitivity reaction. Also known as drug-induced hypersensitivity syndrome (DIHS)' + red mnemonic 'DRESSes partially cover my skin and viscera'; [5] Hemolysis in G6PD deficiency | Sulfonamides, dapsone, primaquine, aspirin, nitrofurantoin | NOTES cell EMPTY; [6] Megaloblastic anemia ('Mega blast' in red inside the label) | Hydroxyurea, Phenytoin, Methotrexate, Sulfa drugs (initials capitalized) | red mnemonic 'You're having a mega blast with PMS'; [7] Thrombocytopenia | Heparin, quinidine, ganciclovir, vancomycin, linezolid | NOTES cell EMPTY; [8] Thrombotic complications | Combined oral contraceptives, hormone replacement therapy, SERMs Testosterone supplements, epoetin alfa (no comma after 'SERMs') | black note 'Estrogen-mediated ↑ blood viscosity and platelet accumulation'. Red acrostic letters inside the causal-agent cells key each mnemonic; no figures, icons, or margin notes.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "drug-reaction-hematologic-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's Zone A (DrugReactionHematologicMap in visuals/pharm-p24.tsx — the hematopoietic lineage rail: pluripotent stem cell / granulocyte precursors / erythroid DNA synthesis / megakaryocyte line / circulating RBC (oxidant + immune docks) / plasma-endothelium, with seven of the eight rows docked to their stage and the eighth (DRESS) docked in the sulfa-hypersensitivity axis) plus the sulfa-five-strikes band; the table's full text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, and recall[0-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "drug-reaction-hematologic-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "drug-reactions-hematologic-sv2",
        "sourcePages": {"part": 1, "pdfPages": [271], "bookPages": "249"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The musculoskeletal/skin/connective-tissue drug-reaction table (book 249, bottom of page): eleven rows pairing a drug reaction with its causal agents and notes/mnemonics",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi + PyMuPDF span adjudication, staging-ph24/vlm-census.txt): three columns (DRUG REACTION / CAUSAL AGENTS / NOTES), eleven rows in printed order — [1] Drug-induced lupus | Hydralazine, procainamide, quinidine | NOTES cell EMPTY; [2] Fat redistribution | Protease inhibitors, glucocorticoids | red mnemonic 'Fat protects glutes'; [3] Gingival hyperplasia | Cyclosporine, Ca2+ channel blockers (true superscript 2+), phenytoin | red mnemonic 'Can Cause puffy gums'; [4] Hyperuricemia (gout) | Pyrazinamide, thiazides, furosemide, niacin, cyclosporine | red mnemonic 'Painful tophi and feet need care'; [5] Malignant hyperthermia | Inhaled anesthetics (eg, isoflurane), succinylcholine | black note 'Individuals with ryanodine receptor mutation; antidote is dantrolene'; [6] Myopathy | Statins, fibrates, niacin, colchicine, daptomycin, hydroxychloroquine, interferon-α, penicillamine, glucocorticoids | NOTES cell EMPTY; [7] Osteoporosis | Glucocorticoids, depot medroxyprogesterone acetate, GnRH agonists, aromatase inhibitors, anticonvulsants, heparin, PPIs | NOTES cell EMPTY; [8] Photosensitivity | Sulfonamides, amiodarone, tetracyclines, fluoroquinolones | red mnemonic 'Sat for photo'; [9] Rash (Stevens-Johnson syndrome) ('Steven Johnson' in red inside the label) | Anti-epileptic drugs (especially lamotrigine), allopurinol, sulfa drugs, penicillin | red mnemonic 'Steven Johnson has epileptic allergy to sulfa drugs and penicillin'; [10] Teeth discoloration | Tetracyclines | red mnemonic 'Teethracyclines'; [11] Tendon/cartilage damage | Fluoroquinolones | NOTES cell EMPTY. No figures, icons, or margin notes.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "drug-reaction-hematologic-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's Zone B (DrugReactionHematologicMap in visuals/pharm-p24.tsx — the sulfa-hypersensitivity axis: trigger band → T cell-mediated (type IV) → the DRESS / Stevens-Johnson rash / photosensitivity cards + the drug-induced lupus trio card; and the musculoskeletal/skin quick-dock: the malignant-hyperthermia dantrolene warning card + the seven remaining rows) with both verbatim mnemonics attributed; the table's full text is ALSO carried verbatim in the note's table block (blocks[2]) and m10/s30 rapid review",
        "productionStatus": "complete",
        "plannedKypVisualId": "drug-reaction-hematologic-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph24"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "drug-reactions-hematologic.json").write_text(json.dumps(m24, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "drug-reactions-hematologic.json").write_text(
    json.dumps({"topicId": "drug-reactions-hematologic", "chapterId": "pharmacology", "inventory": inv24,
                "coverageAudit": {"topicId": "drug-reactions-hematologic", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's TWO visual assets — the printed hematologic table (eight rows) and the printed musculoskeletal/skin/connective-tissue table (eleven rows) — are both accounted for as ORIGINAL KYP ADAPTATIONS: nothing is reproduced; the single registry visual drug-reaction-hematologic-map (DrugReactionHematologicMap in visuals/pharm-p24.tsx, viewBox 0 0 1102 1124) rebuilds both tables' every row, causal agent, note, mnemonic, and quirk as original KYP vector art (the hematopoietic lineage rail with the reaction docks, the sulfa-hypersensitivity axis, the musculoskeletal/skin quick-dock with the dantrolene warning, and the SULFA STRIKES FIVE TIMES band), and both tables' text is additionally carried verbatim in the note's table blocks. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi glm-4.6v pass (vlm-census.txt) confirmed both tables' printed row order, the color furniture, and the absence of margin mnemonics/footnotes; the four disputes were adjudicated deterministically (PyMuPDF raw spans + bbox coordinates, documented in vlm-census.txt): the '2+' is the superscript on 'Ca' ('Ca2+ channel blockers'), the trailing notes block of the last three hematologic rows belongs to the Megaloblastic anemia and Thrombotic complications rows, the thrombotic cell prints no comma after 'SERMs', and 'syndrome' prints hyphenated across a wrap in the DRESS note. BATCH-MAP HONESTY: 'gray baby syndrome' and 'serotonin syndrome' rows do NOT print on this page (gray baby lives at book 188/197). FULL single page (no shared split). STAGED under .usmle-pipeline-cache/staging-ph24/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH24 manifest + inventory staged: {OUT}/manifests/drug-reactions-hematologic.json, {OUT}/visual-inventory/drug-reactions-hematologic.json")
print(f"drug-reactions-hematologic: evidence {len(kept)}/{len(E24)} verified")
