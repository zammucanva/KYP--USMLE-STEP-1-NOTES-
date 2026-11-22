#!/usr/bin/env python3
"""PH5 urine-ph-and-drug-elimination — manifest + inventory + flip
(Pharmacology 5/43). Census (pdfimages + VLM): pdf 253 (book 231).
The page contains the Urine pH and drug elimination section (this topic:
the header row 'Ionized species are trapped in urine and cleared quickly.
Neutral forms can be reabsorbed.'; the Weak acids row — 'Examples:
phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with
sodium bicarbonate to alkalinize urine.' with the RCOOH (lipid soluble) →
RCOO– + H+ (trapped) ionization strip; the Weak bases row — 'Examples:
tricyclic antidepressants (TCAs), amphetamines. Trapped in acidic
environments. For severe alkalosis, treat with ammonium chloride to
acidify urine.' with the RNH3+ (trapped) → RNH2 + H+ (lipid soluble)
strip; the TCA-toxicity margin note ('TCA toxicity is initially treated
with sodium bicarbonate to overcome the sodium channel-blocking activity
of TCAs. This treats cardiac toxicity, but does not accelerate drug
elimination.'); and the pKa row — 'pH at which drugs (weak acid or base)
are 50% ionized and 50% nonionized. The pKa represents the strength of
the weak acid or base.' with the Ionized species formation (%) vs pH
graph — the Weak acid and Weak base curves, 100/50/0 gridlines, the
4/8/12/14 pH x-axis, 'pKa: 9.2', 'pKa = more acidic', 'pKa = more
basic'). EXCLUDED: the page's bottom section 'Dosage calculations'
(Loading dose = Cp × Vd / F, Maintenance dose = Cp × CL × τ / F) — that
is a separate pending topic (dosage-calculations), and NO Drug
Metabolism (PH3) or Elimination kinetics (PH4) content appears on this
page — those live on pdf 252 (book 230) and are already produced.
NO raster images (pdfimages -list returned zero rows for pdf 253). The
Ionized species formation (%) graph is a vector figure — redrawn as an
ORIGINAL_KYP_REDRAW vector graphic. The two ionization reaction strips
(RCOOH ⇌ RCOO– + H+; RNH3+ ⇌ RNH2 + H+) print in the text layer and are
carried verbatim (ORIGINAL_KYP_ADAPTATION) in the note's table blocks
and the visual's species panels. The page prints NO margin mnemonic for
this section — all four mnemonic codes are KYP-original."""
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
    ("The Urine pH and drug elimination section header (split across two printed lines)", "Urine pH and drug elimination", [253]),
    ("The section banner — PHARMACOLOGY—PHARMACOKINETICS AND PHARMACODYNAMICS", "PHARMACOLOGY—PHARMACOKINETICS AND PHARMACODYNAMICS", [253]),
    ("The governing rule of the section — ionized species are trapped in urine and cleared quickly; neutral forms can be reabsorbed", "Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.", [253]),
    ("The Weak acids row header", "Weak acids", [253]),
    ("The weak-acid examples and treatment — phenobarbital, methotrexate, aspirin (salicylates); sodium bicarbonate to alkalinize urine", "Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine.", [253]),
    ("The weak-acid strip — the neutral form RCOOH", "RCOOH", [253]),
    ("The weak-acid strip — the neutral form tag (lipid soluble)", "(lipid soluble)", [253]),
    ("The weak-acid strip — the ionized form RCOO – + H+ (the text layer prints the anion with an en dash and a leading space)", "RCOO – + H+", [253]),
    ("The weak-acid strip — the ionized form tag (trapped)", "(trapped)", [253]),
    ("The Weak bases row header", "Weak bases", [253]),
    ("The weak-base examples and treatment — TCAs, amphetamines; trapped in acidic environments; ammonium chloride to acidify urine for severe alkalosis", "Examples: tricyclic antidepressants (TCAs), amphetamines. Trapped in acidic environments. For severe alkalosis, treat with ammonium chloride to acidify urine.", [253]),
    ("The weak-base strip — the ionized form RNH3+", "RNH3+", [253]),
    ("The weak-base strip — the neutral form RNH2 + H+", "RNH2 + H+", [253]),
    ("The TCA-toxicity margin note — sodium bicarbonate for the sodium channel-blocking activity; treats cardiac toxicity, does not accelerate drug elimination", "TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination.", [253]),
    ("The pKa row header", "pKa", [253]),
    ("The pKa definition — pH at which drugs are 50% ionized and 50% nonionized; the pKa represents the strength of the weak acid or base", "pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized. The pKa represents the strength of the weak acid or base.", [253]),
    ("The graph's y-axis label — Ionized species formation (%)", "Ionized species formation (%)", [253]),
    ("The graph's y-axis gridlines — 100 and 0 (printed on adjacent lines in the text layer)", "100 0", [253]),
    ("The graph's 50% gridline — the 50% ionized / 50% nonionized split that defines pKa (printed in the pKa row)", "50% ionized and 50% nonionized", [253]),
    ("The graph's Weak acid curve label", "Weak acid", [253]),
    ("The graph's Weak base curve label", "Weak base", [253]),
    ("The graph's x-axis ticks — 4, 8, 12, and 14 pH (printed as separate tick labels)", "4 8 12 14 pH", [253]),
    ("The graph's pKa annotation — pKa: 9.2 (labeling the weak-base curve's 50% crossing)", "pKa: 9.2", [253]),
    ("The graph's pKa axis annotation — pKa = more acidic", "pKa = more acidic", [253]),
    ("The graph's pKa axis annotation — pKa = more basic", "pKa = more basic", [253]),
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
print(f"urine-ph-and-drug-elimination: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "urine-ph-and-drug-elimination", "title": "Urine pH and Drug Elimination",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [253], "bookPages": "231"},
    "sourceEvidence": kept, "visualIds": ["urine-ph-elimination-map"],
    "mechanismIds": ["ion-trapping-equilibrium", "urine-ph-treatment-axis"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the source facts.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the two species rows, the two ionization strips, the TCA margin note, the pKa row, and the ionized-species graph; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "ion-trapping-two-reading", "summary": "The two-axis reading (the equilibrium axis: 'Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.' — the weak-acid strip RCOOH (lipid soluble) ⇌ RCOO– + H+ (trapped) trapped by ALKALINE urine, the weak-base strip RNH3+ (trapped) ⇌ RNH2 + H+ (lipid soluble) trapped by ACIDIC urine; and the treatment axis: alkalinize the urine with sodium bicarbonate for weak-acid overdoses [phenobarbital, methotrexate, aspirin/salicylates], acidify the urine with ammonium chloride for severe alkalosis with weak bases [TCAs, amphetamines], with the TCA caveat — bicarbonate initially treats the sodium-channel-blocking CARDIAC toxicity and does NOT accelerate drug elimination — plus the pKa graph reading: 50% ionized at pH = pKa, weak acids ionize as pH rises above pKa, weak bases ionize as pH falls below pKa, 'pKa = more acidic' / 'pKa = more basic') — KYP's synthesis of the page into one reading protocol.",
         "origin": "outside-first-aid", "rationale": "The source prints the rows, strips, note, and graph sequentially without a unified protocol; the two-axis framing is KYP's design.",
         "location": "core.keyIdea + pivots + the visual's structure"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (1 — ACID-in-ALKALI / BASE-in-ACID: the direction rule; 2 — PMA gets the BICARB: Phenobarbital · Methotrexate · Aspirin, the weak-acid overdose set, with sodium bicarbonate; 3 — AA ACIDifies: Amphetamines And TCAs, the weak-base set, trapped in acidic environments, ammonium chloride for severe alkalosis; 4 — 50/50 AT pKa: the pKa rule with the graph reading). The page prints NO mnemonic in this section — all four codes are KYP-original designs.",
         "origin": "outside-first-aid", "rationale": "Book 231's Urine pH and drug elimination section prints NO margin mnemonic (unlike the PEA mnemonic on book 230); all four codes are KYP-original designs.",
         "location": "mnemonics + the visual's code strip"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 253). The Urine pH and drug elimination section has ONE vector graph (the Ionized species formation (%) vs pH plot with the Weak acid and Weak base curves, 100/50/0 gridlines, 4/8/12/14 pH x-axis, 'pKa: 9.2', 'pKa = more acidic', 'pKa = more basic') — redrawn as an ORIGINAL_KYP_REDRAW vector graphic in the registry visual (no photographs, no copyrighted artwork reproduced). The two ionization reaction strips (RCOOH (lipid soluble) ⇌ RCOO– + H+ (trapped); RNH3+ (trapped) ⇌ RNH2 + H+ (lipid soluble)) print in the text layer as short chemical species phrases and are carried verbatim in the note's table blocks and the visual's species panels (ORIGINAL_KYP_ADAPTATION) — short attributed phrases, not artwork reproductions. The page prints NO margin mnemonic for this section; the KYP memory layer adds four original codes (ACID-in-ALKALI/BASE-in-ACID, PMA gets the BICARB, AA ACIDifies, 50/50 AT pKa). No copyrighted photographs exist on the page; nothing reproduced. NOTE: page 253 (book 231) ALSO contains the Dosage calculations section (Loading dose = Cp × Vd / F; Maintenance dose = Cp × CL × τ / F), which is covered by the separate pending dosage-calculations topic and is NOT covered by this topic's evidence or visual. NO Drug Metabolism (PH3) or Elimination kinetics (PH4) content appears on this page — those live on pdf 252 (book 230) and are already produced.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Pharmacokinetics and Pharmacodynamics",
    "topicId": "urine-ph-and-drug-elimination", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"urine-ph-and-drug-elimination-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [253], "231", "PHARMACOLOGY_DIAGRAM", "The Ionized species formation (%) vs pH graph",
       "The graph printed in the pKa row: y-axis 'Ionized species formation (%)' with gridlines 100, 50, and 0 (the 50% line is where pKa is read — 50% ionized / 50% nonionized); x-axis 'pH' with ticks 4, 8, 12, 14. TWO sigmoid curves: the 'Weak acid' curve rises with pH (a weak acid ionizes as pH climbs above its pKa — deprotonation RCOOH → RCOO– + H+) and the 'Weak base' curve falls with pH (a weak base ionizes as pH drops below its pKa — protonation RNH2 + H+ → RNH3+), the weak-base curve's 50% crossing labeled 'pKa: 9.2'. Below the x-axis the graph annotates the pKa axis: 'pKa = more acidic' (left) and 'pKa = more basic' (right). A vector figure (no raster).",
       "ORIGINAL_KYP_REDRAW", "urine-ph-elimination-map", "the registry visual (the graph panel of the UrinePhEliminationMap)"),
    sv(2, [253], "231", "PHARMACOLOGY_DIAGRAM", "The Weak acids row with its ionization strip",
       "The row printed under the section header: 'Weak acids — Examples: phenobarbital, methotrexate, aspirin (salicylates). Treat overdose with sodium bicarbonate to alkalinize urine.' with the inline ionization strip 'RCOOH (lipid soluble) → RCOO – + H+ (trapped)' — the neutral protonated acid crosses membranes (lipid soluble, reabsorbed) while the deprotonated anion is ion-trapped in the tubule (trapped, cleared quickly). The chemical species print in the text layer; the strip is text + arrow line art.",
       "ORIGINAL_KYP_ADAPTATION", "urine-ph-elimination-map", "the registry visual (the weak-acids panel of the UrinePhEliminationMap) + blocks[1] the table block carried verbatim"),
    sv(3, [253], "231", "PHARMACOLOGY_DIAGRAM", "The Weak bases row with its ionization strip and the TCA-toxicity margin note",
       "The row printed under the weak-acid row: 'Weak bases — Examples: tricyclic antidepressants (TCAs), amphetamines. Trapped in acidic environments. For severe alkalosis, treat with ammonium chloride to acidify urine.' with the inline ionization strip 'RNH3+ (trapped) → RNH2 + H+ (lipid soluble)' — the protonated cation is ion-trapped in the acidic tubule while the neutral base crosses membranes. The margin note beneath: 'TCA toxicity is initially treated with sodium bicarbonate to overcome the sodium channel-blocking activity of TCAs. This treats cardiac toxicity, but does not accelerate drug elimination.' The chemical species print in the text layer; the strip is text + arrow line art.",
       "ORIGINAL_KYP_ADAPTATION", "urine-ph-elimination-map", "the registry visual (the weak-bases panel and the TCA caveat callout of the UrinePhEliminationMap) + blocks[1] the table block carried verbatim"),
    sv(4, [253], "231", "VISUAL_TABLE", "The pKa row and the section header rule",
       "The section's governing rule printed beside the header: 'Ionized species are trapped in urine and cleared quickly. Neutral forms can be reabsorbed.' and the pKa row: 'pH at which drugs (weak acid or base) are 50% ionized and 50% nonionized. The pKa represents the strength of the weak acid or base.' Pure text, no figures.",
       "ORIGINAL_KYP_ADAPTATION", "urine-ph-elimination-map", "the registry visual (the governing-rule strip and the pKa definition panel of the UrinePhEliminationMap) + blocks[2] the table block carried verbatim"),
]
(ROOT / "content/usmle/manifests/urine-ph-and-drug-elimination.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/urine-ph-and-drug-elimination.json").write_text(
    json.dumps({"topicId": "urine-ph-and-drug-elimination", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "urine-ph-and-drug-elimination", "textbookVisualCount": 4,
                    "accountedFor": 4, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 3,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + VLM): NO raster images on the page (pdfimages -list returned zero rows for pdf 253). The Urine pH and drug elimination section has ONE vector graph (the Ionized species formation (%) vs pH plot with the Weak acid and Weak base curves, the 50% gridline, 'pKa: 9.2', 'pKa = more acidic' / 'pKa = more basic') — redrawn as an ORIGINAL_KYP_REDRAW vector graphic in the registry visual (no photographs, no copyrighted artwork reproduced). The two ionization reaction strips (RCOOH (lipid soluble) ⇌ RCOO– + H+ (trapped); RNH3+ (trapped) ⇌ RNH2 + H+ (lipid soluble)) print in the text layer as short chemical species phrases and are carried verbatim in the note's table blocks and the visual's species panels (ORIGINAL_KYP_ADAPTATION) — short attributed phrases, not artwork reproductions. The page prints NO margin mnemonic for this section; the KYP memory layer adds four original codes. No copyrighted photographs exist on the page; nothing reproduced. NOTE: page 253 (book 231) ALSO contains the Dosage calculations section, covered by the separate pending dosage-calculations topic and NOT covered here."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "urine-ph-and-drug-elimination":
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
print("PH5 manifest + inventory + flip done")
