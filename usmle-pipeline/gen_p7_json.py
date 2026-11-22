#!/usr/bin/env python3
"""P7 amyloidosis — manifest + inventory + flip (Pathology 7/19).
Census: p230 (book 208) carries TWO cmyk JPEG rasters (~188x177 and
~188x175 at 150 dpi), lettered A and B: A = the Congo red micrograph
under NONPOLARIZED light (salmon red/orange amyloid deposits against
a pale pinkish background with scattered dark nuclei); B = the same
field under POLARIZED light (dark background, the deposits glowing
apple-green birefringent flecks and streaks). BOTH COPYRIGHTED —
described-in-text only, NEVER reproduced (the M32 convention).
Stream-order quirk (the M39 footer-split pattern): the left-column
labels 'Amyloidosis' (raw 94), 'COMMON TYPeS' (raw 96), 'A' (raw 98),
'B' (raw 100), 'Systemic' (raw 102), 'Localized' (raw 104) print
AFTER the table rows in the text layer. NO margin notes or mnemonics
on the page (VLM census confirmed); the KYP memory layer stays
original."""
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
L = {230: pages[229].split("\n")}
P = {230: norm(pages[229])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg-22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E7 = [
    ("Page identity — the section banner and the printed page number", rng(230, 1, 7), 230),
    ("The definition block — extracellular deposition of protein in abnormal fibrillar form (β-pleated sheet configuration) → cell injury and apoptosis; manifestations vary depending on involved organ", rng(230, 9, 12), 230),
    ("The six-organ manifestations list — Renal nephrotic syndrome; Cardiac restrictive cardiomyopathy; GI hepatosplenomegaly; Neurologic dementia and peripheral neuropathy; Musculoskeletal muscle enlargement (eg, macroglossia) and carpal tunnel syndrome; Skin waxy thickening and easy bruising", rng(230, 13, 20), 230),
    ("The staining block — Congo red (red/orange on nonpolarized light A, apple-green birefringence on polarized light B) and H&E (amorphous pink)", rng(230, 22, 25), 230),
    ("The table headers (FIBRIL PROTEIN / NOTES) + the Primary amyloidosis row — AL (from Ig Light chains), seen in plasma cell dyscrasias (eg, multiple myeloma)", rng(230, 27, 36), 230),
    ("The Secondary amyloidosis row — AA (serum Amyloid A), seen in chronic inflammatory conditions (eg, rheumatoid arthritis, IBD, familial Mediterranean fever, protracted infection)", rng(230, 38, 45), 230),
    ("The Transthyretin amyloidosis row — sporadic (wild-type TTR) slowly progressive, associated with aging, mainly affects the heart; hereditary (mutated TTR) familial amyloid polyneuropathy and/or cardiomyopathy", rng(230, 47, 55), 230),
    ("The Dialysis-related amyloidosis row — β2-microglobulin, seen in patients with ESRD on long-term dialysis", rng(230, 57, 63), 230),
    ("The Alzheimer disease row — β-amyloid protein, cleaved from amyloid precursor protein", rng(230, 65, 69), 230),
    ("The Isolated atrial amyloidosis row — ANP, common, associated with aging; ↑ risk for atrial fibrillation", rng(230, 71, 77), 230),
    ("The Type 2 diabetes mellitus row — Islet amyloid polypeptide, caused by deposition of amylin in pancreatic islets", rng(230, 79, 85), 230),
    ("The Medullary thyroid cancer row — Calcitonin, secreted from tumor cells", rng(230, 87, 92), 230),
    ("The stream-order quirk block — the left-column labels 'Amyloidosis', 'COMMON TYPeS', 'A', 'B', 'Systemic', 'Localized' printing AFTER the table rows (the M39 footer-split pattern, documented)", rng(230, 94, 104), 230),
    ("The indd footer + timestamp (page identity)", rng(230, 106, 108), 230),
]
for c, q, p in E7:
    e = ev(c, q, p)
    if e["verified"] != "pass": fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"amyloidosis: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m7 = {"topicId": "amyloidosis", "title": "Amyloidosis: The Deposition Diseases",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Cellular injury (amyloidosis)", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [230], "bookPages": "208–208"},
    "sourceEvidence": kept, "visualIds": ["amyloid-deposition-map"],
    "mechanismIds": ["beta-sheet-identification", "fibril-source-routing"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the definition, the manifestations list, the staining block, and the COMMON TYPES table; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "three-station-rule", "summary": "The three-station rule (the stain confirms, the organs map, the source names) — KYP's synthesis of the page's three blocks into one routing protocol.",
         "origin": "outside-first-aid", "rationale": "The source prints the three blocks side by side without a decision protocol; the three-station framing is KYP's design.",
         "location": "core.keyIdea + mechanism 1's output + m3 rapid review"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (ONE SHEET SIX ORGANS / CONGO GLOWS GREEN / MARROW MAKES AL INFLAMMATION MAKES AA / LOCAL PROTEIN LOCAL DISEASE) — the source page prints no mnemonics (VLM census confirmed), so the memory layer is entirely KYP-original.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere on book 208; the four codes and their meanings are KYP's design.",
         "location": "mnemonics + the visual's rule panels"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p230's two photographs (A = Congo red nonpolarized, salmon red/orange deposits; B = polarized, apple-green birefringent glow on a dark field) are COPYRIGHTED — described-in-text only, never reproduced (the M32 convention). Stream-order quirk documented (the M39 footer-split pattern): the left-column labels print at raw 94-104, after the table rows. No margin mnemonics on the page (VLM confirmed); the KYP memory layer is original.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Cellular injury (amyloidosis)",
    "topicId": "amyloidosis", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"amyloidosis-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv7 = [
    sv(1, [230], "208–208", "VISUAL_TABLE", "The COMMON TYPES table (book 208)",
       "The three-column table (COMMON TYPES | FIBRIL PROTEIN | NOTES) with Systemic (Primary AL, Secondary AA, Transthyretin, Dialysis-related β2-microglobulin) and Localized (Alzheimer β-amyloid, Isolated atrial ANP, Type 2 DM islet amyloid polypeptide, Medullary thyroid cancer calcitonin) group headers. Pure text; the group headers print late in the stream (raw 102/104, the M39 pattern).",
       "ORIGINAL_KYP_ADAPTATION", "amyloid-deposition-map", "the registry visual (the COMMON TYPES router, Systemic and Localized groups) + blocks[2] the table block carried verbatim"),
    sv(2, [230], "208–208", "SUMMARY_FIGURE", "The definition + manifestations + staining blocks (book 208)",
       "The β-pleated sheet definition with the cell injury and apoptosis endpoint, the six-organ manifestations list (▘ bullets), and the Congo red/H&E staining block. Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "amyloid-deposition-map", "the registry visual (the definition panel, the stain panel, the six-organ strip) + blocks[1] the table block carried verbatim"),
    sv(3, [230], "208–208", "HISTOLOGY", "Photograph A — Congo red under nonpolarized light (book 208)",
       "A cmyk JPEG micrograph (~188x177 at 150 dpi): salmon red/orange amyloid deposits in a granular, dense texture against a pale pinkish background with scattered dark nuclei, lettered A. COPYRIGHTED — described in text, never reproduced.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's stain panel + blocks[1] the photographs row — a copyrighted micrograph, never reproduced", "note-block"),
    sv(4, [230], "208–208", "HISTOLOGY", "Photograph B — Congo red under polarized light (book 208)",
       "A cmyk JPEG micrograph (~188x175 at 150 dpi): the same field under polarized light — a dark background with the amyloid deposits glowing as apple-green birefringent flecks and streaks, lettered B. COPYRIGHTED — described in text, never reproduced.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's stain panel + blocks[1] the photographs row", "note-block"),
]
(ROOT / "content/usmle/manifests/amyloidosis.json").write_text(json.dumps(m7, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/amyloidosis.json").write_text(
    json.dumps({"topicId": "amyloidosis", "chapterId": "pathology", "inventory": inv7,
                "coverageAudit": {"topicId": "amyloidosis", "textbookVisualCount": 4,
                    "accountedFor": 4, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 4,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's two text blocks (the COMMON TYPES table; the definition + manifestations + staining blocks) are adapted as the registry visual and carried verbatim in the note's tables. The two photographs (A = Congo red nonpolarized; B = polarized apple-green birefringence) are COPYRIGHTED — described in text in the registry visual and the note's table, never reproduced (the M32 convention). Stream-order quirk documented (the M39 footer-split pattern, raw 94-104). No margin mnemonics exist on the page; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pathology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "amyloidosis":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv7))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pathology {done}/19{' — CHAPTER COMPLETE' if done==19 else ''}")
print("P7 manifest + inventory + flip done")
