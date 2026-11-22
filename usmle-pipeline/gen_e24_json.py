#!/usr/bin/env python3
"""E24 t-cell-development — manifest + visual inventory + chapter flip.

Immunology topic 7/24 ("Cellular Components" banner). Evidence pinned on
pdf 122 / book 100 (Differentiation of T cells diagram + Positive selection +
Negative selection ONLY — Macrophage-lymphocyte interaction / Cytotoxic T
cells / Regulatory T cells on the same printed page are owned by E25
cytotoxic-regulatory-t-cells).

Census note (pdfimages + 200-DPI VLM reads, this batch): pdf 122 carries
4 raster objects — (0) 1x1 rgb pixel artifact, (1) 541x255 separation-space
image = the thymus anatomical illustration at the top of the Thymus column
(VLM: stylized lobed thymus silhouette), (2) 303x303 indexed circle = a cell
icon, (3) 144x144 smask = its transparency mask. The Differentiation diagram
is otherwise vector/text (columns Bone marrow / Thymus / Lymph node /
Peripheral blood, selection labels, +/- cytokine regulators) plus the
Secretes/Function table (4 rows). The thymus raster is COPYRIGHTED artwork
conveyed in KYP as an ORIGINAL schematic (never reproduced).

Printed-glyph note: the Th2 function cell prints 'Activate eosinophils,
\u2191IgE' — the \u2191 (symbol-font instance) is DROPPED by pdftotext, so
the machine-verifiable text-layer quote is the glyph-free form; the printed
form (with \u2191) is documented here and shown in the note's user-facing
table and visual (VLM-verified at 400% zoom).
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
P = {p: norm(pages[p - 1]) for p in (122,)}

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

# --- p122: diagram heading + column labels ---
E += [
    ("Section heading", "Differentiation of T cells", 122),
    ("Thymus zone label — cortex", "Cortex", 122),
    ("Thymus zone label — medulla", "Medulla", 122),
    ("Origin column label", "Bone marrow", 122),
    ("Origin cell label", "T-cell\nprecursor", 122),
    ("Transit column label", "Peripheral blood", 122),
    ("Transit column label 2", "Lymph node", 122),
    ("Thymus column label", "Thymus", 122),
]

# --- p122: diagram internal labels (cell stages, effectors) ---
E += [
    ("Double-positive stage marker", "CD4+\nCD8+", 122),
    ("Cytotoxic lineage marker", "CD8+", 122),
    ("Cytotoxic label", "Cytotoxic", 122),
    ("Helper label", "Helper", 122),
]

# --- p122: +/- differentiation regulators (diagram edge labels) ---
E += [
    ("Th1 promoters (+)", "IFN-γ, IL-12", 122),
    ("Th1 inhibitors (−)", "IL-4, IL-10", 122),
    ("Th2 promoters (+)", "IL-2, IL-4", 122),
    ("Th2 inhibitor (−)", "IFN-γ", 122),
    ("Th17 promoters (+)", "TGF-β, IL-1, IL-6", 122),
    ("Th17 inhibitors (−)", "IFN-γ, IL-4", 122),
    ("Treg promoters (+)", "TGF-β, IL-2", 122),
    ("Treg inhibitor (−)", "IL-6", 122),
]

# --- p122: Secretes/Function table (verbatim) ---
E += [
    ("Table headers", "Secretes\nFunction", 122),
    ("Th1 secretes", "IFN-γ, IL-2", 122),
    ("Th1 function", "Activate macrophages\nand cytotoxic T cells", 122),
    ("Th2 secretes", "IL-4, IL-5, IL-6,\nIL-10, IL-13", 122),
    ("Th2 function (printed with ↑IgE — glyph dropped in text layer)", "Activate eosinophils,\nIgE", 122),
    ("Th17 secretes", "IL-17, IL-21,\nIL-22", 122),
    ("Th17 function", "Induce neutrophilic\ninfiltration", 122),
    ("Treg secretes", "TGF-β, IL-10,\nIL-35", 122),
    ("Treg function", "Prevent autoimmunity\n(maintain tolerance)", 122),
]

# --- p122: Positive selection (verbatim prose) ---
E += [
    ("Positive selection — heading + location", "Positive selection\nThymic cortex.", 122),
    ("Positive selection — keep criterion", "Keeps T cells that recognize self-peptides to allow for cooperation in immune\nresponses.", 122),
    ("Positive selection — survival signal", "Double positive thymocytes expressing TCRs that recognize self-peptide MHC\ncomplexes receive a survival signal.", 122),
]

# --- p122: Negative selection (verbatim prose) ---
E += [
    ("Negative selection — heading + location", "Negative selection\nThymic medulla.", 122),
    ("Negative selection — removal criterion", "Removes T cells that bind too strongly to self-peptides.", 122),
    ("Negative selection — apoptosis or Treg fate", "Thymocytes expressing\nTCRs with high affinity for self antigens undergo apoptosis or become regulatory T cells.", 122),
    ("AIRE drives negative selection + syndrome", "The\nautoimmune regulator (AIRE) protein drives negative selection, and deficiency leads to autoimmune\npolyendocrine syndrome", 122),
    ("Syndrome components", "Chronic mucocutaneous candidiasis, Hypoparathyroidism, Adrenal\ninsufficiency, Recurrent Candida infections", 122),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 122 / book 100)")

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

SRC122 = {"part": 1, "pdfPages": [122], "bookPages": "100"}

manifest = {
    "topicId": "t-cell-development",
    "title": "T-Cell Development: Thymic Selection & Subset Lineages",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Cellular Components",
    "part": 1,
    "sourcePages": SRC122,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["t-cell-selection-map"],
    "mechanismIds": ["thymic-selection-gauntlet", "helper-lineage-switchboard"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the diagram, selection prose, and subset table; the USMLE question attack structure (stem patterns, traps, look-alike pivots, mini-case with distractors) is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "two-schools-model",
            "summary": "Organizing the page as two schools: the THYMIC SCHOOL (cortex keeps self-MHC recognizers; medulla culls self-reactive clones — central tolerance) and the LINEAGE SCHOOL (the Th0 cytokine switchboard with cross-inhibition), joined by the single-positive output. Includes the layer-map of tolerance failures (AIRE = display fails in the medulla vs FOXP3 = the peripheral Treg brake fails).",
            "origin": "outside-first-aid",
            "rationale": "The source presents the diagram and prose without this organizing frame or the AIRE-vs-FOXP3 layer comparison; the two-schools model and the IL-6 Th17/Treg toggle framing are KYP's integrative design.",
            "location": "core.keyIdea + both mechanisms + pivot 1 + mnemonics 1 and 3 + visual structure",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + 200-DPI VLM, this batch): pdf 122 carries 4 raster objects — the 541x255 separation-space image is the thymus anatomical illustration (top of the Thymus column); a 303x303 indexed circle (cell icon) + smask; a 1x1 artifact. The Differentiation diagram is otherwise vector/text: four columns (Bone marrow / Thymus / Lymph node / Peripheral blood), selection labels, +/- cytokine regulators per lineage, and the Secretes/Function table. The thymus raster is COPYRIGHTED artwork — conveyed in KYP as an ORIGINAL schematic (t-cell-selection-map), never reproduced. Printed-glyph finding (documented): the Th2 function cell prints 'Activate eosinophils, ↑IgE' — the ↑ glyph (symbol-font instance) is dropped by pdftotext, so the machine-verifiable quote is the glyph-free text-layer form; the note's user-facing table and visual show the printed form with ↑ (VLM-verified at 400% zoom). Boundary: Macrophage-lymphocyte interaction / Cytotoxic T cells / Regulatory T cells on the same printed page are owned by E25 cytotoxic-regulatory-t-cells and are not re-claimed here. The source's printed acronym for the AIRE syndrome (CHAR) is NOT reproduced as a mnemonic; KYP-authored mnemonics are used instead ('The cortex keeps; the medulla culls', 'No AIRE, no self-display...', 'IL-6 is the Th17/Treg toggle').",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"t-cell-development-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC122,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Cellular Components",
        "topicId": "t-cell-development",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "t-cell-development",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "IMMUNOLOGY_DIAGRAM", "Differentiation of T cells — the four-column pathway diagram",
            "Four vertical columns (Bone marrow → Thymus → Lymph node → Peripheral blood): a T-cell precursor leaves the bone marrow, enters the thymus (an anatomical lobed illustration with Cortex and Medulla leader labels) as a double-positive CD4+ CD8+ thymocyte, passes positive selection (+ icon, cortex) and negative selection (− icon, medulla), exits as CD8+ Cytotoxic (upper path) or CD4+ Helper (lower path); the Helper cell fans into Th1 / Th2 / Th17 / Treg circles, each arrow labeled with promoting (+) and inhibiting (−) cytokines (Th1: +IFN-γ, IL-12 / −IL-4, IL-10; Th2: +IL-2, IL-4 / −IFN-γ; Th17: +TGF-β, IL-1, IL-6 / −IFN-γ, IL-4; Treg: +TGF-β, IL-2 / −IL-6), feeding the Secretes/Function table at right.",
            "ORIGINAL_KYP_REDRAW", "t-cell-selection-map", "registry-visual"),
        svi(2, "VISUAL_TABLE", "Secretes / Function — helper subset table",
            "Two-column table (Secretes / Function) with four rows: Th1 (IFN-γ, IL-2 / Activate macrophages and cytotoxic T cells), Th2 (IL-4, IL-5, IL-6, IL-10, IL-13 / Activate eosinophils, ↑IgE), Th17 (IL-17, IL-21, IL-22 / Induce neutrophilic infiltration), Treg (TGF-β, IL-10, IL-35 / Prevent autoimmunity (maintain tolerance)).",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] — 'Helper subsets — Secretes / Function (verbatim)' table block"),
    ],
    "coverageAudit": {
        "topicId": "t-cell-development",
        "textbookVisualCount": 2,
        "accountedFor": 2,
        "sourceReproductions": 0,
        "kypRedraws": 1,
        "kypOriginals": 1,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: the Differentiation diagram's rasters (thymus illustration 541x255 sep; cell-icon circle 303x303 + smask; 1x1 artifact) are COPYRIGHTED — the diagram is conveyed as ONE original KYP schematic (t-cell-selection-map) covering all four columns, the selection gates, and the +/- regulator labels. The Secretes/Function table is reproduced verbatim as the note's table block (printed Th2 cell shows ↑IgE; text layer drops the glyph — documented). No E25 content re-claimed.",
}

(ROOT / "content/usmle/manifests/t-cell-development.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/t-cell-development.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 6/24 -> 7/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "t-cell-development":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: t-cell-development -> complete, textbookVisuals rewritten (2 sv)")
        break
else:
    print("ERROR: t-cell-development not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
