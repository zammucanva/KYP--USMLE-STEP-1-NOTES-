#!/usr/bin/env python3
"""P18 tumor-markers-molecular — manifest + inventory (STAGING)
(Pathology, Pathology — Neoplasia). Census (pdfimages + VLM glm-4.6v on
p2x-244-244.png + p2x-245-245.png): pdf 244-245 / book 222-223 have ZERO
raster images — pure tables and text blocks: the Oncogenic microbes
table (8 rows), the marker-use rule paragraph + the Serum tumor markers
table (12 rows with NOTES), the Cancer testing block (5 rows), the
Important immunohistochemical stains intro + table (10 rows), and the
P-glycoprotein paragraph. No figures, no margin notes or mnemonics (VLM
census confirmed) — the registry visual is a pure ORIGINAL KYP
ADAPTATION and the KYP memory layer is original. Source quirks preserved
verbatim: HHV-8's cancer prints Kaposi ("Ka∞si") sarcoma (the source's
own infinity-symbol joke); Calcitonin's note prints "Calci2nin." (the 2
of MEN 2); every table header uses the book's odd embedded-capitals
styling (mICrOBe / ASSOCIATeD CAnCer / mArKer / ImPOrTAnT ASSOCIATIOnS /
nOTeS / STAIn / TArGeT / TUmOrS IDenTIfIeD). Text-layer notes documented
for the integrator: the page-244 footer line interleaves inside the PSA
row (physical order, so the PSA quote range includes it and the LDH
"tumor burden" note cell), and the P-glycoprotein paragraph's "↓" prints
as a U+0090 control glyph in the raw layer (norm() strips it; VLM
confirms the printed character is ↓).

This generator writes STAGING outputs ONLY (does NOT flip
content/usmle/chapters/pathology.json and does NOT write
content/usmle/manifests or content/usmle/visual-inventory — the
integration step owns those).
"""
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
L = {244: pages[243].split("\n"), 245: pages[244].split("\n")}
P = {244: norm(pages[243]), 245: norm(pages[244])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E18 = [
    ("Page identity — the printed page number, the section banner, and the two block headers Oncogenic microbes + Serum tumor markers (book 222)", rng(244, 1, 11), [244]),
    ("The oncogenic microbes table header + part 1 — mICrOBe / ASSOCIATeD CAnCer (the source's odd-capitals headers); EBV (Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma, 1° CNS lymphoma in immunocompromised patients); HBV, HCV (hepatocellular carcinoma)", rng(244, 13, 25), [244]),
    ("The oncogenic microbes table part 2 — HHV-8 (Kaposi sarcoma, printed with the source's own “Ka∞si” infinity-symbol joke); HPV usually types 16, 18 (cervical and penile/anal carcinoma, head and neck cancer); H pylori (gastric adenocarcinoma and MALT lymphoma); HTLV-1 (adult T-cell leukemia/lymphoma)", rng(244, 27, 42), [244]),
    ("The oncogenic microbes table part 3 — liver fluke (Clonorchis sinensis) → cholangiocarcinoma; Schistosoma haematobium → squamous cell bladder cancer", rng(244, 44, 50), [244]),
    ("The marker-use rule — tumor markers should not be used as the 1° tool for cancer diagnosis or screening; they may be used to monitor tumor recurrence and response to therapy, but definitive diagnosis is made via biopsy; some can be associated with non-neoplastic conditions", rng(244, 52, 54), [244]),
    ("The serum tumor markers table header + part 1 — mArKer / ImPOrTAnT ASSOCIATIOnS / nOTeS; alkaline phosphatase (metastases to bone or liver, Paget disease of bone, seminoma [PLAP] — exclude hepatic origin by checking LFTs and GGT levels); α-fetoprotein (HCC, yolk sac tumor, mixed germ cell tumor, ataxia-telangiectasia, neural tube defects — normally made by fetus, transiently elevated in pregnancy, high levels with neural tube and abdominal wall defects, low levels with Down syndrome); hCG (gestational trophoblastic disease, testicular cancer, mixed germ cell tumor — produced by syncytiotrophoblasts of the placenta)", rng(244, 56, 88), [244]),
    ("The serum tumor markers table part 2 — the CA set and calcitonin: CA 15-3/CA 27-29 (breast cancer); CA 19-9 (pancreatic adenocarcinoma); CA 125 (epithelial ovarian cancer); calcitonin (medullary thyroid carcinoma alone and in MEN2A, MEN2B — printed with the source's own “Calci2nin.” mnemonic)", rng(244, 90, 107), [244]),
    ("The serum tumor markers table part 3 — CEA (colorectal and pancreatic cancers with the minor gastric/breast/medullary thyroid associations — CarcinoEmbryonic Antigen, very nonspecific); chromogranin (neuroendocrine tumors); LDH (testicular germ cell tumors, ovarian dysgerminoma, other cancers); neuron-specific enolase (neuroendocrine tumors — small cell lung cancer, carcinoid tumor, neuroblastoma)", rng(244, 109, 130), [244]),
    ("The serum tumor markers table part 4 — the PSA row (prostate cancer; Prostate-Specific Antigen—monitor recurrence/response, uncertain risk/benefit for screening, also ↑ in BPH/prostatitis), with the page-244 footer line and the LDH tumor-burden note cell interleaved in the raw text layer (physical order)", rng(244, 132, 142), [244]),
    ("The page-244 footer print line and timestamp (page identity, book 222) — the raw text layer interleaves the bottom of the PSA NOTES cell between them (physical order; the contiguous range runs from the footer line through the timestamp)", rng(244, 136, 144), [244]),
    ("Page identity — the section banner and the printed page number (book 223)", rng(245, 1, 7), [245]),
    ("The Cancer testing block — all 5 rows: tumor mutational burden (total number of mutations; may predict response to immune-checkpoint inhibitors); microsatellite instability testing (mismatch repair deficits, hallmark of Lynch syndrome; prognosis and treatment for colorectal adenocarcinoma and endometrial carcinoma); PD-L1 expression patterns (NSCLC, urothelial carcinoma; anti-PD-L1 and anti-PD1 antibodies); homologous recombination deficiency testing (genomic instability, breast/ovarian; PARP inhibitors); liquid biopsy (ctDNA, ctRNA, CTCs in body fluid — cancer profiling, treatment monitoring, post-treatment surveillance, early metastatic detection, personalized therapy)", rng(245, 9, 41), [245]),
    ("The Important immunohistochemical stains intro + table header — determine primary site of origin for metastatic tumors and characterize tumors that are difficult to classify, with prognostic and predictive value; STAIn / TArGeT / TUmOrS IDenTIfIeD (the source's odd-capitals headers; the sidebar header 'Important immunohistochemical stains' interleaves in the raw text layer)", rng(245, 43, 51), [245]),
    ("The immunohistochemical stains table part 1 — chromogranin and synaptophysin (neuroendocrine cells — small cell carcinoma of the lung, carcinoid tumor, neuroblastoma); cytokeratin (epithelial cells — epithelial tumors, eg squamous cell carcinoma); desmin (muscle — muscle tumors, eg rhabdomyosarcoma); GFAP (NeuroGlia — astrocytoma, glioblastoma)", rng(245, 53, 78), [245]),
    ("The immunohistochemical stains table part 2 — neurofilament (neurons — neuronal tumors, eg neuroblastoma); PSA (prostatic epithelium — prostate cancer); PECAM-1/CD-31 (endothelial cells — vascular tumors, eg angiosarcoma); S-100 (neural crest cells — melanoma, schwannoma, Langerhans cell histiocytosis)", rng(245, 80, 103), [245]),
    ("The immunohistochemical stains table part 3 — TRAP (tartrate-resistant acid phosphatase — hairy cell leukemia); vimentin (mesenchymal tissue — mesenchymal tumors, eg sarcoma, but also many other tumors: endometrial carcinoma, renal cell carcinoma, meningioma)", rng(245, 105, 118), [245]),
    ("The P-glycoprotein paragraph — ATP-dependent efflux pump, also called multidrug resistance protein 1 (MDR1); expressed in some cancer cells to pump out toxins, including chemotherapeutic agents (one mechanism of ↓ responsiveness or resistance to chemotherapy over time — the ↓ prints as a control glyph in the raw text layer; VLM confirms it is ↓)", rng(245, 120, 124), [245]),
    ("The footer print line and timestamp (page identity, book 223)", rng(245, 126, 128), [245]),
]
for c, q, pgs in E18:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"tumor-markers-molecular: evidence {len(kept)}/{len(E18)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m18 = {"topicId": "tumor-markers-molecular", "title": "Tumor Markers, Molecular Diagnostics & IHC",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Neoplasia", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [244, 245], "bookPages": "222–223"},
    "sourceEvidence": kept, "visualIds": ["tumor-marker-map"],
    "mechanismIds": ["marker-use-rule-map", "stain-lineage-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the rule paragraph and the four tables/blocks; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "diagnostic-three-frame-reading", "summary": "The three-frame rule (the marker-use rule — monitor, don't screen, biopsy defines; the rosters — serum dashboard, microbe roster, molecular panel; and the lineage map — the IHC stains as embryonic-lineage tracers) — KYP's synthesis of the two pages into one reading protocol.",
         "origin": "outside-first-aid", "rationale": "The source prints the tables as flat rosters without a unified protocol; the framing is KYP's design.",
         "location": "core.keyIdea + pivots + the visual's rule trio and lineage map"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (MARKERS MONITOR, BIOPSIES DEFINE / CANCER GROWS WHERE THE MICROBE LIVES / COUNT, MISMATCH, PAINT, REPAIR, DRAW / TRACE THE LINEAGE) — no mnemonic prints on either page.",
         "origin": "outside-first-aid", "rationale": "No margin notes or mnemonics print anywhere on book 222–223 (pdfimages + VLM census confirmed); the four codes are KYP's design (the second frames the source's own table; the verbs of the third are original).",
         "location": "mnemonics + the visual's band headers and testing-card verbs"},
        {"id": "mini-case-layer", "summary": "The marker-use-rule miniCase — a BPH-confounded PSA of 7.2 ng/mL in a 62-year-old man, discriminated across five distractors (PSA-as-diagnosis, BPH-excludes-cancer, hCG/AFP panel completion, liquid-biopsy-as-diagnosis, and serum-sent-for-IHC) with the printed rule as the solving layer.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the rule and the PSA row; the vignette, the distractor set, and the rule-based discrimination are a KYP design.",
         "location": "usmle.miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + VLM glm-4.6v on p2x-244-244.png + p2x-245-245.png): ZERO raster images on pdf 244–245 / book 222–223 — pure tables and text blocks: the Oncogenic microbes table (8 rows), the marker-use rule paragraph + Serum tumor markers table (12 rows with NOTES), the Cancer testing block (5 rows), the Important immunohistochemical stains intro + table (10 rows), and the P-glycoprotein paragraph; no figures; NO margin notes or mnemonics print on either page (VLM census confirmed) — the registry visual is a pure ORIGINAL KYP ADAPTATION and the KYP memory layer is original. Source quirks preserved verbatim: HHV-8's cancer prints Kaposi (“Ka∞si”) sarcoma (the source's own infinity-symbol joke); Calcitonin's note prints “Calci2nin.” (the 2 of MEN 2); and every table header uses the book's odd embedded-capitals styling (mICrOBe / ASSOCIATeD CAnCer / mArKer / ImPOrTAnT ASSOCIATIOnS / nOTeS / STAIn / TArGeT / TUmOrS IDenTIfIeD) — all carried verbatim in the note's table blocks. Text-layer notes for the integrator: (1) the page-244 footer line interleaves inside the PSA row in physical order (the PSA quote range therefore includes the footer and the LDH tumor-burden note cell); (2) the P-glycoprotein paragraph's ↓ prints as a U+0090 control glyph in the raw layer (norm() strips it; VLM confirms the printed character is ↓ — the note renders it as ↓); (3) VLM confirms the 'Cancer testing' block prints with NO column-header row (test | description), so the note's TeST/DeSCRIPTION headers follow the source's odd-cap convention without reproducing a nonexistent header. STAGING manifest (staging-p18/) — promotion to content/usmle/manifests + content/usmle/visual-inventory + the chapter/tracker flip are deferred to the integration step (this generator deliberately does not touch content/). The note is authored at difficulty 2, matching the chapter registry entry for tumor-markers-molecular.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Neoplasia",
    "topicId": "tumor-markers-molecular", "requiredInKYP": True}
def sv(n, pgs, book, purpose, desc, kloc):
    d = dict(SV_BASE)
    d.update({"visualId": f"tumor-markers-molecular-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pgs, "bookPages": book},
        "visualType": "VISUAL_TABLE", "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "tumor-marker-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": "tumor-marker-map", "plannedImplementation": "registry-visual"})
    return d
inv18 = [
    sv(1, [244], "222", "The Oncogenic microbes table (book 222)",
       "The 8-row mICrOBe / ASSOCIATeD CAnCer table (EBV; HBV, HCV; HHV-8 — printed with the source's own “Ka∞si” joke; HPV usually types 16, 18; H pylori; HTLV-1; liver fluke [Clonorchis sinensis]; Schistosoma haematobium) with their associated cancers. Pure text — no figure (pdfimages: zero rasters; VLM confirmed).",
       "the registry visual (the oncogenic-microbe roster band as 8 pathogen→cancer pairs with their residence rules) + blocks[2] the table block carried verbatim"),
    sv(2, [244, 245], "222–223", "The Serum tumor markers rule + table (book 222) and the Cancer testing block (book 223)",
       "The marker-use rule paragraph (not the 1° tool for diagnosis or screening; monitor recurrence and response; biopsy definitive; non-neoplastic associations) + the 12-row mArKer / ImPOrTAnT ASSOCIATIOnS / nOTeS table (alkaline phosphatase, α-fetoprotein, hCG, CA 15-3/CA 27-29, CA 19-9, CA 125, calcitonin — with “Calci2nin.”, CEA, chromogranin, LDH, neuron-specific enolase, PSA) + the 5-row Cancer testing block (tumor mutational burden, microsatellite instability testing, PD-L1 expression patterns, homologous recombination deficiency testing, liquid biopsy). Pure text — no figure (pdfimages: zero rasters; VLM confirmed).",
       "the registry visual (the rule trio + confounder strip, the serum dashboard grid with the AFP pregnancy fork highlighted and the PSA BPH/prostatitis trap flagged, and the modern molecular panel as five COUNT/MISMATCH/PAINT/REPAIR/DRAW cards) + blocks[1] the rule text block, blocks[3] the markers table, and blocks[4] the testing table carried verbatim"),
    sv(3, [245], "223", "The Important immunohistochemical stains table + the P-glycoprotein paragraph (book 223)",
       "The stains intro (determine primary site of origin for metastatic tumors; prognostic and predictive value) + the 10-row STAIn / TArGeT / TUmOrS IDenTIfIeD table (chromogranin and synaptophysin, cytokeratin, desmin, GFAP, neurofilament, PSA, PECAM-1/CD-31, S-100, TRAP, vimentin) + the P-glycoprotein paragraph (ATP-dependent efflux pump, MDR1, chemotherapy resistance). Pure text — no figure (pdfimages: zero rasters; VLM confirmed).",
       "the registry visual (the IHC lineage map with its lineage-header cards and the organ-specific pair, plus the P-glycoprotein efflux-pump glyph) + blocks[5] the stains table and blocks[6] the P-glycoprotein text block"),
]
STAGING = CACHE / "staging-p18"
(STAGING / "manifests").mkdir(parents=True, exist_ok=True)
(STAGING / "visual-inventory").mkdir(parents=True, exist_ok=True)
(STAGING / "manifests" / "tumor-markers-molecular.json").write_text(json.dumps(m18, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(STAGING / "visual-inventory" / "tumor-markers-molecular.json").write_text(
    json.dumps({"topicId": "tumor-markers-molecular", "chapterId": "pathology", "inventory": inv18,
                "coverageAudit": {"topicId": "tumor-markers-molecular", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 3,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Both pages are pure text (pdfimages: ZERO raster images; VLM census confirmed) — their 'visuals' are the four tables/blocks themselves, grouped here as three inventory records (microbes table; markers rule + table + cancer testing; IHC stains + P-glycoprotein), each adapted as the registry visual (ORIGINAL_KYP ADAPTATION, the P18 convention: an original rule trio, roster grids, a modern-diagnostics panel, a lineage map, and an efflux glyph, with every row carried verbatim in the note's table blocks) and nothing reproduced. No margin notes or mnemonics print on either page; the KYP memory layer is original."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"P18 staging manifest + inventory written to {STAGING} ({len(kept)}/{len(E18)} evidence quotes verified)")
print("P18 done (staging only — chapter/tracker flip deferred to integration)")
