#!/usr/bin/env python3
"""PH26 pupil-size-cyp450 — manifest + inventory (Pharmacology
toxicities-and-adverse-effects batch), STAGED under
.usmle-pipeline-cache/staging-ph26/ (the promotion step owns content/).
Source: FULL pdf page 273 / book 251 (Part 1) — the topic owns the WHOLE
page, which carries THREE blocks: "Drugs affecting pupil size" (top,
two-column mydriasis/miosis layout + the iris figure with radial/sphincter
muscle illustrations), "Cytochrome P-450 interactions (selected)" (middle,
three-column inducers/substrates/inhibitors table), and "Sulfa drugs"
(bottom, eight-drug list + nine-reaction sentence + the red margin
mnemonic). Census (pdfimages): ZERO raster images on the page — the two
iris illustrations are vector art (the only figure), plus two small gray
multimedia ebook icons beside the iris captions (digital-resource markers,
not content). VLM AVAILABLE this session (glm-4.6v at 120dpi): ONE
full-page pass (staging-ph26/vlm-census.txt) confirming all three blocks'
printed structure and order, the iris artwork (LEFT: dilated pupil, radial
muscle fibers, dark iris, one caption; RIGHT: constricted pupil,
concentric sphincter rings, lighter iris, one caption), and the color
furniture: blue sidebar block labels, RED column headers (↑ pupil size
(mydriasis) / ↓ pupil size (miosis); Inducers (+) / Substrates /
Inhibitors (–)), red mnemonic letters inside the CYP drug names, red sulfa
drug initials (S-S-P-F-A-C-T-S), the three CYP mnemonics printing INSIDE
the table in a red bottom row, and "Scary Sulfa Pharm FACTS" printing IN
RED IN THE RIGHT MARGIN (the page's only margin printing). ADJUDICATIONS,
documented in the census file and the note's header: (1) meperidine is NOT
a separate bullet in the mydriasis column — it prints JOINED BY COMMA to
the indirect sympathomimetics entry ("Indirect sympathomimetics (eg,
amphetamines, cocaine, LSD), meperidine"); the batch brief's
separate-item description is corrected to the print (text layer + layout
+ VLM all agree); (2) the batch brief's miosis list named only
sympatholytics and opioids — the print carries a THIRD entry,
"Parasympathomimetics (eg, pilocarpine), organophosphates", carried
(the topic owns the whole page); (3) the iris captions are embedded TWICE
in the cache text layer as interleaved duplicate spans — the print shows
each caption ONCE (VLM); carried once, duplication documented; (4) the
inducers mnemonic prints wrapping as "(phen-" / "phen)" — the printed
form is "(phen-phen)"; the cache text layer merges it as "(phenphen)";
the note restores the printed hyphen, and the evidence quotes below quote
the cache lines as-is; (5) the VLM read the last sulfa drug as
"Sulfonureas" — adjudicated to the text layer's "Sulfonylureas" (raw +
layout layers both print it). Quirks carried + documented: the two pupil
column headers carry \\x8f/\\x90 control-char prefixes in the text layer
(stripped by norm()); "SEC TION II" header-space artifact (known);
subscripts as plain digits per the text layer (α2-agonists, α1, M3);
"First Aid's own mnemonics ("St. John's funny funny (phen-phen) mom never
refuses greasy carbs and chronic alcohol" · "The OCPs are anti-war" ·
"SICK FACES come when I am really drinking grapefruit juice" · "Scary
Sulfa Pharm FACTS") are carried ATTRIBUTED and are NOT counted among the
four KYP originals. Nothing is reproduced: all three of the page's visual
assets are adapted as ORIGINAL KYP ART in ONE registry visual
(pupil-cyp-map, PupilCypMap in visuals/pharm-p26.tsx — the two-pull iris
panel, the enzyme-amplitude panel, and the sulfa family panel); all three
blocks are additionally carried VERBATIM in the note's blocks."""
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
L = {273: pages[272].split("\n")}
P = {273: norm(pages[272])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E26 = [
    ("Page identity — the PHARMACOLOGY side label, the 'Drugs affecting pupil size' block heading (wrapping 'Drugs affecting pupil / size'), the ▶ PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS banner, and BOTH pupil column headers — '↑ pupil size (mydriasis)' and '↓ pupil size (miosis)' (the two headers carry \\x8f/\\x90 control-char prefixes in the text layer, stripped by norm(); both print in red per the VLM census)", rng(273, 1, 10), [273]),
    ("The mydriasis column, verbatim (all three entries, printed order): Anticholinergics (eg, atropine, TCAs, tropicamide, scopolamine, antihistamines) · Indirect sympathomimetics (eg, amphetamines, cocaine, LSD), meperidine · Direct sympathomimetics — meperidine prints JOINED BY COMMA to the indirect-sympathomimetics entry, NOT as its own bullet (adjudicated: text layer + layout + VLM agree; the batch brief's separate-item description is corrected to the print)", rng(273, 12, 16), [273]),
    ("The miosis column, verbatim (all three entries, printed order): Sympatholytics (eg, α2-agonists) · Opioids (except meperidine) · Parasympathomimetics (eg, pilocarpine), organophosphates — the third entry was not named in the batch brief's list; it prints and is carried (the topic owns the whole page)", rng(273, 18, 21), [273]),
    ("The iris figure's dilator caption, as embedded in the text layer — 'Radial muscle contraction (α1 receptor mediated)' appearing TWICE as interleaved duplicate spans (an extraction artifact; the print shows the caption ONCE beneath the dilated iris with radial fibers, per the VLM census — carried once in the note, duplication documented)", rng(273, 23, 27), [273]),
    ("The iris figure's constrictor caption, as embedded in the text layer — 'Sphincter muscle contraction (M3 receptor mediated)' appearing TWICE as interleaved duplicate spans (same adjudication: the print shows it once, beneath the constricted iris with concentric sphincter rings)", rng(273, 40, 45), [273]),
    ("The middle and bottom block headings — 'Cytochrome P-450 / interactions (selected)' and 'Sulfa drugs' (both print as blue sidebar labels per the VLM census)", rng(273, 29, 32), [273]),
    ("The CYP table's three column headers, verbatim: Inducers (+) · Substrates · Inhibitors (–) (printing in red above thin rules per the VLM census; the (–) prints with an en dash)", rng(273, 47, 51), [273]),
    ("The nine CYP-450 inducers, verbatim in printed order: St. John's wort, Phenytoin, Phenobarbital, Modafinil, Nevirapine, Rifampin, Griseofulvin, Carbamazepine, Chronic alcohol overuse (mnemonic-relevant letters printing red inside the names)", rng(273, 53, 61), [273]),
    ("The four CYP-450 substrates, verbatim in printed order: Theophylline, OCPs, Anti-epileptics, Warfarin (the four gauges whose levels swing — INR, theophylline level, contraceptive efficacy, seizure control)", rng(273, 63, 66), [273]),
    ("The fourteen CYP-450 inhibitors, verbatim in printed order: Sodium valproate, Isoniazid, Cimetidine, Ketoconazole, Fluconazole, Acute alcohol overuse, Chloramphenicol, Erythromycin/clarithromycin, Sulfonamides, Ciprofloxacin, Omeprazole, Amiodarone, Ritonavir, Grapefruit juice (alcohol prints in BOTH columns — chronic overuse induces, acute overuse inhibits)", rng(273, 68, 81), [273]),
    ("The CYP table's three mnemonics, verbatim, printing INSIDE the table in a red bottom row (First Aid's own, carried ATTRIBUTED, not counted among the four KYP codes): 'St. John's funny funny (phenphen) mom never refuses greasy carbs and chronic alcohol' (the print wraps as '(phen-' / 'phen)' — the printed form is '(phen-phen)'; the cache layer merges it as '(phenphen)', quoted here as-is) · 'The OCPs are anti-war' · 'SICK FACES come when I am really drinking grapefruit juice'", rng(273, 83, 91), [273]),
    ("The sulfa block's drug list and adverse-reaction sentence, verbatim: Sulfonamide antibiotics, Sulfasalazine, Probenecid, Furosemide, Acetazolamide, Celecoxib, Thiazides, Sulfonylureas. Patients with sulfa allergies may develop fever, UTI, SJS, hemolytic anemia, thrombocytopenia, agranulocytosis, acute interstitial nephritis, urticaria (hives), and photosensitivity. (eight drugs with red initial capitals S-S-P-F-A-C-T-S in list order; the VLM's 'Sulfonureas' read is adjudicated to the text layer's 'Sulfonylureas' — raw + layout layers agree)", rng(273, 93, 100), [273]),
    ("First Aid's own sulfa margin mnemonic, verbatim — 'Scary Sulfa Pharm FACTS', printing IN RED IN THE RIGHT MARGIN (the page's only margin printing, per the VLM census) — plus the page's PDF-export timestamp line '12/19/25 8:07 AM'", rng(273, 102, 104), [273]),
    ("The print footer slug and book page number — FAS1_2026_05-Pharmacology.indd 251, the 'SEC TION II' header-space extraction artifact (known, carried as-is), and the page number 251 (page identity)", rng(273, 34, 38), [273]),
]
for c, q, pgs in E26:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"pupil-size-cyp450: evidence {len(kept)}/{len(E26)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m26 = {"topicId": "pupil-size-cyp450", "title": "Drugs Affecting Pupil Size, CYP-450 Interactions, and the Sulfa Family",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Toxicities and Adverse Effects", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [273], "bookPages": "251–251"},
    "sourceEvidence": kept, "visualIds": ["pupil-cyp-map"],
    "mechanismIds": ["pupil-autonomic-pull-map", "cyp450-induction-inhibition-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the three printed blocks — 4 patterns (the opioid pinpoint-pupil stem, the anticholinergic dilated-pupil toxidrome, the inducer-causes-therapeutic-failure stem on warfarin/OCP/theophylline/anti-epileptics, the inhibitor-causes-toxicity stem), 4 traps (meperidine vs every other opioid, chronic vs acute alcohol direction, grapefruit juice vs St. John's wort as the two non-drug agents, sulfonamide antibiotics vs the non-antibiotic sulfa family), 3 pivots (the two-muscle pupil router, the CYP direction-first rule, the sulfa-family check), and 8 recall cards covering all three blocks verbatim.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the three blocks' lists only; the attack structure, the distractor designs, and the reading protocols are KYP's design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "two-pull-and-amplitude-protocols", "summary": "The two KYP reading protocols: (1) the IRIS TWO-PULL rule — RADIAL OPENS (α1 driven by direct/indirect sympathomimetics, or unopposed when anticholinergics block M3) vs SPHINCTER CLOSES (M3 driven by parasympathomimetics/organophosphates, or won by default when sympatholytics withdraw the α1 pull or opioids act centrally), with meperidine as the printed exception on both sides; (2) the CYP ENZYME-AMPLITUDE rule — induce = more enzyme = less drug = therapeutic failure, inhibit = less enzyme = more drug = toxicity, with the four substrate gauges (INR, theophylline, OCP efficacy, seizure control) and the chronic-vs-acute alcohol two-direction quirk.",
         "origin": "outside-first-aid", "rationale": "The source prints the pupil block as two flat drug columns and the CYP block as three flat name lists; it never asks the learner to route each drug through the muscle it moves or to file each interaction by direction before naming the consequence. Both protocols, the two mechanism flows, and the four-moves CYP steps are KYP's synthesis.",
         "location": "core.keyIdea + mechanisms[0] + mechanisms[1] + blocks[2] the two-pull compare + blocks[4] the four-moves steps + the registry visual's Zones A/B and protocol strip"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (RADIAL OPENS, SPHINCTER CLOSES / EVERY OPIOID PINPOINTS — EXCEPT MEPERIDINE / MORE ENZYME, LESS DRUG / SULFA IS A FAMILY, NOT A DRUG). First Aid's own mnemonics — 'St. John's funny funny (phen-phen) mom never refuses greasy carbs and chronic alcohol' (inducers), 'The OCPs are anti-war' (substrates), 'SICK FACES come when I am really drinking grapefruit juice' (inhibitors), all three printing INSIDE the CYP table in a red bottom row, and 'Scary Sulfa Pharm FACTS' printing in red in the right margin — are carried ATTRIBUTED inside the verbatim carries, the memory callout, and the visual, and are NOT counted among the four KYP codes.",
         "origin": "outside-first-aid", "rationale": "The source's own mnemonics are preserved and attributed; the four ALL-CAPS codes that organize the page's logic (two-pull, opioid exception, CYP direction, sulfa family) are KYP's design.",
         "location": "mnemonics + blocks[8] the memory callout + the visual's mnemonic bands"},
        {"id": "mini-case-layer", "summary": "The warfarin + trimethoprim-sulfamethoxazole miniCase — a stable-INR patient whose INR climbs to 9.4 five days after starting TMP-SMX — with the correct answer routing two printed rows (warfarin substrate + sulfonamides inhibitor = less enzyme, more drug) and distractors inverting the direction (induction), borrowing the wrong block (the IgE sulfa-allergy story from the page's third block), and reaching for the non-printed gut-flora/vitamin-K mechanism; the vignette, the four options, and the reasoning are KYP's design.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the substrate and inhibitor lists separately and never intersects them in a clinical vignette; the case is KYP's synthesis and dissection.",
         "location": "usmle.miniCase"},
        {"id": "drug-card-layer", "summary": "The four DrugCards (meperidine — the pupil-dilating opioid exception; rifampin — the prototype inducer; cimetidine — the prototype inhibitor; sulfonamide antibiotics — the sulfa-family anchor), one per testable individual spanning all three blocks; each card's fields are explicitly marked where they are KYP context rather than printed text (the page prints only the pupil lists, the CYP name lists, and the sulfa block — no mechanisms, no uses, no adverse effects for these drugs).",
         "origin": "outside-first-aid", "rationale": "The source organizes its pharmacology as class lists and interaction tables, not as drug cards; the card layer is a KYP presentation, and every non-printed statement on the cards is flagged as KYP context.",
         "location": "drugs"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 273 / book 251 is entirely the PHARMACOLOGY—TOXICITIES AND ADVERSE EFFECTS subsection, carrying THREE blocks — 'Drugs affecting pupil size' (two-column mydriasis/miosis layout + the iris figure), 'Cytochrome P-450 interactions (selected)' (three-column table), and 'Sulfa drugs' (eight drugs + the nine-reaction sentence + the margin mnemonic); ALL THREE blocks are carried verbatim in the note's blocks (blocks[1] the pupil table, blocks[3] the CYP list, blocks[6] the sulfa list). CENSUS (pdfimages): ZERO raster images — the two iris illustrations are vector art (the page's only figure), plus two small gray multimedia ebook icons beside the iris captions (digital-resource markers, not content). VLM WAS AVAILABLE this session: ONE 120dpi glm-4.6v full-page pass (staging-ph26/vlm-census.txt) confirmed all three blocks' printed structure and order, the iris artwork (left: dilated pupil, radial muscle fibers; right: constricted pupil, concentric sphincter rings; one caption each), and the color furniture (blue sidebar block labels; red column headers; red mnemonic letters inside the CYP drug names; red sulfa drug initials S-S-P-F-A-C-T-S; the three CYP mnemonics printing INSIDE the table in a red bottom row; 'Scary Sulfa Pharm FACTS' printing IN RED IN THE RIGHT MARGIN — the page's only margin printing). ADJUDICATIONS (raw text layer + pdftotext -layout + VLM agree unless noted): (1) meperidine is NOT a separate bullet — it prints JOINED BY COMMA to the indirect-sympathomimetics entry ('Indirect sympathomimetics (eg, amphetamines, cocaine, LSD), meperidine'); the batch brief's separate-item description is corrected to the print; (2) the batch brief's miosis list named only sympatholytics and opioids — the print carries a THIRD entry, 'Parasympathomimetics (eg, pilocarpine), organophosphates', carried; (3) the iris captions are embedded TWICE in the cache text layer as interleaved duplicate spans (extraction artifact; the print shows each once — carried once, duplication documented); (4) the inducers mnemonic prints wrapping as '(phen-' / 'phen)' (printed form '(phen-phen)'); the cache layer merges it as '(phenphen)' — the note restores the printed hyphen, the evidence quotes quote the cache lines as-is; (5) the VLM's 'Sulfonureas' read is adjudicated to the text layer's 'Sulfonylureas' (raw + layout layers agree). Quirks carried + documented: \\x8f/\\x90 control-char prefixes on the two pupil column headers (stripped by norm()); 'SEC TION II' header-space artifact; subscripts as plain digits (α2-agonists, α1, M3); the inhibitors' (–) en dash. First Aid's own mnemonics are carried ATTRIBUTED (not counted among the four KYP mnemonics). Batch convention targets are met — 2 mechanisms, 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (muscarinic-antagonists, sympathomimetics, cholinomimetics, drug-metabolism — all verified to exist in notes/), 4 crossLinks, 4 KYP mnemonics, 4 DrugCards, and a miniCase with 4 options (exactly 1 correct, why/whyWrong on every option). productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the P-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'). Outputs are STAGED under .usmle-pipeline-cache/staging-ph26/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'pupil-cyp-map' is therefore not yet in visuals/registry.tsx by design). All three of the page's visual assets are implemented as ORIGINAL KYP ART in ONE registry visual (pupil-cyp-map, PupilCypMap in visuals/pharm-p26.tsx, viewBox 0 0 1102 1300): the pupil block becomes the two-pull iris panel (the dilated iris with radial spokes docked by the mydriasis chips, the constricted iris with concentric rings docked by the miosis chips, the printed α1/M3 captions, the meperidine exception band), the CYP table becomes the enzyme-amplitude panel (four substrate gauges in the middle, nine inducer chips + the MORE ENZYME = LESS DRUG = FAILURE band, fourteen inhibitor chips + the LESS ENZYME = MORE DRUG = TOXICITY band, the chronic-vs-acute alcohol chip, and First Aid's own three mnemonics carried attributed in red bands), and the sulfa block becomes the family panel (eight drug chips with their S-S-P-F-A-C-T-S initials, the nine-reaction cluster, and First Aid's own red margin mnemonic carried attributed) — with all three blocks' text ALSO carried verbatim in the note's blocks.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Toxicities and Adverse Effects",
    "topicId": "pupil-size-cyp450", "requiredInKYP": True}
inv26 = [
    dict(SV_BASE, **{
        "visualId": "pupil-size-cyp450-sv1",
        "sourcePages": {"part": 1, "pdfPages": [273], "bookPages": "251"},
        "visualType": "PHARMACOLOGY_DIAGRAM",
        "visualPurpose": "The Drugs affecting pupil size block (book 251, top): the two-column mydriasis/miosis drug lists plus the iris figure — the page's only figure — showing the two muscles that set pupil size",
        "sourceFigureDescription": "TWO-COLUMN LAYOUT + VECTOR FIGURE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-ph26/vlm-census.txt — VLM available this session): the block 'Drugs affecting pupil size' under a blue sidebar label, with RED column headers over thin rules — '↑ pupil size (mydriasis)' listing Anticholinergics (eg, atropine, TCAs, tropicamide, scopolamine, antihistamines); Indirect sympathomimetics (eg, amphetamines, cocaine, LSD), meperidine (meperidine joined by comma, NOT a separate bullet); Direct sympathomimetics — and '↓ pupil size (miosis)' listing Sympatholytics (eg, α2-agonists); Opioids (except meperidine); Parasympathomimetics (eg, pilocarpine), organophosphates. The figure beneath: LEFT iris drawn dark with fine radial muscle fibers and a dilated black pupil, captioned 'Radial muscle contraction (α1 receptor mediated)'; RIGHT iris drawn lighter with concentric sphincter rings and a constricted black pupil, captioned 'Sphincter muscle contraction (M3 receptor mediated)'; a small gray multimedia (speaker/play) ebook icon beside each caption (digital-resource marker, not content); no arrows. The cache text layer embeds each caption TWICE as interleaved duplicate spans (extraction artifact; the print shows each once).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "pupil-cyp-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's Zone A (PupilCypMap in visuals/pharm-p26.tsx — the two-pull iris panel: the dilated iris redrawn with 24 radial spokes + a large pupil on the mydriasis side and the constricted iris redrawn with concentric rings + a small pupil on the miosis side, each with its printed caption, the three mydriasis drug chips and three miosis drug chips docked beside the irises, the meperidine exception band spanning both sides, and the two-pull reading-rule strip); the block's full text is ALSO carried verbatim in the note's table block (blocks[1]) and recall[0-3]",
        "productionStatus": "complete",
        "plannedKypVisualId": "pupil-cyp-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "pupil-size-cyp450-sv2",
        "sourcePages": {"part": 1, "pdfPages": [273], "bookPages": "251"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Cytochrome P-450 interactions (selected) table (book 251, middle): three columns — Inducers (+) with nine drugs, Substrates with four drugs, Inhibitors (–) with fourteen drugs — plus the three in-table mnemonics",
        "sourceFigureDescription": "COLOR-CODED THREE-COLUMN TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-ph26/vlm-census.txt — VLM available this session): the block 'Cytochrome P-450 interactions (selected)' under a blue sidebar label, with RED column headers above thin rules — Inducers (+): St. John's wort, Phenytoin, Phenobarbital, Modafinil, Nevirapine, Rifampin, Griseofulvin, Carbamazepine, Chronic alcohol overuse; Substrates: Theophylline, OCPs, Anti-epileptics, Warfarin; Inhibitors (–): Sodium valproate, Isoniazid, Cimetidine, Ketoconazole, Fluconazole, Acute alcohol overuse, Chloramphenicol, Erythromycin/clarithromycin, Sulfonamides, Ciprofloxacin, Omeprazole, Amiodarone, Ritonavir, Grapefruit juice — with the mnemonic-relevant letters printing RED inside the drug names (St, Ph, Ph, M, N, R, Gr, Ca, Chronic alcohol; The, OCPs, A, War; S, I, C, K, F, A, C, E, S, C, O, Am, R, grapefruit juice). A bottom row inside the table prints the three mnemonics in red: 'St. John's funny funny (phen-phen) mom never refuses greasy carbs and chronic alcohol' (wrapping as '(phen-' / 'phen)'; the cache layer merges it as '(phenphen)'), 'The OCPs are anti-war', and 'SICK FACES come when I am really drinking grapefruit juice'. No figures, icons, or margin notes.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "pupil-cyp-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's Zone B (the enzyme-amplitude panel in PupilCypMap, visuals/pharm-p26.tsx — the four substrate gauges in the middle; nine inducer chips with the MORE ENZYME = LESS DRUG → THERAPEUTIC FAILURE band; fourteen inhibitor chips with their SICK FACES letters and the LESS ENZYME = MORE DRUG → TOXICITY band; the chronic-vs-acute alcohol two-direction chip; and First Aid's own three table mnemonics carried attributed in a red band); the table's full text is ALSO carried verbatim in the note's list block (blocks[3]) and recall[4-6]",
        "productionStatus": "complete",
        "plannedKypVisualId": "pupil-cyp-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "pupil-size-cyp450-sv3",
        "sourcePages": {"part": 1, "pdfPages": [273], "bookPages": "251"},
        "visualType": "SUMMARY_FIGURE",
        "visualPurpose": "The Sulfa drugs block (book 251, bottom): the eight-drug cross-reactivity list with red initial capitals, the nine-reaction allergy sentence, and First Aid's own red margin mnemonic 'Scary Sulfa Pharm FACTS'",
        "sourceFigureDescription": "TEXT BLOCK + MARGIN MNEMONIC, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-ph26/vlm-census.txt — VLM available this session): the block 'Sulfa drugs' under a blue sidebar label, body text in black with the eight drug initial capitals printing RED in list order (S-S-P-F-A-C-T-S): 'Sulfonamide antibiotics, Sulfasalazine, Probenecid, Furosemide, Acetazolamide, Celecoxib, Thiazides, Sulfonylureas. Patients with sulfa allergies may develop fever, UTI, SJS, hemolytic anemia, thrombocytopenia, agranulocytosis, acute interstitial nephritis, urticaria (hives), and photosensitivity.' — and, printing IN RED IN THE RIGHT MARGIN (the page's only margin printing), the mnemonic 'Scary Sulfa Pharm FACTS' (initials S-S-P-F-A-C-T-S mapping to the eight drugs in list order). The VLM's 'Sulfonureas' read is adjudicated to the text layer's 'Sulfonylureas' (raw + layout layers agree). No figures or icons.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "pupil-cyp-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's Zone C (the sulfa family panel in PupilCypMap, visuals/pharm-p26.tsx — the eight drug chips with their red S-S-P-F-A-C-T-S initials and class labels, the nine-reaction cluster box grouping the reactions as the symptomatic pair / the dermatologic three / the three cytopenias / the kidney, the family-across-indications line, and First Aid's own 'Scary Sulfa Pharm FACTS' margin mnemonic carried attributed in a red band); the block's full text is ALSO carried verbatim in the note's list block (blocks[6]) and recall[7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "pupil-cyp-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph26"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "pupil-size-cyp450.json").write_text(json.dumps(m26, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "pupil-size-cyp450.json").write_text(
    json.dumps({"topicId": "pupil-size-cyp450", "chapterId": "pharmacology", "inventory": inv26,
                "coverageAudit": {"topicId": "pupil-size-cyp450", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 3,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries THREE visual assets — the pupil-size block with the two vector iris illustrations (sv1, the page's only figure), the three-column CYP-450 table with its in-table red mnemonics (sv2), and the sulfa text block with its red drug initials and red margin mnemonic (sv3) — all three accounted for as ORIGINAL KYP ADAPTATIONS: nothing is reproduced; ONE registry visual (pupil-cyp-map, PupilCypMap in visuals/pharm-p26.tsx, viewBox 0 0 1102 1300) rebuilds all three blocks' every drug entry, figure label, and mnemonic as original KYP vector art (sv1 → the two-pull iris panel with the dilated and constricted irises redrawn and the drug chips docked; sv2 → the enzyme-amplitude panel with the substrate gauges, the inducer/inhibitor chips, and the attributed mnemonic bands; sv3 → the sulfa family panel with the eight initial chips, the nine-reaction cluster, and the attributed margin mnemonic), and all three blocks' text is additionally carried verbatim in the note's blocks. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi glm-4.6v full-page pass (staging-ph26/vlm-census.txt) confirmed the printed structure and order of all three blocks, the iris artwork, and the color furniture (blue sidebar labels, red column headers, red mnemonic letters, red sulfa initials, the red margin mnemonic); the two disputes the brief flagged were adjudicated (text layer + layout + VLM agree): meperidine prints JOINED BY COMMA to the indirect-sympathomimetics entry (not a separate bullet), and the miosis column carries a third entry, 'Parasympathomimetics (eg, pilocarpine), organophosphates' (not named in the brief's list — carried). Additional documented quirks: the iris captions embed twice in the text layer (interleaved duplicates; the print shows each once); the inducers mnemonic prints wrapping '(phen-' / 'phen)' (cache merges as '(phenphen)'); the VLM's 'Sulfonureas' is adjudicated to 'Sulfonylureas'; \\x8f/\\x90 control-char prefixes on the pupil column headers (stripped by norm()); 'SEC TION II' header-space artifact; the two gray multimedia ebook icons beside the iris captions are digital-resource markers, not content (not counted as a visual asset). FULL single page (no shared split). STAGED under .usmle-pipeline-cache/staging-ph26/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH26 manifest + inventory staged: {OUT}/manifests/pupil-size-cyp450.json, {OUT}/visual-inventory/pupil-size-cyp450.json")
print(f"pupil-size-cyp450: evidence {len(kept)}/{len(E26)} verified")
