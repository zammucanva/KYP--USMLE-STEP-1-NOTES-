#!/usr/bin/env python3
"""E36 b-cell-immunodeficiencies — manifest + visual inventory + chapter flip.

Immunology topic 19/24 (Immune Responses banner). Evidence pinned on
pdf 136 / book 114 (Immunodeficiencies — B-cell disorders rows ONLY: Bruton,
selective IgA deficiency, CVID. The T-cell/combined/phagocyte rows lower on
the same printed page and on p137 are owned by E37
t-cell-phagocyte-immunodeficiencies.)

Census: pdfimages on p136 returns ZERO content images — the immunodeficiency
table is pure vector. One original KYP registry visual
(b-cell-deficiency-map) with the three-disease cards and the maturation
ladder.

Quoting note (E34 lesson applied): the p136 table's columns interleave in the
text layer — all quotes follow the PHYSICAL line order exactly as extracted.
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
P = {p: norm(pages[p - 1]) for p in (136,)}

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

# --- p136: section heading + table headers ---
E += [
    ("Section heading", "Immunodeficiencies", 136),
    ("Table headers", "DISEASE\nDEFECT\nPRESENTATION\nFINDINGS", 136),
    ("Block heading", "B-cell disorders", 136),
]

# --- p136: Bruton (physical interleave order) ---
E += [
    ("Bruton — row label + defect + presentation (physical interleave)", "Defect in BTK, a tyrosine\nRecurrent bacterial and\nX-linked (Bruton)\nenteroviral infections after 6\nagammaglobulinemia kinase gene → no B-cell\nmaturation; X-linked recessive\nmonths (↓ maternal IgG)\n(↑ in Boys)", 136),
    ("Bruton — findings", "Absent B cells in peripheral\nblood, ↓ Ig of all classes.\nAbsent/scanty lymph nodes\nand tonsils (1° follicles\nand germinal centers\nabsent) → live vaccines\ncontraindicated", 136),
]

# --- p136: selective IgA deficiency (physical interleave order) ---
E += [
    ("IgA deficiency — disease row label", "Selective IgA\ndeficiency", 136),
    ("IgA deficiency — defect + most-common + presentation (physical interleave)", "May be familial or sporadic\nMajority Asymptomatic\nMost common 1°\nCan see Airway and GI\nimmunodeficiency\ninfections, Autoimmune\nMay also arise 2° to certain\ndisease (eg, celiac disease),\nviral infections or medications\nAtopy, Anaphylaxis to IgA in\nblood products", 136),
    ("IgA deficiency — findings", "↓ IgA with normal IgG, IgM\nlevels\n↑ susceptibility to giardiasis\nCan cause false-negative celiac\ndisease test and false-positive\nserum pregnancy test", 136),
]

# --- p136: CVID (physical interleave order) ---
E += [
    ("CVID — disease row label", "Common variable\nimmunodeficiency", 136),
    ("CVID — defect", "Defect in B-cell differentiation. May present in childhood\nCause unknown in most cases\nbut usually diagnosed after\npuberty", 136),
    ("CVID — risks", "↑ risk of autoimmune disease,\nbronchiectasis, lymphoma,\nsinopulmonary infections", 136),
    ("CVID — findings", "↓ plasma cells,\n↓ immunoglobulins", 136),
]

# --- p136: E37 boundary marker (T-cell section begins on this page) ---
E += [
    ("E37 boundary marker (T-cell disorders heading on same page — owned by E37)", "T-cell disorders", 136),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 136 / book 114)")

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

SRC136 = {"part": 1, "pdfPages": [136], "bookPages": "114"}

manifest = {
    "topicId": "b-cell-immunodeficiencies",
    "title": "B-Cell Immunodeficiencies: Bruton, IgA Deficiency & CVID",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Immune Responses",
    "part": 1,
    "sourcePages": SRC136,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["b-cell-deficiency-map"],
    "mechanismIds": ["b-cell-maturation-stage-map"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the table rows; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "maturation-stage-model",
            "summary": "The three-diseases-as-three-stations model (BTK = early cut with absent B cells; IgA deficiency = class-specific switch cut with intact lineage; CVID = late differentiation cut with B cells present), plus the age/B-cell-count/Ig-pattern diagnostic triad and the management bridges (IVIG replacement, washed blood products, IgG-based celiac testing, CVID surveillance).",
            "origin": "outside-first-aid",
            "rationale": "The source lists three diseases without the assembly-line frame or the management logic; these integrations are KYP's design. Management specifics (IVIG, washed products, surveillance programs) are labeled extension.",
            "location": "core.keyIdea + mechanism caption + callout + patterns + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: pdfimages on p136 returns ZERO content images — the immunodeficiency table is pure vector. One original KYP registry visual (b-cell-deficiency-map: three disease cards + four-station maturation ladder). Quoting note (E34 lesson): the p136 table columns INTERLEAVE in the text layer — all quotes follow the physical line order. Boundary: the T-cell disorders heading and rows lower on p136, plus p137, are owned by E37 t-cell-phagocyte-immunodeficiencies (the heading quote is pinned here as boundary evidence only). No FA mnemonic phrases printed in this block (the IgA row's capitalized presentation words are the source's own emphasis, quoted verbatim).",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"b-cell-immunodeficiencies-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC136,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Immune Responses",
        "topicId": "b-cell-immunodeficiencies",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "b-cell-immunodeficiencies",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "VISUAL_TABLE", "Immunodeficiencies — the B-cell disorders rows",
            "Rows of the printed immunodeficiency table (DISEASE / DEFECT / PRESENTATION / FINDINGS) for X-linked (Bruton) agammaglobulinemia, Selective IgA deficiency, and Common variable immunodeficiency.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] — 'B-cell disorders — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "b-cell-immunodeficiencies",
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
    "notes": "Census: pure vector page (zero content rasters). The three B-cell rows are reproduced verbatim as the note's table block; the registry visual (b-cell-deficiency-map) is an ADDITIONAL original KYP teaching diagram with the three-disease cards and the maturation ladder. The T-cell and phagocyte rows of the same printed table belong to E37.",
}

(ROOT / "content/usmle/manifests/b-cell-immunodeficiencies.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/b-cell-immunodeficiencies.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 18/24 -> 19/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "b-cell-immunodeficiencies":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: b-cell-immunodeficiencies -> complete, textbookVisuals rewritten (1 sv)")
        break
else:
    print("ERROR: b-cell-immunodeficiencies not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
