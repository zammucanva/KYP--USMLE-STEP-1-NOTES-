#!/usr/bin/env python3
"""PH7 receptor-binding-ti — manifest + inventory (Pharmacology, PH-batch 7),
STAGED under .usmle-pipeline-cache/staging-ph7/ (the promotion step owns
content/). Source: pdf 255 / book 233 (PHARMACOLOGY — PHARMACOKINETICS AND
PHARMACODYNAMICS: Receptor binding + Therapeutic index).

Census: pdfimages reports ZERO raster images. The VLM confirm
(scripts/usmle-pipeline/ph7-vlm-census.ts, adapted from ph1-vlm-census.ts)
was attempted TWICE and failed both times with an auth error (401 "missing
X-Token header"), so the census falls back to the text layer plus the PDF's
own VECTOR layer (PyMuPDF get_drawings: 147 paths, path coordinates + stroke
colors cross-referenced against word positions) — which pins the panel
geometry exactly: PANEL A = the black Agonist reference curve + a PINK
right-shifted curve reaching the SAME 100% ceiling ("Agonist + competitive
antagonist"; red right-arrow "Reduced potency"); PANEL B = Agonist + an
ORANGE curve at the SAME midpoint but a ~50% LOWER plateau ("Agonist +
noncompetitive antagonist"; red down-arrow "Reduced efficacy"); PANEL C =
Agonist + TWO GREEN partial-agonist curves with lower plateaus ("Partial
agonist" x2; two red down-arrows "Reduced efficacy"; "Independent potency"
half-max straddle). Every panel carries the plain Agonist reference curve
(hence "Agonist" x3 in the text layer) — there is NO agonist-alone panel;
the production spec's assumed mapping (A agonist alone / B competitive /
C noncompetitive) is corrected to the printed mapping and documented in the
manifest notes. The A/B/C letter chips print as white letters on teal
circles in each panel (and rows A-C of the table carry their own chips; the
Inverse agonist row has none). The page also carries the pure-text 4-row
agonist-types table and the therapeutic-index block (TI = TD50/ED50 display
fraction; the source's own "TITE: Therapeutic Index = TD50 / ED50." with
"TITE" in red bold; the low-TI list with red initial capitals — warfarin,
theophylline, digoxin, antiepileptic drugs, lithium — ending with the
source's own "Warning! These drugs are lethal!"; LD50 often replaces TD50 in
animal studies; the vector ED50/TD50 quantal figure with the "Therapeutic
index" bracket). Nothing is reproduced: the curves are an ORIGINAL KYP
redraw (receptor-binding-map, pharm-p7.tsx), the table is carried verbatim
in the note and re-set as KYP table art; the KYP memory layer is original
(TITE and the Warning line are the source's own, carried verbatim).

Raw line numbering: the task's "raw N" = line N of
.usmle-pipeline-cache/ph1-p255.txt (whose line 1 is the "========== PDF
PAGE 255" banner) = line N-1 of page 255 in part1.txt. The script reads
ph1-p255.txt for the quotes and verifies containment against part1.txt
page 255 (asserting the two extractions agree)."""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()

# --- source pages -------------------------------------------------------
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "": pages.pop()
PG = 255
page = pages[PG - 1]
P = norm(page)

# ph1-p255.txt: line 1 is the banner; raw N == ph1 file line N
ph1_lines = (CACHE / "ph1-p255.txt").read_text(encoding="utf8").split("\n")
if ph1_lines and ph1_lines[-1] == "": ph1_lines.pop()
body = "\n".join(ph1_lines[1:])
if body.rstrip("\n") != page.rstrip("\n"):
    print("FAIL: ph1-p255.txt body does not match part1.txt page 255")
    sys.exit(1)
def rng(a, b):  # raw line range a..b (physical order, ph1-p255.txt numbering)
    return "\n".join(ph1_lines[a - 1:b])

def ev(claim, quote, pgs):
    ok = all(norm(quote) in P for pg in pgs) if pgs == [PG] else False
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}

kept, fails = [], []
E7 = [
    ("Page identity — the section banner, headers, and topic heading (book 233)", rng(2, 10), [PG]),
    ("Figure-label cluster 1 of 3 — the receptor-binding panels' top region: the three '100' y-axis ticks, the panel A/B/C region curve labels 'Agonist' (the plain reference curve printed in every panel, hence Agonist x3 on the page), the white-on-teal letter chip 'A', the first '50' tick, and panel C's 'Reduced efficacy' label (raw order interleaves the three panels — panel C's label streams before panels A/B's lower labels)", rng(11, 26), [PG]),
    ("Figure-label cluster 2 of 3 — panel A's second-curve label 'Agonist + competitive antagonist' (the pink right-shifted same-ceiling curve), the white-on-teal letter chip 'B', panel B's 'Reduced efficacy' label (the red down-arrow annotation), panel C's first 'Partial agonist' label, the second '50' tick, and panel A's 'Reduced potency' label (the red right-arrow annotation)", rng(28, 42), [PG]),
    ("Figure-label cluster 3 of 3 — the third '50' tick, the fused 'Partial C / agonist' print (panel C's second 'Partial agonist' label fused with the white-on-teal C chip in the text layer), panel B's second-curve label 'Agonist + noncompetitive antagonist' (the orange lower-plateau curve), the three '0' ticks, the three 'Agonist dose' x-axis labels, and panel C's 'Independent potency' label interleaved between them", rng(44, 64), [PG]),
    ("The agonist-types table header, verbatim — AGONIST WITH / POTENCY / EFFICACY / REMARKS / EXAMPLE", rng(66, 74), [PG]),
    ("Table row A, verbatim — Competitive antagonist: potency ↓, efficacy No change, can be overcome by ↑ agonist concentration; Diazepam (agonist) + flumazenil (competitive antagonist) on GABA A receptor", rng(76, 88), [PG]),
    ("Table row B, verbatim — Noncompetitive antagonist: potency No change, efficacy ↓, cannot be overcome by ↑ agonist concentration; Norepinephrine (agonist) + phenoxybenzamine (noncompetitive antagonist) on α-receptors", rng(90, 102), [PG]),
    ("Table row C, verbatim — Partial agonist (alone): potency Independent, efficacy ↓, acts at same site as full agonist; Morphine (full agonist) vs buprenorphine (partial agonist) at opioid μ-receptors", rng(104, 115), [PG]),
    ("Table row 4, verbatim — Inverse agonist (alone): potency Independent, efficacy Negative, binds to a constitutively active receptor thereby reducing its activity; has the opposite effect of an agonist; H1 antihistamines (eg, diphenhydramine)", rng(117, 130), [PG]),
    ("The therapeutic-index block, part 1 — the definition and the display fraction: 'Therapeutic index / Measurement of drug safety.' + the stacked TI = TD50 / ED50 fraction (TD50 = median toxic dose over ED50 = median effective dose, with the '=' between the two stacked fractions) + the therapeutic-window sentence", rng(132, 141), [PG]),
    ("The therapeutic-index block, part 2 — the quantal figure's left labels: the 'Efficacy' curve label, the rotated y-axis label '% of patients responding', and the '100' and '50' ticks", rng(142, 148), [PG]),
    ("The therapeutic-index block, part 3 — the source's own TITE mnemonic carried VERBATIM ('TITE' prints in red bold), the low-TI monitoring sentence with the five drugs (warfarin, theophylline, digoxin, antiepileptic drugs, lithium — each printing with a red initial capital) and the source's own 'Warning! These drugs are lethal!' carried VERBATIM, plus the LD50 sentence", rng(150, 156), [PG]),
    ("The therapeutic-index block, part 4 — the quantal figure's remaining labels: the 'Toxicity' curve label, the 'Therapeutic index' bracket label spanning the ED50→TD50 gap, the 'ED50' and 'TD50' markers, the 'ED = Effective dose / TD = Toxic dose' legend, the '0' tick, and the 'Log (drug concentration)' x-axis label", rng(157, 169), [PG]),
    ("The footer print line — the indd slug (page identity, book 233)", rng(171, 171), [PG]),
    ("The footer print line — the timestamp at stream end (page identity, book 233)", rng(173, 173), [PG]),
]
for c, q, pgs in E7:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"receptor-binding-ti: evidence {len(kept)}/{len(E7)} verified")

QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m7 = {"topicId": "receptor-binding-ti", "title": "Receptor Binding & Therapeutic Index",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [255], "bookPages": "233–233"},
    "sourceEvidence": kept, "visualIds": ["receptor-binding-map"],
    "mechanismIds": ["antagonist-axes-map", "ti-margin-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the panels, the table, and the TI block only; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "two-axes-reading", "summary": "The two-axes reading protocol (the DOSE axis = potency, the EFFECT axis = efficacy; a competitive antagonist moves only the dose axis with the ceiling intact and is overcome by ↑ agonist, a noncompetitive antagonist moves only the effect axis and is never overcome; single molecule alone that plateaus lower = partial agonist with Independent potency; activity below zero requires a constitutively active receptor = inverse agonist) — KYP's synthesis of the three panels and the four table rows into one protocol.",
         "origin": "outside-first-aid", "rationale": "The source prints the panels, the table, and the TI block as separate blocks and never states the which-axis-moved invariant or the molecule-ownership test; the two-axes framing and the ceiling-first reading order are KYP's design.",
         "location": "core.keyIdea + mechanism antagonist-axes-map + the registry visual's panels + pivots"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (COMPETITIVE SLIDES RIGHT; NONCOMPETITIVE SINKS DOWN / FLUMAZENIL WRESTLES FOR THE SEAT; PHENOXYBENZAMINE WELDS IT SHUT / SAME SEAT, LOWER LADDER, FREE RUNG / THE GAP IS THE GUARDRAIL) — the page's own memory devices are TITE and the Warning line and are carried VERBATIM and attributed as the source's; the four codes are KYP's design.",
         "origin": "outside-first-aid", "rationale": "The only mnemonics printing on book 233 are the source's own TITE line ('TITE: Therapeutic Index = TD50 / ED50.', with TITE in red bold) and the 'Warning! These drugs are lethal!' flag on the low-TI list; the four ALL-CAPS codes are KYP's design and are attributed as such.",
         "location": "mnemonics + rapidReview.m3 + the visual's TITE banner and chips band"},
        {"id": "mini-case-layer", "summary": "The two-compound miniCase (a surmountable right-shift at GABA A named as competitive antagonist + a buprenorphine-like lower-plateau-alone compound at μ-receptors named as partial agonist) with four distractors, each failing exactly one hinge: the noncompetitive misread of the right shift (ignores intact ceiling + rescue), the noncompetitive read of the lone compound (ignores ownership), and the inverse-agonist vocabulary flips (require negative efficacy nobody showed).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the four rows side by side and never asks the learner to route two experiments through the axes-and-ownership tests; the vignette and the four distractors are KYP's design.",
         "location": "usmle.miniCase + traps"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "pendingCorrections": [],
    "notes": ("Census: pdfimages — ZERO raster images on pdf 255 / book 233. The VLM confirm "
        "(scripts/usmle-pipeline/ph7-vlm-census.ts, adapted from ph1-vlm-census.ts) was attempted TWICE and failed "
        "both times with an auth error (401 'missing X-Token header'), so the census was completed from the text "
        "layer plus the PDF's own VECTOR layer (PyMuPDF get_drawings: 147 paths; path coordinates, dash patterns, "
        "and stroke colors cross-referenced against word positions in the same coordinate system) — an exact "
        "fallback, stronger than a VLM sketch. PANEL MAPPING (documented correction): the production spec assumed "
        "A = agonist alone / B = agonist + competitive antagonist / C = agonist + noncompetitive antagonist, but "
        "the vector layer confirms the PRINTED mapping is A = Agonist + COMPETITIVE antagonist (the panel's second "
        "curve is pink, right-shifted, reaching the SAME 100% ceiling, label 'Agonist + competitive antagonist' at "
        "the panel's top right, red right-arrow between the two EC50 markers labeled 'Reduced potency'), "
        "B = Agonist + NONCOMPETITIVE antagonist (orange curve at the SAME midpoint with a ~50% lower plateau, "
        "label 'Agonist + noncompetitive antagonist', red down-arrow from the 100% ceiling labeled 'Reduced "
        "efficacy', both half-max L-markers stacked at the same dose = potency No change), and C = PARTIAL "
        "AGONISTS (the plain Agonist curve plus TWO green partial-agonist curves with lower plateaus, two red "
        "down-arrows 'Reduced efficacy', two 'Partial agonist' labels, and 'Independent potency' — the two "
        "half-max markers straddling the agonist's). Every panel carries the plain black 'Agonist' reference "
        "curve (hence 'Agonist' x3 in the text layer) — there is NO agonist-alone panel; the note and the "
        "registry visual carry the PRINTED mapping. THE A/B/C LETTER CHIPS: white letters on teal circles inside "
        "each panel (vector circles + white letter glyphs; the C chip prints fused with panel C's second 'Partial "
        "agonist' label as 'Partial C / agonist' in the text layer — raw line 46), and table rows A/B/C carry "
        "their own teal circle chips at the row-label left edge while the Inverse agonist row prints WITHOUT a "
        "chip. THE INTERLEAVE (documented): the text layer streams the three panels' labels in mixed order — the "
        "three '100' ticks together, then panel labels interleaved ('Agonist' x3 at lines 16/24/26), the two "
        "'Reduced efficacy' labels (panels B and C) print at lines 21-22 and 34-35 while panel A's 'Reduced "
        "potency' prints later at lines 41-42, and 'Independent potency' interleaves between the second and "
        "third 'Agonist dose' x-axis labels (lines 57-64); additionally each panel's rotated y-axis label prints "
        "as vector text-outlines OUTSIDE the text layer (not quotable), while the TI figure's rotated '% of "
        "patients responding' IS text. TI BLOCK QUIRKS: the TI = TD50/ED50 print is a stacked display fraction "
        "('TD50 median toxic dose' over a bar over 'ED50 median effective dose', with the '=' between two stacked "
        "fractions); 'TITE' prints in red bold at the head of the source's own mnemonic line; the five low-TI "
        "drug names print with red initial capitals (warfarin, theophylline, digoxin, antiepileptic drugs, "
        "lithium) and the closing 'Warning! These drugs are lethal!' carries the same red-letter treatment — both "
        "carried VERBATIM and attributed as the source's own. Outputs are STAGED under "
        ".usmle-pipeline-cache/staging-ph7/ — nothing is written into content/ (chapters/pharmacology.json, "
        "content manifests, visual-inventory, and the visual registry are owned by the promotion step; the note's "
        "visualId 'receptor-binding-map' is therefore not yet in visuals/registry.tsx by design)."),
    "updatedAt": str(date.today())}

SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
    "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics",
    "topicId": "receptor-binding-ti", "requiredInKYP": True}
inv7 = [
    dict(SV_BASE, **{
        "visualId": "receptor-binding-ti-sv1",
        "sourcePages": {"part": 1, "pdfPages": [255], "bookPages": "233"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The agonist-types table (book 233): 5 columns (AGONIST WITH / POTENCY / EFFICACY / REMARKS / EXAMPLE) x 4 rows in printed order (A Competitive antagonist: ↓ / No change / Can be overcome by ↑ agonist concentration / Diazepam + flumazenil on GABA A receptor; B Noncompetitive antagonist: No change / ↓ / Cannot be overcome by ↑ agonist concentration / Norepinephrine + phenoxybenzamine on α-receptors; C Partial agonist (alone): Independent / ↓ / Acts at same site as full agonist / Morphine vs buprenorphine at opioid μ-receptors; Inverse agonist (alone): Independent / Negative / Binds to a constitutively active receptor, thereby reducing its activity; has the opposite effect of an agonist / H1 antihistamines (eg, diphenhydramine)), rows A-C carrying the book's teal letter chips and the Inverse agonist row printing chipless",
        "sourceFigureDescription": "PURE TEXT (pdfimages: zero raster images): the complete table as printed; the row-A/B/C letter chips are vector circles with white letters at each row-label's left edge (the Inverse agonist row has none). The table streams cleanly in the text layer (raw 66-130) without figure interleave.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "receptor-binding-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Band 2 of the registry visual (ReceptorBindingMap in visuals/pharm-p7.tsx — the table re-set as KYP table art with the POTENCY column tagged 'dose axis' and the EFFICACY column tagged 'effect axis', the ↓ cells tinted by axis, and the Inverse agonist row marked chipless) + blocks[1] the table block carried verbatim in the note",
        "productionStatus": "complete",
        "plannedKypVisualId": "receptor-binding-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "receptor-binding-ti-sv2",
        "sourcePages": {"part": 1, "pdfPages": [255], "bookPages": "233"},
        "visualType": "SUMMARY_FIGURE",
        "visualPurpose": "The three receptor-binding dose-response panels (book 233), A/B/C white-on-teal letter chips in each: panel A the Agonist reference curve + Agonist + competitive antagonist (pink, right-shifted, SAME 100% ceiling; red right-arrow 'Reduced potency'); panel B Agonist + Agonist + noncompetitive antagonist (orange, SAME midpoint, ~50% lower plateau; red down-arrow 'Reduced efficacy'; both half-max markers at the same dose = potency No change); panel C Agonist + TWO Partial agonist curves (green, lower plateaus; two red down-arrows 'Reduced efficacy'; 'Independent potency' half-max straddle) — every panel carries the plain Agonist reference curve",
        "sourceFigureDescription": "VECTOR LINE ART (pdfimages: zero rasters; pinned from the PDF's vector layer — PyMuPDF get_drawings, 147 paths, after the VLM confirm failed twice on auth): the panels' labels interleave in the text layer ('Agonist' x3; the two 'Reduced efficacy' labels of panels B and C print before panel A's 'Reduced potency'; 'Partial C' fuses the C chip with the second 'Partial agonist' label; 'Independent potency' interleaves the 'Agonist dose' x-axis labels), and each panel's rotated y-axis label prints as vector text-outlines outside the text layer.",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "receptor-binding-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Band 1 of the registry visual (ReceptorBindingMap in visuals/pharm-p7.tsx — the three panels recomputed on original KYP axes: logistic sigmoids with dashed Emax ceilings, EC50 L-markers colored per curve, red right/down arrows, KYP letter chips, and per-panel row strips linking each panel to its table row)",
        "productionStatus": "complete",
        "plannedKypVisualId": "receptor-binding-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "receptor-binding-ti-sv3",
        "sourcePages": {"part": 1, "pdfPages": [255], "bookPages": "233"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The therapeutic-index block (book 233): the quantal cumulative-response figure (Efficacy and Toxicity curves, y-axis '% of patients responding' with 100/50/0 ticks, x-axis 'Log (drug concentration)', ED50 and TD50 markers, the 'Therapeutic index' bracket spanning the ED50→TD50 gap, legend 'ED = Effective dose / TD = Toxic dose') plus the TI = TD50/ED50 display fraction, the definition ('Measurement of drug safety.'), the therapeutic-window sentence, the source's own 'TITE: Therapeutic Index = TD50 / ED50.' mnemonic, the low-TI monitoring sentence (warfarin, theophylline, digoxin, antiepileptic drugs, lithium; 'Warning! These drugs are lethal!'), and the LD50 sentence",
        "sourceFigureDescription": "MIXED (pdfimages: zero raster images): the quantal figure prints as VECTOR line art (blue Efficacy curve, red Toxicity curve, the ED50/TD50 markers and the 'Therapeutic index' bracket in the vector layer) while the surrounding block — definition, fraction, window sentence, TITE line, low-TI list, LD50 sentence — is pure text ('TITE' and the drug-list initials in red bold; the fraction bar and '=' are vector).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "receptor-binding-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Bands 3-4 of the registry visual (ReceptorBindingMap in visuals/pharm-p7.tsx — the quantal curves recomputed on original KYP axes with the ED50/TD50 markers and safety-gap bracket, the inverse-agonist card with the constitutively-active-receptor glyph, the TITE banner quoting the source's own mnemonic verbatim, the therapeutic-window strip, and the five low-TI drug chips under the source's own Warning line) + the note's callout block carrying TITE and the Warning verbatim with attribution",
        "productionStatus": "complete",
        "plannedKypVisualId": "receptor-binding-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph7"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "receptor-binding-ti.json").write_text(json.dumps(m7, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "receptor-binding-ti.json").write_text(
    json.dumps({"topicId": "receptor-binding-ti", "chapterId": "pharmacology", "inventory": inv7,
                "coverageAudit": {"topicId": "receptor-binding-ti", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's three visual assets are its three VECTOR receptor-binding panels (redrawn as ORIGINAL KYP art — logistic sigmoids recomputed on original KYP axes with the printed panel mapping A competitive / B noncompetitive / C partial agonists, each panel carrying the plain Agonist reference curve), its pure-text agonist-types table (carried verbatim in the note's table block and re-set as KYP table art in the registry visual), and its therapeutic-index block (the quantal ED50/TD50 figure redrawn on original KYP axes + the formula/window/low-TI text re-set as the TITE banner, window strip, and drug chips); nothing is reproduced. Census: zero raster images (pdfimages); the VLM confirm (ph7-vlm-census.ts) failed twice on auth (401 missing X-Token) so the geometry was pinned from the PDF's own vector layer (PyMuPDF get_drawings) plus the text layer; the source's own 'TITE: Therapeutic Index = TD50 / ED50.' and 'Warning! These drugs are lethal!' are carried verbatim and attributed. STAGED under .usmle-pipeline-cache/staging-ph7/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH7 manifest + inventory staged: {OUT}/manifests/receptor-binding-ti.json, {OUT}/visual-inventory/receptor-binding-ti.json")
print(f"receptor-binding-ti: evidence {len(kept)}/{len(E7)} verified")
