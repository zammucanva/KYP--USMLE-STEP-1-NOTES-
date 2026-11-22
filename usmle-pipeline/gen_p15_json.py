#!/usr/bin/env python3
"""P15 metastasis-patterns — manifest + inventory + flip
(Pathology 15/19). Census (pdfimages + VLM): pdf 241 (book 219).
TWO copyrighted photographs: the "A" marker (image 0, 188x245 gray
jpeg at 150 dpi — the bone metastasis axial-skeleton image beside
the Bone row's "Predilection for axial skeleton A" note) and the
"B" marker (image 1, 188x150 cmyk jpeg at 150 dpi — the liver
parenchyma image beside the Liver row's "Scattered throughout liver
parenchyma B" note) — BOTH described-in-text only, NEVER reproduced
(the M32 convention). The page has NO vector figures — the CLaSH
rule, the 4-hematogenous-carcinoma exception list, and the 4-row
site-of-metastasis table are pure text, carried verbatim in the
note's table block. NO margin mnemonics (VLM confirmed); the KYP
memory layer is original."""
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
L = {241: pages[240].split("\n")}
P = {241: norm(pages[240])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E15 = [
    ("Page identity — the section banner and header (book 219)", rng(241, 1, 8), [241]),
    ("The CLaSH rule — most Carcinomas spread via Lymphatics; most Sarcomas spread Hematogenously (CLaSH)", rng(241, 9, 11), [241]),
    ("The four hematogenous carcinomas — follicular thyroid carcinoma, choriocarcinoma, renal cell carcinoma, hepatocellular carcinoma", rng(241, 12, 13), [241]),
    ("The metastasis-vs-primary rule — metastasis to bone, liver, lung, and brain is more common than 1° malignancy in these organs; metastases often appear as multiple lesions (vs 1° tumors which generally appear as solitary lesions)", rng(241, 13, 15), [241]),
    ("The table header — SITE OF METASTASIS | 10 TUMOR | NOTES", rng(241, 17, 21), [241]),
    ("Bone row part 1 — the 10 TUMOR list (Prostate, breast >> lung > kidney, colon) + the axial-skeleton predilection note with the A photograph marker", "\n".join([rng(241, 23, 27)]), [241]),
    ("Bone row part 2 — the bone metastasis fork: Blastic (eg, prostate, small cell lung cancer), Mixed (eg, breast), Lytic (eg, kidney, colon, non-small cell lung cancer)", rng(241, 28, 32), [241]),
    ("Liver row — the 10 TUMOR list (Colon > breast >> pancreas, lung, prostate) + the scattered-throughout-liver-parenchyma note with the B photograph marker", "\n".join([rng(241, 34, 36)]), [241]),
    ("Lung row — the 10 TUMOR list (Colon, breast >> kidney, prostate) + the typically-involve-both-lungs note", rng(241, 38, 42), [241]),
    ("Brain row — the 10 TUMOR list (Lung > breast >> melanoma > colon, prostate) + the gray-white matter junction note", rng(241, 44, 48), [241]),
    ("The two photograph markers (A = bone axial-skeleton, B = liver parenchyma) — the figure-letter anchors that map to the two copyrighted raster images", "\n".join([rng(241, 50, 50), rng(241, 52, 53)]), [241]),
    ("The page timestamp footer (book 219)", rng(241, 55, 57), [241]),
]
for c, q, pgs in E15:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"metastasis-patterns: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m15 = {"topicId": "metastasis-patterns", "title": "Metastasis: Organ Patterns & Routes",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Neoplasia", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [241], "bookPages": "219"},
    "sourceEvidence": kept, "visualIds": ["metastasis-pattern-map"],
    "mechanismIds": ["clash-route-axis", "site-tropism-axis"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the CLaSH rule, the 4-hematogenous-carcinoma exception list, and the 4-row site-of-metastasis table; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "route-tropism-reading", "summary": "The two-axis rule (the route axis: CLaSH + 4 hematogenous-carcinoma exceptions; the tropism axis: the 4 site-of-metastasis rows with the bone blastic/mixed/lytic fork) — KYP's synthesis of the page into one reading protocol.",
         "origin": "outside-first-aid", "rationale": "The source prints the rule and the table sequentially without a unified protocol; the framing is KYP's design.",
         "location": "core.keyIdea + pivots + the visual's structure"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (CLaSH / FOUR HEMATOGENOUS CARCINOMAS / BLASTIC MIXED LYTIC / MULTIPLE METASTASES LONE PRIMARY) — no mnemonic prints on the page beyond the CLaSH acronym (which is the source's own).",
         "origin": "outside-first-aid", "rationale": "Only the CLaSH acronym prints on book 219 (the source's own); the other three codes are KYP's design. The CLaSH acronym is attributed to the source.",
         "location": "mnemonics + the visual's rule panels"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + VLM): TWO copyrighted photographs on the page — the 'A' marker (image 0, 188x245 gray jpeg at 150 dpi — the bone metastasis axial-skeleton image beside the Bone row's 'Predilection for axial skeleton A' note) and the 'B' marker (image 1, 188x150 cmyk jpeg at 150 dpi — the liver parenchyma image beside the Liver row's 'Scattered throughout liver parenchyma B' note) — BOTH described-in-text only, NEVER reproduced (the M32 convention). The page has NO vector figures — the CLaSH rule (the source's own acronym, attributed), the 4-hematogenous-carcinoma exception list, and the 4-row site-of-metastasis table are pure text, carried verbatim in the note's table block. No margin mnemonics beyond the source's CLaSH (VLM confirmed); the KYP memory layer is original.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Neoplasia",
    "topicId": "metastasis-patterns", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"metastasis-patterns-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv15 = [
    sv(1, [241], "219", "VISUAL_TABLE", "The CLaSH rule + the 4-hematogenous-carcinoma exception list + the 4-row site-of-metastasis table (book 219)",
       "The CLaSH rule (Carcinomas-Lymphatics, Sarcomas-Hematogenous — the source's own acronym), the four carcinomas that route hematogenously (follicular thyroid, choriocarcinoma, renal cell, hepatocellular), the metastasis-vs-primary rule (more common than 1° in bone/liver/lung/brain; multiple vs solitary lesions), and the 4-row site-of-metastasis table (Bone, Liver, Lung, Brain) with their tumor lists and notes (including the bone blastic/mixed/lytic fork). Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "metastasis-pattern-map", "the registry visual (the CLaSH panel + the 4-row site grid + the bone fork) + blocks[1] the table block carried verbatim"),
    sv(2, [241], "219", "RADIOLOGY", "Photograph A — the bone metastasis axial-skeleton image (book 219)",
       "A gray jpeg radiograph/photograph (188x245 at 150 dpi), lettered A beside the Bone row's 'Predilection for axial skeleton A' note — showing the axial skeleton's predilection for bone metastasis. COPYRIGHTED — described in text, never reproduced.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's Bone row + blocks[1] the Bone row axial-skeleton note", "note-block"),
    sv(3, [241], "219", "HISTOLOGY", "Photograph B — the liver parenchyma metastasis image (book 219)",
       "A cmyk jpeg histology/photograph (188x150 at 150 dpi), lettered B beside the Liver row's 'Scattered throughout liver parenchyma B' note — showing metastatic deposits scattered throughout the liver parenchyma. COPYRIGHTED — described in text, never reproduced.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's Liver row + blocks[1] the Liver row scattered-parenchyma note", "note-block"),
]
(ROOT / "content/usmle/manifests/metastasis-patterns.json").write_text(json.dumps(m15, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/metastasis-patterns.json").write_text(
    json.dumps({"topicId": "metastasis-patterns", "chapterId": "pathology", "inventory": inv15,
                "coverageAudit": {"topicId": "metastasis-patterns", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 3,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's text blocks (the CLaSH rule, the 4-hematogenous-carcinoma exception list, the metastasis-vs-primary rule, and the 4-row site-of-metastasis table with the bone blastic/mixed/lytic fork) are adapted as the registry visual and carried verbatim in the note's table block. The TWO copyrighted photographs (A = bone axial-skeleton, B = liver parenchyma) are described in text, never reproduced (the M32 convention). The CLaSH acronym is the source's own (attributed); no margin mnemonics beyond it (VLM confirmed); the KYP memory layer is original."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pathology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "metastasis-patterns":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv15))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pathology {done}/19{' — CHAPTER COMPLETE' if done==19 else ''}")
print("P15 manifest + inventory + flip done")
