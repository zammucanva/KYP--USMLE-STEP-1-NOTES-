#!/usr/bin/env python3
"""M32 cell-wall-inhibitors — manifest + inventory + flip (32/39).
Census: p206 and p207 are PURE TEXT (0 rasters — drug-directory cards only);
p208 carries exactly ONE raster (188x188 cmyk jpeg, 150ppi ~1.25 in^2) — the
CLINICAL PHOTOGRAPH of the vancomycin infusion reaction (diffuse red flushing
of the torso), marked with the boxed 'A' (the standalone line-78 'A' of the
text layer); COPYRIGHTED -> described-in-text only, never reproduced (the
E38/E39 clinical-photo precedent). Text quirks documented: the chapter banner
typo MICROCIOLOGY—ANTIMICROCIALS prints on all three pages (raw line 7 each);
'SEC TION II' prints split (p206/p208 line 3; p207 after the banner, line 5);
the margin notes emit at PAGE END in the raw layer (p206: the aminopenicillin
margin 21-23 + coverage line 32-33 mid-page, 'Use naf...' 87 between the indd
footer 85 and the timestamp 89; p207: LAME 16-19, PEcK 36, fox-fur/HENS 38-39,
BBB/ceftriaxone/ceftazidime 41-44, CAST 75-77 after the indd footer 73;
p208: imipenem/ertapenem 41-44 mid-page, vancomycin's resistance content
84-85 AFTER the indd footer 82 — the heading 80 separated from its content by
the footer, the page's physical-order interleave). The source's own margin
typo 'pseudomonaz' (book 185, raw line 44, the ceftazidime note) carried
verbatim in the note-block tables and documented; hyphen-drops: 'crossreactivity'
(p207 line 58), 'penicillinbinding' (p207 line 64; p208 line 49). The
carbapenems mechanism line carries C1-control-prefixed arrows ('\x8e->')
which the normalizer strips."""
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
L = {p: pages[p-1].split("\n") for p in range(206, 209)}
P = {p: norm(pages[p-1]) for p in range(206, 209)}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg-22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E32 = [
    # ── p206 / book 184 — the three penicillin cards ──
    ("Printed book-page number (page identity)", "184", 206),
    ("Page banner trio (the SEC TION split print)", rng(206, 3, 7), 206),
    ("The aminopenicillins card: tier heading + drug line", rng(206, 9, 12), 206),
    ("The aminopenicillins card: MECHANISM block", rng(206, 16, 19), 206),
    ("The aminopenicillins margin note (emitting mid-page, before CLINICAL USE)", rng(206, 21, 23), 206),
    ("The aminopenicillins card: CLINICAL USE block", rng(206, 27, 30), 206),
    ("The aminopenicillins coverage margin note (emitting after ADVERSE EFFECTS)", rng(206, 32, 33), 206),
    ("The aminopenicillins card: ADVERSE EFFECTS block", rng(206, 37, 38), 206),
    ("The aminopenicillins card: MECHANISM OF RESISTANCE block", rng(206, 42, 43), 206),
    ("The anti-staph card: tier heading + drug line", rng(206, 45, 48), 206),
    ("The anti-staph card: MECHANISM block (the bulky R group)", rng(206, 52, 54), 206),
    ("The anti-staph card: CLINICAL USE block", rng(206, 58, 58), 206),
    ("The anti-staph card: ADVERSE EFFECTS block", rng(206, 62, 62), 206),
    ("The anti-staph card: MECHANISM OF RESISTANCE block", rng(206, 66, 67), 206),
    ("The piperacillin card: heading + drug line", rng(206, 69, 71), 206),
    ("The piperacillin card: MECHANISM block", rng(206, 75, 75), 206),
    ("The piperacillin card: CLINICAL USE block", rng(206, 79, 79), 206),
    ("The piperacillin card: ADVERSE EFFECTS block", rng(206, 83, 83), 206),
    ("The indd footer + the anti-staph margin note + the timestamp (the margin note emits BETWEEN the footer and the timestamp — page-end physical order)", rng(206, 85, 89), 206),
    # ── p207 / book 185 — the cephalosporin card + the inhibitor card ──
    ("Page banner trio + printed book-page number", rng(207, 1, 7), 207),
    ("The cephalosporin card: heading + MECHANISM block", rng(207, 9, 14), 207),
    ("The LAME margin block (the source's own exclusion note, emitting before CLINICAL USE)", rng(207, 16, 19), 207),
    ("The cephalosporin card: 1st generation block", rng(207, 23, 26), 207),
    ("The cephalosporin card: 2nd generation block", rng(207, 27, 31), 207),
    ("The cephalosporin card: 3rd generation block", rng(207, 32, 34), 207),
    ("The 1st-generation margin note", rng(207, 36, 36), 207),
    ("The 2nd-generation margin notes (the fox-fur line + HENS PEcK)", rng(207, 38, 39), 207),
    ("The 3rd-generation margin notes (BBB + ceftriaxone anchors + the ceftazidime line carrying the source's own 'pseudomonaz' typo)", rng(207, 41, 44), 207),
    ("The cephalosporin card: 4th generation block", rng(207, 46, 48), 207),
    ("The cephalosporin card: 5th generation block", rng(207, 49, 53), 207),
    ("The cephalosporin card: ADVERSE EFFECTS block (the crossreactivity hyphen-drop)", rng(207, 56, 59), 207),
    ("The cephalosporin card: MECHANISM OF RESISTANCE block (the penicillinbinding hyphen-drop)", rng(207, 63, 64), 207),
    ("The beta-lactamase-inhibitor card (full block)", rng(207, 66, 71), 207),
    ("The indd footer + the CAST margin + the timestamp (the CAST pairings emit after the footer — page-end physical order)", rng(207, 73, 79), 207),
    # ── p208 / book 186 — carbapenems, aztreonam, vancomycin ──
    ("Printed book-page number (page identity)", "186", 208),
    ("Page banner trio (the SEC TION split print)", rng(208, 3, 7), 208),
    ("The carbapenems card: heading + drug line", rng(208, 9, 11), 208),
    ("The carbapenems card: MECHANISM block (the C1-control-prefixed arrows \u008e\u2192 — the normalizer strips them)", rng(208, 15, 20), 208),
    ("The carbapenems card: CLINICAL USE block", rng(208, 24, 29), 208),
    ("The carbapenems card: ADVERSE EFFECTS block", rng(208, 33, 34), 208),
    ("The carbapenems card: MECHANISM OF RESISTANCE block", rng(208, 38, 39), 208),
    ("The carbapenems margin notes (the kill-is-lastin line + the ertapenem-Pseudomonas note, emitting mid-page)", rng(208, 41, 44), 208),
    ("The aztreonam card: heading + MECHANISM block (the penicillinbinding hyphen-drop)", rng(208, 46, 49), 208),
    ("The aztreonam card: CLINICAL USE block", rng(208, 53, 54), 208),
    ("The aztreonam card: ADVERSE EFFECTS block", rng(208, 58, 58), 208),
    ("The vancomycin card: heading + MECHANISM block", rng(208, 60, 65), 208),
    ("The vancomycin card: CLINICAL USE block", rng(208, 69, 70), 208),
    ("The vancomycin card: ADVERSE EFFECTS block + the standalone boxed-A marker line (the line-78 'A' — the clinical photo's marker glyph)", rng(208, 74, 78), 208),
    ("The vancomycin MECHANISM OF RESISTANCE heading + the indd footer + its content + the margin note (the heading 80 separated from its content 84-85 BY the footer 82 — the page's physical-order interleave; the content prints after the footer)", rng(208, 80, 85), 208),
    ("The page timestamp (page identity)", rng(208, 87, 87), 208),
]
for c, q, p in E32:
    e = ev(c, q, p)
    if e["verified"] != "pass": fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"cell-wall-inhibitors: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m32 = {"topicId": "cell-wall-inhibitors", "title": "Cell Wall Inhibitors: Penicillins, Cephalosporins, Carbapenems, Vancomycin",
    "chapterId": "microbiology", "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Antimicrobials", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [206, 207, 208], "bookPages": "184–186"},
    "sourceEvidence": kept, "visualIds": ["beta-lactam-family-map"],
    "mechanismIds": ["beta-lactam-door-logic", "wall-two-doors"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the drug cards; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "tier-ladder-door-synthesis", "summary": "The four routing axes of the wall directory — tier (penicillins by beta-lactamase exposure), ladder (five cephalosporin generations with the fixed 1st-4th exclusion), escort (the four inhibitor bodyguards), and door (the 9-vs-8 split that sets the resistance route) — with the two-independent-escape-hatches reading of MRSA vs VRE.",
         "origin": "outside-first-aid", "rationale": "The source prints the cards as an alphabetical-adjacent directory without a routing system; the tier/ladder/escort/door axes and the escape-hatch comparison are KYP's design.",
         "location": "core.keyIdea + both mechanism captions + the exam callout + patterns + traps + pivots + mnemonics + miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: p206/p207 pure text (0 rasters); p208 one 188x188 cmyk raster — the vancomycin infusion-reaction clinical photograph (boxed-A marker; standalone line-78 'A'), COPYRIGHTED: described-in-text only. Interleave quirks: the margin notes emit at page end (p206 'Use naf...' at 87 between the indd footer 85 and the timestamp 89; p207 CAST at 75-77 after the footer 73; p208 vancomycin's resistance content at 84-85 AFTER the footer 82, its heading 80 separated from its content by the footer). The source's own margin typo 'pseudomonaz' (book 185, line 44) carried verbatim in the note-block tables; hyphen-drops 'crossreactivity' (207:58) and 'penicillinbinding' (207:64; 208:49). The source's own margin mnemonics (HHEELPSS, LAME, PEcK, HENS PEcK, fox-fur, kill-is-lastin, Lack-a-D-Ala, CAST) are carried ONLY inside the verbatim note-block tables as source provenance per the verbatim-table precedent (E38) — omitted from the registry visual and from the KYP memory layer, which carries original mnemonics instead (PLAIN-AMPED-ARMORED-ESCORTED / 1-2-3-4-5 ladder / THE TIP SWAP / NEVER ALONE).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "microbiology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Microbiology — Antimicrobials",
    "topicId": "cell-wall-inhibitors", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"cell-wall-inhibitors-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": [pages], "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv32 = [
    sv(1, 206, "184–184", "VISUAL_TABLE", "The three penicillin cards (book 184)",
       "The printed drug-directory cards: penicillinase-sensitive (aminopenicillins), penicillinase-resistant (anti-staph), piperacillin — with their margin notes. Pure text, 0 rasters.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[1] the table block — carried verbatim per the page-ownership convention (both columns: card fields + margin notes)", "note-block"),
    sv(2, 207, "185–185", "VISUAL_TABLE", "The cephalosporin card (book 185)",
       "The printed five-generation card: mechanism, the five clinical-use generation blocks, adverse effects, resistance — with its margin notes (including the source's own 'pseudomonaz' typo on the ceftazidime line). Pure text, 0 rasters.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[2] the table block — carried verbatim (the generations-ladder panel of the registry visual is a separate KYP-original synthesis of the same facts)", "note-block"),
    sv(3, 207, "185–185", "VISUAL_TABLE", "The beta-lactamase-inhibitor card (book 185)",
       "The printed inhibitor card: clavulanic acid, avibactam, sulbactam, tazobactam + the CAST pairings margin. Pure text, 0 rasters.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[2] the table block (last rows) — carried verbatim", "note-block"),
    sv(4, 208, "186–186", "DERMATOLOGY_PHOTO", "The vancomycin infusion-reaction clinical photograph (book 186)",
       "The page's single raster (188x188 cmyk jpeg, 150ppi): a clinical photograph of diffuse bright red flushing of the torso — the vancomycin infusion reaction. Marked with the boxed 'A' (standalone line-78 'A' in the text layer) linking it to the ADVERSE EFFECTS text.",
       "ORIGINAL_KYP_ADAPTATION", "beta-lactam-family-map", "described-in-text in the registry visual's VANCOMYCIN panel + the note's book-186 table block bracket — a copyrighted patient photograph, never reproduced", "described-in-text"),
    sv(5, 208, "186–186", "VISUAL_TABLE", "The carbapenems, aztreonam, and vancomycin cards (book 186)",
       "The printed last three cards of the directory, with their margin notes; vancomycin's resistance content prints after the indd footer (raw 84-85) — the physical-order interleave documented in the manifest.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[3] the table block — carried verbatim (the A-marker photograph described in the ADVERSE EFFECTS bracket)", "note-block"),
]
(ROOT / "content/usmle/manifests/cell-wall-inhibitors.json").write_text(json.dumps(m32, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/cell-wall-inhibitors.json").write_text(
    json.dumps({"topicId": "cell-wall-inhibitors", "chapterId": "microbiology", "inventory": inv32,
                "coverageAudit": {"topicId": "cell-wall-inhibitors", "textbookVisualCount": 5,
                    "accountedFor": 5, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 5,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The four source card groups are note-block verbatim adaptations (page-ownership convention — the directory continued from M31); the one clinical photograph (the infusion-reaction flushing photo, the boxed-A raster) is described-in-text per the E38/E39 copyrighted-clinical-photo precedent. The registry visual beta-lactam-family-map is a KYP-original synthesis of the directory's facts (no source figure exists to redraw — the generations-ladder and tier panels are original designs). Nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "cell-wall-inhibitors":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv32))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: microbiology {done}/39")
print("M32 manifest + inventory + flip done")
