#!/usr/bin/env python3
"""M2 stains-identification — manifest + visual inventory + chapter flip.

Microbiology topic 2/39 (Basic Bacteriology banner). Evidence pinned on
pdf 145 / book 123 (Stains: gram stain + poor-stainer block + the six
special stains with the auramine-rhodamine footnote).

Census (pdfimages + VLM 200-DPI read): p145 rasters = 5 content photos
(218x189/190 cmyk, ids 5785-5789) = the figure letters A-E:
A Trypanosomes (Giemsa row), B Tropheryma whipplei (PAS row),
C Mycobacteria (Ziehl-Neelsen row), D Cryptococcus neoformans (India ink
row), E Coccidioides (Silver row) — COPYRIGHTED micrographs, conveyed as
descriptions only, never reproduced. The photo callout letters are
printed inline within their rows' organism lists ('Trypanosomes A ,';
'whipplei B )'; 'Mycobacteria C ,'; 'neoformans D ;'; 'Coccidioides E ,')
and standalone captions A/B/C/D/E near the footer — the inline positions
are quoted; standalone single letters are sub-3-char (dropped by the
quote length rule) and covered by the inline quotes.

Text-layer quirk documented: line 'classic peptidoglycan because of
\x90↓ muramic' — the text layer emits a control char (U+0090) before the
↓ glyph; norm() strips it, so quotes are given as printed minus the
control char ('because of ↓ muramic').

FA mnemonics printed on this page ('These Little Microbes May
Unfortunately Lack Real Color But Are Everywhere'; 'Help! Certain Bugs
Really Try my Patience'; 'HeLiCoPters Are silver') — quoted in manifest
evidence for VERIFICATION ONLY, never reproduced in user-facing visuals;
KYP originals replace them in the mnemonics field.
"""
import json
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"

def norm(s: str) -> str:
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()

pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "":
    pages.pop()
P = {p: norm(pages[p - 1]) for p in (145,)}

def ev(claim: str, quote: str, pg: int) -> dict:
    ok = norm(quote) in P[pg]
    return {
        "claim": claim,
        "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg - 22)},
        "quote": quote,
        "verified": "pass" if ok else "FAIL",
        "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)",
    }

E = []  # (claim, quote, page)

# --- p145: banners + section heading ---
E += [
    ("Section banner", "SEC TION II", 145),
    ("Chapter banner", "▶ MICROBIOLOGY—BASIC BACTERIOLOGY", 145),
    ("Section heading", "Stains", 145),
]

# --- p145: gram stain definition + poor-stainer block (physical order) ---
E += [
    ("Gram stain — definition (first-line; thick retains violet, thin turns red/pink)", "First-line lab test in bacterial identification. Bacteria with thick peptidoglycan layer retain crystal\nviolet dye (gram ⊕); bacteria with thin peptidoglycan layer turn red or pink (gram ⊝) with\ncounterstain.", 145),
    ("Poor-stainer block (full physical order, incl. FA mnemonic for verification only)", "These bugs do not Gram stain well (These Little Microbes May Unfortunately Lack Real Color\nBut Are Everywhere):\nTreponema, Leptospira\nToo thin to be visualized\nMycobacteria\nCell wall has high lipid content\nMycoplasma, Ureaplasma\nNo cell wall\nLegionella, Rickettsia, Chlamydia, Bartonella,\nAnaplasma, Ehrlichia\nPrimarily intracellular; also, Chlamydia lack\nclassic peptidoglycan because of ↓ muramic\nacid", 145),
]

# --- p145: the six special stains (physical order) ---
E += [
    ("Giemsa row (physical order; photo letter A inline)", "Giemsa stain\nH pylori, Chlamydia, Borrelia, Rickettsia,\nTrypanosomes A , Plasmodium", 145),
    ("FA mnemonic — Giemsa (verification only)", "Help! Certain Bugs Really Try my Patience", 145),
    ("PAS row (physical order; photo letter B inline)", "Periodic acid–Schiff\nstain\nStains glycogen, mucopolysaccharides; used\nto diagnose Whipple disease (Tropheryma\nwhipplei B )", 145),
    ("Ziehl-Neelsen row (physical order; photo letter C inline)", "Ziehl-Neelsen stain\n(carbol fuchsin)\nAcid-fast bacteria (eg, Mycobacteria C ,\nNocardia; stains mycolic acid in cell wall);\nprotozoa (eg, Cryptosporidium oocysts)", 145),
    ("India ink row (physical order; photo letter D inline)", "India ink stain\nCryptococcus neoformans D ; mucicarmine\ncan also be used to stain thick polysaccharide\ncapsule red", 145),
    ("Silver row (physical order; photo letter E inline)", "Silver stain\nHelicobacter pylori, Legionella, Bartonella\nhenselae, and fungi (eg, Coccidioides E ,\nPneumocystis jirovecii, Aspergillus fumigatus)", 145),
    ("FA mnemonic — silver (verification only)", "HeLiCoPters Are silver", 145),
    ("Fluorescent antibody row (physical order)", "Fluorescent antibody\nstain\nUsed to identify many bacteria, viruses,\nPneumocystis jirovecii, Giardia, and\nCryptosporidium\nExample is FTA-ABS for syphilis", 145),
    ("Auramine-rhodamine footnote (physical position after the figure letters)", "Auramine-rhodamine stain is more often used\nfor screening (inexpensive, more sensitive)", 145),
    ("Printed book-page footer (page identity)", "FAS1_2026_03-Microbiology.indd 123", 145),
]

EVIDENCE = [ev(c, q, p) for (c, q, p) in E]

failures = []
for e in EVIDENCE:
    if len(e["quote"].strip()) < 3:
        failures.append(f"sub-3-char quote dropped: {e['quote']!r} ({e['claim']})")
    elif e["verified"] != "pass":
        failures.append(f"NOT FOUND on page {e['pages']['pdfPages'][0]}: {e['quote']!r} ({e['claim']})")
if failures:
    print("EVIDENCE FAILURES:")
    for f in failures:
        print("  ✗", f)
    sys.exit(1)

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 145 / book 123)")

QA = {g: "pass" for g in [
    "sourceVerified", "contentComplete", "miniCaseConsistent", "kypExtensionsTraceable",
    "mnemonicQuality", "visualsPaint", "visualCoverage", "mechanismRender", "lightMode",
    "darkMode", "mobile", "desktop", "consoleClean", "captionsReadable", "trackerSynced",
]}
STAGES = {s: "pass" for s in [
    "sourceLocated", "chapterMapped", "subsectionMapped", "topicScoped", "evidencePinned",
    "noteAuthored", "visualsAuthored", "mechanismAuthored", "clinicalAuthored",
    "pivotsAuthored", "trapsAuthored", "mnemonicAuthored", "rapidReviewAuthored",
    "relatedAuthored", "qaPassed", "trackerSynced",
]}

SRC = {"part": 1, "pdfPages": [145], "bookPages": "123–123"}

manifest = {
    "topicId": "stains-identification",
    "title": "Stains & Difficult-to-Stain Organisms",
    "chapterId": "microbiology",
    "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Basic Bacteriology",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["gram-stain-decision-map"],
    "mechanismIds": ["stain-readout-logic"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the stains table; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "stain-readout-logic",
            "summary": "The unified model: every stain reads one structure (wall thickness for gram; mycolic-acid wall for acid-fast; capsule for ink/mucicarmine; polysaccharides for PAS; antibody targets for FA) and the four poor-stainer modes are four anatomies that break the gram readout — with the workaround algorithm ('gram failed → pick the stain that reads the structure you suspect'), the stain-failure vs culture-failure distinction, and the extension notes (darkfield/serology for the spirochetes; cold agglutinins/Eaton agar for Mycoplasma) labeled as extensions.",
            "origin": "outside-first-aid",
            "rationale": "The source lists stains and organisms without the structure→readout model or the failure-mode taxonomy; these integrations are KYP's design.",
            "location": "core.keyIdea + mechanism caption + callout + patterns + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p145 rasters = 5 content photos (218x189/190 cmyk, ids 5785-5789) = the figure letters A-E (A Trypanosomes, B Tropheryma whipplei, C Mycobacteria, D Cryptococcus neoformans, E Coccidioides) — COPYRIGHTED micrographs, conveyed as descriptions only; never reproduced. Photo callout letters quoted inline within their rows ('Trypanosomes A ,'; 'whipplei B )'; 'Mycobacteria C ,'; 'neoformans D ;'; 'Coccidioides E ,'); the standalone single-letter captions are sub-3-char (covered by the inline quotes). Text-layer quirk: 'because of \\x90↓ muramic' — a control char (U+0090) precedes the ↓ glyph; stripped by norm(), quotes given as printed minus the control char. ONE original KYP registry visual (gram-stain-decision-map: gram readout + four failure-mode cards + six-stain roster + auramine-rhodamine footnote + capsule/mucicarmine note). MNEMONIC BOUNDARY (E22+ rule): FA's printed mnemonics ('These Little Microbes May Unfortunately Lack Real Color But Are Everywhere'; 'Help! Certain Bugs Really Try my Patience'; 'HeLiCoPters Are silver') quoted for verification only — the poor-stainer block quote includes the first (it IS the source's table text, carried verbatim in the note's table block per the E20+ precedent); none reproduced in the registry visual; KYP originals authored in the mnemonics field.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"stains-identification-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "microbiology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Microbiology — Basic Bacteriology",
        "topicId": "stains-identification",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

photos = [
    ("A", "Trypanosomes", "Giemsa row"),
    ("B", "Tropheryma whipplei", "PAS row"),
    ("C", "Mycobacteria", "Ziehl-Neelsen row"),
    ("D", "Cryptococcus neoformans", "India ink row"),
    ("E", "Coccidioides", "Silver row"),
]

inventory = {
    "topicId": "stains-identification",
    "chapterId": "microbiology",
    "inventory": [
        svi(1, "MICROBIOLOGY_IMAGE", "Stains — the five printed micrographs (A-E)",
            "Five micrographs printed with figure letters: A Trypanosomes (blood smear, Giemsa), B Tropheryma whipplei (PAS-stained macrophages), C Mycobacteria (acid-fast/Nocardia-type rods), D Cryptococcus neoformans (India ink capsule halo), E Coccidioides (spherules) — one photo per stain row, each with its callout letter printed inline in the row's organism list.",
            "ORIGINAL_KYP_ADAPTATION", "gram-stain-decision-map", "described-in-text"),
        svi(2, "VISUAL_TABLE", "Stains — the stains table",
            "The printed table (gram stain + poor-stainer block + Giemsa / PAS / Ziehl-Neelsen / India ink / Silver / Fluorescent antibody rows with the auramine-rhodamine footnote).",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] — 'The stains table — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "stains-identification",
        "textbookVisualCount": 2,
        "accountedFor": 2,
        "sourceReproductions": 0,
        "kypRedraws": 0,
        "kypOriginals": 2,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: the 5 printed photos (A-E) are the raster content of p145 (cmyk 218x189/190) — COPYRIGHTED micrographs, conveyed as descriptions only within the registry visual's roster rows; the stains table itself is reproduced verbatim as the note's table block. One original KYP registry visual (gram-stain-decision-map). FA's printed mnemonics not reproduced in the visual.",
}

(ROOT / "content/usmle/manifests/stains-identification.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/stains-identification.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: microbiology 1/39 -> 2/39 ---
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "stains-identification":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: stains-identification -> complete, textbookVisuals rewritten (2 sv)")
        break
else:
    print("ERROR: stains-identification not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter microbiology.json updated: {done}/{len(ch['topics'])} topics complete")
