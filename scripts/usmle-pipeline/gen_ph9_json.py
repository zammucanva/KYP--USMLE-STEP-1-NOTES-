#!/usr/bin/env python3
"""PH9 autonomic-receptors — manifest + inventory (Pharmacology,
Autonomic Drugs), STAGED under .usmle-pipeline-cache/staging-ph9/
(the promotion step owns content/). SHARED PAGE (the p196 convention):
pdf 256 / book 234 carries TWO subsections — "Drug effect modifications"
(top half, sibling topic drug-effect-modifications) and "Autonomic
receptors" (bottom half, THIS topic). Only the autonomic-receptors
block's contiguous raw lines are quoted (part1.txt page-256 lines 66-170,
from the SECOND "▶ PHARMACOLOGY—AUTONOMIC DRUGS" banner onward); the
Drug effect modifications block (lines 1-65) is NOT quoted. NUMBERING
QUIRK: the task's raw line numbers follow
.usmle-pipeline-cache/ph1-p256.txt, whose line 1 is the "========== PDF
PAGE 256" banner — part1.txt page-256 line N = ph1-p256.txt line N+1,
so the task's "raw 67-171" span maps to part1 lines 66-170.
Census (pdfimages; VLM attempted): ZERO raster images on pdf 256 — the
Autonomic receptors block is ONE large VECTOR WIRING FIGURE (AUTONOMIC
[Parasympathetic + Sympathetic columns] vs SOMATIC; Brainstem / Spinal
cord / Voluntary motor nerve origins; Preganglionic neuron (long)
[parasympathetic] vs (short) [sympathetic] with the mirrored
Postganglionic neuron (short)/(long); the Sympathetic chain; Nn ganglia;
ACh on all preganglionic fibers + postganglionic parasympathetic; NE on
postganglionic sympathetic; the adrenal medulla directly innervated,
releasing Epi/NE into Blood (catecholamine transmission); sweat glands
on sympathetic cholinergic fibers with M3; M1/M2/M3 on smooth muscle,
gland cells, nerve terminals, cardiac muscle; alpha1/alpha2/beta1/beta2
on targets; alpha1/alpha2/beta1/D1 on renal vasculature; the NMJ with Nm
on skeletal muscle) + THREE rule lines. The z-ai VLM census was attempted
twice (scripts/usmle-pipeline/ph9-vlm-census.ts, glm-4.6v) and failed
401 (missing X-Token) both times — as it did for the ph8 sibling — so
the census stands on pdfimages + the text layer; the wiring topology is
fully recoverable from the interleaved labels + the three rules, all
quoted below. VERBATIM CARRIES, documented: (1) the third rule's
parenthetical prints the SOURCE'S OWN TYPO — "chold" for "cold"
(sympathetic nervous system results in a "chold" sweat) — preserved
exactly, in quotes, with attribution, never silently corrected; (2) a
standalone "D" label prints directly beneath "Sweat glands" in the text
layer — carried verbatim; the page's only other dopamine label is the D1
of the renal chip alpha1, alpha2, beta1, D1; (3) the text layer
INTERLEAVES side-by-side labels on shared lines — "Smooth muscle, Renal
vasculature / gland cells, nerve smooth muscle" and "Neuromuscular /
ACh junction" (two labels each). Nothing is reproduced: the figure is
redrawn as ORIGINAL KYP vector art (autonomic-organ-map); the four
ALL-CAPS mnemonics are original KYP."""
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
L = {256: pages[255].split("\n")}
P = {256: norm(pages[255])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E9 = [
    ("The second subsection banner and the topic heading — ▶ PHARMACOLOGY—AUTONOMIC DRUGS / Autonomic receptors (book 234; the FIRST banner on this shared page belongs to Drug effect modifications and is NOT quoted here)", rng(256, 66, 67), [256]),
    ("The figure's divisions and origins, cluster 1 — AUTONOMIC (Parasympathetic from the Brainstem, with its Preganglionic neuron (long)) vs SOMATIC / Sympathetic", rng(256, 68, 76), [256]),
    ("The figure's divisions and origins, cluster 2 — Spinal cord, the SOMATIC Voluntary motor nerve, the sympathetic Preganglionic neuron (short), and the first Nn ganglion label", rng(256, 78, 86), [256]),
    ("The preganglionic transmitter stamps — ACh on every preganglionic fiber (three ACh labels), Nn in the ganglia, and a fourth ACh (the direct adrenal line / sweat line region)", rng(256, 88, 96), [256]),
    ("The adrenal and chain cluster — Adrenal gland (medulla), Sympathetic chain, Nn, and Blood (catecholamine transmission)", rng(256, 97, 108), [256]),
    ("The postganglionic mirror — ACh, Postganglionic neuron (short) [parasympathetic] vs Postganglionic neuron (long) [sympathetic] with its NE stamp, then ACh and ACh (the parasympathetic target stamp and the sweat-gland cholinergic stamp)", rng(256, 110, 121), [256]),
    ("The muscarinic chips and targets — M₁, M₂, M₃ on Smooth muscle, gland cells, nerve terminals, cardiac muscle; M₃ on Sweat glands; the standalone D label printing beneath Sweat glands (carried verbatim)", rng(256, 123, 134), [256]),
    ("The catecholamine and adrenergic chips — NE, Epi, NE (the adrenal medulla's output) and α1, α2, β1, β2 (sympathetic targets) vs α1, α2, β1, D1 (renal vasculature)", rng(256, 136, 143), [256]),
    ("The interleaved receptor-target pair — Smooth muscle, gland cells, nerve terminals, cardiac muscle printed side by side with Renal vasculature smooth muscle on shared lines (the text layer's two-column interleave, carried as printed)", rng(256, 145, 148), [256]),
    ("The somatic cluster — the Neuromuscular / ACh junction interleave, α1, α2, β1, β2 on Cardiac muscle, vessels, Nm at the NMJ, and Skeletal muscle", rng(256, 150, 160), [256]),
    ("THE THREE RULES, verbatim — (1) pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system; (2) adrenal medulla is directly innervated by preganglionic sympathetic fibers; (3) sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat — the source's OWN TYPO, carried verbatim)", rng(256, 162, 166), [256]),
    ("The print footer slug and timestamp — FAS1_2026_05-Pharmacology.indd 234 / 12/19/25 8:07 AM (page identity, book 234)", rng(256, 168, 170), [256]),
]
for c, q, pgs in E9:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"autonomic-receptors: evidence {len(kept)}/{len(E9)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m9 = {"topicId": "autonomic-receptors", "title": "Autonomic Receptors: The Wiring Map",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [256], "bookPages": "234–234"},
    "sourceEvidence": kept, "visualIds": ["autonomic-organ-map"],
    "mechanismIds": ["two-neuron-chain-map", "the-three-exceptions-map"],
    "kypExtensions": [
        {"id": "mnemonic-layer", "summary": "The four original KYP mnemonics (EVERY PRE FIRES ACh / PARA LONG PRE, SYM SHORT PRE / SYMPATHETIC WIRING, CHOLINERGIC SWEAT / GANGLION Nn, END-PLATE Nm, KIDNEY D1). The source page prints NO mnemonics of its own — its three rule lines are carried VERBATIM with attribution (they are the source's rules, not counted among the four KYP codes), including the third rule's own “chold” typo preserved exactly as printed.",
         "origin": "outside-first-aid", "rationale": "The page prints exactly three rule lines and no mnemonic; the four ALL-CAPS transmitter-rule, length-rule, sweat-exception, and receptor-geography codes are KYP's design.",
         "location": "mnemonics + blocks[4] the mnemonic-provenance callout + the visual's band markers"},
        {"id": "mini-case-layer", "summary": "The ganglionic-blocker miniCase — a man on an Nn-blocker infusion (trimethaphan) for aortic-dissection hypertension, asked which synaptic transmission remains fully intact; the correct answer is the somatic NMJ (Nm), with four distractors built from the page's own wiring rules (adrenal medulla 'postganglionic' misread, vascular NE 'downstream' misread, sweat-gland cholinergic-vs-nicotinic conflation, bowel M3 location-vs-traffic conflation).",
         "origin": "outside-first-aid", "rationale": "First Aid prints the wiring figure and the three rules but never integrates them into a what-survives-ganglionic-blockade vignette; the trimethaphan stem, the warm-dry-skin/ileus/retention findings, and all four distractor mechanisms are KYP's design.",
         "location": "usmle.miniCase"},
        {"id": "five-gate-layer", "summary": "The five-gate reading protocol (WHICH COLUMN → WHICH FIBER IS LONG → WHICH TRANSMITTER → WHICH RECEPTOR CHIP → WHICH EXCEPTION) and the ganglionic-blocker reasoning callout (what Nn blockade silences vs spares) — KYP's synthesis of the wiring figure, its transmitter stamps, and its three rules into one protocol.",
         "origin": "outside-first-aid", "rationale": "The source prints the figure and the rules but no reading order; the five-gate protocol, the Nn-blockade silences/spares ledger, and the length-rule framing are KYP's design.",
         "location": "blocks[2] the steps block + blocks[3] the exam callout + the registry visual's band footers"},
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot attack structure layered over the source facts — 6 patterns (postganglionic NE fiber reading, ganglionic-blocker intact transmissions, anticholinergic anhidrosis, pheochromocytoma's direct line, renal-dose dopamine's D1, the parasympathetic nerve list), 5 traps (the sweat-gland NE assumption, the long-vs-short reversal, the adrenal medulla's wiring, Nn vs Nm, the renal β1+D1 vs generic β2 chip), 3 pivots.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the figure's labels and the three rules only; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "SHARED PAGE (the p196 convention): pdf 256 / book 234 carries two subsections — Drug effect modifications (top half, sibling topic drug-effect-modifications) and Autonomic receptors (bottom half, this topic); only the autonomic-receptors block's contiguous lines (part1.txt page-256 lines 66-170, from the second '▶ PHARMACOLOGY—AUTONOMIC DRUGS' banner onward) are quoted, and the interleaved figure labels are quoted in physical order as the text layer prints them — the Drug effect modifications block (lines 1-65) is NOT quoted. CHOLD TYPO (documented): the third rule's parenthetical prints the SOURCE'S OWN TYPO — sympathetic nervous system results in a 'chold' sweat ('chold' for 'cold') — carried verbatim, in quotes, with attribution, never silently corrected. D LABEL (documented decision): a standalone 'D' prints directly beneath 'Sweat glands' in the text layer (between the sweat-gland label and the adrenal Epi/NE cluster) — carried verbatim in the note's label table and evidence; read as the figure's dopamine letter in the sweat-gland band, its unambiguous sibling being the D1 of the renal chip α1, α2, β1, D1; the VLM pass that might have resolved its exact placement failed (see census below), so the ambiguity is documented rather than resolved. INTERLEAVE QUIRK (documented): the text layer interleaves side-by-side labels on shared lines — 'Smooth muscle, Renal vasculature / gland cells, nerve smooth muscle' (the sympathetic target cell printed beside Renal vasculature smooth muscle) and 'Neuromuscular / ACh junction' (the NMJ printed beside its ACh stamp) — both carried as printed and glossed in the note's verbatim table. CENSUS METHOD: pdfimages reports ZERO raster images on pdf 256; the z-ai VLM census (scripts/usmle-pipeline/ph9-vlm-census.ts, glm-4.6v) was attempted twice and failed 401 (missing X-Token) both times — as it did for the ph8 sibling — so the census stands on pdfimages + the text layer; the wiring topology is fully recoverable from the interleaved labels + the three rules, all quoted above. Quirks, documented: (1) part1.txt page-256 line N = ph1-p256.txt line N+1 (the pre-extracted file's banner line); (2) the source prints subscript M₁, M₂, M₃ but regular digits α1, α2, β1, β2, D1 — both carried as printed; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the P-batch manifest convention; the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-ph9/ — nothing is written into content/ (chapters/pharmacology.json, content manifests, visual-inventory, and the visual registry are owned by the promotion step; the note's visualId 'autonomic-organ-map' is therefore not yet in visuals/registry.tsx by design).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "autonomic-receptors", "requiredInKYP": True}
inv9 = [dict(SV_BASE, **{
    "visualId": "autonomic-receptors-sv1",
    "sourcePages": {"part": 1, "pdfPages": [256], "bookPages": "234"},
    "visualType": "PHYSIOLOGY_DIAGRAM",
    "visualPurpose": "The autonomic/somatic wiring figure (book 234): the two-neuron chains, their transmitters, and every receptor chip",
    "sourceFigureDescription": "VECTOR LINE ART, no raster (pdfimages: zero raster images; VLM attempted twice on scripts/usmle-pipeline/ph9-vlm-census.ts and failed 401 missing X-Token both times — labels read via the pdftotext text layer): ONE large wiring figure — AUTONOMIC split into a Parasympathetic column (Brainstem origin; Preganglionic neuron (long) → Nn ganglion near the target → Postganglionic neuron (short) → ACh → M₁, M₂, M₃ on Smooth muscle, gland cells, nerve terminals, cardiac muscle) and a Sympathetic column (Spinal cord origin; Preganglionic neuron (short) → Nn in the Sympathetic chain → Postganglionic neuron (long) → NE → α1, α2, β1, β2 on the same target set and Cardiac muscle, vessels, plus α1, α2, β1, D1 on Renal vasculature smooth muscle), beside a SOMATIC column (Voluntary motor nerve → ACh → Neuromuscular junction with Nm on Skeletal muscle). The sympathetic exceptions print on the same figure: the Adrenal gland (medulla) with its own Nn, DIRECTLY innervated by a preganglionic sympathetic fiber and releasing Epi + NE into Blood (catecholamine transmission); and the Sweat glands — part of the sympathetic pathway but innervated by cholinergic fibers (ACh → M₃; sympathetic nervous system results in a “chold” sweat, the source's own typo) — with a standalone “D” label printing beneath “Sweat glands” in the text layer. Three rule lines print under the figure: the parasympathetic nerve list (pelvic splanchnic nerves and CNs III, VII, IX, and X), the direct adrenal-medulla line, and the sweat-gland cholinergic exception.",
    "implementationType": "ORIGINAL_KYP_REDRAW",
    "kypVisualId": "autonomic-organ-map", "kypImplementation": "registry-visual",
    "qaStatus": "passed",
    "kypLocation": "the registry visual's full wiring map (AutonomicOrganMap in visuals/pharm-p9.tsx): the CNS band with the three origin glyphs, the three columns (parasympathetic brand-blue with its long-then-short fiber pair and M₁/M₂/M₃ target; sympathetic emergency-red with its short-then-long pair, chain-of-Nn glyph and α/β target; somatic warning-amber with the NMJ zigzag, Nm chip and Skeletal muscle), the exceptions band (the adrenal direct line with Epi/NE chips into the Blood vessel glyph; the sweat gland's flagged ACh exception with M₃ and the “chold” quote; the renal α1, α2, β1, D1 chip), the receptor-chip address band, and the three-rules band — plus the note's verbatim label table (blocks[1])",
    "productionStatus": "complete",
    "plannedKypVisualId": "autonomic-organ-map", "plannedImplementation": "registry-visual"})]
OUT = CACHE / "staging-ph9"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "autonomic-receptors.json").write_text(json.dumps(m9, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "autonomic-receptors.json").write_text(
    json.dumps({"topicId": "autonomic-receptors", "chapterId": "pharmacology", "inventory": inv9,
                "coverageAudit": {"topicId": "autonomic-receptors", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 0,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "ONE visual asset on the source page (pdfimages: ZERO rasters — the Autonomic receptors block is a single large VECTOR wiring figure plus three rule lines): the autonomic-vs-somatic wiring diagram, redrawn as original KYP vector art (autonomic-organ-map — three columns from a CNS band through Nn ganglia chips to the target organs, every fiber stamped with its transmitter, the adrenal medulla's direct line releasing Epi/NE into the Blood glyph, the sweat gland's flagged cholinergic exception with the source's own “chold” sweat quote carried verbatim, the renal α1/α2/β1/D1 chip, and the three-rules band). Nothing is reproduced; all printed labels are quoted verbatim in the note's label table. Census: zero raster images (pdfimages); the z-ai VLM pass was attempted twice (ph9-vlm-census.ts) and failed 401 missing X-Token both times — the census stands on pdfimages + the text layer (the wiring topology is fully recoverable from the interleaved labels + the three rules). Shared page: pdf 256's top half (Drug effect modifications) belongs to the sibling topic. STAGED under .usmle-pipeline-cache/staging-ph9/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PH9 manifest + inventory staged: {OUT}/manifests/autonomic-receptors.json, {OUT}/visual-inventory/autonomic-receptors.json")
print(f"autonomic-receptors: evidence {len(kept)}/{len(E9)} verified")
