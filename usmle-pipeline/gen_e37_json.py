#!/usr/bin/env python3
"""E37 t-cell-phagocyte-immunodeficiencies — manifest + visual inventory + chapter flip.

Immunology topic 20/24 (Immune Responses banner). Evidence pinned on
pdf 136-137 / book 114-115 (Immunodeficiencies: T-cell disorders [p136 lower
block], B- and T-cell disorders + Phagocyte dysfunction [p137]).

Census: p137 carries TWO content rasters (188x123 + 150x133 cmyk jpegs — the
telangiectasia clinical photograph [A] and the giant-granules blood smear
[B]). Both are COPYRIGHTED and are described in the visual/note, never
reproduced. p136's remaining content is pure vector.

Mnemonic boundary (E22+ rule): the page prints FA mnemonics (CATCH-22, the
Job ABCDEF list with 'Learn the ABCDEF's to get a Job STAT!', WATER for
Wiskott-Aldrich, PLAIN for Chédiak-Higashi, 'granny's cats keep her
positive' for CGD's catalase organisms) — quoted in manifest evidence for
VERIFICATION ONLY, never reproduced user-facing; KYP originals replace them.

Quoting note (E34/E36 lesson): the p136-137 table columns interleave in the
text layer — all quotes follow the PHYSICAL line order exactly as extracted.
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
P = {p: norm(pages[p - 1]) for p in (136, 137)}

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

# --- p136: T-cell disorders (physical interleave order) ---
E += [
    ("Zone heading", "T-cell disorders", 136),
    ("DiGeorge — disease label", "Thymic aplasia", 136),
    ("DiGeorge — defect (22q11, pouches)", "22q11 microdeletion; failure\nto develop 3rd and 4th\npharyngeal pouches →\nabsent thymus and parathyroids", 136),
    ("DiGeorge — syndrome names", "DiGeorge syndrome—thymic,\nparathyroid, cardiac defects\nVelocardiofacial syndrome—\npalate, facial, cardiac defects", 136),
    ("DiGeorge — CATCH-22 presentation (FA mnemonic quoted for verification only)", "CATCH-22: Cardiac defects\n(conotruncal abnormalities\n[eg, tetralogy of Fallot, truncus\narteriosus]), Abnormal facies,\nThymic hypoplasia → T-cell\ndeficiency (recurrent viral/\nfungal infections), Cleft\npalate, Hypocalcemia 2° to\nparathyroid aplasia → tetany", 136),
    ("DiGeorge — findings", "↓ T cells, ↓ PTH, ↓ Ca2+\nThymic shadow absent on\nCXR", 136),
    ("IL-12R deficiency — defect + presentation + findings + MSMD (physical interleave)", "↓ Th1 response; autosomal\nrecessive\nDisseminated mycobacterial\n↓ IFN-γ\nand fungal infections; may\nMost common cause of\npresent after administration of\nMendelian susceptibility\nBCG vaccine\nto mycobacterial diseases\n(MSMD)", 136),
    ("Job syndrome — defect", "Deficiency of Th17 cells due to\nSTAT3 mutation → impaired\nrecruitment of neutrophils to\nsites of infection", 136),
    ("Job syndrome — ABCDEF presentation (FA mnemonic quoted for verification only)", "Cold (noninflamed)\nstaphylococcal Abscesses,\nretained Baby teeth, Coarse\nfacies, Dermatologic problems\n(eczema), ↑ IgE, bone\nFractures from minor trauma", 136),
    ("Job syndrome — findings + FA tag (verification only)", "↑ IgE\n↑ eosinophils\nLearn the ABCDEF’s to get a\nJob STAT!", 136),
    ("Chronic mucocutaneous candidiasis — defect (interleave)", "T-cell dysfunction\nImpaired cell-mediated\nimmunity against Candida sp\nClassic form caused by defects\nin AIRE", 136),
    ("Chronic mucocutaneous candidiasis — presentation + findings (physical interleave)", "Persistent noninvasive Candida Absent in vitro T-cell\nalbicans infections of skin and\nproliferation in response to\nmucous membranes\nCandida antigens\nAbsent cutaneous reaction to\nCandida antigens", 136),
]

# --- p137: B- and T-cell disorders (physical interleave order) ---
E += [
    ("Continued heading + table headers", "Immunodeficiencies (continued)\nDISEASE\nDEFECT\nPRESENTATION\nFINDINGS", 137),
    ("Zone heading", "B- and T-cell disorders", 137),
    ("SCID — genotypes", "Several types including\ndefective IL-2R gamma\nchain (most common,\nX-linked recessive); adenosine\ndeaminase deficiency\n(autosomal recessive);\nRAG mutation → VDJ\nrecombination defect", 137),
    ("SCID — presentation (interleave)", "Failure to thrive, chronic\ndiarrhea, thrush\nRecurrent viral, bacterial,\nfungal, and protozoal\ninfections", 137),
    ("SCID — findings (interleave)", "↓ T-cell receptor excision\ncircles (TRECs)\nPart of newborn screening for\nSCID\nAbsence of thymic shadow\n(CXR), germinal centers\n(lymph node biopsy), and\nT cells (flow cytometry)", 137),
    ("Ataxia-telangiectasia — defect", "Defects in ATM gene → failure\nto detect DNA damage\n→ failure to halt progression\nof cell cycle → mutations\naccumulate; autosomal\nrecessive", 137),
    ("Ataxia-telangiectasia — triad + radiation (interleave)", "Triad: cerebellar defects\n(Ataxia), spider Angiomas\n(ocular and facial\ntelangiectasias A ), IgA\ndeficiency\n↑↑ sensitivity to radiation (limit\nx-ray exposure)", 137),
    ("Ataxia-telangiectasia — findings", "↑ AFP, IgM\n↓ IgA, IgG, and IgE\nLymphopenia, cerebellar\natrophy\n↑ risk of lymphoma and\nleukemia", 137),
    ("Hyper-IgM — defect", "Most commonly due to\ndefective CD40L on Th cells\n→ class switching defect;\nX-linked recessive", 137),
    ("Hyper-IgM — presentation", "Severe pyogenic infections\nearly in life; opportunistic\ninfection with Pneumocystis,\nCryptosporidium, CMV", 137),
    ("Hyper-IgM — findings", "Normal or ↑ IgM\n↓↓ IgG, IgA, IgE\nFailure to make germinal\ncenters", 137),
    ("Wiskott-Aldrich — defect (interleave with WATER mnemonic, verification only)", "WAS mutation; leukocytes and\nWATER: Wiskott-Aldrich:\nplatelets unable to reorganize\nThrombocytopenia, Eczema,\nactin cytoskeleton → defective\nRecurrent (pyogenic) infections\nantigen presentation; X-linked\n↑ risk of autoimmune disease\nrecessive\nand malignancy", 137),
    ("Wiskott-Aldrich — findings", "↓ to normal IgG, IgM\n↑ IgE, IgA\nFewer and smaller platelets", 137),
]

# --- p137: phagocyte dysfunction (physical interleave order) ---
E += [
    ("Zone heading", "Phagocyte dysfunction", 137),
    ("LAD-1 — defect", "Autosomal recessive defect\nin LFA-1 integrin (CD18)\nprotein on phagocytes leads\nto impaired migration and\nchemotaxis by C5a, IL-8, and\nleukotriene B4", 137),
    ("LAD-1 — presentation", "Late separation (>30 days) of\numbilical cord, absent pus,\ndysfunctional neutrophils\n→ recurrent skin and\nmucosal bacterial infections", 137),
    ("LAD-1 — findings", "↑ neutrophils in blood\nAbsence of neutrophils at\ninfection sites → impaired\nwound healing", 137),
    ("Chédiak-Higashi — defect", "Defect in lysosomal trafficking\nregulator gene (LYST)\nMicrotubule dysfunction in\nphagosome-lysosome fusion;\nautosomal recessive", 137),
    ("Chédiak-Higashi — PLAIN presentation (FA mnemonic quoted for verification only)", "PLAIN: Progressive\nneurodegeneration,\nLymphohistiocytosis,\nAlbinism (partial), recurrent\npyogenic Infections,\nperipheral Neuropathy", 137),
    ("Chédiak-Higashi — findings", "Giant granules ( B , arrows) in\ngranulocytes and platelets\nPancytopenia\nMild coagulation defects", 137),
    ("CGD — defect (interleave with FA tag, verification only)", "Defect of NADPH oxidase\n→ ↓ reactive oxygen\nspecies (eg, superoxide)\nand ↓ respiratory burst in\nneutrophils; X-linked form\nmost common", 137),
    ("CGD — presentation (interleave)", "↑ susceptibility to catalase ⊕\norganisms (granny’s cats keep\nher positive)\nRecurrent infections and\ngranulomas", 137),
    ("CGD — findings", "Abnormal dihydrorhodamine\n(flow cytometry) test (↓ green\nfluorescence)\nNitroblue tetrazolium dye\nreduction test (obsolete) fails\nto turn blue", 137),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 136-137 / book 114-115)")

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

SRC = {"part": 1, "pdfPages": [136, 137], "bookPages": "114–115"}

manifest = {
    "topicId": "t-cell-phagocyte-immunodeficiencies",
    "title": "T-Cell, Combined & Phagocyte Immunodeficiencies",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Immune Responses",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["immunodeficiency-spectrum-map"],
    "mechanismIds": ["deficiency-layer-map", "molecular-thread-map"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the table rows; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "three-zone-layer-triage-model",
            "summary": "The layer-triage model (opportunist pattern → T-cell zone; everything-recurrent → combined zone; delivery/fusion/burst signatures → phagocyte zone) plus the molecular-thread organization (the X-linked quartet IL-2Rγ/CD40L/WAS/oxidase; the cytoskeleton thread WAS-LAD; the DNA-sentinel thread ATM-AIRE; the signaling thread naming each missing lineage) and the management bridge (HSCT, prophylaxis, IFN-γ, live-vaccine avoidance).",
            "origin": "outside-first-aid",
            "rationale": "The source lists eleven diseases without the zone triage, the thread organization, or the management map; these integrations are KYP's design. Management specifics are labeled extension.",
            "location": "core.keyIdea + both mechanism captions + callout + patterns + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p137 carries TWO content rasters (188x123 + 150x133 cmyk jpegs = the telangiectasia clinical photograph [A] and the giant-granules blood smear [B]) — COPYRIGHTED, described in the visual and note text, never reproduced. p136's remaining block is pure vector. One original KYP registry visual (immunodeficiency-spectrum-map) renders the three zones as eleven compact cards plus the signpost-signature strip. MNEMONIC BOUNDARY (E22+ rule): FA's printed mnemonics (CATCH-22, Job's ABCDEF + 'get a Job STAT!', WATER, PLAIN, 'granny's cats') are quoted in manifest evidence for VERIFICATION ONLY — never in user-facing content; KYP originals replace them. Quoting note: the p136-137 table columns interleave — quotes follow physical line order. Boundary: the B-cell rows (Bruton, IgA deficiency, CVID) on p136 are owned by E36.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"t-cell-phagocyte-immunodeficiencies-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Immune Responses",
        "topicId": "t-cell-phagocyte-immunodeficiencies",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "t-cell-phagocyte-immunodeficiencies",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "VISUAL_TABLE", "Immunodeficiencies (continued) — the T-cell, combined, and phagocyte rows",
            "Rows of the printed table (DISEASE / DEFECT / PRESENTATION / FINDINGS): Thymic aplasia, IL-12 receptor deficiency, Autosomal dominant hyper-IgE (Job) syndrome, Chronic mucocutaneous candidiasis [T-cell disorders]; Severe combined immunodeficiency, Ataxia-telangiectasia, Hyper-IgM syndrome, Wiskott-Aldrich syndrome [B- and T-cell disorders]; Leukocyte adhesion deficiency (type 1), Chédiak-Higashi syndrome, Chronic granulomatous disease [Phagocyte dysfunction].",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] and blocks[2] — the two verbatim table blocks"),
        svi(2, "DERMATOLOGY_PHOTO", "Ocular/facial telangiectasias (figure A) — ataxia-telangiectasia",
            "A clinical photograph (labeled 'A' on the printed page) showing the ocular and facial spider angiomas (telangiectasias) of ataxia-telangiectasia. 188x123 cmyk jpeg.",
            "ORIGINAL_KYP_ADAPTATION", "immunodeficiency-spectrum-map", "described-in-text", "described in the spectrum-map card and note text — never reproduced"),
        svi(3, "HISTOLOGY", "Giant granules in granulocytes (figure B) — Chédiak-Higashi",
            "A peripheral blood smear photograph (labeled 'B, arrows' on the printed page) showing the giant granules in granulocytes of Chédiak-Higashi syndrome. 150x133 cmyk jpeg.",
            "ORIGINAL_KYP_ADAPTATION", "immunodeficiency-spectrum-map", "described-in-text", "described in the spectrum-map card and note text — never reproduced"),
    ],
    "coverageAudit": {
        "topicId": "t-cell-phagocyte-immunodeficiencies",
        "textbookVisualCount": 3,
        "accountedFor": 3,
        "sourceReproductions": 0,
        "kypRedraws": 0,
        "kypOriginals": 3,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: p137's two content rasters (telangiectasia photo A; giant-granules smear B) are COPYRIGHTED — described in text within the registry visual's cards and the note, never reproduced (ORIGINAL_KYP_ADAPTATION described-in-text). The eleven-disease table text is reproduced verbatim as the note's two table blocks. The registry visual (immunodeficiency-spectrum-map) is an ADDITIONAL original KYP teaching diagram consolidating all three zones. FA's printed mnemonics are not reproduced user-facing.",
}

(ROOT / "content/usmle/manifests/t-cell-phagocyte-immunodeficiencies.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/t-cell-phagocyte-immunodeficiencies.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 19/24 -> 20/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "t-cell-phagocyte-immunodeficiencies":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: t-cell-phagocyte-immunodeficiencies -> complete, textbookVisuals rewritten (3 sv)")
        break
else:
    print("ERROR: t-cell-phagocyte-immunodeficiencies not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
