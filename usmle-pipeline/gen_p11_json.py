#!/usr/bin/env python3
"""P11 granulomatous-inflammation — manifest + inventory + flip
(Pathology 11/19). Census (pdfimages + VLM): pdf 235-236 (book
213-214). THREE copyrighted photographs: p235's A (an H&E micrograph
of a caseating granuloma — central amorphous pink acellular necrosis
with a black arrow, ringed by epithelioid cells and lymphocytes) and
p236's A and B (clinical photographs: A = a raised red/pink linear
hypertrophic scar confined to the original wound with a measuring
ruler; B = a large dark lobulated clawlike keloid extending beyond
the wound on an earlobe/neck area) — ALL described-in-text only,
NEVER reproduced (the M32 convention). The MECHANISM figure is
VECTOR LINE ART (APC, T cell, Th1 cell, activated macrophage, giant
cell, granuloma with IL-12, CD40L/CD40, TCR/MHC II, IFN-γ, TNF,
Lymphocyte, Fibroblast, Epithelioid cell labels) — redrawn as an
ORIGINAL KYP figure (the P2/P3 pure-vector convention). NO margin
notes or mnemonics on either page (VLM confirmed); the KYP memory
layer is original."""
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
L = {235: pages[234].split("\n"), 236: pages[235].split("\n")}
P = {235: norm(pages[234]), 236: norm(pages[235])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E11 = [
    ("Page identity — the section banner and header (book 213)", rng(235, 1, 8), [235]),
    ("The granuloma definition — a pattern of chronic inflammation; persistent T-cell response; wall off without eradicating → persistent inflammation → fibrosis, organ damage", rng(235, 10, 13), [235]),
    ("The HISTOLOGY block — epithelioid cells (activated macrophages, abundant pink cytoplasm), lymphocytes, multinucleated giant cells (fusion of several activated macrophages); the caseating (central necrosis A, infectious TB/fungal) vs noncaseating (no necrosis, noninfectious sarcoidosis/Crohn) fork", rng(235, 15, 22), [235]),
    ("The letter marker A (the caseating-granuloma photograph, described in text — copyrighted) + the printed page number", rng(235, 24, 26), [235]),
    ("The MECHANISM block — APC + IL-12 → Th1; Th1 IFN-γ → macrophage activation; macrophage ↑ TNF → epithelioid macrophages + giant cells; the anti-TNF rule (sequestering granulomas break down → disseminated disease; test latent TB first); the hypercalcemia rule (↑ 1α-hydroxylase in activated macrophages → ↑ vitamin D activity)", rng(235, 28, 36), [235]),
    ("The MECHANISM figure labels part 1 — the cascade headers and the cell labels (MeCHANISM, Lymphocyte, Fibroblast, Epithelioid cell, IL-12, TCR, Antigen, T cell)", rng(235, 38, 49), [235]),
    ("The MECHANISM figure labels part 2 — the interaction markers and cell names (CD40, IFN-g, MHC II, CD4, CD40L, APC, Th1 cell, TNF, Activated macrophage, Giant cell, Granuloma)", rng(235, 51, 70), [235]),
    ("The etiologies table part 1 — the Infectious column (Mycobacteria TB/leprosy, Bartonella henselae stellate necrotizing granulomas, Listeria granulomatosis infantiseptica, Treponema pallidum 3° syphilis, endemic mycoses, schistosomiasis, catalase-positive organisms in CGD)", rng(235, 76, 85), [235]),
    ("The etiologies table part 2 — the Noninfectious column (sarcoidosis, Crohn, 1° biliary cholangitis, de Quervain thyroiditis; GPA, EGPA, giant cell temporal arteritis, Takayasu; berylliosis, talcosis, hypersensitivity pneumonitis) + the timestamp footer", "\n".join([rng(235, 87, 95), rng(235, 97, 97)]), [235]),
    ("Page identity — the scar formation header (book 214)", rng(236, 1, 9), [236]),
    ("The scar formation rule — repair that cannot be accomplished by regeneration alone; nonregenerated cells replaced by connective tissue; 70%-80% of tensile strength at 3 months; excess TGF-β → hypertrophic and keloid scars", rng(236, 11, 14), [236]),
    ("The comparison table part 1 — headers (Hypertrophic scar A, Keloid scar B) + the COLLAGEN SYNTHESIS row (↑ type III > type I vs ↑↑↑ type I > type III) + the COLLAGEN ORGANIZATION row (Parallel vs Disorganized)", rng(236, 15, 29), [236]),
    ("The comparison table part 2 — the EXTENT row (confined to borders vs clawlike projections on earlobes, face, upper extremities) + the RECURRENCE row (infrequent vs frequent)", rng(236, 31, 43), [236]),
    ("The comparison table part 3 — the PREDISPOSITION row (none vs ↑ incidence in people with darker skin) + the A/B photograph markers (the hypertrophic and keloid clinical photographs, described in text — copyrighted) + the indd footer", rng(236, 45, 55), [236]),
    ("The timestamp footer (page identity, book 214)", rng(236, 57, 57), [236]),
]
for c, q, pgs in E11:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"granulomatous-inflammation: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m11 = {"topicId": "granulomatous-inflammation", "title": "Granulomatous Inflammation & Scar Types",
    "chapterId": "pathology", "chapterTitle": "Pathology",
    "subsection": "Pathology — Inflammation", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [235, 236], "bookPages": "213–214"},
    "sourceEvidence": kept, "visualIds": ["granuloma-scar-map"],
    "mechanismIds": ["granuloma-cascade", "scar-overbuild-fork"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the granuloma blocks, the etiologies table, and the scar comparison; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "four-frame-reading", "summary": "The four-frame rule (the fork, the cascade, the two rules, the columns) — KYP's synthesis of the granuloma page into one reading protocol — and the two-question scar rule (borders + collagen).",
         "origin": "outside-first-aid", "rationale": "The source prints the blocks sequentially without a unified protocol; the framing is KYP's design.",
         "location": "core.keyIdea + pivots + the visual's structure"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (NECROSIS NAMES THE INFECTION / IL-12 TO TH1 TO IFN-γ TO TNF / THE MORTAR AND THE ENZYME / INSIDE THE BORDERS BEYOND THE BORDERS) — no mnemonic prints on either page.",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints anywhere on book 213-214 (VLM census confirmed); the four codes are KYP's design.",
         "location": "mnemonics + the visual's rule panels"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: THREE copyrighted photographs (p235's A — the caseating-granuloma H&E; p236's A and B — the hypertrophic and keloid clinical photographs) described-in-text only, never reproduced (the M32 convention). The MECHANISM figure is vector line art, redrawn as an ORIGINAL KYP figure (the P2/P3 convention). Two-page topic. No margin mnemonics (VLM confirmed on both); the KYP memory layer is original.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pathology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pathology — Inflammation",
    "topicId": "granulomatous-inflammation", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"granulomatous-inflammation-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv11 = [
    sv(1, [235], "213", "VISUAL_TABLE", "The granuloma definition + histology + mechanism + rules (book 213)",
       "The wall-off definition, the HISTOLOGY block with the caseating/noncaseating fork, the MECHANISM cascade with the anti-TNF and hypercalcemia rules, and the eTIOLOGIeS table. Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "granuloma-scar-map", "the registry visual (the granuloma panel + the rules panel + the etiologies band) + blocks[1] and blocks[2] the table blocks carried verbatim"),
    sv(2, [235], "213", "SUMMARY_FIGURE", "The granuloma-formation mechanism figure (book 213)",
       "VECTOR LINE ART (pdfimages: only a small 87x49 sep raster for the photograph): APC → T cell → Th1 cell → Activated macrophage → Granuloma with IL-12, CD40L/CD40, TCR/MHC II, IFN-γ, TNF interaction labels and Lymphocyte, Fibroblast, Epithelioid cell, Giant cell cell labels.",
       "ORIGINAL_KYP_REDRAW", "granuloma-scar-map", "the registry visual (the mechanism cascade redrawn with original KYP glyphs) + blocks[1] the mechanism table"),
    sv(3, [235], "213", "HISTOLOGY", "Photograph A — the caseating granuloma (book 213)",
       "A small H&E micrograph (the 87x49 sep raster at 300 dpi), lettered A beside 'Caseating: associated with central necrosis A': central amorphous pink acellular necrosis with a black arrow, ringed by epithelioid cells and lymphocytes, beside the HISTOLOGY block. COPYRIGHTED — described in text, never reproduced.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's histology card + blocks[1] the histology row", "note-block"),
    sv(4, [236], "214", "VISUAL_TABLE", "The scar formation block + the hypertrophic-vs-keloid comparison (book 214)",
       "The 70%-80% tensile-strength rule, the excess TGF-β association, and the 5-row comparison table (COLLAGEN SYNTHESIS, COLLAGEN ORGANIZATION, EXTENT OF SCAR, RECURRENCE, PREDISPOSITION). Pure text.",
       "ORIGINAL_KYP_ADAPTATION", "granuloma-scar-map", "the registry visual (the scar band with both comparison columns) + blocks[3] the table block carried verbatim"),
    sv(5, [236], "214", "DERMATOLOGY_PHOTO", "Photographs A and B — the hypertrophic and keloid scars (book 214)",
       "TWO cmyk JPEG clinical photographs (~427x340 and ~428x340 at 150 dpi) beneath the comparison table: A = a raised red/pink linear hypertrophic scar confined to the original wound with a measuring ruler; B = a large dark lobulated clawlike keloid extending beyond the wound on an earlobe/neck area. BOTH COPYRIGHTED — described in text, never reproduced.",
       "ORIGINAL_KYP_ADAPTATION", None, "described-in-text in the registry visual's scar band + blocks[3] the photographs row", "note-block"),
]
(ROOT / "content/usmle/manifests/granulomatous-inflammation.json").write_text(json.dumps(m11, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/granulomatous-inflammation.json").write_text(
    json.dumps({"topicId": "granulomatous-inflammation", "chapterId": "pathology", "inventory": inv11,
                "coverageAudit": {"topicId": "granulomatous-inflammation", "textbookVisualCount": 5,
                    "accountedFor": 5, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 4,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The pages' text blocks (the granuloma definition/histology/mechanism/rules, the etiologies table, and the scar block with its comparison) are adapted as the registry visual and carried verbatim in the note's tables. The mechanism figure is pure vector line art — redrawn as an ORIGINAL KYP REDRAW (the P2/P3 convention). The THREE photographs (the caseating-granuloma H&E; the hypertrophic and keloid clinical photographs) are COPYRIGHTED — described in text, never reproduced (the M32 convention). No margin mnemonics exist on either page; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pathology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "granulomatous-inflammation":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv11))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pathology {done}/19{' — CHAPTER COMPLETE' if done==19 else ''}")
print("P11 manifest + inventory + flip done")
