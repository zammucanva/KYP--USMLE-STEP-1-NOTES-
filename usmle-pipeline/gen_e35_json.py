#!/usr/bin/env python3
"""E35 autoantibodies — manifest + visual inventory + chapter flip.

Immunology topic 18/24 (Immune Responses banner). Evidence pinned on
pdf 135 / book 113 (the Autoantibodies directory table — 26 antibody/disease
pairs). TABLE NOTE by inventory design: requiresVisual = false, no visual
hints — the note's table block IS the visual element (E22 pattern), and the
mechanism renders as the standard div-based flow.

Census: pdfimages on p135 returns ZERO images — pure vector/table page.
No FA mnemonic phrases printed on this page.
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
P = {p: norm(pages[p - 1]) for p in (135,)}

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
    ("Section heading", "Autoantibodies", 135),
    ("Table headers", "AUTOANTIBODY\nASSOCIATED DISORDER", 135),
    ("Anti-AChR", "Anti-postsynaptic ACh receptor\nMyasthenia gravis", 135),
    ("Anti-Ca channel", "Anti-presynaptic voltage-gated Ca2+ channel\nLambert-Eaton myasthenic syndrome", 135),
    ("Anti-β2 GPI", "Anti-β2 glycoprotein I\nAntiphospholipid syndrome", 135),
    ("ANA", "Antinuclear (ANA)\nNonspecific screening antibody, often associated\nwith SLE", 135),
    ("Anticardiolipin", "Anticardiolipin, lupus anticoagulant\nSLE, antiphospholipid syndrome", 135),
    ("Anti-dsDNA/Smith", "Anti-dsDNA, anti-Smith\nSLE", 135),
    ("Antihistone", "Antihistone\nDrug-induced lupus", 135),
    ("Anti-U1 RNP", "Anti-U1 RNP (ribonucleoprotein)\nMixed connective tissue disease", 135),
    ("RF + anti-CCP", "Rheumatoid factor (IgM antibody against IgG\nFc region), anti-cyclic citrullinated peptide\n(anti-CCP, more specific)\nRheumatoid arthritis", 135),
    ("Anti-Ro/La", "Anti-Ro/SSA, anti-La/SSB\nSjögren syndrome", 135),
    ("Anti-Scl-70", "Anti-Scl-70 (anti-DNA topoisomerase I)\nScleroderma (diffuse)", 135),
    ("Anticentromere", "Anticentromere\nLimited scleroderma (CREST syndrome)", 135),
    ("Myositis set", "Antisynthetase (eg, anti-Jo-1), anti-SRP, antihelicase (anti-Mi-2)\nPolymyositis, dermatomyositis", 135),
    ("Antimitochondrial", "Antimitochondrial\n1° biliary cholangitis", 135),
    ("Anti-smooth muscle/LKM1", "Anti-smooth muscle, anti-liver/kidney\nmicrosomal-1\nAutoimmune hepatitis", 135),
    ("p-ANCA", "Myeloperoxidase-antineutrophil cytoplasmic\nantibody (MPO-ANCA)/perinuclear ANCA\n(p-ANCA)\nMicroscopic polyangiitis, eosinophilic\ngranulomatosis with polyangiitis, ulcerative\ncolitis, 1° sclerosing cholangitis", 135),
    ("c-ANCA", "PR3-ANCA/cytoplasmic ANCA (c-ANCA)\nGranulomatosis with polyangiitis", 135),
    ("Anti-PLA2R", "Anti-phospholipase A2 receptor\n1° membranous nephropathy", 135),
    ("Anti-hemidesmosome", "Anti-hemidesmosome\nBullous pemphigoid", 135),
    ("Anti-desmoglein", "Anti-desmoglein (anti-desmosome)\nPemphigus vulgaris", 135),
    ("Thyroid pair", "Antithyroglobulin, antithyroid peroxidase\n(antimicrosomal)\nHashimoto thyroiditis", 135),
    ("Anti-TSHR", "Anti-TSH receptor\nGraves disease", 135),
    ("Celiac set", "IgA anti-endomysial, IgA anti-tissue\ntransglutaminase, IgA and IgG deamidated\ngliadin peptide\nCeliac disease", 135),
    ("T1DM set", "Anti-glutamic acid decarboxylase, islet cell\ncytoplasmic antibodies\nType 1 diabetes mellitus", 135),
    ("Pernicious anemia set", "Antiparietal cell, anti-intrinsic factor\nPernicious anemia", 135),
    ("Anti-GBM", "Anti-glomerular basement membrane\nGoodpasture syndrome", 135),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 135 / book 113)")

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

SRC135 = {"part": 1, "pdfPages": [135], "bookPages": "113"}

manifest = {
    "topicId": "autoantibodies",
    "title": "Autoantibodies and Their Disease Associations",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Immune Responses",
    "part": 1,
    "sourcePages": SRC135,
    "sourceEvidence": EVIDENCE,
    "visualIds": [],
    "mechanismIds": ["antibody-tissue-tropism-map"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the directory table; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "target-anatomy-and-specificity-model",
            "summary": "Reading the directory mechanistically (receptor antibodies are functional — stimulating/blocking; structural antibodies set the anatomic level — blister plane, basement membrane, subset) and by two-step matching with specificity tiers (ANA screens, dsDNA/Sm confirm, anti-CCP outspecifies RF, antihistone indicts the drug, ANCA patterns split by enzyme target).",
            "origin": "outside-first-aid",
            "rationale": "The source is a flat directory; the target-anatomy frame, the specificity-tier logic, and the contrast-pair organization are KYP's design. Clinical details in the patterns (Nikolsky sign, plasmapheresis, biopsy IF patterns, paraneoplastic SCLC) are labeled extension.",
            "location": "core.keyIdea + mechanism caption + callout + patterns + traps + pivots + miniCase distractors",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: pdfimages on p135 returns ZERO images — pure vector/table page. TABLE NOTE by inventory design (requiresVisual false, no visual hints): the note's 26-row verbatim table IS the visual element (E22 pattern); the MechanismFlow renders as the standard div-based flow; the page's only SVGs are 12-20px UI icons. No FA mnemonic phrases printed on this page. Boundary: pdf 132-134 (Hypersensitivity types) is owned by the pilot topic hypersensitivity-types [131-134, complete] — verified, no gap. pdf 136 begins E36 b-cell-immunodeficiencies.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"autoantibodies-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC135,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Immune Responses",
        "topicId": "autoantibodies",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "autoantibodies",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "VISUAL_TABLE", "Autoantibodies — the 26-pair serology directory table",
            "A two-column table (AUTOANTIBODY / ASSOCIATED DISORDER) with 26 rows spanning neurologic (ACh receptor, Ca2+ channel), rheumatologic (ANA, dsDNA/Smith, antiphospholipid set, histone, U1 RNP, RF/CCP, Ro/La, Scl-70, centromere, myositis set, ANCA pair), hepatic/GI (mitochondrial, smooth muscle/LKM1, celiac set), endocrine (thyroid set, TSHR, GAD/islet, parietal/intrinsic factor), renal (PLA2R, GBM), and dermatologic (hemidesmosome, desmoglein) antibodies.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[0] — 'Autoantibodies and associated disorders — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "autoantibodies",
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
    "notes": "Census: pure vector page (zero rasters). The 26-pair directory is reproduced verbatim as the note's table block (the page's only visual element, per the E22 table-note pattern). No registry visual by inventory design (requiresVisual false); the MechanismFlow renders as a div-based flow.",
}

(ROOT / "content/usmle/manifests/autoantibodies.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/autoantibodies.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 17/24 -> 18/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "autoantibodies":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: autoantibodies -> complete, textbookVisuals rewritten (1 sv)")
        break
else:
    print("ERROR: autoantibodies not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
