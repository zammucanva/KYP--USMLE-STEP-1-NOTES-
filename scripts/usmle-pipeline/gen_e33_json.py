#!/usr/bin/env python3
"""E33 cd-markers — manifest + visual inventory + chapter flip.

Immunology topic 16/24 (Immune Responses banner). Evidence pinned on
pdf 130 / book 108 (Cell surface proteins roster ONLY — the Passive vs
active immunity table that begins lower on the same printed page is owned
by E34 active-passive-immunity, pdf 130-131).

Census: pdfimages on p130 returns ZERO images — pure vector/table page.

Mnemonic boundary (E22+ rule): the page prints FA's mnemonic 'Must be 21
to drink at a Barr' (CD21 = EBV receptor) — quoted in manifest evidence
for VERIFICATION ONLY, never reproduced user-facing; KYP originals
replace it.
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
P = {p: norm(pages[p - 1]) for p in (130,)}

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

# --- p130: cell surface proteins roster (verbatim) ---
E += [
    ("Section heading", "Cell surface proteins", 130),
    ("T cells — heading", "T cells", 130),
    ("T cells — markers", "TCR (binds antigen-MHC complex), CD3\n(associated with TCR for signal transduction),\nCD28 (binds B7 on APC)", 130),
    ("Helper T cells — heading", "Helper T cells", 130),
    ("Helper T cells — markers", "CD4, CD40L, CXCR4/CCR5 (coreceptors for\nHIV)", 130),
    ("Cytotoxic T cells — heading + marker", "Cytotoxic T cells\nCD8", 130),
    ("Regulatory T cells — heading + markers", "Regulatory T cells\nCD4, CD25", 130),
    ("B cells — heading", "B cells", 130),
    ("B cells — markers", "Ig (binds antigen), CD19, CD20, CD21\n(receptor for Epstein-Barr virus), CD40,\nMHC II, B7 (CD80/86)", 130),
    ("NK cells — heading", "NK cells", 130),
    ("NK cells — markers", "CD16 (binds Fc of IgG), CD56 (suggestive\nmarker for NK cells)", 130),
    ("Macrophages — heading", "Macrophages", 130),
    ("Macrophages — markers", "CD14 (receptor for PAMPs [eg, LPS]), CD40,\nCCR5, MHC II, B7, Fc and C3b receptors\n(enhanced phagocytosis)", 130),
    ("Hematopoietic stem cells — heading + marker", "Hematopoietic\nstem cells\nCD34", 130),
    ("FA mnemonic — CD21/EBV (verification only)", "Must be 21 to drink at a Barr", 130),
]

# --- p130: E34 boundary marker (the passive/active table begins on this page) ---
E += [
    ("E34 boundary marker (passive/active table header on same page — owned by E34)", "Passive vs active immunity", 130),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 130 / book 108)")

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

SRC130 = {"part": 1, "pdfPages": [130], "bookPages": "108"}

manifest = {
    "topicId": "cd-markers",
    "title": "Cell Surface Proteins: The CD Marker Map",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Immune Responses",
    "part": 1,
    "sourcePages": SRC130,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["cd-marker-map"],
    "mechanismIds": ["marker-machinery-mapping"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the marker roster; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "marker-as-machinery-and-target-model",
            "summary": "Reading each CD code as the chapter's machinery with a serial number (CD3 = TCR ignition, CD28 = signal-2 port, CD40L-CD40 = handshake, CD16 = ADCC port, CD14 = LPS sensor) and as a drug/assay handle (anti-CD3, rituximab anti-CD20, basiliximab anti-CD25, alemtuzumab anti-CD52; flow-cytometry panels; HIV CXCR4/CCR5 entry and CCR5-Δ32/maraviroc).",
            "origin": "outside-first-aid",
            "rationale": "The source lists markers without the machinery linkage, the drug map, the flow-reading skill, or HIV coreceptor pharmacology; these integrations are KYP's design, labeled as extension (drug names, Δ32, maraviroc are beyond this printed page).",
            "location": "core.why + mechanism caption + callout + patterns + mnemonics + miniCase distractors",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: pdfimages on p130 returns ZERO images — pure vector/table page; one original KYP registry visual (cd-marker-map) renders the eight-row roster with annotated marker chips plus the drug/flow bridge strip. MNEMONIC BOUNDARY (E22+ rule): FA's printed 'Must be 21 to drink at a Barr' (CD21 = EBV receptor) is quoted in manifest evidence for VERIFICATION ONLY — never user-facing; KYP originals replace it. Boundary: the 'Passive vs active immunity' table begins on the same printed page — it is owned by E34 active-passive-immunity (pdf 130-131) and is not claimed here.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"cd-markers-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC130,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Immune Responses",
        "topicId": "cd-markers",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "cd-markers",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "VISUAL_TABLE", "Cell surface proteins — the eight-cell marker roster",
            "A structured marker table by cell: T cells (TCR, CD3, CD28 with functions); Helper T cells (CD4, CD40L, CXCR4/CCR5 as HIV coreceptors); Cytotoxic T cells (CD8); Regulatory T cells (CD4, CD25); B cells (Ig, CD19, CD20, CD21 EBV receptor, CD40, MHC II, B7); NK cells (CD16 Fc-of-IgG, CD56); Macrophages (CD14 PAMP/LPS receptor, CD40, CCR5, MHC II, B7, Fc and C3b receptors); Hematopoietic stem cells (CD34).",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] — 'Cell surface proteins — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "cd-markers",
        "textbookVisualCount": 1,
        "accountedFor": 1,
        "sourceReproductions": 0,
        "kypRedraws": 0,
        "kypOriginals": 1,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: pure vector page (zero rasters). The eight-cell marker roster is reproduced verbatim as the note's table block; the registry visual (cd-marker-map) is an ADDITIONAL original KYP teaching map with function-annotated chips and the drug/flow bridge strip. FA's printed CD21 mnemonic is not reproduced user-facing. The passive/active immunity table on the same page belongs to E34.",
}

(ROOT / "content/usmle/manifests/cd-markers.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/cd-markers.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 15/24 -> 16/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "cd-markers":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: cd-markers -> complete, textbookVisuals rewritten (1 sv)")
        break
else:
    print("ERROR: cd-markers not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
