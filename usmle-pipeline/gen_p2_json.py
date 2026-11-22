#!/usr/bin/env python3
"""P2 cell-injury-mechanisms — manifest + inventory + flip (Pathology 2/19).
Census: p225 (book 203) is PURE TEXT (pdfimages: ZERO rasters) — the
injury timeline prints as VECTOR LINE ART with all labels in the text
layer (the M33/M34 convention). VLM census (TWO rounds: full-page
render p-225.png + focused figure crop p-225-figure.png) confirmed
the topology: NORMAL CELL at left; GREEN DOUBLE-HEADED arrow to the
reversible-injury cell (labels: Cellular swelling, Ribosomal
detachment, Membrane blebbing, Nuclear chromatin clumping); RED arrow
to the irreversible-injury cell (labels: Rupture of lysosomes and
autolysis, Plasma membrane damage, Nuclear degradation, increased
mitochondrial permeability); BLACK arrow to a fragmented-cell drawing
= Cell death (necrosis); the legend prints at the figure's LEFT
(Reversible green, Irreversible red, Cell death black). Stream-order
quirk documented: 'Ferroptosis' prints among the figure labels in the
text stream (raw 36) but VLM-verified as the bolded paragraph heading
BELOW the figure. NO photographs, NO margin mnemonics (VLM confirmed
both rounds)."""
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
L = {225: pages[224].split("\n")}
P = {225: norm(pages[224])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg-22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E2 = [
    ("Page identity — the section banner, the double heading, and the printed page number", rng(225, 1, 7), 225),
    ("The 'Cell injury' + 'Reversible cell injury' headings", rng(225, 9, 10), 225),
    ("The reversible cascade — ATP/ATPase pumps/cellular swelling as the earliest morphologic manifestation; ribosomal detachment; membrane blebbing; chromatin clumping; rapid functional loss (myocardial noncontractile after 1-2 minutes); myelin figures", rng(225, 12, 18), 225),
    ("The irreversible cascade — plasma membrane breakdown with troponin leak and Ca2+ influx; mitochondrial damage with ETC loss; lysosomal rupture with autolysis; the pyknosis-karyorrhexis-karyolysis ladder; amorphous densities", rng(225, 20, 28), 225),
    ("The figure's main labels + the Ferroptosis stream-order quirk — Normal cell, Irreversible, Reversible, Cell death (necrosis), Ferroptosis", rng(225, 30, 36), 225),
    ("The figure's reversible-side stage labels — cellular swelling (printing after the footer, the M39 pattern); membrane blebbing; nuclear chromatin clumping; ribosomal detachment", rng(225, 38, 48), 225),
    ("The figure's irreversible-side stage labels — rupture of lysosomes and autolysis; plasma membrane damage; nuclear degradation; mitochondrial permeability", rng(225, 50, 61), 225),
    ("Ferroptosis mechanism and morphology — lipid peroxidation, lethal lipid species, iron-dependent cell death; mitochondrial shrinkage with loss of cristae and outer membrane rupture", rng(225, 63, 64), 225),
    ("Ferroptosis disease states and therapeutic applications — MASLD/MASH, ischemia-reperfusion injury, neurodegeneration, cancer therapy", rng(225, 65, 66), 225),
    ("Ferroptosis prevention — iron chelators (deferiprone, deferoxamine) and small lipophilic antioxidants (ferrostatin, liproxstatin)", rng(225, 67, 68), 225),
    ("The timestamp footer (page identity)", rng(225, 70, 70), 225),
]
for c, q, p in E2:
    e = ev(c, q, p)
    if e["verified"] != "pass": fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"cell-injury-mechanisms: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m2 = {"topicId": "cell-injury-mechanisms", "title": "Cell Injury: Reversible, Irreversible & Ferroptosis",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Cell injury", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [225], "bookPages": "203–203"},
    "sourceEvidence": kept, "visualIds": ["injury-timeline-map"],
    "mechanismIds": ["atp-pump-failure-cascade", "point-of-no-return"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the two bullet lists, the figure, and the ferroptosis paragraph; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "timeline-position-synthesis", "summary": "The timeline-position reading rule (place the named finding on the green or red segment; the membrane is the border) and the function-before-structure timing rule — KYP's synthesis of the two lists and the figure.",
         "origin": "outside-first-aid", "rationale": "The source prints the events and the timeline without a position-based decision rule; the segment logic and the hinge framing are KYP's design.",
         "location": "core.keyIdea + mechanism 1-2 + the exam callout + patterns + pivots"},
        {"id": "swelling-inversion-contrast", "summary": "The ferroptosis swelling-inversion contrast (mitochondria SHRINK vs the necrosis timeline's SWELLING) and the troponin-leak-marks-the-border clinical bridge.",
         "origin": "outside-first-aid", "rationale": "The source prints both morphologies without contrasting them; the inversion contrast and the laboratory bridge are KYP's synthesis.",
         "location": "mechanism 2 + traps + pivots + mnemonics + miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p225 pure text (0 rasters) — the timeline is vector line art in the text layer (the M33/M34 convention); REDRAWN as the registry visual with original KYP cell glyphs (round, swollen, breaking, fragmented). The two bullet lists and the figure's label set are note-block verbatim adaptations. The 'Ferroptosis' stream-order quirk documented. No margin mnemonics (VLM confirmed).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Cell injury",
    "topicId": "cell-injury-mechanisms", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"cell-injury-mechanisms-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv2 = [
    sv(1, [225], "203–203", "SUMMARY_FIGURE", "The cell injury timeline figure (book 203)",
       "Vector line art printing entirely in the text layer (pdfimages: 0 rasters): normal cell → green double-headed arrow → reversible-injury cell (cellular swelling, ribosomal detachment, membrane blebbing, nuclear chromatin clumping) → red arrow → irreversible-injury cell (rupture of lysosomes and autolysis, plasma membrane damage, nuclear degradation, mitochondrial permeability) → black arrow → the fragmented cell of cell death (necrosis); legend at the figure's left (green Reversible, red Irreversible, black Cell death). VLM census confirmed the topology in two rounds; no photographs.",
       "ORIGINAL_KYP_REDRAW", "injury-timeline-map", "the full registry visual — the timeline with original KYP cell glyphs + the reversible cascade panel + the irreversible/ferroptosis panel + the one-line timeline strip"),
    sv(2, [225], "203–203", "VISUAL_TABLE", "The reversible and irreversible bullet lists (book 203)",
       "The two definition lists: six reversible bullets (ATP-pump failure with cellular swelling as the earliest morphologic manifestation, ribosomal detachment, blebbing, chromatin clumping, rapid functional loss, myelin figures) and five irreversible bullets (membrane breakdown with troponin leak, ETC loss, lysosomal autolysis, the nuclear ladder, amorphous densities).",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[1] the table block — carried verbatim", "note-block"),
    sv(3, [225], "203–203", "VISUAL_TABLE", "The timeline figure's stage labels and legend (book 203)",
       "The figure's labels printing interleaved around the footer in the text layer (raw 30-61), including the 'Ferroptosis' stream-order quirk (prints among the figure labels but sits below the figure as the paragraph heading — VLM-verified).",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[2] the table block — carried verbatim (reading order VLM-verified)", "note-block"),
]
(ROOT / "content/usmle/manifests/cell-injury-mechanisms.json").write_text(json.dumps(m2, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/cell-injury-mechanisms.json").write_text(
    json.dumps({"topicId": "cell-injury-mechanisms", "chapterId": "pathology", "inventory": inv2,
                "coverageAudit": {"topicId": "cell-injury-mechanisms", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The timeline figure (vector line art in the text layer, 0 rasters — VLM census in two rounds, no photographs) is REDRAWN as the registry visual with original KYP cell glyphs; the source's green/red/black legend is rendered in the KYP palette (teal/red/foreground) and labeled as such. The two bullet lists and the figure's label set are note-block verbatim adaptations. The 'Ferroptosis' stream-order quirk is documented. No margin mnemonics exist on the page; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pathology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "cell-injury-mechanisms":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv2))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pathology {done}/19{' — CHAPTER COMPLETE' if done==19 else ''}")
print("P2 manifest + inventory + flip done")
