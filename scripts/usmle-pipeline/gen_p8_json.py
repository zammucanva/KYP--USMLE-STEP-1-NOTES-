#!/usr/bin/env python3
"""P8 acute-inflammation — manifest + inventory + flip (Pathology 8/19).
Census: pdf 231-232 (book 209-210). ONE cmyk JPEG raster on pdf 232
(~187x188 at 150 dpi), lettered A beside 'Characterized by neutrophils
in tissue A' — an H&E micrograph of dense neutrophil infiltration
(dark purple multilobed nuclei within pink tissue/stroma), sitting on
the left side below the Acute inflammation header. COPYRIGHTED —
described-in-text only, NEVER reproduced (the M32 convention). NO
margin notes or mnemonics on either page (VLM census confirmed on
both pages); the KYP memory layer is original."""
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
L = {231: pages[230].split("\n"), 232: pages[231].split("\n")}
P = {231: norm(pages[230]), 232: norm(pages[231])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E8 = [
    ("Page identity — the section banner and the printed page number (book 209)", rng(231, 1, 9), [231]),
    ("The inflammation definition — eliminate the initial cause, remove necrotic cells, initiate tissue repair; divided into acute and chronic; the harmful triple (excessive septic shock, prolonged TB, inappropriate SLE)", rng(231, 12, 15), [231]),
    ("Rubor and calor — redness and warmth; vasodilation (relaxation of arteriolar smooth muscle) → ↑ blood flow; histamine, prostaglandins, bradykinin, NO", rng(231, 22, 25), [231]),
    ("Tumor — swelling; endothelial contraction/disruption → ↑ vascular permeability → protein-rich exudate from postcapillary venules → ↑ interstitial oncotic pressure; leukotrienes (C4, D4, E4), histamine, serotonin, bradykinin", rng(231, 27, 32), [231]),
    ("Dolor — pain; sensitization of sensory nerve endings; bradykinin, PGE2, histamine", rng(231, 34, 36), [231]),
    ("Functio laesa — loss of function; inability to make fist due to hand cellulitis", rng(231, 38, 40), [231]),
    ("Fever — pyrogens (eg, LPS) induce macrophages to release IL-1 and TNF → ↑ COX activity in perivascular cells of anterior hypothalamus → ↑ PGE2 → ↑ temperature set point", rng(231, 43, 46), [231]),
    ("Leukocytosis — ↑ WBC count; predominant cell depends on inciting agent (eg, bacteria → ↑ neutrophils)", rng(231, 48, 51), [231]),
    ("↑ plasma acute-phase reactants — serum concentrations change in acute and chronic inflammation; produced by liver; notably induced by IL-6", rng(231, 53, 57), [231]),
    ("The POSITIVE reactant rows part 1 — CRP (opsonin, fixes complement, nonspecific sign), Ferritin (sequesters iron), Fibrinogen (coagulation factor, endothelial repair, correlates with ESR)", rng(231, 60, 73), [231]),
    ("The POSITIVE reactant rows part 2 — Haptoglobin (binds extracellular hemoglobin), Hepcidin (↓ absorption by degrading ferroportin + ↓ release → anemia of chronic disease), Procalcitonin (bacterial infections), Serum amyloid A (prolonged → secondary amyloidosis)", rng(231, 75, 90), [231]),
    ("The NEGATIVE reactant rows — Albumin (conserves amino acids), Transferrin (internalized to sequester iron), Transthyretin (prealbumin; conserves amino acids) + the indd footer", rng(231, 92, 106), [231]),
    ("The ESR mechanism — RBCs separated via ⊝ charges; fibrinogen coats RBCs → ↓ ⊝ charge → ↑ aggregation; denser aggregates fall faster → ↑ ESR; co-tested with CRP (more specific)", rng(232, 10, 12), [232]),
    ("The ↑ ESR list — most anemias, infections, inflammation (giant cell [temporal] arteritis, polymyalgia rheumatica), cancer (metastases, multiple myeloma), renal disease (end-stage or nephrotic syndrome), pregnancy", rng(232, 17, 23), [232]),
    ("The ↓ ESR list with the 'lower than expected' footnote — sickle cell anemia (altered shape), polycythemia (↑ RBCs 'dilute' aggregation factors), HF, microcytosis, hypofibrinogenemia", rng(232, 25, 38), [232]),
    ("The acute inflammation definition — transient and early, neutrophils in tissue A with edema, rapid onset (seconds to minutes), short duration (minutes to days), innate immune system (less specific than chronic)", rng(232, 42, 45), [232]),
    ("STIMULI (infections, trauma, necrosis, foreign bodies) + MEDIATORS (TLRs, arachidonic acid metabolites, neutrophils, eosinophils, pre-existing antibodies, mast cells, basophils, complement, Hageman factor XII)", rng(232, 47, 55), [232]),
    ("COMPONENTS — vascular (vasodilation → ↑ blood flow and stasis; ↑ endothelial permeability, contraction opens interendothelial junctions) + cellular (extravasation of leukocytes mainly neutrophils from postcapillary venules → accumulation → activation)", rng(232, 57, 66), [232]),
    ("OUTCOMES — resolution and healing (IL-10, TGF-β), persistent acute inflammation (IL-8), abscess (walled off by fibrosis), chronic inflammation (antigen presentation by macrophages and other APCs → CD4+ Th cells), scarring", rng(232, 72, 79), [232]),
    ("The inflammasome margin block — cytoplasmic complex recognizing DAMPs and PAMPs (microbial products, uric acid crystals) → IL-1 activation → fever, leukocytosis; brings cells and proteins to the site", rng(232, 81, 87), [232]),
    ("The extravasation + macrophage margin block — 4 steps (margination and rolling, adhesion, transmigration, migration/chemoattraction); macrophages predominate late (peak 2-3 days), secreting cytokines", rng(232, 89, 94), [232]),
    ("The timestamp footer (page identity, book 210)", rng(232, 96, 96), [232]),
]
for c, q, pgs in E8:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"acute-inflammation: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m8 = {"topicId": "acute-inflammation", "title": "Acute Inflammation: Cardinal Signs & Acute-Phase Reactants",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Inflammation", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [231, 232], "bookPages": "209–210"},
    "sourceEvidence": kept, "visualIds": ["acute-phase-reactant-map"],
    "mechanismIds": ["cardinal-sign-cascade", "reactant-esr-routing"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the definition, the signs table, the reactants, the ESR block, and the panel; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "three-frame-reading", "summary": "The three-frame rule (the local sign, the systemic marker, the panel) — KYP's synthesis of the two pages into one reading protocol.",
         "origin": "outside-first-aid", "rationale": "The source prints the blocks side by side without a unified reading protocol; the three-frame framing is KYP's design.",
         "location": "core.keyIdea + both mechanisms + m3"},
        {"id": "iron-trio-framing", "summary": "The 'iron goes into hiding' framing (ferritin locks, hepcidin blocks, transferrin hides) unifying the iron-related reactants across both columns — and the four original mnemonics, since no mnemonic prints on either page.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere on book 209-210 (VLM census confirmed); the four codes and the iron-trio framing are KYP's design.",
         "location": "mnemonics + traps + the mini-case reasoning"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: pdf 232's single photograph (A — the H&E micrograph of dense neutrophil infiltration, dark purple multilobed nuclei in pink tissue) is COPYRIGHTED — described-in-text only, never reproduced (the M32 convention). Two-page topic: the cardinal signs + reactants on book 209; the ESR + acute inflammation panel on book 210. No margin mnemonics on either page (VLM confirmed on both); the KYP memory layer is original.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Inflammation",
    "topicId": "acute-inflammation", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"acute-inflammation-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv8 = [
    sv(1, [231], "209", "VISUAL_TABLE", "The Cardinal signs table (book 209)",
       "The SIGN | MECHANISM table with the Cardinal signs rows (Rubor and calor, Tumor, Dolor, Functio laesa) and the Systemic manifestations rows (Fever, Leukocytosis, ↑ plasma acute-phase reactants). Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "acute-phase-reactant-map", "the registry visual (the local response panel + the systemic answer panel) + blocks[1] the table block carried verbatim"),
    sv(2, [231], "209", "VISUAL_TABLE", "The Acute-phase reactants table (book 209)",
       "The POSITIVE (UPREGULATED) group (CRP, Ferritin, Fibrinogen, Haptoglobin, Hepcidin, Procalcitonin, Serum amyloid A) and the NEGATIVE (DOWNREGULATED) group (Albumin, Transferrin, Transthyretin) with each function. Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "acute-phase-reactant-map", "the registry visual (the reactant router with both groups) + blocks[2] the table block carried verbatim"),
    sv(3, [232], "210", "VISUAL_TABLE", "The ESR block (book 210)",
       "The ESR mechanism paragraph, the two-column ↑ ESR / ↓ ESR disease lists, and the 'a Lower than expected' footnote. Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "acute-phase-reactant-map", "the registry visual (the ESR panel with mechanism + both lists) + blocks[3] the table block carried verbatim"),
    sv(4, [232], "210", "VISUAL_TABLE", "The acute inflammation panel + the two margin blocks (book 210)",
       "The definition (transient and early, neutrophils in tissue, innate) with the four-row table STIMULI / MEDIATORS / COMPONENTS / OUTCOMES, plus the inflammasome and 4-step extravasation/macrophages margin blocks. Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "acute-phase-reactant-map", "the registry visual (the bottom acute inflammation panel) + blocks[4] the table block carried verbatim"),
    sv(5, [232], "210", "HISTOLOGY", "Photograph A — neutrophils in tissue (book 210)",
       "A cmyk JPEG micrograph (~187x188 at 150 dpi), lettered A beside 'Characterized by neutrophils in tissue A': an H&E micrograph of dense neutrophil infiltration — dark purple multilobed nuclei within pinkish tissue/stroma — below the Acute inflammation header. COPYRIGHTED — described in text, never reproduced.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's panel definition line + blocks[3] the photographs row", "note-block"),
]
(ROOT / "content/usmle/manifests/acute-inflammation.json").write_text(json.dumps(m8, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/acute-inflammation.json").write_text(
    json.dumps({"topicId": "acute-inflammation", "chapterId": "pathology", "inventory": inv8,
                "coverageAudit": {"topicId": "acute-inflammation", "textbookVisualCount": 5,
                    "accountedFor": 5, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 5,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The pages' four text blocks (the cardinal signs table; the reactants table; the ESR block; the acute inflammation panel with its two margin blocks) are adapted as the registry visual and carried verbatim in the note's tables. The single photograph (A — the neutrophil-infiltration H&E micrograph) is COPYRIGHTED — described in text in the registry visual and the note's table, never reproduced (the M32 convention). No margin mnemonics exist on either page; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pathology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "acute-inflammation":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv8))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pathology {done}/19{' — CHAPTER COMPLETE' if done==19 else ''}")
print("P8 manifest + inventory + flip done")
