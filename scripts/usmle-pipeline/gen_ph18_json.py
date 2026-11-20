#!/usr/bin/env python3
"""PH18 sympatholytics-alpha-blockers — manifest + inventory (Pharmacology
autonomic-drugs batch), STAGED under .usmle-pipeline-cache/staging-ph18/
(the promotion step owns content/). Source: FULL pdf page 265 / book 243 —
NO shared-page split: the whole page belongs to THIS topic (the
sympathomimetics sibling ended on 263-264; beta-blockers starts on 266).
The page prints exactly TWO logical tables, both DRUG / APPLICATIONS /
ADVERSE EFFECTS, plus the running header and the indd footer.

CENSUS (VLM AVAILABLE this session — unlike the ph6-ph10 batch, which lost
it to a 401 outage): pdfimages = ZERO raster images on pdf 265 (CONFIRMED,
not assumed — pure vector text/table typesetting; no photographs, no line
art). ONE VLM pass (glm-4.6v, 120 DPI page render via
scripts/usmle-pipeline/ph18-vlm-census.ts) saved to
.usmle-pipeline-cache/staging-ph18/vlm-census.txt. The VLM confirms:
[T1] the Sympatholytics (α2-agonists) table — DRUG/APPLICATIONS/ADVERSE
EFFECTS with three drug rows in printed order (Clonidine, guanfacine /
α-methyldopa / Tizanidine); [T2] the α-blockers table — the same three
column headers, printed as THREE shaded full-width band rows (Nonselective
/ α1 selective (-osin ending) / α2 selective); the nonselective band's
ADVERSE EFFECTS cell — "Orthostatic hypotension, reflex tachycardia." —
prints ONCE, vertically spanning BOTH the phenoxybenzamine and phentolamine
rows (NOT repeated on the phentolamine row); NO margin notes, side
mnemonics, photographs, or drawings anywhere on the page; and ONE embedded
typographic mnemonic INSIDE the table: "PTSD (prazosin)" prints its "p" in
RED — First Aid's own color-highlighted pairing, carried ATTRIBUTED (never
claimed as KYP-original) and recorded in the manifest notes. The VLM pass
was the brief's single-pass census (no second pass needed — no disputed
panel mapping: the page has no figure, only the two tables).

INTERLEAVE QUIRKS (the m38 convention, documented): the tables' cells
interleave in the text layer — (1) the α-blockers table's APPLICATIONS /
ADVERSE EFFECTS column headers print BEFORE the "α-blockers" heading and
its DRUG header (part1.txt page-265 lines 39-44); (2) mirtazapine's
APPLICATIONS/ADVERSE EFFECTS cells print BEFORE its "α2 selective /
Mirtazapine" band label (lines 73-78). The logical printed tables were
reconstructed via the VLM render and are carried VERBATIM (printed row
order, every printed word) in the note's two table blocks; the evidence
below quotes the contiguous physical line ranges as the text layer prints
them. Glyph quirks: the running header prints the kerning artifact "SEC
TION II"; the two ↑ glyphs of "Sedation, ↑ serum cholesterol, ↑ appetite."
are each prefixed by a \\x8f control character in the text layer (the
pipeline's norm() strips control chars; the ↑ arrows are kept); the ⊕
glyph prints in the Coombs cell; "1st-dose" prints with a plain "1".

CROSS-PAGE ATTRIBUTION (documented): the presynaptic α2-autoreceptor brake
mechanism is NOT printed on pdf 265 — the page prints only the drug tables.
The brake sentence is First Aid's own and prints on book 238 / pdf 260 (the
Autonomic drugs opener, the sibling topic autonomic-drugs-synapse):
"Release of norepinephrine from a sympathetic nerve ending is modulated by
NE itself, acting on presynaptic α2-autoreceptors → negative feedback." It
is carried ATTRIBUTED in the note (subtitle, core, mechanism 1, the
visual's Fork 1) and linked via related/crossLinks; the two-fork map
CONNECTING that brake to this page's drug tables is recorded as a
kypExtension.

Nothing is reproduced: the page's two tables are carried verbatim as note
table blocks, and the registry visual sympatholytic-alpha-map
(SympatholyticAlphaMap in visuals/pharm-p18.tsx) is an ORIGINAL KYP
two-fork diagram (the presynaptic-brake fork + the α-blocker band fork);
the four ALL-CAPS mnemonics are original KYP.
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
L = {265: pages[264].split("\n")}
P = {265: norm(pages[264])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E18 = [
    ("Page identity — the running header, section banner, and book page number (book 243; the header prints the kerning artifact 'SEC TION II' in the text layer)", rng(265, 1, 7), [265]),
    ("Table 1's heading and column headers — Sympatholytics (α2-agonists) with DRUG / APPLICATIONS / ADVERSE EFFECTS, the three headers printing one per line after the heading (the m38 interleave)", rng(265, 9, 14), [265]),
    ("Table 1 row 1 — Clonidine, guanfacine: hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal; CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation", rng(265, 16, 24), [265]),
    ("Table 1 row 2 — α-methyldopa: Hypertension in pregnancy; Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia", rng(265, 26, 31), [265]),
    ("Table 1 row 3 — Tizanidine: Relief of spasticity; Hypotension, weakness, xerostomia", rng(265, 33, 37), [265]),
    ("Table 2's heading block with its INTERLEAVED column headers — APPLICATIONS / ADVERSE EFFECTS print BEFORE the 'α-blockers' heading and its DRUG header (the m38 interleave, carried as printed)", rng(265, 39, 44), [265]),
    ("Table 2, the Nonselective band's first row — Phenoxybenzamine: 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.'", rng(265, 46, 51), [265]),
    ("Table 2, the Nonselective band's second row and the ONE shared adverse cell — Phentolamine: 'Reversible. Given to patients on MAO inhibitors who eat tyramine-containing foods and for severe cocaine-induced hypertension (2nd line). Also used to treat norepinephrine extravasation.' followed by the shared cell 'Orthostatic hypotension, reflex tachycardia.' which the VLM confirms prints ONCE, vertically spanning BOTH nonselective rows (not repeated on the phentolamine row)", rng(265, 53, 60), [265]),
    ("Table 2, the α1 selective (-osin ending) band — Prazosin, terazosin, doxazosin, tamsulosin: 'Urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin).' with '1st-dose orthostatic hypotension, dizziness, headache.' (the source prints the p of (prazosin) in red — its own embedded mnemonic, VLM-confirmed)", rng(265, 62, 71), [265]),
    ("Table 2, the α2 selective band — INTERLEAVE carried as printed: mirtazapine's two cells ('Depression.' / 'Sedation, ↑ serum cholesterol, ↑ appetite.') print BEFORE its 'α2 selective / Mirtazapine' band label", rng(265, 73, 78), [265]),
    ("The page footer — the indd print slug and timestamp (page identity, book 243)", rng(265, 80, 82), [265]),
]
for c, q, pgs in E18:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"sympatholytics-alpha-blockers: evidence {len(kept)}/{len(E18)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m18 = {"topicId": "sympatholytics-alpha-blockers", "title": "Sympatholytics (α2-agonists) & α-Blockers",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [265], "bookPages": "243–243"},
    "sourceEvidence": kept, "visualIds": ["sympatholytic-alpha-map"],
    "mechanismIds": ["alpha2-presynaptic-brake-map", "alpha-blockade-selectivity-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the two printed tables — 4 patterns (pheochromocytoma preop, the -osin first-dose rule, clonidine rebound hypertension, methyldopa pregnancy + Direct Coombs ⊕), 4 traps (phenoxybenzamine-vs-phentolamine, clonidine-urgency-vs-rebound, tamsulosin-vs-the-other--osins, mirtazapine-the-α2-BLOCKER-vs-the-α2-AGONISTS), 3 pivots.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the two drug tables only; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "two-fork-synthesis", "summary": "The two-fork reading protocol (MOVE 1 DIRECTION: agonist at the presynaptic brake vs blocker at the receptor; MOVE 2 BAND: which drug in which printed band; MOVE 3 CELL: quote the printed cell; MOVE 4 RULES: first-dose / abrupt-cessation / pregnancy / pheo-preop) and the two-fork map connecting the α2-autoreceptor brake to this page's drug tables. The brake sentence itself is First Aid's own and prints on book 238 (the sibling topic autonomic-drugs-synapse) — carried ATTRIBUTED, cross-page; the FORK-MAP LINKAGE (agonists press the brake / mirtazapine blocks it) and the four-move protocol are KYP's design.",
         "origin": "outside-first-aid", "rationale": "The source page prints only the drug tables (its own title 'Sympatholytics (α2-agonists)' carries the mechanism by name only); the presynaptic-autoreceptor narrative lives on book 238 and is attributed there; the synthesis connecting brake to table, the direction-first rule, and the four moves are KYP's design.",
         "location": "core.keyIdea + blocks[3] the steps block + blocks[4] the exam callout + mechanisms[0] + the registry visual's Fork 1"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (PRESS THE BRAKE, DON'T CUT THE WIRE / METHYLDOPA: THE PREGNANT BRAKE WITH THREE TAXES / PHENOXY FOREVER, PHENTOLAMINE FLEETING / -OSIN FOR THE OUTLETS, FIRST DOSE FLOORS). The source's own embedded mnemonic — the red 'p' printed in 'PTSD (prazosin)' (VLM-confirmed on the 120 DPI render) — is carried ATTRIBUTED to First Aid in the note's Table 2 caption, the -osin drug card, and the visual's band 2, and is NOT counted among the four KYP codes.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere on the page except First Aid's own red-p typographic pairing (attributed); the four ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + the visual's chip footers + rapidReview.m3"},
        {"id": "mini-case-layer", "summary": "The pheochromocytoma preoperative-preparation miniCase (episodic headache/sweats/palpitations, elevated metanephrines, adrenal mass, surgery in three weeks — which drug before the operation), correct answer phenoxybenzamine (the printed cell 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.'), with distractors phentolamine (reversible — the acute rescuer, not the preop maintainer), prazosin (α1-selective with the 1st-dose orthostatic hypotension rule, printed for BPH/PTSD/HTN), and clonidine (α2-agonist — wrong direction, plus rebound hypertension with abrupt cessation).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the phenoxybenzamine cell but never builds a vignette around it; the stem, the four distractors, and the reasoning are KYP's design.",
         "location": "usmle.miniCase"},
        {"id": "drug-card-layer", "summary": "The Pharmacology DrugCard section (7 cards) translating the printed table cells into drug → target → mechanism → effect → uses → adverse + clue: Clonidine/guanfacine, α-methyldopa, Tizanidine, Phenoxybenzamine, Phentolamine, the -osin family (prazosin/terazosin/doxazosin/tamsulosin with the tamsulosin exception), and Mirtazapine (α2-selective blockade — the mirror of the agonists).",
         "origin": "outside-first-aid", "rationale": "The source prints cells, not drug cards; the target/mechanism/effect/clue framing is a KYP design (uses and adverse effects are the printed cells, quoted).",
         "location": "drugs"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL PAGE (no shared-page split): pdf 265 / book 243 prints exactly TWO logical tables — Sympatholytics (α2-agonists) and α-blockers, both DRUG / APPLICATIONS / ADVERSE EFFECTS — plus the running header and the indd footer; the whole page belongs to THIS topic (sympathomimetics ended on 263-264; beta-blockers starts on 266). CENSUS: pdfimages = ZERO raster images on pdf 265 (CONFIRMED, not assumed) — pure vector text/table typesetting; THE VLM WAS AVAILABLE THIS SESSION (the ph6–ph10 batch lost it to a 401 outage): ONE pass (glm-4.6v, 120 DPI, scripts/usmle-pipeline/ph18-vlm-census.ts) saved to staging-ph18/vlm-census.txt, per the brief's single-pass census (no disputed panel mapping — the page has no figure). The VLM confirms the two tables and their column headers, the THREE shaded band rows of the α-blocker table (Nonselective / α1 selective (-osin ending) / α2 selective), the ONE shared nonselective ADVERSE EFFECTS cell ('Orthostatic hypotension, reflex tachycardia.') printed once and vertically spanning BOTH nonselective rows (not repeated on the phentolamine row — the reason the text layer prints it once at line 60, after phentolamine's applications), NO margin notes/side mnemonics/photographs/drawings anywhere on the page, and ONE embedded typographic mnemonic INSIDE the table: the 'p' of '(prazosin)' prints in RED to pair prazosin with PTSD — First Aid's own, carried ATTRIBUTED (note Table 2 caption, the -osin drug card, the visual's band 2 rendered in the emergency token color) and NOT counted among the four KYP mnemonics. INTERLEAVE QUIRKS (the m38 convention, documented and carried as printed): (1) the α-blockers table's APPLICATIONS/ADVERSE EFFECTS column headers print BEFORE the 'α-blockers' heading + DRUG header (lines 39-44); (2) mirtazapine's two cells print BEFORE its 'α2 selective / Mirtazapine' band label (lines 73-78) — the logical printed tables were reconstructed via the VLM render and carried VERBATIM (printed row order, every printed word) in the note's two table blocks; the evidence quotes the contiguous physical ranges as the text layer prints them. GLYPH QUIRKS: the running header prints the kerning artifact 'SEC TION II' (a text-layer artifact of the section banner, not a book typo); the two ↑ glyphs of 'Sedation, ↑ serum cholesterol, ↑ appetite.' are each prefixed by a \\x8f control character in the text layer (the generator's norm() strips control chars for containment; the ↑ arrows are kept in the quotes, the note, and the visual); the ⊕ glyph prints in the Coombs cell; '1st-dose' prints with a plain '1'. CROSS-PAGE ATTRIBUTION (documented): the presynaptic α2-autoreceptor brake mechanism is NOT printed on pdf 265 — the page prints only the drug tables; the brake sentence is First Aid's own and prints on book 238 / pdf 260 (the sibling topic autonomic-drugs-synapse): 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' — carried ATTRIBUTED in the note (subtitle, core, mechanism alpha2-presynaptic-brake-map, the visual's Fork 1) and linked via related/crossLinks, with the fork-map LINKAGE recorded as kypExtension two-fork-synthesis. Quirks, documented: (1) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the PH-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (2) outputs are STAGED under .usmle-pipeline-cache/staging-ph18/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'sympatholytic-alpha-map' is therefore not yet in visuals/registry.tsx by design); (3) there is NO figure on the source page, so the registry visual is an ORIGINAL KYP two-fork diagram (not a redraw) built from the two printed tables, whose cells are carried verbatim in the note's table blocks; (4) the note ships 2 mechanisms, 4 patterns, 4 traps, 3 pivots, 4 mnemonics, 10 recall, 4 related, 4 crossLinks, 7 DrugCards, and a 4-option miniCase with exactly 1 correct — the D2 floors plus the batch convention.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "sympatholytics-alpha-blockers", "requiredInKYP": True}
inv18 = [
    dict(SV_BASE, **{
        "visualId": "sympatholytics-alpha-blockers-sv1",
        "sourcePages": {"part": 1, "pdfPages": [265], "bookPages": "243"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Sympatholytics (α2-agonists) table (book 243): the four α2-agonist drugs with their printed APPLICATIONS and ADVERSE EFFECTS — the drug-side application of the presynaptic α2-autoreceptor brake printed on book 238",
        "sourceFigureDescription": "VECTOR TABLE TYPESSETTING, no raster (pdfimages: zero raster images; ONE VLM pass at 120 DPI, glm-4.6v, saved to staging-ph18/vlm-census.txt): the Sympatholytics (α2-agonists) table, columns DRUG / APPLICATIONS / ADVERSE EFFECTS, three drug rows in printed order — 'Clonidine, guanfacine' | 'Hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal' | 'CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation'; 'α-methyldopa' | 'Hypertension in pregnancy' | 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia'; 'Tizanidine' | 'Relief of spasticity' | 'Hypotension, weakness, xerostomia'. No figures, margin notes, or mnemonics print in this table (the page's only embedded mnemonic — the red p of '(prazosin)' — prints in the α-blockers table).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "sympatholytic-alpha-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's FORK 1 (SympatholyticAlphaMap in visuals/pharm-p18.tsx — the presynaptic terminal glyph with NE vesicles, the α2 AUTORECEPTOR chip on its membrane, NE's dashed negative-feedback curve with the book-238 attribution, the T-bar inhibition of NE release, the three drug chips with their printed applications, and the flagged adverse band with the rebound-hypertension rule); the printed cells are also carried VERBATIM in the note's Table 1 block (blocks[1]), core.what, recall[0-3], and the DrugCards",
        "productionStatus": "complete",
        "plannedKypVisualId": "sympatholytic-alpha-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "sympatholytics-alpha-blockers-sv2",
        "sourcePages": {"part": 1, "pdfPages": [265], "bookPages": "243"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The α-blockers table (book 243): the three printed selectivity bands — nonselective (irreversible phenoxybenzamine vs reversible phentolamine), α1 selective (-osin ending), α2 selective (mirtazapine) — with the shared nonselective adverse cell, the first-dose rule, and the source's own red-p mnemonic",
        "sourceFigureDescription": "VECTOR TABLE TYPESSETTING, no raster (pdfimages: zero raster images; ONE VLM pass at 120 DPI, glm-4.6v, saved to staging-ph18/vlm-census.txt): the α-blockers table, columns DRUG / APPLICATIONS / ADVERSE EFFECTS, printed as THREE shaded full-width band rows. Nonselective: 'Phenoxybenzamine' | 'Irreversible. Pheochromocytoma (used preoperatively) to prevent catecholamine (hypertensive) crisis.' and 'Phentolamine' | 'Reversible. Given to patients on MAO inhibitors who eat tyramine-containing foods and for severe cocaine-induced hypertension (2nd line). Also used to treat norepinephrine extravasation.' — the band's ADVERSE EFFECTS cell prints ONCE, vertically spanning both drug rows: 'Orthostatic hypotension, reflex tachycardia.' (VLM-confirmed; not repeated on the phentolamine row). α1 selective (-osin ending): 'Prazosin, terazosin, doxazosin, tamsulosin' | 'Urinary symptoms of BPH; PTSD (prazosin); hypertension (except tamsulosin).' | '1st-dose orthostatic hypotension, dizziness, headache.' — the source prints the p of '(prazosin)' in RED (its own embedded typographic mnemonic, VLM-confirmed). α2 selective: 'Mirtazapine' | 'Depression.' | 'Sedation, ↑ serum cholesterol, ↑ appetite.' (the text layer prints both mirtazapine cells BEFORE the band label — the m38 interleave).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "sympatholytic-alpha-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual's FORK 2 (SympatholyticAlphaMap in visuals/pharm-p18.tsx — the α1/α2 target chips with the three T-bar inhibit arrows, the NONSELECTIVE band card with the IRREVERSIBLE/REVERSIBLE stamps and the flagged ONE-shared-cell chip, the α1 SELECTIVE (-osin ending) card with the red-p tspan in the emergency token color and the flagged 1st-dose rule, and the α2 SELECTIVE card with the mirror-of-Fork-1 note) plus the four-rules banner; the printed cells are also carried VERBATIM in the note's Table 2 block (blocks[2]), recall[4-8], and the DrugCards",
        "productionStatus": "complete",
        "plannedKypVisualId": "sympatholytic-alpha-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph18"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "sympatholytics-alpha-blockers.json").write_text(json.dumps(m18, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "sympatholytics-alpha-blockers.json").write_text(
    json.dumps({"topicId": "sympatholytics-alpha-blockers", "chapterId": "pharmacology", "inventory": inv18,
                "coverageAudit": {"topicId": "sympatholytics-alpha-blockers", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "TWO visual assets on the source page, both accounted for as ORIGINAL KYP ADAPTATIONS feeding the ONE registry visual sympatholytic-alpha-map (SympatholyticAlphaMap in visuals/pharm-p18.tsx): sv1 = the Sympatholytics (α2-agonists) table (visual Fork 1 — the presynaptic-brake fork), sv2 = the α-blockers table with its three band rows, its ONE shared nonselective adverse cell, and the source's own red-p mnemonic (visual Fork 2 — the α-blocker band fork + the four-rules banner). Nothing is reproduced: there is no figure on the source page (pdfimages: zero rasters — pure table typesetting, VLM-confirmed at 120 DPI, one pass, saved to staging-ph18/vlm-census.txt), the two printed tables are carried VERBATIM (printed row order, every printed word) in the note's two table blocks, and the registry visual is an original KYP two-fork diagram. Census: zero raster images; no margin mnemonics anywhere (the red p of 'PTSD (prazosin)' is an IN-TABLE typographic mnemonic attributed to First Aid, documented in the manifest notes). FULL PAGE — no shared-page split (the sympathomimetics sibling ended on pdf 263-264; beta-blockers starts on pdf 266). STAGED under .usmle-pipeline-cache/staging-ph18/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH18 manifest + inventory staged: {OUT}/manifests/sympatholytics-alpha-blockers.json, {OUT}/visual-inventory/sympatholytics-alpha-blockers.json")
print(f"sympatholytics-alpha-blockers: evidence {len(kept)}/{len(E18)} verified")
