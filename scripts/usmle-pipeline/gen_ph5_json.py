#!/usr/bin/env python3
"""PH5 urine-ph-dosage — manifest + inventory (Pharmacology 5 of the
PH batch), STAGED under .usmle-pipeline-cache/staging-ph5/ (the
promotion step owns content/). Source: pdf 253 / book 231, the shared
page "Urine pH and drug elimination" + "Dosage calculations"
(Pharmacology — Pharmacokinetics and Pharmacodynamics). Census
(pdfimages + VLM, scripts/usmle-pipeline/ph5-vlm-census.ts): ZERO
raster images — pure text plus ONE vector figure (the
ionization-vs-pH curve: "Ionized species formation (%)" 0-100 with
ticks 0/50/100, the Weak acid curve rising and the Weak base curve
falling to the right, the two curves crossing at 50% near pH 9-10
with dashed crossing lines, "pKa: 9.2" below the x-axis, "pKa = more
acidic" (left) and "pKa = more basic" (right) annotations with
arrows) + the two typeset reaction equations (RCOOH (lipid soluble)
<-> RCOO- + H+ (trapped); RNH3+ (trapped) <-> RNH2 + H+ (lipid
soluble)) + the two dosage formulas. VLM confirmed NO margin
mnemonics anywhere on the page; the KYP memory layer is original.
Text-layer interleave quirks documented in the claims: the weak-acid
equation lines (RCOOH / RCOO- + H+ / (lipid soluble) / (trapped))
print at raw 21-27 AFTER the "Weak bases" label (raw 19); the
figure's text labels are scattered through the layer (the y-axis
title at raw 44, the 100/0 ticks at raw 48/50, and the Weak acid /
Weak base / 50 / pH-tick / pKa cluster at raw 71-84 AFTER the indd
footer at raw 69)."""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
STAGING = CACHE / "staging-ph5"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "": pages.pop()
L = {253: pages[252].split("\n")}
P = {253: norm(pages[252])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E5 = [
    ("Page identity — the section banner, header, and topic heading (book 231)", rng(253, 1, 10), [253]),
    ("The ion-trapping rule — ionized species are trapped in urine and cleared quickly; neutral forms can be reabsorbed", rng(253, 12, 12), [253]),
    ("The weak-acids block — examples (phenobarbital, methotrexate, aspirin/salicylates) and the treatment: sodium bicarbonate to alkalinize urine", rng(253, 14, 17), [253]),
    ("The weak-acid equilibrium — RCOOH (lipid soluble) ↔ RCOO– + H+ (trapped); the equation lines print at raw 21-27 AFTER the 'Weak bases' label (raw 19) — the two-column interleave quirk of this page", rng(253, 19, 27), [253]),
    ("The weak-bases block — examples (TCAs, amphetamines), trapped in acidic environments, and for severe alkalosis ammonium chloride to acidify urine, plus the RNH3+ (trapped) ↔ RNH2 + H+ (lipid soluble) equation", rng(253, 29, 35), [253]),
    ("The pKa definition — pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized; the pKa represents the strength of the weak acid or base", rng(253, 37, 42), [253]),
    ("The ionization-figure y-axis title — 'Ionized species formation (%)' (prints at raw 44, before the TCA rule)", rng(253, 44, 44), [253]),
    ("The TCA rule — TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity; treats cardiac toxicity, does not accelerate drug elimination", rng(253, 46, 47), [253]),
    ("The ionization-figure y-axis tick labels — 100 and 0 (print at raw 48/50, straddling the 'Dosage calculations' heading)", rng(253, 48, 50), [253]),
    ("The dosage-calculations block — Loading dose = Cp × Vd / F; Maintenance dose = Cp × CL × τ / F; Cp = target plasma concentration; τ = dosage interval (time between doses), does not apply for continuous infusions", rng(253, 52, 67), [253]),
    ("The footer print line — the indd slug (page identity, book 231)", rng(253, 69, 69), [253]),
    ("The ionization-figure label cluster — Weak acid, Weak base, the 50 crossing, the pH axis 4 / 8 / 12 / 14, pKa: 9.2, pKa = more acidic, pKa = more basic (prints at raw 71-84, AFTER the indd footer — the vector figure's scattered text layer)", rng(253, 71, 84), [253]),
    ("The organ-disease and steady-state rules — in renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged; time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency", rng(253, 86, 91), [253]),
    ("The timestamp footer (page identity, book 231)", rng(253, 93, 93), [253]),
]
for c, q, pgs in E5:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"urine-ph-dosage: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m5 = {"topicId": "urine-ph-dosage", "title": "Urine pH, Ion Trapping & Dosage Calculations",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [253], "bookPages": "231–231"},
    "sourceEvidence": kept, "visualIds": ["urine-ph-trapping-map"],
    "mechanismIds": ["ion-trapping-map", "dose-equation-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts (4 patterns, 4 traps, 3 pivots).",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the rule, the two equilibria with examples and treatments, the pKa definition, the figure, the TCA line, and the dosage equations; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "three-gate-reading", "summary": "The three-gate reading protocol (GATE 1 CLASSIFY the drug as weak acid or weak base; GATE 2 COUNT THE CHARGE at the tubular pH — ionized = trapped and cleared, neutral = reabsorbed; GATE 3 MOVE the urine pH toward the ionized side) plus the two-exception frame (the TCA cardiac-not-renal bicarbonate; loading-Vd vs maintenance-CL in organ disease) — KYP's synthesis of the page into one algorithm.",
         "origin": "outside-first-aid", "rationale": "The source prints the rule, the classes, and the equations as separate fragments; the gate protocol, the exception pairing, and the fill-the-container/match-the-drain framing of the dosage equations are KYP's design.",
         "location": "core.keyIdea + blocks[3] the steps block + pivots + the visual's Band 1/4 spine"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (CHARGED TRAPPED, NEUTRAL RETURNED / BICARB TRAPS ACIDS, AMMONIUM TRAPS BASES / AT THE pKa, 50/50 — ACIDS UP, BASES DOWN / LOAD WITH Vd, MAINTAIN WITH CL) — no mnemonic prints on the page.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere on book 231 (VLM census confirmed); the four codes are KYP's design.",
         "location": "mnemonics + the visual's card footers + rapidReview.m3"},
        {"id": "mini-case-layer", "summary": "The salicylate-overdose miniCase (a CKD-stage-4 patient whose renal-elimination maneuver [bicarbonate to trap RCOO–] is paired with the dosing adjustment [maintenance ↓, loading usually unchanged], with the ammonium-chloride wrong-direction, the TCA sodium-channel confusion, the steady-state conflation, and the acidify-plus-shrink-both-doses distractors) — a KYP-authored integration of the trapping rule and both dosage rules.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the urine-pH block and the dosage block side by side but never asks the learner to pair them; the vignette, the four distractors, and the two-layer question are KYP's design.",
         "location": "usmle.miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + VLM, ph5-vlm-census.ts): ZERO raster images on pdf 253 / book 231 — pure text plus ONE vector figure (the ionization-vs-pH curve: 'Ionized species formation (%)' 0-100 with ticks 0/50/100, pH axis 4-14 with ticks 4/8/12/14, the Weak acid curve rising and the Weak base curve falling to the right, the two crossing at 50% near pH 9-10 with dashed horizontal and vertical crossing lines, 'pKa: 9.2' below the x-axis, 'pKa = more acidic' left and 'pKa = more basic' right with arrows) plus the two typeset reaction equations and the two dosage formulas. The VLM confirmed the figure topology and NO margin notes or mnemonics anywhere on the page; the KYP memory layer is original. Text-layer interleave quirks, documented: (1) the weak-acid equation lines (RCOOH / RCOO– + H+ / (lipid soluble) / (trapped)) print at raw lines 21-27 AFTER the 'Weak bases' label (raw 19) — pdftotext's two-column interleave, mirrored in the claims; (2) the figure's text is scattered through the layer — the y-axis title at raw 44, the 100/0 ticks at raw 48/50 straddling the 'Dosage calculations' heading, and the Weak acid / Weak base / 50 / pH-tick / pKa: 9.2 / more-acidic / more-basic cluster at raw 71-84 AFTER the indd footer at raw 69; (3) the printed 'For severe alkalosis' qualifier on the ammonium chloride line is carried verbatim (it is the source's own indication wording for acidifying the urine); (4) the ↓ arrow on the organ-disease line is preceded in the raw layer by a \\x90 control byte (stripped by norm, per the pipeline convention). Difficulty 2 matches the chapter inventory (content/usmle/chapters/pharmacology.json lists urine-ph-dosage at difficulty 2 — no pending correction). Outputs are STAGED under .usmle-pipeline-cache/staging-ph5/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'urine-ph-trapping-map' is therefore not yet in visuals/registry.tsx by design).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics",
    "topicId": "urine-ph-dosage", "requiredInKYP": True}
inv5 = [
    dict(SV_BASE, **{
        "visualId": "urine-ph-dosage-sv1",
        "sourcePages": {"part": 1, "pdfPages": [253], "bookPages": "231"},
        "visualType": "VISUAL_TABLE", "visualPurpose": "The Urine pH and drug elimination text/equations block + the Dosage calculations block (book 231)",
        "sourceFigureDescription": "PURE TEXT + TYPESET EQUATIONS (pdfimages: zero raster images; VLM confirmed): the rule 'Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.'; the weak-acid block (RCOOH (lipid soluble) ↔ RCOO– + H+ (trapped); examples phenobarbital, methotrexate, aspirin (salicylates); treat overdose with sodium bicarbonate to alkalinize urine); the weak-base block (RNH3+ (trapped) ↔ RNH2 + H+ (lipid soluble); examples TCAs, amphetamines; trapped in acidic environments; for severe alkalosis treat with ammonium chloride to acidify urine); the pKa definition (pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized; represents the strength of the weak acid or base); the TCA rule (sodium bicarbonate to overcome the sodium channel-blocking activity — treats cardiac toxicity, does not accelerate drug elimination); and the dosage block (Loading dose = Cp × Vd / F; Maintenance dose = Cp × CL × τ / F; Cp = target plasma concentration; τ = dosage interval, does not apply for continuous infusions; renal/liver disease → maintenance dose ↓, loading dose usually unchanged; time to steady state depends primarily on t1/2, independent of dose and dosing frequency).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "urine-ph-trapping-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (Band 1 the tubular trapping map with the blood strip, the two equilibrium cards, and the NaHCO3/NH4Cl treatment arrows; Band 3 the TCA exception card with the renal-vs-cardiac contrast chips; Band 4 the dosage panel — UrinePhTrappingMap in visuals/pharm-p5.tsx) + blocks[1] and blocks[5] the table blocks carried verbatim + blocks[2] the compare block",
        "productionStatus": "complete",
        "plannedKypVisualId": "urine-ph-trapping-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "urine-ph-dosage-sv2",
        "sourcePages": {"part": 1, "pdfPages": [253], "bookPages": "231"},
        "visualType": "SUMMARY_FIGURE", "visualPurpose": "The ionization-vs-pH curve — the vector figure on book 231",
        "sourceFigureDescription": "The ONE vector figure on the page (zero rasters; VLM confirmed the topology): a graph titled 'Ionized species formation (%)' with a y-axis 0-100 (ticks 0, 50, 100) against an x-axis 'pH' running 4-14 (ticks 4, 8, 12, 14); two S-shaped curves labeled 'Weak acid' (rising to the right — more ionized at high pH) and 'Weak base' (falling to the right — more ionized at low pH) crossing at the 50% level near pH 9-10, with dashed horizontal (50%) and vertical (crossing-pH) guide lines; the annotation 'pKa: 9.2' sits below the x-axis near the crossing, flanked by the margin notes 'pKa = more acidic' (toward low pH) and 'pKa = more basic' (toward high pH) with arrows. REDRAWN as an original KYP figure — not reproduced.",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "urine-ph-trapping-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (Band 2 — the curve redrawn with original KYP axes: the weak-acid and weak-base sigmoids, the 50% crossing marked at pH = pKa, the pKa 9.2 example marker, the more-acidic/more-basic annotations, and the reading-rules card) + blocks[1] the figure row of the table block",
        "productionStatus": "complete",
        "plannedKypVisualId": "urine-ph-trapping-map", "plannedImplementation": "registry-visual"}),
]
(STAGING / "manifests").mkdir(parents=True, exist_ok=True)
(STAGING / "visual-inventory").mkdir(parents=True, exist_ok=True)
(STAGING / "manifests" / "urine-ph-dosage.json").write_text(json.dumps(m5, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(STAGING / "visual-inventory" / "urine-ph-dosage.json").write_text(
    json.dumps({"topicId": "urine-ph-dosage", "chapterId": "pharmacology", "inventory": inv5,
                "coverageAudit": {"topicId": "urine-ph-dosage", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Two source visuals: sv1 the text/equations/dosage block (pure text + typeset equations — ZERO rasters) adapted as the registry visual's Bands 1, 3, and 4 and carried verbatim in the note's table blocks; sv2 the ionization-vs-pH vector figure REDRAWN with original KYP axes as the registry visual's Band 2 (the weak-acid and weak-base sigmoids, the 50% crossing at pH = pKa, the pKa 9.2 example, the more-acidic/more-basic annotations). Nothing is reproduced; both surface through the single registry visual urine-ph-trapping-map (UrinePhTrappingMap in visuals/pharm-p5.tsx). Census: zero rasters (pdfimages) and no margin mnemonics (VLM confirmed on scripts/usmle-pipeline/ph5-vlm-census.ts). STAGED under .usmle-pipeline-cache/staging-ph5/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH5 STAGING manifest + inventory written to {STAGING}")
print(f"urine-ph-dosage: evidence {len(kept)}/{len(E5)} verified")
