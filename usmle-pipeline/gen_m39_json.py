#!/usr/bin/env python3
"""M39 hcv-therapy — manifest + inventory + flip (39/39 — MICROBIOLOGY
COMPLETE). Census: p222 (book 200) is PURE TEXT (pdfimages: ZERO rasters) —
the replication cycle prints as VECTOR LINE ART with all labels in the text
layer; VLM census (render-p222.png) confirmed the hepatocyte schematic
(the nucleus, ER, Golgi apparatus, ribosome, and the membranous web
derived from ER; the HCV virion with its lipoprotein; numbered arrows
1-6) — NO photographs. Drug placements VLM-verified: NS3/4A inhibitors
(glecaprevir, grazoprevir) at TRANSLATION; NS5B inhibitor (sofosbuvir) at
REPLICATION on the membranous web; NS5A inhibitors at ASSEMBLY; ribavirin
at the IMP->GMP->GTP strip with the inhibition symbol at IMP
dehydrogenase. The drug rosters print TWICE (the table's DRUG column and
the figure's drug boxes) — documented. Text quirks: the banner typo
MICROCIOLOGY—ANTIMICROCIALS; 'N u cle us' split spacing (raw 93); the
table's mechanism/toxicity text prints BEFORE the rosters (the M38
interleaving pattern); the footer splits (indd at raw 107, the
membranous-web/replication/NS5B labels after it, raw 109-115). No margin
mnemonics (VLM confirmed)."""
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
L = {222: pages[221].split("\n")}
P = {222: norm(pages[221])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg-22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E39 = [
    ("Page header trio + the 'Hepatitis C therapy' heading (page identity)", rng(222, 1, 9), 222),
    ("The intro block — chronic HCV, multidrug therapy, the replication-cycle targets, HCV-encoded nonstructural proteins", rng(222, 11, 12), 222),
    ("The table column headers (DRUG / MECHANISM / TOXICITY)", rng(222, 14, 18), 222),
    ("NS5A MECHANISM — the viral phosphoprotein of RNA replication, virion assembly, and release; exact mechanism unknown", rng(222, 20, 23), 222),
    ("NS5A TOXICITY — headache, diarrhea", rng(222, 25, 25), 222),
    ("NS5B MECHANISM — the RNA-dependent RNA polymerase chain terminator; prevents viral RNA replication", rng(222, 27, 29), 222),
    ("NS5B TOXICITY — fatigue, headache", rng(222, 31, 31), 222),
    ("NS3/4A MECHANISM — the viral protease, preventing viral replication", rng(222, 33, 34), 222),
    ("NS3/4A TOXICITY — headache, fatigue", rng(222, 36, 36), 222),
    ("Ribavirin MECHANISM — guanine-nucleotide synthesis inhibited by competitive IMP-dehydrogenase inhibition; TOXICITY — hemolytic anemia, severe teratogen", rng(222, 38, 41), 222),
    ("The table's drug rosters — NS5A (elbasvir, ledipasvir, pibrentasvir, velpatasvir), NS5B (sofosbuvir), NS3/4A (glecaprevir, grazoprevir), alternative (ribavirin)", rng(222, 43, 55), 222),
    ("The figure's NS5A drug box (the second printing of the roster)", rng(222, 57, 61), 222),
    ("The figure's entry stages — receptor binding and endocytosis (HCV, hepatocyte, lipoprotein), release, cytoplasm", rng(222, 63, 73), 222),
    ("The figure's uncoating and assembly stages — fusion, uncoating, and RNA release; assembly; the ribavirin and Golgi labels", rng(222, 75, 82), 222),
    ("The figure's nucleotide strip and translation apparatus — (+) RNA, IMP, GMP, GTP, maturation, the split-spacing nucleus, ER, ribosome, translation", rng(222, 84, 101), 222),
    ("The figure's NS3/4A drug box (the second printing)", rng(222, 103, 105), 222),
    ("The figure's membranous-web and replication labels + the NS5B drug box (the second printing) — printing after the footer line", rng(222, 109, 115), 222),
    ("The indd footer + timestamp (page identity)", rng(222, 107, 107), 222),
]
for c, q, p in E39:
    e = ev(c, q, p)
    if e["verified"] != "pass": fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"hcv-therapy: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m39 = {"topicId": "hcv-therapy", "title": "Hepatitis C Therapy: DAAs",
    "chapterId": "microbiology", "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Antimicrobials", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [222], "bookPages": "200–200"},
    "sourceEvidence": kept, "visualIds": ["hcv-daa-target-map"],
    "mechanismIds": ["ns-target-ladder", "guanine-starvation-door"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the table and figure; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "naming-ladder", "summary": "The -previr/-asvir/-buvir naming ladder and the translate/copy/assemble lifecycle mapping — KYP's synthesis of the table and the figure.",
         "origin": "outside-first-aid", "rationale": "The source prints the drug names and targets without any naming-system or lifecycle-position synthesis; the suffix ladder and the door mapping are KYP's design.",
         "location": "core.keyIdea + mechanism 1 + the exam callout + patterns + traps + pivots + mnemonics + miniCase"},
        {"id": "host-door-contrast", "summary": "The viral-door vs host-door selectivity contrast (the NS targets' mild profiles vs ribavirin's hemolytic anemia and severe teratogenicity) — KYP's cross-page synthesis tying M37's pregnancy table to its mechanism.",
         "origin": "outside-first-aid", "rationale": "The source prints the toxicities without the selectivity framing; the host-door contrast and the M37/M38 echoes are KYP's design.",
         "location": "mechanism 2 + the exam callout + crossLinks + miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p222 pure text (0 rasters) — the replication cycle is vector line art in the text layer (the M33/M34 convention); REDRAWN as the registry visual. Drug placements VLM-verified (NS3/4A at translation, NS5B at replication, NS5A at assembly, ribavirin at the IMP-GMP-GTP strip). Rosters print twice (table + figure boxes) — documented. No margin mnemonics (VLM confirmed). Text quirks documented (the split-spacing nucleus label; the footer splitting around the figure labels).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "microbiology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Microbiology — Antimicrobials",
    "topicId": "hcv-therapy", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"hcv-therapy-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv39 = [
    sv(1, [222], "200–200", "SUMMARY_FIGURE", "The HCV replication-cycle figure with its drug doors (book 200)",
       "Vector line art printing entirely in the text layer (pdfimages: 0 rasters): the hepatocyte with nucleus, ER, Golgi apparatus, ribosome, and the membranous web derived from ER; the virion with its lipoprotein; numbered arrows. VLM census confirmed the schematic and the drug placements (NS3/4A at translation, NS5B at replication, NS5A at assembly, ribavirin at the IMP-GMP-GTP strip) — no photographs.",
       "ORIGINAL_KYP_REDRAW", "hcv-daa-target-map", "the full registry visual — the hepatocyte with the three NS doors + the naming ladder + the ribavirin host-door panel + the cycle strip"),
    sv(2, [222], "200–200", "VISUAL_TABLE", "The DRUG/MECHANISM/TOXICITY table (book 200)",
       "The four class cards (NS5A, NS5B, NS3/4A, ribavirin) with the mechanism/toxicity text printing before the drug rosters (the M38 interleaving pattern); the rosters print twice (table + figure boxes).",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[1] the table block — carried verbatim (card reading order VLM-verified)", "note-block"),
    sv(3, [222], "200–200", "VISUAL_TABLE", "The replication-cycle figure's labels and drug placements (book 200)",
       "The figure's stage labels and drug boxes printing interleaved in the text layer (entry, uncoating, translation, replication, assembly, maturation, release; the ribavirin IMP-GMP-GTP strip; the split-spacing nucleus label; the footer splitting around the figure labels).",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[2] the table block — carried verbatim (reading order VLM-verified)", "note-block"),
]
(ROOT / "content/usmle/manifests/hcv-therapy.json").write_text(json.dumps(m39, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/hcv-therapy.json").write_text(
    json.dumps({"topicId": "hcv-therapy", "chapterId": "microbiology", "inventory": inv39,
                "coverageAudit": {"topicId": "hcv-therapy", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The replication-cycle figure (vector line art in the text layer, 0 rasters — VLM confirmed, no photographs) is REDRAWN as the registry visual. The DAA table and the figure's label set are note-block verbatim adaptations. No margin mnemonics exist on the page; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "hcv-therapy":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv39))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: microbiology {done}/39{' — CHAPTER COMPLETE' if done==39 else ''}")
print("M39 manifest + inventory + flip done")
