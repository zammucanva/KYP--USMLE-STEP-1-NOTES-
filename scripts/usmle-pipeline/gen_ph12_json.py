#!/usr/bin/env python3
"""PH12 micturition-control — manifest + inventory (Pharmacology
autonomic-drugs batch), STAGED under .usmle-pipeline-cache/staging-ph12/
(the promotion step owns content/). Source: pdf 258 TOP half / book 236 —
a SHARED page (the p196 convention): the bottom half, "Tissue distribution
of adrenergic receptors" (from the heading at part1.txt page-258 line 96),
is the sibling topic adrenergic-receptor-distribution, so only the
Micturition-control block's contiguous lines 1-94 are quoted, stopping
before that heading. The indd slug + timestamp footer prints at lines
149-151, at the very foot of the page AFTER the sibling's table — it
belongs to the page bottom / the sibling's half per the batch spec and is
deliberately NOT quoted here (documented in the manifest notes).

CENSUS (VLM AVAILABLE this session — unlike the ph6-ph10 batch, which lost
VLM to a 401 outage; three passes saved to staging-ph12/vlm-census.txt):
pdfimages reports THREE spot-color ("sep") raster objects on the page
(426x336, 383x518, 458x277 @316ppi) — the VLM reads all three as
white-silhouette anatomy LAYERS of the bladder illustration (the
bladder+lower-tract funnel; the valentine-shaped bladder body with the
urethral stem; the crescent, lobulated detrusor wall band). Every label,
leader line, the pons text block, the mnemonic, and the whole
DRUGS/MECHANISM/APPLICATIONS table are live VECTOR TEXT — the figure is a
mixed composite (raster anatomy layers + vector labels), not pure vector
line art; the spec's "vector figure" reading is adjudicated and corrected
in the manifest notes. The figure's printed labels, all in the text layer:
M₃-receptor + Detrusor muscle, β₃-receptor, α₁-receptor, Internal urethral
sphincter, External urethral sphincter, Pelvic nerve (parasympathetic
input), Hypogastric nerve (sympathetic input), Pudendal nerve (somatic
input), Nicotinic receptor, and the Micturition-center-in-pons text block
with the retention/voiding opposition. Dark-teal numbered circles ❶❷❸
print beside the M₃/β₃/α₁ receptor labels and repeat in the table's DRUGS
column (rows 1-2 = ❶, row 3 = ❷, row 4 = ❸) — confirmed by two independent
VLM passes AND PyMuPDF vector-drawing positions (seven filled circles: three
at the label positions + four at the table rows).

MARGIN MNEMONIC ADJUDICATION: "Baby one more time." prints on its own line
directly below the pons text block (x 385-471pt — inside the right text
column of the figure, not the outer page margin), with the four first
letters B, o, m, t in the First Aid mnemonic red (PyMuPDF span color
b82837). The page's own anchor is the red-initial correspondence: the
table's four example drugs print their initials in the same red
(b-ethanechol, o-xybutynin, m-irabegron, t-amsulosin; span color c04d49),
so the mnemonic memorizes the four example DRUGS in printed row order (and
transitively their receptors, mechanisms, and applications). No
letter-to-receptor anchor prints anywhere near the mnemonic (two high-DPI
VLM passes + a PyMuPDF span sweep agree), so the task spec's tentative
receptor-letter decode (B=β₃, O=α₁ "one", M=M₃, T/"time") is NOT what the
page anchors — documented here either way. The mnemonic is carried
ATTRIBUTED to First Aid (book 236) in the note's mnemonics array + memory
callout; the four KYP codes are separately authored kypExtensions.

VERBATIM CARRIES, documented: (1) the table's subscript digits (3, 3, 3,
1) and row tails print interleaved on separate lines below the row heads
(the m38 convention) — the logical printed table is reconstructed via the
300dpi VLM crops and carried VERBATIM in printed row order in the note's
table block; (2) the printed book renders the table subscripts as M₃/β₃/
α₁ (the text layer prints "α1-antagonists" and "⊝ α -receptor" with the 1
on a separate subscript line); (3) the figure label prints β₃-receptor —
an early 120dpi VLM pass misread it as β₂ and is overruled by the text
layer + both high-DPI passes; (4) the circled cross-reference numbers
❶❶❷❸ are vector drawings (not text-layer characters) and are preserved in
the note's verbatim table and the redraw. No source typos on this half.
Nothing is reproduced: the figure is redrawn as ORIGINAL KYP vector art
(micturition-map); the table is carried verbatim as text."""
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
def rng(pg, a, b):
    return "\n".join(L[pg][a - 1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E12 = [
    ("Page identity — the book page number, the SECTION II / PHARMACOLOGY banner, the ▶ PHARMACOLOGY—AUTONOMIC DRUGS running head, and the topic heading 'Micturition control' (book 236; the shared page's bottom half, 'Tissue distribution of adrenergic receptors', is the sibling topic and is never quoted here)", rng(258, 1, 9), [258]),
    ("Figure labels, cluster 1 — the two detrusor receptors and the parasympathetic nerve: M₃-receptor, Detrusor muscle, β₃-receptor, and Pelvic nerve (parasympathetic input) (β₃ confirmed by the text layer + both high-DPI VLM passes; a low-DPI misread of β₂ is overruled)", rng(258, 10, 17), [258]),
    ("The α₁-receptor label + the complete pons text block — 'Micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems. ⊕ sympathetic → ↑ urinary retention. ⊕ parasympathetic → ↑ urine voiding. Some autonomic drugs act on smooth muscle receptors to treat bladder dysfunction.'", rng(258, 19, 29), [258]),
    ("The First Aid margin mnemonic, printed on its own line directly below the pons text block — 'Baby one more time.' with the four first letters B, o, m, t in the First Aid mnemonic red (span b82837); the page's own anchor is the red-initial correspondence with the table's four example drugs (b-ethanechol, o-xybutynin, m-irabegron, t-amsulosin, span c04d49) — carried attributed, adjudication documented in the manifest notes", rng(258, 30, 30), [258]),
    ("Figure labels, cluster 2 — the two sphincters and the sympathetic + somatic nerves: Internal urethral sphincter, Hypogastric nerve (sympathetic input), External urethral sphincter, Pudendal nerve (somatic input)", rng(258, 32, 41), [258]),
    ("The table column headers DRUGS / MECHANISM / APPLICATIONS, with the figure's Nicotinic receptor label interleaved between them in the text layer (the m38 interleave — the label prints at the figure's bottom right, beside the table header row; the printed table's drug rows also carry the vector-drawn circled cross-reference numbers ❶❶❷❸, confirmed by VLM + PyMuPDF drawing positions)", rng(258, 43, 49), [258]),
    ("Table rows 1-2 as the text layer prints them — Muscarinic agonists (eg, bethanechol) ⊕ M receptor → contraction of detrusor smooth ... Urinary retention; Muscarinic antagonists (eg, oxybutynin) ⊝ M receptor → relaxation of detrusor smooth muscle (the subscript 3s print on separate lines below — the m38 interleave)", rng(258, 51, 63), [258]),
    ("Table rows 3-4 as the text layer prints them — Sympathomimetics (eg, mirabegron) ⊕ β receptor → relaxation of detrusor smooth muscle; α1-antagonists (eg, tamsulosin) ⊝ α -receptor → relaxation of smooth muscle (eg, (the subscript 3/1 digits print on separate lines below — the m38 interleave)", rng(258, 65, 73), [258]),
    ("The interleaved subscript digits (3, 3, 3, 1) and the four row tails — muscle → ↑ bladder emptying; Urgency incontinence; → ↓ detrusor overactivity; Urgency incontinence; → ↑ bladder capacity; BPH; bladder, neck, prostate) → ↓ urinary obstruction — from which the logical printed table is reconstructed (300dpi VLM crops) and carried verbatim in the note's table block in printed row order", rng(258, 75, 94), [258]),
]
for c, q, pgs in E12:
    e = ev(c, q, pgs)
    if e["verified"] != "pass":
        fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails:
        print("  x", f)
    sys.exit(1)
print(f"micturition-control: evidence {len(kept)}/{len(E12)} verified")
QA = {g: "pass" for g in ["sourceVerified", "contentComplete", "miniCaseConsistent", "kypExtensionsTraceable", "mnemonicQuality", "visualsPaint", "visualCoverage", "mechanismRender", "lightMode", "darkMode", "mobile", "desktop", "consoleClean", "captionsReadable", "trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated", "chapterMapped", "subsectionMapped", "topicScoped", "evidencePinned", "noteAuthored", "visualsAuthored", "mechanismAuthored", "clinicalAuthored", "pivotsAuthored", "trapsAuthored", "mnemonicAuthored", "rapidReviewAuthored", "relatedAuthored", "qaPassed", "trackerSynced"]}
m12 = {"topicId": "micturition-control", "title": "Micturition Control: The Bladder Pharmacology",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [258], "bookPages": "236–236"},
    "sourceEvidence": kept, "visualIds": ["micturition-map"],
    "mechanismIds": ["retention-vs-voiding-map", "four-drugs-one-organ-map"],
    "kypExtensions": [
        {"id": "mnemonic-layer", "summary": "The four original KYP mnemonics (PELVIC PEES, HYPOGASTRIC HOLDS, PUDENDAL PARKS / M₃ MOVES IT OUT, β₃ MAKES ROOM / ALPHA-ONE ANCHORS THE NECK / TWO ROADS TO URGE, TWO WAYS TO FLOW). The page's own mnemonic — 'Baby one more time.' — is First Aid's, NOT counted here: it is carried ATTRIBUTED (mnemonics[0] + the memory callout + the visual's mnemonic chip) with its printed red-initial anchor documented (B-o-m-t = bethanechol, oxybutynin, mirabegron, tamsulosin, the four example drugs in printed row order).",
         "origin": "outside-first-aid", "rationale": "First Aid prints exactly one mnemonic on this page ('Baby one more time.'); the four ALL-CAPS nerve/detrusor/gate/table-structure codes are KYP's design.",
         "location": "mnemonics[1-4] + blocks[4] the mnemonic-provenance callout + the visual's mnemonic chip"},
        {"id": "mini-case-layer", "summary": "The urgency-incontinence miniCase — a 74-year-old woman whose oxybutynin was stopped for anticholinergic effects, asked for the next pharmacologic mechanism; the correct answer is the mirabegron row (⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity), with distractors built from the other three printed rows (bethanechol's inverted direction, oxybutynin's right-receptor-wrong-history, tamsulosin's wrong application).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the four drug rows but never asks the learner to choose between the two roads to the same application after a side-effect failure; the vignette, the four options, and the reasoning are KYP's design.",
         "location": "usmle.miniCase"},
        {"id": "drug-card-layer", "summary": "The four DrugCards (bethanechol, oxybutynin, mirabegron, tamsulosin): klass/target/mechanism/effect/uses follow the printed table rows; the adverse-effect lines are KYP additions from general autonomic pharmacology (each flagged 'KYP addition — not printed on book 236' in the field itself).",
         "origin": "outside-first-aid", "rationale": "The printed table carries mechanism and application only; the DrugCard schema's adverse field is filled from standard pharmacology and is labeled as such, never presented as First Aid content.",
         "location": "drugs"},
        {"id": "reading-protocol", "summary": "The four-move reading protocol (PLACE the tissue → NAME the receptor → PREDICT the muscle response → MATCH the printed application) and the one-organ-two-levers framing (the detrusor's M₃/β₃ fork, the two-roads-to-urge asymmetry, the somatic third rail).",
         "origin": "outside-first-aid", "rationale": "The source prints the figure and the table but no reading order; the four-move protocol and the asymmetry framing are KYP's synthesis.",
         "location": "core.keyIdea + blocks[3] the steps block + the visual's fork band and dock footers"},
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot attack structure layered over the source facts — 3 patterns (postoperative retention → bethanechol; anticholinergic-intolerant urge → mirabegron; BPH obstruction → tamsulosin), 3 traps (β₃ vs M₃ on the same muscle; oxybutynin vs mirabegron same-application; internal α₁ vs external nicotinic sphincter), 2 pivots.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the wiring figure and the four table rows only; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "SHARED PAGE (the p196 convention): pdf 258 / book 236 carries TWO subsections — 'Micturition control' (top half, THIS topic, part1.txt page-258 lines 1-94) and 'Tissue distribution of adrenergic receptors' (bottom half, the sibling topic adrenergic-receptor-distribution, from line 96); only the Micturition-control block's contiguous lines are quoted and every quote range stops before the sibling's heading. The indd slug + timestamp footer prints at lines 149-151, at the very foot of the page AFTER the sibling's table — it belongs to the page bottom / the sibling's half per the batch spec and is deliberately NOT quoted by PH12 (this entry documents that decision). CENSUS METHOD: VLM AVAILABLE this session (three passes — full page @120dpi, full page @200dpi + the three extracted raster objects, 300dpi crops of the figure/pons+mnemonic/table — saved to staging-ph12/vlm-census.txt), unlike the ph6-ph10 batch's 401 outage. pdfimages reports THREE spot-color raster objects (426x336, 383x518, 458x277 @316ppi), read by the VLM as the white-silhouette anatomy LAYERS of the bladder illustration; all labels, leader lines, the pons text, the mnemonic, and the table are live vector text — the figure is a MIXED composite, so the task spec's 'vector figure' description is adjudicated as 'raster anatomy layers + vector labels'; the redraw target (ORIGINAL_KYP_REDRAW, no reproduction) is unaffected. MNEMONIC ADJUDICATION (documented): 'Baby one more time.' prints directly below the pons text block (x 385-471pt — inside the right text column, not the outer page margin), first letters B, o, m, t in the First Aid red (span b82837); the page's own anchor is the red-initial correspondence with the table's example drugs (b/o/m/t, span c04d49) — the mnemonic memorizes the four example DRUGS in printed row order, transitively carrying each row's receptor, mechanism, and application; NO letter-to-receptor anchor prints near the mnemonic (two high-DPI VLM passes + PyMuPDF span sweep), so the task spec's tentative receptor-letter decode (B=β₃, O=α₁, M=M₃, T='time') is not what the page anchors — the drug-initial decode is used and documented either way. FIGURE FIDELITY: the redraw (micturition-map, MicturitionMap in visuals/pharm-p12.tsx) preserves every printed label, the three nerves (Pelvic/parasympathetic → M₃ on detrusor; Hypogastric/sympathetic → β₃ on detrusor AND α₁ at the internal sphincter, the branch preserved; Pudendal/somatic → nicotinic at the external sphincter), the two sphincters (internal smooth-muscle α₁, external striated nicotinic), the receptor placements, the book's own dark-teal numbered cross-reference circles ❶❷❸ (at the three receptor labels, repeated ❶❶❷❸ in the table's DRUGS column — vector drawings confirmed by PyMuPDF at the label positions and the four table rows), and the retention/voiding opposition of the pons text. Quirks, documented: (1) the table interleaves in the text layer (the m38 convention) — the four subscript digits (3, 3, 3, 1) and the row tails print on separate lines below the row heads (lines 75-94); the logical printed table is reconstructed via the 300dpi VLM crops and carried VERBATIM in printed row order in the note's table block, with the circled ❶❶❷❸ cross-reference markers preserved; (2) the text layer prints the figure subscripts directly (M₃-receptor, β₃-receptor, α₁-receptor) but the table subscripts as separate lines ('α1-antagonists', '⊝ α -receptor' + 1) — the printed book renders α with a subscript 1 there, and the note's verbatim table carries α₁ as printed; (3) an early 120dpi VLM pass misread the detrusor β label as β₂ — overruled by the text layer and both high-DPI passes (β₃-receptor); (4) NO source typos found on this half; (5) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the PH-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (6) outputs are STAGED under .usmle-pipeline-cache/staging-ph12/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'micturition-map' is therefore not yet in visuals/registry.tsx by design).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "micturition-control", "requiredInKYP": True}
inv12 = [
    dict(SV_BASE, **{
        "visualId": "micturition-control-sv1",
        "sourcePages": {"part": 1, "pdfPages": [258], "bookPages": "236"},
        "visualType": "PHARMACOLOGY_DIAGRAM",
        "visualPurpose": "The bladder innervation figure (book 236): the three nerve inputs, the two urethral sphincters, the four receptor placements, and the pontine retention-vs-voiding coordination",
        "sourceFigureDescription": "MIXED COMPOSITE FIGURE (pdfimages: THREE spot-color raster objects — 426x336, 383x518, 458x277 @316ppi — which the VLM reads as the white-silhouette anatomy layers of the bladder illustration: the bladder+lower-tract funnel, the valentine-shaped bladder body with the urethral stem, and the crescent lobulated detrusor wall band; all LABELS are live vector text): a coronal cutaway of the urinary bladder with a thick detrusor wall and folded mucosa, a funnel neck continuing as a vertical urethra, the internal urethral sphincter as two smooth ovoid masses at the bladder neck, and the external urethral sphincter as striated bundles lower on the urethra. Three yellow nerve lines enter from the left: Pelvic nerve (parasympathetic input) ending at the detrusor; Hypogastric nerve (sympathetic input) branching to the detrusor AND the bladder neck/internal sphincter; Pudendal nerve (somatic input) curving to the external urethral sphincter. Receptor labels with leader lines, each carrying a dark-teal numbered circle: M₃-receptor ❶ → detrusor; β₃-receptor ❷ → detrusor; α₁-receptor ❸ → internal urethral sphincter; plus Nicotinic receptor → external urethral sphincter. Beside the figure, a text panel carries the pons block — 'Micturition center in pons regulates involuntary bladder function via coordination of sympathetic and parasympathetic nervous systems. ⊕ sympathetic → ↑ urinary retention. ⊕ parasympathetic → ↑ urine voiding. Some autonomic drugs act on smooth muscle receptors to treat bladder dysfunction.' — with the First Aid mnemonic 'Baby one more time.' printed directly below it (first letters B-o-m-t in the FA red; the page's own anchor is the red initials of the four example drugs in the table below).",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "micturition-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's full wiring map (MicturitionMap in visuals/pharm-p12.tsx): the MICTURITION CENTER IN PONS band with the printed opposition (⊕ sympathetic → ↑ urinary retention vs ⊕ parasympathetic → ↑ urine voiding) and the attributed First Aid mnemonic chip; the bladder glyph with its Detrusor muscle wall, funnel neck and urethra carrying the two gates (Internal urethral sphincter — smooth muscle, α₁-receptor chip ❸; External urethral sphincter — striated skeletal muscle, Nicotinic receptor chip); the three nerve paths from the left (Pelvic → M₃ ❶ on the detrusor; Hypogastric → β₃ ❷ on the detrusor AND the α₁ chip at the internal sphincter, the branch preserved; Pudendal → the nicotinic chip at the external sphincter); the numbered ❶❷❸ circles preserved at the receptor chips; the retention-vs-voiding fork band with the somatic third-rail note; and the four drug rows as dock cards",
        "productionStatus": "complete",
        "plannedKypVisualId": "micturition-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "micturition-control-sv2",
        "sourcePages": {"part": 1, "pdfPages": [258], "bookPages": "236"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The printed DRUGS / MECHANISM / APPLICATIONS table (book 236): the four drug classes routed through three smooth-muscle receptors, with the book's circled ❶❶❷❸ cross-reference markers linking each row to the figure's receptor labels",
        "sourceFigureDescription": "A three-column table — DRUGS | MECHANISM | APPLICATIONS — with four rows: ❶ Muscarinic agonists (eg, bethanechol) | ⊕ M₃ receptor → contraction of detrusor smooth muscle → ↑ bladder emptying | Urinary retention; ❶ Muscarinic antagonists (eg, oxybutynin) | ⊝ M₃ receptor → relaxation of detrusor smooth muscle → ↓ detrusor overactivity | Urgency incontinence; ❷ Sympathomimetics (eg, mirabegron) | ⊕ β₃ receptor → relaxation of detrusor smooth muscle → ↑ bladder capacity | Urgency incontinence; ❸ α₁-antagonists (eg, tamsulosin) | ⊝ α₁-receptor → relaxation of smooth muscle (eg, bladder, neck, prostate) → ↓ urinary obstruction | BPH. The drug-class names print in blue with the example drugs' first letters in the First Aid red (the mnemonic's red-initial anchor); the circled numbers are vector drawings (not text-layer characters). The text layer interleaves the four subscript digits (3, 3, 3, 1) and the row tails on separate lines below the row heads (the m38 convention) — the logical table above is reconstructed from the 300dpi VLM crops.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "micturition-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "carried VERBATIM in printed row order in the note's table block (blocks[1], with the ❶❶❷❸ circled cross-reference markers and the interleave documented in the caption) and echoed as the four numbered dock cards in the registry visual (MicturitionMap in visuals/pharm-p12.tsx, Zone D); the mnemonic red-initial anchor is documented in the memory callout (blocks[4])",
        "productionStatus": "complete",
        "plannedKypVisualId": "micturition-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph12"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "micturition-control.json").write_text(json.dumps(m12, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "micturition-control.json").write_text(
    json.dumps({"topicId": "micturition-control", "chapterId": "pharmacology", "inventory": inv12,
                "coverageAudit": {"topicId": "micturition-control", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "TWO visual assets on the source half: [1] the bladder innervation figure — a mixed composite (pdfimages: three spot-color raster anatomy layers + vector text labels; VLM available this session, three passes, staging-ph12/vlm-census.txt) — accounted for as an ORIGINAL KYP REDRAW: the registry visual micturition-map (MicturitionMap in visuals/pharm-p12.tsx) redraws the wiring with original KYP glyphs while preserving every printed label, the three nerves (including the hypogastric branch to BOTH storage targets), the two sphincters, the receptor placements, the book's ❶❷❸ cross-reference circles, and the retention/voiding opposition; the First Aid mnemonic 'Baby one more time.' prints inside the figure's right text column and is carried ATTRIBUTED (adjudication documented). [2] the printed DRUGS/MECHANISM/APPLICATIONS table — accounted for as an ORIGINAL KYP ADAPTATION: carried verbatim in printed row order in the note's table block and echoed as the visual's four numbered dock cards. Nothing is reproduced; coverage reconciles to 100% (accountedFor = textbookVisualCount, unresolved 0, omissions none). SHARED PAGE: the bottom half of pdf 258 / book 236 (Tissue distribution of adrenergic receptors) is the sibling topic adrenergic-receptor-distribution; the indd footer at the page foot is likewise out of PH12 scope. STAGED under .usmle-pipeline-cache/staging-ph12/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH12 manifest + inventory staged: {OUT}/manifests/micturition-control.json, {OUT}/visual-inventory/micturition-control.json")
print(f"micturition-control: evidence {len(kept)}/{len(E12)} verified")
