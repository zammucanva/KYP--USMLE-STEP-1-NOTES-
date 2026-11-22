#!/usr/bin/env python3
"""M36 antifungals — manifest + inventory + flip (36/39).
Census: p216's single raster is the FUNGAL CELL mechanisms-of-action diagram
(1087x488 cmyk + 14.9K smask, 150ppi ~ 7.2x3.3 in) — VLM census confirmed a
color-coded schematic (drug-target lines: terbinafine, azoles, flucytosine,
polyenes with a pore inset, echinocandins; a small Rx icon) — REDRAWN as the
registry visual, never reproduced; p217 is pure text (0 rasters). Text
quirks documented: the banner typo MICROCIOLOGY—ANTIMICROCIALS on both
pages; the text layer prints 'amphoterrible' (authoritative over the VLM
census's variant 'amphoterrrrible' reading — the M23 convention); '195'
prints mid-page on p217 (raw line 5); the azoles' drug roster prints as a
single unbroken line (raw 11). The source's own margin mnemonics ('tears
holes', 'shake and bake', 'amphoterrible', 'Swish and swallow', plus the
K+/Mg2+ and hydration/liposomal notes) are carried ONLY inside the verbatim
tables per the E38 precedent. Page ownership: book 195's tail (antiprotozoal
summary, anti-mite/louse block, chloroquine card) is carried verbatim in
M36's book-195 table; M37 (books 196-197) holds the dedicated cards."""
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
L = {p: pages[p-1].split("\n") for p in range(216, 218)}
P = {p: norm(pages[p-1]) for p in range(216, 218)}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg-22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E36 = [
    # ── p216 / book 194 — amphotericin B, nystatin, flucytosine ──
    ("Printed book-page number (page identity)", "194", 216),
    ("Page banner trio (the SEC TION split print)", rng(216, 1, 7), 216),
    ("Amphotericin B — MECHANISM + the source's own 'tears holes' margin note", rng(216, 14, 19), 216),
    ("Amphotericin B — CLINICAL USE (the systemic mycoses set; intrathecal coccidioidal)", rng(216, 21, 27), 216),
    ("Amphotericin B — the K+/Mg2+ supplementation margin note", rng(216, 29, 30), 216),
    ("Amphotericin B — ADVERSE EFFECTS (shake and bake; amphoterrible — text-layer authoritative)", rng(216, 32, 36), 216),
    ("Amphotericin B — the hydration/liposomal margin notes", rng(216, 38, 39), 216),
    ("Nystatin — MECHANISM + CLINICAL USE (swish and swallow)", rng(216, 41, 48), 216),
    ("Flucytosine — MECHANISM (cytosine deaminase → 5-fluorouracil)", rng(216, 50, 53), 216),
    ("Flucytosine — CLINICAL USE (with amphotericin B for cryptococcal meningitis)", rng(216, 55, 58), 216),
    ("Flucytosine — ADVERSE EFFECTS (myelosuppression)", rng(216, 60, 62), 216),
    ("The indd footer + timestamp (page identity)", rng(216, 64, 66), 216),
    # ── p217 / book 195 — azoles, terbinafine, echinocandins, griseofulvin + the tail ──
    ("Page banner trio + the mid-page book number '195'", rng(217, 1, 7), 217),
    ("Azoles — the single-line drug roster (the chapter's longest)", rng(217, 9, 11), 217),
    ("Azoles — MECHANISM (the lanosterol→ergosterol P-450)", rng(217, 13, 16), 217),
    ("Azoles — CLINICAL USE (the site-by-site azole routing)", rng(217, 18, 24), 217),
    ("Azoles — ADVERSE EFFECTS (gynecomastia esp. ketoconazole; P-450; QT)", rng(217, 26, 29), 217),
    ("Terbinafine — MECHANISM + CLINICAL USE + ADVERSE", rng(217, 31, 42), 217),
    ("Echinocandins — the full card (anidulafungin, caspofungin, micafungin; β-glucan)", rng(217, 44, 58), 217),
    ("Griseofulvin — the full card (microtubules; keratin; disulfiram-like; ↑warfarin)", rng(217, 60, 73), 217),
    ("The antiprotozoal tail block (pyrimethamine-sulfadiazine through stibogluconate)", rng(217, 75, 78), 217),
    ("The anti-mite/louse tail block (permethrin, malathion, ivermectin)", rng(217, 80, 84), 217),
    ("Chloroquine — MECHANISM + CLINICAL USE (heme→hemozoin; non-falciparum)", rng(217, 86, 94), 217),
    ("Chloroquine — ADVERSE EFFECTS (cumulative-dose retinopathy; pruritus)", rng(217, 96, 98), 217),
    ("The indd footer + timestamp (page identity)", rng(217, 100, 102), 217),
]
for c, q, p in E36:
    e = ev(c, q, p)
    if e["verified"] != "pass": fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"antifungals: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m36 = {"topicId": "antifungals", "title": "Antifungal Agents",
    "chapterId": "microbiology", "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Antimicrobials", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [216, 217], "bookPages": "194–195"},
    "sourceEvidence": kept, "visualIds": ["antifungal-target-map"],
    "mechanismIds": ["ergosterol-door-logic", "prodrug-activation-tail"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the cards and the figure; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "severity-site-router", "summary": "The door-severity-site routing system (serious systemic → the polyene bundle with its four levers; site → the synthesis doors; the CYP450 echo with griseofulvin flipping the polarity) — KYP's synthesis of the antifungal directory.",
         "origin": "outside-first-aid", "rationale": "The source prints the cards and the figure without a routing system; the severity/site router and the polarity-pair retelling are KYP's design.",
         "location": "core.keyIdea + both mechanism captions + the exam callout + patterns + traps + pivots + mnemonics + miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p216's single raster = the FUNGAL CELL diagram (VLM-census confirmed schematic) — REDRAWN as the registry visual; p217 pure text. The text layer prints 'amphoterrible' (authoritative over the VLM's variant reading — M23 convention); the azoles' roster is a single unbroken line (raw 11); '195' prints mid-page (raw 5). The source's own margin mnemonics are carried ONLY inside the verbatim tables per the E38 precedent. Page ownership: book 195's tail (antiprotozoal summary, anti-mite/louse, chloroquine) carried verbatim here; M37 holds the dedicated cards.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "microbiology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Microbiology — Antimicrobials",
    "topicId": "antifungals", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"antifungals-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": [pages], "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv36 = [
    sv(1, 216, "194–194", "SUMMARY_FIGURE", "The FUNGAL CELL mechanisms-of-action diagram (book 194)",
       "The page's single raster (1087×488 cmyk + smask — VLM census confirmed a color-coded schematic): the fungal cell with drug-target lines (terbinafine, azoles, flucytosine, the polyenes with a pore inset, the echinocandins) and a small Rx icon.",
       "ORIGINAL_KYP_REDRAW", "antifungal-target-map", "the fungal-cell panel of the registry visual — the four doors with the pore inset redrawn clean"),
    sv(2, 216, "194–194", "VISUAL_TABLE", "The amphotericin B, nystatin, and flucytosine cards (book 194)",
       "The page's first three cards with the source's own margin mnemonics (tears holes; K+/Mg2+; hydration/liposomal; amphoterrible; swish and swallow).",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[1] the table block — carried verbatim per the page-ownership convention", "note-block"),
    sv(3, 217, "195–195", "VISUAL_TABLE", "The azoles, terbinafine, echinocandins, and griseofulvin cards (book 195)",
       "The page's four antifungal cards — the azoles' roster printing as a single unbroken line (raw 11), the longest in the chapter.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[2] the table block — carried verbatim", "note-block"),
    sv(4, 217, "195–195", "VISUAL_TABLE", "The page-195 tail: antiprotozoal, anti-mite/louse, chloroquine (book 195)",
       "The three tail blocks printed after the antifungal cards (page ownership): the protozoa roster, the ectoparasite set, and the chloroquine card.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[2] the table block (tail rows) — carried verbatim; M37 details the dedicated cards", "note-block"),
]
(ROOT / "content/usmle/manifests/antifungals.json").write_text(json.dumps(m36, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/antifungals.json").write_text(
    json.dumps({"topicId": "antifungals", "chapterId": "microbiology", "inventory": inv36,
                "coverageAudit": {"topicId": "antifungals", "textbookVisualCount": 4,
                    "accountedFor": 4, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 3,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The FUNGAL CELL diagram (the page's single raster; VLM-census confirmed schematic) is the registry visual — an original KYP vector redraw preserving the drug-target lines and the pore inset. The card groups and the page-195 tail are note-block verbatim adaptations. The source's own margin mnemonics are carried only inside the verbatim tables; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "antifungals":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv36))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: microbiology {done}/39")
print("M36 manifest + inventory + flip done")
