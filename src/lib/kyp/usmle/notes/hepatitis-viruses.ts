import type { KypUsMLENote } from "../types";

// Microbiology — VIROLOGY banner (M-batch 26). Source: pdf 192-193 / books
//  170-171 (the 5-virus hepatitis comparison table; the HBV-polymerase and
//  HCV-proofreading mechanism lines; extrahepatic manifestations; hepatitis
//  serologic markers; the serology timeline figure + the patterns table).
//  Rasters: p192 the Councilman-bodies histology A; p193 seventeen tiny sep
//  rasters (the +/- marks of the patterns table — redrawn as ⊕/⊝ text marks)
//  — COPYRIGHTED, described-in-text only; the serology timeline in the
//  visual is an ORIGINAL REDRAW. The source's own column-header typos
//  'INCUCATION' and 'LIVER CIOPSY' print on book 170 (documented). FA's
//  printed gloss ('the vowels hit your bowels') is quoted in the table
//  block for verification only.

export const hepatitisViruses: KypUsMLENote = {
  id: "hepatitis-viruses",
  title: "Hepatitis Viruses: A Through E",
  subtitle:
    "The five hepatitis viruses on the transmission-course axis, and the HBV serology clock that reads them. THE SHARED SIGNATURE: all hepatitis viruses give episodes of fever, jaundice, and ↑ ALT and AST. THE ENTERIC PAIR (the naked 'vowels' HAV and HEV): HAV — an RNA PICORNAVIRUS, fecal-oral (shellfish, travelers, day care), SHORT incubation (weeks), acute and self-limiting in adults and asymptomatic in children, good prognosis, NO HCC risk, hepatocyte swelling with monocyte infiltration and COUNCILMAN BODIES A on biopsy, and NO carrier state. HEV — an RNA HEPEVIRUS, fecal-oral and especially WATERBORNE, short incubation, FULMINANT hepatitis in EXPECTANT (pregnant) patients with HIGH MORTALITY, no HCC, patchy necrosis, enteric and epidemic (parts of Asia, Africa, the Middle East) with no carrier state. THE PARENTERAL TRIO: HBV — a DNA HEPADNAVIRUS, parenteral (Blood), sexual (Bedroom), perinatal (Birthing), LONG incubation (months), initially like SERUM SICKNESS (fever, arthralgias, rash) with possible progression to carcinoma; adults mostly reach full resolution while NEONATES fare worse; HCC risk YES; the granular eosinophilic 'GROUND GLASS' appearance from surface-antigen accumulation in hepatocytes with cytotoxic T cells mediating damage; carrier state common. HCV — an RNA FLAVIVIRUS, primarily blood (injection drug use, posttransfusion), long incubation, may progress to CIRRHOSIS or CARCINOMA; the majority develop stable, CHRONIC hepatitis C; HCC yes; lymphoid aggregates with focal macrovesicular steatosis; carrier state very common. HDV — an RNA DELTAVIRUS, parenteral, sexual, perinatal; SUPERINFECTION (HDV after HBV) runs SHORT while COINFECTION (HDV with HBV) runs long; similar to HBV, with superinfection worsening the prognosis; the DEFECTIVE virus that depends on the HBV HBsAg coat for entry into hepatocytes. THE MECHANISMS: HBV DNA polymerase has DNA- AND RNA-dependent activities — it completes the partial dsDNA upon nuclear entry, host RNA polymerase transcribes mRNA for viral proteins, and the DNA polymerase then REVERSE TRANSCRIBES viral RNA to DNA; HCV LACKS 3′-5′ exonuclease activity → no proofreading → antigenic variation of envelope proteins, with host antibody production lagging behind the new mutant strains. THE SEROLOGY SET (book 171): anti-HAV IgM is the best test for acute hepatitis A and IgG indicates prior infection or vaccination; HBsAg indicates hepatitis B infection; anti-HBs indicates immunity (vaccination or recovery); HBcAg is the core antigen; anti-HBc IgM marks acute or recent infection and IgG prior exposure or chronic infection — IgM anti-HBc may be the SOLE ⊕ marker during the WINDOW PERIOD; HBeAg (secreted by infected hepatocytes, NOT part of the mature virion) indicates active viral replication with high transmissibility and poorer prognosis; anti-HBe indicates low transmissibility. THE PATTERNS: acute = HBsAg ⊕ + HBeAg ⊕ + IgM anti-HBc ⊕; window = IgM anti-HBc alone; recovery = anti-HBs ⊕ + IgG anti-HBc ⊕ + anti-HBe ⊕; chronic high infectivity = HBsAg ⊕ + HBeAg ⊕ + IgG anti-HBc ⊕; chronic low infectivity = HBsAg ⊕ + anti-HBe ⊕ + IgG anti-HBc ⊕; immunized = anti-HBs ALONE. THE EXTRAHEPATIC SET: HBV — aplastic anemia (hematologic), membranous GN > membranoproliferative GN (renal), POLYARTERITIS NODOSA (vascular); HCV — essential mixed CRYOGLOBULINEMIA with ↑ B-cell NHL risk, ITP, and autoimmune hemolytic anemia (hematologic), membranoproliferative GN > membranous GN (renal), LEUKOCYTOCLASTIC VASCULITIS (vascular), sporadic PORPHYRIA CUTANEA TARDA and LICHEN PLANUS (dermatologic), and ↑ diabetes risk with autoimmune hypothyroidism (endocrine).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Virology",
  pilotCategory:
    "Virology — the five hepatitis viruses on the enteric-vs-parenteral axis (the naked vowels against the blood-borne trio), the HBV polymerase's DNA-and-RNA-dependent logic and HCV's proofreading escape, the serology clock with its window period, and the extrahepatic B-vs-C manifestation split",
  difficulty: 2,
  readTime: 14,
  sourceRef: "First Aid 2026, Part 1 pp. 170–171 (Hepatitis viruses; Extrahepatic manifestations of hepatitis B and C; Hepatitis serologic markers)",
  tags: [
    "hepatitis viruses",
    "HAV",
    "HBV",
    "HCV",
    "HDV",
    "HEV",
    "jaundice",
    "ALT",
    "AST",
    "RNA picornavirus",
    "DNA hepadnavirus",
    "RNA flavivirus",
    "RNA deltavirus",
    "RNA hepevirus",
    "fecal-oral",
    "shellfish",
    "parenteral",
    "perinatal transmission",
    "waterborne",
    "incubation",
    "serum sickness",
    "self-limiting",
    "fulminant hepatitis",
    "pregnancy",
    "cirrhosis",
    "hepatocellular carcinoma",
    "carrier state",
    "Councilman bodies",
    "ground glass hepatocytes",
    "cytotoxic T cells",
    "lymphoid aggregates",
    "macrovesicular steatosis",
    "patchy necrosis",
    "defective virus",
    "HBsAg coat",
    "superinfection",
    "coinfection",
    "DNA polymerase",
    "reverse transcriptase",
    "exonuclease",
    "proofreading",
    "antigenic variation",
    "anti-HAV IgM",
    "anti-HBs",
    "anti-HBc",
    "HBeAg",
    "anti-HBe",
    "window period",
    "serologic markers",
    "aplastic anemia",
    "cryoglobulinemia",
    "B-cell NHL",
    "ITP",
    "membranous GN",
    "membranoproliferative GN",
    "polyarteritis nodosa",
    "leukocytoclastic vasculitis",
    "porphyria cutanea tarda",
    "lichen planus",
  ],
  core: {
    what: "THE FIVE-VIRUS GRID (book 170). HAV: an RNA picornavirus, transmitted fecal-oral (shellfish, travelers, day care), with SHORT incubation (weeks); acute and self-limiting in adults, asymptomatic in children; good prognosis; NO hepatocellular carcinoma risk; biopsy shows hepatocyte swelling, monocyte infiltration, and COUNCILMAN BODIES A; no carrier state. HBV: a DNA hepadnavirus, transmitted parenterally (Blood), sexually (Bedroom), and perinatally (Birthing), with LONG incubation (months); initially like serum sickness (fever, arthralgias, rash), with possible progression to carcinoma; adults mostly reach full resolution while neonates have a worse prognosis; HCC risk YES; biopsy shows the granular eosinophilic 'GROUND GLASS' appearance from accumulation of surface antigen within infected hepatocytes, with cytotoxic T cells mediating the damage; carrier state common. HCV: an RNA flavivirus, transmitted primarily through blood (injection drug use, posttransfusion), with long incubation; may progress to CIRRHOSIS or CARCINOMA — the majority develop stable, CHRONIC hepatitis C; HCC yes; biopsy shows lymphoid aggregates with focal areas of macrovesicular steatosis; carrier state very common. HDV: an RNA deltavirus, transmitted parenterally, sexually, and perinatally; SUPERINFECTION (HDV after HBV) has a SHORT course while COINFECTION (HDV with HBV) is long; clinically similar to HBV, with superinfection carrying the worse prognosis; HCC yes; biopsy similar to HBV — and HDV is the DEFECTIVE virus that depends on HBV's HBsAg coat for entry into hepatocytes. HEV: an RNA hepevirus, transmitted fecal-oral and especially WATERBORNE, with short incubation; FULMINANT hepatitis in EXPECTANT (pregnant) patients; HIGH mortality in pregnancy; no HCC; biopsy shows patchy necrosis; enteric and epidemic (parts of Asia, Africa, the Middle East) with no carrier state. THE MECHANISM LINES: HBV DNA polymerase has DNA- and RNA-dependent activities — upon nuclear entry it completes the partial dsDNA; host RNA polymerase transcribes mRNA from viral DNA to make viral proteins; the DNA polymerase then reverse transcribes viral RNA to DNA. HCV lacks 3′-5′ exonuclease activity → no proofreading ability → antigenic variation of envelope proteins, with host antibody production lagging behind the new mutant strains. THE SEROLOGIC MARKERS (book 171): anti-HAV (IgM) — the best test to detect acute hepatitis A; anti-HAV (IgG) — prior infection and/or vaccination, protects against reinfection; HBsAg — the surface antigen, indicates hepatitis B infection; anti-HBs — immunity to hepatitis B (vaccination or recovery); HBcAg — the core antigen; anti-HBc — IgM for acute/recent infection, IgG for prior exposure or chronic infection, with IgM anti-HBc the possible SOLE ⊕ marker of the WINDOW PERIOD; HBeAg — secreted by infected hepatocytes into the circulation, NOT part of the mature virion, indicating active viral replication with high transmissibility and poorer prognosis; anti-HBe — low transmissibility. THE TIMELINE PHASES: incubation (HBsAg rising) → acute infection (HBsAg ⊕, HBeAg ⊕, IgM anti-HBc ⊕) → window (HBsAg gone, IgM anti-HBc alone ⊕) → recovery (anti-HBs rises with IgG anti-HBc and anti-HBe). THE EXTRAHEPATIC MANIFESTATIONS: HEPATOLOGIC shared by all — fever, jaundice, ↑ ALT and AST. HEPATITIS B: aplastic anemia (hematologic); membranous GN > membranoproliferative GN (renal); POLYARTERITIS NODOSA (vascular). HEPATITIS C: essential mixed cryoglobulinemia, ↑ risk of B-cell NHL, ITP, and autoimmune hemolytic anemia (hematologic); membranoproliferative GN > membranous GN (renal); LEUKOCYTOCLASTIC VASCULITIS (vascular); sporadic porphyria cutanea tarda and lichen planus (dermatologic); ↑ risk of diabetes mellitus and autoimmune hypothyroidism (endocrine).",
    why: "This block is the GI/liver cornerstone of virology and carries five exam institutions. The first is THE VOWEL RULE: the naked, enteric pair (HAV and HEV) lacks envelopes and survives the gut — fecal-oral transmission, short incubation, acute self-limited courses, no HCC, no carrier state — against the enveloped parenteral trio (HBV, HCV, HDV) riding blood, sex, and birth with long incubations, chronicity, carcinoma risk, and carrier states. The second is THE PREGNANCY EXCEPTION: HEV, otherwise the mild waterborne vowel, is FULMINANT and often fatal in pregnancy — the single most-tested HEV line. The third is THE DEFECTIVE-VIRUS LOGIC: HDV needs HBV's HBsAg coat for hepatocyte entry (M22's complementation), and its two timings differ — superinfection after HBV runs short and worse, coinfection with HBV runs long. The fourth is THE SEROLOGY CLOCK: the marker set (surface, core, e) with the window period — IgM anti-HBc as the sole ⊕ when HBsAg has fallen but anti-HBs has not yet risen — plus the immunized pattern (anti-HBs alone) and the HBeAg-transmissibility link. The fifth is THE EXTRAHEPATIC SPLIT: HBV's polyarteritis nodosa and membranous GN against HCV's cryoglobulinemia, membranoproliferative GN, leukocytoclastic vasculitis, porphyria cutanea tarda, and diabetes — the B-vs-C manifestation axis that turns a liver panel into a multisystem question.",
    keyIdea: "Vowels go through the gut; the blood-borne trio stays for life. HAV (picorna, fecal-oral, shellfish/day care): weeks, acute, self-limited, good, no HCC, Councilman bodies, NO carrier. HEV (hepe, fecal-oral WATERBORNE, epidemic): weeks, FULMINANT IN PREGNANCY with high mortality, no HCC, patchy necrosis, no carrier. HBV (hepadna, Blood-Bedroom-Birthing): months, serum-sickness onset; adults resolve, NEONATES worse; HCC YES; ground-glass hepatocytes + cytotoxic T cells; carrier common. HCV (flavi, injection drug use + posttransfusion): months, CIRRHOSIS/CARCINOMA; majority CHRONIC; HCC yes; lymphoid aggregates + macrovesicular steatosis; carrier very common — because HCV cannot proofread (no 3′-5′ exonuclease → antigenic variation → antibody always a step behind). HDV (delta, parenteral/sexual/perinatal): DEFECTIVE — needs the HBV HBsAg coat; SUPERINFECTION = short + worse; COINFECTION = long. HBV's polymerase: completes the partial dsDNA, host RNA pol makes mRNA, then REVERSE TRANSCRIBES RNA → DNA. SEROLOGY: HBsAg = infection; anti-HBs = immunity; IgM anti-HBc = acute (and the WINDOW's sole ⊕); HBeAg = replication + high transmissibility (not in the virion); anti-HBe = low transmissibility. PATTERNS: window = IgM anti-HBc alone; immunized = anti-HBs alone; chronic high = HBsAg + HBeAg + IgG anti-HBc; chronic low = HBsAg + anti-HBe + IgG anti-HBc. EXTRAHEPATIC: HBV = aplastic anemia, membranous GN, POLYARTERITIS NODOSA; HCV = cryoglobulinemia + B-cell NHL + ITP, MPGN, leukocytoclastic vasculitis, porphyria cutanea tarda + lichen planus, diabetes + autoimmune hypothyroidism.",
  },
  mechanisms: [
    {
      id: "enteric-parenteral-axis",
      title: "The enteric-parenteral axis: envelope logic names the course",
      context: "The naked vowels against the blood-borne trio, with the two exceptions",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A patient with fever, jaundice, and ↑ ALT/AST — which hepatitis, and what happens next?",
            sublabel: "Input — the shared signature opens every stem.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE ENTERIC PAIR — HAV and HEV: NAKED viruses (no envelope), not destroyed by the gut → FECAL-ORAL spread (HAV: shellfish, travelers, day care; HEV: especially WATERBORNE, epidemic in Asia, Africa, the Middle East). Both: SHORT incubation (weeks), acute courses, NO HCC risk, NO carrier state. HAV is self-limiting in adults and asymptomatic in children; HEV is the exception's exception — FULMINANT with HIGH MORTALITY in EXPECTANT (pregnant) patients",
            sublabel: "Process — no envelope means the gut cannot kill them; no integration means no cancer.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE PARENTERAL TRIO — HBV, HCV, HDV: enveloped, blood-borne and beyond (HBV: parenteral/sexual/perinatal; HCV: primarily blood — injection drug use, posttransfusion; HDV: parenteral/sexual/perinatal). LONG incubations (months), chronicity (HCV: the majority develop stable chronic hepatitis; HBV: carrier state common, neonates worse than adults), HCC risk YES for all three",
            sublabel: "Process — envelope plus bloodstream equals persistence.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE PERSISTENCE MECHANISMS: HBV's DNA polymerase has DNA- AND RNA-dependent activities — it completes the partial dsDNA in the nucleus, host RNA polymerase makes the viral mRNAs, and the polymerase reverse transcribes RNA back to DNA (a hepadnavirus that behaves half like a retrovirus). HCV lacks 3′-5′ EXONUCLEASE activity → no proofreading → antigenic variation of envelope proteins, with antibody production always lagging behind the mutant strains — the engine of its chronicity",
            sublabel: "Process — one virus copies carefully in the nucleus; the other mutates faster than the immune system.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the biopsy and carrier anchors: HAV — hepatocyte swelling, monocyte infiltration, Councilman bodies A, no carrier; HBV — ground-glass hepatocytes (surface-antogen accumulation) with cytotoxic T-cell damage, carrier common; HCV — lymphoid aggregates with macrovesicular steatosis, carrier very common; HDV — defective, borrowing the HBV HBsAg coat (superinfection short/worse, coinfection long); HEV — patchy necrosis, no carrier",
            sublabel: "Output — the grid closes on histology and carriage.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "naked = enteric" },
          { from: "s1", to: "s2", label: "enveloped = parenteral" },
          { from: "s2", to: "s3", label: "the persistence engines" },
          { from: "s3", to: "o1", label: "biopsy + carriers" },
        ],
      },
    },
    {
      id: "serology-clock-logic",
      title: "The serology clock: what each marker means and when it appears",
      context: "The eight markers, the window period, and the seven patterns",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A hepatitis B serology panel arrives — read it",
            sublabel: "Input — the panel question.",
            variant: "input",
          },
          {
            id: "s1",
            label: "THE MARKER SET: HBsAg = the surface antigen, infection present. Anti-HBs = immunity (vaccination or recovery). HBcAg = the core antigen (not routinely measured). ANTI-HBc: IgM = acute or recent infection; IgG = prior exposure or chronic infection — and IgM anti-HBc may be the SOLE ⊕ marker during the WINDOW PERIOD. HBeAg = secreted by infected hepatocytes, NOT part of the mature virion — active replication, HIGH transmissibility, poorer prognosis. Anti-HBe = low transmissibility",
            sublabel: "Process — surface for infection, core for timing, e for transmissibility.",
            variant: "process",
          },
          {
            id: "s2",
            label: "THE CLOCK: INCUBATION (HBsAg rises first) → ACUTE infection (HBsAg ⊕, HBeAg ⊕, IgM anti-HBc ⊕, serum-sickness-like onset) → WINDOW (HBsAg has fallen, anti-HBs not yet risen — IgM anti-HBc alone ⊕) → RECOVERY (anti-HBs rises and stays, IgG anti-HBc, anti-HBe)",
            sublabel: "Process — the window is the gap between surface antigen falling and surface antibody rising.",
            variant: "process",
          },
          {
            id: "s3",
            label: "THE PATTERNS: acute = HBsAg + HBeAg + IgM anti-HBc. Window = IgM anti-HBc alone. Recovery = anti-HBs + IgG anti-HBc + anti-HBe. Chronic HIGH infectivity = HBsAg + HBeAg + IgG anti-HBc. Chronic LOW infectivity = HBsAg + anti-HBe + IgG anti-HBc. IMMUNIZED = anti-HBs ALONE (vaccination contains surface antigen only — no core, no e)",
            sublabel: "Process — each scenario is a unique combination on the same five-marker grid.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the extrahepatic reading: HBV goes systemic as aplastic anemia, membranous GN, and POLYARTERITIS NODOSA; HCV as essential mixed cryoglobulinemia with B-cell NHL, ITP, and autoimmune hemolytic anemia, membranoproliferative GN, LEUKOCYTOCLASTIC VASCULITIS, porphyria cutanea tarda with lichen planus, and diabetes with autoimmune hypothyroidism",
            sublabel: "Output — the panel plus the systems = the full diagnosis.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "name the markers" },
          { from: "s1", to: "s2", label: "run the clock" },
          { from: "s2", to: "s3", label: "match the pattern" },
          { from: "s3", to: "o1", label: "check the systems" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "hepatitis-serology-map",
      title: "The five-virus grid + the serology clock",
      caption:
        "An original KYP redraw of the source's two-page block (books 170-171): the HBV-polymerase/HCV-escape mechanism strip, the 5-virus comparison grid, the ORIGINAL serology timeline redraw (incubation → acute → window → recovery with the five marker curves), the 7-scenario serology patterns table, and the extrahepatic B-vs-C panel.",
      notice:
        "The printed Councilman-bodies histology A is raster, COPYRIGHTED, described-in-text only. The source's pattern table prints its ⊕/⊝ marks as seventeen tiny raster images — redrawn here as text marks. The source's own column-header typos 'INCUCATION' and 'LIVER CIOPSY' print on book 170 (missing 'B's — documented). FA's printed gloss ('the vowels hit your bowels') stays in the table block, verification-only.",
    },
    {
      kind: "table",
      title: "The five hepatitis viruses — verbatim",
      intro:
        "The source's comparison table and intro lines (book 170), verbatim.",
      columns: ["Virus", "Content (verbatim)"],
      rows: [
        [
          "Intro (shared + mechanisms)",
          "Signs and symptoms of all hepatitis viruses: episodes of fever, jaundice, ↑ ALT and AST. NAkEd viruses (HAV and HEV) lack an envelope and are not destroyed by the gut: the vowels hit your bowels. [FA gloss, printed — verification-only.] HBV DNA polymerase has DNA- and RNA-dependent activities. Upon entry into nucleus, the polymerase completes the partial dsDNA. Host RNA polymerase transcribes mRNA from viral DNA to make viral proteins. The DNA polymerase then reverse transcribes viral RNA to DNA. HCV lacks 3′-5′ exonuclease activity → no proofreading ability → antigenic variation of HCV envelope proteins. Host antibody production lags behind production of new mutant strains of HCV.",
        ],
        [
          "HAV",
          "FAMILY: RNA picornavirus. TRANSMISSION: Fecal-oral (shellfish, travelers, day care). INCUBATION [printed as 'INCUCATION' — the source's own typo]: Short (weeks). CLINICAL COURSE: Acute and self limiting (adults), Asymptomatic (children). PROGNOSIS: Good. HCC RISK: No. LIVER BIOPSY [printed as 'LIVER CIOPSY' — the source's own typo]: Hepatocyte swelling, monocyte infiltration, Councilman bodies A (printed histology — described-in-text only). NOTES: Absent (no) carrier state.",
        ],
        [
          "HBV",
          "FAMILY: DNA hepadnavirus. TRANSMISSION: Parenteral (Blood), sexual (Bedroom), perinatal (Birthing). INCUBATION: Long (months). CLINICAL COURSE: Initially like serum sickness (fever, arthralgias, rash); may progress to carcinoma. PROGNOSIS: Adults → mostly full resolution; neonates → worse prognosis. HCC RISK: Yes. LIVER BIOPSY: Granular eosinophilic “ground glass” appearance due to accumulation of surface antigen within infected hepatocytes; cytotoxic T cells mediate damage. NOTES: Carrier state common.",
        ],
        [
          "HCV",
          "FAMILY: RNA flavivirus. TRANSMISSION: Primarily blood (injection drug use, posttransfusion). INCUBATION: Long. CLINICAL COURSE: May progress to Cirrhosis or Carcinoma. PROGNOSIS: Majority develop stable, Chronic hepatitis C. HCC RISK: Yes. LIVER BIOPSY: Lymphoid aggregates with focal areas of macrovesicular steatosis. NOTES: Carrier state very common.",
        ],
        [
          "HDV",
          "FAMILY: RNA deltavirus. TRANSMISSION: Parenteral, sexual, perinatal. INCUBATION: Superinfection (HDV after HBV) = short; Coinfection (HDV with HBV) = long. CLINICAL COURSE: Similar to HBV. PROGNOSIS: Superinfection → worse prognosis. HCC RISK: Yes. LIVER BIOPSY: Similar to HBV. NOTES: Defective virus, Depends on HBV HBsAg coat for entry into hepatocytes.",
        ],
        [
          "HEV",
          "FAMILY: RNA hepevirus. TRANSMISSION: Fecal-oral, especially waterborne. INCUBATION: Short. CLINICAL COURSE: Fulminant hepatitis in Expectant (pregnant) patients. PROGNOSIS: High mortality in pregnant patients. HCC RISK: No. LIVER BIOPSY: Patchy necrosis. NOTES: Enteric, Epidemic (eg, in parts of Asia, Africa, Middle East), no carrier state.",
        ],
      ],
      caption:
        "The table reads with the enteric-parenteral mechanism: the naked pair (HAV, HEV) is fecal-oral, short, and carrier-free; the enveloped trio (HBV, HCV, HDV) is parenteral, long, and cancer-capable. The source's own header typos (INCUCATION, LIVER CIOPSY) are carried and marked.",
    },
    {
      kind: "table",
      title: "Serologic markers, patterns, and extrahepatic manifestations — verbatim",
      intro: "The source's book-171 blocks, verbatim.",
      columns: ["Block", "Content (verbatim)"],
      rows: [
        [
          "Hepatitis serologic markers",
          "Anti-HAV (IgM): IgM antibody to HAV; best test to detect acute hepatitis A. Anti-HAV (IgG): IgG antibody indicates prior HAV infection and/or prior vaccination; protects against reinfection. HBsAg: Antigen found on surface of HBV; indicates hepatitis B infection. Anti-HBs: Antibody to HBsAg; indicates immunity to hepatitis B due to vaccination or recovery from infection. HBcAg: Antigen associated with core of HBV. Anti-HBc: Antibody to HBcAg; IgM = acute/recent infection; IgG = prior exposure or chronic infection. IgM anti-HBc may be the sole ⊕ marker of infection during window period. HBeAg: Secreted by infected hepatocyte into circulation. Not part of mature HBV virion. Indicates active viral replication and therefore high transmissibility and poorer prognosis. Anti-HBe: Antibody to HBeAg; indicates low transmissibility.",
        ],
        [
          "The serology patterns (the printed timeline's table)",
          "INCUBATION: HBsAg ⊕, others ⊝. ACUTE infection (IgM): HBsAg ⊕, HBeAg ⊕, anti-HBc IgM ⊕. WINDOW (IgM): anti-HBc IgM ⊕ alone. RECOVERY (IgG): anti-HBs ⊕, anti-HBc IgG ⊕, anti-HBe ⊕. CHRONIC infection, high infectivity (IgG): HBsAg ⊕, HBeAg ⊕, anti-HBc IgG ⊕. CHRONIC infection, low infectivity (IgG): HBsAg ⊕, anti-HBe ⊕, anti-HBc IgG ⊕. IMMUNIZED: anti-HBs ⊕ alone (the vaccine contains HBsAg only).",
        ],
        [
          "Extrahepatic manifestations of hepatitis B and C",
          "HEMATOLOGIC: Hepatitis B — aplastic anemia. Hepatitis C — essential mixed cryoglobulinemia, ↑ risk B-cell NHL, ITP, autoimmune hemolytic anemia. RENAL: Hepatitis B — membranous GN > membranoproliferative GN. Hepatitis C — membranoproliferative GN > membranous GN. VASCULAR: Hepatitis B — polyarteritis nodosa. Hepatitis C — leukocytoclastic vasculitis. DERMATOLOGIC: Hepatitis C — sporadic porphyria cutanea tarda, lichen planus. ENDOCRINE: Hepatitis C — ↑ risk of diabetes mellitus, autoimmune hypothyroidism.",
        ],
      ],
      caption:
        "The blocks read with the serology-clock mechanism: the markers name the phase, the patterns name the scenario, and the extrahepatic table splits B from C by system.",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The protocols the grid and clock imply",
      body: "THE PLACEMENT PROTOCOL: fecal-oral exposure (shellfish, travel, day care, bad water) = HAV or HEV (naked, acute, no HCC, no carrier); blood, sex, or birth exposure = HBV, HCV, or HDV (enveloped, long, chronic-capable, HCC yes). THE PREGNANCY PROTOCOL: a pregnant patient with waterborne-exposure hepatitis is the HEV emergency — fulminant course, high mortality; delivery of supportive care and monitoring are the response. THE HDV PROTOCOL: HBsAg ⊕ with a sudden severe flare = HDV SUPERINFECTION (short, worse prognosis); simultaneous acquisition = COINFECTION (long). HDV borrows the HBV HBsAg coat — no HBV, no HDV. THE SEROLOGY PROTOCOL: HBsAg = infection; anti-HBs = immunity; IgM anti-HBc = acute — and alone = the WINDOW; HBeAg = high transmissibility (not part of the virion); anti-HBe = low transmissibility; anti-HBs ALONE = immunized (the vaccine is surface antigen only). THE CHRONICITY PROTOCOL: HCV's missing proofreading (no 3′-5′ exonuclease) means antigenic variation outruns antibody — the majority develop chronic hepatitis C with cirrhosis and carcinoma risk; screen the systems (cryoglobulinemia, MPGN, leukocytoclastic vasculitis, porphyria cutanea tarda, lichen planus, diabetes, thyroid). THE NEONATE PROTOCOL: perinatal HBV gives neonates the WORSE prognosis (adults mostly resolve) — the reason for the birth-dose vaccine and immunoglobulin.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 26-year-old pregnant woman in her third trimester returns from rural South Asia with 5 days of jaundice, vomiting, and confusion; her ALT is 2,400 U/L and her INR is 3.1; she reports drinking from a local well.",
        discriminator: "Pregnancy + waterborne exposure + fulminant course",
        concept: "HEV — fulminant hepatitis in pregnancy",
        answer:
          "HEV is an RNA hepevirus transmitted fecal-oral, especially waterborne, endemic and epidemic in parts of Asia, Africa, and the Middle East. Ordinarily a short, acute illness, it causes FULMINANT hepatitis in EXPECTANT (pregnant) patients with HIGH mortality — the pregnancy exception on the enteric vowel pair. Biopsy would show patchy necrosis; there is no carrier state and no HCC risk.",
      },
      {
        stem: "A needle-stick victim's baseline panel shows HBsAg negative, anti-HBs negative, IgM anti-HBc positive; repeat serology 6 weeks later shows HBsAg negative and anti-HBs rising.",
        discriminator: "HBsAg negative with IgM anti-HBc positive",
        concept: "The window period — IgM anti-HBc as the sole positive marker",
        answer:
          "During the HBV window period, HBsAg has fallen below detection while anti-HBs has not yet risen — IgM anti-HBc may be the SOLE ⊕ marker of infection. Anti-HBc IgM indicates acute or recent infection; IgG indicates prior exposure or chronic infection. Recovery follows: anti-HBs rises with IgG anti-HBc and anti-HBe.",
      },
      {
        stem: "A 34-year-old with chronic hepatitis B presents with new palpable purpura, hypertension, and neuropathy; biopsy of a medium-sized muscular artery shows transmural inflammation.",
        discriminator: "Chronic HBV + medium-vessel vasculitis",
        concept: "Polyarteritis nodosa — HBV's extrahepatic signature",
        answer:
          "HBV's extrahepatic set: hematologic — aplastic anemia; renal — membranous GN > membranoproliferative GN; vascular — POLYARTERITIS NODOSA (the medium-vessel vasculitis). Contrast HCV: essential mixed cryoglobulinemia with ↑ B-cell NHL risk, ITP, autoimmune hemolytic anemia; membranoproliferative GN > membranous; leukocytoclastic vasculitis; porphyria cutanea tarda and lichen planus; diabetes and autoimmune hypothyroidism.",
      },
    ],
    traps: [
      {
        a: "A negative HBsAg excludes hepatitis B infection",
        b: "During the WINDOW PERIOD, HBsAg is negative and IgM anti-HBc may be the SOLE ⊕ marker — HBsAg has fallen while anti-HBs has not yet risen",
        whyConfused: "Surface antigen feels like the definitive test.",
        keyDifference:
          "The clock: HBsAg rises first (incubation), peaks in acute infection, falls into the window, and is replaced by anti-HBs in recovery. The window's single positive is IgM anti-HBc — the core antibody appears early and bridges the gap. Anti-HBs ALONE, by contrast, means immunization (the vaccine contains surface antigen only).",
        clue: "Any serology-panel interpretation stem.",
      },
      {
        a: "HEV is a mild illness like HAV in every population",
        b: "HEV is FULMINANT with HIGH MORTALITY in EXPECTANT (pregnant) patients — the vowel pair's one emergency",
        whyConfused: "Both are fecal-oral, naked, short-incubation viruses.",
        keyDifference:
          "The enteric pair shares transmission and course EXCEPT in pregnancy: HAV stays self-limiting (good prognosis, asymptomatic children), while HEV in pregnancy is the fulminant, high-mortality scenario. Waterborne exposure and Asia/Africa/Middle East geography point to HEV.",
        clue: "Any pregnancy-plus-hepatitis stem.",
      },
      {
        a: "HBeAg is part of the mature HBV virion",
        b: "HBeAg is SECRETED by infected hepatocytes into the circulation and is NOT part of the mature virion — it indicates active replication, high transmissibility, and poorer prognosis",
        whyConfused: "Its name parallels HBsAg and HBcAg, which are virion components.",
        keyDifference:
          "The e antigen is a soluble marker of replication, not a structural protein: its presence means high infectivity (chronic high-infectivity pattern: HBsAg ⊕ + HBeAg ⊕ + IgG anti-HBc), and anti-HBe marks the low-transmissibility state. HBsAg = infection; HBeAg = replication; anti-HBs = immunity.",
        clue: "Any transmissibility-or-prognosis serology question.",
      },
    ],
    pivots: [
      {
        lookAlike: "HBV vs HCV extrahepatic disease",
        differentiator: "The GN order and the vasculitis type",
        correctPath:
          "HBV: aplastic anemia · membranous GN > membranoproliferative GN · POLYARTERITIS NODOSA. HCV: essential mixed cryoglobulinemia + ↑ B-cell NHL + ITP + autoimmune hemolytic anemia · membranoproliferative GN > membranous GN · LEUKOCYTOCLASTIC VASCULITIS · porphyria cutanea tarda + lichen planus · diabetes + autoimmune hypothyroidism.",
      },
      {
        lookAlike: "HDV superinfection vs coinfection",
        differentiator: "The timing and the prognosis",
        correctPath:
          "SUPERINFECTION (HDV after established HBV): SHORT incubation, a sudden severe flare, WORSE prognosis. COINFECTION (HDV and HBV acquired together): LONG incubation, a course similar to acute HBV. Both depend on the HBV HBsAg coat for hepatocyte entry — the defective-virus logic (M22's complementation).",
      },
    ],
    miniCase: {
      vignette:
        "A 22-year-old man presents with 10 days of fatigue, anorexia, and scleral icterus. He uses intravenous drugs and shares needles. Exam shows tender hepatomegaly. ALT is 1,850 U/L, AST 1,400 U/L, total bilirubin 8.2 mg/dL. Hepatitis serology returns: HBsAg negative, hepatitis B surface antibody (anti-HBs) negative, IgM anti-HBc positive, HBeAg negative. HAV IgM and HEV IgM are negative.",
      question:
        "Which best explains this serologic pattern?",
      options: [
        {
          label: "A",
          text: "Acute hepatitis B in the window period — IgM anti-HBc as the sole positive marker",
          correct: true,
          why: "Correct. The patient has acute hepatitis (massive transaminase elevation with jaundice) acquired through injection drug use. HBsAg has already fallen below the level of detection while anti-HBs has not yet risen — the WINDOW PERIOD, in which IgM anti-HBc may be the sole ⊕ marker. The IgM isotype establishes acute or recent infection. Anti-HBs will rise later, marking recovery.",
        },
        {
          label: "B",
          text: "Recovered hepatitis B with immunity",
          why: "Recovery requires anti-HBs ⊕ with IgG anti-HBc (and typically anti-HBe) — surface antibody present, not absent. This panel shows no immunity and an IgM, not IgG, core antibody.",
        },
        {
          label: "C",
          text: "Prior vaccination against hepatitis B",
          why: "The vaccine contains HBsAg only, so immunization yields anti-HBs ALONE — no core antibody at all. This patient has IgM anti-HBc positive, which vaccination never produces.",
        },
        {
          label: "D",
          text: "Chronic hepatitis B with high infectivity",
          why: "The chronic high-infectivity pattern is HBsAg ⊕ + HBeAg ⊕ + IgG anti-HBc — surface antigen present, e antigen present, and the CORE antibody is IgG, not IgM. This panel's negative HBsAg and IgM isotype place it in the acute window.",
        },
        {
          label: "E",
          text: "Acute hepatitis C",
          why: "HCV serology (anti-HCV) is its own test; the panel here is entirely hepatitis B markers, and the IgM anti-HBc is diagnostic of acute HBV. HCV commonly coinfects injection drug users and must be checked separately — but it does not explain these markers.",
        },
      ],
      reasoning:
        "The vignette stacks the window-period identifiers: acute hepatitis chemistry (ALT in the thousands with jaundice), an injection-drug-use route, and the gap pattern — HBsAg negative, anti-HBs negative, IgM anti-HBc positive. The clock explains the gap: surface antigen fell, surface antibody has not risen, and the IgM core antibody bridges the window alone. Each distractor substitutes another pattern (recovery, immunization, chronic high infectivity) or the wrong virus's test.",
    },
  },
  mnemonics: [
    {
      code: "“The vowels go through the bowels; the consonants ride the blood.”",
      meaning:
        "KYP's key for the transmission axis: HAV and HEV — the vowel initials — are the NAKED, enteric pair (fecal-oral; HAV by shellfish, travel, and day care; HEV especially WATERBORNE), short-incubation, acute, carrier-free, and cancer-free. HBV, HCV, HDV — the consonant trio — are enveloped and parenteral (Blood, Bedroom, Birthing for HBV; injection-drug and transfusion blood for HCV), long-incubation, chronic-capable, and HCC-capable. The one emergency: HEV in pregnancy — fulminant, high mortality.",
      memorizes: "The enteric-parenteral split",
      whenToUse: "Any hepatitis exposure or prognosis question.",
      clinical: "Ask what was consumed (water/food vs blood/sex/birth) and whether the patient is pregnant.",
    },
    {
      code: "“Surface = infection, core = timing, e = transmissibility.”",
      meaning:
        "KYP's key for the marker set: HBsAg (surface) says the infection is present; anti-HBs says immunity (vaccine or recovery — ALONE if immunized, since the vaccine is surface antigen only). Anti-HBc is the clock: IgM = acute or recent (and the WINDOW's sole ⊕), IgG = prior or chronic. HBeAg — secreted, NOT part of the virion — says active replication with high transmissibility and poorer prognosis; anti-HBe says low transmissibility.",
      memorizes: "The serologic markers",
      whenToUse: "Any hepatitis B panel.",
      clinical: "Read surface first, core for phase, e for infectivity.",
    },
    {
      code: "“B breaks the arteries; C clumps the immune system.”",
      meaning:
        "KYP's key for the extrahepatic split: HEPATITIS B — aplastic anemia, membranous GN (over MPGN), and POLYARTERITIS NODOSA, the medium-vessel arteritis. HEPATITIS C — the immune-complex cluster: essential mixed CRYOGLOBULINEMIA with ↑ B-cell NHL, ITP, autoimmune hemolytic anemia, MPGN (over membranous), LEUKOCYTOCLASTIC VASCULITIS, plus porphyria cutanea tarda, lichen planus, diabetes, and autoimmune hypothyroidism.",
      memorizes: "The B-vs-C extrahepatic manifestations",
      whenToUse: "Any multisystem presentation with liver disease.",
      clinical: "PAN points to B; cryoglobulins point to C.",
    },
  ],
  rapidReview: {
    s30: [
      "All hepatitis viruses: fever, jaundice, ↑ ALT and AST",
      "HAV: picorna, fecal-oral (shellfish/travel/day care), weeks, acute self-limited (asymptomatic children), good, no HCC, Councilman bodies, no carrier",
      "HEV: hepe, fecal-oral waterborne, weeks, FULMINANT IN PREGNANCY with high mortality, no HCC, patchy necrosis, no carrier",
      "HBV: hepadna, Blood-Bedroom-Birthing, months, serum-sickness onset; adults resolve, neonates worse; HCC yes; ground-glass + cytotoxic T cells; carrier common",
      "HCV: flavi, injection drug use/posttransfusion, months; majority CHRONIC; cirrhosis/carcinoma; HCC yes; lymphoid aggregates + macrovesicular steatosis; carrier very common",
    ],
    m3: [
      "HDV: defective — depends on the HBV HBsAg coat; SUPERINFECTION (after HBV) = short + worse; COINFECTION (with HBV) = long",
      "HBV polymerase: DNA- and RNA-dependent; completes partial dsDNA; host RNA pol makes mRNA; reverse transcribes RNA → DNA",
      "HCV: no 3′-5′ exonuclease → no proofreading → antigenic variation; antibody lags behind mutants",
      "Window period: HBsAg ⊝, anti-HBs ⊝, IgM anti-HBc ⊕ (the sole positive); immunized = anti-HBs ALONE",
      "HBeAg: secreted, not in the virion; active replication, high transmissibility, poorer prognosis; anti-HBe = low transmissibility",
    ],
    m10: [
      "Extrahepatic HBV: aplastic anemia · membranous GN > MPGN · polyarteritis nodosa",
      "Extrahepatic HCV: cryoglobulinemia + B-cell NHL + ITP + AIHA · MPGN > membranous · leukocytoclastic vasculitis · porphyria cutanea tarda + lichen planus · diabetes + autoimmune hypothyroidism",
      "The source's own header typos print on book 170: 'INCUCATION' and 'LIVER CIOPSY' (missing B's) — documented",
      "The patterns table's ⊕/⊝ marks print as 17 tiny raster images on book 171 — redrawn as text marks in the visual",
      "FA's printed gloss ('the vowels hit your bowels') is quoted in the table block for verification only — KYP's key is in the mnemonics block",
    ],
  },
  recall: [
    {
      q: "Walk the five hepatitis viruses: family, transmission, incubation, course, and carrier state.",
      a: "HAV (RNA picornavirus; fecal-oral — shellfish, travelers, day care; weeks; acute self-limiting in adults, asymptomatic in children; no carrier). HBV (DNA hepadnavirus; parenteral/sexual/perinatal; months; serum-sickness onset, carcinoma possible — adults resolve, neonates worse; carrier common). HCV (RNA flavivirus; primarily blood — injection drug use, posttransfusion; long; cirrhosis/carcinoma, the majority chronic; carrier very common). HDV (RNA deltavirus; parenteral/sexual/perinatal; superinfection after HBV = short, coinfection with HBV = long; similar to HBV with superinfection worse; defective — depends on the HBV HBsAg coat). HEV (RNA hepevirus; fecal-oral, especially waterborne; weeks; FULMINANT in pregnancy with high mortality; no carrier).",
    },
    {
      q: "Give the HBV polymerase and HCV proofreading mechanisms.",
      a: "HBV: the DNA polymerase has DNA- AND RNA-dependent activities — upon nuclear entry it completes the partial dsDNA; host RNA polymerase transcribes mRNA from viral DNA for viral proteins; the DNA polymerase then reverse transcribes viral RNA to DNA. HCV: lacks 3′-5′ exonuclease activity → no proofreading ability → antigenic variation of envelope proteins, with host antibody production lagging behind the new mutant strains — the mechanism of its chronicity.",
    },
    {
      q: "Read the eight serologic markers and the seven patterns.",
      a: "MARKERS: anti-HAV IgM = acute A (best test); anti-HAV IgG = prior infection/vaccination (protects). HBsAg = infection; anti-HBs = immunity (vaccination or recovery); HBcAg = core antigen; anti-HBc IgM = acute/recent, IgG = prior/chronic — IgM may be the sole ⊕ in the window; HBeAg = secreted (not in the virion), active replication, high transmissibility, worse prognosis; anti-HBe = low transmissibility. PATTERNS: incubation HBsAg ⊕; acute = HBsAg + HBeAg + IgM anti-HBc; window = IgM anti-HBc alone; recovery = anti-HBs + IgG anti-HBc + anti-HBe; chronic high = HBsAg + HBeAg + IgG anti-HBc; chronic low = HBsAg + anti-HBe + IgG anti-HBc; immunized = anti-HBs alone.",
    },
    {
      q: "List the extrahepatic manifestations of hepatitis B and C by system.",
      a: "HEPATOLOGIC (shared): fever, jaundice, ↑ ALT/AST. HEMATOLOGIC: HBV — aplastic anemia; HCV — essential mixed cryoglobulinemia, ↑ B-cell NHL, ITP, autoimmune hemolytic anemia. RENAL: HBV — membranous GN > membranoproliferative; HCV — membranoproliferative > membranous. VASCULAR: HBV — polyarteritis nodosa; HCV — leukocytoclastic vasculitis. DERMATOLOGIC: HCV — sporadic porphyria cutanea tarda, lichen planus. ENDOCRINE: HCV — ↑ diabetes risk, autoimmune hypothyroidism.",
    },
    {
      q: "Explain the liver biopsy findings for each virus.",
      a: "HAV — hepatocyte swelling, monocyte infiltration, Councilman bodies A (eosinophilic apoptotic globules). HBV — granular eosinophilic 'ground glass' appearance from accumulation of surface antigen within infected hepatocytes; cytotoxic T cells mediate the damage. HCV — lymphoid aggregates with focal areas of macrovesicular steatosis. HDV — similar to HBV. HEV — patchy necrosis.",
    },
  ],
  related: [
    {
      title: "Viral Structure & Genetics",
      topicId: "viral-structure-genetics",
      note: "M22's complementation mechanism (HDV borrowing HBsAg from replicating HBV) is the defective-virus logic this note places in the hepatitis grid — and the hepadnavirus reverse transcriptase extends M22's retrovirus-versus-hepadna distinction.",
    },
    {
      title: "RNA Viruses: Families & Disease Map",
      topicId: "rna-viruses",
      note: "M24's picornavirus, flavivirus, and hepevirus rows are HAV, HCV, and HEV's family slots — the hepatitis grid is where those families become liver disease; HBV stands apart as the one DNA virus of the five.",
    },
    {
      title: "Autoantibodies",
      topicId: "autoantibodies",
      note: "E35's antibody directory meets this note's immune-complex set: HCV's essential mixed cryoglobulinemia, ITP, and autoimmune hemolytic anemia are the infection-driven autoimmune anchors.",
    },
  ],
  crossLinks: [
    {
      subject: "Gastroenterology (Liver Injury Pattern)",
      connection:
        "The ALT/AST signature with jaundice is the hepatology chapter's shared opening; the biopsy findings (Councilman bodies, ground-glass hepatocytes, steatosis, patchy necrosis) are the histology anchors that separate the five viruses.",
    },
    {
      subject: "Nephrology (Glomerulonephritis)",
      connection:
        "HBV's membranous GN and HCV's membranoproliferative GN are the infection-associated glomerular diseases — the renal differential's viral rows, ordered oppositely for B and C.",
    },
    {
      subject: "Rheumatology (Vasculitis)",
      connection:
        "Polyarteritis nodosa (HBV) and leukocytoclastic vasculitis with cryoglobulinemia (HCV) are the hepatitis viruses' vasculitis anchors — medium-vessel disease points to B, immune-complex small-vessel disease to C.",
    },
    {
      subject: "Hematology-Oncology (B-Cell Malignancy)",
      connection:
        "HCV's ↑ B-cell NHL risk and ITP, and HBV's aplastic anemia, are the hematologic extrahepatic anchors — liver disease presenting as a blood problem.",
    },
  ],
};
