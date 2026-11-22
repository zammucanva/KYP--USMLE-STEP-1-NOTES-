import type { KypUsMLENote } from "../types";

// Microbiology — ANTIMICROBIALS banner (M-batch 35). Source: pdf 214-215 /
// book 192-193 (Antituberculous drugs — the 4-column table DRUG/MECHANISM/
// ADVERSE EFFECTS/NOTES with the Rifamycins, Isoniazid, Pyrazinamide, and
// Ethambutol rows; the MYCOBACTERIAL CELL schematic; the antimycobacterial
// therapy table; and the antimicrobial prophylaxis table). Census: p214
// carries exactly ONE image pair — a 1x1-pixel cmyk solid stretched behind
// the cell schematic through a 1621x1323 smooth mask (729B, 150ppi — a light
// color wash/vignette, DECORATIVE: the schematic itself is line art whose
// labels print in the text layer; VLM census confirms: line-art vector
// diagram, no photographs); p215 is pure text (0 rasters). Text quirks
// documented: the banner typo MICROCIOLOGY—ANTIMICROCIALS on both pages;
// the therapy table's first header word emits as 'CACTERIUM' in the raw and
// layout layers (the MYCOB prefix lost in extraction — the printed page
// reads MYCOBACTERIUM); the schematic's rotated rim labels emit split
// mid-word ('Arab inog ala c' = Arabinogalactan; 'Pep tido tan gly can' =
// Peptidoglycan; 'A comp lex f cyl lipid ree lipi s, ds' = a complex of
// free lipids; 'Myc olic acid' = Mycolic acid) — redrawn clean; the
// source's own NOTES-column mnemonics ('INH Injures Neurons and
// Hepatocytes', 'Pronounce eyethambutol') are carried ONLY inside the
// verbatim tables per the E38 precedent — omitted from the visual and the
// KYP memory layer.

export const antimycobacterials: KypUsMLENote = {
  id: "antimycobacterials",
  title: "Antimycobacterial Therapy",
  subtitle:
    "The mycobacterial directory (books 192-193). THE FOUR DOORS OF THE MYCOBACTERIAL CELL: ④-adjacent mRNA synthesis — the rifamycins (rifampin, rifabutin, rifapentine) inhibit DNA-dependent RNA polymerase → ↓mRNA synthesis (resistance by RNA-polymerase mutations; monotherapy rapidly leads to resistance; red-orange discoloration of body fluids is nonhazardous; CYP450 induction — rifabutin favored in HIV for less induction); the mycolic-acid door — isoniazid inhibits mycolic acid synthesis → ↓cell wall synthesis (bacterial catalase-peroxidase, katG, converts INH to its active form; resistance via katG mutations; vitamin B6 deficiency — peripheral neuropathy, sideroblastic anemia — plus hepatotoxicity (↑ with age and alcohol), CYP450 inhibition, drug-induced lupus; overdose → seizures refractory to benzodiazepines; administer with pyridoxine); the arabinogalactan door — ethambutol inhibits arabinosyltransferase → ↓arabinogalactan synthesis → ↓cell wall synthesis (optic neuropathy: red-green color blindness or ↓visual acuity, typically reversible); and the intracellular door — pyrazinamide (mechanism uncertain; works best at acidic pH, e.g. in host phagolysosomes; hepatotoxicity, hyperuricemia). THE THERAPY MAP: M tuberculosis — prophylaxis a rifamycin-based regimen for 3-4 months, treatment RIPE (Rifampin, Isoniazid, Pyrazinamide, Ethambutol); M avium–intracellulare — prophylaxis azithromycin ± rifabutin, treatment azithromycin or clarithromycin + ethambutol (can add rifabutin or ciprofloxacin); M leprae — N/A prophylaxis, long-term dapsone and rifampin for the tuberculoid form, add clofazimine for the lepromatous form. Plus the printed antimicrobial prophylaxis table (meningococcal exposure; IE procedures; recurrent UTIs; malaria; group B strep in pregnancy; gonococcal conjunctivitis in the newborn; postsurgical S aureus; rheumatic-fever prophylaxis).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Antimicrobials",
  pilotCategory:
    "The mycobacterial cell's four doors with the katG activation story and the pyridoxine partnership; the RIPE regimen as the four doors prescribed together; the three-species therapy map (M tuberculosis, M avium–intracellulare, M leprae); and the general prophylaxis table the same page carries.",
  difficulty: 2,
  readTime: 12,
  sourceRef:
    "First Aid 2026, Part 1 pp. 192–193 (Antituberculous drugs — the four-drug table, the mycobacterial cell schematic, the therapy and prophylaxis tables)",
  tags: [
    "antituberculous drugs",
    "mycobacteria",
    "M tuberculosis",
    "M avium-intracellulare",
    "M leprae",
    "RIPE",
    "rifamycins",
    "rifampin",
    "rifabutin",
    "rifapentine",
    "DNA-dependent RNA polymerase",
    "CYP450 induction",
    "red-orange discoloration",
    "isoniazid",
    "INH",
    "mycolic acid",
    "katG",
    "catalase-peroxidase",
    "pyridoxine",
    "vitamin B6",
    "peripheral neuropathy",
    "sideroblastic anemia",
    "drug-induced lupus",
    "fast vs slow acetylators",
    "pyrazinamide",
    "hyperuricemia",
    "acidic pH",
    "phagolysosomes",
    "ethambutol",
    "arabinosyltransferase",
    "arabinogalactan",
    "optic neuropathy",
    "red-green color blindness",
    "clofazimine",
    "dapsone",
    "prophylaxis",
    "meningococcal exposure",
    "group B strep",
  ],
  core: {
    what: "THE FOUR-DOOR TABLE (book 192, printed as DRUG | MECHANISM | ADVERSE EFFECTS | NOTES). RIFAMYCINS (rifampin, rifabutin, rifapentine): inhibit DNA-dependent RNA polymerase → ↓mRNA synthesis; resistance arises by mutations in the gene encoding RNA polymerase; adverse — minor hepatotoxicity, drug interactions via CYP450 INDUCTION, red-orange discoloration of body fluids (nonhazardous); notes — rifabutin is favored over rifampin in HIV patients (less CYP450 induction) and monotherapy rapidly leads to resistance. ISONIAZID: inhibits mycolic acid synthesis → ↓cell wall synthesis; bacterial catalase-peroxidase (katG) is needed to convert INH to the active form — resistance arises via katG mutations; adverse — vitamin B6 deficiency (peripheral neuropathy, sideroblastic anemia), hepatotoxicity (↑ risk with ↑ age and alcohol overuse), CYP450 INHIBITION, drug-induced lupus; INH overdose → seizures often refractory to benzodiazepines; notes — administer with pyridoxine (vitamin B6); different INH half-lives in fast vs slow acetylators. PYRAZINAMIDE: mechanism uncertain; adverse — hepatotoxicity, hyperuricemia; notes — works best at acidic pH (e.g., in host phagolysosomes). ETHAMBUTOL: inhibits arabinosyltransferase → ↓arabinogalactan synthesis → ↓cell wall synthesis; adverse — optic neuropathy (red-green color blindness or ↓visual acuity, typically reversible). THE MYCOBACTERIAL CELL (same page, line-art schematic): the cell with its plasma membrane and cell wall (the complex of free lipids, mycolic acid, arabinogalactan, peptidoglycan) and its interior doors — DNA → mRNA SYNTHESIS (DNA-dependent RNA polymerase, the rifamycin door) with the RNA polymerase label; ARABINOGALCTAN SYNTHESIS (arabinosyltransferase, the ethambutol door); MYCOLIC ACID SYNTHESIS (the INH door); and the INTRACELLULAR label (Pyrazinamide). THE THERAPY MAP (book 193): M tuberculosis — prophylaxis: rifamycin-based regimen for 3-4 months; treatment: Rifampin, Isoniazid, Pyrazinamide, Ethambutol (RIPE for treatment). M avium–intracellulare — prophylaxis: azithromycin, rifabutin; treatment: azithromycin or clarithromycin + ethambutol, can add rifabutin or ciprofloxacin. M leprae — prophylaxis: N/A; treatment: long-term dapsone and rifampin for the tuberculoid form; add clofazimine for the lepromatous form. THE PROPHYLAXIS TABLE (same page): meningococcal exposure → ceftriaxone, ciprofloxacin, or rifampin; high IE risk undergoing surgical/dental procedures → amoxicillin; recurrent UTIs → TMP-SMX; malaria prophylaxis for travelers → atovaquone-proguanil, mefloquine, doxycycline, primaquine, or chloroquine (sensitive areas); pregnant group B strep carriers → intrapartum penicillin G or ampicillin; gonococcal conjunctivitis prevention in newborns → erythromycin ointment on eyes; postsurgical S aureus prevention → cefazolin, vancomycin if ⊕ for MRSA; rheumatic-fever prophylaxis in a child with prior rheumatic fever → benzathine penicillin G or oral penicillin V.",
    why: "This page-set is where the mycobacterial wall gets its own door map, and the schematic is what makes it stick: the cell is drawn with its four labeled synthesis doors, so the four RIPE drugs read as the four locks. The two deepest stories on the page are enzymatic. FIRST, the katG story: isoniazid is a prodrug — bacterial catalase-peroxidase (the gene katG) must convert it to the active form, which is why katG mutations are INH's resistance route; and the same drug's signature toxicity (B6 deficiency → peripheral neuropathy, sideroblastic anemia) is why pyridoxine is the standing partner — the partnership is printed twice (the ADVERSE column and the NOTES column). SECOND, the induction-inhibition pair: rifampin INDUCES CYP450 (breaking oral contraceptives, warfarin, and transplant immunosuppressants) while isoniazid INHIBITS it — the two are co-prescribed in RIPE, which is exactly why the combination's interaction profile is exam-famous. Pyrazinamide adds the pH story: it works best at acidic pH (the phagolysosome — the macrophage's acidic interior), which links drug action to the cell biology of granulomas; and ethambutol adds the reversible-optic story (red-green color blindness — ask about it at every visit). The therapy map then routes by species: the tuberculoid vs lepromatous split for M leprae (clofazimine added for the lepromatous form), the macrolide-based pair for M avium–intracellulare, and RIPE for M tuberculosis — with the prophylaxis table extending the page into general prevention.",
    keyIdea:
      "Read the set by DOOR, ACTIVATION, and SPECIES. DOOR (the mycobacterial cell): RNA polymerase → the rifamycins (mRNA synthesis; CYP450 INDUCTION; red-orange fluids — nonhazardous); mycolic acid → INH (needs katG activation; CYP450 INHIBITION; B6 partnership); arabinogalactan → ethambutol (arabinosyltransferase; reversible optic neuropathy — red-green); the acidic intracellular door → PZA (mechanism uncertain; phagolysosome pH; hyperuricemia). ACTIVATION: INH is a prodrug (katG converts it — katG mutations are the resistance); acetylator status sets INH half-life (fast vs slow). SPECIES: M tuberculosis — latent/prophylaxis a 3-4-month rifamycin regimen, active RIPE; M avium–intracellulare — azithromycin ± rifabutin prophylaxis, azithromycin/clarithromycin + ethambutol treatment (± rifabutin/ciprofloxacin); M leprae — dapsone + rifampin (tuberculoid), add clofazimine (lepromatous). PROPHYLAXIS TABLE: meningococcus → ceftriaxone/cipro/rifampin; IE procedures → amoxicillin; recurrent UTI → TMP-SMX; malaria → atovaquone-proguanil, mefloquine, doxycycline, primaquine, or chloroquine; GBS pregnancy → intrapartum penicillin G/ampicillin; newborn conjunctivitis → erythromycin ointment; postsurgical S aureus → cefazolin (vancomycin if MRSA); rheumatic fever → benzathine penicillin G/penicillin V.",
  },
  mechanisms: [
    {
      id: "ripe-four-doors",
      title: "The mycobacterial cell's four doors — and why two of them are enzymatic stories",
      context: "Reading any antituberculous drug question off the cell schematic (book 192)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An antituberculous drug or a TB/leprosis stem appears",
            sublabel: "Input — any RIPE member, rifabutin, clofazimine, or dapsone.",
            variant: "input",
          },
          {
            id: "door",
            label: "Which door on the mycobacterial cell?",
            sublabel: "RNA polymerase (rifamycins) · mycolic acid (INH) · arabinogalactan (ethambutol) · acidic intracellular (PZA).",
            variant: "process",
          },
          {
            id: "activation",
            label: "Does the drug need activation, and what is its interaction polarity?",
            sublabel: "INH: katG converts the prodrug (katG mutations = resistance); INH INHIBITS CYP450 while rifampin INDUCES it — co-prescribed in RIPE.",
            variant: "process",
          },
          {
            id: "toxicity",
            label: "The signature toxicity per door",
            sublabel: "Rifamycins: red-orange fluids (nonhazardous), minor hepatotoxicity · INH: B6 deficiency (neuropathy, sideroblastic anemia), hepatotoxicity (↑age/alcohol), lupus, refractory seizures in overdose · PZA: hepatotoxicity, hyperuricemia · Ethambutol: reversible optic neuropathy.",
            variant: "output",
          },
          {
            id: "partner",
            label: "The standing partner and the monitoring",
            sublabel: "Pyridoxine with INH (peripheral neuropathy, sideroblastic anemia); visual acuity/red-green testing on ethambutol; LFTs on the hepatotoxic trio; uric acid on PZA.",
            variant: "output",
          },
          {
            id: "resistance",
            label: "The escapes — RNA-polymerase mutations (rifamycins), katG mutations (INH)",
            sublabel: "Monotherapy rapidly leads to resistance — the reason RIPE is always a four-drug start.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "door", label: "pick the door" },
          { from: "door", to: "activation", label: "activation + polarity" },
          { from: "activation", to: "toxicity", label: "the signature set" },
          { from: "toxicity", to: "partner", label: "partner + monitor" },
          { from: "partner", to: "resistance", label: "why four drugs" },
        ],
      },
    },
    {
      id: "mycobacteria-therapy-map",
      title: "The three-species map: tuberculosis, avium, leprae",
      context: "The antimycobacterial therapy table (book 193)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A mycobacterial species with a prophylaxis-or-treatment question",
            sublabel: "Input — M tuberculosis, M avium–intracellulare, or M leprae.",
            variant: "input",
          },
          {
            id: "tb",
            label: "M tuberculosis — latent: a rifamycin-based regimen for 3-4 months; active: RIPE",
            sublabel: "Rifampin, Isoniazid, Pyrazinamide, Ethambutol — the four doors prescribed together.",
            variant: "process",
          },
          {
            id: "avium",
            label: "M avium–intracellulare — azithromycin, rifabutin (prophylaxis); azithromycin or clarithromycin + ethambutol (treatment)",
            sublabel: "Can add rifabutin or ciprofloxacin — the macrolide-anchored regimen.",
            variant: "process",
          },
          {
            id: "leprae",
            label: "M leprae — N/A prophylaxis; dapsone + rifampin (tuberculoid), add clofazimine (lepromatous)",
            sublabel: "The dapsone bridge from M34's folate pages (the G6PD/methemoglobinemia warnings apply).",
            variant: "process",
          },
          {
            id: "prophylaxis",
            label: "The general prophylaxis table rides the same page",
            sublabel: "Meningococcus → ceftriaxone/cipro/rifampin · IE procedures → amoxicillin · recurrent UTI → TMP-SMX · malaria → the travel set · GBS pregnancy → intrapartum penicillin · newborn eyes → erythromycin ointment · postsurgical S aureus → cefazolin (vancomycin if MRSA) · rheumatic fever → benzathine penicillin G.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "tb", label: "M tuberculosis" },
          { from: "trigger", to: "avium", label: "M avium" },
          { from: "trigger", to: "leprae", label: "M leprae" },
          { from: "tb", to: "prophylaxis", label: "the same page's table" },
          { from: "avium", to: "prophylaxis", label: "macrolide anchor" },
          { from: "leprae", to: "prophylaxis", label: "dapsone bridge" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "tb-drug-regimen-map",
      title: "The TB drug regimen map — the mycobacterial cell's four doors, redrawn",
      caption:
        "An original KYP redraw of the source's MYCOBACTERIAL CELL schematic (book 192, line art whose labels print in the text layer): the cell with its plasma membrane and layered wall (a complex of free lipids, mycolic acid, arabinogalactan, peptidoglycan — the source's rotated rim labels print split mid-word and are redrawn clean) and its four labeled doors — mRNA SYNTHESIS (DNA-dependent RNA polymerase — the rifamycin door), MYCOLIC ACID SYNTHESIS (the INH door), ARABINOGALACTAN SYNTHESIS (arabinosyltransferase — the ethambutol door), and the INTRACELLULAR acidic door (Pyrazinamide); beside it the RIPE regimen panel with each drug's one-line mechanism and signature toxicity, and the three-species therapy map (M tuberculosis, M avium–intracellulare, M leprae).",
      notice:
        "The schematic's background is the page's only image — a 1×1-pixel solid stretched behind the figure through a 1621×1323 smooth mask (a light color wash, DECORATIVE — VLM census confirms line art, no photographs). The source's own NOTES-column mnemonics ('INH Injures Neurons and Hepatocytes', 'Pronounce eyethambutol') are omitted from this visual per the copyright boundary — carried only inside the note's verbatim tables.",
    },
    {
      kind: "table",
      title: "Book 192 — the antituberculous drugs table (carried verbatim, all four columns)",
      intro:
        "The page's 4-column table (DRUG | MECHANISM | ADVERSE EFFECTS | NOTES) with all four drug rows — including the source's own NOTES-column mnemonics, preserved as printed.",
      columns: ["DRUG · FIELD", "PRINTED CONTENT — verbatim (book 192)"],
      rows: [
        ["Rifamycins — Drugs", "Rifampin, rifabutin, rifapentine."],
        ["— MECHANISM", "Inhibit DNA-dependent RNA polymerase → ↓mRNA synthesis. Rifamycin resistance arises due to mutations in gene encoding RNA polymerase."],
        ["— ADVERSE EFFECTS", "Minor hepatotoxicity, drug interactions (CYP450 induction), red-orange discoloration of body fluids (nonhazardous adverse effect)."],
        ["— NOTES", "Rifabutin favored over rifampin in patients with HIV infection due to less CYP450 induction. Monotherapy rapidly leads to resistance."],
        ["Isoniazid — MECHANISM", "Inhibits mycolic acid synthesis → ↓cell wall synthesis. Bacterial catalase-peroxidase (encoded by katG) is needed to convert INH to active form. INH resistance arises due to mutations in katG."],
        ["— ADVERSE EFFECTS", "Vitamin B6 deficiency (peripheral neuropathy, sideroblastic anemia), hepatotoxicity, drug interactions (CYP450 inhibition), drug-induced lupus. INH overdose can lead to seizures (often refractory to benzodiazepines)."],
        ["— NOTES", "Administer with pyridoxine (vitamin B6). [The source's own mnemonic: INH Injures Neurons and Hepatocytes (↑ risk of hepatotoxicity with ↑ age and alcohol overuse).] Different INH half-lives in fast vs slow acetylators."],
        ["Pyrazinamide — MECHANISM", "Mechanism uncertain."],
        ["— ADVERSE EFFECTS", "Hepatotoxicity, hyperuricemia."],
        ["— NOTES", "Works best at acidic pH (eg, in host phagolysosomes)."],
        ["Ethambutol — MECHANISM", "Inhibits arabinosyltransferase → ↓arabinogalactan synthesis → ↓cell wall synthesis."],
        ["— ADVERSE EFFECTS", "Optic neuropathy (red-green color blindness or ↓visual acuity, typically reversible)."],
        ["— NOTES", "Pronounce “eyethambutol.” [the source's own pronunciation gloss, preserved as printed]"],
      ],
      caption:
        "The four doors as a table: the RNA-polymerase lock with its induction polarity and the nonhazardous red-orange fluids; the katG-activated prodrug with its B6 partnership (and the refractory-seizure overdose note); the pH-gated PZA; and the reversible-optic ethambutol.",
    },
    {
      kind: "table",
      title: "Book 193 — the antimycobacterial therapy table (carried verbatim)",
      intro:
        "The three-species prophylaxis/treatment map, as printed. The first header word emits as 'CACTERIUM' in the raw and layout layers (the MYCOB prefix lost in extraction — the printed page reads MYCOBACTERIUM); the quirk is documented in the manifest.",
      columns: ["SPECIES · FIELD", "PRINTED CONTENT — verbatim (book 193)"],
      rows: [
        ["M tuberculosis — PROPHYLAXIS", "Rifamycin-based regimen for 3-4 months."],
        ["— TREATMENT", "Rifampin, Isoniazid, Pyrazinamide, Ethambutol (RIPE for treatment)."],
        ["M avium–intracellulare — PROPHYLAXIS", "Azithromycin, rifabutin."],
        ["— TREATMENT", "Azithromycin or clarithromycin + ethambutol. Can add rifabutin or ciprofloxacin."],
        ["M leprae — PROPHYLAXIS", "N/A."],
        ["— TREATMENT", "Long-term treatment with dapsone and rifampin for tuberculoid form. Add clofazimine for lepromatous form."],
      ],
      caption:
        "Route by species: RIPE for M tuberculosis (a 3-4-month rifamycin regimen for prophylaxis), the macrolide-anchored pair for M avium–intracellulare, and the dapsone-rifampin base for M leprae with clofazimine added for the lepromatous form.",
    },
    {
      kind: "table",
      title: "Book 193 — the antimicrobial prophylaxis table (carried verbatim)",
      intro:
        "The general prophylaxis table printed on the same page, as printed (CLINICAL SCENARIO | MEDICATION).",
      columns: ["CLINICAL SCENARIO", "MEDICATION — verbatim (book 193)"],
      rows: [
        ["Exposure to meningococcal infection", "Ceftriaxone, ciprofloxacin, or rifampin."],
        ["High risk for infective endocarditis and undergoing surgical or dental procedures", "Amoxicillin."],
        ["History of recurrent UTIs", "TMP-SMX."],
        ["Malaria prophylaxis for travelers", "Atovaquone-proguanil, mefloquine, doxycycline, primaquine, or chloroquine (for areas with sensitive species)."],
        ["Pregnant patients carrying group B strep", "Intrapartum penicillin G or ampicillin."],
        ["Prevention of gonococcal conjunctivitis in newborn", "Erythromycin ointment on eyes."],
        ["Prevention of postsurgical infection due to S aureus", "Cefazolin; vancomycin if ⊕ for MRSA."],
        ["Prophylaxis of strep pharyngitis in child with prior rheumatic fever", "Benzathine penicillin G or oral penicillin V."],
      ],
      caption:
        "The prophylaxis directory: the meningococcus trio, the IE-procedure amoxicillin, the travel-malaria set, the intrapartum GBS penicillins, the newborn's erythromycin eyes, the cefazolin/vancomycin surgical split, and the rheumatic-fever penicillins.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three routing rules these tables teach",
      body:
        "Rule 1 — THE INDUCTION-INHIBITION PAIR: rifampin INDUCES CYP450 while isoniazid INHIBITS it — co-prescribed in RIPE, the pair is the classic interaction stem (oral contraceptives, warfarin, transplant drugs fail under rifampin; levels of CYP450 substrates climb under INH). Rule 2 — THE PARTNERSHIPS: pyridoxine stands with INH (the B6-deficiency neuropathy and sideroblastic anemia), visual monitoring stands with ethambutol (the reversible red-green optic neuropathy), and uric acid stands with PZA (hyperuricemia). Rule 3 — MONOTHERAPY IS THE ENEMY: every door escapes by a single mutation (RNA polymerase; katG) — which is why TB therapy always starts as the four-door RIPE combination and why the M leprae and M avium regimens anchor on multi-drug bases (dapsone + rifampin ± clofazimine; macrolide + ethambutol ± rifabutin/ciprofloxacin).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 62-year-old man starting RIPE therapy for active TB returns in two weeks reporting painless orange discoloration of his urine and tears; he is otherwise well.",
        discriminator: "Red-orange discoloration of body fluids — the nonhazardous signature of rifampin",
        concept: "Rifampin body-fluid discoloration",
        answer:
          "The table's own adverse-effect line: red-orange discoloration of body fluids (nonhazardous adverse effect) under the rifamycins, whose other printed effects are minor hepatotoxicity and CYP450 INDUCTION (drug interactions — the reason to review every co-prescription, and why rifabutin is favored in HIV for less induction).",
      },
      {
        stem: "A 28-year-old woman on RIPE for pulmonary TB develops numbness in a stocking distribution and a CBC shows hypochromic anemia with ringed sideroblasts.",
        discriminator: "Vitamin B6 deficiency — peripheral neuropathy with sideroblastic anemia under isoniazid",
        concept: "INH's pyridoxine partnership",
        answer:
          "The table's own pair of lines: adverse effects — vitamin B6 deficiency (peripheral neuropathy, sideroblastic anemia)…; notes — administer with pyridoxine (vitamin B6). INH's other printed set: hepatotoxicity (↑ with age and alcohol), CYP450 inhibition, drug-induced lupus, and the refractory-seizure overdose note; half-lives differ between fast and slow acetylators.",
      },
      {
        stem: "A 45-year-old on four-drug TB therapy reports trouble distinguishing red from green traffic signals; fundoscopy is normal and acuity is 20/30.",
        discriminator: "Optic neuropathy — red-green color blindness or ↓visual acuity, typically reversible",
        concept: "Ethambutol's optic door",
        answer:
          "The table's own adverse-effect line for ethambutol (the arabinosyltransferase door): optic neuropathy (red-green color blindness or ↓visual acuity, typically reversible) — ask about color discrimination and acuity at every visit while on ethambutol; the printed NOTES gloss 'Pronounce eyethambutol' is the source's own memory hook, carried in the verbatim table only.",
      },
    ],
    traps: [
      {
        a: "Rifampin (CYP450)",
        b: "Isoniazid (CYP450)",
        whyConfused: "Both are RIPE drugs with 'CYP450' printed on their rows",
        keyDifference: "Rifampin INDUCES CYP450 (substrate levels fall — OCPs, warfarin, tacrolimus); INH INHIBITS it (substrate levels rise) — opposite polarities co-prescribed in one regimen",
        clue: "A failing oral contraceptive or dropping INR on rifampin; rising phenytoin/warfarin levels on INH — and rifabutin swaps in for less induction (HIV)",
      },
      {
        a: "Isoniazid neuropathy",
        b: "Ethambutol neuropathy",
        whyConfused: "Both are 'neuro-toxicity' lines in the regimen",
        keyDifference: "INH causes a PERIPHERAL neuropathy from B6 deficiency (plus sideroblastic anemia — partner pyridoxine); ethambutol causes an OPTIC neuropathy (red-green color blindness, reversible)",
        clue: "Stocking-distribution numbness + ringed sideroblasts → INH (give B6); red-green confusion + ↓acuity → ethambutol (visual monitoring)",
      },
      {
        a: "Pyrazinamide",
        b: "The hepatotoxic trio",
        whyConfused: "All of RIPE carries hepatotoxicity somewhere",
        keyDifference: "PZA's printed extras are hyperuricemia and the acidic-pH preference (phagolysosomes — mechanism uncertain); the age/alcohol hepatotoxicity amplifier is printed on INH's row",
        clue: "Gout flare during TB therapy → PZA (hyperuricemia); LFTs rise with age/alcohol → INH first",
      },
    ],
    pivots: [
      {
        lookAlike: "Tuberculoid vs lepromatous leprosy (the M leprae rows)",
        differentiator: "Clofazimine is ADDED for the lepromatous form; the tuberculoid base is dapsone + rifampin",
        correctPath: "Tuberculoid → long-term dapsone and rifampin; lepromatous → add clofazimine (and remember dapsone's G6PD hemolysis/methemoglobinemia from M34's folate pages)",
      },
      {
        lookAlike: "Latent TB prophylaxis vs active TB treatment (the M tuberculosis rows)",
        differentiator: "Prophylaxis is a rifamycin-based regimen for 3-4 months; treatment is the four-drug RIPE start",
        correctPath: "Latent/infection prophylaxis → 3-4 months of the rifamycin regimen; active disease → RIPE (Rifampin, Isoniazid, Pyrazinamide, Ethambutol) — monotherapy rapidly leads to resistance, so active TB never starts as one drug",
      },
    ],
    miniCase: {
      vignette:
        "A 31-year-old woman with culture-positive pulmonary TB is started on RIPE. She also takes an oral contraceptive and, after a dental extraction two weeks into therapy, begins warfarin for a suspected transient thrombophlebitis. At the one-month visit she reports a tender swollen calf, and a urine pregnancy test is positive despite daily OCP use. INR measured the same day is 1.2 (target 2.5).",
      question: "Which mechanism best explains both treatment failures, and what is the appropriate response?",
      options: [
        {
          label: "Rifampin's CYP450 induction",
          text: "Rifampin induces hepatic CYP450, accelerating the metabolism of both the contraceptive steroids and warfarin — subtherapeutic levels of both.",
          correct: true,
          why: "Correct. The table's own line: drug interactions (CYP450 induction) under the rifamycins — enzyme induction builds over days-to-weeks, dropping substrate levels exactly when steady prophylaxis was assumed. OCPs and warfarin are the classic victims (plus transplant immunosuppressants). Management: barrier contraception for the pregnancy now, switch warfarin dosing to frequent INR-guided titration (or bridge), counsel on the interaction, and note that the red-orange fluids question may come up next visit — it is the harmless member of the same row.",
        },
        {
          label: "Isoniazid's CYP450 inhibition",
          text: "INH inhibits hepatic CYP450, raising substrate levels — the pregnancy and thrombosis would then be from toxicity, not failure.",
          why: "Wrong polarity — and tempting because INH's row does print CYP450 (inhibition). INH inhibition would RAISE OCP/warfarin levels (toward toxicity), not cause the observed subtherapeutic failures; the induction side of the pair is rifampin's, and both were co-prescribed.",
        },
        {
          label: "Pyrazinamide-induced hyperuricemia causing thrombophlebitis",
          text: "Uric acid crystallization producing venous inflammation.",
          why: "Wrong. PZA's printed extras are hepatotoxicity and hyperuricemia — gout, not thrombosis; and hyperuricemia explains nothing about the failed contraception. A true-but-irrelevant distractor from the same table.",
        },
        {
          label: "Ethambutol optic neuropathy misreading the pregnancy test",
          text: "Color-vision impairment preventing accurate test interpretation.",
          why: "Wrong and faintly absurd — ethambutol's printed toxicity is optic neuropathy (red-green color blindness, reversible), which affects color discrimination, not the chemistry of a urine test; the line exists on the page, which is exactly why it distracts.",
        },
        {
          label: "Fast-acetylator status shortening INH half-life",
          text: "Rapid INH metabolism reducing regimen efficacy overall.",
          why: "Partly-real-but-wrong: acetylator status changes INH half-life (the printed fast-vs-slow note) and dose-related toxicity — but it does not induce enzymes against OTHER drugs. The OCP/warfarin failures are rifampin's induction; INH's own levels are the only thing acetylator status moves.",
        },
      ],
      reasoning:
        "Two subtherapeutic failures locked to the same weeks of therapy = enzyme induction: rifampin's printed CYP450 induction lowered both the contraceptive steroids and the warfarin (INR 1.2 vs target 2.5). The response is contraception counseling with barrier methods for the current pregnancy, INR-guided warfarin retitration, and an interaction review — the regimen itself continues, with the standard partnerships intact (pyridoxine with INH, visual monitoring on ethambutol, LFTs and uric acid on the regimen's hepatotoxic/hyperuricemic lines).",
    },
  },
  mnemonics: [
    {
      code: "FOUR DOORS, ONE REGIMEN",
      meaning: "The mycobacterial cell's four doors = RIPE: RNA polymerase (Rifampin), mycolic acid (Isoniazid — katG-activated prodrug), the acidic intracellular door (Pyrazinamide — pH-gated), arabinogalactan (Ethambutol).",
      memorizes: "The RIPE drugs and their doors",
      whenToUse: "Any TB-treatment mechanism or toxicity question",
      clinical: "Rifampin: induction + red-orange fluids · INH: B6 partnership + inhibition + lupus · PZA: hyperuricemia + phagolysosome pH · Ethambutol: the reversible optic door.",
    },
    {
      code: "PYRIDOXINE PARTNER",
      meaning: "Isoniazid always travels with vitamin B6 — INH's pyridoxine-draining effect causes the peripheral neuropathy and sideroblastic anemia the partnership prevents.",
      memorizes: "The INH-B6 pairing and its rationale",
      whenToUse: "Any INH toxicity or co-prescription question",
      clinical: "Stocking-distribution numbness or ringed sideroblasts on RIPE → add/step up pyridoxine; overdose adds seizures refractory to benzodiazepines.",
    },
    {
      code: "INDUCER vs INHIBITOR",
      meaning: "Within one RIPE regimen: rifampin INDUCES CYP450 (substrates fall — OCPs, warfarin, tacrolimus) while isoniazid INHIBITS it (substrates rise) — opposite polarities co-prescribed.",
      memorizes: "The CYP450 polarity pair",
      whenToUse: "Any interaction stem during TB therapy",
      clinical: "Failing contraception or a dropping INR on rifampin; climbing substrate levels on INH; rifabutin swaps in for less induction in HIV.",
    },
    {
      code: "RED-GREEN IS THE DOOR",
      meaning: "Ethambutol's door is the eye: red-green color blindness or ↓visual acuity, typically reversible — check color discrimination at every visit.",
      memorizes: "Ethambutol's optic toxicity and its reversibility",
      whenToUse: "Visual symptoms during TB therapy",
      clinical: "Distinguish from INH's peripheral neuropathy (stocking numbness + B6) — the eye belongs to ethambutol, the stockings to INH.",
    },
  ],
  rapidReview: {
    s30: [
      "The four doors: rifamycins (rifampin, rifabutin, rifapentine) — DNA-dependent RNA polymerase → ↓mRNA; resistance by RNA-polymerase mutations; monotherapy rapidly fails · INH — mycolic acid synthesis (katG-activated prodrug; resistance via katG) · PZA — mechanism uncertain, acidic pH (phagolysosomes) · ethambutol — arabinosyltransferase → ↓arabinogalactan",
      "The toxicity set: rifamycins — minor hepatotoxicity, CYP450 induction, red-orange body fluids (nonhazardous) · INH — B6 deficiency (peripheral neuropathy, sideroblastic anemia), hepatotoxicity (↑age/alcohol), CYP450 inhibition, drug-induced lupus, refractory seizures in overdose · PZA — hepatotoxicity, hyperuricemia · ethambutol — optic neuropathy (red-green, typically reversible)",
      "The partnerships: pyridoxine with INH · visual monitoring on ethambutol · LFTs across the regimen · uric acid on PZA · rifabutin over rifampin in HIV (less CYP450 induction) · fast vs slow acetylators set INH half-life",
      "The species map: M tuberculosis — prophylaxis a rifamycin-based regimen 3-4 months; treatment RIPE · M avium–intracellulare — prophylaxis azithromycin, rifabutin; treatment azithromycin or clarithromycin + ethambutol (± rifabutin/ciprofloxacin) · M leprae — N/A prophylaxis; dapsone + rifampin (tuberculoid), add clofazimine (lepromatous)",
      "The prophylaxis table: meningococcus → ceftriaxone/cipro/rifampin · IE procedures → amoxicillin · recurrent UTI → TMP-SMX · malaria travelers → atovaquone-proguanil, mefloquine, doxycycline, primaquine, chloroquine · GBS pregnancy → intrapartum penicillin G/ampicillin · newborn eyes → erythromycin ointment · postsurgical S aureus → cefazolin (vancomycin if MRSA) · rheumatic fever → benzathine penicillin G/penicillin V",
    ],
    m3: [
      "Rifamycins: inhibit DNA-dependent RNA polymerase → ↓mRNA synthesis; resistance via RNA-polymerase gene mutations; minor hepatotoxicity, CYP450 induction, red-orange discoloration (nonhazardous); rifabutin favored in HIV (less induction); monotherapy rapidly leads to resistance",
      "Isoniazid: inhibits mycolic acid synthesis → ↓cell wall synthesis; katG (catalase-peroxidase) converts INH to active form — resistance via katG mutations; B6 deficiency (peripheral neuropathy, sideroblastic anemia), hepatotoxicity (↑ with age and alcohol), CYP450 inhibition, drug-induced lupus; overdose → seizures refractory to benzodiazepines; administer with pyridoxine; fast vs slow acetylator half-lives",
      "Pyrazinamide + ethambutol: PZA — mechanism uncertain, works best at acidic pH (host phagolysosomes); hepatotoxicity, hyperuricemia. Ethambutol — inhibits arabinosyltransferase → ↓arabinogalactan → ↓cell wall; optic neuropathy (red-green color blindness or ↓visual acuity, typically reversible)",
      "Therapy map: M tuberculosis — 3-4-month rifamycin prophylaxis; RIPE treatment. M avium–intracellulare — azithromycin, rifabutin prophylaxis; azithromycin or clarithromycin + ethambutol treatment (can add rifabutin or ciprofloxacin). M leprae — long-term dapsone and rifampin (tuberculoid); add clofazimine (lepromatous)",
      "Prophylaxis table (8 rows): meningococcal exposure → ceftriaxone, ciprofloxacin, or rifampin; IE procedures → amoxicillin; recurrent UTIs → TMP-SMX; malaria → atovaquone-proguanil, mefloquine, doxycycline, primaquine, or chloroquine (sensitive areas); GBS pregnancy → intrapartum penicillin G or ampicillin; newborn gonococcal conjunctivitis → erythromycin ointment; postsurgical S aureus → cefazolin; vancomycin if ⊕ for MRSA; rheumatic fever → benzathine penicillin G or oral penicillin V",
    ],
    m10: [
      "Census: p214 carries exactly ONE image pair — a 1×1-pixel cmyk solid stretched behind the cell schematic through a 1621×1323 smooth mask (729B at 150ppi) — a light color wash, DECORATIVE; the MYCOBACTERIAL CELL schematic itself is line art whose labels print in the text layer (VLM census confirms: line-art vector diagram, no photographs); p215 is pure text (0 rasters)",
      "The schematic's rotated rim labels emit split mid-word in the raw layer: 'Arab inog ala c' (Arabinogalactan), 'Pep tido tan gly can' (Peptidoglycan), 'A comp lex f cyl lipid ree lipi s, ds' (a complex of free lipids), 'Myc olic acid' (Mycolic acid) — the figure block emits after the indd footer (raw 92-155)",
      "The therapy table's first header word emits as 'CACTERIUM' in the raw and layout layers (the MYCOB prefix lost in extraction — the printed page reads MYCOBACTERIUM); the banner typo MICROCIOLOGY—ANTIMICROCIALS prints on both pages; '193' prints mid-page on p215 (raw line 7)",
      "The source's own NOTES-column mnemonics ('INH Injures Neurons and Hepatocytes', 'Pronounce eyethambutol') are carried ONLY inside the verbatim tables per the E38 precedent — omitted from the visual and the KYP memory layer",
      "The rifamycins and ethambutol mechanism rows carry the C1-control-prefixed arrows ('\\x8e→' — the normalizer strips them, as on M32/M34); the MYCOBACTERIAL CELL interior labels (DNA, mRNA, RNA polymerase, Plasma membrane, Interior of cell) emit among the rim-label fragments",
    ],
  },
  recall: [
    {
      q: "Walk the four doors of the mycobacterial cell with each drug's mechanism, signature toxicity, and resistance route.",
      a: "RNA POLYMERASE DOOR — the rifamycins (rifampin, rifabutin, rifapentine): inhibit DNA-dependent RNA polymerase → ↓mRNA synthesis; minor hepatotoxicity, CYP450 induction, red-orange discoloration of body fluids (nonhazardous); resistance by mutations in the RNA-polymerase gene; monotherapy rapidly leads to resistance (rifabutin favored in HIV for less induction). MYCOLIC ACID DOOR — INH: inhibits mycolic acid synthesis → ↓cell wall synthesis; katG (catalase-peroxidase) converts the prodrug — resistance via katG mutations; B6 deficiency (peripheral neuropathy, sideroblastic anemia), hepatotoxicity (↑ age/alcohol), CYP450 inhibition, drug-induced lupus, refractory seizures in overdose; administer with pyridoxine; acetylator status sets half-life. ACIDIC INTRACELLULAR DOOR — PZA: mechanism uncertain, works best at acidic pH (host phagolysosomes); hepatotoxicity, hyperuricemia. ARABINOGALACTAN DOOR — ethambutol: inhibits arabinosyltransferase → ↓arabinogalactan synthesis → ↓cell wall synthesis; optic neuropathy (red-green color blindness or ↓visual acuity, typically reversible).",
    },
    {
      q: "Carry the antimycobacterial therapy table verbatim (book 193).",
      a: "M TUBERCULOSIS — prophylaxis: Rifamycin-based regimen for 3-4 months; treatment: Rifampin, Isoniazid, Pyrazinamide, Ethambutol (RIPE for treatment). M AVIUM–INTRACELLULARE — prophylaxis: Azithromycin, rifabutin; treatment: Azithromycin or clarithromycin + ethambutol; can add rifabutin or ciprofloxacin. M LEPRAE — prophylaxis: N/A; treatment: Long-term treatment with dapsone and rifampin for tuberculoid form; add clofazimine for lepromatous form. [Header quirk: the first header word emits as 'CACTERIUM' in the text layer — the printed page reads MYCOBACTERIUM.]",
    },
    {
      q: "Separate rifampin from isoniazid on the CYP450 axis — polarity, victims, and the HIV swap.",
      a: "RIFAMPIN INDUCES CYP450: substrate levels FALL — oral contraceptives fail, INR drops on warfarin, transplant immunosuppressants (tacrolimus/cyclosporine) fall below therapeutic; the induction builds over days-to-weeks. INH INHIBITS CYP450: substrate levels RISE (phenytoin, warfarin, carbamazepine climb toward toxicity). They are co-prescribed in RIPE — the classic paired-polarity stem. In HIV, rifabutin replaces rifampin for LESS CYP450 induction (the table's own note), keeping antiretrovirals safer.",
    },
    {
      q: "Give the prophylaxis table's eight rows with their printed medications.",
      a: "Exposure to meningococcal infection → ceftriaxone, ciprofloxacin, or rifampin. High risk for infective endocarditis undergoing surgical or dental procedures → amoxicillin. History of recurrent UTIs → TMP-SMX. Malaria prophylaxis for travelers → atovaquone-proguanil, mefloquine, doxycycline, primaquine, or chloroquine (for areas with sensitive species). Pregnant patients carrying group B strep → intrapartum penicillin G or ampicillin. Prevention of gonococcal conjunctivitis in newborn → erythromycin ointment on eyes. Prevention of postsurgical infection due to S aureus → cefazolin; vancomycin if ⊕ for MRSA. Prophylaxis of strep pharyngitis in a child with prior rheumatic fever → benzathine penicillin G or oral penicillin V.",
    },
    {
      q: "Distinguish INH's two neuropathies-adjacent toxicities from ethambutol's, and state the partnerships.",
      a: "INH: a PERIPHERAL neuropathy from vitamin B6 deficiency — stocking-distribution numbness, plus sideroblastic anemia (ringed sideroblasts); the partnership is pyridoxine (vitamin B6), printed in both the adverse and notes columns; hepatotoxicity rises with age and alcohol; overdose adds seizures often refractory to benzodiazepines. ETHAMBUTOL: an OPTIC neuropathy — red-green color blindness or ↓visual acuity, typically reversible; the partnership is visual monitoring (color discrimination + acuity at every visit). The other partnerships: LFTs across the hepatotoxic regimen, uric acid on PZA (hyperuricemia), and rifabutin-over-rifampin in HIV.",
    },
  ],
  related: [
    {
      title: "Antimicrobial Mechanisms: The Target Map",
      topicId: "antimicrobial-overview",
      note: "M31's door ④ (RNA polymerase) is the rifamycin door; this page-set also carries the wall doors the mycobacterial cell shares with M1's envelope — the mycolic-acid and arabinogalactan doors are the mycobacterial extensions of the M31 wall zone.",
    },
    {
      title: "DNA, RNA & Folate Pathway Inhibitors",
      topicId: "dna-rna-folate-inhibitors",
      note: "M34's dapsone card is the M leprae bridge (the G6PD-hemolysis and methemoglobinemia warnings apply to leprosy therapy), and its M avium note pairs with this set's macrolide anchors.",
    },
    {
      title: "Mycobacteria: Tuberculosis & Leprosy",
      topicId: "mycobacteria",
      note: "M11 drew the TB-spectrum (lepromatous ↔ tuberculoid) and the organism's acid-fast wall; this note is that organism's pharmacy — the therapy map's clofazimine line answers to M11's tuberculoid/lepromatous split.",
    },
    {
      title: "Cell Wall Inhibitors: Penicillins, Cephalosporins, Carbapenems, Vancomycin",
      topicId: "cell-wall-inhibitors",
      note: "The M32 directory's β-lactams do not enter mycobacteria well (the mycolic-acid wall) — which is why this page-set needs its own doors; the prophylaxis table's cefazolin/vancomycin row is the M32 tier map in surgical form.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (CYP450 Induction and Inhibition)",
      connection:
        "The rifampin-INH polarity pair is the CYP450 chapter's classic co-prescription: one drug induces while its regimen partner inhibits — the oral-contraceptive, warfarin, and transplant-drug failures all route through this page.",
    },
    {
      subject: "Biochemistry (Vitamin B6 and Heme Synthesis)",
      connection:
        "INH's sideroblastic anemia is the pyridoxine story: PLP is the cofactor for δ-aminolevulinic-acid synthase — the first step of heme synthesis; B6 depletion blocks it, producing ringed sideroblasts. The same cofactor logic appears in the biochemistry chapter's heme-synthesis map.",
    },
    {
      subject: "Immunology (Phagolysosome Biology)",
      connection:
        "PZA's acidic-pH preference is the macrophage phagolysosome story the immunology chapter teaches — the granuloma's interior acidity is the drug's activation terrain, linking drug action to cell-mediated immunity.",
    },
    {
      subject: "Public Health (Prophylaxis Policy)",
      connection:
        "The prophylaxis table is the public-health chapter in prescribing form: meningococcal post-exposure prophylaxis, IE procedural prophylaxis, GBS intrapartum prophylaxis, and rheumatic-fever secondary prophylaxis are each policy lines with named drugs.",
    },
  ],
};
