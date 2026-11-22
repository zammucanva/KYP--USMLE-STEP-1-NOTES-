#!/usr/bin/env python3
"""E34 active-passive-immunity — manifest + visual inventory + chapter flip.

Immunology topic 17/24 (Immune Responses banner). Evidence pinned on
pdf 130-131 / book 108-109 (Passive vs active immunity table [p130] +
Vaccination table [p131] with all five vaccine types).

Census: p130 = zero images (pure vector). p131 = 3 separation-space rasters
(VLM-checked: decorative spotlight/hexagon callout shapes, NOT content) —
documented; no content artwork exists to redraw.

Mnemonic boundary (E22+ rule): the page prints FA mnemonics ('Attention
teachers! Please vaccinate small, Beautiful young infants with MMR
routinely!', 'A TRIP could Kill you') — quoted in manifest evidence for
VERIFICATION ONLY, never reproduced user-facing; KYP originals replace them.
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
P = {p: norm(pages[p - 1]) for p in (130, 131)}

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

# --- p130: passive vs active table (verbatim) ---
E += [
    ("Table heading", "Passive vs active immunity", 130),
    ("Row — means of acquisition", "MEANS OF ACQUISITION\nReceiving preformed antibodies\nExposure to exogenous antigens", 130),
    ("Row — onset", "ONSET\nRapid\nSlow", 130),
    ("Row — duration", "DURATION\nShort span of antibodies (half-life = 3 weeks)\nLong-lasting protection (memory)", 130),
    ("Row — examples", "EXAMPLES\nIgA in breast milk, maternal IgG crossing\nplacenta, antitoxin, humanized monoclonal\nantibody\nNatural infection, vaccines, toxoid", 130),
    ("Row — notes (IVIG + combined)", "NOTES\nIVIG and other immune globulin preparations\ncan be administered to provide temporary but\nspecific passive immunity to a target pathogen\nCombined passive and active immunizations\ncan be given for hepatitis B or rabies exposure", 130),
]

# --- p131: vaccination intro + live attenuated ---
E += [
    ("Vaccination heading + definition", "Vaccination\nInduces an active immune response (humoral and/or cellular) to specific pathogens.", 131),
    ("Table headers (top pair)", "VACCINE TYPE\nDESCRIPTION", 131),
    ("Table headers (bottom pair)", "PROS/CONS\nEXAMPLES", 131),
    ("Live attenuated — description + pros (physical interleave)", "Microorganism rendered\nPros: induces cellular and\nnonpathogenic but retains\nhumoral responses. Induces\ncapacity for transient growth\nstrong, often lifelong\nwithin inoculated host.\nimmunity.", 131),
    ("Live attenuated — cons + HIV CD4 exception (physical interleave)", "Certain live vaccines (MMR,\nCons: may revert to virulent\nvaricella) may be given to\nform. Contraindicated in\npeople living with HIV who\npregnancy and patients with\nhave a CD4+ cell count ≥200\nimmunodeficiency.\ncells/mm3 in consultation with\na specialist in infectious disease\nor immunology.", 131),
    ("Live attenuated — examples", "Adenovirus (nonattenuated,\ngiven to military recruits),\ntyphoid (Ty21a, oral),\npolio (Sabin), varicella\n(chickenpox), smallpox,\nBCG, yellow fever, influenza\n(intranasal), MMR, rotavirus.", 131),
    ("FA mnemonic — live vaccines (verification only)", "“Attention teachers! Please\nvaccinate small, Beautiful\nyoung infants with MMR\nroutinely!”", 131),
]

# --- p131: killed/inactivated ---
E += [
    ("Killed — description", "Pathogen is inactivated by heat\nor chemicals. Maintaining\nepitope structure on surface\nantigens is important for\nimmune response. Mainly\ninduces a humoral response.", 131),
    ("Killed — pros/cons", "Pros: safer than live vaccines.\nCons: weaker cell-mediated\nimmune response; mainly\ninduces a humoral response.\nBooster shots usually needed.", 131),
    ("Killed — examples", "Hepatitis A, Typhoid\n(Vi polysaccharide,\nintramuscular), Rabies,\nInfluenza (intramuscular),\nPolio (SalK).", 131),
    ("FA mnemonic — killed vaccines (verification only)", "A TRIP could Kill you.", 131),
]

# --- p131: subunit/conjugate ---
E += [
    ("Subunit — description", "All use specific antigens that\nbest stimulate the immune\nsystem.", 131),
    ("Subunit — pros/cons + examples (physical interleave)", "Pros: targets specific epitopes of HBV (antigen = HBsAg),\nantigen → ↓ adverse reactions.\nHPV, acellular pertussis\nCons: expensive; weaker\n(aP), N meningitidis (various\nimmune response.\nstrains), S pneumoniae\n(PPSV23 polysaccharide\nprimarily T-cell–independent\nresponse; a polysaccharide\nconjugated to a carrier\nprotein; produces a T-cell–\ndependent response). Hib,\nherpes zoster.", 131),
]

# --- p131: toxoid ---
E += [
    ("Toxoid — description", "Denatured bacterial toxin with\nan intact receptor binding\nsite. Stimulates immune\nsystem to make antibodies\nwithout potential for causing\ndisease.", 131),
    ("Toxoid — pros/cons", "Pros: protects against the\nbacterial toxins.\nCons: antitoxin levels decrease\nwith time, thus booster shots\nmay be needed.", 131),
    ("Toxoid — examples", "Clostridium tetani,\nCorynebacterium diphtheriae.", 131),
]

# --- p131: mRNA ---
E += [
    ("mRNA — description + pros (physical interleave)", "A lipid nanoparticle delivers\nPros: high efficacy; induces\nmRNA, causing cells to\ncellular and humoral\nsynthesize foreign protein (eg,\nimmunity. Safe in pregnancy.\nspike protein of SARS-CoV-2).", 131),
    ("mRNA — cons", "Cons: local and transient\nsystemic (fatigue, headache,\nmyalgia) reactions are\ncommon. Rare myocarditis,\npericarditis particularly in\nyoung males.", 131),
    ("mRNA — examples", "SARS-CoV-2, adult RSV\nlower respiratory tract\ndisease, CMV (congenital\nand immunocompromised),\nmelanoma (therapeutic\nvaccine).", 131),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 130-131 / book 108-109)")

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

SRC = {"part": 1, "pdfPages": [130, 131], "bookPages": "108–109"}

manifest = {
    "topicId": "active-passive-immunity",
    "title": "Active vs Passive Immunity & Vaccination",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Immune Responses",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["vaccine-type-spectrum"],
    "mechanismIds": ["vaccine-design-response-logic"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the two tables; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "replication-teacher-model",
            "summary": "The vaccine spectrum read as one trade (replication drives dual-arm response strength; live lessons last, dead lessons need review) with one exception (mRNA achieves live-like dual-arm immunity without organisms) and one engineering fix (conjugation = the T-cell face for naked polysaccharides); plus the timing logic of combined passive + active prophylaxis for exposures whose incubation outruns active onset.",
            "origin": "outside-first-aid",
            "rationale": "The source tables present the five designs as parallel entries without the trade-fix-exception frame or the timing rationale; these integrations are KYP's design. The pregnancy-influenza/Tdap recommendations and PCV13-schedule details in the pattern are labeled extension.",
            "location": "core.keyIdea + mechanism caption + callout + patterns + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p130 = ZERO images (pure vector). p131 = 3 separation-space rasters, VLM-verified as DECORATIVE spotlight/hexagon callout shapes (not content artwork) — documented, no content artwork exists to redraw. One original KYP registry visual (vaccine-type-spectrum) renders the active/passive strip, five vaccine-type cards, the conjugate-trick panel, and the combined-protocol card. MNEMONIC BOUNDARY (E22+ rule): FA's printed mnemonics ('Attention teachers!...', 'A TRIP could Kill you') are quoted in manifest evidence for VERIFICATION ONLY — never user-facing; KYP originals replace them. Boundary: the Cell surface proteins roster on p130 is owned by E33 cd-markers (its table header quote was pinned there as boundary evidence).",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"active-passive-immunity-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Immune Responses",
        "topicId": "active-passive-immunity",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "active-passive-immunity",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "VISUAL_TABLE", "Passive vs active immunity — the comparison table",
            "A two-column comparison table (MEANS OF ACQUISITION / ONSET / DURATION / EXAMPLES / NOTES) contrasting passive (receiving preformed antibodies; rapid; half-life 3 weeks; IgA in breast milk, maternal IgG, antitoxin, humanized monoclonal antibody; IVIG note; combined immunization note) with active (exogenous antigens; slow; memory; natural infection, vaccines, toxoid).",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] — 'Passive vs active immunity — verbatim' table block"),
        svi(2, "VISUAL_TABLE", "Vaccination — the five-type vaccine table",
            "A four-column table (VACCINE TYPE / DESCRIPTION / PROS-CONS / EXAMPLES) with five rows: live attenuated (with the HIV CD4 200 exception), killed or inactivated, subunit/recombinant/polysaccharide/conjugate (with the PPSV23 T-independent vs conjugate T-dependent distinction), toxoid, and mRNA.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[2] — 'The five vaccine types — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "active-passive-immunity",
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
    "notes": "Census: p130 pure vector; p131's 3 rasters are decorative spotlights (VLM-verified — page furniture, not content). Both source tables are reproduced verbatim as the note's two table blocks; the registry visual (vaccine-type-spectrum) is an ADDITIONAL original KYP teaching diagram with the five-type cards, conjugate-trick, and combined-protocol panels. FA's printed mnemonics are not reproduced user-facing.",
}

(ROOT / "content/usmle/manifests/active-passive-immunity.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/active-passive-immunity.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 16/24 -> 17/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "active-passive-immunity":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: active-passive-immunity -> complete, textbookVisuals rewritten (2 sv)")
        break
else:
    print("ERROR: active-passive-immunity not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
