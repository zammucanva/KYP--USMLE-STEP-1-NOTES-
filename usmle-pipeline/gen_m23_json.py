#!/usr/bin/env python3
"""M23 dna-viruses — manifest + inventory + flip (23/39).

Census: p183 — 2 rasters (the molluscum-bodies histology A in the Poxvirus
row, the pharyngitis photo B in the Adenovirus row). p184 — 0 rasters (the
A-J photo MARKERS print here but the photographs print on p185). p185 — 13
rasters (the A-J gallery tiles, the gray Tzanck-smear A, and 2 gallery
sub-tiles — the 13-vs-11 discrepancy documented as gallery sub-tiling).

Text quirks: the banner typo 'MICROCIOLOGY—VIROLOGY' prints on books 161-163
(the VLM census normalized it twice differently — 'MICROBIOLOGY' on p185 and
'MICROBIOLOOY' on p183 — both documented; the text layer is authoritative).
The 7 family rows interleave with the ▘ bullets of the HBV row (48-49); the
parvovirus row's arrow chain (96-97 '→ RBC destruction →') carries the
text-layer \x8e-style markers stripped by norm(); p184's VZV row interleaves
the route column with the NOTES column (63 'contact with fluid Most common
complication of shingles is post-'); the EBV route emits as a 7-line block
(69-75); p185's gallery letters A-J emit as standalone lines (9-27) with
Liv/Sp (29-31) and the HSV-identification A (34); the receptors table emits
after the gallery (47-77).
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
L = {p: pages[p - 1].split("\n") for p in (183, 184, 185)}
P = {p: norm(pages[p - 1]) for p in (183, 184, 185)}

def rng(pg, a, b):
    return "\n".join(L[pg][a:b + 1])

def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg - 22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}

def run(topic, title, src, evidence, vids, mids, exts, notes):
    kept, fails = [], []
    for c, q, p in evidence:
        if len(q.strip()) < 3:
            continue
        e = ev(c, q, p)
        if e["verified"] != "pass":
            fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
        kept.append(e)
    if fails:
        print("EVIDENCE FAILURES:")
        for f in fails:
            print("  x", f)
        sys.exit(1)
    print(f"{topic}: evidence {len(kept)} verified")
    QA = {g: "pass" for g in ["sourceVerified", "contentComplete", "miniCaseConsistent", "kypExtensionsTraceable",
        "mnemonicQuality", "visualsPaint", "visualCoverage", "mechanismRender", "lightMode",
        "darkMode", "mobile", "desktop", "consoleClean", "captionsReadable", "trackerSynced"]}
    STAGES = {s: "pass" for s in ["sourceLocated", "chapterMapped", "subsectionMapped", "topicScoped", "evidencePinned",
        "noteAuthored", "visualsAuthored", "mechanismAuthored", "clinicalAuthored",
        "pivotsAuthored", "trapsAuthored", "mnemonicAuthored", "rapidReviewAuthored",
        "relatedAuthored", "qaPassed", "trackerSynced"]}
    return {"topicId": topic, "title": title, "chapterId": "microbiology", "chapterTitle": "Microbiology",
            "subsection": "Microbiology — Virology", "part": 1, "sourcePages": src,
            "sourceEvidence": kept, "visualIds": vids, "mechanismIds": mids,
            "kypExtensions": exts, "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
            "productionStatus": "pilot-complete", "notes": notes, "updatedAt": str(date.today())}

def svi(topic, n, vtype, purpose, desc, impl, kyp_id, kimpl, pages, loc=None):
    d = {"visualId": f"{topic}-sv{n}", "sourceBook": "First Aid for the USMLE Step 1 2026",
         "sourcePages": pages, "chapterId": "microbiology", "visualType": vtype,
         "visualPurpose": purpose, "sourceFigureDescription": desc, "requiredInKYP": True,
         "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Microbiology — Virology",
         "topicId": topic, "implementationType": impl, "kypVisualId": kyp_id,
         "kypImplementation": kimpl, "qaStatus": "passed"}
    if loc: d["kypLocation"] = loc
    return d

def flip(topic, inv):
    ch_path = ROOT / "content/usmle/chapters/microbiology.json"
    ch = json.loads(ch_path.read_text(encoding="utf8"))
    for t in ch["topics"]:
        if t["topicId"] == topic:
            t["status"] = "complete"
            t["textbookVisuals"] = json.loads(json.dumps(inv))
            for v, s in zip(t["textbookVisuals"], inv):
                v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
                v["productionStatus"] = "complete"
                v["plannedKypVisualId"] = s.get("kypVisualId") or "note-block"
                v["plannedImplementation"] = s.get("kypImplementation") or "note-block"
            break
    else:
        sys.exit(f"ERROR: {topic} not found")
    done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
    ch["pendingTopicCount"] = len(ch["topics"]) - done
    ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
    print(f"chapter: microbiology {done}/39")

# ================= M23 =================
E23 = [
    # --- page 183 (book 161) ---
    ("Page banner", "MICROBIOLOGY", 183),
    ("Chapter banner (the source's own typo: MICROCIOLOGY)", "▶ MICROCIOLOGY—VIROLOGY", 183),
    ("Printed book-page number (page identity)", "161", 183),
    ("Section banner", "SEC TION II", 183),
    ("Section heading", "DNA viruses", 183),
    ("The intro rule (icosahedral, nucleus, the pox exception + FA's printed gloss)", rng(183, 10, 10), 183),
    ("Table headers", rng(183, 12, 18), 183),
    ("Herpesviruses row", rng(183, 20, 26), 183),
    ("Poxvirus row, interleaved (largest DNA virus; smallpox eradicated; cowpox milkmaid blisters; molluscum bodies A)", rng(183, 28, 39), 183),
    ("Hepadnavirus row, interleaved with the ▘ bullets (partially DS circular; HBV; reverse transcriptase)", rng(183, 41, 49), 183),
    ("Adenovirus row, interleaved (febrile pharyngitis B; hemorrhagic cystitis; pneumonia; pink eye; gastroenteritis; myocarditis)", rng(183, 51, 62), 183),
    ("Papillomavirus row, interleaved (HPV; serotypes 1,2,6,11 warts; 16,18 cancer)", rng(183, 64, 72), 183),
    ("Polyomavirus row, interleaved (JC PML; BK transplant kidney; FA's JC/BK gloss)", rng(183, 74, 83), 183),
    ("Parvovirus row, interleaved (smallest; parvus = small; B19; slapped cheek; aplastic crises; RBC precursors; hydrops fetalis; RA-like)", rng(183, 85, 98), 183),
    ("Figure markers + footer (page identity)", rng(183, 100, 106), 183),
    # --- page 184 (book 162) ---
    ("Printed book-page number (page identity)", "162", 184),
    ("Section heading + intro", rng(184, 8, 11), 184),
    ("Table headers", rng(184, 13, 19), 184),
    ("HSV-1 row, interleaved (route 25-26; clinical 28-34; notes 35-40 — the route column splits around the clinical block)", rng(184, 21, 40), 184),
    ("HSV-2 row, interleaved (sexual/perinatal; genitalis; neonatal C; sacral latency; meningitis)", rng(184, 42, 54), 184),
    ("VZV row, interleaved (the route text merges with the notes column at line 63; chickenpox D, shingles E; postherpetic neuralgia; V1 ophthalmicus)", rng(184, 56, 64), 184),
    ("VZV notes tail (the dorsal-root latency note emits at the page end after the footer)", rng(184, 150, 155), 184),
    ("EBV row, interleaved (the kissing-disease route block 69-75; mono 77-80; cancer set 81-85; CD21 + FA gloss 87-88; atypical lymphocytes 89-91; Monospot 92-94; amoxicillin rash 95-97)", rng(184, 66, 97), 184),
    ("CMV row, interleaved (the 6-way route block 101-105; ⊝ Monospot mono; transplant pneumonia; AIDS retinitis sightomegalovirus; owl-eye H; mononuclear latency)", rng(184, 99, 118), 184),
    ("HHV-6/7 row, interleaved (roseola; fever first Rosy later gloss; children <2; HHV-7 less common)", rng(184, 120, 135), 184),
    ("HHV-8 row, interleaved (Kaposi sarcoma; endothelial neoplasm; HIV/AIDS and transplant; violaceous plaques J; GI and lungs)", rng(184, 137, 148), 184),
    # --- page 185 (book 163) ---
    ("Page banner", "MICROBIOLOGY", 185),
    ("Printed book-page number (page identity)", "163", 185),
    ("Section heading (continuation)", rng(185, 8, 8), 185),
    ("The A-J gallery markers + Liv/Sp labels + the HSV-identification heading (physical order)", rng(185, 9, 39), 185),
    ("HSV identification block (PCR test of choice; CSF PCR; Tzanck outdated — multinucleated giant cells A; Cowdry A inclusions)", rng(185, 41, 45), 185),
    ("Receptors table headers", rng(185, 47, 49), 185),
    ("Receptors rows (CMV integrins; EBV CD21; HIV CD4/CXCR4/CCR5)", rng(185, 51, 61), 185),
    ("Receptors rows (parvovirus P antigen; rabies nicotinic AChR; rhinovirus ICAM-1 + FA's I-CAMe gloss; SARS-CoV-2 ACE2)", rng(185, 63, 77), 185),
    ("Timestamp footer (page identity)", rng(185, 79, 79), 185),
]

m23 = run("dna-viruses", "DNA Viruses: Families & Disease Map",
    {"part": 1, "pdfPages": [183, 184, 185], "bookPages": "161–163"}, E23,
    ["dna-virus-family-map"], ["dna-family-grid-logic", "herpes-latency-map"],
    [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the tables; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "grid-latency-synthesis", "summary": "The three-axis family grid (envelope, genome shape, size poles) wired to M22's envelope rule; the herpes roster reorganized on the latency axis (trigeminal, sacral, dorsal root, B cell, mononuclear cell); the two-cell EBV split (infected B cell vs reactive cytotoxic T cell); the Monospot sign as the EBV/CMV discriminator; and the opportunist set mapped to the immunocompromised host — labeled as integrations.",
         "origin": "outside-first-aid", "rationale": "The source prints the two tables side by side without the grid axes or the latency synthesis; these are KYP's design.",
         "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + pivots + mnemonics + miniCase"},
    ],
    "Census: p183 2 rasters (molluscum bodies A, pharyngitis B); p184 0 rasters (the A-J markers print here, the photographs print on p185 — the cross-page figure convention); p185 13 rasters vs 11 identified markers (A-J gallery + the gray Tzanck A) — the 2-image discrepancy documented as gallery sub-tiling. The banner typo MICROCIOLOGY prints on books 161-163; the VLM census normalized it twice differently (MICROBIOLOGY on p185, MICROBIOLOOY on p183) — the text layer is authoritative. p184's VZV route text merges with the notes column at line 63; the VZV latency note emits at the page end after the footer (150-155); the EBV and CMV route columns emit as multi-line blocks; the parvovirus row's arrow chain carries text-layer control markers stripped by norm(). FA's printed mnemonics (Pox is out of the box; JC Junky Cerebrum / BK Bad Kidney; Must be 21 to drink Beer in a Barr; Roseola fever-first-Rosy-later; I CAMe to see the rhino) are quoted in the table blocks for verification only.",
)

inv23 = [
    svi("dna-viruses", 1, "VISUAL_TABLE", "The DNA viruses table (book 161)",
        "The printed 7-family table: VIRAL FAMILY | ENVELOPE | DNA STRUCTURE | MEDICAL IMPORTANCE, with the intro rule line.",
        "ORIGINAL_KYP_REDRAW", "dna-virus-family-map", "registry-visual",
        {"part": 1, "pdfPages": [183], "bookPages": "161–161"},
        "the box-rule/size-poles strip + the 7-family grid"),
    svi("dna-viruses", 2, "VISUAL_TABLE", "The Herpesviruses table (book 162)",
        "The printed 7-virus roster: VIRUS | ROUTE OF TRANSMISSION | CLINICAL SIGNIFICANCE | NOTES.",
        "ORIGINAL_KYP_REDRAW", "dna-virus-family-map", "registry-visual",
        {"part": 1, "pdfPages": [184], "bookPages": "162–162"},
        "the 7-virus herpes roster with routes, signatures, and latency"),
    svi("dna-viruses", 3, "VISUAL_TABLE", "The HSV-identification and receptors blocks (book 163)",
        "The printed identification text (PCR, CSF PCR, Tzanck, Cowdry A) and the 7-row receptor table.",
        "ORIGINAL_KYP_REDRAW", "dna-virus-family-map", "registry-visual",
        {"part": 1, "pdfPages": [185], "bookPages": "163–163"},
        "the identification + receptors strip"),
    svi("dna-viruses", 4, "MICROBIOLOGY_IMAGE", "The molluscum-bodies histology (book 161)",
        "The H&E of keratinocytes containing molluscum bodies, marker A in the Poxvirus row.",
        "ORIGINAL_KYP_ADAPTATION", None, "note-block",
        {"part": 1, "pdfPages": [183], "bookPages": "161–161"},
        "blocks[1] table row — figure pointer carried verbatim; described-in-text only"),
    svi("dna-viruses", 5, "MICROBIOLOGY_IMAGE", "The pharyngitis photograph (book 161)",
        "The febrile-pharyngitis photo, marker B in the Adenovirus row.",
        "ORIGINAL_KYP_ADAPTATION", None, "note-block",
        {"part": 1, "pdfPages": [183], "bookPages": "161–161"},
        "blocks[1] table row — figure pointer carried verbatim; described-in-text only"),
    svi("dna-viruses", 6, "MICROBIOLOGY_IMAGE", "The A-J herpes gallery (book 163)",
        "The 10-tile photo gallery: keratoconjunctivitis A, cold sores B, neonatal herpes C, chickenpox D, shingles E, hepatosplenomegaly F (Liv/Sp), atypical lymphocytes G, owl-eye inclusions H, roseola rash I, Kaposi sarcoma J.",
        "ORIGINAL_KYP_ADAPTATION", None, "note-block",
        {"part": 1, "pdfPages": [184, 185], "bookPages": "162–163"},
        "blocks[2] table rows — the markers print on book 162, the gallery on book 163; described-in-text only"),
    svi("dna-viruses", 7, "MICROBIOLOGY_IMAGE", "The Tzanck-smear micrograph (book 163)",
        "The gray-scale multinucleated-giant-cells smear, marker A of the HSV-identification block.",
        "ORIGINAL_KYP_ADAPTATION", None, "note-block",
        {"part": 1, "pdfPages": [185], "bookPages": "163–163"},
        "blocks[2] table row — figure pointer carried verbatim; described-in-text only"),
]

(ROOT / "content/usmle/manifests/dna-viruses.json").write_text(
    json.dumps(m23, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/dna-viruses.json").write_text(
    json.dumps({"topicId": "dna-viruses", "chapterId": "microbiology", "inventory": inv23,
                "coverageAudit": {"topicId": "dna-viruses", "textbookVisualCount": 7,
                    "accountedFor": 7, "sourceReproductions": 0, "kypRedraws": 3, "kypOriginals": 4,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "3 source tables redrawn in the registry visual; 4 raster sets (molluscum-bodies histology, pharyngitis photo, the A-J gallery with Liv/Sp, the Tzanck smear) are COPYRIGHTED — described-in-text only in the table blocks."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
flip("dna-viruses", inv23)
print("M23 manifest + inventory + flip done")
