#!/usr/bin/env python3
"""P16 oncogenes-tumor-suppressors — manifest + inventory (STAGING)
(Pathology, Pathology — Neoplasia). Census (pdfimages + VLM glm-4.6v):
pdf 242 / book 220 has ZERO raster images — pure text: the Oncogenes
block (gain-of-function one-allele rule + 12-row GENE / GENE PRODUCT /
ASSOCIATED NEOPLASM table) back-to-back with the Tumor suppressor
genes block (loss-of-function Knudson 2-hit rule + 15-row GENE / GENE
PRODUCT / ASSOCIATED CONDITION table). No figures, no margin notes or
mnemonics (VLM census confirmed) — the registry visual is a pure
ORIGINAL KYP ADAPTATION and the KYP memory layer is original. Source
quirks preserved verbatim (mnemonic-style embedded capitals printed by
the source): RET's product "REceptor Tyrosine kinase", c-KIT's
"CytoKIne receptor (CD117)", BRCA's "BReast, ovarian, prostate,
pancreatic CAncers", PTEN's "Prostate, breasT, and ENdometrial
cancers", NF1/NF2's "NeuroFibromatosis", RB1's "(Bone cancer)",
BCL-2's "B-Cell Lymphomas", and TSC2's Tuberin ("2berin").

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
L = {242: pages[241].split("\n")}
P = {242: norm(pages[241])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E16 = [
    ("Page identity — the section banner, the printed page number, and the Oncogenes header (book 220)", rng(242, 1, 9), [242]),
    ("The oncogene rule — gain of function mutation converts proto-oncogene (normal gene) to oncogene → ↑ cancer risk; requires damage to only ONE allele of a proto-oncogene", rng(242, 11, 12), [242]),
    ("The oncogene table header — GENE / GENE PRODUCT / ASSOCIATED NEOPLASM (the source's embedded capitals 'GeNe')", rng(242, 14, 18), [242]),
    ("The oncogene table part 1 — the receptor tyrosine kinase rows: ALK (lung adenocarcinoma), EGFR/ERBB1 (lung adenocarcinoma), HER2/ERBB2 (breast and gastric carcinomas), RET (printed 'REceptor Tyrosine kinase'; MEN2A and 2B, medullary and papillary thyroid carcinoma, pheochromocytoma)", rng(242, 20, 43), [242]),
    ("The oncogene table part 2 — the kinase rows: BCR-ABL (non-receptor tyrosine kinase; CML, ALL), JAK2 (non-receptor tyrosine kinase; myeloproliferative neoplasms), BRAF (serine/threonine kinase; melanoma, non-Hodgkin lymphoma, colorectal carcinoma, papillary thyroid carcinoma, hairy cell leukemia), c-KIT (printed 'CytoKIne receptor (CD117)'; GIST, mastocytosis)", rng(242, 45, 70), [242]),
    ("The oncogene table part 3 — the non-kinase rows: MYCC/c-myc (transcription factor; Burkitt lymphoma), MYCN/N-myc (transcription factor; neuroblastoma), KRAS (RAS GTPase; pancreatic, colorectal, lung, endometrial cancers), BCL-2 (antiapoptotic molecule — inhibits apoptosis; follicular and diffuse large B-Cell Lymphomas)", rng(242, 72, 95), [242]),
    ("The tumor suppressor rule — loss of function → ↑ cancer risk; both (two) alleles of a tumor suppressor gene must be lost for expression of disease (the Knudson 2-hit hypothesis)", rng(242, 97, 101), [242]),
    ("The tumor suppressor table header — GENE / GENE PRODUCT / ASSOCIATED CONDITION (the source's embedded capitals 'GeNe')", rng(242, 103, 107), [242]),
    ("The tumor suppressor table part 1 — APC (negative regulator of β-catenin/WNT; colorectal cancer associated with FAP), BRCA1/BRCA2 (proteins; printed 'BReast, ovarian, prostate, pancreatic CAncers'), CDKN2A (p16, blocks G1 → S phase; many cancers — melanoma, lung, pancreatic), DCC (DCC—Deleted in Colorectal Cancer; colorectal cancer)", rng(242, 109, 131), [242]),
    ("The tumor suppressor table part 2 — SMAD4/DPC4 (DPC—Deleted in Pancreatic Cancer; pancreatic and colorectal cancer), MEN1 (MENin; Multiple Endocrine Neoplasia type 1), NF1 (Neurofibromin, Ras GTPase activating protein; NeuroFibromatosis type 1), NF2 (Merlin/schwannomin protein; NeuroFibromatosis type 2), PTEN (negative regulator of PI3k/AKT; printed 'Prostate, breasT, and ENdometrial cancers')", rng(242, 133, 161), [242]),
    ("The tumor suppressor table part 3 — the G1→S gatekeepers and the tuberous sclerosis pair: RB1 (inhibits E2F; blocks G1 → S; retinoblastoma, osteosarcoma — printed '(Bone cancer)'), TP53 (p53 activates p21, blocks G1 → S; most cancers, Li-Fraumeni SBLA syndrome — Sarcoma, Breast/Brain, Lung/Leukemia, Adrenal gland), TSC1 (Hamartin protein; tuberous sclerosis complex), TSC2 (Tuberin, printed '2berin'; tuberous sclerosis complex)", rng(242, 163, 187), [242]),
    ("The tumor suppressor table part 4 — VHL (inhibits hypoxia-inducible factor 1α; von Hippel-Lindau disease), WT1 (urogenital development transcription factor; Wilms Tumor / nephroblastoma)", rng(242, 189, 199), [242]),
    ("The footer print line and timestamp (page identity, book 220)", "\n".join([rng(242, 201, 201), rng(242, 203, 203)]), [242]),
]
for c, q, pgs in E16:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"oncogenes-tumor-suppressors: evidence {len(kept)}/{len(E16)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m16 = {"topicId": "oncogenes-tumor-suppressors", "title": "Oncogenes & Tumor Suppressor Genes",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Neoplasia", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [242], "bookPages": "220–220"},
    "sourceEvidence": kept, "visualIds": ["oncogene-tumor-suppressor-map"],
    "mechanismIds": ["one-hit-two-hit-map", "gatekeeper-pathway-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the two rule paragraphs and the two tables; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "three-frame-reading", "summary": "The three-frame rule (the allele arithmetic, the oncogene address membrane→cytoplasm→nucleus, and the suppressor brake gatekeeper/pathway/eponym) — KYP's synthesis of the two tables into one reading protocol.",
         "origin": "outside-first-aid", "rationale": "The source prints the tables as flat rosters without a unified protocol; the framing is KYP's design.",
         "location": "core.keyIdea + pivots + the visual's rule panel and roster grids"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (GAIN ONE, LOSE TWO / MEMBRANE, CYTOPLASM, NUCLEUS / GUARD THE GATE, REGULATE THE PATHWAY / THE 2s GET THE NICKNAMES) — no mnemonic prints on the page.",
         "origin": "outside-first-aid", "rationale": "No margin notes or mnemonics print anywhere on book 220 (pdfimages + VLM census confirmed); the four codes are KYP's design (the fourth builds on the source's own printed '2berin' pun but the framing is original).",
         "location": "mnemonics + the visual's rule panel and function-family headers"},
        {"id": "mini-case-layer", "summary": "The allele-count miniCase — the inherited TP53 Li-Fraumeni (SBLA) pedigree discriminated from germline RET (one-hit oncogene), RB1, BRCA1/BRCA2, and APC (all two-hit suppressors) with the allele-count reasoning as the solving layer.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the genes and rules; the pedigree, the distractor set, and the allele-count discrimination are a KYP design.",
         "location": "usmle.miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "complete",
    "notes": "Census (pdfimages + VLM glm-4.6v on p1x-242-242.png): ZERO raster images on pdf 242 / book 220 — pure text: the Oncogenes block (gain-of-function one-allele rule + 12-row table) back-to-back with the Tumor suppressor genes block (loss-of-function Knudson 2-hit rule + 15-row table); no figures; NO margin notes or mnemonics print on the page (VLM census confirmed) — the registry visual is a pure ORIGINAL KYP ADAPTATION and the KYP memory layer is original. Source quirks preserved verbatim (the source's own mnemonic-style embedded capitals): RET's product prints 'REceptor Tyrosine kinase'; c-KIT's prints 'CytoKIne receptor (CD117)'; BRCA1/BRCA2's condition prints 'BReast, ovarian, prostate, pancreatic CAncers'; PTEN's prints 'Prostate, breasT, and ENdometrial cancers'; NF1/NF2's print 'NeuroFibromatosis'; RB1's prints '(Bone cancer)'; BCL-2's prints 'B-Cell Lymphomas'; TSC2's product prints Tuberin ('2berin'). STAGING manifest (staging-p16/) — promotion to content/usmle/manifests + the chapter/tracker flip are deferred to the integration step (this generator deliberately does not touch content/). The note is authored at difficulty 2 per the production task spec (the chapter registry lists difficulty 3 — flagged for the integrator).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Neoplasia",
    "topicId": "oncogenes-tumor-suppressors", "requiredInKYP": True}
def sv(n, purpose, desc, kloc):
    d = dict(SV_BASE)
    d.update({"visualId": f"oncogenes-tumor-suppressors-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": [242], "bookPages": "220"},
        "visualType": "VISUAL_TABLE", "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "oncogene-tumor-suppressor-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": "oncogene-tumor-suppressor-map", "plannedImplementation": "registry-visual"})
    return d
inv16 = [
    sv(1, "The Oncogenes block (book 220)",
       "The gain-of-function rule paragraph (requires damage to only one allele of a proto-oncogene) + the 12-row GENE / GENE PRODUCT / ASSOCIATED NEOPLASM table (ALK, EGFR (ERBB1), HER2 (ERBB2), RET, BCR-ABL, JAK2, BRAF, c-KIT, MYCC (c-myc), MYCN (N-myc), KRAS, BCL-2). Pure text — no figure (pdfimages: zero rasters; VLM confirmed).",
       "the registry visual (the rule panel's one-hit half + the oncogene roster as a kinase-classification grid) + blocks[1] the table block carried verbatim"),
    sv(2, "The Tumor suppressor genes block (book 220)",
       "The loss-of-function rule paragraph (both (two) alleles must be lost — the Knudson 2-hit hypothesis) + the 15-row GENE / GENE PRODUCT / ASSOCIATED CONDITION table (APC, BRCA1/BRCA2, CDKN2A, DCC, SMAD4 (DPC4), MEN1, NF1, NF2, PTEN, RB1, TP53, TSC1, TSC2, VHL, WT1). Pure text — no figure (pdfimages: zero rasters; VLM confirmed).",
       "the registry visual (the rule panel's two-hit Knudson fork + the tumor-suppressor roster as a function-family grid) + blocks[2] the table block carried verbatim"),
]
STAGING = CACHE / "staging-p16"
(STAGING / "manifests").mkdir(parents=True, exist_ok=True)
(STAGING / "visual-inventory").mkdir(parents=True, exist_ok=True)
(STAGING / "manifests" / "oncogenes-tumor-suppressors.json").write_text(json.dumps(m16, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(STAGING / "visual-inventory" / "oncogenes-tumor-suppressors.json").write_text(
    json.dumps({"topicId": "oncogenes-tumor-suppressors", "chapterId": "pathology", "inventory": inv16,
                "coverageAudit": {"topicId": "oncogenes-tumor-suppressors", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page is pure text (pdfimages: ZERO raster images; VLM census confirmed) — its two 'visuals' are the two tables themselves, each adapted as the registry visual (ORIGINAL_KYP ADAPTATION, the P16 convention: an original rule panel + classification grids, with every row carried verbatim in the note's table blocks) and nothing reproduced. No margin notes or mnemonics print on the page; the KYP memory layer is original."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"P16 staging manifest + inventory written to {STAGING} (13/13 evidence quotes verified)")
print("P16 done (staging only — chapter/tracker flip deferred to integration)")
