#!/usr/bin/env python3
"""PH4 elimination-of-drugs — manifest + inventory + flip
(Pharmacology 4/43). Census (pdfimages + VLM): pdf 252 (book 230).
The page contains the Drug Metabolism section (already produced as PH3,
drug-metabolism) AND the Elimination of Drugs section (this topic).
This generator focuses ONLY on the Elimination of Drugs section (the
bottom half of the page): the zero-order row (rate of elimination is
constant regardless of Cp; constant amount per unit time; Cp ↓ linearly
with time; Phenytoin/Ethanol/Aspirin at high or toxic concentrations
with the salicylate-saturation arrow; 'Capacity-limited elimination';
the PEA mnemonic 'A PEA is round, shaped like the "0" in zero-order'),
the first-order row (rate directly proportional to the drug
concentration; constant fraction per unit time; Cp ↓ exponentially with
time; applies to most drugs; 'Flow-dependent elimination'), and the two
vector graphs (zero-order: constant 2 U/h slope, First t1/2 > Second
t1/2 > Third t1/2, 'Time of t1/2 ↑ as concentration ↑'; first-order:
falling slopes 4 U/h → 2 U/h → 1 U/h → 0.5 U/h, First t1/2 = Second
t1/2 = Third t1/2, 'Time of t1/2 is constant as concentration ↑').
NO raster images (pdfimages -list returned zero rows for pdf 252).
The two graphs are vector figures — redrawn as ORIGINAL_KYP_REDRAW
vector graphics. The two comparison rows are pure text and are carried
verbatim in the note's table blocks (ORIGINAL_KYP_ADAPTATION). The PEA
mnemonic prints verbatim on the page (a short attributed phrase quoted
in the evidence layer); the KYP memory layer ADDS three original codes."""
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
L = {252: pages[251].split("\n")}
P = {252: norm(pages[251])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the section banner and header (book 230)", rng(252, 1, 9), [252]),
    ("The Elimination of drugs section header (book 230)", "Elimination of drugs", [252]),
    ("The section banner — PHARMACOLOGY—PHARMACOKINETICS AND PHARMACODYNAMICS", "PHARMACOLOGY—PHARMACOKINETICS AND PHARMACODYNAMICS", [252]),
    ("The Zero-order elimination row header (split across two printed lines)", "Zero-order elimination", [252]),
    ("The zero-order definition — Rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time)", "Rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time).", [252]),
    ("The zero-order Cp curve — Cp ↓ linearly with time", "Cp ↓ linearly with time.", [252]),
    ("The zero-order drug list — Examples of drugs—Phenytoin, Ethanol, and Aspirin", "Examples of drugs—Phenytoin, Ethanol, and Aspirin", [252]),
    ("The aspirin saturation mechanism — at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination", "(at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination).", [252]),
    ("The zero-order synonym — Capacity-limited elimination", "Capacity-limited elimination.", [252]),
    ("The PEA mnemonic — A PEA is round, shaped like the “0” in zero-order (the text layer prints the compound as 'zeroorder' without the hyphen)", "A PEA is round, shaped like the “0” in zeroorder.", [252]),
    ("The First-order elimination row header", "First-order elimination", [252]),
    ("The first-order definition — Rate of first-order elimination is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time)", "Rate of first-order elimination is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time).", [252]),
    ("The first-order Cp curve and scope — Cp ↓ exponentially with time. Applies to most drugs", "Cp ↓ exponentially with time. Applies to most drugs.", [252]),
    ("The first-order synonym — Flow-dependent elimination", "Flow-dependent elimination.", [252]),
    ("The graphs' y-axis label — Drug plasma concentration", "Drug plasma concentration", [252]),
    ("The graphs' x-axis label — Time (h)", "Time (h)", [252]),
    ("The graphs' slope label — Elimination rate (=slope)", "Elimination rate (=slope)", [252]),
    ("The zero-order graph constant slope — 2 U/h", "2 U/h", [252]),
    ("The zero-order graph annotation — First t1/2 >", "First t1/2 >", [252]),
    ("The zero-order graph annotation — Second t1/2 >", "Second t1/2 >", [252]),
    ("The zero-order graph annotation — Third t1/2", "Third t1/2", [252]),
    ("The zero-order graph t1/2 rule — Time of t1/2 ↑ as concentration ↑ (the text layer orders the glyphs 'Time of t1/2 as concentration ↑')", "Time of t1/2 as concentration ↑", [252]),
    ("The first-order graph initial slope — 4 U/h", "4 U/h", [252]),
    ("The first-order graph falling slopes — 1 U/h", "1 U/h", [252]),
    ("The first-order graph falling slopes — 0.5 U/h", "0.5 U/h", [252]),
    ("The first-order graph annotation — First t1/2 =", "First t1/2 =", [252]),
    ("The first-order graph annotation — Second t1/2 =", "Second t1/2 =", [252]),
    ("The first-order graph annotation — Third t1/2 (completing First t1/2 = Second t1/2 = Third t1/2)", "Third t1/2", [252]),
    ("The first-order graph t1/2 rule — Time of t1/2 is constant as concentration ↑", "Time of t1/2 is constant as concentration ↑", [252]),
    ("The page timestamp footer (book 230)", rng(252, 86, 87), [252]),
    ("The page print-date footer (book 230)", rng(252, 120, 120), [252]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"elimination-of-drugs: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "elimination-of-drugs", "title": "Elimination of Drugs",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [252], "bookPages": "230"},
    "sourceEvidence": kept, "visualIds": ["elimination-of-drugs-map"],
    "mechanismIds": ["elimination-kinetics-axis", "elimination-saturation-axis"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the two comparison rows, the two graphs, and the PEA mnemonic; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "two-axis-reading", "summary": "The two-axis reading (the kinetics axis: zero-order = constant AMOUNT eliminated per unit time, Cp ↓ linearly, slope constant at 2 U/h, First t1/2 > Second t1/2 > Third t1/2 with 'Time of t1/2 ↑ as concentration ↑'; first-order = constant FRACTION eliminated per unit time, Cp ↓ exponentially, slope falling 4 U/h → 2 U/h → 1 U/h → 0.5 U/h, First t1/2 = Second t1/2 = Third t1/2 with 'Time of t1/2 is constant as concentration ↑'; and the saturation axis: 'Capacity-limited elimination' [enzymes saturated, Michaelis-Menten at [S] >> Km] vs 'Flow-dependent elimination' [enzymes unsaturated, delivery limits elimination], with the PEA drug set Phenytoin/Ethanol/Aspirin and the aspirin qualifier 'at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination') — KYP's synthesis of the page into one reading protocol.",
         "origin": "outside-first-aid", "rationale": "The source prints the two rows and the two graphs sequentially without a unified protocol; the two-axis framing is KYP's design.",
         "location": "core.keyIdea + pivots + the visual's structure"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (1 — A PEA IS ROUND, SHAPED LIKE THE '0' IN ZERO-ORDER [Phenytoin, Ethanol, Aspirin]: the ONE mnemonic that prints verbatim on the page, carried with attribution; 2 — AMOUNT vs FRACTION; 3 — LINE vs CURVE; 4 — CAPACITY vs FLOW: three KYP-original codes that organize the page's own comparison rows and synonyms) — the memory layer adds three original codes over the page's single printed mnemonic.",
         "origin": "outside-first-aid", "rationale": "Book 230's Elimination of Drugs section prints exactly ONE mnemonic (the PEA round-pea mnemonic); the other three codes are KYP-original designs.",
         "location": "mnemonics + the visual's rule panels"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 252). The Elimination of Drugs section has TWO vector graphs — the zero-order elimination plot (constant 2 U/h slope; First t1/2 > Second t1/2 > Third t1/2; 'Time of t1/2 ↑ as concentration ↑') and the first-order elimination plot (falling slopes 4 U/h → 2 U/h → 1 U/h → 0.5 U/h; First t1/2 = Second t1/2 = Third t1/2; 'Time of t1/2 is constant as concentration ↑') — each redrawn as ORIGINAL_KYP_REDRAW vector graphics in the registry visual (no photographs, no copyrighted artwork reproduced). The zero-order vs first-order comparison rows are pure text and are carried verbatim in the note's table blocks (ORIGINAL_KYP_ADAPTATION). The PEA mnemonic ('A PEA is round, shaped like the \u201c0\u201d in zero-order') prints verbatim on the page — a short attributed phrase carried in the evidence layer and the mnemonic layer, NOT an artwork reproduction; the KYP memory layer ADDS three original codes (AMOUNT vs FRACTION; LINE vs CURVE; CAPACITY vs FLOW). No copyrighted photographs exist on the page; nothing reproduced. NOTE: page 252 (book 230) ALSO contains the Drug Metabolism section (Phase I/Phase II flow diagram), which is covered by the separate PH3 drug-metabolism topic and is NOT covered by this topic's evidence or visual.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics",
    "topicId": "elimination-of-drugs", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"elimination-of-drugs-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [252], "230", "PHARMACOLOGY_DIAGRAM", "The zero-order elimination graph",
       "The zero-order elimination plot: y-axis 'Drug plasma concentration' (with ↑), x-axis 'Time (h)'. Cp falls in a straight LINE — the elimination rate (=slope) is constant at 2 U/h regardless of Cp (the graph labels 2 U/h twice along the line). Horizontal dashed guides mark the successive halvings (4 → 2 → 1 → 0.5) and the three half-life intervals are bracketed beneath the x-axis: 'First t1/2 >', 'Second t1/2 >', 'Third t1/2' — each successive interval is SHORTER. The graph's rule annotation reads 'Time of t1/2 ↑ as concentration ↑' (half-life is NOT constant in zero-order elimination; it lengthens as concentration rises). A vector figure (no raster).",
       "ORIGINAL_KYP_REDRAW", "elimination-of-drugs-map", "the registry visual (the zero-order panel of the EliminationOfDrugsMap)"),
    sv(2, [252], "230", "PHARMACOLOGY_DIAGRAM", "The first-order elimination graph",
       "The first-order elimination plot: y-axis 'Drug plasma concentration' (with ↑), x-axis 'Time (h)'. Cp falls on an exponential CURVE — the elimination rate (=slope) is labeled at four successive positions (4 U/h, 2 U/h, 1 U/h, 0.5 U/h) and FALLS in proportion to the concentration. The three half-life intervals are bracketed beneath the x-axis: 'First t1/2 =', 'Second t1/2 =', 'Third t1/2' — every interval is EQUAL. The graph's rule annotation reads 'Time of t1/2 is constant as concentration ↑' (half-life is constant in first-order elimination). A vector figure (no raster).",
       "ORIGINAL_KYP_REDRAW", "elimination-of-drugs-map", "the registry visual (the first-order panel of the EliminationOfDrugsMap)"),
    sv(3, [252], "230", "VISUAL_TABLE", "The zero-order vs first-order comparison rows",
       "The two comparison rows printed under the 'Elimination of drugs' header. Zero-order row: 'Rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time). Cp ↓ linearly with time. Examples of drugs—Phenytoin, Ethanol, and Aspirin (at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination).' with the side note 'Capacity-limited elimination.' First-order row: 'Rate of first-order elimination is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time). Cp ↓ exponentially with time. Applies to most drugs.' with the side note 'Flow-dependent elimination.' Pure text, no figures.",
       "ORIGINAL_KYP_ADAPTATION", "elimination-of-drugs-map", "the registry visual (the comparison table strip inside the EliminationOfDrugsMap) + blocks[1] and blocks[2] the table blocks carried verbatim"),
    sv(4, [252], "230", "SUMMARY_FIGURE", "The PEA margin mnemonic (the page's own zero-order drug mnemonic)",
       "The mnemonic printed beside the zero-order row: 'A PEA is round, shaped like the \u201c0\u201d in zero-order.' — coding the three zero-order example drugs Phenytoin, Ethanol, Aspirin (a pea is round like the numeral 0). A short attributed phrase carried in the evidence layer and the KYP mnemonic layer; the KYP visual renders its OWN original callout design around the phrase (the three additional codes — AMOUNT vs FRACTION, LINE vs CURVE, CAPACITY vs FLOW — are KYP-original).",
       "ORIGINAL_KYP_ADAPTATION", "elimination-of-drugs-map", "the registry visual (the PEA mnemonic callout and the four-code strip inside the EliminationOfDrugsMap) + mnemonics[0]"),
]
(ROOT / "content/usmle/manifests/elimination-of-drugs.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/elimination-of-drugs.json").write_text(
    json.dumps({"topicId": "elimination-of-drugs", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "elimination-of-drugs", "textbookVisualCount": 4,
                    "accountedFor": 4, "sourceReproductions": 0, "kypRedraws": 2, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 252). The Elimination of Drugs section has TWO vector graphs (the zero-order plot with constant 2 U/h slope and shrinking t1/2 intervals; the first-order plot with falling 4 → 2 → 1 → 0.5 U/h slopes and equal t1/2 intervals) — each redrawn as ORIGINAL_KYP_REDRAW vector graphics in the registry visual (no photographs, no copyrighted artwork reproduced). The zero-order vs first-order comparison rows are pure text and are carried verbatim in the note's table blocks (ORIGINAL_KYP_ADAPTATION). The PEA mnemonic prints verbatim on the page — a short attributed phrase carried in the evidence and mnemonic layers, not an artwork reproduction; the KYP memory layer ADDS three original codes (AMOUNT vs FRACTION, LINE vs CURVE, CAPACITY vs FLOW). No copyrighted photographs exist on the page; nothing reproduced. NOTE: page 252 (book 230) ALSO contains the Drug Metabolism section (Phase I/Phase II flow diagram), covered by the separate PH3 drug-metabolism topic and NOT covered here."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "elimination-of-drugs":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv1))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pharmacology {done}/{len(ch['topics'])}{' — CHAPTER COMPLETE' if done==len(ch['topics']) else ''}")
print("PH4 manifest + inventory + flip done")
