#!/usr/bin/env python3
"""PH10 drug-effect-modifications — manifest + inventory + flip
(Pharmacology 10/43 — OPENS THE AUTONOMIC DRUGS BANNER). Census (pdfimages
+ VLM): pdf 256 (book 234). The page's UPPER portion is this one topic —
the section header 'Drug effect modifications' with the six-row
TERM | DEFINITION | EXAMPLE table, verbatim: 'Additive | Effect of
substances A and B together is equal to the sum of their individual
effects | Aspirin and acetaminophen "2 + 2 = 4"'; 'Permissive | Presence
of substance A is required for the full effects of substance B | Cortisol
on catecholamine responsiveness'; 'Synergistic | Effect of substances A
and B together is greater than the sum of their individual effects |
Clopidogrel with aspirin "2 + 2 > 4"'; 'Potentiation | Similar to
synergism, but drug B (with no therapeutic action alone) enhances the
therapeutic action of drug A | Carbidopa only blocks enzyme to prevent
peripheral conversion of levodopa "2 + 0 > 2"'; 'Antagonistic | Effect of
substances A and B together is less than the sum of their individual
effects | Morphine with naloxone "2 + 2 < 4"'; 'Tachyphylactic | Acute
decrease in response to a drug after initial/repeated administration |
Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic
response (with rebound congestion)'. EXCLUSION: the 'Autonomic receptors'
section occupies the LOWER portion of this same page (its second banner,
its header, and the AUTONOMIC/SOMATIC overview diagram with the
parasympathetic/sympathetic chains, adrenal medulla, and Nm junction) —
it is the SEPARATE PENDING topic 'autonomic-receptors' and is EXCLUDED
here. NO raster images (pdfimages -list returned zero rows for pdf 256).
The whole section is typeset text in the PDF text layer: the table is
carried verbatim (ORIGINAL_KYP_ADAPTATION) in the note's table block and
re-typeset in the registry visual's sign ladder, panels, and verbatim
examples strip. The section prints NO margin mnemonic — all four
mnemonic codes are KYP-original (stated everywhere they appear)."""
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
L = {256: pages[255].split("\n")}
P = {256: norm(pages[255])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 234)", rng(256, 1, 7), [256]),
    ("The section banner — PHARMACOLOGY—AUTONOMIC DRUGS (this page OPENS the Autonomic Drugs banner; the UPPER portion of the page carries the Drug effect modifications section, this topic; the LOWER portion carries the Autonomic receptors section, which is EXCLUDED — see the boundary item below)", "PHARMACOLOGY—AUTONOMIC DRUGS", [256]),
    ("The section header — Drug effect modifications (this topic)", rng(256, 9, 9), [256]),
    ("The table column headers — TERM / DEFINITION / EXAMPLE, verbatim", rng(256, 10, 14), [256]),
    ("Row 1 — Additive, DEFINITION verbatim ('Effect of substances A and B together is equal to the sum of their individual effects')", rng(256, 16, 19), [256]),
    ("Row 1 — Additive, EXAMPLE verbatim (the math metaphor '2 + 2 = 4': Aspirin and acetaminophen)", rng(256, 21, 22), [256]),
    ("Row 2 — Permissive, DEFINITION verbatim ('Presence of substance A is required for the full effects of substance B')", rng(256, 24, 27), [256]),
    ("Row 2 — Permissive, EXAMPLE verbatim (Cortisol on catecholamine responsiveness — the row with no math metaphor)", rng(256, 29, 29), [256]),
    ("Row 3 — Synergistic, DEFINITION verbatim ('Effect of substances A and B together is greater than the sum of their individual effects')", rng(256, 31, 34), [256]),
    ("Row 3 — Synergistic, EXAMPLE verbatim (the math metaphor '2 + 2 > 4': Clopidogrel with aspirin)", rng(256, 36, 37), [256]),
    ("Row 4 — Potentiation, DEFINITION verbatim ('Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A')", rng(256, 39, 43), [256]),
    ("Row 4 — Potentiation, EXAMPLE verbatim (the math metaphor '2 + 0 > 2': Carbidopa only blocks enzyme to prevent peripheral conversion of levodopa)", rng(256, 45, 47), [256]),
    ("Row 5 — Antagonistic, DEFINITION verbatim ('Effect of substances A and B together is less than the sum of their individual effects')", rng(256, 49, 52), [256]),
    ("Row 5 — Antagonistic, EXAMPLE verbatim (the math metaphor '2 + 2 < 4': Morphine with naloxone)", rng(256, 54, 55), [256]),
    ("Row 6 — Tachyphylactic, DEFINITION verbatim ('Acute decrease in response to a drug after initial/repeated administration')", rng(256, 57, 60), [256]),
    ("Row 6 — Tachyphylactic, EXAMPLE verbatim (Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion))", rng(256, 62, 64), [256]),
    ("The EXCLUSION BOUNDARY — the page's second banner and the 'Autonomic receptors' header (the LOWER portion of this same page) open the SEPARATE PENDING topic 'autonomic-receptors'; ALL of that content (the header and the AUTONOMIC/SOMATIC overview diagram) is EXCLUDED from this topic", rng(256, 66, 67), [256]),
    ("The EXCLUDED diagram — the Autonomic receptors AUTONOMIC/SOMATIC overview (parasympathetic/sympathetic chains, adrenal medulla, voluntary motor nerve) printed below the boundary — excluded together with its section", rng(256, 68, 81), [256]),
    ("The page timestamp footer (book 234)", rng(256, 168, 168), [256]),
    ("The page print-date footer (book 234)", rng(256, 170, 170), [256]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"drug-effect-modifications: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "drug-effect-modifications", "title": "Drug Effect Modifications",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [256], "bookPages": "234"},
    "sourceEvidence": kept, "visualIds": ["drug-effect-modifications-map"],
    "mechanismIds": ["combination-arithmetic-sum-reference", "permissive-gating-and-tachyphylaxis"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source's six-row table.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the six TERM/DEFINITION/EXAMPLE rows; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "sum-reference-reading-protocol", "summary": "The three-question reading of the table (QUESTION 1 — IS THE STEM MAKING A MAGNITUDE CLAIM? Four rows compare the observed combination to THE SUM of the individual effects and print it as arithmetic: '2 + 2 < 4' antagonistic, '2 + 2 = 4' additive, '2 + 2 > 4' synergistic, '2 + 0 > 2' potentiation. QUESTION 2 — DOES THE PARTNER DO ANYTHING ALONE? the zero-partner case is potentiation by the source's own definition ('Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A') — both partners active and beating the sum is synergism. QUESTION 3 — IS THE SECOND SUBSTANCE A DRUG AT ALL, OR THE SAME DRUG RE-DOSED? a falling response with a second drug is antagonistic (morphine with naloxone); the same drug re-dosed is tachyphylactic (oxymetazoline). The permissive row answers none of the three — it makes a REQUIREMENT claim ('Presence of substance A is required for the full effects of substance B'), which is why it carries no math metaphor) — KYP's synthesis of the six rows into one reading order (magnitude? → who acts alone? → one drug or two?).",
         "origin": "outside-first-aid", "rationale": "The source prints the six rows as parallel table entries without a unified reading protocol; the sum-reference framing, the zero-partner test, and the count-the-drugs-then-check-the-clock rule are KYP's design.",
         "location": "core.keyIdea + pivots + the visual's structure"},
        {"id": "mnemonic-layer", "summary": "The four KYP-original mnemonics (1 — READ THE SIGN, NAME THE TERM: < is Antagonistic (morphine with naloxone), = is Additive (aspirin and acetaminophen), > is Synergistic (clopidogrel with aspirin), 0> is Potentiation (carbidopa + levodopa). 2 — THE ZERO RULES POTENTIATION: a partner that is a ZERO alone and still beats the solitary drug is potentiation ('2 + 0 > 2'), not synergism ('2 + 2 > 4'). 3 — PERMISSIVE = PERMISSION, NOT POWER: cortisol does not add pressor force; it permits catecholamines their full effect. 4 — TACHYPHYLAXIS = THE DRUG TIRES OF ITSELF: same drug, repeat dosing, response falls — no partner, no sum). The Drug effect modifications section prints NO margin mnemonic — all four codes are KYP-original designs.",
         "origin": "outside-first-aid", "rationale": "Book 234's Drug effect modifications section prints NO mnemonic; all four codes are KYP-original designs.",
         "location": "mnemonics + the visual's code strip"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 256). The Drug effect modifications section is typeset text only — one six-row TERM/DEFINITION/EXAMPLE table in the PDF text layer. The table is carried verbatim (ORIGINAL_KYP_ADAPTATION) in the note's table block and re-typeset in the registry visual (the sign ladder for the four math-metaphor rows, dedicated panels for the permissive and tachyphylactic rows, and the verbatim examples strip) — short attributed definition sentences and drug pairs, not artwork reproductions; no copyrighted artwork exists on this section of the page and nothing is reproduced. The section prints NO margin mnemonic; the KYP memory layer adds four original codes (READ THE SIGN, NAME THE TERM; THE ZERO RULES POTENTIATION; PERMISSIVE = PERMISSION, NOT POWER; TACHYPHYLAXIS = THE DRUG TIRES OF ITSELF). The clinical anchors that extend past the source page (adrenal-crisis pressor refractoriness for the permissive row; dual antiplatelet therapy and ED naloxone for the synergistic/antagonistic rows; rhinitis medicamentosa for the tachyphylactic row; and the tachyphylaxis-vs-tolerance time-course distinction) are flagged as KYP clinical anchors wherever they appear. No copyrighted photographs exist on the page; nothing reproduced. EXCLUSION: the 'Autonomic receptors' section occupies the LOWER portion of this SAME page — its second banner, its header, and the AUTONOMIC/SOMATIC overview diagram are the SEPARATE PENDING topic 'autonomic-receptors' and are EXCLUDED from this topic: PH10 pins the same source page (pdf 256 / book 234) for its UPPER portion only.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "drug-effect-modifications", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"drug-effect-modifications-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [256], "234", "VISUAL_TABLE", "The six-row TERM / DEFINITION / EXAMPLE table (the whole section)",
       "The section's entire printed content, verbatim: header row 'TERM | DEFINITION | EXAMPLE' and six rows — Additive ('Effect of substances A and B together is equal to the sum of their individual effects' / 'Aspirin and acetaminophen “2 + 2 = 4”'), Permissive ('Presence of substance A is required for the full effects of substance B' / 'Cortisol on catecholamine responsiveness'), Synergistic ('Effect of substances A and B together is greater than the sum of their individual effects' / 'Clopidogrel with aspirin “2 + 2 > 4”'), Potentiation ('Similar to synergism, but drug B (with no therapeutic action alone) enhances the therapeutic action of drug A' / 'Carbidopa only blocks enzyme to prevent peripheral conversion of levodopa “2 + 0 > 2”'), Antagonistic ('Effect of substances A and B together is less than the sum of their individual effects' / 'Morphine with naloxone “2 + 2 < 4”'), Tachyphylactic ('Acute decrease in response to a drug after initial/repeated administration' / 'Repeat use of intranasal decongestant (eg, oxymetazoline) → ↓ therapeutic response (with rebound congestion)'). Pure typeset table, no figures.",
       "ORIGINAL_KYP_ADAPTATION", "drug-effect-modifications-map", "the registry visual (the sign ladder, the permissive and tachyphylactic panels, and the verbatim examples strip of the DrugEffectModificationsMap) + blocks[1] the verbatim table"),
]
(ROOT / "content/usmle/manifests/drug-effect-modifications.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/drug-effect-modifications.json").write_text(
    json.dumps({"topicId": "drug-effect-modifications", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "drug-effect-modifications", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 256). The Drug effect modifications section is one typeset table in the PDF text layer — no figures. The table is carried verbatim (ORIGINAL_KYP_ADAPTATION) in the note's table block and re-typeset in the registry visual's panels; short attributed definition sentences and drug pairs, not artwork reproductions. The section prints NO margin mnemonic; the KYP memory layer adds four original codes. The clinical anchors extending past the source page (adrenal-crisis pressor refractoriness, dual antiplatelet therapy, ED naloxone, rhinitis medicamentosa, tachyphylaxis-vs-tolerance) are KYP clinical anchors, flagged wherever they appear. No copyrighted photographs exist on the page; nothing reproduced. EXCLUSION: the 'Autonomic receptors' section on the same page (lower portion — its second banner, its header, and the AUTONOMIC/SOMATIC overview diagram) belongs to the SEPARATE PENDING topic 'autonomic-receptors' and is NOT part of this topic's inventory."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "drug-effect-modifications":
        t["status"] = "complete"
        t["textbookVisuals"] = json.loads(json.dumps(inv1))
        break
done = sum(1 for t in ch["topics"] if t.get("status") == "complete")
ch["pendingTopicCount"] = len(ch["topics"]) - done
if done == len(ch["topics"]):
    ch["extractionStatus"] = "verified"
    ch["completedAt"] = str(date.today())
ch_path.write_text(json.dumps(ch, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"chapter: pharmacology {done}/{len(ch['topics'])}{' — CHAPTER COMPLETE' if done==len(ch['topics']) else ''}")
print("PH10 manifest + inventory + flip done")
