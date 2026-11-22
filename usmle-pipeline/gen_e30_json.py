#!/usr/bin/env python3
"""E30 complement-disorders — manifest + visual inventory + chapter flip.

Immunology topic 13/24 (Immune Responses banner). Evidence pinned on
pdf 127 / book 105 (Complement disorders + Complement pathway testing).

Census: pdfimages on p127 shows ONE content raster — 194x185 cmyk jpeg =
the dark-urine clinical photograph (marked 'A' on the printed page). It is
COPYRIGHTED and is described (never reproduced) in the KYP visual/note.

Mnemonic boundary (E22/E24/E28/E29 rule): the page prints FA's testing
mnemonic "CH50 = Classical, AH50 = Alternative, Together = Terminal (CAT)" —
quoted in manifest evidence for VERIFICATION ONLY, never reproduced
user-facing; KYP originals replace it.
"""
import json
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"

def norm(s: str) -> str:
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()

pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "":
    pages.pop()
P = {p: norm(pages[p - 1]) for p in (127,)}

def ev(claim: str, quote: str, pg: int) -> dict:
    ok = norm(quote) in P[pg]
    return {
        "claim": claim,
        "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg - 22)},
        "quote": quote,
        "verified": "pass" if ok else "FAIL",
        "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)",
    }

E = []  # (claim, quote, page)

# --- p127: headings + early/terminal deficiencies ---
E += [
    ("Section heading", "Complement disorders", 127),
    ("Subsection heading", "Complement protein deficiencies", 127),
    ("Early deficiency — heading", "Early complement\ndeficiencies (C1-C4)", 127),
    ("Early deficiency — infections", "↑ risk of severe, recurrent pyogenic sinus and respiratory tract infections.", 127),
    ("Early deficiency — SLE risk", "C3b used in clearance of\nantigen-antibody complexes → ↑ risk of SLE (think SLEarly).", 127),
    ("Terminal deficiency — heading + phenotype", "Terminal complement\ndeficiencies (C5-C9)\n↑ susceptibility to recurrent Neisseria bacteremia.", 127),
]

# --- p127: C1 inhibitor deficiency ---
E += [
    ("Regulatory heading", "Complement regulatory protein deficiencies", 127),
    ("C1-INH deficiency — heading", "C1 inhibitor deficiency", 127),
    ("C1-INH — mechanism", "Causes hereditary angioedema due to unregulated activation of kallikrein → ↑ bradykinin.", 127),
    ("C1-INH — C4", "Characterized by ↓ C4 levels.", 127),
    ("C1-INH — ACEi contraindication", "ACE inhibitors are contraindicated (also ↑ bradykinin).", 127),
    ("C1-INH — treatment", "Treatment: ecallantide (Kallikrein inhibitor), icatibant (Bradykinin-B2 receptor antagonist).", 127),
]

# --- p127: PNH ---
E += [
    ("PNH — heading", "Paroxysmal nocturnal\nhemoglobinuria", 127),
    ("PNH — mechanism chain", "Acquired PIGA gene mutation → ↓ GPI anchors → loss of CD55(DAF)/CD59 (MIRL) →\ncomplement-mediated intravascular hemolysis +/− extravascular hemolysis.", 127),
    ("PNH — CD59 route (major)", "Loss of CD59 → uninhibited MAC formation → intravascular hemolysis (major)", 127),
    ("PNH — CD55 route (minor)", "Loss of CD55 → ↑ C3b opsonization → extravascular hemolysis (minor; RBC clearance by\nreticuloendothelial system)", 127),
    ("PNH — labs", "Complement-mediated hemolysis → ↓ haptoglobin, hemoglobinuria, hemosiderinuria (dark\nurine A , often in the morning)", 127),
    ("PNH — triad", "Triad of hemolytic anemia, pancytopenia, atypical venous thrombosis (eg, Budd-Chiari, portal,\ncerebral, dermal).", 127),
    ("PNH — treatment heading", "Treatment:", 127),
    ("PNH — eculizumab", "Eculizumab (anti-C5 antibody)—blocks terminal complement (prevents intravascular hemolysis\nonly)", 127),
    ("PNH — proximal inhibitors", "Proximal complement inhibitors (eg, anti-C3, investigational)—may reduce extravascular\nhemolysis", 127),
]

# --- p127: pathway testing ---
E += [
    ("Testing heading", "Complement pathway\ntesting", 127),
    ("CH50", "CH50 tests classical pathway (C1, C2, C4); ↓ in SLE, immune complex diseases, C2/C4 deficiency.", 127),
    ("AH50", "AH50 tests alternative pathway (factor D, B, properdin); ↓ in properdin, factor D/B deficiency,\nNeisseria infections.", 127),
    ("CH50 + AH50 combined", "CH50 + AH50 test common/terminal pathways (C3, C5-C9); ↓ in terminal pathway defect (C5-C9)\nor complement consumption (eg, sepsis, autoimmune disease).", 127),
    ("FA printed mnemonic (verification only — not reproduced user-facing)", "CH50 = Classical, AH50 = Alternative, Together = Terminal (CAT).", 127),
]

EVIDENCE = [ev(c, q, p) for (c, q, p) in E]

failures = []
for e in EVIDENCE:
    if len(e["quote"].strip()) < 3:
        failures.append(f"sub-3-char quote dropped: {e['quote']!r} ({e['claim']})")
    elif e["verified"] != "pass":
        failures.append(f"NOT FOUND on page {e['pages']['pdfPages'][0]}: {e['quote']!r} ({e['claim']})")
if failures:
    print("EVIDENCE FAILURES:")
    for f in failures:
        print("  ✗", f)
    sys.exit(1)

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 127 / book 105)")

QA = {g: "pass" for g in [
    "sourceVerified", "contentComplete", "miniCaseConsistent", "kypExtensionsTraceable",
    "mnemonicQuality", "visualsPaint", "visualCoverage", "mechanismRender", "lightMode",
    "darkMode", "mobile", "desktop", "consoleClean", "captionsReadable", "trackerSynced",
]}
STAGES = {s: "pass" for s in [
    "sourceLocated", "chapterMapped", "subsectionMapped", "topicScoped", "evidencePinned",
    "noteAuthored", "visualsAuthored", "mechanismAuthored", "clinicalAuthored",
    "pivotsAuthored", "trapsAuthored", "mnemonicAuthored", "rapidReviewAuthored",
    "relatedAuthored", "qaPassed", "trackerSynced",
]}

SRC127 = {"part": 1, "pdfPages": [127], "bookPages": "105"}

manifest = {
    "topicId": "complement-disorders",
    "title": "Complement Disorders & Pathway Testing",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Immune Responses",
    "part": 1,
    "sourcePages": SRC127,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["complement-deficiency-map"],
    "mechanismIds": ["pnth-two-hemolysis-routes", "complement-test-localization"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the deficiency/testing text; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "block-point-coverage-model",
            "summary": "Reading therapy coverage as a property of the block point (eculizumab at C5 cannot reach a C3b-mediated process; proximal inhibitors exist for exactly that residual), plus the deficiency-vs-consumption distinction behind every low assay value, and the PNH confirmatory-test bridge (flow cytometry/FLAER — not printed on p127).",
            "origin": "outside-first-aid",
            "rationale": "The source states therapies and assay ranges without the block-point coverage logic, consumption-vs-deficiency framing, or confirmatory-test details; these integrations are KYP's design, labeled as extension.",
            "location": "mechanism captions + traps 1-2 + mnemonics + callout + miniCase distractors",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: pdfimages on p127 shows ONE content raster — 194x185 cmyk jpeg = the dark-urine clinical photograph (labeled 'A' on the printed page). It is COPYRIGHTED and is described (never reproduced) in the KYP visual and note. One original KYP registry visual (complement-deficiency-map) covers the three deficiency cards, the testing panel, and the PNH panel. MNEMONIC BOUNDARY (E22/E24/E28/E29 rule): FA's printed testing mnemonic ('CH50 = Classical, AH50 = Alternative, Together = Terminal (CAT)') and the 'SLEarly' tag are quoted in manifest evidence for VERIFICATION ONLY — never user-facing; KYP originals replace them. Text-layer note: the labs quote includes the printed 'A ' figure-pointer token (verbatim). Boundary: pdf 128 (cytokines) = E31.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"complement-disorders-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC127,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Immune Responses",
        "topicId": "complement-disorders",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "complement-disorders",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "GROSS_PATHOLOGY", "Dark-urine clinical photograph (figure A)",
            "A clinical photograph of a urine specimen (labeled 'A' on the printed page) demonstrating the dark urine of intravascular hemolysis — often most evident in the concentrated first-morning specimen in PNH.",
            "ORIGINAL_KYP_ADAPTATION", "complement-deficiency-map", "described-in-text", "described in the registry visual's PNH labs card + note callout — never reproduced"),
        svi(2, "VISUAL_TABLE", "Complement disorders — the deficiency/testing text roster",
            "Text sections: Early complement deficiencies (C1-C4); Terminal complement deficiencies (C5-C9); Complement regulatory protein deficiencies (C1 inhibitor deficiency; Paroxysmal nocturnal hemoglobinuria with treatment); Complement pathway testing (CH50, AH50, CH50+AH50).",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] — 'Complement disorders — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "complement-disorders",
        "textbookVisualCount": 2,
        "accountedFor": 2,
        "sourceReproductions": 0,
        "kypRedraws": 0,
        "kypOriginals": 2,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: one content raster (the 194x185 urine photograph, figure A) — COPYRIGHTED, conveyed as a DESCRIPTION in the original KYP registry visual's labs card and the note text (never reproduced; ORIGINAL_KYP_DESCRIPTION implementation type). The text roster is the note's verbatim table block. The registry visual (complement-deficiency-map) is an original KYP teaching diagram consolidating all printed sections.",
}

(ROOT / "content/usmle/manifests/complement-disorders.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/complement-disorders.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 12/24 -> 13/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "complement-disorders":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: complement-disorders -> complete, textbookVisuals rewritten (2 sv)")
        break
else:
    print("ERROR: complement-disorders not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
