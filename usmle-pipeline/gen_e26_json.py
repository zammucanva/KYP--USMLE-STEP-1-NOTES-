#!/usr/bin/env python3
"""E26 lymphocyte-activation-tolerance — manifest + visual inventory + chapter flip.

Immunology topic 9/24 (last "Cellular Components" banner topic — pdf 124 begins
IMMUNE RESPONSES). Evidence pinned on pdf 123 / book 101 (T- and B-cell
activation + Peripheral tolerance + Anergy).

Census: pdf 123 carries only two 1x1 rgb pixel artifacts — the activation
diagrams are PURE VECTOR; no copyrighted raster artwork exists for this topic.
The single registry visual is an original KYP teaching diagram.

KYP-extension note: CTLA-4/PD-1 drug content (abatacept, ipilimumab,
nivolumab) is NOT on this printed page (verified: no "CTLA" token in the
p123 text layer); it appears in the note as clearly-labeled extension
material (callout + patterns + mnemonics), never as source evidence.
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
P = {p: norm(pages[p - 1]) for p in (123,)}

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

# --- p123: heading + APC roster + two-signal rule ---
E += [
    ("Section heading", "T- and B-cell activation", 123),
    ("Subsection heading — T cells", "T-cell activation", 123),
    ("Subsection heading — B cells", "B-cell activation and\nclass switching", 123),
    ("APC roster", "APCs: B cells, dendritic cells, Langerhans cells, macrophages.", 123),
    ("The two-signal rule", "Two signals are required for T-cell activation, B-cell activation, and class switching.", 123),
    ("APC processing + migration", "APC ingests and processes antigen, then\nmigrates to the draining lymph node.", 123),
]

# --- p123: T-cell activation (verbatim) ---
E += [
    ("T signal 1 — exogenous route", "T-cell activation (signal 1): exogenous\nantigen is presented on MHC II and\nrecognized by TCR on Th (CD4+) cell.", 123),
    ("T signal 1 — endogenous/cross-presentation route", "Endogenous or cross-presented antigen is\npresented on MHC I to Tc (CD8+) cell.", 123),
    ("T signal 2 — B7-CD28 costimulation", "Proliferation and survival (signal 2):\ncostimulatory signal via interaction of B7\nprotein (CD80/86) on dendritic cell and\nCD28 on naïve T cell.", 123),
    ("T-cell outputs", "Activated Th cell produces cytokines. Tc cell\nable to recognize and kill virus-infected cell.", 123),
]

# --- p123: B-cell activation and class switching (verbatim) ---
E += [
    ("B-cell prerequisite", "Th-cell activation as above.", 123),
    ("B signal 1 loading — BCR endocytosis", "B-cell receptor–mediated endocytosis.", 123),
    ("B signal 1 — MHC II presentation", "Exogenous antigen is presented on MHC II\nand recognized by TCR on Th cell.", 123),
    ("B signal 2 — CD40-CD40L", "CD40 receptor on B cell binds CD40 ligand\n(CD40L) on Th cell.", 123),
    ("Cytokine directive for class switching", "Th cells secrete cytokines that determine Ig\nclass switching of B cells.", 123),
    ("B-cell outputs", "B cells are activated and produce IgM.\nThey undergo class switching and affinity\nmaturation.", 123),
]

# --- p123: diagram labels (vector text) ---
E += [
    ("Diagram label — APC", "Antigen-presenting\ncell", 123),
    ("Diagram label — receptors", "T cell\nreceptor", 123),
    ("Diagram label — CD4/8", "CD4/8", 123),
    ("Diagram label — B7", "CD80/86\n(B7)", 123),
    ("Diagram label — CD28", "CD28", 123),
    ("Diagram label — activated T actions", "Activated\nT cell actions", 123),
    ("Diagram label — BCR", "B cell\nreceptor", 123),
    ("Diagram label — activated CD4", "Activated\nCD4+ T cell", 123),
    ("Diagram label — CD40L", "CD40L", 123),
    ("Diagram label — CD40", "CD40", 123),
    ("Diagram label — activated B actions", "Activated\nB cell actions", 123),
    ("Diagram label — cytokines", "Cytokines", 123),
    ("Diagram label — naive T cell", "Naïve T cell", 123),
    ("Diagram label — MHC", "MHC II/I", 123),
]

# --- p123: Peripheral tolerance + Anergy (verbatim) ---
E += [
    ("Peripheral tolerance — heading + definition", "Peripheral tolerance\nSuppression/inactivation of self-reactive T/B cells (outside thymus/bone marrow) → preserves selftolerance; loss → autoimmunity.", 123),
    ("Peripheral tolerance — three mechanisms", "Mechanisms: anergy, regulatory T-cell suppression, apoptosis (Fas–FasL pathway).", 123),
    ("Anergy — heading + definition", "Anergy\nState during which a cell cannot become activated by exposure to its antigen.", 123),
    ("Anergy — induction without signal 2", "T and B cells\nbecome anergic when exposed to their antigen without costimulatory signal (signal 2).", 123),
    ("Anergy — tolerance classification", "Another\nexample of peripheral tolerance mechanism.", 123),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 123 / book 101)")

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

SRC123 = {"part": 1, "pdfPages": [123], "bookPages": "101"}

manifest = {
    "topicId": "lymphocyte-activation-tolerance",
    "title": "Lymphocyte Activation, Peripheral Tolerance & Anergy",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Cellular Components",
    "part": 1,
    "sourcePages": SRC123,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["activation-signal-model"],
    "mechanismIds": ["two-signal-activation", "peripheral-tolerance-anergy"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the activation sequences, tolerance, and anergy prose; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "and-gate-licensing-model",
            "summary": "Framing the two-signal rule as a safety interlock (signal 1 = the key, signal 2 = the license; key without license = anergy, not a weak response) and pairing it with the pharmacologic handles on the gate (CTLA-4-Ig blocking B7-CD28; checkpoint inhibitors releasing it) and the disease readouts (hyper-IgM at CD40L-CD40; ALPS at Fas-FasL).",
            "origin": "outside-first-aid",
            "rationale": "The source states the two-signal sequences and tolerance mechanisms but not the AND-gate framing, the drug-class connection, or the layer-failure disease map. NOTE: the drug names (abatacept, ipilimumab, nivolumab) are NOT on pdf 123 (verified — no CTLA token in the text layer) and appear only as labeled extension content, never as source evidence.",
            "location": "core.keyIdea + mechanism captions + callout + patterns 1 and 3 + mnemonics 1 and 3 + pivot 1",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages): pdf 123 carries only two 1x1 rgb pixel artifacts — the T- and B-cell activation diagrams are PURE VECTOR; no copyrighted raster artwork exists for this topic; the single registry visual (activation-signal-model) is an original KYP teaching diagram preserving the signal-pair logic. KYP-extension boundary (documented): CTLA-4/PD-1 drug content is not on this printed page (no CTLA token in the p123 text layer) and appears in the note only as clearly-labeled extension material. Boundary: pdf 124 (Antibody structure and function) begins the IMMUNE RESPONSES banner — that is E27 antibody-structure and is not claimed here. This is the final Cellular Components banner topic.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"lymphocyte-activation-tolerance-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC123,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Cellular Components",
        "topicId": "lymphocyte-activation-tolerance",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "lymphocyte-activation-tolerance",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "IMMUNOLOGY_DIAGRAM", "T- and B-cell activation — the two two-signal diagrams",
            "Two side-by-side vector diagrams. Left (T-cell activation): an Antigen-presenting cell (Antigen on MHC II/I) faces a Naïve T cell (T cell receptor, CD4/8); signal 1 = antigen-MHC to TCR; signal 2 = CD80/86 (B7) on the APC to CD28 on the naïve T cell; output box 'Activated T cell actions'. Right (B-cell activation and class switching): an Activated CD4+ T cell (T cell receptor, CD4, CD40L) faces a B cell (B cell receptor, MHC II with Antigen, CD40); signal 1 = antigen-MHC II to TCR; signal 2 = CD40L to CD40; Cytokines arrow from the Th cell direct class switching; output box 'Activated B cell actions'.",
            "ORIGINAL_KYP_REDRAW", "activation-signal-model", "registry-visual"),
    ],
    "coverageAudit": {
        "topicId": "lymphocyte-activation-tolerance",
        "textbookVisualCount": 1,
        "accountedFor": 1,
        "sourceReproductions": 0,
        "kypRedraws": 1,
        "kypOriginals": 0,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: the two activation diagrams are pure vector (pdf 123 rasters = two 1x1 pixel artifacts only) — both are conveyed in ONE original KYP schematic (activation-signal-model) covering both signal-pair routes plus the anergy/peripheral-tolerance strip; the verbatim activation sequences are the note's table block. No E27 content (pdf 124) claimed.",
}

(ROOT / "content/usmle/manifests/lymphocyte-activation-tolerance.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/lymphocyte-activation-tolerance.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 8/24 -> 9/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "lymphocyte-activation-tolerance":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: lymphocyte-activation-tolerance -> complete, textbookVisuals rewritten (1 sv)")
        break
else:
    print("ERROR: lymphocyte-activation-tolerance not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
