import type { KypUsMLENote } from "../types";

// Microbiology — VIROLOGY banner (M-batch 24). Source: pdf 186-189 / books
//  164-167 (RNA viruses — the 17-family table; Picornavirus / Rhinovirus /
//  Rotavirus; Influenza viruses with the shift-vs-drift map + Rubella +
//  Paramyxoviruses; croup + measles + mumps). Rasters: p187 the rotavirus EM
//  A; p188 the blueberry-muffin rubella rash A; p189 the steeple-sign x-ray
//  A, the Koplik spots A, the mumps parotitis A — COPYRIGHTED,
//  described-in-text only. The banner typo 'MICROCIOLOGY—VIROLOGY' prints on
//  books 164-167. FA's printed mnemonics (Retro flu is outta cyt; PERCH;
//  Toga CREW; Rhino has a runny nose; Rotavirus = right out the anus;
//  Sudden shift is more deadly than gradual drift; the 4 C's; POM-Poms;
//  Palivizumab for preemies) are quoted in the table blocks for verification
//  only — the public mnemonics below are KYP originals.

export const rnaViruses: KypUsMLENote = {
  id: "rna-viruses",
  title: "RNA Viruses: Families & Disease Map",
  subtitle:
    "The seventeen RNA families on the sense-coded grid, and the clinical sets behind them. THE RULES (book 164): all RNA viruses replicate in the CYTOPLASM — EXCEPT RETROVIRUS and INFLUENZA VIRUS (nuclear); ⊕ strand (≈ mRNA) is infectious alone, ⊝ strand needs its carried polymerase; the arbovirus footnote (a = arthropod-borne, mosquitoes and ticks). THE SEVENTEEN FAMILIES: REOVIRUSES (naked; DS linear, MULTISEGMENTED — rotavirus, the important cause of diarrhea in young children, may be fatal). The ⊕ naked set: PICORNAVIRUSES (poliovirus — the Salk IPV and Sabin OPV vaccines; echovirus — aseptic meningitis; rhinovirus — the common cold; coxsackievirus — aseptic meningitis, herpangina, hand-foot-and-mouth disease, myocarditis, pericarditis; HAV — acute viral hepatitis), HEPEVIRUS (HEV), CALICIVIRUSES (norovirus — viral gastroenteritis). The ⊕ enveloped set: FLAVIVIRUSES (HCV; the arbovirus quartet yellow fever, dengue, West Nile — meningoencephalitis and acute asymmetric flaccid paralysis — and Zika), TOGAVIRUSES (the arbovirus CREW: Chikungunya — co-infection with dengue can occur — and Eastern and Western equine encephalitis; rubella formerly a togavirus), MATANOVIRUS (rubella's new 2026 home), RETROVIRUSES (reverse transcriptase; HTLV — T-cell leukemia; HIV — AIDS), CORONAVIRUSES (common cold, SARS, COVID-19, MERS). The ⊝ enveloped set: ORTHOMYXOVIRUSES (influenza — SS ⊝ linear, MULTISEGMENTED), PARAMYXOVIRUSES (parainfluenza — croup; RSV — bronchiolitis in babies; measles, mumps), PNEUMOVIRUSES (RSV — bronchiolitis in babies), RHABDOVIRUSES (rabies), FILOVIRUSES (Ebola/Marburg virus disease — often fatal). The circular set: ARENAVIRUSES (SS ⊕ and ⊝, circular, multisegmented — LCMV; Lassa fever encephalitis, spread by rodents), BUNYAVIRUSES (SS ⊝ circular, multisegmented — California encephalitis, sandfly and Rift Valley fevers, Crimean-Congo hemorrhagic fever [all arboviruses]; Hantavirus — hemorrhagic fever, pneumonia), and DELTA VIRUS (SS ⊝ circular — HDV is defective, requiring HBV to replicate). INFLUENZA (book 166): enveloped ⊝ ssRNA, segmented, with HEMAGGLUTININ (binds sialic acid, promotes entry) and NEURAMINIDASE (promotes progeny release); fatal bacterial superinfection risk — S aureus, S pneumoniae, H influenzae; treatment supportive ± neuraminidase inhibitors (oseltamivir, zanamivir). ANTIGENIC SHIFT = coinfection of 1 cell by 2 different segmented viruses → RNA segment reassortment → a dramatically different virus → major global outbreaks (pandemics). ANTIGENIC DRIFT = random mutation in HA or NA → minor changes → local seasonal outbreaks (epidemics). The vaccine is reformulated yearly (killed most frequent; the intranasal live attenuated carries a temperature-sensitive mutant replicating in the nose but not the lung). THE CLINICAL SET (books 166-167): CROUP — parainfluenza; seal-like barking cough, inspiratory stridor, the STEEPLE SIGN. MEASLES (rubeola) — the cough-coryza-conjunctivitis prodrome, then KOPLIK SPOTS (bright red with blue-white centers on the buccal mucosa), then the descending maculopapular rash; Warthin-Finkeldey giant cells; SSPE, encephalitis 1:1000, giant cell pneumonia, ADEM; vitamin A reduces morbidity and mortality. MUMPS — parotitis, orchitis, aseptic meningitis, pancreatitis; sterility after puberty; MMR. RUBELLA — postauricular lymphadenopathy, arthralgias, the fine centrifugal rash; congenital TORCH triad: sensorineural deafness, cataracts, patent ductus arteriosus; blueberry-muffin lesions. RSV — the F (fusion) protein makes multinucleated cells; PALIVIZUMAB (anti-F) prevents RSV pneumonia in premature infants. THE GI SET (book 165): PICORNAVIRUS translates its RNA into 1 large polypeptide cleaved by virus-encoded proteases (the enteroviruses — polio, echo, coxsackie — cause aseptic meningitis); RHINOVIRUS is acid labile (destroyed by stomach acid — it does not infect the GI tract, unlike the other picornaviruses; >100 serologic types); ROTAVIRUS — the segmented dsRNA wheel; the most important global cause of infantile gastroenteritis; villous destruction with atrophy → ↓ Na+ absorption and K+ loss; CDC vaccination for all infants except intussusception history or SCID.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Virology",
  pilotCategory:
    "Virology — the 17-family grid on the sense axis (⊕ naked, ⊕ enveloped, ⊝ enveloped, and the circular multisegmented set), the influenza shift-vs-drift map, the pediatric paramyxovirus clinical set (croup, measles, mumps, rubella, RSV), and the GI trio (picornavirus, rhinovirus, rotavirus)",
  difficulty: 2,
  readTime: 16,
  sourceRef: "First Aid 2026, Part 1 pp. 164–167 (RNA viruses; Picornavirus; Rhinovirus; Rotavirus; Influenza viruses; Rubella virus; Paramyxoviruses; croup; measles; mumps)",
  tags: [
    "RNA viruses",
    "cytoplasmic replication",
    "retrovirus",
    "influenza virus",
    "nuclear replication",
    "reoviruses",
    "rotavirus",
    "infantile gastroenteritis",
    "picornaviruses",
    "poliovirus",
    "Salk vaccine",
    "Sabin vaccine",
    "IPV",
    "OPV",
    "echovirus",
    "rhinovirus",
    "common cold",
    "coxsackievirus",
    "herpangina",
    "hand-foot-and-mouth disease",
    "myocarditis",
    "pericarditis",
    "HAV",
    "hepevirus",
    "HEV",
    "caliciviruses",
    "norovirus",
    "viral gastroenteritis",
    "flaviviruses",
    "HCV",
    "yellow fever",
    "dengue",
    "West Nile virus",
    "acute asymmetric flaccid paralysis",
    "Zika virus",
    "togaviruses",
    "Chikungunya",
    "rubella",
    "equine encephalitis",
    "matonavirus",
    "retroviruses",
    "reverse transcriptase",
    "HTLV",
    "T-cell leukemia",
    "HIV",
    "AIDS",
    "coronaviruses",
    "SARS",
    "COVID-19",
    "MERS",
    "orthomyxoviruses",
    "influenza",
    "hemagglutinin",
    "sialic acid",
    "neuraminidase",
    "antigenic shift",
    "antigenic drift",
    "reassortment",
    "pandemics",
    "seasonal epidemics",
    "oseltamivir",
    "zanamivir",
    "paramyxoviruses",
    "parainfluenza",
    "croup",
    "steeple sign",
    "RSV",
    "bronchiolitis",
    "measles",
    "rubeola",
    "Koplik spots",
    "Warthin-Finkeldey giant cells",
    "SSPE",
    "vitamin A",
    "mumps",
    "parotitis",
    "orchitis",
    "pancreatitis",
    "MMR vaccine",
    "German measles",
    "postauricular lymphadenopathy",
    "blueberry muffin",
    "patent ductus arteriosus",
    "cataracts",
    "sensorineural deafness",
    "palivizumab",
    "F protein",
    "pneumoviruses",
    "rhabdoviruses",
    "rabies",
    "filoviruses",
    "Ebola",
    "Marburg",
    "arenaviruses",
    "LCMV",
    "Lassa fever",
    "bunyaviruses",
    "California encephalitis",
    "Crimean-Congo hemorrhagic fever",
    "Hantavirus",
    "delta virus",
    "HDV",
    "defective virus",
    "arbovirus",
    "acid labile",
    "intussusception",
    "SCID",
  ],
  core: {
    what: "THE SENSE-CODED GRID (book 164). Seventeen families, organized by what the genome looks like and whether it wears an envelope. THE DS FAMILY: REOVIRUSES — naked, DS linear and MULTISEGMENTED; rotavirus is the important cause of diarrhea in young children (may be fatal). THE ⊕ NAKED SET: PICORNAVIRUSES (poliovirus with its Salk IPV and Sabin OPV vaccines; echovirus — aseptic meningitis; rhinovirus — the common cold; coxsackievirus — aseptic meningitis, herpangina with mouth blisters and fever, hand-foot-and-mouth disease, myocarditis, pericarditis; HAV — acute viral hepatitis), HEPEVIRUS (HEV), and CALICIVIRUSES (norovirus — viral gastroenteritis). THE ⊕ ENVELOPED SET: FLAVIVIRUSES (HCV plus the arbovirus quartet — yellow fever, dengue, West Nile virus with meningoencephalitis and acute asymmetric flaccid paralysis, and Zika virus), TOGAVIRUSES (the arbovirus members Chikungunya virus — co-infection with dengue virus can occur — and Eastern and Western equine encephalitis; rubella, formerly a togavirus), MATANOVIRUS (rubella — the 2026 reclassification), RETROVIRUSES (have reverse transcriptase; HTLV — T-cell leukemia; HIV — AIDS), and CORONAVIRUSES (the common cold, SARS, COVID-19, MERS). THE ⊝ ENVELOPED SET: ORTHOMYXOVIRUSES (influenza virus — SS ⊝ linear, MULTISEGMENTED, the nuclear exception), PARAMYXOVIRUSES (parainfluenza — croup; RSV — bronchiolitis in babies; measles, mumps), PNEUMOVIRUSES (RSV — bronchiolitis in babies), RHABDOVIRUSES (rabies), and FILOVIRUSES (Ebola/Marburg virus disease — often fatal). THE CIRCULAR SET: ARENAVIRUSES (SS ⊕ AND ⊝, circular, multisegmented — LCMV, lymphocytic choriomeningitis virus; Lassa fever encephalitis, spread by rodents), BUNYAVIRUSES (SS ⊝ circular, multisegmented — the arboviruses California encephalitis, sandfly and Rift Valley fevers, and Crimean-Congo hemorrhagic fever; Hantavirus — hemorrhagic fever, pneumonia), and DELTA VIRUS (SS ⊝ circular — HDV is defective and requires the presence of HBV to replicate). THE REPLICATION RULE: all replicate in the cytoplasm, EXCEPT retrovirus and influenza virus. INFLUENZA (book 166): enveloped ⊝ ssRNA with a segmented genome carrying HEMAGGLUTININ (binds sialic acid and promotes viral entry) and NEURAMINIDASE (promotes progeny virion release); superinfection risk with S aureus, S pneumoniae, and H influenzae; treatment supportive ± oseltamivir or zanamivir. ANTIGENIC SHIFT — infection of 1 cell by 2 different segmented viruses → RNA segment reassortment → a dramatically different virus → major global outbreaks (pandemics). ANTIGENIC DRIFT — random mutation in hemagglutinin or neuraminidase genes → minor changes → frequent local seasonal outbreaks (epidemics). THE VACCINE is reformulated each season; killed vaccine most frequently used; the live attenuated intranasal vaccine contains a temperature-sensitive mutant that replicates in the nose but not the lung. THE CLINICAL SET: CROUP (acute laryngotracheobronchitis, parainfluenza) — seal-like barking cough and inspiratory stridor; upper-tracheal and subglottic narrowing gives the STEEPLE SIGN on x-ray A. MEASLES (rubeola) — prodromal fever with cough, coryza, and conjunctivitis, then KOPLIK SPOTS (bright red spots with blue-white centers on the buccal mucosa A), then a maculopapular rash starting at the head and neck and spreading downward; lymphadenitis with Warthin-Finkeldey giant cells (fused lymphocytes) in paracortical hyperplasia; sequelae — SSPE (personality changes, dementia, autonomic dysfunction, death, years later), encephalitis 1:1000 (days after the rash), giant cell pneumonia (rare except in the immunosuppressed), and acute disseminated (postinfectious) encephalomyelitis; vitamin A supplementation reduces morbidity and mortality, and pneumonia is the most common cause of measles-associated death in children. MUMPS — parotitis A, orchitis, aseptic meningitis, pancreatitis; sterility risk especially after puberty; uncommon thanks to the MMR vaccine. RUBELLA — German (3-day) measles: fever, postauricular and other lymphadenopathy, arthralgias, and a fine maculopapular rash starting on the face and spreading centrifugally; mild in children but a serious congenital TORCH disease — the classic triad of sensorineural deafness, cataracts, and patent ductus arteriosus, with blueberry-muffin lesions from dermal extramedullary hematopoiesis A. RSV AND THE F PROTEIN — all paramyxoviruses carry the surface F (fusion) protein that fuses respiratory epithelial cells into multinucleated cells; PALIVIZUMAB, a monoclonal antibody against F, prevents RSV pneumonia in premature infants. THE GI SET: PICORNAVIRUS translates its RNA into 1 large polypeptide cleaved by virus-encoded proteases into functional viral proteins; poliovirus, echovirus, and coxsackievirus are enteroviruses that cause aseptic (viral) meningitis. RHINOVIRUS — nonenveloped, the common cold with >100 serologic types, ACID LABILE (destroyed by stomach acid, so it does not infect the GI tract, unlike the other picornaviruses). ROTAVIRUS — segmented dsRNA (a reovirus) A; the most important global cause of infantile gastroenteritis and a major cause of acute winter diarrhea in US day-care centers; villous destruction with atrophy → ↓ Na+ absorption and K+ loss; the CDC recommends routine vaccination of all infants EXCEPT those with a history of intussusception (a rare adverse vaccine effect) or SCID.",
    why: "This block is the RNA half of the family map and the largest table in virology, carrying five exam institutions. The first is THE SENSE AXIS: ⊕ families (pico through corona) against ⊝ families (ortho through filo) with the circular ambisense set (arena, bunya, delta) — the same sense logic M22 established, now with seventeen named families on it. The second is THE EXCEPTION PAIR: every RNA virus replicates in the cytoplasm except RETROVIRUS (it must integrate — the provirus needs the nucleus) and INFLUENZA (its segmented genome is transcribed in the nucleus) — the mirror image of poxvirus among the DNA viruses. The third is THE SHIFT-DRIFT MAP: shift is reassortment (M22's mechanism) producing pandemics, drift is HA/NA point mutation producing seasonal epidemics — and the yearly reformulated vaccine exists because of both. The fourth is THE PEDIATRIC SET: croup's steeple sign, measles' Koplik-spot prodrome with the descending rash and SSPE, mumps' POM quartet, rubella's congenital deafness-cataracts-PDA triad, and RSV's F protein with palivizumab — the child-with-a-rash-and-a-fever differential. The fifth is THE DEFECTIVE VIRUS: delta virus requires HBV — M22's complementation example now placed in its family slot, closing the loop between the genetics page and the family map.",
    keyIdea: "Sense first, envelope second, segments third. ⊕ NAKED: PICO (polio IPV/OPV, echo, rhino cold, coxsackie HFMD, HAV), HEPE (HEV), CALICI (noro). ⊕ ENVELOPED: FLAVI (HCV + yellow fever, dengue, West Nile AFP, Zika — arboviruses), TOGA (Chikungunya + equine encephalitides — arboviruses), MATANO (rubella), RETRO (RT; HTLV, HIV), CORONA (cold, SARS, COVID-19, MERS). ⊝ ENVELOPED: ORTHO (influenza — SEGMENTED, nuclear), PARAMYXO (parainfluenza croup, RSV bronchiolitis, measles, mumps), PNEUMO (RSV), RHABDO (rabies), FILO (Ebola/Marburg). CIRCULAR: ARENA (⊕ and ⊝ — LCMV, Lassa from rodents), BUNYA (⊝ — California encephalitis, sandfly/Rift Valley, Crimean-Congo; Hantavirus), DELTA (defective — needs HBV). All cytoplasmic EXCEPT retrovirus + influenza. INFLUENZA: HA binds sialic acid (entry), NA releases progeny; shift = reassortment = pandemics; drift = HA/NA mutation = seasonal epidemics; superinfection S aureus, S pneumoniae, H influenzae; oseltamivir/zanamivir; yearly reformulated killed vaccine. PEDIATRIC SET: croup (parainfluenza, seal cough, steeple sign); measles (3 C's prodrome → Koplik → descending rash; Warthin-Finkeldey; SSPE, encephalitis 1:1000, giant cell pneumonia, ADEM; vitamin A); mumps (parotitis, orchitis, meningitis, pancreatitis — sterility post-puberty); rubella (postauricular nodes, centrifugal rash; congenital deafness + cataracts + PDA; blueberry muffin); RSV (F protein; palivizumab for preemies). GI SET: picorna = 1 polypeptide cleaved by proteases; rhino = acid labile (>100 types, no GI); rota = wheel, villous atrophy, ↓Na+ ↓K+; vaccine except intussusception/SCID.",
  },
  mechanisms: [
    {
      id: "rna-sense-grid-logic",
      title: "The sense-coded grid: what the genome is determines what the virus can do",
      context: "The seventeen families on three axes — sense, envelope, segmentation",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An RNA virus appears in a stem — place it on the grid",
            sublabel: "Input — the placement question.",
            variant: "input",
          },
          {
            id: "s1",
            label: "AXIS 1 — SENSE: ⊕ strand (≈ mRNA, infectious alone — the cell reads it at once) vs ⊝ strand (the virion must carry RNA-dependent RNA polymerase). The ⊕ set runs pico-hepe-calici (naked) through flavi-toga-matano-retro-corona (enveloped); the ⊝ set runs ortho-paramyxo-pneumo-rhabdo-filo (all enveloped, linear); the CIRCULAR set splits arena (⊕ AND ⊝, ambisense) from bunya (⊝) and delta (⊝)",
            sublabel: "Process — sense predicts polymerase dependence and infectivity.",
            variant: "process",
          },
          {
            id: "s2",
            label: "AXIS 2 — ENVELOPE: only the ⊕ picornavirus-hepevirus-calicivirus trio and the reoviruses are NAKED; every ⊝ family is enveloped. The envelope carries the arbovirus members' entry machinery — flaviviruses and togaviruses travel by mosquito and tick (the a footnote)",
            sublabel: "Process — the naked RNA set is small; the ⊝ set is never naked.",
            variant: "process",
          },
          {
            id: "s3",
            label: "AXIS 3 — SEGMENTATION AND THE EXCEPTION PAIR: the multisegmented set = reoviruses (DS), orthomyxoviruses (influenza), arenaviruses, bunyaviruses — segmentation enables REASORTMENT (M22's antigenic shift). All replicate in the CYTOPLASM except RETROVIRUS (proviral integration needs the nucleus) and INFLUENZA (nuclear transcription of its segments)",
            sublabel: "Process — segments enable shift; two viruses leave the cytoplasm.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the family anchors: rotavirus (infantile diarrhea), the PERCH diseases (polio-meningitis set), norovirus gastroenteritis, HCV and the arbovirus quartet, Chikungunya and equine encephalitis, rubella's new matonavirus home, HTLV and HIV, COVID-19, influenza, the pediatric paramyxovirus set, rabies, Ebola/Marburg, Lassa and LCMV, the bunyavirus fevers, and defective delta needing HBV",
            sublabel: "Output — the grid places the family; the anchors place the disease.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "sense first" },
          { from: "s1", to: "s2", label: "then envelope" },
          { from: "s2", to: "s3", label: "then segments + the exceptions" },
          { from: "s3", to: "o1", label: "the anchors" },
        ],
      },
    },
    {
      id: "shift-drift-clinical-map",
      title: "Shift, drift, and the pediatric set: how segmented genomes and F proteins make disease",
      context: "Influenza's two change mechanisms and the paramyxovirus clinical quartet",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A respiratory virus stem — new strain, barking cough, rash, or a preemie",
            sublabel: "Input — the clinical question.",
            variant: "input",
          },
          {
            id: "s1",
            label: "INFLUENZA'S ENTRY-EXIT PAIR: HEMAGGLUTININ binds sialic acid and promotes viral entry; NEURAMINIDASE promotes progeny virion release — the pair every flu drug and vaccine targets (oseltamivir, zanamivir block NA; the yearly vaccine chases HA and NA)",
            sublabel: "Process — one protein gets the virus in, the other lets it out.",
            variant: "process",
          },
          {
            id: "s2",
            label: "SHIFT VS DRIFT: SHIFT = infection of 1 cell by 2 different segmented viruses → RNA segment REASORTMENT → a dramatically different virus → major global outbreaks (pandemics). DRIFT = random mutation in HA or NA genes → minor protein changes → frequent local seasonal outbreaks (epidemics). Sudden shift is more deadly than gradual drift",
            sublabel: "Process — reassortment (segments) vs point mutation (epitopes).",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE PEDIATRIC SET: CROUP — parainfluenza, seal-like barking cough, inspiratory stridor, STEEPLE SIGN (subglottic narrowing). MEASLES — cough, coryza, conjunctivitis → KOPLIK SPOTS → descending rash; Warthin-Finkeldey giant cells; SSPE (years later), encephalitis (days, 1:1000), giant cell pneumonia (immunosuppressed), ADEM; VITAMIN A reduces mortality. MUMPS — parotitis, orchitis, aseptic meningitis, pancreatitis; sterility after puberty. RUBELLA — postauricular nodes, centrifugal rash; congenital DEAFNESS-CATARACTS-PDA triad with blueberry-muffin lesions. RSV — F (fusion) protein → multinucleated cells; PALIVIZUMAB (anti-F) protects preemies",
            sublabel: "Process — each virus owns one pathognomonic sign.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the GI trio closes the map: picornavirus's one-polypeptide strategy (protease cleavage; the enteroviruses cause aseptic meningitis), rhinovirus's acid lability (the cold that cannot survive the stomach), and rotavirus's villous atrophy (↓ Na+ absorption, K+ loss; the vaccine excluding intussusception history and SCID)",
            sublabel: "Output — the gut set completes the seventeen.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "HA in, NA out" },
          { from: "s1", to: "s2", label: "shift vs drift" },
          { from: "s2", to: "s3", label: "the pediatric signs" },
          { from: "s3", to: "o1", label: "the GI trio" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "rna-virus-family-map",
      title: "The RNA family map — sense-coded, with the clinical sets",
      caption:
        "An original KYP redraw of the source's four-page block (books 164-167): the cytoplasm-rule + sense-code strip, the 17-family grid with a SENSE chip per row (⊕ brand, ⊝/DS emergency), the influenza shift/drift panel, the pediatric clinical set (croup, measles, mumps, rubella, RSV), and the GI trio panel.",
      notice:
        "The printed photographs — the rotavirus electron micrograph A (the wheel-like capsid), the blueberry-muffin congenital rubella rash A, the steeple-sign x-ray A, the Koplik spots A, and the mumps parotitis A — are raster, COPYRIGHTED, described-in-text only. FA's printed mnemonics (Retro flu is outta cyt; PERCH; Toga CREW; Rhino has a runny nose; Rotavirus = right out the anus; Sudden shift is more deadly than gradual drift; the 4 C's of measles; POM-Poms; Palivizumab for preemies) stay in the table blocks below — verification-only, not redrawn.",
    },
    {
      kind: "table",
      title: "The seventeen RNA families — verbatim",
      intro:
        "The source's table (book 164), verbatim, including the structure footnote and the arbovirus superscript.",
      columns: ["Family", "Envelope · RNA structure · Medical importance (verbatim)"],
      rows: [
        [
          "Reoviruses",
          "ENVELOPE: No. RNA STRUCTURE: DS linear; Multisegmented. MEDICAL IMPORTANCE: Rotavirus—important cause of diarrhea in young children; may be fatal.",
        ],
        [
          "Picornaviruses",
          "ENVELOPE: No. RNA STRUCTURE: SS ⊕ linear. MEDICAL IMPORTANCE: Poliovirus—polio-Salk/Sabin vaccines—IPV/OPV. Echovirus—aseptic meningitis. Rhinovirus—“common cold”. Coxsackievirus—aseptic meningitis; herpangina (mouth blisters, fever); hand, foot, and mouth disease; myocarditis; pericarditis. HAV—acute viral hepatitis. [FA gloss, printed: PERCH — verification-only.]",
        ],
        [
          "Hepevirus",
          "ENVELOPE: No. RNA STRUCTURE: SS ⊕ linear. MEDICAL IMPORTANCE: HEV.",
        ],
        [
          "Caliciviruses",
          "ENVELOPE: No. RNA STRUCTURE: SS ⊕ linear. MEDICAL IMPORTANCE: Norovirus—viral gastroenteritis.",
        ],
        [
          "Flaviviruses",
          "ENVELOPE: Yes. RNA STRUCTURE: SS ⊕ linear. MEDICAL IMPORTANCE: HCV. Yellow fever ᵃ. Dengue ᵃ. West Nile virus ᵃ—meningoencephalitis, acute asymmetric flaccid paralysis. Zika virus ᵃ.",
        ],
        [
          "Togaviruses",
          "ENVELOPE: Yes. RNA STRUCTURE: SS ⊕ linear. MEDICAL IMPORTANCE: Toga CREW—Chikungunya virus ᵃ (co-infection with dengue virus can occur), Rubella (formerly a togavirus), Eastern and Western equine encephalitis ᵃ. [Toga CREW is FA's printed gloss — verification-only.]",
        ],
        [
          "Matonavirus",
          "ENVELOPE: Yes. RNA STRUCTURE: SS ⊕ linear. MEDICAL IMPORTANCE: Rubella. [The 2026 reclassification: rubella moves from the togaviruses to its own family — the source lists it in both rows.]",
        ],
        [
          "Retroviruses",
          "ENVELOPE: Yes. RNA STRUCTURE: SS ⊕ linear. MEDICAL IMPORTANCE: Have reverse transcriptase. HTLV—T-cell leukemia. HIV—AIDS.",
        ],
        [
          "Coronaviruses",
          "ENVELOPE: Yes. RNA STRUCTURE: SS ⊕ linear. MEDICAL IMPORTANCE: “Common cold,” SARS, COVID-19, MERS.",
        ],
        [
          "Orthomyxoviruses",
          "ENVELOPE: Yes. RNA STRUCTURE: SS ⊝ linear; Multisegmented. MEDICAL IMPORTANCE: Influenza virus.",
        ],
        [
          "Paramyxoviruses",
          "ENVELOPE: Yes. RNA STRUCTURE: SS ⊝ linear. MEDICAL IMPORTANCE: Parainfluenza—croup. RSV—bronchiolitis in babies. Measles, Mumps. [FA gloss, printed: PaRaMyxovirus — verification-only.]",
        ],
        [
          "Pneumoviruses",
          "ENVELOPE: Yes. RNA STRUCTURE: SS ⊝ linear. MEDICAL IMPORTANCE: RSV—bronchiolitis in babies.",
        ],
        [
          "Rhabdoviruses",
          "ENVELOPE: Yes. RNA STRUCTURE: SS ⊝ linear. MEDICAL IMPORTANCE: Rabies.",
        ],
        [
          "Filoviruses",
          "ENVELOPE: Yes. RNA STRUCTURE: SS ⊝ linear. MEDICAL IMPORTANCE: Ebola/Marburg virus disease—often fatal.",
        ],
        [
          "Arenaviruses",
          "ENVELOPE: Yes. RNA STRUCTURE: SS ⊕ and ⊝ circular; Multisegmented. MEDICAL IMPORTANCE: LCMV—lymphocytic choriomeningitis virus. Lassa fever encephalitis—spread by rodents.",
        ],
        [
          "Bunyaviruses",
          "ENVELOPE: Yes. RNA STRUCTURE: SS ⊝ circular; Multisegmented. MEDICAL IMPORTANCE: California encephalitis ᵃ. Sandfly/Rift Valley fevers ᵃ. Crimean-Congo hemorrhagic fever ᵃ. Hantavirus—hemorrhagic fever, pneumonia.",
        ],
        [
          "Delta virus",
          "ENVELOPE: Yes. RNA STRUCTURE: SS ⊝ circular. MEDICAL IMPORTANCE: HDV is “Defective”; requires presence of HBV to replicate.",
        ],
        [
          "Structure footnote (printed)",
          "SS, single-stranded; DS, double-stranded; ⊕, positive sense; ⊝, negative sense; a = arbovirus, arthropod borne (mosquitoes, ticks).",
        ],
        [
          "The cytoplasm rule (printed intro)",
          "All replicate in the cytoplasm (except retrovirus and influenza virus). [FA gloss, printed: “Retro flu is outta cyt (sight).” — verification-only.]",
        ],
      ],
      caption:
        "The table reads with the sense-grid mechanism: the SENSE chip on each row of the visual matches the RNA STRUCTURE column here. The Matonavirus row is the 2026 edition's reclassification — rubella appears both in the Toga CREW (as 'formerly a togavirus') and in its own family row; both listings are carried verbatim.",
    },
    {
      kind: "table",
      title: "The detail blocks — picornavirus through mumps, verbatim",
      intro:
        "The source's four detail pages (books 165-167), verbatim.",
      columns: ["Block", "Content (verbatim; FA glosses marked)"],
      rows: [
        [
          "Picornavirus (book 165)",
          "Includes Poliovirus, Echovirus, Rhinovirus, Coxsackievirus, and HAV. RNA is translated into 1 large polypeptide that is cleaved by virus-encoded proteases into functional viral proteins. Poliovirus, echovirus, and coxsackievirus are enteroviruses and can cause aseptic (viral) meningitis. [FA glosses, printed: PicoRNAvirus = small RNA virus; PERCH on a “peak” (pico) — verification-only.]",
        ],
        [
          "Rhinovirus (book 165)",
          "A picornavirus. Nonenveloped RNA virus. Cause of common cold; >100 serologic types. Acid labile—destroyed by stomach acid; therefore, does not infect the GI tract (unlike the other picornaviruses). [FA gloss, printed: Rhino has a runny nose — verification-only.]",
        ],
        [
          "Rotavirus (book 165)",
          "Segmented dsRNA virus (a reovirus) A (the printed EM shows the wheel-like capsid — described-in-text only). Most important global cause of infantile gastroenteritis. Major cause of acute diarrhea in the United States during winter, especially in day care centers, kindergartens. Villous destruction with atrophy leads to ↓ absorption of Na+ and loss of K+. CDC recommends routine vaccination of all infants except those with a history of intussusception (rare adverse effect of rotavirus vaccination) or SCID. [FA gloss, printed: Rotavirus = right out the anus — verification-only.]",
        ],
        [
          "Influenza viruses (book 166)",
          "Orthomyxoviruses. Enveloped, ⊝ ssRNA viruses with segmented genome. Contain hemagglutinin (binds sialic acid and promotes viral entry) and neuraminidase (promotes progeny virion release) antigens. Patients at risk for fatal bacterial superinfection, most commonly S aureus, S pneumoniae, and H influenzae. Treatment: supportive +/– neuraminidase inhibitor (eg, oseltamivir, zanamivir).",
        ],
        [
          "Genetic/antigenic shift vs drift (book 166)",
          "SHIFT: Infection of 1 cell by 2 different segmented viruses (eg, swine influenza and human influenza viruses) → RNA segment reassortment → dramatically different virus (genetic shift) → major global outbreaks (pandemics). DRIFT: Random mutation in hemagglutinin (HA) or neuraminidase (NA) genes → minor changes in HA or NA protein (drift) occur frequently → local seasonal outbreaks (epidemics). [FA glosses, printed: Hemagglutinin: lets the virus in; Neuraminidaways: sends the virus away; Sudden shift is more deadly than gradual drift — verification-only.]",
        ],
        [
          "The influenza vaccine (book 166)",
          "Reformulated vaccine (“the flu shot”) contains viral strains most likely to appear during the flu season, due to the virus’ rapid genetic change. Killed viral vaccine is most frequently used. Live attenuated vaccine contains temperature-sensitive mutant that replicates in the nose but not the lung; administered intranasally.",
        ],
        [
          "Rubella virus (book 166)",
          "A matonavirus. Causes rubella, formerly called German (3-day) measles. Fever, postauricular and other lymphadenopathy, arthralgias, and fine, maculopapular rash that starts on face and spreads centrifugally to involve trunk and extremities A (printed photo — the blueberry-muffin congenital rash; described-in-text only). Causes mild disease in children but serious congenital disease (a TORCH infection). Congenital rubella findings include classic triad of sensorineural deafness, cataracts, and patent ductus arteriosus. “Blueberry muffin” appearance may be seen due to dermal extramedullary hematopoiesis.",
        ],
        [
          "Paramyxoviruses (book 166)",
          "Paramyxoviruses cause disease in children. They include those that cause parainfluenza (croup), mumps, measles, RSV, and human metapneumovirus. All subtypes can cause respiratory tract infection (bronchiolitis, pneumonia) in infants. All contain surface F (fusion) protein, which causes respiratory epithelial cells to fuse and form multinucleated cells. Palivizumab (monoclonal antibody against F protein) prevents pneumonia caused by RSV infection in premature infants. [FA gloss, printed: Palivizumab for paramyxovirus (RSV) prophylaxis in preemies — verification-only.]",
        ],
        [
          "Croup (book 167)",
          "Also called acute laryngotracheobronchitis. Caused by parainfluenza viruses. Virus membrane contains hemagglutinin (binds sialic acid and promotes viral entry) and neuraminidase (promotes progeny virion release) antigens. Results in a “seal-like” barking cough and inspiratory stridor. Narrowing of upper trachea and subglottis leads to characteristic steeple sign on x-ray A (printed radiograph, with T marking the trachea — described-in-text only).",
        ],
        [
          "Measles (rubeola) virus (book 167)",
          "Usual presentation involves prodromal fever with cough, coryza, and conjunctivitis, then eventually Koplik spots (bright red spots with blue-white center on buccal mucosa A — printed photo, described-in-text only), followed 1-2 days later by a maculopapular rash that starts at the head/neck and spreads downward. Lymphadenitis with Warthin-Finkeldey giant cells (fused lymphocytes) in a background of paracortical hyperplasia. Possible sequelae: Subacute sclerosing panencephalitis (SSPE): personality changes, dementia, autonomic dysfunction, death (occurs years later). Encephalitis (1:1000): symptoms appear within few days of rash. Giant cell pneumonia (rare except in immunosuppressed). Acute disseminated (postinfectious) encephalomyelitis. [FA glosses, printed: the 4 C's of measles — Cough, Coryza, Conjunctivitis, “C”oplik spots — verification-only.] Vitamin A supplementation can reduce morbidity and mortality from measles, particularly in malnourished children. Pneumonia is the most common cause of measles-associated death in children.",
        ],
        [
          "Mumps virus (book 167)",
          "Uncommon due to effectiveness of MMR vaccine. Symptoms: Parotitis A (printed photo — described-in-text only), Orchitis (inflammation of testes), aseptic Meningitis, and Pancreatitis. Can cause sterility (especially after puberty). [FA gloss, printed: Mumps makes your parotid glands and testes as big as POM-Poms — verification-only.]",
        ],
      ],
      caption:
        "The blocks read with the shift-drift-clinical mechanism: influenza's HA/NA pair and the shift/drift split; the pediatric signs (steeple, Koplik, POM, the TORCH triad); and the GI trio's logic (one polypeptide, acid lability, villous atrophy).",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the map implies",
      body: "THE PLACEMENT PROTOCOL: sense (⊕ or ⊝) → envelope (the ⊕ naked trio + reoviruses vs everything else enveloped) → segments (reo, ortho, arena, bunya) → the circular set (arena ambisense, bunya, delta). THE EXCEPTION PROTOCOL: cytoplasmic replication for all RNA viruses EXCEPT retrovirus (provirus) and influenza (nuclear) — the mirror of poxvirus among DNA viruses. THE INFLUENZA PROTOCOL: HA binds sialic acid (entry), NA releases progeny (the oseltamivir/zanamivir target); SHIFT (reassortment, pandemics) vs DRIFT (HA/NA point mutation, seasonal epidemics); superinfection with S aureus, S pneumoniae, H influenzae; yearly reformulated killed vaccine (the intranasal live vaccine is temperature-sensitive — nose yes, lung no). THE PEDIATRIC PROTOCOL: barking seal cough + stridor + STEEPLE SIGN = croup (parainfluenza); 3 C's prodrome → KOPLIK SPOTS → descending rash = measles (Warthin-Finkeldey; SSPE years later, encephalitis in days at 1:1000; give VITAMIN A); parotitis + orchitis + meningitis + pancreatitis = mumps (sterility after puberty; MMR prevents); postauricular nodes + centrifugal rash = rubella (congenital: DEAFNESS, CATARACTS, PDA — the TORCH triad with blueberry-muffin lesions); a preemie in RSV season = PALIVIZUMAB (anti-F). THE GI PROTOCOL: winter day-care diarrhea = rotavirus (villous atrophy, ↓ Na+ absorption, K+ loss; vaccinate all infants EXCEPT intussusception history or SCID); cruise-ship gastroenteritis = norovirus; a cold that never reaches the gut = rhinovirus (acid labile, >100 types). THE DEFECTIVE VIRUS: delta needs HBV — complementation placed in its family slot.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 6-year-old has 3 days of fever with cough, coryza, and conjunctivitis; today her mother notices small red spots with blue-white centers on her buccal mucosa, and by the next day a maculopapular rash starts at her hairline and moves down.",
        discriminator: "The 3 C's prodrome + Koplik spots + descending rash",
        concept: "Measles (rubeola) — a paramyxovirus",
        answer:
          "Measles presents with prodromal fever, cough, coryza, and conjunctivitis, then Koplik spots (bright red spots with blue-white centers on the buccal mucosa), followed 1-2 days later by a maculopapular rash that starts at the head and neck and spreads downward. Warthin-Finkeldey giant cells appear in lymph nodes; sequelae include SSPE (years later), encephalitis (1:1000, within days), giant cell pneumonia (immunosuppressed), and ADEM. Vitamin A supplementation reduces morbidity and mortality; pneumonia is the most common cause of measles-associated death in children.",
      },
      {
        stem: "A novel influenza A strain appears containing genome segments from both avian and human lineages and rapidly causes a worldwide pandemic, while annual seasonal outbreaks arise from gradual epitope changes.",
        discriminator: "Segment reassortment vs point mutation — pandemics vs epidemics",
        concept: "Antigenic shift vs antigenic drift",
        answer:
          "ANTIGENIC SHIFT: infection of 1 cell by 2 different segmented viruses → RNA segment reassortment → a dramatically different virus → major global outbreaks (pandemics). ANTIGENIC DRIFT: random mutation in hemagglutinin or neuraminidase genes → minor changes in HA or NA proteins → frequent local seasonal outbreaks (epidemics). Sudden shift is more deadly than gradual drift — and the flu shot is reformulated every year because of both.",
      },
      {
        stem: "A 3-month-old former 28-week preemie develops bronchiolitis during winter; a monoclonal antibody given monthly through the season has been ordered to prevent severe disease.",
        discriminator: "Prematurity + RSV season + prophylactic monoclonal antibody",
        concept: "Palivizumab — anti-F protein prophylaxis",
        answer:
          "All paramyxoviruses carry the surface F (fusion) protein, which fuses respiratory epithelial cells into multinucleated cells. Palivizumab, a monoclonal antibody against the F protein, prevents pneumonia caused by RSV infection in premature infants. RSV is the bronchiolitis of babies — listed under BOTH the paramyxoviruses and the pneumoviruses in the family table.",
      },
    ],
    traps: [
      {
        a: "Rhinovirus causes gastroenteritis like the other picornaviruses",
        b: "Rhinovirus is ACID LABILE — destroyed by stomach acid; it does NOT infect the GI tract (unlike the other picornaviruses, which are enteroviruses)",
        whyConfused: "It sits in the same family as the enteric picornaviruses.",
        keyDifference:
          "The acid-lability line is the discriminator: polio, echo, and coxsackie are ENTEROVIRUSES (survive stomach acid, cause aseptic meningitis); rhinovirus stays in the nose (>100 serologic types, the common cold). Rotavirus, the actual infantile gastroenteritis virus, is a reovirus — segmented dsRNA, not a picornavirus at all.",
        clue: "Any picornavirus-route or GI-tropism question.",
      },
      {
        a: "All RNA viruses replicate in the cytoplasm",
        b: "The two exceptions are RETROVIRUS (proviral DNA integration requires the nucleus) and INFLUENZA VIRUS (its segments are transcribed in the nucleus)",
        whyConfused: "The cytoplasm rule is taught as absolute for RNA viruses.",
        keyDifference:
          "The exception pair is the RNA-side mirror of poxvirus on the DNA side (pox is the only DNA virus outside the nucleus). Retrovirus needs the nucleus to integrate via reverse transcriptase; influenza needs it to transcribe its segmented ⊝ genome — and segmentation is also what enables its pandemic-causing reassortment.",
        clue: "Any RNA-virus replication-site question.",
      },
      {
        a: "Rubella is a togavirus",
        b: "In the 2026 classification, rubella is a MATANOVIRUS — 'formerly a togavirus' in the source's own Toga CREW row, with its own family row in the table",
        whyConfused: "Older resources list rubella with the togaviruses.",
        keyDifference:
          "The exam consequences are clinical, not taxonomic: rubella's fine centrifugal rash with POSTAURICULAR lymphadenopathy, the congenital TORCH triad (deafness, cataracts, PDA), and blueberry-muffin lesions. The matonavirus row is the 2026 reclassification — both listings are carried in the note's table verbatim.",
        clue: "Any rubella classification or congenital-infection stem.",
      },
    ],
    pivots: [
      {
        lookAlike: "Orthomyxoviruses vs paramyxoviruses",
        differentiator: "Segmentation, the F protein, and the diseases",
        correctPath:
          "ORTHOMYXOVIRUSES: influenza — SS ⊝ linear, MULTISEGMENTED (the shift/drift machinery; HA and NA; nuclear transcription). PARAMYXOVIRUSES: parainfluenza (croup), RSV (bronchiolitis), measles, mumps — SS ⊝ linear, NONsegmented, all carrying the F (fusion) protein (multinucleated cells; palivizumab targets it on RSV). RSV also lives under the PNEUMOVIRUSES row — the 2026 table lists it in both places.",
      },
      {
        lookAlike: "The two hemorrhagic-virus families (filoviruses vs bunyaviruses)",
        differentiator: "Shape, segments, and the vector",
        correctPath:
          "FILOVIRUSES: SS ⊝ LINEAR — Ebola/Marburg virus disease, often fatal, no arthropod vector in the table. BUNYAVIRUSES: SS ⊝ CIRCULAR, MULTISEGMENTED — the arbovirus fevers (California encephalitis, sandfly and Rift Valley, Crimean-Congo hemorrhagic fever, all mosquito/tick-borne) plus Hantavirus (hemorrhagic fever with renal syndrome and pneumonia, the rodent-borne exception).",
      },
    ],
    miniCase: {
      vignette:
        "A 5-year-old boy is brought in for 4 days of fever and runny nose. His mother reports he has coughed constantly, his eyes have been red and teary, and yesterday she saw 'tiny salt grains on a red background' inside his cheeks. This morning a red, blotchy rash appeared behind his hairline and ears and is now spreading down his chest. He is unvaccinated; the family declined all immunizations. Examination shows conjunctival injection, photophobia, and gray-white 1-mm papules on an erythematous buccal mucosa. Chest is clear; there is no meningismus.",
      question:
        "Which finding would the histology of this child's lymph nodes most likely show?",
      options: [
        {
          label: "A",
          text: "Warthin-Finkeldey giant cells (fused lymphocytes) in paracortical hyperplasia",
          correct: true,
          why: "Correct. This is measles (rubeola): the cough, coryza, and conjunctivitis prodrome (the 3 C's), the Koplik spots (bright red spots with blue-white centers on the buccal mucosa), and the maculopapular rash starting at the head and neck and spreading downward — in an unvaccinated child. Measles lymphadenitis shows Warthin-Finkeldey giant cells (fused lymphocytes) against paracortical hyperplasia; the same fusion capacity (the F protein) produces the giant cell pneumonia of the immunosuppressed and the SSPE that appears years later.",
        },
        {
          label: "B",
          text: "Owl-eye intranuclear inclusions in enlarged cells",
          why: "That is CMV (a DNA herpesvirus) — the ⊝ Monospot mononucleosis and the retinitis of AIDS. The distractor imports the DNA-virus inclusion into the paramyxovirus exam.",
        },
        {
          label: "C",
          text: "Negri bodies in Purkinje cells",
          why: "That is rabies (a rhabdovirus) — the ⊝ linear bullet-shaped virus with hydrophobia and agitation. The distractor takes the other classic viral inclusion and attaches it to a rash illness it never causes.",
        },
        {
          label: "D",
          text: "Molluscum bodies in keratinocytes",
          why: "That is molluscum contagiosum (a poxvirus, the largest DNA virus) — the flesh-colored umbilicated papule. The distractor swaps the DNA-virus cytoplasmic inclusion for the paramyxovirus fusion phenotype.",
        },
        {
          label: "E",
          text: "Multinucleated giant cells with keratinocyte apoptosis in skin biopsy",
          why: "Skin biopsy is not the measles test, and this description is generic. The named, tested histology of measles is the Warthin-Finkeldey GIANT CELL in LYMPH NODES (fused lymphocytes) — the option that names the tissue and the cell wins.",
        },
      ],
      reasoning:
        "The vignette stacks the measles identifiers: the unvaccinated status, the 3 C's prodrome (cough, coryza, conjunctivitis), the Koplik spots ('salt grains on a red background' — bright red spots with blue-white centers on the buccal mucosa), and the descending rash (head and neck downward). The question asks for the histologic correlate: Warthin-Finkeldey giant cells — fused lymphocytes in paracortical hyperplasia — the paramyxovirus F (fusion) protein made visible. Each distractor substitutes another virus's signature inclusion (CMV's owl eyes, rabies's Negri bodies, poxvirus's molluscum bodies) or a generic finding.",
    },
  },
  mnemonics: [
    {
      code: "“Plus is naked only twice — everything minus wears a coat.”",
      meaning:
        "KYP's key for the RNA grid: among ⊕ (positive-sense) families, only PICORNAVIRUSES, HEPEVIRUS, and CALICIVIRUSES are naked (plus the DS reoviruses); every ⊝ (negative-sense) family is enveloped — ortho, paramyxo, pneumo, rhabdo, filo — as are the circular arena, bunya, and delta. The ⊕ enveloped set: flavi (HCV + the arbovirus quartet), toga (Chikungunya + equine encephalitides), matano (rubella), retro (HTLV, HIV), corona.",
      memorizes: "The sense-envelope grid",
      whenToUse: "Any RNA-virus classification question.",
      clinical: "Envelope predicts disinfectant sensitivity; sense predicts polymerase dependence.",
    },
    {
      code: "“Shift steals whole chapters; drift edits single words.”",
      meaning:
        "KYP's key for influenza's two change mechanisms: ANTIGENIC SHIFT = coinfection with 2 segmented viruses → whole RNA segments reassort → a dramatically different virus → PANDEMICS (the 2009 H1N1 mechanism from M22). ANTIGENIC DRIFT = point mutations in the hemagglutinin or neuraminidase genes → minor epitope edits → seasonal EPIDEMICS. HA lets the virus in (binds sialic acid); NA sends it away (progeny release — the oseltamivir target).",
      memorizes: "Shift vs drift",
      whenToUse: "Any influenza-epidemiology or vaccine-reformulation question.",
      clinical: "Sudden shift is more deadly than gradual drift; the flu shot chases both.",
    },
    {
      code: "“The pediatric signs: the seal, the salt grains, the pom-poms, and the muffins.”",
      meaning:
        "KYP's key for the pediatric set: CROUP's seal-like barking cough with the STEEPLE SIGN (parainfluenza); MEASLES' Koplik 'salt grains' on red buccal mucosa after the 3 C's prodrome, with the descending rash and vitamin A; MUMPS' parotid and testicular swelling (parotitis, orchitis, meningitis, pancreatitis — sterility after puberty); RUBELLA's blueberry-muffin congenital lesions with the deafness-cataracts-PDA triad; and the RSV preemie protected by palivizumab (anti-F).",
      memorizes: "The pediatric viral signs",
      whenToUse: "Any child-with-fever-and-rash or stridor stem.",
      clinical: "Each virus owns one pathognomonic sign — name the sign, name the virus.",
    },
  ],
  rapidReview: {
    s30: [
      "All RNA viruses replicate in the CYTOPLASM — except RETROVIRUS and INFLUENZA (nuclear)",
      "⊕ naked: pico (polio IPV/OPV, echo, rhino, coxsackie, HAV), hepe (HEV), calici (noro); reo = DS segmented (rota)",
      "⊕ enveloped: flavi (HCV, yellow fever, dengue, West Nile, Zika — arboviruses), toga (Chikungunya, equine encephalitides), matano (rubella), retro (HTLV, HIV), corona (cold, SARS, COVID-19, MERS)",
      "⊝ enveloped: ortho (influenza, segmented), paramyxo (parainfluenza, RSV, measles, mumps), pneumo (RSV), rhabdo (rabies), filo (Ebola/Marburg); circular: arena (LCMV, Lassa), bunya (arbovirus fevers + Hanta), delta (needs HBV)",
      "Influenza: HA binds sialic acid (entry) · NA releases progeny (oseltamivir target) · shift = reassortment = pandemics · drift = HA/NA mutation = seasonal epidemics",
    ],
    m3: [
      "Croup: parainfluenza — seal-like barking cough, inspiratory stridor, STEEPLE SIGN on x-ray",
      "Measles: 3 C's prodrome → KOPLIK SPOTS → descending rash; Warthin-Finkeldey giant cells; SSPE, encephalitis 1:1000, giant cell pneumonia, ADEM; VITAMIN A; pneumonia is the top cause of death",
      "Mumps: Parotitis, Orchitis, aseptic Meningitis, Pancreatitis; sterility after puberty; prevented by MMR",
      "Rubella (matonavirus): postauricular nodes, centrifugal rash; congenital triad = sensorineural deafness + cataracts + PDA; blueberry-muffin lesions",
      "RSV: F (fusion) protein → multinucleated cells; PALIVIZUMAB (anti-F) prevents RSV pneumonia in preemies",
    ],
    m10: [
      "Rotavirus: segmented dsRNA wheel; villous destruction with atrophy → ↓ Na+ absorption, K+ loss; vaccine for all infants EXCEPT intussusception history or SCID",
      "Rhinovirus: ACID LABILE — destroyed by stomach acid, does not infect the GI tract; >100 serologic types",
      "Picornavirus strategy: 1 large polypeptide translated, then cleaved by virus-encoded proteases",
      "Influenza superinfection set: S aureus, S pneumoniae, H influenzae; treatment supportive ± oseltamivir/zanamivir",
      "The banner typo 'MICROCIOLOGY—VIROLOGY' prints on books 164-167; FA's printed glosses (PERCH, CREW, POM-Poms, the 4 C's, Retro flu is outta cyt) stay in the table blocks — verification-only",
    ],
  },
  recall: [
    {
      q: "Walk the seventeen RNA families by sense with envelope and one anchor each.",
      a: "DS: REOVIRUSES (naked, segmented — rotavirus infantile diarrhea). ⊕ NAKED: PICORNAVIRUSES (polio IPV/OPV, echo, coxsackie, rhinovirus, HAV), HEPEVIRUS (HEV), CALICIVIRUSES (norovirus). ⊕ ENVELOPED: FLAVIVIRUSES (HCV; yellow fever, dengue, West Nile, Zika — arboviruses), TOGAVIRUSES (Chikungunya, Eastern and Western equine encephalitis — arboviruses), MATANOVIRUS (rubella), RETROVIRUSES (reverse transcriptase; HTLV, HIV), CORONAVIRUSES (cold, SARS, COVID-19, MERS). ⊝ ENVELOPED: ORTHOMYXOVIRUSES (influenza, segmented, nuclear), PARAMYXOVIRUSES (parainfluenza croup, RSV, measles, mumps), PNEUMOVIRUSES (RSV), RHABDOVIRUSES (rabies), FILOVIRUSES (Ebola/Marburg). CIRCULAR: ARENAVIRUSES (⊕ and ⊝, segmented — LCMV, Lassa from rodents), BUNYAVIRUSES (⊝, segmented — California encephalitis, sandfly/Rift Valley, Crimean-Congo; Hantavirus), DELTA VIRUS (defective — requires HBV).",
    },
    {
      q: "Give the influenza protocol: the two antigens, the two change mechanisms, superinfection, treatment, and vaccines.",
      a: "ANTIGENS: hemagglutinin binds sialic acid and promotes entry; neuraminidase promotes progeny release. SHIFT: 2 segmented viruses coinfect 1 cell → segment reassortment → dramatically different virus → pandemics. DRIFT: random HA/NA mutations → minor changes → seasonal epidemics. SUPERINFECTION: S aureus, S pneumoniae, H influenzae. TREATMENT: supportive ± oseltamivir or zanamivir (neuraminidase inhibitors). VACCINE: reformulated yearly; killed most frequent; the live attenuated intranasal carries a temperature-sensitive mutant (replicates in the nose, not the lung).",
    },
    {
      q: "Walk the pediatric set: croup, measles, mumps, rubella, and RSV.",
      a: "CROUP: parainfluenza — acute laryngotracheobronchitis; seal-like barking cough, inspiratory stridor; subglottic narrowing gives the STEEPLE SIGN. MEASLES: cough, coryza, conjunctivitis prodrome → KOPLIK SPOTS (blue-white on red, buccal mucosa) → descending maculopapular rash; Warthin-Finkeldey giant cells; SSPE (years), encephalitis 1:1000 (days), giant cell pneumonia (immunosuppressed), ADEM; vitamin A reduces mortality. MUMPS: parotitis, orchitis, aseptic meningitis, pancreatitis; sterility after puberty; MMR. RUBELLA: German 3-day measles — postauricular lymphadenopathy, arthralgias, centrifugal rash; congenital triad = sensorineural deafness, cataracts, PDA; blueberry-muffin dermal hematopoiesis. RSV: F (fusion) protein → multinucleated cells; palivizumab (anti-F) prevents RSV pneumonia in premature infants.",
    },
    {
      q: "Explain the GI trio's logic: picornavirus, rhinovirus, rotavirus.",
      a: "PICORNAVIRUS: RNA is translated into 1 large polypeptide, cleaved by virus-encoded proteases into functional viral proteins; polio, echo, and coxsackie are enteroviruses causing aseptic meningitis. RHINOVIRUS: acid labile — destroyed by stomach acid, so it does NOT infect the GI tract (unlike the other picornaviruses); >100 serologic types cause the common cold. ROTAVIRUS: segmented dsRNA reovirus (the wheel); the most important global cause of infantile gastroenteritis; villous destruction with atrophy → ↓ Na+ absorption and K+ loss; CDC vaccination for all infants except intussusception history or SCID.",
    },
    {
      q: "Name the two nuclear-replicating RNA viruses and the defective circular one.",
      a: "NUCLEAR EXCEPTIONS: RETROVIRUS (reverse transcriptase makes proviral DNA that must integrate in the nucleus — HTLV, HIV) and INFLUENZA VIRUS (its segmented ⊝ genome is transcribed in the nucleus). DEFECTIVE VIRUS: DELTA VIRUS (SS ⊝ circular) — HDV requires the presence of HBV to replicate (it borrows HBsAg; complementation from M22).",
    },
  ],
  related: [
    {
      title: "Viral Structure & Genetics",
      topicId: "viral-structure-genetics",
      note: "M22's sense rosters (the ⊕ and ⊝ family lists), the segmented set (BOAR — bunya, orthomyxo, arena, reo), and the reassortment-complementation mechanisms are the machinery behind this note's seventeen-family grid and delta virus's HBV dependence.",
    },
    {
      title: "DNA Viruses: Families & Disease Map",
      topicId: "dna-viruses",
      note: "M23's grid is the DNA half of the family map — this note mirrors it for RNA: the envelope logic inverts (almost everything ⊝ is enveloped), and the replication-site exceptions swap (pox outside the nucleus on the DNA side; retro and influenza inside it on the RNA side).",
    },
    {
      title: "Active vs Passive Immunity & Vaccine Types",
      topicId: "active-passive-immunity",
      note: "The vaccine rows of this map — Salk IPV (killed) vs Sabin OPV (live), the yearly reformulated killed flu shot vs the temperature-sensitive live intranasal, MMR, and the rotavirus vaccine's intussusception/SCID exclusions — all point back at E34's vaccine-type logic; palivizumab is the passive-immunization example.",
    },
  ],
  crossLinks: [
    {
      subject: "Pediatrics (Viral Exanthems and Respiratory Disease)",
      connection:
        "The pediatric set owns the child-with-fever-and-rash differential — Koplik spots, the descending measles rash, rubella's centrifugal spread, and the blueberry-muffin newborn — plus croup's stridor and RSV's bronchiolitis with palivizumab prophylaxis for preemies.",
    },
    {
      subject: "Epidemiology (Pandemics and Vaccine Design)",
      connection:
        "Antigenic shift (reassortment → pandemics) versus drift (point mutation → seasonal epidemics) is the mechanism behind yearly influenza vaccine reformulation and the surveillance architecture of emerging-infection control.",
    },
    {
      subject: "Gastroenterology (Acute Diarrhea)",
      connection:
        "Rotavirus (villous atrophy, ↓ Na+ absorption, K+ loss) and norovirus (outbreak gastroenteritis) are the viral rows of the acute-diarrhea differential — against the bacterial enterics of M13 and the protozoa of M18.",
    },
    {
      subject: "Neurology (Aseptic Meningitis and Encephalitis)",
      connection:
        "The enteroviruses (polio, echo, coxsackie) cause aseptic meningitis; West Nile causes meningoencephalitis with acute asymmetric flaccid paralysis; LCMV and Lassa are the rodent-borne neurotropic arenas — the viral rows of the CSF-formula differential.",
    },
  ],
};
