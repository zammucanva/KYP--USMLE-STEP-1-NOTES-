#!/usr/bin/env python3
"""PH11 autonomic-receptors — manifest + inventory + flip
(Pharmacology 11/43 — the AUTONOMIC/SOMATIC RECEPTOR MAP, the classic
autonomic nervous system schematic). Census (pdfimages + text layer):
pdf 256 (book 234). The page's LOWER portion is this one topic — the
section banner 'PHARMACOLOGY—AUTONOMIC DRUGS' and the header 'Autonomic
receptors' over the AUTONOMIC/SOMATIC overview diagram, whose labels are
scattered through the PDF text layer in physical order: 'AUTONOMIC' /
'Parasympathetic' / 'Brainstem' / 'Preganglionic neuron (long)' /
'SOMATIC' / 'Sympathetic' / 'Spinal cord' / 'Voluntary motor nerve' /
'Preganglionic neuron (short)' / 'Nn' / 'ACh' (x4) / 'Nn' / 'Adrenal
gland (medulla)' / 'Sympathetic chain' / 'Nn' / 'Blood (catecholamine
transmission)' / 'ACh' / 'Postganglionic neuron (short)' /
'Postganglionic neuron (long)' / 'NE' / 'ACh' / 'ACh' / 'M₁, M₂, M₃' /
'M₃' / 'Smooth muscle, gland cells, nerve terminals, cardiac muscle' /
'Sweat glands' / 'D' / 'NE' / 'Epi' / 'NE' / 'α1, α2, β1, β2' /
'α1, α2, β1, D1' / 'Renal vasculature smooth muscle' / 'Neuromuscular
junction' / 'α1, α2, β1, β2' / 'Nm' / 'Cardiac muscle, vessels' /
'Skeletal muscle' — plus the section's three footnotes, verbatim:
'Pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the
parasympathetic nervous system.'; 'Adrenal medulla is directly
innervated by preganglionic sympathetic fibers.'; 'Sweat glands are
part of the sympathetic pathway but are innervated by cholinergic
fibers (sympathetic nervous system results in a "chold" sweat).' (the
'chold' spelling is the book's own print — carried verbatim with [sic]).
PAGE-RANGE FINDING: the section does NOT continue onto pdf 257 — pdf 257
(book 235) opens the SEPARATE section 'Acetylcholine receptors' (its own
pending topic) under the same banner, so this topic's sourcePages stay
[256] (book 234). EXCLUSION: the 'Drug effect modifications' section in
the UPPER portion of the same page is the COMPLETED topic PH10 and is
EXCLUDED here. NO raster images (pdfimages -list returned zero rows for
pdf 256): the diagram is VECTOR LINE ART — path-drawn nerves and organs
with typeset labels in the PDF text layer — so it is redrawn as an
ORIGINAL_KYP_REDRAW (original KYP SVG with original KYP glyphs; nothing
reproduced). The section prints NO margin mnemonic — all four mnemonic
codes are KYP-original (stated everywhere they appear)."""
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
L = {256: pages[255].split("\n"), 257: pages[256].split("\n")}
P = {256: norm(pages[255]), 257: norm(pages[256])}
def rng(pg, a, b): return "\n".join(L[pg][a - 1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 234)", rng(256, 1, 7), [256]),
    ("The EXCLUSION BOUNDARY — the page's UPPER portion (the 'Drug effect modifications' section header and its TERM/DEFINITION/EXAMPLE table) is the SEPARATE COMPLETED topic 'drug-effect-modifications' (PH10) and is EXCLUDED from this topic", rng(256, 9, 14), [256]),
    ("The LOWER-portion section banner — PHARMACOLOGY—AUTONOMIC DRUGS (the page's second banner, printed between the PH10 table and this section's header; the Autonomic Drugs banner continues over the following pages)", "PHARMACOLOGY—AUTONOMIC DRUGS", [256]),
    ("The section header — Autonomic receptors (this topic)", rng(256, 67, 67), [256]),
    ("The diagram's frame — the AUTONOMIC and SOMATIC divisions, Parasympathetic and Sympathetic, the CNS origins Brainstem and Spinal cord, the parasympathetic 'Preganglionic neuron (long)', and the 'Voluntary motor nerve'", rng(256, 68, 81), [256]),
    ("The sympathetic 'Preganglionic neuron (short)' label (the neuron-length mirror of the parasympathetic row)", rng(256, 83, 84), [256]),
    ("The ganglionic synapses — ACh on Nn (the diagram's four ACh labels with the Nn labels at the sympathetic chain and the adrenal medulla: every autonomic ganglion is cholinergic-nicotinic)", rng(256, 86, 96), [256]),
    ("The 'Adrenal gland (medulla)' with the 'Sympathetic chain' and the 'Blood (catecholamine transmission)' label — the adrenal limb of the diagram", rng(256, 97, 108), [256]),
    ("The postganglionic neurons — parasympathetic 'Postganglionic neuron (short)' and sympathetic 'Postganglionic neuron (long)', with the first postganglionic NE label", rng(256, 110, 117), [256]),
    ("The postganglionic transmitters — the two postganglionic ACh labels (parasympathetic organ synapse + sweat gland fiber), D, NE, and Epi (the adrenal output)", rng(256, 119, 140), [256]),
    ("The muscarinic receptor sets — 'M₁, M₂, M₃' at the parasympathetic organ synapse and 'M₃' at the sweat glands", rng(256, 123, 125), [256]),
    ("The parasympathetic target tissues — 'Smooth muscle, gland cells, nerve terminals, cardiac muscle' — and the 'Sweat glands' target of the cholinergic sympathetic fiber", rng(256, 127, 132), [256]),
    ("The adrenergic receptor sets — 'α1, α2, β1, β2' at the NE organ synapse and 'α1, α2, β1, D1' at the renal vasculature", rng(256, 141, 143), [256]),
    ("The D1 branch target — 'Renal vasculature' 'smooth muscle' (printed interleaved with the NE targets' tissues in the text layer)", rng(256, 145, 146), [256]),
    ("The somatic synapse — 'Neuromuscular' 'ACh junction' (the ACh label of the somatic limb, interleaved in the text layer)", rng(256, 150, 151), [256]),
    ("The catecholamine endocrine receptor set and its targets — 'α1, α2, β1, β2' on 'Cardiac muscle, vessels' (the adrenal medulla's blood-borne output)", rng(256, 153, 158), [256]),
    ("The somatic receptor — Nm (printed in the text layer directly beneath the catecholamine-target receptor set 'α1, α2, β1, β2')", rng(256, 153, 155), [256]),
    ("The somatic target — Skeletal muscle", rng(256, 160, 160), [256]),
    ("Footnote 1 — the parasympathetic outflow anatomy, verbatim: 'Pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system.'", rng(256, 162, 163), [256]),
    ("Footnote 2 — the adrenal medulla's direct innervation, verbatim: 'Adrenal medulla is directly innervated by preganglionic sympathetic fibers.'", rng(256, 164, 164), [256]),
    ("Footnote 3 — the sweat gland exception, verbatim: 'Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat).' (the 'chold' spelling is the book's own print, carried verbatim)", rng(256, 165, 166), [256]),
    ("The page timestamp footer (book 234)", rng(256, 168, 168), [256]),
    ("The page print-date footer (book 234)", rng(256, 170, 170), [256]),
    ("The NEXT-PAGE BOUNDARY — pdf 257 (book 235) opens the SEPARATE section 'Acetylcholine receptors' (its own pending topic) under the same banner: the Autonomic receptors section and its diagram END on pdf 256 and do NOT continue onto 257", rng(257, 1, 10), [257]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"autonomic-receptors: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "autonomic-receptors", "title": "Autonomic Receptors",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [256], "bookPages": "234"},
    "sourceEvidence": kept, "visualIds": ["autonomic-receptors-map"],
    "mechanismIds": ["autonomic-two-neuron-chain", "postganglionic-transmitter-sets-the-receptor", "somatic-single-neuron-nmj"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source's AUTONOMIC/SOMATIC diagram.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the diagram and its labels; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "wiring-reading-protocol", "summary": "The three-anchor reading of the diagram (ANCHOR 1 — COUNT THE NEURONS: two neurons (preganglionic + postganglionic, meeting at a ganglion) is AUTONOMIC — smooth muscle, gland cells, nerve terminals, cardiac muscle; one neuron (the voluntary motor nerve) is SOMATIC — skeletal muscle. ANCHOR 2 — NAME THE GANGLIONIC SYNAPSE: it is ALWAYS ACh on Nn, in BOTH divisions and at the adrenal medulla — the diagram prints ACh at every ganglion and Nn beside it; this is why a ganglionic (Nn) blocker silences both divisions at once while sparing the neuromuscular junction. ANCHOR 3 — READ THE POSTGANGLIONIC TRANSMITTER: it names the receptor alphabet at the organ — ACh → M₁, M₂, M₃ (parasympathetic targets) or M₃ (sweat glands); NE → α1, α2, β1, β2; D → D1 (renal vasculature); and the adrenal medulla, the axon-less endocrine limb, pours Epi + NE into the 'Blood (catecholamine transmission)' onto α1, α2, β1, β2 at cardiac muscle and vessels) — KYP's synthesis of the scattered diagram labels into one reading order (count neurons → name the ganglionic synapse → read the postganglionic transmitter).",
         "origin": "outside-first-aid", "rationale": "The source prints the diagram labels spatially without a reading protocol; the three-anchor order, the neuron-count test, and the transmitter-names-the-receptor-alphabet rule are KYP's design.",
         "location": "core.keyIdea + mechanisms + the visual's reading-rule strip"},
        {"id": "sympathetic-exceptions-panel", "summary": "The three sympathetic exceptions grouped into one panel (1 — SWEAT GLANDS: sympathetic pathway, cholinergic fiber, M₃ receptor — the source's own footnote 3 ('Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers') and its diagram labels (ACh → M₃ → Sweat glands); 2 — RENAL VASCULATURE: a dopaminergic sympathetic branch, D → D1 (the diagram's own labels); 3 — ADRENAL MEDULLA: no postganglionic neuron at all — directly innervated by preganglionic sympathetic fibers (the source's own footnote 2), secreting Epi + NE into blood). The facts are the source's own; the grouping into a three-exceptions panel and its exam exploitation (which drug blocks sweat, which vasodilates the kidney, which endocrine organ answers preganglionic ACh) are KYP's design.",
         "origin": "outside-first-aid", "rationale": "The source prints the three exceptions as scattered labels and footnotes; the grouping and the selective-therapy angle are KYP's synthesis.",
         "location": "mechanisms[1] + usmle patterns + the visual's exceptions panel"},
        {"id": "mnemonic-layer", "summary": "The four KYP-original mnemonics (1 — THE GANGLION IS ALWAYS NICOTINIC: every autonomic ganglion and the adrenal medulla sit behind ACh on Nn; only the organ synapse changes. 2 — PARA = LONG P, SHORT POST; SYM = SHORT P, LONG POST: the parasympathetic ganglion sits ON the organ, the sympathetic chain NEAR the cord. 3 — THE SYMPATHETIC EXCEPTIONS: SWEAT IS M₃, KIDNEY IS D1, ADRENAL HAS NO AXON. 4 — TWO NEURONS TO THE ORGANS, ONE TO THE BONES: autonomic pathways are two-neuron chains ending on M/α/β/D receptors; the somatic voluntary motor nerve is a single neuron ending on Nm at the neuromuscular junction). The Autonomic receptors section prints NO margin mnemonic — all four codes are KYP-original designs.",
         "origin": "outside-first-aid", "rationale": "Book 234's Autonomic receptors section prints NO mnemonic; all four codes are KYP-original designs.",
         "location": "mnemonics + the visual's code strip"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 256). The Autonomic receptors section is a VECTOR LINE-ART diagram — path-drawn nerves, ganglia, and organs with typeset labels in the PDF text layer — plus three typeset footnote lines. The diagram is redrawn as an ORIGINAL_KYP_REDRAW (an original KYP SVG with original KYP glyphs: the CNS band, the three pathway columns, the synapse chips, the organ plates) — no source artwork is reproduced; the labels carried across are short attributed anatomical/neurotransmitter terms (ACh, NE, Epi, D, Nn, Nm, M₁-M₃, α1/α2/β1/β2, D1, organ names). PAGE-RANGE FINDING: the section does NOT continue onto pdf 257 — pdf 257 (book 235) opens the SEPARATE section 'Acetylcholine receptors' (the next pending topic) under the same banner, so sourcePages stay [256] (book 234); the boundary is pinned as a 257-side evidence item. The book's printed 'chold' sweat (sic — ie, a 'cold' sweat) is carried verbatim and flagged [sic] wherever quoted. The clinical anchors that extend past the source page (ganglionic blockers trimetaphan/mecamylamine; glycopyrrolate-neostigmine reversal pairing; pheochromocytoma and α-before-β blockade; renal-dose dopamine and fenoldopam; β3/mirabegron as the adrenergic receptor beyond this diagram's printed set; the Nn-vs-Nm selectivity of hexamethonium-type vs rocuronium-type blockers) are flagged as KYP clinical anchors wherever they appear. No copyrighted photographs exist on the page; nothing reproduced. EXCLUSION: the 'Drug effect modifications' section in the UPPER portion of this SAME page is the COMPLETED topic PH10 ('drug-effect-modifications') and is EXCLUDED from this topic: PH11 pins the same source page (pdf 256 / book 234) for its LOWER portion only.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "autonomic-receptors", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"autonomic-receptors-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [256], "234", "RECEPTOR_DIAGRAM", "The AUTONOMIC/SOMATIC overview schematic (the section's single figure — the classic autonomic nervous system receptor map)",
       "The section's entire figure: a left-to-right schematic of the AUTONOMIC division (subdivided Parasympathetic and Sympathetic) and the SOMATIC division. The CNS column at the left (Brainstem above, Spinal cord below) gives off three pathways. PARASYMPATHETIC: 'Preganglionic neuron (long)' → ganglion near the organ (ACh on Nn) → 'Postganglionic neuron (short)' → ACh on 'M₁, M₂, M₃' → 'Smooth muscle, gland cells, nerve terminals, cardiac muscle'. SYMPATHETIC: 'Preganglionic neuron (short)' → the 'Sympathetic chain' (ACh on Nn) → 'Postganglionic neuron (long)' → NE on 'α1, α2, β1, β2' → 'Smooth muscle, gland cells, nerve terminals, cardiac muscle'; a cholinergic sympathetic fiber → ACh on 'M₃' → 'Sweat glands'; a dopaminergic branch → D on 'D1' → 'Renal vasculature smooth muscle'; and the 'Adrenal gland (medulla)' limb — directly innervated by the preganglionic fiber (ACh on Nn), secreting Epi + NE into the 'Blood (catecholamine transmission)' onto 'α1, α2, β1, β2' at 'Cardiac muscle, vessels'. SOMATIC: the 'Voluntary motor nerve' (single neuron) → ACh on 'Nm' at the 'Neuromuscular junction' → 'Skeletal muscle'. Three footnote lines below the figure: 'Pelvic splanchnic nerves and CNs III, VII, IX, and X are part of the parasympathetic nervous system.'; 'Adrenal medulla is directly innervated by preganglionic sympathetic fibers.'; 'Sweat glands are part of the sympathetic pathway but are innervated by cholinergic fibers (sympathetic nervous system results in a “chold” sweat).' VECTOR LINE ART (pdfimages: zero raster rows) — path-drawn nerves/organs with typeset labels.",
       "ORIGINAL_KYP_REDRAW", "autonomic-receptors-map", "the registry visual (the AutonomicReceptorsMap — the CNS band, the parasympathetic/sympathetic/somatic pathway columns with their neuron boxes, synapse chips, receptor plates and organ plates, the three-footnotes strip, and the reading-rule strip) + blocks[0] the visual block"),
]
(ROOT / "content/usmle/manifests/autonomic-receptors.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/autonomic-receptors.json").write_text(
    json.dumps({"topicId": "autonomic-receptors", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "autonomic-receptors", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 0,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 256). The section's single figure is VECTOR LINE ART (path-drawn nerves, ganglia, and organs with typeset labels) — redrawn as an ORIGINAL_KYP_REDRAW in the registry visual AutonomicReceptorsMap: an original KYP SVG with original KYP glyphs (the CNS band, the three pathway columns, the synapse chips, the receptor and organ plates), carrying across only short attributed labels (neurotransmitters, receptor names, neuron names, organ names) — no source artwork reproduced, no photographs on the page. The three typeset footnote lines are carried verbatim in the note's second table block and in the visual's footnotes strip (including the book's own printed 'chold' sweat [sic]). The clinical anchors extending past the source page (ganglionic blockers, glycopyrrolate-neostigmine reversal, pheochromocytoma, renal-dose dopamine/fenoldopam, β3/mirabegron beyond the printed receptor set) are KYP clinical anchors, flagged wherever they appear. PAGE-RANGE FINDING: the diagram does NOT continue onto pdf 257 — that page opens the SEPARATE 'Acetylcholine receptors' section (next pending topic). EXCLUSION: the 'Drug effect modifications' section in the UPPER portion of the same page belongs to the COMPLETED topic PH10 and is NOT part of this inventory."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "autonomic-receptors":
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
print("PH11 manifest + inventory + flip done")
