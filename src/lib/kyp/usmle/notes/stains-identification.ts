import type { KypUsMLENote } from "../types";

// Microbiology — Basic Bacteriology banner (M-batch 2).
// Source: First Aid 2026, Part 1 pdf 145 / book 123
// (Stains: the Gram stain definition + the poor-stainer block + the
//  special-stain roster: Giemsa, PAS, Ziehl-Neelsen, India ink, Silver,
//  Fluorescent antibody)

export const stainsIdentification: KypUsMLENote = {
  id: "stains-identification",
  title: "Stains & Difficult-to-Stain Organisms",
  subtitle:
    "The gram stain is the first-line lab test in bacterial identification: bacteria with a thick peptidoglycan layer retain the crystal violet dye (gram positive); bacteria with a thin peptidoglycan layer turn red or pink with the counterstain (gram negative). But four groups do not gram stain well: Treponema and Leptospira are too thin to be visualized; Mycobacteria have a cell wall with high lipid content; Mycoplasma and Ureaplasma have no cell wall; and Legionella, Rickettsia, Chlamydia, Bartonella, Anaplasma, and Ehrlichia are primarily intracellular — Chlamydia also lack classic peptidoglycan because of deficient muramic acid. For these and the structures the gram stain cannot read, the special stains take over: Giemsa (H pylori, Chlamydia, Borrelia, Rickettsia, Trypanosomes, Plasmodium), periodic acid–Schiff (glycogen and mucopolysaccharides — Whipple disease, Tropheryma whipplei), Ziehl-Neelsen/carbol fuchsin (acid-fast bacteria — Mycobacteria, Nocardia; stains mycolic acid in the cell wall — and Cryptosporidium oocysts; auramine-rhodamine is more often used for screening, inexpensive and more sensitive), India ink (Cryptococcus neoformans; mucicarmine can also stain the thick polysaccharide capsule red), silver (Helicobacter pylori, Legionella, Bartonella henselae, and the fungi — Coccidioides, Pneumocystis jirovecii, Aspergillus fumigatus), and fluorescent antibody (many bacteria, viruses, Pneumocystis jirovecii, Giardia, and Cryptosporidium — FTA-ABS for syphilis).",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Basic Bacteriology",
  pilotCategory:
    "Basic bacteriology — stains: gram stain mechanics and its four failure modes; the special-stain roster (Giemsa, PAS, Ziehl-Neelsen/auramine-rhodamine, India ink/mucicarmine, silver, fluorescent antibody) and the structures each one reads",
  difficulty: 1,
  readTime: 7,
  sourceRef: "First Aid 2026, Part 1 pp. 123–123 (Stains)",
  tags: [
    "stains",
    "gram stain",
    "crystal violet",
    "counterstain",
    "gram positive",
    "gram negative",
    "peptidoglycan layer",
    "poor stainers",
    "Treponema",
    "Leptospira",
    "too thin to be visualized",
    "Mycobacteria",
    "high lipid content",
    "mycolic acid",
    "Mycoplasma",
    "Ureaplasma",
    "no cell wall",
    "Legionella",
    "Rickettsia",
    "Chlamydia",
    "Bartonella",
    "Anaplasma",
    "Ehrlichia",
    "intracellular",
    "muramic acid",
    "Giemsa",
    "H pylori",
    "Borrelia",
    "Trypanosomes",
    "Plasmodium",
    "periodic acid-Schiff",
    "PAS",
    "glycogen",
    "mucopolysaccharides",
    "Whipple disease",
    "Tropheryma whipplei",
    "Ziehl-Neelsen",
    "carbol fuchsin",
    "acid-fast",
    "Nocardia",
    "Cryptosporidium oocysts",
    "auramine-rhodamine",
    "India ink",
    "Cryptococcus neoformans",
    "mucicarmine",
    "capsule",
    "silver stain",
    "Bartonella henselae",
    "fungi",
    "Coccidioides",
    "Pneumocystis jirovecii",
    "Aspergillus fumigatus",
    "fluorescent antibody",
    "FTA-ABS",
    "syphilis",
    "Giardia",
  ],
  core: {
    what: "GRAM STAIN: first-line lab test in bacterial identification — bacteria with thick peptidoglycan layer retain crystal violet dye (gram ⊕); bacteria with thin peptidoglycan layer turn red or pink (gram ⊝) with counterstain. FOUR GROUPS DO NOT GRAM STAIN WELL: Treponema, Leptospira (too thin to be visualized); Mycobacteria (cell wall has high lipid content); Mycoplasma, Ureaplasma (no cell wall); Legionella, Rickettsia, Chlamydia, Bartonella, Anaplasma, Ehrlichia (primarily intracellular; Chlamydia also lack classic peptidoglycan because of deficient muramic acid). GIEMSA: H pylori, Chlamydia, Borrelia, Rickettsia, Trypanosomes, Plasmodium. PERIODIC ACID–SCHIFF: stains glycogen, mucopolysaccharides; used to diagnose Whipple disease (Tropheryma whipplei). ZIEHL-NEELSEN (carbol fuchsin): acid-fast bacteria (eg, Mycobacteria, Nocardia — stains mycolic acid in cell wall); protozoa (eg, Cryptosporidium oocysts); auramine-rhodamine is more often used for screening (inexpensive, more sensitive). INDIA INK: Cryptococcus neoformans; mucicarmine can also be used to stain the thick polysaccharide capsule red. SILVER: Helicobacter pylori, Legionella, Bartonella henselae, and fungi (eg, Coccidioides, Pneumocystis jirovecii, Aspergillus fumigatus). FLUORESCENT ANTIBODY: used to identify many bacteria, viruses, Pneumocystis jirovecii, Giardia, and Cryptosporidium; FTA-ABS for syphilis.",
    why: "Every identification question is secretly a structure question: the gram stain reads one structure — peptidoglycan thickness — and every 'poor stainer' is an organism whose anatomy defeats that readout (a spirochete thinner than the readout, a mycolic-acid wall that refuses the dye, no wall at all, or life inside cells where the stain never reaches). The special stains are each a workaround aimed at a different structure: Ziehl-Neelsen at the mycolic-acid wall (the very lipid that made the gram stain fail), PAS at glycogen and mucopolysaccharides (Whipple's foamy macrophages), India ink at the capsule (Cryptococcus's halo), silver at the wall-less fungi and the fastidious bacteria, fluorescent antibody at anything an antibody can be raised against (FTA-ABS). This note is the identification grammar for the entire clinical bacteriology section that follows — every organism entry ahead will name its stain behavior.",
    keyIdea: "Read the wall, then read the workaround. THE GRAM READOUT: thick peptidoglycan retains crystal violet → GRAM ⊕ (purple); thin peptidoglycan releases it and takes the counterstain → GRAM ⊝ (red/pink). THE FOUR FAILURES: too thin (Treponema, Leptospira), too lipid (Mycobacteria — the mycolic-acid wall), no wall (Mycoplasma, Ureaplasma), inside cells (Legionella, Rickettsia, Chlamydia, Bartonella, Anaplasma, Ehrlichia — Chlamydia additionally lack classic peptidoglycan: deficient muramic acid). THE WORKAROUND ROSTER: Giemsa for the intracellular and blood parasites (H pylori, Chlamydia, Borrelia, Rickettsia, Trypanosomes, Plasmodium); PAS for glycogen/mucopolysaccharides (Whipple disease — Tropheryma whipplei); Ziehl-Neelsen (carbol fuchsin) for the acid-fast mycolic-acid wall (Mycobacteria, Nocardia; also Cryptosporidium oocysts) with auramine-rhodamine as the cheaper, more sensitive screen; India ink for the Cryptococcus capsule (mucicarmine stains it red); silver for Helicobacter, Legionella, Bartonella henselae, and the fungi (Coccidioides, Pneumocystis jirovecii, Aspergillus fumigatus); fluorescent antibody for anything antibody-labeled (many bacteria, viruses, PJP, Giardia, Cryptosporidium — FTA-ABS for syphilis).",
  },
  mechanisms: [
    {
      id: "stain-readout-logic",
      title: "The stain reads a structure: gram thickness, then the workarounds",
      context: "From the first-line readout to the special-stain roster",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An unidentified organism must be visualized before it can be classified — the first-line readout is the gram stain",
            sublabel: "Input — the first-line lab test in bacterial identification.",
            variant: "input",
          },
          {
            id: "s1",
            label: "GRAM READOUT: thick peptidoglycan layer retains crystal violet dye → GRAM ⊕ (purple); thin peptidoglycan layer turns red or pink with the counterstain → GRAM ⊝",
            sublabel: "Process — the readout is wall thickness (M1's envelope logic as a lab tool).",
            variant: "process",
          },
          {
            id: "s2",
            label: "FOUR FAILURE MODES: ① too thin to be visualized (Treponema, Leptospira) · ② cell wall high lipid content (Mycobacteria) · ③ no cell wall (Mycoplasma, Ureaplasma) · ④ primarily intracellular (Legionella, Rickettsia, Chlamydia, Bartonella, Anaplasma, Ehrlichia; Chlamydia lack classic peptidoglycan — ↓ muramic acid)",
            sublabel: "Process — when the gram readout fails, the reason is always one of these four anatomies.",
            variant: "process",
          },
          {
            id: "s3",
            label: "WORKAROUND ROSTER: Giemsa (intracellular & parasites) · PAS (glycogen/mucopolysaccharides — Whipple) · Ziehl-Neelsen (mycolic-acid wall — Mycobacteria, Nocardia; Cryptosporidium oocysts; auramine-rhodamine screen) · India ink (Cryptococcus capsule; mucicarmine red) · silver (H pylori, Legionella, Bartonella henselae + fungi) · fluorescent antibody (FTA-ABS et al.)",
            sublabel: "Process — each special stain reads one structure the gram stain cannot.",
            variant: "process",
          },
          {
            id: "o1",
            label: "OUTPUT — the organism is visualized and classified; the stain choice itself becomes diagnostic information (a bug that needed a special stain is already a partial identification)",
            sublabel: "Output — 'no organisms seen on gram stain' is not negative; it is a pointer to the workaround roster.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "first-line" },
          { from: "s1", to: "s2", label: "readout fails" },
          { from: "s2", to: "s3", label: "switch stains" },
          { from: "s3", to: "o1", label: "classified" },
        ],
        caption:
          "The gram stain is a wall-thickness assay wearing the clothes of a dye test: crystal violet is trapped by a thick peptidoglycan mesh (gram positive stays purple), while a thin mesh releases it and the counterstain paints the cell red or pink (gram negative). The four failure modes are the four anatomies that break this assay — a spirochete below the readout's resolution (Treponema, Leptospira), a wall too waxy for the dye (Mycobacteria's mycolic acids), no wall at all (Mycoplasma, Ureaplasma), and life inside host cells where surface dyes do not reach (the Legionella-Rickettsia-Chlamydia-Bartonella-Anaplasma-Ehrlichia set, with Chlamydia additionally lacking classic peptidoglycan because of deficient muramic acid). Each special stain is a targeted workaround: Ziehl-Neelsen's carbol fuchsin drives dye through the mycolic-acid wall that refused the gram stain (and auramine-rhodamine screens the same target more cheaply and sensitively); PAS oxidizes polysaccharides to aldehydes to light up glycogen and mucopolysaccharides (Whipple's macrophages); India ink renders the Cryptococcus capsule as a negative-image halo (mucicarmine stains the same capsule red); silver deposits on the wall-less fungi and the fastidious bacteria that need it; and fluorescent antibody converts identification into an immunology question — FTA-ABS for syphilis is the printed example.",
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "gram-stain-decision-map",
      title: "The gram decision & the special-stain roster",
      caption:
        "An original KYP decision map: the gram readout (thick peptidoglycan retains crystal violet → gram ⊕ purple; thin peptidoglycan takes the red/pink counterstain → gram ⊝), the four poor-stainer failure modes as numbered cards (too thin / high-lipid wall / no wall / intracellular), the six-stain special roster (Giemsa, PAS, Ziehl-Neelsen, India ink, silver, fluorescent antibody) with the auramine-rhodamine screening footnote, and the capsule/mucicarmine note.",
      notice:
        "The five printed micrographs (Trypanosomes, Tropheryma whipplei, Mycobacteria, Cryptococcus neoformans, Coccidioides) are raster photos — COPYRIGHTED, never reproduced; conveyed as descriptions only. FA's printed mnemonics ('These Little Microbes May Unfortunately Lack Real Color But Are Everywhere'; 'Help! Certain Bugs Really Try my Patience'; 'HeLiCoPters Are silver') are NOT reproduced; KYP originals replace them.",
    },
    {
      kind: "table",
      title: "The stains table — verbatim",
      intro: "The source's Stains table (gram stain + poor-stainer block + six special stains), verbatim.",
      columns: ["Stain", "Targets · Notes (verbatim)"],
      rows: [
        ["Gram stain", "First-line lab test in bacterial identification. Bacteria with thick peptidoglycan layer retain crystal violet dye (gram ⊕); bacteria with thin peptidoglycan layer turn red or pink (gram ⊝) with counterstain. These bugs do not Gram stain well: Treponema, Leptospira (too thin to be visualized) · Mycobacteria (cell wall has high lipid content) · Mycoplasma, Ureaplasma (no cell wall) · Legionella, Rickettsia, Chlamydia, Bartonella, Anaplasma, Ehrlichia (primarily intracellular; also, Chlamydia lack classic peptidoglycan because of ↓ muramic acid)."],
        ["Giemsa stain", "H pylori, Chlamydia, Borrelia, Rickettsia, Trypanosomes, Plasmodium."],
        ["Periodic acid–Schiff stain", "Stains glycogen, mucopolysaccharides; used to diagnose Whipple disease (Tropheryma whipplei)."],
        ["Ziehl-Neelsen stain (carbol fuchsin)", "Acid-fast bacteria (eg, Mycobacteria, Nocardia; stains mycolic acid in cell wall); protozoa (eg, Cryptosporidium oocysts). Auramine-rhodamine stain is more often used for screening (inexpensive, more sensitive)."],
        ["India ink stain", "Cryptococcus neoformans; mucicarmine can also be used to stain thick polysaccharide capsule red."],
        ["Silver stain", "Helicobacter pylori, Legionella, Bartonella henselae, and fungi (eg, Coccidioides, Pneumocystis jirovecii, Aspergillus fumigatus)."],
        ["Fluorescent antibody stain", "Used to identify many bacteria, viruses, Pneumocystis jirovecii, Giardia, and Cryptosporidium. Example is FTA-ABS for syphilis."],
      ],
      caption:
        "Read the gram row as the default assay, the poor-stainer list as its four failure modes, and each special row as the workaround keyed to one structure: intracellular life and blood parasites → Giemsa; polysaccharides → PAS; the mycolic-acid wall → Ziehl-Neelsen (auramine-rhodamine to screen); the capsule → India ink (mucicarmine to paint it red); the fastidious bacteria and fungi → silver; and anything an antibody can label → fluorescent antibody (FTA-ABS).",
    },
    {
      kind: "callout",
      variant: "clinical",
      title: "The negative gram stain is information",
      body: "'NO ORGANISMS SEEN' ON GRAM STAIN, WITH NEUTROPHILS PRESENT: think Mycoplasma (no cell wall — nothing to stain; the classic atypical-pneumonia picture), the spirochetes (too thin), the intracellular set (Legionella, Chlamydia — the stain cannot reach them inside cells), or early mycobacteria (the lipid wall). THE ACID-FAST WORKAROUND: the same mycolic acids that defeat the gram stain are exactly what Ziehl-Neelsen's carbol fuchsin stains — and auramine-rhodamine screens the same wall inexpensively with better sensitivity (the printed footnote). THE CAPSULE HALO: India ink's negative image is Cryptococcus's thick polysaccharide capsule read as a clear halo around the yeast on ink; mucicarmine stains the same capsule red (a confirmatory readout). SILVER'S RANGE: the fungi (Coccidioides, PJP, Aspergillus) share the silver roster with Helicobacter, Legionella, and Bartonella henselae — silver is the default 'gram stain failed, look harder' stain in ID workups. FLUORESCENT ANTIBODY: identification becomes immunology — FTA-ABS for syphilis is the printed example, and the same logic extends to many bacteria and viruses (plus PJP, Giardia, Cryptosporidium).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 19-year-old college student has a week of dry cough, low-grade fever, and patchy bilateral infiltrates; the sputum gram stain shows neutrophils but no organisms, and routine culture is negative at 48 hours.",
        discriminator: "Pneumonia + gram stain 'no organisms' + negative routine culture",
        concept: "Mycoplasma — no cell wall, does not gram stain",
        answer:
          "Mycoplasma has no cell wall, so there is no peptidoglycan to hold any gram dye — one of the four poor-stainer modes (too thin / lipid wall / no wall / intracellular). The classic atypical pneumonia follows: dry cough, low-grade fever, patchy infiltrates, negative routine culture (it needs special media; extension: cold agglutinins, Eaton agar). The lab answer to 'which structure explains the failed stain' is 'no cell wall.'",
      },
      {
        stem: "An HIV-positive patient with headache and CSF opening pressure 28 cm H2O undergoes CSF staining; a preparation that outlines the organism as a clear halo around a budding yeast is requested.",
        discriminator: "CSF + halo readout around budding yeast",
        concept: "India ink — Cryptococcus neoformans capsule",
        answer:
          "India ink renders the thick polysaccharide capsule of Cryptococcus neoformans as a negative-image halo around the yeast. The confirmatory stain is mucicarmine, which stains the same capsule red; the polysaccharide capsular antigen (CRAG) is the extension test. This is the 'read the capsule' workaround of the special-stain roster.",
      },
      {
        stem: "A 54-year-old man with weight loss, diarrhea, and arthralgias has a small-bowel biopsy whose macrophages stain brightly with periodic acid–Schiff.",
        discriminator: "PAS-positive foamy macrophages + chronic diarrhea/arthralgia",
        concept: "Whipple disease — Tropheryma whipplei",
        answer:
          "PAS stains glycogen and mucopolysaccharides — in Whipple disease the lamina propria's foamy macrophages are packed with the Tropheryma whipplei material that lights up with PAS. The printed row pairs 'stains glycogen, mucopolysaccharides' with 'used to diagnose Whipple disease (Tropheryma whipplei).' The clinical triad is weight loss, diarrhea, and arthralgias; the diagnostic answer is the PAS-positive macrophage on small-bowel biopsy.",
      },
    ],
    traps: [
      {
        a: "Mycobacteria fail the gram stain because they are gram-negative rods",
        b: "Mycobacteria fail because their cell wall has high lipid content — the mycolic acids refuse the gram dyes; the workaround is the acid-fast stain",
        whyConfused: "A failed readout feels like it should still report a gram class.",
        keyDifference:
          "The four failure modes do not report a gram class at all: too thin (Treponema, Leptospira), high-lipid wall (Mycobacteria — read with Ziehl-Neelsen/auramine-rhodamine instead), no wall (Mycoplasma, Ureaplasma), intracellular (the Legionella-Rickettsia-Chlamydia set). 'Acid-fast' replaces 'gram-positive/negative' for the mycobacteria — and Nocardia joins them on the acid-fast row (mycolic acid in the cell wall).",
        clue: "Any question about staining mycobacteria or reporting their gram class.",
      },
      {
        a: "India ink stains the Cryptococcus yeast body",
        b: "India ink outlines the CAPSULE as a clear halo (negative image); mucicarmine stains the capsule red",
        whyConfused: "A 'stain' sounds like it colors the organism.",
        keyDifference:
          "India ink is a negative contrast preparation: the ink particles are excluded by the thick polysaccharide capsule, so the capsule reads as a halo around the budding yeast. The positive-stain confirmatory readout is mucicarmine (capsule red). Both read the same structure — the capsule M1 introduced as the anti-phagocytic coat.",
        clue: "Any India ink / mucicarmine / Cryptococcus stain question.",
      },
      {
        a: "Auramine-rhodamine is the confirmatory stain; Ziehl-Neelsen is the screen",
        b: "Auramine-rhodamine is MORE OFTEN USED FOR SCREENING (inexpensive, more sensitive); Ziehl-Neelsen/carbol fuchsin is the classic acid-fast stain",
        whyConfused: "Both are 'the acid-fast stain,' so their roles feel interchangeable.",
        keyDifference:
          "The printed footnote assigns the roles: auramine-rhodamine screens (inexpensive, more sensitive — the fluorescent read of the same mycolic-acid wall), while Ziehl-Neelsen (carbol fuchsin) is the classic confirmatory acid-fast stain. The exam swaps the roles to test whether the footnote was read; 'screening' belongs to auramine-rhodamine.",
        clue: "Any acid-fast screening-versus-confirmation question.",
      },
    ],
    pivots: [
      {
        lookAlike: "Gram stain failure vs culture failure (the two different negatives)",
        differentiator: "Stain reads the wall; culture needs the medium",
        correctPath:
          "A NO-ORGANISMS GRAM STAIN points to the four anatomies: too thin (Treponema, Leptospira), lipid wall (Mycobacteria — use acid-fast), no wall (Mycoplasma, Ureaplasma), intracellular (Legionella, Rickettsia, Chlamydia, Bartonella, Anaplasma, Ehrlichia). A NEGATIVE CULTURE is a different problem — the medium did not match the organism's needs (M3's territory: special culture requirements). Mycoplasma triggers both: no wall to stain, and no routine medium grows it.",
      },
      {
        lookAlike: "Silver vs Ziehl-Neelsen vs Giemsa (the three 'gram failed' workarounds)",
        differentiator: "Which structure each stain reads",
        correctPath:
          "SILVER reads the fastidious bacteria and the fungi: Helicobacter pylori, Legionella, Bartonella henselae + Coccidioides, Pneumocystis jirovecii, Aspergillus fumigatus. ZIEHL-NEELSEN (carbol fuchsin) reads the mycolic-acid wall: Mycobacteria, Nocardia (+ Cryptosporidium oocysts); auramine-rhodamine screens the same target. GIEMSA reads the intracellular life and blood parasites: H pylori, Chlamydia, Borrelia, Rickettsia, Trypanosomes, Plasmodium. Fungal wall → silver; waxy wall → acid-fast; parasite/intracellular → Giemsa.",
      },
    ],
    miniCase: {
      vignette:
        "A 23-year-old woman is admitted with 10 days of malaise, myalgias, and a dry cough. Temperature 37.9 °C; saturation 95% on room air. Chest x-ray shows patchy bilateral infiltrates. Sputum gram stain reports abundant neutrophils but no organisms; routine bacterial culture is negative at 48 hours and remains so at five days. The laboratory notes that a second staining attempt with a different dye class again shows no organisms. Serology sent on day 3 returns positive cold agglutinins.",
      question:
        "Which structural feature best explains the failure to visualize the organism on both stains?",
      options: [
        {
          label: "A",
          text: "The organism has no cell wall",
          correct: true,
          why: "Correct. Mycoplasma (the atypical pneumonia with positive cold agglutinins) has no cell wall: no peptidoglycan means no substrate for the gram dye or for a cell-wall-directed stain — the printed poor-stainer mode 'no cell wall,' alongside Mycoplasma's partner Ureaplasma. The negative stain and the negative routine culture are the same anatomy read twice (no wall to stain; no wall-containing organism for routine media — it needs special media).",
        },
        {
          label: "B",
          text: "The organism is too thin to be visualized",
          why: "Too thin is a real poor-stainer mode — but it belongs to Treponema and Leptospira, the spirochetes, which are not respiratory organisms and do not cause this pneumonia picture. The distractor tests whether the four failure modes are being matched to their organisms.",
        },
        {
          label: "C",
          text: "The cell wall has high lipid content",
          why: "The high-lipid wall is Mycobacteria's mode — and the workaround would have been the acid-fast stain (Ziehl-Neelsen/auramine-rhodamine), which the lab did not need here. The clinical picture (dry cough, patchy infiltrates, cold agglutinins, young adult) is the atypical-pneumonia signature, not tuberculosis; and the stem says a different dye class also showed nothing, which fits a wall-less organism better than a waxy one.",
        },
        {
          label: "D",
          text: "The organism is primarily intracellular",
          why: "Primarily intracellular is the fourth real mode (Legionella, Rickettsia, Chlamydia, Bartonella, Anaplasma, Ehrlichia) — but Legionella pneumonia typically follows water-source exposure and GI symptoms, and Chlamydia respiratory disease is a different demographic; more decisively, cold agglutinins point to Mycoplasma. The distractor tests whether the intracellular mode is reserved for its own organism set.",
        },
        {
          label: "E",
          text: "The organism lacks classic peptidoglycan because of deficient muramic acid",
          why: "Deficient muramic acid (lack of classic peptidoglycan) is the printed detail for Chlamydia — a genuine poor-stainer reason, but it is Chlamydia's reason, attached to its intracellular life. This stem's organism is Mycoplasma, whose reason is one step further: no cell wall at all. The distractor tests the two wall-anatomy details against each other.",
        },
      ],
      reasoning:
        "The vignette assembles the classic Mycoplasma pneumonia: young adult, dry cough, low-grade fever, patchy bilateral infiltrates, neutrophils with no organisms on gram stain, negative routine culture, and positive cold agglutinins. The mechanism is structural: Mycoplasma has no cell wall, so no stain that targets wall chemistry can visualize it — the 'no cell wall' poor-stainer mode. Each distractor assigns a different real failure mode to the wrong organism, testing whether the four anatomies are matched to their owners.",
    },
  },
  mnemonics: [
    {
      code: "\u201cThe gram stain reads the wall: thick wall keeps the crystal violet (purple); thin wall lets it go and takes the pink counterstain.\u201d",
      meaning:
        "KYP's key for the gram mechanism: the readout is peptidoglycan thickness — crystal violet is trapped by a thick mesh (gram ⊕) and released by a thin one, which then takes the red/pink counterstain (gram ⊝). First-line lab test in bacterial identification.",
      memorizes: "Gram stain mechanics",
      whenToUse: "Any gram-stain interpretation question.",
      clinical: "The readout is wall thickness — which is why the four anatomies defeat it.",
    },
    {
      code: "\u201cFour ways to fail the gram stain: too thin to see (the spirochetes), too waxy to dye (the mycobacteria), no wall at all (the mycoplasmas), hiding inside cells (the intracellular legionella-rickettsia-chlamydia crew).\u201d",
      meaning:
        "KYP's key for the poor stainers: Treponema/Leptospira (too thin), Mycobacteria (high-lipid mycolic-acid wall — use acid-fast), Mycoplasma/Ureaplasma (no cell wall), and Legionella/Rickettsia/Chlamydia/Bartonella/Anaplasma/Ehrlichia (primarily intracellular; Chlamydia also lack classic peptidoglycan — ↓ muramic acid).",
      memorizes: "The poor-stainer roster and reasons",
      whenToUse: "Any 'no organisms seen on gram stain' stem.",
      clinical: "A failed gram stain is a pointer: pick the workaround stain (acid-fast for the waxy wall; special media/serology for the rest).",
    },
    {
      code: "\u201cSilver flies the fungus helicopter: Heli, Legion, and Barton ride with the fungi; the waxy wall needs fire (carbol fuchsin), the capsule reads as a halo, and PAS lights up polysaccharides.\u201d",
      meaning:
        "KYP's key for the special-stain roster: SILVER = Helicobacter pylori, Legionella, Bartonella henselae + the fungi (Coccidioides, PJP, Aspergillus). ZIEHL-NEELSEN (carbol fuchsin) = the mycolic-acid wall (Mycobacteria, Nocardia; Cryptosporidium oocysts; auramine-rhodamine screens it). INDIA INK = the Cryptococcus capsule (mucicarmine red). PAS = glycogen/mucopolysaccharides (Whipple). GIEMSA = the intracellular set and blood parasites. FLUORESCENT ANTIBODY = FTA-ABS and the antibody-labeled rest.",
      memorizes: "The special-stain assignments",
      whenToUse: "Any stain-selection question.",
      clinical: "Stain choice = the structure being read: wall (gram/acid-fast), capsule (ink), polysaccharides (PAS), antibody targets (FA).",
    },
  ],
  rapidReview: {
    s30: [
      "Gram stain: first-line; thick PG retains crystal violet (⊕) / thin PG turns red-pink (⊝)",
      "Poor stainers: Treponema, Leptospira (too thin)",
      "Mycobacteria (high-lipid wall); Mycoplasma, Ureaplasma (no wall)",
      "Legionella, Rickettsia, Chlamydia, Bartonella, Anaplasma, Ehrlichia (intracellular)",
      "Chlamydia also lack classic peptidoglycan (↓ muramic acid)",
    ],
    m3: [
      "Giemsa: H pylori, Chlamydia, Borrelia, Rickettsia, Trypanosomes, Plasmodium",
      "PAS: glycogen + mucopolysaccharides — Whipple disease (Tropheryma whipplei)",
      "Ziehl-Neelsen (carbol fuchsin): acid-fast — Mycobacteria, Nocardia (mycolic acid); Cryptosporidium oocysts",
      "India ink: Cryptococcus neoformans; mucicarmine stains the capsule red",
      "Silver: H pylori, Legionella, Bartonella henselae + fungi (Coccidioides, PJP, Aspergillus)",
    ],
    m10: [
      "Auramine-rhodamine: more often used for screening (inexpensive, more sensitive)",
      "Fluorescent antibody: many bacteria, viruses, PJP, Giardia, Cryptosporidium; FTA-ABS for syphilis",
      "A failed gram readout never reports a gram class — it reports an anatomy",
      "Stain choice is itself identification data (the structure being read names the organism family)",
      "'No organisms seen' + neutrophils → think the four poor-stainer modes",
    ],
  },
  recall: [
    {
      q: "State the gram stain's definition and what it reads.",
      a: "First-line lab test in bacterial identification. Bacteria with thick peptidoglycan layer retain crystal violet dye (gram ⊕); bacteria with thin peptidoglycan layer turn red or pink (gram ⊝) with counterstain. The readout is peptidoglycan thickness.",
    },
    {
      q: "List the four poor-stainer groups with their printed reasons.",
      a: "Treponema, Leptospira — too thin to be visualized. Mycobacteria — cell wall has high lipid content. Mycoplasma, Ureaplasma — no cell wall. Legionella, Rickettsia, Chlamydia, Bartonella, Anaplasma, Ehrlichia — primarily intracellular; Chlamydia also lack classic peptidoglycan because of deficient muramic acid.",
    },
    {
      q: "Which stain is used for Whipple disease, and what does it stain?",
      a: "Periodic acid–Schiff stains glycogen and mucopolysaccharides; used to diagnose Whipple disease (Tropheryma whipplei) — the PAS-positive foamy macrophages on small-bowel biopsy.",
    },
    {
      q: "Give the acid-fast and capsule-stain rows with their screening alternatives.",
      a: "Ziehl-Neelsen (carbol fuchsin): acid-fast bacteria (eg, Mycobacteria, Nocardia — stains mycolic acid in cell wall); protozoa (eg, Cryptosporidium oocysts); auramine-rhodamine is more often used for screening (inexpensive, more sensitive). India ink: Cryptococcus neoformans; mucicarmine can also be used to stain the thick polysaccharide capsule red.",
    },
    {
      q: "Name the organisms on the silver and fluorescent-antibody rows.",
      a: "Silver: Helicobacter pylori, Legionella, Bartonella henselae, and fungi (eg, Coccidioides, Pneumocystis jirovecii, Aspergillus fumigatus). Fluorescent antibody: used to identify many bacteria, viruses, Pneumocystis jirovecii, Giardia, and Cryptosporidium — example: FTA-ABS for syphilis.",
    },
  ],
  related: [
    {
      title: "Bacterial Structures: Anatomy & Function",
      topicId: "bacterial-structures",
      note: "The gram stain is M1's envelope logic as a lab tool: wall thickness = stain retention; the four failure modes are four anatomies of M1's parts list.",
    },
    {
      title: "Complement Disorders",
      topicId: "complement-disorders",
      note: "Gram ⊝ diplococci on stain → the Neisseria family — the terminal-complement bridge of E30's deficiency map.",
    },
    {
      title: "Flow Cytometry & ELISA",
      topicId: "flow-cytometry-elisa",
      note: "Fluorescent antibody staining is the immunology-methods sibling: identification by labeled antibody (FTA-ABS) rather than by dye chemistry.",
    },
  ],
  crossLinks: [
    {
      subject: "Infectious Disease Diagnostics",
      connection: "The stain choice is itself a diagnostic branch: acid-fast for the waxy wall, silver for fungi and fastidious bacteria, ink for the capsule, PAS for polysaccharides — the 'gram failed, now what' algorithm of every ID workup.",
    },
    {
      subject: "Pharmacology (Antimicrobials)",
      connection: "Wall-less Mycoplasma is untouchable by β-lactams (no peptidoglycan to cross-link) — the no-wall anatomy that defeats the gram stain also defeats the cell-wall drugs.",
    },
    {
      subject: "Immunology (Serology)",
      connection: "Fluorescent antibody staining turns identification into an antibody question — FTA-ABS for syphilis is the printed example; the same logic drives the later serology sections.",
    },
  ],
};
