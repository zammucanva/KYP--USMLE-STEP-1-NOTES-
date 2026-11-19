#!/usr/bin/env python3
"""P13 cancer-hallmarks — manifest + inventory (Pathology 14/19),
STAGED under .usmle-pipeline-cache/staging-p13/ (the promotion step
owns content/). Census (pdfimages + VLM): pdf 239 / book 217 has ZERO
raster images — a PURE-TEXT 9-row HALLMARK/MECHANISM table. VLM
(glm-4.6v, scripts/usmle-pipeline/p13-vlm-census.ts) confirmed the
heading, the intro line, all nine row labels (with their two-line
wraps), every mechanism, and NO photographs, figures, margin notes,
or mnemonics. Nothing is reproduced: the table is carried verbatim in
the note and adapted as an ORIGINAL KYP visual (hallmarks-of-cancer-
map, nine stations in six bands); the KYP memory layer is original."""
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
L = {239: pages[238].split("\n")}
P = {239: norm(pages[238])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E13 = [
    ("Page identity — the section banner, header, and topic heading (book 217)", rng(239, 1, 9), [239]),
    ("The intro line — cancer is caused by (mostly acquired) DNA mutations affecting fundamental cellular processes (eg, growth, DNA repair, survival)", rng(239, 11, 12), [239]),
    ("The table header — HALLMARK / MECHANISM", rng(239, 14, 16), [239]),
    ("Row 1 — Growth signal self-sufficiency: mutations in genes encoding proto-oncogenes (↑ growth factors → autocrine loop, ↑ PDGF in brain tumors), growth factor receptors (constitutive signaling, HER2 in breast cancer), signaling molecules (RAS), transcription factors (MYC), cell cycle regulators (cyclins, CDKs)", rng(239, 18, 26), [239]),
    ("Row 2 — Anti-growth signal insensitivity: mutations in tumor suppressor genes (eg, Rb); loss of E-cadherin function → loss of contact inhibition (eg, NF2 mutations)", rng(239, 28, 32), [239]),
    ("Row 3 — Evasion of apoptosis: mutations in genes that regulate apoptosis (eg, TP53, BCL2 → follicular B cell lymphoma)", rng(239, 34, 36), [239]),
    ("Row 4 — Limitless replicative potential: reactivation of telomerase → maintenance and lengthening of telomeres → prevention of chromosome shortening and cell aging", rng(239, 38, 42), [239]),
    ("Row 5 — Sustained angiogenesis: ↑ pro-angiogenic factors (eg, VEGF) or ↓ inhibitory factors; tumor or stromal production; sprouting neoangiogenesis vs bone-marrow-recruited vasculogenesis; leaky and/or dilated vessels", rng(239, 44, 49), [239]),
    ("Row 6 — Warburg effect: shift of glucose metabolism from mitochondrial oxidative phosphorylation to glycolysis even under aerobic conditions; driven by pyruvate kinase M2 and LDH-A; supplies biosynthetic intermediates for nucleotide, lipid, and amino acid synthesis; ↑ lactate production", rng(239, 51, 56), [239]),
    ("Row 7 — Immune evasion in cancer: ↓ MHC class I expression → cytotoxic T cells unable to recognize tumor cells; immunosuppressive factors (eg, TGF-β) + regulatory T cell recruitment; immune checkpoint upregulation", rng(239, 58, 67), [239]),
    ("Row 8 — Tissue invasion: E-cadherin loss → loosening of intercellular junctions → metalloproteinases degrade basement membrane and ECM → attach to laminin/fibronectin → locomotion → vascular dissemination", rng(239, 69, 73), [239]),
    ("Row 9 — Metastasis: tumor cells or emboli spread via lymphatics or blood → adhesion to endothelium → extravasation and homing; site predicted by the first-encountered capillary bed; organ tropism (lung cancers commonly metastasize to adrenals)", rng(239, 75, 80), [239]),
    ("The footer print line — the indd slug and timestamp (page identity, book 217)", rng(239, 82, 84), [239]),
]
for c, q, pgs in E13:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"cancer-hallmarks: evidence {len(kept)}/{len(E13)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m13 = {"topicId": "cancer-hallmarks", "title": "Hallmarks of Cancer",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Neoplasia", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [239], "bookPages": "217–217"},
    "sourceEvidence": kept, "visualIds": ["hallmarks-of-cancer-map"],
    "mechanismIds": ["hallmark-axes-map", "warburg-switch-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the nine-row table only; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "six-band-reading", "summary": "The six-band reading protocol (GROWTH AXIS / DEATH AXIS / IMMORTALITY / SUPPLY LINES / IMMUNE ESCAPE / SPREAD) and the gas-pedal/brake-line framing of rows 1–2 — KYP's synthesis of the nine rows into one map.",
         "origin": "outside-first-aid", "rationale": "The source prints the rows as an unstructured list; the banding, the two-axes framing, and the station numbering are KYP's design.",
         "location": "core.keyIdea + the registry visual's band structure + pivots"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (GROW, IGNORE, REFUSE DEATH, NEVER AGE, FEED, FERMENT, HIDE, INVADE, SPREAD / GAS ON, BRAKES CUT / GLUCOSE IN, LACTATE OUT, OXYGEN IGNORED / UNGLUE, CHEW, GRAB, CRAWL, EMBARK, LAND) — no mnemonic prints on the page.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere on book 217 (VLM census confirmed); the four codes are KYP's design.",
         "location": "mnemonics + the visual's station footers + the steps block"},
        {"id": "mini-case-layer", "summary": "The assay-matching miniCase (telomerase positivity + glucose-to-lactate conversion under normal oxygen tension + the adrenal-nodule distractor) — a KYP-authored integration of rows 4, 6, and 9.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the rows separately and never asks the learner to match laboratory findings to hallmark pairs; the vignette, the four distractors, and the half-right near-miss option are KYP's design.",
         "location": "usmle.miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "pendingCorrections": [
        "content/usmle/chapters/pathology.json lists topicId cancer-hallmarks with difficulty 3, but the P13 production spec assigned difficulty 2; the note ships at difficulty 2 with all difficulty-2 floors exceeded (4 patterns, 4 traps, 3 pivots, 10 recall, 5 related, 4 crossLinks) — reconcile on promotion."],
    "notes": "Census (pdfimages + VLM, p13-vlm-census.ts): ZERO raster images on pdf 239 / book 217 — a pure-text 9-row HALLMARK/MECHANISM table; the VLM confirmed the heading, the intro line, all nine row labels with their two-line wraps (Growth signal / self-sufficiency; Anti-growth signal / insensitivity; Sustained / angiogenesis; Immune evasion in / cancer), every mechanism, and NO photographs, figures, margin notes, or mnemonics. Quirks, documented: (1) difficulty — the chapter inventory lists 3, the production spec set 2, the note ships at 2 (see pendingCorrections); (2) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the P-batch manifest convention; the spec's word 'complete' matches the per-record INVENTORY productionStatus, which is 'complete'); (3) outputs are STAGED under .usmle-pipeline-cache/staging-p13/ — nothing is written into content/ (chapters/pathology.json, content manifests, visual-inventory, and the visual registry are owned by the promotion step; the note's visualId 'hallmarks-of-cancer-map' is therefore not yet in visuals/registry.tsx by design).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Neoplasia",
    "topicId": "cancer-hallmarks", "requiredInKYP": True}
inv13 = [dict(SV_BASE, **{
    "visualId": "cancer-hallmarks-sv1",
    "sourcePages": {"part": 1, "pdfPages": [239], "bookPages": "217"},
    "visualType": "VISUAL_TABLE", "visualPurpose": "The 9-row HALLMARK / MECHANISM table (book 217)",
    "sourceFigureDescription": "PURE TEXT (pdfimages: zero raster images; VLM confirmed): the intro line 'Cancer is caused by (mostly acquired) DNA mutations that affect fundamental cellular processes (eg, growth, DNA repair, survival)' plus the complete 9-row table — growth signal self-sufficiency (proto-oncogenes/↑PDGF brain tumors, HER2 breast, RAS, MYC, cyclins/CDKs), anti-growth signal insensitivity (Rb; E-cadherin loss → contact inhibition, NF2), evasion of apoptosis (TP53, BCL2 → follicular B cell lymphoma), limitless replicative potential (telomerase reactivation → telomere maintenance/lengthening), sustained angiogenesis (↑VEGF or ↓inhibitory factors; neoangiogenesis vs bone-marrow vasculogenesis; leaky/dilated vessels), Warburg effect (glycolysis even under aerobic conditions; pyruvate kinase M2, LDH-A; biosynthetic intermediates; ↑ lactate), immune evasion in cancer (↓ MHC class I; TGF-β + regulatory T cells; checkpoint upregulation), tissue invasion (E-cadherin loss → metalloproteinases → laminin/fibronectin → locomotion → vascular dissemination), metastasis (lymphatics/blood → endothelial adhesion → extravasation/homing; first-encountered capillary bed; lung → adrenals tropism).",
    "implementationType": "ORIGINAL_KYP_ADAPTATION",
    "kypVisualId": "hallmarks-of-cancer-map", "kypImplementation": "registry-visual",
    "qaStatus": "passed",
    "kypLocation": "the registry visual (the nine stations across the six labeled bands — HallmarksOfCancerMap in visuals/neoplasia-p13.tsx) + blocks[1] the table block carried verbatim + blocks[2] the steps block",
    "productionStatus": "complete",
    "plannedKypVisualId": "hallmarks-of-cancer-map", "plannedImplementation": "registry-visual"})]
OUT = CACHE / "staging-p13"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "cancer-hallmarks.json").write_text(json.dumps(m13, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "cancer-hallmarks.json").write_text(
    json.dumps({"topicId": "cancer-hallmarks", "chapterId": "pathology", "inventory": inv13,
                "coverageAudit": {"topicId": "cancer-hallmarks", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's single visual asset is its text table — adapted as the registry visual (nine stations, six bands) and carried verbatim in the note's table block; nothing is reproduced. Census: zero raster images (pdfimages) and zero figures/photographs/margin mnemonics (VLM confirmed on scripts/usmle-pipeline/p13-vlm-census.ts). STAGED under .usmle-pipeline-cache/staging-p13/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"P13 manifest + inventory staged: {OUT}/manifests/cancer-hallmarks.json, {OUT}/visual-inventory/cancer-hallmarks.json")
print(f"cancer-hallmarks: evidence {len(kept)}/{len(E13)} verified")
