import type { KypUsMLENote } from "../types";

// Microbiology — ANTIMICROBIALS banner (M-batch 37). Source: pdf 218-219 /
// book 196-197 (Antiparasitic & non-HIV antiviral agents + the
// disinfection/sterilization table + the avoid-in-pregnancy table). Census:
// BOTH pages are PURE TEXT — pdfimages reports ZERO rasters on p218 and p219
// (all cards print in the text layer) — so the registry visual is an ORIGINAL
// KYP SYNTHESIS (the M33/M34 no-raster convention), not a redraw. VLM census
// (both pages rendered) verified: the disinfection table's scrambled text
// layer (the "a" sporicidal markers interleaving between rows, descriptions
// appearing shifted) reassembles as Chlorine^a = "Oxidizes and denatures
// proteins", Ethylene oxide^a = "Alkylating agent", Hydrogen peroxide^a =
// "Free radical oxidation", with Autoclave^a also carrying the sporicidal
// marker and the footnote "a Sporicidal."; the pregnancy table prints 8 rows
// with the source's own mnemonic "Safe children take really good care."
// mapping its red-text rows (Sulfonamides, Clarithromycin, Tetracyclines,
// Ribavirin, Griseofulvin, Chloramphenicol); no margin mnemonics exist on
// either page (the "bendy worms" gloss is inline text, carried only in the
// verbatim tables per the E38 precedent). Text quirks documented: the banner
// typo MICROCIOLOGY—ANTIMICROCIALS on both pages; '196' prints at raw line 1
// with '197' mid-banner at raw line 7; the arrows print as '' glyphs.

export const antiparasiticAntiviral: KypUsMLENote = {
  id: "antiparasitic-antiviral",
  title: "Antiparasitic & Non-HIV Antiviral Agents",
  subtitle:
    "The activation ladder and the progeny doors (books 196-197). THE ANTIPARASITIC HEADER — the antihelminthic set: mebendazole (disrupts microtubules and cellular motility), praziquantel (increased Ca2+ permeability, increased vacuolization), pyrantel pamoate, ivermectin, diethylcarbamazine. THE PROGENY DOORS — the influenza pair: oseltamivir and zanamivir inhibit influenza neuraminidase (decreased release of progeny virus; treatment and prevention of influenza A and B, begun within 48 hours of symptom onset to shorten illness) and baloxavir inhibits the cap-snatching endonuclease activity of the influenza virus RNA polymerase (blocking transfer of the 5' cap from cell mRNA onto viral mRNA; the same 48-hour window); the COVID door — remdesivir, a prodrug of an ATP analog whose active metabolite inhibits viral RNA-dependent RNA polymerase and evades proofreading by viral exoribonuclease (ExoN), for COVID-19 requiring hospitalization. THE KINASE LADDER — the herpes-virus nucleoside analogs, where THE ACTIVATION ENZYME DEFINES THE SPECTRUM: acyclovir, famciclovir, and valacyclovir are guanosine analogs monophosphorylated by HSV/VZV thymidine kinase (not phosphorylated in uninfected cells — few adverse effects; triphosphate formed by cellular enzymes; preferential viral-DNA-polymerase inhibition by chain termination; no activity against CMV because CMV lacks the thymidine kinase; HSV mucocutaneous and genital lesions, encephalitis, prophylaxis in immunocompromised patients and immunocompetent patients with severe or recurrent infection; no effect on latent forms; valacyclovir the prodrug with better oral bioavailability; famciclovir for herpes zoster; obstructive crystalline nephropathy and acute kidney injury if not adequately hydrated; resistance by mutated viral thymidine kinase); ganciclovir, the guanosine analog whose 5'-monophosphate is formed by a CMV viral kinase (triphosphate by cellular kinases; CMV especially in immunocompromised patients; valganciclovir the prodrug with better oral bioavailability; myelosuppression — leukopenia, neutropenia, thrombocytopenia — renal toxicity, more toxic to host enzymes than acyclovir; resistance by mutated viral kinase); foscarnet, the pyrophosphate analog that binds the pyrophosphate-binding site of viral DNA/RNA polymerases and HIV reverse transcriptase WITHOUT any kinase activation (CMV retinitis when ganciclovir fails; acyclovir-resistant HSV; nephrotoxicity and multiple electrolyte abnormalities that can lead to seizures; resistance by mutated DNA polymerase); and cidofovir, which preferentially inhibits viral DNA polymerase without phosphorylation by viral kinase (CMV retinitis; long half-life; nephrotoxicity — coadminister probenecid and IV saline; resistance by mutations in the viral DNA polymerase gene). THE TWO CLOSING TABLES — disinfection and sterilization (disinfection reduces pathogenic organism counts to safe levels; sterilization inactivates all microbes including spores: autoclave pressurized steam at greater than 120 degrees; alcohols denature proteins; chlorhexidine; chlorine; ethylene oxide the alkylating agent; hydrogen peroxide free-radical oxidation; iodine halogenation; quaternary amines) and the antimicrobials to avoid in pregnancy (sulfonamides-kernicterus, aminoglycosides-ototoxicity, fluoroquinolones-cartilage damage, clarithromycin-embryotoxic, tetracyclines-discolored teeth and bone growth, ribavirin and griseofulvin-teratogenic, chloramphenicol-gray baby syndrome).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Antimicrobials",
  pilotCategory:
    "The activation ladder — who phosphorylates the drug defines which virus it treats and which resistance breaks it (HSV/VZV thymidine kinase for acyclovir, CMV viral kinase for ganciclovir, no kinase at all for foscarnet and cidofovir) — plus the influenza progeny doors (neuraminidase, cap-snatching endonuclease), the remdesivir polymerase door, the antihelminthic header, and the two closing tables (disinfection/sterilization; antimicrobials to avoid in pregnancy).",
  difficulty: 2,
  readTime: 13,
  sourceRef:
    "First Aid 2026, Part 1 pp. 196–197 (Antihelminthic therapy; oseltamivir/zanamivir, baloxavir, remdesivir; acyclovir/famciclovir/valacyclovir, ganciclovir, foscarnet, cidofovir; disinfection and sterilization; antimicrobials to avoid in pregnancy)",
  tags: [
    "antiparasitic therapy",
    "antihelminthic",
    "mebendazole",
    "praziquantel",
    "pyrantel pamoate",
    "ivermectin",
    "diethylcarbamazine",
    "antiviral therapy",
    "oseltamivir",
    "zanamivir",
    "neuraminidase inhibitor",
    "influenza",
    "baloxavir",
    "cap snatching",
    "endonuclease",
    "remdesivir",
    "RNA-dependent RNA polymerase",
    "exonuclease",
    "ExoN",
    "COVID-19",
    "acyclovir",
    "famciclovir",
    "valacyclovir",
    "guanosine analog",
    "thymidine kinase",
    "chain termination",
    "crystalline nephropathy",
    "ganciclovir",
    "valganciclovir",
    "CMV",
    "CMV viral kinase",
    "myelosuppression",
    "foscarnet",
    "pyrophosphate analog",
    "acyclovir-resistant HSV",
    "electrolyte abnormalities",
    "cidofovir",
    "probenecid",
    "long half-life",
    "disinfection",
    "sterilization",
    "autoclave",
    "alcohols",
    "chlorhexidine",
    "chlorine",
    "ethylene oxide",
    "hydrogen peroxide",
    "iodine",
    "iodophors",
    "quaternary amines",
    "sporicidal",
    "prions",
    "antimicrobials in pregnancy",
    "kernicterus",
    "gray baby syndrome",
    "teratogenic",
  ],
  core: {
    what: "THE ACTIVATION LADDER (the page-set's selectivity engine — redrawn as this note's registry visual). The herpes-virus nucleoside analogs all end at the same place — the viral DNA polymerase, inhibited preferentially, by chain termination — but they enter through DIFFERENT ACTIVATION DOORS, and the door decides everything. Acyclovir, famciclovir, and valacyclovir are guanosine analogs monophosphorylated by HSV/VZV THYMIDINE KINASE (and not phosphorylated in uninfected cells — the source of their few adverse effects; the triphosphate is then formed by cellular enzymes): the door means HSV mucocutaneous and genital lesions, HSV encephalitis, prophylaxis in immunocompromised patients and in immunocompetent patients with severe or recurrent infection — and NO activity against CMV, because CMV lacks the thymidine kinase necessary to activate guanosine analogs; no effect on latent forms of HSV and VZV; valacyclovir (a prodrug of acyclovir) and famciclovir (for herpes zoster) carry the better-oral-bioavailability refinements; the toxicity is obstructive crystalline nephropathy and acute kidney injury if not adequately hydrated; resistance is MUTATED VIRAL THYMIDINE KINASE. Ganciclovir is the guanosine analog whose 5'-monophosphate is instead formed by a CMV VIRAL KINASE (triphosphate by cellular kinases) — so it covers CMV, especially in immunocompromised patients (valganciclovir the prodrug with better oral bioavailability), at the price of myelosuppression (leukopenia, neutropenia, thrombocytopenia), renal toxicity, and more toxicity to host enzymes than acyclovir; resistance is MUTATED VIRAL KINASE. Foscarnet skips the ladder entirely — a PYROPHOSPHATE ANALOG binding the pyrophosphate-binding site of viral DNA/RNA polymerases and HIV reverse transcriptase, REQUIRING NO KINASE ACTIVATION — which is exactly why it treats CMV retinitis when ganciclovir fails and acyclovir-resistant HSV (the resistance broke the activation door; this drug never needed one); the price is nephrotoxicity and multiple electrolyte abnormalities that can lead to seizures; resistance is MUTATED DNA POLYMERASE. Cidofovir also does not require phosphorylation by viral kinase (preferentially inhibits viral DNA polymerase; CMV retinitis; long half-life; nephrotoxicity — coadminister with probenecid and IV saline; resistance by mutations in the viral DNA polymerase gene). THE PROGENY DOORS (the influenza/COVID set): oseltamivir and zanamivir INHIBIT INFLUENZA NEURAMINIDASE (decreased release of progeny virus — treatment AND prevention of influenza A and B, with therapy within 48 hours of symptom onset shortening the illness); baloxavir inhibits the CAP-SNATCHING ENDONUCLEASE activity of the influenza virus RNA polymerase (the transfer of the 5' cap from cell mRNA onto viral mRNA — decreased viral replication; the same 48-hour window); and remdesivir is a prodrug of an ATP analog whose active metabolite inhibits viral RNA-DEPENDENT RNA POLYMERASE and EVADES PROOFREADING by viral exoribonuclease (ExoN) — decreased viral RNA production, for COVID-19 requiring hospitalization. THE ANTIPARASITIC HEADER: pyrantel pamoate, ivermectin, mebendazole (disrupting microtubules and cellular motility), praziquantel (increased Ca2+ permeability, increased vacuolization), diethylcarbamazine. THE CLOSING TABLES: disinfection and sterilization — the goals are reduction of pathogenic organism counts to safe levels (disinfection) and inactivation of all microbes including spores (sterilization): autoclave (pressurized steam at more than 120 degrees Celsius; may not reliably inactivate prions), alcohols (denature proteins and disrupt cell membranes), chlorhexidine (disrupts cell membranes and coagulates intracellular components), chlorine (oxidizes and denatures proteins), ethylene oxide (alkylating agent), hydrogen peroxide (free radical oxidation), iodine and iodophors (halogenation of DNA, RNA, and proteins; may be sporicidal), quaternary amines (impair permeability of cell membranes) — autoclave, chlorine, ethylene oxide, and hydrogen peroxide carry the sporicidal marker; and the antimicrobials to avoid in pregnancy: sulfonamides (kernicterus), aminoglycosides (ototoxicity), fluoroquinolones (cartilage damage), clarithromycin (embryotoxic), tetracyclines (discolored teeth, inhibition of bone growth), ribavirin (teratogenic), griseofulvin (teratogenic), chloramphenicol (gray baby syndrome).",
    why: "This page-set teaches one of the most-tested selectivity logics in antimicrobial pharmacology: FOR THE NUCLEOSIDE ANALOGS, THE ACTIVATION ENZYME IS THE SPECTRUM. A drug that needs HSV/VZV thymidine kinase to take its first phosphorylation step can only act where that kinase exists — which simultaneously explains acyclovir's few adverse effects (uninfected cells never activate it), its uselessness against CMV (no thymidine kinase), and its resistance pattern (a mutated viral thymidine kinase strips the drug of its activation door — and foscarnet, which never needed one, steps in for acyclovir-resistant HSV). Ganciclovir re-runs the same logic one virus over: its monophosphate is formed by a CMV viral kinase, so its spectrum is CMV, and its resistance is a mutated kinase. The two no-kinase drugs complete the pattern from the other side: foscarnet (a pyrophosphate analog — it mimics the by-product rather than the substrate, so there is nothing to phosphorylate) and cidofovir (no viral-kinase phosphorylation required) — the resistant-strain lane, paid for in nephrotoxicity (foscarnet adds the electrolyte-abnormality seizures; cidofovir needs the probenecid-and-saline escort). The influenza doors then show the same target-thinking applied to RNA viruses at earlier lifecycle steps: neuraminidase inhibition stops the RELEASE of progeny virions (oseltamivir, zanamivir), the cap-snatching endonuclease stops the viral polymerase from STEALING its 5' cap from host mRNA (baloxavir), and remdesivir stops the RNA-dependent RNA polymerase itself — while evading the exoribonuclease proofreading that would otherwise excise it. The antihelminthic header compresses the antiparasitic roster the page owns (microtubules for mebendazole, calcium permeability for praziquantel), and the two closing tables are pure high-yield memorization carried verbatim — the disinfection/sterilization spectrum (with its sporicidal markers and the prion exception) and the pregnancy avoid-list with its organ-by-organ toxicities.",
    keyIdea:
      "Read the set by DOOR. KINASE LADDER: HSV/VZV thymidine kinase activates acyclovir, famciclovir, valacyclovir (HSV mucocutaneous/genital/encephalitis; prophylaxis in immunocompromised and severe/recurrent immunocompetent; NO CMV — it lacks the kinase; no effect on latent forms; valacyclovir and famciclovir the better-bioavailability prodrugs, famciclovir for zoster; hydrate against crystalline nephropathy; resistance = mutated thymidine kinase). CMV viral kinase activates ganciclovir (CMV esp. immunocompromised; valganciclovir prodrug; myelosuppression + renal toxicity, more toxic to host enzymes than acyclovir; resistance = mutated kinase). NO KINASE NEEDED: foscarnet (pyrophosphate analog at the pyrophosphate-binding site — DNA/RNA polymerases AND HIV reverse transcriptase; ganciclovir-failing CMV retinitis and acyclovir-resistant HSV; nephrotoxicity + electrolyte-abnormality seizures; resistance = mutated DNA polymerase) and cidofovir (CMV retinitis; long half-life; nephrotoxicity — probenecid + IV saline; resistance = DNA polymerase gene mutations). PROGENY DOORS: oseltamivir/zanamivir (neuraminidase — decreased release of progeny; influenza A and B treatment and prevention; 48-hour window) · baloxavir (cap-snatching endonuclease of the viral RNA polymerase; 48-hour window) · remdesivir (ATP-analog prodrug; RNA-dependent RNA polymerase with ExoN-proofreading evasion; COVID-19 requiring hospitalization). ANTIPARASITIC HEADER: mebendazole (microtubules, cellular motility), praziquantel (increased Ca2+ permeability, vacuolization), pyrantel pamoate, ivermectin, diethylcarbamazine. CLOSING TABLES: disinfection (safe levels) vs sterilization (all microbes including spores) — autoclave more than 120 degrees (prions may survive), alcohols denature, chlorhexidine coagulates, chlorine oxidizes, ethylene oxide alkylates, hydrogen peroxide free-radical oxidizes, iodine halogenates (may be sporicidal), quaternary amines impair permeability; sporicidal set = autoclave, chlorine, ethylene oxide, hydrogen peroxide. PREGNANCY AVOID LIST: sulfonamides-kernicterus · aminoglycosides-ototoxicity · fluoroquinolones-cartilage · clarithromycin-embryotoxic · tetracyclines-teeth/bone · ribavirin + griseofulvin-teratogenic · chloramphenicol-gray baby.",
  },
  mechanisms: [
    {
      id: "kinase-activation-ladder",
      title: "The kinase ladder: the activation enzyme defines the spectrum — and resistance breaks the door it came through",
      context: "The four herpes-virus antiviral cards (books 196-197)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A nucleoside-analog antiviral question appears (acyclovir through cidofovir)",
            sublabel: "Input — any herpes-family antiviral: which virus, which resistance, or which rescue drug.",
            variant: "input",
          },
          {
            id: "tk",
            label: "DOOR 1 — HSV/VZV THYMIDINE KINASE monophosphorylates the guanosine analogs",
            sublabel: "Acyclovir, famciclovir, valacyclovir: not phosphorylated in uninfected cells (few adverse effects); cellular enzymes form the triphosphate; preferential viral-DNA-polymerase inhibition by chain termination. No CMV — it lacks the kinase. No effect on latent forms.",
            variant: "process",
          },
          {
            id: "cmvkinase",
            label: "DOOR 2 — the CMV VIRAL KINASE forms ganciclovir's 5'-monophosphate",
            sublabel: "Ganciclovir: triphosphate by cellular kinases; CMV especially in immunocompromised patients; myelosuppression (leukopenia, neutropenia, thrombocytopenia), renal toxicity — more toxic to host enzymes than acyclovir; valganciclovir the prodrug.",
            variant: "process",
          },
          {
            id: "nokinase",
            label: "DOOR 3 — NO KINASE AT ALL: foscarnet (pyrophosphate analog at the pyrophosphate-binding site) and cidofovir",
            sublabel: "Foscarnet inhibits viral DNA/RNA polymerases AND HIV reverse transcriptase; cidofovir preferentially inhibits viral DNA polymerase (long half-life; probenecid + IV saline). These are the resistant-strain drugs.",
            variant: "process",
          },
          {
            id: "resistance",
            label: "RESISTANCE FOLLOWS THE DOOR — mutated thymidine kinase (acyclovir), mutated viral kinase (ganciclovir), mutated DNA polymerase (foscarnet, cidofovir)",
            sublabel: "The enzyme that activated the drug is the enzyme whose mutation resists it — which is why the no-kinase drugs rescue the kinase-door failures.",
            variant: "process",
          },
          {
            id: "route",
            label: "The clinical routing — spectrum, rescue, and price",
            sublabel: "HSV/VZV disease → acyclovir (valacyclovir/famciclovir by bioavailability and zoster) · CMV → ganciclovir (valganciclovir) · ganciclovir-failing CMV retinitis or acyclovir-resistant HSV → foscarnet · nephrotoxicity levers: hydration (acyclovir's crystals), probenecid + IV saline (cidofovir), electrolyte monitoring (foscarnet's seizures).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "tk", label: "HSV/VZV disease" },
          { from: "trigger", to: "cmvkinase", label: "CMV disease" },
          { from: "trigger", to: "nokinase", label: "resistant strains" },
          { from: "tk", to: "resistance", label: "mutated TK" },
          { from: "cmvkinase", to: "resistance", label: "mutated kinase" },
          { from: "resistance", to: "route", label: "the rescue logic" },
          { from: "nokinase", to: "route", label: "foscarnet/cidofovir" },
        ],
      },
    },
    {
      id: "progeny-and-polymerase-doors",
      title: "The progeny doors and the antiparasitic header: neuraminidase release, the cap snatch, the ExoN-evading polymerase, and the worm set",
      context: "The influenza cards, the remdesivir card, and the antihelminthic header (book 196)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An influenza, COVID-19, or antihelminthic question appears",
            sublabel: "Input — oseltamivir/zanamivir, baloxavir, remdesivir, or the antiparasitic roster.",
            variant: "input",
          },
          {
            id: "release",
            label: "THE RELEASE DOOR — oseltamivir and zanamivir inhibit influenza NEURAMINIDASE",
            sublabel: "Decreased release of progeny virus; treatment AND prevention of influenza A and B; therapy within 48 hours of symptom onset may shorten the duration of illness.",
            variant: "process",
          },
          {
            id: "cap",
            label: "THE CAP-SNATCH DOOR — baloxavir inhibits the endonuclease activity of the influenza RNA polymerase",
            sublabel: "Blocks the transfer of the 5' cap from cell mRNA onto viral mRNA (cap snatching) — decreased viral replication; treatment within 48 hours of symptom onset shortens illness.",
            variant: "process",
          },
          {
            id: "rdrp",
            label: "THE POLYMERASE DOOR — remdesivir, a prodrug of an ATP analog",
            sublabel: "The active metabolite inhibits viral RNA-dependent RNA polymerase AND evades proofreading by viral exoribonuclease (ExoN) — decreased viral RNA production; COVID-19 requiring hospitalization.",
            variant: "process",
          },
          {
            id: "worms",
            label: "THE ANTIPARASITIC HEADER — pyrantel pamoate, ivermectin, mebendazole, praziquantel, diethylcarbamazine",
            sublabel: "Mebendazole disrupts microtubules and cellular motility; praziquantel increases Ca2+ permeability and vacuolization — the roster M20/M21's organisms are treated with.",
            variant: "process",
          },
          {
            id: "route",
            label: "The routing — virus first, then timing",
            sublabel: "Influenza A/B (treatment or prevention) → neuraminidase inhibitors; the 48-hour window is the shared efficacy rule · hospitalized COVID-19 → remdesivir · helminths by class → the mebendazole/praziquantel pair with pyrantel, ivermectin, and diethylcarbamazine.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "release", label: "influenza" },
          { from: "trigger", to: "cap", label: "influenza (the second door)" },
          { from: "trigger", to: "rdrp", label: "COVID-19" },
          { from: "trigger", to: "worms", label: "helminths" },
          { from: "release", to: "route", label: "48-hour window" },
          { from: "cap", to: "route", label: "48-hour window" },
          { from: "rdrp", to: "route", label: "hospitalized COVID-19" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "antiviral-target-map",
      title: "The antiviral target map — the activation ladder and the progeny doors (an original KYP synthesis)",
      caption:
        "An original KYP synthesis of the non-HIV antiviral cards (books 196-197 — both pages print entirely in the text layer, 0 rasters): CENTER — THE KINASE LADDER, the selectivity engine: the guanoside analogs running from nucleoside to monophosphate (THE ACTIVATION FORK — HSV/VZV thymidine kinase for acyclovir/famciclovir/valacyclovir, the CMV viral kinase for ganciclovir, the no-kinase lane for foscarnet and cidofovir) to triphosphate (cellular enzymes) to the viral DNA polymerase (chain termination), with the resistance map strip (mutated thymidine kinase, mutated kinase, mutated DNA polymerase — resistance follows the door). LEFT — THE PROGENY DOORS: the influenza virion with neuraminidase (oseltamivir, zanamivir — decreased release of progeny virus) and the cap-snatching endonuclease (baloxavir), both on the 48-hour clock, and the remdesivir door (ATP-analog prodrug, RNA-dependent RNA polymerase, ExoN-proofreading evasion). RIGHT — THE SAFETY PANEL: acyclovir's crystalline nephropathy (hydrate), ganciclovir's myelosuppression, foscarnet's electrolyte-abnormality seizures, cidofovir's probenecid-and-saline escort, and the prodrug bioavailability refinements (valacyclovir, valganciclovir). BOTTOM — the antihelminthic strip and the pointers to the note's verbatim disinfection and pregnancy tables.",
      notice:
        "Both source pages carry ZERO raster images (pdfimages census; VLM-verified) — every card prints in the text layer — so this visual is an original KYP synthesis of the printed facts, not a redraw of any source figure. The source's own inline glosses (e.g. the 'bendy worms' wording and the pregnancy-table mnemonic 'Safe children take really good care.') are carried ONLY inside the note's verbatim tables per the E38 precedent — omitted from this visual.",
    },
    {
      kind: "table",
      title: "Book 196 — the antihelminthic header and the influenza/COVID cards (carried verbatim)",
      intro:
        "The page's opening antihelminthic block and its first three antiviral cards, as printed — including the source's own inline 'bendy worms' gloss, carried verbatim per the E38 precedent.",
      columns: ["CARD · FIELD", "PRINTED CONTENT — verbatim (book 196)"],
      rows: [
        ["Antihelminthic therapy (header block)", "Pyrantel pamoate, ivermectin, mebendazole (treats \u201cbendy worms\u201d by disrupting microtubules and cellular motility), praziquantel (\u2191 Ca2+ permeability, \u2191 vacuolization), diethylcarbamazine."],
        ["Oseltamivir, zanamivir — MECHANISM", "Inhibit influenza neuraminidase \u2192 \u2193 release of progeny virus."],
        ["— CLINICAL USE", "Treatment and prevention of influenza A and B. Beginning therapy within 48 hours of symptom onset may shorten duration of illness."],
        ["Baloxavir — MECHANISM", "Inhibits the \u201ccap snatching\u201d (transfer of the 5\u2032 cap from cell mRNA onto viral mRNA) endonuclease activity of the influenza virus RNA polymerase \u2192 \u2193 viral replication."],
        ["— CLINICAL USE", "Treatment within 48 hours of symptom onset shortens duration of illness."],
        ["Remdesivir — MECHANISM", "Prodrug of an ATP analog. The active metabolite inhibits viral RNA-dependent RNA polymerase and evades proofreading by viral exoribonuclease (ExoN) \u2192 \u2193 viral RNA production."],
        ["— CLINICAL USE", "Recently approved for treatment of COVID-19 requiring hospitalization."],
      ],
      caption:
        "The antiparasitic roster (mebendazole's microtubules, praziquantel's calcium permeability — the M20/M21 treatment set) and the three progeny-door cards: neuraminidase inhibition (oseltamivir, zanamivir), the cap-snatching endonuclease (baloxavir), and the ExoN-evading RNA-dependent RNA polymerase inhibitor (remdesivir) — the influenza pair sharing the 48-hour window.",
    },
    {
      kind: "table",
      title: "Books 196-197 — the four herpes-virus antiviral cards (carried verbatim)",
      intro:
        "The activation-ladder cards, as printed — every field including the resistance lines. These four cards are the page-set's most-tested material.",
      columns: ["CARD · FIELD", "PRINTED CONTENT — verbatim (books 196-197)"],
      rows: [
        ["Acyclovir, famciclovir, valacyclovir — MECHANISM", "Guanosine analogs. Monophosphorylated by HSV/VZV thymidine kinase and not phosphorylated in uninfected cells \u2192 few adverse effects. Triphosphate formed by cellular enzymes. Preferentially inhibit viral DNA polymerase by chain termination."],
        ["— CLINICAL USE", "No activity against CMV because CMV lacks the thymidine kinase necessary to activate guanosine analogs. Used for HSV-induced mucocutaneous and genital lesions as well as for encephalitis. Prophylaxis in patients who are immunocompromised. Also used as prophylaxis for immunocompetent patients with severe or recurrent infection. No effect on latent forms of HSV and VZV. Valacyclovir, a prodrug of acyclovir, has better oral bioavailability. For herpes zoster, use famciclovir."],
        ["— ADVERSE EFFECTS", "Obstructive crystalline nephropathy and acute kidney injury if not adequately hydrated."],
        ["— MECHANISM OF RESISTANCE", "Mutated viral thymidine kinase."],
        ["Ganciclovir — MECHANISM", "Guanosine analog. 5\u2032-monophosphate formed by a CMV viral kinase. Triphosphate formed by cellular kinases. Preferentially inhibits viral DNA polymerase."],
        ["— CLINICAL USE", "CMV, especially in patients who are immunocompromised. Valganciclovir, a prodrug of ganciclovir, has better oral bioavailability."],
        ["— ADVERSE EFFECTS", "Myelosuppression (leukopenia, neutropenia, thrombocytopenia), renal toxicity. More toxic to host enzymes than acyclovir."],
        ["— MECHANISM OF RESISTANCE", "Mutated viral kinase."],
        ["Foscarnet — MECHANISM", "Viral DNA/RNA polymerase inhibitor and HIV reverse transcriptase inhibitor. Binds to pyrophosphate-binding site of enzyme. Does not require any kinase activation. Foscarnet = pyrophosphate analog."],
        ["— CLINICAL USE", "CMV retinitis in immunocompromised patients when ganciclovir fails; acyclovir-resistant HSV."],
        ["— ADVERSE EFFECTS", "Nephrotoxicity, multiple electrolyte abnormalities can lead to seizures."],
        ["— MECHANISM OF RESISTANCE", "Mutated DNA polymerase."],
        ["Cidofovir — MECHANISM", "Preferentially inhibits viral DNA polymerase. Does not require phosphorylation by viral kinase."],
        ["— CLINICAL USE", "CMV retinitis in immunocompromised patients. Long half-life."],
        ["— ADVERSE EFFECTS", "Nephrotoxicity (coadminister cidofovir with probenecid and IV saline to \u2193 toxicity)."],
        ["— MECHANISM OF RESISTANCE", "Mutations in the viral DNA polymerase gene."],
      ],
      caption:
        "The kinase ladder in full: the thymidine-kinase door (acyclovir, famciclovir, valacyclovir — no CMV, crystalline nephropathy, mutated-TK resistance), the CMV-kinase door (ganciclovir — myelosuppression, mutated-kinase resistance), and the no-kinase lane (foscarnet the pyrophosphate analog and cidofovir — the resistant-strain drugs, paid for in nephrotoxicity and foscarnet's electrolyte-abnormality seizures).",
    },
    {
      kind: "table",
      title: "Book 197 — disinfection and sterilization (carried verbatim, reading order VLM-verified)",
      intro:
        "The disinfectants table as printed. The text layer scrambles this table (the sporicidal 'a' markers interleave between rows and descriptions appear shifted); the reading order below is verified against the rendered page by VLM census.",
      columns: ["AGENT", "PRINTED CONTENT — verbatim (book 197)"],
      rows: [
        ["Goals (header block)", "Goals include the reduction of pathogenic organism counts to safe levels (disinfection) and the inactivation of all microbes including spores (sterilization)."],
        ["Autoclave (sporicidal)", "Pressurized steam at >120\u00b0C. May not reliably inactivate prions."],
        ["Alcohols", "Denature proteins and disrupt cell membranes."],
        ["Chlorhexidine", "Disrupts cell membranes and coagulates intracellular components."],
        ["Chlorine (sporicidal)", "Oxidizes and denatures proteins."],
        ["Ethylene oxide (sporicidal)", "Alkylating agent."],
        ["Hydrogen peroxide (sporicidal)", "Free radical oxidation."],
        ["Iodine and iodophors", "Halogenation of DNA, RNA, and proteins. May be sporicidal."],
        ["Quaternary amines", "Impair permeability of cell membranes."],
        ["Footnote", "a Sporicidal."],
      ],
      caption:
        "Disinfection (safe levels) vs sterilization (all microbes including spores): the sporicidal set is autoclave, chlorine, ethylene oxide, and hydrogen peroxide — with the prion exception (autoclave steam may not reliably inactivate prions) and iodine's 'may be sporicidal' hedge carried as printed.",
    },
    {
      kind: "table",
      title: "Book 197 — antimicrobials to avoid in pregnancy (carried verbatim, with the source's own mnemonic)",
      intro:
        "The pregnancy avoid-table as printed, with the source's own closing mnemonic carried verbatim per the E38 precedent (KYP-original memory aids live only in the mnemonic layer).",
      columns: ["ANTIMICROBIAL", "ADVERSE EFFECT — verbatim (book 197)"],
      rows: [
        ["Sulfonamides", "Kernicterus"],
        ["Aminoglycosides", "Ototoxicity"],
        ["Fluoroquinolones", "Cartilage damage"],
        ["Clarithromycin", "Embryotoxic"],
        ["Tetracyclines", "Discolored teeth, inhibition of bone growth"],
        ["Ribavirin", "Teratogenic"],
        ["Griseofulvin", "Teratogenic"],
        ["Chloramphenicol", "Gray baby syndrome"],
        ["Source's own mnemonic (verbatim)", "Safe children take really good care."],
      ],
      caption:
        "The eight-row avoid list: kernicterus (sulfonamides), ototoxicity (aminoglycosides), cartilage damage (fluoroquinolones), embryotoxicity (clarithromycin), discolored teeth and inhibited bone growth (tetracyclines), the two teratogens (ribavirin, griseofulvin), and gray baby syndrome (chloramphenicol) — the antimicrobial classes that recur through every pregnancy vignette on the exam.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three routing rules these cards teach",
      body:
        "Rule 1 — THE ACTIVATION ENZYME IS THE SPECTRUM: HSV/VZV thymidine kinase activates acyclovir, famciclovir, and valacyclovir (so: HSV disease and zoster, NO CMV, few adverse effects because uninfected cells never phosphorylate them, and resistance by mutated thymidine kinase); the CMV viral kinase activates ganciclovir (so: CMV, myelosuppression, resistance by mutated kinase). Rule 2 — THE NO-KINASE DRUGS RESCUE THE KINASE FAILURES: foscarnet (a pyrophosphate analog that binds the pyrophosphate-binding site — it mimics the by-product, so there is nothing to phosphorylate) covers ganciclovir-failing CMV retinitis and acyclovir-resistant HSV; cidofovir (no viral-kinase phosphorylation, long half-life) covers CMV retinitis with the probenecid-and-IV-saline escort. Their shared price is nephrotoxicity — and foscarnet adds the multiple electrolyte abnormalities that can lead to seizures. Rule 3 — TIMING AND TARGET DEFINE THE RNA-VIRUS DOORS: the influenza drugs are about the 48-hour window (neuraminidase inhibition with oseltamivir/zanamivir for treatment AND prevention of influenza A and B; baloxavir's cap-snatching endonuclease block), while remdesivir is the hospitalized-COVID drug whose ATP-analog metabolite both inhibits the RNA-dependent RNA polymerase AND evades the ExoN proofreading that would excise it.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 38-year-old man with AIDS (CD4 40) develops large, slowly expanding, painful perianal ulcers; HSV-2 is confirmed, and the lesions progress despite 14 days of high-dose IV acyclovir.",
        discriminator: "Acyclovir-resistant HSV (mutated viral thymidine kinase) in an immunocompromised host — treat with foscarnet",
        concept: "The no-kinase rescue",
        answer:
          "Chronic HSV in the profoundly immunocompromised selects for mutated viral thymidine kinase — the activation door acyclovir needs is gone. Foscarnet, the pyrophosphate analog that binds the pyrophosphate-binding site of viral DNA/RNA polymerases (and HIV reverse transcriptase) and requires no kinase activation, is the printed drug for acyclovir-resistant HSV; its price is nephrotoxicity and the multiple electrolyte abnormalities that can lead to seizures.",
      },
      {
        stem: "A 31-year-old transplant patient on valganciclovir prophylaxis returns with neutropenia (ANC 640) and mild creatinine rise; CMV PCR is negative and the drug is working as intended.",
        discriminator: "Ganciclovir toxicity — myelosuppression (leukopenia, neutropenia, thrombocytopenia) + renal toxicity; more toxic to host enzymes than acyclovir",
        concept: "The CMV-kinase door's price",
        answer:
          "Ganciclovir's 5'-monophosphate is formed by a CMV viral kinase, and its triphosphate by cellular kinases — but its host-enzyme toxicity exceeds acyclovir's: myelosuppression (leukopenia, neutropenia, thrombocytopenia) and renal toxicity are the printed set. Valganciclovir is the prodrug with better oral bioavailability; if CMV retinitis progresses despite it, foscarnet is the when-ganciclovir-fails drug.",
      },
      {
        stem: "A 26-year-old woman calls the clinic 36 hours after influenza A symptoms began during a documented community outbreak; she is 22 weeks pregnant.",
        discriminator: "Oseltamivir within 48 hours of symptom onset — treatment AND prevention of influenza A and B (neuraminidase inhibition, decreased release of progeny virus)",
        concept: "The 48-hour progeny door",
        answer:
          "Influenza neuraminidase inhibition (oseltamivir, zanamivir) decreases the release of progeny virus and is used for both treatment and prevention of influenza A and B — beginning therapy within 48 hours of symptom onset may shorten the duration of illness. Baloxavir (the cap-snatching endonuclease inhibitor of the viral RNA polymerase) carries the same 48-hour rule; remdesivir is the hospitalized-COVID-19 drug (ATP-analog prodrug, RNA-dependent RNA polymerase, ExoN-proofreading evasion).",
      },
    ],
    traps: [
      {
        a: "Acyclovir",
        b: "Ganciclovir",
        whyConfused: "Both are guanosine analogs inhibiting viral DNA polymerase",
        keyDifference: "The activation door: acyclovir is monophosphorylated by HSV/VZV THYMIDINE kinase (no CMV — CMV lacks it; crystalline nephropathy; mutated-TK resistance), ganciclovir by a CMV VIRAL kinase (CMV esp. immunocompromised; myelosuppression + renal toxicity; mutated-kinase resistance)",
        clue: "HSV/zoster or prophylaxis in severe/recurrent disease → acyclovir family; CMV (retinitis, transplant patients) → ganciclovir/valganciclovir",
      },
      {
        a: "Foscarnet",
        b: "Cidofovir",
        whyConfused: "Both are the no-kinase drugs for resistant/refractory disease",
        keyDifference: "Foscarnet is a pyrophosphate analog (binds the pyrophosphate-binding site; DNA/RNA polymerases AND HIV reverse transcriptase; electrolyte-abnormality seizures); cidofovir preferentially inhibits viral DNA polymerase, has a long half-life, and needs the probenecid + IV saline escort against nephrotoxicity",
        clue: "Acyclovir-resistant HSV or ganciclovir-failing CMV → foscarnet; the probenecid-and-saline coadministration → cidofovir",
      },
      {
        a: "Oseltamivir/zanamivir",
        b: "Baloxavir",
        whyConfused: "Both are influenza drugs on the same 48-hour clock",
        keyDifference: "Neuraminidase inhibition (decreased release of progeny virus — treatment AND prevention) vs the cap-snatching endonuclease of the viral RNA polymerase (decreased viral replication — treatment)",
        clue: "Prevention (prophylaxis during an outbreak) points to the neuraminidase pair; 'cap snatching' in the stem points to baloxavir",
      },
    ],
    pivots: [
      {
        lookAlike: "Valacyclovir vs valganciclovir (the two valyl prodrugs)",
        differentiator: "Both are prodrugs with better oral bioavailability — valacyclovir releases acyclovir (HSV/VZV thymidine kinase door), valganciclovir releases ganciclovir (CMV viral kinase door)",
        correctPath: "The virus decides: HSV disease (or zoster → famciclovir) → valacyclovir; CMV in an immunocompromised patient → valganciclovir — and the toxicity follows the door (crystalline nephropathy vs myelosuppression)",
      },
      {
        lookAlike: "The two 'no kinase' phrasings",
        differentiator: "Foscarnet: 'does not require ANY kinase activation' (it is a pyrophosphate analog — nothing to phosphorylate); cidofovir: 'does not require phosphorylation BY VIRAL KINASE' (cellular enzymes activate it)",
        correctPath: "Both land on resistant/refractory CMV disease and both are nephrotoxic — but only foscarnet covers acyclovir-resistant HSV and only cidofovir carries the probenecid + IV saline coadministration and the long half-life",
      },
    ],
    miniCase: {
      vignette:
        "A 42-year-old man with a heart transplant (6 months ago, on tacrolimus and mycophenolate) presents with 3 weeks of progressive, deeply ulcerating perianal lesions and new floaters with blurred vision in the right eye. HSV PCR from the ulcer base is positive; the lesions have progressed through 10 days of high-dose IV acyclovir. Retinal examination shows necrotizing retinitis with hemorrhage along the vessels. The team plans to switch therapy; the patient's creatinine has risen from baseline and his last potassium, magnesium, and calcium were all low-normal with a mild tremor.",
      question: "Which drug covers BOTH the progressing HSV disease and the likely retinitis, and what explains the acyclovir failure?",
      options: [
        {
          label: "Foscarnet — acyclovir failed through mutated viral thymidine kinase",
          text: "The pyrophosphate analog binds the pyrophosphate-binding site of viral DNA/RNA polymerases (and HIV reverse transcriptase) without any kinase activation — covering acyclovir-resistant HSV (the mutated thymidine kinase stripped acyclovir of its activation door) and CMV retinitis when ganciclovir fails.",
          correct: true,
          why: "Correct on both layers: the progression through high-dose acyclovir in a transplant patient is the mutated-thymidine-kinase resistance pattern (the activation enzyme is the resistance enzyme — resistance follows the door), and foscarnet never needed a kinase. The case also plants its toxicity: nephrotoxicity (the creatinine rise) and the multiple electrolyte abnormalities (the low-normal K+, Mg2+, Ca2+ with tremor) that can lead to seizures.",
        },
        {
          label: "Higher-dose valacyclovir — bioavailability was the problem",
          text: "Switch to the prodrug with better oral bioavailability and continue the same activation pathway.",
          why: "Wrong layer: valacyclovir releases acyclovir and still requires HSV/VZV thymidine kinase activation — the mutated kinase resists the entire acyclovir family. Bioavailability does not repair a broken activation door (and IV acyclovir already bypassed bioavailability entirely).",
        },
        {
          label: "Ganciclovir — the CMV drug covers herpesviridae broadly",
          text: "The CMV viral kinase activates ganciclovir, so it should cover resistant HSV too.",
          why: "Wrong door: ganciclovir's 5'-monophosphate is formed by the CMV viral kinase — an enzyme HSV lesions in this scenario do not provide; and the resistance logic already showed this host mutates the kinase doors. His myelosuppression risk (mycophenolate co-treatment) is the additional printed reason to be cautious.",
        },
        {
          label: "Cidofovir — the other no-kinase drug",
          text: "It does not require phosphorylation by viral kinase and has a long half-life.",
          why: "A true-but-second choice: cidofovir preferentially inhibits viral DNA polymerase and could act on resistant herpesvirus disease, but the printed indications are CMV retinitis; the printed acyclovir-resistant HSV drug is foscarnet. Its nephrotoxicity (probenecid + IV saline escort) is also the concern this case's rising creatinine already flags — one reason the exam expects foscarnet here.",
        },
        {
          label: "Oseltamivir — the antiviral with the 48-hour window",
          text: "Inhibits neuraminidase, decreasing release of progeny virus.",
          why: "Wrong virus and wrong door: neuraminidase is the influenza target; this is herpesvirus disease (HSV ulceration plus CMV-pattern retinitis in a transplant recipient). A true fact from the same page that answers a different question — the classic irrelevant-distractor build.",
        },
      ],
      reasoning:
        "The two-layer stem: (1) HSV disease progressing through high-dose IV acyclovir in a profoundly immunocompromised transplant patient = the mutated viral thymidine kinase resistance pattern — resistance follows the activation door (the same logic that makes ganciclovir fail through a mutated kinase and foscarnet/cidofovir through a mutated DNA polymerase); (2) necrotizing retinitis in a transplant patient = CMV retinitis, for which foscarnet is the printed when-ganciclovir-fails drug. Foscarnet requires no kinase activation at all — the pyrophosphate analog at the pyrophosphate-binding site — so the TK mutation does not touch it. The case's creatinine rise and drifting electrolytes (K+, Mg2+, Ca2+ with tremor) pre-load its toxicity set: nephrotoxicity and the multiple electrolyte abnormalities that can lead to seizures.",
    },
  },
  mnemonics: [
    {
      code: "THE ACTIVATION LADDER",
      meaning: "Who lights the first phosphate decides where the drug can go: HSV/VZV thymidine kinase lights acyclovir (so HSV and zoster only — CMV is left in the dark), the CMV viral kinase lights ganciclovir (so CMV), and foscarnet and cidofovir light their own fuses (no viral kinase needed).",
      memorizes: "The herpes-antiviral activation logic and spectra",
      whenToUse: "Any acyclovir/ganciclovir/foscarnet/cidofovir spectrum or resistance question",
      clinical: "Uninfected cells never phosphorylate acyclovir (few adverse effects); CMV lacks thymidine kinase (no acyclovir activity); mutated TK resists acyclovir, mutated kinase resists ganciclovir, mutated DNA polymerase resists foscarnet/cidofovir.",
    },
    {
      code: "NO KINASE, NO PROBLEM",
      meaning: "Foscarnet needs no activation because it imitates the by-product (a pyrophosphate analog at the pyrophosphate-binding site) — so the resistance that breaks the activation doors (mutated thymidine kinase, mutated kinase) cannot touch it: acyclovir-resistant HSV and ganciclovir-failing CMV retinitis are its printed jobs.",
      memorizes: "The resistant-strain rescue rule",
      whenToUse: "Any 'progressing despite acyclovir/ganciclovir' vignette",
      clinical: "The rescue price: nephrotoxicity plus the multiple electrolyte abnormalities (K+, Mg2+, Ca2+) that can lead to seizures; cidofovir joins the rescue lane with its long half-life and the probenecid + IV saline escort against nephrotoxicity.",
    },
    {
      code: "THE 48-HOUR TICKET",
      meaning: "The influenza drugs only shorten illness when boarded early — oseltamivir/zanamivir (neuraminidase: fewer progeny released, treatment AND prevention) and baloxavir (the cap-snatching endonuclease) all ride the 48-hour window from symptom onset.",
      memorizes: "Influenza therapy timing and the two doors",
      whenToUse: "Any influenza treatment or prophylaxis question",
      clinical: "Neuraminidase inhibitors treat and prevent influenza A and B; baloxavir blocks the viral polymerase's 5'-cap theft from cell mRNA; remdesivir (the ATP-analog prodrug evading ExoN proofreading) is the hospitalized-COVID-19 door.",
    },
    {
      code: "THE BODY-MAP AVOID LIST",
      meaning: "Walk the pregnancy avoid-list down the body: the newborn's brain (sulfonamides — kernicterus), the ear (aminoglycosides — ototoxicity), the growing cartilage (fluoroquinolones), the embryo (clarithromycin — embryotoxic), the teeth and bones (tetracyclines), the fetus twice over (ribavirin, griseofulvin — teratogenic), and the gray baby (chloramphenicol).",
      memorizes: "Antimicrobials to avoid in pregnancy, organ by organ",
      whenToUse: "Any antimicrobial choice in a pregnant patient",
      clinical: "KYP-original companion to the source's own mnemonic (which rides only in the verbatim table): the body-map walk pairs each avoid with its organ — kernicterus, ototoxicity, cartilage damage, embryotoxicity, discolored teeth with inhibited bone growth, teratogenicity, and gray baby syndrome.",
    },
  ],
  rapidReview: {
    s30: [
      "The kinase ladder: acyclovir, famciclovir, valacyclovir — monophosphorylated by HSV/VZV thymidine kinase (not in uninfected cells — few adverse effects), triphosphate by cellular enzymes, viral DNA polymerase chain termination; HSV mucocutaneous/genital/encephalitis, prophylaxis (immunocompromised; severe/recurrent immunocompetent), no CMV (lacks TK), no latent effect; valacyclovir prodrug (bioavailability), famciclovir for zoster; crystalline nephropathy — hydrate; resistance = mutated thymidine kinase",
      "The CMV door: ganciclovir — 5'-monophosphate by a CMV viral kinase; CMV esp. immunocompromised; valganciclovir prodrug; myelosuppression (leukopenia, neutropenia, thrombocytopenia) + renal toxicity, more toxic to host enzymes than acyclovir; resistance = mutated viral kinase",
      "The no-kinase lane: foscarnet — pyrophosphate analog at the pyrophosphate-binding site, viral DNA/RNA polymerases + HIV reverse transcriptase; CMV retinitis when ganciclovir fails, acyclovir-resistant HSV; nephrotoxicity + electrolyte-abnormality seizures; resistance = mutated DNA polymerase · cidofovir — viral DNA polymerase, no viral-kinase phosphorylation; CMV retinitis, long half-life; nephrotoxicity — probenecid + IV saline; resistance = DNA polymerase gene mutations",
      "The progeny doors: oseltamivir/zanamivir (neuraminidase — decreased release of progeny virus; influenza A and B treatment AND prevention; 48-hour window) · baloxavir (cap-snatching endonuclease of the viral RNA polymerase; 48-hour window) · remdesivir (ATP-analog prodrug — RNA-dependent RNA polymerase, evades ExoN proofreading; COVID-19 requiring hospitalization) · antihelminthic header: pyrantel pamoate, ivermectin, mebendazole (microtubules, cellular motility), praziquantel (increased Ca2+ permeability, vacuolization), diethylcarbamazine",
      "The closing tables: disinfection = safe levels, sterilization = all microbes including spores — autoclave (pressurized steam >120\u00b0C; prions may survive), alcohols (denature proteins), chlorhexidine (coagulates), chlorine (oxidizes), ethylene oxide (alkylates), hydrogen peroxide (free-radical oxidation), iodine (halogenates, may be sporicidal), quaternary amines (impair permeability); sporicidal = autoclave, chlorine, ethylene oxide, hydrogen peroxide · pregnancy avoids: sulfonamides (kernicterus), aminoglycosides (ototoxicity), fluoroquinolones (cartilage), clarithromycin (embryotoxic), tetracyclines (teeth/bone), ribavirin + griseofulvin (teratogenic), chloramphenicol (gray baby)",
    ],
    m3: [
      "Acyclovir family: guanosine analogs; HSV/VZV thymidine kinase monophosphorylation (uninfected cells spared); viral DNA polymerase chain termination; no CMV, no latent effect; valacyclovir (prodrug, bioavailability), famciclovir (zoster); obstructive crystalline nephropathy — hydrate; resistance = mutated thymidine kinase",
      "Ganciclovir: CMV viral kinase forms the 5'-monophosphate; CMV esp. immunocompromised; valganciclovir prodrug; myelosuppression, renal toxicity, more toxic to host enzymes than acyclovir; resistance = mutated viral kinase",
      "Foscarnet + cidofovir: foscarnet — pyrophosphate analog, no kinase activation, DNA/RNA polymerases + HIV RT; ganciclovir-failing CMV retinitis, acyclovir-resistant HSV; nephrotoxicity + electrolyte seizures; cidofovir — no viral-kinase phosphorylation, long half-life, probenecid + IV saline",
      "Influenza + COVID: oseltamivir/zanamivir — neuraminidase, decreased progeny release, treatment + prevention, 48 hours; baloxavir — cap-snatching endonuclease, 48 hours; remdesivir — ATP-analog prodrug, RNA-dependent RNA polymerase with ExoN evasion, hospitalized COVID-19",
      "Antiparasitic + tables: mebendazole (microtubules), praziquantel (Ca2+ permeability, vacuolization), pyrantel, ivermectin, diethylcarbamazine; disinfection vs sterilization with the sporicidal four (autoclave, chlorine, ethylene oxide, hydrogen peroxide) and the prion exception; the eight pregnancy avoids with their organ toxicities",
    ],
    m10: [
      "Census: BOTH pages (pdf 218-219 / books 196-197) are PURE TEXT — pdfimages reports 0 rasters on each; the registry visual is an original KYP synthesis (the M33/M34 no-raster convention), not a redraw",
      "The disinfection table's text layer is scrambled (the sporicidal 'a' markers interleaving, descriptions shifted); VLM census of the rendered page verified the reading order: Chlorine = 'Oxidizes and denatures proteins', Ethylene oxide = 'Alkylating agent', Hydrogen peroxide = 'Free radical oxidation', each carrying the sporicidal marker with Autoclave; the footnote reads 'a Sporicidal.'",
      "The pregnancy table's closing line is the source's own mnemonic ('Safe children take really good care.') — carried ONLY inside the verbatim table per the E38 precedent; the KYP-original body-map mnemonic lives in the memory layer",
      "The 'bendy worms' gloss is inline text in the antihelminthic header (not a margin note; the VLM census confirmed no margin mnemonics exist on either page); carried only in the verbatim table",
      "Text quirks: the banner typo MICROCIOLOGY\u2014ANTIMICROCIALS prints on both pages; '196' opens p218 (raw line 1) while '197' prints mid-banner (raw line 7); the arrow glyphs print as '' control characters in the raw layer; foscarnet's 'pyrofosphate analog' line prints inside its MECHANISM block (raw 14)",
    ],
  },
  recall: [
    {
      q: "Walk the kinase ladder — each herpes-virus antiviral, its activation door, spectrum, toxicity, and resistance.",
      a: "ACYCLOVIR, FAMCICLOVIR, VALACYCLOVIR — guanosine analogs monophosphorylated by HSV/VZV thymidine kinase (not phosphorylated in uninfected cells — few adverse effects); triphosphate by cellular enzymes; preferential viral-DNA-polymerase inhibition by chain termination; HSV mucocutaneous and genital lesions, encephalitis, prophylaxis in immunocompromised patients and immunocompetent patients with severe or recurrent infection; NO CMV (lacks the thymidine kinase); no effect on latent forms; valacyclovir the prodrug with better oral bioavailability, famciclovir for herpes zoster; obstructive crystalline nephropathy and AKI if not adequately hydrated; resistance = mutated viral thymidine kinase. GANCICLOVIR — 5'-monophosphate formed by a CMV viral kinase; CMV especially in immunocompromised patients; valganciclovir the prodrug; myelosuppression (leukopenia, neutropenia, thrombocytopenia), renal toxicity, more toxic to host enzymes than acyclovir; resistance = mutated viral kinase. FOSCARNET — pyrophosphate analog binding the pyrophosphate-binding site of viral DNA/RNA polymerases and HIV reverse transcriptase, no kinase activation; CMV retinitis when ganciclovir fails and acyclovir-resistant HSV; nephrotoxicity, multiple electrolyte abnormalities leading to seizures; resistance = mutated DNA polymerase. CIDOFOVIR — preferentially inhibits viral DNA polymerase, no viral-kinase phosphorylation; CMV retinitis, long half-life; nephrotoxicity (probenecid + IV saline); resistance = viral DNA polymerase gene mutations.",
    },
    {
      q: "Carry the influenza and COVID cards verbatim — mechanisms and clinical uses.",
      a: "OSELTAMIVIR, ZANAMIVIR — MECHANISM: inhibit influenza neuraminidase \u2192 decreased release of progeny virus. CLINICAL USE: treatment and prevention of influenza A and B; beginning therapy within 48 hours of symptom onset may shorten duration of illness. BALOXAVIR — MECHANISM: inhibits the 'cap snatching' (transfer of the 5' cap from cell mRNA onto viral mRNA) endonuclease activity of the influenza virus RNA polymerase \u2192 decreased viral replication. CLINICAL USE: treatment within 48 hours of symptom onset shortens duration of illness. REMDESIVIR — MECHANISM: prodrug of an ATP analog; the active metabolite inhibits viral RNA-dependent RNA polymerase and evades proofreading by viral exoribonuclease (ExoN) \u2192 decreased viral RNA production. CLINICAL USE: recently approved for treatment of COVID-19 requiring hospitalization.",
    },
    {
      q: "State the antihelminthic header verbatim, then the disinfection/sterilization table with its sporicidal markers.",
      a: "ANTHELMINTHIC THERAPY: pyrantel pamoate, ivermectin, mebendazole (treats 'bendy worms' by disrupting microtubules and cellular motility), praziquantel (increased Ca2+ permeability, increased vacuolization), diethylcarbamazine. DISINFECTION AND STERILIZATION — goals: reduction of pathogenic organism counts to safe levels (disinfection) and inactivation of all microbes including spores (sterilization). Autoclave (sporicidal): pressurized steam at >120\u00b0C; may not reliably inactivate prions. Alcohols: denature proteins and disrupt cell membranes. Chlorhexidine: disrupts cell membranes and coagulates intracellular components. Chlorine (sporicidal): oxidizes and denatures proteins. Ethylene oxide (sporicidal): alkylating agent. Hydrogen peroxide (sporicidal): free radical oxidation. Iodine and iodophors: halogenation of DNA, RNA, and proteins; may be sporicidal. Quaternary amines: impair permeability of cell membranes. Footnote: a Sporicidal.",
    },
    {
      q: "Give the antimicrobials-to-avoid-in-pregnancy table verbatim, with the source's own mnemonic.",
      a: "Sulfonamides — kernicterus. Aminoglycosides — ototoxicity. Fluoroquinolones — cartilage damage. Clarithromycin — embryotoxic. Tetracyclines — discolored teeth, inhibition of bone growth. Ribavirin — teratogenic. Griseofulvin — teratogenic. Chloramphenicol — gray baby syndrome. The source's own mnemonic: 'Safe children take really good care.' (mapping its red-text rows: Sulfonamides, Clarithromycin, Tetracyclines, Ribavirin, Griseofulvin, Chloramphenicol).",
    },
    {
      q: "Why does foscarnet treat acyclovir-resistant HSV, and what is its toxicity set?",
      a: "Acyclovir resistance in the immunocompromised host is mutated viral thymidine kinase — the activation door is gone. Foscarnet is a pyrophosphate analog that binds the pyrophosphate-binding site of the viral DNA/RNA polymerases (and HIV reverse transcriptase) and does not require any kinase activation, so the mutated thymidine kinase does not affect it. Its printed indications: CMV retinitis in immunocompromised patients when ganciclovir fails, and acyclovir-resistant HSV. Toxicity: nephrotoxicity and multiple electrolyte abnormalities that can lead to seizures (monitor K+, Mg2+, Ca2+). Resistance to foscarnet itself is a mutated DNA polymerase.",
    },
  ],
  related: [
    {
      title: "Antimicrobial Mechanisms: The Target Map",
      topicId: "antimicrobial-overview",
      note: "M31's map opened the antimicrobial directory; this page-set closes it — the antiviral targets (DNA polymerase, neuraminidase, the RNA-dependent RNA polymerase) are the viral counterpart of the bacterial target map.",
    },
    {
      title: "Antifungal Agents",
      topicId: "antifungals",
      note: "M36's page-set carried the antiprotozoal/louse/chloroquine tail by page ownership; this note holds the dedicated antiparasitic header (mebendazole, praziquantel) and its griseofulvin/ribavirin teratogenic pair returns in the pregnancy avoid-table.",
    },
    {
      title: "HIV & AIDS: Virology Through Opportunists",
      topicId: "hiv-aids",
      note: "M27's opportunists are this page's dosing targets — CMV retinitis and chronic HSV in the immunocompromised host are the kinase-ladder cards' home territory; foscarnet's HIV reverse transcriptase inhibition bridges directly to M38.",
    },
    {
      title: "HIV Therapy: NRTIs Through Integrase Inhibitors",
      topicId: "hiv-therapy",
      note: "M38 details the antiretroviral directory; foscarnet (an HIV reverse transcriptase inhibitor that needs no kinase activation) and the nucleoside-analog activation logic introduced here are its foundations.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (prodrug activation and selectivity)",
      connection:
        "The kinase ladder is the same selectivity story as the antibacterial prodrugs: INH's katG activation (M35), flucytosine's cytosine deaminase (M36), and now the viral kinases — the activating enzyme defines the spectrum, and its mutation defines the resistance, in every family.",
    },
    {
      subject: "Nephrology (drug-induced renal injury)",
      connection:
        "Three of the four ladder drugs are nephrotoxic by distinct mechanisms — acyclovir's obstructive crystalline nephropathy (hydrate), foscarnet's and cidofovir's tubular injury (electrolyte monitoring; probenecid + IV saline) — the renal chapter's drug-injury differential.",
    },
    {
      subject: "Obstetrics (drug safety in pregnancy)",
      connection:
        "The avoid-in-pregnancy table is the antimicrobial chapter's contribution to the pregnancy safety canon — kernicterus, ototoxicity, cartilage damage, embryotoxicity, teeth/bone, teratogenicity, and gray baby syndrome recur across every pregnant-patient vignette in the organ-system chapters.",
    },
    {
      subject: "Public health (disinfection and sterilization)",
      connection:
        "The disinfection/sterilization spectrum — disinfection to safe levels vs sterilization of all microbes including spores, the sporicidal four, and the prion exception to autoclaving — is the infection-control layer the public-health and hospital-epidemiology questions draw from.",
    },
  ],
};
