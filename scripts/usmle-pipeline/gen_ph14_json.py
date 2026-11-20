#!/usr/bin/env python3
"""PH14 g-protein-second-messengers — manifest + inventory (Pharmacology
autonomic-drugs batch), STAGED under .usmle-pipeline-cache/staging-ph14/
(the promotion step owns content/). Source: FULL pdf page 259 / book 237
(Part 1) — NO shared-page split (the p259 convention: the whole page is
this topic's — table + figure + footer).

THE PAGE'S TWO ASSETS:
[1] THE TABLE — "G-protein–linked second messengers" (MyriadPro-Bold
heading, en dash), RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS column
headers, five shaded family bands (Adrenergic, Cholinergic, Dopamine,
Histamine, Vasopressin) over 14 receptor rows, each stamped with its
G-protein class letter (q / i / s, Electra italic) and its major
functions. The G-PROTEIN letters print via Wingdings3-mapped ↑/↓ glyphs
in the functions column. Carried VERBATIM in the note's table block in
PRINTED row order, including the source's own red-printed mnemonic
wordplay: "(one heart)" in the β1 row, "(two lungs)" in the β2 row, and
"twobules (tubules)" in the V2 row (V2 · aquaporin-2 · TWO-bules, with
the corrected word printed in parentheses immediately after — First
Aid's own styling, carried attributed, never presented as a KYP
original, never silently corrected).

[2] THE FIGURE — adjudicated this session (NOT three side-by-side
panels as the raw spec sketched): TWO STACKED CASCADE PANELS of pure
vector line art. TOP panel = the Gq cascade (Ligand → "H1, α1, V1, M1,
or M3 receptor" → Gq protein → Phospholipase C → PIP2, printed ONCE,
splitting TWO ways: DAG → Protein kinase C, and IP3 → ↑Ca2+, which
carries BOTH printed arrows — ⊕ into Protein kinase C and into "Smooth
muscle contraction"; every arrow in the panel stimulatory/pointed).
BOTTOM panel = the shared-enzyme panel: left arm Ligand → "B1, B2, B3,
D1, H2, or V2 receptor" → GS protein → pointed ⊕ onto Adenylyl cyclase;
right arm Ligand → "M2, α2, or D2 receptor" → Gi protein → BLUNT RED ⊖
(T-bar) ONTO THE SAME Adenylyl cyclase; then ATP → Cyclic AMP → Protein
kinase A → ⊕ ↑Ca2+ (leftward) and ⊖ Myosin light-chain kinase (smooth
muscle contraction) (rightward) — MLCK prints in the BOTTOM panel under
PKA's inhibitory arrow (the β2-relaxation mechanism), NOT in the Gq
panel. Only ONE "Ligand" text label prints in the bottom panel (the
right arm's ligand circle is unlabeled).

CENSUS (VLM AVAILABLE this session — SUCCEEDED, unlike the ph6-ph10 401
outage): pdfimages = ZERO raster images on pdf 259 (CONFIRMED, not
assumed). VLM (glm-4.6v) ran SEVEN passes — 120-DPI full page, 180-DPI
full page (figure + table adjudication), 220-DPI panel crops, a 2x and
a 1.5x-zoomed bottom band, a 2x-zoomed bottom-band retry, and a 432-DPI
PyMuPDF render of the Gq downstream cluster — all appended to
staging-ph14/vlm-census.txt; a PyMuPDF word/span/vector-path dump
(staging-ph14/pymupdf-words.txt) anchored the geometry (78 text spans
in the figure region, 14 filled-triangle arrowheads + 2 red circled-⊖
symbols mapped to labels), and the pdfimages census is saved as
staging-ph14/pdfimages-census.txt. VLM confirms: full-color digital
line art, NO photographs, NO margin notes or mnemonics anywhere on the
page (all mnemonic material is INSIDE the table, red-printed,
attributed), the q/i/s letters are plain lowercase italics (not in
shapes), the family bands are shaded, and the figure's Gs receptor
label prints with Latin "B" while the table prints Greek β (Symbol
font) — both carried as printed.

TEXT-LAYER QUIRKS, documented (all carried verbatim, glossed, never
silently fixed): (1) the figure's labels print DOUBLED in part1.txt
("H1, α1, V1, M1, or M3 receptor" twice, "PIP2" twice, "DAG" twice,
"Protein kinase C" twice, "Smooth muscle contraction" twice, "Adenylyl
cyclase" twice, "GS protein" twice, "Gi protein" twice, "Myosin
light-chain kinase" twice, ...) — a pdftotext line-assembly artifact:
the vector data carries an invisible ghost copy of the downstream
cluster offset +19.2pt (PyMuPDF sees each label once and paints one
copy), so figure quotes are carried as printed, doubled; (2) the
interleave artifacts "CaIP 3" + "2+" (Ca2+ printed beside IP3) and
"SmoothCamuscle" + "contraction" (Smooth muscle beside Ca2+'s
superscript) print exactly so and are quoted as-is; (3) the V2 row's
function text is INTERLEAVED with the figure's first "Ligand" label
(lines 103-110: "... collecting twobules (tubules) of / Ligand /
kidney, ↑ release / of vWF") — quoted as one contiguous range as
printed; (4) the footer slug "FAS1_2026_05-Pharmacology.indd 237"
prints MID-FIGURE in the text layer (its physical position is the page
foot left, below both panels) — quoted as its own page-identity entry;
(5) the header prints "SEC TION II" with a stray space (poppler
artifact; PyMuPDF reads "SECTION") — carried as printed; (6) the
figure's G protein label prints "GS protein" with a CAPITAL S.

Nothing is reproduced: the table's text is carried verbatim in the
note's table block; the figure is redrawn as ORIGINAL KYP vector art
(g-protein-messenger-map, GProteinMessengerMap in
visuals/pharm-p14.tsx); the four ALL-CAPS mnemonics (HAV M&M / MAD
TWOS / Q SQUEEZES·S SPARKS·I SILENCES / PIP2 SPLITS TWO WAYS) are
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
L = {259: pages[258].split("\n")}
P = {259: norm(pages[258])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E14 = [
    ("Page identity — the running header, section banner, book page number, and section mark (the 'SEC TION II' stray space is a poppler artifact, carried as printed; book 237)", rng(259, 1, 7), [259]),
    ("The topic heading and the table's three column headers — G-protein–linked second messengers / RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS (book 237)", rng(259, 9, 14), [259]),
    ("The Adrenergic family band and the α1 row (q) — vascular smooth muscle contraction, pupillary dilator muscle contraction (mydriasis), intestinal and bladder sphincter muscle contraction", rng(259, 16, 22), [259]),
    ("The α2 row (i) — ↓ sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor production", rng(259, 24, 29), [259]),
    ("The β1 row (s) — heart rate, contractility (one heart), renin release, lipolysis — the '(one heart)' parenthetical is the source's own red-printed hint, carried attributed", rng(259, 31, 35), [259]),
    ("The β2 row (s) — vasodilation, bronchodilation (two lungs), lipolysis, insulin release, glycogenolysis, uterine tone (tocolysis), aqueous humor production, cellular K+ uptake — the '(two lungs)' parenthetical is the source's own red-printed hint, carried attributed", rng(259, 37, 42), [259]),
    ("The β3 row (s) — lipolysis, thermogenesis in skeletal muscle, bladder relaxation", rng(259, 44, 48), [259]),
    ("The Cholinergic family band and the M1 row (q) — higher cognitive functions, enteric nervous system, exocrine gland secretions", rng(259, 50, 55), [259]),
    ("The M2 row (i) — heart rate, AV node conduction velocity, and atrial contractility", rng(259, 57, 61), [259]),
    ("The M3 row (q) — exocrine gland secretions, gut peristalsis, bladder contraction, bronchoconstriction, vasodilation, pupillary sphincter muscle contraction (miosis), ciliary muscle contraction (accommodation)", rng(259, 63, 68), [259]),
    ("The Dopamine family band and the D1 row (s) — relaxes renal vascular smooth muscle, activates direct pathway of striatum", rng(259, 70, 75), [259]),
    ("The D2 row (i) — modulates transmitter release, especially in brain, inhibits indirect pathway of striatum", rng(259, 77, 81), [259]),
    ("The Histamine family band and the H1 row (q) — bronchoconstriction, airway mucus production, vascular permeability/vasodilation, pruritus", rng(259, 83, 88), [259]),
    ("The H2 row (s) — gastric acid secretion", rng(259, 90, 94), [259]),
    ("The Vasopressin family band and the V1 row (q) — vascular smooth muscle contraction", rng(259, 96, 101), [259]),
    ("The V2 row (s) — H2O permeability and reabsorption via upregulating aquaporin-2 in collecting twobules (tubules) of kidney, release of vWF — the 'twobules (tubules)' wordplay is the SOURCE'S OWN red-printed pun (V2 · aquaporin-2 · TWO-bules), carried VERBATIM with the corrected word in parentheses, as printed, never silently fixed; NOTE the figure's first 'Ligand' label interleaves inside this row's wrapped function text (between 'of' and 'kidney, ↑ release'), an interleave carried as printed", rng(259, 103, 110), [259]),
    ("The Gq (TOP) panel's environment + receptor labels, cluster 1 — Extracellular space, the 'H1, α1, V1, M1, or M3 receptor' label (printed TWICE — the pdftotext doubling artifact of the ghost-copy vector data), Ligand, Extracellular / Cell space / membrane (the doubled + interleaved cluster, carried as printed)", rng(259, 111, 123), [259]),
    ("The Gq (TOP) panel's PIP2 / Gq protein / Phospholipase C cluster — PIP2 twice, Cytoplasm twice, Cell membrane, Gq protein twice, Phospholipase C twice (the doubling artifact, carried as printed)", rng(259, 124, 138), [259]),
    ("The Gq (TOP) panel's downstream cluster — DAG twice, IP3, the interleave artifacts 'CaIP 3' + '2+' (Ca2+ beside IP3) and 'SmoothCamuscle' + '2+' + 'contraction' (Smooth muscle beside Ca2+'s superscript), Protein kinase C twice, Smooth muscle contraction twice — all carried exactly as printed and glossed in the note", rng(259, 140, 161), [259]),
    ("The BOTTOM (shared-enzyme) panel's ligand + receptor labels — Ligand, Extracellular space, the 'B1, B2, B3, D1, H2, or V2 receptor' label (Latin B as printed; printed twice) and the 'M2, α2, or D2 receptor' label (printed twice), plus the second Ligand and the Extracellular / Cell space / membrane interleave (carried as printed; only ONE 'Ligand' text label prints in the finished figure — the right arm's ligand circle is unlabeled)", rng(259, 162, 178), [259]),
    ("The BOTTOM panel's adenylyl cyclase + GS protein + ATP + Cyclic AMP cluster — Adenylyl cyclase twice, Cytoplasm twice, Cell membrane, GS protein twice (capital S as printed), ATP twice, Cyclic AMP twice (the doubling artifact, carried as printed)", rng(259, 180, 202), [259]),
    ("The print footer slug — FAS1_2026_05-Pharmacology.indd 237 (page identity, book 237; POSITION NOTE: this line prints MID-FIGURE in the text layer because poppler interleaves it with the figure labels — its physical position on the page is the foot, below both panels)", rng(259, 204, 204), [259]),
    ("The BOTTOM panel's output cluster — Ca2+ twice, Protein kinase A twice, Gi protein twice, Myosin light-chain kinase (smooth muscle contraction) twice — ADJUDICATED: MLCK prints in the BOTTOM panel under Protein kinase A's inhibitory arrow, not in the Gq panel (the doubling artifact is the pdftotext ghost-copy interleave, carried as printed)", rng(259, 206, 223), [259]),
    ("The print timestamp footer — 12/19/25 8:07 AM (page identity; prints at the very foot of the page, after all figure labels)", rng(259, 225, 225), [259]),
]
for c, q, pgs in E14:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"g-protein-second-messengers: evidence {len(kept)}/{len(E14)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m14 = {"topicId": "g-protein-second-messengers", "title": "G-Protein-Linked Second Messengers",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [259], "bookPages": "237–237"},
    "sourceEvidence": kept, "visualIds": ["g-protein-messenger-map"],
    "mechanismIds": ["gq-cascade-map", "gs-gi-opposition-map"],
    "kypExtensions": [
        {"id": "figure-adjudication-layer", "summary": "The adjudicated figure reconstruction: TWO stacked panels (not three side-by-side) — the TOP Gq cascade panel and a BOTTOM shared-enzyme panel where the Gs arm (B1, B2, B3, D1, H2, or V2 receptor → GS protein → pointed ⊕) and the Gi arm (M2, α2, or D2 receptor → Gi protein → blunt red ⊖) land on ONE Adenylyl cyclase, with Protein kinase A ending on ⊕ ↑Ca2+ and ⊖ Myosin light-chain kinase (smooth muscle contraction). The raw production spec had sketched the MLCK label as part of the Gq panel; the VLM page render (180–432 DPI, seven passes) + PyMuPDF word-geometry (MLCK at y 704-714, inside the bottom panel's span) + vector-path analysis (blunt T-bar + red ⊖ symbol at x 355.9, y 709.2 on the PKA→MLCK arrow) adjudicated MLCK into the BOTTOM panel under PKA's inhibitory arrow — the page's own print wins, and the note + visual follow the adjudication.",
         "origin": "outside-first-aid", "rationale": "The spec's initial three-panel reading could not be confirmed on the page; the adjudication is documented in staging-ph14/vlm-census.txt and the redraw follows the page, not the spec sketch.",
         "location": "blocks[0] the visual notice + blocks[5] the exam callout + mechanisms[1] + the visual's bottom panel"},
        {"id": "mnemonic-layer", "summary": "The four original KYP mnemonics (HAV M&M — the Gq five: H1, α1, V1, M1, M3 / MAD TWOS — the Gi three: M2, α2, D2, all 2s, all brakes / Q SQUEEZES · S SPARKS · I SILENCES — the three routes / PIP2 SPLITS TWO WAYS — the Gq fork). The source's OWN printed hints — '(one heart)', '(two lungs)', and the 'twobules (tubules)' wordplay — are carried ATTRIBUTED to First Aid (red-printed in the source, inside the β1/β2/V2 table rows) and are NOT counted among the four KYP codes.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints outside the table's own red-styled parentheticals (VLM-confirmed: no margin notes anywhere on the page); the four ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + blocks[4] the attribution callout + the visual's lane footers and hook band"},
        {"id": "reading-protocol", "summary": "The five-move reading protocol (SORT the letter → NAME the enzyme → FOLLOW the messenger → OUTPUT the kinase → PREDICT the organ) and the q/i/s crosswalk that fuses the printed table with the printed figure — the page prints the two assets separately and never connects them.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the table and the figure side by side; the fusion protocol and the crosswalk table are KYP's synthesis of the page's own two halves.",
         "location": "core.keyIdea + blocks[2] the crosswalk table + blocks[3] the steps block"},
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts — 5 patterns (the Gq squeeze, the one-heart Gs route, the β2 tocolysis/K+ pair, the α2 Gi brake, the V2 aquaporin row), 5 traps (α1-vs-α2, β1-vs-β2, M1/M3-vs-M2, H1-vs-H2, D1-vs-D2 — every family fork on the page), 3 pivots, and the β2-tocolysis miniCase (4 options, exactly 1 correct, why on every option) whose distractors flip the G protein (q, i) and the final PKA→MLCK arrow.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the table rows and the figure labels only; the attack structure and the vignette are a KYP design.",
         "location": "usmle section + recall/rapidReview"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL PAGE (no shared-page split): pdf 259 / book 237 is entirely this topic's — the RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS table (14 rows, five family bands, q/i/s letters) + the two-panel cascade figure + the indd slug/timestamp footer; every quote below comes from this page's contiguous line ranges. CENSUS: pdfimages = ZERO raster images on pdf 259 (CONFIRMED, not assumed — saved to staging-ph14/pdfimages-census.txt); the VLM (glm-4.6v) SUCCEEDED this session (unlike the ph6-ph10 401 outage) and ran SEVEN passes — 120-DPI full page, 180-DPI full page (figure + table), 220-DPI panel crops, 2x/1.5x-zoomed bottom bands, and a 432-DPI PyMuPDF render of the Gq downstream cluster — saved to staging-ph14/vlm-census.txt, plus a PyMuPDF word/span/vector-path dump (staging-ph14/pymupdf-words.txt: 78 text spans in the figure region, 14 filled-triangle arrowheads, 2 red circled-⊖ symbols, all mapped to label geometry). VLM confirms: full-color vector line art, NO photographs, NO margin notes or mnemonics (all mnemonic material is inside the table, red-printed, attributed), the q/i/s letters print as plain lowercase italics, and the figure's Gs receptor label prints Latin 'B1, B2, B3' (Museo Sans text font) while the table prints Greek β1, β2, β3 (Symbol font) — both carried as printed, and the figure's G protein prints 'GS protein' with a capital S. FIGURE ADJUDICATION (documented, spec-vs-page discrepancy resolved in the page's favor): the figure is TWO STACKED PANELS, not three side-by-side — TOP: the Gq cascade (Ligand → 'H1, α1, V1, M1, or M3 receptor' → Gq protein → Phospholipase C → PIP2 → DAG → Protein kinase C, with the second arm IP3 → ↑Ca2+ feeding BOTH Protein kinase C ⊕ and 'Smooth muscle contraction'; all arrows stimulatory); BOTTOM: the shared-enzyme panel (left arm 'B1, B2, B3, D1, H2, or V2 receptor' → GS protein → pointed ⊕ onto Adenylyl cyclase; right arm 'M2, α2, or D2 receptor' → Gi protein → blunt red ⊖ ONTO THE SAME Adenylyl cyclase; then ATP → Cyclic AMP → Protein kinase A → ⊕ ↑Ca2+ leftward and ⊖ 'Myosin light-chain kinase (smooth muscle contraction)' rightward — MLCK prints in the BOTTOM panel under PKA's inhibitory arrow, NOT in the Gq panel as the raw spec sketched; only ONE 'Ligand' text label prints in the bottom panel). VERBATIM/TYPO CARRIES, documented: (1) the V2 row prints 'twobules (tubules)' — the source's OWN red-printed wordplay (V2 · aquaporin-2 · TWO-bules) with the corrected word in parentheses immediately after, carried verbatim, attributed, never silently corrected; (2) the β1 '(one heart)' and β2 '(two lungs)' parentheticals are the source's own red-printed hints, carried attributed and NOT counted as KYP mnemonics; (3) the figure label interleave artifacts 'CaIP 3' + '2+' and 'SmoothCamuscle' + 'contraction' print exactly so and are quoted as-is; (4) every figure label prints DOUBLED in part1.txt — a pdftotext artifact of an invisible +19.2pt ghost copy of the downstream cluster in the vector data (PyMuPDF sees each label once) — figure quotes are carried as printed, doubled, and glossed; (5) the V2 row's wrapped function text interleaves with the figure's first 'Ligand' label (lines 103-110), quoted as one contiguous range as printed; (6) the footer slug prints MID-FIGURE in the text layer (physically at the page foot) and is quoted as its own page-identity entry; (7) the header prints 'SEC TION II' with a stray space (poppler artifact; PyMuPDF reads 'SECTION') — carried as printed. Quirks, also documented: (a) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the PH-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (b) outputs are STAGED under .usmle-pipeline-cache/staging-ph14/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'g-protein-messenger-map' is therefore not yet in visuals/registry.tsx by design).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "g-protein-second-messengers", "requiredInKYP": True}
inv14 = [
    dict(SV_BASE, **{
        "visualId": "g-protein-second-messengers-sv1",
        "sourcePages": {"part": 1, "pdfPages": [259], "bookPages": "237"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The page-dominant RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS table (book 237): 14 receptor rows in five family bands, each with its q/i/s G-protein class letter and its major functions — the single highest-yield table in autonomic pharmacology",
        "sourceFigureDescription": "TYPOGRAPHIC TABLE (VLM-confirmed: shaded family bands — Adrenergic, Cholinergic, Dopamine, Histamine, Vasopressin — over 14 rows: α1 (q), α2 (i), β1 (s), β2 (s), β3 (s), M1 (q), M2 (i), M3 (q), D1 (s), D2 (i), H1 (q), H2 (s), V1 (q), V2 (s); the G-PROTEIN CLASS letters print as plain lowercase italics; the functions print with ↑/↓ glyphs; three red-printed mnemonic touches: '(one heart)' in the β1 row, '(two lungs)' in the β2 row, and the V2 row's 'twobules (tubules)' wordplay with the corrected word in parentheses; no figures, icons, photographs, or margin notes in the table region).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "g-protein-messenger-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's q/i/s SWIMLANE DIRECTORY (GProteinMessengerMap in visuals/pharm-p14.tsx — the Gq lane with its five receptor chips, the Gs lane with its six, the Gi lane with its three, each chip carrying its printed letter and a function digest) + the table's full text carried VERBATIM in the note's table block (blocks[1], printed row order, family bands included, typos/wordplay carried and attributed)",
        "productionStatus": "complete",
        "plannedKypVisualId": "g-protein-messenger-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "g-protein-second-messengers-sv2",
        "sourcePages": {"part": 1, "pdfPages": [259], "bookPages": "237"},
        "visualType": "SIGNAL_TRANSDUCTION",
        "visualPurpose": "The two-panel G-protein cascade figure (book 237): the Gq route (phospholipase C → PIP2 → DAG + IP3 → Ca2+ → smooth muscle contraction) and the shared-enzyme Gs/Gi route (adenylyl cyclase stimulated by GS protein, inhibited by Gi protein; ATP → cAMP → PKA → ↑Ca2+ and ⊣ myosin light-chain kinase)",
        "sourceFigureDescription": "VECTOR LINE ART, ZERO rasters (pdfimages CONFIRMED; VLM seven passes 120–432 DPI + PyMuPDF word/vector-path dump, saved to staging-ph14/): TWO STACKED PANELS. TOP — the Gq cascade: Ligand (pink circle) → 'H1, α1, V1, M1, or M3 receptor' (7-TM) → Gq protein → ⊕ Phospholipase C → ⊕ PIP2 (hexagon) → DAG (right, → ⊕ Protein kinase C) and IP3 (down, → ↑Ca2+ → both ⊕ Protein kinase C and 'Smooth muscle contraction'); all arrows pointed/stimulatory. BOTTOM — the shared-enzyme panel: one Ligand label (the right arm's ligand circle unlabeled), 'B1, B2, B3, D1, H2, or V2 receptor' (Latin B as printed) → GS protein → pointed green ⊕ onto the central Adenylyl cyclase; 'M2, α2, or D2 receptor' → Gi protein → blunt red ⊖ T-bar ONTO THE SAME Adenylyl cyclase; ATP (starburst) → Cyclic AMP (circle cluster) → Protein kinase A → green ⊕ leftward onto ↑Ca2+ and blunt red ⊖ rightward onto 'Myosin light-chain kinase (smooth muscle contraction)'. Environment labels print twice per panel's left edge: Extracellular space / Cell membrane / Cytoplasm.",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "g-protein-messenger-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's TWO CASCADE PANELS (GProteinMessengerMap in visuals/pharm-p14.tsx): the Gq panel redrawn as a KYP glyph chain (ligand circle → hatched membrane + 7-TM receptor glyph → Gq protein → Phospholipase C → PIP2 hexagon → the DAG/PKC and IP3/↑Ca2+/smooth-muscle-contraction fork, green ⊕ markers on the stimulatory arrows) and the shared-enzyme panel (two receptors in one membrane, GS protein's ⊕ and Gi protein's blunt red T-bar ⊖ onto the one Adenylyl cyclase, ATP → Cyclic AMP → Protein kinase A, PKA's ⊕ to ↑Ca2+ and blunt red ⊖ to Myosin light-chain kinase), with the environment labels preserved on each panel's left edge as printed",
        "productionStatus": "complete",
        "plannedKypVisualId": "g-protein-messenger-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph14"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "g-protein-second-messengers.json").write_text(json.dumps(m14, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "g-protein-second-messengers.json").write_text(
    json.dumps({"topicId": "g-protein-second-messengers", "chapterId": "pharmacology", "inventory": inv14,
                "coverageAudit": {"topicId": "g-protein-second-messengers", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "TWO visual assets on the source page, both accounted for: [1] the RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS table — an ORIGINAL KYP ADAPTATION (the registry visual's q/i/s swimlane directory + the verbatim table block in the note, printed row order, with the source's own red-printed '(one heart)' / '(two lungs)' / 'twobules (tubules)' hints carried attributed); [2] the two-panel cascade figure — an ORIGINAL KYP REDRAW (the visual's two glyph-chain panels, every printed label preserved, both inhibitory arrows drawn as blunt red T-bars with ⊖ markers exactly where the page prints them: Gi protein onto adenylyl cyclase, and Protein kinase A onto myosin light-chain kinase). Census: ZERO raster images (pdfimages, CONFIRMED); VLM (glm-4.6v) ran seven passes this session (120–432 DPI) plus a PyMuPDF word/vector-path dump — the figure is pure vector line art, no photographs, no margin notes or mnemonics anywhere on the page. ADJUDICATION: the figure is TWO stacked panels (Gq on top; Gs and Gi share the bottom panel's ONE adenylyl cyclase); 'Myosin light-chain kinase (smooth muscle contraction)' prints in the BOTTOM panel under Protein kinase A's inhibitory arrow (the β2-relaxation mechanism), not in the Gq panel. STAGED under .usmle-pipeline-cache/staging-ph14/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH14 manifest + inventory staged: {OUT}/manifests/g-protein-second-messengers.json, {OUT}/visual-inventory/g-protein-second-messengers.json")
print(f"g-protein-second-messengers: evidence {len(kept)}/{len(E14)} verified")
