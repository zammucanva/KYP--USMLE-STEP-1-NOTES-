#!/usr/bin/env python3
"""E23 nk-b-t-cell-functions — manifest + visual inventory + chapter flip.

Immunology topic 6/24 ("Cellular Components" banner). Evidence pinned on
pdf 121 / book 99 (the two "Major functions" subsections ONLY — the HLA
subtypes table higher on the same printed page is owned by E22 hla-subtypes).

Same verification rules as gen_e16-e18_json.py (norm containment, >=3 char
floor, loud failures).

Census note (pdfimages, this batch): pdf 121 carries ZERO raster images —
the two function lists are prose. The B/T function roster is the page's only
structured visual element (a two-column function list) and is reproduced
verbatim as the note's table block. Both registry visuals (nk-kill-model,
b-t-division-of-labor) are additional ORIGINAL KYP teaching diagrams, not
source-figure replacements.

Text-layer quirk (documented): the IFN-gamma sentence renders as
"IFN-\\u03b3 \\x8e\\u2192 macrophage" — the 0x8e byte sits between the space
and the arrow; norm() strips U+0080-U+009F so quotes with "IFN-\\u03b3
\\u2192 macrophage" verify cleanly.
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
P = {p: norm(pages[p - 1]) for p in (121,)}

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

# --- p121: banner + subsection headings ---
E += [
    ("Chapter banner", "IMMUNOLOGY—CELLULAR COMPONENTS", 121),
    ("Subsection heading — NK", "Major functions of\nnatural killer cells", 121),
    ("Subsection heading — B and T", "Major functions of B and T cells", 121),
]

# --- p121: NK cell functions (verbatim prose) ---
E += [
    ("NK lineage — innate lymphocyte", "Lymphocyte member of innate immune system.", 121),
    ("NK effector molecules + targets", "Use perforin and granzymes to induce apoptosis of virally infected cells and tumor cells.", 121),
    ("NK enhancement cytokines + IFN-γ output", "Activity enhanced by IL-2, IL-12, IFN-α, and IFN-β. Produce IFN-γ → macrophage activation.", 121),
    ("NK kill trigger — activating signal and/or absent inhibitory signal", "Induced to kill when exposed to a nonspecific activation signal on target cell and/or to an absence\nof an inhibitory signal such as MHC I on target cell surface.", 121),
    ("NK ADCC mechanism", "Also kills via antibody-dependent cell-mediated cytotoxicity (CD16 binds Fc region of bound IgG,\nactivating the NK cell).", 121),
]

# --- p121: B-cell functions ---
E += [
    ("B-cell roster header", "B cells", 121),
    ("B immunity type", "Humoral immunity.", 121),
    ("B function 1 — recognize/present + somatic hypermutation", "Recognize and present antigen—undergo somatic hypermutation to optimize antigen specificity.", 121),
    ("B function 2 — produce antibody via plasma cells", "Produce antibody—differentiate into plasma cells to secrete specific immunoglobulins.", 121),
    ("B function 3 — immunologic memory", "Maintain immunologic memory—memory B cells persist and accelerate future response to antigen.", 121),
]

# --- p121: T-cell functions ---
E += [
    ("T-cell roster header", "T cells", 121),
    ("T immunity type", "Cell-mediated immunity.", 121),
    ("T function 1 — CD4+ help", "CD4+ T cells help B cells make antibodies and produce cytokines to recruit phagocytes and\nactivate other leukocytes.", 121),
    ("T function 2 — CD8+ direct killing", "CD8+ T cells directly kill virus-infected and tumor cells via perforin and granzymes (similar to NK\ncells).", 121),
    ("T function 3 — type IV hypersensitivity", "Type IV hypersensitivity reaction.", 121),
    ("T function 4 — cellular organ rejection", "Acute and chronic cellular organ rejection.", 121),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 121 / book 99)")

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

SRC121 = {"part": 1, "pdfPages": [121], "bookPages": "99"}

manifest = {
    "topicId": "nk-b-t-cell-functions",
    "title": "Major Functions of NK, B and T Cells",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Cellular Components",
    "part": 1,
    "sourcePages": SRC121,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["nk-kill-model", "b-t-division-of-labor"],
    "mechanismIds": ["nk-kill-decision", "adcc-kill-route"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the function lists as prose; the USMLE question attack structure (stem patterns, traps, look-alike pivots, mini-case with distractors) is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "cd8-nk-complementary-model",
            "summary": "The MHC I double-cross: CD8+ T cells REQUIRE MHC I presentation while NK cells kill when MHC I is ABSENT (missing self) — viral and tumor MHC I downregulation escapes CD8+ but walks into NK. Unifies this page's kill logic with the E21 MHC note and the E20 innate/adaptive sorting.",
            "origin": "outside-first-aid",
            "rationale": "The source states the NK inhibitory signal (MHC I) and the CD8+ killing function on the same page but never states their complementary relationship; the integration and its clinical payoff (tumor/viral immune escape, therapeutic-antibody ADCC) is KYP's model.",
            "location": "mechanism 'nk-kill-decision' caption + callout block + pivot 1 + miniCase reasoning + visual 'nk-kill-model'",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages, this batch): pdf 121 carries ZERO rasters — both function subsections are prose; the B/T function roster is the page's only structured visual element (two-column function list), reproduced verbatim as the note's table block. Both registry visuals (nk-kill-model, b-t-division-of-labor) are additional ORIGINAL KYP teaching diagrams (not source-figure replacements). Boundary: the HLA subtypes table on the same printed page (upper half) is owned by E22 hla-subtypes and is not re-claimed here; page 122 (T-cell differentiation) belongs to E24 t-cell-development. Text-layer quirk handled: 'IFN-\\u03b3 \\x8e\\u2192 macrophage' — norm() strips the 0x8e byte; quotes verified first pass.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"nk-b-t-cell-functions-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC121,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Cellular Components",
        "topicId": "nk-b-t-cell-functions",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "nk-b-t-cell-functions",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "VISUAL_TABLE", "Major functions of B and T cells — two-column function roster",
            "A structured function list: 'B cells' (Humoral immunity; Recognize and present antigen—undergo somatic hypermutation to optimize antigen specificity; Produce antibody—differentiate into plasma cells to secrete specific immunoglobulins; Maintain immunologic memory—memory B cells persist and accelerate future response to antigen) beside 'T cells' (Cell-mediated immunity; CD4+ T cells help B cells make antibodies and produce cytokines to recruit phagocytes and activate other leukocytes; CD8+ T cells directly kill virus-infected and tumor cells via perforin and granzymes (similar to NK cells); Type IV hypersensitivity reaction; Acute and chronic cellular organ rejection).",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[2] — 'Major functions of B and T cells — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "nk-b-t-cell-functions",
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
    "notes": "pdfimages census: ZERO rasters on pdf 121 — the NK subsection is prose and is fully covered by the two original registry visuals (nk-kill-model: kill decision + amplifiers + ADCC; b-t-division-of-labor: the B/T roster synthesis); the B/T function roster is the page's only structured visual element and is reproduced verbatim as a note-block. No source artwork exists to redraw; no double-claiming of E22's HLA table on the same printed page.",
}

(ROOT / "content/usmle/manifests/nk-b-t-cell-functions.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/nk-b-t-cell-functions.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 5/24 -> 6/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
done = 0
for t in ch["topics"]:
    if t["topicId"] == "nk-b-t-cell-functions":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: nk-b-t-cell-functions -> complete, textbookVisuals rewritten (1 sv)")
        break
else:
    print("ERROR: nk-b-t-cell-functions not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
