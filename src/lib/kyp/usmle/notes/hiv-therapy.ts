import type { KypUsMLENote } from "../types";

// Microbiology — ANTIMICROBIALS banner (M-batch 38). Source: pdf 220-221 /
// book 198-199 (HIV therapy: the ART intro block, the five-class drug table,
// the lifecycle figure, and the prophylaxis table). Census: p220 is PURE
// TEXT (pdfimages: 0 rasters — the three-column drug table prints in the
// text layer with its columns interleaved: mechanism/adverse text prints
// before the drug rosters; VLM census verified the five row-cards and that
// the source's own mnemonics — 'Have you dined (vudine) with my nuclear
// (nucleosides) family?' and 'Navir (never) tease a protease.' — print
// INSIDE the MECHANISM cells at the bottom, and 'Enfuvirtide inhibits
// fusion.' / 'Maraviroc inhibits docking.' inside the entry-inhibitor
// mechanism cells). p221 carries the LIFECYCLE FIGURE as line art on TWO
// DECORATIVE 1x1+smask color washes (171x162 and 231x357 jpeg smasks at
// 150ppi — the M35 pattern): VLM census confirmed a schematic drawing (the
// CD4+ T CELL circle with stylized virus particles, wavy RNA/DNA lines,
// and arrows; drug-group boxes: ENTRY pink [maraviroc at ATTACHMENT,
// enfuvirtide at PENETRATION], REVERSE TRANSCRIPTASE green [NRTIs, NNRTIs],
// INTEGRASE purple [bictegravir, cabotegravir, dolutegravir, raltegravir],
// PROTEASE orange [the seven -avirs]) — NO photographs; the stage labels
// and drug rosters print in the text layer. VLM quirks documented: the
// census misread '3 drugs' as '5 drugs' and dropped the ↓ arrow in the ZDV
// pregnancy line — the TEXT LAYER is authoritative (the M23 convention).
// The prophylaxis table (CD4+ <200 → TMP-SMX → Pneumocystis; CD4+ <100 →
// TMP-SMX → Pneumocystis + toxoplasmosis) prints cleanly. Text quirks: the
// banner typo MICROCIOLOGY—ANTIMICROCIALS on both pages; '199' prints at
// raw line 5 mid-banner; the lifecycle stage labels print as separate lines
// interleaved with the drug rosters.

export const hivTherapy: KypUsMLENote = {
  id: "hiv-therapy",
  title: "HIV Therapy: NRTIs Through Integrase Inhibitors",
  subtitle:
    "The lifecycle ladder and the three-drug backbone (books 198-199). THE BACKBONE RULE — antiretroviral therapy (ART), often initiated at the time of HIV diagnosis (strongest indication with an AIDS-defining illness, low CD4+ counts [below 500 cells/mm3], or high viral load), is a three-drug regimen to prevent resistance: 2 NRTIs and preferably an integrase inhibitor; most ARTs are active against both HIV-1 and HIV-2 (the exceptions: NNRTIs and enfuvirtide are not effective against HIV-2); tenofovir + emtricitabine is the pre-exposure prophylaxis (PrEP) pair. THE FIVE LIFECYCLE DOORS — the drug classes map one-to-one onto the viral lifecycle (the page's figure, redrawn as this note's registry visual): ATTACHMENT (maraviroc binds CCR-5 on the surface of T cells and monocytes, inhibiting the interaction with gp120 — docking) and PENETRATION (enfuvirtide binds gp41, inhibiting viral entry — fusion; skin reactions at injection sites); REVERSE TRANSCRIPTION (the NRTIs — abacavir, emtricitabine, lamivudine, tenofovir, zidovudine — competitively inhibit nucleotide binding to reverse transcriptase and terminate the DNA chain, lacking a 3' OH group; tenofovir is a nucleoTide, the others nucleosides; ALL need to be phosphorylated to be active — the M37 kinase-ladder logic retold for HIV; myelosuppression reversible with G-CSF and erythropoietin, nephrotoxicity; abacavir contraindicated with the HLA-B*5701 mutation (hypersensitivity risk); ZDV for general prophylaxis and in pregnancy to reduce fetal transmission; versus the NNRTIs — doravirine, efavirenz, rilpivirine — binding reverse transcriptase at a site different from NRTIs, NOT requiring phosphorylation and not competing with nucleotides; rash and hepatotoxicity common to all, vivid dreams and CNS symptoms with efavirenz); DNA INTEGRATION (the integrase strand transfer inhibitors — bictegravir, cabotegravir, dolutegravir, raltegravir — reversibly inhibiting HIV integrase; increased creatine kinase, weight gain); and PROTEOLYTIC PROCESSING (the protease inhibitors — atazanavir, darunavir, fosamprenavir, indinavir, lopinavir, ritonavir, saquinavir — preventing maturation of new virions by blocking the HIV-1 protease [pol gene] that cleaves the polypeptide products of HIV mRNA into their functional parts; hyperglycemia, dyslipidemia, lipodystrophy syndrome, GI intolerance; ALL require boosting with ritonavir or cobicistat; rifampin — a potent CYP/UGT inducer — lowers protease inhibitor concentrations, so rifabutin is used instead; ritonavir itself, a cytochrome P-450 inhibitor, is only used as a boosting agent). THE PROPHYLAXIS TABLE — CD4+ below 200 cells/mm3: TMP-SMX for Pneumocystis pneumonia; CD4+ below 100 cells/mm3: TMP-SMX for Pneumocystis pneumonia AND toxoplasmosis.",
  subject: "Microbiology",
  system: "Section II · High-Yield General Principles — Antimicrobials",
  pilotCategory:
    "The lifecycle ladder — five drug classes on five lifecycle doors (CCR-5 docking, gp41 fusion, reverse transcription with the NRTI/NNRTI activation split, integration, protease maturation) — plus the three-drug backbone rule (2 NRTIs + an integrase inhibitor), the HIV-2 exceptions, the PrEP pair, the boosting requirement, and the CD4-count prophylaxis thresholds.",
  difficulty: 2,
  readTime: 13,
  sourceRef:
    "First Aid 2026, Part 1 pp. 198–199 (HIV therapy — the ART intro block; the NRTI, NNRTI, integrase-inhibitor, protease-inhibitor, and entry-inhibitor cards; the HIV lifecycle figure with its drug boxes; prophylaxis in HIV infection/AIDS)",
  tags: [
    "HIV therapy",
    "antiretroviral therapy",
    "ART",
    "NRTIs",
    "abacavir",
    "emtricitabine",
    "lamivudine",
    "tenofovir",
    "zidovudine",
    "AZT",
    "nucleoside analogs",
    "chain termination",
    "3-prime OH",
    "myelosuppression",
    "G-CSF",
    "erythropoietin",
    "HLA-B*5701",
    "hypersensitivity",
    "vertical transmission",
    "NNRTIs",
    "doravirine",
    "efavirenz",
    "rilpivirine",
    "vivid dreams",
    "integrase strand transfer inhibitors",
    "bictegravir",
    "cabotegravir",
    "dolutegravir",
    "raltegravir",
    "creatinine kinase",
    "weight gain",
    "protease inhibitors",
    "atazanavir",
    "darunavir",
    "fosamprenavir",
    "indinavir",
    "lopinavir",
    "ritonavir",
    "saquinavir",
    "virion maturation",
    "pol gene",
    "boosting",
    "cobicistat",
    "hyperglycemia",
    "dyslipidemia",
    "lipodystrophy",
    "rifampin interaction",
    "rifabutin",
    "entry inhibitors",
    "enfuvirtide",
    "gp41",
    "fusion",
    "maraviroc",
    "CCR-5",
    "gp120",
    "docking",
    "PrEP",
    "pre-exposure prophylaxis",
    "HIV-2",
    "Pneumocystis prophylaxis",
    "toxoplasmosis prophylaxis",
    "TMP-SMX",
  ],
  core: {
    what: "THE BACKBONE RULE (the intro block). Antiretroviral therapy is often initiated at the time of HIV diagnosis; the strongest indication is an AIDS-defining illness, low CD4+ counts (below 500 cells/mm3), or a high viral load. The regimen consists of THREE drugs to prevent resistance: 2 NRTIs and preferably an integrase inhibitor. Most ARTs are active against both HIV-1 and HIV-2 — the exceptions are the NNRTIs and enfuvirtide, which are not effective against HIV-2. Tenofovir + emtricitabine is the pre-exposure prophylaxis (PrEP) pair. THE LIFECYCLE LADDER (the figure's five drug-class doors, redrawn as the registry visual). ENTRY — ATTACHMENT: maraviroc binds CCR-5 on the surface of T cells and monocytes, inhibiting the interaction with gp120 (docking); PENETRATION: enfuvirtide binds gp41, inhibiting viral entry (fusion) — its adverse effect is skin reactions at injection sites. REVERSE TRANSCRIPTION — two doors on one enzyme: the NRTIs (abacavir [ABC], emtricitabine [FTC], lamivudine [3TC], tenofovir [TDF], zidovudine [ZDV, formerly AZT]) competitively inhibit nucleotide binding to reverse transcriptase and terminate the DNA chain — they lack a 3' OH group; tenofovir is a nucleoTide while the others are nucleosides; ALL need to be phosphorylated to be active; their adverse set is myelosuppression (reversible with granulocyte colony-stimulating factor [G-CSF] and erythropoietin) and nephrotoxicity, with abacavir contraindicated in the HLA-B*5701 mutation (increased hypersensitivity risk); ZDV can be used for general prophylaxis and during pregnancy to reduce the risk of fetal transmission. The NNRTIs (doravirine, efavirenz, rilpivirine) bind reverse transcriptase at a site different from the NRTIs — they do not require phosphorylation to be active and do not compete with nucleotides; rash and hepatotoxicity are common to all NNRTIs, with vivid dreams and CNS symptoms common with efavirenz. INTEGRATION — the integrase strand transfer inhibitors (also called integrase inhibitors; bictegravir, cabotegravir, dolutegravir, raltegravir) inhibit HIV genome integration into the host cell chromosome by reversibly inhibiting HIV integrase; adverse effects are increased creatine kinase and weight gain. PROTEOLYTIC PROCESSING — the protease inhibitors (atazanavir, darunavir, fosamprenavir, indinavir, lopinavir, ritonavir, saquinavir) prevent maturation of new virions: maturation depends on the HIV-1 protease (pol gene), which cleaves the polypeptide products of HIV mRNA into their functional parts; ALL protease inhibitors require boosting with either ritonavir or cobicistat; adverse effects are hyperglycemia, dyslipidemia, lipodystrophy syndrome, and GI intolerance (nausea, diarrhea); rifampin (a potent CYP/UGT inducer) decreases protease inhibitor concentrations — use rifabutin instead; ritonavir itself (a cytochrome P-450 inhibitor) is only used as a boosting agent. THE PROPHYLAXIS TABLE — CD4+ below 200 cells/mm3: TMP-SMX for Pneumocystis pneumonia; CD4+ below 100 cells/mm3: TMP-SMX for Pneumocystis pneumonia and toxoplasmosis.",
    why: "This page-set is the antiretroviral directory built as a MAP, and the map is the lifecycle. Every drug class sits at the lifecycle step it blocks — maraviroc at the CCR-5 dock, enfuvirtide at the gp41 fusion, the NRTIs and NNRTIs at reverse transcription, the integrase inhibitors at integration, the protease inhibitors at maturation — so a mechanism question is a lifecycle question, and a lifecycle question is a mechanism question. The reverse-transcription step carries the page's deepest split: the NRTIs are chain terminators (they lack the 3' OH and end the DNA chain) that must be phosphorylated to be active — the exact activation logic the herpes antivirals taught in M37, retold for HIV (and explaining both their selectivity and why ZDV, the oldest of them, myelosuppresses) — while the NNRTIs bind a different site, need no phosphorylation, and do not compete with nucleotides; the split is why the backbone uses TWO NRTIs (resistance needs three drugs to outrun) plus an integrase inhibitor. The protease door adds the directory's interaction layer: all protease inhibitors ride with a booster (ritonavir or cobicistat) because the class lives in the CYP450 world — and the same world is why rifampin, the M35 inducer, collapses protease inhibitor concentrations (use rifabutin), while ritonavir itself, the P-450 inhibitor, exists in modern practice only AS the booster. The entry inhibitors close the ladder at the front door — CCR-5 docking versus gp41 fusion — and the prophylaxis table anchors the immunocompromised management thresholds (Pneumocystis at CD4 below 200, toxoplasmosis added below 100) that M27's opportunists chapter previews.",
    keyIdea:
      "Read the set by LIFECYCLE DOOR. BACKBONE: 3 drugs to prevent resistance — 2 NRTIs + preferably an integrase inhibitor; ART at diagnosis (strongest indication: AIDS-defining illness, CD4+ below 500, or high viral load); NNRTIs and enfuvirtide do NOT cover HIV-2; tenofovir + emtricitabine = PrEP. DOCK: maraviroc (CCR-5, blocks gp120 interaction). FUSE: enfuvirtide (gp41; injection-site skin reactions). COPY: NRTIs (ABC, FTC, 3TC, TDF, ZDV — competitive nucleotide binding, chain termination, no 3' OH; tenofovir the nucleotide, the rest nucleosides; all phosphorylated to activate; myelosuppression [G-CSF/erythropoietin rescue] + nephrotoxicity; abacavir + HLA-B*5701 contraindicated; ZDV for prophylaxis and pregnancy) vs NNRTIs (doravirine, efavirenz, rilpivirine — different site, no phosphorylation, no nucleotide competition; rash + hepatotoxicity all, vivid dreams/CNS with efavirenz). INTEGRATE: bictegravir, cabotegravir, dolutegravir, raltegravir (reversible integrase inhibition; increased creatine kinase, weight gain). MATURE: the protease inhibitors (pol-gene protease cleavage block; hyperglycemia, dyslipidemia, lipodystrophy, GI intolerance; ALL boosted with ritonavir or cobicistat; rifampin drops their levels — use rifabutin; ritonavir is only a booster). PROPHYLAXIS: CD4+ below 200 → TMP-SMX (Pneumocystis); below 100 → TMP-SMX (Pneumocystis + toxoplasmosis).",
  },
  mechanisms: [
    {
      id: "lifecycle-door-map",
      title: "The lifecycle ladder: five drug classes on five doors of one viral cycle",
      context: "The HIV lifecycle figure with its drug boxes (book 199) and the drug table (book 198)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An HIV therapy question appears — mechanism, regimen, or adverse effect",
            sublabel: "Input — any antiretroviral class, the backbone rule, or a CD4-threshold prophylaxis stem.",
            variant: "input",
          },
          {
            id: "entry",
            label: "THE ENTRY DOORS — ATTACHMENT (maraviroc binds CCR-5, blocking the gp120 interaction) and PENETRATION (enfuvirtide binds gp41, blocking fusion)",
            sublabel: "The front-of-cycle pair: docking and fusion; enfuvirtide's price is injection-site skin reactions. Note: enfuvirtide does not cover HIV-2.",
            variant: "process",
          },
          {
            id: "rt",
            label: "THE COPY DOORS — reverse transcription: NRTIs (chain terminators lacking the 3' OH, phosphorylated to activate) vs NNRTIs (a different site, no phosphorylation, no nucleotide competition)",
            sublabel: "Tenofovir the nucleoTide; abacavir, emtricitabine, lamivudine, zidovudine the nucleosides. Myelosuppression (G-CSF/erythropoietin rescue) + nephrotoxicity; HLA-B*5701 blocks abacavir; ZDV for prophylaxis and pregnancy. NNRTIs: rash + hepatotoxicity all; efavirenz vivid dreams/CNS.",
            variant: "process",
          },
          {
            id: "integrase",
            label: "THE INTEGRATION DOOR — the integrase strand transfer inhibitors (bictegravir, cabotegravir, dolutegravir, raltegravir) reversibly inhibit HIV integrase",
            sublabel: "Genome integration into the host chromosome is blocked; adverse effects: increased creatine kinase, weight gain. The preferred third drug of the backbone.",
            variant: "process",
          },
          {
            id: "protease",
            label: "THE MATURATION DOOR — the protease inhibitors block the HIV-1 protease (pol gene) that cleaves HIV mRNA's polypeptide products into functional parts",
            sublabel: "New virions cannot mature; ALL protease inhibitors require boosting with ritonavir or cobicistat; hyperglycemia, dyslipidemia, lipodystrophy, GI intolerance; rifampin collapses their levels (use rifabutin).",
            variant: "process",
          },
          {
            id: "backbone",
            label: "THE BACKBONE RULE and the prophylaxis thresholds",
            sublabel: "3 drugs to prevent resistance: 2 NRTIs + preferably an integrase inhibitor (ART at diagnosis; AIDS-defining illness, CD4+ below 500, or high viral load the strongest indications; tenofovir + emtricitabine as PrEP). Prophylaxis: CD4+ below 200 → TMP-SMX (Pneumocystis); below 100 → TMP-SMX (Pneumocystis + toxoplasmosis).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "entry", label: "front of cycle" },
          { from: "trigger", to: "rt", label: "the copy split" },
          { from: "trigger", to: "integrase", label: "the preferred anchor" },
          { from: "trigger", to: "protease", label: "the boosted class" },
          { from: "rt", to: "backbone", label: "2 NRTIs" },
          { from: "integrase", to: "backbone", label: "+ 1 INSTI" },
          { from: "protease", to: "backbone", label: "boosted alternative" },
          { from: "entry", to: "backbone", label: "salvage additions" },
        ],
      },
    },
    {
      id: "phosphorylation-and-boosting",
      title: "The activation echo and the boosting world: phosphorylation requirements, HLA gates, CYP inducers, and the rescue levers",
      context: "The NRTI/NNRTI activation split (book 198) and the protease-inhibitor interaction set (books 198-199)",
      flow: {
        nodes: [
          {
            id: "trigger",
            label: "An activation, genetics, or drug-interaction question on the antiretrovirals",
            sublabel: "Input — phosphorylation, HLA-B*5701, G-CSF rescue, rifampin, or boosting.",
            variant: "input",
          },
          {
            id: "activation",
            label: "THE ACTIVATION ECHO — NRTIs must be phosphorylated to be active; NNRTIs require no phosphorylation",
            sublabel: "The M37 kinase-ladder logic retold: the nucleoside analogs (and tenofovir the nucleotide) enter the active form through phosphorylation; the NNRTIs' allosteric binding needs none — one reason their toxicity profile differs (rash, hepatotoxicity, efavirenz CNS).",
            variant: "process",
          },
          {
            id: "hla",
            label: "THE HLA GATE — abacavir is contraindicated in the HLA-B*5701 mutation (increased hypersensitivity risk)",
            sublabel: "The pharmacogenomic screen of the class; the myelosuppression of the NRTIs is reversible with G-CSF and erythropoietin.",
            variant: "process",
          },
          {
            id: "boosting",
            label: "THE BOOSTING WORLD — all protease inhibitors ride with ritonavir or cobicistat",
            sublabel: "Ritonavir (a cytochrome P-450 inhibitor) is only used as a boosting agent; cobicistat is the dedicated P450 inhibitor booster. The class lives in the CYP/UGT world — which is also its vulnerability.",
            variant: "process",
          },
          {
            id: "rifampin",
            label: "THE INDUCER COLLISION — rifampin (a potent CYP/UGT inducer) decreases protease inhibitor concentrations",
            sublabel: "The TB/HIV co-treatment trap: use rifabutin instead. The M35 rifampin-induction story (↑CYP450 → ↓warfarin, ↓OCPs) now drops protease inhibitors too.",
            variant: "process",
          },
          {
            id: "route",
            label: "The management routing",
            sublabel: "Screen HLA-B*5701 before abacavir · rescue NRTI myelosuppression with G-CSF/erythropoietin · boost every protease inhibitor · substitute rifabutin when TB treatment meets a protease inhibitor · prophylax by CD4 count (below 200 Pneumocystis; below 100 add toxoplasmosis).",
            variant: "output",
          },
        ],
        edges: [
          { from: "trigger", to: "activation", label: "phosphorylation" },
          { from: "trigger", to: "hla", label: "pharmacogenomics" },
          { from: "trigger", to: "boosting", label: "CYP450 inhibition" },
          { from: "trigger", to: "rifampin", label: "CYP/UGT induction" },
          { from: "activation", to: "route", label: "selectivity logic" },
          { from: "hla", to: "route", label: "the screen" },
          { from: "boosting", to: "route", label: "the co-prescription" },
          { from: "rifampin", to: "route", label: "the substitution" },
        ],
      },
    },
  ],
  blocks: [
    {
      kind: "visual",
      visualId: "hiv-drug-lifecycle-map",
      title: "The HIV drug-lifecycle map — five classes on five doors (an original KYP redraw of the lifecycle figure)",
      caption:
        "An original KYP redraw of the source's HIV lifecycle figure (book 199 — line art on two decorative color washes, VLM census confirmed: the CD4+ T CELL circle with stylized virus particles, wavy RNA/DNA lines, and stage arrows; NO photographs): the lifecycle running ATTACHMENT → PENETRATION → uncoating → reverse transcription → DNA integration → transcription → translation → proteolytic processing → packaging and assembly → budding → release, with the five drug-class doors attached at their stages (ENTRY: maraviroc at CCR-5 docking and enfuvirtide at gp41 fusion; REVERSE TRANSCRIPTASE: the NRTIs' chain termination vs the NNRTIs' different site; INTEGRASE: bictegravir, cabotegravir, dolutegravir, raltegravir; PROTEASE: the seven -avirs at proteolytic processing), the backbone rule panel (2 NRTIs + preferably an integrase inhibitor — 3 drugs to prevent resistance; ART at diagnosis; the HIV-2 exceptions; tenofovir + emtricitabine as PrEP), the boosting strip (ritonavir or cobicistat; the rifampin collision — use rifabutin), and the prophylaxis thresholds (CD4+ below 200 → TMP-SMX for Pneumocystis; below 100 → add toxoplasmosis).",
      notice:
        "The source figure is line art on decorative 1×1+smask color washes (171×162 and 231×357 jpeg smasks — the M35 pattern; VLM census confirmed a schematic drawing with no photographs) — REDRAWN here as clean vector panels, never reproduced. The source's own mnemonics ('Have you dined (vudine) with my nuclear (nucleosides) family?'; 'Navir (never) tease a protease.'; 'Enfuvirtide inhibits fusion.'; 'Maraviroc inhibits docking.') are omitted from this visual per the copyright boundary — carried only inside the note's verbatim tables.",
    },
    {
      kind: "table",
      title: "Book 198 — the ART intro block and the five drug-class cards (carried verbatim)",
      intro:
        "The page's intro block and the full three-column drug table, as printed — including the source's own mnemonics inside the mechanism cells, carried verbatim per the E38 precedent. The text layer interleaves the columns (mechanism and adverse text print before the drug rosters); the card reading order below is VLM-verified.",
      columns: ["CLASS · FIELD", "PRINTED CONTENT — verbatim (book 198)"],
      rows: [
        ["Antiretroviral therapy (intro block)", "Antiretroviral therapy (ART): often initiated at the time of HIV diagnosis. Strongest indication for use with patients presenting with AIDS-defining illness, low CD4+ cell counts (<500 cells/mm3), or high viral load. Regimen consists of 3 drugs to prevent resistance: 2 NRTIs and preferably an integrase inhibitor. Most ARTs are active against both HIV-1 and HIV-2 (exceptions: NNRTIs and enfuvirtide not effective against HIV-2). Tenofovir + emtricitabine can be administered as pre-exposure prophylaxis."],
        ["NRTIs — Drugs", "Abacavir (ABC), Emtricitabine (FTC), Lamivudine (3TC), Tenofovir (TDF), Zidovudine (ZDV, formerly AZT)."],
        ["— MECHANISM", "Competitively inhibit nucleotide binding to reverse transcriptase and terminate the DNA chain (lack a 3\u2032 OH group). Tenofovir is a nucleoTide; the others are nucleosides. All need to be phosphorylated to be active. ZDV can be used for general prophylaxis and during pregnancy to \u2193 risk of fetal transmission. [Mnemonic (source, in-cell): Have you dined (vudine) with my nuclear (nucleosides) family?]"],
        ["— ADVERSE EFFECTS", "Myelosuppression (can be reversed with granulocyte colony-stimulating factor [G-CSF] and erythropoietin), nephrotoxicity. Abacavir contraindicated if patient has HLA-B*5701 mutation due to \u2191 risk of hypersensitivity."],
        ["NNRTIs — Drugs", "Doravirine, Efavirenz, Rilpivirine."],
        ["— MECHANISM", "Bind to reverse transcriptase at site different from NRTIs. Do not require phosphorylation to be active or compete with nucleotides."],
        ["— ADVERSE EFFECTS", "Rash and hepatotoxicity are common to all NNRTIs. Vivid dreams and CNS symptoms are common with efavirenz."],
        ["Integrase strand transfer inhibitors — Drugs", "Bictegravir, Dolutegravir."],
        ["— MECHANISM", "Also called integrase inhibitors. Inhibit HIV genome integration into host cell chromosome by reversibly inhibiting HIV integrase."],
        ["— ADVERSE EFFECTS", "\u2191 creatine kinase, weight gain."],
        ["Protease inhibitors — Drugs", "Atazanavir, Darunavir, Lopinavir, Ritonavir."],
        ["— MECHANISM", "Prevents maturation of new virions. Maturation depends on HIV-1 protease (pol gene), which cleaves the polypeptide products of HIV mRNA into their functional parts. All protease inhibitors require boosting with either ritonavir or cobicistat. [Mnemonic (source, in-cell): Navir (never) tease a protease.]"],
        ["— ADVERSE EFFECTS", "Hyperglycemia, dyslipidemia, lipodystrophy syndrome, GI intolerance (nausea, diarrhea). Rifampin (potent CYP/UGT inducer) \u2193 protease inhibitor concentrations; use rifabutin instead. Ritonavir (cytochrome P-450 inhibitor) is only used as a boosting agent."],
        ["Entry inhibitors — Enfuvirtide", "Binds gp41, inhibiting viral entry. Enfuvirtide inhibits fusion. ADVERSE EFFECTS: Skin reaction at injection sites."],
        ["Entry inhibitors — Maraviroc", "Binds CCR-5 on surface of T cells/monocytes, inhibiting interaction with gp120. Maraviroc inhibits docking."],
      ],
      caption:
        "The five-class directory: the NRTI phosphorylation set (tenofovir the nucleotide; HLA-B*5701 gating abacavir; G-CSF/erythropoietin rescue; ZDV's pregnancy role), the NNRTI allosteric split (no phosphorylation; rash/hepatotoxicity; efavirenz dreams), the integrase pair (reversible inhibition; creatine kinase and weight gain), the boosted protease class (pol-gene maturation block; the rifampin collision), and the entry pair (fusion vs docking).",
    },
    {
      kind: "table",
      title: "Book 199 — the lifecycle figure's stage labels and drug boxes (carried verbatim, reading order VLM-verified)",
      intro:
        "The lifecycle figure prints as line art on decorative color washes; its stage labels and drug rosters print in the text layer, interleaved. The reading order below is verified against the rendered page by VLM census.",
      columns: ["LIFECYCLE STAGE · DOOR", "PRINTED DRUG BOXES — verbatim (book 199)"],
      rows: [
        ["ENTRY — ATTACHMENT", "Maraviroc."],
        ["ENTRY — PENETRATION", "Enfuvirtide."],
        ["REVERSE TRANSCRIPTASE — NRTIs", "Abacavir (ABC), Emtricitabine (FTC), Lamivudine (3TC), Tenofovir (TDF), Zidovudine (ZDV, formerly AZT)."],
        ["REVERSE TRANSCRIPTASE — NNRTIs", "Efavirenz, Nevirapine."],
        ["INTEGRASE", "Bictegravir, Cabotegravir, Dolutegravir, Raltegravir."],
        ["PROTEASE (a)", "Atazanavir, Darunavir, Fosamprenavir, Indinavir, Lopinavir, Ritonavir, Saquinavir."],
        ["The remaining lifecycle stages (no drug door printed)", "Uncoating → Reverse transcription → DNA integration → Transcription → Translation → Proteolytic processing → Packaging and assembly → Budding → Release."],
        ["Figure footnote", "All protease inhibitors require boosting with either ritonavir (protease inhibitor only used as a boosting agent) or cobicistat (cytochrome P450 inhibitor)."],
      ],
      caption:
        "The figure's own drug boxes: maraviroc at attachment, enfuvirtide at penetration, the NRTIs and NNRTIs at reverse transcription (the figure's NNRTI box prints efavirenz and nevirapine), the four integrase inhibitors at integration, and the seven protease inhibitors at proteolytic processing — the five doors of the ladder. (The figure's rosters differ slightly from the table page: it adds cabotegravir and raltegravir to the integrase box, fosamprenavir, indinavir, and saquinavir to the protease box, and nevirapine to the NNRTI box.)",
    },
    {
      kind: "table",
      title: "Book 199 — prophylaxis in HIV infection/AIDS (carried verbatim)",
      intro: "The CD4-count prophylaxis thresholds, as printed.",
      columns: ["CELL COUNT", "PROPHYLAXIS · INFECTION — verbatim (book 199)"],
      rows: [
        ["CD4+ <200 cells/mm3", "TMP-SMX — Pneumocystis pneumonia"],
        ["CD4+ <100 cells/mm3", "TMP-SMX — Pneumocystis pneumonia and toxoplasmosis"],
      ],
      caption:
        "The two thresholds: Pneumocystis prophylaxis begins below 200 CD4+ cells/mm3; toxoplasmosis prophylaxis is added below 100 — both with TMP-SMX, tying back to M34's folate-door drug and M27's opportunists.",
    },
    {
      kind: "callout",
      variant: "exam",
      title: "The three routing rules this page-set teaches",
      body:
        "Rule 1 — THE BACKBONE IS THREE DRUGS: 2 NRTIs + preferably an integrase inhibitor, to prevent resistance — initiated at diagnosis, with the strongest indications being an AIDS-defining illness, CD4+ below 500 cells/mm3, or a high viral load; tenofovir + emtricitabine doubles as PrEP. Remember the HIV-2 exception: NNRTIs and enfuvirtide do not cover it. Rule 2 — MECHANISM IS LIFECYCLE POSITION: maraviroc docks (CCR-5 vs gp120), enfuvirtide fuses (gp41), the NRTIs chain-terminate (no 3' OH, phosphorylation required — tenofovir the nucleoTide), the NNRTIs bind elsewhere (no phosphorylation), the integrase inhibitors block integration (reversible; creatine kinase and weight gain), and the protease inhibitors block maturation (pol-gene cleavage; hyperglycemia, dyslipidemia, lipodystrophy, GI intolerance). Rule 3 — THE CLASS LIVES IN THE CYP450 WORLD: every protease inhibitor is boosted (ritonavir or cobicistat), ritonavir survives only AS the booster, and rifampin — the potent CYP/UGT inducer — collapses protease inhibitor concentrations, so TB/HIV co-treatment swaps in rifabutin. Screen HLA-B*5701 before abacavir; rescue NRTI myelosuppression with G-CSF and erythropoietin; prophylax by CD4 count (below 200: Pneumocystis; below 100: add toxoplasmosis).",
    },
  ],
  usmle: {
    patterns: [
      {
        stem: "A 27-year-old woman with newly diagnosed HIV (CD4 380, viral load 80,000, no AIDS-defining illness) asks when treatment starts and what it will be.",
        discriminator: "ART often initiated at diagnosis — 3 drugs to prevent resistance: 2 NRTIs and preferably an integrase inhibitor",
        concept: "The backbone rule",
        answer:
          "ART is often initiated at the time of HIV diagnosis (the strongest indications: an AIDS-defining illness, CD4+ below 500 cells/mm3, or a high viral load). The regimen is three drugs to prevent resistance — 2 NRTIs plus preferably an integrase inhibitor; most ARTs cover HIV-1 and HIV-2, except the NNRTIs and enfuvirtide. Tenofovir + emtricitabine is the PrEP pair for the uninfected partner context.",
      },
      {
        stem: "A 44-year-old man on an abacavir-based regimen develops a diffuse rash with fever and constitutional symptoms two weeks after starting; genetic testing had not been performed before initiation.",
        discriminator: "Abacavir hypersensitivity in the HLA-B*5701 mutation — contraindicated; screen before prescribing",
        concept: "The HLA gate",
        answer:
          "Abacavir is contraindicated in patients with the HLA-B*5701 mutation due to increased risk of hypersensitivity — the pharmacogenomic screen of the NRTI class. The class's other printed toxicities: myelosuppression (reversible with G-CSF and erythropoietin) and nephrotoxicity; ZDV is the prophylaxis-and-pregnancy NRTI (reducing fetal transmission risk).",
      },
      {
        stem: "A 52-year-old with HIV on a ritonavir-boosted darunavir regimen is diagnosed with pulmonary tuberculosis; four-drug therapy including rifampin is planned.",
        discriminator: "Rifampin (potent CYP/UGT inducer) decreases protease inhibitor concentrations — use rifabutin instead",
        concept: "The inducer collision",
        answer:
          "Rifampin induces CYP/UGT and collapses protease inhibitor levels — the TB/HIV co-treatment trap; rifabutin substitutes. The interaction world cuts both ways: all protease inhibitors require boosting with ritonavir (the P-450 inhibitor used only as a boosting agent) or cobicistat, because the class lives in the CYP450 world.",
      },
    ],
    traps: [
      {
        a: "NRTIs",
        b: "NNRTIs",
        whyConfused: "Both act at reverse transcriptase",
        keyDifference: "NRTIs are chain terminators (competitive nucleotide binding, no 3' OH, ALL phosphorylated to activate; myelosuppression + nephrotoxicity; tenofovir the nucleotide) — NNRTIs bind a different site, need no phosphorylation, do not compete with nucleotides (rash + hepatotoxicity; efavirenz vivid dreams/CNS)",
        clue: "Phosphorylation or chain termination in the stem → NRTI; 'different site' or vivid dreams → NNRTI",
      },
      {
        a: "Enfuvirtide",
        b: "Maraviroc",
        whyConfused: "Both are entry inhibitors",
        keyDifference: "Enfuvirtide binds gp41 (fusion; injection-site skin reactions); maraviroc binds CCR-5 on T cells/monocytes (docking; blocks the gp120 interaction)",
        clue: "gp41/fusion/injection → enfuvirtide; CCR-5/docking → maraviroc",
      },
      {
        a: "Ritonavir as a drug",
        b: "Ritonavir as a booster",
        whyConfused: "It appears both in the protease-inhibitor roster and in the boosting rule",
        keyDifference: "Ritonavir is a cytochrome P-450 inhibitor used ONLY as a boosting agent in modern practice — every protease inhibitor is boosted with it (or cobicistat); it is not the antiviral workhorse of a regimen",
        clue: "'Boosted' in a regimen name (e.g., lopinavir/ritonavir) → ritonavir is there to inhibit CYP450, raising the partner's levels",
      },
    ],
    pivots: [
      {
        lookAlike: "The figure's integrase roster vs the table's integrase roster",
        differentiator: "The book-198 table prints bictegravir and dolutegravir; the book-199 figure's INTEGRASE box adds cabotegravir and raltegravir (the figure's protease box likewise adds fosamprenavir, indinavir, and saquinavir, and its NNRTI box prints efavirenz and nevirapine)",
        correctPath: "For a 'which drug is an integrase inhibitor' question, the figure's four-name roster (bictegravir, cabotegravir, dolutegravir, raltegravir) is the complete set; for the table-page questions the tested pair is bictegravir/dolutegravir",
      },
      {
        lookAlike: "PrEP vs treatment vs vertical-transmission prophylaxis",
        differentiator: "Tenofovir + emtricitabine is the PrEP pair; treatment is the 3-drug backbone (2 NRTIs + an integrase inhibitor); ZDV is the general-prophylaxis and pregnancy NRTI that reduces fetal transmission",
        correctPath: "Uninfected person at risk → PrEP (tenofovir + emtricitabine); infected person → the backbone; pregnant patient or exposure prophylaxis context → ZDV's printed role",
      },
    ],
    miniCase: {
      vignette:
        "A 47-year-old man with HIV (diagnosed 3 years ago, adherent) on a ritonavir-boosted darunavir regimen with an undetectable viral load is found to have cavitary pulmonary tuberculosis and started on RIPE therapy including rifampin. Two weeks later his HIV viral load has rebounded from undetectable to 30,000 copies/mL and his CD4 count has fallen from 410 to 290. He insists he has not missed a single dose of either regimen. His most recent absolute neutrophil count is normal.",
      question: "What caused the virologic breakthrough, and what is the correct management?",
      options: [
        {
          label: "Rifampin induced CYP/UGT and collapsed the darunavir levels — substitute rifabutin",
          text: "Rifampin is a potent CYP/UGT inducer that decreases protease inhibitor concentrations; the fixed dose was silently under-dosed as its clearance accelerated.",
          correct: true,
          why: "Correct — the classic TB/HIV co-treatment trap: the inducer (the same CYP450 induction that drops warfarin levels in M35) accelerates protease-inhibitor clearance, so the unboosted-effective level of darunavir falls below the inhibitory threshold and viremia returns despite perfect adherence. The printed fix: use rifabutin instead. (Darunavir keeps its ritonavir boost throughout — the problem is the inducer, not the booster.)",
        },
        {
          label: "Non-adherence — the rebound pattern proves missed doses",
          text: "Viral rebound on ART is most often non-adherence; directly observed therapy should be started.",
          why: "True in general, wrong here: the stem fixes adherence at both regimens and times the rebound exactly to the rifampin start — the drug-interaction mechanism is the specific, testable cause. A true-but-not-this-mechanism distractor.",
        },
        {
          label: "Protease inhibitor resistance emerged de novo",
          text: "The pol gene mutated under selection pressure, requiring a regimen change to an integrase inhibitor.",
          why: "Resistance emerges under subtherapeutic pressure — but the question asks for the cause of that subtherapeutic state, which is the rifampin induction. Note the normal-neutrophil detail also quietly excludes the NRTI myelosuppression line.",
        },
        {
          label: "Ritonavir toxicity — the booster failed",
          text: "Ritonavir's P-450 inhibition has become toxic; the boost should be withdrawn.",
          why: "Wrong direction: removing the booster would drop darunavir levels further — every protease inhibitor REQUIRES boosting with ritonavir or cobicistat; the printed rule exists precisely because the class needs the P-450 inhibition to hold therapeutic levels.",
        },
        {
          label: "TMP-SMX prophylaxis should have been started at CD4 below 500",
          text: "Pneumocystis prophylaxis was overdue, causing the decline.",
          why: "Wrong threshold and wrong drug class: TMP-SMX prophylaxis for Pneumocystis begins below CD4 200 (toxoplasmosis added below 100) — this patient was at 410 — and prophylaxis failure would present as pneumonia, not viral rebound. The prophylaxis table is the true-but-irrelevant neighbor on the same page.",
        },
      ],
      reasoning:
        "The timing layer: viral rebound exactly two weeks after rifampin starts, in an adherent patient, on a boosted protease inhibitor — the signature of the CYP/UGT induction interaction (rifampin potently induces the enzymes that clear protease inhibitors, so their concentrations fall below the therapeutic floor). The management layer: substitute rifabutin (the printed rule) and re-suppress. The secondary anchors: ritonavir stays as the booster (all protease inhibitors require boosting), resistance is a downstream consequence of the under-dosing rather than the primary event, and the CD4-200/100 prophylaxis thresholds are the page's separate management layer this case's counts place out of scope.",
    },
  },
  mnemonics: [
    {
      code: "THREE DRUGS, ONE BACKBONE",
      meaning: "The regimen is 3 drugs to prevent resistance — 2 NRTIs + preferably an integrase inhibitor — often started at diagnosis (strongest with an AIDS-defining illness, CD4+ below 500, or high viral load).",
      memorizes: "The ART backbone rule",
      whenToUse: "Any regimen-construction or treatment-initiation question",
      clinical: "Tenofovir + emtricitabine is also the PrEP pair; the NNRTIs and enfuvirtide do not cover HIV-2 — the class exception the exam tests.",
    },
    {
      code: "DOCK, FUSE, COPY, INTEGRATE, MATURE",
      meaning: "The five doors of the lifecycle ladder: maraviroc DOCKS (CCR-5 vs gp120), enfuvirtide FUSES (gp41), the NRTIs/NNRTIs COPY (reverse transcription — chain termination vs the different site), the integrase inhibitors INTEGRATE (reversible blockade), and the protease inhibitors MATURE (the pol-gene cleavage block).",
      memorizes: "Which class sits at which lifecycle step",
      whenToUse: "Any antiretroviral mechanism question",
      clinical: "KYP-original companion to the source's own cell mnemonics (which ride the verbatim tables): fusion vs docking distinguishes the entry pair; phosphorylation distinguishes the copy pair; boosting defines the maturation class.",
    },
    {
      code: "BOOST THE -AVIRS",
      meaning: "Every protease inhibitor (-avir: atazanavir, darunavir, fosamprenavir, indinavir, lopinavir, ritonavir, saquinavir) rides with a booster — ritonavir (the P-450 inhibitor used only for this) or cobicistat — and the same CYP/UGT world is why rifampin collapses their levels (swap in rifabutin).",
      memorizes: "The boosting rule and the TB interaction",
      whenToUse: "Any protease-inhibitor co-prescription or TB/HIV co-treatment question",
      clinical: "The class's toxicity set — hyperglycemia, dyslipidemia, lipodystrophy syndrome, GI intolerance — travels with the boosted world; watch for the rifampin collision in every TB co-treatment stem.",
    },
    {
      code: "THE HLA GATE AND THE MARROW RESCUE",
      meaning: "Screen HLA-B*5701 before abacavir (the hypersensitivity gate); when the NRTIs myelosuppress, the marrow is rescuable — G-CSF and erythropoietin reverse it; ZDV is the pregnancy/prophylaxis NRTI that cuts fetal transmission.",
      memorizes: "The NRTI safety layer",
      whenToUse: "Any NRTI toxicity, screening, or pregnancy question",
      clinical: "Nephrotoxicity completes the NRTI set; efavirenz adds its vivid-dreams/CNS signature on the NNRTI side of the copy door.",
    },
  ],
  rapidReview: {
    s30: [
      "The backbone: ART often at diagnosis — 3 drugs to prevent resistance (2 NRTIs + preferably an integrase inhibitor); strongest indication with AIDS-defining illness, CD4+ below 500 cells/mm3, or high viral load; most ARTs cover HIV-1 and HIV-2 except the NNRTIs and enfuvirtide; tenofovir + emtricitabine = PrEP",
      "The copy door: NRTIs (abacavir, emtricitabine, lamivudine, tenofovir, zidovudine) — competitive nucleotide binding, DNA chain termination (no 3' OH), all phosphorylated to activate (tenofovir the nucleoTide); myelosuppression (G-CSF + erythropoietin rescue), nephrotoxicity, abacavir contraindicated with HLA-B*5701, ZDV for prophylaxis and pregnancy (reduces fetal transmission) · NNRTIs (doravirine, efavirenz, rilpivirine) — different site, no phosphorylation, no nucleotide competition; rash + hepatotoxicity all; efavirenz vivid dreams/CNS",
      "The integration and maturation doors: integrase strand transfer inhibitors (bictegravir, cabotegravir, dolutegravir, raltegravir) reversibly inhibit HIV integrase — increased creatine kinase, weight gain · protease inhibitors (atazanavir, darunavir, fosamprenavir, indinavir, lopinavir, ritonavir, saquinavir) block the pol-gene protease that cleaves HIV mRNA's polypeptide products — no virion maturation; hyperglycemia, dyslipidemia, lipodystrophy, GI intolerance; ALL boosted (ritonavir or cobicistat); rifampin drops their levels — use rifabutin",
      "The entry door: enfuvirtide binds gp41 (fusion; injection-site skin reactions) · maraviroc binds CCR-5 on T cells/monocytes (docking; blocks the gp120 interaction) — neither enfuvirtide nor the NNRTIs cover HIV-2",
      "The prophylaxis thresholds: CD4+ below 200 cells/mm3 → TMP-SMX for Pneumocystis pneumonia; CD4+ below 100 → TMP-SMX for Pneumocystis pneumonia AND toxoplasmosis",
    ],
    m3: [
      "Backbone + exceptions: 3 drugs (2 NRTIs + integrase inhibitor) to prevent resistance; ART at diagnosis; NNRTIs and enfuvirtide do not cover HIV-2; tenofovir + emtricitabine as PrEP",
      "NRTIs vs NNRTIs: chain termination with phosphorylation (no 3' OH; tenofovir the nucleotide) vs a different site without phosphorylation; myelosuppression (G-CSF/erythropoietin rescue) + nephrotoxicity + HLA-B*5701 abacavir gate vs rash/hepatotoxicity + efavirenz vivid dreams",
      "Integrase + protease: reversible integrase blockade (increased creatine kinase, weight gain) vs the pol-gene maturation block (hyperglycemia, dyslipidemia, lipodystrophy, GI intolerance; all boosted with ritonavir or cobicistat; rifampin collision — use rifabutin; ritonavir only a booster)",
      "Entry + thresholds: enfuvirtide (gp41, fusion, injection-site reactions) and maraviroc (CCR-5, docking); Pneumocystis prophylaxis below CD4 200, toxoplasmosis added below 100 — TMP-SMX for both",
    ],
    m10: [
      "Census: p220 is PURE TEXT (0 rasters — the three-column table prints with its columns interleaved: mechanism/adverse text before the drug rosters; the five row-cards VLM-verified); p221's lifecycle figure is LINE ART on two decorative 1x1+smask color washes (171x162 and 231x357 jpeg smasks, the M35 pattern — VLM census confirmed a schematic: the CD4+ T CELL circle, stylized virus particles, wavy RNA/DNA lines, stage arrows, and four colored drug-group boxes [ENTRY pink, REVERSE TRANSCRIPTASE green, INTEGRASE purple, PROTEASE orange]; NO photographs)",
      "VLM quirks documented: the p220 census misread '3 drugs' as '5 drugs' and dropped the ↓ arrow in the ZDV pregnancy line — the TEXT LAYER is authoritative (the M23 convention)",
      "The source's own mnemonics print INSIDE the mechanism cells ('Have you dined (vudine) with my nuclear (nucleosides) family?' in the NRTI cell; 'Navir (never) tease a protease.' in the protease cell) and inside the entry-inhibitor cells ('Enfuvirtide inhibits fusion.' / 'Maraviroc inhibits docking.') — carried ONLY in the verbatim tables per the E38 precedent",
      "The figure's rosters differ from the table page: the figure's INTEGRASE box adds cabotegravir and raltegravir; its PROTEASE box adds fosamprenavir, indinavir, and saquinavir; its NNRTI box prints efavirenz and nevirapine (nevirapine prints ONLY in the figure, not the book-198 table)",
      "Text quirks: the banner typo MICROCIOLOGY—ANTIMICROCIALS on both pages; '199' prints mid-banner (raw line 5); the lifecycle stage labels print as separate lines interleaved with the drug rosters (Uncoating → Reverse transcription → DNA integration → Transcription → Translation → Proteolytic processing → Packaging and assembly → Budding → Release)",
    ],
  },
  recall: [
    {
      q: "State the ART backbone rule verbatim, including the HIV-2 exceptions and the PrEP pair.",
      a: "Antiretroviral therapy (ART): often initiated at the time of HIV diagnosis. Strongest indication for use with patients presenting with AIDS-defining illness, low CD4+ cell counts (<500 cells/mm3), or high viral load. Regimen consists of 3 drugs to prevent resistance: 2 NRTIs and preferably an integrase inhibitor. Most ARTs are active against both HIV-1 and HIV-2 (exceptions: NNRTIs and enfuvirtide not effective against HIV-2). Tenofovir + emtricitabine can be administered as pre-exposure prophylaxis.",
    },
    {
      q: "Carry the NRTI card verbatim — drugs, mechanism (with the source's own mnemonic), and adverse effects.",
      a: "DRUGS: Abacavir (ABC), Emtricitabine (FTC), Lamivudine (3TC), Tenofovir (TDF), Zidovudine (ZDV, formerly AZT). MECHANISM: Competitively inhibit nucleotide binding to reverse transcriptase and terminate the DNA chain (lack a 3' OH group). Tenofovir is a nucleoTide; the others are nucleosides. All need to be phosphorylated to be active. ZDV can be used for general prophylaxis and during pregnancy to ↓ risk of fetal transmission. [Source's own mnemonic: Have you dined (vudine) with my nuclear (nucleosides) family?] ADVERSE EFFECTS: Myelosuppression (can be reversed with granulocyte colony-stimulating factor [G-CSF] and erythropoietin), nephrotoxicity. Abacavir contraindicated if patient has HLA-B*5701 mutation due to ↑ risk of hypersensitivity.",
    },
    {
      q: "Carry the protease inhibitor card verbatim — mechanism (with the source's own mnemonic) and the full adverse/interaction set.",
      a: "MECHANISM: Prevents maturation of new virions. Maturation depends on HIV-1 protease (pol gene), which cleaves the polypeptide products of HIV mRNA into their functional parts. All protease inhibitors require boosting with either ritonavir or cobicistat. [Source's own mnemonic: Navir (never) tease a protease.] ADVERSE EFFECTS: Hyperglycemia, dyslipidemia, lipodystrophy syndrome, GI intolerance (nausea, diarrhea). Rifampin (potent CYP/UGT inducer) ↓ protease inhibitor concentrations; use rifabutin instead. Ritonavir (cytochrome P-450 inhibitor) is only used as a boosting agent. (Figure roster: Atazanavir, Darunavir, Fosamprenavir, Indinavir, Lopinavir, Ritonavir, Saquinavir; table roster: Atazanavir, Darunavir, Lopinavir, Ritonavir.)",
    },
    {
      q: "Separate the two entry inhibitors and give the figure's drug boxes at each lifecycle door.",
      a: "ENTRY — ATTACHMENT: Maraviroc (binds CCR-5 on surface of T cells/monocytes, inhibiting interaction with gp120 — docking). ENTRY — PENETRATION: Enfuvirtide (binds gp41, inhibiting viral entry — fusion; skin reaction at injection sites). REVERSE TRANSCRIPTASE: NRTIs (Abacavir, Emtricitabine, Lamivudine, Tenofovir, Zidovudine) and NNRTIs (Efavirenz, Nevirapine). INTEGRASE: Bictegravir, Cabotegravir, Dolutegravir, Raltegravir. PROTEASE: Atazanavir, Darunavir, Fosamprenavir, Indinavir, Lopinavir, Ritonavir, Saquinavir. Figure footnote: All protease inhibitors require boosting with either ritonavir (protease inhibitor only used as a boosting agent) or cobicistat (cytochrome P450 inhibitor).",
    },
    {
      q: "Give the prophylaxis table and explain the rifampin-protease inhibitor interaction.",
      a: "PROPHYLAXIS IN HIV INFECTION/AIDS: CD4+ <200 cells/mm3 → TMP-SMX → Pneumocystis pneumonia. CD4+ <100 cells/mm3 → TMP-SMX → Pneumocystis pneumonia and toxoplasmosis. THE INTERACTION: Rifampin is a potent CYP/UGT inducer that decreases protease inhibitor concentrations (risking virologic breakthrough in TB/HIV co-treatment) — use rifabutin instead; all protease inhibitors still require their boost (ritonavir or cobicistat), and ritonavir itself — a cytochrome P-450 inhibitor — is only used as that boosting agent.",
    },
  ],
  related: [
    {
      title: "HIV & AIDS: Virology Through Opportunists",
      topicId: "hiv-aids",
      note: "M27 mapped the virus and the CD4-count opportunists; this page-set prescribes for them — the lifecycle doors are the drugs, and the CD4 200/100 thresholds are where the prophylaxis table meets the opportunists roster.",
    },
    {
      title: "Antiparasitic & Non-HIV Antiviral Agents",
      topicId: "antiparasitic-antiviral",
      note: "M37 built the kinase-activation ladder; the NRTIs re-run it for HIV (all phosphorylated to activate — tenofovir the nucleotide), and foscarnet's HIV reverse transcriptase inhibition bridges directly into this directory.",
    },
    {
      title: "Antimycobacterial Therapy",
      topicId: "antimycobacterials",
      note: "M35's rifampin — the potent CYP/UGT inducer — returns here in its most-tested collision: it drops protease inhibitor concentrations, and rifabutin substitutes in TB/HIV co-treatment.",
    },
    {
      title: "Hepatitis C Therapy: DAAs",
      topicId: "hcv-therapy",
      note: "M39 closes the antimicrobials chapter with the HCV NS3/4A-NS5A-NS5B target map — the antiviral target-thinking taken to the direct-acting agent level.",
    },
  ],
  crossLinks: [
    {
      subject: "Pharmacology (CYP450 induction and inhibition)",
      connection:
        "The protease inhibitor class lives entirely inside the CYP450 world: ritonavir inhibits it (and is used only as a booster), cobicistat inhibits it, and rifampin induces CYP/UGT to collapse PI levels — the same polarity pair the antifungals (azoles vs griseofulvin) and antimycobacterials (rifampin vs INH) taught, now with regimen-failure consequences.",
    },
    {
      subject: "Biochemistry (nucleoside and nucleotide chemistry)",
      connection:
        "The NRTI chain-termination mechanism is pure nucleic-acid chemistry: the missing 3' OH ends the DNA chain, and the nucleoside/nucleotide split (phosphorylation state) is the same distinction the biochemistry chapter's nucleotide metabolism draws — with the activation requirement (all phosphorylated) the herpes-antiviral ladder of M37 retold.",
    },
    {
      subject: "Immunology (CD4 counts and opportunistic prophylaxis)",
      connection:
        "The prophylaxis thresholds — Pneumocystis below CD4 200, toxoplasmosis added below 100 — operationalize the immunology chapter's T-cell counting for daily management, tying the opportunists roster to a prescribing action.",
    },
    {
      subject: "Genetics (pharmacogenomics)",
      connection:
        "Abacavir's HLA-B*5701 contraindication is pharmacogenomics in practice — a genetic screen that gates a prescription, the same personalized-medicine logic the HLA associations teach across the curriculum.",
    },
  ],
};
