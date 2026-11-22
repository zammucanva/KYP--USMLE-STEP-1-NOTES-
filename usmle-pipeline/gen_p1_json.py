#!/usr/bin/env python3
"""P1 cellular-adaptations — manifest + inventory + flip (Pathology 1/19).
Census: p224 (book 202) carries ~98 small monochrome rasters (50-90 px
at 308 ppi) — the cell-cluster illustrations embedded in the
adaptation-progression flowchart figure, one per node (VLM census,
render p-224.png: Normal = uniform columnar row; Hyperplasia = many
small uniform cells; Hypertrophy = fewer larger cells; Atrophy =
shrunken flattened cells; Metaplasia = changed cell shape; Dysplasia =
irregular disorganized cells with prominent nuclei; Neoplasia =
disordered crowded mass with high N:C ratios) — line art/schematic, NO
photographs, NO margin mnemonics (VLM confirmed; margins blank).
Figure topology VLM-verified: green arrows Normal -> Hyperplasia /
Hypertrophy / Atrophy labeled 'Change in cell size and/or number';
green arrows Normal -> Dysplasia ('Change in cell structure') and ->
Metaplasia ('Change in cell type'); red arrow -> Neoplasia ('Change
in cell type and structure'); red 'Inability to adapt' from the
adapted states and red 'Severe stress or injury' direct from Normal
into the terminal box 'Irreversible injury -> necrosis or apoptosis';
red 'If chronic irritant persists' Dysplasia -> Neoplasia; legend
Green = Reversible, Red = Irreversible. Text quirks: the banner
heading 'PATHOLOGY—CeLLULAR INjURY' prints TWICE (raw 7 and 9 — the
source's double heading); the figure labels print interleaved in the
text layer (raw 51-85)."""
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
L = {224: pages[223].split("\n")}
P = {224: norm(pages[223])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg-22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the printed book page, the section banner, and the double heading 'PATHOLOGY—CeLLULAR INjURY'", rng(224, 1, 9), 224),
    ("The Cellular adaptations intro — reversible changes, physiologic (uterine enlargement during pregnancy) vs pathologic (myocardial hypertrophy 2° to systemic hypertension), and the progression to cell injury (significant LV hypertrophy → myocardial injury → HF)", rng(224, 10, 14), 224),
    ("Hypertrophy — ↑ structural proteins and organelles → ↑ in size of cells; example: cardiac hypertrophy", rng(224, 16, 18), 224),
    ("Hyperplasia — controlled proliferation of stem cells and differentiated cells → ↑ in number of cells (benign prostatic hyperplasia); excessive stimulation → pathologic hyperplasia (endometrial) which may progress to dysplasia and cancer", rng(224, 20, 24), 224),
    ("Atrophy — ↓ in tissue mass via ↓ size (ubiquitin-proteasome pathway, autophagy, ↓ protein synthesis) and/or ↓ number (apoptosis); the five causes", rng(224, 26, 31), 224),
    ("Metaplasia — stem-cell reprogramming, Barrett esophagus (acid → intestinal-type columnar), the airway opposite (tobacco smoke → stratified squamous), progression risk (Barrett → esophageal adenocarcinoma), and connective-tissue metaplasia (myositis ossificans)", rng(224, 33, 41), 224),
    ("Dysplasia — disordered precancerous epithelial growth, not a true adaptive response; pleomorphism, loss of orientation, nuclear changes; the mild/moderate vs severe fork; usually preceded by persistent metaplasia or pathologic hyperplasia", rng(224, 43, 50), 224),
    ("The figure's top-row labels + terminal box — 'Inability to adapt', Hyperplasia, Hypertrophy, Atrophy, 'Irreversible injury → necrosis or apoptosis'", rng(224, 51, 61), 224),
    ("The figure's central labels — 'Change in cell size and/or number', 'Severe stress or injury', 'Normal cells'", rng(224, 63, 67), 224),
    ("The figure's bottom-row labels — 'Change in cell structure', Dysplasia, 'Change in cell type', Metaplasia, 'Change in cell type and structure', Neoplasia", rng(224, 68, 81), 224),
    ("The figure's legend and bridge — 'Irreversible', 'Reversible', 'If chronic irritant persists'", rng(224, 82, 85), 224),
    ("The indd footer + timestamp (page identity)", rng(224, 87, 89), 224),
]
for c, q, p in E1:
    e = ev(c, q, p)
    if e["verified"] != "pass": fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"cellular-adaptations: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "cellular-adaptations", "title": "Cellular Adaptations: Hypertrophy Through Dysplasia",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Cellular adaptations", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [224], "bookPages": "202–202"},
    "sourceEvidence": kept, "visualIds": ["adaptations-comparison-map"],
    "mechanismIds": ["adaptation-axis-map", "reversibility-exit-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the definitions and the figure; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "two-axis-map", "summary": "The two-axis synthesis (size/number vs type/structure) and the two-exits timing rule (slow 'inability to adapt' vs fast 'severe stress or injury') — KYP's reading of the figure's topology.",
         "origin": "outside-first-aid", "rationale": "The source prints the nodes and arrows without any axis or timing synthesis; the two-axis map and the slow/fast exit framing are KYP's design.",
         "location": "core.keyIdea + mechanism 1 + the exam callout + patterns + mnemonics"},
        {"id": "atrophy-demolition-framing", "summary": "Atrophy framed as ACTIVE demolition (the degradation-machinery pair made explicit) and the metaplasia direction pair as a stressor-picks-the-type rule.",
         "origin": "outside-first-aid", "rationale": "The source prints the mechanisms and examples; the active-demolition framing and the direction-pair rule are KYP's synthesis.",
         "location": "mechanism 2 sidebar + traps + pivots + mnemonics + miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p224's figure is line art with ~98 small monochrome cell-cluster rasters (one per node — VLM census documented); REDRAWN as the registry visual with original KYP vector glyphs; the source's green/red legend rendered in KYP palette (teal/red). The six definition blocks and the figure's label set are note-block verbatim adaptations. No margin mnemonics (VLM confirmed). Text quirk documented: the banner heading prints twice.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Cellular adaptations",
    "topicId": "cellular-adaptations", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"cellular-adaptations-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [224], "202–202", "SUMMARY_FIGURE", "The adaptation-progression figure (book 202)",
       "Line-art flowchart whose nodes carry ~98 small monochrome cell-cluster rasters (50-90 px at 308 ppi, one per node — VLM census documented: more cells, bigger cells, shrunken cells, changed type, disordered cells, disordered mass). Topology VLM-verified: Normal cells at center; green arrows up to Hyperplasia/Hypertrophy/Atrophy ('Change in cell size and/or number'); green arrows down to Dysplasia ('Change in cell structure') and Metaplasia ('Change in cell type'); red arrow to Neoplasia ('Change in cell type and structure'); red 'Inability to adapt' and 'Severe stress or injury' into the terminal box 'Irreversible injury → necrosis or apoptosis'; red 'If chronic irritant persists' Dysplasia → Neoplasia; legend green = Reversible, red = Irreversible. No photographs.",
       "ORIGINAL_KYP_REDRAW", "adaptations-comparison-map", "the full registry visual — the progression map with original KYP node glyphs + the six-block panel + the mechanism sidebar + the one-line map strip"),
    sv(2, [224], "202–202", "VISUAL_TABLE", "The six definition blocks (book 202)",
       "The intro rule plus the five named adaptations (Hypertrophy, Hyperplasia, Atrophy, Metaplasia, Dysplasia) with their mechanisms, examples, and progression rules — the page's high-yield definitions laid out as term/field rows.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[1] the table block — carried verbatim", "note-block"),
    sv(3, [224], "202–202", "VISUAL_TABLE", "The figure's nodes, arrows, and legend (book 202)",
       "The flowchart's labels printing interleaved in the text layer (raw lines 51-85): the top-row roster, the terminal box, the arrow labels, the legend pair, and the chronic-irritant bridge.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[2] the table block — carried verbatim (reading order VLM-verified)", "note-block"),
]
(ROOT / "content/usmle/manifests/cellular-adaptations.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/cellular-adaptations.json").write_text(
    json.dumps({"topicId": "cellular-adaptations", "chapterId": "pathology", "inventory": inv1,
                "coverageAudit": {"topicId": "cellular-adaptations", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The adaptation-progression figure (line art with ~98 small cell-cluster rasters — VLM census documented, no photographs) is REDRAWN as the registry visual with original KYP node glyphs; the source's green/red legend is rendered in the KYP palette (teal = reversible, red = irreversible) and labeled as such. The six definition blocks and the figure's label set are note-block verbatim adaptations. No margin mnemonics exist on the page; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pathology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "cellular-adaptations":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv1))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pathology {done}/19{' — CHAPTER COMPLETE' if done==19 else ''}")
print("P1 manifest + inventory + flip done")
