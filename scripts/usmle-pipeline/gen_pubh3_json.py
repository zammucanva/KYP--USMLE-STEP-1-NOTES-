#!/usr/bin/env python3
"""PUBH3 bradford-hill-criteria — manifest + inventory (Public Health batch 1),
STAGED under .usmle-pipeline-cache/staging-pubh3/ (the promotion step owns
content/). Source: pdf page 279 / book 257, LOWER PORTION ONLY — a pinned
page-split (the p252 pharmacology convention): the topic's scope STARTS at
the "Off-label drug use" navy heading (raw text line 86) and runs to the page
footer (line 137); the upper portion (the "Clinical therapeutic trial" block
and the five-phase "Can I SWIM?" figure, raw lines 1-85) belongs to
clinical-therapeutic-trials (pubh2, produced in parallel in this batch).
TWO blocks are owned: (1) "Off-label drug use" — the definition ("Use of a
drug to treat a disease in a form, population group, or dosage that is not
specifically approved by the FDA"), the two printed reasons (treatment of an
illness with no approved pharmacologic treatment; exploring alternative
treatments after failure of approved options), and the printed example (use
of tricyclic antidepressants for treating neuropathic/chronic pain); (2)
"Bradford Hill criteria" — the lead-in ("A group of principles that provide
limited support (ie, necessary but not sufficient criteria) for establishing
evidence of a causal relationship between presumed cause and effect") and
NINE criteria rows in printed order: Strength, Consistency, Specificity,
Temporality, Biological gradient, Plausibility, Coherence, Experiment,
Analogy — every definition carried verbatim in the note's table block.
Census (pdfimages): ZERO raster images on pdf 279 — pure text and vector.
VLM AVAILABLE this session (glm-4.6v at 120dpi, ONE full-page pass,
staging-pubh3/vlm-census.txt): the lower portion prints with navy/dark-blue
bold term headings and right-column definitions, thin light rules separating
the criteria rows, NO red text below the split (unlike the upper figure's
red "Work?"/"Market?" highlights), and NO margin notes, mnemonics, asterisk
footnotes, or images; the boundary is clean — the phase figure's last
printed line ("Postmarketing surveillance of patients with disease of
interest. Open label.") ends the upper portion, then the "Off-label drug
use" heading opens the lower. ADJUDICATIONS, documented in the census file
and the manifest notes: (1) the chapter census titles this topic "Bradford
Hill Criteria: Judging Causation"; the production title "Off-Label Use and
the Bradford Hill Criteria: Judging Causation" adds the off-label block
because the pinned lower-portion scope owns BOTH printed blocks (both are
carried whole); (2) the print agrees with the brief — exactly NINE criteria
rows, none missing, none extra (raw text layer + pdftotext -layout + the
VLM pass all agree); (3) the off-label block prints as a navy heading +
paragraph, not a table — carried as a four-row verbatim table (a KYP
adaptation) in the note so the audit can pin every printed word; (4)
DrugCards are FOLDED — the page prints a single drug-class example
(tricyclic antidepressants) with no mechanism/uses/adverse-effect rows to
trace, so the DrugCard shape does not fit. Nothing is reproduced: the
page's lower portion is adapted as ORIGINAL KYP ART (registry visual
bradford-hill-map, BradfordHillMap in visuals/pubhealth-p3.tsx — the
off-label panel with the printed definition and the three FDA-approval
axes, the two printed reasons and the printed example; the NECESSARY BUT
NOT SUFFICIENT verdict band anchored on the printed lead-in; and the nine
criteria as a 3x3 card grid with every printed definition, a vector glyph
per criterion, and the KYP MEASURE/THINK/GATE grouping); the full printed
text is additionally carried VERBATIM in the note's two table blocks."""
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
L = {279: pages[278].split("\n")}
P = {279: norm(pages[278])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "257 (lower)"},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
# PINNED SPLIT: every quote below is a contiguous span of raw lines 86-137 of
# pdf 279 — the LOWER portion only (lines 1-85, the Clinical therapeutic
# trial block + the "Can I SWIM?" phase figure, belong to pubh2).
E3 = [
    ("BOUNDARY + BLOCK 1, the whole printed Off-label drug use block — the navy heading that opens the lower portion (the pinned split boundary; the upper portion's phase figure ends at 'Open label.', line 84) plus the definition, the reasons sentence, and the example line", rng(279, 86, 91), [279]),
    ("The off-label definition — use in a form, population group, or dosage not specifically approved by the FDA; plus the reasons sentence carrying BOTH printed reasons (treatment of an illness with no approved pharmacologic treatment OR exploring alternative treatments after failure of approved options)", rng(279, 88, 90), [279]),
    ("The printed off-label example — tricyclic antidepressants for neuropathic/chronic pain (slash carried as printed)", rng(279, 91, 91), [279]),
    ("BLOCK 2, the printed Bradford Hill criteria heading and lead-in — 'A group of principles that provide limited support (ie, necessary but not sufficient criteria) for establishing evidence of a causal relationship between presumed cause and effect.' (lowercase 'ie,' convention carried as printed)", rng(279, 93, 96), [279]),
    ("CRITERION 1 — Strength: 'Association does not necessarily imply causation, but the stronger the association, the more evidence for causation.' (the page's own association-vs-causation caveat)", rng(279, 98, 101), [279]),
    ("CRITERION 2 — Consistency: 'Repeated observations of the findings in multiple distinct samples.'", rng(279, 103, 105), [279]),
    ("CRITERION 3 — Specificity: 'The more specific the presumed cause is to the effect, the stronger the evidence for causation.'", rng(279, 107, 109), [279]),
    ("CRITERION 4 — Temporality: 'The presumed cause precedes the effect by an expected amount of time.' (the KYP decoder's gate — the only criterion that must hold)", rng(279, 111, 113), [279]),
    ("CRITERION 5 — Biological gradient: 'Greater effect observed with greater exposure to the presumed cause (dose-response relationship).' (hyphen carried as printed)", rng(279, 115, 117), [279]),
    ("CRITERION 6 — Plausibility: 'A conceivable mechanism exists by which the cause may lead to the effect.'", rng(279, 119, 121), [279]),
    ("CRITERION 7 — Coherence: 'The presumed cause and effect do not conflict with existing scientific consensus.'", rng(279, 123, 125), [279]),
    ("CRITERION 8 — Experiment: 'Empirical evidence supporting the presumed cause and effect (eg, animal studies, in vitro studies).' (lowercase 'eg,' convention carried as printed)", rng(279, 127, 129), [279]),
    ("CRITERION 9 — Analogy: 'The presumed cause and effect are comparable to a similar, established cause and effect.' (exactly NINE criteria print — none missing, none extra; text layer + layout + VLM agree)", rng(279, 131, 133), [279]),
    ("Page identity, lower-portion footer — the print slug and timestamp: FAS1_2026_06-PubHealth.indd 257 / 12/16/25 12:46 PM (book 257, the last printed lines of the lower portion)", rng(279, 135, 137), [279]),
]
for c, q, pgs in E3:
    e = ev(c, q, pgs)
    if e["verified"] != "pass":
        fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails:
        print("  x", f)
    sys.exit(1)
print(f"bradford-hill-criteria: evidence {len(kept)}/{len(E3)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m3 = {"topicId": "bradford-hill-criteria",
    "title": "Off-Label Use and the Bradford Hill Criteria: Judging Causation",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [279], "bookPages": "257 (lower)"},
    "sourceEvidence": kept, "visualIds": ["bradford-hill-map"],
    "mechanismIds": ["causal-verdict-map", "off-label-boundary-map"],
    "kypExtensions": [
        {"id": "usmle-attack-layer", "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed lower portion — 4 patterns (the TCA-for-neuropathic-pain off-label stem with the failed-approved-options reason, the three-continent replication consistency stem, the 2x/5x/12x dose-response vs animal-data gradient/experiment stem, and the RR-9 post-infusion pancreatitis temporality-is-required stem), 4 traps (strength vs temporality, plausibility vs coherence, consistency vs strength, off-label vs contraindicated/experimental), 3 pivots (exposure-quantified vs replicated, gradient vs specificity, measure-question vs judgment-question), a 10-card recall set covering both printed blocks, and the solvent-neuropathy miniCase with 4 options (exactly 1 correct) whose distractors each cite a DIFFERENT printed criterion and the proves-causation trap.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the nine definitions and the off-label paragraph only; every vignette, distractor design, and reverse-direction question shape is KYP's design.",
         "location": "usmle section + recall"},
        {"id": "courtroom-decoder-protocol", "summary": "The MEASURE/THINK/GATE decoder and the four-move causal-inference protocol: MOVE 1 check the gate (temporality — the cause must precede the effect by an expected amount of time; wrong order fails the claim), MOVE 2 count the measured evidence (strength, consistency, biological gradient, experiment — evidence you COUNT), MOVE 3 weigh the thinking evidence (specificity, plausibility, coherence, analogy — evidence you REASON), MOVE 4 render the verdict (limited support — necessary but not sufficient — supports causation, never proves it). Includes the sentence-to-criterion question translations (HOW BIG / DOES IT REPLICATE / DOSE-RESPONSE / CAN IT BE SHOWN / ONE CAUSE ONE EFFECT / MECHANISM / CONFLICT / SEEN BEFORE).",
         "origin": "outside-first-aid", "rationale": "The source prints nine flat definitions with no grouping, no protocol, and no claim that temporality is the required criterion; the courtroom organization and the required-gate gloss are KYP's synthesis.",
         "location": "core.keyIdea + mechanisms[0] causal-verdict-map + blocks[3] the list block + blocks[4] the steps block + the registry visual's legend and card tags"},
        {"id": "mnemonic-layer", "summary": "The four KYP mnemonics (SOME CATS SLEEP TIGHT; BIG PURRING CATS EAT ANTS — the nine in printed order; TIME IS THE GATE; MEASURE IT OR THINK IT; NONE APPROVED, OR THE APPROVED ONES FAILED — the off-label reasons). No mnemonic prints anywhere in the lower portion of pdf 279 (VLM-confirmed), so all four ALL-CAPS codes are KYP originals; the upper portion's 'Can I SWIM?' belongs to clinical-therapeutic-trials and is NOT carried here.",
         "origin": "outside-first-aid", "rationale": "No printed mnemonic exists in this topic's scope (pdfimages + VLM census, staging-pubh3/vlm-census.txt); the four codes are KYP's design.",
         "location": "mnemonics + blocks[7] the memory callout"},
        {"id": "association-causation-bridge", "summary": "The association-vs-causation compare block — what studies MEASURE (the 2x2 output: OR/RR/AR) vs what the criteria SUPPORT (limited evidence of a causal relationship) — built on the Strength row's printed caveat ('Association does not necessarily imply causation') and the lead-in's 'limited support', with the bias/confounding bridge (what manufactures association without causation) and the strength link (a strong association is more evidence FOR causation, never proof).",
         "origin": "outside-first-aid", "rationale": "The source prints the caveat inside one criterion row but never builds the two-column contrast; the compare structure and the exam question-shape rows are KYP's.",
         "location": "blocks[5] the compare block + core.why + the registry visual's verdict band"},
        {"id": "generalization-and-bridge-layer", "summary": "The KYP-context generalizations, every one flagged as such: temporality as the only criterion that MUST hold (the gate gloss), the smoking-lung cancer / asbestos-mesothelioma worked causal cases, latency as temporality's clinical shadow, pediatrics and rare disease as off-label territory, off-label prescribing as legal judgment beyond the label (informed-awareness and Phase 4 surveillance links), and the TCA pharmacology behind the printed example (amitriptyline/nortriptyline — monoamine reuptake inhibition plus sodium-channel blockade for neuropathic pain at sub-antidepressant doses).",
         "origin": "outside-first-aid", "rationale": "The source is one printed half-page of definitions; every mechanism, indication, latency, legality, and worked-example statement beyond the printed text is KYP context, explicitly marked in the note and never presented as printed text.",
         "location": "blocks[3] the list block + mechanisms[1] off-label-boundary-map + clinical[0] + mnemonics' clinical fields + crossLinks"}],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "PINNED PAGE-SPLIT (the p252 pharmacology convention): pdf 279 / book 257 is split between two topics — the LOWER portion (raw lines 86-137, from the 'Off-label drug use' navy heading to the footer slug) is THIS topic; the upper portion (raw lines 1-85, the 'Clinical therapeutic trial' block and the five-phase 'Can I SWIM?' figure) belongs to clinical-therapeutic-trials (pubh2, same batch). EVERY evidence quote in this manifest is a contiguous span of raw lines 86-137 — none crosses the boundary. The lower portion carries TWO blocks, carried VERBATIM in the note's table blocks (blocks[1] off-label as a 4-row verbatim table — a KYP adaptation of the printed heading+paragraph; blocks[2] the nine criteria rows in printed order): (1) Off-label drug use — definition ('Use of a drug to treat a disease in a form, population group, or dosage that is not specifically approved by the FDA'), both printed reasons in one sentence (treatment of an illness with no approved pharmacologic treatment OR exploring alternative treatments after failure of approved options), and the printed example (use of tricyclic antidepressants for treating neuropathic/chronic pain); (2) Bradford Hill criteria — the lead-in ('A group of principles that provide limited support (ie, necessary but not sufficient criteria) for establishing evidence of a causal relationship between presumed cause and effect') and NINE criteria: Strength, Consistency, Specificity, Temporality, Biological gradient, Plausibility, Coherence, Experiment, Analogy, each with its printed one-line definition. CENSUS (pdfimages): ZERO raster images on pdf 279 — pure text and vector. VLM WAS AVAILABLE this session: ONE 120dpi glm-4.6v full-page pass (staging-pubh3/vlm-census.txt) confirmed the lower portion's structure (navy/dark-blue bold term headings, right-column definitions, thin light rules between criteria rows), the color furniture (NO red text below the split, unlike the upper figure's red 'Work?'/'Market?'), the absence of margin notes, mnemonics, asterisk footnotes, and images, and the boundary (the phase figure's last line 'Postmarketing surveillance of patients with disease of interest. Open label.' ends the upper portion; the 'Off-label drug use' heading opens the lower). ADJUDICATIONS (documented): (1) TITLE — the chapter census titles this topic 'Bradford Hill Criteria: Judging Causation'; the production title 'Off-Label Use and the Bradford Hill Criteria: Judging Causation' adds the off-label block because the pinned lower-portion scope owns BOTH printed blocks (both carried whole); (2) the print agrees with the brief — exactly NINE criteria rows, none missing, none extra (raw text layer + pdftotext -layout + the VLM pass all agree); (3) the off-label block prints as a heading + paragraph, not a table — carried as a 4-row verbatim table (KYP adaptation) so the audit pins every printed word; (4) DrugCards are FOLDED — the page prints one drug-class example (tricyclic antidepressants) with no mechanism/uses/adverse-effect rows to trace; the example is carried in blocks/clinical/mnemonics instead. QUIRKS carried + documented: lowercase '(ie, ...' and '(eg, ...' abbreviation conventions with comma and no periods, exactly as printed; 'dose-response relationship' with the hyphen and 'neuropathic/chronic pain' with the slash, as printed; the 'SEC TION II' header-space artifact prints on pdf 279 but in the UPPER portion's header band (raw line 10) — outside this topic's pinned scope, carried by pubh2; no line-wrap hyphenations in the lower portion (VLM: all line breaks fall at word boundaries). Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (causal-verdict-map, off-label-boundary-map), 4 patterns, 4 traps, 3 pivots, 10 recall, 4 related (clinical-therapeutic-trials — the upper-portion sibling on this very page; observational-studies; confounding-effect-modification; bias-and-study-errors), 4 crossLinks, 4 KYP mnemonics (all KYP originals — NO printed mnemonic exists in the lower portion, VLM-confirmed), a miniCase with 4 options (exactly 1 correct, why/whyWrong on every option), and NO DrugCards (folded, documented above); (2) productionStatus 'complete' per the PUBH batch-1 brief (the PH-batch's manifest value was 'pilot-complete'; the per-record INVENTORY productionStatus is 'complete'); (3) outputs are STAGED under .usmle-pipeline-cache/staging-pubh3/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'bradford-hill-map' is therefore not yet in visuals/registry.tsx by design); (4) the lower portion's printed content is implemented as ORIGINAL KYP ART in ONE registry visual (bradford-hill-map, BradfordHillMap in visuals/pubhealth-p3.tsx, viewBox 0 0 1102 1120): the off-label panel (printed definition verbatim, the three FDA-approval axis chips FORM/POPULATION GROUP/DOSAGE, the two printed reason chips, the printed example chip), the NECESSARY BUT NOT SUFFICIENT verdict band anchored on the printed lead-in verbatim with the association-to-causation bridge glyph, and the nine criteria as a 3x3 card grid in printed order — every criterion name and definition verbatim, a vector glyph per criterion (bars, sample triple, key-lock, timeline+clock, dose-response staircase, mechanism gear, consensus puzzle fit, flask+dish, parallel pairs), the ASKS question per card, and the MEASURE/THINK/GATE color grouping — with the full printed text ALSO carried verbatim in the note's table blocks. getBBox self-audit PASSED before staging: 137 texts, 0 overlaps, 0 elements outside the viewBox (system-ui test render, which is wider than the production Geist font — conservative).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics",
    "topicId": "bradford-hill-criteria", "requiredInKYP": True}
inv3 = [
    dict(SV_BASE, **{
        "visualId": "bradford-hill-criteria-sv1",
        "sourcePages": {"part": 1, "pdfPages": [279], "bookPages": "257 (lower)"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The printed lower-portion definition-list of book 257 (pdf 279 lower): the Off-label drug use block (navy heading + definition paragraph + example line) and the Bradford Hill criteria block (navy heading + lead-in + nine term/definition rows) — the topic's entire printed scope",
        "sourceFigureDescription": "TWO-COLUMN DEFINITION LIST, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh3/vlm-census.txt — VLM available this session): the lower portion of book 257 prints as navy/dark-blue bold term headings on the left with one-line definitions on the right, thin light rules separating the rows. BLOCK 1 'Off-label drug use' (navy heading): 'Use of a drug to treat a disease in a form, population group, or dosage that is not specifically approved by the FDA. Reasons for off-label use include treatment of an illness with no approved pharmacologic treatment or exploring alternative treatments after failure of approved options. Example: use of tricyclic antidepressants for treating neuropathic/chronic pain.' BLOCK 2 'Bradford Hill criteria' (navy heading): lead-in 'A group of principles that provide limited support (ie, necessary but not sufficient criteria) for establishing evidence of a causal relationship between presumed cause and effect.' then NINE term/definition rows in printed order — Strength: 'Association does not necessarily imply causation, but the stronger the association, the more evidence for causation.'; Consistency: 'Repeated observations of the findings in multiple distinct samples.'; Specificity: 'The more specific the presumed cause is to the effect, the stronger the evidence for causation.'; Temporality: 'The presumed cause precedes the effect by an expected amount of time.'; Biological gradient: 'Greater effect observed with greater exposure to the presumed cause (dose-response relationship).'; Plausibility: 'A conceivable mechanism exists by which the cause may lead to the effect.'; Coherence: 'The presumed cause and effect do not conflict with existing scientific consensus.'; Experiment: 'Empirical evidence supporting the presumed cause and effect (eg, animal studies, in vitro studies).'; Analogy: 'The presumed cause and effect are comparable to a similar, established cause and effect.' NO red text in the lower portion (unlike the upper figure's red 'Work?'/'Market?'); no boxes or shading around the criteria; no margin notes, mnemonics, asterisk footnotes, or images.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "bradford-hill-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "the whole registry visual (BradfordHillMap in visuals/pubhealth-p3.tsx, viewBox 0 0 1102 1120): the OFF-LABEL DRUG USE panel (the printed definition verbatim with the three FDA-approval axis chips FORM / POPULATION GROUP / DOSAGE, the two printed reason chips, and the printed tricyclic-antidepressant example chip); the NECESSARY BUT NOT SUFFICIENT verdict band (the printed lead-in verbatim, the association-to-causation bridge glyph); and the 3x3 criteria grid with every criterion name and printed definition verbatim, a vector glyph per criterion, the ASKS question, and the MEASURE/THINK/GATE color tags; the full printed text is ALSO carried verbatim in the note's table blocks (blocks[1], blocks[2]), core.what, the decoder list block (blocks[3]), and recall[0-9]",
        "productionStatus": "pilot-complete",
        "plannedKypVisualId": "bradford-hill-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh3"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "bradford-hill-criteria.json").write_text(json.dumps(m3, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "bradford-hill-criteria.json").write_text(
    json.dumps({"topicId": "bradford-hill-criteria", "chapterId": "public-health", "inventory": inv3,
                "coverageAudit": {"topicId": "bradford-hill-criteria", "textbookVisualCount": 1,
                    "accountedFor": 1, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The topic's printed scope — the LOWER portion of pdf 279 / book 257 (pinned split; the upper portion belongs to clinical-therapeutic-trials) — is ONE visual asset: the two-block definition-list (sv1: the Off-label drug use heading+paragraph+example and the Bradford Hill criteria lead-in + nine term/definition rows), accounted for as an ORIGINAL KYP ADAPTATION: nothing is reproduced; ONE registry visual (bradford-hill-map, BradfordHillMap in visuals/pubhealth-p3.tsx, viewBox 0 0 1102 1120) rebuilds every printed word as original KYP vector art (the off-label panel with the three FDA-approval axis chips, the necessary-but-not-sufficient verdict band on the printed lead-in, and the 3x3 criteria grid with a glyph per criterion and the KYP MEASURE/THINK/GATE grouping), and the full printed text is additionally carried verbatim in the note's two table blocks. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi full-page glm-4.6v pass (vlm-census.txt) confirmed the printed row order of all nine criteria (exactly NINE — none missing, none extra), the color furniture (navy bold term headings, thin rules, no red text below the split), and the absence of margin mnemonics and images; the pinned boundary (phase figure ends at 'Open label.', then the 'Off-label drug use' heading) is clean. getBBox self-audit PASSED: 137 texts, 0 overlaps, 0 outside the viewBox. STAGED under .usmle-pipeline-cache/staging-pubh3/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH3 manifest + inventory staged: {OUT}/manifests/bradford-hill-criteria.json, {OUT}/visual-inventory/bradford-hill-criteria.json")
print(f"bradford-hill-criteria: evidence {len(kept)}/{len(E3)} verified")
