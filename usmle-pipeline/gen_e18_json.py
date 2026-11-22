#!/usr/bin/env python3
"""E18 familial-dyslipidemias — manifest + visual inventory + chapter flip.

Final Biochemistry topic (55/55). Evidence pinned on pdf 114 (book 92).
Same verification rules as gen_e16/e17_json.py (norm containment, >=3 char
floor, loud failures).

Census note (200-DPI VLM + pdfimages, this rebuild): p114 carries exactly one
raster (185x164 cmyk jpeg = the abetalipoproteinemia histology micrograph,
"arrow in A"); every other visual element on the page is text/table. Three
accounted visual elements on the printed page: (1) the histology micrograph,
(2) the familial dyslipidemias type table, (3) the lipoprotein functions prose
section — element (3) is OWNED by lipid-transport's inventory (sv5) and is not
re-claimed here. Seed correction (documented): the seed sv2 description claimed
"type I-V" — the printed table has only types I, II, III, IV (NO type V row).
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
P = {p: norm(pages[p - 1]) for p in (114,)}

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

# --- p114: subsection banner + abetalipoproteinemia block ---
E += [
    ("Subsection banner", "BIOCHEMISTRY—METABOLISM", 114),
    ("Section heading", "Abetalipoproteinemia", 114),
    ("Inheritance + molecular defect", "Autosomal recessive. Mutation in gene that encodes microsomal transfer protein (MTP).", 114),
    ("Absent particles", "Chylomicrons, VLDL, LDL absent.", 114),
    ("ApoB deficiency", "Deficiency in apo B48 – and apo B100 –containing lipoproteins.", 114),
    ("Infant presentation", "Affected infants present with severe fat malabsorption, steatorrhea, failure to thrive.", 114),
    ("Later manifestations", "Later manifestations include retinitis pigmentosa, spinocerebellar degeneration due to vitamin E\ndeficiency, progressive ataxia, acanthocytosis.", 114),
    ("Biopsy finding + figure pointer", "Intestinal biopsy shows lipid-laden enterocytes\n(arrow in A ).", 114),
    ("Treatment", "Treatment: restriction of long-chain fatty acids, large doses of oral vitamin E.", 114),
]

# --- p114: familial dyslipidemias table ---
E += [
    ("Table heading", "Familial dyslipidemias", 114),
    ("Column header row", "TYPE\nINHERITANCE\nPATHOGENESIS\n↑ BLOOD LEVEL\nCLINICAL", 114),
    ("Type I name", "I—Hyperchylomicronemia", 114),
    ("Type I pathogenesis", "Lipoprotein lipase or\napo CII deficiency", 114),
    ("Type I blood level", "Chylomicrons, TG,\ncholesterol", 114),
    ("Type I clinical", "Pancreatitis,\nhepatosplenomegaly, and\neruptive/pruritic xanthomas\n(no ↑ risk for atherosclerosis).\nCreamy layer in supernatant.", 114),
    ("Type II name", "II—Hypercholesterolemia", 114),
    ("Type II pathogenesis", "Absent or defective\nLDL receptors, or\ndefective apo B100", 114),
    ("Type II blood level", "IIa: LDL, cholesterol\nIIb: LDL, cholesterol,\nVLDL", 114),
    ("Type II clinical", "Heterozygotes (1:500) have\ncholesterol ≈300 mg/dL;\nhomozygotes (very rare) have\ncholesterol ≥700 mg/dL.\nAccelerated atherosclerosis (may\nhave MI before age 20), tendon\n(Achilles) xanthomas, and\ncorneal arcus.", 114),
    ("Type III name", "III—Dysbetalipoproteinemia", 114),
    ("Type III pathogenesis", "ApoE (defective in\ntype thrEE)", 114),
    ("Type III blood level", "Chylomicrons and\nVLDL remnants,\nTG", 114),
    ("Type III clinical", "Premature atherosclerosis,\ntuberoeruptive and palmar\nxanthomas.", 114),
    ("Type IV name", "IV—Hypertriglyceridemia", 114),
    ("Type IV pathogenesis", "Hepatic\noverproduction of\nVLDL", 114),
    ("Type IV blood level", "VLDL, TG", 114),
    ("Type IV clinical", "Hypertriglyceridemia (>1000\nmg/dL) can cause acute\npancreatitis. Related to insulin\nresistance.", 114),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 114 / book 92)")

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

SRC114 = {"part": 1, "pdfPages": [114], "bookPages": "92"}

manifest = {
    "topicId": "familial-dyslipidemias",
    "title": "Abetalipoproteinemia & Familial Dyslipidemias",
    "chapterId": "biochemistry",
    "chapterTitle": "Biochemistry",
    "subsection": "Metabolism — Dyslipidemias",
    "part": 1,
    "sourcePages": SRC114,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["lipid-laden-enterocytes"],
    "mechanismIds": ["mtp-assembly-failure", "dyslipidemia-step-map"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the abetalipoproteinemia paragraph and the four-type table; the USMLE question attack structure (stem patterns, traps, look-alike pivots, mini-case with distractors) is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "transport-map-failure-model",
            "summary": "Reading every dyslipidemia as one broken step of the E17 lipid-transport map: step 3 broken = type I (LPL/apo CII), step 7 broken = type II (LDL receptor/apo B100), the apoE return address broken = type III, step 4 overactive = type IV; abetalipoproteinemia = the whole map shut down at MTP assembly.",
            "origin": "outside-first-aid",
            "rationale": "The source presents the four diseases as isolated table rows; unifying them as four single-arrow cuts of the transport circuit (plus the total-failure MTP counterpart) is KYP's integrative model.",
            "location": "core.keyIdea + mechanism 'dyslipidemia-step-map' + pivot 2 + mnemonic 2",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "chapter-complete",
    "notes": "Seed corrections (documented): (1) the seed sv2 description claimed 'type I–V' — the printed table carries only types I, II, III, IV (NO type V row); corrected in inventory and chapter seed (productionRationale edited to 'type I–IV'). (2) Census (pdfimages + 200-DPI render): p114 has exactly one raster (185×164 cmyk jpeg = the histology micrograph 'arrow in A'); the third accounted visual element on the page (Lipoprotein functions prose section) is owned by lipid-transport's inventory sv5 and is not re-claimed here. The table is reproduced verbatim as the note's table block; the histology finding is conveyed by the ORIGINAL_KYP_REDRAW schematic (never a reproduction or fake micrograph).",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"familial-dyslipidemias-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC114,
        "chapterId": "biochemistry",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Metabolism — Dyslipidemias",
        "topicId": "familial-dyslipidemias",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "familial-dyslipidemias",
    "chapterId": "biochemistry",
    "inventory": [
        svi(1, "HISTOLOGY", "Abetalipoproteinemia intestinal biopsy — lipid-laden enterocytes (arrow in A)",
            "Light micrograph of a small-intestinal villus: enterocytes cleared and distended by lipid they cannot export as apo B48-containing chylomicrons, with the printed arrow marking a lipid-laden enterocyte (figure A on the printed page).",
            "ORIGINAL_KYP_REDRAW", "lipid-laden-enterocytes", "registry-visual"),
        svi(2, "VISUAL_TABLE", "Familial dyslipidemias type I–IV comparison table",
            "Five-column table (TYPE / INHERITANCE / PATHOGENESIS / ↑ BLOOD LEVEL / CLINICAL) with four rows: I—Hyperchylomicronemia (AR, LPL or apo CII deficiency), II—Hypercholesterolemia (AD, LDL receptor or apo B100; IIa/IIb), III—Dysbetalipoproteinemia (AR, apoE 'defective in type thrEE'), IV—Hypertriglyceridemia (AD, hepatic VLDL overproduction).",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] — 'Familial dyslipidemias — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "familial-dyslipidemias",
        "textbookVisualCount": 2,
        "accountedFor": 2,
        "sourceReproductions": 0,
        "kypRedraws": 1,
        "kypOriginals": 1,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: p114 carries 3 accounted visual elements; the third (the Lipoprotein functions prose section at the top of the page) is owned by lipid-transport's visual inventory (sv5) and is deliberately not re-claimed here — no double-claiming, no silent omission. Seed sv2 corrected: claimed 'type I–V'; the printed table has types I–IV only (no type V). Histology conveyed as an original schematic per the rights rule (COPYRIGHTED_NO_REPUBLISH — never reproduced).",
}

(ROOT / "content/usmle/manifests/familial-dyslipidemias.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/familial-dyslipidemias.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

ch_path = ROOT / "content/usmle/chapters/biochemistry.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "familial-dyslipidemias":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        # documented seed correction: the printed table has types I-IV only
        t["productionRationale"] = t["productionRationale"].replace("type I–V dyslipidemia patterns", "type I–IV dyslipidemia patterns")
        print("chapter: familial-dyslipidemias -> complete, textbookVisuals rewritten (2 sv)")
        break
else:
    print("ERROR: familial-dyslipidemias not found in chapter topics")
    sys.exit(1)
ch["extractionStatus"] = "verified"
ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("chapter biochemistry.json updated: extractionStatus=verified, completedAt set")
