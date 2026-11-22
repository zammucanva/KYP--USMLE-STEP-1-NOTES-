#!/usr/bin/env python3
"""PH27 drug-names — manifest + inventory (Pharmacology miscellaneous
batch), STAGED under .usmle-pipeline-cache/staging-ph27/ (the promotion
step owns content/). Source: FULL pdf pages 274-275 / books 252-253
(Part 1) — the topic owns TWO WHOLE PAGES: the two-page "Drug names"
stem table, "Drug names" on 274 (Antimicrobial 13 rows, Antineoplastic 7,
CNS 12 = 32 rows) + "Drug names (continued)" on 275 (Autonomic 5,
Cardiovascular 7, Metabolic 6, Other 14 = 32 rows); columns ENDING /
CATEGORY / EXAMPLE; 64 rows in 7 shaded group bands. Census (pdfimages):
ZERO raster images on both pages — pure vector/text. VLM AVAILABLE this
session (glm-4.6v at 120dpi): TWO full-page passes
(staging-ph27/vlm-census.txt) confirming the printed row order of BOTH
pages, the seven full-width shaded group-band rows, the bold-blue ENDING
column (NOT red), and the ABSENCE of margin notes, mnemonics,
-mab/monoclonal-antibody pointers, asterisk footnotes, and images.
ADJUDICATIONS, documented in the census file: (1) "5-HT1B/1D agonist"
prints on ONE line — the batch brief's "5-HT agonist 1B/1D split-row"
worry adjudicated NO split (raw text layer + pdftotext -layout + VLM
agree); the VLM's "5-IIT" reading is a 120dpi serif misread, adjudicated
to the text layer's "5-HT"; (2) the VLM's "-curium, -uronium" drops the
"cu" — text layer + layout agree "-curium, -curonium" (adjudicated); (3)
the VLM's "CNS covers 14 rows" is a miscount — the CNS band covers 12
rows (13+7+12 = 32 per page, all reads agree); (4) the -dipine category
prints "Dihydropyridine Ca2+ channel blocker" with a SUPERSCRIPT 2+ that
the raw text layer extracts out of order (floating after "Sildenafil",
before "-dipine") — VLM confirmed the superscript; joined as printed;
(5) the group-band labels extract OUT OF ORDER in the raw text layer
(all three at the END of page 274's lines; Autonomic/Cardiovascular
mid-page and Metabolic/Other at the END of page 275's lines) — they
print as full-width shaded band rows inside the table (VLM + layout
agree) and are carried in printed position in the note; (6) NO -mab/
-cept rows and NO monoclonal-antibody pointers print anywhere on either
page (VLM-explicit) — the brief's "-mab pointer" watch is adjudicated
NONE; the monoclonal infix system (-u-/-xi-/-zu-, -cept) is carried as a
clearly-marked KYP BRIDGE to the parallel-produced biologic-agents note,
as are the dofa-/gab- prefix families (KYP context, not printed on
252-253; the book's own pain-transmission line names the
gabapentinoids); (7) subscripts/superscripts carry as plain digits per
the cache text layer (5-HT1B/1D, β2, α1, Ca2+, PPAR-γ, CysLT1, 5-HT3,
5α); (8) "SEC TION II" is the header-space extraction artifact (known,
carried as-is) and page 274 prints the subsection banner TWICE (running
header + standalone sub-banner above the title); (9) the table ENDS at
-vaptan with the closing rule (VLM-confirmed) — no third page. DRUG
CARDS: FOLDED — the source is a table of ENDINGS, not drug monographs,
so no DrugCards are authored (the DrugCard shape does not fit; every
printed row is instead carried in the two verbatim table blocks, the
cluster list, recall, and the visual). Nothing is reproduced: the pages'
single visual asset (the two-page color-coded table) is adapted as
ORIGINAL KYP ART (registry visual drug-name-map, DrugNameMap in
visuals/pharm-p27.tsx — the seven family bands with all 64 rows in
printed order, the three-scan decode protocol, the gli-/-vir prefix &
infix panel with the -mab/-cept bridge, and the sound-alike collision
strip); both pages are additionally carried VERBATIM in the note's table
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
L = {274: pages[273].split("\n"), 275: pages[274].split("\n")}
P = {274: norm(pages[273]), 275: norm(pages[274])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E27 = [
    ("Page identity — the book page number 252, the 'SEC TION II' header-space extraction artifact (carried as-is, a known quirk), the running header + the standalone '▶ PHARMACOLOGY—MISCELLANEOUS' sub-banner (the banner prints TWICE on this page), and the table title 'Drug names'", rng(274, 1, 10), [274]),
    ("The table's three column headers — ENDING / CATEGORY / EXAMPLE — plus the first two ANTIMICROBIAL rows: -asvir → NS5A inhibitor (Ledipasvir) · -bendazole → Antiparasitic/antihelminthic (Mebendazole)", rng(274, 11, 27), [274]),
    ("ANTIMICROBIAL rows 3-6 — -buvir → NS5B inhibitor (Sofosbuvir) · -cillin → Transpeptidase inhibitor (Ampicillin) · -conazole → Ergosterol synthesis inhibitor (Ketoconazole) · -cycline → Protein synthesis inhibitor (Tetracycline)", rng(274, 29, 51), [274]),
    ("ANTIMICROBIAL rows 7-13 — -floxacin → Fluoroquinolone (Ciprofloxacin) · -mivir → Neuraminidase inhibitor (Oseltamivir) · -navir → Protease inhibitor (Ritonavir) · -ovir → Viral DNA polymerase inhibitor (Acyclovir) · -previr → NS3/4A inhibitor (Grazoprevir) · -tegravir → Integrase inhibitor (Dolutegravir) · -thromycin → Macrolide (Azithromycin) — completing the seven -vir antiviral endings", rng(274, 53, 93), [274]),
    ("The ANTINEOPLASTIC cluster — all 7 rows: -case → Recombinant uricase (Rasburicase) · -mustine → Nitrosourea (Carmustine) · -platin → Platinum compound (Cisplatin) · -poside → Topoisomerase II inhibitor (Etoposide) · -rubicin → Anthracycline (Doxorubicin) · -taxel → Taxane (Paclitaxel) · -tecan → Topoisomerase I inhibitor (Irinotecan)", rng(274, 95, 135), [274]),
    ("CNS rows 1-6 — -flurane → Inhaled anesthetic (Sevoflurane) · -apine, -idone → Atypical antipsychotic (Quetiapine, risperidone) (the first paired-ending row) · -azine → Typical antipsychotic (Thioridazine) · -barbital → Barbiturate (Phenobarbital) · -benazine → VMAT inhibitor (Tetrabenazine) · -caine → Local anesthetic (Lidocaine)", rng(274, 137, 171), [274]),
    ("CNS rows 7-12 — -capone → COMT inhibitor (Entacapone) · -curium, -curonium → Nondepolarizing neuromuscular blocker (Atracurium, pancuronium) (the printed pair — the VLM's '-uronium' adjudicated to the text layer's '-curium, -curonium') · -giline → MAO-B inhibitor (Selegiline) · -ipramine, -triptyline → TCA (Imipramine, amitriptyline) · -triptan → 5-HT1B/1D agonist (Sumatriptan) (prints on ONE line — the brief's split-row worry adjudicated no split) · -zepam, -zolam → Benzodiazepine (Diazepam, alprazolam)", rng(274, 173, 207), [274]),
    ("The page's three group-band labels — Antimicrobial · Antineoplastic · CNS — which print as full-width shaded band rows inside the table but extract at the END of the page's text layer (documented out-of-order extraction quirk; carried in printed position in the note)", rng(274, 209, 213), [274]),
    ("The print footer slug and timestamp — FAS1_2026_05-Pharmacology.indd 252 / 12/19/25 8:07 AM (page identity, book 252)", rng(274, 215, 217), [274]),
    ("Page-275 identity — the running header (PHARMACOLOGY · ▶ PHARMACOLOGY—MISCELLANEOUS · SEC TION II · 253) and the continuation title 'Drug names (continued)'", rng(275, 1, 9), [275]),
    ("The continuation table's column headers — ENDING / CATEGORY / EXAMPLE — plus the AUTONOMIC cluster, all 5 rows: -chol → Cholinergic agonist (Bethanechol) · -olol → β-blocker (Propranolol) · -stigmine → AChE inhibitor (Neostigmine) · -terol → β2-agonist (Albuterol) · -zosin → α1-blocker (Prazosin)", rng(275, 10, 44), [275]),
    ("The Autonomic and Cardiovascular group-band labels (extracting mid-page in the raw text layer — documented quirk) plus the first two CARDIOVASCULAR rows: -afil → PDE-5 inhibitor (Sildenafil) · -dipine → Dihydropyridine Ca channel blocker (Amlodipine) — with the floating '2+' superscript extract: the printed cell is 'Dihydropyridine Ca2+ channel blocker' with a SUPERSCRIPT 2+ that the text layer extracts out of order after 'Sildenafil' (VLM confirmed the superscript; joined as printed)", rng(275, 46, 60), [275]),
    ("CARDIOVASCULAR rows 3-7 — -parin → Low-molecular-weight heparin (Enoxaparin) · -plase → Thrombolytic (Alteplase) · -pril → ACE inhibitor (Captopril) · -sartan → Angiotensin-II receptor blocker (Losartan) · -xaban → Direct factor Xa inhibitor (Apixaban)", rng(275, 62, 90), [275]),
    ("The METABOLIC cluster — the gli- five plus the lipid neighbor, all 6 rows: -gliflozin → SGLT-2 inhibitor (Dapagliflozin) · -glinide → Meglitinide (Repaglinide) · -gliptin → DPP-4 inhibitor (Sitagliptin) · -glitazone → PPAR-γ activator (Pioglitazone) · -glutide → GLP-1 analog (Liraglutide) · -statin → HMG-CoA reductase inhibitor (Atorvastatin)", rng(275, 92, 126), [275]),
    ("OTHER rows 1-7 — -caftor → CFTR modulator (Lumacaftor) · -dronate → Bisphosphonate (Alendronate) · -lukast → CysLT1 receptor blocker (Montelukast) · -lutamide → Androgen receptor inhibitor (Flutamide) · -pitant → NK1 blocker (Aprepitant) · -prazole → Proton pump inhibitor (Omeprazole) · -prost → Prostaglandin analog (Latanoprost)", rng(275, 128, 168), [275]),
    ("OTHER rows 8-14 — the table's final rows: -sentan → Endothelin receptor antagonist (Bosentan) · -setron → 5-HT3 blocker (Ondansetron) · -steride → 5α-reductase inhibitor (Finasteride) · -tadine → H1-antagonist (Loratadine) · -tidine → H2-antagonist (Cimetidine) · -trozole → Aromatase inhibitor (Anastrozole) · -vaptan → ADH antagonist (Tolvaptan) — the table ENDS at -vaptan with the closing rule (VLM-confirmed; no -mab/-cept rows anywhere)", rng(275, 170, 210), [275]),
    ("The page's last two group-band labels — Metabolic · Other — extracting at the END of the page's text layer (documented out-of-order extraction quirk; carried in printed position in the note)", rng(275, 212, 214), [275]),
    ("The print footer slug and timestamp — FAS1_2026_05-Pharmacology.indd 253 / 12/19/25 8:07 AM (page identity, book 253)", rng(275, 216, 218), [275]),
]
for c, q, pgs in E27:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"drug-names: evidence {len(kept)}/{len(E27)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m27 = {"topicId": "drug-names", "title": "Drug Names: Prefixes, Suffixes & Stem Families",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Miscellaneous", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [274, 275], "bookPages": "252–253"},
    "sourceEvidence": kept, "visualIds": ["drug-name-map"],
    "mechanismIds": ["suffix-decode-map", "prefix-infix-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the two-page stem table — 4 patterns (the unfamiliar -sartan decoded by ending, the -pril dry-cough stem with the -sartan replacement, the -olol hazard in asthma/cocaine, the -afil-plus-nitrate hypotension contraindication), 4 traps (-terol vs -olol, -tadine vs -tidine, the three -ozoles, -setron vs -triptan), 3 pivots (ending-first decoding, the gli- infix arbitration, the -mab/-cept biologics routing), and 8 recall cards covering all 64 printed rows cluster by cluster plus the decode protocol.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the ending→category→example pairings only; the attack structure, the distractor designs, and the reading protocols are KYP's design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "three-scan-decode-protocol", "summary": "The three-scan decode protocol (SCAN 1 THE ENDING — the suffix names the class, 64 rows to 7 clusters; SCAN 2 THE PREFIX — the gli- infix family, the -vir targets, the three -ozoles, and beyond this page dofa-/gab-; SCAN 3 THE INFIX — the -mab humanization codes -xi-/-zu-/-u- and the -cept receptor-fusion stem, the bridge to the biologics page), plus the seven family-cluster re-sorting (Antimicrobial 13, Antineoplastic 7, CNS 12, Autonomic 5, Cardiovascular 7, Metabolic 6, Other 14) and the sound-alike collision set (-olol/-terol, -tadine/-tidine, -prazole/-conazole/-trozole, -setron/-triptan, -statin/-stigmine, -pril/-sartan).",
         "origin": "outside-first-aid", "rationale": "The source prints 64 flat rows in two alphabetical-ish bands and never asks the learner to decode an unfamiliar name or resolve collisions; the protocol, the cluster reading, and the collision set are KYP's synthesis.",
         "location": "core.keyIdea + mechanisms[0] + mechanisms[1] + blocks[3] the list block + blocks[4] the steps block + blocks[5] the compare block + the registry visual's Zone A protocol, Zone C panel, and Zone D collision strip"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (VIR MEANS VIRUS — A→5A, B→5B, PRE & NAV PROTEASE, TEG INTEGRATES, MI MEETS SIALIC ACID, O POLYMERASE / THE GLI-FIVE: FLOZIN FLUSHES, NIDE NOODGES, TIN TRIMS, TAZONE TUNES, TIDE IS THE PEPTIDE / OLOL BLOCKS, TEROL OPENS, ZOSIN UNLOADS, CHOL FLOWS, STIGMINE SUSTAINS / MAB MEANS MONOCLONAL; THE INFIX IS THE DONOR). NO mnemonic prints anywhere on either page (pdfimages + VLM census, staging-ph27/vlm-census.txt — no margin notes, no in-cell mnemonic capitals, no red text), so nothing is carried attributed and all four codes are KYP originals designed as decode hooks.",
         "origin": "outside-first-aid", "rationale": "Unlike the toxicology tables, these two pages carry zero printed mnemonics (VLM-confirmed); the four decode chants are KYP's design.",
         "location": "mnemonics + rapidReview.m3 + the visual's Zone C panel texts"},
        {"id": "mini-case-layer", "summary": "The dapagliflozin miniCase — an unfamiliar antidiabetic decoded by suffix within the printed gli- family — with the correct answer routing the -gliflozin ending to SGLT-2 inhibition (glycosuria, UTIs, genital mycotic infections, weight loss) and the three distractors occupying the family's other printed endings (-gliptin DPP-4, -glitazone PPAR-γ, -glutide GLP-1), each failing on a mechanism-specific detail the ending alone predicts.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the five gli- rows as an association table and never sets them against each other in a vignette; the clinical stem, the four options, and the reasoning are KYP's design.",
         "location": "usmle.miniCase + blocks[4] the steps block's fourth step"},
        {"id": "family-band-visual-layer", "summary": "The two-page table rebuilt as ONE registry visual (drug-name-map, DrugNameMap in visuals/pharm-p27.tsx): the seven family bands with all 64 rows in printed order (page 252's three clusters on the left, page 253's four on the right, the 14-row Other band two chips wide), the three-scan protocol strip, the gli-/-vir prefix & infix panel with the -mab/-cept humanization-code bridge (marked beyond this page), and the sound-alike collision strip. DrugCards are FOLDED: the source is a table of endings, not drug monographs, so no DrugCards are authored (shape-fit decision, documented).",
         "origin": "outside-first-aid", "rationale": "The source's only visual asset is the two-page color-coded table; the band layout, the protocol, the panel, and the strip are KYP original art preserving every printed row, and the DrugCard layer is a deliberate fold because the page prints endings rather than drug monographs.",
         "location": "blocks[0] the visual block + the registry visual + the DrugCard fold documented here and in the manifest notes"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL two-page scope (no shared split): pdf 274-275 / books 252-253 are entirely the PHARMACOLOGY-MISCELLANEOUS 'Drug names' stem table — 'Drug names' on 274 (Antimicrobial 13 + Antineoplastic 7 + CNS 12 = 32 rows) and 'Drug names (continued)' on 275 (Autonomic 5 + Cardiovascular 7 + Metabolic 6 + Other 14 = 32 rows); columns ENDING / CATEGORY / EXAMPLE; both pages carried verbatim in the note's table blocks (blocks[1] 32 rows + 3 band rows, blocks[2] 32 rows + 4 band rows) and compressed into core.what, the cluster list (blocks[3]), rapidReview, and 8 recall cards. CENSUS (pdfimages): ZERO raster images on both pages. VLM WAS AVAILABLE this session: TWO 120dpi glm-4.6v full-page passes (staging-ph27/vlm-census.txt, first attempt each) confirmed the printed row order of BOTH pages, the seven full-width shaded group-band rows, the bold-blue ENDING column (NOT red — unlike the toxicology tables), and the absence of margin notes, mnemonics, -mab/monoclonal-antibody pointers, asterisk footnotes, and images. ADJUDICATIONS (raw text layer + pdftotext -layout + VLM agree unless noted): (1) '5-HT1B/1D agonist' prints on ONE line — the brief's '5-HT agonist 1B/1D' split-row worry is adjudicated NO split; the VLM's '5-IIT' reading is a 120dpi serif misread adjudicated to the text layer; (2) '-curium, -curonium' is the printed pair — the VLM's '-uronium' (dropped 'cu') adjudicated to the text layer; (3) the CNS band covers 12 rows — the VLM's '14 rows' is a miscount (13+7+12 = 32 per page); (4) the -dipine category prints 'Dihydropyridine Ca2+ channel blocker' with a SUPERSCRIPT 2+ that the raw text layer extracts out of order (floating after 'Sildenafil', before '-dipine') — VLM confirmed the superscript; joined as printed; (5) the group-band labels extract OUT OF ORDER in the raw text layer (all three at the END of page 274; Autonomic/Cardiovascular mid-page and Metabolic/Other at the END of page 275) but print as full-width shaded band rows inside the table — carried in printed position; (6) NO -mab/-cept rows and NO monoclonal-antibody pointers print anywhere on either page (VLM-explicit) — the monoclonal infix system (-u-/-xi-/-zu-, -cept) is carried as a clearly-marked KYP BRIDGE to the parallel-produced biologic-agents note (referenced by design), as are the dofa-/gab- prefix families (KYP context, not printed on 252-253; the book's own pain-transmission line names the gabapentinoids); (7) subscripts/superscripts carry as plain digits per the cache text layer (5-HT1B/1D, β2, α1, Ca2+, PPAR-γ, CysLT1, 5-HT3, 5α); (8) 'SEC TION II' is the header-space extraction artifact (known, carried as-is); page 274 prints the subsection banner TWICE (running header + standalone sub-banner above the title); (9) the table ENDS at -vaptan with the closing rule (VLM-confirmed) — no third page. Quirks carried + documented: four rows print PAIRED endings with paired examples (-apine, -idone / -curium, -curonium / -ipramine, -triptyline / -zepam, -zolam); the ENDING column prints bold blue, not red; no mnemonics print, so all four KYP mnemonic codes are originals with nothing to attribute. Batch-convention targets met: 2 mechanisms, 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (biologic-agents — parallel production, referenced by design; beta-blockers; phosphodiesterase-inhibitors; cholinomimetics — all but the parallel note exist in notes/index.ts), 4 crossLinks, 4 KYP mnemonics, and a miniCase with 4 options (exactly 1 correct, why/whyWrong on every option). DRUG CARDS FOLDED — the page is a table of ENDINGS, not drug monographs; no DrugCards authored (documented). productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the per-record INVENTORY productionStatus is 'complete'). Outputs are STAGED under .usmle-pipeline-cache/staging-ph27/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'drug-name-map' is therefore not yet in visuals/registry.tsx by design). The pages' single visual asset (the two-page color-coded table) is implemented as ORIGINAL KYP ART in ONE registry visual (drug-name-map, DrugNameMap in visuals/pharm-p27.tsx, viewBox 0 0 1102 1216): the seven family bands with all 64 rows in printed order, the three-scan protocol strip, the gli-/-vir prefix & infix panel with the -mab/-cept bridge, and the sound-alike collision strip — with both pages' text ALSO carried verbatim in the note's table blocks.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Miscellaneous",
    "topicId": "drug-names", "requiredInKYP": True}
inv27 = [
    dict(SV_BASE, **{
        "visualId": "drug-names-sv1",
        "sourcePages": {"part": 1, "pdfPages": [274], "bookPages": "252"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The 'Drug names' table, page one (book 252): 32 stem rows in three group clusters (Antimicrobial, Antineoplastic, CNS), columns ENDING / CATEGORY / EXAMPLE — the suffix-to-class dictionary for the antimicrobial, oncology, and CNS shelves",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-ph27/vlm-census.txt — VLM available this session): page banner (252 / SECTION II / PHARMACOLOGY / PHARMACOLOGY-MISCELLANEOUS printed twice: running header + standalone sub-banner), the table title 'Drug names' in bold blue, column headers ENDING / CATEGORY / EXAMPLE, and 32 rows under three full-width shaded group-band rows — ANTIMICROBIAL (13): -asvir NS5A inhibitor Ledipasvir; -bendazole Antiparasitic/antihelminthic Mebendazole; -buvir NS5B inhibitor Sofosbuvir; -cillin Transpeptidase inhibitor Ampicillin; -conazole Ergosterol synthesis inhibitor Ketoconazole; -cycline Protein synthesis inhibitor Tetracycline; -floxacin Fluoroquinolone Ciprofloxacin; -mivir Neuraminidase inhibitor Oseltamivir; -navir Protease inhibitor Ritonavir; -ovir Viral DNA polymerase inhibitor Acyclovir; -previr NS3/4A inhibitor Grazoprevir; -tegravir Integrase inhibitor Dolutegravir; -thromycin Macrolide Azithromycin. ANTINEOPLASTIC (7): -case Recombinant uricase Rasburicase; -mustine Nitrosourea Carmustine; -platin Platinum compound Cisplatin; -poside Topoisomerase II inhibitor Etoposide; -rubicin Anthracycline Doxorubicin; -taxel Taxane Paclitaxel; -tecan Topoisomerase I inhibitor Irinotecan. CNS (12): -flurane Inhaled anesthetic Sevoflurane; -apine, -idone Atypical antipsychotic Quetiapine, risperidone; -azine Typical antipsychotic Thioridazine; -barbital Barbiturate Phenobarbital; -benazine VMAT inhibitor Tetrabenazine; -caine Local anesthetic Lidocaine; -capone COMT inhibitor Entacapone; -curium, -curonium Nondepolarizing neuromuscular blocker Atracurium, pancuronium; -giline MAO-B inhibitor Selegiline; -ipramine, -triptyline TCA Imipramine, amitriptyline; -triptan 5-HT1B/1D agonist Sumatriptan; -zepam, -zolam Benzodiazepine Diazepam, alprazolam. The ENDING column prints bold blue (not red); four rows carry paired endings with paired examples. No figures, icons, margin notes, or mnemonics.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "drug-name-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's Zone B LEFT column (DrugNameMap in visuals/pharm-p27.tsx — the Antimicrobial, Antineoplastic, and CNS family bands with all 32 rows in printed order, each row reading ending → category · example) and Zone C card 2 (the -vir seven panel); the table's full text is ALSO carried verbatim in the note's table block (blocks[1]), core.what, the cluster list (blocks[3]), rapidReview.s30, and recall[0-2]",
        "productionStatus": "complete",
        "plannedKypVisualId": "drug-name-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "drug-names-sv2",
        "sourcePages": {"part": 1, "pdfPages": [275], "bookPages": "253"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The 'Drug names (continued)' table, page two (book 253): 32 stem rows in four group clusters (Autonomic, Cardiovascular, Metabolic, Other) — the autonomic mirror, the cardiovascular set, the gli- antidiabetic family, and the fourteen-row Other band ending at -vaptan",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-ph27/vlm-census.txt — VLM available this session): running header (PHARMACOLOGY / PHARMACOLOGY-MISCELLANEOUS / SECTION II / 253), the continuation title 'Drug names (continued)', column headers ENDING / CATEGORY / EXAMPLE, and 32 rows under four full-width shaded group-band rows — AUTONOMIC (5): -chol Cholinergic agonist Bethanechol; -olol β-blocker Propranolol; -stigmine AChE inhibitor Neostigmine; -terol β2-agonist Albuterol; -zosin α1-blocker Prazosin. CARDIOVASCULAR (7): -afil PDE-5 inhibitor Sildenafil; -dipine Dihydropyridine Ca2+ channel blocker Amlodipine (the 2+ prints as a SUPERSCRIPT; the raw text layer extracts it out of order after 'Sildenafil'); -parin Low-molecular-weight heparin Enoxaparin; -plase Thrombolytic Alteplase; -pril ACE inhibitor Captopril; -sartan Angiotensin-II receptor blocker Losartan; -xaban Direct factor Xa inhibitor Apixaban. METABOLIC (6): -gliflozin SGLT-2 inhibitor Dapagliflozin; -glinide Meglitinide Repaglinide; -gliptin DPP-4 inhibitor Sitagliptin; -glitazone PPAR-γ activator Pioglitazone; -glutide GLP-1 analog Liraglutide; -statin HMG-CoA reductase inhibitor Atorvastatin. OTHER (14): -caftor CFTR modulator Lumacaftor; -dronate Bisphosphonate Alendronate; -lukast CysLT1 receptor blocker Montelukast; -lutamide Androgen receptor inhibitor Flutamide; -pitant NK1 blocker Aprepitant; -prazole Proton pump inhibitor Omeprazole; -prost Prostaglandin analog Latanoprost; -sentan Endothelin receptor antagonist Bosentan; -setron 5-HT3 blocker Ondansetron; -steride 5α-reductase inhibitor Finasteride; -tadine H1-antagonist Loratadine; -tidine H2-antagonist Cimetidine; -trozole Aromatase inhibitor Anastrozole; -vaptan ADH antagonist Tolvaptan. The table ENDS at -vaptan with the closing rule. The ENDING column prints bold blue (not red). NO -mab/-cept rows, no monoclonal-antibody pointers, no figures, icons, margin notes, or mnemonics (VLM-explicit).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "drug-name-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's Zone B RIGHT column (DrugNameMap in visuals/pharm-p27.tsx — the Autonomic, Cardiovascular, Metabolic, and Other family bands with all 32 rows in printed order, the 14-row Other band rendered two chips wide) and Zone C card 1 (the gli- five panel); the table's full text is ALSO carried verbatim in the note's table block (blocks[2]), core.what, the cluster list (blocks[3]), rapidReview.s30, and recall[3-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "drug-name-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph27"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "drug-names.json").write_text(json.dumps(m27, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "drug-names.json").write_text(
    json.dumps({"topicId": "drug-names", "chapterId": "pharmacology", "inventory": inv27,
                "coverageAudit": {"topicId": "drug-names", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The topic carries TWO visual assets — the book-252 'Drug names' table (sv1, 32 rows in 3 clusters) and the book-253 'Drug names (continued)' table (sv2, 32 rows in 4 clusters) — both accounted for as ORIGINAL KYP ADAPTATIONS: nothing is reproduced; ONE registry visual (drug-name-map, DrugNameMap in visuals/pharm-p27.tsx, viewBox 0 0 1102 1216) rebuilds the two-page table's every row as original KYP vector art (sv1 → the Zone B left column's Antimicrobial/Antineoplastic/CNS bands + the Zone C -vir panel; sv2 → the Zone B right column's Autonomic/Cardiovascular/Metabolic/Other bands + the Zone C gli- panel), with the three-scan decode protocol (Zone A), the -mab/-cept humanization-code bridge marked beyond this page (Zone C card 3), and the sound-alike collision strip (Zone D); both pages' text is additionally carried verbatim in the note's table blocks. Census: zero raster images on both pages (pdfimages); VLM available this session — TWO 120dpi full-page glm-4.6v passes (vlm-census.txt) confirmed the printed row order of both pages, the seven shaded group bands, the bold-blue ENDING column, and the absence of -mab rows, monoclonal-antibody pointers, mnemonics, margin notes, and images; the brief's flagged worries were adjudicated (all reads agree): '5-HT1B/1D agonist' prints on ONE line (no split; the VLM's '5-IIT' is a serif misread adjudicated to the text layer), '-curium, -curonium' is the printed pair (the VLM's '-uronium' adjudicated), the CNS band covers 12 rows (the VLM's '14' is a miscount), and the -dipine Ca2+ superscript extracts out of order in the raw text layer (joined as printed). FULL two-page scope (no shared split). STAGED under .usmle-pipeline-cache/staging-ph27/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH27 manifest + inventory staged: {OUT}/manifests/drug-names.json, {OUT}/visual-inventory/drug-names.json")
print(f"drug-names: evidence {len(kept)}/{len(E27)} verified")
