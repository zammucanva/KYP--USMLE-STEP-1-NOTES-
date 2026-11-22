#!/usr/bin/env python3
"""PH23 drug-reactions-endocrine — manifest + inventory (Pharmacology
toxicities/adverse-effects batch), STAGED under .usmle-pipeline-cache/
staging-ph23/ (the promotion step owns content/). Source: FULL pdf page
270 / book 248 (Part 1) — the topic owns the WHOLE page per the chapter
plan. PAGE-SHARE NOTE: the batch brief described the page as ONE table;
the census found the page holds TWO complete stacked tables —
"Drug reactions—endocrine/reproductive" (9 rows, complete on the page)
followed by "Drug reactions—gastrointestinal" (8 rows, also complete on
the page; the hematologic table starts on the NEXT page). The chapter
plan (content/usmle/chapters/pharmacology.json) assigns book 248 solely
to drug-reactions-endocrine and NO gastrointestinal drug-reactions topic
exists anywhere in the plan, so BOTH tables are carried VERBATIM in the
note — the endocrine table as the note's core (mechanisms, patterns,
traps, pivots, mnemonics, miniCase all built on the endocrine axis per
the production rationale), the GI table as a fully verbatim second table
block + the GI strip in the registry visual. Census (pdfimages): ZERO
raster images — pure vector/text. The VLM census (glm-4.6v, ONE 120dpi
pass, staging-ph23/vlm-census.txt — VLM was available this session)
confirms the printed endocrine row order: Adrenocortical insufficiency
-> Diabetes insipidus -> Gynecomastia -> Hot flashes -> Hyperglycemia ->
Hyperprolactinemia -> Hyperthyroidism -> Hypothyroidism -> SIADH, with
EMPTY notes cells for Diabetes insipidus / Gynecomastia / Hot flashes /
Hyperthyroidism, and the GI table's 8 rows. NO margin mnemonics
(VLM-confirmed) — First Aid's own RED in-cell mnemonic text prints
inside cells and is carried ATTRIBUTED (NOT counted among the four KYP
originals): endocrine — "The people need High glucose" (hyperglycemia),
"I am lethargic" (hypothyroidism), "Can’t Concentrate Serum Sodium"
(SIADH); GI — "I referred patient serum (AST, ALT) for hepatitis"
(hepatitis row), "Drugs generate a violent abdominal distress"
(pancreatitis), "Pills Not beneficial for food tube" (esophagitis).
DETERMINISTIC ADJUDICATION (pdftotext -bbox word coordinates, documented
in vlm-census.txt; column anchors DRUG REACTION x~73.5 / CAUSAL AGENTS
x~181.5 / NOTES x~388.5): (1) the endocrine table reads CLEANLY
row-by-row in the text layer — no interleaving; (2) the GI table's
"NOTES" column header (y~395.6) and the hepatitis row's red mnemonic
(y~617.4, x=388.5 = the NOTES column) are DISPLACED to AFTER the footer
slug in the cache text layer (cache lines 139/141-142) — adjudicated
back to the table top / the hepatitis row by bbox + VLM (the acute
cholestatic row's notes cell is EMPTY); (3) the pancreatitis mnemonic
(y=646.8, x=388.5, NOTES column) shares its y-band with the pancreatitis
causal-agents lines, so the text layer INTERLEAVES it between the two
causal lines (cache line 113) — bbox places it in the NOTES cell; (4)
the esophagitis mnemonic "Pills Not beneficial for food tube" prints
INSIDE THE CAUSAL AGENTS COLUMN (x=181.5, y=702.3, BELOW the drug list —
NOT in the NOTES column) — the VLM read this correctly and bbox
confirms; carried there, attributed, flagged as a quirk; (5) the VLM's
120dpi misread "tcnolazine" (constipation row) is corrected to
"ranolazine" by the text layer + bbox (text layer wins). PRINTED QUIRKS
carried verbatim + documented: "Cyclophosphamide" capitalizes mid-list
(the SIADH mnemonic's second C), "The people need High glucose"
capitalizes "The"/"High", "Can’t" prints with the curly right single
quote (U+2019), "5HT3 receptor antagonist (ondansetron)",
"non-dihydropyridine CCBs", and the header's "SEC TION II" extraction
artifact (carried as-is in the evidence quotes). Nothing is reproduced:
the page's two visual assets (the two color-coded tables) are adapted as
ORIGINAL KYP ART (registry visual drug-reaction-endocrine-map,
DrugReactionEndocrineMap in visuals/pharm-p23.tsx — the four hormone-axis
routing lanes [HPA / sex-steroid with its three levers / thyroid with
amiodarone+lithium both directions / water-glucose with the ADH
direction arrow], the glucocorticoid withdrawal timeline ending in the
ADRENAL CRISIS band with the taper escape, the endocrine table verbatim
in printed row order, and the GI strip); both tables' text is
additionally carried VERBATIM in the note's table blocks."""
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
L = {270: pages[269].split("\n")}
P = {270: norm(pages[269])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E23 = [
    ("Page identity — the header banner, section banner, book page number 248, and the first table's title line 'Drug reactions—endocrine/reproductive' (the text layer prints the section header as 'SEC TION II', a known extraction artifact, carried as-is)", rng(270, 1, 9), [270]),
    ("The endocrine/reproductive table's three column headers — DRUG REACTION / CAUSAL AGENTS / NOTES (printed in place at the table top)", rng(270, 10, 14), [270]),
    ("ROW 1 (printed first) — Adrenocortical insufficiency: HPA suppression secondary to chronic exogenous glucocorticoid use; abrupt withdrawal of exogenous glucocorticoids leads to adrenal crisis — the page's only withdrawal-driven row", rng(270, 16, 23), [270]),
    ("ROWS 2-3 (printed second and third) — Diabetes insipidus: Lithium, demeclocycline; Gynecomastia: Ketoconazole, cimetidine, spironolactone, GnRH analogs/antagonists, androgen receptor inhibitors, 5α-reductase inhibitors (both rows print with EMPTY notes cells)", rng(270, 25, 33), [270]),
    ("ROWS 4-5 (printed fourth and fifth) — Hot flashes: SERMs (eg, tamoxifen, clomiphene, raloxifene); Hyperglycemia: Tacrolimus, protease inhibitors, niacin, HCTZ, glucocorticoids + First Aid's own red in-cell mnemonic in the NOTES cell, 'The people need High glucose' (The=Tacrolimus, people=Protease inhibitors, need=Niacin, High=HCTZ, glucose=Glucocorticoids)", rng(270, 35, 44), [270]),
    ("ROW 6 (printed sixth) — Hyperprolactinemia: Typical antipsychotics (eg, haloperidol), atypical antipsychotics (eg, risperidone), metoclopramide, methyldopa, verapamil; NOTES: Presents with hypogonadism (eg, infertility, amenorrhea, erectile dysfunction) and galactorrhea", rng(270, 46, 54), [270]),
    ("ROWS 7-8 (printed seventh and eighth) — Hyperthyroidism: Amiodarone, iodine, lithium; Hypothyroidism: Amiodarone, lithium + the red in-cell mnemonic 'I am lethargic' ('I am'=Amiodarone, 'lethargic'=Lithium) — amiodarone and lithium print in BOTH thyroid rows", rng(270, 56, 64), [270]),
    ("ROW 9 (printed ninth, last row of the endocrine table) — SIADH: Carbamazepine, Cyclophosphamide, SSRIs + the red in-cell mnemonic 'Can’t Concentrate Serum Sodium' (Can’t=Carbamazepine, Concentrate=Cyclophosphamide — the capital C prints mid-list — Serum Sodium=SSRIs)", rng(270, 66, 70), [270]),
    ("THE PAGE'S SECOND TABLE begins — 'Drug reactions—gastrointestinal' with its DRUG REACTION / CAUSAL AGENTS headers; ROW 1: Acute cholestatic hepatitis, jaundice — Macrolides (eg, erythromycin); ROW 2: Constipation — Antimuscarinics (eg, atropine), antipsychotics, opioids, non-dihydropyridine CCBs, ranolazine (the VLM's 120dpi misread 'tcnolazine' is corrected by the text layer + bbox), amiodarone, aluminum hydroxide, loperamide, 5HT3 receptor antagonist (ondansetron), vincristine", rng(270, 72, 88), [270]),
    ("GI ROWS 3-4 — Diarrhea: Acamprosate, antidiabetic agents (acarbose, metformin, pramlintide), colchicine, cholinesterase inhibitors, lipid-lowering agents (eg, ezetimibe, orlistat), macrolides (eg, erythromycin), SSRIs, chemotherapy (eg, irinotecan); Focal to massive hepatic necrosis: Amanita phalloides (death cap mushroom), valproate, acetaminophen", rng(270, 90, 103), [270]),
    ("GI ROW 5 — Hepatitis: Isoniazid, rifampin, pyrazinamide, statins, fibrates (its red mnemonic 'I referred patient serum (AST, ALT) for hepatitis' is DISPLACED to after the footer in the text layer — see the footer quote; bbox y=617.4 x=388.5 places it in this row's NOTES cell, VLM-confirmed; the acute cholestatic row's notes cell is empty)", rng(270, 105, 108), [270]),
    ("GI ROW 6 — Pancreatitis: Diuretics (eg, furosemide, HCTZ), glucocorticoids, alcohol, valproate, azathioprine — the red mnemonic 'Drugs generate a violent abdominal distress' (Drugs=Diuretics, generate=glucocorticoids, a=alcohol, violent=valproate, distress=azathioprine) INTERLEAVES between the two causal-agent lines in the text layer (same y-band); bbox x=388.5 places it in the NOTES column", rng(270, 110, 114), [270]),
    ("GI ROW 7 — Medication-induced esophagitis: Potassium chloride, NSAIDs, bisphosphonates, ferrous sulfate, tetracyclines + the red mnemonic 'Pills Not beneficial for food tube' (Pills=Potassium chloride, Not=NSAIDs, beneficial=bisphosphonates, food=ferrous sulfate, tube=tetracyclines) printed INSIDE THE CAUSAL AGENTS COLUMN below the drug list (bbox x=181.5 — a printed quirk carried + flagged); NOTES: Usually occurs at anatomic sites of esophageal narrowing (eg, near level of aortic arch); caustic effect minimized with upright posture and adequate water ingestion", rng(270, 116, 126), [270]),
    ("GI ROW 8 (last row of the gastrointestinal table) — Pseudomembranous colitis: Ampicillin, cephalosporins, clindamycin, fluoroquinolones, PPIs; NOTES: Antibiotics predispose to superinfection by resistant C difficile", rng(270, 128, 135), [270]),
    ("The print footer slug and timestamp PLUS the two text-layer displacements — the GI table's 'NOTES' column header and the hepatitis row's red mnemonic 'I referred patient serum (AST, ALT) for hepatitis' both land AFTER the footer in the cache layer (adjudicated back to the table top / the hepatitis row by bbox coordinates + the VLM render; page identity, book 248)", rng(270, 137, 144), [270]),
]
for c, q, pgs in E23:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"drug-reactions-endocrine: evidence {len(kept)}/{len(E23)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m23 = {"topicId": "drug-reactions-endocrine", "title": "Drug Reactions: Endocrine & Reproductive",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Toxicities and Adverse Effects", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [270], "bookPages": "248–248"},
    "sourceEvidence": kept, "visualIds": ["drug-reaction-endocrine-map"],
    "mechanismIds": ["hpa-suppression-withdrawal-map", "sex-steroid-disruption-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed tables — 4 patterns (the abrupt-withdrawal adrenal crisis, the six-link gynecomastia list, the SSRI/carbamazepine SIADH with urine-osmolality routing, the D2-blockade hyperprolactinemia presentation), 4 traps (lithium's DI-vs-SIADH opposite water arrows, amiodarone/lithium in both thyroid rows, androgen-cut vs estrogen-cut sex-steroid rows, drug-withdrawal secondary insufficiency vs primary Addison), 3 pivots (the axis+direction routing, the urine-osmolality tiebreaker, the on-drug hyperglycemia vs off-drug crisis timing), 8 recall cards — the whole exam layer is built on the endocrine table per the production rationale.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the table's facts only; the attack structure, the distractor designs, and the axis-routing protocol are KYP's design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "four-axis-routing-protocol", "summary": "The four-axis reading protocol (NAME THE AXIS: HPA / sex-steroid / thyroid / water-glucose → NAME THE DIRECTION: suppressed vs stimulated, blocked vs enhanced, androgen-off vs estrogen-off → READ THE PRESENTATION the row predicts → MATCH THE CAUSAL-AGENT LIST using First Aid's own red keys), plus the observation that the same drug prints in multiple rows (lithium ×3, amiodarone ×2, glucocorticoids ×2, SSRIs across BOTH tables) so the axis+direction — never the drug name — is the answer key.",
         "origin": "outside-first-aid", "rationale": "The source prints the rows as parallel table cells and never asks the learner to route a stem through axis → direction → presentation; the protocol and the double-appearance analysis are KYP's synthesis.",
         "location": "core.keyIdea + blocks[2] the steps block + blocks[3] the compare block + the registry visual's four-lane zone"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (ROUTE THE REACTION TO ITS AXIS / THE ADRENAL SLEEPS — TAPER, DON'T STOP / NO ANDROGEN SIGNAL, NEW BREAST TISSUE / ADH DOWN DILUTES, ADH UP DROWNS). No mnemonic prints in the page's margins; First Aid's own red in-cell mnemonic text (endocrine: 'The people need High glucose' · 'I am lethargic' · 'Can’t Concentrate Serum Sodium'; GI: 'I referred patient serum (AST, ALT) for hepatitis' · 'Drugs generate a violent abdominal distress' · 'Pills Not beneficial for food tube') is carried ATTRIBUTED inside the verbatim tables and is NOT counted among the four KYP codes.",
         "origin": "outside-first-aid", "rationale": "No margin mnemonic prints anywhere on pdf 270 (pdfimages + VLM census, staging-ph23/vlm-census.txt); the four ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + blocks[5] the memory callout + the visual's lane footers"},
        {"id": "mini-case-layer", "summary": "The transplant-patient prednisone-withdrawal miniCase — which mechanism best explains the crisis — with the correct answer routing the printed row (chronic exogenous glucocorticoid → HPA suppression → abrupt withdrawal → adrenal crisis, secondary pattern: no hyperpigmentation, normal potassium) and distractors inventing gland destruction, swapping in tacrolimus (a real drug on the same page but in the hyperglycemia row), and borrowing the SIADH row whose printed list does not contain glucocorticoids.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the row as two cells and never dissects it against distractor mechanisms; the vignette, the four options, and the reasoning are KYP's design.",
         "location": "usmle.miniCase"},
        {"id": "drug-card-layer", "summary": "The five DrugCards (chronic exogenous glucocorticoids, spironolactone, amiodarone, lithium, carbamazepine + the SIADH trio) — one card per endocrine-axis anchor, each cell traceable to the printed rows (the GI table's drugs are NOT carded; its eight rows live verbatim in the table block and the visual strip, per the whole-page ownership).",
         "origin": "outside-first-aid", "rationale": "The source organizes the pharmacology as tables, not as drug cards; the card layer is a KYP presentation of the same printed facts.",
         "location": "drugs"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "WHOLE-PAGE OWNERSHIP with a PAGE-SHARE the batch brief did not describe: pdf 270 / book 248 holds TWO complete stacked tables — the brief said ONE table ('Drug reactions—endocrine/reproductive'), but after that table's 9 rows the same page prints the complete 'Drug reactions—gastrointestinal' table (8 rows; the hematologic table starts on page 271, owned by the parallel drug-reactions-hematologic task). Adjudication: the chapter plan assigns book 248 solely to drug-reactions-endocrine and NO GI drug-reactions topic exists anywhere in content/usmle/chapters, so per 'the topic owns the WHOLE page' BOTH tables are carried VERBATIM — the endocrine table as the note's core (subtitle, core, both mechanisms, the steps/compare/exam blocks, all patterns/traps/pivots, all four KYP mnemonics, the five DrugCards, and the miniCase are built on the endocrine axis per the production rationale), and the GI table as a fully verbatim second table block (blocks[6]) + the GI strip in the registry visual + GI lines in rapidReview.m10 and the memory callout. CENSUS (pdfimages): ZERO raster images. VLM WAS AVAILABLE this session: ONE 120dpi glm-4.6v pass (staging-ph23/vlm-census.txt) confirmed the printed endocrine row order (Adrenocortical insufficiency → Diabetes insipidus → Gynecomastia → Hot flashes → Hyperglycemia → Hyperprolactinemia → Hyperthyroidism → Hypothyroidism → SIADH), the four EMPTY notes cells, the GI table's 8 rows, the six in-cell red mnemonics and their row assignments, and the absence of margin mnemonics; the disputes the VLM read left were adjudicated deterministically with pdftotext -bbox word coordinates (documented in vlm-census.txt, column anchors x≈73.5/181.5/388.5): (1) the GI 'NOTES' column header and the hepatitis mnemonic are DISPLACED to after the footer in the cache text layer (cache lines 139, 141-142) — both belong to the table top / the hepatitis row (the acute cholestatic row's notes cell is empty); (2) the pancreatitis mnemonic interleaves between the two causal-agent lines (same y-band) — bbox x=388.5 places it in the NOTES column; (3) the esophagitis mnemonic 'Pills Not beneficial for food tube' prints INSIDE THE CAUSAL AGENTS COLUMN below the drug list (x=181.5 — the VLM read this correctly; carried there, attributed, flagged); (4) the VLM's 'tcnolazine' misread is corrected to 'ranolazine' (text layer + bbox agree; text layer wins over the 120dpi VLM read). Source spellings carried verbatim + documented: 'Cyclophosphamide' capitalized mid-list (the SIADH mnemonic's second C), 'The people need High glucose' capitalized The/High, 'Can’t' with the curly apostrophe (U+2019), '5HT3 receptor antagonist (ondansetron)', 'non-dihydropyridine CCBs', 'Amanita phalloides (death cap mushroom)', the header's 'SEC TION II' extraction artifact. Quirks, documented: (1) the batch convention targets are met — 2 mechanisms, 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (diabetes-mellitus + drug-effect-modifications exist in notes/; toxicity-treatments + drug-reactions-hematologic are parallel-production ids, safe to reference per the batch spec), 4 crossLinks, 4 KYP mnemonics, 5 DrugCards, and a miniCase with 4 options (exactly 1 correct, why on every option); the note is 746 lines and the visual 272, within the brief's 600-750 / 250-400 budgets; (2) difficulty is 1 per the chapter plan but the note targets the full batch depth convention (D2-structure field set) as instructed; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the P-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-ph23/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'drug-reaction-endocrine-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's two visual assets (the two color-coded tables) are implemented as ORIGINAL KYP ART (drug-reaction-endocrine-map, DrugReactionEndocrineMap in visuals/pharm-p23.tsx — the four hormone-axis routing lanes, the glucocorticoid withdrawal timeline with the ADRENAL CRISIS band and the taper escape, the endocrine table verbatim in printed row order, and the GI strip) with every label, causal-agent list, note, and in-cell mnemonic preserved; both tables' text is ALSO carried verbatim in the note's table blocks (blocks[1] and blocks[6]).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Toxicities and Adverse Effects",
    "topicId": "drug-reactions-endocrine", "requiredInKYP": True}
inv23 = [
    dict(SV_BASE, **{
        "visualId": "drug-reactions-endocrine-sv1",
        "sourcePages": {"part": 1, "pdfPages": [270], "bookPages": "248"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The endocrine/reproductive drug-reactions table (book 248): nine adverse reactions across four hormone axes (HPA, sex-steroid, thyroid, water/glucose), each with its causal agents and notes",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-ph23/vlm-census.txt — VLM available this session): three columns (DRUG REACTION / CAUSAL AGENTS / NOTES) with nine rows in printed order — [1] Adrenocortical insufficiency: HPA suppression secondary to chronic exogenous glucocorticoid use / abrupt withdrawal of exogenous glucocorticoids leads to adrenal crisis; [2] Diabetes insipidus: Lithium, demeclocycline (empty notes); [3] Gynecomastia: Ketoconazole, cimetidine, spironolactone, GnRH analogs/antagonists, androgen receptor inhibitors, 5α-reductase inhibitors (empty notes); [4] Hot flashes: SERMs (eg, tamoxifen, clomiphene, raloxifene) (empty notes); [5] Hyperglycemia: Tacrolimus, protease inhibitors, niacin, HCTZ, glucocorticoids + red mnemonic 'The people need High glucose'; [6] Hyperprolactinemia: typical antipsychotics (eg, haloperidol), atypical antipsychotics (eg, risperidone), metoclopramide, methyldopa, verapamil / presents with hypogonadism (eg, infertility, amenorrhea, erectile dysfunction) and galactorrhea; [7] Hyperthyroidism: Amiodarone, iodine, lithium (empty notes); [8] Hypothyroidism: Amiodarone, lithium + red mnemonic 'I am lethargic'; [9] SIADH: Carbamazepine, Cyclophosphamide, SSRIs + red mnemonic 'Can’t Concentrate Serum Sodium'. The endocrine table's text layer reads cleanly row-by-row (no interleaving); no figures, icons, or margin notes.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "drug-reaction-endocrine-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (DrugReactionEndocrineMap in visuals/pharm-p23.tsx — the four hormone-axis routing lanes [HPA / sex-steroid with its three levers / thyroid with amiodarone+lithium both directions / water-glucose with the ADH direction arrow and the diabetogenic list], the glucocorticoid withdrawal timeline ending in the ADRENAL CRISIS band with the taper escape, and the endocrine table verbatim in PRINTED row order with the red in-cell mnemonics flagged); the table's full text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, and recall[0-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "drug-reaction-endocrine-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "drug-reactions-endocrine-sv2",
        "sourcePages": {"part": 1, "pdfPages": [270], "bookPages": "248"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The gastrointestinal drug-reactions table (book 248, the page's SECOND table — owned by this note per the whole-page assignment): eight GI adverse reactions with their causal agents, three red in-cell mnemonics, and the esophagitis/pseudomembranous notes",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero; VLM-read at 120dpi): three columns (DRUG REACTION / CAUSAL AGENTS / NOTES) with eight rows in printed order — [1] Acute cholestatic hepatitis, jaundice: Macrolides (eg, erythromycin); [2] Constipation: Antimuscarinics (eg, atropine), antipsychotics, opioids, non-dihydropyridine CCBs, ranolazine, amiodarone, aluminum hydroxide, loperamide, 5HT3 receptor antagonist (ondansetron), vincristine; [3] Diarrhea: Acamprosate, antidiabetic agents (acarbose, metformin, pramlintide), colchicine, cholinesterase inhibitors, lipid-lowering agents (eg, ezetimibe, orlistat), macrolides (eg, erythromycin), SSRIs, chemotherapy (eg, irinotecan); [4] Focal to massive hepatic necrosis: Amanita phalloides (death cap mushroom), valproate, acetaminophen; [5] Hepatitis: Isoniazid, rifampin, pyrazinamide, statins, fibrates + red mnemonic 'I referred patient serum (AST, ALT) for hepatitis' (bbox-adjudicated to this row's NOTES cell); [6] Pancreatitis: Diuretics (eg, furosemide, HCTZ), glucocorticoids, alcohol, valproate, azathioprine + red mnemonic 'Drugs generate a violent abdominal distress'; [7] Medication-induced esophagitis: Potassium chloride, NSAIDs, bisphosphonates, ferrous sulfate, tetracyclines + red mnemonic 'Pills Not beneficial for food tube' printed INSIDE the causal-agents column below the drug list (bbox x=181.5) / NOTES: usually occurs at anatomic sites of esophageal narrowing (eg, near level of aortic arch); caustic effect minimized with upright posture and adequate water ingestion; [8] Pseudomembranous colitis: Ampicillin, cephalosporins, clindamycin, fluoroquinolones, PPIs / NOTES: Antibiotics predispose to superinfection by resistant C difficile. Text-layer quirks (bbox-adjudicated, documented in vlm-census.txt): the GI 'NOTES' column header and the hepatitis mnemonic displace to AFTER the footer; the pancreatitis mnemonic interleaves between the two causal-agent lines.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "drug-reaction-endocrine-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's GI strip (DrugReactionEndocrineMap in visuals/pharm-p23.tsx — 'The page's second table' zone: the eight rows with their causal agents, the three red mnemonics flagged, and the SSRIs-print-on-both-tables note); the table's full text is ALSO carried verbatim in the note's table block (blocks[6]), core.what, and the memory callout",
        "productionStatus": "complete",
        "plannedKypVisualId": "drug-reaction-endocrine-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph23"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "drug-reactions-endocrine.json").write_text(json.dumps(m23, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "drug-reactions-endocrine.json").write_text(
    json.dumps({"topicId": "drug-reactions-endocrine", "chapterId": "pharmacology", "inventory": inv23,
                "coverageAudit": {"topicId": "drug-reactions-endocrine", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's TWO visual assets — the color-coded endocrine/reproductive table (nine rows, three columns, three red in-cell mnemonics, four empty notes cells) and the color-coded gastrointestinal table (eight rows, three red in-cell mnemonics, the esophagitis mnemonic printed inside the causal-agents column) — are both accounted for as ORIGINAL KYP ADAPTATIONS: nothing is reproduced; the single registry visual drug-reaction-endocrine-map (DrugReactionEndocrineMap in visuals/pharm-p23.tsx) rebuilds both tables' every label, causal-agent list, note, and in-cell mnemonic as original KYP vector art (the four hormone-axis routing lanes, the glucocorticoid withdrawal timeline with the adrenal-crisis band, the endocrine table verbatim in printed row order, and the GI strip), and both tables' text is additionally carried verbatim in the note's table blocks. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi glm-4.6v pass (vlm-census.txt) confirmed the printed row orders, the empty notes cells, the six in-cell mnemonics and their rows, and the absence of margin mnemonics; the remaining disputes (the hepatitis mnemonic's row, the pancreatitis mnemonic's interleaving, the esophagitis mnemonic's column, 'ranolazine' vs the VLM's 'tcnolazine') were adjudicated deterministically with pdftotext -bbox word coordinates, documented in vlm-census.txt. PAGE-SHARE: the page holds both tables (the batch brief described one); both are owned by this note per the chapter plan, which assigns book 248 solely to drug-reactions-endocrine with no GI topic anywhere in the plan. STAGED under .usmle-pipeline-cache/staging-ph23/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH23 manifest + inventory staged: {OUT}/manifests/drug-reactions-endocrine.json, {OUT}/visual-inventory/drug-reactions-endocrine.json")
print(f"drug-reactions-endocrine: evidence {len(kept)}/{len(E23)} verified")
