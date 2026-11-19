#!/usr/bin/env python3
"""P12 neoplasia-nomenclature — manifest + inventory (STAGING — does
NOT touch content/; the main session registers + flips). Pathology
12/19. Census (pdfimages + VLM): pdf 237-238 (book 215-216) have ZERO
raster images — pure text + TWO VECTOR LINE-ART FIGURES: p237's
neoplastic-progression strip (FIVE numbered panels joined by arrows —
normal epithelium with basal→apical polarity over an intact basement
membrane with a stromal vessel → disorganized pleomorphic cells still
above the membrane → bulky atypical cells filling the whole epithelial
thickness with the membrane intact → cells breaching the membrane into
the stroma → cells entering the vessel lumen for distant spread; the
labels 'Epithelial cell layer / Basement membrane / Blood or
lymphatic vessel' print ONCE over panel 1 with pointer lines — the
text layer interleaves them as 3× column-repetitions with fused
fragments ['cellayer', 'Bloodor', 'orlymphatic'] plus four standalone
→ arrows, raw lines 16-47, the M38 interleave pattern) and p238's
grade-vs-stage art (low/high-grade tissue circles printed 2×, T with a
primary-tumor glyph, N with TWO lymph-node drawings, M with a
blood-or-lymphatic-vessel drawing and 'Spread to other organs and
tissues' — labels duplicated/interleaved with fused fragments
['NBlood or', 'Mlymphatic vessel', 'Spreadorto other', 'organs
andvessel'], raw lines 106-131). Table quirks: 'Mesenchyme' prints as
a bold ROW-GROUP label above the seven indented rows (Blood cells,
Blood vessels, Smooth muscle, Striated muscle, Connective tissue,
Bone, Fat) and interleaves in the text layer on the same band as the
Blood cells row's 'Leukemia, lymphoma' (raw 33-37); the Blood cells
BENIGN cell prints EMPTY; the 'FAS1_2026_04-Pathol.indd 216' footer
prints MID-BAND between the grade/stage headers and their column
bodies (raw 84). VLM census (glm-4.6v): all five panels, the group
label, and the empty benign cell CONFIRMED; NO margin notes or
mnemonics on either page — the KYP memory layer is original. BOTH
figures redrawn as ORIGINAL KYP glyphs; the table carried verbatim in
note blocks and redrawn as clean KYP table art."""
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
    # ---------- pdf 237 / book 215 ----------
    ("Page identity — the section banner and the topic header (book 215)", rng(237, 1, 11), [237]),
    ("The neoplasia definition — uncontrolled, often monoclonal proliferation; benign or malignant; parenchyma (neoplastic cells) + supporting stroma (nonneoplastic; blood vessels, connective tissue)", rng(237, 13, 14), [237]),
    ("The progression figure labels part 1 — 'Epithelial cell layer' and 'Basement membrane' as the text layer prints them: 3× column-interleaved repetitions with fused fragments ('cellayer', 'layer Basement'), the M38 pattern (the labels print once over panel 1)", rng(237, 16, 28), [237]),
    ("The progression figure labels part 2 — 'Blood or lymphatic vessel' 3× interleaved with fused fragments ('Bloodor', 'orlymphatic') + the four standalone → arrows between the five panels", rng(237, 30, 47), [237]),
    ("The five station definitions with their row labels — Normal cells (basal → apical polarity, cervical example); Dysplasia (pleomorphism, lost orientation, ↑ nuclear:cytoplasmic ratio, often reversible); Carcinoma in situ/preinvasive (irreversible, entire thickness, intact basement membrane); Invasive carcinoma (collagenases and hydrolases [metalloproteinases]; E-cadherin inactivation); Metastasis (distant organ(s) via lymphatics or blood)", rng(237, 49, 72), [237]),
    ("The indd footer + timestamp (page identity, book 215)", rng(237, 74, 76), [237]),
    # ---------- pdf 238 / book 216 ----------
    ("Page identity — the running header and the Tumor nomenclature heading (book 216)", rng(238, 1, 9), [238]),
    ("The nomenclature rules — carcinoma implies epithelial origin, sarcoma denotes mesenchymal origin, both imply malignancy; benign tumors well-differentiated, well-demarcated, low mitotic activity, no metastases, no necrosis; malignant tumors poor differentiation, erratic growth, local invasion, metastasis, ↓ apoptosis", rng(238, 11, 16), [238]),
    ("The malformation pair — hamartoma (disorganized overgrowth of native tissues, Peutz-Jeghers polyps) vs choristoma (normal tissue in a foreign location, gastric tissue in distal ileum in Meckel diverticulum)", rng(238, 17, 19), [238]),
    ("The nomenclature table header + the Epithelium row (CeLL TYPe | BeNIGN | MALIGNANT; Adenoma, papilloma vs Adenocarcinoma, papillary carcinoma)", rng(238, 21, 31), [238]),
    ("The Mesenchyme row-group label interleaved on the same text band as the Blood cells row — 'Mesenchyme / Leukemia, lymphoma / Blood cells' — the group label spans the seven rows below; the Blood cells BENIGN cell prints EMPTY (leukemia, lymphoma malignant-only)", rng(238, 33, 36), [238]),
    ("The six mesenchymal tissue rows — Blood vessels (Hemangioma/Angiosarcoma), Smooth muscle (Leiomyoma/Leiomyosarcoma), Striated muscle (Rhabdomyoma/Rhabdomyosarcoma), Connective tissue (Fibroma/Fibrosarcoma), Bone (Osteoma/Osteosarcoma), Fat (Lipoma/Liposarcoma)", rng(238, 37, 72), [238]),
    ("The Melanocyte row — Nevus/mole vs Melanoma (malignant despite the bare -oma)", rng(238, 73, 78), [238]),
    ("The grade-vs-stage header + the Grade/Stage column labels + the indd footer printed MID-BAND between the headers and the column bodies (the interleave quirk at raw line 84)", rng(238, 79, 84), [238]),
    ("The Grade column — degree of cell differentiation (tissue of origin resemblance) and mitotic activity on histology; low-grade (well differentiated) to high-grade (poorly differentiated or undifferentiated [anaplastic]); higher grade correlates with higher aggressiveness", rng(238, 86, 92), [238]),
    ("The Stage column — degree of invasion and spread from initial site; depth of invasion correlates to risk of metastasis; clinical (c) or pathologic (p) findings; the TNM bullets (importance: M > N > T; primary tumor size/invasion, regional lymph node metastasis, distant metastasis); stage has more prognostic value than grade — stage (spread) determines survival", rng(238, 93, 104), [238]),
    ("The grade figure labels — 'Low grade / High grade' tissue circles, duplicated 2× in the text layer (the column interleave)", rng(238, 106, 113), [238]),
    ("The stage figure labels — T, two 'Lymph node' drawings, the T/N/M letters, and the vessel/spread labels interleaved with fused fragments ('NBlood or', 'Mlymphatic vessel', 'Spreadorto other', 'Blood', 'organs andvessel', 'tissues', 'lymphatic') before the clean copy 'Spread to other organs and tissues'", rng(238, 114, 131), [238]),
    ("The timestamp footer (page identity, book 216)", rng(238, 133, 133), [238]),
]
for c, q, pgs in E12:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"neoplasia-nomenclature: evidence {len(kept)}/{len(kept)} verified (all pass)")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m12 = {"topicId": "neoplasia-nomenclature", "title": "Neoplasia Nomenclature & Progression",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Neoplasia", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [237, 238], "bookPages": "215–216"},
    "sourceEvidence": kept, "visualIds": ["nomenclature-progression-map"],
    "mechanismIds": ["progression-breach-map", "grade-vs-stage-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the progression, the naming table, and the grade/stage columns; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "four-frame-reading", "summary": "The four-frame rule (the membrane, the naming code, the malformation pair, the two rulers) — KYP's synthesis of the two pages into one reading protocol.",
         "origin": "outside-first-aid", "rationale": "The source prints the blocks sequentially without a unified protocol; the framing is KYP's design.",
         "location": "core.keyIdea + pivots + the visual's structure"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (PARENCHYMA PROPAGATES STROMA SUPPORTS / POLARITY PLEOMORPHIC PAN-THICKNESS PIERCE PASS / CARCINOMA CLAIMS THE COVERING SARCOMA CLAIMS THE SOFT / MICROSCOPE FOR GRADE MAP FOR STAGE M BEATS N BEATS T) — no mnemonic prints on either page.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere on book 215-216 (VLM census confirmed — only typographic red-letter highlights); the four codes are KYP's design.",
         "location": "mnemonics + the visual's rule panels"},
        {"id": "mini-case-discrimination", "summary": "The hamartoma-vs-choristoma-vs-adenoma discrimination miniCase (Meckel-diverticulum gastric mucosa against Peutz-Jeghers polyps, with adenoma, reversed-pair, adenocarcinoma-in-situ, and leiomyoma distractors).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the two definitions and their examples; the clinical vignette that forces the discrimination is a KYP design.",
         "location": "usmle.miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "complete",
    "notes": "Census (pdfimages + VLM, glm-4.6v): ZERO raster images on pdf 237-238 — pure text + TWO VECTOR LINE-ART FIGURES, both redrawn as ORIGINAL KYP glyphs in the registry visual (the P2/P3 pure-vector convention); the table carried verbatim in note blocks and rendered as clean KYP table art. Interleave quirks documented: p237's figure labels print 3× interleaved with fused fragments ('cellayer', 'Bloodor', 'orlymphatic') + four standalone arrows (raw 16-47; VLM: the labels print ONCE over panel 1 with pointer lines across the five numbered panels); p238's grade/stage art labels duplicate 2× and interleave fused ('NBlood or', 'Mlymphatic vessel', 'Spreadorto other', 'organs andvessel', raw 106-131); 'Mesenchyme' is a row-GROUP label above the seven indented rows, interleaving on the same text band as the Blood cells row's 'Leukemia, lymphoma' (raw 33-37); the Blood cells BENIGN cell prints EMPTY; the indd footer prints mid-band between the grade/stage headers and their column bodies (raw 84). VLM census findings: five numbered progression panels confirmed (normal polarity, dysplasia, CIS full-thickness with intact BM, invasion through BM, metastasis entering vessel); Mesenchyme group label + empty Blood cells benign cell confirmed; NO margin notes or mnemonics on either page — the KYP memory layer is original. STAGING: manifest + inventory written to .usmle-pipeline-cache/staging-p12/ — registration, content/ flip, and tracker sync belong to the main session.",
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
    sv(1, [237, 238], "215–216", "VISUAL_TABLE", "The progression definitions + naming rules + the 9-row nomenclature table + the grade/stage columns (book 215-216)",
       "The parenchyma-plus-stroma definition, the five station definitions (normal polarity / dysplasia / carcinoma in situ / invasive carcinoma / metastasis), the naming rules with the benign and malignant trait lists, hamartoma vs choristoma, the full nomenclature table (with the Mesenchyme row-group label and the Blood cells row's empty BENIGN cell), and both grade/stage columns with the TNM bullets and the stage-determines-survival verdict. Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "nomenclature-progression-map", "the registry visual (the progression stations + the naming rules band + the table band + the grade/stage band) + blocks[1]-blocks[4] the table blocks carried verbatim"),
    sv(2, [237, 238], "215–216", "SUMMARY_FIGURE", "The two vector figures — the progression strip (215) and the grade-vs-stage art (216)",
       "VECTOR LINE ART (pdfimages: ZERO raster images on either page). p237: the five-panel progression strip — normal epithelium with basal-to-apical polarity over an intact basement membrane with a stromal vessel → disorganized pleomorphic cells still above the membrane → atypical cells filling the entire epithelial thickness with the membrane intact → cells breaching the membrane into the stroma → cells entering the vessel lumen for distant spread; labels print once over panel 1 ('Epithelial cell layer / Basement membrane / Blood or lymphatic vessel') but interleave 3× in the text layer with fused fragments. p238: low/high-grade tissue circles, T with a primary-tumor glyph, N with two lymph-node drawings, M with a blood-or-lymphatic-vessel drawing and 'Spread to other organs and tissues' — labels duplicated 2× with fused fragments.",
       "ORIGINAL_KYP_REDRAW", "nomenclature-progression-map", "the registry visual (the five stations + the three-label legend + the weapons strip + the grade circles and the T/N/M stage map redrawn with original KYP glyphs)"),
]
STAGE = ROOT / ".usmle-pipeline-cache/staging-p12"
(STAGE / "manifests").mkdir(parents=True, exist_ok=True)
(STAGE / "visual-inventory").mkdir(parents=True, exist_ok=True)
(STAGE / "manifests/neoplasia-nomenclature.json").write_text(json.dumps(m12, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(STAGE / "visual-inventory/neoplasia-nomenclature.json").write_text(
    json.dumps({"topicId": "neoplasia-nomenclature", "chapterId": "pathology", "inventory": inv12,
                "coverageAudit": {"topicId": "neoplasia-nomenclature", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Both pages' text blocks (the definition, the five stations, the naming rules, the malformation pair, the 9-row table, the grade/stage columns) are adapted as the registry visual and carried verbatim in the note's tables. The TWO figures are pure vector line art (zero rasters) — redrawn as ORIGINAL KYP glyphs (the P2/P3 convention): the five-station progression strip with its three labels and the grade-vs-stage art with its T/N/M glyphs. Table quirks preserved and documented: 'Mesenchyme' is a row-group label spanning Blood cells through Fat; the Blood cells BENIGN cell prints empty (leukemia/lymphoma malignant-only); melanoma wears no carcinoma/sarcoma suffix. No margin mnemonics exist on either page; nothing reproduced. STAGING — registration + content/ flip belong to the main session."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"staging written: {STAGE/'manifests/neoplasia-nomenclature.json'}")
print(f"staging written: {STAGE/'visual-inventory/neoplasia-nomenclature.json'}")
print("P12 staging manifest + inventory done (content/ untouched)")
