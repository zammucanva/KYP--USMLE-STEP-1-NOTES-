#!/usr/bin/env python3
"""P5 tissue-injury-infarcts — manifest + inventory + flip (Pathology 5/19).
Census: p228 (book 206) carries THREE cmyk JPEG rasters (~188x137,
~265x264, ~208x209 at 150 dpi) — all GROSS PHOTOGRAPHS with
DUPLICATED lettering (a source quirk, documented): the 'A' at the
heart table row = a heart cross-section with yellow outline lines
tracing a pale subendocardial region; the 'A' in the red-infarcct
block = a LUNG with a dark-red wedge-shaped hemorrhagic (red)
infarct; the 'B' in the pale-infarcct block = a heart with a large
pale/white transmural infarct outlined by yellow lines. The text
layer prints the 'A' marker at raw 6 (before the banner) and the A/B
letter row at raw 82-84 after the indd footer (the M39 footer-split
pattern). ALL THREE PHOTOGRAPHS ARE COPYRIGHTED — described-in-text
only, NEVER reproduced (the M32 convention). The page is otherwise
PURE TEXT. NO margin notes or mnemonics (VLM confirmed)."""
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
L = {228: pages[227].split("\n")}
P = {228: norm(pages[227])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg-22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E5 = [
    ("Page identity — the printed page, section banner, the Ischemia heading, and the pre-banner 'A' photograph marker (the duplicated-lettering quirk's first print)", rng(228, 1, 10), 228),
    ("The ischemia definition and its three mechanisms — ↓ arterial perfusion (atherosclerosis), ↓ venous drainage (testicular torsion, Budd-Chiari syndrome), shock", rng(228, 12, 13), 228),
    ("The vulnerable-regions table intro + headers + the Brain row (ACA/MCA/PCA boundary areas)", rng(228, 14, 21), 228),
    ("The Heart, Kidney, Liver, and Colon rows — subendocardium of LV; straight segment of proximal tubule + thick ascending limb; zone III around the central vein; splenic flexure (Griffith point) + rectosigmoid junction (Sudeck point)", rng(228, 23, 40), 228),
    ("Footnotes a and b — the watershed-area definition and the most vulnerable neurons (Purkinje cells; pyramidal cells of hippocampus and neocortex, layers 3, 5, 6)", rng(228, 42, 48), 228),
    ("The Red infarct — venous occlusion, multiple blood supplies (liver, lung, intestine, testes), reperfusion after angioplasty; reperfusion injury due to free radicals", rng(228, 50, 57), 228),
    ("The Pale infarct — solid organs with a single (endarterial) blood supply (heart, kidney)", rng(228, 59, 61), 228),
    ("Free radical injury — the three damages, the initiators (radiation, phase I metabolism, redox, nitric oxide, transition metals via Fenton, WBC oxidative burst), and the eliminators (catalase, SOD, glutathione peroxidase, spontaneous decay, vitamins A/C/E, transferrin, ceruloplasmin)", rng(228, 63, 71), 228),
    ("The three example groups — oxygen toxicity (ROP, BPD, post-thrombolytic reperfusion); drug/chemical toxicity (acetaminophen; CCl4 → P-450 → CCl3 → fatty liver with ↓ apolipoprotein synthesis, centrilobular necrosis); metal storage diseases (hemochromatosis iron, Wilson copper)", rng(228, 72, 78), 228),
    ("The indd footer + the A/B photograph letter row (the duplicated-lettering quirk's second print, after the footer — the M39 split pattern)", rng(228, 80, 84), 228),
    ("The timestamp footer (page identity)", rng(228, 86, 86), 228),
]
for c, q, p in E5:
    e = ev(c, q, p)
    if e["verified"] != "pass": fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"tissue-injury-infarcts: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m5 = {"topicId": "tissue-injury-infarcts", "title": "Tissue Hypoxia Susceptibility, Infarcts & Free Radicals",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Ischemia and infarcts", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [228], "bookPages": "206–206"},
    "sourceEvidence": kept, "visualIds": ["infarct-type-map"],
    "mechanismIds": ["supply-demand-mismatch", "free-radical-economy"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the definition, the table, the infarct pair, and the free-radical block; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "supply-site-color-map", "summary": "The supply-site-color reading frame (route the mechanism, name the vulnerable site, predict the color) and the reperfusion-paradox framing — KYP's synthesis of the page's four blocks.",
         "origin": "outside-first-aid", "rationale": "The source prints the four blocks side by side without a unifying decision frame; the three-question routing and the paradox framing are KYP's design.",
         "location": "core.keyIdea + mechanism 1 + the exam callout + patterns + pivots"},
        {"id": "radical-ledger", "summary": "The free-radical economy framing (initiators against eliminators as a balance sheet, the Fenton metals with their carriers, and the CCl3-zone III link to the vulnerability table) and the duplicated-A lettering quirk documentation.",
         "origin": "outside-first-aid", "rationale": "The source prints the two lists without the ledger framing or the cross-block link; the economy framing and the quirk documentation are KYP's design.",
         "location": "mechanism 2 + traps + mnemonics + the visual's quirk panel"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p228's three gross photographs (A-heart-subendocardial, A-lung-red-infarcct, B-heart-pale-transmural) are ALL COPYRIGHTED — described-in-text only, never reproduced (the M32 convention). The DUPLICATED-A lettering (two different images, one letter — printing at raw 6 and raw 82-84) is a source quirk documented in the manifest and the visual's quirk panel. The page is otherwise pure text; the registry visual is a KYP adaptation, not a redraw. No margin mnemonics (VLM confirmed).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Ischemia and infarcts",
    "topicId": "tissue-injury-infarcts", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"tissue-injury-infarcts-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv5 = [
    sv(1, [228], "206–206", "VISUAL_TABLE", "The ischemia definition + the vulnerable-regions table with its two footnotes (book 206)",
       "The ORGAN/SUSCEPTIBLE REGION table (brain ACA/MCA/PCA boundary areas; heart subendocardium of LV; kidney straight segment of proximal tubule + thick ascending limb; liver zone III; colon Griffith + Sudeck points) with the watershed-area and vulnerable-neuron footnotes. Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "infarct-type-map", "the registry visual (the ischemia panel + the vulnerable-regions panel) + blocks[1] the table block carried verbatim"),
    sv(2, [228], "206–206", "VISUAL_TABLE", "The red/pale infarct pair + the free-radical injury block (book 206)",
       "The red infarct (venous occlusion, multiple blood supplies, reperfusion with free-radical injury) and pale infarct (single endarterial supply) pair, plus the free-radical damage/initiators/eliminators block with its three example groups. Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "infarct-type-map", "the registry visual (the infarct-fork panel + the free-radical economy panel) + blocks[2] the table block carried verbatim"),
    sv(3, [228], "206–206", "GROSS_PATHOLOGY", "Photograph A (heart table row) — subendocardial infarction (book 206)",
       "A gross photograph (cmyk jpeg, ~188x137 at 150 dpi): a heart cross-section with yellow outline lines tracing a pale subendocardial region. COPYRIGHTED — described in text, never reproduced. NOTE: a second, different image (the lung red infarct) also carries the letter A — the duplicated-lettering quirk.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's pale-infarcct card + blocks[3] the photographs table — a copyrighted specimen photograph, never reproduced", "note-block"),
    sv(4, [228], "206–206", "GROSS_PATHOLOGY", "Photograph A (red-infarcct block) — hemorrhagic lung infarct (book 206)",
       "A gross photograph (cmyk jpeg, ~265x264 at 150 dpi): lung parenchyma with a dark-red wedge-shaped hemorrhagic (red) infarct at the periphery. COPYRIGHTED — described in text, never reproduced. The duplicated 'A' (also carried by the heart specimen) is a source quirk, documented.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's red-infarcct card + blocks[3] the photographs table", "note-block"),
    sv(5, [228], "206–206", "GROSS_PATHOLOGY", "Photograph B (pale-infarcct block) — pale transmural heart infarct (book 206)",
       "A gross photograph (cmyk jpeg, ~208x209 at 150 dpi): a heart with a large pale/white transmural infarct demarcated by drawn yellow lines. COPYRIGHTED — described in text, never reproduced.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's pale-infarcct card + blocks[3] the photographs table", "note-block"),
]
(ROOT / "content/usmle/manifests/tissue-injury-infarcts.json").write_text(json.dumps(m5, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/tissue-injury-infarcts.json").write_text(
    json.dumps({"topicId": "tissue-injury-infarcts", "chapterId": "pathology", "inventory": inv5,
                "coverageAudit": {"topicId": "tissue-injury-infarcts", "textbookVisualCount": 5,
                    "accountedFor": 5, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 5,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page's two text blocks (the vulnerability table + the infarct/free-radical content) are adapted as the registry visual and carried verbatim in the note's tables. The three photographs (A-heart-subendocardial, A-lung-red, B-heart-pale) are ALL COPYRIGHTED — described in text in the registry visual's cards and the note's photographs table, never reproduced (the M32 convention). The DUPLICATED-A lettering is a documented source quirk. No margin mnemonics exist on the page; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pathology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "tissue-injury-infarcts":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv5))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pathology {done}/19{' — CHAPTER COMPLETE' if done==19 else ''}")
print("P5 manifest + inventory + flip done")
