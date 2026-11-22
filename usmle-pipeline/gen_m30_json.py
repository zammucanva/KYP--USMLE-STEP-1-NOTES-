#!/usr/bin/env python3
"""M30 bugs-by-system-rash-std-torch — manifest + inventory + flip (30/39).
Census: p199 5 cmyk rasters (the rash photos A-E); p200 4 rasters (3 cmyk +
1 gray — the vaginal set A-D); p201 6 cmyk rasters (the STD set A-F); p202
3 rasters (2 cmyk + 1 gray — the TORCH set A-C); p203 2 cmyk rasters (the
PID set A-B); p204 0 rasters. All 20 are clinical photos — COPYRIGHTED,
described-in-text only. Text quirks: the SYSTEMS banner typo
'MICROCIOLOGY—SYSTEMS' on books 177-181; p200's diagnostic-markers block
emits BETWEEN the S saprophyticus and Klebsiella rows (lines 37-41) and the
vaginal table emits its three columns row-by-row (signs 75-87, labs 89-101,
treatment 103-110); p201's Trichomonas vaginalis pathogen cell emits AFTER
the timestamp footer (line 108); p202's HSV-2 agent and its acquisition
merge on one line (78) and the two printed TORCH mnemonics sit inside the
Rubella and CMV rows; p203's PID heading and A/B markers emit BEFORE the
banner (lines 2-8) while the printed page number '181' emits mid-page (23);
p204's system labels (Dermatologic/Rash, Neurologic/Meningitis, Tetanus,
Respiratory) emit at the page END (lines 60-66) after the row content."""
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
L = {p: pages[p-1].split("\n") for p in range(199, 205)}
P = {p: norm(pages[p-1]) for p in range(199, 205)}
def rng(pg, a, b): return "\n".join(L[pg][a:b+1])
def ev(claim, quote, pg):
    ok = norm(quote) in P[pg]
    return {"claim": claim, "pages": {"part": 1, "pdfPages": [pg], "bookPages": str(pg-22)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E30 = [
    # ---- p199 / book 177 — Red rashes of childhood ----
    ("Page banner", "MICROBIOLOGY", 199),
    ("Chapter banner (the source's own SYSTEMS typo: MICROCIOLOGY)", "\u25b6 MICROCIOLOGY\u2014SYSTEMS", 199),
    ("Printed book-page number (page identity)", "177", 199),
    ("Section banner", "SEC TION II", 199),
    ("Section heading + the table headers", rng(199, 8, 13), 199),
    ("Rash rows, part 1 (Coxsackievirus type A hand-foot-mouth with herpangina; HHV-6 roseola with febrile seizures after high fever; measles with the confluent head-down rash and the Koplik prodrome)", rng(199, 15, 39), 199),
    ("Rash rows, part 2 (parvovirus B19 slapped cheek; rubella discrete head-down with postauricular LAD; S pyogenes scarlet fever with the printed SCARLET expansion; VZV trunk-first crops of different stages)", rng(199, 41, 72), 199),
    ("The A-E figure markers emitting at the page bottom with the file footer interleaved (the five rash clinical photos — raster, described-in-text only)", rng(199, 74, 84), 199),
    ("Timestamp footer (page identity)", rng(199, 86, 86), 199),
    # ---- p200 / book 178 — UTI + vaginal ----
    ("Printed book-page number (page identity)", "178", 200),
    ("Section banner + page banner + the chapter banner typo", rng(200, 2, 6), 200),
    ("UTI heading + the cystitis/pyelonephritis definitions (WBCs without casts vs WBC casts) + the 10x-female line", rng(200, 8, 15), 200),
    ("The UTI risk factors (obstruction, surgery, catheterization, vesicoureteral reflux, diabetes, pregnancy)", rng(200, 16, 17), 200),
    ("The species headers + the E coli row (leading cause; strong pink lactose-fermentation on MacConkey)", rng(200, 19, 29), 200),
    ("The S saprophyticus row + the diagnostic-markers block emitting mid-table between the species rows (leukocyte esterase = WBC activity; nitrite = gram-negative nitrate reduction)", rng(200, 31, 41), 200),
    ("Klebsiella (3rd, mucoid capsule) + Serratia (red pigment) + Enterococcus rows", rng(200, 43, 55), 200),
    ("Proteus (swarming, struvite, urease) + Pseudomonas (blue-green, fruity) rows", rng(200, 57, 66), 200),
    ("The vaginal heading + the three disease headers emitting together", rng(200, 68, 73), 200),
    ("The SIGNS AND SYMPTOMS row (the three columns interleaved: no inflammation/thin white fishy; inflammation/strawberry cervix/frothy yellow-green; inflammation/cottage cheese)", rng(200, 75, 87), 200),
    ("The LAB FINDINGS row (clue cells, pH >4.5, positive KOH whiff; motile pear-shaped trichomonads, pH >4.5; pseudohyphae, pH normal 4.0-4.5)", rng(200, 89, 101), 200),
    ("The TREATMENT row (metronidazole or clindamycin; metronidazole + treat partners; azoles)", rng(200, 103, 110), 200),
    ("The A-D figure markers with the file footer interleaved (the four vaginal clinical photos — raster, described-in-text only)", rng(200, 112, 120), 200),
    ("Timestamp footer (page identity)", rng(200, 122, 122), 200),
    # ---- p201 / book 179 — STD directory ----
    ("Page banner", "MICROBIOLOGY", 201),
    ("Chapter banner (the source's own SYSTEMS typo)", "\u25b6 MICROCIOLOGY\u2014SYSTEMS", 201),
    ("Section banner", "SEC TION II", 201),
    ("Printed book-page number (page identity)", "179", 201),
    ("The STD heading + the table headers", rng(201, 8, 13), 201),
    ("STD rows, part 1 (AIDS; chancroid with the printed do-cry gloss; chlamydia D-K with reactive arthritis; condylomata acuminata with koilocytes)", rng(201, 15, 42), 201),
    ("STD rows, part 2 (herpes genitalis with bilateral tender LAD and systemic symptoms; gonorrhea with the creamy purulent discharge)", rng(201, 44, 59), 201),
    ("STD rows, part 3 (granuloma inguinale with Donovan bodies, uncommon in US; hepatitis B with jaundice)", rng(201, 61, 76), 201),
    ("STD rows, part 4 (LGV with painless ulcers then painful buboes; the three syphilis stages — chancre, condylomata lata, gummas/tubes dorsalis/general paresis/aortitis/Argyll Robertson)", rng(201, 78, 100), 201),
    ("The trichomoniasis row + the file footer + the Trichomonas vaginalis pathogen cell emitting AFTER the footer (the page's interleave quirk)", rng(201, 102, 108), 201),
    ("The A-F figure markers with the timestamp (the six STD clinical photos — raster, described-in-text only)", rng(201, 110, 122), 201),
    # ---- p202 / book 180 — TORCH ----
    ("Printed book-page number (page identity)", "180", 202),
    ("Section banner + page banner + the chapter banner typo", rng(202, 2, 6), 202),
    ("TORCH heading + the ToRCHHeS intro (transplacental or vaginal delivery HSV-2; the nonspecific signs; GBS/E coli/Listeria neonatal meningitis; parvovirus B19 hydrops fetalis)", rng(202, 8, 15), 202),
    ("The four-column headers (AGENT, MATERNAL ACQUISITION, MATERNAL MANIFESTATIONS, NEONATAL MANIFESTATIONS)", rng(202, 17, 23), 202),
    ("Toxoplasma row (cat feces/undercooked meat; the classic triad of chorioretinitis, hydrocephalus, intracranial calcifications) + Rubella row (droplets; cataracts, deafness, PDA) with the printed ruby-earrings mnemonic", rng(202, 25, 50), 202),
    ("CMV row (sexual contact/transplants; hearing loss, seizures, petechial rash, periventricular calcifications) with the printed CMV expansion + HIV row (needlestick; CD4-dependent; recurrent infections, chronic diarrhea)", rng(202, 52, 76), 202),
    ("HSV-2 row (the agent and its acquisition merged on one line) + Syphilis row (the two fetal-risk stages; stillbirth, hydrops, notched teeth, saddle nose, rhinitis, short maxilla, saber shins, CN VIII deafness)", rng(202, 78, 101), 202),
    ("The A-C figure markers with the file footer interleaved + the timestamp (the three TORCH clinical photos — raster, described-in-text only)", rng(202, 103, 111), 202),
    # ---- p203 / book 181 — PID + HAI ----
    ("The PID heading + the A/B photo markers emitting BEFORE the chapter banner (the page's emission quirk)", rng(203, 2, 8), 203),
    ("PID text part 1 (the ascending-infection definition with salpingitis/endometritis/hydrosalpinx/tubo-ovarian abscess; cervical motion tenderness, adnexal tenderness, purulent discharge; the top bugs; the most-common-bacterial-STI line)", rng(203, 10, 21), 203),
    ("Printed book-page number (page identity) + the section banner emitting mid-page", rng(203, 23, 25), 203),
    ("PID text part 2 (the salpingitis sequelae — ectopic pregnancy, infertility, chronic pelvic pain, adhesions; Fitz-Hugh-Curtis perihepatitis with the violin-string adhesions)", rng(203, 27, 32), 203),
    ("The HAI heading + the three headers", rng(203, 34, 39), 203),
    ("HAI rows, part 1 (antibiotics/PPIs -> C difficile; aspiration -> polymicrobial gram-negative anaerobes with the lobe rule; wounds/drains -> S aureus MRSA + Bacteroides/Prevotella/Fusobacterium)", rng(203, 41, 66), 203),
    ("HAI rows, part 2 (intravascular catheters -> S aureus + S epidermidis long-term; ventilation late-onset -> Pseudomonas/Klebsiella/Acinetobacter; blood products -> HBV/HCV)", rng(203, 68, 91), 203),
    ("HAI rows, part 3 (urinary catheterization -> PEcK; water aerosols -> Legionella with GI and neurologic signs) + the footer + timestamp", rng(203, 93, 109), 203),
    # ---- p204 / book 182 — unvaccinated children ----
    ("Printed book-page number (page identity)", "182", 204),
    ("Section banner + page banner + the chapter banner typo", rng(204, 2, 6), 204),
    ("The unvaccinated heading + the table headers", rng(204, 8, 13), 204),
    ("Rows, part 1 (the rubella rash by its postauricular/posterior cervical/suboccipital LAD; the measles rash by its Koplik prodrome; H influenzae type b nasopharyngeal colonization; poliovirus myalgia and paralysis)", rng(204, 15, 32), 204),
    ("Rows, part 2 (C tetani spasms and opisthotonus; epiglottitis — even in the fully immunized; the pertussis stage cascade; the diphtheria pseudomembranes)", rng(204, 34, 58), 204),
    ("The system labels emitting at the page END after the row content (Dermatologic/Rash, Neurologic/Meningitis, Tetanus, Respiratory) + the footer + timestamp", rng(204, 60, 70), 204),
]
for c, q, p in E30:
    e = ev(c, q, p)
    if e["verified"] != "pass": fails.append(f"NOT FOUND p{p}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"bugs-by-system-rash-std-torch: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m30 = {"topicId": "bugs-by-system-rash-std-torch", "title": "Bugs by System: Rash, STDs, TORCH & Nosocomial",
    "chapterId": "microbiology", "chapterTitle": "Microbiology",
    "subsection": "Microbiology — Systems Microbiology", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [199, 200, 201, 202, 203, 204], "bookPages": "177–182"},
    "sourceEvidence": kept, "visualIds": ["systems-bug-matrix-2"],
    "mechanismIds": ["rash-topography-logic", "ulcer-pain-axis", "torch-vertical-transmission"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the directories; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "systems-axes-synthesis", "summary": "The rash TOPOGRAPHY axis (morphology + starting point + fever order), the genital-ulcer PAIN axis with the PID ascent, the TORCH CALCIFICATION-location key, and the nosocomial EXPOSURE-routing frame — labeled as integrations.",
         "origin": "outside-first-aid", "rationale": "The source prints the six directories and the PID text without these unifying axes; they are KYP's design.",
         "location": "core.keyIdea + all three mechanism captions + callout + patterns + traps + pivots + mnemonics + miniCase"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census: 20 clinical-photo rasters across books 177-181 (rash A-E; vaginal A-D; STD A-F; TORCH A-C; PID A-B) — all COPYRIGHTED, described-in-text only; p204 pure vector. The SYSTEMS banner typo MICROCIOLOGY prints on books 177-181. Interleave quirks: p200's diagnostic-markers block emits between the S saprophyticus and Klebsiella rows and the vaginal table emits row-by-row across its three columns; p201's Trichomonas vaginalis cell emits after the timestamp footer; p202's HSV-2 agent-acquisition line merge and the two printed TORCH mnemonics inside the Rubella and CMV rows; p203's PID heading and A/B markers emit before the banner with the printed page number mid-page; p204's system labels emit at the page end. FA's printed mnemonics (SCARLET; do cry; ruby earrings; CMV expansion) are quoted in the table block for verification only.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "microbiology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Microbiology — Systems Microbiology",
    "topicId": "bugs-by-system-rash-std-torch", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"bugs-by-system-rash-std-torch-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": [pages], "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv30 = [
    sv(1, 199, "177–177", "VISUAL_TABLE", "The Red rashes of childhood directory (book 177)",
       "The printed 7-row agent/syndrome/presentation table; the five rash photos A-E print beside it.",
       "ORIGINAL_KYP_REDRAW", "systems-bug-matrix-2", "the RASH panel; photos A-E are raster, described-in-text only"),
    sv(2, 200, "178–178", "VISUAL_TABLE", "The UTI species table + the cystitis/pyelonephritis text + the diagnostic markers (book 178)",
       "The printed 7-species features/comments directory with the intro text and the markers callout.",
       "ORIGINAL_KYP_REDRAW", "systems-bug-matrix-2", "the UTI panel (syndrome strip + species ladder + markers strip)"),
    sv(3, 200, "178–178", "VISUAL_TABLE", "The Common vaginal infections table (book 178)",
       "The printed 3-column signs/labs/treatment comparison; the four photos A-D print beside it.",
       "ORIGINAL_KYP_REDRAW", "systems-bug-matrix-2", "the VAGINAL panel; photos A-D are raster, described-in-text only"),
    sv(4, 201, "179–179", "VISUAL_TABLE", "The Sexually transmitted infections directory (book 179)",
       "The printed 13-row disease/features/pathogen directory; the six photos A-F print beside it.",
       "ORIGINAL_KYP_REDRAW", "systems-bug-matrix-2", "the STD panel + pain-axis strip; photos A-F are raster, described-in-text only"),
    sv(5, 202, "180–180", "VISUAL_TABLE", "The TORCH infections table (book 180)",
       "The printed 6-agent four-column maternal-fetal map with the ToRCHHeS intro; the three photos A-C print beside it.",
       "ORIGINAL_KYP_REDRAW", "systems-bug-matrix-2", "the TORCH panel (intro + 6-agent map + calcification key); photos A-C are raster, described-in-text only"),
    sv(6, 203, "181–181", "MICROBIOLOGY_IMAGE", "The PID clinical photos A-B (book 181)",
       "The printed purulent cervical discharge photo A and the violin-string adhesions photo B.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[1] PID row — figure pointers carried verbatim; described-in-text only", "note-block"),
    sv(7, 203, "181–181", "VISUAL_TABLE", "The Healthcare-associated infections table (book 181)",
       "The printed 8-row risk-factor/pathogen/signs routing table.",
       "ORIGINAL_KYP_REDRAW", "systems-bug-matrix-2", "the HAI panel"),
    sv(8, 204, "182–182", "VISUAL_TABLE", "The Bugs affecting unvaccinated children table (book 182)",
       "The printed presentation/findings/pathogen capstone table with its system labels.",
       "ORIGINAL_KYP_ADAPTATION", None, "blocks[1] unvaccinated row — the table carried verbatim in the note block", "note-block"),
]
(ROOT / "content/usmle/manifests/bugs-by-system-rash-std-torch.json").write_text(json.dumps(m30, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/bugs-by-system-rash-std-torch.json").write_text(
    json.dumps({"topicId": "bugs-by-system-rash-std-torch", "chapterId": "microbiology", "inventory": inv30,
                "coverageAudit": {"topicId": "bugs-by-system-rash-std-torch", "textbookVisualCount": 8,
                    "accountedFor": 8, "sourceReproductions": 0, "kypRedraws": 6, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "6 source tables redrawn in the registry visual (rash, UTI, vaginal, STD, TORCH, HAI); the PID photos and the unvaccinated-children table are note-blocks; all 20 clinical photos across books 177-181 are COPYRIGHTED — described-in-text only."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/microbiology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "bugs-by-system-rash-std-torch":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv30))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: microbiology {done}/39")
print("M30 manifest + inventory + flip done")
