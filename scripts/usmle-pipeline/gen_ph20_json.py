#!/usr/bin/env python3
"""PH20 phosphodiesterase-inhibitors — manifest + inventory (Pharmacology
autonomic-drugs batch), STAGED under .usmle-pipeline-cache/staging-ph20/
(the promotion step owns content/). Source: FULL pdf page 267 / book 245
(Part 1) — a FULL single page, no shared-page split. Census (pdfimages):
ZERO raster images on the page — pure vector/text. The VLM census
(glm-4.6v, ONE 120dpi pass, .usmle-pipeline-cache/staging-ph20/
vlm-census.txt — VLM was available this session, unlike the ph6-ph10
outage batch) confirms the page furniture and the full table: ONE
introductory sentence + ONE color-coded table with columns TYPE OF
INHIBITOR / MECHANISM OF ACTION / CLINICAL USES / ADVERSE EFFECTS, rows
in PRINTED order: Nonspecific PDE inhibitor (Theophylline) -> PDE-5
inhibitors (Sildenafil, vardenafil, tadalafil, avanafil — drug names
printed in red with the -fil endings highlighted) -> PDE-4 inhibitor
(Roflumilast) -> PDE-3 inhibitor (Milrinone) -> "Platelet inhibitors"
(Cilostazol-a, Dipyridamole-b) + TWO superscripted footnotes + the indd
footer slug. NOTE: PDE-4 prints BEFORE PDE-3 in this table; the printed
order is carried verbatim. NO margin mnemonics (VLM-confirmed) — First
Aid's own mnemonic text prints INSIDE cells in red ("hot and sweaty,"
then headache, heartburn, hypotension / PDE-6 (six) in retina / corpus
cavernosum "fills" the penis), carried ATTRIBUTED inside the note's
verbatim table; the four ALL-CAPS mnemonics in the note are KYP
originals. SECOND-PASS ADJUDICATION (documented in vlm-census.txt;
deterministic pdftotext -bbox + PyMuPDF raw spans, not a second VLM
pass): (1) the milrinone mechanism cell PRINTS "ionotropy" (the
source's own spelling, extra "o") while the same row's clinical-uses
cell correctly prints "(inotrope)" — the 120dpi VLM read smoothed it to
"inotropy"; carried verbatim as printed; (2) "blue-tinted" prints
hyphenated across a line wrap — the cache text layer merges it as
"bluetinted" (the note's verbatim table restores the printed hyphen;
the evidence quotes below quote the cache lines AS-IS per the pinned-
layer verification convention); (3) the footnote markers a/b interleave
in the text layer (marker 'a' prints before BOTH footnote sentences,
marker 'b' after them) — bbox coordinates adjudicate: a heads the
Cilostazol sentence, b heads the Dipyridamole sentence, matching the
table's superscripts; (4) the footnote superscripts merge into the drug
words in the cache layer ("Cilostazola"/"Dipyridamoleb") — carried as
Cilostazol-a / Dipyridamole-b per the print. Nothing is reproduced: the
page's single visual asset (the color-coded table) is adapted as
ORIGINAL KYP ART (registry visual pde-inhibitor-map, PdeInhibitorMap in
visuals/pharm-p20.tsx — the two second-messenger lanes cut by the
shared PDE brake, the five family cards in printed row order, and the
sildenafil NO/cGMP corpus-cavernosum panel with the nitrates
contraindication warning band); the table itself is additionally
carried VERBATIM in the note's table blocks."""
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
L = {267: pages[266].split("\n")}
P = {267: norm(pages[266])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E20 = [
    ("Page identity — the header banner, topic heading, section banner, and book page number 245 (the text layer prints the section header as 'SEC TION II', a known extraction artifact, carried as-is)", rng(267, 1, 10), [267]),
    ("The introductory sentence, verbatim — PDE inhibitors inhibit PDE, which catalyzes the hydrolysis of cAMP and/or cGMP, and thereby increase cAMP and/or cGMP; varying specificity for PDE isoforms and thus different clinical uses", rng(267, 12, 14), [267]),
    ("The table's four column headers — TYPE OF INHIBITOR / MECHANISM OF ACTION / CLINICAL USES / ADVERSE EFFECTS", rng(267, 16, 22), [267]),
    ("ROW 1 (printed first) — Nonspecific PDE inhibitor, Theophylline: ↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation; COPD/asthma (rarely used); cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain", rng(267, 24, 37), [267]),
    ("ROW 2 (printed second) — PDE-5 inhibitors, Sildenafil, vardenafil, tadalafil, avanafil: ↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis; erectile dysfunction, pulmonary hypertension, BPH (tadalafil only); facial flushing, headache, dyspepsia, hypotension in patients taking nitrates; “hot and sweaty,” then headache, heartburn, hypotension; sildenafil only: cyanopia (bluetinted vision) via inhibition of PDE-6 (six) in retina — the cache line prints the hyphenated wrap merged as 'bluetinted'; the PRINT carries the hyphen (blue-tinted), per the PyMuPDF raw-span adjudication in vlm-census.txt", rng(267, 39, 62), [267]),
    ("ROW 3 (printed THIRD — PDE-4 prints before PDE-3 on this page) — PDE-4 inhibitor, Roflumilast: ↑ cAMP in neutrophils, granulocytes, and bronchial epithelium; severe COPD; abdominal pain, weight loss, depression, anxiety, insomnia", rng(267, 64, 74), [267]),
    ("ROW 4 (printed FOURTH) — PDE-3 inhibitor, Milrinone: in cardiomyocytes ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy (the source's OWN PRINTED SPELLING 'ionotropy', extra 'o' — carried verbatim; the same row's uses cell correctly prints '(inotrope)'); in vascular smooth muscle ↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload; acute decompensated HF with cardiogenic shock (inotrope); tachycardia, ventricular arrhythmias, hypotension", rng(267, 76, 92), [267]),
    ("ROW 5 (printed fifth) — “Platelet inhibitors”, Cilostazol + Dipyridamole (the cache layer merges the footnote superscripts into the drug words as 'Cilostazola'/'Dipyridamoleb' — the print carries superscripts, adjudicated in vlm-census.txt): in platelets ↑ cAMP → inhibition of platelet aggregation; intermittent claudication, stroke or TIA prevention (with aspirin), cardiac stress testing (dipyridamole only, due to coronary vasodilation), prevention of coronary stent restenosis; nausea, headache, facial flushing, hypotension, abdominal pain", rng(267, 94, 113), [267]),
    ("The two table footnotes, verbatim — the footnote markers a/b interleave in the text layer (marker 'a' before both sentences, marker 'b' after); adjudicated by bbox coordinates + the VLM render: footnote a = the Cilostazol sentence, footnote b = the Dipyridamole sentence (with the adenosine-reuptake mechanism)", rng(267, 115, 121), [267]),
    ("The print footer slug and timestamp — FAS1_2026_05-Pharmacology.indd 245 / 12/19/25 8:07 AM (page identity, book 245)", rng(267, 123, 125), [267]),
]
for c, q, pgs in E20:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"phosphodiesterase-inhibitors: evidence {len(kept)}/{len(E20)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m20 = {"topicId": "phosphodiesterase-inhibitors", "title": "Phosphodiesterase Inhibitors",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [267], "bookPages": "245–245"},
    "sourceEvidence": kept, "visualIds": ["pde-inhibitor-map"],
    "mechanismIds": ["pde-brake-map", "sildenafil-no-cgmp-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed table — 4 patterns (theophylline's three-system toxicity spill, the sildenafil+nitrates contraindication, milrinone's two-tissue inotrope physiology, roflumilast's severe-COPD mood/gut cluster), 4 traps (cAMP vs cGMP lanes, contraindication-vs-listed-AE, cilostazol's PDE-3 chemistry vs platelet filing, sildenafil-only cyanopia), 3 pivots, 8 recall cards — the platelet row's dipyridamole stress-test use is additionally covered in its drug card, recall, and the miniCase reasoning.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the table's facts only; the attack structure, the distractor designs, and the four-move reading protocol are KYP's design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "four-moves-protocol", "summary": "The four-move reading protocol (NAME THE ISOENZYME → NAME THE LANE → NAME THE TISSUE → PREDICT USE AND ADVERSE EFFECT FROM THE TISSUE) and the PDE-is-the-brake framing of the whole page, including the observation that the tissue — never the drug name — is the answer key.",
         "origin": "outside-first-aid", "rationale": "The source prints the rows as parallel table cells and never asks the learner to route a stem through isoenzyme → nucleotide → tissue → prediction; the protocol and the brake framing are KYP's synthesis.",
         "location": "core.keyIdea + blocks[3] the steps block + the registry visual's two-lane band"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (PDE IS THE BRAKE / FIVE FILLS, SIX SEES / THREE PUMPS, FOUR CALMS / NITRATES STEP ON THE GAS, “FIL” RELEASES THE BRAKE). No mnemonic prints in the page's margins; First Aid's own red in-cell mnemonic text (“hot and sweaty,” then headache, heartburn, hypotension · PDE-6 (six) in retina · fills the penis) is carried ATTRIBUTED inside the verbatim table and is NOT counted among the four KYP codes.",
         "origin": "outside-first-aid", "rationale": "No margin mnemonic prints anywhere on pdf 267 (pdfimages + VLM census, staging-ph20/vlm-census.txt); the four ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + blocks[5] the memory callout + the visual's panel footers"},
        {"id": "mini-case-layer", "summary": "The sildenafil + isosorbide dinitrate miniCase — which mechanism best explains the danger — with the correct answer tracking both drugs onto the cGMP axis (nitrates ↑ NO → ↑ cGMP synthesis; PDE-5 inhibition ↓ hydrolysis of cGMP → compounded ↑↑ cGMP → profound hypotension) and distractors importing milrinone's PDE-3/cAMP row, inventing a P450 pharmacokinetic story, and misreading tadalafil's BPH indication as a class exemption.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the contraindication as one adverse-effects phrase ('hypotension in patients taking nitrates') and never dissects it against distractor mechanisms; the vignette, the four options, and the reasoning are KYP's design.",
         "location": "usmle.miniCase"},
        {"id": "drug-card-layer", "summary": "The six DrugCards (theophylline, sildenafil + the -fil family, roflumilast, milrinone, cilostazol, dipyridamole) — one card per printed drug family, each cell traceable to the table row and footnotes.",
         "origin": "outside-first-aid", "rationale": "The source organizes the pharmacology as a table, not as drug cards; the card layer is a KYP presentation of the same printed facts (every mechanism/uses/adverse string is quoted from the table cells or footnotes).",
         "location": "drugs"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 267 / book 245 is entirely the Phosphodiesterase inhibitors subsection. CENSUS (pdfimages): ZERO raster images — the page is ONE introductory sentence + ONE color-coded table (TYPE OF INHIBITOR / MECHANISM OF ACTION / CLINICAL USES / ADVERSE EFFECTS) + two superscripted footnotes + the indd footer. VLM WAS AVAILABLE this session (unlike the ph6-ph10 401-outage batch): ONE 120dpi glm-4.6v pass (staging-ph20/vlm-census.txt) confirmed the printed row order (Nonspecific → PDE-5 → PDE-4 → PDE-3 → “Platelet inhibitors” — PDE-4 PRINTS BEFORE PDE-3 on this page; the batch spec's content map listed PDE-3 first, but 'whatever rows print' governs and the printed order is carried), the color furniture (red drug names with the -fil endings highlighted, red in-cell mnemonic text, light-blue TYPE OF INHIBITOR column), and the absence of margin mnemonics; a SECOND VLM pass was not needed — the two disputes the 120dpi read left were adjudicated deterministically with pdftotext -bbox word coordinates + PyMuPDF raw spans (documented in vlm-census.txt): (1) the milrinone mechanism cell PRINTS the source's own spelling 'ionotropy' (extra 'o'; the VLM smoothed it to 'inotropy'; the same row's uses cell correctly prints '(inotrope)') — carried verbatim, attributed; (2) 'blue-tinted' prints hyphenated across a line wrap while the cache text layer merges it as 'bluetinted' — the note's verbatim table restores the printed hyphen, and the evidence quotes quote the cache lines AS-IS (the pinned-layer verification convention); also adjudicated by bbox: the footnote markers a/b interleave in the text layer (a before both sentences, b after) — a heads the Cilostazol sentence, b heads the Dipyridamole sentence, matching the table superscripts; and the cache merges the superscripts into the drug words ('Cilostazola'/'Dipyridamoleb') — carried as Cilostazolᵃ/Dipyridamoleᵇ per the print. Source spellings carried verbatim + documented: 'cyanopia' (not 'cyanopsia'), '↑ ionotropy' (not 'inotropy'), the 'SEC TION II' header-space extraction artifact. First Aid's own red in-cell mnemonic text is carried ATTRIBUTED inside the note's verbatim table (it is NOT counted among the four KYP mnemonics). Quirks, documented: (1) the batch convention targets are met — 2 mechanisms, 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related, 3 crossLinks, 4 KYP mnemonics, 6 DrugCards, and a miniCase with 4 options (exactly 1 correct, why on every option); the note is 750 lines and the visual 265, within the brief's 600-750 / 250-400 budgets; (2) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the P-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (3) outputs are STAGED under .usmle-pipeline-cache/staging-ph20/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'pde-inhibitor-map' is therefore not yet in visuals/registry.tsx by design); (4) the page's single visual asset (the color-coded table) is implemented as ORIGINAL KYP ART (pde-inhibitor-map, PdeInhibitorMap in visuals/pharm-p20.tsx) with every label, mechanism arrow, use, adverse effect, and footnote preserved — the table's text is ALSO carried verbatim in the note's table blocks (blocks[2] and blocks[3]).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "phosphodiesterase-inhibitors", "requiredInKYP": True}
inv20 = [
    dict(SV_BASE, **{
        "visualId": "phosphodiesterase-inhibitors-sv1",
        "sourcePages": {"part": 1, "pdfPages": [267], "bookPages": "245"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The PDE inhibitor table (book 245): five drug families sharing one mechanism (PDE inhibition → ↑ cAMP and/or ↑ cGMP) with their mechanisms of action, clinical uses, and adverse effects",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-ph20/vlm-census.txt — VLM available this session): one introductory sentence, then a four-column table (TYPE OF INHIBITOR / MECHANISM OF ACTION / CLINICAL USES / ADVERSE EFFECTS) with five rows in printed order — [1] Nonspecific PDE inhibitor, Theophylline (↓ cAMP hydrolysis → ↑ cAMP → bronchial smooth muscle relaxation → bronchodilation; COPD/asthma (rarely used); cardiotoxicity (eg, tachycardia, arrhythmia), neurotoxicity (eg, seizures, headache), abdominal pain); [2] PDE-5 inhibitors, Sildenafil, vardenafil, tadalafil, avanafil (drug names in red with the -fil endings highlighted): ↓ hydrolysis of cGMP → ↑ cGMP → ↑ smooth muscle relaxation by enhancing NO activity → pulmonary vasodilation and ↑ blood flow in corpus cavernosum fills the penis ('fills' in red); ED, pulmonary hypertension, BPH (tadalafil only); facial flushing, headache, dyspepsia, hypotension in patients taking nitrates, 'hot and sweaty,' then headache, heartburn, hypotension (red), sildenafil only: cyanopia (blue-tinted vision) via inhibition of PDE-6 (six) in retina; [3] PDE-4 inhibitor, Roflumilast (↑ cAMP in neutrophils, granulocytes, and bronchial epithelium; severe COPD; abdominal pain, weight loss, depression, anxiety, insomnia); [4] PDE-3 inhibitor, Milrinone (cardiomyocytes ↑ cAMP → ↑ Ca2+ influx → ↑ ionotropy and chronotropy (the source's own printed spelling); vascular smooth muscle ↑ cAMP → MLCK inhibition → vasodilation → ↓ preload and afterload; acute decompensated HF with cardiogenic shock (inotrope); tachycardia, ventricular arrhythmias, hypotension); [5] 'Platelet inhibitors', Cilostazolᵃ, Dipyridamoleᵇ (in platelets ↑ cAMP → inhibition of platelet aggregation; intermittent claudication, stroke/TIA prevention with aspirin, cardiac stress testing (dipyridamole only, due to coronary vasodilation), prevention of coronary stent restenosis; nausea, headache, facial flushing, hypotension, abdominal pain) + two superscripted footnotes (a: cilostazol is a PDE-3 inhibitor categorized as a platelet inhibitor due to its indications; b: dipyridamole is a nonspecific PDE inhibitor that also prevents adenosine reuptake by platelets → ↑ extracellular adenosine → ↑ vasodilation). Light-blue shading on the TYPE OF INHIBITOR column; no figures, icons, or margin notes.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "pde-inhibitor-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (PdeInhibitorMap in visuals/pharm-p20.tsx — the two second-messenger lanes (cAMP via adenylyl cyclase, cGMP via NO → guanylyl cyclase) both cut by the shared PDE brake T-bar with the printed intro sentence; the five family cards in PRINTED row order, each with drug chip, lane tag, mechanism arrow, clinical uses, adverse effects, and the two printed footnotes verbatim; and the sildenafil NO/cGMP corpus-cavernosum panel with the NITRATES CONTRAINDICATED warning band and the PDE-6 (six) retina chip); the table's full text is ALSO carried verbatim in the note's table blocks (blocks[2] the five rows, blocks[3] the two footnotes), core.what, and recall[0-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "pde-inhibitor-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph20"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "phosphodiesterase-inhibitors.json").write_text(json.dumps(m20, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "phosphodiesterase-inhibitors.json").write_text(
    json.dumps({"topicId": "phosphodiesterase-inhibitors", "chapterId": "pharmacology", "inventory": inv20,
                "coverageAudit": {"topicId": "phosphodiesterase-inhibitors", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's single visual asset — the color-coded PDE inhibitor table (five rows, four columns, two footnotes; red drug names with -fil endings, red in-cell mnemonic text, light-blue first column) — is accounted for as an ORIGINAL KYP ADAPTATION: nothing is reproduced; the registry visual pde-inhibitor-map (PdeInhibitorMap in visuals/pharm-p20.tsx) rebuilds the table's every label, mechanism arrow, use, adverse effect, and footnote as original KYP vector art (the two second-messenger lanes cut by the shared PDE brake, five family cards in printed row order, and the sildenafil NO/cGMP panel with the nitrates-contraindication warning band), and the table's text is additionally carried verbatim in the note's table blocks. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi glm-4.6v pass (vlm-census.txt) confirmed the printed row order (PDE-4 before PDE-3), the color furniture, and the absence of margin mnemonics; the two spellings the 120dpi read left disputed were adjudicated deterministically (pdftotext -bbox + PyMuPDF raw spans, documented in vlm-census.txt): the print carries 'ionotropy' (source's own spelling) and the hyphenated 'blue-tinted'. FULL single page (no shared split). STAGED under .usmle-pipeline-cache/staging-ph20/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH20 manifest + inventory staged: {OUT}/manifests/phosphodiesterase-inhibitors.json, {OUT}/visual-inventory/phosphodiesterase-inhibitors.json")
print(f"phosphodiesterase-inhibitors: evidence {len(kept)}/{len(E20)} verified")
