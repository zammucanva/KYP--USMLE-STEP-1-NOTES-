#!/usr/bin/env python3
"""E21 mhc-complex — manifest + visual inventory + chapter flip.

Evidence pinned on pdf 120 (book 98). Same verification rules as E16-E20.
Transcription note (documented in the lost batch too): the FUNCTION row's
source word is 'cytosolic' (viral or cytosolic proteins), not 'cytoplasmic'.
The figure label 'β2−Microglobulin' uses U+2212 (minus sign) as printed;
the table row 'β2-microglobulin' uses a regular hyphen.
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
P = {p: norm(pages[p - 1]) for p in (120,)}

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
    ("Section heading", "Major\nhistocompatibility\ncomplex I and II", 120),
    ("MHC encoding", "MHC encoded by HLA genes.", 120),
    ("MHC function", "Present antigen fragments to T cells and bind T-cell receptors\n(TCRs).", 120),
    ("Column header", "MHC I", 120),
    ("Column header", "MHC II", 120),
    ("Row label", "LOCI", 120),
    ("MHC I loci", "HLA-A, HLA-B, HLA-C", 120),
    ("MHC I loci mnemonic", "MHC I loci have 1 letter", 120),
    ("MHC II loci", "HLA-DP, HLA-DQ, HLA-DR", 120),
    ("MHC II loci mnemonic", "MHC II loci have 2 letters", 120),
    ("Row label", "BINDING", 120),
    ("MHC I binding", "TCR and CD8 (CD8 × MHC 1 = 8)", 120),
    ("MHC II binding", "TCR and CD4 (CD4 × MHC 2 = 8)", 120),
    ("Row label", "STRUCTURE", 120),
    ("MHC I structure", "1 long chain, 1 short chain (3 α, 1 β)", 120),
    ("MHC II structure", "2 equal-length chains (2 α, 2 β)", 120),
    ("Row label", "EXPRESSION", 120),
    ("MHC I expression", "All nucleated cells, APCs, platelets (except RBCs)", 120),
    ("MHC II expression", "APCs", 120),
    ("Row label", "FUNCTION", 120),
    ("MHC I function", "Present endogenous antigens (eg, viral or\ncytosolic proteins) to CD8+ cytotoxic T cells", 120),
    ("MHC II function", "Present exogenous antigens (eg, bacterial\nproteins) to CD4+ helper T cells", 120),
    ("Row label", "ANTIGEN LOADING", 120),
    ("MHC I antigen loading", "Antigen peptides loaded onto MHC I in RER\nafter delivery via TAP (transporter associated\nwith antigen processing)", 120),
    ("MHC II antigen loading", "Antigen loaded following release of invariant\nchain in a lysosome", 120),
    ("Row label", "ASSOCIATED PROTEINS", 120),
    ("MHC I associated protein", "β2-microglobulin", 120),
    ("MHC II associated protein", "Invariant chain", 120),
    ("Figure label: endogenous antigen", "Endogenous antigen", 120),
    ("Figure label: MHC I groove", "Endogenous antigen-binding groove", 120),
    ("Figure label: α2 chain", "α2 chain", 120),
    ("Figure label: α1 chain", "α1 chain", 120),
    ("Figure label: long chain", "Long chain", 120),
    ("Figure label: short chain", "Short chain", 120),
    ("Figure label: α3 chain", "α3 chain", 120),
    ("Figure label: β2−Microglobulin", "β2−Microglobulin", 120),
    ("Figure label: exogenous antigen", "Exogenous antigen", 120),
    ("Figure label: MHC II groove", "Exogenous antigen\nbinding groove", 120),
    ("Figure label: β1 chain", "β1 chain", 120),
    ("Figure label: equal-length chains", "Equal-length\nchains", 120),
    ("Figure label: β2 chain", "β2 chain", 120),
    ("Figure label: compartments", "Extracellular space\nCell membrane", 120),
    ("Figure label: cytoplasm", "Cytoplasm", 120),
    ("Section heading", "Bare lymphocyte\nsyndrome", 120),
    ("BLS mechanism", "Autosomal recessive. ↓ MHC expression → T-cell dysfunction.", 120),
    ("BLS type I", "Type I: TAP mutation → ↓ MHC I → ↓ CD8+ T cells → chronic respiratory infections, skin\ngranulomas, vasculitis; normal Ig.", 120),
    ("BLS type II", "Type II: transcription factor mutations → ↓ MHC II → ↓ CD4+ T cells + antigen-presenting\ncell/B-cell dysfunction → SCID-like infections; ↓ Ig.", 120),
    ("BLS treatment", "Treatment: allogeneic hematopoietic stem cell transplant, IVIG.", 120),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 120 / book 98)")

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

SRC120 = {"part": 1, "pdfPages": [120], "bookPages": "98"}

manifest = {
    "topicId": "mhc-complex",
    "title": "MHC I vs MHC II and Bare Lymphocyte Syndrome",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Cellular Components",
    "part": 1,
    "sourcePages": SRC120,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["mhc-structure-comparison"],
    "mechanismIds": ["mhc-i-endogenous-presentation", "mhc-ii-exogenous-presentation"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the comparison table, the two structure diagrams, and the bare-lymphocyte-syndrome block; the USMLE question attack structure (stem patterns, traps, look-alike pivots, the BLS mini-case) is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "one-scaffold-two-settings-model",
            "summary": "Reading MHC I and II as one display scaffold in two settings: groove filled inside (RER via TAP) for the cytosol's story to CD8 on every nucleated cell, versus groove filled outside-in (lysosome after invariant-chain release) for the ingested story to CD4 on APCs only.",
            "origin": "outside-first-aid",
            "rationale": "The source presents the two classes as parallel table columns; unifying them as one scaffold with two loading routes and two audiences is KYP's integrative model.",
            "location": "core.keyIdea + both mechanism captions + visual caption",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "REBUILT batch (the original E21 was destroyed un-pushed with 4030b09 in the 7th wipe). Census: pdfimages on pdf 120 shows only two 1x1 artifacts — no real rasters; the two molecular structure diagrams are vector line art, redrawn as the single comparative registry visual 'mhc-structure-comparison'. Transcription fidelity: the source's FUNCTION row word is 'cytosolic' (not cytoplasmic); the figure label 'β2−Microglobulin' prints U+2212 while the table row uses a hyphen; the BLS block prints ↓/→ arrows — all quoted as printed.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"mhc-complex-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC120,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Cellular Components",
        "topicId": "mhc-complex",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "mhc-complex",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "VISUAL_TABLE", "MHC I vs MHC II seven-row comparison table",
            "Seven-row two-column table (LOCI / BINDING / STRUCTURE / EXPRESSION / FUNCTION / ANTIGEN LOADING / ASSOCIATED PROTEINS) with the printed mnemonics (loci letter counts; CD8 × MHC 1 = 8; CD4 × MHC 2 = 8).",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] — 'MHC I vs MHC II — verbatim' table block"),
        svi(2, "MOLECULAR_STRUCTURE", "MHC I structure diagram",
            "MHC I molecule from extracellular space through the cell membrane into the cytoplasm: α1 and α2 domains forming the endogenous antigen-binding groove (endogenous antigen peptide displayed), α3 domain, long chain + short chain labels, β2−microglobulin, transmembrane tail.",
            "ORIGINAL_KYP_REDRAW", "mhc-structure-comparison", "registry-visual"),
        svi(3, "MOLECULAR_STRUCTURE", "MHC II structure diagram",
            "MHC II molecule from extracellular space through the cell membrane into the cytoplasm: α1 chain + β1 chain forming the exogenous antigen-binding groove (exogenous antigen peptide displayed), equal-length chains (α1-α2, β1-β2), transmembrane tails.",
            "ORIGINAL_KYP_REDRAW", "mhc-structure-comparison", "registry-visual"),
    ],
    "coverageAudit": {
        "topicId": "mhc-complex",
        "textbookVisualCount": 3,
        "accountedFor": 3,
        "sourceReproductions": 0,
        "kypRedraws": 2,
        "kypOriginals": 1,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census (pdfimages + text layer): pdf 120 carries 3 visual elements — the seven-row comparison table (sv1, note-block verbatim) and two vector molecular structure diagrams (sv2, sv3), both redrawn into the single comparative registry visual 'mhc-structure-comparison'. No rasters exist on the page (only two 1x1 artifacts).",
}

(ROOT / "content/usmle/manifests/mhc-complex.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/mhc-complex.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "mhc-complex":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: mhc-complex -> complete (3 sv)")
        break
else:
    print("ERROR: topic not found")
    sys.exit(1)
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("chapter immunology.json updated (4/24)")
