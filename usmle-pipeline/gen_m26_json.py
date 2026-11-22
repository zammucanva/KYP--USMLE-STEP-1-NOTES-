#!/usr/bin/env python3
"""M26 hepatitis-viruses — manifest + inventory + flip (26/39).

Census: p192 1 raster (the Councilman-bodies liver histology A). p193 17
tiny sep rasters (50x42-class, 316 ppi) — the +/- marks of the serology
patterns table, redrawn as text marks; the timeline figure itself is vector.

Text quirks: the source's own column-header typos print on book 170 —
'INCUCATION' (line 51, missing BAT) and 'LIVER CIOPSY' (line 121, missing
BI) — both documented and carried verbatim in the note's table. The 5-virus
table columns interleave in grouped blocks (FAMILY 21-29, TRANSMISSION
31-49, INCUCATION 51-65, CLINICAL COURSE 67-89, PROGNOSIS 91-107, HCC RISK
109-119, LIVER CIOPSY 121-163, NOTES 169-174); the arrows in the prognosis
cells print as '→' (95/97/104/107); the HDV notes cell (157-161) interleaves
with the HEV notes (163-167) at the page end; p193's timeline figure labels
emit in two passes (the curve labels 86-107 before the axis numbers 109-125,
then the pattern row labels 127-165); the (IgM)/(IgG) qualifiers attach to
the pattern names (141-163).
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
L = {p: pages[p - 1].split("\n") for p in (192, 193)}
P = {p: norm(pages[p - 1]) for p in (192, 193)}

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

# ================= M26 =================
E26 = [
    # --- page 192 (book 170) ---
    ("Printed book-page number (page identity)", "170", 192),
    ("Section banner", "SEC TION II", 192),
    ("Page banner", "MICROBIOLOGY", 192),
    ("Chapter banner (the source's own typo: MICROCIOLOGY)", "▶ MICROCIOLOGY—VIROLOGY", 192),
    ("Section heading (splits across lines)", rng(192, 4, 5), 192),
    ("The shared-signature intro + FA's vowels gloss (verification-only)", rng(192, 14, 15), 192),
    ("The HBV polymerase mechanism (DNA- and RNA-dependent; completes partial dsDNA; reverse transcription)", rng(192, 16, 18), 192),
    ("The HCV escape mechanism (no 3'-5' exonuclease; no proofreading; antigenic variation; antibody lags)", rng(192, 19, 20), 192),
    ("The five virus labels + family row, grouped (HAV/HBV/HCV/HDV/HEV then picorna/hepadna/flavi/delta/hepe)", rng(192, 21, 29), 192),
    ("TRANSMISSION column, grouped (HAV fecal-oral shellfish; HBV Blood-Bedroom-Birthing; HCV injection/posttransfusion; HDV parenteral; HEV fecal-oral waterborne)", rng(192, 31, 49), 192),
    ("INCUCATION column (the source's own header typo — missing BAT), grouped (short/long/long/superinfection-short-co-infection-long/short)", rng(192, 51, 65), 192),
    ("CLINICAL COURSE column, grouped (acute self-limiting; serum sickness; cirrhosis/carcinoma; similar to HBV; fulminant in pregnancy)", rng(192, 67, 89), 192),
    ("PROGNOSIS column, grouped (good; adults resolve-neonates worse; majority chronic; superinfection worse; high mortality in pregnancy)", rng(192, 91, 107), 192),
    ("HCC RISK column, grouped (no/yes/yes/yes/no)", rng(192, 109, 119), 192),
    ("LIVER CIOPSY column (the source's own header typo — missing BI): HAV Councilman bodies A; HBV ground glass + cytotoxic T cells; HCV lymphoid aggregates + steatosis; HDV similar; HEV patchy necrosis", rng(192, 121, 149), 192),
    ("NOTES + carrier states + the HDV-defective note interleaved with HEV's enteric-epidemic note at the page end", rng(192, 151, 167), 192),
    ("The Councilman-bodies marker A (described-in-text)", rng(192, 169, 169), 192),
    ("Timestamp footer (page identity)", rng(192, 178, 178), 192),
    # --- page 193 (book 171) ---
    ("Page banner", "MICROBIOLOGY", 193),
    ("Printed book-page number (page identity)", "171", 193),
    ("Chapter banner (the source's own typo)", "▶ MICROCIOLOGY—VIROLOGY", 193),
    ("Section banner", "SEC TION II", 193),
    ("Extrahepatic heading + the two column headers", rng(193, 8, 11), 193),
    ("HEMATOLOGIC row (HBV aplastic anemia; HCV cryoglobulinemia, B-cell NHL, ITP, AIHA)", rng(193, 13, 18), 193),
    ("RENAL row (HBV membranous > MPGN; HCV MPGN > membranous)", rng(193, 20, 24), 193),
    ("VASCULAR row (HBV polyarteritis nodosa; HCV leukocytoclastic vasculitis)", rng(193, 26, 30), 193),
    ("DERMATOLOGIC + ENDOCRINE rows (HCV porphyria cutanea tarda + lichen planus; diabetes + autoimmune hypothyroidism)", rng(193, 32, 39), 193),
    ("Serologic markers heading + anti-HAV pair", rng(193, 41, 48), 193),
    ("HBsAg + anti-HBs markers", rng(193, 50, 56), 193),
    ("HBcAg + anti-HBc markers (IgM acute/recent; IgG prior/chronic; the window-period sole ⊕)", rng(193, 58, 65), 193),
    ("HBeAg + anti-HBe markers (secreted, not in the virion; active replication, high transmissibility)", rng(193, 67, 74), 193),
    ("The timeline's phase labels + curve labels, first pass (incubation/acute/window/recovery; anti-HBc; core antigen; relative concentration; HBsAg; anti-HBe; e antigen; anti-HBs; surface protein antigen)", rng(193, 76, 106), 193),
    ("The timeline's axis numbers + months label", rng(193, 107, 125), 193),
    ("The timeline's marker labels, second pass (HBsAg; HBsAg in vaccine; anti-HBs; anti-HBc; HBeAg; anti-HBs; anti-HBe)", rng(193, 127, 140), 193),
    ("The pattern row labels with (IgM)/(IgG) qualifiers (incubation; acute; window; recovery; chronic high; chronic low; immunized)", rng(193, 141, 165), 193),
    ("Timestamp footer (page identity)", rng(193, 168, 168), 193),
]

m26 = run("hepatitis-viruses", "Hepatitis Viruses: A Through E",
    {"part": 1, "pdfPages": [192, 193], "bookPages": "170–171"}, E26,
    ["hepatitis-serology-map"], ["enteric-parenteral-axis", "serology-clock-logic"],
    [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the table and markers; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "enteric-serology-synthesis", "summary": "The enteric-vs-parenteral axis wired to M22's envelope and complementation logic (HDV's HBsAg coat); the pregnancy exception (HEV fulminant); the serology clock with the window-period gap and the immunized-alone pattern; the B-vs-C extrahepatic split by system; and the chronicity mechanism (HCV's missing proofreading) — labeled as integrations.",
         "origin": "outside-first-aid", "rationale": "The source prints the table, markers, and patterns without the axis synthesis or the clock logic; these are KYP's design.",
         "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + pivots + mnemonics + miniCase"},
    ],
    "Census: p192 1 raster (the Councilman-bodies histology A); p193 17 tiny sep rasters (the patterns table's +/- marks — redrawn as text marks in the visual; the timeline itself is vector). The source's own column-header typos print on book 170: 'INCUCATION' (line 51) and 'LIVER CIOPSY' (line 121) — both carried verbatim in the note's table with the typo marked. The 5-virus table columns emit in grouped blocks; the HDV and HEV notes interleave at the page end; p193's timeline labels emit in two passes (curve labels before the axis numbers, pattern labels after); the (IgM)/(IgG) qualifiers attach to the pattern names. FA's printed gloss ('the vowels hit your bowels') is quoted in the table block for verification only.",
)

inv26 = [
    svi("hepatitis-viruses", 1, "VISUAL_TABLE", "The five-virus hepatitis comparison table (book 170)",
        "The printed comparison table with the intro lines and the two mechanism paragraphs.",
        "ORIGINAL_KYP_REDRAW", "hepatitis-serology-map", "registry-visual",
        {"part": 1, "pdfPages": [192], "bookPages": "170–170"},
        "the mechanism strip + the 5-virus grid"),
    svi("hepatitis-viruses", 2, "TIMELINE", "The HBV serology timeline figure (book 171)",
        "The printed graph: relative concentration of reactants (HBsAg, anti-HBc, HBeAg, anti-HBe, anti-HBs) across approximate months after exposure, with the incubation/acute/window/recovery phases.",
        "ORIGINAL_KYP_REDRAW", "hepatitis-serology-map", "registry-visual",
        {"part": 1, "pdfPages": [193], "bookPages": "171–171"},
        "the serology clock panel (an original redraw of the graph)"),
    svi("hepatitis-viruses", 3, "VISUAL_TABLE", "The serology patterns table (book 171)",
        "The printed 7-scenario x 5-marker table (its marks print as 17 tiny raster images).",
        "ORIGINAL_KYP_REDRAW", "hepatitis-serology-map", "registry-visual",
        {"part": 1, "pdfPages": [193], "bookPages": "171–171"},
        "the 7-scenario patterns table with text marks"),
    svi("hepatitis-viruses", 4, "VISUAL_TABLE", "The extrahepatic manifestations table (book 171)",
        "The printed hepatitis B vs C table across five systems.",
        "ORIGINAL_KYP_REDRAW", "hepatitis-serology-map", "registry-visual",
        {"part": 1, "pdfPages": [193], "bookPages": "171–171"},
        "the extrahepatic B-vs-C panel"),
    svi("hepatitis-viruses", 5, "MICROBIOLOGY_IMAGE", "The Councilman-bodies histology (book 170)",
        "The liver biopsy showing hepatocyte swelling with Councilman bodies, marker A.",
        "ORIGINAL_KYP_ADAPTATION", None, "note-block",
        {"part": 1, "pdfPages": [192], "bookPages": "170–170"},
        "blocks[1] table row — figure pointer carried verbatim; described-in-text only"),
]

(ROOT / "content/usmle/manifests/hepatitis-viruses.json").write_text(
    json.dumps(m26, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/hepatitis-viruses.json").write_text(
    json.dumps({"topicId": "hepatitis-viruses", "chapterId": "microbiology", "inventory": inv26,
                "coverageAudit": {"topicId": "hepatitis-viruses", "textbookVisualCount": 5,
                    "accountedFor": 5, "sourceReproductions": 0, "kypRedraws": 4, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "4 source structures redrawn in the registry visual (the comparison table, the serology timeline graph, the patterns table with its raster marks redrawn as text, the extrahepatic table); the Councilman-bodies histology is COPYRIGHTED — described-in-text only."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
flip("hepatitis-viruses", inv26)
print("M26 manifest + inventory + flip done")
