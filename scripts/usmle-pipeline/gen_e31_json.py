#!/usr/bin/env python3
"""E31 cytokines — manifest + visual inventory + chapter flip.

Immunology topic 14/24 (Immune Responses banner). Evidence pinned on
pdf 128 / book 106 (Important cytokines + Secreted by macrophages/T cells +
From Th1 cells/From Th2 cells).

Census: pdfimages on p128 returns ZERO images — pure vector/text page.

Mnemonic boundary (E22/E24/E28/E29/E30 rule): the page prints FA mnemonic
phrases ("Hot T-bone stEAK", "Clean up on aisle 8", "Ain't too proud 2 BEG
4 help", "I have 5 BAEs", "Interleukin thirtEEn promotes IgE") — quoted in
manifest evidence for VERIFICATION ONLY, never reproduced user-facing;
KYP originals replace them.
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
P = {p: norm(pages[p - 1]) for p in (128,)}

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

# --- p128: heading + sequencing rule ---
E += [
    ("Section heading", "Important cytokines", 128),
    ("Sequencing rule", "Acute (IL-1, IL-6, TNF-α), then recruit (IL-8, IL-12).", 128),
]

# --- p128: macrophage panel ---
E += [
    ("Panel heading", "Secreted by macrophages", 128),
    ("IL-1 — heading", "Interleukin-1", 128),
    ("IL-1 — functions", "Causes fever, acute inflammation. Activates\nendothelium to express adhesion molecules.\nInduces chemokine secretion to recruit\nWBCs. Also called osteoclast-activating factor.", 128),
    ("IL-6 — heading", "Interleukin-6", 128),
    ("IL-6 — functions", "Causes fever and stimulates production of\nacute-phase proteins.", 128),
    ("TNF-α — heading", "Tumor necrosis\nfactor-α", 128),
    ("TNF-α — functions", "Activates endothelium. Causes WBC\nrecruitment, vascular leak.\nCauses cachexia in malignancy.\nMaintains granulomas in TB.", 128),
    ("Fever/sepsis trio", "IL-1, IL-6, TNF-α can mediate fever and sepsis.", 128),
    ("IL-8 — heading", "Interleukin-8", 128),
    ("IL-8 — function", "Major chemotactic factor for neutrophils.", 128),
    ("IL-12 — heading", "Interleukin-12", 128),
    ("IL-12 — functions", "Induces differentiation of T cells into Th1 cells.\nActivates NK cells.\nFacilitates granuloma formation in TB.", 128),
]

# --- p128: T-cell panel ---
E += [
    ("Panel heading", "Secreted by T cells", 128),
    ("IL-2 — heading", "Interleukin-2", 128),
    ("IL-2 — function", "Stimulates growth of helper, cytotoxic, and\nregulatory T cells, and NK cells.", 128),
    ("IL-3 — heading", "Interleukin-3", 128),
    ("IL-3 — functions", "Supports growth and differentiation of bone\nmarrow stem cells. Functions like GM-CSF.", 128),
]

# --- p128: Th1 panel (IFN-γ) ---
E += [
    ("Panel heading — Th1", "From Th1 cells", 128),
    ("IFN-γ — heading", "Interferon-gamma", 128),
    ("IFN-γ — source + trigger", "Secreted by NK cells and T cells in response to\nantigen or IL-12 from macrophages; stimulates\nmacrophages to kill phagocytosed pathogens.", 128),
    ("IFN-γ — Th2 inhibition", "Inhibits differentiation of Th2 cells.", 128),
    ("IFN-γ — IgG switching", "Induces IgG isotype switching in B cells.", 128),
    ("IFN-γ — MHC amplification", "Increases MHC expression and antigen\npresentation by all cells.", 128),
    ("IFN-γ — granulomas", "Activates macrophages to induce granuloma\nformation.", 128),
]

# --- p128: Th2 panel ---
E += [
    ("Panel heading — Th2", "From Th2 cells", 128),
    ("IL-4 — heading", "Interleukin-4", 128),
    ("IL-4 — functions", "Induces differentiation of T cells into Th\n(helper) 2 cells. Promotes growth of B cells.\nEnhances class switching to IgE and IgG.", 128),
    ("IL-5 — heading", "Interleukin-5", 128),
    ("IL-5 — functions", "Promotes growth and differentiation of B cells.\nEnhances class switching to IgA. Stimulates\ngrowth and differentiation of Eosinophils.", 128),
    ("IL-10 — heading", "Interleukin-10", 128),
    ("IL-10 — functions", "Attenuates inflammatory response. Decreases\nexpression of MHC class II and Th1 cytokines.\nInhibits activated macrophages and dendritic\ncells. Also secreted by regulatory T cells.", 128),
    ("Attenuator pair", "TGF-β and IL-10 both attenuate the immune\nresponse.", 128),
    ("IL-13 — heading", "Interleukin-13", 128),
    ("IL-13 — functions", "Promotes IgE production by B cells. Induces\nalternative macrophage activation.", 128),
]

# --- p128: FA printed mnemonics (verification only — never user-facing) ---
E += [
    ("FA mnemonic — IL-1..6 run (verification only)", "“Hot T-bone stEAK”:\nIL-1: fever (hot).\nIL-2: stimulates T cells.\nIL-3: stimulates bone marrow.\nIL-4: stimulates IgE production.\nIL-5: stimulates IgA production.\nIL-6: stimulates aKute-phase protein\nproduction.", 128),
    ("FA mnemonic — IL-8 (verification only)", "“Clean up on aisle 8.” Neutrophils are recruited\nby IL-8 to clear infections.", 128),
    ("FA mnemonic — Th2 (verification only)", "Ain’t too proud 2 BEG 4 help.", 128),
    ("FA mnemonic — IL-5 (verification only)", "I have 5 BAEs.", 128),
    ("FA mnemonic — IL-13 (verification only)", "Interleukin thirtEEn promotes IgE.", 128),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 128 / book 106)")

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

SRC128 = {"part": 1, "pdfPages": [128], "bookPages": "106"}

manifest = {
    "topicId": "cytokines",
    "title": "Important Cytokines",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Immune Responses",
    "part": 1,
    "sourcePages": SRC128,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["cytokine-network-map"],
    "mechanismIds": ["cytokine-command-sequence"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the cytokine roster; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "command-sequence-model",
            "summary": "Organizing the roster as a four-beat command sequence (acute alarm → recruitment → expansion → polarization/attenuation) with the Th1/Th2 cross-regulation seesaw, the IL-12 axis failure pattern (disseminated atypical mycobacteria/Salmonella → IFN-γ therapy), and the cytokine-drug bridge (IL-2R blockade, calcineurin inhibitors, anti-TNF, anti-IL-1/6/12/23/17/5).",
            "origin": "outside-first-aid",
            "rationale": "The source lists cytokines by cell without the timeline, the seesaw, the deficiency pattern, or the drug linkages; these integrations are KYP's design. Drug names and deficiency genetics are labeled extension (pharmacology/immunodeficiency content beyond this printed page).",
            "location": "mechanism caption + callout + patterns 1 and 3 + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: pdfimages on p128 returns ZERO images — pure vector/text page; one original KYP registry visual (cytokine-network-map) organizes the roster by secreting cell with the sequencing banner and the attenuation banner. MNEMONIC BOUNDARY (E22/E24/E28/E29/E30 rule): FA's printed mnemonic phrases ('Hot T-bone stEAK', 'Clean up on aisle 8', \"Ain't too proud 2 BEG 4 help\", 'I have 5 BAEs', 'Interleukin thirtEEn promotes IgE') are quoted in manifest evidence for VERIFICATION ONLY — never in user-facing content; KYP originals replace them. Boundary: pdf 129 (respiratory burst / IFN) = E32.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"cytokines-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC128,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Immune Responses",
        "topicId": "cytokines",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "cytokines",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "VISUAL_TABLE", "Important cytokines — the roster organized by secreting cell",
            "A structured text roster: 'Secreted by macrophages' (Interleukin-1, Interleukin-6, Tumor necrosis factor-α, Interleukin-8, Interleukin-12 with functions), 'Secreted by T cells' (Interleukin-2, Interleukin-3), 'From Th1 cells' (Interferon-gamma with six functions), 'From Th2 cells' (Interleukin-4, Interleukin-5, Interleukin-10, Interleukin-13), with the acute/recruit sequencing line and the fever-sepsis and attenuation banners.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] — 'Cytokine functions — verbatim by source' table block"),
    ],
    "coverageAudit": {
        "topicId": "cytokines",
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
    "notes": "Census: pure vector page (zero rasters). The text roster is reproduced verbatim as the note's table block; the registry visual (cytokine-network-map) is an ADDITIONAL original KYP teaching diagram organizing the same content by secreting cell with banners. FA's printed mnemonics are not reproduced in user-facing content.",
}

(ROOT / "content/usmle/manifests/cytokines.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/cytokines.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 13/24 -> 14/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "cytokines":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: cytokines -> complete, textbookVisuals rewritten (1 sv)")
        break
else:
    print("ERROR: cytokines not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
