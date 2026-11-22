import type { KypUsMLENote } from "../types";

// Microbiology — SYSTEMS banner (M-batch 29). Source: pdf 197-198 / books
//  175-176 (Bugs causing diarrhea — the bloody/watery split; Common causes
//  of pneumonia — the age ladder + special groups; Common causes of
//  meningitis + the CSF findings + empiric therapy + the viral set +
//  brain abscess; Osteomyelitis — the risk-factor map). Rasters: p198 1
//  gray image (the osteomyelitis imaging A — the radiograph + MRI pair)
//  — COPYRIGHTED, described-in-text only. The SYSTEMS banner typo
//  'MICROCIOLOGY—SYSTEMS' prints on books 175-176. FA's printed glosses
//  (Runts May Cough; Chunky Sputum) are quoted in the table block for
//  verification only.

export const bugsBySystemGiMeningitis: KypUsMLENote = {
  id: "bugs-by-system-gi-meningitis",
  title: "Bugs by System: GI, Pneumonia, Meningitis & CSF",
  subtitle:
    "Five systems matrices on one pair of pages. THE DIARRHEA SPLIT (book 175): BLOODY — Campylobacter (comma- or S-shaped organisms; growth at 42°C); E histolytica (protozoan; amebic dysentery; liver abscess); enterohemorrhagic E coli (O157:H7; can cause HUS; makes Shiga toxin); enteroinvasive E coli (invades colonic mucosa); nontyphoidal Salmonella (lactose ⊝; flagellar motility; animal reservoir, especially poultry and eggs); Shigella (lactose ⊝; very low ID50; produces Shiga toxin; human reservoir only; bacillary dysentery); Y enterocolitica (day care outbreaks; pseudoappendicitis). WATERY — C difficile (pseudomembranous colitis; associated with antibiotics and PPIs; occasionally bloody); C perfringens (also causes gas gangrene); enterotoxigenic E coli (travelers' diarrhea; heat-labile LT and heat-stable ST toxins); the protozoa Giardia and Cryptosporidium; V cholerae (comma-shaped; rice-water diarrhea; infected seafood); the viruses — norovirus (the most common cause in developed countries), rotavirus (↓ incidence with vaccination), enteric adenovirus. THE PNEUMONIA LADDER: NEONATES <4 wk — group B streptococci, E coli. CHILDREN 4 wk-18 yr — viruses (RSV), Mycoplasma, C trachomatis (infants-3 yr), C pneumoniae (school-aged), S pneumoniae. ADULTS 18-40 — Mycoplasma, C pneumoniae, S pneumoniae, viruses (eg, influenza). ADULTS 40-65 — S pneumoniae, H influenzae, anaerobes, viruses, Mycoplasma. ADULTS 65+ — S pneumoniae, influenza virus, anaerobes, H influenzae, gram ⊝ rods. SPECIAL GROUPS: alcohol overuse — Klebsiella and aspiration anaerobes (Peptostreptococcus, Fusobacterium, Prevotella, Bacteroides); injection drug use — S pneumoniae, S aureus; aspiration — anaerobes; atypical — Mycoplasma, Chlamydophila, Legionella, and the viruses (RSV, CMV, influenza, adenovirus); cystic fibrosis — Pseudomonas, S aureus, S pneumoniae, Burkholderia cepacia; immunocompromised — S aureus, enteric gram ⊝ rods, fungi, viruses, P jirovecii (with HIV); healthcare-associated — S aureus, Pseudomonas, other enteric gram ⊝ rods; postviral — S pneumoniae, S aureus, H influenzae; COPD — S pneumoniae, H influenzae, M catarrhalis, Pseudomonas. THE MENINGITIS LADDER (book 176): NEWBORN 0-6 mo — group B streptococci, E coli, Listeria. CHILDREN 6 mo-6 yr — S pneumoniae, N meningitidis, H influenzae type b, group B streptococci, enteroviruses. 6-60 yr — S pneumoniae, N meningitidis, enteroviruses, HSV. 60 yr+ — S pneumoniae, N meningitidis, H influenzae type b, group B streptococci, Listeria. EMPIRIC THERAPY: ceftriaxone and vancomycin (add ampicillin if Listeria is suspected; add acyclovir if viral encephalitis is suspected). The viral set: enteroviruses (especially coxsackievirus), HSV-2 (HSV-1 = encephalitis), HIV, West Nile virus (also encephalitis), VZV; in HIV — Cryptococcus. THE VACCINE NOTES: GBS meningitis in neonates has ↓ greatly due to screening and antibiotic prophylaxis in pregnancy; H influenzae meningitis has ↓ greatly due to conjugate vaccination — today's cases are usually in unimmunized children. THE CSF KEY: BACTERIAL — ↑ opening pressure, ↑ PMNs, ↑ protein, ↓ glucose. FUNGAL/TB — ↑ opening pressure, ↑ lymphocytes, ↑ protein, ↓ glucose. VIRAL — normal/↑ opening pressure, ↑ lymphocytes, normal/↑ protein, NORMAL glucose. BRAIN ABSCESS: most commonly viridans streptococci and S aureus; dental infection or extraction adds the oral anaerobes; multiple abscesses are usually from bacteremia, single lesions from contiguous sites — otitis media and mastoiditis → temporal lobe and cerebellum; sinusitis or dental infection → frontal lobe; Toxoplasma reactivation in AIDS. OSTEOMYELITIS: S aureus is most common overall; sickle cell disease — Salmonella (and S aureus); prosthetic joint — S aureus, S epidermidis; vertebral involvement — S aureus, M tuberculosis (Pott disease); cat and dog bites — Pasteurella multocida; injection drug use — S aureus, also Pseudomonas and Candida; sexually active — N gonorrhoeae (rare; septic arthritis more common). ESR and CRP are sensitive but not specific; radiographs are insensitive early; MRI is best for acute infection; biopsy or aspiration with culture identifies the organism.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Systems Microbiology",
  pilotCategory:
    "Systems microbiology — the diarrhea split on the bloody/watery axis, the pneumonia ladder on the age axis with its special-groups overlay, the meningitis ladder with the CSF key and empiric therapy, the brain-abscess routing rules, and the osteomyelitis risk-factor map",
  difficulty: 2,
  readTime: 14,
  sourceRef: "First Aid 2026, Part 1 pp. 175–176 (Bugs causing diarrhea; Common causes of pneumonia; Common causes of meningitis; Cerebrospinal fluid findings in meningitis; Infections causing brain abscess; Osteomyelitis)",
  tags: [
    "bloody diarrhea",
    "watery diarrhea",
    "Campylobacter",
    "E histolytica",
    "enterohemorrhagic E coli",
    "O157:H7",
    "Shiga toxin",
    "HUS",
    "enteroinvasive E coli",
    "Salmonella",
    "Shigella",
    "bacillary dysentery",
    "Y enterocolitica",
    "pseudoappendicitis",
    "C difficile",
    "pseudomembranous colitis",
    "C perfringens",
    "enterotoxigenic E coli",
    "travelers diarrhea",
    "Giardia",
    "Cryptosporidium",
    "V cholerae",
    "rice-water diarrhea",
    "norovirus",
    "rotavirus",
    "enteric adenovirus",
    "pneumonia",
    "group B streptococci",
    "RSV",
    "Mycoplasma",
    "C trachomatis",
    "C pneumoniae",
    "S pneumoniae",
    "H influenzae",
    "Klebsiella",
    "cystic fibrosis",
    "Pseudomonas",
    "Burkholderia cepacia",
    "P jirovecii",
    "healthcare-associated pneumonia",
    "COPD",
    "M catarrhalis",
    "meningitis",
    "Listeria",
    "N meningitidis",
    "enteroviruses",
    "HSV",
    "ceftriaxone",
    "vancomycin",
    "ampicillin",
    "acyclovir",
    "CSF findings",
    "PMNs",
    "lymphocytes",
    "brain abscess",
    "viridans streptococci",
    "otitis media",
    "mastoiditis",
    "sinusitis",
    "Toxoplasma",
    "osteomyelitis",
    "Salmonella osteomyelitis",
    "Pott disease",
    "Pasteurella multocida",
    "septic arthritis",
    "ESR",
    "CRP",
  ],
  core: {
    what: "THE DIARRHEA SPLIT (book 175). The bloody column: CAMPYLOBACTER — comma- or S-shaped organisms that grow at 42°C; E HISTOLYTICA — the protozoan of amebic dysentery and liver abscess; ENTEROHEMORRHAGIC E COLI — O157:H7, Shiga toxin, and the HUS risk; ENTEROINVASIVE E COLI — invades the colonic mucosa; NONTYPHOIDAL SALMONELLA — lactose ⊝, flagellar motility, animal reservoir (especially poultry and eggs); SHIGELLA — lactose ⊝, VERY LOW ID50, Shiga toxin, human reservoir only, bacillary dysentery; Y ENTEROCOLITICA — day care outbreaks and pseudoappendicitis. The watery column: C DIFFICILE — pseudomembranous colitis associated with antibiotics and PPIs, occasionally bloody; C PERFRINGENS — also causes gas gangrene; ENTEROTOXIGENIC E COLI — the travelers' diarrhea organism producing heat-labile (LT) and heat-stable (ST) toxins; the PROTOZOA Giardia and Cryptosporidium; V CHOLERAE — comma-shaped organisms, rice-water diarrhea, often from infected seafood; and the VIRUSES — norovirus (the most common cause in developed countries), rotavirus (incidence down in developed countries thanks to vaccination), and enteric adenovirus. THE PNEUMONIA LADDER. Neonates under 4 weeks: GROUP B STREPTOCOCCI and E COLI — the birth-canal and peripartum organisms. Children 4 weeks to 18 years: VIRUSES (RSV) first, then MYCOPLASMA, C TRACHOMATIS in infants to 3 years, C PNEUMONIAE in school-aged children, and S PNEUMONIAE (FA's printed gloss: Runts May Cough). Adults 18-40: MYCOPLASMA, C PNEUMONIAE, S PNEUMONIAE, and viruses such as influenza (FA's gloss: Chunky Sputum). Adults 40-65: S PNEUMONIAE, H INFLUENZAE, ANAEROBES, viruses, Mycoplasma. Adults 65+: S PNEUMONIAE, INFLUENZA VIRUS, anaerobes, H INFLUENZAE, and GRAM ⊝ RODS. The special groups: ALCOHOL OVERUSE — Klebsiella plus the aspiration anaerobes (Peptostreptococcus, Fusobacterium, Prevotella, Bacteroides); INJECTION DRUG USE — S pneumoniae, S aureus; ASPIRATION — anaerobes; ATYPICAL — Mycoplasma, Chlamydophila, Legionella, and the viruses (RSV, CMV, influenza, adenovirus); CYSTIC FIBROSIS — Pseudomonas, S aureus, S pneumoniae, Burkholderia cepacia; IMMUNOCOMPROMISED — S aureus, enteric gram ⊝ rods, fungi, viruses, and P jirovecii with HIV; HEALTHCARE-ASSOCIATED — S aureus, Pseudomonas, other enteric gram ⊝ rods; POSTVIRAL — S pneumoniae, S aureus, H influenzae; COPD — S pneumoniae, H influenzae, M catarrhalis, Pseudomonas. THE MENINGITIS LADDER (book 176). Newborn 0-6 months: GROUP B STREPTOCOCCI, E COLI, LISTERIA. Children 6 months-6 years: S PNEUMONIAE, N MENINGITIDIS, H INFLUENZAE TYPE B, group B streptococci, enteroviruses. Ages 6-60: S PNEUMONIAE, N MENINGITIDIS, ENTEROVIRUSES, HSV. Age 60+: S PNEUMONIAE, N MENINGITIDIS, H INFLUENZAE TYPE B, group B streptococci, LISTERIA. THE EMPIRIC RULE: give CEFTRIAXONE and VANCOMYCIN empirically — add AMPICILLIN if Listeria is suspected (the extremes of age), add ACYCLOVIR if viral encephalitis is suspected. The viral meningitis set: ENTEROVIRUSES (especially coxsackievirus), HSV-2 (HSV-1 causes encephalitis), HIV, WEST NILE VIRUS (which also causes encephalitis), and VZV; in HIV, think CRYPTOCOCCUS. THE VACCINE NOTES: neonatal GBS meningitis has fallen greatly due to screening and antibiotic prophylaxis in pregnancy; H influenzae meningitis has fallen greatly due to conjugate vaccination — today's cases are usually in unimmunized children. THE CSF KEY: BACTERIAL — ↑ opening pressure, ↑ PMNs, ↑ protein, ↓ glucose. FUNGAL/TB — ↑ opening pressure, ↑ lymphocytes, ↑ protein, ↓ glucose. VIRAL — normal or ↑ opening pressure, ↑ lymphocytes, normal or ↑ protein, NORMAL glucose. THE BRAIN ABSCESS RULES: most commonly VIRIDANS STREPTOCOCCI and S AUREUS; a preceding dental infection or extraction adds the oral anaerobes; MULTIPLE abscesses are usually from BACTEREMIA; SINGLE lesions arise from CONTIGUOUS sites — otitis media and mastoiditis seed the TEMPORAL LOBE and CEREBELLUM, sinusitis or dental infection seeds the FRONTAL LOBE; Toxoplasma reactivation in AIDS. THE OSTEOMYELITIS MAP: with no other information, assume S AUREUS (most common overall); SEXUALLY ACTIVE — N gonorrhoeae (rare; septic arthritis more common); SICKLE CELL DISEASE — Salmonella and S aureus; PROSTHETIC JOINT — S aureus and S epidermidis; VERTEBRAL INVOLVEMENT — S aureus and M tuberculosis (Pott disease); CAT AND DOG BITES — Pasteurella multocida; INJECTION DRUG USE — S aureus, also Pseudomonas and Candida. ESR and CRP are sensitive but not specific; radiographs are insensitive early (useful in chronic disease); MRI is best for acute infection and anatomy; biopsy or aspiration with culture identifies the organism.",
    why: "This pair of pages is the systems-microbiology centerpiece — five matrices that the exam reads as lookup tables, and it carries four institutions. The first is THE DIARRHEA SPLIT: bloody versus watery, with the Shiga-toxin pair (EHEC and Shigella), the lactose-⊝ invasive pair (Salmonella and Shigella with their ID50 and reservoir differences), and the watery toxin set (C difficile on antibiotics and PPIs, ETEC's LT/ST, cholera's rice-water). The second is THE AGE-LADDER LOGIC shared by pneumonia and meningitis: the neonatal pair (GBS, E coli — the birth organisms, plus Listeria for meningitis), the pediatric set, the young-adult atypicals, and the return of the neonatal organisms at the elderly end — with Listeria bookending both extremes of age. The empiric rule (ceftriaxone + vancomycin; ampicillin for Listeria; acyclovir for encephalitis) operationalizes the ladder. The third is THE CSF KEY: the three-row table whose PMNs-versus-lymphocytes and glucose-low-versus-normal cells answer every lumbar-puncture stem. The fourth is THE ROUTING LOGIC of abscess and osteomyelitis: multiple abscesses from bacteremia versus single from contiguous sites with their lobe destinations, and the osteomyelitis risk factors that swap the organism (Salmonella in sickle cell, Pasteurella after bites, TB in the vertebra).",
    keyIdea: "Split the stool, ladder the age, read the tap. DIARRHEA — BLOODY: Campylobacter (42°C), E histolytica (liver abscess), EHEC O157:H7 (Shiga → HUS), EIEC (invades), Salmonella (lactose ⊝, poultry/eggs), Shigella (LOW ID50, Shiga, human-only, bacillary dysentery), Y enterocolitica (pseudoappendicitis). WATERY: C difficile (antibiotics/PPIs, pseudomembranous), C perfringens (gas gangrene), ETEC (LT/ST, travelers'), Giardia + Cryptosporidium, V cholerae (rice-water), norovirus #1 developed, rotavirus (vaccine ↓), enteric adenovirus. PNEUMONIA — neonate: GBS + E coli; child: RSV, Mycoplasma, C trachomatis (infants), C pneumoniae (school-aged), S pneumoniae; 18-40: the atypicals + S pneumoniae; 40-65: S pneumoniae, H flu, anaerobes; 65+: S pneumoniae, influenza, anaerobes, H flu, GNRs; special — alcohol (Klebsiella + aspiration anaerobes), CF (Pseudomonas, Burkholderia), immunocompromised (P jirovecii), COPD (M catarrhalis). MENINGITIS — newborn: GBS, E coli, LISTERIA; child: S pneumoniae, N meningitidis, H flu b, GBS, enteroviruses; 6-60: S pneumoniae, N meningitidis, enteroviruses, HSV; 60+: the newborn set returns (Listeria!). EMPIRIC: ceftriaxone + vancomycin (+ ampicillin if Listeria; + acyclovir if encephalitis). Viral set: coxsackievirus, HSV-2 (HSV-1 = encephalitis), HIV, West Nile, VZV; HIV → Crypto. CSF — bacterial: ↑PMNs, ↑protein, ↓glucose; fungal/TB: ↑lymphocytes, ↑protein, ↓glucose; viral: ↑lymphocytes, NORMAL glucose. ABSCESS — viridans + S aureus; multiple = bacteremia; single = contiguous (otitis/mastoid → temporal + cerebellum; sinus/dental → frontal); Toxoplasma in AIDS. OSTEOMYELITIS — default S aureus; sickle cell = Salmonella; prosthetic = S aureus + S epi; vertebral = S aureus + TB (Pott); bites = Pasteurella; IDU = S aureus + Pseudomonas + Candida.",
  },
  mechanisms: [
    {
      id: "diarrhea-split-logic",
      title: "The diarrhea split: what the stool looks like names the mechanism",
      context: "Bloody invaders against watery toxigenes",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A patient with acute diarrhea — is the stool bloody or watery?",
            sublabel: "Input — the first question of every GI stem.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE BLOODY COLUMN — the invaders and the toxin-makers: Campylobacter (comma/S-shaped, 42°C) and the invasive E coli (EIEC invades the mucosa; EHEC's Shiga toxin causes HUS) against the lactose-⊝ pair — Salmonella (flagellar, animal reservoir in poultry and eggs) and Shigella (VERY LOW ID50, human reservoir only, bacillary dysentery, Shiga toxin) — plus E histolytica's amebic dysentery with liver abscess and Y enterocolitica's pseudoappendicitis",
            sublabel: "Process — mucosal invasion and Shiga toxicity draw blood.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE WATERY COLUMN — the toxin-makers and the noninvasive: C difficile (pseudomembranous colitis on antibiotics and PPIs), C perfringens (the gas-gangrene organism's foodborne form), ETEC (LT and ST toxins — the travelers' diarrhea), the protozoa Giardia and Cryptosporidium, V cholerae (rice-water diarrhea from infected seafood), and the viruses (norovirus most common in developed countries, rotavirus down with vaccination, enteric adenovirus)",
            sublabel: "Process — enterotoxins and osmotic loads flood the lumen without drawing blood.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the discriminating anchors: Shiga toxin twice (EHEC with HUS, Shigella with low ID50); lactose ⊝ twice (Salmonella with animals, Shigella with humans only); antibiotics + PPIs (C difficile); seafood twice (cholera's rice-water, Vibrio's wounds of M28)",
            sublabel: "Output — the stool's appearance plus one anchor names the organism.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "bloody = invasion" },
          { from: "s1", to: "s2", label: "watery = toxin" },
          { from: "s2", to: "o1", label: "the anchors" },
        ],
      },
    },
    {
      id: "age-ladder-logic",
      title: "The age ladder: the same logic runs pneumonia and meningitis",
      context: "Birth organisms at both ends of age, atypicals in between",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A febrile patient with pulmonary or neurologic signs — how old?",
            sublabel: "Input — the age is the first datum.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE NEONATAL PAIR: birth exposure seeds group B STREPTOCOCCI and E COLI — pneumonia under 4 weeks, meningitis 0-6 months — with LISTERIA joining the meningitis set (the organism of both extremes of age)",
            sublabel: "Process — the birth canal and the first days name the organisms.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE PEDIATRIC SET: pneumonia runs viral (RSV) with Mycoplasma, C trachomatis in infants, C pneumoniae in the school-aged, and S pneumoniae; meningitis at 6 months-6 years runs S pneumoniae, N meningitidis, H influenzae type b, GBS, and enteroviruses — with the vaccine notes (GBS down with maternal prophylaxis; H influenzae down with conjugate vaccination — today's cases in the unimmunized)",
            sublabel: "Process — the childhood set spans the atypicals and the vaccine-preventable.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE ADULT SET: young adults carry the ATYPICALS (Mycoplasma, Chlamydophila, Legionella) with S pneumoniae; the middle ages add H influenzae and anaerobes; 65+ returns S pneumoniae with influenza, anaerobes, and the gram ⊝ rods — and meningitis at 60+ brings back the neonatal set (with Listeria). The special groups overlay: alcohol (Klebsiella, aspiration anaerobes), CF (Pseudomonas, Burkholderia), immunocompromised (P jirovecii), healthcare-associated (S aureus, Pseudomonas, enteric GNRs), postviral, COPD (M catarrhalis)",
            sublabel: "Process — the ladder rises through the atypicals to the elderly gram- negatives.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the empiric and CSF reading: ceftriaxone + vancomycin empirically (ampicillin for Listeria at the age extremes; acyclovir for HSV encephalitis); the CSF key — bacterial (↑PMNs, ↓glucose), fungal/TB (↑lymphocytes, ↓glucose), viral (↑lymphocytes, normal glucose); the abscess routing (multiple = bacteremia; single = contiguous with its lobe map); and the osteomyelitis risk factors (Salmonella in sickle cell, Pasteurella after bites, TB in the vertebra)",
            sublabel: "Output — the ladder converts age into empiric therapy and the tap into a diagnosis.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "the neonatal pair" },
          { from: "s1", to: "s2", label: "the pediatric set" },
          { from: "s2", to: "s3", label: "the adult ladder" },
          { from: "s3", to: "o1", label: "empirics + CSF + routing" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "systems-bug-matrix",
      title: "The systems bug matrix — diarrhea, pneumonia, meningitis, abscess, osteomyelitis",
      caption:
        "An original KYP redraw of the source's two-page block (books 175-176): the bloody/watery diarrhea split, the 5-column pneumonia age ladder with the special-groups overlay, the 4-column meningitis age ladder with the CSF key and the empiric strip, the brain-abscess routing rules, and the osteomyelitis risk-factor map.",
      notice:
        "The printed osteomyelitis imaging A (the radiograph + MRI pair) is raster, COPYRIGHTED, described-in-text only. FA's printed glosses (Runts May Cough for the pediatric pneumonia set; Chunky Sputum for the young-adult set) stay in the note's table block — verification-only, not redrawn.",
    },
    {
      kind: "table",
      title: "Bugs causing diarrhea — verbatim",
      intro: "The source's split table (book 175), verbatim.",
      columns: ["Column", "Organisms and findings (verbatim)"],
      rows: [
        [
          "Bloody diarrhea",
          "Campylobacter — Comma- or S-shaped organisms; growth at 42°C. E histolytica — Protozoan; amebic dysentery; liver abscess. Enterohemorrhagic E coli — O157:H7; can cause HUS; makes Shiga toxin. Enteroinvasive E coli — Invades colonic mucosa. Salmonella (nontyphoidal) — Lactose ⊝; flagellar motility; has animal reservoir, especially poultry and eggs. Shigella — Lactose ⊝; very low ID50; produces Shiga toxin; human reservoir only; bacillary dysentery. Y enterocolitica — Day care outbreaks; pseudoappendicitis.",
        ],
        [
          "Watery diarrhea",
          "C difficile — Pseudomembranous colitis; associated with antibiotics and PPIs; occasionally bloody diarrhea. C perfringens — Also causes gas gangrene. Enterotoxigenic E coli — Travelers’ diarrhea; produces heat-labile (LT) and heat-stable (ST) toxins. Protozoa — Giardia, Cryptosporidium. V cholerae — Comma-shaped organisms; rice-water diarrhea; often from infected seafood. Viruses — Norovirus (most common cause in developed countries), rotavirus (↓ incidence in developed countries due to vaccination), enteric adenovirus.",
        ],
      ],
      caption:
        "The table reads with the diarrhea-split mechanism: the bloody column carries the invaders and the Shiga-toxin makers; the watery column carries the enterotoxins and the viruses. Each organism's one-line anchor is the exam's answer key.",
    },
    {
      kind: "table",
      title: "Pneumonia, meningitis, CSF, abscess, and osteomyelitis — verbatim",
      intro: "The source's systems tables (books 175-176), verbatim.",
      columns: ["Block", "Content (verbatim; FA glosses marked)"],
      rows: [
        [
          "Common causes of pneumonia (book 175)",
          "NEONATES (<4 WK): Group B Streptococcus, E coli. CHILDREN (4 WK-18 YR): Viruses (RSV); Mycoplasma; C trachomatis (infants-3 yr); C pneumoniae (school-aged children); S pneumoniae. [FA gloss, printed: Runts May Cough — verification-only.] ADULTS (18-40 YR): Mycoplasma; C pneumoniae; S pneumoniae; Viruses (eg, influenza). [FA gloss, printed: Chunky Sputum — verification-only.] ADULTS (40-65 YR): S pneumoniae; H influenzae; Anaerobes; Viruses; Mycoplasma. ADULTS (65 YR+): S pneumoniae; Influenza virus; Anaerobes; H influenzae; Gram ⊝ rods.",
        ],
        [
          "Pneumonia special groups (book 175)",
          "Alcohol overuse — Klebsiella, anaerobes usually due to aspiration (eg, Peptostreptococcus, Fusobacterium, Prevotella, Bacteroides). Injection drug use — S pneumoniae, S aureus. Aspiration — Anaerobes. Atypical — Mycoplasma, Chlamydophila, Legionella, viruses (RSV, CMV, influenza, adenovirus). Cystic fibrosis — Pseudomonas, S aureus, S pneumoniae, Burkholderia cepacia. Immunocompromised — S aureus, enteric gram ⊝ rods, fungi, viruses, P jirovecii (with HIV). Healthcare-associated — S aureus, Pseudomonas, other enteric gram ⊝ rods. Postviral — S pneumoniae, S aureus, H influenzae. COPD — S pneumoniae, H influenzae, M catarrhalis, Pseudomonas.",
        ],
        [
          "Common causes of meningitis (book 176)",
          "NEWBORN (0-6 MO): Group B Streptococcus, E coli, Listeria. CHILDREN (6 MO-6 YR): S pneumoniae, N meningitidis, H influenzae type b, Group B Streptococcus, Enteroviruses. 6-60 YR: S pneumoniae, N meningitidis, Enteroviruses, HSV. 60 YR+: S pneumoniae, N meningitidis, H influenzae type b, Group B Streptococcus, Listeria.",
        ],
        [
          "Empiric therapy + the viral set + vaccine notes (book 176)",
          "Give ceftriaxone and vancomycin empirically (add ampicillin if Listeria is suspected; add acyclovir if viral encephalitis is suspected). Viral causes of meningitis: enteroviruses (especially coxsackievirus), HSV-2 (HSV-1 = encephalitis), HIV, West Nile virus (also causes encephalitis), VZV. In HIV: Cryptococcus spp. Note: Incidence of Group B streptococcal meningitis in neonates has ↓ greatly due to screening and antibiotic prophylaxis in pregnancy. Incidence of H influenzae meningitis has ↓ greatly due to conjugate H influenzae vaccinations. Today, cases are usually seen in unimmunized children.",
        ],
        [
          "Cerebrospinal fluid findings in meningitis (book 176)",
          "Bacterial: OPENING PRESSURE ↑ · CELL TYPE ↑ PMNs · PROTEIN ↑ · GLUCOSE ↓. Fungal/TB: OPENING PRESSURE ↑ · CELL TYPE ↑ lymphocytes · PROTEIN ↑ · GLUCOSE ↓. Viral: OPENING PRESSURE Normal/↑ · CELL TYPE ↑ lymphocytes · PROTEIN Normal/↑ · GLUCOSE Normal.",
        ],
        [
          "Infections causing brain abscess (book 176)",
          "Most commonly viridans streptococci and Staphylococcus aureus. If dental infection or extraction precedes abscess, oral anaerobes commonly involved. Multiple abscesses are usually from bacteremia; single lesions from contiguous sites: otitis media and mastoiditis → temporal lobe and cerebellum; sinusitis or dental infection → frontal lobe. Toxoplasma reactivation in AIDS.",
        ],
        [
          "Osteomyelitis (book 176)",
          "RISK FACTOR | ASSOCIATED INFECTION: Assume if no other information is available (A) — S aureus (most common overall). Sexually active — Neisseria gonorrhoeae (rare), septic arthritis more common. Sickle cell disease — Salmonella, S aureus. Prosthetic joint replacement — S aureus, S epidermidis. Vertebral involvement — S aureus, M tuberculosis (Pott disease). Cat and dog bites — Pasteurella multocida. Injection drug use — S aureus; also Pseudomonas, Candida. Elevated ESR and CRP sensitive but not specific. Radiographs are insensitive early but can be useful in chronic osteomyelitis (A, left — the printed radiograph, described-in-text only). MRI is best for detecting acute infection and detailing anatomic involvement (A, right — the printed MRI, described-in-text only). Biopsy or aspiration with culture necessary to identify organism.",
        ],
      ],
      caption:
        "The blocks read with the age-ladder mechanism: the neonatal pair (plus Listeria for meningitis) at both extremes of age, the atypicals in the young adult, and the elderly gram-negative return — with the empiric rule, the CSF key, the abscess routing, and the osteomyelitis risk factors as the operational layer.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the matrices imply",
      body: "THE DIARRHEA PROTOCOL: bloody stool with fever → the invasive column (Campylobacter, Salmonella, Shigella, EIEC, E histolytica) — remember the Shiga pair (EHEC O157:H7 with HUS — no antibiotics; Shigella with its very low ID50 and human-only reservoir) and the pseudoappendicitis of Y enterocolitica; watery stool on antibiotics or PPIs → C difficile; rice-water with seafood exposure → cholera; cruise-ship or day-care watery → norovirus or rotavirus; travelers' watery → ETEC (LT/ST). THE PNEUMONIA PROTOCOL: neonate → GBS + E coli; child → RSV with the age-graded atypicals (C trachomatis infants, C pneumoniae school-aged); young adult → the atypicals; 65+ → S pneumoniae with influenza and the gram ⊝ rods — and always the special-group overlay (alcohol, aspiration, CF, immunocompromised, healthcare-associated, postviral, COPD). THE MENINGITIS PROTOCOL: start ceftriaxone + vancomycin before the tap results — add AMPICILLIN at the age extremes (Listeria: newborn and 60+) and ACYCLOVIR for HSV encephalitis; the CSF key (PMNs + low glucose = bacterial; lymphocytes + low glucose = fungal/TB; lymphocytes + normal glucose = viral); in HIV, Cryptococcus. THE ABSCESS PROTOCOL: multiple lesions → bacteremia; single lesion → trace the contiguous source (otitis/mastoiditis → temporal lobe + cerebellum; sinus/dental → frontal lobe); dental extraction adds oral anaerobes; in AIDS, Toxoplasma. THE OSTEOMYELITIS PROTOCOL: default S aureus; sickle cell → Salmonella; prosthetic joint → S aureus + S epidermidis; vertebral → S aureus + TB (Pott); cat/dog bite → Pasteurella; IDU → S aureus + Pseudomonas + Candida; ESR/CRP screen (sensitive, not specific), MRI for acute, biopsy for the organism.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 3-week-old neonate has fever, poor feeding, and a bulging fontanelle; CSF shows 800 PMNs/μL, protein 220 mg/dL, and glucose 18 mg/dL.",
        discriminator: "Neonate + PMN-predominant CSF with low glucose",
        concept: "Neonatal bacterial meningitis — GBS, E coli, Listeria",
        answer:
          "The newborn (0-6 mo) meningitis set is Group B Streptococcus, E coli, and Listeria. Empiric therapy is ceftriaxone and vancomycin with AMPICILLIN added because Listeria is suspected (the age extreme). GBS incidence has fallen greatly with maternal screening and intrapartum prophylaxis — the modern cases cluster in unscreened or bacteriuric mothers.",
      },
      {
        stem: "A 22-year-old presents with 5 days of bloody diarrhea and severe abdominal cramps after a farm visit; 3 days later she develops pallor, oliguria, and a platelet count of 40,000; a smear shows schistocytes.",
        discriminator: "Bloody diarrhea → HUS with schistocytes",
        concept: "EHEC O157:H7 — Shiga toxin and the no-antibiotic rule",
        answer:
          "Enterohemorrhagic E coli (O157:H7) makes Shiga toxin and can cause hemolytic-uremic syndrome — bloody diarrhea followed by the triad of anemia with schistocytes, thrombocytopenia, and acute kidney injury. Shigella also makes Shiga toxin (with very low ID50 and human-only reservoir) but the HUS association anchors to EHEC — and antibiotics are avoided because they increase toxin release.",
      },
      {
        stem: "A 19-year-old with sickle cell disease presents with 4 days of fever and exquisite right tibial tenderness; MRI shows a fluid collection with periosteal reaction.",
        discriminator: "Sickle cell + bone pain + fever",
        concept: "Salmonella osteomyelitis",
        answer:
          "The osteomyelitis risk-factor map: with no other information, assume S aureus (most common overall) — but sickle cell disease swaps in Salmonella (with S aureus). Other swaps: prosthetic joint → S aureus + S epidermidis; vertebral → S aureus + M tuberculosis (Pott disease); cat and dog bites → Pasteurella multocida; injection drug use → S aureus with Pseudomonas and Candida. Biopsy or aspiration with culture identifies the organism; MRI is best for acute infection.",
      },
    ],
    traps: [
      {
        a: "Listeria meningitis only affects neonates",
        b: "Listeria occupies BOTH age extremes — the NEWBORN (0-6 mo) set and the 60+ set (with S pneumoniae, N meningitidis, H influenzae type b, and GBS)",
        whyConfused: "Listeria is taught as a neonatal organism.",
        keyDifference:
          "The meningitis ladder's U-shape: the neonatal organisms (GBS, E coli, Listeria) return at the elderly end of the ladder. That is also why the empiric ampicillin rule (added to ceftriaxone + vancomycin when Listeria is suspected) applies at both extremes of age.",
        clue: "Any meningitis age-extreme question.",
      },
      {
        a: "Both Shiga-toxin organisms should be treated with antibiotics",
        b: "EHEC's Shiga toxin drives HUS, and antibiotics are AVOIDED for suspected EHEC (they increase toxin release); Shigella's low-ID50 bacillary dysentery is a different clinical decision",
        whyConfused: "Bloody diarrhea feels like it needs antibiotics.",
        keyDifference:
          "The Shiga pair splits on treatment: EHEC (O157:H7, animal reservoir, HUS risk) — supportive care, no antibiotics; Shigella (very low ID50, human-only reservoir, bacillary dysentery) — the organism of person-to-person spread and institutional outbreaks. The diarrhea table's anchors name them apart.",
        clue: "Any bloody-diarrhea management question.",
      },
      {
        a: "A single brain abscess means bacteremia seeded the brain",
        b: "MULTIPLE abscesses are usually from bacteremia; SINGLE lesions arise from CONTIGUOUS sites — otitis media and mastoiditis → temporal lobe and cerebellum; sinusitis or dental infection → frontal lobe",
        whyConfused: "Hematogenous spread feels like the default route.",
        keyDifference:
          "The count of lesions is the routing key: one abscess means trace the adjacent source (and the lobe names it — temporal/cerebellar for ear disease, frontal for sinus and dental); multiple abscesses mean find the bloodstream source. Viridans streptococci and S aureus are the most common organisms, with oral anaerobes joining after dental infection or extraction.",
        clue: "Any brain-abscess imaging stem.",
      },
    ],
    pivots: [
      {
        lookAlike: "The CSF rows (bacterial vs fungal/TB vs viral)",
        differentiator: "The cell type and the glucose",
        correctPath:
          "BACTERIAL: ↑ opening pressure, ↑ PMNs, ↑ protein, ↓ glucose. FUNGAL/TB: ↑ opening pressure, ↑ lymphocytes, ↑ protein, ↓ glucose. VIRAL: normal/↑ opening pressure, ↑ lymphocytes, normal/↑ protein, NORMAL glucose. The lymphocyte rows split on glucose — low for fungal/TB, normal for viral.",
      },
      {
        lookAlike: "Salmonella vs Shigella (the lactose-⊝ pair)",
        differentiator: "The ID50, the reservoir, and the motility",
        correctPath:
          "SALMONELLA (nontyphoidal): lactose ⊝, FLAGELLAR motility, animal reservoir (especially poultry and eggs). SHIGELLA: lactose ⊝, very LOW ID50, Shiga toxin, HUMAN reservoir only, bacillary dysentery. Both are bloody-column organisms — the reservoir and the dose name them apart.",
      },
    ],
    miniCase: {
      vignette:
        "A 68-year-old man is brought to the emergency department with 12 hours of fever, confusion, and neck stiffness. He has type 2 diabetes and lives independently. On examination he is somnolent with a temperature of 39.2°C, a stiff neck, and a left sixth-nerve palsy. CSF shows an opening pressure of 30 cm H₂O, 1,200 cells/μL with 88% neutrophils, protein 280 mg/dL, and glucose 22 mg/dL (serum glucose 148 mg/dL). Gram stain shows gram-positive rods.",
      question:
        "Which empiric regimen should be started, and which organism does the Gram stain suggest?",
      options: [
        {
          label: "A",
          text: "Ceftriaxone + vancomycin + ampicillin — Listeria monocytogenes",
          correct: true,
          why: "Correct. The patient is over 60 — the meningitis tier in which Listeria returns alongside S pneumoniae, N meningitidis, H influenzae type b, and group B streptococci. The CSF is bacterial (↑ opening pressure, PMN predominance, ↑ protein, ↓ glucose), and gram-positive rods in this age group are Listeria. The empiric rule: ceftriaxone and vancomycin, with AMPICILLIN added because Listeria is suspected — cephalosporins do not cover Listeria.",
        },
        {
          label: "B",
          text: "Ceftriaxone + vancomycin alone — S pneumoniae",
          why: "The backbone is right, and S pneumoniae is the most common cause at this age — but the regimen omits ampicillin, and gram-positive RODS are not pneumococci (lancet-shaped diplococci). Listeria is intrinsically cephalosporin-resistant; without ampicillin the regimen fails.",
        },
        {
          label: "C",
          text: "Acyclovir alone — HSV-2 meningitis",
          why: "Acyclovir is added when viral encephalitis is suspected — but this CSF is bacterial (PMNs, low glucose). Viral meningitis would show lymphocytes with NORMAL glucose. HSV-2 is the meningitis virus (HSV-1 the encephalitis virus of M23), and neither is a gram-positive rod.",
        },
        {
          label: "D",
          text: "Isoniazid, rifampin, pyrazinamide, ethambutol — TB meningitis",
          why: "TB meningitis shares the low-glucose CSF — but with LYMPHOCYTES, not 88% neutrophils, and without gram-positive rods (TB is acid-fast, not gram-positive). The four-drug regimen answers a different row of the CSF key.",
        },
        {
          label: "E",
          text: "Vancomycin alone — S aureus meningitis",
          why: "S aureus is a brain-abscess organism (with viridans streptococci), not a typical meningitis cause, and monotherapy misses both the empirical standard (ceftriaxone + vancomycin) and the Listeria coverage the age demands.",
        },
      ],
      reasoning:
        "The vignette stacks the bacterial-meningitis identifiers in an elderly host: the acute fever with confusion and meningismus, the CSF with ↑ opening pressure, neutrophil predominance, high protein, and low glucose, and the gram-positive rods. Age 60+ returns Listeria to the differential — and Listeria's intrinsic cephalosporin resistance is why ampicillin joins the empiric backbone. Each distractor misreads either the CSF row (viral, TB), the organism (pneumococcus, staphylococcus), or the regimen's coverage.",
    },
  },
  mnemonics: [
    {
      code: "“Blood means invasion or Shiga; water means toxin or virus.”",
      meaning:
        "KYP's key for the diarrhea split: BLOODY — the invaders (Campylobacter at 42°C, EIEC, E histolytica with its liver abscess, Salmonella from poultry and eggs, Shigella with its low ID50 and human-only reservoir, Y enterocolitica with pseudoappendicitis) and the Shiga-toxin makers (EHEC O157:H7 with HUS). WATERY — the enterotoxins (C difficile on antibiotics and PPIs, C perfringens, ETEC's LT/ST, cholera's rice-water), the protozoa (Giardia, Cryptosporidium), and the viruses (norovirus first in developed countries, rotavirus down with vaccination, enteric adenovirus).",
      memorizes: "The diarrhea columns",
      whenToUse: "Any acute-diarrhea stem.",
      clinical: "Look at the stool, then ask for the exposure and the antibiotic history.",
    },
    {
      code: "“The birth organisms return at the end of life.”",
      meaning:
        "KYP's key for the age ladders: the neonatal pair — GBS and E coli (with LISTERIA joining for meningitis) — owns the newborn tier, and the SAME set returns at 65+ (pneumonia: S pneumoniae, influenza, anaerobes, H flu, GNRs; meningitis: S pneumoniae, N meningitidis, H flu b, GBS, Listeria). Between the extremes: children run RSV and the age-graded atypicals; young adults run Mycoplasma, Chlamydophila, and Legionella.",
      memorizes: "The U-shape of the age ladders",
      whenToUse: "Any pneumonia or meningitis age question.",
      clinical: "Listeria at either age extreme = add ampicillin to ceftriaxone + vancomycin.",
    },
    {
      code: "“PMNs eat glucose; lymphocytes leave it — except when TB takes it too.”",
      meaning:
        "KYP's key for the CSF table: BACTERIAL — ↑PMNs with ↓ glucose and ↑ protein. VIRAL — ↑lymphocytes with NORMAL glucose. FUNGAL/TB — the twist: lymphocytes like viral but glucose LOW like bacterial. The glucose is the tiebreaker between the two lymphocyte rows.",
      memorizes: "The CSF findings key",
      whenToUse: "Any lumbar-puncture interpretation.",
      clinical: "Low glucose in a lymphocytic tap = think fungal or TB, not viral.",
    },
  ],
  rapidReview: {
    s30: [
      "Bloody: Campylobacter (42°C), E histolytica (liver abscess), EHEC O157:H7 (Shiga → HUS), EIEC, Salmonella (poultry/eggs), Shigella (low ID50, human-only), Y enterocolitica (pseudoappendicitis)",
      "Watery: C difficile (antibiotics/PPIs), C perfringens, ETEC (LT/ST travelers'), Giardia + Cryptosporidium, V cholerae (rice-water), norovirus #1 developed, rotavirus ↓ vaccine",
      "Pneumonia: neonate GBS + E coli · child RSV + atypicals + S pneumoniae · 18-40 atypicals · 40-65 + H flu + anaerobes · 65+ + influenza + GNRs",
      "Meningitis: newborn GBS/E coli/Listeria · 6mo-6yr S pneumoniae/N meningitidis/H flu b/GBS/enteroviruses · 6-60 S pneumoniae/N meningitidis/enteroviruses/HSV · 60+ the newborn set returns",
      "Empiric: ceftriaxone + vancomycin; + ampicillin if Listeria; + acyclovir if encephalitis",
    ],
    m3: [
      "CSF bacterial: ↑PMNs, ↑protein, ↓glucose · fungal/TB: ↑lymphocytes, ↑protein, ↓glucose · viral: ↑lymphocytes, normal glucose",
      "Viral meningitis set: coxsackievirus, HSV-2 (HSV-1 = encephalitis), HIV, West Nile, VZV; in HIV — Cryptococcus",
      "GBS meningitis ↓ with maternal screening + prophylaxis; H flu ↓ with conjugate vaccines (cases in the unimmunized)",
      "Brain abscess: viridans + S aureus; multiple = bacteremia; single = contiguous (otitis/mastoid → temporal + cerebellum; sinus/dental → frontal); Toxoplasma in AIDS",
      "Osteomyelitis: S aureus default · sickle cell = Salmonella · prosthetic = S aureus + S epi · vertebral = S aureus + TB (Pott) · bites = Pasteurella · IDU = + Pseudomonas, Candida",
    ],
    m10: [
      "Pneumonia special groups: alcohol = Klebsiella + aspiration anaerobes (Peptostreptococcus, Fusobacterium, Prevotella, Bacteroides); CF = Pseudomonas + Burkholderia; immunocompromised = P jirovecii with HIV; COPD = M catarrhalis",
      "FA's printed glosses (Runts May Cough; Chunky Sputum) stay in the table block — verification-only",
      "ESR/CRP sensitive not specific; radiographs insensitive early; MRI best for acute; biopsy identifies",
      "The SYSTEMS banner typo 'MICROCIOLOGY—SYSTEMS' prints on books 175-176",
      "The osteomyelitis imaging A (radiograph + MRI pair) is the page's single raster — described-in-text only",
    ],
  },
  recall: [
    {
      q: "Walk both diarrhea columns with each organism's anchor.",
      a: "BLOODY: Campylobacter — comma/S-shaped, 42°C. E histolytica — amebic dysentery, liver abscess. EHEC — O157:H7, Shiga toxin, HUS. EIEC — invades colonic mucosa. Salmonella (nontyphoidal) — lactose ⊝, flagellar, poultry/eggs reservoir. Shigella — lactose ⊝, very low ID50, Shiga toxin, human-only, bacillary dysentery. Y enterocolitica — day care, pseudoappendicitis. WATERY: C difficile — pseudomembranous colitis, antibiotics/PPIs, occasionally bloody. C perfringens — also gas gangrene. ETEC — travelers' diarrhea, LT/ST. Protozoa — Giardia, Cryptosporidium. V cholerae — comma-shaped, rice-water, infected seafood. Viruses — norovirus (most common, developed), rotavirus (vaccine-reduced), enteric adenovirus.",
    },
    {
      q: "Give the pneumonia ladder by age with two special groups.",
      a: "NEONATES <4wk: GBS, E coli. CHILDREN: viruses (RSV), Mycoplasma, C trachomatis (infants-3yr), C pneumoniae (school-aged), S pneumoniae. 18-40: Mycoplasma, C pneumoniae, S pneumoniae, viruses. 40-65: S pneumoniae, H influenzae, anaerobes, viruses, Mycoplasma. 65+: S pneumoniae, influenza, anaerobes, H influenzae, gram ⊝ rods. SPECIAL: alcohol overuse — Klebsiella + aspiration anaerobes (Peptostreptococcus, Fusobacterium, Prevotella, Bacteroides); cystic fibrosis — Pseudomonas, S aureus, S pneumoniae, Burkholderia cepacia; immunocompromised — S aureus, enteric GNRs, fungi, viruses, P jirovecii (HIV); healthcare-associated — S aureus, Pseudomonas, enteric GNRs; COPD — S pneumoniae, H influenzae, M catarrhalis, Pseudomonas.",
    },
    {
      q: "Give the meningitis ladder, the empiric rule, and the CSF key.",
      a: "NEWBORN 0-6mo: GBS, E coli, Listeria. CHILDREN 6mo-6yr: S pneumoniae, N meningitidis, H influenzae type b, GBS, enteroviruses. 6-60: S pneumoniae, N meningitidis, enteroviruses, HSV. 60+: S pneumoniae, N meningitidis, H influenzae type b, GBS, Listeria. EMPIRIC: ceftriaxone + vancomycin (add ampicillin if Listeria suspected; add acyclovir if viral encephalitis suspected). CSF: bacterial — ↑OP, ↑PMNs, ↑protein, ↓glucose; fungal/TB — ↑OP, ↑lymphocytes, ↑protein, ↓glucose; viral — normal/↑OP, ↑lymphocytes, normal/↑protein, normal glucose.",
    },
    {
      q: "Walk the brain-abscess routing rules.",
      a: "Most common: viridans streptococci and S aureus; dental infection or extraction adds oral anaerobes. MULTIPLE abscesses = bacteremia. SINGLE lesions = contiguous spread: otitis media and mastoiditis → temporal lobe and cerebellum; sinusitis or dental infection → frontal lobe. Toxoplasma reactivation in AIDS (the multiple ring-enhancing lesions of M27).",
    },
    {
      q: "Give the osteomyelitis risk-factor map and the workup principles.",
      a: "Default: S aureus (most common overall). Sexually active: N gonorrhoeae (rare — septic arthritis more common). Sickle cell: Salmonella, S aureus. Prosthetic joint: S aureus, S epidermidis. Vertebral: S aureus, M tuberculosis (Pott disease). Cat/dog bites: Pasteurella multocida. Injection drug use: S aureus, Pseudomonas, Candida. WORKUP: ESR and CRP sensitive but not specific; radiographs insensitive early (useful chronic); MRI best for acute infection and anatomy; biopsy or aspiration with culture identifies the organism.",
    },
  ],
  related: [
    {
      title: "Enteric Pathogens: Salmonella, Shigella, E. coli Strains & Campylobacter",
      topicId: "enteric-pathogens",
      note: "M13's eleven-axis enteric comparison is the pathogen-deep version of this note's diarrhea split — the E coli strain set (EHEC/EIEC/ETEC), the Salmonella-Shigella axis, and the HUS cascade all live there in full mechanism form.",
    },
    {
      title: "Gram-Negative Bacilli: Enterics & Zoonotics",
      topicId: "gram-negative-bacilli",
      note: "M12's lab-algorithm tree (the lactose, TSI, and oxidase gates) is the identification machinery behind this note's lactose-⊝ pair and its Vibrio and Campylobacter rows.",
    },
    {
      title: "HIV & AIDS: Virology Through Opportunists",
      topicId: "hiv-aids",
      note: "M27's CD4 ladder names P jirovecii (below 200) and Cryptococcus meningitis (below 100) — this note's immunocompromised and HIV rows point back at those tiers; Toxoplasma's brain abscesses bridge both maps.",
    },
  ],
  crossLinks: [
    {
      subject: "Neurology (CNS Infection)",
      connection:
        "The meningitis ladder and CSF key are the neurology chapter's infection core — the empiric-therapy timing (before imaging in the classic presentation), the HSV-2-meningitis versus HSV-1-encephalitis split, and the abscess routing rules with their lobe map.",
    },
    {
      subject: "Pulmonology (Pneumonia Classification)",
      connection:
        "The age ladder and special groups are the pneumonia chapter's empiric-therapy backbone — community versus healthcare-associated, the atypical coverage question, and the CF and immunocompromised sets.",
    },
    {
      subject: "Nephrology (HUS)",
      connection:
        "EHEC's Shiga toxin is the diarrhea-triggered HUS anchor — bloody diarrhea followed by the anemia-thrombocytopenia-acute-kidney-injury triad, with antibiotics avoided.",
    },
    {
      subject: "Orthopedics (Bone and Joint Infection)",
      connection:
        "The osteomyelitis map is the orthopedic infection core — the sickle-cell Salmonella swap, the prosthetic-joint pair, Pott disease in the vertebra, and the MRI-first imaging algorithm with biopsy for the organism.",
    },
  ],
};
