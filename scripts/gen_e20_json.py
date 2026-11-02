#!/usr/bin/env python3
"""E20 innate-vs-adaptive-immunity — manifest + visual inventory + chapter flip.

Evidence pinned on pdf 119 (book 97). Same verification rules as E16-E19.
No printed artwork exists on the page (pdfimages clean) — the comparison
table is the only visual element (sv1, note-block verbatim); the registry
visual innate-vs-adaptive-arms is an original KYP teaching diagram, not a
figure replacement.
"""
import json
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path("/home/z/kyp-usmle-notes")
CACHE = ROOT / ".usmle-pipeline-cache"

def norm(s: str) -> str:
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()

pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "":
    pages.pop()
P = {p: norm(pages[p - 1]) for p in (119,)}

def ev(claim: str, quote: str, pg: int) -> dict:
    ok = norm(quote) in P[pg]
    return {
        "claim": claim,
        "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg - 22)},
        "quote": quote,
        "verified": "pass" if ok else "FAIL",
        "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)",
    }

E = [
    ("Section heading", "Innate vs adaptive immunity", 119),
    ("Column header", "Innate immunity", 119),
    ("Column header", "Adaptive immunity", 119),
    ("Row label", "COMPONENTS", 119),
    ("Innate components", "Neutrophils, macrophages, monocytes,\ndendritic cells, natural killer (NK) cells\n(lymphoid origin), complement, physical\nepithelial barriers, secreted enzymes.", 119),
    ("Adaptive components", "T cells, B cells, circulating antibodies.", 119),
    ("Row label", "MECHANISM", 119),
    ("Innate mechanism", "Germline encoded.", 119),
    ("Adaptive mechanism", "Variation through V(D)J recombination during\nlymphocyte development.", 119),
    ("Row label", "RESPONSE TO PATHOGENS", 119),
    ("Innate response 1", "Nonspecific.\nOccurs rapidly (minutes to hours).\nNo memory response.", 119),
    ("Adaptive response", "Highly specific, refined over time.\nDevelops over long periods; memory response is\nfaster and more robust.", 119),
    ("Row label", "SECRETED PROTEINS", 119),
    ("Innate secreted proteins", "Lysozyme, complement, C-reactive protein\n(CRP), defensins, cytokines.", 119),
    ("Adaptive secreted proteins", "Immunoglobulins, cytokines.", 119),
    ("Row label", "KEY FEATURES IN PATHOGEN\nRECOGNITION", 119),
    ("TLR definition", "Toll-like receptors (TLRs): pattern recognition\nreceptors that recognize pathogen- and\ndamage-associated molecular patterns (PAMPs\nand DAMPs)", 119),
    ("TLR signaling", "activation of NF-κB → release\nof pro-inflammatory cytokines.", 119),
    ("PAMP examples", "Examples\nof PAMPs: LPS (gram ⊝ bacteria), flagellin\n(bacteria), nucleic acids (viruses).", 119),
    ("DAMP examples", "Examples\nof DAMPs: mitochondrial DNA, histones, heat\nshock proteins.", 119),
    ("Memory cells", "Memory cells: activated B and T cells; subsequent\nexposure to a previously encountered antigen →\nstronger, quicker immune response.", 119),
    ("Immunosenescence", "Adaptive immune responses decrease with age\n(immunosenescence).", 119),
    ("Section heading", "Immune privilege", 119),
    ("Immune privilege definition", "Organs (eg, eye, brain, placenta, testes) and tissues where chemical or physical mechanisms limit\nimmune responses to foreign antigens to avoid damage that would occur from inflammatory\nsequelae.", 119),
    ("Allograft consequence", "Allograft rejection at these sites is less likely.", 119),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 119 / book 97)")

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

SRC119 = {"part": 1, "pdfPages": [119], "bookPages": "97"}

manifest = {
    "topicId": "innate-vs-adaptive-immunity",
    "title": "Innate vs Adaptive Immunity",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Cellular Components",
    "part": 1,
    "sourcePages": SRC119,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["innate-vs-adaptive-arms"],
    "mechanismIds": ["tlr-nfkb-alert"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the five-row comparison table and the immune-privilege sentence; the USMLE question attack structure (stem patterns, traps, look-alike pivots, the corneal-vs-skin-graft mini-case) is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "five-axis-comparison-model",
            "summary": "Reading the two arms on exactly five axes (components, mechanism, response timing, secreted proteins, recognition) with a response-vs-time curve that makes the no-memory vs memory distinction visual.",
            "origin": "outside-first-aid",
            "rationale": "The source's table rows are the five axes; converting them into a paired-panel diagram with the timing curve (immediate flat innate vs lagging primary and brisk secondary adaptive) is KYP's integrative visual model.",
            "location": "visual innate-vs-adaptive-arms + core.keyIdea + table caption",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "REBUILT batch (the original E20 was destroyed un-pushed with a7a7d3c in the 7th wipe). Census: pdfimages clean on pdf 119 — no printed artwork exists; the five-row comparison table is the page's only visual element (sv1, note-block verbatim). The registry visual 'innate-vs-adaptive-arms' is an original KYP teaching diagram (two panels + response-vs-time strip), not a figure replacement. The gram-negative marker in the PAMP row is the circled-minus U+229D as printed ('gram ⊝ bacteria'); the TLR and memory rows carry U+2192 arrows as printed.",
    "updatedAt": str(date.today()),
}

inventory = {
    "topicId": "innate-vs-adaptive-immunity",
    "chapterId": "immunology",
    "inventory": [
        {
            "visualId": "innate-vs-adaptive-immunity-sv1",
            "sourceBook": "First Aid for the USMLE Step 1 2026",
            "sourcePages": SRC119,
            "chapterId": "immunology",
            "visualType": "VISUAL_TABLE",
            "visualPurpose": "Innate vs adaptive five-axis comparison table",
            "sourceFigureDescription": "Five-row two-column table (COMPONENTS / MECHANISM / RESPONSE TO PATHOGENS / SECRETED PROTEINS / KEY FEATURES IN PATHOGEN RECOGNITION) contrasting innate (neutrophils... TLRs, PAMPs/DAMPs, NF-κB) with adaptive (T/B cells, V(D)J, memory, immunosenescence).",
            "requiredInKYP": True,
            "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
            "subsection": "Immunology — Cellular Components",
            "topicId": "innate-vs-adaptive-immunity",
            "implementationType": "ORIGINAL_KYP_ADAPTATION",
            "kypVisualId": None,
            "kypImplementation": "note-block",
            "kypLocation": "blocks[1] — 'Innate vs adaptive immunity — verbatim' table block",
            "qaStatus": "passed",
        },
    ],
    "coverageAudit": {
        "topicId": "innate-vs-adaptive-immunity",
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
    "notes": "pdfimages clean on pdf 119: no raster artwork exists on the printed page — the comparison table is the only visual element and is reproduced verbatim as a note-block. The registry visual 'innate-vs-adaptive-arms' is an additional original KYP teaching diagram (not a source-figure replacement), documented in the manifest notes.",
}

(ROOT / "content/usmle/manifests/innate-vs-adaptive-immunity.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/innate-vs-adaptive-immunity.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "innate-vs-adaptive-immunity":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: innate-vs-adaptive-immunity -> complete (1 sv)")
        break
else:
    print("ERROR: topic not found")
    sys.exit(1)
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("chapter immunology.json updated (3/24)")
