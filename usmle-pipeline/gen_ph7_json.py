#!/usr/bin/env python3
"""PH7 efficacy-vs-potency — manifest + inventory + flip
(Pharmacology 7/43). Census (pdfimages + VLM): pdf 254 (book 232).
The ENTIRE page is this one topic — the section header 'Efficacy vs
potency'; the Efficacy row, verbatim: 'Maximal effect a drug can produce
(intrinsic activity). Represented by the y-value (Emax). ↑ y-value = ↑ Emax
= ↑ efficacy. Unrelated to potency (ie, efficacious drugs can have high or
low potency). Partial agonists have less efficacy than full agonists.'
with the RELATIVE EFFICACY dose-response panel (y-axis '% Maximal effect'
with 100/50/0 gridlines, x-axis 'Log (drug dose)', the plateau labels
'Emax Drug A' and 'Emax Drug B' and the vertical-gap label 'Δ Efficacy');
and the Potency row, verbatim: 'Amount of drug needed for a given effect.
Represented by the x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓
drug needed. Unrelated to efficacy (ie, potent drugs can have high or low
efficacy).' with the RELATIVE POTENCY dose-response panel (same '% Maximal
effect' / 'Log (drug dose)' axes, the curve labels 'Drug A' and 'Drug B',
the horizontal-gap label 'Δ Potency', the legend 'EC = Effective
concentration', and two EC50 x-axis crossings). NO 'Receptor binding'
(PH8) or 'Therapeutic index' (PH9) content appears on this page — those
live on pdf 255 (book 233) and later, and are separate pending topics, so
no exclusion is needed here; likewise NO dosage-calculations (PH6) content
(that is pdf 253 / book 231, already produced). NO raster images
(pdfimages -list returned zero rows for pdf 254). The two dose-response
panels are vector line-art curves in the PDF (drawn curves + labels, not
photographs) and are redrawn as ORIGINAL_KYP_REDRAW line-art curves in the
registry visual. The two definition rows print in the text layer and are
carried verbatim (ORIGINAL_KYP_ADAPTATION) in the note's table blocks and
the visual's definition cards. The page prints NO margin mnemonic for this
section — all four mnemonic codes are KYP-original."""
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
L = {254: pages[253].split("\n")}
P = {254: norm(pages[253])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 232)", rng(254, 1, 7), [254]),
    ("The section banner — PHARMACOLOGY—PHARMACOKINETICS AND PHARMACODYNAMICS (this page carries ONLY the Efficacy vs potency section; the next page pdf 255 / book 233 carries Receptor binding, a separate pending topic, so no exclusion is needed here)", "PHARMACOLOGY—PHARMACOKINETICS AND PHARMACODYNAMICS", [254]),
    ("The section header — Efficacy vs potency (this topic, the page's only section)", "Efficacy vs potency", [254]),
    ("The efficacy definition — Maximal effect a drug can produce (intrinsic activity)", "Maximal effect a drug can produce (intrinsic activity).", [254]),
    ("The efficacy axis rule — Represented by the y-value (Emax)", "Represented by the y-value (Emax).", [254]),
    ("The efficacy arrow chain — ↑ y-value = ↑ Emax = ↑ efficacy", "↑ y-value = ↑ Emax = ↑ efficacy.", [254]),
    ("The efficacy-potency independence clause — Unrelated to potency (ie, efficacious drugs can have high or low potency)", "Unrelated to potency (ie, efficacious drugs can have high or low potency).", [254]),
    ("The partial agonist rule — Partial agonists have less efficacy than full agonists", "Partial agonists have less efficacy than full agonists.", [254]),
    ("The RELATIVE EFFICACY panel label", "RELATIVE EFFICACY", [254]),
    ("The shared y-axis label of both panels — % Maximal effect (with the printed 100/50/0 gridlines)", "% Maximal effect", [254]),
    ("The Emax Drug A label — the upper plateau of the RELATIVE EFFICACY panel", "Emax Drug A", [254]),
    ("The Δ Efficacy label — the vertical gap between the two plateaus", "Δ Efficacy", [254]),
    ("The Emax Drug B label — the lower plateau of the RELATIVE EFFICACY panel (the partial agonist)", "Emax Drug B", [254]),
    ("The shared x-axis label of both panels — Log (drug dose)", "Log (drug dose)", [254]),
    ("The potency definition — Amount of drug needed for a given effect", "Amount of drug needed for a given effect.", [254]),
    ("The potency axis rule — Represented by the x-value (EC50)", "Represented by the x-value (EC50).", [254]),
    ("The left-shift chain — Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed", "Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed.", [254]),
    ("The potency-efficacy independence clause — Unrelated to efficacy (ie, potent drugs can have high or low efficacy)", "Unrelated to efficacy (ie, potent drugs can have high or low efficacy).", [254]),
    ("The RELATIVE POTENCY panel label", "RELATIVE POTENCY", [254]),
    ("The Drug A label — the left-shifted, more potent curve of the RELATIVE POTENCY panel", "Drug A", [254]),
    ("The Drug B label — the right-shifted, less potent curve of the RELATIVE POTENCY panel", "Drug B", [254]),
    ("The Δ Potency label — the horizontal gap between the two EC50s", "Δ Potency", [254]),
    ("The EC legend — EC = Effective concentration", "EC = Effective concentration", [254]),
    ("The EC50 labels — the two x-axis crossings of the RELATIVE POTENCY panel (EC50 prints twice on the page)", "EC50", [254]),
    ("The page timestamp footer (book 232)", rng(254, 58, 58), [254]),
    ("The page print-date footer (book 232)", rng(254, 60, 60), [254]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"efficacy-vs-potency: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "efficacy-vs-potency", "title": "Efficacy vs Potency",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [254], "bookPages": "232"},
    "sourceEvidence": kept, "visualIds": ["efficacy-potency-map"],
    "mechanismIds": ["efficacy-reads-the-y-axis", "potency-reads-the-x-axis"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source definitions and panels.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the two definitions, the two dose-response panels, and the partial-agonist sentence; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "two-axis-reading-protocol", "summary": "The two-axis reading (CEILING: efficacy 'Maximal effect a drug can produce (intrinsic activity). Represented by the y-value (Emax)' — partial agonists lower it, and it is 'unrelated to potency'; POSITION: potency 'Amount of drug needed for a given effect. Represented by the x-value (EC50)' — left shift = ↓ EC50 = ↑ potency = ↓ drug needed, and it is 'unrelated to efficacy'; with the geometric rule that Δ Efficacy is a VERTICAL gap between plateaus while Δ Potency is a HORIZONTAL gap between EC50s) — KYP's synthesis of the page's two definitions and two panels into one decision protocol (which axis does the stem describe, and which delta is drawn).",
         "origin": "outside-first-aid", "rationale": "The source prints the two definitions and the two panels as parallel blocks without a unified reading protocol; the ceiling-vs-position framing and the vertical-delta / horizontal-delta geometry are KYP's design.",
         "location": "core.keyIdea + pivots + the visual's structure"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (1 — EFFICACY IS THE CEILING, READ THE y-AXIS: the Emax rule; 2 — POTENCY IS THE POSITION, READ THE x-AXIS: the EC50 left-shift rule; 3 — PARTIALS PULL THE CEILING DOWN: the partial-agonist rule; 4 — CEILING ≠ POSITION, THE AXES DON'T TALK: the independence clauses). The page prints NO mnemonic in this section — all four codes are KYP-original designs.",
         "origin": "outside-first-aid", "rationale": "Book 232's Efficacy vs potency section prints NO margin mnemonic; all four codes are KYP-original designs.",
         "location": "mnemonics + the visual's code strip"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 254). The section is typeset text plus two vector curve panels: the Efficacy row and Potency row definitions (text layer) and the RELATIVE EFFICACY / RELATIVE POTENCY dose-response panels (vector line-art curves with text labels — drawn curves, not photographs). The two definitions print in the text layer and are carried verbatim in the note's table blocks and re-typeset in the registry visual's definition cards (ORIGINAL_KYP_ADAPTATION) — short attributed definition sentences, not artwork reproductions. The two dose-response curves are redrawn as ORIGINAL_KYP_REDRAW vector line-art sigmoids in the registry visual (full agonist vs partial agonist with different Emax and the same curve position; two full agonists with the same Emax and different EC50) — the curve shapes are the standard Hill sigmoids of pharmacodynamics, re-drawn from scratch; no copyrighted artwork is reproduced. The page prints NO margin mnemonic for this section; the KYP memory layer adds four original codes (EFFICACY IS THE CEILING, POTENCY IS THE POSITION, PARTIALS PULL THE CEILING DOWN, CEILING ≠ POSITION). No copyrighted photographs exist on the page; nothing reproduced. NOTE: page 254 (book 232) contains NO 'Receptor binding' (PH8) and NO 'Therapeutic index' (PH9) content — those sections live on later pages (Receptor binding begins on pdf 255 / book 233) and are separate pending topics, so no exclusion was needed for this topic. NO dosage-calculations (PH6) content appears either — that is pdf 253 / book 231, already produced.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics",
    "topicId": "efficacy-vs-potency", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"efficacy-vs-potency-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [254], "232", "PHARMACOLOGY_DIAGRAM", "The RELATIVE EFFICACY dose-response panel",
       "The page's first curve panel, vector line art (no raster): y-axis '% Maximal effect' with printed 100/50/0 gridlines, x-axis 'Log (drug dose)'; two sigmoid curves with the same left-right position but different ceilings — the upper plateau labeled 'Emax Drug A', the lower plateau labeled 'Emax Drug B' (the partial agonist), and the vertical gap between the plateaus labeled 'Δ Efficacy'.",
       "ORIGINAL_KYP_REDRAW", "efficacy-potency-map", "the registry visual (the RELATIVE EFFICACY panel of the EfficacyPotencyMap — redrawn as vector sigmoids: full agonist to 100%, partial agonist to 60%, dashed plateau lines, and the vertical Δ Efficacy bracket)"),
    sv(2, [254], "232", "PHARMACOLOGY_DIAGRAM", "The RELATIVE POTENCY dose-response panel",
       "The page's second curve panel, vector line art (no raster): same '% Maximal effect' / 'Log (drug dose)' axes; two sigmoid curves with the SAME ceiling (both reach 100% maximal effect) but different left-right positions — the left curve labeled 'Drug A', the right curve labeled 'Drug B', two EC50 x-axis crossings at the 50% height, the horizontal gap labeled 'Δ Potency', and the legend 'EC = Effective concentration'.",
       "ORIGINAL_KYP_REDRAW", "efficacy-potency-map", "the registry visual (the RELATIVE POTENCY panel of the EfficacyPotencyMap — redrawn as vector sigmoids: two full agonists with the same Emax, Drug A left-shifted with a lower EC50, dashed 50% crossings dropped to the x-axis, and the horizontal Δ Potency bracket)"),
    sv(3, [254], "232", "VISUAL_TABLE", "The two definition rows — Efficacy and Potency",
       "The two text rows printed beside the panels: 'Maximal effect a drug can produce (intrinsic activity). Represented by the y-value (Emax). ↑ y-value = ↑ Emax = ↑ efficacy. Unrelated to potency (ie, efficacious drugs can have high or low potency). Partial agonists have less efficacy than full agonists.' and 'Amount of drug needed for a given effect. Represented by the x-value (EC50). Left shifting = ↓ EC50 = ↑ potency = ↓ drug needed. Unrelated to efficacy (ie, potent drugs can have high or low efficacy).' Pure text, no figures.",
       "ORIGINAL_KYP_ADAPTATION", "efficacy-potency-map", "the registry visual (the two definition cards of the EfficacyPotencyMap) + blocks[1] the table block carried verbatim"),
    sv(4, [254], "232", "VISUAL_TABLE", "The partial agonist sentence and the EC legend",
       "The partial-agonist sentence closing the Efficacy row — 'Partial agonists have less efficacy than full agonists.' — and the RELATIVE POTENCY panel's printed legend 'EC = Effective concentration' with its two EC50 labels. Pure text, no figures.",
       "ORIGINAL_KYP_ADAPTATION", "efficacy-potency-map", "the registry visual (the partial-agonist callout and the EC50 legend of the EfficacyPotencyMap) + blocks[1] the table block carried verbatim"),
]
(ROOT / "content/usmle/manifests/efficacy-vs-potency.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/efficacy-vs-potency.json").write_text(
    json.dumps({"topicId": "efficacy-vs-potency", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "efficacy-vs-potency", "textbookVisualCount": 4,
                    "accountedFor": 4, "sourceReproductions": 0, "kypRedraws": 2, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 254). The section is typeset text plus two vector curve panels. The two definitions (Efficacy row, Potency row) print in the text layer and are carried verbatim in the note's table blocks and re-typeset in the registry visual's definition cards (ORIGINAL_KYP_ADAPTATION) — short attributed definition sentences, not artwork reproductions. The two dose-response panels are vector line-art curves in the PDF and are redrawn as ORIGINAL_KYP_REDRAW vector sigmoids in the registry visual — the curve shapes are the standard Hill sigmoids of pharmacodynamics, re-drawn from scratch; no copyrighted artwork is reproduced. The page prints NO margin mnemonic for this section; the KYP memory layer adds four original codes. No copyrighted photographs exist on the page; nothing reproduced. NOTE: page 254 (book 232) contains NO Receptor binding (PH8) and NO Therapeutic index (PH9) content — Receptor binding begins on pdf 255 (book 233); those are separate pending topics, so no exclusion was needed here. NO dosage-calculations (PH6) content appears either — that is pdf 253 (book 231), already produced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "efficacy-vs-potency":
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
print("PH7 manifest + inventory + flip done")
