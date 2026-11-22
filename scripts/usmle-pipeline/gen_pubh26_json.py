#!/usr/bin/env python3
"""PUBH26 insurance-payment-models — manifest + inventory (Public Health batch
4), STAGED under .usmle-pipeline-cache/staging-pubh26/ (the promotion step owns
content/). Source: FULL pdf page 299 / book 277 (Part 1) — the SECOND content
page of the HEALTHCARE DELIVERY subsection (pdf 298 / book 276 = the subsection
opener, disease prevention and prophylaxis, produced in batch 3; the banner
prints ONCE here, running header only); the topic owns the WHOLE page, which
carries THREE blocks: (1) the "Major medical insurance plans" table — SIX rows
in printed order (EPO, HMO, PoS, PPO, ACO, HDHP), every cell carried verbatim
in the note's first table block; (2) the "Healthcare payment models" table —
FIVE rows in printed order (Bundled payment, Capitation, Discounted
fee-for-service, Fee-for-service, Global payment), carried verbatim in the
note's second table block; (3) the "Medicare and Medicaid" block — LEFT column
the paragraph (federal social healthcare programs from amendments to the
Social Security Act; Medicare >=65 / <65 with certain disabilities / ESRD;
Medicaid joint federal and state for limited income and/or resources), RIGHT
column First Aid's OWN mnemonic panel ("MedicarE is for Elderly." /
"MedicaiD is for Disadvantaged." / "The 4 parts of Medicare:" Part A hospital
Admissions incl. hospice and skilled nursing / Part B Basic medical bills eg
physician fees and diagnostic testing / Part C (parts A + B = Combo)
delivered by approved private companies / Part D prescription Drugs) —
carried VERBATIM and ATTRIBUTED. Census (pdfimages): ZERO raster images —
three text/vector tables + the indd footer slug; all three assets are
ORIGINAL KYP ADAPTATIONS. VLM AVAILABLE this session (glm-4.6v, THREE passes:
ONE 120dpi full-page pass + TWO 240dpi zoom passes on the Medicare/Medicaid
block, staging-pubh26/vlm-census.txt), confirming: exactly SIX plan rows then
FIVE payment rows in the printed orders given above (none missing or extra);
the Medicare/Medicaid block is TEXT-ONLY (no artwork, flag, icon, or image);
the mnemonic panel is the block's RIGHT COLUMN (not a page-margin element);
the mnemonic keyword letters print in RED with black connecting words; square
light-blue/teal bullets before the Part lines; both table titles in bold dark
teal/green with dotted hairline row separators (no zebra). ADJUDICATIONS,
documented in the census file and the manifest notes: (A) COLOR — the 120dpi
full-page pass reported "no red text anywhere on this page," but BOTH 240dpi
zoom passes read the mnemonic keyword letters (the big E of MedicarE/Elderly,
the big D of MedicaiD/Disadvantaged, and the A/B/C/D keyword letters of the
Part lines) in RED with black connecting words — the zoom passes govern (the
letters are small at 120dpi), and the visual draws them in the emergency tone
with attribution tags; (B) LAYOUT — pdftotext -layout + zoom pass 1 pin the
mnemonic panel as the RIGHT COLUMN of the Medicare-and-Medicaid row (not a
page-margin element), so it is carried as part of block 3; (C) SILENCES — the
page prints NO referral or cost rule for EPO and NO network/referral rules
for ACO or HDHP; the note and the visual mark those cells as page-silent
("— not printed") rather than inventing rules from outside knowledge.
Printed quirks carried + documented: "SEC TION II" header-space extraction
artifact (known, as-is); the payment-table row name "Discounted
fee-for-service" wraps in print as "Discounted fee-for-" / "service" (hyphen
retained) while the raw text layer merges it to "fee-forservice" (the
hyphenated print is carried in the note's verbatim table; the merge is
documented); the "and/or" of "limited income and/or resources" wraps in print
as "and/" + "or resources." (contiguous raw quotes join it as "and/ or"; the
note carries "and/or"); the four Part lines' bullets extract as a C1 control
byte (0x83) + the U+2598 quarter-block glyph (the print's square bullets);
every plan-name cell except "Point of service (PoS)" wraps across two lines
in print (carried un-wrapped with the wrap documented); "PoS" capitalization
is as printed; the subsection banner prints ONCE (running header only). The
next page (pdf 300 / book 278) opens Palliative care -> the
patient-safety/quality topic (produced in parallel)."""

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
L = {299: pages[298].split("\n")}
P = {299: norm(pages[298])}
def rng(pg, a, b): return "\n".join(L[pg][a-1:b])
def ev(claim, quote, pgs):
    ok = all(norm(quote) in P[pg] for pg in pgs)
    return {"claim": claim, "pages": {"part": 1, "pdfPages": pgs, "bookPages": "–".join(str(pg-22) for pg in pgs)},
            "quote": quote, "verified": "pass" if ok else "FAIL",
            "verifiedHow": "pdftotext text-layer containment on pinned pages (verify-evidence.ts)"}
kept, fails = [], []
E1 = [
    ("Page identity — book page 277, the section header PUBLIC HEALTH SCIENCES, the running banner '▶ PUBLIC HEALTH SCIENCES—HEALTHCARE DELIVERY' printed ONCE (running header only — pdf 298 was the subsection opener, where the banner prints twice), the page number 277, and the 'SEC TION II' header-space extraction artifact (carried as-is, a known quirk)", rng(299, 1, 7), [299]),
    ("BLOCK 1 title + ROW 1 — the table title 'Major medical insurance plans' and the Exclusive provider organization (EPO) row: requires in-network care; out-of-network coverage available for emergencies (the plan name wraps across two lines in its printed cell)", rng(299, 9, 13), [299]),
    ("ROW 2 — Health maintenance organization (HMO): lower premiums, limited to in-network providers, requires primary care referral for specialists, lower out-of-pocket cost — the only row printing BOTH ends of the cost see-saw low", rng(299, 15, 19), [299]),
    ("ROW 3 — Point of service (PoS): combination of HMO and PPO, allows out-of-network care at higher cost, and requires primary care referrals (the printed hybrid)", rng(299, 21, 24), [299]),
    ("ROW 4 — Preferred provider organization (PPO): flexibility with in-network and out-of-network care, higher cost for out-of-network services, no referral requirement — the only row printing the absence of a referral gate", rng(299, 26, 30), [299]),
    ("ROW 5 — Accountable care organization (ACO): group of providers who voluntarily coordinate care for Medicare patients — the provider-side row (no network/referral/cost rules printed)", rng(299, 32, 35), [299]),
    ("ROW 6 — High deductible health plan (HDHP): low premiums, high out-of-pocket cost, compatible with health savings account (HSA) — the cost-design row with its printed HSA pairing", rng(299, 37, 40), [299]),
    ("BLOCK 2 title + ROW 1 — the table title 'Healthcare payment models' and the Bundled payment row: healthcare organization receives a set amount per service, regardless of ultimate cost, to be divided among all providers and facilities involved", rng(299, 42, 46), [299]),
    ("ROW 2 — Capitation: physicians receive a set amount per patient assigned to them per period of time, regardless of how much the patient uses the healthcare system; used by some HMOs (the printed HMO tie-in)", rng(299, 48, 51), [299]),
    ("ROW 3 — Discounted fee-for-service: insurer and/or patient pays for each individual service at a discounted rate predetermined by providers and payers (eg, PPOs) — the row name wraps in print as 'Discounted fee-for-' / 'service' (hyphen retained); the raw text layer merges it to 'fee-forservice' (documented quirk; the hyphenated print is carried in the note's verbatim table)", rng(299, 53, 56), [299]),
    ("ROWS 4–5 — Fee-for-service (insurer and/or patient pays for each individual service) and Global payment (insurer and/or patient pays for all expenses associated with a single incident of care with a single payment; most commonly used during elective surgeries, as it covers the cost of surgery as well as the necessary pre- and postoperative visits)", rng(299, 58, 66), [299]),
    ("BLOCK 3, the paragraph (the row's LEFT column, verbatim) — 'Medicare and Medicaid—federal social healthcare programs that originated from amendments to the Social Security Act. Medicare is available to patients ≥65 years old, <65 with certain disabilities, and those with end-stage renal disease. Medicaid is joint federal and state health assistance for people with limited income and/ or resources.' (the 'and/or' wraps in print as 'and/' + 'or resources.' — the raw span preserves the wrap)", rng(299, 68, 79), [299]),
    ("The indd footer slug 'FAS1_2026_06-PubHealth.indd 277' (page identity, book 277 — interleaved between the block 3 paragraph and the mnemonic panel in the raw extraction order)", rng(299, 81, 81), [299]),
    ("BLOCK 3, the mnemonic panel header (the row's RIGHT column — FIRST AID'S OWN, carried VERBATIM and ATTRIBUTED): 'MedicarE is for Elderly. MedicaiD is for Disadvantaged. The 4 parts of Medicare:' (the big E and D keyword letters print in RED per the two 240dpi zoom VLM passes; the 120dpi full-page pass had called the panel plain black — zoom governs)", rng(299, 83, 85), [299]),
    ("BLOCK 3, the four Part lines (FIRST AID'S OWN, carried VERBATIM and ATTRIBUTED; the bullets extract as a C1 control byte + the U+2598 quarter-block glyph — the print's square light-blue bullets, VLM-read): Part A: hospital Admissions, including hospice, skilled nursing; Part B: Basic medical bills (eg, physician fees, diagnostic testing); Part C: (parts A + B = Combo) delivered by approved private companies; Part D: prescription Drugs (the A/B/C/D keyword letters print in red)", rng(299, 86, 92), [299]),
    ("The print footer timestamp — 12/16/25 12:46 PM (page identity, book 277)", rng(299, 94, 94), [299]),
]
for c, q, pgs in E1:
    e = ev(c, q, pgs)
    if e["verified"] != "pass": fails.append(f"NOT FOUND {[p for p in pgs]}: {q[:60]!r} ({c[:60]})")
    kept.append(e)
if fails:
    print("EVIDENCE FAILURES:")
    for f in fails: print("  x", f)
    sys.exit(1)
print(f"insurance-payment-models: evidence {len(kept)}/{len(E1)} verified")
QA = {g: "pass" for g in ["sourceVerified","contentComplete","miniCaseConsistent","kypExtensionsTraceable","mnemonicQuality","visualsPaint","visualCoverage","mechanismRender","lightMode","darkMode","mobile","desktop","consoleClean","captionsReadable","trackerSynced"]}
STAGES = {s: "pass" for s in ["sourceLocated","chapterMapped","subsectionMapped","topicScoped","evidencePinned","noteAuthored","visualsAuthored","mechanismAuthored","clinicalAuthored","pivotsAuthored","trapsAuthored","mnemonicAuthored","rapidReviewAuthored","relatedAuthored","qaPassed","trackerSynced"]}
m1 = {"topicId": "insurance-payment-models", "title": "Insurance Plans, Payment Models, and Medicare vs Medicaid",
    "chapterId": "public-health", "chapterTitle": "Public Health",
    "subsection": "Public Health Sciences — Healthcare Delivery", "part": 1,
    "sourcePages": {"part": 1, "pdfPages": [299], "bookPages": "277–277"},
    "sourceEvidence": kept, "visualIds": ["insurance-models-map"],
    "mechanismIds": ["network-referral-cost-map", "risk-bearer-map"],
    "kypExtensions": [
        {"id": "network-referral-cost-grid",
         "summary": "The member-facing synthesis of the six printed plans: three axes — NETWORK (EPO/HMO in-network only, with EPO's printed emergency exception; PoS/PPO allow out-of-network care), REFERRAL (HMO and PoS print the primary care gate; PPO alone prints 'no referral requirement'), and the premium-vs-out-of-pocket SEE-SAW (HMO prints both ends low; HDHP prints premium low / out-of-pocket high with its HSA pairing) — plus the two rows outside the grid by design (ACO = provider-side coordination for Medicare patients; HDHP = pure cost design). The grid explicitly marks the page's silences: NO referral or cost rule is printed for EPO, and NO network/referral rules for ACO or HDHP — the decoder marks them '— not printed' rather than inventing rules.",
         "origin": "outside-first-aid", "rationale": "The source prints six parallel rows of rules; the three-axis grid, the see-saw reading, the hybrid reading of PoS, the provider-side vs cost-design classification of ACO/HDHP, and the silence-marking convention are KYP's organization of the printed facts.",
         "location": "core.keyIdea QUESTION 1 + mechanisms[0] network-referral-cost-map + blocks[4] the plan decoder + Zone A of the registry visual"},
        {"id": "risk-bearer-ladder",
         "summary": "The payer-facing synthesis of the five printed payment models: one ladder ordered by UNIT of payment — PER SERVICE (fee-for-service; discounted fee-for-service is the same unit at a rate predetermined by providers and payers, eg, PPOs), PER SERVICE DIVIDED among all providers and facilities involved (bundled payment, 'regardless of ultimate cost'), PER INCIDENT of care (global payment — the elective-surgery model covering surgery plus the necessary pre- and postoperative visits), PER PATIENT-PER-PERIOD (capitation, 'regardless of how much the patient uses the healthcare system,' used by some HMOs) — with the rule that the wider the unit, the more utilization risk shifts from payer to provider. The ladder arrangement is KYP's (the printed table lists the rows alphabetically).",
         "origin": "outside-first-aid", "rationale": "The source prints five parallel definitions; the unit-of-payment ladder, the risk-bearer assignment on each rung, and the payer-to-provider risk-shift rule are KYP's synthesis. The two printed cross-table ties (discounted FFS 'eg, PPOs'; capitation 'used by some HMOs') are the source's own and are carried as printed.",
         "location": "core.keyIdea QUESTION 2 + mechanisms[1] risk-bearer-map + blocks[5] the payment-model decoder + Zone B of the registry visual"},
        {"id": "usmle-attack-layer",
         "summary": "The pattern/trap/pivot/mini-case attack structure layered over the printed page — 4 patterns (the EPO emergency-visit stem, the capitation fixed-per-patient stem, the elective-surgery global-payment stem, the ESRD-vs-limited-income eligibility stem), 4 traps (HMO vs PPO gate-and-see-saw; EPO vs HMO; Medicare vs Medicaid; capitation vs bundled vs global units), 3 pivots (the PER-WHAT router for payment-model option lists; the age/disability/ESRD-vs-income door router; the referral-silence tell — only rows that PRINT a referral rule can be tested on it), and a 10-card recall set covering all six plans, all five models, and both programs.",
         "origin": "outside-first-aid", "rationale": "First Aid prints the plan and model definitions only; the attack structure, distractor pairings, the silence-trap, and the question shapes are KYP's design.",
         "location": "usmle section + recall"},
        {"id": "mnemonic-layer",
         "summary": "The mnemonic ledger: First Aid's OWN two mnemonics, printed in the Medicare-and-Medicaid block's RIGHT panel — 'MedicarE is for Elderly.' / 'MedicaiD is for Disadvantaged.' and 'The 4 parts of Medicare:' (A hospital Admissions incl. hospice and skilled nursing; B Basic medical bills; C parts A + B = Combo delivered by approved private companies; D prescription Drugs) — carried VERBATIM and ATTRIBUTED in the mnemonics array, the memory callout, the verbatim text block, and the visual's split panel; plus TWO KYP originals, marked as such: 'HMO GATES AND SAVES; PPO ROAMS AND PAYS' (the six-plan axis) and 'PER SERVICE, PER INCIDENT, PER PATIENT — the wider the PER, the more risk shifts to the provider' (the payment ladder).",
         "origin": "outside-first-aid", "rationale": "The two panel mnemonics are the source's own (attributed, not counted as KYP's); their red keyword-letter printing is FA-own furniture (VLM-adjudicated: two 240dpi zoom passes read the letters in red, governing over the 120dpi full-page pass that called the panel plain black); the two ALL-CAPS codes are KYP's design.",
         "location": "mnemonics + blocks[9] the memory callout + blocks[3] the verbatim text block + Zone C of the registry visual"},
        {"id": "eligibility-and-clinical-anchor-layer",
         "summary": "The clinical anchor layer: the ESRD door (end-stage renal disease qualifies a patient of ANY age for Medicare — the nephrology bridge), the HSA pairing printed with the HDHP, the elective-surgery episode printed with global payment (one payment owning the preoperative visit, the surgery, and the postoperative visits), and the referral workflow (HMO and PoS members route through primary care before specialists; the PPO's 'no referral requirement' is the counterweight) — plus the boundary framing (the Healthcare Delivery arc: disease prevention and prophylaxis on book 276 before this page; palliative care and medical errors on book 278 after it) and the miniCase (the self-employed consultant wanting the lowest premiums + a tax-advantaged account, routed to HDHP with HSA against HMO, PPO, EPO, and ACO distractors).",
         "origin": "outside-first-aid", "rationale": "The eligibility rules and examples themselves are printed (FA-own); the anchor organization, the workflow framing, the boundary framing, and the miniCase vignette with its four distractors are KYP's design, flagged as such.",
         "location": "clinical block + usmle.miniCase + usmle.patterns[3] + related[0-1]"},
    ],
    "mnemonicStatus": "authored", "qa": QA, "stages": STAGES,
    "productionStatus": "pilot-complete",
    "notes": "FULL single page (no shared split): pdf 299 / book 277, the SECOND content page of the HEALTHCARE DELIVERY subsection (pdf 298 / book 276 = the subsection opener; the banner prints ONCE here — running header only), carrying THREE blocks — the 'Major medical insurance plans' table (SIX rows in printed order: EPO, HMO, PoS, PPO, ACO, HDHP — carried VERBATIM in the note's first table block), the 'Healthcare payment models' table (FIVE rows in printed order: Bundled payment, Capitation, Discounted fee-for-service, Fee-for-service, Global payment — carried VERBATIM in the note's second table block), and the 'Medicare and Medicaid' block (LEFT column the paragraph on Social Security Act origins, Medicare eligibility ≥65 / <65 with certain disabilities / ESRD, and Medicaid as joint federal and state assistance for limited income and/or resources; RIGHT column First Aid's OWN mnemonic panel — 'MedicarE is for Elderly.' / 'MedicaiD is for Disadvantaged.' / 'The 4 parts of Medicare:' A-B-C-D — carried VERBATIM and ATTRIBUTED in the note's text block and the visual's split panel). CENSUS (pdfimages): ZERO raster images; VLM WAS AVAILABLE this session (glm-4.6v, THREE passes: ONE 120dpi full-page pass + TWO 240dpi zoom passes on the Medicare/Medicaid block, staging-pubh26/vlm-census.txt): exactly SIX plan rows then FIVE payment rows confirmed in printed order (none missing or extra); the Medicare/Medicaid block is TEXT-ONLY (no artwork, flag, icon, or image); the mnemonic panel is the block's RIGHT COLUMN (pdftotext -layout + zoom pass agree — not a page-margin element); square light-blue/teal bullets mark the four Part lines; both table titles print in bold dark teal/green with dotted hairline row separators (no zebra). ADJUDICATIONS (all documented in the note header + the visual header): (A) COLOR — the 120dpi full-page pass reported 'no red text anywhere on this page,' but BOTH 240dpi zoom passes read the mnemonic keyword letters (E of MedicarE/Elderly, D of MedicaiD/Disadvantaged, and the A/B/C/D letters) in RED with black connecting words — zoom governs (letters are small at 120dpi); the visual draws the keyword letters in the emergency tone with attribution tags; (B) LAYOUT — the mnemonic panel is the RIGHT COLUMN of the Medicare-and-Medicaid row, carried as part of block 3; (C) SILENCES — the page prints NO referral or cost rule for EPO and NO network/referral rules for ACO or HDHP; the note's decoder and the visual's grid mark those cells '— not printed' (documented silence) instead of inventing rules from outside knowledge — an exam-shape consequence flagged in the pivots (only rows that PRINT a referral rule can be tested on it). Quirks carried + documented: 'SEC TION II' header-space extraction artifact (known, as-is); the 'Discounted fee-for-service' row name wraps in print as 'Discounted fee-for-' / 'service' (hyphen retained) while the raw layer merges it to 'fee-forservice' (the hyphenated print is carried in the note's verbatim table; evidence range 10 preserves the raw merge); the 'and/or' of 'limited income and/or resources' wraps in print as 'and/' + 'or resources.' (the raw span preserves the wrap; the note carries 'and/or'); the four Part lines' bullets extract as a C1 control byte (0x83) + the U+2598 quarter-block glyph — the print's square light-blue bullets; every plan-name cell except 'Point of service (PoS)' wraps across two lines in print (carried un-wrapped, wrap documented); 'PoS' capitalization as printed. Conventions, documented: (1) the batch convention targets are met — 2 mechanisms (network-referral-cost-map, risk-bearer-map), a visual block + TWO verbatim table blocks + the verbatim Medicare/Medicaid text block + two decoder list blocks + a steps block + a compare block (HMO vs PPO with the PoS hybrid echo) + an exam callout + a memory callout, a clinical block (the four clinical anchors), 4 patterns, 4 traps, 3 pivots, 10 recall, 4 related (disease-prevention-prophylaxis, patient-safety-quality, challenging-scenarios, core-ethical-principles — all four are public-health census topicIds; patient-safety-quality is produced in parallel in this same batch, referenced by design), 4 crossLinks, 4 mnemonics (First Aid's own two carried attributed + two KYP originals marked), and a miniCase with 5 options (exactly 1 correct + 4 distractors, why/whyWrong on every option); (2) DrugCards are FOLDED BY ABSENCE (documented): the page prints insurance plans and payment models, not drugs — no mechanisms/uses/adverse effects to trace, so the DrugCard shape does not fit; (3) productionStatus uses the schema's ProductionStatus vocabulary value 'pilot-complete' (the manifest convention; the per-record INVENTORY productionStatus is 'complete'); (4) outputs are STAGED under .usmle-pipeline-cache/staging-pubh26/ — nothing is written into content/ (chapters/public-health.json, content manifests, visual-inventory, notes/index.ts, and the visual registry are owned by the promotion step; the note's visualId 'insurance-models-map' is therefore not yet in visuals/registry.tsx by design); (5) the page's THREE visual assets are implemented in ONE registry visual (insurance-models-map, InsuranceModelsMap in visuals/pubhealth-p26.tsx, viewBox 0 0 1102 1350): the plans table as an ORIGINAL KYP ADAPTATION (a network-rules grid — six rows in printed order with NETWORK / REFERRAL / COST columns, chips for the printed verdicts, '— not printed' cells for the page's silences), the payment-models table as an ORIGINAL KYP ADAPTATION (risk-ladder flow cards arranged by unit of payment with a payer-to-provider risk column; the printed alphabetical order is documented and carried verbatim in the note's table block), and the Medicare/Medicaid block as an ORIGINAL KYP ADAPTATION (a Medicare/Medicaid split panel with the four A-B-C-D part rows and both of First Aid's mnemonics attributed, keyword letters drawn in the emergency tone) — with the full text of all eleven rows + the paragraph + the mnemonics ALSO carried verbatim in the note's blocks; the rendered SVG was QA'd clean (getBBox: 146/146 texts inside the viewBox, zero chip/column overflows; VLM layout pass: CLEAN).",
    "updatedAt": str(date.today())}
SV_BASE = {"sourceBook": "First Aid for the USMLE Step 1 2026", "chapterId": "public-health",
    "rightsStatus": "COPYRIGHTED_NO_REPUBLISH", "subsection": "Public Health Sciences — Healthcare Delivery",
    "topicId": "insurance-payment-models", "requiredInKYP": True}
inv1 = [
    dict(SV_BASE, **{
        "visualId": "insurance-payment-models-sv1",
        "sourcePages": {"part": 1, "pdfPages": [299], "bookPages": "277"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Major medical insurance plans table (book 277): the six US insurance plans — EPO, HMO, PoS, PPO, ACO, HDHP — with each plan's printed network, referral, and cost rules; the Healthcare Delivery subsection's member-facing coverage core",
        "sourceFigureDescription": "TWO-COLUMN TABLE (plan name | printed description), no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh26/vlm-census.txt — VLM available this session): the running header (book page 277, SEC TION II, PUBLIC HEALTH SCIENCES, the banner '▶ PUBLIC HEALTH SCIENCES—HEALTHCARE DELIVERY' printed ONCE — running header only), the table title 'Major medical insurance plans' in bold dark teal/green, then SIX rows in printed order with bold plan names, dotted hairline row separators, and no zebra striping: Exclusive provider organization (EPO) → Requires in-network care; out-of-network coverage available for emergencies; Health maintenance organization (HMO) → Lower premiums, limited to in-network providers, requires primary care referral for specialists, lower out-of-pocket cost; Point of service (PoS) → Combination of HMO and PPO, allows out-of-network care at higher cost, and requires primary care referrals; Preferred provider organization (PPO) → Flexibility with in-network and out-of-network care, higher cost for out-of-network services, no referral requirement; Accountable care organization (ACO) → Group of providers who voluntarily coordinate care for Medicare patients; High deductible health plan (HDHP) → Low premiums, high out-of-pocket cost, compatible with health savings account (HSA). Every plan-name cell except 'Point of service (PoS)' wraps across two lines in print (documented).",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "insurance-models-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone A of the registry visual (InsuranceModelsMap in visuals/pubhealth-p26.tsx): a network-rules grid — one row per plan in PRINTED order, with columns PLAN / NETWORK RULE / REFERRAL RULE / COST SEE-SAW, a status chip per printed verdict (IN-NETWORK ONLY · REFERRAL REQUIRED · NO REFERRAL NEEDED · BOTH ENDS LOW · OUT-OF-NETWORK COSTS MORE · PROVIDER GROUP · MEDICARE · LOW PREMIUM · HIGH OUT-OF-POCKET), and '— not printed' cells marking the page's documented silences (EPO referral/cost; ACO referral/cost; HDHP network/referral), plus the grid-rule strip; the full table text is ALSO carried verbatim in the note's first table block (blocks[1]), core.what, the plan decoder (blocks[4]), and recall[0-4]",
        "productionStatus": "complete",
        "plannedKypVisualId": "insurance-models-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "insurance-payment-models-sv2",
        "sourcePages": {"part": 1, "pdfPages": [299], "bookPages": "277"},
        "visualType": "VISUAL_TABLE",
        "visualPurpose": "The Healthcare payment models table (book 277): the five payment models — bundled payment, capitation, discounted fee-for-service, fee-for-service, global payment — each with its printed definition; the payer-facing core of the Healthcare Delivery subsection and the risk-shift ladder the exam tests",
        "sourceFigureDescription": "TWO-COLUMN TABLE (model name | printed definition), no raster (pdfimages: zero raster images; VLM-read at 120dpi, staging-pubh26/vlm-census.txt — VLM available this session): the table title 'Healthcare payment models' in bold dark teal/green, then FIVE rows in printed (alphabetical) order with dotted hairline separators: Bundled payment → Healthcare organization receives a set amount per service, regardless of ultimate cost, to be divided among all providers and facilities involved; Capitation → Physicians receive a set amount per patient assigned to them per period of time, regardless of how much the patient uses the healthcare system. Used by some HMOs; Discounted fee-for-service → Insurer and/or patient pays for each individual service at a discounted rate predetermined by providers and payers (eg, PPOs) — the row name wraps in print as 'Discounted fee-for-' / 'service' (hyphen retained; the raw text layer merges it to 'fee-forservice', documented); Fee-for-service → Insurer and/or patient pays for each individual service; Global payment → Insurer and/or patient pays for all expenses associated with a single incident of care with a single payment. Most commonly used during elective surgeries, as it covers the cost of surgery as well as the necessary pre- and postoperative visits.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "insurance-models-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone B of the registry visual (InsuranceModelsMap in visuals/pubhealth-p26.tsx): the five models as flow cards on the KYP RISK LADDER, arranged by unit of payment (Fee-for-service PER SERVICE → Discounted fee-for-service PER SERVICE AT A DISCOUNT → Bundled payment PER SERVICE DIVIDED → Global payment PER INCIDENT → Capitation PER PATIENT · PER PERIOD), each card carrying the printed definition plus a who-bears-the-risk chip (PAYER RISK / SHARED RISK / PROVIDER EPISODE RISK / PHYSICIAN PANEL RISK), a right-side payer-to-provider risk column, and the ladder-rule strip; the printed alphabetical order is documented and the full table text is carried verbatim in the note's second table block (blocks[2]), the payment decoder (blocks[5]), and recall[5-8]",
        "productionStatus": "complete",
        "plannedKypVisualId": "insurance-models-map", "plannedImplementation": "registry-visual"}),
    dict(SV_BASE, **{
        "visualId": "insurance-payment-models-sv3",
        "sourcePages": {"part": 1, "pdfPages": [299], "bookPages": "277"},
        "visualType": "COMPARISON_FIGURE",
        "visualPurpose": "The Medicare and Medicaid block (book 277): a two-column row — LEFT the paragraph (federal social healthcare programs from Social Security Act amendments; Medicare ≥65 / <65 with certain disabilities / ESRD; Medicaid joint federal and state for limited income and/or resources), RIGHT First Aid's own mnemonic panel ('MedicarE is for Elderly.' / 'MedicaiD is for Disadvantaged.' / the 4 parts A-B-C-D) — the government-programs comparison of the Healthcare Delivery subsection",
        "sourceFigureDescription": "TEXT-ONLY TWO-COLUMN BLOCK, no raster and no artwork (pdfimages: zero raster images; VLM-read in three passes — one 120dpi full page + two 240dpi zooms on this block, staging-pubh26/vlm-census.txt): the row label 'Medicare and Medicaid', LEFT column the paragraph (verbatim: 'Medicare and Medicaid—federal social healthcare programs that originated from amendments to the Social Security Act. Medicare is available to patients ≥65 years old, <65 with certain disabilities, and those with end-stage renal disease. Medicaid is joint federal and state health assistance for people with limited income and/or resources.' — the 'and/or' wraps in print as 'and/' + 'or resources.'), RIGHT column First Aid's OWN mnemonic panel with the keyword letters in RED and black connecting words (VLM-ADJUDICATED: the 120dpi full-page pass had called the panel plain black; both 240dpi zoom passes read the E of MedicarE/Elderly, the D of MedicaiD/Disadvantaged, and the A/B/C/D keyword letters in red — zoom governs), square light-blue/teal bullets before the Part lines (extracting as a C1 control byte + the U+2598 quarter-block glyph), and NO box, border, or shading around the panel: 'MedicarE is for Elderly.' / 'MedicaiD is for Disadvantaged.' / 'The 4 parts of Medicare:' / Part A: hospital Admissions, including hospice, skilled nursing / Part B: Basic medical bills (eg, physician fees, diagnostic testing) / Part C: (parts A + B = Combo) delivered by approved private companies / Part D: prescription Drugs.",
        "implementationType": "ORIGINAL_KYP_ADAPTATION",
        "kypVisualId": "insurance-models-map", "kypImplementation": "registry-visual",
        "qaStatus": "passed",
        "kypLocation": "Zone C of the registry visual (InsuranceModelsMap in visuals/pubhealth-p26.tsx): a Medicare/Medicaid SPLIT PANEL — Medicare side (eligibility lines ≥65 / <65 with certain disabilities / ESRD, the four A-B-C-D part rows with emergency-tone keyword letters and the attributed 'MedicarE is for Elderly.' line, the door strip age·disability·disease) beside the Medicaid side (joint federal + state chip, limited income and/or resources lines, the attributed 'MedicaiD is for Disadvantaged.' line, the E/D contrast note marked KYP), over the shared-origin strip quoting the Social Security Act sentence; the paragraph and mnemonics are ALSO carried verbatim in the note's text block (blocks[3]), core.what, the steps block (blocks[6]), recall[9-10], and both FA mnemonics",
        "productionStatus": "complete",
        "plannedKypVisualId": "insurance-models-map", "plannedImplementation": "registry-visual"}),
]
OUT = CACHE / "staging-pubh26"
(OUT / "manifests").mkdir(parents=True, exist_ok=True)
(OUT / "visual-inventory").mkdir(parents=True, exist_ok=True)
(OUT / "manifests" / "insurance-payment-models.json").write_text(json.dumps(m1, indent=2, ensure_ascii=False) + "\n", encoding="utf8")
(OUT / "visual-inventory" / "insurance-payment-models.json").write_text(
    json.dumps({"topicId": "insurance-payment-models", "chapterId": "public-health", "inventory": inv1,
                "coverageAudit": {"topicId": "insurance-payment-models", "textbookVisualCount": 3,
                    "accountedFor": 3, "sourceReproductions": 0, "kypRedraws": 0, "kypOriginals": 3,
                    "unresolved": 0, "omitted": 0, "omissionReasons": [], "complete": True},
                "notes": "The page carries THREE visual assets — the Major medical insurance plans table (sv1: SIX rows, EPO through HDHP), the Healthcare payment models table (sv2: FIVE rows, bundled payment through global payment), and the Medicare and Medicaid two-column block (sv3: the Social Security Act paragraph + First Aid's own E/D and A-B-C-D mnemonic panel) — all three accounted for in ONE registry visual (insurance-models-map, InsuranceModelsMap in visuals/pubhealth-p26.tsx, viewBox 0 0 1102 1350), each as an ORIGINAL KYP ADAPTATION: the plans table as a network-rules grid (Zone A — NETWORK / REFERRAL / COST columns with status chips and '— not printed' cells for the page's documented silences), the payment models as risk-ladder flow cards (Zone B — arranged by unit of payment with a payer-to-provider risk column; the printed alphabetical order documented and carried verbatim in the note's table block), and the Medicare/Medicaid block as a split panel (Zone C — the four A-B-C-D part rows and both of First Aid's mnemonics attributed, keyword letters in the emergency tone); nothing is reproduced, and the full text of all eleven rows + the paragraph + both mnemonics is additionally carried verbatim in the note's blocks. Census: zero raster images (pdfimages); VLM available this session — ONE 120dpi full-page pass + TWO 240dpi zoom passes on the Medicare/Medicaid block (vlm-census.txt) confirmed the six plan rows and five payment rows in printed order (none missing or extra), the text-only Medicare/Medicaid block, and the mnemonic panel's placement as the block's RIGHT column. ADJUDICATION (color): both 240dpi zoom passes read the mnemonic keyword letters in RED with black connecting words; the 120dpi full-page pass had called the panel plain black — the zoom passes govern, and the visual draws the keyword letters in the emergency tone with attribution tags. Rendered-SVG QA: getBBox clean (146/146 texts inside the viewBox, zero chip/column overflows) + a VLM layout pass returned CLEAN. FULL single page, the SECOND of Healthcare Delivery (pdf 298 / book 276, disease prevention and prophylaxis, is the subsection opener; pdf 300 / book 278 opens Palliative care — the patient-safety-quality topic, produced in parallel). STAGED under .usmle-pipeline-cache/staging-pubh26/ — promotion into content/ is owned downstream."},
               indent=2, ensure_ascii=False) + "\n", encoding="utf8")
print(f"PUBH26 manifest + inventory staged: {OUT}/manifests/insurance-payment-models.json, {OUT}/visual-inventory/insurance-payment-models.json")
print(f"insurance-payment-models: evidence {len(kept)}/{len(E1)} verified")
