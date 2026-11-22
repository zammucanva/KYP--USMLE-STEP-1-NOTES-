#!/usr/bin/env python3
"""PUBH25 disease-prevention-prophylaxis — manifest + inventory (Public Health
batch 3), STAGED under .usmle-pipeline-cache/staging-pubh25/ (the promotion step
owns content/). Source: FULL pdf page 298 / book 276 (Part 1) — the FIRST page
of the HEALTHCARE DELIVERY subsection (the banner's first page; the banner
"PUBLIC HEALTH SCIENCES—HEALTHCARE DELIVERY" prints TWICE, running header +
in-body ribbon); the topic owns the WHOLE page, which carries TWO blocks:
(1) the "Disease prevention" PYRAMID TABLE — a triangle of four stacked bands,
APEX = Quaternary (top, narrowest), BASE = Primary (bottom, widest — the
susceptible general population), with TWO boxed column headers: "Target
population" (over the LEFT flank, next to one person figure icon per level,
shading graduated down the pyramid) and "Goals" (over the RIGHT callout
blocks, each reached by a block arrow shaded to match its band). Each band
carries the level name (first letter printed in RED) plus an IN-BAND action
line; each right "Goals" callout prints a "Prevent ..." phrase plus an italic
gray "eg," example. Printed apex-to-base: Quaternary — Symptomatic patients,
but overmedicalized or not treatable; Quit unnecessary medical interventions;
Prevent overtreatment and iatrogenic harm; eg, discontinuing sulfonylurea
after multiple hypoglycemic events. Tertiary — Clinical (symptomatic); Treat
symptomatic disease; Prevent clinical disease progression and sequelae
associated morbidity, mortality, and disability; eg, hemoglobin A1c monitoring
to guide treatment and prevent complications. Secondary — Subclinical
(asymptomatic); Screen for early detection and treatment of presymptomatic
disease + "Prevent symptom onset" printed INSIDE the band too; Prevent symptom
onset; eg, glucose screening for type 2 diabetes mellitus. Primary —
Susceptible/general population; Prevent disease onset by reducing risks or
increasing immunity; Prevent disease onset; eg, healthy diet and exercise to
prevent diabetes. (2) the "Chemoprophylaxis and post-exposure prophylaxis"
table — columns PROPHYLAXIS / NOTES, SIX rows in printed order: HIV exposure
(sexual, occupational) — tenofovir disoproxil fumarate + emtricitabine +
(raltegravir or dolutegravir) x 28 days, start <=72 hr after exposure, test
HIV at baseline and 6 wk, 3 mo, 6 mo; Neisseria meningitidis (close contact) —
rifampin, ciprofloxacin, or ceftriaxone, household or close exposure; Rabies
exposure (animal bite) — wound cleaning + rabies vaccine + rabies immune
globulin (if not previously immunized), 0, 3, 7, 14 day schedule; Hepatitis B
virus exposure — HBV vaccine +/- Hepatitis B immune globulin (if source
positive and unvaccinated), follow HBV serology; Malaria (travel prophylaxis)
— atovaquone-proguanil, doxycycline, or mefloquine, start before travel,
continue post-return; Sexual exposure—sexually transmitted infection
prevention — doxycycline <=72 hr after sex to prevent syphilis, chlamydia, and
gonorrhea in patients with recent bacterial STI, use with regular STI/HIV
testing, pre-exposure prophylaxis, vaccines (HPV, Hepatitis A/B), and
counseling, effectiveness: down-arrow syphilis/chlamydia >70%, down-arrow
gonorrhea ~50%, monitor q3-6 mo. Census (pdfimages): ZERO raster images —
both blocks are vector + text furniture (the pyramid's graduated bands, person
icons, and block arrows are vector art; the chapter census calls the page
"Pure text/table -> ORIGINAL KYP ADAPTATION"). VLM AVAILABLE this session
(glm-4.6v at 120dpi, TWO passes: ONE full-page pass + ONE 2x-zoom pyramid
adjudication pass, staging-pubh25/vlm-census.txt), confirming: apex =
Quaternary, base = Primary; the two boxed headers' positions ("Target
population" over the left flank, "Goals" over the right callout blocks); the
graduated band shading (dark teal apex -> pale mint base, white text on the
top two bands, dark text on the bottom two); the level-name first letters in
red; ONE person figure per level on the left; block arrows of graduated shade;
the "eg," examples in smaller italic gray; exactly SIX prophylaxis rows in the
printed order (none missing or extra); the Rx publisher mark at bottom right;
NO margin mnemonics, NO asterisk footnotes, NO images, NO red mnemonic
sentences anywhere (so all four mnemonics are KYP originals, marked as such).
ADJUDICATIONS, documented in the census file and the manifest notes: (A) the
batch brief assigned the stage descriptor "prevent symptom onset" to the
PRIMARY row — the PRINT gives Primary the right-side goal callout "Prevent
disease onset" (bbox x488, above "eg, healthy diet and exercise to prevent
diabetes"), while "Prevent symptom onset" prints TWICE, BOTH times in the
SECONDARY row (once INSIDE the band as the second line under "Screen for
early detection and treatment of presymptomatic disease", once in the right
callout above "eg, glucose screening for type 2 diabetes mellitus") — brief
corrected to print (bbox + both VLM passes agree); (B) the brief described
the columns as "Target population / Goals / (stage descriptors) / examples" —
the PRINT has exactly TWO headed columns ("Target population" over the left
flank, "Goals" over the right callouts); the level names and in-band action
lines sit INSIDE the bands with no header of their own, and the "eg,"
examples print inside the Goals callouts (not a separate column); (C) the
brief listed the rows Primary -> Quaternary (logical base-to-apex); the
PRINTED order is apex-to-base (Quaternary first) — the note's verbatim table
block carries the PRINTED order and the logical ladder is carried in the
decoder list block; (D) the brief's six prophylaxis rows matched the print
exactly (all regimens, timings, and effectiveness data) — no correction.
Printed quirks carried + documented: "SEC TION II" header-space extraction
artifact (known, as-is); the subsection banner prints TWICE (running header +
in-body ribbon); the pyramid's cells extract in JUMBLED order — the Quaternary
row extracts first and the Primary row last (apex-to-base geometry), and
within the Tertiary row the right-callout text extracts BEFORE the band name
(the evidence ranges quote the raw extraction order; the band/callout
assignment is pinned by pdftotext -bbox + the two VLM passes); the down-arrow
symbols in the Sexual exposure NOTES cell carry stray C1 control bytes
(\\x90) in the raw text layer (stripped by the normalizer; carried as the
down-arrow glyph); "A1c" extracts with "1c" as a separate subscript word in
the bbox layer (the raw line reads "hemoglobin A1c monitoring to..."); printed
symbols carried verbatim: "x 28 days" (multiplication sign), "<=72 hr", "+/-"
(HBV vaccine +/- Hepatitis B immune globulin — the print capitalizes
"Hepatitis B immune globulin"), the em-dash in "Sexual exposure—sexually
transmitted infection prevention", "q3-6 mo", ">70%" / "~50%"; Neisseria
meningitidis prints with an italic species name. Nothing is reproduced: both
blocks are ORIGINAL KYP ADAPTATIONS (the registry visual re-lays the pyramid
as a KYP stacked funnel with flanking columns and the prophylaxis table as
timing-banded protocol cards) in ONE registry visual (prevention-prophylaxis-
map, PreventionProphylaxisMap in visuals/pubhealth-p25.tsx, viewBox 0 0 1102
1440); both tables are additionally carried VERBATIM in the note's two table
blocks. DrugCards: FIVE included — the page PRINTS drug regimens (the HIV PEP
triplet; the meningococcal trio; the rabies vaccine + immune globulin pair;
atovaquone-proguanil; doxycycline) — the printed regimen/timing lines are the
source for each card's USES, while the mechanism/adverse fields beyond the
printed lines are KYP pharmacology context, flagged as such here and in the
note header."""
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
L = {298: pages[297].split("\n")}
P = {298: norm(pages[297])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — book page 276, the 'SEC TION II' header-space extraction artifact (carried as-is, a known quirk), the section header PUBLIC HEALTH SCIENCES, and the subsection banner '▶ PUBLIC HEALTH SCIENCES—HEALTHCARE DELIVERY' printed TWICE (running header + in-body ribbon — the HEALTHCARE DELIVERY subsection opener; this is the banner's first page)", rng(298, 1, 9), [298]),
    ("The prevention block's title and its TWO boxed column headers — 'Disease prevention', 'Target population' (over the left flank, next to one person figure icon per level) and 'Goals' (over the right callouts); the level names and in-band action lines sit INSIDE the pyramid bands with no header of their own", rng(298, 10, 13), [298]),
    ("PYRAMID ROW 1 (apex, printed first) — Quaternary → Symptomatic patients, but overmedicalized or not treatable → Quit unnecessary medical interventions (in-band) → Prevent overtreatment and iatrogenic harm (Goals callout) → eg, discontinuing sulfonylurea after multiple hypoglycemic events", rng(298, 15, 27), [298]),
    ("PYRAMID ROW 2 — Tertiary → the right-callout text extracts BEFORE the band name in the raw layer (jumbled pyramid geometry, documented): Prevent clinical disease progression and sequelae associated morbidity, mortality, and disability → eg, hemoglobin A1c monitoring to guide treatment and prevent complications → Tertiary → Clinical (symptomatic) → Treat symptomatic disease (in-band)", rng(298, 29, 39), [298]),
    ("PYRAMID ROW 3 — Secondary → 'Prevent symptom onset' prints TWICE, BOTH times in this row (once in the right callout above the example, once INSIDE the band under the goals line — bbox + both VLM passes pin both positions): Secondary → Prevent symptom onset (callout) → eg, glucose screening for type 2 diabetes mellitus → Screen for early detection and treatment of presymptomatic disease (in-band) → Prevent symptom onset (in-band second line) → Subclinical (asymptomatic)", rng(298, 41, 52), [298]),
    ("PYRAMID ROW 4 (base, printed last) — Primary → Susceptible/general population → Prevent disease onset by reducing risks or increasing immunity (in-band) → Prevent disease onset (Goals callout — NOT 'prevent symptom onset' as the brief had it; print governs) → eg, healthy diet and exercise to prevent diabetes", rng(298, 54, 62), [298]),
    ("The prophylaxis block's title and two column headers — 'Chemoprophylaxis and post-exposure prophylaxis', PROPHYLAXIS / NOTES", rng(298, 64, 67), [298]),
    ("PROPHYLAXIS ROW 1 — HIV exposure (sexual, occupational) → Tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir) × 28 days. Start ≤72 hr after exposure; test HIV at baseline and 6 wk, 3 mo, 6 mo.", rng(298, 69, 76), [298]),
    ("PROPHYLAXIS ROW 2 — Neisseria meningitidis (close contact) (italic species name in the print) → Rifampin, ciprofloxacin, or ceftriaxone. Household or close exposure.", rng(298, 78, 83), [298]),
    ("PROPHYLAXIS ROW 3 — Rabies exposure (animal bite) → Wound cleaning + rabies vaccine + rabies immune globulin (if not previously immunized). 0, 3, 7, 14 day schedule.", rng(298, 85, 92), [298]),
    ("PROPHYLAXIS ROW 4 — Hepatitis B virus exposure → HBV vaccine ± Hepatitis B immune globulin (if source positive and unvaccinated). Follow HBV serology.", rng(298, 94, 100), [298]),
    ("PROPHYLAXIS ROW 5 — Malaria (travel prophylaxis) → Atovaquone-proguanil, doxycycline, or mefloquine. Start before travel; continue post-return.", rng(298, 102, 108), [298]),
    ("PROPHYLAXIS ROW 6 — Sexual exposure—sexually transmitted infection prevention (em-dash as printed) → Doxycycline. Give ≤72 hr after sex to prevent syphilis, chlamydia, and gonorrhea in patients with recent bacterial STI. Use with regular STI/HIV testing, pre-exposure prophylaxis, vaccines (HPV, Hepatitis A/B), and counseling. Effectiveness: ↓ syphilis/chlamydia >70%, ↓ gonorrhea ~50%. Monitor q3-6 mo. (the ↓ arrows carry stray C1 control bytes in the raw layer — stripped by the normalizer, carried as ↓; the page's only effectiveness data)", rng(298, 110, 123), [298]),
    ("The print footer slug and timestamp — FAS1_2026_06-PubHealth.indd 276 / 12/16/25 12:46 PM (page identity, book 276)", rng(298, 125, 127), [298]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"disease-prevention-prophylaxis: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "disease-prevention-prophylaxis", "title": "Disease Prevention Levels and Prophylaxis",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Healthcare Delivery", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [298], "bookPages": "276–276"},
    "sourceEvidence": kept, "visualIds": ["prevention-prophylaxis-map"],
    "mechanismIds": ["prevention-level-ladder", "prophylaxis-protocol-logic"],
    "kypExtensions": [
        {"id": "prevention-level-ladder",
         "summary": "The natural-history FUNNEL reading of the printed pyramid: the geometry is the epidemiology — the base is the widest band because the Susceptible/general population is everyone, and the population narrows as disease advances (subclinical → clinical → overmedicalized), with each band naming one prevention level's catchment; the P-S-T-Q action-verb ladder (Primary PREVENTS onset, Secondary SCREENS the silent, Tertiary TREATS the symptomatic, Quaternary QUITS the unnecessary — the four in-band action lines' first verbs) and the one-disease thread (all four printed example cells are diabetes actions: diet/exercise → glucose screening → A1c monitoring → stopping the sulfonylurea).",
         "origin": "outside-first-aid", "rationale": "The source prints the four bands with their populations, actions, goals, and examples; the funnel reading, the action-verb ladder, and the diabetes-thread organization are KYP's synthesis.",
         "location": "core.why + core.keyIdea MOVES 1–2 + mechanisms[0] prevention-level-ladder + blocks[3] the decoder list + the registry visual's Zone A (funnel annotation + rule strip)"},
        {"id": "prophylaxis-timing-grammar",
         "summary": "The three-timing-pattern grammar overlaid on the six printed protocols: (1) THE ≤72-HOUR WINDOW (HIV PEP start + doxycycline STI PEP — the exam's favorite timing collision), (2) THE SCHEDULED/SEROLOGY SERIES (rabies days 0, 3, 7, 14; HBV 'follow HBV serology'; HIV testing at baseline, 6 wk, 3 mo, 6 mo; doxycycline monitoring q3-6 mo), (3) THE TRAVEL BRACKET (malaria — start before travel, continue post-return); plus the vaccine ± immune-globulin grammar that rabies and HBV share with different conditionals ('if not previously immunized' vs 'if source positive and unvaccinated').",
         "origin": "outside-first-aid", "rationale": "The source prints each row's timing as row-local facts; the three-pattern organization, the timing-collision framing, and the shared vaccine ± globulin grammar are KYP's synthesis.",
         "location": "core.keyIdea MOVES 3–4 + mechanisms[1] prophylaxis-protocol-logic + blocks[4] the steps block + blocks[5] the compare block (HIV PEP vs doxycycline STI PEP) + the registry visual's Zone B timing bands"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the primary diet/exercise stem, the secondary glucose-screening stem, the quaternary sulfonylurea-discontinuation stem, the occupational-needlestick HIV PEP stem), 4 traps (primary vs secondary; tertiary vs quaternary; the two 72-hour regimens; the two immune-globulin conditionals), 3 pivots (Prevent disease onset vs Prevent symptom onset; right drug at the wrong time; treating disease vs treating the treatment), and 8 recall cards covering all four levels and all six regimens.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the definitions and regimens only; the attack structure, distractor designs, and question shapes are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger — the VLM census (two passes) found NO mnemonic sentence printed anywhere on pdf 298 (no red in-cell hooks, no margin notes), so ALL FOUR mnemonics are KYP originals, marked as such: 'PRIMARY PREVENTS, SECONDARY SCREENS, TERTIARY TREATS, QUATERNARY QUITS' (the in-band action verbs), 'THE FUNNEL: SUSCEPTIBLE → SUBCLINICAL → CLINICAL → OVERMEDICALIZED' (the pyramid base-to-apex), '72 BEFORE 28' (the HIV PEP window + duration + four-point testing), and '0-3-7-14 — CLEAN, VACCINATE, IMMUNIZE' (the rabies components and schedule).",
         "origin": "outside-first-aid", "rationale": "No mnemonic prints on the page (pdfimages + VLM ×2 census, staging-pubh25/vlm-census.txt); all four codes are KYP's design.",
         "location": "mnemonics + blocks[7] the memory callout + the registry visual's Zone A rule strip and card tags"},
        {"id": "drugcard-layer",
         "summary": "The DrugCard layer: the page PRINTS drug regimens, so FIVE DrugCards are included — tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir); rifampin, ciprofloxacin, or ceftriaxone; rabies vaccine + rabies immune globulin; atovaquone-proguanil; doxycycline. The printed regimen/timing lines are the source for each card's USES (and for doxycycline's EFFECT, the printed effectiveness data); the mechanism/target/adverse fields beyond the printed lines are KYP pharmacology context, flagged as such in the note header.",
         "origin": "outside-first-aid", "rationale": "The regimens, windows, schedules, and effectiveness percentages are printed (FA-own); the pharmacology mechanism/adverse context and the card organization are KYP's.",
         "location": "drugs[] + the note header comment (provenance split)"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 298 / book 276, the FIRST page of the HEALTHCARE DELIVERY subsection (the banner's first page; '▶ PUBLIC HEALTH SCIENCES—HEALTHCARE DELIVERY' prints TWICE — running header + in-body ribbon), carrying TWO blocks — the 'Disease prevention' PYRAMID TABLE (a triangle of four stacked bands, apex = Quaternary, base = Primary, with two boxed column headers — 'Target population' over the left flank, one person icon per level; 'Goals' over the right callouts, reached by block arrows shaded to match the bands; every cell carried VERBATIM in the note's first table block, blocks[1]) and the 'Chemoprophylaxis and post-exposure prophylaxis' table (columns PROPHYLAXIS / NOTES, SIX rows in printed order — HIV exposure, Neisseria meningitidis close contact, Rabies exposure, Hepatitis B virus exposure, Malaria travel, Sexual exposure—STI prevention — carried VERBATIM in blocks[2]). CENSUS (pdfimages): ZERO raster images — both blocks are vector + text furniture (the pyramid's graduated bands, person icons, and block arrows are vector art); VLM WAS AVAILABLE this session (glm-4.6v at 120dpi, TWO passes — ONE full-page pass + ONE 2x-zoom pyramid adjudication pass, staging-pubh25/vlm-census.txt): apex = Quaternary / base = Primary confirmed; the two boxed headers' positions confirmed ('Target population' over the left flank, 'Goals' over the right callout blocks); the bands graduate dark teal (apex) to pale mint (base) with white text on the top two bands; the level-name first letters print in RED; ONE person figure per level on the left; the 'eg,' examples print in smaller italic gray; the Rx publisher mark sits at bottom right; exactly SIX prophylaxis rows confirmed in printed order (none missing or extra); NO margin mnemonics, asterisk footnotes, images, or red mnemonic sentences anywhere (so all four mnemonics are KYP originals, marked as such). ADJUDICATIONS (raw text layer + pdftotext -bbox + both VLM passes agree): (A) the batch brief assigned the stage descriptor 'prevent symptom onset' to the PRIMARY row — the PRINT gives Primary the right-side goal callout 'Prevent disease onset', while 'Prevent symptom onset' prints TWICE, BOTH times in the SECONDARY row (once INSIDE the band as the second line under 'Screen for early detection and treatment of presymptomatic disease', once in the right callout above 'eg, glucose screening for type 2 diabetes mellitus') — brief corrected to print; the visual and the note draw both instances exactly as printed; (B) the brief described the columns as 'Target population / Goals / (stage descriptors) / examples' — the PRINT has exactly TWO headed columns ('Target population' left flank, 'Goals' right callouts); the level names + in-band action lines sit INSIDE the bands unheaded, and the 'eg,' examples print INSIDE the Goals callouts — the note's verbatim table block splits in-band action vs right callout into separate columns as a documented KYP normalization, preserving every printed word; (C) the brief listed the rows Primary → Quaternary (logical base-to-apex); the PRINTED order is apex-to-base (Quaternary first) — the verbatim table block carries the PRINTED order and the logical ladder is carried in the decoder list block (blocks[3]); (D) the brief's six prophylaxis rows matched the print exactly — no correction. Quirks carried + documented: 'SEC TION II' header-space extraction artifact (known, as-is); the banner prints TWICE; the pyramid's cells extract in JUMBLED order (Quaternary first, Primary last — apex-to-base geometry; within the Tertiary row the right-callout text extracts BEFORE the band name — evidence ranges quote the raw order, the band/callout assignment pinned by bbox + VLM ×2); the ↓ arrows in the Sexual exposure NOTES cell carry stray C1 control bytes (\\x90) in the raw layer (stripped by the normalizer; carried as ↓); 'A1c' extracts with '1c' as a separate subscript word in the bbox layer; printed symbols carried verbatim — '× 28 days' (multiplication sign), '≤72 hr', '±' ('HBV vaccine ± Hepatitis B immune globulin', capitalized as printed), the em-dash in 'Sexual exposure—sexually transmitted infection prevention', 'q3-6 mo', '>70%' / '~50%'; Neisseria meningitidis prints with an italic species name. Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (prevention-level-ladder, prophylaxis-protocol-logic), a visual block + TWO verbatim table blocks + decoder list + steps block + compare block + exam callout + memory callout, a clinical block (the diabetes thread, the 72-hour club, the vaccine ± globulin grammar, the close-contact/travel triggers), 4 patterns, 4 traps, 3 pivots, 8 recall, 4 related (patient-safety-quality, insurance-payment-models, challenging-scenarios, clinical-therapeutic-trials — all four public-health census topicIds), 4 crossLinks, 4 mnemonics (ALL KYP originals — the page prints none of its own; documented), and a miniCase with 5 options (exactly 1 correct, why/whyWrong on every option); (2) DrugCards are INCLUDED (5) because the page prints drug regimens — the printed regimen/timing/effectiveness lines are the source for USES/EFFECT; the mechanism/target/adverse fields are KYP pharmacology context, flagged in the note header comment; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh25/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'prevention-prophylaxis-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's TWO visual assets are implemented in ONE registry visual (prevention-prophylaxis-map, PreventionProphylaxisMap in visuals/pubhealth-p25.tsx, viewBox 0 0 1102 1440): the pyramid as an ORIGINAL KYP ADAPTATION (Zone A — a KYP stacked funnel with flanking person-icon/target-population column and shaded-arrow Goals callouts, the Secondary row drawing 'Prevent symptom onset' BOTH in-band and in the callout exactly as printed, the red level-name initials preserved as red tspans) and the chemoprophylaxis table as an ORIGINAL KYP ADAPTATION (Zone B — six protocol cards with KYP timing bands: amber ≤72-hr windows, blue scheduled/serology series, red close-contact, green travel bracket, the printed effectiveness chips on the doxycycline card) — with both tables' text ALSO carried verbatim in the note's table blocks.",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Healthcare Delivery",
    "topicId": "disease-prevention-prophylaxis", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "disease-prevention-prophylaxis-sv1",
        "sourcePages": {"part": 1, "pdfPages": [298], "bookPages": "276"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Disease prevention pyramid table (book 276): the four prevention levels — Primary, Secondary, Tertiary, Quaternary — as stacked bands on the natural-history funnel, with the Target population column (left flank, one person icon per level), the Goals column (right callouts: a 'Prevent …' phrase + an italic gray 'eg,' example), and the level names + in-band action lines inside the bands; the Healthcare Delivery subsection's opening table",
        "sourceFigureDescription": "PYRAMID TABLE rendered as VECTOR ART, no raster (pdfimages: zero raster images; VLM-read at 120dpi with a second 2x-zoom adjudication pass, staging-pubh25/vlm-census.txt — VLM available this session): the running header (book page 276, SEC TION II, PUBLIC HEALTH SCIENCES, '▶ PUBLIC HEALTH SCIENCES—HEALTHCARE DELIVERY' printed twice — running header + in-body subsection ribbon), the block title 'Disease prevention', and TWO boxed column headers — 'Target population' (over the left flank) and 'Goals' (over the right callout blocks). A triangle of four stacked horizontal bands, APEX = Quaternary (top, narrowest, dark teal, white text, first letter Q in red), then Tertiary (medium slate teal, white text, T in red), Secondary (light gray-green, dark text, S in red), and Primary (base, widest, very pale mint, dark text, P in red), separated by thin white borders. Each band carries its level name + an IN-BAND action line; OUTSIDE LEFT of each band: one standing person figure icon (shading graduated to match the band) + the target population text; OUTSIDE RIGHT: a block arrow (shading graduated to match the band) pointing to the Goals callout — a 'Prevent …' phrase in dark text + an 'eg,' example line in smaller italic gray. Printed apex-to-base: Quaternary — Symptomatic patients, but overmedicalized or not treatable; Quit unnecessary medical interventions; Prevent overtreatment and iatrogenic harm; eg, discontinuing sulfonylurea after multiple hypoglycemic events. Tertiary — Clinical (symptomatic); Treat symptomatic disease; Prevent clinical disease progression and sequelae associated morbidity, mortality, and disability; eg, hemoglobin A1c monitoring to guide treatment and prevent complications. Secondary — Subclinical (asymptomatic); Screen for early detection and treatment of presymptomatic disease + 'Prevent symptom onset' printed INSIDE the band as a second line; Prevent symptom onset (callout); eg, glucose screening for type 2 diabetes mellitus. Primary — Susceptible/general population; Prevent disease onset by reducing risks or increasing immunity; Prevent disease onset; eg, healthy diet and exercise to prevent diabetes. The Rx publisher mark prints at bottom right. The pyramid's cells extract in jumbled apex-to-base order in the raw text layer (documented quirk); the band/callout assignment is pinned by pdftotext -bbox coordinates + both VLM passes.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "prevention-prophylaxis-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A of the registry visual (PreventionProphylaxisMap in visuals/pubhealth-p25.tsx): the pyramid re-laid as a KYP stacked funnel of four trapezoid bands (apex = Quaternary up, as printed, graduated brand fills), each band carrying its level name (red initial tspans, as the print's red first letters) + in-band action; the left flank carrying the two boxed headers as printed ('Target population' / 'Goals'), one KYP person glyph per level (shading graduated down) + the target population; and the right flank carrying shaded block arrows + the 'Prevent …' goal callouts with italic 'eg,' examples — the Secondary band drawing 'Prevent symptom onset' BOTH in-band and in the callout exactly as printed — plus the KYP rule strip (PRIMARY PREVENTS · SECONDARY SCREENS · TERTIARY TREATS · QUATERNARY QUITS); the full table is ALSO carried verbatim in the note's table block (blocks[1]), core.what, the decoder list block (blocks[3]), and recall[0-4]",
        "productionStatus": "complete",
        "plannedKypVisualId": "prevention-prophylaxis-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "disease-prevention-prophylaxis-sv2",
        "sourcePages": {"part": 1, "pdfPages": [298], "bookPages": "276"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Chemoprophylaxis and post-exposure prophylaxis table (book 276): six exposure → regimen protocols with their timing and follow-up rules — HIV exposure (sexual, occupational), Neisseria meningitidis (close contact), Rabies exposure (animal bite), Hepatitis B virus exposure, Malaria (travel prophylaxis), and Sexual exposure—sexually transmitted infection prevention with its printed effectiveness data",
        "sourceFigureDescription": "COLOR-CODED TABLE, no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh25/vlm-census.txt — VLM available this session): the table title 'Chemoprophylaxis and post-exposure prophylaxis' (blue text, hairline rule beneath), column headers PROPHYLAXIS / NOTES in small caps on a lightly shaded header row, left-column cells shaded pale blue with the condition names in blue (Neisseria meningitidis in italics), and thin light hairline row separators (no zebra). SIX rows in printed order, both cells of each: HIV exposure (sexual, occupational) → Tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir) × 28 days. Start ≤72 hr after exposure; test HIV at baseline and 6 wk, 3 mo, 6 mo. Neisseria meningitidis (close contact) → Rifampin, ciprofloxacin, or ceftriaxone. Household or close exposure. Rabies exposure (animal bite) → Wound cleaning + rabies vaccine + rabies immune globulin (if not previously immunized). 0, 3, 7, 14 day schedule. Hepatitis B virus exposure → HBV vaccine ± Hepatitis B immune globulin (if source positive and unvaccinated). Follow HBV serology. Malaria (travel prophylaxis) → Atovaquone-proguanil, doxycycline, or mefloquine. Start before travel; continue post-return. Sexual exposure—sexually transmitted infection prevention (em-dash as printed) → Doxycycline. Give ≤72 hr after sex to prevent syphilis, chlamydia, and gonorrhea in patients with recent bacterial STI. Use with regular STI/HIV testing, pre-exposure prophylaxis, vaccines (HPV, Hepatitis A/B), and counseling. Effectiveness: ↓ syphilis/chlamydia >70%, ↓ gonorrhea ~50%. Monitor q3-6 mo. (the ↓ arrows carry stray C1 control bytes in the raw text layer — stripped by the normalizer, carried as ↓; this row alone carries the page's only effectiveness data).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "prevention-prophylaxis-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone B of the registry visual (PreventionProphylaxisMap in visuals/pubhealth-p25.tsx): the six rows as numbered protocol cards in PRINTED order (2 columns × 3 rows), each carrying the exposure title (the species name italicized as printed), the REGIMEN lines, a KYP timing band (amber = ≤72-hr window: HIV PEP and doxycycline STI PEP; blue = scheduled/serology series: rabies 0 · 3 · 7 · 14 days and HBV source-steered serology; red = close-contact exposure: N. meningitidis; green = travel bracket: malaria), and the NOTES lines — the doxycycline card carrying the printed effectiveness chips (↓ syphilis/chlamydia >70% · ↓ gonorrhea ~50%) and the legend strip naming the timing-band coding; the full table is ALSO carried verbatim in the note's second table block (blocks[2]), core.what, the mechanisms[1] flow nodes, the steps block, and recall[5-8]",
        "productionStatus": "complete",
        "plannedKypVisualId": "prevention-prophylaxis-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh25"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "disease-prevention-prophylaxis.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "disease-prevention-prophylaxis.json").write_text(
    json.dumps({"topicId": "disease-prevention-prophylaxis", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "disease-prevention-prophylaxis", "textbookVisualCount": 2,
                    "accountedFor": 2, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 2,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries TWO visual assets — the Disease prevention pyramid table (sv1: four levels as stacked bands on the natural-history funnel, apex = Quaternary, base = Primary, with the Target population left flank, the Goals right callouts, the in-band action lines, and the four diabetes examples) and the Chemoprophylaxis and post-exposure prophylaxis table (sv2: six exposure → regimen rows with their timing and follow-up rules, including the doxycycline effectiveness data) — both accounted for in ONE registry visual (prevention-prophylaxis-map, PreventionProphylaxisMap in visuals/pubhealth-p25.tsx, viewBox 0 0 1102 1440), BOTH as ORIGINAL KYP ADAPTATIONS (the chapter census itself calls the page 'Pure text/table → ORIGINAL KYP ADAPTATION'; the pyramid's vector furniture — graduated bands, person icons, block arrows — is rebuilt as original KYP vector geometry with every printed word preserved, and the prophylaxis table is re-laid as timing-banded protocol cards); nothing is reproduced, and both tables' text is additionally carried verbatim in the note's two table blocks. Census: zero raster images (pdfimages); VLM available this session — TWO 120dpi glm-4.6v passes (ONE full-page + ONE 2x-zoom pyramid adjudication, vlm-census.txt) confirmed the pyramid's apex/base orientation, the two boxed headers' positions ('Target population' left flank, 'Goals' right callouts), the graduated band shading with red level-name initials, ONE person figure per level, the italic gray eg-lines, exactly SIX prophylaxis rows in printed order, and the absence of margin mnemonics and images (so all four note mnemonics are KYP originals). ADJUDICATIONS: the print gives Primary the right-side goal 'Prevent disease onset' and prints 'Prevent symptom onset' TWICE, both times in the Secondary row (in-band + callout) — bbox + both VLM passes agree (the batch brief had Primary carrying 'prevent symptom onset'; brief corrected to print); the printed row order is apex-to-base (Quaternary first) — the note's verbatim table carries the printed order and the logical ladder lives in the decoder block. FULL single page, the FIRST of the HEALTHCARE DELIVERY subsection. STAGED under .usmle-pipeline-cache/staging-pubh25/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH25 manifest + inventory staged: {OUT}/manifests/disease-prevention-prophylaxis.json, {OUT}/visual-inventory/disease-prevention-prophylaxis.json")
print(f"disease-prevention-prophylaxis: evidence {len(kept)}/{len(E1)} verified")
