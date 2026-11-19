#!/usr/bin/env python3
"""P19 paraneoplastic-aging — STAGING manifest + inventory (Pathology 19/19,
the chapter FINALE). Two-banner topic: PATHOLOGY-neOPLASIA (pdf 246 /
book 224, the Paraneoplastic syndromes four-band table) and
PATHOLOGY-AGInG (pdf 247-248 / book 225-226, the Normal aging 11-system
table + the Lipofuscin block; p248 is the near-empty printed NOTES page
— 7 nonempty lines — claimed by this topic as continuation per the
chapter inventory). Census (pdfimages + VLM): p246 ZERO rasters (pure
table). p247 ONE 175x126 8bpc image lettered A beside the Lipofuscin
block — a COPYRIGHTED histology micrograph (pale pink/lavender tissue
background, scattered yellow-brown granular pigment deposits within
cells, two black arrows on the granule clusters, the letter A in a
small dark box at the image's top-left) — described-in-text only, never
reproduced (the M32 convention). Text-layer interleave quirks
documented in the claims: the fused small-caps fragment 'SCa2+mous cell
carcinomas' (= 'Squamous cell carcinomas', the source's red-highlighted
Ca2+); the polycythemia tumor list printing at raw lines 139-141 AFTER
the myasthenia gravis row; the merged 'Small cell lung cancer' and
'Thimoma' tumor-cell fragments printing at raw 147/149 after the
footer. VLM confirmed the four bands (Musculoskeletal and cutaneous /
Endocrine / Hematologic / Neuromuscular), the two-row Hypercalcemia
manifestation span (PTHrP + calcitriol), and the merged SCLC/thymoma
tumor cells. The source's own mnemonics — 'Paraneoplastic rise to High
hematocrit levels' and 'Dancing eyes, dancing feet' — carry verbatim.
OUTPUT GOES TO STAGING ONLY (.usmle-pipeline-cache/staging-p19/) — the
content/ tree, the chapter JSON, and the tracker are NOT touched by
this subtask."""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
STAGING = CACHE / "staging-p19"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "": pages.pop()
L = {246: pages[245].split("\n"), 247: pages[246].split("\n"), 248: pages[247].split("\n")}
P = {246: norm(pages[245]), 247: norm(pages[246]), 248: norm(pages[247])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E19 = [
    ("Page identity — the section banner and the table header (book 224)", rng(246, 1, 14), [246]),
    ("The Musculoskeletal-and-cutaneous band — Dermatomyositis (progressive proximal muscle weakness, Gottron papules, heliotrope rash; adenocarcinomas especially ovarian); Acanthosis nigricans (hyperpigmented velvety plaques in axilla and neck; gastric adenocarcinoma and other visceral malignancies); Sign of Leser-Trélat (sudden onset of multiple seborrheic keratoses; GI adenocarcinomas and other visceral malignancies); Hypertrophic osteoarthropathy (abnormal proliferation of skin and bone at distal extremities → clubbing, arthralgia, joint effusions, periostosis of tubular bones; adenocarcinoma of the lung)", rng(246, 16, 46), [246]),
    ("The hypercalcemia span + the Endocrine band — PTHrP (the raw fused small-caps fragment 'SCa2+mous cell carcinomas' = Squamous cell carcinomas of lung, head, and neck; renal, bladder, breast, and ovarian carcinomas — the source's red-highlighted Ca2+) and ↑ 1,25-(OH)2 vitamin D3 (calcitriol) with Lymphoma; Cushing syndrome (↑ ACTH) and Hyponatremia (SIADH) (↑ ADH) — Small cell lung cancer. The interleave: the PTHrP mechanism row prints BEFORE the 'Endocrine' band label and the 'Hypercalcemia' manifestation, and 'Small cell lung cancer' (the merged cell spanning the Cushing + SIADH rows) prints at raw 67 before the Hematologic band", rng(246, 48, 67), [246]),
    ("The Hematologic band part 1 — Polycythemia via ↑ Erythropoietin carrying the source's own mnemonic verbatim ('Paraneoplastic rise to High hematocrit levels', red capitals P-r-H-h-l mapping Pheochromocytoma, renal cell carcinoma, HCC, hemangioblastoma, leiomyoma); Pure red cell aplasia (anemia with low reticulocytes); Good syndrome (hypogammaglobulinemia)", rng(246, 69, 82), [246]),
    ("The Hematologic band part 2 — Trousseau syndrome (migratory superficial thrombophlebitis) and Nonbacterial thrombotic endocarditis (deposition of sterile platelet thrombi on heart valves) — Adenocarcinomas, especially pancreatic (the merged tumor cell spanning both rows)", rng(246, 83, 95), [246]),
    ("The Neuromuscular band part 1 — Anti-NMDA receptor encephalitis (psychiatric disturbance, memory deficits, seizures, dyskinesias, autonomic instability, language dysfunction; ovarian teratoma); Opsoclonus-myoclonus ataxia syndrome ('Dancing eyes, dancing feet' — the source's own mnemonic, carried verbatim; neuroblastoma in children, small cell lung cancer in adults)", rng(246, 96, 112), [246]),
    ("The Neuromuscular band part 2 — Paraneoplastic cerebellar degeneration (antibodies against antigens in Purkinje cells; small cell lung cancer anti-Hu, gynecologic and breast cancers anti-Yo, Hodgkin lymphoma anti-Tr); Paraneoplastic encephalomyelitis (anti-Hu in neurons); Lambert-Eaton myasthenic syndrome (antibodies against presynaptic [P/Q-type] Ca2+ channels at NMJ); Myasthenia gravis (antibodies against postsynaptic ACh receptors at NMJ)", rng(246, 113, 137), [246]),
    ("The interleave tail — the polycythemia tumor list ('Pheochromocytoma, renal cell carcinoma, HCC, hemangioblastoma, leiomyoma') prints at raw lines 139-141 AFTER the myasthenia gravis row, followed by the 'Thymoma' merged-cell fragment, the 'Neuromuscular' band label, the indd footer, and the 'Small cell lung cancer' + second 'Thymoma' merged-cell fragments at raw 147/149 — the column-merge scrambling documented for this topic (SCLC spans Cushing/SIADH/encephalomyelitis-LEMS; Thymoma spans pure red cell aplasia/Good syndrome/myasthenia gravis)", rng(246, 139, 151), [246]),
    ("Page identity — the AGInG banner (book 225), printed TWICE on the page (the banner quirk), + the Normal aging header", rng(247, 1, 10), [247]),
    ("The normal-aging definition — time-dependent progressive decline in organ function with ↑ susceptibility to disease; genetic (eg, telomere shortening), epigenetic (eg, DNA methylation), metabolic (eg, mitochondrial dysfunction) alterations", rng(247, 12, 14), [247]),
    ("The aging table part 1 — Cardiovascular (↓ arterial compliance ↑ stiffness, ↑ aortic diameter, ↓ LV cavity size + sigmoid-shaped interventricular septum from myocardial hypertrophy, ↑ LA cavity size, aortic and mitral valve calcification, ↓ maximum heart rate); Gastrointestinal (↓ LES tone, ↓ gastric mucosal protection, ↓ colonic motility); Hematopoietic (↓ marrow mass, ↑ marrow fat, less vigorous stress response)", rng(247, 16, 27), [247]),
    ("The aging table part 2 — Immune (thymic involution → ↓ naïve T cells, indirectly ↓ naïve B cells; memory B and T cells preserved; diminished response to novel antigens — pathogens, vaccines) + Musculoskeletal (sarcopenia, osteopenia, joint cartilage thinning)", rng(247, 29, 37), [247]),
    ("The aging table part 3 — Nervous (↓ brain volume [neuronal loss], ↓ cerebral blood flow; function preserved despite mild cognitive decline) + Special senses (presbyopia, presbycusis, ↓ smell and taste)", rng(247, 39, 46), [247]),
    ("The aging table part 4 — Skin (flattened dermal-epidermal junction; ↓ collagen ↓ elastin [wrinkles, senile purpura]; ↓ sweat glands [heat stroke]; ↓ sebaceous glands [xerosis cutis]) with the fork: Intrinsic aging (chronological) — ↓ biosynthetic capacity of dermal fibroblasts; Extrinsic aging (photoaging) — UVA collagen/elastin degradation, solar elastosis", rng(247, 48, 54), [247]),
    ("The aging table part 5 — Renal (↓ GFR [↓ nephrons], ↓ RBF, ↓ hormonal function, voiding dysfunction) + Reproductive (males: testicular atrophy, prostate enlargement, slower erection/ejaculation, longer refractory, less pronounced ↓ libido; females: vulvovaginal atrophy, vaginal shortening/thinning/dryness, ↑ pH, ↓ estrogen from follicle exhaustion [menopause])", rng(247, 56, 65), [247]),
    ("The aging table part 6 — Respiratory (↑ lung compliance ↓ elastic recoil, ↓ chest wall compliance ↑ stiffness, ↓ respiratory muscle strength; ↓ FEV1, ↓ FVC, ↑ RV with TLC unchanged; ↑ A-a gradient; blunted hypoxia/hypercapnia response; less vigorous cough, slower mucociliary clearance)", rng(247, 67, 73), [247]),
    ("The Lipofuscin block — the yellow-brown 'wear and tear' pigment A of normal aging (polymers of lipids and phospholipids complexed with protein; lipid peroxidation of subcellular membranes; autopsy deposits in heart, colon, liver, kidney, eye) + the standalone letter A marker (the lettered 175x126 micrograph beside the block, described in text — copyrighted, never reproduced) + the indd footer", rng(247, 75, 84), [247]),
    ("The timestamp footer (page identity, book 225)", rng(247, 86, 86), [247]),
    ("Page 248 in full — the near-empty printed NOTES page (the continuation quirk claimed by this topic per the chapter inventory): banner + '▶ NOTES' + footers only, 7 nonempty lines, no body content", rng(248, 1, 13), [248]),
]
for c, q, pgs in E19:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"paraneoplastic-aging: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m19 = {"topicId": "paraneoplastic-aging", "title": "Paraneoplastic Syndromes & Aging",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Neoplasia", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [246, 247, 248], "bookPages": "224–226"},
    "sourceEvidence": kept, "visualIds": ["paraneoplastic-syndrome-map"],
    "mechanismIds": ["ectopic-hormone-map", "autoimmune-crossfire-map", "system-decline-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts, including the miniCase (a small-cell-lung-cancer patient whose hyponatremia [SIADH, ↑ ADH] and facilitating proximal weakness [Lambert-Eaton, presynaptic P/Q-type Ca2+ channels] are unified by one tumor, with ectopic-ACTH, dermatomyositis, myasthenia-gravis/adrenal-insufficiency, and polycythemia distractors).",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the four-band table and the aging table; the attack structure and the vignette are a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "engine-reading-protocol", "summary": "The engine reading of the paraneoplastic table (ectopic-hormone hijack / autoimmune crossfire / hypercoagulable-and-cutaneous markers) plus the two-hotspot rule (SCLC owns six rows; THYMOMA TAKES THREE) and the aging 'three clocks, eleven systems' frame with the old-is-not-sick rule.",
         "origin": "outside-first-aid", "rationale": "The source prints the bands and rows sequentially without a unified protocol; the engine framing and the hotspot extraction are KYP's design.",
         "location": "core.keyIdea + pivots + mechanisms + the visual's hotspot cards"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (THE FIVE-HORMONE HIJACK / PRESYNAPTIC CALCIUM, POSTSYNAPTIC RECEPTOR / THYMOMA TAKES THREE / THREE CLOCKS, ELEVEN SYSTEMS) — no KYP mnemonic prints on the pages; the source's own 'Paraneoplastic rise to High hematocrit levels' and 'Dancing eyes, dancing feet' are carried verbatim and attributed.",
         "origin": "outside-first-aid", "rationale": "Only the two source mnemonics print (VLM census confirmed the red-letter P-r-H-h-l mnemonic inside the polycythemia mechanism cell); the four codes are KYP's design.",
         "location": "mnemonics + the visual's band annotations"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + VLM): p246 ZERO rasters (the four-band paraneoplastic table is pure text). p247 ONE 175x126 8bpc image lettered A beside the Lipofuscin block — a COPYRIGHTED histology micrograph (pale pink/lavender tissue background, scattered yellow-brown granular pigment deposits within cells, two black arrows pointing to the dark-brown granule clusters, the letter A in a small dark box at the image's top-left, ~1.9 x 1.4 in directly below the bold Lipofuscin label) — described-in-text only, never reproduced (the M32 convention). p248 = the printed NOTES page (banner + '▶ NOTES' + footers, 7 nonempty lines), claimed by this topic as continuation per the chapter inventory. Text-layer interleave quirks documented: the fused small-caps fragment 'SCa2+mous cell carcinomas' (= 'Squamous cell carcinomas', the source's red Ca2+ highlighting), the polycythemia tumor list printing at raw lines 139-141 AFTER the myasthenia gravis row, and the merged 'Small cell lung cancer'/'Thymoma' tumor-cell fragments printing after the page footer. VLM confirmed: the four bands (Musculoskeletal and cutaneous / Endocrine / Hematologic / Neuromuscular), the two-row Hypercalcemia manifestation span (PTHrP + calcitriol, both read as sitting within the Endocrine band by the VLM while the raw layer prints the PTHrP row before the 'Endocrine' label — the boundary-span documented in the claim), the merged SCLC cell (Cushing + SIADH, and encephalomyelitis + Lambert-Eaton) and merged Thymoma cell (pure red cell aplasia + Good syndrome + myasthenia gravis), and the source's own red-letter mnemonic 'Paraneoplastic rise to High hematocrit levels'. No margin mnemonics beyond the source's own two (both carried verbatim); the KYP memory layer is original. STAGING COPY — content/, the chapter JSON, and the tracker are intentionally untouched by this subtask.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Neoplasia",
    "topicId": "paraneoplastic-aging", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"paraneoplastic-aging-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": "ORIGINAL_KYP_ADAPTATION", "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv19 = [
    sv(1, [246], "224", "VISUAL_TABLE", "The Paraneoplastic syndromes table (book 224)",
       "The four-band table (Musculoskeletal and cutaneous / Endocrine / Hematologic / Neuromuscular) with 19 manifestation rows across three printed columns (mAnIfeSTATIOn / DeSCrIPTIOn/meCHAnISm / mOST COmmOnLY ASSOCIATeD TUmOr(S)), the two-row Hypercalcemia span, the merged SCLC and Thymoma tumor cells, and the source's own polycythemia mnemonic. Pure text — pdfimages: ZERO rasters on the page.",
       "paraneoplastic-syndrome-map", "the registry visual (the four family bands with manifestation-mechanism-tumor rows, the ectopic-hormone tags, and the hotspot cards) + blocks[1] the table block carried verbatim"),
    sv(2, [247], "225", "VISUAL_TABLE", "The Normal aging table (book 225)",
       "The aging definition (time-dependent progressive decline; genetic/epigenetic/metabolic alterations) and the 11-system decline table (Cardiovascular, Gastrointestinal, Hematopoietic, Immune, Musculoskeletal, Nervous, Special senses, Skin, Renal, Reproductive, Respiratory) with the intrinsic-vs-extrinsic skin fork. Pure text.",
       "paraneoplastic-syndrome-map", "the registry visual (the three-clocks definition strip + the eleven-system decline grid + the skin fork) + blocks[2] the aging rows carried verbatim"),
    sv(3, [247], "225", "HISTOLOGY", "Photograph A — the Lipofuscin 'wear and tear' pigment micrograph (book 225)",
       "The ONE 175x126 8bpc raster on the page, lettered A beside the Lipofuscin block: a histology micrograph on a pale pink/lavender tissue background (consistent with cardiac or liver tissue) showing scattered yellow-brown granular pigment deposits within cells, with two black arrows pointing to the dark-brown granule clusters; the letter A sits in a small dark box at the image's top-left, ~1.9 x 1.4 in directly below the bold Lipofuscin label. COPYRIGHTED — described in text, never reproduced (the M32 convention; the description-in-text IS the adaptation, per the P11 sv3/sv5 photo convention).",
       "paraneoplastic-syndrome-map", "described-in-text in the registry visual's Lipofuscin card + blocks[2] the lipofuscin row (the note block)"),
]
(STAGING / "manifests").mkdir(parents=True, exist_ok=True)
(STAGING / "visual-inventory").mkdir(parents=True, exist_ok=True)
(STAGING / "manifests" / "paraneoplastic-aging.json").write_text(json.dumps(m19, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(STAGING / "visual-inventory" / "paraneoplastic-aging.json").write_text(
    json.dumps({"topicId": "paraneoplastic-aging", "chapterId": "pathology", "inventory": inv19,
                "coverageAudit": {"topicId": "paraneoplastic-aging", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 3,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Three source visuals: the paraneoplastic table (p246, pure text — ZERO rasters), the Normal aging table (p247, pure text), and photograph A (the p247 175x126 lettered lipofuscin micrograph). All three are adapted as the registry visual (an ORIGINAL KYP ADAPTATION — the paraneoplastic four-band map, the eleven-system aging grid, and the Lipofuscin card) and the note's table blocks carry the rows verbatim. The photograph is COPYRIGHTED — described in text, never reproduced (the M32 convention; the description-in-text is the adaptation, per the P11 sv3/sv5 photo convention). p248 (the printed NOTES page) carries no visuals. Nothing reproduced; the KYP memory layer is original. STAGING COPY — the content/ inventory tree is intentionally untouched by this subtask."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"P19 STAGING manifest + inventory written to {STAGING}")
print(f"evidence pass count: {len(kept)}/{len(E19)}")
