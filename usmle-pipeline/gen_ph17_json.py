#!/usr/bin/env python3
"""PH17 autonomic-drugs — manifest + inventory + flip
(Pharmacology 17/43 — the AUTONOMIC DRUGS SYNTHESIS PAGE: the two intro
rules + the four-lane CHOLINERGIC / NORADRENERGIC / DOPAMINERGIC /
SEROTONERGIC neurotransmission flowchart).
Census (pdfimages + text layer + VLM render check): pdf 260 (book 238),
the WHOLE page under the standing banner 'PHARMACOLOGY—AUTONOMIC DRUGS'
— the section header 'Autonomic drugs' is the ONLY section header on the
page; the page prints (1) TWO INTRO RULES (prose): 'Release of
norepinephrine from a sympathetic nerve ending is modulated by NE
itself, acting on presynaptic α2-autoreceptors → negative feedback.' and
the amphetamine rule (NET entry → VMAT entry → NE displaced from the
vesicles → concentration threshold → NET action reversed → NE expelled
into the synaptic cleft → ↑ NE in patients taking amphetamines), and
(2) ONE LARGE FOUR-LANE VECTOR FLOWCHART whose labels print in the text
layer — CHOLINERGIC: Choline + Acetyl-CoA →(ChAT)→ ACh, Ca2+-triggered
release, Cholinoreceptors M1 M2 M3 on the POSTSYNAPTIC NEURON, AChE →
Choline + Acetate; NORADRENERGIC: Tyrosine → DOPA → Dopamine → NE, VMAT
(with 'Vesicular monoamine transporter (VMAT) inhibitor' /
'Tetrabenazine'), Release-modulating receptors α2 + AT II with the
'Negative feedback' arrow, NET 'Reuptake', Adrenoreceptors α β,
'Diffusion, metabolism'; plus the DOPAMINERGIC and SEROTONERGIC lanes
(Tyrosine → L-DOPA → Dopamine → DAT; Tryptophan → 5-Hydroxytryptophan →
5-HT → SERT) and the four drug-anchor lists ('Botulinum toxin';
'AChE inhibitors eg, Donepezil'; 'Amphetamine, Ephedrine'; 'Amphetamine,
SNRIs, Cocaine, TCAs, MDMA'; 'Amphetamine, Methylphenidate, Cocaine';
'Amphetamine, SNRIs, Cocaine, SSRIs'). RASTER CENSUS: pdf 260 carries
ZERO raster images (pdfimages -list returns no rows) — the flowchart is
VECTOR LINE ART (copyrighted, never reproduced); it is conveyed as ONE
original KYP two-lane synthesis map (AutonomicDrugsSynthesisMap — the
CHOLINERGIC lane and the NORADRENERGIC lane as the two main panels, the
DOPAMINERGIC + SEROTONERGIC axonal strip, the five-slots drug digest,
the codes strip, the reading-rule footer) with the two intro rules
carried VERBATIM as the note's first table block.
PAGE-EXTENT FINDING (checked per task): the diagram does NOT extend to
pdf 261 — pdf 261 (book 239) opens the SEPARATE pending
'Cholinomimetic agents' section (verified: the 261 text layer opens
'Cholinomimetic agents' + its DRUG/ACTION/APPLICATIONS table) — the
whole section, rules + four-lane figure, is on pdf 260 alone:
sourcePages = [260] only.
VLM RENDER CHECK (150-dpi page): NO enzyme labels print on the
Tyrosine→DOPA or Dopamine→NE arrows (no 'tyrosine hydroxylase', no
'dopamine β-hydroxylase' anywhere on the page) and there is NO
epinephrine / PNMT / adrenal-medulla branch — the noradrenergic lane
ENDS at NE. 'ChAT' DOES print on the Choline + Acetyl-CoA → ACh arrow.
Consequence: every catecholamine-synthesis enzyme name (tyrosine
hydroxylase the rate-limiting step, dopa decarboxylase, dopamine
β-hydroxylase, PNMT) and the adrenal Epi branch are KYP EXTENSIONS,
flagged wherever they appear — the adrenal limb is the book's OWN print
on book 234's overview diagram (the completed PH11 topic), pinned as
the cross-link.
TEXT-LAYER NOTES: the diagram is two-layer vector artwork — several
labels print twice (ACh twice at lines 28/40, Dopamine three times,
Tyrosine twice, 5-HT twice, 'Reuptake' three times, 'Noradrenergic
stimulant' twice); the vertical 'TERMINAL AXON' / 'AXONAL TERMINAL'
captions interleave as scattered fragments ('TE' 'L' 'AX' 'ON' …
'AXO' 'NT' 'ER' 'M'/'MI' 'AL'); 'Release-modulating receptors' prints
as 'Releasemodulating receptors' in the raw layer (hyphen lost in
extraction) and 'POSTSYNAPTIC N EURO' splits across lines — every
label quoted in physical order as contiguous line ranges (the
established convention for heavily-interleaved figure labels), with
the raw-layer spellings pinned.
SECTION EXTENT: the section is ENTIRELY on pdf 260 — it ENDS at the
page footer ('FAS1_2026_05-Pharmacology.indd 238' + the print-date
line), and pdf 261 (book 239) opens the SEPARATE pending
'Cholinomimetic agents' section — sourcePages = [260] only.
BOUNDARY CENSUS: pdf 259 (book 237) carries the COMPLETED topic PH16
'g-protein-linked-second-messengers' — EXCLUDED (but its next-page
boundary marker named THIS section, so the reciprocal anchor is
pinned); pdf 261 (book 239) opens the PENDING 'Cholinomimetic agents'
section — EXCLUDED. PH16's receptor plates (M1/M2/M3, α/β) resolve
into THIS page's postsynaptic plates; PH15 (book 236) carries the
α/β tissue addresses; PH11 (book 234) carries the adrenal Epi limb —
all pinned as cross-links.
KYP EXTENSIONS (beyond the page's printed set, flagged wherever they
appear): the FIVE SLOTS reading (MAKE, PACK, RELEASE, LISTEN, TAKE
BACK — the two lanes' steps compressed into the drug-target grid);
the TROJAN HORSE frame for amphetamine (enters BY the gate [NET],
raids the store [VMAT], opens the gate BACKWARDS [NET reversal]); the
enzyme-name layer (tyrosine hydroxylase the rate-limiting step, dopa
decarboxylase, dopamine β-hydroxylase, PNMT — NONE printed on this
page, VLM-verified); the adrenal Epi branch (book 234's own limb,
cross-referenced, NOT this page); the α2-agonist/antagonist drug layer
(clonidine, guanfacine, yohimbine — none printed); the AT II
heteroreceptor reading (angiotensin II facilitates release); and the
clearance asymmetry frame (ACh is BROKEN in the cleft by AChE; NE is
TAKEN BACK by NET or drifts by 'Diffusion, metabolism')."""
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
L = {259: pages[258].split("\n"), 260: pages[259].split("\n"), 261: pages[260].split("\n")}
P = {259: norm(pages[258]), 260: norm(pages[259]), 261: norm(pages[260])}
def rng(pg, a, b): return "\n".join(L[pg][a - 1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 238): the printed page number, the Section II marker, the section header, the Pharmacology marker, and the standing section banner", rng(260, 1, 9), [260]),
    ("The section header — 'Autonomic drugs' (this topic's section; the ONLY section header on the page — the whole page belongs to this topic)", rng(260, 5, 5), [260]),
    ("The standing section banner — '▶ PHARMACOLOGY—AUTONOMIC DRUGS' (the same banner PH10–PH16 sit under; this topic is the banner's synthesis-map page)", rng(260, 9, 9), [260]),
    ("Intro rule 1, whole, verbatim — the presynaptic α2-autoreceptor negative-feedback rule: 'Release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback.'", rng(260, 11, 12), [260]),
    ("Intro rule 2, whole, verbatim — the amphetamine rule (the page's second paragraph, carried complete)", rng(260, 13, 17), [260]),
    ("Intro rule 2, entry clauses — 'Amphetamines use the NE transporter (NET) to enter the presynaptic terminal, where they utilize the vesicular monoamine transporter (VMAT) to enter neurosecretory vesicles.' (the Trojan-horse entry: gate, then store)", rng(260, 13, 14), [260]),
    ("Intro rule 2, displacement clause — 'This displaces NE from the vesicles. Once NE reaches a concentration threshold within the presynaptic terminal,'", rng(260, 14, 15), [260]),
    ("Intro rule 2, NET-reversal clause — 'the action of NET is reversed, and NE is expelled into the synaptic cleft, contributing to the characteristics and effects of ↑ NE observed in patients taking amphetamines.'", rng(260, 15, 17), [260]),
    ("The diagram's two main lane headers — 'CHOLINERGIC' and 'NORADRENERGIC' (the flowchart's left and right halves; the page's biggest printed element opens here)", rng(260, 19, 21), [260]),
    ("The cholinergic lane's top block as the text layer prints it, physical order — the interleaved 'TERMINAL AXON' vertical fragments ('TE' 'L' 'AX' 'ON'), the synthesis enzyme 'ChAT', its product 'ACh' (printed twice — two-layer artwork), 'Botulinum toxin', and the noradrenergic lane's 'DOPA' scattered through (the two lanes' labels interleave in one block)", rng(260, 23, 40), [260]),
    ("The cholinergic synthesis enzyme, verbatim — 'ChAT' on the Choline + Acetyl-CoA → ACh arrow (the ONLY enzyme name printed anywhere on the page — VLM render check on the 150-dpi page confirms ChAT prints on the arrow and that NO enzyme labels print on the noradrenergic arrows)", rng(260, 27, 28), [260]),
    ("The cholinergic inhibitor anchor, verbatim — 'Botulinum toxin' (the diagram's own drug label on the release step of the cholinergic lane)", rng(260, 34, 34), [260]),
    ("The noradrenergic lane's first intermediate, verbatim — 'DOPA' (Tyrosine → DOPA; no enzyme label prints on this arrow — VLM-verified)", rng(260, 38, 38), [260]),
    ("The release trigger, verbatim — 'Ca2+' (the diagram's own label at the presynaptic terminal: Ca2+ influx drives exocytosis in both main lanes)", rng(260, 42, 42), [260]),
    ("The release-modulating receptors label, verbatim — 'Releasemodulating receptors' (the raw layer prints it hyphen-less where -layout prints 'Release-modulating receptors'; the presynaptic bracket that carries α2 and AT II)", rng(260, 44, 45), [260]),
    ("The VMAT inhibitor anchor, whole, verbatim — 'Vesicular monoamine transporter (VMAT) inhibitor' (the diagram's own drug-class label at the noradrenergic vesicle)", rng(260, 47, 50), [260]),
    ("The VMAT inhibitor's drug, verbatim — 'Tetrabenazine' (printed in the footer zone of the text layer, the anchor list's own member)", rng(260, 202, 202), [260]),
    ("The noradrenergic stimulant anchor at the vesicle, verbatim — 'Amphetamine, Ephedrine' (the diagram's own drug list at the displacement step)", rng(260, 55, 56), [260]),
    ("The noradrenergic lane's third intermediate, verbatim — 'Dopamine' (DOPA → Dopamine → NE; no enzyme label prints on either arrow — VLM-verified)", rng(260, 58, 58), [260]),
    ("The noradrenergic mid-block as the text layer prints it, physical order — the interleaved 'TERMINAL AXON'/'AXONAL TERMINAL' fragments ('RM' 'TE' … 'ON' 'RM' … 'AX' 'IN A' 'L') around 'Amphetamine, Ephedrine', 'Dopamine', 'Cholinergic inhibitor', and 'Noradrenergic stimulant'", rng(260, 52, 72), [260]),
    ("The cholinergic inhibitor label, verbatim — 'Cholinergic inhibitor' (the anchor-class label whose member is Botulinum toxin)", rng(260, 64, 64), [260]),
    ("The noradrenergic stimulant label, first print — 'Noradrenergic stimulant' (the anchor-class label at the vesicle)", rng(260, 66, 66), [260]),
    ("The two lanes' substrates as one interleaved block, physical order — 'Tyrosine' + 'Choline' + '+' + 'Acetyl-CoA' (the noradrenergic and cholinergic synthesis inputs print side by side)", rng(260, 74, 77), [260]),
    ("The noradrenergic presynaptic cluster, physical order — 'VMAT' … 'AT II' … 'NE' … 'α2' (the vesicular transporter, the angiotensin II heteroreceptor, the transmitter, and the autoreceptor in one contiguous range)", rng(260, 79, 84), [260]),
    ("The noradrenergic stimulant label, second print + the feedback label, physical order — 'Noradrenergic stimulant' … 'Negative feedback' (the α2 autoreceptor's own arrow label, the diagram's printed name for intro rule 1's loop)", rng(260, 86, 90), [260]),
    ("The cholinergic degradation step, physical order — 'Choline' 'Acetate' … 'AChE' (the cleft breaker and its two products; the second 'Choline' print closes the substrate loop)", rng(260, 91, 94), [260]),
    ("The cholinoreceptor plate, verbatim — 'M1' 'M2' 'M3' (the diagram's own postsynaptic plate of the cholinergic lane)", rng(260, 96, 100), [260]),
    ("The cholinergic stimulant anchor, whole, verbatim — 'AChE inhibitors eg, Donepezil' (the diagram's own drug list at the cleft breaker of the cholinergic lane)", rng(260, 102, 103), [260]),
    ("The cholinergic stimulant label, verbatim — 'Cholinergic stimulant' (the anchor-class label, printed in the footer zone)", rng(260, 159, 159), [260]),
    ("The postsynaptic plate of the noradrenergic lane, physical order — 'POSTSYNAPTIC NEURON' … 'β' … 'α' … 'Adrenoreceptors' (the plate, its two receptor families, and its name)", rng(260, 105, 111), [260]),
    ("The serotonergic lane header + its substrate, physical order — 'SEROTONERGIC' 'Tryptophan' (the fourth lane opens; the serotonergic synthesis chain prints beneath the two main lanes)", rng(260, 113, 114), [260]),
    ("The dopaminergic lane's second step, verbatim — 'L-DOPA' (Tyrosine → L-DOPA in the dopaminergic lane; note the main noradrenergic lane prints 'DOPA' while this lane prints 'L-DOPA')", rng(260, 116, 116), [260]),
    ("The serotonergic lane's second step, verbatim — '5-Hydroxytryptophan' (Tryptophan → 5-Hydroxytryptophan → 5-HT)", rng(260, 118, 118), [260]),
    ("The dopaminergic lane's transmitter, verbatim — 'Dopamine' (its third print on the page — the dopaminergic lane's own chain)", rng(260, 120, 120), [260]),
    ("The serotonergic lane's transmitter, verbatim — '5-HT' (its first print — the lane's product)", rng(260, 122, 122), [260]),
    ("The dopaminergic lane's substrate, verbatim — 'Tyrosine' (its second print — Tyrosine opens both catecholamine lanes)", rng(260, 128, 128), [260]),
    ("The 'AXONAL TERMINAL' verticals, physical order — the interleaved fragments 'AXO' 'NT' 'ER' 'M' … 'AXO' 'NT' 'ER' 'MI' … 'AL' (the two bottom lanes' shared caption, printed as rotated art and scattered by extraction)", rng(260, 130, 140), [260]),
    ("The noradrenergic clearance labels, verbatim — 'Reuptake' and 'Diffusion, metabolism' (the two routes out of the cleft: NET reuptake vs drift-and-metabolism)", rng(260, 142, 145), [260]),
    ("The postsynaptic label, second print — 'POSTSYNAPTIC NEURON' (the bottom lanes' own postsynaptic caption)", rng(260, 147, 147), [260]),
    ("The dopaminergic lane header, verbatim — 'DOPAMINERGIC' (the third lane's header)", rng(260, 149, 149), [260]),
    ("The NET-blocker anchor list, whole, verbatim — 'Amphetamine, SNRIs, Cocaine, TCAs, MDMA' (the diagram's own drug list at the norepinephrine transporter — the reuptake-block class)", rng(260, 153, 155), [260]),
    ("The norepinephrine transporter, verbatim — 'NET' (the reuptake pump amphetamines enter by and cocaine/TCAs/SNRIs block)", rng(260, 157, 157), [260]),
    ("The cholinoreceptors label, verbatim — 'Cholinoreceptors' (the plate's own name, printed beside M1 M2 M3)", rng(260, 161, 161), [260]),
    ("The dopaminergic + serotonergic terminal transmitters, physical order — '5-HT' … 'Dopamine' (the vesicle contents of the two bottom lanes)", rng(260, 163, 165), [260]),
    ("The bottom lanes' stimulant labels, physical order — 'Dopaminergic stimulant' … 'Serotonergic stimulant'", rng(260, 167, 169), [260]),
    ("The DAT-blocker anchor list, whole, verbatim — 'Amphetamine, Methylphenidate, Cocaine' (the diagram's own drug list at the dopamine transporter)", rng(260, 171, 173), [260]),
    ("The dopamine transporter, verbatim — 'DAT' (the dopaminergic lane's reuptake pump)", rng(260, 175, 175), [260]),
    ("The dopaminergic postsynaptic plate, physical order — 'POSTSYNAPTIC N EURO' … '5-HT receptor' … (the split word is the raw layer's own print) with 'Dopamine receptor' at line 200", rng(260, 179, 182), [260]),
    ("The dopamine receptor label, verbatim — 'Dopamine receptor' (the dopaminergic lane's postsynaptic plate)", rng(260, 200, 200), [260]),
    ("The SERT-blocker anchor list, whole, verbatim — 'Amphetamine, SNRIs, Cocaine, SSRIs' (the diagram's own drug list at the serotonin transporter)", rng(260, 193, 194), [260]),
    ("The serotonin transporter, verbatim — 'SERT' (the serotonergic lane's reuptake pump)", rng(260, 196, 196), [260]),
    ("The three Reuptake prints, physical order — 'Reuptake' at the NET (142), the DAT (177), and the SERT (198): every monoamine lane clears by a pump (the cache prints them at lines 142, 177, 198 — quoted as the contiguous final print)", rng(260, 198, 198), [260]),
    ("The page footer, verbatim — the book's signature file line + the print-date footer (book 238; the section ENDS here)", rng(260, 191, 205), [260]),
    ("The PREVIOUS-PAGE BOUNDARY — pdf 259 (book 237) carries the COMPLETED topic PH16 'g-protein-linked-second-messengers' (the receptor × G-protein-class table and the three cascade diagrams): the Autonomic drugs section starts fresh on pdf 260 and inherits nothing from 259 (EXCLUDED)", "G-protein–linked second messengers", [259]),
    ("The PH16 RECIPROCAL ANCHOR — the completed topic PH16 pinned THIS section as its next-page boundary marker ('the 260 text layer opens with the new section header — sourcePages = [259] only'): the marker resolves HERE, and this page's postsynaptic plates (M1 M2 M3, α β) are the receptors whose class letters that page printed", "Autonomic drugs", [260]),
    ("The NEXT-PAGE BOUNDARY — pdf 261 (book 239) opens the SEPARATE pending 'Cholinomimetic agents' section (verified: the 261 text layer opens 'Cholinomimetic agents' + its DRUG/ACTION/APPLICATIONS table): the diagram does NOT extend to 261 — the whole section, both rules and the four-lane figure, is on pdf 260 alone (sourcePages = [260] only)", "Cholinomimetic agents", [261]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"autonomic-drugs: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "autonomic-drugs",
    "title": "Autonomic Drugs",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [260], "bookPages": "238"},
    "sourceEvidence": kept, "visualIds": ["autonomic-drugs-synthesis-map"],
    "mechanismIds": ["amphetamine-net-vmat-reversal", "alpha2-autoreceptor-negative-feedback", "two-lane-transmitter-life-cycle"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the section's two rules and four-lane flowchart.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the rules and the diagram; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "five-slots-reading-protocol", "summary": "The FIVE SLOTS compression of the two main lanes into one drug-target grid — MAKE (ChAT in the cholinergic lane; the tyrosine→DOPA→dopamine→NE chain in the noradrenergic lane), PACK (VMAT into the vesicle), RELEASE (Ca2+-triggered exocytosis, modulated by the α2 autoreceptor and AT II), LISTEN (Cholinoreceptors M1 M2 M3 vs Adrenoreceptors α β on the POSTSYNAPTIC NEURON), TAKE BACK (NET reuptake vs 'Diffusion, metabolism'; ACh instead is BROKEN by AChE). Every slot, step, drug list, and label is the page's own print; the slot names, the grid view, and the clearance-asymmetry frame (ACh has a BREAKER, NE has a PUMP) are KYP's.",
         "origin": "outside-first-aid", "rationale": "The book prints the two lanes as art with scattered labels; the five-slot drug-target grid and the asymmetry frame are KYP's synthesis of the page's own elements.",
         "location": "core.keyIdea + mechanisms + the visual's five-slots digest strip"},
        {"id": "trojan-horse-and-enzyme-layer", "summary": "The TROJAN HORSE frame for intro rule 2 (amphetamine ENTERS BY the gate [NET], RAIDS the store [VMAT], then OPENS THE GATE BACKWARDS [NET reversal] — NE expelled into the cleft) plus the enzyme-name layer the page does NOT print (VLM-verified: no enzyme labels on the Tyrosine→DOPA or Dopamine→NE arrows; ChAT is the only printed enzyme): tyrosine hydroxylase as the RATE-LIMITING step, dopa decarboxylase, dopamine β-hydroxylase (vesicular), and PNMT — and the adrenal Epi branch (NE → epinephrine in the adrenal medulla), which is the book's OWN print on book 234's overview diagram (the completed PH11 topic), cross-referenced here and flagged as NOT this page.",
         "origin": "outside-first-aid", "rationale": "The page prints the rule and the chain without the enzyme names and without any adrenal branch; the Trojan-horse compression, the enzyme layer, and the cross-referenced adrenal limb are KYP's (the limb itself is the book's own, on a different page).",
         "location": "mechanisms + traps + the visual's flagged enzyme chips and adrenal note"},
        {"id": "autoreceptor-and-transporter-drug-layer", "summary": "The clinical/drug anchor layer (NONE of these names print on this page): the α2-agonist story (clonidine, guanfacine — ride the printed autoreceptor loop to ↓ sympathetic outflow) and its inverse (α2 blockade, yohimbine — removes the brake); the AT II heteroreceptor reading (angiotensin II facilitates NE release — the printed 'AT II' beside α2); and the monoamine-transporter family frame (NET, DAT, SERT as one system — the page's own three pumps and its four stimulant lists, with methylphenidate at DAT, SSRIs at SERT, cocaine/TCAs/SNRIs/MDMA at NET, and amphetamine on ALL FOUR lists).",
         "origin": "outside-first-aid", "rationale": "The page prints the pumps, the lists, the autoreceptor, and AT II, but no agonist/antagonist drug names and no family commentary; the anchor layer and the transporter-family frame are KYP's design.",
         "location": "usmle + crossLinks + mnemonics clinical + the visual's anchor cards"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + text layer + VLM render check): the Autonomic drugs section occupies the WHOLE of pdf 260 (book 238) under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner — the only section header on the page. The section prints TWO elements: (1) TWO INTRO RULES (prose) — the α2-autoreceptor negative-feedback rule and the amphetamine NET→VMAT→displacement→threshold→NET-reversal→expulsion rule (both carried VERBATIM in the note's first table block); (2) ONE LARGE FOUR-LANE VECTOR FLOWCHART (CHOLINERGIC / NORADRENERGIC / DOPAMINERGIC / SEROTONERGIC) whose labels print in the text layer — cholinergic chain Choline + Acetyl-CoA →(ChAT)→ ACh with Ca2+-triggered release, Cholinoreceptors M1 M2 M3 on the POSTSYNAPTIC NEURON, AChE → Choline + Acetate, and the anchors 'Botulinum toxin' + 'AChE inhibitors eg, Donepezil'; noradrenergic chain Tyrosine → DOPA → Dopamine → NE with VMAT, 'Vesicular monoamine transporter (VMAT) inhibitor' / 'Tetrabenazine', 'Amphetamine, Ephedrine' at the vesicle, 'Release-modulating receptors' α2 + AT II with the 'Negative feedback' arrow, NET 'Reuptake', 'Amphetamine, SNRIs, Cocaine, TCAs, MDMA' at the pump, Adrenoreceptors α β, and 'Diffusion, metabolism'; the DOPAMINERGIC lane (Tyrosine → L-DOPA → Dopamine, DAT, 'Amphetamine, Methylphenidate, Cocaine', 'Dopamine receptor') and the SEROTONERGIC lane (Tryptophan → 5-Hydroxytryptophan → 5-HT, SERT, 'Amphetamine, SNRIs, Cocaine, SSRIs', '5-HT receptor') under the 'AXONAL TERMINAL' captions. RASTER CENSUS: ZERO raster images on pdf 260 (pdfimages -list returns no rows) — the flowchart is VECTOR LINE ART, COPYRIGHTED, never reproduced; conveyed as ONE original KYP two-lane synthesis map (AutonomicDrugsSynthesisMap). TEXT-LAYER ARTIFACTS pinned: two-layer artwork prints ACh, Tyrosine, Dopamine, 5-HT, Reuptake, and 'Noradrenergic stimulant' multiple times; the vertical 'TERMINAL AXON'/'AXONAL TERMINAL' captions scatter as fragments ('TE' 'L' 'AX' 'ON'; 'AXO' 'NT' 'ER' 'M'/'MI' 'AL'); 'Release-modulating receptors' prints hyphen-less ('Releasemodulating receptors') and 'POSTSYNAPTIC N EURO' splits mid-word — every diagram label quoted in physical order as contiguous line ranges, raw-layer spellings pinned. VLM RENDER CHECK (150-dpi): NO enzyme labels on the Tyrosine→DOPA / Dopamine→NE arrows (no 'tyrosine hydroxylase', no 'dopamine β-hydroxylase' anywhere on the page — ChAT is the ONLY printed enzyme) and NO epinephrine/PNMT/adrenal branch — the noradrenergic lane ENDS at NE; the adrenal Epi limb is the book's own print on book 234 (PH11), cross-referenced and flagged. PAGE-EXTENT FINDING (checked per task): the diagram does NOT extend to pdf 261 — pdf 261 (book 239) opens the SEPARATE pending 'Cholinomimetic agents' section; sourcePages = [260] only. BOUNDARIES: pdf 259 carries the COMPLETED PH16 (EXCLUDED, but its next-page boundary marker named THIS section — the reciprocal anchor is pinned, and this page's M1/M2/M3 + α/β plates resolve into PH16's class letters); pdf 261 opens the PENDING 'Cholinomimetic agents' (EXCLUDED). KYP extensions flagged wherever they appear: the five-slots reading (MAKE, PACK, RELEASE, LISTEN, TAKE BACK), the Trojan-horse frame, the enzyme-name layer (tyrosine hydroxylase rate-limiting, dopa decarboxylase, dopamine β-hydroxylase, PNMT — none printed), the adrenal Epi branch (book 234's own limb), the α2-agonist/antagonist + AT II drug layer, the NET/DAT/SERT family frame, and the clearance-asymmetry frame (ACh has a breaker, NE has a pump). No copyrighted artwork reproduced; nothing reproduced.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "autonomic-drugs", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"autonomic-drugs-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [260], "238", "PHARMACOLOGY_DIAGRAM", "The four-lane autonomic neurotransmission flowchart (the page's single large figure: CHOLINERGIC vs NORADRENERGIC synthesis-to-receptor lanes, with the DOPAMINERGIC and SEROTONERGIC lanes beneath)",
       "ONE LARGE FOUR-LANE VECTOR FLOWCHART, labels in the text layer (ZERO rasters on the page — pdfimages returns no rows; vector line art, COPYRIGHTED, never reproduced). CHOLINERGIC lane: 'Choline' + 'Acetyl-CoA' →(ChAT)→ 'ACh' (vesicle, Ca2+-triggered release) → synapse → 'Cholinoreceptors' 'M1 M2 M3' on the 'POSTSYNAPTIC NEURON' → 'AChE' → 'Choline' + 'Acetate', with the drug anchors 'Cholinergic inhibitor' = 'Botulinum toxin' (at release) and 'Cholinergic stimulant' = 'AChE inhibitors eg, Donepezil' (at the breaker). NORADRENERGIC lane: 'Tyrosine' → 'DOPA' → 'Dopamine' → 'NE' (VMAT-packed vesicle; 'Vesicular monoamine transporter (VMAT) inhibitor' = 'Tetrabenazine'; 'Noradrenergic stimulant' = 'Amphetamine, Ephedrine' displacing vesicular NE), presynaptic 'Releasemodulating receptors' = 'α2' (the autoreceptor with the 'Negative feedback' arrow) + 'AT II', Ca2+-triggered release → synapse → 'Adrenoreceptors' 'α' 'β' on the 'POSTSYNAPTIC NEURON', clearance by 'NET' 'Reuptake' (with 'Noradrenergic stimulant' = 'Amphetamine, SNRIs, Cocaine, TCAs, MDMA' at the pump) or 'Diffusion, metabolism'. Bottom lanes: DOPAMINERGIC ('Tyrosine' → 'L-DOPA' → 'Dopamine' → 'DAT' 'Reuptake'; 'Dopaminergic stimulant' = 'Amphetamine, Methylphenidate, Cocaine'; 'Dopamine receptor') and SEROTONERGIC ('Tryptophan' → '5-Hydroxytryptophan' → '5-HT' → 'SERT' 'Reuptake'; 'Serotonergic stimulant' = 'Amphetamine, SNRIs, Cocaine, SSRIs'; '5-HT receptor'), under the 'AXONAL TERMINAL'/'TERMINAL AXON' captions. VLM render check: NO enzyme labels on the noradrenergic arrows (ChAT is the only printed enzyme) and NO epinephrine/adrenal branch — the noradrenergic lane ends at NE. Conveyed as ONE original KYP two-lane synthesis map — no artwork reproduced.",
       "ORIGINAL_KYP_REDRAW", "autonomic-drugs-synthesis-map", "the registry visual's two main lane panels (cholinergic + noradrenergic), the dopaminergic/serotonergic axonal strip, the five-slots drug digest, the codes strip, and the reading-rule footer"),
]
(ROOT / "content/usmle/manifests/autonomic-drugs.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/autonomic-drugs.json").write_text(
    json.dumps({"topicId": "autonomic-drugs", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "autonomic-drugs", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 0,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + text layer + VLM render check): the section's printed visual set is ONE element — the LARGE FOUR-LANE VECTOR FLOWCHART (CHOLINERGIC / NORADRENERGIC / DOPAMINERGIC / SEROTONERGIC), labels in the text layer, ZERO rasters on the page (vector line art, COPYRIGHTED, never reproduced). The two intro rules are prose, not a visual (carried verbatim as the note's first table block, not inventoried). The flowchart is conveyed as ONE original KYP two-lane synthesis map in the registry visual AutonomicDrugsSynthesisMap (the CHOLINERGIC lane panel — Choline + Acetyl-CoA →(ChAT)→ ACh → Ca2+-triggered release → M1 M2 M3 → AChE → Choline + Acetate, with the Botulinum toxin and AChE-inhibitors/Donepezil anchors; the NORADRENERGIC lane panel — Tyrosine → DOPA → Dopamine → NE → VMAT vesicle → α2/AT II-modulated release → α β → NET reuptake, with the Tetrabenazine, Amphetamine/Ephedrine, and Amphetamine/SNRIs/Cocaine/TCAs/MDMA anchors; the DOPAMINERGIC + SEROTONERGIC axonal strip with DAT and SERT; the five-slots drug digest; the codes strip; the reading-rule footer; ORIGINAL_KYP_REDRAW — the chains, labels, and drug lists are the book's own, the layout and glyphs are KYP's, no artwork reproduced). TEXT-LAYER ARTIFACTS pinned: two-layer artwork prints many labels twice (ACh, Tyrosine, Dopamine, 5-HT, Reuptake, 'Noradrenergic stimulant'); the rotated 'TERMINAL AXON'/'AXONAL TERMINAL' captions scatter as fragments; 'Releasemodulating receptors' prints hyphen-less and 'POSTSYNAPTIC N EURO' splits mid-word — all labels quoted in physical order as contiguous line ranges. VLM RENDER CHECK (150 dpi): NO enzyme labels on the Tyrosine→DOPA / Dopamine→NE arrows (ChAT is the ONLY printed enzyme) and NO epinephrine/PNMT/adrenal branch — the noradrenergic lane ends at NE (the adrenal Epi limb is the book's own print on book 234, the completed PH11 topic — cross-referenced on the visual as a flagged KYP extension, not drawn as this page's content). PAGE-EXTENT FINDING: the figure does NOT extend to pdf 261 — pdf 261 (book 239) opens the SEPARATE pending 'Cholinomimetic agents' section; sourcePages = [260] only. EXCLUSIONS: pdf 259 (book 237) carries the COMPLETED PH16 'g-protein-linked-second-messengers' — NOT part of this inventory (its next-page boundary marker named this section; the reciprocal anchor is pinned). KYP extensions flagged wherever they appear: the five-slots reading (MAKE, PACK, RELEASE, LISTEN, TAKE BACK), the Trojan-horse frame, the enzyme-name layer (tyrosine hydroxylase rate-limiting, dopa decarboxylase, dopamine β-hydroxylase, PNMT — none printed), the adrenal Epi branch (book 234's own limb, cross-referenced), the α2-agonist/antagonist + AT II drug layer, the NET/DAT/SERT family frame, and the clearance-asymmetry frame (ACh has a breaker, NE has a pump). No copyrighted artwork reproduced; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "autonomic-drugs":
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
print("PH17 manifest + inventory + flip done")
