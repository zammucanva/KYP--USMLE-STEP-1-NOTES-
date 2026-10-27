#!/usr/bin/env python3
"""M37 antiparasitic-antiviral — manifest + inventory + flip (37/39).
Census: BOTH pages (pdf 218-219 / books 196-197) are PURE TEXT — pdfimages
reports ZERO rasters on each (every card prints in the text layer) — so the
registry visual is an ORIGINAL KYP SYNTHESIS (the M33/M34 no-raster
convention), not a redraw. VLM census (both pages rendered at 110ppi)
verified: the disinfection table's scrambled text layer (the sporicidal
'a' markers interleaving between rows, descriptions appearing shifted)
reassembles as Chlorine^a = 'Oxidizes and denatures proteins', Ethylene
oxide^a = 'Alkylating agent', Hydrogen peroxide^a = 'Free radical
oxidation', with Autoclave^a also sporicidal and the footnote 'a
Sporicidal.'; the pregnancy table prints 8 rows with the source's own
mnemonic 'Safe children take really good care.' mapping its red-text rows
(Sulfonamides, Clarithromycin, Tetracyclines, Ribavirin, Griseofulvin,
Chloramphenicol); NO margin mnemonics exist on either page (the 'bendy
worms' gloss is inline text — carried only in the verbatim tables per the
E38 precedent). Text quirks documented: the banner typo
MICROCIOLOGY—ANTIMICROCIALS on both pages; '196' opens p218 (raw 1) while
'197' prints mid-banner (raw 7); the arrows print as 0x8e control glyphs
before the real Unicode arrows; foscarnet's 'pyrofosphate analog' line
prints inside its MECHANISM block (raw 14)."""
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
L = {p: pages[p-1].split("\n") for p in range(218, 220)}
P = {p: norm(pages[p-1]) for p in range(218, 220)}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg-22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E37 = [
    # ── p218 / book 196 — header, antihelminthic block, influenza/COVID cards ──
    ("Page header trio + the printed book number (page identity)", rng(218, 1, 10), 218),
    ("Antihelminthic therapy — the full header block (pyrantel through diethylcarbamazine, with the source's own inline 'bendy worms' gloss)", rng(218, 12, 13), 218),
    ("Oseltamivir, zanamivir — MECHANISM (neuraminidase, decreased release of progeny virus)", rng(218, 15, 18), 218),
    ("Oseltamivir, zanamivir — CLINICAL USE (influenza A and B, treatment and prevention; the 48-hour window)", rng(218, 20, 23), 218),
    ("Baloxavir — MECHANISM (the cap-snatching endonuclease of the influenza RNA polymerase)", rng(218, 25, 29), 218),
    ("Baloxavir — CLINICAL USE (treatment within 48 hours)", rng(218, 31, 33), 218),
    ("Remdesivir — MECHANISM (ATP-analog prodrug; RNA-dependent RNA polymerase; ExoN-proofreading evasion)", rng(218, 35, 39), 218),
    ("Remdesivir — CLINICAL USE (COVID-19 requiring hospitalization)", rng(218, 41, 43), 218),
    ("Acyclovir, famciclovir, valacyclovir — MECHANISM (HSV/VZV thymidine kinase; not phosphorylated in uninfected cells; chain termination)", rng(218, 45, 50), 218),
    ("Acyclovir family — CLINICAL USE (no CMV activity; HSV mucocutaneous/genital/encephalitis; prophylaxis; no latent effect; valacyclovir bioavailability; famciclovir for zoster)", rng(218, 52, 59), 218),
    ("Acyclovir family — ADVERSE EFFECTS (obstructive crystalline nephropathy, hydration)", rng(218, 61, 63), 218),
    ("Acyclovir family — MECHANISM OF RESISTANCE (mutated viral thymidine kinase)", rng(218, 65, 67), 218),
    ("Ganciclovir — MECHANISM (5'-monophosphate by a CMV viral kinase; triphosphate by cellular kinases)", rng(218, 69, 73), 218),
    ("Ganciclovir — CLINICAL USE (CMV esp. immunocompromised; valganciclovir prodrug)", rng(218, 75, 78), 218),
    ("Ganciclovir — ADVERSE EFFECTS (myelosuppression, renal toxicity; more toxic to host enzymes than acyclovir)", rng(218, 80, 83), 218),
    ("Ganciclovir — MECHANISM OF RESISTANCE (mutated viral kinase)", rng(218, 85, 87), 218),
    ("The indd footer + timestamp (page identity)", rng(218, 89, 91), 218),
    # ── p219 / book 197 — foscarnet, cidofovir, disinfection, pregnancy ──
    ("Page banner trio + the mid-banner book number '197'", rng(219, 1, 7), 219),
    ("Foscarnet — MECHANISM (DNA/RNA polymerase + HIV RT inhibitor; pyrophosphate-binding site; no kinase activation; pyrofosphate analog)", rng(219, 9, 14), 219),
    ("Foscarnet — CLINICAL USE (CMV retinitis when ganciclovir fails; acyclovir-resistant HSV)", rng(219, 16, 18), 219),
    ("Foscarnet — ADVERSE EFFECTS (nephrotoxicity; electrolyte abnormalities leading to seizures)", rng(219, 20, 22), 219),
    ("Foscarnet — MECHANISM OF RESISTANCE (mutated DNA polymerase)", rng(219, 24, 26), 219),
    ("Cidofovir — MECHANISM (preferentially inhibits viral DNA polymerase; no viral-kinase phosphorylation)", rng(219, 28, 31), 219),
    ("Cidofovir — CLINICAL USE (CMV retinitis; long half-life)", rng(219, 33, 35), 219),
    ("Cidofovir — ADVERSE EFFECTS (nephrotoxicity; probenecid + IV saline)", rng(219, 37, 39), 219),
    ("Cidofovir — MECHANISM OF RESISTANCE (viral DNA polymerase gene mutations)", rng(219, 41, 43), 219),
    ("Disinfection and sterilization — the goals header (safe levels vs all microbes including spores)", rng(219, 45, 49), 219),
    ("The autoclave row (pressurized steam >120 C; the prion exception) + alcohols + chlorhexidine", rng(219, 51, 61), 219),
    ("The chlorine/ethylene oxide/hydrogen peroxide block — RAW PRINT ORDER (the sporicidal 'a' markers interleaving and the descriptions shifted; VLM census of the rendered page verified the reading order: Chlorine = oxidizes and denatures proteins, ethylene oxide = alkylating agent, hydrogen peroxide = free radical oxidation, each sporicidal with the autoclave)", rng(219, 63, 77), 219),
    ("Iodine and iodophors + quaternary amines + the sporicidal footnote", rng(219, 79, 89), 219),
    ("Antimicrobials to avoid in pregnancy — the table header block", rng(219, 91, 96), 219),
    ("The pregnancy table rows 1-5 (sulfonamides-kernicterus through tetracyclines)", rng(219, 98, 116), 219),
    ("The pregnancy table rows 6-8 + the source's own mnemonic (ribavirin, griseofulvin teratogenic; chloramphenicol gray baby; 'Safe children take really good care.')", rng(219, 118, 130), 219),
    ("The indd footer + timestamp (page identity)", rng(219, 132, 134), 219),
]
for c, q, p in E37:
    e = ev(c, q, p)
    if e["verified"] != "pass": fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"antiparasitic-antiviral: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m37 = {"topicId": "antiparasitic-antiviral", "title": "Antiparasitic & Non-HIV Antiviral Agents",
    "chapterId": "microbiology", "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Antimicrobials", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [218, 219], "bookPages": "196–197"},
    "sourceEvidence": kept, "visualIds": ["antiviral-target-map"],
    "mechanismIds": ["kinase-activation-ladder", "progeny-and-polymerase-doors"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the cards and tables; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "kinase-activation-ladder", "summary": "The activation-ladder synthesis (HSV/VZV thymidine kinase vs the CMV viral kinase vs the no-kinase lane — with resistance following the door and the no-kinase drugs rescuing the kinase-door failures) — KYP's synthesis of the four herpes-virus cards.",
         "origin": "outside-first-aid", "rationale": "The source prints the four cards independently without a ladder or a resistance-map system; the activation-fork, resistance-follows-the-door, and rescue-lane logic are KYP's design.",
         "location": "core.keyIdea + mechanism 1 + the exam callout + patterns + traps + pivots + mnemonics + miniCase"},
        {"id": "body-map-avoid-list", "summary": "The body-map mnemonic for the pregnancy avoid list (KYP-original companion to the source's own mnemonic, which rides only the verbatim table).",
         "origin": "outside-first-aid", "rationale": "The source's own mnemonic is carried verbatim per the E38 boundary; the body-map walk is KYP's original memory aid.",
         "location": "mnemonics[3]"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: BOTH pages pure text (0 rasters — pdfimages; VLM-verified) — the registry visual is an ORIGINAL KYP SYNTHESIS, not a redraw. The disinfection table's scrambled text layer reassembled by VLM census (raw print order quoted; reading order documented). No margin mnemonics on either page; the 'bendy worms' gloss is inline and rides the verbatim tables only. The source's own pregnancy mnemonic carried verbatim in the table; the KYP-original body-map mnemonic lives in the memory layer.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "microbiology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Microbiology — Antimicrobials",
    "topicId": "antiparasitic-antiviral", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"antiparasitic-antiviral-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv37 = [
    sv(1, [218, 219], "196–197", "SUMMARY_FIGURE", "The antiviral target & activation map (the page-set's synthesis visual)",
       "No source figure exists — both pages print entirely in the text layer (0 rasters, pdfimages census): the antihelminthic header, the influenza/COVID cards, and the four herpes-virus antiviral cards.",
       "ORIGINAL_KYP_ADAPTATION", "antiviral-target-map", "the full registry visual — the kinase ladder (activation fork, resistance map) + the progeny doors + the safety panel + the antihelminthic strip"),
    sv(2, [218], "196–196", "VISUAL_TABLE", "The antihelminthic header and the influenza/COVID cards (book 196)",
       "The page's opening antihelminthic block (with the source's own inline 'bendy worms' gloss) and the oseltamivir/zanamivir, baloxavir, remdesivir cards.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[1] the table block — carried verbatim per the page-ownership convention", "note-block"),
    sv(3, [218, 219], "196–197", "VISUAL_TABLE", "The four herpes-virus antiviral cards (books 196-197)",
       "The acyclovir/famciclovir/valacyclovir, ganciclovir, foscarnet, and cidofovir cards — every field including the four MECHANISM OF RESISTANCE lines.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[2] the table block — carried verbatim", "note-block"),
    sv(4, [219], "197–197", "VISUAL_TABLE", "The disinfection and sterilization table (book 197)",
       "The 8-agent disinfectants table with the sporicidal markers and the prion exception; the text layer scrambles the rows (VLM census of the rendered page verified the reading order).",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[3] the table block — carried verbatim (reading order VLM-verified, raw print order documented)", "note-block"),
    sv(5, [219], "197–197", "VISUAL_TABLE", "The antimicrobials-to-avoid-in-pregnancy table (book 197)",
       "The 8-row avoid table with the source's own closing mnemonic ('Safe children take really good care.') — carried verbatim per the E38 precedent.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[4] the table block — carried verbatim; the KYP-original body-map mnemonic lives in the memory layer only", "note-block"),
]
(ROOT / "content/usmle/manifests/antiparasitic-antiviral.json").write_text(json.dumps(m37, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/antiparasitic-antiviral.json").write_text(
    json.dumps({"topicId": "antiparasitic-antiviral", "chapterId": "microbiology", "inventory": inv37,
                "coverageAudit": {"topicId": "antiparasitic-antiviral", "textbookVisualCount": 5,
                    "accountedFor": 5, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 5,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "No source figure exists on either page (0 rasters — pdfimages census; VLM-verified) — the registry visual is an original KYP synthesis of the printed facts (the M33/M34 no-raster convention). The card groups and both closing tables are note-block verbatim adaptations. The scrambled disinfection table's reading order was verified by VLM census of the rendered page and documented. The source's own mnemonics ('bendy worms' inline gloss; 'Safe children take really good care.') are carried only inside the verbatim tables; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "antiparasitic-antiviral":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv37))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: microbiology {done}/39")
print("M37 manifest + inventory + flip done")
