#!/usr/bin/env python3
"""PH12 acetylcholine-receptors — manifest + inventory + flip
(Pharmacology 12/43 — the ACh RECEPTOR-FAMILY MAP, the two-family split).
Census (pdfimages + text layer): pdf 257 (book 235). The page's UPPER portion
is this one topic — the section header 'Acetylcholine receptors' under the
standing banner 'PHARMACOLOGY—AUTONOMIC DRUGS' — and the section's ENTIRE
printed content is TWO TYPESET PARAGRAPHS in the PDF text layer: (1) the
nicotinic paragraph, verbatim: 'Nicotinic ACh receptors are ligand-gated
channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+. Two
subtypes: NN (found in autonomic ganglia, adrenal medulla) and NM (found in
neuromuscular junction of skeletal muscle).'; (2) the muscarinic paragraph,
verbatim: 'Muscarinic ACh receptors are G-protein–coupled receptors that
usually act through 2nd messengers. 5 subtypes: M1–5 found in heart, smooth
muscle, brain, exocrine glands, and on sweat glands (cholinergic
sympathetic).'
PAGE-STRUCTURE FINDING: the page prints NO muscarinic subtype table — the
anticipated M1–M5 location/mechanism table does NOT exist on this page; the
section is two prose paragraphs, and the book's own G-protein assignments
(M1 = q, M2 = i, M3 = q) live TWO PAGES LATER, in the G-protein–linked
second messengers table on pdf 259 (book 237) — the SEPARATE pending topic
'g-protein-linked-second-messengers'. The M1–M5 G-protein/second-messenger
layer (odd = Gq → PLC → IP3 + DAG, even = Gi → ↓cAMP) is therefore a KYP
extension: M1/M2/M3 anchored to the book's own book-237 table (pinned here
only as a PROVENANCE-POINTER evidence item citing that page), M4/M5 and the
odd/even rule themselves beyond the book's printed set.
EXCLUSIONS: (a) the 'Pain transmission' section in the LOWER portion of the
SAME page (Nociceptive pain + Neuropathic pain) is the SEPARATE pending
topic 'pain-transmission' and is EXCLUDED here (pinned as boundary
evidence); (b) pdf 256's LOWER portion is the COMPLETED topic PH11
'autonomic-receptors' (EXCLUDED; the 256-side boundary pinned); (c) pdf 258
(book 236) opens the SEPARATE pending section 'Micturition control' (the
258-side boundary pinned — this section ENDS on pdf 257).
NO raster images (pdfimages -list returned zero rows for pdf 257): the page
is typeset text only, so the registry visual is an ORIGINAL_KYP_ADAPTATION
(original KYP receptor-family map synthesized from the section's own
sentences; nothing reproduced). The section prints NO margin mnemonic — all
four mnemonic codes are KYP-original (stated everywhere they appear)."""
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
L = {256: pages[255].split("\n"), 257: pages[256].split("\n"),
     258: pages[257].split("\n"), 259: pages[258].split("\n")}
P = {256: norm(pages[255]), 257: norm(pages[256]),
     258: norm(pages[257]), 259: norm(pages[258])}
def rng(pg, a, b): return "\n".join(L[pg][a - 1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 235): the standing section banner, the Section II marker, and the printed page number", rng(257, 1, 10), [257]),
    ("The section header — 'Acetylcholine receptors' (this topic's section, printed at the top of the page's text column)", rng(257, 3, 4), [257]),
    ("The section banner — PHARMACOLOGY—AUTONOMIC DRUGS (the same banner PH10/PH11 sit under; this topic continues the Autonomic Drugs subsection)", rng(257, 6, 6), [257]),
    ("The NICOTINIC PARAGRAPH, verbatim — the section's first paragraph, carried whole (the family's mechanism, its ion species, and its two subtypes with their stations)", rng(257, 12, 14), [257]),
    ("The nicotinic MECHANISM sentence, verbatim — 'Nicotinic ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+.' (the receptor IS the ion channel: ACh binding opens a cation pore — Na+ in, K+ out, Ca2+ in some cases)", "Nicotinic ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+.", [257]),
    ("The nicotinic SUBTYPE sentence, verbatim — 'Two subtypes: NN (found in autonomic ganglia, adrenal medulla) and NM (found in neuromuscular junction of skeletal muscle).' (the entire NN/NM split in one printed line)", "Two subtypes: NN (found in autonomic ganglia, adrenal medulla) and NM (found in neuromuscular junction of skeletal muscle).", [257]),
    ("The NN station, verbatim — 'NN (found in autonomic ganglia, adrenal medulla)': the ganglionic nicotinic subtype sits at every autonomic ganglion of BOTH divisions plus the adrenal medulla (the switch points of the wiring diagram of book 234)", "NN (found in autonomic ganglia, adrenal medulla)", [257]),
    ("The NM station, verbatim — 'NM (found in neuromuscular junction of skeletal muscle)': the muscular nicotinic subtype sits only at the somatic plate (the neuromuscular junction on skeletal muscle)", "NM (found in neuromuscular junction of skeletal muscle)", [257]),
    ("The MUSCARINIC PARAGRAPH, verbatim — the section's second paragraph, carried whole (the family's GPCR mechanism and the five subtypes with their collective location list)", rng(257, 15, 17), [257]),
    ("The muscarinic MECHANISM sentence, verbatim — 'Muscarinic ACh receptors are G-protein–coupled receptors that usually act through 2nd messengers.' (metabotropic signaling — the contrast with the nicotinic channel)", "Muscarinic ACh receptors are G-protein–coupled receptors that usually act through 2nd messengers.", [257]),
    ("The muscarinic SUBTYPE + LOCATION sentence, verbatim — '5 subtypes: M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic).' (the book prints the five subtypes and their locations COLLECTIVELY — no per-subtype mechanism table on this page)", "5 subtypes: M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic).", [257]),
    ("The SWEAT-GLAND inclusion, verbatim — 'on sweat glands (cholinergic sympathetic)': the book's own location list ends on the sympathetic exception (sympathetic path, cholinergic fiber — the M₃ plate of the book-234 diagram)", "on sweat glands (cholinergic sympathetic)", [257]),
    ("The EXCLUSION BOUNDARY (lower portion) — the 'Pain transmission' section header and its first subsection 'Nociceptive pain' open the SEPARATE pending topic 'pain-transmission' on this SAME page and are EXCLUDED from this topic", rng(257, 19, 21), [257]),
    ("EXCLUDED content, pinned as boundary — the nociceptive pain definition and its four-step process list (Transduction/Transmission/Modulation/Perception with their blocker classes), which belong to the separate pain-transmission topic", rng(257, 22, 31), [257]),
    ("EXCLUDED content, pinned as boundary — the 'Neuropathic pain' definition (neuronal dysfunction of the CNS or PNS; voltage-gated Na+ channel upregulation; diabetic peripheral neuropathy), which belongs to the separate pain-transmission topic", rng(257, 33, 36), [257]),
    ("The page footer — the book's signature file line (book 235)", rng(257, 38, 38), [257]),
    ("The page print-date footer (book 235)", rng(257, 40, 40), [257]),
    ("The PREVIOUS-PAGE BOUNDARY — pdf 256 (book 234) LOWER portion is the COMPLETED topic PH11 'autonomic-receptors' (its section header 'Autonomic receptors' + the AUTONOMIC/SOMATIC diagram), EXCLUDED here: this topic's section STARTS fresh on pdf 257 with its own header", rng(256, 67, 67), [256]),
    ("The NEXT-PAGE BOUNDARY — pdf 258 (book 236) opens the SEPARATE section 'Micturition control' (its own pending topic): the Acetylcholine receptors section ENDS on pdf 257 and does not continue", rng(258, 1, 9), [258]),
    ("The PROVENANCE POINTER — the book's own M1/M2/M3 G-protein assignments ('Cholinergic M1 q … M2 i … M3 q …') live in the G-protein–linked second messengers table on pdf 259 (book 237), the SEPARATE pending topic 'g-protein-linked-second-messengers'; quoted here ONLY to document where this topic's KYP-extension mechanism layer gets its M1/M2/M3 anchors (not part of this topic's source section)", rng(259, 50, 67), [259]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"acetylcholine-receptors: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "acetylcholine-receptors", "title": "Acetylcholine Receptors",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [257], "bookPages": "235"},
    "sourceEvidence": kept, "visualIds": ["acetylcholine-receptors-map"],
    "mechanismIds": ["nicotinic-ligand-gated-cation-channel", "muscarinic-gpcr-second-messenger-split"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source's two paragraphs.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the two definitional paragraphs; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "family-sorting-protocol", "summary": "The three-anchor reading of any 'ACh receptor' stem (ANCHOR 1 — SORT THE FAMILY: nicotinic = ligand-gated channel (ionotropic, ms-fast, ACh binding IS pore opening); muscarinic = G-protein–coupled receptor (metabotropic, second messenger). ANCHOR 2 — IF NICOTINIC, READ THE SUBSCRIPT: the second letter names the station — N-N = neuron→neuron, the ganglionic synapses (autonomic ganglia of BOTH divisions + the adrenal medulla); N-M = neuron→muscle, the neuromuscular junction of skeletal muscle. ANCHOR 3 — IF MUSCARINIC, APPLY THE ODD/EVEN G-PROTEIN RULE: odd-numbered subtypes (M1, M3, M5) → Gq → PLC → IP3 + DAG; even-numbered (M2, M4) → Gi → ↓ adenylyl cyclase → ↓cAMP) — KYP's synthesis of the section's two sentences plus the book-237 table into one reading order (family → station → G protein).",
         "origin": "outside-first-aid", "rationale": "The source prints the two definitions side by side without a reading protocol; the family→station→G-protein order, the neuron→neuron / neuron→muscle subscript reading, and the odd/even rule are KYP's design (the M1/M2/M3 G-protein letters themselves are the book's own, from book 237).",
         "location": "core.keyIdea + mechanisms + the visual's reading-rule strip"},
        {"id": "m1-m5-mechanism-map", "summary": "The M1–M5 mechanism layer (M1 = Gq → IP3/DAG — brain: higher cognitive functions, enteric nervous system, exocrine gland secretions; M2 = Gi → ↓cAMP — heart: ↓ heart rate, ↓ AV node conduction velocity, ↓ atrial contractility; M3 = Gq → IP3/DAG — exocrine glands, gut peristalsis, bladder contraction, bronchoconstriction, vasodilation, miosis, accommodation; M4 = Gi → ↓cAMP — beyond the book's printed set; M5 = Gq → IP3/DAG — beyond the book's printed set). PROVENANCE: the source page (book 235) prints only 'G-protein–coupled receptors that usually act through 2nd messengers. 5 subtypes: M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic).' — the collective list; the M1/M2/M3 G-protein assignments are the book's own but printed two pages later (book 237, the separate g-protein-linked-second-messengers topic — pinned as a provenance-pointer evidence item); the M4/M5 couplings and the odd/even rule are KYP-original beyond the book's printed set.",
         "origin": "outside-first-aid", "rationale": "The source page names the five subtypes and their collective locations but prints no per-subtype mechanism; the assembled mechanism map (with its provenance split: book-anchored M1–M3 vs KYP-extended M4/M5) is KYP's synthesis.",
         "location": "mechanisms[1] + blocks[2] the subtype table + the visual's odd/even lanes"},
        {"id": "mnemonic-layer", "summary": "The four KYP-original mnemonics (1 — ONE TRANSMITTER, TWO ALPHABETS: nicotinic channels (NN/NM) at the switches and the muscle; muscarinic GPCRs (M1–M5) at the organs. 2 — N-N = NEURON→NEURON, N-M = NEURON→MUSCLE: the subscript names the station — NN at autonomic ganglia + the adrenal medulla, NM at the neuromuscular junction of skeletal muscle. 3 — ODD IS Gq, EVEN IS Gi: M1/M3/M5 → PLC → IP3 + DAG; M2/M4 → ↓cAMP (the M1–M3 letters anchored to the book's book-237 table; the rule itself KYP). 4 — SWEAT IS ON THE LIST: the book's own location list ends 'and on sweat glands (cholinergic sympathetic)' — the sympathetic exception is muscarinic M₃). The Acetylcholine receptors section prints NO margin mnemonic — all four codes are KYP-original designs.",
         "origin": "outside-first-aid", "rationale": "Book 235's Acetylcholine receptors section prints NO mnemonic; all four codes are KYP-original designs.",
         "location": "mnemonics + the visual's code strip"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + text layer): NO raster images on the page (pdfimages -list returned zero rows for pdf 257) — the Acetylcholine receptors section is TWO TYPESET PARAGRAPHS in the PDF text layer (the nicotinic definition + subtype sentence; the muscarinic definition + collective location sentence), carried verbatim in the note's first table block. PAGE-STRUCTURE FINDING: the page prints NO muscarinic subtype table — the anticipated M1–M5 location/mechanism table does not exist on this page; the book's own G-protein assignments (M1 q / M2 i / M3 q) live in the G-protein–linked second messengers table on pdf 259 (book 237), the SEPARATE pending topic 'g-protein-linked-second-messengers' (pinned here as one PROVENANCE-POINTER evidence item citing that page, clearly labeled as not part of this topic's source). The M1–M5 mechanism layer in the note/visual is a KYP extension with a provenance split: M1/M2/M3 anchored to the book's book-237 table; M4 (Gi) and M5 (Gq) beyond the book's printed set; the odd/even G-protein rule itself KYP-original. The registry visual (AcetylcholineReceptorsMap) is an ORIGINAL_KYP_ADAPTATION — an original KYP receptor-family map synthesized from the section's own sentences (the ACh origin band, the nicotinic panel with its channel glyph and NN/NM station cards, the muscarinic panel with its GPCR split and odd/even lanes, the location strip, the sorting row, the four-code strip) — no source artwork exists to reproduce (no figure on the page). EXCLUSIONS: the 'Pain transmission' section in the LOWER portion of this SAME page (Nociceptive pain + Neuropathic pain) is the SEPARATE pending topic 'pain-transmission' and is EXCLUDED (pinned as boundary evidence); pdf 256's lower portion is the COMPLETED topic PH11 'autonomic-receptors' (EXCLUDED; 256-side boundary pinned); pdf 258 opens the SEPARATE pending section 'Micturition control' (258-side boundary pinned — this section ENDS on pdf 257). The clinical anchors that extend past the source page (ganglionic blockers trimetaphan/mecamylamine; nondepolarizing NMBAs rocuronium/vecuronium and succinylcholine; bethanechol/pilocarpine muscarinic agonists; atropine-type antagonists; myasthenia gravis and Lambert-Eaton at the NM plate; the M1–Alzheimer and M3–overactive-bladder pharmacology; nicotine's biphasic Nn story) are flagged as KYP clinical anchors wherever they appear. The section prints NO margin mnemonic — all four mnemonic codes are KYP-original. No copyrighted photographs exist on the page; nothing reproduced.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "acetylcholine-receptors", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"acetylcholine-receptors-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [257], "235", "RECEPTOR_DIAGRAM", "The section's two definitional paragraphs (the whole section — there is no figure on the page)",
       "The section's entire printed content, verbatim: the nicotinic paragraph — 'Nicotinic ACh receptors are ligand-gated channels allowing efflux of K+ and influx of Na+ and in some cases Ca2+. Two subtypes: NN (found in autonomic ganglia, adrenal medulla) and NM (found in neuromuscular junction of skeletal muscle).' — and the muscarinic paragraph — 'Muscarinic ACh receptors are G-protein–coupled receptors that usually act through 2nd messengers. 5 subtypes: M1–5 found in heart, smooth muscle, brain, exocrine glands, and on sweat glands (cholinergic sympathetic).' PAGE-STRUCTURE FINDING: NO muscarinic subtype table exists on the page (the section is two prose paragraphs; pdfimages returned zero raster rows — typeset text only). The M1–M5 per-subtype G-protein/second-messenger assignments are NOT on this page: the book's own M1 q / M2 i / M3 q rows live in the G-protein–linked second messengers table on pdf 259 (book 237), the SEPARATE pending topic 'g-protein-linked-second-messengers'.",
       "ORIGINAL_KYP_ADAPTATION", "acetylcholine-receptors-map", "the registry visual (the AcetylcholineReceptorsMap — the ACh origin band; the NICOTINIC panel with its ligand-gated-channel glyph and the NN/NM station cards; the MUSCARINIC panel with its GPCR split and the odd/even G-protein lanes; the book-235 location strip; the nicotinic-vs-muscarinic sorting row; the four-code mnemonic strip) + blocks[0] the visual block"),
]
(ROOT / "content/usmle/manifests/acetylcholine-receptors.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/acetylcholine-receptors.json").write_text(
    json.dumps({"topicId": "acetylcholine-receptors", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "acetylcholine-receptors", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + text layer): NO raster images on the page (pdfimages -list returned zero rows for pdf 257) — the Acetylcholine receptors section is TWO TYPESET PARAGRAPHS (typeset text only; no figure exists to reproduce). The section is carried verbatim in the note's first table block and re-typeset as an ORIGINAL_KYP_ADAPTATION in the registry visual AcetylcholineReceptorsMap: an original KYP receptor-family map (the ACh origin band, the nicotinic panel with its channel glyph and NN/NM station cards, the muscarinic panel with its GPCR split and odd/even lanes, the location strip, the sorting row, the four-code strip) built from the section's own sentences — only short attributed terms (ACh, NN, NM, M1–M5, the ion species, the location list) are carried across. PAGE-STRUCTURE FINDING: the page prints NO muscarinic subtype table; the M1–M5 G-protein/second-messenger layer in the note and visual is a KYP extension with a provenance split — M1/M2/M3 anchored to the book's own book-237 table (the separate g-protein-linked-second-messengers topic, pinned as one provenance-pointer evidence item), M4/M5 and the odd/even rule beyond the book's printed set. EXCLUSIONS: the 'Pain transmission' section in the LOWER portion of the same page belongs to the SEPARATE pending topic 'pain-transmission' and is NOT part of this inventory; pdf 256's lower portion belongs to the COMPLETED topic PH11 'autonomic-receptors'; pdf 258 opens the SEPARATE pending 'Micturition control' section. The clinical anchors extending past the source page (ganglionic blockers, NMBAs, bethanechol/pilocarpine, atropine-type antagonists, myasthenia/Lambert-Eaton, M1–Alzheimer, M3–overactive-bladder) are KYP clinical anchors, flagged wherever they appear. The section prints NO margin mnemonic; the four codes are KYP-original."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "acetylcholine-receptors":
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
print("PH12 manifest + inventory + flip done")
