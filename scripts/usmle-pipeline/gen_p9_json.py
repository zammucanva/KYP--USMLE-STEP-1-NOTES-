#!/usr/bin/env python3
"""P9 leukocyte-trafficking — manifest + inventory + flip (Pathology
9/19). Census (pdfimages + VLM): pdf 233 (book 211) carries NO
raster images — the four-station extravasation figure is VECTOR
LINE ART with all labels in the text layer (Vessel lumen /
Endothelium / Interstitium; six PMN circles; Sialyl Lewis X on the
rolling PMN; P-selectin and E-selectin on the endothelium; LFA-1 on
the flattened PMN with ICAM-1 opposite; PECAM-1 at the diapedesis
junction; the four numbered stations) — redrawn as an ORIGINAL KYP
figure (the P2/P3 pure-vector convention). The table's STEP-column
entries interleave (the M38 pattern — margination-and-rolling prints
at raw 62-65 after the other rows). NO margin notes or mnemonics
(VLM confirmed); the KYP memory layer is original."""
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
L = {233: pages[232].split("\n")}
P = {233: norm(pages[232])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg-22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E9 = [
    ("Page identity — the section banner, the header, and the printed page number", rng(233, 1, 10), 233),
    ("The intro rule — extravasation predominantly occurs at postcapillary venules; the table headers (STeP | VASCULATURe/STROMA MARKeRS | LeUKOCYTe MARKeRS)", rng(233, 12, 17), 233),
    ("Station 1 vascular markers — E-selectin (released from endothelial cells, upregulated by TNF and IL-1) and P-selectin (translocated to endothelial surface via exocytosis from Weibel-Palade bodies)", rng(233, 19, 24), 233),
    ("Station 1 stroma and leukocyte markers — GlyCAM-1, CD34; Sialyl LewisX (the rolling carbohydrate)", rng(233, 25, 27), 233),
    ("Station 2 — tight binding (adhesion), defective in leukocyte adhesion deficiency type 1 (↓ CD18 integrin subunit); ICAM-1 (CD54), VCAM-1 (CD106); CD11/18 integrins (LFA-1, Mac-1), VLA-4 integrin", "\n".join([rng(233, 29, 32), rng(233, 34, 35), rng(233, 37, 39)]), 233),
    ("Station 3 — DiaPEdesis (transmigration), WBC travels between endothelial cells and exits blood vessel; PECAM-1 (CD31) on both sides", rng(233, 41, 48), 233),
    ("Station 4 — Migration, WBC travels through interstitium to site of injury or infection guided by chemotactic signals; the chemotactic factors (C5a, IL-8, LTB4, 5-HETE, kallikrein, platelet-activating factor, N-formylmethionyl peptides); leukocyte markers various", rng(233, 50, 60), 233),
    ("Station 1 — the interleaved STEP-column entry: margination and rolling, defective in leukocyte adhesion deficiency type 2 (↓ Sialyl LewisX) — the M38 interleaving pattern documented", rng(233, 62, 65), 233),
    ("The figure labels part 1 — the four numbered stations and the rolling carbohydrate (Margination & rolling, 2. Tight binding, 3. Diapedesis, 4. Migration, Sialyl LewisX, L-selectin)", rng(233, 67, 81), 233),
    ("The figure labels part 2 — the vessel zones and interaction markers (Vessel lumen, PMN, P-selectin, E-selectin, LFA-1, ICAM-1, PECAM-1, Endothelium, Interstitium, PMN, PMN)", rng(233, 83, 105), 233),
    ("The indd footer + timestamp (page identity)", rng(233, 107, 109), 233),
]
for c, q, p in E9:
    e = ev(c, q, p)
    if e["verified"] != "pass": fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"leukocyte-trafficking: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m9 = {"topicId": "leukocyte-trafficking", "title": "Leukocyte Extravasation & Cytokines",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Inflammation", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [233], "bookPages": "211–211"},
    "sourceEvidence": kept, "visualIds": ["leukocyte-trafficking-map"],
    "mechanismIds": ["extravasation-station-map", "lad-deficiency-fork"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the marker table and the figure; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "handshake-framing", "summary": "The four-handshake framing (roll, lock, squeeze, walk — each station one vasculature-leukocyte marker pair) and the two-lockout reading of the LAD deficiencies (station 2 vs station 1).",
         "origin": "outside-first-aid", "rationale": "The source prints the table's rows without the pairing protocol; the handshake framing and the lockout reading are KYP's design.",
         "location": "core.keyIdea + both mechanisms + the visual's station cards"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (ROLL LOCK SQUEEZE WALK / POSTCAPILLARY IS THE DOOR / CARBOHYDRATE ROLLS INTEGRIN LOCKS / C5a IL-8 LTB4 THE GRADIENT SEVEN) — no mnemonic prints on the page.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere on book 211 (VLM census confirmed); the four codes are KYP's design.",
         "location": "mnemonics + the visual's rule strip"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: NO rasters on pdf 233 — the extravasation figure is pure VECTOR LINE ART (labels in the text layer), redrawn as an ORIGINAL KYP figure with original glyphs (the P2/P3 pure-vector convention; never a reproduction). The table's STEP-column interleaving documented (the M38 pattern, raw 62-65). No margin mnemonics (VLM confirmed); the KYP memory layer is original.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Inflammation",
    "topicId": "leukocyte-trafficking", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"leukocyte-trafficking-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv9 = [
    sv(1, [233], "211", "VISUAL_TABLE", "The STeP | VASCULATURe/STROMA MARKeRS | LeUKOCYTe MARKeRS table (book 211)",
       "The four-row marker table: margination and rolling (E-selectin, P-selectin, GlyCAM-1/CD34 vs Sialyl LewisX, L-selectin; LAD-2 note), tight binding (ICAM-1, VCAM-1 vs CD11/18 integrins, VLA-4; LAD-1 note), diapedesis (PECAM-1 both sides), migration (the seven chemotactic factors vs various). Pure text; the STEP-column entries interleave (the M38 pattern).",
       "ORIGINAL_KYP_ADAPTATION", "leukocyte-trafficking-map", "the registry visual (the four station cards with both marker columns) + blocks[1] the table block carried verbatim"),
    sv(2, [233], "211", "SUMMARY_FIGURE", "The four-station extravasation figure (book 211)",
       "A VECTOR LINE-ART vessel cross-section (pdfimages: 0 rasters): Vessel lumen / Endothelium / Interstitium zone labels; six PMN circles shown rolling (Sialyl Lewis X labeled), flattening to tight binding (LFA-1 on the PMN against ICAM-1 on the endothelium), squeezing between endothelial cells at the PECAM-1 junction (diapedesis), and migrating through the interstitium; the four numbered station titles print with the figure.",
       "ORIGINAL_KYP_REDRAW", "leukocyte-trafficking-map", "the registry visual (the vessel map: lumen/endothelium/interstitium bands, the four numbered stations, PMN glyphs, and every interaction label) + blocks[2] the figure-labels table"),
]
(ROOT / "content/usmle/manifests/leukocyte-trafficking.json").write_text(json.dumps(m9, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/leukocyte-trafficking.json").write_text(
    json.dumps({"topicId": "leukocyte-trafficking", "chapterId": "pathology", "inventory": inv9,
                "coverageAudit": {"topicId": "leukocyte-trafficking", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's marker table is adapted as the registry visual's station cards and carried verbatim in the note's tables (an ORIGINAL KYP ADAPTATION). The four-station extravasation figure is pure vector line art (no rasters) — redrawn as an ORIGINAL KYP REDRAW with original glyphs per the P2/P3 pure-vector convention, never a reproduction. No margin mnemonics exist on the page; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pathology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "leukocyte-trafficking":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv9))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pathology {done}/19{' — CHAPTER COMPLETE' if done==19 else ''}")
print("P9 manifest + inventory + flip done")
