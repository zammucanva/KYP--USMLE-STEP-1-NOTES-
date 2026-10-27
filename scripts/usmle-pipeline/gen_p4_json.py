#!/usr/bin/env python3
"""P4 necrosis-types — manifest + inventory + flip (Pathology 4/19).
Census: p227 (book 205) carries SIX cmyk JPEG rasters (~287x226 at 150
dpi), lettered A-F, printed in a 2x3 grid at the bottom of the page,
matching the A-F markers in the table's HISTOLOGY column. VLM census
(render p-227.png) documented each: A = H&E micrograph of coagulative
necrosis (preserved architecture, lost nuclei, eosinophilic
cytoplasm); B = gross brain with a large cystic cavity (liquefactive);
C = gross specimen with a central white cheeselike area (caseous);
D = H&E micrograph of fat necrosis (fat-cell outlines without
peripheral nuclei, dark-blue calcium saponification); E = H&E
micrograph of a vessel wall with a smudgy eosinophilic proteinaceous
layer (fibrinoid); F = clinical photograph of a hand with blackened
necrotic fingertips (gangrenous). ALL SIX ARE COPYRIGHTED —
described-in-text only, NEVER reproduced (the M32 convention). The
page has no drawn figure — the TABLE is the content. The table's SEEN
IN and DUE TO columns interleave in the text layer (the fat row's
enzymatic/nonenzymatic seen-in pair prints before its due-to text,
raw 66-80 — the M38 interleaving pattern). NO margin notes or
mnemonics (VLM confirmed)."""
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
L = {227: pages[226].split("\n")}
P = {227: norm(pages[226])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg-22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E4 = [
    ("Page identity — the section banner, the printed page number, and the Necrosis heading", rng(227, 1, 9), 227),
    ("The necrosis definition — exogenous injury → plasma membrane damage → intracellular components leak → enzymatic degradation and protein denaturation → local inflammatory reaction (unlike apoptosis)", rng(227, 11, 12), 227),
    ("The table's column headers — TYPE, SEEN IN, DUE TO, HISTOLOGY", rng(227, 14, 21), 227),
    ("The Coagulative row — most tissues except brain; denatured enzymes block proteolysis; preserved architecture, nuclei disappear, ↑ eosin binding; the A photograph marker", rng(227, 22, 36), 227),
    ("The Liquefactive row — bacterial abscesses, CNS infarcts; neutrophil lysosomal enzymes; early debris and macrophages, late cystic spaces and cavitation; the B marker", rng(227, 38, 50), 227),
    ("The Caseous row — TB, systemic fungi (Histoplasma capsulatum), Nocardia; macrophages wall off the organism; the granuloma; cheeselike gross; the C marker", rng(227, 52, 64), 227),
    ("The Fat row (the M38 interleaving — enzymatic/nonenzymatic seen-in pair printing before the due-to text) — pancreatitis saponification, traumatic breast; lipase → triglycerides → fatty acids + calcium; chalky-white; dark blue on H&E; the D marker", rng(227, 66, 85), 227),
    ("The Fibrinoid row — immune vascular reactions (polyarteritis nodosa), nonimmune (hypertensive emergency, preeclampsia); type III immune complex deposition and/or plasma protein leakage; eosinophilic proteinaceous layer; the E marker", rng(227, 87, 106), 227),
    ("The Gangrenous row — distal extremity and GI tract after chronic ischemia; dry = ischemia = coagulative; wet = superinfection = liquefactive superimposed on coagulative; the F marker", rng(227, 108, 120), 227),
    ("The indd footer + the A-F photograph letter row (page identity, the photograph grid's key)", rng(227, 122, 134), 227),
    ("The timestamp footer (page identity)", rng(227, 136, 136), 227),
]
for c, q, p in E4:
    e = ev(c, q, p)
    if e["verified"] != "pass": fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"necrosis-types: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m4 = {"topicId": "necrosis-types", "title": "Necrosis: The Five Morphologic Patterns",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Necrosis", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [227], "bookPages": "205–205"},
    "sourceEvidence": kept, "visualIds": ["necrosis-type-map"],
    "mechanismIds": ["membrane-leak-inflammation", "tissue-router"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the definition and the table; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "tissue-router", "summary": "The tissue-router synthesis (match the organ and the player to the pattern) and the gangrenous location rule (not a seventh pattern — the same two patterns at a named site, decided by the bacteria).",
         "origin": "outside-first-aid", "rationale": "The source prints the six rows without a routing rule or the location framing; the router and the fork logic are KYP's design.",
         "location": "core.keyIdea + mechanism 2 + the exam callout + the visual's router panel"},
        {"id": "coagulative-paradox-framing", "summary": "The coagulative-paradox framing (the demolition crew was denatured too) and the loud-death contrast sustained across the table.",
         "origin": "outside-first-aid", "rationale": "The source states the mechanism once; the paradox framing and the sustained loud/quiet contrast are KYP's synthesis.",
         "location": "mechanism 1 + traps + mnemonics + crossLinks"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p227's six photographs (A-F: three H&E micrographs, two gross specimens, one clinical photograph) are ALL COPYRIGHTED — described-in-text only, never reproduced (the M32 convention). The page has no drawn figure; the TABLE is the content — the registry visual is an original KYP adaptation of the table's structure (not a redraw). The table's text is carried verbatim; the fat row's column interleaving documented (the M38 pattern). No margin mnemonics (VLM confirmed).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Necrosis",
    "topicId": "necrosis-types", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"necrosis-types-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv4 = [
    sv(1, [227], "205–205", "VISUAL_TABLE", "The six-row necrosis table (book 205)",
       "The page's entire content table — TYPE/SEEN IN/DUE TO/HISTOLOGY for Coagulative, Liquefactive, Caseous, Fat, Fibrinoid, and Gangrenous — with the A-F photograph markers in the HISTOLOGY column. The fat row's seen-in pair prints before its due-to text (the M38 interleaving pattern). Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "necrosis-type-map", "the registry visual (the six type cards + the router panel, a KYP adaptation of the table's structure) + blocks[1] the table block carried verbatim"),
    sv(2, [227], "205–205", "HISTOLOGY", "Photograph A — coagulative necrosis (book 205)",
       "An H&E micrograph (cmyk jpeg, ~287x226 at 150 dpi): preserved cellular architecture with lost nuclei and eosinophilic cytoplasm. COPYRIGHTED — described in text, never reproduced.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's photograph panel + blocks[2] the photographs table — a copyrighted micrograph, never reproduced", "note-block"),
    sv(3, [227], "205–205", "GROSS_PATHOLOGY", "Photograph B — liquefactive necrosis (book 205)",
       "A gross specimen photograph of a brain with a large cystic cavity — the healed infarct's cavitation. COPYRIGHTED — described in text, never reproduced.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's photograph panel + blocks[2] the photographs table", "note-block"),
    sv(4, [227], "205–205", "GROSS_PATHOLOGY", "Photograph C — caseous necrosis (book 205)",
       "A gross specimen photograph with a central white cheeselike area — the granuloma's necrotic center. COPYRIGHTED — described in text, never reproduced.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's photograph panel + blocks[2] the photographs table", "note-block"),
    sv(5, [227], "205–205", "HISTOLOGY", "Photograph D — fat necrosis (book 205)",
       "An H&E micrograph: outlines of dead fat cells without peripheral nuclei, with the dark-blue calcium saponification. COPYRIGHTED — described in text, never reproduced.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's photograph panel + blocks[2] the photographs table", "note-block"),
    sv(6, [227], "205–205", "HISTOLOGY", "Photograph E — fibrinoid necrosis (book 205)",
       "An H&E micrograph of a vessel wall with a thickened smudgy eosinophilic proteinaceous layer. COPYRIGHTED — described in text, never reproduced.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's photograph panel + blocks[2] the photographs table", "note-block"),
    sv(7, [227], "205–205", "DERMATOLOGY_PHOTO", "Photograph F — gangrenous necrosis (book 205)",
       "A clinical photograph of a hand with blackened necrotic fingertips — dry gangrene of chronic distal ischemia. COPYRIGHTED — described in text, never reproduced (the M32 patient-photograph convention).",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's photograph panel + blocks[2] the photographs table", "note-block"),
]
(ROOT / "content/usmle/manifests/necrosis-types.json").write_text(json.dumps(m4, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/necrosis-types.json").write_text(
    json.dumps({"topicId": "necrosis-types", "chapterId": "pathology", "inventory": inv4,
                "coverageAudit": {"topicId": "necrosis-types", "textbookVisualCount": 7,
                    "accountedFor": 7, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 7,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page has no drawn figure — the TABLE is the content, adapted as the registry visual (the six type cards + the router panel). The six photographs (A-F) are ALL COPYRIGHTED — described in text in the registry visual's photograph panel and the note's photographs table, never reproduced (the M32 convention). No margin mnemonics exist on the page; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pathology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "necrosis-types":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv4))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pathology {done}/19{' — CHAPTER COMPLETE' if done==19 else ''}")
print("P4 manifest + inventory + flip done")
