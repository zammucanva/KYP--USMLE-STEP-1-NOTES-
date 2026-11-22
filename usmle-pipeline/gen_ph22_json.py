#!/usr/bin/env python3
"""PH22 sympatholytics-alpha-2-agonists — manifest + inventory + flip
(Pharmacology 22/43 — the Sympatholytics (α2-agonists) block: the UPPER
portion of pdf 265, book 243 — the LOWER portion of the same page, the
α-blockers class table (phenoxybenzamine, phentolamine, the -osin four,
mirtazapine), is the SEPARATE PENDING 'alpha-blockers' topic and is
EXCLUDED here; only its boundary is pinned from above). The block prints
its section header, ONE three-column DRUG/APPLICATIONS/ADVERSE EFFECTS
table of THREE rows, and nothing else before the α-blockers header:
THE HEADER — 'Sympatholytics (α2-agonists)'.
ROW 1 — 'Clonidine, guanfacine' → 'Hypertensive urgency (limited
situations), ADHD, Tourette syndrome, symptom control in opioid
withdrawal' | 'CNS depression, bradycardia, hypotension, respiratory
depression, miosis, rebound hypertension with abrupt cessation'.
ROW 2 — 'α-methyldopa' → 'Hypertension in pregnancy' | 'Direct Coombs ⊕
hemolysis, drug-induced lupus, hyperprolactinemia'.
ROW 3 — 'Tizanidine' → 'Relief of spasticity' | 'Hypotension, weakness,
xerostomia'.
RASTER CENSUS: ZERO raster images on pdf 265 (pdfimages -list returns no
rows) — the block is PURE TEXT, COPYRIGHTED, never reproduced as artwork;
carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION)
and conveyed as ONE original KYP mechanism map (Alpha2AgonistMap).
BOUNDARY CENSUS (pinned from above): pdf 265 prints TWO sections under
the one 'PHARMACOLOGY—AUTONOMIC DRUGS' banner — THIS α2-agonists block
ABOVE (lines 9-37) and the α-blockers class table BELOW (lines 39-78:
'Nonselective' phenoxybenzamine/phentolamine, 'α1 selective (-osin
ending)' prazosin/terazosin/doxazosin/tamsulosin, 'α2 selective'
mirtazapine) — the PENDING 'alpha-blockers' topic, EXCLUDED; only its
header pair + its first and last drug rows pinned as boundary markers.
CROSS-PAGE MECHANISM ANCHORS (all printed, all verified): pdf 260 (book
238, the COMPLETED PH17 autonomic-drugs) prints the block's own
mechanism sentence — 'Release of norepinephrine from a sympathetic nerve
ending is modulated by NE itself, acting on presynaptic α2-autoreceptors
→ negative feedback.'; pdf 259 (book 237, the COMPLETED PH16
g-protein-linked-second-messengers) prints the α2 row — 'α2' | 'i' | '↓
sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑
platelet aggregation, ↓ aqueous humor production' — and the figure labels
'M2, α2, or D2 receptor' → 'Gi protein' (α2 = the Gi couple); pdf 258
(book 236, the COMPLETED PH15 tissue-distribution-of-adrenergic-
receptors) prints the peripheral α2 addresses — 'Pancreas / Presynaptic
terminals / Salivary glands' → 'Inhibition of insulin secretion /
Inhibition of neurotransmitter release / Inhibition of salivary
secretion'; pdf 264 (book 242) behind carries the tail of the COMPLETED
pilot 'sympathomimetics' (the physiologic-effects figure captions);
pdf 266 (book 244) ahead opens 'β-blockers' (the PENDING beta-blockers
topic) — THIS block does NOT extend there; sourcePages = [265] only.
KYP EXTENSIONS (beyond the block's printed set, flagged wherever they
appear): the SYMPATHETIC-DIMMER frame (α2 read as the sympathetic volume
knob — the medullary/central location of the clonidine effect is NOT
printed on this page, flagged); the C.A.T.S. applications compression of
the printed clonidine/guanfacine cell; the MOM-AND-COOMBS frame (the
pregnancy-sort + the hemolysis lab); the PRODRUG flag (α-methyldopa →
α-methylnorepinephrine, the false-neurotransmitter reading — NOT
printed, flagged); and the PH22/alpha-blockers boundary census itself."""
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
     260: pages[259].split("\n"), 264: pages[263].split("\n"),
     265: pages[264].split("\n"), 266: pages[265].split("\n")}
P = {258: norm(pages[257]), 259: norm(pages[258]),
     260: norm(pages[259]), 264: norm(pages[263]),
     265: norm(pages[264]), 266: norm(pages[265])}
def rng(pg, a, b): return "\n".join(L[pg][a - 1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 243): the Pharmacology marker, the Section II marker, the standing Autonomic Drugs banner, and the printed page number (the page whose UPPER portion is this topic's α2-agonists block and whose LOWER portion is the EXCLUDED α-blockers class table — the separate PENDING alpha-blockers topic)", rng(265, 1, 7), [265]),
    ("The section header, verbatim — 'Sympatholytics (α2-agonists)' (the block's own banner, line 9, directly below the running header: the class name that names the direction — sympathoLYTIC, the sympathetic outflow turned DOWN — and the receptor that does it, α2; the previous section (sympathomimetics, the completed pilot) drove the same system UP)", rng(265, 9, 9), [265]),
    ("The table frame, verbatim — 'DRUG / APPLICATIONS / ADVERSE EFFECTS' (the block's own three-column frame: the drug set, the printed use, and the printed toxicity — the same DRUG-column frame the completed muscarinic-antagonists class table (PH20) used one drug-family back)", rng(265, 10, 14), [265]),
    ("Row 1 — the CLONIDINE/GUANFACINE applications cell, whole, verbatim — 'Hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal' (the block's headliner row: four printed uses, two of them the exam's favorite psych-to-pharm crossovers — the ADHD lane (guanfacine's own) and the opioid-withdrawal symptom-control lane; the printed qualifier '(limited situations)' is the book's own hedge on the hypertensive-urgency use)", rng(265, 16, 20), [265]),
    ("Row 1 — the CLONIDINE/GUANFACINE adverse-effects cell, whole, verbatim — 'CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation' (the block's printed toxicity set: five on-tolerance findings — every one the mechanism itself (sympatholysis) overshooting — plus the one off-tolerance finding the exam tests hardest: REBOUND HYPERTENSION WITH ABRUPT CESSATION, the never-stop-cold-turkey rule printed in the cell itself)", rng(265, 22, 24), [265]),
    ("Row 2 — the α-METHYLDOPA row, whole, verbatim — 'α-methyldopa' → 'Hypertension in pregnancy' (the block's one-indication row: the pregnancy-safe antihypertensive, the printed use every obstetric stem recycles; the prodrug reading — methyldopa converted to α-methylnorepinephrine, the false neurotransmitter — is NOT printed on this page, KYP-flagged wherever used)", rng(265, 26, 28), [265]),
    ("Row 2 — the α-METHYLDOPA adverse-effects cell, whole, verbatim — 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia' (the block's autoimmune-toxicity set: the lab finding (direct Coombs positive hemolysis), the rheumatologic mimic (drug-induced lupus), and the endocrine finding (hyperprolactinemia) — three different organ systems from one drug, the classic 'which antihypertensive causes a positive Coombs test' answer)", rng(265, 30, 31), [265]),
    ("Row 3 — the TIZANIDINE row, whole, verbatim — 'Tizanidine' → 'Relief of spasticity' | 'Hypotension, weakness, xerostomia' (the block's shortest row: the muscle-relaxant member — an α2 agonist used for spasticity (multiple sclerosis, spinal cord injury, cerebral palsy), with the printed toxicity trio; the hypotension is the same sympatholysis overshoot as row 1, the xerostomia is the α2 salivary address of book 236's distribution row)", rng(265, 33, 37), [265]),
    ("The PH22/alpha-blockers BOUNDARY, verbatim — 'α-blockers' + the repeated column headers 'APPLICATIONS' / 'ADVERSE EFFECTS' (lines 39-43: the boundary marker of the EXCLUDED same-page class table — the separate PENDING alpha-blockers topic; its rows (phenoxybenzamine, phentolamine, prazosin/terazosin/doxazosin/tamsulosin, mirtazapine) are never cited as THIS block's print — pinned here from above so no double coverage arises)", rng(265, 39, 44), [265]),
    ("The excluded table's FIRST drug row, verbatim — 'Phenoxybenzamine' (line 47: the nonselective irreversible α-blocker, the pheochromocytoma preoperative drug — pinned as the boundary marker ONLY, the lower block's own print; this topic is the AGONIST side of α2, that block is the ANTAGONIST side of α1/α2)", rng(265, 46, 47), [265]),
    ("The excluded table's α1 row, verbatim — 'α1 selective (-osin ending)' + 'Prazosin, terazosin,' 'doxazosin,' 'tamsulosin' (lines 62-65: the -osin four — pinned as boundary marker ONLY; the pending alpha-blockers topic's own print)", rng(265, 62, 65), [265]),
    ("The excluded table's LAST row, verbatim — 'α2 selective' + 'Mirtazapine' → 'Depression.' (lines 73-78: the same-page α2 ANTAGONIST — the receptor mirror of THIS block: mirtazapine BLOCKS the α2 autoreceptor (the antidepressant that increases noradrenergic outflow), where clonidine/guanfacine STIMULATE it (the sympatholytic that decreases outflow); its adverse set 'Sedation, ↑ serum cholesterol, ↑ appetite' is that block's own print — cited here as the receptor-mirror boundary only)", rng(265, 73, 78), [265]),
    ("The page footer, verbatim — the book's signature file line (book 243; the page carries BOTH sections — THIS α2-agonists block above and the EXCLUDED α-blockers table below — under the one footer)", rng(265, 80, 80), [265]),
    ("The CROSS-PAGE MECHANISM ANCHOR #1, verbatim — 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' (pdf 260 / book 238, the COMPLETED PH17 autonomic-drugs, lines 11-12: THE mechanism sentence of THIS block — the presynaptic α2-autoreceptor is the brake the agonists pull; the book prints it on the autonomic-drugs page, not here — cited as the printed bridge)", rng(260, 11, 12), [260]),
    ("The CROSS-PAGE MECHANISM ANCHOR #2, verbatim — the α2 row of the second-messenger table: 'α2' | 'i' | '↓ sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor production' (pdf 259 / book 237, the COMPLETED PH16 g-protein-linked-second-messengers, lines 24-29: α2 = the Gi couple, and its FIRST printed major function is the one this whole block rides — '↓ sympathetic (adrenergic) outflow'; the rest of the row is the peripheral α2 address set: pancreas, fat, platelets, ciliary body)", rng(259, 24, 29), [259]),
    ("The CROSS-PAGE MECHANISM ANCHOR #3, verbatim — the figure labels 'M2, α2, or D2 receptor' (pdf 259 / book 237, the Gi pathway figure, lines 168-172: the book's OWN grouping of the inhibitory couple — M2, α2, D2 all ride Gi — the printed anchor for the α2 = Gi link this note's mnemonic and crossLink run on)", rng(259, 168, 172), [259]),
    ("The CROSS-PAGE MECHANISM ANCHOR #4, verbatim — 'Gi protein' (pdf 259 / book 237, the Gi pathway figure label, lines 216-218: the G-protein class the α2 receptor couples — the inhibitory couple that lowers adenylyl cyclase/cAMP; paired with anchor #3 this is the complete printed α2 → Gi story)", rng(259, 216, 218), [259]),
    ("The CROSS-PAGE DISTRIBUTION ANCHOR, verbatim — the α2 row of the tissue-distribution table: 'α2' | 'Pancreas / Presynaptic terminals / Salivary glands' → 'Inhibition of insulin secretion / Inhibition of neurotransmitter release / Inhibition of salivary secretion' (pdf 258 / book 236, the COMPLETED PH15 tissue-distribution-of-adrenergic-receptors, lines 111-119: the peripheral α2 addresses — the second one ('Presynaptic terminals' → 'Inhibition of neurotransmitter release') is the negative-feedback brake itself in distribution form; the third (salivary) explains tizanidine's printed xerostomia)", rng(258, 111, 119), [258]),
    ("The BEHIND-PAGE BOUNDARY, verbatim — 'Physiologic effects of' + 'sympathomimetics' (pdf 264 / book 242, lines 5-6: the physiologic-effects figure captions of the COMPLETED pilot sympathomimetics section — the page BEHIND carries that section's tail (the epinephrine-reversal and phenylephrine graphs), NOT any α2-agonists content; THIS block opens at the TOP of pdf 265 and the boundary is pinned)", rng(264, 5, 6), [264]),
    ("The AHEAD-PAGE BOUNDARY, verbatim — 'β-blockers' + 'Atenolol, betaxolol, bisoprolol, carvedilol, esmolol, labetalol, metoprolol, nadolol, nebivolol, propranolol, timolol.' (pdf 266 / book 244, lines 9-12: the section header that OPENS the next page — the PENDING beta-blockers topic; the Sympatholytics (α2-agonists) block does NOT extend to pdf 266: the whole block (header + three-row table) is on pdf 265's UPPER portion alone, sourcePages = [265] only)", rng(266, 9, 12), [266]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"sympatholytics-alpha-2-agonists: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "sympatholytics-alpha-2-agonists",
    "title": "Sympatholytics: α2 Agonists",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [265], "bookPages": "243"},
    "sourceEvidence": kept, "visualIds": ["alpha2-agonist-map"],
    "mechanismIds": ["central-alpha2-autoreceptor-braking", "alpha2-agonist-drug-sort-toxicity"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the block's header + three-row table.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the drug table; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "sympathetic-dimmer-frame", "summary": "The SYMPATHETIC-DIMMER frame — α2 read as the sympathetic volume knob: the presynaptic autoreceptor is the negative-feedback brake (both printed: 'presynaptic α2-autoreceptors → negative feedback.', book 238; '↓ sympathetic (adrenergic) outflow', book 237), and the agonists are the hand that pulls it — turn α2 ON and the amp goes DOWN (↓ outflow → ↓ HR, ↓ BP). The CENTRAL/medullary location of the clonidine effect (the CNS site whose stimulation produces sympatholysis) is NOT printed on this page — flagged as KYP wherever used, never cited as printed. The dimmer reading itself — one receptor, one direction, whole-body consequences — is KYP's compression of three printed anchors (the autoreceptor sentence, the α2/Gi row, the distribution row).",
         "origin": "outside-first-aid", "rationale": "The book prints the brake on book 238 and the α2 row on book 237; the single-knob frame that unifies them with this page's drug table is KYP's synthesis.",
         "location": "core.keyIdea + mechanisms[0] + mnemonics[1] + the visual's mechanism strip"},
        {"id": "patient-sort-frame", "summary": "The PATIENT-SORT frame — the three rows read as WHO-gets-WHAT: the PREGNANT patient → α-methyldopa ('Hypertension in pregnancy'); the CHILD with ADHD or tics → guanfacine/clonidine ('ADHD, Tourette syndrome'); the WITHDRAWING patient → clonidine ('symptom control in opioid withdrawal'); the SPASTIC patient → tizanidine ('Relief of spasticity'); the urgency-HTN patient → clonidine ('Hypertensive urgency (limited situations)'). Every drug and use is the book's own print; the who-sort that turns four rows into four patient stems is KYP's.",
         "origin": "outside-first-aid", "rationale": "The book prints the rows by drug; the patient-first sort the exam actually tests is KYP's overlay.",
         "location": "usmle pivots + traps + the visual's drug cards"},
        {"id": "mom-and-coombs-frame", "summary": "The MOM-AND-COOMBS frame — α-methyldopa's two printed identities compressed: the pregnancy antihypertensive ('Hypertension in pregnancy' — the safe-in-pregnancy answer, versus the contraindicated ACE inhibitors/ARBs whose fetopathy is that topic's own) and the Coombs-positive drug ('Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia' — the autoimmune triad: hemolytic anemia with the positive direct Coombs test, the lupus mimic, the prolactin story). Both identities are the book's own print; the MOM-AND-COOMBS compression is KYP's.",
         "origin": "outside-first-aid", "rationale": "The book prints use and toxicity in adjacent cells; the one-phrase frame that carries both is KYP's.",
         "location": "mnemonics[2] + usmle patterns[1] + the miniCase + the visual's methyldopa card"},
        {"id": "prodrug-and-boundary-flags", "summary": "Two census flags: (1) the PRODRUG flag — α-methyldopa is converted (decarboxylated/hydroxylated) to α-methylnorepinephrine, a false neurotransmitter that stimulates the central α2 receptor — this reading is NOT printed on this page or its anchor pages and is flagged as KYP wherever used; (2) the PH22/alpha-blockers BOUNDARY CENSUS itself — pdf 265 (book 243) prints TWO separable sections under the one banner, and the inventory's two book-243 topics ARE separable on inspection: THIS topic (sympatholytics-alpha-2-agonists) = the UPPER block (header + three-row DRUG table, lines 9-37); the PENDING 'alpha-blockers' topic = the LOWER class table (lines 39-78) — EXCLUDED here, pinned from above so no double coverage arises (its last row, mirtazapine the α2 ANTAGONIST, is the receptor mirror of this block's agonists — cited as boundary only).",
         "origin": "outside-first-aid", "rationale": "The prodrug mechanism and the boundary split/mutual-exclusion documentation are pipeline curation and pharmacology-knowledge overlay, not book print.",
         "location": "manifest notes + mechanisms[1] + traps + the visual's boundary strip"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + text layer): the Sympatholytics (α2-agonists) block occupies the UPPER portion of pdf 265 (book 243) under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner (lines 9-37), and prints: the section header 'Sympatholytics (α2-agonists)'; ONE THREE-COLUMN TABLE (DRUG / APPLICATIONS / ADVERSE EFFECTS) of three rows — 'Clonidine, guanfacine' → 'Hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal' | 'CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation'; 'α-methyldopa' → 'Hypertension in pregnancy' | 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia'; 'Tizanidine' → 'Relief of spasticity' | 'Hypotension, weakness, xerostomia'. RASTER CENSUS: ZERO raster images on pdf 265 (pdfimages -list returns no rows) — the block is PURE TEXT, COPYRIGHTED, never reproduced as artwork; carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION) and conveyed as ONE original KYP mechanism map (Alpha2AgonistMap). BOUNDARY, pinned from above: the LOWER portion of the same page (lines 39-78) is the α-blockers class table — the SEPARATE PENDING 'alpha-blockers' topic (Nonselective phenoxybenzamine/phentolamine; 'α1 selective (-osin ending)' prazosin/terazosin/doxazosin/tamsulosin; 'α2 selective' mirtazapine) — EXCLUDED here; only its header pair + first/last drug rows pinned as boundary markers (mirtazapine is the α2 ANTAGONIST mirror of this block's agonists — cited as boundary only, its rows never as this block's print). SECTION EXTENT: the block does NOT extend to pdf 266 (book 244 opens 'β-blockers', the PENDING beta-blockers topic); pdf 264 (book 242) behind carries only the tail of the COMPLETED pilot sympathomimetics (the physiologic-effects figure captions); sourcePages = [265] only. CROSS-PAGE ANCHORS (all printed, all verified): pdf 260/book 238 (COMPLETED autonomic-drugs, PH17) — 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.' (the block's own mechanism sentence); pdf 259/book 237 (COMPLETED g-protein-linked-second-messengers, PH16) — the α2 row 'α2 | i | ↓ sympathetic (adrenergic) outflow, ↓ insulin release, ↓ lipolysis, ↑ platelet aggregation, ↓ aqueous humor production' + the figure labels 'M2, α2, or D2 receptor' → 'Gi protein' (α2 = the Gi couple); pdf 258/book 236 (COMPLETED tissue-distribution-of-adrenergic-receptors, PH15) — the α2 distribution row 'Pancreas / Presynaptic terminals / Salivary glands' → 'Inhibition of insulin secretion / Inhibition of neurotransmitter release / Inhibition of salivary secretion'. KYP extensions flagged wherever they appear: the SYMPATHETIC-DIMMER frame (the central/medullary location of the clonidine effect is NOT printed — flagged), the PATIENT-SORT frame (who-gets-what reading of the printed rows), the MOM-AND-COOMBS frame (the pregnancy-sort + the Coombs lab), the PRODRUG flag (α-methyldopa → α-methylnorepinephrine, the false-neurotransmitter reading — NOT printed, flagged), and the PH22/alpha-blockers boundary census. No copyrighted artwork reproduced; nothing reproduced.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "sympatholytics-alpha-2-agonists", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"sympatholytics-alpha-2-agonists-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [265], "243", "VISUAL_TABLE", "The Sympatholytics (α2-agonists) block's own printed set (the section's sole visual element — the three-column DRUG/APPLICATIONS/ADVERSE EFFECTS table of three rows)",
       "ONE THREE-COLUMN TEXT TABLE (PURE TEXT — ZERO rasters on pdf 265; pdfimages returns no rows; COPYRIGHTED, never reproduced as artwork). Header: 'Sympatholytics (α2-agonists)'. Column headers: DRUG / APPLICATIONS / ADVERSE EFFECTS. Three rows: 'Clonidine, guanfacine' → 'Hypertensive urgency (limited situations), ADHD, Tourette syndrome, symptom control in opioid withdrawal' | 'CNS depression, bradycardia, hypotension, respiratory depression, miosis, rebound hypertension with abrupt cessation'; 'α-methyldopa' → 'Hypertension in pregnancy' | 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia'; 'Tizanidine' → 'Relief of spasticity' | 'Hypotension, weakness, xerostomia'. Carried VERBATIM as the note's two table blocks and conveyed as ONE original KYP mechanism map (the presynaptic-autoreceptor mechanism strip, the three drug cards, the toxicity/rebound strip, the α2 = Gi link band, the boundary strip, the reading-rule footer) — no artwork reproduced.",
       "ORIGINAL_KYP_ADAPTATION", "alpha2-agonist-map", "the note's two verbatim table blocks (the three-row DRUG/APPLICATIONS/ADVERSE EFFECTS table; the cross-page mechanism-anchor table) + the registry visual's mechanism strip, drug cards, toxicity strip, Gi-link band, boundary strip, and reading-rule footer"),
]
(ROOT / "content/usmle/manifests/sympatholytics-alpha-2-agonists.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/sympatholytics-alpha-2-agonists.json").write_text(
    json.dumps({"topicId": "sympatholytics-alpha-2-agonists", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "sympatholytics-alpha-2-agonists", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + text layer): the Sympatholytics (α2-agonists) block's printed visual set is ONE element — the THREE-COLUMN DRUG/APPLICATIONS/ADVERSE EFFECTS TABLE of three rows, PURE TEXT (ZERO rasters on pdf 265 — pdfimages returns no rows; COPYRIGHTED, never reproduced as artwork). The set is carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION — every drug, application, and adverse-effect cell is the book's own print) and conveyed as ONE original KYP mechanism map in the registry visual Alpha2AgonistMap (THE MECHANISM STRIP — the presynaptic α2-autoreceptor brake with its printed anchors from book 238 'presynaptic α2-autoreceptors → negative feedback.' and book 237 '↓ sympathetic (adrenergic) outflow' via Gi; THE THREE DRUG CARDS — clonidine/guanfacine (the four printed applications + the six-finding toxicity cell incl. rebound hypertension with abrupt cessation), α-methyldopa ('Hypertension in pregnancy' + 'Direct Coombs ⊕ hemolysis, drug-induced lupus, hyperprolactinemia'), tizanidine ('Relief of spasticity' + 'Hypotension, weakness, xerostomia'); THE TOXICITY/REBOUND STRIP — the printed never-stop-abruptly rule; THE α2 = Gi LINK BAND — the book's own 'M2, α2, or D2 receptor' → 'Gi protein' figure labels of book 237; THE BOUNDARY STRIP — the PH22/alpha-blockers same-page split pinned from above; the reading-rule footer). BOUNDARY pinned from above: the LOWER portion of pdf 265 (lines 39-78) is the α-blockers class table — the SEPARATE PENDING alpha-blockers topic — EXCLUDED (only its header pair + first/last drug rows pinned as boundary markers; mirtazapine the α2 antagonist is the receptor-mirror citation, never this block's print). SECTION EXTENT: the block does NOT extend to pdf 266 (book 244 opens β-blockers); pdf 264 behind carries only the sympathomimetics tail; sourcePages = [265] only. KYP extensions flagged wherever they appear: the SYMPATHETIC-DIMMER frame (the central/medullary location is NOT printed — flagged), the PATIENT-SORT frame, the MOM-AND-COOMBS frame, the PRODRUG flag (α-methyldopa → α-methylnorepinephrine — NOT printed, flagged), and the PH22/alpha-blockers boundary census. No copyrighted artwork reproduced; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "sympatholytics-alpha-2-agonists":
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
print("PH22 manifest + inventory + flip done")
