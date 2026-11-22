#!/usr/bin/env python3
"""PH6 dosage-calculations — manifest + inventory + flip
(Pharmacology 6/43). Census (pdfimages + VLM): pdf 253 (book 231).
The page's BOTTOM section is Dosage calculations (this topic): the header
'Dosage calculations'; the two fraction formulas as printed — 'Loading
dose =' with numerator 'Cp × Vd' over denominator 'F', and 'Maintenance
dose =' with numerator 'Cp × CL × τ' over denominator 'F'; the definition
block 'Cp = target plasma concentration' and 'τ = dosage interval (time
between doses); does not apply for continuous infusions'; and the two
margin rules — 'In renal or liver disease, maintenance dose ↓ and loading
dose is usually unchanged.' and 'Time to steady state depends primarily
on t1/2 and is independent of dose and dosing frequency.' EXCLUDED: the
page's TOP section 'Urine pH and drug elimination' (the header rule, the
Weak acids / Weak bases rows with their ionization strips, the TCA
margin note, the pKa row, and the Ionized species formation (%) graph) —
that is the separate urine-ph-and-drug-elimination topic (PH5), already
produced. NO Drug Metabolism (PH3) or Elimination kinetics (PH4) content
appears on this page — those live on pdf 252 (book 230) and are already
produced. NO raster images (pdfimages -list returned zero rows for pdf
253). The two dosage formulas are typeset text fractions (text + divide
rules, no artwork) and are carried verbatim (ORIGINAL_KYP_ADAPTATION) in
the note's table blocks and re-typeset in the registry visual's formula
panels. The page prints NO margin mnemonic for this section — all four
mnemonic codes are KYP-original."""
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
L = {253: pages[252].split("\n")}
P = {253: norm(pages[252])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the section banner and header (book 231)", rng(253, 1, 7), [253]),
    ("The section banner — PHARMACOLOGY—PHARMACOKINETICS AND PHARMACODYNAMICS (the page shared with the urine-pH topic PH5)", "PHARMACOLOGY—PHARMACOKINETICS AND PHARMACODYNAMICS", [253]),
    ("The Dosage calculations section header (the page's bottom section — this topic)", "Dosage calculations", [253]),
    ("The loading-dose formula's left side — 'Loading dose =' (the formula prints as a fraction: numerator Cp × Vd over denominator F)", "Loading dose =", [253]),
    ("The loading-dose numerator — Cp × Vd (target plasma concentration × volume of distribution), printed over the denominator F (bioavailability; the single-letter F prints alone on its own line, too short to pin as a standalone quote)", "Cp × Vd", [253]),
    ("The maintenance-dose formula's left side — 'Maintenance dose =' (the fraction: numerator Cp × CL × τ over denominator F)", "Maintenance dose =", [253]),
    ("The maintenance-dose numerator — Cp × CL × τ (target concentration × clearance × dosage interval), printed over the denominator F (bioavailability; the same lone-letter F as the loading fraction)", "Cp × CL × τ", [253]),
    ("The Cp definition — Cp = target plasma concentration (the shared numerator term of both formulas)", "Cp = target plasma concentration", [253]),
    ("The τ definition — τ = dosage interval (time between doses); does not apply for continuous infusions", "τ = dosage interval (time between doses); does not apply for continuous infusions", [253]),
    ("The dosage-interval exclusion clause — τ does not apply for continuous infusions", "does not apply for continuous infusions", [253]),
    ("The margin rule for organ disease — In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged (the text layer prints a control character before the ↓ arrow; the normalizer strips it)", "In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged.", [253]),
    ("The margin rule for steady state — Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency", "Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.", [253]),
    ("The page timestamp footer (book 231)", rng(253, 69, 69), [253]),
    ("The page print-date footer (book 231)", rng(253, 93, 93), [253]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"dosage-calculations: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "dosage-calculations", "title": "Dosage Calculations",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [253], "bookPages": "231"},
    "sourceEvidence": kept, "visualIds": ["dosage-calculations-map"],
    "mechanismIds": ["loading-dose-fills-the-volume", "maintenance-dose-replaces-the-clearance"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source formulas.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the two formulas, the two definitions, and the two margin rules; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "two-equations-two-jobs-protocol", "summary": "The two-job reading (LOAD: 'Loading dose = Cp × Vd / F' fills the apparent volume to the target concentration Cp — it depends on Vd and F, not on clearance, which is why 'in renal or liver disease... loading dose is usually unchanged'; MAINTAIN: 'Maintenance dose = Cp × CL × τ / F' replaces each interval τ what clearance CL removes — it depends on CL, τ and F, which is why 'in renal or liver disease, maintenance dose ↓'; with the clock rule 'time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency' and the infusion exclusion 'τ = dosage interval (time between doses); does not apply for continuous infusions') — KYP's synthesis of the page into one decision protocol (which formula, which variable, which dose moves in organ disease).",
         "origin": "outside-first-aid", "rationale": "The source prints the two formulas, the two definitions, and the two margin rules as separate text blocks without a unified protocol; the load-vs-maintain framing is KYP's design.",
         "location": "core.keyIdea + pivots + the visual's structure"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (1 — LOAD THE TANK, MAINTAIN THE DRAIN: the formula-selection rule (Vd vs CL); 2 — DIVIDE BY F TO DELIVER: the bioavailability correction shared by both formulas; 3 — SICK ORGANS SHRINK THE MAINTENANCE, SPARE THE LOAD: the renal/liver disease rule; 4 — THE STEADY-STATE CLOCK IS t1/2: the 4-5 half-lives rule with dose-independence). The page prints NO mnemonic in this section — all four codes are KYP-original designs.",
         "origin": "outside-first-aid", "rationale": "Book 231's Dosage calculations section prints NO margin mnemonic; all four codes are KYP-original designs.",
         "location": "mnemonics + the visual's code strip"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 253). The Dosage calculations section is pure typeset text: the two fraction formulas ('Loading dose =' with Cp × Vd over F; 'Maintenance dose =' with Cp × CL × τ over F), the two definitions (Cp = target plasma concentration; τ = dosage interval (time between doses); does not apply for continuous infusions), and the two margin rules (In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged; Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency). The formulas print in the text layer and are carried verbatim in the note's table blocks and re-typeset as the registry visual's formula panels (ORIGINAL_KYP_ADAPTATION) — short attributed formula phrases, not artwork reproductions. The steady-state accumulation curve drawn in the registry visual (50/75/87.5/93.75/96.9% at 1-5 half-lives) is an ORIGINAL_KYP_REDRAW of the standard first-order accumulation identity — no curve is printed on the source page. The page prints NO margin mnemonic for this section; the KYP memory layer adds four original codes (LOAD THE TANK MAINTAIN THE DRAIN, DIVIDE BY F TO DELIVER, SICK ORGANS SHRINK THE MAINTENANCE, THE STEADY-STATE CLOCK IS t1/2). No copyrighted photographs exist on the page; nothing reproduced. NOTE: page 253 (book 231) ALSO contains the Urine pH and drug elimination section (PH5), already produced and NOT covered by this topic's evidence or visual. NO Drug Metabolism (PH3) or Elimination kinetics (PH4) content appears on this page — those live on pdf 252 (book 230) and are already produced.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics",
    "topicId": "dosage-calculations", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"dosage-calculations-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [253], "231", "PHARMACOLOGY_DIAGRAM", "The two fraction formulas — Loading dose and Maintenance dose",
       "The section's two displayed formulas, typeset as fractions: 'Loading dose =' with the numerator 'Cp × Vd' over the denominator 'F', and 'Maintenance dose =' with the numerator 'Cp × CL × τ' over the denominator 'F'. Pure text + divide rules (no raster, no curves) — the two equations that define the section.",
       "ORIGINAL_KYP_ADAPTATION", "dosage-calculations-map", "the registry visual (the two formula panels of the DosageCalculationsMap) + blocks[1] the table block carried verbatim"),
    sv(2, [253], "231", "VISUAL_TABLE", "The variable definitions — Cp and τ",
       "The definition block printed beneath the formulas: 'Cp = target plasma concentration' and 'τ = dosage interval (time between doses); does not apply for continuous infusions'. Pure text, no figures.",
       "ORIGINAL_KYP_ADAPTATION", "dosage-calculations-map", "the registry visual (the variable dictionary strip of the DosageCalculationsMap) + blocks[2] the table block carried verbatim"),
    sv(3, [253], "231", "VISUAL_TABLE", "The two margin rules — organ disease and time to steady state",
       "The margin note printed beside the formulas, two rules: 'In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged.' and 'Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency.' Pure text, no figures.",
       "ORIGINAL_KYP_ADAPTATION", "dosage-calculations-map", "the registry visual (the organ-disease callout and the steady-state clock panel of the DosageCalculationsMap) + blocks[2] the table block carried verbatim"),
    sv(4, [253], "231", "PHARMACOLOGY_DIAGRAM", "The first-order accumulation curve (KYP redraw — not printed on the page)",
       "NOT PRINTED ON THE SOURCE PAGE. The registry visual adds an original KYP redraw of the standard first-order accumulation identity — the approach to steady state after 1/2/3/4/5 half-lives (50% / 75% / 87.5% / 93.75% / ~97% of Css) — to make the margin rule 'Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency' visible. Drawn as an ORIGINAL_KYP_REDRAW vector curve; no copyrighted artwork reproduced.",
       "ORIGINAL_KYP_REDRAW", "dosage-calculations-map", "the registry visual (the steady-state clock panel's accumulation curve of the DosageCalculationsMap)"),
]
(ROOT / "content/usmle/manifests/dosage-calculations.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/dosage-calculations.json").write_text(
    json.dumps({"topicId": "dosage-calculations", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "dosage-calculations", "textbookVisualCount": 4,
                    "accountedFor": 4, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 3,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 253). The Dosage calculations section is pure typeset text — the two fraction formulas (Loading dose = Cp × Vd over F; Maintenance dose = Cp × CL × τ over F), the two definitions (Cp = target plasma concentration; τ = dosage interval (time between doses); does not apply for continuous infusions), and the two margin rules (In renal or liver disease, maintenance dose ↓ and loading dose is usually unchanged; Time to steady state depends primarily on t1/2 and is independent of dose and dosing frequency). The formulas print in the text layer and are carried verbatim in the note's table blocks and re-typeset in the registry visual's formula panels (ORIGINAL_KYP_ADAPTATION) — short attributed formula phrases, not artwork reproductions. The steady-state accumulation curve in the registry visual (50/75/87.5/93.75/96.9% at 1-5 half-lives) is an ORIGINAL_KYP_REDRAW of the standard first-order accumulation identity — NO curve is printed on the source page. The page prints NO margin mnemonic for this section; the KYP memory layer adds four original codes. No copyrighted photographs exist on the page; nothing reproduced. NOTE: page 253 (book 231) ALSO contains the Urine pH and drug elimination section (PH5), already produced and NOT covered here. NO Drug Metabolism (PH3) or Elimination kinetics (PH4) content appears on this page — those live on pdf 252 (book 230)."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "dosage-calculations":
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
print("PH6 manifest + inventory + flip done")
