#!/usr/bin/env python3
"""E41 recombinant-cytokines — manifest + visual inventory + chapter flip.

Immunology topic 24/24 — the FINAL topic of the Immunology chapter
(Immunosuppressants banner). Evidence pinned on pdf 141 / book 119
(Recombinant cytokines and clinical uses — the CYTOKINE/AGENT/CLINICAL USES
table in the lower half of the page; the upper half belongs to E40).

TABLE NOTE by inventory design: requiresVisual = false, no visual hints —
the note's verbatim table IS the visual element (E22/E35 pattern).

Census: p141's two content rasters (188x123 + 150x133 cmyk) are the
ataxia-telangiectasia photo and the giant-granules smear — both owned by
E37 (pinned there); no content rasters belong to this topic's section.
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
P = {p: norm(pages[p - 1]) for p in (141,)}

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
    ("Section heading", "Recombinant cytokines and clinical uses", 141),
    ("Table headers", "CYTOKINE\nAGENT\nCLINICAL USES", 141),
    ("Erythropoietin — agent + uses", "Erythropoietin\nEpoetin alfa (EPO analog)\nAnemias (especially in renal failure)\nAssociated with ↑ risk of hypertension,\nthromboembolic events", 141),
    ("Colony stimulating factors — agents + uses", "Colony stimulating\nfactors\nFilgrastim (G-CSF), sargramostim (GM-CSF)\nLeukopenia; recovery of granulocyte and\nmonocyte counts", 141),
    ("Thrombopoietin — agents + uses", "Thrombopoietin\nRomiplostim (TPO analog), eltrombopag (think\n“elthrombopag.” TPO receptor agonist)\nAutoimmune thrombocytopenia\nPlatelet stimulator", 141),
    ("Interleukin-2 — agent + uses", "Interleukin-2\nAldesleukin\nRenal cell carcinoma, metastatic melanoma", 141),
    ("Interferons — header + IFN-α uses", "Interferons\nIFN-α\nChronic hepatitis C (not preferred) and B, renal\ncell carcinoma", 141),
    ("IFN-β use", "IFN-β\nMultiple sclerosis", 141),
    ("IFN-γ use", "IFN-γ\nChronic granulomatous disease", 141),
    ("Category banner 1", "Bone marrow stimulation", 141),
    ("Category banner 2", "Immunotherapy", 141),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 141 / book 119)")

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

SRC141 = {"part": 1, "pdfPages": [141], "bookPages": "119"}

manifest = {
    "topicId": "recombinant-cytokines",
    "title": "Recombinant Cytokines & Clinical Uses",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Immunosuppressants",
    "part": 1,
    "sourcePages": SRC141,
    "sourceEvidence": EVIDENCE,
    "visualIds": [],
    "mechanismIds": ["native-biology-to-drug-map"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the cytokine table; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "native-biology-loop-closure-model",
            "summary": "The two-banner formulary read as the chapter's biology recombinantly delivered (one lineage-grower per blood line: EPO/CSF/TPO; the amplifiers keeping their native jobs: IL-2 expanding antitumor T cells, the interferons aiming antiviral/MS/macrophage-arming therapy) — with the loop-closing observation that IFN-γ for CGD is exactly E32/E37's deficiency supported by E31's cytokine.",
            "origin": "outside-first-aid",
            "rationale": "The source is a flat table without the category logic or the chapter-loop framing; these integrations are KYP's design. Extension labels cover capillary-leak syndrome, eltrombopag hepatotoxicity, and the additional EPO/ITP indications.",
            "location": "core.keyIdea + mechanism caption + callout + patterns + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "chapter-complete",
    "notes": "TABLE NOTE by inventory design (requiresVisual false, no visual hints — E22/E35 pattern): the note's verbatim cytokine table IS the visual element; the MechanismFlow renders as the standard div-based flow; page SVGs are UI icons only. Census: p141's two content rasters (telangiectasia photo, giant-granules smear) belong to E37 (pinned there) — no content rasters in this topic's section. This is the FINAL Immunology topic: with E41 complete the chapter reaches 24/24 and the Immunology chapter is COMPLETE (extractionStatus verified + completedAt set). Boundary: the immunosuppressant drug table in p141's upper half is owned by E40 (pinned there).",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"recombinant-cytokines-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC141,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Immunosuppressants",
        "topicId": "recombinant-cytokines",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "recombinant-cytokines",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "VISUAL_TABLE", "Recombinant cytokines — the CYTOKINE/AGENT/CLINICAL USES table",
            "A three-column table (CYTOKINE / AGENT / CLINICAL USES) with rows for Erythropoietin (epoetin alfa), Colony stimulating factors (filgrastim, sargramostim), Thrombopoietin (romiplostim, eltrombopag), Interleukin-2 (aldesleukin), and Interferons (IFN-α, IFN-β, IFN-γ), closed by the two category banners (Bone marrow stimulation; Immunotherapy).",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[0] — 'Recombinant cytokines — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "recombinant-cytokines",
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
    "notes": "Census: no content rasters in this topic's section (p141's two rasters are E37's micrographs). The cytokine table is reproduced verbatim as the note's table block (the section's only visual element, per the E22 table-note pattern). No registry visual by inventory design.",
}

(ROOT / "content/usmle/manifests/recombinant-cytokines.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/recombinant-cytokines.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 23/24 -> 24/24 COMPLETE ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "recombinant-cytokines":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: recombinant-cytokines -> complete, textbookVisuals rewritten (1 sv)")
        break
else:
    print("ERROR: recombinant-cytokines not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
    print("CHAPTER IMMUNOLOGY COMPLETE — extractionStatus=verified, completedAt set")
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
