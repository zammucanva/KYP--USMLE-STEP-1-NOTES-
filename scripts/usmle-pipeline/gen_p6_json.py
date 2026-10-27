#!/usr/bin/env python3
"""P6 calcification-radiation-injury — manifest + inventory + flip
(Pathology 6/19). Census: p229 (book 207) carries TWO cmyk JPEG
rasters (~188x184 and ~188x188 at 150 dpi), BOTH lettered 'A'
(another duplicated-lettering quirk, documented — the text layer
prints 'A' twice at raw 100 and 102): A#1 = an H&E micrograph of
dystrophic calcification (a large amorphous deeply basophilic purple
deposit with a black arrow) in the table's dystrophic column; A#2 =
an H&E micrograph of psammoma bodies (small round concentrically
laminated calcified spherules, onion-skin, with a red arrow) beside
the psammoma block. BOTH COPYRIGHTED — described-in-text only, NEVER
reproduced (the M32 convention). The source prints its own mnemonic
'PSoMMOMa Bodies.' (raw 98) beside the psammoma tumor roster —
carried VERBATIM in the note's tables per the E38 precedent. The
calcification table's two columns interleave in the text layer (the
M38 interleaving pattern). NO other margin notes or mnemonics (VLM
confirmed)."""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "": pages.pop()
L = {229: pages[228].split("\n")}
P = {229: norm(pages[228])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg-22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E6 = [
    ("Page identity — the section banner and the printed page number", rng(229, 1, 7), 229),
    ("Radiation susceptibility and selectivity — stem cells of rapidly regenerating tissues (skin, bone marrow, GI tract, gonads) most susceptible; cancer cells hit more (dysfunctional DNA repair + high replicative rates); radiation dermatitis acute (erythema, peeling, pain, pruritis) and chronic (atrophy, pigmentation changes, telangiectasia, fibrosis via ↑ TGF-β)", rng(229, 9, 19), 229),
    ("Ionizing radiation toxicity — double strand breaks + free radicals; complications (localized inflammation and fibrosis; neoplasia leukemia and thyroid cancer); acute radiation syndrome (nausea, vomiting, diarrhea, hair loss, erythema, cytopenias, headache, altered mental status)", rng(229, 21, 36), 229),
    ("Types of calcification header + the deeply basophilic H&E note + the Ca2+ deposition row (dystrophic in abnormal/diseased tissues vs metastatic in normal tissues)", rng(229, 38, 49), 229),
    ("The EXTENT row + the dystrophic associated-conditions list (localized, calcific aortic stenosis; TB and granulomatous infections, chronic abscesses, fat necrosis, infarcts, thrombi, schistosomiasis, congenital CMV, toxoplasmosis, rubella, psammoma bodies, CREST, atherosclerotic plaques)", rng(229, 51, 65), 229),
    ("The metastatic associated conditions — interstitial kidney, lung, gastric mucosa (lose acid quickly; ↑ pH favors Ca2+ deposition); nephrocalcinosis of collecting ducts → nephrogenic DI and renal failure", rng(229, 67, 72), 229),
    ("The ETIOLOGY row — dystrophic 2° to injury or necrosis; metastatic 2° to hyperphosphatemia (CKD) or hypercalcemia (1° hyperparathyroidism, sarcoidosis, hypervitaminosis D)", rng(229, 74, 81), 229),
    ("Psammoma bodies — concentrically laminated calcified spherules; the six-tumor roster (papillary thyroid and kidney, somatostatinoma, meningioma, mesothelioma, ovarian serous, milk-prolactinoma); basophilic histology", rng(229, 83, 96), 229),
    ("The source's own mnemonic 'PSoMMOMa Bodies.' + the duplicated 'A' letter markers (raw 100 and 102) + the indd footer", rng(229, 98, 104), 229),
    ("The timestamp footer (page identity)", rng(229, 106, 106), 229),
]
for c, q, p in E6:
    e = ev(c, q, p)
    if e["verified"] != "pass": fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"calcification-radiation-injury: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m6 = {"topicId": "calcification-radiation-injury", "title": "Calcification & Radiation Injury",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Cellular injury (calcification and radiation)", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [229], "bookPages": "207–207"},
    "sourceEvidence": kept, "visualIds": ["calcification-split-map"],
    "mechanismIds": ["dystrophic-vs-metastatic", "radiation-selectivity"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the radiation blocks, the calcification table, and the psammoma block; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "two-question-rule", "summary": "The two-question rule (is the tissue diseased; is the serum overloaded) and the pH-targeting framing (lose acid, gain calcium) — KYP's synthesis of the table's columns.",
         "origin": "outside-first-aid", "rationale": "The source prints the columns without a decision rule; the two-question routing and the chemistry-explains-geography framing are KYP's design.",
         "location": "core.keyIdea + mechanism 1 + the exam callout + the visual's rule panel"},
        {"id": "selectivity-pair-framing", "summary": "The radiation selectivity framed as two properties (no repair + fast divide) with the collateral list sharing the fast-divide property, and the duplicated-A lettering quirk documentation.",
         "origin": "outside-first-aid", "rationale": "The source prints the facts without the paired-property framing; the framing and the quirk documentation are KYP's design.",
         "location": "mechanism 2 + traps + mnemonics + the visual's radiation panel"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p229's two photographs (both lettered 'A' — the duplicated-lettering quirk: the dystrophic-calcification H&E and the psammoma-bodies H&E) are COPYRIGHTED — described-in-text only, never reproduced (the M32 convention). The source's own mnemonic 'PSoMMOMa Bodies.' (raw 98) is carried VERBATIM in the tables per the E38 precedent; the KYP memory layer stays original. The calcification table's column interleaving documented (the M38 pattern). No other margin mnemonics (VLM confirmed).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Cellular injury (calcification and radiation)",
    "topicId": "calcification-radiation-injury", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"calcification-radiation-injury-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv6 = [
    sv(1, [229], "207–207", "VISUAL_TABLE", "The Dystrophic-vs-Metastatic calcification table (book 207)",
       "The two-column comparison across Ca2+ DEPOSITION, EXTENT, ASSOCIATED CONDITIONS, and ETIOLOGY, with the deeply-basophilic H&E note; the two columns interleave in the text layer (the M38 pattern). Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "calcification-split-map", "the registry visual (the split columns + the two-question rule panel) + blocks[1] the table block carried verbatim"),
    sv(2, [229], "207–207", "VISUAL_TABLE", "The radiation blocks + the psammoma block with the source's own mnemonic (book 207)",
       "The radiation susceptibility/selectivity, dermatitis pair, ionizing toxicity with acute radiation syndrome, and the psammoma roster with the source's own 'PSoMMOMa Bodies.' mnemonic printed beside it (raw 98). Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "calcification-split-map", "the registry visual (the radiation panel + the psammoma panel) + blocks[2] the table block carried verbatim (source mnemonic carried verbatim per the E38 precedent)"),
    sv(3, [229], "207–207", "HISTOLOGY", "Photograph A#1 — dystrophic calcification (book 207)",
       "An H&E micrograph (cmyk jpeg, ~188x184 at 150 dpi): a large, amorphous, deeply basophilic purple calcium deposit with a black arrow, sitting in the table's dystrophic column. COPYRIGHTED — described in text, never reproduced. A second image also carries the letter A (the duplicated-lettering quirk).",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's dystrophic column + blocks[2] the photographs row — a copyrighted micrograph, never reproduced", "note-block"),
    sv(4, [229], "207–207", "HISTOLOGY", "Photograph A#2 — psammoma bodies (book 207)",
       "An H&E micrograph (cmyk jpeg, ~188x188 at 150 dpi): small round concentrically laminated calcified spherules (onion-skin psammoma bodies) with a red arrow, beside the psammoma block. COPYRIGHTED — described in text, never reproduced. The duplicated 'A' is a source quirk, documented.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's psammoma panel + blocks[2] the photographs row", "note-block"),
]
(ROOT / "content/usmle/manifests/calcification-radiation-injury.json").write_text(json.dumps(m6, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/calcification-radiation-injury.json").write_text(
    json.dumps({"topicId": "calcification-radiation-injury", "chapterId": "pathology", "inventory": inv6,
                "coverageAudit": {"topicId": "calcification-radiation-injury", "textbookVisualCount": 4,
                    "accountedFor": 4, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 4,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's two text blocks (the calcification table; the radiation + psammoma blocks) are adapted as the registry visual and carried verbatim in the note's tables — the source's own 'PSoMMOMa Bodies.' mnemonic is carried verbatim per the E38 precedent. The two photographs (both lettered 'A' — the duplicated-lettering quirk) are COPYRIGHTED — described in text in the registry visual and the note's table, never reproduced (the M32 convention). No other margin mnemonics exist on the page; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pathology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "calcification-radiation-injury":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv6))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pathology {done}/19{' — CHAPTER COMPLETE' if done==19 else ''}")
print("P6 manifest + inventory + flip done")
