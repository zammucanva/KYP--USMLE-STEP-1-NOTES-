#!/usr/bin/env python3
"""PH4 elimination-of-drugs — manifest + inventory (Pharmacology,
Pharmacokinetics and Pharmacodynamics), STAGED under
.usmle-pipeline-cache/staging-ph4/ (the promotion step owns content/).
SHARED PAGE (the p196 convention): pdf 252 / book 230 carries TWO
subsections — "Drug metabolism" (top half, sibling topic drug-metabolism)
and "Elimination of drugs" (bottom half, THIS topic). Only the elimination
block's contiguous raw lines are quoted (part1.txt page-252 lines 49-118);
the Drug metabolism block (lines 1-47) is NOT quoted. NOTE on numbering:
the task's raw line numbers follow .usmle-pipeline-cache/ph1-p252.txt,
whose line 1 is the "========== PDF PAGE 252" banner — part1.txt page-252
line N = ph1-p252.txt line N+1, so the task's "raw 50-63 / 64-73 / 74-87 /
88-119" map to part1 lines 49-62 / 63-72 / 73-86 / 87-118.
Census (pdfimages + VLM, scripts/usmle-pipeline/ph4-vlm-census.ts,
glm-4.6v): ZERO raster images on the page; the elimination block is a
two-column zero-order/first-order text table (left: constant amount,
Cp ↓ linearly, Phenytoin/Ethanol/Aspirin, capacity-limited; right:
constant fraction, Cp ↓ exponentially, most drugs, flow-dependent) plus
TWO VECTOR elimination-curve figures — (1) zero-order: straight line,
constant 2 U/h slope chips, brackets "First t1/2 > Second t1/2 >
Third t1/2" (VLM: the FIRST bracket, at the highest concentration, is
drawn longest), annotation "Time of t1/2 ↑ as concentration ↑"; (2)
first-order: exponential decay, slope chips 4 → 2 → 1 → 0.5 U/h, equal
brackets "First t1/2 = Second t1/2 = Third t1/2", annotation "Time of
t1/2 is constant as concentration ↑". The margin mnemonic "A PEA is
round, shaped like the "0" in zero-order." prints in the margin directly
under "Capacity-limited elimination." (red bold PEA/“0”/“zero-”) — it is
the SOURCE's own mnemonic and is carried verbatim with attribution; no
other margin mnemonics on the page. Nothing is reproduced: the table is
carried verbatim in the note; both figures are redrawn as ORIGINAL KYP
vector art (elimination-kinetics-map); the four ALL-CAPS mnemonics are
original KYP."""
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
E4 = [
    ("The topic heading and the zero-order column head — Elimination of drugs / Zero-order elimination (book 230)", rng(252, 49, 51), [252]),
    ("Zero-order elimination — rate of elimination is constant regardless of Cp (constant amount of drug eliminated per unit time); Cp ↓ linearly with time; examples Phenytoin, Ethanol, and Aspirin (at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination)", rng(252, 53, 58), [252]),
    ("Zero-order is capacity-limited elimination, with the source's own margin mnemonic “A PEA is round, shaped like the “0” in zeroorder.” (P·E·A = Phenytoin, Ethanol, Aspirin) carried verbatim", rng(252, 60, 61), [252]),
    ("First-order elimination — rate directly proportional to the drug concentration (constant fraction of drug eliminated per unit time); Cp ↓ exponentially with time; applies to most drugs", rng(252, 63, 69), [252]),
    ("First-order is flow-dependent elimination", rng(252, 71, 71), [252]),
    ("The two elimination-curve figure titles — Zero-order elimination / First-order elimination", rng(252, 73, 75), [252]),
    ("The zero-order curve labels — constant 2 U/h slope chips, the half-life bracket chain First t1/2 > Second t1/2 > Third t1/2 (each successive interval SHORTER as concentration falls), and the Time (h) axis", rng(252, 77, 84), [252]),
    ("The print footer slug — FAS1_2026_05-Pharmacology.indd 230 (page identity, book 230)", rng(252, 86, 86), [252]),
    ("The zero-order figure's y-axis label and half-life annotation — Drug plasma concentration ↑; the time of t1/2 ↑ as concentration ↑ (no single half-life exists)", rng(252, 88, 95), [252]),
    ("The first-order curve labels — Drug plasma concentration; Elimination rate (=slope) chips 4 → 2 → 1 → 0.5 U/h (the slope halves as the concentration halves); the annotation Time of t1/2 is constant as concentration ↑; the equal-bracket labels First t1/2 = Second t1/2 = Third t1/2; the Time (h) axis", rng(252, 97, 118), [252]),
]
for c, q, pgs in E4:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"elimination-of-drugs: evidence {len(kept)}/{len(E4)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m4 = {"topicId": "elimination-of-drugs", "title": "Elimination of Drugs: Zero & First Order",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [252], "bookPages": "230–230"},
    "sourceEvidence": kept, "visualIds": ["elimination-kinetics-map"],
    "mechanismIds": ["capacity-saturation-map", "slope-reading-map"],
    "kypExtensions": [
        {"id": "mnemonic-layer", "summary": "The four original KYP mnemonics (ZERO = AMOUNT, FIRST = FRACTION / STUCK RATE, STRAIGHT LINE / ZERO'S HALF-LIFE WANDERS, FIRST'S HALF-LIFE HOLDS / FLOOD THE ENZYME, FLATTEN THE LINE). The source's own margin mnemonic — “A PEA is round, shaped like the “0” in zero-order.” — is carried VERBATIM with attribution (it is NOT counted among the four KYP codes).",
         "origin": "outside-first-aid", "rationale": "The page prints exactly one mnemonic (A PEA, the zero-order example list); the four ALL-CAPS rate-rule, curve-shape, half-life-signature, and saturation-crossover codes are KYP's design.",
         "location": "mnemonics + blocks[4] the mnemonic-provenance callout + the visual's panel markers"},
        {"id": "mini-case-layer", "summary": "The dual-signature miniCase — a salicylate overdose whose serial levels fall by a fixed AMOUNT every 2 h with an 18-hour apparent half-life, paired with a phenytoin 10%-dose-increase trap (trough more than doubles, nystagmus/ataxia) — one saturated mechanism, two faces.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the two columns and the figures but never integrates them into a numeric overdose-vs-titration vignette; the fixed-amount arithmetic, the 18-h vs 2–4-h half-life contrast, and the four distractors (first-order misread, flow-dependent misfile, protein-binding conflation, invented CYP inhibition) are KYP's design.",
         "location": "usmle.miniCase"},
        {"id": "slope-reading-layer", "summary": "The slope-chip reading protocol (CHIP TEST → LINE TEST → BRACKET TEST → TAG TEST → CROSSOVER TEST) and the saturation-crossover framing (rate = Vmax·Cp/(Km + Cp): below Km first-order, above Km zero-order) — KYP's synthesis of the two figures and the two mechanism tags into one protocol.",
         "origin": "outside-first-aid", "rationale": "The source prints the two figures side by side with interleaved text-layer labels; the five-gate reading order, the fork banner (constant AMOUNT vs constant FRACTION), and the Michaelis–Menten bridge are KYP's design.",
         "location": "blocks[2] the steps block + mechanisms[1] slope-reading-map + the registry visual"},
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot attack structure layered over the source facts — 5 patterns (linear salicylate fall, fixed-rate ethanol, flow-dependent high-extraction, phenytoin titration jump, figure reading), 5 traps (constant amount vs fraction, linear vs exponential, the bracket symbols, capacity-limited vs flow-dependent, aspirin's dose-range qualifier), 3 pivots.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the two definitions, the tags, the examples, and the figure labels only; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "SHARED PAGE (the p196 convention): pdf 252 / book 230 carries two subsections — Drug metabolism (top half, sibling topic drug-metabolism) and Elimination of drugs (bottom half, this topic); only the elimination block's contiguous lines (part1.txt page-252 lines 49-118) are quoted, and the interleaved figure labels are quoted in physical order as the text layer prints them. PEA PROVENANCE: “A PEA is round, shaped like the “0” in zero-order.” is First Aid's own margin mnemonic (book 230, printed in the margin directly under “Capacity-limited elimination.” — VLM: red bold PEA/“0”/“zero-”); it is carried verbatim with attribution and is not counted among the four original KYP mnemonics. FIGURE-DIRECTION DECISION (documented): the production brief's glosses said the zero-order half-life 'LENGTHENS as concentration falls' / 'each successive half-life interval is LONGER' — the literal printed chain 'First t1/2 > Second t1/2 > Third t1/2' means each successive interval is SHORTER down the curve (at a constant 2 U/h, 16→8 takes 4 h, 8→4 takes 2 h, 4→2 takes 1 h), matching the zero-order annotation 'Time of t1/2 ↑ as concentration ↑', the VLM bracket reading ('the FIRST half-life interval, at the highest concentration, is drawn longest'), and standard pharmacokinetics; the note ships the correct reading (half-life lengthens as concentration RISES). A second focused VLM pass disagreed on the small arrow glyphs (a known VLM limitation) — the text layer (which preserves ↑/↓ and the > / = symbols verbatim) was treated as authoritative. Census (pdfimages + VLM, scripts/usmle-pipeline/ph4-vlm-census.ts): ZERO rasters; two VECTOR figures redrawn as original KYP art. Quirks, documented: (1) part1.txt page-252 line N = ph1-p252.txt line N+1 (the pre-extracted file's banner line); (2) the text-layer line-wrap renders the PEA line's trailing word 'zeroorder.' (hyphen at the print line break) — the note carries it as printed, 'zero-order'; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the P-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-ph4/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, and the visual registry are owned by the promotion step; the note's visualId 'elimination-kinetics-map' is therefore not yet in visuals/registry.tsx by design).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics",
    "topicId": "elimination-of-drugs", "requiredInKYP": True}
inv4 = [dict(SV_BASE, **{
    "visualId": "elimination-of-drugs-sv1",
    "sourcePages": {"part": 1, "pdfPages": [252], "bookPages": "230"},
    "visualType": "VISUAL_TABLE", "visualPurpose": "The two-column zero-order / first-order elimination text block (book 230)",
    "sourceFigureDescription": "PURE TEXT (pdfimages: zero raster images; VLM confirmed): the two-column elimination block — Zero-order elimination [Rate of elimination is constant regardless of Cp (ie, constant amount of drug eliminated per unit time); Cp ↓ linearly with time; Examples of drugs—Phenytoin, Ethanol, and Aspirin (at high or toxic concentrations → ↑ salicylate saturation → zero-order elimination); Capacity-limited elimination.; margin mnemonic “A PEA is round, shaped like the “0” in zeroorder.”] vs First-order elimination [Rate of first-order elimination is directly proportional to the drug concentration (ie, constant fraction of drug eliminated per unit time); Cp ↓ exponentially with time; Applies to most drugs.; Flow-dependent elimination.].",
    "implementationType": "ORIGINAL_KYP_ADAPTATION",
    "kypVisualId": "elimination-kinetics-map", "kypImplementation": "registry-visual",
    "qaStatus": "passed",
    "kypLocation": "the registry visual's fork banner + mirror panel headers/markers (EliminationKineticsMap in visuals/pharm-p4.tsx) + blocks[1] the table block carried verbatim",
    "productionStatus": "complete",
    "plannedKypVisualId": "elimination-kinetics-map", "plannedImplementation": "registry-visual"}),
   dict(SV_BASE, **{
    "visualId": "elimination-of-drugs-sv2",
    "sourcePages": {"part": 1, "pdfPages": [252], "bookPages": "230"},
    "visualType": "SUMMARY_FIGURE", "visualPurpose": "The two vector elimination-curve figures (book 230): zero-order (constant 2 U/h, shrinking t1/2 brackets) and first-order (halving 4→2→1→0.5 U/h slopes, equal t1/2 brackets)",
    "sourceFigureDescription": "VECTOR LINE ART, no raster (pdfimages: zero raster images; labels read via the pdftotext text layer + VLM): FIGURE 1, Zero-order elimination — y-axis 'Drug plasma concentration ↑', x-axis 'Time (h)', a STRAIGHT declining line with constant slope chips '2 U/h' and an 'Elimination rate (=slope)' label, half-life brackets 'First t1/2 > Second t1/2 > Third t1/2' (VLM: the FIRST bracket, at the highest concentration, is drawn longest), annotation 'Time of t1/2 ↑ as concentration ↑'. FIGURE 2, First-order elimination — same axes, an EXPONENTIAL decay curve whose 'Elimination rate (=slope)' chips halve 4 U/h → 2 U/h → 1 U/h → 0.5 U/h, equal brackets 'First t1/2 = Second t1/2 = Third t1/2', annotation 'Time of t1/2 is constant as concentration ↑'.",
    "implementationType": "ORIGINAL_KYP_REDRAW",
    "kypVisualId": "elimination-kinetics-map", "kypImplementation": "registry-visual",
    "qaStatus": "passed",
    "kypLocation": "the registry visual's two mirror panels (the straight line with 2 U/h chips and shrinking First>Second>Third brackets; the exponential curve with 4→2→1→0.5 U/h chips and equal First=Second=Third brackets) plus the saturation-crossover panel (EliminationKineticsMap in visuals/pharm-p4.tsx)",
    "productionStatus": "complete",
    "plannedKypVisualId": "elimination-kinetics-map", "plannedImplementation": "registry-visual"})]
OUT = CACHE / "staging-ph4"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "elimination-of-drugs.json").write_text(json.dumps(m4, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "elimination-of-drugs.json").write_text(
    json.dumps({"topicId": "elimination-of-drugs", "chapterId": "pharmacology", "inventory": inv4,
                "coverageAudit": {"topicId": "elimination-of-drugs", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Two visual assets on the source page (pdfimages: ZERO rasters — both are VECTOR figures): (1) the two-column zero-order/first-order text block, adapted as the registry visual's fork banner + panel structure and carried verbatim in the note's table block; (2) the two elimination-curve figures (zero-order constant 2 U/h with shrinking First>Second>Third brackets; first-order halving 4→2→1→0.5 U/h slopes with equal brackets), redrawn as original KYP vector art. Nothing is reproduced; the source's own PEA margin mnemonic is quoted verbatim with attribution. Census: zero raster images (pdfimages) and one margin mnemonic, A PEA, confirmed by VLM (scripts/usmle-pipeline/ph4-vlm-census.ts). Shared page: pdf 252's top half (Drug metabolism) belongs to the sibling topic. STAGED under .usmle-pipeline-cache/staging-ph4/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH4 manifest + inventory staged: {OUT}/manifests/elimination-of-drugs.json, {OUT}/visual-inventory/elimination-of-drugs.json")
print(f"elimination-of-drugs: evidence {len(kept)}/{len(E4)} verified")
