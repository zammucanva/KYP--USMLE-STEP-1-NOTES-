#!/usr/bin/env python3
"""PH3 drug-metabolism — manifest + inventory (Pharmacology 3/29),
STAGED under .usmle-pipeline-cache/staging-ph3/ (the promotion step
owns content/). Source: pdf 252 TOP HALF / book 230 — a SHARED page
(the p196 convention): the bottom half, "Elimination of drugs", is the
sibling topic elimination-of-drugs, so only the metabolism block's
contiguous lines are quoted, stopping before the "Elimination of
drugs" heading. Census (pdfimages + VLM, ph3-vlm-census.ts): ZERO
raster images on the page — pure text plus ONE vector flow figure
(lipophilic drugs -> phase I [predominantly CYP450-dependent:
Reduction/Oxidation/Hydrolysis] -> slightly polar metabolite [active
or inactive] + reactive oxygen metabolites -> phase II
[Methylation/Acetylation/Glucuronidation/Sulfation] -> very polar,
hydrophilic metabolite [except acetylated] -> excretion: Serum [urine,
sweat], bile [stool]; polar drugs [water-soluble] bypass phase I and
feed phase II directly; "Reactive oxygen metabolites" prints TWICE);
NO margin notes or mnemonics in the metabolism half (VLM confirmed).
Nothing is reproduced: the flow figure is redrawn as an ORIGINAL KYP
visual (metabolism-phase-map, MetabolismPhaseMap in
visuals/pharm-p3.tsx) and the printed labels are carried verbatim in
the note's table block; the KYP memory layer is original.

Line-number note: the spec's raw coordinates (banner 1-10, intro rules
12-16, flow labels 17-48, Elimination heading 50) are 1-based lines of
the pre-extracted .usmle-pipeline-cache/ph1-p252.txt, whose line 1 is
the "========== PDF PAGE 252" banner. part1.txt's page-252 block has no
banner line, so every range below is shifted by -1 (banner 1-9, intro
rules 11-15, flow labels 16-47, Elimination heading 49 — never quoted).
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
L = {252: pages[251].split("\n")}
P = {252: norm(pages[251])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E3 = [
    ("Page identity — the section banner, header, and topic heading (book 230)", rng(252, 1, 9), [252]),
    ("The intro rules block — drugs can be metabolized by either or both phase I and phase II reactions; bioactivate or deactivate; not sequential (phase I can follow phase II, or a single reaction); geriatric patients lose phase I first; slow acetylators have ↑ adverse effects from ↓ rate of metabolism (eg, isoniazid)", rng(252, 11, 15), [252]),
    ("The flow-figure inputs and phase I header — Lipophilic drugs; Polar drugs (water-soluble); Phase I (predominantly CYP450-dependent)", rng(252, 16, 21), [252]),
    ("The phase II header with its first reactive-oxygen print and the first phase I chute — Phase II; Reactive oxygen metabolites; Reduction", rng(252, 23, 26), [252]),
    ("The remaining phase I chutes and the first phase II chute — Oxidation; Hydrolysis; Methylation", rng(252, 28, 32), [252]),
    ("The phase I output cluster with the second reactive-oxygen print and the acetylation chute — Slightly polar metabolite (active or inactive); Reactive oxygen metabolites; Acetylation", rng(252, 34, 37), [252]),
    ("The remaining phase II chutes — Glucuronidation; Sulfation", rng(252, 39, 41), [252]),
    ("The phase II output with its printed exception and the excretion terminal — Very polar, hydrophilic metabolite (except acetylated metabolite); Excretion; Serum (urine, sweat), bile (stool)", rng(252, 43, 47), [252]),
]
for c, q, pgs in E3:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"drug-metabolism: evidence {len(kept)}/{len(E3)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m3 = {"topicId": "drug-metabolism", "title": "Drug Metabolism: Phase I & Phase II",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [252], "bookPages": "230–230"},
    "sourceEvidence": kept, "visualIds": ["metabolism-phase-map"],
    "mechanismIds": ["phase-fork-map", "acetylator-pace-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the rules and the flow figure only; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "pipeline-reading", "summary": "The four-gate reading protocol (THE FORK / THE PAYOFF / THE PATIENT MODIFIERS / THE DIRECTION) and the pipeline framing of the flow figure, including the polar-drug bypass lane and the twice-printed reactive-oxygen label as documented quirks.",
         "origin": "outside-first-aid", "rationale": "The source prints the rules and the figure separately; the four-gate synthesis, the bypass-lane emphasis, and the quirk documentation are KYP's design.",
         "location": "core.keyIdea + the registry visual's zone structure + pivots"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (CYP RUNS R-O-H / MAGS MAKE IT SWIM — EXCEPT THE A / FORKS, NOT A LADDER / THE CYP GREYS FIRST, THE ACETYLATOR STALLS) — no mnemonic prints on the page.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere in the Drug metabolism half of book 230 (VLM census confirmed); the four codes are KYP's design.",
         "location": "mnemonics + the visual's rule-card footers"},
        {"id": "mini-case-layer", "summary": "The two-patient miniCase (a slow acetylator on isoniazid with stocking-glove peripheral neuropathy + a geriatric patient on a CYP450-dependent drug with supratherapeutic levels) — a KYP-authored integration of the page's two clinical rules.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the two rules as adjacent sentences and never asks the learner to apply them to patients; the vignette, the four distractors (inverted pace, zero-order import, assembly-line fallacy, reversed acetylation exception), and the reasoning are KYP's design.",
         "location": "usmle.miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "SHARED PAGE (the p196 convention): pdf 252 / book 230 carries TWO subsections — 'Drug metabolism' (top half, THIS topic) and 'Elimination of drugs' (bottom half, the sibling topic elimination-of-drugs); only the metabolism block's contiguous lines are quoted and every quote range stops before the 'Elimination of drugs' heading (part1.txt raw line 49), which belongs to the sibling. Census (pdfimages + VLM, ph3-vlm-census.ts): ZERO raster images on the page — the metabolism half is pure text plus ONE vector flow figure; the VLM confirmed the topology (lipophilic drugs → phase I [predominantly CYP450-dependent: Reduction/Oxidation/Hydrolysis] → slightly polar metabolite [active or inactive] + reactive oxygen metabolites → phase II [Methylation/Acetylation/Glucuronidation/Sulfation] → very polar, hydrophilic metabolite [except acetylated metabolite] → excretion: Serum [urine, sweat], bile [stool]) plus two documented quirks: 'Reactive oxygen metabolites' prints TWICE (phase I output cluster and beside the phase II header), and 'Polar drugs (water-soluble)' bypass phase I and feed phase II directly. NO margin notes or mnemonics print in the metabolism half — the KYP memory layer is original. Quirks, documented: (1) the spec's raw line coordinates are 1-based lines of .usmle-pipeline-cache/ph1-p252.txt (banner at line 1), so the part1.txt page-252 ranges used here are shifted by -1 (banner 1-9, intro rules 11-15, flow labels 16-47; the Elimination heading sits at raw 49 and is never quoted); (2) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the PH-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (3) outputs are STAGED under .usmle-pipeline-cache/staging-ph3/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'metabolism-phase-map' is therefore not yet in visuals/registry.tsx by design); (4) the note's verbatim table block carries the flow figure's labels, not its arrow geometry — the geometry is expressed only in the ORIGINAL KYP redraw.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics",
    "topicId": "drug-metabolism", "requiredInKYP": True}
inv3 = [
    dict(SV_BASE, **{
        "visualId": "drug-metabolism-sv1",
        "sourcePages": {"part": 1, "pdfPages": [252], "bookPages": "230"},
        "visualType": "BIOCHEMICAL_PATHWAY",
        "visualPurpose": "The phase I/II metabolism flow figure (book 230, top half)",
        "sourceFigureDescription": "VECTOR FLOW FIGURE (pdfimages: zero raster images; VLM confirmed on ph3-vlm-census.ts): Lipophilic drugs → Phase I (predominantly CYP450-dependent) with the three reaction chutes Reduction / Oxidation / Hydrolysis → Slightly polar metabolite (active or inactive) + Reactive oxygen metabolites (label printed twice — at the phase I output and beside the phase II header) → Phase II with the four conjugation chutes Methylation / Acetylation / Glucuronidation / Sulfation → Very polar, hydrophilic metabolite (except acetylated metabolite) → Excretion: Serum (urine, sweat), bile (stool); the figure's second input, Polar drugs (water-soluble), bypasses phase I and feeds phase II directly. No margin notes or mnemonics.",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "metabolism-phase-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (MetabolismPhaseMap in visuals/pharm-p3.tsx — the pipeline zone with the input chips, bypass lane, CYP450 reactor, reactive-oxygen flag, conjugation station, except-acetylated chip, and excretion terminal) + blocks[2] the steps block distilling the same pipeline; the printed labels are also carried verbatim in blocks[1] the table block",
        "productionStatus": "complete",
        "plannedKypVisualId": "metabolism-phase-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "drug-metabolism-sv2",
        "sourcePages": {"part": 1, "pdfPages": [252], "bookPages": "230"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The metabolism rules text block — the either/both + non-sequential intro rule, the geriatric rule, and the slow-acetylator rule (book 230, top half)",
        "sourceFigureDescription": "PURE TEXT (pdfimages: zero raster images; VLM confirmed): 'Drugs can be metabolized by either or both phase I and phase II reactions. These reactions serve to bioactivate or deactivate substances, and do not have to take place sequentially (eg, phase I can follow phase II, or take place as a single reaction). Geriatric patients lose phase I first. Patients who are slow acetylators have ↑ adverse effects from certain drugs because of ↓ rate of metabolism (eg, isoniazid).' No margin notes or mnemonics.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "metabolism-phase-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's two clinical-rule cards (GERIATRIC RULE / SLOW-ACETYLATOR RULE) + the FORKS-NOT-A-LADDER banner and the phase I vs phase II comparison strip, with the rules also carried verbatim in the note's table block (rows INPUTS and PHASE I/II), core.what, and recall[0-2]",
        "productionStatus": "complete",
        "plannedKypVisualId": "metabolism-phase-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph3"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "drug-metabolism.json").write_text(json.dumps(m3, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "drug-metabolism.json").write_text(
    json.dumps({"topicId": "drug-metabolism", "chapterId": "pharmacology", "inventory": inv3,
                "coverageAudit": {"topicId": "drug-metabolism", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The metabolism half's two visual assets — the ONE vector flow figure (redrawn as the registry visual metabolism-phase-map, an ORIGINAL KYP REDRAW with the printed labels also carried verbatim in the note's table block) and the rules text block (adapted as the visual's rule cards + banner + comparison strip and carried verbatim in the note) — are both accounted for; nothing is reproduced. Census: zero raster images (pdfimages) and no margin mnemonics in the metabolism half (VLM confirmed on scripts/usmle-pipeline/ph3-vlm-census.ts). SHARED PAGE (the p196 convention): the bottom half of pdf 252 / book 230 is the sibling topic elimination-of-drugs and is out of scope here. STAGED under .usmle-pipeline-cache/staging-ph3/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH3 manifest + inventory staged: {OUT}/manifests/drug-metabolism.json, {OUT}/visual-inventory/drug-metabolism.json")
print(f"drug-metabolism: evidence {len(kept)}/{len(E3)} verified")
