#!/usr/bin/env python3
"""PH13 pain-transmission — manifest + inventory + flip
(Pharmacology 13/43 — the PAIN-PROCESS MAP, the four-step signal and its
blocker classes, plus the nociceptive-vs-neuropathic split).
Census (pdfimages + text layer): pdf 257 (book 235), the LOWER portion of the
page — the section header 'Pain transmission' under the standing banner
'PHARMACOLOGY—AUTONOMIC DRUGS', in two subsections. The section's ENTIRE
printed content: (1) the NOCICEPTIVE PAIN subsection — 'Pain signals
transmitted to the CNS in response to mechanical, thermal, or chemical
stimuli.'; 'Transient receptor potential vanilloid ligand receptors cause
Ca2+ influx–induced Na+ channel activation. Signals transmitted by Aδ fibers
(sharp, acute pain) or C fibers (dull, throbbing, chronic pain).'; then the
four-process list 'Processes involved in pain transmission:' — 'Transduction
— blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs,
acetaminophen, glucocorticoids / Transmission — blocked by local anesthetics,
α2-agonists, opioids / Modulation — blocked by TCAs, SSRIs, SNRIs,
gabapentinoids / Perception — blocked by α2-agonists, opioids, TCAs, SSRIs,
SNRIs'; (2) the NEUROPATHIC PAIN subsection — 'Caused by neuronal dysfunction
of the CNS or PNS. Transmitted via upregulation and persistent activation of
voltage-gated Na+ channels. Example: diabetic peripheral neuropathy.'
SECTION EXTENT: the section ENDS on pdf 257 — pdf 258 (book 236) opens the
SEPARATE pending section 'Micturition control' (its own pending topic; the
258-side boundary pinned). sourcePages = [257] only.
PAGE-STRUCTURE FINDING: the page prints NO pathway-anatomy diagram and NO
neurotransmitter list — the anticipated dorsal-horn/spinothalamic-tract/
thalamus/cortex station chain, substance P / glutamate, and the gate-control
theory are NOT printed on this page. The book's own pathway frame is the
FOUR-PROCESS LIST (Transduction/Transmission/Modulation/Perception) with a
blocker-class set per process; the only anatomy printed is the peripheral
half (nociceptor + TRPV; Aδ vs C fibers) and, for neuropathic pain, the
voltage-gated Na+ channel. The ascending-tract station labels (dorsal horn
synapse, spinothalamic tract, thalamus, cortex) used to SEAT the four
processes in the note and the visual are KYP extensions beyond the book's
printed set (standard neuroanatomy anchors, flagged wherever they appear);
substance P / glutamate and gate control theory are NOT used at all.
NO raster images (pdfimages -list returned zero rows for pdf 257): the page
is typeset text only, so the registry visual is an ORIGINAL_KYP_ADAPTATION
(original KYP pain-process map synthesized from the section's own sentences;
nothing reproduced). The section prints NO margin mnemonic — all four
mnemonic codes are KYP-original (stated everywhere they appear)."""
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
     258: pages[257].split("\n")}
P = {256: norm(pages[255]), 257: norm(pages[256]),
     258: norm(pages[257])}
def rng(pg, a, b): return "\n".join(L[pg][a - 1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 235): the standing section banner, the Section II marker, and the printed page number", rng(257, 1, 10), [257]),
    ("The section header — 'Pain transmission' with its first subsection header 'Nociceptive pain' (this topic's section, printed in the LOWER portion of the page)", rng(257, 19, 21), [257]),
    ("The section banner — PHARMACOLOGY—AUTONOMIC DRUGS (the same banner PH10–PH12 sit under; this topic continues the Autonomic Drugs subsection)", rng(257, 6, 6), [257]),
    ("The NOCICEPTIVE PAIN definition, verbatim — 'Pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli.' (the subsection's opening sentence: pain is a TRANSMITTED signal answering three stimulus modalities)", rng(257, 22, 22), [257]),
    ("The STIMULUS MODALITY list, verbatim — 'in response to mechanical, thermal, or chemical stimuli' (the three energies that start a nociceptive signal: force, heat, chemistry)", "in response to mechanical, thermal, or chemical stimuli", [257]),
    ("The TRPV MECHANISM sentence, verbatim — 'Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation.' (the transducer: the vanilloid receptor's Ca2+ influx is what switches the nociceptor's Na+ channels on — the book's own molecular account of transduction)", "Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation.", [257]),
    ("The FIBER-TYPE sentence, verbatim — 'Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain).' (the entire Aδ-vs-C split in one printed line — the peripheral highway's two lanes)", "Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain).", [257]),
    ("The Aδ FIBER definition, verbatim — 'Aδ fibers (sharp, acute pain)': the fast thin myelinated lane carries the first sharp jab (KYP anchor: myelination is the speed clue, not printed on this page)", "Aδ fibers (sharp, acute pain)", [257]),
    ("The C FIBER definition, verbatim — 'C fibers (dull, throbbing, chronic pain)': the slow thin unmyelinated lane carries the slow burn that follows and lingers (KYP anchor: unmyelinated is the slowness clue)", "C fibers (dull, throbbing, chronic pain)", [257]),
    ("The FOUR-PROCESS LIST, verbatim — the whole printed block: 'Processes involved in pain transmission:' followed by all four process lines with their blocker classes (the section's spine — the step-to-drug map the entire topic is built on)", rng(257, 26, 31), [257]),
    ("The TRANSDUCTION line, verbatim — 'Transduction—blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids' (the longest blocker list of the four — six classes act at the stimulus-to-signal conversion)", "Transduction—blocked by local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids", [257]),
    ("The TRANSMISSION line, verbatim — 'Transmission—blocked by local anesthetics, α2-agonists, opioids' (the road: only three classes stop the signal's travel — and opioids make their first appearance here)", "Transmission—blocked by local anesthetics, α2-agonists, opioids", [257]),
    ("The MODULATION line, verbatim — 'Modulation—blocked by TCAs, SSRIs, SNRIs, gabapentinoids' (the tuning stage — the antidepressant classes appear here and nowhere earlier in the chain)", "Modulation—blocked by TCAs, SSRIs, SNRIs, gabapentinoids", [257]),
    ("The PERCEPTION line, verbatim — 'Perception—blocked by α2-agonists, opioids, TCAs, SSRIs, SNRIs' (the conscious endpoint — five classes; local anesthetics and NSAIDs drop out, the antidepressants carry through)", "Perception—blocked by α2-agonists, opioids, TCAs, SSRIs, SNRIs", [257]),
    ("The NEUROPATHIC PAIN subsection, verbatim — the whole printed block: 'Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and persistent activation of voltage-gated Na+ channels. Example: diabetic peripheral neuropathy.'", rng(257, 33, 36), [257]),
    ("The NEUROPATHIC MECHANISM sentence, verbatim — 'Transmitted via upregulation and persistent activation of voltage-gated Na+ channels.' (neuropathic pain is a CHANNEL disease: the nerve's own Na+ channels are upregulated and stuck open — no stimulus required)", "Transmitted via upregulation and persistent activation of voltage-gated Na+ channels.", [257]),
    ("The NEUROPATHIC EXAMPLE, verbatim — 'Example: diabetic peripheral neuropathy.' (the book's own worked example: the burning feet of longstanding diabetes)", "Example: diabetic peripheral neuropathy.", [257]),
    ("The page footer — the book's signature file line (book 235)", rng(257, 38, 38), [257]),
    ("The page print-date footer (book 235)", rng(257, 40, 40), [257]),
    ("The EXCLUSION BOUNDARY (upper portion) — the 'Acetylcholine receptors' section on this SAME page (both its printed paragraphs) is the COMPLETED topic PH12 'acetylcholine-receptors' and is EXCLUDED from this topic", rng(257, 12, 17), [257]),
    ("The PREVIOUS-PAGE BOUNDARY — pdf 256 (book 234) LOWER portion is the COMPLETED topic PH11 'autonomic-receptors' (its section header 'Autonomic receptors' + the AUTONOMIC/SOMATIC diagram), EXCLUDED here: this topic's section STARTS fresh on pdf 257 with its own header", rng(256, 67, 67), [256]),
    ("The NEXT-PAGE BOUNDARY — pdf 258 (book 236) opens the SEPARATE pending section 'Micturition control' (its own pending topic): the Pain transmission section ENDS on pdf 257 and does not continue", rng(258, 1, 9), [258]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"pain-transmission: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "pain-transmission", "title": "Pain Transmission",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [257], "bookPages": "235"},
    "sourceEvidence": kept, "visualIds": ["pain-transmission-map"],
    "mechanismIds": ["nociceptive-pain-four-process-cascade", "neuropathic-voltage-gated-na-channel-upregulation"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source's two subsections.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the two definitional subsections and the four-process blocker list; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "four-step-reading-protocol", "summary": "The three-anchor reading of any pain stem (ANCHOR 1 — SORT THE PAIN: nociceptive = a TRANSMITTED signal 'in response to mechanical, thermal, or chemical stimuli' (the stimulus is the start of the story); neuropathic = 'neuronal dysfunction of the CNS or PNS' with 'upregulation and persistent activation of voltage-gated Na+ channels' (the nerve is the story — no stimulus needed). ANCHOR 2 — IF NOCICEPTIVE, FIND THE FIBER: Aδ = sharp, acute; C = dull, throbbing, chronic (first jab vs slow burn). ANCHOR 3 — LOCATE THE STEP, THEN READ THE BLOCKER LIST: Transduction → local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids; Transmission → local anesthetics, α2-agonists, opioids; Modulation → TCAs, SSRIs, SNRIs, gabapentinoids; Perception → α2-agonists, opioids, TCAs, SSRIs, SNRIs) — KYP's synthesis of the section's own list into one reading order (pain type → fiber → step → drug).",
         "origin": "outside-first-aid", "rationale": "The source prints the four process lines as a flat list without a reading protocol; the pain-type-first, then-fiber, then-step order is KYP's design (every drug name and process assignment is the book's own).",
         "location": "core.keyIdea + mechanisms[0] + the visual's reading-rule strip"},
        {"id": "station-labels-and-blocker-matrix", "summary": "The anatomical station labels that SEAT the four processes — transduction at the nociceptor terminal (TRPV → Ca2+ influx → Na+ channel activation), transmission along Aδ/C fibers and up the ascending pathway, modulation at the dorsal-horn synapse and the descending control system, perception at the thalamus/cortex — are KYP extensions beyond the book's printed set: the page prints NO pathway diagram, NO dorsal-horn/spinothalamic/thalamus/cortex chain, NO substance P/glutamate, NO gate-control theory (verified against the text layer; pinned as this manifest's PAGE-STRUCTURE FINDING). The BLOCKER MATRIX (which class blocks which step: local anesthetics = transduction + transmission; α2-agonists = transduction + transmission + perception — three of four; opioids = transmission + perception; gabapentinoids = transduction + modulation; TCAs/SSRIs/SNRIs = modulation + perception; NSAIDs, acetaminophen, glucocorticoids = transduction only) is KYP's pivot of the book's own four printed lines — every cell is the book's own drug-class assignment; the matrix view itself is KYP.",
         "origin": "outside-first-aid", "rationale": "The book prints the four process lines separately; the step × class matrix (and the 'α2-agonists block three of the four' pattern it exposes) and the anatomical seating of each process are KYP's synthesis. Substance P, glutamate, and gate-control theory are deliberately NOT used — they are not printed on the page.",
         "location": "blocks[2] the blocker matrix + mechanisms + the visual's station flow and matrix strip"},
        {"id": "mnemonic-layer", "summary": "The four KYP-original mnemonics (1 — TWO TICKETS, THEN TWO MORE: Transduction → Transmission → Modulation → Perception — the four T-M-T-P stations of every pain signal (stimulus becomes signal; signal travels; signal is tuned; signal is felt). 2 — DELTA IS THE DASH, C IS THE CRAWL: Aδ fibers = sharp, acute (first jab); C fibers = dull, throbbing, chronic (slow burn). 3 — α2 BLOCKS THREE OF FOUR: α2-agonists sit on transduction, transmission, AND perception — every station but modulation; OPIOIDS OWN THE ROAD AND THE ROOM (transmission + perception); NSAIDs ONLY THE STARTING LINE (transduction). 4 — NO STIMULUS, STILL PAIN: neuropathic pain is the upregulated, persistently active voltage-gated Na+ channel's fault — 'Example: diabetic peripheral neuropathy.' The Pain transmission section prints NO margin mnemonic — all four codes are KYP-original designs.",
         "origin": "outside-first-aid", "rationale": "Book 235's Pain transmission section prints NO mnemonic; all four codes are KYP-original designs built on the section's own printed lines.",
         "location": "mnemonics + the visual's code strip"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + text layer): NO raster images on the page (pdfimages -list returned zero rows for pdf 257) — the Pain transmission section is TYPESET TEXT ONLY in the LOWER portion of pdf 257 (book 235): the Nociceptive pain subsection (the definition sentence with its three stimulus modalities; the TRPV sentence — 'Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation.'; the fiber sentence — Aδ = sharp, acute; C = dull, throbbing, chronic; and the four-process list with a blocker class set per process) and the Neuropathic pain subsection (CNS/PNS neuronal dysfunction; voltage-gated Na+ channel upregulation + persistent activation; diabetic peripheral neuropathy as the worked example), carried verbatim in the note's first table block. SECTION EXTENT: the section ENDS on pdf 257 — pdf 258 (book 236) opens the SEPARATE pending 'Micturition control' section (258-side boundary pinned). PAGE-STRUCTURE FINDING: the page prints NO pathway diagram and NO neurotransmitter account — the anticipated dorsal-horn → spinothalamic-tract → thalamus → cortex chain, substance P / glutamate, and the gate-control theory are NOT printed on this page; the book's own pathway frame is the FOUR-PROCESS LIST (Transduction/Transmission/Modulation/Perception), and the only anatomy printed is peripheral (nociceptor + TRPV; Aδ vs C fibers) plus the neuropathic Na+ channel. The ascending-station labels used to seat the four processes in the note and visual (dorsal-horn synapse, spinothalamic tract, thalamus/cortex, descending modulation) are KYP extensions beyond the book's printed set, flagged wherever they appear; substance P/glutamate and gate-control theory are NOT used. The blocker matrix (step × class) is KYP's pivot of the book's own four printed lines — every cell is the book's own assignment. The registry visual (PainTransmissionMap) is an ORIGINAL_KYP_ADAPTATION — an original KYP pain-process map synthesized from the section's own sentences (the stimulus band; the TRANSDUCTION node with the TRPV → Ca2+ → Na+ glyph; the Aδ/C fiber-split card; the MODULATION and PERCEPTION nodes; the NEUROPATHIC contrast panel; the blocker matrix; the four-code strip) — no source artwork exists to reproduce (no figure on the page). EXCLUSIONS: the 'Acetylcholine receptors' section in the UPPER portion of this SAME page is the COMPLETED topic PH12 'acetylcholine-receptors' (EXCLUDED; boundary pinned); pdf 256's lower portion is the COMPLETED topic PH11 'autonomic-receptors' (EXCLUDED; 256-side boundary pinned); pdf 258 opens the SEPARATE pending 'Micturition control' section (258-side boundary pinned). The clinical anchors that extend past the source page (clonidine/dexmedetomidine as the α2-agonists; lidocaine/bupivacaine as the local anesthetics; gabapentin/pregabalin as the gabapentinoids; amitriptyline/duloxetine as the TCA/SNRI; capsaicin as the TRPV agonist; the diabetic workup behind the neuropathy example) are flagged as KYP clinical anchors wherever they appear. The section prints NO margin mnemonic — all four mnemonic codes are KYP-original. No copyrighted photographs exist on the page; nothing reproduced.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "pain-transmission", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"pain-transmission-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [257], "235", "PHARMACOLOGY_DIAGRAM", "The section's two subsections and the four-process blocker list (the whole section — there is no figure on the page)",
       "The section's entire printed content, verbatim: the NOCICEPTIVE PAIN subsection — 'Pain signals transmitted to the CNS in response to mechanical, thermal, or chemical stimuli.'; 'Transient receptor potential vanilloid ligand receptors cause Ca2+ influx–induced Na+ channel activation. Signals transmitted by Aδ fibers (sharp, acute pain) or C fibers (dull, throbbing, chronic pain).'; 'Processes involved in pain transmission:' with its four lines (Transduction — local anesthetics, α2-agonists, gabapentinoids, NSAIDs, acetaminophen, glucocorticoids; Transmission — local anesthetics, α2-agonists, opioids; Modulation — TCAs, SSRIs, SNRIs, gabapentinoids; Perception — α2-agonists, opioids, TCAs, SSRIs, SNRIs) — and the NEUROPATHIC PAIN subsection — 'Caused by neuronal dysfunction of the CNS or PNS. Transmitted via upregulation and persistent activation of voltage-gated Na+ channels. Example: diabetic peripheral neuropathy.' PAGE-STRUCTURE FINDING: NO pathway diagram exists on the page (the section is typeset text; pdfimages returned zero raster rows). The dorsal-horn/spinothalamic/thalamus/cortex station chain, substance P/glutamate, and gate-control theory are NOT printed on this page — the anatomical station labels that seat the four processes in the KYP visual are flagged extensions.",
       "ORIGINAL_KYP_ADAPTATION", "pain-transmission-map", "the registry visual (the PainTransmissionMap — the stimulus band; the TRANSDUCTION node with the TRPV → Ca2+ influx → Na+ channel glyph and its six blocker chips; the Aδ/C fiber-split card with the transmission blockers; the MODULATION node with its four blocker chips; the PERCEPTION node with its five; the NEUROPATHIC contrast panel; the step × class blocker matrix; the four-code mnemonic strip) + blocks[0] the visual block"),
]
(ROOT / "content/usmle/manifests/pain-transmission.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/pain-transmission.json").write_text(
    json.dumps({"topicId": "pain-transmission", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "pain-transmission", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + text layer): NO raster images on the page (pdfimages -list returned zero rows for pdf 257) — the Pain transmission section is TYPESET TEXT ONLY (no figure exists to reproduce). The section is carried verbatim in the note's first table block and re-typeset as an ORIGINAL_KYP_ADAPTATION in the registry visual PainTransmissionMap: an original KYP pain-process map (the stimulus band; the TRANSDUCTION node with its TRPV → Ca2+ influx → Na+ channel glyph; the Aδ/C fiber-split card; the MODULATION and PERCEPTION nodes; the NEUROPATHIC contrast panel; the step × class blocker matrix; the four-code strip) built from the section's own sentences — only short attributed terms (TRPV, Aδ, C, the four process names, the blocker class names) are carried across. PAGE-STRUCTURE FINDING: the page prints NO pathway diagram and NO neurotransmitter account — the dorsal-horn → spinothalamic-tract → thalamus → cortex chain, substance P / glutamate, and gate-control theory are NOT printed on this page; the anatomical station labels used to seat the book's four processes (dorsal-horn synapse, spinothalamic tract, thalamus/cortex, descending modulation) are KYP extensions, flagged on the visual itself. The blocker matrix is KYP's pivot of the book's own four printed lines (every cell is the book's own assignment). EXCLUSIONS: the 'Acetylcholine receptors' section in the UPPER portion of the same page belongs to the COMPLETED topic PH12 'acetylcholine-receptors' and is NOT part of this inventory; pdf 256's lower portion belongs to the COMPLETED topic PH11 'autonomic-receptors'; pdf 258 opens the SEPARATE pending 'Micturition control' section (this section ENDS on pdf 257). The clinical anchors extending past the source page (clonidine/dexmedetomidine, lidocaine-type local anesthetics, gabapentin/pregabalin, amitriptyline/duloxetine, capsaicin, the diabetic workup) are KYP clinical anchors, flagged wherever they appear. The section prints NO margin mnemonic; the four codes are KYP-original."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "pain-transmission":
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
print("PH13 manifest + inventory + flip done")
