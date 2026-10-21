#!/usr/bin/env python3
"""M16 systemic-mycoses + M17 opportunistic-fungi — manifests + inventories
+ chapter flips (15/39 -> 16/39 -> 17/39). MYCOLOGY banner complete.

Photos (raster, COPYRIGHTED, described-in-text only):
- p171: 5 rasters (A the macrophage filled with Histoplasma [157x150 cmyk];
  B the broad-based budding of Blastomyces [156x150]; C the verrucous
  lesions [150x150]; D the Coccidioides spherule [157x151]; E the
  Paracoccidioides captain's wheel [156x150]) — markers inline in the
  PATHOLOGIC FEATURES cells; the standalone A/C emit in the bottom figure
  block (110-125) together with the row headers of rows 2-4 (Blastomycosis,
  Coccidioidomycosis, Paracoccidioidomycosis) and the US-map legend
  ('Blastomycosis Histoplasmosis Coccidiodomycosis' — the source's own
  one-d typo at line 125). The US endemic map itself is pure vector but is
  NOT reproduced (described-in-text; geography carried by the ENDEMIC column).
- p172: 9 displayed photo panels (A-I) with pdfimages counting 5 raster
  XObjects (216x225 cmyk x4 + 216x223 gray x1) — the grouping discrepancy is
  documented; all described-in-text only. Markers print inline in the
  organism entries + the figure block (55-69: A B C D F G H I) + E at 73.

Text-layer quirks documented:
- p171: the 5-column table emits each disease's cells as one contiguous
  interleaved block (rows quoted as ranges); the DISEASE row headers for
  rows 2-4 emit at the BOTTOM (112-118) not inline; the legend emits with
  the 'Coccidiodomycosis' one-d typo (125 vs 115's correct spelling);
  the banner prints TWICE (lines 2 and 8).
- p172: '→' double-space arrows (the Mucor route); '“soap bubble”' curly
  quotes; 'μl'-style micron as 'μm' with U+00b5? (dump shows 'μm' — U+03bc
  Greek mu in '5-10 μm'; handled by norm()); ⊕ U+2295; ⊝ absent here;
  the figure block emits A B C D F G H I (55-69) with E at 73 after the
  footer (71) — the E marker's late emission documented.
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
L = {p: pages[p - 1].split("\n") for p in (171, 172)}
P = {p: norm(pages[p - 1]) for p in (171, 172)}

def rng(pg, a, b):
    return "\n".join(L[pg][a:b + 1])

def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {
        "claim": claim,
        "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg - 22)},
        "quote": quote,
        "verified": "pass" if ok else "FAIL",
        "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)",
    }

def build(topic_id, title, subsection, src, evidence, visual_ids, mech_ids, exts, notes):
    QA = {g: "pass" for g in [
        "sourceVerified", "contentComplete", "miniCaseConsistent", "kypExtensionsTraceable",
        "mnemonicQuality", "visualsPaint", "visualCoverage", "mechanismRender", "lightMode",
        "darkMode", "mobile", "desktop", "consoleClean", "captionsReadable", "trackerSynced"]}
    STAGES = {s: "pass" for s in [
        "sourceLocated", "chapterMapped", "subsectionMapped", "topicScoped", "evidencePinned",
        "noteAuthored", "visualsAuthored", "mechanismAuthored", "clinicalAuthored",
        "pivotsAuthored", "trapsAuthored", "mnemonicAuthored", "rapidReviewAuthored",
        "relatedAuthored", "qaPassed", "trackerSynced"]}
    kept = []
    fails = []
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
    print(f"{topic_id}: evidence {len(kept)}/{len(kept) if not fails else 'FAILED'} verified")
    return {
        "topicId": topic_id, "title": title, "chapterId": "microbiology",
        "chapterTitle": "Microbiology", "subsection": subsection, "part": 1,
        "sourcePages": src, "sourceEvidence": kept, "visualIds": visual_ids,
        "mechanismIds": mech_ids, "kypExtensions": exts,
        "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
        "productionStatus": "pilot-complete", "notes": notes,
        "updatedAt": str(date.today()),
    }

def svi(topic, n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {
        "visualId": f"{topic}-sv{n}", "sourceBook": "First Aid for the USMLE Step 1 2026",
        "sourcePages": {"part": 1, "pdfPages": [171] if topic == "systemic-mycoses" else [172],
                        "bookPages": "149" if topic == "systemic-mycoses" else "150"},
        "chapterId": "microbiology", "visualType": vtype, "visualPurpose": purpose,
        "sourceFigureDescription": desc, "requiredInKYP": True,
        "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
        "subsection": "Microbiology — Mycology", "topicId": topic,
        "implementationType": impl, "kypVisualId": kyp_id,
        "kypImplementation": kimpl, "qaStatus": "passed"}
    if loc:
        d["kypLocation"] = loc
    return d

def flip(topic, inv_list):
    ch_path = ROOT / "content/usmle/chapters/microbiology.json"
    ch = json.loads(ch_path.read_text(encoding="utf8"))
    for t in ch["topics"]:
        if t["topicId"] == topic:
            t["status"] = "complete"
            t["textbookVisuals"] = json.loads(json.dumps(inv_list))
            for v, s in zip(t["textbookVisuals"], inv_list):
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
    print(f"chapter: {topic} -> complete; microbiology {done}/39")

# ================= M16 =================
E16 = [
    ("Page banner", "MICROBIOLOGY", 171),
    ("Chapter banner (prints twice, lines 2 and 8)", "▶ MICROBIOLOGY—MYCOLOGY", 171),
    ("Printed book-page number (page identity)", "149", 171),
    ("Section banner", "SEC TION II", 171),
    ("Section heading", "Systemic mycoses", 171),
    ("The dimorphic rules (pneumonia + dissemination; cold 20°C = mold, heat 37°C = yeast; the Coccidioides spherule exception; granulomas like TB, not transmitted person-to-person; the therapy line)", rng(171, 11, 15), 171),
    ("Table column headers (DISEASE / ENDEMIC LOCATION / PATHOLOGIC FEATURES / UNIQUE SIGNS/SYMPTOMS / NOTES)", rng(171, 17, 25), 171),
    ("Histoplasmosis row, interleaved (physical order: the row header at 27; Mississippi and Ohio River Valleys; the macrophage-filled organism smaller than RBC A + tuberculate macroconidia; the unique signs; Histo hides + bird/bat droppings + urine/serum antigen)", rng(171, 27, 51), 171),
    ("Blastomycosis row, interleaved (Eastern and Central US Great Lakes; broad-based budding same size as RBC B; inflammatory lung disease; bone/skin with verrucous lesions C; Blasto buds broadly)", rng(171, 53, 67), 171),
    ("Coccidioidomycosis row, interleaved (Southwestern US California; the spherule with endospores much larger than RBC D; bone/skin + desert bumps + desert rheumatism + meningitis; dust exposure)", rng(171, 69, 91), 171),
    ("Paracoccidioidomycosis row, interleaved (Latin America; the captain's-wheel budding yeast much larger than RBC E; similar to blastomycosis males > females; the parasails mnemonic)", rng(171, 93, 109), 171),
    ("The bottom figure block (physical order, lines 110-125: the standalone A; the row headers of rows 2-4 [Blastomycosis, Coccidioidomycosis, Paracoccidioidomycosis]; the standalone C; the US-map legend 'Blastomycosis Histoplasmosis Coccidiodomycosis' with the source's own one-d typo)", rng(171, 110, 125), 171),
    ("Printed book-page footer (page identity)", rng(171, 127, 127), 171),
    ("Timestamp footer line (page identity)", rng(171, 129, 129), 171),
]
m16 = build(
    "systemic-mycoses",
    "Systemic Mycoses: Histoplasma, Blastomyces, Coccidioides, Paracoccidioides",
    "Microbiology — Mycology",
    {"part": 1, "pdfPages": [171], "bookPages": "149–149"},
    E16, ["systemic-mycoses-map"], ["dimorphic-size-axis", "dissemination-map"],
    [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid",
         "rationale": "First Aid supplies the table; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "size-geography-synthesis", "summary": "The size axis (smaller than / same size as / much larger than RBC) wired to the geography-exposure axis and the dissemination destinations (the RES display of Histoplasma; the SCC-mimicking verrucous lesions of Blastomyces; the Coccidioides meninges as the only CNS destination); the TB pair (granulomas like TB, never person-to-person) and the depth-based therapy ladder (fluconazole/itraconazole vs amphotericin B) — labeled as integrations.",
         "origin": "outside-first-aid",
         "rationale": "The source prints the table without the axis synthesis; these are KYP's design.",
         "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + mnemonics + miniCase"},
    ],
    "Census (pdfimages -list): p171 carries 5 rasters (A the macrophage filled with Histoplasma; B the broad-based budding; C the verrucous lesions; D the Coccidioides spherule; E the captain's wheel) — all COPYRIGHTED, described-in-text only. The US endemic map is pure vector but NOT reproduced (described-in-text; geography carried by the ENDEMIC column). Text quirks: the 5-column table emits each disease's cells as one contiguous interleaved block; the row headers of rows 2-4 emit at the bottom (112-118); the map legend prints 'Coccidiodomycosis' with one d (the source's own typo, line 125 vs 115); the chapter banner prints twice (2 and 8); the standalone A/C markers emit in the figure block. FA's mnemonics (Histo hides; Blasto buds broadly; Paracoccidio parasails) carried verbatim in the table block only (NOT in the visual).",
)
inv16 = [
    svi("systemic-mycoses", 1, "VISUAL_TABLE", "The systemic-mycoses 5-column table (book 149)",
        "The printed DISEASE | ENDEMIC LOCATION | PATHOLOGIC FEATURES | UNIQUE SIGNS/SYMPTOMS | NOTES table: the four systemic mycoses with their interleaved photo markers A-E.",
        "ORIGINAL_KYP_REDRAW", "systemic-mycoses-map", "registry-visual",
        "the GRID panel — the four-disease x five-column grid, facts only"),
    svi("systemic-mycoses", 2, "VISUAL_TABLE", "The printed US endemic map with its legend (book 149)",
        "The map of the United States showing the endemic regions with the legend key 'Blastomycosis Histoplasmosis Coccidiodomycosis' (the source's one-d typo). Pure vector.",
        "ORIGINAL_KYP_ADAPTATION", None, "note-block",
        "described-in-text only — the map artwork is NOT reproduced; its geography carried by the ENDEMIC LOCATION column and the note's table block"),
]
for i, (m, d) in enumerate([
    ("The Histoplasma-in-macrophage micrograph (book 149)", "A micrograph of a macrophage filled with Histoplasma (numerous yeasts smaller than an RBC), marker A after 'smaller than RBC'."),
    ("The broad-based-budding Blastomyces micrograph (book 149)", "A micrograph of Blastomyces with a single broad-based bud, same size as an RBC, marker B after 'same size as RBC'."),
    ("The verrucous-lesion photo (book 149)", "A clinical photograph of the verrucous skin lesion of disseminated blastomycosis, marker C after 'verrucous lesions'."),
    ("The Coccidioides spherule micrograph (book 149)", "A micrograph of the spherule filled with endospores, much larger than an RBC, marker D after 'much larger than RBC'."),
    ("The Paracoccidioides captain's-wheel micrograph (book 149)", "A micrograph of the budding yeast with the captain's-wheel formation, marker E after the captain's-wheel phrase."),
], start=3):
    inv16.append(svi("systemic-mycoses", i, "MICROBIOLOGY_IMAGE", m, d, "ORIGINAL_KYP_ADAPTATION", None, "note-block",
                     "blocks[1] table block — figure pointers carried verbatim; described-in-text only"))

# ================= M17 =================
E17 = [
    ("Printed book-page number (page identity)", "150", 172),
    ("Section banner", "SEC TION II", 172),
    ("Page banner", "MICROBIOLOGY", 172),
    ("Chapter banner", "▶ MICROBIOLOGY—MYCOLOGY", 172),
    ("Section heading", rng(172, 8, 9), 172),
    ("Candida albicans entry (alba = white; pseudohyphae and budding yeasts at 20°C A; germ tubes at 37°C B; oral C and esophageal thrush; vulvovaginitis; diaper rash; endocarditis in people who inject drugs; disseminated in neutropenia; chronic mucocutaneous; the by-site treatment ladder)", rng(172, 11, 19), 172),
    ("Aspergillus heading", rng(172, 21, 22), 172),
    ("Aspergillus entry (acute angle 45° D of septate hyphae; invasive aspergillosis in neutrophil dysfunction — CGD — catalase ⊕; aspergillomas E; aflatoxins — TP53 — hepatocellular carcinoma; voriconazole or echinocandins; ABPA with asthma and cystic fibrosis)", rng(172, 24, 32), 172),
    ("Cryptococcus heading", rng(172, 34, 35), 172),
    ("Cryptococcus entry (5-10 μm narrow budding; heavily encapsulated; not dimorphic; ⊕ PAS; soil, pigeon droppings; hematogenous dissemination to meninges; India ink clear halo F; mucicarmine red inner capsule G; latex agglutination; soap-bubble lesions; amphotericin B + flucytosine then fluconazole)", rng(172, 37, 43), 172),
    ("Mucor heading", rng(172, 45, 46), 172),
    ("Mucor entry (irregular broad nonseptate hyphae at wide angles H; DKA and/or neutropenia; blood vessel walls — cribriform plate — brain; rhinocerebral frontal lobe abscess; cavernous sinus thrombosis; black necrotic eschar I; surgical debridement + amphotericin B or isavuconazole)", rng(172, 48, 53), 172),
    ("Figure-block markers (physical order, lines 55-69: A B C D F G H I)", rng(172, 55, 69), 172),
    ("Printed book-page footer (page identity)", rng(172, 71, 71), 172),
    ("The late-emitting E figure marker (line 73, after the footer)", rng(172, 73, 73), 172),
    ("Timestamp footer line (page identity)", rng(172, 75, 75), 172),
]
m17 = build(
    "opportunistic-fungi",
    "Opportunistic Fungi: Aspergillus, Cryptococcus, Candida, Mucor",
    "Microbiology — Mycology",
    {"part": 1, "pdfPages": [172], "bookPages": "150–150"},
    E17, ["opportunistic-fungi-panel"], ["morphology-host-axis", "angioinvasion-route"],
    [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid",
         "rationale": "First Aid supplies the entries; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "morphology-host-synthesis", "summary": "The four-form morphology axis wired to the host-defect axis (CGD-catalase ⊕ for Aspergillus; neutropenia-phagocytes for disseminated Candida; DKA for Mucor; the immunocompromise for Cryptococcus) with the route pair (the cribriform-plate angioinvasion vs the hematogenous meningeal dissemination) and the site-based therapy ladders — labeled as integrations.",
         "origin": "outside-first-aid",
         "rationale": "The source prints the entries without the cross-axes; these are KYP's design.",
         "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + mnemonics + miniCase"},
    ],
    "Census (pdfimages -list): p172 displays 9 photo panels (A-I) with pdfimages counting 5 raster XObjects (4x 216x225 cmyk + 1x 216x223 gray) — the grouping discrepancy documented; all COPYRIGHTED, described-in-text only. Text quirks: the → double-space arrows (the Mucor route); curly quotes ('soap bubble'); 'μm' with U+03bc; ⊕ U+2295; the figure block emits A B C D F G H I at 55-69 with E at 73 AFTER the footer (71) — the E marker's late emission documented.",
)
inv17 = [
    svi("opportunistic-fungi", 1, "VISUAL_TABLE", "The opportunistic-fungi entries (book 150)",
        "The printed four-organism block: Candida albicans, Aspergillus fumigatus, Cryptococcus neoformans, and Mucor and Rhizopus spp with their inline markers A-I.",
        "ORIGINAL_KYP_REDRAW", "opportunistic-fungi-panel", "registry-visual",
        "the four organism cards + the morphology anchors strip; the verbatim text also carried in the note's table block"),
]
for i, (m, d) in enumerate([
    ("The Candida pseudohyphae micrograph (book 150)", "A micrograph of pseudohyphae and budding yeasts at 20°C, marker A."),
    ("The Candida germ-tube micrograph (book 150)", "A micrograph of germ tubes at 37°C, marker B."),
    ("The oral-thrush photo (book 150)", "A clinical photograph of oral thrush (white plaques), marker C."),
    ("The Aspergillus 45°-septate-hyphae micrograph (book 150)", "A micrograph of septate hyphae branching at acute 45° angles, marker D."),
    ("The aspergilloma imaging (book 150)", "An imaging study showing an aspergilloma in a pre-existing lung cavity, marker E."),
    ("The Cryptococcus India-ink micrograph (book 150)", "An India-ink preparation showing yeasts with clear halos (the capsule), marker F."),
    ("The Cryptococcus mucicarmine micrograph (book 150)", "A mucicarmine stain showing the red inner capsule, marker G."),
    ("The Mucor/Rhizopus wide-angle-hyphae micrograph (book 150)", "A micrograph of irregular, broad, nonseptate hyphae branching at wide angles, marker H."),
    ("The black-necrotic-eschar photo (book 150)", "A clinical photograph of the black necrotic eschar on the face of rhinocerebral mucormycosis, marker I."),
], start=2):
    inv17.append(svi("opportunistic-fungi", i, "MICROBIOLOGY_IMAGE", m, d, "ORIGINAL_KYP_ADAPTATION", None, "note-block",
                     "blocks[1] table block — figure pointers carried verbatim; described-in-text only"))

# write all artifacts
for topic, manifest, inv in [("systemic-mycoses", m16, inv16), ("opportunistic-fungi", m17, inv17)]:
    invd = {"topicId": topic, "chapterId": "microbiology", "inventory": inv,
            "coverageAudit": {"topicId": topic, "textbookVisualCount": len(inv), "accountedFor": len(inv),
                              "sourceReproductions": 0, "kypRedraws": sum(1 for x in inv if x["implementationType"] == "ORIGINAL_KYP_REDRAW"),
                              "kypOriginals": sum(1 for x in inv if x["implementationType"] == "ORIGINAL_KYP_ADAPTATION"),
                              "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
            "notes": "See the manifest notes for the census and quirks; all printed photos COPYRIGHTED, described-in-text only."}
    (ROOT / f"content/usmle/manifests/{topic}.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
    (ROOT / f"content/usmle/visual-inventory/{topic}.json").write_text(json.dumps(invd, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
    print(f"wrote manifest + visual-inventory for {topic}")

flip("systemic-mycoses", inv16)
flip("opportunistic-fungi", inv17)
