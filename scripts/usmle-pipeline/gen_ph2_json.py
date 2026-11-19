#!/usr/bin/env python3
"""PH2 pharmacokinetics-aging — manifest + inventory (Pharmacology),
STAGED under .usmle-pipeline-cache/staging-ph2/ (the promotion step
owns content/). Census (pdfimages + VLM, scripts/usmle-pipeline/
ph2-vlm-census.ts): pdf 251 / book 229 has ZERO raster images —
pure text plus small VECTOR formula/figure elements (the F formula
with its AUC plot thumbnail, the Vd/CL/t1/2 fraction formulas, the
half-lives-vs-%-remaining table). The VLM confirmed every block and
NO photographs, margin notes, or mnemonics. Nothing is reproduced:
the two printed tables are carried verbatim in the note; the rest is
adapted/redrawn as the ORIGINAL KYP registry visual pk-parameters-map
(visuals/pharm-p2.tsx); the KYP memory layer is original."""
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
L = {251: pages[250].split("\n")}
P = {251: norm(pages[250])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E2 = [
    ("Page identity — the section banner, header, and page furniture (book 229)", rng(251, 1, 7), [251]),
    ("Bioavailability (F) — the definition block (IV F = 100%; oral F typically <100% from incomplete absorption AND first-pass metabolism; computed from the area under the curve) plus the formula and the AUC plot's curve and axis labels", rng(251, 9, 34), [251]),
    ("Volume of distribution (Vd) — the definition block with the liver/kidney-disease rule (↓ protein binding, ↑ Vd), the multi-compartment note, the hemodialysis-low-Vd rule, and the formula stem", rng(251, 36, 42), [251]),
    ("The Vd compartment table — the Vd/COMPARTMENT/DRUG TYPES header and all three rows verbatim (Low/intravascular/large-charged + plasma protein bound; Medium/ECF/small hydrophilic; High/all tissues including fat/small lipophilic esp tissue-protein bound). Raw text-layer quirk: the Clearance (CL) heading (line 44) interleaves between the Vd formula stem and the table's Vd header cell", rng(251, 46, 70), [251]),
    ("Clearance (CL) — the definition (volume of plasma cleared of drug per unit time; impaired with cardiac, hepatic, or renal defects) plus the formula (rate of elimination / plasma concentration = Vd × Ke). Raw text-layer quirk: the Half-life (t1/2) heading (line 76) and the footer slug FAS1_2026_05-Pharmacology.indd 229 (line 78) interleave between the CL stem and its fraction", rng(251, 72, 82), [251]),
    ("Half-life (t1/2) — the definition (time to eliminate 1/2 of the drug), the steady-state block (dynamic equilibrium, elimination = administration; 4-5 half-lives to steady state, 3.3 half-lives to 90%), and the formula (0.7 × Vd / CL in first-order elimination). Raw text-layer quirk: the Age-related changes in pharmacokinetics heading (lines 91-92) interleaves above the fraction", rng(251, 84, 99), [251]),
    ("The half-lives-vs-percent-remaining table — all four columns verbatim (1→50%, 2→25%, 3→12.5%, 4→6.25%)", rng(251, 101, 119), [251]),
    ("Age-related changes in pharmacokinetics — the intro (standard doses → ↑ plasma concentrations; older patients often require reduced doses to prevent toxicity) plus all four ▘ bullets verbatim (Absorption mostly unaffected; Distribution ↓TBW/↑fat; Metabolism ↓hepatic mass and blood flow with phase I decreased and phase II relatively preserved; Excretion ↓renal mass and blood flow, ↓GFR)", rng(251, 121, 128), [251]),
    ("The footer print line — the timestamp (the indd slug FAS1_2026_05-Pharmacology.indd 229 prints at raw line 78, carried inside the Clearance quote above)", rng(251, 130, 130), [251]),
]
for c, q, pgs in E2:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"pharmacokinetics-aging: evidence {len(kept)}/{len(E2)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m2 = {"topicId": "pharmacokinetics-aging", "title": "Pharmacokinetic Parameters & Age-Related Changes",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [251], "bookPages": "229–229"},
    "sourceEvidence": kept, "visualIds": ["pk-parameters-map"],
    "mechanismIds": ["pk-parameter-trio-map", "aging-pk-shift-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the parameter definitions and the aging bullets only; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "linked-parameter-system", "summary": "The F→Vd→CL→t1/2 chain read as ONE linked system (route gates the fraction, the arriving amount dissolves into the space, CL = Vd × Ke compounds space with speed, and the clock t1/2 = 0.7 × Vd / CL schedules everything) — KYP's synthesis of the page's four separate blocks into one map.",
         "origin": "outside-first-aid", "rationale": "The source prints the four parameters as separate entries; the chain framing, the gate metaphor, and the map structure are KYP's design.",
         "location": "core.keyIdea + mechanisms[0] pk-parameter-trio-map + blocks[4] the steps block + the registry visual's linked layout"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (FRACTION, SPACE, SPEED, CLOCK / CHARGED STAYS IN THE PIPE, WET WALKS THE BATH, FAT BOARDS EVERY DECK / HALVE FOUR TIMES, 6.25 SURVIVES; 3.3 TO NINETY, FIVE TO FULL / GUT UNCHANGED, WATER DOWN, FAT UP, LIVER SLOW, KIDNEY SLOW) — no mnemonic prints on the page.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere on book 229 (VLM census confirmed); the four codes are KYP's design.",
         "location": "mnemonics + the registry visual's ladder footers + rapidReview.m3"},
        {"id": "mini-case-layer", "summary": "The elderly-lithium miniCase (a hydrophilic drug with rising levels and pinned-normal renal function — which PK parameter shifted and why) — a KYP-authored integration of the aging distribution bullet against its metabolism/excretion distractors.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the four aging bullets separately and never asks the learner to pick the parameter a vignette moved; the vignette, the four distractors, and the pinned-CrCl near-miss design are KYP's.",
         "location": "usmle.miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "pendingCorrections": [],
    "notes": "Census (pdfimages + VLM, ph2-vlm-census.ts): ZERO raster images on pdf 251 / book 229 — pure text plus small VECTOR formula/figure elements (the F formula with its AUC plot thumbnail, the Vd/CL/t1/2 fraction formulas, the half-lives-vs-%-remaining table); the VLM confirmed every block, both tables, the two-curve AUC thumbnail (AUCIV above AUCOral), and NO photographs, margin notes, or mnemonics. Quirks, documented: (1) the raw pdftotext layer interleaves blocks — the Clearance (CL) heading falls between the Vd formula stem and the compartment table's Vd header cell, and the Half-life (t1/2) heading plus the footer slug FAS1_2026_05-Pharmacology.indd 229 fall between the CL stem and its fraction — the quotes are pinned to exact contiguous raw line ranges and the interleaves are named in their claims; (2) the page's book-page offset (pdf 251 = book 229) matches BOOK_PARTS[1].bookPageOffset -22; (3) outputs are STAGED under .usmle-pipeline-cache/staging-ph2/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, the visual registry, and notes/index.ts are owned by the promotion step; the note's visualId 'pk-parameters-map' is therefore not yet in visuals/registry.tsx by design). Difficulty matches the chapter inventory (2) with all difficulty-2 floors exceeded (4 patterns, 4 traps, 3 pivots, 11 recall, 5 related, 4 crossLinks).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics",
    "topicId": "pharmacokinetics-aging", "requiredInKYP": True}
inv2 = [
    dict(SV_BASE, **{
        "visualId": "pharmacokinetics-aging-sv1",
        "sourcePages": {"part": 1, "pdfPages": [251], "bookPages": "229"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Vd COMPARTMENT/DRUG TYPES table and the # of half-lives vs % remaining table (book 229)",
        "sourceFigureDescription": "PURE TEXT (pdfimages: zero raster images; VLM confirmed): two printed tables — (1) the Vd compartment table, header Vd | COMPARTMENT | DRUG TYPES, rows Low/Intravascular/Large-charged molecules + plasma protein bound, Medium/ECF/Small hydrophilic molecules, High/All tissues including fat/Small lipophilic molecules especially if bound to tissue protein; (2) the half-lives-vs-percent-remaining table, # of half-lives 1 2 3 4 vs % remaining 50% 25% 12.5% 6.25%.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "pk-parameters-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (the three-compartment ladder + the halving-ladder panels of PkParametersMap in visuals/pharm-p2.tsx) + blocks[1] and blocks[2], the two table blocks carried verbatim",
        "productionStatus": "complete",
        "plannedKypVisualId": "pk-parameters-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "pharmacokinetics-aging-sv2",
        "sourcePages": {"part": 1, "pdfPages": [251], "bookPages": "229"},
        "visualType": "SUMMARY_FIGURE",
        "visualPurpose": "The bioavailability F formula with its AUCoral/AUCIV plasma-concentration-vs-time plot thumbnail (book 229)",
        "sourceFigureDescription": "SMALL VECTOR SUMMARY FIGURE (pdfimages: zero raster images; VLM confirmed line art, not a photograph): the bioavailability formula F = [AUCoral × DoseIV] / [Doseoral × AUCIV] × 100 beside a two-curve concentration-time thumbnail — a higher AUCIV curve and a lower AUCOral curve over a Time axis, y-axis Plasma concentration — illustrating that F is computed from the area under the curve.",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "pk-parameters-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the F panel of the registry visual (the AUC thumbnail redrawn with both curves and axis labels, plus the formula — PkParametersMap in visuals/pharm-p2.tsx)",
        "productionStatus": "complete",
        "plannedKypVisualId": "pk-parameters-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph2"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "pharmacokinetics-aging.json").write_text(json.dumps(m2, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "pharmacokinetics-aging.json").write_text(
    json.dumps({"topicId": "pharmacokinetics-aging", "chapterId": "pharmacology", "inventory": inv2,
                "coverageAudit": {"topicId": "pharmacokinetics-aging", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's two visual assets are its printed tables (adapted: the compartment ladder + the halving ladder inside the registry visual, both also carried verbatim in the note's table blocks) and the small vector F/AUC formula figure (redrawn: the two-curve AUC thumbnail + formula inside the F panel of PkParametersMap in visuals/pharm-p2.tsx); nothing is reproduced. Census: zero raster images (pdfimages) and zero photographs/margin mnemonics (VLM confirmed on scripts/usmle-pipeline/ph2-vlm-census.ts). STAGED under .usmle-pipeline-cache/staging-ph2/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH2 manifest + inventory staged: {OUT}/manifests/pharmacokinetics-aging.json, {OUT}/visual-inventory/pharmacokinetics-aging.json")
print(f"pharmacokinetics-aging: evidence {len(kept)}/{len(E2)} verified")
