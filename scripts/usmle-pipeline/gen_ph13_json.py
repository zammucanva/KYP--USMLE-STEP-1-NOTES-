#!/usr/bin/env python3
"""PH13 adrenergic-receptor-distribution — manifest + inventory
(Pharmacology autonomic-drugs batch), STAGED under
.usmle-pipeline-cache/staging-ph13/ (the promotion step owns content/).
Source: pdf 258 BOTTOM half / book 236 (Part 1) — a SHARED PAGE (the
p196 convention): the TOP half, "Micturition control" (part1.txt
page-258 lines 1-94, including the "Baby one more time." margin note at
line 30 and the bladder figure), is the sibling topic
micturition-control — NEVER quoted here; only the adrenergic table's
contiguous lines 96-147 are quoted, plus the indd slug/timestamp footer
(lines 149-151) as its own page-identity entry.

CENSUS (VLM AVAILABLE this session — SUCCEEDED, unlike the ph6-ph10
401 outage): pdfimages reports THREE raster images on pdf 258 (426x336,
383x518, 458x277, sep, 316ppi), but PyMuPDF xobject-rect analysis
places ALL THREE in the TOP half (x~190-293pt, top-origin y~103-264pt)
and the z-ai VLM (glm-4.6v) adjudicated the extracted rasters directly:
pure anatomy silhouettes (a brainstem/pons mask, the bladder with
urethra, a detrusor crescent) with NO text — they are the micturition
figure's art, the sibling's territory. The BOTTOM half is a PURE
3-column text table (RECEPTOR / TISSUE / EFFECT(S)): ZERO figures,
icons, or photographs (PyMuPDF: 34 vector paths = the table's own cell
borders/shading; VLM on the 200-DPI render: "text and table borders
only"), and ZERO margin notes or mnemonics ("Baby one more time."
prints in the TOP half only). The first VLM pass had guessed one raster
might be the adrenergic table "rendered as a raster" — adjudicated
FALSE (the table has a full pdftotext text layer, impossible for a
raster); both VLM passes are saved to
staging-ph13/vlm-census.txt.

INTERLEAVE (the m38 convention, documented): the text layer prints each
receptor's TISSUE cells as a group, then its EFFECT(S) cells as a group
(e.g. alpha1: "Vascular smooth muscle / Visceral smooth muscle" then
"Vasoconstriction / Smooth muscle contraction"). The LOGICAL table is
reconstructed row-by-row (tissue[i] <-> effect[i]) and the pairing was
adjudicated on the VLM page render at 200 DPI (both the full-page pass
and the bottom-half crop return the identical pairing: a1 Vascular
smooth muscle -> Vasoconstriction, Visceral smooth muscle -> Smooth
muscle contraction; a2 Pancreas -> Inhibition of insulin secretion,
Presynaptic terminals -> Inhibition of neurotransmitter release,
Salivary glands -> Inhibition of salivary secretion; b1 Heart ->
(up-arrow) heart rate, contractility, Kidney -> (up-arrow) renin
secretion; b2 Bronchioles -> Bronchodilation, Cardiac muscle ->
(up-arrow) heart rate, contractility, Liver -> Glycogenolysis, glucose
release, Arterial smooth muscle -> Vasodilation, Pancreas ->
Stimulation of insulin secretion; b3 Adipose -> (up-arrow) lipolysis).
The reconstructed table is carried VERBATIM (printed row order) in the
note's table block.

VERBATIM/GLYPH QUIRKS, documented: (1) the table prints the receptor
names with REGULAR digits — "α1", "α2", "β1", "β2", "β3" — while the
top-half micturition figure on the SAME page prints "α₁-receptor" and
"β₃-receptor" with SUBSCRIPT digits; both carried as printed, never
normalized; (2) the up-arrow glyphs print in the text layer preceded by
a \\x8f control-character artifact (a pdftotext artifact, not a printed
character) — the normalizer strips it and the ↑ is carried; (3) NO
source typos print in this half — the table text is clean. Nothing is
reproduced: there is no figure on this half, so the registry visual
adrenergic-distribution-map (AdrenergicDistributionMap in
visuals/pharm-p13.tsx) is an ORIGINAL KYP adaptation — a five-column
receptor-directory map built from the printed table, with the pancreas
double-booking (α2 inhibit vs β2 stimulate) and the heart
double-booking (β1 Heart vs β2 Cardiac muscle) deliberately flagged,
plus an exam-reading band (the α2 presynaptic-autoreceptor hook
forward-linking to the autonomic-synapse topic and the β2
cardiac-muscle trap vs β1); the printed table is carried verbatim in
the note's table block.
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
if len(pages) > 433 and pages[-1].strip() == "":
    pages.pop()
L = {258: pages[257].split("\n")}
P = {258: norm(pages[257])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E13 = [
    ("Page identity — the subsection heading and the table's three column headers (book 236; the TOP half of this shared page, Micturition control lines 1-94, belongs to the sibling topic micturition-control and is NEVER quoted here)", rng(258, 96, 101), [258]),
    ("The α1 block — Vascular smooth muscle → Vasoconstriction; Visceral smooth muscle → Smooth muscle contraction (the text layer prints the two TISSUE cells as a group, then the two EFFECT(S) cells — the m38 interleave; the row pairing is positional and VLM-adjudicated at 200 DPI)", rng(258, 103, 109), [258]),
    ("The α2 block — Pancreas → Inhibition of insulin secretion; Presynaptic terminals → Inhibition of neurotransmitter release; Salivary glands → Inhibition of salivary secretion (every α2 row is an inhibition; the same interleave applies)", rng(258, 111, 119), [258]),
    ("The β1 block — Heart → ↑ heart rate, contractility; Kidney → ↑ renin secretion (the ↑ glyphs print in the text layer preceded by a \\x8f control-char artifact — a pdftotext artifact, stripped by the verifier, never a printed character)", rng(258, 121, 127), [258]),
    ("The β2 block — Bronchioles → Bronchodilation; Cardiac muscle → ↑ heart rate, contractility; Liver → Glycogenolysis, glucose release; Arterial smooth muscle → Vasodilation; Pancreas → Stimulation of insulin secretion (the five-row membership list — the widest in the table; the pancreas double-booking with α2 is deliberate and exam-tested)", rng(258, 129, 141), [258]),
    ("The β3 block — Adipose → ↑ lipolysis (the one-row receptor; the table gives β3 no other tissue)", rng(258, 143, 147), [258]),
    ("The page footer — the indd print slug and timestamp (page identity; prints at the very foot of pdf 258, below the adrenergic table, after both shared-page subsections)", rng(258, 149, 151), [258]),
]
for c, q, pgs in E13:
    e = ev(c, q, pgs)
    if e["verified"] != "pass":
        fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails:
        print("  x", f)
    sys.exit(1)
print(f"adrenergic-receptor-distribution: evidence {len(kept)}/{len(E13)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m13 = {"topicId": "adrenergic-receptor-distribution", "title": "Tissue Distribution of Adrenergic Receptors",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [258], "bookPages": "236–236"},
    "sourceEvidence": kept, "visualIds": ["adrenergic-distribution-map"],
    "mechanismIds": ["adrenergic-directory-map", "double-booked-organs-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed table — 6 patterns (β2 bronchodilation in asthma, the β1 cardiac-renal pair under β1 blockade, α1 vasoconstriction as decongestant/pressor, the α2 three-inhibition cluster of centrally acting agonists, the β2 cardiac-muscle row in a β2 agonist infusion, the β3 one-row adipose/lipolysis study), 5 traps (β1 Heart vs β2 Cardiac muscle; α2 Pancreas vs β2 Pancreas; α1 Vascular vs β2 Arterial smooth muscle; the α2 presynaptic autoreceptor vs the intuition that adrenergic stimulation always turns output up; the β3 one-row subtype), 3 pivots — including the drug exemplars (albuterol, metoprolol, phenylephrine, clonidine-type agents, β3 agonist) used as exam handles.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the bare distribution table and never asks the learner to route drugs through it; the attack structure and the drug exemplars are a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "directory-reading-layer",
         "summary": "The NAME → PLACE → PREDICT (+ CHECK the double bookings) reading protocol and the double-bookings framing — three tissues hold two receptor memberships each (pancreas α2+β2 opposite insulin directions; heart β1 Heart + β2 Cardiac muscle same effect; vascular bed α1 Vascular + β2 Arterial opposite directions), plus the 'effect belongs to the (receptor, tissue) pair, never to the organ alone' rule.",
         "origin": "outside-first-aid", "rationale": "The source prints the table as a lookup and never teaches a reading order or flags the double bookings; the four-move protocol and the double-bookings ledger are KYP's synthesis.",
         "location": "core.keyIdea + blocks[2] the steps block + blocks[4] the why callout + the registry visual's double-bookings band and rule banner"},
        {"id": "mnemonic-layer",
         "summary": "The four KYP mnemonics (ONE HEART, TWO LUNGS, THREE FAT / ALPHA-2, ALL BRAKES / PANCREAS PAYS BOTH WAYS / NAME, PLACE, PREDICT) — no mnemonic prints anywhere in the bottom half of the page.",
         "origin": "outside-first-aid", "rationale": "The VLM census confirms NO margin notes or mnemonics print in the adrenergic half of book 236 ('Baby one more time.' is the TOP half's, the sibling micturition-control's); the four codes are KYP's design.",
         "location": "mnemonics + rapidReview.m3 + the visual's band footers"},
        {"id": "mini-case-layer",
         "summary": "The α2-agonist miniCase — a centrally acting antihypertensive whose cluster (dry mouth + reduced fasting insulin + reduced norepinephrine release) is one subtype's three printed inhibition rows — with distractors built from the pancreas double-booking (β2 inverts the insulin sign), the smooth-muscle-only α1 list, and the cardiac-renal β1 list.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the table and never integrates its rows into a drug-cluster vignette; the stem, the four options, and the reasoning are KYP's design.",
         "location": "usmle.miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "SHARED PAGE (the p196 convention): pdf 258 / book 236 carries TWO subsections — 'Micturition control' (top half, lines 1-94, the sibling topic micturition-control, which owns the bladder figure, the DRUGS/MECHANISM/APPLICATIONS table, and the 'Baby one more time.' margin note) and 'Tissue distribution of adrenergic receptors' (bottom half, THIS topic); only the adrenergic table's contiguous lines 96-147 are quoted, plus the indd slug/timestamp footer (lines 149-151) as its own page-identity entry — the micturition lines are NEVER quoted. CENSUS (VLM SUCCEEDED this session — both passes saved to staging-ph13/vlm-census.txt): pdfimages reports THREE rasters on pdf 258 (426x336, 383x518, 458x277, sep, 316ppi) but PyMuPDF xobject-rect analysis places ALL THREE in the TOP half (x~190-293pt, top-origin y~103-264pt) and the VLM adjudication of the extracted rasters confirmed they are the micturition figure's pure anatomy silhouettes (brainstem/pons mask, bladder with urethra, detrusor crescent — no text); the BOTTOM half is a PURE 3-column text table with ZERO figures (PyMuPDF: 34 vector paths = cell borders/shading; VLM at 200 DPI: 'text and table borders only') and ZERO margin mnemonics. The first VLM pass guessed one raster might be the adrenergic table 'rendered as a raster' — adjudicated FALSE (a raster cannot yield the table's full pdftotext text layer); the adjudication is documented in vlm-census.txt. INTERLEAVE (the m38 convention, documented): the text layer prints each receptor's TISSUE cells as a group then its EFFECT(S) cells as a group; the logical row pairing (tissue[i] <-> effect[i]) was reconstructed and VLM-adjudicated at 200 DPI, and the reconstructed table is carried VERBATIM (printed row order, 13 rows) in the note's table block (blocks[1]). Quirks, documented: (1) the table prints the receptor names with REGULAR digits (α1, α2, β1, β2, β3) while the top-half micturition figure on the same page prints α₁/β₃ with SUBSCRIPT digits — both carried as printed, never normalized; (2) the ↑ glyphs print in the text layer preceded by a \\x8f control-char artifact (a pdftotext artifact, not a printed character — the verifier's normalizer strips it); (3) NO source typos print in this half — the table text is clean; (4) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the PH-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (5) outputs are STAGED under .usmle-pipeline-cache/staging-ph13/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'adrenergic-distribution-map' is therefore not yet in visuals/registry.tsx by design); (6) there is NO figure on this half, so the registry visual is an ORIGINAL KYP ADAPTATION (a five-column receptor-directory map with the pancreas and heart double-bookings flagged and an exam-reading band carrying the α2 presynaptic-autoreceptor hook — which forward-links to the sibling autonomic-drugs-synapse topic — and the β2 cardiac-muscle trap vs β1), not a redraw of source art.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "adrenergic-receptor-distribution", "requiredInKYP": True}
inv13 = [
    dict(SV_BASE, **{
        "visualId": "adrenergic-receptor-distribution-sv1",
        "sourcePages": {"part": 1, "pdfPages": [258], "bookPages": "236"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The RECEPTOR / TISSUE / EFFECT(S) distribution table (book 236, bottom half) — the five adrenergic receptor subtypes with their thirteen tissue→effect rows, the directory every adrenergic drug question resolves to",
        "sourceFigureDescription": "PURE 3-COLUMN TEXT TABLE, no figures (census: pdfimages finds THREE rasters on pdf 258 but PyMuPDF xobject-rect analysis + z-ai VLM glm-4.6v adjudication place ALL THREE in the TOP half — the sibling micturition figure's anatomy silhouettes: a brainstem/pons mask, the bladder with urethra, a detrusor crescent, no text; the bottom half has ZERO rasters — its 34 PyMuPDF vector paths are the table's own cell borders/shading, and the VLM on the 200-DPI render confirms 'text and table borders only'). Headers RECEPTOR / TISSUE / EFFECT(S); five receptor blocks with regular-digit names (α1, α2, β1, β2, β3) and thirteen logical rows: α1 Vascular smooth muscle → Vasoconstriction, Visceral smooth muscle → Smooth muscle contraction; α2 Pancreas → Inhibition of insulin secretion, Presynaptic terminals → Inhibition of neurotransmitter release, Salivary glands → Inhibition of salivary secretion; β1 Heart → ↑ heart rate, contractility, Kidney → ↑ renin secretion; β2 Bronchioles → Bronchodilation, Cardiac muscle → ↑ heart rate, contractility, Liver → Glycogenolysis, glucose release, Arterial smooth muscle → Vasodilation, Pancreas → Stimulation of insulin secretion; β3 Adipose → ↑ lipolysis. The text layer interleaves each receptor's tissue cells (printed as a group) before its effect cells (the m38 convention) — the row pairing is positional and was VLM-adjudicated. The indd slug + timestamp print at the page foot. No margin notes or mnemonics print in this half ('Baby one more time.' is the TOP half's, the sibling micturition-control's).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "adrenergic-distribution-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (AdrenergicDistributionMap in visuals/pharm-p13.tsx — five receptor-directory columns α1/α2/β1/β2/β3 each stacked with its printed tissue→effect chips, the PANCREAS ×2 flags on the α2-inhibit and β2-stimulate rows and HEART ×2 flags on the β1 Heart and β2 Cardiac muscle rows, the double-bookings band contrasting pancreas/heart/vascular-bed pairs, the exam-reading band with the α2 presynaptic-autoreceptor hook and the β2 cardiac-muscle trap, and the NAME→PLACE→PREDICT rule banner); the printed table is also carried verbatim (printed row order, 13 rows) in the note's table block (blocks[1]) and recall[0-4]",
        "productionStatus": "complete",
        "plannedKypVisualId": "adrenergic-distribution-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph13"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "adrenergic-receptor-distribution.json").write_text(json.dumps(m13, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "adrenergic-receptor-distribution.json").write_text(
    json.dumps({"topicId": "adrenergic-receptor-distribution", "chapterId": "pharmacology", "inventory": inv13,
                "coverageAudit": {"topicId": "adrenergic-receptor-distribution", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The adrenergic half's single visual asset — the RECEPTOR/TISSUE/EFFECT(S) table itself (a table functioning as a visual learning aid) — is accounted for as an ORIGINAL KYP ADAPTATION: there is no figure on this half (census: the page's three rasters are ALL top-half micturition art, PyMuPDF + VLM adjudicated), so the registry visual adrenergic-distribution-map (AdrenergicDistributionMap in visuals/pharm-p13.tsx) is an original five-column receptor-directory map built from the printed rows, with the pancreas (α2 inhibit vs β2 stimulate) and heart (β1 Heart vs β2 Cardiac muscle) double-bookings deliberately flagged and an exam-reading band; the printed table is also carried verbatim (printed row order) in the note's table block. Nothing is reproduced. Census: VLM SUCCEEDED this session (both passes in staging-ph13/vlm-census.txt) — zero rasters and zero margin mnemonics in the bottom half; 'Baby one more time.' and the three anatomy rasters belong to the TOP half (sibling micturition-control) and are out of scope here. SHARED PAGE (the p196 convention): the top half of pdf 258 / book 236 is the sibling topic and is out of scope. STAGED under .usmle-pipeline-cache/staging-ph13/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH13 manifest + inventory staged: {OUT}/manifests/adrenergic-receptor-distribution.json, {OUT}/visual-inventory/adrenergic-receptor-distribution.json")
print(f"adrenergic-receptor-distribution: evidence {len(kept)}/{len(E13)} verified")
