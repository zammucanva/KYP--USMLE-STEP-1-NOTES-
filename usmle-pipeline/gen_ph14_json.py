#!/usr/bin/env python3
"""PH14 micturition-control — manifest + inventory + flip
(Pharmacology 14/43 — the MICTURITION WIRING MAP, the three nerves, the
four receptors, and the four drug rows keyed to them).
Census (pdfimages + text layer + VLM): pdf 258 (book 236), the UPPER
portion of the page — the section header 'Micturition control' under the
standing banner 'PHARMACOLOGY—AUTONOMIC DRUGS'. The section's ENTIRE
printed content: (1) the MIC turition WIRING DIAGRAM (left column) — a
full-color medical illustration of the bladder and urethra (raster
tissue art, 3 sep rasters: the bladder-base/trigone mask 426x336, the
bladder+urethra body 383x518, a curved wall segment 458x277) with
VECTORIZED typeset labels: the three input nerves — 'Pelvic nerve
(parasympathetic input)', 'Hypogastric nerve (sympathetic input)',
'Pudendal nerve (somatic input)' — each drawn to its target; the three
structures — 'Detrusor muscle', 'Internal urethral sphincter',
'External urethral sphincter'; and the four receptor plates —
'M₃-receptor' (① on the detrusor, at the pelvic nerve terminus),
'β₃-receptor' (② on the detrusor, at the hypogastric branch), 'α₁-
receptor' (③ on the internal urethral sphincter, at the hypogastric
terminus at the bladder neck), and 'Nicotinic receptor' (on the external
urethral sphincter, at the pudendal terminus); the numbered circles ①②③
on the receptors key them to the numbered rows of the drug table below
(① = the two M₃ rows, ② = the β₃ row, ③ = the α₁ row); (2) the RIGHT
MARGIN NOTE — 'Micturition center in pons regulates involuntary bladder
function via coordination of sympathetic and parasympathetic nervous
systems.'; '⊕ sympathetic → ↑ urinary retention.'; '⊕ parasympathetic
→ ↑ urine voiding.'; 'Some autonomic drugs act on smooth muscle
receptors to treat bladder dysfunction.'; (3) the printed margin
MNEMONIC — 'Baby one more time.' with the red first letters B·o·m·t
(VLM-verified at high zoom) = Bethanechol · Oxybutynin · Mirabegron ·
Tamsulosin, the four drug rows in table order (the source's own
mnemonic, carried verbatim and attributed — the E38/PH9 precedent);
(4) the DRUGS / MECHANISM / APPLICATIONS TABLE, four rows — 'Muscarinic
agonists (eg, bethanechol)': '⊕ M₃ receptor → contraction of detrusor
smooth muscle → ↑ bladder emptying' / 'Urinary retention'; 'Muscarinic
antagonists (eg, oxybutynin)': '⊝ M₃ receptor → relaxation of detrusor
smooth muscle → ↓ detrusor overactivity' / 'Urgency incontinence';
'Sympathomimetics (eg, mirabegron)': '⊕ β₃ receptor → relaxation of
detrusor smooth muscle → ↑ bladder capacity' / 'Urgency incontinence';
'α1-antagonists (eg, tamsulosin)': '⊝ α₁-receptor → relaxation of smooth
muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction' / 'BPH'.
SECTION EXTENT: the section ENDS on pdf 258 — the LOWER portion of the
SAME page opens the SEPARATE pending section 'Tissue distribution of
adrenergic receptors' (its own pending topic; same-page boundary
pinned), and pdf 259 (book 237) opens the SEPARATE pending section
'G-protein–linked second messengers' (259-side boundary pinned).
sourcePages = [258] only.
TEXT-LAYER NOTE: the drug table's receptor subscripts print on their own
lines in the text layer ('⊕ M receptor → contraction of detrusor
smooth' then '3' then 'muscle → ↑ bladder emptying' — the ₃ of M₃, the ₃
of the second row, the ₃ of the β₃ row, and the ₁ of the α₁ row); the
diagram's receptor labels use the composed subscript characters
('M₃-receptor', 'β₃-receptor', 'α₁-receptor') and are clean. The
evidence quotes pin the table rows as their split fragments (the
subscript splits documented, not missing tokens); the verbatim table in
the note composes the subscripts inline.
KYP EXTENSIONS (beyond the page's printed set, flagged wherever they
appear): the STORAGE-STATE vs VOIDING-STATE reading (the book prints the
wiring plus the two margin arrows — sympathetic → retention,
parasympathetic → voiding — but never names the two states or assigns
per-structure effect directions to them); the α₁-CONTRACTION direction
of the internal sphincter (read off the book's own α1-antagonist row —
tamsulosin RELAXES the bladder-neck/prostate smooth muscle, so α₁
stimulation contracts it — a KYP reading, not a printed sentence); the
nicotinic/pudendal VOLUNTARY-HOLD reading of the external sphincter
(the page prints only the label); the sacral cord levels S2–S4 and the
Onuf nucleus (classic neuroanatomy anchors, NOT printed on the page);
the outlet-obstruction-vs-detrusor-failure sorting of urinary retention
(the BPH row implies it; the sorting frame is KYP).
RASTER CENSUS: 3 sep rasters (the bladder illustration's tissue masks) —
COPYRIGHTED artwork, NEVER reproduced; the diagram is conveyed as ONE
original KYP schematic (MicturitionControlMap — the bladder/urethra
glyph column, the three nerve lanes, the four receptor plates, the
storage/voiding state panels, the verbatim margin-note strip, the
four-row drug strip, the code strip). The drug table is carried VERBATIM
as the note's table block (ORIGINAL_KYP_ADAPTATION)."""
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
L = {257: pages[256].split("\n"), 258: pages[257].split("\n"),
     259: pages[258].split("\n")}
P = {257: norm(pages[256]), 258: norm(pages[257]), 259: norm(pages[258])}
def rng(pg, a, b): return "\n".join(L[pg][a - 1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 236): the printed page number, the Section II marker, the standing section banner, and this topic's section header 'Micturition control' (the UPPER portion of the page)", rng(258, 1, 9), [258]),
    ("The section banner — PHARMACOLOGY—AUTONOMIC DRUGS (the same banner PH10–PH13 sit under; this topic continues the Autonomic Drugs subsection)", rng(258, 7, 7), [258]),
    ("The section header — 'Micturition control' (this topic's section, opening the page)", "Micturition control", [258]),
    ("The wiring diagram's nerve label, verbatim — 'Pelvic nerve (parasympathetic input)' (the parasympathetic lane, drawn to the detrusor muscle at the M₃ plate)", "Pelvic nerve (parasympathetic input)", [258]),
    ("The wiring diagram's nerve label, verbatim — 'Hypogastric nerve (sympathetic input)' (the sympathetic lane, branching to the detrusor at the β₃ plate and to the internal urethral sphincter at the α₁ plate)", "Hypogastric nerve (sympathetic input)", [258]),
    ("The wiring diagram's nerve label, verbatim — 'Pudendal nerve (somatic input)' (the somatic lane, drawn to the external urethral sphincter at the Nicotinic receptor)", "Pudendal nerve (somatic input)", [258]),
    ("The wiring diagram's structure label, verbatim — 'Detrusor muscle' (the bladder wall, carrying BOTH the M₃-receptor and the β₃-receptor plates)", "Detrusor muscle", [258]),
    ("The wiring diagram's structure label, verbatim — 'Internal urethral sphincter' (the involuntary smooth-muscle outlet, carrying the α₁-receptor plate)", "Internal urethral sphincter", [258]),
    ("The wiring diagram's structure label, verbatim — 'External urethral sphincter' (the voluntary skeletal-muscle cuff, carrying the Nicotinic receptor plate)", "External urethral sphincter", [258]),
    ("The wiring diagram's receptor plate, verbatim — 'M₃-receptor' (① on the detrusor at the pelvic nerve terminus; the parasympathetic key: M₃ stimulation contracts the detrusor — the bethanechol row prints the mechanism)", "M₃-receptor", [258]),
    ("The wiring diagram's receptor plate, verbatim — 'β₃-receptor' (② on the detrusor at the hypogastric branch; the sympathetic storage key: β₃ stimulation relaxes the detrusor — the mirabegron row prints the mechanism)", "β₃-receptor", [258]),
    ("The wiring diagram's receptor plate, verbatim — 'α₁-receptor' (③ on the internal urethral sphincter at the hypogastric terminus at the bladder neck; the sympathetic outlet key — the tamsulosin row prints the antagonism)", "α₁-receptor", [258]),
    ("The wiring diagram's receptor plate, verbatim — 'Nicotinic receptor' (on the external urethral sphincter at the pudendal terminus — the somatic, voluntary lane of the wiring; the only non-adrenergic, non-muscarinic plate on the diagram)", "Nicotinic receptor", [258]),
    ("The RIGHT MARGIN NOTE, verbatim — the whole printed block: the pontine center sentence, the two autonomic arrows, and the drug-bridge sentence (the section's physiology spine: one center, two coordinated systems, two arrows)", rng(258, 21, 29), [258]),
    ("The pontine center sentence, verbatim — 'Micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems.' (the coordination clause: micturition is a PONS-orchestrated duet, not a local reflex)", "Micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems.", [258]),
    ("The SYMPATHETIC ARROW, verbatim — '⊕ sympathetic → ↑ urinary retention.' (the storage arrow: sympathetic activity HOLDS the urine — the margin's own one-line summary of the storage state)", "⊕ sympathetic → ↑ urinary retention.", [258]),
    ("The PARASYMPATHETIC ARROW, verbatim — '⊕ parasympathetic → ↑ urine voiding.' (the voiding arrow: parasympathetic activity RELEASES the urine — the margin's own one-line summary of the voiding state)", "⊕ parasympathetic → ↑ urine voiding.", [258]),
    ("The drug-bridge sentence, verbatim — 'Some autonomic drugs act on smooth muscle receptors to treat bladder dysfunction.' (the sentence that turns the wiring into a drug map: the drugs act at the receptors just labeled)", "Some autonomic drugs act on smooth muscle receptors to treat bladder dysfunction.", [258]),
    ("The printed margin MNEMONIC, verbatim — 'Baby one more time.' with the red first letters B·o·m·t (VLM-verified at high zoom): Bethanechol · Oxybutynin · Mirabegron · Tamsulosin, the four drug rows in table order — the SOURCE'S OWN mnemonic, carried verbatim and attributed (not a KYP design)", "Baby one more time.", [258]),
    ("The drug table's column header block — 'DRUGS … MECHANISM … APPLICATIONS' (the text layer interleaves the diagram's 'Nicotinic receptor' label between the column heads — documented; the header prints DRUGS / MECHANISM / APPLICATIONS)", rng(258, 43, 49), [258]),
    ("Drug row ①a — the drug column, verbatim — 'Muscarinic agonists (eg, bethanechol)' with its mechanism head '⊕ M receptor → contraction of detrusor smooth' (the text layer splits the subscript: the ₃ of M₃ prints on its own line — documented; the composed row reads '⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying')", rng(258, 51, 55), [258]),
    ("Drug row ①a — the mechanism tail and application, verbatim — 'muscle → ↑ bladder emptying' and 'Urinary retention' (the bethanechol payoff: the detrusor contracts and the bladder EMPTIES — the drug for retention)", "muscle → ↑ bladder emptying", [258]),
    ("Drug row ①a — the APPLICATION, verbatim — 'Urinary retention' (bethanechol's indication: the bladder that cannot empty)", "Urinary retention", [258]),
    ("Drug row ①b — the drug column with its mechanism, verbatim — 'Muscarinic antagonists (eg, oxybutynin)' + '⊝ M receptor → relaxation of detrusor smooth muscle' (same receptor as row ①a, OPPOSITE action — the ₃ subscript again prints on its own line; the composed row reads '⊝ M₃ receptor → relaxation of detrusor smooth muscle → ↓ detrusor overactivity')", rng(258, 59, 63), [258]),
    ("Drug row ①b — the mechanism tail, verbatim — '→ ↓ detrusor overactivity' (the oxybutynin payoff: the overactive detrusor is CALMED)", "→ ↓ detrusor overactivity", [258]),
    ("Drug row ①b — the APPLICATION, verbatim — 'Urgency incontinence' (oxybutynin's indication: the bladder that will not hold)", "Urgency incontinence", [258]),
    ("Drug row ② — the drug column with its mechanism, verbatim — 'Sympathomimetics (eg, mirabegron)' + '⊕ β receptor → relaxation of detrusor smooth muscle' (the counterintuitive row: a SYMPATHOMIMETIC that RELAXES the bladder — the ₃ subscript prints on its own line; the composed row reads '⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity')", rng(258, 65, 68), [258]),
    ("Drug row ② — the mechanism tail, verbatim — '→ ↑ bladder capacity' (the mirabegron payoff: the relaxed detrusor HOLDS more)", "→ ↑ bladder capacity", [258]),
    ("Drug row ② — the APPLICATION, verbatim — 'Urgency incontinence' (mirabegron's indication — the SAME application as oxybutynin via the OPPOSITE receptor: two ways to calm a bladder, M₃ blocked or β₃ stimulated)", "Urgency incontinence", [258]),
    ("Drug row ③ — the drug column with its mechanism head, verbatim — 'α1-antagonists (eg, tamsulosin)' + '⊝ α -receptor → relaxation of smooth muscle (eg,' (the ₁ subscript prints on its own line — the composed row reads '⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction')", rng(258, 70, 73), [258]),
    ("Drug row ③ — the mechanism tail, verbatim — 'bladder, neck, prostate) → ↓ urinary obstruction' (the tamsulosin payoff: the obstructed OUTLET is opened — the only row that acts at the outlet rather than the pump)", "bladder, neck, prostate) → ↓ urinary obstruction", [258]),
    ("Drug row ③ — the APPLICATION, verbatim — 'BPH' (tamsulosin's indication: the prostate-compressed urethra of benign prostatic hyperplasia)", "BPH", [258]),
    ("The page footer — the book's signature file line + print-date footer (book 236)", rng(258, 149, 151), [258]),
    ("The SAME-PAGE EXCLUSION BOUNDARY (lower portion) — the 'Tissue distribution of adrenergic receptors' section on this SAME page (the α1/α2/β1/β2/β3 tissue table) is the SEPARATE pending topic 'tissue-distribution-of-adrenergic-receptors' and is EXCLUDED from this topic", "Tissue distribution of adrenergic receptors", [258]),
    ("The PREVIOUS-PAGE BOUNDARY — pdf 257 (book 235) carries the COMPLETED topics PH12 'acetylcholine-receptors' (upper) and PH13 'pain-transmission' (lower, its section header pinned here): the Micturition control section STARTS fresh on pdf 258 and inherits nothing from 257", "Pain transmission", [257]),
    ("The NEXT-PAGE BOUNDARY — pdf 259 (book 237) opens the SEPARATE pending section 'G-protein–linked second messengers': the Micturition control section ENDS on pdf 258 and does not continue", "G-protein–linked second messengers", [259]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"micturition-control: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "micturition-control", "title": "Micturition Control",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [258], "bookPages": "236"},
    "sourceEvidence": kept, "visualIds": ["micturition-control-map"],
    "mechanismIds": ["sympathetic-storage-wiring", "parasympathetic-voiding-wiring"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source's wiring diagram, margin note, mnemonic, and drug table.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the wiring diagram, the two margin arrows, the printed mnemonic, and the four drug rows; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "two-state-reading-protocol", "summary": "The two-anchor reading of any bladder stem (ANCHOR 1 — NAME THE STATE: the book's own margin arrows are the split — '⊕ sympathetic → ↑ urinary retention.' (STORAGE: fill and hold) vs '⊕ parasympathetic → ↑ urine voiding.' (VOIDING: squeeze and release); ANCHOR 2 — LOCATE THE RECEPTOR, THEN READ THE DRUG ROW: detrusor M₃ = the parasympathetic pump key (contract), detrusor β₃ = the sympathetic capacity key (relax), internal sphincter α₁ = the sympathetic outlet key, external sphincter nicotinic = the somatic voluntary key). The book PRINTS the wiring and the two arrows but never names the two states nor assigns per-structure effect directions to them — the STORAGE-STATE vs VOIDING-STATE framing, the per-structure direction assignments (except where a drug row prints them: M₃ contraction, M₃/β₃ relaxation, α₁-antagonist relaxation), and the reading order (state → receptor → drug row) are KYP's synthesis.",
         "origin": "outside-first-aid", "rationale": "The source prints the wiring diagram, the two margin arrows, and the four drug rows as separate elements; the two-state protocol that unifies them is KYP's design (every receptor, arrow, drug name, and application is the book's own).",
         "location": "core.keyIdea + mechanisms + the visual's state panels"},
        {"id": "station-labels-and-drug-key-map", "summary": "The anatomical and clinical anchors that extend past the page: the sacral cord levels S2–S4 of the pelvic and pudendal nerves and the Onuf nucleus (the external sphincter's motor home — classic neuroanatomy, NOT printed on the page); the α₁-CONTRACTION direction of the internal urethral sphincter (read off the book's own α1-antagonist row — tamsulosin RELAXES 'smooth muscle (eg, bladder, neck, prostate)', so α₁ stimulation contracts the outlet — a KYP reading, not a printed sentence); the nicotinic/pudendal VOLUNTARY-HOLD reading of the external sphincter (the page prints only the 'Pudendal nerve (somatic input)' + 'Nicotinic receptor' labels); the outlet-obstruction-vs-detrusor-failure sorting of urinary retention (the BPH row implies it — obstruction at the outlet answers to α₁ blockade, not to a stronger pump; the sorting frame is KYP); and the stress-vs-urgency incontinence sorting (the table's 'Urgency incontinence' application implies the detrusor-overactivity mechanism; the stress-incontinence contrast is KYP). The structure × receptor × nerve × drug × application KEY MAP (the note's second table) is KYP's pivot of the page's own wiring + drug rows — every cell is the book's own; the map view is KYP.",
         "origin": "outside-first-aid", "rationale": "The book prints the wiring labels and the drug rows; the state directions beyond the printed mechanisms, the sacral levels, Onuf nucleus, and the retention/incontinence sorting frames are KYP extensions, flagged wherever they appear.",
         "location": "blocks[2] the key map + mechanisms + the visual's wiring annotations"},
        {"id": "mnemonic-layer", "summary": "The four-code memory layer. Code 1 is the SOURCE'S OWN printed mnemonic, carried verbatim and attributed (not a KYP design): BABY ONE MORE TIME — 'Baby one more time.' printed in the margin of book 236 with the red first letters B·o·m·t = Bethanechol · Oxybutynin · Mirabegron · Tamsulosin, the four drug rows in table order (the E38/PH9 attribution precedent — the code itself is First Aid's, so it sits in the note as an attributed quotation). Codes 2–4 are KYP-original designs built on the section's own printed elements: SYMPATHETIC HOLDS, PARASYMPATHETIC FLOWS (the book's own two margin arrows compressed — sympathetic → retention, parasympathetic → voiding); M₃ SQUEEZES, β₃ STRETCHES, α₁ GUARDS THE GATE, NICOTINIC IS YOURS (the four receptor plates with their directions — the M₃-contraction and the M₃/β₃-relaxation directions are the book's own table rows, the α₁-guard and the nicotinic-voluntary readings are KYP); S2,3,4 KEEPS THE URINE OFF THE FLOOR (the classic sacral-level code for the pelvic/pudendal nerves — outside First Aid, flagged as a classic KYP anchor). The layering (which code for which stem, and the attribution discipline) is KYP's design.",
         "origin": "outside-first-aid", "rationale": "The KYP memory layer is an original design; where a code quotes the book's own printed mnemonic ('Baby one more time.') it is carried verbatim and attributed inside the code's meaning — the code itself is not a KYP creation. The remaining three codes are KYP-original designs built on the section's own printed elements (the arrows, the receptor plates, the nerve lanes).",
         "location": "mnemonics + the visual's code strip"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + text layer + VLM): the Micturition control section occupies the UPPER portion of pdf 258 (book 236), ending at the drug table's last row — the LOWER portion opens the SEPARATE pending 'Tissue distribution of adrenergic receptors' section (same-page boundary pinned), and pdf 259 opens the SEPARATE pending 'G-protein–linked second messengers' section (259-side boundary pinned). The section's printed content: (1) the MIC turition WIRING DIAGRAM — a full-color medical illustration (3 sep rasters: the bladder-base/trigone mask 426x336, the bladder+urethra body 383x518, a curved wall segment 458x277 — COPYRIGHTED tissue artwork, NEVER reproduced) with vectorized typeset labels: three input nerves (Pelvic = parasympathetic → detrusor M₃; Hypogastric = sympathetic → detrusor β₃ AND internal sphincter α₁; Pudendal = somatic → external sphincter Nicotinic), three structures (Detrusor muscle, Internal urethral sphincter, External urethral sphincter), and four receptor plates (M₃ ①, β₃ ②, α₁ ③, Nicotinic) — the numbered circles key the receptors to the numbered drug-table rows (① = the two M₃ rows, ② = β₃, ③ = α₁); (2) the margin note — the pontine center sentence + the two autonomic arrows + the drug-bridge sentence (all carried verbatim in the note's first table block); (3) the printed mnemonic 'Baby one more time.' (red initials B·o·m·t = Bethanechol · Oxybutynin · Mirabegron · Tamsulosin — the source's own, carried verbatim and attributed); (4) the four-row DRUGS/MECHANISM/APPLICATIONS table (carried verbatim; the text layer splits the receptor subscripts onto their own lines — the ₃/₃/₃/₁ of M₃/M₃/β₃/α₁ — documented, composed inline in the note's table). KYP extensions flagged wherever they appear: the storage-state vs voiding-state naming, the α₁-contraction direction (read off the α1-antagonist row), the pudendal voluntary-hold reading, the S2–S4 sacral levels + Onuf nucleus, and the retention/incontinence sorting frames. The registry visual (MicturitionControlMap) conveys the copyrighted diagram as ONE original KYP schematic (the bladder/urethra glyph column, the three nerve lanes, the four receptor plates, the two state panels, the verbatim margin-note strip, the four-row drug strip, the code strip) — nothing reproduced; the drug table is carried verbatim as the note's table block. No copyrighted photographs reproduced; nothing reproduced. The clinical anchors extending past the page (postoperative retention, anticholinergic burden in the elderly, neurogenic bladder after spinal cord injury, autonomic dysreflexia, diabetic cystopathy) are flagged as KYP clinical anchors wherever they appear.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "micturition-control", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"micturition-control-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [258], "236", "PHARMACOLOGY_DIAGRAM", "The MIC turition control wiring diagram (the section's figure — the bladder/urethra anatomy with its three input nerves and four receptor plates)",
       "The section's figure: a full-color medical illustration of the bladder and urethra (COPYRIGHTED raster tissue art — pdfimages: 3 sep rasters on pdf 258, the bladder-base/trigone mask 426x336, the bladder+urethra body 383x518, and a curved wall segment 458x277 — never reproduced) with vectorized typeset labels. ANATOMY: the urinary bladder drawn in cross-section with a thick wall (the 'Detrusor muscle') tapering through the bladder neck into the urethra; the 'Internal urethral sphincter' at the bladder neck (smooth muscle), the 'External urethral sphincter' lower on the urethra. NERVES (three yellow input lanes from the left): 'Pelvic nerve (parasympathetic input)' → the detrusor muscle at the 'M₃-receptor' plate; 'Hypogastric nerve (sympathetic input)' → two branches, one to the detrusor at the 'β₃-receptor' plate and one to the internal urethral sphincter at the 'α₁-receptor' plate; 'Pudendal nerve (somatic input)' → the external urethral sphincter at the 'Nicotinic receptor' plate. NUMBERED CIRCLES: the receptor plates carry ① (M₃), ② (β₃), and ③ (α₁), keying them to the numbered rows of the drug table printed below the figure (the Nicotinic plate carries no number — no drug row targets it).",
       "ORIGINAL_KYP_REDRAW", "micturition-control-map", "the registry visual (the MicturitionControlMap — the bladder/urethra glyph column with the three sphincter levels, the three nerve lanes, the four receptor plates with the ①②③ keys, the two state panels, the verbatim margin-note strip, the four-row drug strip, and the code strip) + blocks[0] the visual block"),
    sv(2, [258], "236", "VISUAL_TABLE", "The DRUGS / MECHANISM / APPLICATIONS table (the section's four-row drug map) + the margin note it sits beside (the pontine center sentence, the two autonomic arrows, and the printed mnemonic)",
       "The four-row drug table, verbatim: 'Muscarinic agonists (eg, bethanechol)' — '⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying' — 'Urinary retention'; 'Muscarinic antagonists (eg, oxybutynin)' — '⊝ M₃ receptor → relaxation of detrusor smooth muscle → ↓ detrusor overactivity' — 'Urgency incontinence'; 'Sympathomimetics (eg, mirabegron)' — '⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity' — 'Urgency incontinence'; 'α1-antagonists (eg, tamsulosin)' — '⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction' — 'BPH'. Beside the diagram the margin prints: 'Micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems. ⊕ sympathetic → ↑ urinary retention. ⊕ parasympathetic → ↑ urine voiding. Some autonomic drugs act on smooth muscle receptors to treat bladder dysfunction.' and the mnemonic 'Baby one more time.' (red initials B·o·m·t = Bethanechol · Oxybutynin · Mirabegron · Tamsulosin — the source's own). TEXT-LAYER NOTE: the table's receptor subscripts print on their own lines (the ₃/₃/₃/₁ of M₃/M₃/β₃/α₁) — documented; the composed rows are carried verbatim in the note's table block.",
       "ORIGINAL_KYP_ADAPTATION", "micturition-control-map", "the note's table blocks (blocks[1] the verbatim margin note + drug table; blocks[2] the KYP key-map pivot) + the registry visual's margin-note and drug strips"),
]
(ROOT / "content/usmle/manifests/micturition-control.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/micturition-control.json").write_text(
    json.dumps({"topicId": "micturition-control", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "micturition-control", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + text layer + VLM): the section's figure is a FULL-COLOR MEDICAL ILLUSTRATION (the bladder/urethra wiring diagram) built on 3 sep rasters (the bladder-base/trigone mask 426x336, the bladder+urethra body 383x518, a curved wall segment 458x277) with VECTORIZED typeset labels — the tissue artwork is COPYRIGHTED and is NEVER reproduced; the diagram is conveyed as ONE original KYP schematic in the registry visual MicturitionControlMap (the bladder/urethra glyph column with the three outlet levels, the three nerve lanes — Pelvic parasympathetic → M₃, Hypogastric sympathetic → β₃ + α₁, Pudendal somatic → Nicotinic — the four receptor plates with the book's own ①②③ keys to the drug rows, the STORAGE and VOIDING state panels built from the book's own two margin arrows, the verbatim margin-note strip, the four-row drug strip, and the code strip). Only short attributed labels are carried across (the nerve names, the structure names, the receptor plates, the numbered keys, the drug rows, the two arrows). The drug table + margin note are carried VERBATIM as the note's table blocks (ORIGINAL_KYP_ADAPTATION — the text layer's subscript splits documented). The printed mnemonic 'Baby one more time.' is the SOURCE'S OWN (red initials B·o·m·t = Bethanechol · Oxybutynin · Mirabegron · Tamsulosin) — carried verbatim and attributed, not a KYP design; the other three codes are KYP-original. EXCLUSIONS: the 'Tissue distribution of adrenergic receptors' section in the LOWER portion of the same page belongs to the SEPARATE pending topic 'tissue-distribution-of-adrenergic-receptors' and is NOT part of this inventory; pdf 257 carries the COMPLETED topics PH12 (upper) and PH13 (lower); pdf 259 opens the SEPARATE pending 'G-protein–linked second messengers' section (this section ENDS on pdf 258). The clinical anchors extending past the page (S2–S4/Onuf-nucleus neuroanatomy, postoperative retention, anticholinergic burden, neurogenic bladder, autonomic dysreflexia, diabetic cystopathy) are KYP clinical anchors, flagged wherever they appear. No copyrighted photographs reproduced; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "micturition-control":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv1))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pharmacology {done}/{len(ch['topics'])}{' — CHAPTER COMPLETE' if done==len(ch['topics']) else ''}")
print("PH14 manifest + inventory + flip done")
