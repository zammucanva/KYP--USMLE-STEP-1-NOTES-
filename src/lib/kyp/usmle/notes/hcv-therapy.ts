import type { KypUsMLENote } from "../types";

// Microbiology — ANTIMICROBIALS banner (M-batch 39, the FINAL Microbiology
// topic). Source: pdf 222 / book 200 (Hepatitis C therapy — the
// DRUG/MECHANISM/TOXICITY table and the HCV replication-cycle figure).
// Census: p222 is PURE TEXT (pdfimages: ZERO rasters) — the replication
// cycle prints as VECTOR LINE ART with all labels in the text layer; the
// VLM census (render-p222.png) confirmed a schematic hepatocyte (the
// nucleus, ER, Golgi apparatus, ribosome, and the membranous web derived
// from ER; the HCV virion with its lipoprotein; numbered arrows 1-6 for
// receptor binding and endocytosis, fusion/uncoating/RNA release,
// translation, replication, assembly, maturation, and release) — NO
// photographs. Drug placements verified: the NS3/4A inhibitors
// (glecaprevir, grazoprevir) at TRANSLATION; the NS5B inhibitor
// (sofosbuvir) at REPLICATION on the membranous web; the NS5A inhibitors
// at ASSEMBLY; ribavirin at the IMP->GMP->GTP strip (the
// IMP-dehydrogenase inhibition symbol between IMP and GMP). The drug
// rosters print TWICE (the table's DRUG column and the figure's drug
// boxes) — documented. Text quirks: the banner typo
// MICROCIOLOGY—ANTIMICROCIALS; 'N u cle us' prints with split spacing (raw
// 93); the table's mechanism/toxicity text prints BEFORE the drug rosters
// (the M38 interleaving pattern); the footer splits (indd line 107, the
// membranous-web/replication/NS5B labels print AFTER it, raw 109-115).

export const hcvTherapy: KypUsMLENote = {
  id: "hcv-therapy",
  title: "Hepatitis C Therapy: DAAs",
  subtitle:
    "The nonstructural-protein target map and the guanine-starvation door (book 200). THE INTRO RULE — chronic HCV infection is treated with multidrug therapy that targets specific steps within the HCV replication cycle (the HCV-encoded nonstructural proteins). THE THREE NS DOORS — NS5A inhibitors (elbasvir, ledipasvir, pibrentasvir, velpatasvir): NS5A is a viral phosphoprotein playing a key role in RNA replication, virion assembly, and release — its exact mechanism of inhibition is unknown (headache, diarrhea); NS5B inhibitors (sofosbuvir): NS5B is the RNA-dependent RNA polymerase, and sofosbuvir acts as a chain terminator preventing viral RNA replication (fatigue, headache); NS3/4A inhibitors (glecaprevir, grazoprevir): NS3/4A is a viral protease — inhibiting it prevents viral replication (headache, fatigue). THE ALTERNATIVE DOOR — ribavirin inhibits the synthesis of guanine nucleotides by competitively inhibiting IMP dehydrogenase (the IMP-to-GMP step of the purine pathway), at the price of hemolytic anemia and severe teratogenicity. THE REPLICATION-CYCLE MAP — the hepatocyte running receptor binding and endocytosis (the virion with its lipoprotein), fusion and uncoating with RNA release, translation at the ribosome (the NS3/4A door), replication on the membranous web derived from ER — the positive and negative RNA strands (the NS5B door), assembly (the NS5A door), maturation through the Golgi apparatus, and release.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Antimicrobials",
  pilotCategory:
    "The DAA target map — three nonstructural proteins on three lifecycle steps (NS3/4A the protease at translation, NS5B the RNA-dependent RNA polymerase at replication, NS5A the phosphoprotein at assembly and release) with the -previr/-asvir/-buvir naming logic — plus ribavirin's guanine-starvation door (IMP dehydrogenase) and its severe-teratogen/hemolytic-anemia toxicity pair.",
  difficulty: 2,
  readTime: 10,
  sourceRef:
    "First Aid 2026, Part 1 pp. 200–200 (Hepatitis C therapy — the NS5A, NS5B, NS3/4A, and ribavirin cards; the HCV replication-cycle figure with its drug placements)",
  tags: [
    "hepatitis C therapy",
    "direct-acting antivirals",
    "DAAs",
    "NS5A inhibitors",
    "elbasvir",
    "ledipasvir",
    "pibrentasvir",
    "velpatasvir",
    "phosphoprotein",
    "virion assembly",
    "NS5B inhibitors",
    "sofosbuvir",
    "RNA-dependent RNA polymerase",
    "chain terminator",
    "NS3/4A inhibitors",
    "glecaprevir",
    "grazoprevir",
    "viral protease",
    "ribavirin",
    "IMP dehydrogenase",
    "guanine nucleotides",
    "hemolytic anemia",
    "teratogen",
    "HCV replication cycle",
    "hepatocyte",
    "membranous web",
    "endoplasmic reticulum",
    "Golgi apparatus",
    "lipoprotein",
    "receptor binding",
    "endocytosis",
    "multidrug therapy",
    "nonstructural proteins",
  ],
  core: {
    what: "THE INTRO RULE (the page's opening block): chronic HCV infection is treated with multidrug therapy that targets specific steps within the HCV replication cycle — the HCV-encoded nonstructural proteins; the drugs are examples of that targeting. THE THREE NS DOORS. NS5A INHIBITORS (elbasvir, ledipasvir, pibrentasvir, velpatasvir): NS5A is a viral phosphoprotein that plays a key role in RNA replication, virion assembly, and release; the exact mechanism of the inhibitors is unknown — toxicity: headache, diarrhea. NS5B INHIBITORS (sofosbuvir): NS5B is the viral RNA-dependent RNA polymerase, and sofosbuvir acts as a CHAIN TERMINATOR, preventing viral RNA replication — toxicity: fatigue, headache. NS3/4A INHIBITORS (glecaprevir, grazoprevir): NS3/4A is a viral protease, and its inhibition prevents viral replication — toxicity: headache, fatigue. THE ALTERNATIVE DOOR: RIBAVIRIN inhibits the synthesis of guanine nucleotides by competitively inhibiting IMP DEHYDROGENASE (the IMP-to-GMP step) — toxicity: hemolytic anemia and severe teratogenicity (the pregnancy-avoid list's teratogen from M37). THE REPLICATION-CYCLE MAP (the page's figure, redrawn as this note's registry visual): the hepatocyte with its nucleus, ER, Golgi apparatus, ribosome, and the membranous web derived from ER; the HCV virion arriving with its lipoprotein for receptor binding and endocytosis; fusion, uncoating, and RNA release; the positive-sense RNA reaching the ribosome for TRANSLATION (where the NS3/4A inhibitors attach — the protease cleaves the viral polyprotein); REPLICATION on the membranous web, where the positive RNA templates a negative strand and new positives are copied (where the NS5B inhibitor sofosbuvir chain-terminates); ASSEMBLY (where the NS5A inhibitors act — the phosphoprotein's assembly-and-release roles); MATURATION through the Golgi apparatus; and RELEASE — with ribavirin's IMP-to-GMP-to-GTP strip showing the guanine-starvation door and its inhibition symbol at IMP dehydrogenase.",
    why: "This page closes the antimicrobial chapter with the cleanest target-map in modern pharmacology: three nonstructural proteins, three lifecycle steps, three drug families — and a naming system that teaches itself (the -previrs inhibit the NS3/4A protease, the -asvirs inhibit NS5A, the -buvirs inhibit NS5B the polymerase). The figure makes the mapping physical: the viral protease works at translation (the polyprotein must be cleaved to function — the same maturation logic as the HIV protease inhibitors of M38, one virus over), the RNA-dependent RNA polymerase works at replication on the membranous web (and sofosbuvir terminates its chains exactly as the NRTIs terminated HIV's reverse transcriptase — the chain-termination echo across the antiviral directory), and the NS5A phosphoprotein orchestrates RNA replication, virion assembly, and release (the one target whose mechanism the source honestly marks unknown — a teaching point about how modern drug discovery sometimes outpaces mechanism). Ribavirin then stands apart as the NON-targeted alternative: instead of a viral protein, it starves the guanine pool by blocking IMP dehydrogenase — host-biochemistry interference, which is exactly why its toxicities are host toxicities (hemolytic anemia, and the severe teratogenicity that put it on M37's avoid-in-pregnancy table with griseofulvin). Multidrug therapy by design closes the loop: combining doors at different lifecycle steps is the regimen logic, the same three-drugs-to-prevent-resistance reasoning the HIV backbone taught.",
    keyIdea:
      "Read the page by TARGET AND STEP. NS5A INHIBITORS (elbasvir, ledipasvir, pibrentasvir, velpatasvir — the -asvirs): viral phosphoprotein with key roles in RNA replication, virion assembly, and release; exact mechanism unknown; headache, diarrhea. NS5B INHIBITORS (sofosbuvir — the -buvirs): RNA-dependent RNA polymerase chain termination, preventing viral RNA replication; fatigue, headache. NS3/4A INHIBITORS (glecaprevir, grazoprevir — the -previrs): viral protease inhibition preventing viral replication; headache, fatigue. RIBAVIRIN (alternative): competitive IMP-dehydrogenase inhibition → guanine-nucleotide synthesis falls (IMP-to-GMP-to-GTP); hemolytic anemia, severe teratogen. THE CYCLE: receptor binding and endocytosis (the virion's lipoprotein) → fusion, uncoating, RNA release → translation (NS3/4A door) → replication on the membranous web, positive and negative strands (NS5B door) → assembly (NS5A door) → maturation (Golgi) → release. THE REGIMEN RULE: chronic HCV gets multidrug therapy targeting the nonstructural proteins — different steps hit at once.",
  },
  mechanisms: [
    {
      id: "ns-target-ladder",
      title: "The NS target ladder: three nonstructural proteins, three lifecycle steps, three naming families",
      context: "The DRUG/MECHANISM/TOXICITY table and the replication-cycle figure (book 200)",
      flow: {
 nodes: [
          {
            id: "trigger",
            label: "An HCV therapy question appears — drug, target, mechanism, or toxicity",
            sublabel: "Input — any DAA, the naming logic, ribavirin, or the replication-cycle map.",
            variant: "input",
          },
          {
            id: "ns34a",
            label: "THE TRANSLATION DOOR — NS3/4A inhibitors (glecaprevir, grazoprevir): the viral protease",
            sublabel: "Inhibiting NS3/4A prevents viral replication — the polyprotein cleavage step at translation; toxicity: headache, fatigue. The HIV-protease logic (M38) one virus over.",
            variant: "process",
          },
          {
            id: "ns5b",
            label: "THE REPLICATION DOOR — NS5B inhibitors (sofosbuvir): the RNA-dependent RNA polymerase",
            sublabel: "A chain terminator preventing viral RNA replication — on the membranous web where the positive RNA templates the negative strand; toxicity: fatigue, headache. The NRTI chain-termination echo.",
            variant: "process",
          },
          {
            id: "ns5a",
            label: "THE ASSEMBLY DOOR — NS5A inhibitors (elbasvir, ledipasvir, pibrentasvir, velpatasvir): the viral phosphoprotein",
            sublabel: "NS5A plays key roles in RNA replication, virion assembly, and release; the exact mechanism of its inhibitors is unknown — the honest unknown of the set; toxicity: headache, diarrhea.",
            variant: "process",
          },
          {
            id: "naming",
            label: "THE NAMING LADDER — -previr (NS3/4A protease), -asvir (NS5A), -buvir (NS5B polymerase)",
            sublabel: "The suffix tells the target: glecaprevir and grazoprevir are -previrs; elbasvir, ledipasvir, pibrentasvir, velpatasvir are -asvirs; sofosbuvir is the -buvir.",
            variant: "process",
          },
          {
            id: "route",
            label: "The regimen routing — multidrug by design",
            sublabel: "Chronic HCV: multidrug therapy targeting specific replication-cycle steps (the HCV-encoded nonstructural proteins) — different doors combined, the resistance-prevention logic the HIV backbone shares.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "ns34a", label: "translation" },
          { from: "trigger", to: "ns5b", label: "replication" },
          { from: "trigger", to: "ns5a", label: "assembly and release" },
          { from: "ns34a", to: "naming", label: "the -previrs" },
          { from: "ns5a", to: "naming", label: "the -asvirs" },
          { from: "ns5b", to: "naming", label: "the -buvirs" },
          { from: "naming", to: "route", label: "combine the doors" },
        ],
      },
    },
    {
      id: "guanine-starvation-door",
      title: "The guanine-starvation door: ribavirin at IMP dehydrogenase, and why its toxicities are host toxicities",
      context: "The ribavirin card and the figure's IMP-to-GMP-to-GTP strip (book 200)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "A ribavirin question appears — mechanism, toxicity, or pregnancy context",
            sublabel: "Input — the alternative drug, its purine-pathway target, or its teratogenicity.",
            variant: "input",
          },
          {
            id: "imp",
            label: "THE STARVATION STEP — ribavirin competitively inhibits IMP DEHYDROGENASE",
            sublabel: "The IMP-to-GMP conversion of the purine pathway is blocked; guanine nucleotide synthesis (GMP, GTP) falls — the figure prints the IMP to GMP to GTP strip with the inhibition symbol at the dehydrogenase step.",
            variant: "process",
          },
          {
            id: "host",
            label: "WHY THE TOXICITIES ARE HOST TOXICITIES — the target is host biochemistry, not a viral protein",
            sublabel: "Hemolytic anemia (the printed toxicity) and severe teratogenicity follow from interfering with host nucleotide metabolism — ribavirin is the avoid-in-pregnancy teratogen of M37's table.",
            variant: "process",
          },
          {
            id: "contrast",
            label: "THE DAA CONTRAST — the NS doors are viral targets; ribavirin's door is ours",
            sublabel: "The three NS families carry headache/diarrhea/fatigue-level toxicity profiles; the host-door drug carries hemolysis and teratogenicity — the selectivity lesson of the whole antiviral directory in one page.",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "imp", label: "the IMP-to-GMP step" },
          { from: "imp", to: "host", label: "guanine starvation" },
          { from: "host", to: "contrast", label: "viral vs host doors" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "hcv-daa-target-map",
      title: "The HCV DAA target map — the replication cycle and its drug doors (an original KYP redraw)",
      caption:
        "An original KYP redraw of the source's HCV replication-cycle figure (book 200 — vector line art printing entirely in the text layer, 0 rasters; VLM census confirmed the hepatocyte schematic with no photographs): the hepatocyte with its nucleus, ER, Golgi apparatus, ribosome, and the membranous web derived from ER; the HCV virion arriving with its lipoprotein; the cycle running receptor binding and endocytosis → fusion, uncoating, and RNA release → translation at the ribosome (the NS3/4A door: glecaprevir, grazoprevir — the viral protease) → replication on the membranous web with the positive and negative RNA strands (the NS5B door: sofosbuvir, the chain-terminating RNA-dependent RNA polymerase inhibitor) → assembly (the NS5A door: elbasvir, ledipasvir, pibrentasvir, velpatasvir — the phosphoprotein of RNA replication, virion assembly, and release) → maturation through the Golgi apparatus → release; plus the ribavirin strip — the IMP-to-GMP-to-GTP purine pathway with the competitive inhibition at IMP dehydrogenase — and the naming ladder (-previr, -asvir, -buvir) with the multidrug-by-design regimen rule.",
      notice:
        "The source figure prints as vector line art in the text layer (pdfimages: 0 rasters — the M33/M34 convention) — REDRAWN here as clean vector panels, never reproduced. No margin mnemonics exist on this page (VLM census confirmed); nothing from the source's distinctive expression is carried.",
    },
    {
      kind: "table",
      title: "Book 200 — the DAA table and the ribavirin card (carried verbatim)",
      intro:
        "The page's DRUG/MECHANISM/TOXICITY table, as printed. The text layer interleaves the columns (mechanism and toxicity text print before the drug rosters — the M38 pattern); the card reading order below is VLM-verified.",
      columns: ["CLASS · FIELD", "PRINTED CONTENT — verbatim (book 200)"],
      rows: [
        ["Hepatitis C therapy (intro block)", "Chronic HCV infection treated with multidrug therapy that targets specific steps within HCV replication cycle (HCV-encoded nonstructural proteins). Examples of drugs are provided."],
        ["NS5A inhibitors — Drugs", "Elbasvir, Ledipasvir, Pibrentasvir, Velpatasvir."],
        ["— MECHANISM", "Inhibits NS5A, a viral phosphoprotein that plays a key role in RNA replication, virion assembly, and release. Exact mechanism unknown."],
        ["— TOXICITY", "Headache, diarrhea."],
        ["NS5B inhibitors — Drugs", "Sofosbuvir."],
        ["— MECHANISM", "Inhibits NS5B, an RNA-dependent RNA polymerase acting as a chain terminator. Prevents viral RNA replication."],
        ["— TOXICITY", "Fatigue, headache."],
        ["NS3/4A inhibitors — Drugs", "Glecaprevir, Grazoprevir."],
        ["— MECHANISM", "Inhibits NS3/4A, a viral protease, preventing viral replication."],
        ["— TOXICITY", "Headache, fatigue."],
        ["Alternative drugs — Ribavirin", "Inhibits synthesis of guanine nucleotides by competitively inhibiting IMP dehydrogenase. TOXICITY: Hemolytic anemia, severe teratogen."],
      ],
      caption:
        "The four cards: the -asvirs at NS5A (the phosphoprotein of RNA replication, virion assembly, and release — mechanism honestly unknown), the -buvir sofosbuvir at NS5B (chain-terminating the RNA-dependent RNA polymerase), the -previrs at the NS3/4A protease, and ribavirin starving the guanine pool at IMP dehydrogenase with its hemolytic-anemia and severe-teratogen price.",
    },
    {
      kind: "table",
      title: "Book 200 — the replication-cycle figure's labels and drug placements (carried verbatim, reading order VLM-verified)",
      intro:
        "The figure prints as vector line art with its labels in the text layer, interleaved with the table's rosters. The reading order below is verified against the rendered page by VLM census.",
      columns: ["CYCLE STAGE · ELEMENT", "PRINTED LABELS AND DRUG PLACEMENTS — verbatim (book 200)"],
      rows: [
        ["Entry", "Receptor binding and endocytosis — HCV, Hepatocyte, Lipoprotein."],
        ["Uncoating", "Fusion, uncoating, and RNA release — Cytoplasm; (+) RNA."],
        ["Translation (the NS3/4A door)", "Ribosome; NS3/4A inhibitors: Glecaprevir, Grazoprevir."],
        ["Replication (the NS5B door)", "Membranous web (derived from ER); (+) RNA, (\u2212) RNA; NS5B inhibitors: Sofosbuvir."],
        ["Assembly and release (the NS5A door)", "Assembly; Release; Golgi apparatus; Maturation; NS5A inhibitors: Elbasvir, Ledipasvir, Pibrentasvir, Velpatasvir."],
        ["The ribavirin strip", "Ribavirin; IMP, GMP, GTP (the inhibition at IMP dehydrogenase); Nucleus, ER."],
      ],
      caption:
        "The figure's own placements: the protease inhibitors at translation, the chain terminator at replication on the membranous web, the NS5A inhibitors at assembly — and ribavirin at the nucleotide-pathway strip, the one door that targets host biochemistry rather than a viral protein.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three routing rules this page teaches",
      body:
        "Rule 1 — THE SUFFIX IS THE TARGET: -previr (glecaprevir, grazoprevir) inhibits the NS3/4A protease; -asvir (elbasvir, ledipasvir, pibrentasvir, velpatasvir) inhibits NS5A; -buvir (sofosbuvir) inhibits the NS5B RNA-dependent RNA polymerase. Read any unfamiliar HCV drug's ending and you know its door. Rule 2 — THE DOOR IS THE LIFECYCLE STEP: the protease works at translation (polyprotein cleavage — the same maturation logic as HIV's protease inhibitors), the polymerase at replication on the membranous web (chain termination — the same chemistry as the NRTIs), and the phosphoprotein at RNA replication, virion assembly, and release (mechanism honestly unknown). Rule 3 — RIBAVIRIN IS THE HOST DOOR AND PAYS THE HOST PRICE: competitive IMP-dehydrogenase inhibition starves guanine nucleotide synthesis (IMP to GMP to GTP), and its toxicities are host toxicities — hemolytic anemia and severe teratogenicity (the avoid-in-pregnancy teratogen of M37's table). Chronic HCV therapy is multidrug by design: different lifecycle steps targeted at once, the same resistance-prevention reasoning as the HIV backbone.",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 54-year-old man with chronic HCV (genotype 1a) begins a regimen that includes sofosbuvir; the team explains the drug makes the virus unable to copy its RNA.",
        discriminator: "Sofosbuvir inhibits NS5B, the RNA-dependent RNA polymerase, acting as a chain terminator",
        concept: "The replication door",
        answer:
          "NS5B is the viral RNA-dependent RNA polymerase; sofosbuvir chain-terminates it and prevents viral RNA replication (toxicity: fatigue, headache). The same chain-termination chemistry as the NRTIs at HIV's reverse transcriptase — the antiviral directory's recurring copy-door strategy, here at the membranous web where the positive RNA strand templates the negative.",
      },
      {
        stem: "A 31-year-old woman with chronic HCV is found to be 6 weeks pregnant while on a regimen that includes ribavirin; her hemoglobin has fallen from 13.1 to 9.4 g/dL with an LDH of 620 and a normal MCV.",
        discriminator: "Ribavirin — hemolytic anemia and severe teratogenicity from competitive IMP-dehydrogenase inhibition",
        concept: "The host door's price",
        answer:
          "Ribavirin inhibits guanine-nucleotide synthesis by competitively inhibiting IMP dehydrogenase (the IMP-to-GMP step) — a host-biochemistry target, which is why its toxicities are host toxicities: hemolytic anemia and severe teratogenicity. It is the teratogen on M37's avoid-in-pregnancy table; the regimen must be stopped and pregnancy counseling initiated.",
      },
      {
        stem: "An exam item lists glecaprevir, ledipasvir, and sofosbuvir and asks which nonstructural protein each inhibits.",
        discriminator: "The naming ladder: -previr = NS3/4A protease; -asvir = NS5A phosphoprotein; -buvir = NS5B polymerase",
        concept: "The suffix-is-the-target rule",
        answer:
          "Glecaprevir (a -previr) inhibits NS3/4A, the viral protease preventing viral replication (headache, fatigue); ledipasvir (an -asvir) inhibits NS5A, the viral phosphoprotein with key roles in RNA replication, virion assembly, and release — exact mechanism unknown (headache, diarrhea); sofosbuvir (the -buvir) inhibits NS5B, the RNA-dependent RNA polymerase, as a chain terminator (fatigue, headache).",
      },
    ],
    traps: [
      {
        a: "NS5A inhibitors",
        b: "NS5B inhibitors",
        whyConfused: "Adjacent nonstructural-protein numbers with similar names",
        keyDifference: "NS5A is a phosphoprotein of RNA replication, virion assembly, and release (elbasvir, ledipasvir, pibrentasvir, velpatasvir — mechanism unknown; headache, diarrhea); NS5B is the RNA-dependent RNA polymerase chain-terminated by sofosbuvir (fatigue, headache)",
        clue: "Chain terminator or polymerase in the stem → NS5B/sofosbuvir; assembly/release phosphoprotein or mechanism-unknown → NS5A/-asvirs",
      },
      {
        a: "Ribavirin",
        b: "The DAAs",
        whyConfused: "All appear on the same HCV page",
        keyDifference: "The DAAs target VIRAL nonstructural proteins (mild toxicity profiles); ribavirin targets HOST nucleotide metabolism (IMP dehydrogenase) and carries hemolytic anemia and severe teratogenicity",
        clue: "Hemolysis, teratogenicity, or IMP dehydrogenase in the stem → ribavirin; any -previr/-asvir/-buvir → the viral doors",
      },
      {
        a: "HCV NS3/4A protease inhibitors",
        b: "HIV protease inhibitors",
        whyConfused: "Same protease-inhibition logic",
        keyDifference: "NS3/4A cleaves the HCV polyprotein at translation (glecaprevir, grazoprevir; headache, fatigue; no boosting); the HIV protease (pol gene) cleaves HIV mRNA's polypeptide products at maturation (the -avirs; all boosted with ritonavir or cobicistat)",
        clue: "Boosting requirement or the -avir ending → HIV protease inhibitors; NS3/4A or the -previr ending → HCV",
      },
    ],
    pivots: [
      {
        lookAlike: "Glecaprevir vs grazoprevir vs glecaprevir/pibrentasvir combinations",
        differentiator: "Both glecaprevir and grazoprevir are NS3/4A protease inhibitors — the question tests the target, not the individual drug; combination regimens pair a -previr with an -asvir or -buvir by design",
        correctPath: "Identify the suffix → name the nonstructural protein (NS3/4A protease for -previrs; NS5A for -asvirs; NS5B for -buvirs) — the multidrug regimen combines doors at different lifecycle steps",
      },
      {
        lookAlike: "Mechanism-unknown drugs across the antimicrobial chapter",
        differentiator: "The NS5A inhibitors are the page's honest unknown (the source prints 'Exact mechanism unknown'); other unknown-mechanism mentions elsewhere are different drugs entirely",
        correctPath: "NS5A inhibitors: phosphoprotein roles in RNA replication, virion assembly, and release; exact mechanism unknown — the tested pairing is the role statement plus the unknown admission",
      },
    ],
    miniCase: {
      vignette:
        "A 29-year-old woman with chronic HCV genotype 2 infection (diagnosed 3 years ago) is 7 weeks into a ribavirin-containing regimen when a home pregnancy test is positive (estimated 6 weeks' gestation). She has felt increasingly fatigued over the past 2 weeks; hemoglobin has fallen from 12.8 to 9.6 g/dL, MCV 96, LDH elevated, haptoglobin low, and a peripheral smear shows polychromasia. The rest of her regimen includes a -buvir and an -asvir.",
      question: "Which drug explains both the hematologic picture and the urgent pregnancy counseling, and what is its mechanism?",
      options: [
        {
          label: "Ribavirin — competitive IMP-dehydrogenase inhibition; hemolytic anemia and severe teratogenicity",
          text: "The alternative drug starves guanine-nucleotide synthesis by blocking IMP dehydrogenase, and its host-biochemistry target explains its host toxicities.",
          correct: true,
          why: "Correct on both layers: the normocytic anemia with high LDH, low haptoglobin, and polychromasia is hemolysis — ribavirin's printed toxicity — and ribavirin is the severe teratogen of M37's avoid-in-pregnancy table (with griseofulvin). The mechanism: competitive inhibition of IMP dehydrogenase blocks the IMP-to-GMP step of guanine-nucleotide synthesis. Management: stop the drug immediately, obstetrics referral, and contraception counseling for the course of therapy and the washout period.",
        },
        {
          label: "Sofosbuvir — the chain terminator causing marrow suppression",
          text: "The -buvir inhibits NS5B and its toxicity is fatigue and headache.",
          why: "Wrong toxicity and wrong mechanism: sofosbuvir chain-terminates the viral RNA-dependent RNA polymerase (NS5B) with a printed profile of fatigue and headache — no hemolysis, and no teratogenicity of this severity. The -buvir suffix correctly identifies the drug but the stem's hemolysis points elsewhere.",
        },
        {
          label: "The -asvir (NS5A inhibitor) — headache and diarrhea progressing to anemia",
          text: "The NS5A inhibitor's exact mechanism is unknown, so anemia is plausible.",
          why: "Wrong door: the -asvirs' printed toxicity is headache and diarrhea; 'exact mechanism unknown' refers to the inhibition of NS5A (a viral phosphoprotein), not to host hematologic effects. The hemolytic picture and pregnancy make ribavirin the answer.",
        },
        {
          label: "The -previr (NS3/4A inhibitor) — protease-inhibitor hemolysis",
          text: "Viral protease inhibition can cause hemolytic anemia as with other protease inhibitors.",
          why: "Wrong class and wrong virus: the HCV NS3/4A inhibitors (glecaprevir, grazoprevir) carry headache and fatigue — and the boosted-protease toxicity profile (lipodystrophy, dyslipidemia) belongs to HIV's -avirs, not HCV's -previrs. A cross-class trap.",
        },
        {
          label: "Chronic HCV itself — the infection causes hemolysis in pregnancy",
          text: "HCV-related mixed cryoglobulinemia and pregnancy-related anemia explain the findings.",
          why: "True disease associations, wrong timing: the hemoglobin fall coincides exactly with 7 weeks of ribavirin therapy, and the printed toxicity of the drug in her regimen is hemolytic anemia. A true-but-not-this-mechanism distractor — the pregnancy converts it from a tolerable toxicity into an urgent contraindication.",
        },
      ],
      reasoning:
        "The two-layer stem: (1) the normocytic anemia with hemolytic markers (high LDH, low haptoglobin, polychromasia) developing 7 weeks into a ribavirin-containing regimen = the drug's printed hemolytic-anemia toxicity — the consequence of its HOST target (competitive IMP-dehydrogenase inhibition starving guanine-nucleotide synthesis, the figure's IMP-to-GMP-to-GTP strip), which is why its toxicities are host toxicities while the NS-targeting DAAs carry only headache/diarrhea/fatigue-level profiles; (2) the pregnancy at 6 weeks' gestation converts the toxicity question into a teratogenicity emergency — ribavirin is the severe teratogen of the avoid-in-pregnancy table (M37). The management: stop ribavirin immediately, confirm the hemolysis, obstetrics referral, and strict contraception for therapy plus washout. The suffix layer confirms the routing: her -buvir (NS5B chain terminator) and -asvir (NS5A phosphoprotein inhibitor) remain the viral doors; ribavirin was the host door.",
    },
  },
  mnemonics: [
    {
      code: "PREVIR, ASVIR, BUVIR",
      meaning: "The suffix is the target: -previr inhibits the NS3/4A protease (glecaprevir, grazoprevir), -asvir inhibits the NS5A phosphoprotein (elbasvir, ledipasvir, pibrentasvir, velpatasvir), and -buvir inhibits the NS5B RNA-dependent RNA polymerase (sofosbuvir).",
      memorizes: "The DAA naming logic",
      whenToUse: "Any HCV drug-to-target question, including unfamiliar drugs",
      clinical: "Read the ending, name the door: protease at translation, phosphoprotein at assembly and release, chain-terminating polymerase inhibitor at replication.",
    },
    {
      code: "TRANSLATE, COPY, ASSEMBLE",
      meaning: "The three NS doors by lifecycle step: NS3/4A blocks the polyprotein cleavage at TRANSLATION, NS5B chain-terminates the RNA COPY at replication (the membranous web), and NS5A blocks the phosphoprotein's ASSEMBLY-and-release roles.",
      memorizes: "Which nonstructural protein works at which step",
      whenToUse: "Any mechanism or figure-reading question",
      clinical: "The protease door echoes HIV's protease inhibitors (polyprotein cleavage); the polymerase door echoes the NRTIs (chain termination) — the antiviral directory's two recurring strategies.",
    },
    {
      code: "STARVE THE G",
      meaning: "Ribavirin competitively inhibits IMP dehydrogenase — the IMP-to-GMP step — so guanine nucleotide synthesis (GMP, GTP) falls; the host target explains the host price: hemolytic anemia and severe teratogenicity.",
      memorizes: "Ribavirin's mechanism and toxicity pair",
      whenToUse: "Any ribavirin, purine-pathway, or pregnancy question",
      clinical: "The severe teratogen of the avoid-in-pregnancy table (M37, with griseofulvin); strict contraception during therapy and washout; watch the hemoglobin for hemolysis.",
    },
    {
      code: "MULTIDRUG BY DESIGN",
      meaning: "Chronic HCV therapy combines doors at different lifecycle steps (the HCV-encoded nonstructural proteins) — the regimen logic itself, the same resistance-prevention reasoning as the HIV three-drug backbone.",
      memorizes: "The regimen rule",
      whenToUse: "Any regimen-construction or combination-therapy question",
      clinical: "A -previr plus an -asvir or -buvir (or both) targets translation, replication, and assembly at once; ribavirin joins as the alternative host door when the regimen calls for it.",
    },
  ],
  rapidReview: {
    s30: [
      "The intro rule: chronic HCV is treated with multidrug therapy targeting specific steps within the HCV replication cycle (the HCV-encoded nonstructural proteins)",
      "NS5A inhibitors (elbasvir, ledipasvir, pibrentasvir, velpatasvir): NS5A is a viral phosphoprotein with key roles in RNA replication, virion assembly, and release; exact mechanism unknown; headache, diarrhea",
      "NS5B inhibitors (sofosbuvir): the RNA-dependent RNA polymerase chain-terminated — prevents viral RNA replication; fatigue, headache",
      "NS3/4A inhibitors (glecaprevir, grazoprevir): the viral protease inhibited — prevents viral replication; headache, fatigue",
      "Ribavirin (alternative): competitive IMP-dehydrogenase inhibition → guanine-nucleotide synthesis falls (IMP to GMP to GTP); hemolytic anemia, severe teratogen — the pregnancy-avoid teratogen of M37's table; the replication cycle: receptor binding and endocytosis (virion + lipoprotein) → fusion, uncoating, RNA release → translation (NS3/4A door) → replication on the membranous web, positive and negative strands (NS5B door) → assembly (NS5A door) → maturation (Golgi) → release",
    ],
    m3: [
      "The naming ladder: -previr = NS3/4A protease (glecaprevir, grazoprevir); -asvir = NS5A phosphoprotein (elbasvir, ledipasvir, pibrentasvir, velpatasvir); -buvir = NS5B polymerase (sofosbuvir)",
      "The doors by step: NS3/4A at translation (polyprotein cleavage — the HIV-protease echo); NS5B at replication on the membranous web (chain termination — the NRTI echo); NS5A at assembly and release (mechanism unknown)",
      "Ribavirin: IMP-dehydrogenase competitive inhibition (host door) — hemolytic anemia + severe teratogen; contrast with the DAA viral doors' mild profiles (headache, diarrhea, fatigue)",
      "The cycle map: receptor binding and endocytosis → fusion/uncoating/RNA release → translation → replication → assembly → maturation → release, with the drug doors attached at their steps",
    ],
    m10: [
      "Census: p222 is PURE TEXT (pdfimages: 0 rasters) — the replication cycle prints as vector line art with all labels in the text layer; the VLM census confirmed the hepatocyte schematic (nucleus, ER, Golgi apparatus, ribosome, membranous web derived from ER; the virion with its lipoprotein; numbered arrows) — no photographs",
      "Drug placements VLM-verified: NS3/4A inhibitors at TRANSLATION; NS5B (sofosbuvir) at REPLICATION on the membranous web; NS5A inhibitors at ASSEMBLY; ribavirin at the IMP-to-GMP-to-GTP strip with the inhibition symbol at IMP dehydrogenase",
      "The drug rosters print TWICE (the table's DRUG column and the figure's drug boxes) — documented; the table's mechanism/toxicity text prints BEFORE the rosters (the M38 interleaving pattern)",
      "Text quirks: the banner typo MICROCIOLOGY—ANTIMICROCIALS; 'N u cle us' prints with split spacing (raw 93); the footer splits (the indd line at raw 107, the membranous-web/replication/NS5B labels printing after it, raw 109-115)",
      "No margin mnemonics on the page (VLM census confirmed); the honest unknown — 'Exact mechanism unknown' — prints in the NS5A mechanism cell and is carried verbatim",
    ],
  },
  recall: [
    {
      q: "Carry the full DAA table verbatim — each class, its drugs, mechanism, and toxicity.",
      a: "NS5A INHIBITORS (Elbasvir, Ledipasvir, Pibrentasvir, Velpatasvir): Inhibits NS5A, a viral phosphoprotein that plays a key role in RNA replication, virion assembly, and release. Exact mechanism unknown. TOXICITY: Headache, diarrhea. NS5B INHIBITORS (Sofosbuvir): Inhibits NS5B, an RNA-dependent RNA polymerase acting as a chain terminator. Prevents viral RNA replication. TOXICITY: Fatigue, headache. NS3/4A INHIBITORS (Glecaprevir, Grazoprevir): Inhibits NS3/4A, a viral protease, preventing viral replication. TOXICITY: Headache, fatigue. ALTERNATIVE DRUGS (Ribavirin): Inhibits synthesis of guanine nucleotides by competitively inhibiting IMP dehydrogenase. TOXICITY: Hemolytic anemia, severe teratogen.",
    },
    {
      q: "Walk the replication-cycle figure with its drug doors — every stage in order.",
      a: "Receptor binding and endocytosis (the HCV virion with its lipoprotein binding the hepatocyte) → Fusion, uncoating, and RNA release (into the cytoplasm; the positive-sense RNA) → Translation at the ribosome (the NS3/4A inhibitors attach here: Glecaprevir, Grazoprevir — the viral protease) → Replication on the membranous web derived from ER (the positive RNA templating the negative strand; the NS5B inhibitor attaches here: Sofosbuvir — the chain-terminating polymerase inhibitor) → Assembly (the NS5A inhibitors attach here: Elbasvir, Ledipasvir, Pibrentasvir, Velpatasvir — the phosphoprotein of RNA replication, virion assembly, and release) → Maturation through the Golgi apparatus → Release. The ribavirin strip: IMP → GMP → GTP with the competitive inhibition at IMP dehydrogenase (the host nucleotide pathway).",
    },
    {
      q: "State the intro rule and explain why multidrug therapy is the design.",
      a: "Chronic HCV infection is treated with multidrug therapy that targets specific steps within the HCV replication cycle (the HCV-encoded nonstructural proteins). The design logic: combining doors at different lifecycle steps — a protease door at translation, a polymerase door at replication, a phosphoprotein door at assembly — suppresses replication from multiple angles at once, the same resistance-prevention reasoning as the HIV three-drug backbone (2 NRTIs + an integrase inhibitor).",
    },
    {
      q: "Why are ribavirin's toxicities different in kind from the DAAs'?",
      a: "The DAAs target VIRAL nonstructural proteins (NS3/4A protease, NS5B polymerase, NS5A phosphoprotein) — foreign targets, so their toxicity profiles are mild (headache, diarrhea, fatigue). Ribavirin targets HOST biochemistry: competitive inhibition of IMP dehydrogenase blocks the IMP-to-GMP step of guanine-nucleotide synthesis (IMP → GMP → GTP), depleting the guanine pool in host cells too — hence hemolytic anemia and severe teratogenicity. It is the teratogen of the avoid-in-pregnancy table (with griseofulvin), requiring strict contraception during therapy and washout.",
    },
    {
      q: "Map the figure's drug placements to their lifecycle stages — which drug sits where, and why?",
      a: "TRANSLATION: the NS3/4A inhibitors (Glecaprevir, Grazoprevir) — the viral protease cleaves the translated polyprotein, and its inhibition prevents viral replication. REPLICATION (on the membranous web derived from ER): the NS5B inhibitor (Sofosbuvir) — the RNA-dependent RNA polymerase copies the positive RNA from a negative-strand template, and the chain terminator stops the copy. ASSEMBLY: the NS5A inhibitors (Elbasvir, Ledipasvir, Pibrentasvir, Velpatasvir) — the phosphoprotein orchestrates RNA replication, virion assembly, and release (exact mechanism unknown). THE HOST STRIP: Ribavirin at IMP to GMP to GTP — competitive IMP-dehydrogenase inhibition starving guanine-nucleotide synthesis. The remaining stages — receptor binding and endocytosis (the virion with its lipoprotein), fusion/uncoating/RNA release, maturation through the Golgi apparatus, and release — carry no printed drug door.",
    },
  ],
  related: [
    {
      title: "Hepatitis Viruses: A Through E",
      topicId: "hepatitis-viruses",
      note: "M26 mapped the hepatitis viruses and their serologies; this page prescribes for the chronic one with the curable-with-DAAs reputation — the NS-target map is the therapy layer over the virology.",
    },
    {
      title: "HIV Therapy: NRTIs Through Integrase Inhibitors",
      topicId: "hiv-therapy",
      note: "M38's directory taught the two strategies this page re-runs: protease inhibition at translation (HIV's pol-gene protease vs HCV's NS3/4A) and chain termination at the polymerase (the NRTIs vs sofosbuvir at NS5B).",
    },
    {
      title: "Antiparasitic & Non-HIV Antiviral Agents",
      topicId: "antiparasitic-antiviral",
      note: "M37's avoid-in-pregnancy table carried ribavirin as the teratogen; this page supplies its mechanism (IMP-dehydrogenase inhibition) and its hemolytic-anemia toxicity — the table's entry explained.",
    },
    {
      title: "RNA Viruses: Families & Disease Map",
      topicId: "rna-viruses",
      note: "M24 placed HCV in the +ssRNA picornavirus-like lineage; the membranous-web replication and the positive-and-negative-strand strategy this page's figure draws are that family's replication biology.",
    },
  ],
  crossLinks: [
    {
      subject: "Biochemistry (purine synthesis and nucleotide metabolism)",
      connection:
        "Ribavirin's IMP-to-GMP-to-GTP strip is the purine pathway chapter made pharmacologic: IMP dehydrogenase is the committed step of guanine synthesis, and its competitive inhibition depletes GMP and GTP — the same pathway mycophenolate targets in immunology.",
    },
    {
      subject: "Pharmacology (chain termination across the antiviral directory)",
      connection:
        "Sofosbuvir's chain termination at NS5B is the same chemistry as the NRTIs at HIV reverse transcriptase and acyclovir at the herpes DNA polymerase — one strategy, three viruses, three polymerases.",
    },
    {
      subject: "Obstetrics (teratogenicity)",
      connection:
        "Ribavirin's severe teratogenicity places it on the avoid-in-pregnancy table beside griseofulvin — every reproductive-age woman on the drug needs contraception during therapy and washout, and every pregnancy discovered on it is an urgent stop-and-refer.",
    },
    {
      subject: "Gastroenterology (chronic hepatitis management)",
      connection:
        "The DAA target map is the curative layer over chronic HCV management — the liver chapter's cirrhosis-and-hepatocellular-carcinoma surveillance questions presuppose which patients were cured and which regimens did it.",
    },
  ],
};
