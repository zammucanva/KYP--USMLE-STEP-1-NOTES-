import type { KypUsMLENote } from "../types";

// Biochemistry — Molecular (M1).
// Source: First Aid 2026, Part 1 pdf 59 / book 37 (DNA repair)

export const dnaRepair: KypUsMLENote = {
  id: "dna-repair",
  title: "DNA Repair Pathways",
  subtitle: "Five crews, five kinds of damage: who you call depends on whether the lesion is bulky, small, mismatched, or a clean break through both strands — and one wrong crew choice is a cancer syndrome.",
  subject: "Biochemistry",
  system: "Section II · High-Yield General Principles — Molecular",
  pilotCategory: "Molecular biology — repair mechanisms",
  difficulty: 3,
  readTime: 12,
  sourceRef: "First Aid 2026, Part 1 pp. 37 (DNA repair)",
  tags: [
    "nucleotide excision repair",
    "base excision repair",
    "mismatch repair",
    "nonhomologous end joining",
    "homologous recombination",
    "xeroderma pigmentosum",
    "Lynch syndrome",
    "BRCA",
  ],
  core: {
    what: "Five repair systems maintain genomic integrity: nonhomologous end joining and homologous recombination fix double-strand breaks; nucleotide excision repair removes bulky helix-distorting lesions such as UV pyrimidine dimers; base excision repair swaps out small damaged bases (deaminated, oxidized, alkylated); and mismatch repair deletes replication mispairings from the new strand.",
    why: "Each pathway owns a signature disease: xeroderma pigmentosum (NER), Lynch syndrome/HNPCC (MMR), and BRCA1/2-mutated breast/ovarian cancers plus certain Fanconi anemias (HR). The exam asks disease → pathway and lesion → enzyme — miss the map and both question shapes collapse.",
    keyIdea: "Sort by lesion size and strand count: both strands cut → NHEJ (fast, no template, may lose bases) or HR (accurate, needs a homologous sister duplex); bulky distortion → NER (cut around the lesion); one small base wrong → BER (glycosylase → AP site → pol β → ligase, 'GEL Please'); a replication mismatch in the new strand → MMR.",
  },
  mechanisms: [
    {
      id: "dsb-repair-choice",
      title: "Double-strand break — the NHEJ vs HR decision",
      context: "Both strands of the duplex are severed",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "Double-strand break occurs",
            sublabel: "Both strands of the duplex are cut.",
            variant: "input",
          },
          {
            id: "nhej",
            label: "NHEJ: the two ends are brought together and ligated",
            sublabel: "Molecular — Homology not required. Part of the DNA may be lost or translocated.",
            variant: "process",
          },
          {
            id: "nhej_out",
            label: "Fast closure — error-prone",
            sublabel: "Effect: Break sealed, potentially at the cost of nucleotides or a rearrangement.",
            variant: "output",
          },
          {
            id: "hr",
            label: "HR: the damaged strand is rebuilt from an intact homologous duplex",
            sublabel: "Molecular — Requires 2 homologous DNA duplexes; a 3′ strand from the damaged dsDNA is repaired using the complementary strand of the intact homolog as template.",
            variant: "process",
          },
          {
            id: "hr_out",
            label: "Accurate restoration — no nucleotide loss",
            sublabel: "Effect: The duplex is restored faithfully because a template guided every base.",
            variant: "output",
          },
          {
            id: "brca",
            label: "BRCA1/BRCA2 and Fanconi proteins",
            sublabel: "Clinical: HR is defective in breast/ovarian cancers with BRCA mutations and in certain types of Fanconi anemia.",
            variant: "target",
          },
        ],
        edges: [
          { from: "trigger", to: "nhej", label: "no homology needed" },
          { from: "nhej", to: "nhej_out", label: "ends joined" },
          { from: "trigger", to: "hr", label: "homologous template available" },
          { from: "hr", to: "hr_out", label: "template-guided synthesis" },
          { from: "brca", to: "hr", type: "inhibit", label: "BRCA/Fanconi loss disables HR" },
        ],
        caption:
          "Same break, two philosophies: NHEJ just seals the ends and may sacrifice a few bases; HR borrows the sister duplex and loses nothing. Inherit a broken HR (BRCA1/2) and the cell falls back on error-prone repair — the road to breast and ovarian cancer.",
      },
    },
    {
      id: "ner-bulky-lesion",
      title: "Nucleotide excision repair — the bulky-lesion crew",
      context: "UV light → pyrimidine (thymine) dimers",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "UV exposure links adjacent pyrimidines into a dimer",
            sublabel: "A thymine (pyrimidine) dimer distorts the helix — bulky, helix-distorting damage.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Specific endonucleases excise the oligonucleotide around the lesion",
            sublabel: "Molecular — The whole segment containing the damaged bases is cut out, not just one base.",
            variant: "process",
          },
          {
            id: "s2",
            label: "DNA polymerase fills the gap",
            sublabel: "Molecular — The intact complementary strand templates the replacement stretch.",
            variant: "process",
          },
          {
            id: "s3",
            label: "DNA ligase reseals the strand",
            sublabel: "Molecular — Final phosphodiester seal.",
            variant: "process",
          },
          {
            id: "g1",
            label: "Occurs in G1 phase of the cell cycle",
            sublabel: "Pathway — Bulky-lesion repair is timed before replication copies the damage.",
            variant: "process",
          },
          {
            id: "xp",
            label: "Defective → xeroderma pigmentosum",
            sublabel: "Clinical: Cannot repair UV pyrimidine dimers — dry skin, photosensitivity, skin cancer.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "lesion recognized" },
          { from: "s1", to: "s2", label: "segment removed" },
          { from: "s2", to: "s3", label: "gap filled" },
          { from: "g1", to: "s1", label: "G1 timing" },
          { from: "s3", to: "xp", type: "stimulate", label: "intact NER protects skin" },
        ],
        caption:
          "NER cuts out the whole damaged segment and re-synthesizes it — when the pathway is congenitally broken (XP), every sunbeam becomes mutagenic.",
      },
    },
    {
      id: "mismatch-repair",
      title: "Mismatch repair — the S-phase proofreader",
      context: "Wrong nucleotide incorporated into the newly synthesized strand",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A mismatched nucleotide sits in the new strand",
            sublabel: "Replication error that escaped proofreading — the wrong base paired with the template.",
            variant: "input",
          },
          {
            id: "s1",
            label: "Mismatched nucleotides in the newly synthesized strand are removed",
            sublabel: "Molecular — The NEW strand is the one edited; the parental strand stays authoritative.",
            variant: "process",
          },
          {
            id: "s2",
            label: "The gap is filled and resealed",
            sublabel: "Molecular — Polymerase fills, ligase seals — the correct base is restored.",
            variant: "process",
          },
          {
            id: "sphase",
            label: "Occurs predominantly in S phase",
            sublabel: "Pathway — MMR patrols while the genome is being copied.",
            variant: "process",
          },
          {
            id: "lynch",
            label: "Defective → Lynch syndrome (HNPCC)",
            sublabel: "Clinical: Hereditary nonpolyposis colorectal cancer — mismatch-driven mutation accumulation.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "s1", label: "mismatch recognized" },
          { from: "sphase", to: "s1", label: "S-phase timing" },
          { from: "s1", to: "s2", label: "excision" },
          { from: "s2", to: "lynch", type: "stimulate", label: "intact MMR protects the colon" },
        ],
        caption:
          "MMR is replication's second-chance editor: remove the mismatched segment from the new strand, refill, reseal. Lose it (Lynch syndrome) and replication errors accumulate into colorectal cancer.",
      },
    },
  ],
  blocks: [
    {
      kind: "text",
      title: "Triage the damage first — then pick the crew",
      body: [
        "Every repair question is really a triage question. Ask two things: how big is the lesion, and how many strands are involved? A single small base that is deaminated, oxidized, or alkylated is BER territory. A bulky adduct that distorts the helix — the classic is a UV-induced pyrimidine dimer — brings in NER. A correctly formed but wrongly paired nucleotide in a fresh strand belongs to MMR. A cut through both strands is the double-strand-break department: NHEJ or HR.",
        "The enzyme logic differs with lesion class, and the disease associations hang off the pathway, not the individual enzyme. That is why the master table below is worth committing: each row is one question shape.",
      ],
    },
    {
      kind: "table",
      title: "The five repair pathways — master table",
      intro: "Pathway by pathway: the lesion, the mechanism, the cell-cycle timing, and the disease that locks it in.",
      columns: ["Pathway", "Lesion / trigger", "Mechanism (key enzymes)", "Phase", "Disease lock"],
      rows: [
        [
          "Nonhomologous end joining (NHEJ)",
          "Double-strand break",
          "Brings together the 2 ends of DNA fragments to repair the break — homology NOT required; part of the DNA may be lost or translocated",
          "—",
          "Error-prone repair of DSBs",
        ],
        [
          "Homologous recombination (HR)",
          "Double-strand break",
          "Requires 2 homologous DNA duplexes; 3′ strand from the damaged dsDNA repaired using the complementary strand of intact homologous dsDNA as template — restores duplexes accurately without loss of nucleotides",
          "—",
          "Defective in BRCA1/BRCA2 breast/ovarian cancers and certain types of Fanconi anemia",
        ],
        [
          "Nucleotide excision repair (NER)",
          "Bulky, helix-distorting lesions (eg, UV pyrimidine dimers)",
          "Specific endonucleases remove the oligonucleotides containing damaged bases; DNA polymerase fills and ligase reseals the gap",
          "G1",
          "Xeroderma pigmentosum — dry skin, photosensitivity, skin cancer",
        ],
        [
          "Base excision repair (BER)",
          "Small base damage: spontaneous/toxic deamination, oxidative stress, radiation, alkylating agents, replication errors",
          "Base-specific glycosylase removes the altered base → AP site; AP-endonuclease cleaves the 5′ end; AP-lyase cleaves the 3′ end; DNA polymerase-β fills; DNA ligase seals — “GEL Please”",
          "Throughout the cell cycle",
          "Handles everyday chemical attrition of bases",
        ],
        [
          "Mismatch repair (MMR)",
          "Mismatched nucleotides in newly synthesized DNA",
          "Mismatched nucleotides in the new strand are removed; the gap is filled and resealed",
          "Predominantly S",
          "Lynch syndrome (hereditary nonpolyposis colorectal cancer, HNPCC)",
        ],
      ],
      caption:
        "NHEJ vs HR is a choice between speed and fidelity; NER vs BER is a choice between lesion sizes; MMR is the dedicated replication-error editor.",
    },
    {
      kind: "visual",
      visualId: "dna-repair-pathways",
      title: "The repair landscape — five pathways, one map",
      caption:
        "Top band: the two double-strand-break strategies side by side — NHEJ ligating naked ends with possible base loss, HR borrowing the intact sister chromatid for error-free restoration. Three lanes below: NER (UV dimer → endonuclease excision → polymerase → ligase, G1, XP), BER (deaminated C → glycosylase → AP site → endonuclease/lyase → pol β → ligase, all phases, 'GEL Please'), and MMR (new-strand mismatch → excision → fill + reseal, S phase, Lynch).",
      notice:
        "Read the left chips as the triage labels: bulky → NER, small → BER, mismatch → MMR, both strands cut → DSB crew. The phase chips (G1 / all / S) and disease chips (XP / Lynch / BRCA-Fanconi) are the two fastest question hooks on the page.",
    },
    {
      kind: "steps",
      title: "Base excision repair — the GEL Please sequence",
      intro: "BER is the only pathway with a step-order mnemonic, so the exam likes to shuffle the steps and ask what comes next.",
      steps: [
        {
          label: "G — Glycosylase removes the altered base",
          detail:
            "Base-specific glycosylase recognizes the damaged base (eg, uracil from deaminated cytosine) and cuts it out of the helix, creating an AP (apurinic/apyrimidinic) site.",
        },
        {
          label: "E — AP-endonuclease cleaves the 5′ end",
          detail:
            "The backbone is opened on the 5′ side of the AP site, removing one or more nucleotides.",
        },
        {
          label: "L — AP-lyase cleaves the 3′ end",
          detail:
            "The second cut frees the sugar-phosphate remnant from the 3′ side.",
        },
        {
          label: "P — DNA polymerase-β fills the gap",
          detail:
            "The BER-specific polymerase inserts the correct nucleotide(s) — typically a small patch, matching the small lesion.",
        },
        {
          label: "L — DNA ligase seals it",
          detail:
            "The final nick is closed. “GEL Please”: Glycosylase, Endonuclease, Lyase, Polymerase-β, Ligase.",
        },
      ],
    },
    {
      kind: "compare",
      title: "NHEJ vs homologous recombination — speed vs fidelity",
      intro: "Both repair double-strand breaks; they differ in template requirement and accuracy — and that difference is the BRCA story.",
      columns: ["Nonhomologous end joining", "Homologous recombination"],
      rows: [
        {
          label: "Template requirement",
          a: "Homology not required — any two ends will do",
          b: "Requires 2 homologous DNA duplexes (an intact sister)",
        },
        {
          label: "Mechanism",
          a: "Brings together the 2 ends of the DNA fragments and ligates them",
          b: "The 3′ strand from the damaged dsDNA is repaired using the complementary strand of the intact homologous dsDNA as a template",
        },
        {
          label: "Accuracy",
          a: "Part of the DNA may be lost or translocated",
          b: "Restores duplexes accurately without loss of nucleotides",
        },
        {
          label: "When defective",
          a: "—",
          b: "Breast/ovarian cancers with BRCA1/BRCA2 mutations; certain types of Fanconi anemia",
        },
        {
          label: "Think of it as",
          a: "Duct tape — fast, messy, seals the break",
          b: "A master craftsman with the original blueprint — slow, perfect",
        },
      ],
    },
    {
      kind: "compare",
      title: "NER vs BER — big lesion, small lesion",
      intro: "Both are 'excision' repair, both end with polymerase + ligase — the discriminator is the size of what gets cut out.",
      columns: ["Nucleotide excision repair", "Base excision repair"],
      rows: [
        {
          label: "Lesion type",
          a: "Bulky, helix-distorting lesions (eg, pyrimidine dimers from UV)",
          b: "Small, non-distorting base damage (deamination, oxidation, alkylation, radiation, replication errors)",
        },
        {
          label: "What is removed",
          a: "An oligonucleotide segment containing the damaged bases",
          b: "A single altered base first (glycosylase), then the backbone remnant",
        },
        {
          label: "Signature enzymes",
          a: "Specific endonucleases",
          b: "Glycosylase → AP-endonuclease → AP-lyase (“GEL Please”) with pol β",
        },
        {
          label: "Cell-cycle phase",
          a: "G1",
          b: "Throughout the cell cycle",
        },
        {
          label: "Disease lock",
          a: "Xeroderma pigmentosum (dry skin, photosensitivity, skin cancer)",
          b: "Everyday genomic housekeeping",
        },
      ],
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three disease locks the exam tests",
      body: "Photosensitive child with skin cancer → xeroderma pigmentosum → NER cannot remove UV pyrimidine dimers. Early-onset colorectal cancer with family history, few polyps → Lynch syndrome (HNPCC) → mismatch repair defective, S phase. Young woman with breast/ovarian cancer and a strong family history → BRCA1/BRCA2 → homologous recombination defective (Fanconi anemia in certain types shares the lock).",
    },
    {
      kind: "callout",
      variant: "why",
      title: "Why HR loss causes cancer — the fallback hypothesis",
      body: "HR is the high-fidelity route for double-strand breaks. When BRCA1/BRCA2 are mutated, breaks still have to be repaired — the cell falls back on NHEJ, which tolerates lost or translocated nucleotides. Accumulate enough error-prone closures and the genome scrambles into oncogenesis. The disease is not 'unrepaired DNA' — it is 'badly repaired DNA.'",
    },
  ],
  clinical: [
    {
      kind: "text",
      title: "Xeroderma pigmentosum — the sun-allergic child",
      body: [
        "Xeroderma pigmentosum is the congenital NER deficiency: an inability to repair DNA pyrimidine dimers caused by UV exposure. First Aid's presentation triad is dry skin, photosensitivity, and skin cancer — the logic is direct, as every UV exposure deposits bulky dimers that NER would normally excise in G1.",
        "Vignette shape: a young patient who burns and blisters with minimal sun exposure, with dry, pigmentary skin changes and cutaneous malignancies far too early in life. The question then names the defective mechanism — failure of the endonuclease-mediated excision of damaged oligonucleotides, i.e., nucleotide excision repair.",
      ],
    },
    {
      kind: "text",
      title: "Lynch syndrome — HNPCC, the mismatch-repair cancer family",
      body: [
        "Lynch syndrome (hereditary nonpolyposis colorectal cancer, HNPCC) is the MMR deficiency lock. Mismatched nucleotides that escape the S-phase editor accumulate as mutations across generations of colonic epithelium — hence early-onset colorectal cancer without the polyposis phenotype (the 'nonpolyposis' in the name).",
        "Vignette shape: an adult with colorectal cancer decades earlier than sporadic disease, a family tree dense with colon (and related) cancers, and few or no polyps. The mechanistic answer is loss of mismatch repair — removal of mispaired nucleotides from the newly synthesized strand.",
      ],
    },
    {
      kind: "text",
      title: "BRCA1/BRCA2 and Fanconi anemia — the HR family",
      body: [
        "Homologous recombination is defective in breast and ovarian cancers with BRCA1 or BRCA2 mutations and in certain types of Fanconi anemia. The clinical pairing to remember: young-onset, often bilateral breast cancer and ovarian cancer in a family → BRCA → HR defect → double-strand breaks get patched by error-prone NHEJ instead.",
        "This lock also explains the therapeutic logic of PARP-trap strategies in BRCA-mutated cancers: with HR already disabled, blocking alternative repair leaves the tumor cell no accurate exit — a concept built directly on knowing which pathway BRCA serves.",
      ],
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A young child with dry skin and severe photosensitivity develops multiple skin cancers on sun-exposed areas; UV-induced pyrimidine dimers cannot be removed from the DNA.",
        discriminator: "UV + pyrimidine dimer + skin cancer = NER failure",
        concept: "Nucleotide excision repair handles bulky, helix-distorting lesions",
        answer: "Xeroderma pigmentosum — defective NER (dry skin, photosensitivity, skin cancer)",
      },
      {
        stem: "A 45-year-old with colorectal cancer and a family history of early colon cancers has few polyps on colonoscopy; microsatellite instability is present.",
        discriminator: "Early-onset, nonpolyposis, family history = MMR failure",
        concept: "Mismatch repair patrols the newly synthesized strand in S phase",
        answer: "Lynch syndrome (HNPCC) — defective mismatch repair",
      },
      {
        stem: "A 38-year-old woman with bilateral breast cancer has a family history of ovarian cancer; double-strand breaks in her cells are repaired with frequent small deletions.",
        discriminator: "Error-prone DSB repair = HR failure with NHEJ fallback",
        concept: "HR requires an intact homologous duplex and restores sequence without nucleotide loss",
        answer: "BRCA1/BRCA2 mutation — defective homologous recombination",
      },
      {
        stem: "A molecular vignette: cytosine in DNA undergoes spontaneous deamination to uracil; the wrong base must be excised without disturbing the helix.",
        discriminator: "A single small base lesion (not bulky) = BER",
        concept: "Glycosylase initiates BER by removing the altered base",
        answer: "Base excision repair — glycosylase removes the base, creating an AP site",
      },
      {
        stem: "An experiment asks which repair pathway is active predominantly during S phase.",
        discriminator: "Phase-specific repair pathway timing",
        concept: "MMR is coupled to replication; NER is G1; BER runs throughout",
        answer: "Mismatch repair — predominantly S phase",
      },
    ],
    traps: [
      {
        a: "Nucleotide excision repair",
        b: "Base excision repair",
        whyConfused: "Both are 'excision repair,' both finish with polymerase + ligase.",
        keyDifference: "NER cuts out an oligonucleotide segment around a BULKY lesion (UV dimers); BER removes a SINGLE small base (glycosylase → AP site) — lesion size is the discriminator.",
        clue: "UV/pyrimidine dimer/bulky → NER. Deaminated/oxidized/alkylated single base → BER.",
      },
      {
        a: "Glycosylase",
        b: "Endonuclease",
        whyConfused: "Both cut DNA chemistry; both appear in shuffled-enzyme lists.",
        keyDifference: "Glycosylase removes only the altered BASE, leaving the backbone (AP site); endonucleases cut the backbone itself — NER's endonucleases excise the whole damaged segment, and in BER the AP-endonuclease cuts after glycosylase.",
        clue: "Ask what is left behind: an AP site → glycosylase acted; a nicked backbone → an endonuclease acted.",
      },
      {
        a: "NHEJ",
        b: "Homologous recombination",
        whyConfused: "Both repair double-strand breaks — the stem says 'DSB' for both.",
        keyDifference: "NHEJ needs no homology and may lose or translocate bases; HR needs 2 homologous duplexes and restores sequence exactly. BRCA1/2 → HR.",
        clue: "'Accurate/template-guided/no nucleotide loss' → HR. 'No homology required/may be lost' → NHEJ.",
      },
      {
        a: "NER (G1 phase)",
        b: "MMR (S phase)",
        whyConfused: "Phase-association questions shuffle the two.",
        keyDifference: "NER is a G1 pathway for bulky lesions; MMR is predominantly S phase for replication mismatches.",
        clue: "Match phase to threat: before copying (G1) fix the template; while copying (S) fix the copy.",
      },
    ],
    pivots: [
      {
        lookAlike: "Photosensitivity + early skin cancers vs early-onset colorectal cancer",
        differentiator: "Organ hit and the lesion type: UV dimers in skin (NER/XP) vs replication mismatches in gut epithelium (MMR/Lynch)",
        correctPath: "Skin + sun + many cancers → XP/NER. Colon + family history + few polyps → Lynch/MMR.",
      },
      {
        lookAlike: "BRCA-family cancers vs Fanconi anemia phenotypes",
        differentiator: "Both are HR-defective locks — presentation differs (breast/ovarian cancers vs the Fanconi phenotype in certain types)",
        correctPath: "Either way the mechanistic answer is homologous recombination — 'requires 2 homologous DNA duplexes.'",
      },
    ],
    miniCase: {
      vignette:
        "A 7-year-old boy is brought to the dermatology clinic. Since infancy he has had dry skin and develops marked sunburn with only brief sun exposure. Over the past two years he has had two non-melanoma skin cancers excised from his face and scalp. His parents note he insists on wearing UV-protective clothing and avoids going outside during the day. Skin biopsy shows characteristic 'cancer-prone' changes in sun-exposed areas.",
      question: "Which DNA repair pathway is most likely defective in this patient?",
      options: [
        {
          label: "A",
          correct: true,
          text: "Nucleotide excision repair",
          why: "Correct. UV-induced pyrimidine (thymine) dimers are bulky, helix-distorting lesions removed by NER's specific endonucleases; XP patients cannot repair them — dry skin, photosensitivity, skin cancer.",
        },
        {
          label: "B",
          text: "Base excision repair",
          why: "Tempting because it is the other 'excision' pathway — but BER handles small, non-distorting base damage (deamination, oxidation, alkylation), not bulky UV dimers.",
        },
        {
          label: "C",
          text: "Mismatch repair",
          why: "MMR fixes mispaired nucleotides in newly synthesized DNA and its deficiency causes Lynch syndrome (HNPCC) — nothing to do with photosensitivity or skin cancer.",
        },
        {
          label: "D",
          text: "Homologous recombination",
          why: "HR repairs double-strand breaks with an intact homologous template; its deficiency (BRCA1/2) drives breast/ovarian cancers, not UV-triggered skin cancers.",
        },
        {
          label: "E",
          text: "Nonhomologous end joining",
          why: "NHEJ also handles double-strand breaks (no homology needed, error-prone) — again a strand-break pathway, not the bulky-lesion pathway this vignette describes.",
        },
      ],
      reasoning:
        "The vignette's three locks — UV trigger, photosensitivity with dry skin, and early skin cancers — all point at the one lesion type UV creates: pyrimidine dimers. Bulky, helix-distorting lesions are NER's exclusive territory, and the disease is xeroderma pigmentosum.",
    },
  },
  mnemonics: [
    {
      code: "“GEL Please”",
      meaning: "Glycosylase → Endonuclease (AP-) → Lyase (AP-) → Please = Polymerase-β + Ligase.",
      memorizes: "The BER enzyme sequence in order",
      whenToUse: "Any question about base excision repair steps or 'which enzyme acts next.'",
      clinical: "BER repairs deamination, oxidative stress, radiation, alkylating agents, and replication errors — throughout the cell cycle.",
    },
    {
      code: "“HR needs a Homologous Relative; NHEJ needs No Homologous Equivalent — Just jam it”",
      meaning: "HR = Homologous Recombination, requires a Homologous Relative (intact sister duplex), accurate. NHEJ = No Homologous Equivalent, Just joins the ends — may lose bases.",
      memorizes: "The template requirement and accuracy of the two double-strand-break pathways",
      whenToUse: "DSB repair questions and BRCA/Fanconi vignettes.",
      clinical: "BRCA1/BRCA2-defective cancers and certain Fanconi anemias are HR-defective; the cell then leans on error-prone NHEJ.",
    },
    {
      code: "“Bulky-Bulky, NER cuts around; Small-Small, BER digs it out”",
      meaning: "Bulky helix-distorting lesions (UV dimers) → NER removes the whole oligonucleotide around them; small single-base damage → BER removes just the base.",
      memorizes: "NER vs BER lesion-size triage",
      whenToUse: "Any 'which excision repair pathway' question.",
      clinical: "UV exposure → thymine dimers → NER → defective in xeroderma pigmentosum.",
    },
  ],
  rapidReview: {
    s30: [
      "DSB repair: NHEJ (no homology, may lose/translocate bases) vs HR (needs homologous duplex, accurate, no nucleotide loss).",
      "BRCA1/BRCA2 + certain Fanconi anemia = defective HR → breast/ovarian cancers.",
      "NER: bulky helix-distorting lesions (UV pyrimidine dimers); endonucleases excise the segment; pol fills; ligase seals; G1 phase.",
      "XP = NER defect: dry skin, photosensitivity, skin cancer.",
      "BER: glycosylase → AP site → AP-endonuclease (5′) → AP-lyase (3′) → pol β → ligase. “GEL Please.” All phases.",
      "MMR: new-strand mismatch removed, gap filled + resealed; S phase; Lynch syndrome (HNPCC).",
    ],
    m3: [
      "HR mechanism: 3′ strand from damaged dsDNA repaired using the complementary strand of intact homologous dsDNA as template.",
      "NER is a G1 pathway — fix bulky lesions before they are copied.",
      "MMR is predominantly S phase — patrol replication as it happens.",
      "BER handles deamination (C→U), oxidative stress, radiation, alkylating agents, replication errors.",
      "XP presents with dry skin, photosensitivity, skin cancer — from UV pyrimidine dimers.",
      "Lynch = hereditary nonpolyposis colorectal cancer — early-onset colon cancer without polyposis phenotype.",
    ],
    m10: [
      "Full pathway × lesion × phase × disease matrix: NHEJ/HR (DSB), NER (bulky, G1, XP), BER (small, all phases, GEL Please), MMR (mismatch, S, Lynch).",
      "Excision comparison: NER removes an oligonucleotide segment; BER removes a single base then the backbone remnant.",
      "Therapeutic corollary: HR-defective (BRCA-mutant) tumors are exquisitely dependent on alternative repair — the conceptual basis for PARP-trap strategies.",
      "Disease presentation mapping: sun + skin cancer → XP; early colon cancer + family history + few polyps → Lynch; young bilateral breast + ovarian family history → BRCA.",
      "Two homologous duplexes are required for HR — which is why HR is effectively the high-fidelity option when a sister chromatid exists.",
      "NHEJ 'part of the DNA may be lost or translocated' — the mechanistic phrase that explains chromosomal rearrangements from error-prone DSB closure.",
    ],
  },
  recall: [
    {
      q: "Which two pathways repair double-strand breaks, and what does each require?",
      a: "NHEJ — no homology required, error-prone; HR — requires 2 homologous DNA duplexes, restores accurately without nucleotide loss.",
    },
    {
      q: "Whose mutation makes homologous recombination defective?",
      a: "BRCA1/BRCA2 (breast/ovarian cancers) and certain types of Fanconi anemia.",
    },
    {
      q: "What lesion does NER remove, and by which enzymes?",
      a: "Bulky, helix-distorting lesions (eg, UV pyrimidine dimers); specific endonucleases excise the oligonucleotide containing the damaged bases; DNA polymerase fills, DNA ligase seals.",
    },
    {
      q: "Name the BER enzyme sequence.",
      a: "Glycosylase → AP-endonuclease (5′ cut) → AP-lyase (3′ cut) → DNA polymerase-β → DNA ligase — “GEL Please.”",
    },
    {
      q: "Which repair pathway is predominant in S phase, and which in G1?",
      a: "S phase: mismatch repair. G1: nucleotide excision repair. BER: throughout the cell cycle.",
    },
    {
      q: "What triad defines xeroderma pigmentosum?",
      a: "Dry skin, photosensitivity, skin cancer — from inability to repair UV-induced pyrimidine dimers (NER defect).",
    },
    {
      q: "Lynch syndrome's full name and defective pathway?",
      a: "Hereditary nonpolyposis colorectal cancer (HNPCC); mismatch repair defective.",
    },
  ],
  related: [
    {
      title: "DNA Replication",
      note: "Replication is where mismatches come from — the proofreading polymerase and the MMR editor are two successive defenses over the same event.",
      topicId: "dna-replication",
    },
    {
      title: "Mutations in DNA",
      note: "Every repair failure in this note lands as one of the mutation outcomes — missense, nonsense, frameshift — on the next page of the ledger.",
      topicId: "dna-mutations",
    },
    {
      title: "Chromatin Organization",
      note: "Repair and chromatin state talk to each other: accessible euchromatin is more repairable, and epigenetic silencing of repair genes is a classic oncogenic shortcut.",
      topicId: "chromatin-organization",
    },
    {
      title: "Oncologic pharmacology",
      note: "Chemotherapy and radiation work by creating exactly the lesions described here — alkylation, cross-linking, strand breaks — and tumor resistance is often upregulated repair.",
    },
    {
      title: "Cancer genetics (BRCA, Lynch families)",
      note: "The inherited-cancer syndromes on this page are the prototypes for tumor-suppressor inheritance questions in genetics.",
    },
  ],
  crossLinks: [
    {
      subject: "Pathology",
      connection: "UV-induced pyrimidine dimers and error-prone NHEJ closures are mechanistic seeds of skin and other cancers.",
    },
    {
      subject: "Pharmacology",
      connection: "Alkylating agents and radiation create the base damage and strand breaks that BER/NHEJ/HR must clear; PARP-trap therapy exploits HR-defective tumors.",
    },
    {
      subject: "Genetics",
      connection: "Lynch syndrome and BRCA1/2 cancers are autosomal-dominant inherited-cancer prototypes with distinctive family-history patterns.",
    },
    {
      subject: "Oncology",
      connection: "DNA-repair proficiency predicts treatment response — repair-defective tumors can be more chemo-sensitive but more mutagenic.",
    },
  ],
};
