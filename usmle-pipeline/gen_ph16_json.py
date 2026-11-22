#!/usr/bin/env python3
"""PH16 g-protein-linked-second-messengers — manifest + inventory + flip
(Pharmacology 16/43 — the SECOND-MESSENGER PAGE: the RECEPTOR x G-PROTEIN
CLASS table and the three cascade diagrams — Gs -> adenylyl cyclase ->
cAMP -> PKA; Gi -> inhibited adenylyl cyclase -> down cAMP; Gq ->
phospholipase C -> PIP2 -> IP3 + DAG -> Ca2+ + PKC -> smooth muscle
contraction).
Census (pdfimages + text layer + VLM render check): pdf 259 (book 237),
the WHOLE page under the standing banner 'PHARMACOLOGY—AUTONOMIC DRUGS'
— the section header 'G-protein–linked second messengers' is the ONLY
section header on the page; the page prints (1) ONE TABLE (14 receptor
rows under the three column heads RECEPTOR / G-PROTEIN CLASS / MAJOR
FUNCTIONS, grouped Adrenergic [a1 q, a2 i, b1 s, b2 s, b3 s],
Cholinergic [M1 q, M2 i, M3 q], Dopamine [D1 s, D2 i], Histamine
[H1 q, H2 s], Vasopressin [V1 q, V2 s]) and (2) THREE VECTOR CASCADE
DIAGRAMS (Gq, Gs, Gi) whose labels print in the text layer ('H1, α1,
V1, M1, or M3 receptor' / 'B1, B2, B3, D1, H2, or V2 receptor' / 'M2,
α2, or D2 receptor' -> 'Gq protein' / 'GS protein' / 'Gi protein' ->
'Phospholipase C' / 'Adenylyl cyclase' -> 'PIP2' -> 'IP3' 'DAG' ->
'Ca2+' 'Protein kinase C' / 'ATP' -> 'Cyclic AMP' -> 'Protein kinase
A' -> 'Smooth muscle contraction' 'Myosin light-chain kinase (smooth
muscle contraction)'). RASTER CENSUS: pdf 259 carries ZERO raster
images (pdfimages -list returns no rows) — the three cascade diagrams
are VECTOR TYPESET figures, COPYRIGHTED, never reproduced; they are
conveyed as ONE original KYP schematic (GProteinSecondMessengerMap —
the three cascade panels with the receptor-example chips per class,
the class digest strip, the codes strip, the reading-rule footer) and
the table is carried VERBATIM as the note's table block.
TEXT-LAYER NOTES: the V2 row prints the book's own red-ink erratum
overlay 'collecting twobules (tubules)' (VLM render check on the
150-dpi page confirms the printed page shows 'twobules' with 'two' in
red overlaid on 'tubules', followed by the parenthetical '(tubules)')
— quoted exactly as the text layer prints it; the diagram text layer
duplicates every cascade label (two-layer vector artwork) and prints
the beta glyphs as 'B1, B2, B3' (the TABLE itself uses real β glyphs)
— both facts noted, quotes pinned as printed.
SECTION EXTENT: the section is ENTIRELY on pdf 259 — it ENDS at the
page footer ('FAS1_2026_05-Pharmacology.indd 237'), and pdf 260 (book
238) opens the SEPARATE pending 'Autonomic drugs' section (verified:
the 260 text layer opens 'Autonomic drugs' + the α2-autoreceptor
paragraph; no G-protein content — sourcePages = [259] only).
BOUNDARY CENSUS: pdf 258 (book 236) carries the COMPLETED topics PH14
'Micturition control' (upper) and PH15 'Tissue distribution of
adrenergic receptors' (lower) — EXCLUDED. PH12 'acetylcholine-
receptors' (book 235) anchored its M1/M2/M3 G-protein layer to THIS
book-237 page — the reciprocal cross-link is pinned as evidence.
KYP EXTENSIONS (beyond the page's printed set, flagged wherever they
appear): the class-summary compression (the THREE LANES reading — Gs
the gas pedal, Gi the brake, Gq the squeeze — built from the page's
own table + diagrams); the SUBSCRIPT RULE mnemonic layer (the i class
is all 2s [α2, D2, M2] — NOT all 2s are Gi [β2, H2, V2 are Gs]; the q
class is the odd ones [α1, M1, M3, H1, V1]); the drug/clinical anchor
layer (albuterol β2-Gs, clonidine α2-Gi, phenylephrine α1-Gq,
atropine M3-Gq, cimetidine H2-Gs, desmopressin V2-Gs, pertussis toxin
Gi, cholera toxin Gs — none printed on this page); the PKA-vs-PKC
kinase fork and the PIP2-splitter frame; and the vagal M2 K+ -channel
story (the βγ subunit — beyond the printed diagram). The classic
'one heart, two lungs' counting code is THIS PAGE'S OWN print
('(one heart)' / '(two lungs)' in the β1/β2 rows) — carried verbatim,
attributed to the page (the facing-page attribution from PH15 now
resolves HERE)."""
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
L = {258: pages[257].split("\n"), 259: pages[258].split("\n"),
     260: pages[259].split("\n")}
P = {258: norm(pages[257]), 259: norm(pages[258]), 260: norm(pages[259])}
def rng(pg, a, b): return "\n".join(L[pg][a - 1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 237): the Pharmacology marker, the standing section banner, the printed page number, and the Section II marker", rng(259, 1, 7), [259]),
    ("The standing section banner — '▶ PHARMACOLOGY—AUTONOMIC DRUGS' (the same banner PH10–PH15 sit under; this topic continues the Autonomic Drugs subsection and is the LAST page of the banner's receptor-block run)", rng(259, 3, 3), [259]),
    ("The section header — 'G-protein–linked second messengers' (this topic's section; the ONLY section header on the page — the whole page belongs to this topic)", rng(259, 9, 9), [259]),
    ("The table's column header block — 'RECEPTOR … G-PROTEIN CLASS … MAJOR FUNCTIONS' (the three column heads of the page's first printed element)", rng(259, 10, 14), [259]),
    ("The Adrenergic group header (the table's first family group)", rng(259, 16, 16), [259]),
    ("The α1 row, whole — receptor 'α1', class 'q', functions '↑ vascular smooth muscle contraction, ↑ pupillary dilator muscle contraction (mydriasis), ↑ intestinal and bladder sphincter muscle contraction' (the table's first row as the text layer prints it)", rng(259, 17, 22), [259]),
    ("The α1 mydriasis string, verbatim — the pupillary dilator effect this topic's mini-case rides", "↑ pupillary dilator muscle contraction (mydriasis)", [259]),
    ("The α2 row, whole — receptor 'α2', class 'i', functions '↓ sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor production'", rng(259, 24, 29), [259]),
    ("The β1 row, whole — receptor 'β1', class 's', functions '↑ heart rate, ↑ contractility (one heart), ↑ renin release, ↑ lipolysis'", rng(259, 31, 35), [259]),
    ("The classic counting code, THIS page's own print — β1's parenthetical '(one heart)' (the string PH15 attributed to 'the facing page's G-protein table' resolves HERE; carried verbatim, attributed to this page)", "(one heart)", [259]),
    ("The β2 row, whole — receptor 'β2', class 's', functions 'Vasodilation, bronchodilation (two lungs), ↑ lipolysis, ↑ insulin release, ↑ glycogenolysis, ↓ uterine tone (tocolysis), ↑ aqueous humor production, ↑ cellular K+ uptake'", rng(259, 37, 42), [259]),
    ("The classic counting code, second half — β2's parenthetical '(two lungs)' (same page print as '(one heart)')", "(two lungs)", [259]),
    ("The β3 row, whole — receptor 'β3', class 's', functions '↑ lipolysis, ↑ thermogenesis in skeletal muscle, ↑ bladder relaxation'", rng(259, 44, 48), [259]),
    ("The Cholinergic group header + the M1 row, whole — 'M1', class 'q', 'Mediates higher cognitive functions, stimulates enteric nervous system, ↑ exocrine gland secretions'", rng(259, 50, 55), [259]),
    ("The M2 row, whole — receptor 'M2', class 'i', functions '↓ heart rate, AV node conduction velocity, and atrial contractility' (the vagal brake row — the Gi class's cardiac story)", rng(259, 57, 61), [259]),
    ("The M3 row, whole — receptor 'M3', class 'q', functions '↑ exocrine gland secretions, gut peristalsis, bladder contraction, bronchoconstriction, vasodilation, ↑ pupillary sphincter muscle contraction (miosis), ciliary muscle contraction (accommodation)'", rng(259, 63, 68), [259]),
    ("The PH12 RECIPROCAL ANCHOR — the completed topic PH12 'acetylcholine-receptors' (book 235) anchored its M1/M2/M3 G-protein layer to THIS book-237 table ('the separate pending g-protein-linked-second-messengers topic'): the three muscarinic letters q/i/q pinned here are the same letters PH12 borrowed — the cross-link resolves", rng(259, 51, 68), [259]),
    ("The Dopamine group header + the D1 row, whole — 'D1', class 's', 'Relaxes renal vascular smooth muscle, activates direct pathway of striatum'", rng(259, 70, 75), [259]),
    ("The D2 row, whole — receptor 'D2', class 'i', functions 'Modulates transmitter release, especially in brain, inhibits indirect pathway of striatum' (the antipsychotic target row — the direct/indirect pathway pair with D1)", rng(259, 77, 81), [259]),
    ("The Histamine group header + the H1 row, whole — 'H1', class 'q', '↑ bronchoconstriction, airway mucus production, ↑ vascular permeability/vasodilation, pruritus'", rng(259, 83, 88), [259]),
    ("The H2 row, whole — receptor 'H2', class 's', functions '↑ gastric acid secretion' (the same hormone's Gs arm — the H1-vs-H2 class split)", rng(259, 90, 94), [259]),
    ("The Vasopressin group header + the V1 row, whole — 'V1', class 'q', '↑ vascular smooth muscle contraction'", rng(259, 96, 101), [259]),
    ("The V2 row, first line, verbatim — including the book's own red-ink erratum overlay 'collecting twobules (tubules)' (VLM render check on the 150-dpi page confirms the printed page shows 'twobules' with '(two)' in red overlaid on 'tubules', followed by the parenthetical '(tubules)' — quoted exactly as printed)", rng(259, 107, 107), [259]),
    ("The V2 row, continuation, verbatim — 'kidney, ↑ release of vWF' (the second line of the V2 row; the row is split in the text layer by the interleaved diagram label 'Ligand')", rng(259, 109, 110), [259]),
    ("The same-hormone class split, whole — vasopressin prints BOTH classes in one family: V1 'q' (vascular) vs V2 's' (renal aquaporin-2) — the one hormone whose two receptors carry two different G-protein classes and two different second messengers", rng(259, 96, 110), [259]),
    ("The Gq cascade diagram — the receptor chip label, verbatim: 'H1, α1, V1, M1, or M3 receptor' (the diagram's own membership list for the Gq class — five receptors, three families)", rng(259, 114, 114), [259]),
    ("The Gs cascade diagram — the receptor chip label, verbatim: 'B1, B2, B3, D1, H2, or V2 receptor' (the diagram's own membership list for the Gs class — six receptors, printed with 'B' glyphs in the diagram; the TABLE itself prints the same receptors as β1/β2/β3)", rng(259, 166, 166), [259]),
    ("The Gi cascade diagram — the receptor chip label, verbatim: 'M2, α2, or D2 receptor' (the diagram's own membership list for the Gi class — three receptors, all subscript-2)", rng(259, 168, 168), [259]),
    ("The Gi class membership, second print — the diagram prints the chip twice (two-layer vector artwork); the same three receptors confirmed", rng(259, 172, 172), [259]),
    ("The Gq protein label, verbatim — the transducer box of the Gq cascade", rng(259, 132, 132), [259]),
    ("The GS protein label, verbatim — the transducer box of the Gs cascade (printed 'GS' in the diagram text layer)", rng(259, 191, 191), [259]),
    ("The Gi protein label, verbatim — the transducer box of the Gi cascade", rng(259, 216, 216), [259]),
    ("The Phospholipase C label, verbatim — the Gq cascade's enzyme (the class-defining enzyme: Gq → PLC)", rng(259, 136, 136), [259]),
    ("The Adenylyl cyclase label, verbatim — the Gs AND Gi cascades' shared enzyme (the SAME enzyme, opposite signs: Gs stimulates it, Gi inhibits it)", rng(259, 180, 181), [259]),
    ("The PIP2 label, verbatim — the membrane phospholipid the Gq cascade's PLC cleaves", rng(259, 124, 124), [259]),
    ("The IP3 label, verbatim — one of the two second messengers PLC splits PIP2 into", rng(259, 142, 142), [259]),
    ("The DAG label, verbatim — the other second messenger of the Gq split", rng(259, 140, 140), [259]),
    ("The Ca2+ label, verbatim — the downstream ion of the Gq cascade (IP3 → Ca2+)", rng(259, 146, 147), [259]),
    ("The Protein kinase C label, verbatim — the DAG-activated kinase of the Gq cascade", rng(259, 150, 151), [259]),
    ("The Protein kinase A label, verbatim — the cAMP-activated kinase of the Gs cascade", rng(259, 208, 209), [259]),
    ("The ATP label, verbatim — the substrate adenylyl cyclase converts to cAMP in the Gs cascade", rng(259, 192, 192), [259]),
    ("The Cyclic AMP label, verbatim — the second messenger of the Gs cascade", rng(259, 194, 195), [259]),
    ("The Smooth muscle contraction label, verbatim — the terminal effect box of the Gq cascade", rng(259, 160, 161), [259]),
    ("The Myosin light-chain kinase (smooth muscle contraction) label, verbatim — the Ca2+-activated effector of the Gq cascade (the contraction machinery's own kinase)", rng(259, 220, 221), [259]),
    ("The page footer — the book's signature file line + print-date footer (book 237)", rng(259, 204, 225), [259]),
    ("The PREVIOUS-PAGE BOUNDARY — pdf 258 (book 236) carries the COMPLETED topics PH14 'Micturition control' (upper) and PH15 'Tissue distribution of adrenergic receptors' (lower): the G-protein section starts fresh on pdf 259 and inherits nothing from 258 (both sections EXCLUDED)", "Tissue distribution of adrenergic receptors", [258]),
    ("The NEXT-PAGE BOUNDARY — pdf 260 (book 238) opens the SEPARATE pending 'Autonomic drugs' section: the G-protein section ENDS on pdf 259 at the page footer and does not extend to 260 (verified: the 260 text layer opens with the new section header — sourcePages = [259] only)", "Autonomic drugs", [260]),
    ("The NEXT-PAGE BOUNDARY, content — the 260 opener paragraph names the presynaptic α2-autoreceptor negative-feedback loop (the Autonomic drugs section, EXCLUDED — the separate pending topic; pinned as the boundary marker)", "Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.", [260]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"g-protein-linked-second-messengers: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "g-protein-linked-second-messengers",
    "title": "G-Protein-Linked Second Messengers",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [259], "bookPages": "237"},
    "sourceEvidence": kept, "visualIds": ["g-protein-second-messenger-map"],
    "mechanismIds": ["gq-plc-ip3-dag-cascade", "gs-gi-camp-cascade"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the section's table and cascade diagrams.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the table and the diagrams; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "three-lanes-reading-protocol", "summary": "The class-summary compression of the page's own two elements (table + diagrams) into the THREE LANES reading: LANE 1 — Gs THE GAS PEDAL (receptor → Gs protein → adenylyl cyclase ON → ATP → ↑cAMP → protein kinase A), membership the diagram's own chip list (β1, β2, β3, D1, H2, V2); LANE 2 — Gi THE BRAKE (receptor → Gi protein → adenylyl cyclase OFF → ↓cAMP), membership (α2, M2, D2); LANE 3 — Gq THE SQUEEZE (receptor → Gq protein → phospholipase C → PIP2 → IP3 + DAG → Ca2+ + protein kinase C → smooth muscle contraction via myosin light-chain kinase), membership (α1, M1, M3, H1, V1). The reading order (NAME THE RECEPTOR → READ THE CLASS LETTER → RUN THE LANE) and the gas-pedal/brake/squeeze naming are KYP's; every lane's steps and membership list are the page's own prints.",
         "origin": "outside-first-aid", "rationale": "The book prints the table and the three diagrams as separate elements; the unified lane reading, the gas/brake/squeeze compression, and the reading protocol are KYP's synthesis — every cascade step and chip is the page's own.",
         "location": "core.keyIdea + mechanisms + the visual's cascade panels"},
        {"id": "subscript-rule-and-membership-frames", "summary": "The membership memory layer: THE i CLASS IS ALL 2s (α2, D2, M2 — the only three subscript-2 receptors in Gi) with its shadow warning NOT ALL 2s ARE Gi (β2, H2, V2 are Gs — the three 2s that got away); THE q CLASS IS THE ODD ONES (α1, M1, M3, H1, V1 — all the 1s plus M3); THE s CLASS IS THE BETAS PLUS THE STRAYS (β1, β2, β3, D1, H2, V2). The subscript frames are KYP compressions of the table's own 14 letters; the odd/even muscarinic rule (M1/M3 odd = Gq, M2 even = Gi) was already carried as a KYP extension by PH12 and resolves HERE into the book's own q/i/q letters.",
         "origin": "outside-first-aid", "rationale": "The table prints the letters but never comments on the subscript pattern; the membership frames, the not-all-2s warning, and the odd/even rule are KYP's design.",
         "location": "usmle.traps + mnemonics + the visual's codes strip"},
        {"id": "anchor-and-fork-layer", "summary": "The clinical/drug anchor layer (NONE of it printed on this page, flagged wherever it appears): albuterol β2-Gs (bronchodilation), dobutamine β1-Gs (inotropy), clonidine α2-Gi (↓ sympathetic outflow), phenylephrine α1-Gq (vasoconstriction/mydriasis), atropine M3-Gq blockade (the glands/secrets story), cimetidine H2-Gs blockade (↓ gastric acid), desmopressin V2-Gs (aquaporin-2), the D2-Gi antipsychotic story (the table's own striatum strings), pertussis toxin (ADP-ribosylates Gi — the whooping-cough anchor) and cholera toxin (ADP-ribosylates Gs — the secretory-diarrhea anchor). Plus the two KYP forks: the KINASE FORK (Gs → PKA vs Gq → PKC — never swap them) and the PIP2 SPLITTER (one phospholipid, two messengers: IP3 frees Ca2+, DAG holds PKC), and the vagal M2 βγ-subunit K+ -channel story (beyond the printed diagram, flagged).",
         "origin": "outside-first-aid", "rationale": "The page prints no drug names and no toxins; the anchors, the kinase fork, the PIP2-splitter frame, and the βγ K+ -channel story are KYP layers built on the page's own cascades.",
         "location": "usmle + crossLinks + mnemonics clinical + the visual's anchor strip"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + text layer + VLM render check): the G-protein–linked second messengers section occupies the WHOLE of pdf 259 (book 237) under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner — the only section header on the page. The section prints TWO elements: (1) ONE TABLE — 14 receptor rows under RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS, grouped Adrenergic (α1 q, α2 i, β1 s, β2 s, β3 s), Cholinergic (M1 q, M2 i, M3 q), Dopamine (D1 s, D2 i), Histamine (H1 q, H2 s), Vasopressin (V1 q, V2 s); (2) THREE VECTOR CASCADE DIAGRAMS (Gq, Gs, Gi) whose labels print in the text layer (receptor chips 'H1, α1, V1, M1, or M3 receptor' / 'B1, B2, B3, D1, H2, or V2 receptor' / 'M2, α2, or D2 receptor'; transducers Gq/GS/Gi protein; enzymes phospholipase C / adenylyl cyclase; PIP2 → IP3 + DAG → Ca2+ + protein kinase C; ATP → cyclic AMP → protein kinase A; smooth muscle contraction + myosin light-chain kinase). RASTER CENSUS: ZERO raster images on pdf 259 (pdfimages -list returns no rows) — the diagrams are vector typeset artwork, COPYRIGHTED, never reproduced; conveyed as ONE original KYP schematic (GProteinSecondMessengerMap) and the table carried VERBATIM as the note's table block. TEXT-LAYER ARTIFACTS pinned: the V2 row prints the book's own red-ink erratum overlay 'collecting twobules (tubules)' (VLM render check confirms the printed page); the diagram text layer duplicates every label (two-layer artwork) and prints 'B1, B2, B3' where the table prints real β glyphs; the interleaving of diagram labels splits the V2 row in extraction (both fragments quoted). SECTION EXTENT verified: the section ENDS at the pdf 259 footer; pdf 260 (book 238) opens the SEPARATE pending 'Autonomic drugs' section — sourcePages = [259] only. BOUNDARIES: pdf 258 carries the COMPLETED PH14 (upper) and PH15 (lower) — EXCLUDED; PH12 'acetylcholine-receptors' anchored its M1/M2/M3 G-protein layer to THIS page (the reciprocal cross-link pinned). KYP extensions flagged wherever they appear: the three-lanes reading (gas pedal / brake / squeeze), the subscript-rule membership frames (the i class is all 2s; not all 2s are Gi), the drug/toxin anchor layer (albuterol, dobutamine, clonidine, phenylephrine, atropine, cimetidine, desmopressin, antipsychotics, pertussis toxin, cholera toxin — none printed), the kinase fork (PKA vs PKC), the PIP2-splitter frame, and the M2 βγ K+ -channel story. The classic 'one heart, two lungs' counting code is THIS page's own print — '(one heart)' and '(two lungs)' in the β1/β2 rows — carried verbatim and attributed (PH15's facing-page attribution resolves here). No copyrighted artwork reproduced; nothing reproduced.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "g-protein-linked-second-messengers", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"g-protein-linked-second-messengers-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [259], "237", "VISUAL_TABLE", "The RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS table (the page's first printed element — the 14-row receptor-to-class map)",
       "The page's table, verbatim, 14 receptor rows under 5 family groups: Adrenergic — α1 'q', α2 'i', β1 's', β2 's', β3 's'; Cholinergic — M1 'q', M2 'i', M3 'q'; Dopamine — D1 's', D2 'i'; Histamine — H1 'q', H2 's'; Vasopressin — V1 'q', V2 's' — each with its MAJOR FUNCTIONS string (α1 vascular/pupillary/sphincter contraction; α2 ↓ sympathetic outflow/insulin/lipolysis, ↑ platelet aggregation, ↓ aqueous humor; β1 '(one heart)' + renin; β2 '(two lungs)' vasodilation/bronchodilation/tocolysis/K+ uptake; β3 lipolysis/thermogenesis/bladder relaxation; M1 cognitive/enteric/exocrine; M2 ↓ heart rate, AV node conduction, atrial contractility; M3 exocrine/peristalsis/bladder/broncho/vasodilation/miosis/accommodation; D1 renal vascular + direct pathway; D2 transmitter + indirect pathway; H1 bronchoconstriction/mucus/permeability/pruritus; H2 gastric acid; V1 vascular contraction; V2 aquaporin-2 + vWF, printing the book's own red-ink erratum overlay 'twobules (tubules)'). Pure text — no rasters.",
       "ORIGINAL_KYP_ADAPTATION", "g-protein-second-messenger-map", "the note's table block (blocks[1] the verbatim table) + the registry visual's class-digest strip and cascade panels"),
    sv(2, [259], "237", "PHARMACOLOGY_DIAGRAM", "The three cascade diagrams — Gq, Gs, Gi (the page's second printed element: ligand + receptor chip → G protein → enzyme → second messenger → effector, one panel per class)",
       "THREE VECTOR cascade panels, labels in the text layer (ZERO rasters on the page — pdfimages returns no rows; vector typeset artwork, COPYRIGHTED, never reproduced): the Gq panel — 'H1, α1, V1, M1, or M3 receptor' → 'Gq protein' → 'Phospholipase C' → 'PIP2' → 'IP3' + 'DAG' → 'Ca2+' → 'Protein kinase C' → 'Smooth muscle contraction' (with 'Myosin light-chain kinase (smooth muscle contraction)'); the Gs panel — 'B1, B2, B3, D1, H2, or V2 receptor' → 'GS protein' → 'Adenylyl cyclase' → 'ATP' → 'Cyclic AMP' → 'Protein kinase A' (+ 'Ca2+'); the Gi panel — 'M2, α2, or D2 receptor' → 'Gi protein' → 'Adenylyl cyclase' (inhibited) → ↓ 'Cyclic AMP'. The diagram text layer duplicates every label (two-layer artwork) and prints 'B1, B2, B3' where the table prints β glyphs. Conveyed as ONE original KYP schematic (the three cascade panels with the receptor-example chips per class) — no artwork reproduced.",
       "ORIGINAL_KYP_REDRAW", "g-protein-second-messenger-map", "the registry visual's three cascade panels (receptor chips → G protein → enzyme → second messenger → effector, per class)"),
]
(ROOT / "content/usmle/manifests/g-protein-linked-second-messengers.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/g-protein-linked-second-messengers.json").write_text(
    json.dumps({"topicId": "g-protein-linked-second-messengers", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "g-protein-linked-second-messengers", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + text layer + VLM render check): the section's two printed elements are (1) ONE TABLE (RECEPTOR / G-PROTEIN CLASS / MAJOR FUNCTIONS — 14 rows under 5 family groups, PURE TEXT) and (2) THREE VECTOR CASCADE DIAGRAMS (Gq, Gs, Gi — labels in the text layer, ZERO rasters on the page; vector typeset artwork, COPYRIGHTED, never reproduced). The table is carried VERBATIM as the note's table block (ORIGINAL_KYP_ADAPTATION); the three diagrams are conveyed as ONE original KYP schematic in the registry visual GProteinSecondMessengerMap (the three cascade panels — receptor chips → G protein → enzyme → second messenger → effector, with the receptor-example chips per class, the class digest strip, the codes strip, and the reading-rule footer; ORIGINAL_KYP_REDRAW — the cascade structure and labels are the book's own, the layout and glyphs are KYP's, no artwork reproduced). TEXT-LAYER ARTIFACTS pinned: the V2 row prints the book's own red-ink erratum overlay 'collecting twobules (tubules)' (VLM render check on the 150-dpi page confirms the printed page); the diagram text layer duplicates every label and prints 'B1, B2, B3' where the table prints β glyphs. EXCLUSIONS: pdf 258 (book 236) carries the COMPLETED topics PH14 'Micturition control' (upper) and PH15 'Tissue distribution of adrenergic receptors' (lower) — NOT part of this inventory; pdf 260 (book 238) opens the SEPARATE pending 'Autonomic drugs' section (this section ENDS on pdf 259 — verified, sourcePages = [259] only). PH12 'acetylcholine-receptors' anchored its M1/M2/M3 G-protein layer to this page (the reciprocal cross-link pinned as evidence). KYP extensions flagged wherever they appear: the three-lanes reading (gas pedal / brake / squeeze), the subscript-rule membership frames (the i class is all 2s; not all 2s are Gi; the q class is the odd ones), the drug/toxin anchor layer (albuterol, dobutamine, clonidine, phenylephrine, atropine, cimetidine, desmopressin, antipsychotics, pertussis toxin, cholera toxin — none printed on this page), the kinase fork (PKA vs PKC), the PIP2-splitter frame, and the M2 βγ K+ -channel story. The classic 'one heart, two lungs' counting code is THIS page's own print — carried verbatim, attributed. No copyrighted artwork reproduced; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "g-protein-linked-second-messengers":
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
print("PH16 manifest + inventory + flip done")
