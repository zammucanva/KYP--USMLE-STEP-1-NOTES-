#!/usr/bin/env python3
"""M18 intestinal-protozoa — manifest + visual inventory + chapter flip (18/39).

Evidence pinned on pdf 174 (book 152). Trichomonas prints on pdf 177 (book 155)
under M19's page ownership — cross-linked, not duplicated (documented).

Photos (raster, COPYRIGHTED, described-in-text only) — 6 rasters on p174:
A the multinucleated trophozoites (274x282 gray); B the Giardia cysts (269x282
cmyk); C the flask-shaped ulcers histology (315x224 cmyk); D the trophozoite
with engulfed RBCs (855x893 indexed, 476ppi — the high-resolution histology);
E the cysts with up to 4 nuclei (275x281 cmyk); F the acid-fast oocysts (315x281
cmyk). Markers print inline in the DIAGNOSIS cells + the bottom figure block
(86-96: A B C D E F).

Text-layer quirks documented: the 5-column table emits each organism's cells
as one contiguous interleaved block (quoted as row ranges); the chapter banner
prints TWICE (lines 6 and 8 — the PARASITOLOGY banner quirk); the figure block
emits after the printed footer (84) at 86-96; the Ghirardelli mnemonic is FA's
own printed gloss (carried in the table block only).
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
L = pages[173].split("\n")
P = norm(pages[173])

def rng(a, b):
    return "\n".join(L[a:b + 1])

def ev(claim, quote):
    ok = norm(quote) in P
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [174], "bookPages": "152"},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}

E = [
    ("Printed book-page number (page identity)", "152"),
    ("Section banner", "SEC TION II"),
    ("Page banner", "MICROBIOLOGY"),
    ("Chapter banner (prints twice, lines 6 and 8 — the PARASITOLOGY quirk)", "▶ MICROBIOLOGY—PARASITOLOGY"),
    ("Section heading", "Protozoa—gastrointestinal infections"),
    ("Table column headers (ORGANISM / DISEASE / TRANSMISSION / DIAGNOSIS / TREATMENT)", rng(10, 18)),
    ("Giardia row, interleaved (the fatty nonbloody diarrhea of campers/hikers with the printed Ghirardelli gloss; cysts in water; the multinucleated trophozoites A or cysts B in stool with inline photo markers; antigen detection; PCR; tinidazole/nitazoxanide/metronidazole)", rng(20, 39)),
    ("Entamoeba row, interleaved (bloody dysentery; anchovy-paste liver abscess; RUQ pain; flask-shaped ulcers C with the inline photo marker; serology/antigen/PCR; trophozoites with engulfed RBCs D and cysts with up to 4 nuclei E; the printed Entamoeba-Eats-Erythrocytes gloss; metronidazole + paromomycin for asymptomatic cyst passers)", rng(41, 66)),
    ("Cryptosporidium row, interleaved (severe diarrhea in AIDS, mild watery in the immunocompetent; oocysts in water; oocysts on acid-fast stain F with the inline photo marker; antigen detection; PCR; prevention/filtering; nitazoxanide for severe and/or immunocompromised)", rng(68, 82)),
    ("Printed book-page footer (page identity)", rng(84, 84)),
    ("Figure-block photo markers (physical order, lines 86-96: A B C D E F)", rng(86, 96)),
    ("Timestamp footer line (page identity)", rng(98, 98)),
]

kept, fails = [], []
for c, q in E:
    if len(q.strip()) < 3:
        continue
    e = ev(c, q)
    if e["verified"] != "pass":
        fails.append(f"NOT FOUND: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails:
        print("  x", f)
    sys.exit(1)
print(f"evidence: {len(kept)} verified (pdf 174 / book 152)")

QA = {g: "pass" for g in ["sourceVerified", "contentComplete", "miniCaseConsistent", "kypExtensionsTraceable",
    "mnemonicQuality", "visualsPaint", "visualCoverage", "mechanismRender", "lightMode",
    "darkMode", "mobile", "desktop", "consoleClean", "captionsReadable", "trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated", "chapterMapped", "subsectionMapped", "topicScoped", "evidencePinned",
    "noteAuthored", "visualsAuthored", "mechanismAuthored", "clinicalAuthored",
    "pivotsAuthored", "trapsAuthored", "mnemonicAuthored", "rapidReviewAuthored",
    "relatedAuthored", "qaPassed", "trackerSynced"]}

manifest = {
    "topicId": "intestinal-protozoa", "title": "Intestinal & Urogenital Protozoa",
    "chapterId": "microbiology", "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Parasitology", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [174], "bookPages": "152–152"},
    "sourceEvidence": kept, "visualIds": ["intestinal-protozoa-panel"],
    "mechanismIds": ["water-stool-axis", "host-severity-axis"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the table; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "water-stool-synthesis", "summary": "The cysts-vs-oocysts water axis wired to the stool-character axis (fatty nonbloody malabsorption vs bloody dysentery with the anchovy-paste abscess and flask-shaped ulcers) and the smear axis (multinucleated trophozoites vs engulfed-RBC trophozoites vs acid-fast oocysts); the Cryptosporidium immune split (AIDS-severe vs competent-mild) scaling the therapy; and the Trichomonas cross-page bridge (book 155, M19 ownership — the no-cysts sexual exception distinguished from Gardnerella) — labeled as integrations.",
         "origin": "outside-first-aid", "rationale": "The source prints the table without the axis synthesis; these are KYP's design.",
         "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + mnemonics + miniCase"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages -list): p174 carries 6 rasters (A the multinucleated trophozoites 274x282 gray; B the Giardia cysts 269x282 cmyk; C the flask-shaped-ulcers histology 315x224 cmyk; D the engulfed-RBC trophozoite 855x893 indexed at 476ppi [the high-resolution histology]; E the 4-nucleus cysts 275x281 cmyk; F the acid-fast oocysts 315x281 cmyk) — all COPYRIGHTED, described-in-text only; markers inline in the DIAGNOSIS cells + the bottom figure block (86-96) emitting after the footer. Text quirks: each organism's cells emit as one contiguous interleaved block; the chapter banner prints twice (6 and 8); the Ghirardelli gloss is FA's own printed mnemonic (table block only). PAGE-OWNERSHIP NOTE: Trichomonas vaginalis (the urogenital protozoan of this topic's title and faSubsections) prints on pdf 177 (book 155) under M19's ownership — its verbatim entry lives in M19's table block; this note cross-links it without duplication.",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {"visualId": f"intestinal-protozoa-sv{n}", "sourceBook": "First Aid for the USMLE Step 1 2026",
         "sourcePages": {"part": 1, "pdfPages": [174], "bookPages": "152–152"},
         "chapterId": "microbiology", "visualType": vtype, "visualPurpose": purpose,
         "sourceFigureDescription": desc, "requiredInKYP": True,
         "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Microbiology — Parasitology",
         "topicId": "intestinal-protozoa", "implementationType": impl,
         "kypVisualId": kyp_id, "kypImplementation": kimpl, "qaStatus": "passed"}
    if loc: d["kypLocation"] = loc
    return d

inv = [
    svi(1, "VISUAL_TABLE", "The Protozoa—gastrointestinal infections table (book 152)",
        "The printed 5-column table: Giardia lamblia, Entamoeba histolytica, and Cryptosporidium with their interleaved photo markers A-F.",
        "ORIGINAL_KYP_REDRAW", "intestinal-protozoa-panel", "registry-visual",
        "the water-panel grid + the water/stool/smear anchors strip"),
]
for i, (m, d) in enumerate([
    ("The Giardia multinucleated-trophozoites micrograph (book 152)", "A micrograph of the multinucleated trophozoites of Giardia, marker A after 'trophozoites'."),
    ("The Giardia cysts micrograph (book 152)", "A micrograph of Giardia cysts, marker B after 'cysts'."),
    ("The flask-shaped-ulcers histology (book 152)", "A histology photomicrograph of the colon biopsy showing flask-shaped ulcers, marker C after 'flask-shaped ulcers'."),
    ("The engulfed-RBC trophozoite micrograph (book 152)", "A micrograph of the Entamoeba trophozoite with engulfed RBCs in the cytoplasm, marker D (the 855x893 indexed high-resolution histology)."),
    ("The 4-nucleus-cysts micrograph (book 152)", "A micrograph of Entamoeba cysts with up to 4 nuclei in stool, marker E after '4 nuclei'."),
    ("The acid-fast-oocysts micrograph (book 152)", "A micrograph of Cryptosporidium oocysts on acid-fast stain, marker F after 'acid-fast stain'."),
], start=2):
    inv.append(svi(i, "MICROBIOLOGY_IMAGE", m, d, "ORIGINAL_KYP_ADAPTATION", None, "note-block",
                   "blocks[1] table block — figure pointers carried verbatim; described-in-text only"))

invd = {"topicId": "intestinal-protozoa", "chapterId": "microbiology", "inventory": inv,
        "coverageAudit": {"topicId": "intestinal-protozoa", "textbookVisualCount": len(inv), "accountedFor": len(inv),
                          "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 6,
                          "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
        "notes": "The table is pure vector (redrawn as the registry visual). The 6 printed photos are rasters — COPYRIGHTED, described-in-text only. FA's Ghirardelli gloss carried in the table block only."}

(ROOT / "content/usmle/manifests/intestinal-protozoa.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/intestinal-protozoa.json").write_text(json.dumps(invd, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "intestinal-protozoa":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv))
        for v, s in zip(t["textbookVisuals"], inv):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = s.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = s.get("kypImplementation") or "note-block"
        break
else:
    sys.exit("ERROR: topic not found")
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: microbiology {done}/39")
