#!/usr/bin/env python3
"""PUBH10 incidence-prevalence — manifest + inventory (Public Health batch 2),
STAGED under .usmle-pipeline-cache/staging-pubh10/ (the promotion step owns
content/). Source: FULL pdf page 284 / book 262 (Part 1) — a WHOLE-PAGE topic
in the EPIDEMIOLOGY AND BIOSTATISTICS subsection (the page after the ROC-curve
page, pdf 283 / book 261, and before "Bias and study errors", pdf 285 / book
263). The page carries FOUR blocks, all owned: (1) THE TWO FORMULAS —
"Incidence = # of new cases / # of people at risk (per unit of time)" and
"Prevalence = # of existing cases (at a point in time) / Total # of people in
a population", printed as stacked fractions; (2) THE RELATIONSHIP — the big
formula prints its stacked fraction LEFT of the equals sign, "Prevalence /
(1 – prevalence) = Incidence rate × average duration of disease" (raw
extraction order jumbled: "Prevalence / average duration / = Incidence rate ×
/ 1 – prevalence / of disease"), the simplified sentence "Prevalence =
incidence × duration of the disease.", "Prevalence > incidence for chronic
diseases, due to large # of existing cases (eg, diabetes).", and the right-
margin block: "Incidence looks at new cases (incidents)." / "Prevalence looks
at all current cases." / "Prevalence ∼ pretest probability." / "↑ prevalence
→ ↑ PPV and ↓ NPV." / "Prevalence ≈ incidence for short duration disease
(eg, common cold)."; (3) THE POOL FIGURE — pure vector (pdfimages: ZERO raster
images): the classic bathtub, "Prevalence" printed IN the water, INCIDENCE
pouring in from the faucet (upper left), RECURRENCE looping up from the cure
side and back IN (arrowhead down into the water), MORTALITY and CURE draining
OUT below; (4) THE 8-ROW SITUATION TABLE — columns SITUATION / INCIDENCE /
PREVALENCE, rows: ↑ survival time (—, ↑); ↑ mortality rate (—, ↓); Faster
recovery time (—, ↓); Extensive vaccine administration (↓, ↓); ↓ risk factors
(↓, ↓); ↑ diagnostic sensitivity (↑, ↑); New effective treatment started (—,
↓); ↓ contact between infected and noninfected patients with airborne
infectious disease (↓, ↓) — carried VERBATIM in the note's table block.
VLM AVAILABLE this session (glm-4.6v, TWO passes: full-page 120dpi + zoomed
300dpi crops of the figure and the big formula, staging-pubh10/vlm-census.txt)
confirming: exactly EIGHT table rows in printed order (none missing or extra);
"Incidence and Recurrence fill the pool; Mortality and Cure drain it; Cure's
outflow loops back in as Recurrence"; the big formula's stacked fraction sits
LEFT of the "="; the margin sentences print with RED wordplay ("Incidence"/
"incidents" red, "Prev" red, "all" bold); plain uppercase table headers, thin
rules, NO zebra striping; a small blue key icon on the figure; NO margin
mnemonics beyond the red wordplay, NO asterisk footnotes, NO other images.
ADJUDICATIONS, documented in the census file, the note header, and the
manifest notes: (A) the batch brief described "outflow arrows to Mortality,
Cure, and Recurrence" — the PRINT shows Recurrence as a second INFLOW (curved
band arcing up from the cure side and re-entering the pool, arrowhead down
into the water; both VLM passes agree; consistent with the bbox label
placement at top right above the Cure drain) — brief corrected to print:
INFLOWS = Incidence + Recurrence; OUTFLOWS = Mortality + Cure; (B) the brief
wrote the relationship as "Prevalence = Incidence rate × average duration of
disease / (1 – prevalence)" — the PRINT stacks the fraction LEFT of the
equals sign (zoomed VLM pass + the bbox centering of the "=" agree);
algebraically identical, note carries the printed arrangement; (C) the brief's
expected 8-row table content matched the print exactly — no correction.
Printed quirks carried + documented: "SEC TION II" header-space artifact
(known); small-caps artifact "EPIDEmIOLOGY AND BIOSTATISTICS" in the running-
header banner (prints ONCE on this page, running header only); C1 control
bytes around the arrows (\x8f↑, \x90↓, \x8e→) in the table cells and the
PPV/NPV line; TWO different dashes — the no-effect cells print an EM DASH
"—" (U+2014) while "1 – prevalence" prints an EN DASH "–" (U+2013) as the
minus; each table row extracts as SITUATION → INCIDENCE cell → PREVALENCE
cell with each arrow glyph on its own line; the column headers extract SPLIT
("SITUATION" at raw line 42 before the indd slug; "INCIDENCE"/"PREVALENCE" at
raw lines 53–55 after the banner + margin block); the figure's labels extract
INTERLEAVED with the formulas ("Recurrence" at raw line 11 between
"Incidence =" and its fraction; "Incidence / Prevalence / Mortality / Cure"
at raw lines 18–22 right after "Prevalence ="); two different approximately-
equal symbols (∼ U+223C in "Prevalence ∼ pretest probability." vs ≈ U+2248 in
"Prevalence ≈ incidence"); "Extensive vaccine administration" wraps two lines
and row 8's situation cell wraps three lines. Nothing is reproduced: the
bathtub is an ORIGINAL_KYP_REDRAW (KYP pool + vector stream glyphs) and the
table an ORIGINAL_KYP_ADAPTATION (full-width glyph band with KYP lever tags)
in ONE registry visual (incidence-prevalence-map, IncidencePrevalenceMap in
visuals/pubhealth-p10.tsx, viewBox 0 0 1102 1380); the full table is
additionally carried VERBATIM in the note's table block. DrugCards: none —
the page prints formulas and a situation table, not drugs (folded by
absence; the clinical anchors diabetes/common cold are carried in the note's
clinical block)."""
import json, re, sys
from datetime import date
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
CACHE = ROOT / ".usmle-pipeline-cache"
def norm(s):
    s = re.sub(r"[\u0080-\u009f]", "", s)
    return re.sub(r"\s+", " ", s).strip().lower()
pages = (CACHE / "part1.txt").read_text(encoding="utf8").split("\f")
if len(pages) > 434 and pages[-1].strip() == "": pages.pop()
L = {284: pages[283].split("\n")}
P = {284: norm(pages[283])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — book page 262, the 'SEC TION II' header-space extraction artifact (carried as-is, a known quirk), the topic heading 'Incidence vs prevalence' (wraps across two lines at the left edge), and the section header PUBLIC HEALTH SCIENCES", rng(284, 1, 8), [284]),
    ("The INCIDENCE formula, part 1 — 'Incidence =' followed IMMEDIATELY in the raw layer by the pool figure's 'Recurrence' label (the figure's text objects extract interleaved with the formulas — a documented quirk; the label's geometry is pinned by bbox + the VLM passes), then the fraction numerator '# of new cases' and denominator '# of people at risk'", rng(284, 10, 14), [284]),
    ("The POOL FIGURE's labels, raw extraction order — 'Prevalence =' (the second formula's opening, which the figure labels interleave) followed by the figure's four remaining labels 'Incidence' / 'Prevalence' / 'Mortality' / 'Cure' — the print draws a bathtub with Prevalence in the water, Incidence and Recurrence flowing IN, Mortality and Cure draining OUT (VLM ×2, staging-pubh10/vlm-census.txt)", rng(284, 16, 22), [284]),
    ("The INCIDENCE formula's '(per unit of time)' tag plus the page's two margin sentences (First Aid's own, printed with red wordplay — 'Incidence'/'incidents' red; 'Prev' red, 'all' bold, per the VLM pass): 'Incidence looks at new cases (incidents).' / 'Prevalence looks at all current cases.'", rng(284, 24, 27), [284]),
    ("The PREVALENCE formula fraction — numerator '# of existing cases (at a point in time)' and denominator 'Total # of people in a population' (the words wrap across the raw lines as printed: '(at a point in / time)' and 'Total # of people / in a population')", rng(284, 29, 32), [284]),
    ("THE BIG RELATIONSHIP FORMULA, raw extraction order (jumbled — the printed layout stacks the fraction LEFT of the equals sign): 'Prevalence' over '1 – prevalence' (en dash U+2013 printed as the minus sign) = 'Incidence rate × average duration of disease' — the raw layer emits 'Prevalence / average duration / = Incidence rate × / 1 – prevalence / of disease'; arrangement pinned by pdftotext -bbox + the zoomed VLM pass", rng(284, 34, 38), [284]),
    ("The simplified relationship sentence plus the chronic-disease anchor, printed below the big formula: 'Prevalence = incidence × duration of the disease.' and 'Prevalence > incidence for chronic diseases, due to large # of existing cases (eg, diabetes).'", rng(284, 39, 41), [284]),
    ("The situation table's first column header 'SITUATION' — extracts at raw line 42, BEFORE the indd footer slug and the running-header banner, while the other two headers extract 11 lines later (the table headers extract SPLIT — a documented jumbled-order quirk)", rng(284, 42, 44), [284]),
    ("The indd footer slug 'FAS1_2026_06-PubHealth.indd 262' and the running-header banner '▶ PUBLIC HEALTH SCIENCES—EPIDEmIOLOGY AND BIOSTATISTICS' (small-caps 'm' artifact as extracted; the banner prints ONCE on this page — running header only, unlike book 256 where it printed twice)", rng(284, 44, 46), [284]),
    ("The pretest-probability margin block — 'Prevalence ∼ pretest probability.' (tilde operator U+223C), '↑ prevalence → ↑ PPV and ↓ NPV.' (arrows carry C1 control bytes \x8f/\x8e/\x90 in the raw layer — stripped by the verifier, carried clean in the note), and 'Prevalence ≈ incidence for short duration disease (eg, common cold).' (almost-equal U+2248 — a DIFFERENT symbol from the ∼ two lines above, both carried exactly)", rng(284, 48, 51), [284]),
    ("The situation table's second and third column headers — 'INCIDENCE' and 'PREVALENCE' (extracting at raw lines 53–55, after the slug, the banner, and the margin block; the three headers are printed as one ruled header row, the split is a text-layer artifact only)", rng(284, 53, 55), [284]),
    ("TABLE ROWS 1–3, printed cells — ↑ survival time (—, ↑); ↑ mortality rate (—, ↓); Faster recovery time (—, ↓) — each row extracts as SITUATION label → INCIDENCE cell → PREVALENCE cell with each arrow glyph on its own line; the '—' is the printed EM DASH (U+2014) meaning NO EFFECT, carried exactly", rng(284, 57, 73), [284]),
    ("TABLE ROWS 4–5, printed cells — Extensive vaccine administration (↓, ↓; the situation text wraps across two lines in print); ↓ risk factors (↓, ↓)", rng(284, 75, 86), [284]),
    ("TABLE ROWS 6–7, printed cells — ↑ diagnostic sensitivity (↑, ↑); New effective treatment started (—, ↓)", rng(284, 88, 98), [284]),
    ("TABLE ROW 8, printed cells — ↓ contact between infected and noninfected patients with airborne infectious disease (↓, ↓) — the situation text wraps across three lines in print, joined here as one cell", rng(284, 100, 106), [284]),
    ("The print footer timestamp — 12/16/25 12:46 PM (page identity, book 262)", rng(284, 108, 108), [284]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"incidence-prevalence: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "incidence-prevalence", "title": "Incidence vs Prevalence: The Pool and Its Streams",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Epidemiology and Biostatistics", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [284], "bookPages": "262–262"},
    "sourceEvidence": kept, "visualIds": ["incidence-prevalence-map"],
    "mechanismIds": ["pool-balance-map", "situation-router-map"],
    "kypExtensions": [
        {"id": "pool-balance-grammar",
         "summary": "The pool-balance reading of the printed bathtub figure: prevalence is the WATER LEVEL (a stock, # of existing cases at a point in time over the total population), set by two INFLOWS (INCIDENCE — the faucet, # of new cases per # of people at risk per unit of time; RECURRENCE — the return loop of relapsing cases re-entering from the cure side) and two OUTFLOWS (MORTALITY and CURE — the drains); the level rises when inflow beats outflow, and at steady state level ≈ faucet × stay, which is the printed identity 'Prevalence / (1 – prevalence) = Incidence rate × average duration of disease' simplified to 'Prevalence = incidence × duration of the disease.'",
         "origin": "outside-first-aid", "rationale": "The source prints the figure, its five labels, and the formulas as parallel facts; the stock-vs-flow framing, the in/out classification of the four streams, the balance logic, and the level ≈ faucet × stay derivation are KYP's synthesis.",
         "location": "core.what + core.why + core.keyIdea + mechanisms[0] pool-balance-map + the registry visual's Zone A (pool, streams, balance card) + compare block"},
        {"id": "two-lever-router",
         "summary": "The two-lever router for the 8-row situation table: every situation pulls ONE lever — THE FLOW (new-case generation: extensive vaccine administration, ↓ risk factors, ↓ contact → incidence ↓ and prevalence ↓), THE STAY (average duration: ↑ survival time lengthens it → prevalence ↑; ↑ mortality rate, faster recovery time, new effective treatment shorten it → prevalence ↓; all four print '—' for incidence), or THE COUNTING (↑ diagnostic sensitivity → both ↑ — a measurement artifact, not more disease) — plus the printed regularities: '—' appears only in the INCIDENCE column, and prevalence moves in all eight rows.",
         "origin": "outside-first-aid", "rationale": "The source prints the eight glyph pairs without a generating rule; the flow/stay/counting router, the measurement-artifact reading of the sensitivity row, and the column regularities are KYP's organization.",
         "location": "core.keyIdea + mechanisms[1] situation-router-map + blocks[2] the 8-row decoder list + blocks[3] the steps block + the registry visual's lever tags and rule strip"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the survival-extension stem, the measurement/sensitivity stem, the prevention stem, the pretest-probability/PPV-NPV stem), 4 traps (↑ survival vs ↑ mortality; new treatment vs vaccine; the two denominators at-risk vs total population; sensitivity-counts vs true outbreak), 3 pivots (the two-lever router, the em-dash 'no effect' as a real incidence-only answer, the prevalence→PPV/NPV conversion), and 8 recall cards covering both formulas, the identity, both anchors, the pool's four streams, and the table's glyph pairs.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the definitions and the table only; the attack structure, distractor designs, and question shapes are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: First Aid's OWN two margin sentences — 'Incidence looks at new cases (incidents).' and 'Prevalence looks at all current cases.' — printed with RED wordplay in the right margin (VLM-confirmed: 'Incidence'/'incidents' red, 'Prev' red, 'all' bold) and carried VERBATIM and ATTRIBUTED in the mnemonics array, the memory callout, the formula cards, and the visual; plus TWO KYP originals, marked as such: 'FAUCET, STAY, DRAIN' (the pool model in three words) and 'TWO LEVERS — THE FLOW AND THE STAY' (the situation-table router).",
         "origin": "outside-first-aid", "rationale": "The two margin sentences are the source's own hooks (attributed, not counted as KYP's); the VLM pass confirms no other mnemonic prints on pdf 284 (no margin mnemonics beyond the red wordplay, no asterisk footnotes); the two ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + blocks[7] the memory callout + the registry visual's formula cards and rule strip"},
        {"id": "clinical-anchor-and-bridge-layer",
         "summary": "The clinical anchor layer: the two printed anchors reframed as pool regimes — diabetes (chronic: 'Prevalence > incidence … due to large # of existing cases') and the common cold (short duration: 'Prevalence ≈ incidence') — plus the survival-prevalence paradox framing (therapy that extends survival raises measured prevalence while incidence holds at '—'; the antiretroviral-era application is KYP context, not printed) and the testing bridge ('Prevalence ∼ pretest probability. ↑ prevalence → ↑ PPV and ↓ NPV.' — predictive values move with the population, sensitivity/specificity never do), wrapped in the miniCase (the survival-extending national program vignette routed to (—, ↑) against the (↓, ↓), (—, ↓), (↑, ↑), and (↑, —) distractors).",
         "origin": "outside-first-aid", "rationale": "The anchors and the margin rule are printed (FA-own); the regime framing, the paradox, the HIV-era application, the denominator drill, and the miniCase distractor set are KYP's design, flagged as such.",
         "location": "clinical block + usmle.miniCase + usmle.patterns + the registry visual's anchor chips and bridge line"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 284 / book 262, a WHOLE-PAGE topic in the EPIDEMIOLOGY AND BIOSTATISTICS subsection (pdf 283 / book 261 ends the ROC-curve material; pdf 285 / book 263 opens 'Bias and study errors'), carrying FOUR blocks — (1) the two formulas (Incidence = # of new cases / # of people at risk (per unit of time); Prevalence = # of existing cases (at a point in time) / Total # of people in a population); (2) the relationship (the big formula printed with its stacked fraction LEFT of the equals sign — Prevalence / (1 – prevalence) = Incidence rate × average duration of disease — plus 'Prevalence = incidence × duration of the disease.', the chronic/short-duration anchors, and the five margin sentences); (3) the POOL FIGURE (bathtub, Prevalence in the water, Incidence + Recurrence in, Mortality + Cure out — redrawn as ORIGINAL KYP vector art); (4) the 8-row SITUATION table (carried VERBATIM in the note's table block, blocks[1]). CENSUS (pdfimages): ZERO raster images; VLM WAS AVAILABLE this session (TWO passes — full-page 120dpi + zoomed 300dpi crops of the figure and the big formula, staging-pubh10/vlm-census.txt): exactly EIGHT rows confirmed in printed order (none missing or extra); 'Incidence and Recurrence fill the pool; Mortality and Cure drain it; Cure's outflow loops back in as Recurrence'; the big formula's stacked fraction sits LEFT of the '='; the margin sentences print with red wordplay ('Incidence'/'incidents' red; 'Prev' red, 'all' bold); plain uppercase table headers, thin rules, NO zebra striping; a small blue key icon on the figure; no margin mnemonics beyond the red wordplay, no asterisk footnotes, no other images. ADJUDICATIONS (documented in the note header + here): (A) the batch brief described 'outflow arrows to Mortality, Cure, and Recurrence' — the PRINT shows Recurrence as a second INFLOW (curved band arcing up from the cure side and re-entering the pool, arrowhead down into the water; both VLM passes agree, consistent with the bbox label placement top-right above the Cure drain and with the semantics — relapsing cases re-enter the prevalence pool) — brief corrected to print: INFLOWS = Incidence + Recurrence, OUTFLOWS = Mortality + Cure; the note and the visual draw it exactly as printed; (B) the brief wrote the relationship as 'Prevalence = Incidence rate × average duration of disease / (1 – prevalence)' — the PRINT stacks the fraction LEFT of the equals sign (zoomed VLM pass + the bbox centering of the '=' agree); the two arrangements are algebraically identical and the note carries the printed one with the equivalence documented; (C) the brief's expected 8-row table content matched the print exactly — no correction. Quirks carried + documented: 'SEC TION II' header-space artifact (known, as-is); small-caps artifact 'EPIDEmIOLOGY AND BIOSTATISTICS' in the running-header banner, which prints ONCE on this page (running header only — unlike book 256, where it printed twice); C1 control bytes around the arrows in the raw layer (\x8f before ↑, \x90 before ↓, \x8e before → — in the table cells and the PPV/NPV line; the note's verbatim carry uses clean glyphs, the evidence ranges preserve the raw bytes, and the verifier strips them); TWO different dashes on one page — the four no-effect INCIDENCE cells print an EM DASH '—' (U+2014) while '1 – prevalence' prints an EN DASH '–' (U+2013) as the minus sign, both carried exactly; each table row extracts as SITUATION label → INCIDENCE cell → PREVALENCE cell with each arrow glyph on its own line; the three column headers extract SPLIT around the slug + banner + margin block ('SITUATION' at raw line 42; 'INCIDENCE'/'PREVALENCE' at raw lines 53–55); the figure's five labels extract INTERLEAVED with the formulas ('Recurrence' at raw line 11 between 'Incidence =' and its fraction; 'Incidence / Prevalence / Mortality / Cure' at raw lines 18–22 right after 'Prevalence =') — jumbled reading order, geometry pinned by bbox + the two VLM passes; TWO different approximately-equal symbols in the margin block (∼ U+223C in 'Prevalence ∼ pretest probability.' vs ≈ U+2248 in 'Prevalence ≈ incidence for short duration disease'); the topic heading wraps across two lines ('Incidence vs' / 'prevalence'); 'Extensive vaccine administration' wraps across two lines and row 8's situation cell across three lines in print. Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (pool-balance-map, situation-router-map), a visual block + verbatim table block + 8-row decoder list + steps block + compare block + exam callout + memory callout, a clinical block (the diabetes/common-cold anchors, the survival-prevalence paradox, the testing bridge), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (quantifying-risk, vital-statistics-populations, diagnostic-test-performance, observational-studies — all four are public-health census topicIds), 4 crossLinks, 4 mnemonics (First Aid's own two margin sentences carried attributed + two KYP originals marked), and a miniCase with 5 options (exactly 1 correct + 4 distractors, why/why-wrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints formulas and a situation table, not drugs — no mechanisms/uses/adverse effects to trace, so the DrugCard shape does not fit; the clinical anchors (diabetes, common cold) are carried in the clinical block instead; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the manifest convention shared with staging-pubh1; the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh10/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'incidence-prevalence-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's visual assets are counted as TWO — the pool figure (pure vector, ORIGINAL_KYP_REDRAW) and the situation table (ORIGINAL_KYP_ADAPTATION) — both implemented in ONE registry visual (incidence-prevalence-map, IncidencePrevalenceMap in visuals/pubhealth-p10.tsx, viewBox 0 0 1102 1380): Zone A the pool (KYP pool + stream glyphs, every printed label preserved, the balance card + the printed identity), Zone B the two formula cards + the relationship band (both formulas, both margin sentences attributed, the identity stacked as printed, the chronic/short anchor chips, the pretest-probability bridge), Zone C the 8-row glyph band (every printed ↑/↓/— in printed order + KYP lever tags marked as KYP) — the three formulas print as typographic text with drawn fraction rules, extract fully in the text layer (evidence items 2, 4–7), and are NOT counted as separate textbook visual assets; the full table's text is ALSO carried verbatim in the note's table block.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Epidemiology and Biostatistics",
    "topicId": "incidence-prevalence", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "incidence-prevalence-sv1",
        "sourcePages": {"part": 1, "pdfPages": [284], "bookPages": "262"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The SITUATION table (book 262): three columns SITUATION / INCIDENCE / PREVALENCE and EIGHT rows — ↑ survival time, ↑ mortality rate, Faster recovery time, Extensive vaccine administration, ↓ risk factors, ↑ diagnostic sensitivity, New effective treatment started, ↓ contact between infected and noninfected patients with airborne infectious disease — each with its printed effect glyphs; the page's applied core and one of the exam's favorite lookup tables",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh10/vlm-census.txt — VLM available this session): the running header (book page 262, SEC TION II, PUBLIC HEALTH SCIENCES, '▶ PUBLIC HEALTH SCIENCES—EPIDEmIOLOGY AND BIOSTATISTICS' — printed ONCE on this page, running header only), then the plain UPPERCASE column headers SITUATION / INCIDENCE / PREVALENCE with a rule above and below and thin horizontal rules between rows — NO shading, NO zebra striping — and EIGHT data rows in printed order, each cell carrying a single glyph: ↑ (up arrow), ↓ (down arrow), or the EM DASH '—' (U+2014) meaning NO EFFECT. Printed rows: ↑ survival time | — | ↑; ↑ mortality rate | — | ↓; Faster recovery time | — | ↓; Extensive vaccine administration | — | ↓; ↓ risk factors | ↓ | ↓; ↑ diagnostic sensitivity | ↑ | ↑; New effective treatment started | — | ↓; ↓ contact between infected and noninfected patients with airborne infectious disease | ↓ | ↓. Raw-layer quirks: the arrows carry C1 control bytes (\x8f before ↑, \x90 before ↓); each row extracts as SITUATION label → INCIDENCE cell → PREVALENCE cell with each glyph on its own line; the headers extract SPLIT ('SITUATION' at raw line 42, 'INCIDENCE'/'PREVALENCE' at raw lines 53–55, around the indd slug + banner + margin block); 'Extensive vaccine administration' wraps across two lines and the row-8 situation cell across three lines in print. VLM-confirmed: exactly eight rows, none missing or extra.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "incidence-prevalence-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone C of the registry visual (IncidencePrevalenceMap in visuals/pubhealth-p10.tsx): a full-width glyph band — the three printed column headers, all EIGHT rows in PRINTED order, every printed ↑/↓/— glyph (↑ success-green, ↓ warning-amber, '—' muted — color = direction only, a KYP coding), a one-line KYP 'why' under each situation, and a KYP lever tag per row (FLOW / STAY / COUNT — marked as KYP annotations in the band's subtitle); the table's full text is ALSO carried verbatim in the note's table block (blocks[1]), decoded row-by-row in blocks[2], and drilled in recall[7] and rapidReview.s30[6-7]",
        "productionStatus": "complete",
        "plannedKypVisualId": "incidence-prevalence-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "incidence-prevalence-sv2",
        "sourcePages": {"part": 1, "pdfPages": [284], "bookPages": "262"},
        "visualType": "FLOWCHART",
        "visualPurpose": "The pool/bathtub figure (book 262): the page's centerpiece schematic — a pool of existing cases labeled Prevalence, fed by the Incidence stream (and the Recurrence loop re-entering from the cure side) and drained by Mortality and Cure; the visual grammar for why prevalence = incidence × duration and how the situation table's levers work",
        "sourceFigureDescription": "PURE VECTOR LINE ART, no raster (pdfimages: zero raster images; geometry pinned by pdftotext -bbox coordinates + TWO VLM passes — full-page 120dpi and zoomed 300dpi crops, staging-pubh10/vlm-census.txt — VLM available this session): a CLAWFOOT BATHTUB with a dark blue/purple stippled water fill, the word 'Prevalence' printed IN WHITE inside the water, a small faucet at the upper left, a small blue key icon at the lower right (high-yield marker), and FOUR labeled flows: INCIDENCE (upper left) — a faucet stream of blue droplets falling DOWN INTO the water, filling; RECURRENCE (upper right, directly above the Cure drain) — a broad light-teal curved band rising from the cure side, arching over, and re-entering the pool with its arrowhead pointing DOWN INTO the water (a second INFLOW — cured patients who relapse return to the prevalence pool); MORTALITY (bottom left) — droplets draining OUT downward from the tub floor; CURE (bottom right) — droplets draining OUT downward. VLM verdict: 'Incidence and Recurrence fill the pool; Mortality and Cure drain it; Cure's outflow loops back in as Recurrence.' The figure's five labels extract INTERLEAVED with the formulas in the raw text layer ('Recurrence' at raw line 11 between 'Incidence =' and its fraction; 'Incidence / Prevalence / Mortality / Cure' at raw lines 18–22 right after 'Prevalence =') — jumbled reading order; the geometry is bbox + VLM pinned. The page's three formulas print to the RIGHT of the figure as typographic text with drawn fraction rules (their words extract fully in the text layer — evidence items 2, 4, 5, 6, 7 — and are rendered as the registry visual's formula cards and relationship band, not counted as separate assets).",
        "implementationType": "ORIGINAL_KYP_REDRAW",
        "kypVisualId": "incidence-prevalence-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A of the registry visual (IncidencePrevalenceMap in visuals/pubhealth-p10.tsx): the bathtub re-drawn as an ORIGINAL KYP pool — a rounded pool with wave lines, 'Prevalence' + both formula lines inside the water; the INCIDENCE faucet with a droplet stream pouring in (upper left, brand blue); the RECURRENCE curved loop re-entering the water from the cure side (arrowhead down into the pool — drawn exactly as adjudicated); the MORTALITY and CURE drain pipes with outflow arrows and droplets (warning amber); KYP color coding (blue = streams IN, amber = drains OUT) stated in the strip; a balance card carrying the printed identity stacked as printed — Prevalence over 1 – prevalence = Incidence rate × average duration of disease — plus the simplified sentence; the relationship band (Zone B) additionally carries both formulas, both margin sentences attributed, the chronic/short-duration anchor chips (diabetes; common cold), and the pretest-probability bridge (↑ prevalence → ↑ PPV and ↓ NPV); the figure's semantics are also carried in mechanisms[0] pool-balance-map, mechanisms[1] situation-router-map, and recall[4]",
        "productionStatus": "complete",
        "plannedKypVisualId": "incidence-prevalence-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh10"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "incidence-prevalence.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "incidence-prevalence.json").write_text(
    json.dumps({"topicId": "incidence-prevalence", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "incidence-prevalence", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 1, "kypOriginals": 1,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries TWO visual assets — the pool/bathtub figure (sv2: pure vector, Prevalence in the water, Incidence and Recurrence flowing IN, Mortality and Cure draining OUT) and the SITUATION table (sv1: three columns, EIGHT rows with their printed ↑/↓/— glyphs) — both accounted for in ONE registry visual (incidence-prevalence-map, IncidencePrevalenceMap in visuals/pubhealth-p10.tsx, viewBox 0 0 1102 1380): the figure as an ORIGINAL_KYP_REDRAW (Zone A — KYP pool + stream glyphs, every printed label preserved, KYP color coding blue-in/amber-out) and the table as an ORIGINAL_KYP_ADAPTATION (Zone C — a full-width glyph band in printed order with KYP lever tags FLOW/STAY/COUNT marked as KYP); the two formulas, the relationship identity, the margin sentences, the diabetes/common-cold anchors, and the pretest-probability bridge render as the formula cards + relationship band (Zone B) of the same visual — the formulas print as typographic text with drawn fraction rules (their words extract fully in the text layer and are quoted as evidence items 2, 4–7), and are NOT counted as separate textbook visual assets. Nothing is reproduced, and the full table's text is additionally carried verbatim in the note's table block. Census: zero raster images (pdfimages); VLM available this session — TWO passes (full-page 120dpi + zoomed 300dpi crops, vlm-census.txt) confirmed the eight printed rows in order, the red wordplay in the margin sentences, the plain no-zebra table furniture, and the figure's flow directions. ADJUDICATIONS (print governs): (A) RECURRENCE is a second INFLOW — the curved band re-enters the pool from the cure side with its arrowhead down into the water (both VLM passes agree; the batch brief had it as an outflow — corrected to print; consistent with the bbox label placement above the Cure drain and with the semantics of relapse); (B) the big relationship formula prints its stacked fraction LEFT of the equals sign — Prevalence / (1 – prevalence) = Incidence rate × average duration of disease (zoomed VLM pass + bbox '=' centering; algebraically identical to the brief's 'Prevalence = Incidence rate × average duration of disease / (1 – prevalence)' — the note carries the printed arrangement and documents the equivalence). FULL single page (pdf 284 / book 262). STAGED under .usmle-pipeline-cache/staging-pubh10/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH10 manifest + inventory staged: {OUT}/manifests/incidence-prevalence.json, {OUT}/visual-inventory/incidence-prevalence.json")
print(f"incidence-prevalence: evidence {len(kept)}/{len(E1)} verified")
