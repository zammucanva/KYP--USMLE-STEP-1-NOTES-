import type { KypUsMLENote } from "../types";

// Microbiology — VIROLOGY banner (M-batch 25). Source: pdf 190-191 + 196 /
//  books 168-169 + the prions block of book 174 (page ownership: the
//  normal-microbiota and foodborne blocks on book 174 belong to M28). The
//  Aedes arbovirus trio (Chikungunya vs Dengue + Yellow fever + Zika), the
//  emerging set (Rabies, Ebola, SARS-CoV-2 with its labeled virion), and the
//  prion cascade. Rasters: p190 the congenital-Zika brain imaging A; p191
//  the rabies bullet-shaped TEM A, the Negri bodies B, the Ebola
//  filamentous TEM A, and the SARS-CoV-2 labeled cross-section diagram —
//  COPYRIGHTED, described-in-text only (the virion cross-section in the
//  visual is an ORIGINAL REDRAW of the labeled diagram). The banner typo
//  'MICROCIOLOGY—VIROLOGY' prints on books 168-169; book 174 prints
//  'MICROCIOLOGY—SYSTEMS'.

export const viralVaccinesDiagnostics: KypUsMLENote = {
  id: "viral-vaccines-diagnostics",
  title: "Viral Vaccines, Diagnosis & Emerging Viruses",
  subtitle:
    "The Aedes arbovirus trio, the emerging-virus set, and the prion cascade — the pages where vaccines, diagnostics, and new viruses meet. THE AEDES TRIO (book 168): CHIKUNGUNYA (an alphavirus/togavirus) — high fever, maculopapular rash, headache, lymphadenopathy, and INFLAMMATORY POLYARTHRITIS; arthralgias are more commonly reported than in dengue and JOINT SWELLING is highly specific; thrombocytopenia, leukopenia, and hemorrhagic manifestations are less common; NAAT and serology; supportive care with steroids or disease-modifying antirheumatic drugs for chronic arthritis; no vaccine. DENGUE (a flavivirus) — dengue fever (fever, rash, headache, myalgias, arthralgias, retro-orbital pain, neutropenia); DENGUE HEMORRHAGIC FEVER (dengue fever + bleeding and plasma leakage from severe thrombocytopenia and RBC perturbations), most common when infected with a DIFFERENT SEROTYPE after the initial infection — ANTIBODY-DEPENDENT ENHANCEMENT; may progress to DENGUE SHOCK SYNDROME (plasma leakage → circulatory collapse); supportive care with volume repletion or transfusion in shock; the LIVE, RECOMBINANT VACCINE is derived from the yellow fever virus backbone with insertion of the dengue envelope and pre-membrane genes. YELLOW FEVER — a flavivirus arbovirus with monkey or human reservoir; high fever, BLACK VOMITUS, JAUNDICE, hemorrhage, backache; COUNCILMAN BODIES (eosinophilic apoptotic globules) on liver biopsy; the LIVE, ATTENUATED VACCINE for travelers to endemic countries. ZIKA — a flavivirus; conjunctivitis, low-grade pyrexia, and itchy rash in 20% of cases; complicated by GUILLAIN-BARRÉ SYNDROME; sexual and vertical transmission; in pregnancy, miscarriage or CONGENITAL ZIKA SYNDROME — brain imaging shows VENTRICULOMEGALY and SUBCORTICAL CALCIFICATIONS A, with microcephaly, ocular anomalies, and motor abnormalities (spasticity, seizures) in the newborn; RT-PCR or serology; supportive care. THE EMERGING SET (book 169): RABIES — the bullet-shaped virus A with NEGRI BODIES (cytoplasmic inclusions B) in Purkinje cells of the cerebellum and hippocampal neurons; in the US, bat, raccoon, and skunk bites more common than dog bites, with aerosol transmission possible (bat caves); long incubation (weeks to months); travels to the CNS RETROGRADE via dynein motors up nerve axons after binding ACh receptors; progression fever and malaise → agitation, photophobia, HYDROPHOBIA, hypersalivation → paralysis, coma → death; POSTEXPOSURE PROPHYLAXIS = wound cleaning + the KILLED VACCINE + RABIES IMMUNOGLOBULIN — the exemplar of PASSIVE-ACTIVE IMMUNITY. EBOLA — a filovirus A; incubation up to 21 days, then abrupt flulike symptoms, diarrhea and vomiting, high fever, myalgia → DIC, diffuse hemorrhage, shock; RT-PCR within 48 hours of symptom onset; high mortality; transmission by direct contact with bodily fluids, fomites (including dead bodies), infected bats or primates, with high healthcare-associated incidence; supportive care — vaccination of contacts, strict isolation, and barrier practices prevent transmission. SARS-COV-2 — a ⊕ ssRNA virus, the cause of the COVID-19 pandemic; spread via respiratory droplets, aerosols, and fomites; fever, myalgia, headache, congestion, sneezing, cough, sore throat, nausea, diarrhea, ANOSMIA, DYSGEUSIA; severe disease — pneumonia, hypercoagulability (DVT, PE, stroke), myocardial injury, neurologic sequelae, shock, organ failure, death; entry by the SPIKE PROTEIN binding ACE2 (highly expressed in lungs, intestines, heart, kidneys); diagnosis by NAAT (RT-PCR) or the RAPID ANTIGEN TEST (rapid, accessible, LESS SENSITIVE than NAAT); the mRNA and VIRAL VECTOR VACCINES present the spike protein, inducing anti-spike antibodies. The labeled virion: Spike (S) protein, Lipid bilayer, Membrane (M) protein, Envelope (E) protein, Helical capsid with viral RNA. THE PRION CASCADE (book 174): prion diseases convert the normal, predominantly α-helical prion protein (PrPc) to a β-pleated form (PrPsc), transmissible via CNS-related tissue (IATROGENIC CJD) or food contaminated by BSE-infected animal products (VARIANT CJD); PrPsc RESISTS PROTEASE DEGRADATION, facilitates the conversion of still more PrPc to PrPsc (autocatalysis), and resists STANDARD STERILIZING PROCEDURES including standard autoclaving; accumulation → SPONGIFORM ENCEPHALOPATHY — dementia, ataxia, STARTLE MYOCLONUS, and death. CREUTZFELDT-JAKOB DISEASE — rapidly progressive dementia, typically sporadic (some familial forms). BOVINE SPONGIFORM ENCEPHALOPATHY — mad cow disease. KURU — the acquired prion disease of tribal populations practicing human cannibalism.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Virology",
  pilotCategory:
    "Virology — the Aedes arbovirus trio on the arthritis-vs-hemorrhage axis (Chikungunya's polyarthritis vs dengue's antibody-dependent enhancement), the emerging set with its prophylaxis anchors (rabies PEP as passive-active immunity; SARS-CoV-2's spike-ACE2-mRNA logic), and the prion cascade (PrPc → PrPsc, protease- and autoclave-resistant)",
  difficulty: 2,
  readTime: 13,
  sourceRef: "First Aid 2026, Part 1 pp. 168–174 (Arboviruses transmitted by Aedes mosquitoes; Rabies virus; Ebola virus; SARS-CoV-2; Prions)",
  tags: [
    "arboviruses",
    "Aedes mosquitoes",
    "Chikungunya virus",
    "inflammatory polyarthritis",
    "joint swelling",
    "dengue virus",
    "dengue hemorrhagic fever",
    "antibody-dependent enhancement",
    "dengue shock syndrome",
    "retro-orbital pain",
    "plasma leakage",
    "live recombinant vaccine",
    "yellow fever virus",
    "black vomitus",
    "jaundice",
    "Councilman bodies",
    "live attenuated vaccine",
    "Zika virus",
    "Guillain-Barré syndrome",
    "congenital Zika syndrome",
    "ventriculomegaly",
    "subcortical calcifications",
    "microcephaly",
    "vertical transmission",
    "rabies virus",
    "bullet-shaped virus",
    "Negri bodies",
    "Purkinje cells",
    "hydrophobia",
    "hypersalivation",
    "retrograde axonal transport",
    "dynein",
    "postexposure prophylaxis",
    "killed vaccine",
    "rabies immunoglobulin",
    "passive-active immunity",
    "Ebola virus",
    "filovirus",
    "DIC",
    "diffuse hemorrhage",
    "RT-PCR",
    "healthcare-associated infection",
    "barrier practices",
    "SARS-CoV-2",
    "COVID-19",
    "anosmia",
    "dysgeusia",
    "spike protein",
    "ACE2",
    "NAAT",
    "rapid antigen test",
    "mRNA vaccines",
    "viral vector vaccines",
    "prions",
    "PrPc",
    "PrPsc",
    "beta-pleated sheet",
    "protease resistance",
    "autoclaving",
    "spongiform encephalopathy",
    "startle myoclonus",
    "Creutzfeldt-Jakob disease",
    "bovine spongiform encephalopathy",
    "mad cow disease",
    "variant CJD",
    "iatrogenic CJD",
    "kuru",
    "cannibalism",
  ],
  core: {
    what: "THE AEDES TRIO (book 168). Two Aedes-borne viruses share a printed comparison table. CHIKUNGUNYA (an alphavirus/togavirus): high fever, maculopapular rash, headache, lymphadenopathy, and inflammatory polyarthritis — arthralgias are more commonly reported than in dengue, and JOINT SWELLING is highly specific; thrombocytopenia, leukopenia, and hemorrhagic manifestations are less common; NAAT and serology diagnose; treatment is supportive, with steroids or disease-modifying antirheumatic drugs for chronic arthritis; no vaccine. DENGUE (a flavivirus): dengue fever — fever, rash, headache, myalgias, arthralgias, retro-orbital pain, neutropenia; DENGUE HEMORRHAGIC FEVER — dengue fever plus bleeding and plasma leakage due to severe thrombocytopenia and RBC perturbations, most common when infected with a DIFFERENT SEROTYPE after an initial infection (ANTIBODY-DEPENDENT ENHANCEMENT of disease); progression to DENGUE SHOCK SYNDROME — plasma leakage → circulatory collapse; treatment supportive, with intravascular volume repletion or blood transfusion in severe shock; prevention — the LIVE, RECOMBINANT VACCINE derived from the yellow fever virus backbone with insertion of the dengue envelope and pre-membrane protein genes. YELLOW FEVER — the flavivirus arbovirus with monkey or human reservoirs (Flavi = yellow, jaundice): high fever, black vomitus, jaundice, hemorrhage, backache; COUNCILMAN BODIES (eosinophilic apoptotic globules) on liver biopsy; LIVE, ATTENUATED VACCINE recommended for travelers to endemic countries. ZIKA — the flavivirus most commonly Aedes-borne: conjunctivitis, low-grade pyrexia, itchy rash in 20% of cases, tropical and subtropical outbreaks; GUILLAIN-BARRÉ SYNDROME as the complication; SEXUAL and VERTICAL transmission; in pregnancy — miscarriage or CONGENITAL ZIKA SYNDROME with ventriculomegaly and subcortical calcifications A on brain imaging and microcephaly, ocular anomalies, motor abnormalities (spasticity, seizures) in the newborn; RT-PCR or serology; supportive care. THE EMERGING SET (book 169). RABIES — the BULLET-SHAPED virus A with NEGRI BODIES (cytoplasmic inclusions B) commonly found in Purkinje cells of the cerebellum and hippocampal neurons; long incubation (weeks to months); in the US, infection more commonly from BAT, RACCOON, and SKUNK bites than dog bites, with aerosol transmission possible (bat caves); retrograde CNS travel via DYNEIN MOTORS up nerve axons after binding ACh receptors; progression — fever, malaise → agitation, photophobia, HYDROPHOBIA, hypersalivation → paralysis, coma → death; POSTEXPOSURE PROPHYLAXIS — wound cleaning plus immunization with the KILLED VACCINE and RABIES IMMUNOGLOBULIN — the printed example of PASSIVE-ACTIVE IMMUNITY. EBOLA — a FILOVIRUS A; up to 21 days of incubation, then abrupt flulike symptoms, diarrhea and vomiting, high fever, myalgia, progressing to DIC, diffuse hemorrhage, and shock; diagnosed by RT-PCR WITHIN 48 HOURS of symptom onset; high mortality; transmission requires direct contact with bodily fluids, fomites (including dead bodies), or infected bats or primates, with a high incidence of healthcare-associated infection; supportive care with no definitive treatment — vaccination of contacts, strict isolation, and barrier practices prevent transmission. SARS-COV-2 — a ⊕ ssRNA virus, the cause of the COVID-19 pandemic; spread via respiratory droplets, aerosols, and fomites; fever, myalgia, headache, nasal congestion, sneezing, cough, sore throat, nausea, diarrhea, ANOSMIA, and DYSGEUSIA; severe complications — pneumonia, hypercoagulability (DVT, PE, stroke), myocardial injury, neurologic sequelae, shock, organ failure, death; host cell entry by the SPIKE (S) PROTEIN attaching to the ACE2 RECEPTOR (highly expressed in the lungs, intestines, heart, and kidneys); diagnosis by NAAT (RT-PCR) or the RAPID ANTIGEN TEST (rapid, accessible, less sensitive than NAAT); the mRNA and VIRAL VECTOR VACCINES induce immunity by presenting the spike protein to the immune system, leading to anti-spike protein antibodies. The virion's labeled parts: Spike (S) protein, Lipid bilayer, Membrane (M) protein, Envelope (E) protein, Helical capsid with viral RNA. THE PRION CASCADE (book 174). Prion diseases are caused by the conversion of the normal, predominantly α-helical prion protein (PrPc) to a β-PLEATED form (PrPsc), transmissible via CNS-related tissue (IATROGENIC CJD) or food contaminated by BSE-infected animal products (VARIANT CJD). PrPsc RESISTS PROTEASE DEGRADATION and facilitates the conversion of still more PrPc to PrPsc — the autocatalytic cascade — and it resists STANDARD STERILIZING PROCEDURES, including standard autoclaving. Accumulation of PrPsc results in SPONGIFORM ENCEPHALOPATHY: dementia, ataxia, STARTLE MYOCLONUS, and death. The disease set: CREUTZFELDT-JAKOB DISEASE (rapidly progressive dementia, typically sporadic, some familial forms), BOVINE SPONGIFORM ENCEPHALOPATHY (mad cow disease), and KURU (the acquired prion disease of tribal populations practicing human cannibalism).",
    why: "This block is where the family maps of M23 and M24 meet clinical public health, and it carries five exam institutions. The first is THE ARTHRITIS-VS-HEMORRHAGE AXIS of the Aedes trio: Chikungunya's inflammatory polyarthritis (joint swelling highly specific) against dengue's hemorrhagic cascade — and dengue's ANTIBODY-DEPENDENT ENHANCEMENT, where the second, different-serotype infection is the dangerous one, is the immunologic twist that makes dengue unique among vaccine stories. The second is THE VACCINE ANCHORS: yellow fever's live attenuated travel vaccine, dengue's live recombinant built on the yellow-fever backbone, rabies PEP's killed vaccine plus immunoglobulin (the printed example of PASSIVE-ACTIVE IMMUNITY — E34's chapter made concrete), and SARS-CoV-2's mRNA and viral vector platforms presenting the spike. The third is THE EMERGING-VIRUS LOGIC: rabies's retrograde dynein travel and Negri bodies, Ebola's contact-prevention toolkit, and SARS-CoV-2's spike-ACE2 entry with the NAAT-vs-RAT sensitivity split — the template for every new-virus question. The fourth is THE CONGENITAL SET: Zika's ventriculomegaly-calculifications-microcephaly joins the TORCH roster of M23 and M24. The fifth is THE PRION CASCADE — not a virus at all, but the conformational endgame of transmissible disease: a β-pleated protein that resists protease, resists autoclaving, converts its normal twin, and spongifies the brain.",
    keyIdea: "Run the vector, the vaccine, and the conformation. AEDES TRIO: Chikungunya = POLYARTHRITIS (joint swelling specific; arthralgias > dengue; less thrombocytopenia/hemorrhage; no vaccine) vs dengue = HEMORRHAGE (retro-orbital pain, neutropenia; hemorrhagic fever with plasma leakage on SECOND-serotype infection — antibody-dependent enhancement; shock syndrome = circulatory collapse; live recombinant vaccine on the yellow-fever backbone). Yellow fever = JAUNDICE (black vomitus, hemorrhage, backache; Councilman bodies on liver biopsy; monkey/human reservoir; live attenuated vaccine for travelers). Zika = CONGENITAL (conjunctivitis, low-grade fever, itchy rash 20%; Guillain-Barré; sexual + vertical; ventriculomegaly + subcortical calcifications + microcephaly). EMERGING SET: rabies = bullet + NEGRI BODIES (Purkinje cells, hippocampus); US vectors bat/raccoon/skunk > dog; retrograde dynein travel via ACh receptors; hydrophobia → coma → death; PEP = wound cleaning + KILLED VACCINE + IMMUNOGLOBULIN (passive-active). Ebola = filovirus, 21-day incubation, DIC/hemorrhage/shock, RT-PCR ≤48 h, contact/fomite/bat/primate transmission, isolation + barrier practices. SARS-CoV-2 = ⊕ ssRNA, droplets/aerosols/fomites, anosmia/dysgeusia, SPIKE → ACE2 (lungs, gut, heart, kidneys), NAAT > RAT (less sensitive), mRNA + viral vector vaccines (spike presentation). PRIONS: PrPc (α-helical) → PrPsc (β-pleated); transmissible by CNS tissue (iatrogenic CJD) or BSE food (variant CJD); resists protease + standard autoclaving; autocatalytic; spongiform encephalopathy (dementia, ataxia, STARTLE MYOCLONUS, death); CJD sporadic > familial, BSE (mad cow), kuru (cannibalism).",
  },
  mechanisms: [
    {
      id: "arbovirus-emergence-axis",
      title: "The Aedes axis: same mosquito, three disease logics",
      context: "Chikungunya's arthritis, dengue's enhancement, and the two congenital/systemic flaviviruses",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A traveler or tropical resident with fever and rash after mosquito exposure",
            sublabel: "Input — the Aedes opening.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE ARTHRITIS BRANCH — CHIKUNGUNYA (alphavirus/togavirus): high fever, maculopapular rash, headache, lymphadenopathy, INFLAMMATORY POLYARTHRITIS. Arthralgias more commonly reported than in dengue; JOINT SWELLING highly specific; thrombocytopenia, leukopenia, and hemorrhage LESS common. NAAT + serology; supportive care; steroids or DMARDs for chronic arthritis; NO vaccine",
            sublabel: "Process — the joint is the target organ.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE HEMORRHAGE BRANCH — DENGUE (flavivirus): dengue fever (retro-orbital pain, neutropenia) → DENGUE HEMORRHAGIC FEVER (bleeding + plasma leakage from severe thrombocytopenia and RBC perturbations) — MOST COMMON on infection with a DIFFERENT SEROTYPE after the initial infection: ANTIBODY-DEPENDENT ENHANCEMENT → DENGUE SHOCK SYNDROME (plasma leakage → circulatory collapse). Volume repletion or transfusion in shock; the LIVE RECOMBINANT VACCINE rides the yellow-fever backbone carrying the dengue envelope and pre-membrane genes",
            sublabel: "Process — the antibody from serotype 1 makes serotype 2 worse.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE FLAVIVIRUS COUSINS — YELLOW FEVER (monkey or human reservoir; high fever, BLACK VOMITUS, JAUNDICE, hemorrhage, backache; COUNCILMAN BODIES on liver biopsy; LIVE ATTENUATED vaccine for endemic travel) and ZIKA (conjunctivitis, low-grade pyrexia, itchy rash in 20%; GUILLAIN-BARRÉ; sexual and vertical transmission; CONGENITAL ZIKA SYNDROME — ventriculomegaly, subcortical calcifications A, microcephaly, ocular anomalies, spasticity and seizures)",
            sublabel: "Process — one cousin eats the liver; the other eats the fetal brain.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the diagnostic and vaccine set: NAAT and serology for both Aedes tables; RT-PCR for Zika; the live attenuated (yellow fever), live recombinant (dengue), and none (Chikungunya) — with the enhancement mechanism explaining why dengue vaccination is serotype-careful",
            sublabel: "Output — the trio closes on its prevention logic.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "the joint branch" },
          { from: "s1", to: "s2", label: "the hemorrhage branch" },
          { from: "s2", to: "s3", label: "the flavivirus cousins" },
          { from: "s3", to: "o1", label: "diagnostics + vaccines" },
        ],
      },
    },
    {
      id: "prion-conformation-cascade",
      title: "The prion cascade: a shape that copies itself",
      context: "PrPc → PrPsc, protease resistance, and the spongiform endgame",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Exposure — CNS-related tissue (iatrogenic) or BSE-contaminated food (variant CJD)",
            sublabel: "Input — no nucleic acid enters; only shape.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE CONVERSION: the normal, predominantly α-helical prion protein (PrPc) flips to the β-PLEATED form (PrPsc) — a conformational change, not an infection by a genome",
            sublabel: "Process — the protein changes shape.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE AUTOCATALYSIS: PrPsc RESISTS PROTEASE DEGRADATION and facilitates the conversion of still more PrPc to PrPsc — each new misfolded molecule seeds the next; the cascade is self-sustaining",
            sublabel: "Process — the bad shape recruits the good shape.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE RESISTANCE: PrPsc resists STANDARD STERILIZING PROCEDURES, including standard autoclaving — the reason surgical instruments and transplanted tissue transmit it (iatrogenic CJD)",
            sublabel: "Process — it survives the tools that kill everything else.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — SPONGIFORM ENCEPHALOPATHY: dementia, ataxia, STARTLE MYOCLONUS, and death. CJD — rapidly progressive dementia, typically sporadic (some familial); BSE — mad cow disease (the variant CJD source); KURU — the cannibalism-acquired prion disease",
            sublabel: "Output — the brain becomes spongy; the diseases name their routes.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "shape enters" },
          { from: "s1", to: "s2", label: "shape copies shape" },
          { from: "s2", to: "s3", label: "and survives sterilization" },
          { from: "s3", to: "o1", label: "the spongiform endgame" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "vaccine-diagnostic-map",
      title: "The vaccine-diagnostic map — Aedes trio, emerging set, and prions",
      caption:
        "An original KYP redraw of the source's block (books 168-169 + the prions of 174): the Chikungunya-vs-Dengue comparison grid with the Yellow fever and Zika cards, the emerging-set panel (rabies, Ebola, SARS-CoV-2), an original redraw of the SARS-CoV-2 virion cross-section (Spike, lipid bilayer, M and E proteins, helical capsid with viral RNA), and the prion cascade panel.",
      notice:
        "The printed images — the congenital-Zika brain imaging A (ventriculomegaly, subcortical calcifications), the rabies bullet-shaped TEM A and Negri bodies B, the Ebola filamentous TEM A, and the SARS-CoV-2 labeled cross-section — are raster, COPYRIGHTED, described-in-text only. The virion cross-section in the visual is an ORIGINAL KYP REDRAW of the labeled diagram, not a reproduction.",
    },
    {
      kind: "table",
      title: "The Aedes trio and flavivirus cousins — verbatim",
      intro: "The source's comparison table and blocks (book 168), verbatim.",
      columns: ["Virus", "Content (verbatim)"],
      rows: [
        [
          "Chikungunya virus",
          "VIRUS TYPE: Alphavirus/togavirus. SYMPTOMS: High fever, maculopapular rash, headache, lymphadenopathy, and inflammatory polyarthritis. Arthralgias are more commonly reported (vs dengue); joint swelling is highly specific for Chikungunya. Thrombocytopenia, leukopenia, and hemorrhagic manifestations are less common. DIAGNOSIS: NAAT, serology. TREATMENT: Supportive. Steroids or disease-modifying antirheumatic drugs for chronic arthritis. PREVENTION: Minimize mosquito exposure. No vaccine currently available.",
        ],
        [
          "Dengue virus",
          "VIRUS TYPE: Flavivirus. SYMPTOMS: Dengue fever: fever, rash, headache, myalgias, arthralgias, retro-orbital pain, neutropenia. Dengue hemorrhagic fever: dengue fever + bleeding and plasma leakage due to severe thrombocytopenia and RBC perturbations. Most common if infected with a different serotype after initial infection due to antibodydependent enhancement of disease. May progress to dengue shock syndrome: plasma leakage → circulatory collapse. DIAGNOSIS: NAAT, serology. TREATMENT: Supportive. Intravascular volume repletion or blood transfusion if severe shock. PREVENTION: Live, recombinant vaccine available. Derived from the yellow fever virus backbone with insertion of genes for the envelope and premembrane proteins of dengue virus.",
        ],
        [
          "Yellow fever virus",
          "A flavivirus (also an arbovirus) transmitted by Aedes mosquito bites. Virus has monkey or human reservoir. Flavi = yellow, jaundice. Symptoms: high fever, black vomitus, jaundice, hemorrhage, backache. May see Councilman bodies (eosinophilic apoptotic globules) on liver biopsy. Live, attenuated vaccine recommended for travelers to endemic countries.",
        ],
        [
          "Zika virus",
          "A flavivirus most commonly transmitted by Aedes mosquito bites. Causes conjunctivitis, low-grade pyrexia, and itchy rash in 20% of cases. Outbreaks more common in tropical and subtropical climates. May be complicated by Guillain-Barré syndrome. Supportive care, no definitive treatment. Diagnose with RT-PCR or serology. Sexual and vertical transmission occurs. In pregnancy, can lead to miscarriage or congenital Zika syndrome: brain imaging shows ventriculomegaly, subcortical calcifications A (printed imaging — described-in-text only). Clinical features in the affected newborn include: Microcephaly. Ocular anomalies. Motor abnormalities (spasticity, seizures).",
        ],
      ],
      caption:
        "The table reads with the arbovirus-axis mechanism: the two printed table rows (Chikungunya, dengue) carry the arthritis-vs-hemorrhage split; the source's hyphen-drop (antibodydependent) is carried verbatim.",
    },
    {
      kind: "table",
      title: "The emerging set + prions — verbatim",
      intro: "The source's blocks (books 169 and 174), verbatim.",
      columns: ["Block", "Content (verbatim)"],
      rows: [
        [
          "Rabies virus (book 169)",
          "Infection more commonly from bat, raccoon, and skunk bites than from dog bites in the United States; aerosol transmission (eg, bat caves) also possible. Bullet-shaped virus A (printed TEM — described-in-text only). Negri bodies (cytoplasmic inclusions B, printed micrograph — described-in-text only) commonly found in Purkinje cells of cerebellum and in hippocampal neurons. Rabies has long incubation period (weeks to months) before symptom onset. Postexposure prophylaxis is wound cleaning plus immunization with killed vaccine and rabies immunoglobulin. Example of passive-active immunity. Travels to the CNS by migrating in a retrograde fashion (via dynein motors) up nerve axons after binding to ACh receptors. Progression of disease: fever, malaise → agitation, photophobia, hydrophobia, hypersalivation → paralysis, coma → death.",
        ],
        [
          "Ebola virus (book 169)",
          "A filovirus A (printed TEM — the filamentous virion, described-in-text only). Following an incubation period of up to 21 days, presents with abrupt onset of flulike symptoms, diarrhea/vomiting, high fever, myalgia. Can progress to DIC, diffuse hemorrhage, shock. Diagnosed with RT-PCR within 48 hr of symptom onset. High mortality rate. Transmission requires direct contact with bodily fluids, fomites (including dead bodies), infected bats or primates (apes/monkeys); high incidence of healthcare-associated infection. Supportive care, no definitive treatment. Vaccination of contacts, strict isolation of infected individuals, and barrier practices for healthcare workers are key to preventing transmission.",
        ],
        [
          "SARS-CoV-2 (book 169)",
          "SARS-CoV-2 is a ⊕ ssRNA virus and the cause of the COVID-19 pandemic. Spread is via respiratory droplets, aerosols and fomites. Varying symptoms include: fever, myalgia, headache, nasal congestion, sneezing, cough, sore throat, nausea, diarrhea, anosmia, dysgeusia. Severe cases may lead to complications like: pneumonia, hypercoagulability (DVT, PE, stroke), myocardial injury, neurologic sequelae, shock, organ failure, death. Diagnosed by: NAAT (RT-PCR); Viral Antigen Test (RAT) → rapid, accessible, less sensitive than NAAT. Host cell entry occurs by attachment of viral spike protein to ACE2 receptor on cell membranes (highly expressed in the lungs, intestines, heart, and kidneys). Vaccines: mRNA and viral vector vaccines induce immunity by presenting the spike protein to the immune system leading to antispike protein antibodies. [The labeled diagram: Spike (S) protein; Lipid bilayer; Membrane (M) protein; Envelope (E) protein; Helical capsid with viral RNA — redrawn originally in the visual.]",
        ],
        [
          "Prions (book 174)",
          "Prion diseases are caused by the conversion of a normal (predominantly α-helical) protein termed prion protein (PrPc) to a β-pleated form (PrPsc), which is transmissible via CNS-related tissue (iatrogenic CJD) or food contaminated by BSE-infected animal products (variant CJD). PrPsc resists protease degradation and facilitates the conversion of still more PrPc to PrPsc. Resistant to standard sterilizing procedures, including standard autoclaving. Accumulation of PrPsc results in spongiform encephalopathy and dementia, ataxia, startle myoclonus, and death. Creutzfeldt-Jakob disease—rapidly progressive dementia, typically sporadic (some familial forms). Bovine spongiform encephalopathy—also called “mad cow disease.” Kuru—acquired prion disease noted in tribal populations practicing human cannibalism.",
        ],
      ],
      caption:
        "The blocks read with the emergence and prion mechanisms: rabies's retrograde-dynein-PEP logic, Ebola's contact-prevention toolkit, SARS-CoV-2's spike-ACE2-vaccine logic, and the PrPc-to-PrPsc autocatalytic cascade. Page ownership note: the normal-microbiota and foodborne-illness blocks that print on book 174 belong to M28 (normal-flora).",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the map implies",
      body: "THE AEDES PROTOCOL: joint swelling after mosquito exposure = Chikungunya (arthralgias > dengue; less thrombocytopenia and hemorrhage; no vaccine); retro-orbital pain with neutropenia = dengue fever; bleeding with plasma leakage on a SECOND-serotype infection = dengue hemorrhagic fever (antibody-dependent enhancement) — volume repletion for shock; black vomitus with jaundice = yellow fever (Councilman bodies; live attenuated vaccine for endemic travel); conjunctivitis with a triad-deficit newborn = Zika (Guillain-Barré in the adult; ventriculomegaly, subcortical calcifications, microcephaly in the fetus). THE RABIES PROTOCOL: bat, raccoon, or skunk exposure (US) → wound cleaning + KILLED VACCINE + RABIES IMMUNOGLOBULIN — passive-active immunity, the printed exemplar; Negri bodies in Purkinje cells and hippocampal neurons confirm; hydrophobia and hypersalivation mark the progression; retrograde dynein travel up axons explains the weeks-to-months incubation. THE EBOLA PROTOCOL: 21-day incubation → DIC, hemorrhage, shock; RT-PCR within 48 hours of symptoms; prevent by vaccinating contacts, isolating the infected, and barrier practices — no definitive treatment. THE COVID PROTOCOL: anosmia and dysgeusia suggest it; pneumonia, hypercoagulability (DVT, PE, stroke), and myocardial injury mark severe disease; NAAT (RT-PCR) is the standard, the rapid antigen test trades sensitivity for speed; the spike-ACE2 interaction is both the entry mechanism and the vaccine target (mRNA and viral vector platforms present the spike). THE PRION PROTOCOL: rapidly progressive dementia with ataxia and STARTLE MYOCLONUS = CJD (typically sporadic); think variant CJD with BSE-contaminated food exposure and kuru with cannibalism exposure — and remember that PrPsc survives standard autoclaving, so iatrogenic transmission rides surgical instruments and transplanted tissue.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 12-year-old returning from Southeast Asia has 4 days of high fever, retro-orbital pain, myalgias, and a faint rash; CBC shows neutropenia and platelets of 80,000; she had a documented dengue infection with a different serotype 2 years ago.",
        discriminator: "Second different-serotype dengue + bleeding risk with plasma leakage",
        concept: "Dengue hemorrhagic fever — antibody-dependent enhancement",
        answer:
          "Dengue hemorrhagic fever is dengue fever plus bleeding and plasma leakage due to severe thrombocytopenia and RBC perturbations, and it is most common when infected with a DIFFERENT SEROTYPE after an initial infection — antibody-dependent enhancement of disease. It may progress to dengue shock syndrome (plasma leakage → circulatory collapse). Treatment is supportive, with intravascular volume repletion or blood transfusion in severe shock.",
      },
      {
        stem: "A 30-year-old wakes to find a bat in his bedroom; the bat is captured and tests positive for rabies. He has no prior rabies vaccination.",
        discriminator: "High-risk exposure + unvaccinated → the two-part prophylaxis",
        concept: "Rabies PEP — passive-active immunity",
        answer:
          "Postexposure prophylaxis is wound cleaning plus immunization with the KILLED VACCINE and RABIES IMMUNOGLOBULIN — the printed example of passive-active immunity: the immunoglobulin gives immediate passive antibody while the vaccine generates active immunity. Rabies travels to the CNS retrograde via dynein motors up nerve axons after binding ACh receptors, with a long incubation (weeks to months) — which is what makes PEP possible at all.",
      },
      {
        stem: "A 68-year-old develops rapidly progressive cognitive decline over 3 months with gait ataxia and startle-induced muscle jerks; MRI shows no mass; CSF is unremarkable; he underwent corneal transplantation 18 months ago.",
        discriminator: "Rapidly progressive dementia + ataxia + startle myoclonus + tissue exposure",
        concept: "Creutzfeldt-Jakob disease — the prion cascade",
        answer:
          "Prion diseases convert the normal α-helical prion protein (PrPc) to the β-pleated PrPsc, which resists protease degradation, resists standard sterilizing procedures (including standard autoclaving), and converts more PrPc autocatalytically. Accumulation causes spongiform encephalopathy — dementia, ataxia, startle myoclonus, death. CJD is typically sporadic (some familial forms); the transplant history raises iatrogenic CJD; BSE-contaminated food causes variant CJD; cannibalism caused kuru.",
      },
    ],
    traps: [
      {
        a: "A second dengue infection is milder because of antibodies from the first",
        b: "Infection with a DIFFERENT SEROTYPE after the initial infection is the setting for DENGUE HEMORRHAGIC FEVER — antibody-DEPENDENT ENHANCEMENT of disease",
        whyConfused: "Cross-immunity usually protects.",
        keyDifference:
          "Dengue's four serotypes make pre-existing antibody a risk factor: sub-neutralizing antibody from serotype 1 enhances serotype 2 infection, driving the plasma leakage, severe thrombocytopenia, and shock that define hemorrhagic fever and dengue shock syndrome. It is the reason dengue vaccination is serotype-careful (the live recombinant vaccine on the yellow-fever backbone).",
        clue: "Any dengue reinfection or vaccine-eligibility stem.",
      },
      {
        a: "Dog bites are the main rabies risk in the United States",
        b: "In the US, infection is MORE COMMON from BAT, RACCOON, and SKUNK bites than from dog bites; aerosol transmission (eg, bat caves) is also possible",
        whyConfused: "The classic worldwides image of rabies is the rabid dog.",
        keyDifference:
          "The US reservoir set is wildlife — bats, raccoons, skunks — and the bat exposure can be inapparent (the bedroom bat). The worldwide dog-bite picture is the contrast the exam tests. The prophylaxis is the same either way: wound cleaning + killed vaccine + rabies immunoglobulin (passive-active).",
        clue: "Any US-exposure rabies stem.",
      },
      {
        a: "Standard autoclaving eliminates prion transmission risk",
        b: "PrPsc RESISTS standard sterilizing procedures, including standard autoclaving — prions survive the tools that kill every virus and bacterium",
        whyConfused: "Autoclaving is the universal sterilization answer.",
        keyDifference:
          "The prion is a misfolded PROTEIN, not a microbe: no genome to destroy. Its β-pleated form resists protease degradation and standard autoclaving, which is why iatrogenic CJD rides surgical instruments, corneas, and dura mater grafts. This resistance plus the autocatalytic conversion of PrPc is the entire prion story.",
        clue: "Any sterilization or iatrogenic-transmission question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Chikungunya vs dengue (the Aedes pair)",
        differentiator: "The joint vs the leak",
        correctPath:
          "CHIKUNGUNYA: inflammatory POLYARTHRITIS — arthralgias more commonly reported than dengue, JOINT SWELLING highly specific; thrombocytopenia, leukopenia, and hemorrhage LESS common; no vaccine. DENGUE: retro-orbital pain and neutropenia; hemorrhagic fever with bleeding and PLASMA LEAKAGE on second different-serotype infection (antibody-dependent enhancement); shock syndrome; live recombinant vaccine on the yellow-fever backbone.",
      },
      {
        lookAlike: "The three neurotropic/transmissible dementia agents (rabies, CJD, SSPE)",
        differentiator: "Negri bodies vs PrPsc vs the measles years-later sequel",
        correctPath:
          "RABIES: Negri bodies (cytoplasmic inclusions) in Purkinje cells and hippocampal neurons; hydrophobia; retrograde dynein travel; PEP with killed vaccine + immunoglobulin. CJD (PRION): PrPsc β-pleated conversion, spongiform encephalopathy, startle myoclonus, rapidly progressive dementia; no vaccine, no treatment — PrPsc resists autoclaving. SSPE (MEASLES, from M24): personality changes, dementia, and death YEARS after measles — a persistent viral cause, not a protein-only cause.",
      },
    ],
    miniCase: {
      vignette:
        "A 34-year-old wildlife biologist performs a necropsy on a raccoon that later tests positive for rabies; during the procedure, a scalpel nick on his gloved finger is noted. He cleaned the wound immediately. He has never received a rabies vaccine. He presents the same day for prophylaxis, afebrile and neurologically intact.",
      question:
        "Which combination of prophylaxis is indicated, and what is its immunologic classification?",
      options: [
        {
          label: "A",
          text: "Wound cleaning, rabies vaccine (killed), and rabies immunoglobulin — passive-active immunity",
          correct: true,
          why: "Correct. Postexposure prophylaxis is wound cleaning plus immunization with the KILLED VACCINE and RABIES IMMUNOGLOBULIN — the printed example of PASSIVE-ACTIVE IMMUNITY: the immunoglobulin supplies immediate passive antibody around the wound while the vaccine induces active immunity over the coming weeks. The rabies virus's long incubation (weeks to months, as it travels retrograde via dynein motors up axons after binding ACh receptors) is precisely what makes this two-part strategy effective.",
        },
        {
          label: "B",
          text: "Rabies immunoglobulin alone — passive immunity only",
          why: "Immunoglobulin alone gives immediate but temporary antibody; without active vaccination, protection wanes before the long incubation window closes. The source names the combination as the exemplar of passive-ACTIVE immunity.",
        },
        {
          label: "C",
          text: "Live attenuated rabies vaccine alone",
          why: "The rabies vaccine is KILLED — and live vaccines are generally avoided in prophylaxis after exposure. The distractor borrows the live-attenuated platform from yellow fever (and M24's influenza intranasal).",
        },
        {
          label: "D",
          text: "Broad-spectrum antibiotics and tetanus booster only",
          why: "Antibiotics address the bacterial risk of the wound but nothing about a neurotropic virus; tetanus prophylaxis is appropriate wound care but is not rabies prophylaxis.",
        },
        {
          label: "E",
          text: "Observation only — no prophylaxis is indicated for glove-protected exposures",
          why: "A scalpel nick through a glove with rabies-positive tissue is an exposure (percutaneous inoculation). With a documented positive animal and an unvaccinated host, observation without prophylaxis is the dangerous answer — rabies progression is fever and malaise, then agitation, photophobia, hydrophobia, hypersalivation, then paralysis, coma, and death.",
        },
      ],
      reasoning:
        "The vignette stacks the rabies identifiers: a high-risk wildlife reservoir (raccoon — US exposures are bat, raccoon, and skunk more than dog), a percutaneous exposure, an unvaccinated host presenting the same day, and an intact neurologic exam (the long incubation has just begun). The question tests the two-part prophylaxis and its immunologic name: wound cleaning + killed vaccine + immunoglobulin = passive-active immunity. The distractors offer half-measures (immunoglobulin alone), the wrong platform (live attenuated), the wrong discipline (antibiotics), and the lethal non-answer (observation).",
    },
  },
  mnemonics: [
    {
      code: "“The joint swells, the vessel leaks, the liver yellows, and the brain shrinks.”",
      meaning:
        "KYP's key for the Aedes quartet: CHIKUNGUNYA = the joint (inflammatory polyarthritis; joint swelling highly specific; arthralgias > dengue; less thrombocytopenia and hemorrhage). DENGUE = the leak (retro-orbital pain, neutropenia; hemorrhagic fever with plasma leakage on second different-serotype infection — antibody-dependent enhancement; shock syndrome). YELLOW FEVER = the liver (black vomitus, jaundice, hemorrhage; Councilman bodies; live attenuated vaccine). ZIKA = the fetal brain (ventriculomegaly, subcortical calcifications, microcephaly; Guillain-Barré in the adult).",
      memorizes: "The Aedes arbovirus quartet",
      whenToUse: "Any fever-with-rash-after-mosquitoes stem.",
      clinical: "Name the damaged organ, name the virus, name the vaccine.",
    },
    {
      code: "“Rabies rides the rails backward, and the prophylaxis is both borrowed and built.”",
      meaning:
        "KYP's key for rabies: it travels RETROGRADE (dynein motors) up axons after binding ACh receptors — the long incubation (weeks to months) before fever and malaise, then agitation, photophobia, HYDROPHOBIA, hypersalivation, then paralysis, coma, death. Negri bodies sit in Purkinje cells and hippocampal neurons. PEP is both borrowed and built: rabies IMMUNOGLOBULIN (borrowed — passive) + the KILLED VACCINE (built — active).",
      memorizes: "Rabies pathogenesis and prophylaxis",
      whenToUse: "Any wildlife-exposure or encephalitis-prophylaxis stem.",
      clinical: "US reservoirs: bat, raccoon, skunk — more than dog.",
    },
    {
      code: "“The shape that survives the autoclave.”",
      meaning:
        "KYP's key for prions: PrPc (α-helical, normal) flips to PrPsc (β-pleated, bad) — which resists PROTEASE, resists STANDARD AUTOCLAVING, and converts more PrPc (autocatalysis). Accumulation → spongiform encephalopathy: dementia, ataxia, STARTLE MYOCLONUS, death. CJD = sporadic (some familial); variant CJD = BSE food; kuru = cannibalism; iatrogenic CJD = CNS tissue and instruments.",
      memorizes: "The prion cascade",
      whenToUse: "Any rapidly-progressive-dementia or sterilization question.",
      clinical: "No genome, no treatment — only the shape matters.",
    },
  ],
  rapidReview: {
    s30: [
      "Chikungunya: inflammatory polyarthritis; joint swelling highly specific; less thrombocytopenia/hemorrhage; no vaccine",
      "Dengue: retro-orbital pain, neutropenia; hemorrhagic fever with plasma leakage on DIFFERENT-serotype reinfection (antibody-dependent enhancement); shock syndrome; live recombinant vaccine on the yellow-fever backbone",
      "Yellow fever: black vomitus, jaundice, Councilman bodies; live attenuated vaccine for travelers",
      "Zika: Guillain-Barré; congenital syndrome = ventriculomegaly + subcortical calcifications + microcephaly; sexual + vertical transmission",
      "Prions: PrPc → PrPsc (β-pleated); protease-resistant; autoclave-resistant; spongiform encephalopathy — dementia, ataxia, startle myoclonus, death",
    ],
    m3: [
      "Rabies: Negri bodies in Purkinje cells + hippocampal neurons; retrograde dynein travel via ACh receptors; US: bat/raccoon/skunk > dog",
      "Rabies PEP: wound cleaning + killed vaccine + rabies immunoglobulin = passive-active immunity",
      "Ebola: filovirus, 21-day incubation, DIC/hemorrhage/shock; RT-PCR within 48 h; contact + fomite transmission; isolation + barrier practices",
      "SARS-CoV-2: spike → ACE2 (lungs, intestines, heart, kidneys); NAAT standard, RAT less sensitive; mRNA + viral vector vaccines present the spike",
      "Virion parts: Spike (S), Lipid bilayer, Membrane (M), Envelope (E), Helical capsid with viral RNA",
    ],
    m10: [
      "CJD: rapidly progressive dementia, typically sporadic (some familial); variant CJD from BSE-contaminated food; kuru from cannibalism; iatrogenic CJD from CNS tissue/instruments",
      "Chikungunya = alphavirus/togavirus; dengue, yellow fever, Zika = flaviviruses — all Aedes-borne",
      "Dengue vaccine: live recombinant, yellow-fever backbone with dengue envelope + pre-membrane genes",
      "Page ownership: book 174's prions block belongs here; the normal-microbiota and foodborne blocks belong to M28",
      "The banner typo prints 'MICROCIOLOGY—VIROLOGY' on books 168-169 and 'MICROCIOLOGY—SYSTEMS' on book 174",
    ],
  },
  recall: [
    {
      q: "Contrast Chikungunya and dengue on the five table axes.",
      a: "VIRUS TYPE: Chikungunya = alphavirus/togavirus; dengue = flavivirus. SYMPTOMS: Chikungunya — high fever, maculopapular rash, headache, lymphadenopathy, inflammatory polyarthritis (arthralgias more common than dengue; joint swelling highly specific; less thrombocytopenia/leukopenia/hemorrhage); dengue — fever, rash, headache, myalgias, arthralgias, retro-orbital pain, neutropenia; hemorrhagic fever = dengue fever + bleeding and plasma leakage (severe thrombocytopenia, RBC perturbations), most common on different-serotype reinfection (antibody-dependent enhancement); shock syndrome = plasma leakage → circulatory collapse. DIAGNOSIS: both NAAT + serology. TREATMENT: Chikungunya supportive (steroids/DMARDs for chronic arthritis); dengue supportive (volume repletion or transfusion in shock). PREVENTION: Chikungunya — mosquito avoidance, no vaccine; dengue — live recombinant vaccine (yellow-fever backbone + dengue envelope and pre-membrane genes).",
    },
    {
      q: "Walk the rabies protocol from exposure to death.",
      a: "EXPOSURE: US — bat, raccoon, skunk bites more common than dog; aerosol in bat caves. ENTRY: binds ACh receptors, travels retrograde via dynein motors up nerve axons. INCUBATION: weeks to months. HISTOLOGY: bullet-shaped virus A; Negri bodies (cytoplasmic inclusions B) in Purkinje cells of cerebellum and hippocampal neurons. PROGRESSION: fever, malaise → agitation, photophobia, hydrophobia, hypersalivation → paralysis, coma → death. PEP: wound cleaning + killed vaccine + rabies immunoglobulin — passive-active immunity.",
    },
    {
      q: "Give the SARS-CoV-2 set: genome, spread, entry, severe complications, diagnostics, and vaccines.",
      a: "GENOME: ⊕ ssRNA. SPREAD: respiratory droplets, aerosols, fomites. SYMPTOMS: fever, myalgia, headache, congestion, sneezing, cough, sore throat, nausea, diarrhea, anosmia, dysgeusia. SEVERE: pneumonia, hypercoagulability (DVT, PE, stroke), myocardial injury, neurologic sequelae, shock, organ failure, death. ENTRY: spike protein → ACE2 (highly expressed in lungs, intestines, heart, kidneys). DIAGNOSIS: NAAT (RT-PCR) — the standard; rapid antigen test — rapid, accessible, less sensitive. VACCINES: mRNA and viral vector, presenting the spike protein → anti-spike antibodies. The virion: Spike (S), Lipid bilayer, Membrane (M), Envelope (E), Helical capsid with viral RNA.",
    },
    {
      q: "Walk the prion cascade with its diseases.",
      a: "CONVERSION: normal α-helical PrPc → β-pleated PrPsc, transmissible via CNS-related tissue (iatrogenic CJD) or BSE-contaminated food (variant CJD). RESISTANCE: PrPsc resists protease degradation and standard sterilizing procedures including standard autoclaving. AUTOCATALYSIS: PrPsc converts more PrPc to PrPsc. OUTCOME: spongiform encephalopathy — dementia, ataxia, startle myoclonus, death. DISEASES: Creutzfeldt-Jakob disease (rapidly progressive dementia, typically sporadic, some familial), bovine spongiform encephalopathy (mad cow), kuru (cannibalism-acquired).",
    },
    {
      q: "Contrast the four vaccine platforms this page carries.",
      a: "RABIES PEP: the KILLED vaccine plus RABIES IMMUNOGLOBULIN — passive-active immunity (the immunoglobulin bridges the gap while the vaccine induces active immunity). YELLOW FEVER: LIVE, ATTENUATED — recommended for travelers to endemic countries. DENGUE: LIVE, RECOMBINANT — derived from the yellow fever virus backbone with insertion of the dengue envelope and pre-membrane protein genes. SARS-COV-2: mRNA and VIRAL VECTOR vaccines — both present the SPIKE PROTEIN to the immune system, inducing anti-spike protein antibodies. Chikungunya, by contrast, has no vaccine currently available.",
    },
  ],
  related: [
    {
      title: "RNA Viruses: Families & Disease Map",
      topicId: "rna-viruses",
      note: "M24's flavivirus, togavirus, filovirus, rhabdovirus, and coronavirus rows are the family slots this note's Aedes trio and emerging set fill in — rabies is M24's rhabdovirus, Ebola its filovirus, SARS-CoV-2 its coronavirus, and the Aedes quartet its flaviviruses and togavirus.",
    },
    {
      title: "Active vs Passive Immunity & Vaccine Types",
      topicId: "active-passive-immunity",
      note: "E34's vaccine-type map is the recipient of this page's anchors: rabies PEP is the printed passive-active exemplar (immunoglobulin + killed vaccine), yellow fever the live attenuated, dengue the live recombinant, and SARS-CoV-2 the mRNA and viral vector platforms presenting the spike.",
    },
    {
      title: "DNA Viruses: Families & Disease Map",
      topicId: "dna-viruses",
      note: "M23's congenital-infection set (CMV, HSV-2) is the TORCH roster Zika's congenital syndrome joins — ventriculomegaly with subcortical calcifications and microcephaly, against CMV's periventricular calcifications.",
    },
  ],
  crossLinks: [
    {
      subject: "Neurology (Rapidly Progressive Dementia)",
      connection:
        "CJD's rapidly progressive dementia with ataxia and startle myoclonus anchors the neurodegenerative differential — against rabies encephalitis (hydrophobia, Negri bodies), SSPE years after measles, and the autoimmune encephalitides; Guillain-Barré is Zika's neurologic complication.",
    },
    {
      subject: "Obstetrics (Congenital Infection)",
      connection:
        "Congenital Zika syndrome — ventriculomegaly, subcortical calcifications, microcephaly, ocular anomalies, spasticity — joins the TORCH set as the arbovirus member, with sexual and vertical transmission routes.",
    },
    {
      subject: "Pharmacology (Prophylaxis and Antivirals)",
      connection:
        "This block is where vaccine platforms become clinical protocol: killed rabies vaccine plus immunoglobulin for exposure, live attenuated yellow fever for travel, the recombinant dengue design, and the mRNA and viral vector COVID vaccines — the platform logic the antimicrobial chapter builds on.",
    },
    {
      subject: "Public Health (Emerging Infections and Outbreak Control)",
      connection:
        "Ebola's contact tracing, isolation, barrier practices, and contact vaccination — plus SARS-CoV-2's droplet, aerosol, and fomite control with NAAT surveillance — are the outbreak-control template for every emerging-pathogen scenario.",
    },
  ],
};
