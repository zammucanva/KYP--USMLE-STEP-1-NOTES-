import type { KypUsMLENote } from "../types";

// Microbiology — VIROLOGY banner (M-batch 23). Source: pdf 183-185 / books
//  161-163 (DNA viruses — the 7-family table; Herpesviruses — the 7-virus
//  roster; Herpesviruses (continued) — the A-J photo gallery, the Liv/Sp
//  hepatosplenomegaly imaging, HSV identification, and the receptors table).
//  Rasters: p183 (molluscum bodies A, pharyngitis B), p185 (the A-J gallery,
//  the Tzanck smear A, and 2 gallery sub-tiles) — COPYRIGHTED,
//  described-in-text only. The banner typo 'MICROCIOLOGY—VIROLOGY' prints on
//  books 161-163 (the VLM census normalized it twice differently — text layer
//  authoritative). FA's printed mnemonics (Pox is out of the box; JC Junky
//  Cerebrum / BK Bad Kidney; Must be 21 to drink Beer in a Barr; Roseola
//  fever-first-Rosy-later; I CAMe to see the rhino) are quoted in the table
//  blocks for verification only — the public mnemonics below are KYP originals.

export const dnaViruses: KypUsMLENote = {
  id: "dna-viruses",
  title: "DNA Viruses: Families & Disease Map",
  subtitle:
    "The seven DNA families on the envelope-structure grid, and the herpes roster behind the first row. THE RULES (book 161): all DNA viruses are icosahedral and replicate in the NUCLEUS — EXCEPT POXVIRUS (it replicates in the cytoplasm, carrying its own machinery); POXVIRUS is the LARGEST DNA virus and PARVOVIRUS the SMALLEST (parvus = small); the ENVELOPED TRIO is HERPES, HEPADNA, POX — the other four families are naked. THE SEVEN FAMILIES: HERPESVIRUSES (enveloped; DS, linear — see the roster). POXVIRUS (enveloped; DS, linear, largest — smallpox eradicated worldwide by the live-attenuated vaccine; cowpox, the 'milkmaid blisters'; MOLLUSCUM CONTAGIOSUM, the flesh-colored papule with central umbilication whose keratinocytes contain molluscum bodies A). HEPADNAVIRUS (enveloped; PARTIALLY DS, CIRCULAR — HBV: acute or chronic hepatitis; not a retrovirus but HAS REVERSE TRANSCRIPTASE). ADENOVIRUS (naked; DS, linear — febrile pharyngitis B, acute hemorrhagic cystitis, pneumonia, conjunctivitis 'pink eye', gastroenteritis, myocarditis). PAPILLOMAVIRUS (naked; DS, CIRCULAR — HPV warts and cancer, cervical, anal, penile, oropharyngeal; serotypes 1, 2, 6, 11 → warts; 16, 18 → cancer). POLYOMAVIRUS (naked; DS, CIRCULAR — JC virus, progressive multifocal leukoencephalopathy in the immunocompromised; BK virus, the transplant kidney). PARVOVIRUS (naked; SS, LINEAR, smallest — B19: aplastic crises in sickle cell disease, 'slapped cheek' rash in children, erythema infectiosum or fifth disease; infects RBC precursors and endothelial cells → RBC destruction → hydrops fetalis and fetal death; pure RBC aplasia and RA-like symptoms in adults). THE HERPES ROSTER (books 162-163): HSV-1 — gingivostomatitis, keratoconjunctivitis A, herpes labialis B, herpetic whitlow, TEMPORAL LOBE ENCEPHALITIS, erythema multiforme; latent in the TRIGEMINAL GANGLIA. HSV-2 — herpes genitalis, NEONATAL HERPES C; latent in the SACRAL GANGLIA; viral meningitis more common than with HSV-1. VZV (HHV-3) — chickenpox D then shingles E in a dermatome; POSTHERPETIC NEURALGIA the most common complication; zoster ophthalmicus with CN V1 involvement; latent in dorsal root or trigeminal ganglia. EBV (HHV-4) — MONONUCLEOSIS (fever, hepatosplenomegaly F, pharyngitis, posterior cervical lymphadenopathy; avoid contact sports — splenic rupture), endemic Burkitt lymphoma, nasopharyngeal carcinoma, transplant lymphoproliferative disease; infects B cells through CD21; ⊕ MONOSPOT (heterophile antibodies agglutinating sheep or horse RBCs); atypical lymphocytes G are reactive cytotoxic T cells, not infected B cells; amoxicillin causes a maculopapular rash. CMV (HHV-5) — mononucleosis with ⊝ MONOSPOT in the immunocompetent; pneumonia in transplant patients, esophagitis, colitis, AIDS retinitis ('sightomegalovirus' — hemorrhage, cotton-wool exudates, vision loss); congenital CMV; 'OWL EYE' intranuclear inclusions H; latent in mononuclear cells. HHV-6 and HHV-7 — ROSEOLA INFANTUM: high fevers for several days (seizures possible), then a diffuse macular rash trunk-to-extremities I, in children <2; self-limited. HHV-8 — KAPOSI SARCOMA, the endothelial neoplasm of HIV/AIDS and transplant patients; dark, violaceous plaques or nodules J. HSV IDENTIFICATION (book 163): PCR of skin lesions is the test of choice; CSF PCR for herpes encephalitis; the Tzanck test (outdated) smears an opened vesicle for multinucleated giant cells A in HSV-1, HSV-2, and VZV; intranuclear eosinophilic Cowdry A inclusions in the same three. THE RECEPTOR SET: CMV — integrins (heparan sulfate); EBV — CD21; HIV — CD4, CXCR4, CCR5; parvovirus B19 — P antigen on RBCs; rabies — nicotinic AChR; rhinovirus — ICAM-1; SARS-CoV-2 — ACE2.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Virology",
  pilotCategory:
    "Virology — the DNA family grid on the envelope-structure axis (the enveloped trio vs the naked quartet; the circular trio papilloma-polyoma-hepadna; the size poles pox-largest and parvo-smallest) and the herpes roster on the latency-tissue axis (trigeminal HSV-1, sacral HSV-2, dorsal-root VZV, B-cell EBV, mononuclear CMV, endothelial HHV-8), closed by the identification and receptor sets",
  difficulty: 2,
  readTime: 15,
  sourceRef: "First Aid 2026, Part 1 pp. 161–163 (DNA viruses; Herpesviruses; Herpesviruses (continued) — HSV identification; Receptors used by viruses)",
  tags: [
    "DNA viruses",
    "icosahedral",
    "nuclear replication",
    "poxvirus",
    "cytoplasmic replication",
    "largest DNA virus",
    "smallest DNA virus",
    "herpesviruses",
    "HSV-1",
    "HSV-2",
    "gingivostomatitis",
    "keratoconjunctivitis",
    "herpes labialis",
    "cold sores",
    "herpetic whitlow",
    "temporal lobe encephalitis",
    "erythema multiforme",
    "trigeminal ganglia",
    "herpes genitalis",
    "neonatal herpes",
    "sacral ganglia",
    "viral meningitis",
    "varicella-zoster",
    "HHV-3",
    "chickenpox",
    "shingles",
    "postherpetic neuralgia",
    "herpes zoster ophthalmicus",
    "dorsal root ganglia",
    "EBV",
    "HHV-4",
    "mononucleosis",
    "hepatosplenomegaly",
    "posterior cervical lymphadenopathy",
    "splenic rupture",
    "Burkitt lymphoma",
    "nasopharyngeal carcinoma",
    "lymphoproliferative disease",
    "CD21",
    "Monospot",
    "heterophile antibodies",
    "atypical lymphocytes",
    "amoxicillin rash",
    "CMV",
    "HHV-5",
    "owl eye inclusions",
    "AIDS retinitis",
    "sightomegalovirus",
    "congenital CMV",
    "HHV-6",
    "HHV-7",
    "roseola infantum",
    "exanthem subitum",
    "HHV-8",
    "Kaposi sarcoma",
    "smallpox",
    "live-attenuated vaccine",
    "cowpox",
    "milkmaid blisters",
    "molluscum contagiosum",
    "molluscum bodies",
    "central umbilication",
    "hepadnavirus",
    "HBV",
    "reverse transcriptase",
    "adenovirus",
    "febrile pharyngitis",
    "hemorrhagic cystitis",
    "pink eye",
    "gastroenteritis",
    "myocarditis",
    "papillomavirus",
    "HPV",
    "cervical cancer",
    "serotypes 16 and 18",
    "polyomavirus",
    "JC virus",
    "PML",
    "BK virus",
    "parvovirus",
    "B19",
    "aplastic crisis",
    "sickle cell disease",
    "slapped cheek",
    "erythema infectiosum",
    "fifth disease",
    "hydrops fetalis",
    "pure RBC aplasia",
    "Tzanck test",
    "multinucleated giant cells",
    "Cowdry A inclusions",
    "PCR",
    "viral receptors",
    "ICAM-1",
    "ACE2",
  ],
  core: {
    what: "THE FAMILY GRID (book 161). Seven families, three structural axes. ENVELOPE: the enveloped trio — HERPESVIRUSES, POXVIRUS, HEPADNAVIRUS — against the naked quartet — ADENOVIRUS, PAPILLOMAVIRUS, POLYOMAVIRUS, PARVOVIRUS. DNA STRUCTURE: all DS and linear (herpes, pox, adeno) except the circular set (papilloma and polyoma, DS and circular; hepadna, PARTIALLY DS and circular) and the one single-stranded family (parvo, SS and linear). SIZE: POXVIRUS the largest DNA virus, PARVOVIRUS the smallest (parvus = small). THE REPLICATION RULE: all are icosahedral and replicate in the NUCLEUS — except POXVIRUS, which replicates in the cytoplasm. THE MEDICAL IMPORTANCE COLUMN: HERPESVIRUSES point to their own roster; POXVIRUS carries smallpox (eradicated worldwide by the live-attenuated vaccine), cowpox (the milkmaid blisters), and MOLLUSCUM CONTAGIOSUM (flesh-colored papule with central umbilication; keratinocytes contain molluscum bodies A); HEPADNAVIRUS is HBV (acute or chronic hepatitis; not a retrovirus but it has reverse transcriptase); ADENOVIRUS runs febrile pharyngitis B, acute hemorrhagic cystitis, pneumonia, conjunctivitis ('pink eye'), gastroenteritis, and myocarditis; PAPILLOMAVIRUS is HPV (warts and cancer — cervical, anal, penile, oropharyngeal; serotypes 1, 2, 6, 11 with warts, 16, 18 with cancer); POLYOMAVIRUS splits JC (progressive multifocal leukoencephalopathy in the immunocompromised) from BK (the transplant kidney); PARVOVIRUS is B19 (aplastic crises in sickle cell disease; 'slapped cheek' rash in children — erythema infectiosum, fifth disease; infection of RBC precursors and endothelial cells → RBC destruction → hydrops fetalis and fetal death; pure RBC aplasia and RA-like symptoms in adults). THE HERPES ROSTER (books 162-163). Enveloped, DS, linear — and organized by latency site and signature disease: HSV-1 (respiratory secretions, saliva; gingivostomatitis, keratoconjunctivitis A, herpes labialis B, herpetic whitlow, temporal lobe encephalitis, esophagitis, erythema multiforme; latent in TRIGEMINAL GANGLIA; the most common cause of sporadic encephalitis; a growing percentage of herpes genitalis); HSV-2 (sexual contact, perinatal; herpes genitalis, neonatal herpes C; latent in SACRAL GANGLIA; viral meningitis more common than with HSV-1); VZV/HHV-3 (respiratory secretions and vesicle fluid; chickenpox D then shingles E; postherpetic neuralgia the most common complication; CN V1 involvement gives herpes zoster ophthalmicus; latent in dorsal root or trigeminal ganglia); EBV/HHV-4 (saliva, the kissing disease of teens and young adults; mononucleosis — fever, hepatosplenomegaly F, pharyngitis, posterior cervical lymphadenopathy, with contact sports avoided until resolution because of splenic rupture; endemic Burkitt lymphoma, nasopharyngeal carcinoma especially in Asian adults, lymphoproliferative disease in transplant patients; infects B cells through CD21; ⊕ Monospot — heterophile antibodies agglutinating sheep or horse RBCs; atypical lymphocytes G are reactive cytotoxic T cells, not infected B cells; amoxicillin can cause a maculopapular rash); CMV/HHV-5 (congenital, transfusion, sexual contact, saliva, urine, transplant; mononucleosis with ⊝ Monospot in the immunocompetent; pneumonia in transplant patients, esophagitis, colitis, AIDS retinitis — 'sightomegalovirus' with hemorrhage, cotton-wool exudates, and vision loss; congenital CMV; 'owl eye' intranuclear inclusions H; latent in mononuclear cells); HHV-6 and HHV-7 (saliva; roseola infantum — high fevers for several days that can cause seizures, then a diffuse macular rash starting on the trunk and spreading to the extremities I; children <2; self-limited, HHV-7 the less common cause); HHV-8 (sexual contact; Kaposi sarcoma, the endothelial-cell neoplasm of HIV/AIDS and transplant patients — dark, violaceous plaques or nodules J; also GI tract and lungs). HSV IDENTIFICATION: PCR of skin lesions is the test of choice; CSF PCR for herpes encephalitis; the Tzanck test (outdated) smears an opened vesicle for multinucleated giant cells A (HSV-1, HSV-2, VZV); intranuclear eosinophilic Cowdry A inclusions in the same three. THE RECEPTOR SET: CMV — integrins (heparan sulfate); EBV — CD21; HIV — CD4, CXCR4, CCR5; parvovirus B19 — P antigen on RBCs; rabies — nicotinic AChR; rhinovirus — ICAM-1; SARS-CoV-2 — ACE2.",
    why: "This block is the DNA half of the viral family map, and it carries five exam institutions. The first is THE ENVELOPE-STRUCTURE GRID: the enveloped trio (herpes, hepadna, pox) against the naked quartet, with the circular set (papilloma, polyoma, hepadna) and the single-stranded exception (parvo) — the same grid M22's envelope rule predicted. The second is THE SIZE-REPLICATION PAIR: poxvirus is simultaneously the LARGEST DNA virus and the only one replicating outside the nucleus — it carries its own machinery — while parvovirus is the smallest, a single-stranded minimalist that needs the host's S-phase machinery, which is exactly why B19 targets RBC precursors and causes aplastic crises in sickle cell disease. The third is THE LATENCY MAP: the herpes roster is organized by where each virus hides — trigeminal (HSV-1), sacral (HSV-2), dorsal root or trigeminal (VZV), B cells via CD21 (EBV), mononuclear cells (CMV) — and latency is the answer key for every reactivation stem. The fourth is THE MONO SPLIT: EBV mononucleosis is Monospot ⊕ (heterophile antibodies) with atypical lymphocytes that are reactive cytotoxic T cells, while CMV mononucleosis is Monospot ⊝ — the single most-tested serologic line in virology. The fifth is THE OPPORTUNIST SET: HHV-8's Kaposi sarcoma, CMV's retinitis, and JC virus's PML are the AIDS-defining and transplant complications that anchor the immunocompromised-infection questions.",
    keyIdea: "Run the grid, then the roster. THE GRID: enveloped trio = HERPES (DS linear), POX (DS linear, LARGEST, cytoplasmic — the only non-nuclear replicator), HEPADNA (partially DS circular, reverse transcriptase, HBV); naked quartet = ADENO (DS linear — pharyngitis, hemorrhagic cystitis, pink eye, gastroenteritis, myocarditis), PAPILLOMA (DS circular — HPV warts 1/2/6/11, cancer 16/18), POLYOMA (DS circular — JC PML in HIV, BK the transplant kidney), PARVO (SS linear, SMALLEST — B19 slapped cheek, aplastic crises in sickle cell, RBC-precursor tropism with hydrops fetalis). THE ROSTER BY LATENCY: HSV-1 TRIGEMINAL (gingivostomatitis, cold sores, temporal lobe encephalitis — the most common sporadic encephalitis; growing genital share); HSV-2 SACRAL (genital, neonatal C; meningitis); VZV DORSAL ROOT/TRIGEMINAL (chickenpox → shingles; POSTHERPETIC NEURALGIA; zoster ophthalmicus CN V1); EBV B CELLS VIA CD21 (mono with ⊕ MONOSPOT, atypical lymphocytes = reactive T cells, splenic rupture, Burkitt and NPC, amoxicillin rash); CMV MONONUCLEAR (⊝ Monospot mono, owl-eye inclusions, AIDS retinitis, congenital); HHV-6/7 (roseola — fever first, rash after, <2 years); HHV-8 (Kaposi sarcoma in HIV/transplant). IDENTIFICATION: PCR test of choice; CSF PCR for encephalitis; Tzanck (outdated) multinucleated giant cells + Cowdry A in HSV-1/2 and VZV. RECEPTORS: CMV integrins, EBV CD21, HIV CD4/CXCR4/CCR5, parvo P antigen on RBCs, rabies nicotinic AChR, rhinovirus ICAM-1, SARS-CoV-2 ACE2.",
  },
  mechanisms: [
    {
      id: "dna-family-grid-logic",
      title: "The family grid: envelope, structure, and the two poles",
      context: "The seven families organized by the three structural axes",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A DNA virus appears in a question stem — place it on the grid",
            sublabel: "Input — the placement question.",
            variant: "input",
          },
          {
            id: "s1",
            label: "AXIS 1 — ENVELOPE: the ENVELOPED TRIO (herpes, hepadna, pox — the same trio M22's envelope rule named) vs the NAKED QUARTET (adeno, papilloma, polyoma, parvo). Envelope predicts disinfectant sensitivity and exit strategy (budding vs lysis)",
            sublabel: "Process — the first cut is the membrane.",
            variant: "process",
          },
          {
            id: "s2",
            label: "AXIS 2 — DNA STRUCTURE: the default is DS and linear (herpes, pox, adeno); the CIRCULAR set is papilloma and polyoma (DS, circular) plus HEPADNA (PARTIALLY DS, circular); the single exception is PARVO (SS, linear — the only ssDNA family)",
            sublabel: "Process — the second cut is the genome's shape.",
            variant: "process",
          },
          {
            id: "s3",
            label: "AXIS 3 — THE POLES AND THE BOX: POXVIRUS is the LARGEST DNA virus and replicates in the CYTOPLASM (it carries its own replication machinery — the one exception to the nucleus rule); PARVOVIRUS is the SMALLEST (parvus = small) and, single-stranded and replication-incompetent alone, depends on the host's dividing cells — the reason B19 homes to RBC precursors",
            sublabel: "Process — the poles are the extremes; the box rule is the exception.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the medical-importance anchors: smallpox eradicated by the live-attenuated vaccine; molluscum contagiosum (umbilicated papule, molluscum bodies in keratinocytes); HBV (reverse transcriptase without being a retrovirus); adenovirus's six-disease set; HPV serotypes (1/2/6/11 warts, 16/18 cancer); JC PML vs BK transplant kidney; B19's slapped-cheek and aplastic-crisis set",
            sublabel: "Output — the grid places the family; the anchors place the disease.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "envelope first" },
          { from: "s1", to: "s2", label: "then genome shape" },
          { from: "s2", to: "s3", label: "then the poles and the box" },
          { from: "s3", to: "o1", label: "the anchors" },
        ],
      },
    },
    {
      id: "herpes-latency-map",
      title: "The herpes roster: where each virus hides and what it does when it returns",
      context: "Latency sites and reactivation signatures across the seven herpesviruses",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A herpesvirus stem — fever, vesicles, or an immunocompromised host",
            sublabel: "Input — the roster question.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE NEURONAL PAIR: HSV-1 latent in TRIGEMINAL GANGLIA (gingivostomatitis, keratoconjunctivitis, cold sores, herpetic whitlow, TEMPORAL LOBE ENCEPHALITIS — the most common sporadic encephalitis; erythema multiforme; a growing genital share) and HSV-2 latent in SACRAL GANGLIA (herpes genitalis, NEONATAL HERPES by perinatal exposure; viral meningitis more common than with HSV-1)",
            sublabel: "Process — the ganglion names the virus.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE DORSAL-ROOT VIRUS: VZV (HHV-3) — chickenpox first, then SHINGLES in a dermatome on reactivation; POSTHERPETIC NEURALGIA is the most common complication; CN V1 involvement gives HERPES ZOSTER OPHTHALMICUS; latent in dorsal root or trigeminal ganglia",
            sublabel: "Process — the dermatome is the signature.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE B-CELL VIRUS: EBV (HHV-4) enters B cells through CD21 — mononucleosis (fever, hepatosplenomegaly, pharyngitis, POSTERIOR CERVICAL lymphadenopathy; avoid contact sports — SPLENIC RUPTURE); ⊕ MONOSPOT (heterophile antibodies agglutinating sheep or horse RBCs); atypical lymphocytes are REACTIVE CYTOTOXIC T CELLS, not infected B cells; amoxicillin → maculopapular rash; the cancer set — endemic Burkitt lymphoma, nasopharyngeal carcinoma (esp. Asian adults), transplant lymphoproliferative disease",
            sublabel: "Process — the infected cell is the B cell; the sick cell is the T cell.",
            variant: "process",
          },
          {
            id: "s4",
            label: "THE MONONUCLEAR-CELL VIRUS AND THE TAIL: CMV (HHV-5) — mono with ⊝ MONOSPOT; 'OWL EYE' intranuclear inclusions; pneumonia in transplant patients, esophagitis, colitis, AIDS retinitis ('sightomegalovirus'), congenital CMV. HHV-6/7 — roseola infantum (fever first, rash after; children <2). HHV-8 — KAPOSI SARCOMA, the endothelial neoplasm of HIV/AIDS and transplant patients",
            sublabel: "Process — the owl eye and the violaceous plaque close the roster.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — identification and entry: PCR of skin lesions (test of choice), CSF PCR for encephalitis, Tzanck giant cells and Cowdry A (outdated but tested); receptors — CMV integrins, EBV CD21, HIV CD4/CXCR4/CCR5, parvo P antigen, rabies nicotinic AChR, rhinovirus ICAM-1, SARS-CoV-2 ACE2",
            sublabel: "Output — the roster ends with the lab and the lock-and-key set.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "the ganglion pair" },
          { from: "s1", to: "s2", label: "the dermatome virus" },
          { from: "s2", to: "s3", label: "the B-cell virus" },
          { from: "s3", to: "s4", label: "the mononuclear cell and the tail" },
          { from: "s4", to: "o1", label: "identification + receptors" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "dna-virus-family-map",
      title: "The DNA family map + the herpes roster",
      caption:
        "An original KYP redraw of the source's three-page block (books 161-163): the box rule + size poles strip, the 7-family grid (envelope, DNA structure, medical importance), the 7-virus herpes roster with routes, signatures, and latency sites, and the HSV-identification + receptors strip.",
      notice:
        "The printed photographs — molluscum bodies A and pharyngitis B (book 161); the A-J gallery (keratoconjunctivitis A, cold sores B, neonatal herpes C, chickenpox D, shingles E, hepatosplenomegaly F with the Liv/Sp imaging labels, atypical lymphocytes G, owl-eye inclusions H, roseola rash I, Kaposi sarcoma J) and the Tzanck-smear A (book 163) — are raster, COPYRIGHTED, described-in-text only. FA's printed mnemonics (Pox is out of the box; JC Junky Cerebrum / BK Bad Kidney; Must be 21 to drink Beer in a Barr; Roseola fever-first-Rosy-later; I CAMe to see the rhino) stay in the table blocks below — verification-only, not redrawn.",
    },
    {
      kind: "table",
      title: "The seven DNA families — verbatim",
      intro: "The source's table (book 161), verbatim.",
      columns: ["Family", "Envelope · DNA structure · Medical importance (verbatim)"],
      rows: [
        [
          "Herpesviruses",
          "ENVELOPE: Yes. DNA STRUCTURE: DS and linear. MEDICAL IMPORTANCE: See Herpesviruses entry.",
        ],
        [
          "Poxvirus",
          "ENVELOPE: Yes. DNA STRUCTURE: DS and linear (largest DNA virus). MEDICAL IMPORTANCE: Smallpox eradicated world wide by use of the liveattenuated vaccine. Cowpox (“milkmaid blisters”). Molluscum contagiosum—flesh-colored papule with central umbilication; keratinocytes contain molluscum bodies A (printed histology — described-in-text only). [Intro rule, printed: All are icosahedral and replicate in the nucleus (except poxvirus). “Pox is out of the box (nucleus).” — FA gloss, verification-only.]",
        ],
        [
          "Hepadnavirus",
          "ENVELOPE: Yes. DNA STRUCTURE: Partially DS and circular. MEDICAL IMPORTANCE: HBV: Acute or chronic hepatitis. Not a retrovirus but has reverse transcriptase.",
        ],
        [
          "Adenovirus",
          "ENVELOPE: No. DNA STRUCTURE: DS and linear. MEDICAL IMPORTANCE: Febrile pharyngitis B (printed photo — described-in-text only) —sore throat. Acute hemorrhagic cystitis. Pneumonia. Conjunctivitis—“pink eye”. Gastroenteritis. Myocarditis.",
        ],
        [
          "Papillomavirus",
          "ENVELOPE: No. DNA STRUCTURE: DS and circular. MEDICAL IMPORTANCE: HPV—warts, cancer (cervical, anal, penile, or oropharyngeal); serotypes 1, 2, 6, 11 associated with warts; serotypes 16, 18 associated with cancer.",
        ],
        [
          "Polyomavirus",
          "ENVELOPE: No. DNA STRUCTURE: DS and circular. MEDICAL IMPORTANCE: JC virus—progressive multifocal leukoencephalopathy (PML) in immunocompromised patients (eg, HIV). BK virus—transplant patients, commonly targets kidney. [FA gloss, printed: JC: Junky Cerebrum; BK: Bad Kidney — verification-only.]",
        ],
        [
          "Parvovirus",
          "ENVELOPE: No. DNA STRUCTURE: SS and linear (smallest DNA virus; parvus = small). MEDICAL IMPORTANCE: B19 virus—aplastic crises in sickle cell disease, “slapped cheek” rash in children (erythema infectiosum, or fifth disease); infects RBC precursors and endothelial cells → RBC destruction → hydrops fetalis and death in fetus, pure RBC aplasia and rheumatoid arthritis–like symptoms in adults.",
        ],
      ],
      caption:
        "The table reads with the family-grid mechanism: the envelope column predicts the trio; the structure column separates the linear default from the circular set and the ssDNA exception. The source's hyphen-drops (liveattenuated, world wide) are carried verbatim.",
    },
    {
      kind: "table",
      title: "The herpesvirus roster — verbatim",
      intro:
        "The source's table (book 162), verbatim, with the continuation block (book 163).",
      columns: ["Virus", "Route · Clinical significance · Notes (verbatim)"],
      rows: [
        [
          "Herpes simplex virus-1",
          "ROUTE: Respiratory secretions, saliva. CLINICAL: Gingivostomatitis, keratoconjunctivitis A, herpes labialis (cold sores) B, herpetic whitlow on finger, temporal lobe encephalitis, esophagitis, erythema multiforme. Responsible for a growing percentage of herpes genitalis. NOTES: Most commonly latent in trigeminal ganglia. Most common cause of sporadic encephalitis, can present as altered mental status, seizures, and/or aphasia.",
        ],
        [
          "Herpes simplex virus-2",
          "ROUTE: Sexual contact, perinatal. CLINICAL: Herpes genitalis, neonatal herpes C. NOTES: Most commonly latent in sacral ganglia. Viral meningitis more common with HSV-2 than with HSV-1.",
        ],
        [
          "Varicella-zoster virus (HHV-3)",
          "ROUTE: Respiratory secretions, contact with fluid from vesicles. CLINICAL: Varicella-zoster (chickenpox D, shingles E), encephalitis, pneumonia. NOTES: Most common complication of shingles is postherpetic neuralgia. Latent in dorsal root or trigeminal ganglia; CN V1 branch involvement can cause herpes zoster ophthalmicus.",
        ],
        [
          "Epstein-Barr virus (HHV-4)",
          "ROUTE: Respiratory secretions, saliva; also called “kissing disease,” (common in teens, young adults). CLINICAL: Mononucleosis—fever, hepatosplenomegaly F, pharyngitis, and lymphadenopathy (especially posterior cervical nodes); avoid contact sports until resolution due to risk of splenic rupture. Associated with lymphomas (eg, endemic Burkitt lymphoma), nasopharyngeal carcinoma (especially Asian adults), lymphoproliferative disease in transplant patients. NOTES: Infects B cells through CD21. Atypical lymphocytes on peripheral blood smear G —not infected B cells but reactive cytotoxic T cells. ⊕ Monospot test—heterophile antibodies detected by agglutination of sheep or horse RBCs. Use of amoxicillin (eg, for presumed strep pharyngitis) can cause maculopapular rash. [FA gloss, printed: “Must be 21 to drink Beer in a Barr” — verification-only.]",
        ],
        [
          "Cytomegalovirus (HHV-5)",
          "ROUTE: Congenital, transfusion, sexual contact, saliva, urine, transplant. CLINICAL: Mononucleosis (⊝ Monospot) in immunocompetent patients; infection in immunocompromised, especially pneumonia in transplant patients; esophagitis; colitis; AIDS retinitis (“sightomegalovirus”): hemorrhage, cotton-wool exudates, vision loss. Congenital CMV. NOTES: Infected cells have characteristic “owl eye” intranuclear inclusions H. Latent in mononuclear cells.",
        ],
        [
          "Human herpesviruses 6 and 7",
          "ROUTE: Saliva. CLINICAL: Roseola infantum (exanthem subitum): high fevers for several days that can cause seizures, followed by diffuse macular rash (starts on trunk then spreads to extremities) I; usually seen in children <2 years old. NOTES: Self-limited illness. HHV-7—less common cause of roseola. [FA gloss, printed: Roseola: fever first, Rosy (rash) later — verification-only.]",
        ],
        [
          "Human herpesvirus 8",
          "ROUTE: Sexual contact. CLINICAL: Kaposi sarcoma (neoplasm of endothelial cells). Seen in HIV/AIDS and transplant patients. Dark/violaceous plaques or nodules J representing vascular proliferations. Can also affect GI tract and lungs.",
        ],
        [
          "HSV identification (book 163, continuation)",
          "PCR of skin lesions is test of choice. CSF PCR for herpes encephalitis. Tzanck test (outdated)—a smear of an opened skin vesicle to detect multinucleated giant cells A commonly seen in HSV-1, HSV-2, and VZV infection. Intranuclear eosinophilic Cowdry A inclusions also seen with HSV-1, HSV-2, VZV. [Intro line, printed: Enveloped, DS, and linear viruses. Recent data suggest both HSV-1 and HSV-2 can affect both genital and extragenital areas.]",
        ],
        [
          "Receptors used by viruses (book 163)",
          "CMV — Integrins (heparan sulfate). EBV — CD21. HIV — CD4, CXCR4, CCR5. Parvovirus B19 — P antigen on RBCs. Rabies — Nicotinic AChR. Rhinovirus — ICAM-1 (I CAMe to see the rhino — FA gloss, printed; verification-only). SARS-CoV-2 — ACE2.",
        ],
      ],
      caption:
        "The roster reads with the latency-map mechanism: the NOTES column's latency sites (trigeminal, sacral, dorsal root or trigeminal, B cells, mononuclear cells) are the organizing axis. The photo markers A-J print on book 162's table but the photographs themselves print on book 163's continuation page (the gallery) — the cross-page figure convention, documented.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the grid and roster imply",
      body: "THE PLACEMENT PROTOCOL: envelope first (the trio herpes-hepadna-pox), then genome shape (linear default; the circular set papilloma-polyoma-hepadna; parvo the ssDNA exception), then the poles (pox largest and cytoplasmic — the box rule; parvo smallest). THE SICKLE-CELL PROTOCOL: parvovirus B19 infects RBC precursors — in sickle cell disease the halted erythropoiesis is an aplastic crisis; in the fetus it is hydrops fetalis and death; in adults, pure RBC aplasia and RA-like symptoms. THE LATENCY PROTOCOL: trigeminal = HSV-1 (temporal lobe encephalitis — the most common sporadic encephalitis; treat empirically, confirm by CSF PCR); sacral = HSV-2 (genital, neonatal); dorsal root or trigeminal = VZV (shingles — postherpetic neuralgia; CN V1 = zoster ophthalmicus, an ophthalmologic emergency). THE MONO PROTOCOL: posterior cervical lymphadenopathy + splenomegaly → no contact sports (splenic rupture); Monospot ⊕ = EBV (heterophile antibodies; atypical lymphocytes are reactive cytotoxic T cells; amoxicillin causes the rash, not the disease); Monospot ⊝ mono = CMV (owl-eye inclusions; retinitis in AIDS — 'sightomegalovirus'). THE IMMUNOCOMPROMISED PROTOCOL: HIV — JC PML, CMV retinitis, HHV-8 Kaposi; transplant — BK kidney, CMV pneumonia, EBV lymphoproliferative disease. THE IDENTIFICATION PROTOCOL: PCR of skin lesions is the test of choice; Tzanck and Cowdry A are the outdated-but-tested trio findings (HSV-1, HSV-2, VZV).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 19-year-old college student has a week of fever, severe pharyngitis, and tender posterior cervical lymphadenopathy; splenic tip is palpable; she was started on amoxicillin for presumed strep and 3 days later developed a diffuse maculopapular rash.",
        discriminator: "Posterior cervical lymphadenopathy + splenomegaly + amoxicillin-triggered rash",
        concept: "EBV mononucleosis with a positive Monospot",
        answer:
          "EBV (HHV-4), transmitted by saliva (the kissing disease, common in teens and young adults): mononucleosis with fever, hepatosplenomegaly, pharyngitis, and lymphadenopathy (especially posterior cervical). The Monospot is ⊕ (heterophile antibodies detected by agglutination of sheep or horse RBCs); atypical lymphocytes on the smear are reactive cytotoxic T cells, not infected B cells (EBV infects B cells through CD21). Amoxicillin can cause a maculopapular rash. Avoid contact sports until resolution — splenic rupture.",
      },
      {
        stem: "A 24-year-old with sickle cell disease presents with sudden severe fatigue and reticulocytopenia during a mild febrile illness; hemoglobin has dropped 3 g/dL from baseline.",
        discriminator: "Sickle cell + aplastic crisis during a viral illness",
        concept: "Parvovirus B19 — the RBC-precursor tropism",
        answer:
          "Parvovirus B19 (the smallest DNA virus; SS and linear) infects RBC precursors and endothelial cells → RBC destruction. In sickle cell disease, the halted erythropoiesis presents as an aplastic crisis. In children it causes the 'slapped cheek' rash (erythema infectiosum, fifth disease); in the fetus, hydrops fetalis and death; in adults, pure RBC aplasia and rheumatoid arthritis-like symptoms.",
      },
      {
        stem: "A 68-year-old with HIV (CD4 count 40) develops subacute confusion and left-sided weakness; MRI shows nonenhancing white-matter lesions; CSF PCR for JC virus is positive.",
        discriminator: "AIDS + nonenhancing white-matter lesions + JC virus PCR",
        concept: "JC virus — progressive multifocal leukoencephalopathy",
        answer:
          "JC virus (Polyomavirus family; naked, DS, circular) causes progressive multifocal leukoencephalopathy (PML) in immunocompromised patients (eg, HIV). Its sibling BK virus targets the kidney in transplant patients. Both are distinguished from the rest of the naked quartet by the circular genome and the immunocompromised host.",
      },
    ],
    traps: [
      {
        a: "EBV infects the atypical lymphocytes seen on the smear",
        b: "The atypical lymphocytes are REACTIVE CYTOTOXIC T CELLS — EBV infects B CELLS through CD21; the T cells are the immune response",
        whyConfused: "The smear is the famous finding, so the infected cell is assumed to be the visible one.",
        keyDifference:
          "The cell infected (B cell, via CD21) and the cell made sick-looking (the reactive cytotoxic T cell) are different — the same split that explains splenomegaly (T-cell expansion) and the ⊕ Monospot (heterophile antibodies). Contrast CMV, latent in mononuclear cells, which gives a ⊝ Monospot mono.",
        clue: "Any mononucleosis smear question.",
      },
      {
        a: "HSV-1 causes oral disease and HSV-2 causes genital disease, always",
        b: "Recent data suggest BOTH HSV-1 and HSV-2 can affect BOTH genital and extragenital areas — HSV-1 is responsible for a growing percentage of herpes genitalis",
        whyConfused: "The classic division is taught as absolute.",
        keyDifference:
          "The reliable discriminator is the LATENCY SITE, not the lesion site: HSV-1 most commonly latent in trigeminal ganglia; HSV-2 in sacral ganglia. Either virus can cause genital lesions — but the sacral latency and the neonatal transmission risk follow HSV-2.",
        clue: "Any genital-herpes or neonatal-herpes stem.",
      },
      {
        a: "Poxvirus replicates in the nucleus like every other DNA virus",
        b: "POXVIRUS is the exception — it replicates in the CYTOPLASM, carrying its own replication machinery; it is also the LARGEST DNA virus",
        whyConfused: "DNA viruses are taught as nuclear replicators.",
        keyDifference:
          "The box rule: all DNA viruses are icosahedral and replicate in the nucleus EXCEPT poxvirus (it brings its own enzymes, so the cytoplasm suffices). Pox's exceptions stack: largest DNA virus, cytoplasmic replication, and the molluscum contagiosum presentation with molluscum bodies in keratinocytes.",
        clue: "Any DNA-virus replication-site or size question.",
      },
    ],
    pivots: [
      {
        lookAlike: "EBV mononucleosis vs CMV mononucleosis",
        differentiator: "The Monospot sign",
        correctPath:
          "EBV (HHV-4): ⊕ MONOSPOT (heterophile antibodies agglutinating sheep or horse RBCs), posterior cervical lymphadenopathy, splenomegaly (no contact sports), amoxicillin rash, B cells via CD21, Burkitt/nasopharyngeal carcinoma. CMV (HHV-5): ⊝ MONOSPOT, owl-eye intranuclear inclusions, latent in mononuclear cells, AIDS retinitis, congenital infection, pneumonia in transplant patients.",
      },
      {
        lookAlike: "The two naked circular families (papilloma vs polyoma)",
        differentiator: "Warts-and-cancer vs the immunocompromised brain-kidney pair",
        correctPath:
          "PAPILLOMAVIRUS: HPV — warts (serotypes 1, 2, 6, 11) and cancer, cervical, anal, penile, oropharyngeal (serotypes 16, 18). POLYOMAVIRUS: JC — PML in the immunocompromised (eg, HIV); BK — the transplant kidney. Both naked, DS, circular — the disease column separates them.",
      },
    ],
    miniCase: {
      vignette:
        "A 20-year-old college junior presents with 8 days of fever, profound fatigue, and severe sore throat. Examination shows enlarged, tender posterior cervical lymph nodes, palatal petechiae, and a spleen palpable 3 cm below the costal margin. She was seen at urgent care 4 days ago and started on amoxicillin for presumed streptococcal pharyngitis; yesterday she developed a diffuse maculopapular rash. CBC shows lymphocytosis with atypical lymphocytes. Heterophile antibody testing is positive.",
      question:
        "Which cell does the etiologic agent primarily infect, through which receptor?",
      options: [
        {
          label: "A",
          text: "B cells, through CD21",
          correct: true,
          why: "Correct. This is EBV (HHV-4) mononucleosis: fever, pharyngitis, posterior cervical lymphadenopathy, splenomegaly, atypical lymphocytes, ⊕ heterophile (Monospot) test, and the amoxicillin-triggered maculopapular rash. EBV infects B cells through CD21; the atypical lymphocytes are reactive cytotoxic T cells responding to the infected B cells, not the infected cells themselves. Contact sports are avoided until resolution (splenic rupture risk).",
        },
        {
          label: "B",
          text: "Cytotoxic T cells, through ICAM-1",
          why: "The atypical lymphocytes ARE cytotoxic T cells, but they are the reactive host response, not the infected population — and ICAM-1 is rhinovirus's receptor. The distractor swaps the response for the target.",
        },
        {
          label: "C",
          text: "Mononuclear cells, through integrins (heparan sulfate)",
          why: "That is CMV (HHV-5) — the ⊝ Monospot mononucleosis with owl-eye inclusions. The positive heterophile test and the posterior cervical pattern point to EBV; CMV mono lacks the heterophile antibody.",
        },
        {
          label: "D",
          text: "Dorsal root ganglion neurons, through nicotinic AChR",
          why: "That combines VZV's latency site with rabies's receptor — a composite distractor. VZV reactivation gives dermatomal shingles, not mononucleosis with lymphocytosis.",
        },
        {
          label: "E",
          text: "Oropharyngeal epithelium, through ACE2",
          why: "ACE2 is SARS-CoV-2's receptor. The distractor borrows the sore-throat presentation but none of the hematologic findings — no atypical lymphocytes, no heterophile antibodies, no splenomegaly pattern.",
        },
      ],
      reasoning:
        "The vignette stacks the EBV identifiers: the young-adult age, posterior cervical lymphadenopathy, splenomegaly, atypical lymphocytes, ⊕ heterophile test, and the classic amoxicillin rash. The question tests the two-cell split that every EBV stem turns on: the infected cell (B cell, via CD21) versus the visible sick cell (the reactive cytotoxic T cell). Each distractor pairs another virus's cell or receptor with the mono presentation — CMV's mononuclear cells and integrins, VZV's neurons with rabies's AChR, or SARS-CoV-2's ACE2.",
    },
  },
  mnemonics: [
    {
      code: "“The trio wears coats; the quartet goes naked — and the circular set rides rings.”",
      meaning:
        "KYP's key for the DNA grid: the ENVELOPED TRIO = HERPES, HEPADNA, POX (M22's envelope rule, now placed). The NAKED QUARTET = ADENO, PAPILLOMA, POLYOMA, PARVO. The RING SET = papilloma, polyoma (DS circular) + hepadna (partially DS circular); everyone else is linear; parvo alone is single-stranded. The poles: POX the largest (and the only cytoplasmic replicator), PARVO the smallest (parvus = small).",
      memorizes: "The family grid axes",
      whenToUse: "Any DNA-virus classification question.",
      clinical: "Envelope and shape predict the family; the family predicts the disease set.",
    },
    {
      code: "“The ganglion names the herpes.”",
      meaning:
        "KYP's key for the roster's latency axis: TRIGEMINAL = HSV-1 (gingivostomatitis, cold sores, herpetic whitlow, TEMPORAL LOBE ENCEPHALITIS — the most common sporadic encephalitis). SACRAL = HSV-2 (genital, neonatal, meningitis). DORSAL ROOT or trigeminal = VZV (chickenpox → shingles; postherpetic neuralgia; CN V1 = zoster ophthalmicus). B CELL via CD21 = EBV (mono, Burkitt, nasopharyngeal carcinoma). MONONUCLEAR CELL = CMV (⊝ Monospot mono, owl eyes, retinitis, congenital). HHV-6/7 = roseola; HHV-8 = Kaposi.",
      memorizes: "The herpes latency map",
      whenToUse: "Any herpes reactivation or vesicle-distribution stem.",
      clinical: "Latency predicts the reactivation dermatome and the neonatal risk.",
    },
    {
      code: "“Plus spot, B cell; minus spot, owl eye.”",
      meaning:
        "KYP's key for the mono split: EBV = ⊕ MONOSPOT (heterophile antibodies agglutinating sheep and horse RBCs) with B-cell infection through CD21 and reactive T cells on the smear; CMV = ⊝ Monospot with OWL-EYE intranuclear inclusions, mononuclear-cell latency, congenital disease, and AIDS retinitis ('sightomegalovirus').",
      memorizes: "The two mononucleosis syndromes",
      whenToUse: "Any mono-like illness with serology.",
      clinical: "The Monospot sign is the fastest discriminator on the exam.",
    },
  ],
  rapidReview: {
    s30: [
      "All DNA viruses are icosahedral and replicate in the NUCLEUS — except POXVIRUS (cytoplasmic; largest); PARVOVIRUS is the smallest (ssDNA)",
      "Enveloped trio: herpes, hepadna, pox · circular set: papilloma, polyoma (DS), hepadna (partially DS) · parvo = SS linear",
      "HSV-1: trigeminal latency — temporal lobe encephalitis (most common sporadic); HSV-2: sacral — genital + neonatal; VZV: dorsal root — shingles, postherpetic neuralgia, V1 ophthalmicus",
      "EBV: CD21 on B cells, ⊕ Monospot, atypical lymphocytes = reactive T cells, splenic rupture, amoxicillin rash, Burkitt + NPC",
      "CMV: ⊝ Monospot, owl-eye inclusions, AIDS retinitis, congenital · HHV-6/7: roseola (fever first, rash after) · HHV-8: Kaposi sarcoma",
    ],
    m3: [
      "Parvovirus B19: RBC precursors → aplastic crisis in sickle cell, slapped cheek (fifth disease), hydrops fetalis",
      "HPV: serotypes 1, 2, 6, 11 → warts; 16, 18 → cancer (cervical, anal, penile, oropharyngeal)",
      "JC virus → PML in HIV; BK virus → transplant kidney",
      "Adenovirus: febrile pharyngitis, hemorrhagic cystitis, pneumonia, pink eye, gastroenteritis, myocarditis",
      "Molluscum contagiosum: flesh-colored papule with central umbilication; molluscum bodies in keratinocytes",
    ],
    m10: [
      "PCR of skin lesions = test of choice; CSF PCR for herpes encephalitis; Tzanck (outdated) — multinucleated giant cells in HSV-1/2 + VZV; Cowdry A inclusions in the same trio",
      "Receptors: CMV integrins · EBV CD21 · HIV CD4/CXCR4/CCR5 · parvo B19 P antigen on RBCs · rabies nicotinic AChR · rhinovirus ICAM-1 · SARS-CoV-2 ACE2",
      "The A-J photo markers print on book 162's table but the gallery prints on book 163 — the cross-page figure convention",
      "The banner typo 'MICROCIOLOGY—VIROLOGY' prints on books 161-163; the VLM census normalized it twice differently (documented) — the text layer is authoritative",
      "pdfimages lists 13 rasters on p185 vs 11 identified markers (A-J gallery + Tzanck A) — the 2-image discrepancy documented as gallery sub-tiling",
    ],
  },
  recall: [
    {
      q: "Walk the seven DNA families with envelope, structure, and one anchor each.",
      a: "HERPESVIRUSES: enveloped, DS linear — the 7-virus roster. POXVIRUS: enveloped, DS linear, LARGEST, cytoplasmic — smallpox (eradicated by the live-attenuated vaccine), cowpox, molluscum contagiosum. HEPADNAVIRUS: enveloped, partially DS circular — HBV with reverse transcriptase. ADENOVIRUS: naked, DS linear — pharyngitis, hemorrhagic cystitis, pink eye, gastroenteritis, myocarditis. PAPILLOMAVIRUS: naked, DS circular — HPV (1/2/6/11 warts; 16/18 cancer). POLYOMAVIRUS: naked, DS circular — JC PML, BK transplant kidney. PARVOVIRUS: naked, SS linear, SMALLEST — B19 slapped cheek, aplastic crises, hydrops fetalis.",
    },
    {
      q: "Walk the herpes roster by latency site with each virus's signature set.",
      a: "TRIGEMINAL (HSV-1): gingivostomatitis, keratoconjunctivitis, cold sores, whitlow, temporal lobe encephalitis (most common sporadic), erythema multiforme; growing genital share. SACRAL (HSV-2): herpes genitalis, neonatal herpes; meningitis more common than HSV-1. DORSAL ROOT or trigeminal (VZV): chickenpox → shingles; postherpetic neuralgia; CN V1 zoster ophthalmicus. B CELLS via CD21 (EBV): mono (⊕ Monospot, atypical lymphocytes = reactive T cells, splenomegaly — no contact sports, amoxicillin rash), Burkitt, NPC, transplant lymphoproliferative disease. MONONUCLEAR CELLS (CMV): ⊝ Monospot mono, owl-eye inclusions, congenital CMV, AIDS retinitis, transplant pneumonia. HHV-6/7: roseola (fever first, then trunk-to-extremities rash, <2 years). HHV-8: Kaposi sarcoma in HIV/transplant.",
    },
    {
      q: "Give the HSV identification protocol and the receptor set.",
      a: "IDENTIFICATION: PCR of skin lesions is the test of choice; CSF PCR for herpes encephalitis; Tzanck test (outdated) — a smear of an opened vesicle for multinucleated giant cells in HSV-1, HSV-2, VZV; intranuclear eosinophilic Cowdry A inclusions in the same three. RECEPTORS: CMV — integrins (heparan sulfate); EBV — CD21; HIV — CD4, CXCR4, CCR5; parvovirus B19 — P antigen on RBCs; rabies — nicotinic AChR; rhinovirus — ICAM-1; SARS-CoV-2 — ACE2.",
    },
    {
      q: "Explain why parvovirus B19 causes aplastic crises in sickle cell disease and hydrops fetalis.",
      a: "B19 infects RBC precursors and endothelial cells → RBC destruction. In sickle cell disease, the already-shortened RBC lifespan means a brief halt in erythropoiesis (the pure RBC aplasia the virus causes) drops hemoglobin precipitously — an aplastic crisis. In the fetus, whose erythropoiesis is rapid, the same tropism causes severe anemia → hydrops fetalis and death. In children the same infection presents as the 'slapped cheek' rash (erythema infectiosum, fifth disease); in adults, pure RBC aplasia and rheumatoid arthritis-like symptoms.",
    },
    {
      q: "State the box rule and the two size poles.",
      a: "All DNA viruses are icosahedral and replicate in the NUCLEUS — EXCEPT POXVIRUS, which replicates in the CYTOPLASM (it carries its own replication machinery). POXVIRUS is the LARGEST DNA virus; PARVOVIRUS is the SMALLEST (parvus = small).",
    },
  ],
  related: [
    {
      title: "Viral Structure & Genetics",
      topicId: "viral-structure-genetics",
      note: "M22's envelope rule (the enveloped DNA trio: herpes, hepadna, pox) and genome rosters (all dsDNA except parvo; the circular set) are the axes this note's family grid is built on.",
    },
    {
      title: "Immunodeficiency Infection Patterns",
      topicId: "immunodeficiency-infection-patterns",
      note: "E38's deficiency-pathogen matrix is the recipient of this roster's opportunist set: HIV carries JC PML, CMV retinitis, and HHV-8 Kaposi; transplantation carries BK nephropathy, CMV pneumonia, and EBV lymphoproliferative disease.",
    },
    {
      title: "Active vs Passive Immunity & Vaccine Types",
      topicId: "active-passive-immunity",
      note: "The smallpox eradication story is the live-attenuated vaccine's historic proof — this roster's poxvirus row points back at the vaccine-type map's live-virus logic.",
    },
  ],
  crossLinks: [
    {
      subject: "Hematology (Sickle Cell Disease)",
      connection:
        "Parvovirus B19's RBC-precursor tropism is the classic cause of aplastic crisis in sickle cell disease — the hematology chapter's anemia trajectory meets this family's smallest member.",
    },
    {
      subject: "Oncology (Virus-Associated Malignancies)",
      connection:
        "The DNA-virus cancer set — HPV 16/18 cervical-anal-penile-oropharyngeal cancer, EBV Burkitt and nasopharyngeal carcinoma, HHV-8 Kaposi sarcoma — anchors the oncology chapter's infectious-cause questions.",
    },
    {
      subject: "Neurology (Encephalitis)",
      connection:
        "HSV-1 is the most common cause of sporadic encephalitis (temporal lobe, altered mental status, seizures, aphasia) — treat empirically and confirm by CSF PCR; JC virus PML is the AIDS dementia differential's nonenhancing white-matter member.",
    },
    {
      subject: "Obstetrics (Congenital Infection)",
      connection:
        "Congenital CMV and neonatal herpes (HSV-2 perinatal) are the TORCH-set virology members — this roster supplies the congenital and perinatal transmission rows for the fetus-and-newborn infection questions.",
    },
  ],
};
