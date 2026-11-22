#!/usr/bin/env python3
"""M3 special-culture-requirements — manifest + visual inventory + chapter flip.

Microbiology topic 3/39 (Basic Bacteriology banner). Evidence pinned on
pdf 146 / book 124 (Special culture requirements: the 10-row BUG / MEDIA
USED FOR ISOLATION / MEDIA CONTENTS-OTHER directory).

Census (pdfimages + VLM 200-DPI read): p146 is a PURE VECTOR page — no
printed figures of any kind (pdfimages returns nothing; the VLM read
resolved the table's column assignments). VLM census resolved the two
ambiguous rows: Brucella row = media cell 'Buffered charcoal yeast
extract agar with cysteine and iron' + contents cell = the FA mnemonic
('The Ella siblings...'); Fungi row = contents cell '"Sab's a fun guy!"'.
C diphtheriae and M tuberculosis rows have blank contents cells.

The text layer emits rows in clean per-cell blocks (bug → media →
contents); physical-order quotes join them with \\n. FA's printed
mnemonics (the Ella siblings; 'Sab's a fun guy!') are quoted in manifest
evidence for VERIFICATION ONLY and carried verbatim in the note's table
block (they ARE the source's table text, per the E20+ precedent); they
are NOT reproduced in the registry visual; KYP originals replace them.
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
P = {p: norm(pages[p - 1]) for p in (146,)}

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

# --- p146: banners + table headers ---
E += [
    ("Section banner", "SEC TION II", 146),
    ("Chapter banner", "▶ MICROBIOLOGY—BASIC BACTERIOLOGY", 146),
    ("Section heading + table headers", "Special culture requirements\nBUG\nMEDIA USED FOR ISOLATION\nMEDIA CONTENTS/OTHER", 146),
]

# --- p146: the 10 rows (physical order: bug → media → contents) ---
E += [
    ("H influenzae row (full physical order)", "H influenzae\nChocolate agar\nFactors V (NAD+) and X (hematin)", 146),
    ("Thayer-Martin row (full physical order)", "N gonorrhoeae,\nN meningitidis\nThayer-Martin agar\nSelectively favors growth of Neisseria by\ninhibiting growth of gram ⊕ organisms\nwith vancomycin, gram ⊝ organisms except\nNeisseria with trimethoprim and colistin, and\nfungi with nystatin\nVery typically cultures Neisseria", 146),
    ("B pertussis row (full physical order; media cell carries both media)", "B pertussis\nBordet-Gengou agar (Bordet for Bordetella)\nRegan-Lowe medium\nPotato extract\nCharcoal, blood, and antibiotic", 146),
    ("C diphtheriae row (contents cell blank — physical order)", "C diphtheriae\nTellurite agar, Löffler medium", 146),
    ("M tuberculosis row (contents cell blank — physical order)", "M tuberculosis\nLöwenstein-Jensen medium, Middlebrook\nmedium, rapid automated broth cultures", 146),
    ("M pneumoniae row (full physical order)", "M pneumoniae\nEaton agar\nRequires cholesterol", 146),
    ("Lactose-fermenting enterics row (full physical order)", "Lactose-fermenting\nenterics\nMacConkey agar\nFermentation produces acid, causing colonies to\nturn pink", 146),
    ("E coli row (full physical order)", "E coli\nEosin–methylene blue (EMB) agar\nColonies with green metallic sheen", 146),
    ("Brucella row (full physical order; media cell = BCYE per VLM census)", "Brucella, Francisella,\nLegionella,\nPasteurella\nBuffered charcoal yeast extract agar with\ncysteine and iron", 146),
    ("FA mnemonic — Brucella row contents cell (verification only; IS the table text, carried in note table block)", "The Ella siblings, Bruce, Francis, a\nlegionnaire, and a pasteur (pastor), built the\nSistine (cysteine) chapel out of charcoal and\niron", 146),
    ("Fungi row (full physical order; contents cell = FA mnemonic, verification only)", "Fungi\nSabouraud agar\n“Sab’s a fun guy!”", 146),
    ("Printed book-page footer (page identity)", "FAS1_2026_03-Microbiology.indd 124", 146),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 146 / book 124)")

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

SRC = {"part": 1, "pdfPages": [146], "bookPages": "124–124"}

manifest = {
    "topicId": "special-culture-requirements",
    "title": "Special Culture Requirements",
    "chapterId": "microbiology",
    "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Basic Bacteriology",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["bug-media-matching-map"],
    "mechanismIds": ["medium-design-logic"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the directory; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "medium-design-logic",
            "summary": "The three-medium-jobs model (enrich = supply what the bug cannot make / select = poison everything else / indicate = report metabolism as color) applied row by row; the chocolate-agar lysis explanation ('heated blood releases V and X'); the Thayer-Martin as a Neisseria gate; the colonies-not-plate clarification for MacConkey; and the negative-culture-on-wrong-plate principle — with the Sabouraud low-pH mechanism and the heated-blood extension labeled as extensions.",
            "origin": "outside-first-aid",
            "rationale": "The source lists the directory without the design taxonomy or the mechanisms behind the media; these integrations are KYP's design.",
            "location": "core.keyIdea + mechanism caption + callout + patterns + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p146 is a PURE VECTOR page (pdfimages returns nothing; VLM 200-DPI census resolved the column assignments — Brucella row media cell = BCYE with contents cell = the FA mnemonic; Fungi row contents cell = the FA mnemonic; C diphtheriae and M tuberculosis rows have blank contents cells). Text layer emits clean per-cell blocks; physical-order quotes join bug → media → contents. ONE original KYP registry visual (bug-media-matching-map: three medium-job panels + the 10-row directory with job chips). MNEMONIC BOUNDARY (E22+ rule): FA's printed mnemonics ('The Ella siblings...'; '\"Sab's a fun guy!\"') quoted for verification and carried verbatim in the note's table block (they ARE the source's table text, per the E20+ precedent); NOT reproduced in the registry visual; KYP originals authored in the mnemonics field.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"special-culture-requirements-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "microbiology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Microbiology — Basic Bacteriology",
        "topicId": "special-culture-requirements",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "special-culture-requirements",
    "chapterId": "microbiology",
    "inventory": [
        svi(1, "VISUAL_TABLE", "Special culture requirements — the bug-to-medium directory table",
            "The printed 3-column table (BUG / MEDIA USED FOR ISOLATION / MEDIA CONTENTS-OTHER) with 10 rows: H influenzae (chocolate), N gonorrhoeae + N meningitidis (Thayer-Martin), B pertussis (Bordet-Gengou / Regan-Lowe), C diphtheriae (tellurite / Löffler), M tuberculosis (LJ / Middlebrook / rapid broth), M pneumoniae (Eaton), lactose-fermenting enterics (MacConkey), E coli (EMB), Brucella + Francisella + Legionella + Pasteurella (BCYE), Fungi (Sabouraud).",
            "ORIGINAL_KYP_ADAPTATION", "bug-media-matching-map", "registry-visual", "blocks[0] visual + blocks[1] note-block (the visual reorganizes the table by medium job; the table block carries it verbatim)"),
    ],
    "coverageAudit": {
        "topicId": "special-culture-requirements",
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
    "notes": "Census: pure vector page, no printed figures. The single source visual is the directory table itself — redrawn as ONE original KYP registry visual (bug-media-matching-map, job-organized) and carried verbatim as the note's table block. FA's printed mnemonics not reproduced in the visual.",
}

(ROOT / "content/usmle/manifests/special-culture-requirements.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/special-culture-requirements.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: microbiology 2/39 -> 3/39 ---
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "special-culture-requirements":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: special-culture-requirements -> complete, textbookVisuals rewritten (1 sv)")
        break
else:
    print("ERROR: special-culture-requirements not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter microbiology.json updated: {done}/{len(ch['topics'])} topics complete")
