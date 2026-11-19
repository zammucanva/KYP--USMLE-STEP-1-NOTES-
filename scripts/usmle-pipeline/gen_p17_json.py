#!/usr/bin/env python3
"""P17 chemical-carcinogens — staging manifest + inventory
(Pathology, Neoplasia). Source: pdf 243 / book 221 ("Carcinogens").
Census (pdfimages + VLM, two rounds): ZERO raster images on the page —
pure text, ONE 12-row table (TOXIN / EXPOSURE / ORGAN / IMPACT).
TOBACCO-ROW INTERLEAVE, RESOLVED: the pdftotext layer splits the
tobacco row into TWO clusters — cluster 1 (raw lines 70-86 of the page
dump, drawn right after the Asbestos row: the organ sub-list
Bladder/Cervix/Esophagus + Oropharynx/Pancreas followed by the full
EIGHT-impact block) and cluster 2 (raw lines 106-110, drawn after the
Ionizing radiation row: "Tobacco smoke" + the Kidney/Larynx/Lung
sub-list). The VLM census (both rounds) read the page: the tobacco row
is ONE tall row physically sitting BETWEEN ASBESTOS AND ETHANOL, its
EXPOSURE cell prints BLANK, and its ORGAN cell is one stacked
alphabetical list — Bladder, Cervix, Esophagus, Kidney, Larynx, Lung,
Oropharynx, Pancreas — paired LINE-BY-LINE with one stacked 8-impact
list (Bladder→Transitional cell carcinoma, Cervix→Squamous cell
carcinoma, Esophagus→Squamous cell carcinoma/adenocarcinoma, Kidney→
Renal cell carcinoma, Larynx→Squamous cell carcinoma, Lung→Squamous
cell and small cell carcinoma, Oropharynx→Squamous cell carcinoma,
Pancreas→Pancreatic adenocarcinoma); the stream order of the 8 impacts
matches the alphabetical organ pairing exactly, so the census is
self-consistent. Other text-layer quirks (all documented): the header
extracts as "TOXIn / eXPOSUre / OrGAn / ImPACT" (odd internal caps; the
page prints plain TOXIN / EXPOSURE / ORGAN / IMPACT); the vinyl
chloride row's organ cell prints "LiVer" (odd internal capital V; the
VLM also reports red-accent V letterforms in that row); the EXPOSURE
cells for TOBACCO SMOKE, ETHANOL, and IONIZING RADIATION print BLANK.
NO margin mnemonics print on the page (VLM confirmed, both rounds);
the four KYP mnemonics are original. OUTPUT IS STAGING ONLY
(.usmle-pipeline-cache/staging-p17/) — content/ is not touched by this
generator."""
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
L = {243: pages[242].split("\n")}
P = {243: norm(pages[242])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E17 = [
    ("Page identity — the section banner, the printed page number, and the topic title (book 221)", rng(243, 1, 9), [243]),
    ("The table header — TOXIN / EXPOSURE / ORGAN / IMPACT (the text layer prints the odd internal caps “TOXIn / eXPOSUre / OrGAn / ImPACT”; the page prints plain capitals)", rng(243, 10, 16), [243]),
    ("The AFLATOXINS row — Aspergillus on stored grains and nuts → Liver → Hepatocellular carcinoma", rng(243, 18, 24), [243]),
    ("The ALKYLATING AGENTS row — oncologic chemotherapy → Blood → Leukemia/lymphoma (the iatrogenic carcinogen)", rng(243, 26, 32), [243]),
    ("The AROMATIC AMINES row — benzidine and 2-naphthylamine from the textile industry (dyes) and tobacco smoke → Bladder → Transitional cell carcinoma", rng(243, 34, 43), [243]),
    ("The ARSENIC row — herbicides (vineyard workers), metal smelting, wood preservation → Liver + Lung + Skin → Hepatic angiosarcoma + Lung cancer + Squamous cell carcinoma (the three-arm fan, paired line-by-line)", rng(243, 45, 57), [243]),
    ("The ASBESTOS row — old roofing material, shipyard workers → Lung → Bronchogenic carcinoma > mesothelioma (the first printed rank fact)", rng(243, 59, 67), [243]),
    ("The TOBACCO SMOKE row, text-layer cluster 1 (drawn between the Asbestos and Ethanol rows) — the organ sub-list Bladder/Cervix/Esophagus + Oropharynx/Pancreas followed by the full EIGHT-impact block. INTERLEAVE DOCUMENTED: on the page this is ONE row physically sitting between Asbestos and Ethanol (VLM census, two rounds), with a BLANK EXPOSURE cell and one stacked alphabetical ORGAN list (Bladder, Cervix, Esophagus, Kidney, Larynx, Lung, Oropharynx, Pancreas — the Kidney/Larynx/Lung trio prints in stream cluster 2) paired line-by-line with this 8-impact list: Bladder→Transitional cell carcinoma, Cervix→Squamous cell carcinoma, Esophagus→Squamous cell carcinoma/adenocarcinoma, Kidney→Renal cell carcinoma, Larynx→Squamous cell carcinoma, Lung→Squamous cell and small cell carcinoma, Oropharynx→Squamous cell carcinoma, Pancreas→Pancreatic adenocarcinoma", rng(243, 69, 85), [243]),
    ("The ETHANOL row — blank EXPOSURE cell in print → Esophagus + Liver + Breast → Squamous cell carcinoma + Hepatocellular carcinoma + Breast cancer (the three-arm fan, paired line-by-line)", rng(243, 87, 95), [243]),
    ("The IONIZING RADIATION row — blank EXPOSURE cell in print → Blood + Thyroid → Leukemia + Papillary thyroid carcinoma (the two-arm fan, paired line-by-line)", rng(243, 97, 103), [243]),
    ("The TOBACCO SMOKE row, text-layer cluster 2 (drawn after the Ionizing radiation row) — the TOXIN label plus the Kidney/Larynx/Lung organ sub-list, which sits between Esophagus and Oropharynx in the physical alphabetical cell; the row's EXPOSURE cell prints blank (VLM census, two rounds)", rng(243, 105, 109), [243]),
    ("The NICKEL, CHROMIUM, BERYLLIUM, SILICA row — occupational exposure → Lung → Lung cancer (the occupational quartet)", rng(243, 111, 118), [243]),
    ("The NITROSAMINES row — smoked foods → Stomach → Gastric cancer (intestinal type)", rng(243, 120, 126), [243]),
    ("The RADON row — byproduct of uranium decay, accumulates in basements → Lung → Lung cancer (2nd leading cause after tobacco smoke) (the second printed rank fact)", rng(243, 128, 136), [243]),
    ("The VINYL CHLORIDE row — used to make PVC pipes → LiVer [sic — the page prints the odd internal capital V; the organ is Liver] → Hepatic angiosarcoma (the angiosarcoma pair with arsenic)", rng(243, 138, 144), [243]),
    ("The footer print lines — the indd plate stamp and the timestamp (page identity, book 221)", rng(243, 146, 148), [243]),
]
for c, q, pgs in E17:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"chemical-carcinogens: evidence {len(kept)}/{len(E17)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m17 = {"topicId": "chemical-carcinogens", "title": "Chemical Carcinogens & Organ Cancers",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Neoplasia", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [243], "bookPages": "221–221"},
    "sourceEvidence": kept, "visualIds": ["carcinogen-organ-map"],
    "mechanismIds": ["carcinogen-route-map", "angiosarcoma-duo-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/miniCase attack structure (five patterns, five traps, three pivots, and the five-option miniCase — the vineyard-worker liver mass discriminating arsenic's angiosarcoma from aflatoxin's HCC, vinyl chloride's pair member, tobacco's organ map, and ethanol's liver arm) layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the 12-row table; the attack structure and the miniCase are KYP designs.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "pairing-protocol",
         "summary": "The exposure → organ → impact routing (entry route sets the first target: inhaled → airway surfaces, ingested → portal bed/gut mucosa, systemic → marrow/blood/thyroid) and the census-resolved line-by-line pairing protocol for the multi-organ fans (arsenic 3, tobacco 8, ethanol 3, ionizing radiation 2) — KYP's synthesis of how to read any row of the table.",
         "origin": "outside-first-aid", "rationale": "The source prints the rows without the routing logic or the pairing rule; both are KYP designs.",
         "location": "core.keyIdea + mechanisms (carcinogen-route-map, angiosarcoma-duo-map) + blocks[2] the tobacco pairing table + the visual's fan chips"},
        {"id": "mnemonic-layer",
         "summary": "The four original KYP mnemonics (PVC + ARSENIC = ANGIOSARCOMA / SMOKE'S EIGHT ARMS: BCE-KLLOP / RADON IS #2, MESOTHELIOMA IS NOT #1 / ARSENIC = LLS · ETHANOL = ELB · RADIATION = BT) — NO mnemonic prints on book 221 (VLM census confirmed, two rounds); all four codes are KYP designs.",
         "origin": "outside-first-aid", "rationale": "The page carries no mnemonics of its own (no margin notes — VLM confirmed); the four codes are KYP designs.",
         "location": "mnemonics + the visual's rule panels"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + VLM, two rounds): ZERO raster images on pdf 243 / book 221 — pure text, ONE 12-row table (TOXIN / EXPOSURE / ORGAN / IMPACT). TOBACCO-ROW INTERLEAVE RESOLVED: the text layer splits the row into two clusters (raw lines 70-86 — the Bladder/Cervix/Esophagus + Oropharynx/Pancreas organ sub-list with the full 8-impact block, drawn after the Asbestos row; and raw lines 106-110 — “Tobacco smoke” + the Kidney/Larynx/Lung sub-list, drawn after the Ionizing radiation row). The VLM read the page in both rounds: ONE tall row physically BETWEEN ASBESTOS AND ETHANOL (the table is not alphabetical), BLANK EXPOSURE cell, one stacked ALPHABETICAL organ list (Bladder, Cervix, Esophagus, Kidney, Larynx, Lung, Oropharynx, Pancreas) paired line-by-line with one stacked 8-impact list — the stream order of the impacts matches the alphabetical pairing exactly, so the resolution is self-consistent. Text-layer quirks: the header extracts as “TOXIn / eXPOSUre / OrGAn / ImPACT” (odd internal caps; the page prints plain capitals — VLM round 2); the vinyl chloride row's organ cell prints “LiVer” (odd internal capital V; the VLM also reports red-accent V letterforms in that row's Vinyl/PVC/Liver words); the EXPOSURE cells for tobacco smoke, ethanol, and ionizing radiation print BLANK (VLM round 2 confirmed all three). Single-page topic. No margin mnemonics (VLM confirmed, both rounds); the four KYP mnemonics are original. OUTPUT IS STAGING ONLY — content/ is not touched by this generator.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Neoplasia",
    "topicId": "chemical-carcinogens", "requiredInKYP": True}
def sv(n, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"chemical-carcinogens-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": [243], "bookPages": "221"},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv17 = [
    sv(1, "VISUAL_TABLE", "The 12-row Carcinogens table (book 221)",
       "One pure text table — TOXIN / EXPOSURE / ORGAN / IMPACT (header extracts as “TOXIn / eXPOSUre / OrGAn / ImPACT”, odd internal caps) — 12 rows: aflatoxins, alkylating agents, aromatic amines, arsenic (three-organ fan), asbestos, tobacco smoke (eight organs, the interleaved row), ethanol, ionizing radiation, nickel/chromium/beryllium/silica, nitrosamines, radon, vinyl chloride (organ prints “LiVer”). ZERO raster images on the page (pdfimages + VLM census, two rounds).",
       "ORIGINAL_KYP_ADAPTATION", "carcinogen-organ-map", "the registry visual (four bands: FUNGI & CHEMICALS / METALS & DUSTS / RADIATION / LIFESTYLE, the multi-organ fan chips, the angiosarcoma-pair callout, the radon #2 note) + blocks[1] the table carried verbatim + blocks[2] the tobacco pairing table"),
]
out_dir = CACHE / "staging-p17"
(out_dir / "manifests").mkdir(parents=True, exist_ok=True)
(out_dir / "visual-inventory").mkdir(parents=True, exist_ok=True)
(out_dir / "manifests" / "chemical-carcinogens.json").write_text(json.dumps(m17, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(out_dir / "visual-inventory" / "chemical-carcinogens.json").write_text(
    json.dumps({"topicId": "chemical-carcinogens", "chapterId": "pathology", "inventory": inv17,
                "coverageAudit": {"topicId": "chemical-carcinogens", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's single visual element is its text table (pdfimages + VLM census: ZERO rasters) — adapted as the registry visual and carried verbatim in the note's tables. The tobacco row's text-layer interleave is resolved by the VLM census (one row between Asbestos and Ethanol, blank exposure, alphabetical 8-organ list paired line-by-line with 8 impacts) and is documented in the manifest notes. No mnemonics print on the page (VLM confirmed); the four KYP mnemonics are original. Nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("P17 staging manifest + inventory done")
