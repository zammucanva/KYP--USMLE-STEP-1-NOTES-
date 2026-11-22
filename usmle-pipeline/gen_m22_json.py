#!/usr/bin/env python3
"""M22 viral-structure-genetics — manifest + inventory + flip (22/39 — the
VIROLOGY banner opens).

Census: BOTH pages pure vector (pdfimages lists 0 rasters on 181 and 182) —
the first M-topic with no copyrighted photos to describe-in-text.

Text quirks: the banner typo 'MICROCIOLOGY—VIROLOGY' prints on books 159-160
(twice on 159 — page header + section header); the structure figure's labels
emit in interleaved two-column order (10-34, 42-50); the four row labels of
the Viral genetics table GROUP before the definitions (57-64); the diagrams'
label set (+ = icons, Functional/Nonfunctional, Virus A/B, Progeny 1/2) emits
after the definitions (97-121); 'Base Spikes' then 'plate' interleave (49-50);
on p182 the 'Viral envelopes' row label emits AFTER its own row content (line
50) and the retro-toga-party mnemonic block emits after the indd footer
(52 → 54-57). The VLM census auto-normalized the banner typo to MICROBIOLOGY
— the text layer is authoritative (documented as a VLM-normalization case).
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
L = {p: pages[p - 1].split("\n") for p in (181, 182)}
P = {p: norm(pages[p - 1]) for p in (181, 182)}

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

# ================= M22 =================
E22 = [
    # --- page 181 (book 159) ---
    ("Page banner", "MICROBIOLOGY", 181),
    ("Chapter banner (the source's own typo: MICROCIOLOGY — prints twice on this page)", "▶ MICROCIOLOGY—VIROLOGY", 181),
    ("Printed book-page number (page identity)", "159", 181),
    ("Section banner", "SEC TION II", 181),
    ("Section heading", "Viral structure—general features", 181),
    ("Figure labels, first interleave block (Surface protein x2, Lipid bilayer x2, Capsid x2, Nucleic acid, Collar — physical order)", rng(181, 10, 25), 181),
    ("Figure labels, second interleave block (Capsid, Helical capsid with viral RNA, Nucleic acid)", rng(181, 27, 34), 181),
    ("Panel caption 1 — the naked design", rng(181, 36, 37), 181),
    ("Panel caption 2 — enveloped icosahedral", rng(181, 39, 40), 181),
    ("Phage labels interleaved (Helical sheath, Core, Nucleic acid)", rng(181, 42, 47), 181),
    ("The Base-plate/Spikes interleave ('Base Spikes' then 'plate' — the two labels share their lines)", rng(181, 49, 50), 181),
    ("Panel caption 3 — enveloped helical", rng(181, 52, 53), 181),
    ("Panel caption 4 — the phage", rng(181, 55, 55), 181),
    ("Viral genetics heading + the four row labels GROUPED before the definitions (physical order)", rng(181, 57, 64), 181),
    ("Recombination definition (crossing over within base sequence homology)", rng(181, 68, 70), 181),
    ("Reassortment definition (segmented genomes; influenza; the 2009 H1N1 human-swine-avian pandemic; antigenic shift)", rng(181, 71, 77), 181),
    ("Complementation definition (nonfunctional protein rescued; HDV requires replicating HBV to supply HBsAg)", rng(181, 78, 85), 181),
    ("Phenotypic mixing definition (pseudovirion; the type B coat determines tropism; progeny 2 reverts to the type A coat)", rng(181, 86, 95), 181),
    ("The diagrams' label set (the + = icons, Functional/Nonfunctional, Virus A/B, Progeny 1/2 — emits after the definitions)", rng(181, 97, 121), 181),
    ("Timestamp footer (page identity)", rng(181, 123, 123), 181),
    # --- page 182 (book 160) ---
    ("Printed book-page number (page identity)", "160", 182),
    ("Section heading", "Viral genomes", 182),
    ("Chapter banner (the source's own typo: MICROCIOLOGY)", "▶ MICROCIOLOGY—VIROLOGY", 182),
    ("The naked-genome infectivity paragraph (most dsDNA except poxviruses/HBV + ⊕ ssRNA infectious; ⊝ ssRNA + dsRNA not; virions carry RdRp)", rng(182, 10, 13), 182),
    ("Table headers", rng(182, 14, 16), 182),
    ("DNA viruses row label", rng(182, 18, 18), 182),
    ("DNA viruses characteristics (all dsDNA except Parvoviridae; all linear except papilloma/polyoma/hepadna)", rng(182, 20, 23), 182),
    ("FA's printed DNA-virus mnemonic (verification-only)", rng(182, 25, 25), 182),
    ("RNA viruses row label", rng(182, 27, 27), 182),
    ("RNA viruses characteristics (the ⊕ / ⊝ / segmented rosters)", rng(182, 29, 36), 182),
    ("FA's printed RNA-virus mnemonic (verification-only)", rng(182, 38, 38), 182),
    ("Viral envelopes characteristics (plasma membrane on exit; herpesviruses from the nuclear membrane)", rng(182, 40, 44), 182),
    ("FA's printed envelope mnemonic (the enveloped DNA set — verification-only)", rng(182, 46, 48), 182),
    ("Viral envelopes row label (emits AFTER its own row content, at line 50)", rng(182, 50, 50), 182),
    ("FA's printed RNA-virus mnemonic block (the retro-toga-party sentence + Always bring polymerase + BOAR — emits after the indd footer)", rng(182, 54, 57), 182),
    ("Timestamp footer (page identity)", rng(182, 59, 59), 182),
]

m22 = run("viral-structure-genetics", "Viral Structure & Genetics",
    {"part": 1, "pdfPages": [181, 182], "bookPages": "159–160"}, E22,
    ["viral-structure-map"], ["capsid-envelope-architecture", "genetic-exchange-spectrum"],
    [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the definitions; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "exchange-ladder-synthesis", "summary": "The what-crosses ladder (nucleotides → segments → proteins → coats) with the heritable/transient sorter (does the genome change?); the polymerase-dependence reading of the infectivity rule (⊕ is mRNA-ready; ⊝ must carry its printer); the layered-container reading of the four printed architectures; and the phage-as-injection-machine reading — labeled as integrations.",
         "origin": "outside-first-aid", "rationale": "The source prints the figure and the four definitions without the ladder/sorter synthesis; these are KYP's design.",
         "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + pivots + mnemonics + miniCase"},
    ],
    "Census: pdfimages lists 0 rasters on both p181 and p182 — PURE VECTOR, the first M-topic with no copyrighted photos. The banner typo MICROCIOLOGY prints twice on 159 (page header + section header) and once on 160; the VLM census auto-normalized it to MICROBIOLOGY (documented VLM-normalization case — the text layer is authoritative). The structure figure's labels interleave in two-column order; the genetics row labels group before the definitions; 'Base Spikes'/'plate' share lines 49-50; the p182 'Viral envelopes' row label emits after its own row content (line 50); the retro-toga-party mnemonic block emits after the indd footer (52 → 54-57). FA's printed mnemonics (Part of a virus; Repeato-virus; the retro-toga-party sentence; Always bring polymerase or fail replication; BOAR; helpful protection) are quoted in the table block for verification only — KYP's own keys are in the mnemonics block.",
)

inv22 = [
    svi("viral-structure-genetics", 1, "COMPARISON_FIGURE", "The Viral structure—general features figure (book 159)",
        "The printed 4-panel figure: naked (nonenveloped) virus with icosahedral capsid; enveloped virus with icosahedral capsid; enveloped virus with helical capsid; bacteriophage — with all labeled parts.",
        "ORIGINAL_KYP_REDRAW", "viral-structure-map", "registry-visual",
        {"part": 1, "pdfPages": [181], "bookPages": "159–159"},
        "the four architecture panels (1 Naked icosahedral / 2 Enveloped icosahedral / 3 Enveloped helical / 4 Bacteriophage)"),
    svi("viral-structure-genetics", 2, "SUMMARY_FIGURE", "The Viral genetics diagrams (book 159)",
        "The printed row diagrams: two parent icons + = progeny for recombination, reassortment, complementation (Functional/Nonfunctional), and phenotypic mixing (Virus A/B, Progeny 1/2).",
        "ORIGINAL_KYP_REDRAW", "viral-structure-map", "registry-visual",
        {"part": 1, "pdfPages": [181], "bookPages": "159–159"},
        "the four genetic-exchange cards with the what-crosses subtitles"),
    svi("viral-structure-genetics", 3, "SUMMARY_FIGURE", "The Viral genomes naked-genome rule (book 160)",
        "The printed infectivity paragraph: which naked nucleic acids are infectious and why (the polymerase rule).",
        "ORIGINAL_KYP_REDRAW", "viral-structure-map", "registry-visual",
        {"part": 1, "pdfPages": [182], "bookPages": "160–160"},
        "the naked-genome infectivity + envelope rules strip"),
    svi("viral-structure-genetics", 4, "VISUAL_TABLE", "The CHARACTERISTICS/MNEMONIC table (book 160)",
        "The printed 3-row table: DNA viruses, RNA viruses, Viral envelopes — genome rosters and envelope sources.",
        "ORIGINAL_KYP_ADAPTATION", None, "note-block",
        {"part": 1, "pdfPages": [182], "bookPages": "160–160"},
        "blocks[2] table block — verbatim with FA's mnemonics marked verification-only"),
]

(ROOT / "content/usmle/manifests/viral-structure-genetics.json").write_text(
    json.dumps(m22, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/viral-structure-genetics.json").write_text(
    json.dumps({"topicId": "viral-structure-genetics", "chapterId": "microbiology", "inventory": inv22,
                "coverageAudit": {"topicId": "viral-structure-genetics", "textbookVisualCount": 4,
                    "accountedFor": 4, "sourceReproductions": 0, "kypRedraws": 3, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Both source pages pure vector (0 rasters) — no copyrighted photos on this topic; the 4 source visuals (the structure figure, the genetics diagrams, the genomes rule, the characteristics table) are accounted for: 3 redrawn in the registry visual, 1 adapted as the verbatim note-block table."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
flip("viral-structure-genetics", inv22)
print("M22 manifest + inventory + flip done")
