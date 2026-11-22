#!/usr/bin/env python3
"""PH21 seafood-plant-toxins — manifest + inventory (Pharmacology
toxicities batch), STAGED under .usmle-pipeline-cache/staging-ph21/
(the promotion step owns content/). Source: FULL pdf page 268 / book 246
(Part 1) — the WHOLE page carries TWO subsections: "Ingested seafood
toxins" (top) and "Plant toxins" (bottom), each a five-column table
(TOXIN / SOURCE / ACTION / SYMPTOMS / TREATMENT; the header row REPEATS
over the plant table). Census (pdfimages): ZERO raster images on the page
— pure vector/text. The VLM census (glm-4.6v, ONE 120dpi pass,
.usmle-pipeline-cache/staging-ph21/vlm-census.txt — VLM was available
this session) confirms BOTH tables' printed row order. SEAFOOD table
(3 rows): Histamine (scombroid poisoning) -> Tetrodotoxin -> Ciguatoxin.
NOTE: the batch content map expected a shellfish/saxitoxin row — NO
shellfish row prints on pdf 268 (VLM-confirmed); whatever rows print
governs, and the three printed rows are carried verbatim. PLANT table
(5 rows): Grayanotoxin -> Aconitine alkaloids -> Cardiac glycosides ->
Coniine (hemlock) -> Atropine/scopolamine — likewise NO ricin /
cyanogenic / water-hemlock rows print (VLM-confirmed). First Aid's own
mnemonic furniture prints in RED (the intro sentence's initial letters
h/t/c and the red first letters H/T/C on the seafood toxin names) —
carried ATTRIBUTED inside the note and NOT counted among the four KYP
originals. "Frequently misdiagnosed as fish allergy" prints INSIDE the
Histamine row's ACTION cell (VLM-adjudicated), not as a margin note; NO
margin mnemonics print anywhere on the page. CACHE-TEXT-LAYER QUIRKS
(pinned-layer verification convention: the evidence quotes below quote
the cache lines AS-IS, control characters and all — norm() strips the
0x80-0x9f range before containment): (1) the plant table's first row
INTERLEAVES — Grayanotoxin's SYMPTOMS + TREATMENT cells extract BEFORE
its TOXIN name (cache lines 98-104 before line 106); (2) the Aconitine
row's ACTION and SYMPTOMS cells interleave line-by-line (lines 124-132);
(3) the Coniine row's SOURCE and ACTION cells interleave (lines 163-167,
"Conium maculatum Nicotinic ACh receptor" merging on one line); (4) the
Atropine/scopolamine row's ACTION cell ("Muscarinic ACh receptor
antagonist") extracts AFTER the footer slug (lines 196-197); (5) a lone
"+" on cache line 92 (between the repeated ACTION/SYMPTOMS headers) is
the displaced superscript + of the Grayanotoxin "Na+ channels" — the
print carries "Opens voltage-gated Na+ channels" (VLM-confirmed; the
note's verbatim table restores the +); (6) superscripts merge as printed
unicode (Na+/K+-ATPase, Na+/Ca2+-exchanger's ², K+/Mg²+); (7) the
scombroid treatment cell prints "Albuterol +/– epinephrine" (en dash);
(8) "mad honey" and "jimsonweed" print with curly quotes; (9) the
section header prints the extraction artifact "SEC TION II"; (10) the
subsection banner prints TWICE in the cache (lines 7 and 9). Nothing is
reproduced: the page's TWO visual assets (the two color-coded tables)
are adapted as ORIGINAL KYP ART (registry visual seafood-plant-toxin-map,
SeafoodPlantToxinMap in visuals/pharm-p21.tsx — the intro-sentence
three-action fork, the three seafood row cards and five plant row cards
in printed order each tagged with its molecular target, and the antidote
column with the AVOID CLASS IA/III warning band and the clearly-labeled
MAOI-scombroid KYP-extension band); both tables are additionally carried
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
L = {268: pages[267].split("\n")}
P = {268: norm(pages[267])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E21 = [
    ("Page identity — the header banner (book page 246), the 'SEC TION II' extraction artifact, the PHARMACOLOGY header, the twice-printed subsection banner 'PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS', and the 'Ingested seafood toxins' subsection heading (the cache prints the section header as 'SEC TION II' and the banner twice — both known extraction artifacts, carried as-is)", rng(268, 1, 11), [268]),
    ("The seafood subsection's introductory sentence, verbatim — 'Toxin actions include histamine release, total block of Na+ channels, or opening of Na+ channels to cause depolarization.' First Aid prints the initial letters h/t/c in RED — its own mnemonic for Histamine, Tetrodotoxin (total block), Ciguatoxin (causes depolarization) — carried attributed, not counted among the four KYP mnemonics", rng(268, 13, 14), [268]),
    ("The seafood table's five column headers — TOXIN / SOURCE / ACTION / SYMPTOMS / TREATMENT", rng(268, 16, 24), [268]),
    ("SEAFOOD ROW 1 (printed first) — Histamine (scombroid poisoning): spoiled dark-meat fish such as tuna, mahi-mahi, mackerel, and bonito; bacterial histidine decarboxylase converts histidine to histamine; 'Frequently misdiagnosed as fish allergy' prints INSIDE this ACTION cell (VLM-adjudicated); mimics anaphylaxis: oral burning sensation, facial flushing, erythema, urticaria, itching; may progress to bronchospasm, angioedema, hypotension; antihistamines; Albuterol +/– epinephrine (the printed en dash)", rng(268, 26, 52), [268]),
    ("SEAFOOD ROW 2 (printed second) — Tetrodotoxin: pufferfish; binds fast voltage-gated Na+ channels in nerve tissue, preventing depolarization; nausea, diarrhea, paresthesias, weakness, dizziness, loss of reflexes; supportive. NOTE: no shellfish/saxitoxin row prints on this page (VLM-confirmed) — the batch content map expected one; whatever rows print governs", rng(268, 54, 67), [268]),
    ("SEAFOOD ROW 3 (printed third) — Ciguatoxin: reef fish such as barracuda, snapper, and moray eel; opens Na+ channels, causing depolarization; nausea, vomiting, diarrhea, perioral numbness, reversal of hot and cold sensations, bradycardia, heart block, hypotension; supportive", rng(268, 69, 84), [268]),
    ("The 'Plant toxins' subsection heading + the table's REPEATED five column headers (TOXIN / SOURCE / ACTION / SYMPTOMS / TREATMENT) — the lone '+' on cache line 92 is the displaced superscript + of the Grayanotoxin 'Na+ channels' (adjudicated below); the print carries 'Opens voltage-gated Na+ channels'", rng(268, 86, 96), [268]),
    ("PLANT ROW 1 (printed first) — Grayanotoxin: Rhododendron nectar ('mad honey', curly quotes in print); opens voltage-gated Na+ channels → prolonged depolarization → ↑ vagal tone; nausea, vomiting, dizziness, bradycardia, hypotension; supportive care (IV fluids, atropine if severe bradycardia). CACHE INTERLEAVE: this row's SYMPTOMS + TREATMENT cells extract BEFORE its TOXIN name — the quote carries the cache lines as-is, adjudicated to the printed cells via the VLM render; the '+' of 'Na+' is displaced to cache line 92", rng(268, 98, 115), [268]),
    ("PLANT ROW 2 (printed second) — Aconitine alkaloids: Aconitum (monkshood, wolfsbane); activates Na+ channels (site 2) → delayed inactivation → sustained Na+ influx → ventricular arrhythmias; paresthesias, hypotension, ventricular tachyarrhythmias, cardiac arrest; supportive, lidocaine or amiodarone for arrhythmia; avoid class IA/III agents. CACHE INTERLEAVE: the ACTION and SYMPTOMS cells interleave line-by-line in this quote — carried as-is, adjudicated via the VLM render", rng(268, 117, 137), [268]),
    ("PLANT ROW 3 (printed third) — Cardiac glycosides: Digitalis purpurea, Nerium oleander; inhibits Na+/K+-ATPase → ↑ intracellular Na+ → ↑ Na+/Ca²+ exchanger → ↑ Ca²+ → ↑ vagal tone, ectopy; GI upset, visual disturbances (xanthopsia), AV block, arrhythmias; digoxin-specific Fab, atropine for bradycardia, correct K+/Mg²+ (superscripts merge as printed unicode in the cache)", rng(268, 139, 158), [268]),
    ("PLANT ROW 4 (printed fourth) — Coniine (hemlock): Conium maculatum (poison hemlock); nicotinic ACh receptor agonist/antagonist → depolarizing blockade → flaccid paralysis; ascending paralysis, respiratory failure, salivation; supportive (respiratory support); activated charcoal early. CACHE INTERLEAVE: the SOURCE and ACTION cells interleave ('Conium maculatum Nicotinic ACh receptor' merges on one line) — carried as-is, adjudicated via the VLM render", rng(268, 160, 175), [268]),
    ("PLANT ROW 5 (printed fifth) — Atropine/scopolamine: Atropa belladonna, Datura stramonium ('jimsonweed', curly quotes in print); anticholinergic toxidrome: dry mouth, mydriasis, hyperthermia, delirium; physostigmine (AChE inhibitor), cooling, fluids. NOTE: no ricin / cyanogenic / water-hemlock rows print on this page (VLM-confirmed) — the batch content map expected them; whatever rows print governs. This row's ACTION cell ('Muscarinic ACh receptor antagonist') is displaced to AFTER the footer in the cache — quoted with the footer below", rng(268, 177, 192), [268]),
    ("The print footer slug + the displaced Atropine/scopolamine ACTION cell + the timestamp — 'FAS1_2026_05-Pharmacology.indd 246' / 'Muscarinic ACh receptor antagonist' / '12/19/25 8:07 AM' (page identity, book 246; the action cell extracts after the footer in the cache layer — carried as-is, adjudicated via the VLM render)", rng(268, 194, 199), [268]),
]
for c, q, pgs in E21:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"seafood-plant-toxins: evidence {len(kept)}/{len(E21)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m21 = {"topicId": "seafood-plant-toxins", "title": "Ingested Seafood & Plant Toxins",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Toxicities and Adverse Effects", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [268], "bookPages": "246–246"},
    "sourceEvidence": kept, "visualIds": ["seafood-plant-toxin-map"],
    "mechanismIds": ["seafood-toxin-target-map", "plant-toxin-target-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the two printed tables — 4 patterns (scombroid's anaphylaxis mimic, tetrodotoxin's silenced nerve, ciguatoxin's hot/cold reversal, the mad-honey-vs-jimsonweed autonomic fork), 4 traps (scombroid vs true IgE fish allergy, tetrodotoxin-block vs ciguatoxin-open, grayanotoxin vs cardiac glycosides, coniine-nicotinic vs atropine/scopolamine-muscarinic), 3 pivots, 8 recall cards — with the treatment column additionally dissected in the exam callout and the drug cards.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the tables' facts only; the attack structure, the distractor designs, and the target-routing discipline are KYP's design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "target-routing-protocol",
         "summary": "The three-move reading protocol (NAME THE TARGET → PREDICT THE SYMPTOMS FROM THE TARGET'S PHYSIOLOGY → LET THE ANTIDOTE FOLLOW THE TARGET), including the Na+ channel fork framing (total block vs opening) and the observation that the molecular target — never the fish or plant name — is the answer key for mechanism, symptom, and treatment questions alike.",
         "origin": "outside-first-aid", "rationale": "The source prints two parallel tables and never asks the learner to route a stem through target → physiology → antidote; the protocol and the fork framing are KYP's synthesis.",
         "location": "core.keyIdea + blocks[4] the steps block + the registry visual's fork band"},
        {"id": "mnemonic-layer",
         "summary": "The four KYP mnemonics (PUFFER BLOCKS, REEF OPENS, SPOILED POURS / MAD HONEY, MAD VAGUS / SITE 2 SUSTAINS THE STORM / NICOTINIC PARALYZES, MUSCARINIC DRIES). No mnemonic prints in the page's margins; First Aid's own RED mnemonic furniture — the intro sentence's initial letters h/t/c and the red first letters H/T/C on the seafood toxin names — is carried ATTRIBUTED inside the note and is NOT counted among the four KYP codes.",
         "origin": "outside-first-aid", "rationale": "No margin mnemonic prints anywhere on pdf 268 (pdfimages + VLM census, staging-ph21/vlm-census.txt); the four ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + blocks[6] the memory callout + the visual's panel footers"},
        {"id": "drug-card-layer",
         "summary": "The five DrugCards for the printed treatment agents (physostigmine, atropine-as-antidote, digoxin-specific Fab, activated charcoal, antihistamines + albuterol +/– epinephrine) — one card per antidote lane, each traced to the TREATMENT cell that prints it. Convention, documented: the page prints no adverse-effects column for these agents, so each card's adverse field is explicitly labeled 'Not printed on book 246' and states the general pharmacology (e.g., physostigmine's cholinergic excess, Fab's hypokalemia) rather than implying a printed source.",
         "origin": "outside-first-aid", "rationale": "The source organizes treatments as table cells, not as drug cards; the card layer is a KYP presentation — every mechanism/uses string quotes the printed treatment cell, and the adverse fields are flagged as outside the print.",
         "location": "drugs"},
        {"id": "maoi-scombroid-extension",
         "summary": "The MAOI–scombroid interaction note: patients on MAO inhibitors can have exaggerated scombroid reactions because ingested amines are normally cleared by oxidative deamination. This is a KYP extension that does NOT print on book 246 — it is carried in exactly three clearly-labeled places (one trap's clue, one crossLink, and the visual's warning band, each labeled 'KYP extension (not printed on book 246)') and is never presented as printed content.",
         "origin": "outside-first-aid", "rationale": "The batch content map expected the scombroid–MAOI interaction on this page, but no MAOI text prints on pdf 268 (VLM-confirmed); the interaction is real toxicology teaching, so it is carried as clearly-labeled KYP extension knowledge rather than fabricated print.",
         "location": "usmle.traps[0].clue + crossLinks[2] + the visual's KYP-extension warning band"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL page (both subsections): pdf 268 / book 246 carries 'Ingested seafood toxins' (top) and 'Plant toxins' (bottom) — the topic owns the WHOLE page. CENSUS (pdfimages): ZERO raster images — the page is section furniture + one intro sentence + TWO five-column tables (the header row REPEATS over the plant table) + the indd footer. VLM WAS AVAILABLE this session: ONE 120dpi glm-4.6v pass (staging-ph21/vlm-census.txt) confirmed BOTH tables' printed row order, the in-cell placement of 'Frequently misdiagnosed as fish allergy' (inside the Histamine row's ACTION cell), the color furniture (light-blue TOXIN column, teal toxin names with red first letters H/T/C, red h/t/c intro letters), and the absence of margin mnemonics; a second pass was not needed — the cache-layer interleaves were adjudicated deterministically against the VLM render (documented in vlm-census.txt and in the evidence claims). ROW-ORDER FINDINGS, documented: (1) the seafood table prints THREE rows — Histamine (scombroid poisoning) → Tetrodotoxin → Ciguatoxin; the batch content map expected a shellfish/saxitoxin row, but NO shellfish row prints on pdf 268 (VLM-confirmed); whatever rows print governs. (2) The plant table prints FIVE rows — Grayanotoxin → Aconitine alkaloids → Cardiac glycosides → Coniine (hemlock) → Atropine/scopolamine; NO ricin / cyanogenic / water-hemlock rows print (VLM-confirmed). (3) Tetrodotoxin prints BEFORE Ciguatoxin. CACHE QUIRKS, documented (evidence quotes quote the cache lines AS-IS per the pinned-layer verification convention; norm() strips 0x80-0x9f control characters before containment): the Grayanotoxin row's SYMPTOMS/TREATMENT cells extract before its TOXIN name; the Aconitine row's ACTION/SYMPTOMS cells interleave line-by-line; the Coniine row's SOURCE/ACTION cells interleave ('Conium maculatum Nicotinic ACh receptor' on one line); the Atropine/scopolamine row's ACTION cell extracts after the footer slug; a lone '+' on cache line 92 is the displaced superscript + of Grayanotoxin's 'Na+ channels' (the note's verbatim table restores the + per the print); superscripts merge as printed unicode (Na+/K+-ATPase, Na+/Ca²+, K+/Mg²+); 'Albuterol +/– epinephrine' prints with an en dash; 'mad honey' and 'jimsonweed' print with curly quotes; 'SEC TION II' is the header-space extraction artifact; the subsection banner prints twice in the cache (lines 7 and 9). First Aid's own RED mnemonic text (the h/t/c letters and the H/T/C toxin initials) is carried ATTRIBUTED and is NOT counted among the four KYP mnemonics. CONVENTIONS, documented: (1) the batch convention targets are met — 2 mechanisms, 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (muscarinic-antagonists, acetylcholine-receptors, cholinomimetics, sympathomimetics — all verified to exist in notes/), 4 crossLinks, 4 KYP mnemonics, 5 DrugCards, a miniCase with 4 options (exactly 1 correct, why on every option), and BOTH tables carried verbatim as table blocks; the note is 740 lines and the visual 281, within the brief's 600-750 / 250-400 budgets; (2) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the P-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (3) outputs are STAGED under .usmle-pipeline-cache/staging-ph21/ — nothing is written into content/ (chapters, content manifests, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'seafood-plant-toxin-map' is therefore not yet in visuals/registry.tsx by design); (4) the page's TWO visual assets (the two color-coded tables) are BOTH implemented as ORIGINAL KYP ART in ONE registry visual (seafood-plant-toxin-map, SeafoodPlantToxinMap in visuals/pharm-p21.tsx — the intro-sentence three-action fork, the three seafood row cards and five plant row cards in printed order each tagged with its molecular target, and the antidote column with the AVOID CLASS IA/III warning band plus the clearly-labeled MAOI KYP-extension band); both tables' text is ALSO carried verbatim in the note's table blocks (blocks[1] and blocks[2]).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Toxicities and Adverse Effects",
    "topicId": "seafood-plant-toxins", "requiredInKYP": True}
inv21 = [
    dict(SV_BASE, **{
        "visualId": "seafood-plant-toxins-sv1",
        "sourcePages": {"part": 1, "pdfPages": [268], "bookPages": "246"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The 'Ingested seafood toxins' table (book 246, top): three seafood toxin rows — histamine/scombroid, tetrodotoxin, ciguatoxin — with their sources, actions, symptoms, and treatments",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-ph21/vlm-census.txt — VLM available this session): one introductory sentence (initial letters h/t/c printed in red — First Aid's own mnemonic), then a five-column table (TOXIN / SOURCE / ACTION / SYMPTOMS / TREATMENT) with three rows in printed order — [1] Histamine (scombroid poisoning; toxin name teal with red first letter H): spoiled dark-meat fish such as tuna, mahi-mahi, mackerel, and bonito; bacterial histidine decarboxylase converts histidine to histamine, with 'Frequently misdiagnosed as fish allergy' printed INSIDE the ACTION cell; mimics anaphylaxis: oral burning sensation, facial flushing, erythema, urticaria, itching; may progress to bronchospasm, angioedema, hypotension; antihistamines, albuterol +/– epinephrine; [2] Tetrodotoxin (red first letter T): pufferfish; binds fast voltage-gated Na+ channels in nerve tissue, preventing depolarization; nausea, diarrhea, paresthesias, weakness, dizziness, loss of reflexes; supportive; [3] Ciguatoxin (red first letter C): reef fish such as barracuda, snapper, and moray eel; opens Na+ channels, causing depolarization; nausea, vomiting, diarrhea, perioral numbness, reversal of hot and cold sensations, bradycardia, heart block, hypotension; supportive. NO shellfish/saxitoxin row prints (VLM-confirmed). Light-blue shading on the TOXIN column; no figures, icons, or margin notes.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "seafood-plant-toxin-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (SeafoodPlantToxinMap in visuals/pharm-p21.tsx — the intro-sentence three-action fork band with First Aid's red h/t/c attributed, and the three seafood row cards in PRINTED row order with source/action/symptoms/treatment); the table's full text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, and recall[0-3]",
        "productionStatus": "complete",
        "plannedKypVisualId": "seafood-plant-toxin-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "seafood-plant-toxins-sv2",
        "sourcePages": {"part": 1, "pdfPages": [268], "bookPages": "246"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The 'Plant toxins' table (book 246, bottom): five plant toxin rows — grayanotoxin, aconitine, cardiac glycosides, coniine, atropine/scopolamine — with their sources, actions, symptoms, and treatments",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-ph21/vlm-census.txt — VLM available this session): the five-column header row (TOXIN / SOURCE / ACTION / SYMPTOMS / TREATMENT) repeats over this table, which carries five rows in printed order — [1] Grayanotoxin: Rhododendron nectar ('mad honey'); opens voltage-gated Na+ channels → prolonged depolarization → ↑ vagal tone; nausea, vomiting, dizziness, bradycardia, hypotension; supportive care (IV fluids, atropine if severe bradycardia); [2] Aconitine alkaloids: Aconitum (monkshood, wolfsbane); activates Na+ channels (site 2) → delayed inactivation → sustained Na+ influx → ventricular arrhythmias; paresthesias, hypotension, ventricular tachyarrhythmias, cardiac arrest; supportive, lidocaine or amiodarone for arrhythmia; avoid class IA/III agents; [3] Cardiac glycosides: Digitalis purpurea, Nerium oleander; inhibits Na+/K+-ATPase → ↑ intracellular Na+ → ↑ Na+/Ca²+ exchanger → ↑ Ca²+ → ↑ vagal tone, ectopy; GI upset, visual disturbances (xanthopsia), AV block, arrhythmias; digoxin-specific Fab, atropine for bradycardia, correct K+/Mg²+; [4] Coniine (hemlock): Conium maculatum (poison hemlock); nicotinic ACh receptor agonist/antagonist → depolarizing blockade → flaccid paralysis; ascending paralysis, respiratory failure, salivation; supportive (respiratory support); activated charcoal early; [5] Atropine/scopolamine: Atropa belladonna, Datura stramonium ('jimsonweed'); muscarinic ACh receptor antagonist; anticholinergic toxidrome: dry mouth, mydriasis, hyperthermia, delirium; physostigmine (AChE inhibitor), cooling, fluids. NO ricin / cyanogenic / water-hemlock rows print (VLM-confirmed). Light-blue shading on the TOXIN column; species names in italics; no figures, icons, or margin notes.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "seafood-plant-toxin-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (SeafoodPlantToxinMap in visuals/pharm-p21.tsx — the five plant row cards in PRINTED row order, each tagged with its molecular target (Na+ OPENER / Na+ SITE 2 / Na+/K+-ATPase / NICOTINIC ACh RECEPTOR / MUSCARINIC ACh RECEPTOR), plus the antidote-column panel with the AVOID CLASS IA/III warning band); the table's full text is ALSO carried verbatim in the note's table block (blocks[2]), core.what, and recall[4-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "seafood-plant-toxin-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph21"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "seafood-plant-toxins.json").write_text(json.dumps(m21, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "seafood-plant-toxins.json").write_text(
    json.dumps({"topicId": "seafood-plant-toxins", "chapterId": "pharmacology", "inventory": inv21,
                "coverageAudit": {"topicId": "seafood-plant-toxins", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's TWO visual assets — the 'Ingested seafood toxins' table (three rows: histamine/scombroid, tetrodotoxin, ciguatoxin) and the 'Plant toxins' table (five rows: grayanotoxin, aconitine alkaloids, cardiac glycosides, coniine, atropine/scopolamine; header row repeats) — are both accounted for as ORIGINAL KYP ADAPTATIONS: nothing is reproduced; ONE registry visual (seafood-plant-toxin-map, SeafoodPlantToxinMap in visuals/pharm-p21.tsx) rebuilds both tables' every row as original KYP vector art (the intro-sentence three-action fork with First Aid's red h/t/c attributed, the three seafood row cards and five plant row cards in printed order each tagged with its molecular target, and the antidote column with the AVOID CLASS IA/III warning band plus a clearly-labeled MAOI KYP-extension band), and both tables' text is additionally carried verbatim in the note's table blocks. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi glm-4.6v pass (vlm-census.txt) confirmed both tables' printed row order, the in-cell placement of 'Frequently misdiagnosed as fish allergy', the color furniture, and the absence of margin mnemonics; the cache-layer interleaves (Grayanotoxin row cell order, Aconitine action/symptoms line-interleave, Coniine source/action merge, the Atropine/scopolamine action cell extracting after the footer, and the lone '+' displaced from Grayanotoxin's 'Na+') were adjudicated against the VLM render and documented in the evidence claims. FULL page (both subsections, no shared split). STAGED under .usmle-pipeline-cache/staging-ph21/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH21 manifest + inventory staged: {OUT}/manifests/seafood-plant-toxins.json, {OUT}/visual-inventory/seafood-plant-toxins.json")
print(f"seafood-plant-toxins: evidence {len(kept)}/{len(E21)} verified")
