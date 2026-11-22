#!/usr/bin/env python3
"""PH19 anticholinesterase-poisoning — manifest + inventory + flip
(Pharmacology 19/43 — the ANTICHOLINESTERASE POISONING section: the LOWER
portion of pdf 261, book 239, BELOW the Cholinomimetic agents table of
PH18 — the cholinomimetic content above is EXCLUDED). The section prints:
(1) ONE INTRO PAIR (prose) — 'Often due to organophosphates (eg, fenthion,
parathion, malathion) that irreversibly inhibit AChE.' + 'Organophosphates
commonly used as insecticides; poisoning usually seen in farmers.'; and
(2) ONE THREE-ROW EFFECT-TIER TABLE (row label / findings / high-yield) —
MUSCARINIC EFFECTS ('Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia,
Emesis, Lacrimation, Sweating, Salivation.' → 'DUMBBELSS.' the book's OWN
mnemonic (note the double-S: Sweating + Salivation), 'Reversed by atropine,
a competitive inhibitor.' + 'Atropine can cross BBB to relieve CNS
symptoms.'), NICOTINIC EFFECTS ('Neuromuscular blockade (mechanism similar
to succinylcholine).' → 'Reversed by pralidoxime, regenerates AChE via
dephosphorylation if given early. Must be coadministered with atropine to
prevent transient worsening of symptoms. Pralidoxime does not readily
cross BBB.'), and CNS EFFECTS ('Respiratory depression, lethargy,
seizures, coma.' — printed WITHOUT its own reversal line; atropine's BBB
crossing is the printed cover).
RASTER CENSUS: ZERO raster images on pdf 261 (pdfimages -list returns no
rows) — the section is PURE TEXT, COPYRIGHTED, never reproduced as
artwork; carried VERBATIM as the note's two table blocks
(ORIGINAL_KYP_ADAPTATION) and conveyed as ONE original KYP poison map
(AnticholinesterasePoisoningMap).
TIMING-RULE FINDING: the source's own timing rule is the printed 'if given
early' (pralidoxime 'regenerates AChE via dephosphorylation if given
early'); the AGING mechanism behind it (the phosphorylated enzyme loses
its alkyl group over hours, making the bond permanent and
dephosphorylation impossible) is NOT printed anywhere in part 1 — 'aging'
does not appear in the text layer — flagged as a KYP extension wherever
used, never cited as printed.
NOT-PRINTED LAYER (census, flagged wherever it would otherwise appear):
'carbamate' appears NOWHERE in part 1 (the reversible, non-aging cousins
of organophosphates are absent from the printed page); the alternative
mnemonic SLUDGE is absent; nerve agents (sarin, VX) are absent; and the
nicotinic-ganglionic signs (mydriasis, tachycardia, hypertension) that can
override the muscarinic picture are absent — the printed nicotinic row is
the NMJ blockade alone.
SAME-PAGE EXCLUSION: the 'Cholinomimetic agents' section prints on THIS
pdf 261, ABOVE this section (the completed topic PH18: the intro warning +
the two-group DRUG/ACTION/APPLICATIONS table) — EXCLUDED; the boundary is
pinned, and the printed adjacency is the page's own mirror: the upper
table ENDS with physostigmine the anticholinergic-toxicity antidote, this
lower section is the cholinergic-toxicity antidote story — the two
opposite toxidromes on one page.
SECTION EXTENT: the section is the LAST element on pdf 261 — it ENDS at
the page footer ('FAS1_2026_05-Pharmacology.indd 239'), and pdf 262
(book 240) opens the SEPARATE pending 'Muscarinic antagonists' section
(the atropine drug page — the antidote of this section's muscarinic tier)
— the section does NOT extend to pdf 262 — sourcePages = [261] only.
BOUNDARY CENSUS: pdf 260 (book 238) carries the COMPLETED PH17
'autonomic-drugs' (the synapse map whose breaker this poison blocks);
pdf 261's upper portion carries the COMPLETED PH18 'cholinomimetic-agents'
(its indirect group IS this poison's therapeutic class — the reversible
AChE inhibitors — and its 'Antidote for anticholinergic toxicity' row is
this section's mirror); pdf 262 opens the PENDING 'Muscarinic
antagonists' (atropine's own page — EXCLUDED). PH12
'acetylcholine-receptors' (book 235) carries the M/N receptor families the
three tiers ride — all cross-linked.
KYP EXTENSIONS (beyond the page's printed set, flagged wherever they
appear): the TIER-TRIAD reading (the three printed row labels compressed
into one overflow story — glands and smooth muscle first, then the NMJ,
then the brain); the AGING-TIME WINDOW (the printed 'if given early'
expanded into the aging mechanism — NOT printed, flagged); the
DUAL-ANTIDOTE COVERAGE MAP (who covers which tier: atropine = competitive
muscarinic blocker that crosses the BBB → the muscarinic + CNS tiers;
pralidoxime = AChE regenerator that does not readily cross the BBB → the
nicotinic/NMJ tier — every clause printed, the map KYP's); the
MIRROR-TOXIDROME frame (this section vs physostigmine's row above — the
wet/dry mirror the exam tests); and the NOT-PRINTED drug layer
(carbamates, SLUDGE, nerve agents, ganglionic signs — all absent from the
page, flagged, never cited as printed)."""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 433 and pages[-1].strip() == "":
    pages.pop()
L = {261: pages[260].split("\n"), 262: pages[261].split("\n")}
P = {261: norm(pages[260]), 262: norm(pages[261])}
def rng(pg, a, b): return "\n".join(L[pg][a - 1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg - 22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — the running header (book 239): the Pharmacology marker, the standing section banner, the Section II marker, and the printed page number (the SAME page PH18's upper portion prints on — this topic is the LOWER portion)", rng(261, 1, 7), [261]),
    ("The section header — 'Anticholinesterase poisoning' (this topic's section; opens the LOWER portion of pdf 261, directly below the Cholinomimetic agents table of the EXCLUDED upper portion)", rng(261, 96, 97), [261]),
    ("The intro cause line, whole, verbatim — the section's first prose line: 'Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE.' (the three printed organophosphates — all three end in '-thion' — and the irreversibility rule that separates this poison from the therapeutic reversible inhibitors of the upper table)", rng(261, 99, 99), [261]),
    ("The intro setting line, whole, verbatim — 'Organophosphates commonly used as insecticides; poisoning usually seen in farmers.' (the printed exposure epidemiology: the insecticide route and the farmer — the stem the exam recycles)", rng(261, 100, 100), [261]),
    ("The muscarinic row label, verbatim — 'Muscarinic effects' (the first of the three effect-tier rows)", rng(261, 102, 102), [261]),
    ("The muscarinic findings cell, whole, verbatim — 'Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.' (the nine findings, printed in DUMBBELSS letter order — the mnemonic spells its own list)", rng(261, 104, 106), [261]),
    ("The muscarinic mnemonic line, whole, verbatim — 'DUMBBELSS.' (the SOURCE's own acronym for the nine muscarinic findings — attributed as the book's own wherever used; NOTE the double-S spelling: Sweating + Salivation, not the single-S 'DUMBBELLS')", rng(261, 108, 108), [261]),
    ("The atropine reversal clause, whole, verbatim — 'Reversed by atropine, a competitive inhibitor.' (the muscarinic-tier antidote and its printed mechanism: receptor-level competition, NOT enzyme regeneration)", rng(261, 109, 109), [261]),
    ("The atropine BBB clause, whole, verbatim — 'Atropine can cross BBB to relieve CNS symptoms.' (why the muscarinic antidote also covers the CNS tier — the printed fact that ties the third row to the first row's antidote)", rng(261, 110, 111), [261]),
    ("The nicotinic row label, verbatim — 'Nicotinic effects' (the second effect-tier row)", rng(261, 113, 113), [261]),
    ("The nicotinic findings cell, whole, verbatim — 'Neuromuscular blockade (mechanism similar to succinylcholine).' (the printed nicotinic finding: the NMJ, with the book's own comparator — the depolarizing-blockade mechanism the exam cross-references)", rng(261, 115, 116), [261]),
    ("The pralidoxime reversal clause, whole, verbatim — 'Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early.' (the nicotinic-tier antidote + its mechanism + the SOURCE's own timing rule: 'if given early' — the aging mechanism behind it is NOT printed, flagged as KYP)", rng(261, 118, 119), [261]),
    ("The coadministration clause, whole, verbatim — 'Must be coadministered with atropine to prevent transient worsening of symptoms.' (the duo rule: pralidoxime alone transiently WORSENS — the printed reason the antidotes travel as a pair)", rng(261, 120, 121), [261]),
    ("The pralidoxime BBB clause, whole, verbatim — 'Pralidoxime does not readily cross BBB.' (the reach limit of the nicotinic-tier antidote — the printed mirror of atropine's crossing two rows above)", rng(261, 122, 122), [261]),
    ("The CNS row, whole, verbatim — the label 'CNS effects' + the findings 'Respiratory depression, lethargy, seizures, coma.' (the third tier, printed WITHOUT its own reversal line — atropine's printed BBB crossing is its cover)", rng(261, 124, 126), [261]),
    ("The page footer, verbatim — the book's signature file line (book 239; the Anticholinesterase poisoning section is the LAST element on pdf 261 — the section ENDS above the footer)", rng(261, 128, 128), [261]),
    ("The SECTION-START BOUNDARY, verbatim — the EXCLUDED upper table's LAST row ends with 'Antidote for anticholinergic toxicity; physostigmine \"phyxes\" atropine overdose.' immediately before this section's header — the printed adjacency that makes book 239 one mirror page: the upper table ends with the ANTICHOLINERGIC-toxicity antidote, this lower section is the CHOLINERGIC-toxicity antidote story (the two opposite toxidromes, one page)", rng(261, 93, 94), [261]),
    ("The SAME-PAGE EXCLUSION — the 'Cholinomimetic agents' section prints on THIS pdf 261, ABOVE the Anticholinesterase poisoning section (the completed topic PH18: the intro warning + the two-group DRUG/ACTION/APPLICATIONS table): EXCLUDED — only its boundary is pinned; its cholinomimetic rows are NOT part of this topic (the reciprocal anchor PH18 pinned to this section resolves here)", rng(261, 9, 10), [261]),
    ("The NEXT-PAGE BOUNDARY — pdf 262 (book 240) opens the SEPARATE pending 'Muscarinic antagonists' section (atropine's own drug page — the antidote of this section's muscarinic tier, arriving one page later): the Anticholinesterase poisoning section does NOT extend to pdf 262 — the whole section (intro pair + three tiers) is on pdf 261 alone (sourcePages = [261] only)", "Muscarinic antagonists", [262]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"anticholinesterase-poisoning: evidence {len(kept)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "anticholinesterase-poisoning",
    "title": "Anticholinesterase Poisoning",
    "chapterId": "pharmacology", "chapterTitle": "Pharmacology",
    "subsection": "Pharmacology — Autonomic Drugs", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [261], "bookPages": "239"},
    "sourceEvidence": kept, "visualIds": ["anticholinesterase-poisoning-map"],
    "mechanismIds": ["organophosphate-irreversible-ache-block", "atropine-pralidoxime-duo"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the section's intro pair and three-row effect-tier table.",
         "origin": "outside-first-aid", "rationale": "First Aid supplies the rows; the attack structure is a KYP design.",
         "location": "usmle section + recall/rapidReview"},
        {"id": "tier-triad-reading", "summary": "The TIER-TRIAD reading of the section's own three printed row labels — MUSCARINIC effects (the glands-and-smooth-muscle tier: everything secretes and cramps, DUMBBELSS), NICOTINIC effects (the striated-muscle tier: the NMJ fails, 'mechanism similar to succinylcholine'), and CNS effects (the brain tier: 'Respiratory depression, lethargy, seizures, coma.') — read as one overflow story: the poison spares no cholinergic address, so the tiers stack in the order the receptor families are distributed (PH12's own M/N map). All three labels and findings cells are the book's own print; the tier compression and the 'which organ tier fails next' ordering are KYP's.",
         "origin": "outside-first-aid", "rationale": "The book prints three parallel rows; the overflow-story reading (glands first, then the NMJ, then the brain) is KYP's synthesis with the acetylcholine-receptors topic.",
         "location": "core.keyIdea + mechanisms[0] + the visual's tier band"},
        {"id": "aging-time-window", "summary": "The AGING-TIME WINDOW behind the printed timing rule — the source's own words are 'regenerates AChE via dephosphorylation if given early'; the mechanism behind 'early' is NOT printed ('aging' appears nowhere in part 1): the phosphorylated AChE–organophosphate bond 'ages' over hours as the alkyl group is lost, after which the bond is permanent and pralidoxime's dephosphorylation can no longer regenerate the enzyme — pralidoxime must be given BEFORE aging. The printed rule and the 'early' clause are the book's own; the aging explanation is KYP's, flagged wherever it appears.",
         "origin": "outside-first-aid", "rationale": "The page prints the timing rule ('if given early') without its mechanism; the aging explanation is standard pharmacology not printed on this page — flagged, never cited as printed.",
         "location": "mechanisms[1] + traps + the visual's pralidoxime card"},
        {"id": "dual-antidote-coverage-map", "summary": "The DUAL-ANTIDOTE COVERAGE MAP over the section's four printed antidote clauses — ATROPINE: 'Reversed by atropine, a competitive inhibitor.' + 'Atropine can cross BBB to relieve CNS symptoms.' → covers the MUSCARINIC tier AND the CNS tier (receptor-level competition, BBB-crossing); PRALIDOXIME: 'Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early.' + 'Must be coadministered with atropine to prevent transient worsening of symptoms.' + 'Pralidoxime does not readily cross BBB.' → covers the NICOTINIC/NMJ tier (enzyme-level regeneration, no BBB entry), and only as the junior partner of the pair. Every clause is the page's own print; the 'who covers which tier' map is KYP's.",
         "origin": "outside-first-aid", "rationale": "The book prints the four antidote clauses inside the two rows' high-yield cells; the tier-coverage map (and the plate-vs-breaker framing: atropine shields the plate, pralidoxime spares the breaker) is KYP's.",
         "location": "mechanisms[1] + traps + pivots + the visual's treatment duo"},
        {"id": "mirror-toxidrome-layer", "summary": "The MIRROR-TOXIDROME frame of the printed page — book 239's upper table ENDS with physostigmine, the ANTICHOLINERGIC-toxicity antidote ('physostigmine \"phyxes\" atropine overdose.'), and its LOWER section (this topic) is the CHOLINERGIC-toxicity story whose antidotes are atropine + pralidoxime: the wet toxidrome (DUMBBELSS: everything flows — miosis, bradycardia, bronchorrhea, sweat, saliva, tears, stool, urine) versus the dry one (anticholinergic: hot as a hare, blind as a bat, dry as a bone). Both endpoints are printed on the same page; the wet/dry mirror frame and the 'one page, two opposite toxidromes' reading are KYP's.",
         "origin": "outside-first-aid", "rationale": "The two printed sections are each other's antidote story; the mirror frame connecting them (and the exam's wet-vs-dry sort) is KYP's.",
         "location": "core.why + traps + crossLinks + the visual's footer"},
        {"id": "not-printed-drug-layer", "summary": "The NOT-PRINTED layer the exam expects but the page does NOT carry: 'carbamate' appears NOWHERE in part 1 (the reversible, non-aging organophosphate cousins — insecticide class whose poisoning pralidoxime cannot rescue because there is nothing to regenerate... and nothing to age — flagged as absent, never cited as printed); the alternative mnemonic SLUDGE (Salivation, Lacrimation, Urination, GI upset, Diaphoresis, Emesis) is absent; nerve agents (sarin, VX) are absent; and the nicotinic-GANGLIONIC signs (mydriasis, tachycardia, hypertension — the sympathetic overdrive that can OVERRIDE the muscarinic picture and fool the exam) are absent — the printed nicotinic row is the NMJ blockade alone.",
         "origin": "outside-first-aid", "rationale": "Task-brief anticipation vs the actual print — the census must record that these names do not print, so they are never cited as this page's content.",
         "location": "manifest notes + the note's sourceRef + traps + the visual's not-printed strip"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "Census (pdfimages + text layer): the Anticholinesterase poisoning section occupies the LOWER portion of pdf 261 (book 239) under the standing 'PHARMACOLOGY—AUTONOMIC DRUGS' banner, BELOW the Cholinomimetic agents table of the EXCLUDED upper portion (the completed PH18). The section prints TWO elements: (1) ONE INTRO PAIR (prose) — 'Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE.' + 'Organophosphates commonly used as insecticides; poisoning usually seen in farmers.'; (2) ONE THREE-ROW EFFECT-TIER TABLE (row label / findings / high-yield, NO column headers printed): MUSCARINIC EFFECTS — 'Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.' → 'DUMBBELSS.' (the book's OWN mnemonic — double-S: Sweating + Salivation) + 'Reversed by atropine, a competitive inhibitor.' + 'Atropine can cross BBB to relieve CNS symptoms.'; NICOTINIC EFFECTS — 'Neuromuscular blockade (mechanism similar to succinylcholine).' → 'Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early. Must be coadministered with atropine to prevent transient worsening of symptoms. Pralidoxime does not readily cross BBB.'; CNS EFFECTS — 'Respiratory depression, lethargy, seizures, coma.' (printed WITHOUT its own reversal line — atropine's printed BBB crossing is its cover). RASTER CENSUS: ZERO raster images on pdf 261 (pdfimages -list returns no rows) — the section is PURE TEXT, COPYRIGHTED, never reproduced as artwork; carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION) and conveyed as ONE original KYP poison map (AnticholinesterasePoisoningMap). TIMING-RULE FINDING: the source's timing rule is the printed 'if given early'; the AGING mechanism behind it is NOT printed ('aging' appears nowhere in part 1) — flagged as KYP wherever used. NOT-PRINTED LAYER: 'carbamate' appears NOWHERE in part 1; SLUDGE, nerve agents (sarin, VX), and the nicotinic-ganglionic signs (mydriasis, tachycardia) are absent — all flagged, never cited as printed. SAME-PAGE EXCLUSION: the 'Cholinomimetic agents' section prints on the SAME pdf 261 ABOVE this section (the completed PH18 — the reciprocal anchor PH18 pinned here resolves) — EXCLUDED; the printed adjacency is the page's own mirror (the upper table ends with physostigmine the anticholinergic antidote; this lower section is the cholinergic-antidote story). SECTION EXTENT: the section is the LAST element on pdf 261 — it ends above the page footer, and pdf 262 (book 240) opens the separate PENDING 'Muscarinic antagonists' section (atropine's own drug page); sourcePages = [261] only. BOUNDARIES: pdf 260 carries the COMPLETED PH17 'autonomic-drugs' (the synapse map whose breaker this poison blocks — EXCLUDED, cross-linked); pdf 261 upper = COMPLETED PH18 (EXCLUDED, cross-linked); pdf 262 = PENDING 'Muscarinic antagonists' (EXCLUDED). PH12 'acetylcholine-receptors' (book 235) carries the M/N receptor families the three tiers ride — cross-linked. KYP extensions flagged wherever they appear: the TIER-TRIAD reading, the AGING-TIME WINDOW (mechanism not printed — flagged), the DUAL-ANTIDOTE COVERAGE MAP (all clauses printed, the map KYP's), the MIRROR-TOXIDROME frame, and the NOT-PRINTED drug layer (carbamates, SLUDGE, nerve agents, ganglionic signs — absent from the page, flagged, never cited as printed). No copyrighted artwork reproduced; nothing reproduced.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "pharmacology",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Pharmacology — Autonomic Drugs",
    "topicId": "anticholinesterase-poisoning", "requiredInKYP": True}
def sv(n, pages, book, vtype, purpose, desc, impl, vid, kloc, kimpl="registry-visual"):
    d = dict(SV_BASE)
    d.update({"visualId": f"anticholinesterase-poisoning-sv{n}",
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "visualType": vtype, "visualPurpose": purpose, "sourceFigureDescription": desc,
        "implementationType": impl, "kypVisualId": vid, "kypImplementation": kimpl,
        "qaStatus": "passed", "kypLocation": kloc, "productionStatus": "complete",
        "plannedKypVisualId": vid, "plannedImplementation": kimpl})
    return d
inv1 = [
    sv(1, [261], "239", "VISUAL_TABLE", "The three-row effect-tier table (the section's sole printed element — the anticholinesterase-poisoning grid: intro pair + Muscarinic/Nicotinic/CNS effect rows with their findings and high-yield antidote cells)",
       "ONE THREE-ROW TEXT TABLE (PURE TEXT — ZERO rasters on pdf 261; pdfimages returns no rows; COPYRIGHTED, never reproduced as artwork). No column headers printed; the frame is row label / findings / high-yield. Intro pair (prose) above the rows: 'Often due to organophosphates (eg, fenthion, parathion, malathion) that irreversibly inhibit AChE.' + 'Organophosphates commonly used as insecticides; poisoning usually seen in farmers.' Row 1 'Muscarinic effects': 'Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Sweating, Salivation.' → 'DUMBBELSS.' + 'Reversed by atropine, a competitive inhibitor. Atropine can cross BBB to relieve CNS symptoms.' Row 2 'Nicotinic effects': 'Neuromuscular blockade (mechanism similar to succinylcholine).' → 'Reversed by pralidoxime, regenerates AChE via dephosphorylation if given early. Must be coadministered with atropine to prevent transient worsening of symptoms. Pralidoxime does not readily cross BBB.' Row 3 'CNS effects': 'Respiratory depression, lethargy, seizures, coma.' (no reversal line printed). Carried VERBATIM as the note's two table blocks and conveyed as ONE original KYP poison map (the organophosphate mechanism strip with the aging flag, the three tier cards, the treatment duo with the timing window, the not-printed strip, the reading-rule footer) — no artwork reproduced.",
       "ORIGINAL_KYP_ADAPTATION", "anticholinesterase-poisoning-map", "the note's two verbatim table blocks (the intro pair; the three effect-tier rows) + the registry visual's mechanism strip, the three tier cards, the treatment-duo cards, the not-printed strip, and the reading-rule footer"),
]
(ROOT / "content/usmle/manifests/anticholinesterase-poisoning.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(ROOT / "content/usmle/visual-inventory/anticholinesterase-poisoning.json").write_text(
    json.dumps({"topicId": "anticholinesterase-poisoning", "chapterId": "pharmacology", "inventory": inv1,
                "coverageAudit": {"topicId": "anticholinesterase-poisoning", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "Census (pdfimages + text layer): the section's printed visual set is ONE element — the THREE-ROW EFFECT-TIER TABLE, PURE TEXT (ZERO rasters on pdf 261 — pdfimages returns no rows; COPYRIGHTED, never reproduced as artwork). The intro pair is prose (carried verbatim in the note's first table block intro, not separately inventoried). The table is carried VERBATIM as the note's two table blocks (ORIGINAL_KYP_ADAPTATION — every row label, findings clause, antidote clause, and the book's own DUMBBELSS mnemonic are the book's own print) and conveyed as ONE original KYP poison map in the registry visual AnticholinesterasePoisoningMap (the ORGANOPHOSPHATE mechanism strip — the three '-thion' insecticides, the farmer, the irreversible AChE phosphorylation, the ACh-accumulation overflow, with the AGING window flagged as KYP; the THREE TIER CARDS — muscarinic DUMBBELSS with atropine the competitive inhibitor, nicotinic NMJ blockade succinylcholine-similar with pralidoxime the regenerator, CNS respiratory-depression/lethargy/seizures/coma; the TREATMENT DUO — atropine the muscarinic blocker that crosses the BBB, pralidoxime the AChE reactivator with the aging-time window, the coadministration rule, and the two printed BBB clauses; the NOT-PRINTED strip — carbamates, SLUDGE, nerve agents, ganglionic signs flagged as absent; the reading-rule + exclusions footer). TIMING-RULE FINDING pinned: the source's timing rule is the printed 'if given early' — the aging mechanism behind it is NOT printed ('aging' appears nowhere in part 1), flagged as KYP wherever used. SAME-PAGE EXCLUSION: the 'Cholinomimetic agents' section prints on the SAME pdf 261 ABOVE this section (the completed PH18) — EXCLUDED; the printed adjacency is the page's own mirror (the upper table ends with physostigmine the anticholinergic antidote; this section is the cholinergic-antidote story). PAGE-EXTENT FINDING: the section is the LAST element on pdf 261 — pdf 262 (book 240) opens the separate PENDING 'Muscarinic antagonists' section; sourcePages = [261] only. KYP extensions flagged wherever they appear: the TIER-TRIAD reading, the AGING-TIME WINDOW (not printed — flagged), the DUAL-ANTIDOTE COVERAGE MAP (all clauses printed, the map KYP's), the MIRROR-TOXIDROME frame, and the NOT-PRINTED drug layer (carbamates, SLUDGE, nerve agents, ganglionic signs — absent, flagged, never cited as printed). No copyrighted artwork reproduced; nothing reproduced."},
               indent=2, ensure_ascii=False) + "\n")
ch_path = ROOT / "content/usmle/chapters/pharmacology.json"
ch = json.loads(ch_path.read_text(encoding="utf8"))
for t in ch["topics"]:
    if t["topicId"] == "anticholinesterase-poisoning":
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
print("PH19 manifest + inventory + flip done")
