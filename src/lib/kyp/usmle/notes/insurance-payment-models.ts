import type { KypUsMLENote } from "../types";

// Public Health — PUBH batch 4, topic pubh26. Source: FULL pdf page 299 / book
// 277 (Part 1), the SECOND content page of the HEALTHCARE DELIVERY subsection
// (pdf 298 / book 276 = the subsection opener, disease prevention and
// prophylaxis, produced in batch 3; the banner prints ONCE here — running
// header only, no in-body ribbon, because this is not the subsection's first
// page). The topic owns the WHOLE page, which carries THREE blocks: (1) the
// "Major medical insurance plans" table — SIX rows in printed order: Exclusive
// provider organization (EPO), Health maintenance organization (HMO), Point of
// service (PoS), Preferred provider organization (PPO), Accountable care
// organization (ACO), High deductible health plan (HDHP) — every cell carried
// verbatim in the note's first table block; (2) the "Healthcare payment
// models" table — FIVE rows in printed order: Bundled payment, Capitation,
// Discounted fee-for-service, Fee-for-service, Global payment — carried
// verbatim in the second table block; (3) the "Medicare and Medicaid" block —
// a two-column row (pdftotext -layout pins the geometry): LEFT = the paragraph
// "Medicare and Medicaid—federal social healthcare programs that originated
// from amendments to the Social Security Act … limited income and/or
// resources."; RIGHT = First Aid's OWN mnemonic panel — "MedicarE is for
// Elderly." / "MedicaiD is for Disadvantaged." / "The 4 parts of Medicare:"
// with Part A: hospital Admissions (incl. hospice, skilled nursing), Part B:
// Basic medical bills (eg, physician fees, diagnostic testing), Part C: (parts
// A + B = Combo) delivered by approved private companies, Part D: prescription
// Drugs — carried VERBATIM and ATTRIBUTED everywhere they appear. CENSUS
// (pdfimages): ZERO raster images on the page — three text/vector tables + the
// indd footer slug; all three assets are ORIGINAL KYP ADAPTATIONS (the
// registry visual re-lays the plans as a network-rules grid, the payment
// models as risk-bearer flow cards, and the Medicare/Medicaid block as a split
// panel — the layouts are KYP's, every printed label is preserved). VLM
// AVAILABLE this session (glm-4.6v, THREE passes: ONE 120dpi full-page pass +
// TWO 240dpi zoom passes on the Medicare/Medicaid block,
// staging-pubh26/vlm-census.txt), confirming: exactly SIX plan rows then FIVE
// payment rows in the printed orders given above (none missing or extra); the
// Medicare/Medicaid block is TEXT-ONLY (no artwork, flag, icon, or image); the
// mnemonic panel is the block's RIGHT COLUMN (not a page-margin element); the
// mnemonic keyword letters print in RED (the big E of MedicarE/Elderly, the
// big D of MedicaiD/Disadvantaged, and the A/B/C/D keyword letters of the four
// Part lines) with the connecting words in black; square light-blue/teal
// bullets before the Part lines; NO box, border, or shading around the panel;
// both table titles print in bold dark teal/green; dotted hairline row
// separators, no zebra striping. ADJUDICATION (color, documented in the
// manifest too): the 120dpi full-page pass reported "no red text anywhere on
// this page" — the TWO 240dpi zoom passes both read the mnemonic keyword
// letters in RED with black connecting text; the zoom passes govern (the
// letters are small at 120dpi), and the visual draws the keyword letters in
// the emergency/red tone with an attribution tag. ADJUDICATION (layout): the
// mnemonic panel sits INSIDE the Medicare-and-Medicaid row as its right
// column (pdftotext -layout + zoom pass 1 agree), so it is carried as part of
// block 3 rather than as a separate margin asset. PRINTED-TEXT QUIRKS carried
// + documented: (1) "SEC TION II" header-space extraction artifact (known,
// carried as-is); (2) the payment-table row name "Discounted fee-for-service"
// wraps in print as "Discounted fee-for-" / "service" (hyphen retained) — the
// raw text layer merges it to "fee-forservice" (the hyphenated print is
// carried in the note's verbatim table; the merge is documented); (3) the
// "and/or" of "limited income and/or resources" wraps in print as "and/" +
// "or resources." (the raw layer preserves the wrap — contiguous quotes join
// it as "and/ or"; the note carries "and/or"); (4) the four Part lines'
// bullets extract as a C1 control byte (0x83) + U+2598 quarter-block glyph
// "▘" — the print's square bullets (VLM: light blue/teal squares); (5) every
// plan name cell except "Point of service (PoS)" wraps across two lines in
// print ("Exclusive provider / organization (EPO)" etc.) — carried as the
// un-wrapped name with the wrap documented; (6) "PoS" capitalization is as
// printed (lowercase o, capital S). PROVENANCE SPLIT: verbatim = all eleven
// table rows, the Medicare/Medicaid paragraph, the mnemonic panel; FA-own =
// the two mnemonics ("MedicarE is for Elderly. MedicaiD is for Disadvantaged."
// and "The 4 parts of Medicare:" A-B-C-D) and the red keyword-letter printing;
// KYP-original = the network × referral × cost grid, the PER-SERVICE /
// PER-INCIDENT / PER-PATIENT risk ladder, the three-question protocol, the
// exam layer, and the two KYP mnemonics ("HMO GATES AND SAVES; PPO ROAMS AND
// PAYS" and "PER SERVICE, PER INCIDENT, PER PATIENT") — every teaching
// generalization beyond the printed page is flagged as KYP context (notably:
// the page prints NO referral rule and NO cost rule for EPO, NO network or
// referral rules for ACO and HDHP — the grid marks those cells as page-silent
// rather than inventing them). DrugCards: none — the page prints plans and
// payment models, not drugs (documented as folded-by-absence in the manifest).
// Boundary: the previous page (pdf 298 / book 276) is disease prevention and
// prophylaxis (the Healthcare Delivery opener); the next page (pdf 300 / book
// 278) opens Palliative care → the patient-safety/quality-improvement topic,
// produced in parallel.

export const insurancePaymentModels: KypUsMLENote = {
  id: "insurance-payment-models",
  title: "Insurance Plans, Payment Models, and Medicare vs Medicaid",
  subtitle:
    "Healthcare Delivery's second page is the US system's operating manual compressed into one sheet: six insurance plans, five payment models, and two government programs. The six plans answer the member's question — whom can I see, and who must unlock the door? An EPO requires in-network care, with out-of-network coverage reserved for emergencies. An HMO keeps premiums and out-of-pocket costs low but limits members to in-network providers and requires a primary care referral for specialists. A PPO buys flexibility — in-network and out-of-network care with no referral requirement — at higher cost for out-of-network services. The PoS is the printed hybrid: a combination of HMO and PPO that allows out-of-network care at higher cost while still requiring primary care referrals. Two rows are not network plans at all: the ACO is a group of providers who voluntarily coordinate care for Medicare patients, and the HDHP is a cost design — low premiums, high out-of-pocket cost — made compatible with the health savings account (HSA). The five payment models answer the payer's question — to what is each dollar attached? Fee-for-service pays for each individual service; discounted fee-for-service pays the same per service at a discounted rate predetermined by providers and payers (eg, PPOs); bundled payment hands the organization a set amount per service, regardless of ultimate cost, to be divided among all providers and facilities involved; global payment covers all expenses of a single incident of care with one payment — most commonly during elective surgeries, covering the surgery plus the necessary pre- and postoperative visits; capitation pays physicians a set amount per patient assigned to them per period of time, regardless of how much the patient uses the healthcare system — used by some HMOs. And the government's two programs, both born from amendments to the Social Security Act, split along the population served: Medicare — MedicarE is for Elderly — for patients ≥65 years old, <65 with certain disabilities, and those with end-stage renal disease; Medicaid — MedicaiD is for Disadvantaged — joint federal and state health assistance for people with limited income and/or resources.",
  subject: "Public Health",
  system:
    "Section II · High-Yield General Principles — Public Health Sciences: Healthcare Delivery",
  pilotCategory:
    "Public Health Sciences — healthcare delivery decoding: the six major medical insurance plans (EPO, HMO, PoS, PPO, ACO, HDHP) with their network, referral, and cost rules; the five healthcare payment models (bundled payment, capitation, discounted fee-for-service, fee-for-service, global payment) with the risk each one shifts; and Medicare vs Medicaid with First Aid's own E/D mnemonic and the four A-B-C-D Medicare parts carried attributed.",
  difficulty: 1,
  readTime: 6,
  sourceRef:
    "First Aid 2026, Part 1 pp. 277–277 (Healthcare Delivery: Major medical insurance plans; Healthcare payment models; Medicare and Medicaid)",
  tags: [
    "healthcare delivery",
    "insurance plans",
    "exclusive provider organization",
    "EPO",
    "health maintenance organization",
    "HMO",
    "point of service",
    "PoS",
    "preferred provider organization",
    "PPO",
    "accountable care organization",
    "ACO",
    "high deductible health plan",
    "HDHP",
    "health savings account",
    "HSA",
    "payment models",
    "fee-for-service",
    "discounted fee-for-service",
    "bundled payment",
    "capitation",
    "global payment",
    "Medicare",
    "Medicaid",
    "Medicare Part A",
    "Medicare Part B",
    "Medicare Part C",
    "Medicare Part D",
    "end-stage renal disease",
    "Social Security Act",
    "premiums",
    "out-of-pocket cost",
    "referrals",
    "US health system",
  ],
  core: {
    what:
      "One printed page, carried whole. BLOCK 1 — the “Major medical insurance plans” table, SIX rows in printed order: (1) Exclusive provider organization (EPO) — requires in-network care; out-of-network coverage available for emergencies. (2) Health maintenance organization (HMO) — lower premiums, limited to in-network providers, requires primary care referral for specialists, lower out-of-pocket cost. (3) Point of service (PoS) — combination of HMO and PPO, allows out-of-network care at higher cost, and requires primary care referrals. (4) Preferred provider organization (PPO) — flexibility with in-network and out-of-network care, higher cost for out-of-network services, no referral requirement. (5) Accountable care organization (ACO) — group of providers who voluntarily coordinate care for Medicare patients. (6) High deductible health plan (HDHP) — low premiums, high out-of-pocket cost, compatible with health savings account (HSA). BLOCK 2 — the “Healthcare payment models” table, FIVE rows in printed order: (1) Bundled payment — healthcare organization receives a set amount per service, regardless of ultimate cost, to be divided among all providers and facilities involved. (2) Capitation — physicians receive a set amount per patient assigned to them per period of time, regardless of how much the patient uses the healthcare system; used by some HMOs. (3) Discounted fee-for-service — insurer and/or patient pays for each individual service at a discounted rate predetermined by providers and payers (eg, PPOs). (4) Fee-for-service — insurer and/or patient pays for each individual service. (5) Global payment — insurer and/or patient pays for all expenses associated with a single incident of care with a single payment; most commonly used during elective surgeries, as it covers the cost of surgery as well as the necessary pre- and postoperative visits. BLOCK 3 — the “Medicare and Medicaid” block: Medicare and Medicaid—federal social healthcare programs that originated from amendments to the Social Security Act; Medicare is available to patients ≥65 years old, <65 with certain disabilities, and those with end-stage renal disease; Medicaid is joint federal and state health assistance for people with limited income and/or resources — with First Aid's OWN mnemonic panel printed beside the paragraph: “MedicarE is for Elderly. / MedicaiD is for Disadvantaged. / The 4 parts of Medicare: Part A: hospital Admissions, including hospice, skilled nursing; Part B: Basic medical bills (eg, physician fees, diagnostic testing); Part C: (parts A + B = Combo) delivered by approved private companies; Part D: prescription Drugs.”",
    why:
      "This page sits in Healthcare Delivery because it is the money-side grammar of every clinical decision the exam can frame: whom a patient may see, who must authorize it, what a visit costs the member, and how the dollars move behind the scenes. The six plans are generated by three member-facing axes — NETWORK (in-network only, or out-of-network allowed and at what cost), REFERRAL (does the plan require a primary care referral for specialists), and the premium-vs-out-of-pocket SEE-SAW (HMO prints both ends low; HDHP prints the premium low and the out-of-pocket high; PPO prices its flexibility). Two rows sit outside the grid by design: the ACO is a provider-side coordination model for Medicare patients, and the HDHP is a pure cost design whose printed partner is the tax-advantaged HSA. The five payment models are generated by one payer-facing axis — the UNIT of payment. Fee-for-service and its discounted variant attach money to each individual service (the PPO's network discount is the printed bridge between the two tables: discounted fee-for-service is the payment model of PPOs, capitation is printed for some HMOs); bundled payment attaches a set amount to a service and divides it among all providers and facilities involved; global payment attaches one payment to a whole incident of care (the elective-surgery model: surgery plus pre- and postoperative visits); capitation attaches a set amount to each patient per period of time regardless of use. As the unit widens from service to episode to patient, the financial risk of utilization shifts from payer to provider — the single most testable sentence on the page (KYP synthesis of the five printed rows). And the government's two programs close the loop by population: Medicare doors are age (≥65), disability (<65 with certain disabilities), and disease (end-stage renal disease — any age); Medicaid's door is means (limited income and/or resources), administered jointly by federal and state governments. First Aid's own mnemonics — MedicarE for Elderly, MedicaiD for Disadvantaged, and A-Admissions/B-Basic bills/C-Combo/D-Drugs — are printed beside the paragraph and carried attributed throughout.",
    keyIdea:
      "Decode any delivery vignette in three questions. QUESTION 1 — THE MEMBER'S PLAN: which network, and who gates it? In-network ONLY (out-of-network covered for emergencies) = EPO. In-network only + primary care referral for specialists + lower premiums AND lower out-of-pocket cost = HMO. Both networks, no referral requirement, higher cost for out-of-network services = PPO. Combination of HMO and PPO — out-of-network allowed at higher cost, referrals still required = PoS. Not a member network at all: ACO = providers voluntarily coordinating care for MEDICARE patients; HDHP = low premiums, high out-of-pocket cost, HSA-compatible. QUESTION 2 — THE MONEY'S UNIT: to what is each dollar attached? Each individual service (payer pays per service) = fee-for-service; the same per service at a rate predetermined by providers and payers (eg, PPOs) = discounted fee-for-service; a set amount per service, regardless of ultimate cost, divided among ALL providers and facilities involved = bundled payment; one payment for ALL expenses of a single incident of care — elective surgeries, covering surgery + pre- and postoperative visits = global payment; a set amount per patient per period of time, regardless of use (used by some HMOs) = capitation. The wider the unit, the more utilization risk shifts from payer to provider (KYP). QUESTION 3 — THE GOVERNMENT DOOR: age ≥65, or <65 with certain disabilities, or end-stage renal disease = MEDICARE (MedicarE is for Elderly; parts A Admissions / B Basic bills / C Combo via approved private companies / D Drugs — First Aid's own). Limited income and/or resources = MEDICAID (MedicaiD is for Disadvantaged), joint federal and state. Plan, unit, door — three questions, and any insurance vignette decodes itself.",
  },
  mechanisms: [
    {
      id: "network-referral-cost-map",
      title:
        "Whom can I see, and who unlocks the door: the network–referral–cost grid behind the six plans",
      context:
        "The printed Major medical insurance plans table (book 277): six rows, three hidden axes",
      flow: {
        nodes: [
          {
            id: "member-question",
            label: "THE MEMBER'S QUESTION — whom can I see, and what will it cost me?",
            sublabel:
              "Input — the printed table's six plans decode along three axes: NETWORK (in-network only, or out-of-network allowed — and at what cost), REFERRAL (does the plan require a primary care referral for specialists), and the premium-vs-out-of-pocket SEE-SAW. Four rows are member-facing network plans; two are not — the ACO faces providers, the HDHP is a cost design. Where the page prints no rule for an axis, the grid leaves the cell silent rather than inventing one.",
            variant: "input",
          },
          {
            id: "epo",
            label: "EPO — LOCK THE NETWORK, PRINT NO GATE",
            sublabel:
              "Process — “Requires in-network care; out-of-network coverage available for emergencies.” The EPO's printed identity is entirely the locked network with one escape hatch: emergencies. The page prints NO referral rule and NO premium/out-of-pocket rule for EPO — its whole row is the network axis (documented silence, not an oversight to fill in from outside knowledge).",
            variant: "process",
          },
          {
            id: "hmo",
            label: "HMO — LOCK THE NETWORK, ADD THE GATE, DROP BOTH PRICES",
            sublabel:
              "Process — “Lower premiums, limited to in-network providers, requires primary care referral for specialists, lower out-of-pocket cost.” The HMO is the only plan that prints BOTH ends of the see-saw low: the member trades provider choice and direct specialist access for lower premiums AND lower out-of-pocket cost. The primary care referral is the gate that manages the narrow network.",
            variant: "process",
          },
          {
            id: "pos",
            label: "PoS — THE HYBRID: HMO'S GATE + PPO'S ESCAPE HATCH",
            sublabel:
              "Process — “Combination of HMO and PPO, allows out-of-network care at higher cost, and requires primary care referrals.” Point of service = the point where the member chooses, at each service, which half of the hybrid to use: stay in-network through the gate, or leave the network and pay the higher price — but the gate (primary care referral) never comes off.",
            variant: "process",
          },
          {
            id: "ppo",
            label: "PPO — OPEN BOTH NETWORKS, REMOVE THE GATE, PRICE THE FREEDOM",
            sublabel:
              "Process — “Flexibility with in-network and out-of-network care, higher cost for out-of-network services, no referral requirement.” The PPO is the HMO's mirror image: freedom first, price second. It is the only row that prints “no referral requirement” — direct specialist access is the printed feature, and out-of-network care is allowed at a higher cost rather than excluded.",
            variant: "process",
          },
          {
            id: "aco-hdhp",
            label: "THE TWO NON-NETWORK ROWS — ACO (the provider team) and HDHP (the deductible bet)",
            sublabel:
              "Process — ACO: “Group of providers who voluntarily coordinate care for Medicare patients” — a provider-side coordination model tied to MEDICARE, not a member's network choice; the page prints no referral or cost rules for it. HDHP: “Low premiums, high out-of-pocket cost, compatible with health savings account (HSA)” — a pure cost design at the extreme end of the see-saw, paired with the tax-advantaged savings account as its printed companion.",
            variant: "process",
          },
          {
            id: "grid-rule",
            label: "THE GRID RULE — network × referral × cost",
            sublabel:
              "Output — EPO and HMO lock the network (EPO adds the emergency exception); HMO and PoS print the referral gate; PPO alone prints both networks AND no gate; PoS pays for escape at higher cost; HDHP plays the far end of the see-saw (low premium, high out-of-pocket, HSA); ACO coordinates providers for Medicare. Whom can I see, who gates it, what does it cost — three answers name the plan (KYP synthesis of the six printed rows).",
            variant: "output",
          },
        ],
        edges: [
          { from: "member-question", to: "epo", label: "network-only rule →" },
          { from: "member-question", to: "hmo", label: "network + gate + low prices →" },
          { from: "member-question", to: "pos", label: "the hybrid →" },
          { from: "member-question", to: "ppo", label: "both networks, no gate →" },
          { from: "member-question", to: "aco-hdhp", label: "outside the network grid →" },
          { from: "epo", to: "grid-rule", label: "in-network only, emergencies excepted" },
          { from: "hmo", to: "grid-rule", label: "referral required · lower premiums · lower out-of-pocket" },
          { from: "pos", to: "grid-rule", label: "out-of-network at higher cost · referrals required" },
          { from: "ppo", to: "grid-rule", label: "no referral requirement · out-of-network costs more" },
          { from: "aco-hdhp", to: "grid-rule", label: "provider team · deductible bet + HSA" },
        ],
      },
    },
    {
      id: "risk-bearer-map",
      title:
        "Per service, per incident, per patient: the unit of payment fixes who bears the risk",
      context:
        "The printed Healthcare payment models table (book 277): five rows, one hidden ladder",
      flow: {
        nodes: [
          {
            id: "payer-question",
            label: "THE PAYER'S QUESTION — to WHAT is each dollar attached?",
            sublabel:
              "Input — the five printed models differ in the UNIT of payment (each individual service / a single incident of care / each patient per period of time), and the unit decides who profits when utilization rises and who loses when it does not. Read the five rows as one ladder from payer risk to provider risk (the ladder arrangement is KYP's; the printed table lists the rows alphabetically).",
            variant: "input",
          },
          {
            id: "ffs",
            label: "FEE-FOR-SERVICE — pay per service; the PAYER carries the utilization risk",
            sublabel:
              "Process — “Insurer and/or patient pays for each individual service.” Every visit, test, and procedure generates its own charge, so total cost tracks utilization: the more care delivered, the more the payer pays. The provider's revenue also tracks delivery — the per-service unit is the printed baseline every other row modifies.",
            variant: "process",
          },
          {
            id: "discounted-ffs",
            label: "DISCOUNTED FEE-FOR-SERVICE — the same per-service engine at a negotiated price",
            sublabel:
              "Process — “Insurer and/or patient pays for each individual service at a discounted rate predetermined by providers and payers (eg, PPOs).” The unit is unchanged — still each individual service — but the price is fixed in advance by agreement. The printed “(eg, PPOs)” is the bridge between the page's two tables: the PPO's network is exactly such a predetermined discount.",
            variant: "process",
          },
          {
            id: "bundled",
            label: "BUNDLED PAYMENT — a set amount per service, divided among everyone involved",
            sublabel:
              "Process — “Healthcare organization receives a set amount per service, regardless of ultimate cost, to be divided among all providers and facilities involved.” The phrase “regardless of ultimate cost” is the risk shift: if the episode costs more than the bundle, the difference stays with the organization and its providers; if it costs less, they keep the margin. One payment, many hands — the division among ALL providers and facilities is the printed signature.",
            variant: "process",
          },
          {
            id: "global",
            label: "GLOBAL PAYMENT — one payment for the whole incident: the elective-surgery model",
            sublabel:
              "Process — “Insurer and/or patient pays for all expenses associated with a single incident of care with a single payment. Most commonly used during elective surgeries, as it covers the cost of surgery as well as the necessary pre- and postoperative visits.” The unit widens from the service to the EPISODE: one payment owns the preoperative visit, the surgery, and the postoperative visit together — the provider side now manages the whole incident's budget.",
            variant: "process",
          },
          {
            id: "capitation",
            label: "CAPITATION — a set amount per patient per period, regardless of use",
            sublabel:
              "Process — “Physicians receive a set amount per patient assigned to them per period of time, regardless of how much the patient uses the healthcare system. Used by some HMOs.” The unit reaches its widest — the PATIENT PANEL: the physician is paid the same whether an assigned patient visits daily or never. The printed HMO tie-in completes the two-table bridge: some HMOs pay their gates by capitation.",
            variant: "process",
          },
          {
            id: "ladder-rule",
            label: "THE LADDER RULE — the wider the unit, the more risk shifts from payer to provider",
            sublabel:
              "Output — per SERVICE (fee-for-service, discounted): utilization risk sits with the payer, and the provider's incentive runs toward doing more; per SERVICE DIVIDED (bundled): the organization and its providers share it; per INCIDENT (global): the provider side owns the episode; per PATIENT-PER-PERIOD (capitation): the physician owns the panel's utilization. The unit of payment is also the incentive: whoever bears the risk manages the utilization (KYP synthesis of the five printed rows).",
            variant: "output",
          },
        ],
        edges: [
          { from: "payer-question", to: "ffs", label: "attach to each service →" },
          { from: "payer-question", to: "discounted-ffs", label: "attach to each service, at a discount →" },
          { from: "payer-question", to: "bundled", label: "attach a set amount, divide it →" },
          { from: "payer-question", to: "global", label: "attach to the incident →" },
          { from: "payer-question", to: "capitation", label: "attach to the patient →" },
          { from: "ffs", to: "ladder-rule", label: "payer risk · do-more incentive" },
          { from: "discounted-ffs", label: "payer risk at a negotiated price", to: "ladder-rule" },
          { from: "bundled", to: "ladder-rule", label: "shared risk across all involved" },
          { from: "global", to: "ladder-rule", label: "provider episode risk" },
          { from: "capitation", to: "ladder-rule", label: "physician panel risk" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "insurance-models-map",
      title:
        "The six plans, the five payment models, and the Medicare/Medicaid split (an original KYP diagram)",
      caption:
        "An original KYP diagram of book 277's three blocks. ZONE A — the six plans as a network-rules grid: one row per plan in printed order (EPO, HMO, PoS, PPO, ACO, HDHP), with columns for the NETWORK rule, the REFERRAL rule, and the COST see-saw; cells the page leaves silent are marked “— not printed.” ZONE B — the five payment models as flow cards on a risk ladder, arranged by unit of payment (per service → per service discounted → per service divided → per incident → per patient per period) with a who-bears-the-risk chip on each card and the payer-to-provider risk gradient down the side. ZONE C — the Medicare/Medicaid split panel: Medicare (≥65, <65 with certain disabilities, ESRD) with the four A-B-C-D parts and First Aid's own “MedicarE is for Elderly.” attributed; Medicaid (joint federal and state, limited income and/or resources) with “MedicaiD is for Disadvantaged.” attributed; both flagged as federal social healthcare programs from amendments to the Social Security Act.",
      notice:
        "Census (pdfimages): ZERO raster images on pdf 299 — the page's assets are three text/vector tables plus the indd footer slug (VLM-read at 120dpi + two 240dpi zoom passes, staging-pubh26/vlm-census.txt). The visual is an ORIGINAL KYP ADAPTATION: the grid, the risk ladder, and the split panel are KYP layouts; every printed label (all eleven table rows, the Medicare/Medicaid paragraph, both mnemonics) is preserved, and the full rows are additionally carried verbatim in the note's table blocks. ADJUDICATIONS drawn exactly as print-pinned: the mnemonic panel is the RIGHT COLUMN of the Medicare-and-Medicaid block (pdftotext -layout + zoom pass), and its keyword letters (the E of MedicarE/Elderly, the D of MedicaiD/Disadvantaged, and the A/B/C/D letters) print in RED with black connecting words (two 240dpi zoom passes; the 120dpi full-page pass had called the panel plain black — zoom governs) — drawn here in the emergency tone with attribution tags. The risk-ladder ordering of the payment models is KYP's arrangement; the printed (alphabetical) order is carried verbatim in the note's second table block.",
    },
    {
      kind: "table",
      title:
        "Book 277 — the printed Major medical insurance plans table, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The page's first block: SIX rows in printed order, EPO through HDHP. Every plan name except “Point of service (PoS)” wraps across two lines in its printed cell (“Exclusive provider / organization (EPO)” and so on) — carried here as the un-wrapped name with the wrap documented. Note what the page does NOT print: no referral or cost rule for EPO, no network/referral/cost rules for ACO, and no network/referral rule for HDHP — the note's decoder marks those silences rather than filling them from outside knowledge.",
      columns: ["PLAN", "PRINTED DESCRIPTION"],
      rows: [
        [
          "Exclusive provider organization (EPO)",
          "Requires in-network care; out-of-network coverage available for emergencies.",
        ],
        [
          "Health maintenance organization (HMO)",
          "Lower premiums, limited to in-network providers, requires primary care referral for specialists, lower out-of-pocket cost.",
        ],
        [
          "Point of service (PoS)",
          "Combination of HMO and PPO, allows out-of-network care at higher cost, and requires primary care referrals.",
        ],
        [
          "Preferred provider organization (PPO)",
          "Flexibility with in-network and out-of-network care, higher cost for out-of-network services, no referral requirement.",
        ],
        [
          "Accountable care organization (ACO)",
          "Group of providers who voluntarily coordinate care for Medicare patients.",
        ],
        [
          "High deductible health plan (HDHP)",
          "Low premiums, high out-of-pocket cost, compatible with health savings account (HSA).",
        ],
      ],
      caption:
        "Verbatim carry, documented: SIX rows in printed order (VLM-confirmed at 120dpi — none missing or extra). Printed quirks carried: the plan-name cells wrap across two lines in print except “Point of service (PoS)”; “PoS” capitalization is as printed. The page is silent on EPO referrals and costs, and on ACO/HDHP network and referral rules — those cells stay empty in the decoder rather than being fabricated (an adjudication documented in the manifest). The two cost-design rows bookend the see-saw: HMO prints “lower premiums … lower out-of-pocket cost” while HDHP prints “low premiums, high out-of-pocket cost” — the trade the exam tests.",
    },
    {
      kind: "table",
      title:
        "Book 277 — the printed Healthcare payment models table, carried verbatim (every printed word, PRINTED row order)",
      intro:
        "The page's second block: FIVE rows in printed order, Bundled payment through Global payment. The third row's name, “Discounted fee-for-service,” wraps in print as “Discounted fee-for-” / “service” (hyphen retained at the break) — the raw text layer merges it to “fee-forservice”; the hyphenated print is carried here. The printed row order is alphabetical (Bundled, Capitation, Discounted, Fee-for-service, Global) — the note's risk ladder re-orders them by unit of payment as a KYP arrangement, and both orders are documented.",
      columns: ["PAYMENT MODEL", "PRINTED DEFINITION"],
      rows: [
        [
          "Bundled payment",
          "Healthcare organization receives a set amount per service, regardless of ultimate cost, to be divided among all providers and facilities involved.",
        ],
        [
          "Capitation",
          "Physicians receive a set amount per patient assigned to them per period of time, regardless of how much the patient uses the healthcare system. Used by some HMOs.",
        ],
        [
          "Discounted fee-for-service",
          "Insurer and/or patient pays for each individual service at a discounted rate predetermined by providers and payers (eg, PPOs).",
        ],
        [
          "Fee-for-service",
          "Insurer and/or patient pays for each individual service.",
        ],
        [
          "Global payment",
          "Insurer and/or patient pays for all expenses associated with a single incident of care with a single payment. Most commonly used during elective surgeries, as it covers the cost of surgery as well as the necessary pre- and postoperative visits.",
        ],
      ],
      caption:
        "Verbatim carry, documented: FIVE rows in printed order (VLM-confirmed — none missing or extra). Printed quirks carried: the “Discounted fee-for-service” name wraps across two lines in print (raw layer merge “fee-forservice” documented); “eg, PPOs” is as printed. The two printed cross-references between this table and the plans table are high-yield: discounted fee-for-service names PPOs as the example, and capitation is “used by some HMOs” — the payment models are the plumbing under the plans (KYP framing of the printed ties). The risk reading — “regardless of ultimate cost” (bundled), “regardless of how much the patient uses the healthcare system” (capitation), and “all expenses … with a single payment” (global) — is the ladder this note builds in its second mechanism.",
    },
    {
      kind: "text",
      title:
        "Book 277 — the printed Medicare and Medicaid block, carried verbatim (paragraph + First Aid's own mnemonic panel)",
      body: [
        "THE PARAGRAPH (the block's left column, verbatim): “Medicare and Medicaid—federal social healthcare programs that originated from amendments to the Social Security Act. Medicare is available to patients ≥65 years old, <65 with certain disabilities, and those with end-stage renal disease. Medicaid is joint federal and state health assistance for people with limited income and/or resources.” (The “and/or” wraps in print as “and/” + “or resources.” — carried here un-wrapped, wrap documented.)",
        "THE MNEMONIC PANEL (the block's right column — FIRST AID'S OWN, printed beside the paragraph, keyword letters in red, carried VERBATIM and ATTRIBUTED): “MedicarE is for Elderly. / MedicaiD is for Disadvantaged. / The 4 parts of Medicare: ▘ Part A: hospital Admissions, including hospice, skilled nursing; ▘ Part B: Basic medical bills (eg, physician fees, diagnostic testing); ▘ Part C: (parts A + B = Combo) delivered by approved private companies; ▘ Part D: prescription Drugs.” (The ▘ glyphs are the print's square bullets, which the text layer extracts as a control byte + quarter-block character — a documented quirk.)",
      ],
    },
    {
      kind: "list",
      title:
        "The plan decoder — six rows, three axes (KYP's reading of the printed table)",
      intro:
        "Each printed row compressed to its exam-decision core: the network rule, the referral rule, and the cost see-saw. Where the page prints no rule for an axis, the decoder says so — the silences are as testable as the rules.",
      items: [
        {
          lead: "EPO — the locked network with an emergency hatch",
          text: "Network: requires in-network care, with out-of-network coverage available for emergencies — the exception is the discriminator. Referral: NOT PRINTED (the EPO's row is entirely a network rule). Cost: NOT PRINTED. Exam shape: a member seen out-of-network for an emergency is covered; the same visit for a routine problem is not.",
        },
        {
          lead: "HMO — the gated, cheap, narrow plan",
          text: "Network: limited to in-network providers. Referral: requires primary care referral for specialists — the gate. Cost: lower premiums AND lower out-of-pocket cost — both ends low. Exam shape: the plan that trades freedom for price on both axes at once.",
        },
        {
          lead: "PoS — the hybrid (HMO's gate + PPO's escape)",
          text: "Printed definition: combination of HMO and PPO. Network: allows out-of-network care at higher cost. Referral: requires primary care referrals — the gate never comes off. Exam shape: the plan that lets you leave the network if you pay, but still makes you pass through primary care.",
        },
        {
          lead: "PPO — both networks, no gate, priced freedom",
          text: "Network: in-network and out-of-network care (flexibility). Referral: NO referral requirement — the only row that prints it. Cost: higher cost for out-of-network services. Exam shape: direct specialist access plus out-of-network coverage at a premium.",
        },
        {
          lead: "ACO — the provider-side row",
          text: "Not a member network plan: a group of providers who voluntarily coordinate care for MEDICARE patients. The printed ties: providers (not insurers), voluntary coordination, Medicare. Exam shape: the option that describes providers organizing themselves, not a member choosing a network.",
        },
        {
          lead: "HDHP — the deductible bet with an HSA",
          text: "Cost design: low premiums, high out-of-pocket cost — the see-saw's extreme end. The printed companion: compatible with health savings account (HSA). Exam shape: the healthy patient who rarely uses care, wants the cheapest monthly price, accepts a high deductible, and asks about the tax-advantaged account.",
        },
      ],
    },
    {
      kind: "list",
      title:
        "The payment-model decoder — five rows, one ladder (KYP's reading of the printed table)",
      intro:
        "Each printed row compressed to its unit of payment and its risk bearer, ordered along the KYP risk ladder (the printed table lists the rows alphabetically; both orders are documented). The question under every vignette: to WHAT is the money attached?",
      items: [
        {
          lead: "FEE-FOR-SERVICE — per SERVICE → payer risk",
          text: "Insurer and/or patient pays for each individual service. Every service bills separately; total cost tracks utilization, so the payer carries the risk of heavy use. The baseline model every other row modifies.",
        },
        {
          lead: "DISCOUNTED FEE-FOR-SERVICE — per SERVICE at a negotiated price → payer risk, discounted",
          text: "Insurer and/or patient pays for each individual service at a discounted rate predetermined by providers and payers (eg, PPOs). Same unit as fee-for-service; the price is set in advance — and the printed PPO example is the bridge to the plans table.",
        },
        {
          lead: "BUNDLED PAYMENT — a set amount per SERVICE, divided among all → shared risk",
          text: "Healthcare organization receives a set amount per service, regardless of ultimate cost, to be divided among all providers and facilities involved. “Regardless of ultimate cost” is the risk shift; “all providers and facilities” is the division that defines the bundle.",
        },
        {
          lead: "GLOBAL PAYMENT — one payment per INCIDENT → provider episode risk",
          text: "Insurer and/or patient pays for all expenses associated with a single incident of care with a single payment — most commonly used during elective surgeries, covering the cost of surgery as well as the necessary pre- and postoperative visits. The printed vignette is the anchor: one payment owns the whole perioperative episode.",
        },
        {
          lead: "CAPITATION — a set amount per PATIENT per PERIOD → physician panel risk",
          text: "Physicians receive a set amount per patient assigned to them per period of time, regardless of how much the patient uses the healthcare system. Used by some HMOs. The unit is the patient panel: the physician is paid the same for a daily visitor and a never-visitor.",
        },
      ],
    },
    {
      kind: "steps",
      title: "Sorting any insurance vignette in three questions",
      intro:
        "The whole page distilled into an ordered reading path — PLAN, UNIT, DOOR — applicable to any coverage or payment stem the exam shows, printed on book 277 or not.",
      steps: [
        {
          label: "QUESTION 1 — THE MEMBER'S PLAN: which network, and who gates it?",
          detail:
            "In-network only with an emergency exception = EPO. In-network only + primary care referral for specialists + lower premiums and lower out-of-pocket cost = HMO. Out-of-network allowed at higher cost + referrals still required + “combination of HMO and PPO” = PoS. Both networks + no referral requirement + higher out-of-network cost = PPO. Providers coordinating for Medicare = ACO. Low premiums + high out-of-pocket + HSA = HDHP.",
        },
        {
          label: "QUESTION 2 — THE MONEY'S UNIT: to what is each dollar attached?",
          detail:
            "Attach to each individual service = fee-for-service (discounted if the rate is predetermined by providers and payers, eg, PPOs). Attach a set amount per service and divide it among all providers and facilities involved = bundled payment. Attach one payment to all expenses of a single incident of care (elective surgery + pre-/postoperative visits) = global payment. Attach a set amount per patient per period regardless of use = capitation (used by some HMOs). The wider the unit, the more risk shifts from payer to provider (KYP).",
        },
        {
          label: "QUESTION 3 — THE GOVERNMENT DOOR: age/disability/disease, or income?",
          detail:
            "≥65 years old, <65 with certain disabilities, or end-stage renal disease = MEDICARE — “MedicarE is for Elderly.” (First Aid's own) — with parts A (hospital Admissions, including hospice, skilled nursing), B (Basic medical bills, eg, physician fees, diagnostic testing), C (parts A + B = Combo, delivered by approved private companies), D (prescription Drugs). Limited income and/or resources = MEDICAID — “MedicaiD is for Disadvantaged.” — joint federal and state health assistance. Both programs originated from amendments to the Social Security Act.",
        },
      ],
    },
    {
      kind: "compare",
      title:
        "HMO vs PPO — the see-saw in the table's own words (with the PoS hybrid bridging them)",
      intro:
        "Rows 2 and 4 of the printed plans table are the exam's favorite contrast: the gated, cheap, narrow plan against the open, priced, flexible one. Every distinguishing feature follows from where the plan sits on the network and referral axes — and the PoS row is printed as the explicit combination of the two.",
      columns: [
        "HMO — the gated, narrow, cheap plan",
        "PPO — the open, flexible, priced plan",
      ],
      rows: [
        {
          label: "Network",
          a: "“Limited to in-network providers” — the network is closed",
          b: "“Flexibility with in-network and out-of-network care” — both networks open",
        },
        {
          label: "Referral for specialists",
          a: "“Requires primary care referral for specialists” — the gate is on",
          b: "“No referral requirement” — direct specialist access",
        },
        {
          label: "Premiums",
          a: "“Lower premiums”",
          b: "No premium claim printed — the price of freedom shows up as service costs, not a premium line",
        },
        {
          label: "Out-of-pocket / out-of-network cost",
          a: "“Lower out-of-pocket cost” — both ends of the see-saw sit low",
          b: "“Higher cost for out-of-network services” — the freedom is priced per service",
        },
        {
          label: "The hybrid echo (PoS)",
          a: "PoS keeps this half: “requires primary care referrals”",
          b: "PoS keeps this half: “allows out-of-network care at higher cost” — printed as “combination of HMO and PPO”",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title:
        "How the exam asks this page — four stem shapes and one silence trap",
      body:
        "SHAPE 1 — IDENTIFY THE PLAN FROM THE RULES: the stem lists network/referral/cost features and asks for the plan (“in-network only, but the emergency department visit out-of-state was covered” = EPO; “lower premiums, and her primary care physician must refer her to the dermatologist” = HMO; “he saw the out-of-network cardiologist directly, at a higher cost” = PPO). SHAPE 2 — IDENTIFY THE PAYMENT MODEL FROM THE UNIT: match the money's attachment (“one payment covered the elective hernia repair, the preoperative visit, and both postoperative visits” = global payment; “the group receives a fixed monthly sum for each enrolled patient whether or not she is seen” = capitation; “each visit and test is billed separately at the negotiated rate” = discounted fee-for-service). SHAPE 3 — MEDICARE VS MEDICAID ELIGIBILITY: route by the door — ≥65, <65 with certain disabilities, or ESRD (any age) = Medicare; limited income and/or resources = Medicaid, joint federal and state; both trace to Social Security Act amendments. SHAPE 4 — THE FOUR PARTS: match the Medicare part to the service (an inpatient hospital stay including hospice or skilled nursing = A; physician fees and diagnostic testing = B; A + B delivered by an approved private company = C; prescriptions = D). THE SILENCE TRAP: the page prints NO referral or cost rule for EPO and NO network/referral rules for ACO or HDHP — an option attributing a referral rule to an EPO (or a network rule to an HDHP) is testing whether you memorized the printed row or invented it.",
    },
    {
      kind: "callout",
      variant: "memory",
      title:
        "First Aid's own mnemonics — printed in the Medicare/Medicaid block's right panel, carried attributed",
      body:
        "The page prints TWO mnemonics of its own, in the right column of the Medicare and Medicaid block (VLM-adjudicated: the keyword letters — the big E, the big D, and the A/B/C/D letters — print in RED, the connecting words in black; square light-blue bullets mark the Part lines) — these are the source's hooks, carried VERBATIM and ATTRIBUTED, not KYP's: (1) “MedicarE is for Elderly. / MedicaiD is for Disadvantaged.” — the two government programs keyed by their capital letters: Medicare by age (≥65, plus <65 with certain disabilities and ESRD), Medicaid by means (limited income and/or resources, joint federal and state). (2) “The 4 parts of Medicare:” Part A = hospital Admissions, including hospice, skilled nursing; Part B = Basic medical bills (eg, physician fees, diagnostic testing); Part C = (parts A + B = Combo) delivered by approved private companies; Part D = prescription Drugs. The two KYP originals in the Memory section are marked as such: “HMO GATES AND SAVES; PPO ROAMS AND PAYS” (the member-facing axis: the gate and the price see-saw, with EPO the gate-free lock, PoS the hybrid, ACO the provider team, HDHP the deductible bet) and “PER SERVICE, PER INCIDENT, PER PATIENT” (the payment ladder: the unit of payment fixes who bears the risk).",
    },
  ],
  clinical: [
    {
      kind: "list",
      title:
        "The page's clinical anchors — where the sheet touches the ward",
      intro:
        "First Aid plants four clinical handles in the printed rows; each is a high-yield anchor for delivery-system questions and each bridges to another chapter.",
      items: [
        {
          lead: "THE ESRD DOOR — the disease that opens Medicare at any age",
          text: "“Medicare is available to patients ≥65 years old, <65 with certain disabilities, and those with end-stage renal disease.” ESRD is the one printed disease-specific eligibility door: a 40-year-old on hemodialysis qualifies for Medicare on the disease alone — the nephrology bridge (and the reason dialysis financing is a Medicare story in every health-systems discussion; KYP context for the bridge).",
        },
        {
          lead: "THE HSA PAIRING — the HDHP's printed companion",
          text: "“High deductible health plan (HDHP): low premiums, high out-of-pocket cost, compatible with health savings account (HSA).” The pairing is printed, not inferred — when a vignette offers a tax-advantaged savings account alongside a high deductible, the page has already made the match. The see-saw's extreme end: the lowest premium on the page buys the highest out-of-pocket exposure.",
        },
        {
          lead: "THE ELECTIVE-SURGERY EPISODE — global payment's printed vignette",
          text: "“Most commonly used during elective surgeries, as it covers the cost of surgery as well as the necessary pre- and postoperative visits.” The perioperative anchor: one payment owns the preoperative visit, the operation, and the postoperative visits — the scheduled, predictable episode is exactly where a single-incident payment is practical (the printed logic, made explicit).",
        },
        {
          lead: "THE REFERRAL WORKFLOW — the primary care gate in practice",
          text: "HMO members (and PoS members) “require primary care referral for specialists” — the ambulatory workflow consequence: a specialist visit without the referral is the classic denial scenario, while PPO members' “no referral requirement” is the counterweight. The ACO row adds the coordination side: providers voluntarily coordinating care for Medicare patients (KYP framing of the printed rows' workflow implications).",
        },
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 26-year-old woman whose health plan requires her to use in-network clinicians is treated at an out-of-network emergency department after a motor vehicle collision; the plan covers the visit.",
        discriminator:
          "In-network care required — but out-of-network coverage is available for emergencies; the printed EPO exception",
        concept: "Exclusive provider organization (EPO)",
        answer:
          "EPO — “Requires in-network care; out-of-network coverage available for emergencies.” The emergency exception is the plan's printed discriminator; routine out-of-network care would not be covered.",
      },
      {
        stem: "A physician group receives a fixed monthly payment for each patient enrolled with the group, the same amount whether a given patient is seen twice a month or not at all; the plan is an HMO product.",
        discriminator:
          "A set amount per patient per period of time, regardless of how much the patient uses the system — and the printed HMO tie-in",
        concept: "Capitation",
        answer:
          "Capitation — “Physicians receive a set amount per patient assigned to them per period of time, regardless of how much the patient uses the healthcare system. Used by some HMOs.” The physician bears the utilization risk for the panel.",
      },
      {
        stem: "For an elective total hip replacement, the insurer issues a single payment that covers the surgeon, the facility, and the necessary preoperative and postoperative visits.",
        discriminator:
          "All expenses of a single incident of care paid with a single payment — and the printed elective-surgery setting",
        concept: "Global payment",
        answer:
          "Global payment — “Insurer and/or patient pays for all expenses associated with a single incident of care with a single payment. Most commonly used during elective surgeries, as it covers the cost of surgery as well as the necessary pre- and postoperative visits.”",
      },
      {
        stem: "A 58-year-old man with end-stage renal disease on hemodialysis asks about government health coverage; in the same clinic, a 40-year-old woman with limited income and resources asks the same question.",
        discriminator:
          "The two doors: disease/disability/age (Medicare) versus means (Medicaid) — First Aid's own E/D mnemonic",
        concept: "Medicare vs Medicaid eligibility",
        answer:
          "The dialysis patient qualifies for MEDICARE — available to patients ≥65 years old, <65 with certain disabilities, and those with end-stage renal disease (“MedicarE is for Elderly.”). The limited-income patient qualifies for MEDICAID — “joint federal and state health assistance for people with limited income and/or resources” (“MedicaiD is for Disadvantaged.”). Both are federal social healthcare programs that originated from amendments to the Social Security Act.",
      },
    ],
    traps: [
      {
        a: "HMO — limited to in-network providers, referral required, lower premiums AND lower out-of-pocket cost",
        b: "PPO — in-network and out-of-network care, no referral requirement, higher cost for out-of-network services",
        whyConfused:
          "Both are member-facing plans priced by their networks; their rows even share the word “cost,” and the PoS row is printed as an explicit combination of the two",
        keyDifference:
          "The GATE and the SEE-SAW: the HMO gates specialists behind a primary care referral and prints both price ends low; the PPO removes the gate, opens both networks, and prices the out-of-network freedom higher. The HMO's economy buys exactly the constraints the PPO's price removes",
        clue:
          "“Requires primary care referral for specialists” + “lower premiums … lower out-of-pocket cost” = HMO; “no referral requirement” + “higher cost for out-of-network services” = PPO.",
      },
      {
        a: "EPO — requires in-network care; out-of-network coverage available for emergencies",
        b: "HMO — limited to in-network providers, referral required, lower premiums, lower out-of-pocket cost",
        whyConfused:
          "Both are network-locked plans; a stem that only mentions the closed network sits on the border between them",
        keyDifference:
          "The printed extras: the HMO row carries the referral gate and both cost claims; the EPO row carries ONLY the network rule plus the emergency exception. When the stem shows an out-of-network EMERGENCY covered, it is pointing at EPO; when it shows the referral gate or the lower prices, it is pointing at HMO",
        clue:
          "Emergency exception out-of-network = EPO; primary-care referral + cheaper both ways = HMO.",
      },
      {
        a: "Medicare — ≥65 years old, <65 with certain disabilities, end-stage renal disease",
        b: "Medicaid — joint federal and state health assistance for people with limited income and/or resources",
        whyConfused:
          "The names differ by one letter; both are federal social healthcare programs from amendments to the Social Security Act, and a poor 70-year-old can be eligible for both",
        keyDifference:
          "The DOOR: Medicare keys on age, disability, and one disease (ESRD, any age); Medicaid keys on means — limited income and/or resources — and is administered JOINTLY by federal and state governments. First Aid's own: “MedicarE is for Elderly. MedicaiD is for Disadvantaged.”",
        clue:
          "Age ≥65 / disabilities / dialysis = Medicare; limited income = Medicaid (state + federal). The E and the D are the doors.",
      },
      {
        a: "Capitation — set amount per patient per period of time, regardless of use",
        b: "Bundled payment — set amount per service, regardless of ultimate cost, divided among all involved",
        whyConfused:
          "Both hand the provider side a fixed sum that does not grow with what is actually done; both shift risk away from the payer",
        keyDifference:
          "The UNIT: capitation attaches to the PATIENT PANEL (per patient per period — the physician is paid even for patients never seen); bundled payment attaches to a SERVICE and is split among ALL providers and facilities involved in it. Global payment is the third rung — one payment for the whole INCIDENT (elective surgery + pre-/postoperative visits)",
        clue:
          "“Per patient … per period of time” = capitation; “per service … divided among all providers and facilities” = bundled; “single incident of care with a single payment” = global.",
      },
    ],
    pivots: [
      {
        lookAlike: "A “which payment model?” option list (five near-identical money words)",
        differentiator:
          "Route by the UNIT of payment before reading the options — to what is each dollar attached?",
        correctPath:
          "Each individual service = fee-for-service (discounted if the rate is predetermined by providers and payers, eg, PPOs); a set amount per service divided among all providers and facilities = bundled; one payment for all expenses of a single incident (elective surgery, pre-/postoperative visits) = global; a set amount per patient per period regardless of use (some HMOs) = capitation.",
      },
      {
        lookAlike: "A coverage-eligibility stem that never names the program",
        differentiator:
          "The door, not the diagnosis: age/disability/ESRD versus limited income and/or resources",
        correctPath:
          "≥65, or <65 with certain disabilities, or end-stage renal disease → Medicare (parts A Admissions / B Basic bills / C Combo via approved private companies / D Drugs); limited income and/or resources → Medicaid, joint federal and state. Both originated from amendments to the Social Security Act.",
      },
      {
        lookAlike: "A “referral required?” detail buried in a plan stem",
        differentiator:
          "Only the rows that PRINT a referral rule can be tested on it — the page's silences are deliberate",
        correctPath:
          "HMO (“requires primary care referral for specialists”) and PoS (“requires primary care referrals”) print the gate; PPO prints “no referral requirement”; EPO, ACO, and HDHP print no referral rule at all. An option pairing a referral rule with EPO is inventing what the page never printed.",
      },
    ],
    miniCase: {
      vignette:
        "A 34-year-old self-employed software consultant schedules a telehealth visit to choose next year's health plan. He is single, has no chronic conditions, takes no medications, and rarely uses the healthcare system. He asks for the plan with the lowest monthly premiums, says he is willing to pay more himself on the rare occasions he does get sick, and wants to know whether he can open a tax-advantaged savings account to pair with the plan for future medical expenses.",
      question:
        "Which of the following plans best fits this patient's request?",
      options: [
        {
          label: "A",
          text: "High deductible health plan paired with a health savings account (HSA)",
          correct: true,
          why: "CORRECT — the request names both ends of the printed see-saw plus the account: HDHP is “low premiums, high out-of-pocket cost, compatible with health savings account (HSA).” The lowest monthly price on the page comes bundled with the highest out-of-pocket exposure, and the HSA is the HDHP's printed companion — every element of his request maps onto the printed row.",
        },
        {
          label: "B",
          text: "Health maintenance organization (HMO)",
          why: "TEMPTING but wrong — the HMO also prints “lower premiums,” but it is “limited to in-network providers, requires primary care referral for specialists” and prints “lower out-of-pocket cost,” the opposite of his stated willingness to pay more when sick; the page ties the health savings account to the HDHP, not to the HMO.",
        },
        {
          label: "C",
          text: "Preferred provider organization (PPO)",
          why: "TEMPTING but wrong — the PPO's printed identity is “flexibility with in-network and out-of-network care, higher cost for out-of-network services, no referral requirement.” He never asked for network flexibility or direct specialist access, and the PPO row prints no low-premium claim and no HSA pairing.",
        },
        {
          label: "D",
          text: "Exclusive provider organization (EPO)",
          why: "TEMPTING but wrong — the EPO's printed row is entirely a network rule (“requires in-network care; out-of-network coverage available for emergencies”); it prints no premium claim, no out-of-pocket tradeoff, and no savings-account compatibility. It matches none of his three requests.",
        },
        {
          label: "E",
          text: "Accountable care organization (ACO)",
          why: "WRONG category — the ACO is “a group of providers who voluntarily coordinate care for Medicare patients”: a provider-side coordination model, not a member's plan choice, and this 34-year-old is not a Medicare patient.",
        },
      ],
      reasoning:
        "The question tests the cost see-saw and the printed HSA pairing. The stem fixes three constraints — lowest premiums, acceptance of high out-of-pocket cost when care happens, and a tax-advantaged companion account — and only the HDHP row prints all three: “Low premiums, high out-of-pocket cost, compatible with health savings account (HSA).” Option B fails on the second and third constraints (the HMO prints LOWER out-of-pocket cost and no HSA); option C fails on all three (flexibility priced higher, no HSA); option D's row prints only a network rule (the page is silent on EPO costs); option E is not a member-facing plan at all. The see-saw's extreme end is the healthy patient's rational choice — and the exam's signature HDHP stem.",
    },
  },
  mnemonics: [
    {
      code: "MedicarE is for Elderly. / MedicaiD is for Disadvantaged.",
      meaning:
        "FIRST AID'S OWN mnemonic, printed in the right panel of the Medicare and Medicaid block (carried verbatim, attributed; the capital E and D print in red): MedicarE keys on the Elderly — patients ≥65 years old, plus <65 with certain disabilities and those with end-stage renal disease; MedicaiD keys on the Disadvantaged — joint federal and state health assistance for people with limited income and/or resources.",
      memorizes:
        "The two federal social healthcare programs and the population each serves — the eligibility door each one keys on",
      whenToUse:
        "Any eligibility stem: age ≥65, certain disabilities, or ESRD → Medicare; limited income and/or resources → Medicaid. Both programs originated from amendments to the Social Security Act.",
      clinical:
        "The ESRD door makes dialysis financing a Medicare story at any age (KYP context for the bridge to nephrology), and the joint federal-state administration is why Medicaid rules vary by state (KYP context).",
    },
    {
      code: "The 4 parts of Medicare — A: Admissions · B: Basic bills · C: Combo · D: Drugs",
      meaning:
        "FIRST AID'S OWN mnemonic, printed in the same panel (carried verbatim, attributed; the A/B/C/D keyword letters print in red): Part A = hospital Admissions, including hospice, skilled nursing; Part B = Basic medical bills (eg, physician fees, diagnostic testing); Part C = (parts A + B = Combo) delivered by approved private companies; Part D = prescription Drugs.",
      memorizes:
        "The four Medicare parts and the service class each covers",
      whenToUse:
        "Any stem matching a service to a Medicare part: inpatient stays, hospice, skilled nursing → A; physician fees, diagnostic testing → B; A + B delivered by an approved private company → C; prescriptions → D.",
      clinical:
        "The Combo structure is the printed bridge to the plans table — Part C is Medicare coverage delivered through approved PRIVATE companies, the government program meeting the private-plan machinery (KYP framing of the printed line).",
    },
    {
      code: "HMO GATES AND SAVES; PPO ROAMS AND PAYS",
      meaning:
        "A KYP ORIGINAL — the member-facing axis in one line: the HMO gates (requires primary care referral for specialists) and saves (lower premiums, lower out-of-pocket cost) inside a limited network; the PPO lets the member roam (in-network and out-of-network care, no referral requirement) and pays for it (higher cost for out-of-network services). The other four rows hang off the same axis: EPO = the gate-free network lock (in-network only, emergencies excepted — the page prints no referral or cost rule); PoS = the hybrid (HMO's gate + PPO's priced escape); ACO = the provider team (voluntary coordination for Medicare patients); HDHP = the deductible bet (low premiums, high out-of-pocket, HSA).",
      memorizes:
        "All six plans in printed order, keyed to the two features the exam tests most — the referral gate and the price see-saw",
      whenToUse:
        "Any plan-identification stem: locate the gate (on = HMO/PoS; off = PPO; unprinted = EPO), then locate the price (both ends low = HMO; premium low/out-of-pocket high = HDHP; out-of-network premium = PPO/PoS).",
      clinical:
        "The gate is a real workflow: HMO and PoS members need the primary care referral BEFORE the specialist visit, and the out-of-network price tag is the PPO/PoS member's cost surprise (KYP context for the practice implications).",
    },
    {
      code: "PER SERVICE, PER INCIDENT, PER PATIENT — the wider the PER, the more risk shifts to the provider",
      meaning:
        "A KYP ORIGINAL — the payment ladder by unit of payment: PER SERVICE (fee-for-service — insurer and/or patient pays for each individual service; discounted fee-for-service is the same unit at a rate predetermined by providers and payers, eg, PPOs); PER SERVICE DIVIDED (bundled payment — a set amount per service, regardless of ultimate cost, divided among all providers and facilities involved); PER INCIDENT (global payment — one payment for all expenses of a single incident of care: the elective-surgery model covering surgery plus pre- and postoperative visits); PER PATIENT-PER-PERIOD (capitation — a set amount per patient assigned, regardless of use; used by some HMOs).",
      memorizes:
        "All five payment models in one ladder — the unit each attaches money to, and the direction risk travels as the unit widens",
      whenToUse:
        "Any payment-model stem: find what the money is attached to (a service, a divided service, an episode, a patient panel), then read off the model and the risk bearer — the payer holds per-service risk, the provider side holds per-incident and per-patient risk.",
      clinical:
        "The unit is also the incentive: per-service payment rewards doing more, per-patient payment rewards doing less — the reason utilization review and quality measures ride on the wide-unit models (KYP context beyond the printed rows).",
    },
  ],
  rapidReview: {
    s30: [
      "EPO — requires in-network care; out-of-network coverage available for emergencies (the page prints no referral or cost rule for EPO)",
      "HMO — lower premiums, limited to in-network providers, requires primary care referral for specialists, lower out-of-pocket cost",
      "PoS — combination of HMO and PPO; allows out-of-network care at higher cost; requires primary care referrals",
      "PPO — flexibility with in-network and out-of-network care, higher cost for out-of-network services, no referral requirement",
      "ACO — group of providers who voluntarily coordinate care for Medicare patients",
      "HDHP — low premiums, high out-of-pocket cost, compatible with health savings account (HSA)",
      "Bundled payment — set amount per service, regardless of ultimate cost, divided among all providers and facilities involved",
      "Capitation — set amount per patient assigned per period of time, regardless of use; used by some HMOs",
      "Discounted fee-for-service — per individual service at a discounted rate predetermined by providers and payers (eg, PPOs)",
      "Fee-for-service — insurer and/or patient pays for each individual service",
      "Global payment — one payment for all expenses of a single incident of care; elective surgeries (surgery + pre-/postoperative visits)",
      "Medicare — ≥65 years old, <65 with certain disabilities, end-stage renal disease; parts A Admissions (hospice, skilled nursing), B Basic bills, C Combo (A + B via approved private companies), D Drugs",
      "Medicaid — joint federal and state health assistance for people with limited income and/or resources",
    ],
    m3: [
      "“MedicarE is for Elderly. MedicaiD is for Disadvantaged.” — the two government doors (First Aid's own)",
      "A = hospital Admissions · B = Basic medical bills · C = Combo (A + B via private) · D = prescription Drugs (First Aid's own)",
      "HMO GATES AND SAVES; PPO ROAMS AND PAYS — the gate + see-saw axis; EPO locks, PoS hybridizes, ACO teams, HDHP bets the deductible (KYP)",
      "PER SERVICE, PER INCIDENT, PER PATIENT — the wider the unit, the more risk shifts payer → provider (KYP)",
    ],
    m10: [
      "Both programs are “federal social healthcare programs that originated from amendments to the Social Security Act” — and Medicaid is JOINT federal and state; Medicare Part C is the A + B Combo “delivered by approved private companies”",
      "The two printed cross-table ties: discounted fee-for-service's rate is “predetermined by providers and payers (eg, PPOs)” and capitation is “used by some HMOs” — the payment models are the plumbing under the plans",
      "The page's deliberate silences: no referral or cost rule printed for EPO; no network/referral/cost rules for ACO; no network/referral rule for HDHP — the decoder marks the silences instead of filling them",
      "Global payment's printed vignette is the perioperative episode — elective surgery, the preoperative visit, and the postoperative visits all under one payment; bundled payment's signature is “regardless of ultimate cost … divided among all providers and facilities involved”",
    ],
  },
  recall: [
    {
      q: "Which plan requires in-network care while still covering out-of-network emergencies — and what rules does its printed row NOT contain?",
      a: "Exclusive provider organization (EPO) — requires in-network care; out-of-network coverage available for emergencies. The row prints no referral rule and no premium/out-of-pocket rule: its whole identity is the network lock plus the emergency exception.",
    },
    {
      q: "Which two plans print a primary care referral requirement, and which plan prints the absence of one?",
      a: "HMO (“requires primary care referral for specialists”) and PoS (“requires primary care referrals”) print the gate; PPO prints “no referral requirement.” EPO, ACO, and HDHP print no referral rule at all.",
    },
    {
      q: "What distinguishes a PPO from an HMO in the table's own words — list all four printed contrasts.",
      a: "PPO: flexibility with in-network and out-of-network care, higher cost for out-of-network services, no referral requirement. HMO: lower premiums, limited to in-network providers, requires primary care referral for specialists, lower out-of-pocket cost.",
    },
    {
      q: "What is an ACO, and why is it not a member-facing network plan?",
      a: "An accountable care organization is “a group of providers who voluntarily coordinate care for Medicare patients” — a provider-side coordination model tied to Medicare; the row prints no network, referral, or member-cost rules.",
    },
    {
      q: "Which plan pairs low premiums with high out-of-pocket cost, and what account is it compatible with?",
      a: "The high deductible health plan (HDHP) — low premiums, high out-of-pocket cost, compatible with the health savings account (HSA).",
    },
    {
      q: "Name the payment model: physicians receive a set amount per patient assigned to them per period of time, regardless of how much the patient uses the healthcare system — and who uses it?",
      a: "Capitation — used by some HMOs. The physician bears the utilization risk for the panel.",
    },
    {
      q: "Name the payment model used for elective surgeries that covers the surgery and the necessary pre- and postoperative visits with one payment.",
      a: "Global payment — the insurer and/or patient pays for all expenses associated with a single incident of care with a single payment.",
    },
    {
      q: "In discounted fee-for-service, who pays, for what unit, and at what rate?",
      a: "The insurer and/or patient pays for each individual service at a discounted rate predetermined by providers and payers (eg, PPOs) — the same per-service unit as fee-for-service, at a pre-negotiated price.",
    },
    {
      q: "Who qualifies for Medicare, who qualifies for Medicaid, and where did both programs come from?",
      a: "Medicare: patients ≥65 years old, <65 with certain disabilities, and those with end-stage renal disease (“MedicarE is for Elderly.”). Medicaid: joint federal and state health assistance for people with limited income and/or resources (“MedicaiD is for Disadvantaged.”). Both are federal social healthcare programs that originated from amendments to the Social Security Act.",
    },
    {
      q: "List the 4 parts of Medicare with First Aid's own keyword for each.",
      a: "Part A: hospital Admissions, including hospice, skilled nursing. Part B: Basic medical bills (eg, physician fees, diagnostic testing). Part C: (parts A + B = Combo) delivered by approved private companies. Part D: prescription Drugs.",
    },
  ],
  related: [
    {
      title: "Disease prevention levels and prophylaxis — the subsection opener",
      note:
        "The immediately preceding page of Healthcare Delivery (book 276): the prevention pyramid (primary through quaternary) and the six prophylaxis protocols. The subsection's arc runs prevention → insurance and payment → errors and quality: what care should happen (prevention) is the first half of the coverage question (what a plan will pay for), and this page is the money-side grammar of the same delivery system.",
      topicId: "disease-prevention-prophylaxis",
    },
    {
      title: "Patient safety and quality improvement — the systems sibling",
      note:
        "The immediately following page (book 278): palliative care, types of medical errors, and error analysis. The two pages share the systems lens: this page's wide-unit payment models (bundled, global, capitation) attach money to episodes and panels — the financial machinery behind coordinated, measured care — and the error/QI page supplies the safety science that coordinated care is meant to improve (KYP context for the linkage).",
      topicId: "patient-safety-quality",
    },
    {
      title: "Challenging patient and ethical scenarios — the behavioral layer",
      note:
        "Books 274–275 of the same chapter: difficult encounters, boundaries, and physician behavior. Insurance and payment stems can be wrapped in behavioral frames — a patient demanding an uncovered service, a referral dispute, a gift from a grateful family — and the same chapter supplies both halves of those vignettes (KYP context for the pairing).",
      topicId: "challenging-scenarios",
    },
    {
      title: "Core ethical principles — justice and the two doors",
      note:
        "Book 268: autonomy, beneficence, nonmaleficence, and justice. Justice — fair allocation of scarce resources — is the ethical backbone of the two government programs printed here: Medicare's age/disability/ESRD doors and Medicaid's means-tested door are two different enactments of who deserves society's help (KYP context connecting the print to the principle).",
      topicId: "core-ethical-principles",
    },
  ],
  crossLinks: [
    {
      subject: "Nephrology — chronic kidney disease and dialysis",
      connection:
        "End-stage renal disease is the one disease-specific Medicare eligibility door printed on this page: ESRD patients qualify for Medicare regardless of age, which is why dialysis financing in the United States is a Medicare story — every CKD/ESRD chapter's epidemiology and cost discussion runs through this single printed clause.",
    },
    {
      subject: "Ambulatory and primary care — the gatekeeper workflow",
      connection:
        "The HMO's and PoS's printed primary care referral requirement is the gatekeeper model in action: primary care physicians manage the network's narrowness by controlling specialist access, while the PPO's “no referral requirement” is direct access. The referral clause is where health policy meets the daily clinic schedule.",
    },
    {
      subject: "Surgery — the perioperative period",
      connection:
        "Global payment's printed example is a surgical episode: one payment covering the cost of surgery plus the necessary pre- and postoperative visits. Elective surgery is the test case because the episode is scheduled and its boundaries definable — the same perioperative timeline (preoperative evaluation → operation → postoperative care) taught in the surgery chapters is the unit of payment here.",
    },
    {
      subject: "Pharmacology and prescribing — Part D and drug coverage",
      connection:
        "Medicare Part D is prescription Drugs — the part that touches every prescribing decision for Medicare patients. The payment side of pharmacology (formularies, tiered copays, the donut-hole history) all hangs off this one printed part (the specifics beyond the printed line are KYP context).",
    },
  ],
};
