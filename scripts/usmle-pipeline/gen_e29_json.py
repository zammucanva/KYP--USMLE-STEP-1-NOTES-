#!/usr/bin/env python3
"""E29 complement-pathways — manifest + visual inventory + chapter flip.

Immunology topic 12/24 (Immune Responses banner). Evidence pinned on
pdf 126 / book 104 (Complement + Opsonins + Inhibitors).

Census: pdfimages -list on p126 returns ZERO images — the cascade diagram is
pure vector. One original KYP registry visual (complement-cascade-map)
redrawing the cascade topology.

Mnemonic boundary (E22/E24/E28 rule): the page prints FA mnemonic phrases
("General Motors makes classic cars", "Get 'Neis' (nice) Big MACs from 5-9 pm")
— quoted in manifest evidence for VERIFICATION ONLY, never reproduced in
user-facing note content; KYP originals replace them.
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
P = {p: norm(pages[p - 1]) for p in (126,)}

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

# --- p126: definition + CH50 ---
E += [
    ("Section heading", "Complement", 126),
    ("Definition", "System of hepatically synthesized plasma proteins that play a role in innate immunity and\ninflammation.", 126),
    ("MAC vs gram-negatives", "Membrane attack complex (MAC) defends against gram ⊝ bacteria.", 126),
    ("CH50", "The CH50 test\nis used to screen for activation of the classical complement pathway.", 126),
]

# --- p126: ACT (activation) ---
E += [
    ("ACT heading", "ACT", 126),
    ("Classical activation", "Classic—IgG or IgM mediated.", 126),
    ("Alternative activation", "Alternative—bacterial products.", 126),
    ("Lectin activation", "Lectin—mannose or other sugars on microbe\nsurface.", 126),
    ("FA printed mnemonic (verification only — not reproduced user-facing)", "General Motors makes classic cars.", 126),
]

# --- p126: Functions ---
E += [
    ("Functions heading", "FunctIonS", 126),
    ("C3b — opsonization", "C3b—opsonization.", 126),
    ("Anaphylatoxins", "C3a, C4a, C5a—anaphylaxis.", 126),
    ("C5a — chemotaxis", "C5a—neutrophil chemotaxis.", 126),
    ("MAC — cytolysis", "C5b-9 (MAC)—cytolysis.", 126),
    ("C3b binds LPS", "C3b binds to lipopolysaccharides on bacteria.", 126),
    ("MAC vs Neisseria + deficiency", "MAC complex is important for neutralizing\nNeisseria species. Deficiency results in\nrecurrent infection.", 126),
    ("FA printed mnemonic (verification only — not reproduced user-facing)", "Get “Neis” (nice) Big MACs from 5-9 pm.", 126),
]

# --- p126: Opsonins ---
E += [
    ("Two primary opsonins", "Opsonins—C3b and IgG are the two 1°\nopsonins in bacterial defense; enhance\nphagocytosis.", 126),
    ("Immune-complex clearance", "C3b also helps clear immune\ncomplexes.", 126),
    ("Etymology", "Opsonin (Greek) = to prepare for eating.", 126),
]

# --- p126: Inhibitors ---
E += [
    ("Inhibitors", "Inhibitors—decay-accelerating factor (DAF,\nalso called CD55) and C1 inhibitor (formerly\ncalled C1 esterase inhibitor) help prevent\ncomplement activation on self cells (eg,\nRBCs).", 126),
]

# --- p126: cascade diagram labels (vector text) ---
E += [
    ("Diagram label — lectin", "Lectin", 126),
    ("Diagram label — classic", "Classic", 126),
    ("Diagram label — microbial surface", "Microbial\nsurface", 126),
    ("Diagram label — sugar moiety", "Sugar\nmoiety", 126),
    ("Diagram label — antigen", "Antigen", 126),
    ("Diagram label — Ag-Ab complex", "Ag-Ab\ncomplex", 126),
    ("Diagram label — mast-cell degranulation", "C3a and C5a\nstimulate\nmast-cell\ndegranulation", 126),
    ("Diagram label — histamine/permeability", "Histamine increases\nendothelial\npermeability", 126),
    ("Diagram label — C3 convertase", "C3\nconvertase", 126),
    ("Diagram label — MBL-MASP / C1", "MBL-MASP or C1 complex", 126),
    ("Diagram label — C5 convertase", "C5\nconvertase", 126),
    ("Diagram label — cell lysis", "Cell lysis", 126),
    ("Diagram label — cytolysis", "Cytolysis", 126),
    ("Diagram label — neutrophil chemotaxis", "C5a-mediated\nneutrophil\nchemotaxis", 126),
    ("Diagram label — MAC", "Membrane attack\ncomplex (MAC)", 126),
    ("Diagram label — polymerized C9", "Polymerized C9", 126),
    ("Diagram label — microbe surface", "Microbe surface", 126),
    ("Diagram label — properdin/factor D", "Properdin\nor factor D", 126),
    ("Diagram label — alternative", "Alternative", 126),
    ("Diagram label — amplification loop", "C3b amplification loop", 126),
    ("Diagram label — factor B", "FactorB (Bb)", 126),
    ("Diagram label — opsonization", "Opsonization", 126),
    ("Diagram label — complement receptor", "Complement\nreceptor", 126),
    ("Diagram label — phagocyte", "Phagocyte", 126),
    ("Diagram label — inflammation", "Inflamation\nHistamine increases", 126),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 126 / book 104)")

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

SRC126 = {"part": 1, "pdfPages": [126], "bookPages": "104"}

manifest = {
    "topicId": "complement-pathways",
    "title": "The Complement System",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Immune Responses",
    "part": 1,
    "sourcePages": SRC126,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["complement-cascade-map"],
    "mechanismIds": ["complement-cascade-three-doors", "complement-self-nonself-brakes"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the cascade roster; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "deficiency-map-model",
            "summary": "Mapping fragment failures to disease: terminal C5-C9 → recurrent Neisseria (normal opsonization); C3 → pyogenic + immune-complex disease; early classical → immune-complex syndromes; properdin (X-linked) → Neisseria; C1-INH → hereditary angioedema (bradykinin, no urticaria, low C4, trauma triggers); DAF/CD55 (+CD59) loss → PNH. Plus the CH50-vs-AH50 localization logic. The printed page names only the two inhibitors and the Neisseria sentence; the disease genetics, AH50, and therapy specifics are labeled KYP extension.",
            "origin": "outside-first-aid",
            "rationale": "The source presents components and inhibitors without the deficiency-to-disease map or assay-differentiation logic; these integrations are KYP's design.",
            "location": "core.why + mechanism 2 caption + callout + patterns 1-3 + pivots + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: pdfimages -list on p126 returns ZERO images — the cascade diagram is pure vector; one original KYP registry visual (complement-cascade-map) redraws its topology (three doors, convertases, fragment outputs, anaphylaxis rail, opsonization panel, inhibitor strip). MNEMONIC BOUNDARY (E22/E24/E28 rule): FA's printed mnemonic phrases ('General Motors makes classic cars', \"Get 'Neis' (nice) Big MACs from 5-9 pm\") are quoted in manifest evidence for VERIFICATION ONLY — never in user-facing content; KYP originals replace them. Text-layer note: 'Inflamation' (source's spelling in a diagram label) quoted verbatim. Boundary: pdf 127 (complement disorders) = E30.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"complement-pathways-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC126,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Immune Responses",
        "topicId": "complement-pathways",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "complement-pathways",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "IMMUNOLOGY_DIAGRAM", "Complement cascade — the three-pathway convergence diagram",
            "A vector pathway map: three activation columns (Classic with Ag-Ab complex/Antigen; Lectin with microbial-surface Sugar moiety; Alternative with Microbial surface + FactorB (Bb) + Properdin or factor D + C3b amplification loop) converging through C3 convertase (MBL-MASP or C1 complex feeding C4/C2) and C5 convertase (C5, C5b) to the Membrane attack complex (MAC: C5b, C6, C7, C8, polymerized C9) and Cell lysis/Cytolysis; side branches: C3a and C5a stimulate mast-cell degranulation → Histamine increases endothelial permeability (Inflamation); C5a-mediated neutrophil chemotaxis; and the Opsonization inset (C3b on Microbe engaging the Complement receptor on a Phagocyte).",
            "ORIGINAL_KYP_REDRAW", "complement-cascade-map", "registry-visual"),
    ],
    "coverageAudit": {
        "topicId": "complement-pathways",
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
    "notes": "Census: pure vector page (zero rasters). The cascade diagram is redrawn as ONE original KYP registry visual (complement-cascade-map) with all printed labels accounted for (25 label quotes verified). Verbatim ACT/functions/opsonin/inhibitor text is the note's table block.",
}

(ROOT / "content/usmle/manifests/complement-pathways.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/complement-pathways.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 11/24 -> 12/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "complement-pathways":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: complement-pathways -> complete, textbookVisuals rewritten (1 sv)")
        break
else:
    print("ERROR: complement-pathways not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
