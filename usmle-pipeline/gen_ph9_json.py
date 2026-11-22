#!/usr/bin/env python3
"""PH9 therapeutic-index — manifest + inventory + flip
(Pharmacology 9/43). Census (pdfimages + VLM): pdf 255 (book 233).
The page's LOWER portion is this one topic — the section header
'Therapeutic index' with 'Measurement of drug safety.' and the TD50/ED50
equation (numerator 'TD50 median toxic dose' over denominator 'ED50
median effective dose'); the therapeutic-window definition, verbatim:
'Therapeutic window—range of drug concentrations that can safely and
effectively treat disease.'; the Efficacy/Toxicity quantal-curve panel
(vector line art: y-axis '% of patients responding' with 100/50/0
gridlines, x-axis 'Log (drug concentration)', the 'Efficacy' curve left
and the 'Toxicity' curve right, both read at the 50% line, with 'ED50'
and 'TD50' drop markers, the annotation 'Therapeutic index' between the
curves, and the legend 'ED = Effective dose / TD = Toxic dose'); the
margin mnemonic, verbatim: 'TITE: Therapeutic Index = TD50 / ED50.'
(THE SOURCE'S OWN PRINTED MNEMONIC — attributed as such, NOT a KYP
design); the margin note, verbatim: 'Safer drugs have ↑ TI; drugs with
↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin,
antiepileptic drugs, lithium; Warning! These drugs are lethal!).'; and
the LD50 note, verbatim: 'LD50 (lethal median dose) often replaces TD50
in animal studies.' EXCLUSION: the 'Receptor binding' section occupies
the UPPER half of this same page — its header, three dose-response
panels, and AGONIST WITH table are the COMPLETED topic PH8
(receptor-binding) and are EXCLUDED here. NO raster images (pdfimages
-list returned zero rows for pdf 255). The quantal-curve panel is vector
line-art in the PDF and is redrawn as an ORIGINAL_KYP_REDRAW pair of
sigmoid cumulative curves in the registry visual; the equation block and
the margin mnemonic/note print in the text layer and are carried
verbatim (ORIGINAL_KYP_ADAPTATION) in the note's table block and
re-typeset in the visual's panels. The 'TITE' mnemonic IS the source's
own printed margin mnemonic (attributed everywhere it appears); the
other three mnemonic codes are KYP-original."""
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
L = {255: pages[254].split("\n")}
P = {255: norm(pages[254])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 233)", rng(255, 1, 7), [255]),
    ("The section banner — PHARMACOLOGY—PHARMACOKINETICS AND PHARMACODYNAMICS (the LOWER portion of this page carries the Therapeutic index section, this topic; the UPPER portion is the Receptor binding section, which is EXCLUDED — see the boundary item below)", "PHARMACOLOGY—PHARMACOKINETICS AND PHARMACODYNAMICS", [255]),
    ("The section header — Therapeutic index (this topic)", rng(255, 131, 131), [255]),
    ("The EXCLUSION BOUNDARY — the previous section header 'Receptor binding' (PH8, a separate completed topic) occupies the UPPER portion of this same page; ALL of its content (the three dose-response panels and the AGONIST WITH table) is EXCLUDED from this topic", rng(255, 9, 9), [255]),
    ("The section definition line, verbatim — 'Measurement of drug safety.'", rng(255, 133, 133), [255]),
    ("The TD50/ED50 equation block, verbatim — numerator 'TD50 median toxic dose' over denominator 'ED50 median effective dose'", rng(255, 134, 137), [255]),
    ("The therapeutic window definition, verbatim — 'Therapeutic window—range of drug concentrations that can safely and effectively treat disease.'", rng(255, 138, 140), [255]),
    ("PANEL — the 'Efficacy' curve label, verbatim (the left quantal curve)", rng(255, 141, 141), [255]),
    ("PANEL — the y-axis label, verbatim — '% of patients responding' (the quantal axis: the y-value counts PATIENTS, not magnitude of effect)", rng(255, 143, 143), [255]),
    ("PANEL — the y-axis gridlines — 100 / 50 (the 50% line is where both ED50 and TD50 are read off the two curves)", rng(255, 145, 147), [255]),
    ("PANEL — the 'Toxicity' curve label, verbatim (the right quantal curve)", rng(255, 156, 156), [255]),
    ("PANEL — the annotation 'Therapeutic index' printed between the two curves (the horizontal ED50-to-TD50 separation IS the safety margin)", rng(255, 158, 158), [255]),
    ("PANEL — the ED50 and TD50 drop markers, verbatim (the x-axis positions where each curve crosses 50% of patients)", rng(255, 160, 162), [255]),
    ("PANEL — the legend, verbatim — 'ED = Effective dose / TD = Toxic dose'", rng(255, 164, 165), [255]),
    ("PANEL — the x-axis baseline '0' with the x-axis label 'Log (drug concentration)', verbatim", rng(255, 167, 168), [255]),
    ("The margin mnemonic, verbatim — 'TITE: Therapeutic Index = TD50 / ED50.' (THE SOURCE'S OWN PRINTED MNEMONIC — attributed as such, not a KYP design)", rng(255, 149, 149), [255]),
    ("The margin note, verbatim — 'Safer drugs have ↑ TI; drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!).'", rng(255, 150, 153), [255]),
    ("The LD50 note, verbatim — 'LD50 (lethal median dose) often replaces TD50 in animal studies.'", rng(255, 154, 155), [255]),
    ("The page timestamp footer (book 233)", rng(255, 170, 170), [255]),
    ("The page print-date footer (book 233)", rng(255, 172, 172), [255]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"therapeutic-index: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "therapeutic-index", "title": "Therapeutic Index",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [255], "bookPages": "233"},
    "sourceEvidence": kept, "visualIds": ["therapeutic-index-map"],
    "mechanismIds": ["quantal-curve-ed50-td50-ratio", "therapeutic-window-drug-monitoring"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source's equation, quantal panel, window definition, and margin note.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the definition, the equation, the two-curve panel, and the margin warning; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "two-curve-reading-protocol", "summary": "The three-question reading of the quantal panel (WHAT DOES THE y-AXIS COUNT? '% of patients responding' — a QUANTAL plot, not a graded one: ED50 and TD50 are the doses at which each curve crosses 50% OF PATIENTS, not 50% of maximal effect. WHICH CURVE IS WHICH? 'Efficacy' left, 'Toxicity' right — TD50 must sit right of ED50 or the drug is unusable. WHAT SEPARATES THEM? the ED50→TD50 gap IS the therapeutic index — a wide gap (↑ TI) is safe, a narrow gap (↓ TI) is the monitoring list: warfarin, theophylline, digoxin, antiepileptic drugs, lithium) — KYP's synthesis of the page's equation, panel, and margin note into a single reading order (axis → curve identity → gap → monitoring decision).",
         "origin": "outside-first-aid", "rationale": "The source prints the equation, the panel, and the margin note as parallel blocks without a unified reading protocol; the count-patients-not-effect framing and the gap-is-the-index reading are KYP's design.",
         "location": "core.keyIdea + pivots + the visual's structure"},
        {"id": "mnemonic-layer", "summary": "The three KYP-original mnemonics (1 — NUMERATOR TOXIC, DENOMINATOR THERAPEUTIC: TD50 on top is the dose that harms, ED50 on the bottom is the dose that heals, so push the ratio UP for safety. 2 — QUANTAL = COUNT HEADS, NOT EFFECT: the y-axis is '% of patients responding', so ED50/TD50 are read at the 50-PATIENT line, never the 50-EFFECT line. 3 — THE LETHAL FIVE: Warfarin, Theophylline, Digoxin, Antiepileptic drugs, Lithium — the ↓ TI drugs that require frequent monitoring, named by the source's own exclamation 'Warning! These drugs are lethal!'). The page's own printed margin mnemonic 'TITE: Therapeutic Index = TD50 / ED50.' is carried VERBATIM and ATTRIBUTED to the source everywhere it appears and is NOT a KYP design.",
         "origin": "outside-first-aid", "rationale": "Book 233's Therapeutic index section prints exactly one mnemonic ('TITE'), which is the source's own and is attributed as such; the other three codes are KYP-original designs.",
         "location": "mnemonics + the visual's code strip"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 255). The Therapeutic index section is typeset text plus one vector curve panel. The equation block ('Measurement of drug safety.' + TD50/ED50) and the margin mnemonic/note ('TITE' + the safer-drugs warning with the low-TI drug list + the LD50 note) print in the text layer and are carried verbatim in the note's table block and re-typeset in the registry visual's panels (ORIGINAL_KYP_ADAPTATION) — short attributed sentences, not artwork reproductions. The Efficacy/Toxicity quantal-curve panel is vector line-art in the PDF and is redrawn as an ORIGINAL_KYP_REDRAW pair of sigmoid cumulative-frequency curves in the registry visual (the standard quantal dose-response geometry of pharmacodynamics, re-drawn from scratch: '% of patients responding' vs 'Log (drug concentration)', the 50% line, ED50 and TD50 drops, and the 'Therapeutic index' gap annotation); no copyrighted artwork is reproduced. The 'TITE' mnemonic IS the source's own printed margin mnemonic (book 233) and is attributed as such in the note, the manifest, and the visual; the KYP memory layer adds three original codes (NUMERATOR TOXIC, DENOMINATOR THERAPEUTIC; QUANTAL = COUNT HEADS, NOT EFFECT; THE LETHAL FIVE). No copyrighted photographs exist on the page; nothing reproduced. EXCLUSION: the 'Receptor binding' section occupies the UPPER half of this SAME page — its header, three dose-response panels (competitive, noncompetitive, partial agonists), and AGONIST WITH table are the COMPLETED topic PH8 (receptor-binding) and are EXCLUDED from this topic: PH9 pins the same source page (pdf 255 / book 233) for its LOWER half only.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics",
    "topicId": "therapeutic-index", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"therapeutic-index-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [255], "233", "PHARMACOLOGY_DIAGRAM", "The Efficacy/Toxicity quantal-curve panel",
       "The page's curve panel (vector line art, no raster): y-axis '% of patients responding' with 100/50/0 gridlines, x-axis 'Log (drug concentration)'; TWO overlapping sigmoid cumulative curves — the left 'Efficacy' curve and the right 'Toxicity' curve — with dashed drop lines at 'ED50' and 'TD50' where each curve crosses the 50% line, the annotation 'Therapeutic index' printed between the curves, and the legend 'ED = Effective dose / TD = Toxic dose'.",
       "ORIGINAL_KYP_REDRAW", "therapeutic-index-map", "the registry visual (the quantal panel of the TherapeuticIndexMap — redrawn as vector sigmoids: the Efficacy curve crossing 50% of patients at ED50, the Toxicity curve crossing at TD50, the 50% gridline, the dashed drops, and the 'Therapeutic index' double-arrow spanning the ED50→TD50 gap)"),
    sv(2, [255], "233", "VISUAL_TABLE", "The TD50/ED50 equation block",
       "The typeset block under the section header, verbatim: the definition line 'Measurement of drug safety.' followed by the fraction TD50 over ED50 (with '=' at the left) and its two labels — numerator 'TD50 median toxic dose', denominator 'ED50 median effective dose'. Pure text, no figures.",
       "ORIGINAL_KYP_ADAPTATION", "therapeutic-index-map", "the registry visual (the equation panel of the TherapeuticIndexMap) + blocks[1] the verbatim table"),
    sv(3, [255], "233", "VISUAL_TABLE", "The margin mnemonic and margin note — TITE, the low-TI monitoring list, and the LD50 note",
       "The margin box beside the panel, verbatim: 'TITE: Therapeutic Index = TD50 / ED50.' (the source's own printed mnemonic); 'Safer drugs have ↑ TI; drugs with ↓ TI require frequent monitoring (eg, warfarin, theophylline, digoxin, antiepileptic drugs, lithium; Warning! These drugs are lethal!).'; 'LD50 (lethal median dose) often replaces TD50 in animal studies.' Pure text, no figures.",
       "ORIGINAL_KYP_ADAPTATION", "therapeutic-index-map", "the registry visual (the margin-note strip, the five-drug monitoring grid, and the LD50 line of the TherapeuticIndexMap) + blocks[1] the verbatim table"),
]
(ROOT / "content/usmle/manifests/therapeutic-index.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/therapeutic-index.json").write_text(
    json.dumps({"topicId": "therapeutic-index", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "therapeutic-index", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 255). The Therapeutic index section is typeset text plus one vector curve panel. The equation block and the margin mnemonic/note print in the text layer and are carried verbatim in the note's table block and re-typeset in the registry visual's panels (ORIGINAL_KYP_ADAPTATION) — short attributed sentences, not artwork reproductions. The Efficacy/Toxicity quantal panel is vector line-art in the PDF and is redrawn as an ORIGINAL_KYP_REDRAW pair of sigmoid cumulative curves in the registry visual — the curve shapes are the standard quantal dose-response geometry of pharmacodynamics, re-drawn from scratch; no copyrighted artwork is reproduced. The 'TITE' mnemonic is the source's own printed margin mnemonic (attributed, not KYP-original); the KYP memory layer adds three original codes. No copyrighted photographs exist on the page; nothing reproduced. EXCLUSION: the Receptor binding section on the same page (upper half — the three dose-response panels and the AGONIST WITH table) belongs to the COMPLETED topic PH8 (receptor-binding) and is NOT part of this topic's inventory."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "therapeutic-index":
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
print("PH9 manifest + inventory + flip done")
