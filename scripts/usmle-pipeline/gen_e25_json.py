#!/usr/bin/env python3
"""E25 cytotoxic-regulatory-t-cells — manifest + visual inventory + chapter flip.

Immunology topic 8/24 ("Cellular Components" banner). Evidence pinned on
pdf 122 / book 100 (Macrophage-lymphocyte interaction + Cytotoxic T cells +
Regulatory T cells ONLY — the Differentiation diagram and selection prose on
the same printed page are owned by E24 t-cell-development).

Census: no new rasters for this topic's sections (the page's rasters — thymus
illustration + cell icons — belong to E24's diagram). All three sections are
prose; both registry visuals are original KYP teaching diagrams.
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

# --- p122: section headings ---
E += [
    ("Section heading — macrophage interface", "Macrophagelymphocyte interaction", 122),
    ("Section heading — cytotoxic", "Cytotoxic T cells", 122),
    ("Section heading — regulatory", "Regulatory T cells", 122),
]

# --- p122: Macrophage-lymphocyte interaction (verbatim) ---
E += [
    ("IFN-γ enhances macrophage killing", "Th1 cells secrete IFN-γ, which enhances the ability of monocytes and macrophages to kill\nmicrobes they ingest.", 122),
    ("CD40L-CD40 contact arm", "This function is also enhanced by interaction of T cell CD40L with CD40\non macrophages.", 122),
    ("Return arm — antigen presentation", "Macrophages also activate lymphocytes via antigen presentation.", 122),
]

# --- p122: Cytotoxic T cells (verbatim) ---
E += [
    ("CTL targets + death mode", "Kill virus-infected, neoplastic, and donor graft cells by inducing apoptosis.", 122),
    ("CTL granules — preformed proteins", "Release cytotoxic granules containing preformed proteins (eg, perforin, granzyme B).", 122),
    ("CD8 binds MHC I (anchor sentence)", "Cytotoxic T cells have CD8, which binds to MHC I on virus-infected cells.", 122),
]

# --- p122: Regulatory T cells (verbatim) ---
E += [
    ("Treg function — active suppression", "Help maintain specific immune tolerance by suppressing CD4+ and CD8+ T-cell effector\nfunctions.", 122),
    ("Treg identification markers", "Identified by expression of CD3, CD4, CD25, and FOXP3.", 122),
    ("Treg anti-inflammatory cytokines", "Activated regulatory T cells (Tregs) produce anti-inflammatory cytokines (eg, IL-10, TGF-β).", 122),
    ("IPEX name + genetic defect", "IPEX (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked) syndrome—\ngenetic deficiency of FOXP3 → autoimmunity.", 122),
    ("IPEX phenotype", "Characterized by enteropathy, endocrinopathy, nail dystrophy, dermatitis, and/or other\nautoimmune dermatologic conditions.", 122),
    ("IPEX — diabetes in male infants", "Associated with\ndiabetes in male infants.", 122),
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
    "topicId": "cytotoxic-regulatory-t-cells",
    "title": "Effector T Cells: Cytotoxic, Regulatory & the Macrophage Interface",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Cellular Components",
    "part": 1,
    "sourcePages": SRC122,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["ctl-kill-cycle", "treg-suppression-model"],
    "mechanismIds": ["cd8-perforin-granzyme-kill", "th1-macrophage-activation-loop"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the three prose sections; the USMLE question attack structure (stem patterns, traps, look-alike pivots, mini-case with distractors) is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "brake-vs-payload-model",
            "summary": "The unified model of this page: one T-cell chassis with opposite jobs — CD8+ spends PREPACKAGED granules (perforin/granzyme B, preformed) on MHC I-guided targets; Treg spends IL-10/TGF-β suppressing CD4+/CD8+ effectors. Plus the three-layer tolerance failure map (IPEX = brake fails, AIRE = display fails, DiGeorge = school fails) and the CTL-vs-NK guidance symmetry.",
            "origin": "outside-first-aid",
            "rationale": "The source lists the three sections independently without the kill/brake symmetry, the preformed-payload emphasis, or the IPEX-AIRE-DiGeorge layer comparison; these integrations are KYP's design.",
            "location": "core.keyIdea + mechanism captions + pivot 1 + mnemonics 1-2 + both visuals",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: this topic's three sections are prose; the printed page's rasters (thymus illustration 541x255, cell icon 303x303) belong to E24's Differentiation diagram and are not part of this scope. Both registry visuals (ctl-kill-cycle, treg-suppression-model) are original KYP teaching diagrams — no source artwork exists for these sections. Boundary: the Differentiation of T cells diagram + selection prose on the same printed page are owned by E24 t-cell-development (not re-claimed). The macrophage-lymphocyte interaction is presented as mechanism 2 + callout (bidirectional three-lane loop) rather than a third visual, per the inventory's two visual hints.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"cytotoxic-regulatory-t-cells-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC122,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Cellular Components",
        "topicId": "cytotoxic-regulatory-t-cells",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "cytotoxic-regulatory-t-cells",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "VISUAL_TABLE", "Cytotoxic vs regulatory T cells — the source's two prose rosters",
            "Two prose function lists: 'Cytotoxic T cells' (Kill virus-infected, neoplastic, and donor graft cells by inducing apoptosis; Release cytotoxic granules containing preformed proteins (eg, perforin, granzyme B); CD8 binds to MHC I on virus-infected cells) and 'Regulatory T cells' (Help maintain specific immune tolerance by suppressing CD4+ and CD8+ T-cell effector functions; Identified by expression of CD3, CD4, CD25, and FOXP3; Activated Tregs produce anti-inflammatory cytokines (eg, IL-10, TGF-β); IPEX syndrome — FOXP3 deficiency → autoimmunity, enteropathy, endocrinopathy, nail dystrophy, dermatitis, diabetes in male infants).",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] — 'Cytotoxic vs regulatory T cells — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "cytotoxic-regulatory-t-cells",
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
    "notes": "Both registry visuals (ctl-kill-cycle: CTL/target synapse + granule payload + target-spectrum rail + NK-guidance contrast strip; treg-suppression-model: marker panel + suppression arrows + IL-10/TGF-β secretion + IPEX strip) are additional ORIGINAL KYP teaching diagrams — the source sections are prose with no artwork. The function rosters are reproduced verbatim as the note's table block. No E24 content re-claimed.",
}

(ROOT / "content/usmle/manifests/cytotoxic-regulatory-t-cells.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/cytotoxic-regulatory-t-cells.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 7/24 -> 8/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "cytotoxic-regulatory-t-cells":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: cytotoxic-regulatory-t-cells -> complete, textbookVisuals rewritten (1 sv)")
        break
else:
    print("ERROR: cytotoxic-regulatory-t-cells not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
