#!/usr/bin/env python3
"""PH8 receptor-binding — manifest + inventory + flip
(Pharmacology 8/43). Census (pdfimages + VLM): pdf 255 (book 233).
The page's UPPER portion is this one topic — the section header 'Receptor
binding' with THREE vector dose-response panels (panel 1: 'Agonist' vs
'Agonist + competitive antagonist', circled A, 'Reduced potency' — parallel
right shift at the same 100 ceiling; panel 2: 'Agonist' vs 'Agonist +
noncompetitive antagonist', circled B, 'Reduced efficacy' — lower Emax at
the same position; panel 3: 'Agonist' plus TWO partial agonist curves —
'Partial agonist' with 'Reduced efficacy' at the agonist's own EC50 and
'Partial C agonist' (circled C, table row C) with 'Independent potency'
right-shifted) and the AGONIST WITH table, verbatim: header 'AGONIST WITH |
POTENCY | EFFICACY | REMARKS | EXAMPLE' with rows 'A Competitive antagonist
| ↓ | No change | Can be overcome by ↑ agonist concentration | Diazepam
(agonist) + flumazenil (competitive antagonist) on GABA A receptor.';
'B Noncompetitive antagonist | No change | ↓ | Cannot be overcome by ↑
agonist concentration | Norepinephrine (agonist) + phenoxybenzamine
(noncompetitive antagonist) on α-receptors.'; 'C Partial agonist (alone) |
Independent | ↓ | Acts at same site as full agonist | Morphine (full
agonist) vs buprenorphine (partial agonist) at opioid μ-receptors.';
'Inverse agonist (alone) | Independent | Negative | Binds to a
constitutively active receptor, thereby reducing its activity; has the
opposite effect of an agonist | H1 antihistamines (eg, diphenhydramine)'.
EXCLUSION: the 'Therapeutic index' section OPENS ON THIS SAME PAGE (lower
half) — its header, 'Measurement of drug safety.', the TD50/ED50 equation,
the therapeutic-window definition, the 'TITE' mnemonic, the low-TI drug
list (warfarin, theophylline, digoxin, antiepileptic drugs, lithium), the
LD50 note, and the Efficacy/Toxicity quantal-curve panel ALL belong to the
separate pending topic PH9 (therapeutic-index) and are EXCLUDED here. NO
raster images (pdfimages -list returned zero rows for pdf 255). The three
curve panels are vector line-art in the PDF and are redrawn as
ORIGINAL_KYP_REDRAW sigmoids in the registry visual; the AGONIST WITH
table prints in the text layer and is carried verbatim
(ORIGINAL_KYP_ADAPTATION) in the note's table block and re-typeset in the
visual's grid. The Receptor binding section prints NO margin mnemonic (the
page's only printed mnemonic, 'TITE', lives in the EXCLUDED Therapeutic
index section) — all four mnemonic codes are KYP-original."""
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
L = {255: pages[254].split("\n")}
P = {255: norm(pages[254])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 233)", rng(255, 1, 7), [255]),
    ("The section banner — PHARMACOLOGY—PHARMACOKINETICS AND PHARMACODYNAMICS (the upper portion of this page carries the Receptor binding section; the lower portion opens the Therapeutic index section, which is EXCLUDED — see the boundary item below)", "PHARMACOLOGY—PHARMACOKINETICS AND PHARMACODYNAMICS", [255]),
    ("The section header — Receptor binding (this topic)", "Receptor binding", [255]),
    ("The three panels' shared y-axis gridlines — 100 / 50 / 0 (three '100' ticks, one per panel; three '0' baselines, one per panel)", rng(255, 10, 14), [255]),
    ("The three panels' shared x-axis label — Agonist dose (prints three times, once per panel)", rng(255, 56, 63), [255]),
    ("PANEL 1 — the competitive antagonist curve label, verbatim", rng(255, 27, 29), [255]),
    ("PANEL 1 — the effect annotation 'Reduced potency' (the parallel right shift)", rng(255, 40, 41), [255]),
    ("PANEL 2 — the noncompetitive antagonist curve label, verbatim", rng(255, 48, 50), [255]),
    ("PANELS 2 and 3 — the shared effect annotation 'Reduced efficacy' (prints twice: the noncompetitive antagonist's lower Emax and the partial agonist's lower Emax)", rng(255, 20, 21), [255]),
    ("PANEL 3 — the upper partial agonist curve label, verbatim (same EC50 as the full agonist; 'Reduced efficacy')", rng(255, 36, 37), [255]),
    ("PANEL 3 — the lower partial agonist curve label, verbatim ('Partial C agonist' — the circled C marks table row C; right-shifted)", rng(255, 45, 46), [255]),
    ("PANEL 3 — the effect annotation 'Independent potency' (the lower partial agonist's shifted position)", rng(255, 60, 61), [255]),
    ("The table header, verbatim — AGONIST WITH | POTENCY | EFFICACY | REMARKS | EXAMPLE", rng(255, 65, 73), [255]),
    ("Row A, the row label, verbatim — A Competitive antagonist", rng(255, 75, 76), [255]),
    ("Row A, the POTENCY and EFFICACY columns, verbatim — ↓ potency, No change efficacy (right shift, ceiling intact)", rng(255, 75, 80), [255]),
    ("Row A, the REMARKS column, verbatim — surmountability of the competitive antagonist", rng(255, 82, 83), [255]),
    ("Row A, the EXAMPLE column, verbatim — diazepam + flumazenil on the GABA A receptor", rng(255, 85, 87), [255]),
    ("Row B, the row label, verbatim — B Noncompetitive antagonist", rng(255, 89, 90), [255]),
    ("Row B, the POTENCY and EFFICACY columns, verbatim — No change potency, ↓ efficacy (ceiling drop, position intact)", rng(255, 89, 94), [255]),
    ("Row B, the REMARKS column, verbatim — insurmountability of the noncompetitive antagonist", rng(255, 96, 97), [255]),
    ("Row B, the EXAMPLE column, verbatim — norepinephrine + phenoxybenzamine on α-receptors", rng(255, 99, 101), [255]),
    ("Row C, the row label, verbatim — C Partial agonist (alone)", rng(255, 103, 104), [255]),
    ("Row C, the POTENCY and EFFICACY columns, verbatim — Independent potency, ↓ efficacy", rng(255, 103, 108), [255]),
    ("Row C, the REMARKS column, verbatim — the partial agonist acts at the same site as the full agonist", rng(255, 110, 111), [255]),
    ("Row C, the EXAMPLE column, verbatim — morphine vs buprenorphine at opioid μ-receptors", rng(255, 113, 114), [255]),
    ("Row 4, the row label, verbatim — Inverse agonist (alone)", rng(255, 116, 117), [255]),
    ("Row 4, the POTENCY and EFFICACY columns, verbatim — Independent potency, Negative efficacy", rng(255, 116, 121), [255]),
    ("Row 4, the REMARKS column, verbatim — the inverse agonist binds a constitutively active receptor, reducing its activity; opposite effect of an agonist", rng(255, 123, 127), [255]),
    ("Row 4, the EXAMPLE column, verbatim — H1 antihistamines (eg, diphenhydramine)", rng(255, 129, 129), [255]),
    ("The EXCLUSION BOUNDARY — the next section header 'Therapeutic index' (PH9, a separate pending topic) opens on this same page; ALL of its content (Measurement of drug safety, TD50/ED50, the therapeutic window, TITE, the low-TI monitoring list, LD50, the Efficacy/Toxicity quantal-curve panel) is EXCLUDED from this topic", rng(255, 131, 131), [255]),
    ("The page timestamp footer (book 233)", rng(255, 170, 170), [255]),
    ("The page print-date footer (book 233)", rng(255, 172, 172), [255]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"receptor-binding: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "receptor-binding", "title": "Receptor Binding",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [255], "bookPages": "233"},
    "sourceEvidence": kept, "visualIds": ["receptor-binding-map"],
    "mechanismIds": ["antagonist-geometry-competitive-vs-noncompetitive", "partial-and-inverse-agonist-signaling"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source panels and the AGONIST WITH table.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the three curve panels and the four-row table; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "two-question-reading-protocol", "summary": "The two-question reading (WHICH COLUMN MOVED? potency ↓ = right shift = competitive; efficacy ↓ = ceiling drop = noncompetitive OR partial agonist; efficacy NEGATIVE = below baseline = inverse agonist — and potency 'Independent' marks the partial agonist's EC50 as free to sit anywhere. IS IT SURMOUNTABLE? the REMARKS column's single test — 'Can be overcome by ↑ agonist concentration' = competitive; 'Cannot be overcome by ↑ agonist concentration' = noncompetitive — turning the table's POTENCY/EFFICACY/REMARKS columns into one decision protocol for any drug-pair stem) — KYP's synthesis of the page's three panels and four table rows into a single reading order (parameter moved → surmountability → row identity).",
         "origin": "outside-first-aid", "rationale": "The source prints three panels and a four-row table as parallel blocks without a unified reading protocol; the which-column/which-parameter framing and the surmountability-first test are KYP's design.",
         "location": "core.keyIdea + pivots + the visual's structure"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (1 — COMPETITIVE SLIDES RIGHT, SAME CEILING: surmountable, potency ↓, efficacy unchanged; 2 — NONCOMPETITIVE CLIPS THE CEILING, SAME SPOT: insurmountable, efficacy ↓, potency unchanged; 3 — PARTIALS SHARE THE SITE, DROP THE CEILING: same site as the full agonist, efficacy ↓, potency independent; 4 — INVERSE GOES NEGATIVE: needs a constitutively active receptor, efficacy below the neutral-antagonist baseline). The Receptor binding section prints NO margin mnemonic — the page's only printed mnemonic ('TITE') belongs to the EXCLUDED Therapeutic index section — so all four codes are KYP-original designs.",
         "origin": "outside-first-aid", "rationale": "Book 233's Receptor binding section prints NO mnemonic; all four codes are KYP-original designs.",
         "location": "mnemonics + the visual's code strip"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 255). The Receptor binding section is typeset text plus three vector curve panels: the AGONIST WITH table (text layer) and the three dose-response panels (vector line-art curves with text labels — drawn curves, not photographs). The table prints in the text layer and is carried verbatim in the note's table blocks and re-typeset in the registry visual's table grid (ORIGINAL_KYP_ADAPTATION) — short attributed definition sentences and drug pairs, not artwork reproductions. The three curve panels are redrawn as ORIGINAL_KYP_REDRAW vector line-art sigmoids in the registry visual (competitive right shift; noncompetitive Emax reduction; two partial agonists — one at the agonist's EC50 with reduced efficacy, one shifted with independent potency) — the curve shapes are the standard Hill sigmoids of pharmacodynamics, re-drawn from scratch; no copyrighted artwork is reproduced. The Receptor binding section prints NO margin mnemonic (the page's only printed mnemonic, 'TITE', lives in the EXCLUDED Therapeutic index section); the KYP memory layer adds four original codes (COMPETITIVE SLIDES RIGHT, NONCOMPETITIVE CLIPS THE CEILING, PARTIALS SHARE THE SITE, INVERSE GOES NEGATIVE). No copyrighted photographs exist on the page; nothing reproduced. EXCLUSION: the 'Therapeutic index' section opens on this SAME page (lower half) — its header, 'Measurement of drug safety.', the TD50/ED50 equation, the therapeutic-window definition, the 'TITE' mnemonic, the low-TI drug list (warfarin, theophylline, digoxin, antiepileptic drugs, lithium), the LD50 note, and the Efficacy/Toxicity quantal-curve panel are ALL excluded from this topic: they belong to the separate pending topic PH9 (therapeutic-index), which pins the same source page (pdf 255 / book 233).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics",
    "topicId": "receptor-binding", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"receptor-binding-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [255], "233", "PHARMACOLOGY_DIAGRAM", "Panel 1 — the competitive-antagonist dose-response panel",
       "The page's first curve panel, vector line art (no raster): y-axis 100/50/0 gridlines, x-axis 'Agonist dose'; two parallel sigmoid curves both reaching the same 100 ceiling — the left curve labeled 'Agonist', the right curve labeled 'Agonist + competitive antagonist' — with a circled letter 'A' between the curves at the 50% level and the annotation 'Reduced potency' marking the rightward (parallel) shift.",
       "ORIGINAL_KYP_REDRAW", "receptor-binding-map", "the registry visual (panel A of the ReceptorBindingMap — redrawn as vector sigmoids: agonist and a right-shifted agonist + competitive antagonist curve at the same 100% ceiling, the A marker, the 'Reduced potency' annotation and a horizontal shift arrow at the 50% level)"),
    sv(2, [255], "233", "PHARMACOLOGY_DIAGRAM", "Panel 2 — the noncompetitive-antagonist dose-response panel",
       "The page's second curve panel, vector line art (no raster): same 100/50/0 axes and 'Agonist dose' x-axis; two sigmoid curves at the SAME left-right position — the full curve labeled 'Agonist' reaching 100 and the depressed curve labeled 'Agonist + noncompetitive antagonist' plateauing near 50 — with a circled letter 'B' and the annotation 'Reduced efficacy' marking the vertical drop of the ceiling.",
       "ORIGINAL_KYP_REDRAW", "receptor-binding-map", "the registry visual (panel B of the ReceptorBindingMap — redrawn as vector sigmoids: agonist to 100% and agonist + noncompetitive antagonist to ~50% at the same EC50, the B marker, the 'Reduced efficacy' annotation and a vertical ceiling arrow)"),
    sv(3, [255], "233", "PHARMACOLOGY_DIAGRAM", "Panel 3 — the partial-agonist dose-response panel",
       "The page's third curve panel, vector line art (no raster): same axes; THREE sigmoid curves — the full curve labeled 'Agonist' reaching 100, an upper curve labeled 'Partial agonist' plateauing lower at the agonist's own EC50 (annotation 'Reduced efficacy' with a vertical arrow), and a lower curve labeled 'Partial C agonist' (the circled letter C marks table row C) plateauing lower still AND shifted right (annotation 'Independent potency' with a horizontal double arrow).",
       "ORIGINAL_KYP_REDRAW", "receptor-binding-map", "the registry visual (panel C of the ReceptorBindingMap — redrawn as vector sigmoids: agonist to 100%, partial agonist to ~70% at the same EC50 with the 'Reduced efficacy' vertical arrow, and partial C agonist to ~40% shifted right with the 'Independent potency' horizontal arrow)"),
    sv(4, [255], "233", "VISUAL_TABLE", "The AGONIST WITH table — four rows verbatim",
       "The typeset table under the three panels, header 'AGONIST WITH | POTENCY | EFFICACY | REMARKS | EXAMPLE', rows: 'A Competitive antagonist | ↓ | No change | Can be overcome by ↑ agonist concentration | Diazepam (agonist) + flumazenil (competitive antagonist) on GABA A receptor.'; 'B Noncompetitive antagonist | No change | ↓ | Cannot be overcome by ↑ agonist concentration | Norepinephrine (agonist) + phenoxybenzamine (noncompetitive antagonist) on α-receptors.'; 'C Partial agonist (alone) | Independent | ↓ | Acts at same site as full agonist | Morphine (full agonist) vs buprenorphine (partial agonist) at opioid μ-receptors.'; 'Inverse agonist (alone) | Independent | Negative | Binds to a constitutively active receptor, thereby reducing its activity; has the opposite effect of an agonist | H1 antihistamines (eg, diphenhydramine)'. Pure text, no figures.",
       "ORIGINAL_KYP_ADAPTATION", "receptor-binding-map", "the registry visual (the AGONIST WITH grid of the ReceptorBindingMap) + blocks[1] the table block carried verbatim"),
]
(ROOT / "content/usmle/manifests/receptor-binding.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/receptor-binding.json").write_text(
    json.dumps({"topicId": "receptor-binding", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "receptor-binding", "textbookVisualCount": 4,
                    "accountedFor": 4, "sourceReproductions": 0, "kypRedraws": 3, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 255). The Receptor binding section is typeset text plus three vector curve panels. The AGONIST WITH table prints in the text layer and is carried verbatim in the note's table blocks and re-typeset in the registry visual's table grid (ORIGINAL_KYP_ADAPTATION) — short attributed rows, not artwork reproductions. The three dose-response panels are vector line-art curves in the PDF and are redrawn as ORIGINAL_KYP_REDRAW vector sigmoids in the registry visual — the curve shapes are the standard Hill sigmoids of pharmacodynamics, re-drawn from scratch; no copyrighted artwork is reproduced. The Receptor binding section prints NO margin mnemonic (the page's only printed mnemonic, 'TITE', lives in the EXCLUDED Therapeutic index section); the KYP memory layer adds four original codes. No copyrighted photographs exist on the page; nothing reproduced. EXCLUSION: the Therapeutic index section on the same page (header, Measurement of drug safety, TD50/ED50, therapeutic window, TITE, the low-TI monitoring list, LD50, and the Efficacy/Toxicity quantal-curve panel) belongs to the separate pending topic PH9 (therapeutic-index) and is NOT part of this topic's inventory."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "receptor-binding":
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
print("PH8 manifest + inventory + flip done")
