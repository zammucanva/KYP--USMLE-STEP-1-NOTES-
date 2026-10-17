#!/usr/bin/env python3
"""E38 immunodeficiency-infection-patterns — manifest + visual inventory + chapter flip.

Immunology topic 21/24 (Immune Responses banner). Evidence pinned on
pdf 138 / book 116 (Infections in immunodeficiency — the 3x4 pathogen-by-
deficient-component matrix).

Census: pdfimages on p138 returns ZERO images — pure vector/table page.

Cell contents resolved by 200-DPI VLM read (the table's columns interleave
heavily in pdftotext; the VLM census established the true cell assignments
before quoting).

Mnemonic boundary (E22+ rule): the bacteria row prints FA mnemonic phrases
('Please SHINE my SKiS' for the encapsulated list; the 'Some Bacteria
Produce No Serious granules' sentence for the granulocyte set) — quoted in
manifest evidence AND in the note's verbatim table (source-fidelity table
content, E22 pattern: verbatim table blocks carry the source's own text),
with KYP-authored mnemonics added separately; they are NOT reproduced in
the registry visual.
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
P = {p: norm(pages[p - 1]) for p in (138,)}

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

E += [
    ("Section heading", "Infections in immunodeficiency", 138),
    ("Table headers (leading four)", "PATHOGEN\n↓ T CELLS\n↓ B CELLS\n↓ GRANULOCYTES", 138),
]

# --- bacteria row (physical interleave order from the text layer) ---
E += [
    ("Bacteria row label", "Bacteria", 138),
    ("Bacteria — T-cell entry", "Sepsis", 138),
    ("Bacteria — B-cell entry: encapsulated mnemonic (FA phrase, quoted for verification; carried verbatim in the note's table block)", "Encapsulated (Please\nSHINE my SKiS):", 138),
    ("Bacteria — B-cell encapsulated list", "Pseudomonas\naeruginosa,\nStreptococcus\npneumoniae,\nHaemophilus\nInfluenzae type b,\nNeisseria\nmeningitidis,\nEscherichia coli,\nSalmonella,\nKlebsiella\npneumoniae,\ngroup B\nStreptococcus", 138),
    ("Bacteria — granulocyte mnemonic + complement entries + organism list (full physical interleave)", "Some Bacteria\nEncapsulated\nProduce No\nspecies with early\nSerious granules:\ncomplement\nStaphylococcus,\ndeficiencies\nBurkholderia cepacia, Neisseria with late\nPseudomonas\ncomplement (C5-C9)\naeruginosa, Nocardia,\ndeficiencies\nSerratia", 138),
]

# --- viruses row ---
E += [
    ("Viruses row label", "Viruses", 138),
    ("Viruses — T-cell entry", "CMV, EBV, JC\nvirus, VZV, chronic\ninfection with\nrespiratory/GI viruses", 138),
    ("Viruses — B-cell entry + vaccine warning", "Enteroviral\nencephalitis,\npoliovirus\n(live vaccine\ncontraindicated)", 138),
]

# --- fungi/parasites row ---
E += [
    ("Fungi/parasites row label", "Fungi/parasites", 138),
    ("Fungi — T-cell entry", "Candida (local), PCP,\nCryptococcus", 138),
    ("Fungi — B-cell entry", "GI giardiasis (no IgA)", 138),
    ("Fungi — granulocyte entry", "Candida (systemic),\nAspergillus, Mucor", 138),
]

# --- the printed note ---
E += [
    ("Printed summary rule", "Note: B-cell deficiencies tend to produce recurrent bacterial infections, whereas T-cell deficiencies produce more fungal and\nviral infections.", 138),
    ("Table header (bottom column — ↓COMPLEMENT sits at the page bottom in the text layer)", "↓ COMPLEMENT", 138),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 138 / book 116)")

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

SRC138 = {"part": 1, "pdfPages": [138], "bookPages": "116"}

manifest = {
    "topicId": "immunodeficiency-infection-patterns",
    "title": "Infections in Immunodeficiency: The Bug-Pattern Matrix",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Immune Responses",
    "part": 1,
    "sourcePages": SRC138,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["bug-pattern-matrix"],
    "mechanismIds": ["layer-logic-map"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the matrix; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "column-logic-model",
            "summary": "The column-logic reading (each layer owns a pathogen niche: T cells = the intracellular arm; B cells = opsonizing IgG + IgA + neutralizing antibody; granulocytes = the catalase-positive set + systemic molds; complement split at the cascade waist into encapsulated-above and Neisseria-below) with the N/A cells as negative information, plus the prophylaxis/vaccine bridge.",
            "origin": "outside-first-aid",
            "rationale": "The source prints the matrix without the per-column mechanism logic or the management bridge; these integrations are KYP's design. Prophylaxis specifics are labeled extension.",
            "location": "core.keyIdea + mechanism caption + callout + patterns + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: pdfimages on p138 returns ZERO images — pure vector/table page; cell contents were resolved by a 200-DPI VLM read BEFORE quoting (the pdftotext interleave scrambles the column assignments; the VLM census established them). One original KYP registry visual (bug-pattern-matrix) renders the 3x4 grid with organism lists, N/A cells, the printed rule, and the column-logic strip. MNEMONIC HANDLING (E22 table-note pattern + E22 mnemonic rule, reconciled): FA's two printed bacteria-row phrases ('Please SHINE my SKiS'; 'Some Bacteria Produce No Serious granules') are quoted in manifest evidence and carried VERBATIM in the note's verbatim table block (the table block reproduces the source's own table text, as all verbatim table blocks do — E20/E21/E22/E28 precedent), while the REGISTRY VISUAL omits them and the mnemonics field carries KYP originals. This is the established distinction: verbatim table blocks preserve source text; original visuals and the mnemonics field do not reproduce FA mnemonic phrases.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"immunodeficiency-infection-patterns-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC138,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Immune Responses",
        "topicId": "immunodeficiency-infection-patterns",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "immunodeficiency-infection-patterns",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "VISUAL_TABLE", "Infections in immunodeficiency — the 3x4 matrix",
            "A matrix table: PATHOGEN rows (Bacteria, Viruses, Fungi/parasites) crossed with four deficiency columns (↓T CELLS, ↓B CELLS, ↓GRANULOCYTES, ↓COMPLEMENT), each cell listing its organisms (encapsulated list with the printed mnemonic under ↓B cells; the granule-negative set under ↓granulocytes; encapsulated-early/Neisseria-late under ↓complement; viral and fungal entries under ↓T cells; enteroviral encephalitis/poliovirus under ↓B cells; N/A cells for granulocyte/complement viruses and complement fungi), closed by the printed note contrasting B-cell and T-cell deficiency patterns.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] — 'Infections in immunodeficiency — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "immunodeficiency-infection-patterns",
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
    "notes": "Census: pure vector page (zero rasters); cell contents resolved by VLM census before quoting. The matrix is reproduced verbatim as the note's table block (including the source's two printed bacteria-row phrases, per the verbatim-table precedent); the registry visual (bug-pattern-matrix) is an ADDITIONAL original KYP teaching matrix that omits the FA phrases and carries the printed rule + column logic instead.",
}

(ROOT / "content/usmle/manifests/immunodeficiency-infection-patterns.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/immunodeficiency-infection-patterns.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 20/24 -> 21/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "immunodeficiency-infection-patterns":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: immunodeficiency-infection-patterns -> complete, textbookVisuals rewritten (1 sv)")
        break
else:
    print("ERROR: immunodeficiency-infection-patterns not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
