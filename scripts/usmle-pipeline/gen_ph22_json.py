#!/usr/bin/env python3
"""PH22 toxicity-treatments — manifest + inventory (Pharmacology
toxicities-and-adverse-effects batch), STAGED under
.usmle-pipeline-cache/staging-ph22/ (the promotion step owns content/).
Source: FULL pdf page 269 / book 247 (Part 1) — the topic owns the WHOLE
page, which carries TWO blocks: "Specific toxicity treatments" (top, 23
rows, columns TOXIN / TREATMENT, acetaminophen through warfarin) and
"Drug reactions—cardiovascular" (bottom, 5 rows). Census (pdfimages):
ZERO raster images on the page — pure vector/text. VLM AVAILABLE this
session (glm-4.6v at 120dpi): ONE full-page pass (staging-ph22/
vlm-census.txt) + ONE focused 2x-zoom adjudication pass on the bottom-
table crop (staging-ph22/vlm-census-bottom.txt) confirming both tables'
printed row order and the color furniture (red mnemonic capitals CASE /
VANCEN / PEDS / ABCDEF + Methadone's M, red in-cell mnemonics, blue
titles, blue reaction names, blue Vancomycin-infusion-reaction lead-in);
NO margin mnemonics, NO images — every mnemonic prints INSIDE cells and
is carried ATTRIBUTED (the four ALL-CAPS mnemonics in the note are KYP
originals). ADJUDICATIONS, documented in the census files: (1) the
cardiovascular table prints only TWO column headers (DRUG REACTION /
CAUSAL AGENTS) — the batch brief described a NOTES column, but the print
carries none; the "Vancomycin infusion reaction (formerly called red man
synd)—histamine release -> widespread pruritic erythema. Infusion
rate-dependent. Manage with slower infusion rate, diphenhydramine."
sentence is a SECOND PARAGRAPH inside the Cutaneous flushing row's
causal-agents cell (raw text layer + pdftotext -layout + BOTH VLM reads
agree); (2) the batch brief's "antiDepressa" truncation-looking worry is
adjudicated NO truncation — "antiDepressants" prints COMPLETE on one
line, the wrap falls AFTER the full word before "(eg, TCAs)" (all four
reads agree); (3) the lead row prints "Dimercaprol, Succimer" with
capital D/S (the red PEDS capitals) while the arsenic and mercury rows
print "Dimercaprol, succimer" — both spellings carried as printed; (4)
subscripts carry as plain digits per the cache text layer (100% O2 /
hyperbaric O2, NaHCO3, Ca2+ channel blockers); (5) "SEC TION II" is the
header-space extraction artifact (known, carried as-is); (6) in-cell
line wraps (copper "(3 copper / pennies)", lead "(PEDS patients lead /
antidote)", warfarin "(prothrombin / complex concentrate)", flushing
"(flushed from / VANCEN [dancing])") are joined as printed; (7) ">" is
the source's own preferred-over notation (Atropine > pralidoxime;
Fomepizole ... > ethanol). Nothing is reproduced: both of the page's
visual assets (the two color-coded tables) are adapted as ORIGINAL KYP
ART (registry visual antidote-map, AntidoteMap in visuals/pharm-p22.tsx
— the four rescue-family routing lanes BIND/BLOCK/REFILL/REBOOT with the
23 pairs re-sorted, the split rows shown in both lanes, the ABCDEF
torsades band with the QT -> early-afterdepolarizations chain, and the
cardiovascular reactions panel with the vancomycin infusion reaction);
both tables are additionally carried VERBATIM in the note's table
blocks."""
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
L = {269: pages[268].split("\n")}
P = {269: norm(pages[268])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E22 = [
    ("Page identity — the banner, the subsection side label, the section banner, the book page number 247, and the 'SEC TION II' header-space extraction artifact (carried as-is, a known quirk)", rng(269, 1, 10), [269]),
    ("The antidote table's two column headers — TOXIN / TREATMENT — plus ROW 1: Acetaminophen → N-acetylcysteine (replenishes glutathione)", rng(269, 12, 18), [269]),
    ("ROW 2 — AChE inhibitors, organophosphates → Atropine > pralidoxime (the '>' is the source's own preferred-over notation; atropine BLOCKS the muscarinic receptor first, pralidoxime REBOOTS/regenerates the enzyme)", rng(269, 20, 22), [269]),
    ("ROW 3 — Antimuscarinic, anticholinergic agents → Physostigmine (crosses BBB), control hyperthermia (the cholinergic see-saw's mirror row: the AChE inhibitor is the ANTIDOTE here)", rng(269, 24, 26), [269]),
    ("ROWS 4-6 — Arsenic → Dimercaprol, succimer · Benzodiazepines → Flumazenil · β-blockers → Atropine, glucagon, saline", rng(269, 28, 38), [269]),
    ("ROWS 7-9 — Carbon monoxide → 100% O2, hyperbaric O2 · Copper → “Penny”cillamine (penicillamine), trientine (3 copper pennies) (the cell wraps in print as '(3 copper / pennies)' — joined as printed) · Cyanide → Hydroxocobalamin, nitrites + sodium thiosulfate", rng(269, 40, 51), [269]),
    ("ROWS 10-13 — Dabigatran → Idarucizumab · Digoxin → Digoxin-specific antibody fragments · Direct factor Xa inhibitors (eg, apixaban) → Andexanet alfa · Heparin → Protamine sulfate", rng(269, 53, 67), [269]),
    ("ROWS 14-16 — Iron (Fe) → Deferoxamine, deferasirox, deferiprone · Lead → Penicillamine, calcium disodium EDTA, Dimercaprol, Succimer, (PEDS patients lead antidote) (capital D/S = the red PEDS capitals; the cell wraps '(PEDS patients lead / antidote)' — joined as printed) · Mercury → Dimercaprol, succimer (lowercase s here, unlike the lead row — both spellings carried as printed)", rng(269, 69, 81), [269]),
    ("ROWS 17-20 — Methanol, ethylene glycol (antifreeze) → Fomepizole (the foe of methanol) > ethanol, dialysis · Methemoglobin → Methylene blue, vitamin C (reducing agent) · Methotrexate → Leucovorin · Opioids → Naloxone", rng(269, 83, 97), [269]),
    ("ROWS 21-23 — Salicylates → NaHCO3 (alkalinizes urine), dialysis · TCAs → NaHCO3 (stabilizes cardiac cell membrane) (one salt, two rescue logics) · Warfarin → Vitamin K (delayed effect), PCC (prothrombin complex concentrate)/FFP (immediate effect) (the cell wraps '(prothrombin / complex concentrate)' — joined as printed)", rng(269, 99, 110), [269]),
    ("The bottom table's heading and column headers — 'Drug reactions—cardiovascular' / DRUG REACTION / CAUSAL AGENTS (the print carries only TWO column headers; the batch brief's NOTES column does not print — the Vancomycin infusion reaction sentence is a second paragraph inside the Cutaneous flushing row's causal-agents cell)", rng(269, 112, 115), [269]),
    ("CARDIOVASCULAR ROW 1 — Coronary vasospasm ← Cocaine, Amphetamines, Sumatriptan, Ergot alkaloids (CASE) (the capitals spell First Aid's own red mnemonic, carried attributed)", rng(269, 117, 119), [269]),
    ("CARDIOVASCULAR ROW 2 — Cutaneous flushing ← Vancomycin, Adenosine, Niacin, Ca2+ channel blockers, Echinocandins, Nitrates (flushed from VANCEN [dancing]) — plus the same cell's second paragraph: the Vancomycin infusion reaction (formerly called red man syndrome), histamine release → widespread pruritic erythema, infusion rate–dependent (en dash as printed), managed with slower infusion rate, diphenhydramine", rng(269, 121, 126), [269]),
    ("CARDIOVASCULAR ROWS 3-4 — Dilated cardiomyopathy ← Alcohol, anthracycline (eg, doxorubicin, daunorubicin; prevent with dexrazoxane), trastuzumab · Peripheral edema ← Dihydropyridine Ca2+ channel blockers (eg, amlodipine)", rng(269, 128, 134), [269]),
    ("CARDIOVASCULAR ROW 5 (the exam centerpiece) — Torsades de pointes ← Associated with agents that prolong QT interval: Methadone, antiArrhythmics (class IA, III), antiBiotics (eg, macrolides, fluoroquinolones), anti“C”ychotics (eg, ziprasidone), antiDepressants (eg, TCAs), antiEmetics (eg, ondansetron), antiFungals (eg, fluconazole) (Memorize your ABCDEF) — 'anti“C”ychotics' is the source's own printed spelling (quotes around the red capital C); 'antiDepressants' prints COMPLETE (the brief's truncation worry adjudicated as no truncation — the wrap falls after the full word)", rng(269, 136, 140), [269]),
    ("The print footer slug and timestamp — FAS1_2026_05-Pharmacology.indd 247 / 12/19/25 8:07 AM (page identity, book 247)", rng(269, 142, 144), [269]),
]
for c, q, pgs in E22:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"toxicity-treatments: evidence {len(kept)}/{len(E22)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m22 = {"topicId": "toxicity-treatments", "title": "Specific Toxicity Treatments: The Antidote Table",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Toxicities and Adverse Effects", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [269], "bookPages": "247–247"},
    "sourceEvidence": kept, "visualIds": ["antidote-map"],
    "mechanismIds": ["antidote-rescue-mechanism-map", "cardiovascular-reaction-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the two printed tables — 4 patterns (acetaminophen/NAC repletion, the farmworker organophosphate two-family rescue with the printed 'Atropine > pralidoxime' order, the antifreeze/methanol fomepizole blockade, the methadone+ABCDEF torsades stem), 4 traps (atropine's three hats on one page, the five-metal chelator mapping, NaHCO3's two rescue logics for salicylates vs TCAs, the anticoagulant-reversal quartet with vitamin K's delay), 3 pivots (the four-move protocol, the cholinergic see-saw sorter, the reaction-names-the-mechanism router), and 8 recall cards covering all 23 antidote rows plus the 5 cardiovascular rows.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the two tables' pairings only; the attack structure, the distractor designs, and the reading protocols are KYP's design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "four-families-protocol", "summary": "The BIND / BLOCK / REFILL / REBOOT rescue-family classification of every antidote on the page (chelation & capture; receptor competition; substrate & cofactor repletion; enzyme regeneration, metabolic blockade, detour) and the four-move reading protocol (NAME THE TOXIN → NAME THE MECHANISM OF HARM → MATCH THE RESCUE FAMILY → NAME THE ANTIDOTE AND READ ITS PUNCTUATION), including the split-row logic (organophosphates = atropine + pralidoxime; methemoglobin = methylene blue + vitamin C) and the punctuation rule (the '>' and the timing parentheses).",
         "origin": "outside-first-aid", "rationale": "The source prints the 23 rows as an alphabetical association table and never asks the learner to classify the antidote by its mechanism of rescue; the four-family classification, the split-row logic, and the protocol are KYP's synthesis.",
         "location": "core.keyIdea + mechanisms[0] + blocks[3] the list block + blocks[4] the steps block + the registry visual's Zone A lanes and Zone D protocol strip"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (BIND, BLOCK, REFILL, REBOOT / DE-FE TAKES FE / THE CHOLINERGIC SEE-SAW / K IS SLOW, FAB IS FAST). No mnemonic prints in the page's margins; First Aid's own in-cell red mnemonics (PEDS · “Penny”cillamine + trientine (3 copper pennies) · “Dimer”caprol/succ“imer” · Fomepizole (the foe of methanol) · “Meth”emoglobin→“Meth”ylene blue · “Opi”oids→Nal“oxo”ne · CASE · VANCEN [dancing] · ABCDEF “(Memorize your ABCDEF)” · the do/da/de of doxorubicin/daunorubicin/dexrazoxane) are carried ATTRIBUTED inside the verbatim table, the memory callout, and the visual, and are NOT counted among the four KYP codes.",
         "origin": "outside-first-aid", "rationale": "No margin mnemonic prints anywhere on pdf 269 (pdfimages + VLM census, staging-ph22/vlm-census.txt and vlm-census-bottom.txt); the four ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + blocks[6] the memory callout + the visual's ABCDEF band footer text"},
        {"id": "mini-case-layer", "summary": "The organophosphate farmworker miniCase — best initial antidote — with the correct answer routing the two-family rescue (atropine = muscarinic competition first, pralidoxime = enzyme regeneration second, the printed 'Atropine > pralidoxime') and distractors inverting the order (pralidoxime monotherapy), running the see-saw backwards (physostigmine, the ANTImuscarinic row's antidote, itself an AChE inhibitor), and borrowing the right logic at the wrong receptor (naloxone, hooked by the shared pinpoint pupil).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the pairing as one cell and never dissects the order or the two mirror rows against distractors; the vignette, the four options, and the reasoning are KYP's design.",
         "location": "usmle.miniCase + blocks[5] the cholinergic see-saw compare"},
        {"id": "drug-card-layer", "summary": "The five DrugCards (N-acetylcysteine, pralidoxime, fomepizole, deferoxamine + deferasirox/deferiprone, digoxin-specific antibody fragments) — one card per key antidote spanning four rescue families, each card's pairing traceable to the printed row; the antidote adverse-effect fields are explicitly marked KYP context (the source page maps toxin → antidote only and prints no antidote side effects); methylene blue is folded into blocks/recall/mnemonics rather than a drug card (documented).",
         "origin": "outside-first-aid", "rationale": "The source organizes the pharmacology as a toxin→treatment table, not as drug cards; the card layer is a KYP presentation, and every adverse-effect statement on the cards is flagged as KYP context rather than printed text.",
         "location": "drugs"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 269 / book 247 is entirely the PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS subsection, carrying TWO blocks — 'Specific toxicity treatments' (23 rows, TOXIN / TREATMENT, printed alphabetical order acetaminophen → warfarin) on top and 'Drug reactions—cardiovascular' (5 rows) at the bottom; BOTH tables are carried verbatim in the note's table blocks (blocks[1] 23 rows, blocks[2] 5 rows). CENSUS (pdfimages): ZERO raster images. VLM WAS AVAILABLE this session: ONE 120dpi glm-4.6v full-page pass (staging-ph22/vlm-census.txt) + ONE focused 2x-zoom adjudication pass on the bottom-table crop (staging-ph22/vlm-census-bottom.txt) confirmed both tables' printed row order, the color furniture (red mnemonic capitals CASE / VANCEN / PEDS / ABCDEF + Methadone's M; red in-cell mnemonics; blue titles, header rule bars, and reaction names; blue Vancomycin-infusion-reaction lead-in), and the absence of margin mnemonics and images. ADJUDICATIONS (all four independent reads agree — raw text layer, pdftotext -layout, and both VLM passes): (1) the cardiovascular table prints only TWO column headers (DRUG REACTION / CAUSAL AGENTS) — the batch brief described a NOTES column, but the print carries none; the Vancomycin infusion reaction sentence is a SECOND PARAGRAPH inside the Cutaneous flushing row's causal-agents cell — carried as printed, and the note documents the correction; (2) the batch brief's 'antiDepressa' truncation-looking worry is adjudicated NO truncation — 'antiDepressants' prints complete on one line, the wrap falls after the full word before '(eg, TCAs)'; (3) the lead row prints 'Dimercaprol, Succimer' (capital D/S — the red PEDS capitals Penicillamine/EDTA/Dimercaprol/Succimer, '(PEDS patients lead antidote)') while the arsenic and mercury rows print 'Dimercaprol, succimer' — both spellings carried as printed; (4) 'anti“C”ychotics' is the source's own printed spelling (quotation marks around the red capital C, printed example ziprasidone), and Methadone leads the torsades list OUTSIDE the ABCDEF letters. Quirks carried + documented: subscripts as plain digits per the cache text layer (100% O2, hyperbaric O2, NaHCO3, Ca2+ channel blockers); 'SEC TION II' header-space extraction artifact; 'Infusion rate–dependent' en dash; in-cell wraps (copper, lead, warfarin, flushing cells) joined as printed; '>' = the source's own preferred-over notation (Atropine > pralidoxime; Fomepizole (the foe of methanol) > ethanol, dialysis). First Aid's own red in-cell mnemonics are carried ATTRIBUTED (not counted among the four KYP mnemonics). Quirks, documented: (1) the batch convention targets are met — 2 mechanisms, 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (cholinomimetics, muscarinic-antagonists, av-conduction-blocks, drug-reactions-endocrine — the last produced in parallel in this same batch, referenced by design), 3 crossLinks, 4 KYP mnemonics, 5 DrugCards, and a miniCase with 4 options (exactly 1 correct, why/whyWrong on every option); the note is 749 lines and the visual 261, within the brief's 600-750 / 250-400 budgets; (2) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the P-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (3) outputs are STAGED under .usmle-pipeline-cache/staging-ph22/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'antidote-map' is therefore not yet in visuals/registry.tsx by design); (4) both of the page's visual assets (the two color-coded tables) are implemented as ORIGINAL KYP ART in ONE registry visual (antidote-map, AntidoteMap in visuals/pharm-p22.tsx, viewBox 0 0 1102 1284): the antidote table becomes the four rescue-family routing lanes with the 23 pairs re-sorted and the split rows shown in both lanes, and the cardiovascular table becomes the ABCDEF torsades band (QT → early afterdepolarizations → torsades chain, the M+A-F chips, and First Aid's own '(Memorize your ABCDEF)' instruction carried attributed) plus the four-row reactions panel (CASE, VANCEN + the vancomycin infusion reaction, the dilated-cardiomyopathy trio with dexrazoxane prevention, dihydropyridine edema) — with both tables' text ALSO carried verbatim in the note's table blocks.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Toxicities and Adverse Effects",
    "topicId": "toxicity-treatments", "requiredInKYP": True}
inv22 = [
    dict(SV_BASE, **{
        "visualId": "toxicity-treatments-sv1",
        "sourcePages": {"part": 1, "pdfPages": [269], "bookPages": "247"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Specific toxicity treatments table (book 247, top): the 23-row toxin→antidote pairing table (TOXIN / TREATMENT) — the highest-yield table in toxicology",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-ph22/vlm-census.txt — VLM available this session): the subsection side label 'Specific toxicity treatments', then a two-column table (TOXIN / TREATMENT) with 23 rows in printed alphabetical order — Acetaminophen → N-acetylcysteine (replenishes glutathione); AChE inhibitors, organophosphates → Atropine > pralidoxime; Antimuscarinic, anticholinergic agents → Physostigmine (crosses BBB), control hyperthermia; Arsenic → Dimercaprol, succimer; Benzodiazepines → Flumazenil; β-blockers → Atropine, glucagon, saline; Carbon monoxide → 100% O2, hyperbaric O2; Copper → “Penny”cillamine (penicillamine), trientine (3 copper pennies) (red); Cyanide → Hydroxocobalamin, nitrites + sodium thiosulfate; Dabigatran → Idarucizumab; Digoxin → Digoxin-specific antibody fragments; Direct factor Xa inhibitors (eg, apixaban) → Andexanet alfa; Heparin → Protamine sulfate; Iron (Fe) → Deferoxamine, deferasirox, deferiprone; Lead → Penicillamine, calcium disodium EDTA, Dimercaprol, Succimer, (PEDS patients lead antidote) (red PEDS capitals); Mercury → Dimercaprol, succimer (red “Dimer”/“imer” portions); Methanol, ethylene glycol (antifreeze) → Fomepizole (the foe of methanol) > ethanol, dialysis; Methemoglobin → Methylene blue, vitamin C (reducing agent) (red “Meth” portions); Methotrexate → Leucovorin; Opioids → Naloxone (red “Opi”/“oxo” portions); Salicylates → NaHCO3 (alkalinizes urine), dialysis; TCAs → NaHCO3 (stabilizes cardiac cell membrane); Warfarin → Vitamin K (delayed effect), PCC (prothrombin complex concentrate)/FFP (immediate effect). No figures, icons, or margin notes.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "antidote-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's Zone A (AntidoteMap in visuals/pharm-p22.tsx — the 23 pairs re-sorted into four rescue-family routing lanes: BIND IT with 11 chips, BLOCK IT with 4, REFILL IT with 4, REBOOT IT with 6, plus the split-rows band showing organophosphates/cyanide/methemoglobin in both of their lanes) and Zone D (the four-moves protocol strip); the table's full text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, list block (blocks[3]), and recall[0-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "antidote-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "toxicity-treatments-sv2",
        "sourcePages": {"part": 1, "pdfPages": [269], "bookPages": "247"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Drug reactions—cardiovascular table (book 247, bottom): five adverse cardiovascular drug reactions with their causal agents — including the torsades de pointes row with the ABCDEF mnemonic",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi in BOTH passes, staging-ph22/vlm-census.txt + the focused 2x-zoom crop pass vlm-census-bottom.txt — VLM available this session): heading 'Drug reactions—cardiovascular', TWO printed column headers (DRUG REACTION / CAUSAL AGENTS — the batch brief's NOTES column does not print; the Vancomycin infusion reaction sentence is a second paragraph inside the Cutaneous flushing row's causal-agents cell, its lead-in phrase printing blue), five rows in printed order — Coronary vasospasm ← Cocaine, Amphetamines, Sumatriptan, Ergot alkaloids (CASE) (red capitals); Cutaneous flushing ← Vancomycin, Adenosine, Niacin, Ca2+ channel blockers, Echinocandins, Nitrates (flushed from VANCEN [dancing]) (red capitals; the wrap '(flushed from / VANCEN [dancing])' joins as printed) + the Vancomycin infusion reaction (formerly called red man syndrome)—histamine release → widespread pruritic erythema. Infusion rate–dependent. Manage with slower infusion rate, diphenhydramine.; Dilated cardiomyopathy ← Alcohol, anthracycline (eg, doxorubicin, daunorubicin; prevent with dexrazoxane) (red do/da/de), trastuzumab; Peripheral edema ← Dihydropyridine Ca2+ channel blockers (eg, amlodipine); Torsades de pointes ← Associated with agents that prolong QT interval: Methadone, antiArrhythmics (class IA, III), antiBiotics (eg, macrolides, fluoroquinolones), anti“C”ychotics (eg, ziprasidone), antiDepressants (eg, TCAs), antiEmetics (eg, ondansetron), antiFungals (eg, fluconazole) (Memorize your ABCDEF) (red capitals; QT and ABCDEF red; 'antiDepressants' prints complete — the brief's truncation worry adjudicated as none). Left-column reaction names print blue. No figures, icons, or margin notes.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "antidote-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's Zone B (the ABCDEF torsades band: the METHADONE + ABCDEF AGENTS → PROLONG QT INTERVAL → EARLY AFTERDEPOLARIZATIONS → TORSADES DE POINTES chain, the seven M+A-F chips, and First Aid's own '(Memorize your ABCDEF)' instruction carried attributed in a red band) and Zone C (the four-row reactions panel: CASE vasospasm, VANCEN flushing + the vancomycin infusion reaction paragraph, the dilated-cardiomyopathy trio with dexrazoxane prevention, dihydropyridine edema — each card tagged with the reading rule 'the mechanism, misplaced') in AntidoteMap (visuals/pharm-p22.tsx); the table's full text is ALSO carried verbatim in the note's table block (blocks[2]) and recall[7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "antidote-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph22"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "toxicity-treatments.json").write_text(json.dumps(m22, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "toxicity-treatments.json").write_text(
    json.dumps({"topicId": "toxicity-treatments", "chapterId": "pharmacology", "inventory": inv22,
                "coverageAudit": {"topicId": "toxicity-treatments", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries TWO visual assets — the 23-row Specific toxicity treatments table (sv1) and the 5-row Drug reactions—cardiovascular table (sv2) — both accounted for as ORIGINAL KYP ADAPTATIONS: nothing is reproduced; ONE registry visual (antidote-map, AntidoteMap in visuals/pharm-p22.tsx, viewBox 0 0 1102 1284) rebuilds both tables' every toxin, antidote, and causal agent as original KYP vector art (sv1 → the four rescue-family routing lanes BIND/BLOCK/REFILL/REBOOT with the split rows shown in both lanes + the four-moves protocol strip; sv2 → the ABCDEF torsades band with the QT→EAD→torsades chain + the four-row reactions panel), and both tables' text is additionally carried verbatim in the note's table blocks. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi full-page glm-4.6v pass (vlm-census.txt) + ONE focused 2x-zoom bottom-table crop pass (vlm-census-bottom.txt) confirmed the printed row order of both tables, the color furniture, and the absence of margin mnemonics; the two disputes the brief flagged were adjudicated (all four reads agree): the cardiovascular table prints only TWO column headers (no NOTES column — the Vancomycin infusion reaction sentence is a second paragraph inside the cutaneous flushing cell), and 'antiDepressants' prints complete (no truncation; the wrap falls after the full word). FULL single page (no shared split). STAGED under .usmle-pipeline-cache/staging-ph22/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH22 manifest + inventory staged: {OUT}/manifests/toxicity-treatments.json, {OUT}/visual-inventory/toxicity-treatments.json")
print(f"toxicity-treatments: evidence {len(kept)}/{len(E22)} verified")
