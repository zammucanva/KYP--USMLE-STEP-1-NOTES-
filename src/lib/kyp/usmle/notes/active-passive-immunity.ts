import type { KypUsMLENote } from "../types";

// Immunology — Immune Responses (E-batch 34).
// Source: First Aid 2026, Part 1 pdf 130-131 / book 108-109
// (Passive vs active immunity; Vaccination; live attenuated; killed/inactivated;
//  subunit, recombinant, polysaccharide, conjugate; toxoid; mRNA)

export const activePassiveImmunity: KypUsMLENote = {
  id: "active-passive-immunity",
  title: "Active vs Passive Immunity & Vaccination",
  subtitle:
    "The two routes to acquired immunity and the five designs vaccines come in. ACTIVE immunity is exposure to exogenous antigens — onset slow, duration long-lasting (memory): natural infection, vaccines, toxoids. PASSIVE immunity is receiving preformed antibodies — onset rapid, duration short (antibody half-life = 3 weeks): IgA in breast milk, maternal IgG crossing the placenta, antitoxin, humanized monoclonal antibody; IVIG and other immune globulin preparations provide temporary but specific passive immunity. Vaccination induces an active immune response (humoral and/or cellular) to specific pathogens, and the five designs trade safety against response strength: LIVE ATTENUATED (nonpathogenic organisms with transient growth — cellular + humoral, strong often lifelong immunity; may revert to virulence; contraindicated in pregnancy and immunodeficiency, with the HIV CD4 ≥200 exception for MMR/varicella), KILLED/INACTIVATED (heat or chemical inactivation with epitope structure maintained — safer, mainly humoral, boosters usually needed), SUBUNIT/RECOMBINANT/POLYSACCHARIDE/CONJUGATE (specific antigens — fewer adverse reactions, expensive, weaker; PPSV23 is T-cell-independent while conjugation to a carrier protein produces a T-cell-dependent response), TOXOID (denatured toxin with intact receptor binding site — tetanus and diphtheria; antitoxin wanes, boosters needed), and mRNA (lipid nanoparticles delivering mRNA for cells to synthesize foreign protein — high efficacy, cellular + humoral, safe in pregnancy; transient systemic reactions common, rare myocarditis/pericarditis in young males). Combined passive and active immunization is given for hepatitis B or rabies exposure.",
  subject: "Immunology",
  system: "Section II · High-Yield General Principles — Immune Responses",
  pilotCategory: "Immune Responses — active vs passive axes (means/onset/duration/examples), vaccine type spectrum (live attenuated, killed, subunit/conjugate, toxoid, mRNA) with pros/cons/examples, conjugate-vaccine T-cell trick, combined immunization for HBV/rabies exposure",
  difficulty: 2,
  readTime: 8,
  sourceRef:
    "First Aid 2026, Part 1 pp. 108–109 (Passive vs active immunity; Vaccination)",
  tags: [
    "active immunity",
    "passive immunity",
    "preformed antibodies",
    "antibody half-life",
    "IVIG",
    "antitoxin",
    "humanized monoclonal antibody",
    "maternal IgG",
    "breast milk IgA",
    "vaccination",
    "vaccine types",
    "live attenuated vaccine",
    "killed vaccine",
    "inactivated vaccine",
    "subunit vaccine",
    "recombinant vaccine",
    "polysaccharide vaccine",
    "conjugate vaccine",
    "toxoid",
    "mRNA vaccine",
    "lipid nanoparticle",
    "boosters",
    "memory",
    "booster shots",
    "MMR",
    "varicella",
    "BCG",
    "Sabin polio",
    "Salk polio",
    "smallpox",
    "yellow fever",
    "rotavirus",
    "hepatitis A vaccine",
    "rabies vaccine",
    "HBsAg",
    "HPV vaccine",
    "acellular pertussis",
    "PPSV23",
    "PCV13",
    "Hib",
    "tetanus toxoid",
    "diphtheria toxoid",
    "SARS-CoV-2",
    "myocarditis",
    "T-cell-dependent response",
    "T-cell-independent response",
  ],
  core: {
    what: "The two routes of acquired immunity: PASSIVE — receiving preformed antibodies; onset rapid; duration short (span of antibodies, half-life = 3 weeks); examples IgA in breast milk, maternal IgG crossing the placenta, antitoxin, humanized monoclonal antibody; IVIG and other immune globulin preparations can be administered to provide temporary but specific passive immunity to a target pathogen. ACTIVE — exposure to exogenous antigens; onset slow; duration long-lasting protection (memory); examples natural infection, vaccines, toxoid. Vaccination induces an active immune response (humoral and/or cellular) to specific pathogens, in five designs: LIVE ATTENUATED — microorganism rendered nonpathogenic but retaining capacity for transient growth within the inoculated host; pros: induces cellular and humoral responses, strong often lifelong immunity; cons: may revert to virulent form, contraindicated in pregnancy and immunodeficiency (certain live vaccines — MMR, varicella — may be given to people living with HIV with CD4+ counts ≥200 cells/mm³ in consultation with a specialist); examples: adenovirus (nonattenuated, military recruits), typhoid (Ty21a, oral), polio (Sabin), varicella, smallpox, BCG, yellow fever, influenza (intranasal), MMR, rotavirus. KILLED OR INACTIVATED — pathogen inactivated by heat or chemicals, maintaining epitope structure on surface antigens; mainly humoral; pros: safer than live vaccines; cons: weaker cell-mediated response, boosters usually needed; examples: hepatitis A, typhoid (Vi polysaccharide, intramuscular), rabies, influenza (intramuscular), polio (Salk). SUBUNIT, RECOMBINANT, POLYSACCHARIDE, AND CONJUGATE — all use specific antigens that best stimulate the immune system; pros: targets specific epitopes with fewer adverse reactions; cons: expensive, weaker immune response; examples: HBV (HBsAg), HPV, acellular pertussis, N meningitidis, S pneumoniae (PPSV23 polysaccharide is primarily T-cell-independent; a polysaccharide conjugated to a carrier protein produces a T-cell-dependent response), Hib, herpes zoster. TOXOID — denatured bacterial toxin with intact receptor binding site; stimulates antibodies without disease potential; pros: protects against bacterial toxins; cons: antitoxin levels decrease with time, so booster shots may be needed; examples: Clostridium tetani, Corynebacterium diphtheriae. mRNA — a lipid nanoparticle delivers mRNA, causing cells to synthesize foreign protein (eg, SARS-CoV-2 spike); pros: high efficacy, cellular and humoral immunity, safe in pregnancy; cons: local and transient systemic reactions (fatigue, headache, myalgia) common, rare myocarditis/pericarditis particularly in young males; examples: SARS-CoV-2, adult RSV lower respiratory tract disease, CMV (congenital and immunocompromised), melanoma (therapeutic vaccine). Combined passive and active immunizations can be given for hepatitis B or rabies exposure.",
    why: "This page is the applied immunology every vaccination question runs on. The active/passive split explains the timing logic of every exposure scenario: rabies and HBV exposures get BOTH (passive immune globulin for immediate neutralization while the vaccine builds active memory) because the pathogen's incubation period outruns active onset; maternal IgG protects the neonate passively and wanes by months 3-6 (E28's timeline); IVIG buys specific protection for the immunodeficient. The vaccine-type spectrum is a safety-versus-strength trade: live attenuated organisms replicate transiently, so they drive both arms and often lifelong immunity — but they can revert and cannot be given to pregnancy or immunodeficiency (the CD4 ≥200 HIV exception is tested verbatim); killed vaccines are safe but humoral-only and booster-hungry; subunits trade epitope precision for weaker responses; conjugation is the engineering fix that converts T-independent polysaccharides into T-dependent ones — the immunologic logic distinguishing PPSV23 from PCV13 and explaining why conjugates work in infants; toxoids handle the toxin-mediated diseases but wane; and mRNA vaccines turned the host cell into the antigen factory — cellular plus humoral immunity, pregnancy-safe, with the young-male myocarditis caveat. Each vaccine's type predicts its schedule, its contraindications, and its failure modes.",
    keyIdea: "Sort every immunity question into two axes. AXIS ONE — WHO made the antibodies: active (your immune system, exposed to exogenous antigen: slow onset, long-lasting memory) vs passive (preformed antibodies: rapid onset, ~3-week half-life, gone). AXIS TWO — if active, WHICH design: LIVE attenuated (transient growth → cellular + humoral, often lifelong; revert risk; no pregnancy/immunodeficiency; HIV CD4 ≥200 exception) — Sabin polio, Ty21a oral typhoid, MMR, varicella, BCG, yellow fever, intranasal influenza, rotavirus, smallpox, adenovirus (military); KILLED/inactivated (epitopes intact, no replication → mainly humoral, boosters) — hepatitis A, Vi IM typhoid, rabies, IM influenza, Salk polio; SUBUNIT/conjugate (specific antigens; PPSV23 T-independent vs conjugate T-dependent with switching and memory) — HBsAg, HPV, aP, meningococcal, pneumococcal, Hib, zoster; TOXOID (denatured toxin, intact binding site; antitoxin wanes → boosters) — tetanus, diphtheria; mRNA (lipid nanoparticle → cells synthesize the antigen; cellular + humoral, pregnancy-safe; transient systemic reactions, rare young-male myocarditis) — SARS-CoV-2, RSV, CMV, melanoma therapeutic. Exposure protocols: HBV and rabies get passive + active TOGETHER — antibodies now, memory later.",
  },
  mechanisms: [
    {
      id: "vaccine-design-response-logic",
      title: "Why each vaccine design produces the response it does",
      context: "Vaccine type → immune response strength and character",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A vaccine antigen is introduced (organism, subunit, toxoid, or mRNA)",
            sublabel: "Input — what the immune system sees determines what it learns.",
            variant: "input",
          },
          {
            id: "s1",
            label: "REPLICATION-DRIVEN RESPONSES: live attenuated organisms grow transiently in the host — driving BOTH cellular and humoral arms (strong, often lifelong immunity), and mRNA vaccines make the host's own cells synthesize the antigen — the same dual-arm effect without live organisms",
            sublabel: "Process — intracellular antigen production recruits MHC I presentation and CTLs, not just antibody.",
            variant: "process",
          },
          {
            id: "s2",
            label: "NO-REPLICATION RESPONSES: killed vaccines (epitopes intact) and subunits present exogenous antigen only — mainly humoral responses, weaker cell-mediated arms, and booster shots to re-expose",
            sublabel: "Process — no intracellular growth means no endogenous-MHC I display; humoral immunity carries the protection.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE CONJUGATE FIX: polysaccharides alone are T-cell-independent (weak, no switching, no memory); conjugating them to a carrier protein recruits Th-cell help — T-cell-dependent response with class switching and memory",
            sublabel: "Process — E28's antigen-type biology, engineered: the carrier protein lends the polysaccharide a T-cell face.",
            variant: "process",
          },
          {
            id: "o1",
            label: "Immunity achieved: type-specific strength (lifelong for live; booster-dependent for killed/subunit/toxoid; dual-arm for mRNA), with type-specific cautions (reversion and contraindications for live; waning antitoxin for toxoids; young-male myocarditis for mRNA)",
            sublabel: "Output — and for exposures that outrun active onset (HBV, rabies): passive immune globulin PLUS active vaccine — antibodies now, memory later.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "antigen design" },
          { from: "s1", to: "s2", label: "replication or not" },
          { from: "s2", to: "s3", label: "T help or not" },
          { from: "s3", to: "o1", label: "protection profile" },
        ],
        caption:
          "Every vaccine design is an answer to the question: how do I get the right arm of the immune system to see the right antigen for long enough? Live attenuated organisms answer it maximally — transient growth means real infection without disease, endogenous antigen on MHC I for CTLs, exogenous antigen for antibodies, and memory that is often lifelong; the price is revertance and the absolute bars of pregnancy and immunodeficiency (with the CD4 ≥200 HIV exception for MMR and varicella, made in consultation with a specialist). mRNA vaccines reproduce the key feature — the host cell makes the antigen — by delivering the instructions in a lipid nanoparticle: spike protein synthesized in situ drives cellular and humoral immunity, is safe in pregnancy, and carries the transient-reaction and rare young-male myocarditis caveats. Killed and inactivated vaccines give the system a dead but epitope-faithful pathogen: safe, but with no replication there is no endogenous presentation — the response is mainly humoral and booster-hungry. Subunit designs narrow exposure to the best antigens (HBsAg, HPV capsid, acellular pertussis), trading breadth for safety. The conjugate vaccines solve the infant's problem: pure polysaccharides are T-independent (E28 — no switching, no memory), so PPSV23 underperforms in the young; conjugating the polysaccharide to a carrier protein recruits Th help and converts the response to T-dependent — the design logic of PCV13, Hib, and the meningococcal conjugates. Toxoids handle the toxin-mediated diseases by presenting a denatured toxin with its receptor-binding site intact — immunity to the toxin, not the organism — with waning antitoxin levels that schedule the boosters. And when exposure outruns active onset — rabies and hepatitis B — the protocol combines passive immune globulin (immediate antibodies) with the active vaccine (memory for later): both windows covered.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "vaccine-type-spectrum",
      title: "The active/passive axes and the five-design vaccine spectrum",
      caption:
        "An original KYP diagram: the active (exogenous antigen, slow onset, memory) vs passive (preformed antibodies, rapid onset, 3-week half-life, IVIG) strip; five vaccine-type cards (live attenuated, killed/inactivated, subunit/conjugate, toxoid, mRNA) each with WHAT/PROS/CONS/EXAMPLES; the conjugate-trick panel (PPSV23 T-independent vs carrier-protein conjugation restoring T-dependent switching and memory); and the combined-protocol card (HBV/rabies exposure: passive now + active later).",
      notice:
        "The source tables are pure vector (p131's rasters are decorative spotlights, not content); this visual is an original KYP teaching diagram. FA's printed mnemonics ('Attention teachers!...', 'A TRIP could Kill you') are NOT reproduced.",
    },
    {
      kind: "table",
      title: "Passive vs active immunity — verbatim",
      intro: "The source's comparison table, verbatim.",
      columns: ["", "Passive", "Active"],
      rows: [
        ["MEANS OF ACQUISITION", "Receiving preformed antibodies", "Exposure to exogenous antigens"],
        ["ONSET", "Rapid", "Slow"],
        ["DURATION", "Short span of antibodies (half-life = 3 weeks)", "Long-lasting protection (memory)"],
        ["EXAMPLES", "IgA in breast milk, maternal IgG crossing placenta, antitoxin, humanized monoclonal antibody", "Natural infection, vaccines, toxoid"],
        ["NOTES", "IVIG and other immune globulin preparations can be administered to provide temporary but specific passive immunity to a target pathogen", "Combined passive and active immunizations can be given for hepatitis B or rabies exposure"],
      ],
      caption:
        "Read the axes as the exposure-medicine clock: passive covers today (preformed antibodies, half-life three weeks), active covers forever (memory) but arrives slowly — which is why rabies and HBV exposures take both. The maternal IgG and breast-milk IgA entries are the passive examples that connect to E28's maternal-infant timeline.",
    },
    {
      kind: "table",
      title: "The five vaccine types — verbatim",
      intro: "The source's vaccination table (VACCINE TYPE / DESCRIPTION / PROS/CONS / EXAMPLES), verbatim.",
      columns: ["Vaccine type", "Description · Pros · Cons · Examples"],
      rows: [
        ["Live attenuated", "Microorganism rendered nonpathogenic but retains capacity for transient growth within inoculated host. Pros: induces cellular and humoral responses; induces strong, often lifelong immunity. Cons: may revert to virulent form; contraindicated in pregnancy and patients with immunodeficiency. Certain live vaccines (MMR, varicella) may be given to people living with HIV who have a CD4+ cell count ≥200 cells/mm³ in consultation with a specialist. Examples: Adenovirus (nonattenuated, given to military recruits), typhoid (Ty21a, oral), polio (Sabin), varicella (chickenpox), smallpox, BCG, yellow fever, influenza (intranasal), MMR, rotavirus."],
        ["Killed or inactivated", "Pathogen is inactivated by heat or chemicals. Maintaining epitope structure on surface antigens is important for immune response. Pros: safer than live vaccines. Cons: weaker cell-mediated immune response; mainly induces a humoral response. Booster shots usually needed. Examples: Hepatitis A, Typhoid (Vi polysaccharide, intramuscular), Rabies, Influenza (intramuscular), Polio (Salk)."],
        ["Subunit, recombinant, polysaccharide, and conjugate", "All use specific antigens that best stimulate the immune system. Pros: targets specific epitopes of antigen → ↓ adverse reactions. Cons: expensive; weaker immune response. Examples: HBV (antigen = HBsAg), HPV, acellular pertussis (aP), N meningitidis (various strains), S pneumoniae (PPSV23 polysaccharide primarily T-cell–independent response; a polysaccharide conjugated to a carrier protein produces a T-cell–dependent response), Hib, herpes zoster."],
        ["Toxoid", "Denatured bacterial toxin with an intact receptor binding site. Stimulates immune system to make antibodies without potential for causing disease. Pros: protects against the bacterial toxins. Cons: antitoxin levels decrease with time, thus booster shots may be needed. Examples: Clostridium tetani, Corynebacterium diphtheriae."],
        ["mRNA", "A lipid nanoparticle delivers mRNA, causing cells to synthesize foreign protein (eg, spike protein of SARS-CoV-2). Pros: high efficacy; induces cellular and humoral immunity; safe in pregnancy. Cons: local and transient systemic (fatigue, headache, myalgia) reactions are common; rare myocarditis, pericarditis particularly in young males. Examples: SARS-CoV-2, adult RSV lower respiratory tract disease, CMV (congenital and immunocompromised), melanoma (therapeutic vaccine)."],
      ],
      caption:
        "Read the table as one trade (replication → response strength) with one exception (mRNA achieves live-vaccine-like dual-arm immunity without live organisms) and one engineering fix (conjugation converts T-independent polysaccharides into T-dependent antigens). The Sabin/Salk polio pair and the Ty21a/Vi typhoid pair are the classic type-identification stems; 'adenovirus (nonattenuated, military recruits)' is the page's own exception to its own rule.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "Combined passive + active immunization — why rabies and HBV get both",
      body: "When an exposure's incubation period can outrun active immunity's slow onset, the protocol covers both windows: passive immune globulin provides immediate neutralizing antibodies (rapid onset, ~3-week half-life) while the simultaneously administered vaccine builds active, long-lasting memory. Hepatitis B exposure: HBIG plus the HBV vaccine series. Rabies exposure: human rabies immune globulin (infiltrated around the wound) plus the rabies vaccine series. The combined logic is the page's closing note and the exposure-medicine standard — antibodies now, memory later, nothing left uncovered.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 24-year-old veterinary technician is bitten on the hand by a bat later found rabid; she has never been vaccinated against rabies.",
        discriminator: "High-risk exposure in an unvaccinated host",
        concept: "Combined passive + active immunization for rabies exposure",
        answer:
          "Rabies exposure in an unvaccinated person gets BOTH: human rabies immune globulin (passive — preformed antibodies infiltrated around the wound for immediate neutralization) and the rabies vaccine series (active — killed vaccine building memory). The combination exists because rabies' incubation period can outrun active immunity's onset; the passive antibodies cover the window the vaccine needs to work. (The rabies vaccine itself is a killed/inactivated preparation.)",
      },
      {
        stem: "A 28-year-old woman at 14 weeks' gestation asks which vaccines she should receive this pregnancy; she is due for her influenza immunization and asks about the MMR booster she missed.",
        discriminator: "Vaccine type vs pregnancy contraindication",
        concept: "Live attenuated vaccines contraindicated in pregnancy; mRNA and IM inactivated influenza safe",
        answer:
          "Live attenuated vaccines (MMR, varicella, intranasal influenza, etc.) are contraindicated in pregnancy — transient replication poses reversion and fetal-infection risk; MMR waits until postpartum (with counseling to avoid conception for a period after). Inactivated intramuscular influenza vaccine is recommended in pregnancy (any trimester), and mRNA vaccines are explicitly safe in pregnancy. Tdap (toxoid-containing) is given each pregnancy for passive maternal-to-fetal antibody transfer (IgG crossing the placenta).",
      },
      {
        stem: "A 9-month-old completes the pneumococcal conjugate series (PCV13) but will later receive PPSV23; his immunology-savvy pediatrician explains why the two vaccines differ in design.",
        discriminator: "Polysaccharide vs conjugate design",
        concept: "The conjugate trick — T-independent polysaccharide gains a T-cell face",
        answer:
          "PPSV23 is pure capsular polysaccharide — a T-cell-INdependent antigen (E28): weak, IgM-leaning, no class switching, no memory, and poorly immunogenic under age 2 — hence boosters and adjuvants in its schedule. Conjugate vaccines (PCV13, Hib, meningococcal conjugates) chemically link the polysaccharide to a carrier protein, producing a T-cell-DEPENDENT response: Th-cell help, class switching, and immunologic memory — effective in infants, whose T-independent responses are immature. The conjugate design is the answer to 'why does the infant schedule use PCV13 first?'",
      },
    ],
    traps: [
      {
        a: "All polio vaccines are live attenuated",
        b: "SABIN = live attenuated (oral); SALK = killed/inactivated (intramuscular)",
        whyConfused: "Both bear the same antigen and both eliminated polio in different campaigns.",
        keyDifference:
          "The two polio vaccines split the spectrum: Sabin (oral) is live attenuated — transient gut replication, strong mucosal immunity, rare reversion to virulence (vaccine-derived polio); Salk (intramuscular) is killed — safer, humoral, no reversion, boosters. The typhoid pair is the same exam pattern: Ty21a oral = live attenuated; Vi polysaccharide IM = killed/subunit.",
        clue: "Any polio- or typhoid-vaccine-type question.",
      },
      {
        a: "Live vaccines can be given to any HIV-positive patient who wants them",
        b: "Live vaccines are contraindicated in immunodeficiency EXCEPT the CD4 ≥200 exception (MMR, varicella, with specialist consultation)",
        whyConfused: "The exception makes the rule feel negotiable.",
        keyDifference:
          "The printed rule is precise: live vaccines are contraindicated in pregnancy and immunodeficiency; the carve-out is that MMR and varicella MAY be given to people living with HIV whose CD4+ count is ≥200 cells/mm³, in consultation with an infectious disease or immunology specialist. Below 200 (AIDS-defining range), the reversion/replication risk wins and the vaccines are withheld.",
        clue: "Any HIV-and-vaccines question with a CD4 count in the stem.",
      },
      {
        a: "Passive immunity lasts as long as active immunity",
        b: "Passive immunity lasts a SHORT span — antibody half-life ≈ 3 weeks",
        whyConfused: "Protection feels like protection.",
        keyDifference:
          "Passive = preformed antibodies with a half-life of about three weeks: rapid onset, no memory, gone. Active = antigen-driven with memory: slow onset, long-lasting. Every exposure question is timing: need cover today (passive) or cover forever (active) or both (HBV/rabies). IVIG is the pharmacologic passive form — 'temporary but specific passive immunity to a target pathogen.'",
        clue: "Any onset/duration or IVIG-purpose question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Live attenuated vs killed/inactivated (the core vaccine-type split)",
        differentiator: "Replication, response arms, and contraindications",
        correctPath:
          "Live attenuated: transient growth in the host → cellular + humoral, strong often lifelong immunity; may revert; contraindicated in pregnancy and immunodeficiency (CD4 ≥200 HIV exception). Killed: inactivated by heat/chemicals, epitope structure maintained, no replication → mainly humoral, safer, booster shots usually needed. Sorting any named vaccine (Sabin vs Salk; Ty21a vs Vi; intranasal vs IM influenza) between these two rows is the most-tested vaccine skill.",
      },
      {
        lookAlike: "Subunit vs conjugate (the polysaccharide fix)",
        differentiator: "T-cell help or its absence",
        correctPath:
          "Pure subunit/polysaccharide (PPSV23): specific antigen, T-cell-INdependent — ↓ adverse reactions but expensive and weaker, no switching/memory, poor under age 2. Conjugate (PCV13, Hib, MenACWY): polysaccharide + carrier protein = T-cell-DEPENDENT — class switching and memory, infant-effective. The conjugate's carrier protein is literally the T-cell face the polysaccharide lacked (E28's antigen-type biology, engineered).",
      },
    ],
    miniCase: {
      vignette:
        "A 30-year-old wildlife rehabilitator is bitten on the forearm while feeding an unvaccinated raccoon that later tests positive for rabies. She cleaned the wound immediately and presents two hours after the bite. She received all routine childhood immunizations but has never received a rabies vaccine; she is not pregnant and has no chronic illnesses. The wound is irrigated and sutured, and the clinic prepares post-exposure prophylaxis.",
      question:
        "Which post-exposure prophylaxis regimen is most appropriate for this patient?",
      options: [
        {
          label: "A",
          text: "Human rabies immune globulin infiltrated around the wound plus a series of rabies vaccinations",
          correct: true,
          why: "Correct — combined passive and active immunization. She is unvaccinated, so the regimen is human rabies immune globulin (passive: preformed, rapid-onset antibodies infiltrated around the wound for immediate neutralization — covering the window while her immune response develops) PLUS the rabies vaccine series (active: killed/inactivated vaccine inducing long-lasting memory). The page's closing note names exactly this: combined passive and active immunizations can be given for hepatitis B or rabies exposure.",
        },
        {
          label: "B",
          text: "Rabies vaccine series alone, since the vaccine will neutralize the virus",
          why: "Active immunity has a SLOW onset — the vaccine-induced antibody response may lag the rabies virus's centrifugal spread along peripheral nerves to the CNS. Without passive antibodies, the window between exposure and immune response is uncovered; that is the reason the combined protocol exists.",
        },
        {
          label: "C",
          text: "Human rabies immune globulin alone, for this and all future exposures",
          why: "Immune globulin is passive: rapid but short-lived (antibody half-life ≈ 3 weeks), with no memory — it covers this exposure only and leaves her unprotected against the next. The vaccine series adds the durable memory; globulin alone is incomplete prophylaxis.",
        },
        {
          label: "D",
          text: "A single dose of a live attenuated rabies vaccine with booster monitoring",
          why: "There is no live attenuated rabies vaccine in use; the human vaccine is killed/inactivated. Live designs are contraindicated where killed alternatives exist in exposed hosts, and this stem's error is exactly the type-sorting the exam tests (Sabin vs Salk logic applied to rabies).",
        },
        {
          label: "E",
          text: "Tetanus toxoid booster alone, since the wound is clean",
          why: "A toxoid booster addresses tetanus-prone wound management — a different toxin-mediated question — and does nothing for rabies exposure. The raccoon's positive test makes rabies prophylaxis mandatory: immune globulin plus vaccine series, with tetanus coverage as a parallel consideration only.",
        },
      ],
      reasoning:
        "The vignette is the page's combined-protocol note in clinical dress: an unvaccinated patient with a documented rabies exposure needs BOTH windows covered — passive immune globulin for immediate neutralization (rapid onset, ~3-week half-life) and the active killed-vaccine series for long-lasting memory (slow onset, durable). The distractors each drop half the logic (vaccine alone leaves the early window open; globulin alone leaves the future open) or mis-sort the vaccine type (live attenuated) or treat a different pathogen (tetanus toxoid).",
    },
  },
  mnemonics: [
    {
      code: "\u201cPassive is borrowed armor — instant, gone in three weeks; active is forged armor — slow to make, yours for life.\u201d",
      meaning:
        "KYP's key for the two routes: passive immunity is borrowed (preformed antibodies — maternal IgG across the placenta, breast-milk IgA, antitoxin, IVIG, humanized monoclonals): rapid onset, short span (half-life ≈ 3 weeks), no memory. Active immunity is forged in response to exogenous antigen (natural infection, vaccines, toxoids): slow onset, long-lasting memory. Exposures that outrun forging (rabies, HBV) get both.",
      memorizes: "Active vs passive — means, onset, duration, examples",
      whenToUse: "Any immunity-route or exposure-prophylaxis question.",
      clinical: "IVIG = 'temporary but specific passive immunity to a target pathogen.'",
    },
    {
      code: "\u201cReplication is the teacher: live lessons last; dead lessons need review.\u201d",
      meaning:
        "KYP's key for the vaccine spectrum's core trade: live attenuated vaccines replicate transiently in the host — the immune system takes the full course (cellular AND humoral, strong often lifelong immunity) but the lesson carries risk (reversion, pregnancy/immunodeficiency contraindication). Killed and subunit vaccines present the material without the course — safer but humoral-leaning and booster-dependent ('review sessions'). mRNA vaccines restore the full course safely: the host's own cells synthesize the antigen, so both arms attend.",
      memorizes: "Live vs killed vs mRNA response profiles and the booster logic",
      whenToUse: "Any vaccine-type, schedule, or contraindication question.",
      clinical: "Sabin (live/oral) vs Salk (killed/IM) polio; Ty21a (live/oral) vs Vi (killed/IM) typhoid; intranasal (live) vs IM (killed) influenza.",
    },
    {
      code: "\u201cA naked sugar can't knock on the T-cell door — tie it to a protein and it can.\u201d",
      meaning:
        "KYP's key for the conjugate trick: a pure polysaccharide antigen (PPSV23) is T-cell-INdependent — no Th help, no class switching, no memory, weak in infants. Conjugate the sugar to a carrier protein (PCV13, Hib, meningococcal conjugates) and the antigen gains a T-cell face: Th-cell engagement, class switching, and immunologic memory — the engineered answer to E28's antigen-type biology.",
      memorizes: "T-independent polysaccharide vs T-dependent conjugate design",
      whenToUse: "Any PPSV23-vs-PCV13, infant-schedule, or conjugate-vaccine question.",
      clinical: "Infant schedules use conjugates first (PCV13, Hib); PPSV23 supplements later and in adults.",
    },
  ],
  rapidReview: {
    s30: [
      "Passive: preformed antibodies — rapid onset, half-life ≈ 3 weeks (IgA milk, maternal IgG, antitoxin, mAbs, IVIG)",
      "Active: exogenous antigen — slow onset, long-lasting memory (infection, vaccines, toxoids)",
      "Vaccination induces an active immune response (humoral and/or cellular) to specific pathogens",
      "Live attenuated: transient growth → cellular + humoral, often lifelong; contraindicated in pregnancy/immunodeficiency",
      "HIV CD4 ≥200: MMR and varicella may be given (specialist consultation)",
    ],
    m3: [
      "Live: adenovirus (military), Ty21a oral typhoid, Sabin polio, varicella, smallpox, BCG, yellow fever, intranasal influenza, MMR, rotavirus",
      "Killed: hepatitis A, Vi IM typhoid, rabies, IM influenza, Salk polio — mainly humoral, boosters usually needed",
      "Subunit/conjugate: HBsAg (HBV), HPV, aP, meningococcus, pneumococcus, Hib, zoster — specific epitopes, ↓ adverse reactions",
      "Toxoid: tetanus (C tetani), diphtheria (C diphtheriae) — antitoxin wanes, boosters",
      "mRNA: lipid nanoparticle → host synthesizes antigen (SARS-CoV-2 spike) — cellular + humoral, safe in pregnancy",
    ],
    m10: [
      "mRNA adverse: common transient systemic reactions (fatigue, headache, myalgia); rare myocarditis/pericarditis in young males",
      "mRNA uses: SARS-CoV-2, adult RSV LRTD, CMV (congenital/immunocompromised), melanoma (therapeutic)",
      "PPSV23 = T-cell-independent; conjugation to carrier protein = T-cell-dependent (switching + memory)",
      "Combined passive + active for HBV and rabies exposure — antibodies now, memory later",
      "Sabin live vs Salk killed; Ty21a live vs Vi killed; adenovirus = nonattenuated exception (military)",
    ],
  },
  recall: [
    {
      q: "Contrast passive and active immunity: means, onset, duration, examples.",
      a: "Passive — receiving preformed antibodies; rapid onset; short span of antibodies (half-life = 3 weeks); examples: IgA in breast milk, maternal IgG crossing placenta, antitoxin, humanized monoclonal antibody. Active — exposure to exogenous antigens; slow onset; long-lasting protection (memory); examples: natural infection, vaccines, toxoid. IVIG provides temporary but specific passive immunity; combined passive and active immunizations can be given for hepatitis B or rabies exposure.",
    },
    {
      q: "What defines a live attenuated vaccine, with pros, cons, and examples?",
      a: "Microorganism rendered nonpathogenic but retaining capacity for transient growth within the inoculated host. Pros: induces cellular and humoral responses; strong, often lifelong immunity. Cons: may revert to virulent form; contraindicated in pregnancy and immunodeficiency (MMR and varicella may be given to people with HIV with CD4+ ≥200 cells/mm³ in consultation with a specialist). Examples: adenovirus (nonattenuated, military), typhoid (Ty21a, oral), polio (Sabin), varicella, smallpox, BCG, yellow fever, influenza (intranasal), MMR, rotavirus.",
    },
    {
      q: "What defines a killed/inactivated vaccine, and which vaccines are killed?",
      a: "Pathogen inactivated by heat or chemicals; maintaining epitope structure on surface antigens is important; mainly induces a humoral response. Pros: safer than live. Cons: weaker cell-mediated response; boosters usually needed. Examples: hepatitis A, typhoid (Vi polysaccharide, IM), rabies, influenza (IM), polio (Salk).",
    },
    {
      q: "Explain the subunit/conjugate family and the T-dependence distinction.",
      a: "All use specific antigens that best stimulate the immune system; pros: specific epitopes with fewer adverse reactions; cons: expensive, weaker response. Examples: HBV (HBsAg), HPV, acellular pertussis, N meningitidis, S pneumoniae — PPSV23 polysaccharide is primarily a T-cell-independent response, while a polysaccharide conjugated to a carrier protein produces a T-cell-dependent response — plus Hib and herpes zoster.",
    },
    {
      q: "What are the toxoid and mRNA designs, with pros, cons, and examples?",
      a: "Toxoid: denatured bacterial toxin with an intact receptor binding site — antibodies without disease potential; protects against bacterial toxins; antitoxin levels decrease with time so boosters may be needed; examples Clostridium tetani and Corynebacterium diphtheriae. mRNA: a lipid nanoparticle delivers mRNA, causing cells to synthesize foreign protein (eg, SARS-CoV-2 spike); high efficacy, cellular and humoral immunity, safe in pregnancy; local and transient systemic reactions common, rare myocarditis/pericarditis particularly in young males; examples: SARS-CoV-2, adult RSV lower respiratory tract disease, CMV (congenital and immunocompromised), melanoma (therapeutic vaccine).",
    },
  ],
  related: [
    {
      title: "Immunoglobulin Isotypes & Antigen Memory",
      topicId: "immunoglobulin-isotypes",
      note: "The thymus-independent/dependent antigen biology the conjugate trick engineers — and the maternal-IgG timeline of passive immunity.",
    },
    {
      title: "Lymphocyte Activation, Peripheral Tolerance & Anergy",
      topicId: "lymphocyte-activation-tolerance",
      note: "Why killed vaccines humoral-lean: no replication means no endogenous MHC I display for CTLs.",
    },
    {
      title: "T-Cell Development: Thymic Selection & Subset Lineages",
      topicId: "t-cell-development",
      note: "The T-dependent response conjugates buy — Th help, class switching, and the memory lineage biology.",
    },
    {
      title: "B-Cell Immunodeficiencies",
      topicId: "b-cell-immunodeficiencies",
      note: "Live vaccines contraindicated in immunodeficiency — and IVIG as the passive bridge for antibody-deficient patients.",
    },
  ],
  crossLinks: [
    {
      subject: "Infectious Disease (Rabies & HBV Exposure)",
      connection: "The combined passive + active protocol exists because incubation can outrun active onset — HBIG/HBIG-plus-vaccine is this page's timing logic in practice.",
    },
    {
      subject: "Obstetrics",
      connection: "Live vaccines contraindicated in pregnancy; IM influenza and Tdap recommended; mRNA explicitly safe — and maternal IgG + breast-milk IgA as the neonate's passive armor.",
    },
    {
      subject: "Pediatrics (Immunization Schedule)",
      connection: "Conjugate vaccines (PCV13, Hib, MenACWY) exist for infant T-independent immaturity — the schedule is the conjugate logic applied.",
    },
    {
      subject: "Public Health & Virology (COVID-19)",
      connection: "The mRNA platform's dual-arm immunity and its young-male myocarditis caveat — the newest row of the vaccine table and its pharmacovigilance story.",
    },
  ],
};
