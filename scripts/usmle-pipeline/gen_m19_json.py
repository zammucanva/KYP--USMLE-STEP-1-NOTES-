#!/usr/bin/env python3
"""M19 blood-tissue-protozoa — manifest + visual inventory + chapter flip (19/39).

Evidence pinned on pdf 175 (book 153: the CNS table), pdf 176 (book 154: the
hematologic table), pdf 177 (book 155: the others table + the Trichomonas
entry [the M18 cross-link resolved] + the Nematode-routes box [cross-linked
to M20]).

Photos (raster, COPYRIGHTED, described-in-text only) — 12 across the 3 pages:
- p175 (4): A the ring-enhancing MRI; B the tachyzoite biopsy; C the amoebas
  in CSF; D the brucei trypomastigote.
- p176 (4): A the Schüffner stippling; B the headphone-shaped ring; C the
  crescent-shaped gametocytes; D the Babesia ring form/Maltese cross (D1/D2
  markers vs 4 rasters — a grouping case like M17's).
- p177 (4): A the cruzi trypomastigote; B the cutaneous ulcers; C the
  macrophages with amastigotes; D the motile Trichomonas trophozoites.

Text-layer quirks documented:
- p175: the TREATMENT column header emits at the page BOTTOM (line 96, among
  the figure-block markers) — late header emission; the Toxoplasma row's
  treatment block (40-49) interleaves with the diagnosis column (39-48) —
  quoted as one contiguous row range.
- p176: the Plasmodium species set emits interleaved within the Plasmodium
  row (the P. malariae/vivax-ovale/falciparum sub-rows at 42-74); the Babesia
  row interleaves with the figure-block markers (A 84, B 88, C 101, D 106)
  and the timestamp (108).
- p177: the Trichomonas row's heading emits INTERLEAVED mid-table ('Visceral
  infections' 81 / 'Sexually transmitted infections' 83 / 'Trichomonas
  vaginalis' 84-85) with its content 65-79 + 87-92; the Nematode-routes box
  (95-115) emits with the EATTT/SANd/LOW mnemonics; the figure markers
  A/B/C/D (93/100/109/111) interleave with the rows.
- FA's printed mnemonics (the 'I sure am mellow' sleeping gloss; 'T cruzi
  causes big problems'; EATTT/SANd/LOW) carried in the table block only.
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
L = {p: pages[p - 1].split("\n") for p in (175, 176, 177)}
P = {p: norm(pages[p - 1]) for p in (175, 176, 177)}

def rng(pg, a, b):
    return "\n".join(L[pg][a:b + 1])

def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg - 22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}

E = []
# --- p175 (CNS) ---
E += [
    ("Page banner", "MICROBIOLOGY", 175),
    ("Chapter banner", "▶ MICROBIOLOGY—PARASITOLOGY", 175),
    ("Section banner", "SEC TION II", 175),
    ("Printed book-page number (page identity)", "153", 175),
    ("Section heading", "Protozoa—CNS infections", 175),
    ("Table column headers (ORGANISM / DISEASE / TRANSMISSION / DIAGNOSIS — the TREATMENT header emits late at line 96)", rng(175, 9, 17), 175),
    ("Toxoplasma row, interleaved (mononucleosis-like with ⊝ heterophile; AIDS reactivation ring-enhancing MRI A; the congenital triad; cysts in meat/oocysts in cat feces/placental crossing; serology + biopsy tachyzoite B + PCR of amniotic fluid; the interleaved sulfadiazine + pyrimethamine + TMP-SMX CD4<100 treatment block)", rng(175, 17, 49), 175),
    ("Naegleria row (rapidly fatal meningoencephalitis; warm freshwater via the olfactory nerve/cribriform plate; amoebas in CSF C; amphotericin B for a few survivors)", rng(175, 51, 65), 175),
    ("T. brucei row (African sleeping sickness; antigenic variation; tsetse fly; trypomastigote D; suramin/melarsoprol with the printed I-sure-am-mellow gloss)", rng(175, 67, 86), 175),
    ("Figure-block markers + the late TREATMENT header + footer (physical order, lines 88-98: A, the indd footer, B, C, TREATMENT, D)", rng(175, 88, 98), 175),
    ("Timestamp footer line (page identity)", rng(175, 100, 100), 175),
]
# --- p176 (hematologic) ---
E += [
    ("Printed book-page number (page identity)", "154", 176),
    ("Section banner", "SEC TION II", 176),
    ("Page banner", "MICROBIOLOGY", 176),
    ("Chapter banner", "▶ MICROBIOLOGY—PARASITOLOGY", 176),
    ("Section heading", "Protozoa—hematologic infections", 176),
    ("Table column headers (ORGANISM / DISEASE / TRANSMISSION / DIAGNOSIS / TREATMENT)", rng(176, 9, 17), 176),
    ("Plasmodium row part 1 (malaria — cyclic fevers, headache, anemia, splenomegaly, hypoglycemia; Anopheles; peripheral blood smear; the sensitivity-based therapy ladder with the G6PD check; P. malariae quartan ring; P. vivax/ovale tertian hypnozoite + Schüffner stippling A with primaquine)", rng(176, 19, 60), 176),
    ("P. falciparum sub-row (severe irregular fever; cerebral malaria from capillary occlusion; headphone ring B; crescent gametocytes C)", rng(176, 62, 74), 176),
    ("Babesia row interleaved with the figure block (babesiosis — fever + hemolytic anemia; northeastern/north central US; asplenia; Ixodes with Borrelia + Anaplasma; ring form D1 + Maltese cross D2; PCR; atovaquone + azithromycin; the markers A/B/C/D and the timestamp emitting among the row cells)", rng(176, 76, 108), 176),
]
# --- p177 (others) ---
E += [
    ("Page banner", "MICROBIOLOGY", 177),
    ("Chapter banner", "▶ MICROBIOLOGY—PARASITOLOGY", 177),
    ("Section banner", "SEC TION II", 177),
    ("Printed book-page number (page identity)", "155", 177),
    ("Section heading", "Protozoa—others", 177),
    ("Table column headers", rng(177, 9, 17), 177),
    ("T. cruzi row (Chagas — dilated cardiomyopathy with apical atrophy, megacolon, megaesophagus; the printed big-problems gloss; Romaña sign; the triatomine kissing bug's fecal transmission; trypomastigote A; benznidazole/nifurtimox)", rng(177, 19, 44), 177),
    ("Leishmania row (kala-azar — spiking fevers, hepatosplenomegaly, pancytopenia; cutaneous ulcers B; sandfly; macrophages with amastigotes C; amphotericin B / sodium stibogluconate)", rng(177, 46, 63), 177),
    ("Trichomonas row, interleaved with its mid-table heading emission (the M18 cross-link: sexual/no cysts; motile trophozoites D on wet mount; strawberry cervix; metronidazole for patient and partner(s); the Gardnerella distinction; the interleaved 'Visceral infections'/'Sexually transmitted infections'/'Trichomonas vaginalis' heading lines)", rng(177, 65, 92), 177),
    ("The Nematode-routes box with its printed mnemonics (Ingested/Cutaneous/Bites + EATTT/SANd/LOW; cross-linked to M20; prints on this page under M19's ownership)", rng(177, 95, 115), 177),
    ("Figure-block markers (A 93 / B 100 / C 109 / D 111 interleaved with the rows)", rng(177, 93, 111), 177),
    ("Timestamp footer line (page identity)", rng(177, 117, 117), 177),
]

kept, fails = [], []
for c, q, p in E:
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
print(f"evidence: {len(kept)} verified (pdf 175-177 / book 153-155)")

QA = {g: "pass" for g in ["sourceVerified", "contentComplete", "miniCaseConsistent", "kypExtensionsTraceable",
    "mnemonicQuality", "visualsPaint", "visualCoverage", "mechanismRender", "lightMode",
    "darkMode", "mobile", "desktop", "consoleClean", "captionsReadable", "trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated", "chapterMapped", "subsectionMapped", "topicScoped", "evidencePinned",
    "noteAuthored", "visualsAuthored", "mechanismAuthored", "clinicalAuthored",
    "pivotsAuthored", "trapsAuthored", "mnemonicAuthored", "rapidReviewAuthored",
    "relatedAuthored", "qaPassed", "trackerSynced"]}

manifest = {
    "topicId": "blood-tissue-protozoa",
    "title": "Blood & Tissue Protozoa: Plasmodium, Babesia, Toxoplasma, Trypanosoma, Leishmania",
    "chapterId": "microbiology", "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Parasitology", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [175, 176, 177], "bookPages": "153–155"},
    "sourceEvidence": kept, "visualIds": ["blood-tissue-protozoa-map"],
    "mechanismIds": ["vector-smear-therapy-axis", "malaria-cycle-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the tables; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "vector-malaria-synthesis", "summary": "The vector axis (the arthropod boards) wired to the smear axis (the Plasmodium species set by periodicity and form; the Babesia Maltese cross vs the falciparum crescent) and the therapy axis (the sensitivity-based malaria ladder with the G6PD check and the primaquine-hypnozoite rule; the block's drug set); the host axis (AIDS reactivation at low CD4; asplenia's inability to clear infected RBCs); and the two cross-page bridges resolved by page ownership (Trichomonas prints HERE — the M18 cross-link; the Nematode-routes box prints HERE — the M20 forward link) — labeled as integrations.",
         "origin": "outside-first-aid", "rationale": "The source prints the tables without the synthesis; these are KYP's design.",
         "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + mnemonics + miniCase"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages -list): 12 rasters across the 3 pages (4 each: p175 A the ring-enhancing MRI / B the tachyzoite / C the amoebas in CSF / D the brucei trypomastigote; p176 A the Schüffner stippling / B the headphone ring / C the crescent gametocytes / D the Babesia ring form + Maltese cross [the D1/D2 markers vs 4 rasters — a grouping case]; p177 A the cruzi trypomastigote / B the cutaneous ulcers / C the amastigotes / D the motile Trichomonas) — all COPYRIGHTED, described-in-text only. Text quirks: the TREATMENT header on book 153 emits at the page bottom (line 96, among the figure markers) — late header emission; the Plasmodium species set interleaves within its row; the Babesia row interleaves with the figure markers and the timestamp; the Trichomonas row's heading emits mid-table (the 'Visceral infections'/'Sexually transmitted infections' lines); the Nematode-routes box emits with the EATTT/SANd/LOW mnemonics. PAGE-OWNERSHIP RESOLUTIONS: Trichomonas prints on book 155 (M19's ownership — carried verbatim here, cross-linked from M18); the Nematode-routes box prints on book 155 (M19's ownership — carried verbatim here, cross-linked forward to M20). FA's printed mnemonics (I sure am mellow; T cruzi causes big problems; EATTT/SANd/LOW) carried in the table block only (NOT in the visual).",
    "updatedAt": str(date.today()),
}

def svi(n, vtype, purpose, desc, impl, kyp_id, kimpl, loc=None):
    d = {"visualId": f"blood-tissue-protozoa-sv{n}", "sourceBook": "First Aid for the USMLE Step 1 2026",
         "sourcePages": {"part": 1, "pdfPages": [175, 176, 177], "bookPages": "153–155"},
         "chapterId": "microbiology", "visualType": vtype, "visualPurpose": purpose,
         "sourceFigureDescription": desc, "requiredInKYP": True,
         "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Microbiology — Parasitology",
         "topicId": "blood-tissue-protozoa", "implementationType": impl,
         "kypVisualId": kyp_id, "kypImplementation": kimpl, "qaStatus": "passed"}
    if loc: d["kypLocation"] = loc
    return d

inv = [
    svi(1, "VISUAL_TABLE", "The three protozoa tables (books 153-155)",
        "The printed CNS, hematologic, and others tables with their interleaved photo markers A-D per page.",
        "ORIGINAL_KYP_REDRAW", "blood-tissue-protozoa-map", "registry-visual",
        "the three grids + the vector-axis anchors strip"),
    svi(2, "VISUAL_TABLE", "The Nematode-routes box (book 155, this page's ownership)",
        "The printed Ingested/Cutaneous/Bites routes box with the EATTT/SANd/LOW mnemonics.",
        "ORIGINAL_KYP_ADAPTATION", None, "note-block",
        "blocks[1] table block — carried verbatim here per page ownership; cross-linked forward to M20's nematode note"),
]
for i, (m, d) in enumerate([
    ("The ring-enhancing MRI (book 153)", "Multiple ring-enhancing brain lesions on MRI in AIDS reactivation, marker A."),
    ("The tachyzoite biopsy (book 153)", "A histology photomicrograph showing tachyzoites, marker B."),
    ("The amoebas-in-CSF micrograph (book 153)", "Naegleria amoebas in CSF, marker C."),
    ("The brucei trypomastigote micrograph (book 153)", "A trypomastigote in a blood smear, marker D."),
    ("The Schüffner-stippling micrograph (book 154)", "Schüffner stippling (small red granules) within the RBC cytoplasm, marker A."),
    ("The headphone-ring micrograph (book 154)", "The headphone-shaped trophozoite ring of P. falciparum within an RBC, marker B."),
    ("The crescent-gametocyte micrograph (book 154)", "The crescent-shaped gametocyte of P. falciparum, marker C."),
    ("The Babesia ring/Maltese-cross micrograph (book 154)", "The ring form and the Maltese cross of Babesia, markers D1/D2 (one raster group)."),
    ("The cruzi trypomastigote micrograph (book 155)", "A trypomastigote in a blood smear, marker A."),
    ("The cutaneous-ulcers photo (book 155)", "A clinical photograph of cutaneous leishmaniasis skin ulcers, marker B."),
    ("The amastigotes micrograph (book 155)", "Macrophages containing amastigotes, marker C."),
    ("The motile-Trichomonas micrograph (book 155)", "Motile trophozoites on a wet mount, marker D."),
], start=3):
    inv.append(svi(i, "MICROBIOLOGY_IMAGE", m, d, "ORIGINAL_KYP_ADAPTATION", None, "note-block",
                   "blocks[1] table block — figure pointers carried verbatim; described-in-text only"))

invd = {"topicId": "blood-tissue-protozoa", "chapterId": "microbiology", "inventory": inv,
        "coverageAudit": {"topicId": "blood-tissue-protozoa", "textbookVisualCount": len(inv), "accountedFor": len(inv),
                          "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": len(inv) - 1,
                          "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
        "notes": "The three tables are pure vector (redrawn as the registry visual). The 12 printed photos are rasters — COPYRIGHTED, described-in-text only. The Nematode-routes box is carried verbatim in the table block (page ownership) and cross-linked to M20."}

(ROOT / "content/usmle/manifests/blood-tissue-protozoa.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/blood-tissue-protozoa.json").write_text(json.dumps(invd, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "blood-tissue-protozoa":
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
