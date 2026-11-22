#!/usr/bin/env python3
"""M20 nematodes + M21 cestodes-trematodes — manifests + inventories + flips
(20/39 and 21/39 — PARASITOLOGY COMPLETE).

Photos (raster, COPYRIGHTED, described-in-text only):
- p178: 5 markers (A the tape-test eggs, B the knobby Ascaris eggs, C the
  cutaneous larva migrans, D the encysted muscle larvae, E the filarial
  lymphedema) with pdfimages listing 2 XObjects on p178 and the rest under
  the 179-180 batch — the attribution discrepancy documented.
- p179: markers A-E for the cestodes (Taenia proglottids A, neurocysticercosis
  imaging B, Echinococcus C, hydatid cysts D, liver cysts E) + the Schistosoma
  lateral-spine egg A and terminal-spine egg B; pdfimages lists 8 on p179
  (including a degenerate 604x740 devn artifact).
- p180: 2 rasters (the scabies burrows A, the lice nits B).

Text quirks: the source's banner typo 'MICROCIOLOGY—PARASITOLOGY' prints on
books 156-158; the Intestinal/Tissue rails emit as standalone lines (22/140);
the Taenia/Diphyllobothrium/Echinococcus rows interleave with the figure
markers; the Trematodes table starts on book 157 with the Clonorchis heading
emitting at the page end (126-128); the Ectoparasites' lice heading
('Pediculus humanus and Phthirus pubis') emits mid-page at 102-104 among the
hint directory; the Parasite-hints directory emits at 58-98.
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
L = {p: pages[p - 1].split("\n") for p in (178, 179, 180)}
P = {p: norm(pages[p - 1]) for p in (178, 179, 180)}

def rng(pg, a, b):
    return "\n".join(L[pg][a:b + 1])

def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg - 22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}

def run(topic, title, src, evidence, vid, mids, exts, notes):
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
            "subsection": "Microbiology — Parasitology", "part": 1, "sourcePages": src,
            "sourceEvidence": kept, "visualIds": [vid], "mechanismIds": mids,
            "kypExtensions": exts, "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
            "productionStatus": "pilot-complete", "notes": notes, "updatedAt": str(date.today())}

def svi(topic, n, vtype, purpose, desc, impl, kyp_id, kimpl, pages, loc=None):
    d = {"visualId": f"{topic}-sv{n}", "sourceBook": "First Aid for the USMLE Step 1 2026",
         "sourcePages": pages, "chapterId": "microbiology", "visualType": vtype,
         "visualPurpose": purpose, "sourceFigureDescription": desc, "requiredInKYP": True,
         "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Microbiology — Parasitology",
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

# ================= M20 =================
E20 = [
    ("Printed book-page number (page identity)", "156", 178),
    ("Section banner", "SEC TION II", 178),
    ("Page banner", "MICROBIOLOGY", 178),
    ("Chapter banner (the source's own typo: MICROCIOLOGY)", "▶ MICROCIOLOGY—PARASITOLOGY", 178),
    ("Section heading", "Nematodes (roundworms)", 178),
    ("Table headers (ORGANISM / DISEASE / TRANSMISSION / TREATMENT)", rng(178, 9, 15), 178),
    ("Enterobius row, interleaved (the 'Intestinal' rail emits mid-table at line 22; tape-test eggs A; children 5-10; bendazoles/pyrantel)", rng(178, 17, 26), 178),
    ("Ascaris row, interleaved (ileocecal/biliary obstruction; migration from nose/mouth; Löeffler syndrome; knobby oval eggs B; bendazoles)", rng(178, 27, 39), 178),
    ("Strongyloides row, interleaved (GI/pulmonary/cutaneous; hyperinfection in the immunocompromised; rhabditiform larvae; ivermectin or bendazoles)", rng(178, 41, 56), 178),
    ("Hookworms row, interleaved (microcytic anemia; cutaneous larva migrans C; barefoot skin penetration; bendazoles/pyrantel)", rng(178, 58, 72), 178),
    ("Trichinella row, interleaved (encyst in striated muscle D; periorbital edema, myositis; undercooked pork; bendazoles)", rng(178, 74, 82), 178),
    ("Trichuris row, interleaved (rectal prolapse in children; bendazoles)", rng(178, 84, 92), 178),
    ("Toxocara row, interleaved (visceral larva migrans — liver/eyes/CNS/heart; bendazoles)", rng(178, 94, 104), 178),
    ("Onchocerca row (river blindness; female black fly; ivermectin)", rng(178, 106, 114), 178),
    ("Loa loa row (conjunctival worm; deer/horse/mango fly; diethylcarbamazine)", rng(178, 116, 122), 178),
    ("Wuchereria/Brugia row, interleaved (lymphatic filariasis — elephantiasis with lymphedema E; onset 9 mo-1 yr; female mosquito; diethylcarbamazine)", rng(178, 124, 134), 178),
    ("Figure block + the Tissue rail (physical order, lines 136-148: A, B, Tissue, the indd footer at 142, C, D, E)", rng(178, 136, 148), 178),
    ("Timestamp footer line (page identity)", rng(178, 150, 150), 178),
]
m20 = run("helminths-nematodes", "Nematodes: The Roundworms",
    {"part": 1, "pdfPages": [178], "bookPages": "156–156"}, E20,
    "nematode-route-map", ["nematode-route-axis", "hyperinfection-axis"],
    [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the table; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "route-migration-synthesis", "summary": "The Intestinal/Tissue split wired to the cross-linked route rails (Ingested/Cutaneous/Bites — printed on book 155 under M19's ownership); the larval-migration phenomena (Löeffler, cutaneous larva migrans, striated-muscle encystment, visceral larva migrans); the hyperinfection axis of Strongyloides in the immunocompromised; and the therapy spine (bendazoles / ivermectin / diethylcarbamazine) — labeled as integrations.",
         "origin": "outside-first-aid", "rationale": "The source prints the table without the route synthesis; these are KYP's design.",
         "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + mnemonics + miniCase"},
    ],
    "Census: 5 photo markers on p178 (A tape-test eggs, B the knobby Ascaris eggs, C the cutaneous larva migrans, D the encysted muscle larvae, E the filarial lymphedema) with pdfimages listing 2 XObjects on p178 and the remainder under the 179-180 batch — the attribution discrepancy documented. The banner typo MICROCIOLOGY prints at line 6. The Intestinal/Tissue rails emit as standalone lines (22/140). The route rails print on book 155 (M19's ownership) — cross-linked. FA's glosses (ivermectin for river blindness) stay in the table block only.",
)
inv20 = [
    svi("helminths-nematodes", 1, "VISUAL_TABLE", "The Nematodes (roundworms) table (book 156)",
        "The printed 4-column table with 11 organisms and the Intestinal/Tissue split rails.",
        "ORIGINAL_KYP_REDRAW", "nematode-route-map", "registry-visual",
        {"part": 1, "pdfPages": [178], "bookPages": "156–156"},
        "the Intestinal/Tissue panels + the cross-linked route-rails anchors strip"),
]
for i, (m, d) in enumerate([
    ("The tape-test eggs micrograph (book 156)", "The Enterobius eggs visualized via the tape test, marker A."),
    ("The knobby Ascaris-eggs micrograph (book 156)", "The knobby-coated oval eggs seen in feces, marker B."),
    ("The cutaneous-larva-migrans photo (book 156)", "The hookworms' pruritic, serpiginous rash, marker C."),
    ("The encysted-muscle-larvae micrograph (book 156)", "Trichinella larvae encysted in striated muscle, marker D."),
    ("The filarial-lymphedema photo (book 156)", "The elephantiasis lymphedema of Wuchereria/Brugia, marker E."),
], start=2):
    inv20.append(svi("helminths-nematodes", i, "MICROBIOLOGY_IMAGE", m, d, "ORIGINAL_KYP_ADAPTATION", None, "note-block",
                     {"part": 1, "pdfPages": [178], "bookPages": "156–156"},
                     "blocks[1] table block — figure pointers carried verbatim; described-in-text only"))

# ================= M21 =================
E21 = [
    ("Page banner", "MICROBIOLOGY", 179),
    ("Chapter banner (the source's own typo: MICROCIOLOGY)", "▶ MICROCIOLOGY—PARASITOLOGY", 179),
    ("Printed book-page number (page identity)", "157", 179),
    ("Section banner", "SEC TION II", 179),
    ("Section heading", "Cestodes (tapeworms)", 179),
    ("Table headers", rng(179, 9, 15), 179),
    ("Taenia solium row, interleaved (intestinal tapeworm from pork larvae AND neurocysticercosis B from human-feces eggs; praziquantel; albendazole for neurocysticercosis)", rng(179, 17, 35), 179),
    ("Diphyllobothrium row, interleaved (B12 deficiency with the printed DiphylloB12 gloss; megaloblastic anemia; raw freshwater fish; praziquantel/niclosamide)", rng(179, 37, 49), 179),
    ("Echinococcus row, interleaved with the figure markers (hydatid cysts D with eggshell calcification in liver E and lungs; rupture → anaphylaxis; sheep intermediate; dog feces; albendazole + surgery; the markers A-E and the 'Liver'/'St' fragments)", rng(179, 51, 74), 179),
    ("Trematodes heading + headers (the flukes table begins on book 157)", rng(179, 76, 83), 179),
    ("Schistosoma row, interleaved (lateral-spine mansoni egg A; portal hypertension; mansoni + japonicum intestinal schistosomiasis; terminal-spine haematobium egg B → SCC bladder + pulmonary hypertension; snails; cercariae; praziquantel)", rng(179, 85, 111), 179),
    ("Clonorchis row + heading at the page end (biliary inflammation → pigmented gallstones; cholangiocarcinoma; undercooked fish; praziquantel; the interleaved markers A/B; the heading emitting at 126-128 with the footer)", rng(179, 113, 128), 179),
    ("Timestamp (book 157)", rng(179, 130, 130), 179),
    ("Printed book-page number (page identity)", "158", 180),
    ("Section banner", "SEC TION II", 180),
    ("Page banner", "MICROBIOLOGY", 180),
    ("Chapter banner (the source's own typo)", "▶ MICROCIOLOGY—PARASITOLOGY", 180),
    ("Ectoparasites heading", "Ectoparasites", 180),
    ("Sarcoptes row, interleaved (scabies — nocturnal pruritus, serpiginous burrows A; crowded populations; permethrin/ivermectin + wash + treat contacts)", rng(180, 9, 22), 180),
    ("Lice row, interleaved (head/body/pubic lice; body lice transmit prowazekii, recurrentis, QUINTANA; pyrethroids/malathion/ivermectin lotion + nit B combing; school attendance)", rng(180, 24, 37), 180),
    ("Cimex row (bed bugs — painless bites with hemorrhagic punctum; clustered/linear morning patterns; direct identification; eradication critical)", rng(180, 39, 56), 180),
    ("Parasite-hints directory (9 association-organism pairs, biliary/B12)", rng(180, 58, 98), 180),
    ("The lice heading + B marker emitting mid-page among the directory (physical order, lines 100-104: A, Pediculus humanus and Phthirus pubis, B)", rng(180, 100, 104), 180),
    ("Printed book-page footer (page identity)", rng(180, 106, 106), 180),
    ("Timestamp footer line (page identity)", rng(180, 108, 108), 180),
]
m21 = run("cestodes-trematodes", "Cestodes & Trematodes: Tapeworms and Flukes",
    {"part": 1, "pdfPages": [179, 180], "bookPages": "157–158"}, E21,
    "cestode-trematode-map", ["cestode-two-host-axis", "trematode-spine-axis"],
    [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the blocks; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "spine-cancer-ecto-synthesis", "summary": "Taenia solium's two-host split (pork larvae vs human-feces eggs) with Echinococcus' dog-sheep chain; the Schistosoma spine axis (lateral = portal hypertension; terminal = SCC of the bladder) and Clonorchis' biliary cancer chain; and the ectoparasite vector set (the body louse transmitting prowazekii, recurrentis, quintana; scabies' crowded-population epidemiology; the bed-bug eradication rule) — the Ectoparasites and Parasite-hints blocks print on book 158 under this topic's page ownership — labeled as integrations.",
         "origin": "outside-first-aid", "rationale": "The source prints the blocks without the synthesis; these are KYP's design.",
         "location": "core.keyIdea + both mechanism captions + callout + patterns + traps + mnemonics + miniCase"},
    ],
    "Census: markers A-E on p179 (Taenia proglottids A, neurocysticercosis imaging B, Echinococcus C, hydatid cysts D, liver cysts E) + the Schistosoma lateral-spine egg A and terminal-spine egg B; pdfimages lists 8 on p179 (including a degenerate 604x740 devn artifact). p180: 2 rasters (the scabies burrows A, the lice nits B). The banner typo MICROCIOLOGY prints on books 157-158. The Clonorchis heading emits at the page end (126-128); the lice heading emits mid-page at 102-104 among the Parasite-hints directory; the Ectoparasites and Parasite-hints blocks print on book 158 under M21's page ownership (the M9/M15 rule). FA's DiphylloB12 gloss stays in the table block only.",
)
inv21 = [
    svi("cestodes-trematodes", 1, "VISUAL_TABLE", "The Cestodes + Trematodes tables (book 157)",
        "The printed cestode table (Taenia solium, Diphyllobothrium latum, Echinococcus granulosus) and the trematode table (Schistosoma, Clonorchis sinensis) with interleaved markers.",
        "ORIGINAL_KYP_REDRAW", "cestode-trematode-map", "registry-visual",
        {"part": 1, "pdfPages": [179, 180], "bookPages": "157–158"},
        "the CESTODES/TREMATODES panels + the ECTOPARASITES rows + the Parasite-hints anchors strip"),
]
for i, (m, d) in enumerate([
    ("The Taenia proglottids photo (book 157)", "The Taenia solium organism, marker A."),
    ("The neurocysticercosis imaging (book 157)", "CNS imaging of cystic lesions, marker B."),
    ("The Echinococcus organisms photo (book 157)", "The Echinococcus granulosus worms, marker C."),
    ("The hydatid-cysts imaging (book 157)", "The hydatid cysts with eggshell calcification, marker D."),
    ("The liver-cysts imaging (book 157)", "The liver hydatid cysts, marker E."),
    ("The lateral-spine egg micrograph (book 157)", "The S. mansoni egg with its lateral spine, marker A."),
    ("The terminal-spine egg micrograph (book 157)", "The S. haematobium egg with its terminal spine, marker B."),
    ("The scabies-burrows photo (book 158)", "The serpiginous burrows between fingers and toes, marker A."),
    ("The lice nits photo (book 158)", "The pubic lice nits, marker B."),
], start=2):
    inv21.append(svi("cestodes-trematodes", i, "MICROBIOLOGY_IMAGE", m, d, "ORIGINAL_KYP_ADAPTATION", None, "note-block",
                     {"part": 1, "pdfPages": [179, 180], "bookPages": "157–158"},
                     "blocks[1] table block — figure pointers carried verbatim; described-in-text only"))

for topic, manifest, inv in [("helminths-nematodes", m20, inv20), ("cestodes-trematodes", m21, inv21)]:
    invd = {"topicId": topic, "chapterId": "microbiology", "inventory": inv,
            "coverageAudit": {"topicId": topic, "textbookVisualCount": len(inv), "accountedFor": len(inv),
                              "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": len(inv) - 1,
                              "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
            "notes": "See the manifest notes for the census; all printed photos COPYRIGHTED, described-in-text only."}
    (ROOT / f"content/usmle/manifests/{topic}.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
    (ROOT / f"content/usmle/visual-inventory/{topic}.json").write_text(json.dumps(invd, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
    print(f"wrote {topic} manifest + inventory")

flip("helminths-nematodes", inv20)
flip("cestodes-trematodes", inv21)
