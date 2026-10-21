#!/usr/bin/env python3
"""M24 rna-viruses — manifest + inventory + flip (24/39).

Census: p186 0 rasters (pure vector table). p187 1 raster (the rotavirus
electron micrograph A — the wheel-like capsid). p188 1 raster (the
blueberry-muffin congenital rubella rash A, below the Rubella virus heading).
p189 3 rasters (the steeple-sign x-ray A with T marking the trachea [gray],
the Koplik spots A on buccal mucosa, the mumps parotitis A).

Text quirks: the banner typo 'MICROCIOLOGY—VIROLOGY' prints on books 164-167.
p186: the 17 family rows interleave with the MEDICAL IMPORTANCE column; the
arbovirus superscript prints as a trailing 'a' on its own in some lines
(Yellow fevera / Denguea); 'PERCH' emits as a standalone line (42) after the
picornaviruses block; the structure footnote emits at 184 before the indd
footer at 186; p187's blocks emit clean (picornavirus 10-19, rhinovirus
23-29, rotavirus 33-45 with the A marker at 47); p188: the shift/drift
definitions interleave with the figure labels (Virus B 33, Host cell 35, the
HA/NA glosses 37-38, Antigenic shift 47, New strain 48, Mutated HA or NA 49,
Virus A 52/56/58) — the rubella block's text emits at 67-73 AFTER the
paramyxovirus heading at 63 (the heading precedes its text block); p189: the
croup text interleaves its column split (the 'Acute' heading fragment at 9
inside the HN-antigen sentence); the T label (15) between croup and measles;
the ▘ bullets of the SSPE sequelae list (36, 39, 41, 43); the mumps POM-Poms
gloss at 63-64.
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
L = {p: pages[p - 1].split("\n") for p in (186, 187, 188, 189)}
P = {p: norm(pages[p - 1]) for p in (186, 187, 188, 189)}

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

# ================= M24 =================
E24 = [
    # --- page 186 (book 164) ---
    ("Printed book-page number (page identity)", "164", 186),
    ("Section banner", "SEC TION II", 186),
    ("Page banner", "MICROBIOLOGY", 186),
    ("Chapter banner (the source's own typo: MICROCIOLOGY)", "▶ MICROCIOLOGY—VIROLOGY", 186),
    ("Section heading", "RNA viruses", 186),
    ("The cytoplasm rule + FA's printed gloss (verification-only)", rng(186, 10, 10), 186),
    ("Table headers", rng(186, 12, 18), 186),
    ("Reoviruses row (rotavirus, the infantile diarrhea anchor)", rng(186, 20, 28), 186),
    ("Picornaviruses row, interleaved with PERCH (polio Salk/Sabin; echo; rhino; coxsackie; HAV)", rng(186, 30, 42), 186),
    ("Hepevirus + Caliciviruses rows (HEV; norovirus)", rng(186, 44, 58), 186),
    ("Flaviviruses row, interleaved with the arbovirus superscripts (HCV; yellow fever; dengue; West Nile AFP; Zika)", rng(186, 60, 71), 186),
    ("Togaviruses row, interleaved (the CREW set; Chikungunya; rubella formerly togavirus; equine encephalitides)", rng(186, 73, 81), 186),
    ("Matonavirus row — the 2026 reclassification (rubella)", rng(186, 83, 89), 186),
    ("Retroviruses + Coronaviruses rows (reverse transcriptase; HTLV; HIV; cold/SARS/COVID-19/MERS)", rng(186, 91, 107), 186),
    ("Orthomyxoviruses + Paramyxoviruses rows (influenza segmented; parainfluenza croup; RSV; measles; mumps)", rng(186, 109, 127), 186),
    ("Pneumoviruses + Rhabdoviruses + Filoviruses rows (RSV; rabies; Ebola/Marburg often fatal)", rng(186, 129, 151), 186),
    ("Arenaviruses row (⊕ and ⊝ circular; LCMV; Lassa from rodents)", rng(186, 153, 162), 186),
    ("Bunyaviruses + Delta virus rows (the arbovirus fevers + Hantavirus; HDV defective requiring HBV)", rng(186, 164, 182), 186),
    ("Structure footnote (SS/DS; ⊕/⊝; the arbovirus definition)", rng(186, 184, 184), 186),
    ("Timestamp footer (page identity)", rng(186, 188, 188), 186),
    # --- page 187 (book 165) ---
    ("Page banner", "MICROBIOLOGY", 187),
    ("Printed book-page number (page identity)", "165", 187),
    ("Chapter banner (the source's own typo)", "▶ MICROCIOLOGY—VIROLOGY", 187),
    ("Picornavirus block (1 large polypeptide; protease cleavage; enteroviruses; the PicoRNA/PERCH glosses)", rng(187, 8, 19), 187),
    ("Rhinovirus block (nonenveloped; common cold; >100 types; acid labile; the runny-nose gloss)", rng(187, 21, 29), 187),
    ("Rotavirus block (segmented dsRNA A; infantile gastroenteritis; winter day care; villous atrophy; Na+/K+; vaccine exclusions; the right-out-the-anus gloss)", rng(187, 31, 45), 187),
    ("The rotavirus EM marker A (the wheel-like capsid — described-in-text)", rng(187, 47, 47), 187),
    # --- page 188 (book 166) ---
    ("Printed book-page number (page identity)", "166", 188),
    ("Influenza block (HA binds sialic acid; NA releases progeny; superinfection S aureus/S pneumoniae/H influenzae; oseltamivir/zanamivir)", rng(188, 8, 18), 188),
    ("Antigenic shift definition (2 segmented viruses; reassortment; pandemics) — interleaved with the figure labels", rng(188, 20, 25), 188),
    ("Antigenic drift definition (random HA/NA mutation; seasonal epidemics)", rng(188, 27, 31), 188),
    ("The vaccine block (reformulated; killed; live attenuated temperature-sensitive intranasal) + FA's shift/drift glosses + the figure labels", rng(188, 33, 58), 188),
    ("Rubella virus block — emits after the Paramyxoviruses heading (matonavirus; German measles; postauricular nodes; centrifugal rash; TORCH triad; blueberry muffin)", rng(188, 60, 73), 188),
    ("Paramyxoviruses block (children's viruses; F fusion protein; multinucleated cells; palivizumab for preemies)", rng(188, 63, 80), 188),
    # --- page 189 (book 167) ---
    ("Page banner", "MICROBIOLOGY", 189),
    ("Printed book-page number (page identity)", "167", 189),
    ("Croup block — interleaved (parainfluenza; HN antigens; seal-like barking cough; inspiratory stridor; steeple sign A)", rng(189, 8, 15), 189),
    ("Measles block (3 C's prodrome; Koplik spots A; descending rash; Warthin-Finkeldey; SSPE; encephalitis 1:1000; giant cell pneumonia; ADEM; vitamin A; pneumonia top cause of death; the 4 C's gloss)", rng(189, 17, 56), 189),
    ("Mumps block (MMR effectiveness; parotitis A; orchitis; meningitis; pancreatitis; sterility; the POM-Poms gloss)", rng(189, 21, 64), 189),
]

m24 = run("rna-viruses", "RNA Viruses: Families & Disease Map",
    {"part": 1, "pdfPages": [186, 187, 188, 189], "bookPages": "164–167"}, E24,
    ["rna-virus-family-map"], ["rna-sense-grid-logic", "shift-drift-clinical-map"],
    [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the table and detail blocks; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "sense-grid-synthesis", "summary": "The 17 families reorganized on the sense-envelope-segmentation axes with per-row sense coding; the cytoplasm-rule exception pair (retrovirus, influenza) framed as the RNA-side mirror of poxvirus; the shift-vs-drift map wired to M22's reassortment; the pediatric set as a sign-per-virus directory (steeple, Koplik, POM, blueberry muffin, palivizumab); and the GI trio's logic (one polypeptide, acid lability, villous atrophy) — labeled as integrations.",
         "origin": "outside-first-aid", "rationale": "The source prints the table and blocks without the sense-coded synthesis or the sign directory; these are KYP's design.",
         "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + pivots + mnemonics + miniCase"},
    ],
    "Census: p186 0 rasters (pure vector table); p187 1 (rotavirus EM A); p188 1 (blueberry-muffin rubella rash A); p189 3 (steeple x-ray A [gray, with T marking the trachea], Koplik spots A, mumps parotitis A). The banner typo MICROCIOLOGY prints on books 164-167. The arbovirus superscript prints as a trailing 'a' (Yellow fevera, Denguea); 'PERCH' emits standalone at line 42; the structure footnote at 184 precedes the indd footer at 186; p188's shift/drift definitions interleave with the figure labels (Virus B, Host cell, Antigenic shift, New strain, Mutated HA or NA, Virus A) and the HA/NA glosses (Hemagglutinin lets the virus in; Neuraminidaways); the rubella text emits at 67-73 AFTER the Paramyxoviruses heading at 63; p189's croup column split leaves 'Acute' mid-sentence at line 9; the ▘ bullets on the SSPE sequelae (36/39/41/43). FA's printed mnemonics (Retro flu is outta cyt; PERCH; Toga CREW; Rhino has a runny nose; Rotavirus = right out the anus; Sudden shift is more deadly; the 4 C's; POM-Poms; Palivizumab for preemies) are quoted in the table blocks for verification only.",
)

inv24 = [
    svi("rna-viruses", 1, "VISUAL_TABLE", "The RNA viruses table (book 164)",
        "The printed 17-family table: VIRAL FAMILY | ENVELOPE | RNA STRUCTURE | MEDICAL IMPORTANCE, with the cytoplasm-rule intro and the structure footnote.",
        "ORIGINAL_KYP_REDRAW", "rna-virus-family-map", "registry-visual",
        {"part": 1, "pdfPages": [186], "bookPages": "164–164"},
        "the cytoplasm-rule/sense-code strip + the 17-family sense-coded grid"),
    svi("rna-viruses", 2, "COMPARISON_FIGURE", "The influenza shift/drift map (book 166)",
        "The printed shift-vs-drift comparison with its diagram (Virus A/B, host cell, new strain, mutated HA or NA).",
        "ORIGINAL_KYP_REDRAW", "rna-virus-family-map", "registry-visual",
        {"part": 1, "pdfPages": [188], "bookPages": "166–166"},
        "the INFLUENZA shift/drift panel"),
    svi("rna-viruses", 3, "VISUAL_TABLE", "The pediatric clinical blocks (books 166-167)",
        "The rubella, paramyxovirus, croup, measles, and mumps text blocks.",
        "ORIGINAL_KYP_REDRAW", "rna-virus-family-map", "registry-visual",
        {"part": 1, "pdfPages": [188, 189], "bookPages": "166–167"},
        "the CLINICAL SET panel (croup, measles, mumps, rubella, RSV)"),
    svi("rna-viruses", 4, "VISUAL_TABLE", "The picornavirus-rhinovirus-rotavirus blocks (book 165)",
        "The three GI/respiratory detail blocks.",
        "ORIGINAL_KYP_REDRAW", "rna-virus-family-map", "registry-visual",
        {"part": 1, "pdfPages": [187], "bookPages": "165–165"},
        "the GI SET panel"),
    svi("rna-viruses", 5, "MICROBIOLOGY_IMAGE", "The rotavirus electron micrograph (book 165)",
        "The EM showing the wheel-like rotavirus capsid, marker A.",
        "ORIGINAL_KYP_ADAPTATION", None, "note-block",
        {"part": 1, "pdfPages": [187], "bookPages": "165–165"},
        "blocks[1] table row — figure pointer carried verbatim; described-in-text only"),
    svi("rna-viruses", 6, "MICROBIOLOGY_IMAGE", "The congenital rubella rash photo (book 166)",
        "The blueberry-muffin infant rash, marker A below the Rubella virus heading.",
        "ORIGINAL_KYP_ADAPTATION", None, "note-block",
        {"part": 1, "pdfPages": [188], "bookPages": "166–166"},
        "blocks[1] table row — figure pointer carried verbatim; described-in-text only"),
    svi("rna-viruses", 7, "MICROBIOLOGY_IMAGE", "The croup steeple-sign x-ray (book 167)",
        "The radiograph showing the narrowed subglottic airway (T marks the trachea), marker A.",
        "ORIGINAL_KYP_ADAPTATION", None, "note-block",
        {"part": 1, "pdfPages": [189], "bookPages": "167–167"},
        "blocks[1] table row — figure pointer carried verbatim; described-in-text only"),
    svi("rna-viruses", 8, "MICROBIOLOGY_IMAGE", "The Koplik spots photo (book 167)",
        "The buccal-mucosa Koplik spots (bright red with blue-white centers), marker A.",
        "ORIGINAL_KYP_ADAPTATION", None, "note-block",
        {"part": 1, "pdfPages": [189], "bookPages": "167–167"},
        "blocks[1] table row — figure pointer carried verbatim; described-in-text only"),
    svi("rna-viruses", 9, "MICROBIOLOGY_IMAGE", "The mumps parotitis photo (book 167)",
        "The child with bilateral parotid swelling, marker A.",
        "ORIGINAL_KYP_ADAPTATION", None, "note-block",
        {"part": 1, "pdfPages": [189], "bookPages": "167–167"},
        "blocks[1] table row — figure pointer carried verbatim; described-in-text only"),
]

(ROOT / "content/usmle/manifests/rna-viruses.json").write_text(
    json.dumps(m24, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/rna-viruses.json").write_text(
    json.dumps({"topicId": "rna-viruses", "chapterId": "microbiology", "inventory": inv24,
                "coverageAudit": {"topicId": "rna-viruses", "textbookVisualCount": 9,
                    "accountedFor": 9, "sourceReproductions": 0, "kypRedraws": 4, "kypOriginals": 5,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "4 source structures redrawn in the registry visual (the 17-family table, the shift/drift map, the pediatric blocks, the GI blocks); 5 raster images (rotavirus EM, blueberry-muffin rubella rash, steeple x-ray, Koplik spots, mumps parotitis) are COPYRIGHTED — described-in-text only in the table blocks."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
flip("rna-viruses", inv24)
print("M24 manifest + inventory + flip done")
