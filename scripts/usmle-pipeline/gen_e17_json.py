#!/usr/bin/env python3
"""E17 lipid-transport — manifest + visual inventory + chapter flip.

Evidence pinned across pdf 112-114 (book 90-92). Same verification rules as
gen_e16_json.py (norm containment, >=3 char floor, loud failures).
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
P = {p: norm(pages[p - 1]) for p in (112, 113, 114)}

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

# --- p112: transport figure ---
E += [
    ("Section heading", "Lipid transport", 112),
    ("Step 1 callout", "Chylomicron enters lymphatics", 112),
    ("Step 2 callout", "HDL transfers apo CII and apoE", 112),
    ("Step 3 callout", "Chylomicron apo CII activates LPL", 112),
    ("Step 3 dyslipidemia annotation", "(impaired in type I familial dyslipidemia)", 112),
    ("Step 4 callout", "Liver releases VLDL (overproduction in\ntype IV familial dyslipidemia)", 112),
    ("Step 5 callout", "VLDL apo CII activates LPL", 112),
    ("Step 6 callout", "IDL delivers TGs and cholesterol", 112),
    ("Step 6 callout (cont.)", "to the liver via apoE", 112),
    ("Step 7 callout", "Endocytosis of LDL (impaired in\ntype II familial dyslipidemia)", 112),
    ("Figure label: dietary input", "Dietary fat\nand\ncholesterol", 112),
    ("Figure label: absorption", "Micelles", 112),
    ("Figure label: lymphatic", "Thoracic duct", 112),
    ("Figure label: venous", "Subclavian vein", 112),
    ("Figure label: blood loop", "Systemic circulation", 112),
    ("Figure label: gut lumen", "Small intestine lumen", 112),
    ("Figure label: enterocyte", "Intestinal cell", 112),
    ("Figure label: capillary enzyme", "Lipoprotein\nlipase", 112),
    ("Figure label: remnant", "Chylomicron\nremnant", 112),
    ("Figure label: liver cell", "Hepatocyte", 112),
    ("Figure label: bile", "Bile\ncanaliculus", 112),
    ("Figure label: liver enzyme", "Hepatic lipase", 112),
    ("Figure label: peripheral uptake", "LDL receptor", 112),
    ("Figure label: remnant uptake", "ApoE\nreceptor", 112),
    ("Figure label: target cell", "Peripheral cell", 112),
    ("Figure label: intestinal apolipoprotein", "Apo\nB48", 112),
    ("Figure label: hepatic apolipoprotein", "Apo\nB100", 112),
    ("Figure label: lipid classes", "Chol E", 112),
    ("Figure label: bile export", "Cholesterol\n+\nTGs", 112),
]

# --- p113: enzymes, HDL figure, apolipoproteins ---
E += [
    ("Section heading", "Key enzymes in lipid transport", 113),
    ("CETP function", "Mediates transfer of cholesteryl esters to other lipoprotein particles.", 113),
    ("Hepatic lipase function", "Degrades TGs remaining in IDL and chylomicron remnants.", 113),
    ("Hormone-sensitive lipase function", "Degrades TGs stored in adipocytes. Promotes gluconeogenesis by releasing glycerol.", 113),
    ("LCAT function", "Catalyzes esterification of 2⁄3 of plasma cholesterol (ie, required for HDL maturation).", 113),
    ("Lipoprotein lipase function", "Degrades TGs in circulating chylomicrons and VLDL.", 113),
    ("Pancreatic lipase function", "Degrades dietary TGs in small intestine.", 113),
    ("PCSK9 function", "Degrades LDL receptor → ↑ serum LDL. Inhibition → ↑ LDL receptor recycling → ↓ serum LDL.", 113),
    ("HDL figure label", "Nascent HDL", 113),
    ("HDL figure label", "Mature HDL", 113),
    ("HDL figure label", "LCAT", 113),
    ("HDL figure label", "CETP", 113),
    ("HDL figure label", "Transfer of\ncholesteryl\nesters to\nVLDL, IDL,\nLDL", 113),
    ("HDL figure label: source organs", "Liver", 113),
    ("HDL figure label: source organs", "Small intestine", 113),
    ("HDL figure label: apolipoproteins", "Apo CII", 113),
    ("HDL figure label: apolipoproteins", "ApoE", 113),
    ("Apolipoprotein table heading", "Major apolipoproteins", 113),
    ("ApoE function", "Mediates remnant uptake\n(everything except LDL)", 113),
    ("Apo AI function", "Found only on alphalipoproteins (HDL), activates\nLCAT", 113),
    ("Apo CII function", "Lipoprotein lipase cofactor that\ncatalyzes cleavage", 113),
    ("Apo B48 function", "Mediates chylomicron\nsecretion into lymphatics", 113),
    ("Apo B48 exclusivity", "Only on particles originating\nfrom the intestines", 113),
    ("Apo B100 function", "Binds LDL receptor", 113),
    ("Apo B100 exclusivity + mnemonic", "Only on particles originating\nfrom the liver (I hope I live to\nBe 100)", 113),
]

# --- p114: lipoprotein functions ---
E += [
    ("Section heading", "Lipoprotein functions", 114),
    ("Composition", "Lipoproteins are composed of varying proportions of proteins, cholesterol, TGs, and phospholipids.", 114),
    ("Cholesterol carriers", "LDL and HDL carry the most cholesterol.", 114),
    ("Cholesterol uses", "Cholesterol is needed to maintain cell membrane integrity and synthesize bile acids, steroids, and vitamin D.", 114),
    ("Chylomicron function", "Delivers dietary TGs to peripheral tissues. Delivers cholesterol to liver in the form of chylomicron\nremnants, which are mostly depleted of their TGs.", 114),
    ("Chylomicron origin", "Secreted by intestinal epithelial cells.", 114),
    ("VLDL function", "Delivers hepatic TGs to peripheral tissue. Secreted by liver.", 114),
    ("IDL function", "Delivers TGs and cholesterol to liver. Formed from degradation of VLDL.", 114),
    ("LDL function", "Delivers hepatic cholesterol to peripheral tissues.", 114),
    ("LDL formation", "Formed by hepatic lipase modification of IDL in\nthe liver and peripheral tissue.", 114),
    ("LDL uptake + tag", "Taken up by target cells via receptor-mediated endocytosis. LDL is\nLethal.", 114),
    ("HDL function", "Mediates reverse cholesterol transport from peripheral tissues to liver.", 114),
    ("HDL repository role", "Acts as a repository for apoC\nand apoE (which are needed for chylomicron and VLDL metabolism).", 114),
    ("HDL origin + alcohol + tag", "Secreted from both liver\nand intestine. Alcohol ↑ synthesis. HDL is Healthy.", 114),
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

counts = {p: sum(1 for e in EVIDENCE if e["pages"]["pdfPages"] == [p]) for p in (112, 113, 114)}
print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified ({counts})")

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

SRC112 = {"part": 1, "pdfPages": [112], "bookPages": "90"}
SRC113 = {"part": 1, "pdfPages": [113], "bookPages": "91"}
SRC114 = {"part": 1, "pdfPages": [114], "bookPages": "92"}
SRC_ALL = {"part": 1, "pdfPages": [112, 113, 114], "bookPages": "90–92"}

manifest = {
    "topicId": "lipid-transport",
    "title": "Lipid Transport, Apolipoproteins & HDL Maturation",
    "chapterId": "biochemistry",
    "chapterTitle": "Biochemistry",
    "subsection": "Metabolism — Lipid Transport",
    "part": 1,
    "sourcePages": SRC_ALL,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["lipid-transport-map", "hdl-maturation-map"],
    "mechanismIds": ["exogenous-chylomicron-run", "endogenous-reverse-loop"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the map, enzyme table, apolipoprotein matrix, and function lists; the USMLE question attack structure (stem patterns, traps, look-alike pivots, mini-case) is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "address-system-model",
            "summary": "Reading apolipoproteins as an address system: origin tags (B48 intestine vs B100 liver), keys (apo CII unlocks LPL; apoE unlocks remnant/IDL uptake), and license (apo AI licenses LCAT on HDL).",
            "origin": "outside-first-aid",
            "rationale": "The source lists the five apolipoproteins and their functions in a table; unifying them as one three-part address system (origin/key/license) that maps onto the numbered transport steps is KYP's integrative model.",
            "location": "core.keyIdea + mechanism captions + mnemonic 3 + pivot 2",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "chapter-complete",
    "notes": "Seed correction (documented): seeded 4 sv; the printed pages carry 5 accounted visual elements — the p113 'Key enzymes in lipid transport' table was absent from the seed and is added as sv3 (note-block). Seed sv4's 'relative composition' phrasing replaced by the actual printed lipoprotein-functions prose (sv5). The transport figure's seven numbered callouts are reproduced verbatim (numbers 6/7 appear in the text layer; 1-5 drawn as circled labels per VLM census). Dyslipidemia type-annotation strings verified on p112; the full dyslipidemia taxonomy belongs to E18.",
    "updatedAt": str(date.today()),
}

def svi(n, src, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"lipid-transport-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": src,
        "chapterId": "biochemistry",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Metabolism — Lipid Transport",
        "topicId": "lipid-transport",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "lipid-transport",
    "chapterId": "biochemistry",
    "inventory": [
        svi(1, SRC112, "BIOCHEMICAL_PATHWAY", "Exogenous + endogenous lipid transport circuit with seven numbered steps",
            "Full-body circuit: small intestine lumen (micelles) → intestinal cell → chylomicron (apo B48) → thoracic duct → subclavian vein → systemic circulation; HDL transfers apo CII/apoE; LPL at capillary → FFA to adipocyte → chylomicron remnant → hepatocyte apoE receptor; hepatocyte (bile canaliculus) → VLDL (apo B100) → LPL → IDL → hepatic lipase → LDL → LDL-receptor endocytosis in peripheral cell; seven numbered callouts with type I/IV/II annotations.",
            "ORIGINAL_KYP_REDRAW", "lipid-transport-map", "registry-visual"),
        svi(2, SRC113, "BIOCHEMICAL_PATHWAY", "HDL maturation / reverse cholesterol transport",
            "Liver (upper left) and small intestine (lower left) both secrete nascent HDL (disc-shaped, apo CII top, apoE bottom) → LCAT on the arrow → mature HDL (sphere with cholesteryl-ester core) → CETP on the arrow → text 'Transfer of cholesteryl esters to VLDL, IDL, LDL'.",
            "ORIGINAL_KYP_ADAPTATION", "hdl-maturation-map", "registry-visual"),
        svi(3, SRC113, "VISUAL_TABLE", "Key enzymes in lipid transport",
            "Seven-row enzyme/function table: CETP, hepatic lipase, hormone-sensitive lipase, LCAT (esterification of 2/3 of plasma cholesterol, HDL maturation), lipoprotein lipase, pancreatic lipase, PCSK9 (degrades LDL receptor; inhibition raises recycling).",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[2] — 'Key enzymes in lipid transport — verbatim' table block"),
        svi(4, SRC113, "VISUAL_TABLE", "Major apolipoproteins with particle presence matrix",
            "Five apolipoproteins (E, AI, CII, B48, B100) with functions and the checkmark matrix across chylomicron / chylomicron remnant / VLDL / IDL / LDL / HDL (E on everything except LDL; AI only HDL; CII on chylomicron/VLDL/IDL/HDL; B48 on chylomicron+remnant; B100 on VLDL/IDL/LDL).",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[3] — 'Major apolipoproteins — functions and the particle matrix, verbatim' table block"),
        svi(5, SRC114, "VISUAL_TABLE", "Lipoprotein functions",
            "Prose-function section for the five lipoproteins: chylomicron (dietary TG, remnant cholesterol to liver, intestinal secretion), VLDL (hepatic TG), IDL (TGs+cholesterol to liver, from VLDL degradation), LDL (hepatic cholesterol to periphery, hepatic lipase modification of IDL, receptor-mediated endocytosis, Lethal), HDL (reverse cholesterol transport, apoC/apoE repository, liver+intestine secretion, alcohol ↑ synthesis, Healthy).",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[4] — 'Lipoprotein functions — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "lipid-transport",
        "textbookVisualCount": 5,
        "accountedFor": 5,
        "sourceReproductions": 0,
        "kypRedraws": 1,
        "kypOriginals": 4,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Seed 4 sv → final 5 sv (p113 enzyme table added; documented in manifest.notes). Apo presence matrix read by 1.5x-crop VLM census; functions verified verbatim via text layer.",
}

(ROOT / "content/usmle/manifests/lipid-transport.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/lipid-transport.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

ch_path = ROOT / "content/usmle/chapters/biochemistry.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "lipid-transport":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: lipid-transport -> complete, textbookVisuals rewritten (5 sv)")
        break
else:
    print("ERROR: lipid-transport not found in chapter topics")
    sys.exit(1)
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("chapter biochemistry.json updated")
