#!/usr/bin/env python3
"""PH15 autonomic-drugs-synapse — manifest + inventory (Pharmacology
autonomic-drugs batch), STAGED under .usmle-pipeline-cache/staging-ph15/
(the promotion step owns content/). Source: pdf 260 / book 238 — FULL page,
no shared-page split (the page is the "Autonomic drugs" section opener:
TWO printed intro blocks + the page-dominating FOUR-PANEL VECTOR SYNOPTIC
FIGURE). Census (pdfimages): ZERO raster images on pdf 260 — CONFIRMED,
not assumed — the figure is pure vector line art. THE VLM WAS AVAILABLE
THIS SESSION (unlike the ph6-ph10 batch, which lost it to a 401 outage):
four passes (glm-4.6v) were run and saved to
staging-ph15/vlm-census.txt — (1) full page at 120 DPI, (2) full page at
200 DPI, (3) targeted 200 DPI crops of the top (cholinergic +
noradrenergic) and bottom (dopaminergic + serotonergic) halves, (4)
per-panel zooms of the two top panels. VLM adjudications, documented:
(a) no photographs, no margin notes, no mnemonics anywhere on the page;
(b) the source figure is a 2x2 grid (cholinergic top-left, noradrenergic
top-right, dopaminergic bottom-left, serotonergic bottom-right); (c) the
"Releasemodulating receptors" bracket belongs to the NORADRENERGIC panel
and groups exactly AT II (green +) and alpha2 (red -) on the presynaptic
membrane — the cholinergic panel prints NO presynaptic receptor; (d) M1,
M2, M3 sit on the POSTSYNAPTIC membrane only, under the one-word label
"Cholinoreceptors"; (e) the noradrenergic synthesis chain prints "DOPA"
(no L- prefix) while the dopaminergic chain prints "L-DOPA" — both
carried verbatim; (f) Ca2+ channels print ONLY on the cholinergic and
noradrenergic terminals; (g) botulinum's red minus terminates on the
release machinery, the donepezil banner (a STIMULANT banner) carries a
red minus onto AChE, the amphetamine/ephedrine plus terminates on the
release machinery, tetrabenazine's minus on VMAT, the NET/SERT/DAT
blocker banners' minus on the membrane transporters, whose own Reuptake
arrows run cleft -> terminal, and "Diffusion, metabolism" points away
from the cleft; (h) the amphetamine reverse transport is NOT drawn as an
arrow in the source figure — it is the printed intro paragraph, so the
redraw renders it as the noradrenergic panel's four-step annotated strip
labeled as the printed paragraph's mechanism; (i) the source's small
publisher logo (lower right of the serotonergic panel) is not reproduced.
The registry visual (AutonomicSynapseMap in visuals/pharm-p15.tsx,
visualId autonomic-synapse-map) is an ORIGINAL KYP REDRAW: the source's
2x2 layout is re-laid-out as four vertical panels (cholinergic |
noradrenergic | serotonergic | dopaminergic) per the production spec,
with every printed label, drug anchor, and arrow direction preserved.
Text-layer quirks, documented: (1) the two top panels' labels INTERLEAVE
on shared lines (the ph9/m38 convention — quoted contiguous as printed,
panel attribution adjudicated via the VLM render); (2) the diagonal AXON
TERMINAL watermark splits into fragments (TE, L, AX, ON, IN A, RM, AXO,
NT, ER, M, MI, AL, NA) — carried verbatim as fragments; (3) the header
prints "SEC TION II" (a pdftotext mapping artifact, as in prior batches)
and the -> and up-arrow glyphs carry 0x8E/0x8F mapping artifacts
immediately before them (stripped by the verification normalizer); (4)
the indd slug prints BETWEEN the figure's late-drawn labels in the
content stream (after the POSTSYNAPTIC fragments, before the SERT
cluster), and tetrabenazine's banner halves print 150 lines apart
(lines 47-50 and line 202); (5) "Releasemodulating" prints as ONE word.
No source typos were found in the printed text blocks themselves."""
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
L = {260: pages[259].split("\n")}
P = {260: norm(pages[259])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E15 = [
    ("Page identity — the running header, section title, and subsection banner: book page 238, SECTION II, PHARMACOLOGY, Autonomic drugs, ▶ PHARMACOLOGY—AUTONOMIC DRUGS (the FULL page belongs to THIS topic — no shared-page split; the 'SEC TION II' split is a pdftotext mapping artifact, carried as printed)", rng(260, 1, 9), [260]),
    ("VERBATIM INTRO (a) — the α2-autoreceptor rule, the page's first printed sentence: release of norepinephrine from a sympathetic nerve ending is modulated by NE itself, acting on presynaptic α2-autoreceptors → negative feedback", rng(260, 11, 12), [260]),
    ("VERBATIM INTRO (b) — the amphetamine paragraph in full: amphetamines use NET to enter the presynaptic terminal, utilize VMAT to enter neurosecretory vesicles, displace NE from the vesicles, and once NE reaches a concentration threshold the action of NET is reversed and NE is expelled into the synaptic cleft, contributing to the characteristics and effects of ↑ NE observed in patients taking amphetamines", rng(260, 13, 17), [260]),
    ("The figure's two TOP panel titles + the first cholinergic labels — CHOLINERGIC and NORADRENERGIC (the source figure is a 2×2 grid: these are the top row), the first AXON TERMINAL watermark fragments (TE, L), and the cholinergic synthesis pair ChAT / ACh", rng(260, 19, 28), [260]),
    ("The cholinergic terminal cluster interleaved with noradrenergic synthesis — AXON TERMINAL fragments (AX, ON, IN A), Botulinum toxin (the Cholinergic inhibitor banner's drug; VLM 200 DPI: its red ⊖ terminates on the release machinery), the noradrenergic DOPA chip (printed WITHOUT the L- prefix — the dopaminergic panel prints L-DOPA), a second ACh, and the cholinergic Ca2+ channel", rng(260, 30, 42), [260]),
    ("The release-modulation + banner cluster — Releasemodulating receptors (one word as printed; VLM 200 DPI: the bracket belongs to the NORADRENERGIC panel and groups AT II ⊕ and α2 ⊖ on the presynaptic membrane — the cholinergic panel prints no presynaptic receptor), Vesicular monoamine transporter (VMAT) inhibitor (its drug Tetrabenazine prints 150 lines later, at line 202 — the content-stream interleave documented), Amphetamine, Ephedrine (the ⊕ release banner), Dopamine (the noradrenergic chain's third chip), more AXON TERMINAL fragments (RM, TE, ON, RM), and the first class-banner titles: Cholinergic inhibitor / Noradrenergic stimulant", rng(260, 44, 66), [260]),
    ("The substrates + autoreceptor cluster, both top panels interleaved — Tyrosine (noradrenergic synthesis start) beside Choline + Acetyl-CoA (the cholinergic substrates feeding ChAT), VMAT, AT II, NE, α2, the second Noradrenergic stimulant title, Negative feedback (the label on the dashed cleft-NE → α2 loop), and the cholinergic breakdown products Choline + Acetate", rng(260, 68, 92), [260]),
    ("The cleft enzyme + both postsynaptic rows — AChE (the cholinergic cleft enzyme), M1 M2 M3 (VLM 200 DPI: postsynaptic membrane only, under the one-word label Cholinoreceptors), AChE inhibitors eg, Donepezil (the Cholinergic stimulant banner; its red ⊖ lands on AChE), POSTSYNAPTIC NEURON, and the noradrenergic postsynaptic row β α under Adrenoreceptors", rng(260, 94, 111), [260]),
    ("The bottom row's titles + synthesis chains, interleaved — SEROTONERGIC with its chain Tryptophan / 5-Hydroxytryptophan / 5-HT, beside the dopaminergic chain Tyrosine / L-DOPA (WITH the L- prefix) / Dopamine, plus AXON TERMINAL fragments (NA, L)", rng(260, 113, 128), [260]),
    ("The cleft-clearance cluster — AXON TERMINAL watermark fragments (AXO NT ER M / AXO NT ER MI AL), Reuptake (the NET/SERT/DAT arrows, direction cleft → terminal per the VLM render), Diffusion, metabolism (pointing away from the noradrenergic cleft), and POSTSYNAPTIC NEURON", rng(260, 130, 147), [260]),
    ("The dopaminergic panel + every remaining banner — DOPAMINERGIC, the NET-blocker list Amphetamine, SNRIs, Cocaine, TCAs, MDMA with NET (VLM: the banner's red ⊖ terminates on the NET transporter), Cholinergic stimulant, Cholinoreceptors, 5-HT, Dopamine, Dopaminergic stimulant, Serotonergic stimulant, the DAT-blocker list Amphetamine, Methylphenidate, Cocaine with DAT", rng(260, 149, 175), [260]),
    ("The final fragments + footer + serotonergic pump cluster — the bottom row's split POSTSYNAPTIC NEURON watermarks (POSTSYNAPTIC N / EURO / N / N), the indd slug FAS1_2026_05-Pharmacology.indd 238 (page identity; the content stream prints it BETWEEN the figure's late labels), the SERT-blocker list Amphetamine, SNRIs, Cocaine, SSRIs with SERT and Reuptake, Dopamine receptor, Tetrabenazine (the second half of the VMAT-inhibitor banner) and the noradrenergic Ca2+ channel, and the timestamp 12/19/25 8:07 AM", rng(260, 177, 205), [260]),
]
for c, q, pgs in E15:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"autonomic-drugs-synapse: evidence {len(kept)}/{len(E15)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m15 = {"topicId": "autonomic-drugs-synapse", "title": "Autonomic Drugs: Synapse Targets & Overview",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [260], "bookPages": "238–238"},
    "sourceEvidence": kept, "visualIds": ["autonomic-synapse-map"],
    "mechanismIds": ["alpha2-autoreceptor-feedback-map", "amphetamine-reverse-transport-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case/recall/rapid-review attack structure layered over the two printed paragraphs and the four-panel figure — 4 patterns (tetrabenazine depletion, cocaine NET blockade, donepezil's AChE inhibition, the amphetamine NET reversal), 4 traps (tetrabenazine vs cocaine, α2-autoreceptor vs postsynaptic α/β, stimulant-banner-vs-red-⊖ arrows, NET vs VMAT), 3 pivots, and the 10-item recall deck.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the figure, its labels, and the two paragraphs; the attack structure is a KYP design.",
         "location": "usmle section + recall + rapidReview"},
        {"id": "reading-protocol", "summary": "The five-move reading protocol (NAME THE PANEL → NAME THE COMPARTMENT → NAME THE DIRECTION → APPLY THE LEDGER → CHECK THE PRINTED EXCEPTIONS) and the directionality ledger (block the membrane pump → cleft rises; block the vesicle pump → releasable falls; inhibit the cleft enzyme → transmitter survives; block release → nothing leaves; open the autoreceptor → release falls).",
         "origin": "outside-first-aid", "rationale": "The source prints the figure and the two paragraphs but no reading order; the compartment sort and the direction ledger are KYP's synthesis of the figure's anchors into one protocol.",
         "location": "core.keyIdea + blocks[3] the steps block + blocks[4] the exam callout"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (THREE MEMBRANE PUMPS, ONE VESICLE PUMP / AMPHETAMINE AND COCAINE RIDE EVERY PUMP / IN BY NET, PACKED BY VMAT, OUT IN REVERSE / α2 IS THE BRAKE, AT II IS THE GAS) — no mnemonic prints on the page.",
         "origin": "outside-first-aid", "rationale": "VLM census (four passes, 120 + 200 DPI) confirms NO margin notes or mnemonics anywhere on pdf 260; the four codes are KYP's design.",
         "location": "mnemonics + the registry visual's exam-note zones + rapidReview.m3"},
        {"id": "mini-case-layer", "summary": "The tetrabenazine-vs-cocaine miniCase — a tardive-dyskinesia patient on tetrabenazine with a monoamine-depletion picture (orthostatic hypotension, blunted reflex tachycardia, depressed mood), asked where the drug acts; the correct answer is VMAT blockade, with distractors built from the page's own printed anchors (cocaine-style NET blockade — wrong direction; α2-autoreceptor activation — the printed rule's receptor, wrong drug; the amphetamine NET reversal — same two transporters, opposite direction).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the drug banners and the two mechanism paragraphs but never asks the learner to discriminate their directions in a vignette; the stem, the four options, and the reasoning are KYP's design.",
         "location": "usmle.miniCase"},
        {"id": "drug-card-layer", "summary": "The drugs array (amphetamine, ephedrine, tetrabenazine, cocaine, donepezil, botulinum toxin). Each card's TARGET and MECHANISM come from the printed banners and the printed paragraphs; the klass/effect/uses/adverse/clue framing — and the clinical uses in particular (tardive dyskinesia, ADHD, Alzheimer disease, focal dystonias) — are standard clinical anchoring from outside this page.",
         "origin": "outside-first-aid", "rationale": "The page anchors the mechanisms but prints no indications or adverse-effect profiles; the DrugCard framing is a KYP design and its clinical fields are not attributed to the page.",
         "location": "drugs"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL PAGE (no shared-page split): pdf 260 / book 238 is the 'Autonomic drugs' section opener — TWO printed intro paragraphs (the α2-autoreceptor negative-feedback sentence and the amphetamine NET/VMAT reverse-transport paragraph, both quoted VERBATIM) + ONE page-dominating FOUR-PANEL VECTOR SYNOPTIC FIGURE (cholinergic, noradrenergic, serotonergic, dopaminergic), every label quoted verbatim in the text layer's physical order. CENSUS: pdfimages = ZERO raster images on pdf 260 — CONFIRMED, not assumed (the expectation of zero rasters held) — the figure is pure vector line art; THE VLM WAS AVAILABLE THIS SESSION (the ph6–ph10 batch lost it to a 401 outage): four passes were run (glm-4.6v — full page at 120 DPI, full page at 200 DPI, targeted 200 DPI crops of the top and bottom halves, per-panel zooms of the two top panels) and saved to staging-ph15/vlm-census.txt; the VLM confirms no photographs, no margin notes, and no mnemonics anywhere on the page. VLM ADJUDICATIONS (the text layer interleaves the side-by-side panels' labels, so placement + arrow directions were adjudicated on the 200 DPI render, per the shared brief's disputed-mapping protocol): (a) the source figure is a 2×2 grid — cholinergic top-left, noradrenergic top-right, dopaminergic bottom-left, serotonergic bottom-right — re-laid-out in the KYP redraw as four VERTICAL panels (cholinergic | noradrenergic | serotonergic | dopaminergic, the production spec's column order) with every label, drug anchor, and arrow direction preserved; (b) 'Releasemodulating receptors' (one word as printed) belongs to the NORADRENERGIC panel and brackets exactly AT II (green ⊕ to the release machinery) and α2 (red ⊖ — the negative-feedback arm; the dashed curve runs from the cleft NE back up to α2, with the label 'Negative feedback') — the cholinergic panel prints NO presynaptic receptor; (c) M1, M2, M3 sit on the POSTSYNAPTIC membrane only, under the one-word label 'Cholinoreceptors'; (d) the noradrenergic chain prints 'DOPA' (no L- prefix) while the dopaminergic chain prints 'L-DOPA' — both spellings carried verbatim and flagged in the redraw; (e) Ca2+ channels print ONLY on the cholinergic and noradrenergic terminals (the bottom panels print none, and also no inhibitor banner and no release-modulating receptor); (f) anchor terminations as adjudicated: botulinum's red ⊖ on the release machinery (not synthesis), the donepezil banner (a STIMULANT banner) carrying a red ⊖ onto AChE, amphetamine/ephedrine's ⊕ on the release machinery, tetrabenazine's ⊖ on VMAT, the NET/SERT/DAT blocker banners' ⊖ on the membrane transporters whose own Reuptake arrows run cleft → terminal, 'Diffusion, metabolism' pointing away from the cleft; (g) the amphetamine reverse transport is NOT drawn as an arrow in the source figure — it is the printed paragraph, so the redraw renders it as the noradrenergic panel's four-step annotated strip labeled as the printed paragraph's mechanism (documented, not invented); (h) the source's small publisher logo (lower right of the serotonergic panel) is NOT reproduced. TEXT-LAYER QUIRKS, documented: (1) the two top panels' labels INTERLEAVE on shared lines (the ph9/m38 convention — contiguous ranges quoted as printed, panel attribution adjudicated via the VLM render); (2) the diagonal AXON TERMINAL watermark splits into fragments (TE, L, AX, ON, IN A, RM, AXO, NT, ER, M, MI, AL, NA) carried verbatim as fragments; (3) the header prints 'SEC TION II' (a pdftotext mapping artifact, as in prior batches) and the → and ↑ glyphs in the printed paragraphs carry 0x8E/0x8F mapping artifacts immediately before them (stripped by the verification normalizer); (4) the content stream prints the indd slug BETWEEN the figure's late-drawn labels (after the POSTSYNAPTIC fragments, before the SERT cluster) and tetrabenazine's banner halves 150 lines apart (lines 47–50 and line 202); (5) no source typos were found in the printed text blocks themselves. Batch conventions: productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the per-record INVENTORY productionStatus is 'complete'); outputs are STAGED under .usmle-pipeline-cache/staging-ph15/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'autonomic-synapse-map' is therefore not yet in visuals/registry.tsx by design).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "autonomic-drugs-synapse", "requiredInKYP": True}
inv15 = [
    dict(SV_BASE, **{
        "visualId": "autonomic-drugs-synapse-sv1",
        "sourcePages": {"part": 1, "pdfPages": [260], "bookPages": "238"},
        "visualType": "PHARMACOLOGY_DIAGRAM",
        "visualPurpose": "The four-panel synapse figure (book 238): the cholinergic, noradrenergic, serotonergic, and dopaminergic synapses with every synthesis chain, transporter, cleft-clearance route, drug banner, and postsynaptic receptor — the master target map of autonomic pharmacology",
        "sourceFigureDescription": "VECTOR LINE ART, no raster (pdfimages: ZERO raster images on pdf 260, CONFIRMED; VLM available this session — four passes at 120 + 200 DPI including per-panel crops, saved to staging-ph15/vlm-census.txt): a page-dominating 2×2 grid of four synapse cartoons. CHOLINERGIC (top-left): ChAT joining Choline + Acetyl-CoA into ACh; vesicles; a Ca2+ channel with a green ⊕ to the release site; the red-bannered 'Cholinergic inhibitor — Botulinum toxin' whose red ⊖ terminates on the release machinery; the cleft enzyme AChE splitting ACh into Choline + Acetate; the green-bannered 'Cholinergic stimulant — AChE inhibitors eg, Donepezil' whose red ⊖ lands on AChE; postsynaptic M1, M2, M3 under 'Cholinoreceptors'. NORADRENERGIC (top-right): Tyrosine → DOPA → Dopamine in the cytoplasm, Dopamine → NE crossing the vesicle membrane via VMAT; 'Vesicular monoamine transporter (VMAT) inhibitor — Tetrabenazine' (⊖ on VMAT); the 'Releasemodulating receptors' bracket grouping AT II (⊕) and α2 (⊖) with the dashed 'Negative feedback' curve from the cleft NE; 'Noradrenergic stimulant — Amphetamine, Ephedrine' (⊕ release); NET with its cleft→terminal 'Reuptake' arrow blocked by 'Noradrenergic stimulant — Amphetamine, SNRIs, Cocaine, TCAs, MDMA' (⊖ on NET); 'Diffusion, metabolism' leaving the cleft; postsynaptic α and β under 'Adrenoreceptors'; Ca2+ channel. SEROTONERGIC (bottom-right): Tryptophan → 5-Hydroxytryptophan → 5-HT; SERT + 'Reuptake' blocked by 'Serotonergic stimulant — Amphetamine, SNRIs, Cocaine, SSRIs' (⊖ on SERT); postsynaptic '5-HT receptor'; NO Ca2+, NO inhibitor banner. DOPAMINERGIC (bottom-left): Tyrosine → L-DOPA → Dopamine; DAT + 'Reuptake' blocked by 'Dopaminergic stimulant — Amphetamine, Methylphenidate, Cocaine' (⊖ on DAT); postsynaptic 'Dopamine receptor'; NO Ca2+, NO inhibitor banner. A small publisher logo prints at the lower right of the serotonergic panel (not reproduced).",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "autonomic-synapse-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the registry visual (AutonomicSynapseMap in visuals/pharm-p15.tsx): four vertical panels (cholinergic | noradrenergic | serotonergic | dopaminergic — the source's 2×2 layout re-laid-out vertically per the production spec), each carrying the axon terminal with its synthesis chain and vesicle, the Ca2+ channel where the source prints one (cholinergic + noradrenergic only), the synaptic cleft with its clearance route (AChE → Choline + Acetate for cholinergic; NET/SERT/DAT Reuptake + Diffusion, metabolism for the amines), the drug-anchor chips with their exact printed ⊖/⊕ terminations, the postsynaptic receptor row, the class banner(s) as printed, and an at-this-synapse exam note; the noradrenergic panel additionally carries the α2/AT II release-modulating bracket with the dashed negative-feedback loop and the four-step amphetamine reverse-transport strip (the printed paragraph, rendered as annotated steps and labeled as such); the printed labels are also carried verbatim in the note's label table (blocks[2]) and the two intro paragraphs verbatim in blocks[1]",
        "productionStatus": "complete",
        "plannedKypVisualId": "autonomic-synapse-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-ph15"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "autonomic-drugs-synapse.json").write_text(json.dumps(m15, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "autonomic-drugs-synapse.json").write_text(
    json.dumps({"topicId": "autonomic-drugs-synapse", "chapterId": "pharmacology", "inventory": inv15,
                "coverageAudit": {"topicId": "autonomic-drugs-synapse", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 0,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "ONE visual asset on the source page (pdfimages: ZERO rasters, CONFIRMED — the page's figure is pure vector line art; the two intro paragraphs are prose, not a table): the page-dominating FOUR-PANEL SYNOPTIC FIGURE (cholinergic, noradrenergic, serotonergic, dopaminergic), accounted for as an ORIGINAL KYP REDRAW — autonomic-synapse-map (AutonomicSynapseMap in visuals/pharm-p15.tsx): the source's 2×2 grid re-laid-out as four vertical panels with every printed label, drug anchor, and arrow direction preserved as adjudicated on the 200 DPI VLM render (the Releasemodulating receptors bracket to the noradrenergic panel; M1/M2/M3 postsynaptic only; DOPA vs L-DOPA spellings; Ca2+ channels on the cholinergic and noradrenergic terminals only; the amphetamine reverse transport rendered as the printed paragraph's four-step strip since the source draws no such arrow; the publisher logo not reproduced). Nothing is reproduced; all printed labels are quoted verbatim in the note's label table (blocks[2]) and the two intro paragraphs verbatim in blocks[1]. Census: zero raster images (pdfimages, CONFIRMED) and no margin mnemonics (VLM, four passes at 120 + 200 DPI — the VLM was available this session, unlike the ph6–ph10 batch). FULL PAGE: no shared-page split — the whole of pdf 260 / book 238 belongs to this topic. STAGED under .usmle-pipeline-cache/staging-ph15/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH15 manifest + inventory staged: {OUT}/manifests/autonomic-drugs-synapse.json, {OUT}/visual-inventory/autonomic-drugs-synapse.json")
print(f"autonomic-drugs-synapse: evidence {len(kept)}/{len(E15)} verified")
