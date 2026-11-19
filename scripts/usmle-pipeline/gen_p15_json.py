#!/usr/bin/env python3
"""P15 metastasis-patterns — staging manifest + inventory
(Pathology, Neoplasia). Source: pdf 241 / book 219 ("Common
metastases"). Census (pdfimages + VLM): TWO copyrighted raster
photographs on the page — A (188x245 8bpc, beside the Bone row: a
sagittal MR image of the spine showing the axial skeleton — a
grayscale vertebral column with bright fatty marrow, red arrows
pointing to metastatic lesions at the labeled vertebral levels T8 and
L1, the boxed letter A at the image's top-left) and B (188x150 8bpc,
beside the Liver row: a gross liver specimen — the cut surface of two
liver halves on a teal background, dark reddish-brown parenchyma with
large pale yellow-white/cream nodular metastatic masses with central
necrotic discoloration, one large mass in each half, a white asterisk
photographer credit at bottom-right, the boxed letter B at the
image's top-left) — BOTH described-in-text only, NEVER reproduced
(the M32 convention). Text-layer quirk: the table's second column
header extracts as "10 TUMOR" (the 1° degree sign extracts as a zero;
on the page it prints 1° TUMOR). CLaSH is the source's own mnemonic
(quoted verbatim in the note's tables); the four KYP mnemonics are
original. NO margin notes or mnemonics print on the page (VLM
confirmed). OUTPUT IS STAGING ONLY (.usmle-pipeline-cache/staging-p15/)
— content/ is not touched by this generator."""
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
    ("Page identity — the section banner, the printed page number, and the topic title (book 219)", rng(241, 1, 9), [241]),
    ("The CLaSH route rule — Most Carcinomas spread via Lymphatics; most Sarcomas spread Hematogenously (CLaSH); the four carcinomas that route hematogenously (follicular thyroid carcinoma, choriocarcinoma, renal cell carcinoma, hepatocellular carcinoma); metastasis to bone, liver, lung, and brain more common than 1° malignancy in these organs; metastases as multiple lesions vs the generally solitary 1° tumors", rng(241, 11, 15), [241]),
    ("The table header — SITe Of MeTASTASIS / 1° TUMOR / NOTeS (the text layer prints “10 TUMOR”: the degree sign extracts as a zero)", rng(241, 17, 21), [241]),
    ("The Bone row — Prostate, breast >> lung > kidney, colon; predilection for axial skeleton A; bone metastasis can be Blastic (eg, prostate, small cell lung cancer), Mixed (eg, breast), Lytic (eg, kidney, colon, non-small cell lung cancer)", rng(241, 23, 32), [241]),
    ("The Liver row content — Colon > breast >> pancreas, lung, prostate; scattered throughout liver parenchyma B", rng(241, 34, 36), [241]),
    ("The Lung row — Colon, breast >> kidney, prostate; typically involve both lungs", rng(241, 38, 42), [241]),
    ("The Brain row — Lung > breast >> melanoma > colon, prostate; usually seen at gray-white matter junction", rng(241, 44, 48), [241]),
    ("The two letter markers A and B — the photographs-described evidence (A = the bone-metastasis spine image beside the Bone row; B = the gross liver metastases photograph beside the Liver row; both copyrighted, described in text, never reproduced) + the Liver row label between them", rng(241, 50, 53), [241]),
    ("The footer print lines — the indd plate stamp and the timestamp (page identity, book 219)", rng(241, 55, 57), [241]),
]
for c, q, pgs in E15:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"metastasis-patterns: evidence {len(kept)}/{len(E15)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m15 = {"topicId": "metastasis-patterns", "title": "Metastasis: Organ Patterns & Routes",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Neoplasia", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [241], "bookPages": "219–219"},
    "sourceEvidence": kept, "visualIds": ["metastasis-route-map"],
    "mechanismIds": ["clash-route-map", "soil-seed-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure (five patterns, five traps, three pivots, and the five-option miniCase — multiple-vs-solitary liver lesions with the colon primary routing) layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the CLaSH paragraph and the 4-row organ table; the attack structure and the miniCase are KYP designs.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "routing-synthesis",
         "summary": "The first-capillary-bed routing logic (colon → portal vein → liver; liver → hepatic veins → IVC → lungs; lung → pulmonary veins → systemic arteries → brain and bone) and the four-frame reading protocol (the lane, the lists, the bone fork, the counters) — KYP's synthesis of why the organ lists rank as they do.",
         "origin": "outside-first-aid", "rationale": "The source prints the ranks without the anatomic why; the routing logic and the unified protocol are KYP designs.",
         "location": "core.keyIdea + mechanisms[1] (soil-seed-map) + the visual's first-capillary-bed panel"},
        {"id": "mnemonic-layer",
         "summary": "The four original KYP mnemonics (FCRH RIDES THE BLOODSTREAM / PROSTATE BUILDS, BREAST MIXES, KIDNEY CARVES / COLON OWNS THE LIVER, LUNG OWNS THE BRAIN / COUNT THE SPOTS: MANY MEANS METS) — the source's own CLaSH is quoted verbatim in the note's tables and is NOT one of KYP's four; no other mnemonic prints on the page.",
         "origin": "outside-first-aid", "rationale": "Only CLaSH prints on book 219 (in the body paragraph, not the margins — VLM census confirmed); the four codes are KYP designs.",
         "location": "mnemonics + the visual's rule panels"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: TWO copyrighted photographs (p241's A — a sagittal MR image of the spine showing the axial skeleton: grayscale vertebral column with bright fatty marrow, red arrows pointing to metastatic lesions at the labeled vertebral levels T8 and L1, boxed letter A at the image's top-left, beside the Bone row; p241's B — a gross liver specimen: the cut surface of two liver halves on a teal background, dark reddish-brown parenchyma with large pale yellow-white/cream nodular metastatic masses with central necrotic discoloration, one large mass in each half, a white asterisk photographer credit at bottom-right, boxed letter B at the image's top-left, beside the Liver row) described-in-text only, never reproduced (the M32 convention). Text-layer quirk: the table's second column header extracts as “10 TUMOR” (the 1° degree sign extracts as a zero); on the page it prints 1° TUMOR. Single-page topic. CLaSH is the source's own mnemonic (quoted verbatim); the four KYP mnemonics are original. No margin mnemonics (VLM confirmed).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Neoplasia",
    "topicId": "metastasis-patterns", "requiredInKYP": True}
def sv(n, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"metastasis-patterns-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": [241], "bookPages": "219"},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv15 = [
    sv(1, "VISUAL_TABLE", "The Common metastases paragraph + the 4-row site-of-metastasis table (book 219)",
       "The CLaSH route rule with the four hematogenous carcinomas, the frequency rule, the multiple-vs-solitary rule, and the 4-row table (Bone / Liver / Lung / Brain × SITE OF METASTASIS / 1° TUMOR / NOTES — the text layer prints the header “10 TUMOR”, a mangled degree sign) with the Bone row's Blastic/Mixed/Lytic fork. Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "metastasis-route-map", "the registry visual (the route split band + the four organ target cards) + blocks[1] and blocks[2] the table blocks carried verbatim"),
    sv(2, "RADIOLOGY", "Photograph A — the bone-metastasis spine image beside the Bone row (book 219)",
       "An 188x245 8bpc raster, lettered A beside “Predilection for axial skeleton A”: a sagittal MR image of the spine showing the axial skeleton — a grayscale vertebral column with bright fatty marrow and dark CSF/vertebral bodies; red arrows point to metastatic lesions at the labeled vertebral levels T8 and L1 (white labels with red arrows); the white boxed letter A sits at the image's top-left. COPYRIGHTED — described in text, never reproduced.",
       "SOURCE_REFERENCE", "metastasis-route-map", "described-in-text in the registry visual's photographs panel + blocks[2] the Bone row's bracketed description + blocks[3] the photographs table"),
    sv(3, "GROSS_PATHOLOGY", "Photograph B — the gross liver metastases photograph beside the Liver row (book 219)",
       "An 188x150 8bpc raster, lettered B beside “Scattered throughout liver parenchyma B”: a gross specimen photograph — the cut surface of two liver halves on a teal/blue-green background; the dark reddish-brown liver parenchyma contains large, pale yellow-white/cream, somewhat nodular metastatic masses with central discoloration (necrosis), one large mass in each half; a small white asterisk (photographer credit) at bottom-right; the white boxed letter B sits at the image's top-left. COPYRIGHTED — described in text, never reproduced.",
       "SOURCE_REFERENCE", "metastasis-route-map", "described-in-text in the registry visual's photographs panel + blocks[2] the Liver row's bracketed description + blocks[3] the photographs table"),
]
out_dir = CACHE / "staging-p15"
(out_dir / "manifests").mkdir(parents=True, exist_ok=True)
(out_dir / "visual-inventory").mkdir(parents=True, exist_ok=True)
(out_dir / "manifests" / "metastasis-patterns.json").write_text(json.dumps(m15, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(out_dir / "visual-inventory" / "metastasis-patterns.json").write_text(
    json.dumps({"topicId": "metastasis-patterns", "chapterId": "pathology", "inventory": inv15,
                "coverageAudit": {"topicId": "metastasis-patterns", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 3,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's text (the CLaSH paragraph and the 4-row organ table) is adapted as the registry visual and carried verbatim in the note's tables. The TWO photographs (A — the sagittal spine MR with red arrows at T8/L1; B — the gross liver with pale nodular metastases) are COPYRIGHTED — described in text in the registry visual's photographs panel and the note's photographs block, never reproduced (the M32 convention). CLaSH is the source's own mnemonic (quoted verbatim); the four KYP mnemonics are original. Nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("P15 staging manifest + inventory done")
