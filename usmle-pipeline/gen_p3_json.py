#!/usr/bin/env python3
"""P3 apoptosis-pathways — manifest + inventory + flip (Pathology 3/19).
Census: p226 (book 204) is PURE TEXT (pdfimages: ZERO rasters) — the
three-pathway convergence figure prints as VECTOR LINE ART with all
labels in the text layer (the M33/M34 convention). VLM census (render
p-226.png) confirmed the topology: the INTRINSIC column at left (DNA
damage from Radiation/ROS/toxins, Misfolded proteins, Hypoxia feeding
p53 activation, then Bax/Bak vs Bcl-2 flanking a mitochondrion icon —
Bax/Bak promoting pore formation and cytochrome C release, Bcl-2 the
inhibitor), the EXTRINSIC column at center-top (TNF-α binding TNFR
and FasL binding Fas on a cell-membrane drawing), and the
PERFORIN/GRANZYME B column at right (a cytotoxic T cell releasing
Granzyme B through Perforin pores) — all converging on the central
EXECUTIONER CASPASES box, fanning out to Cytoskeletal dispersion,
Cytoplasmic bleb, and Nuclear fragmentation, ending in an Apoptotic
body tagged 'Ligands for macrophage cell receptors' engulfed by a
Macrophage — line art/schematic, NO photographs. The source prints
TWO of its own mnemonics INLINE in the intrinsic block (not the outer
margin): 'Bad for survival' (Bax and Bak are proapoptotic) and 'Be
clever, live' (Bcl-2 and Bcl-xL are antiapoptotic) — carried VERBATIM
in the note's tables per the E38 precedent; the KYP memory layer
stays original. No other margin notes (VLM confirmed)."""
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
L = {226: pages[225].split("\n")}
P = {226: norm(pages[225])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg-22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E3 = [
    ("Page identity — the printed book page, section banner, and heading", rng(226, 1, 9), 226),
    ("The Apoptosis definition block — ATP-dependent programmed cell death; caspases; shrinkage/condensation/blebbing/apoptotic bodies phagocytosed; eosinophilic cytoplasm and basophilic nucleus; pyknosis and karyorrhexis; intact membrane without significant inflammation (unlike necrosis); DNA laddering at 180 bp", rng(226, 11, 17), 226),
    ("Intrinsic pathway triggers — embryogenesis tissue remodeling; IL-2 withdrawal after a completed immunologic reaction; radiation, toxins, hypoxia", rng(226, 19, 26), 226),
    ("The Bcl-2 rheostat with the source's own inline mnemonics — 'Bad for survival' and 'Be clever, live'", rng(226, 27, 28), 226),
    ("The intrinsic mechanism and the jammed door — BAX/BAK pores, cytochrome C release, caspase activation; Bcl-2 impermeability; follicular lymphoma t(14;18) overexpression → tumorigenesis", rng(226, 29, 32), 226),
    ("The extrinsic pathway — FasL-Fas (CD95), TNF-α-TNFR; thymic medullary negative selection; autoimmune lymphoproliferative syndrome (failure of clonal deletion, lymphadenopathy, hepatosplenomegaly, autoimmune cytopenias)", rng(226, 34, 41), 226),
    ("The perforin/granzyme B pathway — cytotoxic T-cell and NK-cell granules; perforin forms the pore", rng(226, 43, 47), 226),
    ("The figure's column titles + TNF-α + p53 activation + the intrinsic inputs (DNA damage, Radiation/ROS/toxins, Misfolded proteins, Hypoxia)", rng(226, 49, 61), 226),
    ("The figure's membrane pair and the hub approach — Bax/Bak, Bcl-2, Cytochrome C, FasL, TNFR, Fas, Executioner caspases", rng(226, 63, 73), 226),
    ("The figure's fan-out labels + the indd footer — Cytoskeletal dispersion, Cytoplasmic bleb (the M39 footer-split pattern)", rng(226, 75, 81), 226),
    ("The figure's cytotoxic payload and ending — Cytotoxic T cell, Granzyme B, Perforin, Nuclear fragmentation, the pathway title, Ligands for macrophage cell receptors, Macrophage, Apoptotic body", rng(226, 83, 101), 226),
    ("The timestamp footer (page identity)", rng(226, 103, 103), 226),
]
for c, q, p in E3:
    e = ev(c, q, p)
    if e["verified"] != "pass": fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"apoptosis-pathways: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m3 = {"topicId": "apoptosis-pathways", "title": "Apoptosis: Intrinsic, Extrinsic & Misfolded Proteins",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Apoptosis", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [226], "bookPages": "204–204"},
    "sourceEvidence": kept, "visualIds": ["apoptosis-pathway-map"],
    "mechanismIds": ["three-doors-one-executioner", "bcl2-rheostat"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the definition, the three pathway blocks, and the figure; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "door-routing-rule", "summary": "The match-the-door-to-the-stimulus routing rule and the failed-apoptosis fork (Bcl-2 overexpression cancer vs Fas-FasL ALPS autoimmunity) — KYP's synthesis of the three blocks.",
         "origin": "outside-first-aid", "rationale": "The source prints the pathways without a stimulus-to-door decision rule or a two-disease contrast; the routing rule and the fork are KYP's design.",
         "location": "core.keyIdea + mechanisms + the exam callout + pivots + traps"},
        {"id": "quiet-death-framing", "summary": "The quiet-death framing (intact membrane, no inflammation, the corpse eaten) and the shared-nuclear-words trap against the necrosis ladder of the cell-injury page.",
         "origin": "outside-first-aid", "rationale": "The source states the contrast once in the definition; the sustained quiet-vs-loud framing and the cross-page nuclear-words trap are KYP's design.",
         "location": "traps + mnemonics + crossLinks + miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p226 pure text (0 rasters) — the convergence figure is vector line art in the text layer (the M33/M34 convention); REDRAWN as the registry visual with original KYP glyphs (mitochondrion, membrane receptors, T cell, macrophage). The four text blocks (with the source's own two inline mnemonics 'Bad for survival' and 'Be clever, live' carried verbatim per the E38 precedent) and the figure's label set are note-block verbatim adaptations. No other margin mnemonics (VLM confirmed).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Apoptosis",
    "topicId": "apoptosis-pathways", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"apoptosis-pathways-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv3 = [
    sv(1, [226], "204–204", "SUMMARY_FIGURE", "The three-pathway convergence figure (book 204)",
       "Vector line art printing entirely in the text layer (pdfimages: 0 rasters): the intrinsic column (DNA damage/Radiation-ROS-toxins, Misfolded proteins, Hypoxia → p53 activation → Bax/Bak vs Bcl-2 at a mitochondrion icon → Cytochrome C), the extrinsic column (TNF-α-TNFR, FasL-Fas on a membrane drawing), and the perforin/granzyme column (a cytotoxic T cell) converging on the central executioner-caspase box, fanning to cytoskeletal dispersion, cytoplasmic bleb, and nuclear fragmentation, ending with the apoptotic body (ligands for macrophage cell receptors) engulfed by a macrophage. VLM census confirmed the topology; no photographs.",
       "ORIGINAL_KYP_REDRAW", "apoptosis-pathway-map", "the full registry visual — the convergence map with original KYP glyphs + the definition panel + the clinical-anchors panel + the one-line map strip"),
    sv(2, [226], "204–204", "VISUAL_TABLE", "The apoptosis text blocks (book 204)",
       "The definition block plus the three pathway blocks, including the source's own two inline mnemonics ('Bad for survival' for Bax/Bak; 'Be clever, live' for Bcl-2/Bcl-xL) printed in the intrinsic block.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[1] the table block — carried verbatim (source mnemonics carried verbatim per the E38 precedent)", "note-block"),
    sv(3, [226], "204–204", "VISUAL_TABLE", "The convergence figure's labels (book 204)",
       "The figure's labels printing in the text layer interleaved with the page footer (raw 49-101, the indd line at raw 81 — the M39 footer-split pattern).",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[2] the table block — carried verbatim (reading order VLM-verified)", "note-block"),
]
(ROOT / "content/usmle/manifests/apoptosis-pathways.json").write_text(json.dumps(m3, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/apoptosis-pathways.json").write_text(
    json.dumps({"topicId": "apoptosis-pathways", "chapterId": "pathology", "inventory": inv3,
                "coverageAudit": {"topicId": "apoptosis-pathways", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The convergence figure (vector line art in the text layer, 0 rasters — VLM census confirmed, no photographs) is REDRAWN as the registry visual with original KYP glyphs. The four text blocks and the figure's label set are note-block verbatim adaptations; the source's own two inline mnemonics are carried verbatim per the E38 precedent. No other margin mnemonics exist on the page; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pathology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "apoptosis-pathways":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv3))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pathology {done}/19{' — CHAPTER COMPLETE' if done==19 else ''}")
print("P3 manifest + inventory + flip done")
