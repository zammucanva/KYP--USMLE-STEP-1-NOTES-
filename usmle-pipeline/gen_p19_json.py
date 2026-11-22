#!/usr/bin/env python3
"""P19 paraneoplastic-aging — manifest + inventory + flip
(Pathology 19/19 — CHAPTER COMPLETE). Census (pdfimages + VLM):
pdf 246-248 (book 224-226). ONE copyrighted photograph on pdf 247
(book 225): image 0, 175x126 cmyk jpeg at 150 dpi — the Lipofuscin
'wear and tear' pigment photograph, lettered A beside the
'Lipofuscin A' text — described-in-text only, NEVER reproduced (the
M32 convention). The pages are pure text otherwise — the
paraneoplastic syndromes table (4 categories, 16 entries) on book
224, the normal aging organ-system changes (10 systems) + Lipofuscin
on book 225, and a mostly-blank NOTES page on book 226. The visual
is an ORIGINAL KYP adaptation rendering the paraneoplastic table and
the aging organ-system grid as panel maps (no source figure to
redraw). NO margin mnemonics (VLM confirmed); the KYP memory layer
is original."""
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
    ("Page identity — pdf 246 / book 224 header", rng(246, 1, 8), [246]),
    ("Paraneoplastic syndromes header + table column headers — MANIFESTATION | DESCRIPTION/MECHANISM | MOST COMMONLY ASSOCIATED TUMOR(S)", rng(246, 9, 14), [246]),
    ("Musculoskeletal and cutaneous category header + Dermatomyositis — progressive proximal muscle weakness, Gottron papules, heliotrope rash → adenocarcinomas, especially ovarian", rng(246, 16, 22), [246]),
    ("Acanthosis nigricans — hyperpigmented velvety plaques in axilla and neck → gastric adenocarcinoma and other visceral malignancies", rng(246, 24, 30), [246]),
    ("Sign of Leser-Trélat — sudden onset of multiple seborrheic keratoses → GI adenocarcinomas and other visceral malignancies", rng(246, 32, 37), [246]),
    ("Hypertrophic osteoarthropathy — abnormal proliferation of skin and bone at distal extremities → clubbing, arthralgia, joint effusions, periostosis of tubular bones → adenocarcinoma of the lung", rng(246, 39, 46), [246]),
    ("Hypercalcemia via PTHrP — tumors: SCa2+mous cell carcinomas of lung, head, and neck; renal, bladder, breast, and ovarian carcinomas", rng(246, 48, 52), [246]),
    ("Endocrine category header + Hypercalcemia entry", rng(246, 55, 56), [246]),
    ("Hypercalcemia via calcitriol (↑ 1,25-(OH)2 vitamin D3) → lymphoma", rng(246, 53, 58), [246]),
    ("Cushing syndrome (↑ ACTH) and Hyponatremia/SIADH (↑ ADH) → small cell lung cancer", "\n".join([rng(246, 59, 65), rng(246, 67, 67)]), [246]),
    ("Hematologic category header + Polycythemia entry (↑ erythropoietin, paraneoplastic rise to high hematocrit levels)", rng(246, 69, 73), [246]),
    ("Polycythemia tumors — pheochromocytoma, renal cell carcinoma, HCC, hemangioblastoma, leiomyoma", rng(246, 139, 140), [246]),
    ("Pure red cell aplasia (anemia with low reticulocytes) and Good syndrome (hypogammaglobulinemia)", rng(246, 75, 81), [246]),
    ("Thymoma — the associated tumor for pure red cell aplasia, Good syndrome, and myasthenia gravis", rng(246, 141, 141), [246]),
    ("Trousseau syndrome — migratory superficial thrombophlebitis", rng(246, 83, 85), [246]),
    ("Nonbacterial thrombotic endocarditis — deposition of sterile platelet thrombi on heart valves → adenocarcinomas, especially pancreatic", rng(246, 87, 94), [246]),
    ("Neuromuscular category + Anti-NMDA receptor encephalitis — psychiatric disturbance, memory deficits, seizures, dyskinesias, autonomic instability, language dysfunction → ovarian teratoma", "\n".join([rng(246, 96, 101), rng(246, 103, 103)]), [246]),
    ("Opsoclonus-myoclonus ataxia syndrome — 'Dancing eyes, dancing feet' → neuroblastoma (children), small cell lung cancer (adults)", rng(246, 105, 111), [246]),
    ("Paraneoplastic cerebellar degeneration — antibodies against antigens in Purkinje cells → SCLC (anti-Hu), gynecologic and breast cancers (anti-Yo), Hodgkin lymphoma (anti-Tr)", rng(246, 113, 121), [246]),
    ("Paraneoplastic encephalomyelitis (anti-Hu in neurons) and Lambert-Eaton myasthenic syndrome (antibodies against presynaptic P/Q-type Ca2+ channels at NMJ)", rng(246, 123, 132), [246]),
    ("Small cell lung cancer — the associated tumor for encephalomyelitis, Lambert-Eaton, Cushing syndrome, and SIADH", rng(246, 147, 147), [246]),
    ("Myasthenia gravis — antibodies against postsynaptic ACh receptors at NMJ", rng(246, 134, 137), [246]),
    ("Thymoma — the associated tumor for myasthenia gravis (second occurrence)", rng(246, 149, 149), [246]),
    ("The page timestamp footer (book 224)", rng(246, 145, 145), [246]),
    ("Page identity — pdf 247 / book 225 header (PATHOLOGY—AGING)", rng(247, 1, 9), [247]),
    ("Normal aging definition — time-dependent progressive decline in organ function resulting in ↑ susceptibility to disease; associated with genetic (eg, telomere shortening), epigenetic (eg, DNA methylation), and metabolic (eg, mitochondrial dysfunction) alterations", rng(247, 10, 14), [247]),
    ("Cardiovascular aging — ↓ arterial compliance (↑ stiffness), ↑ aortic diameter, ↓ left ventricular cavity size and sigmoid-shaped interventricular septum (due to myocardial hypertrophy), ↑ left atrial cavity size, aortic and mitral valve calcification, ↓ maximum heart rate", rng(247, 16, 19), [247]),
    ("Gastrointestinal aging — ↓ LES tone, ↓ gastric mucosal protection, ↓ colonic motility", rng(247, 21, 23), [247]),
    ("Hematopoietic aging — ↓ bone marrow mass, ↑ bone marrow fat; less vigorous response to stressors (eg, blood loss)", rng(247, 25, 27), [247]),
    ("Immune aging — predominant effect on adaptive immunity: thymic involution → ↓ production of naïve T cells (and, indirectly, naïve B cells), while memory B and T cells are preserved; net effect = diminished response to novel antigens (eg, pathogens, vaccines)", rng(247, 29, 33), [247]),
    ("Musculoskeletal aging — ↓ skeletal muscle mass (sarcopenia), ↓ bone mass (osteopenia), joint cartilage thinning", rng(247, 35, 37), [247]),
    ("Nervous aging — ↓ brain volume (neuronal loss), ↓ cerebral blood flow; function is preserved despite mild cognitive decline", rng(247, 39, 42), [247]),
    ("Special senses aging — impaired accommodation (presbyopia), ↓ hearing (presbycusis), ↓ smell and taste", rng(247, 44, 46), [247]),
    ("Skin aging — atrophy with flattening of dermal-epidermal junction; ↓ dermal collagen and ↓ elastin (wrinkles, senile purpura), ↓ sweat glands (heat stroke), ↓ sebaceous glands (xerosis cutis); intrinsic aging (↓ biosynthetic capacity of dermal fibroblasts); extrinsic aging / photoaging (degradation of dermal collagen and elastin from sun exposure / UVA; solar elastosis)", rng(247, 48, 54), [247]),
    ("Renal aging — ↓ GFR (↓ nephrons), ↓ RBF, ↓ hormonal function; voiding dysfunction (eg, urinary incontinence)", rng(247, 56, 58), [247]),
    ("Reproductive aging — males: testicular atrophy (↓ spermatogenesis), prostate enlargement, slower erection/ejaculation, longer refractory period; females: vulvovaginal atrophy, vaginal shortening/thinning/dryness, ↑ pH, due to ↓ estrogen from exhaustion of ovarian follicles (menopause)", rng(247, 60, 65), [247]),
    ("Respiratory aging — ↑ lung compliance (↓ elastic recoil), ↓ chest wall compliance (↑ stiffness), ↓ respiratory muscle strength; ↓ FEV1, ↓ FVC, ↑ RV (TLC unchanged); ↑ A-a gradient, ↑ V/Q mismatch; blunted ventilatory response to hypoxia/hypercapnia; less vigorous cough, slower mucociliary clearance", rng(247, 67, 73), [247]),
    ("Lipofuscin — a yellow-brown 'wear and tear' pigment A associated with normal aging; composed of polymers of lipids and phospholipids complexed with protein; may be derived through lipid peroxidation of polyunsaturated lipids of subcellular membranes; autopsy of older adult will reveal deposits in heart, colon, liver, kidney, eye, and other organs", rng(247, 75, 80), [247]),
    ("The photograph A marker (the Lipofuscin 'wear and tear' pigment photograph — copyrighted, described in text, never reproduced)", rng(247, 82, 82), [247]),
    ("The page timestamp footer (book 225)", rng(247, 84, 86), [247]),
    ("Page 226 (book 226) — the NOTES page (mostly blank)", rng(248, 1, 10) if len(L.get(248, [])) > 10 else "NOTES", [248]),
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
    "subsection": "Pathology — Neoplasia + Aging", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [246, 247, 248], "bookPages": "224–226"},
    "sourceEvidence": kept, "visualIds": ["paraneoplastic-aging-map"],
    "mechanismIds": ["paraneoplastic-axis", "aging-system-axis"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the paraneoplastic table and the aging organ-system changes; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "two-page-reading", "summary": "The two-axis rule (the paraneoplastic axis: 4 categories × 16 entries; the aging axis: 10 organ systems + Lipofuscin) — KYP's synthesis of the 3-page spread into one reading protocol.",
         "origin": "outside-first-aid", "rationale": "The source prints the sections sequentially without a unified protocol; the framing is KYP's design.",
         "location": "core.keyIdea + pivots + the visual's structure"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (SCLC MAKES HORMONES / THYMOMA THREE DISEASES / LAMBERT-EATEN PRESYNAPTIC MYASTHENIA POSTSYNAPTIC / WEAR AND TEAR LIPOFUSCIN) — no mnemonic prints on the page.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere on book 224-226 (VLM census confirmed); the four codes are KYP's design.",
         "location": "mnemonics + the visual's rule panels"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + VLM): ONE copyrighted photograph on pdf 247 (book 225) — image 0, 175x126 cmyk jpeg at 150 dpi, the Lipofuscin 'wear and tear' pigment photograph lettered A beside the 'Lipofuscin A' text — described-in-text only, NEVER reproduced (the M32 convention). The pages are pure text otherwise — the paraneoplastic syndromes table (4 categories: musculoskeletal/cutaneous, endocrine, hematologic, neuromuscular; 16 entries) on book 224, the normal aging organ-system changes (10 systems: cardiovascular, GI, hematopoietic, immune, musculoskeletal, nervous, special senses, skin, renal, reproductive, respiratory) + Lipofuscin on book 225, and a mostly-blank NOTES page on book 226. The visual is an ORIGINAL KYP adaptation rendering the paraneoplastic table and the aging organ-system grid as panel maps (no source figure to redraw). The tables are carried verbatim in the note's table blocks. No margin mnemonics (VLM confirmed); the KYP memory layer is original.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Neoplasia + Aging",
    "topicId": "paraneoplastic-aging", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"paraneoplastic-aging-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv19 = [
    sv(1, [246], "224", "VISUAL_TABLE", "The paraneoplastic syndromes table (book 224)",
       "4-category 16-entry table: musculoskeletal/cutaneous (dermatomyositis, acanthosis nigricans, Sign of Leser-Trélat, hypertrophic osteoarthropathy), endocrine (hypercalcemia PTHrP + calcitriol, Cushing ACTH, SIADH ADH), hematologic (polycythemia EPO, pure red cell aplasia, Good syndrome, Trousseau syndrome, nonbacterial thrombotic endocarditis), neuromuscular (anti-NMDA, opsoclonus-myoclonus, cerebellar degeneration, encephalomyelitis, Lambert-Eaton, myasthenia gravis). Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "paraneoplastic-aging-map", "the registry visual (the paraneoplastic grid) + blocks[1] the table block carried verbatim"),
    sv(2, [247], "225", "VISUAL_TABLE", "The normal aging organ-system changes + Lipofuscin (book 225)",
       "Normal aging definition + 10 organ-system changes (cardiovascular, GI, hematopoietic, immune, musculoskeletal, nervous, special senses, skin, renal, reproductive, respiratory) + Lipofuscin 'wear and tear' pigment. Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "paraneoplastic-aging-map", "the registry visual (the aging organ-system grid + Lipofuscin panel) + blocks[2] and blocks[3] the table blocks carried verbatim"),
    sv(3, [247], "225", "HISTOLOGY", "Photograph A — the Lipofuscin 'wear and tear' pigment (book 225)",
       "A cmyk jpeg photograph (175x126 at 150 dpi), lettered A beside the 'Lipofuscin A' text — showing the yellow-brown granular pigment deposited in tissue. COPYRIGHTED — described in text, never reproduced.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's Lipofuscin panel + blocks[3] the Lipofuscin row", "note-block"),
]
(ROOT / "content/usmle/manifests/paraneoplastic-aging.json").write_text(json.dumps(m19, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/paraneoplastic-aging.json").write_text(
    json.dumps({"topicId": "paraneoplastic-aging", "chapterId": "pathology", "inventory": inv19,
                "coverageAudit": {"topicId": "paraneoplastic-aging", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 3,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's text blocks (the paraneoplastic syndromes table, the aging organ-system changes, and the Lipofuscin block) are adapted as the registry visual and carried verbatim in the note's tables. The ONE copyrighted photograph (A = Lipofuscin 'wear and tear' pigment on book 225) is described in text, never reproduced (the M32 convention). No margin mnemonics (VLM confirmed); the KYP memory layer is original."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pathology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "paraneoplastic-aging":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv19))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pathology {done}/19{' — CHAPTER COMPLETE' if done==19 else ''}")
print("P19 manifest + inventory + flip done")
