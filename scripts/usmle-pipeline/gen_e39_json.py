#!/usr/bin/env python3
"""E39 transplant-rejection — manifest + visual inventory + chapter flip.

Immunology topic 22/24 (Immunosuppressants banner). Evidence pinned on
pdf 139 / book 117 (Transplant rejection — the four-row table).

Census: pdfimages on p139 shows THREE content rasters (282x255, 283x255,
283x255 cmyk jpegs) = the histopathology micrographs A (thrombosis within
glomerulus), B (dense interstitial lymphocytic infiltrate), C
(arteriosclerosis). All COPYRIGHTED — described in the visual/note, never
reproduced.
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
P = {p: norm(pages[p - 1]) for p in (139,)}

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

E += [
    ("Section heading + table headers", "Transplant rejection\nTYPE OF REJECTION\nONSET\nPATHOGENESIS\nFEATURES", 139),
    # hyperacute
    ("Hyperacute — onset", "Hyperacute\nWithin minutes", 139),
    ("Hyperacute — pathogenesis", "Pre-existing recipient antibodies\nreact to donor antigen (type II\nhypersensitivity reaction), activate\ncomplement", 139),
    ("Hyperacute — features (interleave)", "Widespread thrombosis of graft vessels\n(arrows within glomerulus A )\n→ ischemia and fibrinoid necrosis\nGraft must be removed", 139),
    # acute
    ("Acute — onset", "Acute\nWeeks to months", 139),
    ("Acute — pathogenesis (cellular + humoral, interleave)", "Cellular: CD8+ T cells and/or CD4+\nVasculitis of graft vessels with dense\nT cells activated against donor MHCs\ninterstitial lymphocytic infiltrate B\n(type IV hypersensitivity reaction)\nPrevent/reverse with\nHumoral: similar to hyperacute, except\nimmunosuppressants\nantibodies develop after transplant\n(associated with C4d deposition)", 139),
    # chronic
    ("Chronic — onset", "Chronic\nMonths to years", 139),
    ("Chronic — pathogenesis (interleave)", "CD4+ T cells respond to recipient\nDominated by arteriosclerosis C\nAPCs presenting donor peptides,\nRecipient T cells react and secrete\nincluding allogeneic MHC\ncytokines → proliferation of vascular\nBoth cellular and humoral components\nsmooth muscle, parenchymal\n(type II and IV hypersensitivity\natrophy, interstitial fibrosis\nreactions)", 139),
    ("Chronic — organ examples (with printed ▘ bullets)", "Organ-specific examples:\n▘ Chronic allograft nephropathy\n▘ Bronchiolitis obliterans\n▘ Accelerated atherosclerosis (heart)\n▘ Vanishing bile duct syndrome", 139),
    # GVHD
    ("GVHD — onset + pathogenesis", "Graft-versus-host\ndisease\nVaries\nGrafted immunocompetent\nT cells proliferate in the\nimmunocompromised host and reject\nhost cells with “foreign” proteins →\nsevere organ dysfunction\nHLA mismatches ↑ the risk for GVHD\nType IV hypersensitivity reaction", 139),
    ("GVHD — features (interleave)", "Maculopapular rash, jaundice,\ndiarrhea, hepatosplenomegaly\nUsually in bone marrow and liver\ntransplants (rich in lymphocytes)\nPotentially beneficial in bone marrow\ntransplant for leukemia (graft-versustumor effect)\nFor patients who are\nimmunocompromised, irradiate\nblood products prior to transfusion\nto prevent GVHD", 139),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 139 / book 117)")

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

SRC139 = {"part": 1, "pdfPages": [139], "bookPages": "117"}

manifest = {
    "topicId": "transplant-rejection",
    "title": "Transplant Rejection & Graft-Versus-Host Disease",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Immunosuppressants",
    "part": 1,
    "sourcePages": SRC139,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["rejection-timeline-map"],
    "mechanismIds": ["rejection-clock", "gvhd-direction-inversion"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the four-row table; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "clock-and-direction-model",
            "summary": "The rejection clock (minutes = the antibody pre-existed; weeks-months = the response is new and treatable; years = remodeling) and the direction axis (host-vs-graft for all three timeline stations; graft-vs-host for GVHD), plus the hypersensitivity mapping (II / IV / II+IV / IV-reversed), the described biopsy figures, and the crossmatching/graft-versus-tumor/irradiated-products bridges.",
            "origin": "outside-first-aid",
            "rationale": "The source lists the four rows without the clock-direction-therapy frame or the crossmatch/monitoring bridges; these integrations are KYP's design. Crossmatching, donor lymphocyte infusion, and organ-surveillance specifics are labeled extension.",
            "location": "core.keyIdea + both mechanism captions + callout + patterns + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: pdfimages on p139 shows THREE content rasters (282x255, 283x255, 283x255 cmyk jpegs) = the histopathology micrographs A (thrombosis within glomerulus — hyperacute), B (dense interstitial lymphocytic infiltrate — acute), C (arteriosclerosis — chronic). All COPYRIGHTED — described in the registry visual's bottom strip and the note's callout, never reproduced. One original KYP registry visual (rejection-timeline-map) renders the timeline, three rejection cards, the GVHD panel, and the two organizing axes (direction + hypersensitivity type). No FA mnemonic phrases printed on this page. Quoting note: acute/chronic/GVHD rows interleave across columns — quotes follow the physical line order. Boundary: pdf 140-141 (Immununosuppressants) = E40.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"transplant-rejection-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC139,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Immunosuppressants",
        "topicId": "transplant-rejection",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "transplant-rejection",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "PATHOLOGY_ILLUSTRATION", "Figure A — thrombosis within glomerulus (hyperacute rejection)",
            "A histopathology micrograph (labeled 'arrows within glomerulus A' on the printed page) showing widespread thrombosis of graft vessels in a glomerulus — the hyperacute-rejection picture of preformed antibody and complement lysing graft endothelium. 282x255 cmyk jpeg.",
            "ORIGINAL_KYP_ADAPTATION", "rejection-timeline-map", "described-in-text", "described in the visual's biopsy-figures card + note callout — never reproduced"),
        svi(2, "PATHOLOGY_ILLUSTRATION", "Figure B — dense interstitial lymphocytic infiltrate (acute rejection)",
            "A histopathology micrograph (labeled 'B' on the printed page) showing the dense interstitial lymphocytic infiltrate with vasculitis of graft vessels — the acute-cellular-rejection picture. 283x255 cmyk jpeg.",
            "ORIGINAL_KYP_ADAPTATION", "rejection-timeline-map", "described-in-text", "described in the visual's biopsy-figures card + note callout — never reproduced"),
        svi(3, "PATHOLOGY_ILLUSTRATION", "Figure C — graft arteriosclerosis (chronic rejection)",
            "A histopathology micrograph (labeled 'C' on the printed page) showing the arteriosclerosis that dominates chronic rejection — vascular smooth muscle proliferation with intimal thickening. 283x255 cmyk jpeg.",
            "ORIGINAL_KYP_ADAPTATION", "rejection-timeline-map", "described-in-text", "described in the visual's biopsy-figures card + note callout — never reproduced"),
        svi(4, "VISUAL_TABLE", "Transplant rejection — the four-row table",
            "The printed table (TYPE OF REJECTION / ONSET / PATHOGENESIS / FEATURES) with rows for Hyperacute, Acute, Chronic, and Graft-versus-host disease.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] — 'Transplant rejection — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "transplant-rejection",
        "textbookVisualCount": 4,
        "accountedFor": 4,
        "sourceReproductions": 0,
        "kypRedraws": 0,
        "kypOriginals": 4,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: three content rasters on p139 (the A/B/C histopathology micrographs) — COPYRIGHTED, described in text within the registry visual's biopsy-figures card and the note's callout (never reproduced; ORIGINAL_KYP_ADAPTATION described-in-text). The four-row table text is reproduced verbatim as the note's table block (figure-pointer tokens A/B/C preserved in the quotes and described in context).",
}

(ROOT / "content/usmle/manifests/transplant-rejection.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/transplant-rejection.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 21/24 -> 22/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "transplant-rejection":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: transplant-rejection -> complete, textbookVisuals rewritten (4 sv)")
        break
else:
    print("ERROR: transplant-rejection not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
