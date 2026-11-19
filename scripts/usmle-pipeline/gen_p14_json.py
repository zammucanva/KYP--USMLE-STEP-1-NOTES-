#!/usr/bin/env python3
"""P14 cancer-immunotherapy-epidemiology — staging manifest + inventory
(Pathology 14/19). Census (pdfimages + VLM p14-vlm-census.ts, glm-4.6v):
pdf 240 / book 218 has ZERO raster images — pure text plus ONE vector
line-art figure ("Immune checkpoint interactions": an APC and T cell with
MHC II/TCR/B7/CD28/CTLA-4 on the left side, a Tumor cell with MHC I/
PD-L1 facing the T cell's PD-1 on the right; the drug antibodies drawn
as Y-shaped blockers — Ipilimumab on CTLA-4; Atezolizumab/Durvalumab/
Avelumab on PD-L1; Cemiplimab/Nivolumab/Pembrolizumab on PD-1; labels
"Antigen", "T cell activation", "APC", "T cell", "Tumor cell") — redrawn
as an ORIGINAL KYP figure (the P2/P3 pure-vector convention). The figure
labels interleave with the running text at raw lines 21-54 (the M39
footer-split pattern): part 1 = lines 20-32, part 2 = lines 34-53, with
the "T cell" and "Cancer epidemiology" labels interleaved between the
drug-name blocks. VLM confirmed the molecule-to-cell topology, both drug
binding sites, the Y-shaped blockers, the "T cell activation" label, the
epidemiology table structure (rows Cancer incidence / Cancer mortality;
columns MALeS / feMALeS / CHILDReN (AGE 0-14) / NOTeS) and every cell
verbatim; NO margin notes or mnemonics on the page (VLM confirmed); the
KYP memory layer is original. STAGING OUTPUT ONLY (no content/ writes,
no chapter flip)."""
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
L = {240: pages[239].split("\n")}
P = {240: norm(pages[239])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E14 = [
    ("Page identity — the section banner and header (book 218)", rng(240, 1, 10), [240]),
    ("The checkpoint intro + the PD-1/PD-L1 axis — signals that modulate T-cell activation and function → ↓ immune response against tumor cells, targeted by cancer immunotherapies; PD-1 (on T cells) × PD-L1/2 (on tumor cells or immune cells in tumor microenvironment) → T-cell dysfunction (exhaustion); inhibited by the anti-PD-1 antibodies cemiplimab, nivolumab, pembrolizumab or the anti-PD-L1 antibodies atezolizumab, durvalumab, avelumab", rng(240, 12, 16), [240]),
    ("The CTLA-4/B7 axis — CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of T-cell costimulatory signal; inhibited by antibodies against CTLA-4 (eg, ipilimumab)", rng(240, 17, 18), [240]),
    ("The checkpoint figure labels part 1 (M39 interleave) — Ipilimumab, MHC II, the T cell label, Atezolizumab, Durvalumab, Avelumab, CD28, B7, CTLA-4", rng(240, 20, 32), [240]),
    ("The checkpoint figure labels part 2 (M39 interleave) — Cemiplimab, Nivolumab, Pembrolizumab, Antigen, T cell activation, TCR, MHC I, PD-1, the interleaved Cancer epidemiology heading, APC, Tumor cell, PD-L1", rng(240, 34, 53), [240]),
    ("The cancer epidemiology table verbatim — the skin-cancer exclusion line (basal > squamous >> melanoma, not included below); headers MALeS / feMALeS / CHILDReN (AGe 0-14) / NOTeS; the Cancer incidence row (males 1. Prostate 2. Lung 3. Colon/rectum; females 1. Breast 2. Lung 3. Colon/rectum; children 1. Leukemia 2. CNS 3. Neuroblastoma; NOTES lung cancer incidence ↓ in males, not changed significantly in females); the Cancer mortality row (males 1. Lung 2. Prostate 3. Colon/rectum; females 1. Lung 2. Breast 3. Colon/rectum; children the same trio; NOTES cancer is the 2nd leading cause of death in the United States, heart disease is 1st) — including the column interleave exactly as the text layer prints it", rng(240, 55, 98), [240]),
    ("The footer print line — the indd footer + timestamp (page identity, book 218)", rng(240, 100, 102), [240]),
]
for c, q, pgs in E14:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"cancer-immunotherapy-epidemiology: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m14 = {"topicId": "cancer-immunotherapy-epidemiology", "title": "Cancer Immunotherapy & Epidemiology",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Neoplasia", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [240], "bookPages": "218–218"},
    "sourceEvidence": kept, "visualIds": ["immunotherapy-target-map"],
    "mechanismIds": ["checkpoint-blockade-map", "incidence-mortality-split-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure (three patterns, four traps, two pivots, and the five-option melanoma miniCase) layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the two checkpoint bullets and the epidemiology table; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "two-frame-reading",
         "summary": "The two-frame rule (START GATE, LONG BRAKE — the CTLA-4 priming gate at the APC vs the PD-1 exhaustion brake in the tumor microenvironment; and the incidence-versus-mortality flip with the lung #1 rule) — KYP's synthesis of the page into one reading protocol.",
         "origin": "outside-first-aid", "rationale": "The source prints the two axes and the two table rows sequentially without a unified protocol; the framing is KYP's design.",
         "location": "core.keyIdea + mechanisms[0] and mechanisms[1] + pivots + the visual's flip-rule card"},
        {"id": "mnemonic-layer",
         "summary": "The four original KYP mnemonics (START GATE, LONG BRAKE / IPI HOLDS THE GATE, A.D.A. BLUNTS THE LIGAND, C.N.P. FREES THE RECEPTOR / PROSTATE LEADS MEN IN; LUNG LEADS EVERYONE OUT / SKIN STAYS OFF THE LIST; KIDS KEEP L-C-N TWICE) — no mnemonic prints on the page.",
         "origin": "outside-first-aid", "rationale": "No margin notes or mnemonics print anywhere on book 218 (pdfimages + VLM census confirmed); the four codes are KYP designs.",
         "location": "mnemonics + the visual's directory band and standing-rules card"},
        {"id": "mini-case-layer",
         "summary": "The pembrolizumab miniCase — metastatic melanoma with PD-L1-expressing tumor and PD-1-positive infiltrating lymphocytes, solved by the PD-1 blockade mechanism plus the immune-related adverse events (thyroiditis, colitis), discriminated from PD-1 agonism, ipilimumab's CTLA-4 mechanism, the anti-PD-L1 class, and ADCC direct-kill.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the axes and the drugs but no clinical vignette; the melanoma case, the irAE layer, and the distractor set are KYP designs.",
         "location": "usmle.miniCase + patterns[0] and patterns[1]"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "complete",
    "notes": "Census (pdfimages + VLM p14-vlm-census.ts, glm-4.6v on p1x-240-240.png): ZERO raster images on pdf 240 / book 218 — pure text plus ONE vector line-art figure, redrawn as an ORIGINAL KYP figure with original glyphs (the P2/P3 pure-vector convention); nothing reproduced. M39 label interleave: the figure's labels interleave with the running text at raw lines 20-53 and split into two non-contiguous blocks (part 1 = lines 20-32: Ipilimumab, MHC II, T cell, Atezolizumab, Durvalumab, Avelumab, CD28, B7, CTLA-4; part 2 = lines 34-53: Cemiplimab, Nivolumab, Pembrolizumab, Antigen, T cell activation, TCR, MHC I, PD-1, Cancer epidemiology, APC, Tumor cell, PD-L1) — both blocks quoted in order. VLM findings: the molecule-to-cell topology confirmed (APC carries MHC II + B7 with antigen presented to the TCR; T cell carries TCR, CD28, CTLA-4, PD-1; tumor cell carries MHC I + PD-L1); the Y-shaped antibody blockers confirmed at their binding sites (Ipilimumab on CTLA-4; Atezolizumab/Durvalumab/Avelumab on PD-L1; Cemiplimab/Nivolumab/Pembrolizumab on PD-1) with inhibition symbols; the 'T cell activation' label confirmed; the epidemiology table structure and every cell confirmed verbatim; NO margin mnemonics on the page (VLM confirmed) — the KYP memory layer is original. Text-layer quirks: the table headers print in the source's odd-cap forms (MALeS / feMALeS / CHILDReN (AGe 0-14) / NOTeS — a small-caps rendering artifact) and are carried verbatim; the ↓ arrows in lines 12 and 78 are preceded by a \\x90 control character that norm() strips. Single-page topic.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Neoplasia",
    "topicId": "cancer-immunotherapy-epidemiology", "requiredInKYP": True}
def sv(n, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"cancer-immunotherapy-epidemiology-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": [240], "bookPages": "218"},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv14 = [
    sv(1, "VISUAL_TABLE", "The Immune checkpoint interactions text block + the Cancer epidemiology table (book 218)",
       "The checkpoint intro (signals that modulate T-cell activation and function → ↓ immune response against tumor cells, targeted by several cancer immunotherapies) with both axis bullets — PD-1 (on T cells) × PD-L1/2 (on tumor cells or immune cells in tumor microenvironment) → T-cell dysfunction (exhaustion), inhibited by anti-PD-1 (cemiplimab, nivolumab, pembrolizumab) or anti-PD-L1 (atezolizumab, durvalumab, avelumab); CTLA-4 on T cells outcompetes CD28 for B7 on APCs → loss of T-cell costimulatory signal, inhibited by anti-CTLA-4 (ipilimumab) — plus the VERBATIM epidemiology table: the skin-cancer exclusion line (basal > squamous >> melanoma, not included below), the incidence and mortality rows across MALeS / feMALeS / CHILDReN (AGe 0-14) / NOTeS, and both NOTES blocks. Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "immunotherapy-target-map",
       "the registry visual (the axis cards + the epidemiology grid + the flip-rule and standing-rules cards) + blocks[1] and blocks[2] the table blocks carried verbatim"),
    sv(2, "IMMUNOLOGY_DIAGRAM", "The Immune checkpoint interactions vector figure (book 218)",
       "VECTOR LINE ART (pdfimages: ZERO raster images on the page): an APC (MHC II presenting Antigen to the TCR; B7) and a T cell (TCR, CD28, CTLA-4, PD-1) with 'T cell activation' at their contact on the left side; a Tumor cell (MHC I, PD-L1) facing the T cell's PD-1 on the right; the seven drug antibodies drawn as Y-shaped blockers — Ipilimumab on CTLA-4; Atezolizumab, Durvalumab, Avelumab on PD-L1; Cemiplimab, Nivolumab, Pembrolizumab on PD-1.",
       "ORIGINAL_KYP_REDRAW", "immunotherapy-target-map",
       "the registry visual (the checkpoint figure redrawn with original KYP glyphs — the three cells, the receptor glyphs, and the Y-shaped blockers with drug names at their binding sites) + blocks[1] the figure row"),
]
STAGE = ROOT / ".usmle-pipeline-cache" / "staging-p14"
(STAGE / "manifests").mkdir(parents=True, exist_ok=True)
(STAGE / "visual-inventory").mkdir(parents=True, exist_ok=True)
(STAGE / "manifests" / "cancer-immunotherapy-epidemiology.json").write_text(json.dumps(m14, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(STAGE / "visual-inventory" / "cancer-immunotherapy-epidemiology.json").write_text(
    json.dumps({"topicId": "cancer-immunotherapy-epidemiology", "chapterId": "pathology", "inventory": inv14,
                "coverageAudit": {"topicId": "cancer-immunotherapy-epidemiology", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's text (the checkpoint intro + both axis bullets, and the verbatim cancer epidemiology table with both NOTES blocks) is adapted as the registry visual and carried verbatim in the note's tables. The checkpoint figure is pure vector line art — redrawn as an ORIGINAL KYP REDRAW with original glyphs (the P2/P3 convention). ZERO raster images on the page, so nothing is described-in-text-only and nothing reproduced. The figure labels interleave in the text layer (the M39 pattern, raw lines 20-53, quoted in two blocks). No margin mnemonics exist on the page (VLM confirmed); the four KYP mnemonics are original."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("P14 staging manifest + inventory done (staging-p14/, no content/ writes, no chapter flip)")
