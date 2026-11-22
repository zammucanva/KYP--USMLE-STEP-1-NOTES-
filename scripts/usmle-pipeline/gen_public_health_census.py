#!/usr/bin/env python3
"""Public Health Sciences chapter census — content/usmle/chapters/public-health.json.

Source: First Aid for the USMLE Step 1 2026, Part 1, pdf 277-300 / book 255-278.
Banner census (text layer, PyMuPDF-verified span style + pdftotext cache):
  PUBLIC HEALTH SCIENCES banner, subsections:
    EPIDEMIOLOGY AND BIOSTATISTICS  pdf 278-290-top  (book 256-268-top)
    ETHICS                          pdf 290-lower-292 (book 268-lower-270)
    COMMUNICATION SKILLS            pdf 293-297       (book 271-275)
    HEALTHCARE DELIVERY             pdf 298-300       (book 276-278)
  pdf 277 (book 255) = chapter opener (the p249 pharmacology convention, unclaimed).

RASTER CENSUS (pdfimages -list, every page 277-300): ZERO raster images on all
23 content pages — the chapter is pure text, tables, and VECTOR line art. Every
figure (study-design timelines, trial-phase pipeline, population pyramids,
Kaplan-Meier curve, cutoff-value distribution curves, ROC curve, distribution
curves, precision-vs-accuracy targets, stratified-analysis diagrams, Pearson
r-scatter gallery) is vector art with text-layer labels → ORIGINAL_KYP_REDRAW
(the P2/P3 pure-vector convention); every table → ORIGINAL_KYP_ADAPTATION.

Page splits (the p252/p256 pharmacology precedent — boundaries pinned):
  p279 upper = clinical-therapeutic-trials; p279 lower = bradford-hill-criteria
  p281 upper = vital-statistics-populations; p281 mid = likelihood-ratios;
     p281 bottom + p282 top = survival-analysis (cross-page, KM + HR)
  p282 lower = diagnostic-test-performance
  p289 upper = confidence-intervals-meta-analysis; p289 lower = statistical-tests
  p290 top = correlation-coefficient; p290 lower = core-ethical-principles
Cross-page topic (the p274-275 drug-names precedent): challenging-scenarios
owns pdf 296-297 (the two-page situation/response table).

Every content page 278-300 is claimed by exactly one topic; every content
block is mapped. 27 topics total. Regenerate: python3 scripts/usmle-pipeline/gen_public_health_census.py
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "content/usmle/chapters/public-health.json"

def topic(tid, title, fa, pages, book, diff, hints, mh, sub, rationale):
    return {
        "topicId": tid,
        "title": title,
        "faSubsections": fa,
        "sourcePages": {"part": 1, "pdfPages": pages, "bookPages": book},
        "difficulty": diff,
        "requiresVisual": True,
        "visualHints": hints,
        "mechanismHeavy": mh,
        "subsection": sub,
        "status": "pending",
        "productionRationale": rationale,
    }

EPI = "Public Health Sciences — Epidemiology and Biostatistics"
ETH = "Public Health Sciences — Ethics"
COM = "Public Health Sciences — Communication Skills"
DEL = "Public Health Sciences — Healthcare Delivery"

topics = [
    topic("observational-studies", "Observational Study Designs",
          ["Observational studies"], [278], "256", 2, ["observational-studies-map"], False, EPI,
          "The 7-row observational studies table (case series, cross-sectional, case-control, cohort, twin concordance, adoption, ecological — design / measures / example columns, each with its high-yield example) plus the study-design timeline figure (cross-sectional / case-control / retrospective cohort / prospective cohort drawn on the Past-Present-Future axis with the compare-what labels). Zero rasters — table is an ORIGINAL KYP ADAPTATION, timeline is an ORIGINAL_KYP_REDRAW of pure-vector art."),
    topic("clinical-therapeutic-trials", "Clinical Therapeutic Trials and the Drug Development Pipeline",
          ["Clinical therapeutic trial"], [279], "257 (upper)", 2, ["clinical-trials-map"], False, EPI,
          "UPPER portion of book 257 (boundary pinned at the Off-label heading): randomized/controlled/double-/triple-blinded design, crossover with washout, intention-to-treat vs as-treated vs per-protocol analysis, the five clinical trial phases 0-4 with the 'Can I SWIM?' acronym (preclinical → phase 0 microdosing → phase 1 safety → phase 2 efficacy → phase 3 effectiveness → FDA approval → phase 4 postmarketing), and the sample-size/anonymization table per phase. The phase pipeline is pure-vector art → ORIGINAL_KYP_REDRAW."),
    topic("bradford-hill-criteria", "Bradford Hill Criteria: Judging Causation",
          ["Off-label drug use", "Bradford Hill criteria"], [279], "257 (lower)", 1, ["bradford-hill-map"], False, EPI,
          "LOWER portion of book 257: off-label drug use (definition, reasons, the TCA-for-neuropathic-pain example) and the nine Bradford Hill criteria (strength, consistency, specificity, temporality, biological gradient, plausibility, coherence, experiment, analogy) — necessary-but-not-sufficient principles for causal inference. Pure text → ORIGINAL_KYP_ADAPTATION."),
    topic("quantifying-risk", "Quantifying Risk: The 2×2 Table and Its Measures",
          ["Quantifying risk"], [280], "258", 2, ["quantifying-risk-map"], False, EPI,
          "The classic 2×2 contingency table (exposure × disease, cells a/b/c/d) and the quantifying-risk table: odds ratio, relative risk, relative risk reduction, attributable risk, absolute risk reduction, number needed to treat, number needed to harm, case fatality rate — each with definition, worked example, and formula (OR = ad/bc, RR = a/(a+b) ÷ c/(c+d), RRR = 1−RR, AR, ARR, NNT = 1/ARR, NNH = 1/AR, CFR). Includes the in-cell FA mnemonics ('You take a case to the OR', 'Cohort = relative risk') carried attributed. Zero rasters → ORIGINAL KYP ADAPTATION with the 2×2 as a rotating decoder."),
    topic("vital-statistics-populations", "Mortality, Attack Rates, and Demographic Transition",
          ["Quantifying risk (continued)", "Demographic transition"], [281], "259 (upper)", 1, ["vital-statistics-map"], False, EPI,
          "UPPER portion of book 259: the mortality-rate and attack-rate rows closing the quantifying-risk table, then demographic transition — the three population pyramids (growing / stable / declining) with the birth-rate, mortality-rate, life-expectancy, and population-structure rows across development stages. Pyramids are pure-vector art → ORIGINAL_KYP_REDRAW."),
    topic("likelihood-ratios", "Likelihood Ratios: Pretest to Posttest Odds",
          ["Likelihood ratio"], [281], "259 (mid)", 2, ["likelihood-ratio-map"], False, EPI,
          "MID portion of book 259: LR+ = sensitivity/(1−specificity) and LR− = (1−sensitivity)/specificity with their TP-rate/FP-rate forms, the LR+ > 10 and LR− < 0.1 rules, and the pretest odds × LR = posttest odds / posttest probability machinery. Pure text → ORIGINAL KYP ADAPTATION."),
    topic("survival-analysis", "Kaplan-Meier Curves and Hazard Ratios",
          ["Kaplan-Meier curve", "Hazard ratio"], [281, 282], "259 (bottom)–260 (top)", 2, ["survival-analysis-map"], False, EPI,
          "CROSS-PAGE topic (boundaries pinned on both sides): the Kaplan-Meier curve block at the bottom of book 259 (survival probability vs time, time-to-event data, log-rank/Cox p-values, the Drug vs Control stepped curve figure) plus the hazard-ratio block at the top of book 260 (HR = 1 / >1 / <1, relative slopes of survival curves, steeper curve = higher hazard, separation reflects HR magnitude). KM curve is pure-vector art → ORIGINAL_KYP_REDRAW."),
    topic("diagnostic-test-performance", "Sensitivity, Specificity, and Predictive Values",
          ["Evaluation of diagnostic tests"], [282], "260 (lower)", 2, ["diagnostic-test-map"], False, EPI,
          "LOWER portion of book 260: the test-vs-disease 2×2 (TP/FP/FN/TN), sensitivity = TP/(TP+FN), specificity = TN/(TN+FP), PPV, NPV, test efficiency, prevalence = (TP+FN)/all, the SN-N-OUT / SP-P-IN rules with screening-vs-confirmation positioning, PPV varying directly and NPV inversely with prevalence, and the cutoff-value figure (two overlapping distributions with cutoffs A/B/C — A 100% sensitivity, B compromise, C 100% specificity — plus the anemia-switch note). The cutoff curves are pure-vector art → ORIGINAL_KYP_REDRAW."),
    topic("roc-precision-accuracy", "ROC Curves, Precision, and Accuracy",
          ["Receiver operating characteristic curve", "Precision vs accuracy"], [283], "261", 2, ["roc-precision-map"], False, EPI,
          "The ROC curve (TP rate vs FP rate, AUC comparison, ideal test AUC = 1, curve closer to upper-left = better) and precision-vs-accuracy (reliability = consistency/reproducibility, absence of random error, ↓SD, ↑power; validity = closeness to truth, absence of systematic error) with the four-quadrant high/low precision × high/low accuracy panel. Both figures pure-vector art → ORIGINAL_KYP_REDRAW pair."),
    topic("incidence-prevalence", "Incidence vs Prevalence",
          ["Incidence vs prevalence"], [284], "262", 1, ["incidence-prevalence-map"], False, EPI,
          "Incidence = new cases/at risk, prevalence = existing cases/total, prevalence ≈ incidence × duration (÷ (1−prevalence)), prevalence > incidence for chronic disease, ≈ for short-duration disease, prevalence ∼ pretest probability (↑prevalence → ↑PPV ↓NPV), and the 8-row situation table (↑survival, ↑mortality, faster recovery, vaccine administration, ↓risk factors, ↑diagnostic sensitivity, new effective treatment, ↓contact — each vs incidence and prevalence). Pure text/table → ORIGINAL KYP ADAPTATION."),
    topic("bias-and-study-errors", "Bias and Study Errors",
          ["Bias and study errors"], [285], "263", 2, ["bias-map"], False, EPI,
          "The bias table: selection bias (nonrandom sampling, convenience, Berkson, attrition), recall bias, measurement bias (faulty sphygmomanometer, Hawthorne effect), procedure bias, observer-expectancy (Pygmalion) bias, lead-time bias, length-time bias — each with definition, examples, and reduction strategies (randomization, blinding + placebo, objective methods, back-end survival, RCT screening assignment), plus the recruiting/performing/interpreting stage rail. In-cell FA mnemonics ('Hawthorne watches you like a hawk') carried attributed. Pure text → ORIGINAL KYP ADAPTATION."),
    topic("confounding-effect-modification", "Confounding vs Effect Modification",
          ["Confounding vs effect modification"], [286], "264", 2, ["confounding-map"], False, EPI,
          "The confounding vs effect-modification table (factor related to both exposure and outcome, not on causal pathway; no association after stratification vs different outcomes in subgroups, true association exists), the coffee→lung cancer and OCP→DVT worked examples, reduction strategies (crossover, matching, regression, stratified analysis), and the crude-vs-stratified-analysis vector diagrams (association disappears = confounding; strong in one subgroup only = effect modification). Diagrams pure-vector → ORIGINAL_KYP_REDRAW."),
    topic("statistical-distributions", "Statistical Distributions: Center, Spread, and Skew",
          ["Statistical distribution"], [287], "265", 2, ["distributions-map"], False, EPI,
          "Measures of central tendency (mean / median / mode, outlier sensitivity), measures of dispersion (SD, SE = σ/√n, variance = SD²), the normal distribution with the 68-95-99.7 rule, bimodal distribution (two populations — fast vs slow acetylators, Hodgkin age, suicide by age), positive skew (mean > median > mode, tail right) and negative skew (mean < median < mode, tail left), plus the statistical hypothesis testing opener (H0, H1, P value). The distribution curves are pure-vector art → ORIGINAL_KYP_REDRAW."),
    topic("hypothesis-testing-errors", "Hypothesis Testing Errors: Type I, Type II, and Power",
          ["Outcomes of statistical hypothesis testing", "Testing errors", "Statistical vs clinical significance"], [288], "266", 2, ["hypothesis-errors-map"], False, EPI,
          "The study-vs-reality 2×2 (power = 1−β, α, β with blue-shaded correct cells), type I error (α, false positive, the boy who cried wolf, P < α rejects H0, statistical ≠ clinical significance) and type II error (β, false negative, power = 1−β, ↑power by ↑sample size / ↑effect size / ↑precision / ↑α), and the statistical-vs-clinical-significance distinction (the 1 mg/dL blood-sugar example). Pure text → ORIGINAL KYP ADAPTATION with the error grid as the centerpiece."),
    topic("confidence-intervals-meta-analysis", "Confidence Intervals and Meta-Analysis",
          ["Confidence interval", "Meta-analysis"], [289], "267 (upper)", 2, ["ci-meta-map"], False, EPI,
          "UPPER portion of book 267: confidence intervals (CI = 1−α, 95% CI Z = 1.96, 99% CI Z = 2.58, narrowing with ↑sample size, CI = x ± Z(SE)) with the significance rules (mean-difference CI excludes 0, OR/RR CI excludes 1, non-overlapping CIs between groups), and meta-analysis (pooling summary data, heterogeneity, improved power/generalizability, limited by study quality and selection bias). Pure text → ORIGINAL KYP ADAPTATION."),
    topic("statistical-tests", "Choosing the Statistical Test",
          ["Common statistical tests"], [289], "267 (lower)", 2, ["stat-tests-map"], False, EPI,
          "LOWER portion of book 267: t-test (2 means, 'Tea is meant for 2'), ANOVA (≥3 means), chi-square (≥2 percentages/proportions, 'chi-tegorical'), Fisher exact test (small samples), and the test-selection algorithm (numerical means: 2 groups → t-test, ≥3 → ANOVA; categorical proportions: small sample → Fisher, large → chi-square). The algorithm is a vector flow figure → ORIGINAL_KYP_REDRAW; the test rows carried verbatim."),
    topic("correlation-coefficient", "Correlation and the Pearson Coefficient",
          ["Pearson correlation coefficient"], [290], "268 (top)", 1, ["correlation-map"], False, EPI,
          "TOP portion of book 268 (boundary pinned at the ETHICS banner): the Pearson correlation coefficient (r between −1 and +1, positive/negative direction, strength by |r|, the coefficient of determination r², correlation ≠ causation) with the five-panel scatter gallery (r = −0.8 strong negative, −0.4 weak negative, 0 none, +0.4 weak positive, +0.8 strong positive). The scatter gallery is pure-vector art → ORIGINAL_KYP_REDRAW."),
    topic("core-ethical-principles", "Core Ethical Principles and Decision-Making Capacity",
          ["Core ethical principles", "Decision-making capacity"], [290], "268 (lower)", 1, ["ethics-principles-map"], False, ETH,
          "LOWER portion of book 268 — the ETHICS banner opens: autonomy (truth-telling, confidentiality, informed consent), beneficence (fiduciary duty, the mandatory-TB conflict, principle of double effect with end-of-life opioids), nonmaleficence (do no harm, risk-benefit balance), justice (fair and equitable, triage), plus decision-making capacity vs competency (physician for a specific decision vs judge; intellectual disability and mental illness not exclusion criteria; decisions with capacity not revoked by later incapacity) and the four components (understanding, appreciation, reasoning, expressing a choice). Pure text → ORIGINAL KYP ADAPTATION."),
    topic("informed-consent", "Informed Consent, Minors, and Advance Directives",
          ["Informed consent", "Consent for minors", "Advance directives"], [291], "269", 1, ["consent-map"], False, ETH,
          "The informed-consent process (disclosure, understanding, capacity, voluntariness; right to revoke), the WIPE exceptions (Waiver, legally Incompetent, therapeutic Privilege, Emergency), consent for minors (emancipation, the Sex/Drugs/Rock-and-roll exceptions, assent vs consent, encourage minor-guardian communication), and advance directives (oral, written/living will, medical power of attorney, DNR — what each prohibits and its flexibility ranking). Pure text → ORIGINAL KYP ADAPTATION."),
    topic("surrogates-confidentiality", "Surrogate Decision-Makers, Confidentiality, and Gifts",
          ["Ventilator-assisted life support", "Surrogate decision-maker", "Confidentiality", "Accepting gifts from patients"], [292], "270", 1, ["confidentiality-map"], False, ETH,
          "Ventilator-assisted life support (withhold/withdraw per patient wishes regardless of surrogate preference; palliative care involvement), the surrogate decision-maker hierarchy (spouse → adult children → parents → adult siblings → other relatives, 'the spouse chips in'), confidentiality and its general exception principles (serious and imminent harm, no alternative, preventable) plus the SAVED exceptions (Suicidal/homicidal, Abuse, duty to protect Victims, Epilepsy/impaired drivers, reportable Diseases), and accepting gifts from patients (harm-benefit assessment, the decline rules). Pure text → ORIGINAL KYP ADAPTATION."),
    topic("patient-centered-interviewing", "Patient-Centered Interviewing and Rapport",
          ["Patient-centered interviewing techniques", "Establishing rapport", "Communicating with patients with disabilities"], [293], "271", 1, ["interviewing-map"], False, COM,
          "The patient-centered interviewing techniques (introduction with name/pronouns/eye level, agenda setting, reflection, validation, recapitulation, facilitation), the PEARLS rapport framework (Partnership, Empathy, Apology, Respect, Legitimization, Support), and communicating with patients with disabilities (person-first vs identity-first language, talk to the patient, ask before assisting, extra time for speech difficulties, concrete language for cognitive impairment, deaf/hard-of-hearing communication and interpreter positioning, do not skip exam parts). Pure text → ORIGINAL KYP ADAPTATION."),
    topic("cultural-competence-interviewing", "Cultural Formulation, Trauma-Informed Care, and Motivational Interviewing",
          ["Cultural formulation interview", "Trauma-informed care", "Motivational interviewing", "Gender- and sexuality-inclusive history taking"], [294], "272", 1, ["cultural-interviewing-map"], False, COM,
          "The cultural formulation interview (patient's own words, cultural perceptions of cause, background influences, impact on interventions, barriers to care), trauma-informed care (behavioral health screenings, no invasive detail, permission before discussion, signal-to-end reassurance during exams, the 4 R's — Realize, Recognize, Respond, Resist re-traumatization), motivational interviewing (resolving ambivalence, readiness for change, SMART goals), and gender- and sexuality-inclusive history taking (no assumptions, gender-neutral terms, pronoun sharing, EMR inclusivity, confidentiality reassurance). Pure text → ORIGINAL KYP ADAPTATION."),
    topic("interpreters-bad-news", "Interpreters and Delivering Bad News: SPIKES",
          ["Use of interpreters", "Delivering bad news"], [295], "273", 1, ["bad-news-map"], False, COM,
          "Use of interpreters (professional medical interpreters unless conversationally fluent, phone/video fallback, family-member preference documented, ask preferred language — never assume from name or accent, speak directly to the patient, one question at a time, interpreter positioning for spoken vs sign language, emergency tools), and delivering bad news with SPIKES (Setting, Perception, Invitation, Knowledge, Emotions, Strategy). Pure text → ORIGINAL KYP ADAPTATION with the SPIKES protocol as a six-station visual."),
    topic("challenging-scenarios", "Challenging Patient and Ethical Scenarios",
          ["Challenging patient and ethical scenarios"], [296, 297], "274–275", 1, ["challenging-scenarios-map"], False, COM,
          "TWO-PAGE topic (the drug-names precedent): the complete situation → appropriate-response table across book 274-275 — 24 rows: nonadherence, unnecessary procedure request, medication difficulty, family asking prognosis, family requesting nondisclosure, 17-year-old requesting abortion, 15-year-old pregnancy, physician-assisted dying, suicidal patient, romantic interest from patient, post-mastectomy body image, waiting-room anger, complaint about another physician, wrong-patient procedure, uncovered treatment, bereaved 7-year-old, intimate partner violence, alternative medicine, impaired colleague, family insisting on life support after brain death, pharmaceutical sponsorship, procedure against physician beliefs, Jehovah's Witness transfusion (mother vs daughter), suspected abuse, vaccine refusal. The response principles (patient-centered, open-ended, empathetic, acknowledge obstacles, validate emotions) lead. Pure text → ORIGINAL KYP ADAPTATION."),
    topic("disease-prevention-prophylaxis", "Disease Prevention Levels and Prophylaxis",
          ["Disease prevention", "Chemoprophylaxis and post-exposure prophylaxis"], [298], "276", 2, ["prevention-prophylaxis-map"], False, DEL,
          "The prevention-level pyramid (primary — susceptible population, prevent onset, diet/exercise; secondary — subclinical, screen for early detection, glucose screening; tertiary — clinical/symptomatic, treat and prevent progression, A1c monitoring; quaternary — overmedicalized, discontinue unnecessary interventions, stopping sulfonylurea after hypoglycemia) and the chemoprophylaxis/PEP table (HIV exposure — tenofovir+emtricitabine+raltegravir/dolutegravir × 28 days ≤72 hr; N. meningitidis close contact — rifampin/ciprofloxacin/ceftriaxone; rabies bite — wound cleaning + vaccine + immune globulin on 0/3/7/14; HBV exposure — vaccine ± HBIG; malaria travel — atovaquone-proguanil/doxycycline/mefloquine; sexual exposure — doxycycline ≤72 hr with effectiveness data). Pure text/table → ORIGINAL KYP ADAPTATION."),
    topic("insurance-payment-models", "Insurance Plans, Payment Models, and Medicare vs Medicaid",
          ["Major medical insurance plans", "Healthcare payment models", "Medicare and Medicaid"], [299], "277", 1, ["insurance-models-map"], False, DEL,
          "The insurance plan table (EPO, HMO, PoS, PPO, ACO, HDHP with HSA — network rules, referral requirements, premium/out-of-pocket tradeoffs), the payment models (bundled payment, capitation, discounted fee-for-service, fee-for-service, global payment with the elective-surgery example), and Medicare vs Medicaid (federal social programs from Social Security Act amendments; Medicare ≥65 / <65 disabilities / ESRD, parts A hospital Admissions, B Basic bills, C Combo via private, D prescription Drugs; MedicarE = Elderly, MedicaiD = Disadvantaged; Medicaid joint federal-state for limited income). Pure text → ORIGINAL KYP ADAPTATION."),
    topic("patient-safety-quality", "Patient Safety: Medical Errors and Quality Improvement",
          ["Palliative care", "Types of medical errors", "Medical error analysis", "Causes of medical errors"], [300], "278", 1, ["patient-safety-map"], False, DEL,
          "The chapter's final page: palliative care vs hospice (comfort and quality of life, interdisciplinary team, concurrent with curative treatment, hospice ≤6-month prognosis), types of medical errors (active — frontline operator, wrong IV pump dose, immediate impact; latent — system-level, different IV pumps, accident waiting to happen; never event — identifiable, serious, usually preventable, retained scalpel, with sentinel event; near miss — pharmacist cancels interaction), error disclosure regardless of harm, root cause analysis (retrospective, 5 whys, fishbone, process maps) vs failure mode and effects analysis (forward-looking, inductive, prioritized by probability and impact), and the causes (burnout, fatigue). Pure text → ORIGINAL KYP ADAPTATION."),
]

chapter = {
    "chapterId": "public-health",
    "chapterTitle": "Public Health",
    "number": 6,
    "part": 1,
    "section": "II",
    "pdfRanges": [{"part": 1, "from": 277, "to": 300}],
    "bookPages": "255–278",
    "extractionStatus": "extracted",
    "pendingTopicCount": len(topics),
    "notes": (
        "Chapter inventory built from the banner + heading census (text-layer banner method, the "
        "pharmacology 29-topic-census convention). Banner structure: PUBLIC HEALTH SCIENCES banner on "
        "pdf 277-300 (book 255-278) with subsections EPIDEMIOLOGY AND BIOSTATISTICS pdf 278-290-top "
        "(book 256-268-top, 17 topics), ETHICS pdf 290-lower-292 (book 268-lower-270, 3 topics), "
        "COMMUNICATION SKILLS pdf 293-297 (book 271-275, 4 topics), HEALTHCARE DELIVERY pdf 298-300 "
        "(book 276-278, 3 topics). p277 = chapter opener (book 255, unclaimed — the p249 convention). "
        "SHARED PAGES with distinct subsections (the p252/p256 pharmacology convention, boundaries pinned): "
        "p279 (Clinical therapeutic trial + phases / Off-label use + Bradford Hill criteria), p281 (Quantifying "
        "risk continued + Demographic transition / Likelihood ratio / Kaplan-Meier curve — three blocks), "
        "p282 (Hazard ratio / Evaluation of diagnostic tests), p289 (Confidence interval + Meta-analysis / "
        "Common statistical tests), p290 (Pearson correlation coefficient / ETHICS core principles — the "
        "subsection banner falls mid-page). CROSS-PAGE TOPIC: survival-analysis (p281 bottom + p282 top, "
        "Kaplan-Meier + hazard ratio — the book pairs them itself); challenging-scenarios owns the two-page "
        "situation/response table p296-297 (the p274-275 drug-names precedent). RASTER CENSUS: ZERO raster "
        "images on all 23 content pages (pdfimages -list, every page 277-300 checked) — the chapter is pure "
        "text, tables, and VECTOR line art; every figure is an ORIGINAL_KYP_REDRAW candidate (the P2/P3 "
        "pure-vector convention), every table an ORIGINAL KYP ADAPTATION. Every content page 278-300 claimed "
        "by exactly one topic; every content block mapped in the topic productionRationales."
    ),
    "extraction": {
        "extractedOn": "2026-11-22",
        "method": (
            "Text-layer banner census (pdftotext cache + page-by-page banner mapping, the pharmacology "
            "convention) + pdfimages raster census per page (zero rasters across all 23 content pages) + "
            "full source read of every page."
        ),
        "frontMatter": "pdf 277 (book 255) = chapter title/opener page (Osler, Angelou, Palahniuk quotes + chapter map)",
        "contentPages": "pdf 278-300 (book 256-278)",
        "backMatter": "none — pdf 300 (book 278) closes both the subsection and the chapter; pdf 301 opens Cardiovascular",
        "faGroups": [
            {"group": "Epidemiology and Biostatistics", "pdfPages": [278, 290], "bookPages": "256–268", "topics": 17},
            {"group": "Ethics", "pdfPages": [290, 292], "bookPages": "268–270", "topics": 3},
            {"group": "Communication Skills", "pdfPages": [293, 297], "bookPages": "271–275", "topics": 4},
            {"group": "Healthcare Delivery", "pdfPages": [298, 300], "bookPages": "276–278", "topics": 3},
        ],
    },
    "visualPlan": {
        "textbookVisualsIdentified": None,
        "rightsPosture": (
            "All First Aid 2026 artwork is COPYRIGHTED_NO_REPUBLISH — no republication; the chapter's zero "
            "raster images mean every figure is vector line art redrawn as ORIGINAL_KYP_REDRAW and every "
            "table adapted as ORIGINAL KYP ADAPTATION, or a documented omission."
        ),
        "method": "per-topic visual inventory authored at production time (gen_pubhN_json.py pattern, the pharmacology convention)",
    },
    "topics": topics,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(chapter, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
print(f"wrote {OUT} — {len(topics)} topics, {sum(len(t['sourcePages']['pdfPages']) for t in topics)} page-claims")
for t in topics:
    print(f"  {t['sourcePages']['pdfPages']}  {t['topicId']}")
