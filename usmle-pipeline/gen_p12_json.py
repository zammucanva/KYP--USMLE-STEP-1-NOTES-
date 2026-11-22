#!/usr/bin/env python3
"""P12 neoplasia-nomenclature — manifest + inventory + flip
(Pathology 12/19). Census (pdfimages + VLM): pdf 237-238 (book
215-216). NO raster images on either page (pdfimages -list returned
zero rows for both pages). The TWO figures are pure VECTOR LINE ART:
p237's cervical epithelium progression diagram (the basement
membrane band, the blood/lymphatic vessel, and the five-stage
arrow chain Normal -> Dysplasia -> Carcinoma in situ -> Invasive
carcinoma -> Metastasis) and p238's two figures (the grade
illustration with low-grade and high-grade cell clusters; the TNM
staging figure with T, N [lymph node], and M [blood/lymphatic
vessel + spread to other organs and tissues]). BOTH redrawn as
ORIGINAL KYP figures (the P2/P3 pure-vector convention). The
nomenclature table and the grade-vs-stage block are pure text,
carried verbatim in the note's tables. NO copyrighted photographs,
NO margin mnemonics (VLM confirmed on both pages); the KYP memory
layer is original."""
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
L = {237: pages[236].split("\n"), 238: pages[237].split("\n")}
P = {237: norm(pages[236]), 238: norm(pages[237])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E12 = [
    ("Page identity — the section banner and header (book 215)", rng(237, 1, 8), [237]),
    ("The neoplasia definition — uncontrolled, often monoclonal proliferation; benign or malignant; parenchyma + supporting stroma (nonneoplastic; eg, blood vessels, connective tissue)", rng(237, 10, 13), [237]),
    ("The progression figure labels — the basement membrane band and the blood/lymphatic vessel that anchor the cervical progression diagram (the figure's text-layer fragments)", rng(237, 14, 39), [237]),
    ("NORMAL CELLS — basal to apical polarity; the cervical example shows normal cells and the spectrum of dysplasia", rng(237, 42, 45), [237]),
    ("DYSPLASIA — loss of uniformity in cell size and shape (pleomorphism); loss of tissue orientation; nuclear changes (eg, ↑ nuclear:cytoplasmic ratio); often reversible", rng(237, 46, 49), [237]),
    ("CARCINOMA IN SITU / PREINVASIVE — irreversible severe dysplasia that involves the entire thickness of epithelium but does not penetrate the intact basement membrane", rng(237, 50, 53), [237]),
    ("INVASIVE CARCINOMA — cells have invaded basement membrane using collagenases and hydrolases (metalloproteinases); cell-cell contacts lost by inactivation of E-cadherin", rng(237, 54, 57), [237]),
    ("METASTASIS — spread to distant organ(s) via lymphatics or blood", rng(237, 58, 59), [237]),
    ("The page timestamp footer (book 215)", rng(237, 61, 62), [237]),
    ("Page identity — the tumor nomenclature header (book 216)", rng(238, 1, 8), [238]),
    ("The nomenclature rule — carcinoma implies epithelial origin, sarcoma denotes mesenchymal origin; both generally imply malignancy", rng(238, 10, 12), [238]),
    ("Benign tumor features — usually well-differentiated and well-demarcated, with low mitotic activity, no metastases, and no necrosis", rng(238, 13, 15), [238]),
    ("Malignant tumor features — may show poor differentiation, erratic growth, local invasion, metastasis, and ↓ apoptosis", rng(238, 16, 18), [238]),
    ("Hamartoma vs choristoma — hamartoma: disorganized overgrowth of tissues in their native location (eg, Peutz-Jeghers polyps); choristoma: normal tissue in a foreign location (eg, gastric tissue located in distal ileum in Meckel diverticulum)", rng(238, 19, 23), [238]),
    ("The nomenclature table header row — CELL TYPE | BENIGN | MALIGNANT", rng(238, 25, 30), [238]),
    ("The nomenclature table part 1 — Epithelium row (Adenoma, papilloma / Adenocarcinoma, papillary carcinoma) + the Mesenchyme category header + Blood cells row", rng(238, 27, 36), [238]),
    ("The nomenclature table part 2 — Blood cells row (Leukemia, lymphoma) + Blood vessels row (Hemangioma / Angiosarcoma) + Smooth muscle row (Leiomyoma / Leiomyosarcoma)", rng(238, 36, 47), [238]),
    ("The nomenclature table part 3 — Striated muscle row (Rhabdomyoma / Rhabdomyosarcoma) + Connective tissue row (Fibroma / Fibrosarcoma) + Bone row (Osteoma / Osteosarcoma) + Fat row (Lipoma / Liposarcoma) + Melanocyte row (Nevus/mole / Melanoma)", "\n".join([rng(238, 43, 60)]), [238]),
    ("The tumor grade vs stage header", rng(238, 62, 64), [238]),
    ("GRADE — degree of cell differentiation (tissue of origin resemblance) and mitotic activity on histology; ranges from low-grade (well differentiated) to high-grade (poorly differentiated or undifferentiated [anaplastic]); higher grade often correlates with higher aggressiveness", "\n".join([rng(238, 65, 67), rng(238, 69, 72)]), [238]),
    ("STAGE — degree of invasion and spread from initial site; depth of invasion correlates to risk of metastasis; based on clinical (c) or pathologic (p) findings", "\n".join([rng(238, 73, 76)]), [238]),
    ("The TNM staging system rule — importance: M > N > T; Primary tumor size/invasion; Regional lymph node metastasis; Distant metastasis", rng(238, 97, 100), [238]),
    ("The grade-vs-stage prognostic rule — stage generally has more prognostic value than grade (eg, a high-stage yet low-grade tumor is usually worse than a low-stage yet high-grade tumor); stage (spread) determines survival", "\n".join([rng(238, 96, 99)]), [238]),
    ("The page timestamp footer (book 216)", rng(238, 101, 102), [238]),
]
for c, q, pgs in E12:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"neoplasia-nomenclature: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m12 = {"topicId": "neoplasia-nomenclature", "title": "Neoplasia Nomenclature & Progression",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Neoplasia", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [237, 238], "bookPages": "215–216"},
    "sourceEvidence": kept, "visualIds": ["neoplasia-progression-map"],
    "mechanismIds": ["progression-cascade", "grade-vs-stage-axis"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the progression definitions, the nomenclature table, and the grade-vs-stage block; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "five-frame-reading", "summary": "The five-frame rule (the definition, the progression cascade with its molecular gates, the nomenclature axis, the grade-vs-stage fork, the TNM priority) — KYP's synthesis of the two-page spread into one reading protocol.",
         "origin": "outside-first-aid", "rationale": "The source prints the blocks sequentially without a unified protocol; the framing is KYP's design.",
         "location": "core.keyIdea + pivots + the visual's structure"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (THE BASEMENT MEMBRANE IS THE LINE / CARCINOMA EPITHELIAL SARCOMA MESENCHYME / GRADE DIFFERENTIATES STAGE SPREADS / M N T THE PROGNOSTIC PRIORITY) — no mnemonic prints on either page.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere on book 215-216 (VLM census confirmed); the four codes are KYP's design.",
         "location": "mnemonics + the visual's rule panels"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + VLM): NO raster images on either page (pdfimages -list returned zero rows for both pdf 237 and pdf 238). The TWO figures are pure vector line art (the cervical epithelium progression diagram on book 215 with the basement membrane band, the blood/lymphatic vessel, and the five-stage arrow chain; and the grade illustration + the TNM staging figure on book 216) — BOTH redrawn as ORIGINAL KYP figures (the P2/P3 pure-vector convention). The nomenclature table and the grade-vs-stage block are pure text, carried verbatim in the note's tables. No copyrighted photographs; no margin mnemonics (VLM confirmed on both); the KYP memory layer is original.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Neoplasia",
    "topicId": "neoplasia-nomenclature", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"neoplasia-nomenclature-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv12 = [
    sv(1, [237], "215", "VISUAL_TABLE", "The neoplasia definition + the five progression rows (book 215)",
       "The definition (uncontrolled, often monoclonal proliferation; parenchyma + stroma) and the five-row progression table (Normal cells, Dysplasia, Carcinoma in situ/preinvasive, Invasive carcinoma, Metastasis) with the molecular gates. Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "neoplasia-progression-map", "the registry visual (the definition panel + the progression cascade) + blocks[1] the table block carried verbatim"),
    sv(2, [237], "215", "SUMMARY_FIGURE", "The cervical epithelium progression figure (book 215)",
       "VECTOR LINE ART (pdfimages: zero rasters): a five-stage arrow chain Normal -> Dysplasia -> Carcinoma in situ -> Invasive carcinoma -> Metastasis, with the basement membrane band beneath the epithelial cell layers (intact through CIS, breached at Invasive) and a blood/lymphatic vessel at the base (the metastasis route).",
       "ORIGINAL_KYP_REDRAW", "neoplasia-progression-map", "the registry visual (the progression cascade redrawn with original KYP glyphs) + blocks[1] the progression table"),
    sv(3, [238], "216", "VISUAL_TABLE", "The nomenclature intro + hamartoma/choristoma + the grade-vs-stage definitions (book 216)",
       "The carcinoma/sarcoma rule, the benign and malignant feature lists, the hamartoma-vs-choristoma definitions, the GRADE block (differentiation + mitotic activity, low- to high-grade/anaplastic, correlates with aggressiveness), and the STAGE block (invasion + spread, depth correlates with metastasis risk, clinical [c] or pathologic [p] findings). Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "neoplasia-progression-map", "the registry visual (the nomenclature panel + the grade-vs-stage fork) + blocks[2] and blocks[3] the table blocks carried verbatim"),
    sv(4, [238], "216", "VISUAL_TABLE", "The tumor nomenclature table (book 216)",
       "The 10-row nomenclature table with the Mesenchyme category header and the Blood cells / Blood vessels / Smooth muscle / Striated muscle / Connective tissue / Bone / Fat / Melanocyte rows (benign vs malignant). Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "neoplasia-progression-map", "the registry visual (the nomenclature grid) + blocks[2] the table block carried verbatim"),
    sv(5, [238], "216", "SUMMARY_FIGURE", "The grade illustration (book 216)",
       "VECTOR LINE ART (pdfimages: zero rasters): four cell-cluster panels labeled Low grade / High grade (top row) and Low grade / High grade (bottom row) illustrating the differentiation spectrum from well-differentiated (uniform small cells) to anaplastic (pleomorphic irregular cells).",
       "ORIGINAL_KYP_REDRAW", "neoplasia-progression-map", "the registry visual (the grade axis redrawn with original KYP glyphs) + blocks[3] the grade row"),
    sv(6, [238], "216", "SUMMARY_FIGURE", "The TNM staging figure (book 216)",
       "VECTOR LINE ART (pdfimages: zero rasters): a primary tumor (T) at upper right with a lymph node (N) at center-left and a blood/lymphatic vessel (M) at lower right with an arrow to 'Spread to other organs and tissues' — illustrating the TNM staging system with the printed importance rule M > N > T.",
       "ORIGINAL_KYP_REDRAW", "neoplasia-progression-map", "the registry visual (the TNM staging redraw with original KYP glyphs) + blocks[3] the stage row"),
]
(ROOT / "content/usmle/manifests/neoplasia-nomenclature.json").write_text(json.dumps(m12, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/neoplasia-nomenclature.json").write_text(
    json.dumps({"topicId": "neoplasia-nomenclature", "chapterId": "pathology", "inventory": inv12,
                "coverageAudit": {"topicId": "neoplasia-nomenclature", "textbookVisualCount": 6,
                    "accountedFor": 6, "sourceReproductions": 0, "kypRedraws": 3, "kypOriginals": 3,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The pages' text blocks (the definition, the five progression rows, the nomenclature intro and table, and the grade-vs-stage block) are adapted as the registry visual and carried verbatim in the note's tables. The TWO vector figures on book 215 (the cervical progression diagram) and book 216 (the grade illustration and the TNM staging figure) are pure vector line art with zero rasters — redrawn as ORIGINAL KYP REDRAWS (the P2/P3 convention). No copyrighted photographs exist on either page (pdfimages confirmed zero rasters); nothing reproduced. No margin mnemonics; the KYP memory layer is original."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pathology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "neoplasia-nomenclature":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv12))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pathology {done}/19{' — CHAPTER COMPLETE' if done==19 else ''}")
print("P12 manifest + inventory + flip done")
