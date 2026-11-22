import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 3, topic pubh25. Source: FULL pdf page 298 / book 276
// (Part 1), the FIRST page of the HEALTHCARE DELIVERY subsection (the banner's
// first page; the banner "▶ PUBLIC HEALTH SCIENCES—HEALTHCARE DELIVERY" prints
// TWICE — running header + in-body ribbon). The topic owns the WHOLE page, which
// carries TWO blocks: (1) "Disease prevention" — a PYRAMID TABLE: a triangle of
// four stacked bands, APEX = Quaternary (top, narrowest), BASE = Primary (bottom,
// widest — the susceptible general population), with TWO boxed column headers —
// "Target population" (over the LEFT flank, next to one person figure icon per
// level, shading graduated down the pyramid) and "Goals" (over the RIGHT callout
// blocks, each reached by a block arrow shaded to match its band). Each band
// carries the level name (first letter printed in RED) plus an IN-BAND action
// line; the right "Goals" callouts print a "Prevent …" phrase plus an italic gray
// "eg," example. Printed top-to-bottom (apex → base): Quaternary — Symptomatic
// patients, but overmedicalized or not treatable; Quit unnecessary medical
// interventions; Prevent overtreatment and iatrogenic harm; eg, discontinuing
// sulfonylurea after multiple hypoglycemic events. Tertiary — Clinical
// (symptomatic); Treat symptomatic disease; Prevent clinical disease progression
// and sequelae associated morbidity, mortality, and disability; eg, hemoglobin
// A1c monitoring to guide treatment and prevent complications. Secondary —
// Subclinical (asymptomatic); Screen for early detection and treatment of
// presymptomatic disease + "Prevent symptom onset" printed INSIDE the band too;
// Prevent symptom onset; eg, glucose screening for type 2 diabetes mellitus.
// Primary — Susceptible/general population; Prevent disease onset by reducing
// risks or increasing immunity; Prevent disease onset; eg, healthy diet and
// exercise to prevent diabetes. (2) "Chemoprophylaxis and post-exposure
// prophylaxis" — a 2-column table (PROPHYLAXIS / NOTES), SIX rows in printed
// order: HIV exposure (sexual, occupational); Neisseria meningitidis (close
// contact); Rabies exposure (animal bite); Hepatitis B virus exposure; Malaria
// (travel prophylaxis); Sexual exposure—sexually transmitted infection
// prevention — every cell carried verbatim in the note's second table block.
// CENSUS (pdfimages): ZERO raster images — both blocks are vector + text (the
// pyramid's bands, person icons, and block arrows are vector furniture). Both
// blocks are ORIGINAL KYP ADAPTATIONS (the registry visual re-lays the pyramid
// as a KYP stacked pyramid with flanking columns and the prophylaxis table as
// protocol cards with timing bands — the layout is KYP's, every printed label is
// preserved; the chapter census itself calls this page "Pure text/table →
// ORIGINAL KYP ADAPTATION"). VLM AVAILABLE this session (glm-4.6v at 120dpi,
// TWO passes: ONE full-page pass + ONE 2x-zoom pyramid adjudication pass,
// staging-pubh25/vlm-census.txt), confirming: the pyramid's apex = Quaternary
// and base = Primary; the two boxed headers' positions ("Target population"
// over the left flank, "Goals" over the right callout blocks); the graduated
// band shading (dark teal apex → pale mint base, white text on the top two
// bands); the level-name first letters in red; ONE person figure per level on
// the left; block arrows of graduated shade; the "eg," examples in smaller
// italic gray; exactly SIX prophylaxis rows in the printed order (none missing
// or extra); the Rx publisher mark at bottom right; NO margin mnemonics, NO
// asterisk footnotes, NO images, NO red mnemonic sentences anywhere (so all
// four mnemonics below are KYP originals, marked as such). PRINTED-TEXT QUIRKS
// carried + documented: (1) "SEC TION II" header-space extraction artifact
// (known, carried as-is); (2) the subsection banner prints TWICE (running
// header + in-body ribbon); (3) the pyramid's cells extract in JUMBLED order —
// the Quaternary row extracts first and the Primary row last (apex-to-base
// geometry), and within the Tertiary row the right-callout text extracts
// BEFORE the band name ("Prevent clinical disease progression…" / "eg,
// hemoglobin A1c…" / "Tertiary" / "Clinical (symptomatic)" / "Treat symptomatic
// disease") — the evidence ranges quote the raw extraction order and the
// band/callout assignment is pinned by pdftotext -bbox coordinates + the two
// VLM passes; (4) the "↓" down arrows in the Sexual exposure NOTES cell carry
// stray C1 control bytes (\x90) in the raw text layer (stripped by the gen
// script's normalizer; carried as ↓); (5) "A1c" extracts with the "1c" as a
// separate subscript word in the bbox layer (the raw line reads "hemoglobin
// A1c monitoring to…"); (6) printed symbols carried verbatim: "× 28 days"
// (multiplication sign), "≤72 hr", "±" (HBV vaccine ± Hepatitis B immune
// globulin), the em-dash in "Sexual exposure—sexually transmitted infection
// prevention", "q3-6 mo", and ">70%" / "~50%"; (7) Neisseria meningitidis
// prints with an italic species name in the left column. ADJUDICATIONS
// (documented in the manifest too): (A) the batch brief assigned the stage
// descriptor "prevent symptom onset" to the PRIMARY row — the PRINT gives
// Primary the right-side goal callout "Prevent disease onset" (bbox: x488,
// above "eg, healthy diet and exercise to prevent diabetes"), while "Prevent
// symptom onset" prints TWICE, BOTH times in the SECONDARY row (once INSIDE the
// band as the second line under "Screen for early detection and treatment of
// presymptomatic disease", once in the right callout above "eg, glucose
// screening for type 2 diabetes mellitus") — brief corrected to print (bbox +
// both VLM passes agree); (B) the brief described the columns as "Target
// population / Goals / (stage descriptors) / examples" — the PRINT has exactly
// TWO headed columns ("Target population" over the left flank, "Goals" over the
// right callouts); the level names and the in-band action lines sit INSIDE the
// bands with no header of their own, and the "eg," examples print inside the
// Goals callouts (not a separate column); (C) the brief listed the rows
// Primary → Quaternary (logical base-to-apex order); the PRINTED order is
// apex-to-base (Quaternary first) and the note's verbatim table block carries
// the PRINTED order, with the logical ladder (Primary → Quaternary) carried in
// the decoder list block; (D) the brief's six prophylaxis rows matched the
// print exactly (all regimens, timings, and the effectiveness data) — no
// correction needed. PROVENANCE SPLIT: verbatim = every cell of both tables
// (levels, target populations, in-band actions, "Prevent …" goals, all six
// "eg," examples, all six prophylaxis regimens and notes); FA-own = the
// pyramid-as-natural-history device, the graduated band/icon/arrow furniture,
// the diabetes example thread (all four example cells are diabetes actions);
// KYP-original = the funnel reading of the pyramid (the population narrows as
// disease advances: susceptible → subclinical → clinical → overmedicalized),
// the P-S-T-Q action ladder, the three timing patterns (the ≤72-hr window, the
// scheduled series, the before-and-after travel bracket), the exam layer, and
// all four mnemonics — every teaching generalization beyond the printed page is
// flagged as KYP context. DrugCards: the page PRINTS drug regimens, so FIVE
// DrugCards are included (the HIV PEP triplet, the meningococcal trio, the
// rabies vaccine + immune globulin pair, atovaquone-proguanil, and doxycycline)
// — the printed regimen/timing lines are the source for each card's USES; the
// mechanism/adverse fields beyond the printed lines are KYP context from
// general pharmacology and are flagged as such in the manifest notes. The next
// page (pdf 299) continues Healthcare Delivery (insurance plans and payment
// models — a separate topic).

export const diseasePreventionProphylaxis: KypUsMLENote = {
  id: "disease-prevention-prophylaxis",
  title: "Disease Prevention Levels and Prophylaxis",
  subtitle:
    "The Healthcare Delivery subsection opens with a page that asks two questions in sequence: WHERE is the patient on the natural history of disease, and WHAT do you give after an exposure? The first block answers with a pyramid: the susceptible general population forms the base, and the population narrows as disease advances — subclinical (asymptomatic), then clinical (symptomatic), then, at the apex, patients who are symptomatic but overmedicalized or not treatable. Each band names a prevention level with its target population, its goal, and a diabetes example: Primary prevention keeps the susceptible healthy (prevent disease onset by reducing risks or increasing immunity — eg, healthy diet and exercise to prevent diabetes); Secondary prevention screens the silent (screen for early detection and treatment of presymptomatic disease — eg, glucose screening for type 2 diabetes mellitus); Tertiary prevention treats the symptomatic (prevent clinical disease progression and sequelae — eg, hemoglobin A1c monitoring to guide treatment and prevent complications); and Quaternary prevention — the newest and most examinable level — quits unnecessary medicine (prevent overtreatment and iatrogenic harm — eg, discontinuing sulfonylurea after multiple hypoglycemic events). One disease, four levels, one page. The second block answers the exposure question with six prophylaxis protocols: HIV exposure gets tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir) for 28 days started ≤72 hr after exposure; meningococcal close contacts get rifampin, ciprofloxacin, or ceftriaxone; a rabies bite gets wound cleaning + rabies vaccine + rabies immune globulin on a 0, 3, 7, 14 day schedule; HBV exposure gets vaccine ± immune globulin guided by the source's serology; malaria travel gets atovaquone-proguanil, doxycycline, or mefloquine started before travel and continued post-return; and sexual exposure gets doxycycline ≤72 hr after sex to prevent syphilis, chlamydia, and gonorrhea. Two timing grammars run through the table: the 72-hour window and the scheduled series — learn them and the six rows memorize themselves.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Healthcare Delivery",
  pilotCategory:
    "Public Health Sciences — Healthcare Delivery: the four disease-prevention levels as a natural-history pyramid (Primary/Secondary/Tertiary/Quaternary with target populations, goals, and the four diabetes examples) and the six chemoprophylaxis/post-exposure prophylaxis protocols with their regimens, timing windows, and effectiveness data.",
  difficulty: 2,
  readTime: 7,
  sourceRef:
    "First Aid 2026, Part 1 pp. 276–276 (Healthcare Delivery: Disease prevention; Chemoprophylaxis and post-exposure prophylaxis)",
  tags: [
    "disease prevention",
    "primary prevention",
    "secondary prevention",
    "tertiary prevention",
    "quaternary prevention",
    "prevention pyramid",
    "susceptible population",
    "subclinical disease",
    "screening",
    "overtreatment",
    "iatrogenic harm",
    "chemoprophylaxis",
    "post-exposure prophylaxis",
    "HIV post-exposure prophylaxis",
    "tenofovir",
    "emtricitabine",
    "raltegravir",
    "dolutegravir",
    "Neisseria meningitidis prophylaxis",
    "rifampin",
    "ciprofloxacin",
    "ceftriaxone",
    "rabies prophylaxis",
    "rabies vaccine",
    "rabies immune globulin",
    "hepatitis B prophylaxis",
    "HBV vaccine",
    "hepatitis B immune globulin",
    "malaria prophylaxis",
    "atovaquone-proguanil",
    "doxycycline",
    "mefloquine",
    "sexually transmitted infection prevention",
    "diabetes mellitus",
    "hemoglobin A1c",
    "sulfonylurea",
    "healthcare delivery",
  ],
  core: {
    what:
      "One printed page, carried whole. BLOCK 1 — the “Disease prevention” PYRAMID TABLE: a triangle of four stacked bands (apex = Quaternary, base = Primary — the susceptible general population), with two boxed column headers — “Target population” (left flank, one person figure icon per level) and “Goals” (right callouts, reached by block arrows shaded to match the bands). Printed apex-to-base, every band carries: the level name + an in-band action line, the target population on the left, and a right-side Goals callout (“Prevent …” + italic gray “eg,” example): QUATERNARY — Symptomatic patients, but overmedicalized or not treatable; Quit unnecessary medical interventions; Prevent overtreatment and iatrogenic harm; eg, discontinuing sulfonylurea after multiple hypoglycemic events. TERTIARY — Clinical (symptomatic); Treat symptomatic disease; Prevent clinical disease progression and sequelae associated morbidity, mortality, and disability; eg, hemoglobin A1c monitoring to guide treatment and prevent complications. SECONDARY — Subclinical (asymptomatic); Screen for early detection and treatment of presymptomatic disease (with “Prevent symptom onset” printed inside the band as a second line); Prevent symptom onset; eg, glucose screening for type 2 diabetes mellitus. PRIMARY — Susceptible/general population; Prevent disease onset by reducing risks or increasing immunity; Prevent disease onset; eg, healthy diet and exercise to prevent diabetes. BLOCK 2 — the “Chemoprophylaxis and post-exposure prophylaxis” table, columns PROPHYLAXIS / NOTES, SIX rows in printed order: HIV exposure (sexual, occupational) — tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir) × 28 days; start ≤72 hr after exposure; test HIV at baseline and 6 wk, 3 mo, 6 mo. Neisseria meningitidis (close contact) — rifampin, ciprofloxacin, or ceftriaxone; household or close exposure. Rabies exposure (animal bite) — wound cleaning + rabies vaccine + rabies immune globulin (if not previously immunized); 0, 3, 7, 14 day schedule. Hepatitis B virus exposure — HBV vaccine ± Hepatitis B immune globulin (if source positive and unvaccinated); follow HBV serology. Malaria (travel prophylaxis) — atovaquone-proguanil, doxycycline, or mefloquine; start before travel; continue post-return. Sexual exposure—sexually transmitted infection prevention — doxycycline; give ≤72 hr after sex to prevent syphilis, chlamydia, and gonorrhea in patients with recent bacterial STI; use with regular STI/HIV testing, pre-exposure prophylaxis, vaccines (HPV, Hepatitis A/B), and counseling; effectiveness: ↓ syphilis/chlamydia >70%, ↓ gonorrhea ~50%; monitor q3-6 mo.",
    why:
      "This page opens the Healthcare Delivery subsection because prevention is the unit of every downstream delivery question: a health system's job is to move people DOWN the funnel — keep the susceptible well, catch disease while it is silent, treat it before it progresses, and stop treating when treatment itself becomes the disease. The pyramid is not four arbitrary labels; it is the natural history of disease drawn as a population funnel. The base is everyone (Susceptible/general population — the widest band, because everyone starts there); the bands narrow as disease advances (Subclinical (asymptomatic) → Clinical (symptomatic) → the overmedicalized apex), and each band names the prevention level that acts there: Primary prevents disease onset by reducing risks or increasing immunity; Secondary screens for early detection and treatment of presymptomatic disease; Tertiary treats symptomatic disease; Quaternary — the level the exam loves because it is counterintuitive — quits unnecessary medical interventions to prevent overtreatment and iatrogenic harm. First Aid reinforces the ladder with one disease through all four example cells: diabetes (diet and exercise → glucose screening → hemoglobin A1c monitoring → discontinuing sulfonylurea after hypoglycemia). The second block then hands the clinician six prophylaxis protocols, and their power is in the timing grammar: two regimens live inside a ≤72-hour window (HIV PEP and doxycycline STI PEP), two are scheduled series or serology-guided (rabies 0, 3, 7, 14 days; HBV vaccine ± immune globulin with serology follow-up), one brackets a trip (malaria — start before travel, continue post-return), and one is exposure-epidemiology-driven (meningococcal prophylaxis for household or close exposure). Regimen, window, duration, follow-up — the four fields every exposure vignette tests.",
    keyIdea:
      "Route any prevention or prophylaxis stem in four moves. MOVE 1 — PLACE THE PATIENT ON THE FUNNEL: no disease yet (susceptible/general population) → PRIMARY (prevent disease onset by reducing risks or increasing immunity; eg, healthy diet and exercise to prevent diabetes). Disease present but SILENT (subclinical, asymptomatic) → SECONDARY (screen for early detection and treatment of presymptomatic disease; prevent symptom onset; eg, glucose screening for type 2 diabetes mellitus). Disease SYMPTOMATIC (clinical) → TERTIARY (treat symptomatic disease; prevent clinical disease progression and sequelae — the associated morbidity, mortality, and disability; eg, hemoglobin A1c monitoring to guide treatment and prevent complications). Treatment itself now the problem (symptomatic but overmedicalized or not treatable) → QUATERNARY (quit unnecessary medical interventions; prevent overtreatment and iatrogenic harm; eg, discontinuing sulfonylurea after multiple hypoglycemic events). MOVE 2 — READ THE ACTION VERB: the four in-band action lines spell the ladder — PREVENT (onset), SCREEN (presymptomatic), TREAT (symptomatic), QUIT (unnecessary). MOVE 3 — FOR EXPOSURE STEMS, MATCH THE EXPOSURE TO THE REGIMEN: sexual/occupational HIV exposure → tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir) × 28 days; meningococcal household/close contact → rifampin, ciprofloxacin, or ceftriaxone; animal bite → wound cleaning + rabies vaccine + rabies immune globulin (if not previously immunized); HBV exposure → HBV vaccine ± Hepatitis B immune globulin (if source positive and unvaccinated) with serology follow-up; malaria travel → atovaquone-proguanil, doxycycline, or mefloquine; sexual exposure (STI prevention) → doxycycline. MOVE 4 — CHECK THE TIMING: the ≤72-hour window (HIV PEP start; doxycycline ≤72 hr after sex), the scheduled series (rabies days 0, 3, 7, 14), the serology follow-up (HIV testing at baseline, 6 wk, 3 mo, 6 mo; follow HBV serology; monitor q3-6 mo on doxycycline STI PEP), and the travel bracket (start before travel; continue post-return). Stage sets the level; exposure sets the regimen; the clock sets the correctness.",
  },
  mechanisms: [
    {
      id: "prevention-level-ladder",
      title:
        "The natural-history funnel: how the pyramid's four bands generate the four prevention levels",
      context:
        "The printed Disease prevention pyramid (book 276): four stacked bands, apex = Quaternary, base = Primary",
      flow: {
        nodes: [
          {
            id: "funnel",
            label: "THE POPULATION FUNNEL — everyone starts susceptible",
            sublabel:
              "Input — the pyramid's geometry IS the epidemiology: the base is the widest band because the Susceptible/general population is everyone; each band above is narrower because fewer people sit there. Read bottom-to-top, the bands are the natural history of disease — the population narrows as disease advances (KYP reading of the printed shape).",
            variant: "input",
          },
          {
            id: "primary",
            label: "BASE — SUSCEPTIBLE / GENERAL POPULATION → Primary prevention",
            sublabel:
              "Process — the patient has NO disease yet. In-band action: “Prevent disease onset by reducing risks or increasing immunity.” Goals callout: “Prevent disease onset” — eg, healthy diet and exercise to prevent diabetes. Risk reduction (diet, exercise, seat belts, smoking cessation) and immunization (vaccines — increasing immunity) both live here; the target is the whole population, which is why this is the widest band.",
            variant: "process",
          },
          {
            id: "secondary",
            label: "SECOND BAND — SUBCLINICAL (ASYMPTOMATIC) → Secondary prevention",
            sublabel:
              "Process — disease is PRESENT but SILENT. In-band action: “Screen for early detection and treatment of presymptomatic disease,” with “Prevent symptom onset” printed inside the band AND as the right-side Goals callout (the phrase prints twice — the print's own emphasis). Example: “eg, glucose screening for type 2 diabetes mellitus.” Screening tests are the instrument: the patient feels well, so only an active test can pull the disease forward in time — before symptoms, when treatment changes the trajectory.",
            variant: "process",
          },
          {
            id: "tertiary",
            label: "THIRD BAND — CLINICAL (SYMPTOMATIC) → Tertiary prevention",
            sublabel:
              "Process — the patient is SYMPTOMATIC. In-band action: “Treat symptomatic disease.” Goals callout: “Prevent clinical disease progression and sequelae associated morbidity, mortality, and disability” — the disease exists; the goal is to stop its downstream damage. Example: “eg, hemoglobin A1c monitoring to guide treatment and prevent complications.” Rehabilitation and complication management (KYP context) also live here.",
            variant: "process",
          },
          {
            id: "quaternary",
            label: "APEX — SYMPTOMATIC BUT OVERMEDICALIZED OR NOT TREATABLE → Quaternary prevention",
            sublabel:
              "Process — the narrowest band: patients for whom the problem is now the INTERVENTION itself. In-band action: “Quit unnecessary medical interventions.” Goals callout: “Prevent overtreatment and iatrogenic harm” — eg, discontinuing sulfonylurea after multiple hypoglycemic events. The patient is still symptomatic (that is why this is NOT tertiary), but the treatment has become the harm; the preventive act is SUBTRACTING care (KYP context: deprescribing is the quaternary verb).",
            variant: "process",
          },
          {
            id: "ladder-rule",
            label: "THE RULE — the stage sets the level",
            sublabel:
              "Output — no disease → Primary (prevent onset); silent disease → Secondary (screen, prevent symptom onset); symptomatic disease → Tertiary (treat, prevent progression and sequelae); overmedicalized → Quaternary (quit, prevent overtreatment and iatrogenic harm). The action verbs spell the ladder — PREVENT, SCREEN, TREAT, QUIT — and the four diabetes examples (diet/exercise → glucose screening → A1c monitoring → stopping the sulfonylurea) walk one disease up the whole funnel.",
            variant: "output",
          },
        ],
        edges: [
          { from: "funnel", to: "primary", label: "no disease →" },
          { from: "funnel", to: "secondary", label: "disease present, silent →" },
          { from: "funnel", to: "tertiary", label: "disease symptomatic →" },
          { from: "funnel", to: "quaternary", label: "treatment now the harm →" },
          { from: "primary", to: "ladder-rule", label: "prevent onset" },
          { from: "secondary", to: "ladder-rule", label: "screen, prevent symptom onset" },
          { from: "tertiary", to: "ladder-rule", label: "treat, prevent progression" },
          { from: "quaternary", to: "ladder-rule", label: "quit, prevent overtreatment" },
        ],
      },
    },
    {
      id: "prophylaxis-protocol-logic",
      title:
        "Exposure → regimen → timing → follow-up: how the six prophylaxis protocols are generated",
      context:
        "The printed Chemoprophylaxis and post-exposure prophylaxis table (book 276): six rows, columns PROPHYLAXIS / NOTES",
      flow: {
        nodes: [
          {
            id: "exposure",
            label: "THE EXPOSURE EVENT — six printed scenarios",
            sublabel:
              "Input — every row of the table starts with an exposure: HIV exposure (sexual, occupational); Neisseria meningitidis (close contact); Rabies exposure (animal bite); Hepatitis B virus exposure; Malaria (travel prophylaxis); Sexual exposure—sexually transmitted infection prevention. The exposure is the indexing key: the stem names the exposure, the answer names the regimen.",
            variant: "input",
          },
          {
            id: "hiv",
            label: "HIV EXPOSURE — the 3-drug, 28-day, 72-hour protocol",
            sublabel:
              "Process — “Tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir) × 28 days. Start ≤72 hr after exposure; test HIV at baseline and 6 wk, 3 mo, 6 mo.” Two NRTIs (tenofovir disoproxil fumarate + emtricitabine) plus an integrase inhibitor (raltegravir or dolutegravir) — a full antiretroviral regimen for a fixed 28-day course, started inside a 72-hour window, with a four-point serology follow-up (baseline → 6 weeks → 3 months → 6 months).",
            variant: "process",
          },
          {
            id: "meningitis",
            label: "N. MENINGITIDIS CLOSE CONTACT — any of three drugs, exposure-defined",
            sublabel:
              "Process — “Rifampin, ciprofloxacin, or ceftriaxone. Household or close exposure.” The prophylaxis decision is epidemiologic: household or close exposure qualifies the contact (KYP context: prophylaxis clears carriage and protects the contacts the index case endangered — casual contact does not qualify). Any ONE of the three agents suffices — the exam accepts any, so the stem tests the exposure, not the single drug.",
            variant: "process",
          },
          {
            id: "rabies",
            label: "RABIES BITE — clean, vaccinate, and immunize passively",
            sublabel:
              "Process — “Wound cleaning + rabies vaccine + rabies immune globulin (if not previously immunized). 0, 3, 7, 14 day schedule.” Three components in order: mechanical (wound cleaning), active immunization (the vaccine series on days 0, 3, 7, and 14), and passive immunization (rabies immune globulin for immediate antibody cover — given only if the patient was NOT previously immunized; the previously immunized skip the globulin, KYP context).",
            variant: "process",
          },
          {
            id: "hbv",
            label: "HBV EXPOSURE — vaccine ± immune globulin, guided by the source",
            sublabel:
              "Process — “HBV vaccine ± Hepatitis B immune globulin (if source positive and unvaccinated). Follow HBV serology.” The ± is the logic: the source's status and the exposed person's vaccination status decide whether passive immune globulin joins the vaccine — hence “follow HBV serology” as the monitoring arm (the same vaccine ± globulin grammar as rabies, but serology-steered rather than schedule-steered).",
            variant: "process",
          },
          {
            id: "malaria",
            label: "MALARIA TRAVEL — the before-and-after bracket",
            sublabel:
              "Process — “Atovaquone-proguanil, doxycycline, or mefloquine. Start before travel; continue post-return.” Chemoprophylaxis of malaria is not a post-exposure rescue but a bracket around the exposure window: begin BEFORE entering the endemic area and CONTINUE after returning home (KYP context: the post-return tail covers the parasite's incubating liver and erythrocytic stages — the printed rule is the exam's rule).",
            variant: "process",
          },
          {
            id: "sti",
            label: "SEXUAL EXPOSURE — doxycycline ≤72 hr, a package of measures",
            sublabel:
              "Process — “Doxycycline. Give ≤72 hr after sex to prevent syphilis, chlamydia, and gonorrhea in patients with recent bacterial STI. Use with regular STI/HIV testing, pre-exposure prophylaxis, vaccines (HPV, Hepatitis A/B), and counseling. Effectiveness: ↓ syphilis/chlamydia >70%, ↓ gonorrhea ~50%. Monitor q3-6 mo.” Post-exposure doxycycline is one arm of a package: testing, PrEP, vaccination, and counseling complete it — and the effectiveness data are printed and testable: syphilis and chlamydia fall by more than 70%, gonorrhea only by about 50%.",
            variant: "process",
          },
          {
            id: "timing-rule",
            label: "THE RULE — three timing patterns cover all six rows",
            sublabel:
              "Output — (1) THE ≤72-HOUR WINDOW: HIV PEP and doxycycline STI PEP both start within 72 hours of the exposure (and HIV PEP then runs a fixed 28-day course); (2) THE SCHEDULED/SEROLOGY SERIES: rabies on days 0, 3, 7, 14 and HBV guided by “follow HBV serology,” with HIV's four-point testing (baseline, 6 wk, 3 mo, 6 mo) and doxycycline's q3-6 mo monitoring as the follow-up arms; (3) THE TRAVEL BRACKET: malaria — start before travel, continue post-return. Match the exposure, then check the clock.",
            variant: "output",
          },
        ],
        edges: [
          { from: "exposure", to: "hiv", label: "sexual/occupational →" },
          { from: "exposure", to: "meningitis", label: "household/close contact →" },
          { from: "exposure", to: "rabies", label: "animal bite →" },
          { from: "exposure", to: "hbv", label: "source ± , vaccinated ± →" },
          { from: "exposure", to: "malaria", label: "travel to endemic area →" },
          { from: "exposure", to: "sti", label: "sex, recent bacterial STI →" },
          { from: "hiv", to: "timing-rule", label: "≤72 hr · ×28 days · 4 test points" },
          { from: "meningitis", to: "timing-rule", label: "exposure-defined" },
          { from: "rabies", to: "timing-rule", label: "0 · 3 · 7 · 14 days" },
          { from: "hbv", to: "timing-rule", label: "follow serology" },
          { from: "malaria", to: "timing-rule", label: "before → after" },
          { from: "sti", to: "timing-rule", label: "≤72 hr · monitor q3-6 mo" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "prevention-prophylaxis-map",
      title:
        "The prevention pyramid and the six prophylaxis protocols (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 276's two blocks. TOP — the Disease prevention pyramid re-drawn as a KYP stacked pyramid: four bands from base to apex (Primary / Susceptible-general population → Secondary / Subclinical (asymptomatic) → Tertiary / Clinical (symptomatic) → Quaternary / Symptomatic-but-overmedicalized), each band carrying its level name + in-band action, a person icon + target population on the left flank (under the print's “Target population” boxed header), and its right-side “Prevent …” goal + italic “eg,” example (under the print's “Goals” boxed header) — the Secondary band showing “Prevent symptom onset” printed BOTH in-band and in the callout, exactly as the print has it. BOTTOM — the six chemoprophylaxis/post-exposure prophylaxis rows as protocol cards with KYP timing bands: the two ≤72-hour windows (HIV PEP; doxycycline STI PEP with its ↓ >70% / ~50% effectiveness data), the scheduled series (rabies 0 · 3 · 7 · 14; HBV serology-guided), the close-contact rule (N. meningitidis), and the travel bracket (malaria before-and-after).",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 298 — both blocks are vector + text furniture (the pyramid's graduated bands, one person figure per level on the left, and block arrows shaded to match the bands; VLM-read at 120dpi with a second 2x-zoom adjudication pass, staging-pubh25/vlm-census.txt). The visual is an ORIGINAL KYP ADAPTATION ×2: the pyramid is re-laid as a KYP stacked funnel with flanking columns and the prophylaxis table as timing-banded protocol cards — the artwork and layout are KYP's, every printed label (all four levels with populations, in-band actions, “Prevent …” goals and “eg,” examples; all six regimens and notes) is preserved from the print, and both tables are additionally carried verbatim in the note's table blocks. ADJUDICATION, drawn on the visual exactly as printed: Primary's right-side goal is “Prevent disease onset” and “Prevent symptom onset” prints TWICE, both times in the Secondary row (in-band + callout) — bbox + both VLM passes agree; the batch brief had Primary carrying “prevent symptom onset,” corrected to print.",
    },
    {
      kind: "table",
      title:
        "Book 276 — the printed Disease prevention pyramid, carried verbatim (every printed word, PRINTED apex-to-base order)",
      intro:
        "The page's first block: the pyramid table. The print has TWO boxed column headers — “Target population” (over the left flank, next to one person figure icon per level) and “Goals” (over the right callouts); the level names and the in-band action lines sit INSIDE the bands with no header of their own, and each “eg,” example prints inside its Goals callout in smaller italic gray. The rows below are carried in the PRINTED order — apex to base, Quaternary first — with the in-band action and the right-side Goals callout split into separate columns for readability; the logical ladder (Primary → Quaternary) is unpacked in the decoder list block. The level names print with their first letters in red and the bands graduate from dark teal (apex) to pale mint (base).",
      columns: [
        "LEVEL (PYRAMID BAND)",
        "TARGET POPULATION (left flank)",
        "GOALS — IN-BAND ACTION (inside the band)",
        "GOALS — RIGHT CALLOUT (Prevent … + eg, example)",
      ],
      rows: [
        [
          "Quaternary (apex)",
          "Symptomatic patients, but overmedicalized or not treatable",
          "Quit unnecessary medical interventions",
          "Prevent overtreatment and iatrogenic harm — eg, discontinuing sulfonylurea after multiple hypoglycemic events",
        ],
        [
          "Tertiary",
          "Clinical (symptomatic)",
          "Treat symptomatic disease",
          "Prevent clinical disease progression and sequelae associated morbidity, mortality, and disability — eg, hemoglobin A1c monitoring to guide treatment and prevent complications",
        ],
        [
          "Secondary",
          "Subclinical (asymptomatic)",
          "Screen for early detection and treatment of presymptomatic disease. Prevent symptom onset",
          "Prevent symptom onset — eg, glucose screening for type 2 diabetes mellitus",
        ],
        [
          "Primary (base)",
          "Susceptible/general population",
          "Prevent disease onset by reducing risks or increasing immunity",
          "Prevent disease onset — eg, healthy diet and exercise to prevent diabetes",
        ],
      ],
      caption:
        "Verbatim carry, documented: FOUR levels in PRINTED order — the pyramid prints APEX-UP (Quaternary at the top, narrowest band; Primary at the base, widest — the susceptible general population), and the raw text layer extracts in that same apex-to-base order (the evidence ranges preserve it). “Prevent symptom onset” prints TWICE, both times in the Secondary row — once INSIDE the band as the second line under “Screen for early detection and treatment of presymptomatic disease” and once as the right-side Goals callout above “eg, glucose screening for type 2 diabetes mellitus” (pdftotext -bbox + two VLM passes pin both positions); Primary's right-side callout is “Prevent disease onset” — the batch brief's assignment of “prevent symptom onset” to Primary was corrected to the print. The column split (in-band action vs right callout) is KYP's normalization of the print's geometry; every printed word is preserved. The four “eg,” examples are all diabetes actions — First Aid's own one-disease thread through the whole ladder.",
    },
    {
      kind: "table",
      title:
        "Book 276 — the printed Chemoprophylaxis and post-exposure prophylaxis table, carried verbatim (all six rows, PRINTED order)",
      intro:
        "The page's second block: a 2-column table (PROPHYLAXIS / NOTES) with SIX rows. The left-column condition names print in blue with the species name Neisseria meningitidis in italics; the HIV and Sexual exposure rows carry the two ≤72-hour timing rules, and the Sexual exposure row alone carries the printed effectiveness data (↓ syphilis/chlamydia >70%, ↓ gonorrhea ~50%).",
      columns: ["PROPHYLAXIS", "NOTES"],
      rows: [
        [
          "HIV exposure (sexual, occupational)",
          "Tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir) × 28 days. Start ≤72 hr after exposure; test HIV at baseline and 6 wk, 3 mo, 6 mo.",
        ],
        [
          "Neisseria meningitidis (close contact)",
          "Rifampin, ciprofloxacin, or ceftriaxone. Household or close exposure.",
        ],
        [
          "Rabies exposure (animal bite)",
          "Wound cleaning + rabies vaccine + rabies immune globulin (if not previously immunized). 0, 3, 7, 14 day schedule.",
        ],
        [
          "Hepatitis B virus exposure",
          "HBV vaccine ± Hepatitis B immune globulin (if source positive and unvaccinated). Follow HBV serology.",
        ],
        [
          "Malaria (travel prophylaxis)",
          "Atovaquone-proguanil, doxycycline, or mefloquine. Start before travel; continue post-return.",
        ],
        [
          "Sexual exposure—sexually transmitted infection prevention",
          "Doxycycline. Give ≤72 hr after sex to prevent syphilis, chlamydia, and gonorrhea in patients with recent bacterial STI. Use with regular STI/HIV testing, pre-exposure prophylaxis, vaccines (HPV, Hepatitis A/B), and counseling. Effectiveness: ↓ syphilis/chlamydia >70%, ↓ gonorrhea ~50%. Monitor q3-6 mo.",
        ],
      ],
      caption:
        "Verbatim carry, documented: SIX rows in printed order (VLM-confirmed — none missing or extra). Printed symbols carried exactly: “× 28 days” (multiplication sign), “≤72 hr,” “±” in “HBV vaccine ± Hepatitis B immune globulin” (the print capitalizes “Hepatitis B immune globulin”), the em-dash in “Sexual exposure—sexually transmitted infection prevention,” the ↓ down arrows (which carry stray C1 control bytes in the raw text layer — stripped here), “>70%” / “~50%,” and “q3-6 mo.” The rabies immune globulin and the HBV immune globulin are both conditional — “(if not previously immunized)” and “(if source positive and unvaccinated)” respectively — the two conditions the exam quotes back at you.",
    },
    {
      kind: "list",
      title:
        "The decoder — level → population → goal → example, base to apex (KYP's reading of the pyramid)",
      intro:
        "The four levels in LOGICAL order (base of the pyramid first), each compressed to its exam-decision core. This is the layer to recall when a vignette describes an intervention and asks which prevention level it is.",
      items: [
        {
          lead: "LEVEL 1 — PRIMARY: the susceptible population, before disease exists",
          text: "Target population: Susceptible/general population (the pyramid's base — everyone). In-band action: Prevent disease onset by reducing risks or increasing immunity. Goal callout: Prevent disease onset. Example: eg, healthy diet and exercise to prevent diabetes. Both risk reduction (lifestyle, safety measures) and immunization (the “increasing immunity” arm) count as primary (KYP context: vaccination questions are primary-prevention questions unless the vaccine is being given as PEP — as rabies and HBV are on this very page).",
        },
        {
          lead: "LEVEL 2 — SECONDARY: subclinical disease, found by screening",
          text: "Target population: Subclinical (asymptomatic) — the second band. In-band action: Screen for early detection and treatment of presymptomatic disease, with “Prevent symptom onset” printed inside the band as well. Goal callout: Prevent symptom onset. Example: eg, glucose screening for type 2 diabetes mellitus. The instrument is the screening test: the patient feels well, and the preventive act is pulling the diagnosis forward in time — before symptoms arrive.",
        },
        {
          lead: "LEVEL 3 — TERTIARY: clinical disease, treated to prevent sequelae",
          text: "Target population: Clinical (symptomatic) — the third band. In-band action: Treat symptomatic disease. Goal callout: Prevent clinical disease progression and sequelae associated morbidity, mortality, and disability. Example: eg, hemoglobin A1c monitoring to guide treatment and prevent complications. The disease exists and shows; prevention now means preventing its downstream damage — progression, complications, disability (KYP context: rehabilitation lives here too).",
        },
        {
          lead: "LEVEL 4 — QUATERNARY: the overmedicalized apex — quit",
          text: "Target population: Symptomatic patients, but overmedicalized or not treatable — the apex, the narrowest band. In-band action: Quit unnecessary medical interventions. Goal callout: Prevent overtreatment and iatrogenic harm. Example: eg, discontinuing sulfonylurea after multiple hypoglycemic events. The counterintuitive level: the preventive act is SUBTRACTING treatment, and the harm being prevented is the health system's own (iatrogenic). The patient is still symptomatic — which is exactly why this is quaternary and not tertiary.",
        },
        {
          lead: "THE THREAD — one disease through all four levels",
          text: "All four printed example cells are diabetes actions: healthy diet and exercise to PREVENT diabetes (primary) → glucose SCREENING for type 2 diabetes mellitus (secondary) → hemoglobin A1c MONITORING to guide treatment and prevent complications (tertiary) → DISCONTINUING sulfonylurea after multiple hypoglycemic events (quaternary). First Aid's own running example — one disease walked up the whole funnel (KYP framing of the print's example choices).",
        },
      ],
    },
    {
      kind: "steps",
      title: "Routing any prevention or prophylaxis vignette in three questions",
      intro:
        "The whole page distilled into an ordered reading path — STAGE, REGIMEN, CLOCK — applicable to any prevention-level or post-exposure stem the exam shows.",
      steps: [
        {
          label: "QUESTION 1 — WHERE DOES THE PATIENT SIT ON THE NATURAL-HISTORY FUNNEL?",
          detail:
            "No disease, susceptible/general population → PRIMARY (prevent disease onset by reducing risks or increasing immunity — eg, healthy diet and exercise to prevent diabetes). Disease present but subclinical (asymptomatic) → SECONDARY (screen for early detection and treatment of presymptomatic disease — eg, glucose screening). Clinical (symptomatic) disease → TERTIARY (treat symptomatic disease — eg, hemoglobin A1c monitoring). Symptomatic but overmedicalized or not treatable → QUATERNARY (quit unnecessary medical interventions — eg, discontinuing sulfonylurea after multiple hypoglycemic events).",
        },
        {
          label: "QUESTION 2 — IS THE STEM ASKING FOR A LEVEL OR A REGIMEN?",
          detail:
            "Level questions describe an intervention and ask which prevention level it is — route through Question 1. Regimen questions describe an EXPOSURE (needlestick, animal bite, close contact, travel, sex) and ask what to give — route through the six printed protocols: HIV exposure → tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir); N. meningitidis close contact → rifampin, ciprofloxacin, or ceftriaxone; rabies bite → wound cleaning + rabies vaccine + rabies immune globulin; HBV exposure → HBV vaccine ± Hepatitis B immune globulin; malaria travel → atovaquone-proguanil, doxycycline, or mefloquine; sexual exposure (STI prevention) → doxycycline.",
        },
        {
          label: "QUESTION 3 — CHECK THE CLOCK BEFORE ANSWERING",
          detail:
            "The ≤72-HOUR WINDOW: HIV PEP starts ≤72 hr after exposure (then × 28 days); doxycycline STI PEP is given ≤72 hr after sex. The SCHEDULED SERIES: rabies vaccine on days 0, 3, 7, and 14; HIV testing at baseline, 6 wk, 3 mo, and 6 mo; doxycycline STI PEP monitored q3-6 mo; HBV guided by “follow HBV serology.” The TRAVEL BRACKET: malaria prophylaxis starts BEFORE travel and CONTINUES post-return. An answer that is the right drug at the wrong time is a wrong answer — and the exam's favorite distractor.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "The two ≤72-hour regimens — HIV PEP vs doxycycline STI PEP, the exam's favorite timing collision",
      intro:
        "Two rows of the prophylaxis table share the 72-hour window and nothing else. Both appear in the same option lists, so the regimen, duration, target, and monitoring are the discriminators.",
      columns: [
        "HIV exposure (sexual, occupational) — the 28-day PEP",
        "Sexual exposure — the doxycycline STI PEP",
      ],
      rows: [
        {
          label: "Regimen",
          a: "Tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir) — a three-drug antiretroviral regimen (2 NRTIs + an integrase inhibitor)",
          b: "Doxycycline — a single tetracycline-class antibiotic",
        },
        {
          label: "Timing and duration",
          a: "Start ≤72 hr after exposure; the course runs × 28 days — the window opens the therapy, the fixed duration completes it",
          b: "Give ≤72 hr after sex — the same window, but the printed rule is the window itself (a short course, not a 28-day regimen)",
        },
        {
          label: "What it prevents",
          a: "HIV infection taking hold after a sexual or occupational exposure (eg, a needlestick)",
          b: "Syphilis, chlamydia, and gonorrhea — and only in patients with a recent bacterial STI",
        },
        {
          label: "The package around it",
          a: "Test HIV at baseline, 6 wk, 3 mo, and 6 mo — a four-point serology follow-up",
          b: "Use with regular STI/HIV testing, pre-exposure prophylaxis, vaccines (HPV, Hepatitis A/B), and counseling; monitor q3-6 mo",
        },
        {
          label: "The printed effectiveness data",
          a: "None printed on this page for HIV PEP (the row prints regimen, window, and testing only)",
          b: "Effectiveness: ↓ syphilis/chlamydia >70%, ↓ gonorrhea ~50% — the only effectiveness numbers on the page, and a favorite stem detail",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — three stem shapes and one subtraction twist",
      body:
        "SHAPE 1 — NAME THE LEVEL: the stem describes an intervention (diet and exercise counseling, a screening colonoscopy or glucose test, ACE inhibitor after MI, discontinuing a hypoglycemia-causing sulfonylurea) and asks which prevention level — route through the funnel: no disease → primary; silent disease → secondary; symptomatic disease → tertiary; the intervention itself now harmful → quaternary. SHAPE 2 — MATCH THE REGIMEN: the stem names the exposure (occupational needlestick from an HIV-positive source; a bite from a bat; a college dormmate of a meningococcal case; a safari to a malaria-endemic country) and the options are the six rows' regimens — the exposure IS the answer key. SHAPE 3 — CHECK THE CLOCK: options differ only in timing (start now vs wait for the source's serology; ≤72 hr vs ≤2 wk; continue post-return vs stop at the border) — the printed windows (≤72 hr for HIV PEP and doxycycline STI PEP; rabies days 0, 3, 7, 14; malaria before-and-after) decide. THE SUBTRACTION TWIST: quaternary prevention is the level students forget because it is the only one that REMOVES an intervention — a vignette where the right answer is stopping a drug (discontinuing sulfonylurea after multiple hypoglycemic events) is pointing at the pyramid's apex, not at noncompliance.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "The mnemonic ledger — all four are KYP originals (the page prints none of its own)",
      body:
        "The VLM census (two passes, staging-pubh25/vlm-census.txt) found NO mnemonic sentence printed anywhere on pdf 298 — no red in-cell hooks, no margin notes — so every mnemonic below is a KYP ORIGINAL, marked as such: (1) “PRIMARY PREVENTS, SECONDARY SCREENS, TERTIARY TREATS, QUATERNARY QUITS” — the four in-band action lines' first verbs, one per level, in ladder order. (2) “THE FUNNEL: SUSCEPTIBLE → SUBCLINICAL → CLINICAL → OVERMEDICALIZED” — the pyramid read base-to-apex: the population narrows as disease advances, and each band is a prevention level's catchment. (3) “72 BEFORE 28” — the HIV PEP clock: start ≤72 hr after exposure, then 28 days of tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir), with testing at baseline, 6 wk, 3 mo, 6 mo (and the doxycycline STI PEP shares the same 72-hour door). (4) “0-3-7-14” — the rabies vaccine days, paired with “clean, vaccinate, immunize” (wound cleaning + vaccine + immune globulin if not previously immunized). The doxycycline effectiveness numbers (>70% syphilis/chlamydia, ~50% gonorrhea) are best memorized as “the bacterium without a cell wall escapes half the time” — no cell wall, no tetracycline target, weaker effect (KYP heuristic, not printed).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The page's clinical anchors — one disease up the funnel, and four prophylaxis situations",
      intro:
        "First Aid anchors the prevention ladder with a single disease and the prophylaxis table with six concrete exposures; these are the clinical hooks every vignette hangs on.",
      items: [
        {
          lead: "THE DIABETES THREAD — one disease through all four levels",
          text: "Primary: healthy diet and exercise to prevent diabetes (the susceptible population, no disease yet). Secondary: glucose screening for type 2 diabetes mellitus (subclinical, asymptomatic — the screen catches it before symptoms). Tertiary: hemoglobin A1c monitoring to guide treatment and prevent complications (clinical disease, treated to prevent progression and sequelae — the associated morbidity, mortality, and disability). Quaternary: discontinuing sulfonylurea after multiple hypoglycemic events (the symptomatic, overmedicalized patient — the treatment has become the harm). Any diabetes-prevention vignette maps onto exactly one of these four cells.",
        },
        {
          lead: "THE 72-HOUR CLUB — HIV PEP and doxycycline STI PEP",
          text: "HIV exposure (sexual, occupational): tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir) × 28 days, started ≤72 hr after exposure, with HIV testing at baseline and 6 wk, 3 mo, 6 mo. Sexual exposure (STI prevention): doxycycline ≤72 hr after sex to prevent syphilis, chlamydia, and gonorrhea in patients with recent bacterial STI — packaged with regular STI/HIV testing, pre-exposure prophylaxis, vaccines (HPV, Hepatitis A/B), and counseling, monitoring q3-6 mo, with printed effectiveness of ↓ syphilis/chlamydia >70% and ↓ gonorrhea ~50%.",
        },
        {
          lead: "VACCINE ± IMMUNE GLOBULIN — the rabies and HBV grammar",
          text: "Rabies exposure (animal bite): wound cleaning + rabies vaccine + rabies immune globulin (if not previously immunized) on the 0, 3, 7, 14 day schedule — active and passive immunization side by side, the globulin covering the window before the vaccine induces antibody. Hepatitis B virus exposure: HBV vaccine ± Hepatitis B immune globulin (if source positive and unvaccinated), then follow HBV serology — the same active ± passive grammar, steered by the source's status and the exposed person's vaccination status rather than by a fixed schedule.",
        },
        {
          lead: "CLOSE CONTACTS AND TRAVELERS — the epidemiologic triggers",
          text: "Neisseria meningitidis (close contact): rifampin, ciprofloxacin, or ceftriaxone for household or close exposure — the qualifying exposure is epidemiologic (KYP context: prophylaxis of close contacts protects the circle the index case endangered). Malaria (travel prophylaxis): atovaquone-proguanil, doxycycline, or mefloquine — start before travel; continue post-return: the drug bracket must outlast the mosquito exposure, not merely coincide with it.",
        },
      ],
    },
  ],
  drugs: [
    {
      drug: "Tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir)",
      klass: "HIV post-exposure prophylaxis — 2 NRTIs + an integrase inhibitor",
      target:
        "HIV reverse transcriptase (tenofovir, emtricitabine) and HIV integrase (raltegravir, dolutegravir)",
      mechanism:
        "Tenofovir disoproxil fumarate and emtricitabine are nucleos(t)ide reverse-transcriptase inhibitors that terminate the proviral DNA chain; raltegravir or dolutegravir blocks HIV integrase from inserting proviral DNA into the host genome — together blocking establishment of infection after an exposure (KYP mechanism context; the page prints the regimen, window, and testing only)",
      effect:
        "Prevents HIV infection from taking hold after a sexual or occupational exposure",
      uses:
        "HIV exposure (sexual, occupational) — × 28 days; start ≤72 hr after exposure; test HIV at baseline and 6 wk, 3 mo, 6 mo (the printed row)",
      adverse:
        "NRTI/INSTI class toxicities — GI upset, headache, renal tubular effects with tenofovir (KYP context, not printed on this page)",
      clue:
        "The needlestick vignette: three drugs, 28 days, ≤72 hr — “72 before 28”",
    },
    {
      drug: "Rifampin, ciprofloxacin, or ceftriaxone",
      klass: "Meningococcal post-exposure prophylaxis — any one of three classes",
      target:
        "Rifampin: DNA-dependent RNA polymerase; ciprofloxacin: DNA gyrase/topoisomerase; ceftriaxone: bacterial cell wall (peptidoglycan synthesis)",
      mechanism:
        "Three independent bactericidal routes that eradicate nasopharyngeal carriage of N. meningitidis in exposed contacts (KYP mechanism context; the page prints the trio and the exposure rule only)",
      effect:
        "Clears meningococcal carriage and prevents invasive disease in exposed contacts",
      uses:
        "Neisseria meningitidis (close contact) — household or close exposure (the printed row: any one of the three)",
      adverse:
        "Rifampin: orange body fluids, CYP450 induction; ciprofloxacin: tendon pain/rupture, QT prolongation; ceftriaxone: hypersensitivity, biliary sludging (KYP context, not printed)",
      clue:
        "The dormmate/household-contact stem — the qualifying exposure is “household or close”",
    },
    {
      drug: "Rabies vaccine + rabies immune globulin",
      klass: "Rabies post-exposure prophylaxis — active + passive immunization",
      target:
        "Rabies virus antigens (vaccine → host antibody response) and preformed anti-rabies antibodies (immune globulin)",
      mechanism:
        "The inactivated vaccine drives active immunity over the 0, 3, 7, 14 day series, while the immune globulin supplies immediate passive antibody at the wound — active plus passive, the globulin only “if not previously immunized” (the printed conditional)",
      effect:
        "Prevents rabies encephalitis after an animal-bite exposure — universally fatal once symptomatic, so prophylaxis IS the treatment",
      uses:
        "Rabies exposure (animal bite) — wound cleaning + rabies vaccine + rabies immune globulin (if not previously immunized); 0, 3, 7, 14 day schedule (the printed row)",
      adverse:
        "Local injection-site reactions, mild systemic symptoms (KYP context, not printed)",
      clue:
        "The bat/dog-bite stem: “clean, vaccinate, immunize” on days 0-3-7-14",
    },
    {
      drug: "Atovaquone-proguanil",
      klass: "Malaria chemoprophylaxis — combination antimalarial (with doxycycline and mefloquine as the printed alternatives)",
      target:
        "Parasite mitochondrial electron transport (atovaquone, a cytochrome bc1 inhibitor) + dihydrofolate reductase (proguanil)",
      mechanism:
        "Atovaquone collapses Plasmodium mitochondrial electron transport while proguanil's metabolite inhibits parasite DHFR — synergistic blood-stage killing (KYP mechanism context; the page prints the drug list and the travel bracket only)",
      effect:
        "Prevents clinical malaria during and after travel to an endemic area",
      uses:
        "Malaria (travel prophylaxis) — start before travel; continue post-return (the printed row, with doxycycline or mefloquine as alternatives)",
      adverse:
        "GI upset, headache, rash; generally the best-tolerated of the three printed options (KYP context, not printed)",
      clue:
        "The pre-travel clinic stem — the before-and-after bracket",
    },
    {
      drug: "Doxycycline",
      klass: "Tetracycline — STI post-exposure prophylaxis (and a malaria prophylaxis alternative)",
      target: "Bacterial 30S ribosomal subunit",
      mechanism:
        "Binds the 30S subunit, blocking aminoacyl-tRNA entry — bacteriostatic against chlamydia and syphilis and partially effective against gonorrhea (KYP mechanism context; the page prints the indication, window, and effectiveness only)",
      effect:
        "Post-exposure prevention of bacterial STIs: ↓ syphilis/chlamydia >70%, ↓ gonorrhea ~50% (the printed effectiveness data)",
      uses:
        "Sexual exposure — give ≤72 hr after sex to prevent syphilis, chlamydia, and gonorrhea in patients with recent bacterial STI; use with regular STI/HIV testing, pre-exposure prophylaxis, vaccines (HPV, Hepatitis A/B), and counseling; monitor q3-6 mo (the printed row); also one of the three malaria travel options",
      adverse:
        "Photosensitivity, GI upset, pill esophagitis; avoid in pregnancy and children <8 yr (teeth/bone) (KYP context, not printed)",
      clue:
        "The ≤72-hr-after-sex stem with the >70% / ~50% effectiveness numbers",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 26-year-old man with no medical history and a normal fasting glucose asks how to avoid developing type 2 diabetes mellitus like his father; the physician prescribes a healthy diet and regular exercise.",
        discriminator:
          "Susceptible patient, no disease — the intervention reduces risk before disease exists; the printed primary example itself",
        concept: "Primary prevention",
        answer:
          "Primary prevention — target population Susceptible/general population; “Prevent disease onset by reducing risks or increasing immunity”; “eg, healthy diet and exercise to prevent diabetes.”",
      },
      {
        stem: "An overweight 44-year-old woman with no symptoms has a hemoglobin A1c of 6.2% found on screening labs ordered at her annual visit; she is counseled and started on lifestyle modification before any symptoms have developed.",
        discriminator:
          "Disease present but subclinical (asymptomatic) — the screen detected presymptomatic disease; “prevent symptom onset”",
        concept: "Secondary prevention",
        answer:
          "Secondary prevention — target population Subclinical (asymptomatic); “Screen for early detection and treatment of presymptomatic disease”; “eg, glucose screening for type 2 diabetes mellitus.”",
      },
      {
        stem: "An 81-year-old woman with type 2 diabetes treated with a sulfonylurea has been hospitalized three times this year for hypoglycemia; at a medication review her physician discontinues the sulfonylurea.",
        discriminator:
          "The intervention itself has become the harm — the preventive act is SUBTRACTING treatment; the printed quaternary example itself",
        concept: "Quaternary prevention",
        answer:
          "Quaternary prevention — target population “Symptomatic patients, but overmedicalized or not treatable”; “Quit unnecessary medical interventions”; “Prevent overtreatment and iatrogenic harm”; “eg, discontinuing sulfonylurea after multiple hypoglycemic events.”",
      },
      {
        stem: "A nurse sustains a deep needlestick injury from a patient with known HIV infection. The source's regimen is confirmed, and the nurse is seen 4 hours after the injury.",
        discriminator:
          "Sexual/occupational HIV exposure inside the 72-hour window — the regimen, duration, and follow-up are all printed",
        concept: "HIV post-exposure prophylaxis",
        answer:
          "Tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir) × 28 days, started ≤72 hr after exposure, with HIV testing at baseline and 6 wk, 3 mo, 6 mo.",
      },
    ],
    traps: [
      {
        a: "Primary prevention — prevent disease onset (vaccination, diet, exercise)",
        b: "Secondary prevention — screen for presymptomatic disease (glucose screening)",
        whyConfused:
          "Both target patients who FEEL well, and both “prevent” something; a vaccine given at an annual visit and a screening test ordered at the same visit sit side by side",
        keyDifference:
          "Primary acts before disease EXISTS (Susceptible/general population — reduce risks or increase immunity); secondary acts on disease that EXISTS but is SILENT (Subclinical (asymptomatic) — screen for early detection and treatment of presymptomatic disease, prevent symptom onset)",
        clue:
          "Immunization and lifestyle counseling = primary; any screening test = secondary. Exception to watch: a vaccine given AFTER an exposure (rabies, HBV on this page) is post-exposure prophylaxis, not primary prevention in action.",
      },
      {
        a: "Tertiary prevention — treat symptomatic disease to prevent progression and sequelae (A1c monitoring)",
        b: "Quaternary prevention — quit unnecessary interventions to prevent overtreatment and iatrogenic harm (stopping the sulfonylurea)",
        whyConfused:
          "The patient is SYMPTOMATIC in both; both “prevent” morbidity; intensifying versus de-intensifying treatment can look like the same diabetes visit",
        keyDifference:
          "Tertiary ADDS or optimizes treatment for clinical disease (“Treat symptomatic disease” — prevent clinical disease progression and sequelae); quaternary REMOVES treatment that has become harmful (“Quit unnecessary medical interventions” — prevent overtreatment and iatrogenic harm) in patients who are overmedicalized or not treatable",
        clue:
          "If the stem's right answer is STOPPING a drug after repeated harm (eg, discontinuing sulfonylurea after multiple hypoglycemic events), it is quaternary — the pyramid's apex.",
      },
      {
        a: "HIV PEP — tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir) × 28 days, ≤72 hr",
        b: "Doxycycline STI PEP — doxycycline ≤72 hr after sex, q3-6 mo monitoring",
        whyConfused:
          "Both live inside the SAME ≤72-hour window and both follow sexual exposures; option lists often carry both regimens",
        keyDifference:
          "HIV PEP is a three-drug antiretroviral course lasting 28 days with a four-point HIV testing schedule (baseline, 6 wk, 3 mo, 6 mo); doxycycline STI PEP is a single tetracycline preventing syphilis, chlamydia, and gonorrhea (↓ >70% / ↓ gonorrhea ~50%) in patients with recent bacterial STI, packaged with testing, PrEP, vaccines (HPV, Hepatitis A/B), and counseling",
        clue:
          "Name the target: a virus (HIV) gets the 3-drug/28-day course; the bacteria (syphilis/chlamydia/gonorrhea) get doxycycline. Doxycycline does nothing for HIV.",
      },
      {
        a: "Rabies immune globulin — given with the vaccine, but only “if not previously immunized”",
        b: "Hepatitis B immune globulin — given ± the vaccine, but only “if source positive and unvaccinated”",
        whyConfused:
          "Both are the passive-antibody half of a vaccine ± globulin pair, and both conditionals involve prior immunization status",
        keyDifference:
          "Rabies: the vaccine series (0, 3, 7, 14 day schedule) is unconditional after a bite; the GLOBULIN is skipped only if the patient was previously immunized. HBV: the decision is steered by the SOURCE's serology and the exposed person's vaccination status — vaccine ± Hepatitis B immune globulin (if source positive and unvaccinated), then follow HBV serology",
        clue:
          "Rabies asks about the PATIENT's vaccine history; HBV asks about the SOURCE's status (and the exposed person's vaccination) — then follows serology.",
      },
    ],
    pivots: [
      {
        lookAlike:
          "“Prevent disease onset” vs “Prevent symptom onset” — two nearly identical printed phrases on the same pyramid",
        differentiator:
          "ONSET OF WHAT: primary prevents the DISEASE from beginning (no disease exists); secondary prevents SYMPTOMS from beginning (subclinical disease already exists)",
        correctPath:
          "Susceptible/general population → “Prevent disease onset by reducing risks or increasing immunity” (primary). Subclinical (asymptomatic) → “Screen for early detection and treatment of presymptomatic disease” + “Prevent symptom onset” (secondary — the phrase prints twice in this row, in-band and in the callout). Tertiary prevents “clinical disease progression and sequelae”; quaternary prevents “overtreatment and iatrogenic harm.”",
      },
      {
        lookAlike:
          "A prophylaxis option list where the right drug appears at the wrong time (or the right time with the wrong drug)",
        differentiator:
          "Match exposure → regimen FIRST, then verify the clock: the printed timings are ≤72 hr (HIV PEP start; doxycycline after sex), × 28 days (HIV PEP duration), 0/3/7/14 days (rabies), before-travel-to-post-return (malaria), q3-6 mo (doxycycline monitoring)",
        correctPath:
          "A needlestick 4 hours ago gets HIV PEP NOW (≤72 hr) — not after waiting for the source's confirmatory testing; a rabies exposure gets wound cleaning + vaccine + immune globulin on the scheduled days — not a single-shot course; malaria prophylaxis that starts on arrival (or stops at the airport home) is wrong on both ends of the bracket.",
      },
      {
        lookAlike:
          "A “which level is this?” stem where the intervention treats disease (tertiary) but the disease is iatrogenic (quaternary)",
        differentiator:
          "Ask what is being prevented: the DISEASE's progression and sequelae (tertiary) vs the TREATMENT's own harm — overtreatment and iatrogenic injury (quaternary)",
        correctPath:
          "Intensifying insulin to bring down an A1c = tertiary (prevent clinical disease progression and sequelae). Discontinuing a sulfonylurea after multiple hypoglycemic events = quaternary (quit unnecessary medical interventions; prevent overtreatment and iatrogenic harm) — the patient remains symptomatic, but the enemy has changed.",
      },
    ],
    miniCase: {
      vignette:
        "A 27-year-old medical resident sustains a deep hollow-bore needlestick injury to the left hand while drawing blood from a patient with documented, treatment-suppressed HIV infection. The resident rinses the wound and presents to employee health 4 hours after the injury. Her baseline HIV test is negative, and she takes no medications and has no chronic conditions. The occupational health physician initiates post-exposure management.",
      question:
        "Which of the following is the most appropriate post-exposure management for this resident?",
      options: [
        {
          label: "A",
          text:
            "Tenofovir disoproxil fumarate + emtricitabine + raltegravir (or dolutegravir) for 28 days, started now, with repeat HIV testing at baseline, 6 weeks, 3 months, and 6 months",
          correct: true,
          why:
            "CORRECT — the printed row: “Tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir) × 28 days. Start ≤72 hr after exposure; test HIV at baseline and 6 wk, 3 mo, 6 mo.” She presented at 4 hours — well inside the ≤72-hour window — so the three-drug course starts immediately and the serology schedule runs out to 6 months.",
        },
        {
          label: "B",
          text:
            "Tenofovir disoproxil fumarate + emtricitabine alone for 28 days, started now",
          why:
            "TEMPTING but wrong — a two-NRTI regimen omits the integrase inhibitor. The printed regimen is THREE drugs: the two NRTIs PLUS (raltegravir or dolutegravir). Two-drug regimens are not the printed post-exposure standard; the parenthetical “(raltegravir or dolutegravir)” is a required third component, not an optional one.",
        },
        {
          label: "C",
          text:
            "Hold prophylaxis until the source patient's viral load and genotype return, then start if detectable",
          why:
            "DANGEROUS and wrong — the clock is the therapy: prophylaxis must start ≤72 hr after exposure. Waiting days for confirmatory testing burns the window in which PEP prevents establishment of infection. The printed note is explicit: “Start ≤72 hr after exposure” — and testing (baseline, 6 wk, 3 mo, 6 mo) follows the start, it does not gate it.",
        },
        {
          label: "D",
          text:
            "A single 200-mg dose of doxycycline now, given ≤72 hr after the exposure",
          why:
            "TEMPTING but wrong — doxycycline ≤72 hr is the SEXUAL EXPOSURE row's regimen: post-exposure prevention of syphilis, chlamydia, and gonorrhea in patients with a recent bacterial STI. It shares the 72-hour window with HIV PEP but has no antiretroviral activity — it does nothing for HIV.",
        },
        {
          label: "E",
          text:
            "Wound cleaning plus rabies vaccine and rabies immune globulin on a 0, 3, 7, 14 day schedule",
          why:
            "WRONG exposure — the vaccine ± immune globulin grammar belongs to the animal-bite (rabies) row (and, serology-steered, to the hepatitis B row). A needlestick from a human source carries bloodborne-virus risk; rabies prophylaxis is not indicated, and HBV prophylaxis (vaccine ± immune globulin if source positive and unvaccinated) would be the relevant row only if the source's HBV status were the concern.",
        },
      ],
      reasoning:
        "The question tests the prophylaxis table's HIV row end to end: exposure type (occupational needlestick from a known HIV-positive source), regimen (three drugs — two NRTIs plus an integrase inhibitor), duration (× 28 days), window (≤72 hr — she presented at 4 hours, so start NOW), and follow-up (HIV testing at baseline, 6 wk, 3 mo, 6 mo). Option B drops the third drug; option C violates the window by gating on the source's workup; option D imports the OTHER 72-hour regimen (doxycycline for bacterial STI prevention) — the timing collision the exam loves; option E imports the rabies vaccine + immune globulin series. The general rule the page prints: the exposure names the regimen, and the clock confirms it.",
    },
  },
  mnemonics: [
    {
      code: "PRIMARY PREVENTS, SECONDARY SCREENS, TERTIARY TREATS, QUATERNARY QUITS",
      meaning:
        "A KYP ORIGINAL — the four in-band action lines' first verbs, one per level in ladder order: Primary “Prevent disease onset by reducing risks or increasing immunity”; Secondary “Screen for early detection and treatment of presymptomatic disease”; Tertiary “Treat symptomatic disease”; Quaternary “Quit unnecessary medical interventions.”",
      memorizes:
        "All four prevention levels with their printed action verbs and their printed examples (diet/exercise → glucose screening → A1c monitoring → stopping the sulfonylurea)",
      whenToUse:
        "Any “which prevention level is this?” stem — read the intervention's verb and match it to the level; also the fastest recall path for the pyramid's in-band action lines",
      clinical:
        "The verbs also sort real clinic work (KYP context): immunization and lifestyle counseling = PREVENT; screening panels = SCREEN; treatment intensification and rehab = TREAT; deprescribing and de-intensification = QUIT.",
    },
    {
      code: "THE FUNNEL: SUSCEPTIBLE → SUBCLINICAL → CLINICAL → OVERMEDICALIZED",
      meaning:
        "A KYP ORIGINAL — the pyramid read base-to-apex: the population narrows as disease advances, and each band is one prevention level's catchment — Susceptible/general population (Primary), Subclinical (asymptomatic) (Secondary), Clinical (symptomatic) (Tertiary), Symptomatic but overmedicalized or not treatable (Quaternary).",
      memorizes:
        "The pyramid's geometry and the four target populations, in natural-history order",
      whenToUse:
        "Any level-identification stem: place the patient on the funnel first (does disease exist? is it silent? is it symptomatic? is the treatment now the harm?), then read off the level",
      clinical:
        "The funnel is also the health-system argument (KYP context): the higher a population sits on the funnel, the narrower and costlier its care — which is why delivery science pushes prevention DOWN toward the base.",
    },
    {
      code: "72 BEFORE 28",
      meaning:
        "A KYP ORIGINAL — the HIV PEP clock: start ≤72 hr after exposure, then 28 days of tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir), with HIV testing at baseline, 6 wk, 3 mo, and 6 mo. The doxycycline STI PEP row shares the same 72-hour door (give ≤72 hr after sex).",
      memorizes:
        "The HIV PEP window, duration, and four-point testing schedule — and that two printed regimens live inside the same 72-hour window",
      whenToUse:
        "Any needlestick or sexual-exposure stem whose options vary regimen, start time, duration, or follow-up; also the discriminator when doxycycline appears as an HIV-PEP distractor",
      clinical:
        "The clock outranks the workup (KYP framing of the printed rule): PEP starts inside the window without waiting for confirmatory testing — the serology schedule (baseline → 6 mo) is the follow-up, not the gate.",
    },
    {
      code: "0-3-7-14 — CLEAN, VACCINATE, IMMUNIZE",
      meaning:
        "A KYP ORIGINAL — the rabies row compressed: Wound cleaning + rabies vaccine + rabies immune globulin (if not previously immunized), with the vaccine series on days 0, 3, 7, and 14.",
      memorizes:
        "The three components of rabies post-exposure prophylaxis, the conditional globulin, and the four vaccination days",
      whenToUse:
        "Any animal-bite (especially bat or unvaccinated-dog) stem; pair with the HBV row's parallel grammar — HBV vaccine ± Hepatitis B immune globulin (if source positive and unvaccinated), then follow HBV serology",
      clinical:
        "The same active-plus-passive logic returns on the HBV row (KYP context): the vaccine builds active immunity while the globulin covers the antibody window — rabies conditions on the patient's vaccine history, HBV on the source's serology.",
    },
  ],
  rapidReview: {
    s30: [
      "Primary prevention — Susceptible/general population; prevent disease onset by reducing risks or increasing immunity; eg, healthy diet and exercise to prevent diabetes",
      "Secondary prevention — Subclinical (asymptomatic); screen for early detection and treatment of presymptomatic disease; prevent symptom onset; eg, glucose screening for type 2 diabetes mellitus",
      "Tertiary prevention — Clinical (symptomatic); treat symptomatic disease; prevent clinical disease progression and sequelae associated morbidity, mortality, and disability; eg, hemoglobin A1c monitoring to guide treatment and prevent complications",
      "Quaternary prevention — Symptomatic patients, but overmedicalized or not treatable; quit unnecessary medical interventions; prevent overtreatment and iatrogenic harm; eg, discontinuing sulfonylurea after multiple hypoglycemic events",
      "HIV exposure (sexual, occupational) — tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir) × 28 days; start ≤72 hr after exposure; test HIV at baseline and 6 wk, 3 mo, 6 mo",
      "Neisseria meningitidis (close contact) — rifampin, ciprofloxacin, or ceftriaxone; household or close exposure",
      "Rabies exposure (animal bite) — wound cleaning + rabies vaccine + rabies immune globulin (if not previously immunized); 0, 3, 7, 14 day schedule",
      "Hepatitis B virus exposure — HBV vaccine ± Hepatitis B immune globulin (if source positive and unvaccinated); follow HBV serology",
      "Malaria (travel prophylaxis) — atovaquone-proguanil, doxycycline, or mefloquine; start before travel; continue post-return",
      "Sexual exposure (STI prevention) — doxycycline ≤72 hr after sex to prevent syphilis, chlamydia, and gonorrhea in patients with recent bacterial STI; ↓ syphilis/chlamydia >70%, ↓ gonorrhea ~50%; monitor q3-6 mo",
    ],
    m3: [
      "PRIMARY PREVENTS, SECONDARY SCREENS, TERTIARY TREATS, QUATERNARY QUITS — the four action verbs (KYP)",
      "THE FUNNEL: SUSCEPTIBLE → SUBCLINICAL → CLINICAL → OVERMEDICALIZED — base to apex (KYP)",
      "72 BEFORE 28 — HIV PEP: ≤72 hr start, 28-day course, testing at baseline/6 wk/3 mo/6 mo (KYP)",
      "0-3-7-14 — CLEAN, VACCINATE, IMMUNIZE — rabies vaccine days + the three components (KYP)",
    ],
    m10: [
      "The pyramid prints APEX-UP: Quaternary (overmedicalized) at the top, Primary (Susceptible/general population) as the base — the population narrows as disease advances; “Prevent symptom onset” prints TWICE, both times in the Secondary row (in-band + callout), while Primary's callout is “Prevent disease onset”",
      "All four example cells are diabetes actions — one disease walked up the whole ladder: diet/exercise → glucose screening → A1c monitoring → discontinuing sulfonylurea after hypoglycemia",
      "Two regimens share the ≤72-hour window (HIV PEP; doxycycline STI PEP) — the exam's favorite timing collision; doxycycline's printed effectiveness is the page's only effectiveness data (↓ >70% syphilis/chlamydia, ~50% gonorrhea)",
      "The vaccine ± immune globulin grammar prints twice: rabies (globulin only if not previously immunized) and HBV (globulin if source positive and unvaccinated — then follow serology); malaria is the travel bracket — start before travel, continue post-return",
    ],
  },
  recall: [
    {
      q: "Which prevention level targets the Susceptible/general population, and what are its goal and printed example?",
      a: "Primary prevention — prevent disease onset by reducing risks or increasing immunity; “Prevent disease onset”; eg, healthy diet and exercise to prevent diabetes.",
    },
    {
      q: "Which prevention level targets Subclinical (asymptomatic) patients, and what phrase prints TWICE in its row?",
      a: "Secondary prevention — screen for early detection and treatment of presymptomatic disease; “Prevent symptom onset” prints both inside the band and as the right-side Goals callout; eg, glucose screening for type 2 diabetes mellitus.",
    },
    {
      q: "What is the full printed Goals callout of the Tertiary level, and its example?",
      a: "“Prevent clinical disease progression and sequelae associated morbidity, mortality, and disability” — eg, hemoglobin A1c monitoring to guide treatment and prevent complications.",
    },
    {
      q: "Which prevention level is “discontinuing sulfonylurea after multiple hypoglycemic events,” and what does it prevent?",
      a: "Quaternary prevention — Symptomatic patients, but overmedicalized or not treatable; quit unnecessary medical interventions; prevent overtreatment and iatrogenic harm.",
    },
    {
      q: "Name the HIV post-exposure regimen, its window, its duration, and its testing schedule.",
      a: "Tenofovir disoproxil fumarate + emtricitabine + (raltegravir or dolutegravir) × 28 days; start ≤72 hr after exposure; test HIV at baseline and 6 wk, 3 mo, 6 mo.",
    },
    {
      q: "Which three drugs can be used for Neisseria meningitidis prophylaxis, and who qualifies?",
      a: "Rifampin, ciprofloxacin, or ceftriaxone (any one) — for household or close exposure.",
    },
    {
      q: "List the three components of rabies post-exposure prophylaxis, the conditional component, and the vaccination schedule.",
      a: "Wound cleaning + rabies vaccine + rabies immune globulin (given only if not previously immunized); the vaccine series runs on the 0, 3, 7, 14 day schedule.",
    },
    {
      q: "What is the printed effectiveness of doxycycline STI post-exposure prophylaxis, and what must it be paired with?",
      a: "↓ syphilis/chlamydia >70%, ↓ gonorrhea ~50% — given ≤72 hr after sex to patients with recent bacterial STI, and used with regular STI/HIV testing, pre-exposure prophylaxis, vaccines (HPV, Hepatitis A/B), and counseling; monitor q3-6 mo.",
    },
  ],
  related: [
    {
      title: "Patient safety and quality — where quaternary prevention lives",
      note:
        "Quaternary prevention (quit unnecessary medical interventions; prevent overtreatment and iatrogenic harm) is the population-level face of the patient-safety page's individual-level tools — error taxonomy, adverse event analysis, and quality improvement. When a stem asks who is harmed by the health system itself, these two pages answer together.",
      topicId: "patient-safety-quality",
    },
    {
      title: "Insurance plans and payment models — who pays for each level",
      note:
        "Prevention economics: primary prevention and screening are cheap per capita at the pyramid's base, while tertiary and quaternary care concentrate cost at the narrow apex — exactly the spending distribution the insurance and payment-model page (capitation, ACOs, value-based care) is built to bend. The two pages frame the same funnel from the clinical and the financial side.",
      topicId: "insurance-payment-models",
    },
    {
      title: "Challenging communication scenarios — the deprescribing conversation",
      note:
        "Quaternary prevention is a communication task as much as a clinical one: discontinuing a long-standing medication (eg, the sulfonylurea after repeated hypoglycemia) requires the patient-centered, empathetic, open-ended response grammar of the challenging-scenarios page — quitting treatment must be framed as preventing harm, not abandoning the patient.",
      topicId: "challenging-scenarios",
    },
    {
      title: "Clinical therapeutic trials — the evidence behind each level",
      note:
        "Every prophylaxis regimen on this page (the 28-day HIV PEP course, doxycycline STI PEP with its ↓ >70% / ~50% effectiveness data) earned its place through the experimental designs of the clinical-trials page — randomization, control groups, and intention-to-treat. The effectiveness percentages the table prints are trial endpoints wearing prevention clothes.",
      topicId: "clinical-therapeutic-trials",
    },
  ],
  crossLinks: [
    {
      subject: "Microbiology — Neisseria meningitidis and prophylaxis of close contacts",
      connection:
        "The meningococcal row is the microbiology page's organism in action: N. meningitidis spreads by respiratory droplets and colonizes the nasopharynx, so prophylaxis (rifampin, ciprofloxacin, or ceftriaxone for household or close exposure) targets carriage in the exposed circle — the epidemiology of transmission decides who qualifies for the drugs.",
    },
    {
      subject: "Pharmacology — antiretrovirals and the PEP backbone",
      connection:
        "The HIV PEP regimen is the pharmacology chapters assembled: tenofovir disoproxil fumarate + emtricitabine (the NRTI pair used in treatment and in PrEP) plus an integrase inhibitor (raltegravir or dolutegravir) — the same drug classes, at fixed 28-day course length, deployed preventively inside a 72-hour window.",
    },
    {
      subject: "Immunology — active vs passive immunity",
      connection:
        "The rabies and HBV rows print the active-vs-passive grammar in its purest form: vaccine (active immunity — the host builds antibody) ± immune globulin (passive immunity — preformed antibody covers the window), with rabies conditioning on the patient's vaccine history and HBV on the source's serology plus the exposed person's vaccination status.",
    },
    {
      subject: "Endocrinology — diabetes mellitus across the natural history",
      connection:
        "All four prevention examples are diabetes actions: lifestyle to prevent onset (primary), glucose screening to catch the subclinical phase (secondary), hemoglobin A1c monitoring to guide treatment and prevent complications (tertiary), and discontinuing sulfonylurea after hypoglycemic events (quaternary) — the endocrinology page's disease used as the prevention ladder's teaching thread.",
    },
  ],
};
