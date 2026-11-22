#!/usr/bin/env python3
"""E16 metabolic-fuel-use — manifest + visual inventory + chapter flip.

Generates:
  content/usmle/manifests/metabolic-fuel-use.json        (machine-verified evidence)
  content/usmle/visual-inventory/metabolic-fuel-use.json (3 sv, corrected from seed)
  content/usmle/chapters/biochemistry.json               (status -> complete, 3 final sv)

Every evidence quote is verified against the part1 text layer (page 111,
book 89) with the same normalization the TS pipeline uses. Hard floor:
quotes >= 3 chars. Fails loudly on any unverified quote.
"""
import json
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
PART1 = CACHE / "part1.txt"

def norm(s: str) -> str:
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()

pages = PART1.read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "":
    pages.pop()
page111 = norm(pages[110])  # pdf page 111 = book 89

PAGES = {"part": 1, "pdfPages": [111], "bookPages": "89"}

def ev(claim: str, quote: str) -> dict:
    return {
        "claim": claim,
        "pages": PAGES,
        "quote": quote,
        "verified": "pass" if norm(quote) in page111 else "FAIL",
        "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)",
    }

EVIDENCE = [
    ev("Section heading", "Metabolic fuel use"),
    ev("Exercise graph y-axis label", "% Maximal energy by source"),
    ev("Exercise graph y-axis top tick", "100%"),
    ev("Exercise graph x-axis tick", "2 sec"),
    ev("Exercise graph x-axis tick", "10 sec"),
    ev("Exercise graph x-axis tick", "1 min"),
    ev("Exercise graph x-axis tick", "2 hr"),
    ev("Exercise graph x-axis label", "Duration of exercise"),
    ev("Exercise graph legend entry", "Stored ATP"),
    ev("Exercise graph legend entry", "Creatine phosphate"),
    ev("Exercise graph legend entry", "Anaerobic metabolism"),
    ev("Exercise graph legend entry", "Aerobic metabolism"),
    ev("Exercise graph legend entry", "Overall performance"),
    ev("Starvation graph y-axis label", "Stored energy (kJ)"),
    ev("Starvation graph x-axis label", "Weeks of starvation"),
    ev("Starvation graph curve label", "Protein"),
    ev("Starvation graph curve label", "Fat"),
    ev("Starvation graph curve label", "Carbohydrate"),
    ev("States table heading", "Fasting and starvation"),
    ev("States table priorities statement", "Priorities are to supply sufficient glucose to the brain and RBCs and to preserve protein."),
    ev("States table row heading", "Fed state (after\nmeals)"),
    ev("Fed state metabolism", "Glycolysis and aerobic respiration."),
    ev("Fed state hormonal note", "Insulin stimulates triglyceride (lipid) and glycogen (carbohydrate) storage alongside protein synthesis."),
    ev("States table row heading", "Fasting (between\nmeals)"),
    ev("Fasting state metabolism", "Hepatic glycogenolysis (major); hepatic gluconeogenesis, adipose release of FFA (minor)."),
    ev("Fasting state hormonal note", "Glucagon and epinephrine stimulate use of fuel reserves."),
    ev("States table row heading", "Starvation days 1-3"),
    ev("Starvation days 1-3 maintenance statement", "Blood glucose levels maintained by:"),
    ev("Starvation days 1-3 operation", "Hepatic glycogenolysis"),
    ev("Starvation days 1-3 operation", "Adipose release of FFA"),
    ev("Starvation days 1-3 operation", "Muscle and liver, which shift fuel use from\n glucose to FFA"),
    ev("Starvation days 1-3 gluconeogenesis substrates (printed 'propionyl-CoA'; text layer drops the soft hyphen to 'propionylCoA')", "Hepatic gluconeogenesis from peripheral\n tissue lactate and alanine, and from\n adipose tissue glycerol and propionylCoA"),
    ev("Odd-chain FFA gluconeogenesis exception", "(from odd-chain FFA—the only\n triacylglycerol component that contributes\n to gluconeogenesis)"),
    ev("Glycogen depletion timing", "Glycogen reserves depleted after day 1."),
    ev("RBC ketone limitation", "RBCs lack mitochondria and therefore cannot\n use ketone bodies."),
    ev("States table row heading", "Starvation after\nday 3"),
    ev("After day 3 brain fuel", "Adipose stores (ketone bodies become the main\n source of energy for the brain)."),
    ev("Terminal event of starvation", "After these are depleted, vital protein\ndegradation accelerates, leading to organ\nfailure and death."),
    ev("Survival time determinant", "Amount of excess stores determines survival\ntime."),
    ev("Caloric density triplet (carb/protein)", "1g carb/protein = 4 kcal"),
    ev("Caloric density triplet (alcohol)", "1g alcohol = 7 kcal"),
    ev("Caloric density triplet (fatty acid)", "1g fatty acid = 9 kcal"),
    ev("Caloric density mnemonic", "(# letters = # kcal)"),
]

# hard floor + verification
failures = []
for e in EVIDENCE:
    if len(e["quote"].strip()) < 3:
        failures.append(f"sub-3-char quote dropped: {e['quote']!r} ({e['claim']})")
    elif e["verified"] != "pass":
        failures.append(f"NOT FOUND on page: {e['quote']!r} ({e['claim']})")
if failures:
    print("EVIDENCE FAILURES:")
    for f in failures:
        print("  ✗", f)
    sys.exit(1)

print(f"evidence: {len(EVIDENCE)}/{len(EVIDENCE)} verified on part1 pdf p111 (book 89)")

QA = {g: "pass" for g in [
    "sourceVerified", "contentComplete", "miniCaseConsistent", "kypExtensionsTraceable",
    "mnemonicQuality", "visualsPaint", "visualCoverage", "mechanismRender", "lightMode",
    "darkMode", "mobile", "desktop", "consoleClean", "captionsReadable", "trackerSynced",
]}
STAGES = {s: "pass" for s in [
    "sourceLocated", "chapterMapped", "subsectionMapped", "topicScoped", "evidencePinned",
    "noteAuthored", "visualsAuthored", "mechanismAuthored", "clinicalAuthored",
    "pivotsAuthored", "trapsAuthored", "mnemonicAuthored", "rapidReviewAuthored",
    "relatedAuthored", "qaPassed", "trackerSynced",
]}

manifest = {
    "topicId": "metabolic-fuel-use",
    "title": "Metabolic Fuel Use & Starvation",
    "chapterId": "biochemistry",
    "chapterTitle": "Biochemistry",
    "subsection": "Metabolism — Fuel Use & Starvation",
    "part": 1,
    "sourcePages": PAGES,
    "sourceEvidence": EVIDENCE,
    "visualIds": ["exercise-fuel-systems", "starvation-energy-stores"],
    "mechanismIds": ["exercise-fuel-handoff", "starvation-fuel-escalation"],
    "kypExtensions": [
        {
            "id": "usmle-attack-layer",
            "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
            "origin": "outside-first-aid",
            "rationale": "First Aid supplies the graphs and the states table; the USMLE question attack structure (stem patterns, traps, look-alike pivots, mini-case) is a KYP design that does not exist in the source.",
            "location": "usmle section (patterns, traps, pivots, miniCase) + recall/rapidReview",
        },
        {
            "id": "two-fuel-clocks-model",
            "summary": "Reading the page as two fuel clocks — the exercise relay (ATP → CP → anaerobic → aerobic) and the starvation escalation ladder (glycogen → gluconeogenesis + FFA shift → ketones → protein terminal event).",
            "origin": "outside-first-aid",
            "rationale": "The source presents a graph pair and a states table side by side; unifying them as one exercise clock and one starvation clock governed by the printed priorities (brain/RBC glucose, protein preservation) is KYP's integrative model.",
            "location": "core.keyIdea + mechanisms (exercise-fuel-handoff, starvation-fuel-escalation) + mnemonics 2-3",
        },
    ],
    "mnemonicStatus": "authored",
    "qa": QA,
    "stages": STAGES,
    "productionStatus": "chapter-complete",
    "notes": "Seed-vs-source correction (documented, not silent): the seeded inventory had 2 sv (a merged 'starvation-fuel-timeline' and an 'organ fuel preference table' not present on p. 89); the printed page carries two separately numbered figures (7 exercise graph, 8 starvation stores graph) plus the fasting/starvation states table — final inventory = 3 sv. Text-layer artifacts handled: 'propionylCoA' soft-hyphen drop (printed propionyl-CoA); invisible InDesign leftovers not visible in print and not reproduced (duplicated right-axis '100% / % Maximal energy by source', stray '2 sec', duplicated top-left 'Protein/Fat/3-8/[W]eeks of starvation' cluster) — confirmed invisible by 4 independent VLM passes + right-edge 3x crop. kcal mnemonic text box (upper right) is note content (mnemonic + callout block), not a figure — per E15 precedent for text callouts.",
    "updatedAt": str(date.today()),
}

inv_path = ROOT / "content/usmle/visual-inventory/metabolic-fuel-use.json"
inventory = {
    "topicId": "metabolic-fuel-use",
    "chapterId": "biochemistry",
    "inventory": [
        {
            "visualId": "metabolic-fuel-use-sv1",
            "sourceBook": "First Aid for the USMLE Step 1 2026",
            "sourcePages": PAGES,
            "chapterId": "biochemistry",
            "visualType": "TIMELINE",
            "visualPurpose": "Fuel-source dominance across duration of exercise",
            "sourceFigureDescription": "Fig 7: % maximal energy by source (y, 0 to 100%) vs duration of exercise (x: 2 sec, 10 sec, 1 min, 2 hr) — five curves with legend: stored ATP (starts 100%, spent within seconds), creatine phosphate (peaks between 2 and 10 sec), anaerobic metabolism (peaks near 1 min), aerobic metabolism (rises continuously, dominant after ~1 min), overall performance (100% at start, flat to ~10 sec, declines to low plateau by 2 hr).",
            "requiredInKYP": True,
            "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
            "subsection": "Metabolism — Fuel Use & Starvation",
            "topicId": "metabolic-fuel-use",
            "implementationType": "ORIGINAL_KYP_REDRAW",
            "kypVisualId": "exercise-fuel-systems",
            "kypImplementation": "registry-visual",
            "qaStatus": "passed",
        },
        {
            "visualId": "metabolic-fuel-use-sv2",
            "sourceBook": "First Aid for the USMLE Step 1 2026",
            "sourcePages": PAGES,
            "chapterId": "biochemistry",
            "visualType": "TIMELINE",
            "visualPurpose": "Stored energy decline across weeks of starvation",
            "sourceFigureDescription": "Fig 8: stored energy (kJ) (y, ticks 12, 10, 8, 6, 4, 2, 0) vs weeks of starvation (x, 0-8) — three solid curves: protein (starts 12, slow decline accelerating after week 6 to ~5 at week 8), fat (starts 12, near-linear decline to ~1 at week 8), carbohydrate (starts ~0.5, at zero within week 1). Invisible text-layer artifacts present (duplicated right-axis '100% / % Maximal energy by source', stray '2 sec') — InDesign leftovers, not visible in print.",
            "requiredInKYP": True,
            "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
            "subsection": "Metabolism — Fuel Use & Starvation",
            "topicId": "metabolic-fuel-use",
            "implementationType": "ORIGINAL_KYP_REDRAW",
            "kypVisualId": "starvation-energy-stores",
            "kypImplementation": "registry-visual",
            "qaStatus": "passed",
        },
        {
            "visualId": "metabolic-fuel-use-sv3",
            "sourceBook": "First Aid for the USMLE Step 1 2026",
            "sourcePages": PAGES,
            "chapterId": "biochemistry",
            "visualType": "VISUAL_TABLE",
            "visualPurpose": "Fed/fasting/starvation states with hormonal drivers",
            "sourceFigureDescription": "The states table: priorities banner (supply sufficient glucose to the brain and RBCs and preserve protein); fed state (glycolysis + aerobic respiration; insulin stores TG/glycogen + protein synthesis); fasting (hepatic glycogenolysis major, GNG + adipose FFA minor; glucagon/epinephrine); starvation days 1-3 (glycogenolysis, adipose FFA, glucose-to-FFA shift, GNG from lactate/alanine/glycerol/propionyl-CoA from odd-chain FFA; glycogen depleted after day 1; RBCs lack mitochondria); starvation after day 3 (adipose stores, ketones main brain source; depleted stores → vital protein degradation → organ failure and death; excess stores determine survival time).",
            "requiredInKYP": True,
            "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
            "subsection": "Metabolism — Fuel Use & Starvation",
            "topicId": "metabolic-fuel-use",
            "implementationType": "ORIGINAL_KYP_ADAPTATION",
            "kypVisualId": None,
            "kypImplementation": "note-block",
            "kypLocation": "blocks[2] — 'Fasting and starvation states — verbatim' table block",
            "qaStatus": "passed",
        },
    ],
    "coverageAudit": {
        "topicId": "metabolic-fuel-use",
        "textbookVisualCount": 3,
        "accountedFor": 3,
        "sourceReproductions": 0,
        "kypRedraws": 2,
        "kypOriginals": 1,
        "unresolved": 0,
        "omitted": 0,
        "omissionReasons": [],
        "complete": True,
    },
    "notes": "Seed correction documented in manifest.notes (2 seeded sv -> 3 final sv matching the printed page: two separately numbered graphs + the states table). The kcal mnemonic text box is note content per the text-callout precedent.",
}

(manifest_dir := ROOT / "content/usmle/manifests").mkdir(parents=True, exist_ok=True)
(ROOT / "content/usmle/manifests/metabolic-fuel-use.json").write_text(
    json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
inv_path.write_text(json.dumps(inventory, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("wrote manifest + visual-inventory")

# chapter flip
ch_path = ROOT / "content/usmle/chapters/biochemistry.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "metabolic-fuel-use":
        t["status"] = "complete"
        t["textbookVisuals"] = [v for v in inventory["inventory"]]
        # carry the chapter-file shape used by completed topics
        for v, src in zip(t["textbookVisuals"], inventory["inventory"]):
            v["sourceBook"] = "First Aid for the USMLE Step 1 2026"
            v["productionStatus"] = "complete"
            v["plannedKypVisualId"] = src.get("kypVisualId") or "note-block"
            v["plannedImplementation"] = src.get("kypImplementation") or "note-block"
        print("chapter: metabolic-fuel-use -> complete, textbookVisuals rewritten (3 sv)")
        break
else:
    print("ERROR: metabolic-fuel-use not found in chapter topics")
    sys.exit(1)
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print("chapter biochemistry.json updated")
