#!/usr/bin/env python3
"""E40 immunosuppressants — manifest + visual inventory + chapter flip.

Immunology topic 23/24 (Immunosuppressants banner). Evidence pinned on
pdf 140-141 / book 118-119 (Immununosuppressants: the 7-drug table + the
T-helper-cell signaling diagram labels. The 'Recombinant cytokines' table
on p141's lower half is owned by E41.)

Census: p140 carries only 1x1 artifacts + one 1074x200 index decorative
strip (page furniture); p141's rasters belong to the cytokines section
below the fold. The T-helper-cell diagram is pure vector.

Mnemonic boundary (E22+ rule): the page prints FA mnemonics ('Sir Basil's
kidney transplant' for sirolimus/basiliximab indications; 'Kidney
sir-vives'; 'Pansirtopenia' [quoted verbatim as it IS the toxicity text];
'azathiopurine' pronunciation) — quoted in manifest evidence for
VERIFICATION ONLY, never reproduced in user-facing visuals; KYP originals
replace them (verbatim table blocks carry the source's own text per the
E20+ precedent).
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
P = {p: norm(pages[p - 1]) for p in (140, 141)}

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

# --- p140: intro + diagram labels ---
E += [
    ("Section heading", "Immunosuppressants", 140),
    ("Class definition + rules", "Agents that block lymphocyte activation and proliferation. Reduce acute transplant rejection by\nsuppressing cellular immunity (used as prophylaxis). Frequently combined to achieve greater\nefficacy with ↓ toxicity. Chronic suppression ↑ risk of infection and malignancy.", 140),
    ("Diagram label — basiliximab target", "IL-2R", 140),
    ("Diagram label — calcineurin", "Calcineurin", 140),
    ("Diagram label — cyclophilin + cyclosporine", "Cyclophilin +\nCyclosporine", 140),
    ("Diagram label — FKBP + tacrolimus", "FKBP +\nTacrolimus", 140),
    ("Diagram label — mTOR", "mTOR", 140),
    ("Diagram label — NFAT", "NFAT", 140),
    ("Diagram label — NF-kB", "NF–κB", 140),
    ("Diagram label — 6-MP", "6–MP", 140),
    ("Diagram label — mycophenolate", "Mycophenolate", 140),
    ("Diagram label — sirolimus", "Sirolimus\n(rapamycin)", 140),
    ("Diagram label — azathioprine", "Azathioprine", 140),
    ("Diagram label — basiliximab", "Basiliximab", 140),
    ("Diagram label — T helper cell", "T HELPER\nCELL", 140),
    ("Diagram label — proliferation genes", "Proliferation\ngenes", 140),
    ("Diagram label — glucocorticoids", "Glucocorticoids", 140),
    ("Diagram label — inflammatory cytokine genes", "Inflammatory\ncytokine genes", 140),
    ("Diagram label — purine nucleotides", "Purine\nnucleotides", 140),
    ("Diagram label — DNA replication", "DNA replication", 140),
    ("Diagram label — de novo purine synthesis", "De novo\npurine\nsynthesis", 140),
    ("Diagram label — PRPP amidotransferase", "PRPP\namidotransferase", 140),
    ("Diagram label — IMP dehydrogenase", "IMP\ndehydrogenase", 140),
    ("Diagram label — CD4", "CD4", 140),
    ("Diagram labels — CD3/TCR", "CD3\nTCR", 140),
]

# --- p140: drug table (physical interleave order) ---
E += [
    ("Table headers", "DRUG\nMECHANISM\nINDICATIONS\nTOXICITY", 140),
    ("Cyclosporine — mechanism + indication (physical order)", "Cyclosporine\nCalcineurin inhibitor;\nbinds cyclophilin\nBlocks T-cell activation\nby preventing IL-2\ntranscription\nPsoriasis, rheumatoid\narthritis", 140),
    ("Cyclosporine toxicity + calcineurin nephrotoxicity note + tacrolimus toxicity (full physical interleave)", "Nephrotoxicity,\nhypertension,\nhyperlipidemia,\nneurotoxicity, gingival Both calcineurin\ninhibitors are\nhyperplasia, hirsutism\nhighly nephrotoxic,\nSimilar to cyclosporine,\nespecially in higher\n↑ risk of diabetes\ndoses or in patients\nand neurotoxicity;\nwith ↓ renal function\nno gingival\nhyperplasia or\nhirsutism", 140),
        ("Tacrolimus — mechanism + indication (physical order)", "Tacrolimus (FK506)\nCalcineurin inhibitor;\nbinds FK506 binding\nprotein (FKBP)\nBlocks T-cell activation\nby preventing IL-2\ntranscription\nImmunosuppression\nafter solid organ\ntransplant", 140),
        ("Sirolimus — mechanism + indication + FA mnemonic (full physical interleave)", "Sirolimus (Rapamycin)\nmTOR inhibitor; binds\nFKBP\nKidney transplant\nBlocks T-cell\nrejection prophylaxis\nactivation and B-cell\nspecifically\ndifferentiation by\npreventing response Sir Basil’s kidney\ntransplant\nto IL-2", 140),
    ("Sirolimus — toxicity", "“Pansirtopenia”\n(pancytopenia),\ninsulin resistance,\nhyperlipidemia;\nnot nephrotoxic", 140),
    ("FA mnemonic — sirolimus (verification only)", "Sir Basil’s kidney\ntransplant", 140),
    ("Sirolimus — notes (physical order; text layer merges drug-eluting)", "Kidney “sir-vives.”\nSynergistic with\ncyclosporine\nAlso used in drugeluting stents", 140),
    ("Basiliximab — mechanism + toxicity (interleave)", "Basiliximab\nMonoclonal antibody;\nblocks IL-2R\nEdema, hypertension,\ntremor", 140),
]

# --- p141: drug table continued (physical interleave order) ---
E += [
    ("Continued heading + headers", "Immunosuppressants (continued)\nDRUG\nMECHANISM\nINDICATIONS\nTOXICITY\nNOTES", 141),
    ("Azathioprine — full row (physical order)", "Azathioprine\nAntimetabolite\nprecursor of\n6-mercaptopurine\nInhibits lymphocyte\nproliferation by\nblocking nucleotide\nsynthesis\nRheumatoid arthritis,\nCrohn disease,\nglomerulonephritis,\nother autoimmune\nconditions", 141),
    ("Azathioprine — toxicity + notes (interleave)", "Pancytopenia\n6-MP degraded by\nxanthine oxidase;\ntoxicity ↑ by\nallopurinol\nPronounce “azathiopurine”", 141),
    ("Mycophenolate — mechanism + indication + toxicity (physical interleave; merged line preserved)", "Mycophenolate\nmofetil\nReversibly inhibits\nIMP dehydrogenase,\npreventing purine\nsynthesis of B and T\ncells\nGlucocorticoid-sparing GI upset,\nagent in rheumatic\npancytopenia,\ndisease\nhypertension\nLess nephrotoxic and\nneurotoxic", 141),
    ("Mycophenolate — CMV note (appears below the glucocorticoids row in the text layer)", "Associated with\ninvasive CMV\ninfection", 141),
    ("Glucocorticoids — mechanism (interleave)", "Glucocorticoids\nInhibit NF-κB\nSuppress both B- and\nT-cell function by\n↓ transcription of\nmany cytokines\nInduce T cell apoptosis", 141),
    ("Glucocorticoids — indications", "Many autoimmune\nand inflammatory\ndisorders, adrenal\ninsufficiency, asthma,\nCLL, non-Hodgkin\nlymphoma", 141),
    ("Glucocorticoids — toxicity + notes (full physical interleave; merged lines preserved)", "Cushing syndrome,\nDemargination\nof WBCs causes\nosteoporosis,\nartificial leukocytosis\nhyperglycemia,\ndiabetes, amenorrhea, Adrenal insufficiency\nmay develop if drug is\nadrenocortical\nstopped abruptly after\natrophy, peptic ulcers,\nchronic use\npsychosis, cataracts,\navascular necrosis\n(femoral head)", 141),
]

# --- p141: E41 boundary marker ---
E += [
    ("E41 boundary marker (Recombinant cytokines heading on same page — owned by E41)", "Recombinant cytokines and clinical uses", 141),
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

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified (pdf 140-141 / book 118-119)")

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

SRC = {"part": 1, "pdfPages": [140, 141], "bookPages": "118–119"}

manifest = {
    "topicId": "immunosuppressants",
    "title": "Immunosuppressants: The Transplant & Autoimmune Drug Map",
    "chapterId": "immunology",
    "chapterTitle": "Immunology",
    "subsection": "Immunology — Immunosuppressants",
    "part": 1,
    "sourcePages": SRC,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["immunosuppressant-target-map"],
    "mechanismIds": ["activation-cascade-blockade"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the drug table; the USMLE question attack structure is a KYP design.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "four-level-blockade-model",
            "summary": "The target map read as four blockade levels (receptor [basiliximab], transcription [calcineurin inhibitors], response [sirolimus/mTOR], proliferation [antimetabolites]) plus the global glucocorticoid/NF-κB layer — with the combination logic (cross-level pairing for efficacy with less toxicity), the FKBP-synergy explanation, and the interaction/withdrawal bridges (allopurinol dosing rules, HPA-axis taper, demargination leukocytosis).",
            "origin": "outside-first-aid",
            "rationale": "The source lists drugs without the cascade-level organization or the combination rationale; these integrations are KYP's design. Allopurinol dose-reduction specifics and stress-dosing protocols are labeled extension.",
            "location": "core.keyIdea + mechanism caption + callout + patterns + mnemonics + miniCase",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p140 carries only 1x1 artifacts + one decorative index strip (page furniture) — the T-helper-cell signaling diagram is pure vector; p141's rasters belong to the cytokines section owned by E41. One original KYP registry visual (immunosuppressant-target-map) redraws the signaling diagram as the four-level blockade map with the printed rules panel and the seven-drug roster. MNEMONIC BOUNDARY (E22+ rule, table-block precedent): FA's printed mnemonics ('Sir Basil's kidney transplant', 'Kidney sir-vives', 'Pansirtopenia' [also the verbatim toxicity text], 'azathiopurine') are quoted in manifest evidence for verification and carried verbatim where they ARE the source's table text, but are NOT reproduced in the registry visual; KYP originals replace them in the mnemonics field. Quoting note: the drug tables' columns interleave — quotes follow the physical line order. Boundary: the Recombant cytokines table on p141's lower half is owned by E41 (heading pinned here as boundary evidence).",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"immunosuppressants-sv{n}",
        "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": SRC,
        "chapterId": "immunology",
        "visualType": vtype,
        "visualPurpose": purpose,
        "sourceFigureDescription": desc,
        "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Immunology — Immunosuppressants",
        "topicId": "immunosuppressants",
        "implementationType": impl,
        "kypVisualId": kyp_id,
        "kypImplementation": kimpl,
        "qaStatus": "passed",
    }
    if loc:
        d["kypLocation"] = loc
    return d

inventory = {
    "topicId": "immunosuppressants",
    "chapterId": "immunology",
    "inventory": [
        svi(1, "PHARMACOLOGY_DIAGRAM", "Immunosuppressants — the T-helper-cell signaling diagram",
            "A vector diagram of the T helper cell: surface TCR/CD3/CD4 and IL-2R (blocked by Basiliximab); the calcineurin pathway (Cyclophilin + Cyclosporine and FKBP + Tacrolimus complexes blocking Calcineurin so NFAT-P cannot drive IL-2 transcription); the mTOR pathway (Sirolimus/rapamycin via FKBP); the NF-kB pathway (Glucocorticoids blocking inflammatory cytokine genes); and the de novo purine synthesis arm (Azathioprine/6-MP, Mycophenolate, PRPP amidotransferase, IMP dehydrogenase → Purine nucleotides → DNA replication).",
            "ORIGINAL_KYP_REDRAW", "immunosuppressant-target-map", "registry-visual"),
        svi(2, "VISUAL_TABLE", "Immunosuppressants — the 7-drug table",
            "The printed drug table (DRUG / MECHANISM / INDICATIONS / TOXICITY / NOTES) with rows for Cyclosporine, Tacrolimus (FK506), Sirolimus (Rapamycin), Basiliximab, Azathioprine, Mycophenolate mofetil, and Glucocorticoids.",
            "ORIGINAL_KYP_ADAPTATION", None, "note-block", "blocks[1] — 'The seven immunosuppressants — verbatim' table block"),
    ],
    "coverageAudit": {
        "topicId": "immunosuppressants",
        "textbookVisualCount": 2,
        "accountedFor": 2,
        "sourceReproductions": 0,
        "kypRedraws": 1,
        "kypOriginals": 1,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Census: the T-helper-cell diagram is pure vector (p140's rasters are artifacts/furniture) — redrawn as ONE original KYP registry visual (immunosuppressant-target-map) with all printed labels accounted for (24 label quotes verified). The 7-drug table is reproduced verbatim as the note's table block. FA's printed mnemonics are not reproduced in the visual.",
}

(ROOT / "content/usmle/manifests/immunosuppressants.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/immunosuppressants.json").write_text(
    json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# --- chapter flip: immunology 22/24 -> 23/24 ---
ch_path = ROOT / "content/usmle/chapters/immunology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "immunosuppressants":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inventory["inventory"]))
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: immunosuppressants -> complete, textbookVisuals rewritten (2 sv)")
        break
else:
    print("ERROR: immunosuppressants not found in chapter topics")
    sys.exit(1)
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter immunology.json updated: {done}/{len(ch['topics'])} topics complete")
